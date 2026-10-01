# Libretto Architecture & Technical Design

## 1. Executive Summary & Design Philosophy

**Libretto** is an interactive, browser-based pedagogical study environment for classical opera libretti. It pairs full, unabridged original libretto texts (including complete 18th- and 19th-century spoken dialogue scenes) with line-by-line literal translations, word-by-word tokenized grammatical breakdowns, and character voice attributions.

### Core Architectural Principles

1. **Zero-Backend / Zero-Database Architecture**:
   - All text, linguistic tokens, and theatrical metadata are statically compiled into typed TypeScript data structures.
   - **Why?** Eliminates server maintenance, database costs, network latency, and connection dropouts. The entire multi-thousand-line opera library loads into memory in milliseconds, allowing instant instantaneous filtering, search, and token inspection with zero network round-trips.
2. **Platform & Harness Agnosticism (Zero Lock-in)**:
   - Built on open standards: standard React 18, Vite, TypeScript, Tailwind CSS, and Web Speech API.
   - No proprietary cloud SDKs or harness-specific dependencies. The repository can be cloned and built instantly on any machine using standard `npm run build`, and edited in any editor (VS Code, Cursor, Claude Code, Antigravity, Neovim, etc.).
3. **Data Integrity & Typographic Completeness**:
   - Operas are stored in complete, unabridged form—preserving historical spoken dialogue (such as Emanuel Schikaneder's complete 1791 dialogue in *Die Zauberflöte*) and unbowdlerized stage directions.
   - Every word token includes grammatical and morphological data to enable deep language acquisition.

---

## 2. Domain Data Model (`src/types/libretto.ts`)

The application's hierarchical data model represents the theatrical and linguistic structure of an opera:

```
Opera
 └── Character[]
 └── Act[]
      └── Scene[]
           └── Cue[] (Spoken/Sung dialogue unit)
                └── Line[]
                     └── Token[] (Word-by-word breakdown)
```

### TypeScript Interface Definitions

```typescript
export interface Token {
  id: string;
  original: string;              // The exact printed word (e.g. "Zu")
  normalized: string;            // Cleaned lowercase form for dictionary lookup (e.g. "zu")
  lemma: string;                 // Dictionary headword (e.g. "zu")
  partOfSpeech: PartOfSpeech;    // noun | verb | adjective | pronoun | adverb | ...
  literalTranslation: string;    // Direct literal word-for-word equivalent (e.g. "to")
  contextualMeaning?: string;    // Meaning in this specific poetic context
  grammarNote?: string;          // Deep grammatical or historical insight
}

export interface Line {
  id: string;
  originalText: string;          // Complete source line in foreign language
  translation: string;           // Direct, syntax-faithful literal English translation
  tokens: Token[];               // Word-by-word breakdown
  notes?: string;                // Line-level poetic or dramatic note
}

export interface Cue {
  id: string;
  speaker: string;               // Character name (e.g. "Tamino", "Papageno")
  characterId?: string;          // Link to Opera character profile
  stageDirection?: string;       // Stage action occurring before/during cue
  stageDirectionTranslation?: string;
  lines: Line[];                 // One or more lines spoken/sung in this cue
}

export interface Scene {
  sceneNumber: number;
  title: string;                 // e.g. "Erster Auftritt" / "Scena I"
  setting?: string;              // Dramaturgical setting / scenery
  originalSetting?: string;      // Original German/Italian stage description
  cues: Cue[];                   // Ordered sequence of dialogue cues
}

export interface Act {
  actNumber: number;
  title: string;                 // e.g. "Act I"
  setting?: string;
  originalSetting?: string;
  scenes: Scene[];
}

export interface Character {
  name: string;
  voiceType: VoiceType;          // 'Soprano' | 'Mezzo-Soprano' | 'Tenor' | 'Baritone' | 'Bass' | ...
  description?: string;
}

export interface Opera {
  id: string;
  title: string;                 // English display title
  originalTitle: string;         // Original language title
  composer: string;
  librettists: string[];
  language: 'de' | 'it' | 'fr' | 'ru' | 'en';
  languageLabel: string;
  year: number;
  sourceCitation: string;
  sourceUrl?: string;
  sourceName?: string;
  publicDomainNotice: string;
  synopsis: string;
  characters: Character[];
  acts: Act[];
}
```

---

## 3. Application State & Component Hierarchy

### Component Architecture

```
App.tsx (Root State, Audio Controller, Layout Manager)
 ├── Navbar.tsx (Opera selector, act/scene shortcuts, theme switcher, search bar)
 ├── DualColumnReader.tsx (Virtual scrolling libretto reader)
 │    ├── Scene Header & Stage Directions
 │    └── Cue View
 │         ├── Speaker Badge & Voice Type
 │         └── Line Pair View (Original vs Translation)
 │              └── Interactive Word Token Spans
 ├── LinguisticInspector.tsx (Right-side slideout / desktop panel for selected word)
 ├── TableOfContentsModal.tsx (Structured scene navigation modal)
 ├── VoiceSettingsModal.tsx (TTS voice picker, rate, pitch, and preview)
 └── AboutModal.tsx (Historical context, public domain notices, and documentation)
```

### State Management Strategy

All core state resides in `App.tsx` and flows downward through typed React props:

- `currentOperaId`: Identifier of the selected opera (defaults to `'die-zauberfloete'`, persisted in `localStorage`).
- `currentActIndex`, `currentSceneIndex`: Pointer to active act and scene.
- `activeLineId`: ID of the line currently focused or spoken by the audio narrator.
- `selectedToken`: The `Token` object currently active in the `LinguisticInspector`.
- `theme`: Active color theme (`'night'`, `'sepia'`, `'parchment'`, `'ivory'`, `'contrast'`).
- `fontSizeMultiplier`: Scale factor (`0.85` to `1.35`) for responsive readability.
- `searchQuery`: Live text filter matching character names, foreign lines, or English translations.

---

## 4. Web Speech Audio Engine (`src/utils/speech.ts`)

Libretto includes a client-side narration system utilizing the browser's native **HTML5 Web Speech API** (`window.speechSynthesis`).

### Key Implementation Details

1. **Voice Discovery & Selection**:
   - Browsers asynchronously load voices. `initSpeech()` listens to the `voiceschanged` event.
   - Operas provide their ISO language code (`de`, `it`). `getBestVoiceForLanguage()` ranks available system voices, prioritizing premium neural/natural voices (e.g. Google Deutsch, Apple Anna/Martin, Microsoft Stefan) over generic fallbacks.
2. **Utterance Lifecycle**:
   - `speakLine(text, language, onStart, onEnd)` manages the current `SpeechSynthesisUtterance`.
   - Automatic cleanup cancels prior utterances when navigating between cues or changing scenes to prevent speech overlap.
3. **Voice Customization**:
   - `VoiceSettingsModal` allows users to pick their preferred voice per language and calibrate speech rate (e.g., 0.8x for pedagogical clarity).

---

## 5. Data Pipeline & Corpus Synthesis Architecture

The transformation of raw historical texts into fully structured, tokenized datasets follows a multi-stage compilation pipeline located in `scripts/`:

```
1. Raw Historical Source (Zeno.org, LibrettoArchive, NMA)
       │
       ▼
2. parse_<opera>_clean.py (Regex & structural segmentation into acts, scenes, and cues)
       │
       ▼
3. build_<opera>_lexicon.py (Extraction of all distinct word tokens & morphological lemmas)
       │
       ▼
4. Linguistic Enrichment (Lemma mapping, parts of speech, syntax-faithful literal glosses)
       │
       ▼
5. synthesize_<opera>_corpus.py (Assembly of tokens into lines, cues, scenes, and acts)
       │
       ▼
6. emit_<opera>_ts.py (Code generator writing typed TypeScript modules into src/data/<opera>/)
```

### Separation of Concerns in `src/data/`

Each opera is partitioned into its own directory:
- `src/data/<opera>/index.ts`: Opera metadata, synopsis, character catalog, and act assembly.
- `src/data/<opera>/act1.ts`, `act2.ts`, ...: Typed act definitions containing scenes, cues, lines, and tokens.
- `src/data/operas.ts`: Master catalog exporting `OPERA_CATALOG` and `getOperaById(id)`.

---

## 6. Build & Bundling Analysis

### Current Production Profile
- **Bundler**: Vite 6 / Rollup
- **TypeScript**: TS 5.8 with `noEmit: true` for build-time type verification.
- **Output Bundle**:
  - `dist/index.html`: ~1.35 kB
  - `dist/assets/index.css`: ~34.5 kB
  - `dist/assets/index.js`: ~2.69 MB unminified (~699 kB gzipped)

### Scalability & Roadmap
Because all 4 operas (totalling over 5,000 lines of fully tokenized dialogue) are compiled directly into the client bundle, the gzipped payload is ~700 kB. For mobile or slower network environments, the planned roadmap introduces dynamic `import()` code-splitting to load individual opera acts on-demand when selected.

---

## 7. Deployment Configuration

### Static Hosting Compatibility
Libretto produces 100% static assets (`HTML`, `JS`, `CSS`) in `dist/`. It requires no Node.js runtime on the server and is zero-config deployable to:
- **Vercel**: Instant deployment via GitHub integration.
- **Netlify**: Set build command `npm run build` and publish directory `dist`.
- **Cloudflare Pages**: Set framework preset to `Vite`.
- **GitHub Pages**: Build and push to `gh-pages` branch.

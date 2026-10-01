# Libretto Project Map & Directory Index

This document provides an exhaustive, structured map of all files and directories in the **Libretto** repository to guide both human developers and autonomous AI coding agents.

---

## Root Configuration & Documentation

| Path | Purpose |
| :--- | :--- |
| `README.md` | User-facing documentation, feature guide, quickstart, and hosting instructions. |
| `ARCHITECTURE.md` | Deep technical architecture, data model specifications, state management, and build profiles. |
| `PROJECT_MAP.md` | *This file.* Comprehensive directory and file-level catalog. |
| `CHANGELOG.md` | Chronological record of major releases, corpus additions, and architectural milestones. |
| `KNOWN_ISSUES.md` | Documented open items, performance considerations, and upcoming feature roadmap. |
| `index.html` | SPA entry point, Google Fonts loading (Cinzel, Inter), and root DOM anchor (`#root`). |
| `package.json` | Project metadata, scripts (`dev`, `build`, `preview`), and dependency declarations. |
| `package-lock.json` | Deterministic lockfile for Node.js dependencies. |
| `tsconfig.json` | TypeScript compiler configuration (ES2022 target, React JSX, strict type checks). |
| `vite.config.ts` | Vite configuration with `@vitejs/plugin-react`. |
| `.gitignore` | Exclusion rules for build artifacts (`dist/`), dependencies (`node_modules/`), and OS caches. |

---

## Application Source (`src/`)

```
src/
├── main.tsx                      # Mounts React DOM tree to #root
├── App.tsx                       # Root application container & primary layout
├── index.css                     # Tailwind CSS imports & theme CSS custom properties
├── types/
│   └── libretto.ts               # Core TypeScript definitions (Opera, Act, Cue, Line, Token)
├── components/
│   ├── Navbar.tsx                # Top navigation header, opera selector, search & theme controls
│   ├── DualColumnReader.tsx      # Main libretto reading surface with token highlight & TTS buttons
│   ├── LinguisticInspector.tsx   # Word-by-word morphological inspector & grammatical notes panel
│   ├── TableOfContentsModal.tsx  # Act & scene navigation modal
│   ├── VoiceSettingsModal.tsx    # Web Speech API voice picker and playback rate settings
│   └── AboutModal.tsx            # Dramaturgical overview, source citations & public domain details
├── utils/
│   └── speech.ts                 # Web Speech API synthesizer wrapper and voice ranking logic
└── data/
    ├── operas.ts                 # Master opera catalog registry & getOperaById helper
    ├── dieZauberfloete/          # Mozart's Die Zauberflöte (1791)
    │   ├── index.ts              # Opera metadata, synopsis, character roster, act array
    │   ├── act1.ts               # Complete Act I (15 scenes, unabridged spoken dialogue)
    │   └── act2.ts               # Complete Act II (30 scenes, unabridged spoken dialogue)
    ├── falstaff/                 # Verdi's Falstaff (1893)
    │   ├── index.ts              # Opera metadata, character roster, act array
    │   ├── act1.ts               # Complete Act I (Part 1 & Part 2)
    │   ├── act2.ts               # Complete Act II (Part 1 & Part 2)
    │   └── act3.ts               # Complete Act III (Part 1 & Part 2)
    ├── fidelio/                  # Beethoven's Fidelio (1814)
    │   ├── index.ts              # Opera metadata, synopsis, character roster
    │   ├── act1.ts               # Complete Act I (16 scenes with spoken dialogue)
    │   └── act2.ts               # Complete Act II (dungeon scenes & finale)
    ├── tannhaeuser/              # Wagner's Tannhäuser (1845)
    │   ├── index.ts              # Opera metadata, synopsis, character roster
    │   ├── act1.ts               # Complete Act I (Venusberg & valley)
    │   ├── act2.ts               # Complete Act II (Wartburg song contest)
    │   └── act3.ts               # Complete Act III (Pilgrims' return & Rome narration)
    └── samples/                  # Historical bootstrap stubs for future repertoire expansion
        ├── carmen.ts             # Bizet's Carmen (French)
        ├── eugeneOnegin.ts       # Tchaikovsky's Eugene Onegin (Russian)
        ├── laBoheme.ts           # Puccini's La Bohème (Italian)
        └── piratesOfPenzance.ts  # Gilbert & Sullivan's Pirates of Penzance (English)
```

---

## Static Assets (`public/`)

| Path | Purpose |
| :--- | :--- |
| `public/vite.svg` | Default Vite icon asset. |

---

## Data Pipeline & Ingestion Tooling (`scripts/`)

The `scripts/` directory houses Python tools used to scrape public domain sources, clean dialogue text, tokenize words, perform grammatical tagging, and generate TypeScript data files:

### Primary Generators & Emitters
- `scripts/update_zauberfloete_corpus.py`: Generates `src/data/dieZauberfloete/act1.ts` and `act2.ts` incorporating the complete 1791 Schikaneder spoken dialogue.
- `scripts/emit_falstaff_ts.py`: Compiles Italian Boito corpus into `src/data/falstaff/act[1-3].ts`.
- `scripts/emit_tannhaeuser_ts.py`: Compiles Wagnerian corpus into `src/data/tannhaeuser/act[1-3].ts`.
- `scripts/emit_fidelio_perfect_ts.py`: Compiles Beethoven corpus into `src/data/fidelio/act[1-2].ts`.

### Lexicon & Grammar Databases
- `scripts/german_master_lexicon.json`: Curated dictionary of German lemmas, parts of speech, and literal translations.
- `scripts/large_italian_vocab.json`: Curated Italian lexicon for Boito's archaic and poetic vocabulary.
- `scripts/tannhaeuser_full_lexicon.json`: Wagnerian specialized vocabulary and archaic inflections.

### Historical Scrapes & Raw Corpora
- Raw HTML files (`fidelio_raw.html`, `tannhaeuser_raw.html`, `zauberfloete_raw.html`) downloaded from public domain historical archives.
- Parsed JSON corpora (`zauberfloete_parsed.json`, `falstaff_parsed.json`, `tannhaeuser_clean_corpus.json`, `fidelio_perfect_corpus.json`).

### Archived Scratch Files (`scripts/archive/`)
- Contains early prototype generation scripts (`generate_flute*.py`, `generate_unabridged_act1.py`) preserved for historical reference.

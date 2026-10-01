# Libretto: To-Do, In-Progress & Unfinished Features

This document tracks identified shortcomings, in-progress enhancements, and future architectural priorities for the **Libretto** project.

---

## 1. High Priority: Search & Discovery Overhaul

### [x] COMPLETED (v1.0.1): Opera-Wide Search with Jump Navigation
- Implemented real-time multi-act, multi-scene search across all lines, speaker names, and word tokens.
- Added interactive popover results dropdown in `Navbar.tsx` displaying act/scene tags, character badges, and snippets.
- Added smooth scroll and automatic cue focus when jumping directly to matching lines.

### [ ] Remaining Search Enhancements:
- Visual search term highlighting (yellow highlight on matching words in the reader).
- Character filter chips (e.g. "Only Papageno's cues").

---

## 2. High Priority: Opera Catalog & Composer Presentation

### [x] COMPLETED (v1.0.1): Composer & Title Attribution in Navbar
- Enhanced opera selector dropdown in `Navbar.tsx` to prominently show Composer, Original Title, English Title, and Language.

### [ ] Planned Catalog Enhancements:
- Dedicated Opera Library Gallery Modal with composer portraits, synopsis previews, and historical era filters.
- Grouping by composer or language with `<optgroup>` tags as repertoire grows beyond 10 operas.

---

## 3. Pedagogical & Rehearsal Features

### 3.1 "Performance Cut" / Audio Recording Mode
- **Background**: Commercial recordings and modern theatrical productions routinely cut large portions of spoken German dialogue (in *Die Zauberflöte* and *Fidelio*). When listening to an audio recording, users encounter hundreds of lines of text that are omitted on the album.
- **Proposed Feature**: A toggle switch (`All Dialogue` vs. `Arias & Musical Numbers Only`).
  - When in *Arias Only* mode, spoken dialogue scenes are collapsed or dimmed, allowing users to seamlessly follow along with audio recordings.

### 3.2 International Phonetic Alphabet (IPA) Transcription
- **Background**: Classical singers and vocal coaches rely heavily on standardized IPA transcriptions (following the methodology of Nico Castel and John Moriarty) to master vowel purity, open vs. closed vowels, and German glottal stops.
- **Proposed Feature**:
  - Add an optional `ipa` field to every line and token.
  - Add an "IPA" toggle in the reader that renders the phonetic pronunciation directly below the original foreign line.

### 3.3 Public Domain Audio Synchronization
- **Background**: Currently, audio is synthesized on the fly via the browser's Web Speech API (TTS). While helpful for pronunciation, TTS lacks operatic singing and orchestral accompaniment.
- **Proposed Feature**:
  - Link public domain historic recordings (from the Internet Archive and Musopen).
  - Add line-by-line timestamp synchronization so the reader automatically scrolls in time with a live recording.

---

## 4. Pipeline & Developer Tooling

### 4.1 Unified CLI Importer Tool (`scripts/import_opera.py`)
- **Current State**: Adding new operas currently relies on custom Python scripts (`parse_falstaff_full.py`, `build_fidelio_word_lexicon.py`, etc.).
- **Proposed Solution**: Create a standardized CLI tool:
  ```bash
  python3 scripts/import_opera.py \
    --source "scripts/don_giovanni_raw.html" \
    --language "it" \
    --id "don-giovanni" \
    --title "Don Giovanni" \
    --composer "Wolfgang Amadeus Mozart" \
    --year 1787
  ```
  - Automatically identifies character speech patterns.
  - Automatically queries the master lemma dictionary.
  - Generates `src/data/donGiovanni/index.ts` and `act[1-2].ts`.

### 4.2 Dynamic Code-Splitting (`React.lazy` / Dynamic `import()`)
- **Current State**: All 4 operas (~5,100 lines and 45,000+ tokens) are compiled into the main bundle (`index-*.js`, ~700 kB gzip). Vite displays a build-time chunk warning.
- **Proposed Solution**:
  - Split each opera into an on-demand async module:
    ```typescript
    const OPERA_LOADERS: Record<string, () => Promise<{ default: Opera }>> = {
      'die-zauberfloete': () => import('./dieZauberfloete'),
      'falstaff': () => import('./falstaff'),
      'tannhaeuser': () => import('./tannhaeuser'),
      'fidelio': () => import('./fidelio')
    };
    ```
  - This reduces the initial bundle size from 700 kB down to ~150 kB, downloading each opera only when selected by the user.

### 4.3 Web App Self-Service Importer ("Add Opera in Browser")
- **The Vision**: Allow end-users visiting the web app to add custom operas without needing Python, a terminal, or Antigravity.
- **Architecture Without a Backend**:
  1. **Client-Side Storage (`IndexedDB`)**:
     - The browser has a built-in persistent storage engine (`IndexedDB`) capable of storing hundreds of megabytes of JSON locally.
     - Custom imported operas are loaded alongside `OPERA_CATALOG` in React state.
  2. **Tier 1: Drag-and-Drop / Paste JSON**:
     - A simple modal where users upload an `opera.json` file conforming to our `Opera` schema.
     - Validates and immediately adds the opera to their local library.
  3. **Tier 2: In-Browser AI Translation (Bring-Your-Own-Key / BYOK)**:
     - The user enters a free Google Gemini API key or OpenAI key (stored in `localStorage`).
     - The user pastes raw libretto text, enters title/composer/language.
     - The browser calls the Gemini Flash API directly from JavaScript using `fetch()`, parsing cues and generating tokens in chunks.
     - The resulting opera is saved to `IndexedDB` and ready to read instantly, with a "Download JSON" button to share with others.

---

## 5. Upcoming Repertoire Priorities

- [ ] **Mozart / Da Ponte**:
  - *Don Giovanni* (Italian, 1787)
  - *Le Nozze di Figaro* (Italian, 1786)
  - *Così fan tutte* (Italian, 1790)
- [ ] **Verdi**:
  - *La Traviata* (Italian, 1853)
  - *Rigoletto* (Italian, 1851)
  - *Otello* (Italian / Boito, 1887)
- [ ] **French Repertoire**:
  - *Carmen* (Bizet, French, 1875 - complete dialogue version)
- [ ] **Wagner**:
  - *Tristan und Isolde* (German, 1865)
  - *Der fliegende Holländer* (German, 1843)
- [ ] **Puccini**:
  - *La Bohème* (Italian, 1896)
  - *Tosca* (Italian, 1900)

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

### 3.2 Public Domain Audio Synchronization
- **Background**: Currently, audio is synthesized on the fly via the browser's Web Speech API (TTS). While helpful for pronunciation, TTS lacks operatic singing and orchestral accompaniment.
- **Proposed Feature**:
  - Link public domain historic recordings (from the Internet Archive and Musopen).
  - Add line-by-line timestamp synchronization so the reader automatically scrolls in time with a live recording.

---

## 4. Pipeline & Developer Tooling

### [x] COMPLETED (v1.1.0): Unified CLI Importer Tool (`scripts/import_opera.py`)
- Standardized CLI tool supporting text, HTML, and structured JSON input.
- Automatic integration with German (`german_master_lexicon.json`) and Italian (`falstaff_master_lexicon.json`, `large_italian_vocab.json`) lexicons.
- Heuristic fallback tagging for unknown parts of speech.
- Generates fully typed `act[N].ts` and `index.ts` files.
- Supports `--dry-run` and `--register` flags for automated registration in `src/data/operas.ts`.

### [x] COMPLETED (v1.1.0): Dynamic Code-Splitting & On-Demand Chunk Loading
- Decoupled `OPERA_CATALOG` into lightweight `OperaSummary` metadata and async dynamic loaders (`OPERA_LOADERS`).
- Opera libretti loaded on-demand with caching (`loadOperaById`) and loading spinner fallback.
- Reduced initial core bundle size from **2,698 kB** (700 kB gzip) down to **298 kB** (89 kB gzip) — an **89% initial payload reduction**.
- Configured Vite build output to split each opera into its own chunk (`opera-[name]-[hash].js`), eliminating all chunk size build warnings.

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

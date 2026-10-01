# Libretto: To-Do, In-Progress & Unfinished Features

This document tracks identified shortcomings, in-progress enhancements, and future architectural priorities for the **Libretto** project.

---

## 1. High Priority: Search & Discovery Overhaul

### Problem: Current Search is Scene-Constrained
- **Current Behavior**: The search bar in `Navbar.tsx` only filters lines within the currently selected scene (`currentScene.cues`).
- **User Impact**: If a user is viewing Act I, Scene 1 of *Die Zauberflöte* and searches for Tamino's famous aria *"Dies Bildnis ist bezaubernd schön"* (which occurs in Scene 4), the reader reports 0 matches. The search feels broken and frustrating.
- **Planned Solution**:
  1. **Opera-Wide Search Index**: Compute matches across all acts and scenes of the active opera (and optionally across the entire library).
  2. **Search Results Flyout / Modal**:
     - When typing in the search box, display a popover list of matching occurrences:
       ```
       Found 3 matches for "Dies Bildnis":
       [Act I, Scene 4] Tamino: "Dies Bildnis ist bezaubernd schön..."
       [Act I, Scene 4] Tamino: "Ich fühl' es, wie dies Götterbild..."
       ```
     - Clicking any search result immediately navigates to that Act and Scene, scrolls the line into view, and highlights it.
  3. **Visual Highlighting**: Highlight matched search terms in bright yellow within the reader columns.

---

## 2. High Priority: Opera Catalog & Composer Presentation

### Problem: Missing Composer Attribution in Navigation
- **Current Behavior**: The opera selector dropdown in `Navbar.tsx` only lists the title and language (e.g. `The Magic Flute (German)`). The composer is invisible unless the user opens the "About" or "Synopsis & Cast" modal.
- **Scalability Limitation**: As the repertoire expands from 4 operas to dozens of operas, a flat `<select>` list will become unwieldy. Users will not easily find operas by their favorite composer or language.
- **Planned Solution**:
  1. **Navbar Dropdown Enhancement**:
     - Display: `{Composer} – {Original Title} ({English Title}) [{Language}]`.
     - Group operas by Composer or Language using `<optgroup>` tags:
       ```html
       <optgroup label="Wolfgang Amadeus Mozart">
         <option>Die Zauberflöte (The Magic Flute) [German]</option>
         <option>Don Giovanni [Italian]</option>
       </optgroup>
       <optgroup label="Giuseppe Verdi">
         <option>Falstaff [Italian]</option>
       </optgroup>
       ```
  2. **Dedicated Opera Library Gallery Modal**:
     - A full visual modal with composer portraits, opera cover art, year of premiere, language badges, and synopsis previews.
     - Search and filter by composer, language, voice types, or historical era (Baroque, Classical, Bel Canto, Romantic, Verismo).

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

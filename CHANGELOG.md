# Changelog

All notable changes to the **Libretto** project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-10-04

### Added
- **Universal, Format-Agnostic Libretto Importer (`scripts/import_opera.py`)**:
  - Source-agnostic ingestion supporting local files, remote web URLs (`http://`, `https://`), bilingual parallel text/TSV (`--format parallel`), HTML, and pre-structured JSON.
  - Built-in German compound verb and past-participle recognition (`is_german_participle`, auxiliary verb awareness for *sein*, *haben*, *werden*).
  - Comprehensive closed-class word catalog (articles, prepositions, pronouns, conjunctions, adverbs) in heuristic POS tagger for German and Italian, preventing false verb classifications.
  - Automated translation smoothing rules preventing awkward hyphenated dative calques in imported libretti.
  - Included reference parallel fixtures: `scripts/samples/sample_bilingual_parallel.tsv` and `scripts/samples/sample_german_perfekt.tsv`.

### Changed
- **Corpus Standardization & Grammar Alignment Across All Works**:
  - Brought all existing operas (*Die Zauberflöte*, *Fidelio*, *Tannhäuser*, *Falstaff*) to the exact same high linguistic standard.
  - **German Compound Verbs & Perfect Tense (*Perfekt*)**: Corrected past participle classification across *Die Zauberflöte*, *Fidelio*, and *Tannhäuser*. Predicate participles governed by auxiliary verbs (e.g. *Ich bin gegangen*) are now correctly tagged as `verb` (with Partizip II verbal predicate annotations) instead of being mislabeled as adjectives.
  - **Fidelio Translation Overhaul**: Repaired all 124 defective translation lines in Acts 1 and 2 where raw German text had leaked into literal translations. Reduced residual German fragments from 218 down to **0**.
  - **Fidelio Libretto Integrity**: Removed stray librettist credit lines embedded in dramatic dialogue (Act 2 Scene 6).
  - **Die Zauberflöte Translation Smoothing**: Normalized 124 hyphenated pronoun calques (`to-me`, `to-you` -> `to me`, `to you`) and smoothed rigid SOV German word orders into clear, syntax-transparent English.

---

## [1.1.0] - 2026-10-04

### Added
- **Unified CLI Libretto Importer Tool (`scripts/import_opera.py`)**:
  - Full CLI utility supporting raw text, HTML, and structured JSON libretto ingestion.
  - Native integration with Libretto's master German and Italian lemma dictionaries for morphological tokenization.
  - Automatic Part of Speech heuristic inference for unknown words.
  - Automated generation of typed TypeScript act files (`act[1-N].ts`) and `index.ts`.
  - Automatic registration in `src/data/operas.ts` via `--register` flag.
  - Provided test libretto fixture in `scripts/samples/sample_don_giovanni.txt`.

### Changed
- **Dynamic Code-Splitting & Modular Bundle Architecture**:
  - Refactored `src/data/operas.ts` to separate lightweight catalog summaries (`OperaSummary`) from full libretto data.
  - Implemented on-demand asynchronous dynamic loading (`loadOperaById`) with in-memory caching.
  - Reader shell displays a sleek loading state while fetching libretto modules.
  - Cut core initial application bundle from **2.7 MB** down to **298 kB** (from 700 kB gzip down to 89 kB gzip), achieving an **89% initial payload reduction**.
  - Configured Vite build output to split each opera into dedicated chunks (`opera-[name]-[hash].js`), eliminating all chunk size warning thresholds.
- **Roadmap Streamlining**:
  - Removed in-browser importer and IPA transcription from active backlog.

---

## [1.0.0] - 2026-10-01

### Added
- **Die Zauberflöte Unabridged 1791 Dialogue Restoration**:
  - Integrated the complete, unabridged historical spoken dialogue by Emanuel Schikaneder across Acts I and II.
  - Expanded the corpus from 834 lines to 1,361 lines across 770 dialogue cues.
  - Restored iconic dramatic scenes: Tamino's snake encounter, Papageno's padlock banter, Three Ladies' dialogue, Sarastro's trials of silence, Papageno's encounter with the Old Woman/Papagena, and Monostatos's comic confrontations.
  - 100% word-by-word tokenization, part-of-speech classification, and German morphological annotations.
- **Tannhäuser Complete 3-Act Corpus**:
  - Full Wagnerian libretto (965 lines) across Act I (Venusberg), Act II (Wartburg Song Contest), and Act III (Pilgrims' Return and Rome Narration).
  - Specialized Middle High German archaic lexical annotations and poetic compounding notes.
- **Falstaff Complete 3-Act Corpus**:
  - Full Verdi / Arrigo Boito libretto (1,887 lines) spanning all 6 parts.
  - Deep Italian poetic annotations addressing apocope, archaic grammatical elisions, and Renaissance-inspired vocabulary.
- **Fidelio Complete 2-Act Corpus**:
  - Beethoven's rescue opera (920 lines) including full spoken German dialogue, Jaquino and Marzelline's opening comedy, and Florestan's dramatic dungeon monologue.
- **Web Speech API Audio Narration**:
  - Native browser text-to-speech integration with automatic language routing (`de-DE` for German, `it-IT` for Italian).
  - Neural/natural voice prioritization with user-configurable voice selection modal and speech rate calibration.
- **5 Reader Themes & Accessibility**:
  - Night (OLED pitch black), Sepia (warm paper), Parchment (classical parchment), Ivory (soft light), and High Contrast.
  - Responsive font-size scaling (0.85x to 1.35x).
  - Real-time search filter covering characters, original lines, and English translations.
- **Repository Documentation & Governance**:
  - Added comprehensive `README.md`, `ARCHITECTURE.md`, `PROJECT_MAP.md`, `CHANGELOG.md`, and `KNOWN_ISSUES.md`.
  - Added `.gitignore` and initialized clean Git version control.

### Changed
- **Data Architecture Modularization**:
  - Refactored `src/data/` from flat file layout into dedicated per-opera directories:
    - `src/data/dieZauberfloete/` (`index.ts`, `act1.ts`, `act2.ts`)
    - `src/data/falstaff/` (`index.ts`, `act1.ts`, `act2.ts`, `act3.ts`)
    - `src/data/fidelio/` (`index.ts`, `act1.ts`, `act2.ts`)
    - `src/data/tannhaeuser/` (`index.ts`, `act1.ts`, `act2.ts`, `act3.ts`)
  - Moved legacy bootstrap sample stubs to `src/data/samples/`.
  - Cleaned up root directory by archiving historical generation scripts into `scripts/archive/`.

---

## [0.2.0] - 2026-09-30

### Added
- Automated Python ingestion pipeline in `scripts/` to parse raw HTML and text libretti.
- Master German and Italian lemma dictionaries (`german_master_lexicon.json`, `large_italian_vocab.json`).
- Interactive `LinguisticInspector` drawer to view token-level grammatical metadata.
- Act and scene navigation modal (`TableOfContentsModal`).

---

## [0.1.0] - 2026-09-28

### Added
- Initial project scaffolding with React 18, Vite, TypeScript, and Tailwind CSS.
- Core data model definitions in `src/types/libretto.ts`.
- Basic dual-column reader layout.
- Prototype sample stubs for *Carmen*, *La Bohème*, *Eugene Onegin*, and *The Pirates of Penzance*.

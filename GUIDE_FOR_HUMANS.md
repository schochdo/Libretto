# Libretto: How It Works (A Guide for Humans)

This document is written in plain English for humans—developers, musicians, students, and curious learners—who want to understand what **Libretto** is, how the software works under the hood, how the linguistic engine was built, and how new operas can be added.

---

## 1. The Big Picture: What is Libretto?

Classical opera is performed in foreign languages—most frequently Italian, German, French, and Russian. While audiences usually rely on projected "supertitles" during live performances, supertitles are heavily abridged summaries designed for quick reading in a darkened auditorium. They tell you *what is happening*, but they do not tell you *what the words actually mean*, how the sentence is constructed, or why a character chose a particular word.

For singers, conductors, students, and dedicated listeners, this creates a major barrier:
- Standard translations smooth out the text into idiomatic English, scrambling the word order so you cannot tell which German word corresponds to which musical phrase.
- Complete 18th- and 19th-century spoken dialogue is routinely cut from modern recordings, leaving large plot holes.
- Archaic grammar (like Wagnerian compounding or Arrigo Boito's Renaissance-inspired Italian) is intimidating without grammatical guidance.

**Libretto** solves this by providing:
1. **Unabridged original text** (including all original spoken dialogue).
2. **Syntax-faithful literal translations** that follow the sequence of the foreign poetry.
3. **Interactive word-by-word linguistic tokens** (click any word to see its dictionary form, part of speech, literal meaning, and grammatical notes).
4. **Synchronized pronunciation audio** via the browser's speech synthesizer.

---

## 2. The Tech Stack Demystified

You don't need a computer science degree to understand how this application runs. Here is what is happening behind the scenes:

### What is React 18 (and what is a "Front-End Framework")?
In traditional web development, a website is built from static HTML pages. If you want to change what is on the screen, the browser has to reload a new page from a server.

A **front-end framework** like **React** allows the entire app to run inside your browser as a single dynamic program (a **Single Page Application** or SPA). React breaks the screen down into reusable, self-contained components:
- `Navbar.tsx`: The top bar with the opera selector, theme controls, and search.
- `DualColumnReader.tsx`: The main reading view that displays the foreign text on the left and the English translation on the right.
- `LinguisticInspector.tsx`: The sidebar or popup drawer that shows dictionary definitions and grammatical explanations when you click a word.
- `TableOfContentsModal.tsx`: The scene navigation drawer.
- `VoiceSettingsModal.tsx`: The audio settings panel.

When you click an opera or select a word, React updates only the specific parts of the screen that changed, without reloading the page.

### What is Vite, and what is it doing?
**Vite** (pronounced *"veet"*, French for "fast") is the project's build tool and development engine. It serves two main purposes:
1. **During Development (`npm run dev`)**:
   - It runs a local web server on your computer (typically at `http://localhost:5173`).
   - It features **Hot Module Replacement (HMR)**: whenever you edit a file, Vite instantly updates that specific component in your browser in milliseconds without a full page refresh.
2. **During Production (`npm run build`)**:
   - Web browsers cannot directly execute TypeScript (`.ts` / `.tsx`) files. Vite takes all of our TypeScript code, type-checks it, strips out the types, and bundles all components and styles into standard, highly compressed JavaScript and CSS files in the `dist/` folder.
   - Once built, the contents of `dist/` can be dropped onto any web server in the world (like Vercel or GitHub Pages) and will run instantly.

### Why TypeScript & JSON Files Instead of a Database?
Most web applications use an external database (like PostgreSQL, MySQL, or Turso/SQLite) running on a cloud server. When a user opens a page, the website asks the server: *"Give me Scene 1 of The Magic Flute"*.

**Libretto does not use a database.** Instead, all four operas are stored as strongly typed TypeScript/JSON data structures directly inside `src/data/`:
- `src/data/dieZauberfloete/`
- `src/data/falstaff/`
- `src/data/fidelio/`
- `src/data/tannhaeuser/`

#### Why choose this architecture?
| Traditional Database Approach | Libretto's Static Client Approach |
| :--- | :--- |
| Requires paying for a cloud database server every month. | **$0 hosting cost forever**. Runs on free static hosting (Vercel, GitHub Pages). |
| Every search or page turn requires a network request; slow on weak Wi-Fi or mobile. | **Instantaneous (0 ms) search and navigation**. Everything is in memory. |
| Cannot work offline. | **Fully offline capable**. Can be saved as a Progressive Web App (PWA). |
| Complex backend APIs to maintain and secure. | **Zero attack surface**. No user passwords, no database credentials to leak. |

*Isn't 4 complete operas too large for memory?*
Not at all. The entire text of all 4 operas, with all 45,000+ grammatical tokens, compresses to **~700 kilobytes** with gzip. That is smaller than a single average image on a modern website.

---

## 3. The "Vibe Coding" Story: How Libretto Evolved

This project was built iteratively using **Antigravity** (Google DeepMind's agentic AI coding environment). The development process progressed through several distinct phases:

### Phase 1: The Bootstrap Prototype
We started with a clean user interface and simple toy snippets for four operas (*Carmen*, *La Bohème*, *Eugene Onegin*, *The Pirates of Penzance*). The UI was attractive, but the content was superficial—only a few dozen lines per opera with basic machine translations.

### Phase 2: The Translation Problem
As we began importing full libretti, a major problem became evident: **generic AI translations are terrible for opera pedagogy**. Standard translation models try to sound like modern English prose, which means they:
- Rearrange words completely, breaking the direct link to what the singer is singing.
- Drop archaic words or flatten subtle poetic nuances.
- Give no grammatical explanation of case endings or verb conjugations.

### Phase 3: The Linguistic Engine Breakthrough
To fix this, we created a specialized Python parsing and tokenization pipeline in `scripts/`:
1. Every word in the libretto was split into an individual token.
2. We generated master lemma dictionaries (`german_master_lexicon.json`, `large_italian_vocab.json`).
3. For every word token, we assigned:
   - **`lemma`**: The dictionary headword (e.g. German verb `ging` -> `gehen`; Italian `volser` -> `volgere`).
   - **`pos`**: Exact part of speech (`noun`, `verb`, `adjective`, etc.).
   - **`meaning`**: The direct, literal English equivalent.
   - **`grammarNote`**: An explanation of archaic forms, case endings, or historical context.
4. Line translations were rewritten to be **syntax-faithful**: keeping the original word order as closely as possible without violating English comprehension.

### Phase 4: The 1791 Dialogue Restoration
While reviewing Mozart's *Die Zauberflöte*, we noticed a glaring issue: most online sources and recordings drop the spoken dialogue entirely. In the original 1791 Viennese premiere, *The Magic Flute* is a *Singspiel*—an opera with substantial spoken scenes written by the theater director Emanuel Schikaneder. 

Without the dialogue:
- Tamino falls in love with Pamina's portrait with no explanation of who gave it to him.
- Papageno's padlock punishment is unexplained.
- Sarastro's moral philosophy and trials make little sense.

We tracked down the original unabridged 1791 premiere text and integrated **527 additional dialogue lines**, bringing the opera from 834 lines to **1,361 lines across 770 cues**, complete with word-by-word token breakdowns.

### Phase 5: Expanding the Repertoire
Following this methodology, we ingested:
- **Wagner's *Tannhäuser*** (965 lines across 3 acts): Capturing the Venusberg drama, the Wartburg song tournament, and the Rome Narration, with annotations for Middle High German archaisms.
- **Verdi's *Falstaff*** (1,887 lines across 3 acts / 6 parts): Capturing Arrigo Boito's brilliant Shakespearean Italian, full of Renaissance vocabulary and poetic contractions.
- **Beethoven's *Fidelio*** (920 lines across 2 acts): Complete with the spoken dialogue between Jaquino, Marzelline, and Rocco, through Florestan's dungeon aria and the liberation finale.

---

## 4. How the Linguistic Parser Works

When you click on a word in the app, the `LinguisticInspector` displays rich metadata. Here is what is happening under the hood:

### The Token Anatomy

Each word in `src/data/<opera>/act*.ts` is stored as a `Token` object:

```typescript
{
  word: "Dies",
  lemma: "dieser",
  pos: "pronoun",
  meaning: "this",
  notes: "Demonstrative pronoun, neuter nominative singular, referring to 'Bildnis'."
}
```

### Solving Language Puzzles in Opera

1. **German Separable Verbs**:
   - In German, a verb prefix can detach and move to the very end of the clause (e.g., *hinunterstürzen* -> *„Ich stürze mich hinab“*).
   - Our parser links the isolated prefix back to the infinitive lemma so the user understands the verb's true meaning.
2. **Italian Poetic Apocope (Truncation)**:
   - Italian operatic libretti (especially Boito and Da Ponte) frequently chop off the final vowel of words to fit the musical meter (*cor* for *cuore*, *pensier* for *pensiero*, *vo'* for *voglio*, *fe'* for *fede*).
   - Our lexicon identifies these apocopated forms, restores the standard dictionary lemma, and explains the poetic contraction.
3. **Archaic Contractions**:
   - 18th-century German often merges prepositions and articles (*ans* for *an das*, *beim* for *bei dem*, *drauf* for *darauf*).
   - The token inspector unpacks these contractions into their constituent parts.

---

## 5. The Ingestion Pipeline: How to Add a New Opera

Adding a new opera (like Mozart's *Don Giovanni* or Bizet's *Carmen*) follows a repeatable 5-step process:

```
[1. Source Text] ──> [2. Parse & Segment] ──> [3. Build Lexicon] ──> [4. Curate & Gloss] ──> [5. Emit TypeScript]
```

### Step 1: Obtain Public Domain Source Text
Find an authentic, complete public domain libretto. Reliable sources include:
- **Zeno.org** (German literature and opera archives).
- **LibrettoArchive.com** (Bilingual historical opera editions).
- **Project Gutenberg** and **Wikisource**.
- **IMSLP** (Historical scanned vocal scores with original stage directions).

Save the raw text or HTML in `scripts/<opera>_raw.html` or `.txt`.

### Step 2: Parse into Acts, Scenes, and Cues
Write a Python script (modeling after `scripts/parse_falstaff_full.py` or `scripts/parse_fidelio_clean.py`) to:
1. Identify Act headers (e.g., `Erster Aufzug`, `Atto Primo`).
2. Identify Scene headers (e.g., `Erster Auftritt`, `Scena I`).
3. Extract Stage Directions enclosed in brackets `[...]` or italics.
4. Extract Character names (e.g., `TAMINO:`, `PAPAGENO:`) and their spoken/sung dialogue lines.

Output: `scripts/<opera>_parsed.json`.

### Step 3: Extract Vocabulary & Build Master Lexicon
Run a script to extract every unique word in the opera:
```bash
python3 scripts/build_<opera>_lexicon.py
```
- Compare the words against our existing master dictionaries (`scripts/german_master_lexicon.json` or `scripts/large_italian_vocab.json`).
- Any recognized words automatically receive their `lemma`, `pos`, and `meaning`.
- Any missing words (archaisms, character names, rare verb inflections) are flagged in a `missing_words.json` file for curation.

### Step 4: Generate Syntax-Faithful Translations
Using the structured cues and vocabulary:
- Produce line-by-line literal English translations that mirror the foreign sentence structure.
- Translate stage directions into clear theatrical English.
- Attach grammatical notes to difficult lines.

Output: `scripts/<opera>_clean_corpus.json`.

### Step 5: Emit Modular TypeScript Files
Run the emitter script (e.g. `scripts/emit_<opera>_ts.py`):
1. Creates the directory `src/data/<operaName>/`.
2. Generates `act1.ts`, `act2.ts`, etc., populated with typed `Act`, `Scene`, `Cue`, `Line`, and `Token` objects.
3. Generates `index.ts` with the opera's metadata (title, composer, librettist, year, synopsis, character roster).
4. Register the new opera in `src/data/operas.ts`:
   ```typescript
   import { myNewOpera } from './myNewOpera';
   export const OPERA_CATALOG: Opera[] = [
     dieZauberfloete,
     fidelio,
     tannhaeuser,
     falstaff,
     myNewOpera // <-- Added here
   ];
   ```

Run `npm run build` to verify that TypeScript compiles with 0 errors.

---

## 6. Summary: Where to Find Everything

- **User Interface**: `src/components/`
- **Application State**: `src/App.tsx`
- **Audio Synthesizer**: `src/utils/speech.ts`
- **Opera Datasets**: `src/data/<operaName>/`
- **Python Ingestion Scripts**: `scripts/`
- **Type Definitions**: `src/types/libretto.ts`

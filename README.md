# Libretto

> **An interactive, linguistically annotated dual-column opera study companion and reader.**

Libretto is an open-source, web-based study tool designed for opera lovers, singers, conductors, musicologists, and language learners. It bridges the gap between hearing the music and truly understanding the language by providing line-by-line syntax-faithful translations, word-by-word tokenized grammatical breakdowns, character voice attributions, contextual stage directions, and native pronunciation audio.

---

## Repertoire (100% Complete Operas)

The library currently features complete, unabridged corpora with token-level linguistic annotations:

| Opera | Composer | Librettist | Year | Language | Scope |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Die Zauberflöte** | W. A. Mozart | Emanuel Schikaneder | 1791 | German | Acts I & II complete (1,361 lines, 770 cues, full 1791 spoken dialogue) |
| **Tannhäuser** | Richard Wagner | Richard Wagner | 1845 | German | Acts I, II & III complete (965 lines, full Venusberg & Wartburg contest) |
| **Falstaff** | Giuseppe Verdi | Arrigo Boito | 1893 | Italian | Acts I, II & III complete (1,887 lines, 6 parts, full Boito poetic text) |
| **Fidelio** | Ludwig van Beethoven | Sonnleithner & Treitschke | 1814 | German | Acts I & II complete (920 lines, full spoken dialogue & dungeon drama) |

---

## Core Features

- **Dual-Column Synchronized Reading**: Original German/Italian text on the left, direct syntax-faithful English translations on the right.
- **Interactive Linguistic Inspector**: Click any word token to view:
  - Base lemma / dictionary form
  - Exact part of speech (Noun, Verb, Adjective, Pronoun, Preposition, etc.)
  - Literal meaning vs. poetic/contextual translation
  - Deep grammatical commentary (case endings, archaic elisions, subjunctive moods, German separable verbs, Italian poetic apocope)
- **Web Speech Audio Playback**: In-browser text-to-speech (TTS) pronunciation using native German and Italian system voices with voice selection and speed controls.
- **Dramaturgical Context**: Stage directions, scene settings, character voice type designations (Soprano, Mezzo-Soprano, Tenor, Baritone, Bass), and act/scene navigation.
- **Customizable Theming & Typography**:
  - 5 Reading Themes: Night (OLED Dark), Sepia (Warm Paper), Parchment (Classic), Ivory (Soft Light), and High Contrast.
  - Dynamic font size adjustment (0.8x to 1.5x).
  - Search filter across all dialogue, character cues, and translations.
- **Zero-Backend / 100% Client-Side**: No database required. Fully offline-capable, self-contained single-page application (SPA).

---

## Tech Stack

- **Runtime & Bundler**: [Vite](https://vitejs.dev/) with [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Speech Synthesis**: Native HTML5 Web Speech API (`speechSynthesis`)

---

## Quickstart

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher)
- `npm` (version 9 or higher)

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/your-username/libretto.git
cd libretto

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

This generates an optimized static production bundle in `dist/`.

To preview the production build locally:
```bash
npm run preview
```

---

## Project Structure

```
Libretto/
├── README.md               # Overview and quickstart guide
├── ARCHITECTURE.md         # Technical architecture and data models
├── PROJECT_MAP.md          # Complete directory and file reference
├── CHANGELOG.md            # Release and curation history
├── KNOWN_ISSUES.md         # Open enhancements and future roadmap
├── index.html              # HTML entry point
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── src/
│   ├── main.tsx            # React application root
│   ├── App.tsx             # Main container, layout & state management
│   ├── index.css           # Global typography & Tailwind styles
│   ├── types/
│   │   └── libretto.ts     # TypeScript interfaces (Opera, Act, Scene, Cue, Line, Token)
│   ├── components/         # Reusable React UI components
│   │   ├── Navbar.tsx
│   │   ├── DualColumnReader.tsx
│   │   ├── LinguisticInspector.tsx
│   │   ├── TableOfContentsModal.tsx
│   │   ├── VoiceSettingsModal.tsx
│   │   └── AboutModal.tsx
│   ├── utils/
│   │   └── speech.ts       # Web Speech API helpers and voice selectors
│   └── data/               # Per-opera structured datasets
│       ├── operas.ts       # Master catalog export and resolver
│       ├── dieZauberfloete/ # Mozart's Die Zauberflöte (Acts I & II)
│       ├── falstaff/       # Verdi's Falstaff (Acts I, II & III)
│       ├── fidelio/        # Beethoven's Fidelio (Acts I & II)
│       ├── tannhaeuser/    # Wagner's Tannhäuser (Acts I, II & III)
│       └── samples/        # Starter reference stubs
└── scripts/                # Data processing, scraping & corpus builders
```

---

## Deployment Guide

Because Libretto is a static client-side single page app, it can be hosted on any free static hosting provider:

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**. Total setup time: < 60 seconds.

### GitHub Pages
1. In `vite.config.ts`, set `base: '/<repo-name>/'` (if hosting on a user/project repo).
2. Run `npm run build`.
3. Deploy `dist/` using the standard GitHub Pages Actions workflow or `gh-pages` package.

---

## Public Domain & Educational Notice

The underlying historical opera libretti, sung poetry, authentic spoken dialogue, and stage directions for *Die Zauberflöte*, *Tannhäuser*, *Falstaff*, and *Fidelio* are in the public domain worldwide.

All direct syntax-faithful literal translations, tokenized morphological segmentations, parts-of-speech annotations, and pedagogical grammar notes are original educational works authored specifically for language learning and music study.

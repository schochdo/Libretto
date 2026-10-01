# Known Issues & Roadmap

This document outlines known limitations, performance trade-offs, and planned enhancements for **Libretto**.

---

## 1. Bundle Size & Code-Splitting

### Context & Impact
- During `npm run build`, Vite produces a single bundled JavaScript chunk (`dist/assets/index-*.js`) of ~2.69 MB uncompressed (~699 kB gzipped), triggering Vite's chunk size warning (`> 500 kB`).
- Because all 4 complete operas (~5,100 dialogue lines and over 45,000 individually annotated tokens) are statically compiled into the primary bundle, the initial page load downloads the full multi-opera repertoire upfront.

### Current Mitigation & User Experience
- On modern broadband and desktop connections, downloading ~700 kB gzipped takes under 200 milliseconds. Once loaded into memory, switching operas, searching 5,000 lines, and inspecting grammatical tokens operates with instantaneous 0ms latency with zero subsequent network requests.

### Planned Optimization
- Implement dynamic asynchronous chunk loading via React `Suspense` and dynamic `import()`:
  ```typescript
  // Planned lazy-loading pattern:
  const loadOperaData = async (operaId: string) => {
    switch (operaId) {
      case 'die-zauberfloete':
        return (await import('./dieZauberfloete')).dieZauberfloete;
      case 'falstaff':
        return (await import('./falstaff')).falstaff;
      // ...
    }
  };
  ```
- This will drop the initial bundle payload to < 150 kB, loading individual opera datasets only when requested.

---

## 2. Web Speech API Platform Inconsistencies

### Context & Variations
The HTML5 Web Speech API (`window.speechSynthesis`) relies on the host operating system's installed speech synthesis engines. As a result:
- **macOS / iOS (Safari & Chrome)**: Access to high-quality neural voices (e.g., Apple Anna, Martin, Google Deutsch). Excellent natural cadence and German/Italian pronunciation.
- **Windows (Edge / Chrome)**: Access to Microsoft Stefan (German) and Microsoft Elsa/Cosimo (Italian).
- **Linux / Android**: Some distributions only offer basic robotic synthesizer engines (e.g. `espeak`), resulting in less natural cadence.
- **Firefox**: Voice discovery can occasionally be delayed until user interaction occurs.

### Current Handling
- `src/utils/speech.ts` implements voice ranking heuristics that automatically match the opera's BCP-47 language tag (`de-DE`, `it-IT`) and prioritize natural/neural voices.
- A **Voice Settings Modal** allows users to test, preview, and select any voice available on their specific operating system.

---

## 3. Production Cuts vs. Unabridged Historical Completeness

### Context
In actual opera performances, conductors and stage directors routinely cut significant portions of the spoken German dialogue in *Die Zauberflöte* and *Fidelio*, or replace it with spoken vernacular narration. Some historical studio recordings also cut dialogue entirely.

### Rationale & Design Decision
- Libretto deliberately includes the complete, unabridged historical text (e.g. Emanuel Schikaneder's complete 1791 premiere dialogue and Beethoven's 1814 text).
- **Educational Value**: Performers, language learners, and musicologists require the complete dramatic context to understand plot motivations (such as why Sarastro tested Tamino and Papageno, or why Marzelline rejected Jaquino).

### Planned Enhancement
- Add a **"Performance Cut Filter"** toggle to dim or hide non-musical dialogue for users who only want to follow along with standard concert or audio recordings.

---

## 4. Repertoire Expansion Roadmap

Future releases will expand the library to cover canonical works across the primary operatic languages:

- [ ] **Italian Repertoire**:
  - *Don Giovanni* (Mozart / Lorenzo Da Ponte)
  - *Le Nozze di Figaro* (Mozart / Lorenzo Da Ponte)
  - *La Traviata* (Verdi / Francesco Maria Piave)
  - *La Bohème* (Puccini / Illica & Giacosa)
- [ ] **German Repertoire**:
  - *Tristan und Isolde* (Wagner)
  - *Der Rosenkavalier* (Strauss / Hofmannsthal)
- [ ] **French Repertoire**:
  - *Carmen* (Bizet / Meilhac & Halévy) — complete with original spoken dialogue
- [ ] **English & Russian Repertoire**:
  - *Dido and Aeneas* (Purcell / Nahum Tate)
  - *Eugene Onegin* (Tchaikovsky)

---

## 5. Diction & Pedagogical Enhancements

- [ ] **International Phonetic Alphabet (IPA)**:
  - Add standardized classical singing IPA transcriptions (following Castel/Moriarty conventions) for every line and token.
- [ ] **Audio Synchronization Timestamps**:
  - Support for syncing line highlights to specific public domain recordings (e.g., Internet Archive recordings).

import { fidelioAct1 } from '../src/data/fidelio/act1';
import { fidelioAct2 } from '../src/data/fidelio/act2';
import { dieZauberfloeteAct1 } from '../src/data/dieZauberfloete/act1';
import { dieZauberfloeteAct2 } from '../src/data/dieZauberfloete/act2';
import { tannhaeuserAct1 } from '../src/data/tannhaeuser/act1';
import { tannhaeuserAct2 } from '../src/data/tannhaeuser/act2';
import { tannhaeuserAct3 } from '../src/data/tannhaeuser/act3';
import { Act, Cue, Line, Token } from '../src/types/libretto';
import * as fs from 'fs';
import * as path from 'path';

// Clean trailing hyphens in Tannhäuser
function cleanTrailingHyphens(str: string): string {
  if (!str) return str;
  return str
    .replace(/:\s*-\s*$/, ':')
    .replace(/,\s*-\s*$/, ',')
    .replace(/!\s*-\s*$/, '!')
    .replace(/\?\s*-\s*$/, '?')
    .replace(/\.\s*-\s*$/, '.')
    .replace(/;\s*-\s*$/, ';')
    .replace(/\s+-\s*$/, '')
    .trim();
}

// Hyphenated calques to smooth
const CALQUE_REPLACEMENTS: [RegExp, string][] = [
  [/\bTo-the\b/g, 'To the'],
  [/\bto-the\b/g, 'to the'],
  [/\bTo-me\b/g, 'To me'],
  [/\bto-me\b/g, 'to me'],
  [/\bTo-you\b/g, 'To you'],
  [/\bto-you\b/g, 'to you'],
  [/\bTo-him\b/g, 'To him'],
  [/\bto-him\b/g, 'to him'],
  [/\bTo-her\b/g, 'To her'],
  [/\bto-her\b/g, 'to her'],
  [/\bTo-them\b/g, 'To them'],
  [/\bto-them\b/g, 'to them'],
  [/\bTo-every\b/g, 'To every'],
  [/\bto-every\b/g, 'to every'],
  [/\bIn-order\b/g, 'In order'],
  [/\bin-order\b/g, 'in order'],
  [/\bIn-return\b/g, 'In return'],
  [/\bin-return\b/g, 'in return'],
  [/\bIn-short\b/g, 'In short'],
  [/\bin-short\b/g, 'in short'],
  [/\bAt-least\b/g, 'At least'],
  [/\bat-least\b/g, 'at least'],
  [/\bBe-silent\b/g, 'Be silent'],
  [/\bbe-silent\b/g, 'be silent'],
  [/\bAs-soon-as\b/g, 'As soon as'],
  [/\bas-soon-as\b/g, 'as soon as'],
  [/\bOut-of\b/g, 'Out of'],
  [/\bout-of\b/g, 'out of'],
  [/\bFor-that\b/g, 'For that'],
  [/\bfor-that\b/g, 'for that'],
  [/\bFor-you\b/g, 'For you'],
  [/\bfor-you\b/g, 'for you'],
  [/\bIs-it\b/g, 'Is it'],
  [/\bis-it\b/g, 'is it'],
  [/\bNot-a\b/g, 'Not a'],
  [/\bnot-a\b/g, 'not a'],
  [/\bOf-my\b/g, 'Of my'],
  [/\bof-my\b/g, 'of my'],
  [/\bOf-the\b/g, 'Of the'],
  [/\bof-the\b/g, 'of the'],
  [/\bOf-Isis\b/g, 'Of Isis'],
  [/\bof-Isis\b/g, 'of Isis'],
  [/\bOf-hell\b/g, 'Of hell'],
  [/\bof-hell\b/g, 'of hell'],
  [/\bInto-the\b/g, 'Into the'],
  [/\binto-the\b/g, 'into the'],
  [/\bFrom-the\b/g, 'From the'],
  [/\bfrom-the\b/g, 'from the'],
  [/\bOn-the\b/g, 'On the'],
  [/\bon-the\b/g, 'on the'],
  [/\bAt-the\b/g, 'At the'],
  [/\bat-the\b/g, 'at the'],
  [/\bBy-the\b/g, 'By the'],
  [/\bby-the\b/g, 'by the'],
  [/\bby-the-dozen\b/g, 'by the dozen'],
  [/\bwould-be\b/g, 'would be'],
  [/\bwould-like\b/g, 'would like'],
  [/\bwould-catch\b/g, 'would catch'],
  [/\bwould-lock\b/g, 'would lock'],
  [/\bsee-again\b/g, 'see again'],
  [/\babout-it\b/g, 'about it'],
  [/\ba-thing\b/g, 'a thing'],
  [/\ba-thousand\b/g, 'a thousand'],
  [/\blittle-treasure\b/g, 'darling'],
  [/\bdefiant-girl\b/g, 'stubborn girl'],
  [/\bat-me\b/g, 'at me'],
  [/\bmore-friendly\b/g, 'more friendly'],
  [/\blittle-word\b/g, 'single word'],
  [/\bfor-myself\b/g, 'for myself'],
  [/\blittle-while\b/g, 'little while'],
  [/\bafter-all\b/g, 'after all'],
  [/\bfrom-me\b/g, 'from me'],
  [/\bwith-me\b/g, 'with me'],
  [/\bfor-me\b/g, 'for me'],
  [/\bspring-days\b/g, 'spring days'],
  [/\bsoftly-whispering\b/g, 'softly whispering'],
  [/\bto-Leonore\b/g, 'to Leonore'],
  [/\bThat-one\b/g, 'That one'],
  [/\bthat-one\b/g, 'that one'],
  [/\bLittle-dove\b/g, 'Little dove'],
  [/\blittle-dove\b/g, 'little dove'],
  [/\bLittle-wife\b/g, 'Little wife'],
  [/\blittle-wife\b/g, 'little wife'],
  [/\bGods-of-vengeance\b/g, 'Gods of vengeance'],
  [/\bgods-of-vengeance\b/g, 'gods of vengeance'],
  [/\bCast-off\b/g, 'Cast off'],
  [/\bcast-off\b/g, 'cast off'],
  [/\bTorn-away\b/g, 'Torn away'],
  [/\btorn-away\b/g, 'torn away'],
  [/\bSnatched-away\b/g, 'Snatched away'],
  [/\bsnatched-away\b/g, 'snatched away'],
  [/\bSpied-upon\b/g, 'Spied upon'],
  [/\bspied-upon\b/g, 'spied upon'],
  [/\bAlmighty-ones\b/g, 'Almighty ones'],
  [/\balmighty-ones\b/g, 'almighty ones'],
  [/\bAre-there\b/g, 'Are there'],
  [/\bare-there\b/g, 'are there'],
  [/\bSo-that\b/g, 'So that'],
  [/\bso-that\b/g, 'so that'],
];

function smoothCalques(literal: string): string {
  let s = literal;
  for (const [pat, rep] of CALQUE_REPLACEMENTS) {
    s = s.replace(pat, rep);
  }
  return s;
}

// 1. Process Tannhäuser Act 1, 2, 3
for (const [actName, actObj, filename] of [
  ['Tannhäuser Act 1', tannhaeuserAct1, 'src/data/tannhaeuser/act1.ts'],
  ['Tannhäuser Act 2', tannhaeuserAct2, 'src/data/tannhaeuser/act2.ts'],
  ['Tannhäuser Act 3', tannhaeuserAct3, 'src/data/tannhaeuser/act3.ts'],
] as const) {
  let cleanedCount = 0;
  for (const scene of actObj.scenes) {
    for (const cue of scene.cues) {
      for (const line of cue.lines) {
        const origClean = cleanTrailingHyphens(line.original);
        const litClean = cleanTrailingHyphens(line.literal);
        if (origClean !== line.original || litClean !== line.literal) {
          line.original = origClean;
          line.literal = litClean;
          cleanedCount++;
        }
      }
    }
  }
  console.log(`[${actName}] Cleaned ${cleanedCount} trailing hyphens.`);
}

// 2. Process Zauberflöte Act 1 & 2
for (const [actName, actObj] of [
  ['Zauberflöte Act 1', dieZauberfloeteAct1],
  ['Zauberflöte Act 2', dieZauberfloeteAct2],
] as const) {
  let smoothedCount = 0;
  for (const scene of actObj.scenes) {
    for (const cue of scene.cues) {
      for (const line of cue.lines) {
        const smoothed = smoothCalques(line.literal);
        if (smoothed !== line.literal) {
          line.literal = smoothed;
          smoothedCount++;
        }
      }
    }
  }
  console.log(`[${actName}] Smoothed ${smoothedCount} hyphenated calques.`);
}

// 3. Process Fidelio Act 1 & Act 2: Heal broken words and remaining suspicious lines
// Curation mappings for Fidelio
const FIDELIO_LINE_FIXES: Record<string, { original?: string; literal?: string; remove?: boolean }> = {
  // Act 1 Scene 2 Cue 10
  'a1_s2_c10_l1': { literal: 'Good! Well done!' },

  // Act 1 Scene 2 Cue 13 (Heal verständiger)
  'a1_s2_c13_l1': {
    original: 'Ja, ja, du bist brav; man kann nicht eifriger, nicht verständiger sein.',
    literal: 'Yes, yes, you are good; one cannot be more diligent, more sensible.'
  },
  'a1_s2_c13_l2': {
    original: 'Ich habe dich aber auch mit jedem Tage lieber;',
    literal: 'And I grow fonder of you with every passing day;'
  },
  'a1_s2_c13_l3': {
    original: 'und sei versichert, dein Lohn soll auch nicht ausbleiben.',
    literal: 'and rest assured, your reward shall not fail to come.'
  },
  'a1_s2_c13_l4': { remove: true },

  // Act 1 Scene 2 Cue 14 (Heal nur des Lohnes wegen)
  'a1_s2_c14_l1': {
    original: 'O glaubt nicht, daß ich meine Schuldigkeit nur des Lohnes wegen tue ...',
    literal: 'O do not believe that I do my duty only for the sake of the reward ...'
  },
  'a1_s2_c14_l2': { remove: true },

  // Act 1 Scene 4 Cue 2 (Heal gleichgestimmter)
  'a1_s4_c2_l2': {
    original: 'ich behaupte, daß die Vereinigung zweier gleichgestimmter Herzen',
    literal: 'I maintain that the union of two like-minded hearts'
  },
  'a1_s4_c2_l3': {
    original: 'die Quelle des wahren ehelichen Glücks ist.',
    literal: 'is the source of true marital happiness.'
  },

  // Act 1 Scene 4 Cue 5 (Heal dürfen)
  'a1_s4_c5_l4': {
    original: 'Gewölbe, in das ich dich wohl nie werde führen dürfen,',
    literal: 'vault into which I shall probably never be allowed to lead you,'
  },
  'a1_s4_c5_l5': {
    original: 'obschon ich mich ganz auf dich verlassen kann.',
    literal: 'although I can rely on you completely.'
  },

  // Act 1 Scene 4 Cue 6
  'a1_s4_c6_l1': {
    original: 'Vermutlich, wo der Gefangene sitzt, von dem du schon einigemale gesprochen hast.',
    literal: 'Presumably where the prisoner sits of whom you have already spoken several times.'
  },
  'a1_s4_c6_l2': { remove: true },

  // Act 1 Scene 4 Cue 7
  'a1_s4_c7_l1': {
    original: "Du hast's erraten, Marzelline.",
    literal: 'You have guessed it, Marzelline.'
  },

  // Act 1 Scene 4 Cue 11 (Heal ungefähr)
  'a1_s4_c11_l1': {
    original: 'Oder er muß große Feinde haben, das kommt ungefähr auf eins heraus.',
    literal: 'Or he must have great enemies; that amounts to roughly the same thing.'
  },
  'a1_s4_c11_l2': {
    original: 'Nun, er wird mich nicht lange mehr peinigen; er kann nicht mehr lange leben.',
    literal: 'Well, he will not torment me much longer; he cannot live much longer.'
  },
  'a1_s4_c11_l3': { remove: true },

  // Act 1 other fixes
  'a1_s5_c3_l4': { literal: 'then return' },
  'a1_s6_c4_l9': { literal: 'God, if he discovered that I keep this Florestan in' },
  'a1_s8_c15_l2': { literal: 'I wait at a little distance,' },
  'a1_s8_c17_l2': { literal: 'creep into the dungeon:' },
  'a1_s8_c19_l1': { literal: 'Starving in chains,' },
  'a1_s8_c20_l1': { literal: 'Let him die in his chains,' },
  'a1_s8_c20_l9': { literal: 'creep into the dungeon;' },
  'a1_s8_c21_l1': { literal: 'Starving in chains,' },
  'a1_s8_c22_l1': { literal: 'Let him die in his chains,' },
  'a1_s9_c2_l2': { literal: 'prisoners who live above ground into our' },
  'a1_s10_c22_l2': { literal: 'he will be better off in the grave.' },
  'a1_s10_c56_l5': { literal: 'return into the dungeon again!' },
  'a1_s10_c57_l2': { literal: 'descend into the dungeon.' },

  // Act 2 Scene 2 Cue 9 (Heal verlieren)
  'a2_s2_c9_l2': {
    original: 'gleich ans Werk gehen, wir haben keine Zeit zu verlieren.',
    literal: 'get straight to work; we have no time to lose.'
  },
  'a2_s2_c9_l3': { remove: true },

  // Act 2 Scene 2 Cue 37
  'a2_s2_c37_l2': {
    original: 'stellen. Ich muß allein mit ihm reden. Steig du statt meiner hinauf.',
    literal: 'pretend. I must speak with him alone. Climb up in my place.'
  },
  'a2_s2_c38_l1': { literal: 'What is passing within me is beyond words!' },

  // Act 2 Scene 2 Cue 42 (Heal hartherziger)
  'a2_s2_c42_l1': {
    original: 'Werdet Ihr immer bei meinen Klagen taub sein, hartherziger Mann?',
    literal: 'Will you always be deaf to my laments, hard-hearted man?'
  },
  'a2_s2_c42_l2': { remove: true },

  // Act 2 Scene 2 Cue 48 (Heal entdecken)
  'a2_s2_c48_l1': {
    original: 'Pizarro! Er ist es, dessen Verbrechen ich zu entdecken wagte.',
    literal: 'Pizarro! It is he whose crimes I dared to expose.'
  },
  'a2_s2_c48_l2': { remove: true },

  'a2_s2_c52_l1': { literal: 'Tell her that I lie here in chains!' },
  'a2_s2_c60_l3': { literal: 'wine that I have in my pitcher. — Fidelio!' },
  'a2_s2_c65_l1': { literal: 'Why, you are trembling all over?' },
  'a2_s2_c68_l1': { literal: 'Yes, it penetrates to the depths of the heart.' },
  'a2_s3_c14_l2': { literal: 'May you be rewarded in better worlds!' },
  'a2_s6_c40_l1': { literal: 'Through love I have succeeded' },
  'a2_s6_c40_l3': { literal: 'Through love let it be praised in song,' },
  'a2_s6_c43_l1': { literal: 'Through love I have succeeded' },
  'a2_s6_c44_l1': { literal: 'Through love she has succeeded' },
  'a2_s6_c45_l1': { literal: 'Through love you have succeeded' },
  'a2_s6_c46_l1': { literal: 'Through love she has succeeded' },
};

for (const [actName, actObj] of [
  ['Fidelio Act 1', fidelioAct1],
  ['Fidelio Act 2', fidelioAct2],
] as const) {
  let patchedCount = 0;
  for (const scene of actObj.scenes) {
    for (const cue of scene.cues) {
      const newLines: Line[] = [];
      for (const line of cue.lines) {
        const fix = FIDELIO_LINE_FIXES[line.id];
        if (fix) {
          if (fix.remove) {
            patchedCount++;
            continue; // filter out orphan line
          }
          if (fix.original) line.original = fix.original;
          if (fix.literal) line.literal = fix.literal;
          patchedCount++;
        }
        // Also smooth calques in all remaining lines
        line.literal = smoothCalques(line.literal);
        newLines.push(line);
      }
      cue.lines = newLines;
    }
  }
  console.log(`[${actName}] Applied ${patchedCount} line fixes and smoothed calques.`);
}

// Function to serialize and write an Act back to disk cleanly
function writeAct(act: Act, exportVar: string, targetFile: string) {
  const content = `import { Act } from '../../types/libretto';\n\nexport const ${exportVar}: Act = ${JSON.stringify(act, null, 2)};\n`;
  fs.writeFileSync(path.resolve(targetFile), content, 'utf-8');
  console.log(`✓ Wrote ${targetFile}`);
}

writeAct(tannhaeuserAct1, 'tannhaeuserAct1', 'src/data/tannhaeuser/act1.ts');
writeAct(tannhaeuserAct2, 'tannhaeuserAct2', 'src/data/tannhaeuser/act2.ts');
writeAct(tannhaeuserAct3, 'tannhaeuserAct3', 'src/data/tannhaeuser/act3.ts');
writeAct(dieZauberfloeteAct1, 'dieZauberfloeteAct1', 'src/data/dieZauberfloete/act1.ts');
writeAct(dieZauberfloeteAct2, 'dieZauberfloeteAct2', 'src/data/dieZauberfloete/act2.ts');
writeAct(fidelioAct1, 'fidelioAct1', 'src/data/fidelio/act1.ts');
writeAct(fidelioAct2, 'fidelioAct2', 'src/data/fidelio/act2.ts');

console.log('All files successfully curated and written.');

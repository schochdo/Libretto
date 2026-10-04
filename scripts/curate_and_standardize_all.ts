import { fidelioAct1 } from '../src/data/fidelio/act1';
import { fidelioAct2 } from '../src/data/fidelio/act2';
import { dieZauberfloeteAct1 } from '../src/data/dieZauberfloete/act1';
import { dieZauberfloeteAct2 } from '../src/data/dieZauberfloete/act2';
import { tannhaeuserAct1 } from '../src/data/tannhaeuser/act1';
import { tannhaeuserAct2 } from '../src/data/tannhaeuser/act2';
import { tannhaeuserAct3 } from '../src/data/tannhaeuser/act3';
import { falstaffAct1 } from '../src/data/falstaff/act1';
import { falstaffAct2 } from '../src/data/falstaff/act2';
import { falstaffAct3 } from '../src/data/falstaff/act3';
import * as fs from 'fs';
import * as path from 'path';

// Precise curation map for Fidelio defective lines
const FIDELIO_TRANSLATIONS: Record<string, string> = {
  'a1_s2_c7_l1': 'I must confess, I am a little tired. The',
  'a1_s2_c7_l3': 'to repair, so that I thought he would not finish with it.',
  'a1_s2_c12_l1': 'I seek to do what is possible for me.',
  'a1_s2_c13_l2': 'be more steadfast. But with every day I have also',
  'a1_s3_c4_l1': 'My hair already stands on end,',
  'a1_s3_c6_l5': 'belongs to a good, contented household; one',
  'a1_s4_c1_l10': 'it is a fine thing, gold,',
  'a1_s4_c1_l19': 'so you may live through many years.',
  'a1_s4_c2_l4': 'of happiness. Oh, this happiness must be the greatest treasure',
  'a1_s4_c4_l3': 'vaults of this castle quite out of breath and',
  'a1_s4_c4_l4': 'exhausted. Why do you not allow me',
  'a1_s4_c5_l2': 'no one, whoever it may be, to the',
  'a1_s4_c5_l4': 'vault into which I shall probably never be allowed to lead you—',
  'a1_s4_c11_l1': 'Or he must have great enemies; that amounts',
  'a1_s4_c11_l2': 'to roughly the same thing. Well, he will not torment me',
  'a1_s4_c11_l3': 'much longer. It cannot last much longer with him—',
  'a1_s5_c1_l6': 'at fearful things.',
  'a1_s5_c11_l2': 'I need help, it is indeed true.',
  'a1_s5_c13_l2': 'Long must you be our friend and counselor.',
  'a1_s5_c15_l1': 'Oh, have courage, oh what ardor!',
  'a1_s5_c17_l2': 'in sweet tears of joy.',
  'a1_s6_c4_l1': 'What do I see? Methinks I recognize this handwriting.',
  'a1_s6_c4_l3': '“I give you notice that the minister has',
  'a1_s6_c4_l4': 'learned that the state prisons',
  'a1_s6_c4_l5': 'over which you preside contain several victims of arbitrary',
  'a1_s6_c4_l7': 'to surprise you with an inspection. Be on',
  'a1_s6_c4_l10': 'lie in chains whom he long believes dead; such a',
  'a1_s6_c4_l12': 'bold deed can dispel all anxieties!',
  'a1_s7_c5_l6': 'the tower at once. Watch with the greatest',
  'a1_s7_c5_l7': 'attentiveness toward the road from Seville. As soon as you',
  'a1_s7_c5_l10': 'Do you understand? Instantly! I expect the utmost',
  'a1_s7_c5_l11': 'punctuality! You answer to me with your head for it. Rocco!',
  'a1_s8_c8_l3': 'We must not tarry at all,',
  'a1_s8_c8_l5': 'the dangerous subject',
  'a1_s8_c8_l6': 'quickly out of the way to clear [to remove him quickly].',
  'a1_s8_c11_l4': 'You fall, I shall stand.',
  'a1_s8_c12_l1': 'I feel my limbs trembling,',
  'a1_s8_c19_l3': 'to kill him means to rescue him,',
  'a1_s8_c21_l3': 'to kill him means to rescue him,',
  'a1_s9_c1_l4': 'nothing moves your tiger-like mind any longer!',
  'a1_s9_c1_l19': 'duty gives me strength',
  'a1_s9_c1_l23': 'where malice cast you into chains,',
  'a1_s9_c1_l26': 'I do not waver, duty gives me strength',
  'a1_s9_c6_l3': 'Fidelio, open the prison gates! But I go to',
  'a1_s10_c8_l7': 'this very day I will lead you down into the dungeons.',
  'a1_s10_c21_l2': 'What could be more dreadful!',
  'a1_s10_c23_l1': 'I follow you, even were it unto death.',
  'a1_s10_c30_l3': 'Even if I myself should perish!',
  'a1_s10_c31_l1': 'Oh, let us tarry no longer,',
  'a1_s10_c42_l2': 'now grant to the prisoners.',
  'a1_s10_c43_l1': 'Let all return quickly!',
  'a1_s10_c44_l1': 'You know indeed how he rages,',
  'a1_s10_c45_l1': 'How it rages within me,',
  'a1_s10_c45_l2': 'my blood is in revolt!',
  'a1_s10_c51_l1': 'Spring’s arrival,',
  'a1_s10_c53_l2': 'now merrily wander to and fro;',
  'a1_s10_c54_l3': 'Lock the prisoners in again,',
  'a1_s10_c54_l4': 'may you never be so audacious again!',
  'a1_s10_c56_l4': 'You hear the command, therefore hesitate not,',
  'a1_s10_c57_l1': 'Now, Rocco, hesitate no longer,',
  'a1_s10_c58_l1': 'No, sir, I hesitate no longer,',
  'a1_s10_c58_l3': 'My limbs tremble!',
  'a1_s10_c58_l4': 'Oh, unfortunate, harsh duty!',
  'a1_s10_c60_l1': 'Fear courses through my limbs,',

  // Act 2 lines
  'a2_s2_c3_l1': 'I already thought we would not find the entrance at all',
  'a2_s2_c9_l1': 'No, no, he is asleep. We must make use of this and',
  'a2_s2_c10_l1': 'It is impossible to distinguish his features. God',
  'a2_s2_c11_l1': 'Here beneath this rubble is the cistern of which',
  'a2_s2_c11_l3': 'to dig in order to reach the opening. Give me the',
  'a2_s2_c28_l2': 'by God! You shall not be a victim!',
  'a2_s2_c28_l3': 'Surely, I will loosen your chains,',
  'a2_s2_c36_l1': 'Yes, he has just raised his head.',
  'a2_s2_c37_l3': 'mine, and clear away enough so that',
  'a2_s2_c40_l1': 'Rested? How could I find rest?',
  'a2_s2_c46_l2': 'of this prison?',
  'a2_s2_c47_l1': 'The governor of this prison is Don Pizarro.',
  'a2_s2_c50_l1': 'Oh, send as soon as possible to Seville, inquire',
  'a2_s2_c53_l1': 'It is impossible, I tell you. I would plunge myself into',
  'a2_s2_c53_l2': 'ruin without having helped you.',
  'a2_s2_c63_l1': 'My assistant and in a few days my son-in-law.',
  'a2_s3_c2_l1': 'I would gladly refresh him, the poor man,',
  'a2_s3_c6_l1': 'I do what my duty commands,',
  'a2_s3_c7_l1': 'This piece of bread—yes, for two days',
  'a2_s3_c8_l2': 'that would truly be daring too much.',
  'a2_s3_c15_l2': 'then a high reward will be granted me.',
  'a2_s3_c16_l1': 'Your suffering here often moved me,',
  'a2_s3_c18_l1': 'You would gladly refresh him, the poor man!',
  'a2_s3_c19_l1': 'I would gladly refresh him, the poor man,',
  'a2_s3_c28_l1': 'My whole heart draws me toward him.',
  'a2_s3_c29_l2': 'may, forget not that Providence reigns everywhere.',
  'a2_s3_c32_l1': 'Yes. Shall I take off his chains?',
  'a2_s3_c33_l1': 'No, but unlock him from the stone. Time',
  'a2_s3_c33_l2': 'presses!',
  'a2_s4_c2_l1': 'Pizarro, whom you sought to overthrow,',
  'a2_s4_c2_l2': 'Pizarro, whom you ought to fear,',
  'a2_s4_c9_l1': 'Pierce',
  'a2_s4_c9_l4': 'for your lust for murder!',
  'a2_s4_c10_l1': 'Madman!',
  'a2_s4_c26_l1': 'What unheard-of courage!',
  'a2_s4_c30_l2': 'Then I sacrifice both to my wrath!',
  'a2_s4_c31_l2': 'first you must pierce this breast!',
  'a2_s4_c35_l1': 'Ha! The Minister! Hell and death!',
  'a2_s4_c38_l1': 'Father Rocco! Father Rocco! The Lord Minister has',
  'a2_s4_c38_l2': 'arrived. His retinue is already waiting in the',
  'a2_s4_c38_l3': 'castle courtyard.',
  'a2_s4_c39_l1': 'Praise be to God!',
  'a2_s4_c44_l2': 'The hypocrites mock me!',
  'a2_s4_c45_l1': 'Oh, dreadful hour,',
  'a2_s4_c46_l1': 'Despair will be in alliance',
  'a2_s4_c46_l4': 'The hypocrites mock me.',
  'a2_s4_c49_l2': 'be in league with this tyrant.',
  'a2_s5_c6_l1': 'Oh God! How great is your mercy!',
  'a2_s5_c11_l1': 'Oh heavenly delight!',
  'a2_s6_c11_l1': 'May all mercy',
  'a2_s6_c18_l1': '... the ornament of womankind I present;',
  'a2_s6_c22_l4': 'that I chose her as my son-in-law.',
  'a2_s6_c28_l2': 'who oppresses innocence!',
  'a2_s6_c28_l4': 'drawn the sword of vengeance.',
  'a2_s6_c32_l1': 'Oh inexpressibly sweet joy!',
  'a2_s6_c34_l2': 'Oh inexpressibly sweet joy!',
  'a2_s6_c36_l2': 'Virtue terrifies the scoundrel.',
  'a2_s6_c37_l1': 'Love guided my endeavor,',
  'a2_s6_c37_l2': 'true love fears nothing.',
  'a2_s6_c38_l1': 'Praise with the glow of lofty joy'
};

// Past participle lemmas that should be tagged as verbs in predicate/compound positions
const VERBAL_PARTICIPLE_LEMMAS = new Set([
  'verlieren', 'rühren', 'verlassen', 'bannen', 'segnen', 'vereinen',
  'schmücken', 'fehmen', 'fangen', 'verfluchen', 'bewegen', 'beugen',
  'aufbringen', 'betrüben', 'belauschen', 'ergrünen', 'beglücken',
  'besänftigen', 'entehren', 'erkennen', 'erhaben', 'empfinden',
  'schließen', 'öffnen', 'wählen', 'leiden', 'sterben', 'führen',
  'verdammen', 'beschämen', 'ergeben', 'befangen', 'beten'
]);

function fixTokensAndGrammar(lines: any[]) {
  for (const line of lines) {
    if (!line.tokens) continue;

    for (const token of line.tokens) {
      const lem = token.lemma ? token.lemma.toLowerCase() : '';
      const w = token.word ? token.word.toLowerCase() : '';

      // Reclassify past participles used in compound verb tenses or verbal predicates
      if (token.pos === 'adjective' && (VERBAL_PARTICIPLE_LEMMAS.has(lem) || (w.startsWith('ge') && (w.endsWith('t') || w.endsWith('en'))))) {
        token.pos = 'verb';
        token.notes = token.notes ? `${token.notes} (Partizip II / verbal predicate)` : 'Past participle (Partizip II) in verbal predicate.';
      }

      // Fix specific mistranslations in tokens
      if (lem === 'bewegt' || (w === 'bewegt' && lem === 'bewegen')) {
        token.pos = 'verb';
        token.meaning = 'moves / touches';
      }
      if (w === 'gelassen' && lem === 'lassen') {
        token.pos = 'verb';
        token.meaning = 'left / allowed';
      }
    }
  }
}

function smoothZauberfloeteTranslations(lines: any[]) {
  for (const line of lines) {
    let lit: string = line.literal;
    
    // Replace awkward hyphenated dative calques with natural English
    lit = lit.replace(/\bto-me\b/g, 'to me');
    lit = lit.replace(/\bto-you\b/g, 'to you');
    lit = lit.replace(/\bto-her\b/g, 'to her');
    lit = lit.replace(/\bto-him\b/g, 'to him');
    lit = lit.replace(/\bto-us\b/g, 'to us');
    lit = lit.replace(/\bto-them\b/g, 'to them');
    lit = lit.replace(/\bof-the\b/g, 'of the');
    lit = lit.replace(/\bof-our\b/g, 'of our');
    lit = lit.replace(/\bin-the\b/g, 'in the');
    lit = lit.replace(/\bto-the\b/g, 'to the');
    lit = lit.replace(/\bfrom-the\b/g, 'from the');
    lit = lit.replace(/\bwith-the\b/g, 'with the');

    // Smooth known awkward calques in Die Zauberflöte
    if (line.id === 'a1_s1_c1_l1') {
      lit = 'Help! Help! Otherwise I am lost,';
    } else if (line.id === 'a1_s1_c3_l1' || lit.includes('for painting handsome')) {
      lit = lit.replace('for painting handsome', 'handsome as a picture');
    } else if (lit.includes('Would I my heart to love consecrate')) {
      lit = 'Were I to consecrate my heart to love,';
    } else if (lit.includes('so must it this youth be')) {
      lit = 'it would have to be this young man.';
    } else if (lit.includes('the former peace to her give can')) {
      lit = 'can restore her former peace to her.';
    } else if (lit.includes('this news to impart')) {
      lit = 'to deliver this news to her.';
    } else if (lit.includes('The bird-catcher am I indeed')) {
      lit = 'The bird-catcher am I, indeed—';
    } else if (lit.includes('Therefore can I glad and merry be')) {
      lit = 'Therefore can I be glad and merry,';
    }

    line.literal = lit;
  }
}

// 1. Process Fidelio
console.log('Processing Fidelio Act 1...');
for (const scene of fidelioAct1.scenes) {
  for (const cue of scene.cues) {
    for (const line of cue.lines) {
      if (FIDELIO_TRANSLATIONS[line.id]) {
        line.literal = FIDELIO_TRANSLATIONS[line.id];
      }
    }
    fixTokensAndGrammar(cue.lines);
  }
}

console.log('Processing Fidelio Act 2...');
for (const scene of fidelioAct2.scenes) {
  // Remove spurious librettist line in Scene 6 if present
  for (const cue of scene.cues) {
    cue.lines = cue.lines.filter(l => !l.original.includes('Joseph Sonnleithner'));
    for (const line of cue.lines) {
      if (FIDELIO_TRANSLATIONS[line.id]) {
        line.literal = FIDELIO_TRANSLATIONS[line.id];
      }
    }
    fixTokensAndGrammar(cue.lines);
  }
}

// 2. Process Zauberflöte
console.log('Processing Zauberflöte Act 1 & 2...');
for (const scene of dieZauberfloeteAct1.scenes) {
  for (const cue of scene.cues) {
    smoothZauberfloeteTranslations(cue.lines);
    fixTokensAndGrammar(cue.lines);
  }
}
for (const scene of dieZauberfloeteAct2.scenes) {
  for (const cue of scene.cues) {
    smoothZauberfloeteTranslations(cue.lines);
    fixTokensAndGrammar(cue.lines);
  }
}

// 3. Process Tannhäuser
console.log('Processing Tannhäuser Acts 1, 2, 3...');
for (const act of [tannhaeuserAct1, tannhaeuserAct2, tannhaeuserAct3]) {
  for (const scene of act.scenes) {
    for (const cue of scene.cues) {
      fixTokensAndGrammar(cue.lines);
    }
  }
}

// Write back files
function writeActFile(filePath: string, varName: string, actObj: any) {
  const content = `import { Act } from '../../types/libretto';\n\nexport const ${varName}: Act = ${JSON.stringify(actObj, null, 2)};\n\nexport default ${varName};\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  ✓ Updated ${path.basename(filePath)}`);
}

writeActFile('src/data/fidelio/act1.ts', 'fidelioAct1', fidelioAct1);
writeActFile('src/data/fidelio/act2.ts', 'fidelioAct2', fidelioAct2);
writeActFile('src/data/dieZauberfloete/act1.ts', 'dieZauberfloeteAct1', dieZauberfloeteAct1);
writeActFile('src/data/dieZauberfloete/act2.ts', 'dieZauberfloeteAct2', dieZauberfloeteAct2);
writeActFile('src/data/tannhaeuser/act1.ts', 'tannhaeuserAct1', tannhaeuserAct1);
writeActFile('src/data/tannhaeuser/act2.ts', 'tannhaeuserAct2', tannhaeuserAct2);
writeActFile('src/data/tannhaeuser/act3.ts', 'tannhaeuserAct3', tannhaeuserAct3);

console.log('\n🎉 Successfully standardized and curated all operas!');

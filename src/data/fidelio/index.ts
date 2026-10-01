import { Opera } from '../../types/libretto';
import { fidelioAct1 } from './act1';
import { fidelioAct2 } from './act2';

export const fidelio: Opera = {
  id: 'fidelio',
  title: 'Fidelio',
  originalTitle: 'Fidelio, oder Die eheliche Liebe',
  composer: 'Ludwig van Beethoven',
  librettists: ['Joseph Sonnleithner', 'Stephan von Breuning', 'Georg Friedrich Treitschke'],
  language: 'de',
  languageLabel: 'German',
  year: 1814,
  sourceCitation: 'Authentic 1814 Vienna performance libretto by Joseph Sonnleithner, Stephan von Breuning, and Georg Friedrich Treitschke; digitized and sourced via LibrettoArchive.',
  sourceUrl: 'https://www.librettoarchive.com/Fidelio_libretto_German',
  sourceName: 'LibrettoArchive',
  publicDomainNotice: 'The original German libretto, dialogue, and historical stage directions are in the worldwide public domain (J. Sonnleithner d. 1835, S. von Breuning d. 1827, G. F. Treitschke d. 1842, L. v. Beethoven d. 1827). All modern English translations, token breakdowns, and grammatical commentaries are newly synthesized and original to Libretto.',
  synopsis: 'To save her husband Florestan—unjustly imprisoned in a subterranean dungeon by the tyrannical governor Don Pizarro—the noblewoman Leonore disguises herself as a young man named "Fidelio" and takes a job assisting the prison jailer Rocco. When Pizarro receives word of a surprise inspection by the King\'s Minister Don Fernando, he resolves to murder Florestan immediately. Descending into the deepest dungeon to dig his grave, Leonore shields Florestan at gunpoint until trumpet fanfares herald the Minister\'s arrival. The tyrant is overthrown, and Leonore personally unlocks her husband\'s chains amid a universal hymn to heroic marital love and liberty.',
  characters: [
    { name: 'Leonore (Fidelio)', voiceType: 'Soprano', description: 'Wife of Florestan, disguised as the young guard Fidelio.' },
    { name: 'Florestan', voiceType: 'Tenor', description: 'A noble Spanish prisoner of state, unjustly condemned by Pizarro.' },
    { name: 'Rocco', voiceType: 'Bass', description: 'The chief jailer of the fortress prison.' },
    { name: 'Marzelline', voiceType: 'Soprano', description: 'Rocco\'s daughter, in love with the disguised Fidelio.' },
    { name: 'Jaquino', voiceType: 'Tenor', description: 'Assistant jailer, in love with Marzelline.' },
    { name: 'Don Pizarro', voiceType: 'Baritone', description: 'The ruthless and corrupt governor of the state fortress.' },
    { name: 'Don Fernando', voiceType: 'Bass', description: 'The King\'s benevolent and enlightened Minister of State.' },
    { name: 'Two Prisoners', voiceType: 'Tenor', description: 'Inmates expressing the agony and hope of captivity.' },
    { name: 'Chorus', voiceType: 'Chorus', description: 'Prisoners, officers, guards, and liberated townspeople.' }
  ],
  acts: [
    fidelioAct1,
    fidelioAct2
  ]
};

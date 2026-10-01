import { Opera } from '../../types/libretto';
import { falstaffAct1 } from './act1';
import { falstaffAct2 } from './act2';
import { falstaffAct3 } from './act3';

export const falstaff: Opera = {
  id: 'falstaff',
  title: 'Falstaff',
  originalTitle: 'Falstaff (Commedia lirica in tre atti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Arrigo Boito'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1893,
  sourceCitation: 'Authentic 1893 Milan premiere libretto by Arrigo Boito; digitized and sourced via LibrettoArchive.',
  sourceUrl: 'https://www.librettoarchive.com/Falstaff_libretto_Italian',
  sourceName: 'LibrettoArchive',
  publicDomainNotice: 'The original Italian libretto by Arrigo Boito and score by Giuseppe Verdi are in the worldwide public domain (G. Verdi d. 1901, A. Boito d. 1918). All modern English translations, token breakdowns, and grammatical commentaries are newly synthesized and original to Libretto.',
  synopsis: 'Sir John Falstaff, a fat, aging, and impecunious knight, attempts to repair his empty purse by simultaneously wooing two wealthy married women of Windsor: Alice Ford and Meg Page. The two wives compare notes, discover the letters are identical, and resolve to teach the boastful knight an unforgettable lesson. Meanwhile, Alice\'s jealous husband Ford learns of Falstaff\'s designs and visits him in disguise under the name "Signor Fontana." In Act II, Falstaff arrives for his assignation only to be stuffed into a dirty laundry basket and dumped out the window into the muddy River Thames. In Act III, lured to a midnight rendezvous at Herne\'s Oak in Windsor Forest dressed as the Black Hunter with stag horns, Falstaff is thoroughly pinched and mocked by townspeople masquerading as fairies. In the confusion, Ford is tricked into blessing the marriage of his daughter Nannetta to her true love Fenton instead of Dr. Caius. Falstaff cheerfully concedes that all the world is a jest, leading the entire cast in a sparkling ten-voice fugue: "Tutto nel mondo è burla!"',
  characters: [
    { name: 'Sir John Falstaff', voiceType: 'Baritone', description: 'An aging, portly, and boastful knight living on credit and past glories.' },
    { name: 'Alice Ford', voiceType: 'Soprano', description: 'Clever and spirited wife of Ford; leader of the merry wives of Windsor.' },
    { name: 'Ford (Signor Fontana)', voiceType: 'Baritone', description: 'A wealthy Windsor citizen plagued by obsessive, comical jealousy.' },
    { name: 'Nannetta', voiceType: 'Soprano', description: 'Ford\'s charming daughter, deeply in love with Fenton.' },
    { name: 'Fenton', voiceType: 'Tenor', description: 'An ardent, poetic young nobleman wooing Nannetta.' },
    { name: 'Mrs. Quickly', voiceType: 'Mezzo-Soprano', description: 'Witty Windsor gossip who serves as the women\'s ambassador.' },
    { name: 'Meg Page', voiceType: 'Mezzo-Soprano', description: 'A merry wife and Alice\'s accomplice in the merry plot.' },
    { name: 'Dr. Caius', voiceType: 'Tenor', description: 'A pompous, irritable doctor whom Ford favors for Nannetta.' },
    { name: 'Bardolfo', voiceType: 'Tenor', description: 'Falstaff\'s ragged follower famous for his flaming red nose.' },
    { name: 'Pistola', voiceType: 'Bass', description: 'Falstaff\'s blustering, swaggering companion.' }
  ],
  acts: [
    falstaffAct1,
    falstaffAct2,
    falstaffAct3
  ]
};

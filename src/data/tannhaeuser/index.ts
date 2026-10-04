import { Opera } from '../../types/libretto';
import { tannhaeuserAct1 } from './act1';
import { tannhaeuserAct2 } from './act2';
import { tannhaeuserAct3 } from './act3';

export const tannhaeuser: Opera = {
  id: 'tannhaeuser',
  title: 'Tannhäuser',
  originalTitle: 'Tannhäuser und der Sängerkrieg auf Wartburg',
  composer: 'Richard Wagner',
  librettists: ['Richard Wagner'],
  language: 'de',
  languageLabel: 'German',
  year: 1845,
  sourceCitation: 'Authentic Dresden and Paris libretto poem by Richard Wagner; digitized and sourced via LibrettoArchive.',
  sourceUrl: 'https://www.librettoarchive.com/Tannh%C3%A4user_libretto_German',
  sourceName: 'LibrettoArchive',
  publicDomainNotice: 'The original German libretto, verses, and stage directions by Richard Wagner are in the worldwide public domain (Richard Wagner d. 1883). All modern English translations, token breakdowns, and grammatical commentaries are newly synthesized and original to Libretto.',
  synopsis: 'Heinrich von Ofterdingen (Tannhäuser), a medieval knight and minstrel, has spent a year trapped in the sensual underworld of the Venusberg with the goddess Venus. Longing for mortal earth, human suffering, and spring, he tears himself away by invoking the Virgin Mary. Welcomed back to the Wartburg by his noble friend Wolfram von Eschenbach and the Landgrave, he reunites with Princess Elisabeth, who has loved him in silence. At the great Wartburg Song Contest on the nature of love, Tannhäuser scandalizes the court by wildly praising Venus. Elisabeth shields him from the knights\' swords and secures him the chance to seek papal forgiveness in Rome. When Pope Urban IV pronounces Heinrich\'s redemption as impossible as his dry wooden staff sprouting green leaves, Tannhäuser returns broken and on the brink of despair. As Venus reappears to claim him, Wolfram invokes Elisabeth\'s heavenly intercession. Elisabeth gives her life to redeem him, Tannhäuser dies in repentance, and arriving young pilgrims bear the Pope\'s staff—miraculously blooming with green shoots.',
  characters: [
    { name: 'Tannhäuser (Heinrich)', voiceType: 'Tenor', description: 'A minstrel-knight torn between profane passion and sacred redemption.' },
    { name: 'Elisabeth', voiceType: 'Soprano', description: 'Niece of the Landgrave; saintly maiden whose pure love saves Heinrich.' },
    { name: 'Venus', voiceType: 'Soprano', description: 'Pagan goddess of love and ruler of the sensual underworld (Venusberg).' },
    { name: 'Wolfram von Eschenbach', voiceType: 'Baritone', description: 'Noble minstrel-knight; steadfast friend secretly in love with Elisabeth.' },
    { name: 'Landgrave Hermann', voiceType: 'Bass', description: 'Landgrave of Thuringia and patron of the arts at the Wartburg.' },
    { name: 'Walther von der Vogelweide', voiceType: 'Tenor', description: 'Eminent minstrel-knight of Thuringia.' },
    { name: 'Biterolf', voiceType: 'Bass', description: 'Chivalrous and battle-hardened minstrel-knight.' },
    { name: 'Young Shepherd', voiceType: 'Soprano', description: 'A youthful shepherd piping on a rock in the Thuringian valley.' },
    { name: 'Older Pilgrims', voiceType: 'Chorus', description: 'Penitents returning joyfully from Rome with papal absolution.' },
    { name: 'Younger Pilgrims', voiceType: 'Chorus', description: 'Pilgrims bearing the miraculously blooming papal staff.' }
  ],
  acts: [
    tannhaeuserAct1,
    tannhaeuserAct2,
    tannhaeuserAct3
  ]
};

export default tannhaeuser;


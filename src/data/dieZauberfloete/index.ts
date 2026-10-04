import { Opera } from '../../types/libretto';
import { dieZauberfloeteAct1 } from './act1';
import { dieZauberfloeteAct2 } from './act2';

export const dieZauberfloete: Opera = {
  id: 'die-zauberfloete',
  title: 'The Magic Flute',
  originalTitle: 'Die Zauberflöte',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Emanuel Schikaneder'],
  language: 'de',
  languageLabel: 'German',
  year: 1791,
  sourceCitation: 'Full authentic German libretto and spoken dialogue by Emanuel Schikaneder (Vienna, 1791); verified against the historical premiere edition and Bärenreiter Neue Mozart-Ausgabe.',
  sourceUrl: 'https://www.librettoarchive.com/The_Magic_Flute_libretto_German',
  sourceName: 'Emanuel Schikaneder (Vienna, 1791) / LibrettoArchive',
  publicDomainNotice: 'The original German libretto, sung text, authentic 1791 spoken dialogue scenes, and historical stage directions are in the worldwide public domain (Emanuel Schikaneder d. 1812, W. A. Mozart d. 1791). Unbowdlerized historical text with educational linguistic and contextual commentary. All direct, syntax-faithful literal translations, vocabulary tokens, and grammatical commentaries are newly authored specifically for German language acquisition.',
  synopsis: 'Prince Tamino is lost in a mythical landscape and saved from a serpent by three ladies attending the Queen of the Night. Persuaded by the Queen to rescue her daughter Pamina from the high priest Sarastro, Tamino and bird-catcher Papageno set out armed with a magic flute and silver bells. Reaching the temple, they discover Sarastro is an enlightened, benevolent guide rather than a wicked tyrant. Through trials of silence, fire, and water, Tamino and Pamina achieve spiritual enlightenment and union, while the Queen of the Night and her conspirators are cast into eternal night.',
  characters: [
    { name: 'Tamino', voiceType: 'Tenor', description: 'A handsome prince from a distant land.' },
    { name: 'Papageno', voiceType: 'Baritone', description: 'A cheerful but cowardly bird-catcher to the Queen.' },
    { name: 'Pamina', voiceType: 'Soprano', description: 'Daughter of the Queen of the Night, destined for Tamino.' },
    { name: 'Queen of the Night', voiceType: 'Soprano', description: 'The nocturnal sorceress representing vengeful passion.' },
    { name: 'Sarastro', voiceType: 'Bass', description: 'High Priest of the Temple of Wisdom and the Sun.' },
    { name: 'Monostatos', voiceType: 'Tenor', description: 'A treacherous overseer at Sarastro\'s temple.' },
    { name: 'Three Ladies', voiceType: 'Soprano', description: 'Veiled attendants of the Queen of the Night.' },
    { name: 'Speaker', voiceType: 'Bass-Baritone', description: 'The wise priest who guards the temple gates.' },
    { name: 'Three Boys', voiceType: 'Soprano', description: 'Guiding spirits who steer the initiates toward virtue.' },
    { name: 'Papagena', voiceType: 'Soprano', description: 'Papageno\'s destined true love, testing his patience.' },
    { name: 'Two Armed Men', voiceType: 'Tenor', description: 'Guardians who administer the trials of Fire and Water.' },
    { name: 'Priests', voiceType: 'Chorus', description: 'Brotherhood of the Temple of Wisdom and the Sun.' },
    { name: 'Slaves', voiceType: 'Spoken', description: 'Servants in Sarastro\'s temple domain.' }
  ],
  acts: [
    dieZauberfloeteAct1,
    dieZauberfloeteAct2
  ]
};

export default dieZauberfloete;


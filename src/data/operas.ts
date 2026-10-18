import { Opera, OperaSummary } from '../types/libretto';

export const OPERA_CATALOG: OperaSummary[] = [
  {
    id: 'fidelio',
    title: 'Fidelio',
    originalTitle: 'Fidelio, oder Die eheliche Liebe',
    composer: 'Ludwig van Beethoven',
    librettists: ['Joseph Sonnleithner', 'Stephan von Breuning', 'Georg Friedrich Treitschke'],
    language: 'de',
    languageLabel: 'German',
    year: 1814,
    actsCount: 2,
    scenesCount: 16,
    celebratedPieces: [
      'Mir ist so wunderbar',
      'Abscheulicher! Wo eilst du hin?',
      'O welche Lust (Prisoners\' Chorus)',
      'Gott! Welch Dunkel hier!'
    ],
    synopsisSnippet: 'Leonore disguises herself as the prison guard Fidelio to rescue her husband Florestan from unjust political imprisonment.'
  },
  {
    id: 'norma',
    title: 'Norma',
    originalTitle: 'Norma (Tragedia lirica in due atti)',
    composer: 'Vincenzo Bellini',
    librettists: ['Felice Romani'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1831,
    actsCount: 2,
    scenesCount: 20,
    celebratedPieces: [
      'Casta diva',
      'Meco all\'altar di Venere',
      'Mira, o Norma',
      'Guerra, guerra!'
    ],
    synopsisSnippet: 'A Druid high priestess in Roman-occupied Gaul faces an agonizing conflict between sacred duty to her people and forbidden love for a Roman proconsul.'
  },
  {
    id: 'carmen',
    title: 'Carmen',
    originalTitle: 'Carmen',
    composer: 'Georges Bizet',
    librettists: ['Henri Meilhac', 'Ludovic Halévy'],
    language: 'fr',
    languageLabel: 'French',
    year: 1875,
    actsCount: 4,
    scenesCount: 25,
    celebratedPieces: [
      'L\'amour est un oiseau rebelle (Habanera)',
      'Près des remparts de Séville (Séguidille)',
      'Votre toast, je peux vous le rendre (Toreador Song)',
      'La fleur que tu m\'avais jetée (Flower Song)'
    ],
    synopsisSnippet: 'A fiercely independent Romani woman seduces the soldier Don José, drawing him into mutiny and banditry before his consuming jealousy leads to tragedy.'
  },
  {
    id: 'don-pasquale',
    title: 'Don Pasquale',
    originalTitle: 'Don Pasquale (Dramma buffo in tre atti)',
    composer: 'Gaetano Donizetti',
    librettists: ['Giovanni Ruffini', 'Gaetano Donizetti'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1843,
    actsCount: 3,
    scenesCount: 18,
    celebratedPieces: [
      'Bella siccome un angelo',
      'Quel guardo il cavaliere',
      'Com\'è gentil',
      'Tornami a dir che m\'ami'
    ],
    synopsisSnippet: 'An elderly, wealthy bachelor is tricked into a mock marriage with a seemingly docile convent girl who immediately turns his household upside down.'
  },
  {
    id: 'lucia-di-lammermoor',
    title: 'Lucia di Lammermoor',
    originalTitle: 'Lucia di Lammermoor (Dramma tragico in tre atti)',
    composer: 'Gaetano Donizetti',
    librettists: ['Salvadore Cammarano'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1835,
    actsCount: 3,
    scenesCount: 14,
    celebratedPieces: [
      'Regnava nel silenzio',
      'Chi mi frena in tal momento? (Sextet)',
      'Il dolce suono... Ardon gl\'incensi (Mad Scene)',
      'Fra poco a me ricovero'
    ],
    synopsisSnippet: 'In the Scottish Lowlands, a fragile noblewoman is coerced into a loveless political marriage, descending into madness on her wedding night.'
  },
  {
    id: 'faust',
    title: 'Faust',
    originalTitle: 'Faust (Opéra en cinq actes)',
    composer: 'Charles Gounod',
    librettists: ['Jules Barbier', 'Michel Carré'],
    language: 'fr',
    languageLabel: 'French',
    year: 1859,
    actsCount: 5,
    scenesCount: 19,
    celebratedPieces: [
      'Avant de quitter ces lieux',
      'Le veau d\'or est toujours debout',
      'Salut! demeure chaste et pure',
      'Ah! je ris de me voir si belle (Jewel Song)',
      'Gloire immortelle de nos aïeux'
    ],
    synopsisSnippet: 'An aging philosopher trades his soul to the demon Méphistophélès for youth and worldly pleasure, bringing ruin upon the innocent Marguerite.'
  },
  {
    id: 'cosi-fan-tutte',
    title: 'Così fan tutte',
    originalTitle: 'Così fan tutte, ossia La scuola degli amanti',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1790,
    actsCount: 2,
    scenesCount: 34,
    celebratedPieces: [
      'Come scoglio immoto resta',
      'Un\'aura amorosa',
      'Soave sia il vento',
      'Non siate ritrosi'
    ],
    synopsisSnippet: 'Two officers disguise themselves to test the fidelity of their fiancées in an intricate school for lovers orchestrated by the cynical Don Alfonso.'
  },
  {
    id: 'don-giovanni',
    title: 'Don Giovanni',
    originalTitle: 'Il dissoluto punito, ossia il Don Giovanni',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1787,
    actsCount: 2,
    scenesCount: 42,
    celebratedPieces: [
      'Madamina, il catalogo è questo',
      'Là ci darem la mano',
      'Fin ch\'han dal vino',
      'Deh, vieni alla finestra',
      'Il commendatore (Damnation Scene)'
    ],
    synopsisSnippet: 'The legendary aristocratic libertine seduces and scorns his way across Spain until a supernatural invitation to dinner seals his eternal fate.'
  },
  {
    id: 'nozze-di-figaro',
    title: 'The Marriage of Figaro',
    originalTitle: 'Le nozze di Figaro, ossia la folle giornata',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1786,
    actsCount: 4,
    scenesCount: 46,
    celebratedPieces: [
      'Se vuol ballare',
      'Non più andrai',
      'Porgi, amor, qualche ristoro',
      'Voi che sapete',
      'Sull\'aria... Che soave zeffiretto'
    ],
    synopsisSnippet: 'Over a single chaotic day, the clever servant Figaro and his fiancée Susanna outwit their master Count Almaviva to protect their impending wedding.'
  },
  {
    id: 'die-zauberfloete',
    title: 'The Magic Flute',
    originalTitle: 'Die Zauberflöte',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Emanuel Schikaneder'],
    language: 'de',
    languageLabel: 'German',
    year: 1791,
    actsCount: 2,
    scenesCount: 23,
    celebratedPieces: [
      'Der Vogelfänger bin ich ja',
      'Dies Bildnis ist bezaubernd schön',
      'O Isis und Osiris',
      'Der Hölle Rache kocht in meinem Herzen',
      'Pa-Pa-Pa-Papageno'
    ],
    synopsisSnippet: 'Prince Tamino and the bird-catcher Papageno navigate trials of fire and water in Sarastro\'s temple to rescue Pamina from the Queen of the Night.'
  },
  {
    id: 'la-boheme',
    title: 'La Bohème',
    originalTitle: 'La Bohème',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1896,
    actsCount: 4,
    scenesCount: 18,
    celebratedPieces: [
      'Che gelida manina',
      'Sì, mi chiamano Mimì',
      'O soave fanciulla',
      'Quando me\'n vo\' (Musetta\'s Waltz)',
      'Vecchia zimarra, senti'
    ],
    synopsisSnippet: 'In the Latin Quarter of 1830s Paris, a circle of impoverished young artists finds love, camaraderie, and heartache amid the freezing winter.'
  },
  {
    id: 'madama-butterfly',
    title: 'Madama Butterfly',
    originalTitle: 'Madama Butterfly (Tragedia giapponese in tre atti)',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1904,
    actsCount: 3,
    scenesCount: 18,
    celebratedPieces: [
      'Dovunque al mondo',
      'Un bel dì, vedremo',
      'Scuoti quella fronda di ciliegio (Flower Duet)',
      'Coro a bocca chiusa (Humming Chorus)',
      'Addio, fiorito asil',
      'Tu, tu, piccolo iddio!'
    ],
    synopsisSnippet: 'A trusting young Japanese geisha devotes her life to an American naval officer, maintaining steadfast faith through years of abandonment.'
  },
  {
    id: 'tosca',
    title: 'Tosca',
    originalTitle: 'Tosca (Melodramma in tre atti)',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1900,
    actsCount: 3,
    scenesCount: 17,
    celebratedPieces: [
      'Recondita armonia',
      'Te Deum',
      'Vissi d\'arte, vissi d\'amore',
      'E lucevan le stelle',
      'O Scarpia, avanti a Dio!'
    ],
    synopsisSnippet: 'A fiery opera diva, her painter lover, and Rome\'s sadistic police chief clash in a lethal struggle of political liberty, passion, and betrayal.'
  },
  {
    id: 'turandot',
    title: 'Turandot',
    originalTitle: 'Turandot (Dramma lirico in tre atti e cinque quadri)',
    composer: 'Giacomo Puccini',
    librettists: ['Giuseppe Adami', 'Renato Simoni'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1926,
    actsCount: 3,
    scenesCount: 9,
    celebratedPieces: [
      'Signore, ascolta!',
      'Non piangere, Liù',
      'In questa reggia',
      'Nessun dorma!',
      'Tu che di gel sei cinta'
    ],
    synopsisSnippet: 'In imperial Beijing, an unknown prince risks execution to solve the three riddles of an icy princess whose frozen heart can only be melted by love.'
  },
  {
    id: 'il-barbiere-di-siviglia',
    title: 'The Barber of Seville',
    originalTitle: "Il barbiere di Siviglia, ossia L'inutile precauzione",
    composer: 'Gioachino Rossini',
    librettists: ['Cesare Sterbini'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1816,
    actsCount: 2,
    scenesCount: 25,
    celebratedPieces: [
      'Largo al factotum',
      'Una voce poco fa',
      'La calunnia è un venticello',
      'A un dottor della mia sorte'
    ],
    synopsisSnippet: 'With the help of the quick-witted barber Figaro, Count Almaviva adopts multiple disguises to win the heart of the guarded Rosina from her guardian.'
  },
  {
    id: 'aida',
    title: 'Aida',
    originalTitle: 'Aida (Opera in quattro atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Antonio Ghislanzoni'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1871,
    actsCount: 4,
    scenesCount: 7,
    celebratedPieces: [
      'Celeste Aida',
      'Ritorna vincitor!',
      'Gloria all\'Egitto (Triumphal March)',
      'O patria mia',
      'O terra, addio'
    ],
    synopsisSnippet: 'An enslaved Ethiopian princess and an Egyptian warrior commander are torn between their secret love and their patriotic duties in ancient Egypt.'
  },
  {
    id: 'falstaff',
    title: 'Falstaff',
    originalTitle: 'Falstaff (Commedia lirica in tre atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Arrigo Boito'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1893,
    actsCount: 3,
    scenesCount: 6,
    celebratedPieces: [
      'L\'onore! Ladri!',
      'È sogno? o realtà?',
      'Quand\'ero paggio',
      'Tutto nel mondo è burla'
    ],
    synopsisSnippet: 'Shakespeare\'s portly rogue Sir John Falstaff attempts to woo two wealthy married women of Windsor, suffering comical humiliations in the process.'
  },
  {
    id: 'il-trovatore',
    title: 'Il trovatore',
    originalTitle: 'Il trovatore (Dramma in quattro parti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Salvadore Cammarano', 'Leone Emanuele Bardare'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1853,
    actsCount: 4,
    scenesCount: 20,
    celebratedPieces: [
      'Tacea la notte placida',
      'Vedi! le fosche notturne (Anvil Chorus)',
      'Stride la vampa!',
      'Il balen del suo sorriso',
      'Di quella pira',
      'D\'amor sull\'ali rosee / Miserere'
    ],
    synopsisSnippet: 'A vengeful gypsy mother, a noble lady-in-waiting, a heroic troubadour, and a proud Count are entangled in a feud that leads to a horrifying revelation.'
  },
  {
    id: 'la-traviata',
    title: 'La traviata',
    originalTitle: 'La traviata',
    composer: 'Giuseppe Verdi',
    librettists: ['Francesco Maria Piave'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1853,
    actsCount: 3,
    scenesCount: 26,
    celebratedPieces: [
      'Libiamo ne\' lieti calici (Brindisi)',
      'Un dì, felice, eterea',
      'Ah, fors\'è lui... Sempre libera',
      'Dite alla giovine',
      'Di Provenza il mar, il suol',
      'Addio, del passato'
    ],
    synopsisSnippet: 'A glamorous Parisian courtesan gives up her life of luxury for true love with a young nobleman, only to be forced into a heart-wrenching sacrifice.'
  },
  {
    id: 'rigoletto',
    title: 'Rigoletto',
    originalTitle: 'Rigoletto (Melodramma in tre atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Francesco Maria Piave'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1851,
    actsCount: 3,
    scenesCount: 13,
    celebratedPieces: [
      'Questa o quella',
      'Pari siamo!',
      'Caro nome che il mio cor',
      'Cortigiani, vil razza dannata',
      'La donna è mobile',
      'Bella figlia dell\'amore (Quartet)'
    ],
    synopsisSnippet: 'A sharp-tongued court jester struggles to shield his innocent daughter from his dissolute master, the Duke of Mantua, with catastrophic consequences.'
  },
  {
    id: 'tannhaeuser',
    title: 'Tannhäuser',
    originalTitle: 'Tannhäuser und der Sängerkrieg auf Wartburg',
    composer: 'Richard Wagner',
    librettists: ['Richard Wagner'],
    language: 'de',
    languageLabel: 'German',
    year: 1845,
    actsCount: 3,
    scenesCount: 11,
    celebratedPieces: [
      'Dir töne Lob! Die Wunder sei\'n gepriesen',
      'Dich, teure Halle, grüss\' ich wieder',
      'Beglückt darf nun dich, o Heimat (Pilgrims\' Chorus)',
      'O du, mein holder Abendstern'
    ],
    synopsisSnippet: 'A minstrel knight torn between sensual abandon in the realm of Venus and spiritual devotion to Elisabeth seeks papal redemption in Rome.'
  }
];

export const getOperaSummaryById = (id: string): OperaSummary => {
  const norm = id === 'magic-flute' ? 'die-zauberfloete' : id;
  return OPERA_CATALOG.find(o => o.id === norm) || OPERA_CATALOG[0];
};

const OPERA_LOADERS: Record<string, () => Promise<{ default: Opera }>> = {
  'fidelio': () => import('./fidelio'),
  'norma': () => import('./norma'),
  'carmen': () => import('./carmen'),
  'don-pasquale': () => import('./donPasquale'),
  'lucia-di-lammermoor': () => import('./luciaDiLammermoor'),
  'faust': () => import('./faust'),
  'cosi-fan-tutte': () => import('./cosiFanTutte'),
  'don-giovanni': () => import('./donGiovanni'),
  'nozze-di-figaro': () => import('./nozzeDiFigaro'),
  'die-zauberfloete': () => import('./dieZauberfloete'),
  'magic-flute': () => import('./dieZauberfloete'),
  'la-boheme': () => import('./laBoheme'),
  'madama-butterfly': () => import('./madamaButterfly'),
  'tosca': () => import('./tosca'),
  'turandot': () => import('./turandot'),
  'il-barbiere-di-siviglia': () => import('./barbiereDiSiviglia'),
  'aida': () => import('./aida'),
  'falstaff': () => import('./falstaff'),
  'il-trovatore': () => import('./ilTrovatore'),
  'la-traviata': () => import('./laTraviata'),
  'rigoletto': () => import('./rigoletto'),
  'tannhaeuser': () => import('./tannhaeuser'),
};

const operaCache = new Map<string, Opera>();

export const loadOperaById = async (id: string): Promise<Opera> => {
  const norm = id === 'magic-flute' ? 'die-zauberfloete' : id;
  if (operaCache.has(norm)) {
    return operaCache.get(norm)!;
  }
  const loader = OPERA_LOADERS[norm] || OPERA_LOADERS['die-zauberfloete'];
  const module = await loader();
  const opera = module.default;
  operaCache.set(norm, opera);
  return opera;
};

export const getCachedOpera = (id: string): Opera | undefined => {
  const norm = id === 'magic-flute' ? 'die-zauberfloete' : id;
  return operaCache.get(norm);
};

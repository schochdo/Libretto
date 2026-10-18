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
    year: 1814
  },
  {
    id: 'norma',
    title: 'Norma',
    originalTitle: 'Norma (Tragedia lirica in due atti)',
    composer: 'Vincenzo Bellini',
    librettists: ['Felice Romani'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1831
  },
  {
    id: 'carmen',
    title: 'Carmen',
    originalTitle: 'Carmen',
    composer: 'Georges Bizet',
    librettists: ['Henri Meilhac', 'Ludovic Halévy'],
    language: 'fr',
    languageLabel: 'French',
    year: 1875
  },
  {
    id: 'don-pasquale',
    title: 'Don Pasquale',
    originalTitle: 'Don Pasquale (Dramma buffo in tre atti)',
    composer: 'Gaetano Donizetti',
    librettists: ['Giovanni Ruffini', 'Gaetano Donizetti'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1843
  },
  {
    id: 'lucia-di-lammermoor',
    title: 'Lucia di Lammermoor',
    originalTitle: 'Lucia di Lammermoor (Dramma tragico in tre atti)',
    composer: 'Gaetano Donizetti',
    librettists: ['Salvadore Cammarano'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1835
  },
  {
    id: 'faust',
    title: 'Faust',
    originalTitle: 'Faust (Opéra en cinq actes)',
    composer: 'Charles Gounod',
    librettists: ['Jules Barbier', 'Michel Carré'],
    language: 'fr',
    languageLabel: 'French',
    year: 1859
  },
  {
    id: 'cosi-fan-tutte',
    title: 'Così fan tutte',
    originalTitle: 'Così fan tutte, ossia La scuola degli amanti',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1790
  },
  {
    id: 'don-giovanni',
    title: 'Don Giovanni',
    originalTitle: 'Il dissoluto punito, ossia il Don Giovanni',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1787
  },
  {
    id: 'nozze-di-figaro',
    title: 'The Marriage of Figaro',
    originalTitle: 'Le nozze di Figaro, ossia la folle giornata',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1786
  },
  {
    id: 'die-zauberfloete',
    title: 'The Magic Flute',
    originalTitle: 'Die Zauberflöte',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Emanuel Schikaneder'],
    language: 'de',
    languageLabel: 'German',
    year: 1791
  },
  {
    id: 'la-boheme',
    title: 'La Bohème',
    originalTitle: 'La Bohème',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1896
  },
  {
    id: 'madama-butterfly',
    title: 'Madama Butterfly',
    originalTitle: 'Madama Butterfly (Tragedia giapponese in tre atti)',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1904
  },
  {
    id: 'tosca',
    title: 'Tosca',
    originalTitle: 'Tosca (Melodramma in tre atti)',
    composer: 'Giacomo Puccini',
    librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1900
  },
  {
    id: 'turandot',
    title: 'Turandot',
    originalTitle: 'Turandot (Dramma lirico in tre atti e cinque quadri)',
    composer: 'Giacomo Puccini',
    librettists: ['Giuseppe Adami', 'Renato Simoni'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1926
  },
  {
    id: 'il-barbiere-di-siviglia',
    title: 'The Barber of Seville',
    originalTitle: "Il barbiere di Siviglia, ossia L'inutile precauzione",
    composer: 'Gioachino Rossini',
    librettists: ['Cesare Sterbini'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1816
  },
  {
    id: 'aida',
    title: 'Aida',
    originalTitle: 'Aida (Opera in quattro atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Antonio Ghislanzoni'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1871
  },
  {
    id: 'falstaff',
    title: 'Falstaff',
    originalTitle: 'Falstaff (Commedia lirica in tre atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Arrigo Boito'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1893
  },
  {
    id: 'il-trovatore',
    title: 'Il trovatore',
    originalTitle: 'Il trovatore (Dramma in quattro parti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Salvadore Cammarano', 'Leone Emanuele Bardare'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1853
  },
  {
    id: 'la-traviata',
    title: 'La traviata',
    originalTitle: 'La traviata',
    composer: 'Giuseppe Verdi',
    librettists: ['Francesco Maria Piave'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1853
  },
  {
    id: 'rigoletto',
    title: 'Rigoletto',
    originalTitle: 'Rigoletto (Melodramma in tre atti)',
    composer: 'Giuseppe Verdi',
    librettists: ['Francesco Maria Piave'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1851
  },
  {
    id: 'tannhaeuser',
    title: 'Tannhäuser',
    originalTitle: 'Tannhäuser und der Sängerkrieg auf Wartburg',
    composer: 'Richard Wagner',
    librettists: ['Richard Wagner'],
    language: 'de',
    languageLabel: 'German',
    year: 1845
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

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
  'carmen': () => import('./carmen'),
  'die-zauberfloete': () => import('./dieZauberfloete'),
  'magic-flute': () => import('./dieZauberfloete'),
  'la-boheme': () => import('./laBoheme'),
  'falstaff': () => import('./falstaff'),
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

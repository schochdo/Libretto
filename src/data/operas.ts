import { Opera } from '../types/libretto';
import { fidelio } from './fidelio';
import { dieZauberfloete } from './dieZauberfloete';
import { falstaff } from './falstaff';
import { tannhaeuser } from './tannhaeuser';

export const OPERA_CATALOG: Opera[] = [
  fidelio,          // Beethoven
  dieZauberfloete,  // Mozart
  falstaff,         // Verdi
  tannhaeuser       // Wagner
];

export const getOperaById = (id: string): Opera => {
  return OPERA_CATALOG.find(o => o.id === id || (id === 'magic-flute' && o.id === 'die-zauberfloete')) || OPERA_CATALOG[0];
};

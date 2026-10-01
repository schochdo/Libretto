import { Opera } from '../types/libretto';
import { dieZauberfloete } from './dieZauberfloete';
import { fidelio } from './fidelio';
import { tannhaeuser } from './tannhaeuser';
import { falstaff } from './falstaff';

export const OPERA_CATALOG: Opera[] = [
  dieZauberfloete,
  fidelio,
  tannhaeuser,
  falstaff
];

export const getOperaById = (id: string): Opera => {
  return OPERA_CATALOG.find(o => o.id === id || (id === 'magic-flute' && o.id === 'die-zauberfloete')) || OPERA_CATALOG[0];
};

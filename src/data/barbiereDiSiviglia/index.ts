import { Opera } from '../../types/libretto';
import { barbiereDiSivigliaAct1 } from './act1';
import { barbiereDiSivigliaAct2 } from './act2';

export const barbiereDiSiviglia: Opera = {
  id: 'il-barbiere-di-siviglia',
  title: 'The Barber of Seville',
  originalTitle: 'Il barbiere di Siviglia, ossia L\'inutile precauzione',
  composer: 'Gioachino Rossini',
  librettists: ['Cesare Sterbini'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1816,
  sourceCitation: "Cesare Sterbini libretto after Pierre Beaumarchais' Le Barbier de Séville (Rome, 1816); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/rossini/il-barbiere-di-siviglia/libretto/',
  sourceName: 'Cesare Sterbini (Rome, 1816) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Gioachino Rossini d. 1868, Cesare Sterbini d. 1831). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In 18th-century Seville, Count Almaviva falls in love with the witty young orphan Rosina, who is kept strictly locked away by her grasping old guardian, Dr. Bartolo, who plans to marry her himself for her dowry. Disguising himself as a poor student named 'Lindoro' so Rosina will love him for himself, the Count enlists the aid of Figaro, the bustling, clever town barber and factotum of Seville. Together they hatch a series of hilarious stratagems: the Count enters Bartolo's house first disguised as a boisterous drunken soldier demanding lodging, and later as 'Don Alonso', a hypocritical music tutor substituting for the supposedly ailing Don Basilio. Despite Bartolo's relentless suspicion and Basilio's slanderous plots, Figaro and Almaviva manage to steal Bartolo's keys, outwit a corrupt notary, and arrange a legal midnight marriage between the Count and Rosina, leaving Bartolo to console himself with Rosina's surrendered dowry.",
  characters: [
    {
      name: 'Figaro',
      voiceType: 'Baritone',
      description: 'The clever, irrepressible town barber and general handyman of Seville.'
    },
    {
      name: "Il Conte d'Almaviva",
      voiceType: 'Tenor',
      description: 'A wealthy Spanish nobleman disguised as the humble student Lindoro to win Rosina.'
    },
    {
      name: 'Rosina',
      voiceType: 'Mezzo-Soprano',
      description: 'A spirited, witty young ward of Dr. Bartolo.'
    },
    {
      name: 'Don Bartolo',
      voiceType: 'Bass',
      description: 'A suspicious, pomposity-ridden physician and Rosina’s elderly guardian.'
    },
    {
      name: 'Don Basilio',
      voiceType: 'Bass',
      description: "A venal, hypocritical music master and Bartolo's scheming ally."
    },
    {
      name: 'Berta',
      voiceType: 'Mezzo-Soprano',
      description: "Dr. Bartolo's disgruntled elderly housekeeper."
    },
    {
      name: 'Fiorello',
      voiceType: 'Bass',
      description: "Count Almaviva's faithful servant."
    },
    {
      name: 'Ambrogio',
      voiceType: 'Bass',
      description: "Dr. Bartolo's drowsy, yawning servant."
    },
    {
      name: "L'Ufficiale",
      voiceType: 'Bass',
      description: 'An officer of the municipal watch.'
    }
  ],
  acts: [
    barbiereDiSivigliaAct1,
    barbiereDiSivigliaAct2
  ]
};

export default barbiereDiSiviglia;

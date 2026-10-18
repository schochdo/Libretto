import { Opera } from '../../types/libretto';
import { nozzeDiFigaroAct1 } from './act1';
import { nozzeDiFigaroAct2 } from './act2';
import { nozzeDiFigaroAct3 } from './act3';
import { nozzeDiFigaroAct4 } from './act4';

export const nozzeDiFigaro: Opera = {
  id: 'nozze-di-figaro',
  title: 'The Marriage of Figaro',
  originalTitle: 'Le nozze di Figaro, ossia la folle giornata',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Lorenzo Da Ponte'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1786,
  sourceCitation: 'Lorenzo Da Ponte libretto after Pierre Beaumarchais (Vienna, 1786); verified against Bärenreiter Neue Mozart-Ausgabe.',
  sourceUrl: 'https://www.opera-arias.com/mozart/le-nozze-di-figaro/libretto/',
  sourceName: 'Lorenzo Da Ponte (Vienna, 1786) / Bärenreiter NMA',
  publicDomainNotice: 'The original Italian libretto, sung text, recitatives, and historical stage directions are in the worldwide public domain (Lorenzo Da Ponte d. 1838, W. A. Mozart d. 1791). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: 'Over the course of one mad day (la folle giornata) at the castle of Aguas-Frescas near Seville, the servant Figaro and the clever maid Susanna prepare for their wedding while scheming to thwart their predatory master, Count Almaviva, who seeks to exercise the feudal right of the first night. Teaming up with the neglected Countess Rosina and the love-struck young page Cherubino, they weave an escalating web of disguises, hidden letters, locked closets, and mistaken identities. When the Count is finally caught wooing his own disguised wife in the moonlit garden, he falls to his knees pleading for forgiveness, culminating in universal reconciliation and joyful celebration.',
  characters: [
    {
      name: 'Figaro',
      voiceType: 'Bass-Baritone',
      description: 'Valet to Count Almaviva and former barber of Seville, clever and resourceful bridegroom.'
    },
    {
      name: 'Susanna',
      voiceType: 'Soprano',
      description: 'Maid to the Countess and betrothed to Figaro, razor-sharp, charming, and courageous.'
    },
    {
      name: 'Count Almaviva',
      voiceType: 'Baritone',
      description: 'Grandee of Spain, proud, jealous, and libertine lord of Aguas-Frescas.'
    },
    {
      name: 'Countess Rosina',
      voiceType: 'Soprano',
      description: 'The noble, dignified wife of Count Almaviva, grieving her husband\'s wandering affection.'
    },
    {
      name: 'Cherubino',
      voiceType: 'Mezzo-Soprano',
      description: 'The Count\'s adolescent page, restlessly smitten with every woman in the palace.'
    },
    {
      name: 'Marcellina',
      voiceType: 'Mezzo-Soprano',
      description: 'The elderly housekeeper holding Figaro\'s debt contract, later revealed to be his mother.'
    },
    {
      name: 'Dr. Bartolo',
      voiceType: 'Bass',
      description: 'A pompous doctor from Seville seeking revenge on Figaro, later revealed as his father.'
    },
    {
      name: 'Don Basilio',
      voiceType: 'Tenor',
      description: 'The scheming, sycophantic music master and palace gossip.'
    },
    {
      name: 'Antonio',
      voiceType: 'Bass',
      description: 'The castle gardener, Susanna\'s uncle and Barbarina\'s father, perpetually grumbling.'
    },
    {
      name: 'Barbarina',
      voiceType: 'Soprano',
      description: 'Antonio\'s young daughter and Cherubino\'s sweetheart.'
    },
    {
      name: 'Don Curzio',
      voiceType: 'Tenor',
      description: 'The stuttering magistrate presiding over the marriage contract dispute.'
    },
    {
      name: 'Coro',
      voiceType: 'Chorus',
      description: 'Peasants, wedding guests, palace servants, and Spanish dancers.'
    }
  ],
  acts: [
    nozzeDiFigaroAct1,
    nozzeDiFigaroAct2,
    nozzeDiFigaroAct3,
    nozzeDiFigaroAct4
  ]
};

export default nozzeDiFigaro;

import { Opera } from '../../types/libretto';
import { donGiovanniAct1 } from './act1';
import { donGiovanniAct2 } from './act2';

export const donGiovanni: Opera = {
  id: 'don-giovanni',
  title: 'Don Giovanni',
  originalTitle: 'Il dissoluto punito, ossia il Don Giovanni',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Lorenzo Da Ponte'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1787,
  sourceCitation: 'Lorenzo Da Ponte libretto (Prague, 1787); verified against the historical premiere edition and Bärenreiter Neue Mozart-Ausgabe.',
  sourceUrl: 'https://www.opera-arias.com/mozart/don-giovanni/libretto/',
  sourceName: 'Lorenzo Da Ponte (Prague, 1787) / Bärenreiter NMA',
  publicDomainNotice: 'The original Italian libretto, sung text, recitatives, and historical stage directions are in the worldwide public domain (Lorenzo Da Ponte d. 1838, W. A. Mozart d. 1791). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: 'In 17th-century Seville, the incorrigible nobleman and libertine Don Giovanni seduces women across Europe aided by his long-suffering servant Leporello. When Giovanni kills the Commendatore in a nocturnal duel defending Donna Anna\'s honor, Anna and her fiancé Don Ottavio vow retribution. Pursued by the vengeful Donna Elvira and disrupting the peasant wedding of Zerlina and Masetto, Giovanni\'s unrepentant arrogance culminates in a graveyard encounter where he brazenly invites the Commendatore\'s marble funerary statue to dinner. At the fateful feast, the Stone Guest arrives, demands repentance, and, when Giovanni refuses to recant, drags the unrepentant sinner into the eternal flames of the abyss.',
  characters: [
    {
      name: 'Don Giovanni',
      voiceType: 'Baritone',
      description: 'An arrogant, dissolute nobleman of voracious romantic appetite and brazen courage.'
    },
    {
      name: 'Leporello',
      voiceType: 'Bass',
      description: 'Don Giovanni\'s pragmatic, long-suffering servant who catalogs his master\'s conquests.'
    },
    {
      name: 'Donna Anna',
      voiceType: 'Soprano',
      description: 'Daughter of the Commendatore, grieving her father\'s death and pursuing justice.'
    },
    {
      name: 'Don Ottavio',
      voiceType: 'Tenor',
      description: 'Donna Anna\'s loyal, aristocratic fiancé, dedicated to her solace and vengeance.'
    },
    {
      name: 'Donna Elvira',
      voiceType: 'Soprano',
      description: 'A noblewoman from Burgos, abandoned by Don Giovanni and torn between fury and love.'
    },
    {
      name: 'Zerlina',
      voiceType: 'Soprano',
      description: 'A flirtatious, clever peasant girl betrothed to Masetto whom Don Giovanni tries to seduce.'
    },
    {
      name: 'Masetto',
      voiceType: 'Bass',
      description: 'A jealous, rough-hewn peasant bridegroom distrustful of the predatory nobleman.'
    },
    {
      name: 'Il Commendatore',
      voiceType: 'Bass',
      description: 'The noble military commander slain by Giovanni, returning as an avenging stone statue.'
    },
    {
      name: 'Coro',
      voiceType: 'Chorus',
      description: 'Peasants, wedding guests, masked musicians, and supernatural spirits of the abyss.'
    }
  ],
  acts: [
    donGiovanniAct1,
    donGiovanniAct2
  ]
};

export default donGiovanni;

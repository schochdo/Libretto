import { Opera } from '../../types/libretto';
import { laTraviataAct1 } from './act1';
import { laTraviataAct2 } from './act2';
import { laTraviataAct3 } from './act3';

export const laTraviata: Opera = {
  id: 'la-traviata',
  title: 'La traviata',
  originalTitle: 'La traviata',
  composer: 'Giuseppe Verdi',
  librettists: ['Francesco Maria Piave'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1853,
  sourceCitation: 'Francesco Maria Piave libretto after Alexandre Dumas fils\'s La Dame aux Camélias (Venice, 1853); verified against Ricordi critical edition.',
  sourceUrl: 'https://www.opera-arias.com/verdi/la-traviata/libretto/',
  sourceName: 'Francesco Maria Piave (Venice, 1853) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, recitatives, and historical stage directions are in the worldwide public domain (Francesco Maria Piave d. 1876, Giuseppe Verdi d. 1901). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: 'In mid-19th century Paris, celebrated courtesan Violetta Valéry discovers genuine, selfless love with the ardent young nobleman Alfredo Germont. Sacrificing her glamorous Parisian salon life, she retreats with Alfredo to a quiet country home. But their idyll is shattered when Alfredo\'s father, Giorgio Germont, demands that Violetta abandon Alfredo to protect the family\'s reputation and his innocent daughter\'s engagement. Sacrificing her own happiness, Violetta parts from Alfredo without revealing the truth. Accused of betrayal and publicly humiliated at a masquerade ball, Violetta lies dying of consumption in Paris. Learning of her sacrifice, Alfredo rushes to her bedside for an ecstatic, heartbreaking reunion just moments before she passes away.',
  characters: [
    {
      name: 'Violetta Valéry',
      voiceType: 'Soprano',
      description: 'A celebrated Parisian courtesan longing for true love while terminally ill with consumption.'
    },
    {
      name: 'Alfredo Germont',
      voiceType: 'Tenor',
      description: 'A passionate young gentleman from Provence who loves Violetta with reckless devotion.'
    },
    {
      name: 'Giorgio Germont',
      voiceType: 'Baritone',
      description: 'Alfredo\'s father, an austere bourgeois patriarch who demands Violetta sacrifice her happiness.'
    },
    {
      name: 'Flora Bervoix',
      voiceType: 'Mezzo-Soprano',
      description: 'Violetta\'s close friend and hostess of Parisian masquerades.'
    },
    {
      name: 'Annina',
      voiceType: 'Soprano',
      description: 'Violetta\'s loyal, devoted chambermaid.'
    },
    {
      name: 'Gastone de Letorières',
      voiceType: 'Tenor',
      description: 'Viscount and Alfredo\'s friend who introduces him to Violetta.'
    },
    {
      name: 'Barone Douphol',
      voiceType: 'Baritone',
      description: 'Violetta\'s wealthy protector and Alfredo\'s rival.'
    },
    {
      name: 'Marchese d\'Obigny',
      voiceType: 'Bass',
      description: 'Aristocratic friend of Flora.'
    },
    {
      name: 'Dottore Grenvil',
      voiceType: 'Bass',
      description: 'Violetta\'s compassionate physician in her terminal illness.'
    },
    {
      name: 'Giuseppe',
      voiceType: 'Tenor',
      description: 'Violetta\'s servant.'
    },
    {
      name: 'Commissionario',
      voiceType: 'Bass',
      description: 'A messenger.'
    },
    {
      name: 'Coro',
      voiceType: 'Chorus',
      description: 'Guests, masqueraders, matadors, gypsies, and Parisian servants.'
    }
  ],
  acts: [
    laTraviataAct1,
    laTraviataAct2,
    laTraviataAct3
  ]
};

export default laTraviata;

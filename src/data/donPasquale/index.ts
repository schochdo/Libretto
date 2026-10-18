import { Opera } from '../../types/libretto';
import { donPasqualeAct1 } from './act1';
import { donPasqualeAct2 } from './act2';
import { donPasqualeAct3 } from './act3';

export const donPasquale: Opera = {
  id: 'don-pasquale',
  title: 'Don Pasquale',
  originalTitle: 'Don Pasquale (Dramma buffo in tre atti)',
  composer: 'Gaetano Donizetti',
  librettists: ['Giovanni Ruffini', 'Gaetano Donizetti'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1843,
  sourceCitation: "Giovanni Ruffini and Gaetano Donizetti libretto after Angelo Anelli's Ser Marcantonio (Paris, 1843); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/donizetti/don-pasquale/libretto/',
  sourceName: 'Giovanni Ruffini / Gaetano Donizetti (Paris, 1843) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Gaetano Donizetti d. 1848, Giovanni Ruffini d. 1881). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In 19th-century Rome, the wealthy, elderly bachelor Don Pasquale resolves to marry in order to disinherit his disobedient nephew Ernesto, who refuses an arranged match because he loves the young, impoverished widow Norina. Pasquale's friend and physician, Dr. Malatesta, concocts an elaborate plot to protect the young lovers: he introduces Norina disguised as his convent-educated, timid sister 'Sofronia.' Entranced by her modest demureness, Pasquale insists on an immediate wedding, arranged by Malatesta's cousin masquerading as a notary. The second the fake contract is signed, 'Sofronia' undergoes a terrifying metamorphosis into a tyrannical, spendthrift shrew. She doubles the servants, orders lavish carriages and jewels, bans Pasquale from his own rooms, and caps her torment by boxing his ears when he tries to forbid her from going to the theater. When Pasquale intercepts a staged love letter arranging a midnight garden rendezvous with a secret lover, he and Malatesta lie in wait to catch her. When the full hoax is revealed, Pasquale is so relieved to be freed from marriage that he eagerly pardons everyone and blesses Ernesto and Norina's union.",
  characters: [
    {
      name: 'Don Pasquale',
      voiceType: 'Bass',
      description: 'An elderly, wealthy, and gullible bachelor living in Rome.'
    },
    {
      name: 'Dottor Malatesta',
      voiceType: 'Baritone',
      description: 'A shrewd physician and friend to both Pasquale and Ernesto.'
    },
    {
      name: 'Ernesto',
      voiceType: 'Tenor',
      description: 'Don Pasquale’s romantic, devoted nephew in love with Norina.'
    },
    {
      name: 'Norina',
      voiceType: 'Soprano',
      description: 'A clever, spirited young widow who disguises herself as Sofronia.'
    },
    {
      name: 'Il Notaro',
      voiceType: 'Bass',
      description: 'Carlino, Malatesta’s cousin masquerading as a notary.'
    }
  ],
  acts: [
    donPasqualeAct1,
    donPasqualeAct2,
    donPasqualeAct3
  ]
};

export default donPasquale;

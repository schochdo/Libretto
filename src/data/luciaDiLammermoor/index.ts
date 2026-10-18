import { Opera } from '../../types/libretto';
import { luciaDiLammermoorAct1 } from './act1';
import { luciaDiLammermoorAct2 } from './act2';
import { luciaDiLammermoorAct3 } from './act3';

export const luciaDiLammermoor: Opera = {
  id: 'lucia-di-lammermoor',
  title: 'Lucia di Lammermoor',
  originalTitle: 'Lucia di Lammermoor (Dramma tragico in tre atti)',
  composer: 'Gaetano Donizetti',
  librettists: ['Salvadore Cammarano'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1835,
  sourceCitation: "Salvadore Cammarano libretto after Sir Walter Scott's The Bride of Lammermoor (Naples, 1835); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/donizetti/lucia-di-lammermoor/libretto/',
  sourceName: 'Salvadore Cammarano (Naples, 1835) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Gaetano Donizetti d. 1848, Salvadore Cammarano d. 1852). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In late 16th-century Scotland, the noble houses of Ashton and Ravenswood are locked in a bitter feud. Lord Enrico Ashton, facing political and financial ruin, arranges for his vulnerable sister Lucia to marry the wealthy Lord Arturo Bucklaw. Unbeknownst to Enrico, Lucia has secretly fallen in love with Edgardo, the last surviving heir of the Ravenswoods. Before departing on a diplomatic mission to France, Edgardo and Lucia pledge eternal vows and exchange rings. While Edgardo is away, Enrico intercepts their correspondence and shows Lucia a forged letter proving Edgardo's betrayal. Heartbroken and pressured by her tutor Raimondo, Lucia agrees to sign the marriage contract. Seconds after signing, Edgardo bursts in, curses Lucia for her apparent infidelity, and throws his ring at her feet. Driven to madness by grief and betrayal, Lucia murders Arturo in their bridal chamber on their wedding night. Wandering into the hall in her bloodstained gown, she sings of her love and collapses dying. Hearing of her death, Edgardo stabs himself among the graves of his ancestors to join her in heaven.",
  characters: [
    {
      name: 'Lucia',
      voiceType: 'Soprano',
      description: 'Enrico’s fragile sister, deeply in love with Edgardo.'
    },
    {
      name: 'Sir Edgardo di Ravenswood',
      voiceType: 'Tenor',
      description: 'The dispossessed master of Ravenswood, in love with Lucia.'
    },
    {
      name: 'Lord Enrico Ashton',
      voiceType: 'Baritone',
      description: 'Lucia’s ruthless, financially desperate brother.'
    },
    {
      name: 'Raimondo Bidebent',
      voiceType: 'Bass',
      description: 'A Calvinist chaplain and tutor to Lucia.'
    },
    {
      name: 'Lord Arturo Bucklaw',
      voiceType: 'Tenor',
      description: 'A wealthy nobleman chosen by Enrico to marry Lucia.'
    },
    {
      name: 'Alisa',
      voiceType: 'Mezzo-Soprano',
      description: "Lucia's confidante and companion."
    },
    {
      name: 'Normanno',
      voiceType: 'Tenor',
      description: 'Captain of the Ashton guard and Enrico’s retainer.'
    }
  ],
  acts: [
    luciaDiLammermoorAct1,
    luciaDiLammermoorAct2,
    luciaDiLammermoorAct3
  ]
};

export default luciaDiLammermoor;

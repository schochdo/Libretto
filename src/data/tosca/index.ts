import { Opera } from '../../types/libretto';
import { toscaAct1 } from './act1';
import { toscaAct2 } from './act2';
import { toscaAct3 } from './act3';

export const tosca: Opera = {
  id: 'tosca',
  title: 'Tosca',
  originalTitle: 'Tosca (Melodramma in tre atti)',
  composer: 'Giacomo Puccini',
  librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1900,
  sourceCitation: "Luigi Illica and Giuseppe Giacosa libretto after Victorien Sardou's play La Tosca (Rome, 1900); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/puccini/tosca/libretto/',
  sourceName: 'Luigi Illica & Giuseppe Giacosa (Rome, 1900) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giacomo Puccini d. 1924, Luigi Illica d. 1919, Giuseppe Giacosa d. 1906). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In Rome in June 1800, during the turmoil following the Battle of Marengo, the painter Mario Cavaradossi secretly shelters his friend Cesare Angelotti, an escaped political prisoner of the deposed Roman Republic. The sadistic police chief Baron Scarpia suspects Cavaradossi and ruthlessly plays upon the jealousy of Mario's lover, the celebrated opera diva Floria Tosca, using an abandoned fan to trace the fugitive. When Cavaradossi is arrested and tortured in Palazzo Farnese, Tosca breaks down and reveals Angelotti's hiding place to spare her lover. Facing Mario's execution, Tosca agrees to yield to Scarpia's lust in exchange for a mock execution with blank cartridges and safe-conduct passes for herself and Mario to flee Rome. The moment Scarpia signs the passes, Tosca grabs a knife from the supper table and stabs him to death. Rushing to the battlements of Castel Sant'Angelo, Tosca watches Mario face the firing squad, only to discover with horror that Scarpia's betrayal was real and Mario is truly dead. As the police arrive to arrest her for Scarpia's murder, Tosca leaps from the fortress parapet into the Tiber below.",
  characters: [
    {
      name: 'Floria Tosca',
      voiceType: 'Soprano',
      description: 'A celebrated Roman opera singer, passionately devout and fiercely jealous.'
    },
    {
      name: 'Mario Cavaradossi',
      voiceType: 'Tenor',
      description: 'A republican painter and Tosca’s devoted lover.'
    },
    {
      name: 'Il Barone Scarpia',
      voiceType: 'Baritone',
      description: 'The corrupt and sadistic Chief of the Roman Police.'
    },
    {
      name: 'Cesare Angelotti',
      voiceType: 'Bass',
      description: 'Former Consul of the Roman Republic and an escaped political prisoner.'
    },
    {
      name: 'Il Sagrestano',
      voiceType: 'Baritone',
      description: 'The nervous, superstitious sacristan of Sant’Andrea della Valle.'
    },
    {
      name: 'Spoletta',
      voiceType: 'Tenor',
      description: 'A police agent and Scarpia’s ruthless henchman.'
    },
    {
      name: 'Sciarrone',
      voiceType: 'Bass',
      description: 'A gendarme and subordinate officer to Scarpia.'
    },
    {
      name: 'Un carceriere',
      voiceType: 'Bass',
      description: 'A jailer at Castel Sant’Angelo.'
    },
    {
      name: 'Un pastore',
      voiceType: 'Contralto',
      description: 'A young shepherd boy singing in the Roman hills at dawn.'
    }
  ],
  acts: [
    toscaAct1,
    toscaAct2,
    toscaAct3
  ]
};

export default tosca;

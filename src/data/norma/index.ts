import { Opera } from '../../types/libretto';
import { normaAct1 } from './act1';
import { normaAct2 } from './act2';

export const norma: Opera = {
  id: 'norma',
  title: 'Norma',
  originalTitle: 'Norma (Tragedia lirica in due atti)',
  composer: 'Vincenzo Bellini',
  librettists: ['Felice Romani'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1831,
  sourceCitation: "Felice Romani libretto after Alexandre Soumet's tragedy Norma, ou L'infanticide (Milan, Teatro alla Scala, 1831); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/bellini/norma/libretto/',
  sourceName: 'Felice Romani (Milan, 1831) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Vincenzo Bellini d. 1835, Felice Romani d. 1865). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In Roman-occupied Gaul circa 50 BC, Norma, high priestess of the Druids, has secretly broken her vows of chastity with the Roman proconsul Pollione, bearing him two children. While her people clamor for a holy war against the Roman oppressors, Norma restrains them with prayers for peace, desperate to protect her lover. Unknown to Norma, Pollione has abandoned his love for her and seduced the young temple novice Adalgisa, urging her to flee to Rome with him. When Adalgisa innocently confides her forbidden love to Norma, Norma at first sympathizes—until Pollione arrives and his treachery is revealed. Anguished and betrayed, Norma contemplates infanticide to spare her sons from Roman slavery, but maternal love prevails. She summons Adalgisa and asks her to take the children to Rome and marry Pollione. Instead, Adalgisa vows loyalty to Norma and attempts to persuade Pollione to return to his family. When Pollione refuses and attempts to abduct Adalgisa from the sacred grove, Norma strikes the bronze shield of Irminsul, sounding the call to war. Pollione is captured inside the sacred precinct. Norma offers him life if he renounces Adalgisa; when he refuses, she gathers the council of Druids and publicly confesses her own guilt. Overwhelmed by Norma's nobility, Pollione rediscovers his love and chooses to die with her on the sacrificial pyre as her father Oroveso tearfully promises to protect the innocent children.",
  characters: [
    {
      name: 'Norma',
      voiceType: 'Soprano',
      description: 'High priestess of the Druids at the temple of Irminsul, daughter of Oroveso.'
    },
    {
      name: 'Pollione',
      voiceType: 'Tenor',
      description: 'Roman proconsul in Gaul, secretly the father of Norma’s children.'
    },
    {
      name: 'Adalgisa',
      voiceType: 'Mezzo-Soprano',
      description: 'A young virgin and novice at the altar of Irminsul.'
    },
    {
      name: 'Oroveso',
      voiceType: 'Bass',
      description: 'Archdruid, leader of the Gallic people and father of Norma.'
    },
    {
      name: 'Clotilde',
      voiceType: 'Soprano',
      description: 'Norma’s confidante and protector of her children.'
    },
    {
      name: 'Flavio',
      voiceType: 'Tenor',
      description: 'A Roman centurion and close friend of Pollione.'
    }
  ],
  acts: [normaAct1, normaAct2]
};

export default norma;

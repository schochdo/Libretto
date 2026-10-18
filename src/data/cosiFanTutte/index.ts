import { Opera } from '../../types/libretto';
import { cosiFanTutteAct1 } from './act1';
import { cosiFanTutteAct2 } from './act2';

export const cosiFanTutte: Opera = {
  id: 'cosi-fan-tutte',
  title: 'Così fan tutte',
  originalTitle: 'Così fan tutte, ossia La scuola degli amanti',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Lorenzo Da Ponte'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1790,
  sourceCitation: 'Lorenzo Da Ponte libretto (Vienna, 1790); verified against Bärenreiter Neue Mozart-Ausgabe.',
  sourceUrl: 'https://www.opera-arias.com/mozart/cosi-fan-tutte/libretto/',
  sourceName: 'Lorenzo Da Ponte (Vienna, 1790) / Bärenreiter NMA',
  publicDomainNotice: 'The original Italian libretto, sung text, recitatives, and historical stage directions are in the worldwide public domain (Lorenzo Da Ponte d. 1838, W. A. Mozart d. 1791). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: 'In sunny 18th-century Naples, the cynical old philosopher Don Alfonso wagers young officers Ferrando and Guglielmo that their fiancées, sisters Dorabella and Fiordiligi, are incapable of remaining faithful if tempted. Feigning a sudden military deployment, the officers depart with tearful farewells only to return disguised as flamboyant Albanian nobles. Assisted by the savvy maidservant Despina (who poses successively as a Mesmeric doctor and a notary), the suitors woo each other\'s partners. After dramatic resistance, fake poisonings, and magnetic cures, both women succumb. When the true officers staged their sudden return, the deception is revealed, concluding in enlightened forgiveness, laughter, and acceptance of human nature.',
  characters: [
    {
      name: 'Fiordiligi',
      voiceType: 'Soprano',
      description: 'A noble lady of Ferrara living in Naples, Dorabella\'s sister, idealistic and high-minded.'
    },
    {
      name: 'Dorabella',
      voiceType: 'Mezzo-Soprano',
      description: 'Fiordiligi\'s sister, vivacious, passionate, and easily swayed by romance.'
    },
    {
      name: 'Guglielmo',
      voiceType: 'Baritone',
      description: 'An officer in the Neapolitan military, lover of Fiordiligi, confident and worldly.'
    },
    {
      name: 'Ferrando',
      voiceType: 'Tenor',
      description: 'An officer in the Neapolitan military, lover of Dorabella, ardent and romantic.'
    },
    {
      name: 'Despina',
      voiceType: 'Soprano',
      description: 'The sisters\' witty, pragmatic chambermaid and mistress of disguises.'
    },
    {
      name: 'Don Alfonso',
      voiceType: 'Bass',
      description: 'An elderly, skeptical philosopher who orchestrates the wager on female fidelity.'
    },
    {
      name: 'Coro',
      voiceType: 'Chorus',
      description: 'Soldiers, boatmen, wedding guests, and Neapolitan townspeople.'
    }
  ],
  acts: [
    cosiFanTutteAct1,
    cosiFanTutteAct2
  ]
};

export default cosiFanTutte;

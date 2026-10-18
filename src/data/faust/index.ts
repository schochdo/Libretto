import { Opera } from '../../types/libretto';
import { faustAct1 } from './act1';
import { faustAct2 } from './act2';
import { faustAct3 } from './act3';
import { faustAct4 } from './act4';
import { faustAct5 } from './act5';

export const faust: Opera = {
  id: 'faust',
  title: 'Faust',
  originalTitle: 'Faust (Opéra en cinq actes)',
  composer: 'Charles Gounod',
  librettists: ['Jules Barbier', 'Michel Carré'],
  language: 'fr',
  languageLabel: 'French',
  year: 1859,
  sourceCitation: "Jules Barbier and Michel Carré libretto after Michel Carré's play Faust et Marguerite and Johann Wolfgang von Goethe's Faust, Part One (Paris, Théâtre Lyrique, 1859; Opéra de Paris, 1869); verified against Choudens critical edition.",
  sourceUrl: 'https://www.opera-arias.com/gounod/faust/libretto/',
  sourceName: 'Jules Barbier & Michel Carré (Paris, 1859) / Choudens',
  publicDomainNotice: 'The original French libretto, sung text, and stage directions are in the worldwide public domain (Charles Gounod d. 1893, Jules Barbier d. 1901, Michel Carré d. 1872). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In 16th-century Germany, the aging scholar Doctor Faust laments that a lifetime of academic learning has yielded neither true wisdom nor love. On the verge of drinking poison, he curses human existence and calls upon Satan. Méphistophélès appears, offering him youth, wealth, and worldly pleasures in exchange for his soul in the afterlife. Tempted by a magical vision of the innocent Marguerite sitting at her spinning wheel, Faust signs the pact and is transformed into a dashing young cavalier. At the town fair of the Kermesse, Valentin entrusts his sister Marguerite to the care of their friends before marching off to war. Méphistophélès terrorizes the crowd with insolent songs and magic wine, but cringes when the soldiers brandish the cross-shaped hilts of their swords. Faust gallantly approaches Marguerite, who modestly rebuffs his advances. Guided by Méphistophélès to Marguerite's garden, Faust leaves a casket of dazzling jewels on her doorstep, which captivates the young maiden. With the help of neighbor Marthe, Méphistophélès distracts the chaperone while Faust seduces Marguerite under the stars. Abandoned and pregnant, Marguerite seeks solace in church, but Méphistophélès torments her with demons declaring her damned. Valentin returns from war and challenges Faust to a duel; guided by the demon, Faust fatally runs Valentin through, and with his dying breath Valentin publicly curses his sister. Marguerite goes mad and is imprisoned for drowning her newborn child. Faust and Méphistophélès break into her dungeon to rescue her, but when Marguerite recognizes the devil, she recoils and throws herself upon God's mercy. She collapses lifeless as Méphistophélès cries 'Condemned!', but a choir of angels proclaims 'Saved!' as her soul ascends to heaven.",
  characters: [
    {
      name: 'Faust',
      voiceType: 'Tenor',
      description: 'An aging philosopher who barters his immortal soul for youth and earthly pleasure.'
    },
    {
      name: 'Méphistophélès',
      voiceType: 'Bass',
      description: 'The Devil in the guise of an elegant gentleman.'
    },
    {
      name: 'Marguerite',
      voiceType: 'Soprano',
      description: 'An innocent, devout maiden seduced and abandoned by Faust.'
    },
    {
      name: 'Valentin',
      voiceType: 'Baritone',
      description: 'A brave soldier and Marguerite’s fiercely protective brother.'
    },
    {
      name: 'Siébel',
      voiceType: 'Mezzo-Soprano',
      description: 'A gentle youth hopelessly devoted to Marguerite.'
    },
    {
      name: 'Wagner',
      voiceType: 'Baritone',
      description: 'A student and companion of Valentin.'
    },
    {
      name: 'Dame Marthe Schwerlein',
      voiceType: 'Mezzo-Soprano',
      description: 'Marguerite’s foolish and flirtatious neighbor.'
    }
  ],
  acts: [faustAct1, faustAct2, faustAct3, faustAct4, faustAct5]
};

export default faust;

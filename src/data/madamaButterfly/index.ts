import { Opera } from '../../types/libretto';
import { butterflyAct1 } from './act1';
import { butterflyAct2 } from './act2';
import { butterflyAct3 } from './act3';

export const madamaButterfly: Opera = {
  id: 'madama-butterfly',
  title: 'Madama Butterfly',
  originalTitle: 'Madama Butterfly (Tragedia giapponese in tre atti)',
  composer: 'Giacomo Puccini',
  librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1904,
  sourceCitation: "Luigi Illica and Giuseppe Giacosa libretto after John Luther Long's short story and David Belasco's play (Milan, Teatro alla Scala, 1904; revised Brescia, 1904); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/puccini/madame-butterfly/libretto/',
  sourceName: 'Luigi Illica & Giuseppe Giacosa (Brescia, 1904) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giacomo Puccini d. 1924, Luigi Illica d. 1919, Giuseppe Giacosa d. 1906). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In Nagasaki, Japan, around 1900, the American naval officer Benjamin Franklin Pinkerton leases a picturesque house on a hill and contracts a temporary Japanese marriage with a 15-year-old former geisha, Cio-Cio-San (Madama Butterfly). The American consul Sharpless warns Pinkerton that the young girl is genuinely in love, but Pinkerton brushes off the counsel and toasts the day he will take a real American wife. Butterfly renounces her ancestral faith for Christianity, inciting the furious wrath of her uncle, the Bonze, who curses her and turns her family against her. Pinkerton comforts the weeping Butterfly in an ecstatic nocturnal love duet. Three years later, Pinkerton has long sailed back to America, leaving Butterfly in poverty with their maid Suzuki. Despite Suzuki's doubts and the advances of the wealthy Prince Yamadori, Butterfly maintains unwavering faith that her husband will return. Sharpless arrives with a letter from Pinkerton announcing his new American wife, but when he hints that Pinkerton may never return, Butterfly proudly presents her blond three-year-old son Dolore. When the warship Abraham Lincoln anchors in the bay, Butterfly and Suzuki joyfully deck the house with blossoms and wait through the night. At dawn, Pinkerton arrives with Sharpless and his new wife Kate to take custody of the child. Overwhelmed by shame and remorse, Pinkerton flees. Butterfly meets Kate and with devastating dignity agrees to give up her boy if Pinkerton comes in half an hour. Left alone, she blindfolds the child, gives him an American flag to play with, and uses her father's sacred dagger to take her own life as Pinkerton's desperate cries echo outside.",
  characters: [
    {
      name: 'Madama Butterfly (Cio-Cio-San)',
      voiceType: 'Soprano',
      description: 'A young Japanese geisha of noble descent, deeply and tragically devoted to Pinkerton.'
    },
    {
      name: 'B. F. Pinkerton',
      voiceType: 'Tenor',
      description: 'Lieutenant in the United States Navy aboard the gunboat Abraham Lincoln.'
    },
    {
      name: 'Suzuki',
      voiceType: 'Mezzo-Soprano',
      description: 'Butterfly’s faithful Japanese maid and confidante.'
    },
    {
      name: 'Sharpless',
      voiceType: 'Baritone',
      description: 'The United States Consul at Nagasaki, compassionate and honorable.'
    },
    {
      name: 'Goro',
      voiceType: 'Tenor',
      description: 'A shrewd Japanese marriage broker (nakodo).'
    },
    {
      name: 'Il Principe Yamadori',
      voiceType: 'Baritone',
      description: 'A wealthy Japanese nobleman seeking Butterfly’s hand in marriage.'
    },
    {
      name: 'Il Bonzo',
      voiceType: 'Bass',
      description: 'Butterfly’s uncle, a high Buddhist priest.'
    },
    {
      name: 'Kate Pinkerton',
      voiceType: 'Mezzo-Soprano',
      description: 'Pinkerton’s American wife.'
    },
    {
      name: 'Yakusidé',
      voiceType: 'Bass',
      description: 'Butterfly’s eccentric uncle.'
    },
    {
      name: 'Il Commissario Imperiale',
      voiceType: 'Bass',
      description: 'The local imperial magistrate conducting the civil wedding.'
    },
    {
      name: "L'Ufficiale del Registro",
      voiceType: 'Bass',
      description: 'The registrar recording the marriage.'
    }
  ],
  acts: [butterflyAct1, butterflyAct2, butterflyAct3]
};

export default madamaButterfly;

import { Opera } from '../../types/libretto';
import { trovatoreAct1 } from './act1';
import { trovatoreAct2 } from './act2';
import { trovatoreAct3 } from './act3';
import { trovatoreAct4 } from './act4';

export const ilTrovatore: Opera = {
  id: 'il-trovatore',
  title: 'Il trovatore',
  originalTitle: 'Il trovatore (Dramma in quattro parti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Salvadore Cammarano', 'Leone Emanuele Bardare'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1853,
  sourceCitation: "Salvadore Cammarano and Leone Emanuele Bardare libretto after Antonio García Gutiérrez's play El trovador (Rome, Teatro Apollo, 1853); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/verdi/il-trovatore/libretto/',
  sourceName: 'Salvadore Cammarano (Rome, 1853) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giuseppe Verdi d. 1901, Salvadore Cammarano d. 1852). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In 15th-century Aragon during civil war, the nobleman Count di Luna is obsessively in love with the noblewoman Leonora. Leonora, however, has given her heart to Manrico, a mysterious troubadour knight and partisan rebel. Unknown to both men, Manrico is actually the Count's long-lost younger brother Garzia, stolen as an infant by the Biscayan gypsy Azucena after her mother was burned at the stake for witchcraft. Seeking revenge, Azucena meant to cast the stolen baby into the fire, but in a delirious haze threw her own child instead, raising Manrico as her beloved son. When Leonora, believing Manrico dead, prepares to enter a convent, Luna attempts to abduct her, but Manrico intervenes and rescues his beloved, taking her to the fortress of Castellor. Luna lays siege to the stronghold, captures Azucena wandering nearby, and condemns her to the pyre. In the middle of his wedding to Leonora, Manrico learns of his mother's impending execution and launches a desperate sortie, but is defeated and imprisoned in Aliaferia Palace. To save Manrico's life, Leonora offers herself to the Count in exchange for his freedom, secretly taking poison from her ring to die before submitting. When Leonora expires in Manrico's prison cell, Luna realizes her deception and orders Manrico beheaded immediately. As the axe falls, Azucena cries out to Luna that he has murdered his own brother, shouting that her mother is finally avenged.",
  characters: [
    {
      name: 'Il Conte di Luna',
      voiceType: 'Baritone',
      description: 'A young nobleman of Aragon, fiercely proud and obsessively in love with Leonora.'
    },
    {
      name: 'Leonora',
      voiceType: 'Soprano',
      description: 'A noble lady-in-waiting to the Princess of Aragon, deeply in love with Manrico.'
    },
    {
      name: 'Azucena',
      voiceType: 'Mezzo-Soprano',
      description: 'A Biscayan gypsy driven by maternal love and an obsession to avenge her mother.'
    },
    {
      name: 'Manrico',
      voiceType: 'Tenor',
      description: 'An officer in the Prince of Urgel’s rebel army, the Troubadour, believed to be Azucena’s son.'
    },
    {
      name: 'Ferrando',
      voiceType: 'Bass',
      description: 'Captain of the Count of Luna’s guard.'
    },
    {
      name: 'Ines',
      voiceType: 'Soprano',
      description: 'Leonora’s confidante.'
    },
    {
      name: 'Ruiz',
      voiceType: 'Tenor',
      description: 'A soldier and trusted comrade of Manrico.'
    },
    {
      name: 'Un vecchio zingaro',
      voiceType: 'Bass',
      description: 'An old gypsy in Azucena’s camp.'
    },
    {
      name: 'Un messo',
      voiceType: 'Tenor',
      description: 'A courier delivering urgent dispatches.'
    }
  ],
  acts: [trovatoreAct1, trovatoreAct2, trovatoreAct3, trovatoreAct4]
};

export default ilTrovatore;

import { Opera } from '../../types/libretto';
import { laBohemeAct1 } from './act1';
import { laBohemeAct2 } from './act2';
import { laBohemeAct3 } from './act3';
import { laBohemeAct4 } from './act4';

export const laBoheme: Opera = {
  id: "la-boheme",
  title: "La Bohème",
  originalTitle: "La Bohème",
  composer: "Giacomo Puccini",
  librettists: [
    "Luigi Illica",
    "Giuseppe Giacosa"
  ],
  language: "it",
  languageLabel: "Italian",
  year: 1896,
  synopsis: "Set in 1830s Paris Latin Quarter, four young, impoverished bohemians—a poet, a painter, a musician, and a philosopher—navigate art, camaraderie, love, and tragedy in a freezing attic. When frail seamstress Mimì knocks on Rodolfo's door seeking a candle flame, an ardent passion blooms, set against Marcello and Musetta's stormy courtship and the bittersweet comedy of Bohemian camaraderie.",
  characters: [
    {
      "name": "Rodolfo",
      "voiceType": "Tenor",
      "description": "An ardent, impoverished young poet living in the Latin Quarter."
    },
    {
      "name": "Mimì",
      "voiceType": "Soprano",
      "description": "A delicate seamstress suffering from tuberculosis who embroiders silk flowers."
    },
    {
      "name": "Marcello",
      "voiceType": "Baritone",
      "description": "A fiery-tempered bohemian painter and Rodolfo's close confidant."
    },
    {
      "name": "Musetta",
      "voiceType": "Soprano",
      "description": "A glamorous, coquettish singer with a golden heart, Marcello's lover."
    },
    {
      "name": "Colline",
      "voiceType": "Bass",
      "description": "A bookish, eccentric philosopher of quiet dignity and dry humor."
    },
    {
      "name": "Schaunard",
      "voiceType": "Baritone",
      "description": "A cheerful bohemian musician whose unexpected windfall feeds the attic."
    },
    {
      "name": "Benoît",
      "voiceType": "Bass",
      "description": "The elderly, gullible landlord easily tricked out of his overdue rent."
    },
    {
      "name": "Alcindoro",
      "voiceType": "Bass",
      "description": "An elderly state councillor and wealthy admirer escorting Musetta."
    },
    {
      "name": "Parpignol",
      "voiceType": "Tenor",
      "description": "An itinerant toy vendor celebrated by the children of the Latin Quarter."
    },
    {
      "name": "Sergente",
      "voiceType": "Bass",
      "description": "The customhouse sergeant on duty at the Barrière d'Enfer."
    },
    {
      "name": "Doganiere",
      "voiceType": "Bass",
      "description": "Customhouse guard admitting workers through the Paris tollgates."
    },
    {
      "name": "Coro",
      "voiceType": "Chorus",
      "description": "Students, work-girls, street vendors, citizens, soldiers, and children."
    }
  ],
  acts: [
    laBohemeAct1,
    laBohemeAct2,
    laBohemeAct3,
    laBohemeAct4,
  ]
};

export default laBoheme;

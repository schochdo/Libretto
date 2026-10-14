import { Opera } from '../../types/libretto';
import { carmenAct1 } from './act1';
import { carmenAct2 } from './act2';
import { carmenAct3 } from './act3';
import { carmenAct4 } from './act4';

export const carmen: Opera = {
  id: "carmen",
  title: "Carmen",
  originalTitle: "Carmen",
  composer: "Georges Bizet",
  librettists: [
    "Henri Meilhac",
    "Ludovic Halévy"
  ],
  language: "fr",
  languageLabel: "French",
  year: 1875,
  synopsis: "Set in 1820s Seville, Spain, Georges Bizet's masterpiece tells the tragic story of Carmen, a fiercely independent and captivating Romani cigarette girl, and Don José, an upright corporal of dragoons who falls under her spell. Seduced by Carmen's unbridled passion and allure, José forsakes his duty, his beloved childhood sweetheart Micaëla, and his honor, turning soldier into outlaw and joining a mountain band of smugglers. But Carmen's volatile spirit cannot be bound; when her affections turn to the glamorous toreador Escamillo, José is consumed by raging jealousy and obsession, leading to a confrontation outside the Seville bullring where tragedy strikes.",
  characters: [
    {
      "name": "Carmen",
      "voiceType": "Mezzo-Soprano",
      "description": "A seductive, fiery, and fiercely independent Romani woman working at the cigarette factory in Seville."
    },
    {
      "name": "Don José",
      "voiceType": "Tenor",
      "description": "A serious, naïve corporal of dragoons from Navarre, torn between maternal devotion, duty, and fatal obsession."
    },
    {
      "name": "Escamillo",
      "voiceType": "Bass-Baritone",
      "description": "The glamorous and celebrated bullfighter of Granada, daring hero of the arena adored by the crowd."
    },
    {
      "name": "Micaëla",
      "voiceType": "Soprano",
      "description": "A gentle, virtuous orphan girl from José's native village who carries his mother's letter, blessing, and prayers."
    },
    {
      "name": "Le Lieutenant",
      "voiceType": "Bass",
      "description": "Zuniga, the authoritative, haughty lieutenant commanding the dragoons in Seville."
    },
    {
      "name": "Moralès",
      "voiceType": "Baritone",
      "description": "A charming, bantering corporal on duty at the guardhouse on the square."
    },
    {
      "name": "Frasquita",
      "voiceType": "Soprano",
      "description": "A vivacious young gypsy girl, close friend and confidante to Carmen."
    },
    {
      "name": "Mercédès",
      "voiceType": "Mezzo-Soprano",
      "description": "A spirited gypsy companion to Carmen and Frasquita."
    },
    {
      "name": "Le Dancaïre",
      "voiceType": "Baritone",
      "description": "The sharp, resolute chief of the mountain smuggling band."
    },
    {
      "name": "Le Remendado",
      "voiceType": "Tenor",
      "description": "The nimble, witty second-in-command of the smugglers."
    },
    {
      "name": "Le Guide",
      "voiceType": "Spoken",
      "description": "A mountain guide conducting Micaëla through the rugged gorges."
    },
    {
      "name": "Lillas Pastia",
      "voiceType": "Spoken",
      "description": "The crafty innkeeper of the clandestine tavern on the outskirts of Seville."
    },
    {
      "name": "Chœur",
      "voiceType": "Chorus",
      "description": "Soldiers, young townsmen, cigarette factory women, gypsies, smugglers, urchins, and bullring spectators."
    }
  ],
  acts: [
    carmenAct1,
    carmenAct2,
    carmenAct3,
    carmenAct4,
  ]
};

export default carmen;

import { Opera } from '../../types/libretto';
import { aidaAct1 } from './act1';
import { aidaAct2 } from './act2';
import { aidaAct3 } from './act3';
import { aidaAct4 } from './act4';

export const aida: Opera = {
  id: 'aida',
  title: 'Aida',
  originalTitle: 'Aida (Opera in quattro atti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Antonio Ghislanzoni'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1871,
  sourceCitation: "Antonio Ghislanzoni libretto based on a scenario by Auguste Mariette (Cairo, Khedivial Opera House, 1871; Milan, Teatro alla Scala, 1872); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/verdi/aida/libretto/',
  sourceName: 'Antonio Ghislanzoni (Cairo, 1871) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giuseppe Verdi d. 1901, Antonio Ghislanzoni d. 1893). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In ancient Egypt during the reign of the Pharaohs, the captive Ethiopian princess Aida lives in servitude as handmaiden to the Egyptian princess Amneris. Aida is passionately in love with the young Egyptian military commander Radamès, who reciprocates her devotion. Amneris also harbors a jealous obsession for Radamès and quickly senses the bond between the two lovers. When Ethiopia attacks Egypt, the goddess Isis selects Radamès to lead the Egyptian army, plunging Aida into torment between her loyalty to her fatherland and her devotion to Radamès. Returning triumphant, Radamès parades through Thebes with captured Ethiopian prisoners, among whom Aida recognizes her father, the Ethiopian King Amonasro, who hides his royal identity. The Pharaoh grants clemency to the captives and bestows Amneris's hand in marriage on Radamès. On the night before the royal wedding, near the moonlit temple of Isis on the Nile, Amonasro forces Aida to extract Egyptian troop secrets from Radamès. Unwittingly, Radamès names the gorge of Napata as the route of march; when Amonasro reveals his true identity, Amneris emerges from the temple denouncing Radamès as a traitor. Amonasro and Aida escape while Radamès yields himself to the High Priest Ramfis. Refusing to defend himself or marry Amneris in exchange for a pardon, Radamès is condemned by the priesthood to be buried alive beneath the temple of Vulcan. In the sealed subterranean crypt, Radamès discovers that Aida has crept into the tomb to share his fate. The two lovers bid farewell to earthly sorrow in each other's arms while Amneris weeps and prays for peace above.",
  characters: [
    {
      name: 'Aida',
      voiceType: 'Soprano',
      description: 'An Ethiopian princess held captive in Egypt as Amneris’s slave.'
    },
    {
      name: 'Radamès',
      voiceType: 'Tenor',
      description: 'A young Egyptian military commander chosen to lead the army.'
    },
    {
      name: 'Amneris',
      voiceType: 'Mezzo-Soprano',
      description: 'Princess of Egypt, daughter of the Pharaoh, passionately in love with Radamès.'
    },
    {
      name: 'Amonasro',
      voiceType: 'Baritone',
      description: 'King of Ethiopia and father of Aida, captured in disguise.'
    },
    {
      name: 'Ramfis',
      voiceType: 'Bass',
      description: 'High Priest of Egypt.'
    },
    {
      name: "Il Re d'Egitto",
      voiceType: 'Bass',
      description: 'The Pharaoh and King of Egypt.'
    },
    {
      name: 'Un messaggiero',
      voiceType: 'Tenor',
      description: 'An Egyptian messenger bringing war dispatches.'
    },
    {
      name: 'Una sacerdotessa',
      voiceType: 'Soprano',
      description: 'The high priestess chanting in the temple of Vulcan.'
    }
  ],
  acts: [aidaAct1, aidaAct2, aidaAct3, aidaAct4]
};

export default aida;

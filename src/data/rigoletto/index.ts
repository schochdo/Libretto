import { Opera } from '../../types/libretto';
import { rigolettoAct1 } from './act1';
import { rigolettoAct2 } from './act2';
import { rigolettoAct3 } from './act3';

export const rigoletto: Opera = {
  id: 'rigoletto',
  title: 'Rigoletto',
  originalTitle: 'Rigoletto (Melodramma in tre atti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Francesco Maria Piave'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1851,
  sourceCitation: "Francesco Maria Piave libretto after Victor Hugo's Le Roi s'amuse (Venice, 1851); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/verdi/rigoletto/libretto/',
  sourceName: 'Francesco Maria Piave (Venice, 1851) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Francesco Maria Piave d. 1876, Giuseppe Verdi d. 1901). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: "In 16th-century Mantua, the hunchbacked jester Rigoletto assists his master, the hedonistic Duke of Mantua, in licentious conquests while cruelly mocking the outraged husbands and fathers of the court. When Count Monterone curses the jester for ridiculing his dishonored daughter, terror grips Rigoletto. Desperate to protect his own sheltered daughter Gilda, he keeps her locked away, but the predatory Duke secretly seduces her under the guise of an impoverished student. The vengeful courtiers abduct Gilda believing her to be Rigoletto's mistress and deliver her into the Duke's bedchambers. Disgraced and grief-stricken, Rigoletto hires the Burgundian assassin Sparafucile to murder the Duke. But when Gilda learns of the assassination plot and witnesses the Duke's continuing infidelities with Maddalena, she resolves to sacrifice her own life to spare the man she loves. Receiving a corpse in a sack at midnight, Rigoletto prepares to triumphantly cast it into the River Mincio, only to hear the Duke singing 'La donna è mobile' in the distance. Tearing the sack open, Rigoletto discovers the dying Gilda, who breathes her last in his arms as Monterone's curse is fatally fulfilled.",
  characters: [
    {
      name: 'Rigoletto',
      voiceType: 'Baritone',
      description: 'The hunchbacked court jester to the Duke of Mantua, protective father to Gilda.'
    },
    {
      name: 'Il Duca di Mantova',
      voiceType: 'Tenor',
      description: 'The handsome, charming, and utterly unscrupulous ruler of Mantua.'
    },
    {
      name: 'Gilda',
      voiceType: 'Soprano',
      description: "Rigoletto's sheltered, innocent, and devoted young daughter."
    },
    {
      name: 'Sparafucile',
      voiceType: 'Bass',
      description: 'A Burgundian assassin-for-hire operating from an isolated inn on the River Mincio.'
    },
    {
      name: 'Maddalena',
      voiceType: 'Contralto',
      description: "Sparafucile's alluring sister and accomplice who lures victims into their trap."
    },
    {
      name: 'Giovanna',
      voiceType: 'Mezzo-Soprano',
      description: "Gilda's venal housekeeper and nursemaid."
    },
    {
      name: 'Il Conte di Monterone',
      voiceType: 'Baritone',
      description: 'An outraged nobleman whose curse upon the Duke and Rigoletto triggers the tragedy.'
    },
    {
      name: 'Marullo',
      voiceType: 'Baritone',
      description: 'A cynical courtier who conceives the plan to abduct Gilda.'
    },
    {
      name: 'Matteo Borsa',
      voiceType: 'Tenor',
      description: 'A hedonistic courtier and confidant of the Duke.'
    },
    {
      name: 'Il Conte di Ceprano',
      voiceType: 'Bass',
      description: 'A proud nobleman humiliated by Rigoletto’s ruthless mockery.'
    },
    {
      name: 'La Contessa di Ceprano',
      voiceType: 'Mezzo-Soprano',
      description: "Ceprano's beautiful wife, openly pursued by the Duke."
    },
    {
      name: 'Usciere di corte',
      voiceType: 'Bass',
      description: 'A court usher in the Ducal Palace.'
    },
    {
      name: 'Paggio della Duchessa',
      voiceType: 'Mezzo-Soprano',
      description: 'A pageboy in service to the Duchess of Mantua.'
    }
  ],
  acts: [
    rigolettoAct1,
    rigolettoAct2,
    rigolettoAct3
  ]
};

export default rigoletto;


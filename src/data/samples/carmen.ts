import { Opera } from '../../types/libretto';

export const carmen: Opera = {
  id: 'carmen',
  title: 'Carmen',
  originalTitle: 'Carmen',
  composer: 'Georges Bizet',
  librettists: ['Henri Meilhac', 'Ludovic Halévy'],
  language: 'fr',
  languageLabel: 'French',
  year: 1875,
  synopsis: 'In Seville, the fiery and free-spirited Romani woman Carmen seduces the naive corporal Don José. He abandons his childhood sweetheart and military career for her, but when Carmen falls for the swaggering toreador Escamillo, jealousy turns deadly.',
  characters: [
    { name: 'Carmen', voiceType: 'Mezzo-Soprano', description: 'A fiercely independent Romani cigarette-factory worker.' },
    { name: 'Don José', voiceType: 'Tenor', description: 'A Basque corporal in the dragoon guard.' },
    { name: 'Micaëla', voiceType: 'Soprano', description: 'A modest village maiden devoted to Don José.' },
    { name: 'Escamillo', voiceType: 'Baritone', description: 'A glamorous and bold bullfighter (toreador).' }
  ],
  acts: [
    {
      actNumber: 1,
      title: 'Acte Premier',
      setting: 'A square in Seville. On the right, the door of the tobacco factory; on the left, the guardhouse.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'L\'amour est un oiseau rebelle (Habanera)',
          description: 'The cigarette factory bell rings. Carmen appears with a cassia flower in her mouth and a bouquet at her bodice, surrounded by young men begging for her affection.',
          cues: [
            {
              id: 'carm_1_1',
              speaker: 'Carmen',
              pieceTitle: 'Habanera: L\'amour est un oiseau rebelle',
              stageDirection: 'Looking boldly at the men around her, swaying to the slow Cuban dance rhythm',
              lines: [
                {
                  id: 'carm_1_1_1',
                  original: 'L\'amour est un oiseau rebelle',
                  literal: 'Love is a bird rebellious [a rebellious bird]',
                  tokens: [
                    { word: 'L\'amour', lemma: 'amour', pos: 'noun', meaning: 'love', notes: 'Masculine singular in modern French; definite article l\' used for abstract concepts.' },
                    { word: 'est', lemma: 'être', pos: 'verb', meaning: 'is (3rd person singular)' },
                    { word: 'un oiseau', lemma: 'oiseau', pos: 'noun', meaning: 'a bird' },
                    { word: 'rebelle', lemma: 'rebelle', pos: 'adjective', meaning: 'rebellious / untamable' }
                  ],
                  grammarNote: 'Post-positive adjective: In French, most evocative adjectives (like "rebelle") follow the noun ("un oiseau rebelle").'
                },
                {
                  id: 'carm_1_1_2',
                  original: 'que nul ne peut apprivoiser,',
                  literal: 'that no one can tame,',
                  tokens: [
                    { word: 'que', lemma: 'que', pos: 'pronoun', meaning: 'that / whom (relative object pronoun)' },
                    { word: 'nul', lemma: 'nul', pos: 'pronoun', meaning: 'no one / nobody', notes: 'Elevated literary negative pronoun equivalent to "personne".' },
                    { word: 'ne', lemma: 'ne', pos: 'particle', meaning: 'negative particle paired with "nul"' },
                    { word: 'peut', lemma: 'pouvoir', pos: 'verb', meaning: 'can / is able to' },
                    { word: 'apprivoiser', lemma: 'apprivoiser', pos: 'verb', meaning: 'to domesticate / tame (a wild animal)' }
                  ]
                },
                {
                  id: 'carm_1_1_3',
                  original: 'et c\'est bien en vain qu\'on l\'appelle,',
                  literal: 'and it is truly in vain that one calls it,',
                  tokens: [
                    { word: 'c\'est', lemma: 'ce + être', pos: 'pronoun', meaning: 'it is' },
                    { word: 'bien en vain', lemma: 'vain', pos: 'idiom', meaning: 'very much in vain / totally futile' },
                    { word: 'qu\'on', lemma: 'on', pos: 'pronoun', meaning: 'that one / that somebody' },
                    { word: 'l\'appelle', lemma: 'appeler', pos: 'verb', meaning: 'calls it/him' }
                  ]
                },
                {
                  id: 'carm_1_1_4',
                  original: 's\'il lui convient de refuser.',
                  literal: 'if it suits him to refuse.',
                  tokens: [
                    { word: 's\'il', lemma: 'si + il', pos: 'conjunction', meaning: 'if it / if he', notes: 'Elision of "si" before "il".' },
                    { word: 'lui convient', lemma: 'convenir à', pos: 'verb', meaning: 'suits him / pleases him', notes: 'Indirect pronominal verb taking indirect object pronoun "lui".' },
                    { word: 'de refuser', lemma: 'refuser', pos: 'verb', meaning: 'to refuse' }
                  ]
                },
                {
                  id: 'carm_1_1_5',
                  original: 'Rien n\'y fait, menace ou prière,',
                  literal: 'Nothing has effect [nothing works], threat or prayer,',
                  tokens: [
                    { word: 'Rien n\'y fait', lemma: 'n\'y faire rien', pos: 'idiom', meaning: 'nothing helps / nothing does any good', notes: 'Common French idiom: "y faire" = to have an effect on something.' },
                    { word: 'menace', lemma: 'menace', pos: 'noun', meaning: 'threat' },
                    { word: 'ou', lemma: 'ou', pos: 'conjunction', meaning: 'or' },
                    { word: 'prière', lemma: 'prière', pos: 'noun', meaning: 'prayer / plea' }
                  ]
                },
                {
                  id: 'carm_1_1_6',
                  original: 'L\'un parle bien, l\'autre se tait;',
                  literal: 'One speaks well, the other keeps quiet;',
                  tokens: [
                    { word: 'L\'un... l\'autre', lemma: 'un / autre', pos: 'idiom', meaning: 'the one... the other' },
                    { word: 'parle', lemma: 'parler', pos: 'verb', meaning: 'speaks' },
                    { word: 'se tait', lemma: 'se taire', pos: 'verb', meaning: 'keeps silent / holds one\'s tongue', notes: 'Pronominal/reflexive verb (se taire).' }
                  ]
                },
                {
                  id: 'carm_1_1_7',
                  original: 'Et c\'est l\'autre que je préfère:',
                  literal: 'And it is the other that I prefer:',
                  tokens: [
                    { word: 'que je préfère', lemma: 'préférer', pos: 'verb', meaning: 'that I prefer' }
                  ]
                },
                {
                  id: 'carm_1_1_8',
                  original: 'Il n\'a rien dit; mais il me plaît.',
                  literal: 'He has said nothing; but he pleases me [I like him].',
                  tokens: [
                    { word: 'Il n\'a rien dit', lemma: 'dire', pos: 'verb', meaning: 'he has said nothing', notes: 'Passé composé with negative "ne... rien".' },
                    { word: 'il me plaît', lemma: 'plaire à', pos: 'verb', meaning: 'he pleases me / I am attracted to him', notes: 'In French, "plaire à qqn" flips the English subject: the pleasing thing is the grammatical subject.' }
                  ],
                  poeticContext: 'Carmen is looking directly at Don José, who alone among the men is ignoring her, occupied with cleaning his rifle.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

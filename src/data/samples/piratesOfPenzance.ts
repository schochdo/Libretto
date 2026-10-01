import { Opera } from '../../types/libretto';

export const piratesOfPenzance: Opera = {
  id: 'pirates-of-penzance',
  title: 'The Pirates of Penzance',
  originalTitle: 'The Pirates of Penzance; or, The Slave of Duty',
  composer: 'Arthur Sullivan',
  librettists: ['W. S. Gilbert'],
  language: 'en',
  languageLabel: 'English (Victorian Gloss)',
  year: 1879,
  synopsis: 'Frederic, indentured to tender-hearted pirates due to a nursemaid\'s mistake, comes of age and determines to devote himself to exterminating piracy, only to learn he was born in a leap year on February 29th and is legally still an apprentice.',
  characters: [
    { name: 'Major-General Stanley', voiceType: 'Baritone', description: 'A pompous British officer with encyclopedic knowledge of everything except military strategy.' },
    { name: 'Mabel', voiceType: 'Soprano', description: 'General Stanley\'s virtuous youngest daughter.' },
    { name: 'Frederic', voiceType: 'Tenor', description: 'A conscientious pirate apprentice.' },
    { name: 'The Pirate King', voiceType: 'Bass-Baritone', description: 'The theatrical leader of the gentlemanly pirates.' }
  ],
  acts: [
    {
      actNumber: 1,
      title: 'Act I',
      setting: 'A rocky seashore on the coast of Cornwall. Noon.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'I am the very model of a modern Major-General',
          description: 'Major-General Stanley bursts onto the scene to rescue his daughters, reciting his dazzling credentials in rapid-fire patter song.',
          cues: [
            {
              id: 'pirates_1_1',
              speaker: 'Major-General',
              pieceTitle: 'Major-General\'s Song (Patter Aria)',
              stageDirection: 'Striking a swaggering martial pose before the assembled pirates',
              lines: [
                {
                  id: 'pirates_1_1_1',
                  original: 'I am the very model of a modern Major-General,',
                  literal: 'I am the exact epitome / archetype of a contemporary two-star army commander,',
                  tokens: [
                    { word: 'very model', lemma: 'model', pos: 'noun', meaning: 'exact archetype / prime example' },
                    { word: 'Major-General', lemma: 'Major-General', pos: 'noun', meaning: 'two-star military general officer' }
                  ],
                  grammarNote: 'Characteristic Victorian "patter song" meter: rapid dactylic and anapestic rhythm requiring extreme vocal diction.'
                },
                {
                  id: 'pirates_1_1_2',
                  original: 'I\'ve information vegetable, animal, and mineral,',
                  literal: 'I possess factual knowledge of flora, fauna, and geology / chemistry,',
                  tokens: [
                    { word: 'vegetable, animal, and mineral', lemma: 'natural history', pos: 'idiom', meaning: 'the traditional tripartite division of the natural world in 19th c. science' }
                  ]
                },
                {
                  id: 'pirates_1_1_3',
                  original: 'I know the kings of England, and I quote the fights historical',
                  literal: 'I know the monarchs of Britain, and I cite famous historical battles',
                  tokens: [
                    { word: 'fights historical', lemma: 'fights', pos: 'noun', meaning: 'historical battles', notes: 'Poetic inversion of adjective and noun to create feminine rhyme with "categorical".' }
                  ]
                },
                {
                  id: 'pirates_1_1_4',
                  original: 'From Marathon to Waterloo, in order categorical;',
                  literal: 'From the Battle of Marathon (490 BC) to Waterloo (1815 AD), in systematic chronological order;',
                  tokens: [
                    { word: 'categorical', lemma: 'categorical', pos: 'adjective', meaning: 'unambiguous / systematic / classified by category' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

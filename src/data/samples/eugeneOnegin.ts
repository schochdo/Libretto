import { Opera } from '../../types/libretto';

export const eugeneOnegin: Opera = {
  id: 'eugene-onegin',
  title: 'Eugene Onegin',
  originalTitle: 'Евгений Онегин',
  composer: 'Pyotr Ilyich Tchaikovsky',
  librettists: ['Konstantin Shilovsky', 'Pyotr Tchaikovsky', 'after Alexander Pushkin'],
  language: 'ru',
  languageLabel: 'Russian',
  year: 1879,
  synopsis: 'The cynical aristocrat Eugene Onegin spurns the passionate love letter of the young country girl Tatyana. Years later, after killing his friend Lensky in a duel, Onegin encounters Tatyana again—now a poised aristocratic princess—and realizes too late what he threw away.',
  characters: [
    { name: 'Tatyana', voiceType: 'Soprano', description: 'A dreamy, bookish country girl.' },
    { name: 'Eugene Onegin', voiceType: 'Baritone', description: 'A world-weary Saint Petersburg dandy.' },
    { name: 'Vladimir Lensky', voiceType: 'Tenor', description: 'A romantic young poet and Onegin\'s friend.' },
    { name: 'Olga', voiceType: 'Contralto', description: 'Tatyana\'s lighthearted younger sister, engaged to Lensky.' }
  ],
  acts: [
    {
      actNumber: 2,
      title: 'Act II, Scene 2',
      setting: 'A snowy clearing by an old watermill at sunrise. Winter mist hangs over the frozen river.',
      scenes: [
        {
          sceneNumber: 2,
          title: 'Kuda, kuda vy udalilis (Lensky\'s Aria)',
          description: 'Awaiting the fatal pistol duel with Onegin at dawn, Lensky sings his poignant farewell to youth, poetry, and his beloved Olga.',
          cues: [
            {
              id: 'onegin_2_1',
              speaker: 'Lensky',
              pieceTitle: 'Aria: Kuda, kuda vï udalilis\' (Where, oh where have you fled)',
              stageDirection: 'Wrapped in his heavy cloak against the bitter winter dawn, gazing into the mist',
              lines: [
                {
                  id: 'onegin_2_1_1',
                  original: 'Куда, куда, куда вы удалились,',
                  literal: 'Where, where, where have you departed,',
                  transliteration: 'Kuda, kuda, kuda vy udalilis,',
                  tokens: [
                    { word: 'Куда', lemma: 'куда', pos: 'adverb', meaning: 'whither / to where (direction)' },
                    { word: 'вы', lemma: 'вы', pos: 'pronoun', meaning: 'you (plural/formal)' },
                    { word: 'удалились', lemma: 'удалиться', pos: 'verb', meaning: 'departed / withdrew / moved far away', notes: 'Reflexive past plural verb with suffix -сь.' }
                  ]
                },
                {
                  id: 'onegin_2_1_2',
                  original: 'весны моей златые дни?',
                  literal: 'of spring of mine the golden days?',
                  transliteration: 'vesny moyey zlatye dni?',
                  tokens: [
                    { word: 'весны', lemma: 'весна', pos: 'noun', meaning: 'of spring (genitive singular)' },
                    { word: 'моей', lemma: 'мой', pos: 'pronoun', meaning: 'of my / mine (genitive feminine)' },
                    { word: 'златые', lemma: 'золотой', pos: 'adjective', meaning: 'golden', notes: 'Poetic Church Slavonic form (златые) instead of standard Russian (золотые).' },
                    { word: 'дни', lemma: 'день', pos: 'noun', meaning: 'days (nominative plural)' }
                  ],
                  grammarNote: 'Pushkin\'s poetic word order places genitive modifiers "весны моей" before the subject "златые дни". Note the archaism "златые" (non-pleophonic form).'
                },
                {
                  id: 'onegin_2_1_3',
                  original: 'Что день грядущий мне готовит?',
                  literal: 'What does [the] coming day prepare for me?',
                  transliteration: 'Chto den gryadushchiy mne gotovit?',
                  tokens: [
                    { word: 'Что', lemma: 'что', pos: 'pronoun', meaning: 'what' },
                    { word: 'день', lemma: 'день', pos: 'noun', meaning: 'day' },
                    { word: 'грядущий', lemma: 'грядущий', pos: 'adjective', meaning: 'coming / future', notes: 'Active present participle used as adjective.' },
                    { word: 'мне', lemma: 'я', pos: 'pronoun', meaning: 'for me (dative of indirect object)' },
                    { word: 'готовит', lemma: 'готовить', pos: 'verb', meaning: 'prepares' }
                  ]
                },
                {
                  id: 'onegin_2_1_4',
                  original: 'Его мой взор напрасно ловит,',
                  literal: 'It [the day] my gaze in vain catches,',
                  transliteration: 'Yego moy vzor naprasno lovit,',
                  tokens: [
                    { word: 'Его', lemma: 'он', pos: 'pronoun', meaning: 'him / it (accusative masculine, referring to day)' },
                    { word: 'мой взор', lemma: 'взор', pos: 'noun', meaning: 'my gaze / vision' },
                    { word: 'напрасно', lemma: 'напрасно', pos: 'adverb', meaning: 'in vain / futilely' },
                    { word: 'ловит', lemma: 'ловить', pos: 'verb', meaning: 'catches / seeks to grasp' }
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

import { Opera } from '../../types/libretto';

export const laBoheme: Opera = {
  id: 'la-boheme',
  title: 'La Bohème',
  originalTitle: 'La Bohème',
  composer: 'Giacomo Puccini',
  librettists: ['Luigi Illica', 'Giuseppe Giacosa'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1896,
  synopsis: 'Set in 1830s Paris Latin Quarter, four young, impoverished bohemians—a poet, a painter, a musician, and a philosopher—navigate art, camaraderie, love, and tragedy in a freezing attic.',
  characters: [
    { name: 'Rodolfo', voiceType: 'Tenor', description: 'A passionate, impoverished poet.' },
    { name: 'Mimì', voiceType: 'Soprano', description: 'A delicate seamstress suffering from tuberculosis.' },
    { name: 'Marcello', voiceType: 'Baritone', description: 'A spirited painter, Rodolfo\'s close friend.' },
    { name: 'Colline', voiceType: 'Bass', description: 'A young philosopher of eccentric habits.' },
    { name: 'Schaunard', voiceType: 'Baritone', description: 'A musician who brings sudden fortune to the garret.' }
  ],
  acts: [
    {
      actNumber: 1,
      title: 'Quadro Primo: In soffitta',
      setting: 'A large garret in Paris. A stove, a table, a small cupboard, a few chairs. Outside the window, a panoramic view of snow-covered rooftops.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'Questo Mar Rosso mi ammollisce e assidera',
          description: 'Christmas Eve. Marcello is working on his large painting while Rodolfo gazes out over the frozen roofs of Paris.',
          cues: [
            {
              id: 'boh_1_1',
              speaker: 'Marcello',
              stageDirection: 'Standing before his easel, blowing on his stiff fingers to warm them',
              lines: [
                {
                  id: 'boh_1_1_1',
                  original: 'Questo Mar Rosso mi ammollisce e assidera',
                  literal: 'This Red Sea makes me soggy and freezes [me] to numbness',
                  tokens: [
                    { word: 'Questo', lemma: 'questo', pos: 'adjective', meaning: 'this' },
                    { word: 'Mar', lemma: 'mare', pos: 'noun', meaning: 'sea', notes: 'Apocope (truncation) of "mare", poetic Italian common in 19th c. verse.' },
                    { word: 'Rosso', lemma: 'rosso', pos: 'adjective', meaning: 'red' },
                    { word: 'mi', lemma: 'io', pos: 'pronoun', meaning: 'to me / me' },
                    { word: 'ammollisce', lemma: 'ammollire', pos: 'verb', meaning: 'softens / makes soggy', notes: 'Present indicative 3rd person singular.' },
                    { word: 'e', lemma: 'e', pos: 'conjunction', meaning: 'and' },
                    { word: 'assidera', lemma: 'assiderare', pos: 'verb', meaning: 'freezes intensely / numbs with cold' }
                  ],
                  grammarNote: 'Notice the double verb pair "ammollisce e assidera"—one refers to the wetness of paint and dampness of the room, the other to the bitter chill.'
                },
                {
                  id: 'boh_1_1_2',
                  original: 'come se crudo e freddo mi piovesse sul collo.',
                  literal: 'as if raw and cold it rained on my neck.',
                  tokens: [
                    { word: 'come se', lemma: 'come se', pos: 'conjunction', meaning: 'as if', notes: 'Always triggers the subjunctive mood in Italian.' },
                    { word: 'crudo', lemma: 'crudo', pos: 'adjective', meaning: 'raw / bitter' },
                    { word: 'freddo', lemma: 'freddo', pos: 'adjective', meaning: 'cold' },
                    { word: 'piovesse', lemma: 'piovere', pos: 'verb', meaning: 'it were raining', notes: 'Past subjunctive (congiuntivo imperfetto) governed by "come se".' },
                    { word: 'sul collo', lemma: 'sul collo', pos: 'preposition', meaning: 'on the neck' }
                  ]
                },
                {
                  id: 'boh_1_1_3',
                  original: 'Per vendicarmi, affogo un Faraone!',
                  literal: 'In order to avenge myself, I drown a Pharaoh!',
                  tokens: [
                    { word: 'Per', lemma: 'per', pos: 'preposition', meaning: 'in order to / for' },
                    { word: 'vendicarmi', lemma: 'vendicarsi', pos: 'verb', meaning: 'avenge myself', notes: 'Reflexive infinitive with enclitic pronoun "-mi" attached to verb stem.' },
                    { word: 'affogo', lemma: 'affogare', pos: 'verb', meaning: 'I drown / suffocate' },
                    { word: 'un Faraone', lemma: 'faraone', pos: 'noun', meaning: 'a Pharaoh' }
                  ],
                  poeticContext: 'Marcello is taking out his frustration at the freezing room on the figures in his painting "The Crossing of the Red Sea".'
                }
              ]
            },
            {
              id: 'boh_1_2',
              speaker: 'Rodolfo',
              stageDirection: 'Looking pensively out the window',
              lines: [
                {
                  id: 'boh_1_2_1',
                  original: 'Nei cieli bigi guardo fumar dai mille comignoli Parigi',
                  literal: 'In the gray skies I watch smoking from thousand chimneys Paris',
                  tokens: [
                    { word: 'Nei cieli', lemma: 'cielo', pos: 'noun', meaning: 'in the skies' },
                    { word: 'bigi', lemma: 'bigio', pos: 'adjective', meaning: 'gray / ashen', notes: 'Literary Italian for gray (grigio).' },
                    { word: 'guardo', lemma: 'guardare', pos: 'verb', meaning: 'I watch / look at' },
                    { word: 'fumar', lemma: 'fumare', pos: 'verb', meaning: 'smoke / puff smoke', notes: 'Truncated infinitive (fumar instead of fumare).' },
                    { word: 'dai mille comignoli', lemma: 'comignolo', pos: 'noun', meaning: 'from the thousand chimneys' },
                    { word: 'Parigi', lemma: 'Parigi', pos: 'noun', meaning: 'Paris' }
                  ],
                  grammarNote: 'Inverted poetic word order: the direct object "Parigi" (Paris) is placed at the end of the line for lyrical cadence and rhyme with "bigi".'
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 2,
          title: 'Che gelida manina (Rodolfo\'s Aria)',
          description: 'Rodolfo and Mimì are left alone in the dark after their candles blow out while looking for Mimì\'s dropped apartment key. Rodolfo\'s hand brushes against hers.',
          cues: [
            {
              id: 'boh_1_3',
              speaker: 'Rodolfo',
              pieceTitle: 'Aria: Che gelida manina',
              stageDirection: 'Taking Mimì\'s hand in his own in the darkness',
              lines: [
                {
                  id: 'boh_1_3_1',
                  original: 'Che gelida manina!',
                  literal: 'What [a] cold little hand!',
                  tokens: [
                    { word: 'Che', lemma: 'che', pos: 'pronoun', meaning: 'what / what a' },
                    { word: 'gelida', lemma: 'gelido', pos: 'adjective', meaning: 'icy cold / frozen' },
                    { word: 'manina', lemma: 'mano', pos: 'noun', meaning: 'little hand', notes: 'Diminutive suffix "-ina" added to "mano" (hand), expressing tenderness.' }
                  ],
                  grammarNote: '"Mano" is one of Italian\'s few feminine nouns ending in "-o" (la mano, le mani). Hence "gelida manina" retains feminine agreements.'
                },
                {
                  id: 'boh_1_3_2',
                  original: 'Se la lasci riscaldar.',
                  literal: 'If it [to me] you let warm up.',
                  tokens: [
                    { word: 'Se', lemma: 'se', pos: 'conjunction', meaning: 'if' },
                    { word: 'la', lemma: 'la', pos: 'pronoun', meaning: 'it (feminine direct object, referring to the hand)' },
                    { word: 'lasci', lemma: 'lasciare', pos: 'verb', meaning: 'you allow / let', notes: '2nd person singular present: lasci' },
                    { word: 'riscaldar', lemma: 'riscaldare', pos: 'verb', meaning: 'warm up / reheat', notes: 'Apocope of infinitive riscaldare.' }
                  ],
                  grammarNote: 'Idiomatic causative construction: "lasciar + infinitive" = "to let/allow something to be done".'
                },
                {
                  id: 'boh_1_3_3',
                  original: 'Cercar che giova? Al buio non si trova.',
                  literal: 'To search what does it avail? In the dark one does not find [it].',
                  tokens: [
                    { word: 'Cercar', lemma: 'cercare', pos: 'verb', meaning: 'to search / looking' },
                    { word: 'che giova', lemma: 'giovare', pos: 'verb', meaning: 'what is the use / what does it profit', notes: 'Archaic rhetorical idiom: "che giova?" = "what good is it?"' },
                    { word: 'Al buio', lemma: 'buio', pos: 'noun', meaning: 'in the dark' },
                    { word: 'non si trova', lemma: 'trovarsi', pos: 'verb', meaning: 'it is not found / one cannot find', notes: 'Impersonal "si" construction with 3rd person singular verb.' }
                  ]
                },
                {
                  id: 'boh_1_3_4',
                  original: 'Ma per fortuna è una notte di luna,',
                  literal: 'But fortunately it is a night of moon [a moonlit night],',
                  tokens: [
                    { word: 'Ma', lemma: 'ma', pos: 'conjunction', meaning: 'but' },
                    { word: 'per fortuna', lemma: 'fortuna', pos: 'adverb', meaning: 'fortunately / by good luck' },
                    { word: 'è', lemma: 'essere', pos: 'verb', meaning: 'it is' },
                    { word: 'una notte', lemma: 'notte', pos: 'noun', meaning: 'a night' },
                    { word: 'di luna', lemma: 'luna', pos: 'noun', meaning: 'of moon / moonlit' }
                  ]
                },
                {
                  id: 'boh_1_3_5',
                  original: 'e qui la luna l\'abbiamo vicina.',
                  literal: 'and here the moon we have it near.',
                  tokens: [
                    { word: 'e qui', lemma: 'qui', pos: 'adverb', meaning: 'and here' },
                    { word: 'la luna', lemma: 'luna', pos: 'noun', meaning: 'the moon' },
                    { word: 'l\'abbiamo', lemma: 'avere', pos: 'verb', meaning: 'we have it', notes: 'Clitic pronoun l\' (la) clitic doubling with "la luna".' },
                    { word: 'vicina', lemma: 'vicino', pos: 'adjective', meaning: 'near / close' }
                  ],
                  grammarNote: 'Clitic doubling: "la luna" is introduced as topic, then immediately referred to again by the pronoun "l\'". Very common in spoken and lyrical Italian.'
                },
                {
                  id: 'boh_1_3_6',
                  original: 'Aspetti, signorina, e le dirò con due parole chi son, e che faccio, come vivo. Vuole?',
                  literal: 'Wait, young lady, and to you I will tell in two words who I am, and what I do, how I live. Would you like [that]?',
                  tokens: [
                    { word: 'Aspetti', lemma: 'aspettare', pos: 'verb', meaning: 'wait', notes: 'Formal imperative (Lei form): aspetti.' },
                    { word: 'signorina', lemma: 'signorina', pos: 'noun', meaning: 'young lady / miss' },
                    { word: 'le dirò', lemma: 'dire', pos: 'verb', meaning: 'I will say to you', notes: 'Future tense 1st person singular with formal indirect pronoun "le".' },
                    { word: 'con due parole', lemma: 'parola', pos: 'idiom', meaning: 'in a few words / briefly' },
                    { word: 'chi son', lemma: 'essere', pos: 'verb', meaning: 'who I am', notes: 'Truncation of "sono" -> "son".' },
                    { word: 'Vuole', lemma: 'volere', pos: 'verb', meaning: 'do you wish / do you want?', notes: 'Formal 3rd person singular present.' }
                  ]
                },
                {
                  id: 'boh_1_3_7',
                  original: 'Chi son? Sono un poeta. Che cosa faccio? Scrivo. E come vivo? Vivo.',
                  literal: 'Who am I? I am a poet. What thing do I do? I write. And how do I live? I live.',
                  tokens: [
                    { word: 'poeta', lemma: 'poeta', pos: 'noun', meaning: 'poet', notes: 'Masculine noun ending in -a (il poeta, i poeti).' },
                    { word: 'Scrivo', lemma: 'scrivere', pos: 'verb', meaning: 'I write' },
                    { word: 'Vivo', lemma: 'vivere', pos: 'verb', meaning: 'I live' }
                  ]
                },
                {
                  id: 'boh_1_3_8',
                  original: 'In povertà mia lieta scialo da gran signore rime ed inni d\'amore.',
                  literal: 'In my happy poverty I squander like a great lord rhymes and hymns of love.',
                  tokens: [
                    { word: 'In povertà', lemma: 'povertà', pos: 'noun', meaning: 'in poverty' },
                    { word: 'lieta', lemma: 'lieto', pos: 'adjective', meaning: 'happy / joyful / cheerful' },
                    { word: 'scialo', lemma: 'scialare', pos: 'verb', meaning: 'I lavish / squander / live large' },
                    { word: 'da gran signore', lemma: 'signore', pos: 'idiom', meaning: 'like a grand gentleman / aristocrat' },
                    { word: 'rime', lemma: 'rima', pos: 'noun', meaning: 'rhymes / verses' },
                    { word: 'inni', lemma: 'inno', pos: 'noun', meaning: 'hymns' }
                  ]
                }
              ]
            },
            {
              id: 'boh_1_4',
              speaker: 'Mimì',
              pieceTitle: 'Aria: Sì, mi chiamano Mimì',
              stageDirection: 'Speaking gently and modestly in reply',
              lines: [
                {
                  id: 'boh_1_4_1',
                  original: 'Sì, mi chiamano Mimì, ma il mio nome è Lucia.',
                  literal: 'Yes, they call me Mimì, but my name is Lucia.',
                  tokens: [
                    { word: 'chiamano', lemma: 'chiamare', pos: 'verb', meaning: 'they call', notes: '3rd person plural present.' },
                    { word: 'mio nome', lemma: 'nome', pos: 'noun', meaning: 'my name' }
                  ]
                },
                {
                  id: 'boh_1_4_2',
                  original: 'L\'istoria mia è breve. A tela o a seta ricamo in casa e fuori...',
                  literal: 'My story is brief. On canvas or on silk I embroider at home and outside...',
                  tokens: [
                    { word: 'istoria', lemma: 'storia', pos: 'noun', meaning: 'story / history', notes: 'Archaic poetic variant of "storia" with prosthetic "i-".' },
                    { word: 'breve', lemma: 'breve', pos: 'adjective', meaning: 'short / brief' },
                    { word: 'tela', lemma: 'tela', pos: 'noun', meaning: 'cloth / canvas / linen' },
                    { word: 'seta', lemma: 'seta', pos: 'noun', meaning: 'silk' },
                    { word: 'ricamo', lemma: 'ricamare', pos: 'verb', meaning: 'I embroider' }
                  ]
                },
                {
                  id: 'boh_1_4_3',
                  original: 'Son tranquilla e lieta ed è mio costume far gigli e rose.',
                  literal: 'I am calm and joyful and it is my custom to make lilies and roses.',
                  tokens: [
                    { word: 'tranquilla', lemma: 'tranquillo', pos: 'adjective', meaning: 'quiet / peaceful' },
                    { word: 'costume', lemma: 'costume', pos: 'noun', meaning: 'habit / custom / manner', notes: 'In modern Italian "abitudine" is more common; "costume" here means personal custom.' },
                    { word: 'far', lemma: 'fare', pos: 'verb', meaning: 'to make / craft', notes: 'Truncation of fare.' },
                    { word: 'gigli', lemma: 'giglio', pos: 'noun', meaning: 'lilies' },
                    { word: 'rose', lemma: 'rosa', pos: 'noun', meaning: 'roses' }
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

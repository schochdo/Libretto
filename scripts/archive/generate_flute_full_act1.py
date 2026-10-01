# coding=utf-8

act1_full = """
import { Opera } from '../types/libretto';

export const dieZauberfloete: Opera = {
  id: 'die-zauberfloete',
  title: 'The Magic Flute',
  originalTitle: 'Die Zauberflöte',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Emanuel Schikaneder'],
  language: 'de',
  languageLabel: 'German',
  year: 1791,
  synopsis: 'Prince Tamino, lost in a magical land, is rescued by three mysterious ladies. He is sent by the Queen of the Night to rescue her daughter Pamina from the high priest Sarastro. Armed with a magic flute and accompanied by the bird-catcher Papageno, Tamino discovers that Sarastro is actually a wise and benevolent leader. Tamino and Pamina undergo severe trials of initiation to join Sarastro\\'s enlightened brotherhood, while the Queen of the Night is ultimately defeated.',
  characters: [
    { name: 'Tamino', voiceType: 'Tenor', description: 'A handsome prince from a distant land.' },
    { name: 'Papageno', voiceType: 'Baritone', description: 'A cheerful but cowardly bird-catcher.' },
    { name: 'Pamina', voiceType: 'Soprano', description: 'Daughter of the Queen of the Night.' },
    { name: 'Queen of the Night', voiceType: 'Soprano', description: 'A powerful and vengeful sorceress.' },
    { name: 'Sarastro', voiceType: 'Bass', description: 'Priest of the Sun and leader of the brotherhood.' },
    { name: 'Monostatos', voiceType: 'Tenor', description: 'A treacherous overseer in Sarastro\\'s temple.' },
    { name: 'Three Ladies', voiceType: 'Soprano', description: 'Attendants to the Queen of the Night.' },
    { name: 'Speaker', voiceType: 'Bass-Baritone', description: 'Speaker of the temple.' },
    { name: 'Three Boys', voiceType: 'Soprano', description: 'Mysterious guiding spirits.' }
  ],
  acts: [
    {
      actNumber: 1,
      title: 'Act I',
      setting: 'A rocky, mythical landscape.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'Zu Hilfe! Zu Hilfe! (Introduction)',
          description: 'Prince Tamino is chased by a giant serpent and faints. Three Ladies of the Queen of the Night appear and slay the monster.',
          cues: [
            {
              id: 'a1s1_1',
              speaker: 'Tamino',
              pieceTitle: 'No. 1 Introduction',
              lines: [
                { 
                  id: 'f1', 
                  original: 'Zu Hilfe! Zu Hilfe! Sonst bin ich verloren,', 
                  literal: 'To help! To help! Otherwise am I lost,',
                  tokens: [
                    { word: 'Zu Hilfe', lemma: 'Hilfe', pos: 'noun', meaning: 'To help / Help!', notes: 'Idiomatic cry for help. "Hilfe" is feminine.' },
                    { word: 'Sonst', lemma: 'sonst', pos: 'adverb', meaning: 'Otherwise / Else' },
                    { word: 'bin', lemma: 'sein', pos: 'verb', meaning: 'am' },
                    { word: 'ich', lemma: 'ich', pos: 'pronoun', meaning: 'I' },
                    { word: 'verloren', lemma: 'verlieren', pos: 'adjective', meaning: 'lost', notes: 'Past participle of verlieren, used here as an adjective.' }
                  ],
                  grammarNote: 'V2 Word Order: Starting the clause with the adverb "Sonst" forces the verb "bin" into the second position, before the subject "ich".'
                },
                { 
                  id: 'f2', 
                  original: 'der listigen Schlange zum Opfer erkoren!', 
                  literal: 'to the cunning snake as a sacrifice chosen!',
                  tokens: [
                    { word: 'der listigen', lemma: 'listig', pos: 'adjective', meaning: 'the cunning / the sly', notes: 'Dative feminine.' },
                    { word: 'Schlange', lemma: 'Schlange', pos: 'noun', meaning: 'snake / serpent' },
                    { word: 'zum Opfer', lemma: 'Opfer', pos: 'noun', meaning: 'as a sacrifice', notes: 'zum = zu + dem (dative).' },
                    { word: 'erkoren', lemma: 'erküren', pos: 'verb', meaning: 'chosen / selected', notes: 'Archaic past participle.' }
                  ]
                },
                { 
                  id: 'f3', 
                  original: 'Barmherzige Götter! Schon nahet sie sich!', 
                  literal: 'Merciful gods! Already it nears itself!',
                  tokens: [
                    { word: 'Barmherzige', lemma: 'barmherzig', pos: 'adjective', meaning: 'merciful / compassionate' },
                    { word: 'Götter', lemma: 'Gott', pos: 'noun', meaning: 'gods' },
                    { word: 'Schon', lemma: 'schon', pos: 'adverb', meaning: 'Already' },
                    { word: 'nahet', lemma: 'nahen', pos: 'verb', meaning: 'nears / approaches', notes: 'Archaic/poetic conjugation of "nähern".' },
                    { word: 'sie', lemma: 'sie', pos: 'pronoun', meaning: 'it (the snake)', notes: 'Feminine pronoun referring to "die Schlange".' },
                    { word: 'sich', lemma: 'sich', pos: 'pronoun', meaning: 'itself', notes: 'Reflexive pronoun for the verb "sich nahen".' }
                  ]
                },
                { 
                  id: 'f4', 
                  original: 'Ach, rettet mich! Ach, schützet mich!', 
                  literal: 'Ah, save me! Ah, protect me!',
                  tokens: [
                    { word: 'Ach', lemma: 'ach', pos: 'interjection', meaning: 'Ah / Oh' },
                    { word: 'rettet', lemma: 'retten', pos: 'verb', meaning: 'save / rescue (imperative plural)' },
                    { word: 'mich', lemma: 'ich', pos: 'pronoun', meaning: 'me (accusative)' },
                    { word: 'schützet', lemma: 'schützen', pos: 'verb', meaning: 'protect (imperative plural)' }
                  ]
                }
              ]
            },
            {
              id: 'a1s1_2',
              speaker: 'Three Ladies',
              lines: [
                { 
                  id: 'f5', 
                  original: 'Stirb, Ungeheuer, durch unsre Macht!', 
                  literal: 'Die, monster, through our power!',
                  tokens: [
                    { word: 'Stirb', lemma: 'sterben', pos: 'verb', meaning: 'Die (imperative singular)' },
                    { word: 'Ungeheuer', lemma: 'Ungeheuer', pos: 'noun', meaning: 'monster' },
                    { word: 'durch', lemma: 'durch', pos: 'preposition', meaning: 'through / by means of' },
                    { word: 'unsre', lemma: 'unser', pos: 'pronoun', meaning: 'our' },
                    { word: 'Macht', lemma: 'Macht', pos: 'noun', meaning: 'power / might' }
                  ]
                },
                { 
                  id: 'f6', 
                  original: 'Triumph! Triumph! Sie ist vollbracht,', 
                  literal: 'Triumph! Triumph! It is accomplished,',
                  tokens: [
                    { word: 'Sie', lemma: 'sie', pos: 'pronoun', meaning: 'It (the deed)' },
                    { word: 'ist', lemma: 'sein', pos: 'verb', meaning: 'is' },
                    { word: 'vollbracht', lemma: 'vollbringen', pos: 'verb', meaning: 'accomplished / completed' }
                  ]
                },
                { 
                  id: 'f7', 
                  original: 'die Heldentat! Er ist befreit', 
                  literal: 'the heroic deed! He is freed',
                  tokens: [
                    { word: 'die Heldentat', lemma: 'Heldentat', pos: 'noun', meaning: 'the heroic deed', notes: 'Compound: Held (hero) + Tat (deed).' },
                    { word: 'befreit', lemma: 'befreien', pos: 'verb', meaning: 'freed / liberated' }
                  ]
                },
                { 
                  id: 'f8', 
                  original: 'durch unsres Armes Tapferkeit.', 
                  literal: 'through our arm\\'s bravery.',
                  tokens: [
                    { word: 'unsres Armes', lemma: 'Arm', pos: 'noun', meaning: 'of our arm', notes: 'Genitive case indicating possession.' },
                    { word: 'Tapferkeit', lemma: 'Tapferkeit', pos: 'noun', meaning: 'bravery / valor' }
                  ],
                  grammarNote: 'Genitive case: "unsres Armes" (of our arm) modifies "Tapferkeit" (bravery).'
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 2,
          title: 'Der Vogelfänger bin ich ja',
          description: 'Papageno the bird-catcher enters playing his pipes. Tamino wakes and assumes Papageno killed the snake.',
          cues: [
            {
              id: 'a1s2_1',
              speaker: 'Papageno',
              pieceTitle: 'No. 2 Aria',
              lines: [
                {
                  id: 'flute_1_1_1',
                  original: 'Der Vogelfänger bin ich ja,',
                  literal: 'The bird-catcher am I indeed,',
                  tokens: [
                    { word: 'Der Vogelfänger', lemma: 'Vogelfänger', pos: 'noun', meaning: 'the bird-catcher', notes: 'Compound noun: der Vogel (bird) + der Fänger (catcher).' },
                    { word: 'bin', lemma: 'sein', pos: 'verb', meaning: 'am (1st person singular)' },
                    { word: 'ich', lemma: 'ich', pos: 'pronoun', meaning: 'I' },
                    { word: 'ja', lemma: 'ja', pos: 'particle', meaning: 'indeed / as you know', notes: 'Modal particle expressing obviousness or common knowledge.' }
                  ],
                  grammarNote: 'V2 word order: The object/predicate "Der Vogelfänger" comes first, forcing the conjugated verb "bin" into second position before the subject "ich".'
                },
                {
                  id: 'flute_1_1_2',
                  original: 'stets lustig, hei! hopsasa!',
                  literal: 'always merry, hey! hopsasa!',
                  tokens: [
                    { word: 'stets', lemma: 'stets', pos: 'adverb', meaning: 'always / constantly', notes: 'Literary/elevated synonym for "immer".' },
                    { word: 'lustig', lemma: 'lustig', pos: 'adjective', meaning: 'cheerful / merry / joyful' }
                  ]
                },
                {
                  id: 'flute_1_1_3',
                  original: 'Ich Vogelfänger bin bekannt',
                  literal: 'I [the] bird-catcher am known',
                  tokens: [
                    { word: 'bekannt', lemma: 'bekannt', pos: 'adjective', meaning: 'known / well-known', notes: 'Past participle of bekennen/kennen used as predicate adjective.' }
                  ]
                },
                {
                  id: 'flute_1_1_4',
                  original: 'bei Alt und Jung im ganzen Land.',
                  literal: 'by old and young in the entire country.',
                  tokens: [
                    { word: 'bei', lemma: 'bei', pos: 'preposition', meaning: 'among / by', notes: 'Preposition taking the dative case.' },
                    { word: 'Alt und Jung', lemma: 'alt / jung', pos: 'idiom', meaning: 'young and old alike' },
                    { word: 'im ganzen Land', lemma: 'Land', pos: 'noun', meaning: 'in the whole country', notes: 'im = in + dem (dative masculine/neuter contraction).' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 3,
          title: 'Dies Bildnis ist bezaubernd schön',
          description: 'The Three Ladies return, padlock Papageno\\'s mouth for lying, and give Tamino a portrait of Pamina.',
          cues: [
            {
              id: 'flute_1_2',
              speaker: 'Tamino',
              pieceTitle: 'No. 3 Aria',
              stageDirection: 'Gazing with wonder and mounting passion at the portrait medallion',
              lines: [
                {
                  id: 'flute_1_2_1',
                  original: 'Dies Bildnis ist bezaubernd schön,',
                  literal: 'This portrait is enchantingly beautiful,',
                  tokens: [
                    { word: 'Dies', lemma: 'dieser', pos: 'adjective', meaning: 'this (neuter nominative)', notes: 'Archaic short form of "dieses".' },
                    { word: 'Bildnis', lemma: 'Bildnis', pos: 'noun', meaning: 'portrait / likeness / image', notes: 'Neuter noun: das Bildnis.' },
                    { word: 'bezaubernd', lemma: 'bezaubern', pos: 'adjective', meaning: 'enchanting / bewitching', notes: 'Present participle (Partizip I) of bezaubern (to bewitch/charm).' },
                    { word: 'schön', lemma: 'schön', pos: 'adjective', meaning: 'beautiful / lovely' }
                  ]
                },
                {
                  id: 'flute_1_2_2',
                  original: 'wie noch kein Auge je gesehn!',
                  literal: 'as yet no eye ever has seen!',
                  tokens: [
                    { word: 'wie', lemma: 'wie', pos: 'conjunction', meaning: 'as / like' },
                    { word: 'noch kein', lemma: 'kein', pos: 'pronoun', meaning: 'not yet any / no' },
                    { word: 'Auge', lemma: 'Auge', pos: 'noun', meaning: 'eye', notes: 'das Auge, die Augen.' },
                    { word: 'je', lemma: 'je', pos: 'adverb', meaning: 'ever' },
                    { word: 'gesehn', lemma: 'sehen', pos: 'verb', meaning: 'seen', notes: 'Past participle (gesehen) apocopated for meter: gesehn.' }
                  ],
                  grammarNote: 'Subordinate clause ellipsis: The auxiliary verb "hat" is omitted ("wie noch kein Auge je [hat] gesehn")—a classic stylistic feature in German poetry.'
                },
                {
                  id: 'flute_1_2_3',
                  original: 'Ich fühl es, wie dies Götterbild',
                  literal: 'I feel it, how this divine image',
                  tokens: [
                    { word: 'fühl', lemma: 'fühlen', pos: 'verb', meaning: 'feel' },
                    { word: 'Götterbild', lemma: 'Götterbild', pos: 'noun', meaning: 'image of the gods / divine portrait', notes: 'Compound: Götter (gods) + Bild (image).' }
                  ]
                },
                {
                  id: 'flute_1_2_4',
                  original: 'mein Herz mit neuer Regung füllt.',
                  literal: 'my heart with new emotion fills.',
                  tokens: [
                    { word: 'mein Herz', lemma: 'Herz', pos: 'noun', meaning: 'my heart' },
                    { word: 'mit neuer Regung', lemma: 'Regung', pos: 'noun', meaning: 'with new stirring / emotion', notes: 'Dative feminine following preposition "mit".' },
                    { word: 'füllt', lemma: 'füllen', pos: 'verb', meaning: 'fills', notes: 'Verb placed at the end of the subordinate "wie" clause.' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 4,
          title: 'O zittre nicht, mein lieber Sohn',
          description: 'The Queen of the Night appears to Tamino in a display of cosmic power.',
          cues: [
            {
              id: 'flute_1_4_queen',
              speaker: 'Queen of the Night',
              pieceTitle: 'No. 4 Recitative and Aria',
              lines: [
                {
                  id: 'f27',
                  original: 'O zittre nicht, mein lieber Sohn,',
                  literal: 'O tremble not, my dear son,',
                  tokens: [
                    { word: 'zittre', lemma: 'zittern', pos: 'verb', meaning: 'tremble (imperative)', notes: 'Contracted from zittere.' },
                    { word: 'mein lieber', lemma: 'lieb', pos: 'adjective', meaning: 'my dear' },
                    { word: 'Sohn', lemma: 'Sohn', pos: 'noun', meaning: 'son' }
                  ]
                },
                {
                  id: 'f28',
                  original: 'du bist unschuldig, weise, fromm;',
                  literal: 'you are innocent, wise, pious;',
                  tokens: [
                    { word: 'unschuldig', lemma: 'unschuldig', pos: 'adjective', meaning: 'innocent' },
                    { word: 'weise', lemma: 'weise', pos: 'adjective', meaning: 'wise' },
                    { word: 'fromm', lemma: 'fromm', pos: 'adjective', meaning: 'pious / devout' }
                  ]
                },
                {
                  id: 'f29',
                  original: 'Ein Jüngling so wie du, vermag am besten',
                  literal: 'A youth such as you, is able best',
                  tokens: [
                    { word: 'Ein Jüngling', lemma: 'Jüngling', pos: 'noun', meaning: 'A youth / young man' },
                    { word: 'vermag', lemma: 'vermögen', pos: 'verb', meaning: 'is able / capable' },
                    { word: 'am besten', lemma: 'gut', pos: 'adverb', meaning: 'best (superlative of gut)' }
                  ]
                },
                {
                  id: 'f30',
                  original: 'das tiefbetrübte Mutterherz zu trösten.',
                  literal: 'the deeply-grieved mother-heart to comfort.',
                  tokens: [
                    { word: 'das tiefbetrübte', lemma: 'tiefbetrübt', pos: 'adjective', meaning: 'the deeply grieved / saddened' },
                    { word: 'Mutterherz', lemma: 'Mutterherz', pos: 'noun', meaning: 'mother\\'s heart' },
                    { word: 'zu trösten', lemma: 'trösten', pos: 'verb', meaning: 'to comfort / console' }
                  ],
                  grammarNote: 'Infinitive phrase: "zu trösten" is placed at the very end of the sentence, wrapping around its direct object "das tiefbetrübte Mutterherz".'
                },
                {
                  id: 'f31',
                  original: 'Zum Leiden bin ich auserkoren,',
                  literal: 'For suffering am I chosen,',
                  tokens: [
                    { word: 'Zum Leiden', lemma: 'Leiden', pos: 'noun', meaning: 'For suffering', notes: 'zum = zu dem (dative).' },
                    { word: 'auserkoren', lemma: 'auserküren', pos: 'verb', meaning: 'chosen / elected' }
                  ]
                },
                {
                  id: 'f32',
                  original: 'denn meine Tochter fehlet mir.',
                  literal: 'for my daughter is missing to me.',
                  tokens: [
                    { word: 'denn', lemma: 'denn', pos: 'conjunction', meaning: 'for / because' },
                    { word: 'fehlet', lemma: 'fehlen', pos: 'verb', meaning: 'is missing / lacks' },
                    { word: 'mir', lemma: 'ich', pos: 'pronoun', meaning: 'to me (dative)' }
                  ]
                },
                {
                  id: 'f33',
                  original: 'Durch sie ging all mein Glück verloren,',
                  literal: 'Through her went all my happiness lost,',
                  tokens: [
                    { word: 'Durch sie', lemma: 'sie', pos: 'pronoun', meaning: 'Through her (accusative)' },
                    { word: 'ging... verloren', lemma: 'verlorengehen', pos: 'verb', meaning: 'went lost / was lost', notes: 'Separable verb structure: ging (went) + verloren (lost).' },
                    { word: 'Glück', lemma: 'Glück', pos: 'noun', meaning: 'happiness / luck' }
                  ]
                },
                {
                  id: 'f34',
                  original: 'ein Bösewicht entfloh mit ihr.',
                  literal: 'an evildoer escaped with her.',
                  tokens: [
                    { word: 'Bösewicht', lemma: 'Bösewicht', pos: 'noun', meaning: 'evildoer / villain' },
                    { word: 'entfloh', lemma: 'entfliehen', pos: 'verb', meaning: 'escaped / fled (past tense)' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 5,
          title: 'Hm, hm, hm (Quintet)',
          description: 'Papageno\\'s padlock is removed. Tamino is given the magic flute, and Papageno receives magic bells.',
          cues: [
            {
              id: 'a1s5_1',
              speaker: 'Papageno',
              pieceTitle: 'No. 5 Quintet',
              lines: [
                {
                  id: 'f37',
                  original: 'Hm, hm, hm, hm, hm, hm, hm, hm!',
                  literal: 'Hm, hm, hm, hm, hm, hm, hm, hm!',
                  tokens: [
                    { word: 'Hm', lemma: 'hm', pos: 'interjection', meaning: 'Muffled humming sounds' }
                  ],
                  grammarNote: 'Papageno can only hum because his mouth is padlocked shut by the Three Ladies.'
                }
              ]
            },
            {
              id: 'a1s5_2',
              speaker: 'Tamino',
              lines: [
                {
                  id: 'f38',
                  original: 'Der Arme kann von Strafe sagen,',
                  literal: 'The poor man can speak of punishment,',
                  tokens: [
                    { word: 'Der Arme', lemma: 'arm', pos: 'noun', meaning: 'The poor man', notes: 'Adjective used as a noun.' },
                    { word: 'Strafe', lemma: 'Strafe', pos: 'noun', meaning: 'punishment / penalty' },
                    { word: 'sagen', lemma: 'sagen', pos: 'verb', meaning: 'say / speak' }
                  ]
                },
                {
                  id: 'f39',
                  original: 'denn seine Sprache ist dahin.',
                  literal: 'for his speech is gone.',
                  tokens: [
                    { word: 'Sprache', lemma: 'Sprache', pos: 'noun', meaning: 'speech / language' },
                    { word: 'dahin', lemma: 'dahin', pos: 'adverb', meaning: 'gone / lost' }
                  ]
                }
              ]
            },
            {
              id: 'a1s5_3',
              speaker: 'First Lady',
              stageDirection: 'Removing the padlock',
              lines: [
                {
                  id: 'f40',
                  original: 'Die Königin begnadigt dich,',
                  literal: 'The Queen pardons you,',
                  tokens: [
                    { word: 'begnadigt', lemma: 'begnadigen', pos: 'verb', meaning: 'pardons / grants amnesty' }
                  ]
                },
                {
                  id: 'f41',
                  original: 'erlässt die Strafe dir durch mich.',
                  literal: 'remits the punishment for you through me.',
                  tokens: [
                    { word: 'erlässt', lemma: 'erlassen', pos: 'verb', meaning: 'remits / waives' }
                  ]
                }
              ]
            },
            {
              id: 'a1s5_6',
              speaker: 'First Lady',
              stageDirection: 'Giving Tamino the flute',
              lines: [
                {
                  id: 'f44',
                  original: 'O Prinz, nimm dies Geschenk von mir!',
                  literal: 'Oh Prince, take this gift from me!',
                  tokens: [
                    { word: 'nimm', lemma: 'nehmen', pos: 'verb', meaning: 'take (imperative)' },
                    { word: 'Geschenk', lemma: 'Geschenk', pos: 'noun', meaning: 'gift / present' }
                  ]
                },
                {
                  id: 'f46',
                  original: 'Die Zauberflöte wird dich schützen,',
                  literal: 'The magic flute will protect you,',
                  tokens: [
                    { word: 'Zauberflöte', lemma: 'Zauberflöte', pos: 'noun', meaning: 'magic flute' },
                    { word: 'wird', lemma: 'werden', pos: 'verb', meaning: 'will (future tense auxiliary)' },
                    { word: 'schützen', lemma: 'schützen', pos: 'verb', meaning: 'protect' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 6,
          title: 'Du feines Täubchen, nur herein',
          description: 'In Sarastro\\'s palace, Monostatos torments Pamina. Papageno arrives and he and Monostatos frighten each other away.',
          cues: [
            {
              id: 'a1s6_1',
              speaker: 'Monostatos',
              pieceTitle: 'No. 6 Trio',
              lines: [
                {
                  id: 'f48',
                  original: 'Du feines Täubchen, nur herein!',
                  literal: 'You fine little dove, just come in!',
                  tokens: [
                    { word: 'feines', lemma: 'fein', pos: 'adjective', meaning: 'fine / delicate' },
                    { word: 'Täubchen', lemma: 'Taube', pos: 'noun', meaning: 'little dove', notes: 'Diminutive form of Taube.' },
                    { word: 'herein', lemma: 'herein', pos: 'adverb', meaning: 'in here / come in' }
                  ]
                }
              ]
            },
            {
              id: 'a1s6_2',
              speaker: 'Pamina',
              lines: [
                {
                  id: 'f49',
                  original: 'O welche Marter! Welche Pein!',
                  literal: 'Oh what torture! What pain!',
                  tokens: [
                    { word: 'Marter', lemma: 'Marter', pos: 'noun', meaning: 'torture / torment' },
                    { word: 'Pein', lemma: 'Pein', pos: 'noun', meaning: 'pain / agony' }
                  ]
                }
              ]
            },
            {
              id: 'a1s6_3',
              speaker: 'Papageno',
              stageDirection: 'Entering and seeing Monostatos',
              lines: [
                {
                  id: 'f50',
                  original: 'Hu! Das ist der Teufel sicherlich!',
                  literal: 'Hoo! That is the devil surely!',
                  tokens: [
                    { word: 'Teufel', lemma: 'Teufel', pos: 'noun', meaning: 'devil' },
                    { word: 'sicherlich', lemma: 'sicherlich', pos: 'adverb', meaning: 'surely / certainly' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 7,
          title: 'Bei Männern, welche Liebe fühlen',
          description: 'Papageno tells Pamina about Tamino, and they sing of the divine nature of love.',
          cues: [
            {
              id: 'a1s7_1',
              speaker: 'Pamina & Papageno',
              pieceTitle: 'No. 7 Duet',
              lines: [
                {
                  id: 'f52',
                  original: 'Bei Männern, welche Liebe fühlen,',
                  literal: 'By men, who love feel,',
                  tokens: [
                    { word: 'Bei', lemma: 'bei', pos: 'preposition', meaning: 'By / With / In the case of' },
                    { word: 'Männern', lemma: 'Mann', pos: 'noun', meaning: 'men (dative plural)' },
                    { word: 'welche', lemma: 'welcher', pos: 'pronoun', meaning: 'who / which (relative pronoun)' },
                    { word: 'fühlen', lemma: 'fühlen', pos: 'verb', meaning: 'feel' }
                  ]
                },
                {
                  id: 'f53',
                  original: 'fehlt auch ein gutes Herze nicht.',
                  literal: 'lacks also a good heart not.',
                  tokens: [
                    { word: 'fehlt', lemma: 'fehlen', pos: 'verb', meaning: 'is lacking / missing' },
                    { word: 'Herze', lemma: 'Herz', pos: 'noun', meaning: 'heart', notes: 'Archaic dative/poetic form of Herz.' }
                  ]
                },
                {
                  id: 'f54',
                  original: 'Die süßen Triebe mitzufühlen,',
                  literal: 'The sweet urges to sympathize with,',
                  tokens: [
                    { word: 'süßen', lemma: 'süß', pos: 'adjective', meaning: 'sweet' },
                    { word: 'Triebe', lemma: 'Trieb', pos: 'noun', meaning: 'urges / instincts / desires' },
                    { word: 'mitzufühlen', lemma: 'mitfühlen', pos: 'verb', meaning: 'to sympathize with / feel along with' }
                  ]
                },
                {
                  id: 'f55',
                  original: 'ist dann der Weiber erste Pflicht.',
                  literal: 'is then the women\\'s first duty.',
                  tokens: [
                    { word: 'der Weiber', lemma: 'Weib', pos: 'noun', meaning: 'the women\\'s (genitive plural)' },
                    { word: 'erste', lemma: 'erste', pos: 'adjective', meaning: 'first' },
                    { word: 'Pflicht', lemma: 'Pflicht', pos: 'noun', meaning: 'duty / obligation' }
                  ],
                  grammarNote: 'Genitive case: "der Weiber" (of the women) indicates whose duty it is.'
                },
                {
                  id: 'f56',
                  original: 'Wir wollen uns der Liebe freun,',
                  literal: 'We want ourselves in love to rejoice,',
                  tokens: [
                    { word: 'wollen', lemma: 'wollen', pos: 'verb', meaning: 'want' },
                    { word: 'freun', lemma: 'freuen', pos: 'verb', meaning: 'to rejoice', notes: 'Contracted from freuen.' }
                  ]
                },
                {
                  id: 'f57',
                  original: 'wir leben durch die Lieb allein.',
                  literal: 'we live through love alone.',
                  tokens: [
                    { word: 'durch', lemma: 'durch', pos: 'preposition', meaning: 'through' },
                    { word: 'Lieb', lemma: 'Liebe', pos: 'noun', meaning: 'love', notes: 'Apocopated form of Liebe for meter.' },
                    { word: 'allein', lemma: 'allein', pos: 'adverb', meaning: 'alone / only' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 8,
          title: 'Zum Ziele führt dich diese Bahn (Finale I)',
          description: 'Tamino arrives at the three temples. He learns from the Speaker that Sarastro is good, not evil.',
          cues: [
            {
              id: 'a1s8_1',
              speaker: 'Three Boys',
              pieceTitle: 'No. 8 Finale',
              lines: [
                {
                  id: 'f58',
                  original: 'Zum Ziele führt dich diese Bahn,',
                  literal: 'To the goal leads you this path,',
                  tokens: [
                    { word: 'Ziele', lemma: 'Ziel', pos: 'noun', meaning: 'goal / destination' },
                    { word: 'führt', lemma: 'führen', pos: 'verb', meaning: 'leads' },
                    { word: 'Bahn', lemma: 'Bahn', pos: 'noun', meaning: 'path / track' }
                  ]
                },
                {
                  id: 'f59',
                  original: 'doch musst du, Jüngling, männlich siegen.',
                  literal: 'but must you, youth, manfully conquer.',
                  tokens: [
                    { word: 'männlich', lemma: 'männlich', pos: 'adverb', meaning: 'manfully / bravely' },
                    { word: 'siegen', lemma: 'siegen', pos: 'verb', meaning: 'conquer / triumph' }
                  ]
                }
              ]
            },
            {
              id: 'a1s8_3',
              speaker: 'Speaker',
              stageDirection: 'Appearing from the temple doors',
              lines: [
                {
                  id: 'f62',
                  original: 'Wo willst du, kühner Fremdling, hin?',
                  literal: 'Where want you, bold stranger, to go?',
                  tokens: [
                    { word: 'Wo... hin', lemma: 'wohin', pos: 'adverb', meaning: 'where to', notes: 'Split structure typical of spoken German.' },
                    { word: 'kühner', lemma: 'kühn', pos: 'adjective', meaning: 'bold / daring' },
                    { word: 'Fremdling', lemma: 'Fremdling', pos: 'noun', meaning: 'stranger' }
                  ]
                }
              ]
            },
            {
              id: 'a1s8_4',
              speaker: 'Tamino',
              lines: [
                {
                  id: 'f63',
                  original: 'Der Lieb und Tugend Eigentum.',
                  literal: 'To love and virtue\\'s property.',
                  tokens: [
                    { word: 'Tugend', lemma: 'Tugend', pos: 'noun', meaning: 'virtue' },
                    { word: 'Eigentum', lemma: 'Eigentum', pos: 'noun', meaning: 'property / domain' }
                  ]
                }
              ]
            },
            {
              id: 'a1s9_4',
              speaker: 'Papageno',
              stageDirection: 'Caught by Monostatos, he plays his magic bells',
              lines: [
                {
                  id: 'f76',
                  original: 'Komm, du schönes Glockenspiel,',
                  literal: 'Come, you beautiful glockenspiel,',
                  tokens: [
                    { word: 'Glockenspiel', lemma: 'Glockenspiel', pos: 'noun', meaning: 'set of bells / chimes' }
                  ]
                },
                {
                  id: 'f78',
                  original: 'dass die Ohren ihnen singen.',
                  literal: 'that the ears to them sing.',
                  tokens: [
                    { word: 'Ohren', lemma: 'Ohr', pos: 'noun', meaning: 'ears' },
                    { word: 'singen', lemma: 'singen', pos: 'verb', meaning: 'sing / ring' }
                  ]
                }
              ]
            },
            {
              id: 'a1s9_5',
              speaker: 'Monostatos & Slaves',
              stageDirection: 'Mesmerized by the bells, dancing away',
              lines: [
                {
                  id: 'f79',
                  original: 'Das klinget so herrlich, das klinget so schön!',
                  literal: 'That sounds so glorious, that sounds so beautiful!',
                  tokens: [
                    { word: 'klinget', lemma: 'klingen', pos: 'verb', meaning: 'sounds / rings', notes: 'Archaic e-ending for meter.' },
                    { word: 'herrlich', lemma: 'herrlich', pos: 'adjective', meaning: 'glorious / magnificent' }
                  ]
                }
              ]
            },
            {
              id: 'a1s10_1',
              speaker: 'Chorus',
              stageDirection: 'Sarastro arrives',
              lines: [
                {
                  id: 'f82',
                  original: 'Es lebe Sarastro, der göttliche Weise!',
                  literal: 'Long live Sarastro, the divine wise one!',
                  tokens: [
                    { word: 'Es lebe', lemma: 'leben', pos: 'verb', meaning: 'Long live / May he live', notes: 'Subjunctive I (Konjunktiv I) used to express a wish or command.' },
                    { word: 'göttliche', lemma: 'göttlich', pos: 'adjective', meaning: 'divine' },
                    { word: 'Weise', lemma: 'weise', pos: 'noun', meaning: 'wise one / sage' }
                  ]
                }
              ]
            },
            {
              id: 'a1s10_3',
              speaker: 'Sarastro',
              lines: [
                {
                  id: 'f85',
                  original: 'Steh auf, erheitre dich, o Liebe!',
                  literal: 'Stand up, cheer yourself, o dear one!',
                  tokens: [
                    { word: 'Steh auf', lemma: 'aufstehen', pos: 'verb', meaning: 'Stand up / Rise' },
                    { word: 'erheitre', lemma: 'erheitern', pos: 'verb', meaning: 'cheer up / brighten (imperative)' }
                  ]
                },
                {
                  id: 'f89',
                  original: 'Zur Liebe will ich dich nicht zwingen,',
                  literal: 'To love want I you not to force,',
                  tokens: [
                    { word: 'zwingen', lemma: 'zwingen', pos: 'verb', meaning: 'to force / compel' }
                  ]
                },
                {
                  id: 'f90',
                  original: 'doch geb ich dir die Freiheit nicht.',
                  literal: 'but give I you the freedom not.',
                  tokens: [
                    { word: 'Freiheit', lemma: 'Freiheit', pos: 'noun', meaning: 'freedom / liberty' }
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
"""

with open("src/data/dieZauberfloete.ts", "w", encoding="utf-8") as f:
    f.write(act1_full)


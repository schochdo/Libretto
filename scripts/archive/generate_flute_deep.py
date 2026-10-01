# coding=utf-8
import json

deep_data = """
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
    { name: 'Papagena', voiceType: 'Soprano', description: 'Papageno\\'s ideal mate.' },
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
        }
      ]
    }
  ]
};
"""

with open("src/data/dieZauberfloete.ts", "w", encoding="utf-8") as f:
    f.write(deep_data)


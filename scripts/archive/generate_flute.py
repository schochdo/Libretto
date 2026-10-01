# coding=utf-8
import json

flute_data = """
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
    { name: 'Papagena', voiceType: 'Soprano', description: 'Papageno\\'s ideal mate.' }
  ],
  acts: [
    {
      actNumber: 1,
      title: 'Act I',
      setting: 'A rocky landscape; later, Sarastro\\'s palace.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'Zu Hilfe! Zu Hilfe! (Introduction)',
          description: 'Prince Tamino is chased by a giant serpent and faints. Three Ladies of the Queen of the Night appear and slay the monster.',
          cues: [
            {
              id: 'flute_1_1_tam',
              speaker: 'Tamino',
              pieceTitle: 'No. 1 Introduction',
              lines: [
                { id: 'f1', original: 'Zu Hilfe! Zu Hilfe! Sonst bin ich verloren,', literal: 'Help! Help! Otherwise I am lost,' },
                { id: 'f2', original: 'der listigen Schlange zum Opfer erkoren!', literal: 'chosen as a sacrifice to the cunning snake!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 2,
          title: 'Der Vogelfänger bin ich ja (Papageno\\'s Aria)',
          description: 'Papageno the bird-catcher enters playing his panpipes.',
          cues: [
            {
              id: 'flute_1_2_pap',
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
                },
                {
                  id: 'flute_1_1_5',
                  original: 'Weiß mit dem Locken umzugehn',
                  literal: '[I] know how to handle the luring / piping',
                  tokens: [
                    { word: 'Weiß', lemma: 'wissen', pos: 'verb', meaning: '[I] know', notes: 'Ellipsis of the subject pronoun "ich" in informal folk song style.' },
                    { word: 'mit dem Locken', lemma: 'Locken', pos: 'noun', meaning: 'with the luring / bird-calling', notes: 'Substantivized infinitive (das Locken) in dative.' },
                    { word: 'umzugehn', lemma: 'umgehen', pos: 'verb', meaning: 'to deal with / handle', notes: 'Separable prefix verb (umgehen) + zu -> umzugehen (contracted in verse to umzugehn).' }
                  ],
                  grammarNote: 'Separable prefix verb with infinitive "zu": the "zu" is placed between the prefix "um-" and the root verb "-gehen".'
                },
                {
                  id: 'flute_1_1_6',
                  original: 'und mich aufs Pfeifen zu verstehn.',
                  literal: 'and to understand [know my way around] whistling.',
                  tokens: [
                    { word: 'mich... zu verstehn', lemma: 'sich verstehen auf', pos: 'idiom', meaning: 'to be an expert at / versed in', notes: 'Reflexive idiom: sich auf etwas (Akkusativ) verstehen.' },
                    { word: 'aufs Pfeifen', lemma: 'Pfeifen', pos: 'noun', meaning: 'at whistling / piping', notes: 'aufs = auf + das (accusative neuter).' }
                  ]
                }
              ]
            }
          ]
        },
        {
          sceneNumber: 3,
          title: 'Dies Bildnis ist bezaubernd schön (Tamino\\'s Aria)',
          description: 'The Three Ladies present Prince Tamino with a miniature portrait medallion of the captive Princess Pamina.',
          cues: [
            {
              id: 'flute_1_2',
              speaker: 'Tamino',
              pieceTitle: 'Aria: Dies Bildnis ist bezaubernd schön',
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
          title: 'O zittre nicht, mein lieber Sohn (Queen of the Night)',
          description: 'The Queen of the Night appears to Tamino in a display of cosmic power.',
          cues: [
            {
              id: 'flute_1_4_queen',
              speaker: 'Queen of the Night',
              pieceTitle: 'No. 4 Recitative and Aria',
              lines: [
                { id: 'f11', original: 'O zittre nicht, mein lieber Sohn,', literal: 'O tremble not, my dear son,' },
                { id: 'f12', original: 'du bist unschuldig, weise, fromm;', literal: 'you are innocent, wise, pious;' },
                { id: 'f13', original: 'Ein Jüngling so wie du, vermag am besten', literal: 'A youth such as you is best able' },
                { id: 'f14', original: 'das tiefbetrübte Mutterherz zu trösten.', literal: 'to comfort the deeply grieved mother\\'s heart.' },
                { id: 'f15', original: 'Zum Leiden bin ich auserkoren,', literal: 'For suffering am I chosen,' },
                { id: 'f16', original: 'denn meine Tochter fehlet mir.', literal: 'for my daughter is missing to me.' }
              ]
            }
          ]
        },
        {
          sceneNumber: 5,
          title: 'Bei Männern, welche Liebe fühlen',
          description: 'Papageno finds Pamina, and they sing of the divine nature of love.',
          cues: [
            {
              id: 'flute_1_5_pam_pap',
              speaker: 'Pamina & Papageno',
              pieceTitle: 'No. 7 Duet',
              lines: [
                { id: 'f17', original: 'Bei Männern, welche Liebe fühlen,', literal: 'In men who feel love,' },
                { id: 'f18', original: 'fehlt auch ein gutes Herze nicht.', literal: 'a good heart is also not lacking.' },
                { id: 'f19', original: 'Die süßen Triebe mitzufühlen,', literal: 'To sympathize with sweet urges,' },
                { id: 'f20', original: 'ist dann der Weiber erste Pflicht.', literal: 'is then women\\'s first duty.' },
                { id: 'f21', original: 'Wir wollen uns der Liebe freun,', literal: 'We want to rejoice in love,' },
                { id: 'f22', original: 'wir leben durch die Lieb allein.', literal: 'we live through love alone.' }
              ]
            }
          ]
        }
      ]
    },
    {
      actNumber: 2,
      title: 'Act II',
      setting: 'The Temple of Ordeal.',
      scenes: [
        {
          sceneNumber: 1,
          title: 'O Isis und Osiris (Sarastro)',
          description: 'Sarastro prays for the gods to protect Tamino and Papageno.',
          cues: [
            {
              id: 'flute_2_1_sar',
              speaker: 'Sarastro',
              pieceTitle: 'No. 10 Aria',
              lines: [
                { id: 'f23', original: 'O Isis und Osiris, schenket', literal: 'O Isis and Osiris, grant' },
                { id: 'f24', original: 'der Weisheit Geist dem neuen Paar!', literal: 'the spirit of wisdom to the new pair!' },
                { id: 'f25', original: 'Die ihr der Wandrer Schritte lenket,', literal: 'You who guide the wanderers\\' steps,' },
                { id: 'f26', original: 'stärkt mit Geduld sie in Gefahr.', literal: 'strengthen them with patience in danger.' }
              ]
            }
          ]
        },
        {
          sceneNumber: 2,
          title: 'Der Hölle Rache (Queen of the Night)',
          description: 'The Queen of the Night demands that Pamina assassinate Sarastro.',
          cues: [
            {
              id: 'flute_2_2_queen',
              speaker: 'Queen of the Night',
              pieceTitle: 'No. 14 Aria (Der Hölle Rache)',
              lines: [
                {
                  id: 'f27',
                  original: 'Der Hölle Rache kocht in meinem Herzen,',
                  literal: 'Hell\\'s vengeance boils in my heart,',
                  tokens: [
                    { word: 'Der Hölle', lemma: 'Hölle', pos: 'noun', meaning: 'Of hell (genitive)' },
                    { word: 'Rache', lemma: 'Rache', pos: 'noun', meaning: 'vengeance' },
                    { word: 'kocht', lemma: 'kochen', pos: 'verb', meaning: 'boils' }
                  ]
                },
                { id: 'f28', original: 'Tod und Verzweiflung flammet um mich her!', literal: 'Death and despair flame all around me!' },
                { id: 'f29', original: 'Fühlt nicht durch dich Sarastro Todesschmerzen,', literal: 'If Sarastro does not feel the pain of death through you,' },
                { id: 'f30', original: 'so bist du meine Tochter nimmermehr!', literal: 'then you are my daughter nevermore!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 3,
          title: 'In diesen heil\\'gen Hallen (Sarastro)',
          description: 'Sarastro explains to Pamina that his temple is a place of peace, not vengeance.',
          cues: [
            {
              id: 'flute_2_3_sar',
              speaker: 'Sarastro',
              pieceTitle: 'No. 15 Aria',
              lines: [
                { id: 'f31', original: 'In diesen heil\\'gen Hallen', literal: 'In these holy halls' },
                { id: 'f32', original: 'kennt man die Rache nicht,', literal: 'one does not know vengeance,' },
                { id: 'f33', original: 'und ist ein Mensch gefallen,', literal: 'and if a person has fallen,' },
                { id: 'f34', original: 'führt Liebe ihn zur Pflicht.', literal: 'love leads him to duty.' }
              ]
            }
          ]
        },
        {
          sceneNumber: 4,
          title: 'Ach, ich fühl\\'s (Pamina)',
          description: 'Pamina, believing Tamino no longer loves her, considers suicide.',
          cues: [
            {
              id: 'flute_2_4_pam',
              speaker: 'Pamina',
              pieceTitle: 'No. 17 Aria',
              lines: [
                { id: 'f35', original: 'Ach, ich fühl\\'s, es ist verschwunden,', literal: 'Ah, I feel it, it has vanished,' },
                { id: 'f36', original: 'ewig hin der Liebe Glück!', literal: 'forever gone is love\\'s happiness!' },
                { id: 'f37', original: 'Nimmer kommt ihr, Wonnestunden,', literal: 'Never will you come, hours of bliss,' },
                { id: 'f38', original: 'meinem Herzen mehr zurück!', literal: 'back to my heart again!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 5,
          title: 'Ein Mädchen oder Weibchen (Papageno)',
          description: 'Papageno plays his magic bells and wishes for a wife.',
          cues: [
            {
              id: 'flute_2_5_pap',
              speaker: 'Papageno',
              pieceTitle: 'No. 20 Aria',
              lines: [
                { id: 'f39', original: 'Ein Mädchen oder Weibchen', literal: 'A girl or a little wife' },
                { id: 'f40', original: 'wünscht Papageno sich!', literal: 'Papageno wishes for himself!' },
                { id: 'f41', original: 'O so ein sanftes Täubchen', literal: 'Oh, such a gentle little dove' },
                { id: 'f42', original: 'wär Seligkeit für mich!', literal: 'would be bliss for me!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 6,
          title: 'Pa-pa-pa-pa-pa-pa-Papagena! (Papageno & Papagena)',
          description: 'Papageno finally meets his feathered soulmate.',
          cues: [
            {
              id: 'flute_2_6_pap_pap',
              speaker: 'Papageno',
              lines: [
                { id: 'f43', original: 'Pa-pa-pa-pa-pa-pa-Papagena!', literal: 'Pa-pa-pa-pa-pa-pa-Papagena!' }
              ]
            },
            {
              id: 'flute_2_6_pap_pap2',
              speaker: 'Papagena',
              lines: [
                { id: 'f44', original: 'Pa-pa-pa-pa-pa-pa-Papageno!', literal: 'Pa-pa-pa-pa-pa-pa-Papageno!' }
              ]
            },
            {
              id: 'flute_2_6_pap_pap3',
              speaker: 'Papageno',
              lines: [
                { id: 'f45', original: 'Bist du mir nun ganz gegeben?', literal: 'Are you now given to me entirely?' }
              ]
            },
            {
              id: 'flute_2_6_pap_pap4',
              speaker: 'Papagena',
              lines: [
                { id: 'f46', original: 'Nun, so sei mein liebes Weibchen!', literal: 'Well then, be my dear little wife!' }
              ]
            },
            {
              id: 'flute_2_6_pap_pap5',
              speaker: 'Papageno',
              lines: [
                { id: 'f47', original: 'Nun, so sei mein Herzenstäubchen!', literal: 'Well then, be my little heart-dove!' }
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
    f.write(flute_data)


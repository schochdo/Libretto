# coding=utf-8
import json

act1_data = """
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
                { id: 'f1', original: 'Zu Hilfe! Zu Hilfe! Sonst bin ich verloren,', literal: 'Help! Help! Otherwise I am lost,' },
                { id: 'f2', original: 'der listigen Schlange zum Opfer erkoren!', literal: 'chosen as a sacrifice to the cunning snake!' },
                { id: 'f3', original: 'Barmherzige Götter! Schon nahet sie sich!', literal: 'Merciful gods! Already it nears!' },
                { id: 'f4', original: 'Ach, rettet mich! Ach, schützet mich!', literal: 'Ah, save me! Ah, protect me!' }
              ]
            },
            {
              id: 'a1s1_2',
              speaker: 'Three Ladies',
              lines: [
                { id: 'f5', original: 'Stirb, Ungeheuer, durch unsre Macht!', literal: 'Die, monster, by our power!' },
                { id: 'f6', original: 'Triumph! Triumph! Sie ist vollbracht,', literal: 'Triumph! Triumph! It is accomplished,' },
                { id: 'f7', original: 'die Heldentat! Er ist befreit', literal: 'the heroic deed! He is freed' },
                { id: 'f8', original: 'durch unsres Armes Tapferkeit.', literal: 'through the bravery of our arm.' }
              ]
            },
            {
              id: 'a1s1_3',
              speaker: 'First Lady',
              lines: [
                { id: 'f9', original: 'Ein holder Jüngling, sanft und schön!', literal: 'A lovely youth, gentle and beautiful!' }
              ]
            },
            {
              id: 'a1s1_4',
              speaker: 'Second Lady',
              lines: [
                { id: 'f10', original: 'So schön, als ich noch nie gesehn!', literal: 'So beautiful, as I have never yet seen!' }
              ]
            },
            {
              id: 'a1s1_5',
              speaker: 'Third Lady',
              lines: [
                { id: 'f11', original: 'Ja, ja! Gewiss zum Malen schön!', literal: 'Yes, yes! Certainly beautiful enough to paint!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 2,
          title: 'Der Vogelfänger bin ich ja',
          description: 'Papageno the bird-catcher enters. Tamino wakes and assumes Papageno killed the snake.',
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
            },
            {
              id: 'a1s2_2',
              speaker: 'Tamino',
              stageDirection: 'Waking up and approaching Papageno',
              pieceTitle: 'Dialog',
              lines: [
                { id: 'f16', original: 'He da!', literal: 'Hey there!' }
              ]
            },
            {
              id: 'a1s2_3',
              speaker: 'Papageno',
              lines: [
                { id: 'f17', original: 'Was da?', literal: 'What there?' }
              ]
            },
            {
              id: 'a1s2_4',
              speaker: 'Tamino',
              lines: [
                { id: 'f18', original: 'Sag mir, guter Freund, wer du bist?', literal: 'Tell me, good friend, who you are?' }
              ]
            },
            {
              id: 'a1s2_5',
              speaker: 'Papageno',
              lines: [
                { id: 'f19', original: 'Wer ich bin? Dumme Frage!', literal: 'Who I am? Stupid question!' },
                { id: 'f20', original: 'Ein Mensch wie du.', literal: 'A human like you.' }
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
                },
                { id: 'f25', original: 'O wenn ich sie nur finden könnte!', literal: 'Oh if I only could find her!' },
                { id: 'f26', original: 'O wenn sie doch schon vor mir stände!', literal: 'Oh if she already stood before me!' }
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
              id: 'a1s4_1',
              speaker: 'Queen of the Night',
              pieceTitle: 'No. 4 Recitative and Aria',
              lines: [
                { id: 'f27', original: 'O zittre nicht, mein lieber Sohn,', literal: 'O tremble not, my dear son,' },
                { id: 'f28', original: 'du bist unschuldig, weise, fromm;', literal: 'you are innocent, wise, pious;' },
                { id: 'f29', original: 'Ein Jüngling so wie du, vermag am besten', literal: 'A youth such as you is best able' },
                { id: 'f30', original: 'das tiefbetrübte Mutterherz zu trösten.', literal: 'to comfort the deeply grieved mother\\'s heart.' },
                { id: 'f31', original: 'Zum Leiden bin ich auserkoren,', literal: 'For suffering am I chosen,' },
                { id: 'f32', original: 'denn meine Tochter fehlet mir.', literal: 'for my daughter is missing to me.' },
                { id: 'f33', original: 'Durch sie ging all mein Glück verloren,', literal: 'Through her all my happiness went lost,' },
                { id: 'f34', original: 'ein Bösewicht entfloh mit ihr.', literal: 'an evildoer escaped with her.' },
                { id: 'f35', original: 'Du wirst sie zu befreien gehen,', literal: 'You will go to free her,' },
                { id: 'f36', original: 'du wirst der Tochter Retter sein.', literal: 'you will be the daughter\\'s savior.' }
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
                { id: 'f37', original: 'Hm, hm, hm, hm, hm, hm, hm, hm!', literal: 'Hm, hm, hm, hm, hm, hm, hm, hm!' }
              ]
            },
            {
              id: 'a1s5_2',
              speaker: 'Tamino',
              lines: [
                { id: 'f38', original: 'Der Arme kann von Strafe sagen,', literal: 'The poor man can speak of punishment,' },
                { id: 'f39', original: 'denn seine Sprache ist dahin.', literal: 'for his speech is gone.' }
              ]
            },
            {
              id: 'a1s5_3',
              speaker: 'First Lady',
              stageDirection: 'Removing the padlock',
              lines: [
                { id: 'f40', original: 'Die Königin begnadigt dich,', literal: 'The Queen pardons you,' },
                { id: 'f41', original: 'erlässt die Strafe dir durch mich.', literal: 'remits the punishment for you through me.' }
              ]
            },
            {
              id: 'a1s5_4',
              speaker: 'Papageno',
              lines: [
                { id: 'f42', original: 'Nun plaudert Papageno wieder!', literal: 'Now Papageno chatters again!' }
              ]
            },
            {
              id: 'a1s5_5',
              speaker: 'Three Ladies',
              lines: [
                { id: 'f43', original: 'Ja, plaudre, lüge nur nicht wieder.', literal: 'Yes, chatter, just do not lie again.' }
              ]
            },
            {
              id: 'a1s5_6',
              speaker: 'First Lady',
              stageDirection: 'Giving Tamino the flute',
              lines: [
                { id: 'f44', original: 'O Prinz, nimm dies Geschenk von mir!', literal: 'Oh Prince, take this gift from me!' },
                { id: 'f45', original: 'Dies sendet unsre Fürstin dir.', literal: 'Our princess sends this to you.' },
                { id: 'f46', original: 'Die Zauberflöte wird dich schützen,', literal: 'The magic flute will protect you,' },
                { id: 'f47', original: 'im größten Unglück unterstützen.', literal: 'support you in the greatest misfortune.' }
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
                { id: 'f48', original: 'Du feines Täubchen, nur herein!', literal: 'You fine little dove, just come in!' }
              ]
            },
            {
              id: 'a1s6_2',
              speaker: 'Pamina',
              lines: [
                { id: 'f49', original: 'O welche Marter! Welche Pein!', literal: 'Oh what torture! What pain!' }
              ]
            },
            {
              id: 'a1s6_3',
              speaker: 'Papageno',
              stageDirection: 'Entering and seeing Monostatos',
              lines: [
                { id: 'f50', original: 'Hu! Das ist der Teufel sicherlich!', literal: 'Hoo! That is the devil surely!' }
              ]
            },
            {
              id: 'a1s6_4',
              speaker: 'Monostatos',
              lines: [
                { id: 'f51', original: 'Hab Mitleid! Verschone mich!', literal: 'Have pity! Spare me!' }
              ]
            },
            {
              id: 'a1s6_4a',
              speaker: 'Papageno',
              lines: [
                { id: 'f51a', original: 'Hab Mitleid! Verschone mich!', literal: 'Have pity! Spare me!' }
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
                { id: 'f52', original: 'Bei Männern, welche Liebe fühlen,', literal: 'In men who feel love,' },
                { id: 'f53', original: 'fehlt auch ein gutes Herze nicht.', literal: 'a good heart is also not lacking.' },
                { id: 'f54', original: 'Die süßen Triebe mitzufühlen,', literal: 'To sympathize with sweet urges,' },
                { id: 'f55', original: 'ist dann der Weiber erste Pflicht.', literal: 'is then women\\'s first duty.' },
                { id: 'f56', original: 'Wir wollen uns der Liebe freun,', literal: 'We want to rejoice in love,' },
                { id: 'f57', original: 'wir leben durch die Lieb allein.', literal: 'we live through love alone.' }
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
                { id: 'f58', original: 'Zum Ziele führt dich diese Bahn,', literal: 'This path leads you to the goal,' },
                { id: 'f59', original: 'doch musst du, Jüngling, männlich siegen.', literal: 'but you must, youth, conquer manfully.' }
              ]
            },
            {
              id: 'a1s8_2',
              speaker: 'Tamino',
              lines: [
                { id: 'f60', original: 'Die Weisheitslehre dieser Knaben', literal: 'The wisdom-teaching of these boys' },
                { id: 'f61', original: 'sei ewig mir ins Herz gegraben.', literal: 'be forever engraved in my heart.' }
              ]
            },
            {
              id: 'a1s8_3',
              speaker: 'Speaker',
              stageDirection: 'Appearing from the temple doors',
              lines: [
                { id: 'f62', original: 'Wo willst du, kühner Fremdling, hin?', literal: 'Where do you want to go, bold stranger?' }
              ]
            },
            {
              id: 'a1s8_4',
              speaker: 'Tamino',
              lines: [
                { id: 'f63', original: 'Der Lieb und Tugend Eigentum.', literal: 'To the property of love and virtue.' }
              ]
            },
            {
              id: 'a1s8_5',
              speaker: 'Speaker',
              lines: [
                { id: 'f64', original: 'Die Worte sind von hohem Sinn.', literal: 'The words are of high meaning.' },
                { id: 'f65', original: 'Allein, wie willst du diese finden?', literal: 'But how will you find these?' },
                { id: 'f66', original: 'Dich leitet Lieb und Tugend nicht,', literal: 'Love and virtue do not guide you,' },
                { id: 'f67', original: 'weil Tod und Rache dich entzünden.', literal: 'because death and vengeance inflame you.' }
              ]
            }
          ]
        },
        {
          sceneNumber: 9,
          title: 'Wie stark ist nicht dein Zauberton',
          description: 'Tamino plays his magic flute, taming wild animals. Papageno and Pamina are caught by Monostatos but saved by the magic bells.',
          cues: [
            {
              id: 'a1s9_1',
              speaker: 'Tamino',
              lines: [
                { id: 'f68', original: 'Wie stark ist nicht dein Zauberton,', literal: 'How strong is not your magic tone,' },
                { id: 'f69', original: 'weil, holde Flöte, durch dein Spielen', literal: 'because, lovely flute, through your playing' },
                { id: 'f70', original: 'selbst wilde Tiere Freude fühlen.', literal: 'even wild animals feel joy.' }
              ]
            },
            {
              id: 'a1s9_2',
              speaker: 'Pamina',
              stageDirection: 'Running in',
              lines: [
                { id: 'f71', original: 'Schnelle Füße, rascher Mut,', literal: 'Fast feet, swift courage,' },
                { id: 'f72', original: 'schützt vor Feindes List und Wut.', literal: 'protects from enemy\\'s cunning and rage.' }
              ]
            },
            {
              id: 'a1s9_2a',
              speaker: 'Papageno',
              stageDirection: 'Running in',
              lines: [
                { id: 'f71a', original: 'Schnelle Füße, rascher Mut,', literal: 'Fast feet, swift courage,' },
                { id: 'f72a', original: 'schützt vor Feindes List und Wut.', literal: 'protects from enemy\\'s cunning and rage.' }
              ]
            },
            {
              id: 'a1s9_3',
              speaker: 'Monostatos',
              stageDirection: 'Catching them with his slaves',
              lines: [
                { id: 'f73', original: 'Ha, hab ich euch noch erwischt!', literal: 'Ha, have I caught you yet!' },
                { id: 'f74', original: 'Nur herbei mit Stahl und Eisen!', literal: 'Just bring hither steel and iron!' }
              ]
            },
            {
              id: 'a1s9_4',
              speaker: 'Papageno',
              stageDirection: 'Playing his magic bells',
              lines: [
                { id: 'f75', original: 'Wer viel wagt, gewinnt oft viel!', literal: 'He who risks much, often wins much!' },
                { id: 'f76', original: 'Komm, du schönes Glockenspiel,', literal: 'Come, you beautiful glockenspiel,' },
                { id: 'f77', original: 'lass die Glöckchen klingen, klingen,', literal: 'let the little bells ring, ring,' },
                { id: 'f78', original: 'dass die Ohren ihnen singen.', literal: 'so that their ears sing to them.' }
              ]
            },
            {
              id: 'a1s9_5',
              speaker: 'Monostatos',
              stageDirection: 'Mesmerized by the bells, dancing away',
              lines: [
                { id: 'f79', original: 'Das klinget so herrlich,', literal: 'That sounds so glorious,' },
                { id: 'f80', original: 'das klinget so schön!', literal: 'that sounds so beautiful!' },
                { id: 'f81', original: 'Trallalala, trallalala!', literal: 'Trallalala, trallalala!' }
              ]
            }
          ]
        },
        {
          sceneNumber: 10,
          title: 'Es lebe Sarastro, der göttliche Weise!',
          description: 'Sarastro arrives in triumph. He punishes Monostatos and orders Tamino and Papageno to the temple of trials.',
          cues: [
            {
              id: 'a1s10_1',
              speaker: 'Chorus',
              lines: [
                { id: 'f82', original: 'Es lebe Sarastro, der göttliche Weise!', literal: 'Long live Sarastro, the divine wise one!' }
              ]
            },
            {
              id: 'a1s10_2',
              speaker: 'Pamina',
              stageDirection: 'Kneeling before Sarastro',
              lines: [
                { id: 'f83', original: 'Herr, ich bin zwar Verbrecherin,', literal: 'Lord, I am indeed a criminal,' },
                { id: 'f84', original: 'ich wollte deiner Macht entfliehn.', literal: 'I wanted to escape your power.' }
              ]
            },
            {
              id: 'a1s10_3',
              speaker: 'Sarastro',
              lines: [
                { id: 'f85', original: 'Steh auf, erheitre dich, o Liebe!', literal: 'Rise, cheer up, o dear one!' },
                { id: 'f86', original: 'Denn ohne erst in dich zu dringen,', literal: 'For without first probing into you,' },
                { id: 'f87', original: 'weiß ich von deinem Herzen mehr:', literal: 'I know more of your heart:' },
                { id: 'f88', original: 'Du liebest einen andern sehr.', literal: 'You love another very much.' },
                { id: 'f89', original: 'Zur Liebe will ich dich nicht zwingen,', literal: 'I will not force you to love,' },
                { id: 'f90', original: 'doch geb ich dir die Freiheit nicht.', literal: 'but I do not give you freedom.' }
              ]
            },
            {
              id: 'a1s10_4',
              speaker: 'Chorus',
              lines: [
                { id: 'f91', original: 'Wenn Tugend und Gerechtigkeit', literal: 'When virtue and justice' },
                { id: 'f92', original: 'den großen Pfad mit Ruhm bestreut,', literal: 'strew the great path with glory,' },
                { id: 'f93', original: 'dann ist die Erd ein Himmelreich,', literal: 'then the earth is a heavenly kingdom,' },
                { id: 'f94', original: 'und Sterbliche den Göttern gleich.', literal: 'and mortals equal to the gods.' }
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
    f.write(act1_data)


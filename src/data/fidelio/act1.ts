import { Act } from '../../types/libretto';

export const fidelioAct1: Act = {
  "actNumber": 1,
  "title": "Act I",
  "originalSetting": "Der Hof des Staatsgefängnisses. Im Hintergrund das Haupttor und eine hohe Wallmauer, über welche Bäume hervorragen. Im geschlossenen Tor selbst ist eine kleine Pforte, die für einzelne Fußgänger geöffnet wird. Neben dem Tor das Stübchen des Pförtners. Links die Wohngebäude der Gefangenen; alle Fenster haben Gitter, und die mit Nummern bezeichneten Türen sind mit Eisen beschlagen und mit starken Riegeln bewehrt. In der vordersten Kulisse ist die Tür zur Wohnung des Gefangenenwärters. Rechts stehen von einem Geländer eingefaßte Bäume, die neben einem Gartentor den Eingang des Schloßgartens bezeichnen.",
  "setting": "The courtyard of the state prison. In the background the main gate and a high rampart wall over which trees project. In the closed gate itself is a small wicket-door which is opened for single pedestrians. Beside the gate the porter's booth. On the left the prisoners' quarters; all windows are barred, and doors marked with numbers are iron-plated and secured with strong bolts. In the foremost wing is the door to the head jailer's dwelling. On the right stand railed trees marking the entrance to the castle garden beside a garden gate.",
  "scenes": [
    {
      "sceneNumber": 1,
      "title": "Jetzt, Schätzchen, jetzt sind wir allein (Duett)",
      "titleTranslation": "Now, darling, now we are alone (Duet)",
      "originalDescription": "Jaquino wirbt vergeblich um Marzelline, während an der Festungspforte immer wieder geklopft wird.",
      "description": "Jaquino tries to press his suit with Marzelline, but is repeatedly interrupted by knocking at the fortress gate.",
      "cues": [
        {
          "id": "a1_s1_c1",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "verliebt sich die Hände reibend",
          "stageDirectionTranslation": "in love, rubbing his hands together",
          "lines": [
            {
              "id": "a1_s1_c1_l1",
              "original": "Jetzt, Schätzchen, jetzt sind wir allein,",
              "literal": "Now, darling, now are we alone,",
              "tokens": [
                {
                  "word": "Jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "Schätzchen",
                  "lemma": "Schatz",
                  "pos": "noun",
                  "meaning": "little treasure / darling",
                  "notes": "Diminutive form with '-chen'."
                },
                {
                  "word": "sind",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "allein",
                  "lemma": "allein",
                  "pos": "adjective",
                  "meaning": "alone"
                }
              ],
              "grammarNote": "In German, starting with an adverb like 'Jetzt' (Now) puts the verb before the subject: 'Jetzt sind wir' = 'Now we are'."
            },
            {
              "id": "a1_s1_c1_l2",
              "original": "wir können vertraulich nun plaudern.",
              "literal": "we can intimately now chat.",
              "tokens": [
                {
                  "word": "können",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can / are able to"
                },
                {
                  "word": "vertraulich",
                  "lemma": "vertraulich",
                  "pos": "adverb",
                  "meaning": "intimately / confidentially"
                },
                {
                  "word": "nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "plaudern",
                  "lemma": "plaudern",
                  "pos": "verb",
                  "meaning": "to chat / converse"
                }
              ],
              "grammarNote": "German modal verbs frame the sentence: the helping verb 'können' (can) comes early, while the main action 'plaudern' (to chat) waits at the very end."
            }
          ]
        },
        {
          "id": "a1_s1_c2",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "ihre Arbeit fortsetzend",
          "stageDirectionTranslation": "continuing her work",
          "lines": [
            {
              "id": "a1_s1_c2_l1",
              "original": "Es wird wohl nichts Wichtiges sein,",
              "literal": "It will probably nothing important be,",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "will / shall"
                },
                {
                  "word": "wohl",
                  "lemma": "wohl",
                  "pos": "adverb",
                  "meaning": "probably / likely"
                },
                {
                  "word": "nichts Wichtiges",
                  "lemma": "wichtig",
                  "pos": "pronoun",
                  "meaning": "nothing important",
                  "notes": "Substantivized neuter adjective after 'nichts'."
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ],
              "grammarNote": "Future tense in German brackets the sentence: 'werden' comes early, and the infinitive 'sein' waits at the end."
            },
            {
              "id": "a1_s1_c2_l2",
              "original": "ich darf bei der Arbeit nicht zaudern.",
              "literal": "I may at the work not dally.",
              "tokens": [
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted to"
                },
                {
                  "word": "bei der Arbeit",
                  "lemma": "Arbeit",
                  "pos": "noun",
                  "meaning": "at / during the work",
                  "notes": "Dative singular feminine after preposition 'bei'."
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "zaudern",
                  "lemma": "zaudern",
                  "pos": "verb",
                  "meaning": "to tarry / hesitate / dally"
                }
              ],
              "grammarNote": "Modal verb construction: 'darf ... zaudern'."
            }
          ]
        },
        {
          "id": "a1_s1_c3",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c3_l1",
              "original": "Ein Wörtchen, du Trotzige, du!",
              "literal": "One single word, you stubborn girl, you!",
              "tokens": [
                {
                  "word": "Ein Wörtchen",
                  "lemma": "Wort",
                  "pos": "noun",
                  "meaning": "one little word",
                  "notes": "Neuter diminutive form with '-chen'."
                },
                {
                  "word": "du Trotzige",
                  "lemma": "trotzig",
                  "pos": "adjective",
                  "meaning": "you defiant/stubborn one",
                  "notes": "Substantivized feminine adjective."
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c4",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c4_l1",
              "original": "So sprich nur, ich höre ja zu.",
              "literal": "So speak just, I listen indeed to.",
              "tokens": [
                {
                  "word": "sprich",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (imperative singular)"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "just / only"
                },
                {
                  "word": "höre... zu",
                  "lemma": "zuhören",
                  "pos": "verb",
                  "meaning": "listen / pay attention"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "indeed / after all"
                }
              ],
              "grammarNote": "Separable verb 'zuhören': prefix 'zu' moves to the end of the clause."
            }
          ]
        },
        {
          "id": "a1_s1_c5",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c5_l1",
              "original": "Wenn du mir nicht freundlicher blickest,",
              "literal": "If you at me not more friendly look,",
              "tokens": [
                {
                  "word": "Wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me / at me (dative)"
                },
                {
                  "word": "freundlicher",
                  "lemma": "freundlich",
                  "pos": "adverb",
                  "meaning": "more kindly / more friendly",
                  "notes": "Comparative adverb."
                },
                {
                  "word": "blickest",
                  "lemma": "blicken",
                  "pos": "verb",
                  "meaning": "look / glance",
                  "notes": "Second-person singular inflection '-est'."
                }
              ],
              "grammarNote": "Subordinate clause word order: verb 'blickest' at the end after conjunction 'Wenn'."
            },
            {
              "id": "a1_s1_c5_l2",
              "original": "so bring' ich kein Wörtchen hervor.",
              "literal": "so bring I no single word forth.",
              "tokens": [
                {
                  "word": "bring'... hervor",
                  "lemma": "hervorbringen",
                  "pos": "verb",
                  "meaning": "bring forth / utter"
                },
                {
                  "word": "kein Wörtchen",
                  "lemma": "Wort",
                  "pos": "noun",
                  "meaning": "no little word"
                }
              ],
              "grammarNote": "Following the 'if' condition, the main clause puts the verb first: 'bringt kein Laut hervor' (not a sound brings forth)."
            }
          ]
        },
        {
          "id": "a1_s1_c6",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c6_l1",
              "original": "Wenn du dich nicht in mich schickest,",
              "literal": "If you don't accommodate my wishes,",
              "tokens": [
                {
                  "word": "dich... schickest",
                  "lemma": "sich schicken",
                  "pos": "verb",
                  "meaning": "adapt oneself / accommodate"
                },
                {
                  "word": "in mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (accusative with 'in')"
                }
              ],
              "grammarNote": "'sich in jemanden schicken' is an idiom meaning 'to accommodate someone's wishes' or 'yield to someone's ways' (literally: 'to fit oneself into someone')."
            },
            {
              "id": "a1_s1_c6_l2",
              "original": "verstopf' ich mir vollends das Ohr.",
              "literal": "plug I for myself completely the ear.",
              "tokens": [
                {
                  "word": "verstopf'",
                  "lemma": "verstopfen",
                  "pos": "verb",
                  "meaning": "stop up / plug"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "for myself (dative of interest)"
                },
                {
                  "word": "vollends",
                  "lemma": "vollends",
                  "pos": "adverb",
                  "meaning": "completely / entirely"
                },
                {
                  "word": "das Ohr",
                  "lemma": "Ohr",
                  "pos": "noun",
                  "meaning": "the ear (accusative singular neuter)"
                }
              ],
              "grammarNote": "After the 'if' clause, the verb comes first: 'verstopf' ich' = 'I stop up (my ears)'."
            },
            {
              "id": "a1_s1_c6_l3",
              "original": "So hab' ich denn nimmermehr Ruh',",
              "literal": "So have I then nevermore peace,",
              "tokens": [
                {
                  "word": "denn",
                  "lemma": "denn",
                  "pos": "particle",
                  "meaning": "then / after all"
                },
                {
                  "word": "nimmermehr",
                  "lemma": "nimmermehr",
                  "pos": "adverb",
                  "meaning": "nevermore / never again"
                },
                {
                  "word": "Ruh'",
                  "lemma": "Ruhe",
                  "pos": "noun",
                  "meaning": "peace / quiet"
                }
              ]
            },
            {
              "id": "a1_s1_c6_l4",
              "original": "so rede, so rede nur zu.",
              "literal": "so speak, so speak just on.",
              "tokens": [
                {
                  "word": "rede... zu",
                  "lemma": "zureden",
                  "pos": "verb",
                  "meaning": "speak on / keep talking",
                  "notes": "Imperative singular."
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c7",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c7_l1",
              "original": "Ein Weilchen nur höre mir zu,",
              "literal": "A little while only listen to me to,",
              "tokens": [
                {
                  "word": "Ein Weilchen",
                  "lemma": "Weile",
                  "pos": "noun",
                  "meaning": "a little while (accusative of duration)"
                },
                {
                  "word": "höre... zu",
                  "lemma": "zuhören",
                  "pos": "verb",
                  "meaning": "listen (imperative)"
                }
              ]
            },
            {
              "id": "a1_s1_c7_l2",
              "original": "dann laß ich dich wieder in Ruh'.",
              "literal": "then I'll leave you alone again.",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "laß",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "leave / let"
                },
                {
                  "word": "in Ruh'",
                  "lemma": "Ruhe",
                  "pos": "noun",
                  "meaning": "in peace"
                }
              ],
              "grammarNote": "'in Ruhe lassen' is an idiom meaning 'to leave someone alone' (literally: 'to leave in quiet/peace')."
            },
            {
              "id": "a1_s1_c7_l3",
              "original": "Ich – ich habe –",
              "literal": "I – I have –",
              "tokens": [
                {
                  "word": "habe",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                }
              ]
            },
            {
              "id": "a1_s1_c7_l4",
              "original": "ich habe zum",
              "literal": "I have as",
              "tokens": [
                {
                  "word": "zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to / as the (contraction of zu dem)"
                }
              ]
            },
            {
              "id": "a1_s1_c7_l5",
              "original": "Weib dich gewählet, verstehst du?",
              "literal": "Wife you chosen, understand you?",
              "tokens": [
                {
                  "word": "Weib",
                  "lemma": "Weib",
                  "pos": "noun",
                  "meaning": "wife (dated/solemn)"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (accusative)"
                },
                {
                  "word": "gewählet",
                  "lemma": "wählen",
                  "pos": "verb",
                  "meaning": "chosen",
                  "notes": "Poetic past participle form of wählen."
                },
                {
                  "word": "verstehst",
                  "lemma": "verstehen",
                  "pos": "verb",
                  "meaning": "understand"
                }
              ],
              "grammarNote": "Perfect tense: 'habe ... gewählet'."
            }
          ]
        },
        {
          "id": "a1_s1_c8",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c8_l1",
              "original": "Das ist ja doch klar.",
              "literal": "That is indeed after all clear.",
              "tokens": [
                {
                  "word": "klar",
                  "lemma": "klar",
                  "pos": "adjective",
                  "meaning": "clear / evident"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c9",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c9_l1",
              "original": "Und wenn mir dein Jawort nicht fehlet,",
              "literal": "And if to me your consent not lacks,",
              "tokens": [
                {
                  "word": "Jawort",
                  "lemma": "Jawort",
                  "pos": "noun",
                  "meaning": "consent / saying yes to marriage",
                  "notes": "Compound noun: ja + Wort."
                },
                {
                  "word": "fehlet",
                  "lemma": "fehlen",
                  "pos": "verb",
                  "meaning": "lacks / is missing",
                  "notes": "Archaic third-person ending '-et'."
                }
              ],
              "grammarNote": "Subordinate clause word order after 'wenn'."
            },
            {
              "id": "a1_s1_c9_l2",
              "original": "was meinst du?",
              "literal": "what think you?",
              "tokens": [
                {
                  "word": "meinst",
                  "lemma": "meinen",
                  "pos": "verb",
                  "meaning": "think / mean"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c10",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c10_l1",
              "original": "So sind wir ein Paar.",
              "literal": "Then are we a pair.",
              "tokens": [
                {
                  "word": "Paar",
                  "lemma": "Paar",
                  "pos": "noun",
                  "meaning": "pair / couple"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c11",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c11_l1",
              "original": "Wir könnten in wenigen Wochen ...",
              "literal": "We could in few weeks ...",
              "tokens": [
                {
                  "word": "könnten",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "could (subjunctive II)"
                },
                {
                  "word": "in wenigen Wochen",
                  "lemma": "Woche",
                  "pos": "noun",
                  "meaning": "in a few weeks (dative plural)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c12",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c12_l1",
              "original": "Recht schön, du bestimmst schon die Zeit!",
              "literal": "Right fine, you determine already the time!",
              "tokens": [
                {
                  "word": "bestimmst",
                  "lemma": "bestimmen",
                  "pos": "verb",
                  "meaning": "determine / set"
                },
                {
                  "word": "Zeit",
                  "lemma": "Zeit",
                  "pos": "noun",
                  "meaning": "time (feminine accusative)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c13",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c13_l1",
              "original": "Zum Henker das ewige Pochen!",
              "literal": "To the executioner the eternal knocking!",
              "tokens": [
                {
                  "word": "Zum Henker",
                  "lemma": "Henker",
                  "pos": "noun",
                  "meaning": "to the devil / hangman",
                  "notes": "Mild historical oath; Henker = hangman/executioner."
                },
                {
                  "word": "ewige",
                  "lemma": "ewig",
                  "pos": "adjective",
                  "meaning": "eternal / perpetual"
                },
                {
                  "word": "Pochen",
                  "lemma": "Pochen",
                  "pos": "noun",
                  "meaning": "knocking / pounding"
                }
              ],
              "grammarNote": "Exclamatory oath: 'Zum Henker!' stands for 'Dammit!' or 'Deuce take it!'."
            },
            {
              "id": "a1_s1_c13_l2",
              "original": "Da war ich so herrlich im Gang,",
              "literal": "I was in such a wonderful rhythm,",
              "tokens": [
                {
                  "word": "herrlich",
                  "lemma": "herrlich",
                  "pos": "adverb",
                  "meaning": "splendidly / wonderfully"
                },
                {
                  "word": "im Gang",
                  "lemma": "Gang",
                  "pos": "noun",
                  "meaning": "underway / in full swing"
                }
              ],
              "grammarNote": "'im Gang sein' is an idiom meaning 'to be in full swing' or 'in the groove' (literally: 'to be in motion / underway')."
            },
            {
              "id": "a1_s1_c13_l3",
              "original": "und immer entwischt mir der Fang.",
              "literal": "and always escapes from me the catch.",
              "tokens": [
                {
                  "word": "entwischt",
                  "lemma": "entwischen",
                  "pos": "verb",
                  "meaning": "slips away / escapes"
                },
                {
                  "word": "Fang",
                  "lemma": "Fang",
                  "pos": "noun",
                  "meaning": "catch / quarry"
                }
              ],
              "grammarNote": "The word 'mir' (on me) shows who suffers the distress: 'He escaped on me!'"
            }
          ]
        },
        {
          "id": "a1_s1_c14",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c14_l1",
              "original": "So bin ich doch endlich befreit!",
              "literal": "So am I though at-last freed!",
              "tokens": [
                {
                  "word": "endlich",
                  "lemma": "endlich",
                  "pos": "adverb",
                  "meaning": "finally / at last"
                },
                {
                  "word": "befreit",
                  "lemma": "befreien",
                  "pos": "verb",
                  "meaning": "freed / liberated"
                }
              ]
            },
            {
              "id": "a1_s1_c14_l2",
              "original": "Wie macht seine Liebe mir bang,",
              "literal": "How anxious his love makes me,",
              "tokens": [
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love (nominative)"
                },
                {
                  "word": "bang",
                  "lemma": "bange",
                  "pos": "adjective",
                  "meaning": "fearful / anxious"
                }
              ],
              "grammarNote": "'jemandem bange machen' is an idiom meaning 'to make someone uneasy / anxious' (literally: 'to make anxious to me')."
            },
            {
              "id": "a1_s1_c14_l3",
              "original": "und wie werden die Stunden mir lang.",
              "literal": "and how the hours drag on for me!",
              "tokens": [
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become / grow"
                },
                {
                  "word": "Stunden",
                  "lemma": "Stunde",
                  "pos": "noun",
                  "meaning": "hours"
                }
              ],
              "grammarNote": "'jemandem lang werden' is an idiom meaning time drags on / hangs heavy on someone (literally: 'how the hours become long to me')."
            }
          ]
        },
        {
          "id": "a1_s1_c15",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "Jaquino öffnet die Pforte, nimmt ein Paket ab und legt es in sein Stübchen; unterdessen fährt Marzelline fort.",
          "stageDirectionTranslation": "Jaquino opens the wicket-gate, takes a parcel, and deposits it in his booth; meanwhile Marzelline continues.",
          "lines": [
            {
              "id": "a1_s1_c15_l1",
              "original": "Ich weiß, daß der Arme sich quälet,",
              "literal": "I know, that the poor-one himself torments,",
              "tokens": [
                {
                  "word": "weiß",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "know"
                },
                {
                  "word": "der Arme",
                  "lemma": "arm",
                  "pos": "noun",
                  "meaning": "the poor fellow"
                },
                {
                  "word": "quälet",
                  "lemma": "quälen",
                  "pos": "verb",
                  "meaning": "torments / agonizes"
                }
              ],
              "grammarNote": "Subordinate clause word order: reflexive verb 'sich quälet' at clause end after 'daß'."
            },
            {
              "id": "a1_s1_c15_l2",
              "original": "es tut mir so leid auch um ihn!",
              "literal": "I also feel so sorry for him!",
              "tokens": [
                {
                  "word": "tut... leid",
                  "lemma": "leidtun",
                  "pos": "verb",
                  "meaning": "causes sorrow / feel sorry for"
                },
                {
                  "word": "um ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "about/for him"
                }
              ],
              "grammarNote": "'es tut mir leid um jemanden' is the standard idiom meaning 'I feel sorry for someone' (literally: 'it does to me sorrow about him')."
            },
            {
              "id": "a1_s1_c15_l3",
              "original": "Fidelio hab' ich gewählet,",
              "literal": "Fidelio have I chosen,",
              "tokens": [
                {
                  "word": "Fidelio",
                  "lemma": "Fidelio",
                  "pos": "noun",
                  "meaning": "Fidelio (accusative object)"
                },
                {
                  "word": "gewählet",
                  "lemma": "wählen",
                  "pos": "verb",
                  "meaning": "chosen"
                }
              ],
              "grammarNote": "Putting 'Fidelio' first gives the name emotional prominence: 'Fidelio have I chosen'."
            },
            {
              "id": "a1_s1_c15_l4",
              "original": "ihn lieben ist süßer Gewinn.",
              "literal": "him to-love is sweet gain.",
              "tokens": [
                {
                  "word": "lieben",
                  "lemma": "lieben",
                  "pos": "verb",
                  "meaning": "to love"
                },
                {
                  "word": "süßer",
                  "lemma": "süß",
                  "pos": "adjective",
                  "meaning": "sweet"
                },
                {
                  "word": "Gewinn",
                  "lemma": "Gewinn",
                  "pos": "noun",
                  "meaning": "gain / profit / prize"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c16",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "zurückkehrend",
          "stageDirectionTranslation": "returning",
          "lines": [
            {
              "id": "a1_s1_c16_l1",
              "original": "Wo war ich? Sie sieht mich nicht an!",
              "literal": "Where was I? She looks me not at!",
              "tokens": [
                {
                  "word": "sieht... an",
                  "lemma": "ansehen",
                  "pos": "verb",
                  "meaning": "looks at"
                }
              ],
              "grammarNote": "Separable verb 'ansehen'."
            }
          ]
        },
        {
          "id": "a1_s1_c17",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c17_l1",
              "original": "Da ist er – er fängt wieder an!!",
              "literal": "There is he – he begins again on!!",
              "tokens": [
                {
                  "word": "fängt... an",
                  "lemma": "anfangen",
                  "pos": "verb",
                  "meaning": "begins / starts"
                }
              ],
              "grammarNote": "Separable verb 'anfangen'."
            }
          ]
        },
        {
          "id": "a1_s1_c18",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c18_l1",
              "original": "Wann wirst du das Jawort mir geben?",
              "literal": "When will you the consent to me give?",
              "tokens": [
                {
                  "word": "wirst",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "will (second-person singular auxiliary)"
                },
                {
                  "word": "geben",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "give"
                }
              ],
              "grammarNote": "Future interrogative syntax with auxiliary 'wirst' and infinitive 'geben'."
            },
            {
              "id": "a1_s1_c18_l2",
              "original": "Es könnte ja heute noch sein.",
              "literal": "It could indeed today still be.",
              "tokens": [
                {
                  "word": "könnte",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "could (subjunctive II)"
                },
                {
                  "word": "heute noch",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "this very day / still today"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c19",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "beiseite",
          "stageDirectionTranslation": "aside",
          "lines": [
            {
              "id": "a1_s1_c19_l1",
              "original": "O weh! Er verbittert mein Leben!",
              "literal": "O woe! He embitters my life!",
              "tokens": [
                {
                  "word": "O weh",
                  "lemma": "o weh",
                  "pos": "interjection",
                  "meaning": "alas / o woe"
                },
                {
                  "word": "verbittert",
                  "lemma": "verbittern",
                  "pos": "verb",
                  "meaning": "embitters / sours"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c20",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "zu Jaquino",
          "stageDirectionTranslation": "to Jaquino",
          "lines": [
            {
              "id": "a1_s1_c20_l1",
              "original": "Jetzt, morgen und immer nein, nein!",
              "literal": "Now, tomorrow and always no, no!",
              "tokens": [
                {
                  "word": "morgen",
                  "lemma": "morgen",
                  "pos": "adverb",
                  "meaning": "tomorrow"
                },
                {
                  "word": "immer",
                  "lemma": "immer",
                  "pos": "adverb",
                  "meaning": "always"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c21",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c21_l1",
              "original": "Du bist doch wahrhaftig von Stein,",
              "literal": "You are indeed truly of stone,",
              "tokens": [
                {
                  "word": "wahrhaftig",
                  "lemma": "wahrhaftig",
                  "pos": "adverb",
                  "meaning": "truly / genuinely"
                },
                {
                  "word": "von Stein",
                  "lemma": "Stein",
                  "pos": "noun",
                  "meaning": "of stone"
                }
              ]
            },
            {
              "id": "a1_s1_c21_l2",
              "original": "kein Wünschen, kein Bitten geht ein.",
              "literal": "no wishing, no pleading gets through to you.",
              "tokens": [
                {
                  "word": "Wünschen",
                  "lemma": "Wünschen",
                  "pos": "noun",
                  "meaning": "wishing / desire"
                },
                {
                  "word": "Bitten",
                  "lemma": "Bitten",
                  "pos": "noun",
                  "meaning": "pleading / supplication"
                },
                {
                  "word": "geht... ein",
                  "lemma": "eingehen",
                  "pos": "verb",
                  "meaning": "penetrates / finds acceptance"
                }
              ],
              "grammarNote": "'eingehen' is used idiomatically here meaning 'to register / be accepted / get through to someone'."
            }
          ]
        },
        {
          "id": "a1_s1_c22",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s1_c22_l1",
              "original": "Ich muß ja so hart mit ihm sein,",
              "literal": "I must indeed so hard with him be,",
              "tokens": [
                {
                  "word": "hart",
                  "lemma": "hart",
                  "pos": "adjective",
                  "meaning": "hard / severe / strict"
                }
              ]
            },
            {
              "id": "a1_s1_c22_l2",
              "original": "er hofft bei dem mindesten Schein.",
              "literal": "he hopes at the slightest glimmer.",
              "tokens": [
                {
                  "word": "mindesten",
                  "lemma": "mindeste",
                  "pos": "adjective",
                  "meaning": "slightest / least"
                },
                {
                  "word": "Schein",
                  "lemma": "Schein",
                  "pos": "noun",
                  "meaning": "semblance / glimmer / appearance"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c23",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c23_l1",
              "original": "So wirst du dich nimmer bekehren?",
              "literal": "So will you yourself never convert?",
              "tokens": [
                {
                  "word": "nimmer",
                  "lemma": "nimmer",
                  "pos": "adverb",
                  "meaning": "never"
                },
                {
                  "word": "bekehren",
                  "lemma": "bekehren",
                  "pos": "verb",
                  "meaning": "reform / relent / change one's mind"
                }
              ],
              "grammarNote": "Reflexive verb 'sich bekehren'."
            },
            {
              "id": "a1_s1_c23_l2",
              "original": "Was meinst du?",
              "literal": "What mean you?",
              "tokens": [
                {
                  "word": "meinst",
                  "lemma": "meinen",
                  "pos": "verb",
                  "meaning": "think / reckon"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c24",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c24_l1",
              "original": "Du könntest nun geh'n.",
              "literal": "You could now go.",
              "tokens": [
                {
                  "word": "könntest",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "could (subjunctive II)"
                },
                {
                  "word": "geh'n",
                  "lemma": "gehen",
                  "pos": "verb",
                  "meaning": "go / leave"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c25",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c25_l1",
              "original": "Wie?",
              "literal": "How?",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / what?"
                }
              ]
            },
            {
              "id": "a1_s1_c25_l2",
              "original": "Dich anzusehen, willst du mir wehren?",
              "literal": "You to-look-at, want you from me to-forbid?",
              "tokens": [
                {
                  "word": "anzusehen",
                  "lemma": "ansehen",
                  "pos": "verb",
                  "meaning": "to look upon (zu-infinitive)"
                },
                {
                  "word": "wehren",
                  "lemma": "wehren",
                  "pos": "verb",
                  "meaning": "prevent / forbid"
                }
              ],
              "grammarNote": "Dative construction: 'jemandem etwas wehren' (to forbid someone something)."
            },
            {
              "id": "a1_s1_c25_l3",
              "original": "Auch das noch?",
              "literal": "That on top of everything?",
              "tokens": [
                {
                  "word": "Auch das noch",
                  "lemma": "auch",
                  "pos": "noun",
                  "meaning": "That on top of everything!"
                }
              ],
              "grammarNote": "'Auch das noch?' is a classic German expression of exasperation meaning 'That on top of everything?' or 'Now this as well?'."
            }
          ]
        },
        {
          "id": "a1_s1_c26",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c26_l1",
              "original": "So bleibe hier steh'n.",
              "literal": "Then stay here standing.",
              "tokens": [
                {
                  "word": "bleibe... steh'n",
                  "lemma": "stehenbleiben",
                  "pos": "verb",
                  "meaning": "stay standing / remain"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c27",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c27_l1",
              "original": "Du hast mir so oft doch versprochen ...",
              "literal": "You have to me so often though promised ...",
              "tokens": [
                {
                  "word": "versprochen",
                  "lemma": "versprechen",
                  "pos": "verb",
                  "meaning": "promised"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s1_c28",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c28_l1",
              "original": "Versprochen?",
              "literal": "Promised?",
              "tokens": [
                {
                  "word": "Versprochen",
                  "lemma": "versprechen",
                  "pos": "verb",
                  "meaning": "promised"
                }
              ]
            },
            {
              "id": "a1_s1_c28_l2",
              "original": "Nein, das geht zu weit!",
              "literal": "No, that goes too far!",
              "tokens": [
                {
                  "word": "zu weit",
                  "lemma": "weit",
                  "pos": "adjective",
                  "meaning": "too far"
                }
              ],
              "grammarNote": "Idiom 'zu weit gehen' (to cross the line)."
            }
          ]
        },
        {
          "id": "a1_s1_c29",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c29_l1",
              "original": "Zum Henker das ewige Pochen!",
              "literal": "To the executioner the eternal knocking!",
              "tokens": [
                {
                  "word": "Zum Henker",
                  "lemma": "Henker",
                  "pos": "noun",
                  "meaning": "to the devil / hangman",
                  "notes": "Mild historical oath; Henker = hangman/executioner."
                },
                {
                  "word": "ewige",
                  "lemma": "ewig",
                  "pos": "adjective",
                  "meaning": "eternal / perpetual"
                },
                {
                  "word": "Pochen",
                  "lemma": "Pochen",
                  "pos": "noun",
                  "meaning": "knocking / pounding"
                }
              ],
              "grammarNote": "Exclamatory oath: 'Zum Henker!' stands for 'Dammit!' or 'Deuce take it!'."
            }
          ]
        },
        {
          "id": "a1_s1_c30",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c30_l1",
              "original": "So bin ich doch endlich befreit!",
              "literal": "So am I though at-last freed!",
              "tokens": [
                {
                  "word": "endlich",
                  "lemma": "endlich",
                  "pos": "adverb",
                  "meaning": "finally / at last"
                },
                {
                  "word": "befreit",
                  "lemma": "befreien",
                  "pos": "verb",
                  "meaning": "freed / liberated"
                }
              ]
            },
            {
              "id": "a1_s1_c30_l2",
              "original": "Das ist ein willkommener Klang,",
              "literal": "That is a welcome sound,",
              "tokens": [
                {
                  "word": "willkommener",
                  "lemma": "willkommen",
                  "pos": "adjective",
                  "meaning": "welcome"
                },
                {
                  "word": "Klang",
                  "lemma": "Klang",
                  "pos": "noun",
                  "meaning": "sound / chime"
                }
              ]
            },
            {
              "id": "a1_s1_c30_l3",
              "original": "es wurde zu Tode mir bang.",
              "literal": "I was scared half to death!",
              "tokens": [
                {
                  "word": "zu Tode",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "unto death / dreadfully"
                },
                {
                  "word": "bang",
                  "lemma": "bange",
                  "pos": "adjective",
                  "meaning": "frightened / anxious"
                }
              ],
              "grammarNote": "'jemandem wird zu Tode bang' is an idiom meaning 'to be scared half to death' (literally: 'to me it became fearful unto death')."
            }
          ]
        },
        {
          "id": "a1_s1_c31",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.1: Duett",
          "lines": [
            {
              "id": "a1_s1_c31_l1",
              "original": "Es ward ihr im Ernste schon bang,",
              "literal": "It was to her in earnest already fearful,",
              "tokens": [
                {
                  "word": "ward",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "became / grew",
                  "notes": "Archaic preterite form of werden."
                },
                {
                  "word": "im Ernste",
                  "lemma": "Ernst",
                  "pos": "noun",
                  "meaning": "in earnest / genuinely"
                }
              ]
            },
            {
              "id": "a1_s1_c31_l2",
              "original": "wer weiß, ob es mir gelang.",
              "literal": "who knows, whether it to me succeeded.",
              "tokens": [
                {
                  "word": "gelang",
                  "lemma": "gelingen",
                  "pos": "verb",
                  "meaning": "succeeded",
                  "notes": "Preterite of gelingen (impersonal verb taking dative)."
                }
              ],
              "grammarNote": "Impersonal construction: 'es gelang mir' (I succeeded)."
            }
          ]
        },
        {
          "id": "a1_s1_c32",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.1: Duett",
          "stageDirection": "allein",
          "stageDirectionTranslation": "alone",
          "lines": [
            {
              "id": "a1_s1_c32_l1",
              "original": "Der arme Jaquino dauert mich beinahe. Kann ich es",
              "literal": "The poor Jaquino grieves / moves to pity me almost. can I it",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "arme",
                  "lemma": "arm",
                  "pos": "adjective",
                  "meaning": "poor / arms"
                },
                {
                  "word": "dauert",
                  "lemma": "dauert",
                  "pos": "verb",
                  "meaning": "grieves / moves to pity"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s1_c32_l2",
              "original": "aber ändern? Ich war ihm sonst recht gut, da kam",
              "literal": "but to change? I was to him formerly / otherwise right / quite good, there came",
              "tokens": [
                {
                  "word": "aber",
                  "lemma": "aber",
                  "pos": "conjunction",
                  "meaning": "but / however"
                },
                {
                  "word": "ändern",
                  "lemma": "ändern",
                  "pos": "verb",
                  "meaning": "to change"
                },
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                }
              ]
            },
            {
              "id": "a1_s1_c32_l3",
              "original": "Fidelio in unser Haus und seit der Zeit ist alles in",
              "literal": "Fidelio in our house and since the time is everything in",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "unser",
                  "lemma": "unser",
                  "pos": "verb",
                  "meaning": "our"
                },
                {
                  "word": "Haus",
                  "lemma": "haus",
                  "pos": "noun",
                  "meaning": "house"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s1_c32_l4",
              "original": "mir und um mich verändert.",
              "literal": "to me and around me changed.",
              "tokens": [
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "um",
                  "lemma": "um",
                  "pos": "preposition",
                  "meaning": "around / for / about"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "verändert",
                  "lemma": "verändert",
                  "pos": "verb",
                  "meaning": "changed"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 2,
      "title": "O wär’ ich schon mit dir vereint (Arie)",
      "titleTranslation": "O were I already united with you (Aria)",
      "originalDescription": "Marzelline besingt ihre heimliche Liebe zu Fidelio und träumt von häuslichem Glück.",
      "description": "Marzelline sings of her secret love for Fidelio and dreams of domestic bliss.",
      "cues": [
        {
          "id": "a1_s2_c1",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c1_l1",
              "original": "O wär' ich schon mit dir vereint,",
              "literal": "O were I already with you united,",
              "tokens": [
                {
                  "word": "O wär'",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "o were (subjunctive II optative)"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "mit dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "with you (dative)"
                },
                {
                  "word": "vereint",
                  "lemma": "vereinen",
                  "pos": "verb",
                  "meaning": "united",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                }
              ],
              "grammarNote": "Starting with the subjunctive verb expresses a heartfelt wish: 'If only I were united with you...'"
            },
            {
              "id": "a1_s2_c1_l2",
              "original": "und dürfte Mann dich nennen!",
              "literal": "and might husband you call!",
              "tokens": [
                {
                  "word": "dürfte",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "might / were permitted to (subjunctive II)"
                },
                {
                  "word": "Mann",
                  "lemma": "Mann",
                  "pos": "noun",
                  "meaning": "husband"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (accusative)"
                },
                {
                  "word": "nennen",
                  "lemma": "nennen",
                  "pos": "verb",
                  "meaning": "to call / name"
                }
              ],
              "grammarNote": "Double accusative construction with 'nennen': 'Mann' (predicate accusative) and 'dich' (direct object)."
            },
            {
              "id": "a1_s2_c1_l3",
              "original": "Ein Mädchen darf ja, was es meint,",
              "literal": "A maiden is-permitted indeed, what she feels,",
              "tokens": [
                {
                  "word": "Mädchen",
                  "lemma": "Mädchen",
                  "pos": "noun",
                  "meaning": "maiden / girl (grammatically neuter)"
                },
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "is permitted / may"
                },
                {
                  "word": "was es meint",
                  "lemma": "meinen",
                  "pos": "verb",
                  "meaning": "what she thinks/means",
                  "notes": "Grammatical agreement: 'es' refers to neuter 'das Mädchen'."
                }
              ]
            },
            {
              "id": "a1_s2_c1_l4",
              "original": "zur Hälfte nur bekennen.",
              "literal": "to the half only to-confess.",
              "tokens": [
                {
                  "word": "zur Hälfte",
                  "lemma": "Hälfte",
                  "pos": "noun",
                  "meaning": "by half / halfway"
                },
                {
                  "word": "bekennen",
                  "lemma": "bekennen",
                  "pos": "verb",
                  "meaning": "to confess / acknowledge"
                }
              ]
            },
            {
              "id": "a1_s2_c1_l5",
              "original": "Doch wenn ich nicht erröten muß,",
              "literal": "Yet if I not to blush must,",
              "tokens": [
                {
                  "word": "Doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                },
                {
                  "word": "wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "erröten",
                  "lemma": "erröten",
                  "pos": "verb",
                  "meaning": "to blush"
                }
              ]
            },
            {
              "id": "a1_s2_c1_l6",
              "original": "ob einem warmen Herzenskuß,",
              "literal": "whether to-a warmen heart's-kiss,",
              "tokens": [
                {
                  "word": "ob",
                  "lemma": "ob",
                  "pos": "conjunction",
                  "meaning": "whether / if"
                },
                {
                  "word": "einem",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "to-a (dat.)"
                },
                {
                  "word": "Herzenskuß",
                  "lemma": "herzenskuß",
                  "pos": "noun",
                  "meaning": "heart's-kiss"
                }
              ]
            },
            {
              "id": "a1_s2_c1_l7",
              "original": "wenn nichts uns stört auf Erden –",
              "literal": "if nothing us disturbs on Erden –",
              "tokens": [
                {
                  "word": "wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                },
                {
                  "word": "uns",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "us (acc./dat.)"
                },
                {
                  "word": "stört",
                  "lemma": "stört",
                  "pos": "verb",
                  "meaning": "disturbs"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c2",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.2: Arie",
          "stageDirection": "seufzt und legt die Hand auf die Brust",
          "stageDirectionTranslation": "sighs and places hand upon chest",
          "lines": [
            {
              "id": "a1_s2_c2_l1",
              "original": "Die Hoffnung schon erfüllt die Brust,",
              "literal": "The hope already fills the breast,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "erfüllt",
                  "lemma": "erfüllt",
                  "pos": "verb",
                  "meaning": "fills"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l2",
              "original": "mit unaussprechlich süßer Lust;",
              "literal": "with inexpressibly sweet delight;",
              "tokens": [
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "unaussprechlich",
                  "lemma": "unaussprechlich",
                  "pos": "verb",
                  "meaning": "inexpressibly"
                },
                {
                  "word": "süßer",
                  "lemma": "süß",
                  "pos": "adjective",
                  "meaning": "sweet"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "delight / joy / desire"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l3",
              "original": "wie glücklich will ich werden!",
              "literal": "how happy want I to become!",
              "tokens": [
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                },
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / will"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l4",
              "original": "In Ruhe stiller Häuslichkeit",
              "literal": "In tranquility of-quiet domesticity",
              "tokens": [
                {
                  "word": "Ruhe",
                  "lemma": "Ruhe",
                  "pos": "noun",
                  "meaning": "tranquility / peace"
                },
                {
                  "word": "stiller Häuslichkeit",
                  "lemma": "Häuslichkeit",
                  "pos": "noun",
                  "meaning": "of quiet domesticity (genitive feminine)"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l5",
              "original": "erwach' ich jeden Morgen,",
              "literal": "awake I every morning,",
              "tokens": [
                {
                  "word": "erwach'",
                  "lemma": "erwachen",
                  "pos": "verb",
                  "meaning": "awake"
                },
                {
                  "word": "jeden Morgen",
                  "lemma": "Morgen",
                  "pos": "noun",
                  "meaning": "every morning (accusative of definite time)"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l6",
              "original": "wir grüßen uns mit Zärtlichkeit,",
              "literal": "we greet us with tenderness,",
              "tokens": [
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "grüßen",
                  "lemma": "grüßen",
                  "pos": "verb",
                  "meaning": "greet"
                },
                {
                  "word": "uns",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "us (acc./dat.)"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "Zärtlichkeit",
                  "lemma": "zärtlichkeit",
                  "pos": "noun",
                  "meaning": "tenderness"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l7",
              "original": "der Fleiß verscheucht die Sorgen.",
              "literal": "the diligence banishes the worries.",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Fleiß",
                  "lemma": "fleiß",
                  "pos": "noun",
                  "meaning": "diligence"
                },
                {
                  "word": "verscheucht",
                  "lemma": "verscheucht",
                  "pos": "verb",
                  "meaning": "banishes"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Sorgen",
                  "lemma": "sorgen",
                  "pos": "noun",
                  "meaning": "worries"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l8",
              "original": "Und ist die Arbeit abgetan,",
              "literal": "And is the work finished,",
              "tokens": [
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Arbeit",
                  "lemma": "Arbeit",
                  "pos": "noun",
                  "meaning": "work / labor"
                },
                {
                  "word": "abgetan",
                  "lemma": "abgetan",
                  "pos": "verb",
                  "meaning": "finished"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l9",
              "original": "dann schleicht die holde Nacht heran,",
              "literal": "then creeps the gracious night near / on,",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "schleicht",
                  "lemma": "schleicht",
                  "pos": "verb",
                  "meaning": "creeps"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "holde",
                  "lemma": "holde",
                  "pos": "verb",
                  "meaning": "gracious"
                },
                {
                  "word": "Nacht",
                  "lemma": "Nacht",
                  "pos": "noun",
                  "meaning": "night"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l10",
              "original": "dann ruh'n wir von Beschwerden.",
              "literal": "then rest we from tribulations.",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "ruh'n",
                  "lemma": "ruh'n",
                  "pos": "verb",
                  "meaning": "rest"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                },
                {
                  "word": "Beschwerden",
                  "lemma": "beschwerden",
                  "pos": "noun",
                  "meaning": "tribulations"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l11",
              "original": "Die Hoffnung schon erfüllt die Brust,",
              "literal": "The hope already fills the breast,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "erfüllt",
                  "lemma": "erfüllt",
                  "pos": "verb",
                  "meaning": "fills"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l12",
              "original": "mit unaussprechlich süßer Lust;",
              "literal": "with inexpressibly sweet delight;",
              "tokens": [
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "unaussprechlich",
                  "lemma": "unaussprechlich",
                  "pos": "verb",
                  "meaning": "inexpressibly"
                },
                {
                  "word": "süßer",
                  "lemma": "süß",
                  "pos": "adjective",
                  "meaning": "sweet"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "delight / joy / desire"
                }
              ]
            },
            {
              "id": "a1_s2_c2_l13",
              "original": "wie glücklich will ich werden!",
              "literal": "how happy want I to become!",
              "tokens": [
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                },
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / will"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c3",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "stageDirection": "auftretend",
          "stageDirectionTranslation": "entering",
          "lines": [
            {
              "id": "a1_s2_c3_l1",
              "original": "Guten Tag, Marzelline. Ist Fidelio noch nicht zurück?",
              "literal": "Guten day, Marzelline. is Fidelio still not back?",
              "tokens": [
                {
                  "word": "Tag",
                  "lemma": "Tag",
                  "pos": "noun",
                  "meaning": "day"
                },
                {
                  "word": "Ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c4",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c4_l1",
              "original": "Nein, Vater – Da ist er ja! Da ist er ja!",
              "literal": "No, father – there is he yes! there is he yes!",
              "tokens": [
                {
                  "word": "Nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                },
                {
                  "word": "Da",
                  "lemma": "da",
                  "pos": "adverb",
                  "meaning": "there / since"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c5",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.2: Arie",
          "stageDirection": "Leonore tritt auf. Sie trägt ein dunkles Wams, ein rotes Gilet, dunkles Beinkleid, kurze Stiefel, einen bre- iten Gürtel aus schwarzem Leder mit einer kupfernen Schnalle; ihre Haare sind in eine Netzhaube gesteckt. Auf dem Rücken trägt sie ein Behältnis mit Lebensmitteln, an den Armen Ketten, die sie beim Eintreten an dem Stübchen des Pförtners ablegt; an der Seite hängt ihr eine blecherne Büchse an einer Schnur.",
          "stageDirectionTranslation": "Leonore enters. She wears a dark doublet, a red waistcoat, dark breeches, short boots, and a broad black leather belt with a brass buckle; her hair is gathered beneath a net cap. On her back she carries a basket of provisions, in her arms iron fetters which she sets down by the porter's booth upon entering; at her side hangs a tin box on a cord.",
          "lines": []
        },
        {
          "id": "a1_s2_c6",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c6_l1",
              "original": "Armer Fidelio, diesmal hast du zuviel dir aufgeladen.",
              "literal": "Poor Fidelio, this-time have you too-much upon-yourself loaded.",
              "tokens": [
                {
                  "word": "aufgeladen",
                  "lemma": "aufladen",
                  "pos": "verb",
                  "meaning": "loaded upon (past participle)"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "upon yourself (dative reflexive)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c7",
          "speaker": "Leonore",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c7_l1",
              "original": "Ich muß gestehen, ich bin ein wenig ermüdet. Der",
              "literal": "I must confess, I am a little tired. The",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "bin",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "am"
                }
              ]
            },
            {
              "id": "a1_s2_c7_l2",
              "original": "Schmied hatte an den Ketten so lange",
              "literal": "Blacksmith had at the chains so long",
              "tokens": [
                {
                  "word": "Schmied",
                  "lemma": "schmied",
                  "pos": "noun",
                  "meaning": "blacksmith"
                },
                {
                  "word": "hatte",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "had"
                },
                {
                  "word": "an",
                  "lemma": "an",
                  "pos": "preposition",
                  "meaning": "at / on"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                }
              ]
            },
            {
              "id": "a1_s2_c7_l3",
              "original": "auszubessern, daß ich glaubte, er würde nicht damit",
              "literal": "to repair, so that I thought he would not finish with it.",
              "tokens": [
                {
                  "word": "auszubessern",
                  "lemma": "auszubessern",
                  "pos": "verb",
                  "meaning": "to repair"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            },
            {
              "id": "a1_s2_c7_l4",
              "original": "fertig werden.",
              "literal": "fertig to become.",
              "tokens": [
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c8",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c8_l1",
              "original": "Sind sie jetzt gut gemacht?",
              "literal": "Are she now good made?",
              "tokens": [
                {
                  "word": "Sind",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                },
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                },
                {
                  "word": "gemacht",
                  "lemma": "machen",
                  "pos": "verb",
                  "meaning": "made"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c9",
          "speaker": "Leonore",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c9_l1",
              "original": "Gewiß, recht gut und stark. Keiner der Gefangenen",
              "literal": "Certain, right / quite good and strong. Keiner the prisoners",
              "tokens": [
                {
                  "word": "Gewiß",
                  "lemma": "gewiß",
                  "pos": "adjective",
                  "meaning": "certain / sure"
                },
                {
                  "word": "recht",
                  "lemma": "recht",
                  "pos": "verb",
                  "meaning": "right / quite"
                },
                {
                  "word": "gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "stark",
                  "lemma": "stark",
                  "pos": "adjective",
                  "meaning": "strong"
                }
              ]
            },
            {
              "id": "a1_s2_c9_l2",
              "original": "wird sie zerbrechen.",
              "literal": "becomes she zerbrechen.",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c10",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c10_l1",
              "original": "Gut! Brav!",
              "literal": "Good! Well done!",
              "tokens": [
                {
                  "word": "Gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c11",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "stageDirection": "beiseite",
          "stageDirectionTranslation": "aside",
          "lines": [
            {
              "id": "a1_s2_c11_l1",
              "original": "Der Schelm gibt sich alle Mühe, offenbar meiner",
              "literal": "The Schelm gives itself all toil, offenbar of my",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "gibt",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gives"
                },
                {
                  "word": "sich",
                  "lemma": "sich",
                  "pos": "pronoun",
                  "meaning": "itself / himself / herself / themselves"
                },
                {
                  "word": "alle",
                  "lemma": "all",
                  "pos": "verb",
                  "meaning": "all"
                }
              ]
            },
            {
              "id": "a1_s2_c11_l2",
              "original": "Marzelline wegen.",
              "literal": "Marzelline on-account-of.",
              "tokens": [
                {
                  "word": "wegen",
                  "lemma": "wegen",
                  "pos": "preposition",
                  "meaning": "on-account-of / because-of"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c12",
          "speaker": "Leonore",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c12_l1",
              "original": "Ich suche zu tun, was mir möglich ist.",
              "literal": "I seek to do what is possible for me.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "tun",
                  "lemma": "tun",
                  "pos": "verb",
                  "meaning": "to do"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c13",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c13_l1",
              "original": "Ja, ja, du bist brav; man kann nicht eifriger, nicht verständiger sein.",
              "literal": "Yes, yes, you are good; one cannot be more diligent, more sensible.",
              "tokens": [
                {
                  "word": "Ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "bist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                }
              ]
            },
            {
              "id": "a1_s2_c13_l2",
              "original": "Ich habe dich aber auch mit jedem Tage lieber;",
              "literal": "And I grow fonder of you with every passing day;",
              "tokens": [
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                },
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "habe",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (acc.)"
                }
              ]
            },
            {
              "id": "a1_s2_c13_l3",
              "original": "und sei versichert, dein Lohn soll auch nicht ausbleiben.",
              "literal": "and rest assured, your reward shall not fail to come.",
              "tokens": [
                {
                  "word": "Tage",
                  "lemma": "Tag",
                  "pos": "noun",
                  "meaning": "days"
                },
                {
                  "word": "lieber",
                  "lemma": "lieb",
                  "pos": "adverb",
                  "meaning": "rather / dearer"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c14",
          "speaker": "Leonore",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c14_l1",
              "original": "O glaubt nicht, daß ich meine Schuldigkeit nur des Lohnes wegen tue ...",
              "literal": "O do not believe that I do my duty only for the sake of the reward ...",
              "tokens": [
                {
                  "word": "glaubt",
                  "lemma": "glauben",
                  "pos": "verb",
                  "meaning": "believes"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s2_c15",
          "speaker": "Rocco",
          "pieceTitle": "Nr.2: Arie",
          "lines": [
            {
              "id": "a1_s2_c15_l1",
              "original": "Still! Meinst du, ich könne dir nicht ins Herz sehen?",
              "literal": "Hush! Think you, I could to you into the heart see?",
              "tokens": [
                {
                  "word": "könne",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "could (subjunctive I indirect speech)"
                },
                {
                  "word": "ins Herz sehen",
                  "lemma": "Herz",
                  "pos": "verb",
                  "meaning": "to read someone's heart"
                }
              ],
              "grammarNote": "Subjunctive I 'könne' used for indirect discourse."
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 3,
      "title": "Mir ist so wunderbar (Kanonisches Quartett)",
      "titleTranslation": "A wondrous feeling fills my heart (Canonical Quartet)",
      "originalDescription": "Marzelline, Leonore, Rocco und Jaquino drücken im Kanon ihre widerstreitenden Gefühle und Hoffnungen aus.",
      "description": "Marzelline, Leonore, Rocco, and Jaquino express in canon their conflicting emotions, hopes, and anxieties.",
      "cues": [
        {
          "id": "a1_s3_c1",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s3_c1_l1",
              "original": "Mir ist so wunderbar,",
              "literal": "To me is so wonderful,",
              "tokens": [
                {
                  "word": "Mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (dative)"
                },
                {
                  "word": "wunderbar",
                  "lemma": "wunderbar",
                  "pos": "adjective",
                  "meaning": "wondrous / strange / marvelous"
                }
              ],
              "grammarNote": "Impersonal dative construction: 'Mir ist [adjective]' (I feel...)."
            },
            {
              "id": "a1_s3_c1_l2",
              "original": "es engt das Herz mir ein;",
              "literal": "it constricts the heart to me in;",
              "tokens": [
                {
                  "word": "engt... ein",
                  "lemma": "einengen",
                  "pos": "verb",
                  "meaning": "constricts / tightens around"
                },
                {
                  "word": "das Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "the heart (neuter)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (dative of possessor)"
                }
              ],
              "grammarNote": "Separable verb 'einengen' with dative of inalienable possession ('mir das Herz')."
            },
            {
              "id": "a1_s3_c1_l3",
              "original": "er liebt mich, es ist klar,",
              "literal": "he loves me, it is clear,",
              "tokens": [
                {
                  "word": "liebt",
                  "lemma": "lieben",
                  "pos": "verb",
                  "meaning": "loves"
                },
                {
                  "word": "klar",
                  "lemma": "klar",
                  "pos": "adjective",
                  "meaning": "clear"
                }
              ]
            },
            {
              "id": "a1_s3_c1_l4",
              "original": "ich werde glücklich sein!",
              "literal": "I will happy be!",
              "tokens": [
                {
                  "word": "werde",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "shall / will"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                }
              ],
              "grammarNote": "Future tense frames the sentence: 'werde' comes first and 'sein' waits at the end."
            }
          ]
        },
        {
          "id": "a1_s3_c2",
          "speaker": "Leonore",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s3_c2_l1",
              "original": "Wie groß ist die Gefahr,",
              "literal": "How great is the danger,",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "groß",
                  "lemma": "groß",
                  "pos": "adjective",
                  "meaning": "great / large"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Gefahr",
                  "lemma": "Gefahr",
                  "pos": "noun",
                  "meaning": "danger / peril"
                }
              ]
            },
            {
              "id": "a1_s3_c2_l2",
              "original": "wie schwach der Hoffnung Schein!",
              "literal": "how weak the hope Schein!",
              "tokens": [
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "schwach",
                  "lemma": "schwach",
                  "pos": "adjective",
                  "meaning": "weak"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope"
                }
              ]
            },
            {
              "id": "a1_s3_c2_l3",
              "original": "Sie liebt mich, es ist klar,",
              "literal": "She loves me, it is clear,",
              "tokens": [
                {
                  "word": "Sie liebt mich",
                  "lemma": "lieben",
                  "pos": "noun",
                  "meaning": "she loves me"
                }
              ]
            },
            {
              "id": "a1_s3_c2_l4",
              "original": "o namenlose Pein!",
              "literal": "o nameless torment!",
              "tokens": [
                {
                  "word": "namenlose",
                  "lemma": "namenlos",
                  "pos": "adjective",
                  "meaning": "nameless / unutterable"
                },
                {
                  "word": "Pein",
                  "lemma": "Pein",
                  "pos": "noun",
                  "meaning": "torment / agony (feminine)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s3_c3",
          "speaker": "Rocco",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s3_c3_l1",
              "original": "Sie liebt ihn, es ist klar,",
              "literal": "She loves him, it is clear,",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "liebt",
                  "lemma": "lieben",
                  "pos": "verb",
                  "meaning": "loves"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            },
            {
              "id": "a1_s3_c3_l2",
              "original": "ja, Mädchen, er wird dein!",
              "literal": "yes, maiden, he will-become yours!",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will be"
                },
                {
                  "word": "dein",
                  "lemma": "dein",
                  "pos": "pronoun",
                  "meaning": "yours (predicative possessive)"
                }
              ]
            },
            {
              "id": "a1_s3_c3_l3",
              "original": "Ein gutes, junges Paar,",
              "literal": "A good, young pair,",
              "tokens": [
                {
                  "word": "gutes",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good (neuter nominative)"
                },
                {
                  "word": "junges",
                  "lemma": "jung",
                  "pos": "adjective",
                  "meaning": "young"
                },
                {
                  "word": "Paar",
                  "lemma": "Paar",
                  "pos": "noun",
                  "meaning": "couple"
                }
              ]
            },
            {
              "id": "a1_s3_c3_l4",
              "original": "sie werden glücklich sein!",
              "literal": "she to become happy to be!",
              "tokens": [
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s3_c4",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s3_c4_l1",
              "original": "Mir sträubt sich schon das Haar,",
              "literal": "My hair already stands on end,",
              "tokens": [
                {
                  "word": "Mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "sich",
                  "lemma": "sich",
                  "pos": "pronoun",
                  "meaning": "itself / himself / herself / themselves"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                }
              ]
            },
            {
              "id": "a1_s3_c4_l2",
              "original": "der Vater willigt ein,",
              "literal": "the father willigt a,",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s3_c4_l3",
              "original": "mir wird so wunderbar,",
              "literal": "to me becomes so wunderbar,",
              "tokens": [
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                }
              ]
            },
            {
              "id": "a1_s3_c4_l4",
              "original": "mir fällt kein Mittel ein!",
              "literal": "to me falls no Mittel a!",
              "tokens": [
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "fällt",
                  "lemma": "fallen",
                  "pos": "verb",
                  "meaning": "falls"
                },
                {
                  "word": "kein",
                  "lemma": "kein",
                  "pos": "verb",
                  "meaning": "no / none"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s3_c5",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "Er geht in seine Stube zurück.",
          "stageDirectionTranslation": "He goes back into his room.",
          "lines": []
        },
        {
          "id": "a1_s3_c6",
          "speaker": "Rocco",
          "pieceTitle": "Nr.3: Quartett",
          "lines": [
            {
              "id": "a1_s3_c6_l1",
              "original": "Höre, Fidelio, weißt du, was ich tue? Ich, ich, mache",
              "literal": "Hear, Fidelio, knowest you, what I do? I, I, make",
              "tokens": [
                {
                  "word": "Höre",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear"
                },
                {
                  "word": "weißt",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "knowest"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                }
              ]
            },
            {
              "id": "a1_s3_c6_l2",
              "original": "dich zu meinem Tochtermann!",
              "literal": "you too to-my Tochtermann!",
              "tokens": [
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (acc.)"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "meinem",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "to-my (dat.)"
                }
              ]
            },
            {
              "id": "a1_s3_c6_l3",
              "original": "Nun, meine Kinder, ihr habt euch doch recht herzlich",
              "literal": "Now, my children, you have you yet right / quite herzlich",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                },
                {
                  "word": "Kinder",
                  "lemma": "Kind",
                  "pos": "noun",
                  "meaning": "children"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "habt",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have (pl.)"
                }
              ]
            },
            {
              "id": "a1_s3_c6_l4",
              "original": "lieb, nicht wahr? Aber das ist noch nicht alles, was",
              "literal": "lieb, not true? but the is still not everything, what",
              "tokens": [
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "wahr",
                  "lemma": "wahr",
                  "pos": "adjective",
                  "meaning": "true"
                },
                {
                  "word": "Aber",
                  "lemma": "aber",
                  "pos": "conjunction",
                  "meaning": "but / however"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                }
              ]
            },
            {
              "id": "a1_s3_c6_l5",
              "original": "zu einer guten, vergnügten Haushaltung gehört; man",
              "literal": "belongs to a good, contented household; one",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "einer",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "of-a / to-a"
                }
              ]
            },
            {
              "id": "a1_s3_c6_l6",
              "original": "braucht auch ...",
              "literal": "braucht also ...",
              "tokens": [
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s3_c7",
          "speaker": "Rocco",
          "pieceTitle": "Nr.3: Quartett",
          "stageDirection": "Er macht die Gebärde des Geldzählens.",
          "stageDirectionTranslation": "He makes the gesture of counting coins.",
          "lines": []
        }
      ]
    },
    {
      "sceneNumber": 4,
      "title": "Hat man nicht auch Gold beineben (Arie)",
      "titleTranslation": "If one doesn’t have gold at hand (Aria)",
      "originalDescription": "Rocco belehrt die Jugend pragmatisch über die unentbehrliche Notwendigkeit des Geldes für ein glückliches Leben.",
      "description": "Rocco pragmatically lectures the young lovers on the indispensable necessity of money for happiness.",
      "cues": [
        {
          "id": "a1_s4_c1",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c1_l1",
              "original": "Hat man nicht auch Gold beineben,",
              "literal": "Has one not also gold at-hand,",
              "tokens": [
                {
                  "word": "Gold",
                  "lemma": "Gold",
                  "pos": "noun",
                  "meaning": "gold (neuter)"
                },
                {
                  "word": "beineben",
                  "lemma": "beineben",
                  "pos": "adverb",
                  "meaning": "at hand / beside it / on the side",
                  "notes": "Archaic adverb: 'daneben / zur Hand'."
                }
              ],
              "grammarNote": "Conditional clause without 'wenn' (verb-initial 'Hat man...')."
            },
            {
              "id": "a1_s4_c1_l2",
              "original": "kann man nicht ganz glücklich sein;",
              "literal": "can one not quite happy be;",
              "tokens": [
                {
                  "word": "ganz",
                  "lemma": "ganz",
                  "pos": "adverb",
                  "meaning": "entirely / fully"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l3",
              "original": "traurig schleppt sich fort das Leben,",
              "literal": "sorrowfully drags itself along the life,",
              "tokens": [
                {
                  "word": "schleppt... fort",
                  "lemma": "fortschleppen",
                  "pos": "verb",
                  "meaning": "drags onward / trudges on"
                },
                {
                  "word": "traurig",
                  "lemma": "traurig",
                  "pos": "adverb",
                  "meaning": "sadly / drearily"
                }
              ],
              "grammarNote": "Reflexive separable verb 'sich fortschleppen'."
            },
            {
              "id": "a1_s4_c1_l4",
              "original": "mancher Kummer stellt sich ein.",
              "literal": "mancher sorrow / grief sets itself a.",
              "tokens": [
                {
                  "word": "Kummer",
                  "lemma": "kummer",
                  "pos": "noun",
                  "meaning": "sorrow / grief"
                },
                {
                  "word": "stellt",
                  "lemma": "stellt",
                  "pos": "verb",
                  "meaning": "sets"
                },
                {
                  "word": "sich",
                  "lemma": "sich",
                  "pos": "pronoun",
                  "meaning": "itself / himself / herself / themselves"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l5",
              "original": "Doch wenn's in den Taschen fein klingelt und rollt,",
              "literal": "Yet when it in the pockets finely clinks and rolls,",
              "tokens": [
                {
                  "word": "wenn's",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "when it (wenn + es)"
                },
                {
                  "word": "Taschen",
                  "lemma": "Tasche",
                  "pos": "noun",
                  "meaning": "pockets (dative plural)"
                },
                {
                  "word": "klingelt",
                  "lemma": "klingeln",
                  "pos": "verb",
                  "meaning": "clinks / jingles"
                },
                {
                  "word": "rollt",
                  "lemma": "rollen",
                  "pos": "verb",
                  "meaning": "rolls"
                }
              ],
              "grammarNote": "Onomatopoeic coins jingling in pockets."
            },
            {
              "id": "a1_s4_c1_l6",
              "original": "da hält man das Schicksal gefangen,",
              "literal": "there holds one fate captive,",
              "tokens": [
                {
                  "word": "hält... gefangen",
                  "lemma": "gefangenhalten",
                  "pos": "verb",
                  "meaning": "holds captive"
                },
                {
                  "word": "Schicksal",
                  "lemma": "Schicksal",
                  "pos": "noun",
                  "meaning": "fate / destiny (neuter)"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l7",
              "original": "und Macht und Liebe verschafft dir das Gold",
              "literal": "and makes and love procures to you the gold",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "Macht",
                  "lemma": "machen",
                  "pos": "verb",
                  "meaning": "makes / does"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "verschafft",
                  "lemma": "verschafft",
                  "pos": "verb",
                  "meaning": "procures"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l8",
              "original": "und stillet das kühnste Verlangen.",
              "literal": "and quenches the boldest desire.",
              "tokens": [
                {
                  "word": "stillet",
                  "lemma": "stillen",
                  "pos": "verb",
                  "meaning": "satisfies / stills"
                },
                {
                  "word": "kühnste Verlangen",
                  "lemma": "Verlangen",
                  "pos": "noun",
                  "meaning": "boldest desire (superlative adjective + neuter noun)"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l9",
              "original": "Das Glück dient wie ein Knecht für Sold,",
              "literal": "Fortune serves like a servant for pay,",
              "tokens": [
                {
                  "word": "Knecht",
                  "lemma": "Knecht",
                  "pos": "noun",
                  "meaning": "hired hand / servant"
                },
                {
                  "word": "für Sold",
                  "lemma": "Sold",
                  "pos": "noun",
                  "meaning": "for soldier's pay / wages"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l10",
              "original": "es ist ein schönes Ding, das Gold,",
              "literal": "it is a fine thing, gold,",
              "tokens": [
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Ding",
                  "lemma": "ding",
                  "pos": "noun",
                  "meaning": "thing"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l11",
              "original": "es ist ein goldnes Ding, das Gold.",
              "literal": "it is a golden thing, the gold.",
              "tokens": [
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "goldnes",
                  "lemma": "goldnes",
                  "pos": "verb",
                  "meaning": "golden"
                },
                {
                  "word": "Ding",
                  "lemma": "ding",
                  "pos": "noun",
                  "meaning": "thing"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l12",
              "original": "Wenn sich Nichts mit Nichts verbindet,",
              "literal": "If itself nothing with nothing verbindet,",
              "tokens": [
                {
                  "word": "Wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "sich",
                  "lemma": "sich",
                  "pos": "pronoun",
                  "meaning": "itself / himself / herself / themselves"
                },
                {
                  "word": "Nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "Nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l13",
              "original": "ist und bleibt die Summe klein;",
              "literal": "is and remains the sum small;",
              "tokens": [
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "bleibt",
                  "lemma": "bleibt",
                  "pos": "verb",
                  "meaning": "remains"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Summe",
                  "lemma": "summe",
                  "pos": "noun",
                  "meaning": "sum"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l14",
              "original": "wer bei Tisch nur Liebe findet,",
              "literal": "who at Tisch only love finds,",
              "tokens": [
                {
                  "word": "wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "who"
                },
                {
                  "word": "bei",
                  "lemma": "bei",
                  "pos": "preposition",
                  "meaning": "at / near / with"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l15",
              "original": "wird nach Tische hungrig sein.",
              "literal": "becomes after Tische hungrig to be.",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "nach",
                  "lemma": "nach",
                  "pos": "preposition",
                  "meaning": "after / to"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l16",
              "original": "Drum lächle der Zufall euch gnädig und hold,",
              "literal": "Therefore smile (optative) the chance / fortune you merciful / gracious and lovely,",
              "tokens": [
                {
                  "word": "Drum",
                  "lemma": "darum",
                  "pos": "adverb",
                  "meaning": "therefore"
                },
                {
                  "word": "lächle",
                  "lemma": "lächle",
                  "pos": "verb",
                  "meaning": "smile (optative)"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Zufall",
                  "lemma": "zufall",
                  "pos": "noun",
                  "meaning": "chance / fortune"
                },
                {
                  "word": "euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l17",
              "original": "und segne und lenk' euer Streben;",
              "literal": "and bless (optative) and lenk' your striving / endeavor;",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "segne",
                  "lemma": "segne",
                  "pos": "verb",
                  "meaning": "bless (optative)"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "euer",
                  "lemma": "euer",
                  "pos": "verb",
                  "meaning": "your"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l18",
              "original": "das Liebchen im Arme, im Beutel das Gold,",
              "literal": "the sweetheart / darling in-the arms, in-the Beutel the gold,",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Liebchen",
                  "lemma": "liebchen",
                  "pos": "noun",
                  "meaning": "sweetheart / darling"
                },
                {
                  "word": "im",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in-the"
                },
                {
                  "word": "Arme",
                  "lemma": "Arm",
                  "pos": "noun",
                  "meaning": "arms"
                },
                {
                  "word": "im",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in-the"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l19",
              "original": "so mögt ihr viel Jahre durchleben.",
              "literal": "so you may live through many years.",
              "tokens": [
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "viel",
                  "lemma": "viel",
                  "pos": "adverb",
                  "meaning": "much / a lot"
                },
                {
                  "word": "Jahre",
                  "lemma": "jahr",
                  "pos": "noun",
                  "meaning": "years"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l20",
              "original": "Das Glück dient wie ein Knecht für Sold,",
              "literal": "Fortune serves like a servant for pay,",
              "tokens": [
                {
                  "word": "Knecht",
                  "lemma": "Knecht",
                  "pos": "noun",
                  "meaning": "hired hand / servant"
                },
                {
                  "word": "für Sold",
                  "lemma": "Sold",
                  "pos": "noun",
                  "meaning": "for soldier's pay / wages"
                }
              ]
            },
            {
              "id": "a1_s4_c1_l21",
              "original": "es ist ein mächtig Ding, das Gold.",
              "literal": "it is a mighty thing, the gold.",
              "tokens": [
                {
                  "word": "mächtig Ding",
                  "lemma": "Ding",
                  "pos": "noun",
                  "meaning": "mighty thing (poetic uninflected adjective)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c2",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c2_l1",
              "original": "Ihr könnt das leicht sagen, Meister Rocco, aber ich,",
              "literal": "You can the light to say, master Rocco, but I,",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "könnt",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can (pl.)"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "leicht",
                  "lemma": "leicht",
                  "pos": "adjective",
                  "meaning": "light / easy"
                },
                {
                  "word": "sagen",
                  "lemma": "sagen",
                  "pos": "verb",
                  "meaning": "to say"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l2",
              "original": "ich behaupte, daß die Vereinigung zweier gleichgestimmter Herzen",
              "literal": "I maintain that the union of two like-minded hearts",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l3",
              "original": "die Quelle des wahren ehelichen Glücks ist.",
              "literal": "is the source of true marital happiness.",
              "tokens": [
                {
                  "word": "Herzen",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart (dat.) / hearts"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "des",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "of-the (gen.)"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l4",
              "original": "Glückes ist. O, dieses Glück muß der größte Schatz",
              "literal": "of happiness. Oh, this happiness must be the greatest treasure",
              "tokens": [
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "dieses",
                  "lemma": "dieser",
                  "pos": "verb",
                  "meaning": "this (neut.)"
                },
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / happiness"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l5",
              "original": "auf Erden sein! Freilich gibt es noch etwas, das mir",
              "literal": "on Erden to be! admittedly / to be sure gives it still something, the to me",
              "tokens": [
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                },
                {
                  "word": "Freilich",
                  "lemma": "freilich",
                  "pos": "noun",
                  "meaning": "admittedly / to be sure"
                },
                {
                  "word": "gibt",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gives"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l6",
              "original": "nicht minder kostbar wäre, aber mit Kummer sehe",
              "literal": "not less precious were / would be, but with sorrow / grief see",
              "tokens": [
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "minder",
                  "lemma": "minder",
                  "pos": "verb",
                  "meaning": "less"
                },
                {
                  "word": "kostbar",
                  "lemma": "kostbar",
                  "pos": "verb",
                  "meaning": "precious"
                },
                {
                  "word": "wäre",
                  "lemma": "wäre",
                  "pos": "verb",
                  "meaning": "were / would be"
                },
                {
                  "word": "aber",
                  "lemma": "aber",
                  "pos": "conjunction",
                  "meaning": "but / however"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l7",
              "original": "ich, daß ich es trotz aller meiner Bemühungen nicht",
              "literal": "I, that I it despite of-all of my efforts not",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "trotz",
                  "lemma": "trotz",
                  "pos": "preposition",
                  "meaning": "despite / in-spite-of"
                }
              ]
            },
            {
              "id": "a1_s4_c2_l8",
              "original": "erhalten werde.",
              "literal": "erhalten become.",
              "tokens": [
                {
                  "word": "werde",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become / will"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c3",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c3_l1",
              "original": "Und was wäre denn das?",
              "literal": "And what were / would be for the?",
              "tokens": [
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "wäre",
                  "lemma": "wäre",
                  "pos": "verb",
                  "meaning": "were / would be"
                },
                {
                  "word": "denn",
                  "lemma": "denn",
                  "pos": "conjunction",
                  "meaning": "for / because / then"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c4",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c4_l1",
              "original": "Euer Vertrauen! Verzeiht mir diesen kleinen Vorwurf,",
              "literal": "Your Vertrauen! Verzeiht to me this kleinen Vorwurf,",
              "tokens": [
                {
                  "word": "Euer",
                  "lemma": "euer",
                  "pos": "noun",
                  "meaning": "your"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "diesen",
                  "lemma": "dieser",
                  "pos": "verb",
                  "meaning": "this (acc. / plur. dat.)"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l2",
              "original": "aber oft sehe ich Euch aus den unterirdischen",
              "literal": "but often see I you out of the subterranean",
              "tokens": [
                {
                  "word": "aber",
                  "lemma": "aber",
                  "pos": "conjunction",
                  "meaning": "but / however"
                },
                {
                  "word": "oft",
                  "lemma": "oft",
                  "pos": "adverb",
                  "meaning": "often"
                },
                {
                  "word": "sehe",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "Euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l3",
              "original": "Gewölben dieses Schloßes ganz außer Atem und",
              "literal": "vaults of this castle quite out of breath and",
              "tokens": [
                {
                  "word": "dieses",
                  "lemma": "dieser",
                  "pos": "verb",
                  "meaning": "this (neut.)"
                },
                {
                  "word": "ganz",
                  "lemma": "ganz",
                  "pos": "adverb",
                  "meaning": "quite / entirely / whole"
                },
                {
                  "word": "außer",
                  "lemma": "außer",
                  "pos": "preposition",
                  "meaning": "except / outside"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l4",
              "original": "ermattet zurückkommen. Warum erlaubt Ihr mir",
              "literal": "exhausted. Why do you not allow me",
              "tokens": [
                {
                  "word": "Warum",
                  "lemma": "warum",
                  "pos": "adverb",
                  "meaning": "why"
                },
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l5",
              "original": "nicht, Euch dahin zu begleiten? Es wäre mir so lieb,",
              "literal": "not, you dahin too begleiten? it were / would be to me so lieb,",
              "tokens": [
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "Euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l6",
              "original": "wenn ich Euch bei Eurer Arbeit helfen und Eure",
              "literal": "if I you at Eurer work to help and Eure",
              "tokens": [
                {
                  "word": "wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "Euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "bei",
                  "lemma": "bei",
                  "pos": "preposition",
                  "meaning": "at / near / with"
                }
              ]
            },
            {
              "id": "a1_s4_c4_l7",
              "original": "Beschwerden teilen könnte.",
              "literal": "Tribulations teilen could.",
              "tokens": [
                {
                  "word": "Beschwerden",
                  "lemma": "beschwerden",
                  "pos": "noun",
                  "meaning": "tribulations"
                },
                {
                  "word": "könnte",
                  "lemma": "könnte",
                  "pos": "verb",
                  "meaning": "could"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c5",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c5_l1",
              "original": "Du weißt doch, daß ich den strengsten Befehl habe,",
              "literal": "You knowest yet, that I the strengsten order have,",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "weißt",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "knowest"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            },
            {
              "id": "a1_s4_c5_l2",
              "original": "niemanden, wer es auch sein möge, zu den",
              "literal": "no one, whoever it may be, to the",
              "tokens": [
                {
                  "word": "wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "who"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            },
            {
              "id": "a1_s4_c5_l3",
              "original": "Staatsgefangenen zu lassen. Auch gibt es ein",
              "literal": "Staatsgefangenen too to let. also gives it a",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "lassen",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "to let / leave"
                },
                {
                  "word": "Auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "gibt",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gives"
                }
              ]
            },
            {
              "id": "a1_s4_c5_l4",
              "original": "Gewölbe, in das ich dich wohl nie werde führen dürfen,",
              "literal": "vault into which I shall probably never be allowed to lead you,",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (acc.)"
                }
              ]
            },
            {
              "id": "a1_s4_c5_l5",
              "original": "obschon ich mich ganz auf dich verlassen kann.",
              "literal": "although I can rely on you completely.",
              "tokens": [
                {
                  "word": "obschon",
                  "lemma": "obschon",
                  "pos": "conjunction",
                  "meaning": "although"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "ganz",
                  "lemma": "ganz",
                  "pos": "adverb",
                  "meaning": "quite / entirely / whole"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c6",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c6_l1",
              "original": "Vermutlich, wo der Gefangene sitzt, von dem du schon einigemale gesprochen hast.",
              "literal": "Presumably where the prisoner sits of whom you have already spoken several times.",
              "tokens": [
                {
                  "word": "wo",
                  "lemma": "wo",
                  "pos": "adverb",
                  "meaning": "where"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "sitzt",
                  "lemma": "sitzen",
                  "pos": "verb",
                  "meaning": "sits"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c7",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c7_l1",
              "original": "Du hast's erraten, Marzelline.",
              "literal": "You have guessed it, Marzelline.",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c8",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c8_l1",
              "original": "Ich glaube, es ist schon lange her, daß er gefangen ist?",
              "literal": "I believe, it is already long hither, that he captured / prisoner is?",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "glaube",
                  "lemma": "glauben",
                  "pos": "verb",
                  "meaning": "believe"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c9",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c9_l1",
              "original": "Es ist schon über zwei Jahre.",
              "literal": "It is already over two years.",
              "tokens": [
                {
                  "word": "Es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "über",
                  "lemma": "über",
                  "pos": "preposition",
                  "meaning": "over / about"
                },
                {
                  "word": "zwei",
                  "lemma": "zwei",
                  "pos": "verb",
                  "meaning": "two"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c10",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c10_l1",
              "original": "Zwei Jahre, sagt Ihr? Er muß ein großer Verbrecher",
              "literal": "Two years, says you? he must a great Verbrecher",
              "tokens": [
                {
                  "word": "Zwei",
                  "lemma": "zwei",
                  "pos": "noun",
                  "meaning": "two"
                },
                {
                  "word": "Jahre",
                  "lemma": "jahr",
                  "pos": "noun",
                  "meaning": "years"
                },
                {
                  "word": "sagt",
                  "lemma": "sagen",
                  "pos": "verb",
                  "meaning": "says"
                },
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            },
            {
              "id": "a1_s4_c10_l2",
              "original": "sein!",
              "literal": "to be!",
              "tokens": [
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c11",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c11_l1",
              "original": "Oder er muß große Feinde haben, das kommt ungefähr auf eins heraus.",
              "literal": "Or he must have great enemies; that amounts to roughly the same thing.",
              "tokens": [
                {
                  "word": "Oder",
                  "lemma": "oder",
                  "pos": "conjunction",
                  "meaning": "or"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                }
              ]
            },
            {
              "id": "a1_s4_c11_l2",
              "original": "Nun, er wird mich nicht lange mehr peinigen; er kann nicht mehr lange leben.",
              "literal": "Well, he will not torment me much longer; he cannot live much longer.",
              "tokens": [
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                }
              ]
            },
            {
              "id": "a1_s4_c11_l4",
              "original": "dauern.",
              "literal": "dauern.",
              "tokens": []
            }
          ]
        },
        {
          "id": "a1_s4_c12",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c12_l1",
              "original": "Großer Gott!",
              "literal": "Great God!",
              "tokens": [
                {
                  "word": "Großer",
                  "lemma": "groß",
                  "pos": "adjective",
                  "meaning": "great"
                },
                {
                  "word": "Gott",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c13",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c13_l1",
              "original": "Lieber Himmel! Wie hat er denn eine so schwere",
              "literal": "Rather heaven! how has he for a so grievous / heavy",
              "tokens": [
                {
                  "word": "Lieber",
                  "lemma": "lieb",
                  "pos": "adverb",
                  "meaning": "rather / dearer"
                },
                {
                  "word": "Himmel",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven / sky"
                },
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "hat",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "has"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            },
            {
              "id": "a1_s4_c13_l2",
              "original": "Strafe verdient?",
              "literal": "Strafe verdient?",
              "tokens": []
            }
          ]
        },
        {
          "id": "a1_s4_c14",
          "speaker": "Rocco",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c14_l1",
              "original": "Seit einem Monat schon muß ich auf Pizarros Befehl",
              "literal": "Since to-a Monat already must I on Pizarros order",
              "tokens": [
                {
                  "word": "Seit",
                  "lemma": "seit",
                  "pos": "noun",
                  "meaning": "since"
                },
                {
                  "word": "einem",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "to-a (dat.)"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                }
              ]
            },
            {
              "id": "a1_s4_c14_l2",
              "original": "seine Portion kleiner machen. Jetzt hat er binnen",
              "literal": "his Portion small to make. now has he binnen",
              "tokens": [
                {
                  "word": "seine",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his / its"
                },
                {
                  "word": "kleiner",
                  "lemma": "klein",
                  "pos": "adjective",
                  "meaning": "small"
                },
                {
                  "word": "machen",
                  "lemma": "machen",
                  "pos": "verb",
                  "meaning": "to make / do"
                },
                {
                  "word": "Jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now"
                }
              ]
            },
            {
              "id": "a1_s4_c14_l3",
              "original": "vierundzwanzig Stunden nicht mehr als zwei Unzen",
              "literal": "vierundzwanzig Stunden not more as two Unzen",
              "tokens": [
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "mehr",
                  "lemma": "mehr",
                  "pos": "adverb",
                  "meaning": "more"
                },
                {
                  "word": "als",
                  "lemma": "als",
                  "pos": "conjunction",
                  "meaning": "as / than / when"
                }
              ]
            },
            {
              "id": "a1_s4_c14_l4",
              "original": "schwarzes Brot und eine halbe Maß Wasser; kein",
              "literal": "schwarzes bread and a halbe measure water; no",
              "tokens": [
                {
                  "word": "Brot",
                  "lemma": "Brot",
                  "pos": "noun",
                  "meaning": "bread"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "eine",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an (fem.)"
                }
              ]
            },
            {
              "id": "a1_s4_c14_l5",
              "original": "Licht, kein Stroh, nichts, nichts!",
              "literal": "Light, no Stroh, nothing, nothing!",
              "tokens": [
                {
                  "word": "Licht",
                  "lemma": "Licht",
                  "pos": "noun",
                  "meaning": "light"
                },
                {
                  "word": "kein",
                  "lemma": "kein",
                  "pos": "verb",
                  "meaning": "no / none"
                },
                {
                  "word": "nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                },
                {
                  "word": "nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c15",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c15_l1",
              "original": "O lieber Vater, führe Fidelio ja nicht zu ihm! Diesen",
              "literal": "O rather father, lead Fidelio yes not too to him! this",
              "tokens": [
                {
                  "word": "lieber",
                  "lemma": "lieb",
                  "pos": "adverb",
                  "meaning": "rather / dearer"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                },
                {
                  "word": "führe",
                  "lemma": "führen",
                  "pos": "verb",
                  "meaning": "lead"
                }
              ]
            },
            {
              "id": "a1_s4_c15_l2",
              "original": "Anblick könnte er nicht ertragen!",
              "literal": "Anblick could he not ertragen!",
              "tokens": [
                {
                  "word": "könnte",
                  "lemma": "könnte",
                  "pos": "verb",
                  "meaning": "could"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s4_c16",
          "speaker": "Leonore",
          "pieceTitle": "Nr.4: Arie",
          "lines": [
            {
              "id": "a1_s4_c16_l1",
              "original": "Warum denn nicht? Ich habe Mut und Kraft!",
              "literal": "Why then not? I have courage and strength!",
              "tokens": [
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                },
                {
                  "word": "Kraft",
                  "lemma": "Kraft",
                  "pos": "noun",
                  "meaning": "strength / power"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 5,
      "title": "Gut, Söhnchen, gut (Terzett)",
      "titleTranslation": "Good, little son, good (Trio)",
      "originalDescription": "Rocco willigt in die Heirat ein und verspricht, Fidelio in die geheimen Staatskerker mitzunehmen.",
      "description": "Rocco agrees to the match and promises to take Fidelio along into the secret subterranean dungeons.",
      "cues": [
        {
          "id": "a1_s5_c1",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c1_l1",
              "original": "Gut, Söhnchen, gut,",
              "literal": "Good, little-son, good,",
              "tokens": [
                {
                  "word": "Söhnchen",
                  "lemma": "Sohn",
                  "pos": "noun",
                  "meaning": "little son (affectionate diminutive)"
                }
              ]
            },
            {
              "id": "a1_s5_c1_l2",
              "original": "hab' immer Mut,",
              "literal": "have always courage,",
              "tokens": [
                {
                  "word": "hab'",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have (imperative singular)"
                }
              ]
            },
            {
              "id": "a1_s5_c1_l3",
              "original": "dann wird's dir auch gelingen;",
              "literal": "then will-it to you also succeed;",
              "tokens": [
                {
                  "word": "gelingen",
                  "lemma": "gelingen",
                  "pos": "verb",
                  "meaning": "succeed (takes dative object 'dir')"
                }
              ]
            },
            {
              "id": "a1_s5_c1_l4",
              "original": "das Herz wird hart",
              "literal": "the heart becomes hard",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "hart",
                  "lemma": "hart",
                  "pos": "adjective",
                  "meaning": "hard / severe"
                }
              ]
            },
            {
              "id": "a1_s5_c1_l5",
              "original": "durch Gegenwart",
              "literal": "through Gegenwart",
              "tokens": [
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through"
                }
              ]
            },
            {
              "id": "a1_s5_c1_l6",
              "original": "bei fürchterlichen Dingen.",
              "literal": "at fearful things.",
              "tokens": [
                {
                  "word": "bei",
                  "lemma": "bei",
                  "pos": "preposition",
                  "meaning": "at / near / with"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c2",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c2_l1",
              "original": "Ich habe Mut!",
              "literal": "I have courage!",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "habe",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                }
              ]
            },
            {
              "id": "a1_s5_c2_l2",
              "original": "Mit kaltem Blut",
              "literal": "With kaltem blood",
              "tokens": [
                {
                  "word": "Mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "Blut",
                  "lemma": "Blut",
                  "pos": "noun",
                  "meaning": "blood"
                }
              ]
            },
            {
              "id": "a1_s5_c2_l3",
              "original": "will ich hinab mich wagen;",
              "literal": "want I downward me to dare;",
              "tokens": [
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / will"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "hinab",
                  "lemma": "hinab",
                  "pos": "adverb",
                  "meaning": "downward"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "wagen",
                  "lemma": "wagen",
                  "pos": "verb",
                  "meaning": "to dare / venture / wagon"
                }
              ]
            },
            {
              "id": "a1_s5_c2_l4",
              "original": "für hohen Lohn",
              "literal": "for high reward",
              "tokens": [
                {
                  "word": "für",
                  "lemma": "für",
                  "pos": "preposition",
                  "meaning": "for"
                },
                {
                  "word": "hohen",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high"
                },
                {
                  "word": "Lohn",
                  "lemma": "Lohn",
                  "pos": "noun",
                  "meaning": "reward / wages"
                }
              ]
            },
            {
              "id": "a1_s5_c2_l5",
              "original": "kann Liebe schon",
              "literal": "can love already",
              "tokens": [
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                }
              ]
            },
            {
              "id": "a1_s5_c2_l6",
              "original": "auch hohe Leiden tragen.",
              "literal": "also high sufferings to carry.",
              "tokens": [
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "hohe",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high"
                },
                {
                  "word": "Leiden",
                  "lemma": "Leiden",
                  "pos": "noun",
                  "meaning": "sufferings / afflictions"
                },
                {
                  "word": "tragen",
                  "lemma": "tragen",
                  "pos": "verb",
                  "meaning": "to carry / bear"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c3",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c3_l1",
              "original": "Dein gutes Herz",
              "literal": "Your good heart",
              "tokens": [
                {
                  "word": "Dein",
                  "lemma": "dein",
                  "pos": "noun",
                  "meaning": "your"
                },
                {
                  "word": "gutes",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good (neut.)"
                },
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                }
              ]
            },
            {
              "id": "a1_s5_c3_l2",
              "original": "wird manchen Schmerz",
              "literal": "becomes manchen pain",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "Schmerz",
                  "lemma": "Schmerz",
                  "pos": "noun",
                  "meaning": "pain / sorrow"
                }
              ]
            },
            {
              "id": "a1_s5_c3_l3",
              "original": "in diesen Grüften leiden;",
              "literal": "in this vaults to suffer;",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "diesen",
                  "lemma": "dieser",
                  "pos": "verb",
                  "meaning": "this (acc. / plur. dat.)"
                },
                {
                  "word": "Grüften",
                  "lemma": "Gruft",
                  "pos": "noun",
                  "meaning": "vaults (dat.)"
                },
                {
                  "word": "leiden",
                  "lemma": "leiden",
                  "pos": "verb",
                  "meaning": "to suffer"
                }
              ]
            },
            {
              "id": "a1_s5_c3_l4",
              "original": "dann kehrt zurück",
              "literal": "then return",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                }
              ]
            },
            {
              "id": "a1_s5_c3_l5",
              "original": "der Liebe Glück",
              "literal": "the love fortune",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / happiness"
                }
              ]
            },
            {
              "id": "a1_s5_c3_l6",
              "original": "und unnennbare Freuden.",
              "literal": "and unnennbare joys.",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "Freuden",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joys"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c4",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c4_l1",
              "original": "Du wirst dein Glück ganz sicher bauen.",
              "literal": "You become your fortune quite safe bauen.",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "wirst",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become / will"
                },
                {
                  "word": "dein",
                  "lemma": "dein",
                  "pos": "verb",
                  "meaning": "your"
                },
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / happiness"
                },
                {
                  "word": "ganz",
                  "lemma": "ganz",
                  "pos": "adverb",
                  "meaning": "quite / entirely / whole"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c5",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c5_l1",
              "original": "Ich hab' auf Gott und Recht Vertrauen.",
              "literal": "I have' on God and right / quite Vertrauen.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "hab",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "Gott",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c6",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c6_l1",
              "original": "Du darfst mir auch in's Auge schauen:",
              "literal": "You may to me also in's eye schauen:",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "darfst",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                }
              ]
            },
            {
              "id": "a1_s5_c6_l2",
              "original": "der Liebe Macht ist auch nicht klein.",
              "literal": "the love makes is also not small.",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "Macht",
                  "lemma": "machen",
                  "pos": "verb",
                  "meaning": "makes / does"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                }
              ]
            },
            {
              "id": "a1_s5_c6_l3",
              "original": "Ja, ja, wir werden glücklich sein.",
              "literal": "Yes, yes, we to become happy to be.",
              "tokens": [
                {
                  "word": "Ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c7",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c7_l1",
              "original": "Ja, ja, ich kann noch glücklich sein.",
              "literal": "Yes, yes, I can still happy to be.",
              "tokens": [
                {
                  "word": "Ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c8",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c8_l1",
              "original": "Ja, ja, ihr werdet glücklich sein.",
              "literal": "Yes, yes, you werdet happy to be.",
              "tokens": [
                {
                  "word": "Ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "glücklich",
                  "lemma": "glücklich",
                  "pos": "adjective",
                  "meaning": "happy / fortunate"
                }
              ]
            },
            {
              "id": "a1_s5_c8_l2",
              "original": "Der Gouverneur ...",
              "literal": "The governor ...",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gouverneur",
                  "lemma": "Gouverneur",
                  "pos": "noun",
                  "meaning": "governor"
                }
              ]
            },
            {
              "id": "a1_s5_c8_l3",
              "original": "der Gouverneur soll heut' erlauben,",
              "literal": "the governor shall heut' erlauben,",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gouverneur",
                  "lemma": "Gouverneur",
                  "pos": "noun",
                  "meaning": "governor"
                },
                {
                  "word": "soll",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shall / is to"
                }
              ]
            },
            {
              "id": "a1_s5_c8_l4",
              "original": "daß du mit mir die Arbeit teilst.",
              "literal": "that you with to me the work teilst.",
              "tokens": [
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c9",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c9_l1",
              "original": "Du wirst mir alle Ruhe rauben,",
              "literal": "You will from me all peace rob,",
              "tokens": [
                {
                  "word": "wirst... rauben",
                  "lemma": "rauben",
                  "pos": "verb",
                  "meaning": "will rob"
                }
              ]
            },
            {
              "id": "a1_s5_c9_l2",
              "original": "wenn du auch nur bis morgen weilst.",
              "literal": "if you even only until tomorrow tarriest.",
              "tokens": [
                {
                  "word": "weilst",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "tarry"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c10",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c10_l1",
              "original": "Ja, guter Vater, bitt' ihn heute,",
              "literal": "Yes, good father, entreat him today,",
              "tokens": [
                {
                  "word": "bitt'",
                  "lemma": "bitten",
                  "pos": "verb",
                  "meaning": "ask / entreat (imperative)"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (referring to Governor Pizarro)"
                }
              ]
            },
            {
              "id": "a1_s5_c10_l2",
              "original": "in kurzem sind wir dann ein Paar.",
              "literal": "in short are we then a pair.",
              "tokens": [
                {
                  "word": "in kurzem",
                  "lemma": "kurz",
                  "pos": "verb",
                  "meaning": "shortly / soon"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c11",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c11_l1",
              "original": "Ich bin ja bald des Grabes Beute,",
              "literal": "I am indeed soon of the grave prey,",
              "tokens": [
                {
                  "word": "des Grabes Beute",
                  "lemma": "Beute",
                  "pos": "noun",
                  "meaning": "prey of the grave"
                }
              ]
            },
            {
              "id": "a1_s5_c11_l2",
              "original": "ich brauche Hülf', es ist ja wahr.",
              "literal": "I need help, it is indeed true.",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c12",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s5_c12_l1",
              "original": "Wie lang' bin ich des Kummers Beute!",
              "literal": "How long' am I of the Kummers Beute!",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "lang",
                  "lemma": "lang",
                  "pos": "adjective",
                  "meaning": "long"
                },
                {
                  "word": "bin",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "am"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "des",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "of-the (gen.)"
                }
              ]
            },
            {
              "id": "a1_s5_c12_l2",
              "original": "Du, Hoffnung, reichst mir Labung dar.",
              "literal": "You, hope, reichst to me lab-ing dar.",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c13",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c13_l1",
              "original": "Ach, lieber Vater, was fällt euch ein?",
              "literal": "Ah, rather father, what falls you a?",
              "tokens": [
                {
                  "word": "Ach",
                  "lemma": "ach",
                  "pos": "interjection",
                  "meaning": "ah / alas"
                },
                {
                  "word": "lieber",
                  "lemma": "lieb",
                  "pos": "adverb",
                  "meaning": "rather / dearer"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "fällt",
                  "lemma": "fallen",
                  "pos": "verb",
                  "meaning": "falls"
                }
              ]
            },
            {
              "id": "a1_s5_c13_l2",
              "original": "Lang Freund und Rater müßt ihr uns sein.",
              "literal": "Long must you be our friend and counselor.",
              "tokens": [
                {
                  "word": "Lang",
                  "lemma": "lang",
                  "pos": "adjective",
                  "meaning": "long"
                },
                {
                  "word": "Freund",
                  "lemma": "Freund",
                  "pos": "noun",
                  "meaning": "friend"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c14",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c14_l1",
              "original": "Nur auf der Hut, dann geht es gut,",
              "literal": "Only on the guard / care, then goes it good,",
              "tokens": [
                {
                  "word": "Nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Hut",
                  "lemma": "hut",
                  "pos": "noun",
                  "meaning": "guard / care"
                },
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                }
              ]
            },
            {
              "id": "a1_s5_c14_l2",
              "original": "gestillt wird euer Sehnen.",
              "literal": "gestillt becomes your Sehnen.",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "euer",
                  "lemma": "euer",
                  "pos": "verb",
                  "meaning": "your"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c15",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c15_l1",
              "original": "O habe Mut, o welche Glut!",
              "literal": "Oh, have courage, oh what ardor!",
              "tokens": [
                {
                  "word": "habe",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                },
                {
                  "word": "welche",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "which / what"
                }
              ]
            },
            {
              "id": "a1_s5_c15_l2",
              "original": "O welch ein tiefes Sehnen!",
              "literal": "O what a tiefes Sehnen!",
              "tokens": [
                {
                  "word": "welch",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "what / which"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c16",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c16_l1",
              "original": "Ihr seid so gut, ihr macht mir Mut,",
              "literal": "You are so good, you makes to me courage,",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "seid",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                }
              ]
            },
            {
              "id": "a1_s5_c16_l2",
              "original": "gestillt wird bald mein Sehnen!",
              "literal": "gestillt becomes soon my Sehnen!",
              "tokens": [
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "bald",
                  "lemma": "bald",
                  "pos": "adverb",
                  "meaning": "soon"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c17",
          "speaker": "Rocco",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c17_l1",
              "original": "Gebt euch die Hand und schließt das Band",
              "literal": "Gebt you the hand and closes the bond",
              "tokens": [
                {
                  "word": "euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Hand",
                  "lemma": "Hand",
                  "pos": "noun",
                  "meaning": "hand"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s5_c17_l2",
              "original": "in süßen Freudentränen.",
              "literal": "in sweet tears of joy.",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "süßen",
                  "lemma": "süß",
                  "pos": "adjective",
                  "meaning": "sweet (acc./dat.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c18",
          "speaker": "Leonore",
          "pieceTitle": "Nr.5: Terzett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s5_c18_l1",
              "original": "Ich gab die Hand zum süßen Band,",
              "literal": "I gave the hand to the sweet bond,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "gab",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gave"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Hand",
                  "lemma": "Hand",
                  "pos": "noun",
                  "meaning": "hand"
                },
                {
                  "word": "zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (masc./neut.)"
                }
              ]
            },
            {
              "id": "a1_s5_c18_l2",
              "original": "es kostet bitt're Tränen.",
              "literal": "it kostet bitt're tears.",
              "tokens": [
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "Tränen",
                  "lemma": "Träne",
                  "pos": "noun",
                  "meaning": "tears"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s5_c19",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.5: Terzett",
          "lines": [
            {
              "id": "a1_s5_c19_l1",
              "original": "Ein festes Band mit Herz und Hand!",
              "literal": "A firm bond with heart and hand!",
              "tokens": [
                {
                  "word": "festes Band",
                  "lemma": "Band",
                  "pos": "noun",
                  "meaning": "firm bond / tie (neuter)"
                },
                {
                  "word": "mit Herz und Hand",
                  "lemma": "Herz",
                  "pos": "verb",
                  "meaning": "with heart and hand (sincerely and loyally)"
                }
              ]
            },
            {
              "id": "a1_s5_c19_l2",
              "original": "O süße, süße Tränen! usw.",
              "literal": "O sweet, sweet tears! etc.",
              "tokens": [
                {
                  "word": "Tränen",
                  "lemma": "Träne",
                  "pos": "noun",
                  "meaning": "tears"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 6,
      "title": "Marsch der Wache",
      "titleTranslation": "March of the Guards",
      "originalDescription": "Einzug der Wache und Gouverneur Don Pizarros.",
      "description": "Entrance of the garrison guard and Governor Don Pizarro.",
      "cues": [
        {
          "id": "a1_s6_c1",
          "speaker": "Stage Direction",
          "pieceTitle": "Nr. 6: Marsch",
          "stageDirection": "Während des zuvor begonnenen Marsches wird das Haupttor durch Schildwachen von außen geöffnet. Offiziere ziehen mit einem Detachement ein, dann kommt Pizarro, das Tor wird geschlossen.",
          "stageDirectionTranslation": "During the march begun previously, sentries open the main gate from outside. Officers march in with a detachment, followed by Pizarro; the gate is closed.",
          "lines": []
        },
        {
          "id": "a1_s6_c2",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr. 6: Marsch",
          "lines": [
            {
              "id": "a1_s6_c2_l1",
              "original": "Wo sind die Depeschen?",
              "literal": "Where are the dispatches?",
              "tokens": [
                {
                  "word": "Depeschen",
                  "lemma": "Depesche",
                  "pos": "noun",
                  "meaning": "dispatches / urgent letters"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s6_c3",
          "speaker": "Rocco",
          "pieceTitle": "Nr. 6: Marsch",
          "lines": [
            {
              "id": "a1_s6_c3_l1",
              "original": "Hier.",
              "literal": "Here.",
              "tokens": [
                {
                  "word": "Hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s6_c4",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr. 6: Marsch",
          "lines": [
            {
              "id": "a1_s6_c4_l1",
              "original": "Was sehe ich? Mich dünkt, ich kenne diese Schrift.",
              "literal": "What do I see? Methinks I recognize this handwriting.",
              "tokens": [
                {
                  "word": "Was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "sehe",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "Mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l2",
              "original": "Laß sehen!",
              "literal": "Let to see!",
              "tokens": [
                {
                  "word": "Laß",
                  "lemma": "laß",
                  "pos": "noun",
                  "meaning": "let"
                },
                {
                  "word": "sehen",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "to see"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l3",
              "original": "„Ich gebe Ihnen Nachricht, daß der Minister in",
              "literal": "“I give you notice that the minister has",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "gebe",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "give"
                },
                {
                  "word": "Ihnen",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "to-them (dat.)"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l4",
              "original": "Erfahrung gebracht hat, daß die Staatsgefängnisse,",
              "literal": "learned that the state prisons",
              "tokens": [
                {
                  "word": "gebracht",
                  "lemma": "bringen",
                  "pos": "verb",
                  "meaning": "brought"
                },
                {
                  "word": "hat",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "has"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l5",
              "original": "denen Sie vorstehen, mehrere Opfer willkürlicher",
              "literal": "over which you preside contain several victims of arbitrary",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l6",
              "original": "Gewalt enthalten. Er reist morgen ab, um Sie mit",
              "literal": "Gewalt enthalten. he reist tomorrow ab, around she with",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "morgen",
                  "lemma": "morgen",
                  "pos": "adverb",
                  "meaning": "tomorrow"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l7",
              "original": "einer Untersuchung zu überraschen. Seien Sie auf",
              "literal": "to surprise you with an inspection. Be on",
              "tokens": [
                {
                  "word": "einer",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "of-a / to-a"
                },
                {
                  "word": "Untersuchung",
                  "lemma": "untersuchung",
                  "pos": "noun",
                  "meaning": "investigation"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "Seien",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I)"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l8",
              "original": "Ihrer Hut und suchen Sie sich sicherzustellen.\"",
              "literal": "Ihrer guard / care and suchen she itself sicherzustellen.\"",
              "tokens": [
                {
                  "word": "Hut",
                  "lemma": "hut",
                  "pos": "noun",
                  "meaning": "guard / care"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l9",
              "original": "Gott, wenn er entdeckte, daß ich diesen Florestan in",
              "literal": "God, if he discovered that I keep this Florestan in",
              "tokens": [
                {
                  "word": "Gott",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God"
                },
                {
                  "word": "wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l10",
              "original": "Ketten liegen habe, den er längst tot glaubt, der so",
              "literal": "lie in chains whom he long believes dead; such a",
              "tokens": [
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                },
                {
                  "word": "liegen",
                  "lemma": "liegen",
                  "pos": "verb",
                  "meaning": "to lie"
                },
                {
                  "word": "habe",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l11",
              "original": "oft meine Rache reizte! Doch es gibt ein Mittel! Eine",
              "literal": "often my vengeance provoked / instigated! yet it gives a Mittel! a",
              "tokens": [
                {
                  "word": "oft",
                  "lemma": "oft",
                  "pos": "adverb",
                  "meaning": "often"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                },
                {
                  "word": "Rache",
                  "lemma": "Rache",
                  "pos": "noun",
                  "meaning": "vengeance / revenge"
                },
                {
                  "word": "reizte",
                  "lemma": "reizte",
                  "pos": "verb",
                  "meaning": "provoked / instigated"
                },
                {
                  "word": "Doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                }
              ]
            },
            {
              "id": "a1_s6_c4_l12",
              "original": "kühne Tat kann alle Besorgnisse zerstreuen!",
              "literal": "bold deed can dispel all anxieties!",
              "tokens": [
                {
                  "word": "Tat",
                  "lemma": "Tat",
                  "pos": "noun",
                  "meaning": "deed / act"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "alle",
                  "lemma": "all",
                  "pos": "verb",
                  "meaning": "all"
                },
                {
                  "word": "Besorgnisse",
                  "lemma": "besorgnisse",
                  "pos": "noun",
                  "meaning": "apprehensions / fears"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 7,
      "title": "Ha! Welch’ ein Augenblick! (Arie mit Chor)",
      "titleTranslation": "Ha! What a moment! (Aria with Chorus)",
      "originalDescription": "Pizarro erfährt von der drohenden Ministerinspektion und beschließt die Ermordung Florestans.",
      "description": "Pizarro learns of the impending ministerial inspection and resolves to murder Florestan immediately.",
      "cues": [
        {
          "id": "a1_s7_c1",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "lines": [
            {
              "id": "a1_s7_c1_l1",
              "original": "Ha! Welch' ein Augenblick!",
              "literal": "Ha! What a moment!",
              "tokens": [
                {
                  "word": "Welch' ein",
                  "lemma": "welch",
                  "pos": "noun",
                  "meaning": "what a"
                },
                {
                  "word": "Augenblick",
                  "lemma": "Augenblick",
                  "pos": "noun",
                  "meaning": "moment / instant"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l2",
              "original": "Die Rache werd' ich kühlen,",
              "literal": "I will quench my thirst for revenge,",
              "tokens": [
                {
                  "word": "Rache",
                  "lemma": "Rache",
                  "pos": "noun",
                  "meaning": "vengeance / revenge (feminine accusative)"
                },
                {
                  "word": "kühlen",
                  "lemma": "kühlen",
                  "pos": "verb",
                  "meaning": "cool / slake / satisfy"
                }
              ],
              "grammarNote": "'seine Rache kühlen' is a classical idiom meaning 'to slake / quench one's thirst for revenge' (literally: 'to cool one's vengeance')."
            },
            {
              "id": "a1_s7_c1_l3",
              "original": "dich rufet dein Geschick!",
              "literal": "you calls your destiny!",
              "tokens": [
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (accusative object)"
                },
                {
                  "word": "rufet",
                  "lemma": "rufen",
                  "pos": "verb",
                  "meaning": "calls"
                },
                {
                  "word": "dein Geschick",
                  "lemma": "Geschick",
                  "pos": "noun",
                  "meaning": "your destiny / fate (subject nominative)"
                }
              ],
              "grammarNote": "Putting 'dich' (you) first creates dramatic confrontation: 'You shall not be his sacrifice!'"
            },
            {
              "id": "a1_s7_c1_l4",
              "original": "In seinem Herzen wühlen,",
              "literal": "In his heart to-burrow,",
              "tokens": [
                {
                  "word": "wühlen",
                  "lemma": "wühlen",
                  "pos": "verb",
                  "meaning": "to burrow / dig / root"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l5",
              "original": "o Wonne, großes Glück!",
              "literal": "o bliss, great fortune!",
              "tokens": [
                {
                  "word": "Wonne",
                  "lemma": "Wonne",
                  "pos": "noun",
                  "meaning": "bliss / rapture"
                },
                {
                  "word": "großes",
                  "lemma": "groß",
                  "pos": "adjective",
                  "meaning": "great"
                },
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / happiness"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l6",
              "original": "Schon war ich nah' im Staube,",
              "literal": "Already was I near' in-the Staube,",
              "tokens": [
                {
                  "word": "Schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "nah",
                  "lemma": "nah",
                  "pos": "adverb",
                  "meaning": "near"
                },
                {
                  "word": "im",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in-the"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l7",
              "original": "dem lauten Spott zum Raube,",
              "literal": "to the lauten Spott to the Raube,",
              "tokens": [
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (masc./neut.)"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l8",
              "original": "dahin gestreckt zu sein.",
              "literal": "dahin gestreckt too to be.",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l9",
              "original": "Nun ist es mir geworden,",
              "literal": "Now is it to me become,",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "geworden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l10",
              "original": "den Mörder selbst zu morden.",
              "literal": "the murderer myself too to murder.",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Mörder",
                  "lemma": "mörder",
                  "pos": "noun",
                  "meaning": "murderer"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "morden",
                  "lemma": "morden",
                  "pos": "verb",
                  "meaning": "to murder / murder"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l11",
              "original": "In seiner letzten Stunde,",
              "literal": "In of-his letzten hour,",
              "tokens": [
                {
                  "word": "In",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "seiner",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "of-his"
                },
                {
                  "word": "Stunde",
                  "lemma": "Stunde",
                  "pos": "noun",
                  "meaning": "hour"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l12",
              "original": "den Stahl in seiner Wunde,",
              "literal": "the steel in of-his wound,",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Stahl",
                  "lemma": "Stahl",
                  "pos": "noun",
                  "meaning": "steel / sword"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "seiner",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "of-his"
                },
                {
                  "word": "Wunde",
                  "lemma": "wunde",
                  "pos": "noun",
                  "meaning": "wound"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l13",
              "original": "ihm noch ins Ohr zu schrei'n:",
              "literal": "to him still into the ear too schrei'n:",
              "tokens": [
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "ins",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "into-the"
                },
                {
                  "word": "Ohr",
                  "lemma": "Ohr",
                  "pos": "noun",
                  "meaning": "ear"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                }
              ]
            },
            {
              "id": "a1_s7_c1_l14",
              "original": "„Triumph! Der Sieg ist mein!\"",
              "literal": "„Triumph! the victory is my!\"",
              "tokens": [
                {
                  "word": "Triumph",
                  "lemma": "Triumph",
                  "pos": "noun",
                  "meaning": "triumph"
                },
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Sieg",
                  "lemma": "Sieg",
                  "pos": "noun",
                  "meaning": "victory"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s7_c2",
          "speaker": "The Guard",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "stageDirection": "halblaut unter sich",
          "stageDirectionTranslation": "half-aloud to themselves",
          "lines": [
            {
              "id": "a1_s7_c2_l1",
              "original": "Er spricht von Tod und Wunde!",
              "literal": "He speaks from death and wound!",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "spricht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speaks"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s7_c2_l2",
              "original": "Nun fort auf uns're Runde!",
              "literal": "Now away on uns're Runde!",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "fort",
                  "lemma": "fort",
                  "pos": "adverb",
                  "meaning": "away / onward"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                }
              ]
            },
            {
              "id": "a1_s7_c2_l3",
              "original": "Wie wichtig muß es sein!",
              "literal": "How wichtig must it to be!",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s7_c3",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "lines": [
            {
              "id": "a1_s7_c3_l1",
              "original": "Ha! Welch ein Augenblick!",
              "literal": "Ha! what a moment!",
              "tokens": [
                {
                  "word": "Welch",
                  "lemma": "welch",
                  "pos": "noun",
                  "meaning": "what / which"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Augenblick",
                  "lemma": "Augenblick",
                  "pos": "noun",
                  "meaning": "moment"
                }
              ]
            },
            {
              "id": "a1_s7_c3_l2",
              "original": "Die Rache werd' ich kühlen,",
              "literal": "The vengeance will I cool [slake],",
              "tokens": [
                {
                  "word": "Rache",
                  "lemma": "Rache",
                  "pos": "noun",
                  "meaning": "vengeance / revenge (feminine accusative)"
                },
                {
                  "word": "kühlen",
                  "lemma": "kühlen",
                  "pos": "verb",
                  "meaning": "cool / slake / satisfy"
                }
              ],
              "grammarNote": "Idiom 'seine Rache kühlen' (to satisfy/slake one's vengeance)."
            },
            {
              "id": "a1_s7_c3_l3",
              "original": "ha! Nun ist es mir geworden,",
              "literal": "ha! now is it to me become,",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                }
              ]
            },
            {
              "id": "a1_s7_c3_l4",
              "original": "den Mörder selbst zu morden!",
              "literal": "the murderer myself too to murder!",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Mörder",
                  "lemma": "mörder",
                  "pos": "noun",
                  "meaning": "murderer"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "morden",
                  "lemma": "morden",
                  "pos": "verb",
                  "meaning": "to murder / murder"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s7_c4",
          "speaker": "Chorus",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "lines": [
            {
              "id": "a1_s7_c4_l1",
              "original": "Er spricht von Tod und Wunde!",
              "literal": "He speaks from death and wound!",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "spricht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speaks"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s7_c4_l2",
              "original": "Wacht scharf auf eurer Runde!",
              "literal": "Wacht scharf on eurer Runde!",
              "tokens": [
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                }
              ]
            },
            {
              "id": "a1_s7_c4_l3",
              "original": "Wie wichtig muß es sein!",
              "literal": "How wichtig must it to be!",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s7_c5",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "lines": [
            {
              "id": "a1_s7_c5_l1",
              "original": "Ha! Welch ein Augenblick!",
              "literal": "Ha! what a moment!",
              "tokens": [
                {
                  "word": "Welch",
                  "lemma": "welch",
                  "pos": "noun",
                  "meaning": "what / which"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Augenblick",
                  "lemma": "Augenblick",
                  "pos": "noun",
                  "meaning": "moment"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l2",
              "original": "Die Rache werd' ich kühlen,",
              "literal": "The vengeance will I cool [slake],",
              "tokens": [
                {
                  "word": "Rache",
                  "lemma": "Rache",
                  "pos": "noun",
                  "meaning": "vengeance / revenge (feminine accusative)"
                },
                {
                  "word": "kühlen",
                  "lemma": "kühlen",
                  "pos": "verb",
                  "meaning": "cool / slake / satisfy"
                }
              ],
              "grammarNote": "Idiom 'seine Rache kühlen' (to satisfy/slake one's vengeance)."
            },
            {
              "id": "a1_s7_c5_l3",
              "original": "dich rufet dein Geschick!",
              "literal": "you calls your destiny!",
              "tokens": [
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (accusative object)"
                },
                {
                  "word": "rufet",
                  "lemma": "rufen",
                  "pos": "verb",
                  "meaning": "calls"
                },
                {
                  "word": "dein Geschick",
                  "lemma": "Geschick",
                  "pos": "noun",
                  "meaning": "your destiny / fate (subject nominative)"
                }
              ],
              "grammarNote": "Putting 'dich' (you) first creates dramatic confrontation: 'You shall not be his sacrifice!'"
            },
            {
              "id": "a1_s7_c5_l4",
              "original": "Triumph! Der Sieg ist mein!",
              "literal": "Triumph! The victory is mine!",
              "tokens": [
                {
                  "word": "Triumph",
                  "lemma": "Triumph",
                  "pos": "noun",
                  "meaning": "triumph"
                },
                {
                  "word": "Sieg",
                  "lemma": "Sieg",
                  "pos": "noun",
                  "meaning": "victory"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l5",
              "original": "Hauptmann, besteigen Sie mit einem Trompeter",
              "literal": "Hauptmann, besteigen she with to-a Trompeter",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                },
                {
                  "word": "einem",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "to-a (dat.)"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l6",
              "original": "sogleich den Turm. Sehen Sie mit der größten",
              "literal": "the tower at once. Watch with the greatest",
              "tokens": [
                {
                  "word": "sogleich",
                  "lemma": "sogleich",
                  "pos": "adverb",
                  "meaning": "at once / immediately"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Turm",
                  "lemma": "Turm",
                  "pos": "noun",
                  "meaning": "tower"
                },
                {
                  "word": "Sehen",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "to see"
                },
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l7",
              "original": "Achtsamkeit auf die Straße von Sevilla. Sobald Sie",
              "literal": "attentiveness toward the road from Seville. As soon as you",
              "tokens": [
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l8",
              "original": "einen Wagen von Reitern begleitet sehen, lassen Sie",
              "literal": "a to dare from Reitern begleitet to see, to let she",
              "tokens": [
                {
                  "word": "einen",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an (masc. acc.)"
                },
                {
                  "word": "Wagen",
                  "lemma": "wagen",
                  "pos": "verb",
                  "meaning": "to dare / venture / wagon"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l9",
              "original": "augenblicklich durch den Trompeter ein Signal geben.",
              "literal": "instantly through the Trompeter a Signal to give.",
              "tokens": [
                {
                  "word": "augenblicklich",
                  "lemma": "augenblicklich",
                  "pos": "adverb",
                  "meaning": "instantly / immediately"
                },
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l10",
              "original": "Verstehen Sie? Augenblicklich! Ich erwarte die größte",
              "literal": "Do you understand? Instantly! I expect the utmost",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "Augenblicklich",
                  "lemma": "augenblicklich",
                  "pos": "adverb",
                  "meaning": "instantly / immediately"
                },
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            },
            {
              "id": "a1_s7_c5_l11",
              "original": "Pünktlichkeit! Sie haften mir mit ihrem Kopf dafür. Rocco!",
              "literal": "punctuality! You answer to me with your head for it. Rocco!",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s7_c6",
          "speaker": "Rocco",
          "pieceTitle": "Nr.7: Arie mit Chor",
          "lines": [
            {
              "id": "a1_s7_c6_l1",
              "original": "Herr!",
              "literal": "Sir!",
              "tokens": [
                {
                  "word": "Herr",
                  "lemma": "Herr",
                  "pos": "noun",
                  "meaning": "Lord / Master / Sir"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 8,
      "title": "Jetzt, Alter, jetzt hat es Eile! (Duett)",
      "titleTranslation": "Now, old man, now there is haste! (Duet)",
      "originalDescription": "Pizarro versucht vergeblich Rocco zum Mord zu dungen, befiehlt ihm aber, ein geheimes Grab zu schaufeln.",
      "description": "Pizarro tries in vain to bribe Rocco into murder, then orders him instead to dig a secret grave.",
      "cues": [
        {
          "id": "a1_s8_c1",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c1_l1",
              "original": "Jetzt, Alter, jetzt hat es Eile!",
              "literal": "Now, old man, there is no time to lose!",
              "tokens": [
                {
                  "word": "Alter",
                  "lemma": "Alter",
                  "pos": "noun",
                  "meaning": "old man"
                },
                {
                  "word": "Eile haben",
                  "lemma": "Eile",
                  "pos": "noun",
                  "meaning": "to be urgent / pressing"
                }
              ],
              "grammarNote": "'es hat Eile' is an idiom meaning 'there is no time to lose' or 'it is of the essence' (literally: 'it has haste')."
            },
            {
              "id": "a1_s8_c1_l2",
              "original": "Dir wird ein Glück zu Teile,",
              "literal": "Great good fortune will fall to your lot,",
              "tokens": [
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / luck"
                },
                {
                  "word": "zu Teile werden",
                  "lemma": "zuteilwerden",
                  "pos": "verb",
                  "meaning": "to fall to someone's lot / be granted"
                }
              ],
              "grammarNote": "'jemandem zuteilwerden' is an idiom meaning 'to fall to one's lot / be bestowed upon someone'."
            },
            {
              "id": "a1_s8_c1_l3",
              "original": "du wirst ein reicher Mann;",
              "literal": "you will-become a rich man;",
              "tokens": [
                {
                  "word": "reicher Mann",
                  "lemma": "Mann",
                  "pos": "noun",
                  "meaning": "rich man"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c2",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "stageDirection": "wirft ihm einen Beutel zu",
          "stageDirectionTranslation": "throws him a purse of money",
          "lines": [
            {
              "id": "a1_s8_c2_l1",
              "original": "das geb' ich nur daran.",
              "literal": "the geb' I only daran.",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c3",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c3_l1",
              "original": "So sagt doch nur in Eile,",
              "literal": "So says yet only in haste / hurry,",
              "tokens": [
                {
                  "word": "So",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "sagt",
                  "lemma": "sagen",
                  "pos": "verb",
                  "meaning": "says"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                }
              ]
            },
            {
              "id": "a1_s8_c3_l2",
              "original": "womit ich dienen kann!",
              "literal": "womit I dienen can!",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c4",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c4_l1",
              "original": "Du bist von kaltem Blute,",
              "literal": "You are from kaltem Blute,",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "bist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                }
              ]
            },
            {
              "id": "a1_s8_c4_l2",
              "original": "von unverzagtem Mute",
              "literal": "from unverzagtem Mute",
              "tokens": [
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                }
              ]
            },
            {
              "id": "a1_s8_c4_l3",
              "original": "durch langen Dienst geworden.",
              "literal": "through langen service become.",
              "tokens": [
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through"
                },
                {
                  "word": "Dienst",
                  "lemma": "Dienst",
                  "pos": "noun",
                  "meaning": "service"
                },
                {
                  "word": "geworden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c5",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c5_l1",
              "original": "Was soll ich? Redet!",
              "literal": "What shall I? Redet!",
              "tokens": [
                {
                  "word": "Was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "soll",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shall / is to"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c6",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c6_l1",
              "original": "Morden!",
              "literal": "Murder!",
              "tokens": [
                {
                  "word": "Morden",
                  "lemma": "morden",
                  "pos": "verb",
                  "meaning": "to murder / murder!"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c7",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c7_l1",
              "original": "Wie?",
              "literal": "How?",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / what?"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c8",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c8_l1",
              "original": "Höre mich nun an!",
              "literal": "Hear me now at!",
              "tokens": [
                {
                  "word": "Höre",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "an",
                  "lemma": "an",
                  "pos": "preposition",
                  "meaning": "at / on"
                }
              ]
            },
            {
              "id": "a1_s8_c8_l2",
              "original": "Du bebst? Bist du ein Mann?",
              "literal": "You quakest? are you a man?",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "bebst",
                  "lemma": "beben",
                  "pos": "verb",
                  "meaning": "quakest"
                },
                {
                  "word": "Bist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "are"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s8_c8_l3",
              "original": "Wir dürfen gar nicht säumen,",
              "literal": "We must not tarry at all,",
              "tokens": [
                {
                  "word": "Wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "dürfen",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / to be permitted"
                },
                {
                  "word": "gar",
                  "lemma": "gar",
                  "pos": "adverb",
                  "meaning": "at all / even"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                }
              ]
            },
            {
              "id": "a1_s8_c8_l4",
              "original": "dem Staate liegt daran,",
              "literal": "to the Staate lies daran,",
              "tokens": [
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "liegt",
                  "lemma": "liegen",
                  "pos": "verb",
                  "meaning": "lies"
                }
              ]
            },
            {
              "id": "a1_s8_c8_l5",
              "original": "den bösen Untertan",
              "literal": "the dangerous subject",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                }
              ]
            },
            {
              "id": "a1_s8_c8_l6",
              "original": "schnell aus dem Weg zu räumen.",
              "literal": "quickly out of the way to clear [to remove him quickly].",
              "tokens": [
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly / swift"
                },
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "out of / from"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c9",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c9_l1",
              "original": "O Herr!",
              "literal": "O sir!",
              "tokens": [
                {
                  "word": "Herr",
                  "lemma": "Herr",
                  "pos": "noun",
                  "meaning": "sir / lord"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c10",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c10_l1",
              "original": "Du stehst noch an?",
              "literal": "You standest still at?",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "stehst",
                  "lemma": "stehen",
                  "pos": "verb",
                  "meaning": "standest"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "an",
                  "lemma": "an",
                  "pos": "preposition",
                  "meaning": "at / on"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c11",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s8_c11_l1",
              "original": "Er darf nicht länger leben,",
              "literal": "He may not longer life,",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "länger",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "longer"
                },
                {
                  "word": "leben",
                  "lemma": "leben",
                  "pos": "noun",
                  "meaning": "life / to live"
                }
              ]
            },
            {
              "id": "a1_s8_c11_l2",
              "original": "sonst ist's um mich gescheh'n.",
              "literal": "formerly / otherwise is's around me gescheh'n.",
              "tokens": [
                {
                  "word": "sonst",
                  "lemma": "sonst",
                  "pos": "verb",
                  "meaning": "formerly / otherwise"
                },
                {
                  "word": "um",
                  "lemma": "um",
                  "pos": "preposition",
                  "meaning": "around / for / about"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s8_c11_l3",
              "original": "Pizarro sollte beben?",
              "literal": "Pizarro should to quake?",
              "tokens": [
                {
                  "word": "sollte",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "should"
                },
                {
                  "word": "beben",
                  "lemma": "beben",
                  "pos": "verb",
                  "meaning": "to quake / tremble"
                }
              ]
            },
            {
              "id": "a1_s8_c11_l4",
              "original": "Du fällst, ich werde steh'n.",
              "literal": "You fall, I shall stand.",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "werde",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "become / will"
                },
                {
                  "word": "steh'n",
                  "lemma": "steh'n",
                  "pos": "verb",
                  "meaning": "to stand"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c12",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c12_l1",
              "original": "Die Glieder fühl' ich beben,",
              "literal": "I feel my limbs trembling,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "beben",
                  "lemma": "beben",
                  "pos": "verb",
                  "meaning": "to quake / tremble"
                }
              ]
            },
            {
              "id": "a1_s8_c12_l2",
              "original": "wie könnt' ich das besteh'n?",
              "literal": "how could I that endure?",
              "tokens": [
                {
                  "word": "könnt'",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "could (subjunctive II)"
                },
                {
                  "word": "besteh'n",
                  "lemma": "bestehen",
                  "pos": "verb",
                  "meaning": "survive / endure / undergo"
                }
              ]
            },
            {
              "id": "a1_s8_c12_l3",
              "original": "Ich nehm' ihm nicht das Leben,",
              "literal": "I take from-him not the life,",
              "tokens": [
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "from him (dative of separation)"
                },
                {
                  "word": "das Leben nehmen",
                  "lemma": "Leben",
                  "pos": "verb",
                  "meaning": "to take someone's life"
                }
              ],
              "grammarNote": "Dative of disadvantage: 'jemandem das Leben nehmen'."
            },
            {
              "id": "a1_s8_c12_l4",
              "original": "mag, was da will, gescheh'n.",
              "literal": "may, what there wants, happen.",
              "tokens": [
                {
                  "word": "gescheh'n",
                  "lemma": "geschehen",
                  "pos": "verb",
                  "meaning": "happen / transpire"
                }
              ],
              "grammarNote": "Concessive formula: 'geschehe, was da wolle' (come what may)."
            },
            {
              "id": "a1_s8_c12_l5",
              "original": "Nein, Herr, das Leben nehmen,",
              "literal": "No, Lord, the life to take,",
              "tokens": [
                {
                  "word": "Nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "Herr",
                  "lemma": "Herr",
                  "pos": "noun",
                  "meaning": "Lord / master / sir"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                },
                {
                  "word": "nehmen",
                  "lemma": "nehmen",
                  "pos": "verb",
                  "meaning": "to take"
                }
              ]
            },
            {
              "id": "a1_s8_c12_l6",
              "original": "das ist nicht meine Pflicht.",
              "literal": "the is not my duty.",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                },
                {
                  "word": "Pflicht",
                  "lemma": "Pflicht",
                  "pos": "noun",
                  "meaning": "duty / obligation"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c13",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c13_l1",
              "original": "Ich will mich selbst bequemen,",
              "literal": "I want me myself to deign / condescend,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / will"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                },
                {
                  "word": "bequemen",
                  "lemma": "bequemen",
                  "pos": "verb",
                  "meaning": "to deign / condescend"
                }
              ]
            },
            {
              "id": "a1_s8_c13_l2",
              "original": "wenn dir's an Mut gebricht.",
              "literal": "if to you's at courage lacks.",
              "tokens": [
                {
                  "word": "wenn",
                  "lemma": "wenn",
                  "pos": "conjunction",
                  "meaning": "if / whenever / when"
                },
                {
                  "word": "an",
                  "lemma": "an",
                  "pos": "preposition",
                  "meaning": "at / on"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                },
                {
                  "word": "gebricht",
                  "lemma": "gebricht",
                  "pos": "verb",
                  "meaning": "lacks"
                }
              ]
            },
            {
              "id": "a1_s8_c13_l3",
              "original": "Nun eile rasch und munter",
              "literal": "Now haste / hurry rasch and munter",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "eile",
                  "lemma": "eile",
                  "pos": "verb",
                  "meaning": "haste / hurry"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s8_c13_l4",
              "original": "zu jenem Mann hinunter,",
              "literal": "too to-that man hinunter,",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "jenem",
                  "lemma": "jener",
                  "pos": "verb",
                  "meaning": "to-that (dat.)"
                },
                {
                  "word": "Mann",
                  "lemma": "Mann",
                  "pos": "noun",
                  "meaning": "man / husband"
                }
              ]
            },
            {
              "id": "a1_s8_c13_l5",
              "original": "du weißt ...",
              "literal": "you knowest ...",
              "tokens": [
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "weißt",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "knowest"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c14",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c14_l1",
              "original": "... der kaum mehr lebt",
              "literal": "... the kaum more lebt",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "mehr",
                  "lemma": "mehr",
                  "pos": "adverb",
                  "meaning": "more"
                }
              ]
            },
            {
              "id": "a1_s8_c14_l2",
              "original": "und wie ein Schatten schwebt?",
              "literal": "and how a shadow schwebt?",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Schatten",
                  "lemma": "Schatten",
                  "pos": "noun",
                  "meaning": "shadow / shade"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c15",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c15_l1",
              "original": "Zu dem, zu dem hinab!",
              "literal": "Too to the, too to the downward!",
              "tokens": [
                {
                  "word": "Zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "hinab",
                  "lemma": "hinab",
                  "pos": "adverb",
                  "meaning": "downward"
                }
              ]
            },
            {
              "id": "a1_s8_c15_l2",
              "original": "Ich wart' in kleiner Ferne,",
              "literal": "I wait at a little distance,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "kleiner",
                  "lemma": "klein",
                  "pos": "adjective",
                  "meaning": "small"
                }
              ]
            },
            {
              "id": "a1_s8_c15_l3",
              "original": "du gräbst in der Zisterne",
              "literal": "you diggest in the cistern",
              "tokens": [
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "gräbst",
                  "lemma": "graben",
                  "pos": "verb",
                  "meaning": "diggest"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Zisterne",
                  "lemma": "zisterne",
                  "pos": "noun",
                  "meaning": "cistern"
                }
              ]
            },
            {
              "id": "a1_s8_c15_l4",
              "original": "sehr schnell ein Grab.",
              "literal": "very quickly a grave.",
              "tokens": [
                {
                  "word": "sehr",
                  "lemma": "sehr",
                  "pos": "adverb",
                  "meaning": "very"
                },
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly / swift"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Grab",
                  "lemma": "Grab",
                  "pos": "noun",
                  "meaning": "grave / tomb"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c16",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c16_l1",
              "original": "Und dann? Und dann?",
              "literal": "And then? and then?",
              "tokens": [
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c17",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c17_l1",
              "original": "Dann werd' ich schnell, vermummt,",
              "literal": "Then werd' I quickly, vermummt,",
              "tokens": [
                {
                  "word": "Dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly / swift"
                }
              ]
            },
            {
              "id": "a1_s8_c17_l2",
              "original": "mich in den Kerker schleichen:",
              "literal": "creep into the dungeon:",
              "tokens": [
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Kerker",
                  "lemma": "Kerker",
                  "pos": "noun",
                  "meaning": "dungeon / prison"
                }
              ]
            },
            {
              "id": "a1_s8_c17_l3",
              "original": "Ein Stoß.",
              "literal": "A thrust.",
              "tokens": [
                {
                  "word": "Ein",
                  "lemma": "ein",
                  "pos": "noun",
                  "meaning": "a / an"
                },
                {
                  "word": "Stoß",
                  "lemma": "Stoß",
                  "pos": "noun",
                  "meaning": "thrust / stab"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c18",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "stageDirection": "zeigt den Dolch",
          "stageDirectionTranslation": "shows the dagger",
          "lines": [
            {
              "id": "a1_s8_c18_l1",
              "original": "... und er verstummt!",
              "literal": "... and he falls silent!",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "verstummt",
                  "lemma": "verstummt",
                  "pos": "verb",
                  "meaning": "falls silent"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c19",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c19_l1",
              "original": "Verhungernd in den Ketten,",
              "literal": "Starving in chains,",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                }
              ]
            },
            {
              "id": "a1_s8_c19_l2",
              "original": "ertrug er lange Pein,",
              "literal": "ertrug he long torment,",
              "tokens": [
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "lange",
                  "lemma": "lange",
                  "pos": "adverb",
                  "meaning": "long"
                },
                {
                  "word": "Pein",
                  "lemma": "Pein",
                  "pos": "noun",
                  "meaning": "torment / agony"
                }
              ]
            },
            {
              "id": "a1_s8_c19_l3",
              "original": "ihn töten, heißt ihn retten,",
              "literal": "to kill him means to rescue him,",
              "tokens": [
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "töten",
                  "lemma": "töten",
                  "pos": "verb",
                  "meaning": "to kill"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "retten",
                  "lemma": "retten",
                  "pos": "verb",
                  "meaning": "to save / rescue"
                }
              ]
            },
            {
              "id": "a1_s8_c19_l4",
              "original": "der Dolch wird ihn befrei'n.",
              "literal": "the dagger becomes him befrei'n.",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Dolch",
                  "lemma": "Dolch",
                  "pos": "noun",
                  "meaning": "dagger"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c20",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c20_l1",
              "original": "Er sterb' in seinen Ketten,",
              "literal": "Let him die in his chains,",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "seinen",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his (acc.)"
                },
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l2",
              "original": "zu kurz war seine Pein!",
              "literal": "too short was his torment!",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "kurz",
                  "lemma": "kurz",
                  "pos": "adjective",
                  "meaning": "short / brief"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "seine",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his / its"
                },
                {
                  "word": "Pein",
                  "lemma": "Pein",
                  "pos": "noun",
                  "meaning": "torment / agony"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l3",
              "original": "Sein Tod nur kann mich retten,",
              "literal": "To be death only can me to save,",
              "tokens": [
                {
                  "word": "Sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l4",
              "original": "dann werd' ich ruhig sein!",
              "literal": "then werd' I quiet to be!",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "ruhig",
                  "lemma": "ruhig",
                  "pos": "adjective",
                  "meaning": "quiet / calm"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l5",
              "original": "Jetzt, Alter, jetzt hat es Eile!",
              "literal": "Now, old-man, now has it haste!",
              "tokens": [
                {
                  "word": "Alter",
                  "lemma": "Alter",
                  "pos": "noun",
                  "meaning": "old man"
                },
                {
                  "word": "Eile haben",
                  "lemma": "Eile",
                  "pos": "noun",
                  "meaning": "to be urgent / pressing"
                }
              ],
              "grammarNote": "Idiom 'es hat Eile' (there is urgency / no time to lose)."
            },
            {
              "id": "a1_s8_c20_l6",
              "original": "Hast du mich verstanden?",
              "literal": "Have you me verstanden?",
              "tokens": [
                {
                  "word": "Hast",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l7",
              "original": "Du gibst ein Zeichen;",
              "literal": "You givest a Zeichen;",
              "tokens": [
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "gibst",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "givest"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l8",
              "original": "dann werd ich selbst, vermummt,",
              "literal": "then werd I myself, vermummt,",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l9",
              "original": "mich in den Kerker schleichen;",
              "literal": "creep into the dungeon;",
              "tokens": [
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Kerker",
                  "lemma": "Kerker",
                  "pos": "noun",
                  "meaning": "dungeon / prison"
                }
              ]
            },
            {
              "id": "a1_s8_c20_l10",
              "original": "Ein Stoß – und er verstummt!",
              "literal": "A thrust – and he falls silent!",
              "tokens": [
                {
                  "word": "Ein",
                  "lemma": "ein",
                  "pos": "noun",
                  "meaning": "a / an"
                },
                {
                  "word": "Stoß",
                  "lemma": "Stoß",
                  "pos": "noun",
                  "meaning": "thrust / stab"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c21",
          "speaker": "Rocco",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c21_l1",
              "original": "Verhungernd in den Ketten,",
              "literal": "Starving in chains,",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                }
              ]
            },
            {
              "id": "a1_s8_c21_l2",
              "original": "ertrug er lange Pein,",
              "literal": "ertrug he long torment,",
              "tokens": [
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "lange",
                  "lemma": "lange",
                  "pos": "adverb",
                  "meaning": "long"
                },
                {
                  "word": "Pein",
                  "lemma": "Pein",
                  "pos": "noun",
                  "meaning": "torment / agony"
                }
              ]
            },
            {
              "id": "a1_s8_c21_l3",
              "original": "ihn töten, heißt ihn retten,",
              "literal": "to kill him means to rescue him,",
              "tokens": [
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "töten",
                  "lemma": "töten",
                  "pos": "verb",
                  "meaning": "to kill"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "retten",
                  "lemma": "retten",
                  "pos": "verb",
                  "meaning": "to save / rescue"
                }
              ]
            },
            {
              "id": "a1_s8_c21_l4",
              "original": "der Dolch wird ihn befrei'n.",
              "literal": "the dagger becomes him befrei'n.",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Dolch",
                  "lemma": "Dolch",
                  "pos": "noun",
                  "meaning": "dagger"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c22",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "lines": [
            {
              "id": "a1_s8_c22_l1",
              "original": "Er sterb' in seinen Ketten,",
              "literal": "Let him die in his chains,",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "seinen",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his (acc.)"
                },
                {
                  "word": "Ketten",
                  "lemma": "Kette",
                  "pos": "noun",
                  "meaning": "chains"
                }
              ]
            },
            {
              "id": "a1_s8_c22_l2",
              "original": "zu kurz war seine Pein!",
              "literal": "too short was his torment!",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "kurz",
                  "lemma": "kurz",
                  "pos": "adjective",
                  "meaning": "short / brief"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "seine",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his / its"
                },
                {
                  "word": "Pein",
                  "lemma": "Pein",
                  "pos": "noun",
                  "meaning": "torment / agony"
                }
              ]
            },
            {
              "id": "a1_s8_c22_l3",
              "original": "Sein Tod nur kann mich retten,",
              "literal": "To be death only can me to save,",
              "tokens": [
                {
                  "word": "Sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s8_c22_l4",
              "original": "dann werd' ich ruhig sein!",
              "literal": "then werd' I quiet to be!",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "ruhig",
                  "lemma": "ruhig",
                  "pos": "adjective",
                  "meaning": "quiet / calm"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s8_c23",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.8 Duett",
          "stageDirection": "Sie gehen ab.",
          "stageDirectionTranslation": "They exit.",
          "lines": []
        }
      ]
    },
    {
      "sceneNumber": 9,
      "title": "Abscheulicher! Wo eilst du hin? (Rezitativ und Arie)",
      "titleTranslation": "Monster! Where are you hurrying? (Recitative and Aria)",
      "originalDescription": "Leonore belauscht das Komplott, verflucht den Tyrannen und schöpft neue Hoffnung aus der Kraft der Gattentreue.",
      "description": "Leonore overhears the plot, curses the tyrant, and summons courage from her heroic wifely devotion.",
      "cues": [
        {
          "id": "a1_s9_c1",
          "speaker": "Leonore",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "stageDirection": "tritt in heftiger innerer Bewegung von der anderen Seite auf und sieht den Abgehenden mit steigender Unruhe nach",
          "stageDirectionTranslation": "enters in violent inward agitation from the other side and watches those departing with mounting anxiety",
          "lines": [
            {
              "id": "a1_s9_c1_l1",
              "original": "Abscheulicher! Wo eilst du hin?",
              "literal": "Abominable-one! Where hurry you to?",
              "tokens": [
                {
                  "word": "Abscheulicher",
                  "lemma": "abscheulich",
                  "pos": "adjective",
                  "meaning": "monstrous one / abomination",
                  "notes": "Substantivized adjective in vocative masculine."
                },
                {
                  "word": "wohin",
                  "lemma": "wohin",
                  "pos": "adverb",
                  "meaning": "whither / where to"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l2",
              "original": "Was hast du vor in wildem Grimme?",
              "literal": "What have you before in wild fury?",
              "tokens": [
                {
                  "word": "vorhaben",
                  "lemma": "vorhaben",
                  "pos": "verb",
                  "meaning": "to intend / plan"
                },
                {
                  "word": "Grimme",
                  "lemma": "Grimm",
                  "pos": "noun",
                  "meaning": "wrath / rage"
                }
              ],
              "grammarNote": "Separable verb 'vorhaben' (to have in mind / intend)."
            },
            {
              "id": "a1_s9_c1_l3",
              "original": "Des Mitleids Ruf, der Menschen Stimme,",
              "literal": "Of the of pity Ruf, the Menschen voice,",
              "tokens": [
                {
                  "word": "Des",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "of-the (gen.)"
                },
                {
                  "word": "Mitleids",
                  "lemma": "mitleids",
                  "pos": "noun",
                  "meaning": "of pity"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l4",
              "original": "rührt nichts mehr deinen Tigersinn!",
              "literal": "nothing moves your tiger-like mind any longer!",
              "tokens": [
                {
                  "word": "nichts",
                  "lemma": "nichts",
                  "pos": "pronoun",
                  "meaning": "nothing"
                },
                {
                  "word": "mehr",
                  "lemma": "mehr",
                  "pos": "adverb",
                  "meaning": "more"
                },
                {
                  "word": "deinen",
                  "lemma": "dein",
                  "pos": "verb",
                  "meaning": "your (acc.)"
                },
                {
                  "word": "Tigersinn",
                  "lemma": "tigersinn",
                  "pos": "noun",
                  "meaning": "tiger-mind / savage disposition"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l5",
              "original": "Doch toben auch wie Meereswogen",
              "literal": "Yet rage though like ocean-billows",
              "tokens": [
                {
                  "word": "toben",
                  "lemma": "toben",
                  "pos": "verb",
                  "meaning": "rage / bluster"
                },
                {
                  "word": "Meereswogen",
                  "lemma": "Woge",
                  "pos": "noun",
                  "meaning": "ocean waves / billows"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l6",
              "original": "dir in der Seele Zorn und Wut,",
              "literal": "to you in the soul anger and rage,",
              "tokens": [
                {
                  "word": "in der Seele",
                  "lemma": "Seele",
                  "pos": "noun",
                  "meaning": "in the soul (dative)"
                },
                {
                  "word": "Zorn und Wut",
                  "lemma": "Zorn",
                  "pos": "noun",
                  "meaning": "wrath and fury"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l7",
              "original": "so leuchtet mir ein Farbenbogen,",
              "literal": "so shines to me a rainbow,",
              "tokens": [
                {
                  "word": "leuchtet",
                  "lemma": "leuchten",
                  "pos": "verb",
                  "meaning": "shines / beams"
                },
                {
                  "word": "Farbenbogen",
                  "lemma": "Farbenbogen",
                  "pos": "noun",
                  "meaning": "rainbow (archaic/poetic for Regenbogen)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l8",
              "original": "der hell auf dunkeln Wolken ruht.",
              "literal": "the bright on dunkeln clouds rests.",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "hell",
                  "lemma": "hell",
                  "pos": "adjective",
                  "meaning": "bright / light"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "Wolken",
                  "lemma": "wolken",
                  "pos": "noun",
                  "meaning": "clouds"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l9",
              "original": "Der blickt so still, so friedlich nieder,",
              "literal": "The blickt so silent, so friedlich down,",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "still",
                  "lemma": "still",
                  "pos": "adjective",
                  "meaning": "silent / quiet"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l10",
              "original": "der spiegelt alte Zeiten wieder,",
              "literal": "the spiegelt alte Zeiten again,",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l11",
              "original": "und neu besänftigt wallt mein Blut.",
              "literal": "and newly soothed surges my blood.",
              "tokens": [
                {
                  "word": "besänftigt",
                  "lemma": "besänftigen",
                  "pos": "verb",
                  "meaning": "calmed / mollified",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "wallt",
                  "lemma": "wallen",
                  "pos": "verb",
                  "meaning": "wells / surges"
                },
                {
                  "word": "Blut",
                  "lemma": "Blut",
                  "pos": "noun",
                  "meaning": "blood (neuter)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l12",
              "original": "Komm, Hoffnung, laß den letzten Stern",
              "literal": "Come, hope, let the last star",
              "tokens": [
                {
                  "word": "Komm",
                  "lemma": "kommen",
                  "pos": "verb",
                  "meaning": "come (imperative)"
                },
                {
                  "word": "letzten Stern",
                  "lemma": "Stern",
                  "pos": "noun",
                  "meaning": "last star (accusative masculine)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l13",
              "original": "der Müden nicht erbleichen!",
              "literal": "of the weary-one not turn-pale!",
              "tokens": [
                {
                  "word": "der Müden",
                  "lemma": "Müde",
                  "pos": "noun",
                  "meaning": "of the weary woman (genitive feminine)"
                },
                {
                  "word": "erbleichen",
                  "lemma": "erbleichen",
                  "pos": "verb",
                  "meaning": "to fade / grow pale"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l14",
              "original": "Erhelle mein Ziel,",
              "literal": "Erhelle my Ziel,",
              "tokens": [
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l15",
              "original": "sei's noch so fern,",
              "literal": "be's still so fern,",
              "tokens": [
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l16",
              "original": "die Liebe wird's erreichen.",
              "literal": "the love will-it achieve.",
              "tokens": [
                {
                  "word": "erreichen",
                  "lemma": "erreichen",
                  "pos": "verb",
                  "meaning": "reach / attain"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l17",
              "original": "Ich folg' dem inner'n Triebe,",
              "literal": "I folg' to the inner'n Triebe,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l18",
              "original": "ich wanke nicht,",
              "literal": "I waver not,",
              "tokens": [
                {
                  "word": "wanke",
                  "lemma": "wanken",
                  "pos": "verb",
                  "meaning": "waver / falter"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l19",
              "original": "mich stärkt die Pflicht",
              "literal": "duty gives me strength",
              "tokens": [
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Pflicht",
                  "lemma": "Pflicht",
                  "pos": "noun",
                  "meaning": "duty / obligation"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l20",
              "original": "der treuen Gattenliebe!",
              "literal": "the treuen conjugal love!",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gattenliebe",
                  "lemma": "gattenliebe",
                  "pos": "noun",
                  "meaning": "conjugal love"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l21",
              "original": "O du, für den ich alles trug,",
              "literal": "O you, for whom I everything bore,",
              "tokens": [
                {
                  "word": "trug",
                  "lemma": "tragen",
                  "pos": "verb",
                  "meaning": "bore / endured"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l22",
              "original": "könnt' ich zur Stelle dringen,",
              "literal": "could I to the place penetrate,",
              "tokens": [
                {
                  "word": "zur Stelle",
                  "lemma": "Stelle",
                  "pos": "noun",
                  "meaning": "to the spot"
                },
                {
                  "word": "dringen",
                  "lemma": "dringen",
                  "pos": "verb",
                  "meaning": "penetrate / force one's way"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l23",
              "original": "wo Bösheit dich in Fesseln schlug,",
              "literal": "where malice cast you into chains,",
              "tokens": [
                {
                  "word": "wo",
                  "lemma": "wo",
                  "pos": "adverb",
                  "meaning": "where"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (acc.)"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "Fesseln",
                  "lemma": "Fessel",
                  "pos": "noun",
                  "meaning": "fetters / shackles"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l24",
              "original": "und süßen Trost dir bringen!",
              "literal": "and sweet consolation to you bring!",
              "tokens": [
                {
                  "word": "süßen Trost",
                  "lemma": "Trost",
                  "pos": "noun",
                  "meaning": "sweet comfort / solace"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l25",
              "original": "Ich folg' dem inner'n Triebe,",
              "literal": "I folg' to the inner'n Triebe,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l26",
              "original": "ich wanke nicht, mich stärkt die Pflicht",
              "literal": "I do not waver, duty gives me strength",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "wanke",
                  "lemma": "wanke",
                  "pos": "verb",
                  "meaning": "waver"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s9_c1_l27",
              "original": "der treuen Gattenliebe!",
              "literal": "the treuen conjugal love!",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gattenliebe",
                  "lemma": "gattenliebe",
                  "pos": "noun",
                  "meaning": "conjugal love"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s9_c2",
          "speaker": "Leonore",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "stageDirection": "Rocco kommt aus dem Garten, Marzelline aus dem Haus.",
          "stageDirectionTranslation": "Rocco comes from the garden, Marzelline from the house.",
          "lines": [
            {
              "id": "a1_s9_c2_l1",
              "original": "Rocco, Ihr verspracht mir so oft, die armen",
              "literal": "Rocco, you verspracht to me so often, the armen",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                }
              ]
            },
            {
              "id": "a1_s9_c2_l2",
              "original": "Gefangenen, die über der Erde wohnen, in unseren",
              "literal": "prisoners who live above ground into our",
              "tokens": [
                {
                  "word": "Gefangenen",
                  "lemma": "Gefangener",
                  "pos": "noun",
                  "meaning": "prisoners"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "über",
                  "lemma": "über",
                  "pos": "preposition",
                  "meaning": "over / about"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Erde",
                  "lemma": "Erde",
                  "pos": "noun",
                  "meaning": "earth"
                }
              ]
            },
            {
              "id": "a1_s9_c2_l3",
              "original": "Festungsgarten zu lassen. Heute ist das Wetter so",
              "literal": "Festungsgarten too to let. today is the Wetter so",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "lassen",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "to let / leave"
                },
                {
                  "word": "Heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            },
            {
              "id": "a1_s9_c2_l4",
              "original": "schön! Der Gouverneur kommt um diese Zeit nicht",
              "literal": "beautiful! the governor comes around this time not",
              "tokens": [
                {
                  "word": "schön",
                  "lemma": "schön",
                  "pos": "adjective",
                  "meaning": "beautiful / fine"
                },
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gouverneur",
                  "lemma": "Gouverneur",
                  "pos": "noun",
                  "meaning": "governor"
                },
                {
                  "word": "kommt",
                  "lemma": "kommen",
                  "pos": "verb",
                  "meaning": "comes"
                },
                {
                  "word": "um",
                  "lemma": "um",
                  "pos": "preposition",
                  "meaning": "around / for / about"
                }
              ]
            },
            {
              "id": "a1_s9_c2_l5",
              "original": "hierher.",
              "literal": "hierher.",
              "tokens": []
            }
          ]
        },
        {
          "id": "a1_s9_c3",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "lines": [
            {
              "id": "a1_s9_c3_l1",
              "original": "O ja! Ich bitte mit ihm!",
              "literal": "O yes! I bitte with to him!",
              "tokens": [
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s9_c4",
          "speaker": "Rocco",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "lines": [
            {
              "id": "a1_s9_c4_l1",
              "original": "Kinder, ohne Erlaubnis des Gouverneurs?",
              "literal": "Children, without Erlaubnis of the Gouverneurs?",
              "tokens": [
                {
                  "word": "Kinder",
                  "lemma": "Kind",
                  "pos": "noun",
                  "meaning": "children"
                },
                {
                  "word": "ohne",
                  "lemma": "ohne",
                  "pos": "preposition",
                  "meaning": "without"
                },
                {
                  "word": "des",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "of-the (gen.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s9_c5",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "lines": [
            {
              "id": "a1_s9_c5_l1",
              "original": "Aber er sprach so lange mit dir. Vielleicht sollst du",
              "literal": "But he spoke so long with to you. perhaps shall you",
              "tokens": [
                {
                  "word": "Aber",
                  "lemma": "aber",
                  "pos": "conjunction",
                  "meaning": "but / however"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "sprach",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "spoke"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "lange",
                  "lemma": "lange",
                  "pos": "adverb",
                  "meaning": "long"
                }
              ]
            },
            {
              "id": "a1_s9_c5_l2",
              "original": "ihm einen Gefallen tun, und dann wird er es so",
              "literal": "to him a fallen to do, and then becomes he it so",
              "tokens": [
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "einen",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an (masc. acc.)"
                },
                {
                  "word": "Gefallen",
                  "lemma": "fallen",
                  "pos": "verb",
                  "meaning": "fallen / pleases"
                },
                {
                  "word": "tun",
                  "lemma": "tun",
                  "pos": "verb",
                  "meaning": "to do"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                }
              ]
            },
            {
              "id": "a1_s9_c5_l3",
              "original": "genau nicht nehmen.",
              "literal": "genau not to take.",
              "tokens": [
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "nehmen",
                  "lemma": "nehmen",
                  "pos": "verb",
                  "meaning": "to take"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s9_c6",
          "speaker": "Rocco",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "lines": [
            {
              "id": "a1_s9_c6_l1",
              "original": "Einen Gefallen? Du hast recht, Marzelline. Auf diese",
              "literal": "A fallen? you have right / quite, Marzelline. on this",
              "tokens": [
                {
                  "word": "Einen",
                  "lemma": "ein",
                  "pos": "noun",
                  "meaning": "a / an (masc. acc.)"
                },
                {
                  "word": "Gefallen",
                  "lemma": "fallen",
                  "pos": "verb",
                  "meaning": "fallen / pleases"
                },
                {
                  "word": "Du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "hast",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have"
                },
                {
                  "word": "recht",
                  "lemma": "recht",
                  "pos": "verb",
                  "meaning": "right / quite"
                }
              ]
            },
            {
              "id": "a1_s9_c6_l2",
              "original": "Gefahr hin kann ich es wagen. Wohl denn, Jaquino,",
              "literal": "Danger thither can I it to dare. probably for, Jaquino,",
              "tokens": [
                {
                  "word": "Gefahr",
                  "lemma": "Gefahr",
                  "pos": "noun",
                  "meaning": "danger / peril"
                },
                {
                  "word": "hin",
                  "lemma": "hin",
                  "pos": "adverb",
                  "meaning": "thither"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                }
              ]
            },
            {
              "id": "a1_s9_c6_l3",
              "original": "Fidelio, öffnet die Gefängnisse! Ich aber gehe zu",
              "literal": "Fidelio, open the prison gates! But I go to",
              "tokens": [
                {
                  "word": "öffnet",
                  "lemma": "öffnen",
                  "pos": "verb",
                  "meaning": "opens"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            },
            {
              "id": "a1_s9_c6_l4",
              "original": "Pizarro und halte ihn zurück, indem ich für dein",
              "literal": "Pizarro and hold him back, indem I for your",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "halte",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "hold"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                }
              ]
            },
            {
              "id": "a1_s9_c6_l5",
              "original": "Bestes rede.",
              "literal": "Bestes speak.",
              "tokens": [
                {
                  "word": "rede",
                  "lemma": "reden",
                  "pos": "verb",
                  "meaning": "speak (imperative)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s9_c7",
          "speaker": "Rocco",
          "pieceTitle": "Nr.9: Rezitativ und Arie",
          "stageDirection": "Rocco geht ab. Leonore und Jaquino schließen die wohlverwahrten Gefängnistüren auf, ziehen sich dann mit Marzelline in den Hintergrund und beobachten mit Teilnahme die nach und nach auftretenden Gefangenen.",
          "stageDirectionTranslation": "Rocco exits. Leonore and Jaquino unlock the heavily bolted prison doors, then withdraw with Marzelline into the background, observing with sympathy the prisoners as they gradually emerge.",
          "lines": []
        }
      ]
    },
    {
      "sceneNumber": 10,
      "title": "O welche Lust! (Finale I)",
      "titleTranslation": "O what joy! (Finale I)",
      "originalDescription": "Auf Leonores Bitten dürfen die Gefangenen kurz ins Freie treten; Pizarro befiehlt zornig ihre Rückkehr.",
      "description": "At Leonore’s urging, the prisoners are granted a brief moment in the open air; Pizarro angrily orders them locked back away.",
      "cues": [
        {
          "id": "a1_s10_c1",
          "speaker": "Chorus of Prisoners",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c1_l1",
              "original": "O welche Lust! In freier Luft",
              "literal": "O what delight! In open air",
              "tokens": [
                {
                  "word": "welche Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "what delight / joy"
                },
                {
                  "word": "In freier Luft",
                  "lemma": "Luft",
                  "pos": "noun",
                  "meaning": "in free/open air (dative feminine)"
                }
              ]
            },
            {
              "id": "a1_s10_c1_l2",
              "original": "den Atem leicht zu heben!",
              "literal": "to draw breath freely!",
              "tokens": [
                {
                  "word": "Atem",
                  "lemma": "Atem",
                  "pos": "noun",
                  "meaning": "breath (accusative masculine)"
                },
                {
                  "word": "heben",
                  "lemma": "heben",
                  "pos": "verb",
                  "meaning": "raise / draw (breath)"
                }
              ],
              "grammarNote": "'den Atem heben' is an idiom meaning 'to draw breath freely / breathe deeply'."
            },
            {
              "id": "a1_s10_c1_l3",
              "original": "Nur hier, nur hier ist Leben,",
              "literal": "Only here, only here is life,",
              "tokens": [
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ]
            },
            {
              "id": "a1_s10_c1_l4",
              "original": "der Kerker eine Gruft.",
              "literal": "the dungeon a tomb.",
              "tokens": [
                {
                  "word": "Kerker",
                  "lemma": "Kerker",
                  "pos": "noun",
                  "meaning": "dungeon / prison"
                },
                {
                  "word": "Gruft",
                  "lemma": "Gruft",
                  "pos": "noun",
                  "meaning": "vault / tomb / grave"
                }
              ],
              "grammarNote": "Elliptical copula: '[ist] eine Gruft'."
            }
          ]
        },
        {
          "id": "a1_s10_c2",
          "speaker": "First Prisoner",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c2_l1",
              "original": "Wir wollen mit Vertrauen",
              "literal": "We want with confidence",
              "tokens": [
                {
                  "word": "Vertrauen",
                  "lemma": "Vertrauen",
                  "pos": "noun",
                  "meaning": "trust / reliance"
                }
              ]
            },
            {
              "id": "a1_s10_c2_l2",
              "original": "auf Gottes Hülfe bauen.",
              "literal": "on God's help bauen.",
              "tokens": [
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "Gottes",
                  "lemma": "gott",
                  "pos": "noun",
                  "meaning": "God's"
                },
                {
                  "word": "Hülfe",
                  "lemma": "Hilfe",
                  "pos": "noun",
                  "meaning": "help / aid (archaic)"
                }
              ]
            },
            {
              "id": "a1_s10_c2_l3",
              "original": "Die Hoffnung flüstert sanft mir zu:",
              "literal": "Hope whispers softly to me to:",
              "tokens": [
                {
                  "word": "flüstert... zu",
                  "lemma": "zuflüstern",
                  "pos": "verb",
                  "meaning": "whispers to (takes dative)"
                },
                {
                  "word": "sanft",
                  "lemma": "sanft",
                  "pos": "adverb",
                  "meaning": "gently / softly"
                }
              ],
              "grammarNote": "Separable verb 'zuflüstern'."
            },
            {
              "id": "a1_s10_c2_l4",
              "original": "Wir werden frei, wir finden Ruh!",
              "literal": "We to become free, we to find peace!",
              "tokens": [
                {
                  "word": "Wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "werden",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "to become / will"
                },
                {
                  "word": "frei",
                  "lemma": "frei",
                  "pos": "adjective",
                  "meaning": "free"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "finden",
                  "lemma": "finden",
                  "pos": "verb",
                  "meaning": "to find"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c3",
          "speaker": "All Others",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "jeder für sich",
          "stageDirectionTranslation": "each to themselves",
          "lines": [
            {
              "id": "a1_s10_c3_l1",
              "original": "O Himmel! Rettung! Welch' ein Glück!",
              "literal": "O heaven! Salvation! What a happiness!",
              "tokens": [
                {
                  "word": "Rettung",
                  "lemma": "Rettung",
                  "pos": "noun",
                  "meaning": "rescue / deliverance"
                }
              ]
            },
            {
              "id": "a1_s10_c3_l2",
              "original": "O Freiheit! Freiheit, kehrst du zurück?",
              "literal": "O freedom! freedom, kehrst you back?",
              "tokens": [
                {
                  "word": "Freiheit",
                  "lemma": "Freiheit",
                  "pos": "noun",
                  "meaning": "freedom / liberty"
                },
                {
                  "word": "Freiheit",
                  "lemma": "Freiheit",
                  "pos": "noun",
                  "meaning": "freedom / liberty"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c4",
          "speaker": "Second Prisoner",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c4_l1",
              "original": "Sprecht leise, haltet euch zurück!",
              "literal": "Speak softly, hold you back!",
              "tokens": [
                {
                  "word": "Sprecht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (pl.)"
                },
                {
                  "word": "leise",
                  "lemma": "leise",
                  "pos": "adverb",
                  "meaning": "softly / quietly"
                },
                {
                  "word": "haltet",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "hold (pl.)"
                },
                {
                  "word": "euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                }
              ]
            },
            {
              "id": "a1_s10_c4_l2",
              "original": "Wir sind belauscht mit Ohr und Blick.",
              "literal": "We are eavesdropped with ear and glance.",
              "tokens": [
                {
                  "word": "belauscht",
                  "lemma": "belauschen",
                  "pos": "verb",
                  "meaning": "spied upon / eavesdropped"
                },
                {
                  "word": "Ohr und Blick",
                  "lemma": "Ohr",
                  "pos": "noun",
                  "meaning": "ears and eyes"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c5",
          "speaker": "All Others",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c5_l1",
              "original": "Sprecht leise, haltet euch zurück!",
              "literal": "Speak softly, hold you back!",
              "tokens": [
                {
                  "word": "Sprecht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (pl.)"
                },
                {
                  "word": "leise",
                  "lemma": "leise",
                  "pos": "adverb",
                  "meaning": "softly / quietly"
                },
                {
                  "word": "haltet",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "hold (pl.)"
                },
                {
                  "word": "euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l2",
              "original": "Wir sind belauscht mit Ohr und Blick.",
              "literal": "We are eavesdropped with ear and glance.",
              "tokens": [
                {
                  "word": "belauscht",
                  "lemma": "belauschen",
                  "pos": "verb",
                  "meaning": "spied upon / eavesdropped"
                },
                {
                  "word": "Ohr und Blick",
                  "lemma": "Ohr",
                  "pos": "noun",
                  "meaning": "ears and eyes"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l3",
              "original": "Sprecht leise, ja leise!",
              "literal": "Speak softly, yes softly!",
              "tokens": [
                {
                  "word": "Sprecht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (pl.)"
                },
                {
                  "word": "leise",
                  "lemma": "leise",
                  "pos": "adverb",
                  "meaning": "softly / quietly"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "leise",
                  "lemma": "leise",
                  "pos": "adverb",
                  "meaning": "softly / quietly"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l4",
              "original": "O welche Lust! In freier Luft",
              "literal": "O what delight! In open air",
              "tokens": [
                {
                  "word": "welche Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "what delight / joy"
                },
                {
                  "word": "In freier Luft",
                  "lemma": "Luft",
                  "pos": "noun",
                  "meaning": "in free/open air (dative feminine)"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l5",
              "original": "den Atem leicht zu heben!",
              "literal": "the breath lightly to heave [draw]!",
              "tokens": [
                {
                  "word": "Atem",
                  "lemma": "Atem",
                  "pos": "noun",
                  "meaning": "breath (accusative masculine)"
                },
                {
                  "word": "heben",
                  "lemma": "heben",
                  "pos": "verb",
                  "meaning": "raise / draw (breath)"
                }
              ],
              "grammarNote": "Idiom 'den Atem heben' (to breathe deeply / draw breath)."
            },
            {
              "id": "a1_s10_c5_l6",
              "original": "O welche Lust!",
              "literal": "O which delight!",
              "tokens": [
                {
                  "word": "welche",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "which / what"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "delight / joy / desire"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l7",
              "original": "Nur hier, nur hier ist Leben.",
              "literal": "Only here, only here is life.",
              "tokens": [
                {
                  "word": "Nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l8",
              "original": "Sprecht leise, haltet euch zurück!",
              "literal": "Speak softly, hold you back!",
              "tokens": [
                {
                  "word": "Sprecht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (pl.)"
                },
                {
                  "word": "leise",
                  "lemma": "leise",
                  "pos": "adverb",
                  "meaning": "softly / quietly"
                },
                {
                  "word": "haltet",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "hold (pl.)"
                },
                {
                  "word": "euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (acc./dat.)"
                },
                {
                  "word": "zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                }
              ]
            },
            {
              "id": "a1_s10_c5_l9",
              "original": "Wir sind belauscht mit Ohr und Blick.",
              "literal": "We are eavesdropped with ear and glance.",
              "tokens": [
                {
                  "word": "belauscht",
                  "lemma": "belauschen",
                  "pos": "verb",
                  "meaning": "spied upon / eavesdropped"
                },
                {
                  "word": "Ohr und Blick",
                  "lemma": "Ohr",
                  "pos": "noun",
                  "meaning": "ears and eyes"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c6",
          "speaker": "All Others",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "Die Gefangenen entfernen sich in den Garten, Rocco und Leonore nähern sich der Vorderbühne.",
          "stageDirectionTranslation": "The prisoners withdraw into the garden; Rocco and Leonore approach the downstage area.",
          "lines": []
        },
        {
          "id": "a1_s10_c7",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c7_l1",
              "original": "Nun sprecht, wie ging's?",
              "literal": "Now speak, how went it?",
              "tokens": [
                {
                  "word": "wie ging's",
                  "lemma": "gehen",
                  "pos": "verb",
                  "meaning": "how did it go?"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c8",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c8_l1",
              "original": "Recht gut, recht gut;",
              "literal": "Right / quite good, right / quite good;",
              "tokens": [
                {
                  "word": "Recht",
                  "lemma": "recht",
                  "pos": "noun",
                  "meaning": "right / quite"
                },
                {
                  "word": "gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                },
                {
                  "word": "recht",
                  "lemma": "recht",
                  "pos": "verb",
                  "meaning": "right / quite"
                },
                {
                  "word": "gut",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l2",
              "original": "zusammen rafft' ich meinen Mut",
              "literal": "together rafft' I my courage",
              "tokens": [
                {
                  "word": "zusammen",
                  "lemma": "zusammen",
                  "pos": "adverb",
                  "meaning": "together"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "meinen",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my (acc.)"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l3",
              "original": "und trug ihm alles vor,",
              "literal": "and carried to him everything before,",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "trug",
                  "lemma": "tragen",
                  "pos": "verb",
                  "meaning": "carried / bore"
                },
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "alles",
                  "lemma": "alles",
                  "pos": "pronoun",
                  "meaning": "everything"
                },
                {
                  "word": "vor",
                  "lemma": "vor",
                  "pos": "preposition",
                  "meaning": "before / in-front-of"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l4",
              "original": "und sollt'st du's glauben,",
              "literal": "and sollt'st you's to believe,",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "glauben",
                  "lemma": "glauben",
                  "pos": "verb",
                  "meaning": "to believe"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l5",
              "original": "was er zur Antwort mir gab?",
              "literal": "what he to the Antwort to me gave?",
              "tokens": [
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "zur",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (fem.)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l6",
              "original": "Die Heirat und daß du mir hilfst, will er erlauben,",
              "literal": "The Heirat and that you to me helpest, want he erlauben,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "daß",
                  "lemma": "daß",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                }
              ]
            },
            {
              "id": "a1_s10_c8_l7",
              "original": "noch heute führ' ich in die Kerker dich hinab.",
              "literal": "this very day I will lead you down into the dungeons.",
              "tokens": [
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c9",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c9_l1",
              "original": "Noch heute, noch heute?",
              "literal": "Still today, still today?",
              "tokens": [
                {
                  "word": "Noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                }
              ]
            },
            {
              "id": "a1_s10_c9_l2",
              "original": "O welch ein Glück, o welche Wonne!",
              "literal": "O what a fortune, o which bliss!",
              "tokens": [
                {
                  "word": "welch",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "what / which"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Glück",
                  "lemma": "Glück",
                  "pos": "noun",
                  "meaning": "fortune / happiness"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c10",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c10_l1",
              "original": "Ich sehe deine Freude.",
              "literal": "I see your joy.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "sehe",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see"
                },
                {
                  "word": "deine",
                  "lemma": "dein",
                  "pos": "verb",
                  "meaning": "your"
                },
                {
                  "word": "Freude",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joy"
                }
              ]
            },
            {
              "id": "a1_s10_c10_l2",
              "original": "Nur noch ein Augenblick,",
              "literal": "Only still a moment,",
              "tokens": [
                {
                  "word": "Nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Augenblick",
                  "lemma": "Augenblick",
                  "pos": "noun",
                  "meaning": "moment"
                }
              ]
            },
            {
              "id": "a1_s10_c10_l3",
              "original": "dann gehen wir schon beide ...",
              "literal": "then to go we already both ...",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                },
                {
                  "word": "gehen",
                  "lemma": "gehen",
                  "pos": "verb",
                  "meaning": "to go / walk"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "beide",
                  "lemma": "beide",
                  "pos": "pronoun",
                  "meaning": "both"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c11",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c11_l1",
              "original": "Wohin?",
              "literal": "Whither [where to]?",
              "tokens": [
                {
                  "word": "Wohin",
                  "lemma": "wohin",
                  "pos": "adverb",
                  "meaning": "where to"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c12",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c12_l1",
              "original": "Zu jenem Mann hinab,",
              "literal": "Too to-that man downward,",
              "tokens": [
                {
                  "word": "Zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "jenem",
                  "lemma": "jener",
                  "pos": "verb",
                  "meaning": "to-that (dat.)"
                },
                {
                  "word": "Mann",
                  "lemma": "Mann",
                  "pos": "noun",
                  "meaning": "man / husband"
                },
                {
                  "word": "hinab",
                  "lemma": "hinab",
                  "pos": "adverb",
                  "meaning": "downward"
                }
              ]
            },
            {
              "id": "a1_s10_c12_l2",
              "original": "dem ich seit vielen Wochen",
              "literal": "to the I since vielen Wochen",
              "tokens": [
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "seit",
                  "lemma": "seit",
                  "pos": "verb",
                  "meaning": "since"
                }
              ]
            },
            {
              "id": "a1_s10_c12_l3",
              "original": "stets weniger zu essen gab.",
              "literal": "stets weniger too essen gave.",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "gab",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gave"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c13",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c13_l1",
              "original": "Ha! Wird er losgesprochen?",
              "literal": "Ha! becomes he losgesprochen?",
              "tokens": [
                {
                  "word": "Wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c14",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c14_l1",
              "original": "O nein!",
              "literal": "O no!",
              "tokens": [
                {
                  "word": "nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c15",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c15_l1",
              "original": "So sprich!",
              "literal": "So speak!",
              "tokens": [
                {
                  "word": "sprich",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c16",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c16_l1",
              "original": "O nein!",
              "literal": "O no!",
              "tokens": [
                {
                  "word": "nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                }
              ]
            },
            {
              "id": "a1_s10_c16_l2",
              "original": "Wir müssen ihn – doch wie? – befrei'n..",
              "literal": "We must him – yet how? – befrei'n..",
              "tokens": [
                {
                  "word": "Wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "müssen",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must / to have to"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                }
              ]
            },
            {
              "id": "a1_s10_c16_l3",
              "original": "Er muß in einer Stunde –",
              "literal": "He must in of-a hour –",
              "tokens": [
                {
                  "word": "Er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "einer",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "of-a / to-a"
                },
                {
                  "word": "Stunde",
                  "lemma": "Stunde",
                  "pos": "noun",
                  "meaning": "hour"
                }
              ]
            },
            {
              "id": "a1_s10_c16_l4",
              "original": "den Finger auf dem Munde –",
              "literal": "the Finger on to the Munde –",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c16_l5",
              "original": "von uns begraben sein.",
              "literal": "from us begraben to be.",
              "tokens": [
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from / of"
                },
                {
                  "word": "uns",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "us (acc./dat.)"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c17",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c17_l1",
              "original": "So ist er tot?",
              "literal": "So is he dead?",
              "tokens": [
                {
                  "word": "tot",
                  "lemma": "tot",
                  "pos": "adjective",
                  "meaning": "dead"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c18",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c18_l1",
              "original": "Noch nicht, noch nicht!",
              "literal": "Not yet, not yet!",
              "tokens": [
                {
                  "word": "Noch nicht",
                  "lemma": "noch nicht",
                  "pos": "adverb",
                  "meaning": "not yet"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c19",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c19_l1",
              "original": "Ist ihn zu töten deine Pflicht?",
              "literal": "Is him too to kill your duty?",
              "tokens": [
                {
                  "word": "Ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "töten",
                  "lemma": "töten",
                  "pos": "verb",
                  "meaning": "to kill"
                },
                {
                  "word": "deine",
                  "lemma": "dein",
                  "pos": "verb",
                  "meaning": "your"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c20",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c20_l1",
              "original": "Nein, guter Junge, zitt're nicht!",
              "literal": "No, good Junge, zitt're not!",
              "tokens": [
                {
                  "word": "Nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "guter",
                  "lemma": "gut",
                  "pos": "adjective",
                  "meaning": "good (masc.)"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                }
              ]
            },
            {
              "id": "a1_s10_c20_l2",
              "original": "Zum Morden dingt sich Rocco nicht.",
              "literal": "To the to murder dingt itself Rocco not.",
              "tokens": [
                {
                  "word": "Zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (masc./neut.)"
                },
                {
                  "word": "Morden",
                  "lemma": "morden",
                  "pos": "verb",
                  "meaning": "to murder / murder"
                },
                {
                  "word": "sich",
                  "lemma": "sich",
                  "pos": "pronoun",
                  "meaning": "itself / himself / herself / themselves"
                }
              ]
            },
            {
              "id": "a1_s10_c20_l3",
              "original": "Der Gouverneur kommt selbst hinab;",
              "literal": "The governor comes myself downward;",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Gouverneur",
                  "lemma": "Gouverneur",
                  "pos": "noun",
                  "meaning": "governor"
                },
                {
                  "word": "kommt",
                  "lemma": "kommen",
                  "pos": "verb",
                  "meaning": "comes"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                },
                {
                  "word": "hinab",
                  "lemma": "hinab",
                  "pos": "adverb",
                  "meaning": "downward"
                }
              ]
            },
            {
              "id": "a1_s10_c20_l4",
              "original": "wir beide graben nur das Grab.",
              "literal": "we both to dig only the grave.",
              "tokens": [
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "beide",
                  "lemma": "beide",
                  "pos": "pronoun",
                  "meaning": "both"
                },
                {
                  "word": "graben",
                  "lemma": "graben",
                  "pos": "verb",
                  "meaning": "to dig"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c21",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s10_c21_l1",
              "original": "Vielleicht das Grab des Gatten graben?",
              "literal": "Perhaps the grave of the of the-husband to dig?",
              "tokens": [
                {
                  "word": "Vielleicht",
                  "lemma": "vielleicht",
                  "pos": "adverb",
                  "meaning": "perhaps"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Grab",
                  "lemma": "Grab",
                  "pos": "noun",
                  "meaning": "grave / tomb"
                },
                {
                  "word": "des",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "of-the (gen.)"
                },
                {
                  "word": "Gatten",
                  "lemma": "Gatte",
                  "pos": "noun",
                  "meaning": "of-the-husband / husband"
                }
              ]
            },
            {
              "id": "a1_s10_c21_l2",
              "original": "Was kann fürchterlicher sein!",
              "literal": "What could be more dreadful!",
              "tokens": [
                {
                  "word": "Was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c22",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c22_l1",
              "original": "Ich darf ihn nicht mit Speise laben;",
              "literal": "I may him not with Speise laben;",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "mit",
                  "lemma": "mit",
                  "pos": "preposition",
                  "meaning": "with"
                }
              ]
            },
            {
              "id": "a1_s10_c22_l2",
              "original": "ihm wird im Grabe besser sein.",
              "literal": "he will be better off in the grave.",
              "tokens": [
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "im",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in-the"
                },
                {
                  "word": "Grabe",
                  "lemma": "Grab",
                  "pos": "noun",
                  "meaning": "grave (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c22_l3",
              "original": "Wir müssen gleich zum Werke schreiten;",
              "literal": "We must immediately to the Werke schreiten;",
              "tokens": [
                {
                  "word": "Wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "müssen",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must / to have to"
                },
                {
                  "word": "gleich",
                  "lemma": "gleich",
                  "pos": "adverb",
                  "meaning": "immediately / like"
                },
                {
                  "word": "zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (masc./neut.)"
                }
              ]
            },
            {
              "id": "a1_s10_c22_l4",
              "original": "du mußt mir helfen, mich begleiten;",
              "literal": "you must to me to help, me begleiten;",
              "tokens": [
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "mußt",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "helfen",
                  "lemma": "helfen",
                  "pos": "verb",
                  "meaning": "to help"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s10_c22_l5",
              "original": "hart ist des Kerkermeisters Brot.",
              "literal": "hard is of the Kerkermeisters bread.",
              "tokens": [
                {
                  "word": "hart",
                  "lemma": "hart",
                  "pos": "adjective",
                  "meaning": "hard / severe"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "des",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "of-the (gen.)"
                },
                {
                  "word": "Brot",
                  "lemma": "Brot",
                  "pos": "noun",
                  "meaning": "bread"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c23",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c23_l1",
              "original": "Ich folge dir, wär's in den Tod.",
              "literal": "I follow you, even were it unto death.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "folge",
                  "lemma": "folgen",
                  "pos": "verb",
                  "meaning": "follow"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to-you (dat.)"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c24",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c24_l1",
              "original": "In der zerfallenen Zisterne",
              "literal": "In the zerfallenen cistern",
              "tokens": [
                {
                  "word": "In",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Zisterne",
                  "lemma": "zisterne",
                  "pos": "noun",
                  "meaning": "cistern"
                }
              ]
            },
            {
              "id": "a1_s10_c24_l2",
              "original": "bereiten wir die Grube leicht;",
              "literal": "bereiten we the pit light;",
              "tokens": [
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Grube",
                  "lemma": "Grube",
                  "pos": "noun",
                  "meaning": "pit / grave"
                },
                {
                  "word": "leicht",
                  "lemma": "leicht",
                  "pos": "adjective",
                  "meaning": "light / easy"
                }
              ]
            },
            {
              "id": "a1_s10_c24_l3",
              "original": "ich tu' es, glaube mir, nicht gerne,",
              "literal": "I tu' it, believe to me, not gladly,",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "glaube",
                  "lemma": "glauben",
                  "pos": "verb",
                  "meaning": "believe"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c24_l4",
              "original": "auch dir ist schaurig, wie mich deucht.",
              "literal": "also to you is schaurig, how me deucht.",
              "tokens": [
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to-you (dat.)"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c25",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c25_l1",
              "original": "Ich bin es nur noch nicht gewohnt.",
              "literal": "I am it only still not gewohnt.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "bin",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "am"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c26",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c26_l1",
              "original": "Ich hätte gerne dich verschont,",
              "literal": "I would have gladly you verschont,",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "hätte",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "would have"
                },
                {
                  "word": "gerne",
                  "lemma": "gern",
                  "pos": "adverb",
                  "meaning": "gladly"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you (acc.)"
                }
              ]
            },
            {
              "id": "a1_s10_c26_l2",
              "original": "doch wird es mir allein zu schwer,",
              "literal": "yet becomes it to me alone too heavy,",
              "tokens": [
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / will"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "allein",
                  "lemma": "allein",
                  "pos": "adjective",
                  "meaning": "alone"
                }
              ]
            },
            {
              "id": "a1_s10_c26_l3",
              "original": "und gar so streng ist unser Herr.",
              "literal": "and at all so streng is our Lord.",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "gar",
                  "lemma": "gar",
                  "pos": "adverb",
                  "meaning": "at all / even"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c27",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s10_c27_l1",
              "original": "O welch ein Schmerz!",
              "literal": "O what a pain!",
              "tokens": [
                {
                  "word": "welch",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "what / which"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                },
                {
                  "word": "Schmerz",
                  "lemma": "Schmerz",
                  "pos": "noun",
                  "meaning": "pain / sorrow"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c28",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s10_c28_l1",
              "original": "Mir scheint, er weine.",
              "literal": "To me seems, he weine.",
              "tokens": [
                {
                  "word": "Mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "scheint",
                  "lemma": "scheinen",
                  "pos": "verb",
                  "meaning": "seems / shines"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c29",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "laut",
          "stageDirectionTranslation": "loudly / aloud",
          "lines": [
            {
              "id": "a1_s10_c29_l1",
              "original": "Nein, du bleibst hier, ich geh' alleine,",
              "literal": "No, you bleibst here, I go' alleine,",
              "tokens": [
                {
                  "word": "Nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                }
              ]
            },
            {
              "id": "a1_s10_c29_l2",
              "original": "ich geh' allein.",
              "literal": "I go' alone.",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "geh",
                  "lemma": "gehen",
                  "pos": "verb",
                  "meaning": "go (imperative)"
                },
                {
                  "word": "allein",
                  "lemma": "allein",
                  "pos": "adjective",
                  "meaning": "alone"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c30",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c30_l1",
              "original": "O nein, o nein!",
              "literal": "O no, o no!",
              "tokens": [
                {
                  "word": "nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                }
              ]
            },
            {
              "id": "a1_s10_c30_l2",
              "original": "Ich muß ihn seh'n, den Armen sehen.",
              "literal": "I must him to see, the arms to see.",
              "tokens": [
                {
                  "word": "Ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "muß",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "seh'n",
                  "lemma": "seh'n",
                  "pos": "verb",
                  "meaning": "to see"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c30_l3",
              "original": "Und müßt' ich selbst zugrundegeh'n!",
              "literal": "Even if I myself should perish!",
              "tokens": [
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "myself / yourself / himself / itself / even"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c31",
          "speaker": "Both",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c31_l1",
              "original": "O säumen wir nun länger nicht,",
              "literal": "Oh, let us tarry no longer,",
              "tokens": [
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "länger",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "longer"
                }
              ]
            },
            {
              "id": "a1_s10_c31_l2",
              "original": "wir folgen unserer strengen Pflicht.",
              "literal": "we to follow unserer strengen duty.",
              "tokens": [
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "folgen",
                  "lemma": "folgen",
                  "pos": "verb",
                  "meaning": "to follow"
                },
                {
                  "word": "Pflicht",
                  "lemma": "Pflicht",
                  "pos": "noun",
                  "meaning": "duty / obligation"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c32",
          "speaker": "Both",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "Jaquino und Marzelline atemlos hereinstürzend.",
          "stageDirectionTranslation": "Jaquino and Marzelline rush in breathlessly.",
          "lines": []
        },
        {
          "id": "a1_s10_c33",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c33_l1",
              "original": "Ach! Vater, eilt!",
              "literal": "Ah! father, hurries!",
              "tokens": [
                {
                  "word": "Ach",
                  "lemma": "ach",
                  "pos": "interjection",
                  "meaning": "ah / alas"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                },
                {
                  "word": "eilt",
                  "lemma": "eilen",
                  "pos": "verb",
                  "meaning": "hurries"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c34",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c34_l1",
              "original": "Was hast du denn?",
              "literal": "What have you then [what is the matter]?",
              "tokens": [
                {
                  "word": "Was hast du denn",
                  "lemma": "haben",
                  "pos": "noun",
                  "meaning": "what is wrong?"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c35",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c35_l1",
              "original": "Nicht länger weilt!",
              "literal": "No longer linger!",
              "tokens": [
                {
                  "word": "weilt",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "tarry / delay"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c36",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c36_l1",
              "original": "Was ist geschehen?",
              "literal": "What has happened?",
              "tokens": [
                {
                  "word": "geschehen",
                  "lemma": "geschehen",
                  "pos": "verb",
                  "meaning": "happened (past participle)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c37",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c37_l1",
              "original": "Voll Zorn folgt mir Pizarro nach,",
              "literal": "Full wrath follows to me Pizarro after,",
              "tokens": [
                {
                  "word": "Voll",
                  "lemma": "voll",
                  "pos": "adjective",
                  "meaning": "full"
                },
                {
                  "word": "Zorn",
                  "lemma": "Zorn",
                  "pos": "noun",
                  "meaning": "wrath / anger"
                },
                {
                  "word": "folgt",
                  "lemma": "folgen",
                  "pos": "verb",
                  "meaning": "follows"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c37_l2",
              "original": "er drohet dir!",
              "literal": "he drohet to you!",
              "tokens": [
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to-you (dat.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c38",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c38_l1",
              "original": "Gemach, gemach!",
              "literal": "Gently, gently [easy now]!",
              "tokens": [
                {
                  "word": "Gemach",
                  "lemma": "gemach",
                  "pos": "adverb",
                  "meaning": "gently / easy / patience"
                }
              ],
              "grammarNote": "Historical interjection urging calm and restraint."
            }
          ]
        },
        {
          "id": "a1_s10_c39",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c39_l1",
              "original": "So eilet fort!",
              "literal": "Then hasten away!",
              "tokens": [
                {
                  "word": "eilet fort",
                  "lemma": "forteilen",
                  "pos": "verb",
                  "meaning": "hurry off"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c40",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c40_l1",
              "original": "Nur noch dies Wort:",
              "literal": "Only still dies word:",
              "tokens": [
                {
                  "word": "Nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / just"
                },
                {
                  "word": "noch",
                  "lemma": "noch",
                  "pos": "adverb",
                  "meaning": "still / yet"
                },
                {
                  "word": "Wort",
                  "lemma": "Wort",
                  "pos": "noun",
                  "meaning": "word"
                }
              ]
            },
            {
              "id": "a1_s10_c40_l2",
              "original": "Sprich, weiß er schon?",
              "literal": "Speak, know he already?",
              "tokens": [
                {
                  "word": "Sprich",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak (sing.)"
                },
                {
                  "word": "weiß",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "know / white"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c41",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c41_l1",
              "original": "Ja, er weiß es schon.",
              "literal": "Yes, he know it already.",
              "tokens": [
                {
                  "word": "Ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "weiß",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "know / white"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c42",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c42_l1",
              "original": "Der Offizier sagt' ihm was wir",
              "literal": "The Offizier says' to him what we",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "sagt",
                  "lemma": "sagen",
                  "pos": "verb",
                  "meaning": "says"
                },
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                }
              ]
            },
            {
              "id": "a1_s10_c42_l2",
              "original": "jetzt den Gefangenen gewähren.",
              "literal": "now grant to the prisoners.",
              "tokens": [
                {
                  "word": "jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Gefangenen",
                  "lemma": "Gefangener",
                  "pos": "noun",
                  "meaning": "prisoners"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c43",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c43_l1",
              "original": "Laßt alle schnell zurücke kehren!",
              "literal": "Let all return quickly!",
              "tokens": [
                {
                  "word": "Laßt",
                  "lemma": "laßt",
                  "pos": "noun",
                  "meaning": "let"
                },
                {
                  "word": "alle",
                  "lemma": "all",
                  "pos": "verb",
                  "meaning": "all"
                },
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly / swift"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c44",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c44_l1",
              "original": "Ihr wißt ja, wie er tobet,",
              "literal": "You know indeed how he rages,",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "ja",
                  "lemma": "ja",
                  "pos": "particle",
                  "meaning": "yes / indeed"
                },
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                }
              ]
            },
            {
              "id": "a1_s10_c44_l2",
              "original": "und kennet seine Wut.",
              "literal": "and kennet his rage.",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "seine",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "his / its"
                },
                {
                  "word": "Wut",
                  "lemma": "Wut",
                  "pos": "noun",
                  "meaning": "rage / fury"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c45",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s10_c45_l1",
              "original": "Wie mir's im Inner'n tobet,",
              "literal": "How it rages within me,",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "im",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in-the"
                }
              ]
            },
            {
              "id": "a1_s10_c45_l2",
              "original": "empöret ist mein Blut!",
              "literal": "my blood is in revolt!",
              "tokens": [
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                },
                {
                  "word": "Blut",
                  "lemma": "Blut",
                  "pos": "noun",
                  "meaning": "blood"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c46",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "für sich",
          "stageDirectionTranslation": "to oneself / aside",
          "lines": [
            {
              "id": "a1_s10_c46_l1",
              "original": "Mein Herz hat mich gelobet,",
              "literal": "My heart has me gelobet,",
              "tokens": [
                {
                  "word": "Mein",
                  "lemma": "mein",
                  "pos": "noun",
                  "meaning": "my"
                },
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "hat",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "has"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                }
              ]
            },
            {
              "id": "a1_s10_c46_l2",
              "original": "sei der Tyrann in Wut!",
              "literal": "be the tyrant in rage!",
              "tokens": [
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I)"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Tyrann",
                  "lemma": "Tyrann",
                  "pos": "noun",
                  "meaning": "tyrant"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "Wut",
                  "lemma": "Wut",
                  "pos": "noun",
                  "meaning": "rage / fury"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c47",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "Pizarro, zwei Offiziere und Wachen treten auf.",
          "stageDirectionTranslation": "Pizarro, two officers, and guards enter.",
          "lines": []
        },
        {
          "id": "a1_s10_c48",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c48_l1",
              "original": "Verwegener Alter, welche Rechte",
              "literal": "Verwegener old, which Rechte",
              "tokens": [
                {
                  "word": "Alter",
                  "lemma": "alt",
                  "pos": "adjective",
                  "meaning": "old"
                },
                {
                  "word": "welche",
                  "lemma": "welch",
                  "pos": "verb",
                  "meaning": "which / what"
                }
              ]
            },
            {
              "id": "a1_s10_c48_l2",
              "original": "legst du dir frevelnd selber bei?",
              "literal": "legst you to you frevelnd selber at?",
              "tokens": [
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to-you (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c48_l3",
              "original": "Und ziemt es dem gedung'nen Knechte,",
              "literal": "And ziemt it to the gedung'nen Knechte,",
              "tokens": [
                {
                  "word": "Und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "es",
                  "lemma": "es",
                  "pos": "pronoun",
                  "meaning": "it"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "to-the (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c48_l4",
              "original": "zu geben die Gefangenen frei?",
              "literal": "too to give the prisoners free?",
              "tokens": [
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "geben",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "to give"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Gefangenen",
                  "lemma": "Gefangener",
                  "pos": "noun",
                  "meaning": "prisoners"
                },
                {
                  "word": "frei",
                  "lemma": "frei",
                  "pos": "adjective",
                  "meaning": "free"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c49",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c49_l1",
              "original": "O Herr!",
              "literal": "O sir!",
              "tokens": [
                {
                  "word": "Herr",
                  "lemma": "Herr",
                  "pos": "noun",
                  "meaning": "sir / lord"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c50",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c50_l1",
              "original": "Wohlan!",
              "literal": "Well then! [Speak up!]",
              "tokens": [
                {
                  "word": "Wohlan",
                  "lemma": "wohlan",
                  "pos": "interjection",
                  "meaning": "come on / well then"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c51",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "verlegen",
          "stageDirectionTranslation": "embarrassed / disconcerted",
          "lines": [
            {
              "id": "a1_s10_c51_l1",
              "original": "Des Frühlings Kommen,",
              "literal": "Spring’s arrival,",
              "tokens": [
                {
                  "word": "Des",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "of-the (gen.)"
                },
                {
                  "word": "Kommen",
                  "lemma": "kommen",
                  "pos": "verb",
                  "meaning": "to come"
                }
              ]
            },
            {
              "id": "a1_s10_c51_l2",
              "original": "das heit're, warme Sonnenlicht,",
              "literal": "the heit're, warme sunlight,",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Sonnenlicht",
                  "lemma": "Sonnenlicht",
                  "pos": "noun",
                  "meaning": "sunlight"
                }
              ]
            },
            {
              "id": "a1_s10_c51_l3",
              "original": "dann ...",
              "literal": "then ...",
              "tokens": [
                {
                  "word": "dann",
                  "lemma": "dann",
                  "pos": "adverb",
                  "meaning": "then"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c52",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "sich fassend",
          "stageDirectionTranslation": "recovering composure / pulling oneself together",
          "lines": [
            {
              "id": "a1_s10_c52_l1",
              "original": "... habt ihr wohl in acht genommen,",
              "literal": "... have you probably in care taken,",
              "tokens": [
                {
                  "word": "habt",
                  "lemma": "haben",
                  "pos": "verb",
                  "meaning": "have (pl.)"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "wohl",
                  "lemma": "wohl",
                  "pos": "adverb",
                  "meaning": "probably / indeed / well"
                },
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                }
              ]
            },
            {
              "id": "a1_s10_c52_l2",
              "original": "was sonst zu meinem Vorteil spricht?",
              "literal": "what formerly / otherwise too to-my Vorteil speaks?",
              "tokens": [
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "sonst",
                  "lemma": "sonst",
                  "pos": "verb",
                  "meaning": "formerly / otherwise"
                },
                {
                  "word": "zu",
                  "lemma": "zu",
                  "pos": "adverb",
                  "meaning": "too / to"
                },
                {
                  "word": "meinem",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "to-my (dat.)"
                }
              ]
            },
            {
              "id": "a1_s10_c52_l3",
              "original": "Des Königs Namensfest ist heute,",
              "literal": "Of the of the-king Namensfest is today,",
              "tokens": [
                {
                  "word": "Des",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "of-the (gen.)"
                },
                {
                  "word": "Königs",
                  "lemma": "König",
                  "pos": "noun",
                  "meaning": "of-the-king"
                },
                {
                  "word": "ist",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "is"
                },
                {
                  "word": "heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                }
              ]
            },
            {
              "id": "a1_s10_c52_l4",
              "original": "das feiern wir auf solche Art.",
              "literal": "the feiern we on solche Art.",
              "tokens": [
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "wir",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "we"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c53",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "stageDirection": "heimlich zu Pizarro",
          "stageDirectionTranslation": "secretly to Pizarro",
          "lines": [
            {
              "id": "a1_s10_c53_l1",
              "original": "Der unten stirbt, doch laßt die Ander'n",
              "literal": "The unten dies, yet let the Ander'n",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "stirbt",
                  "lemma": "sterben",
                  "pos": "verb",
                  "meaning": "dies"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nevertheless / indeed"
                },
                {
                  "word": "laßt",
                  "lemma": "laßt",
                  "pos": "verb",
                  "meaning": "let"
                }
              ]
            },
            {
              "id": "a1_s10_c53_l2",
              "original": "jetzt fröhlich hin und wieder wandern;",
              "literal": "now merrily wander to and fro;",
              "tokens": [
                {
                  "word": "jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "hin",
                  "lemma": "hin",
                  "pos": "adverb",
                  "meaning": "thither"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            },
            {
              "id": "a1_s10_c53_l3",
              "original": "für Jenen sei der Zorn gespart!",
              "literal": "for Jenen be the wrath gespart!",
              "tokens": [
                {
                  "word": "für",
                  "lemma": "für",
                  "pos": "preposition",
                  "meaning": "for"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I)"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "Zorn",
                  "lemma": "Zorn",
                  "pos": "noun",
                  "meaning": "wrath / anger"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c54",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c54_l1",
              "original": "So eile, ihm sein Grab zu graben,",
              "literal": "So haste / hurry, to him to be grave too to dig,",
              "tokens": [
                {
                  "word": "So",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "eile",
                  "lemma": "eile",
                  "pos": "verb",
                  "meaning": "haste / hurry"
                },
                {
                  "word": "ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to-him / to-it (dat.)"
                },
                {
                  "word": "sein",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "to be"
                },
                {
                  "word": "Grab",
                  "lemma": "Grab",
                  "pos": "noun",
                  "meaning": "grave / tomb"
                }
              ]
            },
            {
              "id": "a1_s10_c54_l2",
              "original": "hier will ich stille Ruhe haben.",
              "literal": "here want I quiet peace to have.",
              "tokens": [
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / will"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "stille",
                  "lemma": "still",
                  "pos": "adjective",
                  "meaning": "quiet"
                },
                {
                  "word": "Ruhe",
                  "lemma": "Ruhe",
                  "pos": "noun",
                  "meaning": "peace / rest"
                }
              ]
            },
            {
              "id": "a1_s10_c54_l3",
              "original": "Schließ die Gefangenen wieder ein,",
              "literal": "Lock the prisoners in again,",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Gefangenen",
                  "lemma": "Gefangener",
                  "pos": "noun",
                  "meaning": "prisoners"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "verb",
                  "meaning": "a / an"
                }
              ]
            },
            {
              "id": "a1_s10_c54_l4",
              "original": "mögst du nie mehr verwegen sein!",
              "literal": "may you never be so audacious again!",
              "tokens": [
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "nie",
                  "lemma": "nie",
                  "pos": "adverb",
                  "meaning": "never"
                },
                {
                  "word": "mehr",
                  "lemma": "mehr",
                  "pos": "adverb",
                  "meaning": "more"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c55",
          "speaker": "Chorus of Prisoners",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c55_l1",
              "original": "Leb wohl, du warmes Sonnenlicht,",
              "literal": "Leb probably, you warmes sunlight,",
              "tokens": [
                {
                  "word": "wohl",
                  "lemma": "wohl",
                  "pos": "adverb",
                  "meaning": "probably / indeed / well"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "Sonnenlicht",
                  "lemma": "Sonnenlicht",
                  "pos": "noun",
                  "meaning": "sunlight"
                }
              ]
            },
            {
              "id": "a1_s10_c55_l2",
              "original": "schnell schwindest du uns wieder!",
              "literal": "quickly schwindest you us again!",
              "tokens": [
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly / swift"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "uns",
                  "lemma": "wir",
                  "pos": "pronoun",
                  "meaning": "us (acc./dat.)"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c56",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c56_l1",
              "original": "Wie eilten sie zum Sonnenlicht,",
              "literal": "How eilten she to the sunlight,",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how / as"
                },
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "zum",
                  "lemma": "zu",
                  "pos": "preposition",
                  "meaning": "to-the (masc./neut.)"
                },
                {
                  "word": "Sonnenlicht",
                  "lemma": "Sonnenlicht",
                  "pos": "noun",
                  "meaning": "sunlight"
                }
              ]
            },
            {
              "id": "a1_s10_c56_l2",
              "original": "und scheiden traurig wieder!",
              "literal": "and scheiden sad again!",
              "tokens": [
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "traurig",
                  "lemma": "traurig",
                  "pos": "adjective",
                  "meaning": "sad / sorrowful"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            },
            {
              "id": "a1_s10_c56_l3",
              "original": "LEONORE, JAQUINO",
              "literal": "LEONORE, JAQUINO",
              "tokens": []
            },
            {
              "id": "a1_s10_c56_l4",
              "original": "Ihr hört das Wort, drum zögert nicht,",
              "literal": "You hear the command, therefore hesitate not,",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you / her / their"
                },
                {
                  "word": "hört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hears"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Wort",
                  "lemma": "Wort",
                  "pos": "noun",
                  "meaning": "word"
                },
                {
                  "word": "drum",
                  "lemma": "darum",
                  "pos": "adverb",
                  "meaning": "therefore"
                }
              ]
            },
            {
              "id": "a1_s10_c56_l5",
              "original": "kehrt in den Kerker wieder!",
              "literal": "return into the dungeon again!",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Kerker",
                  "lemma": "Kerker",
                  "pos": "noun",
                  "meaning": "dungeon / prison"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c57",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c57_l1",
              "original": "Nun, Rocco, zög're länger nicht,",
              "literal": "Now, Rocco, hesitate no longer,",
              "tokens": [
                {
                  "word": "Nun",
                  "lemma": "nun",
                  "pos": "adverb",
                  "meaning": "now"
                },
                {
                  "word": "länger",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "longer"
                },
                {
                  "word": "nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                }
              ]
            },
            {
              "id": "a1_s10_c57_l2",
              "original": "steig in den Kerker nieder.",
              "literal": "descend into the dungeon.",
              "tokens": [
                {
                  "word": "in",
                  "lemma": "in",
                  "pos": "preposition",
                  "meaning": "in / into"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "Kerker",
                  "lemma": "Kerker",
                  "pos": "noun",
                  "meaning": "dungeon / prison"
                },
                {
                  "word": "nieder",
                  "lemma": "nieder",
                  "pos": "adverb",
                  "meaning": "down"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c58",
          "speaker": "Rocco",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c58_l1",
              "original": "Nein, Herr, ich zög're länger nicht,",
              "literal": "No, sir, I hesitate no longer,",
              "tokens": [
                {
                  "word": "Nein",
                  "lemma": "nein",
                  "pos": "particle",
                  "meaning": "no"
                },
                {
                  "word": "Herr",
                  "lemma": "Herr",
                  "pos": "noun",
                  "meaning": "Lord / master / sir"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "länger",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "longer"
                }
              ]
            },
            {
              "id": "a1_s10_c58_l2",
              "original": "ich steige eilend nieder!",
              "literal": "I steige eilend down!",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "nieder",
                  "lemma": "nieder",
                  "pos": "adverb",
                  "meaning": "down"
                }
              ]
            },
            {
              "id": "a1_s10_c58_l3",
              "original": "Mir beben meine Glieder!",
              "literal": "My limbs tremble!",
              "tokens": [
                {
                  "word": "Mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to-me (dat.)"
                },
                {
                  "word": "beben",
                  "lemma": "beben",
                  "pos": "verb",
                  "meaning": "to quake / tremble"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                }
              ]
            },
            {
              "id": "a1_s10_c58_l4",
              "original": "O unglücksel'ge, harte Pflicht!",
              "literal": "Oh, unfortunate, harsh duty!",
              "tokens": [
                {
                  "word": "Pflicht",
                  "lemma": "Pflicht",
                  "pos": "noun",
                  "meaning": "duty / obligation"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c59",
          "speaker": "Don Pizarro",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c59_l1",
              "original": "Nicht eher kehrst du wieder,",
              "literal": "Not eher kehrst you again,",
              "tokens": [
                {
                  "word": "Nicht",
                  "lemma": "nicht",
                  "pos": "particle",
                  "meaning": "not"
                },
                {
                  "word": "du",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "you"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again"
                }
              ]
            },
            {
              "id": "a1_s10_c59_l2",
              "original": "bis ich vollzogen das Gericht!",
              "literal": "bis I vollzogen the judgment / court!",
              "tokens": [
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "das",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (neut.) / that"
                },
                {
                  "word": "Gericht",
                  "lemma": "gericht",
                  "pos": "noun",
                  "meaning": "judgment / court"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c60",
          "speaker": "Leonore",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c60_l1",
              "original": "Angst rinnt durch meine Glieder,",
              "literal": "Fear courses through my limbs,",
              "tokens": [
                {
                  "word": "Angst",
                  "lemma": "Angst",
                  "pos": "noun",
                  "meaning": "fear / anxiety"
                },
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "verb",
                  "meaning": "my"
                }
              ]
            },
            {
              "id": "a1_s10_c60_l2",
              "original": "ereilt den Frevler kein Gericht!",
              "literal": "ereilt the Frevler no judgment / court!",
              "tokens": [
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. acc. / plur. dat.)"
                },
                {
                  "word": "kein",
                  "lemma": "kein",
                  "pos": "verb",
                  "meaning": "no / none"
                },
                {
                  "word": "Gericht",
                  "lemma": "gericht",
                  "pos": "noun",
                  "meaning": "judgment / court"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c61",
          "speaker": "Marzelline",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c61_l1",
              "original": "Die Ander'n murmeln nieder,",
              "literal": "The Ander'n murmeln down,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "noun",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "nieder",
                  "lemma": "nieder",
                  "pos": "adverb",
                  "meaning": "down"
                }
              ]
            },
            {
              "id": "a1_s10_c61_l2",
              "original": "hier wohnt die Lust, die Freude nicht!",
              "literal": "here wohnt the delight, the joy not!",
              "tokens": [
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "delight / joy / desire"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c62",
          "speaker": "Jaquino",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c62_l1",
              "original": "Sie sinnen auf und nieder!",
              "literal": "She sinnen on and down!",
              "tokens": [
                {
                  "word": "Sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "she / they / you"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "on / upon"
                },
                {
                  "word": "und",
                  "lemma": "und",
                  "pos": "conjunction",
                  "meaning": "and"
                },
                {
                  "word": "nieder",
                  "lemma": "nieder",
                  "pos": "adverb",
                  "meaning": "down"
                }
              ]
            },
            {
              "id": "a1_s10_c62_l2",
              "original": "Könnt' ich versteh'n, was jeder spricht!",
              "literal": "Can' I versteh'n, what every speaks!",
              "tokens": [
                {
                  "word": "Könnt",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can (pl.)"
                },
                {
                  "word": "ich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "I"
                },
                {
                  "word": "was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "jeder",
                  "lemma": "jeder",
                  "pos": "verb",
                  "meaning": "every"
                }
              ]
            }
          ]
        },
        {
          "id": "a1_s10_c63",
          "speaker": "Chorus",
          "pieceTitle": "Nr.10: Finale",
          "lines": [
            {
              "id": "a1_s10_c63_l1",
              "original": "Schon sinkt die Nacht hernieder,",
              "literal": "Already sinks the night hernieder,",
              "tokens": [
                {
                  "word": "Schon",
                  "lemma": "schon",
                  "pos": "adverb",
                  "meaning": "already"
                },
                {
                  "word": "sinkt",
                  "lemma": "sinken",
                  "pos": "verb",
                  "meaning": "sinks"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (fem. / plur.)"
                },
                {
                  "word": "Nacht",
                  "lemma": "Nacht",
                  "pos": "noun",
                  "meaning": "night"
                }
              ]
            },
            {
              "id": "a1_s10_c63_l2",
              "original": "aus der so bald kein Morgen bricht!",
              "literal": "out of the so soon no tomorrow bricht!",
              "tokens": [
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "out of / from"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "verb",
                  "meaning": "the (masc. nom. / fem. dat./gen.)"
                },
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "so / thus"
                },
                {
                  "word": "bald",
                  "lemma": "bald",
                  "pos": "adverb",
                  "meaning": "soon"
                },
                {
                  "word": "kein",
                  "lemma": "kein",
                  "pos": "verb",
                  "meaning": "no / none"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

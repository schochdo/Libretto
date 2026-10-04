import { Act } from '../../types/libretto';

export const tannhaeuserAct2: Act = {
  "actNumber": 2,
  "title": "Act II",
  "originalSetting": "Zweiter Aufzug: Die Sängersaal auf der Wartburg.",
  "setting": "Act II: The Minstrels' Hall at the Wartburg Castle.",
  "scenes": [
    {
      "sceneNumber": 1,
      "title": "Dich, teure Halle, grüß' ich wieder (Elisabeths Hallenarie)",
      "titleTranslation": "You, dear hall, greet I again (Elisabeth's Hall Aria)",
      "originalDescription": "Die Sängersaal auf der Wartburg. Elisabeth tritt freudig bewegt ein und begrüßt die teure Halle, die sie seit Heinrichs Fortgang gemieden hatte.",
      "description": "In the great Minstrels' Hall of the Wartburg, Elisabeth joyfully greets the hall that has remained deserted and mournful since Tannhäuser's departure.",
      "cues": [
        {
          "id": "a2_s1_c1",
          "speaker": "Stage Direction",
          "stageDirection": "Die Sängerhalle auf der Wartburg; im Hintergrunde freie Aussicht auf den Hof und das Tal",
          "stageDirectionTranslation": "The Minstrels' Hall at the Wartburg Castle; in the background, an open view of the courtyard and the valley.",
          "lines": []
        },
        {
          "id": "a2_s1_c2",
          "speaker": "Elisabeth",
          "pieceTitle": "Hallenarie (Dich, teure Halle, grüss ich wieder)",
          "lines": [
            {
              "id": "a2_s1_c2_l1",
              "original": "Dich, teure Halle, grüss ich wieder,",
              "literal": "Thee, dear hall, I greet again,",
              "tokens": [
                {
                  "word": "teure",
                  "lemma": "teuer",
                  "pos": "adjective",
                  "meaning": "dear / beloved"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                },
                {
                  "word": "grüss",
                  "lemma": "grüssen",
                  "pos": "verb",
                  "meaning": "greet / salute"
                },
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again / once more"
                }
              ],
              "grammarNote": "Fronted accusative pronoun 'Dich' addressed to the Hall of Song ('teure Halle'), personified as a revered space."
            },
            {
              "id": "a2_s1_c2_l2",
              "original": "froh grüss ich dich, geliebter Raum!",
              "literal": "joyfully I greet thee, beloved room!",
              "tokens": [
                {
                  "word": "froh",
                  "lemma": "froh",
                  "pos": "adverb",
                  "meaning": "joyfully / gladly"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "thee / you (acc.)"
                },
                {
                  "word": "geliebter",
                  "lemma": "geliebt",
                  "pos": "adjective",
                  "meaning": "beloved / cherished"
                },
                {
                  "word": "Raum",
                  "lemma": "Raum",
                  "pos": "noun",
                  "meaning": "room / space"
                }
              ],
              "grammarNote": "Inversion with initial adverbial predicate 'froh'."
            },
            {
              "id": "a2_s1_c2_l3",
              "original": "In dir erwachen seine Lieder",
              "literal": "In thee awaken his songs",
              "tokens": [
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "thee / you (dative)"
                },
                {
                  "word": "erwachen",
                  "lemma": "erwachen",
                  "pos": "verb",
                  "meaning": "awaken / stir to life"
                },
                {
                  "word": "seine",
                  "lemma": "sein",
                  "pos": "pronoun",
                  "meaning": "his"
                },
                {
                  "word": "Lieder",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "songs"
                }
              ],
              "grammarNote": "Inverted subject-verb word order ('erwachen seine Lieder')."
            },
            {
              "id": "a2_s1_c2_l4",
              "original": "und wecken mich aus düstrem Traum.",
              "literal": "and wake me from gloomy dream.",
              "tokens": [
                {
                  "word": "wecken",
                  "lemma": "wecken",
                  "pos": "verb",
                  "meaning": "wake / awaken"
                },
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "düstrem",
                  "lemma": "düster",
                  "pos": "adjective",
                  "meaning": "gloomy / dark / somber"
                },
                {
                  "word": "Traum",
                  "lemma": "Traum",
                  "pos": "noun",
                  "meaning": "dream"
                }
              ]
            },
            {
              "id": "a2_s1_c2_l5",
              "original": "Da er aus dir geschieden,",
              "literal": "Since he departed from thee,",
              "tokens": [
                {
                  "word": "Da",
                  "lemma": "da",
                  "pos": "conjunction",
                  "meaning": "since / when"
                },
                {
                  "word": "er",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "he"
                },
                {
                  "word": "geschieden",
                  "lemma": "scheiden",
                  "pos": "verb",
                  "meaning": "departed / parted"
                }
              ],
              "grammarNote": "Subordinate clause with omitted auxiliary verb 'ist' ('Da er aus dir geschieden [ist]')."
            },
            {
              "id": "a2_s1_c2_l6",
              "original": "wie öd erschienst du mir!",
              "literal": "how desolate didst thou seem to me!",
              "tokens": [
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how"
                },
                {
                  "word": "öd",
                  "lemma": "öde",
                  "pos": "adjective",
                  "meaning": "desolate / bleak / empty"
                },
                {
                  "word": "erschienst",
                  "lemma": "erscheinen",
                  "pos": "verb",
                  "meaning": "seemed / appeared (past 2nd sing.)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (dative)"
                }
              ],
              "grammarNote": "Exclamatory structure with apocope 'öd' for 'öde'."
            },
            {
              "id": "a2_s1_c2_l7",
              "original": "Aus mir entfloh der Frieden,",
              "literal": "From me peace fled,",
              "tokens": [
                {
                  "word": "Aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "from / out of"
                },
                {
                  "word": "entfloh",
                  "lemma": "entfliehen",
                  "pos": "verb",
                  "meaning": "fled / vanished"
                },
                {
                  "word": "Frieden",
                  "lemma": "Friede",
                  "pos": "noun",
                  "meaning": "peace"
                }
              ],
              "grammarNote": "Fronted prepositional phrase 'Aus mir'."
            },
            {
              "id": "a2_s1_c2_l8",
              "original": "die Freude zog aus dir!",
              "literal": "joy departed from thee!",
              "tokens": [
                {
                  "word": "Freude",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joy / gladness"
                },
                {
                  "word": "zog",
                  "lemma": "ziehen",
                  "pos": "verb",
                  "meaning": "moved / departed"
                },
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "out of / from"
                }
              ]
            },
            {
              "id": "a2_s1_c2_l9",
              "original": "Wie jetzt mein Busen hoch sich hebet,",
              "literal": "As now my bosom heaves high,",
              "tokens": [
                {
                  "word": "Busen",
                  "lemma": "Busen",
                  "pos": "noun",
                  "meaning": "bosom / breast"
                },
                {
                  "word": "hoch",
                  "lemma": "hoch",
                  "pos": "adverb",
                  "meaning": "high"
                },
                {
                  "word": "hebet",
                  "lemma": "heben",
                  "pos": "verb",
                  "meaning": "heaves / rises (reflexive)"
                }
              ],
              "grammarNote": "Reflexive verb 'sich heben' in subordinate clause with archaic third-person ending '-et'."
            },
            {
              "id": "a2_s1_c2_l10",
              "original": "so scheinst du jetzt mir stolz und hehr,",
              "literal": "so thou seemest now to me proud and noble,",
              "tokens": [
                {
                  "word": "scheinst",
                  "lemma": "scheinen",
                  "pos": "verb",
                  "meaning": "seemest / appearest"
                },
                {
                  "word": "stolz",
                  "lemma": "stolz",
                  "pos": "adjective",
                  "meaning": "proud"
                },
                {
                  "word": "hehr",
                  "lemma": "hehr",
                  "pos": "adjective",
                  "meaning": "noble / sublime / exalted"
                }
              ],
              "grammarNote": "Correlative construction 'Wie... so...' linking Elisabeth's emotion with the hall's appearance."
            },
            {
              "id": "a2_s1_c2_l11",
              "original": "der mich und dich so neu belebet,",
              "literal": "he who so newly revives me and thee,",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "he who / the one that (relative pronoun)"
                },
                {
                  "word": "neu",
                  "lemma": "neu",
                  "pos": "adverb",
                  "meaning": "anew / newly"
                },
                {
                  "word": "belebet",
                  "lemma": "beleben",
                  "pos": "verb",
                  "meaning": "revives / animates"
                }
              ],
              "grammarNote": "Relative pronoun 'der' referring back to Tannhäuser ('he who...')."
            },
            {
              "id": "a2_s1_c2_l12",
              "original": "nicht weilt er ferne mehr!",
              "literal": "he lingers far away no more!",
              "tokens": [
                {
                  "word": "weilt",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "lingers / dwells"
                },
                {
                  "word": "ferne",
                  "lemma": "fern",
                  "pos": "adverb",
                  "meaning": "far away / afar"
                },
                {
                  "word": "mehr",
                  "lemma": "mehr",
                  "pos": "adverb",
                  "meaning": "more / any longer"
                }
              ]
            },
            {
              "id": "a2_s1_c2_l13",
              "original": "Sei mir gegrüsst!",
              "literal": "Be greeted by me!",
              "tokens": [
                {
                  "word": "Sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (imperative)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "by me / to me (ethical dative)"
                },
                {
                  "word": "gegrüsst",
                  "lemma": "grüssen",
                  "pos": "verb",
                  "meaning": "greeted / saluted"
                }
              ],
              "grammarNote": "Passive imperative construction with ethical/agentive dative 'mir', a classic formula of solemn salutation."
            },
            {
              "id": "a2_s1_c2_l14",
              "original": "Sei mir gegrüsst!",
              "literal": "Be greeted by me!",
              "tokens": [
                {
                  "word": "Sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (imperative)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "by me / to me (ethical dative)"
                },
                {
                  "word": "gegrüsst",
                  "lemma": "grüssen",
                  "pos": "verb",
                  "meaning": "greeted / saluted"
                }
              ],
              "grammarNote": "Passive imperative construction with ethical/agentive dative 'mir', a classic formula of solemn salutation."
            },
            {
              "id": "a2_s1_c2_l15",
              "original": "Du, teure Halle,",
              "literal": "Thou, dear hall,",
              "tokens": [
                {
                  "word": "teure",
                  "lemma": "teuer",
                  "pos": "adjective",
                  "meaning": "dear / beloved"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                }
              ],
              "grammarNote": "Direct vocative apostrophe."
            },
            {
              "id": "a2_s1_c2_l16",
              "original": "Sei mir gegrüsst!",
              "literal": "Be greeted by me!",
              "tokens": [
                {
                  "word": "Sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (imperative)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "by me / to me (ethical dative)"
                },
                {
                  "word": "gegrüsst",
                  "lemma": "grüssen",
                  "pos": "verb",
                  "meaning": "greeted / saluted"
                }
              ],
              "grammarNote": "Passive imperative construction with ethical/agentive dative 'mir', a classic formula of solemn salutation."
            }
          ]
        },
        {
          "id": "a2_s1_c3",
          "speaker": "Elisabeth",
          "stageDirection": "Tannhäuser, von Wolfram geleitet, tritt mit diesem aus der Treppe im Hintergrunde auf",
          "stageDirectionTranslation": "Tannhäuser, led by Wolfram, enters with him from the stairs in the background.",
          "lines": []
        }
      ]
    },
    {
      "sceneNumber": 2,
      "title": "Dort ist sie; nahe dich ihr ungestört! (Heinrich und Elisabeth)",
      "titleTranslation": "There is she; approach her undisturbed! (Heinrich and Elisabeth)",
      "originalDescription": "Wolfram führt Tannhäuser zu Elisabeth. In schüchterner Seligkeit gestehen beide einander ihre wiedererwachte Liebe.",
      "description": "Wolfram brings Heinrich before Elisabeth. The two lovers are rapturously reunited, praising the divine grace that brought Heinrich back.",
      "cues": [
        {
          "id": "a2_s2_c1",
          "speaker": "Stage Direction",
          "stageDirection": "Elisabeth erblickt Tannhäuser",
          "stageDirectionTranslation": "Elisabeth catches sight of Tannhäuser.",
          "lines": []
        },
        {
          "id": "a2_s2_c2",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "zu Tannhäuser",
          "stageDirectionTranslation": "to Tannhäuser",
          "lines": [
            {
              "id": "a2_s2_c2_l1",
              "original": "Dort ist sie: nahe dich ihr ungestört!",
              "literal": "There she is: approach her undisturbed!",
              "tokens": [
                {
                  "word": "Dort",
                  "lemma": "dort",
                  "pos": "adverb",
                  "meaning": "there"
                },
                {
                  "word": "nahe dich",
                  "lemma": "nahen",
                  "pos": "verb",
                  "meaning": "approach (reflexive imperative)"
                },
                {
                  "word": "ihr",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "her (dative)"
                },
                {
                  "word": "ungestört",
                  "lemma": "ungestört",
                  "pos": "adjective",
                  "meaning": "undisturbed"
                }
              ],
              "grammarNote": "Reflexive imperative 'nahe dich' governing dative 'ihr'."
            }
          ]
        },
        {
          "id": "a2_s2_c3",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "Er bleibt an die Mauerbrüstung gelehnt im Hintergrund",
          "stageDirectionTranslation": "He remains leaning against the stone parapet in the background.",
          "lines": []
        },
        {
          "id": "a2_s2_c4",
          "speaker": "Tannhäuser",
          "stageDirection": "stürzt ungestüm zu den Füssen Elisabeths",
          "stageDirectionTranslation": "rushes impetuously to Elisabeth's feet",
          "lines": [
            {
              "id": "a2_s2_c4_l1",
              "original": "O Fürstin!",
              "literal": "O Princess!",
              "tokens": [
                {
                  "word": "O",
                  "lemma": "o",
                  "pos": "interjection",
                  "meaning": "oh / o"
                },
                {
                  "word": "Fürstin",
                  "lemma": "Fürstin",
                  "pos": "noun",
                  "meaning": "princess / sovereign lady"
                }
              ],
              "grammarNote": "Formal courtly vocative title addressed to Elisabeth."
            }
          ]
        },
        {
          "id": "a2_s2_c5",
          "speaker": "Elisabeth",
          "stageDirection": "in schüchterner Verwirrung",
          "stageDirectionTranslation": "in timid confusion",
          "lines": [
            {
              "id": "a2_s2_c5_l1",
              "original": "Gott! Stehet auf! Lasst mich!",
              "literal": "God! Arise! Leave me!",
              "tokens": [
                {
                  "word": "Stehet auf",
                  "lemma": "aufstehen",
                  "pos": "verb",
                  "meaning": "stand up / arise (formal 2nd pers. pl.)"
                },
                {
                  "word": "Lasst",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "leave / let (formal 2nd pers. pl.)"
                }
              ],
              "grammarNote": "Formal archaic 2nd-person plural address ('Stehet', 'Lasst') used in high courtly register."
            },
            {
              "id": "a2_s2_c5_l2",
              "original": "Nicht darf ich Euch hier sehn!",
              "literal": "I must not see you here!",
              "tokens": [
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "Euch",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "you (formal 2nd pers. pl. acc.)"
                },
                {
                  "word": "sehn",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see"
                }
              ],
              "grammarNote": "Negated modal 'dürfen' expresses prohibition ('I must not / may not'). Courtly 'Euch'."
            }
          ]
        },
        {
          "id": "a2_s2_c6",
          "speaker": "Elisabeth",
          "stageDirection": "Sie macht eine Bewegung, sich zu entfernen",
          "stageDirectionTranslation": "She makes a movement to depart.",
          "lines": []
        },
        {
          "id": "a2_s2_c7",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s2_c7_l1",
              "original": "Du darfst! O bleib, und lass'",
              "literal": "Thou mayest! O stay, and let",
              "tokens": [
                {
                  "word": "darfst",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "mayest / art permitted"
                },
                {
                  "word": "bleib",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "stay / remain (imperative)"
                },
                {
                  "word": "lass",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / allow (imperative)"
                }
              ],
              "grammarNote": "Tannhäuser uses intimate 'du' in contrast to Elisabeth's formal 'Ihr'. Apocope in 'lass''."
            },
            {
              "id": "a2_s2_c7_l2",
              "original": "zu deinen Füssen mich!",
              "literal": "me at thy feet!",
              "tokens": [
                {
                  "word": "Füssen",
                  "lemma": "Fuss",
                  "pos": "noun",
                  "meaning": "feet (dative plural)"
                },
                {
                  "word": "deinen",
                  "lemma": "dein",
                  "pos": "pronoun",
                  "meaning": "thy / your"
                }
              ],
              "grammarNote": "Elliptical clause depending on 'lass' from the previous line."
            }
          ]
        },
        {
          "id": "a2_s2_c8",
          "speaker": "Elisabeth",
          "stageDirection": "wendet sich ihm freundlich zu",
          "stageDirectionTranslation": "turns to him amiably",
          "lines": [
            {
              "id": "a2_s2_c8_l1",
              "original": "So stehet auf!",
              "literal": "Then arise!",
              "tokens": [
                {
                  "word": "So",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "then / so"
                },
                {
                  "word": "stehet auf",
                  "lemma": "aufstehen",
                  "pos": "verb",
                  "meaning": "arise / stand up (formal imperative)"
                }
              ]
            },
            {
              "id": "a2_s2_c8_l2",
              "original": "Nicht sollet hier Ihr knien, denn diese Halle",
              "literal": "You should not kneel here, for this hall",
              "tokens": [
                {
                  "word": "sollet",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "should / ought (archaic 2nd pl.)"
                },
                {
                  "word": "knien",
                  "lemma": "knien",
                  "pos": "verb",
                  "meaning": "kneel"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                }
              ],
              "grammarNote": "Inverted word order with courtly pronoun 'Ihr'."
            },
            {
              "id": "a2_s2_c8_l3",
              "original": "ist Euer Königreich. O stehet auf!",
              "literal": "is your kingdom. O arise!",
              "tokens": [
                {
                  "word": "Euer",
                  "lemma": "euer",
                  "pos": "pronoun",
                  "meaning": "your (formal 2nd pl.)"
                },
                {
                  "word": "Königreich",
                  "lemma": "Königreich",
                  "pos": "noun",
                  "meaning": "kingdom / realm"
                },
                {
                  "word": "stehet auf",
                  "lemma": "aufstehen",
                  "pos": "verb",
                  "meaning": "arise / stand up"
                }
              ]
            },
            {
              "id": "a2_s2_c8_l4",
              "original": "Nehmt meinen Dank, dass Ihr zurückgekehrt!",
              "literal": "Accept my thanks that you have returned!",
              "tokens": [
                {
                  "word": "Nehmt",
                  "lemma": "nehmen",
                  "pos": "verb",
                  "meaning": "take / accept (imperative 2nd pl.)"
                },
                {
                  "word": "Dank",
                  "lemma": "Dank",
                  "pos": "noun",
                  "meaning": "thanks / gratitude"
                },
                {
                  "word": "zurückgekehrt",
                  "lemma": "zurückkehren",
                  "pos": "verb",
                  "meaning": "returned"
                }
              ],
              "grammarNote": "Omission of auxiliary 'seid' in subordinate clause ('dass Ihr zurückgekehrt [seid]')."
            },
            {
              "id": "a2_s2_c8_l5",
              "original": "Wo weiltet Ihr so lange?",
              "literal": "Where did you linger so long?",
              "tokens": [
                {
                  "word": "weiltet",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "lingered / tarried (past 2nd pl.)"
                },
                {
                  "word": "lange",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "long / for a long time"
                }
              ]
            }
          ]
        },
        {
          "id": "a2_s2_c9",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s2_c9_l1",
              "original": "Fern von hier,",
              "literal": "Far from here,",
              "tokens": [
                {
                  "word": "Fern",
                  "lemma": "fern",
                  "pos": "adverb",
                  "meaning": "far"
                },
                {
                  "word": "hier",
                  "lemma": "hier",
                  "pos": "adverb",
                  "meaning": "here"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from"
                }
              ]
            },
            {
              "id": "a2_s2_c9_l2",
              "original": "in weiten, weiten Landen; dichtes Vergessen",
              "literal": "in distant, distant lands; thick oblivion",
              "tokens": [
                {
                  "word": "weiten",
                  "lemma": "weit",
                  "pos": "adjective",
                  "meaning": "distant / far-flung"
                },
                {
                  "word": "Landen",
                  "lemma": "Land",
                  "pos": "noun",
                  "meaning": "lands (dative plural)"
                },
                {
                  "word": "dichtes",
                  "lemma": "dicht",
                  "pos": "adjective",
                  "meaning": "thick / dense"
                },
                {
                  "word": "Vergessen",
                  "lemma": "Vergessen",
                  "pos": "noun",
                  "meaning": "oblivion / forgetting"
                }
              ],
              "grammarNote": "Substantivized infinitive 'das Vergessen' meaning oblivion."
            },
            {
              "id": "a2_s2_c9_l3",
              "original": "hat zwischen heut und gestern sich gesenkt.",
              "literal": "has lowered itself between today and yesterday.",
              "tokens": [
                {
                  "word": "heut",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                },
                {
                  "word": "gestern",
                  "lemma": "gestern",
                  "pos": "adverb",
                  "meaning": "yesterday"
                },
                {
                  "word": "gesenkt",
                  "lemma": "senken",
                  "pos": "verb",
                  "meaning": "lowered / descended (reflexive)"
                }
              ],
              "grammarNote": "Reflexive perfect 'hat... sich gesenkt'."
            },
            {
              "id": "a2_s2_c9_l4",
              "original": "All mein Erinnern ist mir schnell geschwunden,",
              "literal": "All my memory has quickly vanished from me,",
              "tokens": [
                {
                  "word": "Erinnern",
                  "lemma": "Erinnern",
                  "pos": "noun",
                  "meaning": "memory / remembering"
                },
                {
                  "word": "schnell",
                  "lemma": "schnell",
                  "pos": "adverb",
                  "meaning": "quickly"
                },
                {
                  "word": "geschwunden",
                  "lemma": "schwinden",
                  "pos": "verb",
                  "meaning": "vanished / faded"
                }
              ],
              "grammarNote": "Substantivized infinitive 'Erinnern' with dative of loss 'mir'."
            },
            {
              "id": "a2_s2_c9_l5",
              "original": "und nur des Einen muss ich mich entsinnen,",
              "literal": "and only of the one thing must I bethink myself,",
              "tokens": [
                {
                  "word": "des Einen",
                  "lemma": "einer",
                  "pos": "pronoun",
                  "meaning": "of the one thing (genitive)"
                },
                {
                  "word": "entsinnen",
                  "lemma": "entsinnen",
                  "pos": "verb",
                  "meaning": "remember / recall (reflexive)"
                }
              ],
              "grammarNote": "Reflexive verb 'sich entsinnen' governing genitive 'des Einen'."
            },
            {
              "id": "a2_s2_c9_l6",
              "original": "dass ich nie mehr gehofft, Euch zu begrüssen,",
              "literal": "that I never again hoped to greet you,",
              "tokens": [
                {
                  "word": "gehofft",
                  "lemma": "hoffen",
                  "pos": "verb",
                  "meaning": "hoped"
                },
                {
                  "word": "begrüssen",
                  "lemma": "begrüssen",
                  "pos": "verb",
                  "meaning": "greet / welcome"
                }
              ],
              "grammarNote": "Infinitive clause dependent on 'gehofft' with omitted auxiliary 'hatte'."
            },
            {
              "id": "a2_s2_c9_l7",
              "original": "noch je zu Euch mein Auge zu erheben.",
              "literal": "nor ever to raise my eye to you.",
              "tokens": [
                {
                  "word": "Auge",
                  "lemma": "Auge",
                  "pos": "noun",
                  "meaning": "eye"
                },
                {
                  "word": "erheben",
                  "lemma": "erheben",
                  "pos": "verb",
                  "meaning": "raise / lift"
                }
              ]
            }
          ]
        },
        {
          "id": "a2_s2_c10",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s2_c10_l1",
              "original": "Was war es dann, das Euch zurückgeführt?",
              "literal": "What was it then that brought you back?",
              "tokens": [
                {
                  "word": "zurückgeführt",
                  "lemma": "zurückführen",
                  "pos": "verb",
                  "meaning": "brought back / led back"
                }
              ],
              "grammarNote": "Relative clause with omitted auxiliary 'hat' ('das Euch zurückgeführt [hat]')."
            }
          ]
        },
        {
          "id": "a2_s2_c11",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s2_c11_l1",
              "original": "Ein Wunder war's,",
              "literal": "A wonder it was,",
              "tokens": [
                {
                  "word": "Wunder",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "miracle / wonder"
                },
                {
                  "word": "war's",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "it was (contraction of war es)"
                }
              ],
              "grammarNote": "Contraction 'war's' for 'war es'."
            },
            {
              "id": "a2_s2_c11_l2",
              "original": "ein unbegreiflich hohes Wunder!",
              "literal": "an incomprehensibly exalted miracle!",
              "tokens": [
                {
                  "word": "unbegreiflich",
                  "lemma": "unbegreiflich",
                  "pos": "adverb",
                  "meaning": "incomprehensibly / unfathomably"
                },
                {
                  "word": "hohes",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high / exalted"
                },
                {
                  "word": "Wunder",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "miracle / wonder"
                }
              ]
            }
          ]
        },
        {
          "id": "a2_s2_c12",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s2_c12_l1",
              "original": "Ich preise dieses Wunder",
              "literal": "I praise this miracle",
              "tokens": [
                {
                  "word": "preise",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praise / laud"
                },
                {
                  "word": "Wunder",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "miracle"
                }
              ]
            },
            {
              "id": "a2_s2_c12_l2",
              "original": "aus meines Herzens Tiefe!",
              "literal": "from the depth of my heart!",
              "tokens": [
                {
                  "word": "Herzens",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart (genitive)"
                },
                {
                  "word": "Tiefe",
                  "lemma": "Tiefe",
                  "pos": "noun",
                  "meaning": "depth"
                }
              ],
              "grammarNote": "Pre-positioned genitive 'meines Herzens Tiefe'."
            }
          ]
        },
        {
          "id": "a2_s2_c13",
          "speaker": "Elisabeth",
          "stageDirection": "sich mässigend, in Verwirrung",
          "stageDirectionTranslation": "controlling himself, in confusion",
          "lines": [
            {
              "id": "a2_s2_c13_l1",
              "original": "Verzeiht, wenn ich nicht weiss, was ich beginne!",
              "literal": "Forgive me if I know not what I do!",
              "tokens": [
                {
                  "word": "Verzeiht",
                  "lemma": "verzeihen",
                  "pos": "verb",
                  "meaning": "forgive / pardon (imperative pl.)"
                },
                {
                  "word": "weiss",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "know"
                },
                {
                  "word": "beginne",
                  "lemma": "beginnen",
                  "pos": "verb",
                  "meaning": "undertake / do"
                }
              ],
              "grammarNote": "Idiomatic use of 'beginnen' meaning 'to do / to conduct oneself'."
            },
            {
              "id": "a2_s2_c13_l2",
              "original": "Im Traum bin ich und tör'ger als ein Kind,",
              "literal": "In a dream I am and more foolish than a child,",
              "tokens": [
                {
                  "word": "Traum",
                  "lemma": "Traum",
                  "pos": "noun",
                  "meaning": "dream"
                },
                {
                  "word": "tör'ger",
                  "lemma": "töricht",
                  "pos": "adjective",
                  "meaning": "more foolish (comparative)"
                },
                {
                  "word": "Kind",
                  "lemma": "Kind",
                  "pos": "noun",
                  "meaning": "child"
                }
              ],
              "grammarNote": "Apocope in comparative adjective 'tör'ger' for 'törichter'."
            },
            {
              "id": "a2_s2_c13_l3",
              "original": "machtlos der Macht der Wunder preisgegeben.",
              "literal": "powerless, abandoned to the power of miracles.",
              "tokens": [
                {
                  "word": "machtlos",
                  "lemma": "machtlos",
                  "pos": "adjective",
                  "meaning": "powerless"
                },
                {
                  "word": "Macht",
                  "lemma": "Macht",
                  "pos": "noun",
                  "meaning": "power / might"
                },
                {
                  "word": "preisgegeben",
                  "lemma": "preisgeben",
                  "pos": "verb",
                  "meaning": "surrendered / abandoned"
                }
              ],
              "grammarNote": "Polyptoton with 'machtlos' and 'Macht'. 'Preisgegeben' governs dative 'der Macht'."
            },
            {
              "id": "a2_s2_c13_l4",
              "original": "Fast kenn ich mich nicht mehr... O helfet mir,",
              "literal": "Scarcely do I know myself anymore... O help me,",
              "tokens": [
                {
                  "word": "Fast",
                  "lemma": "fast",
                  "pos": "adverb",
                  "meaning": "almost / scarcely"
                },
                {
                  "word": "helfet",
                  "lemma": "helfen",
                  "pos": "verb",
                  "meaning": "help (imperative 2nd pl.)"
                }
              ],
              "grammarNote": "Courtly imperative 'helfet' with dative 'mir'."
            },
            {
              "id": "a2_s2_c13_l5",
              "original": "dass ich das Rätsel meines Herzens löse!",
              "literal": "that I may solve the riddle of my heart!",
              "tokens": [
                {
                  "word": "Rätsel",
                  "lemma": "Rätsel",
                  "pos": "noun",
                  "meaning": "riddle / enigma"
                },
                {
                  "word": "Herzens",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart (genitive)"
                },
                {
                  "word": "löse",
                  "lemma": "lösen",
                  "pos": "verb",
                  "meaning": "solve / unravel"
                }
              ],
              "grammarNote": "Subjunctive I 'löse' expressing purpose."
            },
            {
              "id": "a2_s2_c13_l6",
              "original": "Der Sänger klugen Weisen",
              "literal": "To the singers' clever melodies",
              "tokens": [
                {
                  "word": "Sänger",
                  "lemma": "Sänger",
                  "pos": "noun",
                  "meaning": "singers / minstrels (genitive pl.)"
                },
                {
                  "word": "klugen",
                  "lemma": "klug",
                  "pos": "adjective",
                  "meaning": "clever / artful"
                },
                {
                  "word": "Weisen",
                  "lemma": "Weise",
                  "pos": "noun",
                  "meaning": "melodies / tunes (dative pl.)"
                }
              ],
              "grammarNote": "Fronted dative object dependent on 'lauscht ich' in the next line."
            },
            {
              "id": "a2_s2_c13_l7",
              "original": "lauscht ich sonst wohl gern und viel;",
              "literal": "I once listened gladly and often;",
              "tokens": [
                {
                  "word": "lauscht",
                  "lemma": "lauschen",
                  "pos": "verb",
                  "meaning": "listened (past)"
                },
                {
                  "word": "sonst",
                  "lemma": "sonst",
                  "pos": "adverb",
                  "meaning": "formerly / usually"
                },
                {
                  "word": "gern",
                  "lemma": "gern",
                  "pos": "adverb",
                  "meaning": "gladly"
                },
                {
                  "word": "viel",
                  "lemma": "viel",
                  "pos": "adverb",
                  "meaning": "much / often"
                }
              ],
              "grammarNote": "'Lauschen' governs dative 'Der Sänger klugen Weisen'."
            },
            {
              "id": "a2_s2_c13_l8",
              "original": "ihr Singen und ihr Preisen",
              "literal": "their singing and their praising",
              "tokens": [
                {
                  "word": "Singen",
                  "lemma": "Singen",
                  "pos": "noun",
                  "meaning": "singing"
                },
                {
                  "word": "Preisen",
                  "lemma": "Preisen",
                  "pos": "noun",
                  "meaning": "praising"
                }
              ],
              "grammarNote": "Substantivized infinitives."
            },
            {
              "id": "a2_s2_c13_l9",
              "original": "schien mir ein holdes Spiel.",
              "literal": "seemed to me a lovely diversion.",
              "tokens": [
                {
                  "word": "schien",
                  "lemma": "scheinen",
                  "pos": "verb",
                  "meaning": "seemed"
                },
                {
                  "word": "holdes",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "lovely / graceful"
                },
                {
                  "word": "Spiel",
                  "lemma": "Spiel",
                  "pos": "noun",
                  "meaning": "play / game / diversion"
                }
              ]
            },
            {
              "id": "a2_s2_c13_l10",
              "original": "Doch welch ein seltsam neues Leben",
              "literal": "Yet what a strange new life",
              "tokens": [
                {
                  "word": "seltsam",
                  "lemma": "seltsam",
                  "pos": "adjective",
                  "meaning": "strange / wondrous"
                },
                {
                  "word": "neues",
                  "lemma": "neu",
                  "pos": "adjective",
                  "meaning": "new"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Exclamatory phrase introducing direct object of 'rief'."
            },
            {
              "id": "a2_s2_c13_l11",
              "original": "rief Euer Lied mir in die Brust!",
              "literal": "did your song evoke in my breast!",
              "tokens": [
                {
                  "word": "rief",
                  "lemma": "rufen",
                  "pos": "verb",
                  "meaning": "called / evoked"
                },
                {
                  "word": "Lied",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "song"
                },
                {
                  "word": "Brust",
                  "lemma": "Brust",
                  "pos": "noun",
                  "meaning": "breast / heart"
                }
              ],
              "grammarNote": "Inversion with subject 'Euer Lied' and ethical dative 'mir'."
            },
            {
              "id": "a2_s2_c13_l12",
              "original": "Bald wollt es mich wie Schmerz durchbeben,",
              "literal": "At times it would tremble through me like pain,",
              "tokens": [
                {
                  "word": "Bald",
                  "lemma": "bald",
                  "pos": "adverb",
                  "meaning": "at times (correlative: bald... bald...)"
                },
                {
                  "word": "durchbeben",
                  "lemma": "durchbeben",
                  "pos": "verb",
                  "meaning": "quiver through / tremble through"
                },
                {
                  "word": "Schmerz",
                  "lemma": "Schmerz",
                  "pos": "noun",
                  "meaning": "pain / grief"
                }
              ],
              "grammarNote": "Correlative 'Bald... bald...' ('at times... at other times...'). Modal 'wollte' expressing habitual emergence."
            },
            {
              "id": "a2_s2_c13_l13",
              "original": "bald drang's in mich wie jähe Lust;",
              "literal": "at times it penetrated into me like sudden joy;",
              "tokens": [
                {
                  "word": "drang's",
                  "lemma": "dringen",
                  "pos": "verb",
                  "meaning": "penetrated / surged (contraction of drang es)"
                },
                {
                  "word": "jähe",
                  "lemma": "jäh",
                  "pos": "adjective",
                  "meaning": "sudden / fierce"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "delight / joy / pleasure"
                }
              ],
              "grammarNote": "Contraction 'drang's' for 'drang es'."
            },
            {
              "id": "a2_s2_c13_l14",
              "original": "Gefühle, die ich nie empfunden,",
              "literal": "Feelings that I had never felt,",
              "tokens": [
                {
                  "word": "Gefühle",
                  "lemma": "Gefühl",
                  "pos": "noun",
                  "meaning": "feelings"
                },
                {
                  "word": "empfunden",
                  "lemma": "empfinden",
                  "pos": "verb",
                  "meaning": "felt / experienced"
                }
              ],
              "grammarNote": "Relative clause with omitted auxiliary 'hatte'."
            },
            {
              "id": "a2_s2_c13_l15",
              "original": "Verlangen, das ich nie gekannt!",
              "literal": "Longing that I had never known!",
              "tokens": [
                {
                  "word": "Verlangen",
                  "lemma": "Verlangen",
                  "pos": "noun",
                  "meaning": "longing / desire"
                },
                {
                  "word": "gekannt",
                  "lemma": "kennen",
                  "pos": "verb",
                  "meaning": "known"
                }
              ],
              "grammarNote": "Relative clause with omitted auxiliary 'hatte'."
            },
            {
              "id": "a2_s2_c13_l16",
              "original": "Was sonst mir lieblich, war verschwunden",
              "literal": "What was once lovely to me had vanished",
              "tokens": [
                {
                  "word": "lieblich",
                  "lemma": "lieblich",
                  "pos": "adjective",
                  "meaning": "lovely / pleasing"
                },
                {
                  "word": "verschwunden",
                  "lemma": "verschwinden",
                  "pos": "verb",
                  "meaning": "vanished / disappeared"
                }
              ],
              "grammarNote": "Relative clause 'Was sonst mir lieblich [war]' with copula omitted."
            },
            {
              "id": "a2_s2_c13_l17",
              "original": "vor Wonnen, die noch nie genannt!",
              "literal": "before delights that were never yet named!",
              "tokens": [
                {
                  "word": "Wonnen",
                  "lemma": "Wonne",
                  "pos": "noun",
                  "meaning": "delights / raptures"
                },
                {
                  "word": "genannt",
                  "lemma": "nennen",
                  "pos": "verb",
                  "meaning": "named"
                }
              ],
              "grammarNote": "Passive relative clause with omitted auxiliary 'wurden' ('die noch nie genannt [wurden]')."
            },
            {
              "id": "a2_s2_c13_l18",
              "original": "Und als Ihr nun von uns gegangen,",
              "literal": "And when you had now gone from us,",
              "tokens": [
                {
                  "word": "gegangen",
                  "lemma": "gehen",
                  "pos": "verb",
                  "meaning": "gone / departed"
                }
              ],
              "grammarNote": "Subordinate temporal clause with omitted auxiliary 'seid' ('gegangen [seid]')."
            },
            {
              "id": "a2_s2_c13_l19",
              "original": "war Frieden mir und Lust dahin;",
              "literal": "peace and joy were gone from me;",
              "tokens": [
                {
                  "word": "Frieden",
                  "lemma": "Friede",
                  "pos": "noun",
                  "meaning": "peace"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "joy / delight"
                },
                {
                  "word": "dahin",
                  "lemma": "dahin",
                  "pos": "adverb",
                  "meaning": "gone / vanished"
                }
              ],
              "grammarNote": "Predicate adverb 'dahin' expressing complete departure."
            },
            {
              "id": "a2_s2_c13_l20",
              "original": "die Weisen, die die Sänger sangen,",
              "literal": "the melodies that the singers sang",
              "tokens": [
                {
                  "word": "Weisen",
                  "lemma": "Weise",
                  "pos": "noun",
                  "meaning": "melodies"
                },
                {
                  "word": "Sänger",
                  "lemma": "Sänger",
                  "pos": "noun",
                  "meaning": "singers"
                },
                {
                  "word": "sangen",
                  "lemma": "singen",
                  "pos": "verb",
                  "meaning": "sang"
                }
              ],
              "grammarNote": "Relative pronoun 'die' referring to 'Weisen'."
            },
            {
              "id": "a2_s2_c13_l21",
              "original": "erschienen matt mir, trüb ihr Sinn;",
              "literal": "appeared faint to me, dull their meaning;",
              "tokens": [
                {
                  "word": "matt",
                  "lemma": "matt",
                  "pos": "adjective",
                  "meaning": "faint / lifeless / dull"
                },
                {
                  "word": "trüb",
                  "lemma": "trüb",
                  "pos": "adjective",
                  "meaning": "dim / obscure / bleak"
                },
                {
                  "word": "Sinn",
                  "lemma": "Sinn",
                  "pos": "noun",
                  "meaning": "meaning / sense / spirit"
                }
              ],
              "grammarNote": "Elliptical parallel clause '[und] trüb [war] ihr Sinn'."
            },
            {
              "id": "a2_s2_c13_l22",
              "original": "im Traume fühlt ich dumpfe Schmerzen,",
              "literal": "in dreams I felt dull aches,",
              "tokens": [
                {
                  "word": "dumpfe",
                  "lemma": "dumpf",
                  "pos": "adjective",
                  "meaning": "dull / heavy / hollow"
                },
                {
                  "word": "Schmerzen",
                  "lemma": "Schmerz",
                  "pos": "noun",
                  "meaning": "pains / aches"
                }
              ]
            },
            {
              "id": "a2_s2_c13_l23",
              "original": "mein Wachen ward trübsel'ger Wahn;",
              "literal": "my waking became mournful delusion; —",
              "tokens": [
                {
                  "word": "Wachen",
                  "lemma": "Wachen",
                  "pos": "noun",
                  "meaning": "waking"
                },
                {
                  "word": "trübsel'ger",
                  "lemma": "trübselig",
                  "pos": "adjective",
                  "meaning": "mournful / sorrowful"
                },
                {
                  "word": "Wahn",
                  "lemma": "Wahn",
                  "pos": "noun",
                  "meaning": "delusion / madness"
                }
              ],
              "grammarNote": "Substantivized infinitive 'das Wachen'. 'Ward' is archaic preterite of 'werden'."
            },
            {
              "id": "a2_s2_c13_l24",
              "original": "die Freude zog aus meinem Herzen:",
              "literal": "joy departed from my heart: —",
              "tokens": [
                {
                  "word": "Freude",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joy"
                },
                {
                  "word": "zog",
                  "lemma": "ziehen",
                  "pos": "verb",
                  "meaning": "departed / withdrew"
                },
                {
                  "word": "Herzen",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                }
              ]
            },
            {
              "id": "a2_s2_c13_l25",
              "original": "Heinrich! Heinrich! Was tatet Ihr mir an?",
              "literal": "Heinrich! Heinrich! What did you do to me?",
              "tokens": [
                {
                  "word": "tatet",
                  "lemma": "antun",
                  "pos": "verb",
                  "meaning": "did (to me) / inflicted"
                }
              ],
              "grammarNote": "Separable verb 'antun' ('Was tatet Ihr mir an?') expressing infliction of emotional torment."
            }
          ]
        },
        {
          "id": "a2_s2_c14",
          "speaker": "Tannhäuser",
          "stageDirection": "begeistert",
          "stageDirectionTranslation": "enthusiastically / inspired",
          "lines": [
            {
              "id": "a2_s2_c14_l1",
              "original": "Den Gott der Liebe sollst du preisen!",
              "literal": "The God of Love shalt thou praise!",
              "tokens": [
                {
                  "word": "Gott",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "preisen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praise"
                }
              ],
              "grammarNote": "Fronted accusative object 'Den Gott der Liebe'."
            },
            {
              "id": "a2_s2_c14_l2",
              "original": "Er hat die Saiten mir berührt,",
              "literal": "He touched the strings for me,",
              "tokens": [
                {
                  "word": "Saiten",
                  "lemma": "Saite",
                  "pos": "noun",
                  "meaning": "strings"
                },
                {
                  "word": "berührt",
                  "lemma": "berühren",
                  "pos": "verb",
                  "meaning": "touched"
                }
              ],
              "grammarNote": "Dative of interest 'mir'."
            },
            {
              "id": "a2_s2_c14_l3",
              "original": "er sprach zu dir aus meinen Weisen,",
              "literal": "he spoke to thee through my melodies,",
              "tokens": [
                {
                  "word": "sprach",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "spoke"
                },
                {
                  "word": "Weisen",
                  "lemma": "Weise",
                  "pos": "noun",
                  "meaning": "melodies"
                }
              ]
            },
            {
              "id": "a2_s2_c14_l4",
              "original": "zu dir hat er mich hergeführt.",
              "literal": "to thee he has led me hither.",
              "tokens": [
                {
                  "word": "hergeführt",
                  "lemma": "herführen",
                  "pos": "verb",
                  "meaning": "led hither / guided here"
                }
              ],
              "grammarNote": "Fronted directional phrase 'zu dir'."
            }
          ]
        },
        {
          "id": "a2_s2_c15",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s2_c15_l1",
              "original": "Gepriesen sei die Stunde,",
              "literal": "Praised be the hour,",
              "tokens": [
                {
                  "word": "Gepriesen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praised"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (optative / subjunctive)"
                },
                {
                  "word": "Stunde",
                  "lemma": "Stunde",
                  "pos": "noun",
                  "meaning": "hour"
                }
              ],
              "grammarNote": "Optative subjunctive passive formula 'Gepriesen sei'."
            },
            {
              "id": "a2_s2_c15_l2",
              "original": "gepriesen sei die Macht,",
              "literal": "praised be the power,",
              "tokens": [
                {
                  "word": "gepriesen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praised"
                },
                {
                  "word": "Macht",
                  "lemma": "Macht",
                  "pos": "noun",
                  "meaning": "power / might"
                }
              ],
              "grammarNote": "Optative subjunctive passive continuing from previous line."
            },
            {
              "id": "a2_s2_c15_l3",
              "original": "die mir so holde Kunde",
              "literal": "that to me such lovely tidings",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "that / which (relative pronoun)"
                },
                {
                  "word": "holde",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "sweet / lovely / gracious"
                },
                {
                  "word": "Kunde",
                  "lemma": "Kunde",
                  "pos": "noun",
                  "meaning": "tidings / news"
                }
              ],
              "grammarNote": "Relative clause with relative pronoun 'die' referring to 'die Macht'."
            },
            {
              "id": "a2_s2_c15_l4",
              "original": "von Eurer Näh' gebracht!",
              "literal": "brought of your nearness!",
              "tokens": [
                {
                  "word": "Eurer",
                  "lemma": "euer",
                  "pos": "pronoun",
                  "meaning": "your"
                },
                {
                  "word": "Näh'",
                  "lemma": "Nähe",
                  "pos": "noun",
                  "meaning": "nearness / presence"
                },
                {
                  "word": "gebracht",
                  "lemma": "bringen",
                  "pos": "verb",
                  "meaning": "brought"
                }
              ],
              "grammarNote": "Apocope in 'Näh'' for 'Nähe'. Completes relative clause from line 070."
            },
            {
              "id": "a2_s2_c15_l5",
              "original": "Von Wonneglanz umgeben,",
              "literal": "Surrounded by radiant bliss,",
              "tokens": [
                {
                  "word": "Wonneglanz",
                  "lemma": "Wonneglanz",
                  "pos": "noun",
                  "meaning": "radiance of bliss / joyous splendor"
                },
                {
                  "word": "umgeben",
                  "lemma": "umgeben",
                  "pos": "verb",
                  "meaning": "surrounded"
                }
              ],
              "grammarNote": "Participial phrase."
            },
            {
              "id": "a2_s2_c15_l6",
              "original": "lacht mir der Sonne Schein;",
              "literal": "smiles upon me the radiance of the sun;",
              "tokens": [
                {
                  "word": "lacht",
                  "lemma": "lachen",
                  "pos": "verb",
                  "meaning": "laughs / smiles"
                },
                {
                  "word": "Sonne",
                  "lemma": "Sonne",
                  "pos": "noun",
                  "meaning": "sun (genitive)"
                },
                {
                  "word": "Schein",
                  "lemma": "Schein",
                  "pos": "noun",
                  "meaning": "radiance / gleam"
                }
              ],
              "grammarNote": "Dative of interest 'mir' with pre-posed genitive 'der Sonne Schein'."
            },
            {
              "id": "a2_s2_c15_l7",
              "original": "erwacht zu neuem Leben,",
              "literal": "awakened to new life,",
              "tokens": [
                {
                  "word": "erwacht",
                  "lemma": "erwachen",
                  "pos": "verb",
                  "meaning": "awakened"
                },
                {
                  "word": "neuem",
                  "lemma": "neu",
                  "pos": "adjective",
                  "meaning": "new"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ]
            },
            {
              "id": "a2_s2_c15_l8",
              "original": "nenn ich die Freude mein!",
              "literal": "I call joy my own!",
              "tokens": [
                {
                  "word": "nenn",
                  "lemma": "nennen",
                  "pos": "verb",
                  "meaning": "call / name"
                },
                {
                  "word": "Freude",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joy"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my own (predicative possessive)"
                }
              ],
              "grammarNote": "Predicative possessive 'mein' ('etwas mein nennen' = to call something one's own)."
            }
          ]
        },
        {
          "id": "a2_s2_c16",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s2_c16_l1",
              "original": "Gepriesen sei die Stunde,",
              "literal": "Praised be the hour,",
              "tokens": [
                {
                  "word": "Gepriesen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praised"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (optative / subjunctive)"
                },
                {
                  "word": "Stunde",
                  "lemma": "Stunde",
                  "pos": "noun",
                  "meaning": "hour"
                }
              ],
              "grammarNote": "Optative subjunctive passive formula 'Gepriesen sei'."
            },
            {
              "id": "a2_s2_c16_l2",
              "original": "gepriesen sei die Macht,",
              "literal": "praised be the power,",
              "tokens": [
                {
                  "word": "gepriesen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praised"
                },
                {
                  "word": "Macht",
                  "lemma": "Macht",
                  "pos": "noun",
                  "meaning": "power / might"
                }
              ],
              "grammarNote": "Optative subjunctive passive continuing from previous line."
            },
            {
              "id": "a2_s2_c16_l3",
              "original": "die mir so holde Kunde",
              "literal": "that to me such lovely tidings",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "that / which (relative pronoun)"
                },
                {
                  "word": "holde",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "sweet / lovely / gracious"
                },
                {
                  "word": "Kunde",
                  "lemma": "Kunde",
                  "pos": "noun",
                  "meaning": "tidings / news"
                }
              ],
              "grammarNote": "Relative clause with relative pronoun 'die' referring to 'die Macht'."
            },
            {
              "id": "a2_s2_c16_l4",
              "original": "aus deinem Mund gebracht!",
              "literal": "brought from thy mouth!",
              "tokens": [
                {
                  "word": "deinem",
                  "lemma": "dein",
                  "pos": "pronoun",
                  "meaning": "thy"
                },
                {
                  "word": "Mund",
                  "lemma": "Mund",
                  "pos": "noun",
                  "meaning": "mouth / lips"
                },
                {
                  "word": "gebracht",
                  "lemma": "bringen",
                  "pos": "verb",
                  "meaning": "brought"
                }
              ],
              "grammarNote": "Completes relative clause 'die mir so holde Kunde / aus deinem Mund gebracht [hat]'."
            },
            {
              "id": "a2_s2_c16_l5",
              "original": "Dem neu erkannten Leben",
              "literal": "To newly recognized life",
              "tokens": [
                {
                  "word": "neu",
                  "lemma": "neu",
                  "pos": "adverb",
                  "meaning": "newly"
                },
                {
                  "word": "erkannten",
                  "lemma": "erkennen",
                  "pos": "verb",
                  "meaning": "recognized / discovered",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life (dative)"
                }
              ],
              "grammarNote": "Fronted dative object governed by 'weihn' in line 081."
            },
            {
              "id": "a2_s2_c16_l6",
              "original": "darf ich mich mutig weihn;",
              "literal": "I may courageously dedicate myself;",
              "tokens": [
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "mutig",
                  "lemma": "mutig",
                  "pos": "adverb",
                  "meaning": "courageously / boldly"
                },
                {
                  "word": "weihn",
                  "lemma": "weihen",
                  "pos": "verb",
                  "meaning": "consecrate / dedicate"
                }
              ],
              "grammarNote": "Reflexive 'sich weihen' with modal 'darf'."
            },
            {
              "id": "a2_s2_c16_l7",
              "original": "ich nenn in freud'gem Beben",
              "literal": "I call in joyful trembling",
              "tokens": [
                {
                  "word": "freud'gem",
                  "lemma": "freudig",
                  "pos": "adjective",
                  "meaning": "joyful"
                },
                {
                  "word": "Beben",
                  "lemma": "Beben",
                  "pos": "noun",
                  "meaning": "trembling / quiver"
                }
              ],
              "grammarNote": "Apocope in dative adjective 'freud'gem'."
            },
            {
              "id": "a2_s2_c16_l8",
              "original": "sein schönstes Wunder mein!",
              "literal": "its most beautiful miracle my own!",
              "tokens": [
                {
                  "word": "schönstes",
                  "lemma": "schön",
                  "pos": "adjective",
                  "meaning": "most beautiful (superlative)"
                },
                {
                  "word": "Wunder",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "miracle"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my own (predicative)"
                }
              ],
              "grammarNote": "Predicative possessive completing 'ich nenn... mein'."
            }
          ]
        },
        {
          "id": "a2_s2_c17",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "im Hintergrunde",
          "stageDirectionTranslation": "in the background",
          "lines": [
            {
              "id": "a2_s2_c17_l1",
              "original": "So flieht für dieses Leben",
              "literal": "Thus flees for this life",
              "tokens": [
                {
                  "word": "So",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "thus / so"
                },
                {
                  "word": "flieht",
                  "lemma": "fliehen",
                  "pos": "verb",
                  "meaning": "flees / departs"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ]
            },
            {
              "id": "a2_s2_c17_l2",
              "original": "mir jeder Hoffnung Schein!",
              "literal": "from me the gleam of every hope!",
              "tokens": [
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope (genitive)"
                },
                {
                  "word": "Schein",
                  "lemma": "Schein",
                  "pos": "noun",
                  "meaning": "gleam / light / semblance"
                }
              ],
              "grammarNote": "Dative of disadvantage 'mir' with pre-positioned genitive 'jeder Hoffnung Schein'."
            }
          ]
        },
        {
          "id": "a2_s2_c18",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "Tannhäuser trennt sich von Elisabeth; er geht auf Wolfram zu, umarmt ihn heftig und entfernt sich mit ihm durch die Treppe Elisabeth blickt Tannhäuser vom Balkon aus nach",
          "stageDirectionTranslation": "Tannhäuser parts from Elisabeth; he approaches Wolfram, embraces him warmly, and departs with him by the stairs. Elisabeth gazes after Tannhäuser from the balcony.",
          "lines": []
        }
      ]
    },
    {
      "sceneNumber": 3,
      "title": "Dich treff' ich hier in dieser Halle? (Landgraf und Elisabeth)",
      "titleTranslation": "You find I here in this hall? (Landgrave and Elisabeth)",
      "originalDescription": "Landgraf Hermann tritt ein, erfreut über Elisabeths Genesung, und kündigt den festlichen Sängerwettstreit vor den Fürsten und Rittern an.",
      "description": "Landgrave Hermann arrives, delighted to see Elisabeth radiant once more, and prepares to welcome the noble guests to the Tournament of Song.",
      "cues": [
        {
          "id": "a2_s3_c1",
          "speaker": "Stage Direction",
          "stageDirection": "Der Landgraf tritt aus einer Seitentüre ein, Elisabeth eilt auf ihn zu und birgt ihr Gesicht an seiner Brust",
          "stageDirectionTranslation": "The Landgrave enters from a side door; Elisabeth hurries toward him and buries her face on his chest.",
          "lines": []
        },
        {
          "id": "a2_s3_c2",
          "speaker": "Landgraf Hermann",
          "lines": [
            {
              "id": "a2_s3_c2_l1",
              "original": "Dich treff ich hier in dieser Halle, die so lange du gemieden?",
              "literal": "Do I meet thee here in this hall, which thou hast shunned so long?",
              "tokens": [
                {
                  "word": "treff",
                  "lemma": "treffen",
                  "pos": "verb",
                  "meaning": "meet / find"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                },
                {
                  "word": "gemieden",
                  "lemma": "meiden",
                  "pos": "verb",
                  "meaning": "shunned / avoided"
                }
              ],
              "grammarNote": "Interrogative inversion without auxiliary 'hast' in relative clause ('die so lange du gemieden [hast]')."
            },
            {
              "id": "a2_s3_c2_l2",
              "original": "Endlich denn lockt dich ein Sängerfest, das wir bereiten?",
              "literal": "Does a singers' festival that we prepare entice thee at last, then?",
              "tokens": [
                {
                  "word": "Endlich",
                  "lemma": "endlich",
                  "pos": "adverb",
                  "meaning": "at last / finally"
                },
                {
                  "word": "lockt",
                  "lemma": "locken",
                  "pos": "verb",
                  "meaning": "entices / attracts"
                },
                {
                  "word": "Sängerfest",
                  "lemma": "Sängerfest",
                  "pos": "noun",
                  "meaning": "minstrels' contest / festival"
                },
                {
                  "word": "bereiten",
                  "lemma": "bereiten",
                  "pos": "verb",
                  "meaning": "prepare"
                }
              ]
            }
          ]
        },
        {
          "id": "a2_s3_c3",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s3_c3_l1",
              "original": "Mein Oheim! O, mein güt'ger Vater!",
              "literal": "My uncle! O, my kindly father!",
              "tokens": [
                {
                  "word": "Oheim",
                  "lemma": "Oheim",
                  "pos": "noun",
                  "meaning": "uncle"
                },
                {
                  "word": "güt'ger",
                  "lemma": "gütig",
                  "pos": "adjective",
                  "meaning": "kind / benevolent"
                },
                {
                  "word": "Vater",
                  "lemma": "Vater",
                  "pos": "noun",
                  "meaning": "father"
                }
              ],
              "grammarNote": "Syncope in 'güt'ger' for 'gütiger'."
            }
          ]
        },
        {
          "id": "a2_s3_c4",
          "speaker": "Landgraf Hermann",
          "lines": [
            {
              "id": "a2_s3_c4_l1",
              "original": "Drängt",
              "literal": "Does it urge",
              "tokens": [
                {
                  "word": "Drängt",
                  "lemma": "drängen",
                  "pos": "verb",
                  "meaning": "urges / impels"
                },
                {
                  "word": "es drängt",
                  "lemma": "es drängt",
                  "pos": "idiom",
                  "meaning": "it urges / an inner urge impels (completed in next line)"
                }
              ],
              "grammarNote": "Impersonal verb 'es drängt' split across verse lines."
            },
            {
              "id": "a2_s3_c4_l2",
              "original": "Es dich, dein Herz mir endlich zu erschliessen?",
              "literal": "Thee to open thy heart to me at last?",
              "tokens": [
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "endlich",
                  "lemma": "endlich",
                  "pos": "adverb",
                  "meaning": "at last / finally"
                },
                {
                  "word": "erschliessen",
                  "lemma": "erschliessen",
                  "pos": "verb",
                  "meaning": "open / disclose"
                }
              ],
              "grammarNote": "Infinitive clause dependent on impersonal 'drängt es dich'."
            }
          ]
        },
        {
          "id": "a2_s3_c5",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s3_c5_l1",
              "original": "Sieh mir ins Auge! Sprechen kann ich nicht.",
              "literal": "Look into my eyes! Speak I cannot.",
              "tokens": [
                {
                  "word": "Sieh",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "look / see (imperative)"
                },
                {
                  "word": "Auge",
                  "lemma": "Auge",
                  "pos": "noun",
                  "meaning": "eye"
                },
                {
                  "word": "Sprechen",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speak"
                }
              ],
              "grammarNote": "Fronted infinitive 'Sprechen' emphasizing her inability to verbalize her emotion."
            }
          ]
        },
        {
          "id": "a2_s3_c6",
          "speaker": "Landgraf Hermann",
          "lines": [
            {
              "id": "a2_s3_c6_l1",
              "original": "Noch bleibe denn unausgesprochen",
              "literal": "Then let remain unspoken still",
              "tokens": [
                {
                  "word": "bleibe",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "remain (subjunctive / imperative)"
                },
                {
                  "word": "unausgesprochen",
                  "lemma": "unausgesprochen",
                  "pos": "adjective",
                  "meaning": "unspoken / unexpressed"
                }
              ],
              "grammarNote": "Optative subjunctive III 'bleibe'."
            },
            {
              "id": "a2_s3_c6_l2",
              "original": "dein süss Geheimnis kurze Frist;",
              "literal": "thy sweet secret for a brief while;",
              "tokens": [
                {
                  "word": "süss",
                  "lemma": "süss",
                  "pos": "adjective",
                  "meaning": "sweet"
                },
                {
                  "word": "Geheimnis",
                  "lemma": "Geheimnis",
                  "pos": "noun",
                  "meaning": "secret / mystery"
                },
                {
                  "word": "kurze Frist",
                  "lemma": "kurze Frist",
                  "pos": "idiom",
                  "meaning": "for a short time / brief span"
                }
              ],
              "grammarNote": "Accusative of duration 'kurze Frist'."
            },
            {
              "id": "a2_s3_c6_l3",
              "original": "der Zauber bleibe ungebrochen,",
              "literal": "let the spell remain unbroken,",
              "tokens": [
                {
                  "word": "Zauber",
                  "lemma": "Zauber",
                  "pos": "noun",
                  "meaning": "spell / magic / charm"
                },
                {
                  "word": "ungebrochen",
                  "lemma": "ungebrochen",
                  "pos": "adjective",
                  "meaning": "unbroken"
                }
              ],
              "grammarNote": "Optative subjunctive 'bleibe'."
            },
            {
              "id": "a2_s3_c6_l4",
              "original": "bis du der Lösung mächtig bist.",
              "literal": "until thou art capable of its resolution.",
              "tokens": [
                {
                  "word": "Lösung",
                  "lemma": "Lösung",
                  "pos": "noun",
                  "meaning": "solution / unraveling / resolution"
                },
                {
                  "word": "mächtig",
                  "lemma": "mächtig",
                  "pos": "adjective",
                  "meaning": "capable of / master of"
                }
              ],
              "grammarNote": "'Mächtig sein' governing genitive 'der Lösung'."
            },
            {
              "id": "a2_s3_c6_l5",
              "original": "So sei's! Was der Gesang so Wunderbares",
              "literal": "So be it! What song has so wondrously",
              "tokens": [
                {
                  "word": "sei's",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be it (contraction of sei es)"
                },
                {
                  "word": "Gesang",
                  "lemma": "Gesang",
                  "pos": "noun",
                  "meaning": "song / singing"
                },
                {
                  "word": "Wunderbares",
                  "lemma": "wunderbar",
                  "pos": "noun",
                  "meaning": "wondrous things"
                }
              ],
              "grammarNote": "Substantivized neuter adjective 'Wunderbares'."
            },
            {
              "id": "a2_s3_c6_l6",
              "original": "erweckt und angeregt, soll heute er",
              "literal": "awakened and inspired, today it shall",
              "tokens": [
                {
                  "word": "erweckt",
                  "lemma": "erwecken",
                  "pos": "verb",
                  "meaning": "awakened"
                },
                {
                  "word": "angeregt",
                  "lemma": "anregen",
                  "pos": "verb",
                  "meaning": "stimulated / inspired"
                }
              ],
              "grammarNote": "Pronoun 'er' refers back to 'der Gesang'."
            },
            {
              "id": "a2_s3_c6_l7",
              "original": "enthüllen und mit Vollendung krönen;",
              "literal": "reveal and crown with perfection;",
              "tokens": [
                {
                  "word": "enthüllen",
                  "lemma": "enthüllen",
                  "pos": "verb",
                  "meaning": "reveal / unveil"
                },
                {
                  "word": "Vollendung",
                  "lemma": "Vollendung",
                  "pos": "noun",
                  "meaning": "perfection / fulfillment"
                },
                {
                  "word": "krönen",
                  "lemma": "krönen",
                  "pos": "verb",
                  "meaning": "crown"
                }
              ]
            },
            {
              "id": "a2_s3_c6_l8",
              "original": "die holde Kunst, sie werde jetzt zur Tat!",
              "literal": "gracious art, let it now become deed!",
              "tokens": [
                {
                  "word": "holde",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "gracious / lovely"
                },
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art"
                },
                {
                  "word": "Tat",
                  "lemma": "Tat",
                  "pos": "noun",
                  "meaning": "deed / act / reality"
                }
              ],
              "grammarNote": "'Zur Tat werden' idiom meaning 'to turn into reality / action'. Jussive subjunctive 'werde'."
            }
          ]
        },
        {
          "id": "a2_s3_c7",
          "speaker": "Landgraf Hermann",
          "stageDirection": "Trompeten im Hintergrunde tief, wie im Burghofte",
          "stageDirectionTranslation": "Trumpets deep in the background, as if in the castle courtyard.",
          "lines": [
            {
              "id": "a2_s3_c7_l1",
              "original": "Schon nahen sich die Edlen meiner Lande,",
              "literal": "Already the nobles of my lands draw near,",
              "tokens": [
                {
                  "word": "nahen sich",
                  "lemma": "nahen",
                  "pos": "verb",
                  "meaning": "approach / draw near (reflexive)"
                },
                {
                  "word": "Edlen",
                  "lemma": "Edle",
                  "pos": "noun",
                  "meaning": "nobles"
                },
                {
                  "word": "Lande",
                  "lemma": "Land",
                  "pos": "noun",
                  "meaning": "lands / territories"
                }
              ],
              "grammarNote": "Reflexive verb 'sich nahen'."
            },
            {
              "id": "a2_s3_c7_l2",
              "original": "die ich zum seltnen Fest hierher beschied;",
              "literal": "whom I summoned hither to this rare festival;",
              "tokens": [
                {
                  "word": "seltnen",
                  "lemma": "selten",
                  "pos": "adjective",
                  "meaning": "rare / wondrous"
                },
                {
                  "word": "Fest",
                  "lemma": "Fest",
                  "pos": "noun",
                  "meaning": "festival / feast"
                },
                {
                  "word": "beschied",
                  "lemma": "bescheiden",
                  "pos": "verb",
                  "meaning": "summoned / bade to come"
                }
              ],
              "grammarNote": "Relative pronoun 'die' referring to 'die Edlen'. Past tense 'beschied'."
            },
            {
              "id": "a2_s3_c7_l3",
              "original": "zahlreicher nahen sie als je, da sie",
              "literal": "in greater numbers they approach than ever, since they",
              "tokens": [
                {
                  "word": "zahlreicher",
                  "lemma": "zahlreich",
                  "pos": "adverb",
                  "meaning": "more numerously / in greater numbers"
                },
                {
                  "word": "je",
                  "lemma": "je",
                  "pos": "adverb",
                  "meaning": "ever"
                }
              ],
              "grammarNote": "Enjambment connecting to line 103."
            },
            {
              "id": "a2_s3_c7_l4",
              "original": "gehört, dass du des Festes Fürstin sei'st.",
              "literal": "have heard that thou art the princess of the festival.",
              "tokens": [
                {
                  "word": "gehört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "heard"
                },
                {
                  "word": "Fürstin",
                  "lemma": "Fürstin",
                  "pos": "noun",
                  "meaning": "princess / sovereign lady"
                },
                {
                  "word": "sei'st",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "art / wouldst be (subjunctive I)"
                }
              ],
              "grammarNote": "Subjunctive I 'sei'st' reporting indirect speech/assumption with omitted auxiliary 'haben'."
            }
          ]
        }
      ]
    },
    {
      "sceneNumber": 4,
      "title": "Freudig begrüßen wir die edle Halle (Der Sängerkrieg auf Wartburg)",
      "titleTranslation": "Joyfully greet we the noble hall (The Contest of Song on Wartburg)",
      "originalDescription": "Feierlicher Einzug der Gäste. Wolfram, Walther und Biterolf besingen die reine, keusche Minne. Tannhäuser verfällt in Rausch und preist wild die Göttin Venus. Elisabeth rettet ihn vor den Schwertern der Ritter.",
      "description": "The guests enter in grand procession. When the minstrels praise pure, chaste love, Tannhäuser scandalizes the court by glorifying Venus. Elisabeth shields Heinrich from execution and urges him to seek papal absolution in Rome.",
      "cues": [
        {
          "id": "a2_s4_c1",
          "speaker": "Stage Direction",
          "stageDirection": "Der Landgraf und Elisabeth treten an den Balkon, um nach der Ankunft der Gäste zu sehen. Vier Edelknaben treten auf und melden an. Sie erhalten vom Landgrafen Befehl für den Empfang usw Trompeten im Burghof) (Von hier an treten die Ritter und Grafen einzeln mit Edelfrauen und Gefolge, welches im Hintergrunde bleibt, ein und werden vom Landgrafen und von Elisabeth empfangen",
          "stageDirectionTranslation": "The Landgrave and Elisabeth step onto the balcony to watch for the arrival of the guests. Four pages enter and announce them. They receive orders from the Landgrave for the reception, etc. (Trumpets in the castle courtyard) (From here on, the knights and counts enter individually with noble ladies and retinue, who remain in the background, and are received by the Landgrave and Elisabeth).",
          "lines": []
        },
        {
          "id": "a2_s4_c2",
          "speaker": "Knights and Nobles",
          "pieceTitle": "Einzug der Gäste (Freudig begrüssen wir die edle Halle)",
          "lines": [
            {
              "id": "a2_s4_c2_l1",
              "original": "Freudig begrüssen wir die edle Halle,",
              "literal": "Joyfully we greet the noble hall,",
              "tokens": [
                {
                  "word": "Freudig",
                  "lemma": "freudig",
                  "pos": "adverb",
                  "meaning": "joyfully / gladly"
                },
                {
                  "word": "begrüssen",
                  "lemma": "begrüssen",
                  "pos": "verb",
                  "meaning": "greet / welcome"
                },
                {
                  "word": "edle",
                  "lemma": "edel",
                  "pos": "adjective",
                  "meaning": "noble"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                }
              ]
            },
            {
              "id": "a2_s4_c2_l2",
              "original": "wo Kunst und Frieden immer nur verweil,",
              "literal": "where art and peace may ever dwell,",
              "tokens": [
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art"
                },
                {
                  "word": "Frieden",
                  "lemma": "Friede",
                  "pos": "noun",
                  "meaning": "peace"
                },
                {
                  "word": "immer",
                  "lemma": "immer",
                  "pos": "adverb",
                  "meaning": "ever / always"
                },
                {
                  "word": "verweil",
                  "lemma": "verweilen",
                  "pos": "verb",
                  "meaning": "dwell / abide / linger"
                }
              ],
              "grammarNote": "Apocope in subjunctive verb 'verweil' ('verweile') expressing wish/prayer."
            },
            {
              "id": "a2_s4_c2_l3",
              "original": "wo lange noch der Ruf erschalle,",
              "literal": "where long yet the acclaim may resound:",
              "tokens": [
                {
                  "word": "lange",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "long / for a long time"
                },
                {
                  "word": "Ruf",
                  "lemma": "Ruf",
                  "pos": "noun",
                  "meaning": "call / acclaim / renown"
                },
                {
                  "word": "erschalle",
                  "lemma": "erschallen",
                  "pos": "verb",
                  "meaning": "resound / echo"
                }
              ],
              "grammarNote": "Subjunctive I 'erschalle'."
            },
            {
              "id": "a2_s4_c2_l4",
              "original": "Thüringens Fürsten, Landgraf Hermann, Heil!",
              "literal": "Hail to Thuringia's Prince, Landgrave Hermann!",
              "tokens": [
                {
                  "word": "Fürsten",
                  "lemma": "Fürst",
                  "pos": "noun",
                  "meaning": "prince / sovereign (dative)"
                },
                {
                  "word": "Landgraf",
                  "lemma": "Landgraf",
                  "pos": "noun",
                  "meaning": "landgrave"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "interjection",
                  "meaning": "hail / blessing"
                }
              ],
              "grammarNote": "Acclamation formula governing dative 'Thüringens Fürsten'."
            }
          ]
        },
        {
          "id": "a2_s4_c3",
          "speaker": "Noblewomen",
          "lines": [
            {
              "id": "a2_s4_c3_l1",
              "original": "Freudig begrüssen wir die edle Halle",
              "literal": "Joyfully we greet the noble hall",
              "tokens": [
                {
                  "word": "Freudig",
                  "lemma": "freudig",
                  "pos": "adverb",
                  "meaning": "joyfully / gladly"
                },
                {
                  "word": "edle",
                  "lemma": "edel",
                  "pos": "adjective",
                  "meaning": "noble"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                }
              ]
            },
            {
              "id": "a2_s4_c3_l2",
              "original": "wo Kunst und Frieden immer nur verweil,",
              "literal": "where art and peace may ever dwell,",
              "tokens": [
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art"
                },
                {
                  "word": "Frieden",
                  "lemma": "Friede",
                  "pos": "noun",
                  "meaning": "peace"
                },
                {
                  "word": "immer",
                  "lemma": "immer",
                  "pos": "adverb",
                  "meaning": "ever / always"
                },
                {
                  "word": "verweil",
                  "lemma": "verweilen",
                  "pos": "verb",
                  "meaning": "dwell / abide / linger"
                }
              ],
              "grammarNote": "Apocope in subjunctive verb 'verweil' ('verweile') expressing wish/prayer."
            },
            {
              "id": "a2_s4_c3_l3",
              "original": "wo lange noch der Ruf erschalle,",
              "literal": "where long yet the acclaim may resound:",
              "tokens": [
                {
                  "word": "lange",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "long / for a long time"
                },
                {
                  "word": "Ruf",
                  "lemma": "Ruf",
                  "pos": "noun",
                  "meaning": "call / acclaim / renown"
                },
                {
                  "word": "erschalle",
                  "lemma": "erschallen",
                  "pos": "verb",
                  "meaning": "resound / echo"
                }
              ],
              "grammarNote": "Subjunctive I 'erschalle'."
            },
            {
              "id": "a2_s4_c3_l4",
              "original": "Thüringens Fürsten, Landgraf Hermann, Heil!",
              "literal": "Hail to Thuringia's Prince, Landgrave Hermann!",
              "tokens": [
                {
                  "word": "Fürsten",
                  "lemma": "Fürst",
                  "pos": "noun",
                  "meaning": "prince / sovereign (dative)"
                },
                {
                  "word": "Landgraf",
                  "lemma": "Landgraf",
                  "pos": "noun",
                  "meaning": "landgrave"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "interjection",
                  "meaning": "hail / blessing"
                }
              ],
              "grammarNote": "Acclamation formula governing dative 'Thüringens Fürsten'."
            }
          ]
        },
        {
          "id": "a2_s4_c4",
          "speaker": "Noblewomen",
          "stageDirection": "Die Versammelten haben alle die ihnen angewiesenen, einen grossen Halbkreis bildenden Plätze eingenommen. Der Landgraf und Elisabeth nehmen im Vordergrunde unter einem Baldachin Ehrensitze ein Trompeten auf dem Theater Die Sänger treten auf und verneigen sich feierlich mit ritterlichem Grusse gegen die Versammlung; darauf nehmen sie in der leergelassenen Mitte des Saales die in einem engeren Halbkreise für sie bestimmten Sitze ein, Tannhäuser im Mittelgrunde rechts, Wolfram am entgegengesetzten Ende links, der Versammlung gegenüber Der Landgraf erhebt sich",
          "stageDirectionTranslation": "The assembled company have all taken the seats assigned to them, forming a large semicircle. The Landgrave and Elisabeth occupy seats of honor in the foreground under a canopy. (Trumpets on stage) The minstrels enter and bow solemnly with knightly greeting to the assembly; then they take the seats designated for them in a smaller semicircle in the vacant center of the hall, Tannhäuser in the middle ground on the right, Wolfram at the opposite end on the left, facing the assembly. The Landgrave rises.",
          "lines": []
        },
        {
          "id": "a2_s4_c5",
          "speaker": "Landgraf Hermann",
          "lines": [
            {
              "id": "a2_s4_c5_l1",
              "original": "Gar viel und schön ward hier in dieser Halle",
              "literal": "Much and beautifully was sung here in this hall",
              "tokens": [
                {
                  "word": "Gar viel",
                  "lemma": "gar viel",
                  "pos": "adverb",
                  "meaning": "a great deal / very much"
                },
                {
                  "word": "schön",
                  "lemma": "schön",
                  "pos": "adverb",
                  "meaning": "beautifully"
                },
                {
                  "word": "ward",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "was (archaic passive auxiliary)"
                },
                {
                  "word": "Halle",
                  "lemma": "Halle",
                  "pos": "noun",
                  "meaning": "hall"
                }
              ],
              "grammarNote": "Impersonal passive with archaic 'ward' ('wurde') anticipating 'gesungen' in line 113."
            },
            {
              "id": "a2_s4_c5_l2",
              "original": "von euch, ihr lieben Sänger, schon gesungen,",
              "literal": "by you, ye dear singers, already sung,",
              "tokens": [
                {
                  "word": "lieben",
                  "lemma": "lieb",
                  "pos": "adjective",
                  "meaning": "dear / beloved"
                },
                {
                  "word": "Sänger",
                  "lemma": "Sänger",
                  "pos": "noun",
                  "meaning": "singers / minstrels"
                },
                {
                  "word": "gesungen",
                  "lemma": "singen",
                  "pos": "verb",
                  "meaning": "sung"
                }
              ],
              "grammarNote": "Vocative apostrophe 'ihr lieben Sänger'."
            },
            {
              "id": "a2_s4_c5_l3",
              "original": "in weisen Rätseln, wie in heitern Liedern",
              "literal": "in wise riddles, as in cheerful songs,",
              "tokens": [
                {
                  "word": "weisen",
                  "lemma": "weise",
                  "pos": "adjective",
                  "meaning": "wise"
                },
                {
                  "word": "Rätseln",
                  "lemma": "Rätsel",
                  "pos": "noun",
                  "meaning": "riddles / enigmas"
                },
                {
                  "word": "heitern",
                  "lemma": "heiter",
                  "pos": "adjective",
                  "meaning": "cheerful / bright"
                },
                {
                  "word": "Liedern",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "songs"
                }
              ]
            },
            {
              "id": "a2_s4_c5_l4",
              "original": "erfreutet ihr gleich sinnig unser Herz.",
              "literal": "ye delighted our heart with equal depth of meaning.",
              "tokens": [
                {
                  "word": "erfreutet",
                  "lemma": "erfreuen",
                  "pos": "verb",
                  "meaning": "delighted / gladdened (past 2nd pl.)"
                },
                {
                  "word": "gleich",
                  "lemma": "gleich",
                  "pos": "adverb",
                  "meaning": "equally / alike"
                },
                {
                  "word": "sinnig",
                  "lemma": "sinnig",
                  "pos": "adverb",
                  "meaning": "meaningfully / thoughtfully"
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
              "id": "a2_s4_c5_l5",
              "original": "Wenn unser Schwert in blutig ernstern Kämpfen",
              "literal": "When our sword in bloodier, sterner struggles",
              "tokens": [
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                },
                {
                  "word": "blutig",
                  "lemma": "blutig",
                  "pos": "adverb",
                  "meaning": "bloodily / bloody"
                },
                {
                  "word": "ernstern",
                  "lemma": "ernst",
                  "pos": "adjective",
                  "meaning": "sterner / graver (comparative)"
                },
                {
                  "word": "Kämpfen",
                  "lemma": "Kampf",
                  "pos": "noun",
                  "meaning": "battles / struggles"
                }
              ],
              "grammarNote": "Temporal conditional clause."
            },
            {
              "id": "a2_s4_c5_l6",
              "original": "stritt für des deutschen Reiches Majestät,",
              "literal": "fought for the majesty of the German Empire,",
              "tokens": [
                {
                  "word": "stritt",
                  "lemma": "streiten",
                  "pos": "verb",
                  "meaning": "fought / strove"
                },
                {
                  "word": "Reiches",
                  "lemma": "Reich",
                  "pos": "noun",
                  "meaning": "empire / realm (genitive)"
                },
                {
                  "word": "Majestät",
                  "lemma": "Majestät",
                  "pos": "noun",
                  "meaning": "majesty"
                }
              ],
              "grammarNote": "Historical reference to the Holy Roman Empire."
            },
            {
              "id": "a2_s4_c5_l7",
              "original": "wenn wir dem grimmen Welfen widerstanden",
              "literal": "when we resisted the fierce Guelph,",
              "tokens": [
                {
                  "word": "grimmen",
                  "lemma": "grimm",
                  "pos": "adjective",
                  "meaning": "fierce / wrathful"
                },
                {
                  "word": "Welfen",
                  "lemma": "Welfe",
                  "pos": "noun",
                  "meaning": "Guelph (historical faction, dative)"
                },
                {
                  "word": "widerstanden",
                  "lemma": "widerstehen",
                  "pos": "verb",
                  "meaning": "resisted / withstood"
                }
              ],
              "grammarNote": "Historical reference to the Welf/Hohenstaufen conflict. 'Widerstehen' governs dative 'dem grimmen Welfen'."
            },
            {
              "id": "a2_s4_c5_l8",
              "original": "und dem verderbenvollen Zwiespalt wehrten:",
              "literal": "and checked ruinous discord:",
              "tokens": [
                {
                  "word": "verderbenvollen",
                  "lemma": "verderbenvoll",
                  "pos": "adjective",
                  "meaning": "ruinous / destructive"
                },
                {
                  "word": "Zwiespalt",
                  "lemma": "Zwiespalt",
                  "pos": "noun",
                  "meaning": "discord / strife (dative)"
                },
                {
                  "word": "wehrten",
                  "lemma": "wehren",
                  "pos": "verb",
                  "meaning": "resisted / held in check"
                }
              ],
              "grammarNote": "'Wehren' governing dative 'dem verderbenvollen Zwiespalt'."
            },
            {
              "id": "a2_s4_c5_l9",
              "original": "so ward von euch nicht minder Preis errungen.",
              "literal": "so by you no lesser prize was won.",
              "tokens": [
                {
                  "word": "minder",
                  "lemma": "minder",
                  "pos": "adjective",
                  "meaning": "lesser / inferior"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "prize / glory"
                },
                {
                  "word": "errungen",
                  "lemma": "erringen",
                  "pos": "verb",
                  "meaning": "won / achieved"
                }
              ],
              "grammarNote": "Correlative 'Wenn... so...' with passive 'ward... errungen'."
            },
            {
              "id": "a2_s4_c5_l10",
              "original": "Der Anmut und der holden Sitte,",
              "literal": "For grace and gracious custom,",
              "tokens": [
                {
                  "word": "Anmut",
                  "lemma": "Anmut",
                  "pos": "noun",
                  "meaning": "grace / charm (dative)"
                },
                {
                  "word": "holden",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "gracious / lovely"
                },
                {
                  "word": "Sitte",
                  "lemma": "Sitte",
                  "pos": "noun",
                  "meaning": "custom / decorum / morals"
                }
              ],
              "grammarNote": "Dative of interest governed by 'erstrittet' in line 123."
            },
            {
              "id": "a2_s4_c5_l11",
              "original": "der Tugend und dem reinen Glauben",
              "literal": "for virtue and pure faith,",
              "tokens": [
                {
                  "word": "Tugend",
                  "lemma": "Tugend",
                  "pos": "noun",
                  "meaning": "virtue"
                },
                {
                  "word": "reinen",
                  "lemma": "rein",
                  "pos": "adjective",
                  "meaning": "pure"
                },
                {
                  "word": "Glauben",
                  "lemma": "Glaube",
                  "pos": "noun",
                  "meaning": "faith (dative)"
                }
              ],
              "grammarNote": "Dative parallel to line 121."
            },
            {
              "id": "a2_s4_c5_l12",
              "original": "erstrittet ihr durch eure Kunst",
              "literal": "ye won through your art",
              "tokens": [
                {
                  "word": "erstrittet",
                  "lemma": "erstreiten",
                  "pos": "verb",
                  "meaning": "won by contest / achieved"
                },
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art"
                }
              ]
            },
            {
              "id": "a2_s4_c5_l13",
              "original": "gar hohen, herrlich schönen Sieg.",
              "literal": "a truly lofty, gloriously beautiful victory.",
              "tokens": [
                {
                  "word": "hohen",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high / lofty"
                },
                {
                  "word": "herrlich",
                  "lemma": "herrlich",
                  "pos": "adverb",
                  "meaning": "gloriously"
                },
                {
                  "word": "Sieg",
                  "lemma": "Sieg",
                  "pos": "noun",
                  "meaning": "victory"
                }
              ],
              "grammarNote": "Direct object of 'erstrittet'."
            },
            {
              "id": "a2_s4_c5_l14",
              "original": "Bereitet heute uns denn auch ein Fest,",
              "literal": "Prepare for us then today also a festival,",
              "tokens": [
                {
                  "word": "Bereitet",
                  "lemma": "bereiten",
                  "pos": "verb",
                  "meaning": "prepare (imperative 2nd pl.)"
                },
                {
                  "word": "heute",
                  "lemma": "heute",
                  "pos": "adverb",
                  "meaning": "today"
                },
                {
                  "word": "Fest",
                  "lemma": "Fest",
                  "pos": "noun",
                  "meaning": "festival / feast"
                }
              ]
            },
            {
              "id": "a2_s4_c5_l15",
              "original": "heut, wo der kühne Sänger uns zurückgekehrt,",
              "literal": "today, when the bold singer has returned to us,",
              "tokens": [
                {
                  "word": "kühne",
                  "lemma": "kühn",
                  "pos": "adjective",
                  "meaning": "bold / daring"
                },
                {
                  "word": "Sänger",
                  "lemma": "Sänger",
                  "pos": "noun",
                  "meaning": "singer / minstrel"
                },
                {
                  "word": "zurückgekehrt",
                  "lemma": "zurückkehren",
                  "pos": "verb",
                  "meaning": "returned"
                }
              ],
              "grammarNote": "Relative temporal clause with omitted auxiliary 'ist'."
            },
            {
              "id": "a2_s4_c5_l16",
              "original": "den wir so ungern lang vermissten.",
              "literal": "whom we so regretfully missed for long.",
              "tokens": [
                {
                  "word": "ungern",
                  "lemma": "ungern",
                  "pos": "adverb",
                  "meaning": "reluctantly / sorrowfully / regretfully"
                },
                {
                  "word": "lang",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "long / for a long time"
                },
                {
                  "word": "vermissten",
                  "lemma": "vermissen",
                  "pos": "verb",
                  "meaning": "missed"
                }
              ],
              "grammarNote": "Relative pronoun 'den' referring to 'der kühne Sänger'."
            },
            {
              "id": "a2_s4_c5_l17",
              "original": "Was wieder ihn in unsre Nähe brachte,",
              "literal": "What brought him back into our proximity,",
              "tokens": [
                {
                  "word": "wieder",
                  "lemma": "wieder",
                  "pos": "adverb",
                  "meaning": "again / back"
                },
                {
                  "word": "Nähe",
                  "lemma": "Nähe",
                  "pos": "noun",
                  "meaning": "proximity / presence"
                },
                {
                  "word": "brachte",
                  "lemma": "bringen",
                  "pos": "verb",
                  "meaning": "brought"
                }
              ],
              "grammarNote": "Substantive relative clause acting as subject of 'dünkt'."
            },
            {
              "id": "a2_s4_c5_l18",
              "original": "ein wunderbar Geheimnis dünkt es mich;",
              "literal": "a wondrous secret it seems to me;",
              "tokens": [
                {
                  "word": "wunderbar",
                  "lemma": "wunderbar",
                  "pos": "adjective",
                  "meaning": "wondrous / mysterious"
                },
                {
                  "word": "Geheimnis",
                  "lemma": "Geheimnis",
                  "pos": "noun",
                  "meaning": "secret"
                },
                {
                  "word": "dünkt",
                  "lemma": "dünken",
                  "pos": "verb",
                  "meaning": "seems / appears"
                }
              ],
              "grammarNote": "Impersonal verb 'dünken' governing accusative 'mich'."
            },
            {
              "id": "a2_s4_c5_l19",
              "original": "durch Liedes Kunst sollt ihr es uns enthüllen:",
              "literal": "through the art of song ye shall reveal it to us:",
              "tokens": [
                {
                  "word": "Liedes",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "song (genitive)"
                },
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art"
                },
                {
                  "word": "enthüllen",
                  "lemma": "enthüllen",
                  "pos": "verb",
                  "meaning": "reveal / unveil"
                }
              ],
              "grammarNote": "Pre-positioned genitive 'Liedes Kunst'."
            },
            {
              "id": "a2_s4_c5_l20",
              "original": "deshalb stell ich die Frage jetzt an euch:",
              "literal": "therefore I put the question now to you:",
              "tokens": [
                {
                  "word": "deshalb",
                  "lemma": "deshalb",
                  "pos": "adverb",
                  "meaning": "therefore"
                },
                {
                  "word": "Frage",
                  "lemma": "Frage",
                  "pos": "noun",
                  "meaning": "question"
                },
                {
                  "word": "stellen",
                  "lemma": "stellen",
                  "pos": "verb",
                  "meaning": "put / pose"
                }
              ],
              "grammarNote": "'Eine Frage stellen an' idiom."
            },
            {
              "id": "a2_s4_c5_l21",
              "original": "könnt ihr der Liebe Wesen mir ergründen?",
              "literal": "can ye fathom for me the nature of love?",
              "tokens": [
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love (genitive)"
                },
                {
                  "word": "Wesen",
                  "lemma": "Wesen",
                  "pos": "noun",
                  "meaning": "nature / essence"
                },
                {
                  "word": "ergründen",
                  "lemma": "ergründen",
                  "pos": "verb",
                  "meaning": "fathom / plumb / discover"
                }
              ],
              "grammarNote": "Pre-positioned genitive 'der Liebe Wesen'. The central dramatic theme of the contest."
            },
            {
              "id": "a2_s4_c5_l22",
              "original": "Wer es vermag, wer sie am würdigsten besingt,",
              "literal": "Whosoever is able, whosoever sings of it most worthily,",
              "tokens": [
                {
                  "word": "vermag",
                  "lemma": "vermögen",
                  "pos": "verb",
                  "meaning": "is capable / is able"
                },
                {
                  "word": "würdigsten",
                  "lemma": "würdig",
                  "pos": "adverb",
                  "meaning": "most worthily (superlative)"
                },
                {
                  "word": "besingt",
                  "lemma": "besingen",
                  "pos": "verb",
                  "meaning": "sings of / praises in song"
                }
              ],
              "grammarNote": "Relative conditional clause 'Wer...'. 'sie' refers to 'die Liebe'."
            },
            {
              "id": "a2_s4_c5_l23",
              "original": "dem reich' Elisabeth den Preis,",
              "literal": "to him let Elisabeth give the prize,",
              "tokens": [
                {
                  "word": "reich'",
                  "lemma": "reichen",
                  "pos": "verb",
                  "meaning": "reach / give / bestow"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "prize"
                }
              ],
              "grammarNote": "Jussive subjunctive 'reiche' (with apocope 'reich'') governing dative 'dem'."
            },
            {
              "id": "a2_s4_c5_l24",
              "original": "er fordre ihn, so hoch und kühn er wolle,",
              "literal": "let him demand it as high and bold as he may wish,",
              "tokens": [
                {
                  "word": "fordre",
                  "lemma": "fordern",
                  "pos": "verb",
                  "meaning": "demand / claim (subjunctive)"
                },
                {
                  "word": "hoch",
                  "lemma": "hoch",
                  "pos": "adverb",
                  "meaning": "high"
                },
                {
                  "word": "kühn",
                  "lemma": "kühn",
                  "pos": "adverb",
                  "meaning": "boldly"
                },
                {
                  "word": "wolle",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "may wish (subjunctive)"
                }
              ],
              "grammarNote": "Concessive subjunctive clauses ('fordre... wolle')."
            },
            {
              "id": "a2_s4_c5_l25",
              "original": "ich sorge, dass sie ihn gewähren solle!",
              "literal": "I shall ensure that she shall grant it!",
              "tokens": [
                {
                  "word": "sorge",
                  "lemma": "sorgen",
                  "pos": "verb",
                  "meaning": "shall ensure / take care"
                },
                {
                  "word": "gewähren",
                  "lemma": "gewähren",
                  "pos": "verb",
                  "meaning": "grant / bestow"
                },
                {
                  "word": "solle",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shall (subjunctive)"
                }
              ],
              "grammarNote": "Subjunctive 'solle' in indirect intention clause."
            },
            {
              "id": "a2_s4_c5_l26",
              "original": "Auf, liebe Sänger! Greifet in die Saiten!",
              "literal": "Up, beloved singers! Strike the strings!",
              "tokens": [
                {
                  "word": "Auf",
                  "lemma": "auf",
                  "pos": "interjection",
                  "meaning": "up! / arise!"
                },
                {
                  "word": "Greifet",
                  "lemma": "greifen",
                  "pos": "verb",
                  "meaning": "strike / pluck (imperative pl.)"
                },
                {
                  "word": "Saiten",
                  "lemma": "Saite",
                  "pos": "noun",
                  "meaning": "strings"
                }
              ],
              "grammarNote": "Idiomatic expression 'in die Saiten greifen' (to strike/pluck the harp strings)."
            },
            {
              "id": "a2_s4_c5_l27",
              "original": "Die Aufgab' ist gestellt, kämpft um den Preis,",
              "literal": "The task is set, contend for the prize,",
              "tokens": [
                {
                  "word": "Aufgab'",
                  "lemma": "Aufgabe",
                  "pos": "noun",
                  "meaning": "task / theme"
                },
                {
                  "word": "gestellt",
                  "lemma": "stellen",
                  "pos": "verb",
                  "meaning": "set / posed"
                },
                {
                  "word": "kämpft",
                  "lemma": "kämpfen",
                  "pos": "verb",
                  "meaning": "contend / battle (imperative pl.)"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "prize"
                }
              ],
              "grammarNote": "Apocope in 'Aufgab''."
            },
            {
              "id": "a2_s4_c5_l28",
              "original": "und nehmet all im voraus unsern Dank!",
              "literal": "and accept all in advance our thanks!",
              "tokens": [
                {
                  "word": "nehmet",
                  "lemma": "nehmen",
                  "pos": "verb",
                  "meaning": "accept / receive (imperative 2nd pl.)"
                },
                {
                  "word": "im voraus",
                  "lemma": "im voraus",
                  "pos": "adverb",
                  "meaning": "in advance / beforehand"
                },
                {
                  "word": "Dank",
                  "lemma": "Dank",
                  "pos": "noun",
                  "meaning": "thanks"
                }
              ]
            }
          ]
        },
        {
          "id": "a2_s4_c6",
          "speaker": "Landgraf Hermann",
          "stageDirection": "Trompeten auf dem Theater",
          "stageDirectionTranslation": "Trumpets on stage.",
          "lines": []
        },
        {
          "id": "a2_s4_c7",
          "speaker": "Chorus",
          "lines": [
            {
              "id": "a2_s4_c7_l1",
              "original": "Heil! Heil! Thüringens Fürsten Heil!",
              "literal": "Hail! Hail! Hail to Thuringia's Prince!",
              "tokens": [
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "interjection",
                  "meaning": "hail"
                },
                {
                  "word": "Fürsten",
                  "lemma": "Fürst",
                  "pos": "noun",
                  "meaning": "prince"
                }
              ]
            },
            {
              "id": "a2_s4_c7_l2",
              "original": "Der holden Kunst Beschützer, Heil! Heil! Heil!",
              "literal": "To the protector of gracious art, Hail! Hail! Hail!",
              "tokens": [
                {
                  "word": "holden",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "gracious / lovely"
                },
                {
                  "word": "Kunst",
                  "lemma": "Kunst",
                  "pos": "noun",
                  "meaning": "art (genitive)"
                },
                {
                  "word": "Beschützer",
                  "lemma": "Beschützer",
                  "pos": "noun",
                  "meaning": "protector / patron (dative)"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "interjection",
                  "meaning": "hail"
                }
              ],
              "grammarNote": "Dative 'Der holden Kunst Beschützer' governed by 'Heil'."
            }
          ]
        },
        {
          "id": "a2_s4_c8",
          "speaker": "Chorus",
          "stageDirection": "Alle setzen sich Die vier Edelknaben treten hervor, sie sammeln in einem goldenen Becher von jedem der Sänger seinen auf ein zusammengerolltes Blättchen gezeichneten Namen; - darauf reichen sie den Becher Elisabeth, welche eines der Blättchen herauszieht und es wiederum den Edelknaben reicht; diese lesen den Namen und treten dann feierlich in die Mitte",
          "stageDirectionTranslation": "All sit down. The four pages step forward; they collect in a golden cup the name of each minstrel written on a rolled-up slip of paper;—then they present the cup to Elisabeth, who draws out one of the slips and hands it back to the pages; they read the name and then solemnly step into the center.",
          "lines": []
        },
        {
          "id": "a2_s4_c9",
          "speaker": "Four Pages",
          "lines": [
            {
              "id": "a2_s4_c9_l1",
              "original": "Wolfram von Eschenbach, beginne!",
              "literal": "Wolfram von Eschenbach, begin!",
              "tokens": [
                {
                  "word": "beginne",
                  "lemma": "beginnen",
                  "pos": "verb",
                  "meaning": "begin (imperative)"
                },
                {
                  "word": "Eschenbach",
                  "lemma": "Eschenbach",
                  "pos": "noun",
                  "meaning": "Eschenbach (proper name)"
                }
              ],
              "grammarNote": "Herald call."
            }
          ]
        },
        {
          "id": "a2_s4_c10",
          "speaker": "Four Pages",
          "stageDirection": "Sie setzen sich zu Füssen des Landgrafen und Elisabeths nieder. Wolfram erhebt sich. Tannhäuser stützt sich, wie in Träumerei verfallend, auf seine Harfe",
          "stageDirectionTranslation": "They sit down at the feet of the Landgrave and Elisabeth. Wolfram rises. Tannhäuser leans upon his harp, as if falling into a reverie.",
          "lines": [
            {
              "id": "a2_s4_c10_l1",
              "original": "Der Sängerkrieg",
              "literal": "The Singers' Contest",
              "tokens": [
                {
                  "word": "Der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "the (definite article)"
                },
                {
                  "word": "Sängerkrieg",
                  "lemma": "Sängerkrieg",
                  "pos": "noun",
                  "meaning": "singers' contest / song contest"
                }
              ],
              "grammarNote": "Title / cue announcement."
            }
          ]
        },
        {
          "id": "a2_s4_c11",
          "speaker": "Wolfram von Eschenbach",
          "pieceTitle": "Sängerwettstreit: Wolframs Gesang an die Minne (Blick ich umher)",
          "lines": [
            {
              "id": "a2_s4_c11_l1",
              "original": "Blick ich umher in diesem edlen Kreise,",
              "literal": "When I look around in this noble circle,",
              "tokens": [
                {
                  "word": "Blick",
                  "lemma": "blicken",
                  "pos": "verb",
                  "meaning": "look / gaze"
                },
                {
                  "word": "umher",
                  "lemma": "umher",
                  "pos": "adverb",
                  "meaning": "around / about"
                },
                {
                  "word": "edlen",
                  "lemma": "edel",
                  "pos": "adjective",
                  "meaning": "noble"
                },
                {
                  "word": "Kreise",
                  "lemma": "Kreis",
                  "pos": "noun",
                  "meaning": "circle / assembly (dative)"
                }
              ],
              "grammarNote": "Inversion with subordinate conditional/temporal sense ('Blick ich' = 'Wenn ich blicke')."
            },
            {
              "id": "a2_s4_c11_l2",
              "original": "welch hoher Anblick macht mein Herz erglühn!",
              "literal": "what a lofty sight makes my heart glow!",
              "tokens": [
                {
                  "word": "hoher",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "lofty / noble"
                },
                {
                  "word": "Anblick",
                  "lemma": "Anblick",
                  "pos": "noun",
                  "meaning": "sight / spectacle"
                },
                {
                  "word": "erglühn",
                  "lemma": "erglühen",
                  "pos": "verb",
                  "meaning": "glow / catch fire"
                }
              ],
              "grammarNote": "Causative construction 'macht... erglühn'."
            },
            {
              "id": "a2_s4_c11_l3",
              "original": "So viel der Helden, tapfer, deutsch und weise,",
              "literal": "So many heroes, valiant, German, and wise,",
              "tokens": [
                {
                  "word": "Helden",
                  "lemma": "Held",
                  "pos": "noun",
                  "meaning": "heroes (partitive genitive)"
                },
                {
                  "word": "tapfer",
                  "lemma": "tapfer",
                  "pos": "adjective",
                  "meaning": "valiant / brave"
                },
                {
                  "word": "deutsch",
                  "lemma": "deutsch",
                  "pos": "adjective",
                  "meaning": "German"
                },
                {
                  "word": "weise",
                  "lemma": "weise",
                  "pos": "adjective",
                  "meaning": "wise"
                }
              ],
              "grammarNote": "Partitive genitive 'der Helden' after 'So viel'."
            },
            {
              "id": "a2_s4_c11_l4",
              "original": "ein stolzer Eichwald, herrlich, frisch und grün;",
              "literal": "a proud oak forest, magnificent, fresh, and green; —",
              "tokens": [
                {
                  "word": "stolzer",
                  "lemma": "stolz",
                  "pos": "adjective",
                  "meaning": "proud"
                },
                {
                  "word": "Eichwald",
                  "lemma": "Eichwald",
                  "pos": "noun",
                  "meaning": "oak forest"
                },
                {
                  "word": "herrlich",
                  "lemma": "herrlich",
                  "pos": "adjective",
                  "meaning": "magnificent / splendid"
                },
                {
                  "word": "grün",
                  "lemma": "grün",
                  "pos": "adjective",
                  "meaning": "green"
                }
              ],
              "grammarNote": "Metaphor comparing the knights to a forest of sturdy German oaks."
            },
            {
              "id": "a2_s4_c11_l5",
              "original": "und hold und tugendsam erblick ich Frauen,",
              "literal": "and gracious and virtuous I behold women,",
              "tokens": [
                {
                  "word": "hold",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "gracious / lovely"
                },
                {
                  "word": "tugendsam",
                  "lemma": "tugendsam",
                  "pos": "adjective",
                  "meaning": "virtuous"
                },
                {
                  "word": "erblick",
                  "lemma": "erblicken",
                  "pos": "verb",
                  "meaning": "behold / perceive"
                },
                {
                  "word": "Frauen",
                  "lemma": "Frau",
                  "pos": "noun",
                  "meaning": "women / noble ladies"
                }
              ],
              "grammarNote": "Fronted adjectives acting as predicate adjectives to the object 'Frauen'."
            },
            {
              "id": "a2_s4_c11_l6",
              "original": "lieblicher Blüten düftereichsten Kranz.",
              "literal": "the most fragrant garland of lovely blossoms.",
              "tokens": [
                {
                  "word": "lieblicher",
                  "lemma": "lieblich",
                  "pos": "adjective",
                  "meaning": "lovely / sweet"
                },
                {
                  "word": "Blüten",
                  "lemma": "Blüte",
                  "pos": "noun",
                  "meaning": "blossoms (genitive pl.)"
                },
                {
                  "word": "düftereichsten",
                  "lemma": "duftreich",
                  "pos": "adjective",
                  "meaning": "most fragrant / richest in scent (superlative)"
                },
                {
                  "word": "Kranz",
                  "lemma": "Kranz",
                  "pos": "noun",
                  "meaning": "garland / wreath"
                }
              ],
              "grammarNote": "Metaphor comparing the court ladies to a garland of sweet blossoms."
            },
            {
              "id": "a2_s4_c11_l7",
              "original": "Es wird der Blick wohl trunken mir vom Schauen,",
              "literal": "My gaze indeed grows drunken from beholding,",
              "tokens": [
                {
                  "word": "Blick",
                  "lemma": "Blick",
                  "pos": "noun",
                  "meaning": "gaze / glance"
                },
                {
                  "word": "trunken",
                  "lemma": "trunken",
                  "pos": "adjective",
                  "meaning": "drunk / intoxicated"
                },
                {
                  "word": "Schauen",
                  "lemma": "Schauen",
                  "pos": "noun",
                  "meaning": "beholding / looking"
                }
              ],
              "grammarNote": "Impersonal dummy 'es' with dative of reference 'mir'."
            },
            {
              "id": "a2_s4_c11_l8",
              "original": "mein Lied verstummt vor solcher Anmut Glanz.",
              "literal": "my song falls silent before the splendor of such grace.",
              "tokens": [
                {
                  "word": "verstummt",
                  "lemma": "verstummen",
                  "pos": "verb",
                  "meaning": "falls silent / is hushed"
                },
                {
                  "word": "Anmut",
                  "lemma": "Anmut",
                  "pos": "noun",
                  "meaning": "grace (genitive)"
                },
                {
                  "word": "Glanz",
                  "lemma": "Glanz",
                  "pos": "noun",
                  "meaning": "splendor / radiance"
                }
              ],
              "grammarNote": "Pre-positioned genitive 'solcher Anmut Glanz'."
            },
            {
              "id": "a2_s4_c11_l9",
              "original": "Da blick ich auf zu einem nur der Sterne,",
              "literal": "Then I gaze up to only one of the stars,",
              "tokens": [
                {
                  "word": "blick auf",
                  "lemma": "aufblicken",
                  "pos": "verb",
                  "meaning": "look up / gaze up"
                },
                {
                  "word": "Sterne",
                  "lemma": "Stern",
                  "pos": "noun",
                  "meaning": "stars (genitive pl.)"
                }
              ],
              "grammarNote": "Wolfram shifts his gaze to Elisabeth, idealized as an unattainable star."
            },
            {
              "id": "a2_s4_c11_l10",
              "original": "der an dem Himmel, der mich blendet, steht:",
              "literal": "that stands in the heaven that dazzles me: —",
              "tokens": [
                {
                  "word": "Himmel",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven / sky"
                },
                {
                  "word": "blendet",
                  "lemma": "blenden",
                  "pos": "verb",
                  "meaning": "dazzles / blinds"
                },
                {
                  "word": "steht",
                  "lemma": "stehen",
                  "pos": "verb",
                  "meaning": "stands"
                }
              ],
              "grammarNote": "Nested relative clauses: 'der... steht' and 'der mich blendet'."
            },
            {
              "id": "a2_s4_c11_l11",
              "original": "es sammelt sich mein Geist aus jeder Ferne,",
              "literal": "my spirit gathers itself from every distance,",
              "tokens": [
                {
                  "word": "sammelt",
                  "lemma": "sammeln",
                  "pos": "verb",
                  "meaning": "gathers / collects (reflexive)"
                },
                {
                  "word": "Geist",
                  "lemma": "Geist",
                  "pos": "noun",
                  "meaning": "spirit / mind"
                },
                {
                  "word": "Ferne",
                  "lemma": "Ferne",
                  "pos": "noun",
                  "meaning": "distance"
                }
              ],
              "grammarNote": "Reflexive 'sich sammeln' meaning to compose oneself / concentrate."
            },
            {
              "id": "a2_s4_c11_l12",
              "original": "andächtig sinkt die Seele im Gebet.",
              "literal": "devoutly the soul sinks in prayer.",
              "tokens": [
                {
                  "word": "andächtig",
                  "lemma": "andächtig",
                  "pos": "adverb",
                  "meaning": "devoutly / reverently"
                },
                {
                  "word": "sinkt",
                  "lemma": "sinken",
                  "pos": "verb",
                  "meaning": "sinks"
                },
                {
                  "word": "Seele",
                  "lemma": "Seele",
                  "pos": "noun",
                  "meaning": "soul"
                },
                {
                  "word": "Gebet",
                  "lemma": "Gebet",
                  "pos": "noun",
                  "meaning": "prayer"
                }
              ]
            },
            {
              "id": "a2_s4_c11_l13",
              "original": "Und sieh, mir zeiget sich ein Wunderbronnen,",
              "literal": "And lo, there reveals itself to me a wondrous fountain,",
              "tokens": [
                {
                  "word": "sieh",
                  "lemma": "sehen",
                  "pos": "interjection",
                  "meaning": "lo! / see! (imperative)"
                },
                {
                  "word": "zeiget",
                  "lemma": "zeigen",
                  "pos": "verb",
                  "meaning": "shows / reveals (reflexive)"
                },
                {
                  "word": "Wunderbronnen",
                  "lemma": "Wunderbronnen",
                  "pos": "noun",
                  "meaning": "miraculous wellspring / fountain"
                }
              ],
              "grammarNote": "Archaic 'Bronnen' for 'Brunnen'. Reflexive 'sich zeigen'."
            },
            {
              "id": "a2_s4_c11_l14",
              "original": "in den mein Geist voll hohen Staunens blickt:",
              "literal": "into which my spirit gazes full of lofty wonder:",
              "tokens": [
                {
                  "word": "Geist",
                  "lemma": "Geist",
                  "pos": "noun",
                  "meaning": "spirit"
                },
                {
                  "word": "Staunens",
                  "lemma": "Staunen",
                  "pos": "noun",
                  "meaning": "wonder / amazement (genitive)"
                },
                {
                  "word": "blickt",
                  "lemma": "blicken",
                  "pos": "verb",
                  "meaning": "gazes"
                }
              ],
              "grammarNote": "Relative pronoun 'in den' referring to 'Wunderbronnen'."
            },
            {
              "id": "a2_s4_c11_l15",
              "original": "aus ihm er schöpfet gnadenreiche Wonnen,",
              "literal": "from it he draws grace-abounding delights,",
              "tokens": [
                {
                  "word": "schöpfet",
                  "lemma": "schöpfen",
                  "pos": "verb",
                  "meaning": "draws (water / delight)"
                },
                {
                  "word": "gnadenreiche",
                  "lemma": "gnadenreich",
                  "pos": "adjective",
                  "meaning": "grace-filled / gracious"
                },
                {
                  "word": "Wonnen",
                  "lemma": "Wonne",
                  "pos": "noun",
                  "meaning": "delights / raptures"
                }
              ],
              "grammarNote": "Pronoun 'er' refers to 'mein Geist'."
            },
            {
              "id": "a2_s4_c11_l16",
              "original": "durch die mein Herz er namenlos erquickt.",
              "literal": "through which he ineffably refreshes my heart.",
              "tokens": [
                {
                  "word": "namenlos",
                  "lemma": "namenlos",
                  "pos": "adverb",
                  "meaning": "ineffably / beyond words"
                },
                {
                  "word": "erquickt",
                  "lemma": "erquicken",
                  "pos": "verb",
                  "meaning": "refreshes / revives"
                }
              ],
              "grammarNote": "Relative clause with 'durch die' referring to 'gnadenreiche Wonnen'."
            },
            {
              "id": "a2_s4_c11_l17",
              "original": "Und nimmer möcht ich diesen Bronnen trüben,",
              "literal": "And never would I trouble this fountain,",
              "tokens": [
                {
                  "word": "nimmer",
                  "lemma": "nimmer",
                  "pos": "adverb",
                  "meaning": "never"
                },
                {
                  "word": "möcht",
                  "lemma": "mögen",
                  "pos": "verb",
                  "meaning": "would like / wish (subjunctive II)"
                },
                {
                  "word": "trüben",
                  "lemma": "trüben",
                  "pos": "verb",
                  "meaning": "trouble / muddy / defile"
                }
              ],
              "grammarNote": "Subjunctive II 'möchte' expressing respectful reluctance. Metaphor of keeping the wellspring pure."
            },
            {
              "id": "a2_s4_c11_l18",
              "original": "berühren nicht den Quell mit frevlem Mut:",
              "literal": "nor touch the spring with insolent spirit:",
              "tokens": [
                {
                  "word": "berühren",
                  "lemma": "berühren",
                  "pos": "verb",
                  "meaning": "touch"
                },
                {
                  "word": "Quell",
                  "lemma": "Quell",
                  "pos": "noun",
                  "meaning": "spring / fountainhead"
                },
                {
                  "word": "frevlem",
                  "lemma": "frevel",
                  "pos": "adjective",
                  "meaning": "sacrilegious / insolent"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "spirit / mood / disposition"
                }
              ],
              "grammarNote": "'Mut' in the Middle High German / poetic sense of 'Gemüt / Gesinnung' (mindset, spirit)."
            },
            {
              "id": "a2_s4_c11_l19",
              "original": "in Anbetung möcht ich mich opfernd üben,",
              "literal": "in adoration I would practice sacrificing myself,",
              "tokens": [
                {
                  "word": "Anbetung",
                  "lemma": "Anbetung",
                  "pos": "noun",
                  "meaning": "adoration / worship"
                },
                {
                  "word": "opfernd",
                  "lemma": "opfernd",
                  "pos": "adverb",
                  "meaning": "sacrificially"
                },
                {
                  "word": "üben",
                  "lemma": "üben",
                  "pos": "verb",
                  "meaning": "occupy oneself / practice"
                }
              ],
              "grammarNote": "Reflexive 'sich üben in' meaning to practice or dedicate oneself to."
            },
            {
              "id": "a2_s4_c11_l20",
              "original": "vergiessen froh mein letztes Herzensblut!",
              "literal": "shed gladly my last heart's blood!",
              "tokens": [
                {
                  "word": "vergiessen",
                  "lemma": "vergiessen",
                  "pos": "verb",
                  "meaning": "shed / pour out"
                },
                {
                  "word": "froh",
                  "lemma": "froh",
                  "pos": "adverb",
                  "meaning": "gladly"
                },
                {
                  "word": "Herzensblut",
                  "lemma": "Herzensblut",
                  "pos": "noun",
                  "meaning": "heart's blood / lifeblood"
                }
              ],
              "grammarNote": "Infinitive dependent on 'möchte ich' from line 162."
            },
            {
              "id": "a2_s4_c11_l21",
              "original": "Ihr Edlen mögt in diesen Worten lesen,",
              "literal": "Ye nobles may read in these words",
              "tokens": [
                {
                  "word": "Edlen",
                  "lemma": "Edle",
                  "pos": "noun",
                  "meaning": "nobles"
                },
                {
                  "word": "mögt",
                  "lemma": "mögen",
                  "pos": "verb",
                  "meaning": "may (2nd pl.)"
                },
                {
                  "word": "lesen",
                  "lemma": "lesen",
                  "pos": "verb",
                  "meaning": "read / discern"
                }
              ]
            },
            {
              "id": "a2_s4_c11_l22",
              "original": "wie ich erkenn der Liebe reinstes Wesen.",
              "literal": "how I perceive love's purest nature.",
              "tokens": [
                {
                  "word": "erkenn",
                  "lemma": "erkennen",
                  "pos": "verb",
                  "meaning": "perceive / recognize"
                },
                {
                  "word": "reinstes",
                  "lemma": "rein",
                  "pos": "adjective",
                  "meaning": "purest (superlative)"
                },
                {
                  "word": "Wesen",
                  "lemma": "Wesen",
                  "pos": "noun",
                  "meaning": "nature / essence"
                }
              ],
              "grammarNote": "Pre-positioned genitive 'der Liebe reinstes Wesen'."
            }
          ]
        },
        {
          "id": "a2_s4_c12",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "Er setzt sich",
          "stageDirectionTranslation": "He sits down.",
          "lines": []
        },
        {
          "id": "a2_s4_c13",
          "speaker": "Knights and Ladies",
          "stageDirection": "in beifälliger Bewegung",
          "stageDirectionTranslation": "with an approving gesture",
          "lines": [
            {
              "id": "a2_s4_c13_l1",
              "original": "So ist's! So ist's! Gepriesen sei dein Lied!",
              "literal": "So it is! So it is! Praised be thy song!",
              "tokens": [
                {
                  "word": "ist's",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "it is (contraction)"
                },
                {
                  "word": "Gepriesen",
                  "lemma": "preisen",
                  "pos": "verb",
                  "meaning": "praised"
                },
                {
                  "word": "Lied",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "song"
                }
              ],
              "grammarNote": "Acclamation formula."
            }
          ]
        },
        {
          "id": "a2_s4_c14",
          "speaker": "Knights and Ladies",
          "stageDirection": "Tannhäuser fährt wie aus dem Traume auf; seine trotzige Miene nimmt sofort den Ausdruck der Entzückung an, mit welchem er in die Luft vor sich hinstarrt; ein leises Zittern der Hand, die bewusstlos nach den Saiten der Harfe sucht, ein unheimliches Lächeln des Mundes zeigt an, dass ein fremder Zauber sich seiner bemächtigt. Als er dann, wie erwachend, kräftig in die Harfe greift, verrät seine ganze Haltung, dass er kaum mehr weiss, wo er ist und namentlich Elisabeth nicht mehr beachtet",
          "stageDirectionTranslation": "Tannhäuser starts up as if from a dream; his defiant expression instantly turns into one of rapturous ecstasy with which he stares into the air before him; a slight trembling of the hand unconsciously reaching for the harp strings, and an uncanny smile upon his lips reveal that an alien enchantment has taken possession of him. When he then, as if awakening, strikes the harp vigorously, his whole demeanor shows that he scarcely knows where he is any longer, and in particular takes no more notice of Elisabeth.",
          "lines": []
        },
        {
          "id": "a2_s4_c15",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s4_c15_l1",
              "original": "O Wolfram, der du also sangest,",
              "literal": "O Wolfram, who didst sing thus,",
              "tokens": [
                {
                  "word": "der du",
                  "lemma": "der du",
                  "pos": "pronoun",
                  "meaning": "who / thou that (relative pronoun with 2nd pers.)"
                },
                {
                  "word": "also",
                  "lemma": "also",
                  "pos": "adverb",
                  "meaning": "thus / in this manner"
                },
                {
                  "word": "sangest",
                  "lemma": "singen",
                  "pos": "verb",
                  "meaning": "didst sing (archaic 2nd pers. past)"
                }
              ],
              "grammarNote": "Archaic relative construction incorporating 2nd-person pronoun 'der du sangest'."
            },
            {
              "id": "a2_s4_c15_l2",
              "original": "du hast die Liebe arg entstellt;",
              "literal": "thou hast badly disfigured love;",
              "tokens": [
                {
                  "word": "arg",
                  "lemma": "arg",
                  "pos": "adverb",
                  "meaning": "badly / grievously"
                },
                {
                  "word": "entstellt",
                  "lemma": "entstellen",
                  "pos": "verb",
                  "meaning": "disfigured / misrepresented"
                }
              ]
            },
            {
              "id": "a2_s4_c15_l3",
              "original": "wenn du in solchem Schmachten bangest,",
              "literal": "if thou pinest in such languishing,",
              "tokens": [
                {
                  "word": "Schmachten",
                  "lemma": "Schmachten",
                  "pos": "noun",
                  "meaning": "languishing / yearning"
                },
                {
                  "word": "bangest",
                  "lemma": "bangen",
                  "pos": "verb",
                  "meaning": "art anxious / pinest"
                }
              ],
              "grammarNote": "Substantivized infinitive 'das Schmachten'."
            },
            {
              "id": "a2_s4_c15_l4",
              "original": "versiegte wahrlich wohl die Welt!",
              "literal": "truly the world would run dry!",
              "tokens": [
                {
                  "word": "versiegte",
                  "lemma": "versiegen",
                  "pos": "verb",
                  "meaning": "would dry up / run dry (subjunctive II)"
                },
                {
                  "word": "wahrlich",
                  "lemma": "wahrlich",
                  "pos": "adverb",
                  "meaning": "truly / in truth"
                },
                {
                  "word": "Welt",
                  "lemma": "Welt",
                  "pos": "noun",
                  "meaning": "world"
                }
              ],
              "grammarNote": "Subjunctive II 'versiegte' expressing hypothetical consequence."
            },
            {
              "id": "a2_s4_c15_l5",
              "original": "Zu Gottes Preis in hoch erhabne Fernen,",
              "literal": "To God's praise in loftily exalted distances,",
              "tokens": [
                {
                  "word": "Gottes",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God's (genitive)"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "praise"
                },
                {
                  "word": "erhabne",
                  "lemma": "erhaben",
                  "pos": "verb",
                  "meaning": "exalted / sublime",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "Fernen",
                  "lemma": "Ferne",
                  "pos": "noun",
                  "meaning": "distances / heights"
                }
              ]
            },
            {
              "id": "a2_s4_c15_l6",
              "original": "blickt auf zum Himmel, blickt auf zu seinen Sternen:",
              "literal": "look up to heaven, look up to its stars:",
              "tokens": [
                {
                  "word": "blickt auf",
                  "lemma": "aufblicken",
                  "pos": "verb",
                  "meaning": "look up (imperative 2nd pl.)"
                },
                {
                  "word": "Himmel",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven"
                },
                {
                  "word": "Sternen",
                  "lemma": "Stern",
                  "pos": "noun",
                  "meaning": "stars (dative pl.)"
                }
              ],
              "grammarNote": "Imperative addressed to the assembly."
            },
            {
              "id": "a2_s4_c15_l7",
              "original": "Anbetung solchen Wundern zollt,",
              "literal": "Pay adoration to such wonders,",
              "tokens": [
                {
                  "word": "Anbetung",
                  "lemma": "Anbetung",
                  "pos": "noun",
                  "meaning": "adoration / worship"
                },
                {
                  "word": "Wundern",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "wonders / miracles (dative)"
                },
                {
                  "word": "zollt",
                  "lemma": "zollen",
                  "pos": "verb",
                  "meaning": "pay / render (imperative pl.)"
                }
              ],
              "grammarNote": "'Zollen' governing accusative 'Anbetung' and dative 'solchen Wundern'."
            },
            {
              "id": "a2_s4_c15_l8",
              "original": "da ihr sie nicht begreifen sollt!",
              "literal": "since ye are not meant to comprehend them!",
              "tokens": [
                {
                  "word": "da",
                  "lemma": "da",
                  "pos": "conjunction",
                  "meaning": "since / as"
                },
                {
                  "word": "begreifen",
                  "lemma": "begreifen",
                  "pos": "verb",
                  "meaning": "comprehend / grasp"
                },
                {
                  "word": "sollt",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "are meant to / should"
                }
              ],
              "grammarNote": "'sie' refers to 'solchen Wundern' (plural pronoun 'them')."
            },
            {
              "id": "a2_s4_c15_l9",
              "original": "Doch was sich der Berührung beuget,",
              "literal": "Yet that which yields to touch,",
              "tokens": [
                {
                  "word": "Berührung",
                  "lemma": "Berührung",
                  "pos": "noun",
                  "meaning": "touch"
                },
                {
                  "word": "beuget",
                  "lemma": "beugen",
                  "pos": "verb",
                  "meaning": "yields / bends (reflexive)"
                }
              ],
              "grammarNote": "'Sich beugen' governing dative 'der Berührung'."
            },
            {
              "id": "a2_s4_c15_l10",
              "original": "euch Herz und Sinnen nahe liegt,",
              "literal": "lies close to your heart and senses,",
              "tokens": [
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "Sinnen",
                  "lemma": "Sinn",
                  "pos": "noun",
                  "meaning": "senses (dative pl.)"
                },
                {
                  "word": "nahe",
                  "lemma": "nah",
                  "pos": "adverb",
                  "meaning": "close / near"
                }
              ],
              "grammarNote": "Dative of reference 'euch'."
            },
            {
              "id": "a2_s4_c15_l11",
              "original": "was sich, aus gleichem Stoff erzeuget,",
              "literal": "what, created from the same substance,",
              "tokens": [
                {
                  "word": "gleichem",
                  "lemma": "gleich",
                  "pos": "adjective",
                  "meaning": "same / equal"
                },
                {
                  "word": "Stoff",
                  "lemma": "Stoff",
                  "pos": "noun",
                  "meaning": "substance / matter"
                },
                {
                  "word": "erzeuget",
                  "lemma": "erzeugen",
                  "pos": "verb",
                  "meaning": "generated / produced"
                }
              ],
              "grammarNote": "Appositive participial phrase referring to human bodily nature."
            },
            {
              "id": "a2_s4_c15_l12",
              "original": "in weicher Formung an mich schmiegt:",
              "literal": "nestles against me in soft contours:",
              "tokens": [
                {
                  "word": "weicher",
                  "lemma": "weich",
                  "pos": "adjective",
                  "meaning": "soft"
                },
                {
                  "word": "Formung",
                  "lemma": "Formung",
                  "pos": "noun",
                  "meaning": "contour / shaping"
                },
                {
                  "word": "schmiegt",
                  "lemma": "schmiegen",
                  "pos": "verb",
                  "meaning": "nestles / clings (reflexive)"
                }
              ],
              "grammarNote": "Reflexive 'sich schmiegen an'."
            },
            {
              "id": "a2_s4_c15_l13",
              "original": "ich nah ihm kühn, dem Quell der Wonnen,",
              "literal": "I approach it boldly, the wellspring of delights,",
              "tokens": [
                {
                  "word": "nah",
                  "lemma": "nahen",
                  "pos": "verb",
                  "meaning": "approach"
                },
                {
                  "word": "kühn",
                  "lemma": "kühn",
                  "pos": "adverb",
                  "meaning": "boldly"
                },
                {
                  "word": "Quell",
                  "lemma": "Quell",
                  "pos": "noun",
                  "meaning": "spring / wellspring"
                },
                {
                  "word": "Wonnen",
                  "lemma": "Wonne",
                  "pos": "noun",
                  "meaning": "delights"
                }
              ],
              "grammarNote": "Pronoun 'ihm' refers to 'dem Quell' (masculine, dative)."
            },
            {
              "id": "a2_s4_c15_l14",
              "original": "in die kein Zagen je sich mischt,",
              "literal": "into which no hesitation ever mingles,",
              "tokens": [
                {
                  "word": "Zagen",
                  "lemma": "Zagen",
                  "pos": "noun",
                  "meaning": "hesitation / wavering / dread"
                },
                {
                  "word": "mischt",
                  "lemma": "mischen",
                  "pos": "verb",
                  "meaning": "mingles (reflexive)"
                }
              ],
              "grammarNote": "Relative pronoun 'in die' referring to 'Wonnen' (plural)."
            },
            {
              "id": "a2_s4_c15_l15",
              "original": "denn unversiegbar ist der Bronnen,",
              "literal": "for unquenchable is the fountain,",
              "tokens": [
                {
                  "word": "unversiegbar",
                  "lemma": "unversiegbar",
                  "pos": "adjective",
                  "meaning": "inexhaustible / unquenchable"
                },
                {
                  "word": "Bronnen",
                  "lemma": "Bronnen",
                  "pos": "noun",
                  "meaning": "fountain / wellspring"
                }
              ],
              "grammarNote": "Fronted predicate adjective."
            },
            {
              "id": "a2_s4_c15_l16",
              "original": "wie mein Verlangen nie erlischt:",
              "literal": "as my longing is never extinguished:",
              "tokens": [
                {
                  "word": "Verlangen",
                  "lemma": "Verlangen",
                  "pos": "noun",
                  "meaning": "longing / desire"
                },
                {
                  "word": "erlischt",
                  "lemma": "erlöschen",
                  "pos": "verb",
                  "meaning": "is extinguished / goes out"
                }
              ]
            },
            {
              "id": "a2_s4_c15_l17",
              "original": "so, dass mein Sehnen ewig brenne;",
              "literal": "so that my longing may burn eternally;",
              "tokens": [
                {
                  "word": "Sehnen",
                  "lemma": "Sehnen",
                  "pos": "noun",
                  "meaning": "yearning / longing"
                },
                {
                  "word": "ewig",
                  "lemma": "ewig",
                  "pos": "adverb",
                  "meaning": "eternally / ever"
                },
                {
                  "word": "brenne",
                  "lemma": "brennen",
                  "pos": "verb",
                  "meaning": "burn (subjunctive I)"
                }
              ],
              "grammarNote": "Consecutive subjunctive clause 'so, dass... brenne'."
            },
            {
              "id": "a2_s4_c15_l18",
              "original": "lab an dem Quell ich ewig mich!",
              "literal": "at the spring I ever refresh myself!",
              "tokens": [
                {
                  "word": "lab",
                  "lemma": "laben",
                  "pos": "verb",
                  "meaning": "refresh / quench (reflexive)"
                },
                {
                  "word": "Quell",
                  "lemma": "Quell",
                  "pos": "noun",
                  "meaning": "spring"
                }
              ],
              "grammarNote": "Reflexive 'sich laben an'."
            },
            {
              "id": "a2_s4_c15_l19",
              "original": "und wisse, Wolfram, so erkenne",
              "literal": "and know, Wolfram, thus perceive",
              "tokens": [
                {
                  "word": "wisse",
                  "lemma": "wissen",
                  "pos": "verb",
                  "meaning": "know (imperative)"
                },
                {
                  "word": "erkenne",
                  "lemma": "erkennen",
                  "pos": "verb",
                  "meaning": "perceive / recognize"
                }
              ],
              "grammarNote": "Imperative 'wisse' with enjambment into line 186."
            },
            {
              "id": "a2_s4_c15_l20",
              "original": "der Liebe wahrstes Wesen ich.",
              "literal": "the truest nature of love do I.",
              "tokens": [
                {
                  "word": "wahrstes",
                  "lemma": "wahr",
                  "pos": "adjective",
                  "meaning": "truest (superlative)"
                },
                {
                  "word": "Wesen",
                  "lemma": "Wesen",
                  "pos": "noun",
                  "meaning": "nature / essence"
                }
              ],
              "grammarNote": "Completes line 185: 'so erkenne der Liebe wahrstes Wesen ich' (with final emphatic subject 'ich')."
            }
          ]
        },
        {
          "id": "a2_s4_c16",
          "speaker": "Tannhäuser",
          "stageDirection": "Allgemeines Erstaunen. Elisabeth im Widerstreit mit Hingerissenheit und banger Befremdung Biterolf erhebt sich schnell und zornig",
          "stageDirectionTranslation": "General astonishment. Elisabeth torn between enraptured fascination and anxious bewilderment. Biterolf rises quickly and angrily.",
          "lines": []
        },
        {
          "id": "a2_s4_c17",
          "speaker": "Biterolf",
          "lines": [
            {
              "id": "a2_s4_c17_l1",
              "original": "Heraus zum Kampfe mit uns allen!",
              "literal": "Come forth to combat with us all!",
              "tokens": [
                {
                  "word": "Heraus",
                  "lemma": "heraus",
                  "pos": "interjection",
                  "meaning": "come forth! / out!"
                },
                {
                  "word": "Kampfe",
                  "lemma": "Kampf",
                  "pos": "noun",
                  "meaning": "combat / battle"
                }
              ],
              "grammarNote": "Elliptical imperative challenge."
            },
            {
              "id": "a2_s4_c17_l2",
              "original": "Wer bliebe ruhig, hört er dich?",
              "literal": "Who could remain calm, hearing thee?",
              "tokens": [
                {
                  "word": "bliebe",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "would remain (subjunctive II)"
                },
                {
                  "word": "ruhig",
                  "lemma": "ruhig",
                  "pos": "adjective",
                  "meaning": "calm / quiet"
                },
                {
                  "word": "hört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hears / hearing"
                }
              ],
              "grammarNote": "Rhetorical question with subjunctive II 'bliebe' and inverted conditional 'hört er dich'."
            },
            {
              "id": "a2_s4_c17_l3",
              "original": "Wird deinem Hochmut es gefallen,",
              "literal": "If it shall please thy arrogance,",
              "tokens": [
                {
                  "word": "Hochmut",
                  "lemma": "Hochmut",
                  "pos": "noun",
                  "meaning": "arrogance / pride (dative)"
                },
                {
                  "word": "gefallen",
                  "lemma": "gefallen",
                  "pos": "verb",
                  "meaning": "please"
                }
              ],
              "grammarNote": "Inverted conditional clause governing dative 'deinem Hochmut'."
            },
            {
              "id": "a2_s4_c17_l4",
              "original": "so höre, Lästrer, nun auch mich!",
              "literal": "then hear, blasphemer, now me too!",
              "tokens": [
                {
                  "word": "höre",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear (imperative)"
                },
                {
                  "word": "Lästrer",
                  "lemma": "Lästerer",
                  "pos": "noun",
                  "meaning": "blasphemer / slanderer"
                }
              ],
              "grammarNote": "Vocative insult 'Lästrer'."
            },
            {
              "id": "a2_s4_c17_l5",
              "original": "Wenn mich begeistert hohe Liebe,",
              "literal": "When lofty love inspires me,",
              "tokens": [
                {
                  "word": "begeistert",
                  "lemma": "begeistern",
                  "pos": "verb",
                  "meaning": "inspires / animates"
                },
                {
                  "word": "hohe",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "lofty / noble"
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
              "id": "a2_s4_c17_l6",
              "original": "stählt sie die Waffen mir mit Mut;",
              "literal": "it steels my weapons with courage;",
              "tokens": [
                {
                  "word": "stählt",
                  "lemma": "stählen",
                  "pos": "verb",
                  "meaning": "steels / tempers"
                },
                {
                  "word": "Waffen",
                  "lemma": "Waffe",
                  "pos": "noun",
                  "meaning": "weapons"
                },
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                }
              ],
              "grammarNote": "Dative of possession/interest 'mir'."
            },
            {
              "id": "a2_s4_c17_l7",
              "original": "dass ewig ungeschmäht sie bliebe,",
              "literal": "that it might remain forever unreviled,",
              "tokens": [
                {
                  "word": "ungeschmäht",
                  "lemma": "ungeschmäht",
                  "pos": "adjective",
                  "meaning": "unreviled / undefiled"
                },
                {
                  "word": "bliebe",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "might remain (subjunctive II)"
                }
              ],
              "grammarNote": "Purpose clause with subjunctive II 'bliebe'. 'sie' refers to 'hohe Liebe'."
            },
            {
              "id": "a2_s4_c17_l8",
              "original": "vergöss' ich stolz mein letztes Blut!",
              "literal": "I would proudly shed my last blood!",
              "tokens": [
                {
                  "word": "vergöss'",
                  "lemma": "vergiessen",
                  "pos": "verb",
                  "meaning": "would shed (subjunctive II)"
                },
                {
                  "word": "stolz",
                  "lemma": "stolz",
                  "pos": "adverb",
                  "meaning": "proudly"
                },
                {
                  "word": "Blut",
                  "lemma": "Blut",
                  "pos": "noun",
                  "meaning": "blood"
                }
              ],
              "grammarNote": "Subjunctive II conditional apodosis."
            },
            {
              "id": "a2_s4_c17_l9",
              "original": "Für Frauenehr und hohe Tugend",
              "literal": "For woman's honor and lofty virtue",
              "tokens": [
                {
                  "word": "Frauenehr",
                  "lemma": "Frauenehre",
                  "pos": "noun",
                  "meaning": "woman's honor"
                },
                {
                  "word": "Tugend",
                  "lemma": "Tugend",
                  "pos": "noun",
                  "meaning": "virtue"
                }
              ],
              "grammarNote": "Apocope in compound 'Frauenehr'."
            },
            {
              "id": "a2_s4_c17_l10",
              "original": "als Ritter kämpf ich mit dem Schwert;",
              "literal": "as a knight I fight with the sword;",
              "tokens": [
                {
                  "word": "Ritter",
                  "lemma": "Ritter",
                  "pos": "noun",
                  "meaning": "knight"
                },
                {
                  "word": "kämpf",
                  "lemma": "kämpfen",
                  "pos": "verb",
                  "meaning": "fight / battle"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                }
              ]
            },
            {
              "id": "a2_s4_c17_l11",
              "original": "doch, was Genuss beut deiner Jugend,",
              "literal": "yet what offers pleasure to thy youth,",
              "tokens": [
                {
                  "word": "Genuss",
                  "lemma": "Genuss",
                  "pos": "noun",
                  "meaning": "pleasure / sensual enjoyment"
                },
                {
                  "word": "beut",
                  "lemma": "bieten",
                  "pos": "verb",
                  "meaning": "offers / presents (archaic)"
                },
                {
                  "word": "Jugend",
                  "lemma": "Jugend",
                  "pos": "noun",
                  "meaning": "youth"
                }
              ],
              "grammarNote": "Archaic strong present tense 'beut' for 'bietet'."
            },
            {
              "id": "a2_s4_c17_l12",
              "original": "ist wohlfeil, keines Streiches wert!",
              "literal": "is cheap, worthy of no blow!",
              "tokens": [
                {
                  "word": "wohlfeil",
                  "lemma": "wohlfeil",
                  "pos": "adjective",
                  "meaning": "cheap / vulgar / paltry"
                },
                {
                  "word": "Streiches",
                  "lemma": "Streich",
                  "pos": "noun",
                  "meaning": "sword-stroke / blow (genitive)"
                },
                {
                  "word": "wert",
                  "lemma": "wert",
                  "pos": "adjective",
                  "meaning": "worthy of"
                }
              ],
              "grammarNote": "'Wert' governing genitive 'keines Streiches'."
            }
          ]
        },
        {
          "id": "a2_s4_c18",
          "speaker": "Knights and Ladies",
          "stageDirection": "in tobendem Beifalle",
          "stageDirectionTranslation": "in raging applause",
          "lines": [
            {
              "id": "a2_s4_c18_l1",
              "original": "Heil, Biterolf! Hier unser Schwert!",
              "literal": "Hail, Biterolf! Here is our sword!",
              "tokens": [
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "interjection",
                  "meaning": "hail"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                }
              ],
              "grammarNote": "Acclamation of knightly solidarity."
            }
          ]
        },
        {
          "id": "a2_s4_c19",
          "speaker": "Tannhäuser",
          "stageDirection": "mit immer steigender Hitze auffahrend",
          "stageDirectionTranslation": "starting up with ever increasing heat",
          "lines": [
            {
              "id": "a2_s4_c19_l1",
              "original": "Ha, tör'ger Prahler Biterolf!",
              "literal": "Ha, foolish braggart Biterolf!",
              "tokens": [
                {
                  "word": "Ha",
                  "lemma": "ha",
                  "pos": "interjection",
                  "meaning": "ha!"
                },
                {
                  "word": "tör'ger",
                  "lemma": "töricht",
                  "pos": "adjective",
                  "meaning": "foolish"
                },
                {
                  "word": "Prahler",
                  "lemma": "Prahler",
                  "pos": "noun",
                  "meaning": "braggart / boaster"
                }
              ]
            },
            {
              "id": "a2_s4_c19_l2",
              "original": "Singst du von Liebe, grimmer Wolf!",
              "literal": "Dost thou sing of love, grim wolf!",
              "tokens": [
                {
                  "word": "grimmer",
                  "lemma": "grimm",
                  "pos": "adjective",
                  "meaning": "grim / fierce"
                },
                {
                  "word": "Wolf",
                  "lemma": "Wolf",
                  "pos": "noun",
                  "meaning": "wolf"
                }
              ],
              "grammarNote": "Pun on Biterolf's name ('Biter-olf' / 'Wolf')."
            },
            {
              "id": "a2_s4_c19_l3",
              "original": "Gewisslich hast du nicht gemeint,",
              "literal": "Certainly thou didst not mean",
              "tokens": [
                {
                  "word": "Gewisslich",
                  "lemma": "gewisslich",
                  "pos": "adverb",
                  "meaning": "certainly / assuredly"
                },
                {
                  "word": "gemeint",
                  "lemma": "meinen",
                  "pos": "verb",
                  "meaning": "meant / intended"
                }
              ]
            },
            {
              "id": "a2_s4_c19_l4",
              "original": "was mir geniessenswert erscheint!",
              "literal": "what seems worthy of enjoyment to me!",
              "tokens": [
                {
                  "word": "geniessenswert",
                  "lemma": "geniessenswert",
                  "pos": "verb",
                  "meaning": "worthy of enjoyment / relishable",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "erscheint",
                  "lemma": "erscheinen",
                  "pos": "verb",
                  "meaning": "seems / appears"
                }
              ]
            },
            {
              "id": "a2_s4_c19_l5",
              "original": "Was hast du, Ärmster, wohl genossen?",
              "literal": "What, poor wretch, hast thou ever enjoyed?",
              "tokens": [
                {
                  "word": "Ärmster",
                  "lemma": "arm",
                  "pos": "noun",
                  "meaning": "poorest wretch (vocative)"
                },
                {
                  "word": "genossen",
                  "lemma": "geniessen",
                  "pos": "verb",
                  "meaning": "enjoyed / tasted"
                }
              ],
              "grammarNote": "Rhetorical taunt with 'wohl' ('ever / indeed')."
            },
            {
              "id": "a2_s4_c19_l6",
              "original": "Dein Leben war nicht liebereich,",
              "literal": "Thy life was not rich in love, —",
              "tokens": [
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                },
                {
                  "word": "liebereich",
                  "lemma": "liebereich",
                  "pos": "adjective",
                  "meaning": "rich in love / loving"
                }
              ]
            },
            {
              "id": "a2_s4_c19_l7",
              "original": "und was von Freuden dir entsprossen,",
              "literal": "and whatever joys sprouted for thee,",
              "tokens": [
                {
                  "word": "Freuden",
                  "lemma": "Freude",
                  "pos": "noun",
                  "meaning": "joys (partitive genitive/dative)"
                },
                {
                  "word": "entsprossen",
                  "lemma": "entsprießen",
                  "pos": "verb",
                  "meaning": "sprouted / sprang forth"
                }
              ],
              "grammarNote": "Partitive construction 'was von Freuden'."
            },
            {
              "id": "a2_s4_c19_l8",
              "original": "das galt wohl wahrlich keinen Streich!",
              "literal": "that was truly worth no sword-stroke!",
              "tokens": [
                {
                  "word": "galt",
                  "lemma": "gelten",
                  "pos": "verb",
                  "meaning": "was worth / counted for"
                },
                {
                  "word": "wahrlich",
                  "lemma": "wahrlich",
                  "pos": "adverb",
                  "meaning": "truly"
                },
                {
                  "word": "Streich",
                  "lemma": "Streich",
                  "pos": "noun",
                  "meaning": "stroke / blow"
                }
              ],
              "grammarNote": "'Gelten' governing accusative of value 'keinen Streich'."
            }
          ]
        },
        {
          "id": "a2_s4_c20",
          "speaker": "Knights",
          "stageDirection": "in grösster Aufregung",
          "stageDirectionTranslation": "in greatest excitement",
          "lines": [
            {
              "id": "a2_s4_c20_l1",
              "original": "Lasst ihn nicht enden! Wehret seiner Kühnheit!",
              "literal": "Do not let him finish! Check his boldness!",
              "tokens": [
                {
                  "word": "enden",
                  "lemma": "enden",
                  "pos": "verb",
                  "meaning": "finish / conclude"
                },
                {
                  "word": "Wehret",
                  "lemma": "wehren",
                  "pos": "verb",
                  "meaning": "check / ward off (imperative 2nd pl.)"
                },
                {
                  "word": "Kühnheit",
                  "lemma": "Kühnheit",
                  "pos": "noun",
                  "meaning": "boldness / insolence"
                }
              ],
              "grammarNote": "'Wehren' governing dative 'seiner Kühnheit'."
            }
          ]
        },
        {
          "id": "a2_s4_c21",
          "speaker": "Landgraf Hermann",
          "stageDirection": "zu Biterolf, der das Schwert zieht",
          "stageDirectionTranslation": "to Biterolf, who draws his sword",
          "lines": [
            {
              "id": "a2_s4_c21_l1",
              "original": "Zurück das Schwert! lhr, Sänger, haltet Frieden!",
              "literal": "Back with the sword! Ye minstrels, keep peace!",
              "tokens": [
                {
                  "word": "Zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                },
                {
                  "word": "Frieden",
                  "lemma": "Friede",
                  "pos": "noun",
                  "meaning": "peace"
                }
              ],
              "grammarNote": "Elliptical command 'Zurück das Schwert!' followed by 'haltet Frieden'."
            }
          ]
        },
        {
          "id": "a2_s4_c22",
          "speaker": "Wolfram von Eschenbach",
          "stageDirection": "erhebt sich; bei seinem Beginn tritt sogleich wieder die grösste Ruhe ein",
          "stageDirectionTranslation": "rises; at his start the greatest silence immediately resumes",
          "lines": [
            {
              "id": "a2_s4_c22_l1",
              "original": "O Himmel, lass' dich jetzt erflehen!",
              "literal": "O Heaven, let thyself now be implored!",
              "tokens": [
                {
                  "word": "Himmel",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven / sky"
                },
                {
                  "word": "lass'",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / permit (imperative)"
                },
                {
                  "word": "jetzt",
                  "lemma": "jetzt",
                  "pos": "adverb",
                  "meaning": "now / at this moment"
                },
                {
                  "word": "erflehen",
                  "lemma": "erflehen",
                  "pos": "verb",
                  "meaning": "implore / entreat / obtain by prayer"
                }
              ],
              "grammarNote": "Imperative 'lass'' (apocope of 'lasse') with reflexive passive sense: 'lass dich erflehen' ('allow thyself to be entreated/moved by prayer')."
            },
            {
              "id": "a2_s4_c22_l2",
              "original": "Gib meinem Lied der Weihe Preis!",
              "literal": "Give to my song the prize of consecration!",
              "tokens": [
                {
                  "word": "Gib",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "give (imperative)"
                },
                {
                  "word": "meinem",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my (dative masc.)"
                },
                {
                  "word": "Lied",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "song"
                },
                {
                  "word": "Weihe",
                  "lemma": "Weihe",
                  "pos": "noun",
                  "meaning": "consecration / dedication / solemnity"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "prize / praise"
                }
              ],
              "grammarNote": "Direct object 'Preis' with qualifying genitive attribute 'der Weihe' and indirect dative object 'meinem Lied'."
            },
            {
              "id": "a2_s4_c22_l3",
              "original": "Gebannt lass' mich die Sünde sehen",
              "literal": "Banished let me see sin",
              "tokens": [
                {
                  "word": "Gebannt",
                  "lemma": "bannen",
                  "pos": "verb",
                  "meaning": "banished / cast out / spellbound",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "lass'",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / allow (imperative)"
                },
                {
                  "word": "Sünde",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sin"
                },
                {
                  "word": "sehen",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see / behold"
                }
              ],
              "grammarNote": "Fronted participial adjective 'Gebannt' functioning as predicative complement to 'die Sünde'."
            },
            {
              "id": "a2_s4_c22_l4",
              "original": "aus diesem edlen, reinen Kreis!",
              "literal": "from this noble, pure circle!",
              "tokens": [
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "from / out of"
                },
                {
                  "word": "edlen",
                  "lemma": "edel",
                  "pos": "adjective",
                  "meaning": "noble"
                },
                {
                  "word": "reinen",
                  "lemma": "rein",
                  "pos": "adjective",
                  "meaning": "pure / clean"
                },
                {
                  "word": "Kreis",
                  "lemma": "Kreis",
                  "pos": "noun",
                  "meaning": "circle / assembly"
                }
              ],
              "grammarNote": "Prepositional phrase modifying 'Gebannt' with dative masculine adjectives in '-en'."
            },
            {
              "id": "a2_s4_c22_l5",
              "original": "Dir, hohe Liebe töne",
              "literal": "To thee, sublime love, may resound",
              "tokens": [
                {
                  "word": "Dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to thee / to you (dative)"
                },
                {
                  "word": "hohe",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high / sublime / lofty"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "töne",
                  "lemma": "tönen",
                  "pos": "verb",
                  "meaning": "sound / resound (subjunctive I / optative)"
                }
              ],
              "grammarNote": "Apostrophe to personified 'hohe Liebe' with optative subjunctive I verb 'töne'."
            },
            {
              "id": "a2_s4_c22_l6",
              "original": "begeistert mein Gesang,",
              "literal": "inspired my song,",
              "tokens": [
                {
                  "word": "begeistert",
                  "lemma": "begeistern",
                  "pos": "adverb",
                  "meaning": "inspiredly / with fervor"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my"
                },
                {
                  "word": "Gesang",
                  "lemma": "Gesang",
                  "pos": "noun",
                  "meaning": "song / singing"
                }
              ],
              "grammarNote": "Adverbial participle 'begeistert' modifying the subject 'mein Gesang'."
            },
            {
              "id": "a2_s4_c22_l7",
              "original": "die mir in Engelsschöne",
              "literal": "which to me in angelic beauty",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "which / who (relative pronoun fem.)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (dative)"
                },
                {
                  "word": "Engelsschöne",
                  "lemma": "Engelsschöne",
                  "pos": "noun",
                  "meaning": "angelic beauty"
                }
              ],
              "grammarNote": "Relative pronoun 'die' referring to 'hohe Liebe', governing the prepositional phrase 'in Engelsschöne'."
            },
            {
              "id": "a2_s4_c22_l8",
              "original": "tief in die Seele drang!",
              "literal": "deep into the soul penetrated!",
              "tokens": [
                {
                  "word": "tief",
                  "lemma": "tief",
                  "pos": "adverb",
                  "meaning": "deep / deeply"
                },
                {
                  "word": "Seele",
                  "lemma": "Seele",
                  "pos": "noun",
                  "meaning": "soul"
                },
                {
                  "word": "drang",
                  "lemma": "dringen",
                  "pos": "verb",
                  "meaning": "penetrated / pressed (past)"
                }
              ],
              "grammarNote": "Past tense verb 'drang' concluding the relative clause with directional accusative 'in die Seele'."
            },
            {
              "id": "a2_s4_c22_l9",
              "original": "Du nahst als Gottgesandte,",
              "literal": "Thou approachest as a divine messenger,",
              "tokens": [
                {
                  "word": "nahst",
                  "lemma": "nahen",
                  "pos": "verb",
                  "meaning": "approachest / drawest near"
                },
                {
                  "word": "als",
                  "lemma": "als",
                  "pos": "conjunction",
                  "meaning": "as"
                },
                {
                  "word": "Gottgesandte",
                  "lemma": "Gottgesandte",
                  "pos": "noun",
                  "meaning": "divine messenger / one sent by God (fem.)"
                }
              ],
              "grammarNote": "Nominalized feminine participle 'Gottgesandte' referring to holy love (and implicitly Elisabeth)."
            },
            {
              "id": "a2_s4_c22_l10",
              "original": "ich folg aus holder Fern:",
              "literal": "I follow from gracious distance:",
              "tokens": [
                {
                  "word": "folg",
                  "lemma": "folgen",
                  "pos": "verb",
                  "meaning": "follow"
                },
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "from / out of"
                },
                {
                  "word": "holder",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "gracious / lovely / sweet"
                },
                {
                  "word": "Fern",
                  "lemma": "Ferne",
                  "pos": "noun",
                  "meaning": "distance / afar"
                }
              ],
              "grammarNote": "Apocope in verb 'folg' ('folge') and noun 'Fern' ('Ferne'), typical of Wagnerian poetic meter."
            },
            {
              "id": "a2_s4_c22_l11",
              "original": "so führst du in die Lande,",
              "literal": "thus thou leadest into the realms,",
              "tokens": [
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "adverb",
                  "meaning": "thus / so"
                },
                {
                  "word": "führst",
                  "lemma": "führen",
                  "pos": "verb",
                  "meaning": "leadest / guidest"
                },
                {
                  "word": "Lande",
                  "lemma": "Land",
                  "pos": "noun",
                  "meaning": "lands / realms (archaic plural)"
                }
              ],
              "grammarNote": "Archaic plural form 'Lande' (instead of modern 'Länder')."
            },
            {
              "id": "a2_s4_c22_l12",
              "original": "wo ewig strahlt dein Stern!",
              "literal": "where eternally shines thy star!",
              "tokens": [
                {
                  "word": "wo",
                  "lemma": "wo",
                  "pos": "adverb",
                  "meaning": "where"
                },
                {
                  "word": "ewig",
                  "lemma": "ewig",
                  "pos": "adverb",
                  "meaning": "eternally / ever"
                },
                {
                  "word": "strahlt",
                  "lemma": "strahlen",
                  "pos": "verb",
                  "meaning": "shines / radiates"
                },
                {
                  "word": "Stern",
                  "lemma": "Stern",
                  "pos": "noun",
                  "meaning": "star"
                }
              ],
              "grammarNote": "Subordinate relative locative clause with inverted verb order 'strahlt dein Stern'."
            }
          ]
        },
        {
          "id": "a2_s4_c23",
          "speaker": "Tannhäuser",
          "stageDirection": "springt auf, in äusserster Verzückung",
          "stageDirectionTranslation": "springs up, in extreme ecstasy",
          "lines": [
            {
              "id": "a2_s4_c23_l1",
              "original": "Dir, Göttin der Liebe, soll mein Lied ertönen,",
              "literal": "To thee, Goddess of Love, shall my song resound,",
              "tokens": [
                {
                  "word": "Göttin",
                  "lemma": "Göttin",
                  "pos": "noun",
                  "meaning": "goddess"
                },
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "soll",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shall / ought to"
                },
                {
                  "word": "Lied",
                  "lemma": "Lied",
                  "pos": "noun",
                  "meaning": "song"
                },
                {
                  "word": "ertönen",
                  "lemma": "ertönen",
                  "pos": "verb",
                  "meaning": "resound / ring out"
                }
              ],
              "grammarNote": "Fronted dative apostrophe 'Dir, Göttin der Liebe' governing modal verb 'soll'."
            },
            {
              "id": "a2_s4_c23_l2",
              "original": "gesungen laut sei jetzt dein Preis von mir!",
              "literal": "sung aloud be now thy praise by me!",
              "tokens": [
                {
                  "word": "gesungen",
                  "lemma": "singen",
                  "pos": "verb",
                  "meaning": "sung (past participle)"
                },
                {
                  "word": "laut",
                  "lemma": "laut",
                  "pos": "adverb",
                  "meaning": "loudly / aloud"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I / optative)"
                },
                {
                  "word": "Preis",
                  "lemma": "Preis",
                  "pos": "noun",
                  "meaning": "praise"
                },
                {
                  "word": "von mir",
                  "lemma": "von mir",
                  "pos": "idiom",
                  "meaning": "by me"
                }
              ],
              "grammarNote": "Passive subjunctive construction 'gesungen... sei' with fronted past participle and agentive phrase 'von mir'."
            },
            {
              "id": "a2_s4_c23_l3",
              "original": "Dein süsser Reiz ist Quelle alles Schönen,",
              "literal": "Thy sweet charm is source of all beauty,",
              "tokens": [
                {
                  "word": "süsser",
                  "lemma": "süss",
                  "pos": "adjective",
                  "meaning": "sweet"
                },
                {
                  "word": "Reiz",
                  "lemma": "Reiz",
                  "pos": "noun",
                  "meaning": "charm / allure / attraction"
                },
                {
                  "word": "Quelle",
                  "lemma": "Quelle",
                  "pos": "noun",
                  "meaning": "source / spring / fountain"
                },
                {
                  "word": "Schönen",
                  "lemma": "Schöne",
                  "pos": "noun",
                  "meaning": "beauty / the beautiful (nominalized neuter)"
                }
              ],
              "grammarNote": "Predicate nominal 'Quelle' governing partitive genitive 'alles Schönen'."
            },
            {
              "id": "a2_s4_c23_l4",
              "original": "und jedes holde Wunder stammt von dir!",
              "literal": "and every lovely wonder stems from thee!",
              "tokens": [
                {
                  "word": "jedes",
                  "lemma": "jeder",
                  "pos": "pronoun",
                  "meaning": "every / each"
                },
                {
                  "word": "holde",
                  "lemma": "hold",
                  "pos": "adjective",
                  "meaning": "lovely / gracious / sweet"
                },
                {
                  "word": "Wunder",
                  "lemma": "Wunder",
                  "pos": "noun",
                  "meaning": "wonder / miracle"
                },
                {
                  "word": "stammt",
                  "lemma": "stammen",
                  "pos": "verb",
                  "meaning": "stems / originates / springs"
                }
              ],
              "grammarNote": "Verb 'stammen' taking prepositional object 'von dir'."
            },
            {
              "id": "a2_s4_c23_l5",
              "original": "Wer dich mit Glut in seine Arme geschlossen,",
              "literal": "He who embraced thee with passion in his arms,",
              "tokens": [
                {
                  "word": "Wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "whoever / he who (relative pronoun)"
                },
                {
                  "word": "Glut",
                  "lemma": "Glut",
                  "pos": "noun",
                  "meaning": "ardour / fire / glow / passion"
                },
                {
                  "word": "Arme",
                  "lemma": "Arm",
                  "pos": "noun",
                  "meaning": "arms"
                },
                {
                  "word": "geschlossen",
                  "lemma": "schliessen",
                  "pos": "verb",
                  "meaning": "enclosed / embraced (past participle)"
                }
              ],
              "grammarNote": "Subordinate relative clause with ellipsis of auxiliary verb 'hat' ('in seine Arme geschlossen [hat]')."
            },
            {
              "id": "a2_s4_c23_l6",
              "original": "was Liebe ist, kennt der, nur der allein!",
              "literal": "what love is, knows he, only he alone!",
              "tokens": [
                {
                  "word": "Liebe",
                  "lemma": "Liebe",
                  "pos": "noun",
                  "meaning": "love"
                },
                {
                  "word": "kennt",
                  "lemma": "kennen",
                  "pos": "verb",
                  "meaning": "knows"
                },
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "he / that one (demonstrative pronoun)"
                },
                {
                  "word": "allein",
                  "lemma": "allein",
                  "pos": "adverb",
                  "meaning": "alone / only"
                }
              ],
              "grammarNote": "Correlative structure: fronted indirect question clause 'was Liebe ist' followed by demonstrative pronoun 'der' acting as grammatical subject."
            },
            {
              "id": "a2_s4_c23_l7",
              "original": "Armsel'ge, die ihr Liebe nie genossen,",
              "literal": "Wretched ones, who have never enjoyed love,",
              "tokens": [
                {
                  "word": "Armsel'ge",
                  "lemma": "armselig",
                  "pos": "adjective",
                  "meaning": "wretched / poor / pitiable"
                },
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun pl.)"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "ye / you (plural personal pronoun reinforcing relative)"
                },
                {
                  "word": "genossen",
                  "lemma": "geniessen",
                  "pos": "verb",
                  "meaning": "enjoyed / tasted"
                }
              ],
              "grammarNote": "Vocative nominalized adjective 'Armsel'ge' followed by relative clause with pronoun agreement 'die ihr... [habt] genossen' (omitted auxiliary 'habt')."
            },
            {
              "id": "a2_s4_c23_l8",
              "original": "zieht hin! Zieht in den Berg der Venus ein!",
              "literal": "go forth! Enter into the mountain of Venus!",
              "tokens": [
                {
                  "word": "zieht hin",
                  "lemma": "hinziehen",
                  "pos": "verb",
                  "meaning": "go forth / depart (imperative)"
                },
                {
                  "word": "Berg",
                  "lemma": "Berg",
                  "pos": "noun",
                  "meaning": "mountain / mount"
                },
                {
                  "word": "Venus",
                  "lemma": "Venus",
                  "pos": "noun",
                  "meaning": "Venus"
                },
                {
                  "word": "zieht ein",
                  "lemma": "einziehen",
                  "pos": "verb",
                  "meaning": "enter / move into (imperative)"
                }
              ],
              "grammarNote": "Separable verbs 'hinziehen' and 'einziehen' used imperatively (2nd person plural)."
            }
          ]
        },
        {
          "id": "a2_s4_c24",
          "speaker": "Tannhäuser",
          "stageDirection": "Allgemeiner Aufbruch und Entsetzen",
          "stageDirectionTranslation": "General commotion and horror.",
          "lines": []
        },
        {
          "id": "a2_s4_c25",
          "speaker": "Landgrave and Minstrels",
          "lines": [
            {
              "id": "a2_s4_c25_l1",
              "original": "Ha, der Verruchte! Fliehet ihn!",
              "literal": "Ha, the villain! Flee him!",
              "tokens": [
                {
                  "word": "Ha",
                  "lemma": "ha",
                  "pos": "interjection",
                  "meaning": "ha"
                },
                {
                  "word": "Verruchte",
                  "lemma": "Verruchte",
                  "pos": "noun",
                  "meaning": "villain / wicked one / villainous wretch"
                },
                {
                  "word": "Fliehet",
                  "lemma": "fliehen",
                  "pos": "verb",
                  "meaning": "flee / shun (imperative pl.)"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                }
              ],
              "grammarNote": "Archaic 2nd person plural imperative 'Fliehet' governing transitive accusative 'ihn'."
            },
            {
              "id": "a2_s4_c25_l2",
              "original": "Hört es! Er war im Venusberg!",
              "literal": "Hear it! He was in the Venusberg!",
              "tokens": [
                {
                  "word": "Hört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear / listen (imperative pl.)"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "Venusberg",
                  "lemma": "Venusberg",
                  "pos": "noun",
                  "meaning": "Venusberg / Mountain of Venus"
                }
              ],
              "grammarNote": "Imperative 'Hört' followed by declarative clause revealing the scandal."
            }
          ]
        },
        {
          "id": "a2_s4_c26",
          "speaker": "Knights and Ladies",
          "lines": [
            {
              "id": "a2_s4_c26_l1",
              "original": "Ha, der Verruchte! Fliehet ihn!",
              "literal": "Ha, the villain! Flee him!",
              "tokens": [
                {
                  "word": "Ha",
                  "lemma": "ha",
                  "pos": "interjection",
                  "meaning": "ha"
                },
                {
                  "word": "Verruchte",
                  "lemma": "Verruchte",
                  "pos": "noun",
                  "meaning": "villain / wicked one / villainous wretch"
                },
                {
                  "word": "Fliehet",
                  "lemma": "fliehen",
                  "pos": "verb",
                  "meaning": "flee / shun (imperative pl.)"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                }
              ],
              "grammarNote": "Archaic 2nd person plural imperative 'Fliehet' governing transitive accusative 'ihn'."
            },
            {
              "id": "a2_s4_c26_l2",
              "original": "Hört es! Er war im Venusberg!",
              "literal": "Hear it! He was in the Venusberg!",
              "tokens": [
                {
                  "word": "Hört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear / listen (imperative pl.)"
                },
                {
                  "word": "war",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "was"
                },
                {
                  "word": "Venusberg",
                  "lemma": "Venusberg",
                  "pos": "noun",
                  "meaning": "Venusberg / Mountain of Venus"
                }
              ],
              "grammarNote": "Imperative 'Hört' followed by declarative clause revealing the scandal."
            },
            {
              "id": "a2_s4_c26_l3",
              "original": "Hinweg! Hinweg, aus seiner Näh'!",
              "literal": "Away! Away, out of his vicinity!",
              "tokens": [
                {
                  "word": "Hinweg",
                  "lemma": "hinweg",
                  "pos": "adverb",
                  "meaning": "away / begone"
                },
                {
                  "word": "aus",
                  "lemma": "aus",
                  "pos": "preposition",
                  "meaning": "out of / from"
                },
                {
                  "word": "seiner",
                  "lemma": "sein",
                  "pos": "pronoun",
                  "meaning": "his"
                },
                {
                  "word": "Näh'",
                  "lemma": "Nähe",
                  "pos": "noun",
                  "meaning": "proximity / vicinity / presence"
                }
              ],
              "grammarNote": "Apocope of 'Nähe' ('Näh'') governed by preposition 'aus' (dative feminine)."
            }
          ]
        },
        {
          "id": "a2_s4_c27",
          "speaker": "Knights and Ladies",
          "stageDirection": "Alle Frauen verlassen in grösster Bestürzung und mit Gebärden des Abscheus die Halle. Elisabeth, die dem Streite der Sänger mit wachsender Angst zugehört hatte, bleibt von den Frauen allein zurück, - bleich, nur mit dem grössten Aufwande ihrer Kraft an einer der hölzernen Säulen des Baldachins sich aufrecht erhaltend. - Der Landgraf, alle Ritter und Sänger haben ihre Sitze verlassen und treten zusammen. - Tannhäuser, zur äussersten Linken, verbleibt noch eine Zeitlang wie in Verzückung",
          "stageDirectionTranslation": "All the women leave the hall in the greatest dismay and with gestures of horror. Elisabeth, who had listened to the contest of the minstrels with growing anxiety, remains behind alone among the women—pale, supporting herself upright by one of the wooden pillars of the canopy only with the greatest exertion of her strength.—The Landgrave, all the knights, and minstrels have left their seats and assemble together.—Tannhäuser, on the extreme left, remains for some time as if in ecstasy.",
          "lines": []
        },
        {
          "id": "a2_s4_c28",
          "speaker": "Landgrave, Minstrels & Knights",
          "lines": [
            {
              "id": "a2_s4_c28_l1",
              "original": "Ihr habt's gehört! Sein frevler Mund",
              "literal": "You have heard it! His wicked mouth",
              "tokens": [
                {
                  "word": "Ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "ye / you (pl.)"
                },
                {
                  "word": "gehört",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "heard"
                },
                {
                  "word": "frevler",
                  "lemma": "frevel",
                  "pos": "adjective",
                  "meaning": "wicked / insolent / sinful"
                },
                {
                  "word": "Mund",
                  "lemma": "Mund",
                  "pos": "noun",
                  "meaning": "mouth"
                }
              ],
              "grammarNote": "Contraction 'habt's' ('habt es'). The subject 'Sein frevler Mund' carries over into the next line."
            },
            {
              "id": "a2_s4_c28_l2",
              "original": "tat das Verbrechen schrecklich kund;",
              "literal": "made known terribly the crime;",
              "tokens": [
                {
                  "word": "tat kund",
                  "lemma": "kundtun",
                  "pos": "verb",
                  "meaning": "made known / proclaimed / revealed"
                },
                {
                  "word": "Verbrechen",
                  "lemma": "Verbrechen",
                  "pos": "noun",
                  "meaning": "crime"
                },
                {
                  "word": "schrecklich",
                  "lemma": "schrecklich",
                  "pos": "adverb",
                  "meaning": "terribly / dreadfully"
                }
              ],
              "grammarNote": "Separable verb 'kundtun' split across the clause ('tat... kund')."
            },
            {
              "id": "a2_s4_c28_l3",
              "original": "er hat der Hölle Lust geteilt,",
              "literal": "he has shared the pleasure of hell,",
              "tokens": [
                {
                  "word": "Hölle",
                  "lemma": "Hölle",
                  "pos": "noun",
                  "meaning": "hell"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "pleasure / delight / lust"
                },
                {
                  "word": "geteilt",
                  "lemma": "teilen",
                  "pos": "verb",
                  "meaning": "shared / partaken in"
                }
              ],
              "grammarNote": "Genitive attribute 'der Hölle' preceding governing noun 'Lust' ('der Hölle Lust' = hell's pleasure)."
            },
            {
              "id": "a2_s4_c28_l4",
              "original": "im Venusberg hat er geweilt!",
              "literal": "in the Venusberg he has lingered!",
              "tokens": [
                {
                  "word": "im",
                  "lemma": "in dem",
                  "pos": "preposition",
                  "meaning": "in the"
                },
                {
                  "word": "Venusberg",
                  "lemma": "Venusberg",
                  "pos": "noun",
                  "meaning": "Venusberg"
                },
                {
                  "word": "geweilt",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "lingered / dwelt / resided"
                }
              ],
              "grammarNote": "Fronted prepositional locative 'im Venusberg' causing subject-auxiliary inversion ('hat er')."
            },
            {
              "id": "a2_s4_c28_l5",
              "original": "Entsetzlich! Scheusslich! Fluchenswert!",
              "literal": "Horrible! Hideous! Deserving of a curse!",
              "tokens": [
                {
                  "word": "Entsetzlich",
                  "lemma": "entsetzlich",
                  "pos": "adjective",
                  "meaning": "horrible / dreadful"
                },
                {
                  "word": "Scheusslich",
                  "lemma": "scheusslich",
                  "pos": "adjective",
                  "meaning": "hideous / abominable"
                },
                {
                  "word": "Fluchenswert",
                  "lemma": "fluchenswert",
                  "pos": "adjective",
                  "meaning": "accursed / deserving of execration"
                }
              ],
              "grammarNote": "Asyndetic triplet of exclamatory evaluative adjectives."
            },
            {
              "id": "a2_s4_c28_l6",
              "original": "In seinem Blute netzt das Schwert!",
              "literal": "In his blood wet the sword!",
              "tokens": [
                {
                  "word": "Blute",
                  "lemma": "Blut",
                  "pos": "noun",
                  "meaning": "blood"
                },
                {
                  "word": "netzt",
                  "lemma": "netzen",
                  "pos": "verb",
                  "meaning": "wet / moisten / bathe (imperative pl.)"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                }
              ],
              "grammarNote": "Imperative 'netzt' (2nd person plural) with archaic dative ending in '-e' ('Blute')."
            },
            {
              "id": "a2_s4_c28_l7",
              "original": "Zum Höllenpfuhl zurückgesandt,",
              "literal": "Sent back to the abyss of hell,",
              "tokens": [
                {
                  "word": "Höllenpfuhl",
                  "lemma": "Höllenpfuhl",
                  "pos": "noun",
                  "meaning": "pool of hell / abyss of hell"
                },
                {
                  "word": "zurückgesandt",
                  "lemma": "zurücksenden",
                  "pos": "verb",
                  "meaning": "sent back (past participle)"
                }
              ],
              "grammarNote": "Participle phrase with directional contraction 'Zum' ('zu dem')."
            },
            {
              "id": "a2_s4_c28_l8",
              "original": "sei er gefehmt, sei er gebannt!",
              "literal": "let him be outlawed, let him be banished!",
              "tokens": [
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I / optative)"
                },
                {
                  "word": "gefehmt",
                  "lemma": "fehmen",
                  "pos": "verb",
                  "meaning": "outlawed / condemned under the Vehmic court",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "gebannt",
                  "lemma": "bannen",
                  "pos": "verb",
                  "meaning": "banished / excommunicated / proscribed",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                }
              ],
              "grammarNote": "Anaphora with optative passive subjunctive 'sei er gefehmt, sei er gebannt'."
            }
          ]
        },
        {
          "id": "a2_s4_c29",
          "speaker": "Landgrave, Minstrels & Knights",
          "stageDirection": "Alle dringen mit gezücktem Schwerte auf Tannhäuser ein, welcher eine trotzige Stellung einnimmt; Elisabeth stürzt dazwischen",
          "stageDirectionTranslation": "All press forward toward Tannhäuser with drawn swords; he assumes a defiant posture; Elisabeth rushes between them.",
          "lines": []
        },
        {
          "id": "a2_s4_c30",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s4_c30_l1",
              "original": "Haltet ein!",
              "literal": "Hold back!",
              "tokens": [
                {
                  "word": "Haltet",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "hold / stop (imperative pl.)"
                },
                {
                  "word": "ein",
                  "lemma": "ein",
                  "pos": "particle",
                  "meaning": "back / in (separable verbal prefix)"
                },
                {
                  "word": "Haltet ein",
                  "lemma": "einhalten",
                  "pos": "verb",
                  "meaning": "stop / cease / hold back (imperative pl.)"
                }
              ],
              "grammarNote": "Separable imperative verb 'einhalten' (2nd person plural)."
            }
          ]
        },
        {
          "id": "a2_s4_c31",
          "speaker": "Elisabeth",
          "stageDirection": "Alle halten in grösster Betroffenheit an",
          "stageDirectionTranslation": "All pause in the greatest consternation.",
          "lines": []
        },
        {
          "id": "a2_s4_c32",
          "speaker": "Landgrave, Minstrels & Knights",
          "lines": [
            {
              "id": "a2_s4_c32_l1",
              "original": "Was hör ich? Wie? Was seh ich? Elisabeth,",
              "literal": "What do I hear? How? What do I see? Elisabeth,",
              "tokens": [
                {
                  "word": "Was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "hör",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear"
                },
                {
                  "word": "seh",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see"
                },
                {
                  "word": "Elisabeth",
                  "lemma": "Elisabeth",
                  "pos": "noun",
                  "meaning": "Elisabeth"
                }
              ],
              "grammarNote": "Rapid series of astonished rhetorical questions with apocope in 'hör'' and 'seh''."
            },
            {
              "id": "a2_s4_c32_l2",
              "original": "die keusche Jungfrau für den Sünder?",
              "literal": "the chaste maiden for the sinner?",
              "tokens": [
                {
                  "word": "keusche",
                  "lemma": "keusch",
                  "pos": "adjective",
                  "meaning": "chaste / pure"
                },
                {
                  "word": "Jungfrau",
                  "lemma": "Jungfrau",
                  "pos": "noun",
                  "meaning": "maiden / virgin"
                },
                {
                  "word": "für",
                  "lemma": "für",
                  "pos": "preposition",
                  "meaning": "for / on behalf of"
                },
                {
                  "word": "Sünder",
                  "lemma": "Sünder",
                  "pos": "noun",
                  "meaning": "sinner"
                }
              ],
              "grammarNote": "Elliptical appositive phrase expressing incredulous contrast between 'keusche Jungfrau' and 'Sünder'."
            }
          ]
        },
        {
          "id": "a2_s4_c33",
          "speaker": "Elisabeth",
          "stageDirection": "Tannhäuser mit ihrem Leibe deckend",
          "stageDirectionTranslation": "Covering Tannhäuser with her body.",
          "lines": [
            {
              "id": "a2_s4_c33_l1",
              "original": "Zurück! Des Todes achte ich sonst nicht!",
              "literal": "Back! Otherwise I care not for death!",
              "tokens": [
                {
                  "word": "Zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back / stand back"
                },
                {
                  "word": "Todes",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "achte",
                  "lemma": "achten",
                  "pos": "verb",
                  "meaning": "care / reck / heed"
                },
                {
                  "word": "sonst",
                  "lemma": "sonst",
                  "pos": "adverb",
                  "meaning": "otherwise / else"
                }
              ],
              "grammarNote": "Genitive object 'Des Todes' governed by the archaic construction 'achten' with genitive ('einer Sache achten')."
            },
            {
              "id": "a2_s4_c33_l2",
              "original": "Was ist die Wunde eures Eisens gegen",
              "literal": "What is the wound of your steel compared to",
              "tokens": [
                {
                  "word": "Wunde",
                  "lemma": "Wunde",
                  "pos": "noun",
                  "meaning": "wound"
                },
                {
                  "word": "eures",
                  "lemma": "euer",
                  "pos": "pronoun",
                  "meaning": "your (gen. neut.)"
                },
                {
                  "word": "Eisens",
                  "lemma": "Eisen",
                  "pos": "noun",
                  "meaning": "iron / steel / weapon"
                },
                {
                  "word": "gegen",
                  "lemma": "gegen",
                  "pos": "preposition",
                  "meaning": "against / compared to"
                }
              ],
              "grammarNote": "Preposition 'gegen' used in comparative sense ('compared to'), governing the accusative in the following line."
            },
            {
              "id": "a2_s4_c33_l3",
              "original": "den Todesstoss, den ich von ihm empfing?",
              "literal": "the death-blow that I received from him?",
              "tokens": [
                {
                  "word": "Todesstoss",
                  "lemma": "Todesstoss",
                  "pos": "noun",
                  "meaning": "death-blow / fatal blow"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "that / which (relative pronoun masc. acc.)"
                },
                {
                  "word": "empfing",
                  "lemma": "empfangen",
                  "pos": "verb",
                  "meaning": "received"
                }
              ],
              "grammarNote": "Relative clause 'den ich von ihm empfing' modifying the accusative noun 'Todesstoss'."
            }
          ]
        },
        {
          "id": "a2_s4_c34",
          "speaker": "Landgrave and Minstrels",
          "lines": [
            {
              "id": "a2_s4_c34_l1",
              "original": "Elisabeth! Was muss ich hören?",
              "literal": "Elisabeth! What must I hear?",
              "tokens": [
                {
                  "word": "Was",
                  "lemma": "was",
                  "pos": "pronoun",
                  "meaning": "what"
                },
                {
                  "word": "muss",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must"
                },
                {
                  "word": "hören",
                  "lemma": "hören",
                  "pos": "verb",
                  "meaning": "hear"
                }
              ],
              "grammarNote": "Modal auxiliary 'muss' with infinitive 'hören'."
            },
            {
              "id": "a2_s4_c34_l2",
              "original": "Wie liess dein Herz dich so betören,",
              "literal": "How could thy heart let thee be so beguiled,",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how"
                },
                {
                  "word": "liess",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / allow (past)"
                },
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "betören",
                  "lemma": "betören",
                  "pos": "verb",
                  "meaning": "beguile / infatuate / bewitch"
                }
              ],
              "grammarNote": "Causative/permissive construction 'liess... dich... betören' with past tense 'liess'."
            },
            {
              "id": "a2_s4_c34_l3",
              "original": "von dem die Strafe zu beschwören,",
              "literal": "to avert the punishment from him",
              "tokens": [
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "him (dative demonstrative)"
                },
                {
                  "word": "Strafe",
                  "lemma": "Strafe",
                  "pos": "noun",
                  "meaning": "punishment / penalty"
                },
                {
                  "word": "beschwören",
                  "lemma": "beschwören",
                  "pos": "verb",
                  "meaning": "avert / ward off by pleading"
                }
              ],
              "grammarNote": "Infinitive clause 'zu beschwören' with 'von dem' meaning to plead away/avert punishment from someone."
            },
            {
              "id": "a2_s4_c34_l4",
              "original": "der auch so furchtbar dich verriet?",
              "literal": "who also betrayed thee so dreadfully?",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun)"
                },
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "furchtbar",
                  "lemma": "furchtbar",
                  "pos": "adverb",
                  "meaning": "dreadfully / terribly"
                },
                {
                  "word": "verriet",
                  "lemma": "verraten",
                  "pos": "verb",
                  "meaning": "betrayed"
                }
              ],
              "grammarNote": "Relative clause modifying the antecedent 'dem' of the previous line."
            }
          ]
        },
        {
          "id": "a2_s4_c35",
          "speaker": "Knights",
          "lines": [
            {
              "id": "a2_s4_c35_l1",
              "original": "Elisabeth! Wie liessest du dich so betören,",
              "literal": "Elisabeth! How didst thou let thyself be so beguiled,",
              "tokens": [
                {
                  "word": "liessest",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / allow (past 2nd sing.)"
                },
                {
                  "word": "dich",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "thyself / you (reflexive)"
                },
                {
                  "word": "betören",
                  "lemma": "betören",
                  "pos": "verb",
                  "meaning": "beguile / infatuate"
                }
              ],
              "grammarNote": "Archaic second-person preterite 'liessest' in reflexive causative construction 'liessest du dich... betören'."
            },
            {
              "id": "a2_s4_c35_l2",
              "original": "von dem die Strafe zu beschwören,",
              "literal": "to avert the punishment from him",
              "tokens": [
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from"
                },
                {
                  "word": "dem",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "him (dative demonstrative)"
                },
                {
                  "word": "Strafe",
                  "lemma": "Strafe",
                  "pos": "noun",
                  "meaning": "punishment / penalty"
                },
                {
                  "word": "beschwören",
                  "lemma": "beschwören",
                  "pos": "verb",
                  "meaning": "avert / ward off by pleading"
                }
              ],
              "grammarNote": "Infinitive clause 'zu beschwören' with 'von dem' meaning to plead away/avert punishment from someone."
            },
            {
              "id": "a2_s4_c35_l3",
              "original": "der auch so furchtbar dich verriet?",
              "literal": "who also betrayed thee so dreadfully?",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun)"
                },
                {
                  "word": "auch",
                  "lemma": "auch",
                  "pos": "adverb",
                  "meaning": "also / even"
                },
                {
                  "word": "furchtbar",
                  "lemma": "furchtbar",
                  "pos": "adverb",
                  "meaning": "dreadfully / terribly"
                },
                {
                  "word": "verriet",
                  "lemma": "verraten",
                  "pos": "verb",
                  "meaning": "betrayed"
                }
              ],
              "grammarNote": "Relative clause modifying the antecedent 'dem' of the previous line."
            }
          ]
        },
        {
          "id": "a2_s4_c36",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s4_c36_l1",
              "original": "Was liegt an mir? Doch er, - sein Heil!",
              "literal": "What matters me? But he, - his salvation!",
              "tokens": [
                {
                  "word": "liegt an",
                  "lemma": "liegen an",
                  "pos": "verb",
                  "meaning": "matter / be of importance to"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (dative)"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation / spiritual welfare"
                }
              ],
              "grammarNote": "Idiomatic impersonal expression 'was liegt an mir' ('what does it matter about me') followed by anacoluthon."
            },
            {
              "id": "a2_s4_c36_l2",
              "original": "Wollt ihr sein ewig Heil ihm rauben?",
              "literal": "Would you rob him of his eternal salvation?",
              "tokens": [
                {
                  "word": "Wollt",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "would / want to (2nd pl.)"
                },
                {
                  "word": "ewig",
                  "lemma": "ewig",
                  "pos": "adjective",
                  "meaning": "eternal"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "rauben",
                  "lemma": "rauben",
                  "pos": "verb",
                  "meaning": "rob / deprive"
                }
              ],
              "grammarNote": "Double object construction: accusative direct object 'sein ewig Heil' with dative of disadvantage 'ihm'."
            }
          ]
        },
        {
          "id": "a2_s4_c37",
          "speaker": "Landgrave, Minstrels & Knights",
          "lines": [
            {
              "id": "a2_s4_c37_l1",
              "original": "Verworfen hat er jedes Hoffen,",
              "literal": "He has rejected every hope,",
              "tokens": [
                {
                  "word": "Verworfen",
                  "lemma": "verwerfen",
                  "pos": "verb",
                  "meaning": "rejected / forfeited / cast away (past participle)"
                },
                {
                  "word": "Hoffen",
                  "lemma": "Hoffen",
                  "pos": "noun",
                  "meaning": "hope / hoping (nominalized infinitive)"
                }
              ],
              "grammarNote": "Fronted participle 'Verworfen' emphasizing the finality of his transgression."
            },
            {
              "id": "a2_s4_c37_l2",
              "original": "niemals wird ihm des Heils Gewinn!",
              "literal": "never will the attainment of salvation be his!",
              "tokens": [
                {
                  "word": "niemals",
                  "lemma": "niemals",
                  "pos": "adverb",
                  "meaning": "never"
                },
                {
                  "word": "wird",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "becomes / falls to"
                },
                {
                  "word": "Heils",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "Gewinn",
                  "lemma": "Gewinn",
                  "pos": "noun",
                  "meaning": "gain / attainment / acquisition"
                }
              ],
              "grammarNote": "Construction 'jemandem (dative) zuteil werden/sein' with genitive 'des Heils'."
            },
            {
              "id": "a2_s4_c37_l3",
              "original": "Des Himmels Fluch hat ihn getroffen!",
              "literal": "Heaven's curse has struck him!",
              "tokens": [
                {
                  "word": "Himmels",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven"
                },
                {
                  "word": "Fluch",
                  "lemma": "Fluch",
                  "pos": "noun",
                  "meaning": "curse"
                },
                {
                  "word": "getroffen",
                  "lemma": "treffen",
                  "pos": "verb",
                  "meaning": "struck / hit (past participle)"
                }
              ],
              "grammarNote": "Genitive 'Des Himmels' preceding the subject 'Fluch'."
            }
          ]
        },
        {
          "id": "a2_s4_c38",
          "speaker": "Landgrave, Minstrels & Knights",
          "stageDirection": "Sie dringen von neuem auf Tannhäuser ein",
          "stageDirectionTranslation": "They press forward anew toward Tannhäuser.",
          "lines": [
            {
              "id": "a2_s4_c38_l1",
              "original": "in seinen Sünden fahr er hin!",
              "literal": "in his sins let him depart!",
              "tokens": [
                {
                  "word": "Sünden",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sins"
                },
                {
                  "word": "fahr hin",
                  "lemma": "hinfahren",
                  "pos": "verb",
                  "meaning": "depart / go to hell / perish"
                }
              ],
              "grammarNote": "Optative subjunctive I 'fahr er hin' (from 'hinfahren', meaning to perish/go down)."
            }
          ]
        },
        {
          "id": "a2_s4_c39",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s4_c39_l1",
              "original": "Zurück von ihm! Nicht ihr seid seine Richter!",
              "literal": "Back from him! You are not his judges!",
              "tokens": [
                {
                  "word": "Zurück",
                  "lemma": "zurück",
                  "pos": "adverb",
                  "meaning": "back / away"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from"
                },
                {
                  "word": "Richter",
                  "lemma": "Richter",
                  "pos": "noun",
                  "meaning": "judges"
                }
              ],
              "grammarNote": "Fronted negation 'Nicht ihr' contrasting human vengeance with divine prerogative."
            },
            {
              "id": "a2_s4_c39_l2",
              "original": "Grausame! Werft von euch das wilde Schwert!",
              "literal": "Cruel men! Cast from you the wild sword!",
              "tokens": [
                {
                  "word": "Grausame",
                  "lemma": "grausam",
                  "pos": "noun",
                  "meaning": "cruel ones / cruel men (nominalized adj.)"
                },
                {
                  "word": "Werft",
                  "lemma": "werfen",
                  "pos": "verb",
                  "meaning": "cast / throw (imperative pl.)"
                },
                {
                  "word": "wilde",
                  "lemma": "wild",
                  "pos": "adjective",
                  "meaning": "wild / ferocious / violent"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                }
              ],
              "grammarNote": "Vocative plural 'Grausame' with imperative 'Werft'."
            },
            {
              "id": "a2_s4_c39_l3",
              "original": "Und gebt Gehör der reinen Jungfrau Wort!",
              "literal": "And give ear to the pure maiden's word!",
              "tokens": [
                {
                  "word": "gebt",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "give (imperative pl.)"
                },
                {
                  "word": "Gehör",
                  "lemma": "Gehör",
                  "pos": "noun",
                  "meaning": "hearing / ear / audience"
                },
                {
                  "word": "reinen",
                  "lemma": "rein",
                  "pos": "adjective",
                  "meaning": "pure / chaste"
                },
                {
                  "word": "Jungfrau",
                  "lemma": "Jungfrau",
                  "pos": "noun",
                  "meaning": "maiden / virgin"
                },
                {
                  "word": "Wort",
                  "lemma": "Wort",
                  "pos": "noun",
                  "meaning": "word"
                }
              ],
              "grammarNote": "Collocation 'Gehör geben' governing dative noun phrase with embedded genitive: 'der reinen Jungfrau Wort'."
            },
            {
              "id": "a2_s4_c39_l4",
              "original": "Vernehmt durch mich, was Gottes Wille ist!",
              "literal": "Learn through me what God's will is!",
              "tokens": [
                {
                  "word": "Vernehmt",
                  "lemma": "vernehmen",
                  "pos": "verb",
                  "meaning": "hear / learn / perceive (imperative pl.)"
                },
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through"
                },
                {
                  "word": "Gottes",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God's"
                },
                {
                  "word": "Wille",
                  "lemma": "Wille",
                  "pos": "noun",
                  "meaning": "will"
                }
              ],
              "grammarNote": "Indirect question clause 'was Gottes Wille ist' introduced by 'Vernehmt'."
            },
            {
              "id": "a2_s4_c39_l5",
              "original": "Der Unglücksel'ge, den gefangen",
              "literal": "The unfortunate one, whom held captive",
              "tokens": [
                {
                  "word": "Unglücksel'ge",
                  "lemma": "unglückselig",
                  "pos": "noun",
                  "meaning": "unfortunate one / wretched man"
                },
                {
                  "word": "den",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "whom (relative pronoun masc. acc.)"
                },
                {
                  "word": "gefangen",
                  "lemma": "fangen",
                  "pos": "verb",
                  "meaning": "captive / imprisoned",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                }
              ],
              "grammarNote": "Apocope in 'Unglücksel'ge'; 'gefangen' is predicative complement to the relative pronoun 'den'."
            },
            {
              "id": "a2_s4_c39_l6",
              "original": "ein furchtbar mächt'ger Zauber hält,",
              "literal": "a dreadfully mighty spell holds,",
              "tokens": [
                {
                  "word": "furchtbar",
                  "lemma": "furchtbar",
                  "pos": "adverb",
                  "meaning": "dreadfully / terribly"
                },
                {
                  "word": "mächt'ger",
                  "lemma": "mächtig",
                  "pos": "adjective",
                  "meaning": "mighty / powerful"
                },
                {
                  "word": "Zauber",
                  "lemma": "Zauber",
                  "pos": "noun",
                  "meaning": "spell / magic / charm"
                },
                {
                  "word": "hält",
                  "lemma": "halten",
                  "pos": "verb",
                  "meaning": "holds"
                }
              ],
              "grammarNote": "Syncope in 'mächt'ger' for meter; subject 'Zauber' completes the relative clause."
            },
            {
              "id": "a2_s4_c39_l7",
              "original": "wie? sollt er nie zum Heil gelangen,",
              "literal": "how? should he never attain salvation,",
              "tokens": [
                {
                  "word": "wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how"
                },
                {
                  "word": "sollt",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "should (subjunctive II)"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "gelangen",
                  "lemma": "gelangen",
                  "pos": "verb",
                  "meaning": "attain / reach / arrive at"
                }
              ],
              "grammarNote": "Rhetorical question in subjunctive II ('sollt' for 'sollte')."
            },
            {
              "id": "a2_s4_c39_l8",
              "original": "durch Sühn' und Buss' in dieser Welt?",
              "literal": "through atonement and penance in this world?",
              "tokens": [
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through / by means of"
                },
                {
                  "word": "Sühn'",
                  "lemma": "Sühne",
                  "pos": "noun",
                  "meaning": "atonement / expiation"
                },
                {
                  "word": "Buss'",
                  "lemma": "Busse",
                  "pos": "noun",
                  "meaning": "penance / repentance"
                },
                {
                  "word": "Welt",
                  "lemma": "Welt",
                  "pos": "noun",
                  "meaning": "world"
                }
              ],
              "grammarNote": "Apocope in both rhyming feminine nouns 'Sühn'' ('Sühne') and 'Buss'' ('Busse')."
            },
            {
              "id": "a2_s4_c39_l9",
              "original": "Die ihr so stark im reinen Glauben,",
              "literal": "Ye who are so strong in pure faith,",
              "tokens": [
                {
                  "word": "Die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "ye who / those who (relative pronoun pl.)"
                },
                {
                  "word": "ihr",
                  "lemma": "ihr",
                  "pos": "pronoun",
                  "meaning": "ye / you (pl.)"
                },
                {
                  "word": "stark",
                  "lemma": "stark",
                  "pos": "adjective",
                  "meaning": "strong"
                },
                {
                  "word": "Glauben",
                  "lemma": "Glaube",
                  "pos": "noun",
                  "meaning": "faith"
                }
              ],
              "grammarNote": "Relative construction with 2nd person pronoun agreement: 'Die ihr [seid]'."
            },
            {
              "id": "a2_s4_c39_l10",
              "original": "verkennt ihr so des Höchsten Rat?",
              "literal": "do you so misunderstand the counsel of the Most High?",
              "tokens": [
                {
                  "word": "verkennt",
                  "lemma": "verkennen",
                  "pos": "verb",
                  "meaning": "misunderstand / fail to recognize"
                },
                {
                  "word": "Höchsten",
                  "lemma": "Höchste",
                  "pos": "noun",
                  "meaning": "the Most High / Almighty (genitive)"
                },
                {
                  "word": "Rat",
                  "lemma": "Rat",
                  "pos": "noun",
                  "meaning": "counsel / decree / design"
                }
              ],
              "grammarNote": "Preposed genitive 'des Höchsten' modifying 'Rat'."
            },
            {
              "id": "a2_s4_c39_l11",
              "original": "Wollt ihr des Sünders Hoffnung rauben,",
              "literal": "If you wish to rob the sinner's hope,",
              "tokens": [
                {
                  "word": "Wollt",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "want / wish (2nd pl.)"
                },
                {
                  "word": "Sünders",
                  "lemma": "Sünder",
                  "pos": "noun",
                  "meaning": "sinner's (genitive)"
                },
                {
                  "word": "Hoffnung",
                  "lemma": "Hoffnung",
                  "pos": "noun",
                  "meaning": "hope"
                },
                {
                  "word": "rauben",
                  "lemma": "rauben",
                  "pos": "verb",
                  "meaning": "rob / steal"
                }
              ],
              "grammarNote": "V1 conditional protasis: 'Wollt ihr...' ('If you want to...')."
            },
            {
              "id": "a2_s4_c39_l12",
              "original": "so sagt, was euch er Leides tat?",
              "literal": "then say, what harm he did to you?",
              "tokens": [
                {
                  "word": "so",
                  "lemma": "so",
                  "pos": "conjunction",
                  "meaning": "then / so"
                },
                {
                  "word": "sagt",
                  "lemma": "sagen",
                  "pos": "verb",
                  "meaning": "say / tell (imperative pl.)"
                },
                {
                  "word": "Leides",
                  "lemma": "Leid",
                  "pos": "noun",
                  "meaning": "harm / injury / grief (partitive genitive)"
                },
                {
                  "word": "tat",
                  "lemma": "tun",
                  "pos": "verb",
                  "meaning": "did"
                }
              ],
              "grammarNote": "Collocation 'jemandem Leides tun' (to do harm to someone) with partitive genitive 'Leides'."
            },
            {
              "id": "a2_s4_c39_l13",
              "original": "Seht mich, die Jungfrau, deren Blüte",
              "literal": "Look upon me, the maiden, whose blossom",
              "tokens": [
                {
                  "word": "Seht",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see / look upon (imperative pl.)"
                },
                {
                  "word": "Jungfrau",
                  "lemma": "Jungfrau",
                  "pos": "noun",
                  "meaning": "maiden / virgin"
                },
                {
                  "word": "deren",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "whose (relative pronoun fem. gen.)"
                },
                {
                  "word": "Blüte",
                  "lemma": "Blüte",
                  "pos": "noun",
                  "meaning": "bloom / blossom"
                }
              ],
              "grammarNote": "Relative genitive pronoun 'deren' modifying 'Blüte'."
            },
            {
              "id": "a2_s4_c39_l14",
              "original": "mit einem jähen Schlag er brach,",
              "literal": "with a sudden blow he crushed,",
              "tokens": [
                {
                  "word": "jähen",
                  "lemma": "jäh",
                  "pos": "adjective",
                  "meaning": "sudden / abrupt / swift"
                },
                {
                  "word": "Schlag",
                  "lemma": "Schlag",
                  "pos": "noun",
                  "meaning": "blow / strike"
                },
                {
                  "word": "brach",
                  "lemma": "brechen",
                  "pos": "verb",
                  "meaning": "broke / crushed"
                }
              ],
              "grammarNote": "Prepositional instrumental phrase 'mit einem jähen Schlag'."
            },
            {
              "id": "a2_s4_c39_l15",
              "original": "die ihn geliebt tief im Gemüte,",
              "literal": "who loved him deep in her heart,",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun fem. nom.)"
                },
                {
                  "word": "geliebt",
                  "lemma": "lieben",
                  "pos": "verb",
                  "meaning": "loved"
                },
                {
                  "word": "Gemüte",
                  "lemma": "Gemüt",
                  "pos": "noun",
                  "meaning": "heart / mind / soul"
                }
              ],
              "grammarNote": "Relative clause modifying 'die Jungfrau' with archaic dative ending in '-e' ('Gemüte') and omitted auxiliary 'hat'."
            },
            {
              "id": "a2_s4_c39_l16",
              "original": "der jubelnd er das Herz zerstach!",
              "literal": "whose heart he triumphantly pierced!",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "whose / to whom (relative pronoun fem. dat.)"
                },
                {
                  "word": "jubelnd",
                  "lemma": "jubeln",
                  "pos": "adverb",
                  "meaning": "exultantly / triumphantly / rejoicingly"
                },
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "zerstach",
                  "lemma": "zerstechen",
                  "pos": "verb",
                  "meaning": "pierced through / stabbed"
                }
              ],
              "grammarNote": "Dative of inalienable possession 'der' ('der er das Herz zerstach' = whose heart he pierced)."
            },
            {
              "id": "a2_s4_c39_l17",
              "original": "Ich fleh für ihn, ich flehe für sein Leben;",
              "literal": "I plead for him, I plead for his life;",
              "tokens": [
                {
                  "word": "fleh",
                  "lemma": "flehen",
                  "pos": "verb",
                  "meaning": "plead / beg / pray"
                },
                {
                  "word": "flehe",
                  "lemma": "flehen",
                  "pos": "verb",
                  "meaning": "plead / implore"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Intensifying repetition: apocopated 'fleh' followed by full form 'flehe'."
            },
            {
              "id": "a2_s4_c39_l18",
              "original": "reuvoll zur Busse lenke er den Schritt!",
              "literal": "repentantly toward penance may he turn his step!",
              "tokens": [
                {
                  "word": "reuvoll",
                  "lemma": "reuvoll",
                  "pos": "adverb",
                  "meaning": "repentantly / contritely"
                },
                {
                  "word": "Busse",
                  "lemma": "Busse",
                  "pos": "noun",
                  "meaning": "penance / repentance"
                },
                {
                  "word": "lenke",
                  "lemma": "lenken",
                  "pos": "verb",
                  "meaning": "turn / guide / direct (subjunctive I)"
                },
                {
                  "word": "Schritt",
                  "lemma": "Schritt",
                  "pos": "noun",
                  "meaning": "step"
                }
              ],
              "grammarNote": "Optative subjunctive I 'lenke er' with fronted adverb 'reuvoll'."
            },
            {
              "id": "a2_s4_c39_l19",
              "original": "Der Mut des Glaubens sei ihm neu gegeben,",
              "literal": "May the courage of faith be newly given to him,",
              "tokens": [
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                },
                {
                  "word": "Glaubens",
                  "lemma": "Glaube",
                  "pos": "noun",
                  "meaning": "faith (genitive)"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I / optative)"
                },
                {
                  "word": "gegeben",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "given"
                }
              ],
              "grammarNote": "Passive optative subjunctive 'sei... gegeben' with dative pronoun 'ihm'."
            },
            {
              "id": "a2_s4_c39_l20",
              "original": "dass auch für ihn einst der Erlöser litt!",
              "literal": "that also for him once the Redeemer suffered!",
              "tokens": [
                {
                  "word": "dass",
                  "lemma": "dass",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "Erlöser",
                  "lemma": "Erlöser",
                  "pos": "noun",
                  "meaning": "Redeemer / Savior"
                },
                {
                  "word": "litt",
                  "lemma": "leiden",
                  "pos": "verb",
                  "meaning": "suffered"
                }
              ],
              "grammarNote": "Subordinate clause of purpose/faith explaining the object of belief."
            }
          ]
        },
        {
          "id": "a2_s4_c40",
          "speaker": "Tannhäuser",
          "stageDirection": "nach und nach von der Höhe seiner Aufregung und seines Trotzes herabgesunken, durch Elisabeths Fürsprache auf das Heftigste ergriffen, sinkt in Zerknirschung zusammen",
          "stageDirectionTranslation": "having gradually subsided from the height of his agitation and defiance, profoundly moved by Elisabeth's intercession, he collapses in contrition",
          "lines": [
            {
              "id": "a2_s4_c40_l1",
              "original": "Weh! Weh mir Unglücksel'gem!",
              "literal": "Woe! Woe unto me, unfortunate one!",
              "tokens": [
                {
                  "word": "Weh",
                  "lemma": "weh",
                  "pos": "interjection",
                  "meaning": "woe / alas"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me / unto me (dative)"
                },
                {
                  "word": "Unglücksel'gem",
                  "lemma": "unglückselig",
                  "pos": "adjective",
                  "meaning": "unfortunate / wretched (dative sing.)"
                }
              ],
              "grammarNote": "Exclamatory interjection governing dative of reference 'mir Unglücksel'gem' with syncope."
            }
          ]
        },
        {
          "id": "a2_s4_c41",
          "speaker": "Landgrave and Minstrels",
          "stageDirection": "allmählich beruhigt und gerührt",
          "stageDirectionTranslation": "gradually calm and touched",
          "lines": [
            {
              "id": "a2_s4_c41_l1",
              "original": "Ein Engel stieg aus lichtem Äther,",
              "literal": "An angel descended from luminous ether,",
              "tokens": [
                {
                  "word": "Engel",
                  "lemma": "Engel",
                  "pos": "noun",
                  "meaning": "angel"
                },
                {
                  "word": "stieg",
                  "lemma": "steigen",
                  "pos": "verb",
                  "meaning": "descended / stepped / climbed"
                },
                {
                  "word": "lichtem",
                  "lemma": "licht",
                  "pos": "adjective",
                  "meaning": "luminous / radiant / bright"
                },
                {
                  "word": "Äther",
                  "lemma": "Äther",
                  "pos": "noun",
                  "meaning": "ether / celestial realm"
                }
              ],
              "grammarNote": "Preterite 'stieg aus' with strong dative adjective 'lichtem'."
            },
            {
              "id": "a2_s4_c41_l2",
              "original": "zu künden Gottes heil'gen Rat!",
              "literal": "to proclaim God's holy counsel!",
              "tokens": [
                {
                  "word": "künden",
                  "lemma": "künden",
                  "pos": "verb",
                  "meaning": "proclaim / make known / announce"
                },
                {
                  "word": "Gottes",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God's"
                },
                {
                  "word": "heil'gen",
                  "lemma": "heilig",
                  "pos": "adjective",
                  "meaning": "holy / sacred"
                },
                {
                  "word": "Rat",
                  "lemma": "Rat",
                  "pos": "noun",
                  "meaning": "counsel / decree"
                }
              ],
              "grammarNote": "Infinitive clause of purpose with syncopated adjective 'heil'gen'."
            },
            {
              "id": "a2_s4_c41_l3",
              "original": "Blick hin, du schändlicher Verräter!",
              "literal": "Look thither, thou shameful traitor!",
              "tokens": [
                {
                  "word": "Blick hin",
                  "lemma": "hinblicken",
                  "pos": "verb",
                  "meaning": "look thither / look there (imperative)"
                },
                {
                  "word": "schändlicher",
                  "lemma": "schändlich",
                  "pos": "adjective",
                  "meaning": "shameful / ignominious / disgraceful"
                },
                {
                  "word": "Verräter",
                  "lemma": "Verräter",
                  "pos": "noun",
                  "meaning": "traitor"
                }
              ],
              "grammarNote": "Imperative with separable adverb 'hin' addressed to Tannhäuser in vocative."
            },
            {
              "id": "a2_s4_c41_l4",
              "original": "Werd inne deiner Missetat!",
              "literal": "Become conscious of thy misdeed!",
              "tokens": [
                {
                  "word": "Werd inne",
                  "lemma": "innewerden",
                  "pos": "verb",
                  "meaning": "become aware / become conscious (imperative)"
                },
                {
                  "word": "deiner",
                  "lemma": "dein",
                  "pos": "pronoun",
                  "meaning": "thy / your"
                },
                {
                  "word": "Missetat",
                  "lemma": "Missetat",
                  "pos": "noun",
                  "meaning": "misdeed / transgression"
                }
              ],
              "grammarNote": "Idiomatic construction 'einer Sache (genitive) innewerden' with apocopated imperative 'Werd'."
            },
            {
              "id": "a2_s4_c41_l5",
              "original": "Du gabst ihr Tod, sie bittet für dein Leben!",
              "literal": "Thou gavest her death, she prays for thy life!",
              "tokens": [
                {
                  "word": "gabst",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gavest / gave"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "bittet",
                  "lemma": "bitten",
                  "pos": "verb",
                  "meaning": "prays / pleads / asks"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Antithetical parataxis contrasting 'Du gabst ihr Tod' and 'sie bittet für dein Leben'."
            },
            {
              "id": "a2_s4_c41_l6",
              "original": "Wer bliebe rauh, hört er des Engels Flehn?",
              "literal": "Who would remain harsh, hearing the angel's pleading?",
              "tokens": [
                {
                  "word": "Wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "who"
                },
                {
                  "word": "bliebe",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "would remain (subjunctive II)"
                },
                {
                  "word": "rauh",
                  "lemma": "rauh",
                  "pos": "adjective",
                  "meaning": "harsh / rough / unyielding"
                },
                {
                  "word": "Flehn",
                  "lemma": "Flehen",
                  "pos": "noun",
                  "meaning": "pleading / supplication"
                }
              ],
              "grammarNote": "Subjunctive II 'bliebe' with conditional inversion in second half ('hört er...' = 'if he hears')."
            },
            {
              "id": "a2_s4_c41_l7",
              "original": "Darf ich auch nicht dem Schuldigen vergeben,",
              "literal": "Even if I may not forgive the guilty one,",
              "tokens": [
                {
                  "word": "Darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "Schuldigen",
                  "lemma": "Schuldige",
                  "pos": "noun",
                  "meaning": "guilty one (dative)"
                },
                {
                  "word": "vergeben",
                  "lemma": "vergeben",
                  "pos": "verb",
                  "meaning": "forgive"
                }
              ],
              "grammarNote": "Concessive conditional clause introduced by inverted verb 'Darf ich auch nicht...' ('Even though I may not...')."
            },
            {
              "id": "a2_s4_c41_l8",
              "original": "dem Himmelswort kann nicht ich widerstehn!",
              "literal": "heaven's word I cannot resist!",
              "tokens": [
                {
                  "word": "Himmelswort",
                  "lemma": "Himmelswort",
                  "pos": "noun",
                  "meaning": "heaven's word / celestial voice"
                },
                {
                  "word": "kann",
                  "lemma": "können",
                  "pos": "verb",
                  "meaning": "can"
                },
                {
                  "word": "widerstehn",
                  "lemma": "widerstehen",
                  "pos": "verb",
                  "meaning": "resist / withstand"
                }
              ],
              "grammarNote": "Fronted dative object 'dem Himmelswort' governed by 'widerstehn', with emphatic postposed negation 'kann nicht ich'."
            }
          ]
        },
        {
          "id": "a2_s4_c42",
          "speaker": "Knights",
          "lines": [
            {
              "id": "a2_s4_c42_l1",
              "original": "Blick hin! Blick hin, du schändlicher Verräter!",
              "literal": "Look thither! Look thither, thou shameful traitor!",
              "tokens": [
                {
                  "word": "Blick hin",
                  "lemma": "hinblicken",
                  "pos": "verb",
                  "meaning": "look thither (imperative)"
                },
                {
                  "word": "schändlicher",
                  "lemma": "schändlich",
                  "pos": "adjective",
                  "meaning": "shameful / infamous"
                },
                {
                  "word": "Verräter",
                  "lemma": "Verräter",
                  "pos": "noun",
                  "meaning": "traitor"
                }
              ],
              "grammarNote": "Gemination of imperative phrase 'Blick hin!'."
            },
            {
              "id": "a2_s4_c42_l2",
              "original": "Blick hin auf sie!",
              "literal": "Look upon her!",
              "tokens": [
                {
                  "word": "Blick hin",
                  "lemma": "hinblicken",
                  "pos": "verb",
                  "meaning": "look thither (imperative)"
                },
                {
                  "word": "auf",
                  "lemma": "auf",
                  "pos": "preposition",
                  "meaning": "upon / at"
                },
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "her (acc.)"
                }
              ],
              "grammarNote": "Directional prepositional phrase 'auf sie' specifying the target of gaze."
            },
            {
              "id": "a2_s4_c42_l3",
              "original": "Du gabst ihr Tod, sie bittet für dein Leben!",
              "literal": "Thou gavest her death, she prays for thy life!",
              "tokens": [
                {
                  "word": "gabst",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "gavest / gave"
                },
                {
                  "word": "Tod",
                  "lemma": "Tod",
                  "pos": "noun",
                  "meaning": "death"
                },
                {
                  "word": "bittet",
                  "lemma": "bitten",
                  "pos": "verb",
                  "meaning": "prays / pleads / asks"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Antithetical parataxis contrasting 'Du gabst ihr Tod' and 'sie bittet für dein Leben'."
            },
            {
              "id": "a2_s4_c42_l4",
              "original": "Wer bliebe rauh, hört er des Engels Flehn?",
              "literal": "Who would remain harsh, hearing the angel's pleading?",
              "tokens": [
                {
                  "word": "Wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "who"
                },
                {
                  "word": "bliebe",
                  "lemma": "bleiben",
                  "pos": "verb",
                  "meaning": "would remain (subjunctive II)"
                },
                {
                  "word": "rauh",
                  "lemma": "rauh",
                  "pos": "adjective",
                  "meaning": "harsh / rough / unyielding"
                },
                {
                  "word": "Flehn",
                  "lemma": "Flehen",
                  "pos": "noun",
                  "meaning": "pleading / supplication"
                }
              ],
              "grammarNote": "Subjunctive II 'bliebe' with conditional inversion in second half ('hört er...' = 'if he hears')."
            },
            {
              "id": "a2_s4_c42_l5",
              "original": "Darf ich auch nie dem Schuldigen vergeben,",
              "literal": "Even if I may never forgive the guilty one,",
              "tokens": [
                {
                  "word": "Darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may"
                },
                {
                  "word": "nie",
                  "lemma": "nie",
                  "pos": "adverb",
                  "meaning": "never"
                },
                {
                  "word": "Schuldigen",
                  "lemma": "Schuldige",
                  "pos": "noun",
                  "meaning": "guilty one (dative)"
                },
                {
                  "word": "vergeben",
                  "lemma": "vergeben",
                  "pos": "verb",
                  "meaning": "forgive"
                }
              ],
              "grammarNote": "Concessive inversion 'Darf ich auch nie...' with dative object 'dem Schuldigen'."
            },
            {
              "id": "a2_s4_c42_l6",
              "original": "dem Engelswort darf nicht ich widerstehn!",
              "literal": "the angel's word I must not resist!",
              "tokens": [
                {
                  "word": "Engelswort",
                  "lemma": "Engelswort",
                  "pos": "noun",
                  "meaning": "angel's word"
                },
                {
                  "word": "darf",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "may / am permitted"
                },
                {
                  "word": "widerstehn",
                  "lemma": "widerstehen",
                  "pos": "verb",
                  "meaning": "resist / oppose"
                }
              ],
              "grammarNote": "Dative object 'dem Engelswort' fronted before modal verb 'darf'."
            }
          ]
        },
        {
          "id": "a2_s4_c43",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s4_c43_l1",
              "original": "Zum Heil den Sündigen zu führen,",
              "literal": "To lead the sinful one to salvation,",
              "tokens": [
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "Sündigen",
                  "lemma": "Sündige",
                  "pos": "noun",
                  "meaning": "sinful one / sinner (acc.)"
                },
                {
                  "word": "führen",
                  "lemma": "führen",
                  "pos": "verb",
                  "meaning": "lead / guide"
                }
              ],
              "grammarNote": "Infinitive clause of purpose 'zu führen' preceding the main clause."
            },
            {
              "id": "a2_s4_c43_l2",
              "original": "die Gottgesandte nahte mir;",
              "literal": "the divine messenger approached me;",
              "tokens": [
                {
                  "word": "Gottgesandte",
                  "lemma": "Gottgesandte",
                  "pos": "noun",
                  "meaning": "divine messenger / one sent by God"
                },
                {
                  "word": "nahte",
                  "lemma": "nahen",
                  "pos": "verb",
                  "meaning": "approached / drew near (past)"
                },
                {
                  "word": "mir",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "to me (dative)"
                }
              ],
              "grammarNote": "Main clause with subject 'die Gottgesandte' governing dative 'mir'."
            },
            {
              "id": "a2_s4_c43_l3",
              "original": "doch ach! sie frevelnd zu berühren,",
              "literal": "yet alas! to touch her profanely,",
              "tokens": [
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "conjunction",
                  "meaning": "yet / but"
                },
                {
                  "word": "ach",
                  "lemma": "ach",
                  "pos": "interjection",
                  "meaning": "alas / ah"
                },
                {
                  "word": "frevelnd",
                  "lemma": "freveln",
                  "pos": "adverb",
                  "meaning": "profanely / wickedly / sacrilegiously"
                },
                {
                  "word": "berühren",
                  "lemma": "berühren",
                  "pos": "verb",
                  "meaning": "touch"
                }
              ],
              "grammarNote": "Infinitive clause expressing sacrilegious intent, coordinated with 'Lästerblick'."
            },
            {
              "id": "a2_s4_c43_l4",
              "original": "hob ich den Lästerblick zu ihr!",
              "literal": "I raised my blasphemous gaze to her!",
              "tokens": [
                {
                  "word": "hob",
                  "lemma": "heben",
                  "pos": "verb",
                  "meaning": "raised / lifted"
                },
                {
                  "word": "Lästerblick",
                  "lemma": "Lästerblick",
                  "pos": "noun",
                  "meaning": "blasphemous gaze / profane look"
                },
                {
                  "word": "ihr",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "her (dative)"
                }
              ],
              "grammarNote": "Compound noun 'Lästerblick' (blasphemous gaze) as direct object of 'hob'."
            },
            {
              "id": "a2_s4_c43_l5",
              "original": "O du, hoch über diesen Erdengründen,",
              "literal": "O thou, high above these earthly realms,",
              "tokens": [
                {
                  "word": "hoch",
                  "lemma": "hoch",
                  "pos": "adverb",
                  "meaning": "high"
                },
                {
                  "word": "über",
                  "lemma": "über",
                  "pos": "preposition",
                  "meaning": "above / over"
                },
                {
                  "word": "Erdengründen",
                  "lemma": "Erdengrund",
                  "pos": "noun",
                  "meaning": "earthly grounds / earthly realms"
                }
              ],
              "grammarNote": "Vocative apostrophe to the divine power ('O du...')."
            },
            {
              "id": "a2_s4_c43_l6",
              "original": "die mir den Engel meines Heils gesandt!",
              "literal": "who sent to me the angel of my salvation!",
              "tokens": [
                {
                  "word": "die",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun fem. nom.)"
                },
                {
                  "word": "Engel",
                  "lemma": "Engel",
                  "pos": "noun",
                  "meaning": "angel"
                },
                {
                  "word": "Heils",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "gesandt",
                  "lemma": "senden",
                  "pos": "verb",
                  "meaning": "sent (past participle)"
                }
              ],
              "grammarNote": "Relative clause with omitted auxiliary 'hast' ('gesandt [hast]')."
            },
            {
              "id": "a2_s4_c43_l7",
              "original": "Erbarm dich mein, der, ach! so tief in Sünden,",
              "literal": "Have mercy on me, who, alas! so deep in sins,",
              "tokens": [
                {
                  "word": "Erbarm dich",
                  "lemma": "erbarmen",
                  "pos": "verb",
                  "meaning": "have mercy (imperative reflexive)"
                },
                {
                  "word": "mein",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "on me (archaic genitive)"
                },
                {
                  "word": "tief",
                  "lemma": "tief",
                  "pos": "adverb",
                  "meaning": "deep / deeply"
                },
                {
                  "word": "Sünden",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sins"
                }
              ],
              "grammarNote": "Archaic genitive object 'mein' governed by reflexive imperative 'Erbarm dich', followed by relative pronoun 'der'."
            },
            {
              "id": "a2_s4_c43_l8",
              "original": "schmachvoll des Himmels Mittlerin verkannt!",
              "literal": "shamefully failed to recognize heaven's mediatrix!",
              "tokens": [
                {
                  "word": "schmachvoll",
                  "lemma": "schmachvoll",
                  "pos": "adverb",
                  "meaning": "shamefully / ignominiously"
                },
                {
                  "word": "Himmels",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven (genitive)"
                },
                {
                  "word": "Mittlerin",
                  "lemma": "Mittlerin",
                  "pos": "noun",
                  "meaning": "mediatrix / female mediator"
                },
                {
                  "word": "verkannt",
                  "lemma": "verkennen",
                  "pos": "verb",
                  "meaning": "misjudged / failed to recognize"
                }
              ],
              "grammarNote": "Participle with omitted auxiliary '[habe]' completing relative clause from line 87; 'Mittlerin' refers to Elisabeth as mediatrix."
            },
            {
              "id": "a2_s4_c43_l9",
              "original": "Erbarm dich mein! Erbarm dich mein!",
              "literal": "Have mercy on me! Have mercy on me!",
              "tokens": [
                {
                  "word": "Erbarm dich",
                  "lemma": "erbarmen",
                  "pos": "verb",
                  "meaning": "have mercy (imperative reflexive)"
                },
                {
                  "word": "mein",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "on me (archaic genitive)"
                }
              ],
              "grammarNote": "Solemn liturgical supplication with archaic genitive of personal pronoun 'mein'."
            },
            {
              "id": "a2_s4_c43_l10",
              "original": "Ach, erbarm dich mein!",
              "literal": "Ah, have mercy on me!",
              "tokens": [
                {
                  "word": "Ach",
                  "lemma": "ach",
                  "pos": "interjection",
                  "meaning": "ah / alas"
                },
                {
                  "word": "erbarm dich",
                  "lemma": "erbarmen",
                  "pos": "verb",
                  "meaning": "have mercy (imperative reflexive)"
                },
                {
                  "word": "mein",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "on me (archaic genitive)"
                }
              ],
              "grammarNote": "Interjection 'Ach' introducing the plea."
            }
          ]
        },
        {
          "id": "a2_s4_c44",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s4_c44_l1",
              "original": "Ich fleh' für ihn, ich flehe für sein Leben!",
              "literal": "I plead for him, I plead for his life!",
              "tokens": [
                {
                  "word": "fleh'",
                  "lemma": "flehen",
                  "pos": "verb",
                  "meaning": "plead / pray"
                },
                {
                  "word": "flehe",
                  "lemma": "flehen",
                  "pos": "verb",
                  "meaning": "plead / implore"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Line 91 has apostrophe 'fleh'', echoing line 64."
            },
            {
              "id": "a2_s4_c44_l2",
              "original": "Der Mut des Glaubens sei ihm neu gegeben,",
              "literal": "May the courage of faith be newly given to him,",
              "tokens": [
                {
                  "word": "Mut",
                  "lemma": "Mut",
                  "pos": "noun",
                  "meaning": "courage"
                },
                {
                  "word": "Glaubens",
                  "lemma": "Glaube",
                  "pos": "noun",
                  "meaning": "faith (genitive)"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I / optative)"
                },
                {
                  "word": "gegeben",
                  "lemma": "geben",
                  "pos": "verb",
                  "meaning": "given"
                }
              ],
              "grammarNote": "Passive optative subjunctive 'sei... gegeben' with dative pronoun 'ihm'."
            },
            {
              "id": "a2_s4_c44_l3",
              "original": "dass auch für ihn einst der Erlöser litt!",
              "literal": "that also for him once the Redeemer suffered!",
              "tokens": [
                {
                  "word": "dass",
                  "lemma": "dass",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "Erlöser",
                  "lemma": "Erlöser",
                  "pos": "noun",
                  "meaning": "Redeemer / Savior"
                },
                {
                  "word": "litt",
                  "lemma": "leiden",
                  "pos": "verb",
                  "meaning": "suffered"
                }
              ],
              "grammarNote": "Subordinate clause of purpose/faith explaining the object of belief."
            }
          ]
        },
        {
          "id": "a2_s4_c45",
          "speaker": "Elisabeth",
          "stageDirection": "Der Landgraf tritt feierlich in die Mitte",
          "stageDirectionTranslation": "The Landgrave solemnly steps into the center.",
          "lines": []
        },
        {
          "id": "a2_s4_c46",
          "speaker": "Landgraf Hermann",
          "lines": [
            {
              "id": "a2_s4_c46_l1",
              "original": "Ein furchtbares Verbrechen ward begangen;",
              "literal": "A terrible crime was committed;",
              "tokens": [
                {
                  "word": "furchtbares",
                  "lemma": "furchtbar",
                  "pos": "adjective",
                  "meaning": "terrible / dreadful"
                },
                {
                  "word": "Verbrechen",
                  "lemma": "Verbrechen",
                  "pos": "noun",
                  "meaning": "crime"
                },
                {
                  "word": "ward",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "was (archaic passive auxiliary)"
                },
                {
                  "word": "begangen",
                  "lemma": "begehen",
                  "pos": "verb",
                  "meaning": "committed"
                }
              ],
              "grammarNote": "Passive voice with archaic preterite auxiliary 'ward' ('wurde')."
            },
            {
              "id": "a2_s4_c46_l2",
              "original": "es stahl mit heuchlerischer Larve sich",
              "literal": "there stole in with a hypocritical mask",
              "tokens": [
                {
                  "word": "stahl sich",
                  "lemma": "stehlen",
                  "pos": "verb",
                  "meaning": "stole / crept (reflexive past)"
                },
                {
                  "word": "heuchlerischer",
                  "lemma": "heuchlerisch",
                  "pos": "adjective",
                  "meaning": "hypocritical / deceitful"
                },
                {
                  "word": "Larve",
                  "lemma": "Larve",
                  "pos": "noun",
                  "meaning": "mask / disguise"
                }
              ],
              "grammarNote": "Expletive 'es' with reflexive verb 'stahl sich' governing prepositional phrase with dative feminine."
            },
            {
              "id": "a2_s4_c46_l3",
              "original": "zu uns der Sünde fluchbeladner Sohn!",
              "literal": "to us the curse-laden son of sin!",
              "tokens": [
                {
                  "word": "Sünde",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sin"
                },
                {
                  "word": "fluchbeladner",
                  "lemma": "fluchbeladen",
                  "pos": "adjective",
                  "meaning": "curse-laden / burdened with curses"
                },
                {
                  "word": "Sohn",
                  "lemma": "Sohn",
                  "pos": "noun",
                  "meaning": "son"
                }
              ],
              "grammarNote": "Subject of the sentence 'der Sünde fluchbeladner Sohn' with preposed genitive 'der Sünde' and syncopated adjective 'fluchbeladner'."
            },
            {
              "id": "a2_s4_c46_l4",
              "original": "Wir stossen dich von uns, bei uns darfst du",
              "literal": "We cast thee from us, among us thou mayest",
              "tokens": [
                {
                  "word": "stossen",
                  "lemma": "stossen",
                  "pos": "verb",
                  "meaning": "cast / thrust / expel"
                },
                {
                  "word": "von",
                  "lemma": "von",
                  "pos": "preposition",
                  "meaning": "from"
                },
                {
                  "word": "darfst",
                  "lemma": "dürfen",
                  "pos": "verb",
                  "meaning": "mayest / art permitted"
                }
              ],
              "grammarNote": "Enjambment carrying modal 'darfst du' to infinitive 'nicht weilen' in next line."
            },
            {
              "id": "a2_s4_c46_l5",
              "original": "nicht weilen! Schmachbefleckt ist unser Herd",
              "literal": "not dwell! Stained with disgrace is our hearth",
              "tokens": [
                {
                  "word": "weilen",
                  "lemma": "weilen",
                  "pos": "verb",
                  "meaning": "dwell / linger / abide"
                },
                {
                  "word": "Schmachbefleckt",
                  "lemma": "schmachbefleckt",
                  "pos": "adjective",
                  "meaning": "stained with shame / disgrace-besmirched"
                },
                {
                  "word": "Herd",
                  "lemma": "Herd",
                  "pos": "noun",
                  "meaning": "hearth / home"
                }
              ],
              "grammarNote": "Fronted predicate adjective 'Schmachbefleckt' followed by inverted copula and subject."
            },
            {
              "id": "a2_s4_c46_l6",
              "original": "durch dich, und dräuend blickt der Himmel selbst",
              "literal": "through thee, and threateningly heaven itself looks",
              "tokens": [
                {
                  "word": "dräuend",
                  "lemma": "dräuen",
                  "pos": "adverb",
                  "meaning": "threateningly / menacingly"
                },
                {
                  "word": "blickt",
                  "lemma": "blicken",
                  "pos": "verb",
                  "meaning": "looks / gazes"
                },
                {
                  "word": "Himmel",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven / sky"
                },
                {
                  "word": "selbst",
                  "lemma": "selbst",
                  "pos": "pronoun",
                  "meaning": "itself"
                }
              ],
              "grammarNote": "Archaic participial adverb 'dräuend' (for 'drohend')."
            },
            {
              "id": "a2_s4_c46_l7",
              "original": "auf dieses Dach, das dich zu lang schon birgt!",
              "literal": "upon this roof that shelters thee already too long!",
              "tokens": [
                {
                  "word": "Dach",
                  "lemma": "Dach",
                  "pos": "noun",
                  "meaning": "roof"
                },
                {
                  "word": "lang",
                  "lemma": "lang",
                  "pos": "adverb",
                  "meaning": "long"
                },
                {
                  "word": "birgt",
                  "lemma": "bergen",
                  "pos": "verb",
                  "meaning": "shelters / conceals / harbors"
                }
              ],
              "grammarNote": "Metonymy: 'Dach' (roof) for castle/court, with relative clause."
            },
            {
              "id": "a2_s4_c46_l8",
              "original": "Zur Rettung doch vor ewigem Verderben",
              "literal": "Yet for rescue from eternal damnation",
              "tokens": [
                {
                  "word": "Rettung",
                  "lemma": "Rettung",
                  "pos": "noun",
                  "meaning": "rescue / salvation / deliverance"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "conjunction",
                  "meaning": "yet / however"
                },
                {
                  "word": "ewigem",
                  "lemma": "ewig",
                  "pos": "adjective",
                  "meaning": "eternal"
                },
                {
                  "word": "Verderben",
                  "lemma": "Verderben",
                  "pos": "noun",
                  "meaning": "ruin / damnation / perdition"
                }
              ],
              "grammarNote": "Prepositional phrase modifying 'steht offen' in the following line."
            },
            {
              "id": "a2_s4_c46_l9",
              "original": "steht offen dir ein Weg: von mir dich stossend,",
              "literal": "a way stands open to thee: casting thee from me,",
              "tokens": [
                {
                  "word": "steht offen",
                  "lemma": "offenstehen",
                  "pos": "verb",
                  "meaning": "stands open"
                },
                {
                  "word": "Weg",
                  "lemma": "Weg",
                  "pos": "noun",
                  "meaning": "way / path"
                },
                {
                  "word": "stossend",
                  "lemma": "stossen",
                  "pos": "verb",
                  "meaning": "casting / thrusting (present participle)"
                }
              ],
              "grammarNote": "Participle clause 'von mir dich stossend' describing the Landgrave's simultaneous action of expulsion."
            },
            {
              "id": "a2_s4_c46_l10",
              "original": "zeig ich ihn dir: nütz ihn zu deinem Heil!",
              "literal": "I show it to thee: use it for thy salvation!",
              "tokens": [
                {
                  "word": "zeig",
                  "lemma": "zeigen",
                  "pos": "verb",
                  "meaning": "show"
                },
                {
                  "word": "nütz",
                  "lemma": "nützen",
                  "pos": "verb",
                  "meaning": "use / make use of (imperative)"
                },
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation / welfare"
                }
              ],
              "grammarNote": "Apocope in verbs 'zeig' and imperative 'nütz'."
            },
            {
              "id": "a2_s4_c46_l11",
              "original": "Versammelt sind aus meinen Landen",
              "literal": "Assembled are from my lands",
              "tokens": [
                {
                  "word": "Versammelt",
                  "lemma": "versammeln",
                  "pos": "verb",
                  "meaning": "assembled / gathered (past participle)"
                },
                {
                  "word": "meinen",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my"
                },
                {
                  "word": "Landen",
                  "lemma": "Land",
                  "pos": "noun",
                  "meaning": "lands / territories (archaic dative pl.)"
                }
              ],
              "grammarNote": "Statale passive 'Versammelt sind' with fronted participle."
            },
            {
              "id": "a2_s4_c46_l12",
              "original": "bussfert'ge Pilger, stark an Zahl;",
              "literal": "penitent pilgrims, strong in number;",
              "tokens": [
                {
                  "word": "bussfert'ge",
                  "lemma": "bussfertig",
                  "pos": "adjective",
                  "meaning": "penitent / ready for penance"
                },
                {
                  "word": "Pilger",
                  "lemma": "Pilger",
                  "pos": "noun",
                  "meaning": "pilgrims"
                },
                {
                  "word": "stark",
                  "lemma": "stark",
                  "pos": "adjective",
                  "meaning": "strong"
                },
                {
                  "word": "Zahl",
                  "lemma": "Zahl",
                  "pos": "noun",
                  "meaning": "number"
                }
              ],
              "grammarNote": "Syncopated adjective 'bussfert'ge' modifying the subject 'Pilger'."
            },
            {
              "id": "a2_s4_c46_l13",
              "original": "die ältren schon voran sich wandten,",
              "literal": "the older ones have already set out ahead,",
              "tokens": [
                {
                  "word": "ältren",
                  "lemma": "alt",
                  "pos": "noun",
                  "meaning": "older ones / elders"
                },
                {
                  "word": "voran",
                  "lemma": "voran",
                  "pos": "adverb",
                  "meaning": "ahead / forward"
                },
                {
                  "word": "wandten sich",
                  "lemma": "wenden",
                  "pos": "verb",
                  "meaning": "turned / set out (past reflexive)"
                }
              ],
              "grammarNote": "Reflexive verb 'sich wenden' with syncopated comparative 'ältren'."
            },
            {
              "id": "a2_s4_c46_l14",
              "original": "die jüngern rasten noch im Tal.",
              "literal": "the younger ones are still resting in the valley.",
              "tokens": [
                {
                  "word": "jüngern",
                  "lemma": "jung",
                  "pos": "noun",
                  "meaning": "younger ones"
                },
                {
                  "word": "rasten",
                  "lemma": "rasten",
                  "pos": "verb",
                  "meaning": "rest / repose"
                },
                {
                  "word": "Tal",
                  "lemma": "Tal",
                  "pos": "noun",
                  "meaning": "valley"
                }
              ],
              "grammarNote": "Syncopated nominalized comparative 'jüngern'."
            },
            {
              "id": "a2_s4_c46_l15",
              "original": "Nur um geringer Sünde willen",
              "literal": "Only for the sake of slight sin",
              "tokens": [
                {
                  "word": "Nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only"
                },
                {
                  "word": "geringer",
                  "lemma": "gering",
                  "pos": "adjective",
                  "meaning": "slight / minor / small"
                },
                {
                  "word": "Sünde",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sin"
                },
                {
                  "word": "willen",
                  "lemma": "willen",
                  "pos": "preposition",
                  "meaning": "for the sake of (postposition)"
                }
              ],
              "grammarNote": "Circumposition 'um... willen' governing genitive 'geringer Sünde'."
            },
            {
              "id": "a2_s4_c46_l16",
              "original": "ihr Herz nicht Ruhe ihnen lässt;",
              "literal": "their heart allows them no rest;",
              "tokens": [
                {
                  "word": "Herz",
                  "lemma": "Herz",
                  "pos": "noun",
                  "meaning": "heart"
                },
                {
                  "word": "Ruhe",
                  "lemma": "Ruhe",
                  "pos": "noun",
                  "meaning": "rest / peace"
                },
                {
                  "word": "ihnen",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "to them (dative)"
                },
                {
                  "word": "lässt",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "leaves / allows"
                }
              ],
              "grammarNote": "Collocation 'keine Ruhe lassen' here phrased poetically as 'nicht Ruhe ihnen lässt'."
            },
            {
              "id": "a2_s4_c46_l17",
              "original": "der Busse frommen Drang zu stillen,",
              "literal": "to appease the pious urge of penance,",
              "tokens": [
                {
                  "word": "Busse",
                  "lemma": "Busse",
                  "pos": "noun",
                  "meaning": "penance"
                },
                {
                  "word": "frommen",
                  "lemma": "fromm",
                  "pos": "adjective",
                  "meaning": "pious / devout"
                },
                {
                  "word": "Drang",
                  "lemma": "Drang",
                  "pos": "noun",
                  "meaning": "urge / impulse / desire"
                },
                {
                  "word": "stillen",
                  "lemma": "stillen",
                  "pos": "verb",
                  "meaning": "still / appease / satisfy"
                }
              ],
              "grammarNote": "Preposed genitive 'der Busse' modifying noun phrase 'frommen Drang'."
            },
            {
              "id": "a2_s4_c46_l18",
              "original": "ziehn sie nach Rom zum Gnadenfest.",
              "literal": "they journey to Rome to the feast of grace.",
              "tokens": [
                {
                  "word": "ziehn",
                  "lemma": "ziehen",
                  "pos": "verb",
                  "meaning": "journey / march / go"
                },
                {
                  "word": "Rom",
                  "lemma": "Rom",
                  "pos": "noun",
                  "meaning": "Rome"
                },
                {
                  "word": "Gnadenfest",
                  "lemma": "Gnadenfest",
                  "pos": "noun",
                  "meaning": "feast of grace / jubilee"
                }
              ],
              "grammarNote": "Contraction 'ziehn' ('ziehen') describing pilgrimage."
            }
          ]
        },
        {
          "id": "a2_s4_c47",
          "speaker": "Landgrave, Minstrels & Knights",
          "lines": [
            {
              "id": "a2_s4_c47_l1",
              "original": "Mit ihnen sollst du wallen",
              "literal": "With them thou shalt pilgrimage",
              "tokens": [
                {
                  "word": "ihnen",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "them (dative)"
                },
                {
                  "word": "sollst",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shalt / ought to"
                },
                {
                  "word": "wallen",
                  "lemma": "wallen",
                  "pos": "verb",
                  "meaning": "pilgrimage / wander as a pilgrim"
                }
              ],
              "grammarNote": "Modal auxiliary 'sollst' governing a chain of infinitives: 'wallen', 'niederfallen', 'büssen'."
            },
            {
              "id": "a2_s4_c47_l2",
              "original": "zur Stadt der Gnadenhuld,",
              "literal": "to the city of gracious mercy,",
              "tokens": [
                {
                  "word": "Stadt",
                  "lemma": "Stadt",
                  "pos": "noun",
                  "meaning": "city"
                },
                {
                  "word": "Gnadenhuld",
                  "lemma": "Gnadenhuld",
                  "pos": "noun",
                  "meaning": "gracious mercy / grace and favor"
                }
              ],
              "grammarNote": "Compound noun 'Gnadenhuld' in genitive referring to Rome as the seat of papal absolution."
            },
            {
              "id": "a2_s4_c47_l3",
              "original": "im Staub dort niederfallen",
              "literal": "fall down there in the dust",
              "tokens": [
                {
                  "word": "Staub",
                  "lemma": "Staub",
                  "pos": "noun",
                  "meaning": "dust"
                },
                {
                  "word": "dort",
                  "lemma": "dort",
                  "pos": "adverb",
                  "meaning": "there"
                },
                {
                  "word": "niederfallen",
                  "lemma": "niederfallen",
                  "pos": "verb",
                  "meaning": "fall down / prostrate oneself"
                }
              ],
              "grammarNote": "Infinitive dependent on 'sollst' from line 110."
            },
            {
              "id": "a2_s4_c47_l4",
              "original": "und büssen deine Schuld;",
              "literal": "and atone for thy guilt;",
              "tokens": [
                {
                  "word": "büssen",
                  "lemma": "büssen",
                  "pos": "verb",
                  "meaning": "atone for / expiate"
                },
                {
                  "word": "deine",
                  "lemma": "dein",
                  "pos": "pronoun",
                  "meaning": "thy / your"
                },
                {
                  "word": "Schuld",
                  "lemma": "Schuld",
                  "pos": "noun",
                  "meaning": "guilt / sin / debt"
                }
              ],
              "grammarNote": "Infinitive continuing the command sequence."
            },
            {
              "id": "a2_s4_c47_l5",
              "original": "vor ihm stürz dich darnieder,",
              "literal": "prostrate thyself before him",
              "tokens": [
                {
                  "word": "stürz dich",
                  "lemma": "stürzen",
                  "pos": "verb",
                  "meaning": "cast thyself / prostrate thyself (imperative reflexive)"
                },
                {
                  "word": "darnieder",
                  "lemma": "darnieder",
                  "pos": "adverb",
                  "meaning": "down / prostrate"
                }
              ],
              "grammarNote": "Reflexive imperative 'stürz dich' combined with separable adverb 'darnieder'."
            },
            {
              "id": "a2_s4_c47_l6",
              "original": "der Gottes Urteil spricht!",
              "literal": "who pronounces God's judgment!",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun)"
                },
                {
                  "word": "Gottes",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God's"
                },
                {
                  "word": "Urteil",
                  "lemma": "Urteil",
                  "pos": "noun",
                  "meaning": "judgment / sentence"
                },
                {
                  "word": "spricht",
                  "lemma": "sprechen",
                  "pos": "verb",
                  "meaning": "speaks / pronounces"
                }
              ],
              "grammarNote": "Relative clause defining 'ihm' (referring to the Pope in Rome)."
            },
            {
              "id": "a2_s4_c47_l7",
              "original": "Doch kehre niemals wieder,",
              "literal": "Yet never return,",
              "tokens": [
                {
                  "word": "Doch",
                  "lemma": "doch",
                  "pos": "conjunction",
                  "meaning": "yet / but"
                },
                {
                  "word": "kehre wieder",
                  "lemma": "wiederkehren",
                  "pos": "verb",
                  "meaning": "return / come back (imperative)"
                },
                {
                  "word": "niemals",
                  "lemma": "niemals",
                  "pos": "adverb",
                  "meaning": "never"
                }
              ],
              "grammarNote": "Separable verb 'wiederkehren' in negative imperative."
            },
            {
              "id": "a2_s4_c47_l8",
              "original": "ward dir sein Segen nicht!",
              "literal": "if his blessing was not granted thee!",
              "tokens": [
                {
                  "word": "ward",
                  "lemma": "werden",
                  "pos": "verb",
                  "meaning": "was / became (archaic)"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to thee (dative)"
                },
                {
                  "word": "Segen",
                  "lemma": "Segen",
                  "pos": "noun",
                  "meaning": "blessing"
                }
              ],
              "grammarNote": "Conditional clause with V1 verb inversion ('ward dir sein Segen nicht' = 'if his blessing did not become thine')."
            },
            {
              "id": "a2_s4_c47_l9",
              "original": "Musst unsre Rache weichen,",
              "literal": "Though our vengeance had to yield,",
              "tokens": [
                {
                  "word": "Musst",
                  "lemma": "müssen",
                  "pos": "verb",
                  "meaning": "must / had to (past/pres. archaic)"
                },
                {
                  "word": "unsre",
                  "lemma": "unser",
                  "pos": "pronoun",
                  "meaning": "our"
                },
                {
                  "word": "Rache",
                  "lemma": "Rache",
                  "pos": "noun",
                  "meaning": "vengeance / revenge"
                },
                {
                  "word": "weichen",
                  "lemma": "weichen",
                  "pos": "verb",
                  "meaning": "yield / give way"
                }
              ],
              "grammarNote": "Concessive conditional inversion: 'Musst unsre Rache weichen' ('Even though our vengeance must yield')."
            },
            {
              "id": "a2_s4_c47_l10",
              "original": "weil sie ein Engel brach,",
              "literal": "because an angel broke it,",
              "tokens": [
                {
                  "word": "weil",
                  "lemma": "weil",
                  "pos": "conjunction",
                  "meaning": "because"
                },
                {
                  "word": "sie",
                  "lemma": "sie",
                  "pos": "pronoun",
                  "meaning": "it (acc. referring to 'Rache')"
                },
                {
                  "word": "Engel",
                  "lemma": "Engel",
                  "pos": "noun",
                  "meaning": "angel"
                },
                {
                  "word": "brach",
                  "lemma": "brechen",
                  "pos": "verb",
                  "meaning": "broke"
                }
              ],
              "grammarNote": "Causal subordinate clause with pronoun 'sie' referring back to 'die Rache'."
            },
            {
              "id": "a2_s4_c47_l11",
              "original": "dies Schwert wird dich erreichen,",
              "literal": "this sword will reach thee,",
              "tokens": [
                {
                  "word": "dies",
                  "lemma": "dieser",
                  "pos": "pronoun",
                  "meaning": "this"
                },
                {
                  "word": "Schwert",
                  "lemma": "Schwert",
                  "pos": "noun",
                  "meaning": "sword"
                },
                {
                  "word": "erreichen",
                  "lemma": "erreichen",
                  "pos": "verb",
                  "meaning": "reach / overtake"
                }
              ],
              "grammarNote": "Future tense 'wird... erreichen' stating the retribution."
            },
            {
              "id": "a2_s4_c47_l12",
              "original": "harrst du in Sünd' und Schmach!",
              "literal": "if thou persistest in sin and shame!",
              "tokens": [
                {
                  "word": "harrst",
                  "lemma": "harren",
                  "pos": "verb",
                  "meaning": "persistest / waitest / abidest"
                },
                {
                  "word": "Sünd'",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sin"
                },
                {
                  "word": "Schmach",
                  "lemma": "Schmach",
                  "pos": "noun",
                  "meaning": "shame / disgrace / dishonour"
                }
              ],
              "grammarNote": "Conditional clause with V1 verb inversion ('harrst du...' = 'if thou stayest/persistest')."
            }
          ]
        },
        {
          "id": "a2_s4_c48",
          "speaker": "Elisabeth",
          "lines": [
            {
              "id": "a2_s4_c48_l1",
              "original": "Lass' hin zu dir ihn wallen,",
              "literal": "Let him wander forth to thee,",
              "tokens": [
                {
                  "word": "Lass'",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let / allow (imperative)"
                },
                {
                  "word": "hin zu",
                  "lemma": "hin zu",
                  "pos": "preposition",
                  "meaning": "forth to / toward"
                },
                {
                  "word": "wallen",
                  "lemma": "wallen",
                  "pos": "verb",
                  "meaning": "pilgrimage / wander"
                }
              ],
              "grammarNote": "Imperative 'Lass'' governing infinitive 'wallen' with directional compound 'hin zu dir'."
            },
            {
              "id": "a2_s4_c48_l2",
              "original": "du Gott der Gnad' und Huld!",
              "literal": "thou God of grace and mercy!",
              "tokens": [
                {
                  "word": "Gott",
                  "lemma": "Gott",
                  "pos": "noun",
                  "meaning": "God"
                },
                {
                  "word": "Gnad'",
                  "lemma": "Gnade",
                  "pos": "noun",
                  "meaning": "grace"
                },
                {
                  "word": "Huld",
                  "lemma": "Huld",
                  "pos": "noun",
                  "meaning": "mercy / favor"
                }
              ],
              "grammarNote": "Vocative apostrophe with apocopated genitive 'Gnad'' ('Gnade')."
            },
            {
              "id": "a2_s4_c48_l3",
              "original": "Ihm, der so tief gefallen,",
              "literal": "To him who has fallen so low,",
              "tokens": [
                {
                  "word": "Ihm",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "to him (dative)"
                },
                {
                  "word": "tief",
                  "lemma": "tief",
                  "pos": "adverb",
                  "meaning": "deep / low"
                },
                {
                  "word": "gefallen",
                  "lemma": "fallen",
                  "pos": "verb",
                  "meaning": "fallen (past participle)"
                }
              ],
              "grammarNote": "Fronted dative pronoun 'Ihm' with relative clause omitting auxiliary 'ist' ('gefallen [ist]')."
            },
            {
              "id": "a2_s4_c48_l4",
              "original": "vergib der Sünden Schuld!",
              "literal": "forgive the guilt of his sins!",
              "tokens": [
                {
                  "word": "vergib",
                  "lemma": "vergeben",
                  "pos": "verb",
                  "meaning": "forgive (imperative)"
                },
                {
                  "word": "Sünden",
                  "lemma": "Sünde",
                  "pos": "noun",
                  "meaning": "sins (genitive pl.)"
                },
                {
                  "word": "Schuld",
                  "lemma": "Schuld",
                  "pos": "noun",
                  "meaning": "guilt / debt"
                }
              ],
              "grammarNote": "Imperative 'vergib' governing dative 'Ihm' (line 124) and accusative object 'Schuld' with genitive 'der Sünden'."
            },
            {
              "id": "a2_s4_c48_l5",
              "original": "Für ihn nur will ich flehen,",
              "literal": "For him alone will I plead,",
              "tokens": [
                {
                  "word": "Für",
                  "lemma": "für",
                  "pos": "preposition",
                  "meaning": "for"
                },
                {
                  "word": "ihn",
                  "lemma": "er",
                  "pos": "pronoun",
                  "meaning": "him (acc.)"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only / alone"
                },
                {
                  "word": "flehen",
                  "lemma": "flehen",
                  "pos": "verb",
                  "meaning": "plead / pray"
                }
              ],
              "grammarNote": "Fronted prepositional phrase 'Für ihn nur' with modal verb 'will'."
            },
            {
              "id": "a2_s4_c48_l6",
              "original": "mein Leben sei Gebet!",
              "literal": "may my life be prayer!",
              "tokens": [
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be / may be (subjunctive I / optative)"
                },
                {
                  "word": "Gebet",
                  "lemma": "Gebet",
                  "pos": "noun",
                  "meaning": "prayer"
                }
              ],
              "grammarNote": "Optative subjunctive I 'sei' equating 'mein Leben' with 'Gebet'."
            },
            {
              "id": "a2_s4_c48_l7",
              "original": "Lass ihn dein Leuchten sehen,",
              "literal": "Let him see thy radiance,",
              "tokens": [
                {
                  "word": "Lass",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let (imperative)"
                },
                {
                  "word": "Leuchten",
                  "lemma": "Leuchten",
                  "pos": "noun",
                  "meaning": "radiance / shining / light (nominalized inf.)"
                },
                {
                  "word": "sehen",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "see / behold"
                }
              ],
              "grammarNote": "Imperative 'Lass' with accusative object 'ihn' and dependent infinitive 'sehen'."
            },
            {
              "id": "a2_s4_c48_l8",
              "original": "eh' er in Nacht vergeht!",
              "literal": "before he perishes into night!",
              "tokens": [
                {
                  "word": "eh'",
                  "lemma": "ehe",
                  "pos": "conjunction",
                  "meaning": "before / ere"
                },
                {
                  "word": "Nacht",
                  "lemma": "Nacht",
                  "pos": "noun",
                  "meaning": "night"
                },
                {
                  "word": "vergeht",
                  "lemma": "vergehen",
                  "pos": "verb",
                  "meaning": "perishes / vanishes / fades away"
                }
              ],
              "grammarNote": "Temporal clause introduced by syncopated conjunction 'eh'' ('ehe')."
            },
            {
              "id": "a2_s4_c48_l9",
              "original": "Mit freudigem Erbeben",
              "literal": "With joyful trembling",
              "tokens": [
                {
                  "word": "freudigem",
                  "lemma": "freudig",
                  "pos": "adjective",
                  "meaning": "joyful / glad"
                },
                {
                  "word": "Erbeben",
                  "lemma": "Erbeben",
                  "pos": "noun",
                  "meaning": "trembling / shudder (nominalized inf.)"
                }
              ],
              "grammarNote": "Modal prepositional phrase with dative neuter adjective in '-em'."
            },
            {
              "id": "a2_s4_c48_l10",
              "original": "lass' dir ein Opfer weihn;",
              "literal": "let a sacrifice be dedicated to thee;",
              "tokens": [
                {
                  "word": "lass'",
                  "lemma": "lassen",
                  "pos": "verb",
                  "meaning": "let (imperative)"
                },
                {
                  "word": "dir",
                  "lemma": "du",
                  "pos": "pronoun",
                  "meaning": "to thee (dative)"
                },
                {
                  "word": "Opfer",
                  "lemma": "Opfer",
                  "pos": "noun",
                  "meaning": "sacrifice / offering"
                },
                {
                  "word": "weihn",
                  "lemma": "weihen",
                  "pos": "verb",
                  "meaning": "consecrate / dedicate"
                }
              ],
              "grammarNote": "Apocope in 'lass'' and syncopated infinitive 'weihn' ('weihen')."
            },
            {
              "id": "a2_s4_c48_l11",
              "original": "nimm hin, o! nimm mein Leben!",
              "literal": "take away, oh! take my life!",
              "tokens": [
                {
                  "word": "nimm hin",
                  "lemma": "hinnehmen",
                  "pos": "verb",
                  "meaning": "take away / receive / accept (imperative)"
                },
                {
                  "word": "nimm",
                  "lemma": "nehmen",
                  "pos": "verb",
                  "meaning": "take (imperative)"
                },
                {
                  "word": "Leben",
                  "lemma": "Leben",
                  "pos": "noun",
                  "meaning": "life"
                }
              ],
              "grammarNote": "Imperative 'nimm hin' (from 'hinnehmen') with interjection 'o!'."
            },
            {
              "id": "a2_s4_c48_l12",
              "original": "Ich nenn es nicht mehr mein!",
              "literal": "I call it no longer mine!",
              "tokens": [
                {
                  "word": "nenn",
                  "lemma": "nennen",
                  "pos": "verb",
                  "meaning": "call / name"
                },
                {
                  "word": "nicht mehr",
                  "lemma": "nicht mehr",
                  "pos": "adverb",
                  "meaning": "no longer / no more"
                },
                {
                  "word": "mein",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "mine (possessive pronoun predicate)"
                }
              ],
              "grammarNote": "Apocope in 'nenn' ('nenne') with predicate possessive 'mein'."
            }
          ]
        },
        {
          "id": "a2_s4_c49",
          "speaker": "Tannhäuser",
          "lines": [
            {
              "id": "a2_s4_c49_l1",
              "original": "Wie soll ich Gnade finden?",
              "literal": "How shall I find grace?",
              "tokens": [
                {
                  "word": "Wie",
                  "lemma": "wie",
                  "pos": "adverb",
                  "meaning": "how"
                },
                {
                  "word": "soll",
                  "lemma": "sollen",
                  "pos": "verb",
                  "meaning": "shall / should"
                },
                {
                  "word": "Gnade",
                  "lemma": "Gnade",
                  "pos": "noun",
                  "meaning": "grace / mercy"
                },
                {
                  "word": "finden",
                  "lemma": "finden",
                  "pos": "verb",
                  "meaning": "find"
                }
              ],
              "grammarNote": "Deliberative question with modal verb 'soll'."
            },
            {
              "id": "a2_s4_c49_l2",
              "original": "Wie büssen meine Schuld?",
              "literal": "How atone for my guilt?",
              "tokens": [
                {
                  "word": "büssen",
                  "lemma": "büssen",
                  "pos": "verb",
                  "meaning": "atone for / expiate"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my"
                },
                {
                  "word": "Schuld",
                  "lemma": "Schuld",
                  "pos": "noun",
                  "meaning": "guilt"
                }
              ],
              "grammarNote": "Elliptical question omitting modal 'soll ich' from previous line."
            },
            {
              "id": "a2_s4_c49_l3",
              "original": "Mein Heil sah ich entschwinden,",
              "literal": "My salvation I saw vanish,",
              "tokens": [
                {
                  "word": "Heil",
                  "lemma": "Heil",
                  "pos": "noun",
                  "meaning": "salvation"
                },
                {
                  "word": "sah",
                  "lemma": "sehen",
                  "pos": "verb",
                  "meaning": "saw"
                },
                {
                  "word": "entschwinden",
                  "lemma": "entschwinden",
                  "pos": "verb",
                  "meaning": "vanish / disappear"
                }
              ],
              "grammarNote": "Accusative and infinitive construction: 'sah ich [mein Heil] entschwinden'."
            },
            {
              "id": "a2_s4_c49_l4",
              "original": "mich flieht des Himmels Huld!",
              "literal": "heaven's favor flees from me!",
              "tokens": [
                {
                  "word": "mich",
                  "lemma": "ich",
                  "pos": "pronoun",
                  "meaning": "me (acc.)"
                },
                {
                  "word": "flieht",
                  "lemma": "fliehen",
                  "pos": "verb",
                  "meaning": "flees / shuns"
                },
                {
                  "word": "Himmels",
                  "lemma": "Himmel",
                  "pos": "noun",
                  "meaning": "heaven (genitive)"
                },
                {
                  "word": "Huld",
                  "lemma": "Huld",
                  "pos": "noun",
                  "meaning": "favor / grace"
                }
              ],
              "grammarNote": "Fronted accusative object 'mich' with transitive use of 'fliehen' ('jemanden fliehen')."
            },
            {
              "id": "a2_s4_c49_l5",
              "original": "Doch will ich büssend wallen,",
              "literal": "Yet will I wander on pilgrimage doing penance,",
              "tokens": [
                {
                  "word": "Doch",
                  "lemma": "doch",
                  "pos": "conjunction",
                  "meaning": "yet / but"
                },
                {
                  "word": "will",
                  "lemma": "wollen",
                  "pos": "verb",
                  "meaning": "will / want to"
                },
                {
                  "word": "büssend",
                  "lemma": "büssen",
                  "pos": "adverb",
                  "meaning": "penitently / doing penance"
                },
                {
                  "word": "wallen",
                  "lemma": "wallen",
                  "pos": "verb",
                  "meaning": "pilgrimage / wander"
                }
              ],
              "grammarNote": "Present participle 'büssend' functioning adverbially with modal verb 'will'."
            },
            {
              "id": "a2_s4_c49_l6",
              "original": "zerschlagen meine Brust,",
              "literal": "beat my breast,",
              "tokens": [
                {
                  "word": "zerschlagen",
                  "lemma": "zerschlagen",
                  "pos": "verb",
                  "meaning": "beat / strike / bruise"
                },
                {
                  "word": "meine",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my"
                },
                {
                  "word": "Brust",
                  "lemma": "Brust",
                  "pos": "noun",
                  "meaning": "breast / chest"
                }
              ],
              "grammarNote": "Infinitive dependent on 'will' from line 138, expressing traditional penitential self-mortification."
            },
            {
              "id": "a2_s4_c49_l7",
              "original": "im Staube niederfallen;",
              "literal": "fall down in the dust;",
              "tokens": [
                {
                  "word": "Staube",
                  "lemma": "Staub",
                  "pos": "noun",
                  "meaning": "dust"
                },
                {
                  "word": "niederfallen",
                  "lemma": "niederfallen",
                  "pos": "verb",
                  "meaning": "fall down / prostrate oneself"
                }
              ],
              "grammarNote": "Infinitive with dative ending '-e' in 'Staube'."
            },
            {
              "id": "a2_s4_c49_l8",
              "original": "Zerknirschung sei mir Lust!",
              "literal": "Contrition be my joy!",
              "tokens": [
                {
                  "word": "Zerknirschung",
                  "lemma": "Zerknirschung",
                  "pos": "noun",
                  "meaning": "contrition / compunction"
                },
                {
                  "word": "sei",
                  "lemma": "sein",
                  "pos": "verb",
                  "meaning": "be (subjunctive I / optative)"
                },
                {
                  "word": "Lust",
                  "lemma": "Lust",
                  "pos": "noun",
                  "meaning": "joy / delight / pleasure"
                }
              ],
              "grammarNote": "Optative subjunctive I with dative of interest 'mir'."
            },
            {
              "id": "a2_s4_c49_l9",
              "original": "O, dass nur er versöhnet,",
              "literal": "Oh, that he only be reconciled,",
              "tokens": [
                {
                  "word": "O",
                  "lemma": "o",
                  "pos": "interjection",
                  "meaning": "oh / o"
                },
                {
                  "word": "dass",
                  "lemma": "dass",
                  "pos": "conjunction",
                  "meaning": "that"
                },
                {
                  "word": "nur",
                  "lemma": "nur",
                  "pos": "adverb",
                  "meaning": "only"
                },
                {
                  "word": "versöhnet",
                  "lemma": "versöhnen",
                  "pos": "verb",
                  "meaning": "reconciled / appeased"
                }
              ],
              "grammarNote": "Optative clause introduced by 'O, dass...' with passive/stative participle 'versöhnet [werde/sei]'."
            },
            {
              "id": "a2_s4_c49_l10",
              "original": "der Engel meiner Not,",
              "literal": "the angel of my distress,",
              "tokens": [
                {
                  "word": "Engel",
                  "lemma": "Engel",
                  "pos": "noun",
                  "meaning": "angel"
                },
                {
                  "word": "meiner",
                  "lemma": "mein",
                  "pos": "pronoun",
                  "meaning": "my"
                },
                {
                  "word": "Not",
                  "lemma": "Not",
                  "pos": "noun",
                  "meaning": "distress / plight / agony"
                }
              ],
              "grammarNote": "Apposition to the subject pronoun 'er' (referring to 'der Engel', i.e. Elisabeth)."
            },
            {
              "id": "a2_s4_c49_l11",
              "original": "der sich, so frech verhöhnet,",
              "literal": "who, so insolently mocked,",
              "tokens": [
                {
                  "word": "der",
                  "lemma": "der",
                  "pos": "pronoun",
                  "meaning": "who (relative pronoun masc.)"
                },
                {
                  "word": "frech",
                  "lemma": "frech",
                  "pos": "adverb",
                  "meaning": "insolently / brazenly"
                },
                {
                  "word": "verhöhnet",
                  "lemma": "verhöhnen",
                  "pos": "verb",
                  "meaning": "mocked / derided"
                }
              ],
              "grammarNote": "Reflexive pronoun 'sich' belonging to 'bot' in line 145, separated by parenthetical participial phrase 'so frech verhöhnet'."
            },
            {
              "id": "a2_s4_c49_l12",
              "original": "zum Opfer doch mir bot!",
              "literal": "yet offered himself as a sacrifice to me!",
              "tokens": [
                {
                  "word": "Opfer",
                  "lemma": "Opfer",
                  "pos": "noun",
                  "meaning": "sacrifice / offering"
                },
                {
                  "word": "doch",
                  "lemma": "doch",
                  "pos": "particle",
                  "meaning": "yet / nonetheless"
                },
                {
                  "word": "bot",
                  "lemma": "bieten",
                  "pos": "verb",
                  "meaning": "offered"
                }
              ],
              "grammarNote": "Reflexive idiom 'sich bieten zu' ('sich zum Opfer bieten' = to offer oneself as a sacrifice) with dative 'mir'."
            }
          ]
        },
        {
          "id": "a2_s4_c50",
          "speaker": "Younger Pilgrims",
          "stageDirection": "im Hintergrunde, tief, wie aus dem Tale heraufschallend",
          "stageDirectionTranslation": "in the background, low, echoing up as if from the valley",
          "lines": [
            {
              "id": "a2_s4_c50_l1",
              "original": "Am hohen Fest der Gnad' und Huld,",
              "literal": "At the high feast of grace and mercy,",
              "tokens": [
                {
                  "word": "hohen",
                  "lemma": "hoch",
                  "pos": "adjective",
                  "meaning": "high / solemn"
                },
                {
                  "word": "Fest",
                  "lemma": "Fest",
                  "pos": "noun",
                  "meaning": "feast / festival"
                },
                {
                  "word": "Gnad'",
                  "lemma": "Gnade",
                  "pos": "noun",
                  "meaning": "grace"
                },
                {
                  "word": "Huld",
                  "lemma": "Huld",
                  "pos": "noun",
                  "meaning": "mercy / favor"
                }
              ],
              "grammarNote": "Prepositional temporal phrase 'Am hohen Fest' with coordinated genitives 'der Gnad' und Huld'."
            },
            {
              "id": "a2_s4_c50_l2",
              "original": "in Demut sühn ich meine Schuld.",
              "literal": "in humility I atone for my guilt.",
              "tokens": [
                {
                  "word": "Demut",
                  "lemma": "Demut",
                  "pos": "noun",
                  "meaning": "humility / meekness"
                },
                {
                  "word": "sühn",
                  "lemma": "sühnen",
                  "pos": "verb",
                  "meaning": "atone for / expiate"
                },
                {
                  "word": "Schuld",
                  "lemma": "Schuld",
                  "pos": "noun",
                  "meaning": "guilt / sin"
                }
              ],
              "grammarNote": "Apocope in 'sühn' ('sühne') with fronted prepositional manner phrase 'in Demut'."
            },
            {
              "id": "a2_s4_c50_l3",
              "original": "Gesegnet, wer im Glauben treu!",
              "literal": "Blessed is he who is faithful in faith!",
              "tokens": [
                {
                  "word": "Gesegnet",
                  "lemma": "segnen",
                  "pos": "verb",
                  "meaning": "blessed",
                  "notes": "Past participle (Partizip II) in verbal predicate."
                },
                {
                  "word": "wer",
                  "lemma": "wer",
                  "pos": "pronoun",
                  "meaning": "who / he who"
                },
                {
                  "word": "Glauben",
                  "lemma": "Glaube",
                  "pos": "noun",
                  "meaning": "faith"
                },
                {
                  "word": "treu",
                  "lemma": "treu",
                  "pos": "adjective",
                  "meaning": "true / faithful"
                }
              ],
              "grammarNote": "Elliptical beatitude formula with copula omission: 'Gesegnet [ist], wer im Glauben treu [ist]'."
            },
            {
              "id": "a2_s4_c50_l4",
              "original": "Er wird erlöst durch Büss' und Reu'.",
              "literal": "He will be redeemed through penance and remorse.",
              "tokens": [
                {
                  "word": "wird erlöst",
                  "lemma": "erlösen",
                  "pos": "verb",
                  "meaning": "is redeemed / will be redeemed (passive)"
                },
                {
                  "word": "durch",
                  "lemma": "durch",
                  "pos": "preposition",
                  "meaning": "through / by"
                },
                {
                  "word": "Büss'",
                  "lemma": "Busse",
                  "pos": "noun",
                  "meaning": "penance"
                },
                {
                  "word": "Reu'",
                  "lemma": "Reue",
                  "pos": "noun",
                  "meaning": "remorse / repentance"
                }
              ],
              "grammarNote": "Future/present passive 'wird erlöst' with rhyming apocopated feminine nouns 'Büss'' and 'Reu''."
            }
          ]
        },
        {
          "id": "a2_s4_c51",
          "speaker": "Younger Pilgrims",
          "stageDirection": "Alle haben unwillkürlich ihre Gebärden gemässigt; Elisabeth, wie um Tannhäuser nochmals zu schützen, hatte sich den von neuem Andringenden entgegengestellt; sie verwiest jetzt auf den verheissungsvollen Gesang der jungen Pilger. - Tannhäuser hält plötzlich in den Bewegungen der leidenschaftlichsten Zerknirschung ein und lauscht dem Gesange",
          "stageDirectionTranslation": "All have involuntarily moderated their gestures; Elisabeth, as if to protect Tannhäuser once more, had placed herself in front of those pressing forward anew; she now points to the promise-filled song of the young pilgrims.—Tannhäuser suddenly pauses in the midst of the most passionate contrition and listens to the song.",
          "lines": []
        },
        {
          "id": "a2_s4_c52",
          "speaker": "Tannhäuser",
          "stageDirection": "Ein jäher Hoffnungsstrahl leuchtet ihm, er stürzt sich mit krampfhafter Heftigkeit zu Elisabeth Füssen küsst inbrünstig hastig den Saum ihrer Gewandes und bricht dann, von ungeheurer Erregung taumelnd, auf mit dem Rufe:",
          "stageDirectionTranslation": "A sudden ray of hope shines upon him; he throws himself with convulsive vehemence at Elisabeth's feet, fervently and hurriedly kisses the hem of her robe, and then breaks out, reeling with immense agitation, with the cry:",
          "lines": [
            {
              "id": "a2_s4_c52_l1",
              "original": "Nach Rom!",
              "literal": "To Rome!",
              "tokens": [
                {
                  "word": "Nach",
                  "lemma": "nach",
                  "pos": "preposition",
                  "meaning": "to / toward"
                },
                {
                  "word": "Rom",
                  "lemma": "Rom",
                  "pos": "noun",
                  "meaning": "Rome"
                }
              ],
              "grammarNote": "Directional prepositional exclamation signifying Tannhäuser's sudden resolution and departure."
            }
          ]
        },
        {
          "id": "a2_s4_c53",
          "speaker": "All",
          "stageDirection": "rufen ihm nach:",
          "stageDirectionTranslation": "call after him:",
          "lines": [
            {
              "id": "a2_s4_c53_l1",
              "original": "Nach Rom!",
              "literal": "To Rome!",
              "tokens": [
                {
                  "word": "Nach",
                  "lemma": "nach",
                  "pos": "preposition",
                  "meaning": "to / toward"
                },
                {
                  "word": "Rom",
                  "lemma": "Rom",
                  "pos": "noun",
                  "meaning": "Rome"
                }
              ],
              "grammarNote": "Directional prepositional exclamation signifying Tannhäuser's sudden resolution and departure."
            }
          ]
        },
        {
          "id": "a2_s4_c54",
          "speaker": "All",
          "stageDirection": "Der Vorhang fällt",
          "stageDirectionTranslation": "The curtain falls.",
          "lines": []
        }
      ]
    }
  ]
};

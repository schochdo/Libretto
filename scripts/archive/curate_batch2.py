import json

# Curate Batch 2: Act 1 Scenes 6 and 7 spoken dialogue

batch2_curated = [
  {
    "section": "a1_s6_pre",
    "act": 1,
    "scene": 6,
    "position": "pre",
    "cues": [
      {
        "id": "a1_s6_pre_c1",
        "speaker": "Third Slave",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s6_pre_c1_l1",
            "original": "Ha, ha, ha!",
            "literal": "Ha, ha, ha!",
            "tokens": [
              { "word": "Ha", "lemma": "ha", "pos": "interjection", "meaning": "ha (laughter)" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c2",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c2_l1",
            "original": "Pst, Pst!",
            "literal": "Psst, psst!",
            "tokens": [
              { "word": "Pst", "lemma": "pst", "pos": "interjection", "meaning": "psst / hush" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c3",
        "speaker": "Second Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c3_l1",
            "original": "Was lachst du?",
            "literal": "What laugh you [at]?",
            "tokens": [
              { "word": "lachst", "lemma": "lachen", "pos": "verb", "meaning": "laugh" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c4",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c4_l1",
            "original": "Daß unser Peiniger, der alles belauschende Mohr, heute gefoppt, oder gar geprügelt wird.",
            "literal": "That our tormentor, the everything-eavesdropping Moor, today duped, or even beaten will be.",
            "tokens": [
              { "word": "Peiniger", "lemma": "Peiniger", "pos": "noun", "meaning": "tormentor / oppressor" },
              { "word": "belauschende", "lemma": "belauschend", "pos": "adjective", "meaning": "eavesdropping / spying" },
              { "word": "Mohr", "lemma": "Mohr", "pos": "noun", "meaning": "Moor (historical 18th-century term for dark-skinned North African)" },
              { "word": "gefoppt", "lemma": "foppen", "pos": "verb", "meaning": "duped / fooled" },
              { "word": "geprügelt", "lemma": "prügeln", "pos": "verb", "meaning": "beaten / thrashed" }
            ],
            "grammarNote": "Historical context: In Schikaneder's 1791 libretto, Monostatos is identified as a Moor and overseer of Sarastro's slaves. The slaves resent his cruelty."
          }
        ]
      },
      {
        "id": "a1_s6_pre_c5",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c5_l1",
            "original": "Wie so?",
            "literal": "How so?",
            "tokens": [
              { "word": "Wie so", "lemma": "wieso", "pos": "adverb", "meaning": "how so / why" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c6",
        "speaker": "Second Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c6_l1",
            "original": "Pamina – –",
            "literal": "Pamina – –",
            "tokens": [
              { "word": "Pamina", "lemma": "Pamina", "pos": "noun", "meaning": "Pamina" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c7",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c7_l1",
            "original": "Nun? Pamina? –",
            "literal": "Well? Pamina? –",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "well / now" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c8",
        "speaker": "Second Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c8_l1",
            "original": "Das kühne, trotzige Mädchen ist entsprungen.",
            "literal": "The bold, defiant maiden has escaped.",
            "tokens": [
              { "word": "kühne", "lemma": "kühn", "pos": "adjective", "meaning": "bold / daring" },
              { "word": "trotzige", "lemma": "trotzig", "pos": "adjective", "meaning": "defiant / stubborn" },
              { "word": "entsprungen", "lemma": "entspringen", "pos": "verb", "meaning": "escaped / fled" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c9",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c9_l1",
            "original": "Und sie entkam?",
            "literal": "And she escaped?",
            "tokens": [
              { "word": "entkam", "lemma": "entkommen", "pos": "verb", "meaning": "escaped" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c10",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c10_l1",
            "original": "Unfehlbar! – Wenigstens ist's mein wahrer Wunsch.",
            "literal": "Infallibly! – At least is it my true wish.",
            "tokens": [
              { "word": "Unfehlbar", "lemma": "unfehlbar", "pos": "adverb", "meaning": "infallibly / without fail" },
              { "word": "wahrer Wunsch", "lemma": "Wunsch", "pos": "noun", "meaning": "true wish / desire" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c11",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c11_l1",
            "original": "O Dank euch ihr guten Götter! ihr habt meine Bitte erhört.",
            "literal": "O thanks to you you good gods! You have my plea heard.",
            "tokens": [
              { "word": "Dank", "lemma": "Dank", "pos": "noun", "meaning": "thanks / gratitude" },
              { "word": "Götter", "lemma": "Gott", "pos": "noun", "meaning": "gods" },
              { "word": "Bitte", "lemma": "Bitte", "pos": "noun", "meaning": "plea / prayer" },
              { "word": "erhört", "lemma": "erhören", "pos": "verb", "meaning": "hearkened to / granted" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c12",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c12_l1",
            "original": "Sagt ich euch nicht immer, es wird doch ein Tag für uns scheinen, wo wir gerochen, und der schwarze Monostatos bestraft werden wird.",
            "literal": "Said I to you not always, there will after all a day for us shine, where we avenged, and the black Monostatos punished be will.",
            "tokens": [
              { "word": "scheinen", "lemma": "scheinen", "pos": "verb", "meaning": "shine / dawn" },
              { "word": "gerochen", "lemma": "rächen", "pos": "verb", "meaning": "avenged", "notes": "Archaic strong past participle of rächen (modern: gerächt)." },
              { "word": "bestraft", "lemma": "bestrafen", "pos": "verb", "meaning": "punished" }
            ],
            "grammarNote": "Archaic strong participle 'gerochen' from 'rächen' (avenged), now standardly 'gerächt'."
          }
        ]
      },
      {
        "id": "a1_s6_pre_c13",
        "speaker": "Second Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c13_l1",
            "original": "Was spricht nun der Mohr zu der Geschichte?",
            "literal": "What says now the Moor to the story?",
            "tokens": [
              { "word": "spricht", "lemma": "sprechen", "pos": "verb", "meaning": "says / speaks" },
              { "word": "Geschichte", "lemma": "Geschichte", "pos": "noun", "meaning": "affair / story / happening" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c14",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c14_l1",
            "original": "Er weiß doch davon?",
            "literal": "He knows surely of it?",
            "tokens": [
              { "word": "weiß", "lemma": "wissen", "pos": "verb", "meaning": "knows" },
              { "word": "davon", "lemma": "davon", "pos": "adverb", "meaning": "of it / about it" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c15",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c15_l1",
            "original": "Natürlich! Sie entlief vor seinen Augen. – Wie mir einige Brüder erzählten, die im Garten arbeiteten, und von weitem sahen und hörten, so ist der Mohr nicht mehr zu retten; auch wenn Pamina von Sarastros Gefolge wieder eingebracht würde.",
            "literal": "Naturally! She escaped before his eyes. – As to me some brothers recounted, who in the garden worked, and from afar saw and heard, so is the Moor no more to be saved; even if Pamina by Sarastro's entourage again brought in were.",
            "tokens": [
              { "word": "entlief", "lemma": "entlaufen", "pos": "verb", "meaning": "ran away / escaped" },
              { "word": "Brüder", "lemma": "Bruder", "pos": "noun", "meaning": "brothers (fellow slaves)" },
              { "word": "Gefolge", "lemma": "Gefolge", "pos": "noun", "meaning": "retinue / entourage" },
              { "word": "eingebracht", "lemma": "einbringen", "pos": "verb", "meaning": "brought back / recaptured" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c16",
        "speaker": "First & Second Slaves",
        "lines": [
          {
            "id": "a1_s6_pre_c16_l1",
            "original": "Wie so?",
            "literal": "How so?",
            "tokens": [
              { "word": "Wie so", "lemma": "wieso", "pos": "adverb", "meaning": "how so" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c17",
        "speaker": "Third Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c17_l1",
            "original": "Du kennst ja den üppigen Wanst und seine Weise; das Mädchen aber war klüger als ich dachte. – In dem Augenblicke, da er zu siegen glaubte, rief sie Sarastros Namen: das erschütterte den Mohren; er blieb stumm und unbeweglich stehen – indeß lief Pamina nach dem Kanal, und schiffte von selbst in einer Gondel dem Palmwäldchen zu.",
            "literal": "You know indeed the lustful belly and his ways; the maiden however was cleverer than I thought. – In the moment, when he to conquer believed, called she Sarastro's name: that shattered the Moor; he remained dumb and motionless standing – meanwhile ran Pamina toward the canal, and sailed by herself in a gondola toward the palm grove.",
            "tokens": [
              { "word": "Wanst", "lemma": "Wanst", "pos": "noun", "meaning": "paunch / belly / glutton", "notes": "Derogatory Viennese theatrical term for an unappealing person." },
              { "word": "klüger", "lemma": "klug", "pos": "adjective", "meaning": "cleverer / wiser" },
              { "word": "siegen", "lemma": "siegen", "pos": "verb", "meaning": "triumph / prevail" },
              { "word": "erschütterte", "lemma": "erschüttern", "pos": "verb", "meaning": "shook / unnerved" },
              { "word": "Gondel", "lemma": "Gondel", "pos": "noun", "meaning": "gondola / small boat" },
              { "word": "Palmwäldchen", "lemma": "Palmwäldchen", "pos": "noun", "meaning": "palm grove" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c18",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c18_l1",
            "original": "O wie wird das schüchterne Reh mit Todesangst dem Pallaste ihrer zärtlichen Mutter zueilen.",
            "literal": "O how will the timid roe with mortal fear toward the palace of her tender mother hasten.",
            "tokens": [
              { "word": "schüchterne Reh", "lemma": "Reh", "pos": "noun", "meaning": "timid roe / deer (metaphor for Pamina)" },
              { "word": "Todesangst", "lemma": "Todesangst", "pos": "noun", "meaning": "mortal terror / fear of death" },
              { "word": "zueilen", "lemma": "zueilen", "pos": "verb", "meaning": "hasten toward", "notes": "Takes dative 'dem Pallaste'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c19",
        "speaker": "Monostatos",
        "stageDirection": "von innen",
        "stageDirectionTranslation": "from within",
        "lines": [
          {
            "id": "a1_s6_pre_c19_l1",
            "original": "He Sclaven!",
            "literal": "Hey slaves!",
            "tokens": [
              { "word": "Sclaven", "lemma": "Sklave", "pos": "noun", "meaning": "slaves", "notes": "Archaic spelling with 'c'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c20",
        "speaker": "First Slave",
        "lines": [
          {
            "id": "a1_s6_pre_c20_l1",
            "original": "Monostatos Stimme!",
            "literal": "Monostatos's voice!",
            "tokens": [
              { "word": "Stimme", "lemma": "Stimme", "pos": "noun", "meaning": "voice" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c21",
        "speaker": "Monostatos",
        "stageDirection": "von innen",
        "stageDirectionTranslation": "from within",
        "lines": [
          {
            "id": "a1_s6_pre_c21_l1",
            "original": "He Sclaven! Schaft Fesseln herbey. –",
            "literal": "Hey slaves! Procure fetters hither. –",
            "tokens": [
              { "word": "Schaft", "lemma": "schaffen", "pos": "verb", "meaning": "procure / fetch", "notes": "Imperative plural." },
              { "word": "Fesseln", "lemma": "Fessel", "pos": "noun", "meaning": "fetters / chains" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c22",
        "speaker": "Three Slaves",
        "lines": [
          {
            "id": "a1_s6_pre_c22_l1",
            "original": "Fesseln?",
            "literal": "Fetters?",
            "tokens": [
              { "word": "Fesseln", "lemma": "Fessel", "pos": "noun", "meaning": "fetters" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c23",
        "speaker": "First Slave",
        "stageDirection": "läuft zur Seitenthüre",
        "stageDirectionTranslation": "runs to the side door",
        "lines": [
          {
            "id": "a1_s6_pre_c23_l1",
            "original": "Doch nicht für Pamina? O ihr Götter! da seht Brüder, das Mädchen ist gefangen.",
            "literal": "Surely not for Pamina? O you gods! There look brothers, the maiden is captured.",
            "tokens": [
              { "word": "gefangen", "lemma": "fangen", "pos": "verb", "meaning": "captured / caught" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c24",
        "speaker": "Second & Third Slaves",
        "lines": [
          {
            "id": "a1_s6_pre_c24_l1",
            "original": "Pamina? – Schrecklicher Anblick!",
            "literal": "Pamina? – Terrible sight!",
            "tokens": [
              { "word": "Schrecklicher Anblick", "lemma": "Anblick", "pos": "noun", "meaning": "terrible sight / horror" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c25",
        "speaker": "First Slave",
        "stageDirection": "geht auf die andere Seite ab",
        "stageDirectionTranslation": "exits to the other side",
        "lines": [
          {
            "id": "a1_s6_pre_c25_l1",
            "original": "Seht, wie der unbarmherzige Teufel sie bey ihren zarten Händchen faßt. – Das halt ich nicht aus.",
            "literal": "Look, how the merciless devil her by her tender hands seizes. – That endure I not.",
            "tokens": [
              { "word": "unbarmherzige", "lemma": "unbarmherzig", "pos": "adjective", "meaning": "merciless / uncompassionate" },
              { "word": "Händchen", "lemma": "Händchen", "pos": "noun", "meaning": "little hands / tender hands", "notes": "Diminutive neuter noun." },
              { "word": "aushalten", "lemma": "aushalten", "pos": "verb", "meaning": "bear / endure" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c26",
        "speaker": "Second Slave",
        "stageDirection": "auch dort ab",
        "stageDirectionTranslation": "also exits there",
        "lines": [
          {
            "id": "a1_s6_pre_c26_l1",
            "original": "Ich noch weniger.",
            "literal": "I still less.",
            "tokens": [
              { "word": "weniger", "lemma": "wenig", "pos": "adverb", "meaning": "less" }
            ]
          }
        ]
      },
      {
        "id": "a1_s6_pre_c27",
        "speaker": "Third Slave",
        "stageDirection": "geht ab",
        "stageDirectionTranslation": "exits",
        "lines": [
          {
            "id": "a1_s6_pre_c27_l1",
            "original": "So was sehen zu müssen, ist Höllenmarter.",
            "literal": "Such a thing see to have to, is hellish torment.",
            "tokens": [
              { "word": "Höllenmarter", "lemma": "Höllenmarter", "pos": "noun", "meaning": "hellish torment / torture of hell" }
            ],
            "grammarNote": "The slaves flee in distress as Monostatos drags Pamina in chains into the apartment, beginning the Terzetto 'Du feines Täubchen, nur herein' (Scene 6)."
          }
        ]
      }
    ]
  },
  {
    "section": "a1_s7_pre",
    "act": 1,
    "scene": 7,
    "position": "pre",
    "cues": [
      {
        "id": "a1_s7_pre_c1",
        "speaker": "Papageno",
        "stageDirection": "von außen am Fenster, geht dann herein",
        "stageDirectionTranslation": "outside at the window, then steps inside",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s7_pre_c1_l1",
            "original": "Wo bin ich wohl? wo mag ich seyn? Aha! da sind ja Leute; gewagt! ich geh herein.",
            "literal": "Where am I indeed? Where may I be? Aha! There are indeed people; ventured! I go inside.",
            "tokens": [
              { "word": "Leute", "lemma": "Leute", "pos": "noun", "meaning": "people" },
              { "word": "gewagt", "lemma": "wagen", "pos": "adjective", "meaning": "ventured / risk taken" },
              { "word": "hereingehen", "lemma": "hereingehen", "pos": "verb", "meaning": "go inside / enter" }
            ]
          },
          {
            "id": "a1_s7_pre_c1_l2",
            "original": "Schön Mädchen, jung und fein, viel weißer noch als Kreide.",
            "literal": "Fair maiden, young and fine, much whiter yet than chalk.",
            "tokens": [
              { "word": "Mädchen", "lemma": "Mädchen", "pos": "noun", "meaning": "maiden / girl" },
              { "word": "fein", "lemma": "fein", "pos": "adjective", "meaning": "delicate / fine" },
              { "word": "Kreide", "lemma": "Kreide", "pos": "noun", "meaning": "chalk" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c2",
        "speaker": "Monostatos & Papageno",
        "stageDirection": "sehen sich, erschrecken einer über den andern",
        "stageDirectionTranslation": "see each other, terrify one another",
        "lines": [
          {
            "id": "a1_s7_pre_c2_l1",
            "original": "Hu! Das – ist – der – Teufel – sicherlich! Hab Mitleid, und verschone mich! Hu! Hu! Hu!",
            "literal": "Hoo! That – is – the – devil – surely! Have pity, and spare me! Hoo! Hoo! Hoo!",
            "tokens": [
              { "word": "Hu", "lemma": "hu", "pos": "interjection", "meaning": "hoo / ooh (cry of fright)" },
              { "word": "Teufel", "lemma": "Teufel", "pos": "noun", "meaning": "devil" },
              { "word": "Mitleid", "lemma": "Mitleid", "pos": "noun", "meaning": "pity / compassion" },
              { "word": "verschone", "lemma": "verschonen", "pos": "verb", "meaning": "spare" }
            ],
            "grammarNote": "Famous comic encounter: Papageno (feathered bird-catcher) and Monostatos (the Moor) terrify each other, each believing the other is the devil, and flee in opposite directions."
          }
        ]
      },
      {
        "id": "a1_s7_pre_c3",
        "speaker": "Pamina",
        "stageDirection": "spricht wie im Traum, erholt sich, sieht sich um",
        "stageDirectionTranslation": "speaks as in a dream, recovers, looks around",
        "lines": [
          {
            "id": "a1_s7_pre_c3_l1",
            "original": "Mutter – Mutter – Mutter! – Wie? – Noch schlägt dieses Herz? – Noch nicht vernichtet? – Zu neuen Qualen erwacht? – O das ist hart, sehr hart! – Mir bitterer, als der Tod.",
            "literal": "Mother – Mother – Mother! – How? – Still beats this heart? – Still not annihilated? – To new torments awakened? – O that is hard, very hard! – To me more bitter, than death.",
            "tokens": [
              { "word": "Mutter", "lemma": "Mutter", "pos": "noun", "meaning": "mother" },
              { "word": "vernichtet", "lemma": "vernichten", "pos": "verb", "meaning": "destroyed / wiped out" },
              { "word": "Qualen", "lemma": "Qual", "pos": "noun", "meaning": "torments / agonies" },
              { "word": "bitterer", "lemma": "bitter", "pos": "adjective", "meaning": "more bitter" },
              { "word": "Tod", "lemma": "Tod", "pos": "noun", "meaning": "death" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c4",
        "speaker": "Papageno",
        "stageDirection": "tritt wieder herein",
        "stageDirectionTranslation": "steps back inside",
        "lines": [
          {
            "id": "a1_s7_pre_c4_l1",
            "original": "Bin ich nicht ein Narr, daß ich mich schrecken ließ? – Es giebt ja schwarze Vögel in der Welt, warum denn nicht auch schwarze Menschen? – Ah, sieh da! hier ist das schöne Fräulenbild noch. – Du Tochter der nächtlichen Königinn!",
            "literal": "Am I not a fool, that I myself frighten let? – There are indeed black birds in the world, why then not also black humans? – Ah, look there! Here is the fair maiden still. – You daughter of the nightly Queen!",
            "tokens": [
              { "word": "Narr", "lemma": "Narr", "pos": "noun", "meaning": "fool / jester" },
              { "word": "schwarze Vögel", "lemma": "Vogel", "pos": "noun", "meaning": "black birds" },
              { "word": "Fräulenbild", "lemma": "Fräuleinbild", "pos": "noun", "meaning": "young lady / maiden", "notes": "Archaic Viennese compound noun." }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c5",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c5_l1",
            "original": "Nächtliche Königinn? – Wer bist du?",
            "literal": "Nightly Queen? – Who are you?",
            "tokens": [
              { "word": "Wer", "lemma": "wer", "pos": "pronoun", "meaning": "who" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c6",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c6_l1",
            "original": "Ein Abgesandter der sternflammenden Königinn.",
            "literal": "An emissary of the star-flaming Queen.",
            "tokens": [
              { "word": "Abgesandter", "lemma": "Abgesandter", "pos": "noun", "meaning": "emissary / envoy" },
              { "word": "sternflammenden", "lemma": "sternflammend", "pos": "adjective", "meaning": "star-flaming" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c7",
        "speaker": "Pamina",
        "stageDirection": "freudig",
        "stageDirectionTranslation": "joyfully",
        "lines": [
          {
            "id": "a1_s7_pre_c7_l1",
            "original": "Meiner Mutter? – O Wonne! – Dein Name!",
            "literal": "My mother's? – O bliss! – Your name!",
            "tokens": [
              { "word": "Wonne", "lemma": "Wonne", "pos": "noun", "meaning": "bliss / delight" },
              { "word": "Name", "lemma": "Name", "pos": "noun", "meaning": "name" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c8",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c8_l1",
            "original": "Papageno!",
            "literal": "Papageno!",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c9",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c9_l1",
            "original": "Papageno? – Papageno – Ich erinnere mich den Nahmen oft gehört zu haben, dich selbst aber sah ich nie. –",
            "literal": "Papageno? – Papageno – I remember the name often heard to have, yourself however saw I never. –",
            "tokens": [
              { "word": "erinnere mich", "lemma": "sich erinnern", "pos": "verb", "meaning": "remember" },
              { "word": "Nahmen", "lemma": "Name", "pos": "noun", "meaning": "name", "notes": "Archaic spelling with 'h'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c10",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c10_l1",
            "original": "Ich dich eben so wenig.",
            "literal": "I you just as little.",
            "tokens": [
              { "word": "eben so wenig", "lemma": "wenig", "pos": "adverb", "meaning": "just as little" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c11",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c11_l1",
            "original": "Du kennst also meine gute, zärtliche Mutter?",
            "literal": "You know then my good, tender mother?",
            "tokens": [
              { "word": "zärtliche", "lemma": "zärtlich", "pos": "adjective", "meaning": "tender / loving" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c12",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c12_l1",
            "original": "Wenn du die Tochter der nächtlichen Königinn bist – ja!",
            "literal": "If you the daughter of the nightly Queen are – yes!",
            "tokens": [
              { "word": "Tochter", "lemma": "Tochter", "pos": "noun", "meaning": "daughter" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c13",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c13_l1",
            "original": "O ich bin es.",
            "literal": "O I am it.",
            "tokens": [
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c14",
        "speaker": "Papageno",
        "stageDirection": "sieht das Portrait an, welches er an einem Bande am Halse trägt",
        "stageDirectionTranslation": "looks at the portrait which he wears on a ribbon around his neck",
        "lines": [
          {
            "id": "a1_s7_pre_c14_l1",
            "original": "Das will ich gleich erkennen. – Die Augen schwarz – richtig, schwarz. – Die Lippen roth – richtig, roth – Blonde Haare – Blonde Haare. – Alles trifft ein, bis auf Händ und Füße.",
            "literal": "That will I right away recognize. – The eyes black – correct, black. – The lips red – correct, red – Blonde hair – blonde hair. – Everything corresponds, except for hands and feet.",
            "tokens": [
              { "word": "Augen schwarz", "lemma": "Auge", "pos": "noun", "meaning": "eyes black" },
              { "word": "Lippen roth", "lemma": "Lippe", "pos": "noun", "meaning": "lips red", "notes": "Archaic spelling with 'th'." },
              { "word": "Blonde Haare", "lemma": "Haar", "pos": "noun", "meaning": "blonde hair" },
              { "word": "trifft ein", "lemma": "eintreffen", "pos": "verb", "meaning": "agrees / matches" }
            ]
          },
          {
            "id": "a1_s7_pre_c14_l2",
            "original": "Nach dem Gemählde zu schließen, sollst du weder Hände noch Füße haben; denn hier sind auch keine angezeigt.",
            "literal": "According to the painting to conclude, shall you neither hands nor feet have; for here are also none indicated.",
            "tokens": [
              { "word": "Gemählde", "lemma": "Gemälde", "pos": "noun", "meaning": "painting / portrait", "notes": "Archaic spelling with 'h'." },
              { "word": "schließen", "lemma": "schließen", "pos": "verb", "meaning": "conclude / deduce" },
              { "word": "weder ... noch", "lemma": "weder", "pos": "conjunction", "meaning": "neither ... nor" }
            ],
            "grammarNote": "Papageno's comic literalism: since the portrait is only a bust painting, he wonders why she has hands and feet."
          }
        ]
      },
      {
        "id": "a1_s7_pre_c15",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c15_l1",
            "original": "Erlaube mir – Ja ich bin's – Wie kam es in deine Hände?",
            "literal": "Permit me – Yes I am it – How came it into your hands?",
            "tokens": [
              { "word": "Erlaube", "lemma": "erlauben", "pos": "verb", "meaning": "allow / permit" },
              { "word": "kam", "lemma": "kommen", "pos": "verb", "meaning": "came" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c16",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c16_l1",
            "original": "Dir das zu erzählen, wäre zu weitläufig; es kam von Hand zu Hand.",
            "literal": "To you that to recount, would be too lengthy; it came from hand to hand.",
            "tokens": [
              { "word": "weitläufig", "lemma": "weitläufig", "pos": "adjective", "meaning": "rambling / lengthy / detailed" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c17",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c17_l1",
            "original": "Wie kam es in die deinige?",
            "literal": "How came it into yours?",
            "tokens": [
              { "word": "deinige", "lemma": "deinig", "pos": "pronoun", "meaning": "yours" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c18",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c18_l1",
            "original": "Auf eine wunderbare Art. – Ich habe es gefangen.",
            "literal": "In a wondrous way. – I have it caught.",
            "tokens": [
              { "word": "wunderbare Art", "lemma": "Art", "pos": "noun", "meaning": "wondrous way / manner" },
              { "word": "gefangen", "lemma": "fangen", "pos": "verb", "meaning": "captured / caught" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c19",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c19_l1",
            "original": "Gefangen?",
            "literal": "Caught?",
            "tokens": [
              { "word": "Gefangen", "lemma": "fangen", "pos": "verb", "meaning": "caught" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c20",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c20_l1",
            "original": "Ich kam heute früh wie gewöhnlich zu deiner Mutter Pallast mit meiner Lieferung. – Eben als ich im Begriff war, meine Vögel abzugeben, sah ich einen Menschen vor mir, der sich Prinz nennen läßt.",
            "literal": "I came today early as usual to your mother's palace with my delivery. – Just as I in the process was, my birds to hand over, saw I a human before me, who himself Prince call lets.",
            "tokens": [
              { "word": "Pallast", "lemma": "Palast", "pos": "noun", "meaning": "palace", "notes": "Archaic spelling with double 'll'." },
              { "word": "Lieferung", "lemma": "Lieferung", "pos": "noun", "meaning": "delivery" },
              { "word": "im Begriff war", "lemma": "Begriff", "pos": "idiom", "meaning": "was about to / was in the process of" }
            ]
          },
          {
            "id": "a1_s7_pre_c20_l2",
            "original": "Dieser Prinz hat deine Mutter so eingenommen, daß sie ihm dein Bildniß schenkte, und ihm befahl, dich zu befreyen. – Sein Entschluß war so schnell, als seine Liebe zu dir.",
            "literal": "This prince has your mother so captivated, that she to him your likeness gave, and to him commanded, you to liberate. – His resolution was as swift, as his love to you.",
            "tokens": [
              { "word": "eingenommen", "lemma": "einnehmen", "pos": "verb", "meaning": "captivated / charmed" },
              { "word": "schenkte", "lemma": "schenken", "pos": "verb", "meaning": "gifted / gave" },
              { "word": "Entschluß", "lemma": "Entschluss", "pos": "noun", "meaning": "decision / resolution" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c21",
        "speaker": "Pamina",
        "stageDirection": "freudig",
        "stageDirectionTranslation": "joyfully",
        "lines": [
          {
            "id": "a1_s7_pre_c21_l1",
            "original": "Liebe? Er liebt mich also? O sage mir das noch ein Mahl, ich höre das Wort Liebe gar zu gerne.",
            "literal": "Love? He loves me then? O tell to me that once more, I hear the word love all too gladly.",
            "tokens": [
              { "word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love" },
              { "word": "noch ein Mahl", "lemma": "Mal", "pos": "adverb", "meaning": "once again / once more" },
              { "word": "gar zu gerne", "lemma": "gern", "pos": "idiom", "meaning": "all too gladly / with great delight" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c22",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c22_l1",
            "original": "Das glaube ich dir ohne zu schwören; bist ja ein Fräulenbild. – Wo blieb ich denn? – Richtig, bey der Liebe! – Kurz also, diese große Liebe zu dir war der Peitschenstreich, um unsre Füße in schnellen Gang zu bringen.",
            "literal": "That believe I you without to swear; [you] are indeed a young lady. – Where remained I then? – Right, at the love! – In short therefore, this great love for you was the whip-lash, to our feet into swift pace to bring.",
            "tokens": [
              { "word": "schwören", "lemma": "schwören", "pos": "verb", "meaning": "swear" },
              { "word": "Peitschenstreich", "lemma": "Peitschenstreich", "pos": "noun", "meaning": "lash of the whip / spur" },
              { "word": "schnellen Gang", "lemma": "Gang", "pos": "noun", "meaning": "swift pace / gait" }
            ]
          },
          {
            "id": "a1_s7_pre_c22_l2",
            "original": "Nun sind wir hier, dir tausend schöne und angenehme Sachen zu sagen; dich in unsre Arme zu nehmen, und wenn es möglich ist, eben so schnell in den Pallast deiner Mutter zu eilen.",
            "literal": "Now are we here, to you a thousand lovely and pleasant things to say; you into our arms to take, and if it possible is, just as swiftly into the palace of your mother to hasten.",
            "tokens": [
              { "word": "angenehme", "lemma": "angenehm", "pos": "adjective", "meaning": "pleasant / agreeable" },
              { "word": "eilen", "lemma": "eilen", "pos": "verb", "meaning": "hasten / rush" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c23",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c23_l1",
            "original": "Das ist alles sehr schön gesagt; aber lieber Freund! wenn der unbekannte Jüngling oder Prinz, wie er sich nennt, Liebe für mich fühlt, warum säumt er so lange, mich von meinen Fesseln zu befreyen? –",
            "literal": "That is all very nicely said; but dear friend! If the unknown youth or prince, as he himself calls, love for me feels, why lingers he so long, me from my fetters to liberate? –",
            "tokens": [
              { "word": "säumt", "lemma": "säumen", "pos": "verb", "meaning": "tarries / delays / lingers" },
              { "word": "Fesseln", "lemma": "Fessel", "pos": "noun", "meaning": "fetters / bonds" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c24",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c24_l1",
            "original": "Da steckt eben der Hacken. – Wie wir von den Jungfrauen Abschied nahmen, so sagten sie uns, drey holde Knaben würden unsre Wegweiser seyn.",
            "literal": "There sticks precisely the rub [hook]. – As we from the maidens farewell took, so told they us, three lovely boys would our guides be.",
            "tokens": [
              { "word": "da steckt der Haken", "lemma": "Haken", "pos": "idiom", "meaning": "there's the catch / there lies the rub", "notes": "Archaic spelling 'Hacken'." },
              { "word": "Abschied nahmen", "lemma": "Abschied", "pos": "idiom", "meaning": "took farewell / parted" },
              { "word": "Wegweiser", "lemma": "Wegweiser", "pos": "noun", "meaning": "guides / signposts" }
            ],
            "grammarNote": "Classic German idiom 'Da steckt der Haken' (That is where the catch lies)."
          },
          {
            "id": "a1_s7_pre_c24_l2",
            "original": "Zur Sicherheit also war der Prinz so fein, mich voraus zu schicken, um dir unsre Ankunft anzukündigen. –",
            "literal": "For safety therefore was the prince so cunning, me ahead to send, in order to you our arrival to announce. –",
            "tokens": [
              { "word": "Sicherheit", "lemma": "Sicherheit", "pos": "noun", "meaning": "safety" },
              { "word": "fein", "lemma": "fein", "pos": "adjective", "meaning": "shrewd / cunning / clever" },
              { "word": "voraus", "lemma": "voraus", "pos": "adverb", "meaning": "ahead / in advance" },
              { "word": "anzukündigen", "lemma": "ankündigen", "pos": "verb", "meaning": "announce" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c25",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c25_l1",
            "original": "Freund, du hast viel gewagt! – Wenn Sarastro dich hier erblicken sollte –",
            "literal": "Friend, you have much ventured! – If Sarastro you here behold should –",
            "tokens": [
              { "word": "gewagt", "lemma": "wagen", "pos": "verb", "meaning": "ventured / dared" },
              { "word": "erblicken", "lemma": "erblicken", "pos": "verb", "meaning": "catch sight of / behold" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c26",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c26_l1",
            "original": "So wird mir meine Rückreise erspart – Das kann ich mir denken.",
            "literal": "Then will to me my return journey spared be – That can I to myself imagine.",
            "tokens": [
              { "word": "Rückreise", "lemma": "Rückreise", "pos": "noun", "meaning": "return trip" },
              { "word": "erspart", "lemma": "ersparen", "pos": "verb", "meaning": "spared / saved" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c27",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c27_l1",
            "original": "Um diese Zeit kommt Sarastro gewöhnlich von der Jagd zurück.",
            "literal": "Around this time comes Sarastro usually from the hunt back.",
            "tokens": [
              { "word": "Jagd", "lemma": "Jagd", "pos": "noun", "meaning": "hunt" },
              { "word": "zurückkommen", "lemma": "zurückkommen", "pos": "verb", "meaning": "return" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c28",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c28_l1",
            "original": "Sarastro ist also nicht zu Hause? – Pah! da haben wir gewonnenes Spiel! – Komm, schönes Fräulenbild! du wirst Augen machen, wenn du den schönen Jüngling erblickst.",
            "literal": "Sarastro is therefore not at home? – Bah! There have we won the game! – Come, fair young lady! You will make eyes [be amazed], when you the handsome youth behold.",
            "tokens": [
              { "word": "gewonnenes Spiel", "lemma": "Spiel", "pos": "idiom", "meaning": "an easy victory / game won" },
              { "word": "Augen machen", "lemma": "Auge", "pos": "idiom", "meaning": "be amazed / open one's eyes wide" }
            ],
            "grammarNote": "Colloquial German idiom 'Augen machen' (to gaze in wonder/amazement)."
          }
        ]
      },
      {
        "id": "a1_s7_pre_c29",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c29_l1",
            "original": "Wohl denn! es sey gewagt! – Aber wenn dieß ein Fallstrick wäre – Wenn dieser nun ein böser Geist von Sarastros Gefolge wäre?",
            "literal": "Well then! It be ventured! – But if this a trap were – If this [man] now an evil spirit of Sarastro's entourage were?",
            "tokens": [
              { "word": "Fallstrick", "lemma": "Fallstrick", "pos": "noun", "meaning": "snare / trap" },
              { "word": "böser Geist", "lemma": "Geist", "pos": "noun", "meaning": "evil spirit" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c30",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c30_l1",
            "original": "Ich ein böser Geist? – Wo denkt ihr hin Fräulenbild? – Ich bin der beste Geist von der Welt.",
            "literal": "I an evil spirit? – Where think you, young lady? – I am the best spirit of the world.",
            "tokens": [
              { "word": "Wo denkt ihr hin", "lemma": "denken", "pos": "idiom", "meaning": "what are you thinking / whatever gives you that idea" },
              { "word": "beste Geist", "lemma": "Geist", "pos": "noun", "meaning": "best soul / best spirit" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c31",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c31_l1",
            "original": "Doch nein; das Bild hier überzeugt mich, daß ich nicht getäuscht bin; es kommt von den Händen meiner zärtlichsten Mutter.",
            "literal": "Yet no; the picture here convinces me, that I not deceived am; it comes from the hands of my tenderest mother.",
            "tokens": [
              { "word": "getäuscht", "lemma": "täuschen", "pos": "verb", "meaning": "deceived" },
              { "word": "Händen", "lemma": "Hand", "pos": "noun", "meaning": "hands" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c32",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c32_l1",
            "original": "Schön's Fräulenbild, wenn dir wieder ein so böser Verdacht aufsteigen sollte, daß ich dich betrügen wollte, so denke nur fleißig an die Liebe, und jeder böse Argwohn wird schwinden.",
            "literal": "Fair young lady, if to you again such an evil suspicion arise should, that I you deceive wanted, then think only diligently of love, and every evil suspicion will vanish.",
            "tokens": [
              { "word": "Verdacht", "lemma": "Verdacht", "pos": "noun", "meaning": "suspicion" },
              { "word": "betrügen", "lemma": "betrügen", "pos": "verb", "meaning": "deceive / betray" },
              { "word": "Argwohn", "lemma": "Argwohn", "pos": "noun", "meaning": "mistrust / suspicion" },
              { "word": "schwinden", "lemma": "schwinden", "pos": "verb", "meaning": "dwindle / vanish" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c33",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c33_l1",
            "original": "Freund, vergieb! vergieb! wenn ich dich beleidigte. Du hast ein gefühlvolles Herz, das sehe ich in jedem deiner Züge.",
            "literal": "Friend, forgive! Forgive! If I you offended. You have a sensitive heart, that see I in each of your features.",
            "tokens": [
              { "word": "vergieb", "lemma": "vergeben", "pos": "verb", "meaning": "forgive", "notes": "Archaic spelling with 'ie'." },
              { "word": "beleidigte", "lemma": "beleidigen", "pos": "verb", "meaning": "offended / insulted" },
              { "word": "gefühlvolles Herz", "lemma": "Herz", "pos": "noun", "meaning": "sensitive / tender heart" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c34",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c34_l1",
            "original": "Ach freylich hab ich ein gefühlvolles Herz – Aber was nützt mich das alles? – Ich möchte mir oft alle meine Federn ausrupfen, wenn ich bedenke, daß Papageno noch keine Papagena hat.",
            "literal": "Ah surely have I a sensitive heart – But what avails to me that all? – I would like to myself often all my feathers pluck out, when I consider, that Papageno still no Papagena has.",
            "tokens": [
              { "word": "Federn", "lemma": "Feder", "pos": "noun", "meaning": "feathers" },
              { "word": "ausrupfen", "lemma": "ausrupfen", "pos": "verb", "meaning": "pluck out" },
              { "word": "Papagena", "lemma": "Papagena", "pos": "noun", "meaning": "Papagena (female mate)" }
            ],
            "grammarNote": "First dramatic foreshadowing of Papagena, setting up Papageno's universal longing for a mate."
          }
        ]
      },
      {
        "id": "a1_s7_pre_c35",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c35_l1",
            "original": "Armer Mann! du hast also noch kein Weib?",
            "literal": "Poor man! You have then still no wife?",
            "tokens": [
              { "word": "Armer Mann", "lemma": "Mann", "pos": "noun", "meaning": "poor man" },
              { "word": "Weib", "lemma": "Weib", "pos": "noun", "meaning": "wife / woman", "notes": "Historical standard German word for wife (from 'Weibchen')." }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c36",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c36_l1",
            "original": "Nicht einmahl ein Mädchen, viel weniger ein Weib! – Ja das ist betrübt!",
            "literal": "Not even a maiden, much less a wife! – Yes that is sorrowful!",
            "tokens": [
              { "word": "Nicht einmahl", "lemma": "einmal", "pos": "adverb", "meaning": "not even" },
              { "word": "viel weniger", "lemma": "wenig", "pos": "adverb", "meaning": "much less" },
              { "word": "betrübt", "lemma": "betrübt", "pos": "adjective", "meaning": "saddening / gloomy" }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c37",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a1_s7_pre_c37_l1",
            "original": "Geduld Freund! der Himmel wird auch für dich sorgen; er wird dir eine Freundinn schicken, ehe du dir's vermuthest.",
            "literal": "Patience friend! Heaven will also for you care; it will to you a companion send, before you to yourself it suspect.",
            "tokens": [
              { "word": "Geduld", "lemma": "Geduld", "pos": "noun", "meaning": "patience" },
              { "word": "Freundinn", "lemma": "Freundin", "pos": "noun", "meaning": "female friend / sweetheart", "notes": "Archaic spelling with double 'nn'." },
              { "word": "vermuthest", "lemma": "vermuten", "pos": "verb", "meaning": "expect / suspect", "notes": "Archaic 2nd-person inflection with 'th'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s7_pre_c38",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s7_pre_c38_l1",
            "original": "Wenn er's nur bald schickte.",
            "literal": "If it it only soon sent.",
            "tokens": [
              { "word": "schickte", "lemma": "schicken", "pos": "verb", "meaning": "would send", "notes": "Subjunctive II expressing fervent wish." }
            ],
            "grammarNote": "This touching conversation on love and mutual companionship leads directly into their beloved Duet 'Bei Männern, welche Liebe fühlen' (Scene 7)."
          }
        ]
      }
    ]
  }
]

with open("scripts/zauberfloete_batch2_curated.json", "w", encoding="utf-8") as f:
    json.dump(batch2_curated, f, ensure_ascii=False, indent=2)

print("Saved scripts/zauberfloete_batch2_curated.json successfully!")

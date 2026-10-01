import json

# Curate Batch 1: Act 1 Scenes 1-5 spoken dialogue

batch1_curated = [
  {
    "section": "a1_s1_post",
    "act": 1,
    "scene": 1,
    "position": "post",
    "cues": [
      {
        "id": "a1_s1_post_c1",
        "speaker": "Tamino",
        "stageDirection": "erwacht, sieht furchtsam umher",
        "stageDirectionTranslation": "awakens, looks about fearfully",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s1_post_c1_l1",
            "original": "Wo bin ich! Ist's Fantasie, daß ich noch lebe? oder hat eine höhere Macht mich gerettet?",
            "literal": "Where am I! Is it fantasy, that I still live? Or has a higher power me saved?",
            "tokens": [
              { "word": "Wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "Fantasie", "lemma": "Fantasie", "pos": "noun", "meaning": "fantasy / illusion" },
              { "word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "that" },
              { "word": "lebe", "lemma": "leben", "pos": "verb", "meaning": "live" },
              { "word": "höhere Macht", "lemma": "Macht", "pos": "noun", "meaning": "higher power" },
              { "word": "gerettet", "lemma": "retten", "pos": "verb", "meaning": "saved / rescued" }
            ],
            "grammarNote": "V2 word order in direct question 'Wo bin ich', followed by subordinate clause 'daß ich noch lebe' with verb-final placement."
          },
          {
            "id": "a1_s1_post_c1_l2",
            "original": "Wie? – Die bösartige Schlange liegt todt zu meinen Füßen?",
            "literal": "How? – The malicious serpent lies dead at my feet?",
            "tokens": [
              { "word": "bösartige", "lemma": "bösartig", "pos": "adjective", "meaning": "malicious / vicious" },
              { "word": "Schlange", "lemma": "Schlange", "pos": "noun", "meaning": "serpent / snake" },
              { "word": "liegt", "lemma": "liegen", "pos": "verb", "meaning": "lies" },
              { "word": "todt", "lemma": "tot", "pos": "adjective", "meaning": "dead", "notes": "Archaic spelling with 'dt'." },
              { "word": "zu meinen Füßen", "lemma": "Fuß", "pos": "noun", "meaning": "at my feet", "notes": "Dative plural with preposition 'zu'." }
            ]
          },
          {
            "id": "a1_s1_post_c1_l3",
            "original": "Was hör' ich? Wo bin ich? Welch' unbekannter Ort! – Ha, eine männliche Figur nähert sich dem Thal.",
            "literal": "What hear I? Where am I? What unknown place! – Ha, a male figure nears itself to the valley.",
            "tokens": [
              { "word": "Was", "lemma": "was", "pos": "pronoun", "meaning": "what" },
              { "word": "hör'", "lemma": "hören", "pos": "verb", "meaning": "hear", "notes": "Apocope of final -e in speech." },
              { "word": "unbekannter Ort", "lemma": "Ort", "pos": "noun", "meaning": "unknown place / locality" },
              { "word": "männliche", "lemma": "männlich", "pos": "adjective", "meaning": "male / masculine" },
              { "word": "Figur", "lemma": "Figur", "pos": "noun", "meaning": "figure / shape" },
              { "word": "nähert sich", "lemma": "sich nähern", "pos": "verb", "meaning": "approaches", "notes": "Reflexive verb taking dative 'dem Thal'." },
              { "word": "Thal", "lemma": "Tal", "pos": "noun", "meaning": "valley", "notes": "Archaic 18th-century spelling with 'th'." }
            ],
            "grammarNote": "Melodrama / spoken transition accompanied by panpipe from offstage. Tamino hides behind a tree as Papageno approaches."
          }
        ]
      }
    ]
  },
  {
    "section": "a1_s2_post",
    "act": 1,
    "scene": 2,
    "position": "post",
    "cues": [
      {
        "id": "a1_s2_post_c1",
        "speaker": "Tamino",
        "stageDirection": "nimmt ihn bey der Hand",
        "stageDirectionTranslation": "takes him by the hand",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s2_post_c1_l1",
            "original": "He da!",
            "literal": "Hey there!",
            "tokens": [
              { "word": "He da", "lemma": "heda", "pos": "interjection", "meaning": "hey there / holla" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c2",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c2_l1",
            "original": "Was da!",
            "literal": "What's that!",
            "tokens": [
              { "word": "Was", "lemma": "was", "pos": "pronoun", "meaning": "what" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "there / here" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c3",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c3_l1",
            "original": "Sag mir, du lustiger Freund, wer du seyst?",
            "literal": "Tell to me, you merry friend, who you be?",
            "tokens": [
              { "word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "tell / say", "notes": "Imperative singular." },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me", "notes": "Dative singular." },
              { "word": "du lustiger Freund", "lemma": "Freund", "pos": "noun", "meaning": "you merry friend" },
              { "word": "seyst", "lemma": "sein", "pos": "verb", "meaning": "be / may be", "notes": "Archaic spelling of subjunctive I 'seist'." }
            ],
            "grammarNote": "Subjunctive I 'seyst' in indirect question expressing polite inquiry."
          }
        ]
      },
      {
        "id": "a1_s2_post_c4",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c4_l1",
            "original": "Wer ich bin? (Für sich) Dumme Frage!",
            "literal": "Who I am? (Aside) Stupid question!",
            "tokens": [
              { "word": "Wer", "lemma": "wer", "pos": "pronoun", "meaning": "who" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "dumme", "lemma": "dumm", "pos": "adjective", "meaning": "stupid / silly" },
              { "word": "Frage", "lemma": "Frage", "pos": "noun", "meaning": "question" }
            ]
          },
          {
            "id": "a1_s2_post_c4_l2",
            "original": "(Laut) Ein Mensch, wie du. – Wenn ich dich nun fragte, wer du bist? –",
            "literal": "(Aloud) A human, like you. – If I you now asked, who you are? –",
            "tokens": [
              { "word": "Mensch", "lemma": "Mensch", "pos": "noun", "meaning": "human / person" },
              { "word": "wie du", "lemma": "wie", "pos": "conjunction", "meaning": "like you" },
              { "word": "fragte", "lemma": "fragen", "pos": "verb", "meaning": "asked / were to ask", "notes": "Past subjunctive in hypothetical conditional." }
            ],
            "grammarNote": "Hypothetical conditional clause with 'wenn ... fragte'."
          }
        ]
      },
      {
        "id": "a1_s2_post_c5",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c5_l1",
            "original": "So würde ich dir antworten, daß ich aus fürstlichem Geblüte bin.",
            "literal": "Then would I to you answer, that I of princely blood am.",
            "tokens": [
              { "word": "würde", "lemma": "werden", "pos": "verb", "meaning": "would" },
              { "word": "antworten", "lemma": "antworten", "pos": "verb", "meaning": "answer" },
              { "word": "fürstlichem", "lemma": "fürstlich", "pos": "adjective", "meaning": "princely / noble", "notes": "Dative neuter strong inflection." },
              { "word": "Geblüte", "lemma": "Geblüt", "pos": "noun", "meaning": "blood / lineage" }
            ],
            "grammarNote": "Conditional 'würde ... antworten' responding to Papageno's hypothetical question."
          }
        ]
      },
      {
        "id": "a1_s2_post_c6",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c6_l1",
            "original": "Das ist mir zu hoch. – Mußt dich deutlicher erklären, wenn ich dich verstehen soll!",
            "literal": "That is to me too high. – Must yourself more clearly explain, if I you understand shall!",
            "tokens": [
              { "word": "zu hoch", "lemma": "hoch", "pos": "adjective", "meaning": "too high / over my head", "notes": "German idiom 'das ist mir zu hoch' (that is over my head)." },
              { "word": "deutlicher", "lemma": "deutlich", "pos": "adverb", "meaning": "more clearly", "notes": "Comparative adverb." },
              { "word": "erklären", "lemma": "erklären", "pos": "verb", "meaning": "explain" },
              { "word": "verstehen", "lemma": "verstehen", "pos": "verb", "meaning": "understand" }
            ],
            "grammarNote": "Colloquial omission of subject pronoun 'Du' in 'Mußt dich deutlicher erklären'."
          }
        ]
      },
      {
        "id": "a1_s2_post_c7",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c7_l1",
            "original": "Mein Vater ist Fürst, der über viele Länder und Menschen herrscht; darum nennt man mich Prinz.",
            "literal": "My father is prince, who over many lands and humans rules; therefore calls one me Prince.",
            "tokens": [
              { "word": "Fürst", "lemma": "Fürst", "pos": "noun", "meaning": "sovereign prince / ruler" },
              { "word": "Länder", "lemma": "Land", "pos": "noun", "meaning": "lands / countries" },
              { "word": "herrscht", "lemma": "herrschen", "pos": "verb", "meaning": "rules / reigns" },
              { "word": "Prinz", "lemma": "Prinz", "pos": "noun", "meaning": "prince" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c8",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c8_l1",
            "original": "Länder? – Menschen? – Prinz? –",
            "literal": "Lands? – Humans? – Prince? –",
            "tokens": [
              { "word": "Länder", "lemma": "Land", "pos": "noun", "meaning": "lands" },
              { "word": "Menschen", "lemma": "Mensch", "pos": "noun", "meaning": "humans" },
              { "word": "Prinz", "lemma": "Prinz", "pos": "noun", "meaning": "prince" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c9",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c9_l1",
            "original": "Daher frag' ich dich! –",
            "literal": "Therefore ask I you! –",
            "tokens": [
              { "word": "Daher", "lemma": "daher", "pos": "adverb", "meaning": "therefore / for that reason" },
              { "word": "frag'", "lemma": "fragen", "pos": "verb", "meaning": "ask" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you", "notes": "Accusative singular." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c10",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c10_l1",
            "original": "Langsam! laß mich fragen. – Sag du mir zuvor: Gibt's außer diesen Bergen auch noch Länder und Menschen?",
            "literal": "Slowly! Let me ask. – Say you to me first: Gives it besides these mountains also still lands and humans?",
            "tokens": [
              { "word": "Langsam", "lemma": "langsam", "pos": "adverb", "meaning": "slowly / gently" },
              { "word": "zuvor", "lemma": "zuvor", "pos": "adverb", "meaning": "before / beforehand" },
              { "word": "Gibt's", "lemma": "geben", "pos": "verb", "meaning": "is there / are there", "notes": "Impersonal idiom 'es gibt' with contraction 'gibt's'." },
              { "word": "außer", "lemma": "außer", "pos": "preposition", "meaning": "outside of / besides", "notes": "Preposition taking dative." }
            ],
            "grammarNote": "Idiomatic German 'Gibt's' (contraction of 'Gibt es') expressing existence."
          }
        ]
      },
      {
        "id": "a1_s2_post_c11",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c11_l1",
            "original": "Viele Tausende!",
            "literal": "Many thousands!",
            "tokens": [
              { "word": "Viele", "lemma": "viel", "pos": "pronoun", "meaning": "many" },
              { "word": "Tausende", "lemma": "Tausend", "pos": "noun", "meaning": "thousands" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c12",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c12_l1",
            "original": "Da ließ sich eine Speculation mit meinen Vögeln machen.",
            "literal": "There let itself a speculation with my birds make.",
            "tokens": [
              { "word": "Da", "lemma": "da", "pos": "adverb", "meaning": "there / in that case" },
              { "word": "ließ sich", "lemma": "sich lassen", "pos": "verb", "meaning": "could be / might be", "notes": "Past subjunctive expressing possibility." },
              { "word": "Speculation", "lemma": "Spekulation", "pos": "noun", "meaning": "business venture / speculation", "notes": "18th-century French loanword spelling." },
              { "word": "Vögeln", "lemma": "Vogel", "pos": "noun", "meaning": "birds", "notes": "Dative plural with umlaut." }
            ],
            "grammarNote": "Passive-equivalent modal structure 'ließ sich ... machen' (could be made)."
          }
        ]
      },
      {
        "id": "a1_s2_post_c13",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c13_l1",
            "original": "Nun sag' du mir, in welcher Gegend wir sind. –",
            "literal": "Now say you to me, in which region we are. –",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now" },
              { "word": "Gegend", "lemma": "Gegend", "pos": "noun", "meaning": "region / area" },
              { "word": "sind", "lemma": "sein", "pos": "verb", "meaning": "are" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c14",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c14_l1",
            "original": "In welcher Gegend? (Sieht sich um) Zwischen Thälern und Bergen.",
            "literal": "In which region? (Looks around) Between valleys and mountains.",
            "tokens": [
              { "word": "Zwischen", "lemma": "zwischen", "pos": "preposition", "meaning": "between" },
              { "word": "Thälern", "lemma": "Tal", "pos": "noun", "meaning": "valleys", "notes": "Dative plural with archaic 'th'." },
              { "word": "Bergen", "lemma": "Berg", "pos": "noun", "meaning": "mountains", "notes": "Dative plural." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c15",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c15_l1",
            "original": "Schon recht! aber wie nennt man eigentlich diese Gegend? – wer beherrscht sie?",
            "literal": "Quite right! But how calls one actually this region? – Who rules it?",
            "tokens": [
              { "word": "Schon recht", "lemma": "recht", "pos": "idiom", "meaning": "fair enough / quite right" },
              { "word": "eigentlich", "lemma": "eigentlich", "pos": "adverb", "meaning": "actually / properly speaking" },
              { "word": "beherrscht", "lemma": "beherrschen", "pos": "verb", "meaning": "rules / commands" },
              { "word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it [the region]", "notes": "Feminine singular accusative referring to 'die Gegend'." }
            ],
            "grammarNote": "Antecedent resolved: feminine pronoun 'sie' refers grammatically to 'die Gegend' (the region)."
          }
        ]
      },
      {
        "id": "a1_s2_post_c16",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c16_l1",
            "original": "Das kann ich dir eben so wenig beantworten, als ich weiß, wie ich auf die Welt gekommen bin.",
            "literal": "That can I to you just as little answer, as I know, how I into the world come am.",
            "tokens": [
              { "word": "eben so wenig", "lemma": "wenig", "pos": "adverb", "meaning": "just as little" },
              { "word": "beantworten", "lemma": "beantworten", "pos": "verb", "meaning": "answer" },
              { "word": "Welt", "lemma": "Welt", "pos": "noun", "meaning": "world" },
              { "word": "gekommen bin", "lemma": "kommen", "pos": "verb", "meaning": "have come", "notes": "Perfect tense with auxiliary 'sein'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c17",
        "speaker": "Tamino",
        "stageDirection": "lacht",
        "stageDirectionTranslation": "laughs",
        "lines": [
          {
            "id": "a1_s2_post_c17_l1",
            "original": "Wie? Du wüßtest nicht, wo du geboren, oder wer deine Ältern waren?",
            "literal": "How? You would know not, where you born [were], or who your parents were?",
            "tokens": [
              { "word": "wüßtest", "lemma": "wissen", "pos": "verb", "meaning": "would know", "notes": "Past subjunctive II of wissen." },
              { "word": "geboren", "lemma": "gebären", "pos": "adjective", "meaning": "born" },
              { "word": "Ältern", "lemma": "Eltern", "pos": "noun", "meaning": "parents", "notes": "Archaic 18th-century spelling with umlaut Ä." }
            ],
            "grammarNote": "Subjunctive II 'wüßtest' expressing disbelief; ellipsis of auxiliary 'worden bist / wurdest' in 'wo du geboren [bist]'."
          }
        ]
      },
      {
        "id": "a1_s2_post_c18",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c18_l1",
            "original": "Kein Wort! – Ich weiß nicht mehr, und nicht weniger, als daß mich ein alter, aber sehr lustiger Mann auferzogen, und ernährt hat.",
            "literal": "Not a word! – I know not more, and not less, than that me an old, but very merry man raised, and nourished has.",
            "tokens": [
              { "word": "Kein Wort", "lemma": "Wort", "pos": "idiom", "meaning": "not a word / not at all" },
              { "word": "auferzogen", "lemma": "auferziehen", "pos": "verb", "meaning": "raised / brought up", "notes": "Past participle with separable prefix." },
              { "word": "ernährt hat", "lemma": "ernähren", "pos": "verb", "meaning": "has fed / sustained" }
            ],
            "grammarNote": "Subordinate clause 'als daß mich ein alter ... Mann auferzogen ... hat' with verb-final auxiliary placement."
          }
        ]
      },
      {
        "id": "a1_s2_post_c19",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c19_l1",
            "original": "Das war vermuthlich dein Vater? –",
            "literal": "That was presumably your father? –",
            "tokens": [
              { "word": "vermuthlich", "lemma": "vermutlich", "pos": "adverb", "meaning": "presumably / probably", "notes": "Archaic spelling with 'th'." },
              { "word": "Vater", "lemma": "Vater", "pos": "noun", "meaning": "father" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c20",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c20_l1",
            "original": "Das weiß ich nicht.",
            "literal": "That know I not.",
            "tokens": [
              { "word": "weiß", "lemma": "wissen", "pos": "verb", "meaning": "know" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c21",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c21_l1",
            "original": "Hattest du denn deine Mutter nicht gekannt?",
            "literal": "Had you then your mother not known?",
            "tokens": [
              { "word": "Hattest", "lemma": "haben", "pos": "verb", "meaning": "had" },
              { "word": "gekannt", "lemma": "kennen", "pos": "verb", "meaning": "known" },
              { "word": "Mutter", "lemma": "Mutter", "pos": "noun", "meaning": "mother" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c22",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c22_l1",
            "original": "Gekannt hab' ich sie nicht; erzählen ließ ich mir's einige Mahl, daß meine Mutter einst da in diesem verschlossenen Gebäude bey der nächtlich sternflammenden Königinn gedient hätte.",
            "literal": "Known have I her not; recount let I to myself it several times, that my mother once there in this locked building with the nightly star-flaming Queen served had.",
            "tokens": [
              { "word": "Gekannt", "lemma": "kennen", "pos": "verb", "meaning": "known", "notes": "Fronted past participle for stylistic emphasis." },
              { "word": "erzählen ließ", "lemma": "erzählen lassen", "pos": "verb", "meaning": "had told to me" },
              { "word": "einige Mahl", "lemma": "Mal", "pos": "adverb", "meaning": "several times", "notes": "Archaic spelling of 'Mal'." },
              { "word": "sternflammenden", "lemma": "sternflammend", "pos": "adjective", "meaning": "star-flaming / glittering with stars" },
              { "word": "gedient hätte", "lemma": "dienen", "pos": "verb", "meaning": "had served", "notes": "Past subjunctive II in indirect reported speech." }
            ],
            "grammarNote": "Subjunctive II 'gedient hätte' marks indirect reported speech (hearsay)."
          },
          {
            "id": "a1_s2_post_c22_l2",
            "original": "Ob sie noch lebt, oder was aus ihr geworden ist, weiß ich nicht. – Ich weiß nur so viel, daß nicht weit von hier meine Strohhütte steht, die mich vor Regen und Kälte schützt.",
            "literal": "Whether she still lives, or what of her become has, know I not. – I know only so much, that not far from here my straw hut stands, which me from rain and cold protects.",
            "tokens": [
              { "word": "Ob", "lemma": "ob", "pos": "conjunction", "meaning": "whether / if" },
              { "word": "geworden ist", "lemma": "werden", "pos": "verb", "meaning": "has become" },
              { "word": "Strohhütte", "lemma": "Strohhütte", "pos": "noun", "meaning": "straw hut / thatched cottage" },
              { "word": "Regen", "lemma": "Regen", "pos": "noun", "meaning": "rain" },
              { "word": "Kälte", "lemma": "Kälte", "pos": "noun", "meaning": "cold" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c23",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c23_l1",
            "original": "Aber wie lebst du?",
            "literal": "But how live you?",
            "tokens": [
              { "word": "wie", "lemma": "wie", "pos": "adverb", "meaning": "how" },
              { "word": "lebst", "lemma": "leben", "pos": "verb", "meaning": "live" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c24",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c24_l1",
            "original": "Von Essen und Trinken, wie alle Menschen.",
            "literal": "From eating and drinking, like all humans.",
            "tokens": [
              { "word": "Von", "lemma": "von", "pos": "preposition", "meaning": "from / on" },
              { "word": "Essen", "lemma": "Essen", "pos": "noun", "meaning": "eating / food" },
              { "word": "Trinken", "lemma": "Trinken", "pos": "noun", "meaning": "drinking / beverage" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c25",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c25_l1",
            "original": "Wodurch erhältst du das?",
            "literal": "Whereby obtain you that?",
            "tokens": [
              { "word": "Wodurch", "lemma": "wodurch", "pos": "adverb", "meaning": "whereby / through what" },
              { "word": "erhältst", "lemma": "erhalten", "pos": "verb", "meaning": "obtain / receive" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c26",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c26_l1",
            "original": "Durch Tausch. – Ich fange für die sternflammende Königinn und ihre Jungfrauen verschiedene Vögel; dafür erhalt' ich täglich Speis' und Trank von ihr.",
            "literal": "Through barter. – I catch for the star-flaming Queen and her maidens various birds; for that receive I daily food and drink from her.",
            "tokens": [
              { "word": "Tausch", "lemma": "Tausch", "pos": "noun", "meaning": "barter / exchange" },
              { "word": "fange", "lemma": "fangen", "pos": "verb", "meaning": "catch" },
              { "word": "Jungfrauen", "lemma": "Jungfrau", "pos": "noun", "meaning": "maidens / ladies" },
              { "word": "Speis' und Trank", "lemma": "Speise", "pos": "idiom", "meaning": "food and drink", "notes": "Classic German rhyming idiom." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c27",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c27_l1",
            "original": "(Für sich) Sternflammende Königinn! – Wenn es etwa gar die mächtige Herrscherin der Nacht wäre! – (Laut) Sag mir, guter Freund! warst du schon so glücklich, diese Göttinn der Nacht zu sehen?",
            "literal": "(Aside) Star-flaming Queen! – If it perhaps even the mighty ruler of the night were! – (Aloud) Tell to me, good friend! Were you already so fortunate, this goddess of the night to see?",
            "tokens": [
              { "word": "Herrscherin", "lemma": "Herrscherin", "pos": "noun", "meaning": "ruler / sovereign (female)" },
              { "word": "wäre", "lemma": "sein", "pos": "verb", "meaning": "were", "notes": "Subjunctive II expressing conditional conjecture." },
              { "word": "glücklich", "lemma": "glücklich", "pos": "adjective", "meaning": "fortunate / lucky" },
              { "word": "Göttinn", "lemma": "Göttin", "pos": "noun", "meaning": "goddess", "notes": "Archaic spelling with double 'nn'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c28",
        "speaker": "Papageno",
        "stageDirection": "der bisher öfters auf seiner Flöte geblasen",
        "stageDirectionTranslation": "who has repeatedly blown on his pipe",
        "lines": [
          {
            "id": "a1_s2_post_c28_l1",
            "original": "Deine letzte alberne Frage überzeugt mich, daß du aus einem fremden Lande geboren bist. –",
            "literal": "Your last silly question convinces me, that you in a foreign country born are. –",
            "tokens": [
              { "word": "alberne", "lemma": "albern", "pos": "adjective", "meaning": "silly / foolish" },
              { "word": "überzeugt", "lemma": "überzeugen", "pos": "verb", "meaning": "convinces" },
              { "word": "fremden Lande", "lemma": "Land", "pos": "noun", "meaning": "foreign country / land", "notes": "Dative singular with archaic '-e' ending." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c29",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c29_l1",
            "original": "Sey darüber nicht ungehalten, lieber Freund! ich dachte nur –",
            "literal": "Be about it not displeased, dear friend! I thought only –",
            "tokens": [
              { "word": "Sey", "lemma": "sein", "pos": "verb", "meaning": "be", "notes": "Archaic imperative singular 'sei'." },
              { "word": "ungehalten", "lemma": "ungehalten", "pos": "adjective", "meaning": "indignant / displeased" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c30",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c30_l1",
            "original": "Sehen? – Die sternflammende Königinn sehen? – Wenn du noch mit einer solchen albernen Frage an mich kommst, so sperr' ich dich, so wahr ich Papageno heiße, wie einen Gimpel in mein Vogelhaus, verhandle dich dann mit meinen übrigen Vögeln an die nächtliche Königinn und ihre Jungfrauen, dann mögen sie dich meinetwegen sieden oder braten.",
            "literal": "To see? – The star-flaming Queen to see? – If you yet with such a silly question to me come, then lock I you, as true as I Papageno am called, like a bullfinch into my birdhouse, sell you then with my remaining birds to the nightly Queen and her maidens, then may they you for all I care boil or roast.",
            "tokens": [
              { "word": "Gimpel", "lemma": "Gimpel", "pos": "noun", "meaning": "bullfinch (also colloquial for fool/simpleton)" },
              { "word": "Vogelhaus", "lemma": "Vogelhaus", "pos": "noun", "meaning": "birdhouse / aviary" },
              { "word": "verhandle", "lemma": "verhandeln", "pos": "verb", "meaning": "sell / trade off" },
              { "word": "meinetwegen", "lemma": "meinetwegen", "pos": "adverb", "meaning": "for all I care / as far as I'm concerned" },
              { "word": "sieden", "lemma": "sieden", "pos": "verb", "meaning": "boil / seethe" },
              { "word": "braten", "lemma": "braten", "pos": "verb", "meaning": "roast / fry" }
            ],
            "grammarNote": "Viennese popular theatrical humor: 'Gimpel' carries double meaning as bullfinch and dupe/fool."
          }
        ]
      },
      {
        "id": "a1_s2_post_c31",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c31_l1",
            "original": "(Für sich) Ein wunderlicher Mann!",
            "literal": "(Aside) A strange man!",
            "tokens": [
              { "word": "wunderlicher", "lemma": "wunderlich", "pos": "adjective", "meaning": "whimsical / eccentric / strange" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c32",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c32_l1",
            "original": "Sehen? – Die sternflammende Königinn sehen? – Welcher Sterbliche kann sich rühmen, sie je gesehen zu haben? – Welches Menschen Auge würde durch ihren schwarz durchwebten Schleyer blicken können?",
            "literal": "To see? – The star-flaming Queen to see? – Which mortal can himself boast, her ever seen to have? – Which human's eye would through her black-interwoven veil gaze be able?",
            "tokens": [
              { "word": "Sterbliche", "lemma": "Sterblicher", "pos": "noun", "meaning": "mortal (noun)" },
              { "word": "rühmen", "lemma": "rühmen", "pos": "verb", "meaning": "boast / pride oneself" },
              { "word": "schwarz durchwebten", "lemma": "durchwebt", "pos": "adjective", "meaning": "black-interwoven / woven through with black" },
              { "word": "Schleyer", "lemma": "Schleier", "pos": "noun", "meaning": "veil", "notes": "Archaic spelling with 'ey'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c33",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c33_l1",
            "original": "(Für sich) Nun ist's klar; es ist eben diese nächtliche Königinn, von der mein Vater mir so oft erzählte. – Aber zu fassen, wie ich mich hierher verirrte, ist außer meiner Macht. – Unfehlbar ist auch dieser Mann kein gewöhnlicher Mensch. – Vieleicht einer ihrer dienstbaren Geister.",
            "literal": "(Aside) Now is it clear; it is precisely this nightly Queen, of whom my father to me so often recounted. – But to grasp, how I myself hither strayed, is beyond my power. – Infallibly is also this man no ordinary human. – Perhaps one of her servant spirits.",
            "tokens": [
              { "word": "nächtliche", "lemma": "nächtlich", "pos": "adjective", "meaning": "nocturnal / nightly" },
              { "word": "verirrte", "lemma": "sich verirren", "pos": "verb", "meaning": "strayed / lost my way" },
              { "word": "außer meiner Macht", "lemma": "Macht", "pos": "idiom", "meaning": "beyond my power" },
              { "word": "Unfehlbar", "lemma": "unfehlbar", "pos": "adverb", "meaning": "infallibly / without doubt" },
              { "word": "dienstbaren Geister", "lemma": "Geist", "pos": "noun", "meaning": "servant spirits / ministering spirits" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c34",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c34_l1",
            "original": "(Für sich) Wie er mich so starr anblickt! Bald fang' ich an, mich vor ihm zu fürchten. – (Laut) Warum siehst du so verdächtig und schelmisch nach mir?",
            "literal": "(Aside) How he me so fixedly gazes at! Soon begin I, myself of him to fear. – (Aloud) Why look you so suspiciously and roguishly at me?",
            "tokens": [
              { "word": "starr", "lemma": "starr", "pos": "adverb", "meaning": "fixedly / intently" },
              { "word": "anblickt", "lemma": "anblicken", "pos": "verb", "meaning": "gazes at" },
              { "word": "verdächtig", "lemma": "verdächtig", "pos": "adverb", "meaning": "suspiciously" },
              { "word": "schelmisch", "lemma": "schelmisch", "pos": "adverb", "meaning": "roguishly / mischievously" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c35",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c35_l1",
            "original": "Weil – weil ich zweifle, ob du Mensch bist. –",
            "literal": "Because – because I doubt, whether you human are. –",
            "tokens": [
              { "word": "zweifle", "lemma": "zweifeln", "pos": "verb", "meaning": "doubt" },
              { "word": "Mensch", "lemma": "Mensch", "pos": "noun", "meaning": "human" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c36",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c36_l1",
            "original": "Wie war das?",
            "literal": "How was that?",
            "tokens": [
              { "word": "Wie", "lemma": "wie", "pos": "adverb", "meaning": "how" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c37",
        "speaker": "Tamino",
        "stageDirection": "geht auf ihn zu",
        "stageDirectionTranslation": "steps toward him",
        "lines": [
          {
            "id": "a1_s2_post_c37_l1",
            "original": "Nach deinen Federn, die dich bedecken, halt' ich dich –",
            "literal": "By your feathers, which you cover, take I you [for] –",
            "tokens": [
              { "word": "Federn", "lemma": "Feder", "pos": "noun", "meaning": "feathers" },
              { "word": "bedecken", "lemma": "bedecken", "pos": "verb", "meaning": "cover" },
              { "word": "halt' ich dich", "lemma": "halten", "pos": "verb", "meaning": "take I you for", "notes": "Idiom 'halten für' (to take someone for / consider)." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c38",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c38_l1",
            "original": "Doch für keinen Vogel? – Bleib zurück, sag' ich, und traue mir nicht; – denn ich habe Riesenkraft, wenn ich jemand packe. – (Für sich) Wenn er sich nicht bald von mir schrecken läßt, so lauf' ich davon.",
            "literal": "Surely for no bird? – Stay back, say I, and trust to me not; – for I have giant's strength, when I someone seize. – (Aside) If he himself not soon by me frighten lets, then run I away.",
            "tokens": [
              { "word": "Bleib zurück", "lemma": "zurückbleiben", "pos": "verb", "meaning": "stay back" },
              { "word": "Riesenkraft", "lemma": "Riesenkraft", "pos": "noun", "meaning": "giant's strength" },
              { "word": "packe", "lemma": "packen", "pos": "verb", "meaning": "grab / seize" },
              { "word": "schrecken läßt", "lemma": "schrecken", "pos": "verb", "meaning": "lets himself be frightened" },
              { "word": "lauf' ich davon", "lemma": "davonlaufen", "pos": "verb", "meaning": "run I away", "notes": "Separable verb 'davonlaufen'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c39",
        "speaker": "Tamino",
        "stageDirection": "er sieht auf die Schlange",
        "stageDirectionTranslation": "he looks upon the serpent",
        "lines": [
          {
            "id": "a1_s2_post_c39_l1",
            "original": "Riesenkraft? Also warst du wohl gar mein Erretter, der diese giftige Schlange bekämpfte?",
            "literal": "Giant's strength? So were you perhaps even my rescuer, who this venomous serpent fought?",
            "tokens": [
              { "word": "Erretter", "lemma": "Erretter", "pos": "noun", "meaning": "rescuer / savior" },
              { "word": "giftige", "lemma": "giftig", "pos": "adjective", "meaning": "poisonous / venomous" },
              { "word": "bekämpfte", "lemma": "bekämpfen", "pos": "verb", "meaning": "fought / combatted" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c40",
        "speaker": "Papageno",
        "stageDirection": "sieht sich um, weicht zitternd einige Schritte zurück",
        "stageDirectionTranslation": "looks around, steps back trembling a few paces",
        "lines": [
          {
            "id": "a1_s2_post_c40_l1",
            "original": "Schlange! Was da! ist sie todt, oder lebendig?",
            "literal": "Serpent! What's that! Is it dead, or alive?",
            "tokens": [
              { "word": "Schlange", "lemma": "Schlange", "pos": "noun", "meaning": "serpent" },
              { "word": "todt", "lemma": "tot", "pos": "adjective", "meaning": "dead" },
              { "word": "lebendig", "lemma": "lebendig", "pos": "adjective", "meaning": "alive / living" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c41",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c41_l1",
            "original": "Du willst durch deine bescheidene Frage meinen Dank ablehnen – aber ich muß dir sagen, daß ich ewig für deine so tapfere Handlung dankbar seyn werde.",
            "literal": "You wish through your modest question my thanks to decline – but I must to you say, that I eternally for your so brave deed grateful be shall.",
            "tokens": [
              { "word": "bescheidene", "lemma": "bescheiden", "pos": "adjective", "meaning": "modest / humble" },
              { "word": "ablehnen", "lemma": "ablehnen", "pos": "verb", "meaning": "decline / reject" },
              { "word": "tapfere", "lemma": "tapfer", "pos": "adjective", "meaning": "brave / valiant" },
              { "word": "dankbar", "lemma": "dankbar", "pos": "adjective", "meaning": "thankful / grateful" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c42",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c42_l1",
            "original": "Schweigen wir davon still – Freuen wir uns, daß sie glücklich überwunden ist.",
            "literal": "Keep we of it silent – Rejoice we ourselves, that it happily overcome is.",
            "tokens": [
              { "word": "stillschweigen", "lemma": "stillschweigen", "pos": "verb", "meaning": "keep silent" },
              { "word": "überwunden", "lemma": "überwinden", "pos": "verb", "meaning": "overcome / defeated" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c43",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c43_l1",
            "original": "Aber um alles in der Welt, Freund! wie hast du dieses Ungeheuer bekämpft? – Du bist ohne Waffen.",
            "literal": "But for all in the world, friend! How have you this monster fought? – You are without weapons.",
            "tokens": [
              { "word": "Ungeheuer", "lemma": "Ungeheuer", "pos": "noun", "meaning": "monster" },
              { "word": "Waffen", "lemma": "Waffe", "pos": "noun", "meaning": "weapons" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c44",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c44_l1",
            "original": "Brauch keine! – Bey mir ist ein starker Druck mit der Hand mehr, als Waffen.",
            "literal": "Need none! – With me is a strong squeeze with the hand more, than weapons.",
            "tokens": [
              { "word": "Brauch", "lemma": "brauchen", "pos": "verb", "meaning": "need" },
              { "word": "starker Druck", "lemma": "Druck", "pos": "noun", "meaning": "strong squeeze / pressure" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c45",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s2_post_c45_l1",
            "original": "Du hast sie also erdrosselt?",
            "literal": "You have it [the serpent] then strangled?",
            "tokens": [
              { "word": "erdrosselt", "lemma": "erdrosseln", "pos": "verb", "meaning": "strangled / throttled" }
            ]
          }
        ]
      },
      {
        "id": "a1_s2_post_c46",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s2_post_c46_l1",
            "original": "Erdrosselt! (Für sich) Bin in meinem Leben nicht so stark gewesen, als heute.",
            "literal": "Strangled! (Aside) Have in my life not so strong been, as today.",
            "tokens": [
              { "word": "Erdrosselt", "lemma": "erdrosseln", "pos": "verb", "meaning": "strangled" },
              { "word": "stark", "lemma": "stark", "pos": "adjective", "meaning": "strong" },
              { "word": "heute", "lemma": "heute", "pos": "adverb", "meaning": "today" }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "a1_s3_pre",
    "act": 1,
    "scene": 3,
    "position": "pre",
    "cues": [
      {
        "id": "a1_s3_pre_c1",
        "speaker": "Three Ladies",
        "stageDirection": "drohen und rufen zugleich",
        "stageDirectionTranslation": "threaten and call out together",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s3_pre_c1_l1",
            "original": "Papageno!",
            "literal": "Papageno!",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c2",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c2_l1",
            "original": "Aha! das geht mich an. – Sieh dich um, Freund!",
            "literal": "Aha! That concerns me. – Look you around, friend!",
            "tokens": [
              { "word": "geht mich an", "lemma": "angehen", "pos": "verb", "meaning": "concerns me", "notes": "Idiom 'jemanden angehen' (to concern someone)." },
              { "word": "Sieh dich um", "lemma": "sich umsehen", "pos": "verb", "meaning": "look around", "notes": "Imperative of reflexive separable verb." }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c3",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s3_pre_c3_l1",
            "original": "Wer sind diese Damen?",
            "literal": "Who are these ladies?",
            "tokens": [
              { "word": "Damen", "lemma": "Dame", "pos": "noun", "meaning": "ladies" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c4",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c4_l1",
            "original": "Wer sie eigentlich sind, weis ich selbst nicht. – Ich weis nur so viel, daß sie mir täglich meine Vögel abnehmen, und mir dafür Wein, Zuckerbrod, und süße Feigen bringen.",
            "literal": "Who they actually are, know I myself not. – I know only so much, that they from me daily my birds take, and to me in return wine, sugar-bread, and sweet figs bring.",
            "tokens": [
              { "word": "weis", "lemma": "wissen", "pos": "verb", "meaning": "know", "notes": "Archaic spelling of 'weiß'." },
              { "word": "abnehmen", "lemma": "abnehmen", "pos": "verb", "meaning": "take off / accept delivery" },
              { "word": "Zuckerbrod", "lemma": "Zuckerbrot", "pos": "noun", "meaning": "sweet pastry / sugar-bread" },
              { "word": "Feigen", "lemma": "Feige", "pos": "noun", "meaning": "figs" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c5",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s3_pre_c5_l1",
            "original": "Sie sind vermuthlich sehr schön?",
            "literal": "They are presumably very beautiful?",
            "tokens": [
              { "word": "vermuthlich", "lemma": "vermutlich", "pos": "adverb", "meaning": "presumably" },
              { "word": "schön", "lemma": "schön", "pos": "adjective", "meaning": "beautiful" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c6",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c6_l1",
            "original": "Ich denke nicht! – denn wenn sie schön wären, würden sie ihre Gesichter nicht bedecken.",
            "literal": "I think not! – For if they beautiful were, would they their faces not cover.",
            "tokens": [
              { "word": "wären", "lemma": "sein", "pos": "verb", "meaning": "were", "notes": "Subjunctive II." },
              { "word": "Gesichter", "lemma": "Gesicht", "pos": "noun", "meaning": "faces" },
              { "word": "bedecken", "lemma": "bedecken", "pos": "verb", "meaning": "cover" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c7",
        "speaker": "Three Ladies",
        "stageDirection": "drohend",
        "stageDirectionTranslation": "threateningly",
        "lines": [
          {
            "id": "a1_s3_pre_c7_l1",
            "original": "Papageno! –",
            "literal": "Papageno! –",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c8",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c8_l1",
            "original": "Sey still! sie drohen mir schon. – Du fragst, ob sie schön sind, und ich kann dir darauf nichts antworten, als daß ich in meinem Leben nichts Reitzenders sah. – Jetzt werden sie bald wieder gut werden.",
            "literal": "Be quiet! They threaten to me already. – You ask, whether they beautiful are, and I can to you thereupon nothing answer, than that I in my life nothing more charming saw. – Now will they soon again good become.",
            "tokens": [
              { "word": "drohen", "lemma": "drohen", "pos": "verb", "meaning": "threaten" },
              { "word": "Reitzenders", "lemma": "reizend", "pos": "adjective", "meaning": "more charming / delightful", "notes": "Substantivized neuter comparative with archaic 'tz'." },
              { "word": "gut werden", "lemma": "gut", "pos": "idiom", "meaning": "calm down / become friendly again" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c9",
        "speaker": "Three Ladies",
        "stageDirection": "drohend",
        "stageDirectionTranslation": "threateningly",
        "lines": [
          {
            "id": "a1_s3_pre_c9_l1",
            "original": "Papageno!",
            "literal": "Papageno!",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c10",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c10_l1",
            "original": "Was muß ich denn heute verbrochen haben, daß sie gar so aufgebracht wider mich sind? – Hier, meine Schönen, übergeb' ich meine Vögel.",
            "literal": "What must I then today committed have, that they [the Ladies] even so incensed against me are? – Here, my beauties, hand over I my birds.",
            "tokens": [
              { "word": "verbrochen", "lemma": "verbrechen", "pos": "verb", "meaning": "done wrong / committed" },
              { "word": "aufgebracht", "lemma": "aufgebracht", "pos": "adjective", "meaning": "incensed / infuriated" },
              { "word": "übergeb'", "lemma": "übergeben", "pos": "verb", "meaning": "hand over / deliver" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c11",
        "speaker": "First Lady",
        "stageDirection": "reicht ihm eine schöne Bouteille Wasser",
        "stageDirectionTranslation": "hands him a fine bottle of water",
        "lines": [
          {
            "id": "a1_s3_pre_c11_l1",
            "original": "Dafür schickt dir unsre Fürstinn heute zum ersten Mahl statt Wein reines helles Wasser.",
            "literal": "For that sends to you our sovereign today for the first time instead of wine pure clear water.",
            "tokens": [
              { "word": "Fürstinn", "lemma": "Fürstin", "pos": "noun", "meaning": "sovereign / princess", "notes": "Archaic spelling with double 'nn'." },
              { "word": "reines", "lemma": "rein", "pos": "adjective", "meaning": "pure" },
              { "word": "Wasser", "lemma": "Wasser", "pos": "noun", "meaning": "water" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c12",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c12_l1",
            "original": "Und mir befahl sie, daß ich, statt Zuckerbrod, diesen Stein dir überbringen soll. – Ich wünsche, daß er dir wohl bekommen möge.",
            "literal": "And to me commanded she, that I, instead of sugar-bread, this stone to you deliver shall. – I wish, that it to you well agree may.",
            "tokens": [
              { "word": "befahl", "lemma": "befehlen", "pos": "verb", "meaning": "commanded" },
              { "word": "Stein", "lemma": "Stein", "pos": "noun", "meaning": "stone" },
              { "word": "wohl bekommen möge", "lemma": "bekommen", "pos": "idiom", "meaning": "may agree with / do good to", "notes": "Subjunctive wish formula." }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c13",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a1_s3_pre_c13_l1",
            "original": "Was? Steine soll ich fressen?",
            "literal": "What? Stones shall I gobble?",
            "tokens": [
              { "word": "Steine", "lemma": "Stein", "pos": "noun", "meaning": "stones" },
              { "word": "fressen", "lemma": "fressen", "pos": "verb", "meaning": "eat like a beast / gobble", "notes": "Coarse verb for eating used for animals or vulgar human eating." }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c14",
        "speaker": "Third Lady",
        "stageDirection": "sie schlägt ihm das Schloß vor den Mund",
        "stageDirectionTranslation": "she claps the padlock over his mouth",
        "lines": [
          {
            "id": "a1_s3_pre_c14_l1",
            "original": "Und statt der süßen Feigen hab' ich die Ehre, dir dieß goldene Schloß vor den Mund zu schlagen.",
            "literal": "And instead of the sweet figs have I the honor, to you this golden padlock over the mouth to clap.",
            "tokens": [
              { "word": "Ehre", "lemma": "Ehre", "pos": "noun", "meaning": "honor" },
              { "word": "goldene Schloß", "lemma": "Schloss", "pos": "noun", "meaning": "golden padlock" },
              { "word": "Mund", "lemma": "Mund", "pos": "noun", "meaning": "mouth" }
            ],
            "grammarNote": "The famous padlock on Papageno's mouth punishing his boasting and lying, which sets up the Quintet 'Hm! hm! hm!'."
          }
        ]
      },
      {
        "id": "a1_s3_pre_c15",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c15_l1",
            "original": "Du willst vermuthlich wissen, warum die Fürstinn dich heute so wunderbar bestraft?",
            "literal": "You wish presumably to know, why the sovereign you today so strangely punishes?",
            "tokens": [
              { "word": "wunderbar", "lemma": "wunderbar", "pos": "adverb", "meaning": "wondrously / strangely" },
              { "word": "bestraft", "lemma": "bestrafen", "pos": "verb", "meaning": "punishes" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c16",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c16_l1",
            "original": "Damit du künftig nie mehr Fremde belügst.",
            "literal": "So that you in future never more strangers lie to.",
            "tokens": [
              { "word": "künftig", "lemma": "künftig", "pos": "adverb", "meaning": "in future" },
              { "word": "Fremde", "lemma": "Fremder", "pos": "noun", "meaning": "strangers" },
              { "word": "belügst", "lemma": "belügen", "pos": "verb", "meaning": "lie to" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c17",
        "speaker": "Third Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c17_l1",
            "original": "Und daß du nie dich der Heldenthaten rühmst, die andre vollzogen. –",
            "literal": "And that you never yourself of the heroic deeds boast, which others performed. –",
            "tokens": [
              { "word": "Heldenthaten", "lemma": "Heldentat", "pos": "noun", "meaning": "heroic deeds", "notes": "Archaic spelling with 'th'." },
              { "word": "rühmst", "lemma": "rühmen", "pos": "verb", "meaning": "boast of", "notes": "Reflexive verb taking genitive." },
              { "word": "vollzogen", "lemma": "vollziehen", "pos": "verb", "meaning": "accomplished / carried out" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c18",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c18_l1",
            "original": "Sag' an! Hast du diese Schlange bekämpft?",
            "literal": "Speak up! Have you this serpent fought?",
            "tokens": [
              { "word": "Sag' an", "lemma": "ansagen", "pos": "verb", "meaning": "declare / speak up" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c19",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s3_pre_c19_l1",
            "original": "Wer denn also?",
            "literal": "Who then so?",
            "tokens": [
              { "word": "Wer denn", "lemma": "wer", "pos": "pronoun", "meaning": "who then" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c20",
        "speaker": "Third Lady",
        "stageDirection": "überreicht das Bildnis",
        "stageDirectionTranslation": "presents the portrait",
        "lines": [
          {
            "id": "a1_s3_pre_c20_l1",
            "original": "Wir waren's, Jüngling, die dich befreyten. – Zittre nicht! dich erwartet Freude und Entzücken. – Hier, dies Gemälde schickt dir die große Fürstinn; es ist das Bildniß ihrer Tochter – findest du, sagte sie, daß diese Züge dir nicht gleichgültig sind, dann ist Glück, Ehr' und Ruhm dein Loos.",
            "literal": "We were it, youth, who you freed. – Tremble not! You awaits joy and delight. – Here, this painting sends to you the great sovereign; it is the likeness of her daughter – find you, said she, that these features to you not indifferent are, then is fortune, honor and glory your lot.",
            "tokens": [
              { "word": "Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "youth / young man" },
              { "word": "befreyten", "lemma": "befreien", "pos": "verb", "meaning": "liberated / saved" },
              { "word": "Gemälde", "lemma": "Gemälde", "pos": "noun", "meaning": "painting / portrait" },
              { "word": "Bildniß", "lemma": "Bildnis", "pos": "noun", "meaning": "likeness / portrait" },
              { "word": "Züge", "lemma": "Zug", "pos": "noun", "meaning": "features / traits" },
              { "word": "gleichgültig", "lemma": "gleichgültig", "pos": "adjective", "meaning": "indifferent" },
              { "word": "Loos", "lemma": "Los", "pos": "noun", "meaning": "lot / destiny" }
            ],
            "grammarNote": "Presentation of Pamina's portrait directly motivating Tamino's Aria 'Dies Bildnis ist bezaubernd schön' (Scene 3)."
          }
        ]
      },
      {
        "id": "a1_s3_pre_c21",
        "speaker": "Second Lady",
        "stageDirection": "geht ab",
        "stageDirectionTranslation": "exits",
        "lines": [
          {
            "id": "a1_s3_pre_c21_l1",
            "original": "Adieu, Monsieur Papageno!",
            "literal": "Farewell, Monsieur Papageno!",
            "tokens": [
              { "word": "Adieu", "lemma": "Adieu", "pos": "interjection", "meaning": "farewell / adieu" },
              { "word": "Monsieur", "lemma": "Monsieur", "pos": "noun", "meaning": "Mister / Monsieur" }
            ]
          }
        ]
      },
      {
        "id": "a1_s3_pre_c22",
        "speaker": "First Lady",
        "stageDirection": "geht lachend ab",
        "stageDirectionTranslation": "exits laughing",
        "lines": [
          {
            "id": "a1_s3_pre_c22_l1",
            "original": "Fein nicht zu hastig getrunken!",
            "literal": "Mind not too hastily drunk!",
            "tokens": [
              { "word": "hastig", "lemma": "hastig", "pos": "adverb", "meaning": "hastily" },
              { "word": "getrunken", "lemma": "trinken", "pos": "verb", "meaning": "drunk" }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "a1_s4_pre",
    "act": 1,
    "scene": 4,
    "position": "pre",
    "cues": [
      {
        "id": "a1_s4_pre_c1",
        "speaker": "First Lady",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s4_pre_c1_l1",
            "original": "Rüste dich mit Muth und Standhaftigkeit, schöner Jüngling! – Die Fürstinn –",
            "literal": "Arm yourself with courage and steadfastness, handsome youth! – The sovereign –",
            "tokens": [
              { "word": "Rüste dich", "lemma": "sich rüsten", "pos": "verb", "meaning": "arm yourself / prepare" },
              { "word": "Muth", "lemma": "Mut", "pos": "noun", "meaning": "courage" },
              { "word": "Standhaftigkeit", "lemma": "Standhaftigkeit", "pos": "noun", "meaning": "steadfastness / fortitude" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c2",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c2_l1",
            "original": "Hat mir aufgetragen, dir zu sagen –",
            "literal": "Has to me charged, to you to tell –",
            "tokens": [
              { "word": "aufgetragen", "lemma": "auftragen", "pos": "verb", "meaning": "tasked / charged" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c3",
        "speaker": "Third Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c3_l1",
            "original": "Daß der Weg zu deinem künftigen Glücke nunmehr gebahnt sey.",
            "literal": "That the way to your future happiness now paved be.",
            "tokens": [
              { "word": "gebahnt", "lemma": "bahnen", "pos": "verb", "meaning": "cleared / paved" },
              { "word": "sey", "lemma": "sein", "pos": "verb", "meaning": "be", "notes": "Subjunctive I." }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c4",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c4_l1",
            "original": "Sie hat jedes deiner Worte gehört, so du sprachst; – sie hat –",
            "literal": "She has every one of your words heard, as you spoke; – she has –",
            "tokens": [
              { "word": "Worte", "lemma": "Wort", "pos": "noun", "meaning": "words" },
              { "word": "sprachst", "lemma": "sprechen", "pos": "verb", "meaning": "spoke" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c5",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c5_l1",
            "original": "Jeden Zug in deinem Gesichte gelesen. – Ja noch mehr, ihr mütterliches Herz –",
            "literal": "Every feature in your face read. – Yes even more, her motherly heart –",
            "tokens": [
              { "word": "Zug", "lemma": "Zug", "pos": "noun", "meaning": "feature / expression" },
              { "word": "mütterliches", "lemma": "mütterlich", "pos": "adjective", "meaning": "maternal / motherly" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c6",
        "speaker": "Third Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c6_l1",
            "original": "Hat beschlossen, dich ganz glücklich zu machen. – Hat dieser Jüngling, sprach sie, auch so viel Muth und Tapferkeit, als er zärtlich ist, o so ist meine Tochter ganz gewiß gerettet.",
            "literal": "Has decided, you wholly happy to make. – Has this youth, spoke she, also so much courage and bravery, as he tender is, oh so is my daughter quite certainly saved.",
            "tokens": [
              { "word": "beschlossen", "lemma": "beschließen", "pos": "verb", "meaning": "resolved / decided" },
              { "word": "Tapferkeit", "lemma": "Tapferkeit", "pos": "noun", "meaning": "bravery / valor" },
              { "word": "zärtlich", "lemma": "zärtlich", "pos": "adjective", "meaning": "tender / affectionate" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c7",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s4_pre_c7_l1",
            "original": "Gerettet? O ewige Dunkelheit! was hör' ich? – Das Original? –",
            "literal": "Saved? O eternal darkness! What hear I? – The original? –",
            "tokens": [
              { "word": "Original", "lemma": "Original", "pos": "noun", "meaning": "original [living person depicted in portrait]" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c8",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c8_l1",
            "original": "Hat ein mächtiger, böser Dämon ihr entrissen.",
            "literal": "Has a mighty, evil demon from her torn away.",
            "tokens": [
              { "word": "Dämon", "lemma": "Dämon", "pos": "noun", "meaning": "demon / fiend" },
              { "word": "entrissen", "lemma": "entreißen", "pos": "verb", "meaning": "snatched away / torn from", "notes": "Takes dative of person deprived 'ihr'." }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c9",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s4_pre_c9_l1",
            "original": "Entrissen? – O ihr Götter! – sagt, wie konnte das geschehen?",
            "literal": "Torn away? – O you gods! – Say, how could that happen?",
            "tokens": [
              { "word": "geschehen", "lemma": "geschehen", "pos": "verb", "meaning": "happen / occur" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c10",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c10_l1",
            "original": "Sie saß an einem schönen Mayentage ganz allein in dem alles belebenden Zipressenwäldchen, welches immer ihr Lieblingsaufenthalt war. – Der Bösewicht schlich unbemerkt hinein –",
            "literal": "She sat on a fair May day all alone in the all-enlivening cypress grove, which always her favorite haunt was. – The villain crept unnoticed inside –",
            "tokens": [
              { "word": "Zipressenwäldchen", "lemma": "Zypressenwäldchen", "pos": "noun", "meaning": "cypress grove" },
              { "word": "Lieblingsaufenthalt", "lemma": "Lieblingsaufenthalt", "pos": "noun", "meaning": "favorite retreat / haunt" },
              { "word": "Bösewicht", "lemma": "Bösewicht", "pos": "noun", "meaning": "villain / rogue" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c11",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c11_l1",
            "original": "Belauschte sie, und –",
            "literal": "Spied upon her, and –",
            "tokens": [
              { "word": "Belauschte", "lemma": "belauschen", "pos": "verb", "meaning": "eavesdropped / spied upon" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c12",
        "speaker": "Third Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c12_l1",
            "original": "Er hat nebst seinem bösen Herzen auch noch die Macht, sich in jede erdenkliche Gestalt zu verwandeln; auf solche Weise hat er auch Pamina –",
            "literal": "He has besides his evil heart also still the power, himself into every conceivable shape to transform; in such manner has he also Pamina [abducted] –",
            "tokens": [
              { "word": "erdenkliche", "lemma": "erdenklich", "pos": "adjective", "meaning": "conceivable / imaginable" },
              { "word": "Gestalt", "lemma": "Gestalt", "pos": "noun", "meaning": "shape / form" },
              { "word": "verwandeln", "lemma": "verwandeln", "pos": "verb", "meaning": "transform" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c13",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c13_l1",
            "original": "Dieß ist der Name der königlichen Tochter, so ihr anbetet.",
            "literal": "This is the name of the royal daughter, as you adore.",
            "tokens": [
              { "word": "königlichen", "lemma": "königlich", "pos": "adjective", "meaning": "royal" },
              { "word": "anbetet", "lemma": "anbeten", "pos": "verb", "meaning": "adore / worship" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c14",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s4_pre_c14_l1",
            "original": "O Pamina! du mir entrissen – du in der Gewalt eines üppigen Bösewichts! – bist vieleicht in diesem Augenblicke – schrecklicher Gedanke!",
            "literal": "O Pamina! You from me torn – you in the power of a voluptuous villain! – Are perhaps in this moment – terrible thought!",
            "tokens": [
              { "word": "Gewalt", "lemma": "Gewalt", "pos": "noun", "meaning": "power / clutches" },
              { "word": "üppigen", "lemma": "üppig", "pos": "adjective", "meaning": "lascivious / voluptuous / insolent" },
              { "word": "Augenblicke", "lemma": "Augenblick", "pos": "noun", "meaning": "moment" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c15",
        "speaker": "Three Ladies",
        "lines": [
          {
            "id": "a1_s4_pre_c15_l1",
            "original": "Schweig, Jüngling! –",
            "literal": "Be silent, youth! –",
            "tokens": [
              { "word": "Schweig", "lemma": "schweigen", "pos": "verb", "meaning": "be silent" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c16",
        "speaker": "First Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c16_l1",
            "original": "Lästere der holden Schönheit Tugend nicht! – Trotz aller Pein, so die Unschuld duldet, ist sie sich immer gleich. – Weder Zwang, noch Schmeicheley ist vermögend, sie zum Wege des Lasters zu verführen.",
            "literal": "Blaspheme of lovely beauty's virtue not! – Despite all pain, as innocence endures, is she to herself always true. – Neither force, nor flattery is capable, her to the path of vice to seduce.",
            "tokens": [
              { "word": "Lästere", "lemma": "lästern", "pos": "verb", "meaning": "slander / blaspheme" },
              { "word": "Tugend", "lemma": "Tugend", "pos": "noun", "meaning": "virtue" },
              { "word": "Unschuld", "lemma": "Unschuld", "pos": "noun", "meaning": "innocence" },
              { "word": "Schmeicheley", "lemma": "Schmeichelei", "pos": "noun", "meaning": "flattery" },
              { "word": "Laster", "lemma": "Laster", "pos": "noun", "meaning": "vice" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c17",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s4_pre_c17_l1",
            "original": "O sagt, Mädchen! sagt, wo ist des Tyrannen Aufenthalt?",
            "literal": "O say, maidens! Say, where is the tyrant's abode?",
            "tokens": [
              { "word": "Tyrannen", "lemma": "Tyrann", "pos": "noun", "meaning": "tyrant's", "notes": "Genitive singular weak masculine." },
              { "word": "Aufenthalt", "lemma": "Aufenthalt", "pos": "noun", "meaning": "abode / residence" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c18",
        "speaker": "Second Lady",
        "lines": [
          {
            "id": "a1_s4_pre_c18_l1",
            "original": "Sehr nahe an unsern Bergen lebt er in einem angenehmen und reitzenden Thale. – Seine Burg ist prachtvoll, und sorgsam bewacht.",
            "literal": "Very close to our mountains lives he in a pleasant and charming valley. – His castle is splendid, and carefully guarded.",
            "tokens": [
              { "word": "Burg", "lemma": "Burg", "pos": "noun", "meaning": "castle / fortress" },
              { "word": "prachtvoll", "lemma": "prachtvoll", "pos": "adjective", "meaning": "splendid / magnificent" },
              { "word": "bewacht", "lemma": "bewachen", "pos": "verb", "meaning": "guarded" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c19",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a1_s4_pre_c19_l1",
            "original": "Kommt, Mädchen! führt mich! – Pamina sey gerettet! – Der Bösewicht falle von meinem Arm; das schwör ich bey meiner Liebe, bey meinem Herzen! – Ihr Götter! was ist das?",
            "literal": "Come, maidens! Lead me! – Pamina be saved! – The villain fall by my arm; that swear I by my love, by my heart! – You gods! What is that?",
            "tokens": [
              { "word": "führt", "lemma": "führen", "pos": "verb", "meaning": "lead" },
              { "word": "schwör", "lemma": "schwören", "pos": "verb", "meaning": "swear" }
            ],
            "grammarNote": "A sudden violent chord resounds in the orchestra announcing the arrival of the Queen of the Night."
          }
        ]
      },
      {
        "id": "a1_s4_pre_c20",
        "speaker": "Three Ladies",
        "lines": [
          {
            "id": "a1_s4_pre_c20_l1",
            "original": "Fasse dich!",
            "literal": "Compose yourself!",
            "tokens": [
              { "word": "Fasse dich", "lemma": "sich fassen", "pos": "verb", "meaning": "compose yourself / keep calm" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c21",
        "speaker": "First Lady",
        "stageDirection": "Donner",
        "stageDirectionTranslation": "Thunder",
        "lines": [
          {
            "id": "a1_s4_pre_c21_l1",
            "original": "Es verkündigt die Ankunft unserer Königinn.",
            "literal": "It announces the arrival of our Queen.",
            "tokens": [
              { "word": "verkündigt", "lemma": "verkündigen", "pos": "verb", "meaning": "announces / proclaims" },
              { "word": "Ankunft", "lemma": "Ankunft", "pos": "noun", "meaning": "arrival" }
            ]
          }
        ]
      },
      {
        "id": "a1_s4_pre_c22",
        "speaker": "Three Ladies",
        "stageDirection": "dreimaliger Donner",
        "stageDirectionTranslation": "triple peel of thunder",
        "lines": [
          {
            "id": "a1_s4_pre_c22_l1",
            "original": "Sie kommt! – Sie kommt! – Sie kommt! –",
            "literal": "She comes! – She comes! – She comes! –",
            "tokens": [
              { "word": "kommt", "lemma": "kommen", "pos": "verb", "meaning": "comes" }
            ],
            "grammarNote": "The mountains part with roaring thunder as the Queen of the Night appears on a starry throne for her grand entrance (Scene 4: 'O zitt're nicht')."
          }
        ]
      }
    ]
  },
  {
    "section": "a1_s5_pre",
    "act": 1,
    "scene": 5,
    "position": "pre",
    "cues": [
      {
        "id": "a1_s5_pre_c1",
        "speaker": "Tamino",
        "stageDirection": "nach einer Pause; das Theater verwandelt sich wieder so, wie es vorher war",
        "stageDirectionTranslation": "after a pause; the stage transforms back to how it was before",
        "pieceTitle": "Dialog",
        "lines": [
          {
            "id": "a1_s5_pre_c1_l1",
            "original": "Ists denn auch Wirklichkeit, was ich sah? oder betäubten mich meine Sinnen?",
            "literal": "Is it then also reality, what I saw? Or stunned me my senses?",
            "tokens": [
              { "word": "Wirklichkeit", "lemma": "Wirklichkeit", "pos": "noun", "meaning": "reality / truth" },
              { "word": "sah", "lemma": "sehen", "pos": "verb", "meaning": "saw" },
              { "word": "betäubten", "lemma": "betäuben", "pos": "verb", "meaning": "deafened / stunned / numbed" },
              { "word": "Sinnen", "lemma": "Sinn", "pos": "noun", "meaning": "senses", "notes": "Archaic plural of Sinn." }
            ]
          },
          {
            "id": "a1_s5_pre_c1_l2",
            "original": "O ihr guten Götter täuscht mich nicht! oder ich unterliege eurer Prüfung.",
            "literal": "O you good gods deceive me not! Or I succumb to your trial.",
            "tokens": [
              { "word": "täuscht", "lemma": "täuschen", "pos": "verb", "meaning": "deceive / delude" },
              { "word": "unterliege", "lemma": "unterliegen", "pos": "verb", "meaning": "succumb to / fail", "notes": "Takes dative." },
              { "word": "Prüfung", "lemma": "Prüfung", "pos": "noun", "meaning": "trial / ordeal / testing" }
            ]
          },
          {
            "id": "a1_s5_pre_c1_l3",
            "original": "Schützet meinen Arm, stählt meinen Muth, und Taminos Herz wird ewigen Dank euch entgegen schlagen.",
            "literal": "Protect my arm, steel my courage, and Tamino's heart will eternal thanks to you counter beat.",
            "tokens": [
              { "word": "Schützet", "lemma": "schützen", "pos": "verb", "meaning": "protect" },
              { "word": "stählt", "lemma": "stählen", "pos": "verb", "meaning": "steel / temper" },
              { "word": "ewigen Dank", "lemma": "Dank", "pos": "noun", "meaning": "eternal gratitude" },
              { "word": "entgegenschlagen", "lemma": "entgegenschlagen", "pos": "verb", "meaning": "beat in gratitude toward" }
            ],
            "grammarNote": "Tamino attempts to depart on his rescue mission, but Papageno steps in his path, pointing helplessly to his locked mouth, leading into the Quintet 'Hm! hm! hm!'."
          }
        ]
      }
    ]
  }
]

with open("scripts/zauberfloete_batch1_curated.json", "w", encoding="utf-8") as f:
    json.dump(batch1_curated, f, ensure_ascii=False, indent=2)

print("Saved scripts/zauberfloete_batch1_curated.json successfully!")

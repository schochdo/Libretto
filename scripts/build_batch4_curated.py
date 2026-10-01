#!/usr/bin/env python3
# coding: utf-8

import json
import re

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun',
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

batch4_data = [
  {
    "section": "a2_s7_pre",
    "act": 2,
    "scene": 7,
    "position": "pre",
    "cues": [
      {
        "id": "a2_s7_pre_c1",
        "speaker": "Speaker",
        "stageDirection": "Das Theater verwandelt sich in eine Halle, wo das Flugwerk gehen kann. Das Flugwerk ist mit Rosen und Blumen umgeben, wo sich sodann eine Thüre öffnet. Tamino und Papageno werden ohne Säcke, von den zwey Priestern herein geführt. Ganz vorne sind zwey Rasenbänke.",
        "stageDirectionTranslation": "The stage transforms into a hall where the flying apparatus can operate. The flying apparatus is surrounded with roses and flowers, where a door then opens. Tamino and Papageno are led in without sacks by the two Priests. Right at the front are two grassy banks.",
        "lines": [
          {
            "id": "a2_s7_pre_c1_l1",
            "original": "Hier seyd ihr euch beyde allein überlassen.",
            "literal": "Here are you two [Tamino and Papageno] left to-yourselves alone.",
            "tokens": [
              { "word": "Hier", "lemma": "hier", "pos": "adverb", "meaning": "here" },
              { "word": "seyd", "lemma": "sein", "pos": "verb", "meaning": "are", "notes": "Archaic spelling of 'seid' (2nd pers. pl.)." },
              { "word": "ihr", "lemma": "ihr", "pos": "pronoun", "meaning": "you (plural)" },
              { "word": "euch", "lemma": "euch", "pos": "pronoun", "meaning": "to yourselves / each other" },
              { "word": "beyde", "lemma": "beide", "pos": "pronoun", "meaning": "both / the two of you", "notes": "Archaic spelling of 'beide'." },
              { "word": "allein", "lemma": "allein", "pos": "adverb", "meaning": "alone" },
              { "word": "überlassen", "lemma": "überlassen", "pos": "verb", "meaning": "abandoned / left" }
            ],
            "grammarNote": "Reflexive dative construction: 'sich überlassen sein' (to be left to oneself). Archaic spelling 'seyd' and 'beyde'."
          },
          {
            "id": "a2_s7_pre_c1_l2",
            "original": "Sobald die röchelnde Posaune tönt, dann nehmt ihr euren Weg dahin.",
            "literal": "As-soon-as the rattling trombone sounds, then take you [Tamino and Papageno] your way thither.",
            "tokens": [
              { "word": "Sobald", "lemma": "sobald", "pos": "conjunction", "meaning": "as soon as" },
              { "word": "die", "lemma": "der", "pos": "particle", "meaning": "the" },
              { "word": "röchelnde", "lemma": "röchelnd", "pos": "adjective", "meaning": "rattling / deep-resounding" },
              { "word": "Posaune", "lemma": "Posaune", "pos": "noun", "meaning": "trombone" },
              { "word": "tönt", "lemma": "tönen", "pos": "verb", "meaning": "sounds / rings out" },
              { "word": "dann", "lemma": "dann", "pos": "adverb", "meaning": "then" },
              { "word": "nehmt", "lemma": "nehmen", "pos": "verb", "meaning": "take (imperative/indicative plural)" },
              { "word": "ihr", "lemma": "ihr", "pos": "pronoun", "meaning": "you" },
              { "word": "euren", "lemma": "euer", "pos": "pronoun", "meaning": "your" },
              { "word": "Weg", "lemma": "Weg", "pos": "noun", "meaning": "way / path" },
              { "word": "dahin", "lemma": "dahin", "pos": "adverb", "meaning": "thither / in that direction" }
            ],
            "grammarNote": "Subordinate temporal clause introduced by 'sobald', with verb-final 'tönt', followed by main clause with correlative 'dann'."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c2",
        "speaker": "Speaker",
        "stageDirection": "Ab.",
        "stageDirectionTranslation": "Exit.",
        "lines": [
          {
            "id": "a2_s7_pre_c2_l1",
            "original": "Prinz, lebt wohl! Wir sehen uns, eh' ihr ganz am Ziele seyd.",
            "literal": "Prince [Tamino], fare well! We [the Priests] see each-other, before you are entirely at-the goal.",
            "tokens": [
              { "word": "Prinz", "lemma": "Prinz", "pos": "noun", "meaning": "prince" },
              { "word": "lebt wohl", "lemma": "leben wohl", "pos": "idiom", "meaning": "farewell / live well" },
              { "word": "Wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "sehen", "lemma": "sehen", "pos": "verb", "meaning": "see" },
              { "word": "uns", "lemma": "uns", "pos": "pronoun", "meaning": "each other / ourselves" },
              { "word": "eh'", "lemma": "ehe", "pos": "conjunction", "meaning": "before / ere", "notes": "Apocope of 'ehe'." },
              { "word": "ihr", "lemma": "ihr", "pos": "pronoun", "meaning": "you (plural)" },
              { "word": "ganz", "lemma": "ganz", "pos": "adverb", "meaning": "completely / entirely" },
              { "word": "am Ziele", "lemma": "Ziel", "pos": "noun", "meaning": "at the goal (an + dem)", "notes": "Dative neuter with archaic dative -e." },
              { "word": "seyd", "lemma": "sein", "pos": "verb", "meaning": "are" }
            ],
            "grammarNote": "Archaic spelling 'seyd' and apocopated conjunction 'eh'' introducing the temporal subordinate clause."
          },
          {
            "id": "a2_s7_pre_c2_l2",
            "original": "Noch einmal, vergeßt das Wort nicht: Schweigen.",
            "literal": "Once more, forget [Tamino and Papageno] the word not: Silence.",
            "tokens": [
              { "word": "Noch einmal", "lemma": "noch einmal", "pos": "idiom", "meaning": "once more / again" },
              { "word": "vergeßt", "lemma": "vergessen", "pos": "verb", "meaning": "forget (imperative plural)" },
              { "word": "das Wort", "lemma": "Wort", "pos": "noun", "meaning": "the word" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" },
              { "word": "Schweigen", "lemma": "Schweigen", "pos": "noun", "meaning": "silence / keeping silent" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c3",
        "speaker": "Second Priest",
        "stageDirection": "Ab.",
        "stageDirectionTranslation": "Exit.",
        "lines": [
          {
            "id": "a2_s7_pre_c3_l1",
            "original": "Papageno, wer an diesem Ort sein Stillschweigen bricht, den strafen die Götter durch Donner und Blitz.",
            "literal": "Papageno, whoever in this place his silence breaks, him punish the gods by thunder and lightning.",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" },
              { "word": "wer", "lemma": "wer", "pos": "pronoun", "meaning": "whoever / he who" },
              { "word": "an diesem Ort", "lemma": "Ort", "pos": "noun", "meaning": "in this place (dative masculine)" },
              { "word": "sein", "lemma": "sein", "pos": "pronoun", "meaning": "his" },
              { "word": "Stillschweigen", "lemma": "Stillschweigen", "pos": "noun", "meaning": "taciturnity / silence" },
              { "word": "bricht", "lemma": "brechen", "pos": "verb", "meaning": "breaks" },
              { "word": "den", "lemma": "der", "pos": "pronoun", "meaning": "him (resumptive demonstrative pronoun in accusative)" },
              { "word": "strafen", "lemma": "strafen", "pos": "verb", "meaning": "punish" },
              { "word": "die Götter", "lemma": "Gott", "pos": "noun", "meaning": "the gods (nominative plural subject)" },
              { "word": "durch", "lemma": "durch", "pos": "preposition", "meaning": "by / through" },
              { "word": "Donner und Blitz", "lemma": "Donner und Blitz", "pos": "idiom", "meaning": "thunder and lightning" }
            ],
            "grammarNote": "Correlative conditional sentence: relative clause introduced by 'wer' matched by accusative demonstrative 'den' in the main clause ('wer... den strafen...')."
          },
          {
            "id": "a2_s7_pre_c3_l2",
            "original": "Leb wohl!",
            "literal": "Fare well!",
            "tokens": [
              { "word": "Leb wohl", "lemma": "leben wohl", "pos": "idiom", "meaning": "farewell / live well (singular imperative)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c4",
        "speaker": "Papageno",
        "stageDirection": "Tamino setzt sich auf eine Rasenbank. Papageno nach einer Pause.",
        "stageDirectionTranslation": "Tamino sits down on a grassy bank. Papageno after a pause.",
        "lines": [
          {
            "id": "a2_s7_pre_c4_l1",
            "original": "Tamino!",
            "literal": "Tamino!",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c5",
        "speaker": "Tamino",
        "stageDirection": "verweisend",
        "stageDirectionTranslation": "reproachfully",
        "lines": [
          {
            "id": "a2_s7_pre_c5_l1",
            "original": "St!",
            "literal": "Hush!",
            "tokens": [
              { "word": "St", "lemma": "st", "pos": "interjection", "meaning": "hush / shh" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c6",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c6_l1",
            "original": "Das ist ein lustiges Leben! –",
            "literal": "That is a merry life! –",
            "tokens": [
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "ein", "lemma": "ein", "pos": "particle", "meaning": "a" },
              { "word": "lustiges", "lemma": "lustig", "pos": "adjective", "meaning": "merry / jolly (ironic)" },
              { "word": "Leben", "lemma": "Leben", "pos": "noun", "meaning": "life" }
            ],
            "grammarNote": "Ironic exclamation: Papageno uses antiphrasis, calling his silent confinement a 'lustiges Leben'."
          },
          {
            "id": "a2_s7_pre_c6_l2",
            "original": "Wär' ich lieber in meiner Strohhütte, oder im Walde, so hört ich doch manchmahl einen Vogel pfeifen.",
            "literal": "Were I rather in my straw-hut, or in-the forest, so would-hear I at-least sometimes a bird whistling.",
            "tokens": [
              { "word": "Wär'", "lemma": "sein", "pos": "verb", "meaning": "were (subjunctive II of sein)", "notes": "Apocope of 'wäre'." },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "lieber", "lemma": "gern", "pos": "adverb", "meaning": "rather / preferably" },
              { "word": "in meiner Strohhütte", "lemma": "Strohhütte", "pos": "noun", "meaning": "in my straw hut (dative feminine)" },
              { "word": "oder", "lemma": "oder", "pos": "conjunction", "meaning": "or" },
              { "word": "im Walde", "lemma": "Wald", "pos": "noun", "meaning": "in the forest (in + dem)" },
              { "word": "so", "lemma": "so", "pos": "adverb", "meaning": "so / then" },
              { "word": "hört'", "lemma": "hören", "pos": "verb", "meaning": "would hear (subjunctive II)", "notes": "Archaic un-umlauted subjunctive form for 'hörte'." },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "doch", "lemma": "doch", "pos": "particle", "meaning": "at least / surely" },
              { "word": "manchmahl", "lemma": "manchmal", "pos": "adverb", "meaning": "sometimes", "notes": "Archaic spelling of 'manchmal'." },
              { "word": "einen Vogel", "lemma": "Vogel", "pos": "noun", "meaning": "a bird (accusative masculine)" },
              { "word": "pfeifen", "lemma": "pfeifen", "pos": "verb", "meaning": "whistling / piping (infinitive with accusative object)" }
            ],
            "grammarNote": "Unreal conditional structure with verb-first protasis ('Wär' ich...'). Accusativus cum infinitivo: 'einen Vogel pfeifen hören'."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c7",
        "speaker": "Tamino",
        "stageDirection": "verweisend",
        "stageDirectionTranslation": "reproachfully",
        "lines": [
          {
            "id": "a2_s7_pre_c7_l1",
            "original": "St!",
            "literal": "Hush!",
            "tokens": [
              { "word": "St", "lemma": "st", "pos": "interjection", "meaning": "hush / silence" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c8",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c8_l1",
            "original": "Mit mir selbst werd' ich wohl sprechen dürfen;",
            "literal": "With myself will I surely be-allowed to-speak;",
            "tokens": [
              { "word": "Mit mir selbst", "lemma": "mir selbst", "pos": "pronoun", "meaning": "with myself" },
              { "word": "werd'", "lemma": "werden", "pos": "verb", "meaning": "shall / will" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "wohl", "lemma": "wohl", "pos": "particle", "meaning": "surely / presumably" },
              { "word": "sprechen", "lemma": "sprechen", "pos": "verb", "meaning": "to speak" },
              { "word": "dürfen", "lemma": "dürfen", "pos": "verb", "meaning": "to be permitted (modal verb)" }
            ],
            "grammarNote": "Future tense of modal verb with double infinitive ('sprechen dürfen')."
          },
          {
            "id": "a2_s7_pre_c8_l2",
            "original": "und auch wir zwey können zusammen sprechen, wir sind ja Männer.",
            "literal": "and also we two [Tamino and Papageno] can together speak, we are after-all men.",
            "tokens": [
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "wir zwey", "lemma": "wir beide", "pos": "pronoun", "meaning": "we two" },
              { "word": "können", "lemma": "können", "pos": "verb", "meaning": "can / are able" },
              { "word": "zusammen", "lemma": "zusammen", "pos": "adverb", "meaning": "together" },
              { "word": "sprechen", "lemma": "sprechen", "pos": "verb", "meaning": "speak" },
              { "word": "wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "sind", "lemma": "sein", "pos": "verb", "meaning": "are" },
              { "word": "ja", "lemma": "ja", "pos": "particle", "meaning": "after all / surely (modal particle)" },
              { "word": "Männer", "lemma": "Mann", "pos": "noun", "meaning": "men (predicate nominative plural)" }
            ],
            "grammarNote": "Modal particle 'ja' indicates shared obvious knowledge: 'we are men after all'."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c9",
        "speaker": "Tamino",
        "stageDirection": "verweisend",
        "stageDirectionTranslation": "reproachfully",
        "lines": [
          {
            "id": "a2_s7_pre_c9_l1",
            "original": "St!",
            "literal": "Hush!",
            "tokens": [
              { "word": "St", "lemma": "st", "pos": "interjection", "meaning": "hush" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c10",
        "speaker": "Papageno",
        "stageDirection": "singt",
        "stageDirectionTranslation": "sings",
        "lines": [
          {
            "id": "a2_s7_pre_c10_l1",
            "original": "La la la – la la la!",
            "literal": "La la la – la la la!",
            "tokens": [
              { "word": "La la la", "lemma": "la", "pos": "interjection", "meaning": "singing syllables" }
            ]
          },
          {
            "id": "a2_s7_pre_c10_l2",
            "original": "Nicht einmal einen Tropfen Wasser bekommt man bey diesen Leuten; viel weniger sonst was. –",
            "literal": "Not even a drop of-water gets one from these people; much less anything else. –",
            "tokens": [
              { "word": "Nicht einmal", "lemma": "nicht einmal", "pos": "adverb", "meaning": "not even" },
              { "word": "einen Tropfen", "lemma": "Tropfen", "pos": "noun", "meaning": "a drop (accusative masculine)" },
              { "word": "Wasser", "lemma": "Wasser", "pos": "noun", "meaning": "water (partitive apposition)" },
              { "word": "bekommt", "lemma": "bekommen", "pos": "verb", "meaning": "receives / gets" },
              { "word": "man", "lemma": "man", "pos": "pronoun", "meaning": "one / someone (indefinite pronoun)" },
              { "word": "bey diesen Leuten", "lemma": "Leute", "pos": "noun", "meaning": "from/among these people (dative plural)" },
              { "word": "viel weniger", "lemma": "viel weniger", "pos": "adverb", "meaning": "much less" },
              { "word": "sonst was", "lemma": "sonst etwas", "pos": "pronoun", "meaning": "anything else (colloquial contraction of sonst etwas)" }
            ],
            "grammarNote": "Colloquial Viennese phrasing 'viel weniger sonst was' (let alone anything else)."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c11",
        "speaker": "Papageno",
        "stageDirection": "Ein altes häßliches Weib kommt aus der Versenkung, hält auf einer Tasse einen großen Becher mit Wasser. Papageno sieht sie lang an.",
        "stageDirectionTranslation": "An ugly old woman rises from the trapdoor, holding on a tray a large cup of water. Papageno looks at her for a long time.",
        "lines": [
          {
            "id": "a2_s7_pre_c11_l1",
            "original": "Ist das für mich?",
            "literal": "Is that for me [Papageno]?",
            "tokens": [
              { "word": "Ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "für mich", "lemma": "für mich", "pos": "pronoun", "meaning": "for me (accusative prepositional phrase)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c12",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c12_l1",
            "original": "Ja, mein Engel!",
            "literal": "Yes, my angel!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel (term of endearment)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c13",
        "speaker": "Papageno",
        "stageDirection": "sieht sie wieder an, trinkt",
        "stageDirectionTranslation": "looks at her again, drinks",
        "lines": [
          {
            "id": "a2_s7_pre_c13_l1",
            "original": "Nicht mehr und nicht weniger als Wasser. –",
            "literal": "Not more and not less than water. –",
            "tokens": [
              { "word": "Nicht mehr und nicht weniger", "lemma": "nicht mehr und nicht weniger", "pos": "idiom", "meaning": "no more and no less" },
              { "word": "als", "lemma": "als", "pos": "conjunction", "meaning": "than" },
              { "word": "Wasser", "lemma": "Wasser", "pos": "noun", "meaning": "water" }
            ]
          },
          {
            "id": "a2_s7_pre_c13_l2",
            "original": "Sag du mir, du unbekannte Schöne! werden alle fremde Gäste auf diese Art bewirthet?",
            "literal": "Tell [you] me, you unknown beauty! Are all foreign guests entertained in this manner?",
            "tokens": [
              { "word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "tell / say (imperative)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)" },
              { "word": "du unbekannte Schöne", "lemma": "Schöne", "pos": "noun", "meaning": "you unknown beauty (vocative nominalized adjective)" },
              { "word": "werden", "lemma": "werden", "pos": "verb", "meaning": "are (passive auxiliary)" },
              { "word": "alle fremde Gäste", "lemma": "Gast", "pos": "noun", "meaning": "all foreign guests (nominative plural)" },
              { "word": "auf diese Art", "lemma": "Art", "pos": "idiom", "meaning": "in this way / fashion" },
              { "word": "bewirthet", "lemma": "bewirten", "pos": "verb", "meaning": "entertained / hosted", "notes": "Archaic spelling of 'bewirtet'." }
            ],
            "grammarNote": "Passive voice question: 'werden... bewirthet' with archaic 'th' orthography."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c14",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c14_l1",
            "original": "Freylich mein Engel!",
            "literal": "Certainly my angel!",
            "tokens": [
              { "word": "Freylich", "lemma": "freilich", "pos": "adverb", "meaning": "certainly / of course", "notes": "Archaic spelling of 'freilich'." },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c15",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c15_l1",
            "original": "So, so! – Auf die Art werden die Fremden auch nicht gar zu häufig kommen. –",
            "literal": "So, so! – In that manner will the foreigners also not all too frequently come. –",
            "tokens": [
              { "word": "So, so", "lemma": "so", "pos": "interjection", "meaning": "well, well / so, so" },
              { "word": "Auf die Art", "lemma": "auf die Art", "pos": "idiom", "meaning": "in that way" },
              { "word": "werden", "lemma": "werden", "pos": "verb", "meaning": "will (future auxiliary)" },
              { "word": "die Fremden", "lemma": "Fremde", "pos": "noun", "meaning": "the strangers / foreigners" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "nicht gar zu häufig", "lemma": "gar zu", "pos": "adverb", "meaning": "not all too frequently" },
              { "word": "kommen", "lemma": "kommen", "pos": "verb", "meaning": "come" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c16",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c16_l1",
            "original": "Sehr wenig.",
            "literal": "Very little.",
            "tokens": [
              { "word": "Sehr wenig", "lemma": "sehr wenig", "pos": "adverb", "meaning": "very little / very rarely" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c17",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c17_l1",
            "original": "Kann mirs denken. – Geh Alte, setze dich her zu mir, mir ist die Zeit verdammt lange. –",
            "literal": "[I] can imagine it to-myself. – Come old-woman [Papagena], sit [yourself] down here by me, to-me is the time damnably long. –",
            "tokens": [
              { "word": "Kann mirs denken", "lemma": "sich denken", "pos": "idiom", "meaning": "can imagine it (mirs = mir es)" },
              { "word": "Geh", "lemma": "gehen", "pos": "verb", "meaning": "go / come (imperative)" },
              { "word": "Alte", "lemma": "Alte", "pos": "noun", "meaning": "old woman (vocative)" },
              { "word": "setze dich her", "lemma": "hersetzen", "pos": "verb", "meaning": "sit down here (reflexive imperative)" },
              { "word": "zu mir", "lemma": "zu mir", "pos": "pronoun", "meaning": "next to me" },
              { "word": "mir ist die Zeit verdammt lange", "lemma": "Zeit lang werden", "pos": "idiom", "meaning": "time drags damnably for me" }
            ],
            "grammarNote": "Viennese theatrical idiom: 'mir ist die Zeit lang' (time drags / I am thoroughly bored), with vulgar intensifier 'verdammt'."
          },
          {
            "id": "a2_s7_pre_c17_l2",
            "original": "Sag du mir, wie alt bist du denn?",
            "literal": "Tell [you] me, how old are you [the Old Woman] then?",
            "tokens": [
              { "word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "tell" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "wie alt", "lemma": "wie alt", "pos": "adjective", "meaning": "how old" },
              { "word": "bist", "lemma": "sein", "pos": "verb", "meaning": "are" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then / ever (modal particle)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c18",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c18_l1",
            "original": "Wie alt?",
            "literal": "How old?",
            "tokens": [
              { "word": "Wie alt", "lemma": "wie alt", "pos": "adjective", "meaning": "how old" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c19",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c19_l1",
            "original": "Ja!",
            "literal": "Yes!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c20",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c20_l1",
            "original": "18. Jahr, und 2. Minuten.",
            "literal": "18 years, and 2 minutes.",
            "tokens": [
              { "word": "18. Jahr", "lemma": "Jahr", "pos": "noun", "meaning": "18 years", "notes": "Older style of writing numerals with ordinal periods or cardinals." },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "2. Minuten", "lemma": "Minute", "pos": "noun", "meaning": "2 minutes" }
            ],
            "grammarNote": "Comic gag: the ancient hag claims to be eighteen years and two minutes old."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c21",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c21_l1",
            "original": "18. Jahr, und 2. Minuten?",
            "literal": "18 years, and 2 minutes?",
            "tokens": [
              { "word": "18. Jahr", "lemma": "Jahr", "pos": "noun", "meaning": "18 years" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "2. Minuten", "lemma": "Minute", "pos": "noun", "meaning": "2 minutes" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c22",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c22_l1",
            "original": "Ja!",
            "literal": "Yes!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c23",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c23_l1",
            "original": "Ha ha ha! – Ey du junger Engel! Hast du auch einen Geliebten?",
            "literal": "Ha ha ha! – Hey you young angel! Have you [the Old Woman] also a lover?",
            "tokens": [
              { "word": "Ha ha ha", "lemma": "ha ha ha", "pos": "interjection", "meaning": "laughter" },
              { "word": "Ey", "lemma": "ei", "pos": "interjection", "meaning": "hey / ah", "notes": "Archaic spelling of 'ei'." },
              { "word": "du junger Engel", "lemma": "Engel", "pos": "noun", "meaning": "you young angel (sarcastic)" },
              { "word": "Hast", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "einen Geliebten", "lemma": "Geliebte", "pos": "noun", "meaning": "a lover (accusative masculine)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c24",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c24_l1",
            "original": "J' freylich!",
            "literal": "Yes indeed!",
            "tokens": [
              { "word": "J' freylich", "lemma": "ja freilich", "pos": "idiom", "meaning": "yes indeed / of course", "notes": "Viennese colloquial contraction 'J'freylich' for 'Ja, freilich'." }
            ],
            "grammarNote": "Viennese dialect contraction 'J'freylich' representing colloquial Austrian speech."
          }
        ]
      },
      {
        "id": "a2_s7_pre_c25",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c25_l1",
            "original": "Ist er auch so jung wie du?",
            "literal": "Is he [her lover] also as young as you?",
            "tokens": [
              { "word": "Ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "so jung wie du", "lemma": "so jung wie", "pos": "adjective", "meaning": "as young as you" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c26",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c26_l1",
            "original": "Nicht gar, er ist um 10. Jahre älter. –",
            "literal": "Not quite, he [her lover] is by 10 years older. –",
            "tokens": [
              { "word": "Nicht gar", "lemma": "nicht gar", "pos": "adverb", "meaning": "not quite / not altogether" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "um 10. Jahre", "lemma": "Jahr", "pos": "noun", "meaning": "by 10 years" },
              { "word": "älter", "lemma": "alt", "pos": "adjective", "meaning": "older (comparative)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c27",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c27_l1",
            "original": "Um 10. Jahr ist er älter als du? – Das muß eine Liebe seyn! –",
            "literal": "By 10 years is he [her lover] older than you? – That must a love be! –",
            "tokens": [
              { "word": "Um 10. Jahr", "lemma": "Jahr", "pos": "noun", "meaning": "by 10 years" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "älter als du", "lemma": "alt", "pos": "adjective", "meaning": "older than you" },
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "muß", "lemma": "müssen", "pos": "verb", "meaning": "must" },
              { "word": "eine Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "a love" },
              { "word": "seyn", "lemma": "sein", "pos": "verb", "meaning": "be", "notes": "Archaic spelling of 'sein'." }
            ]
          },
          {
            "id": "a2_s7_pre_c27_l2",
            "original": "Wie nennt sich denn dein Liebhaber?",
            "literal": "How calls himself then your lover?",
            "tokens": [
              { "word": "Wie", "lemma": "wie", "pos": "adverb", "meaning": "how / what" },
              { "word": "nennt sich", "lemma": "sich nennen", "pos": "verb", "meaning": "is called / calls himself (reflexive)" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then" },
              { "word": "dein Liebhaber", "lemma": "Liebhaber", "pos": "noun", "meaning": "your lover / suitor" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c28",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c28_l1",
            "original": "Papageno!",
            "literal": "Papageno!",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c29",
        "speaker": "Papageno",
        "stageDirection": "erschrickt, Pause",
        "stageDirectionTranslation": "is startled, pause",
        "lines": [
          {
            "id": "a2_s7_pre_c29_l1",
            "original": "Papageno? – Wo ist er denn dieser Papageno?",
            "literal": "Papageno? – Where is he then, this Papageno?",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" },
              { "word": "Wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then" },
              { "word": "dieser Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "this Papageno" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c30",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c30_l1",
            "original": "Da sitzt er mein Engel!",
            "literal": "There sits he [Papageno], my angel!",
            "tokens": [
              { "word": "Da", "lemma": "da", "pos": "adverb", "meaning": "there" },
              { "word": "sitzt", "lemma": "sitzen", "pos": "verb", "meaning": "sits" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c31",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c31_l1",
            "original": "Ich wär dein Geliebter?",
            "literal": "I [Papageno] would-be your lover?",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "wär'", "lemma": "sein", "pos": "verb", "meaning": "would be (subjunctive II)", "notes": "Apocope of 'wäre'." },
              { "word": "dein Geliebter", "lemma": "Geliebte", "pos": "noun", "meaning": "your lover" }
            ],
            "grammarNote": "Dubitative subjunctive II expressing utter disbelief: 'Ich wär dein Geliebter?'"
          }
        ]
      },
      {
        "id": "a2_s7_pre_c32",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s7_pre_c32_l1",
            "original": "Ja mein Engel!",
            "literal": "Yes my angel!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c33",
        "speaker": "Papageno",
        "stageDirection": "nimmt schnell das Wasser, und spritzt sie ins Gesicht",
        "stageDirectionTranslation": "quickly takes the water and splashes it in her face",
        "lines": [
          {
            "id": "a2_s7_pre_c33_l1",
            "original": "Sag du mir, wie heißt du denn?",
            "literal": "Tell [you] me, what are you named then?",
            "tokens": [
              { "word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "tell" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "wie", "lemma": "wie", "pos": "adverb", "meaning": "how / what" },
              { "word": "heißt", "lemma": "heißen", "pos": "verb", "meaning": "are called" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c34",
        "speaker": "Old Woman",
        "stageDirection": "Starker Donner, die Alte hinkt schnell ab.",
        "stageDirectionTranslation": "Violent thunder; the old woman hobbles quickly away.",
        "lines": [
          {
            "id": "a2_s7_pre_c34_l1",
            "original": "Ich heiße –",
            "literal": "I am called –",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "heiße", "lemma": "heißen", "pos": "verb", "meaning": "am called" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c35",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s7_pre_c35_l1",
            "original": "O weh!",
            "literal": "O woe!",
            "tokens": [
              { "word": "O weh", "lemma": "o weh", "pos": "interjection", "meaning": "oh woe / alas" }
            ]
          }
        ]
      },
      {
        "id": "a2_s7_pre_c36",
        "speaker": "Papageno",
        "stageDirection": "Tamino steht auf, droht ihm mit dem Finger.",
        "stageDirectionTranslation": "Tamino stands up, threatens him with his finger.",
        "lines": [
          {
            "id": "a2_s7_pre_c36_l1",
            "original": "Nun sprech ich kein Wort mehr!",
            "literal": "Now speak I not-a word more!",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now" },
              { "word": "sprech'", "lemma": "sprechen", "pos": "verb", "meaning": "speak" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "kein Wort", "lemma": "Wort", "pos": "noun", "meaning": "no word / not a word" },
              { "word": "mehr", "lemma": "mehr", "pos": "adverb", "meaning": "more / anymore" }
            ],
            "grammarNote": "V2 word order triggered by adverb 'Nun'. Colloquial apocope of 'e' in 'sprech'."
          }
        ]
      }
    ]
  },
  {
    "section": "a2_s8_pre",
    "act": 2,
    "scene": 8,
    "position": "pre",
    "cues": [
      {
        "id": "a2_s8_pre_c1",
        "speaker": "Papageno",
        "stageDirection": "Tamino, Papageno.",
        "stageDirectionTranslation": "Tamino, Papageno.",
        "lines": [
          {
            "id": "a2_s8_pre_c1_l1",
            "original": "Tamino, wollen wir nicht speisen? – –",
            "literal": "Tamino, want we not to-dine? – –",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "wollen", "lemma": "wollen", "pos": "verb", "meaning": "want / wish (modal verb)" },
              { "word": "wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" },
              { "word": "speisen", "lemma": "speisen", "pos": "verb", "meaning": "to dine / eat" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c2",
        "speaker": "Papageno",
        "stageDirection": "Tamino bläst auf seiner Flöte.",
        "stageDirectionTranslation": "Tamino plays on his flute.",
        "lines": [
          {
            "id": "a2_s8_pre_c2_l1",
            "original": "Blase du nur fort auf deiner Flöte, ich will meine Brocken blasen. –",
            "literal": "Blow you just on upon your flute, I will blow my morsels. –",
            "tokens": [
              { "word": "Blase", "lemma": "blasen", "pos": "verb", "meaning": "blow / play (imperative)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "nur", "lemma": "nur", "pos": "particle", "meaning": "just / ahead" },
              { "word": "fort", "lemma": "fort", "pos": "particle", "meaning": "on / away (separable verb prefix)" },
              { "word": "auf deiner Flöte", "lemma": "Flöte", "pos": "noun", "meaning": "on your flute (dative feminine)" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will / want" },
              { "word": "meine Brocken", "lemma": "Brocken", "pos": "noun", "meaning": "my morsels / bites of food" },
              { "word": "blasen", "lemma": "blasen", "pos": "verb", "meaning": "blow / chew (comic pun)" }
            ],
            "grammarNote": "Viennese theatrical comic pun: Papageno humorously contrasts Tamino's flute playing ('auf der Flöte blasen') with his own ravenous stuffing of food ('Brocken blasen')."
          },
          {
            "id": "a2_s8_pre_c2_l2",
            "original": "Herr Sarastro führt eine gute Küche. –",
            "literal": "Lord Sarastro keeps a good kitchen. –",
            "tokens": [
              { "word": "Herr Sarastro", "lemma": "Sarastro", "pos": "noun", "meaning": "Lord Sarastro" },
              { "word": "führt", "lemma": "führen", "pos": "verb", "meaning": "runs / keeps" },
              { "word": "eine gute Küche", "lemma": "Küche", "pos": "noun", "meaning": "a good kitchen / table (accusative feminine)" }
            ],
            "grammarNote": "Idiom 'eine gute Küche führen' = to provide excellent food / hospitality."
          },
          {
            "id": "a2_s8_pre_c2_l3",
            "original": "Auf die Art, ja da will ich schon schweigen, wenn ich immer solche gute Bissen bekomme.",
            "literal": "In that way, yes then will I happily keep-silent, if I always such good morsels receive.",
            "tokens": [
              { "word": "Auf die Art", "lemma": "auf die Art", "pos": "idiom", "meaning": "in that way / under such terms" },
              { "word": "ja da", "lemma": "ja da", "pos": "adverb", "meaning": "yes then" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "schon", "lemma": "schon", "pos": "particle", "meaning": "readily / gladly" },
              { "word": "schweigen", "lemma": "schweigen", "pos": "verb", "meaning": "keep silent" },
              { "word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if / whenever" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "immer", "lemma": "immer", "pos": "adverb", "meaning": "always" },
              { "word": "solche gute Bissen", "lemma": "Bissen", "pos": "noun", "meaning": "such good morsels (accusative plural)" },
              { "word": "bekomme", "lemma": "bekommen", "pos": "verb", "meaning": "receive / get" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c3",
        "speaker": "Papageno",
        "stageDirection": "Er trinkt.",
        "stageDirectionTranslation": "He drinks.",
        "lines": [
          {
            "id": "a2_s8_pre_c3_l1",
            "original": "Nun will ich sehen, ob auch der Keller so gut bestellt ist. –",
            "literal": "Now will I see whether also the cellar is so well provisioned. –",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "sehen", "lemma": "sehen", "pos": "verb", "meaning": "see" },
              { "word": "ob", "lemma": "ob", "pos": "conjunction", "meaning": "whether / if" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "der Keller", "lemma": "Keller", "pos": "noun", "meaning": "the wine cellar" },
              { "word": "so gut bestellt", "lemma": "gut bestellt", "pos": "adjective", "meaning": "so well provisioned / stocked" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" }
            ],
            "grammarNote": "Subordinate interrogative clause introduced by 'ob' with verb-final 'ist'."
          },
          {
            "id": "a2_s8_pre_c3_l2",
            "original": "Ha! – Das ist Götterwein! –",
            "literal": "Ha! – That is wine-of-the-gods! –",
            "tokens": [
              { "word": "Ha", "lemma": "ha", "pos": "interjection", "meaning": "ha / ah" },
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "Götterwein", "lemma": "Götterwein", "pos": "noun", "meaning": "wine of the gods / nectar" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c4",
        "speaker": "Pamina",
        "stageDirection": "Die Flöte schweigt. Pamina tritt freudig auf. Vorige.",
        "stageDirectionTranslation": "The flute falls silent. Pamina enters joyfully. The preceding.",
        "lines": [
          {
            "id": "a2_s8_pre_c4_l1",
            "original": "Du hier? – Gütige Götter! Dank euch, daß ihr mich diesen Weg führtet. –",
            "literal": "You [Tamino] here? – Kind gods! Thanks to-you, that you led me along this way. –",
            "tokens": [
              { "word": "Du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "hier", "lemma": "hier", "pos": "adverb", "meaning": "here" },
              { "word": "Gütige Götter", "lemma": "Gott", "pos": "noun", "meaning": "kind gods (vocative plural)" },
              { "word": "Dank euch", "lemma": "Dank", "pos": "idiom", "meaning": "thanks to you" },
              { "word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "that" },
              { "word": "ihr", "lemma": "ihr", "pos": "pronoun", "meaning": "you (plural)" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "diesen Weg", "lemma": "Weg", "pos": "noun", "meaning": "along this path (accusative of extent)" },
              { "word": "führtet", "lemma": "führen", "pos": "verb", "meaning": "guided / led (past tense 2nd pers. pl.)" }
            ],
            "grammarNote": "Accusative of direction/extent: 'diesen Weg führen'."
          },
          {
            "id": "a2_s8_pre_c4_l2",
            "original": "Ich hörte deine Flöte – und so lief ich pfeilschnell dem Tone nach. –",
            "literal": "I heard your flute – and so ran I swift-as-an-arrow after the tone. –",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "hörte", "lemma": "hören", "pos": "verb", "meaning": "heard" },
              { "word": "deine Flöte", "lemma": "Flöte", "pos": "noun", "meaning": "your flute (accusative feminine)" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "so", "lemma": "so", "pos": "adverb", "meaning": "so" },
              { "word": "lief", "lemma": "laufen", "pos": "verb", "meaning": "ran (past tense)" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "pfeilschnell", "lemma": "pfeilschnell", "pos": "adverb", "meaning": "swift as an arrow" },
              { "word": "dem Tone nach", "lemma": "nachlaufen", "pos": "idiom", "meaning": "after the sound (separable verb nachlaufen + dative)" }
            ],
            "grammarNote": "Separable verb 'dem Ton nachlaufen' governing the dative 'dem Tone' (with archaic dative -e)."
          },
          {
            "id": "a2_s8_pre_c4_l3",
            "original": "Aber du bist traurig? – Sprichst nicht eine Silbe mit deiner Pamina?",
            "literal": "But you [Tamino] are sorrowful? – Speak not a syllable with your Pamina?",
            "tokens": [
              { "word": "Aber", "lemma": "aber", "pos": "conjunction", "meaning": "but" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "bist", "lemma": "sein", "pos": "verb", "meaning": "are" },
              { "word": "traurig", "lemma": "traurig", "pos": "adjective", "meaning": "sad / sorrowful" },
              { "word": "Sprichst", "lemma": "sprechen", "pos": "verb", "meaning": "speak" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" },
              { "word": "eine Silbe", "lemma": "Silbe", "pos": "noun", "meaning": "a syllable" },
              { "word": "mit deiner Pamina", "lemma": "Pamina", "pos": "noun", "meaning": "with your Pamina (dative feminine)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c5",
        "speaker": "Tamino",
        "stageDirection": "seufzt. Ah! Winkt ihr fortzugehen.",
        "stageDirectionTranslation": "sighs. Ah! Waves her to go away.",
        "lines": [
          {
            "id": "a2_s8_pre_c5_l1",
            "original": "Ah!",
            "literal": "Ah!",
            "tokens": [
              { "word": "Ah", "lemma": "ah", "pos": "interjection", "meaning": "ah (sigh of anguish)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c6",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a2_s8_pre_c6_l1",
            "original": "Wie? ich soll dich meiden? liebst du mich nicht mehr?",
            "literal": "How? I [Pamina] am-to avoid you [Tamino]? Love you me no more?",
            "tokens": [
              { "word": "Wie", "lemma": "wie", "pos": "interjection", "meaning": "how / what" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "am to / should" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative)" },
              { "word": "meiden", "lemma": "meiden", "pos": "verb", "meaning": "to avoid / shun" },
              { "word": "liebst", "lemma": "lieben", "pos": "verb", "meaning": "love" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more / no longer" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c7",
        "speaker": "Tamino",
        "stageDirection": "seufzt. Ah! Winkt wieder fort.",
        "stageDirectionTranslation": "sighs. Ah! Waves her away again.",
        "lines": [
          {
            "id": "a2_s8_pre_c7_l1",
            "original": "Ah!",
            "literal": "Ah!",
            "tokens": [
              { "word": "Ah", "lemma": "ah", "pos": "interjection", "meaning": "ah" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c8",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a2_s8_pre_c8_l1",
            "original": "Ich soll fliehen, ohne zu wissen, warum. –",
            "literal": "I am-to flee, without knowing why. –",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "am to" },
              { "word": "fliehen", "lemma": "fliehen", "pos": "verb", "meaning": "flee" },
              { "word": "ohne zu wissen", "lemma": "ohne zu wissen", "pos": "idiom", "meaning": "without knowing" },
              { "word": "warum", "lemma": "warum", "pos": "adverb", "meaning": "why" }
            ],
            "grammarNote": "Infinitival clause introduced by 'ohne zu' expressing lack of knowledge."
          },
          {
            "id": "a2_s8_pre_c8_l2",
            "original": "Tamino, holder Jüngling! hab ich dich beleidigt? – O kränke mein Herz nicht noch mehr. –",
            "literal": "Tamino, noble youth! Have I offended you? – O wound my heart not still more. –",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "holder Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "noble youth (vocative)" },
              { "word": "hab'", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "beleidigt", "lemma": "beleidigen", "pos": "verb", "meaning": "insulted / offended" },
              { "word": "O", "lemma": "o", "pos": "interjection", "meaning": "oh" },
              { "word": "kränke", "lemma": "kränken", "pos": "verb", "meaning": "wound / hurt (imperative)" },
              { "word": "mein Herz", "lemma": "Herz", "pos": "noun", "meaning": "my heart" },
              { "word": "nicht noch mehr", "lemma": "nicht noch mehr", "pos": "adverb", "meaning": "not even more" }
            ]
          },
          {
            "id": "a2_s8_pre_c8_l3",
            "original": "Bey dir such ich Trost – Hülfe – und du kannst mein liebevolles Herz noch mehr kränken? – Liebst du mich nicht mehr?",
            "literal": "With you seek I comfort – help – and you can wound my loving heart even more? – Love you me no more?",
            "tokens": [
              { "word": "Bey dir", "lemma": "bei dir", "pos": "pronoun", "meaning": "with you / from you", "notes": "Archaic spelling 'bey'." },
              { "word": "such'", "lemma": "suchen", "pos": "verb", "meaning": "seek" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "Trost", "lemma": "Trost", "pos": "noun", "meaning": "solace / comfort" },
              { "word": "Hülfe", "lemma": "Hilfe", "pos": "noun", "meaning": "help", "notes": "Archaic spelling of 'Hilfe'." },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "kannst", "lemma": "können", "pos": "verb", "meaning": "can" },
              { "word": "mein liebevolles Herz", "lemma": "Herz", "pos": "noun", "meaning": "my loving heart" },
              { "word": "noch mehr", "lemma": "noch mehr", "pos": "adverb", "meaning": "even more" },
              { "word": "kränken", "lemma": "kränken", "pos": "verb", "meaning": "to grieve / wound" },
              { "word": "Liebst", "lemma": "lieben", "pos": "verb", "meaning": "love" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c9",
        "speaker": "Pamina",
        "stageDirection": "Tamino seufzt.",
        "stageDirectionTranslation": "Tamino sighs.",
        "lines": [
          {
            "id": "a2_s8_pre_c9_l1",
            "original": "Papageno, sage du mir, sag, was ist meinem Freund?",
            "literal": "Papageno, tell you me, say, what is [wrong with] my friend [Tamino]?",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" },
              { "word": "sage", "lemma": "sagen", "pos": "verb", "meaning": "tell" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "sag", "lemma": "sagen", "pos": "verb", "meaning": "say" },
              { "word": "was ist", "lemma": "sein", "pos": "verb", "meaning": "what is (the matter)" },
              { "word": "meinem Freund", "lemma": "Freund", "pos": "noun", "meaning": "with my friend (dative masculine)" }
            ],
            "grammarNote": "Dativus ethicus / dative of concern: 'was ist jemandem' = what is wrong with someone."
          }
        ]
      },
      {
        "id": "a2_s8_pre_c10",
        "speaker": "Pamina",
        "stageDirection": "Papageno hat einen Brocken in dem Mund, hält mit beyden Händen die Speisen zu, winkt fortzugehen.",
        "stageDirectionTranslation": "Papageno has a morsel in his mouth, covers the food with both hands, waves her to go away.",
        "lines": [
          {
            "id": "a2_s8_pre_c10_l1",
            "original": "Wie? auch du? – Erkläre mir wenigstens die Ursache eures Stillschweigens. – –",
            "literal": "How? Also you [Papageno]? – Explain to-me at-least the cause of-your silence. – –",
            "tokens": [
              { "word": "Wie", "lemma": "wie", "pos": "interjection", "meaning": "how / what" },
              { "word": "auch du", "lemma": "auch du", "pos": "pronoun", "meaning": "you too" },
              { "word": "Erkläre", "lemma": "erklären", "pos": "verb", "meaning": "explain (imperative)" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me" },
              { "word": "wenigstens", "lemma": "wenigstens", "pos": "adverb", "meaning": "at least" },
              { "word": "die Ursache", "lemma": "Ursache", "pos": "noun", "meaning": "the cause / reason" },
              { "word": "eures Stillschweigens", "lemma": "Stillschweigen", "pos": "noun", "meaning": "of your silence (genitive neuter)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c11",
        "speaker": "Papageno",
        "stageDirection": "Er deutet ihr fortzugehen.",
        "stageDirectionTranslation": "He gestures to her to go away.",
        "lines": [
          {
            "id": "a2_s8_pre_c11_l1",
            "original": "St!",
            "literal": "Hush!",
            "tokens": [
              { "word": "St", "lemma": "st", "pos": "interjection", "meaning": "hush" }
            ]
          }
        ]
      },
      {
        "id": "a2_s8_pre_c12",
        "speaker": "Pamina",
        "stageDirection": "Pause",
        "stageDirectionTranslation": "Pause",
        "lines": [
          {
            "id": "a2_s8_pre_c12_l1",
            "original": "O das ist mehr als Kränkung – mehr als Tod! –",
            "literal": "O that is more than offense – more than death! –",
            "tokens": [
              { "word": "O", "lemma": "o", "pos": "interjection", "meaning": "oh" },
              { "word": "das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "mehr als", "lemma": "mehr als", "pos": "adverb", "meaning": "more than" },
              { "word": "Kränkung", "lemma": "Kränkung", "pos": "noun", "meaning": "mortification / offense" },
              { "word": "mehr als Tod", "lemma": "Tod", "pos": "noun", "meaning": "more than death" }
            ]
          },
          {
            "id": "a2_s8_pre_c12_l2",
            "original": "Liebster, einziger Tamino! –",
            "literal": "Dearest, only Tamino! –",
            "tokens": [
              { "word": "Liebster", "lemma": "lieb", "pos": "adjective", "meaning": "dearest (superlative)" },
              { "word": "einziger", "lemma": "einzig", "pos": "adjective", "meaning": "only / one and only" },
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" }
            ],
            "grammarNote": "Emotional climax leading directly into the famous G minor aria 'Ach, ich fühl's'."
          }
        ]
      }
    ]
  },
  {
    "section": "a2_s9_pre",
    "act": 2,
    "scene": 9,
    "position": "pre",
    "cues": [
      {
        "id": "a2_s9_pre_c1",
        "speaker": "Papageno",
        "stageDirection": "Tamino, Papageno. Papageno ißt hastig.",
        "stageDirectionTranslation": "Tamino, Papageno. Papageno eats hastily.",
        "lines": [
          {
            "id": "a2_s9_pre_c1_l1",
            "original": "Nicht wahr Tamino, ich kann auch schweigen, wenns seyn muß. –",
            "literal": "Is-it not true, Tamino, I can also keep-silent, when it must be. –",
            "tokens": [
              { "word": "Nicht wahr", "lemma": "nicht wahr", "pos": "idiom", "meaning": "is it not true? / isn't that so?" },
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "kann", "lemma": "können", "pos": "verb", "meaning": "can" },
              { "word": "auch", "lemma": "auch", "pos": "adverb", "meaning": "also" },
              { "word": "schweigen", "lemma": "schweigen", "pos": "verb", "meaning": "keep silent" },
              { "word": "wenns", "lemma": "wenn es", "pos": "conjunction", "meaning": "if it / when it", "notes": "Contraction of 'wenn es'." },
              { "word": "seyn", "lemma": "sein", "pos": "verb", "meaning": "be", "notes": "Archaic spelling of 'sein'." },
              { "word": "muß", "lemma": "müssen", "pos": "verb", "meaning": "must" }
            ]
          },
          {
            "id": "a2_s9_pre_c1_l2",
            "original": "Ja, bey so einem Unternehmen da bin ich Mann. –",
            "literal": "Yes, in such an undertaking there am I a man. –",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "bey so einem Unternehmen", "lemma": "Unternehmen", "pos": "noun", "meaning": "in such an undertaking (dative neuter)" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "there / in that case" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "Mann", "lemma": "Mann", "pos": "noun", "meaning": "a true man / resolute" }
            ],
            "grammarNote": "Idiom 'Mann sein': to show oneself a true man of courage and resolve."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c2",
        "speaker": "Papageno",
        "stageDirection": "Er trinkt.",
        "stageDirectionTranslation": "He drinks.",
        "lines": [
          {
            "id": "a2_s9_pre_c2_l1",
            "original": "Der Herr Koch, und der Herr Kellermeister sollen leben. –",
            "literal": "Lord Cook and Lord Cellar-Master shall live [Long live the cook and cellarer]. –",
            "tokens": [
              { "word": "Der Herr Koch", "lemma": "Koch", "pos": "noun", "meaning": "the master cook" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "der Herr Kellermeister", "lemma": "Kellermeister", "pos": "noun", "meaning": "the head cellarer / sommelier" },
              { "word": "sollen", "lemma": "sollen", "pos": "verb", "meaning": "shall" },
              { "word": "leben", "lemma": "hochleben", "pos": "verb", "meaning": "live / thrive" }
            ],
            "grammarNote": "Traditional German drinking toast formula: 'jemand soll leben / hochleben' (long live... / cheers to...)."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c3",
        "speaker": "Papageno",
        "stageDirection": "Dreymaliger Posaunenton. Tamino winkt Papageno, daß er gehen soll.",
        "stageDirectionTranslation": "Threefold trombone tone. Tamino gestures to Papageno that he should go.",
        "lines": [
          {
            "id": "a2_s9_pre_c3_l1",
            "original": "Gehe du nur voraus, ich komm schon nach.",
            "literal": "Go you [Tamino] just ahead, I [Papageno] come surely after.",
            "tokens": [
              { "word": "Gehe", "lemma": "gehen", "pos": "verb", "meaning": "go (imperative)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "nur", "lemma": "nur", "pos": "particle", "meaning": "just" },
              { "word": "voraus", "lemma": "voraus", "pos": "adverb", "meaning": "ahead / on in advance" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "komm'", "lemma": "kommen", "pos": "verb", "meaning": "come" },
              { "word": "schon", "lemma": "schon", "pos": "particle", "meaning": "surely / presently" },
              { "word": "nach", "lemma": "nachkommen", "pos": "particle", "meaning": "after (separable verb prefix)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s9_pre_c4",
        "speaker": "Papageno",
        "stageDirection": "Tamino will ihn mit Gewalt fortführen.",
        "stageDirectionTranslation": "Tamino tries to lead him away by force.",
        "lines": [
          {
            "id": "a2_s9_pre_c4_l1",
            "original": "Der Stärkere bleibt da!",
            "literal": "The stronger [man] stays here!",
            "tokens": [
              { "word": "Der Stärkere", "lemma": "stark", "pos": "noun", "meaning": "the stronger one (nominalized comparative adjective)" },
              { "word": "bleibt", "lemma": "bleiben", "pos": "verb", "meaning": "stays / remains" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "here" }
            ],
            "grammarNote": "Nominalized comparative adjective: 'der Stärkere' = the stronger one."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c5",
        "speaker": "Papageno",
        "stageDirection": "Tamino droht ihm, und geht rechts ab; ist aber links gekommen.",
        "stageDirectionTranslation": "Tamino threatens him and exits right; but had entered from the left.",
        "lines": [
          {
            "id": "a2_s9_pre_c5_l1",
            "original": "Jetzt will ich mirs erst recht wohl seyn lassen. –",
            "literal": "Now will I treat myself truly well. –",
            "tokens": [
              { "word": "Jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "mirs", "lemma": "mir es", "pos": "pronoun", "meaning": "myself it" },
              { "word": "erst recht", "lemma": "erst recht", "pos": "adverb", "meaning": "all the more / truly" },
              { "word": "wohl seyn lassen", "lemma": "sich wohl sein lassen", "pos": "idiom", "meaning": "indulge oneself / enjoy oneself", "notes": "Archaic spelling of 'sein'." }
            ],
            "grammarNote": "Idiom 'sich's wohl sein lassen' = to live well / indulge one's appetite."
          },
          {
            "id": "a2_s9_pre_c5_l2",
            "original": "Da ich in meinem besten Appetit bin, soll ich gehen. – Das lass' ich wohl bleiben. –",
            "literal": "Since I am in my best appetite, shall I go. – That leave I well alone [Not a chance]. –",
            "tokens": [
              { "word": "Da", "lemma": "da", "pos": "conjunction", "meaning": "since / as" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "in meinem besten Appetit", "lemma": "Appetit", "pos": "noun", "meaning": "in my peak appetite" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "am supposed to" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "gehen", "lemma": "gehen", "pos": "verb", "meaning": "go" },
              { "word": "Das lass' ich wohl bleiben", "lemma": "bleiben lassen", "pos": "idiom", "meaning": "I'll do no such thing / I'll leave that alone" }
            ],
            "grammarNote": "Colloquial German idiom 'etwas bleiben lassen' = to refrain from doing something."
          },
          {
            "id": "a2_s9_pre_c5_l3",
            "original": "Ich gieng' jetzt nicht fort, und wenn Herr Sarastro seine sechs Löwen an mich spannte.",
            "literal": "I would-go not away now, even if Lord Sarastro harnessed his six lions to me.",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "gieng'", "lemma": "gehen", "pos": "verb", "meaning": "would go (subjunctive II of gehen)", "notes": "Archaic spelling of 'ginge'." },
              { "word": "jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" },
              { "word": "fort", "lemma": "fort", "pos": "adverb", "meaning": "away" },
              { "word": "und wenn", "lemma": "und wenn", "pos": "conjunction", "meaning": "even if" },
              { "word": "Herr Sarastro", "lemma": "Sarastro", "pos": "noun", "meaning": "Lord Sarastro" },
              { "word": "seine sechs Löwen", "lemma": "Löwe", "pos": "noun", "meaning": "his six lions (accusative plural)" },
              { "word": "an mich", "lemma": "an mich", "pos": "pronoun", "meaning": "to me" },
              { "word": "spannte", "lemma": "spannen", "pos": "verb", "meaning": "harnessed / hitched" }
            ],
            "grammarNote": "Archaic spelling 'gieng'' for subjunctive II 'ginge', introducing a hyperbolic concessive condition ('und wenn...')."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c6",
        "speaker": "Papageno",
        "stageDirection": "Die Löwen kommen heraus, er erschrickt.",
        "stageDirectionTranslation": "The lions come out; he is terrified.",
        "lines": [
          {
            "id": "a2_s9_pre_c6_l1",
            "original": "O Barmherzigkeit, ihr gütigen Götter! –",
            "literal": "O mercy, you gracious gods! –",
            "tokens": [
              { "word": "O", "lemma": "o", "pos": "interjection", "meaning": "oh" },
              { "word": "Barmherzigkeit", "lemma": "Barmherzigkeit", "pos": "noun", "meaning": "mercy / compassion" },
              { "word": "ihr gütigen Götter", "lemma": "Gott", "pos": "noun", "meaning": "you kind gods (vocative plural)" }
            ]
          },
          {
            "id": "a2_s9_pre_c6_l2",
            "original": "Tamino, rette mich! die Herrn Löwen machen eine Mahlzeit aus mir. –",
            "literal": "Tamino, save me! The gentlemen lions make a meal out-of me. –",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "rette", "lemma": "retten", "pos": "verb", "meaning": "save (imperative)" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "die Herrn Löwen", "lemma": "Löwe", "pos": "noun", "meaning": "the gentlemen lions (humorous polite address)" },
              { "word": "machen", "lemma": "machen", "pos": "verb", "meaning": "make" },
              { "word": "eine Mahlzeit", "lemma": "Mahlzeit", "pos": "noun", "meaning": "a meal" },
              { "word": "aus mir", "lemma": "aus mir", "pos": "pronoun", "meaning": "out of me" }
            ],
            "grammarNote": "Comic deferential title: Papageno addresses the wild beasts politely as 'die Herrn Löwen' out of sheer terror."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c7",
        "speaker": "Papageno",
        "stageDirection": "Tamino bläst sein Flöte, kommt schnell zurück; die Löwen gehen hinein. Tamino winkt ihm.",
        "stageDirectionTranslation": "Tamino plays his flute, comes quickly back; the lions go inside. Tamino gestures to him.",
        "lines": [
          {
            "id": "a2_s9_pre_c7_l1",
            "original": "Ich gehe schon! heiß du mich einen Schelmen, wenn ich dir nicht in allem folge.",
            "literal": "I go already! Call you me a rogue, if I follow you [Tamino] not in everything.",
            "tokens": [
              { "word": "Ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "gehe", "lemma": "gehen", "pos": "verb", "meaning": "go" },
              { "word": "schon", "lemma": "schon", "pos": "adverb", "meaning": "already" },
              { "word": "heiß", "lemma": "heißen", "pos": "verb", "meaning": "call / name (imperative)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "einen Schelmen", "lemma": "Schelm", "pos": "noun", "meaning": "a rogue / scoundrel (accusative masculine)" },
              { "word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "you (dative)" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" },
              { "word": "in allem", "lemma": "in allem", "pos": "pronoun", "meaning": "in everything" },
              { "word": "folge", "lemma": "folgen", "pos": "verb", "meaning": "follow (governs dative 'dir')" }
            ],
            "grammarNote": "Double accusative construction with 'heißen' ('mich einen Schelmen heißen'). The verb 'folgen' takes the dative object 'dir'."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c8",
        "speaker": "Papageno",
        "stageDirection": "Dreymaliger Posaunenton.",
        "stageDirectionTranslation": "Threefold trombone call.",
        "lines": [
          {
            "id": "a2_s9_pre_c8_l1",
            "original": "Das geht uns an. – Wir kommen schon. –",
            "literal": "That concerns us. – We come already. –",
            "tokens": [
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "geht uns an", "lemma": "angehen", "pos": "verb", "meaning": "concerns us / is meant for us" },
              { "word": "Wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "kommen", "lemma": "kommen", "pos": "verb", "meaning": "come" },
              { "word": "schon", "lemma": "schon", "pos": "adverb", "meaning": "already" }
            ]
          },
          {
            "id": "a2_s9_pre_c8_l2",
            "original": "Aber hör einmal, Tamino, was wird denn noch alles mit uns werden?",
            "literal": "But listen once, Tamino, what will then still all become of us?",
            "tokens": [
              { "word": "Aber", "lemma": "aber", "pos": "conjunction", "meaning": "but" },
              { "word": "hör einmal", "lemma": "hören", "pos": "verb", "meaning": "listen once / just listen (imperative)" },
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "was", "lemma": "was", "pos": "pronoun", "meaning": "what" },
              { "word": "wird", "lemma": "werden", "pos": "verb", "meaning": "will" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then (modal particle)" },
              { "word": "noch alles", "lemma": "noch alles", "pos": "pronoun", "meaning": "what else" },
              { "word": "mit uns", "lemma": "mit uns", "pos": "pronoun", "meaning": "with us / of us" },
              { "word": "werden", "lemma": "werden", "pos": "verb", "meaning": "become" }
            ],
            "grammarNote": "Idiom 'was wird aus / mit jemandem werden' = what will become of someone."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c9",
        "speaker": "Papageno",
        "stageDirection": "Tamino deutet gen Himmel.",
        "stageDirectionTranslation": "Tamino points toward heaven.",
        "lines": [
          {
            "id": "a2_s9_pre_c9_l1",
            "original": "Die Götter soll ich fragen?",
            "literal": "The gods shall I ask?",
            "tokens": [
              { "word": "Die Götter", "lemma": "Gott", "pos": "noun", "meaning": "the gods (accusative plural)" },
              { "word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "should / shall" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "fragen", "lemma": "fragen", "pos": "verb", "meaning": "ask" }
            ]
          }
        ]
      },
      {
        "id": "a2_s9_pre_c10",
        "speaker": "Papageno",
        "stageDirection": "Tamino deutet ja. Dreymaliger Posaunenton. Tamino reißt ihn mit Gewalt fort.",
        "stageDirectionTranslation": "Tamino nods yes. Threefold trombone call. Tamino drags him away by force.",
        "lines": [
          {
            "id": "a2_s9_pre_c10_l1",
            "original": "Ja, die könnten uns freylich mehr sagen, als wir wissen!",
            "literal": "Yes, they [the gods] could tell us certainly more than we know!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "die", "lemma": "der", "pos": "pronoun", "meaning": "they / those (demonstrative referring to the gods)" },
              { "word": "könnten", "lemma": "können", "pos": "verb", "meaning": "could (subjunctive II)" },
              { "word": "uns", "lemma": "uns", "pos": "pronoun", "meaning": "us (dative)" },
              { "word": "freylich", "lemma": "freilich", "pos": "adverb", "meaning": "certainly / indeed", "notes": "Archaic spelling 'freylich'." },
              { "word": "mehr", "lemma": "mehr", "pos": "adverb", "meaning": "more" },
              { "word": "sagen", "lemma": "sagen", "pos": "verb", "meaning": "say / tell" },
              { "word": "als", "lemma": "als", "pos": "conjunction", "meaning": "than" },
              { "word": "wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "wissen", "lemma": "wissen", "pos": "verb", "meaning": "know" }
            ],
            "grammarNote": "Demonstrative pronoun 'die' in subject position referring back to 'die Götter'."
          }
        ]
      },
      {
        "id": "a2_s9_pre_c11",
        "speaker": "Papageno",
        "stageDirection": "Ab.",
        "stageDirectionTranslation": "Exeunt.",
        "lines": [
          {
            "id": "a2_s9_pre_c11_l1",
            "original": "Eile nur nicht so, wir kommen noch immer zeitlich genug, um uns braten zu lassen.",
            "literal": "Hurry just not so, we come still always in-good-time enough to let ourselves be-roasted.",
            "tokens": [
              { "word": "Eile", "lemma": "eilen", "pos": "verb", "meaning": "hurry (imperative)" },
              { "word": "nur", "lemma": "nur", "pos": "particle", "meaning": "just" },
              { "word": "nicht so", "lemma": "nicht so", "pos": "adverb", "meaning": "not so / not like that" },
              { "word": "wir", "lemma": "wir", "pos": "pronoun", "meaning": "we" },
              { "word": "kommen", "lemma": "kommen", "pos": "verb", "meaning": "come / arrive" },
              { "word": "noch immer", "lemma": "noch immer", "pos": "adverb", "meaning": "still / nonetheless" },
              { "word": "zeitlich genug", "lemma": "zeitlich", "pos": "adverb", "meaning": "early enough / in good time", "notes": "Austrian/regional usage: 'zeitlich' = frühzeitig / rechtzeitig." },
              { "word": "um", "lemma": "um", "pos": "conjunction", "meaning": "in order to" },
              { "word": "uns", "lemma": "uns", "pos": "pronoun", "meaning": "ourselves" },
              { "word": "braten", "lemma": "braten", "pos": "verb", "meaning": "to roast / be roasted" },
              { "word": "zu lassen", "lemma": "lassen", "pos": "verb", "meaning": "to let" }
            ],
            "grammarNote": "Austrian dialect idiom 'zeitlich genug' = early enough. Infinitival clause of purpose: 'um uns braten zu lassen'."
          }
        ]
      }
    ]
  },
  {
    "section": "a2_s10_pre",
    "act": 2,
    "scene": 10,
    "position": "pre",
    "cues": [
      {
        "id": "a2_s10_pre_c1",
        "speaker": "Sarastro",
        "stageDirection": "Tamino, der hereingeführt wird. Vorige.",
        "stageDirectionTranslation": "Tamino, who is led in. The preceding.",
        "lines": [
          {
            "id": "a2_s10_pre_c1_l1",
            "original": "Prinz, dein Betragen war bis hieher männlich und gelassen; nun hast du noch zwey gefährliche Wege zu wandern. –",
            "literal": "Prince [Tamino], your conduct was up to-here manly and composed; now have you still two dangerous paths to wander. –",
            "tokens": [
              { "word": "Prinz", "lemma": "Prinz", "pos": "noun", "meaning": "prince" },
              { "word": "dein Betragen", "lemma": "Betragen", "pos": "noun", "meaning": "your conduct / behavior" },
              { "word": "war", "lemma": "sein", "pos": "verb", "meaning": "was" },
              { "word": "bis hieher", "lemma": "bis hierher", "pos": "adverb", "meaning": "until now / up to this point", "notes": "Archaic spelling 'hieher'." },
              { "word": "männlich", "lemma": "männlich", "pos": "adjective", "meaning": "manly / resolute" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "gelassen", "lemma": "gelassen", "pos": "adjective", "meaning": "composed / steadfast" },
              { "word": "nun", "lemma": "nun", "pos": "adverb", "meaning": "now" },
              { "word": "hast", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "noch", "lemma": "noch", "pos": "adverb", "meaning": "still / yet" },
              { "word": "zwey", "lemma": "zwei", "pos": "pronoun", "meaning": "two", "notes": "Archaic spelling 'zwey'." },
              { "word": "gefährliche Wege", "lemma": "Weg", "pos": "noun", "meaning": "dangerous paths (accusative plural)" },
              { "word": "zu wandern", "lemma": "wandern", "pos": "verb", "meaning": "to travel / wander" }
            ],
            "grammarNote": "Masonic didactic terminology: 'männlich und gelassen' (courageous and equanimous). Construction 'haben... zu wandern' denotes moral obligation/destiny."
          },
          {
            "id": "a2_s10_pre_c1_l2",
            "original": "Schlägt dein Herz noch eben so warm für Pamina – und wünschest du einst als ein weiser Fürst zu regieren, so mögen die Götter dich ferner begleiten. – –",
            "literal": "Beats your heart still just as warm for Pamina – and wish you one-day as a wise prince to reign, so may the gods accompany you further. – –",
            "tokens": [
              { "word": "Schlägt", "lemma": "schlagen", "pos": "verb", "meaning": "beats" },
              { "word": "dein Herz", "lemma": "Herz", "pos": "noun", "meaning": "your heart" },
              { "word": "noch eben so warm", "lemma": "so warm", "pos": "adverb", "meaning": "still just as warmly" },
              { "word": "für Pamina", "lemma": "Pamina", "pos": "noun", "meaning": "for Pamina" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "wünschest", "lemma": "wünschen", "pos": "verb", "meaning": "wish / desire (2nd pers. sing. with archaic -est)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "einst", "lemma": "einst", "pos": "adverb", "meaning": "one day / in the future" },
              { "word": "als ein weiser Fürst", "lemma": "Fürst", "pos": "noun", "meaning": "as a wise prince" },
              { "word": "zu regieren", "lemma": "regieren", "pos": "verb", "meaning": "to rule / reign" },
              { "word": "so", "lemma": "so", "pos": "adverb", "meaning": "then / so" },
              { "word": "mögen", "lemma": "mögen", "pos": "verb", "meaning": "may (optative subjunctive)" },
              { "word": "die Götter", "lemma": "Gott", "pos": "noun", "meaning": "the gods" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "ferner", "lemma": "fern", "pos": "adverb", "meaning": "further / henceforth" },
              { "word": "begleiten", "lemma": "begleiten", "pos": "verb", "meaning": "accompany / guide" }
            ],
            "grammarNote": "Verb-first conditional structure without 'wenn': 'Schlägt dein Herz... und wünschest du... so mögen die Götter...'. Optative subjunctive 'mögen'."
          }
        ]
      },
      {
        "id": "a2_s10_pre_c2",
        "speaker": "Sarastro",
        "stageDirection": "Er reicht ihm die Hand.",
        "stageDirectionTranslation": "He extends his hand to him.",
        "lines": [
          {
            "id": "a2_s10_pre_c2_l1",
            "original": "Deine Hand! – Man bringe Paminen!",
            "literal": "Your hand! – Let one bring Pamina!",
            "tokens": [
              { "word": "Deine Hand", "lemma": "Hand", "pos": "noun", "meaning": "your hand" },
              { "word": "Man", "lemma": "man", "pos": "pronoun", "meaning": "one / let someone (indefinite subject)" },
              { "word": "bringe", "lemma": "bringen", "pos": "verb", "meaning": "bring (3rd pers. singular present subjunctive / jussive)" },
              { "word": "Paminen", "lemma": "Pamina", "pos": "noun", "meaning": "Pamina (archaic feminine weak accusative inflection)", "notes": "Inflected with archaic weak feminine ending -en." }
            ],
            "grammarNote": "Jussive subjunctive 'bringe' with indefinite pronoun 'man'. Classical weak feminine accusative inflection 'Paminen' on the proper name Pamina."
          }
        ]
      },
      {
        "id": "a2_s10_pre_c3",
        "speaker": "Pamina",
        "stageDirection": "Eine Stille herrscht bey allen Priestern, Pamina wird mit eben diesem Sack, welcher die Eingeweihten bedeckt, hereingeführt, Sarastro löst die Bande am Sacke auf.",
        "stageDirectionTranslation": "A silence reigns among all the priests; Pamina is led in with the very sack covering her that cloaks the initiates; Sarastro unties the cords on the sack.",
        "lines": [
          {
            "id": "a2_s10_pre_c3_l1",
            "original": "Wo bin ich? – Welch eine fürchterliche Stille! –",
            "literal": "Where am I? – What a terrifying silence! –",
            "tokens": [
              { "word": "Wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "Welch eine", "lemma": "welch ein", "pos": "pronoun", "meaning": "what a" },
              { "word": "fürchterliche", "lemma": "fürchterlich", "pos": "adjective", "meaning": "terrifying / dreadful" },
              { "word": "Stille", "lemma": "Stille", "pos": "noun", "meaning": "silence" }
            ]
          },
          {
            "id": "a2_s10_pre_c3_l2",
            "original": "Saget, wo ist mein Jüngling? –",
            "literal": "Say, where is my youth [Tamino]? –",
            "tokens": [
              { "word": "Saget", "lemma": "sagen", "pos": "verb", "meaning": "say / tell (elevated plural imperative with -et)" },
              { "word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "mein Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "my youth / young man" }
            ],
            "grammarNote": "Archaic elevated imperative ending '-et' in 'Saget', addressing the assembly of priests."
          }
        ]
      },
      {
        "id": "a2_s10_pre_c4",
        "speaker": "Sarastro",
        "lines": [
          {
            "id": "a2_s10_pre_c4_l1",
            "original": "Er wartet deiner, um dir das letzte Lebewohl zu sagen.",
            "literal": "He [Tamino] awaits you [Pamina], to say to-you the last farewell.",
            "tokens": [
              { "word": "Er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "wartet deiner", "lemma": "warten", "pos": "verb", "meaning": "awaits you", "notes": "Governs genitive object 'deiner'." },
              { "word": "um", "lemma": "um", "pos": "conjunction", "meaning": "in order to" },
              { "word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)" },
              { "word": "das letzte Lebewohl", "lemma": "Lebewohl", "pos": "noun", "meaning": "the final farewell" },
              { "word": "zu sagen", "lemma": "sagen", "pos": "verb", "meaning": "to say" }
            ],
            "grammarNote": "Archaic elevated syntax: the verb 'warten' governs a genitive personal pronoun ('deiner') rather than modern prepositional 'auf dich'."
          }
        ]
      },
      {
        "id": "a2_s10_pre_c5",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a2_s10_pre_c5_l1",
            "original": "Das letzte Lebewohl! – wo ist er? – Führe mich zu ihm! –",
            "literal": "The last farewell! – Where is he [Tamino]? – Lead me to him! –",
            "tokens": [
              { "word": "Das letzte Lebewohl", "lemma": "Lebewohl", "pos": "noun", "meaning": "the final farewell" },
              { "word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he" },
              { "word": "Führe", "lemma": "führen", "pos": "verb", "meaning": "lead (imperative)" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "zu ihm", "lemma": "zu ihm", "pos": "pronoun", "meaning": "to him" }
            ]
          }
        ]
      },
      {
        "id": "a2_s10_pre_c6",
        "speaker": "Sarastro",
        "lines": [
          {
            "id": "a2_s10_pre_c6_l1",
            "original": "Hier! –",
            "literal": "Here! –",
            "tokens": [
              { "word": "Hier", "lemma": "hier", "pos": "adverb", "meaning": "here" }
            ]
          }
        ]
      },
      {
        "id": "a2_s10_pre_c7",
        "speaker": "Pamina",
        "lines": [
          {
            "id": "a2_s10_pre_c7_l1",
            "original": "Tamino!",
            "literal": "Tamino!",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" }
            ]
          }
        ]
      },
      {
        "id": "a2_s10_pre_c8",
        "speaker": "Tamino",
        "lines": [
          {
            "id": "a2_s10_pre_c8_l1",
            "original": "Zurück!",
            "literal": "Back!",
            "tokens": [
              { "word": "Zurück", "lemma": "zurück", "pos": "adverb", "meaning": "back / stand back" }
            ],
            "grammarNote": "Solemn ritual prohibition: Tamino must speak only this single commanding refusal, leading into Trio Nr. 19."
          }
        ]
      }
    ]
  },
  {
    "section": "a2_s11_pre",
    "act": 2,
    "scene": 11,
    "position": "pre",
    "cues": [
      {
        "id": "a2_s11_pre_c1",
        "speaker": "Papageno",
        "stageDirection": "Papageno von außen. Er sucht herein.",
        "stageDirectionTranslation": "Papageno from outside. He searches his way in.",
        "lines": [
          {
            "id": "a2_s11_pre_c1_l1",
            "original": "Tamino! Tamino! willst du mich denn gänzlich verlassen?",
            "literal": "Tamino! Tamino! Will you [Tamino] then utterly abandon me [Papageno]?",
            "tokens": [
              { "word": "Tamino", "lemma": "Tamino", "pos": "noun", "meaning": "Tamino" },
              { "word": "willst", "lemma": "wollen", "pos": "verb", "meaning": "will / want" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then (modal particle)" },
              { "word": "gänzlich", "lemma": "gänzlich", "pos": "adverb", "meaning": "completely / utterly" },
              { "word": "verlassen", "lemma": "verlassen", "pos": "verb", "meaning": "abandon / forsake" }
            ]
          },
          {
            "id": "a2_s11_pre_c1_l2",
            "original": "Wenn ich nur wenigstens wüßte, wo ich wäre – Tamino! – Tamino! –",
            "literal": "If I only at-least knew where I were – Tamino! – Tamino! –",
            "tokens": [
              { "word": "Wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "nur wenigstens", "lemma": "wenigstens", "pos": "adverb", "meaning": "only at least" },
              { "word": "wüßte", "lemma": "wissen", "pos": "verb", "meaning": "knew (subjunctive II)" },
              { "word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "wäre", "lemma": "sein", "pos": "verb", "meaning": "were (subjunctive II)" }
            ],
            "grammarNote": "Subjunctive II expressing unreal wish/lament: 'Wenn ich nur... wüßte'."
          },
          {
            "id": "a2_s11_pre_c1_l3",
            "original": "So lang' ich lebe, bleib' ich nicht mehr von dir – – nur dießmal verlaß mich armen Reisgefährten nicht!",
            "literal": "As long as I live, stay I no more away from you [Tamino] – – only this-time abandon me, poor traveling-companion, not!",
            "tokens": [
              { "word": "So lang'", "lemma": "solange", "pos": "conjunction", "meaning": "as long as" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "lebe", "lemma": "leben", "pos": "verb", "meaning": "live" },
              { "word": "bleib'", "lemma": "bleiben", "pos": "verb", "meaning": "stay" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more" },
              { "word": "von dir", "lemma": "von dir", "pos": "pronoun", "meaning": "from you" },
              { "word": "nur dießmal", "lemma": "diesmal", "pos": "adverb", "meaning": "only this time", "notes": "Archaic spelling 'dießmal'." },
              { "word": "verlaß", "lemma": "verlassen", "pos": "verb", "meaning": "abandon (imperative)" },
              { "word": "mich armen Reisgefährten", "lemma": "Reisegefährte", "pos": "noun", "meaning": "me, poor traveling companion (accusative masculine)", "notes": "Archaic spelling 'Reisgefährten' without epenthetic -e-." },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" }
            ],
            "grammarNote": "Archaic compound 'Reisgefährten' (modern 'Reisegefährten') with weak masculine accusative ending '-en'."
          }
        ]
      },
      {
        "id": "a2_s11_pre_c2",
        "speaker": "A Voice",
        "stageDirection": "Er kommt an die Thüre, wo Tamino abgeführt worden ist. Eine Stimme ruft. Dann ein Donnerschlag, das Feuer schlägt zur Thüre heraus; starker Accord.",
        "stageDirectionTranslation": "He arrives at the door where Tamino was led away. A voice calls out. Then a thunderclap, fire bursts from the doorway; loud chord.",
        "lines": [
          {
            "id": "a2_s11_pre_c2_l1",
            "original": "Zurück!",
            "literal": "Back!",
            "tokens": [
              { "word": "Zurück", "lemma": "zurück", "pos": "adverb", "meaning": "back / retreat" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c3",
        "speaker": "Papageno",
        "stageDirection": "Er kommt an die Thüre, wo er herein kam.",
        "stageDirectionTranslation": "He arrives at the door where he entered.",
        "lines": [
          {
            "id": "a2_s11_pre_c3_l1",
            "original": "Barmherzige Götter! – Wo wend' ich mich hin? –",
            "literal": "Merciful gods! – Whither turn I myself? –",
            "tokens": [
              { "word": "Barmherzige Götter", "lemma": "Gott", "pos": "noun", "meaning": "merciful gods (vocative)" },
              { "word": "Wo", "lemma": "wo", "pos": "adverb", "meaning": "whither / where" },
              { "word": "wend' ich mich hin", "lemma": "sich hinwenden", "pos": "verb", "meaning": "turn (reflexive separable verb)" }
            ],
            "grammarNote": "Directional separable verb 'sich hinwenden' with 'wo... hin'."
          },
          {
            "id": "a2_s11_pre_c3_l2",
            "original": "Wenn ich nur wüßte, wo ich herein kam.",
            "literal": "If I only knew where I entered.",
            "tokens": [
              { "word": "Wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "nur", "lemma": "nur", "pos": "particle", "meaning": "only" },
              { "word": "wüßte", "lemma": "wissen", "pos": "verb", "meaning": "knew (subjunctive II)" },
              { "word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "herein kam", "lemma": "hereinkommen", "pos": "verb", "meaning": "came in / entered" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c4",
        "speaker": "The Voice",
        "stageDirection": "Donner, Feuer, und Accord wie oben.",
        "stageDirectionTranslation": "Thunder, fire, and chord as above.",
        "lines": [
          {
            "id": "a2_s11_pre_c4_l1",
            "original": "Zurück!",
            "literal": "Back!",
            "tokens": [
              { "word": "Zurück", "lemma": "zurück", "pos": "adverb", "meaning": "back" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c5",
        "speaker": "Papageno",
        "stageDirection": "Weint.",
        "stageDirectionTranslation": "Weeps.",
        "lines": [
          {
            "id": "a2_s11_pre_c5_l1",
            "original": "Nun kann ich weder zurück, noch vorwärts! –",
            "literal": "Now can I neither back nor forward! –",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now" },
              { "word": "kann", "lemma": "können", "pos": "verb", "meaning": "can" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "weder zurück, noch vorwärts", "lemma": "weder noch", "pos": "idiom", "meaning": "neither back nor forward" }
            ],
            "grammarNote": "Correlative conjunction 'weder... noch' with directional adverbs ellipsis of motion verb ('gehen')."
          },
          {
            "id": "a2_s11_pre_c5_l2",
            "original": "Muß vieleicht am Ende gar verhungern. – Schon recht! – Warum bin ich mitgereist.",
            "literal": "[I] must perhaps in-the end even starve. – Serves me right! – Why did I travel-along.",
            "tokens": [
              { "word": "Muß", "lemma": "müssen", "pos": "verb", "meaning": "must" },
              { "word": "vieleicht", "lemma": "vielleicht", "pos": "adverb", "meaning": "perhaps", "notes": "Archaic spelling 'vieleicht'." },
              { "word": "am Ende", "lemma": "am Ende", "pos": "idiom", "meaning": "in the end / ultimately" },
              { "word": "gar", "lemma": "gar", "pos": "particle", "meaning": "even / at all" },
              { "word": "verhungern", "lemma": "verhungern", "pos": "verb", "meaning": "starve" },
              { "word": "Schon recht", "lemma": "schon recht", "pos": "idiom", "meaning": "quite right / serves me right" },
              { "word": "Warum", "lemma": "warum", "pos": "adverb", "meaning": "why" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "did / have" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "mitgereist", "lemma": "mitreisen", "pos": "verb", "meaning": "travelled along" }
            ],
            "grammarNote": "Colloquial topic-drop: elision of subject pronoun 'ich' before 'Muß'. Idiomatic self-blame: 'Schon recht!'."
          }
        ]
      },
      {
        "id": "a2_s11_pre_c6",
        "speaker": "Speaker",
        "stageDirection": "Sprecher mit seiner Pyramide. Vorige.",
        "stageDirectionTranslation": "The Speaker with his pyramid. The preceding.",
        "lines": [
          {
            "id": "a2_s11_pre_c6_l1",
            "original": "Mensch! du hättest verdient, auf immer in finstern Klüften der Erde zu wandern; – die gütigen Götter aber entlassen der Strafe dich. –",
            "literal": "Mortal! You would-have deserved to wander forever in dark chasms of-the earth; – the gracious gods however release you from-the punishment. –",
            "tokens": [
              { "word": "Mensch", "lemma": "Mensch", "pos": "noun", "meaning": "mortal / man (solemn vocative)" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "hättest verdient", "lemma": "verdienen", "pos": "verb", "meaning": "would have deserved (past subjunctive II)" },
              { "word": "auf immer", "lemma": "auf immer", "pos": "idiom", "meaning": "forever / for all time" },
              { "word": "in finstern Klüften", "lemma": "Kluft", "pos": "noun", "meaning": "in dark chasms/caves (dative plural)" },
              { "word": "der Erde", "lemma": "Erde", "pos": "noun", "meaning": "of the earth (genitive feminine)" },
              { "word": "zu wandern", "lemma": "wandern", "pos": "verb", "meaning": "to wander" },
              { "word": "die gütigen Götter", "lemma": "Gott", "pos": "noun", "meaning": "the gracious gods (nominative plural)" },
              { "word": "aber", "lemma": "aber", "pos": "conjunction", "meaning": "however / but" },
              { "word": "entlassen der Strafe dich", "lemma": "entlassen", "pos": "verb", "meaning": "release you from punishment", "notes": "Governs genitive of thing 'der Strafe' and accusative of person 'dich'." }
            ],
            "grammarNote": "High classical elevated syntax: 'jemanden (akk.) einer Sache (gen.) entlassen' (to release someone from something), with genitive of separation 'der Strafe'."
          },
          {
            "id": "a2_s11_pre_c6_l2",
            "original": "Dafür aber wirst du das himmlische Vergnügen der Eingeweihten nie fühlen.",
            "literal": "For-that however will you never feel the heavenly pleasure of-the initiates.",
            "tokens": [
              { "word": "Dafür", "lemma": "dafür", "pos": "adverb", "meaning": "in return / for that" },
              { "word": "aber", "lemma": "aber", "pos": "conjunction", "meaning": "however" },
              { "word": "wirst", "lemma": "werden", "pos": "verb", "meaning": "will" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "das himmlische Vergnügen", "lemma": "Vergnügen", "pos": "noun", "meaning": "the heavenly pleasure/delight (accusative neuter)" },
              { "word": "der Eingeweihten", "lemma": "Eingeweihte", "pos": "noun", "meaning": "of the initiates (genitive plural nominalized adjective)" },
              { "word": "nie", "lemma": "nie", "pos": "adverb", "meaning": "never" },
              { "word": "fühlen", "lemma": "fühlen", "pos": "verb", "meaning": "feel / experience" }
            ],
            "grammarNote": "Masonic distinction: the worldly man (Papageno) is spared suffering, but permanently excluded from the supreme illumination ('das himmlische Vergnügen der Eingeweihten')."
          }
        ]
      },
      {
        "id": "a2_s11_pre_c7",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_pre_c7_l1",
            "original": "Je nun, es giebt ja noch mehr Leute meines Gleichen. –",
            "literal": "Well now, there are after-all more people of-my like. –",
            "tokens": [
              { "word": "Je nun", "lemma": "je nun", "pos": "interjection", "meaning": "well now / ah well" },
              { "word": "es giebt", "lemma": "geben", "pos": "verb", "meaning": "there is / there are", "notes": "Archaic spelling 'giebt'." },
              { "word": "ja", "lemma": "ja", "pos": "particle", "meaning": "after all" },
              { "word": "noch mehr Leute", "lemma": "Leute", "pos": "noun", "meaning": "still more people" },
              { "word": "meines Gleichen", "lemma": "meinesgleichen", "pos": "idiom", "meaning": "of my sort / like me", "notes": "Archaic split spelling 'meines Gleichen'." }
            ],
            "grammarNote": "Archaic genitive phrase 'meines Gleichen' (modern 'meinesgleichen' = people like me). Common man philosophy confronting esoteric asceticism."
          },
          {
            "id": "a2_s11_pre_c7_l2",
            "original": "Mir wäre jetzt ein gut Glas Wein das größte Vergnügen.",
            "literal": "To-me would-be now a good glass of-wine the greatest pleasure.",
            "tokens": [
              { "word": "Mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)" },
              { "word": "wäre", "lemma": "sein", "pos": "verb", "meaning": "would be (subjunctive II)" },
              { "word": "jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now" },
              { "word": "ein gut Glas Wein", "lemma": "Glas", "pos": "noun", "meaning": "a good glass of wine", "notes": "Uninflected adjective 'gut' before neuter measure noun." },
              { "word": "das größte Vergnügen", "lemma": "Vergnügen", "pos": "noun", "meaning": "the greatest pleasure (superlative)" }
            ],
            "grammarNote": "Uninflected adjective 'gut' in 'ein gut Glas Wein', characteristic of archaic/colloquial German measure constructions."
          }
        ]
      },
      {
        "id": "a2_s11_pre_c8",
        "speaker": "Speaker",
        "lines": [
          {
            "id": "a2_s11_pre_c8_l1",
            "original": "Sonst hast du keinen Wunsch in dieser Welt?",
            "literal": "Otherwise have you no wish in this world?",
            "tokens": [
              { "word": "Sonst", "lemma": "sonst", "pos": "adverb", "meaning": "otherwise / beyond that" },
              { "word": "hast", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "keinen Wunsch", "lemma": "Wunsch", "pos": "noun", "meaning": "no wish (accusative masculine)" },
              { "word": "in dieser Welt", "lemma": "Welt", "pos": "noun", "meaning": "in this world" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c9",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_pre_c9_l1",
            "original": "Bis jetzt nicht.",
            "literal": "Until now not.",
            "tokens": [
              { "word": "Bis jetzt nicht", "lemma": "bis jetzt nicht", "pos": "adverb", "meaning": "not so far / not until now" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c10",
        "speaker": "Speaker",
        "stageDirection": "Ab.",
        "stageDirectionTranslation": "Exit.",
        "lines": [
          {
            "id": "a2_s11_pre_c10_l1",
            "original": "Man wird dich damit bedienen! –",
            "literal": "One will serve you with-that! –",
            "tokens": [
              { "word": "Man", "lemma": "man", "pos": "pronoun", "meaning": "one / someone" },
              { "word": "wird", "lemma": "werden", "pos": "verb", "meaning": "will" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative)" },
              { "word": "damit", "lemma": "damit", "pos": "adverb", "meaning": "with that" },
              { "word": "bedienen", "lemma": "bedienen", "pos": "verb", "meaning": "serve / provide" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c11",
        "speaker": "Papageno",
        "stageDirection": "Sogleich kommt ein großer Becher, mit rothem Wein angefüllt, aus der Erde. Trinkt.",
        "stageDirectionTranslation": "Immediately a large cup, filled with red wine, rises from the earth. He drinks.",
        "lines": [
          {
            "id": "a2_s11_pre_c11_l1",
            "original": "Juchhe! da ist er ja schon! –",
            "literal": "Hurrah! There is it [the cup of wine] already! –",
            "tokens": [
              { "word": "Juchhe", "lemma": "juchhe", "pos": "interjection", "meaning": "hurrah / yippee" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "there" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "it (the masculine cup: der Becher)" },
              { "word": "ja", "lemma": "ja", "pos": "particle", "meaning": "indeed / already" },
              { "word": "schon", "lemma": "schon", "pos": "adverb", "meaning": "already" }
            ],
            "grammarNote": "Pronoun 'er' refers grammatically to the masculine antecedent 'der Becher'."
          },
          {
            "id": "a2_s11_pre_c11_l2",
            "original": "Herrlich! – Himmlisch! – Göttlich! –",
            "literal": "Glorious! – Heavenly! – Divine! –",
            "tokens": [
              { "word": "Herrlich", "lemma": "herrlich", "pos": "adjective", "meaning": "glorious / splendid" },
              { "word": "Himmlisch", "lemma": "himmlisch", "pos": "adjective", "meaning": "heavenly" },
              { "word": "Göttlich", "lemma": "göttlich", "pos": "adjective", "meaning": "divine" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_pre_c12",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_pre_c12_l1",
            "original": "Ha! ich bin jetzt so vergnügt, daß ich bis zur Sonne fliegen wollte, wenn ich Flügel hätte. –",
            "literal": "Ha! I am now so merry, that I would fly up to-the sun, if I had wings. –",
            "tokens": [
              { "word": "Ha", "lemma": "ha", "pos": "interjection", "meaning": "ha" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now" },
              { "word": "so vergnügt", "lemma": "vergnügt", "pos": "adjective", "meaning": "so merry / happy" },
              { "word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "that" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "bis zur Sonne", "lemma": "Sonne", "pos": "noun", "meaning": "up to the sun" },
              { "word": "fliegen", "lemma": "fliegen", "pos": "verb", "meaning": "to fly" },
              { "word": "wollte", "lemma": "wollen", "pos": "verb", "meaning": "would want / would fly (subjunctive II)" },
              { "word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "Flügel", "lemma": "Flügel", "pos": "noun", "meaning": "wings (accusative plural)" },
              { "word": "hätte", "lemma": "haben", "pos": "verb", "meaning": "had (subjunctive II)" }
            ],
            "grammarNote": "Consecutive subordinate clause introduced by 'so... daß' followed by a hypothetical conditional clause with subjunctive II 'hätte'."
          },
          {
            "id": "a2_s11_pre_c12_l2",
            "original": "Ha! – mir wird ganz wunderlich ums Herz. – Ich möchte – ich wünschte – ja was denn?",
            "literal": "Ha! – To-me it-becomes quite strange around the heart. – I would-like – I would-wish – well what then?",
            "tokens": [
              { "word": "Ha", "lemma": "ha", "pos": "interjection", "meaning": "ha" },
              { "word": "mir wird", "lemma": "werden", "pos": "verb", "meaning": "I feel / it becomes to me (impersonal dative)" },
              { "word": "ganz wunderlich", "lemma": "wunderlich", "pos": "adjective", "meaning": "quite strange / wondrous" },
              { "word": "ums Herz", "lemma": "Herz", "pos": "noun", "meaning": "about the heart (um + das)" },
              { "word": "Ich möchte", "lemma": "mögen", "pos": "verb", "meaning": "I would like" },
              { "word": "ich wünschte", "lemma": "wünschen", "pos": "verb", "meaning": "I would wish" },
              { "word": "ja was denn", "lemma": "was denn", "pos": "idiom", "meaning": "well what then? / what actually?" }
            ],
            "grammarNote": "Impersonal dative construction: 'mir wird... ums Herz' (I feel a strange sensation in my heart). Leading directly into aria Nr. 20 'Ein Mädchen oder Weibchen'."
          }
        ]
      }
    ]
  },
  {
    "section": "a2_s11_post",
    "act": 2,
    "scene": 11,
    "position": "post",
    "cues": [
      {
        "id": "a2_s11_post_c1",
        "speaker": "Old Woman",
        "stageDirection": "Die Alte tanzend, und auf ihren Stock dabey sich stützend. Vorige.",
        "stageDirectionTranslation": "The old woman enters dancing, leaning on her cane while doing so. The preceding.",
        "lines": [
          {
            "id": "a2_s11_post_c1_l1",
            "original": "Da bin ich schon, mein Engel!",
            "literal": "Here am I already, my angel!",
            "tokens": [
              { "word": "Da", "lemma": "da", "pos": "adverb", "meaning": "here" },
              { "word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "schon", "lemma": "schon", "pos": "adverb", "meaning": "already" },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c2",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c2_l1",
            "original": "Du hast dich meiner erbarmt?",
            "literal": "You [the Old Woman] have had-mercy upon-me?",
            "tokens": [
              { "word": "Du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "hast", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "yourself (reflexive)" },
              { "word": "meiner", "lemma": "ich", "pos": "pronoun", "meaning": "upon me (genitive personal pronoun)", "notes": "Genitive object governed by 'sich erbarmen'." },
              { "word": "erbarmt", "lemma": "erbarmen", "pos": "verb", "meaning": "had mercy / pitied" }
            ],
            "grammarNote": "Classical reflexive verb governing a genitive object: 'sich jemandes (gen.) erbarmen' (meiner erbarmt)."
          }
        ]
      },
      {
        "id": "a2_s11_post_c3",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c3_l1",
            "original": "Ja, mein Engel!",
            "literal": "Yes, my angel!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "mein Engel", "lemma": "Engel", "pos": "noun", "meaning": "my angel" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c4",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c4_l1",
            "original": "Das ist ein Glück!",
            "literal": "That is a stroke-of-luck!",
            "tokens": [
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "ein Glück", "lemma": "Glück", "pos": "noun", "meaning": "a piece of good fortune / lucky thing" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c5",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c5_l1",
            "original": "Und wenn du mir versprichst, mir ewig treu zu bleiben, dann sollst du sehen, wie zärtlich dein Weibchen dich lieben wird.",
            "literal": "And if you promise me to remain eternally faithful to-me, then shall you see how tenderly your little-wife will love you.",
            "tokens": [
              { "word": "Und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me" },
              { "word": "versprichst", "lemma": "versprechen", "pos": "verb", "meaning": "promise" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me" },
              { "word": "ewig treu", "lemma": "treu", "pos": "adjective", "meaning": "eternally faithful" },
              { "word": "zu bleiben", "lemma": "bleiben", "pos": "verb", "meaning": "to remain" },
              { "word": "dann", "lemma": "dann", "pos": "adverb", "meaning": "then" },
              { "word": "sollst", "lemma": "sollen", "pos": "verb", "meaning": "shall" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "sehen", "lemma": "sehen", "pos": "verb", "meaning": "see" },
              { "word": "wie zärtlich", "lemma": "zärtlich", "pos": "adverb", "meaning": "how tenderly" },
              { "word": "dein Weibchen", "lemma": "Weibchen", "pos": "noun", "meaning": "your little wife / mate (diminutive)" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "lieben wird", "lemma": "lieben", "pos": "verb", "meaning": "will love" }
            ],
            "grammarNote": "Affectionate diminutive 'Weibchen' (little wife). Conditional clause with 'wenn' followed by correlative 'dann'."
          }
        ]
      },
      {
        "id": "a2_s11_post_c6",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c6_l1",
            "original": "Ey du zärtliches Närrchen!",
            "literal": "Hey you tender little-fool!",
            "tokens": [
              { "word": "Ey", "lemma": "ei", "pos": "interjection", "meaning": "hey / ah" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "zärtliches", "lemma": "zärtlich", "pos": "adjective", "meaning": "tender / affectionate" },
              { "word": "Närrchen", "lemma": "Narr", "pos": "noun", "meaning": "little fool / silly creature", "notes": "Diminutive of Narr with umlaut and -chen." }
            ],
            "grammarNote": "Diminutive endearment 'Närrchen' (little fool)."
          }
        ]
      },
      {
        "id": "a2_s11_post_c7",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c7_l1",
            "original": "O wie will ich dich umarmen, dich liebkosen, dich an mein Herz drücken!",
            "literal": "O how will I embrace you, caress you, press you to my heart!",
            "tokens": [
              { "word": "O wie", "lemma": "wie", "pos": "adverb", "meaning": "oh how" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will / desire" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "umarmen", "lemma": "umarmen", "pos": "verb", "meaning": "embrace" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "liebkosen", "lemma": "liebkosen", "pos": "verb", "meaning": "caress / fondle" },
              { "word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "an mein Herz drücken", "lemma": "Herz", "pos": "idiom", "meaning": "press to my heart" }
            ],
            "grammarNote": "Tricolon of erotic physical promises: 'umarmen', 'liebkosen', 'an mein Herz drücken'."
          }
        ]
      },
      {
        "id": "a2_s11_post_c8",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c8_l1",
            "original": "Auch ans Herz drücken?",
            "literal": "Also press to-the heart?",
            "tokens": [
              { "word": "Auch", "lemma": "auch", "pos": "adverb", "meaning": "also / even" },
              { "word": "ans Herz drücken", "lemma": "an das Herz drücken", "pos": "idiom", "meaning": "press to the heart" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c9",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c9_l1",
            "original": "Komm, reiche mir zum Pfand unsers Bundes deine Hand.",
            "literal": "Come, reach to-me as-a pledge of-our union your hand.",
            "tokens": [
              { "word": "Komm", "lemma": "kommen", "pos": "verb", "meaning": "come (imperative)" },
              { "word": "reiche", "lemma": "reichen", "pos": "verb", "meaning": "give / extend (imperative)" },
              { "word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)" },
              { "word": "zum Pfand", "lemma": "Pfand", "pos": "noun", "meaning": "as a pledge / token (zu + dem)" },
              { "word": "unsers Bundes", "lemma": "Bund", "pos": "noun", "meaning": "of our covenant/bond (genitive masculine)" },
              { "word": "deine Hand", "lemma": "Hand", "pos": "noun", "meaning": "your hand (accusative feminine)" }
            ],
            "grammarNote": "Traditional betrothal formula: 'die Hand zum Pfand des Bundes reichen'."
          }
        ]
      },
      {
        "id": "a2_s11_post_c10",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c10_l1",
            "original": "Nur nicht so hastig, lieber Engel! – So ein Bündniß braucht doch auch seine Überlegung.",
            "literal": "Just not so hasty, dear angel! – Such a bond needs after-all also its deliberation.",
            "tokens": [
              { "word": "Nur nicht so hastig", "lemma": "hastig", "pos": "adverb", "meaning": "just not so hasty" },
              { "word": "lieber Engel", "lemma": "Engel", "pos": "noun", "meaning": "dear angel" },
              { "word": "So ein Bündniß", "lemma": "Bündnis", "pos": "noun", "meaning": "such an alliance/marriage", "notes": "Archaic spelling 'Bündniß'." },
              { "word": "braucht", "lemma": "brauchen", "pos": "verb", "meaning": "needs / requires" },
              { "word": "doch auch", "lemma": "doch auch", "pos": "particle", "meaning": "surely also" },
              { "word": "seine Überlegung", "lemma": "Überlegung", "pos": "noun", "meaning": "its consideration / thought" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c11",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c11_l1",
            "original": "Papageno, ich rathe dir, zaudre nicht. –",
            "literal": "Papageno, I counsel you, hesitate not. –",
            "tokens": [
              { "word": "Papageno", "lemma": "Papageno", "pos": "noun", "meaning": "Papageno" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "rathe", "lemma": "raten", "pos": "verb", "meaning": "advise / counsel", "notes": "Archaic spelling 'rathe'." },
              { "word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "you (dative)" },
              { "word": "zaudre", "lemma": "zaudern", "pos": "verb", "meaning": "hesitate / delay (imperative)" },
              { "word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not" }
            ],
            "grammarNote": "The verb 'raten' governs dative of person: 'ich rate dir'."
          },
          {
            "id": "a2_s11_post_c11_l2",
            "original": "Deine Hand, oder du bist auf immer hier eingekerkert.",
            "literal": "Your hand, or you are imprisoned here forever.",
            "tokens": [
              { "word": "Deine Hand", "lemma": "Hand", "pos": "noun", "meaning": "your hand" },
              { "word": "oder", "lemma": "oder", "pos": "conjunction", "meaning": "or" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "bist", "lemma": "sein", "pos": "verb", "meaning": "are" },
              { "word": "auf immer", "lemma": "auf immer", "pos": "idiom", "meaning": "forever / eternally" },
              { "word": "hier", "lemma": "hier", "pos": "adverb", "meaning": "here" },
              { "word": "eingekerkert", "lemma": "einkerkern", "pos": "verb", "meaning": "imprisoned / incarcerated" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c12",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c12_l1",
            "original": "Eingekerkert?",
            "literal": "Imprisoned?",
            "tokens": [
              { "word": "Eingekerkert", "lemma": "einkerkern", "pos": "verb", "meaning": "imprisoned (past participle)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c13",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c13_l1",
            "original": "Wasser und Brod wird deine tägliche Kost seyn. –",
            "literal": "Water and bread will be your daily fare. –",
            "tokens": [
              { "word": "Wasser und Brod", "lemma": "Wasser und Brot", "pos": "idiom", "meaning": "bread and water (prison fare)", "notes": "Archaic spelling 'Brod'." },
              { "word": "wird", "lemma": "werden", "pos": "verb", "meaning": "will" },
              { "word": "deine tägliche Kost", "lemma": "Kost", "pos": "noun", "meaning": "your daily food/nourishment" },
              { "word": "seyn", "lemma": "sein", "pos": "verb", "meaning": "be" }
            ]
          },
          {
            "id": "a2_s11_post_c13_l2",
            "original": "Ohne Freund, ohne Freundinn mußt du leben, und der Welt auf immer entsagen. –",
            "literal": "Without friend, without female-friend must you live, and renounce the world forever. –",
            "tokens": [
              { "word": "Ohne Freund", "lemma": "Freund", "pos": "noun", "meaning": "without a friend (masculine)" },
              { "word": "ohne Freundinn", "lemma": "Freundin", "pos": "noun", "meaning": "without a female friend", "notes": "Archaic spelling 'Freundinn' with double n." },
              { "word": "mußt", "lemma": "müssen", "pos": "verb", "meaning": "must" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "leben", "lemma": "leben", "pos": "verb", "meaning": "live" },
              { "word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and" },
              { "word": "der Welt", "lemma": "Welt", "pos": "noun", "meaning": "the world (dative feminine)" },
              { "word": "auf immer", "lemma": "auf immer", "pos": "idiom", "meaning": "forever" },
              { "word": "entsagen", "lemma": "entsagen", "pos": "verb", "meaning": "renounce (governs dative 'der Welt')" }
            ],
            "grammarNote": "Archaic orthography 'Freundinn'. The verb 'entsagen' governs a dative object: 'der Welt entsagen'."
          }
        ]
      },
      {
        "id": "a2_s11_post_c14",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c14_l1",
            "original": "Wasser trinken? – Der Welt entsagen? – Nein, da will ich doch lieber eine Alte nehmen, als gar keine. –",
            "literal": "Drink water? – Renounce the world? – No, then will I rather take an old-woman [Papagena], than none at-all. –",
            "tokens": [
              { "word": "Wasser trinken", "lemma": "Wasser trinken", "pos": "idiom", "meaning": "drink water" },
              { "word": "Der Welt entsagen", "lemma": "Welt entsagen", "pos": "idiom", "meaning": "renounce the world" },
              { "word": "Nein", "lemma": "nein", "pos": "particle", "meaning": "no" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "then / in that case" },
              { "word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will / want" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "doch lieber", "lemma": "lieber", "pos": "adverb", "meaning": "rather / preferably" },
              { "word": "eine Alte", "lemma": "Alte", "pos": "noun", "meaning": "an old woman" },
              { "word": "nehmen", "lemma": "nehmen", "pos": "verb", "meaning": "take / marry" },
              { "word": "als", "lemma": "als", "pos": "conjunction", "meaning": "than" },
              { "word": "gar keine", "lemma": "gar kein", "pos": "pronoun", "meaning": "none at all" }
            ],
            "grammarNote": "Papageno's pragmatic folk philosophy: taking an old wife is preferable to lifelong ascetic imprisonment and drinking water."
          },
          {
            "id": "a2_s11_post_c14_l2",
            "original": "Nun, da hast du meine Hand, mit der Versicherung, daß ich dir immer getreu bleibe,",
            "literal": "Now, there have you my hand, with the assurance that I remain always faithful to-you,",
            "tokens": [
              { "word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now / well" },
              { "word": "da", "lemma": "da", "pos": "adverb", "meaning": "there" },
              { "word": "hast", "lemma": "haben", "pos": "verb", "meaning": "have" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" },
              { "word": "meine Hand", "lemma": "Hand", "pos": "noun", "meaning": "my hand" },
              { "word": "mit der Versicherung", "lemma": "Versicherung", "pos": "noun", "meaning": "with the assurance / pledge" },
              { "word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "that" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "to you" },
              { "word": "immer getreu", "lemma": "getreu", "pos": "adjective", "meaning": "always faithful" },
              { "word": "bleibe", "lemma": "bleiben", "pos": "verb", "meaning": "remain" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c15",
        "speaker": "Papageno",
        "stageDirection": "Für sich.",
        "stageDirectionTranslation": "Aside.",
        "lines": [
          {
            "id": "a2_s11_post_c15_l1",
            "original": "so lang' ich keine schönere sehe.",
            "literal": "so long as I see no prettier [woman].",
            "tokens": [
              { "word": "so lang'", "lemma": "solange", "pos": "conjunction", "meaning": "as long as" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "keine schönere", "lemma": "schön", "pos": "adjective", "meaning": "no prettier one (comparative feminine)" },
              { "word": "sehe", "lemma": "sehen", "pos": "verb", "meaning": "see" }
            ],
            "grammarNote": "Comic mental reservation / caveat spoken aside ('Für sich')."
          }
        ]
      },
      {
        "id": "a2_s11_post_c16",
        "speaker": "Old Woman",
        "lines": [
          {
            "id": "a2_s11_post_c16_l1",
            "original": "Das schwörst du?",
            "literal": "That swear you?",
            "tokens": [
              { "word": "Das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "schwörst", "lemma": "schwören", "pos": "verb", "meaning": "swear" },
              { "word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c17",
        "speaker": "Papageno",
        "lines": [
          {
            "id": "a2_s11_post_c17_l1",
            "original": "Ja, das schwör' ich!",
            "literal": "Yes, that swear I!",
            "tokens": [
              { "word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes" },
              { "word": "das", "lemma": "das", "pos": "pronoun", "meaning": "that" },
              { "word": "schwör'", "lemma": "schwören", "pos": "verb", "meaning": "swear" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c18",
        "speaker": "Papageno",
        "stageDirection": "Weib verwandelt sich in ein junges Weib, welche eben so gekleidet ist, wie Papageno. Er will sie umarmen.",
        "stageDirectionTranslation": "The woman transforms into a young woman dressed in feathers exactly like Papageno. He wants to embrace her.",
        "lines": [
          {
            "id": "a2_s11_post_c18_l1",
            "original": "Pa – Pa – Papagena! –",
            "literal": "Pa – Pa – Papagena! –",
            "tokens": [
              { "word": "Pa – Pa – Papagena", "lemma": "Papagena", "pos": "noun", "meaning": "Papagena (stuttering exclamation of joy)" }
            ],
            "grammarNote": "The iconic staccato stutter 'Pa-Pa-Papagena', anticipating their climactic reunion duet in the Finale."
          }
        ]
      },
      {
        "id": "a2_s11_post_c19",
        "speaker": "Speaker",
        "stageDirection": "Sprecher nimmt sie hastig bey der Hand. Vorige.",
        "stageDirectionTranslation": "The Speaker seizes her hastily by the hand. The preceding.",
        "lines": [
          {
            "id": "a2_s11_post_c19_l1",
            "original": "Fort mit dir, junges Weib! er ist deiner noch nicht würdig.",
            "literal": "Away with you, young woman! He [Papageno] is not yet worthy of-you [Papagena].",
            "tokens": [
              { "word": "Fort mit dir", "lemma": "fort mit dir", "pos": "idiom", "meaning": "away with you!" },
              { "word": "junges Weib", "lemma": "Weib", "pos": "noun", "meaning": "young woman (vocative)" },
              { "word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he [Papageno]" },
              { "word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is" },
              { "word": "deiner", "lemma": "du", "pos": "pronoun", "meaning": "of you [Papagena] (genitive personal pronoun)", "notes": "Genitive object governed by adjective 'würdig'." },
              { "word": "noch nicht", "lemma": "noch nicht", "pos": "adverb", "meaning": "not yet" },
              { "word": "würdig", "lemma": "würdig", "pos": "adjective", "meaning": "worthy" }
            ],
            "grammarNote": "Adjective governing genitive case: 'jemandes (gen.) würdig sein' ('deiner... würdig')."
          }
        ]
      },
      {
        "id": "a2_s11_post_c20",
        "speaker": "Speaker",
        "stageDirection": "Er schleppt sie hinein, Papageno will nach.",
        "stageDirectionTranslation": "He drags her inside; Papageno tries to follow.",
        "lines": [
          {
            "id": "a2_s11_post_c20_l1",
            "original": "Zurück, sag ich! oder zittre. –",
            "literal": "Back, say I! Or tremble. –",
            "tokens": [
              { "word": "Zurück", "lemma": "zurück", "pos": "adverb", "meaning": "back" },
              { "word": "sag'", "lemma": "sagen", "pos": "verb", "meaning": "say" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "oder", "lemma": "oder", "pos": "conjunction", "meaning": "or" },
              { "word": "zittre", "lemma": "zittern", "pos": "verb", "meaning": "tremble (imperative)" }
            ]
          }
        ]
      },
      {
        "id": "a2_s11_post_c21",
        "speaker": "Papageno",
        "stageDirection": "Er sinkt hinab.",
        "stageDirectionTranslation": "He sinks down.",
        "lines": [
          {
            "id": "a2_s11_post_c21_l1",
            "original": "Eh' ich mich zurück ziehe, soll die Erde mich verschlingen.",
            "literal": "Before I withdraw myself, shall the earth swallow me.",
            "tokens": [
              { "word": "Eh'", "lemma": "ehe", "pos": "conjunction", "meaning": "before / ere" },
              { "word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "myself" },
              { "word": "zurück ziehe", "lemma": "zurückziehen", "pos": "verb", "meaning": "retreat / withdraw (reflexive)" },
              { "word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "shall" },
              { "word": "die Erde", "lemma": "Erde", "pos": "noun", "meaning": "the earth" },
              { "word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me" },
              { "word": "verschlingen", "lemma": "verschlingen", "pos": "verb", "meaning": "devour / swallow" }
            ],
            "grammarNote": "Dramatic oath: temporal clause with 'eh'' followed by optative main clause. Papageno sinks through a trapdoor ('Er sinkt hinab')."
          },
          {
            "id": "a2_s11_post_c21_l2",
            "original": "O ihr Götter!",
            "literal": "O you gods!",
            "tokens": [
              { "word": "O", "lemma": "o", "pos": "interjection", "meaning": "oh" },
              { "word": "ihr Götter", "lemma": "Gott", "pos": "noun", "meaning": "you gods (vocative plural)" }
            ]
          }
        ]
      }
    ]
  }
]

# Validation
errors = []
for sec_idx, sec in enumerate(batch4_data):
    s_name = sec.get('section')
    if not sec.get('cues'):
        errors.append(f"Section {s_name} has no cues!")
    for c_idx, cue in enumerate(sec['cues']):
        c_id = cue.get('id')
        if not cue.get('speaker'):
            errors.append(f"Cue {c_id} has no speaker")
        if 'stageDirection' in cue and not cue.get('stageDirectionTranslation'):
            errors.append(f"Cue {c_id} has stageDirection without translation: {cue['stageDirection']}")
        lines = cue.get('lines', [])
        if not lines:
            errors.append(f"Cue {c_id} has no lines")
        if len(lines) > 3:
            errors.append(f"Cue {c_id} has {len(lines)} lines (exceeds 3 lines limit)")
        for l_idx, line in enumerate(lines):
            l_id = line.get('id')
            orig = line.get('original', '').strip(' „"\'»«“‘(—[')
            lit = line.get('literal', '').strip(' „"\'»«“‘(—[')
            if orig and lit:
                if orig[0].isupper() and not lit[0].isupper():
                    errors.append(f"Cap mismatch in {l_id}: '{orig}' vs '{lit}'")
            tokens = line.get('tokens', [])
            for t_idx, tok in enumerate(tokens):
                pos = tok.get('pos')
                if pos not in VALID_POS:
                    errors.append(f"Invalid POS in {l_id} token {t_idx}: '{pos}'")

if errors:
    print(f"Validation FAILED with {len(errors)} errors:")
    for e in errors[:20]:
        print("  -", e)
    raise SystemExit(1)

print("All validations passed cleanly!")

with open("scripts/zauberfloete_batch4_curated.json", "w", encoding="utf-8") as f:
    json.dump(batch4_data, f, ensure_ascii=False, indent=2)

print("Saved scripts/zauberfloete_batch4_curated.json successfully!")

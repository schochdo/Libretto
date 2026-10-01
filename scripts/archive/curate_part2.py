# -*- coding: utf-8 -*-
"""Part 2: Scene 2 lines 64-128 (second hymn, Venus's plea, third hymn)"""

PART2_DATA = {
    "Beglückt für immer, wer bei dir geweilt!": [
        "Blessed forever, whoever has dwelled with you!",
        [
            {"word": "Beglückt", "lemma": "beglücken", "pos": "adjective", "meaning": "blessed / fortunate"},
            {"word": "für immer", "lemma": "für immer", "pos": "adverb", "meaning": "forever / eternally"},
            {"word": "wer", "lemma": "wer", "pos": "pronoun", "meaning": "whoever / he who"},
            {"word": "geweilt", "lemma": "weilen", "pos": "verb", "meaning": "dwelled / tarried (past participle)"}
        ],
        "Elliptical relative clause with omitted auxiliary: 'wer bei dir geweilt [hat]'."
    ],
    "Ewig beneidet, wer mit warmen Trieben": [
        "Ever envied, whoever with ardent desires",
        [
            {"word": "Ewig", "lemma": "ewig", "pos": "adverb", "meaning": "eternally / ever"},
            {"word": "beneidet", "lemma": "beneiden", "pos": "verb", "meaning": "envied (past participle)"},
            {"word": "wer", "lemma": "wer", "pos": "pronoun", "meaning": "whoever / he who"},
            {"word": "warmen Trieben", "lemma": "Trieb", "pos": "noun", "meaning": "ardent desires / warm passions (dative plural)"}
        ],
        "Participle construction acting as predicate: 'Ewig beneidet [ist] wer...'."
    ],
    "in deinen Armen Götterglut geteilt!": [
        "shared divine ardor in your arms!",
        [
            {"word": "in deinen Armen", "lemma": "Arm", "pos": "noun", "meaning": "in your arms (dative plural)"},
            {"word": "Götterglut", "lemma": "Götterglut", "pos": "noun", "meaning": "divine ardor / celestial fire"},
            {"word": "geteilt", "lemma": "teilen", "pos": "verb", "meaning": "shared / partaken of (past participle)"}
        ],
        "Continuation of relative clause with compound noun 'Götterglut'."
    ],
    "Entzückend sind die Wunder deines Reiches,": [
        "Enchanting are the wonders of your realm,",
        [
            {"word": "Entzückend", "lemma": "entzückend", "pos": "adjective", "meaning": "enchanting / delightful"},
            {"word": "Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "wonders / marvels"},
            {"word": "deines Reiches", "lemma": "Reich", "pos": "noun", "meaning": "of your realm (genitive neuter)"}
        ],
        "Fronted predicate adjective 'Entzückend' with genitive attribute 'deines Reiches'."
    ],
    "die Zauber aller Wonnen atm' ich hier;": [
        "the enchantments of all delights I breathe here;",
        [
            {"word": "die Zauber", "lemma": "Zauber", "pos": "noun", "meaning": "the spells / enchantments (accusative plural)"},
            {"word": "aller Wonnen", "lemma": "Wonne", "pos": "noun", "meaning": "of all delights (genitive plural)"},
            {"word": "atm'", "lemma": "atmen", "pos": "verb", "meaning": "breathe (atme)"},
            {"word": "hier", "lemma": "hier", "pos": "adverb", "meaning": "here"}
        ],
        "Topicalized direct object phrase with genitive plural modifier."
    ],
    "kein Land der weiten Erde bietet Gleiches,": [
        "no land on the wide earth offers the like,",
        [
            {"word": "kein Land", "lemma": "Land", "pos": "noun", "meaning": "no land"},
            {"word": "der weiten Erde", "lemma": "Erde", "pos": "noun", "meaning": "of the wide earth (genitive feminine)"},
            {"word": "bietet", "lemma": "bieten", "pos": "verb", "meaning": "offers / provides"},
            {"word": "Gleiches", "lemma": "Gleiche", "pos": "noun", "meaning": "the like / equal thing (substantivized neuter)"}
        ],
        "Substantivized adjective 'Gleiches' as direct object."
    ],
    "was sie besitzt, scheint leicht entbehrlich dir.": [
        "what it possesses seems easily dispensable to you.",
        [
            {"word": "was", "lemma": "was", "pos": "pronoun", "meaning": "what / that which"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (feminine pronoun referring to 'die weite Erde')"},
            {"word": "besitzt", "lemma": "besitzen", "pos": "verb", "meaning": "possesses / holds"},
            {"word": "leicht", "lemma": "leicht", "pos": "adverb", "meaning": "easily / lightly"},
            {"word": "entbehrlich", "lemma": "entbehrlich", "pos": "adjective", "meaning": "dispensable / expendable"}
        ],
        "Pronoun 'sie' refers to 'die weite Erde' ('it [the earth]')."
    ],
    "Doch ich aus diesen ros'gen Düften": [
        "Yet I, from these rosy fragrances,",
        [
            {"word": "Doch", "lemma": "doch", "pos": "conjunction", "meaning": "yet / but"},
            {"word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I"},
            {"word": "ros'gen", "lemma": "rosig", "pos": "adjective", "meaning": "rosy / roseate (poetic syncope)"},
            {"word": "Düften", "lemma": "Duft", "pos": "noun", "meaning": "fragrances / scents (dative plural)"}
        ],
        "Fronted subject pronoun and prepositional contrast."
    ],
    "verlange nach des Waldes Lüften,": [
        "long for the breezes of the forest,",
        [
            {"word": "verlange nach", "lemma": "verlangen nach", "pos": "verb", "meaning": "long for / yearn for"},
            {"word": "des Waldes", "lemma": "Wald", "pos": "noun", "meaning": "of the forest / forest's (genitive masculine)"},
            {"word": "Lüften", "lemma": "Luft", "pos": "noun", "meaning": "breezes / airs (dative plural)"}
        ],
        "Preposed genitive 'des Waldes' modifying 'Lüften'."
    ],
    "nach unsres Himmels klarem Blau,": [
        "for our heaven's clear blue,",
        [
            {"word": "unsres Himmels", "lemma": "Himmel", "pos": "noun", "meaning": "of our heaven / our heaven's (genitive masculine)"},
            {"word": "klarem", "lemma": "klar", "pos": "adjective", "meaning": "clear (dative neuter)"},
            {"word": "Blau", "lemma": "Blau", "pos": "noun", "meaning": "blue (substantivized color)"}
        ],
        "Preposed genitive attribute 'unsres Himmels' before adjective-noun phrase."
    ],
    "nach unserm frischen Grün der Au',": [
        "for our fresh green of the meadow,",
        [
            {"word": "unserm frischen", "lemma": "frisch", "pos": "adjective", "meaning": "our fresh (dative neuter)"},
            {"word": "Grün", "lemma": "Grün", "pos": "noun", "meaning": "green / greenery"},
            {"word": "der Au'", "lemma": "Aue", "pos": "noun", "meaning": "of the meadow (genitive feminine with apocope)"}
        ],
        "Postposed genitive 'der Au'' (der Aue) modifying 'Grün'."
    ],
    "nach unsrer Vöglein liebem Sange,": [
        "for our little birds' lovely song,",
        [
            {"word": "unsrer Vöglein", "lemma": "Vöglein", "pos": "noun", "meaning": "of our little birds / our little birds' (genitive plural)"},
            {"word": "liebem", "lemma": "lieb", "pos": "adjective", "meaning": "dear / lovely (dative masculine)"},
            {"word": "Sange", "lemma": "Sang", "pos": "noun", "meaning": "song (dative with archaic -e)"}
        ],
        "Diminutive 'Vöglein' in preposed genitive position."
    ],
    "nach unsrer Glocken trautem Klange:": [
        "for our bells' familiar sound:",
        [
            {"word": "unsrer Glocken", "lemma": "Glocke", "pos": "noun", "meaning": "of our bells / our bells' (genitive plural)"},
            {"word": "trautem", "lemma": "traut", "pos": "adjective", "meaning": "familiar / beloved / cherished (dative)"},
            {"word": "Klange", "lemma": "Klang", "pos": "noun", "meaning": "sound / peal (dative masculine)"}
        ],
        "Preposed genitive plural 'unsrer Glocken' modifying 'Klange'."
    ],
    "aus deinem Reiche muss ich fliehn!": [
        "from your realm I must flee!",
        [
            {"word": "Reiche", "lemma": "Reich", "pos": "noun", "meaning": "realm / kingdom"},
            {"word": "muss", "lemma": "müssen", "pos": "verb", "meaning": "must"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee"}
        ],
        None
    ],
    "Treuloser! weh! was lässest du mich hören?": [
        "Faithless one! Woe! What do you let me hear?",
        [
            {"word": "Treuloser", "lemma": "Treuloser", "pos": "noun", "meaning": "faithless one / traitor (vocative)"},
            {"word": "weh", "lemma": "weh", "pos": "interjection", "meaning": "woe! / alas!"},
            {"word": "lässest", "lemma": "lassen", "pos": "verb", "meaning": "allow / let (archaic 2nd singular)"},
            {"word": "hören", "lemma": "hören", "pos": "verb", "meaning": "hear (infinitive)"}
        ],
        "Vocative substantivized adjective 'Treuloser' with archaic causative verb form 'lässest'."
    ],
    "Du wagest meine Liebe zu verhöhnen?": [
        "You dare to deride my love?",
        [
            {"word": "wagest", "lemma": "wagen", "pos": "verb", "meaning": "dare (2nd person singular)"},
            {"word": "meine Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "my love"},
            {"word": "zu verhöhnen", "lemma": "verhöhnen", "pos": "verb", "meaning": "to mock / deride / scoff at (infinitive with zu)"}
        ],
        "Infinitive clause dependent on 'wagest'."
    ],
    "Du preisest sie, und willst sie dennoch fliehn?": [
        "You praise it, and yet will flee it?",
        [
            {"word": "preisest", "lemma": "preisen", "pos": "verb", "meaning": "praise / extol"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (referring to 'meine Liebe')"},
            {"word": "dennoch", "lemma": "dennoch", "pos": "adverb", "meaning": "nevertheless / yet"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee"}
        ],
        "Feminine pronoun 'sie' refers semantically to 'meine Liebe' ('it')."
    ],
    "Zum Überdruss ist dir mein Reiz gediehn?": [
        "Has my charm grown to a surfeit for you?",
        [
            {"word": "Zum Überdruss", "lemma": "Überdruss", "pos": "noun", "meaning": "to surfeit / satiety / weariness"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "for you (dative)"},
            {"word": "Reiz", "lemma": "Reiz", "pos": "noun", "meaning": "charm / allure / beauty"},
            {"word": "gediehn", "lemma": "gedeihen", "pos": "verb", "meaning": "grown / prospered (past participle gediehen)"}
        ],
        "Idiomatic phrase 'zu etwas gedeihen' (to develop/grow into something) with dative of interest."
    ],
    "Ach schöne Göttin, wolle mir nicht zürnen!": [
        "Ah, fair goddess, be not angry with me!",
        [
            {"word": "schöne", "lemma": "schön", "pos": "adjective", "meaning": "fair / beautiful"},
            {"word": "Göttin", "lemma": "Göttin", "pos": "noun", "meaning": "goddess (vocative)"},
            {"word": "wolle", "lemma": "wollen", "pos": "verb", "meaning": "be willing (polite optative imperative)"},
            {"word": "zürnen", "lemma": "zürnen", "pos": "verb", "meaning": "be wrathful / angry with (governing dative mir)"}
        ],
        "Periphrastic imperative with 'wolle' expressing respectful pleading."
    ],
    "Dein übergrosser Reiz ist's, den ich fliehe!": [
        "It is your overwhelming charm that I flee!",
        [
            {"word": "übergrosser", "lemma": "übergross", "pos": "adjective", "meaning": "overwhelming / all too great"},
            {"word": "Reiz", "lemma": "Reiz", "pos": "noun", "meaning": "charm / allure"},
            {"word": "ist's", "lemma": "sein", "pos": "verb", "meaning": "it is (ist es)"},
            {"word": "den", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun masculine accusative)"}
        ],
        "Cleft sentence focalizing 'Dein übergrosser Reiz' via relative pronoun 'den'."
    ],
    "Weh dir! Verräter! Heuchler! Undankbarer!": [
        "Woe to you! Traitor! Hypocrite! Ingrate!",
        [
            {"word": "Weh dir", "lemma": "weh", "pos": "idiom", "meaning": "woe to you"},
            {"word": "Verräter", "lemma": "Verräter", "pos": "noun", "meaning": "traitor"},
            {"word": "Heuchler", "lemma": "Heuchler", "pos": "noun", "meaning": "hypocrite"},
            {"word": "Undankbarer", "lemma": "Undankbarer", "pos": "noun", "meaning": "ingrate / ungrateful one"}
        ],
        "Staccato sequence of invectives."
    ],
    "Ich lass' dich nicht! du darfst nicht von mir ziehen!": [
        "I will not let you go! You may not depart from me!",
        [
            {"word": "lass'", "lemma": "lassen", "pos": "verb", "meaning": "let / release"},
            {"word": "darfst nicht", "lemma": "dürfen", "pos": "verb", "meaning": "must not / are not permitted to"},
            {"word": "von mir", "lemma": "von", "pos": "preposition", "meaning": "from me"},
            {"word": "ziehen", "lemma": "ziehen", "pos": "verb", "meaning": "depart / go"}
        ],
        "Modal auxiliary 'darfst nicht' expressing strong prohibition."
    ],
    "Nie war mein Lieben grösser, niemals wahrer,": [
        "Never was my love greater, never truer,",
        [
            {"word": "Nie", "lemma": "nie", "pos": "adverb", "meaning": "never"},
            {"word": "Lieben", "lemma": "Lieben", "pos": "noun", "meaning": "loving / love (substantivized infinitive)"},
            {"word": "grösser", "lemma": "gross", "pos": "adjective", "meaning": "greater (comparative)"},
            {"word": "wahrer", "lemma": "wahr", "pos": "adjective", "meaning": "truer (comparative)"}
        ],
        "Comparative adjectives modifying substantivized infinitive 'mein Lieben'."
    ],
    "Als jetzt, da ich für ewig dich muss fliehn!": [
        "Than now, when I must flee you forever!",
        [
            {"word": "Als jetzt", "lemma": "als", "pos": "conjunction", "meaning": "than now"},
            {"word": "da", "lemma": "da", "pos": "conjunction", "meaning": "when / as (temporal)"},
            {"word": "für ewig", "lemma": "für ewig", "pos": "adverb", "meaning": "forever / for eternity"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee"}
        ],
        "Temporal conjunction 'da' following comparative 'als jetzt'."
    ],
    "Geliebter, komm! sieh dort die Grotte,": [
        "Beloved, come! See yonder the grotto,",
        [
            {"word": "Geliebter", "lemma": "Geliebter", "pos": "noun", "meaning": "beloved one"},
            {"word": "komm", "lemma": "kommen", "pos": "verb", "meaning": "come (imperative)"},
            {"word": "sieh", "lemma": "sehen", "pos": "verb", "meaning": "see / behold (imperative)"},
            {"word": "Grotte", "lemma": "Grotte", "pos": "noun", "meaning": "grotto / cavern"}
        ],
        "Double imperative 'komm... sieh' inviting seductive refuge."
    ],
    "von ros'gen Düften mild durchwallt;": [
        "gently wafted through by rosy fragrances;",
        [
            {"word": "ros'gen", "lemma": "rosig", "pos": "adjective", "meaning": "rosy / rose-scented"},
            {"word": "Düften", "lemma": "Duft", "pos": "noun", "meaning": "fragrances (dative plural)"},
            {"word": "mild", "lemma": "mild", "pos": "adverb", "meaning": "mildly / gently"},
            {"word": "durchwallt", "lemma": "durchwallen", "pos": "verb", "meaning": "wafted through / traversed (past participle)"}
        ],
        "Inseparable participle 'durchwallt' describing the perfumed ambiance."
    ],
    "Entzücken böt' selbst einem Gotte": [
        "Delight would offer even to a god",
        [
            {"word": "Entzücken", "lemma": "Entzücken", "pos": "noun", "meaning": "delight / rapture (accusative object)"},
            {"word": "böt'", "lemma": "bieten", "pos": "verb", "meaning": "would offer (Konjunktiv II of bieten)"},
            {"word": "selbst", "lemma": "selbst", "pos": "particle", "meaning": "even"},
            {"word": "einem Gotte", "lemma": "Gott", "pos": "noun", "meaning": "to a god (dative masculine)"}
        ],
        "Inverted word order with object 'Entzücken' preceding verb in Konjunktiv II."
    ],
    "der süss'sten Freuden Aufenthalt!": [
        "this abode of sweetest pleasures!",
        [
            {"word": "süss'sten", "lemma": "süss", "pos": "adjective", "meaning": "sweetest (superlative genitive)"},
            {"word": "Freuden", "lemma": "Freude", "pos": "noun", "meaning": "pleasures / joys (genitive plural)"},
            {"word": "Aufenthalt", "lemma": "Aufenthalt", "pos": "noun", "meaning": "abode / dwelling-place (nominative subject)"}
        ],
        "Subject of preceding clause: 'der Aufenthalt [der süss'sten Freuden] böt'...'."
    ],
    "Besänftigt auf dem weichsten Pfühle,": [
        "Soothed upon the softest cushion,",
        [
            {"word": "Besänftigt", "lemma": "besänftigen", "pos": "adjective", "meaning": "soothed / calmed (past participle)"},
            {"word": "weichsten", "lemma": "weich", "pos": "adjective", "meaning": "softest (superlative dative)"},
            {"word": "Pfühle", "lemma": "Pfuhl", "pos": "noun", "meaning": "cushion / pillow / couch (dative masculine)"}
        ],
        "Archaic noun 'Pfuhl' (cushion / bed) with dative ending -e."
    ],
    "flieh' deine Glieder jeder Schmerz;": [
        "may every pain flee your limbs;",
        [
            {"word": "flieh'", "lemma": "fliehen", "pos": "verb", "meaning": "may flee (optative subjunctive)"},
            {"word": "deine Glieder", "lemma": "Glied", "pos": "noun", "meaning": "your limbs (accusative plural)"},
            {"word": "jeder Schmerz", "lemma": "Schmerz", "pos": "noun", "meaning": "every pain (nominative singular subject)"}
        ],
        "Optative subjunctive 'flieh'' taking transitive accusative object 'deine Glieder'."
    ],
    "dein brennend Haupt umwehe Kühle,": [
        "may coolness waft around your burning head,",
        [
            {"word": "brennend", "lemma": "brennen", "pos": "adjective", "meaning": "burning / fevered (present participle)"},
            {"word": "Haupt", "lemma": "Haupt", "pos": "noun", "meaning": "head (accusative neuter)"},
            {"word": "umwehe", "lemma": "umwehen", "pos": "verb", "meaning": "may waft around (optative subjunctive)"},
            {"word": "Kühle", "lemma": "Kühle", "pos": "noun", "meaning": "coolness (nominative feminine subject)"}
        ],
        "Optative subjunctive 'umwehe' with postposed subject 'Kühle'."
    ],
    "wonnige Glut durchschwelle dein Herz!": [
        "may blissful glow surge through your heart!",
        [
            {"word": "wonnige", "lemma": "wonnig", "pos": "adjective", "meaning": "blissful / rapturous"},
            {"word": "Glut", "lemma": "Glut", "pos": "noun", "meaning": "ardor / glow (nominative feminine)"},
            {"word": "durchschwelle", "lemma": "durchschwellen", "pos": "verb", "meaning": "may surge through / swell (optative subjunctive)"},
            {"word": "dein Herz", "lemma": "Herz", "pos": "noun", "meaning": "your heart (accusative neuter)"}
        ],
        "Optative subjunctive expressing sensual benediction."
    ],
    "Komm, süsser Freund, komm, folge mir! komm!": [
        "Come, sweet friend, come, follow me! Come!",
        [
            {"word": "Komm", "lemma": "kommen", "pos": "verb", "meaning": "come (imperative)"},
            {"word": "süsser Freund", "lemma": "Freund", "pos": "noun", "meaning": "sweet friend (vocative)"},
            {"word": "folge mir", "lemma": "folgen", "pos": "verb", "meaning": "follow me (imperative with dative)"}
        ],
        "Urgent repeated imperatives of seduction."
    ],
    "Aus holder Ferne mahnen süsse Klänge,": [
        "From lovely distance sweet sounds summon,",
        [
            {"word": "holder", "lemma": "hold", "pos": "adjective", "meaning": "lovely / gracious (dative feminine)"},
            {"word": "Ferne", "lemma": "Ferne", "pos": "noun", "meaning": "distance"},
            {"word": "mahnen", "lemma": "mahnen", "pos": "verb", "meaning": "summon / admonish / beckon"},
            {"word": "süsse Klänge", "lemma": "Klang", "pos": "noun", "meaning": "sweet sounds (nominative plural)"}
        ],
        "Verb 'mahnen' used in the sense of gently calling or beckoning."
    ],
    "dass dich mein Arm in trauter Näh' umschlänge;": [
        "that my arm may enfold you in intimate closeness;",
        [
            {"word": "dass", "lemma": "dass", "pos": "conjunction", "meaning": "that / so that"},
            {"word": "mein Arm", "lemma": "Arm", "pos": "noun", "meaning": "my arm"},
            {"word": "trauter Näh'", "lemma": "Nähe", "pos": "noun", "meaning": "intimate closeness (dative feminine)"},
            {"word": "umschlänge", "lemma": "umschlingen", "pos": "verb", "meaning": "might enfold / embrace (Konjunktiv II)"}
        ],
        "Final clause with Konjunktiv II 'umschlänge' expressing desired embrace."
    ],
    "von meinen Lippen, aus meinen Blicken,": [
        "from my lips, from my glances,",
        [
            {"word": "von meinen Lippen", "lemma": "Lippe", "pos": "noun", "meaning": "from my lips (dative plural)"},
            {"word": "aus meinen Blicken", "lemma": "Blick", "pos": "noun", "meaning": "from my glances (dative plural)"}
        ],
        "Parallel prepositional phrases evoking sensory ecstasy."
    ],
    "schlürfst du den Göttertrank,": [
        "you sip the draught of the gods,",
        [
            {"word": "schlürfst", "lemma": "schlürfen", "pos": "verb", "meaning": "sip / drink deeply"},
            {"word": "Göttertrank", "lemma": "Göttertrank", "pos": "noun", "meaning": "drink of the gods / nectar (accusative masculine)"}
        ],
        "Mythological imagery of divine nectar."
    ],
    "strahlt dir der Liebesdank:": [
        "radiates for you love's thanksgiving:",
        [
            {"word": "strahlt", "lemma": "strahlen", "pos": "verb", "meaning": "radiates / shines"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "for you (dative)"},
            {"word": "Liebesdank", "lemma": "Liebesdank", "pos": "noun", "meaning": "gratitude of love / love's thanks"}
        ],
        "Compound noun 'Liebesdank' as subject."
    ],
    "ein Freudenfest soll unsrem Bund entstehen,": [
        "a festival of joy shall arise for our union,",
        [
            {"word": "Freudenfest", "lemma": "Freudenfest", "pos": "noun", "meaning": "festival of joy / celebration"},
            {"word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "shall"},
            {"word": "unsrem Bund", "lemma": "Bund", "pos": "noun", "meaning": "for our bond / union (dative masculine)"},
            {"word": "entstehen", "lemma": "entstehen", "pos": "verb", "meaning": "arise / come into being (infinitive)"}
        ],
        "Modal 'soll' governing infinitive 'entstehen' with dative of destination."
    ],
    "der Liebe Feier lass uns froh begehen;": [
        "let us joyfully celebrate the feast of love;",
        [
            {"word": "der Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "of love (genitive)"},
            {"word": "Feier", "lemma": "Feier", "pos": "noun", "meaning": "celebration / festival"},
            {"word": "lass uns", "lemma": "lassen", "pos": "verb", "meaning": "let us (hortative)"},
            {"word": "froh", "lemma": "froh", "pos": "adverb", "meaning": "joyfully / gladly"},
            {"word": "begehen", "lemma": "begehen", "pos": "verb", "meaning": "celebrate / observe (infinitive)"}
        ],
        "Preposed genitive 'der Liebe Feier' topicalized before hortative 'lass uns'."
    ],
    "nicht sollst du ihr ein scheues Opfer weihn:": [
        "no timid sacrifice shall you consecrate to her:",
        [
            {"word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not / no"},
            {"word": "sollst", "lemma": "sollen", "pos": "verb", "meaning": "shall / should"},
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "to her (dative feminine referring to 'die Liebe')"},
            {"word": "scheues Opfer", "lemma": "Opfer", "pos": "noun", "meaning": "timid sacrifice (accusative neuter)"},
            {"word": "weihn", "lemma": "weihen", "pos": "verb", "meaning": "consecrate / dedicate"}
        ],
        "Pronoun 'ihr' refers to love ('die Liebe')."
    ],
    "mit der Liebe Göttin schwelge im Verein!": [
        "revel united with the goddess of love!",
        [
            {"word": "der Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "of love (genitive)"},
            {"word": "Göttin", "lemma": "Göttin", "pos": "noun", "meaning": "goddess"},
            {"word": "schwelge", "lemma": "schwelgen", "pos": "verb", "meaning": "revel / carouse (imperative)"},
            {"word": "im Verein", "lemma": "Verein", "pos": "idiom", "meaning": "united / together (im Verein mit)"}
        ],
        "Idiom 'im Verein mit' meaning united in company."
    ],
    "Sag, holder Freund, sag, mein Geliebter:": [
        "Say, gracious friend, say, my beloved:",
        [
            {"word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "say (imperative)"},
            {"word": "holder", "lemma": "hold", "pos": "adjective", "meaning": "gracious / sweet"},
            {"word": "Freund", "lemma": "Freund", "pos": "noun", "meaning": "friend (vocative)"},
            {"word": "Geliebter", "lemma": "Geliebter", "pos": "noun", "meaning": "beloved one"}
        ],
        "Tender vocative double appellation."
    ],
    "willst du fliehn?": [
        "do you wish to flee?",
        [
            {"word": "willst", "lemma": "wollen", "pos": "verb", "meaning": "do you want / intend to"},
            {"word": "du", "lemma": "du", "pos": "pronoun", "meaning": "you"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee"}
        ],
        None
    ],
    "Stets soll nur dir, nur dir mein Lied ertönen,": [
        "Ever shall my song resound for you alone, only for you,",
        [
            {"word": "Stets", "lemma": "stets", "pos": "adverb", "meaning": "always / ever"},
            {"word": "soll", "lemma": "sollen", "pos": "verb", "meaning": "shall"},
            {"word": "nur dir", "lemma": "nur", "pos": "pronoun", "meaning": "only for you (dative)"},
            {"word": "mein Lied", "lemma": "Lied", "pos": "noun", "meaning": "my song"},
            {"word": "ertönen", "lemma": "ertönen", "pos": "verb", "meaning": "resound / ring out"}
        ],
        "Solemn vow opening the third strophe of Tannhäuser's hymn."
    ],
    "gesungen laut sei nur dein Preis von mir!": [
        "sung aloud be your praise alone by me!",
        [
            {"word": "gesungen", "lemma": "singen", "pos": "verb", "meaning": "sung (past participle)"},
            {"word": "laut", "lemma": "laut", "pos": "adverb", "meaning": "aloud / loudly"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (optative subjunctive)"},
            {"word": "dein Preis", "lemma": "Preis", "pos": "noun", "meaning": "your praise (nominative)"},
            {"word": "von mir", "lemma": "von", "pos": "preposition", "meaning": "by me (agent of passive)"}
        ],
        "Passive optative subjunctive 'gesungen ... sei'."
    ],
    "Dein süsser Reiz ist Quelle alles Schönen,": [
        "Your sweet charm is the source of all beauty,",
        [
            {"word": "süsser Reiz", "lemma": "Reiz", "pos": "noun", "meaning": "sweet charm / allure"},
            {"word": "Quelle", "lemma": "Quelle", "pos": "noun", "meaning": "source / fountain"},
            {"word": "alles Schönen", "lemma": "Schöne", "pos": "noun", "meaning": "of all beauty (genitive neuter)"}
        ],
        "Genitive attribute 'alles Schönen' dependent on predicate noun 'Quelle'."
    ],
    "und jedes holde Wunder stammt von dir.": [
        "and every gracious wonder originates from you.",
        [
            {"word": "jedes", "lemma": "jeder", "pos": "pronoun", "meaning": "every / each"},
            {"word": "holde", "lemma": "hold", "pos": "adjective", "meaning": "gracious / lovely"},
            {"word": "Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "wonder / marvel"},
            {"word": "stammt von", "lemma": "stammen", "pos": "verb", "meaning": "originates from / derives from"}
        ],
        "Prepositional verb 'stammen von'."
    ],
    "Die Glut, die du mir in das Herz gegossen,": [
        "The ardor that you poured into my heart,",
        [
            {"word": "Die Glut", "lemma": "Glut", "pos": "noun", "meaning": "the ardor / glow"},
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun accusative feminine)"},
            {"word": "in das Herz", "lemma": "Herz", "pos": "noun", "meaning": "into the heart"},
            {"word": "gegossen", "lemma": "giessen", "pos": "verb", "meaning": "poured (past participle)"}
        ],
        "Metaphorical relative clause modifying 'Die Glut'."
    ],
    "als Flamme lodre hell sie dir allein!": [
        "may it blaze brightly as a flame for you alone!",
        [
            {"word": "Flamme", "lemma": "Flamme", "pos": "noun", "meaning": "flame"},
            {"word": "lodre", "lemma": "lodern", "pos": "verb", "meaning": "may blaze / flare (optative subjunctive)"},
            {"word": "hell", "lemma": "hell", "pos": "adverb", "meaning": "brightly"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (feminine pronoun referring to 'die Glut')"}
        ],
        "Optative subjunctive 'lodre' with pronoun 'sie' referring back to 'die Glut'."
    ],
    "Ja, gegen alle Welt will unverdrossen": [
        "Yes, against all the world, undaunted,",
        [
            {"word": "Ja", "lemma": "ja", "pos": "particle", "meaning": "yes / truly"},
            {"word": "gegen alle Welt", "lemma": "Welt", "pos": "noun", "meaning": "against all the world"},
            {"word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will / intend to"},
            {"word": "unverdrossen", "lemma": "unverdrossen", "pos": "adjective", "meaning": "undaunted / indefatigable"}
        ],
        "Adverbial adjective 'unverdrossen' describing resolute defiance."
    ],
    "fortan ich nun dein kühner Streiter sein!": [
        "I will henceforth be your bold champion!",
        [
            {"word": "fortan", "lemma": "fortan", "pos": "adverb", "meaning": "henceforth / from now on"},
            {"word": "kühner", "lemma": "kühn", "pos": "adjective", "meaning": "bold / valiant"},
            {"word": "Streiter", "lemma": "Streiter", "pos": "noun", "meaning": "warrior / champion"},
            {"word": "sein", "lemma": "sein", "pos": "verb", "meaning": "to be (infinitive dependent on will)"}
        ],
        "Predicate nominative 'dein kühner Streiter' dependent on modal 'will'."
    ],
    "Doch hin muss ich zur Welt der Erden,": [
        "Yet hence I must go to the world of earth,",
        [
            {"word": "Doch", "lemma": "doch", "pos": "conjunction", "meaning": "yet / however"},
            {"word": "hin", "lemma": "hin", "pos": "adverb", "meaning": "thither / hence / away"},
            {"word": "muss", "lemma": "müssen", "pos": "verb", "meaning": "must (with implied verb of motion)"},
            {"word": "Welt der Erden", "lemma": "Erde", "pos": "noun", "meaning": "world of earth (archaic dative/genitive)"}
        ],
        "Directional adverb 'hin' replacing verb of motion after modal 'muss'."
    ],
    "bei dir kann ich nur Sklave werden;": [
        "with you I can only become a slave;",
        [
            {"word": "bei dir", "lemma": "bei", "pos": "preposition", "meaning": "with you / in your presence"},
            {"word": "kann", "lemma": "können", "pos": "verb", "meaning": "can"},
            {"word": "nur", "lemma": "nur", "pos": "adverb", "meaning": "only / merely"},
            {"word": "Sklave", "lemma": "Sklave", "pos": "noun", "meaning": "slave"},
            {"word": "werden", "lemma": "werden", "pos": "verb", "meaning": "become (infinitive)"}
        ],
        "Central dramatic pivot: divine sensuality enslaves the mortal soul."
    ],
    "nach Freiheit doch verlangt es mich,": [
        "yet for freedom do I yearn,",
        [
            {"word": "nach Freiheit", "lemma": "Freiheit", "pos": "noun", "meaning": "for freedom"},
            {"word": "doch", "lemma": "doch", "pos": "particle", "meaning": "yet / nevertheless"},
            {"word": "verlangt es mich", "lemma": "verlangen", "pos": "idiom", "meaning": "I yearn (impersonal verlangen nach)"}
        ],
        "Impersonal construction 'es verlangt mich nach' with accusative of person."
    ],
    "nach Freiheit, Freiheit, dürste ich;": [
        "for freedom, freedom do I thirst;",
        [
            {"word": "nach Freiheit", "lemma": "Freiheit", "pos": "noun", "meaning": "for freedom"},
            {"word": "dürste", "lemma": "dürsten", "pos": "verb", "meaning": "thirst / crave"}
        ],
        "Prepositional verb 'dürsten nach' with emphatic repetition."
    ],
    "zu Kampf und Streite will ich stehn,": [
        "for battle and strife will I stand,",
        [
            {"word": "Kampf", "lemma": "Kampf", "pos": "noun", "meaning": "combat / struggle"},
            {"word": "Streite", "lemma": "Streit", "pos": "noun", "meaning": "strife / battle (dative)"},
            {"word": "will", "lemma": "wollen", "pos": "verb", "meaning": "will / wish to"},
            {"word": "stehn", "lemma": "stehen", "pos": "verb", "meaning": "stand / endure"}
        ],
        "Idiomatic 'zu etwas stehen' meaning to face or be prepared for struggle."
    ],
    "sei's auch auf Tod und Untergehn! -": [
        "be it even unto death and ruin! —",
        [
            {"word": "sei's", "lemma": "sein", "pos": "verb", "meaning": "be it (sei es - concession)"},
            {"word": "auch", "lemma": "auch", "pos": "particle", "meaning": "even / also"},
            {"word": "Tod", "lemma": "Tod", "pos": "noun", "meaning": "death"},
            {"word": "Untergehn", "lemma": "Untergehen", "pos": "noun", "meaning": "ruin / destruction / downfall"}
        ],
        "Concessive subjunctive 'sei's auch' ('even if it leads to...')."
    ],
    "Drum muss aus deinem Reich ich fliehn!": [
        "Therefore from your realm I must flee!",
        [
            {"word": "Drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / for that reason"},
            {"word": "Reich", "lemma": "Reich", "pos": "noun", "meaning": "realm"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee"}
        ],
        "Decisive conclusion of the hymn's third strophe."
    ]
}

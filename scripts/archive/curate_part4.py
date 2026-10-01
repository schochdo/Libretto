# -*- coding: utf-8 -*-
"""Part 4: Scene 3 lines 216-252 (Shepherd song, Pilgrims' chorus, Tannhäuser's prayer)"""

PART4_DATA = {
    "Frau Holda kam aus dem Berg hervor,": [
        "Dame Holda stepped forth from the mountain,",
        [
            {"word": "Frau Holda", "lemma": "Frau Holda", "pos": "noun", "meaning": "Dame Holda (Germanic spring goddess)"},
            {"word": "kam ... hervor", "lemma": "hervorkommen", "pos": "verb", "meaning": "stepped forth / emerged"},
            {"word": "Berg", "lemma": "Berg", "pos": "noun", "meaning": "mountain (Hörselberg)"}
        ],
        "Mythological reference connecting Holda with Venus in popular German folklore."
    ],
    "zu ziehn durch Fluren und Auen,": [
        "to wander through fields and meadows,",
        [
            {"word": "zu ziehn", "lemma": "ziehen", "pos": "verb", "meaning": "to wander / journey (infinitive with zu)"},
            {"word": "durch", "lemma": "durch", "pos": "preposition", "meaning": "through"},
            {"word": "Fluren", "lemma": "Flur", "pos": "noun", "meaning": "fields / plains (accusative plural)"},
            {"word": "Auen", "lemma": "Aue", "pos": "noun", "meaning": "meadows / pastures (accusative plural)"}
        ],
        "Traditional poetic pair 'Fluren und Auen'."
    ],
    "gar süssen Klang vernahm da mein Ohr,": [
        "most sweet sound did my ear catch then,",
        [
            {"word": "gar", "lemma": "gar", "pos": "adverb", "meaning": "very / most"},
            {"word": "süssen Klang", "lemma": "Klang", "pos": "noun", "meaning": "sweet sound / melody (accusative)"},
            {"word": "vernahm", "lemma": "vernehmen", "pos": "verb", "meaning": "perceived / heard (preterite)"},
            {"word": "mein Ohr", "lemma": "Ohr", "pos": "noun", "meaning": "my ear (nominative subject)"}
        ],
        "Inverted word order with fronted object."
    ],
    "mein Auge begehrte zu schauen.": [
        "my eye desired to behold.",
        [
            {"word": "mein Auge", "lemma": "Auge", "pos": "noun", "meaning": "my eye"},
            {"word": "begehrte", "lemma": "begehren", "pos": "verb", "meaning": "desired / longed (preterite)"},
            {"word": "zu schauen", "lemma": "schauen", "pos": "verb", "meaning": "to look / behold (infinitive with zu)"}
        ],
        "Parallel sensory experience (ear/eye)."
    ],
    "Da träumt' ich manchen holden Traum,": [
        "Then I dreamed many a lovely dream,",
        [
            {"word": "träumt'", "lemma": "träumen", "pos": "verb", "meaning": "dreamed (preterite)"},
            {"word": "manchen", "lemma": "mancher", "pos": "pronoun", "meaning": "many a"},
            {"word": "holden", "lemma": "hold", "pos": "adjective", "meaning": "lovely / sweet"},
            {"word": "Traum", "lemma": "Traum", "pos": "noun", "meaning": "dream"}
        ],
        "Cognate accusative (figura etymologica): 'träumt' ... Traum'."
    ],
    "und als mein Aug' erschlossen kaum,": [
        "and scarcely had my eye opened,",
        [
            {"word": "als", "lemma": "als", "pos": "conjunction", "meaning": "when / as"},
            {"word": "Aug'", "lemma": "Auge", "pos": "noun", "meaning": "eye (apocope)"},
            {"word": "erschlossen", "lemma": "erschliessen", "pos": "verb", "meaning": "opened (past participle with war omitted)"},
            {"word": "kaum", "lemma": "kaum", "pos": "adverb", "meaning": "scarcely / barely"}
        ],
        "Subordinate temporal clause with omitted copula."
    ],
    "da strahlte warm die Sonnen,": [
        "then the sun shone warmly,",
        [
            {"word": "da", "lemma": "da", "pos": "adverb", "meaning": "then"},
            {"word": "strahlte", "lemma": "strahlen", "pos": "verb", "meaning": "shone / radiated"},
            {"word": "warm", "lemma": "warm", "pos": "adverb", "meaning": "warmly"},
            {"word": "Sonnen", "lemma": "Sonne", "pos": "noun", "meaning": "the sun (archaic weak nominative)"}
        ],
        "Archaic/dialectal weak form 'die Sonnen' for feminine nominative singular."
    ],
    "der Mai, der Mai war kommen.": [
        "May, May had arrived.",
        [
            {"word": "Mai", "lemma": "Mai", "pos": "noun", "meaning": "May / springtime"},
            {"word": "war kommen", "lemma": "kommen", "pos": "verb", "meaning": "had come / arrived (archaic for gekommen war)"}
        ],
        "Archaic uninflected past participle 'kommen' forming past perfect."
    ],
    "Nun spiel ich lustig die Schalmei,": [
        "Now merrily I play the shawm,",
        [
            {"word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now"},
            {"word": "spiel ich", "lemma": "spielen", "pos": "verb", "meaning": "I play"},
            {"word": "lustig", "lemma": "lustig", "pos": "adverb", "meaning": "merrily / joyfully"},
            {"word": "die Schalmei", "lemma": "Schalmei", "pos": "noun", "meaning": "the shawm / pipe (pastoral woodwind)"}
        ],
        "Pastoral iconography of the shawm (Schalmei)."
    ],
    "der Mai ist da, der liebe Mai!": [
        "May is here, dear May!",
        [
            {"word": "ist da", "lemma": "da sein", "pos": "verb", "meaning": "is here / has arrived"},
            {"word": "liebe", "lemma": "lieb", "pos": "adjective", "meaning": "dear / beloved"},
            {"word": "Mai", "lemma": "Mai", "pos": "noun", "meaning": "May"}
        ],
        None
    ],
    "Zu dir wall ich, mein Jesus Christ,": [
        "To you I make pilgrimage, my Jesus Christ,",
        [
            {"word": "Zu dir", "lemma": "zu", "pos": "preposition", "meaning": "to you"},
            {"word": "wall ich", "lemma": "wallen", "pos": "verb", "meaning": "I make pilgrimage / journey piously"},
            {"word": "Jesus Christ", "lemma": "Jesus Christus", "pos": "noun", "meaning": "Jesus Christ (vocative)"}
        ],
        "Archaic verb 'wallen' meaning to make a religious pilgrimage (Wallfahrt)."
    ],
    "der du des Pilgers Hoffnung bist!": [
        "who are the pilgrim's hope!",
        [
            {"word": "der du", "lemma": "der", "pos": "pronoun", "meaning": "who (relative pronoun with 2nd person pronoun)"},
            {"word": "des Pilgers", "lemma": "Pilger", "pos": "noun", "meaning": "of the pilgrim / pilgrim's (genitive masculine)"},
            {"word": "Hoffnung", "lemma": "Hoffnung", "pos": "noun", "meaning": "hope"},
            {"word": "bist", "lemma": "sein", "pos": "verb", "meaning": "are"}
        ],
        "Traditional relative clause construction 'der du' agreeing with 2nd-person address."
    ],
    "Gelobt sei, Jungfrau süss und rein,": [
        "Praised be, Virgin sweet and pure,",
        [
            {"word": "Gelobt sei", "lemma": "loben", "pos": "verb", "meaning": "praised be (optative passive)"},
            {"word": "Jungfrau", "lemma": "Jungfrau", "pos": "noun", "meaning": "Virgin (Mary)"},
            {"word": "süss", "lemma": "süss", "pos": "adjective", "meaning": "sweet"},
            {"word": "rein", "lemma": "rein", "pos": "adjective", "meaning": "pure / spotless"}
        ],
        "Optative subjunctive 'Gelobt sei' greeting the Virgin Mary."
    ],
    "der Wallfahrt wolle günstig sein!": [
        "be gracious unto our pilgrimage!",
        [
            {"word": "der Wallfahrt", "lemma": "Wallfahrt", "pos": "noun", "meaning": "unto the pilgrimage (dative feminine)"},
            {"word": "wolle ... sein", "lemma": "wollen", "pos": "verb", "meaning": "be pleased to be (optative subjunctive)"},
            {"word": "günstig", "lemma": "günstig", "pos": "adjective", "meaning": "gracious / propitious / favorable"}
        ],
        "Construction 'günstig sein' governing dative 'der Wallfahrt'."
    ],
    "Ach, schwer drückt mich der Sünden Last,": [
        "Ah, heavy upon me weighs the burden of sins,",
        [
            {"word": "schwer", "lemma": "schwer", "pos": "adverb", "meaning": "heavily / sorely"},
            {"word": "drückt", "lemma": "drücken", "pos": "verb", "meaning": "weighs down / oppresses"},
            {"word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative)"},
            {"word": "der Sünden", "lemma": "Sünde", "pos": "noun", "meaning": "of sins (genitive plural)"},
            {"word": "Last", "lemma": "Last", "pos": "noun", "meaning": "burden / load (nominative subject)"}
        ],
        "Preposed genitive attribute 'der Sünden' modifying 'Last'."
    ],
    "kann länger sie nicht mehr ertragen!": [
        "I can bear it no longer!",
        [
            {"word": "kann", "lemma": "können", "pos": "verb", "meaning": "can (subject ich omitted)"},
            {"word": "länger ... nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no longer"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (feminine pronoun referring to 'der Sünden Last')"},
            {"word": "ertragen", "lemma": "ertragen", "pos": "verb", "meaning": "bear / endure (infinitive)"}
        ],
        "Feminine pronoun 'sie' refers semantically to 'Last' ('it'). Omission of subject pronoun 'ich'."
    ],
    "Drum will ich auch nicht Ruh' noch Rast,": [
        "Therefore I want neither rest nor repose,",
        [
            {"word": "Drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / wherefore"},
            {"word": "nicht ... noch", "lemma": "weder noch", "pos": "conjunction", "meaning": "neither ... nor"},
            {"word": "Ruh'", "lemma": "Ruhe", "pos": "noun", "meaning": "rest (apocope)"},
            {"word": "Rast", "lemma": "Rast", "pos": "noun", "meaning": "repose"}
        ],
        "Traditional alliterative pairing 'Ruh' noch Rast'."
    ],
    "und wähle gern mir Müh' und Plagen.": [
        "and gladly choose toil and suffering for myself.",
        [
            {"word": "wähle", "lemma": "wählen", "pos": "verb", "meaning": "choose"},
            {"word": "gern", "lemma": "gern", "pos": "adverb", "meaning": "gladly / willingly"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "for myself (dative)"},
            {"word": "Müh'", "lemma": "Mühe", "pos": "noun", "meaning": "toil / hardship (apocope)"},
            {"word": "Plagen", "lemma": "Plage", "pos": "noun", "meaning": "torments / tribulations"}
        ],
        "Dative reflexive of interest 'mir'."
    ],
    "Am hohen Fest der Gnad' und Huld,": [
        "On the high feast of grace and favor,",
        [
            {"word": "Fest", "lemma": "Fest", "pos": "noun", "meaning": "feast / festival"},
            {"word": "der Gnad'", "lemma": "Gnade", "pos": "noun", "meaning": "of grace (genitive feminine with apocope)"},
            {"word": "Huld", "lemma": "Huld", "pos": "noun", "meaning": "favor / mercy"}
        ],
        "Allusion to the papal jubilee and plenary indulgence."
    ],
    "in Demut sühn ich meine Schuld;": [
        "in humility I atone for my guilt;",
        [
            {"word": "in Demut", "lemma": "Demut", "pos": "noun", "meaning": "in humility"},
            {"word": "sühn ich", "lemma": "sühnen", "pos": "verb", "meaning": "I atone for / expiate"},
            {"word": "meine Schuld", "lemma": "Schuld", "pos": "noun", "meaning": "my guilt / transgression"}
        ],
        None
    ],
    "gesegnet, wer im Glauben treu:": [
        "blessed is he who is faithful in faith:",
        [
            {"word": "gesegnet", "lemma": "segnen", "pos": "adjective", "meaning": "blessed (past participle)"},
            {"word": "wer", "lemma": "wer", "pos": "pronoun", "meaning": "whoever / he who"},
            {"word": "Glauben", "lemma": "Glaube", "pos": "noun", "meaning": "faith"},
            {"word": "treu", "lemma": "treu", "pos": "adjective", "meaning": "faithful / loyal"}
        ],
        "Elliptical beatitude with copula omitted."
    ],
    "er wird erlöst durch Buss' und Reu'.": [
        "he is redeemed through penance and contrition.",
        [
            {"word": "wird erlöst", "lemma": "erlösen", "pos": "verb", "meaning": "is redeemed / saved (passive)"},
            {"word": "Buss'", "lemma": "Busse", "pos": "noun", "meaning": "penance (apocope)"},
            {"word": "Reu'", "lemma": "Reue", "pos": "noun", "meaning": "contrition / repentance (apocope)"}
        ],
        "Central soteriological statement of the Pilgrims' Chorus."
    ],
    "Glück auf! Glück auf nach Rom!": [
        "Godspeed! Godspeed on the way to Rome!",
        [
            {"word": "Glück auf", "lemma": "Glück auf", "pos": "interjection", "meaning": "good luck! / godspeed!"},
            {"word": "nach Rom", "lemma": "Rom", "pos": "noun", "meaning": "to Rome"}
        ],
        "Traditional greeting conveying well-wishes for the arduous journey."
    ],
    "Betet für meine arme Seele!": [
        "Pray for my poor soul!",
        [
            {"word": "Betet", "lemma": "beten", "pos": "verb", "meaning": "pray (imperative plural)"},
            {"word": "für", "lemma": "für", "pos": "preposition", "meaning": "for"},
            {"word": "arme Seele", "lemma": "Seele", "pos": "noun", "meaning": "poor soul"}
        ],
        "The young shepherd's petition to the departing pilgrims."
    ],
    "Allmächt'ger, dir sei Preis!": [
        "Almighty One, praise be to you!",
        [
            {"word": "Allmächt'ger", "lemma": "Allmächtiger", "pos": "noun", "meaning": "Almighty God (vocative)"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "sei Preis", "lemma": "Preis", "pos": "noun", "meaning": "be praise (optative subjunctive)"}
        ],
        "Tannhäuser's profound prayer of thanksgiving as he falls to his knees."
    ],
    "Gross sind die Wunder deiner Gnade!": [
        "Great are the wonders of your grace!",
        [
            {"word": "Gross", "lemma": "gross", "pos": "adjective", "meaning": "great / wondrous"},
            {"word": "Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "wonders / marvels"},
            {"word": "deiner Gnade", "lemma": "Gnade", "pos": "noun", "meaning": "of your grace (genitive feminine)"}
        ],
        None
    ],
    "kann länger sie nicht mehr ertragen:": [
        "I can bear it no longer:",
        [
            {"word": "kann", "lemma": "können", "pos": "verb", "meaning": "can"},
            {"word": "länger ... nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no longer"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (referring to 'der Sünden Last')"},
            {"word": "ertragen", "lemma": "ertragen", "pos": "verb", "meaning": "bear / endure"}
        ],
        "Variant ending with colon."
    ],
    "drum will ich auch nicht Ruh' noch Rast,": [
        "therefore I want neither rest nor repose,",
        [
            {"word": "drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / for that reason"},
            {"word": "nicht ... noch", "lemma": "weder noch", "pos": "conjunction", "meaning": "neither ... nor"},
            {"word": "Ruh'", "lemma": "Ruhe", "pos": "noun", "meaning": "rest"},
            {"word": "Rast", "lemma": "Rast", "pos": "noun", "meaning": "repose"}
        ],
        "Variant starting with lowercase 'drum'."
    ],
    "gesegnet, wer im Glauben treu.": [
        "blessed is he who is faithful in faith.",
        [
            {"word": "gesegnet", "lemma": "segnen", "pos": "adjective", "meaning": "blessed"},
            {"word": "wer", "lemma": "wer", "pos": "pronoun", "meaning": "whoever / he who"},
            {"word": "Glauben", "lemma": "Glaube", "pos": "noun", "meaning": "faith"},
            {"word": "treu", "lemma": "treu", "pos": "adjective", "meaning": "faithful / loyal"}
        ],
        "Variant ending with period."
    ]
}

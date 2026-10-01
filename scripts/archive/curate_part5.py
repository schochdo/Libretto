# -*- coding: utf-8 -*-
"""Part 5: Scene 2 hymns missing lines & Scene 4 Act 1 Finale"""

PART5_DATA = {
    # 1. a1_s2_c15_l1
    "Dank deiner Huld, gepriesen sei dein Lieben!": [
        "Thanks to your grace, praised be your love!",
        [
            {"word": "Dank", "lemma": "Dank", "pos": "noun", "meaning": "thanks / gratitude"},
            {"word": "deiner Huld", "lemma": "Huld", "pos": "noun", "meaning": "your grace / favor (dative feminine)"},
            {"word": "gepriesen sei", "lemma": "preisen", "pos": "verb", "meaning": "praised be (optative subjunctive passive)"},
            {"word": "dein Lieben", "lemma": "Lieben", "pos": "noun", "meaning": "your loving / affection (substantivized infinitive)"}
        ],
        "Dative formula of gratitude followed by an optative passive clause with the substantivized infinitive 'Lieben'."
    ],

    # 2. a1_s2_c15_l16
    "O Königin!": [
        "O Queen!",
        [
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "O / oh"},
            {"word": "Königin", "lemma": "Königin", "pos": "noun", "meaning": "queen"}
        ],
        "Direct vocative address to Venus."
    ],

    # 3. a1_s4_c1_l1
    "Wer ist der dort in brunstigem Gebete?": [
        "Who is that one there in fervent prayer?",
        [
            {"word": "Wer", "lemma": "wer", "pos": "pronoun", "meaning": "who"},
            {"word": "der dort", "lemma": "der dort", "pos": "pronoun", "meaning": "that one there / he there"},
            {"word": "brunstigem", "lemma": "brunstig", "pos": "adjective", "meaning": "fervent / ardent (dative neuter)"},
            {"word": "Gebete", "lemma": "Gebet", "pos": "noun", "meaning": "prayer (dative neuter with archaic -e)"}
        ],
        "Demonstrative pronoun 'der' functioning as antecedent modified by locative adverb 'dort' and prepositional phrase."
    ],

    # 4. a1_s4_c2_l1
    "Ein Büsser wohl.": [
        "A penitent, likely.",
        [
            {"word": "Ein Büsser", "lemma": "Büßer", "pos": "noun", "meaning": "a penitent / penance-doer"},
            {"word": "wohl", "lemma": "wohl", "pos": "adverb", "meaning": "likely / probably / surely"}
        ],
        "Elliptical clause with modal particle 'wohl' expressing an inferential assumption."
    ],

    # 5. a1_s4_c3_l1
    "Nach seiner Tracht ein Ritter.": [
        "By his attire, a knight.",
        [
            {"word": "Nach", "lemma": "nach", "pos": "preposition", "meaning": "according to / by (governs dative)"},
            {"word": "seiner Tracht", "lemma": "Tracht", "pos": "noun", "meaning": "his attire / garb"},
            {"word": "Ritter", "lemma": "Ritter", "pos": "noun", "meaning": "knight"}
        ],
        "Prepositional phrase specifying the basis of identification with elliptical copula."
    ],

    # 6. a1_s4_c4_l1
    "Er ist es!": [
        "It is he!",
        [
            {"word": "Er", "lemma": "er", "pos": "pronoun", "meaning": "he"},
            {"word": "ist", "lemma": "sein", "pos": "verb", "meaning": "is"},
            {"word": "es", "lemma": "es", "pos": "pronoun", "meaning": "it (impersonal predicate complement)"}
        ],
        "German idiom 'Er ist es' corresponding to English 'It is he' with fronted subject pronoun."
    ],

    # 7. a1_s4_c5_l1
    "Heinrich! Heinrich! Seh' ich recht?": [
        "Heinrich! Heinrich! Do I see aright?",
        [
            {"word": "Heinrich", "lemma": "Heinrich", "pos": "noun", "meaning": "Heinrich (Tannhäuser's name)"},
            {"word": "Seh' ich", "lemma": "sehen", "pos": "verb", "meaning": "do I see (interrogative inversion)"},
            {"word": "recht", "lemma": "recht", "pos": "adverb", "meaning": "aright / correctly"}
        ],
        "Double vocative followed by inverted question expressing astonished recognition."
    ],

    # 8. a1_s4_c7_l1
    "Du bist es wirklich? Kehrest in den Kreis": [
        "Is it truly you? Do you return to the circle",
        [
            {"word": "wirklich", "lemma": "wirklich", "pos": "adverb", "meaning": "truly / really"},
            {"word": "Kehrest", "lemma": "kehren", "pos": "verb", "meaning": "do you return (second person singular)"},
            {"word": "in den Kreis", "lemma": "Kreis", "pos": "noun", "meaning": "into the circle / fellowship"}
        ],
        "Declarative question followed by elliptical second-person interrogative with separable verb 'zurückkehren' concluding in the next line."
    ],

    # 9. a1_s4_c7_l2
    "zurück, den du in Hochmut stolz verliessest?": [
        "back, which in pride you haughtily left?",
        [
            {"word": "zurück", "lemma": "zurück", "pos": "adverb", "meaning": "back (separable prefix)"},
            {"word": "den", "lemma": "der", "pos": "pronoun", "meaning": "which / that (relative pronoun, masculine accusative)"},
            {"word": "in Hochmut", "lemma": "Hochmut", "pos": "noun", "meaning": "in pride / arrogance"},
            {"word": "stolz", "lemma": "stolz", "pos": "adverb", "meaning": "proudly / haughtily"},
            {"word": "verliessest", "lemma": "verlassen", "pos": "verb", "meaning": "left / deserted (archaic preterite)"}
        ],
        "Separable prefix completing 'zurückkehren', followed by relative clause introduced by accusative relative pronoun 'den'."
    ],

    # 10. a1_s4_c8_l1
    "Sag, was uns deine Wiederkehr bedeutet?": [
        "Say, what your return signifies to us?",
        [
            {"word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "say / tell (imperative)"},
            {"word": "was", "lemma": "was", "pos": "pronoun", "meaning": "what"},
            {"word": "deine Wiederkehr", "lemma": "Wiederkehr", "pos": "noun", "meaning": "your return"},
            {"word": "bedeutet", "lemma": "bedeuten", "pos": "verb", "meaning": "means / signifies (governs dative uns)"}
        ],
        "Imperative 'Sag' introducing an indirect question with verb-final word order."
    ],

    # 11. a1_s4_c9_l1
    "Sag es an!": [
        "Declare it!",
        [
            {"word": "Sag ... an", "lemma": "ansagen", "pos": "verb", "meaning": "declare / announce (separable imperative)"},
            {"word": "es", "lemma": "es", "pos": "pronoun", "meaning": "it (accusative direct object)"}
        ],
        "Separable imperative demanding an open proclamation."
    ],

    # 12. a1_s4_c10_l1
    "Versöhnung? oder gilt's erneutem Kampf?": [
        "Reconciliation? Or does it mean renewed combat?",
        [
            {"word": "Versöhnung", "lemma": "Versöhnung", "pos": "noun", "meaning": "reconciliation / atonement"},
            {"word": "gilt's", "lemma": "gelten", "pos": "verb", "meaning": "is it for / does it mean (contraction of gilt es + dative)"},
            {"word": "erneutem", "lemma": "erneut", "pos": "adjective", "meaning": "renewed (dative masculine)"},
            {"word": "Kampf", "lemma": "Kampf", "pos": "noun", "meaning": "combat / fight / struggle"}
        ],
        "Impersonal construction 'gilt's' (gilt es) taking a dative complement to indicate what is at stake."
    ],

    # 13. a1_s4_c11_l1
    "Nahst du als Freund uns oder Feind?": [
        "Do you approach us as friend or foe?",
        [
            {"word": "Nahst du", "lemma": "nahen", "pos": "verb", "meaning": "do you approach / draw near (governs dative uns)"},
            {"word": "als Freund", "lemma": "Freund", "pos": "noun", "meaning": "as friend"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (dative)"},
            {"word": "Feind", "lemma": "Feind", "pos": "noun", "meaning": "foe / enemy"}
        ],
        "Inverted interrogative construction with verb 'nahen' governing dative 'uns' and predicate appositives."
    ],

    # 14. a1_s4_c12_l1
    "Als Feind?": [
        "As foe?",
        [
            {"word": "Als", "lemma": "als", "pos": "conjunction", "meaning": "as"},
            {"word": "Feind", "lemma": "Feind", "pos": "noun", "meaning": "foe / enemy"}
        ],
        "Elliptical interrogative echo repeating the ominous alternative."
    ],

    # 15. a1_s4_c13_l1
    "O fraget nicht! Ist dies des Hochmuts Miene?": [
        "O ask not! Is this the mien of pride?",
        [
            {"word": "fraget nicht", "lemma": "fragen", "pos": "verb", "meaning": "do not ask / ask not (plural imperative)"},
            {"word": "des Hochmuts", "lemma": "Hochmut", "pos": "noun", "meaning": "of pride / haughtiness (genitive masculine)"},
            {"word": "Miene", "lemma": "Miene", "pos": "noun", "meaning": "mien / countenance / expression"}
        ],
        "Plural imperative followed by a rhetorical question highlighting Tannhäuser's broken humility."
    ],

    # 16. a1_s4_c14_l1
    "Gegrüsst sei uns, du kühner Sänger,": [
        "Be greeted by us, you bold singer,",
        [
            {"word": "Gegrüsst sei", "lemma": "grüßen", "pos": "verb", "meaning": "be greeted / welcome (optative subjunctive)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "by us / unto us (dative)"},
            {"word": "kühner", "lemma": "kühn", "pos": "adjective", "meaning": "bold / daring"},
            {"word": "Sänger", "lemma": "Sänger", "pos": "noun", "meaning": "singer / minstrel (vocative)"}
        ],
        "Optative passive construction 'Gegrüsst sei' with dative of interest 'uns' and vocative address."
    ],

    # 17. a1_s4_c14_l2
    "der ach! so lang' in unsrer Mitte fehlt!": [
        "who, alas! has been missing so long from our midst!",
        [
            {"word": "der", "lemma": "der", "pos": "pronoun", "meaning": "who (relative pronoun, masculine nominative)"},
            {"word": "ach", "lemma": "ach", "pos": "interjection", "meaning": "alas / ah"},
            {"word": "so lang'", "lemma": "so lang", "pos": "adverb", "meaning": "so long"},
            {"word": "in unsrer Mitte", "lemma": "Mitte", "pos": "noun", "meaning": "in our midst (dative feminine)"},
            {"word": "fehlt", "lemma": "fehlen", "pos": "verb", "meaning": "is missing / has been absent"}
        ],
        "Relative clause modifying 'Sänger' with present tense denoting ongoing absence, interrupted by interjection 'ach!'."
    ],

    # 18. a1_s4_c15_l1
    "Willkommen, wenn du friedlich nahst!": [
        "Welcome, if you approach peacefully!",
        [
            {"word": "Willkommen", "lemma": "willkommen", "pos": "adjective", "meaning": "welcome"},
            {"word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if"},
            {"word": "friedlich", "lemma": "friedlich", "pos": "adverb", "meaning": "peacefully"},
            {"word": "nahst", "lemma": "nahen", "pos": "verb", "meaning": "approach / draw near"}
        ],
        "Elliptical greeting with conditional subordinate clause."
    ],

    # 19. a1_s4_c16_l1
    "Gegrüsst, wenn du uns Freunde nennst!": [
        "Be greeted, if you call us friends!",
        [
            {"word": "Gegrüsst", "lemma": "grüßen", "pos": "verb", "meaning": "greeted / welcome (past participle)"},
            {"word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (accusative)"},
            {"word": "Freunde", "lemma": "Freund", "pos": "noun", "meaning": "friends (predicative accusative)"},
            {"word": "nennst", "lemma": "nennen", "pos": "verb", "meaning": "call / name"}
        ],
        "Elliptical greeting governing conditional clause with double accusative ('uns Freunde')."
    ],

    # 20. a1_s4_c16_l2
    "Gegrüsst, gegrüsst, gegrüsst sei uns!": [
        "Greeted, greeted, greeted be you to us!",
        [
            {"word": "Gegrüsst", "lemma": "grüßen", "pos": "verb", "meaning": "greeted (past participle)"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (optative subjunctive)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "to us (dative)"}
        ],
        "Tricolon of the participle in an optative passive construction."
    ],

    # 21. a1_s4_c18_l1
    "So sei willkommen denn auch mir!": [
        "Then be welcome also to me!",
        [
            {"word": "So", "lemma": "so", "pos": "adverb", "meaning": "so / then"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (optative subjunctive / imperative)"},
            {"word": "willkommen", "lemma": "willkommen", "pos": "adjective", "meaning": "welcome"},
            {"word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then / therefore"},
            {"word": "auch mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me also (dative pronoun)"}
        ],
        "Optative subjunctive with modal particle 'denn' and dative pronoun 'mir'."
    ],

    # 22. a1_s4_c18_l2
    "Sag' an, wo weiltest du so lang?": [
        "Speak out, where did you linger so long?",
        [
            {"word": "Sag' an", "lemma": "ansagen", "pos": "verb", "meaning": "speak out / declare (separable imperative)"},
            {"word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where"},
            {"word": "weiltest du", "lemma": "weilen", "pos": "verb", "meaning": "did you linger / tarry (preterite)"},
            {"word": "so lang", "lemma": "so lang", "pos": "adverb", "meaning": "so long"}
        ],
        "Separable imperative 'Sag' an' governing an interrogative clause."
    ],

    # 23. a1_s4_c19_l1
    "Ich wanderte in weiter, weiter Fern' -": [
        "I wandered in far, far distance -",
        [
            {"word": "Ich wanderte", "lemma": "wandern", "pos": "verb", "meaning": "I wandered (preterite)"},
            {"word": "in weiter ... Fern'", "lemma": "Ferne", "pos": "noun", "meaning": "in far distance (dative feminine with apocope)"},
            {"word": "weiter", "lemma": "weit", "pos": "adjective", "meaning": "far / distant"}
        ],
        "Poetic repetition ('weiter, weiter') emphasizing boundless distance, with apocopated dative 'Fern''."
    ],

    # 24. a1_s4_c19_l2
    "da, wo ich nimmer Rast noch Ruhe fand.": [
        "there, where I never found rest nor repose.",
        [
            {"word": "da, wo", "lemma": "da wo", "pos": "adverb", "meaning": "there where"},
            {"word": "nimmer", "lemma": "nimmer", "pos": "adverb", "meaning": "never / at no time"},
            {"word": "Rast noch Ruhe", "lemma": "Rast", "pos": "noun", "meaning": "rest nor repose (alliterative pair)"},
            {"word": "fand", "lemma": "finden", "pos": "verb", "meaning": "found (preterite)"}
        ],
        "Relative locative clause with correlative negative pair 'nimmer ... noch'."
    ],

    # 25. a1_s4_c19_l3
    "Fragt nicht! Zum Kampf mit euch kam ich nicht her;": [
        "Ask not! For combat with you I came not hither;",
        [
            {"word": "Fragt nicht", "lemma": "fragen", "pos": "verb", "meaning": "ask not / do not ask (plural imperative)"},
            {"word": "Zum Kampf", "lemma": "Kampf", "pos": "noun", "meaning": "for combat / to fight (dative masculine)"},
            {"word": "mit euch", "lemma": "ihr", "pos": "pronoun", "meaning": "with you (dative plural)"},
            {"word": "kam ... her", "lemma": "herkommen", "pos": "verb", "meaning": "came hither / came here (separable preterite)"}
        ],
        "Imperative followed by main clause with topicalized purpose phrase and negated verb."
    ],

    # 26. a1_s4_c19_l4
    "seid mir versöhnt - und lasst mich weiter ziehn!": [
        "be reconciled with me - and let me wander on!",
        [
            {"word": "seid ... versöhnt", "lemma": "versöhnen", "pos": "verb", "meaning": "be reconciled (imperative with participle)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "with me / to me (dative of interest)"},
            {"word": "lasst mich", "lemma": "lassen", "pos": "verb", "meaning": "let me (imperative)"},
            {"word": "weiter ziehn", "lemma": "weiterziehen", "pos": "verb", "meaning": "wander on / journey onward (infinitive)"}
        ],
        "Imperative clause with dative of interest 'mir' paired with causative 'lassen' plus infinitive."
    ],

    # 27. a1_s4_c20_l1
    "Nicht doch! Der unsre bist du neu geworden.": [
        "Not so! Ours have you newly become.",
        [
            {"word": "Nicht doch", "lemma": "nicht doch", "pos": "particle", "meaning": "not so / by no means"},
            {"word": "Der unsre", "lemma": "unsere", "pos": "pronoun", "meaning": "ours / one of us (substantivized possessive)"},
            {"word": "bist ... geworden", "lemma": "werden", "pos": "verb", "meaning": "have become (perfect tense)"},
            {"word": "neu", "lemma": "neu", "pos": "adverb", "meaning": "anew / newly"}
        ],
        "Fronted possessive pronoun 'Der unsre' acting as predicate complement with copula 'werden'."
    ],

    # 28. a1_s4_c21_l1
    "Du darfst nicht ziehn.": [
        "You may not depart.",
        [
            {"word": "darfst", "lemma": "dürfen", "pos": "verb", "meaning": "may / are permitted (modal verb)"},
            {"word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not"},
            {"word": "ziehn", "lemma": "ziehen", "pos": "verb", "meaning": "depart / wander (infinitive)"}
        ],
        "Negated modal auxiliary 'dürfen' expressing prohibition."
    ],

    # 29. a1_s4_c22_l1
    "Wir lassen dich nicht fort.": [
        "We will not let you go away.",
        [
            {"word": "Wir lassen", "lemma": "lassen", "pos": "verb", "meaning": "we let / allow"},
            {"word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative)"},
            {"word": "nicht fort", "lemma": "fortlassen", "pos": "verb", "meaning": "not go away / not leave (separable particle fort)"}
        ],
        "Verb 'lassen' with directional adverb 'fort' forming an idiom meaning 'to let someone depart'."
    ],

    # 30. a1_s4_c23_l1
    "Bleib bei uns!": [
        "Stay with us!",
        [
            {"word": "Bleib", "lemma": "bleiben", "pos": "verb", "meaning": "stay / remain (imperative)"},
            {"word": "bei", "lemma": "bei", "pos": "preposition", "meaning": "with (governs dative)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (dative)"}
        ],
        "Direct imperative commanding Tannhäuser to remain."
    ],

    # 31. a1_s4_c24_l1
    "Lasst mich! Mir frommet kein Verweilen;": [
        "Leave me! No tarrying avails me;",
        [
            {"word": "Lasst mich", "lemma": "lassen", "pos": "verb", "meaning": "leave me / let me be (imperative)"},
            {"word": "Mir frommet", "lemma": "frommen", "pos": "verb", "meaning": "avails me / profits me (dative construction)"},
            {"word": "kein Verweilen", "lemma": "Verweilen", "pos": "noun", "meaning": "no tarrying / lingering (substantivized infinitive)"}
        ],
        "Imperative followed by an impersonal dative construction with the archaic verb 'frommen'."
    ],

    # 32. a1_s4_c24_l2
    "und nimmer kann ich rastend stehn!": [
        "and never can I stand resting!",
        [
            {"word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and"},
            {"word": "nimmer", "lemma": "nimmer", "pos": "adverb", "meaning": "never / at no time"},
            {"word": "kann ich", "lemma": "können", "pos": "verb", "meaning": "can I (modal verb with inversion)"},
            {"word": "rastend", "lemma": "rasten", "pos": "adjective", "meaning": "resting (present participle)"},
            {"word": "stehn", "lemma": "stehen", "pos": "verb", "meaning": "stand (infinitive)"}
        ],
        "Modal auxiliary 'können' governing infinitive 'stehen' modified by the present participle 'rastend'."
    ],

    # 33. a1_s4_c24_l3
    "Mein Weg heisst mich nur vorwärts eilen,": [
        "My path bids me only hasten forward,",
        [
            {"word": "Mein Weg", "lemma": "Weg", "pos": "noun", "meaning": "my path / way"},
            {"word": "heisst mich", "lemma": "heißen", "pos": "verb", "meaning": "bids me / commands me"},
            {"word": "nur vorwärts", "lemma": "vorwärts", "pos": "adverb", "meaning": "only forward"},
            {"word": "eilen", "lemma": "eilen", "pos": "verb", "meaning": "to hasten / hurry (bare infinitive)"}
        ],
        "Directive verb 'heißen' taking an accusative object and bare infinitive."
    ],

    # 34. a1_s4_c24_l4
    "und nimmer darf ich rückwärts sehn!": [
        "and never may I look backward!",
        [
            {"word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and"},
            {"word": "nimmer", "lemma": "nimmer", "pos": "adverb", "meaning": "never"},
            {"word": "darf ich", "lemma": "dürfen", "pos": "verb", "meaning": "may I / am I permitted (modal verb)"},
            {"word": "rückwärts", "lemma": "rückwärts", "pos": "adverb", "meaning": "backward / behind"},
            {"word": "sehn", "lemma": "sehen", "pos": "verb", "meaning": "look / see (infinitive)"}
        ],
        "Modal auxiliary 'dürfen' expressing fate-bound prohibition with fronted negative adverb."
    ],

    # 35. a1_s4_c25_l1
    "Oh bleib'! Bei uns sollst du verweilen,": [
        "Oh stay! With us you shall tarry,",
        [
            {"word": "Oh bleib'", "lemma": "bleiben", "pos": "verb", "meaning": "oh stay (interjection + imperative)"},
            {"word": "Bei uns", "lemma": "bei", "pos": "preposition", "meaning": "with us (dative)"},
            {"word": "sollst du", "lemma": "sollen", "pos": "verb", "meaning": "you shall (modal auxiliary)"},
            {"word": "verweilen", "lemma": "verweilen", "pos": "verb", "meaning": "tarry / linger / dwell (infinitive)"}
        ],
        "Modal verb 'sollen' expressing insistence and warm hospitality."
    ],

    # 36. a1_s4_c25_l2
    "wir lassen dich nicht von uns gehn!": [
        "we will not let you go from us!",
        [
            {"word": "wir lassen", "lemma": "lassen", "pos": "verb", "meaning": "we let / allow"},
            {"word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative)"},
            {"word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not"},
            {"word": "von uns", "lemma": "von", "pos": "preposition", "meaning": "from us"},
            {"word": "gehn", "lemma": "gehen", "pos": "verb", "meaning": "go / depart (infinitive)"}
        ],
        "Negated causative 'lassen' governing direct object 'dich' and infinitive 'gehn'."
    ],

    # 37. a1_s4_c25_l3
    "Du suchtest uns, warum enteilen?": [
        "You sought us, why hasten away?",
        [
            {"word": "Du suchtest", "lemma": "suchen", "pos": "verb", "meaning": "you sought (preterite)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (accusative)"},
            {"word": "warum", "lemma": "warum", "pos": "adverb", "meaning": "why"},
            {"word": "enteilen", "lemma": "enteilen", "pos": "verb", "meaning": "hasten away / flee (infinitive)"}
        ],
        "Infinitival question 'warum enteilen?' expressing incredulity after a declarative clause."
    ],

    # 38. a1_s4_c25_l4
    "Nach solchem kurzen Wiedersehn?": [
        "After such a brief reunion?",
        [
            {"word": "Nach", "lemma": "nach", "pos": "preposition", "meaning": "after (governs dative)"},
            {"word": "solchem", "lemma": "solch", "pos": "pronoun", "meaning": "such (dative neuter)"},
            {"word": "kurzen", "lemma": "kurz", "pos": "adjective", "meaning": "brief / short"},
            {"word": "Wiedersehn", "lemma": "Wiedersehen", "pos": "noun", "meaning": "reunion / seeing again"}
        ],
        "Prepositional phrase forming an elliptical rhetorical exclamation."
    ],

    # 39. a1_s4_c26_l1
    "Fort, fort von hier!": [
        "Away, away from here!",
        [
            {"word": "Fort", "lemma": "fort", "pos": "adverb", "meaning": "away / off"},
            {"word": "von", "lemma": "von", "pos": "preposition", "meaning": "from"},
            {"word": "hier", "lemma": "hier", "pos": "adverb", "meaning": "here"}
        ],
        "Exclamatory directional adverb repeated for dramatic urgency."
    ],

    # 40. a1_s4_c27_l1
    "Bleib, bleib bei uns!": [
        "Stay, stay with us!",
        [
            {"word": "Bleib", "lemma": "bleiben", "pos": "verb", "meaning": "stay / remain (imperative)"},
            {"word": "bei", "lemma": "bei", "pos": "preposition", "meaning": "with (governs dative)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (dative)"}
        ],
        "Geminated imperative pleading for his companionship."
    ],

    # 41. a1_s4_c28_l1
    "Bleib bei Elisabeth!": [
        "Stay with Elisabeth!",
        [
            {"word": "Bleib", "lemma": "bleiben", "pos": "verb", "meaning": "stay / remain (imperative)"},
            {"word": "bei", "lemma": "bei", "pos": "preposition", "meaning": "with / near (governs dative)"},
            {"word": "Elisabeth", "lemma": "Elisabeth", "pos": "noun", "meaning": "Elisabeth (the Landgrave's niece)"}
        ],
        "The dramatic turning point: Wolfram's invocation of Elisabeth's name that halts Tannhäuser."
    ],

    # 42. a1_s4_c29_l1
    "Elisabeth! - O Macht des Himmels,": [
        "Elisabeth! - O power of heaven,",
        [
            {"word": "Elisabeth", "lemma": "Elisabeth", "pos": "noun", "meaning": "Elisabeth"},
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "O / oh"},
            {"word": "Macht", "lemma": "Macht", "pos": "noun", "meaning": "power / might"},
            {"word": "des Himmels", "lemma": "Himmel", "pos": "noun", "meaning": "of heaven (genitive masculine)"}
        ],
        "Exclamation followed by an apostrophe to divine power with genitive attribute 'des Himmels'."
    ],

    # 43. a1_s4_c29_l2
    "rufst du den süssen Namen mir?": [
        "do you call the sweet name to me?",
        [
            {"word": "rufst du", "lemma": "rufen", "pos": "verb", "meaning": "do you call / invoke (interrogative inversion)"},
            {"word": "den süssen Namen", "lemma": "Name", "pos": "noun", "meaning": "the sweet name (accusative masculine)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)"}
        ],
        "Direct question addressing Wolfram, with dative pronoun 'mir' denoting the recipient of the call."
    ],

    # 44. a1_s4_c30_l1
    "Nicht sollst du Feind mich schelten,": [
        "Not shall you call me foe,",
        [
            {"word": "Nicht", "lemma": "nicht", "pos": "particle", "meaning": "not"},
            {"word": "sollst du", "lemma": "sollen", "pos": "verb", "meaning": "shall you (modal verb)"},
            {"word": "Feind", "lemma": "Feind", "pos": "noun", "meaning": "foe / enemy (predicative accusative)"},
            {"word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative object)"},
            {"word": "schelten", "lemma": "schelten", "pos": "verb", "meaning": "rebuke / call / brand (infinitive)"}
        ],
        "Modal auxiliary with fronted negative and double accusative construction ('mich Feind schelten')."
    ],

    # 45. a1_s4_c30_l2
    "dass ich ihn genannt!": [
        "that I have spoken it!",
        [
            {"word": "dass", "lemma": "dass", "pos": "conjunction", "meaning": "that / because"},
            {"word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I"},
            {"word": "ihn", "lemma": "er", "pos": "pronoun", "meaning": "it (masculine accusative referring to 'Namen')"},
            {"word": "genannt", "lemma": "nennen", "pos": "verb", "meaning": "named / spoken (past participle with omitted habe)"}
        ],
        "Subordinate clause with omitted auxiliary ('genannt [habe]'); pronoun 'ihn' refers back to 'den süssen Namen'."
    ],

    # 46. a1_s4_c31_l1
    "Erlaubest du mir, Herr, dass ich": [
        "Do you permit me, Lord, that I",
        [
            {"word": "Erlaubest du", "lemma": "erlauben", "pos": "verb", "meaning": "do you permit / allow (archaic 2nd person singular)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "me (dative)"},
            {"word": "Herr", "lemma": "Herr", "pos": "noun", "meaning": "Lord / Master (vocative)"},
            {"word": "dass ich", "lemma": "dass", "pos": "conjunction", "meaning": "that I"}
        ],
        "Courteous question of vassal to sovereign introducing a subordinate clause."
    ],

    # 47. a1_s4_c31_l2
    "Verkünder seines Glücks ihm sei?": [
        "Be the herald of his happiness to him?",
        [
            {"word": "Verkünder", "lemma": "Verkünder", "pos": "noun", "meaning": "herald / proclaimer / harbinger"},
            {"word": "seines Glücks", "lemma": "Glück", "pos": "noun", "meaning": "of his happiness / fortune (genitive neuter)"},
            {"word": "ihm", "lemma": "er", "pos": "pronoun", "meaning": "to him (dative)"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (present subjunctive)"}
        ],
        "Subjunctive clause with predicate noun 'Verkünder' governing genitive 'seines Glücks' and dative 'ihm'."
    ],

    # 48. a1_s4_c32_l1
    "Nenn ihm den Zauber, den er ausgeübt:": [
        "Name to him the magic that he wrought:",
        [
            {"word": "Nenn ihm", "lemma": "nennen", "pos": "verb", "meaning": "name to him / tell him (imperative)"},
            {"word": "den Zauber", "lemma": "Zauber", "pos": "noun", "meaning": "the magic / the spell (accusative masculine)"},
            {"word": "den", "lemma": "der", "pos": "pronoun", "meaning": "which / that (relative pronoun, masculine accusative)"},
            {"word": "er ausgeübt", "lemma": "ausüben", "pos": "verb", "meaning": "he exerted / wrought (past participle with omitted hat)"}
        ],
        "Imperative governing dative and accusative, followed by a relative clause with omitted auxiliary."
    ],

    # 49. a1_s4_c32_l2
    "und Gott verleih ihm Tugend,": [
        "and may God grant him virtue,",
        [
            {"word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and"},
            {"word": "Gott", "lemma": "Gott", "pos": "noun", "meaning": "God"},
            {"word": "verleih", "lemma": "verleihen", "pos": "verb", "meaning": "grant / bestow (optative subjunctive)"},
            {"word": "ihm", "lemma": "er", "pos": "pronoun", "meaning": "to him (dative)"},
            {"word": "Tugend", "lemma": "Tugend", "pos": "noun", "meaning": "virtue / moral strength"}
        ],
        "Optative subjunctive expressing a pious wish ('Gott verleih' = möge Gott verleihen)."
    ],

    # 50. a1_s4_c32_l3
    "dass würdig er ihn löse!": [
        "that worthily he may break it!",
        [
            {"word": "dass", "lemma": "dass", "pos": "conjunction", "meaning": "that / so that (purpose clause)"},
            {"word": "würdig", "lemma": "würdig", "pos": "adverb", "meaning": "worthily / with dignity"},
            {"word": "er", "lemma": "er", "pos": "pronoun", "meaning": "he"},
            {"word": "ihn", "lemma": "er", "pos": "pronoun", "meaning": "it (masculine accusative referring to 'Zauber')"},
            {"word": "löse", "lemma": "lösen", "pos": "verb", "meaning": "may break / dissolve / release (subjunctive)"}
        ],
        "Purpose clause with subjunctive 'löse'; pronoun 'ihn' refers back to 'den Zauber'."
    ],

    # 51. a1_s4_c33_l1
    "Als du in kühnem Sange uns bestrittest,": [
        "When you contested us in bold song,",
        [
            {"word": "Als", "lemma": "als", "pos": "conjunction", "meaning": "when (temporal conjunction)"},
            {"word": "in kühnem Sange", "lemma": "Sang", "pos": "noun", "meaning": "in bold song (dative masculine with archaic -e)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (accusative direct object)"},
            {"word": "bestrittest", "lemma": "bestreiten", "pos": "verb", "meaning": "contested / rivaled (preterite)"}
        ],
        "Temporal clause opening Wolfram's recounting of the past Minstrels' song contest."
    ],

    # 52. a1_s4_c33_l2
    "bald siegreich gegen unsre Lieder sangst,": [
        "now sang victoriously against our songs,",
        [
            {"word": "bald", "lemma": "bald", "pos": "adverb", "meaning": "now / at one time (correlative bald... bald)"},
            {"word": "siegreich", "lemma": "siegreich", "pos": "adverb", "meaning": "victoriously / triumphantly"},
            {"word": "gegen unsre Lieder", "lemma": "Lied", "pos": "noun", "meaning": "against our songs (accusative plural)"},
            {"word": "sangst", "lemma": "singen", "pos": "verb", "meaning": "sang (second person singular preterite)"}
        ],
        "Correlative structure 'bald ... bald' (now ... then ...) expressing alternating fortunes in the contest."
    ],

    # 53. a1_s4_c33_l3
    "durch unsre Kunst Besiegung bald erlittest;": [
        "now through our art suffered defeat;",
        [
            {"word": "durch unsre Kunst", "lemma": "Kunst", "pos": "noun", "meaning": "through our art (accusative feminine)"},
            {"word": "Besiegung", "lemma": "Besiegung", "pos": "noun", "meaning": "defeat / vanquishing"},
            {"word": "bald", "lemma": "bald", "pos": "adverb", "meaning": "then / at other times"},
            {"word": "erlittest", "lemma": "erleiden", "pos": "verb", "meaning": "suffered / endured (preterite)"}
        ],
        "Continuation of the correlative temporal clause, recounting Tannhäuser's occasional defeat."
    ],

    # 54. a1_s4_c33_l4
    "ein Preis doch war's, den du allein errangst.": [
        "yet a prize it was, which you alone won.",
        [
            {"word": "ein Preis", "lemma": "Preis", "pos": "noun", "meaning": "a prize (predicate nominative)"},
            {"word": "doch war's", "lemma": "sein", "pos": "verb", "meaning": "yet it was (doch war es)"},
            {"word": "den", "lemma": "der", "pos": "pronoun", "meaning": "which / that (relative pronoun, masculine accusative)"},
            {"word": "du allein", "lemma": "allein", "pos": "adverb", "meaning": "you alone"},
            {"word": "errangst", "lemma": "erringen", "pos": "verb", "meaning": "won / gained / attained (preterite)"}
        ],
        "Main clause with inverted syntax and relative clause specifying the unique prize (Elisabeth's love)."
    ],

    # 55. a1_s4_c33_l5
    "War's Zauber, war es reine Macht,": [
        "Was it magic, was it pure power,",
        [
            {"word": "War's", "lemma": "sein", "pos": "verb", "meaning": "was it (contraction of war es)"},
            {"word": "Zauber", "lemma": "Zauber", "pos": "noun", "meaning": "magic / enchantment"},
            {"word": "reine Macht", "lemma": "Macht", "pos": "noun", "meaning": "pure power (feminine nominative)"}
        ],
        "Alternative interrogative inversion posing a metaphysical riddle."
    ],

    # 56. a1_s4_c33_l6
    "durch die solch Wunder du vollbracht,": [
        "through which such a wonder you accomplished,",
        [
            {"word": "durch die", "lemma": "durch", "pos": "preposition", "meaning": "through which (preposition + relative pronoun feminine accusative)"},
            {"word": "solch Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "such a wonder / miracle"},
            {"word": "du vollbracht", "lemma": "vollbringen", "pos": "verb", "meaning": "you accomplished (past participle with omitted hast)"}
        ],
        "Relative clause with prepositional relative pronoun 'durch die' and omitted auxiliary 'hast'."
    ],

    # 57. a1_s4_c33_l7
    "an deinen Sang voll Wonn' und Leid": [
        "to your song full of bliss and sorrow",
        [
            {"word": "an deinen Sang", "lemma": "Sang", "pos": "noun", "meaning": "to your song (preposition + accusative)"},
            {"word": "voll", "lemma": "voll", "pos": "adjective", "meaning": "full of"},
            {"word": "Wonn'", "lemma": "Wonne", "pos": "noun", "meaning": "bliss / delight (apocopated)"},
            {"word": "Leid", "lemma": "Leid", "pos": "noun", "meaning": "sorrow / pain / woe"}
        ],
        "Prepositional object modifying 'gebannt', featuring the thematic Wagnerian polarity 'Wonne und Leid'."
    ],

    # 58. a1_s4_c33_l8
    "gebannt die tugendreichste Maid?": [
        "captivated the most virtuous maiden?",
        [
            {"word": "gebannt", "lemma": "bannen", "pos": "verb", "meaning": "bound / captivated / enchanted (past participle)"},
            {"word": "tugendreichste", "lemma": "tugendreich", "pos": "adjective", "meaning": "most virtuous (superlative feminine)"},
            {"word": "Maid", "lemma": "Maid", "pos": "noun", "meaning": "maiden / damsel (poetic)"}
        ],
        "Predicate participle concluding the rhetorical question, governing direct object 'die tugendreichste Maid'."
    ],

    # 59. a1_s4_c33_l9
    "Denn ach! als du uns stolz verlassen,": [
        "For, alas! when you proudly left us,",
        [
            {"word": "Denn", "lemma": "denn", "pos": "conjunction", "meaning": "for / because"},
            {"word": "ach", "lemma": "ach", "pos": "interjection", "meaning": "alas / ah"},
            {"word": "als", "lemma": "als", "pos": "conjunction", "meaning": "when"},
            {"word": "uns stolz verlassen", "lemma": "verlassen", "pos": "verb", "meaning": "proudly left us (past participle with omitted hast)"}
        ],
        "Causal connective and lamenting interjection introducing a temporal subclause."
    ],

    # 60. a1_s4_c33_l10
    "verschloss ihr Herz unsrem Lied;": [
        "her heart closed to our song;",
        [
            {"word": "verschloss", "lemma": "verschließen", "pos": "verb", "meaning": "closed / locked (preterite)"},
            {"word": "ihr Herz", "lemma": "Herz", "pos": "noun", "meaning": "her heart"},
            {"word": "unsrem Lied", "lemma": "Lied", "pos": "noun", "meaning": "to our song (dative neuter)"}
        ],
        "Poetic clause where 'ihr Herz' (Elisabeth's heart) closes to the minstrel songs (dative complement)."
    ],

    # 61. a1_s4_c33_l11
    "wir sahen ihre Wang' erblassen,": [
        "we saw her cheek grow pale,",
        [
            {"word": "wir sahen", "lemma": "sehen", "pos": "verb", "meaning": "we saw (preterite)"},
            {"word": "ihre Wang'", "lemma": "Wange", "pos": "noun", "meaning": "her cheek (apocope)"},
            {"word": "erblassen", "lemma": "erblassen", "pos": "verb", "meaning": "grow pale / pale (infinitive in AcI)"}
        ],
        "Accusative with infinitive (AcI) construction after the sensory verb of perception 'sahen'."
    ],

    # 62. a1_s4_c33_l12
    "für immer unsern Kreis sie mied.": [
        "forever our circle she shunned.",
        [
            {"word": "für immer", "lemma": "für immer", "pos": "adverb", "meaning": "forever"},
            {"word": "unsern Kreis", "lemma": "Kreis", "pos": "noun", "meaning": "our circle (accusative masculine)"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "she"},
            {"word": "mied", "lemma": "meiden", "pos": "verb", "meaning": "shunned / avoided (preterite)"}
        ],
        "Fronted adverbial and direct object with subject preceding verb in poetic order."
    ],

    # 63. a1_s4_c33_l13
    "O kehr zurück, du kühner Sänger,": [
        "O return, you bold singer,",
        [
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "O / oh"},
            {"word": "kehr zurück", "lemma": "zurückkehren", "pos": "verb", "meaning": "return (separable imperative)"},
            {"word": "du kühner Sänger", "lemma": "Sänger", "pos": "noun", "meaning": "you bold singer (vocative)"}
        ],
        "Imperative invocation with direct vocative address."
    ],

    # 64. a1_s4_c33_l14
    "dem unsren sei dein Lied nicht fern!": [
        "from ours let your song not be distant!",
        [
            {"word": "dem unsren", "lemma": "unsere", "pos": "pronoun", "meaning": "from ours (substantivized possessive pronoun referring to Lied, dative)"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "let ... be (optative subjunctive)"},
            {"word": "dein Lied", "lemma": "Lied", "pos": "noun", "meaning": "your song"},
            {"word": "nicht fern", "lemma": "fern", "pos": "adjective", "meaning": "not distant / not far"}
        ],
        "Optative subjunctive with fronted dative possessive pronoun 'dem unsren' [sc. Lied]."
    ],

    # 65. a1_s4_c33_l15
    "Den Festen fehle sie nicht länger,": [
        "From the feasts let her be missing no longer,",
        [
            {"word": "Den Festen", "lemma": "Fest", "pos": "noun", "meaning": "from the feasts / celebrations (dative plural)"},
            {"word": "fehle", "lemma": "fehlen", "pos": "verb", "meaning": "let ... be missing / lacking (optative subjunctive)"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "she (referring to Elisabeth)"},
            {"word": "nicht länger", "lemma": "nicht länger", "pos": "adverb", "meaning": "no longer"}
        ],
        "Optative subjunctive governing dative plural 'den Festen' with subject pronoun 'sie' (Elisabeth)."
    ],

    # 66. a1_s4_c33_l16
    "aufs neue leuchte uns ihr Stern!": [
        "anew let her star shine upon us!",
        [
            {"word": "aufs neue", "lemma": "aufs neue", "pos": "adverb", "meaning": "anew / afresh"},
            {"word": "leuchte", "lemma": "leuchten", "pos": "verb", "meaning": "let ... shine / may ... shine (optative subjunctive)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "upon us / for us (dative)"},
            {"word": "ihr Stern", "lemma": "Stern", "pos": "noun", "meaning": "her star"}
        ],
        "Optative subjunctive using metaphorical 'ihr Stern' to represent Elisabeth's grace and presence."
    ],

    # 67. a1_s4_c34_l1
    "Sei unser, Heinrich, kehr uns wieder!": [
        "Be ours, Heinrich, return to us!",
        [
            {"word": "Sei unser", "lemma": "unser", "pos": "pronoun", "meaning": "be ours (imperative + possessive)"},
            {"word": "Heinrich", "lemma": "Heinrich", "pos": "noun", "meaning": "Heinrich (vocative)"},
            {"word": "kehr ... wieder", "lemma": "wiederkehren", "pos": "verb", "meaning": "return (separable imperative governing dative uns)"}
        ],
        "Imperative with predicate possessive 'unser' followed by separable verb 'wiederkehren'."
    ],

    # 68. a1_s4_c34_l2
    "Zwietracht und Streit sei abgetan!": [
        "Discord and strife be cast aside!",
        [
            {"word": "Zwietracht", "lemma": "Zwietracht", "pos": "noun", "meaning": "discord / strife"},
            {"word": "Streit", "lemma": "Streit", "pos": "noun", "meaning": "strife / contention / quarrel"},
            {"word": "sei abgetan", "lemma": "abtun", "pos": "verb", "meaning": "be cast aside / settled / ended (optative passive)"}
        ],
        "Tautological pair 'Zwietracht und Streit' with optative passive verb 'abtun'."
    ],

    # 69. a1_s4_c34_l3
    "Vereint ertönen unsre Lieder,": [
        "United our songs shall ring out,",
        [
            {"word": "Vereint", "lemma": "vereinen", "pos": "adjective", "meaning": "united"},
            {"word": "ertönen", "lemma": "ertönen", "pos": "verb", "meaning": "shall ring out / resound"},
            {"word": "unsre Lieder", "lemma": "Lied", "pos": "noun", "meaning": "our songs"}
        ],
        "Fronted predicate participle 'Vereint' modifying the subject 'unsre Lieder'."
    ],

    # 70. a1_s4_c34_l4
    "und Brüder nenne uns fortan!": [
        "and call us brothers henceforth!",
        [
            {"word": "und", "lemma": "und", "pos": "conjunction", "meaning": "and"},
            {"word": "Brüder", "lemma": "Bruder", "pos": "noun", "meaning": "brothers (predicative accusative)"},
            {"word": "nenne", "lemma": "nennen", "pos": "verb", "meaning": "call / name (imperative)"},
            {"word": "uns", "lemma": "wir", "pos": "pronoun", "meaning": "us (accusative)"},
            {"word": "fortan", "lemma": "fortan", "pos": "adverb", "meaning": "henceforth / from now on"}
        ],
        "Imperative governing double accusative ('uns Brüder') with temporal adverb 'fortan'."
    ],

    # 71. a1_s4_c35_l1
    "O kehr zurück, du kühner Sänger!": [
        "O return, you bold singer!",
        [
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "O / oh"},
            {"word": "kehr zurück", "lemma": "zurückkehren", "pos": "verb", "meaning": "return (separable imperative)"},
            {"word": "du kühner Sänger", "lemma": "Sänger", "pos": "noun", "meaning": "you bold singer (vocative)"}
        ],
        "Passionate imperative refrain urging Tannhäuser's return."
    ],

    # 72. a1_s4_c35_l2
    "O kehr zurück!": [
        "O return!",
        [
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "O / oh"},
            {"word": "kehr zurück", "lemma": "zurückkehren", "pos": "verb", "meaning": "return (separable imperative)"}
        ],
        "Truncated imperative refrain."
    ],

    # 73. a1_s4_c36_l2
    "Zwietracht und Streit sei abgetan": [
        "Discord and strife be cast aside",
        [
            {"word": "Zwietracht", "lemma": "Zwietracht", "pos": "noun", "meaning": "discord / dissension"},
            {"word": "Streit", "lemma": "Streit", "pos": "noun", "meaning": "strife / quarrel"},
            {"word": "sei abgetan", "lemma": "abtun", "pos": "verb", "meaning": "be cast aside / dismissed (optative passive)"}
        ],
        "Optative passive echoing the Minstrels' reconciliation pledge without ending punctuation."
    ],

    # 74. a1_s4_c38_l1
    "Zu ihr! Zu ihr! Oh, führet mich zu ihr!": [
        "To her! To her! Oh, lead me to her!",
        [
            {"word": "Zu ihr", "lemma": "zu", "pos": "preposition", "meaning": "to her (preposition + dative pronoun)"},
            {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh"},
            {"word": "führet mich", "lemma": "führen", "pos": "verb", "meaning": "lead me / guide me (plural imperative)"}
        ],
        "Ecstatic prepositional cry followed by a plural imperative directed at the knights."
    ],

    # 75. a1_s4_c38_l2
    "Ha, jetzt erkenne ich sie wieder,": [
        "Ha, now I recognize it again,",
        [
            {"word": "Ha", "lemma": "ha", "pos": "interjection", "meaning": "ha"},
            {"word": "jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now"},
            {"word": "erkenne ... wieder", "lemma": "wiedererkennen", "pos": "verb", "meaning": "recognize / know again (separable verb)"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (feminine accusative pronoun anticipating 'die schöne Welt')"}
        ],
        "Separable verb with anticipatory feminine pronoun 'sie' referring forward to 'die schöne Welt' (translated as 'it')."
    ],

    # 76. a1_s4_c38_l3
    "die schöne Welt, der ich entrückt!": [
        "the beautiful world, from which I was rapt away!",
        [
            {"word": "die schöne Welt", "lemma": "Welt", "pos": "noun", "meaning": "the beautiful world (apposition)"},
            {"word": "der", "lemma": "die", "pos": "pronoun", "meaning": "from which (relative pronoun, feminine dative)"},
            {"word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I"},
            {"word": "entrückt", "lemma": "entrücken", "pos": "verb", "meaning": "rapt away / removed / estranged (past participle with omitted war)"}
        ],
        "Appositive noun phrase followed by relative clause with dative relative pronoun 'der' and omitted auxiliary."
    ],

    # 77. a1_s4_c38_l4
    "Der Himmel blickt auf mich hernieder,": [
        "Heaven looks down upon me,",
        [
            {"word": "Der Himmel", "lemma": "Himmel", "pos": "noun", "meaning": "heaven / the sky"},
            {"word": "blickt ... hernieder", "lemma": "herniederblicken", "pos": "verb", "meaning": "looks down (separable verb)"},
            {"word": "auf mich", "lemma": "auf", "pos": "preposition", "meaning": "upon me (governs accusative)"}
        ],
        "Separable verb 'herniederblicken' governing prepositional phrase 'auf mich'."
    ],

    # 78. a1_s4_c38_l5
    "die Fluren prangen reich geschmückt!": [
        "the meadows gleam richly adorned!",
        [
            {"word": "die Fluren", "lemma": "Flur", "pos": "noun", "meaning": "the meadows / fields"},
            {"word": "prangen", "lemma": "prangen", "pos": "verb", "meaning": "gleam / shine resplendent"},
            {"word": "reich", "lemma": "reich", "pos": "adverb", "meaning": "richly"},
            {"word": "geschmückt", "lemma": "schmücken", "pos": "adjective", "meaning": "adorned / bedecked"}
        ],
        "Descriptive clause with predicate participle 'reich geschmückt' modifying 'die Fluren'."
    ],

    # 79. a1_s4_c38_l6
    "Der Lenz, der Lenz,": [
        "Spring, spring,",
        [
            {"word": "Der Lenz", "lemma": "Lenz", "pos": "noun", "meaning": "spring (poetic word for Frühling)"},
            {"word": "der Lenz", "lemma": "Lenz", "pos": "noun", "meaning": "the spring (repeated for ecstatic emphasis)"}
        ],
        "Poetic personification of spring repeated for ecstatic emphasis."
    ],

    # 80. a1_s4_c38_l7
    "mit tausend holden Klängen": [
        "with a thousand sweet sounds",
        [
            {"word": "mit", "lemma": "mit", "pos": "preposition", "meaning": "with (governs dative)"},
            {"word": "tausend", "lemma": "tausend", "pos": "adjective", "meaning": "a thousand"},
            {"word": "holden", "lemma": "hold", "pos": "adjective", "meaning": "lovely / sweet / gracious (dative plural)"},
            {"word": "Klängen", "lemma": "Klang", "pos": "noun", "meaning": "sounds / tones / melodies"}
        ],
        "Prepositional instrumental phrase modifying the verb 'zog' in the following line."
    ],

    # 81. a1_s4_c38_l8
    "zog jubelnd in die Seele mir!": [
        "moved jubilantly into my soul!",
        [
            {"word": "zog", "lemma": "ziehen", "pos": "verb", "meaning": "moved / entered (preterite)"},
            {"word": "jubelnd", "lemma": "jubeln", "pos": "adjective", "meaning": "jubilantly / rejoicing (present participle)"},
            {"word": "in die Seele", "lemma": "Seele", "pos": "noun", "meaning": "into the soul (accusative feminine)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "of mine / to me (dative of sympathy/possession)"}
        ],
        "Dative of sympathy ('mir') used poetically instead of a possessive pronoun with 'Seele'."
    ],

    # 82. a1_s4_c38_l9
    "In süssem, ungestümen Drängen": [
        "In sweet, impetuous urge",
        [
            {"word": "In süssem", "lemma": "süß", "pos": "adjective", "meaning": "in sweet (dative neuter)"},
            {"word": "ungestümen", "lemma": "ungestüm", "pos": "adjective", "meaning": "impetuous / stormy (dative neuter)"},
            {"word": "Drängen", "lemma": "Drängen", "pos": "noun", "meaning": "urging / yearning / pressing"}
        ],
        "Prepositional phrase with coordinated adjectives modifying substantivized infinitive 'Drängen'."
    ],

    # 83. a1_s4_c38_l10
    "ruft laut mein Herz:": [
        "loudly calls my heart:",
        [
            {"word": "ruft", "lemma": "rufen", "pos": "verb", "meaning": "calls / cries"},
            {"word": "laut", "lemma": "laut", "pos": "adverb", "meaning": "loudly / aloud"},
            {"word": "mein Herz", "lemma": "Herz", "pos": "noun", "meaning": "my heart"}
        ],
        "Inverted declarative clause introducing the direct quotation."
    ],

    # 84. a1_s4_c38_l11
    "Zu ihr! Zu ihr!": [
        "To her! To her!",
        [
            {"word": "Zu", "lemma": "zu", "pos": "preposition", "meaning": "to (governs dative)"},
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "her (dative feminine)"},
            {"word": "Zu ihr", "lemma": "zu ihr", "pos": "idiom", "meaning": "to her!"}
        ],
        "Exclamatory prepositional phrase repeated as a passionate leitmotif."
    ],

    # 85. a1_s4_c38_l12
    "Führt mich zu ihr!": [
        "Lead me to her!",
        [
            {"word": "Führt", "lemma": "führen", "pos": "verb", "meaning": "lead / guide (plural imperative)"},
            {"word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative)"},
            {"word": "zu ihr", "lemma": "zu", "pos": "preposition", "meaning": "to her"}
        ],
        "Imperative demanding to be guided to Elisabeth."
    ],

    # 86. a1_s4_c40_l1
    "Er kehrt zurück, den wir verloren!": [
        "He returns, whom we had lost!",
        [
            {"word": "Er kehrt zurück", "lemma": "zurückkehren", "pos": "verb", "meaning": "he returns (separable verb)"},
            {"word": "den", "lemma": "der", "pos": "pronoun", "meaning": "whom (relative pronoun, masculine accusative)"},
            {"word": "wir verloren", "lemma": "verlieren", "pos": "verb", "meaning": "we lost / had lost (past participle with omitted hatten)"}
        ],
        "Main clause followed by relative clause with masculine accusative relative pronoun 'den'."
    ],

    # 87. a1_s4_c40_l2
    "Ein Wunder hat ihn hergebracht!": [
        "A miracle has brought him hither!",
        [
            {"word": "Ein Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "a miracle"},
            {"word": "hat ... hergebracht", "lemma": "herbringen", "pos": "verb", "meaning": "has brought hither (perfect tense)"},
            {"word": "ihn", "lemma": "er", "pos": "pronoun", "meaning": "him (accusative object)"}
        ],
        "Perfect tense transitive clause attributing Tannhäuser's return to divine intervention."
    ],

    # 88. a1_s4_c40_l3
    "Die ihm den Übermut beschworen,": [
        "That quelled the haughtiness in him,",
        [
            {"word": "Die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun, feminine nominative)"},
            {"word": "ihm", "lemma": "er", "pos": "pronoun", "meaning": "in him / for him (dative of sympathy)"},
            {"word": "den Übermut", "lemma": "Übermut", "pos": "noun", "meaning": "the haughtiness / hubris (accusative masculine)"},
            {"word": "beschworen", "lemma": "beschwören", "pos": "verb", "meaning": "quelled / exorcised / dispelled (past participle with omitted hat)"}
        ],
        "Preposed relative clause with relative pronoun 'Die' anticipating its antecedent 'die holde Macht'."
    ],

    # 89. a1_s4_c40_l4
    "gepriesen sei die holde Macht!": [
        "praised be the gracious power!",
        [
            {"word": "gepriesen sei", "lemma": "preisen", "pos": "verb", "meaning": "praised be (optative subjunctive passive)"},
            {"word": "holde", "lemma": "hold", "pos": "adjective", "meaning": "gracious / lovely"},
            {"word": "Macht", "lemma": "Macht", "pos": "noun", "meaning": "power / might"}
        ],
        "Optative passive construction functioning as the main clause antecedent to the preceding line."
    ],

    # 90. a1_s4_c40_l5
    "Nun lausche unsern Hochgesängen": [
        "Now may listen to our songs of praise",
        [
            {"word": "Nun", "lemma": "nun", "pos": "adverb", "meaning": "now"},
            {"word": "lausche", "lemma": "lauschen", "pos": "verb", "meaning": "let ... listen / may ... listen (optative subjunctive)"},
            {"word": "unsern Hochgesängen", "lemma": "Hochgesang", "pos": "noun", "meaning": "to our lofty songs / hymns of praise (dative plural)"}
        ],
        "Optative subjunctive governing dative complement 'unsern Hochgesängen' with fronted adverb 'Nun'."
    ],

    # 91. a1_s4_c40_l6
    "von neuem der Gepriesnen Ohr!": [
        "anew the ear of the praised one!",
        [
            {"word": "von neuem", "lemma": "von neuem", "pos": "adverb", "meaning": "anew / afresh"},
            {"word": "der Gepriesnen", "lemma": "Gepriesene", "pos": "noun", "meaning": "of the praised lady (preposed genitive feminine singular)"},
            {"word": "Ohr", "lemma": "Ohr", "pos": "noun", "meaning": "ear (nominative subject)"}
        ],
        "Subject noun 'Ohr' preceded by preposed genitive attribute 'der Gepriesnen' (referring to Elisabeth)."
    ],

    # 92. a1_s4_c40_l7
    "Es tön in froh belebten Klängen": [
        "Let ring forth in joyfully lively sounds",
        [
            {"word": "Es tön", "lemma": "tönen", "pos": "verb", "meaning": "let ... sound / resound (optative subjunctive with expletive es)"},
            {"word": "in froh belebten", "lemma": "belebt", "pos": "adjective", "meaning": "in joyfully lively / animated (dative plural)"},
            {"word": "Klängen", "lemma": "Klang", "pos": "noun", "meaning": "sounds / melodies (dative plural)"}
        ],
        "Optative subjunctive with placeholder pronoun 'Es' and separable prefix deferred to the next line."
    ],

    # 93. a1_s4_c40_l8
    "das Lied aus jeder Brust hervor!": [
        "the song forth from every breast!",
        [
            {"word": "das Lied", "lemma": "Lied", "pos": "noun", "meaning": "the song (nominative subject)"},
            {"word": "aus jeder Brust", "lemma": "Brust", "pos": "noun", "meaning": "from every breast / heart (dative feminine)"},
            {"word": "hervor", "lemma": "hervor", "pos": "adverb", "meaning": "forth (separable prefix completing hervortönen)"}
        ],
        "True subject 'das Lied' and separable particle 'hervor' completing the optative predicate."
    ]
}


# -*- coding: utf-8 -*-
"""Part 1: Scene 1 (0-7) and Scene 2 early dialogue & first hymn (8-63)"""

PART1_DATA = {
    # Scene 1: Sirens
    "Naht euch dem Strande!": [
        "Approach the shore!",
        [
            {"word": "Naht euch", "lemma": "nahen", "pos": "verb", "meaning": "approach / draw near (reflexive imperative)"},
            {"word": "dem Strande", "lemma": "Strand", "pos": "noun", "meaning": "the shore / beach (dative masculine)"}
        ],
        "Reflexive imperative 'naht euch' governing dative object 'dem Strande'."
    ],
    "Naht euch dem Lande,": [
        "Approach the land,",
        [
            {"word": "Naht euch", "lemma": "nahen", "pos": "verb", "meaning": "approach / draw near (reflexive imperative)"},
            {"word": "dem Lande", "lemma": "Land", "pos": "noun", "meaning": "the land (dative neuter with archaic -e)"}
        ],
        "Reflexive imperative governing dative neuter 'dem Lande'."
    ],
    "wo in den Armen": [
        "where in the arms",
        [
            {"word": "wo", "lemma": "wo", "pos": "adverb", "meaning": "where"},
            {"word": "in den Armen", "lemma": "Arm", "pos": "noun", "meaning": "in the arms (dative plural)"}
        ],
        "Locative relative adverb 'wo' introducing prepositional phrase."
    ],
    "glühender Liebe": [
        "of glowing love",
        [
            {"word": "glühender", "lemma": "glühend", "pos": "adjective", "meaning": "glowing / ardent (genitive feminine singular)"},
            {"word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"}
        ],
        "Genitive attribute modifying 'Armen'."
    ],
    "selig Erbarmen": [
        "blessed mercy",
        [
            {"word": "selig", "lemma": "selig", "pos": "adjective", "meaning": "blessed / blissful"},
            {"word": "Erbarmen", "lemma": "Erbarmen", "pos": "noun", "meaning": "mercy / compassion"}
        ],
        "Uninflected poetic adjective modifying substantivized infinitive 'Erbarmen'."
    ],
    "still' eure Triebe!": [
        "shall soothe your desires!",
        [
            {"word": "still'", "lemma": "stillen", "pos": "verb", "meaning": "soothe / calm / quench (subjunctive)"},
            {"word": "eure", "lemma": "euer", "pos": "pronoun", "meaning": "your (possessive determiner)"},
            {"word": "Triebe", "lemma": "Trieb", "pos": "noun", "meaning": "urges / desires / passions"}
        ],
        "Optative subjunctive 'still'' expressing wish or promise."
    ],
    "Naht euch dem Lande!": [
        "Approach the land!",
        [
            {"word": "Naht euch", "lemma": "nahen", "pos": "verb", "meaning": "approach / draw near (reflexive imperative)"},
            {"word": "dem Lande", "lemma": "Land", "pos": "noun", "meaning": "the land (dative neuter)"}
        ],
        None
    ],

    # Scene 2: Venus and Tannhäuser
    "Geliebter, sag, wo weilt dein Sinn?": [
        "Beloved, say, where tarries your mind?",
        [
            {"word": "Geliebter", "lemma": "Geliebter", "pos": "noun", "meaning": "beloved one (vocative)"},
            {"word": "sag", "lemma": "sagen", "pos": "verb", "meaning": "say / tell (imperative)"},
            {"word": "weilt", "lemma": "weilen", "pos": "verb", "meaning": "tarries / lingers / dwells"},
            {"word": "Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "mind / thought / spirit"}
        ],
        "Vocative substantivized adjective followed by indirect question."
    ],
    "Zu viel! Zu viel!": [
        "Too much! Too much!",
        [
            {"word": "Zu", "lemma": "zu", "pos": "adverb", "meaning": "too / excessively"},
            {"word": "viel", "lemma": "viel", "pos": "pronoun", "meaning": "much"}
        ],
        "Exclamatory adverbial phrase expressing sensory and emotional overwhelm."
    ],
    "O, dass ich nun erwachte!": [
        "Oh, that I might now awake!",
        [
            {"word": "dass", "lemma": "dass", "pos": "conjunction", "meaning": "that / would that"},
            {"word": "nun", "lemma": "nun", "pos": "adverb", "meaning": "now"},
            {"word": "erwachte", "lemma": "erwachen", "pos": "verb", "meaning": "might awake (past subjunctive / Konjunktiv II)"}
        ],
        "Optative 'dass' clause expressing an unfulfilled wish in Konjunktiv II."
    ],
    "Sag mir, was dich mühet!": [
        "Tell me, what troubles you!",
        [
            {"word": "Sag", "lemma": "sagen", "pos": "verb", "meaning": "say / tell (imperative)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)"},
            {"word": "mühet", "lemma": "mühen", "pos": "verb", "meaning": "troubles / afflicts / burdens"}
        ],
        "Imperative with dative pronoun governing an interrogative clause."
    ],
    "Im Traum war mir's als hörte ich -": [
        "In a dream it seemed to me as though I heard —",
        [
            {"word": "Traum", "lemma": "Traum", "pos": "noun", "meaning": "dream"},
            {"word": "war mir's", "lemma": "sein", "pos": "idiom", "meaning": "it seemed to me (es war mir)"},
            {"word": "als hörte", "lemma": "hören", "pos": "verb", "meaning": "as though I heard (subjunctive comparison)"}
        ],
        "Impersonal construction 'war mir's' with comparative clause in Konjunktiv II."
    ],
    "was meinem Ohr so lange fremd! -": [
        "what has so long been strange to my ear! —",
        [
            {"word": "meinem Ohr", "lemma": "Ohr", "pos": "noun", "meaning": "to my ear (dative neuter)"},
            {"word": "so lange", "lemma": "lange", "pos": "adverb", "meaning": "for so long"},
            {"word": "fremd", "lemma": "fremd", "pos": "adjective", "meaning": "strange / unfamiliar / alien"}
        ],
        "Elliptical relative clause with omitted copula ('war')."
    ],
    "als hörte ich der Glocken frohes Geläute!": [
        "as though I heard the joyful ringing of bells!",
        [
            {"word": "hörte", "lemma": "hören", "pos": "verb", "meaning": "heard (past subjunctive)"},
            {"word": "der Glocken", "lemma": "Glocke", "pos": "noun", "meaning": "of the bells (genitive plural)"},
            {"word": "frohes", "lemma": "froh", "pos": "adjective", "meaning": "joyful / joyous"},
            {"word": "Geläute", "lemma": "Geläut", "pos": "noun", "meaning": "ringing / peal of bells"}
        ],
        "Preposed genitive attribute 'der Glocken' modifying 'frohes Geläute'."
    ],
    "O sag, wie lange hört' ich's doch nicht mehr?": [
        "Oh say, how long have I heard it no more?",
        [
            {"word": "sag", "lemma": "sagen", "pos": "verb", "meaning": "say (imperative)"},
            {"word": "wie lange", "lemma": "wie lange", "pos": "adverb", "meaning": "how long"},
            {"word": "hört' ich's", "lemma": "hören", "pos": "verb", "meaning": "have I heard it (hörte ich es)"},
            {"word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more / no longer"}
        ],
        "Modal particle 'doch' conveys emotional disbelief and longing."
    ],
    "Was fasst dich an?": [
        "What seizes you?",
        [
            {"word": "fasst ... an", "lemma": "anfassen", "pos": "verb", "meaning": "seizes / takes hold of / grips"},
            {"word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative)"}
        ],
        "Separable verb 'anfassen' used figuratively for a disturbing mood taking hold."
    ],
    "Wohin verlierst du dich?": [
        "Whither are you losing yourself?",
        [
            {"word": "Wohin", "lemma": "wohin", "pos": "adverb", "meaning": "whither / to where"},
            {"word": "verlierst du dich", "lemma": "sich verlieren", "pos": "verb", "meaning": "lose oneself (reflexive)"}
        ],
        "Reflexive verb 'sich verlieren' describing drifting away in thought."
    ],
    "Die Zeit, die hier ich verweil',": [
        "The time that I linger here,",
        [
            {"word": "Die Zeit", "lemma": "Zeit", "pos": "noun", "meaning": "the time"},
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun accusative)"},
            {"word": "hier", "lemma": "hier", "pos": "adverb", "meaning": "here"},
            {"word": "verweil'", "lemma": "verweilen", "pos": "verb", "meaning": "linger / tarry (verweile)"}
        ],
        "Relative pronoun 'die' refers to antecedent 'Die Zeit'."
    ],
    "ich kann sie nicht ermessen:": [
        "I cannot measure it:",
        [
            {"word": "kann", "lemma": "können", "pos": "verb", "meaning": "can (modal verb)"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "it (accusative feminine pronoun referring to 'die Zeit')"},
            {"word": "nicht", "lemma": "nicht", "pos": "particle", "meaning": "not"},
            {"word": "ermessen", "lemma": "ermessen", "pos": "verb", "meaning": "measure / fathom (infinitive)"}
        ],
        "Feminine pronoun 'sie' refers semantically to 'die Zeit' ('it [the time]'). Modal 'kann' governs infinitive 'ermessen'."
    ],
    "Tage, Monde gibt's für mich nicht mehr;": [
        "Days, months exist for me no longer;",
        [
            {"word": "Tage", "lemma": "Tag", "pos": "noun", "meaning": "days"},
            {"word": "Monde", "lemma": "Mond", "pos": "noun", "meaning": "moons / lunar months"},
            {"word": "gibt's", "lemma": "es gibt", "pos": "idiom", "meaning": "there are / exist (es gibt)"},
            {"word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more / no longer"}
        ],
        "Idiomatic impersonal 'es gibt' negated as 'exist no longer'; 'Monde' used poetically for months."
    ],
    "denn nicht mehr sehe ich die Sonne,": [
        "for no longer do I see the sun,",
        [
            {"word": "denn", "lemma": "denn", "pos": "conjunction", "meaning": "for / because"},
            {"word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no longer"},
            {"word": "sehe", "lemma": "sehen", "pos": "verb", "meaning": "see"},
            {"word": "die Sonne", "lemma": "Sonne", "pos": "noun", "meaning": "the sun"}
        ],
        "Inverted word order following fronted negative adverbial."
    ],
    "nicht mehr des Himmels freundliche Gestirne;": [
        "no longer heaven's friendly stars;",
        [
            {"word": "des Himmels", "lemma": "Himmel", "pos": "noun", "meaning": "heaven's / of heaven (genitive masculine)"},
            {"word": "freundliche", "lemma": "freundlich", "pos": "adjective", "meaning": "friendly / gentle"},
            {"word": "Gestirne", "lemma": "Gestirn", "pos": "noun", "meaning": "stars / heavenly bodies (plural)"}
        ],
        "Preposed genitive attribute 'des Himmels' before the noun phrase 'freundliche Gestirne'."
    ],
    "den Halm seh' ich nicht mehr, der frisch ergrünend": [
        "the blade of grass I see no more, which, freshly greening,",
        [
            {"word": "den Halm", "lemma": "Halm", "pos": "noun", "meaning": "the blade of grass / stalk (accusative masculine)"},
            {"word": "der", "lemma": "der", "pos": "pronoun", "meaning": "which / that (relative pronoun nominative masculine)"},
            {"word": "frisch", "lemma": "frisch", "pos": "adverb", "meaning": "freshly / anew"},
            {"word": "ergrünend", "lemma": "ergrünen", "pos": "adjective", "meaning": "turning green / greening (present participle)"}
        ],
        "Relative pronoun 'der' refers to masculine antecedent 'den Halm'."
    ],
    "den neuen Sommer bringt;": [
        "brings the new summer;",
        [
            {"word": "den neuen", "lemma": "neu", "pos": "adjective", "meaning": "the new (accusative masculine)"},
            {"word": "Sommer", "lemma": "Sommer", "pos": "noun", "meaning": "summer"},
            {"word": "bringt", "lemma": "bringen", "pos": "verb", "meaning": "brings"}
        ],
        "Continuation of relative clause with verb in terminal position."
    ],
    "die Nachtigall hör' ich nicht mehr,": [
        "the nightingale I hear no more,",
        [
            {"word": "die Nachtigall", "lemma": "Nachtigall", "pos": "noun", "meaning": "the nightingale"},
            {"word": "hör'", "lemma": "hören", "pos": "verb", "meaning": "hear (höre)"},
            {"word": "nicht mehr", "lemma": "nicht mehr", "pos": "adverb", "meaning": "no more / no longer"}
        ],
        "Topicalized direct object 'die Nachtigall' for lyrical emphasis."
    ],
    "die mir den Lenz verkünde.": [
        "that proclaims the spring to me.",
        [
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun feminine)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)"},
            {"word": "den Lenz", "lemma": "Lenz", "pos": "noun", "meaning": "springtime (poetic / archaic)"},
            {"word": "verkünde", "lemma": "verkünden", "pos": "verb", "meaning": "proclaims / would proclaim (subjunctive/poetic)"}
        ],
        "Poetic term 'Lenz' for spring; relative clause modifying 'die Nachtigall'."
    ],
    "Hör' ich sie nie, seh' ich sie niemals mehr?": [
        "Shall I never hear them, see them nevermore?",
        [
            {"word": "nie", "lemma": "nie", "pos": "adverb", "meaning": "never"},
            {"word": "sie", "lemma": "sie", "pos": "pronoun", "meaning": "them / her (referring to the voices of spring and nature)"},
            {"word": "niemals mehr", "lemma": "niemals mehr", "pos": "adverb", "meaning": "nevermore / never again"}
        ],
        "Climactic rhetorical question; 'sie' encompasses the natural voices (nightingale, spring)."
    ],
    "Ha! Was vernehm' ich? Welch' tör'ge Klagen!": [
        "Ha! What do I hear? What foolish laments!",
        [
            {"word": "vernehm'", "lemma": "vernehmen", "pos": "verb", "meaning": "hear / perceive"},
            {"word": "Welch'", "lemma": "welch", "pos": "pronoun", "meaning": "what / what kind of (exclamatory)"},
            {"word": "tör'ge", "lemma": "töricht", "pos": "adjective", "meaning": "foolish / silly (syncope of törichte)"},
            {"word": "Klagen", "lemma": "Klage", "pos": "noun", "meaning": "laments / complaints"}
        ],
        "Poetic syncope in 'tör'ge' for metrical flow."
    ],
    "Bist du so bald der holden Wunder müde,": [
        "Are you so soon weary of the gracious wonders,",
        [
            {"word": "so bald", "lemma": "so bald", "pos": "adverb", "meaning": "so soon"},
            {"word": "holden", "lemma": "hold", "pos": "adjective", "meaning": "gracious / lovely / sweet"},
            {"word": "Wunder", "lemma": "Wunder", "pos": "noun", "meaning": "wonders / marvels"},
            {"word": "müde", "lemma": "müde", "pos": "adjective", "meaning": "weary of / tired of"}
        ],
        "Adjective 'müde' governing genitive plural 'der holden Wunder'."
    ],
    "die meine Liebe dir bereitet?": [
        "that my love prepared for you?",
        [
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun plural)"},
            {"word": "meine Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "my love"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "for you (dative)"},
            {"word": "bereitet", "lemma": "bereiten", "pos": "verb", "meaning": "prepared / wrought"}
        ],
        "Relative clause with relative pronoun 'die' referring to 'Wunder'."
    ],
    "Oder wie? könnt'ein Gott zu sein so sehr dich reu'n?": [
        "Or what? Could being a god cause you so much regret?",
        [
            {"word": "Oder wie", "lemma": "oder wie", "pos": "idiom", "meaning": "or how / or what"},
            {"word": "könnt'", "lemma": "können", "pos": "verb", "meaning": "could (Konjunktiv II)"},
            {"word": "Gott", "lemma": "Gott", "pos": "noun", "meaning": "god"},
            {"word": "reu'n", "lemma": "reuen", "pos": "verb", "meaning": "cause regret / rue (infinitive)"}
        ],
        "Impersonal verb 'reuen' taking an accusative object ('dich') with subject clause 'ein Gott zu sein'."
    ],
    "Hast du so bald vergessen, wie du einst": [
        "Have you so soon forgotten how you once",
        [
            {"word": "so bald", "lemma": "so bald", "pos": "adverb", "meaning": "so soon"},
            {"word": "vergessen", "lemma": "vergessen", "pos": "verb", "meaning": "forgotten (past participle)"},
            {"word": "einst", "lemma": "einst", "pos": "adverb", "meaning": "once / formerly"}
        ],
        "Perfect tense 'hast vergessen' introducing comparative indirect clause."
    ],
    "gelitten, während jetzt du dich erfreust?": [
        "suffered, whereas now you rejoice?",
        [
            {"word": "gelitten", "lemma": "leiden", "pos": "verb", "meaning": "suffered (past participle)"},
            {"word": "während", "lemma": "während", "pos": "conjunction", "meaning": "whereas / while"},
            {"word": "jetzt", "lemma": "jetzt", "pos": "adverb", "meaning": "now"},
            {"word": "dich erfreust", "lemma": "sich erfreuen", "pos": "verb", "meaning": "rejoice / delight (reflexive)"}
        ],
        "Stark antithesis between past suffering and present ecstasy."
    ],
    "Mein Sänger, auf!": [
        "My singer, arise!",
        [
            {"word": "Sänger", "lemma": "Sänger", "pos": "noun", "meaning": "singer / bard"},
            {"word": "auf", "lemma": "auf", "pos": "interjection", "meaning": "arise! / up!"}
        ],
        "Imperative particle 'auf!' functioning as an exclamation."
    ],
    "Auf, und ergreif' deine Harfe;": [
        "Arise, and take up your harp;",
        [
            {"word": "Auf", "lemma": "auf", "pos": "interjection", "meaning": "arise! / up!"},
            {"word": "ergreif'", "lemma": "ergreifen", "pos": "verb", "meaning": "take up / seize (imperative)"},
            {"word": "Harfe", "lemma": "Harfe", "pos": "noun", "meaning": "harp"}
        ],
        "Imperative construction directing Tannhäuser to play his attribute."
    ],
    "die Liebe fei're, die so herrlich du besingst,": [
        "celebrate love, which you sing so gloriously,",
        [
            {"word": "die Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"},
            {"word": "fei're", "lemma": "feiern", "pos": "verb", "meaning": "celebrate (imperative)"},
            {"word": "herrlich", "lemma": "herrlich", "pos": "adverb", "meaning": "gloriously / splendidly"},
            {"word": "besingst", "lemma": "besingen", "pos": "verb", "meaning": "sing of / extol in song"}
        ],
        "Fronted object 'die Liebe' followed by relative clause 'die so herrlich du besingst'."
    ],
    "dass du der Liebe Göttin selber dir gewannst!": [
        "that you won for yourself love's goddess herself!",
        [
            {"word": "der Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "of love (genitive)"},
            {"word": "Göttin", "lemma": "Göttin", "pos": "noun", "meaning": "goddess"},
            {"word": "selber", "lemma": "selber", "pos": "pronoun", "meaning": "herself"},
            {"word": "gewannst", "lemma": "gewinnen", "pos": "verb", "meaning": "won / gained"}
        ],
        "Consecutive result clause; preposed genitive 'der Liebe Göttin'."
    ],
    "Die Liebe fei're, da ihr höchster Preis dir ward!": [
        "Celebrate love, since its highest prize became yours!",
        [
            {"word": "Die Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"},
            {"word": "fei're", "lemma": "feiern", "pos": "verb", "meaning": "celebrate (imperative)"},
            {"word": "höchster Preis", "lemma": "Preis", "pos": "noun", "meaning": "highest prize / supreme reward"},
            {"word": "ward", "lemma": "werden", "pos": "verb", "meaning": "became / fell to (archaic preterite)"}
        ],
        "Causal 'da' clause; archaic preterite 'ward'."
    ],
    "Dir töne Lob! die Wunder sei'n gepriesen,": [
        "To you resound praise! Praised be the wonders,",
        [
            {"word": "Dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "töne", "lemma": "tönen", "pos": "verb", "meaning": "resound (optative subjunctive)"},
            {"word": "Lob", "lemma": "Lob", "pos": "noun", "meaning": "praise"},
            {"word": "sei'n gepriesen", "lemma": "preisen", "pos": "verb", "meaning": "be praised (passive subjunctive)"}
        ],
        "Solemn optative subjunctive opening Tannhäuser's hymn to Venus."
    ],
    "die deine Macht mir Glücklichem erschuf!": [
        "that your power created for me, happy one!",
        [
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "that / which (relative pronoun plural)"},
            {"word": "Macht", "lemma": "Macht", "pos": "noun", "meaning": "power / might"},
            {"word": "mir Glücklichem", "lemma": "glücklich", "pos": "adjective", "meaning": "for fortunate me (dative masculine)"},
            {"word": "erschuf", "lemma": "erschaffen", "pos": "verb", "meaning": "created (preterite)"}
        ],
        "Substantivized adjective 'Glücklichem' agreeing with personal pronoun 'mir'."
    ],
    "Die Wonnen süss, die deiner Huld entspriessen,": [
        "The sweet delights that spring from your grace,",
        [
            {"word": "Wonnen", "lemma": "Wonne", "pos": "noun", "meaning": "delights / ecstasies"},
            {"word": "süss", "lemma": "süss", "pos": "adjective", "meaning": "sweet (postpositive uninflected)"},
            {"word": "deiner Huld", "lemma": "Huld", "pos": "noun", "meaning": "from your grace (dative)"},
            {"word": "entspriessen", "lemma": "entspriessen", "pos": "verb", "meaning": "spring forth / burgeon"}
        ],
        "Poetic postpositive adjective 'süss'; 'entspriessen' governing dative 'deiner Huld'."
    ],
    "erheb' mein Lied in lautem Jubelruf!": [
        "may my song extol in a loud cry of jubilation!",
        [
            {"word": "erheb'", "lemma": "erheben", "pos": "verb", "meaning": "may extol / raise up (subjunctive)"},
            {"word": "Lied", "lemma": "Lied", "pos": "noun", "meaning": "song"},
            {"word": "lautem", "lemma": "laut", "pos": "adjective", "meaning": "loud (dative)"},
            {"word": "Jubelruf", "lemma": "Jubelruf", "pos": "noun", "meaning": "cry of jubilation / acclaim"}
        ],
        "Optative subjunctive 'erheb'' with subject 'mein Lied'."
    ],
    "Nach Freude, ach! nach herrlichem Geniessen": [
        "For joy, alas! for glorious enjoyment",
        [
            {"word": "Nach Freude", "lemma": "Freude", "pos": "noun", "meaning": "for joy"},
            {"word": "ach", "lemma": "ach", "pos": "interjection", "meaning": "alas!"},
            {"word": "herrlichem", "lemma": "herrlich", "pos": "adjective", "meaning": "glorious / splendid"},
            {"word": "Geniessen", "lemma": "Geniessen", "pos": "noun", "meaning": "enjoyment (substantivized infinitive)"}
        ],
        "Preposition 'nach' expressing longing or striving."
    ],
    "verlangt' mein Herz, es dürstete mein Sinn:": [
        "my heart yearned, my soul thirsted:",
        [
            {"word": "verlangt'", "lemma": "verlangen", "pos": "verb", "meaning": "yearned / longed (preterite)"},
            {"word": "Herz", "lemma": "Herz", "pos": "noun", "meaning": "heart"},
            {"word": "dürstete", "lemma": "dürsten", "pos": "verb", "meaning": "thirsted (preterite)"},
            {"word": "Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "mind / spirit / senses"}
        ],
        "Parallel preterite verbs of desire with expletive 'es'."
    ],
    "da, was nur Göttern einstens du erwiesen,": [
        "then, what once you granted only to gods,",
        [
            {"word": "da", "lemma": "da", "pos": "conjunction", "meaning": "then / when"},
            {"word": "Göttern", "lemma": "Gott", "pos": "noun", "meaning": "to gods (dative plural)"},
            {"word": "einstens", "lemma": "einstens", "pos": "adverb", "meaning": "once / of old"},
            {"word": "erwiesen", "lemma": "erweisen", "pos": "verb", "meaning": "granted / rendered (past participle)"}
        ],
        "Elliptical relative clause with omitted auxiliary: 'erwiesen [hast]'."
    ],
    "gab deine Gunst mir Sterblichem dahin.": [
        "your favor bestowed upon mortal me.",
        [
            {"word": "gab ... dahin", "lemma": "dahingeben", "pos": "verb", "meaning": "bestowed / yielded up"},
            {"word": "Gunst", "lemma": "Gunst", "pos": "noun", "meaning": "favor / benevolence"},
            {"word": "mir Sterblichem", "lemma": "sterblich", "pos": "adjective", "meaning": "upon mortal me (dative masculine)"}
        ],
        "Separable verb 'dahingeben' governing dative 'mir Sterblichem'."
    ],
    "Doch sterblich, ach! bin ich geblieben,": [
        "Yet mortal, alas! have I remained,",
        [
            {"word": "Doch", "lemma": "doch", "pos": "conjunction", "meaning": "yet / however"},
            {"word": "sterblich", "lemma": "sterblich", "pos": "adjective", "meaning": "mortal"},
            {"word": "geblieben", "lemma": "bleiben", "pos": "verb", "meaning": "remained (past participle)"}
        ],
        "Fronted predicate adjective 'sterblich' contrasting with divine immortality."
    ],
    "und übergross ist mir dein Lieben;": [
        "and all too great for me is your loving;",
        [
            {"word": "übergross", "lemma": "übergross", "pos": "adjective", "meaning": "all too great / overwhelming"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "for me (dative)"},
            {"word": "Lieben", "lemma": "Lieben", "pos": "noun", "meaning": "loving / affection (substantivized infinitive)"}
        ],
        "Dativus commodi/incommodi 'mir' expressing human limitation."
    ],
    "wenn stets ein Gott geniessen kann,": [
        "if a god can always enjoy,",
        [
            {"word": "wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if / while"},
            {"word": "stets", "lemma": "stets", "pos": "adverb", "meaning": "constantly / always"},
            {"word": "geniessen", "lemma": "geniessen", "pos": "verb", "meaning": "enjoy (infinitive)"},
            {"word": "kann", "lemma": "können", "pos": "verb", "meaning": "can"}
        ],
        "Conditional/adversative clause contrasting divine constancy with human mutability."
    ],
    "bin ich dem Wechsel untertan;": [
        "I am subject to change;",
        [
            {"word": "dem Wechsel", "lemma": "Wechsel", "pos": "noun", "meaning": "to change / mutability (dative)"},
            {"word": "untertan", "lemma": "untertan", "pos": "adjective", "meaning": "subject / subordinate"}
        ],
        "Predicate adjective 'untertan' governing dative 'dem Wechsel'."
    ],
    "nicht Lust allein liegt mir am Herzen,": [
        "not pleasure alone lies at my heart,",
        [
            {"word": "Lust", "lemma": "Lust", "pos": "noun", "meaning": "pleasure / sensual delight"},
            {"word": "allein", "lemma": "allein", "pos": "adverb", "meaning": "alone / solely"},
            {"word": "liegt am Herzen", "lemma": "am Herzen liegen", "pos": "idiom", "meaning": "is dear to one / concerns one"}
        ],
        "Idiom 'am Herzen liegen' indicating true existential desire."
    ],
    "aus Freuden sehn'ich mich nach Schmerzen.": [
        "out of joy I yearn for pain.",
        [
            {"word": "Freuden", "lemma": "Freude", "pos": "noun", "meaning": "joys (dative plural)"},
            {"word": "sehn' ich mich", "lemma": "sich sehnen", "pos": "verb", "meaning": "I yearn / long (reflexive)"},
            {"word": "nach Schmerzen", "lemma": "Schmerz", "pos": "noun", "meaning": "for pain / sorrows (dative plural)"}
        ],
        "Quintessential romantic paradox: yearning for mortal struggle out of surfeit of bliss."
    ],
    "Aus deinem Reiche muss ich fliehn,": [
        "From your realm I must flee,",
        [
            {"word": "Reiche", "lemma": "Reich", "pos": "noun", "meaning": "realm / kingdom"},
            {"word": "muss", "lemma": "müssen", "pos": "verb", "meaning": "must"},
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "flee (infinitive)"}
        ],
        "Fronted prepositional phrase asserting inescapable necessity."
    ],
    "o Königin!": [
        "o Queen!",
        [
            {"word": "o", "lemma": "o", "pos": "interjection", "meaning": "o / oh"},
            {"word": "Königin", "lemma": "Königin", "pos": "noun", "meaning": "queen"}
        ],
        None
    ],
    "Göttin, lass' mich ziehn!": [
        "Goddess, let me depart!",
        [
            {"word": "Göttin", "lemma": "Göttin", "pos": "noun", "meaning": "goddess (vocative)"},
            {"word": "lass'", "lemma": "lassen", "pos": "verb", "meaning": "let / permit (imperative)"},
            {"word": "ziehn", "lemma": "ziehen", "pos": "verb", "meaning": "depart / journey onward"}
        ],
        "Refrain formula appealing for release."
    ],
    "Was muss ich hören?": [
        "What must I hear?",
        [
            {"word": "Was", "lemma": "was", "pos": "pronoun", "meaning": "what"},
            {"word": "muss", "lemma": "müssen", "pos": "verb", "meaning": "must"},
            {"word": "hören", "lemma": "hören", "pos": "verb", "meaning": "hear (infinitive)"}
        ],
        None
    ],
    "Welch ein Sang!": [
        "What a song!",
        [
            {"word": "Welch ein", "lemma": "welch ein", "pos": "pronoun", "meaning": "what a"},
            {"word": "Sang", "lemma": "Sang", "pos": "noun", "meaning": "song (poetic)"}
        ],
        None
    ],
    "Welch trübem Ton verfällt dein Lied?": [
        "To what gloomy tone does your song decline?",
        [
            {"word": "trübem", "lemma": "trüb", "pos": "adjective", "meaning": "gloomy / sorrowful (dative)"},
            {"word": "Ton", "lemma": "Ton", "pos": "noun", "meaning": "tone / melody / pitch"},
            {"word": "verfällt", "lemma": "verfallen", "pos": "verb", "meaning": "falls into / lapses into"},
            {"word": "Lied", "lemma": "Lied", "pos": "noun", "meaning": "song"}
        ],
        "Verb 'verfallen' governing dative object."
    ],
    "Wohin floh die Begeistrung dir,": [
        "Whither fled your inspiration,",
        [
            {"word": "Wohin", "lemma": "wohin", "pos": "adverb", "meaning": "whither / to where"},
            {"word": "floh", "lemma": "fliehen", "pos": "verb", "meaning": "fled (preterite)"},
            {"word": "Begeistrung", "lemma": "Begeisterung", "pos": "noun", "meaning": "inspiration / passion"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "from you (possessive dative)"}
        ],
        "Dativus sympatheticus 'dir' expressing loss."
    ],
    "die Wonnesang dir nur gebot?": [
        "which commanded of you only songs of bliss?",
        [
            {"word": "die", "lemma": "der", "pos": "pronoun", "meaning": "which / that (relative pronoun feminine)"},
            {"word": "Wonnesang", "lemma": "Wonnesang", "pos": "noun", "meaning": "song of bliss / rapturous singing"},
            {"word": "gebot", "lemma": "gebieten", "pos": "verb", "meaning": "commanded / ordained (preterite)"}
        ],
        "Relative clause modifying 'Begeistrung'."
    ],
    "Was ist's? Worin war meine Liebe lässig.": [
        "What is it? In what was my love negligent?",
        [
            {"word": "Worin", "lemma": "worin", "pos": "adverb", "meaning": "wherein / in what"},
            {"word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"},
            {"word": "lässig", "lemma": "lässig", "pos": "adjective", "meaning": "negligent / remiss"}
        ],
        "Pronominal adverb 'worin' introducing interrogative."
    ],
    "Geliebter, wessen klagest du mich an?": [
        "Beloved, of what do you accuse me?",
        [
            {"word": "Geliebter", "lemma": "Geliebter", "pos": "noun", "meaning": "beloved one"},
            {"word": "wessen", "lemma": "was", "pos": "pronoun", "meaning": "of what (genitive)"},
            {"word": "klagest ... an", "lemma": "anklagen", "pos": "verb", "meaning": "accuse (separable verb)"}
        ],
        "Genitive construction 'jemanden [mich] einer Sache [wessen] anklagen'."
    ]
}

import json

# Allowed POS tags
ALLOWED_POS = {
    "noun", "verb", "adjective", "adverb", "pronoun",
    "preposition", "conjunction", "interjection", "particle", "idiom"
}

data = {
    "Siam pentiti e contriti.": [
        "We are repentant and contrite.",
        [
            {"word": "Siam", "lemma": "essere", "pos": "verb", "meaning": "we are (apocopic form of siamo)"},
            {"word": "pentiti", "lemma": "pentito", "pos": "adjective", "meaning": "repentant / contrite"},
            {"word": "contriti", "lemma": "contrito", "pos": "adjective", "meaning": "contrite / sorrowful"}
        ],
        "Bardolfo and Pistola perform a comically exaggerated display of religious penitence, beating their breasts to regain Falstaff's favor after their insubordination."
    ],
    "L'uomo ritorna al vizio,": [
        "Man returns to vice,",
        [
            {"word": "L'uomo", "lemma": "uomo", "pos": "noun", "meaning": "man / mankind"},
            {"word": "ritorna", "lemma": "ritornare", "pos": "verb", "meaning": "returns"},
            {"word": "al", "lemma": "a", "pos": "preposition", "meaning": "to the"},
            {"word": "vizio", "lemma": "vizio", "pos": "noun", "meaning": "vice / sin"}
        ],
        "Falstaff philosophizes with cynical amusement on human frailty, quoting the opening of a proverbial folk comparison."
    ],
    "la gatta al lardo...": [
        "the cat to the lard...",
        [
            {"word": "la gatta", "lemma": "gatta", "pos": "noun", "meaning": "the cat (female)"},
            {"word": "al", "lemma": "a", "pos": "preposition", "meaning": "to the"},
            {"word": "lardo", "lemma": "lardo", "pos": "noun", "meaning": "lard / bacon fat"}
        ],
        "Falstaff completes the allusion to the Italian proverb 'Tanto va la gatta al lardo che ci lascia lo zampino', mocking inevitable relapse into sin."
    ],
    "E noi, torniamo al tuo servizio.": [
        "And we, return to your service.",
        [
            {"word": "noi", "lemma": "noi", "pos": "pronoun", "meaning": "we / us"},
            {"word": "torniamo", "lemma": "tornare", "pos": "verb", "meaning": "we return"},
            {"word": "tuo", "lemma": "tuo", "pos": "adjective", "meaning": "your"},
            {"word": "servizio", "lemma": "servizio", "pos": "noun", "meaning": "service"}
        ],
        "Bardolfo and Pistola cheerfully complete Falstaff's proverb by brazenly equating returning to his service with returning to vice."
    ],
    "Padron, là c'è una donna che alla vostra presenza": [
        "Master, over there is a woman who to your presence",
        [
            {"word": "Padron", "lemma": "padrone", "pos": "noun", "meaning": "master / boss (apocopic)"},
            {"word": "c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"},
            {"word": "presenza", "lemma": "presenza", "pos": "noun", "meaning": "presence"}
        ],
        "Bardolfo announces Mistress Quickly using courtly, deferential diction ('alla vostra presenza') to flatter Falstaff."
    ],
    "chiede d'essere ammessa.": [
        "asks to be admitted.",
        [
            {"word": "chiede", "lemma": "chiedere", "pos": "verb", "meaning": "asks / requests"},
            {"word": "d'essere", "lemma": "essere", "pos": "verb", "meaning": "to be"},
            {"word": "ammessa", "lemma": "ammettere", "pos": "verb", "meaning": "admitted (past participle feminine)"}
        ],
        "Syntactic completion of Bardolfo's announcement, using a passive infinitive construction ('d'essere ammessa')."
    ],
    "S'inoltri.": [
        "Let her enter.",
        [
            {"word": "S'inoltri", "lemma": "inoltrarsi", "pos": "verb", "meaning": "let her enter / step forward (3rd person singular present subjunctive)"},
            {"word": "inoltrarsi", "lemma": "inoltrarsi", "pos": "verb", "meaning": "to enter / step forward"}
        ],
        "Falstaff gives lordly permission using an impersonal third-person hortatory subjunctive ('si inoltri', elided to 's'inoltri')."
    ],
    "Reverenza!": [
        "Reverence!",
        [
            {"word": "Reverenza", "lemma": "reverenza", "pos": "noun", "meaning": "reverence / deep bow / curtsy"},
            {"word": "far reverenza", "lemma": "far reverenza", "pos": "idiom", "meaning": "to pay homage / make a curtsy"}
        ],
        "Mistress Quickly introduces her famous comedic catchphrase accompanied by an exaggeratedly deep, mock-solemn curtsy."
    ],
    "Buon giorno, buona donna.": [
        "Good day, good woman.",
        [
            {"word": "Buon", "lemma": "buono", "pos": "adjective", "meaning": "good (apocopic)"},
            {"word": "giorno", "lemma": "giorno", "pos": "noun", "meaning": "day"},
            {"word": "buona", "lemma": "buono", "pos": "adjective", "meaning": "good"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"}
        ],
        "Falstaff responds with patronizing condescension, playing on the polite repetition of 'buon' and 'buona'."
    ],
    "Se vostra grazia vuole,": [
        "If your grace wills,",
        [
            {"word": "Se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
            {"word": "vostra", "lemma": "vostro", "pos": "adjective", "meaning": "your"},
            {"word": "grazia", "lemma": "grazia", "pos": "noun", "meaning": "grace"},
            {"word": "vuole", "lemma": "volere", "pos": "verb", "meaning": "wills / wishes"}
        ],
        "Quickly flatters Falstaff with the grand ducal honorific 'vostra grazia' (Your Grace) to win his gullible confidence."
    ],
    "vorrei, segretamente, dirle quattro parole.": [
        "I would like, secretly, to speak four words to you.",
        [
            {"word": "vorrei", "lemma": "volere", "pos": "verb", "meaning": "I would like (conditional 1st person singular)"},
            {"word": "segretamente", "lemma": "segretamente", "pos": "adverb", "meaning": "secretly"},
            {"word": "dirle", "lemma": "dire", "pos": "verb", "meaning": "to say to her/you (formal)"},
            {"word": "quattro parole", "lemma": "quattro parole", "pos": "idiom", "meaning": "a few words (lit. four words)"}
        ],
        "The Italian idiom 'dire quattro parole' means to speak a few words in private. 'Dirle' uses the formal feminine clitic 'le' addressing 'vostra grazia'."
    ],
    "T'accordo udienza.": [
        "I grant you audience.",
        [
            {"word": "T'accordo", "lemma": "accordare", "pos": "verb", "meaning": "I grant you (ti + accordo)"},
            {"word": "accordo", "lemma": "accordare", "pos": "verb", "meaning": "I grant / accord"},
            {"word": "udienza", "lemma": "udienza", "pos": "noun", "meaning": "audience / hearing"}
        ],
        "Falstaff assumes a regal demeanor by granting an 'udienza' (formal hearing), though addressing Quickly with the informal 'tu' ('t'accordo')."
    ],
    "Escite.": [
        "Leave.",
        [
            {"word": "Escite", "lemma": "uscire", "pos": "verb", "meaning": "leave / go out (2nd person plural imperative, archaic form)"},
            {"word": "uscire", "lemma": "uscire", "pos": "verb", "meaning": "to go out / leave"}
        ],
        "Falstaff imperiously commands Bardolfo and Pistola to clear the room. 'Escite' is the archaic form of 'uscite'."
    ],
    "Madonna": [
        "Lady",
        [
            {"word": "Madonna", "lemma": "madonna", "pos": "noun", "meaning": "my lady / noble lady"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "lady / woman"}
        ],
        "Quickly opens her message with the archaic aristocratic title 'Madonna' (originally 'mia donna', my lady), pausing for dramatic effect."
    ],
    "Alice Ford...": [
        "Alice Ford...",
        [
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"},
            {"word": "Ford", "lemma": "Ford", "pos": "noun", "meaning": "Ford (proper surname)"}
        ],
        "Quickly utters Alice's name with theatrical hesitation, dangling the bait before the intrigued knight."
    ],
    "Ebben?": [
        "Well?",
        [
            {"word": "Ebben", "lemma": "ebbene", "pos": "interjection", "meaning": "well / well then"},
            {"word": "ebbene", "lemma": "ebbene", "pos": "conjunction", "meaning": "well then"}
        ],
        "Falstaff impatiently presses her to continue. 'Ebben' is the apocopic form of 'ebbene'."
    ],
    "Ahimè! Povera donna!": [
        "Alas! Poor woman!",
        [
            {"word": "Ahimè", "lemma": "ahimè", "pos": "interjection", "meaning": "alas / ah me"},
            {"word": "Povera", "lemma": "povero", "pos": "adjective", "meaning": "poor / pitiful"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"}
        ],
        "Quickly theatrically laments Alice's plight with her signature recurring sigh 'Povera donna!', feigning deep sympathy."
    ],
    "Siete un gran seduttore!": [
        "You are a great seducer!",
        [
            {"word": "Siete", "lemma": "essere", "pos": "verb", "meaning": "you are (2nd person plural)"},
            {"word": "gran", "lemma": "grande", "pos": "adjective", "meaning": "great / big (apocopic)"},
            {"word": "seduttore", "lemma": "seduttore", "pos": "noun", "meaning": "seducer"}
        ],
        "Quickly strokes Falstaff's supreme vanity by declaring him a master seducer."
    ],
    "Lo so. Continua.": [
        "I know it. Continue.",
        [
            {"word": "Lo", "lemma": "lo", "pos": "pronoun", "meaning": "it / that"},
            {"word": "so", "lemma": "sapere", "pos": "verb", "meaning": "I know"},
            {"word": "Continua", "lemma": "continuare", "pos": "verb", "meaning": "continue / go on (imperative 2nd singular)"}
        ],
        "Falstaff readily agrees with zero false modesty, delighted by her appraisal of his magnetism."
    ],
    "sta in gran agitazione d'amor per voi; vi dice": [
        "is in great agitation of love for you; she tells you",
        [
            {"word": "sta", "lemma": "stare", "pos": "verb", "meaning": "is / stands (3rd person singular)"},
            {"word": "agitazione", "lemma": "agitazione", "pos": "noun", "meaning": "agitation / turmoil"},
            {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocopic)"},
            {"word": "dice", "lemma": "dire", "pos": "verb", "meaning": "tells / says"}
        ],
        "Continuing from line 14 ('Madonna Alice Ford...'), Quickly portrays Alice in a state of feverish romantic turmoil."
    ],
    "ch'ebbe la vostra lettera, che vi ringrazia e che": [
        "that she received your letter, that she thanks you and that",
        [
            {"word": "ch'ebbe", "lemma": "avere", "pos": "verb", "meaning": "that she had / received (che + ebbe)"},
            {"word": "ebbe", "lemma": "avere", "pos": "verb", "meaning": "she had / received (passato remoto)"},
            {"word": "lettera", "lemma": "lettera", "pos": "noun", "meaning": "letter"},
            {"word": "ringrazia", "lemma": "ringraziare", "pos": "verb", "meaning": "thanks"}
        ],
        "Quickly connects clauses with breathless 'che' conjunctions, recounting Alice's gratitude for Falstaff's billet-doux."
    ],
    "suo marito esce sempre dalle due alle tre.": [
        "her husband always goes out from two to three.",
        [
            {"word": "marito", "lemma": "marito", "pos": "noun", "meaning": "husband"},
            {"word": "esce", "lemma": "uscire", "pos": "verb", "meaning": "goes out / leaves"},
            {"word": "sempre", "lemma": "sempre", "pos": "adverb", "meaning": "always"},
            {"word": "dalle due alle tre", "lemma": "dalle due alle tre", "pos": "idiom", "meaning": "from two to three (o'clock)"}
        ],
        "Quickly delivers the essential plot cue: Ford's regular absence between two and three o'clock, establishing the central musical motif of the opera."
    ],
    "Dalle due alle tre.": [
        "From two to three.",
        [
            {"word": "Dalle", "lemma": "da", "pos": "preposition", "meaning": "from the"},
            {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two (o'clock)"},
            {"word": "alle", "lemma": "a", "pos": "preposition", "meaning": "to the"},
            {"word": "tre", "lemma": "tre", "pos": "noun", "meaning": "three (o'clock)"}
        ],
        "Falstaff repeats the hours intently, committing the appointed time of the rendezvous to memory."
    ],
    "Vostra grazia a quell'ora": [
        "Your grace at that hour",
        [
            {"word": "Vostra", "lemma": "vostro", "pos": "adjective", "meaning": "your"},
            {"word": "grazia", "lemma": "grazia", "pos": "noun", "meaning": "grace"},
            {"word": "ora", "lemma": "ora", "pos": "noun", "meaning": "hour / time"}
        ],
        "Quickly assures Falstaff that during that exact window he will have unobstructed access to the house."
    ],
    "potrà liberamente salir ove dimora": [
        "will be able freely to go up where dwells",
        [
            {"word": "potrà", "lemma": "potere", "pos": "verb", "meaning": "will be able to (future 3rd singular)"},
            {"word": "liberamente", "lemma": "liberamente", "pos": "adverb", "meaning": "freely"},
            {"word": "salir", "lemma": "salire", "pos": "verb", "meaning": "to ascend / go up (apocopic)"},
            {"word": "ove", "lemma": "ove", "pos": "adverb", "meaning": "where (literary)"},
            {"word": "dimora", "lemma": "dimorare", "pos": "verb", "meaning": "dwells / lives"}
        ],
        "Quickly uses elevated poetic diction ('salir', 'ove dimora') to lend an aura of high romance to the illicit assignation."
    ],
    "la bella Alice! Povera donna! le angosce sue": [
        "fair Alice! Poor woman! her anguish",
        [
            {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / fair"},
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice"},
            {"word": "Povera", "lemma": "povero", "pos": "adjective", "meaning": "poor"},
            {"word": "angosce", "lemma": "angoscia", "pos": "noun", "meaning": "anguish / torments"}
        ],
        "Quickly melodramatically interrupts herself with another 'Povera donna!', milking Alice's supposed suffering for maximum comic effect."
    ],
    "son crudeli! ha un marito geloso!": [
        "are cruel! she has a jealous husband!",
        [
            {"word": "son", "lemma": "essere", "pos": "verb", "meaning": "are (apocopic form of sono)"},
            {"word": "crudeli", "lemma": "crudele", "pos": "adjective", "meaning": "cruel"},
            {"word": "marito", "lemma": "marito", "pos": "noun", "meaning": "husband"},
            {"word": "geloso", "lemma": "geloso", "pos": "adjective", "meaning": "jealous"}
        ],
        "Quickly underscores Master Ford's ferocious jealousy, heightening the thrill of danger and conquest for Falstaff."
    ],
    "Le dirai che impazïente aspetto quell'ora.": [
        "You will tell her that impatient I await that hour.",
        [
            {"word": "dirai", "lemma": "dire", "pos": "verb", "meaning": "you will tell (future 2nd singular)"},
            {"word": "impazïente", "lemma": "impaziente", "pos": "adjective", "meaning": "impatient (with diaeresis)"},
            {"word": "aspetto", "lemma": "aspettare", "pos": "verb", "meaning": "I await / wait for"},
            {"word": "ora", "lemma": "ora", "pos": "noun", "meaning": "hour / time"}
        ],
        "Falstaff eagerly accepts the appointment. The diaeresis in 'impazïente' indicates five poetic syllables (im-pa-zi-en-te)."
    ],
    "Al mio dovere non mancherò.": [
        "To my duty I shall not fail.",
        [
            {"word": "dovere", "lemma": "dovere", "pos": "noun", "meaning": "duty"},
            {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "mancherò", "lemma": "mancare", "pos": "verb", "meaning": "I shall fail / fall short (future 1st singular)"}
        ],
        "Falstaff comically portrays illicit amorous conquest as a solemn knightly obligation ('al mio dovere')."
    ],
    "Ben detto.": [
        "Well said.",
        [
            {"word": "Ben", "lemma": "bene", "pos": "adverb", "meaning": "well (apocopic)"},
            {"word": "detto", "lemma": "dire", "pos": "verb", "meaning": "said (past participle)"}
        ],
        "Quickly approves with dry comic irony before introducing the second stage of her trap."
    ],
    "Ma c'è un'altra ambasciata per vostra grazia.": [
        "But there is another embassy for your grace.",
        [
            {"word": "Ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
            {"word": "c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is"},
            {"word": "altra", "lemma": "altro", "pos": "adjective", "meaning": "other / another"},
            {"word": "ambasciata", "lemma": "ambasciata", "pos": "noun", "meaning": "embassy / diplomatic message"}
        ],
        "Quickly refers to her message as an 'ambasciata' (embassy), maintaining the parody of high-stakes court diplomacy."
    ],
    "Parla.": [
        "Speak.",
        [
            {"word": "Parla", "lemma": "parlare", "pos": "verb", "meaning": "speak (imperative 2nd singular)"},
            {"word": "parlare", "lemma": "parlare", "pos": "verb", "meaning": "to speak"}
        ],
        "Falstaff issues a lordly, monosyllabic command to hear the second message."
    ],
    "La bella Meg": [
        "Fair Meg",
        [
            {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / fair"},
            {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper name)"}
        ],
        "Quickly introduces Meg Page, recipient of Falstaff's second identical love letter."
    ],
    "anch'essa vi saluta molto amorosamente;": [
        "she too greets you very lovingly;",
        [
            {"word": "anch'essa", "lemma": "anch'esso", "pos": "pronoun", "meaning": "she too / she as well"},
            {"word": "saluta", "lemma": "salutare", "pos": "verb", "meaning": "greets"},
            {"word": "molto", "lemma": "molto", "pos": "adverb", "meaning": "very / much"},
            {"word": "amorosamente", "lemma": "amorosamente", "pos": "adverb", "meaning": "lovingly / amorously"}
        ],
        "Quickly assures Falstaff that Meg reciprocates his passion with equal tenderness."
    ],
    "dice che suo marito è assai di rado assente.": [
        "says that her husband is very rarely absent.",
        [
            {"word": "dice", "lemma": "dire", "pos": "verb", "meaning": "says / tells"},
            {"word": "marito", "lemma": "marito", "pos": "noun", "meaning": "husband"},
            {"word": "assai", "lemma": "assai", "pos": "adverb", "meaning": "very / greatly"},
            {"word": "di rado", "lemma": "di rado", "pos": "adverb", "meaning": "rarely / seldom"},
            {"word": "assente", "lemma": "assente", "pos": "adjective", "meaning": "absent"}
        ],
        "Quickly explains why Meg cannot receive him immediately, focusing Falstaff's attention squarely on Alice."
    ],
    "Povera donna! un giglio di candore e di fé!": [
        "Poor woman! a lily of purity and of faith!",
        [
            {"word": "Povera", "lemma": "povero", "pos": "adjective", "meaning": "poor"},
            {"word": "giglio", "lemma": "giglio", "pos": "noun", "meaning": "lily"},
            {"word": "candore", "lemma": "candore", "pos": "noun", "meaning": "candor / whiteness / purity"},
            {"word": "fé", "lemma": "fede", "pos": "noun", "meaning": "faith / fidelity (apocopic)"}
        ],
        "Quickly ironically paints Meg as an innocent lily of marital fidelity ('candore e di fé') consumed by passion."
    ],
    "Voi le stregate tutte.": [
        "You bewitch them all.",
        [
            {"word": "Voi", "lemma": "voi", "pos": "pronoun", "meaning": "you"},
            {"word": "le", "lemma": "le", "pos": "pronoun", "meaning": "them (feminine plural direct object)"},
            {"word": "stregate", "lemma": "stregare", "pos": "verb", "meaning": "you bewitch / enchant"},
            {"word": "tutte", "lemma": "tutto", "pos": "pronoun", "meaning": "all (feminine plural)"}
        ],
        "Quickly brings her flattery to a climax by telling Falstaff he holds magical sway over all womankind."
    ],
    "Stregoneria non c'è,": [
        "Witchcraft there is none,",
        [
            {"word": "Stregoneria", "lemma": "stregoneria", "pos": "noun", "meaning": "witchcraft / sorcery"},
            {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is"}
        ],
        "Falstaff denies the occult, attributing his success entirely to his own masculine appeal."
    ],
    "ma un certo qual mio fascino personal... Dimmi: l'altra": [
        "but a certain personal charm of mine... Tell me: does the other",
        [
            {"word": "fascino", "lemma": "fascino", "pos": "noun", "meaning": "charm / fascination"},
            {"word": "personal", "lemma": "personale", "pos": "adjective", "meaning": "personal (apocopic)"},
            {"word": "Dimmi", "lemma": "dire", "pos": "verb", "meaning": "tell me (di' + mi)"},
            {"word": "l'altra", "lemma": "altro", "pos": "pronoun", "meaning": "the other (woman)"}
        ],
        "Falstaff preens himself on his 'fascino personal', but abruptly checks whether the two women know of each other's letters."
    ],
    "sa di quest'altra?": [
        "know of this other?",
        [
            {"word": "sa", "lemma": "sapere", "pos": "verb", "meaning": "knows"},
            {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of / about"},
            {"word": "quest'altra", "lemma": "quest'altro", "pos": "pronoun", "meaning": "this other (woman)"}
        ],
        "Falstaff questions Quickly closely to confirm his identical love letters have remained a secret."
    ],
    "Oibò!": [
        "Not at all!",
        [
            {"word": "Oibò", "lemma": "oibò", "pos": "interjection", "meaning": "heavens no / by no means / fie"},
            {"word": "oibò", "lemma": "oibò", "pos": "adverb", "meaning": "by no means / not at all"}
        ],
        "Quickly feigns indignant shock at the suggestion that women would ever betray one another's confidences."
    ],
    "La donna nasce scaltra.": [
        "Woman is born cunning.",
        [
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"},
            {"word": "nasce", "lemma": "nascere", "pos": "verb", "meaning": "is born"},
            {"word": "scaltra", "lemma": "scaltro", "pos": "adjective", "meaning": "cunning / shrewd / astute"}
        ],
        "Quickly utters a comedic proverb on innate female shrewdness to put Falstaff completely off his guard."
    ],
    "Non temete.": [
        "Do not fear.",
        [
            {"word": "Non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "temete", "lemma": "temere", "pos": "verb", "meaning": "fear (2nd person plural imperative)"}
        ],
        "Quickly comforts Falstaff, ensuring he walks confidently into the trap."
    ],
    "Or ti vo' remunerar...": [
        "Now I want to reward you...",
        [
            {"word": "Or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocopic)"},
            {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (indirect object)"},
            {"word": "vo'", "lemma": "volere", "pos": "verb", "meaning": "I want / wish (apocopic form of voglio)"},
            {"word": "remunerar", "lemma": "remunerare", "pos": "verb", "meaning": "to reward / remunerate (apocopic)"}
        ],
        "Falstaff reaches into his purse to pay Quickly for her messenger services."
    ],
    "Chi semina grazie,": [
        "He who sows favors,",
        [
            {"word": "Chi", "lemma": "chi", "pos": "pronoun", "meaning": "who / he who / whoever"},
            {"word": "semina", "lemma": "seminare", "pos": "verb", "meaning": "sows"},
            {"word": "grazie", "lemma": "grazia", "pos": "noun", "meaning": "favors / kindnesses / thanks"}
        ],
        "Quickly recites a pious rhyming aphorism ('Chi semina grazie, raccoglie amore') to encourage a generous gratuity."
    ],
    "raccoglie amore.": [
        "reaps love.",
        [
            {"word": "raccoglie", "lemma": "raccogliere", "pos": "verb", "meaning": "reaps / harvests / collects"},
            {"word": "amore", "lemma": "amore", "pos": "noun", "meaning": "love"}
        ],
        "The completion of Quickly's rhyming moral maxim on the rewards of generosity."
    ],
    "Prendi, Mercuriofemina.": [
        "Take this, female Mercury.",
        [
            {"word": "Prendi", "lemma": "prendere", "pos": "verb", "meaning": "take (imperative 2nd singular)"},
            {"word": "Mercuriofemina", "lemma": "Mercuriofemina", "pos": "noun", "meaning": "female Mercury / female messenger of the gods"}
        ],
        "Falstaff coins a classical portmanteau ('Mercuriofemina'), comparing Quickly to Mercury, messenger god and patron of thieves."
    ],
    "Saluta le tue dame.": [
        "Greet your ladies.",
        [
            {"word": "Saluta", "lemma": "salutare", "pos": "verb", "meaning": "greet (imperative 2nd singular)"},
            {"word": "tue", "lemma": "tuo", "pos": "adjective", "meaning": "your"},
            {"word": "dame", "lemma": "dama", "pos": "noun", "meaning": "ladies / gentlewomen"}
        ],
        "Falstaff instructs Quickly to convey his greetings to Alice and Meg as he dismisses her."
    ],
    "M'inchino.": [
        "I bow.",
        [
            {"word": "M'inchino", "lemma": "inchinarsi", "pos": "verb", "meaning": "I bow / curtsy (mi + inchino)"},
            {"word": "inchinarsi", "lemma": "inchinarsi", "pos": "verb", "meaning": "to bow / curtsy"}
        ],
        "Mistress Quickly takes her leave with another elaborate, mock-respectful curtsy."
    ],
    "Falstaff solo, poi Bardolfo, poi mr. Ford, poi Pistola.": [
        "Falstaff alone, then Bardolfo, then Mr. Ford, then Pistola.",
        [
            {"word": "solo", "lemma": "solo", "pos": "adjective", "meaning": "alone"},
            {"word": "poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "mr.", "lemma": "mister", "pos": "noun", "meaning": "Mister (honorific title)"},
            {"word": "Bardolfo", "lemma": "Bardolfo", "pos": "noun", "meaning": "Bardolfo (proper name)"},
            {"word": "Pistola", "lemma": "Pistola", "pos": "noun", "meaning": "Pistola (proper name)"}
        ],
        "Libretto stage direction marking the transition to Falstaff's soliloquy and the subsequent arrival of Ford in disguise."
    ],
    "Alice è mia!": [
        "Alice is mine!",
        [
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "mia", "lemma": "mio", "pos": "adjective", "meaning": "mine"}
        ],
        "Left alone, Falstaff bursts into ecstatic jubilation at his impending conquest of Alice Ford."
    ],
    "Va', vecchio John, va', va' per la tua via.": [
        "Go, old John, go, go on your way.",
        [
            {"word": "Va'", "lemma": "andare", "pos": "verb", "meaning": "go (imperative 2nd singular of andare)"},
            {"word": "vecchio", "lemma": "vecchio", "pos": "adjective", "meaning": "old"},
            {"word": "John", "lemma": "John", "pos": "noun", "meaning": "John (proper name)"},
            {"word": "via", "lemma": "via", "pos": "noun", "meaning": "way / path / road"}
        ],
        "Falstaff begins his famous celebratory soliloquy ('Va, vecchio John'), boasting of his enduring prowess and vitality."
    ],
    "Questa tua vecchia carne ancora spreme": [
        "This old flesh of yours still squeezes out",
        [
            {"word": "Questa", "lemma": "questo", "pos": "adjective", "meaning": "this"},
            {"word": "tua", "lemma": "tuo", "pos": "adjective", "meaning": "your"},
            {"word": "carne", "lemma": "carne", "pos": "noun", "meaning": "flesh"},
            {"word": "ancora", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet"},
            {"word": "spreme", "lemma": "spremere", "pos": "verb", "meaning": "squeezes / presses out"}
        ],
        "Falstaff employs earthy, sensual imagery ('carne', 'spreme') to praise his aging body's capacity for pleasure."
    ],
    "qualche dolcezza a te.": [
        "some sweetness for you.",
        [
            {"word": "qualche", "lemma": "qualche", "pos": "adjective", "meaning": "some / a few"},
            {"word": "dolcezza", "lemma": "dolcezza", "pos": "noun", "meaning": "sweetness / delight"},
            {"word": "te", "lemma": "te", "pos": "pronoun", "meaning": "you"}
        ],
        "Syntactic continuation from line 52: Falstaff's old flesh can still yield sweet delights for him."
    ],
    "Tutte le donne ammutinate insieme": [
        "All the women mutinying together",
        [
            {"word": "Tutte", "lemma": "tutto", "pos": "adjective", "meaning": "all"},
            {"word": "donne", "lemma": "donna", "pos": "noun", "meaning": "women"},
            {"word": "ammutinate", "lemma": "ammutinato", "pos": "adjective", "meaning": "mutinous / in revolt"},
            {"word": "insieme", "lemma": "insieme", "pos": "adverb", "meaning": "together"}
        ],
        "Falstaff fantasizes that women everywhere are staging a mutiny against their marriages out of desire for him."
    ],
    "si dannano per me!": [
        "are damning themselves for me!",
        [
            {"word": "si dannano", "lemma": "dannarsi", "pos": "verb", "meaning": "they damn themselves (reflexive)"},
            {"word": "dannano", "lemma": "dannare", "pos": "verb", "meaning": "they damn"},
            {"word": "per", "lemma": "per", "pos": "preposition", "meaning": "for"},
            {"word": "me", "lemma": "me", "pos": "pronoun", "meaning": "me"}
        ],
        "Falstaff gloats that women are willingly damning their souls ('si dannano') for the sake of his love."
    ],
    "Buon corpo di sir John, ch'io nutro e sazio,": [
        "Good body of Sir John, which I feed and sate,",
        [
            {"word": "corpo", "lemma": "corpo", "pos": "noun", "meaning": "body"},
            {"word": "sir", "lemma": "sir", "pos": "noun", "meaning": "Sir (knightly honorific)"},
            {"word": "nutro", "lemma": "nutrire", "pos": "verb", "meaning": "I nourish / feed"},
            {"word": "sazio", "lemma": "saziare", "pos": "verb", "meaning": "I sate / satisfy"}
        ],
        "Falstaff apostrophizes his own corpulent body as a faithful partner whom he tenderly pampers."
    ],
    "va', ti ringrazio.": [
        "go, I thank you.",
        [
            {"word": "va'", "lemma": "andare", "pos": "verb", "meaning": "go (imperative 2nd singular)"},
            {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (direct object)"},
            {"word": "ringrazio", "lemma": "ringraziare", "pos": "verb", "meaning": "I thank"}
        ],
        "Falstaff concludes his exuberant soliloquy by warmly thanking his belly for its unflagging service."
    ],
    "Padron, di là c'è un certo messer mastro Fontana": [
        "Master, over there is a certain Master Master Fontana",
        [
            {"word": "Padron", "lemma": "padrone", "pos": "noun", "meaning": "master (apocopic)"},
            {"word": "messer", "lemma": "messer", "pos": "noun", "meaning": "master / sir"},
            {"word": "mastro", "lemma": "mastro", "pos": "noun", "meaning": "master artisan"},
            {"word": "Fontana", "lemma": "Fontana", "pos": "noun", "meaning": "Fontana (Master Brook)"}
        ],
        "Bardolfo re-enters announcing Master Ford disguised as 'messer mastro Fontana' (Boito's translation of Master Brook)."
    ],
    "che anela di conoscervi; offre una damigiana": [
        "who longs to meet you; he offers a demijohn",
        [
            {"word": "anela", "lemma": "anelare", "pos": "verb", "meaning": "yearns / pants / longs"},
            {"word": "conoscervi", "lemma": "conoscere", "pos": "verb", "meaning": "to know you / meet you (conoscere + vi)"},
            {"word": "offre", "lemma": "offrire", "pos": "verb", "meaning": "offers"},
            {"word": "damigiana", "lemma": "damigiana", "pos": "noun", "meaning": "demijohn / large flagon"}
        ],
        "Bardolfo conveys the visitor's eager yearning and presents the introductory bribe of wine."
    ],
    "di Cipro per l'asciolvere di vostra signoria.": [
        "of Cyprus wine for your lordship's morning snack.",
        [
            {"word": "Cipro", "lemma": "Cipro", "pos": "noun", "meaning": "Cyprus (wine)"},
            {"word": "asciolvere", "lemma": "asciolvere", "pos": "noun", "meaning": "morning snack / late breakfast"},
            {"word": "vostra signoria", "lemma": "vostra signoria", "pos": "idiom", "meaning": "your lordship (formal address)"}
        ],
        "Vino di Cipro was a rich, sweet wine; 'asciolvere' is an archaic Italian term for breakfast or light morning meal."
    ],
    "Il suo nome è Fontana?": [
        "His name is Fontana?",
        [
            {"word": "nome", "lemma": "nome", "pos": "noun", "meaning": "name"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "Fontana", "lemma": "Fontana", "pos": "noun", "meaning": "Fontana (proper name, lit. Fountain)"}
        ],
        "Falstaff notes the name 'Fontana' (fountain), setting up an immediate pun on gushing wine."
    ],
    "Sì.": [
        "Yes.",
        [
            {"word": "Sì", "lemma": "sì", "pos": "adverb", "meaning": "yes"},
            {"word": "sì", "lemma": "sì", "pos": "particle", "meaning": "affirmative particle"}
        ],
        "Bardolfo confirms the stranger's chosen alias."
    ],
    "Bene accolta sia": [
        "Well received may be",
        [
            {"word": "Bene", "lemma": "bene", "pos": "adverb", "meaning": "well"},
            {"word": "accolta", "lemma": "accogliere", "pos": "verb", "meaning": "welcomed / received (past participle feminine)"},
            {"word": "sia", "lemma": "essere", "pos": "verb", "meaning": "may be (subjunctive present 3rd singular)"}
        ],
        "Falstaff delivers an ornate, inverted subjunctive welcome playing on the guest's name."
    ],
    "la fontana che spande un simile liquore!": [
        "the fountain that pours forth such a liquor!",
        [
            {"word": "fontana", "lemma": "fontana", "pos": "noun", "meaning": "fountain"},
            {"word": "spande", "lemma": "spandere", "pos": "verb", "meaning": "pours out / sheds / diffuses"},
            {"word": "simile", "lemma": "simile", "pos": "adjective", "meaning": "such / similar"},
            {"word": "liquore", "lemma": "liquore", "pos": "noun", "meaning": "liquor / wine"}
        ],
        "Falstaff completes his pun: any fountain that gushes Cyprus wine instead of water is doubly welcome."
    ],
    "Entri.": [
        "Let him enter.",
        [
            {"word": "Entri", "lemma": "entrare", "pos": "verb", "meaning": "let him enter (subjunctive 3rd person singular)"},
            {"word": "entrare", "lemma": "entrare", "pos": "verb", "meaning": "to enter"}
        ],
        "Falstaff gives the order to admit Master Fontana."
    ],
    "Va', vecchio John, per la tua via.": [
        "Go, old John, on your way.",
        [
            {"word": "Va'", "lemma": "andare", "pos": "verb", "meaning": "go (imperative 2nd singular)"},
            {"word": "vecchio", "lemma": "vecchio", "pos": "adjective", "meaning": "old"},
            {"word": "John", "lemma": "John", "pos": "noun", "meaning": "John (proper name)"},
            {"word": "via", "lemma": "via", "pos": "noun", "meaning": "way / path"}
        ],
        "Falstaff murmurs his cheerful mantra once more, savoring his unbroken streak of good fortune."
    ],
    "Ford travestito entra da sinistra, preceduto da Bardolfo che si ferma": [
        "Ford in disguise enters from the left, preceded by Bardolfo who stops",
        [
            {"word": "travestito", "lemma": "travestire", "pos": "adjective", "meaning": "disguised"},
            {"word": "entra", "lemma": "entrare", "pos": "verb", "meaning": "enters"},
            {"word": "sinistra", "lemma": "sinistra", "pos": "noun", "meaning": "left (stage left)"},
            {"word": "preceduto", "lemma": "precedere", "pos": "verb", "meaning": "preceded (past participle)"},
            {"word": "ferma", "lemma": "fermarsi", "pos": "verb", "meaning": "stops (reflexive)"}
        ],
        "Stage direction describing Ford's entry in disguise, ushered in ceremoniously by Bardolfo."
    ],
    "all'uscio e s'inchina al suo passaggio e seguìto da Pistola, il quale tiene": [
        "at the doorway and bows at his passage and followed by Pistola, who holds",
        [
            {"word": "uscio", "lemma": "uscio", "pos": "noun", "meaning": "doorway / door"},
            {"word": "s'inchina", "lemma": "inchinarsi", "pos": "verb", "meaning": "bows (reflexive)"},
            {"word": "passaggio", "lemma": "passaggio", "pos": "noun", "meaning": "passage / passing"},
            {"word": "seguìto", "lemma": "seguire", "pos": "verb", "meaning": "followed (past participle)"},
            {"word": "tiene", "lemma": "tenere", "pos": "verb", "meaning": "holds"}
        ],
        "Stage direction showing Bardolfo's obsequious bowing and Pistola carrying the wine."
    ],
    "una damigiana che depone sul tavolo.": [
        "a demijohn which he places on the table.",
        [
            {"word": "damigiana", "lemma": "damigiana", "pos": "noun", "meaning": "demijohn / flagon"},
            {"word": "depone", "lemma": "deporre", "pos": "verb", "meaning": "places / sets down"},
            {"word": "tavolo", "lemma": "tavolo", "pos": "noun", "meaning": "table"}
        ],
        "Stage direction detailing Pistola placing the gift of wine onto Falstaff's table."
    ],
    "Pistola e Bardolfo restano nel fondo. Ford tiene un sacchetto in mano.": [
        "Pistola and Bardolfo remain in the background. Ford holds a small bag in hand.",
        [
            {"word": "restano", "lemma": "restare", "pos": "verb", "meaning": "remain / stay"},
            {"word": "fondo", "lemma": "fondo", "pos": "noun", "meaning": "background / back of stage"},
            {"word": "sacchetto", "lemma": "sacchetto", "pos": "noun", "meaning": "small bag / pouch"},
            {"word": "mano", "lemma": "mano", "pos": "noun", "meaning": "hand"}
        ],
        "Stage direction establishing positions: the two rogues watch from upstage while Ford grips his money pouch."
    ],
    "Signore,": [
        "Sir,",
        [
            {"word": "Signore", "lemma": "signore", "pos": "noun", "meaning": "sir / lord / gentleman"},
            {"word": "signore", "lemma": "signore", "pos": "noun", "meaning": "sir"}
        ],
        "Ford greets Falstaff with formal courtesy."
    ],
    "v'assista il cielo!": [
        "may heaven assist you!",
        [
            {"word": "v'assista", "lemma": "assistere", "pos": "verb", "meaning": "may it assist you (voi + assista)"},
            {"word": "assista", "lemma": "assistere", "pos": "verb", "meaning": "may assist (subjunctive present 3rd singular)"},
            {"word": "cielo", "lemma": "cielo", "pos": "noun", "meaning": "heaven / sky"}
        ],
        "Ford offers a traditional pious salutation invoking heaven's blessing."
    ],
    "Assista voi pur, signore.": [
        "May it assist you as well, sir.",
        [
            {"word": "Assista", "lemma": "assistere", "pos": "verb", "meaning": "may it assist (subjunctive 3rd singular)"},
            {"word": "voi", "lemma": "voi", "pos": "pronoun", "meaning": "you"},
            {"word": "pur", "lemma": "pure", "pos": "adverb", "meaning": "also / as well (apocopic form of pure)"},
            {"word": "signore", "lemma": "signore", "pos": "noun", "meaning": "sir"}
        ],
        "Falstaff returns the greeting with symmetric courtesy; 'pur' means 'likewise / as well'."
    ],
    "Io sono,": [
        "I am,",
        [
            {"word": "Io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
            {"word": "sono", "lemma": "essere", "pos": "verb", "meaning": "am"}
        ],
        "Ford begins a polite, self-effacing preamble."
    ],
    "davver, molto indiscreto, e vi chiedo perdono,": [
        "indeed, very indiscreet, and I ask your pardon,",
        [
            {"word": "davver", "lemma": "davvero", "pos": "adverb", "meaning": "indeed / truly (apocopic)"},
            {"word": "indiscreto", "lemma": "indiscreto", "pos": "adjective", "meaning": "indiscreet / intrusive"},
            {"word": "chiedo", "lemma": "chiedere", "pos": "verb", "meaning": "I ask / beg"},
            {"word": "perdono", "lemma": "perdono", "pos": "noun", "meaning": "pardon / forgiveness"}
        ],
        "Ford plays the part of a contrite visitor apologizing for his uninvited intrusion."
    ],
    "se, senza cerimonie, qui vengo e sprovveduto": [
        "if, without ceremonies, I come here and unprovided",
        [
            {"word": "senza", "lemma": "senza", "pos": "preposition", "meaning": "without"},
            {"word": "cerimonie", "lemma": "cerimonia", "pos": "noun", "meaning": "ceremonies / formalities"},
            {"word": "vengo", "lemma": "venire", "pos": "verb", "meaning": "I come"},
            {"word": "sprovveduto", "lemma": "sprovveduto", "pos": "adjective", "meaning": "unprovided / lacking"}
        ],
        "Ford apologizes for bypassing normal social etiquette and introductions."
    ],
    "di più lunghi preamboli.": [
        "with longer preambles.",
        [
            {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more"},
            {"word": "lunghi", "lemma": "lungo", "pos": "adjective", "meaning": "long"},
            {"word": "preamboli", "lemma": "preambolo", "pos": "noun", "meaning": "preambles / introductory remarks"}
        ],
        "Completing Ford's apology: he arrives without lengthy preparatory speeches."
    ],
    "Voi siete il benvenuto.": [
        "You are welcome.",
        [
            {"word": "Voi", "lemma": "voi", "pos": "pronoun", "meaning": "you"},
            {"word": "siete", "lemma": "essere", "pos": "verb", "meaning": "are"},
            {"word": "benvenuto", "lemma": "benvenuto", "pos": "adjective", "meaning": "welcome"}
        ],
        "Falstaff graciously puts his wealthy visitor at ease."
    ],
    "In me vedete un uomo ch'ha un'abbondanza grande": [
        "In me you see a man who has a great abundance",
        [
            {"word": "vedete", "lemma": "vedere", "pos": "verb", "meaning": "you see"},
            {"word": "uomo", "lemma": "uomo", "pos": "noun", "meaning": "man"},
            {"word": "ch'ha", "lemma": "avere", "pos": "verb", "meaning": "who has (che + ha)"},
            {"word": "abbondanza", "lemma": "abbondanza", "pos": "noun", "meaning": "abundance / wealth"},
            {"word": "grande", "lemma": "grande", "pos": "adjective", "meaning": "great"}
        ],
        "Ford establishes his alias as a man of extraordinary private fortune."
    ],
    "degli agi della vita; un uom che spende e spande": [
        "of the comforts of life; a man who spends and squanders",
        [
            {"word": "agi", "lemma": "agio", "pos": "noun", "meaning": "comforts / luxuries / ease"},
            {"word": "vita", "lemma": "vita", "pos": "noun", "meaning": "life"},
            {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocopic)"},
            {"word": "spende e spande", "lemma": "spendere e spandere", "pos": "idiom", "meaning": "spends and squanders / throws money around"}
        ],
        "The popular Italian idiom 'spendere e spandere' characterizes Fontana as a lavish, open-handed spendthrift."
    ],
    "come più gli talenta pur di passar mattana.": [
        "as it best pleases him just to indulge a whim.",
        [
            {"word": "talenta", "lemma": "talentare", "pos": "verb", "meaning": "pleases / suits (archaic)"},
            {"word": "pur di", "lemma": "pur di", "pos": "conjunction", "meaning": "just to / in order to"},
            {"word": "passar", "lemma": "passare", "pos": "verb", "meaning": "to pass / indulge (apocopic)"},
            {"word": "mattana", "lemma": "mattana", "pos": "noun", "meaning": "whim / caprice / mad craving"}
        ],
        "'Talentare' is an archaic verb meaning to please; 'passar mattana' means to gratify an eccentric craving or madness."
    ],
    "Io mi chiamo Fontana!": [
        "My name is Fontana!",
        [
            {"word": "Io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
            {"word": "mi chiamo", "lemma": "chiamarsi", "pos": "verb", "meaning": "my name is / I call myself"},
            {"word": "chiamo", "lemma": "chiamare", "pos": "verb", "meaning": "I call"},
            {"word": "Fontana", "lemma": "Fontana", "pos": "noun", "meaning": "Fontana (Master Brook)"}
        ],
        "Ford formally announces his pseudonym 'Fontana' with great theatricality."
    ],
    "Caro signor Fontana!": [
        "Dear Mister Fontana!",
        [
            {"word": "Caro", "lemma": "caro", "pos": "adjective", "meaning": "dear"},
            {"word": "signor", "lemma": "signore", "pos": "noun", "meaning": "mister / sir (apocopic)"},
            {"word": "Fontana", "lemma": "Fontana", "pos": "noun", "meaning": "Fontana (proper name)"}
        ],
        "Falstaff warmly welcomes Fontana, smelling generous financial profit."
    ],
    "Voglio fare con voi più ampia conoscenza.": [
        "I want to make a fuller acquaintance with you.",
        [
            {"word": "Voglio", "lemma": "volere", "pos": "verb", "meaning": "I want / wish"},
            {"word": "fare", "lemma": "fare", "pos": "verb", "meaning": "to make"},
            {"word": "ampia", "lemma": "ampio", "pos": "adjective", "meaning": "broad / ample / fuller"},
            {"word": "conoscenza", "lemma": "conoscenza", "pos": "noun", "meaning": "acquaintance / knowledge"}
        ],
        "Falstaff encourages intimacy with his affluent new admirer."
    ],
    "Caro sir John, desidero parlarvi in confidenza.": [
        "Dear Sir John, I wish to speak to you in confidence.",
        [
            {"word": "Caro", "lemma": "caro", "pos": "adjective", "meaning": "dear"},
            {"word": "desidero", "lemma": "desiderare", "pos": "verb", "meaning": "I desire / wish"},
            {"word": "parlarvi", "lemma": "parlare", "pos": "verb", "meaning": "to speak to you (parlare + vi)"},
            {"word": "in confidenza", "lemma": "in confidenza", "pos": "idiom", "meaning": "in confidence / privately"}
        ],
        "Ford asks to speak in strict confidence ('in confidenza'), triggering the whispering between Bardolfo and Pistola."
    ],
    "Attento!": [
        "Pay attention!",
        [
            {"word": "Attento", "lemma": "attento", "pos": "adjective", "meaning": "attentive / watchful"},
            {"word": "stare attento", "lemma": "stare attento", "pos": "idiom", "meaning": "to pay attention / watch out"}
        ],
        "Bardolfo alerts Pistola as they watch Ford spring his trap on Falstaff."
    ],
    "Zitto!": [
        "Hush!",
        [
            {"word": "Zitto", "lemma": "zitto", "pos": "adjective", "meaning": "silent / quiet / hush"},
            {"word": "far silenzio", "lemma": "far silenzio", "pos": "idiom", "meaning": "to keep silent / be quiet"}
        ],
        "Pistola cautions Bardolfo not to speak too loudly and alert Falstaff."
    ],
    "Guarda! Scommetto! Egli va dritto": [
        "Look! I bet! He goes straight",
        [
            {"word": "Guarda", "lemma": "guardare", "pos": "verb", "meaning": "look (imperative 2nd singular)"},
            {"word": "Scommetto", "lemma": "scommettere", "pos": "verb", "meaning": "I bet / wager"},
            {"word": "Egli", "lemma": "egli", "pos": "pronoun", "meaning": "he"},
            {"word": "dritto", "lemma": "dritto", "pos": "adverb", "meaning": "straight"}
        ],
        "Bardolfo eagerly wagers that Falstaff will blunder headlong into the ambush."
    ],
    "nel trabocchetto.": [
        "into the trap.",
        [
            {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "into the"},
            {"word": "trabocchetto", "lemma": "trabocchetto", "pos": "noun", "meaning": "trap / snare / pitfall"}
        ],
        "'Trabocchetto' denotes a pitfall or hidden trapdoor, emphasizing the conspiracy against Falstaff."
    ],
    "Ford se lo intrappola...": [
        "Ford is trapping him...",
        [
            {"word": "Ford", "lemma": "Ford", "pos": "noun", "meaning": "Ford (proper name)"},
            {"word": "se lo", "lemma": "se lo", "pos": "pronoun", "meaning": "him for himself"},
            {"word": "intrappola", "lemma": "intrappolare", "pos": "verb", "meaning": "traps / ensnares"}
        ],
        "Pistola relishes the irony of Ford taking revenge by snaring Falstaff."
    ],
    "Che fate là?": [
        "What are you doing there?",
        [
            {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what"},
            {"word": "fate", "lemma": "fare", "pos": "verb", "meaning": "you do / are doing"},
            {"word": "là", "lemma": "là", "pos": "adverb", "meaning": "there"}
        ],
        "Falstaff hears whispering behind him and gruffly rebukes his followers."
    ],
    "V'ascolto.": [
        "I am listening to you.",
        [
            {"word": "V'ascolto", "lemma": "ascoltare", "pos": "verb", "meaning": "I listen to you (vi + ascolto)"},
            {"word": "ascolto", "lemma": "ascoltare", "pos": "verb", "meaning": "I listen / hear"}
        ],
        "Falstaff turns back to Ford, granting him his complete attention."
    ],
    "Sir John, m'infonde ardire": [
        "Sir John, inspires boldness in me",
        [
            {"word": "Sir", "lemma": "Sir", "pos": "noun", "meaning": "Sir (honorific title)"},
            {"word": "m'infonde", "lemma": "infondere", "pos": "verb", "meaning": "instills in me / inspires in me (mi + infonde)"},
            {"word": "ardire", "lemma": "ardire", "pos": "noun", "meaning": "boldness / courage / daring"}
        ],
        "Ford prefaces his bold proposal with high rhetorical gravity, claiming a proverb encourages him."
    ],
    "un ben noto proverbio popolar: si suol dire": [
        "a well-known popular proverb: it is customary to say",
        [
            {"word": "ben", "lemma": "bene", "pos": "adverb", "meaning": "well"},
            {"word": "noto", "lemma": "noto", "pos": "adjective", "meaning": "known"},
            {"word": "proverbio", "lemma": "proverbio", "pos": "noun", "meaning": "proverb / adage"},
            {"word": "popolar", "lemma": "popolare", "pos": "adjective", "meaning": "popular / folk (apocopic)"},
            {"word": "suol", "lemma": "solere", "pos": "verb", "meaning": "is customary / wont (apocopic of suole)"}
        ],
        "Ford introduces the popular adage praising the irresistible influence of wealth."
    ],
    "che l'oro apre ogni porta, che l'oro è un talismano,": [
        "that gold opens every door, that gold is a talisman,",
        [
            {"word": "oro", "lemma": "oro", "pos": "noun", "meaning": "gold"},
            {"word": "apre", "lemma": "aprire", "pos": "verb", "meaning": "opens"},
            {"word": "ogni", "lemma": "ogni", "pos": "adjective", "meaning": "every / each"},
            {"word": "porta", "lemma": "porta", "pos": "noun", "meaning": "door"},
            {"word": "talismano", "lemma": "talismano", "pos": "noun", "meaning": "talisman / magic charm"}
        ],
        "Ford cites the proverb's hyperbolic claims about gold's supernatural potency to tempt Falstaff."
    ],
    "che l'oro vince tutto.": [
        "that gold conquers all.",
        [
            {"word": "oro", "lemma": "oro", "pos": "noun", "meaning": "gold"},
            {"word": "vince", "lemma": "vincere", "pos": "verb", "meaning": "conquers / wins"},
            {"word": "tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "all / everything"}
        ],
        "The climax of Ford's speech, adapting Virgil's 'omnia vincit amor' to commercial realities: gold conquers all."
    ],
    "L'oro è un buon capitano": [
        "Gold is a good captain",
        [
            {"word": "L'oro", "lemma": "oro", "pos": "noun", "meaning": "gold"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "buon", "lemma": "buono", "pos": "adjective", "meaning": "good (apocopic)"},
            {"word": "capitano", "lemma": "capitano", "pos": "noun", "meaning": "captain / commander"}
        ],
        "Falstaff enthusiastically agrees, borrowing Shakespeare's metaphor of gold as an intrepid military commander."
    ],
    "che marcia avanti.": [
        "that marches forward.",
        [
            {"word": "marcia", "lemma": "marciare", "pos": "verb", "meaning": "marches"},
            {"word": "avanti", "lemma": "avanti", "pos": "adverb", "meaning": "forward / ahead"}
        ],
        "Syntactic conclusion to Falstaff's endorsement: money leads from the front, vanquishing all obstacles."
    ],
    "Ebbene. Ho un sacco di monete": [
        "Well then. I have a bag of coins",
        [
            {"word": "Ebbene", "lemma": "ebbene", "pos": "interjection", "meaning": "well then"},
            {"word": "sacco", "lemma": "sacco", "pos": "noun", "meaning": "bag / sack"},
            {"word": "monete", "lemma": "moneta", "pos": "noun", "meaning": "coins / money"}
        ],
        "Ford seizes on Falstaff's enthusiasm, brandishing his bag of coins to commence the corrupt pact."
    ]
}

# Validation
with open('scripts/falstaff_act2_sc1_partA.json') as f:
    items = json.load(f)

print(f"Loaded {len(items)} items from falstaff_act2_sc1_partA.json")
assert len(items) == 100, f"Expected 100 items, got {len(items)}"

orig_lines = [x['original'] for x in items]
assert len(set(orig_lines)) == 100, "Original lines are not unique!"

missing_keys = [line for line in orig_lines if line not in data]
extra_keys = [k for k in data if k not in set(orig_lines)]

if missing_keys:
    print(f"ERROR: Missing {len(missing_keys)} keys:")
    for k in missing_keys:
        print("  MISSING:", repr(k))

if extra_keys:
    print(f"ERROR: Extra {len(extra_keys)} keys:")
    for k in extra_keys:
        print("  EXTRA:", repr(k))

assert not missing_keys and not extra_keys, "Key mismatch!"

for orig, val in data.items():
    literal, tokens, note = val
    # Check schema
    assert isinstance(literal, str) and len(literal) > 0, f"Invalid literal for {orig}"
    assert isinstance(tokens, list) and 2 <= len(tokens) <= 5, f"Token count {len(tokens)} out of range 2-5 for {orig}"
    assert note is None or (isinstance(note, str) and len(note) > 0), f"Invalid note for {orig}"
    
    # Capitalization rule:
    # "If original begins uppercase, English literal MUST begin uppercase; if lowercase, English literal may begin lowercase."
    if orig[0].isupper():
        assert literal[0].isupper(), f"Literal should start uppercase for: {orig} -> {literal}"
        
    # Check tokens
    for t in tokens:
        assert 'word' in t and 'lemma' in t and 'pos' in t and 'meaning' in t, f"Missing token keys in {t} for {orig}"
        assert t['pos'] in ALLOWED_POS, f"Invalid POS '{t['pos']}' in {t} for {orig}"

print("All validations PASSED!")

with open('scripts/falstaff_curated_a2_sc1_partA.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Saved scripts/falstaff_curated_a2_sc1_partA.json successfully.")

import json

data = {
    "Ehi taverniere!": [
        "Hey innkeeper!",
        [
            {"word": "Ehi", "lemma": "ehi", "pos": "interjection", "meaning": "hey / hey there"},
            {"word": "taverniere", "lemma": "taverniere", "pos": "noun", "meaning": "innkeeper / host"}
        ],
        "Falstaff sits soaked, freezing, and bruised on a bench outside the Garter Inn after being dumped into the Thames; he bellows for the innkeeper to bring relief."
    ],
    "Mondo ladro. Mondo rubaldo.": [
        "Thievish world. Roguish world.",
        [
            {"word": "Mondo", "lemma": "mondo", "pos": "noun", "meaning": "world"},
            {"word": "ladro", "lemma": "ladro", "pos": "adjective", "meaning": "thievish / crooked"},
            {"word": "rubaldo", "lemma": "rubaldo", "pos": "adjective", "meaning": "roguish / villainous / scoundrelly"}
        ],
        "Falstaff vents his indignation against the entire deceitful universe using paired derogatory adjectives."
    ],
    "Reo mondo! Taverniere: un bicchier di vin caldo.": [
        "Wicked world! Innkeeper: a glass of hot wine.",
        [
            {"word": "Reo", "lemma": "reo", "pos": "adjective", "meaning": "wicked / guilty / evil"},
            {"word": "Taverniere", "lemma": "taverniere", "pos": "noun", "meaning": "innkeeper"},
            {"word": "bicchier", "lemma": "bicchiere", "pos": "noun", "meaning": "glass (apocopic form of bicchiere)"},
            {"word": "vin caldo", "lemma": "vino caldo", "pos": "noun", "meaning": "hot wine / mulled wine"}
        ],
        "Falstaff turns instantly from cosmic grievances to physical restorative comfort, demanding hot spiced wine to thaw his chilled body."
    ],
    "Io, dunque, avrò vissuto tanti anni, audace e destro": [
        "Have I, then, lived so many years, a bold and deft",
        [
            {"word": "dunque", "lemma": "dunque", "pos": "conjunction", "meaning": "then / therefore"},
            {"word": "avrò vissuto", "lemma": "vivere", "pos": "verb", "meaning": "have I lived / shall I have lived (future perfect expressing incredulity)"},
            {"word": "audace", "lemma": "audace", "pos": "adjective", "meaning": "bold / daring"},
            {"word": "destro", "lemma": "destro", "pos": "adjective", "meaning": "deft / nimble / dexterous"}
        ],
        "Falstaff uses the future perfect of incredulous indignation ('avrò vissuto... per essere...') looking back over his storied career as a valiant knight."
    ],
    "cavaliere, per essere portato in un canestro": [
        "knight, to be carried in a basket",
        [
            {"word": "cavaliere", "lemma": "cavaliere", "pos": "noun", "meaning": "knight / cavalier"},
            {"word": "portato", "lemma": "portare", "pos": "verb", "meaning": "carried / transported"},
            {"word": "canestro", "lemma": "canestro", "pos": "noun", "meaning": "basket / hamper"}
        ],
        "Falstaff recalls with acute mortification being crammed into a filthy clothes hamper like common rubbish."
    ],
    "e gittato al canale co' pannilini biechi,": [
        "and thrown into the canal with vile dirty linens,",
        [
            {"word": "gittato", "lemma": "gittare", "pos": "verb", "meaning": "thrown / pitched (archaic variant of gettato)"},
            {"word": "canale", "lemma": "canale", "pos": "noun", "meaning": "canal / ditch / watercourse"},
            {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with (poetic truncation of coi / con i)"},
            {"word": "pannilini", "lemma": "pannilino", "pos": "noun", "meaning": "dirty linens / soiled clothes"},
            {"word": "biechi", "lemma": "bieco", "pos": "adjective", "meaning": "vile / sinister / foul"}
        ],
        "Falstaff laments being dumped into the Thames alongside foul, sweat-stained domestic washing."
    ],
    "come si fa coi gatti e i catellini ciechi.": [
        "as one does with cats and blind kittens.",
        [
            {"word": "si fa", "lemma": "fare", "pos": "verb", "meaning": "one does / is done (impersonal reflexive si)"},
            {"word": "gatti", "lemma": "gatto", "pos": "noun", "meaning": "cats"},
            {"word": "catellini", "lemma": "catellino", "pos": "noun", "meaning": "blind pups / newborn kittens (poetic diminutive)"},
            {"word": "ciechi", "lemma": "cieco", "pos": "adjective", "meaning": "blind"}
        ],
        "Borrowing directly from Shakespeare ('drowned like a blind puppy'), Falstaff compares his river plunge to drowning unwanted litter."
    ],
    "Ché se non galleggiava per me quest'epa tronfia,": [
        "For if this swollen paunch had not floated for me,",
        [
            {"word": "Ché", "lemma": "ché", "pos": "conjunction", "meaning": "for / because (truncated perché)"},
            {"word": "galleggiava", "lemma": "galleggiare", "pos": "verb", "meaning": "floated / was buoyant (imperfect indicative in counterfactual conditional)"},
            {"word": "epa", "lemma": "epa", "pos": "noun", "meaning": "belly / paunch (poetic/Dantean term)"},
            {"word": "tronfia", "lemma": "tronfio", "pos": "adjective", "meaning": "swollen / puffed up / proud"}
        ],
        "In a comic tribute to his obesity, Falstaff praises his enormous belly ('epa tronfia') for serving as a life jacket that kept him afloat."
    ],
    "certo affogavo. Brutta morte. L'acqua mi gonfia.": [
        "certainly I would have drowned. Ugly death. Water makes me swell.",
        [
            {"word": "certo", "lemma": "certo", "pos": "adverb", "meaning": "certainly / surely"},
            {"word": "affogavo", "lemma": "affogare", "pos": "verb", "meaning": "I would have drowned (imperfect indicative used for conditional)"},
            {"word": "Brutta", "lemma": "brutto", "pos": "adjective", "meaning": "ugly / hideous / dreadful"},
            {"word": "morte", "lemma": "morte", "pos": "noun", "meaning": "death"},
            {"word": "gonfia", "lemma": "gonfiare", "pos": "verb", "meaning": "swells / bloats"}
        ],
        "Falstaff abhors water; for a dedicated drinker of sack and wine, filling up with river water is the most grotesque death imaginable."
    ],
    "Mondo reo. Non c'è più virtù. Tutto declina.": [
        "Wicked world. There is no more virtue. Everything declines.",
        [
            {"word": "reo", "lemma": "reo", "pos": "adjective", "meaning": "wicked / sinful / guilty"},
            {"word": "Non c'è", "lemma": "non esserci", "pos": "idiom", "meaning": "there is no / there is not"},
            {"word": "virtù", "lemma": "virtù", "pos": "noun", "meaning": "virtue / valor"},
            {"word": "declina", "lemma": "declinare", "pos": "verb", "meaning": "declines / decays / falls"}
        ],
        "Echoing Shakespeare's 'there is nothing but roguery to be found in villainous man', Falstaff bemoans the universal decay of honor."
    ],
    "Va', vecchio John, va', va' per la tua via; cammina": [
        "Go, old John, go, go on your way; walk",
        [
            {"word": "Va'", "lemma": "andare", "pos": "verb", "meaning": "go! (second-person singular imperative of andare)"},
            {"word": "vecchio", "lemma": "vecchio", "pos": "adjective", "meaning": "old"},
            {"word": "via", "lemma": "via", "pos": "noun", "meaning": "way / path"},
            {"word": "cammina", "lemma": "camminare", "pos": "verb", "meaning": "walk! / march! (imperative)"}
        ],
        "Falstaff addresses himself in the third person with tragicomic stoicism, urging his aching frame forward."
    ],
    "finché tu muoia. Allor scomparirà la vera": [
        "until you die. Then shall disappear the true",
        [
            {"word": "finché", "lemma": "finché", "pos": "conjunction", "meaning": "until / as long as"},
            {"word": "muoia", "lemma": "morire", "pos": "verb", "meaning": "you die (present subjunctive of morire)"},
            {"word": "Allor", "lemma": "allora", "pos": "adverb", "meaning": "then / at that time (apocopic form of allora)"},
            {"word": "scomparirà", "lemma": "scomparire", "pos": "verb", "meaning": "will disappear / shall vanish"},
            {"word": "vera", "lemma": "vero", "pos": "adjective", "meaning": "true / genuine"}
        ],
        "Subjunctive 'muoia' after temporal 'finché'; Falstaff sees his eventual death as the extinction of genuine manhood from the earth."
    ],
    "virilità del mondo. Che giornataccia nera!": [
        "manhood of the world. What a black, dreadful day!",
        [
            {"word": "virilità", "lemma": "virilità", "pos": "noun", "meaning": "manhood / virility / masculine strength"},
            {"word": "giornataccia", "lemma": "giornataccia", "pos": "noun", "meaning": "wretched day / dreadful day (pejorative suffix -accia)"},
            {"word": "nera", "lemma": "nero", "pos": "adjective", "meaning": "black / dark / disastrous"}
        ],
        "Falstaff employs the pejorative suffix '-accia' on 'giornata' to underscore the utter disaster of his dunking."
    ],
    "M'aiuti il ciel! Impinguo troppo. Ho dei peli grigi.": [
        "May heaven help me! I am growing too fat. I have gray hairs.",
        [
            {"word": "M'aiuti", "lemma": "aiutare", "pos": "verb", "meaning": "may (heaven) help me (optative present subjunctive with clitic mi)"},
            {"word": "ciel", "lemma": "cielo", "pos": "noun", "meaning": "heaven / sky (apocopic form)"},
            {"word": "Impinguo", "lemma": "impinguare", "pos": "verb", "meaning": "I grow fat / I become obese"},
            {"word": "troppo", "lemma": "troppo", "pos": "adverb", "meaning": "too much / overly"},
            {"word": "grigi", "lemma": "grigio", "pos": "adjective", "meaning": "gray"}
        ],
        "Falstaff confronts his aging body in a moment of pathetic vanity, lamenting expanding fat and graying hairs."
    ],
    "Versiamo un po' di vino nell'acqua del Tamigi!": [
        "Let us pour a little wine into the water of the Thames!",
        [
            {"word": "Versiamo", "lemma": "versare", "pos": "verb", "meaning": "let us pour (first-person plural imperative/hortative)"},
            {"word": "un po'", "lemma": "un po'", "pos": "idiom", "meaning": "a little / a bit"},
            {"word": "vino", "lemma": "vino", "pos": "noun", "meaning": "wine"},
            {"word": "Tamigi", "lemma": "Tamigi", "pos": "noun", "meaning": "Thames (the river Thames)"}
        ],
        "Hortative 'Versiamo'; Falstaff drinks hot wine to blend with and counteract the cold river water inside him."
    ],
    "Buono. Ber del vino dolce e sbottonarsi al sole,": [
        "Good. To drink sweet wine and unbutton oneself in the sun,",
        [
            {"word": "Buono", "lemma": "buono", "pos": "adjective", "meaning": "good / delicious"},
            {"word": "Ber", "lemma": "bere", "pos": "verb", "meaning": "to drink (apocopic infinitive of bere)"},
            {"word": "dolce", "lemma": "dolce", "pos": "adjective", "meaning": "sweet / soothing"},
            {"word": "sbottonarsi", "lemma": "sbottonarsi", "pos": "verb", "meaning": "to unbutton oneself (reflexive infinitive)"},
            {"word": "sole", "lemma": "sole", "pos": "noun", "meaning": "sun / sunshine"}
        ],
        "Falstaff begins his sublime monologue celebrating the restorative, life-giving virtues of wine and warm sunshine."
    ],
    "dolce cosa! Il buon vino sperde le tetre fole": [
        "sweet thing! Good wine scatters the gloomy fables",
        [
            {"word": "dolce", "lemma": "dolce", "pos": "adjective", "meaning": "sweet / delightful"},
            {"word": "sperde", "lemma": "sperdere", "pos": "verb", "meaning": "scatters / disperses (poetic for disperde)"},
            {"word": "tetre", "lemma": "tetro", "pos": "adjective", "meaning": "gloomy / dark / dismal"},
            {"word": "fole", "lemma": "fola", "pos": "noun", "meaning": "idle tales / fantasies / fables"}
        ],
        "Boito employs the literary word 'fole' (foolish or gloomy delusions) to show wine driving off melancholic spirits."
    ],
    "dello sconforto, accende l'occhio e il pensier, dal labbro": [
        "of despondency, lights up the eye and thought, from the lip",
        [
            {"word": "sconforto", "lemma": "sconforto", "pos": "noun", "meaning": "despondency / grief / dejection"},
            {"word": "accende", "lemma": "accendere", "pos": "verb", "meaning": "lights up / kindles / enlivens"},
            {"word": "pensier", "lemma": "pensiero", "pos": "noun", "meaning": "thought / mind (apocopic form)"},
            {"word": "labbro", "lemma": "labbro", "pos": "noun", "meaning": "lip"}
        ],
        "Falstaff charts the physical ascent of wine from the lips through the bloodstream to ignite intellect and vision."
    ],
    "sale al cervel e quivi risveglia il picciol fabbro": [
        "rises to the brain and there awakens the little blacksmith",
        [
            {"word": "sale", "lemma": "salire", "pos": "verb", "meaning": "rises / ascends"},
            {"word": "cervel", "lemma": "cervello", "pos": "noun", "meaning": "brain / mind (apocopic form)"},
            {"word": "quivi", "lemma": "quivi", "pos": "adverb", "meaning": "there / in that place (literary adverb)"},
            {"word": "risveglia", "lemma": "risvegliare", "pos": "verb", "meaning": "reawakens / stirs up"},
            {"word": "fabbro", "lemma": "fabbro", "pos": "noun", "meaning": "blacksmith / smith"}
        ],
        "Literary 'quivi' (there); wine is personified as a busy little blacksmith hammering out joyful tingling sensations in the brain."
    ],
    "dei trilli; un negro grillo che vibra entro l'uom brillo.": [
        "of trills; a black cricket that vibrates inside the tipsy man.",
        [
            {"word": "trilli", "lemma": "trillo", "pos": "noun", "meaning": "trills / vibrations / musical buzzes"},
            {"word": "negro", "lemma": "negro", "pos": "adjective", "meaning": "black / dark (poetic for nero)"},
            {"word": "grillo", "lemma": "grillo", "pos": "noun", "meaning": "cricket / whim / caprice"},
            {"word": "vibra", "lemma": "vibrare", "pos": "verb", "meaning": "vibrates / chirps"},
            {"word": "brillo", "lemma": "brillo", "pos": "adjective", "meaning": "tipsy / mellow"}
        ],
        "Boito's virtuosic internal rhyme scheme ('trilli... grillo... brillo') mimics the pleasant buzzing hum of intoxication."
    ],
    "Trilla ogni fibra in cor, l'allegro etere al trillo": [
        "Every fiber trills in the heart, the merry ether to the trill",
        [
            {"word": "Trilla", "lemma": "trillare", "pos": "verb", "meaning": "trills / quivers / buzzes"},
            {"word": "fibra", "lemma": "fibra", "pos": "noun", "meaning": "fiber / sinew"},
            {"word": "cor", "lemma": "cuore", "pos": "noun", "meaning": "heart (poetic apocope)"},
            {"word": "allegro", "lemma": "allegro", "pos": "adjective", "meaning": "merry / cheerful / joyful"},
            {"word": "etere", "lemma": "etere", "pos": "noun", "meaning": "ether / atmosphere / sky"}
        ],
        "Verdi's orchestra introduces an iconic, shimmering trill that expands from a single instrument to the entire orchestra as Falstaff sings."
    ],
    "guizza e il giocondo globo squilibra una demenza": [
        "darts and the joyful globe unbalances a dementia",
        [
            {"word": "guizza", "lemma": "guizzare", "pos": "verb", "meaning": "darts / flashes / quivers"},
            {"word": "giocondo", "lemma": "giocondo", "pos": "adjective", "meaning": "joyful / jocund / glad"},
            {"word": "globo", "lemma": "globo", "pos": "noun", "meaning": "globe / earth / world"},
            {"word": "squilibra", "lemma": "squilibrare", "pos": "verb", "meaning": "unbalances / deranges"},
            {"word": "demenza", "lemma": "demenza", "pos": "noun", "meaning": "madness / frenzy / dementia"}
        ],
        "Falstaff imagines the entire planet thrown off balance in a cosmic carnival frenzy of wine-induced madness."
    ],
    "trillante! E il trillo invade il mondo!...": [
        "trilling! And the trill invades the world!...",
        [
            {"word": "trillante", "lemma": "trillante", "pos": "adjective", "meaning": "trilling / vibrant / buzzing"},
            {"word": "trillo", "lemma": "trillo", "pos": "noun", "meaning": "trill / vibration"},
            {"word": "invade", "lemma": "invadere", "pos": "verb", "meaning": "invades / permeates / engulfs"},
            {"word": "mondo", "lemma": "mondo", "pos": "noun", "meaning": "world"}
        ],
        "The grand climax of Falstaff's monologue where the orchestral trill reaches full fortissimo, symbolizing universal joy."
    ],
    "Falstaff, mrs. Quickly. Poi nel fondo Alice,": [
        "Falstaff, Mrs. Quickly. Then in the background Alice,",
        [
            {"word": "mrs.", "lemma": "mrs.", "pos": "noun", "meaning": "mistress / Mrs."},
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "fondo", "lemma": "fondo", "pos": "noun", "meaning": "background / rear of stage"},
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper noun)"}
        ],
        "Libretto stage direction marking Falstaff and Quickly downstage while Alice and her confederates creep in upstage."
    ],
    "Nannetta, Meg, mr. Ford, Dr. Cajus e Fenton.": [
        "Nannetta, Meg, Mr. Ford, Dr. Caius and Fenton.",
        [
            {"word": "mr.", "lemma": "mr.", "pos": "noun", "meaning": "Mr. / Mister"},
            {"word": "Dr.", "lemma": "dottore", "pos": "noun", "meaning": "Dr. / Doctor"},
            {"word": "Fenton", "lemma": "Fenton", "pos": "noun", "meaning": "Fenton (proper noun)"},
            {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"}
        ],
        "Libretto character listing indicating the full ensemble of Windsor conspirators watching Falstaff from concealment."
    ],
    "Reverenza.": [
        "Reverence.",
        [
            {"word": "Reverenza", "lemma": "reverenza", "pos": "noun", "meaning": "reverence / curtsy / bow"}
        ],
        "Mrs. Quickly curtsies deeply, repeating her famous formulaic greeting from Act 2 Scene 1, which immediately triggers Falstaff's fury."
    ],
    "La bella Alice...": [
        "Fair Alice...",
        [
            {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "fair / beautiful"},
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper noun)"}
        ],
        "Quickly brings up Alice's name again, testing Falstaff's willingness to listen."
    ],
    "Al diavolo te con Alice bella!": [
        "To the devil with you and fair Alice!",
        [
            {"word": "Al diavolo", "lemma": "al diavolo", "pos": "idiom", "meaning": "to the devil / go to the devil"},
            {"word": "te", "lemma": "tu", "pos": "pronoun", "meaning": "you (accusative/disjunctive)"},
            {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with / and"},
            {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "fair / beautiful (used with bitter irony)"}
        ],
        "Falstaff explodes in wrath, mocking the phrase 'Alice bella' and cursing both women."
    ],
    "Ne ho piene le bisacce! Ne ho piene le budella!": [
        "I have had my saddlebags full of it! I have had my guts full of it!",
        [
            {"word": "Ne", "lemma": "ne", "pos": "pronoun", "meaning": "of it / thereof (partitive clitic)"},
            {"word": "ho piene", "lemma": "avere pieno", "pos": "idiom", "meaning": "I have had full of / I am sick and tired of"},
            {"word": "bisacce", "lemma": "bisaccia", "pos": "noun", "meaning": "saddlebags / knapsacks"},
            {"word": "budella", "lemma": "budello", "pos": "noun", "meaning": "guts / intestines (irregular feminine plural)"}
        ],
        "Partitive clitic 'ne' in the colorful colloquial idiom 'averne piene le bisacce / budella' (to be fed up to the gills); note irregular feminine plural 'budella'."
    ],
    "Voi siete errato...": [
        "You are mistaken...",
        [
            {"word": "siete", "lemma": "essere", "pos": "verb", "meaning": "you are (second-person plural)"},
            {"word": "errato", "lemma": "errare", "pos": "adjective", "meaning": "mistaken / in error"}
        ],
        "Polite plural 'Voi'; Quickly attempts to soothe Falstaff's outrage by feigning total innocence."
    ],
    "Un canchero! Sento ancor le cornate": [
        "A pox on it! I still feel the horn-blows",
        [
            {"word": "canchero", "lemma": "canchero", "pos": "noun", "meaning": "pox / curse / canker (oath)"},
            {"word": "Sento", "lemma": "sentire", "pos": "verb", "meaning": "I feel / I sense"},
            {"word": "ancor", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet (apocopic form)"},
            {"word": "cornate", "lemma": "cornata", "pos": "noun", "meaning": "blows from horns / buttings"}
        ],
        "'Un canchero!' is a vulgar Italian expletive; Falstaff refers to the violent, jealous rampage of Ford."
    ],
    "di quell'irco geloso! Ho ancor l'ossa arrembate": [
        "of that jealous billy-goat! My bones are still battered",
        [
            {"word": "irco", "lemma": "irco", "pos": "noun", "meaning": "billy-goat / he-goat (classical term for becco, symbol of cuckoldry)"},
            {"word": "geloso", "lemma": "geloso", "pos": "adjective", "meaning": "jealous"},
            {"word": "ossa", "lemma": "osso", "pos": "noun", "meaning": "bones (irregular feminine collective plural)"},
            {"word": "arrembate", "lemma": "arrembato", "pos": "adjective", "meaning": "battered / strained / bruised"}
        ],
        "Falstaff insults Ford as an 'irco geloso' (horned goat/cuckold) and complains of bruised bones ('ossa arrembate', with feminine collective plural 'ossa')."
    ],
    "d'esser rimasto curvo, come una buona lama": [
        "from having remained bent double, like a fine blade",
        [
            {"word": "rimasto", "lemma": "rimanere", "pos": "verb", "meaning": "remained / stayed (past participle)"},
            {"word": "curvo", "lemma": "curvo", "pos": "adjective", "meaning": "bent double / bowed"},
            {"word": "buona", "lemma": "buono", "pos": "adjective", "meaning": "fine / high-quality"},
            {"word": "lama", "lemma": "lama", "pos": "noun", "meaning": "blade"}
        ],
        "Directly translating Shakespeare's description of Falstaff crammed into the hamper 'compassed like a good bilbo, hilt to point, heel to head'."
    ],
    "di Bilbao, nello spazio d'un panierin di dama!": [
        "of Bilbao, in the space of a lady's small basket!",
        [
            {"word": "Bilbao", "lemma": "Bilbao", "pos": "noun", "meaning": "Bilbao (Spanish city famed for steel blades)"},
            {"word": "spazio", "lemma": "spazio", "pos": "noun", "meaning": "space"},
            {"word": "panierin", "lemma": "panierino", "pos": "noun", "meaning": "small basket / hamper (diminutive apocope)"},
            {"word": "dama", "lemma": "dama", "pos": "noun", "meaning": "lady / gentlewoman"}
        ],
        "Falstaff contrasts heroic martial imagery (swords of Bilbao) with the humiliating reality of a lady's laundry basket ('panierin di dama')."
    ],
    "Con quel tufo! E quel caldo! Un uom della mia tempra,": [
        "With that stench! And that heat! A man of my temper,",
        [
            {"word": "tufo", "lemma": "tufo", "pos": "noun", "meaning": "stagnant foul stench / stifling vapor"},
            {"word": "caldo", "lemma": "caldo", "pos": "noun", "meaning": "heat / swelter"},
            {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocopic form)"},
            {"word": "tempra", "lemma": "tempra", "pos": "noun", "meaning": "temper / constitution / mettle"}
        ],
        "'Tufo' denotes the suffocating stench of soiled linen; Falstaff sets up a pun on 'tempra' (sword temper / bodily constitution)."
    ],
    "che in uno stillicidio continuo si distempra!": [
        "who in a continuous dripping dissolves!",
        [
            {"word": "stillicidio", "lemma": "stillicidio", "pos": "noun", "meaning": "dripping / continual sweating"},
            {"word": "continuo", "lemma": "continuo", "pos": "adjective", "meaning": "continuous / incessant"},
            {"word": "distempra", "lemma": "distemprarsi", "pos": "verb", "meaning": "dissolves / loses temper / melts (reflexive)"}
        ],
        "Verbal play between metal 'tempra' and sweating 'si distempra' (losing temper / melting away), describing his profuse perspiration in the hamper."
    ],
    "Poi, quando fui ben cotto, rovente, incandescente,": [
        "Then, when I was well cooked, red-hot, incandescent,",
        [
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "cotto", "lemma": "cuocere", "pos": "adjective", "meaning": "cooked / baked"},
            {"word": "rovente", "lemma": "rovente", "pos": "adjective", "meaning": "red-hot / burning"},
            {"word": "incandescente", "lemma": "incandescente", "pos": "adjective", "meaning": "incandescent / glowing hot"}
        ],
        "Falstaff stacks metallurgical adjectives in a dramatic crescendo describing his unbearable overheating."
    ],
    "m'han tuffato nell'acqua. Canaglie!": [
        "they plunged me into the water. Scoundrels!",
        [
            {"word": "m'han tuffato", "lemma": "tuffare", "pos": "verb", "meaning": "they plunged me (clitic mi + truncated hanno + past participle)"},
            {"word": "acqua", "lemma": "acqua", "pos": "noun", "meaning": "water"},
            {"word": "Canaglie", "lemma": "canaglia", "pos": "noun", "meaning": "scoundrels / rascals / villains"}
        ],
        "Like a piece of hot glowing steel quenched in water, Falstaff was dumped into the icy Thames; he curses his tormentors with furious vehemence."
    ],
    "QUICKL": [
        "QUICKL",
        [
            {"word": "QUICKL", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (truncated character heading in libretto source)"}
        ],
        "Libretto speaker label abbreviation representing Mrs. Quickly attempting to speak."
    ],
    "Essa è innocente.": [
        "She is innocent.",
        [
            {"word": "Essa", "lemma": "essa", "pos": "pronoun", "meaning": "she (subject pronoun)"},
            {"word": "innocente", "lemma": "innocente", "pos": "adjective", "meaning": "innocent / guiltless"}
        ],
        "Quickly protests Alice's complete blamelessness in the laundry basket incident."
    ],
    "Prendete abbaglio.": [
        "You are mistaken.",
        [
            {"word": "Prendete", "lemma": "prendere", "pos": "verb", "meaning": "you take / you make (second-person plural)"},
            {"word": "abbaglio", "lemma": "abbaglio", "pos": "noun", "meaning": "mistake / blunder / optical illusion"}
        ],
        "Idiomatic expression 'prendere un abbaglio' (to make a blunder / to be under an illusion); Quickly tells Falstaff he has misjudged Alice."
    ],
    "Vattene!": [
        "Be gone!",
        [
            {"word": "Vattene", "lemma": "andarsene", "pos": "verb", "meaning": "go away! / be gone! (pronominal imperative va' + ti + ne with syntactic doubling)"},
            {"word": "ne", "lemma": "ne", "pos": "particle", "meaning": "away / thence (pronominal clitic particle)"}
        ],
        "Pronominal imperative of 'andarsene' ('va' + ti + ne' -> 'vattene'); Falstaff tries to dismiss Quickly."
    ],
    "La colpa è di quei fanti": [
        "The blame belongs to those servants",
        [
            {"word": "colpa", "lemma": "colpa", "pos": "noun", "meaning": "blame / fault"},
            {"word": "quei", "lemma": "quello", "pos": "adjective", "meaning": "those (demonstrative)"},
            {"word": "fanti", "lemma": "fante", "pos": "noun", "meaning": "servants / knaves / footmen"}
        ],
        "Quickly cunningly blames the servants for throwing the basket into the river prematurely."
    ],
    "malaugurati! Alice piange, urla, invoca i santi.": [
        "ill-starred! Alice weeps, screams, invokes the saints.",
        [
            {"word": "malaugurati", "lemma": "malaugurato", "pos": "adjective", "meaning": "ill-starred / accursed / ill-omened"},
            {"word": "piange", "lemma": "piangere", "pos": "verb", "meaning": "weeps / cries"},
            {"word": "urla", "lemma": "urlare", "pos": "verb", "meaning": "screams / shrieks"},
            {"word": "invoca", "lemma": "invocare", "pos": "verb", "meaning": "invokes / calls upon"},
            {"word": "santi", "lemma": "santo", "pos": "noun", "meaning": "saints"}
        ],
        "Quickly describes Alice's theatrical distress with comedic exaggeration to butter up Falstaff."
    ],
    "Povera donna! V'ama. Leggete.": [
        "Poor woman! She loves you. Read.",
        [
            {"word": "Povera", "lemma": "povero", "pos": "adjective", "meaning": "poor / pitiful"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"},
            {"word": "V'ama", "lemma": "amare", "pos": "verb", "meaning": "she loves you (formal plural clitic vi + ama)"},
            {"word": "Leggete", "lemma": "leggere", "pos": "verb", "meaning": "read! (second-person plural imperative)"}
        ],
        "Quickly hands Falstaff a second love note from Alice, playing the solicitous go-between."
    ],
    "Legge.": [
        "He reads.",
        [
            {"word": "Legge", "lemma": "leggere", "pos": "verb", "meaning": "he reads"}
        ],
        "Alice observes Falstaff unfolding the note from their hiding place."
    ],
    "Vedrai che ci ricasca.": [
        "You will see that he falls for it again.",
        [
            {"word": "Vedrai", "lemma": "vedere", "pos": "verb", "meaning": "you will see (second-person singular future)"},
            {"word": "ci ricasca", "lemma": "ricascare", "pos": "verb", "meaning": "he falls for it again / relapses (clitic ci + ricascare)"}
        ],
        "Colloquial 'ricascarci' (to fall for something again); Nannetta predicts Falstaff will take the bait despite his previous soaking."
    ],
    "L'uom non si corregge.": [
        "Man does not correct himself.",
        [
            {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocopic form)"},
            {"word": "corregge", "lemma": "correggersi", "pos": "verb", "meaning": "corrects himself / amends (reflexive)"}
        ],
        "Alice delivers a cynical maxim on human nature: foolish men never learn from their humiliation."
    ],
    "Nasconditi.": [
        "Hide yourself.",
        [
            {"word": "Nasconditi", "lemma": "nascondersi", "pos": "verb", "meaning": "hide yourself! (reflexive imperative)"}
        ],
        "Meg warns Alice to keep down so Falstaff does not spot them in the background."
    ],
    "Rilegge.": [
        "He reads again.",
        [
            {"word": "Rilegge", "lemma": "rileggere", "pos": "verb", "meaning": "he reads again / rereads"}
        ],
        "Dr. Caius notes that Falstaff is savoring every word of the forged love letter."
    ],
    "Rilegge. L'esca inghiotte.": [
        "He reads again. He swallows the bait.",
        [
            {"word": "Rilegge", "lemma": "rileggere", "pos": "verb", "meaning": "he rereads / reads again"},
            {"word": "esca", "lemma": "esca", "pos": "noun", "meaning": "bait / lure"},
            {"word": "inghiotte", "lemma": "inghiottire", "pos": "verb", "meaning": "swallows / gulps down"}
        ],
        "Ford uses angling imagery ('inghiotte l'esca'): the gullible knight has swallowed their trap completely."
    ],
    "«T'aspetterò nel parco real, a mezzanotte.": [
        "«I shall wait for you in the royal park, at midnight.",
        [
            {"word": "T'aspetterò", "lemma": "aspettare", "pos": "verb", "meaning": "I shall wait for you (clitic ti + future tense)"},
            {"word": "parco real", "lemma": "parco reale", "pos": "noun", "meaning": "royal park (Windsor Great Park)"},
            {"word": "mezzanotte", "lemma": "mezzanotte", "pos": "noun", "meaning": "midnight"}
        ],
        "Falstaff reads Alice's note aloud, establishing the nocturnal rendezvous in Windsor Great Park."
    ],
    "Tu verrai travestito da cacciatore nero": [
        "You will come disguised as the Black Hunter",
        [
            {"word": "verrai", "lemma": "venire", "pos": "verb", "meaning": "you will come (second-person singular future)"},
            {"word": "travestito", "lemma": "travestire", "pos": "adjective", "meaning": "disguised / costumed"},
            {"word": "cacciatore", "lemma": "cacciatore", "pos": "noun", "meaning": "hunter / huntsman"},
            {"word": "nero", "lemma": "nero", "pos": "adjective", "meaning": "black / dark"}
        ],
        "Alice instructs Falstaff to disguise himself as Herne the Hunter (the 'cacciatore nero'), setting up the masquerade prank."
    ],
    "alla quercia di Herne.»": [
        "at Herne's Oak.»",
        [
            {"word": "quercia", "lemma": "quercia", "pos": "noun", "meaning": "oak / oak tree"},
            {"word": "Herne", "lemma": "Herne", "pos": "noun", "meaning": "Herne (legendary hunter of Windsor Forest)"}
        ],
        "Falstaff reads the rendezvous location: the legendary blasted oak tree associated with Herne's ghost."
    ],
    "QUICKLY Amor ama il mistero.": [
        "QUICKLY Love loves mystery.",
        [
            {"word": "QUICKLY", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (character heading)"},
            {"word": "Amor", "lemma": "amore", "pos": "noun", "meaning": "love (poetic apocope)"},
            {"word": "ama", "lemma": "amare", "pos": "verb", "meaning": "loves"},
            {"word": "mistero", "lemma": "mistero", "pos": "noun", "meaning": "mystery / secrecy"}
        ],
        "Quickly justifies the strange masquerade with a romantic adage ('Amor ama il mistero'), appealing to Falstaff's courtly fantasies."
    ],
    "Per rivedervi, Alice si val d'una leggenda": [
        "To see you again, Alice avails herself of a legend",
        [
            {"word": "rivedervi", "lemma": "rivedere", "pos": "verb", "meaning": "to see you again (infinitive + formal plural clitic vi)"},
            {"word": "si val", "lemma": "valersi", "pos": "verb", "meaning": "avails herself / makes use (pronominal valersi, apocopic vale)"},
            {"word": "leggenda", "lemma": "leggenda", "pos": "noun", "meaning": "legend / folk tale"}
        ],
        "Quickly claims that Alice chose the haunted tree because fear of the ghost keeps curious villagers away at midnight."
    ],
    "popolar. Quella quercia è un luogo da tregenda.": [
        "popular. That oak is a place of witches' sabbath.",
        [
            {"word": "popolar", "lemma": "popolare", "pos": "adjective", "meaning": "popular / folk (apocopic form)"},
            {"word": "quercia", "lemma": "quercia", "pos": "noun", "meaning": "oak tree"},
            {"word": "luogo", "lemma": "luogo", "pos": "noun", "meaning": "place / spot"},
            {"word": "tregenda", "lemma": "tregenda", "pos": "noun", "meaning": "witches' sabbath / nocturnal revel / spooky haunt"}
        ],
        "'Tregenda' is an expressive word for a demonic midnight gathering; Quickly builds supernatural dread to make the ruse plausible."
    ],
    "Il cacciatore nero s'è impeso ad un suo ramo.": [
        "The Black Hunter hanged himself from one of its branches.",
        [
            {"word": "cacciatore nero", "lemma": "cacciatore nero", "pos": "noun", "meaning": "Black Hunter / Herne the Hunter"},
            {"word": "s'è impeso", "lemma": "impendersi", "pos": "verb", "meaning": "hanged himself (reflexive past with archaic participle impeso)"},
            {"word": "ramo", "lemma": "ramo", "pos": "noun", "meaning": "branch / bough"}
        ],
        "Quickly recounts the English folk legend of Herne the Hunter hanging himself from an oak in Windsor Forest."
    ],
    "V'ha chi crede vederlo ricomparir...": [
        "There are those who believe they see him reappear...",
        [
            {"word": "V'ha", "lemma": "avere", "pos": "verb", "meaning": "there is / there are (literary existential construction vi + ha)"},
            {"word": "crede", "lemma": "credere", "pos": "verb", "meaning": "believes / thinks"},
            {"word": "vederlo", "lemma": "vedere", "pos": "verb", "meaning": "to see him (infinitive + direct object clitic lo)"},
            {"word": "ricomparir", "lemma": "ricomparire", "pos": "verb", "meaning": "to reappear / haunt again (apocopic infinitive)"}
        ],
        "Literary 'V'ha chi' (equivalent to 'c'è chi'); Quickly trails off mysteriously, creating an eerie atmosphere."
    ],
    "Entriamo.": [
        "Let us go inside.",
        [
            {"word": "Entriamo", "lemma": "entrare", "pos": "verb", "meaning": "let us enter / let us go in (first-person plural imperative)"}
        ],
        "Hooked by the tale and eager to discuss the assignation in private, Falstaff invites Quickly into the inn."
    ],
    "Là si discorre meglio. Narrami la tua frasca.": [
        "There one speaks better. Tell me your idle tale.",
        [
            {"word": "Là", "lemma": "là", "pos": "adverb", "meaning": "there / inside there"},
            {"word": "si discorre", "lemma": "discorrere", "pos": "verb", "meaning": "one discusses / one speaks (impersonal reflexive si)"},
            {"word": "meglio", "lemma": "meglio", "pos": "adverb", "meaning": "better"},
            {"word": "Narrami", "lemma": "narrare", "pos": "verb", "meaning": "tell me! / narrate to me! (imperative with clitic mi)"},
            {"word": "frasca", "lemma": "frasca", "pos": "noun", "meaning": "idle tale / silly gossip / frivolous story"}
        ],
        "'Frasca' literally means a leafy bough, but idiomatically signifies a frivolous story or gossip; Falstaff wants to hear all the details."
    ],
    "Quando il rintocco della mezzanotte...": [
        "When the chime of midnight...",
        [
            {"word": "Quando", "lemma": "quando", "pos": "conjunction", "meaning": "when"},
            {"word": "rintocco", "lemma": "rintocco", "pos": "noun", "meaning": "chime / stroke of a bell / tolling"},
            {"word": "mezzanotte", "lemma": "mezzanotte", "pos": "noun", "meaning": "midnight"}
        ],
        "Quickly begins her narrative as they walk into the inn, which Alice will immediately parody outside."
    ],
    "Alice, Meg, Nannetta, mr. Ford, Dr. Cajus, Fenton. Poi mrs. Quickly.": [
        "Alice, Meg, Nannetta, Mr. Ford, Dr. Caius, Fenton. Then Mrs. Quickly.",
        [
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "mr.", "lemma": "mr.", "pos": "noun", "meaning": "Mr."},
            {"word": "Dr.", "lemma": "dottore", "pos": "noun", "meaning": "Dr."}
        ],
        "Libretto stage heading marking the full ensemble gathering at center stage after Falstaff exits."
    ],
    "Ci casca.": [
        "He falls for it.",
        [
            {"word": "Ci casca", "lemma": "cascarci", "pos": "verb", "meaning": "he falls into it / he takes the bait (idiomatic verb with clitic ci)"}
        ],
        "Ford gleefully observes that Falstaff has walked straight into their woodland trap."
    ],
    "Quando il rintocco della mezzanotte": [
        "When the chime of midnight",
        [
            {"word": "Quando", "lemma": "quando", "pos": "conjunction", "meaning": "when"},
            {"word": "rintocco", "lemma": "rintocco", "pos": "noun", "meaning": "chime / tolling of a bell"},
            {"word": "mezzanotte", "lemma": "mezzanotte", "pos": "noun", "meaning": "midnight"}
        ],
        "Alice begins her mock-gothic ballad recounting the ghost legend of the Black Hunter to the conspirators."
    ],
    "cupo si sparge nel silente orror,": [
        "gloomily spreads in the silent horror,",
        [
            {"word": "cupo", "lemma": "cupo", "pos": "adverb", "meaning": "gloomily / somberly / hollowly (adjective used adverbially)"},
            {"word": "si sparge", "lemma": "spargersi", "pos": "verb", "meaning": "spreads / echoes / diffuses (reflexive)"},
            {"word": "silente", "lemma": "silente", "pos": "adjective", "meaning": "silent / hushed (poetic)"},
            {"word": "orror", "lemma": "orrore", "pos": "noun", "meaning": "horror / dread / gloom (poetic apocope)"}
        ],
        "Boito evokes the hollow resonance of the church bell through the terrifying midnight silence."
    ],
    "sorgon gli spirti vagabondi a frotte": [
        "wandering spirits rise in throngs",
        [
            {"word": "sorgon", "lemma": "sorgere", "pos": "verb", "meaning": "they rise / spring forth (apocopic third-person plural)"},
            {"word": "spirti", "lemma": "spirto", "pos": "noun", "meaning": "spirits / ghosts (poetic syncope for spiriti)"},
            {"word": "vagabondi", "lemma": "vagabondo", "pos": "adjective", "meaning": "wandering / roaming"},
            {"word": "a frotte", "lemma": "a frotte", "pos": "idiom", "meaning": "in crowds / in swarms / in throngs"}
        ],
        "Poetic syncope 'spirti' and idiom 'a frotte'; restless specters swarm out into Windsor Forest."
    ],
    "e vien nel parco il nero cacciator.": [
        "and into the park comes the Black Hunter.",
        [
            {"word": "vien", "lemma": "venire", "pos": "verb", "meaning": "comes (apocopic form of viene)"},
            {"word": "parco", "lemma": "parco", "pos": "noun", "meaning": "park (Windsor Great Park)"},
            {"word": "nero", "lemma": "nero", "pos": "adjective", "meaning": "black / sinister"},
            {"word": "cacciator", "lemma": "cacciatore", "pos": "noun", "meaning": "hunter / huntsman (apocopic form)"}
        ],
        "Inversion of subject and verb ('e vien... il nero cacciator') highlighting the dramatic arrival of the spectral huntsman."
    ],
    "Egli cammina lento, lento, lento,": [
        "He walks slow, slow, slow,",
        [
            {"word": "Egli", "lemma": "egli", "pos": "pronoun", "meaning": "he (literary subject pronoun)"},
            {"word": "cammina", "lemma": "camminare", "pos": "verb", "meaning": "walks / steps"},
            {"word": "lento", "lemma": "lento", "pos": "adverb", "meaning": "slowly / slow (adjective used adverbially with threefold repetition)"}
        ],
        "The threefold repetition of 'lento' mimics the heavy, dragging footsteps of a ghost rising from the grave."
    ],
    "nel gran letargo della sepoltura.": [
        "in the great lethargy of the grave.",
        [
            {"word": "gran", "lemma": "grande", "pos": "adjective", "meaning": "great / vast (apocopic form)"},
            {"word": "letargo", "lemma": "letargo", "pos": "noun", "meaning": "lethargy / deep trance / stupor"},
            {"word": "sepoltura", "lemma": "sepoltura", "pos": "noun", "meaning": "burial / tomb / grave"}
        ],
        "Alice evokes the heavy, supernatural slumber of death from which the hunter is temporarily released."
    ],
    "S'avanza livido...": [
        "He advances livid...",
        [
            {"word": "S'avanza", "lemma": "avanzarsi", "pos": "verb", "meaning": "he advances / moves forward (reflexive)"},
            {"word": "livido", "lemma": "livido", "pos": "adjective", "meaning": "livid / corpse-pale / leaden"}
        ],
        "'Livido' paints the pale, bluish skin of the revenant; Alice deliberately terrifies Nannetta and Meg."
    ],
    "Oh! Che spavento!": [
        "Oh! What a fright!",
        [
            {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh!"},
            {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what a (exclamative determiner)"},
            {"word": "spavento", "lemma": "spavento", "pos": "noun", "meaning": "fright / scare / terror"}
        ],
        "Nannetta shivers in mock terror at her mother's eerie storytelling."
    ],
    "Già sento il brivido della paura!": [
        "Already I feel the shiver of fear!",
        [
            {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
            {"word": "sento", "lemma": "sentire", "pos": "verb", "meaning": "I feel / I sense"},
            {"word": "brivido", "lemma": "brivido", "pos": "noun", "meaning": "shiver / chill / shudder"},
            {"word": "paura", "lemma": "paura", "pos": "noun", "meaning": "fear / dread"}
        ],
        "Meg plays along with mock shuddering, fueling the gothic theatricality of the scene."
    ],
    "Fandonie che ai bamboli": [
        "Fables that to children",
        [
            {"word": "Fandonie", "lemma": "fandonia", "pos": "noun", "meaning": "fables / tall tales / fairy stories / nonsense"},
            {"word": "bamboli", "lemma": "bambolo", "pos": "noun", "meaning": "children / babies / toddlers"}
        ],
        "Alice shifts tone abruptly, laughing off the ghost legend as mere nursemaid nonsense ('fandonie')."
    ],
    "raccontan le nonne": [
        "grandmothers tell",
        [
            {"word": "raccontan", "lemma": "raccontare", "pos": "verb", "meaning": "they tell / narrate (apocopic third-person plural)"},
            {"word": "nonne", "lemma": "nonna", "pos": "noun", "meaning": "grandmothers"}
        ],
        "Alice describes how grandmothers pass down these supernatural bugbear tales."
    ],
    "con lunghi preamboli,": [
        "with long preambles,",
        [
            {"word": "lunghi", "lemma": "lungo", "pos": "adjective", "meaning": "long"},
            {"word": "preamboli", "lemma": "preambolo", "pos": "noun", "meaning": "preambles / introductions / winding buildups"}
        ],
        "Describing the slow, theatrical storytelling technique grandmothers use to heighten suspense."
    ],
    "per farli dormir.": [
        "to make them sleep.",
        [
            {"word": "farli", "lemma": "fare", "pos": "verb", "meaning": "to make them (causative fare + clitic li)"},
            {"word": "dormir", "lemma": "dormire", "pos": "verb", "meaning": "sleep (apocopic infinitive)"}
        ],
        "Causative construction 'farli dormir' (make them fall asleep); the ghost story is just a bedtime lullaby."
    ],
    "Vendetta di donne": [
        "Vengeance of women",
        [
            {"word": "Vendetta", "lemma": "vendetta", "pos": "noun", "meaning": "vengeance / revenge"},
            {"word": "donne", "lemma": "donna", "pos": "noun", "meaning": "women"}
        ],
        "The women sing in unison, declaring their shared resolve to punish Falstaff's insolence."
    ],
    "non deve fallir.": [
        "must not fail.",
        [
            {"word": "deve", "lemma": "dovere", "pos": "verb", "meaning": "must / ought to"},
            {"word": "fallir", "lemma": "fallire", "pos": "verb", "meaning": "fail / miss (apocopic infinitive)"}
        ],
        "Modal verb 'deve' with apocopic infinitive 'fallir'; their comedic retribution is guaranteed to succeed."
    ],
    "S'avanza livido e il passo converge": [
        "He advances livid and his step converges",
        [
            {"word": "passo", "lemma": "passo", "pos": "noun", "meaning": "step / stride / tread"},
            {"word": "converge", "lemma": "convergere", "pos": "verb", "meaning": "converges / heads toward"}
        ],
        "Alice resumes her dramatic ballad, tracing the phantom hunter as he marches toward his oak tree."
    ],
    "al tronco ove esalò l'anima prava.": [
        "at the trunk where he breathed his wicked soul.",
        [
            {"word": "tronco", "lemma": "tronco", "pos": "noun", "meaning": "trunk / tree trunk"},
            {"word": "ove", "lemma": "ove", "pos": "adverb", "meaning": "where (literary/archaic for dove)"},
            {"word": "esalò", "lemma": "esalare", "pos": "verb", "meaning": "he exhaled / breathed out (passato remoto)"},
            {"word": "anima", "lemma": "anima", "pos": "noun", "meaning": "soul / spirit"},
            {"word": "prava", "lemma": "pravo", "pos": "adjective", "meaning": "wicked / depraved / evil (literary)"}
        ],
        "Literary 'ove' and 'esalò l'anima prava' (breathed out his depraved soul); Dantean elevated language for Herne's suicide."
    ],
    "Sbucan le fate. Sulla fronte egli erge": [
        "The fairies pop out. On his forehead he erects",
        [
            {"word": "Sbucan", "lemma": "sbucare", "pos": "verb", "meaning": "they pop out / emerge suddenly (apocopic)"},
            {"word": "fate", "lemma": "fata", "pos": "noun", "meaning": "fairies"},
            {"word": "fronte", "lemma": "fronte", "pos": "noun", "meaning": "forehead / brow"},
            {"word": "erge", "lemma": "ergere", "pos": "verb", "meaning": "he raises / erects / rears up"}
        ],
        "Alice introduces the supernatural fairies and the massive stag antlers worn by the hunter."
    ],
    "due corna lunghe, lunghe, lunghe...": [
        "two horns long, long, long...",
        [
            {"word": "corna", "lemma": "corno", "pos": "noun", "meaning": "horns / antlers (irregular feminine plural)"},
            {"word": "lunghe", "lemma": "lungo", "pos": "adjective", "meaning": "long (feminine plural)"}
        ],
        "Irregular feminine plural 'corna'; Alice repeats 'lunghe' with mischievous emphasis, glancing meaningfully at her husband Ford."
    ],
    "Brava.": [
        "Splendid.",
        [
            {"word": "Brava", "lemma": "bravo", "pos": "interjection", "meaning": "bravo! / well done! / splendid! (feminine singular)"}
        ],
        "Ford applauds Alice's narrative talent, though he feels the stinging barb of her horn jokes."
    ],
    "Quelle corna saranno la mia gioia!": [
        "Those horns will be my joy!",
        [
            {"word": "Quelle", "lemma": "quello", "pos": "adjective", "meaning": "those"},
            {"word": "corna", "lemma": "corno", "pos": "noun", "meaning": "horns (irregular feminine plural)"},
            {"word": "saranno", "lemma": "essere", "pos": "verb", "meaning": "will be (third-person plural future)"},
            {"word": "gioia", "lemma": "gioia", "pos": "noun", "meaning": "joy / delight"}
        ],
        "Ford relishes the irony: after dreading cuckold's horns himself, he will now see Falstaff crowned with humiliating stag antlers."
    ],
    "Bada! tu pur ti meriti": [
        "Mind you! you also deserve",
        [
            {"word": "Bada", "lemma": "badare", "pos": "verb", "meaning": "mind! / pay attention! (imperative)"},
            {"word": "pur", "lemma": "pure", "pos": "adverb", "meaning": "also / too (apocopic form of pure)"},
            {"word": "meriti", "lemma": "meritarsi", "pos": "verb", "meaning": "you deserve / you have earned (reflexive)"}
        ],
        "Alice reminds Ford that his insane jealousy and violent home invasion deserve punishment as well."
    ],
    "qualche castigatoia!": [
        "some punishment!",
        [
            {"word": "qualche", "lemma": "qualche", "pos": "adjective", "meaning": "some / a certain"},
            {"word": "castigatoia", "lemma": "castigatoia", "pos": "noun", "meaning": "punishment / chastisement / lesson (archaic/humorous)"}
        ],
        "The rare and playful term 'castigatoia' denotes a comedic reprimand or lesson."
    ],
    "Perdona. Riconosco i miei demeriti.": [
        "Forgive me. I recognize my demerits.",
        [
            {"word": "Perdona", "lemma": "perdonare", "pos": "verb", "meaning": "forgive! (imperative)"},
            {"word": "Riconosco", "lemma": "riconoscere", "pos": "verb", "meaning": "I recognize / I acknowledge"},
            {"word": "demeriti", "lemma": "demerito", "pos": "noun", "meaning": "demerits / faults / shortcomings"}
        ],
        "Ford humbles himself completely before Alice, begging forgiveness for his unwarranted suspicion."
    ],
    "Ma guai se ancor ti coglie": [
        "But woe if there still catches you",
        [
            {"word": "guai", "lemma": "guaio", "pos": "interjection", "meaning": "woe! / beware!"},
            {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
            {"word": "ancor", "lemma": "ancora", "pos": "adverb", "meaning": "still / again (apocopic form)"},
            {"word": "coglie", "lemma": "cogliere", "pos": "verb", "meaning": "catches / seizes / strikes"}
        ],
        "Formulaic warning 'Ma guai se...' (woe to you if...); Alice sets a strict condition for domestic peace."
    ],
    "quella mania feroce": [
        "that ferocious mania",
        [
            {"word": "mania", "lemma": "mania", "pos": "noun", "meaning": "mania / obsession / craze"},
            {"word": "feroce", "lemma": "feroce", "pos": "adjective", "meaning": "ferocious / savage / wild"}
        ],
        "Alice terms Ford's obsessive jealousy a 'mania feroce' that nearly ruined their household."
    ],
    "di cercar dentro il guscio d'una noce": [
        "of searching inside the shell of a walnut",
        [
            {"word": "cercar", "lemma": "cercare", "pos": "verb", "meaning": "to search / look for (apocopic infinitive)"},
            {"word": "dentro", "lemma": "dentro", "pos": "preposition", "meaning": "inside / within"},
            {"word": "guscio", "lemma": "guscio", "pos": "noun", "meaning": "shell / nutshell"},
            {"word": "noce", "lemma": "noce", "pos": "noun", "meaning": "walnut / nut"}
        ],
        "Proverbial Italian hyperbole 'cercare nel guscio d'una noce' (looking in a nutshell), mocking Ford's frantic searching of tiny boxes and corners for a hidden lover."
    ],
    "l'amante di tua moglie.": [
        "your wife's lover.",
        [
            {"word": "amante", "lemma": "amante", "pos": "noun", "meaning": "lover"},
            {"word": "moglie", "lemma": "moglie", "pos": "noun", "meaning": "wife"}
        ],
        "Alice teases Ford about his irrational conviction that she was entertaining an illicit paramour."
    ],
    "Ma il tempo stringe e vuol fantasia lesta.": [
        "But time presses and requires quick imagination.",
        [
            {"word": "tempo", "lemma": "tempo", "pos": "noun", "meaning": "time"},
            {"word": "stringe", "lemma": "stringere", "pos": "verb", "meaning": "presses / is short / tightens"},
            {"word": "vuol", "lemma": "volere", "pos": "verb", "meaning": "requires / wants (apocopic form of vuole)"},
            {"word": "fantasia", "lemma": "fantasia", "pos": "noun", "meaning": "imagination / fantasy"},
            {"word": "lesta", "lemma": "lesto", "pos": "adjective", "meaning": "quick / nimble / agile"}
        ],
        "Idiomatic 'il tempo stringe' (time is running short); Alice urges everyone to quickly finalize their woodland masquerade."
    ],
    "Affrettiam.": [
        "Let us make haste.",
        [
            {"word": "Affrettiam", "lemma": "affrettare", "pos": "verb", "meaning": "let us hasten / hurry (apocopic first-person plural imperative)"}
        ],
        "Hortative imperative with poetic apocope ('affrettiam' for 'affrettiamo'); Meg seconds the call for speed."
    ],
    "Concertiam la mascherata.": [
        "Let us organize the masquerade.",
        [
            {"word": "Concertiam", "lemma": "concertare", "pos": "verb", "meaning": "let us arrange / plan / orchestrate (apocopic imperative)"},
            {"word": "mascherata", "lemma": "mascherata", "pos": "noun", "meaning": "masquerade / masked revel"}
        ],
        "'Concertare' signifies organizing or choreographing a performance; Fenton joins the preparations enthusiastically."
    ],
    "Nannetta!": [
        "Nannetta!",
        [
            {"word": "Nannetta", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper noun)"}
        ],
        "Alice calls her daughter forward to assign her the leading part in the fairy pageant."
    ],
    "Eccola qua!": [
        "Here she is!",
        [
            {"word": "Eccola", "lemma": "ecco", "pos": "idiom", "meaning": "here she is (presentative adverb ecco + direct object clitic la)"},
            {"word": "qua", "lemma": "qua", "pos": "adverb", "meaning": "here"}
        ],
        "Nannetta steps up merrily in the third person ('Eccola qua!')."
    ],
    "Sarai la fata": [
        "You will be the fairy",
        [
            {"word": "Sarai", "lemma": "essere", "pos": "verb", "meaning": "you will be (second-person singular future)"},
            {"word": "fata", "lemma": "fata", "pos": "noun", "meaning": "fairy"}
        ],
        "Future of role assignment ('sarai'); Alice casts Nannetta as the fairy protagonist."
    ],
    "regina delle fate, in bianca veste": [
        "queen of the fairies, in white garment",
        [
            {"word": "regina", "lemma": "regina", "pos": "noun", "meaning": "queen"},
            {"word": "fate", "lemma": "fata", "pos": "noun", "meaning": "fairies"},
            {"word": "bianca", "lemma": "bianco", "pos": "adjective", "meaning": "white"},
            {"word": "veste", "lemma": "veste", "pos": "noun", "meaning": "garment / robe / gown"}
        ],
        "Alice describes Nannetta's costume as Fairy Queen: pure white robes, details Dr. Caius will overhear."
    ],
    "chiusa in candido vel, cinta di rose.": [
        "enclosed in a snowy veil, girdled with roses.",
        [
            {"word": "chiusa", "lemma": "chiudere", "pos": "adjective", "meaning": "enclosed / wrapped / draped"},
            {"word": "candido", "lemma": "candido", "pos": "adjective", "meaning": "pure white / snowy / candid"},
            {"word": "vel", "lemma": "velo", "pos": "noun", "meaning": "veil (apocopic form)"},
            {"word": "cinta", "lemma": "cingere", "pos": "adjective", "meaning": "girdled / crowned / bound"},
            {"word": "rose", "lemma": "rosa", "pos": "noun", "meaning": "roses"}
        ],
        "Past participles used adjectivally ('chiusa', 'cinta'); these distinctive costume markers will become the focal point of the marriage intrigue."
    ],
    "E canterò parole armoniose.": [
        "And I shall sing harmonious words.",
        [
            {"word": "canterò", "lemma": "cantare", "pos": "verb", "meaning": "I shall sing (first-person singular future)"},
            {"word": "parole", "lemma": "parola", "pos": "noun", "meaning": "words"},
            {"word": "armoniose", "lemma": "armonioso", "pos": "adjective", "meaning": "harmonious / melodious"}
        ],
        "Nannetta eagerly promises to perform her ethereal fairy song ('Sul fil d'un soffio etesio') in the park."
    ],
    "Tu la verde sarai ninfa silvana,": [
        "You will be the green woodland nymph,",
        [
            {"word": "verde", "lemma": "verde", "pos": "adjective", "meaning": "green"},
            {"word": "ninfa", "lemma": "ninfa", "pos": "noun", "meaning": "nymph"},
            {"word": "silvana", "lemma": "silvano", "pos": "adjective", "meaning": "woodland / sylvan"}
        ],
        "Alice assigns Meg Page the part of the green sylvan nymph."
    ],
    "e la comare Quickly una befana.": [
        "and gossip Quickly an old witch.",
        [
            {"word": "comare", "lemma": "comare", "pos": "noun", "meaning": "gossip / crony / godmother"},
            {"word": "Quickly", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (proper noun)"},
            {"word": "befana", "lemma": "befana", "pos": "noun", "meaning": "witch / hag / Befana (folklore figure)"}
        ],
        "Alice humorously assigns Mrs. Quickly the role of an old witch ('befana'), playing on her comical demeanor."
    ],
    "Scende la sera, la scena si oscura.": [
        "Evening falls, the scene grows dark.",
        [
            {"word": "Scende", "lemma": "scendere", "pos": "verb", "meaning": "descends / falls"},
            {"word": "sera", "lemma": "sera", "pos": "noun", "meaning": "evening / nightfall"},
            {"word": "scena", "lemma": "scena", "pos": "noun", "meaning": "scene / stage"},
            {"word": "si oscura", "lemma": "oscurarsi", "pos": "verb", "meaning": "grows dark / darkens (reflexive)"}
        ],
        "Alice notes nightfall descending on Windsor, signaling that their deadline has arrived."
    ],
    "A meraviglia!": [
        "Wonderfully!",
        [
            {"word": "A meraviglia", "lemma": "a meraviglia", "pos": "idiom", "meaning": "wonderfully / marvelously / to perfection"},
            {"word": "meraviglia", "lemma": "meraviglia", "pos": "noun", "meaning": "marvel / wonder"}
        ],
        "Idiomatic exclamation 'A meraviglia!' expressing enthusiastic delight with the masquerade plan."
    ],
    "Avrò con me dei putti": [
        "I shall have with me some boys",
        [
            {"word": "Avrò", "lemma": "avere", "pos": "verb", "meaning": "I shall have (first-person singular future)"},
            {"word": "con me", "lemma": "con me", "pos": "preposition", "meaning": "with me"},
            {"word": "dei", "lemma": "di", "pos": "preposition", "meaning": "some (partitive preposition di + i)"},
            {"word": "putti", "lemma": "putto", "pos": "noun", "meaning": "boys / lads / cherubs"}
        ],
        "'Putti' refers to the neighborhood boys recruited to masquerade as the mischievous woodland spirits."
    ],
    "che fingeran folletti,": [
        "who will pretend to be goblins,",
        [
            {"word": "fingeran", "lemma": "fingere", "pos": "verb", "meaning": "they will feign / pretend to be (apocopic future of fingere)"},
            {"word": "folletti", "lemma": "folletto", "pos": "noun", "meaning": "goblins / elves / imps"}
        ],
        "Apocopic future 'fingeran'; Alice outlines the roles the children will enact to harass Falstaff."
    ],
    "e spiritelli,": [
        "and sprites,",
        [
            {"word": "spiritelli", "lemma": "spiritello", "pos": "noun", "meaning": "sprites / little spirits (diminutive of spirito)"}
        ],
        "Diminutive 'spiritelli' evoking delicate, darting spirits of the forest."
    ],
    "e diavoletti,": [
        "and little devils,",
        [
            {"word": "diavoletti", "lemma": "diavoletto", "pos": "noun", "meaning": "little devils / imps (diminutive of diavolo)"}
        ],
        "Playful diminutive 'diavoletti' continuing Alice's rhyming inventory of mythical tormentors."
    ],
    "e pipistrelli,": [
        "and bats,",
        [
            {"word": "pipistrelli", "lemma": "pipistrello", "pos": "noun", "meaning": "bats"}
        ],
        "Children disguised in fluttering dark wings as bats to swoop around Falstaff in the gloom."
    ],
    "e farfarelli.": [
        "and mischievous imps.",
        [
            {"word": "farfarelli", "lemma": "farfarello", "pos": "noun", "meaning": "mischievous imps / little demons (Dantean demon name)"}
        ],
        "'Farfarello' is a famous imp from Dante's Malebolge in Inferno, used here playfully for masked imps."
    ],
    "Su Falstaff camuffato in manto e corni": [
        "Upon Falstaff disguised in cloak and horns",
        [
            {"word": "camuffato", "lemma": "camuffare", "pos": "adjective", "meaning": "disguised / camouflaged"},
            {"word": "manto", "lemma": "manto", "pos": "noun", "meaning": "mantle / cloak"},
            {"word": "corni", "lemma": "corno", "pos": "noun", "meaning": "horns (masculine plural chosen for rhyme with raggiorni)"}
        ],
        "Boito selects masculine plural 'corni' (rather than irregular feminine 'corna') to rhyme with 'raggiorni'."
    ],
    "ci scaglieremo tutti": [
        "we shall all fling ourselves",
        [
            {"word": "ci scaglieremo", "lemma": "scagliarsi", "pos": "verb", "meaning": "we shall fling ourselves / pounce (first-person plural future reflexive)"},
            {"word": "tutti", "lemma": "tutto", "pos": "pronoun", "meaning": "all / everyone"}
        ],
        "Reflexive future 'ci scaglieremo'; Alice describes the sudden collective woodland ambush."
    ],
    "e lo tempesteremo": [
        "and we shall barrage him",
        [
            {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
            {"word": "tempesteremo", "lemma": "tempestare", "pos": "verb", "meaning": "we shall barrage / pelt / storm upon (future)"}
        ],
        "'Tempestare' portrays a ceaseless hailstorm of pinches, pokes, and jeers aimed at the fat knight."
    ],
    "finch'abbia confessata": [
        "until he has confessed",
        [
            {"word": "finch'", "lemma": "finché", "pos": "conjunction", "meaning": "until (elided form of finché)"},
            {"word": "abbia confessata", "lemma": "confessare", "pos": "verb", "meaning": "he has confessed (past subjunctive with past participle agreement)"}
        ],
        "Temporal clause taking past subjunctive 'abbia confessata', with traditional agreement with feminine direct object 'perversità'."
    ],
    "la sua perversità.": [
        "his perversity.",
        [
            {"word": "sua", "lemma": "suo", "pos": "adjective", "meaning": "his"},
            {"word": "perversità", "lemma": "perversità", "pos": "noun", "meaning": "perversity / wicked lust / rogue behavior"}
        ],
        "Alice names Falstaff's comical offense: his brazen attempt to seduce respectable married matrons."
    ],
    "Poi ci smaschereremo": [
        "Then we shall unmask ourselves",
        [
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "ci smaschereremo", "lemma": "smascherarsi", "pos": "verb", "meaning": "we shall unmask ourselves (future reflexive)"}
        ],
        "The public revelation at the conclusion of the prank, revealing the conspirators' true identities."
    ],
    "e, pria che il ciel raggiorni,": [
        "and, before the sky dawns again,",
        [
            {"word": "pria", "lemma": "prima", "pos": "adverb", "meaning": "before / earlier (poetic/archaic for prima)"},
            {"word": "ciel", "lemma": "cielo", "pos": "noun", "meaning": "sky / heaven (apocopic form)"},
            {"word": "raggiorni", "lemma": "raggiornare", "pos": "verb", "meaning": "dawns again / becomes day again (impersonal subjunctive)"}
        ],
        "Poetic 'pria che' followed by present subjunctive 'raggiorni' (impersonal verb for daybreak)."
    ],
    "la giuliva brigata": [
        "the merry band",
        [
            {"word": "giuliva", "lemma": "giulivo", "pos": "adjective", "meaning": "merry / joyful / jubilant"},
            {"word": "brigata", "lemma": "brigata", "pos": "noun", "meaning": "band / company / merry troop"}
        ],
        "'Giuliva brigata' echoes Boccaccio's Decameron, framing the townspeople as a cheerful community of tricksters."
    ],
    "se ne ritornerà.": [
        "shall take itself back.",
        [
            {"word": "se ne ritornerà", "lemma": "ritornarsene", "pos": "verb", "meaning": "shall return / go back home (pronominal verb ritornarsene with clitics si + ne)"}
        ],
        "Pronominal reflexive 'ritornarsene' emphasizing a cheerful, satisfying journey back home before dawn."
    ],
    "MEG Vien sera. Rincasiam.": [
        "MEG Evening comes. Let us go home.",
        [
            {"word": "MEG", "lemma": "Meg", "pos": "noun", "meaning": "Meg (character heading)"},
            {"word": "Vien", "lemma": "venire", "pos": "verb", "meaning": "comes / approaches (apocopic form of viene)"},
            {"word": "sera", "lemma": "sera", "pos": "noun", "meaning": "evening"},
            {"word": "Rincasiam", "lemma": "rincasare", "pos": "verb", "meaning": "let us go home (apocopic first-person plural imperative)"}
        ],
        "Meg notes twilight falling and urges the group to hurry home to prepare their costumes."
    ],
    "ALICE L'appuntamento": [
        "ALICE The rendezvous",
        [
            {"word": "ALICE", "lemma": "Alice", "pos": "noun", "meaning": "Alice (character heading)"},
            {"word": "appuntamento", "lemma": "appuntamento", "pos": "noun", "meaning": "rendezvous / appointment / meeting"}
        ],
        "Alice gives the final rendezvous reminder before the conspirators disband."
    ],
    "è alla quercia di Herne.": [
        "is at Herne's Oak.",
        [
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "alla", "lemma": "a", "pos": "preposition", "meaning": "at the (preposition a + feminine article la)"},
            {"word": "quercia", "lemma": "quercia", "pos": "noun", "meaning": "oak / oak tree"},
            {"word": "Herne", "lemma": "Herne", "pos": "noun", "meaning": "Herne (proper noun)"}
        ],
        "The focal point of the final scene: the ancient, haunted Herne's Oak in Windsor Great Park."
    ],
    "È inteso.": [
        "It is agreed.",
        [
            {"word": "È inteso", "lemma": "essere inteso", "pos": "idiom", "meaning": "it is agreed / understood"},
            {"word": "inteso", "lemma": "intendere", "pos": "adjective", "meaning": "understood / agreed upon"}
        ],
        "Fenton acknowledges the rendezvous instructions."
    ],
    "Oh che allegro spavento!": [
        "Oh what merry fright!",
        [
            {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh!"},
            {"word": "allegro", "lemma": "allegro", "pos": "adjective", "meaning": "merry / cheerful"},
            {"word": "spavento", "lemma": "spavento", "pos": "noun", "meaning": "fright / scare / spook"}
        ],
        "Playful oxymoron ('allegro spavento') summarizing the festive carnival fright awaiting Falstaff."
    ],
    "Addio.": [
        "Farewell.",
        [
            {"word": "Addio", "lemma": "addio", "pos": "interjection", "meaning": "farewell / goodbye"}
        ],
        "The lovers and Alice exchange quick farewells as the meeting breaks up."
    ],
    "Provvedi le lanterne.": [
        "Provide the lanterns.",
        [
            {"word": "Provvedi", "lemma": "provvedere", "pos": "verb", "meaning": "provide! / procure! (imperative)"},
            {"word": "lanterne", "lemma": "lanterna", "pos": "noun", "meaning": "lanterns"}
        ],
        "Alice calls out a crucial practical instruction to Meg: bringing lanterns for the dark woods."
    ],
    "Sì.": [
        "Yes.",
        [
            {"word": "Sì", "lemma": "sì", "pos": "interjection", "meaning": "yes"}
        ],
        "Meg confirms Alice's instruction as she leaves."
    ],
    "Non dubitar, tu sposerai mia figlia.": [
        "Do not doubt, you shall marry my daughter.",
        [
            {"word": "Non dubitar", "lemma": "dubitare", "pos": "verb", "meaning": "do not doubt / fear not (negative imperative with apocopic infinitive)"},
            {"word": "sposerai", "lemma": "sposare", "pos": "verb", "meaning": "you will marry (second-person singular future)"},
            {"word": "figlia", "lemma": "figlia", "pos": "noun", "meaning": "daughter"}
        ],
        "Ford detains Dr. Caius in secret, promising behind Alice's back that Caius will marry Nannetta tonight."
    ],
    "Rammenti bene il suo travestimento?": [
        "Do you remember well her disguise?",
        [
            {"word": "Rammenti", "lemma": "rammentare", "pos": "verb", "meaning": "do you remember / recall"},
            {"word": "bene", "lemma": "bene", "pos": "adverb", "meaning": "well"},
            {"word": "travestimento", "lemma": "travestimento", "pos": "noun", "meaning": "disguise / costume"}
        ],
        "Ford checks that Caius knows Nannetta's costume details to abduct the correct fairy."
    ],
    "Cinta di rose, il vel bianco e la vesta.": [
        "Girdled with roses, the white veil and the gown.",
        [
            {"word": "Cinta", "lemma": "cingere", "pos": "adjective", "meaning": "girdled / crowned"},
            {"word": "rose", "lemma": "rosa", "pos": "noun", "meaning": "roses"},
            {"word": "vel", "lemma": "velo", "pos": "noun", "meaning": "veil (apocopic form)"},
            {"word": "bianco", "lemma": "bianco", "pos": "adjective", "meaning": "white"},
            {"word": "vesta", "lemma": "vesta", "pos": "noun", "meaning": "gown / dress / robe (variant of veste)"}
        ],
        "Caius recites Nannetta's costume details, unaware that Mrs. Quickly is eavesdropping nearby."
    ],
    "Non ti scordar le maschere.": [
        "Do not forget the masks.",
        [
            {"word": "Non ti scordar", "lemma": "scordarsi", "pos": "verb", "meaning": "do not forget! (negative reflexive imperative)"},
            {"word": "maschere", "lemma": "maschera", "pos": "noun", "meaning": "masks"}
        ],
        "Alice calls back another reminder to Meg offstage, reinforcing the masquerade theme."
    ],
    "No, certo.": [
        "No, certainly.",
        [
            {"word": "No", "lemma": "no", "pos": "interjection", "meaning": "no"},
            {"word": "certo", "lemma": "certo", "pos": "adverb", "meaning": "certainly / of course"}
        ],
        "Meg calls back reassuring Alice."
    ],
    "Né tu le raganelle!": [
        "Nor you the ratchets!",
        [
            {"word": "Né", "lemma": "né", "pos": "conjunction", "meaning": "nor / neither"},
            {"word": "tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
            {"word": "raganelle", "lemma": "raganella", "pos": "noun", "meaning": "ratchets / noisemakers (literally tree frogs)"}
        ],
        "'Raganelle' are wooden ratchets (cog rattles) traditionally used during Holy Week; the conspirators will use them to create terrifying woodland noises."
    ],
    "Io già disposi": [
        "I already arranged",
        [
            {"word": "Io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
            {"word": "già", "lemma": "già", "pos": "adverb", "meaning": "already"},
            {"word": "disposi", "lemma": "disporre", "pos": "verb", "meaning": "I arranged / set up (passato remoto)"}
        ],
        "Passato remoto 'disposi'; Ford boasts of laying a foolproof counter-trap to wed his daughter to Caius."
    ],
    "la rete mia. Sul finir della festa": [
        "my net. Near the end of the festival",
        [
            {"word": "rete", "lemma": "rete", "pos": "noun", "meaning": "net / snare / trap"},
            {"word": "Sul finir", "lemma": "finire", "pos": "idiom", "meaning": "towards the end / near the close (substantivized apocopic infinitive)"},
            {"word": "festa", "lemma": "festa", "pos": "noun", "meaning": "festival / masquerade / revelry"}
        ],
        "Hunting snare metaphor ('rete mia'); Ford explains the timing for the surprise wedding."
    ],
    "verrete a me col volto ricoperto": [
        "you will come to me with face covered",
        [
            {"word": "verrete", "lemma": "venire", "pos": "verb", "meaning": "you will come (second-person plural future)"},
            {"word": "volto", "lemma": "volto", "pos": "noun", "meaning": "face"},
            {"word": "ricoperto", "lemma": "ricoprire", "pos": "adjective", "meaning": "covered / masked / concealed"}
        ],
        "Ford instructs Dr. Caius to bring his masked bride forward at the conclusion of the masque."
    ],
    "essa dal vel, tu da un mantel fantesco": [
        "she by the veil, you by a servant's cloak",
        [
            {"word": "essa", "lemma": "essa", "pos": "pronoun", "meaning": "she"},
            {"word": "vel", "lemma": "velo", "pos": "noun", "meaning": "veil (apocopic form)"},
            {"word": "mantel", "lemma": "mantello", "pos": "noun", "meaning": "cloak / mantle (apocopic form)"},
            {"word": "fantesco", "lemma": "fantesco", "pos": "adjective", "meaning": "servant-like / of a servant / menial"}
        ],
        "Dr. Caius is instructed to wear a servant's cowl ('mantel fantesco') while Nannetta wears her white fairy veil."
    ],
    "e vi benedirò come due sposi.": [
        "and I will bless you like two spouses.",
        [
            {"word": "benedirò", "lemma": "benedire", "pos": "verb", "meaning": "I will bless (first-person singular future)"},
            {"word": "sposi", "lemma": "sposo", "pos": "noun", "meaning": "spouses / newlyweds / bride and groom"}
        ],
        "Ford promises to bestow a formal paternal blessing over the masked couple, legally and spiritually sealing their marriage."
    ],
    "Siam d'accordo.": [
        "We are agreed.",
        [
            {"word": "Siam d'accordo", "lemma": "essere d'accordo", "pos": "idiom", "meaning": "we are agreed / we are in accord"},
            {"word": "Siam", "lemma": "essere", "pos": "verb", "meaning": "we are (apocopic form of siamo)"},
            {"word": "accordo", "lemma": "accordo", "pos": "noun", "meaning": "agreement / accord"}
        ],
        "Dr. Caius eagerly seals the illicit pact and exits."
    ],
    "Nannetta! Ohè! Nannetta!": [
        "Nannetta! Hey! Nannetta!",
        [
            {"word": "Nannetta", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper noun)"},
            {"word": "Ohè", "lemma": "ohè", "pos": "interjection", "meaning": "hey! / hallo!"}
        ],
        "Mrs. Quickly, having overheard Ford's plot to marry Nannetta to Dr. Caius, bursts out calling urgently for Nannetta."
    ],
    "Nannetta! Ohè!": [
        "Nannetta! Hey!",
        [
            {"word": "Nannetta", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper noun)"},
            {"word": "Ohè", "lemma": "ohè", "pos": "interjection", "meaning": "hey! / hallo!"}
        ],
        "Quickly calls into the wings with breathless urgency."
    ],
    "Che c'è? Che c'è?": [
        "What is it? What is it?",
        [
            {"word": "Che c'è", "lemma": "che c'è", "pos": "idiom", "meaning": "what is it? / what is the matter?"},
            {"word": "c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is"}
        ],
        "Nannetta hurries back, startled by Quickly's alarm."
    ],
    "Prepara la canzone della fata.": [
        "Prepare the fairy's song.",
        [
            {"word": "Prepara", "lemma": "preparare", "pos": "verb", "meaning": "prepare! / get ready! (imperative)"},
            {"word": "canzone", "lemma": "canzone", "pos": "noun", "meaning": "song"},
            {"word": "fata", "lemma": "fata", "pos": "noun", "meaning": "fairy"}
        ],
        "Quickly tells Nannetta to prepare her fairy invocation while they arrange a counter-ruse to outwit Ford."
    ],
    "È preparata.": [
        "It is prepared.",
        [
            {"word": "È", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "preparata", "lemma": "preparare", "pos": "adjective", "meaning": "prepared / ready"}
        ],
        "Nannetta assures Quickly that her song is ready."
    ],
    "Tu, non tardar.": [
        "You, do not delay.",
        [
            {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
            {"word": "non tardar", "lemma": "tardare", "pos": "verb", "meaning": "do not delay! / do not tarry! (negative imperative with apocopic infinitive)"}
        ],
        "Negative imperative 'non tardar' (non + apocopic infinitive); Alice urges Quickly not to lose a moment in organizing the counter-plot."
    ],
    "Chi prima arriva, aspetta.": [
        "Whoever arrives first, waits.",
        [
            {"word": "Chi", "lemma": "chi", "pos": "pronoun", "meaning": "whoever / he who (relative pronoun)"},
            {"word": "prima", "lemma": "prima", "pos": "adverb", "meaning": "first / earlier"},
            {"word": "arriva", "lemma": "arrivare", "pos": "verb", "meaning": "arrives"},
            {"word": "aspetta", "lemma": "aspettare", "pos": "verb", "meaning": "waits"}
        ],
        "Proverbial Italian saying ('Chi prima arriva, aspetta'); Quickly rushes off to make final preparations for the forest masque."
    ]
}

# Verification
with open('scripts/falstaff_act3_sc1_full.json') as f:
    source = json.load(f)

source_lines = [x['original'] for x in source]
assert len(source_lines) == 147, f"Expected 147 source lines, got {len(source_lines)}"

missing = [line for line in source_lines if line not in data]
extra = [line for line in data if line not in source_lines]

print("Missing count:", len(missing))
if missing:
    print("Missing lines:", missing)
print("Extra count:", len(extra))
if extra:
    print("Extra lines:", extra)

ALLOWED_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}

errors = []
for line, (literal, tokens, note) in data.items():
    # Capitalization check
    orig_first_alpha = next((c for c in line if c.isalpha()), None)
    lit_first_alpha = next((c for c in literal if c.isalpha()), None)
    if orig_first_alpha and lit_first_alpha:
        if orig_first_alpha.isupper() and not lit_first_alpha.isupper():
            errors.append(f"Capitalization error on {line!r}: orig begins uppercase {orig_first_alpha!r} but literal begins {lit_first_alpha!r}")
        if orig_first_alpha.islower() and lit_first_alpha.isupper():
            # Note: prompt says: If original begins uppercase, English literal MUST begin uppercase; if lowercase, English literal may begin lowercase.
            # but we made lowercase begin lowercase for consistency!
            pass
    
    # Token count check
    if not (1 <= len(tokens) <= 5):
        errors.append(f"Token count error on {line!r}: {len(tokens)} tokens")
    
    # Token structure & POS check
    for tok in tokens:
        for k in ['word', 'lemma', 'pos', 'meaning']:
            if k not in tok:
                errors.append(f"Missing key {k!r} in token of {line!r}")
        if tok['pos'] not in ALLOWED_POS:
            errors.append(f"Invalid POS {tok['pos']!r} in {line!r}")
    
    # Note check
    if not note or len(note.strip()) == 0:
        errors.append(f"Missing note in {line!r}")

if errors:
    print(f"Found {len(errors)} validation errors:")
    for e in errors[:10]:
        print("  -", e)
    raise SystemExit(1)

print("All validations PASSED!")

output_path = 'scripts/falstaff_curated_a3_sc1_full.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Successfully saved {len(data)} items to {output_path}")

import json

# Allowed POS tags strictly:
ALLOWED_POS = {
    "noun", "verb", "adjective", "adverb", "pronoun",
    "preposition", "conjunction", "interjection", "particle", "idiom"
}

data = {
    "Presenteremo un bill, per una tassa": [
        "We shall present a bill, for a tax",
        [
            {"word": "Presenteremo", "lemma": "presentare", "pos": "verb", "meaning": "we shall present / submit (1st plur. future)"},
            {"word": "bill", "lemma": "bill", "pos": "noun", "meaning": "bill / draft statute (English loanword in Boito's text)"},
            {"word": "per", "lemma": "per", "pos": "preposition", "meaning": "for"},
            {"word": "tassa", "lemma": "tassa", "pos": "noun", "meaning": "tax / levy"}
        ],
        "Alice humorously adopts English parliamentary vocabulary ('bill'), proposing a legislative tax on obese men to penalize Falstaff's gross physique."
    ],
    "al parlamento, sulla gente grassa.": [
        "to parliament, on fat people.",
        [
            {"word": "al", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + il)"},
            {"word": "parlamento", "lemma": "parlamento", "pos": "noun", "meaning": "parliament"},
            {"word": "sulla", "lemma": "su", "pos": "preposition", "meaning": "on the (articulated preposition su + la)"},
            {"word": "gente", "lemma": "gente", "pos": "noun", "meaning": "people / folk"},
            {"word": "grassa", "lemma": "grasso", "pos": "adjective", "meaning": "fat / stout"}
        ],
        "Syntactic continuation of Alice's parliamentary joke: taxing 'la gente grassa' (fat people) in the English Parliament, directly targeting Sir John."
    ],
    "Comari!": [
        "Gossips!",
        [
            {"word": "Comari", "lemma": "comare", "pos": "noun", "meaning": "gossips / fellow wives / female friends (vocative plural)"},
            {"word": "comare", "lemma": "comare", "pos": "noun", "meaning": "gossip / neighbor woman / godmother"}
        ],
        "Mrs. Quickly bursts in addressing her fellow conspirators with the traditional Shakespearean vocative 'comari' (gossips / merry wives)."
    ],
    "Ebben?": [
        "Well?",
        [
            {"word": "Ebben", "lemma": "ebbene", "pos": "interjection", "meaning": "well? / well then? (apocope of ebbene)"},
            {"word": "ebbene", "lemma": "ebbene", "pos": "interjection", "meaning": "well / well then"}
        ],
        "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn."
    ],
    "Che c'è?": [
        "What is it?",
        [
            {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what"},
            {"word": "c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is / is there (elision of ci è)"}
        ],
        "Meg joins Alice in asking Quickly what news she brings from the Garter Inn."
    ],
    "Sarà sconfitto!": [
        "He will be defeated!",
        [
            {"word": "Sarà", "lemma": "essere", "pos": "verb", "meaning": "he will be (3rd sing. future)"},
            {"word": "sconfitto", "lemma": "sconfiggere", "pos": "verb", "meaning": "defeated / vanquished (past participle)"}
        ],
        "Quickly triumphantly proclaims Falstaff's inevitable defeat in their impending duel of wits."
    ],
    "Brava!": [
        "Brava!",
        [
            {"word": "Brava", "lemma": "bravo", "pos": "adjective", "meaning": "splendid / well done / clever (feminine singular)"},
            {"word": "bravo", "lemma": "bravo", "pos": "adjective", "meaning": "capable / good / brave"}
        ],
        "Alice cheers Quickly's diplomatic success with an appreciative feminine exclamation."
    ],
    "Fra poco gli farem la festa!": [
        "Shortly we shall finish him off!",
        [
            {"word": "Fra poco", "lemma": "fra poco", "pos": "idiom", "meaning": "shortly / before long / soon"},
            {"word": "gli", "lemma": "gli", "pos": "pronoun", "meaning": "to him / for him (dative clitic)"},
            {"word": "farem", "lemma": "fare", "pos": "verb", "meaning": "we will make / do (apocope of faremo)"},
            {"word": "fare la festa", "lemma": "fare la festa", "pos": "idiom", "meaning": "to do for someone / finish someone off / settle someone's hash"}
        ],
        "Quickly uses the colloquial and darkly humorous idiom 'fare la festa a qualcuno' (to settle someone's hash / do for someone)."
    ],
    "Bene!": [
        "Good!",
        [
            {"word": "Bene", "lemma": "bene", "pos": "adverb", "meaning": "well / good / fine"},
            {"word": "bene", "lemma": "bene", "pos": "noun", "meaning": "good / blessing / benefit"}
        ],
        "Alice and Meg exclaim in unison, pleased that their trap is closing around Falstaff."
    ],
    "Piombò nel laccio a capofitto.": [
        "He plunged into the snare headlong.",
        [
            {"word": "Piombò", "lemma": "piombare", "pos": "verb", "meaning": "he plunged / dropped like lead (3rd sing. passato remoto)"},
            {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "in the / into the (articulated preposition in + il)"},
            {"word": "laccio", "lemma": "laccio", "pos": "noun", "meaning": "snare / noose / trap"},
            {"word": "a capofitto", "lemma": "a capofitto", "pos": "idiom", "meaning": "headlong / headfirst"}
        ],
        "Quickly describes Falstaff's complete lack of suspicion using vivid hunting imagery ('laccio', snare) and the adverbial idiom 'a capofitto'."
    ],
    "Narrami tutto, lesta.": [
        "Tell me everything, quickly.",
        [
            {"word": "Narrami", "lemma": "narrare", "pos": "verb", "meaning": "tell me / narrate to me (imperative narra + clitic mi)"},
            {"word": "tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "everything / all"},
            {"word": "lesta", "lemma": "lesto", "pos": "adjective", "meaning": "quick / nimble (feminine singular used adverbially)"}
        ],
        "Alice commands Quickly to tell the whole story without delay, using an enclitic imperative ('narrami') and adjective 'lesta' acting adverbially."
    ],
    "Lesta.": [
        "Quickly.",
        [
            {"word": "Lesta", "lemma": "lesto", "pos": "adjective", "meaning": "quick / brisk (feminine singular)"},
            {"word": "lesto", "lemma": "lesto", "pos": "adjective", "meaning": "quick / nimble / agile"}
        ],
        "Meg echoes Alice's instruction, heightening the urgency and comedic rhythm."
    ],
    "Giunta all'«Albergo della Giarrettiera»": [
        "Having arrived at the 'Garter Inn'",
        [
            {"word": "Giunta", "lemma": "giungere", "pos": "verb", "meaning": "arrived / having arrived (past participle feminine singular)"},
            {"word": "all'", "lemma": "a", "pos": "preposition", "meaning": "at the / to the (articulated preposition a + l')"},
            {"word": "Albergo", "lemma": "albergo", "pos": "noun", "meaning": "inn / hotel"},
            {"word": "della", "lemma": "di", "pos": "preposition", "meaning": "of the (articulated preposition di + la)"},
            {"word": "Giarrettiera", "lemma": "giarrettiera", "pos": "noun", "meaning": "Garter (proper noun)"}
        ],
        "Quickly opens her storytelling like an epic recitation with a past participle clause ('Giunta...'), naming Falstaff's headquarters at the Garter Inn."
    ],
    "chiedo d'essere ammessa alla presenza": [
        "I ask to be admitted to the presence",
        [
            {"word": "chiedo", "lemma": "chiedere", "pos": "verb", "meaning": "I ask / request (1st sing. present)"},
            {"word": "d'essere", "lemma": "essere", "pos": "verb", "meaning": "to be (preposition di + infinitive essere)"},
            {"word": "ammessa", "lemma": "ammettere", "pos": "verb", "meaning": "admitted (past participle feminine singular)"},
            {"word": "alla", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + la)"},
            {"word": "presenza", "lemma": "presenza", "pos": "noun", "meaning": "presence"}
        ],
        "Quickly parodies high court etiquette ('alla presenza'), mimicking the sovereign dignity Falstaff imagines himself to possess."
    ],
    "del cavalier, segreta messaggera.": [
        "of the knight, secret messenger.",
        [
            {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the (articulated preposition di + il)"},
            {"word": "cavalier", "lemma": "cavaliere", "pos": "noun", "meaning": "knight (apocope of cavaliere)"},
            {"word": "segreta", "lemma": "segreto", "pos": "adjective", "meaning": "secret / discreet"},
            {"word": "messaggera", "lemma": "messaggera", "pos": "noun", "meaning": "messenger / female envoy"}
        ],
        "Quickly styles herself as a diplomatic envoy of love ('segreta messaggera') to Falstaff ('il cavalier')."
    ],
    "Sir John si degna d'accordarmi udienza,": [
        "Sir John deigns to grant me an audience,",
        [
            {"word": "si degna", "lemma": "degnarsi", "pos": "verb", "meaning": "he deigns / condescends (3rd sing. present)"},
            {"word": "d'accordarmi", "lemma": "accordare", "pos": "verb", "meaning": "to grant me (accordare + clitic mi)"},
            {"word": "udienza", "lemma": "udienza", "pos": "noun", "meaning": "audience / formal hearing"}
        ],
        "The phrase 'si degna d'accordarmi udienza' humorously conveys Falstaff's delusion that he is a prince receiving suitors."
    ],
    "m'accoglie tronfio in furfantesca posa:": [
        "he receives me pompous in a roguish pose:",
        [
            {"word": "m'accoglie", "lemma": "accogliere", "pos": "verb", "meaning": "he receives me (clitic mi + accoglie)"},
            {"word": "tronfio", "lemma": "tronfio", "pos": "adjective", "meaning": "pompous / puffed up / strutting"},
            {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in"},
            {"word": "furfantesca", "lemma": "furfantesco", "pos": "adjective", "meaning": "roguish / rascally"},
            {"word": "posa", "lemma": "posa", "pos": "noun", "meaning": "pose / posture"}
        ],
        "Boito's adjectives 'tronfio' and 'furfantesca' capture Falstaff's hilarious combination of aristocratic pomposity and knavish swagger."
    ],
    "«Buon giorno, buona donna.»": [
        "«Good day, good woman.»",
        [
            {"word": "Buon", "lemma": "buono", "pos": "adjective", "meaning": "good (apocope of buono)"},
            {"word": "giorno", "lemma": "giorno", "pos": "noun", "meaning": "day"},
            {"word": "buona", "lemma": "buono", "pos": "adjective", "meaning": "good (feminine singular)"},
            {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"}
        ],
        "Quickly mimics Falstaff's condescending, patronizing baritone greeting from their encounter at the inn."
    ],
    "«Reverenza.»": [
        "«Reverence.»",
        [
            {"word": "Reverenza", "lemma": "reverenza", "pos": "noun", "meaning": "reverence / deep bow / curtsy"},
            {"word": "far reverenza", "lemma": "far reverenza", "pos": "idiom", "meaning": "to make a curtsy / bow low"}
        ],
        "Quickly quotes her own servile catchphrase and demonstrates her deep curtsy to the amusement of Alice and Meg."
    ],
    "A lui m'inchino molto ossequïosamente,": [
        "To him I bow very obsequiously,",
        [
            {"word": "A lui", "lemma": "lui", "pos": "pronoun", "meaning": "to him"},
            {"word": "m'inchino", "lemma": "inchinarsi", "pos": "verb", "meaning": "I bow (reflexive 1st sing. present)"},
            {"word": "molto", "lemma": "molto", "pos": "adverb", "meaning": "very / greatly"},
            {"word": "ossequïosamente", "lemma": "ossequiosamente", "pos": "adverb", "meaning": "obsequiously / deferentially (with diaeresis on ï)"}
        ],
        "The poetic diaeresis on 'ossequïosamente' stretches the word out comically, mimicking the slow, prolonged bow she performed."
    ],
    "poi passo alle notizie ghiotte.": [
        "then I move on to the juicy news.",
        [
            {"word": "poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterward"},
            {"word": "passo", "lemma": "passare", "pos": "verb", "meaning": "I pass / move on (1st sing. present)"},
            {"word": "alle", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + le)"},
            {"word": "notizie", "lemma": "notizia", "pos": "noun", "meaning": "news / tidings (plural)"},
            {"word": "ghiotte", "lemma": "ghiotto", "pos": "adjective", "meaning": "juicy / appetizing / enticing (feminine plural)"}
        ],
        "'Notizie ghiotte' treats her fabricated messages of love as appetizing morsels fed to Falstaff's insatiable vanity."
    ],
    "Lui beve grosso ed ogni mia massiccia": [
        "He swallows it whole and every massive",
        [
            {"word": "Lui", "lemma": "lui", "pos": "pronoun", "meaning": "he"},
            {"word": "beve grosso", "lemma": "bere grosso", "pos": "idiom", "meaning": "to be credulous / swallow whole / fall for anything"},
            {"word": "beve", "lemma": "bere", "pos": "verb", "meaning": "drinks / swallows (3rd sing. present)"},
            {"word": "ogni", "lemma": "ogni", "pos": "adjective", "meaning": "every / each"},
            {"word": "massiccia", "lemma": "massiccio", "pos": "adjective", "meaning": "massive / hefty / solid"}
        ],
        "The colloquial idiom 'bere grosso' denotes coarse credulity, carrying over to the enjambment with 'frottola'."
    ],
    "frottola inghiotte.": [
        "fib he swallows.",
        [
            {"word": "frottola", "lemma": "frottola", "pos": "noun", "meaning": "fib / tall tale / cock-and-bull story"},
            {"word": "inghiotte", "lemma": "inghiottire", "pos": "verb", "meaning": "he swallows / gulps down (3rd sing. present)"}
        ],
        "Quickly pairs 'beve grosso' with 'inghiotte' (he swallows), emphasizing Falstaff's ravenous consumption of her lies."
    ],
    "Infine, a farla spiccia,": [
        "In short, to make it brief,",
        [
            {"word": "Infine", "lemma": "infine", "pos": "adverb", "meaning": "finally / in short"},
            {"word": "a farla spiccia", "lemma": "farla spiccia", "pos": "idiom", "meaning": "to make it brief / to cut to the chase"},
            {"word": "spiccia", "lemma": "spiccio", "pos": "adjective", "meaning": "quick / expeditious"}
        ],
        "The conversational idiom 'a farla spiccia' (with feminine pronominal clitic 'la') introduces her concise summary of Falstaff's mindset."
    ],
    "vi crede entrambe innamorate cotte": [
        "he believes you both madly in love",
        [
            {"word": "vi crede", "lemma": "credere", "pos": "verb", "meaning": "he believes you (clitic vi + crede)"},
            {"word": "entrambe", "lemma": "entrambi", "pos": "pronoun", "meaning": "both (feminine plural)"},
            {"word": "innamorato cotto", "lemma": "innamorato cotto", "pos": "idiom", "meaning": "head over heels in love / madly infatuated"},
            {"word": "innamorate", "lemma": "innamorato", "pos": "adjective", "meaning": "in love / enamored"},
            {"word": "cotte", "lemma": "cotto", "pos": "adjective", "meaning": "cooked / smitten (feminine plural)"}
        ],
        "The popular Italian idiom 'innamorate cotte' (literally 'cooked in love') hilariously captures Falstaff's supreme romantic delusion."
    ],
    "delle bellezze sue.": [
        "with his beauties.",
        [
            {"word": "delle", "lemma": "di", "pos": "preposition", "meaning": "of the / with the (articulated preposition di + le)"},
            {"word": "bellezze", "lemma": "bellezza", "pos": "noun", "meaning": "beauties / charms (plural)"},
            {"word": "sue", "lemma": "suo", "pos": "adjective", "meaning": "his (possessive adjective feminine plural)"}
        ],
        "Quickly derisively refers to Falstaff's corpulent physical form as 'bellezze sue' (his charms/beauties)."
    ],
    "E lo vedrete presto ai vostri piè.": [
        "And you will see him soon at your feet.",
        [
            {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
            {"word": "vedrete", "lemma": "vedere", "pos": "verb", "meaning": "you will see (2nd plur. future)"},
            {"word": "presto", "lemma": "presto", "pos": "adverb", "meaning": "soon / shortly"},
            {"word": "ai", "lemma": "a", "pos": "preposition", "meaning": "at the / to the (articulated preposition a + i)"},
            {"word": "piè", "lemma": "piede", "pos": "noun", "meaning": "feet (poetic apocope of piedi)"}
        ],
        "Quickly assures the women of Falstaff's imminent groveling; 'piè' is the classical poetic apocope of 'piedi'."
    ],
    "Quando?": [
        "When?",
        [
            {"word": "Quando", "lemma": "quando", "pos": "adverb", "meaning": "when / at what time"},
            {"word": "quando", "lemma": "quando", "pos": "conjunction", "meaning": "when / whenever"}
        ],
        "Alice abruptly cuts in to nail down the tactical logistics of the trap."
    ],
    "Oggi, qui, dalle due alle tre.": [
        "Today, here, between two and three.",
        [
            {"word": "Oggi", "lemma": "oggi", "pos": "adverb", "meaning": "today"},
            {"word": "qui", "lemma": "qui", "pos": "adverb", "meaning": "here"},
            {"word": "dalle", "lemma": "da", "pos": "preposition", "meaning": "from the (articulated preposition da + le)"},
            {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two (two o'clock)"},
            {"word": "tre", "lemma": "tre", "pos": "noun", "meaning": "three (three o'clock)"}
        ],
        "Quickly reports the specific two-to-three o'clock window arranged for Alice's purported rendezvous."
    ],
    "Dalle due alle tre.": [
        "From two to three.",
        [
            {"word": "Dalle", "lemma": "da", "pos": "preposition", "meaning": "from the (articulated preposition da + le)"},
            {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two (two o'clock)"},
            {"word": "alle", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + le)"},
            {"word": "tre", "lemma": "tre", "pos": "noun", "meaning": "three (three o'clock)"}
        ],
        "Meg repeats the exact time frame with wicked delight, reinforcing the deadline for their preparations."
    ],
    "Son già le due.": [
        "It is already two.",
        [
            {"word": "Son", "lemma": "essere", "pos": "verb", "meaning": "they are / it is (apocope of sono, 3rd plur.)"},
            {"word": "già", "lemma": "già", "pos": "adverb", "meaning": "already"},
            {"word": "le due", "lemma": "due", "pos": "noun", "meaning": "two o'clock (feminine plural)"}
        ],
        "Alice realizes the hour has already struck, triggering instantaneous practical action; Italian uses plural 'sono le due'."
    ],
    "Olà! Ned Will!": [
        "Ho there! Ned! Will!",
        [
            {"word": "Olà", "lemma": "olà", "pos": "interjection", "meaning": "ho there! / hey!"},
            {"word": "Ned", "lemma": "Ned", "pos": "noun", "meaning": "Ned (proper noun)"},
            {"word": "Will", "lemma": "Will", "pos": "noun", "meaning": "Will (proper noun)"}
        ],
        "Alice calls out sharply to Ford's manservants to bring the heavy laundry basket."
    ],
    "Già tutto ho preparato.": [
        "Already everything I have prepared.",
        [
            {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
            {"word": "tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "everything / all"},
            {"word": "ho preparato", "lemma": "preparare", "pos": "verb", "meaning": "I have prepared (passato prossimo 1st sing.)"}
        ],
        "Alice reassures the company that her domestic ambush is fully organized ahead of time."
    ],
    "Portate qui la cesta del bucato.": [
        "Bring here the laundry basket.",
        [
            {"word": "Portate", "lemma": "portare", "pos": "verb", "meaning": "bring / carry (2nd plur. imperative)"},
            {"word": "qui", "lemma": "qui", "pos": "adverb", "meaning": "here"},
            {"word": "cesta", "lemma": "cesta", "pos": "noun", "meaning": "basket / hamper"},
            {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the (articulated preposition di + il)"},
            {"word": "bucato", "lemma": "bucato", "pos": "noun", "meaning": "laundry / washing"}
        ],
        "Alice orders the arrival of the central prop of the scene: the great dirty laundry basket ('la cesta del bucato')."
    ],
    "Sarà un affare gaio!": [
        "It will be a merry affair!",
        [
            {"word": "Sarà", "lemma": "essere", "pos": "verb", "meaning": "it will be (3rd sing. future)"},
            {"word": "affare", "lemma": "affare", "pos": "noun", "meaning": "affair / business / matter"},
            {"word": "gaio", "lemma": "gaio", "pos": "adjective", "meaning": "merry / cheerful / gay"}
        ],
        "Quickly chuckles at the mounting domestic chaos and the impending humiliation of Falstaff."
    ],
    "Nannetta, e tu non ridi? Che cos'hai?": [
        "Nannetta, and you do not laugh? What is the matter with you?",
        [
            {"word": "Nannetta", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper noun)"},
            {"word": "ridi", "lemma": "ridere", "pos": "verb", "meaning": "you laugh (2nd sing. present)"},
            {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what"},
            {"word": "cos'hai", "lemma": "avere", "pos": "verb", "meaning": "do you have (cosa + hai; what is wrong with you?)"}
        ],
        "Alice notices her daughter looking tearful and downcast amidst the laughter, gently inquiring after her distress."
    ],
    "Tu piangi? Che cos'hai? Dillo a tua madre.": [
        "You are weeping? What is the matter with you? Tell it to your mother.",
        [
            {"word": "piangi", "lemma": "piangere", "pos": "verb", "meaning": "you weep / cry (2nd sing. present)"},
            {"word": "Dillo", "lemma": "dire", "pos": "verb", "meaning": "tell it (imperative di' + clitic lo)"},
            {"word": "tua", "lemma": "tuo", "pos": "adjective", "meaning": "your (possessive adjective)"},
            {"word": "madre", "lemma": "madre", "pos": "noun", "meaning": "mother"}
        ],
        "Alice comforts Nannetta; 'Dillo' combines the truncated imperative 'di'' with clitic direct object 'lo' via syntactic doubling."
    ],
    "Mio padre...": [
        "My father...",
        [
            {"word": "Mio", "lemma": "mio", "pos": "adjective", "meaning": "my (possessive adjective)"},
            {"word": "padre", "lemma": "padre", "pos": "noun", "meaning": "father"}
        ],
        "Nannetta falters, hesitating before announcing Ford's autocratic command."
    ],
    "vuole ch'io mi mariti al Dottor Cajo!": [
        "wants me to marry Doctor Caius!",
        [
            {"word": "vuole", "lemma": "volere", "pos": "verb", "meaning": "he wants / wishes (3rd sing. present)"},
            {"word": "ch'io", "lemma": "che", "pos": "conjunction", "meaning": "that I (che + io)"},
            {"word": "mi mariti", "lemma": "maritarsi", "pos": "verb", "meaning": "I marry (1st sing. present subjunctive)"},
            {"word": "Dottor", "lemma": "dottore", "pos": "noun", "meaning": "Doctor (apocope of dottore)"},
            {"word": "Cajo", "lemma": "Cajo", "pos": "noun", "meaning": "Caius (proper noun)"}
        ],
        "Nannetta uses the subjunctive 'mi mariti' after 'vuole che', revealing Ford's patriarchal decree that she marry Dr. Caius."
    ],
    "A quel pedante?": [
        "To that pedant?",
        [
            {"word": "A", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative adjective)"},
            {"word": "pedante", "lemma": "pedante", "pos": "noun", "meaning": "pedant / bookworm"}
        ],
        "Alice immediately rejects the notion, mocking Caius's tedious scholarly pretensions."
    ],
    "Oibò!": [
        "Nonsense!",
        [
            {"word": "Oibò", "lemma": "oibò", "pos": "interjection", "meaning": "fie! / nonsense! / out upon it!"},
            {"word": "oibò", "lemma": "oibò", "pos": "adverb", "meaning": "by no means / not at all / heaven forbid"}
        ],
        "Quickly's instinctive interjection expressing comical outrage and moral dismissal."
    ],
    "A quel gonzo!": [
        "To that simpleton!",
        [
            {"word": "A", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
            {"word": "gonzo", "lemma": "gonzo", "pos": "noun", "meaning": "simpleton / gullible fool"}
        ],
        "Meg piles on the insults, calling Caius a gullible ninny ('gonzo')."
    ],
    "A quel grullo!": [
        "To that blockhead!",
        [
            {"word": "A", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
            {"word": "grullo", "lemma": "grullo", "pos": "noun", "meaning": "blockhead / fool (Tuscan colloquialism)"}
        ],
        "Alice uses the distinctively Tuscan pejorative 'grullo' to dismiss Caius's intelligence."
    ],
    "A quel bisavolo!": [
        "To that great-grandfather!",
        [
            {"word": "A", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
            {"word": "bisavolo", "lemma": "bisavolo", "pos": "noun", "meaning": "great-grandfather / ancient man"}
        ],
        "Nannetta humorously exaggerates Caius's age, calling him a decrepit 'bisavolo' (great-grandfather)."
    ],
    "No! No!": [
        "No! No!",
        [
            {"word": "No", "lemma": "no", "pos": "adverb", "meaning": "no / not so"},
            {"word": "no", "lemma": "no", "pos": "particle", "meaning": "negative answer particle"}
        ],
        "Alice vigorously vetoes the prospective match, promising maternal intervention."
    ],
    "No! No! Piuttosto lapidata viva...": [
        "No! No! Rather stoned alive...",
        [
            {"word": "Piuttosto", "lemma": "piuttosto", "pos": "adverb", "meaning": "rather / sooner"},
            {"word": "lapidata", "lemma": "lapidare", "pos": "verb", "meaning": "stoned / pelted with stones (past participle feminine singular)"},
            {"word": "viva", "lemma": "vivo", "pos": "adjective", "meaning": "alive (feminine singular)"}
        ],
        "Nannetta's tragic hyperbole: she would rather suffer public stoning than submit to an arranged marriage."
    ],
    "Da una mitraglia di torsi di cavolo.": [
        "By a hail of cabbage stalks.",
        [
            {"word": "Da", "lemma": "da", "pos": "preposition", "meaning": "by / from"},
            {"word": "una mitraglia", "lemma": "mitraglia", "pos": "noun", "meaning": "a hail / grapeshot / volley"},
            {"word": "torsi", "lemma": "torso", "pos": "noun", "meaning": "stalks / cores / stumps (plural)"},
            {"word": "cavolo", "lemma": "cavolo", "pos": "noun", "meaning": "cabbage"}
        ],
        "Alice comically deflates Nannetta's operatic martyrdom by imagining missiles of kitchen cabbage stalks."
    ],
    "Ben detto!": [
        "Well said!",
        [
            {"word": "Ben", "lemma": "bene", "pos": "adverb", "meaning": "well (apocope of bene)"},
            {"word": "detto", "lemma": "dire", "pos": "verb", "meaning": "said (past participle)"}
        ],
        "Quickly shouts her enthusiastic approval of Alice's witty dismissal of the match."
    ],
    "Non temer.": [
        "Do not fear.",
        [
            {"word": "Non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "temer", "lemma": "temere", "pos": "verb", "meaning": "to fear (apocope of temere; negative imperative 2nd sing.)"}
        ],
        "Alice reassures her daughter; in Italian, negative informal singular commands use 'non' + infinitive ('non temer')."
    ],
    "Evviva!": [
        "Hurrah!",
        [
            {"word": "Evviva", "lemma": "evviva", "pos": "interjection", "meaning": "hurrah! / long live! / cheers!"},
            {"word": "evviva", "lemma": "evviva", "pos": "noun", "meaning": "cheer / shout of joy / acclaim"}
        ],
        "Nannetta rejoices at her mother's promise to block the unwanted marriage."
    ],
    "Col Dottor Cajo non mi sposerò!": [
        "With Doctor Caius I will not marry!",
        [
            {"word": "Col", "lemma": "con", "pos": "preposition", "meaning": "with the (articulated preposition con + il)"},
            {"word": "Dottor", "lemma": "dottore", "pos": "noun", "meaning": "Doctor (apocope of dottore)"},
            {"word": "Cajo", "lemma": "Cajo", "pos": "noun", "meaning": "Caius (proper noun)"},
            {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "mi sposerò", "lemma": "sposarsi", "pos": "verb", "meaning": "I will marry (reflexive 1st sing. future)"}
        ],
        "Nannetta triumphantly asserts her romantic independence in the future tense with fronted prepositional phrase 'Col Dottor Cajo'."
    ],
    "Mettete là. Poi, quando avrò chiamato,": [
        "Put it there. Then, when I have called,",
        [
            {"word": "Mettete", "lemma": "mettere", "pos": "verb", "meaning": "put / place (2nd plur. imperative)"},
            {"word": "là", "lemma": "là", "pos": "adverb", "meaning": "there"},
            {"word": "quando", "lemma": "quando", "pos": "conjunction", "meaning": "when"},
            {"word": "avrò chiamato", "lemma": "chiamare", "pos": "verb", "meaning": "I will have called (future perfect 1st sing.)"}
        ],
        "Alice directs the servants setting down the laundry basket, using the future perfect ('avrò chiamato') for the cue."
    ],
    "vuoterete la cesta nel fossato.": [
        "you will empty the basket into the ditch.",
        [
            {"word": "vuoterete", "lemma": "vuotare", "pos": "verb", "meaning": "you will empty / dump (2nd plur. future)"},
            {"word": "cesta", "lemma": "cesta", "pos": "noun", "meaning": "basket / hamper"},
            {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "in the / into the (articulated preposition in + il)"},
            {"word": "fossato", "lemma": "fossato", "pos": "noun", "meaning": "ditch / moat"}
        ],
        "Alice gives the crucial instruction to the servants: empty the laundry basket straight into the ditch."
    ],
    "Bum!": [
        "Boom!",
        [
            {"word": "Bum", "lemma": "bum", "pos": "interjection", "meaning": "boom! / splash! (onomatopoeia)"},
            {"word": "fare bum", "lemma": "fare bum", "pos": "idiom", "meaning": "to make a boom / produce a loud splash or bang"}
        ],
        "Nannetta playfully vocalizes the massive impact of Falstaff landing in the mud."
    ],
    "Taci. ~ Andate.": [
        "Hush. ~ Go.",
        [
            {"word": "Taci", "lemma": "tacere", "pos": "verb", "meaning": "hush / be silent (2nd sing. imperative)"},
            {"word": "Andate", "lemma": "andare", "pos": "verb", "meaning": "go / be off (2nd plur. imperative)"}
        ],
        "Alice shushes Nannetta before the servants catch on, then dismisses the men briskly with 'Andate'."
    ],
    "Che bombardamento!": [
        "What a bombardment!",
        [
            {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what / what a (exclamative)"},
            {"word": "bombardamento", "lemma": "bombardamento", "pos": "noun", "meaning": "bombardment / cannonade"}
        ],
        "Nannetta gleefully compares Falstaff's impending splash into the Thames ditch to an explosive artillery barrage."
    ],
    "Prepariamo la scena. Qua una sedia.": [
        "Let us prepare the scene. Here a chair.",
        [
            {"word": "Prepariamo", "lemma": "preparare", "pos": "verb", "meaning": "let us prepare (1st plur. present/imperative)"},
            {"word": "scena", "lemma": "scena", "pos": "noun", "meaning": "scene / stage"},
            {"word": "Qua", "lemma": "qua", "pos": "adverb", "meaning": "here"},
            {"word": "sedia", "lemma": "sedia", "pos": "noun", "meaning": "chair"}
        ],
        "Alice takes charge of stage-managing the room, treating the seduction trap as a scripted comedic production."
    ],
    "Qua il mio liuto.": [
        "Here my lute.",
        [
            {"word": "Qua", "lemma": "qua", "pos": "adverb", "meaning": "here"},
            {"word": "mio", "lemma": "mio", "pos": "adjective", "meaning": "my (possessive adjective)"},
            {"word": "liuto", "lemma": "liuto", "pos": "noun", "meaning": "lute"}
        ],
        "Nannetta places her lute within reach for Alice's mock-serenade."
    ],
    "Apriamo il paravento.": [
        "Let us open the screen.",
        [
            {"word": "Apriamo", "lemma": "aprire", "pos": "verb", "meaning": "let us open / unfold (1st plur. present/imperative)"},
            {"word": "il", "lemma": "il", "pos": "particle", "meaning": "the (masculine singular definite article)"},
            {"word": "paravento", "lemma": "paravento", "pos": "noun", "meaning": "folding screen / draft screen"}
        ],
        "Alice positions the folding screen, a staple prop of farcical intrigue that will conceal Fenton and Nannetta."
    ],
    "Bravissime! Così. Più aperto ancora.": [
        "Splendid, ladies! Like that. More open still.",
        [
            {"word": "Bravissime", "lemma": "bravo", "pos": "adjective", "meaning": "splendid / excellent (feminine plural superlative)"},
            {"word": "Così", "lemma": "così", "pos": "adverb", "meaning": "like that / thus / so"},
            {"word": "aperto", "lemma": "aperto", "pos": "adjective", "meaning": "open"},
            {"word": "ancora", "lemma": "ancora", "pos": "adverb", "meaning": "still / more / yet"}
        ],
        "Alice commends her companions' efficiency with the feminine superlative 'bravissime' while fine-tuning the concealment."
    ],
    "Fra poco s'incomincia la commedia.": [
        "Shortly the comedy begins.",
        [
            {"word": "Fra poco", "lemma": "fra poco", "pos": "idiom", "meaning": "shortly / soon / before long"},
            {"word": "s'incomincia", "lemma": "incominciarsi", "pos": "verb", "meaning": "begins / is begun (impersonal/passive si incomincia)"},
            {"word": "commedia", "lemma": "commedia", "pos": "noun", "meaning": "comedy / play"}
        ],
        "Alice meta-theatrically announces the commencement of their theatrical farce."
    ],
    "Gaie comari di Windsor! è l'ora!": [
        "Merry wives of Windsor! it is time!",
        [
            {"word": "Gaie", "lemma": "gaio", "pos": "adjective", "meaning": "merry / cheerful (feminine plural)"},
            {"word": "comari", "lemma": "comare", "pos": "noun", "meaning": "wives / gossips (plural)"},
            {"word": "Windsor", "lemma": "Windsor", "pos": "noun", "meaning": "Windsor (proper noun)"},
            {"word": "è l'ora", "lemma": "ora", "pos": "noun", "meaning": "it is the hour / the time has come"}
        ],
        "Alice quotes the Italian title of Shakespeare's play (*The Merry Wives of Windsor*), rallying her troupe."
    ],
    "L'ora di alzar la risata sonora!": [
        "The hour to raise the resonant laughter!",
        [
            {"word": "L'ora", "lemma": "ora", "pos": "noun", "meaning": "the hour / time"},
            {"word": "alzar", "lemma": "alzare", "pos": "verb", "meaning": "to raise / strike up (apocope of alzare)"},
            {"word": "risata", "lemma": "risata", "pos": "noun", "meaning": "laughter / burst of laughter"},
            {"word": "sonora", "lemma": "sonoro", "pos": "adjective", "meaning": "sonorous / ringing / resonant"}
        ],
        "Alice's sparkling aria celebrates shared female laughter as a triumphant and cleansing musical force."
    ],
    "L'alta risata che scoppia, che scherza,": [
        "The loud laughter that bursts, that teases,",
        [
            {"word": "alta", "lemma": "alto", "pos": "adjective", "meaning": "loud / ringing / high"},
            {"word": "risata", "lemma": "risata", "pos": "noun", "meaning": "laughter"},
            {"word": "scoppia", "lemma": "scoppiare", "pos": "verb", "meaning": "bursts out / explodes (3rd sing. present)"},
            {"word": "scherza", "lemma": "scherzare", "pos": "verb", "meaning": "jokes / teases / plays (3rd sing. present)"}
        ],
        "The verbs 'scoppia' and 'scherza' capture the sudden, bubbling energy of collective laughter."
    ],
    "che sfolgora, armata": [
        "that blazes, armed",
        [
            {"word": "sfolgora", "lemma": "sfolgorare", "pos": "verb", "meaning": "flashes / blazes / shines radiantly (3rd sing. present)"},
            {"word": "armata", "lemma": "armare", "pos": "verb", "meaning": "armed (past participle feminine singular)"}
        ],
        "Alice personifies laughter as a radiant, armed warrior fighting against male vanity."
    ],
    "di dardi e di sferza!": [
        "with arrows and with scourge!",
        [
            {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "with / of"},
            {"word": "dardi", "lemma": "dardo", "pos": "noun", "meaning": "darts / arrows (plural)"},
            {"word": "sferza", "lemma": "sferza", "pos": "noun", "meaning": "whip / scourge / lash"}
        ],
        "Laughter is metaphorically armed with piercing darts ('dardi') and chastising whips ('sferza') of satire."
    ],
    "Gaie comari, festosa brigata!": [
        "Merry wives, festive company!",
        [
            {"word": "Gaie", "lemma": "gaio", "pos": "adjective", "meaning": "merry / cheerful (feminine plural)"},
            {"word": "comari", "lemma": "comare", "pos": "noun", "meaning": "wives / gossips"},
            {"word": "festosa", "lemma": "festoso", "pos": "adjective", "meaning": "festive / joyous"},
            {"word": "brigata", "lemma": "brigata", "pos": "noun", "meaning": "brigade / company / troop"}
        ],
        "Alice toasts her fellow women as a celebratory league ('festosa brigata')."
    ],
    "Sul lieto viso": [
        "On the glad face",
        [
            {"word": "Sul", "lemma": "su", "pos": "preposition", "meaning": "on the / upon the (articulated preposition su + il)"},
            {"word": "lieto", "lemma": "lieto", "pos": "adjective", "meaning": "glad / happy / cheerful"},
            {"word": "viso", "lemma": "viso", "pos": "noun", "meaning": "face / countenance"}
        ],
        "Alice sings of open, joyous expressions in contrast to sour deception."
    ],
    "spunti il sorriso,": [
        "may the smile dawn,",
        [
            {"word": "spunti", "lemma": "spuntare", "pos": "verb", "meaning": "may it dawn / sprout / appear (3rd sing. present subjunctive)"},
            {"word": "il", "lemma": "il", "pos": "particle", "meaning": "the (masculine singular definite article)"},
            {"word": "sorriso", "lemma": "sorriso", "pos": "noun", "meaning": "smile"}
        ],
        "Optative subjunctive ('spunti'): calling forth radiant smiles on every face."
    ],
    "splenda del riso": [
        "may shine with laughter",
        [
            {"word": "splenda", "lemma": "splendere", "pos": "verb", "meaning": "may it shine / gleam (3rd sing. present subjunctive)"},
            {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the / with (articulated preposition di + il)"},
            {"word": "riso", "lemma": "riso", "pos": "noun", "meaning": "laughter / mirth"}
        ],
        "Parallel subjunctive ('splenda'), invoking the luminous sparkle of laughter."
    ],
    "l'acuto fulgor!": [
        "the sharp brilliance!",
        [
            {"word": "acuto", "lemma": "acuto", "pos": "adjective", "meaning": "sharp / keen / piercing"},
            {"word": "fulgor", "lemma": "fulgore", "pos": "noun", "meaning": "brilliance / radiant glow (apocope of fulgore)"}
        ],
        "The subject of 'splenda': 'l'acuto fulgor' represents the incisive brilliance of female wit."
    ],
    "Favilla incendiaria": [
        "Incendiary spark",
        [
            {"word": "Favilla", "lemma": "favilla", "pos": "noun", "meaning": "spark / ember"},
            {"word": "incendiaria", "lemma": "incendiario", "pos": "adjective", "meaning": "incendiary / flame-bearing (feminine singular)"}
        ],
        "Laughter is envisioned as a spark ('favilla') that ignites irrepressible collective joy."
    ],
    "di gioia nell'aria,": [
        "of joy in the air,",
        [
            {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
            {"word": "gioia", "lemma": "gioia", "pos": "noun", "meaning": "joy / gladness"},
            {"word": "nell'aria", "lemma": "aria", "pos": "noun", "meaning": "in the air (articulated preposition in + l'aria)"}
        ],
        "The atmospheric spreading of their carefree happiness."
    ],
    "di gioia nel cor.": [
        "of joy in the heart.",
        [
            {"word": "gioia", "lemma": "gioia", "pos": "noun", "meaning": "joy"},
            {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "in the (articulated preposition in + il)"},
            {"word": "cor", "lemma": "cuore", "pos": "noun", "meaning": "heart (poetic apocope of cuore)"}
        ],
        "Alice concludes her lyric phrase with the internal resonance of joy in the heart ('cor')."
    ],
    "A noi!": [
        "To work!",
        [
            {"word": "A", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "noi", "lemma": "noi", "pos": "pronoun", "meaning": "us"},
            {"word": "a noi", "lemma": "a noi", "pos": "idiom", "meaning": "now to us / to work / let's get down to business"}
        ],
        "Alice's brisk call to action snapping the group back from song to tactical execution."
    ],
    "Tu la parte": [
        "You the part",
        [
            {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
            {"word": "la", "lemma": "il", "pos": "particle", "meaning": "the (definite article feminine)"},
            {"word": "parte", "lemma": "parte", "pos": "noun", "meaning": "part / role"}
        ],
        "Alice begins assigning roles, leading directly into 'farai che ti spetta'."
    ],
    "farai che ti spetta.": [
        "will play that belongs to you.",
        [
            {"word": "farai", "lemma": "fare", "pos": "verb", "meaning": "you will do / you will play (2nd sing. future)"},
            {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which"},
            {"word": "ti spetta", "lemma": "spettare", "pos": "verb", "meaning": "falls to you / belongs to you (clitic ti + 3rd sing. present)"}
        ],
        "Alice insists that each woman stick strictly to her assigned theatrical cue."
    ],
    "Tu corri il tuo rischio": [
        "You run your risk",
        [
            {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
            {"word": "corri", "lemma": "correre", "pos": "verb", "meaning": "you run / face (2nd sing. present)"},
            {"word": "correre il rischio", "lemma": "correre il rischio", "pos": "idiom", "meaning": "to run the risk"},
            {"word": "tuo", "lemma": "tuo", "pos": "adjective", "meaning": "your (possessive adjective)"},
            {"word": "rischio", "lemma": "rischio", "pos": "noun", "meaning": "risk / danger"}
        ],
        "Meg notes that Alice takes on the greatest hazard by facing Falstaff alone."
    ],
    "col grosso compar.": [
        "with the fat comrade.",
        [
            {"word": "col", "lemma": "con", "pos": "preposition", "meaning": "with the (articulated preposition con + il)"},
            {"word": "grosso", "lemma": "grosso", "pos": "adjective", "meaning": "fat / stout / bulky"},
            {"word": "compar", "lemma": "compare", "pos": "noun", "meaning": "comrade / fellow / gossip (apocope of compare)"}
        ],
        "Meg playfully mocks Falstaff as their corpulent male counterpart ('il grosso compar')."
    ],
    "Io sto alla vedetta.": [
        "I stand on lookout.",
        [
            {"word": "Io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
            {"word": "sto", "lemma": "stare", "pos": "verb", "meaning": "I stand / stay (1st sing. present)"},
            {"word": "alla vedetta", "lemma": "stare alla vedetta", "pos": "idiom", "meaning": "to stand watch / keep lookout"},
            {"word": "vedetta", "lemma": "vedetta", "pos": "noun", "meaning": "lookout / watchtower / sentinel"}
        ],
        "Quickly volunteers for the lookout post outside the door to warn of Ford's or Falstaff's movements."
    ],
    "Se sbagli ti fischio.": [
        "If you err I will whistle to you.",
        [
            {"word": "Se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
            {"word": "sbagli", "lemma": "sbagliare", "pos": "verb", "meaning": "you make a mistake / err (2nd sing. present)"},
            {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "to you (dative clitic)"},
            {"word": "fischio", "lemma": "fischiare", "pos": "verb", "meaning": "I whistle (1st sing. present)"}
        ],
        "Alice establishes a whistling audio cue in case Quickly misses her timing."
    ],
    "Io resto in disparte": [
        "I stay aside",
        [
            {"word": "Io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
            {"word": "resto", "lemma": "restare", "pos": "verb", "meaning": "I stay / remain (1st sing. present)"},
            {"word": "in disparte", "lemma": "in disparte", "pos": "idiom", "meaning": "aside / out of sight / in the background"}
        ],
        "Nannetta promises to stay hidden out of sight ('in disparte')."
    ],
    "sull'uscio a spiar.": [
        "at the doorway to spy.",
        [
            {"word": "sull'uscio", "lemma": "uscio", "pos": "noun", "meaning": "at the doorway / door (articulated preposition su + l'uscio)"},
            {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "spiar", "lemma": "spiare", "pos": "verb", "meaning": "to spy / watch secretively (apocope of spiare)"}
        ],
        "Nannetta will keep watch by the threshold ('uscio') to track Falstaff's approach."
    ],
    "E mostreremo all'uomo che l'allegria": [
        "And we will show man that merriment",
        [
            {"word": "mostreremo", "lemma": "mostrare", "pos": "verb", "meaning": "we will show / prove (1st plur. future)"},
            {"word": "all'uomo", "lemma": "uomo", "pos": "noun", "meaning": "to man (articulated preposition a + l'uomo)"},
            {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"},
            {"word": "l'allegria", "lemma": "allegria", "pos": "noun", "meaning": "merriment / cheerfulness / gaiety"}
        ],
        "Alice asserts the opera's moral thesis: female gaiety is noble and compatible with total virtue."
    ],
    "d'oneste donne ogni onestà comporta.": [
        "of virtuous women comports all virtue.",
        [
            {"word": "d'oneste", "lemma": "onesto", "pos": "adjective", "meaning": "virtuous / honorable (feminine plural)"},
            {"word": "donne", "lemma": "donna", "pos": "noun", "meaning": "women"},
            {"word": "ogni", "lemma": "ogni", "pos": "adjective", "meaning": "every / all"},
            {"word": "onestà", "lemma": "onestà", "pos": "noun", "meaning": "virtue / honesty / modesty"},
            {"word": "comporta", "lemma": "comportare", "pos": "verb", "meaning": "comports / contains / implies (3rd sing. present)"}
        ],
        "The syntactic completion of Alice's moral maxim: merry wives remain steadfastly honest and pure."
    ],
    "Fra le femmine quella è la più ria": [
        "Among women she is the most wicked",
        [
            {"word": "Fra", "lemma": "fra", "pos": "preposition", "meaning": "among / between"},
            {"word": "femmine", "lemma": "femmina", "pos": "noun", "meaning": "women / females"},
            {"word": "quella", "lemma": "quello", "pos": "pronoun", "meaning": "that one / she"},
            {"word": "ria", "lemma": "reo", "pos": "adjective", "meaning": "wicked / guilty / malicious (feminine singular)"}
        ],
        "Alice contrasts genuine merry honesty with female hypocrisy."
    ],
    "che fa da gattamorta.": [
        "who plays the demure hypocrite.",
        [
            {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "who / that"},
            {"word": "fa da gattamorta", "lemma": "fare da gattamorta", "pos": "idiom", "meaning": "to play the demure hypocrite / feign innocence / play possum"},
            {"word": "gattamorta", "lemma": "gattamorta", "pos": "noun", "meaning": "hypocrite / person feigning harmlessness"}
        ],
        "The colloquial idiom 'fare la gatta morta' / 'fare da gattamorta' describes women who feign meek innocence while concealing deceit."
    ],
    "Eccolo! È lui!": [
        "Here he is! It is he!",
        [
            {"word": "Eccolo", "lemma": "ecco", "pos": "adverb", "meaning": "here he is! (presentative ecco + clitic lo)"},
            {"word": "È", "lemma": "essere", "pos": "verb", "meaning": "he is / it is (3rd sing. present)"},
            {"word": "lui", "lemma": "lui", "pos": "pronoun", "meaning": "he / him"}
        ],
        "Quickly's frantic interruption breaks Alice's speech as Falstaff reaches the threshold."
    ],
    "Dov'è?": [
        "Where is he?",
        [
            {"word": "Dov'è", "lemma": "dov'è", "pos": "adverb", "meaning": "where is he? (elision dove + è)"},
            {"word": "dove", "lemma": "dove", "pos": "adverb", "meaning": "where"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"}
        ],
        "Alice asks for Falstaff's exact whereabouts so they can execute their hiding maneuvers."
    ],
    "Poco discosto.": [
        "A short distance away.",
        [
            {"word": "Poco", "lemma": "poco", "pos": "adverb", "meaning": "little / slightly / not very"},
            {"word": "discosto", "lemma": "discosto", "pos": "adjective", "meaning": "distant / away / removed"}
        ],
        "Quickly signals that Falstaff is mere paces away on the staircase."
    ],
    "Presto.": [
        "Quickly.",
        [
            {"word": "Presto", "lemma": "presto", "pos": "adverb", "meaning": "quickly / fast / soon"},
            {"word": "presto", "lemma": "presto", "pos": "adjective", "meaning": "quick / prompt / early"}
        ],
        "Nannetta urges everyone to hurry into their designated hiding spots."
    ],
    "A salir s'avvia.": [
        "He is setting out to climb.",
        [
            {"word": "A salir", "lemma": "salire", "pos": "verb", "meaning": "to climb / ascend (preposition a + apocope salir)"},
            {"word": "s'avvia", "lemma": "avviarsi", "pos": "verb", "meaning": "he sets off / starts his way (reflexive 3rd sing. present)"}
        ],
        "Quickly warns that Falstaff is already walking up the stairs."
    ],
    "Tu di qua. Tu di là!": [
        "You this way. You that way!",
        [
            {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
            {"word": "di qua", "lemma": "di qua", "pos": "adverb", "meaning": "this way / over here"},
            {"word": "di là", "lemma": "di là", "pos": "adverb", "meaning": "that way / over there"}
        ],
        "Alice directs the women to separate hiding places on opposite sides of the room."
    ],
    "Al posto!": [
        "To your places!",
        [
            {"word": "Al", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + il)"},
            {"word": "posto", "lemma": "posto", "pos": "noun", "meaning": "place / post / station"}
        ],
        "Nannetta's final hushed command as everyone darts into position."
    ],
    "Alice sola. Poi Falstaff. Poi Quickly. Poi Meg.": [
        "Alice alone. Then Falstaff. Then Quickly. Then Meg.",
        [
            {"word": "sola", "lemma": "solo", "pos": "adjective", "meaning": "alone / solitary (feminine singular)"},
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / next / afterward"},
            {"word": "Falstaff", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff (proper noun)"},
            {"word": "Quickly", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (proper noun)"},
            {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper noun)"}
        ],
        "Meg rapidly whispers the exact sequence of appearances for their comedic trap before slipping out of sight."
    ],
    "Alfin t'ho colto,": [
        "At last I have caught you,",
        [
            {"word": "Alfin", "lemma": "alfine", "pos": "adverb", "meaning": "at last / finally (apocope of alfine)"},
            {"word": "t'ho colto", "lemma": "cogliere", "pos": "verb", "meaning": "I have caught you / plucked you (clitic ti + ho colto)"},
            {"word": "cogliere", "lemma": "cogliere", "pos": "verb", "meaning": "to catch / seize / pluck"}
        ],
        "Falstaff enters with pompous bravado, boasting that he has trapped his prize ('t'ho colto')."
    ],
    "raggiante fior,": [
        "radiant flower,",
        [
            {"word": "raggiante", "lemma": "raggiante", "pos": "adjective", "meaning": "radiant / beaming / glowing"},
            {"word": "fior", "lemma": "fiore", "pos": "noun", "meaning": "flower (poetic apocope of fiore)"}
        ],
        "Sir John flatters Alice with chivalric floral metaphors ('raggiante fior')."
    ],
    "t'ho colto!": [
        "I have caught you!",
        [
            {"word": "t'ho colto", "lemma": "cogliere", "pos": "verb", "meaning": "I have caught you (clitic ti + ho colto)"},
            {"word": "cogliere", "lemma": "cogliere", "pos": "verb", "meaning": "to catch / pluck / seize"}
        ],
        "Falstaff repeats his boastful conquest exclamation with triumphant relish."
    ],
    "Ed or potrò morir felice.": [
        "And now I shall be able to die happy.",
        [
            {"word": "or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocope of ora)"},
            {"word": "potrò", "lemma": "potere", "pos": "verb", "meaning": "I will be able (1st sing. future)"},
            {"word": "morir", "lemma": "morire", "pos": "verb", "meaning": "to die (apocope of morire)"},
            {"word": "felice", "lemma": "felice", "pos": "adjective", "meaning": "happy / blessed"}
        ],
        "Falstaff comically employs high-flown romantic melodrama ('potrò morir felice') to seduce Alice."
    ],
    "Avrò vissuto molto": [
        "I will have lived much",
        [
            {"word": "Avrò vissuto", "lemma": "vivere", "pos": "verb", "meaning": "I will have lived (future perfect 1st sing.)"},
            {"word": "molto", "lemma": "molto", "pos": "adverb", "meaning": "much / long / greatly"}
        ],
        "Falstaff claims that this romantic conquest validates his entire existence."
    ],
    "dopo quest'ora di beato amor.": [
        "after this hour of blessed love.",
        [
            {"word": "dopo", "lemma": "dopo", "pos": "preposition", "meaning": "after"},
            {"word": "quest'ora", "lemma": "ora", "pos": "noun", "meaning": "this hour (elision of questa ora)"},
            {"word": "beato", "lemma": "beato", "pos": "adjective", "meaning": "blessed / blissful"},
            {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (poetic apocope of amore)"}
        ],
        "Falstaff concludes his grand entrance period with poetic apocope 'amor', imagining celestial bliss."
    ],
    "O soave sir John!": [
        "O gentle Sir John!",
        [
            {"word": "O", "lemma": "o", "pos": "interjection", "meaning": "oh / O (vocative interjection)"},
            {"word": "soave", "lemma": "soave", "pos": "adjective", "meaning": "gentle / sweet / suave"},
            {"word": "sir", "lemma": "sir", "pos": "noun", "meaning": "Sir (English title)"},
            {"word": "John", "lemma": "John", "pos": "noun", "meaning": "John (proper noun)"}
        ],
        "Alice feigns swooning modesty ('soave sir John') to entice Falstaff deeper into his own conceit."
    ],
    "Mia bella Alice!": [
        "My beautiful Alice!",
        [
            {"word": "Mia", "lemma": "mio", "pos": "adjective", "meaning": "my (possessive adjective feminine singular)"},
            {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / lovely / fair"},
            {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper noun)"}
        ],
        "Falstaff preens with lordly intimacy, addressing Alice as his prize."
    ],
    "Non so far lo svenevole,": [
        "I do not know how to play the languishing gallant,",
        [
            {"word": "so", "lemma": "sapere", "pos": "verb", "meaning": "I know / know how to (1st sing. present)"},
            {"word": "far", "lemma": "fare", "pos": "verb", "meaning": "to do / make (apocope of fare)"},
            {"word": "fare lo svenevole", "lemma": "fare lo svenevole", "pos": "idiom", "meaning": "to play the affected gallant / act the swooning lover"},
            {"word": "svenevole", "lemma": "svenevole", "pos": "adjective", "meaning": "languishing / affected / mawkish"}
        ],
        "Falstaff ironically boasts that he is no effeminate, affected gallant ('non so far lo svenevole')."
    ],
    "né lusingar, né usar frase fiorita,": [
        "nor flatter, nor use flowery phrase,",
        [
            {"word": "né", "lemma": "né", "pos": "conjunction", "meaning": "nor / neither"},
            {"word": "lusingar", "lemma": "lusingare", "pos": "verb", "meaning": "to flatter (apocope of lusingare)"},
            {"word": "usar", "lemma": "usare", "pos": "verb", "meaning": "to use (apocope of usare)"},
            {"word": "frase", "lemma": "frase", "pos": "noun", "meaning": "phrase / speech"},
            {"word": "fiorita", "lemma": "fiorito", "pos": "adjective", "meaning": "flowery / ornate"}
        ],
        "Falstaff claims to disdain ornate flattery even as he speaks in exquisitely rhymed, flowery hendecasyllables."
    ],
    "ma dirò tosto un mio pensier colpevole.": [
        "but I shall speak right away a guilty thought of mine.",
        [
            {"word": "ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
            {"word": "dirò", "lemma": "dire", "pos": "verb", "meaning": "I will say / speak (1st sing. future)"},
            {"word": "tosto", "lemma": "tosto", "pos": "adverb", "meaning": "soon / quickly / right away"},
            {"word": "pensier", "lemma": "pensiero", "pos": "noun", "meaning": "thought / idea (apocope of pensiero)"},
            {"word": "colpevole", "lemma": "colpevole", "pos": "adjective", "meaning": "guilty / sinful"}
        ],
        "Falstaff flirtatiously hints at a wicked confession ('pensier colpevole')—his wish that Ford were dead."
    ],
    "Cioè?": [
        "Namely?",
        [
            {"word": "Cioè", "lemma": "cioè", "pos": "conjunction", "meaning": "that is to say / namely / meaning?"},
            {"word": "vale a dire", "lemma": "vale a dire", "pos": "idiom", "meaning": "that is to say / in other words"}
        ],
        "Alice feigns innocent curiosity, playing along to prompt Falstaff to utter his scandalous fantasy."
    ]
}

if __name__ == "__main__":
    with open("scripts/falstaff_act2_sc2_partA.json") as f:
        src = json.load(f)
    src_lines = [item["original"] for item in src]

    print(f"Source lines count: {len(src_lines)}")
    print(f"Data keys count: {len(data)}")

    missing = [l for l in src_lines if l not in data]
    extra = [l for l in data if l not in src_lines]

    if missing:
        print(f"MISSING ({len(missing)}): {missing}")
    if extra:
        print(f"EXTRA ({len(extra)}): {extra}")

    # Validate schema, POS tags, and capitalization
    for line, entry in data.items():
        assert len(entry) == 3, f"Entry for '{line}' must have length 3"
        literal, tokens, note = entry
        assert isinstance(literal, str) and literal, f"Empty literal for '{line}'"
        assert isinstance(tokens, list) and 1 <= len(tokens) <= 6, f"Invalid token count {len(tokens)} for '{line}'"
        assert note is None or isinstance(note, str), f"Invalid note for '{line}'"

        # Capitalization check
        first_char_orig = line[0]
        # Ignore quotes or guillemets if any
        c_orig = line.lstrip("«\"'")[0] if line.lstrip("«\"'") else line[0]
        c_lit = literal.lstrip("«\"'")[0] if literal.lstrip("«\"'") else literal[0]
        if c_orig.isupper():
            assert c_lit.isupper(), f"Capitalization mismatch for line: '{line}' -> literal '{literal}'"

        for tok in tokens:
            assert "word" in tok and "lemma" in tok and "pos" in tok and "meaning" in tok, f"Missing key in token: {tok}"
            assert tok["pos"] in ALLOWED_POS, f"Invalid POS '{tok['pos']}' in token {tok} for line '{line}'"

    # Write pure JSON output
    out_path = "scripts/falstaff_curated_a2_sc2_partA.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Successfully generated {out_path} with {len(data)} lines.")

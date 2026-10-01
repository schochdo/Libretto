import json

data = {}

# 0: Re dei panciuti!
data["Re dei panciuti!"] = [
    "King of the pot-bellied!",
    [
        {"word": "Re", "lemma": "re", "pos": "noun", "meaning": "king"},
        {"word": "dei", "lemma": "di", "pos": "preposition", "meaning": "of the (di + i)"},
        {"word": "panciuti", "lemma": "panciuto", "pos": "adjective", "meaning": "pot-bellied / paunchy (substantive plural)"}
    ],
    "Bardolfo taunts the pinned-down Falstaff, mocking his immense girth as king of the pot-bellied."
]

# 1: Va' via, tu puti.
data["Va' via, tu puti."] = [
    "Go away, you stink.",
    [
        {"word": "Va'", "lemma": "andare", "pos": "verb", "meaning": "go (2nd sing. imperative with apocope apostrophe)"},
        {"word": "via", "lemma": "via", "pos": "adverb", "meaning": "away"},
        {"word": "tu", "lemma": "tu", "pos": "pronoun", "meaning": "you (2nd sing. subject pronoun)"},
        {"word": "puti", "lemma": "putire", "pos": "verb", "meaning": "stink / reek (2nd sing. present)"}
    ],
    "Falstaff recoils from the tormentor leaning over him, complaining of a foul smell. 'Va'' is the truncated imperative of 'andare'; 'puti' is the second-person singular present of 'putire' (to stink)."
]

# 2: Re dei cornuti!
data["Re dei cornuti!"] = [
    "King of the cuckolds!",
    [
        {"word": "Re", "lemma": "re", "pos": "noun", "meaning": "king"},
        {"word": "dei", "lemma": "di", "pos": "preposition", "meaning": "of the (di + i)"},
        {"word": "cornuti", "lemma": "cornuto", "pos": "noun", "meaning": "cuckolds / horned ones"}
    ],
    "Bardolfo continues taunting Falstaff with the traditional insult of the horned cuckold, echoing the stag disguise Falstaff was forced to wear."
]

# 3: Furfanteria!
data["Furfanteria!"] = [
    "Roguery!",
    [
        {"word": "Furfanteria", "lemma": "furfanteria", "pos": "noun", "meaning": "roguery / knavery / scoundrelism"}
    ],
    "The chorus shouts epithets denouncing Falstaff's knavery and deceitful tricks."
]

# 4: Ahi! Così sia.
data["Ahi! Così sia."] = [
    "Ah! So be it.",
    [
        {"word": "Ahi", "lemma": "ahi", "pos": "interjection", "meaning": "ah / alas / ouch"},
        {"word": "Così", "lemma": "così", "pos": "adverb", "meaning": "so / thus"},
        {"word": "sia", "lemma": "essere", "pos": "verb", "meaning": "let it be / may it be (3rd sing. present subjunctive)"}
    ],
    "Falstaff groans in pain and resignation ('Così sia' - Amen / So be it) as the spirits torment him."
]

# 5: Gagliofferia!
data["Gagliofferia!"] = [
    "Scoundrelism!",
    [
        {"word": "Gagliofferia", "lemma": "gagliofferia", "pos": "noun", "meaning": "scoundrelism / vulgar knavery / loutish behavior"}
    ],
    "The chorus continues its rhythmic insults, accusing Falstaff of clumsy and insolent villainy ('gagliofferia', from 'gaglioffo')."
]

# 6: Ed or che il diavol ti porti via!
data["Ed or che il diavol ti porti via!"] = [
    "And now may the devil carry you away!",
    [
        {"word": "Ed", "lemma": "e", "pos": "conjunction", "meaning": "and (euphonic form before vowel)"},
        {"word": "or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocope of ora)"},
        {"word": "diavol", "lemma": "diavolo", "pos": "noun", "meaning": "devil (apocope of diavolo)"},
        {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (2nd sing. direct object clitic)"},
        {"word": "porti via", "lemma": "portare via", "pos": "verb", "meaning": "carry away / take away (3rd sing. present subjunctive)"}
    ],
    "Bardolfo leans in close over Falstaff to deliver this curse, using the optative subjunctive 'porti via'. His close proximity allows Falstaff to smell his breath and see his unmistakable nose."
]

# 7: Atto terzo Falstaff
data["Atto terzo Falstaff"] = [
    "Act Three Falstaff",
    [
        {"word": "Atto", "lemma": "atto", "pos": "noun", "meaning": "act (dramatic division)"},
        {"word": "terzo", "lemma": "terzo", "pos": "adjective", "meaning": "third"},
        {"word": "Falstaff", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff"}
    ],
    "Score and libretto structural header marking Act III of Falstaff, appearing here at the transition to Falstaff's unmasking of Bardolfo."
]

# 8: Nitro! Catrame e solfo!
data["Nitro! Catrame e solfo!"] = [
    "Niter! Tar and sulfur!",
    [
        {"word": "Nitro", "lemma": "nitro", "pos": "noun", "meaning": "niter / saltpeter"},
        {"word": "Catrame", "lemma": "catrame", "pos": "noun", "meaning": "tar / pitch"},
        {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
        {"word": "solfo", "lemma": "solfo", "pos": "noun", "meaning": "sulfur / brimstone"}
    ],
    "Falstaff immediately detects the chemical, brimstone-like stench of Bardolfo's alcoholic breath, listing the volatile ingredients of gunpowder and brimstone."
]

# 9: Riconosco Bardolfo!
data["Riconosco Bardolfo!"] = [
    "I recognize Bardolfo!",
    [
        {"word": "Riconosco", "lemma": "riconoscere", "pos": "verb", "meaning": "I recognize (1st sing. present)"},
        {"word": "Bardolfo", "lemma": "Bardolfo", "pos": "noun", "meaning": "Bardolfo"}
    ],
    "The turning point of the scene: smelling the foul breath and catching sight of the famous red nose beneath the mask, Falstaff realizes his tormentor is merely his own rogue servant in disguise."
]

# 10: Naso vermiglio!
data["Naso vermiglio!"] = [
    "Vermilion nose!",
    [
        {"word": "Naso", "lemma": "naso", "pos": "noun", "meaning": "nose"},
        {"word": "vermiglio", "lemma": "vermiglio", "pos": "adjective", "meaning": "vermilion / ruby red / fiery"}
    ],
    "Falstaff begins his torrent of Shakespearean invective directed at Bardolfo's legendary red nose, celebrated throughout Henry IV."
]

# 11: Nasobargiglio!
data["Nasobargiglio!"] = [
    "Wattle-nose!",
    [
        {"word": "Nasobargiglio", "lemma": "nasobargiglio", "pos": "noun", "meaning": "wattle-nose / turkey-cock nose"}
    ],
    "A vivid Boito compound neologism combining 'naso' (nose) and 'bargiglio' (the fleshy caruncle or wattle of a rooster or turkey), mocking the bumpy, bulbous shape of Bardolfo's nose."
]

# 12: Puntuta lesina!
data["Puntuta lesina!"] = [
    "Pointed awl!",
    [
        {"word": "Puntuta", "lemma": "puntuto", "pos": "adjective", "meaning": "pointed / sharp"},
        {"word": "lesina", "lemma": "lesina", "pos": "noun", "meaning": "awl / shoemaker's punch"}
    ],
    "Metaphor comparing Bardolfo's sharp, piercing nose to a cobbler's awl ('lesina'), which is also proverbial in Italian for stinginess or narrowness."
]

# 13: Vampa di resina!
data["Vampa di resina!"] = [
    "Blaze of resin!",
    [
        {"word": "Vampa", "lemma": "vampa", "pos": "noun", "meaning": "blaze / flare / burst of flame"},
        {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
        {"word": "resina", "lemma": "resina", "pos": "noun", "meaning": "resin / pitch"}
    ],
    "Falstaff compares the fiery glow of Bardolfo's alcohol-inflamed complexion to resin bursting into flames."
]

# 14: Salamandra! Ignis fatuus! Vecchia alabarda! Stecca
data["Salamandra! Ignis fatuus! Vecchia alabarda! Stecca"] = [
    "Salamander! Ignis fatuus! Old halberd! Stay",
    [
        {"word": "Salamandra", "lemma": "salamandra", "pos": "noun", "meaning": "salamander (mythical creature living in fire)"},
        {"word": "Ignis fatuus", "lemma": "ignis fatuus", "pos": "noun", "meaning": "will-o'-the-wisp (Latin: foolish fire)"},
        {"word": "alabarda", "lemma": "alabarda", "pos": "noun", "meaning": "halberd (pole weapon)"},
        {"word": "Stecca", "lemma": "stecca", "pos": "noun", "meaning": "stay / slat / bone (corset stay or ruler)"}
    ],
    "A barrage of bizarre metaphors: the mythical fire-dwelling salamander, the Latin 'ignis fatuus' (will-o'-the-wisp / marsh-fire, straight from Shakespeare's 1 Henry IV), an old rusty halberd, and a corset stay/measuring slat ('stecca')."
]

# 15: di sartore! Schidion d'inferno! Aringa secca!
data["di sartore! Schidion d'inferno! Aringa secca!"] = [
    "of a tailor! Hell's spit! Dried herring!",
    [
        {"word": "sartore", "lemma": "sartore", "pos": "noun", "meaning": "tailor"},
        {"word": "Schidion", "lemma": "schidione", "pos": "noun", "meaning": "roasting spit / skewer (apocope of schidione)"},
        {"word": "d'inferno", "lemma": "inferno", "pos": "noun", "meaning": "of hell / infernal"},
        {"word": "Aringa", "lemma": "aringa", "pos": "noun", "meaning": "herring"},
        {"word": "secca", "lemma": "secco", "pos": "adjective", "meaning": "dry / dried / desiccated"}
    ],
    "Falstaff completes the insult 'stecca di sartore' (a tailor's bone/flat rule) and adds 'schidion d'inferno' (a spit of hell) and 'aringa secca' (dried/pickled herring), echoing Shakespeare's insults for thin, dried-up knaves."
]

# 16: Vampiro! Basilisco!
data["Vampiro! Basilisco!"] = [
    "Vampire! Basilisk!",
    [
        {"word": "Vampiro", "lemma": "vampiro", "pos": "noun", "meaning": "vampire / bloodsucker"},
        {"word": "Basilisco", "lemma": "basilisco", "pos": "noun", "meaning": "basilisk (legendary serpent whose gaze is lethal)"}
    ],
    "Falstaff denounces Bardolfo as a monstrous parasite (vampire) and a deadly mythical reptile (basilisk)."
]

# 17: Manigoldo! Ladrone!
data["Manigoldo! Ladrone!"] = [
    "Rogue! Thief!",
    [
        {"word": "Manigoldo", "lemma": "manigoldo", "pos": "noun", "meaning": "rogue / scoundrel / executioner"},
        {"word": "Ladrone", "lemma": "ladrone", "pos": "noun", "meaning": "thief / robber / highwayman"}
    ],
    "Direct insults reminding Bardolfo of his true profession as a common thief and ruffian."
]

# 18: Ho detto. E se mentisco
data["Ho detto. E se mentisco"] = [
    "I have spoken. And if I lie",
    [
        {"word": "Ho detto", "lemma": "dire", "pos": "verb", "meaning": "I have spoken / I rest my case (passato prossimo 1st sing.)"},
        {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
        {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
        {"word": "mentisco", "lemma": "mentire", "pos": "verb", "meaning": "I lie (1st sing. present)"}
    ],
    "'Ho detto' is a solemn formula ('dixi' / 'I have spoken'). Falstaff sets up a comical oath in the conditional clause 'se mentisco' (if I am lying)."
]

# 19: voglio che mi si spacchi il cinturone!
data["voglio che mi si spacchi il cinturone!"] = [
    "I want my belt to split open!",
    [
        {"word": "voglio", "lemma": "volere", "pos": "verb", "meaning": "I want (1st sing. present)"},
        {"word": "mi", "lemma": "mi", "pos": "pronoun", "meaning": "on me / for me (dative clitic)"},
        {"word": "si spacchi", "lemma": "spaccarsi", "pos": "verb", "meaning": "burst / split open (3rd sing. present subjunctive)"},
        {"word": "cinturone", "lemma": "cinturone", "pos": "noun", "meaning": "large belt / sword belt (augmentative of cintura)"}
    ],
    "Falstaff swears an oath suited to his vast girth: 'may my belt burst!' ('che mi si spacchi il cinturone', with reflexive/mediopassive subjunctive 'si spacchi' and ethical dative 'mi')."
]

# 20: Bravo!
data["Bravo!"] = [
    "Bravo!",
    [
        {"word": "Bravo", "lemma": "bravo", "pos": "interjection", "meaning": "bravo / well done"}
    ],
    "The crowd and conspirators applaud Falstaff's brilliant recognition of Bardolfo despite the disguise."
]

# 21: Un poco di pausa. Sono stanco.
data["Un poco di pausa. Sono stanco."] = [
    "A little pause. I am tired.",
    [
        {"word": "Un poco", "lemma": "un poco", "pos": "adverb", "meaning": "a little / a bit"},
        {"word": "pausa", "lemma": "pausa", "pos": "noun", "meaning": "pause / rest"},
        {"word": "Sono", "lemma": "essere", "pos": "verb", "meaning": "I am (1st sing. present)"},
        {"word": "stanco", "lemma": "stanco", "pos": "adjective", "meaning": "tired / exhausted"}
    ],
    "Falstaff collapses, catching his breath after the mock exorcism and beating, pleading for a moment of respite."
]

# 22: Vieni, Ti coprirò col velo bianco.
data["Vieni, Ti coprirò col velo bianco."] = [
    "Come, I will cover you with the white veil.",
    [
        {"word": "Vieni", "lemma": "venire", "pos": "verb", "meaning": "come (2nd sing. imperative)"},
        {"word": "Ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (2nd sing. direct object clitic)"},
        {"word": "coprirò", "lemma": "coprire", "pos": "verb", "meaning": "I will cover (1st sing. future)"},
        {"word": "velo", "lemma": "velo", "pos": "noun", "meaning": "veil"},
        {"word": "bianco", "lemma": "bianco", "pos": "adjective", "meaning": "white"}
    ],
    "Mrs. Quickly whispers to Bardolfo, leading him away to be veiled as the 'Queen of the Fairies' for the sham wedding arranged to dupe Dr. Caius."
]

# 23: Ed or, mentre vi passa la scalmana,
data["Ed or, mentre vi passa la scalmana,"] = [
    "And now, while your heat passes off,",
    [
        {"word": "mentre", "lemma": "mentre", "pos": "conjunction", "meaning": "while / as"},
        {"word": "vi", "lemma": "vi", "pos": "pronoun", "meaning": "to you (formal 2nd pers. indirect object clitic)"},
        {"word": "passa", "lemma": "passare", "pos": "verb", "meaning": "passes / subsides (3rd sing. present)"},
        {"word": "scalmana", "lemma": "scalmana", "pos": "noun", "meaning": "overheating / agitation / hot sweat"}
    ],
    "Ford steps forward to gloat over the exhausted knight. 'Scalmana' refers to feverish heat or agitation caused by violent exertion."
]

# 24: sir John, dite: il cornuto chi è?
data["sir John, dite: il cornuto chi è?"] = [
    "sir John, say: who is the cuckold?",
    [
        {"word": "sir", "lemma": "sir", "pos": "noun", "meaning": "Sir"},
        {"word": "dite", "lemma": "dire", "pos": "verb", "meaning": "tell / say (2nd pers. plur./formal imperative)"},
        {"word": "cornuto", "lemma": "cornuto", "pos": "noun", "meaning": "cuckold / horned one"},
        {"word": "chi", "lemma": "chi", "pos": "pronoun", "meaning": "who (interrogative pronoun)"},
        {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is (3rd sing. present)"}
    ],
    "Ford throws Falstaff's earlier boasting in Act II back in his face, asking who turned out to be the real horned victim."
]

# 25: Chi è?
data["Chi è?"] = [
    "Who is it?",
    [
        {"word": "Chi", "lemma": "chi", "pos": "pronoun", "meaning": "who"},
        {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"}
    ],
    "Alice and Meg chime in gleefully to join the mocking interrogation of Falstaff."
]

# 26: Vi siete fatto muto?
data["Vi siete fatto muto?"] = [
    "Have you become mute?",
    [
        {"word": "Vi siete fatto", "lemma": "farsi", "pos": "verb", "meaning": "have you become / made yourself (passato prossimo 2nd pers. formal/plur.)"},
        {"word": "muto", "lemma": "muto", "pos": "adjective", "meaning": "mute / speechless / dumb"}
    ],
    "Alice teases Falstaff about his sudden loss of his usual eloquent bluster. 'Farsi' + adjective expresses becoming or turning into."
]

# 27: Caro signor Fontana!
data["Caro signor Fontana!"] = [
    "Dear Mr. Fontana!",
    [
        {"word": "Caro", "lemma": "caro", "pos": "adjective", "meaning": "dear"},
        {"word": "signor", "lemma": "signore", "pos": "noun", "meaning": "Mister / Master (apocope of signore)"},
        {"word": "Fontana", "lemma": "Fontana", "pos": "noun", "meaning": "Fontana (Brook / Ford's alias)"}
    ],
    "Falstaff still believes Ford is 'Signor Fontana', the wealthy patron who paid him to seduce Mrs. Ford."
]

# 28: Sbagliate nel saluto.
data["Sbagliate nel saluto."] = [
    "You are mistaken in the greeting.",
    [
        {"word": "Sbagliate", "lemma": "sbagliare", "pos": "verb", "meaning": "you are mistaken / you err (2nd pers. formal/plur. present)"},
        {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "in the (articulated preposition in + il)"},
        {"word": "saluto", "lemma": "saluto", "pos": "noun", "meaning": "greeting / salutation"}
    ],
    "Alice corrects Falstaff, preparing the grand revelation of her husband's true identity."
]

# 29: Questi è Ford, mio marito.
data["Questi è Ford, mio marito."] = [
    "This is Ford, my husband.",
    [
        {"word": "Questi", "lemma": "questi", "pos": "pronoun", "meaning": "this man (demonstrative pronoun for persons)"},
        {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
        {"word": "Ford", "lemma": "Ford", "pos": "noun", "meaning": "Ford"},
        {"word": "marito", "lemma": "marito", "pos": "noun", "meaning": "husband"}
    ],
    "Alice unmasks Ford's double identity. The demonstrative pronoun 'questi' is used substantively in literary Italian for a male person near the speaker."
]

# 30: Cavaliero,
data["Cavaliero,"] = [
    "Knight,",
    [
        {"word": "Cavaliero", "lemma": "cavaliere", "pos": "noun", "meaning": "knight / cavalier (archaic/poetic form of cavaliere)"}
    ],
    "Mrs. Quickly addresses Falstaff with mock-solemn courtesy before unleashing a barrage of insults."
]

# 31: voi credeste due donne così grulle,
data["voi credeste due donne così grulle,"] = [
    "you believed two women so silly,",
    [
        {"word": "credeste", "lemma": "credere", "pos": "verb", "meaning": "you believed (passato remoto 2nd pers. plur.)"},
        {"word": "due", "lemma": "due", "pos": "adjective", "meaning": "two"},
        {"word": "donne", "lemma": "donna", "pos": "noun", "meaning": "women"},
        {"word": "così", "lemma": "così", "pos": "adverb", "meaning": "so"},
        {"word": "grulle", "lemma": "grullo", "pos": "adjective", "meaning": "foolish / silly / gullible (Tuscan)"}
    ],
    "Quickly uses the Tuscan adjective 'grullo' (foolish, gullible), questioning Falstaff's absurd conceit."
]

# 32: così citrulle,
data["così citrulle,"] = [
    "so blockheaded,",
    [
        {"word": "così", "lemma": "così", "pos": "adverb", "meaning": "so"},
        {"word": "citrulle", "lemma": "citrullo", "pos": "adjective", "meaning": "blockheaded / doltish / simple-minded"}
    ],
    "Continuation of Quickly's speech: 'citrullo' is a classic Italian term of comical disparagement for a simpleton or blockhead."
]

# 33: da darsi anima e corpo all'avversiero,
data["da darsi anima e corpo all'avversiero,"] = [
    "as to give themselves body and soul to the adversary,",
    [
        {"word": "darsi", "lemma": "darsi", "pos": "verb", "meaning": "to give oneself / surrender oneself (reflexive infinitive)"},
        {"word": "anima", "lemma": "anima", "pos": "noun", "meaning": "soul"},
        {"word": "corpo", "lemma": "corpo", "pos": "noun", "meaning": "body"},
        {"word": "all'avversiero", "lemma": "avversiero", "pos": "noun", "meaning": "to the adversary / devil (archaic Italian for the Devil)"}
    ],
    "Consecutive clause ('da' + infinitive). 'L'avversiero' is an archaic Italian literary designation for Satan/the Devil ('the adversary')."
]

# 34: per un uom vecchio, sudicio ed obeso...
data["per un uom vecchio, sudicio ed obeso..."] = [
    "for a man old, filthy, and obese...",
    [
        {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
        {"word": "vecchio", "lemma": "vecchio", "pos": "adjective", "meaning": "old"},
        {"word": "sudicio", "lemma": "sudicio", "pos": "adjective", "meaning": "dirty / filthy / foul"},
        {"word": "obeso", "lemma": "obeso", "pos": "adjective", "meaning": "obese / fat"}
    ],
    "Quickly ruthlessly enumerates Falstaff's physical flaws with three devastating adjectives."
]

# 35: Con quella testa calva...
data["Con quella testa calva..."] = [
    "With that bald head...",
    [
        {"word": "testa", "lemma": "testa", "pos": "noun", "meaning": "head"},
        {"word": "calva", "lemma": "calvo", "pos": "adjective", "meaning": "bald"}
    ],
    "Meg and Quickly tag-team to pile on physical mockery, pointing out Falstaff's bald pate."
]

# 36: E con quel peso!
data["E con quel peso!"] = [
    "And with that weight!",
    [
        {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
        {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
        {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
        {"word": "peso", "lemma": "peso", "pos": "noun", "meaning": "weight / bulk"}
    ],
    "The women unite in a final punchline about Falstaff's staggering weight."
]

# 37: Parlano chiaro.
data["Parlano chiaro."] = [
    "They speak plainly.",
    [
        {"word": "Parlano", "lemma": "parlare", "pos": "verb", "meaning": "they speak (3rd pers. plur. present)"},
        {"word": "chiaro", "lemma": "chiaro", "pos": "adverb", "meaning": "clearly / plainly"}
    ],
    "Ford relishes the women's bluntness, noting that their rejection of Falstaff could not be clearer."
]

# 38: Incomincio ad accorgermi
data["Incomincio ad accorgermi"] = [
    "I begin to realize",
    [
        {"word": "Incomincio", "lemma": "incominciare", "pos": "verb", "meaning": "I begin / start (1st sing. present)"},
        {"word": "accorgermi", "lemma": "accorgersi", "pos": "verb", "meaning": "to realize / notice (reflexive infinitive with 1st sing. clitic mi)"}
    ],
    "Falstaff begins to admit his humiliation: 'accorgersi' (to notice/realize) takes 'di' + infinitive."
]

# 39: d'esser stato un somaro.
data["d'esser stato un somaro."] = [
    "that I have been a donkey.",
    [
        {"word": "esser", "lemma": "essere", "pos": "verb", "meaning": "to be / to have (infinitive apocope)"},
        {"word": "stato", "lemma": "essere", "pos": "verb", "meaning": "been (past participle)"},
        {"word": "somaro", "lemma": "somaro", "pos": "noun", "meaning": "donkey / ass"}
    ],
    "Falstaff confesses his foolishness, comparing himself to a donkey ('somaro')."
]

# 40: E un cervo.
data["E un cervo."] = [
    "And a stag.",
    [
        {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
        {"word": "cervo", "lemma": "cervo", "pos": "noun", "meaning": "stag / deer"}
    ],
    "Alice quips that besides an ass, he was also a stag ('cervo'), referring to the antlers of Herne the Hunter he wore."
]

# 41: Un bue.
data["Un bue."] = [
    "An ox.",
    [
        {"word": "Un", "lemma": "uno", "pos": "adjective", "meaning": "an / a"},
        {"word": "bue", "lemma": "bue", "pos": "noun", "meaning": "ox"}
    ],
    "Ford escalates the animal metaphors, calling him an ox ('bue'), traditionally an emblem of horned cuckolds and dumb, heavy beasts."
]

# 42: Ah! Ah!
data["Ah! Ah!"] = [
    "Ha! Ha!",
    [
        {"word": "Ah", "lemma": "ah", "pos": "interjection", "meaning": "ha / ah (laughter)"}
    ],
    "Laughter erupts from the entire company at Falstaff's expense."
]

# 43: E un mostro raro!
data["E un mostro raro!"] = [
    "And a rare monster!",
    [
        {"word": "mostro", "lemma": "mostro", "pos": "noun", "meaning": "monster / freak"},
        {"word": "raro", "lemma": "raro", "pos": "adjective", "meaning": "rare / unusual"}
    ],
    "Ford caps the animal insults, mocking Falstaff as a freak of nature ('mostro raro'), worthy of being exhibited at a fair."
]

# 44: Ogni sorta di gente dozzinale
data["Ogni sorta di gente dozzinale"] = [
    "Every sort of common folk",
    [
        {"word": "sorta", "lemma": "sorta", "pos": "noun", "meaning": "sort / kind"},
        {"word": "gente", "lemma": "gente", "pos": "noun", "meaning": "people / folk"},
        {"word": "dozzinale", "lemma": "dozzinale", "pos": "adjective", "meaning": "common / second-rate / mediocre / cheap"}
    ],
    "Falstaff rallies his dignity, countering the crowd's mockery by labeling them 'gente dozzinale' (cheap, dime-a-dozen mediocre people)."
]

# 45: mi beffa e se ne gloria;
data["mi beffa e se ne gloria;"] = [
    "mocks me and boasts of it;",
    [
        {"word": "beffa", "lemma": "beffare", "pos": "verb", "meaning": "mocks / jeers at (3rd sing. present)"},
        {"word": "se ne gloria", "lemma": "gloriarsi", "pos": "verb", "meaning": "boasts of it / prides itself on it (reflexive verb with partitive/pronominal ne)"}
    ],
    "Falstaff observes that mediocre minds find glory only in mocking their betters. Note the pronominal construction 'se ne gloria' (glories in it)."
]

# 46: pur, senza me, costor con tanta boria
data["pur, senza me, costor con tanta boria"] = [
    "yet, without me, these people with so much arrogance",
    [
        {"word": "pur", "lemma": "pure", "pos": "conjunction", "meaning": "yet / nevertheless (apocope of pure)"},
        {"word": "senza", "lemma": "senza", "pos": "preposition", "meaning": "without"},
        {"word": "costor", "lemma": "costoro", "pos": "pronoun", "meaning": "these people (pejorative demonstrative pronoun, apocope of costoro)"},
        {"word": "boria", "lemma": "boria", "pos": "noun", "meaning": "arrogance / conceit / vanity"}
    ],
    "Falstaff begins his Shakespearean vindication: 'costoro' (truncated to 'costor') carries a disdainful nuance for those displaying unearned arrogance ('boria')."
]

# 47: non avrebbero un briciol di sale.
data["non avrebbero un briciol di sale."] = [
    "would not have a pinch of salt.",
    [
        {"word": "avrebbero", "lemma": "avere", "pos": "verb", "meaning": "would have (3rd pers. plur. conditional)"},
        {"word": "briciol", "lemma": "briciolo", "pos": "noun", "meaning": "crumb / pinch / scrap (apocope of briciolo)"},
        {"word": "sale", "lemma": "sale", "pos": "noun", "meaning": "salt / wit / wisdom"}
    ],
    "'Sale' (salt) is proverbial in Italian and Latin ('sales') for wit and intelligence ('sale in zucca'). Without Falstaff, these simple townsfolk would have no wit at all."
]

# 48: Son io che vi fa scaltri.
data["Son io che vi fa scaltri."] = [
    "It is I who make you shrewd.",
    [
        {"word": "Son", "lemma": "essere", "pos": "verb", "meaning": "I am (1st sing. present, apocope of sono)"},
        {"word": "io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
        {"word": "vi", "lemma": "vi", "pos": "pronoun", "meaning": "you (plural direct object clitic)"},
        {"word": "fa", "lemma": "fare", "pos": "verb", "meaning": "makes (3rd sing. present agreeing with relative pronoun che)"},
        {"word": "scaltri", "lemma": "scaltro", "pos": "adjective", "meaning": "shrewd / clever / sharp"}
    ],
    "Boito's magnificent Italian translation of Shakespeare's famous line ('I am not only witty in myself, but the cause that wit is in other men'). Falstaff asserts intellectual superiority over his persecutors."
]

# 49: L'arguzia mia crea l'arguzia degli altri.
data["L'arguzia mia crea l'arguzia degli altri."] = [
    "My wit creates the wit of the others.",
    [
        {"word": "arguzia", "lemma": "arguzia", "pos": "noun", "meaning": "wit / sharp humor / cleverness"},
        {"word": "mia", "lemma": "mio", "pos": "adjective", "meaning": "my"},
        {"word": "crea", "lemma": "creare", "pos": "verb", "meaning": "creates (3rd sing. present)"},
        {"word": "degli", "lemma": "di", "pos": "preposition", "meaning": "of the (di + gli)"},
        {"word": "altri", "lemma": "altro", "pos": "pronoun", "meaning": "others"}
    ],
    "The crowning philosophical declaration of Falstaff's character: his boundless wit inspires and animates the humor of everyone around him."
]

# 50: Ma bravo!
data["Ma bravo!"] = [
    "Well, bravo!",
    [
        {"word": "Ma", "lemma": "ma", "pos": "conjunction", "meaning": "well / but"},
        {"word": "bravo", "lemma": "bravo", "pos": "interjection", "meaning": "bravo / well done"}
    ],
    "The crowd and conspirators are forced to admire Falstaff's irrepressible wit and audacity."
]

# 51: FORD Per gli dèi!
data["FORD Per gli dèi!"] = [
    "FORD: By the gods!",
    [
        {"word": "FORD", "lemma": "Ford", "pos": "noun", "meaning": "Ford"},
        {"word": "Per", "lemma": "per", "pos": "preposition", "meaning": "by / for"},
        {"word": "dèi", "lemma": "dio", "pos": "noun", "meaning": "gods (plural of dio)"}
    ],
    "Ford swears by the gods in exasperated admiration of Falstaff's sheer nerve."
]

# 52: Se non ridessi ti sconquasserei!
data["Se non ridessi ti sconquasserei!"] = [
    "If I weren't laughing I would smash you to pieces!",
    [
        {"word": "ridessi", "lemma": "ridere", "pos": "verb", "meaning": "I laughed / were laughing (1st sing. imperfect subjunctive)"},
        {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (2nd sing. direct object clitic)"},
        {"word": "sconquasserei", "lemma": "sconquassare", "pos": "verb", "meaning": "I would smash / shatter / batter (1st sing. conditional)"}
    ],
    "Hypothetical period of unreality: imperfect subjunctive ('ridessi') + present conditional ('sconquasserei'). Ford admits that Falstaff's humor disarms his wrath."
]

# 53: Ma basta. Ed ora vo' che m'ascoltiate.
data["Ma basta. Ed ora vo' che m'ascoltiate."] = [
    "But enough. And now I want you to listen to me.",
    [
        {"word": "basta", "lemma": "bastare", "pos": "verb", "meaning": "it is enough / that will do (3rd sing. present)"},
        {"word": "vo'", "lemma": "volere", "pos": "verb", "meaning": "I want (apocope of voglio with apostrophe)"},
        {"word": "m'", "lemma": "mi", "pos": "pronoun", "meaning": "me (direct object clitic elided)"},
        {"word": "ascoltiate", "lemma": "ascoltare", "pos": "verb", "meaning": "you listen to (2nd pers. plur. present subjunctive)"}
    ],
    "Ford calls for order to stage his own planned trick. 'Vo'' is the apocopated form of 'voglio', taking a subjunctive clause ('che m'ascoltiate')."
]

# 54: Coronerem la mascherata bella
data["Coronerem la mascherata bella"] = [
    "We shall crown the lovely masquerade",
    [
        {"word": "Coronerem", "lemma": "coronare", "pos": "verb", "meaning": "we shall crown (1st pers. plur. future, apocope of coroneremo)"},
        {"word": "mascherata", "lemma": "mascherata", "pos": "noun", "meaning": "masquerade / masked revel"},
        {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / lovely / fine"}
    ],
    "Ford announces the culmination of the night's revels: the wedding ceremony he believes will marry Dr. Caius to Nannetta."
]

# 55: co' gli sponsali della
data["co' gli sponsali della"] = [
    "with the nuptials of the",
    [
        {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with (archaic poetic contraction of con)"},
        {"word": "sponsali", "lemma": "sponsali", "pos": "noun", "meaning": "nuptials / espousals / wedding"},
        {"word": "della", "lemma": "di", "pos": "preposition", "meaning": "of the (di + la)"}
    ],
    "'Co'' is an archaic contraction of 'con'. 'Sponsali' (espousals/wedding) belongs to elevated, formal legal and poetic diction."
]

# 56: regina delle fate.
data["regina delle fate."] = [
    "queen of the fairies.",
    [
        {"word": "regina", "lemma": "regina", "pos": "noun", "meaning": "queen"},
        {"word": "delle", "lemma": "di", "pos": "preposition", "meaning": "of the (di + le)"},
        {"word": "fate", "lemma": "fata", "pos": "noun", "meaning": "fairies"}
    ],
    "Nannetta was disguised as the Fairy Queen in Act III; Ford believes she is the bride being led forward."
]

# 57: Già s'avanza la coppia degli sposi.
data["Già s'avanza la coppia degli sposi."] = [
    "Already the bridal pair advances.",
    [
        {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
        {"word": "s'avanza", "lemma": "avanzarsi", "pos": "verb", "meaning": "advances / steps forward (3rd sing. present reflexive)"},
        {"word": "coppia", "lemma": "coppia", "pos": "noun", "meaning": "couple / pair"},
        {"word": "degli", "lemma": "di", "pos": "preposition", "meaning": "of the (di + gli)"},
        {"word": "sposi", "lemma": "sposo", "pos": "noun", "meaning": "spouses / bridal pair / newlyweds"}
    ],
    "Ford points out the approaching masked pair (unaware that Quickly has substituted Bardolfo under the fairy veil)."
]

# 58: Attenti!
data["Attenti!"] = [
    "Attention!",
    [
        {"word": "Attenti", "lemma": "attento", "pos": "adjective", "meaning": "attentive / careful (used as plural imperative interjection)"}
    ],
    "Ford commands silence and vigilance from the assembled throng."
]

# 59: Eccola, in bianca vesta
data["Eccola, in bianca vesta"] = [
    "Here she is, in white garment",
    [
        {"word": "Eccola", "lemma": "ecco", "pos": "adverb", "meaning": "here she is (presentative ecco + feminine clitic la)"},
        {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in"},
        {"word": "bianca", "lemma": "bianco", "pos": "adjective", "meaning": "white"},
        {"word": "vesta", "lemma": "vesta", "pos": "noun", "meaning": "garment / dress / robe (poetic form of veste)"}
    ],
    "Ford recognizes the pre-arranged white dress of the Fairy Queen, unaware that Bardolfo is disguised within it."
]

# 60: col velo e il serto delle rose in testa
data["col velo e il serto delle rose in testa"] = [
    "with the veil and the garland of roses on her head",
    [
        {"word": "velo", "lemma": "velo", "pos": "noun", "meaning": "veil"},
        {"word": "serto", "lemma": "serto", "pos": "noun", "meaning": "wreath / garland (poetic)"},
        {"word": "rose", "lemma": "rosa", "pos": "noun", "meaning": "roses"},
        {"word": "testa", "lemma": "testa", "pos": "noun", "meaning": "head"}
    ],
    "Ford details the precise costume tokens he had instructed Caius to look for, which the merry wives have cleverly shifted onto Bardolfo."
]

# 61: e il fidanzato suo ch'io le disposi.
data["e il fidanzato suo ch'io le disposi."] = [
    "and her betrothed whom I arranged for her.",
    [
        {"word": "fidanzato", "lemma": "fidanzato", "pos": "noun", "meaning": "betrothed / fiancé"},
        {"word": "ch'", "lemma": "che", "pos": "pronoun", "meaning": "whom (relative pronoun elided before vowel)"},
        {"word": "le", "lemma": "le", "pos": "pronoun", "meaning": "for her (indirect object clitic)"},
        {"word": "disposi", "lemma": "disporre", "pos": "verb", "meaning": "I arranged / assigned (passato remoto 1st sing.)"}
    ],
    "Ford gloats over his paternal authority in arranging Dr. Caius as Nannetta's groom ('ch'io le disposi')."
]

# 62: Circondatela, o ninfe.
data["Circondatela, o ninfe."] = [
    "Surround her, o nymphs.",
    [
        {"word": "Circondatela", "lemma": "circondare", "pos": "verb", "meaning": "surround her (2nd pers. plur. imperative + clitic la)"},
        {"word": "o", "lemma": "o", "pos": "interjection", "meaning": "o / oh (vocative particle)"},
        {"word": "ninfe", "lemma": "ninfa", "pos": "noun", "meaning": "nymphs"}
    ],
    "Ford directs the masquerading nymphs and spirits to encircle the bridal couple."
]

# 63: Un'altra coppia
data["Un'altra coppia"] = [
    "Another couple",
    [
        {"word": "Un'altra", "lemma": "altro", "pos": "adjective", "meaning": "another (feminine with apostrophe before vowel)"},
        {"word": "coppia", "lemma": "coppia", "pos": "noun", "meaning": "couple / pair"}
    ],
    "Alice steps forward with the second disguised couple (Fenton and Nannetta), setting up the counter-trap for Ford."
]

# 64: d'amanti desïosi
data["d'amanti desïosi"] = [
    "of eager lovers",
    [
        {"word": "amanti", "lemma": "amante", "pos": "noun", "meaning": "lovers"},
        {"word": "desïosi", "lemma": "desioso", "pos": "adjective", "meaning": "longing / eager / desirous (with poetic dieresis desïosi)"}
    ],
    "Alice describes Fenton and Nannetta poetically with the archaic/lyric form 'desïosi' (four syllables, marked by dieresis)."
]

# 65: chiede d'essere ammessa agli augurosi
data["chiede d'essere ammessa agli augurosi"] = [
    "asks to be admitted to the auspicious",
    [
        {"word": "chiede", "lemma": "chiedere", "pos": "verb", "meaning": "asks / requests (3rd sing. present)"},
        {"word": "ammessa", "lemma": "ammettere", "pos": "verb", "meaning": "admitted (past participle feminine singular)"},
        {"word": "augurosi", "lemma": "auguroso", "pos": "adjective", "meaning": "auspicious / propitious / blessed"}
    ],
    "Alice uses formal, ceremonial diction ('augurosi connubi') to coax Ford into blessing both marriages simultaneously."
]

# 66: connubi!
data["connubi!"] = [
    "nuptials!",
    [
        {"word": "connubi", "lemma": "connubio", "pos": "noun", "meaning": "nuptials / marriages / wedlock"}
    ],
    "'Connubio' (plural 'connubi') is elevated Latinate poetic diction for marriage."
]

# 67: E sia. Farem la festa doppia.
data["E sia. Farem la festa doppia."] = [
    "So be it. We shall make the feast a double one.",
    [
        {"word": "E sia", "lemma": "essere", "pos": "idiom", "meaning": "so be it / let it be (subjunctive idiom)"},
        {"word": "Farem", "lemma": "fare", "pos": "verb", "meaning": "we shall make (future 1st pers. plur., apocope of faremo)"},
        {"word": "festa", "lemma": "festa", "pos": "noun", "meaning": "celebration / feast"},
        {"word": "doppia", "lemma": "doppio", "pos": "adjective", "meaning": "double"}
    ],
    "In his smug confidence, Ford eagerly agrees to double the wedding celebration, unwittingly walking directly into Alice's trap."
]

# 68: Avvicinate i lumi.
data["Avvicinate i lumi."] = [
    "Bring near the lanterns.",
    [
        {"word": "Avvicinate", "lemma": "avvicinare", "pos": "verb", "meaning": "bring closer / near (2nd pers. plur. imperative)"},
        {"word": "lumi", "lemma": "lume", "pos": "noun", "meaning": "lights / lanterns / candles"}
    ],
    "Ford orders the torches and lanterns brought close to illuminate the climax of the ceremony."
]

# 69: Il ciel v'accoppia.
data["Il ciel v'accoppia."] = [
    "Heaven unites you.",
    [
        {"word": "ciel", "lemma": "cielo", "pos": "noun", "meaning": "heaven / sky (apocope of cielo)"},
        {"word": "v'", "lemma": "vi", "pos": "pronoun", "meaning": "you (plural direct object clitic elided)"},
        {"word": "accoppia", "lemma": "accoppiare", "pos": "verb", "meaning": "couples / unites / pairs (3rd sing. present)"}
    ],
    "Ford pronounces the binding paternal blessing: 'Heaven unites you', legally sealing both marriages."
]

# 70: Giù le maschere e i veli. Apoteosi!
data["Giù le maschere e i veli. Apoteosi!"] = [
    "Down with the masks and veils. Apotheosis!",
    [
        {"word": "Giù", "lemma": "giù", "pos": "adverb", "meaning": "down"},
        {"word": "maschere", "lemma": "maschera", "pos": "noun", "meaning": "masks"},
        {"word": "veli", "lemma": "velo", "pos": "noun", "meaning": "veils"},
        {"word": "Apoteosi", "lemma": "apoteosi", "pos": "noun", "meaning": "apotheosis / grand culmination / triumph"}
    ],
    "Ford theatrically calls for the grand revelation ('Apoteosi!'), expecting Caius and Nannetta to emerge."
]

# 71: Ah! Ah! Ah! Ah!
data["Ah! Ah! Ah! Ah!"] = [
    "Ha! Ha! Ha! Ha!",
    [
        {"word": "Ah", "lemma": "ah", "pos": "interjection", "meaning": "ha / ah (burst of collective laughter)"}
    ],
    "Wild, uncontrollable laughter sweeps through the assembly as the unmasked couples are revealed."
]

# 72: Spavento!
data["Spavento!"] = [
    "Horror!",
    [
        {"word": "Spavento", "lemma": "spavento", "pos": "noun", "meaning": "fright / terror / horror"}
    ],
    "Dr. Caius recoils in horror upon seeing that his 'bride' beneath the veil is the drunken, red-nosed Bardolfo."
]

# 73: Tradimento!
data["Tradimento!"] = [
    "Treason!",
    [
        {"word": "Tradimento", "lemma": "tradimento", "pos": "noun", "meaning": "betrayal / treachery / treason"}
    ],
    "Ford gasps in dismay as he realizes he has been completely outwitted and duped into marrying his daughter to Fenton."
]

# 74: GLI ALTRI
data["GLI ALTRI"] = [
    "THE OTHERS",
    [
        {"word": "GLI ALTRI", "lemma": "gli altri", "pos": "pronoun", "meaning": "the others (chorus / rest of the company)"},
        {"word": "ALTRI", "lemma": "altro", "pos": "pronoun", "meaning": "others"}
    ],
    "Score and libretto rubric indicating the chorus ('THE OTHERS') shouting in response."
]

# 75: Apoteosi!
data["Apoteosi!"] = [
    "Apotheosis!",
    [
        {"word": "Apoteosi", "lemma": "apoteosi", "pos": "noun", "meaning": "apotheosis / glorious triumph"}
    ],
    "The crowd mockingly throws Ford's own triumphant word ('Apoteosi!') back at him."
]

# 76: Fenton con mia figlia!
data["Fenton con mia figlia!"] = [
    "Fenton with my daughter!",
    [
        {"word": "Fenton", "lemma": "Fenton", "pos": "noun", "meaning": "Fenton"},
        {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
        {"word": "figlia", "lemma": "figlia", "pos": "noun", "meaning": "daughter"}
    ],
    "Ford realizes to his dismay that the second couple he just solemnly blessed was none other than Fenton and Nannetta."
]

# 77: Ho sposato Bardolfo!
data["Ho sposato Bardolfo!"] = [
    "I have married Bardolfo!",
    [
        {"word": "Ho sposato", "lemma": "sposare", "pos": "verb", "meaning": "I have married (passato prossimo 1st sing.)"},
        {"word": "Bardolfo", "lemma": "Bardolfo", "pos": "noun", "meaning": "Bardolfo"}
    ],
    "Dr. Caius shrieks in disbelief at his horrifying discovery: instead of young Nannetta, he has wed Falstaff's scoundrel follower Bardolfo."
]

# 78: Vittoria!
data["Vittoria!"] = [
    "Victory!",
    [
        {"word": "Vittoria", "lemma": "vittoria", "pos": "noun", "meaning": "victory / triumph"}
    ],
    "Alice and the women celebrate their complete victory over both Ford's rigid patriarchal scheme and Dr. Caius's unwanted suit."
]

# 79: Evviva! Evviva!
data["Evviva! Evviva!"] = [
    "Hurrah! Hurrah!",
    [
        {"word": "Evviva", "lemma": "evviva", "pos": "interjection", "meaning": "hurrah / long live / cheers"}
    ],
    "The entire company cheers the young lovers' triumph and the hilarious poetic justice."
]

# 80: Oh! Meraviglia!
data["Oh! Meraviglia!"] = [
    "Oh! Wonder!",
    [
        {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh"},
        {"word": "Meraviglia", "lemma": "meraviglia", "pos": "noun", "meaning": "wonder / marvel / astonishment"}
    ],
    "Ford stands dumbfounded, marveling at the audacity and perfection of Alice's scheme."
]

# 81: L'uom cade spesso nelle reti ordite
data["L'uom cade spesso nelle reti ordite"] = [
    "Man often falls into the nets woven",
    [
        {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
        {"word": "cade", "lemma": "cadere", "pos": "verb", "meaning": "falls (3rd sing. present)"},
        {"word": "spesso", "lemma": "spesso", "pos": "adverb", "meaning": "often"},
        {"word": "reti", "lemma": "rete", "pos": "noun", "meaning": "nets / snares"},
        {"word": "ordite", "lemma": "ordire", "pos": "verb", "meaning": "woven / plotted / devised (past participle fem. plur.)"}
    ],
    "Alice delivers a moral axiom: people who plot deceptions often become trapped in snares of their own making."
]

# 82: dalle malizie sue.
data["dalle malizie sue."] = [
    "by his own malice.",
    [
        {"word": "dalle", "lemma": "da", "pos": "preposition", "meaning": "by the (articulated prep. da + le)"},
        {"word": "malizie", "lemma": "malizia", "pos": "noun", "meaning": "malice / cunning tricks / sly schemes"},
        {"word": "sue", "lemma": "suo", "pos": "adjective", "meaning": "his own (possessive adjective)"}
    ],
    "Prepositional agent phrase dependent on 'ordite'. 'Malizia' here denotes sly plots and scheming calculations."
]

# 83: Caro buon messer Ford, ed ora, dite:
data["Caro buon messer Ford, ed ora, dite:"] = [
    "Dear good Master Ford, and now, tell:",
    [
        {"word": "Caro", "lemma": "caro", "pos": "adjective", "meaning": "dear"},
        {"word": "buon", "lemma": "buono", "pos": "adjective", "meaning": "good (apocope of buono)"},
        {"word": "messer", "lemma": "messere", "pos": "noun", "meaning": "Master / Sir (archaic title of respect)"},
        {"word": "dite", "lemma": "dire", "pos": "verb", "meaning": "tell / say (imperative)"}
    ],
    "Falstaff seizes his moment of sweetest revenge, mimicking Ford's exact gloating tone from earlier in the scene."
]

# 84: lo scornato chi è?
data["lo scornato chi è?"] = [
    "who is the hoodwinked one?",
    [
        {"word": "scornato", "lemma": "scornato", "pos": "adjective", "meaning": "hoodwinked / mocked / deflated / disgraced (used as substantive noun)"},
        {"word": "chi", "lemma": "chi", "pos": "pronoun", "meaning": "who"},
        {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"}
    ],
    "Falstaff mirrors Ford's question 'il cornuto chi è?' (who is the cuckold?), substituting 'scornato' (shamed/duped) to turn the tables completely on Ford."
]

# 85: Lui.
data["Lui."] = [
    "Him.",
    [
        {"word": "Lui", "lemma": "lui", "pos": "pronoun", "meaning": "he / him (3rd sing. masculine tonic pronoun)"}
    ],
    "Ford desperately deflects the blame and ridicule onto Dr. Caius."
]

# 86: Tu.
data["Tu."] = [
    "You.",
    [
        {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you (2nd sing. tonic pronoun)"}
    ],
    "Dr. Caius fires back instantly, pointing the finger right back at Ford."
]

# 87: No.
data["No."] = [
    "No.",
    [
        {"word": "No", "lemma": "no", "pos": "adverb", "meaning": "no"}
    ],
    "Ford stubbornly denies his own foolishness."
]

# 88: Sì.
data["Sì."] = [
    "Yes.",
    [
        {"word": "Sì", "lemma": "sì", "pos": "adverb", "meaning": "yes"}
    ],
    "Caius insists that Ford is the primary dupe who engineered the whole debacle."
]

# 89: Voi.
data["Voi."] = [
    "You.",
    [
        {"word": "Voi", "lemma": "voi", "pos": "pronoun", "meaning": "you (2nd pers. plural / formal tonic pronoun)"}
    ],
    "Bardolfo chimes in cheekily from under his bridal veil, addressing Ford and Caius."
]

# 90: Lor.
data["Lor."] = [
    "Them.",
    [
        {"word": "Lor", "lemma": "loro", "pos": "pronoun", "meaning": "them / they (apocope of loro)"}
    ],
    "Fenton gloats at the pair of disappointed intriguers, using the truncated tonic pronoun 'lor'."
]

# 91: Noi.
data["Noi."] = [
    "Us.",
    [
        {"word": "Noi", "lemma": "noi", "pos": "pronoun", "meaning": "we / us (1st pers. plural tonic pronoun)"}
    ],
    "Caius finally concedes that both he and Ford have been thoroughly hoodwinked together."
]

# 92: Tutti e due.
data["Tutti e due."] = [
    "Both of them.",
    [
        {"word": "Tutti e due", "lemma": "tutti e due", "pos": "idiom", "meaning": "both / both of them"}
    ],
    "Falstaff gloats triumphantly: not just one, but both Ford and Caius are the dupes."
]

# 93: No. Tutti e tre.
data["No. Tutti e tre."] = [
    "No. All three.",
    [
        {"word": "No", "lemma": "no", "pos": "adverb", "meaning": "no"},
        {"word": "Tutti e tre", "lemma": "tutti e tre", "pos": "idiom", "meaning": "all three of you"}
    ],
    "Alice delivers the definitive verdict: Falstaff, Ford, and Caius have all three been outwitted by the women."
]

# 94: Volgiti e mira quelle ansie leggiadre.
data["Volgiti e mira quelle ansie leggiadre."] = [
    "Turn around and behold those graceful anxieties.",
    [
        {"word": "Volgiti", "lemma": "volgersi", "pos": "verb", "meaning": "turn around (2nd sing. imperative + reflexive clitic ti)"},
        {"word": "mira", "lemma": "mirare", "pos": "verb", "meaning": "behold / gaze upon (2nd sing. imperative)"},
        {"word": "ansie", "lemma": "ansia", "pos": "noun", "meaning": "anxieties / eager yearnings"},
        {"word": "leggiadre", "lemma": "leggiadro", "pos": "adjective", "meaning": "graceful / charming / lovely"}
    ],
    "Alice appeals to Ford's paternal heart, directing his gaze toward his trembling daughter and her true love Fenton."
]

# 95: Perdonateci, padre.
data["Perdonateci, padre."] = [
    "Forgive us, father.",
    [
        {"word": "Perdonateci", "lemma": "perdonare", "pos": "verb", "meaning": "forgive us (2nd pers. plur./formal imperative + clitic ci)"},
        {"word": "padre", "lemma": "padre", "pos": "noun", "meaning": "father"}
    ],
    "Nannetta kneels before Ford, pleading for his fatherly forgiveness and blessing for her marriage to Fenton."
]

# 96: Chi schivare non può la propria noia
data["Chi schivare non può la propria noia"] = [
    "Whoever cannot avoid his own misfortune",
    [
        {"word": "schivare", "lemma": "schivare", "pos": "verb", "meaning": "to avoid / shun / dodge (infinitive)"},
        {"word": "può", "lemma": "potere", "pos": "verb", "meaning": "can / is able (3rd sing. present)"},
        {"word": "propria", "lemma": "proprio", "pos": "adjective", "meaning": "one's own"},
        {"word": "noia", "lemma": "noia", "pos": "noun", "meaning": "annoyance / vexation / misfortune / trouble"}
    ],
    "Ford accepts defeat with philosophical grace: 'noia' here retains its archaic and literary sense of harm, grief, or vexation."
]

# 97: l'accetti di buon grado.
data["l'accetti di buon grado."] = [
    "let him accept it with good grace.",
    [
        {"word": "l'", "lemma": "lo", "pos": "pronoun", "meaning": "it (direct object clitic elided)"},
        {"word": "accetti", "lemma": "accettare", "pos": "verb", "meaning": "let him accept / may he accept (3rd sing. present subjunctive)"},
        {"word": "di buon grado", "lemma": "di buon grado", "pos": "idiom", "meaning": "willingly / with good grace / gladly"}
    ],
    "Jussive/concessive subjunctive ('l'accetti') governing the idiomatic prepositional phrase 'di buon grado' (readily, graciously)."
]

# 98: Facciamo il parentado
data["Facciamo il parentado"] = [
    "Let us make the family alliance",
    [
        {"word": "Facciamo", "lemma": "fare", "pos": "verb", "meaning": "let us make (1st pers. plur. imperative/subjunctive)"},
        {"word": "parentado", "lemma": "parentado", "pos": "noun", "meaning": "kinship / family alliance / in-law relationship"}
    ],
    "Ford blesses the union: 'fare il parentado' is a classic Italian expression for sealing a kinship tie through marriage."
]

# 99: e che il ciel vi dia gioia.
data["e che il ciel vi dia gioia."] = [
    "and may heaven give you joy.",
    [
        {"word": "ciel", "lemma": "cielo", "pos": "noun", "meaning": "heaven / sky (apocope)"},
        {"word": "vi", "lemma": "vi", "pos": "pronoun", "meaning": "you (plural indirect object clitic)"},
        {"word": "dia", "lemma": "dare", "pos": "verb", "meaning": "give / grant (3rd sing. present subjunctive)"},
        {"word": "gioia", "lemma": "gioia", "pos": "noun", "meaning": "joy / happiness"}
    ],
    "Optative subjunctive ('che il ciel vi dia gioia'), conferring Ford's heartfelt paternal blessing upon Fenton and Nannetta."
]

# 100: Evviva!
data["Evviva!"] = [
    "Hurrah!",
    [
        {"word": "Evviva", "lemma": "evviva", "pos": "interjection", "meaning": "hurrah / long live / cheers"}
    ],
    "General jubilation from all present as the conflict resolves in reconciliation."
]

# 101: Un coro e terminiam la scena.
data["Un coro e terminiam la scena."] = [
    "A chorus and let us end the scene.",
    [
        {"word": "coro", "lemma": "coro", "pos": "noun", "meaning": "chorus / ensemble"},
        {"word": "terminiam", "lemma": "terminare", "pos": "verb", "meaning": "let us end / finish (1st pers. plur. imperative, apocope of terminiamo)"},
        {"word": "scena", "lemma": "scena", "pos": "noun", "meaning": "scene / stage"}
    ],
    "Falstaff breaks the fourth wall with theatrical metadrama, proposing to conclude the opera with a grand ensemble choral fugue."
]

# 102: E poi con sir Falstaff, tutti, andiamo a cena.
data["E poi con sir Falstaff, tutti, andiamo a cena."] = [
    "And then with Sir Falstaff, all of us, let us go to dinner.",
    [
        {"word": "poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
        {"word": "tutti", "lemma": "tutti", "pos": "pronoun", "meaning": "all / everyone"},
        {"word": "andiamo", "lemma": "andare", "pos": "verb", "meaning": "let us go (1st pers. plur. imperative)"},
        {"word": "cena", "lemma": "cena", "pos": "noun", "meaning": "dinner / supper"}
    ],
    "Ford graciously invites Falstaff and the entire town to feast together at his house, ending all rivalry in conviviality."
]

# 103: Tutto nel mondo è burla.
data["Tutto nel mondo è burla."] = [
    "Everything in the world is a joke.",
    [
        {"word": "Tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "everything / all"},
        {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "in the (in + il)"},
        {"word": "mondo", "lemma": "mondo", "pos": "noun", "meaning": "world"},
        {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
        {"word": "burla", "lemma": "burla", "pos": "noun", "meaning": "joke / jest / prank / mockery"}
    ],
    "The opening subject of Verdi's supreme comic masterpiece fugue: Boito's summation of human comedy, declaring that all worldly vanities are but a jest."
]

# 104: L'uom è nato burlone,
data["L'uom è nato burlone,"] = [
    "Man is born a jester,",
    [
        {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
        {"word": "è nato", "lemma": "nascere", "pos": "verb", "meaning": "is born (passato prossimo 3rd sing.)"},
        {"word": "burlone", "lemma": "burlone", "pos": "noun", "meaning": "jester / prankster / buffoon / joker"}
    ],
    "Continuation of the fugue subject: human nature is inherently foolish and jesting ('burlone')."
]

# 105: la fede in cor gli ciurla,
data["la fede in cor gli ciurla,"] = [
    "faith wavers in his heart,",
    [
        {"word": "fede", "lemma": "fede", "pos": "noun", "meaning": "faith / trust"},
        {"word": "cor", "lemma": "core", "pos": "noun", "meaning": "heart (poetic apocope of core/cuore)"},
        {"word": "gli", "lemma": "egli", "pos": "pronoun", "meaning": "in him / his (dative of reference/possession)"},
        {"word": "ciurla", "lemma": "ciurlare", "pos": "verb", "meaning": "wobbles / wavers / reels (3rd sing. present)"}
    ],
    "'Ciurlare nel manico' is a Tuscan idiom meaning to waver or prove unsteady; here 'gli ciurla' describes how conviction and certainty totter within man's heart."
]

# 106: gli ciurla la ragione.
data["gli ciurla la ragione."] = [
    "his reason wavers.",
    [
        {"word": "gli", "lemma": "egli", "pos": "pronoun", "meaning": "in him / his (dative of reference)"},
        {"word": "ciurla", "lemma": "ciurlare", "pos": "verb", "meaning": "wavers / staggers / spins (3rd sing. present)"},
        {"word": "ragione", "lemma": "ragione", "pos": "noun", "meaning": "reason / intellect"}
    ],
    "Parallel inversion with line 105: human reason reels and stumbles, helpless in the face of life's chaotic absurdities."
]

# 107: Tutti gabbati! Irride
data["Tutti gabbati! Irride"] = [
    "All hoodwinked! Laughs at",
    [
        {"word": "Tutti", "lemma": "tutti", "pos": "pronoun", "meaning": "all / everyone"},
        {"word": "gabbati", "lemma": "gabbare", "pos": "verb", "meaning": "hoodwinked / mocked / duped (past participle plural)"},
        {"word": "Irride", "lemma": "irridere", "pos": "verb", "meaning": "mocks / laughs at / derides (3rd sing. present)"}
    ],
    "'Tutti gabbati!' (Everyone is fooled/hoodwinked!) is the universal verdict of the opera. Enjambment carries the verb 'irride' over to the next line."
]

# 108: l'un l'altro ogni mortal.
data["l'un l'altro ogni mortal."] = [
    "one another every mortal.",
    [
        {"word": "l'un l'altro", "lemma": "l'un l'altro", "pos": "pronoun", "meaning": "one another / each other (reciprocal pronoun)"},
        {"word": "ogni", "lemma": "ogni", "pos": "adjective", "meaning": "every / each"},
        {"word": "mortal", "lemma": "mortale", "pos": "noun", "meaning": "mortal / human being (apocope of mortale)"}
    ],
    "Synthesizes the universal condition of mankind: every mortal mocks his neighbor, unaware that he too is equally foolish."
]

# 109: Ma ride ben chi ride
data["Ma ride ben chi ride"] = [
    "But he laughs well who laughs",
    [
        {"word": "ride", "lemma": "ridere", "pos": "verb", "meaning": "laughs (3rd sing. present)"},
        {"word": "ben", "lemma": "bene", "pos": "adverb", "meaning": "well (apocope of bene)"},
        {"word": "chi", "lemma": "chi", "pos": "pronoun", "meaning": "he who / whoever (relative/indefinite pronoun)"}
    ],
    "Italian proverb: 'Ride bene chi ride l'ultimo' (He who laughs last laughs best), adapted by Boito into poetic octosyllable."
]

# 110: la risata final.
data["la risata final."] = [
    "the final laugh.",
    [
        {"word": "risata", "lemma": "risata", "pos": "noun", "meaning": "laugh / burst of laughter"},
        {"word": "final", "lemma": "finale", "pos": "adjective", "meaning": "final (poetic apocope of finale)"}
    ],
    "The final line of Giuseppe Verdi's operatic career: the ultimate triumph of laughter, wisdom, and compassionate comedy over tragedy."
]

# Verification logic
with open("scripts/falstaff_act3_sc2_partC.json") as f:
    raw_lines = json.load(f)

expected_keys = [item["original"] for item in raw_lines]
assert len(expected_keys) == 111, f"Expected 111 raw lines, got {len(expected_keys)}"
assert len(data) == 111, f"Expected 111 entries in data, got {len(data)}"

ALLOWED_POS = {"noun", "verb", "adjective", "adverb", "pronoun", "preposition", "conjunction", "interjection", "particle", "idiom"}

errors = []
for idx, key in enumerate(expected_keys):
    if key not in data:
        errors.append(f"Missing key: {key}")
        continue
    entry = data[key]
    if not isinstance(entry, list) or len(entry) != 3:
        errors.append(f"Invalid entry structure for key '{key}': {entry}")
        continue
    literal, tokens, note = entry
    if not isinstance(literal, str) or len(literal.strip()) == 0:
        errors.append(f"Empty literal for key '{key}'")
    
    # Capitalization check
    if key[0].isupper() and not literal[0].isupper():
        errors.append(f"Capitalization mismatch for key '{key}': literal is '{literal}'")

    if not isinstance(tokens, list) or not (1 <= len(tokens) <= 5):
        errors.append(f"Token count {len(tokens)} out of range [1, 5] for key '{key}'")
    for t_idx, token in enumerate(tokens):
        if not isinstance(token, dict):
            errors.append(f"Token {t_idx} not a dict for key '{key}'")
            continue
        for req_field in ["word", "lemma", "pos", "meaning"]:
            if req_field not in token:
                errors.append(f"Token {t_idx} missing {req_field} for key '{key}'")
        if token.get("pos") not in ALLOWED_POS:
            errors.append(f"Invalid POS '{token.get('pos')}' in token {t_idx} for key '{key}'")
    if note is not None and not isinstance(note, str):
        errors.append(f"Invalid grammar note type for key '{key}': {type(note)}")

if errors:
    print(f"FAILED with {len(errors)} errors:")
    for e in errors[:20]:
        print("  ", e)
    raise SystemExit(1)

out_file = "scripts/falstaff_curated_a3_sc2_partC.json"
with open(out_file, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Successfully generated {out_file} with {len(data)} lines!")

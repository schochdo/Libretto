import json

ALLOWED_POS = {
    "noun", "verb", "adjective", "adverb", "pronoun",
    "preposition", "conjunction", "interjection", "particle", "idiom"
}

# 110 entries corresponding to each line in scripts/falstaff_act3_sc2_partB.json
curated_data = {
    # 0
    "Coi gigli e le vïole": [
        "With lilies and violets",
        [
            {"word": "Coi", "lemma": "con", "pos": "preposition", "meaning": "with the (articulated preposition con + i)"},
            {"word": "gigli", "lemma": "giglio", "pos": "noun", "meaning": "lilies"},
            {"word": "vïole", "lemma": "viola", "pos": "noun", "meaning": "violets (poetic diaeresis vïole scanning as three syllables)"}
        ],
        "Prepositional phrase opening the second strophe of Nannetta's fairy song. The archaic diaeresis in 'vïole' (vi-o-le) expands the word into three syllables to preserve the delicate ottonario meter."
    ],
    # 1
    "scriviam dei nomi arcani,": [
        "let us write secret names,",
        [
            {"word": "scriviam", "lemma": "scrivere", "pos": "verb", "meaning": "let us write (1st plur. hortatory subjunctive, apocope of scriviamo)"},
            {"word": "dei", "lemma": "di", "pos": "preposition", "meaning": "some / of the (partitive preposition di + i)"},
            {"word": "nomi", "lemma": "nome", "pos": "noun", "meaning": "names"},
            {"word": "arcani", "lemma": "arcano", "pos": "adjective", "meaning": "arcane / mysterious / secret"}
        ],
        "Hortatory 1st person plural subjunctive ('scriviam') with poetic apocope for 'scriviamo'. Nannetta bids the disguised children to trace enchanted magical symbols in flowers."
    ],
    # 2
    "dalle fatate mani": [
        "from fairy hands",
        [
            {"word": "dalle", "lemma": "da", "pos": "preposition", "meaning": "from the (articulated preposition da + le)"},
            {"word": "fatate", "lemma": "fatato", "pos": "adjective", "meaning": "fairy / enchanted / magical"},
            {"word": "mani", "lemma": "mano", "pos": "noun", "meaning": "hands (feminine plural)"}
        ],
        "Prepositional ablative phrase of origin ('dalle fatate mani') dependent on 'germoglino'. The feminine noun 'mano' takes the irregular plural 'mani'."
    ],
    # 3
    "germoglino parole.": [
        "let words sprout.",
        [
            {"word": "germoglino", "lemma": "germogliare", "pos": "verb", "meaning": "let sprout / may sprout (3rd plur. present subjunctive)"},
            {"word": "parole", "lemma": "parola", "pos": "noun", "meaning": "words"}
        ],
        "Inverted optative/hortatory subjunctive ('germoglino') with subject 'parole'. The fairy Queen envisions words blossoming organically from the touch of their fingertips."
    ],
    # 4
    "Parole alluminate": [
        "Words illuminated",
        [
            {"word": "Parole", "lemma": "parola", "pos": "noun", "meaning": "words"},
            {"word": "alluminate", "lemma": "alluminare", "pos": "adjective", "meaning": "illuminated / miniature-painted (archaic past participle)"}
        ],
        "Archaic past participle 'alluminate' (from medieval Italian alluminare, meaning to decorate manuscripts with miniature illuminations and gold leaf), evoking glowing magical script."
    ],
    # 5
    "di puro argento e d'or,": [
        "of pure silver and gold,",
        [
            {"word": "puro", "lemma": "puro", "pos": "adjective", "meaning": "pure"},
            {"word": "argento", "lemma": "argento", "pos": "noun", "meaning": "silver"},
            {"word": "d'or", "lemma": "oro", "pos": "noun", "meaning": "of gold (preposition di + apocope of oro)"}
        ],
        "Prepositional phrase modifying 'alluminate'. The poetic truncation 'd'or' (for 'd'oro') creates a crisp tronco rhyme with 'albor' and 'cacciator'."
    ],
    # 6
    "carmi e malie. Le fate": [
        "chants and spells. The fairies",
        [
            {"word": "carmi", "lemma": "carme", "pos": "noun", "meaning": "incantations / poetic songs (classical carmina)"},
            {"word": "malie", "lemma": "malia", "pos": "noun", "meaning": "spells / enchantments / sorceries"},
            {"word": "fate", "lemma": "fata", "pos": "noun", "meaning": "fairies"}
        ],
        "Elevated classical noun 'carmi' (from Latin carmen) paired with 'malie' in apposition to the illuminated words, followed by the subject 'Le fate' of the subsequent sentence."
    ],
    # 7
    "hanno per cifre i fior.": [
        "have flowers as their cyphers.",
        [
            {"word": "hanno", "lemma": "avere", "pos": "verb", "meaning": "have (3rd plur. present)"},
            {"word": "cifre", "lemma": "cifra", "pos": "noun", "meaning": "cyphers / secret characters / numerals"},
            {"word": "fior", "lemma": "fiore", "pos": "noun", "meaning": "flowers (poetic apocope of fiori)"}
        ],
        "Idiomatic construction 'avere per cifre' (to possess as secret signs or letters). 'Fior' is the poetic truncated plural for 'fiori', acting as direct object."
    ],
    # 8
    "Moviamo ad una ad una": [
        "Let us move one by one",
        [
            {"word": "Moviamo", "lemma": "muovere", "pos": "verb", "meaning": "let us move (1st plur. hortatory subjunctive / imperative)"},
            {"word": "ad una ad una", "lemma": "ad una ad una", "pos": "idiom", "meaning": "one by one (feminine plural distributive idiom)"}
        ],
        "Hortatory 1st person plural 'Moviamo' (preserving the non-diphthongized Latin root) combined with the feminine distributive idiom 'ad una ad una' as the fairies glide in single file."
    ],
    # 9
    "sotto il lunare albor,": [
        "beneath the lunar glow,",
        [
            {"word": "sotto", "lemma": "sotto", "pos": "preposition", "meaning": "under / beneath"},
            {"word": "lunare", "lemma": "lunare", "pos": "adjective", "meaning": "lunar / of the moon"},
            {"word": "albor", "lemma": "albore", "pos": "noun", "meaning": "glow / whiteness / pale radiance (apocope of albore)"}
        ],
        "Atmospheric prepositional phrase setting the nocturnal scene. 'Albor' is an apocope of 'albore' (pale dawn light or soft moonlight)."
    ],
    # 10
    "verso la quercia bruna": [
        "toward the dark oak",
        [
            {"word": "verso", "lemma": "verso", "pos": "preposition", "meaning": "toward"},
            {"word": "quercia", "lemma": "quercia", "pos": "noun", "meaning": "oak tree"},
            {"word": "bruna", "lemma": "bruno", "pos": "adjective", "meaning": "dark / dusky / brown"}
        ],
        "Directional prepositional phrase leading the procession to Herne's Oak ('la quercia bruna'), where Falstaff lies cowering in terror."
    ],
    # 11
    "del nero cacciator.": [
        "of the black hunter.",
        [
            {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the (articulated preposition di + il)"},
            {"word": "nero", "lemma": "nero", "pos": "adjective", "meaning": "black / sinister"},
            {"word": "cacciator", "lemma": "cacciatore", "pos": "noun", "meaning": "hunter (poetic apocope of cacciatore)"}
        ],
        "Genitive phrase completing the reference to Herne the Hunter ('il nero cacciatore'), ending the lyrical section on an emphatic rhyming masculine monosyllable."
    ],
    # 12
    "Alto là!": [
        "Halt there!",
        [
            {"word": "Alto là", "lemma": "alto là", "pos": "interjection", "meaning": "halt! / stop right there!"}
        ],
        "Traditional military sentry command ('alto là!'). Bardolfo feigns military vigilance as he pretends to stumble upon the prostrate knight in the dark."
    ],
    # 13
    "Chi va là?": [
        "Who goes there?",
        [
            {"word": "Chi va là", "lemma": "chi va là", "pos": "idiom", "meaning": "who goes there? (sentry challenge formula)"}
        ],
        "Pistola echoes Bardolfo with the standard sentry challenge ('chi va là?'), heightening the mock-terror for Falstaff."
    ],
    # 14
    "Pietà!": [
        "Mercy!",
        [
            {"word": "Pietà", "lemma": "pietà", "pos": "noun", "meaning": "mercy / pity / compassion"}
        ],
        "Sir John's single-word plea for mercy, paralyzed face-down on the grass because superstition dictates that whoever gazes upon fairies dies."
    ],
    # 15
    "C'è un uom!": [
        "There is a man!",
        [
            {"word": "C'è", "lemma": "esserci", "pos": "verb", "meaning": "there is (ci + è)"},
            {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (poetic apocope of uomo)"}
        ],
        "Mrs. Quickly draws mock-horrified attention to the fallen intruder, using the existential 'c'è' and the poetic apocope 'uom'."
    ],
    # 16
    "ALICE, MEG E NANNETTA": [
        "Alice, Meg and Nannetta",
        [
            {"word": "ALICE", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"},
            {"word": "MEG", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper name)"},
            {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "NANNETTA", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper name)"}
        ],
        "Libretto character heading marking the three Windsor women speaking and singing together in the masquerade."
    ],
    # 17
    "Cornuto come un bue!": [
        "Horned like an ox!",
        [
            {"word": "Cornuto", "lemma": "cornuto", "pos": "adjective", "meaning": "horned / cuckolded"},
            {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
            {"word": "bue", "lemma": "bue", "pos": "noun", "meaning": "ox"}
        ],
        "Ford's biting exclamation plays on the dual meaning of 'cornuto' (physically antlered and a cuckold), relishing the poetically just humiliation of his would-be rival."
    ],
    # 18
    "Rotondo come un pomo!": [
        "Round like an apple!",
        [
            {"word": "Rotondo", "lemma": "rotondo", "pos": "adjective", "meaning": "round / spherical"},
            {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
            {"word": "pomo", "lemma": "pomo", "pos": "noun", "meaning": "apple / round fruit"}
        ],
        "Pistola adds his comic comparison, contrasting Sir John's spherical shape with the literary noun 'pomo' (apple/fruit)."
    ],
    # 19
    "Grosso come una nave!": [
        "Big as a ship!",
        [
            {"word": "Grosso", "lemma": "grosso", "pos": "adjective", "meaning": "big / bulky / massive"},
            {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
            {"word": "nave", "lemma": "nave", "pos": "noun", "meaning": "ship / vessel"}
        ],
        "Bardolfo completes the triad of similes with a naval metaphor, comparing Falstaff's colossal bulk to a galleon."
    ],
    # 20
    "PISTOLA, BARDOLFO": [
        "Pistola, Bardolfo",
        [
            {"word": "PISTOLA", "lemma": "Pistola", "pos": "noun", "meaning": "Pistola (proper name)"},
            {"word": "BARDOLFO", "lemma": "Bardolfo", "pos": "noun", "meaning": "Bardolfo (proper name)"}
        ],
        "Libretto character heading indicating Falstaff's two treacherous ex-followers taking command of the interrogation."
    ],
    # 21
    "Alzati, olà!": [
        "Get up, hey!",
        [
            {"word": "Alzati", "lemma": "alzarsi", "pos": "verb", "meaning": "get up / stand up (imperative alza + reflexive clitic ti)"},
            {"word": "olà", "lemma": "olà", "pos": "interjection", "meaning": "hey / hallo"}
        ],
        "Reflexive imperative 'Alzati' with enclitic 'ti', accompanied by the stern commanding interjection 'olà'."
    ],
    # 22
    "Portatemi una grue!": [
        "Bring me a crane!",
        [
            {"word": "Portatemi", "lemma": "portare", "pos": "verb", "meaning": "bring me (imperative 2nd plur. portate + indirect object clitic mi)"},
            {"word": "grue", "lemma": "grue", "pos": "noun", "meaning": "crane / derrick (archaic variant of gru)"}
        ],
        "Imperative with enclitic pronoun 'Portatemi'. Falstaff delivers a classic comic quip, admitting that only a mechanical hoisting crane ('grue') could lift his ponderous mass."
    ],
    # 23
    "Non posso.": [
        "I cannot.",
        [
            {"word": "Non", "lemma": "non", "pos": "adverb", "meaning": "not"},
            {"word": "posso", "lemma": "potere", "pos": "verb", "meaning": "I can / I am able (1st sing. present)"}
        ],
        "Concise modal verb expressing absolute physical and emotional defeat, pinned to the earth by weight and fear."
    ],
    # 24
    "È troppo grave.": [
        "He is too heavy.",
        [
            {"word": "troppo", "lemma": "troppo", "pos": "adverb", "meaning": "too / excessively"},
            {"word": "grave", "lemma": "grave", "pos": "adjective", "meaning": "heavy / weighty / grave"}
        ],
        "Ford's observation carries double meaning: physically ponderous ('grave') and morally serious in his transgressions."
    ],
    # 25
    "È corrotto!": [
        "He is corrupt!",
        [
            {"word": "corrotto", "lemma": "corrotto", "pos": "adjective", "meaning": "corrupt / tainted / depraved"}
        ],
        "Quickly initiates the mock-religious catechism, pronouncing Falstaff spiritually defiled."
    ],
    # 26
    "È impuro!": [
        "He is impure!",
        [
            {"word": "impuro", "lemma": "impuro", "pos": "adjective", "meaning": "impure / unclean"}
        ],
        "The women chime in antiphonal chorus, declaring that the sacred fairy ground has been desecrated by an impure mortal."
    ],
    # 27
    "Si faccia lo scongiuro!": [
        "Let the exorcism be performed!",
        [
            {"word": "Si faccia", "lemma": "farsi", "pos": "verb", "meaning": "let be made / let be performed (impersonal si + 3rd sing. present subjunctive of fare)"},
            {"word": "scongiuro", "lemma": "scongiuro", "pos": "noun", "meaning": "exorcism / conjuration / ritual spell"}
        ],
        "Passive/impersonal 'si' with subjunctive 'faccia' ('si faccia', let there be made). Bardolfo announces the ritual cleansing and exorcism of the intruder."
    ],
    # 28
    "Evita il tuo periglio.": [
        "Avoid your danger.",
        [
            {"word": "Evita", "lemma": "evitare", "pos": "verb", "meaning": "avoid / shun (2nd sing. imperative)"},
            {"word": "tuo", "lemma": "tuo", "pos": "pronoun", "meaning": "your (possessive determiner)"},
            {"word": "periglio", "lemma": "periglio", "pos": "noun", "meaning": "danger / peril (poetic doublet of pericolo)"}
        ],
        "Alice whispers an aside to Nannetta, warning her that Ford's secret scheme to marry her to Caius is underway. 'Periglio' is the elevated poetic form of 'pericolo'."
    ],
    # 29
    "Già il Dottor Cajo ti cerca.": [
        "Already Doctor Caius is looking for you.",
        [
            {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
            {"word": "Dottor", "lemma": "dottore", "pos": "noun", "meaning": "Doctor (truncated title)"},
            {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (direct object clitic)"},
            {"word": "cerca", "lemma": "cercare", "pos": "verb", "meaning": "seeks / searches for (3rd sing. present)"}
        ],
        "Preverbal accusative pronoun 'ti' governed by 'cerca'. Alice alerts Nannetta to slip away before Dr. Caius can locate his promised bride in the dark."
    ],
    # 30
    "Troviamo": [
        "Let us find",
        [
            {"word": "Troviamo", "lemma": "trovare", "pos": "verb", "meaning": "let us find (1st plur. hortatory subjunctive / imperative)"}
        ],
        "Hortatory 1st person plural opening Nannetta and Fenton's coordinated evasion into the woods, completed in the following line."
    ],
    # 31
    "un nascondiglio.": [
        "a hiding place.",
        [
            {"word": "nascondiglio", "lemma": "nascondiglio", "pos": "noun", "meaning": "hiding place / retreat / concealment"}
        ],
        "Direct object of 'Troviamo', completing the rhyming couplet with 'periglio' (periglio / nascondiglio)."
    ],
    # 32
    "Poi tornerete lesti al mio richiamo.": [
        "Then you will return quickly at my call.",
        [
            {"word": "Poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
            {"word": "tornerete", "lemma": "tornare", "pos": "verb", "meaning": "you will return (2nd plur. future)"},
            {"word": "lesti", "lemma": "lesto", "pos": "adjective", "meaning": "quick / prompt / nimble (masculine plural)"},
            {"word": "richiamo", "lemma": "richiamo", "pos": "noun", "meaning": "call / summons"}
        ],
        "Future tense 'tornerete' modified by the predicative adjective 'lesti' functioning adverbially. Mrs. Quickly will summon the lovers back for the surprise double wedding."
    ],
    # 33
    "Spiritelli! Folletti!": [
        "Little spirits! Goblins!",
        [
            {"word": "Spiritelli", "lemma": "spiritello", "pos": "noun", "meaning": "little spirits / sprites (diminutive of spirito)"},
            {"word": "Folletti", "lemma": "folletto", "pos": "noun", "meaning": "goblins / elves / imps"}
        ],
        "Vocative plural diminutives rallied by Bardolfo to begin the mock-demonic punishment of Sir John."
    ],
    # 34
    "Farfarelli! Vampiri! Agili insetti": [
        "Fiends! Vampires! Nimble insects",
        [
            {"word": "Farfarelli", "lemma": "farfarello", "pos": "noun", "meaning": "demons / imps (referencing Dante's Malebranche)"},
            {"word": "Vampiri", "lemma": "vampiro", "pos": "noun", "meaning": "vampires"},
            {"word": "Agili", "lemma": "agile", "pos": "adjective", "meaning": "nimble / agile"},
            {"word": "insetti", "lemma": "insetto", "pos": "noun", "meaning": "insects"}
        ],
        "Boito draws on Dante's Inferno (where Farfarello is a devil in canto XXI-XXII) and Gothic lore to build a mock-frightening catalogue of nocturnal tormentors."
    ],
    # 35
    "del palude infernale! Punzecchiatelo!": [
        "of the infernal swamp! Prick him!",
        [
            {"word": "palude", "lemma": "palude", "pos": "noun", "meaning": "swamp / marsh (masculine in archaic poetic usage)"},
            {"word": "infernale", "lemma": "infernale", "pos": "adjective", "meaning": "infernal / hellish"},
            {"word": "Punzecchiatelo", "lemma": "punzecchiare", "pos": "verb", "meaning": "prick him / prod him (imperative 2nd plur. punzecchiate + clitic lo)"}
        ],
        "Frequentative verb 'punzecchiare' in the imperative plural with direct object clitic 'lo' ('Punzecchiatelo!'). 'Palude' is treated as masculine ('del palude') in poetic elevated style."
    ],
    # 36
    "Orticheggiatelo!": [
        "Sting him with nettles!",
        [
            {"word": "Orticheggiatelo", "lemma": "orticheggiare", "pos": "verb", "meaning": "sting him with nettles / whip him with nettles (imperative 2nd plur. orticheggiate + clitic lo)"}
        ],
        "Inventive rare denominal verb 'orticheggiare' (from ortica, stinging nettle), commanding the spirits to scour Falstaff with nettles."
    ],
    # 37
    "Martirizzatelo": [
        "Torment him",
        [
            {"word": "Martirizzatelo", "lemma": "martirizzare", "pos": "verb", "meaning": "martyr him / torture him (imperative 2nd plur. martirizzate + clitic lo)"}
        ],
        "Imperative plural with attached direct object enclitic 'lo', completing the trio of dactylic commands ('Punzecchiatelo / Orticheggiatelo / Martirizzatelo')."
    ],
    # 38
    "coi grifi aguzzi!": [
        "with sharp snouts!",
        [
            {"word": "coi", "lemma": "con", "pos": "preposition", "meaning": "with the (articulated preposition con + i)"},
            {"word": "grifi", "lemma": "grifo", "pos": "noun", "meaning": "snouts / muzzles / grotesque faces"},
            {"word": "aguzzi", "lemma": "aguzzo", "pos": "adjective", "meaning": "sharp / pointed"}
        ],
        "Prepositional phrase describing the grotesque masks worn by the children. 'Grifo' evokes the bestial snout of a boar or demonic imp."
    ],
    # 39
    "Accorrono velocissimi alcuni ragazzi vestiti da folletti,": [
        "Some boys dressed as goblins run up very swiftly,",
        [
            {"word": "Accorrono", "lemma": "accorrere", "pos": "verb", "meaning": "run up / rush up (3rd plur. present)"},
            {"word": "velocissimi", "lemma": "veloce", "pos": "adjective", "meaning": "very swift / extremely fast (superlative)"},
            {"word": "ragazzi", "lemma": "ragazzo", "pos": "noun", "meaning": "boys / lads"},
            {"word": "vestiti", "lemma": "vestire", "pos": "verb", "meaning": "dressed / disguised (past participle as adjective)"},
            {"word": "folletti", "lemma": "folletto", "pos": "noun", "meaning": "goblins / elves"}
        ],
        "Stage direction describing the sudden onstage invasion of Windsor's masked children. The absolute superlative 'velocissimi' underscores their frantic, darting agility."
    ],
    # 40
    "e si scagliano su": [
        "and hurl themselves upon",
        [
            {"word": "si scagliano", "lemma": "scagliarsi", "pos": "verb", "meaning": "hurl themselves / pounce (3rd plur. present reflexive)"},
            {"word": "su", "lemma": "su", "pos": "preposition", "meaning": "on / upon"}
        ],
        "Continuation of the stage direction with the reflexive motion verb 'scagliarsi' governing the preposition 'su'."
    ],
    # 41
    "Falstaff.": [
        "Falstaff.",
        [
            {"word": "Falstaff", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff (proper name)"}
        ],
        "Proper name completing the object of the preposition 'su' in the stage direction."
    ],
    # 42
    "Ahimè! tu puzzi": [
        "Alas! you stink",
        [
            {"word": "Ahimè", "lemma": "ahimè", "pos": "interjection", "meaning": "alas! / woe is me!"},
            {"word": "tu", "lemma": "tu", "pos": "pronoun", "meaning": "you (2nd sing. subject pronoun)"},
            {"word": "puzzi", "lemma": "puzzare", "pos": "verb", "meaning": "you stink / reek (2nd sing. present)"}
        ],
        "Falstaff's groan turns into comic sudden recognition: in the midst of 'demonic' torment, he gets a blast of Bardolfo's notoriously foul breath."
    ],
    # 43
    "come una puzzola.": [
        "like a skunk.",
        [
            {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
            {"word": "puzzola", "lemma": "puzzola", "pos": "noun", "meaning": "polecat / skunk / ferret"}
        ],
        "Simile playing etymologically on 'puzzi / puzzola'. Falstaff instinctively identifies the 'demon' towering over him as his drunken henchman."
    ],
    # 44
    "FOLLETTI E DIAVOLI": [
        "Goblins and devils",
        [
            {"word": "FOLLETTI", "lemma": "folletto", "pos": "noun", "meaning": "goblins / elves"},
            {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "DIAVOLI", "lemma": "diavolo", "pos": "noun", "meaning": "devils / demons"}
        ],
        "Choral heading for the masked children and adults launching their kinetic assault on Sir John."
    ],
    # 45
    "Ruzzola, ruzzola, ruzzola, ruzzola!": [
        "Roll, roll, roll, roll!",
        [
            {"word": "Ruzzola", "lemma": "ruzzolare", "pos": "verb", "meaning": "roll / tumble / roll down (2nd sing. imperative or 3rd sing. present)"}
        ],
        "Fourfold rhythmic repetition of 'ruzzolare' (to roll, tumble head over heels), mirroring the physical rolling of Falstaff's massive body back and forth."
    ],
    # 46
    "Pizzica, pizzica,": [
        "Pinch, pinch,",
        [
            {"word": "Pizzica", "lemma": "pizzicare", "pos": "verb", "meaning": "pinch / nip / sting (2nd sing. imperative)"}
        ],
        "Opening refrain of Boito's sparkling Pizzica Chorus, adapting the fairy torment from Shakespeare's Merry Wives of Windsor into lightning-fast Italian octosyllables."
    ],
    # 47
    "pizzica, stuzzica,": [
        "pinch, prod,",
        [
            {"word": "pizzica", "lemma": "pizzicare", "pos": "verb", "meaning": "pinch / nip (2nd sing. imperative)"},
            {"word": "stuzzica", "lemma": "stuzzicare", "pos": "verb", "meaning": "prod / tease / provoke (2nd sing. imperative)"}
        ],
        "Rhyming paired imperatives ('pizzica, stuzzica') setting up a playful, relentless staccato rhythm."
    ],
    # 48
    "spizzica, spizzica,": [
        "nibble, nibble,",
        [
            {"word": "spizzica", "lemma": "spizzicare", "pos": "verb", "meaning": "nibble / pinch off bit by bit (2nd sing. imperative)"}
        ],
        "Iterative frequentative verb 'spizzicare' (derived from pizzicare), conveying miniature bites and pinpoint pinches."
    ],
    # 49
    "pungi, spilluzzica,": [
        "prick, pick away,",
        [
            {"word": "pungi", "lemma": "pungere", "pos": "verb", "meaning": "prick / sting (2nd sing. imperative of pungere)"},
            {"word": "spilluzzica", "lemma": "spilluzzicare", "pos": "verb", "meaning": "pluck away / nibble in tiny morsels (2nd sing. imperative)"}
        ],
        "Compound rhythm with irregular imperative 'pungi' paired with 'spilluzzica' (frequentative of spilluzzicare), evoking relentless insect stings."
    ],
    # 50
    "finch'egli abbai!": [
        "until he barks!",
        [
            {"word": "finch'", "lemma": "finché", "pos": "conjunction", "meaning": "until / as long as (elided conjunction)"},
            {"word": "egli", "lemma": "egli", "pos": "pronoun", "meaning": "he (3rd sing. subject pronoun)"},
            {"word": "abbai", "lemma": "abbaiare", "pos": "verb", "meaning": "barks / howls (3rd sing. present subjunctive)"}
        ],
        "Conjunctive temporal clause with subjunctive 'abbai'. The tormentors vow to pinch Falstaff until he howls like a beaten hound."
    ],
    # 51
    "Ahi! Ahi! Ahi! Ahi!": [
        "Ouch! Ouch! Ouch! Ouch!",
        [
            {"word": "Ahi", "lemma": "ahi", "pos": "interjection", "meaning": "ouch! / alas! (exclamation of pain)"}
        ],
        "Falstaff's four-beat comic yelps, puncturing the fairy chorus with genuine physical anguish."
    ],
    # 52
    "FOLLETTI, DIAVOLI": [
        "Goblins, devils",
        [
            {"word": "FOLLETTI", "lemma": "folletto", "pos": "noun", "meaning": "goblins / elves"},
            {"word": "DIAVOLI", "lemma": "diavolo", "pos": "noun", "meaning": "devils / demons"}
        ],
        "Character heading marking the full goblin ensemble taking up noisy percussion and dances."
    ],
    # 53
    "Scrolliam crepitacoli,": [
        "Let us shake rattles,",
        [
            {"word": "Scrolliam", "lemma": "scrollare", "pos": "verb", "meaning": "let us shake (1st plur. hortatory subjunctive, apocope of scrolliamo)"},
            {"word": "crepitacoli", "lemma": "crepitacolo", "pos": "noun", "meaning": "rattles / clappers / noisemakers"}
        ],
        "Hortatory 1st person plural 'Scrolliam' with classical noun 'crepitacoli' (Latin crepitaculum), referring to antique wooden rattles and clappers."
    ],
    # 54
    "scarandole e nacchere!": [
        "ratchets and castanets!",
        [
            {"word": "scarandole", "lemma": "scarandola", "pos": "noun", "meaning": "wooden ratchets / noisemakers (folk percussion)"},
            {"word": "nacchere", "lemma": "nacchera", "pos": "noun", "meaning": "castanets"}
        ],
        "Rare antique dialectal noun 'scarandole' (cog rattles/noisemakers) alongside 'nacchere' (castanets), creating an overwhelming acoustic assault."
    ],
    # 55
    "Di schizzi e di zacchere": [
        "With splashes and mud-splatters",
        [
            {"word": "schizzi", "lemma": "schizzo", "pos": "noun", "meaning": "splashes / squirts"},
            {"word": "zacchere", "lemma": "zacchera", "pos": "noun", "meaning": "mud-splatters / mud spots / dirt"}
        ],
        "Prepositional phrase of instrument. 'Zacchera' is an evocative Tuscan term for flecks of wet mud or mire kicked up from the road."
    ],
    # 56
    "quell'otre si macoli.": [
        "let that wineskin be besmirched.",
        [
            {"word": "quell'", "lemma": "quello", "pos": "particle", "meaning": "that (demonstrative determiner)"},
            {"word": "otre", "lemma": "otre", "pos": "noun", "meaning": "wineskin / leather flask (metaphor for a bloated drunkard)"},
            {"word": "si macoli", "lemma": "macolarsi", "pos": "verb", "meaning": "let be stained / bruised / dirtied (3rd sing. present subjunctive)"}
        ],
        "Passive/reflexive subjunctive 'si macoli' (from macolare/maculare, to stain or bruise). Falstaff's belly is derisively termed an 'otre' (wineskin)."
    ],
    # 57
    "Meniam scorribandole,": [
        "Let us conduct romping skirmishes,",
        [
            {"word": "Meniam", "lemma": "menare", "pos": "verb", "meaning": "let us lead / conduct / strike (1st plur. hortatory subjunctive)"},
            {"word": "scorribandole", "lemma": "scorribandola", "pos": "noun", "meaning": "frolicking raids / playful skirmishes (diminutive of scorribanda)"}
        ],
        "Verb 'menare' governing the playful diminutive 'scorribandole' (from scorribanda, a fast cavalry raid or incursion), applied to children running circles."
    ],
    # 58
    "danziamo la tresca,": [
        "let us dance the brawl,",
        [
            {"word": "danziamo", "lemma": "danzare", "pos": "verb", "meaning": "let us dance (1st plur. hortatory subjunctive / imperative)"},
            {"word": "tresca", "lemma": "tresca", "pos": "noun", "meaning": "wild rustic dance / tumult / brawl"}
        ],
        "'Tresca' denotes a medieval frenzied peasant round-dance, characterized by energetic leaping and foot-stamping."
    ],
    # 59
    "treschiam le farandole": [
        "let us dance the farandoles",
        [
            {"word": "treschiam", "lemma": "trescare", "pos": "verb", "meaning": "let us dance wildly / romp (1st plur. hortatory subjunctive, apocope of treschiamo)"},
            {"word": "farandole", "lemma": "farandola", "pos": "noun", "meaning": "farandoles (open-chain community circle dances)"}
        ],
        "Cognate accusative with the verb 'trescare' governing 'farandole' (the lively Provençal chain dance), illustrating the whirling ring of tormentors."
    ],
    # 60
    "sull'ampia ventresca.": [
        "upon his vast paunch.",
        [
            {"word": "sull'", "lemma": "su", "pos": "preposition", "meaning": "on the / upon the (articulated preposition su + la)"},
            {"word": "ampia", "lemma": "ampio", "pos": "adjective", "meaning": "vast / ample / wide"},
            {"word": "ventresca", "lemma": "ventresca", "pos": "noun", "meaning": "pork belly / paunch / flabby belly"}
        ],
        "Prepositional phrase setting the dance floor directly atop Falstaff's stomach. 'Ventresca' (cured pork belly) is a brutally comic butchers' term."
    ],
    # 61
    "Zanzare ed assilli,": [
        "Mosquitoes and gadflies,",
        [
            {"word": "Zanzare", "lemma": "zanzara", "pos": "noun", "meaning": "mosquitoes"},
            {"word": "assilli", "lemma": "assillo", "pos": "noun", "meaning": "gadflies / horseflies / stinging pests"}
        ],
        "Vocative invocation of pestilential insects. 'Assillo' is the bloodthirsty botfly or gadfly, used in Italian for relentless torment."
    ],
    # 62
    "volate alla lizza": [
        "fly to the lists",
        [
            {"word": "volate", "lemma": "volare", "pos": "verb", "meaning": "fly (2nd plur. imperative)"},
            {"word": "alla", "lemma": "a", "pos": "preposition", "meaning": "to the (articulated preposition a + la)"},
            {"word": "lizza", "lemma": "lizza", "pos": "noun", "meaning": "jousting lists / arena / tilting field"}
        ],
        "Chivalric tournament terminology: 'scendere alla lizza' means entering the jousting arena, mockingly elevating the pinch-mob to knightly combat."
    ],
    # 63
    "coi dardi e gli spilli!": [
        "with darts and pins!",
        [
            {"word": "coi", "lemma": "con", "pos": "preposition", "meaning": "with the (articulated preposition con + i)"},
            {"word": "dardi", "lemma": "dardo", "pos": "noun", "meaning": "darts / stings / arrows"},
            {"word": "spilli", "lemma": "spillo", "pos": "noun", "meaning": "pins / needles"}
        ],
        "Prepositional phrase identifying the weapons: miniature stingers ('dardi') and needles ('spilli')."
    ],
    # 64
    "Ch'ei crepi di stizza!": [
        "May he burst with rage!",
        [
            {"word": "Ch'", "lemma": "che", "pos": "conjunction", "meaning": "that / may (optative conjunction che)"},
            {"word": "ei", "lemma": "egli", "pos": "pronoun", "meaning": "he (poetic/archaic 3rd sing. pronoun)"},
            {"word": "crepi", "lemma": "crepare", "pos": "verb", "meaning": "burst / die (3rd sing. present subjunctive)"},
            {"word": "stizza", "lemma": "stizza", "pos": "noun", "meaning": "rage / spite / exasperation"}
        ],
        "Optative subjunctive clause ('Ch'ei crepi', may he burst/croak). 'Crepare di stizza' is a visceral colloquial idiom for choking in helpless fury."
    ],
    # 65
    "pungi, spilluzzica": [
        "sting, pick away",
        [
            {"word": "pungi", "lemma": "pungere", "pos": "verb", "meaning": "prick / sting (2nd sing. imperative)"},
            {"word": "spilluzzica", "lemma": "spilluzzicare", "pos": "verb", "meaning": "pluck away / nibble in tiny morsels (2nd sing. imperative)"}
        ],
        "Rhythmic return of the female refrain, sung in hushed staccato over the swirling orchestral figures."
    ],
    # 66
    "ALICE, MEG, QUICKLY E FATE": [
        "Alice, Meg, Quickly and Fairies",
        [
            {"word": "ALICE", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"},
            {"word": "MEG", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper name)"},
            {"word": "QUICKLY", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (proper name)"},
            {"word": "FATE", "lemma": "fata", "pos": "noun", "meaning": "fairies"}
        ],
        "Character heading indicating the female ensemble intensifying the rhythmic incantation."
    ],
    # 67
    "Cozzalo, aizzalo": [
        "Butt him, egg him on",
        [
            {"word": "Cozzalo", "lemma": "cozzare", "pos": "verb", "meaning": "butt him / ram him (imperative cozza + clitic lo)"},
            {"word": "aizzalo", "lemma": "aizzare", "pos": "verb", "meaning": "egg him on / incite him / provoke him (imperative aizza + clitic lo)"}
        ],
        "Dactylic sdrucciolo imperatives with attached direct object enclitic 'lo'. 'Cozzare' refers to head-butting like a ram or horned buck."
    ],
    # 68
    "dai piè al cocuzzolo!": [
        "from his feet to the crown of his head!",
        [
            {"word": "dai", "lemma": "da", "pos": "preposition", "meaning": "from the (articulated preposition da + i)"},
            {"word": "piè", "lemma": "piede", "pos": "noun", "meaning": "feet (poetic apocope of piedi)"},
            {"word": "cocuzzolo", "lemma": "cocuzzolo", "pos": "noun", "meaning": "summit / top / crown of the head"}
        ],
        "Tuscan idiom denoting top to bottom ('dai piedi alla testa'). 'Cocuzzolo' humorously refers to the very peak of his antlered head."
    ],
    # 69
    "Strozzalo, strizzalo!": [
        "Choke him, squeeze him!",
        [
            {"word": "Strozzalo", "lemma": "strozzare", "pos": "verb", "meaning": "choke him / throttle him (imperative strozza + clitic lo)"},
            {"word": "strizzalo", "lemma": "strizzare", "pos": "verb", "meaning": "squeeze him / wring him out (imperative strizza + clitic lo)"}
        ],
        "Vigorous alliterative rhyming imperatives with enclitic 'lo', mimicking the choking and wringing of laundry."
    ],
    # 70
    "Gli svampi l'uzzolo!": [
        "May his fancy vanish in smoke!",
        [
            {"word": "Gli", "lemma": "gli", "pos": "pronoun", "meaning": "in him / to him (dative pronoun)"},
            {"word": "svampi", "lemma": "svampare", "pos": "verb", "meaning": "vanish in smoke / evaporate / burn out (3rd sing. present subjunctive)"},
            {"word": "uzzolo", "lemma": "uzzolo", "pos": "noun", "meaning": "caprice / itch / lecherous whim"}
        ],
        "Optative subjunctive with dative clitic 'gli'. 'Uzzolo' is a colorful vernacular term for an amorous whim or persistent itch, which must be smoked out."
    ],
    # 71
    "Pizzica, pizzica, l'unghia rintuzzola!": [
        "Pinch, pinch, blunt the fingernail!",
        [
            {"word": "Pizzica", "lemma": "pizzicare", "pos": "verb", "meaning": "pinch / nip (2nd sing. imperative)"},
            {"word": "unghia", "lemma": "unghia", "pos": "noun", "meaning": "fingernail / claw"},
            {"word": "rintuzzola", "lemma": "rintuzzolare", "pos": "verb", "meaning": "blunt / turn back / wear down (2nd sing. imperative)"}
        ],
        "Imperative 'rintuzzola' (frequentative of rintuzzare, to blunt or turn the edge). The tormentors are urged to pinch so violently that their nails turn back on his tough hide."
    ],
    # 72
    "DR. CAJUS E FORD": [
        "Dr. Caius and Ford",
        [
            {"word": "DR.", "lemma": "dottore", "pos": "noun", "meaning": "Doctor (title abbreviation)"},
            {"word": "CAJUS", "lemma": "Cajus", "pos": "noun", "meaning": "Caius (proper name)"},
            {"word": "FORD", "lemma": "Ford", "pos": "noun", "meaning": "Ford (proper name)"}
        ],
        "Character heading for Dr. Caius and Master Ford stepping up to lead the rhythmic masculine litany of insults."
    ],
    # 73
    "Cialtron!": [
        "Scoundrel!",
        [
            {"word": "Cialtron", "lemma": "cialtrone", "pos": "noun", "meaning": "scoundrel / rascal / shameless buffoon (apocope of cialtrone)"}
        ],
        "Truncated insult ('Cialtron' for 'cialtrone'). Boito begins a dazzling chain of masculine augmentative nouns in -on hurled like hammer blows."
    ],
    # 74
    "Poltron!": [
        "Coward!",
        [
            {"word": "Poltron", "lemma": "poltrone", "pos": "noun", "meaning": "coward / sluggard / lazy knave (apocope of poltrone)"}
        ],
        "Insult branding Falstaff cowardly and indolent ('Poltron' for 'poltrone'), rhyming with 'Cialtron'."
    ],
    # 75
    "Ghiotton!": [
        "Glutton!",
        [
            {"word": "Ghiotton", "lemma": "ghiottone", "pos": "noun", "meaning": "glutton / gourmand (apocope of ghiottone)"}
        ],
        "Insult targeting Sir John's bottomless gluttony ('Ghiotton' for 'ghiottone')."
    ],
    # 76
    "TUTTI GLI UOMINI": [
        "All the men",
        [
            {"word": "TUTTI", "lemma": "tutto", "pos": "adjective", "meaning": "all (masculine plural)"},
            {"word": "UOMINI", "lemma": "uomo", "pos": "noun", "meaning": "men"}
        ],
        "Choral heading marking the full male chorus joining the barrage of rhythmic insults."
    ],
    # 77
    "Pancion!": [
        "Big belly!",
        [
            {"word": "Pancion", "lemma": "pancione", "pos": "noun", "meaning": "big belly / potbelly (augmentative of pancia, apocope of pancione)"}
        ],
        "Augmentative of 'pancia' ('Pancion' for 'pancione'), directly assailing his gigantic belly."
    ],
    # 78
    "Beon!": [
        "Drunkard!",
        [
            {"word": "Beon", "lemma": "beone", "pos": "noun", "meaning": "drunkard / heavy drinker (apocope of beone)"}
        ],
        "Agent noun from 'bere' ('Beon' for 'beone'), mocking his notorious appetite for wine and sack."
    ],
    # 79
    "Briccon!": [
        "Rogue!",
        [
            {"word": "Briccon", "lemma": "briccone", "pos": "noun", "meaning": "rogue / knave / scamp (apocope of briccone)"}
        ],
        "Classic Italian insult ('Briccon' for 'briccone'), completing the explosive succession of -on rhymes."
    ],
    # 80
    "In ginocchion!": [
        "On your knees!",
        [
            {"word": "In ginocchion", "lemma": "in ginocchione", "pos": "idiom", "meaning": "on bended knees / kneeling (apocope of in ginocchioni)"}
        ],
        "Adverbial posture idiom ('in ginocchion'), ordering the humiliated knight to prostrate himself like a penitent."
    ],
    # 81
    "Pancia ritronfia!": [
        "Swollen paunch!",
        [
            {"word": "Pancia", "lemma": "pancia", "pos": "noun", "meaning": "belly / paunch"},
            {"word": "ritronfia", "lemma": "ritronfio", "pos": "adjective", "meaning": "puffed up / bloated / arrogant"},
            {"word": "pancia ritronfia", "lemma": "pancia ritronfia", "pos": "idiom", "meaning": "swollen paunch (contemptuous epithet)"}
        ],
        "Ford's insult pairs 'pancia' with 'ritronfia' (intensive of tronfio, bloated/puffed with self-importance)."
    ],
    # 82
    "Guancia rigonfia!": [
        "Puffed cheek!",
        [
            {"word": "Guancia", "lemma": "guancia", "pos": "noun", "meaning": "cheek"},
            {"word": "rigonfia", "lemma": "rigonfio", "pos": "adjective", "meaning": "swollen / puffed out / distended"}
        ],
        "Alice's matching rhyming retort ('ritronfia / rigonfia'), mocking Falstaff's bloated, pendulous cheeks."
    ],
    # 83
    "Sconquassaletti!": [
        "Bed-smasher!",
        [
            {"word": "Sconquassaletti", "lemma": "sconquassaletti", "pos": "noun", "meaning": "bed-smasher / furniture-wrecker (compound of sconquassare + letti)"}
        ],
        "Inventive Italian compound noun (imperative verb stem 'sconquassa' + plural noun 'letti'), mocking the destructive impact of his weight in bed."
    ],
    # 84
    "Spaccafarsetti!": [
        "Doublet-burster!",
        [
            {"word": "Spaccafarsetti", "lemma": "spaccafarsetti", "pos": "noun", "meaning": "doublet-burster / coat-splitter (compound of spaccare + farsetti)"}
        ],
        "Mrs. Quickly's compound noun ('spaccare' + 'farsetti'), deriding the corpulence that splits doublets at the seams."
    ],
    # 85
    "Vuotabarili!": [
        "Barrel-emptier!",
        [
            {"word": "Vuotabarili", "lemma": "vuotabarili", "pos": "noun", "meaning": "barrel-emptier / cask-drainer (compound of vuotare + barili)"}
        ],
        "Pistola's compound noun ('vuotare' + 'barili'), scorning Falstaff's bottomless capacity to drain wine barrels."
    ],
    # 86
    "Sfiancagiumenti!": [
        "Mare-breaker!",
        [
            {"word": "Sfiancagiumenti", "lemma": "sfiancagiumenti", "pos": "noun", "meaning": "mare-breaker / horse-collapser (compound of sfiancare + giumenti)"}
        ],
        "Dr. Caius contributes a compound noun ('sfiancare', to exhaust/break the flanks + 'giumenti', packhorses/mares), evoking the poor horses crushed beneath Sir John."
    ],
    # 87
    "Triplice mento!": [
        "Triple chin!",
        [
            {"word": "Triplice", "lemma": "triplice", "pos": "adjective", "meaning": "triple / threefold"},
            {"word": "mento", "lemma": "mento", "pos": "noun", "meaning": "chin"}
        ],
        "Ford's anatomical jab highlighting Falstaff's folds of flesh, rhyming in -ento with the surrounding lines."
    ],
    # 88
    "Di' che ti penti!": [
        "Say that you repent!",
        [
            {"word": "Di'", "lemma": "dire", "pos": "verb", "meaning": "say / tell (2nd sing. imperative, apocope of dici)"},
            {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"},
            {"word": "ti penti", "lemma": "pentirsi", "pos": "verb", "meaning": "you repent (2nd sing. present reflexive)"}
        ],
        "The chorus demands a formal confession with imperative 'Di'' and subordinate reflexive clause 'che ti penti'."
    ],
    # 89
    "Ahi! Ahi! mi pento!": [
        "Ahi! Ahi! I repent!",
        [
            {"word": "Ahi", "lemma": "ahi", "pos": "interjection", "meaning": "ouch! / alas!"},
            {"word": "mi pento", "lemma": "pentirsi", "pos": "verb", "meaning": "I repent (1st sing. present reflexive)"}
        ],
        "Falstaff eagerly repeats 'mi pento' between yelps of pain, desperate to stop the pinching."
    ],
    # 90
    "Uom frodolento!": [
        "Fraudulent man!",
        [
            {"word": "Uom", "lemma": "uomo", "pos": "noun", "meaning": "man (poetic apocope of uomo)"},
            {"word": "frodolento", "lemma": "frodolento", "pos": "adjective", "meaning": "fraudulent / deceitful (archaic variant of fraudolento)"}
        ],
        "Moral denunciation using the archaic Tuscan form 'frodolento' to fit the strict rhyme scheme in -ento."
    ],
    # 91
    "GLI UOMINI": [
        "The men",
        [
            {"word": "GLI", "lemma": "il", "pos": "particle", "meaning": "the (masculine plural article)"},
            {"word": "UOMINI", "lemma": "uomo", "pos": "noun", "meaning": "men"}
        ],
        "Libretto character heading marking the male chorus continuing their rhythmic catechism."
    ],
    # 92
    "Uom turbolento!": [
        "Turbulent man!",
        [
            {"word": "Uom", "lemma": "uomo", "pos": "noun", "meaning": "man (poetic apocope of uomo)"},
            {"word": "turbolento", "lemma": "turbolento", "pos": "adjective", "meaning": "turbulent / riotous / unruly"}
        ],
        "Parallel noun phrase castigating Falstaff as a riotous disturber of public and domestic tranquility."
    ],
    # 93
    "Capron!": [
        "Old goat!",
        [
            {"word": "Capron", "lemma": "caprone", "pos": "noun", "meaning": "he-goat / billy-goat / lustful old goat (apocope of caprone)"}
        ],
        "Insult mocking both his antlered costume and his lascivious lechery ('Capron' for 'caprone', the quintessential symbol of lust)."
    ],
    # 94
    "Scroccon!": [
        "Sponger!",
        [
            {"word": "Scroccon", "lemma": "scroccone", "pos": "noun", "meaning": "freeloader / moocher / sponger (apocope of scroccone)"}
        ],
        "Noun derived from 'scroccare' ('Scroccon' for 'scroccone'), stigmatizing his habit of living at others' expense."
    ],
    # 95
    "Spaccon!": [
        "Braggart!",
        [
            {"word": "Spaccon", "lemma": "spaccone", "pos": "noun", "meaning": "braggart / blusterer / swaggerer (apocope of spaccone)"}
        ],
        "Insult derived from 'spaccare' ('Spaccon' for 'spaccone'), targeting his bluster and tall tales."
    ],
    # 96
    "Perdon!": [
        "Pardon!",
        [
            {"word": "Perdon", "lemma": "perdono", "pos": "noun", "meaning": "pardon / forgiveness (poetic apocope of perdono)"}
        ],
        "Falstaff's breathless one-word cry for mercy, cleverly rhyming with the barrage of -on insults ('Perdon' for 'perdono')."
    ],
    # 97
    "Riforma la tua vita!": [
        "Reform your life!",
        [
            {"word": "Riforma", "lemma": "riformare", "pos": "verb", "meaning": "reform / mend (2nd sing. imperative)"},
            {"word": "tua", "lemma": "tuo", "pos": "pronoun", "meaning": "your (possessive determiner)"},
            {"word": "vita", "lemma": "vita", "pos": "noun", "meaning": "life"}
        ],
        "Bardolfo sanctimoniously preaches moral reform to his master, adopting the posture of a holy inquisitor."
    ],
    # 98
    "Tu puti d'acquavita.": [
        "You stink of brandy.",
        [
            {"word": "Tu", "lemma": "tu", "pos": "pronoun", "meaning": "you (2nd sing. subject pronoun)"},
            {"word": "puti", "lemma": "putire", "pos": "verb", "meaning": "you stink / reek (2nd sing. present of literary putire)"},
            {"word": "acquavita", "lemma": "acquavite", "pos": "noun", "meaning": "brandy / spirits / eau-de-vie (variant of acquavite)"}
        ],
        "Falstaff unmasks Bardolfo by his breath alone. The verb 'putire' (to stink) governs the preposition 'di' ('d'acquavita'), rhyming hilariously with 'vita'."
    ],
    # 99
    "LE DONNE": [
        "The women",
        [
            {"word": "LE", "lemma": "il", "pos": "particle", "meaning": "the (feminine plural article)"},
            {"word": "DONNE", "lemma": "donna", "pos": "noun", "meaning": "women"}
        ],
        "Choral heading for the women taking up the mock-liturgical litany over Falstaff."
    ],
    # 100
    "Domine fallo casto!": [
        "Lord make him chaste!",
        [
            {"word": "Domine", "lemma": "domine", "pos": "noun", "meaning": "Lord (Latin vocative of Dominus)"},
            {"word": "fallo", "lemma": "fare", "pos": "verb", "meaning": "make him (imperative fa + direct object clitic lo with syntactic doubling)"},
            {"word": "casto", "lemma": "casto", "pos": "adjective", "meaning": "chaste / pure"}
        ],
        "Mock-Latin ecclesiastical prayer: Latin vocative 'Domine' combined with Italian causative imperative 'fallo' (fa + lo, with raddoppiamento sintattico)."
    ],
    # 101
    "Ma salvagli l'addomine.": [
        "But save his abdomen.",
        [
            {"word": "Ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
            {"word": "salvagli", "lemma": "salvare", "pos": "verb", "meaning": "save for him (imperative salva + indirect object clitic gli)"},
            {"word": "addomine", "lemma": "addome", "pos": "noun", "meaning": "abdomen / belly (comic mock-Latinate form rhyming with Domine)"}
        ],
        "Boito's celebrated comedic invention: creating a pseudo-Latinized noun 'addomine' (from addome, abdomen/belly) to rhyme with liturgical 'Domine'."
    ],
    # 102
    "Domine fallo guasto!": [
        "Lord make him ruined!",
        [
            {"word": "Domine", "lemma": "domine", "pos": "noun", "meaning": "Lord (Latin vocative of Dominus)"},
            {"word": "fallo", "lemma": "fare", "pos": "verb", "meaning": "make him (imperative fa + clitic lo)"},
            {"word": "guasto", "lemma": "guasto", "pos": "adjective", "meaning": "ruined / spoiled / broken"}
        ],
        "Continuation of the mock litany with causative 'fallo guasto' (make him ruined/wretched), rhyming with 'casto'."
    ],
    # 103
    "Fallo punito domine!": [
        "Make him punished, Lord!",
        [
            {"word": "Fallo", "lemma": "fare", "pos": "verb", "meaning": "make him (imperative fa + clitic lo)"},
            {"word": "punito", "lemma": "punire", "pos": "adjective", "meaning": "punished (past participle used as adjective)"},
            {"word": "domine", "lemma": "domine", "pos": "noun", "meaning": "Lord (Latin vocative)"}
        ],
        "Inverted litany with 'domine' at the cadence, praying for righteous punishment upon the sinner."
    ],
    # 104
    "Fallo pentito domine!": [
        "Make him repentant, Lord!",
        [
            {"word": "Fallo", "lemma": "fare", "pos": "verb", "meaning": "make him (imperative fa + clitic lo)"},
            {"word": "pentito", "lemma": "pentito", "pos": "adjective", "meaning": "repentant / contrite"},
            {"word": "domine", "lemma": "domine", "pos": "noun", "meaning": "Lord (Latin vocative)"}
        ],
        "Couplet completion with 'punito / pentito', pleading for Sir John's complete spiritual repentance."
    ],
    # 105
    "Globo d'impurità, rispondi.": [
        "Globe of impurity, answer.",
        [
            {"word": "Globo", "lemma": "globo", "pos": "noun", "meaning": "globe / sphere"},
            {"word": "impurità", "lemma": "impurità", "pos": "noun", "meaning": "impurity / sinfulness"},
            {"word": "rispondi", "lemma": "rispondere", "pos": "verb", "meaning": "answer / reply (2nd sing. imperative)"}
        ],
        "Formal inquisitorial catechism: addressing Falstaff's spherical shape as a concentrated 'Globo d'impurità', demanding an admission of guilt."
    ],
    # 106
    "Ben mi sta.": [
        "It serves me right.",
        [
            {"word": "Ben mi sta", "lemma": "stare bene", "pos": "idiom", "meaning": "it serves me right / I deserve it (idiomatic expression of resignation)"}
        ],
        "Colloquial Italian idiom of resignation ('Ben mi sta!'). Falstaff humbly admits his deserved punishment."
    ],
    # 107
    "Monte d'obesità, rispondi.": [
        "Mountain of obesity, answer.",
        [
            {"word": "Monte", "lemma": "monte", "pos": "noun", "meaning": "mountain"},
            {"word": "obesità", "lemma": "obesità", "pos": "noun", "meaning": "obesity / fatness"},
            {"word": "rispondi", "lemma": "rispondere", "pos": "verb", "meaning": "answer / reply (2nd sing. imperative)"}
        ],
        "Second catechism challenge: 'Monte d'obesità' translates Shakespeare's 'this mountain of mummy' into Boito's grand mock-heroic verse."
    ],
    # 108
    "Otre di malvasia, rispondi.": [
        "Wineskin of Malmsey, answer.",
        [
            {"word": "Otre", "lemma": "otre", "pos": "noun", "meaning": "wineskin / leather wine container"},
            {"word": "malvasia", "lemma": "malvasia", "pos": "noun", "meaning": "Malmsey / sweet Mediterranean wine"},
            {"word": "rispondi", "lemma": "rispondere", "pos": "verb", "meaning": "answer / reply (2nd sing. imperative)"}
        ],
        "Third catechism question: 'Otre di malvasia' evokes Prince Hal's insults of Falstaff as a vessel of wine and sweet Malmsey."
    ],
    # 109
    "Così sia.": [
        "So be it.",
        [
            {"word": "Così sia", "lemma": "così sia", "pos": "idiom", "meaning": "so be it / amen (liturgical closing formula)"}
        ],
        "Liturgical closing formula 'Così sia' (the standard vernacular rendering of Latin 'Amen'), rhyming with 'malvasia' and concluding the mock-exorcism."
    ]
}

def main():
    # Load raw lines
    with open("scripts/falstaff_act3_sc2_partB.json", "r", encoding="utf-8") as f:
        raw_lines = json.load(f)

    print(f"Loaded {len(raw_lines)} raw lines.")
    assert len(raw_lines) == 110, f"Expected 110 lines, got {len(raw_lines)}"
    assert len(curated_data) == 110, f"Expected 110 curated entries, got {len(curated_data)}"

    # Validate each line from raw_lines
    for idx, line in enumerate(raw_lines):
        orig = line["original"]
        assert orig in curated_data, f"Line missing from curated_data: {repr(orig)} (index {idx})"

        val = curated_data[orig]
        assert isinstance(val, list) and len(val) == 3, f"Entry {orig} must be a 3-element list"
        lit, toks, gnote = val

        # Check literal
        assert isinstance(lit, str) and len(lit.strip()) > 0, f"Empty literal for {orig}"
        if orig[0].isupper():
            assert lit[0].isupper(), f"Literal must start with uppercase for {orig}: {lit}"

        # Check tokens
        assert isinstance(toks, list) and 1 <= len(toks) <= 5, f"Tokens count for {orig} must be between 1 and 5, got {len(toks)}"
        for tok in toks:
            assert isinstance(tok, dict), f"Token in {orig} not dict: {tok}"
            for k in ["word", "lemma", "pos", "meaning"]:
                assert k in tok and tok[k], f"Missing/empty key {k} in token {tok} for {orig}"
            assert tok["pos"] in ALLOWED_POS, f"Invalid pos '{tok['pos']}' in {tok} for {orig}. Allowed: {ALLOWED_POS}"

        # Check grammar note
        assert gnote is None or (isinstance(gnote, str) and len(gnote.strip()) > 0), f"Invalid grammarNote for {orig}"

    # Save to scripts/falstaff_curated_a3_sc2_partB.json
    output_path = "scripts/falstaff_curated_a3_sc2_partB.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(curated_data, f, ensure_ascii=False, indent=2)

    print(f"Successfully validated and saved {len(curated_data)} entries to {output_path}!")

if __name__ == "__main__":
    main()

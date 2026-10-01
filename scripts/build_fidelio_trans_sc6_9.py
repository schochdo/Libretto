import json

# Act 1: Scenes 6 to 9
# Scene 6: Marsch der Wache (14 lines)
# Scene 7: Arie mit Chor Don Pizarro (36 lines)
# Scene 8: Duett Pizarro & Rocco (68 lines)
# Scene 9: Rezitativ und Arie Leonore (42 lines)

TRANS_SC6_9 = {
    # --- SCENE 6: Marsch der Wache & dialogue ---
    "Wo sind die Depeschen?": (
        "Where are the dispatches?",
        [
            {"word": "Depeschen", "lemma": "Depesche", "pos": "noun", "meaning": "dispatches / urgent letters"}
        ],
        None
    ),
    "Hier.": (
        "Here.",
        [{"word": "Hier", "lemma": "hier", "pos": "adverb", "meaning": "here"}],
        None
    ),
    "Immer Empfehlungen und Vorwürfe!": (
        "Always recommendations and reproaches!",
        [
            {"word": "Empfehlungen", "lemma": "Empfehlung", "pos": "noun", "meaning": "recommendations / petitions"},
            {"word": "Vorwürfe", "lemma": "Vorwurf", "pos": "noun", "meaning": "reproaches / accusations"}
        ],
        None
    ),
    "Ha! Was ist das?": (
        "Ha! What is that?",
        [{"word": "Was ist das", "lemma": "was", "pos": "phrase", "meaning": "what is that"}],
        None
    ),
    "»Ich gebe Ihnen Nachricht, daß der Minister in Erfahrung gebracht hat, daß die Staatsgefängnisse Ihrer Aufsicht willkürlich verwaltet werden. Er reist morgen ab, um Sie mit einer Untersuchung zu überraschen. Seien Sie auf Ihrer Hut!«": (
        "»I give to-you notice, that the Minister in experience brought has, that the state-prisons of-your supervision arbitrarily administered are. He departs tomorrow off, in-order you with an investigation to surprise. Be you on your guard!«",
        [
            {"word": "in Erfahrung bringen", "lemma": "Erfahrung", "pos": "phrase", "meaning": "to find out / discover / learn"},
            {"word": "willkürlich", "lemma": "willkürlich", "pos": "adverb", "meaning": "arbitrarily / despotically"},
            {"word": "verwaltet", "lemma": "verwalten", "pos": "verb", "meaning": "administered / governed"},
            {"word": "Untersuchung", "lemma": "Untersuchung", "pos": "noun", "meaning": "investigation / inquiry"},
            {"word": "auf der Hut sein", "lemma": "Hut", "pos": "phrase", "meaning": "to be on one's guard"}
        ],
        "Functional verb idiom: 'in Erfahrung gebracht hat' (has learned/ascertained)."
    ),
    "Gott! Wenn er erführe, daß ich diesen Florestan in Ketten halte, den er längst tot glaubt!": (
        "God! If he learned, that I this Florestan in chains hold, whom he long dead believes!",
        [
            {"word": "erführe", "lemma": "erfahren", "pos": "verb", "meaning": "learned / found out (subjunctive II)"},
            {"word": "längst", "lemma": "längst", "pos": "adverb", "meaning": "long since / long ago"},
            {"word": "tot glaubt", "lemma": "glauben", "pos": "verb", "meaning": "believes dead"}
        ],
        "Conditional subjunctive II 'erführe' expressing anxiety over discovery."
    ),
    "Ein Tag, eine Stunde kann mich stürzen!": (
        "A day, an hour can me overthrow!",
        [
            {"word": "stürzen", "lemma": "stürzen", "pos": "verb", "meaning": "overthrow / bring down"}
        ],
        None
    ),
    "Dieser Mann, der mich beim Minister verklagte, der meinen Fall reizte!": (
        "This man, who me before-the Minister accused, who my downfall provoked!",
        [
            {"word": "verklagte", "lemma": "verklagen", "pos": "verb", "meaning": "accused / denounced"},
            {"word": "Fall", "lemma": "Fall", "pos": "noun", "meaning": "downfall / ruin"},
            {"word": "reizte", "lemma": "reizen", "pos": "verb", "meaning": "instigated / provoked"}
        ],
        None
    ),
    "Doch es gibt ein Mittel!": (
        "Yet there gives a means!",
        [
            {"word": "Mittel", "lemma": "Mittel", "pos": "noun", "meaning": "means / remedy / recourse"}
        ],
        "Idiom 'es gibt ein Mittel' (there is a remedy)."
    ),
    "Eine kühne Tat kann alle Besorgnisse zerstreuen!": (
        "A bold deed can all apprehensions disperse!",
        [
            {"word": "kühne Tat", "lemma": "Tat", "pos": "noun", "meaning": "bold deed"},
            {"word": "Besorgnisse", "lemma": "Besorgnis", "pos": "noun", "meaning": "fears / misgivings"},
            {"word": "zerstreuen", "lemma": "zerstreuen", "pos": "verb", "meaning": "dispel / scatter"}
        ],
        None
    ),

    # --- SCENE 7: Nr. 7 Arie mit Chor Don Pizarro ---
    "Ha! Welch’ ein Augenblick!": (
        "Ha! What a moment!",
        [
            {"word": "Welch' ein", "lemma": "welch", "pos": "determiner", "meaning": "what a"},
            {"word": "Augenblick", "lemma": "Augenblick", "pos": "noun", "meaning": "moment / instant"}
        ],
        None
    ),
    "Die Rache werd’ ich kühlen,": (
        "The vengeance will I cool [slake],",
        [
            {"word": "Rache", "lemma": "Rache", "pos": "noun", "meaning": "vengeance / revenge (feminine accusative)"},
            {"word": "kühlen", "lemma": "kühlen", "pos": "verb", "meaning": "cool / slake / satisfy"}
        ],
        "Idiom 'seine Rache kühlen' (to satisfy/slake one's vengeance)."
    ),
    "dich rufet dein Geschick!": (
        "you calls your destiny!",
        [
            {"word": "dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative object)"},
            {"word": "rufet", "lemma": "rufen", "pos": "verb", "meaning": "calls"},
            {"word": "dein Geschick", "lemma": "Geschick", "pos": "noun", "meaning": "your destiny / fate (subject nominative)"}
        ],
        "Inversion OVS: 'dich' fronted for dramatic confrontation."
    ),
    "In seinem Herzen wühlen,": (
        "In his heart to-burrow,",
        [
            {"word": "wühlen", "lemma": "wühlen", "pos": "verb", "meaning": "to burrow / dig / root"}
        ],
        None
    ),
    "ihn tilgen, o Wonne!": (
        "him to-annihilate, o bliss!",
        [
            {"word": "tilgen", "lemma": "tilgen", "pos": "verb", "meaning": "to eradicate / exterminate / wipe out"},
            {"word": "Wonne", "lemma": "Wonne", "pos": "noun", "meaning": "delight / rapture"}
        ],
        None
    ),
    "Ihn noch einmal im Staube seh’n,": (
        "Him once more in-the dust to-see,",
        [
            {"word": "im Staube", "lemma": "Staub", "pos": "noun", "meaning": "in the dust"}
        ],
        "Idiom 'im Staube sehen' (to see someone groveling in defeat)."
    ),
    "den Fuß auf seinen Nacken setzen,": (
        "the foot upon his neck to-set,",
        [
            {"word": "Nacken", "lemma": "Nacken", "pos": "noun", "meaning": "neck / nape"},
            {"word": "setzen", "lemma": "setzen", "pos": "verb", "meaning": "to place / set"}
        ],
        "Classical martial trope of triumphal subjugation."
    ),
    "sein Röcheln noch vernehmen,": (
        "his death-rattle still to-hear,",
        [
            {"word": "Röcheln", "lemma": "Röcheln", "pos": "noun", "meaning": "death-rattle / gasping (substantivized infinitive)"},
            {"word": "vernehmen", "lemma": "vernehmen", "pos": "verb", "meaning": "hear / perceive"}
        ],
        None
    ),
    "dann sterben! O Wonne!": (
        "then to-die! O bliss!",
        [{"word": "sterben", "lemma": "sterben", "pos": "verb", "meaning": "to die"}],
        None
    ),
    "Triumph! Der Sieg ist mein!": (
        "Triumph! The victory is mine!",
        [
            {"word": "Triumph", "lemma": "Triumph", "pos": "noun", "meaning": "triumph"},
            {"word": "Sieg", "lemma": "Sieg", "pos": "noun", "meaning": "victory"}
        ],
        None
    ),
    "Er spricht von Tod und Wunde,": (
        "He speaks of death and wound,",
        [
            {"word": "spricht", "lemma": "sprechen", "pos": "verb", "meaning": "speaks"},
            {"word": "Wunde", "lemma": "Wunde", "pos": "noun", "meaning": "wound"}
        ],
        None
    ),
    "nun fort auf unsre Runde,": (
        "now away upon our round,",
        [
            {"word": "Runde", "lemma": "Runde", "pos": "noun", "meaning": "patrol / sentry round"}
        ],
        None
    ),
    "wie wichtig muß es sein!": (
        "how important must it be!",
        [
            {"word": "wichtig", "lemma": "wichtig", "pos": "adjective", "meaning": "important"}
        ],
        None
    ),
    "Hauptmann! Besteigen Sie mit einem Trompeter sogleich den Turm; sehen Sie mit der größten Aufmerksamkeit nach der Straße von Sevilla! Sobald Sie einen Wagen mit Gefolge sehen, lassen Sie ein Signal blasen! Hören Sie? Das Signal! Auf der Stelle! Ich erwarte die größte Pünktlichkeit! Sie haften mir mit ihrem Kopf dafür. Rocco!": (
        "Captain! Mount you with a trumpeter immediately the tower; look you with the greatest attentiveness toward the road of Seville! As soon as you a carriage with entourage see, let you a signal sound! Hear you? The signal! On the spot! I expect the greatest punctuality! You answer to-me with your head therefor. Rocco!",
        [
            {"word": "besteigen", "lemma": "besteigen", "pos": "verb", "meaning": "mount / ascend"},
            {"word": "Aufmerksamkeit", "lemma": "Aufmerksamkeit", "pos": "noun", "meaning": "attentiveness"},
            {"word": "haften", "lemma": "haften für", "pos": "verb", "meaning": "to vouch / be answerable for with one's life"}
        ],
        "Formal imperative syntax with 'Sie': 'Besteigen Sie', 'sehen Sie', 'lassen Sie'."
    ),
    "Herr!": (
        "Sir!",
        [{"word": "Herr", "lemma": "Herr", "pos": "noun", "meaning": "Lord / Master / Sir"}],
        None
    ),

    # --- SCENE 8: Nr. 8 Duett Pizarro & Rocco ---
    "Jetzt, Alter, jetzt hat es Eile!": (
        "Now, old-man, now has it haste!",
        [
            {"word": "Alter", "lemma": "Alter", "pos": "noun", "meaning": "old man"},
            {"word": "Eile haben", "lemma": "Eile", "pos": "phrase", "meaning": "to be urgent / pressing"}
        ],
        "Idiom 'es hat Eile' (there is urgency / no time to lose)."
    ),
    "Dir wird ein Glück zu Teile,": (
        "To-you becomes a good-fortune apportioned,",
        [
            {"word": "Glück", "lemma": "Glück", "pos": "noun", "meaning": "fortune / luck"},
            {"word": "zu Teile werden", "lemma": "zuteilwerden", "pos": "verb", "meaning": "to fall to someone's lot / be granted"}
        ],
        "Idiom 'jemandem zuteilwerden' taking dative 'Dir'."
    ),
    "du wirst ein reicher Mann;": (
        "you will-become a rich man;",
        [
            {"word": "reicher Mann", "lemma": "Mann", "pos": "noun", "meaning": "rich man"}
        ],
        None
    ),
    "das geb’ ich dir im voraus an.": (
        "that give I to-you in advance on.",
        [
            {"word": "im voraus", "lemma": "im Voraus", "pos": "adverb", "meaning": "in advance"},
            {"word": "angeben", "lemma": "angeben", "pos": "verb", "meaning": "assign / bestow"}
        ],
        None
    ),
    "So sagt mir nur, auf welche Weise?": (
        "So say to-me only, in what manner?",
        [
            {"word": "auf welche Weise", "lemma": "Weise", "pos": "phrase", "meaning": "in what way / manner"}
        ],
        None
    ),
    "Ich bin zu allem bereit.": (
        "I am for everything ready.",
        [
            {"word": "zu allem", "lemma": "alles", "pos": "pronoun", "meaning": "to/for everything (dative)"}
        ],
        None
    ),
    "Man muß fürs Vaterland ...": (
        "One must for-the fatherland ...",
        [
            {"word": "fürs Vaterland", "lemma": "Vaterland", "pos": "noun", "meaning": "for the fatherland (für + das)"}
        ],
        None
    ),
    "Du hast Verstand, du hast Entschlossenheit,": (
        "You have understanding, you have resolution,",
        [
            {"word": "Verstand", "lemma": "Verstand", "pos": "noun", "meaning": "intelligence / good sense"},
            {"word": "Entschlossenheit", "lemma": "Entschlossenheit", "pos": "noun", "meaning": "determination / resolve"}
        ],
        None
    ),
    "du bist im Dienste alt geworden.": (
        "you are in-the service old become.",
        [
            {"word": "im Dienste", "lemma": "Dienst", "pos": "noun", "meaning": "in service (dative)"},
            {"word": "alt geworden", "lemma": "werden", "pos": "verb", "meaning": "grown old"}
        ],
        None
    ),
    "Was soll ich tun?": (
        "What shall I do?",
        [{"word": "Was soll ich tun", "lemma": "sollen", "pos": "phrase", "meaning": "what am I to do"}],
        None
    ),
    "Morden!": (
        "Murder!",
        [{"word": "Morden", "lemma": "morden", "pos": "verb", "meaning": "to murder / murder!"}],
        None
    ),
    "Wie?": (
        "How?",
        [{"word": "Wie", "lemma": "wie", "pos": "adverb", "meaning": "how / what?"}],
        None
    ),
    "Höre mich! Du bebst?": (
        "Hear me! You tremble?",
        [
            {"word": "bebst", "lemma": "beben", "pos": "verb", "meaning": "tremble / quake"}
        ],
        None
    ),
    "Bist du ein Mann? Wir dürfen nicht säumen;": (
        "Are you a man? We may not delay;",
        [
            {"word": "säumen", "lemma": "säumen", "pos": "verb", "meaning": "tarry / delay / linger"}
        ],
        None
    ),
    "es gilt dem Staat, ihn wegzuräumen,": (
        "it concerns the state, him to-clear-away,",
        [
            {"word": "es gilt", "lemma": "gelten", "pos": "verb", "meaning": "it is a matter of / it concerns (takes dative)"},
            {"word": "wegzuräumen", "lemma": "wegräumen", "pos": "verb", "meaning": "to remove / dispose of"}
        ],
        "Idiom 'es gilt...' (the stakes are...)."
    ),
    "der böse Bürger stürzt uns ein.": (
        "the wicked citizen plunges us in.",
        [
            {"word": "böse Bürger", "lemma": "Bürger", "pos": "noun", "meaning": "wicked/rebellious citizen"},
            {"word": "einstürzen", "lemma": "einstürzen", "pos": "verb", "meaning": "bring down / ruin"}
        ],
        None
    ),
    "O Herr! Ich darf doch nicht ...": (
        "O sir! I may though not ...",
        [{"word": "darf", "lemma": "dürfen", "pos": "verb", "meaning": "may / am allowed"}],
        None
    ),
    "Du zauderst?": (
        "You hesitate?",
        [{"word": "zauderst", "lemma": "zaudern", "pos": "verb", "meaning": "dither / hesitate"}],
        None
    ),
    "Meine Glieder fühl’ ich beben,": (
        "My limbs feel I tremble,",
        [
            {"word": "Glieder", "lemma": "Glied", "pos": "noun", "meaning": "limbs (accusative plural)"},
            {"word": "beben", "lemma": "beben", "pos": "verb", "meaning": "to tremble (bare infinitive with fühlen)"}
        ],
        "Accusativus cum infinitivo (AcI) with perception verb 'fühlen'."
    ),
    "wie könnt’ ich das besteh’n?": (
        "how could I that endure?",
        [
            {"word": "könnt'", "lemma": "können", "pos": "verb", "meaning": "could (subjunctive II)"},
            {"word": "besteh'n", "lemma": "bestehen", "pos": "verb", "meaning": "survive / endure / undergo"}
        ],
        None
    ),
    "Ich nehm’ ihm nicht das Leben,": (
        "I take from-him not the life,",
        [
            {"word": "ihm", "lemma": "er", "pos": "pronoun", "meaning": "from him (dative of separation)"},
            {"word": "das Leben nehmen", "lemma": "Leben", "pos": "phrase", "meaning": "to take someone's life"}
        ],
        "Dative of disadvantage: 'jemandem das Leben nehmen'."
    ),
    "mag, was da will, gescheh’n.": (
        "may, what there wants, happen.",
        [
            {"word": "gescheh'n", "lemma": "geschehen", "pos": "verb", "meaning": "happen / transpire"}
        ],
        "Concessive formula: 'geschehe, was da wolle' (come what may)."
    ),
    "Nein, Herr, das Leben nehmen, das ist nicht meine Pflicht.": (
        "No, sir, the life to-take, that is not my duty.",
        [
            {"word": "Pflicht", "lemma": "Pflicht", "pos": "noun", "meaning": "duty"}
        ],
        None
    ),
    "Ich will mich selbst bequemen, wenn dir der Mut gebricht.": (
        "I will myself deign, if to-you courage lacks.",
        [
            {"word": "mich... bequemen", "lemma": "sich bequemen", "pos": "verb", "meaning": "condescend / take the trouble oneself"},
            {"word": "gebricht", "lemma": "gebrechen", "pos": "verb", "meaning": "lacks / fails (impersonal verb taking dative)"}
        ],
        "Archaic impersonal verb: 'es gebricht jemandem an etwas'."
    ),
    "Nun eilen wir behende! Du steigst hinab zur Zisterne ...": (
        "Now hurry we nimbly! You descend down to-the cistern ...",
        [
            {"word": "behende", "lemma": "behende", "pos": "adverb", "meaning": "swiftly / nimbly"},
            {"word": "Zisterne", "lemma": "Zisterne", "pos": "noun", "meaning": "cistern"}
        ],
        None
    ),
    "Und dann?": (
        "And then?",
        [{"word": "Und dann", "lemma": "dann", "pos": "phrase", "meaning": "and then?"}],
        None
    ),
    "Du gräbst die Grube fertig, damit der Tote spurlos verschwinde. Ein Stoß – und er verstummt!": (
        "You dig the pit finished, so-that the dead-man tracelessly disappears. One thrust – and he is-silenced!",
        [
            {"word": "Grube", "lemma": "Grube", "pos": "noun", "meaning": "grave / pit"},
            {"word": "spurlos", "lemma": "spurlos", "pos": "adverb", "meaning": "without a trace"},
            {"word": "verstummt", "lemma": "verstummen", "pos": "verb", "meaning": "falls silent"}
        ],
        None
    ),
    "Verhungernd in den Ketten, ertrug er lange Pein, ihn töten, heißt ihn retten, der Dolch wird ihn befrei’n.": (
        "Starving in the chains, endured he long agony, him to-kill, means him to-save, the dagger will him free.",
        [
            {"word": "Verhungernd", "lemma": "verhungern", "pos": "verb", "meaning": "starving (present participle)"},
            {"word": "ertrug", "lemma": "ertragen", "pos": "verb", "meaning": "endured (preterite)"},
            {"word": "Pein", "lemma": "Pein", "pos": "noun", "meaning": "pain / torture"},
            {"word": "Dolch", "lemma": "Dolch", "pos": "noun", "meaning": "dagger"}
        ],
        None
    ),
    "Er sterbe in den Ketten, zu kurz war seine Pein! Sein Tod nur kann mich retten, dann werd’ ich ruhig sein!": (
        "Let-him-die in the chains, too short was his pain! His death only can me save, then will I quiet be!",
        [
            {"word": "Er sterbe", "lemma": "sterben", "pos": "verb", "meaning": "let him die (third-person subjunctive I jussive)"},
            {"word": "ruhig", "lemma": "ruhig", "pos": "adjective", "meaning": "peaceful / at rest"}
        ],
        "Jussive subjunctive I expressing a ruthless command: 'Er sterbe'."
    ),

    # --- SCENE 9: Nr. 9 Rezitativ und Arie Leonore ---
    "Abscheulicher! Wo eilst du hin?": (
        "Abominable-one! Where hurry you to?",
        [
            {"word": "Abscheulicher", "lemma": "abscheulich", "pos": "adjective", "meaning": "monstrous one / abomination", "notes": "Substantivized adjective in vocative masculine."},
            {"word": "wohin", "lemma": "wohin", "pos": "adverb", "meaning": "whither / where to"}
        ],
        None
    ),
    "Was hast du vor in wildem Grimme?": (
        "What have you before in wild fury?",
        [
            {"word": "vorhaben", "lemma": "vorhaben", "pos": "verb", "meaning": "to intend / plan"},
            {"word": "Grimme", "lemma": "Grimm", "pos": "noun", "meaning": "wrath / rage"}
        ],
        "Separable verb 'vorhaben' (to have in mind / intend)."
    ),
    "Des Mitleids Ruf, der Menschheit Stimme –": (
        "Of-pity the call, of-humanity the voice –",
        [
            {"word": "Des Mitleids", "lemma": "Mitleid", "pos": "noun", "meaning": "of pity / compassion (genitive neuter)"},
            {"word": "der Menschheit", "lemma": "Menschheit", "pos": "noun", "meaning": "of humanity (genitive feminine)"}
        ],
        None
    ),
    "rührt nichts mehr deinen Tigersinn?": (
        "moves nothing more your tiger-mind?",
        [
            {"word": "rührt", "lemma": "rühren", "pos": "verb", "meaning": "touches / moves emotionally"},
            {"word": "Tigersinn", "lemma": "Tigersinn", "pos": "noun", "meaning": "tiger-like disposition / ruthless mind"}
        ],
        None
    ),
    "Doch toben auch wie Meereswogen": (
        "Yet rage though like ocean-billows",
        [
            {"word": "toben", "lemma": "toben", "pos": "verb", "meaning": "rage / bluster"},
            {"word": "Meereswogen", "lemma": "Woge", "pos": "noun", "meaning": "ocean waves / billows"}
        ],
        None
    ),
    "dir in der Seele Zorn und Wut,": (
        "to-you in the soul anger and rage,",
        [
            {"word": "in der Seele", "lemma": "Seele", "pos": "noun", "meaning": "in the soul (dative)"},
            {"word": "Zorn und Wut", "lemma": "Zorn", "pos": "noun", "meaning": "wrath and fury"}
        ],
        None
    ),
    "so leuchtet mir ein Farbenbogen,": (
        "so shines to-me a rainbow,",
        [
            {"word": "leuchtet", "lemma": "leuchten", "pos": "verb", "meaning": "shines / beams"},
            {"word": "Farbenbogen", "lemma": "Farbenbogen", "pos": "noun", "meaning": "rainbow (archaic/poetic for Regenbogen)"}
        ],
        None
    ),
    "der hell auf dunkeln Wolken ruht:": (
        "which brightly upon dark clouds rests:",
        [
            {"word": "hell", "lemma": "hell", "pos": "adverb", "meaning": "brightly"},
            {"word": "Wolken", "lemma": "Wolke", "pos": "noun", "meaning": "clouds (dative plural)"},
            {"word": "ruht", "lemma": "ruhen", "pos": "verb", "meaning": "rests"}
        ],
        None
    ),
    "der blickt so still, so friedlich nieder,": (
        "which looks so silently, so peacefully down,",
        [
            {"word": "friedlich", "lemma": "friedlich", "pos": "adverb", "meaning": "peacefully"},
            {"word": "nieder", "lemma": "nieder", "pos": "adverb", "meaning": "downward"}
        ],
        None
    ),
    "der spiegelt alte Zeiten wider,": (
        "which mirrors ancient times back,",
        [
            {"word": "spiegelt... wider", "lemma": "widerspiegeln", "pos": "verb", "meaning": "reflects / mirrors back"},
            {"word": "alte Zeiten", "lemma": "Zeit", "pos": "noun", "meaning": "old times / past days"}
        ],
        "Separable verb 'widerspiegeln'."
    ),
    "und neu besänftigt wallt mein Blut.": (
        "and newly soothed surges my blood.",
        [
            {"word": "besänftigt", "lemma": "besänftigen", "pos": "adjective", "meaning": "calmed / mollified"},
            {"word": "wallt", "lemma": "wallen", "pos": "verb", "meaning": "wells / surges"},
            {"word": "Blut", "lemma": "Blut", "pos": "noun", "meaning": "blood (neuter)"}
        ],
        None
    ),
    "Komm, Hoffnung, laß den letzten Stern": (
        "Come, hope, let the last star",
        [
            {"word": "Komm", "lemma": "kommen", "pos": "verb", "meaning": "come (imperative)"},
            {"word": "letzten Stern", "lemma": "Stern", "pos": "noun", "meaning": "last star (accusative masculine)"}
        ],
        None
    ),
    "der Müden nicht erbleichen!": (
        "of-the weary-one not turn-pale!",
        [
            {"word": "der Müden", "lemma": "Müde", "pos": "noun", "meaning": "of the weary woman (genitive feminine)"},
            {"word": "erbleichen", "lemma": "erbleichen", "pos": "verb", "meaning": "to fade / grow pale"}
        ],
        None
    ),
    "O komm, erhell’ mein Ziel, sei’s noch so fern,": (
        "O come, illuminate my goal, be-it ever so distant,",
        [
            {"word": "erhell'", "lemma": "erhellen", "pos": "verb", "meaning": "brighten / illuminate"},
            {"word": "Ziel", "lemma": "Ziel", "pos": "noun", "meaning": "goal / destination"},
            {"word": "sei's", "lemma": "sein", "pos": "phrase", "meaning": "be it (subjunctive I concessive)"}
        ],
        None
    ),
    "die Liebe wird’s erreichen.": (
        "the love will-it achieve.",
        [
            {"word": "erreichen", "lemma": "erreichen", "pos": "verb", "meaning": "reach / attain"}
        ],
        None
    ),
    "Ich folg’ dem innern Triebe,": (
        "I follow the inward urge,",
        [
            {"word": "folg'", "lemma": "folgen", "pos": "verb", "meaning": "follow (governs dative)"},
            {"word": "innern Triebe", "lemma": "Trieb", "pos": "noun", "meaning": "inner impulse / drive (dative masculine)"}
        ],
        "Verb 'folgen' strictly governs the dative case."
    ),
    "ich wanke nicht,": (
        "I waver not,",
        [
            {"word": "wanke", "lemma": "wanken", "pos": "verb", "meaning": "waver / falter"}
        ],
        None
    ),
    "mich stärkt die Pflicht der treuen Gattenliebe!": (
        "me strengthens the duty of-true spousal-love!",
        [
            {"word": "stärkt", "lemma": "stärken", "pos": "verb", "meaning": "strengthens / invigorates"},
            {"word": "Gattenliebe", "lemma": "Gattenliebe", "pos": "noun", "meaning": "conjugal love / devotion to one's spouse (genitive)"}
        ],
        "OVS word order: direct object 'mich' fronted for psychological emphasis."
    ),
    "O du, für den ich alles trug,": (
        "O you, for whom I everything bore,",
        [
            {"word": "trug", "lemma": "tragen", "pos": "verb", "meaning": "bore / endured"}
        ],
        None
    ),
    "könnt’ ich zur Stelle dringen,": (
        "could I to-the place penetrate,",
        [
            {"word": "zur Stelle", "lemma": "Stelle", "pos": "noun", "meaning": "to the spot"},
            {"word": "dringen", "lemma": "dringen", "pos": "verb", "meaning": "penetrate / force one's way"}
        ],
        None
    ),
    "wo Bosheit dich in Fesseln schlug,": (
        "where malice you in fetters struck,",
        [
            {"word": "Bosheit", "lemma": "Bosheit", "pos": "noun", "meaning": "malice / wickedness"},
            {"word": "Fesseln", "lemma": "Fessel", "pos": "noun", "meaning": "fetters / chains"},
            {"word": "schlug", "lemma": "schlagen", "pos": "verb", "meaning": "cast / struck (in Fesseln schlagen)"}
        ],
        "Collocation 'in Fesseln schlagen' (to clap into irons)."
    ),
    "und süßen Trost dir bringen!": (
        "and sweet consolation to-you bring!",
        [
            {"word": "süßen Trost", "lemma": "Trost", "pos": "noun", "meaning": "sweet comfort / solace"}
        ],
        None
    )
}

print(f"Scenes 6-9 translations defined: {len(TRANS_SC6_9)}")
with open('scripts/fidelio_trans_sc6_9.json', 'w', encoding='utf-8') as f:
    json.dump(TRANS_SC6_9, f, ensure_ascii=False, indent=2)

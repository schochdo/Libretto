from scripts.make_act2_partB import TRANS_ACT2_B

TRANS_FINALE2_REM = {
    "Ha! Unglückliche, halt ein!": ("Ha! Unhappy-girl, stop!", None, None),
    "Sollte dies dein Jüngling sehen,": (
        "Should this your youth see [if your youth were to see this],",
        [{"word": "Sollte ... sehen", "lemma": "sehen", "pos": "verb", "meaning": "should see (conditional inversion)"}],
        None
    ),
    "würde er vor Gram vergehen,": (
        "would he from grief perish,",
        [{"word": "vor Gram vergehen", "lemma": "vergehen", "pos": "idiom", "meaning": "perish / waste away from sorrow"}],
        None
    ),
    "denn er liebet dich allein. –": (
        "for he loves you alone. –",
        [{"word": "liebet", "lemma": "lieben", "pos": "verb", "meaning": "loves (archaic -et)"}],
        None
    ),
    "Was? er fühlte Gegenliebe?": (
        "What? He felt mutual-love [reciprocal love]?",
        [{"word": "Gegenliebe", "lemma": "Gegenliebe", "pos": "noun", "meaning": "mutual / reciprocal love (gegen + Liebe)"}],
        None
    ),
    "und verbarg mir seine Triebe –": (
        "and hid from-me his impulses [concealed his feelings from me] –",
        [{"word": "verbarg", "lemma": "verbergen", "pos": "verb", "meaning": "concealed / hid (governs dative 'mir')"}],
        None
    ),
    "wandte sein Gesicht von mir?": (
        "turned his face from me?",
        [{"word": "wandte", "lemma": "wenden", "pos": "verb", "meaning": "turned (past tense)"}],
        None
    ),
    "Warum sprach er nicht mit mir? –": ("Why spoke he not with me? –", None, None),
    "Dieses müssen wir verschweigen,": (
        "This must we keep-silent [about],",
        [{"word": "verschweigen", "lemma": "verschweigen", "pos": "verb", "meaning": "to keep secret / keep silent about"}],
        "Fronted object 'Dieses' triggering inversion: 'müssen wir verschweigen'."
    ),
    "doch wir wollen ihn dir zeigen,": (
        "yet we will him to-you show,",
        [{"word": "dir zeigen", "lemma": "zeigen", "pos": "verb", "meaning": "show to you"}],
        None
    ),
    "und du wirst mit Staunen seh'n,": (
        "and you will with astonishment see,",
        [{"word": "mit Staunen", "lemma": "Staunen", "pos": "noun", "meaning": "with wonder / astonishment"}],
        None
    ),
    "daß er dir sein Herz geweiht,": (
        "that he to-you his heart consecrated [has consecrated],",
        [{"word": "geweiht", "lemma": "weihen", "pos": "verb", "meaning": "consecrated / dedicated (past participle with ellipsis of 'hat')"}],
        None
    ),
    "und den Tod für dich nicht scheut!": (
        "and death for you not dreads!",
        [{"word": "scheut", "lemma": "scheuen", "pos": "verb", "meaning": "fears / shuns"}],
        None
    ),
    "Komm, wir wollen zu ihm geh'n.": ("Come, we will to him go.", None, None),
    "Führt mich hin, ich möcht' ihn seh'n.": (
        "Lead me thither, I would-like him to-see.",
        [{"word": "möcht' ihn seh'n", "lemma": "mögen", "pos": "verb", "meaning": "would like to see him"}],
        None
    ),
    "kann Menschenohnmacht niemals trennen. –": ("can human-weakness never separate. –", None, None),
    "wird rein durch Feuer, Wasser, Luft und Erden.": ("becomes purified through fire, water, air and earth.", None, None),
    "Wenn er des Todes Schrecken überwinden kann,": ("If he of-death terror overcome can,", None, None),
    "schwingt er sich aus der Erde himmelan!": ("soars he himself from the earth heavenward!", None, None),
    "den Weg der Tugend fortzuwandeln! –": ("the path of virtue onward-to-traverse! –", None, None),
    "Schließt mir des Schreckens Pforte auf –": (
        "Unlock for-me terror's portal up –",
        [{"word": "des Schreckens Pforte", "lemma": "Pforte", "pos": "noun", "meaning": "the portal of terror (pre-nominal genitive)"}],
        None
    ),
    "ich wage froh den kühnen Lauf. –": ("I venture gladly the bold course. –", None, None),
    "Tamino halt! ich muß dich sehn!": ("Tamino halt! I must you see!", None, None),
    "Was hör' ich? Paminens Stimme? –": (
        "What hear I? Pamina's voice? –",
        [{"word": "Paminens", "lemma": "Pamina", "pos": "noun", "meaning": "Pamina's (classical feminine genitive with -ns)"}],
        "Classical German feminine genitive ending '-ns' for names ending in -a."
    ),
    "Ja ja, das ist Paminens Stimme! –": ("Yes yes, that is Pamina's voice! –", None, None),
    "wenn auch der Tod beschieden wär'.": ("even if death decreed were.", None, None),
    "Wohl dir, nun kann sie mit dir geh'n!": (
        "Joy to-you, now can she with you go!",
        [{"word": "Wohl dir", "lemma": "wohl", "pos": "idiom", "meaning": "blessed are you / joy to you (dative 'dir')"}],
        None
    ),
    "Nun trennet euch kein Schicksal mehr,": ("Now separates you no fate anymore,", None, None),
    "Ist mir erlaubt mit ihr zu sprechen? –": ("Is to-me permitted with her to speak? –", None, None),
    "Es ist erlaubt mit ihr zu sprechen!": ("It is permitted with her to speak!", None, None),
    "Welch Glück, wenn wir uns wiederseh'n,": ("What happiness, when we each-other see-again,", None, None),
    "froh Hand in Hand in Tempel geh'n.": ("joyfully hand in hand into [the] temple go.", None, None),
    "ist würdig, und wird eingeweiht.": ("is worthy, and becomes initiated.", None, None),
    "Welch Glück, wenn wir euch wiederseh'n,": ("What happiness, when we you see-again,", None, None),
    "Tamino mein! O welch ein Glück!": ("Tamino mine! O what a fortune!", None, None),
    "Pamina mein! O welch ein Glück!": ("Pamina mine! O what a fortune!", None, None),
    "die Liebe leitet mich! –": ("love guides me! –", None, None),
    "der tausendjähr'gen Eiche aus": ("of-the thousand-year-old oak out", None, None),
    "bei Blitz und Donner – Sturm und Braus. –": ("amid lightning and thunder – storm and roaring. –", None, None),
    "Nun komm und spiel die Flöte an!": ("Now come and play the flute on!", None, None),
    "Sie leite uns auf grauser Bahn.": ("May it guide us on gruesome path.", None, None),
    "Wir wandeln durch des Tones Macht": (
        "We walk through of-the tone power [through the power of music]",
        [{"word": "des Tones Macht", "lemma": "Macht", "pos": "noun", "meaning": "the power of sound (pre-nominal genitive)"}],
        "Core motif: music protects and illuminates through death's dark night."
    ),
    "froh durch des Todes düst're Nacht.": (
        "joyfully through of-death gloomy night.",
        [{"word": "des Todes düst're Nacht", "lemma": "Nacht", "pos": "noun", "meaning": "death's gloomy night"}],
        None
    ),
    "Ihr wandelt durch des Tones Macht": ("You walk through of-the tone power", None, None),
    "bekämpften mutig die Gefahr,": ("fought bravely the danger,", None, None),
    "dein Ton sei Schutz in Wasserfluten,": (
        "may your sound be protection in floods-of-water,",
        [{"word": "sei Schutz", "lemma": "sein", "pos": "verb", "meaning": "may it be protection (subjunctive I)"}],
        None
    ),
    "so wie er es im Feuer war.": ("just as it it in fire was.", None, None),
    "Ihr Götter, welch ein Augenblick!": ("You gods, what a moment!", None, None),
    "Gewähret ist uns Isis' Glück! –": (
        "Granted is to-us Isis' bliss! –",
        [{"word": "Gewähret ist", "lemma": "gewähren", "pos": "verb", "meaning": "granted / bestowed is"}],
        None
    ),
    "Triumph, Triumph, Triumph, du edles Paar,": ("Triumph, triumph, triumph, you noble pair,", None, None),
    "besieget hast du die Gefahr!": ("conquered have you the danger!", None, None),
    "Kommt, kommt, tretet in den Tempel ein.": ("Come, come, enter into the temple in.", None, None),
    "Papagena! Papagena! Papagena!": ("Papagena! Papagena! Papagena!", None, None),
    "Weibchen! Täubchen! meine Schöne! –": ("Little-wife! Little-dove! My fair-one! –", None, None),
    "ich bin zum Unglück schon geboren! –": ("I am to misfortune already born! –", None, None),
    "Ich plauderte, und das war schlecht,": (
        "I chattered, and that was bad,",
        [{"word": "plauderte", "lemma": "plaudern", "pos": "verb", "meaning": "chattered / blabbed"}],
        None
    ),
    "und drum geschieht es mir schon recht! –": ("and therefore happens it to-me quite rightly! –", None, None),
    "Seit ich gekostet diesen Wein –": ("Since I tasted this wine –", None, None),
    "so zwicket's hier, so zwicket's da!": (
        "so pinches it here, so pinches it there!",
        [{"word": "zwicket's", "lemma": "zwicken", "pos": "verb", "meaning": "it pinches / twinges"}],
        None
    ),
    "Papagena! Herzensweibchen!": ("Papagena! Little-wife-of-my-heart!", None, None),
    "Papagena liebes Täubchen!": ("Papagena dear little-dove!", None, None),
    "'S ist umsonst, es ist vergebens,": ("'Tis in vain, it is futile,", None, None),
    "müde bin ich meines Lebens!": ("weary am I of-my life!", None, None),
    "mir an ihm den Hals zuschnüren,": (
        "for-myself on it the neck to-throttle [hang myself from it],",
        [{"word": "zuschnüren", "lemma": "zuschnüren", "pos": "verb", "meaning": "tie shut / constrict / strangle"}],
        None
    ),
    "weil das Leben mir mißfällt,": ("because life to-me displeases,", None, None),
    "gute Nacht, du falsche Welt! –": ("good night, you false world! –", None, None),
    "so ist's aus, so sterbe ich.": ("so is it over, so die I.", None, None),
    "Schöne Mädchen, denkt an mich! –": ("Pretty maidens, think of me! –", None, None),
    "Will sich eine um mich Armen,": (
        "Will one [of you] on me poor-fellow,",
        [{"word": "um mich Armen", "lemma": "arm", "pos": "noun", "meaning": "upon me poor wretch"}],
        None
    ),
    "eh' ich hänge, noch erbarmen –": (
        "before I hang, yet have mercy –",
        [
            {"word": "eh'", "lemma": "ehe", "pos": "conjunction", "meaning": "before"},
            {"word": "hänge", "lemma": "hängen", "pos": "verb", "meaning": "hang (from the gallows/tree)"},
            {"word": "sich erbarmen", "lemma": "sich erbarmen", "pos": "verb", "meaning": "have mercy / take pity (governs über/um)"}
        ],
        None
    ),
    "wohl, so laß ich's diesmal sein!": (
        "well, then let I it this-time be [I'll skip it this time]!",
        [{"word": "sein lassen", "lemma": "lassen", "pos": "idiom", "meaning": "to let be / refrain from doing"}],
        "Idiom: 'etwas sein lassen' = to refrain from / not do something."
    ),
    "Rufet nur, Ja oder Nein! –": (
        "Call out only, yes or no! –",
        [{"word": "Rufet", "lemma": "rufen", "pos": "verb", "meaning": "call out (plural imperative)"}],
        None
    ),
    "Keine hört mich! alles stille!": (
        "None hears me! Everything quiet!",
        [{"word": "Keine", "lemma": "kein", "pos": "pronoun", "meaning": "no woman / none"}],
        None
    ),
    "Also ist es euer Wille!": (
        "So then is it your will!",
        [{"word": "Also", "lemma": "also", "pos": "adverb", "meaning": "so / consequently"}],
        None
    ),
    "ende deinen Lebenslauf.": ("end your course-of-life.", None, None),
    "Nun! ich warte noch! es sei –": ("Well! I wait still! So be it –", None, None),
    "bis man zählet: eins, zwei, drei!": ("until one counts: one, two, three!", None, None),
    "eins! zwei! drei!": ("one! two! three!", None, None),
    "Nun wohlan! es bleibt dabei!": ("Now well-then! It stays as agreed!", None, None),
    "Weil mich nichts zurücke hält,": ("Because me nothing back holds,", None, None),
    "gute Nacht, du falsche Welt!": ("good night, you false world!", None, None),
    "Halt ein! o Papageno, und sei klug!": ("Stop! O Papageno, and be wise!", None, None),
    "Man lebt nur einmal, dies sei dir genug!": ("One lives only once, let this be to-you enough!", None, None),
    "Ihr habt gut reden, gut zu scherzen;": ("You have good [easy] talking, good joking;", None, None),
    "doch brennt es euch, wie mich im Herzen,": ("yet if-burned it in-you, as in-me in-the heart,", None, None),
    "ihr würdet auch nach Mädchen geh'n.": ("you would also after maidens go.", None, None),
    "dies wird dein Weibchen zu dir bringen.": ("this will your little-wife to you bring.", None, None),
    "Erklinge, Glockenspiel, erklinge,": ("Sound forth, glockenspiel, sound forth,", None, None),
    "ich muß mein liebes Mädchen seh'n!": ("I must my dear girl see!", None, None),
    "Klinget, Glöckchen, klinget,": ("Chime, little-bells, chime,", None, None),
    "schafft mein Mädchen her!": (
        "fetch my girl hither!",
        [{"word": "herschaffen", "lemma": "herschaffen", "pos": "verb", "meaning": "procure / bring hither"}],
        None
    ),
    "bringt mein Mädchen her!": ("bring my girl hither!", None, None),
    "bringt mein Weibchen her!": ("bring my little-wife hither!", None, None),
    "bringt sie her!": ("bring her hither!", None, None),
    "mein Mädchen her! mein Weibchen her!": ("my girl hither! My little-wife hither!", None, None),
    "Pa-pa-ge-na!": ("Pa-pa-ge-na!", None, None),
    "Pa-pa-ge-no!": ("Pa-pa-ge-no!", None, None),
    "Bist du mir nun ganz ergeben? –": ("Are you to-me now wholly devoted? –", None, None),
    "Nun so sei mein Herzenstäubchen!": ("Now then be my heart's-little-dove!", None, None),
    "der Eltern Segen werden sein!": ("the parents' blessing will be!", None, None),
    "Nur stille! stille! stille!": ("Only quietly! Quietly! Quietly!", None, None),
    "bald dringen wir im Tempel ein!": ("soon force we [our way] in [the] temple in!", None, None),
    "bald dringen wir in Tempel ein!": ("soon force we into [the] temple in!", None, None),
    "Doch Fürstin! halte Wort! erfülle!": ("Yet sovereign-lady! Keep word! Fulfill!", None, None),
    "Dein Kind muß meine Gattin sein! –": ("Your child must my spouse be! –", None, None),
    "Ich halte Wort! es ist mein Wille,": ("I keep word! It is my will,", None, None),
    "Ihr Kind soll deine Gattin sein!": ("Her child shall your spouse be!", None, None),
    "wie Donnerton und Wasserfall. –": ("like thunder-sound and waterfall. –", None, None),
    "wie fernen Donners Widerhall! –": ("like distant thunder's echo! –", None, None),
    "mit Feuersglut und mächt'gem Schwert!": ("with fire's-glow and mighty sword!", None, None),
    "sei uns'rer Rache Opfer gebracht!": ("be to-our vengeance sacrifice brought!", None, None),
    "wir alle gestürzet in ewige Nacht! –": ("we all hurled into eternal night! –", None, None),
    "Die Strahlen der Sonne": ("The rays of the sun", None, None),
    "vertreiben die Nacht,": ("dispel the night,", None, None),
    "zernichten der Heuchler": ("annihilate the hypocrites'", None, None),
    "erschlichene Macht!": ("sneakily-gained power!", None, None),
    "Heil sei euch Geweihten!": ("Hail be to-you initiates!", None, None),
    "Ihr dränget durch Nacht!": ("You pressed through night!", None, None),
    "Dank! sei dir Osiris!": ("Thanks! Be to-you Osiris!", None, None),
    "Dank! dir Isis gebracht!": ("Thanks! To-you Isis brought!", None, None),
    "Es siegte die Stärke": ("There conquered strength", None, None),
    "und krönet zum Lohn": ("and crowns as reward", None, None),
    "die Schönheit und Weisheit": ("beauty and wisdom", None, None),
    "mit ewiger Kron'!": ("with eternal crown!", None, None)
}

TRANS_ACT2_B.update(TRANS_FINALE2_REM)
print(f"Updated TRANS_ACT2_B. Total entries: {len(TRANS_ACT2_B)}")

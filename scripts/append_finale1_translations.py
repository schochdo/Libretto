from scripts.make_act1_ts import TRANS

TRANS_FINALE1 = {
    # 1. Three Boys & Tamino
    "Zum Ziele führt dich diese Bahn,": (
        "To-the goal leads you this path,",
        [
            {"word": "Zum Ziele", "lemma": "Ziel", "pos": "noun", "meaning": "to the goal / destination (zu + dem)"},
            {"word": "führt", "lemma": "führen", "pos": "verb", "meaning": "leads / guides"},
            {"word": "Bahn", "lemma": "Bahn", "pos": "noun", "meaning": "path / course / track (feminine)"}
        ],
        "Fronted prepositional phrase 'Zum Ziele' triggers V2 inversion ('führt dich diese Bahn')."
    ),
    "doch mußt du Jüngling männlich siegen,": (
        "yet must you youth manfully conquer,",
        [
            {"word": "männlich", "lemma": "männlich", "pos": "adverb", "meaning": "manfully / valiantly"},
            {"word": "siegen", "lemma": "siegen", "pos": "verb", "meaning": "to conquer / triumph"}
        ],
        None
    ),
    "drum höre uns're Lehre an:": (
        "therefore listen our teaching to [heed our instruction]:",
        [
            {"word": "drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / for that reason"},
            {"word": "höre ... an", "lemma": "anhören", "pos": "verb", "meaning": "listen to / heed (separable verb imperative)"},
            {"word": "Lehre", "lemma": "Lehre", "pos": "noun", "meaning": "teaching / precept (feminine)"}
        ],
        None
    ),
    "Sei standhaft, duldsam, und verschwiegen! –": (
        "Be steadfast, patient, and discreet! –",
        [
            {"word": "Sei", "lemma": "sein", "pos": "verb", "meaning": "be (imperative singular)"},
            {"word": "standhaft", "lemma": "standhaft", "pos": "adjective", "meaning": "steadfast / resolute"},
            {"word": "duldsam", "lemma": "duldsam", "pos": "adjective", "meaning": "patient / forbearing"},
            {"word": "verschwiegen", "lemma": "verschwiegen", "pos": "adjective", "meaning": "discreet / secretive / silent"}
        ],
        "The three Masonic virtues demanded of initiates: steadfastness, patience, discretion."
    ),
    "sei standhaft, duldsam und verschwiegen!": ("be steadfast, patient and discreet!", None, None),
    "Ihr holden Knaben sagt mir an,": (
        "You gracious boys tell to-me on [tell me],",
        [
            {"word": "sagt ... an", "lemma": "ansagen", "pos": "verb", "meaning": "declare / tell (plural imperative)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)"}
        ],
        None
    ),
    "ob ich Pamina retten kann? –": (
        "whether I Pamina rescue can? –",
        [
            {"word": "ob", "lemma": "ob", "pos": "conjunction", "meaning": "whether / if (indirect question)"},
            {"word": "retten kann", "lemma": "können", "pos": "verb", "meaning": "can rescue"}
        ],
        "Subordinate clause word order: modal verb 'kann' placed at the very end."
    ),
    "Dies kund zu tun steht uns nicht an;": (
        "This known to make stands to-us not on [is not fitting for us to disclose];",
        [
            {"word": "kund zu tun", "lemma": "kundtun", "pos": "verb", "meaning": "to make known / disclose (separable infinitive with zu)"},
            {"word": "anstehen", "lemma": "anstehen", "pos": "idiom", "meaning": "to be fitting / be incumbent upon (governs dative 'uns')"}
        ],
        "Idiomatic construction: 'jemandem anstehen' = to be proper/fitting for someone."
    ),
    "Bedenke dies, kurz: sei ein Mann. –": (
        "Consider this, in short: be a man. –",
        [
            {"word": "Bedenke", "lemma": "bedenken", "pos": "verb", "meaning": "consider / reflect upon (imperative singular)"},
            {"word": "kurz", "lemma": "kurz", "pos": "adverb", "meaning": "in short / briefly"}
        ],
        None
    ),
    "Dann Jüngling wirst du männlich siegen.": (
        "Then youth will you manfully triumph.",
        [
            {"word": "Dann", "lemma": "dann", "pos": "adverb", "meaning": "then / in that case"},
            {"word": "wirst du ... siegen", "lemma": "siegen", "pos": "verb", "meaning": "you will conquer (future tense inversion)"}
        ],
        None
    ),
    "Die Weisheitslehre dieser Knaben": (
        "The wisdom-teaching of-these boys",
        [
            {"word": "Weisheitslehre", "lemma": "Weisheitslehre", "pos": "noun", "meaning": "teaching of wisdom (Weisheit + Lehre)"},
            {"word": "dieser Knaben", "lemma": "Knabe", "pos": "noun", "meaning": "of these boys (genitive plural weak noun ending -n)"}
        ],
        None
    ),
    "sei ewig mir ins Herz gegraben.": (
        "be forever to-me into-the heart engraved.",
        [
            {"word": "sei ... gegraben", "lemma": "graben", "pos": "verb", "meaning": "be engraved (jussive subjunctive I passive)"},
            {"word": "ins Herz", "lemma": "Herz", "pos": "noun", "meaning": "into the heart (in + das Herz)"}
        ],
        "Subjunctive I 'sei' used optatively: 'may it be engraved into my heart forever'."
    ),
    "Wo bin ich nun? – Was wird mit mir?": (
        "Where am I now? – What becomes with me [what will become of me]?",
        [
            {"word": "Was wird mit mir", "lemma": "werden", "pos": "idiom", "meaning": "what will become of me"}
        ],
        None
    ),
    "Ist dies der Sitz der Götter hier? –": (
        "Is this the seat of-the gods here? –",
        [
            {"word": "Sitz", "lemma": "Sitz", "pos": "noun", "meaning": "seat / dwelling / abode (masculine)"},
            {"word": "der Götter", "lemma": "Gott", "pos": "noun", "meaning": "of the gods (genitive plural)"}
        ],
        None
    ),
    "Es zeigen die Pforten – es zeigen die Säulen,": (
        "It show the portals – it show the columns [the gates and columns show],",
        [
            {"word": "Pforten", "lemma": "Pforte", "pos": "noun", "meaning": "portals / gates"},
            {"word": "Säulen", "lemma": "Säule", "pos": "noun", "meaning": "columns / pillars"}
        ],
        "Expletive 'es' anticipatory subject: 'Es zeigen die Pforten' = The portals show."
    ),
    "daß Klugheit, und Arbeit, und Künste hier weilen.": (
        "that prudence, and labor, and arts here dwell.",
        [
            {"word": "Klugheit", "lemma": "Klugheit", "pos": "noun", "meaning": "prudence / wisdom (feminine)"},
            {"word": "Arbeit", "lemma": "Arbeit", "pos": "noun", "meaning": "work / labor / industry"},
            {"word": "Künste", "lemma": "Kunst", "pos": "noun", "meaning": "arts (plural)"},
            {"word": "weilen", "lemma": "weilen", "pos": "verb", "meaning": "dwell / abide / tarry"}
        ],
        "Enlightenment triad: Prudence, Industry, and the Arts."
    ),
    "Wo Tätigkeit thronet und Müßiggang weicht,": (
        "Where activity thrones and idleness yields,",
        [
            {"word": "Tätigkeit", "lemma": "Tätigkeit", "pos": "noun", "meaning": "activity / industry / diligence"},
            {"word": "thronet", "lemma": "thronen", "pos": "verb", "meaning": "is enthroned / reigns"},
            {"word": "Müßiggang", "lemma": "Müßiggang", "pos": "noun", "meaning": "idleness / sloth (müßig + Gang)"},
            {"word": "weicht", "lemma": "weichen", "pos": "verb", "meaning": "yields / retreats / gives way"}
        ],
        None
    ),
    "erhält seine Herrschaft das Laster nicht leicht.": (
        "maintains its dominion vice not easily.",
        [
            {"word": "erhält", "lemma": "erhalten", "pos": "verb", "meaning": "maintains / preserves"},
            {"word": "Herrschaft", "lemma": "Herrschaft", "pos": "noun", "meaning": "rule / dominion / control"},
            {"word": "das Laster", "lemma": "Laster", "pos": "noun", "meaning": "vice (neuter nominative subject)"},
            {"word": "leicht", "lemma": "leicht", "pos": "adverb", "meaning": "easily"}
        ],
        "OVS inversion: object 'seine Herrschaft' precedes subject 'das Laster'."
    ),
    "Ich wage mich mutig zur Pforte hinein.": (
        "I venture myself boldly to-the portal inside.",
        [
            {"word": "Ich wage mich", "lemma": "sich wagen", "pos": "verb", "meaning": "I venture / dare to enter (reflexive)"},
            {"word": "mutig", "lemma": "mutig", "pos": "adverb", "meaning": "boldly / courageously"},
            {"word": "hinein", "lemma": "hinein", "pos": "adverb", "meaning": "inside (directional away from speaker)"}
        ],
        None
    ),
    "Die Absicht ist edel, und lauter, und rein.": (
        "The intention is noble, and sincere, and pure.",
        [
            {"word": "Absicht", "lemma": "Absicht", "pos": "noun", "meaning": "intention / purpose (feminine)"},
            {"word": "edel", "lemma": "edel", "pos": "adjective", "meaning": "noble"},
            {"word": "lauter", "lemma": "lauter", "pos": "adjective", "meaning": "unblemished / pure / upright"},
            {"word": "rein", "lemma": "rein", "pos": "adjective", "meaning": "pure / spotless"}
        ],
        None
    ),
    "Erzitt're feiger Bösewicht!": (
        "Tremble, cowardly villain!",
        [
            {"word": "Erzitt're", "lemma": "erzittern", "pos": "verb", "meaning": "tremble / shudder (imperative singular with inchoative prefix er-)"},
            {"word": "feiger", "lemma": "feig", "pos": "adjective", "meaning": "cowardly (vocative masculine)"}
        ],
        None
    ),
    "Paminen retten ist mir Pflicht!": (
        "Pamina to-rescue is to-me duty!",
        [
            {"word": "Paminen", "lemma": "Pamina", "pos": "noun", "meaning": "Pamina (accusative with classical feminine ending -en)"},
            {"word": "retten", "lemma": "retten", "pos": "verb", "meaning": "to rescue (infinitive subject)"},
            {"word": "mir Pflicht", "lemma": "Pflicht", "pos": "idiom", "meaning": "my duty / incumbent upon me"}
        ],
        "Classical -en accusative suffix for feminine proper names (Paminen)."
    ),
    "Zurück!": ("Back!", None, None),
    "Zurück? zurück? – so wag ich hier mein Glück!": (
        "Back? Back? – so venture I here my luck!",
        [
            {"word": "wag ich", "lemma": "wagen", "pos": "verb", "meaning": "dare I / venture I (inversion)"},
            {"word": "mein Glück", "lemma": "Glück", "pos": "noun", "meaning": "my fortune / luck"}
        ],
        None
    ),
    "Auch hier ruft man „zurück\"?": (
        "Also here calls one \"back\"?",
        [
            {"word": "ruft man", "lemma": "rufen", "pos": "verb", "meaning": "calls one / do they call"}
        ],
        None
    ),
    "Da seh' ich noch eine Tür.": (
        "There see I yet another door.",
        [
            {"word": "noch eine", "lemma": "noch", "pos": "idiom", "meaning": "yet another / one more"}
        ],
        None
    ),
    "Vielleicht find' ich den Eingang hier!": (
        "Perhaps find I the entrance here!",
        [
            {"word": "Eingang", "lemma": "Eingang", "pos": "noun", "meaning": "entrance / entryway (masculine)"}
        ],
        None
    ),
    "Wo willst du kühner Fremdling hin?": (
        "Where want you bold stranger thither [where do you intend to go]?",
        [
            {"word": "kühner Fremdling", "lemma": "Fremdling", "pos": "noun", "meaning": "bold stranger (vocative)"},
            {"word": "hin", "lemma": "hin", "pos": "adverb", "meaning": "thither / to what place"}
        ],
        "Modal 'wollen' + directional adverb 'hin' implying a verb of motion."
    ),
    "Was suchst du hier im Heiligtum? –": (
        "What seek you here in-the sanctuary? –",
        [
            {"word": "suchst du", "lemma": "suchen", "pos": "verb", "meaning": "seek you / are you looking for"},
            {"word": "Heiligtum", "lemma": "Heiligtum", "pos": "noun", "meaning": "sanctuary / holy shrine (neuter)"}
        ],
        None
    ),
    "Der Lieb' und Tugend Eigentum.": (
        "Of love and virtue [the] property.",
        [
            {"word": "Der Lieb' und Tugend", "lemma": "Liebe", "pos": "noun", "meaning": "of love and virtue (genitive)"},
            {"word": "Eigentum", "lemma": "Eigentum", "pos": "noun", "meaning": "property / rightful domain (neuter)"}
        ],
        None
    ),
    "Die Worte sind von hohem Sinn –": (
        "The words are of high meaning [profound import] –",
        [
            {"word": "von hohem Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "of lofty meaning / high sense (dative masculine)"}
        ],
        None
    ),
    "allein, wie willst du diese finden?": (
        "yet, how will you these find?",
        [
            {"word": "allein", "lemma": "allein", "pos": "conjunction", "meaning": "yet / however"},
            {"word": "diese", "lemma": "dieser", "pos": "pronoun", "meaning": "these (accusative plural)"}
        ],
        None
    ),
    "Dich leitet Lieb' und Tugend nicht,": (
        "You guides love and virtue not [love and virtue do not guide you],",
        [
            {"word": "Dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative direct object)"},
            {"word": "leitet", "lemma": "leiten", "pos": "verb", "meaning": "guides / leads"}
        ],
        "OSV word order: direct object 'Dich' is placed first for emphasis."
    ),
    "weil Tod und Rache dich entzünden.": (
        "because death and vengeance you inflame.",
        [
            {"word": "Rache", "lemma": "Rache", "pos": "noun", "meaning": "revenge / vengeance (feminine)"},
            {"word": "entzünden", "lemma": "entzünden", "pos": "verb", "meaning": "inflame / kindle"}
        ],
        "Subordinate clause word order: verb 'entzünden' at the end."
    ),
    "Nur Rache für den Bösewicht.": (
        "Only revenge for the villain.",
        [
            {"word": "Nur Rache", "lemma": "Rache", "pos": "noun", "meaning": "only vengeance"}
        ],
        None
    ),
    "Den wirst du wohl bei uns nicht finden.": (
        "That-one will you surely among us not find.",
        [
            {"word": "Den", "lemma": "der", "pos": "pronoun", "meaning": "that one / him (demonstrative accusative)"},
            {"word": "wohl", "lemma": "wohl", "pos": "particle", "meaning": "surely / presumably (modal particle)"}
        ],
        None
    ),
    "Sarastro herrscht in diesen Gründen?": (
        "Sarastro rules in these grounds [territories]?",
        [
            {"word": "herrscht", "lemma": "herrschen", "pos": "verb", "meaning": "rules / reigns"},
            {"word": "Gründen", "lemma": "Grund", "pos": "noun", "meaning": "grounds / lands / valley (dative plural)"}
        ],
        None
    ),
    "Ja, ja, Sarastro herrschet hier.": (
        "Yes, yes, Sarastro rules here.",
        [
            {"word": "herrschet", "lemma": "herrschen", "pos": "verb", "meaning": "rules (archaic -et suffix)"}
        ],
        None
    ),
    "Doch in der Weisheit Tempel nicht? –": (
        "Yet in wisdom's temple not? –",
        [
            {"word": "der Weisheit Tempel", "lemma": "Tempel", "pos": "noun", "meaning": "wisdom's temple (pre-nominal genitive)"}
        ],
        None
    ),
    "Er herrscht im Weisheitstempel hier! –": (
        "He rules in-the temple of wisdom here! –",
        [
            {"word": "Weisheitstempel", "lemma": "Weisheitstempel", "pos": "noun", "meaning": "temple of wisdom"}
        ],
        None
    ),
    "So ist denn alles Heuchelei! –": (
        "So is then everything hypocrisy! –",
        [
            {"word": "Heuchelei", "lemma": "Heuchelei", "pos": "noun", "meaning": "hypocrisy / deceit (feminine)"},
            {"word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then / indeed"}
        ],
        None
    ),
    "Willst du schon wieder geh'n?": (
        "Want you already again to-go [do you want to leave already]?",
        [
            {"word": "schon wieder", "lemma": "schon", "pos": "adverb", "meaning": "already again"}
        ],
        None
    ),
    "Ja ich will gehen, froh, und frei –": (
        "Yes I will go, glad, and free –",
        [
            {"word": "froh, und frei", "lemma": "frei", "pos": "adjective", "meaning": "glad and free"}
        ],
        None
    ),
    "nie euren Tempel sehn! –": (
        "never your temple see! –",
        [
            {"word": "nie", "lemma": "nie", "pos": "adverb", "meaning": "never"}
        ],
        None
    ),
    "Erklär dich näher mir,": (
        "Explain yourself more-closely to-me,",
        [
            {"word": "Erklär dich", "lemma": "sich erklären", "pos": "verb", "meaning": "explain yourself (imperative)"},
            {"word": "näher", "lemma": "nah", "pos": "adverb", "meaning": "more closely / in more detail (comparative)"}
        ],
        None
    ),
    "dich täuschet ein Betrug! –": (
        "you deceives a deception [a fraud is deceiving you]! –",
        [
            {"word": "täuschet", "lemma": "täuschen", "pos": "verb", "meaning": "deceives / misleads"},
            {"word": "Betrug", "lemma": "Betrug", "pos": "noun", "meaning": "deception / deceit (masculine nominative subject)"}
        ],
        "OVS word order: accusative pronoun 'dich' precedes verb and subject 'ein Betrug'."
    ),
    "Sarastro wohnet hier,": (
        "Sarastro dwells here,",
        [
            {"word": "wohnet", "lemma": "wohnen", "pos": "verb", "meaning": "dwells / resides (archaic -et)"}
        ],
        None
    ),
    "das ist mir schon genug! –": (
        "that is to-me already enough! –",
        [
            {"word": "genug", "lemma": "genug", "pos": "adverb", "meaning": "enough / sufficient"}
        ],
        None
    ),
    "Wenn du dein Leben liebst, so rede, bleibe da! –": (
        "If you your life love, so speak, stay there! –",
        [
            {"word": "Wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if"},
            {"word": "bleibe da", "lemma": "dableiben", "pos": "verb", "meaning": "stay there / remain (imperative)"}
        ],
        None
    ),
    "Sarastro hassest du?": (
        "Sarastro hate you [do you hate Sarastro]?",
        [
            {"word": "hassest", "lemma": "hassen", "pos": "verb", "meaning": "hate (second person singular)"}
        ],
        "Fronted object 'Sarastro' in a question: 'Do you hate Sarastro?'"
    ),
    "Ich haß' ihn ewig, ja! –": (
        "I hate him eternally, yes! –",
        [
            {"word": "ewig", "lemma": "ewig", "pos": "adverb", "meaning": "eternally / forever"}
        ],
        None
    ),
    "So gib mir deine Gründe an! –": (
        "So give to-me your reasons on [state your reasons]! –",
        [
            {"word": "gib ... an", "lemma": "angeben", "pos": "verb", "meaning": "state / provide (separable verb imperative)"},
            {"word": "Gründe", "lemma": "Grund", "pos": "noun", "meaning": "reasons / grounds (masculine plural)"}
        ],
        None
    ),
    "Er ist ein Unmensch, ein Tyrann! –": (
        "He is a monster [inhuman being], a tyrant! –",
        [
            {"word": "Unmensch", "lemma": "Unmensch", "pos": "noun", "meaning": "monster / brute / inhuman being (un- + Mensch)"},
            {"word": "Tyrann", "lemma": "Tyrann", "pos": "noun", "meaning": "tyrant"}
        ],
        None
    ),
    "Ist das, was du gesagt, erwiesen?": (
        "Is that, which you said, proven?",
        [
            {"word": "erwiesen", "lemma": "erweisen", "pos": "verb", "meaning": "proven / demonstrated (past participle)"}
        ],
        "Ellipsis of auxiliary 'hast' in relative clause ('was du gesagt [hast]')."
    ),
    "Durch ein unglücklich Weib bewiesen,": (
        "Through an unhappy woman proven,",
        [
            {"word": "unglücklich Weib", "lemma": "Weib", "pos": "noun", "meaning": "unfortunate woman (uninflected poetic adjective)"},
            {"word": "bewiesen", "lemma": "beweisen", "pos": "verb", "meaning": "proven"}
        ],
        None
    ),
    "das Gram und Jammer niederdrückt!": (
        "whom grief and misery oppresses down!",
        [
            {"word": "das", "lemma": "das", "pos": "pronoun", "meaning": "whom / which (relative pronoun referring to Weib)"},
            {"word": "Jammer", "lemma": "Jammer", "pos": "noun", "meaning": "misery / sorrow (masculine)"},
            {"word": "niederdrückt", "lemma": "niederdrücken", "pos": "verb", "meaning": "weighs down / oppresses"}
        ],
        "Relative pronoun 'das' takes neuter gender from grammatical antecedent 'Weib'."
    ),
    "Ein Weib hat also dich berückt? –": (
        "A woman has thus you bewitched [deluded]? –",
        [
            {"word": "berückt", "lemma": "berücken", "pos": "verb", "meaning": "beguiled / enchanted / deluded"}
        ],
        None
    ),
    "Ein Weib tut wenig, plaudert viel,": (
        "A woman does little, chatters much,",
        [
            {"word": "plaudert viel", "lemma": "plaudern", "pos": "verb", "meaning": "chats / talks much"}
        ],
        None
    ),
    "du Jüngling glaubst dem Zungenspiel? –": (
        "you youth believe the tongue-play [idle gossip]? –",
        [
            {"word": "Zungenspiel", "lemma": "Zungenspiel", "pos": "noun", "meaning": "tongue-play / chatter / babble (dative neuter)"}
        ],
        "'Glauben' governs the dative of the thing believed ('dem Zungenspiel')."
    ),
    "O legte doch Sarastro dir": (
        "O laid only Sarastro to-you",
        [
            {"word": "legte ... vor", "lemma": "vorlegen", "pos": "verb", "meaning": "would set forth / explain (subjunctive II inversion)"}
        ],
        "Optative wish with 'doch': 'O legte doch Sarastro dir... für' = If only Sarastro explained to you..."
    ),
    "die Absicht seiner Handlung für. –": (
        "the intention of-his action before [explained his action to you]. –",
        [
            {"word": "seiner Handlung", "lemma": "Handlung", "pos": "noun", "meaning": "of his action (genitive feminine)"},
            {"word": "für", "lemma": "fürlegen", "pos": "verb", "meaning": "separable prefix equivalent to 'vor' (archaic/regional)"}
        ],
        None
    ),
    "Die Absicht ist nur allzu klar!": (
        "The intention is only all-too clear!",
        [
            {"word": "allzu klar", "lemma": "klar", "pos": "adverb", "meaning": "all too clear"}
        ],
        None
    ),
    "Riß nicht der Räuber ohn' Erbarmen": (
        "Tore not the robber without mercy",
        [
            {"word": "Riß", "lemma": "reißen", "pos": "verb", "meaning": "tore / snatched (past tense)"},
            {"word": "Räuber", "lemma": "Räuber", "pos": "noun", "meaning": "robber / captor"},
            {"word": "ohn' Erbarmen", "lemma": "Erbarmen", "pos": "idiom", "meaning": "mercilessly / without pity"}
        ],
        None
    ),
    "Pamina aus der Mutter Armen? –": (
        "Pamina out of-the mother's arms? –",
        [
            {"word": "der Mutter Armen", "lemma": "Arm", "pos": "noun", "meaning": "the mother's arms (dative plural with 'aus')"}
        ],
        None
    ),
    "Ja Jüngling, was du sagst, ist wahr! –": (
        "Yes youth, what you say, is true! –",
        [
            {"word": "wahr", "lemma": "wahr", "pos": "adjective", "meaning": "true"}
        ],
        None
    ),
    "Wo ist sie, die er uns geraubt?": (
        "Where is she, whom he from-us robbed?",
        [
            {"word": "geraubt", "lemma": "rauben", "pos": "verb", "meaning": "robbed / abducted (past participle with ellipsis of 'hat')"}
        ],
        "Dativus separationis: 'uns geraubt' = stolen from us."
    ),
    "Man opferte vielleicht sie schon? –": (
        "One sacrificed perhaps her already [has she already been sacrificed]? –",
        [
            {"word": "opferte", "lemma": "opfern", "pos": "verb", "meaning": "sacrificed"}
        ],
        None
    ),
    "Dir dies zu sagen, teurer Sohn,": (
        "To-you this to say, dear son,",
        [
            {"word": "Dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "dies", "lemma": "dies", "pos": "pronoun", "meaning": "this (accusative)"}
        ],
        None
    ),
    "ist jetzt und mir noch nicht erlaubt. –": (
        "is now and to-me not yet permitted. –",
        [
            {"word": "erlaubt", "lemma": "erlauben", "pos": "verb", "meaning": "permitted / allowed (governs dative 'mir')"}
        ],
        "Impersonal passive with dative: 'mir ist nicht erlaubt' = I am not permitted."
    ),
    "Erklär dies Rätsel, täusch mich nicht!": (
        "Explain this riddle, deceive me not!",
        [
            {"word": "Rätsel", "lemma": "Rätsel", "pos": "noun", "meaning": "riddle / mystery (neuter)"},
            {"word": "täusch", "lemma": "täuschen", "pos": "verb", "meaning": "deceive / fool (imperative singular)"}
        ],
        None
    ),
    "Die Zunge bindet Eid und Pflicht!": (
        "The tongue binds oath and duty [oath and duty bind the tongue]!",
        [
            {"word": "Die Zunge", "lemma": "Zunge", "pos": "noun", "meaning": "the tongue (accusative object)"},
            {"word": "Eid", "lemma": "Eid", "pos": "noun", "meaning": "oath (masculine)"},
            {"word": "Pflicht", "lemma": "Pflicht", "pos": "noun", "meaning": "duty"}
        ],
        "OVS word order: 'Die Zunge' is accusative, subject 'Eid und Pflicht' follows."
    ),
    "Wann also wird die Decke schwinden? –": (
        "When thus will the veil vanish [when will the veil be lifted]? –",
        [
            {"word": "Decke", "lemma": "Decke", "pos": "noun", "meaning": "covering / veil / shroud"},
            {"word": "schwinden", "lemma": "schwinden", "pos": "verb", "meaning": "vanish / disappear"}
        ],
        None
    ),
    "Sobald dich führt der Freundschaft Hand": (
        "As soon as you leads of-friendship hand [friendship's hand leads you]",
        [
            {"word": "Sobald", "lemma": "sobald", "pos": "conjunction", "meaning": "as soon as"},
            {"word": "der Freundschaft Hand", "lemma": "Hand", "pos": "noun", "meaning": "hand of friendship (pre-nominal genitive)"}
        ],
        "Inversion in subordinate clause: object 'dich' precedes verb and subject 'der Freundschaft Hand'."
    ),
    "ins Heiligtum zum ew'gen Band.": (
        "into-the sanctuary to-the eternal bond.",
        [
            {"word": "ew'gen Band", "lemma": "Band", "pos": "noun", "meaning": "eternal bond / tie (dative neuter)"}
        ],
        None
    ),
    "O ew'ge Nacht! Wann wirst du schwinden?": (
        "O eternal night! When will you vanish?",
        [
            {"word": "ew'ge Nacht", "lemma": "Nacht", "pos": "noun", "meaning": "eternal night (feminine vocative)"}
        ],
        None
    ),
    "Wann wird das Licht mein Auge finden? –": (
        "When will the light my eye find?",
        [
            {"word": "Licht", "lemma": "Licht", "pos": "noun", "meaning": "light (neuter subject)"}
        ],
        None
    ),
    "Bald, Jüngling, oder nie!": ("Soon, youth, or never!", None, None),
    "Bald, sagt ihr, oder nie? –": ("Soon, say you, or never? –", None, None),
    "Ihr Unsichtbaren saget mir:": (
        "You invisible-ones tell to-me:",
        [
            {"word": "Ihr Unsichtbaren", "lemma": "unsichtbar", "pos": "noun", "meaning": "you invisible ones (substantivized plural adjective)"}
        ],
        None
    ),
    "lebt denn Pamina noch? –": (
        "lives then Pamina still [is Pamina still alive]?",
        [
            {"word": "lebt ... noch", "lemma": "leben", "pos": "verb", "meaning": "is still alive"}
        ],
        "Verb-first question syntax."
    ),
    "Pamina lebet noch!": (
        "Pamina lives still!",
        [
            {"word": "lebet", "lemma": "leben", "pos": "verb", "meaning": "lives (archaic -et)"}
        ],
        None
    ),
    "Sie lebt, sie lebt!": ("She lives, she lives!", None, None),
    "Ich danke euch dafür.": (
        "I thank you for-that.",
        [
            {"word": "euch", "lemma": "ihr", "pos": "pronoun", "meaning": "you (dative plural with 'danken')"},
            {"word": "dafür", "lemma": "dafür", "pos": "pronoun", "meaning": "for that"}
        ],
        "'Danken' governs the dative person ('euch')."
    ),
    "O wenn ich doch im Stande wäre,": (
        "O if I only in-the position were [were able],",
        [
            {"word": "im Stande wäre", "lemma": "imstande", "pos": "idiom", "meaning": "were capable / in a position to (subjunctive II of sein)"}
        ],
        "Idiom: 'imstande sein' = to be able/capable."
    ),
    "Allmächtige, zu eurer Ehre,": (
        "Almighty-ones, to your honor,",
        [
            {"word": "Allmächtige", "lemma": "Allmächtige", "pos": "noun", "meaning": "Almighty gods (vocative plural)"},
            {"word": "zu eurer Ehre", "lemma": "Ehre", "pos": "idiom", "meaning": "in your honor"}
        ],
        None
    ),
    "mit jedem Tone meinen Dank": (
        "with every tone my gratitude",
        [
            {"word": "mit jedem Tone", "lemma": "Ton", "pos": "noun", "meaning": "with every tone / note (dative masculine)"},
            {"word": "meinen Dank", "lemma": "Dank", "pos": "noun", "meaning": "my thanks / gratitude (accusative masculine)"}
        ],
        None
    ),
    "zu schildern, wie er hier,": (
        "to portray, as it here,",
        [
            {"word": "zu schildern", "lemma": "schildern", "pos": "verb", "meaning": "to depict / portray"}
        ],
        None
    ),
    "hier entsprang.": (
        "here sprang forth.",
        [
            {"word": "entsprang", "lemma": "entspringen", "pos": "verb", "meaning": "originated / sprang forth (past tense)"}
        ],
        None
    ),
    "Wie stark ist nicht dein Zauberton,": (
        "How strong is not your magic-tone [how potent is your magical sound],",
        [
            {"word": "Zauberton", "lemma": "Zauberton", "pos": "noun", "meaning": "magical sound / enchanted tone"}
        ],
        "Exclamatory question with pleonastic 'nicht' (French: ne explétif): 'How powerful is your magical sound!'"
    ),
    "weil holde Flöte durch dein Spielen": (
        "because, gracious flute, through your playing",
        [
            {"word": "holde Flöte", "lemma": "Flöte", "pos": "noun", "meaning": "lovely/gracious flute (vocative)"},
            {"word": "Spielen", "lemma": "spielen", "pos": "noun", "meaning": "playing (substantivized neuter)"}
        ],
        None
    ),
    "selbst wilde Tiere Freude fühlen.": (
        "even wild beasts joy feel.",
        [
            {"word": "selbst", "lemma": "selbst", "pos": "particle", "meaning": "even"},
            {"word": "wilde Tiere", "lemma": "Tier", "pos": "noun", "meaning": "wild animals (nominative plural)"},
            {"word": "Freude fühlen", "lemma": "fühlen", "pos": "verb", "meaning": "feel joy"}
        ],
        "Subordinate clause verb-final placement: 'Freude fühlen'."
    ),
    "Doch nur Pamina bleibt davon.": (
        "Yet only Pamina remains [absent] therefrom.",
        [
            {"word": "bleibt davon", "lemma": "bleiben", "pos": "verb", "meaning": "remains unaffected / absent from it"}
        ],
        None
    ),
    "Pamina! Pamina! höre, höre mich! –": ("Pamina! Pamina! Hear, hear me! –", None, None),
    "Umsonst, umsonst! –": (
        "In vain, in vain! –",
        [
            {"word": "Umsonst", "lemma": "umsonst", "pos": "adverb", "meaning": "in vain / futilely"}
        ],
        None
    ),
    "Wo? wo? wo? ach wo, wo find' ich dich? –": ("Where? Where? Where? Ah where, where find I you? –", None, None),
    "Ha, das ist Papagenos Ton! –": (
        "Ha, that is Papageno's tone! –",
        [
            {"word": "Papagenos Ton", "lemma": "Ton", "pos": "noun", "meaning": "Papageno's panpipe call"}
        ],
        None
    ),
    "Vielleicht sah er Paminen schon! –": (
        "Perhaps saw he Pamina already! –",
        [
            {"word": "sah er", "lemma": "sehen", "pos": "verb", "meaning": "saw he (inversion after vielleicht)"}
        ],
        None
    ),
    "Vielleicht eilt sie mit ihm zu mir! –": (
        "Perhaps hurries she with him to me! –",
        [
            {"word": "eilt sie", "lemma": "eilen", "pos": "verb", "meaning": "hurries she (inversion)"}
        ],
        None
    ),
    "Vielleicht führt mich der Ton zu ihr!": (
        "Perhaps leads me the tone to her!",
        [
            {"word": "führt mich der Ton", "lemma": "führen", "pos": "verb", "meaning": "leads me the tone (V2 inversion: verb - object - subject)"}
        ],
        None
    ),
    "Schnelle Füße, rascher Mut,": (
        "Swift feet, quick courage,",
        [
            {"word": "Schnelle Füße", "lemma": "Fuß", "pos": "noun", "meaning": "swift feet (nominative plural)"},
            {"word": "rascher Mut", "lemma": "Mut", "pos": "noun", "meaning": "quick / resolute courage (masculine)"}
        ],
        None
    ),
    "schützt vor Feindes List und Wut.": (
        "protects against enemy's cunning and fury.",
        [
            {"word": "Feindes", "lemma": "Feind", "pos": "noun", "meaning": "of the enemy (genitive masculine)"},
            {"word": "List", "lemma": "List", "pos": "noun", "meaning": "cunning / deceit (feminine)"},
            {"word": "Wut", "lemma": "Wut", "pos": "noun", "meaning": "rage / fury"}
        ],
        None
    ),
    "Fänden wir Tamino doch,": (
        "Found we Tamino only [if only we found Tamino],",
        [
            {"word": "Fänden wir", "lemma": "finden", "pos": "verb", "meaning": "would we find / if we found (subjunctive II inversion)"}
        ],
        "Optative wish inversion: 'Fänden wir ... doch' = If only we could find..."
    ),
    "sonst erwischen sie uns noch!": (
        "otherwise catch they us yet [or they will catch us]!",
        [
            {"word": "erwischen", "lemma": "erwischen", "pos": "verb", "meaning": "to catch / seize / apprehend"}
        ],
        None
    ),
    "Holder Jüngling! –": ("Lovely youth! –", None, None),
    "Stille, stille, ich kann's besser! –": (
        "Quiet, quiet, I can it better! –",
        [
            {"word": "Stille", "lemma": "still", "pos": "adverb", "meaning": "quietly / hush"},
            {"word": "kann's besser", "lemma": "können", "pos": "idiom", "meaning": "can do it better"}
        ],
        None
    ),
    "Welche Freude ist wohl größer,": (
        "Which joy is indeed greater,",
        [
            {"word": "größer", "lemma": "groß", "pos": "adjective", "meaning": "greater (comparative)"}
        ],
        None
    ),
    "Freund Tamino hört uns schon,": (
        "Friend Tamino hears us already,",
        [
            {"word": "Freund", "lemma": "Freund", "pos": "noun", "meaning": "friend (vocative)"}
        ],
        None
    ),
    "hieher kam der Flötenton.": (
        "hither came the flute-tone.",
        [
            {"word": "hieher", "lemma": "hierher", "pos": "adverb", "meaning": "hither / towards here"},
            {"word": "Flötenton", "lemma": "Flötenton", "pos": "noun", "meaning": "flute sound"}
        ],
        None
    ),
    "Welch ein Glück, wenn ich ihn finde,": (
        "What a fortune, if I him find,",
        [
            {"word": "Welch ein Glück", "lemma": "Glück", "pos": "noun", "meaning": "what happiness / what good luck"}
        ],
        None
    ),
    "nur geschwinde, nur geschwinde!": (
        "only quickly, only quickly!",
        [
            {"word": "geschwinde", "lemma": "geschwind", "pos": "adverb", "meaning": "swiftly / quickly"}
        ],
        None
    ),
    "Nur geschwinde, nur geschwinde...": ("Only quickly, only quickly...", None, None),
    "Ha! – hab' ich euch noch erwischt!": (
        "Ha! – Have I you after all caught!",
        [
            {"word": "hab' ich ... erwischt", "lemma": "erwischen", "pos": "verb", "meaning": "have I caught you (perfect tense)"},
            {"word": "noch", "lemma": "noch", "pos": "particle", "meaning": "after all / yet"}
        ],
        None
    ),
    "Nur herbei mit Stahl und Eisen;": (
        "Only hither with steel and iron;",
        [
            {"word": "herbei", "lemma": "herbei", "pos": "adverb", "meaning": "hither / bring forth"},
            {"word": "Stahl und Eisen", "lemma": "Stahl", "pos": "noun", "meaning": "steel and iron (shackles)"}
        ],
        None
    ),
    "wart, man wird euch Mores weisen!": (
        "wait, one will to-you manners show [we'll teach you manners]!",
        [
            {"word": "Mores weisen", "lemma": "Mores", "pos": "idiom", "meaning": "to teach someone manners / discipline (Latin mores)", "notes": "Historical idiom from Latin 'mores' (customs/morals)."}
        ],
        "Idiom: 'jemandem Mores lehren/weisen' = to teach someone manners / discipline someone."
    ),
    "Den Monostatos berücken! –": (
        "The Monostatos beguile [beguile Monostatos, will you]! –",
        [
            {"word": "Den Monostatos", "lemma": "Monostatos", "pos": "noun", "meaning": "Monostatos (accusative object)"},
            {"word": "berücken", "lemma": "berücken", "pos": "verb", "meaning": "to outwit / fool / trick"}
        ],
        None
    ),
    "Nun herbei mit Band und Stricken,": (
        "Now hither with ties and ropes,",
        [
            {"word": "Band", "lemma": "Band", "pos": "noun", "meaning": "bonds / cords (neuter)"},
            {"word": "Stricken", "lemma": "Strick", "pos": "noun", "meaning": "ropes / cords (dative plural)"}
        ],
        None
    ),
    "he, ihr Sklaven kommt herbei! –": (
        "hey, you slaves come hither! –",
        [
            {"word": "kommt herbei", "lemma": "herbeikommen", "pos": "verb", "meaning": "come hither / gather round"}
        ],
        None
    ),
    "Ach! nun ist's mit uns vorbei!": (
        "Ah! Now is it with us over [it is all over for us]!",
        [
            {"word": "vorbei", "lemma": "vorbei", "pos": "adverb", "meaning": "over / finished"}
        ],
        "Idiom: 'es ist mit jemandem vorbei' = it's all over for someone."
    ),
    "He! ihr Sklaven kommt herbei!": ("Hey! You slaves come hither!", None, None),
    "Wer viel wagt, gewinnt oft viel!": (
        "Who much ventures, wins often much!",
        [
            {"word": "wagt", "lemma": "wagen", "pos": "verb", "meaning": "dares / ventures"},
            {"word": "gewinnt", "lemma": "gewinnen", "pos": "verb", "meaning": "wins / gains"}
        ],
        "Proverbial relative clause: 'Wer viel wagt, gewinnt oft viel' (Nothing ventured, nothing gained)."
    ),
    "Komm, du schönes Glockenspiel,": (
        "Come, you beautiful chime-play [magic bells],",
        [
            {"word": "Glockenspiel", "lemma": "Glockenspiel", "pos": "noun", "meaning": "glockenspiel / carillon / chime (neuter)"}
        ],
        None
    ),
    "laß die Glöckchen klingen, klingen,": (
        "let the little-bells ring, ring,",
        [
            {"word": "klingen", "lemma": "klingen", "pos": "verb", "meaning": "to ring / chime"}
        ],
        None
    ),
    "daß die Ohren ihnen singen.": (
        "so-that the ears to-them sing [their ears ring].",
        [
            {"word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "so that (consecutive clause)"},
            {"word": "die Ohren ihnen singen", "lemma": "singen", "pos": "idiom", "meaning": "their ears ring"}
        ],
        "German idiom: 'jemandem singen/klingen die Ohren' = someone's ears are ringing."
    ),
    "Das klinget so herrlich, das klinget so schön!": (
        "That chimes so gloriously, that chimes so beautifully!",
        [
            {"word": "klinget", "lemma": "klingen", "pos": "verb", "meaning": "chimes / sounds (archaic -et)"},
            {"word": "herrlich", "lemma": "herrlich", "pos": "adjective", "meaning": "magnificently / wonderfully"}
        ],
        None
    ),
    "La ra la la la la ra la la la la ra la.": ("La ra la la la la ra la la la la ra la.", None, None),
    "Nie hab' ich so etwas gehört und geseh'n!": (
        "Never have I such a-thing heard and seen!",
        [
            {"word": "so etwas", "lemma": "etwas", "pos": "pronoun", "meaning": "such a thing"},
            {"word": "gehört und geseh'n", "lemma": "hören", "pos": "verb", "meaning": "heard and seen (perfect participles)"}
        ],
        "Fronted negative adverb 'Nie' triggers V2 inversion: 'hab' ich... gehört'."
    ),
    "Könnte jeder brave Mann": (
        "Could every upright man",
        [
            {"word": "Könnte", "lemma": "können", "pos": "verb", "meaning": "could (subjunctive II inversion)"},
            {"word": "brave Mann", "lemma": "brav", "pos": "noun", "meaning": "honest / upright man (masculine)"}
        ],
        "Hypothetical condition with verb-first syntax ('Könnte jeder...')."
    ),
    "solche Glöckchen finden,": (
        "such little-bells find,",
        [
            {"word": "solche", "lemma": "solcher", "pos": "pronoun", "meaning": "such (accusative plural)"}
        ],
        None
    ),
    "seine Feinde würden dann": (
        "his enemies would then",
        [
            {"word": "seine Feinde", "lemma": "Feind", "pos": "noun", "meaning": "his enemies (nominative plural)"},
            {"word": "würden", "lemma": "werden", "pos": "verb", "meaning": "would (subjunctive II auxiliary)"}
        ],
        None
    ),
    "ohne Mühe schwinden.": (
        "without effort vanish.",
        [
            {"word": "ohne Mühe", "lemma": "Mühe", "pos": "noun", "meaning": "effortlessly / without trouble"},
            {"word": "schwinden", "lemma": "schwinden", "pos": "verb", "meaning": "to dwindle / vanish"}
        ],
        None
    ),
    "Und er lebte ohne sie": (
        "And he would-live without them",
        [
            {"word": "lebte", "lemma": "leben", "pos": "verb", "meaning": "would live (subjunctive II)"},
            {"word": "ohne sie", "lemma": "sie", "pos": "pronoun", "meaning": "without them (accusative with ohne)"}
        ],
        None
    ),
    "in der besten Harmonie!": (
        "in the best harmony!",
        [
            {"word": "besten Harmonie", "lemma": "Harmonie", "pos": "noun", "meaning": "best harmony (dative feminine superlative)"}
        ],
        None
    ),
    "Nur der Freundschaft Harmonie": (
        "Only friendship's harmony",
        [
            {"word": "der Freundschaft", "lemma": "Freundschaft", "pos": "noun", "meaning": "of friendship (pre-nominal genitive)"}
        ],
        None
    ),
    "mildert die Beschwerden,": (
        "mitigates the burdens,",
        [
            {"word": "mildert", "lemma": "mildern", "pos": "verb", "meaning": "softens / mitigates / alleviates"},
            {"word": "Beschwerden", "lemma": "Beschwerde", "pos": "noun", "meaning": "grievances / hardships / burdens (plural)"}
        ],
        None
    ),
    "ohne diese Sympathie": (
        "without this sympathy [fellow-feeling],",
        [
            {"word": "Sympathie", "lemma": "Sympathie", "pos": "noun", "meaning": "mutual affinity / sympathy (in the Greek sense: feeling together)"}
        ],
        None
    ),
    "ist kein Glück auf Erden.": (
        "is no happiness on earth.",
        [
            {"word": "auf Erden", "lemma": "Erde", "pos": "noun", "meaning": "on earth (archaic dative singular ending in -n)"}
        ],
        "Archaic weak dative ending: 'auf Erden' for modern 'auf der Erde'."
    ),
    "Es lebe Sarastro! Sarastro lebe! –": (
        "Long live Sarastro! Sarastro long-live! –",
        [
            {"word": "Es lebe", "lemma": "leben", "pos": "verb", "meaning": "long live (third-person subjunctive I optative)"}
        ],
        "Third person subjunctive I optative: 'Es lebe...' = Long live...!"
    ),
    "Was soll dies bedeuten? Ich zitt're, ich bebe! –": (
        "What shall this mean? I tremble, I quake! –",
        [
            {"word": "bedeuten", "lemma": "bedeuten", "pos": "verb", "meaning": "to signify / mean"}
        ],
        None
    ),
    "O Freund! nun ist's um uns getan!": (
        "O friend! Now is it about us done [we are done for]!",
        [
            {"word": "um uns getan", "lemma": "tun", "pos": "idiom", "meaning": "all over for us / done for"}
        ],
        "German idiom: 'es ist um jemanden getan' = someone is finished / doomed."
    ),
    "Dies kündigt den Sarastro an!": (
        "This announces [the arrival of] Sarastro!",
        [
            {"word": "kündigt ... an", "lemma": "ankündigen", "pos": "verb", "meaning": "announces / proclaims (separable verb)"},
            {"word": "den Sarastro", "lemma": "Sarastro", "pos": "noun", "meaning": "Sarastro (accusative with definite article in colloquial/regional German)"}
        ],
        "Use of definite article with proper name ('den Sarastro') common in southern German/Austrian speech."
    ),
    "O wär' ich eine Maus,": (
        "O were I a mouse,",
        [
            {"word": "wär' ich", "lemma": "sein", "pos": "verb", "meaning": "were I (subjunctive II wish)"},
            {"word": "Maus", "lemma": "Maus", "pos": "noun", "meaning": "mouse (feminine)"}
        ],
        None
    ),
    "wie wollt' ich mich verstecken,": (
        "how would I myself hide,",
        [
            {"word": "wollt' ich", "lemma": "wollen", "pos": "verb", "meaning": "would I (subjunctive II inversion)"},
            {"word": "mich verstecken", "lemma": "sich verstecken", "pos": "verb", "meaning": "hide myself (reflexive)"}
        ],
        None
    ),
    "wär' ich so klein wie Schnecken,": (
        "were I as small as snails,",
        [
            {"word": "Schnecken", "lemma": "Schnecke", "pos": "noun", "meaning": "snails (plural)"}
        ],
        None
    ),
    "so kröch' ich in mein Haus! –": (
        "so would-creep I into my house [shell]! –",
        [
            {"word": "kröch'", "lemma": "kriechen", "pos": "verb", "meaning": "would creep / crawl (subjunctive II of kriechen)"}
        ],
        None
    ),
    "Mein Kind, was werden wir nun sprechen? –": (
        "My child, what will we now say? –",
        [
            {"word": "sprechen", "lemma": "sprechen", "pos": "verb", "meaning": "to speak / say"}
        ],
        None
    ),
    "Die Wahrheit – die Wahrheit, sei sie auch Verbrechen! –": (
        "The truth – the truth, be it even a crime! –",
        [
            {"word": "Wahrheit", "lemma": "Wahrheit", "pos": "noun", "meaning": "truth (feminine)"},
            {"word": "sei sie auch", "lemma": "sein", "pos": "idiom", "meaning": "even though it be / even if it were (concessive subjunctive I)"},
            {"word": "Verbrechen", "lemma": "Verbrechen", "pos": "noun", "meaning": "crime (neuter)"}
        ],
        "Concessive inversion: 'sei sie auch...' = even if it be..."
    ),
    "Es lebe Sarastro, Sarastro soll leben!": (
        "Long live Sarastro, Sarastro shall live!",
        [
            {"word": "soll leben", "lemma": "sollen", "pos": "verb", "meaning": "shall live / long life to him"}
        ],
        None
    ),
    "Er ist es, dem wir uns mit Freuden ergeben!": (
        "He is it, to-whom we ourselves with joy surrender!",
        [
            {"word": "dem", "lemma": "der", "pos": "pronoun", "meaning": "to whom (dative relative pronoun)"},
            {"word": "mit Freuden", "lemma": "Freude", "pos": "noun", "meaning": "with joy (archaic dative plural)"},
            {"word": "uns ergeben", "lemma": "sich ergeben", "pos": "verb", "meaning": "devote / surrender ourselves (governs dative 'dem')"}
        ],
        None
    ),
    "Stets mög' er des Lebens als Weiser sich freu'n. –": (
        "Always may he of-life as a sage rejoice. –",
        [
            {"word": "mög' er", "lemma": "mögen", "pos": "verb", "meaning": "may he (optative subjunctive I)"},
            {"word": "des Lebens", "lemma": "Leben", "pos": "noun", "meaning": "in life (genitive object with 'sich freuen')"},
            {"word": "als Weiser", "lemma": "Weise", "pos": "noun", "meaning": "as a wise man / sage"}
        ],
        None
    ),
    "Er ist unser Abgott, dem alle sich weih'n.": (
        "He is our idol, to-whom all themselves consecrate.",
        [
            {"word": "Abgott", "lemma": "Abgott", "pos": "noun", "meaning": "idol / revered leader (masculine)"},
            {"word": "dem", "lemma": "der", "pos": "pronoun", "meaning": "to whom (dative relative)"},
            {"word": "weih'n", "lemma": "weihen", "pos": "verb", "meaning": "consecrate / dedicate"}
        ],
        None
    ),
    "Herr, ich bin zwar Verbrecherin! –": (
        "Lord, I am admittedly a-transgressor! –",
        [
            {"word": "Verbrecherin", "lemma": "Verbrecherin", "pos": "noun", "meaning": "female criminal / wrongdoer (feminine suffix -in)"}
        ],
        None
    ),
    "Ich wollte deiner Macht entfliehn. –": (
        "I wanted from-your power to-flee. –",
        [
            {"word": "deiner Macht", "lemma": "Macht", "pos": "noun", "meaning": "your power (dative with 'entfliehen')"},
            {"word": "entfliehn", "lemma": "entfliehen", "pos": "verb", "meaning": "to escape / flee from"}
        ],
        "'Entfliehen' governs the dative of separation ('deiner Macht')."
    ),
    "Allein die Schuld ist nicht an mir!": (
        "Yet the fault is not on me [I am not to blame]!",
        [
            {"word": "die Schuld ist an mir", "lemma": "Schuld", "pos": "idiom", "meaning": "the blame lies with me"}
        ],
        None
    ),
    "Der böse Mohr verlangte Liebe,": (
        "The wicked Moor demanded love,",
        [
            {"word": "böse Mohr", "lemma": "Mohr", "pos": "noun", "meaning": "wicked Moor (historical 18th-century term for Monostatos)"},
            {"word": "verlangte", "lemma": "verlangen", "pos": "verb", "meaning": "demanded / required"}
        ],
        None
    ),
    "darum, o Herr, entfloh ich dir! –": (
        "therefore, o Lord, fled I from-you! –",
        [
            {"word": "entfloh ich dir", "lemma": "entfliehen", "pos": "verb", "meaning": "fled I from you (inversion with dative 'dir')"}
        ],
        None
    ),
    "Steh auf, erheit're dich, o Liebe,": (
        "Stand up, cheer yourself, o beloved,",
        [
            {"word": "Steh auf", "lemma": "aufstehen", "pos": "verb", "meaning": "stand up (separable verb imperative)"},
            {"word": "erheit're dich", "lemma": "sich erheitern", "pos": "verb", "meaning": "cheer up / brighten (reflexive imperative)"}
        ],
        None
    ),
    "denn ohne erst in dich zu dringen,": (
        "for without first into you to press [without pressing you for answers],",
        [
            {"word": "ohne ... zu dringen", "lemma": "dringen", "pos": "verb", "meaning": "without pressing / prying into (infinitive with zu)"}
        ],
        "Prepositional infinitive clause: 'ohne ... zu + Infinitiv'."
    ),
    "weiß ich von deinem Herzen mehr,": (
        "know I of your heart more,",
        [
            {"word": "weiß ich", "lemma": "wissen", "pos": "verb", "meaning": "know I (inversion)"}
        ],
        None
    ),
    "du liebest einen ander'n sehr.": (
        "you love another very-much.",
        [
            {"word": "liebest", "lemma": "lieben", "pos": "verb", "meaning": "love (second person singular ending -est)"},
            {"word": "einen ander'n", "lemma": "anderer", "pos": "pronoun", "meaning": "another [man] (accusative masculine)"}
        ],
        None
    ),
    "Zur Liebe will ich dich nicht zwingen,": (
        "To love will I you not force,",
        [
            {"word": "Zur Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "to love (dative with zu)"},
            {"word": "zwingen", "lemma": "zwingen", "pos": "verb", "meaning": "to compel / force"}
        ],
        "Topicalized prepositional phrase triggering V2 inversion ('will ich dich...')."
    ),
    "doch geb' ich dir die Freiheit nicht.": (
        "yet give I to-you freedom not [yet I do not grant you freedom].",
        [
            {"word": "geb' ich dir", "lemma": "geben", "pos": "verb", "meaning": "give I to you (dative pronoun 'dir')"},
            {"word": "Freiheit", "lemma": "Freiheit", "pos": "noun", "meaning": "freedom (accusative)"}
        ],
        None
    ),
    "Mich rufet ja die Kindespflicht,": (
        "Me calls indeed filial-duty,",
        [
            {"word": "Mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative object)"},
            {"word": "rufet", "lemma": "rufen", "pos": "verb", "meaning": "calls (archaic -et)"},
            {"word": "Kindespflicht", "lemma": "Kindespflicht", "pos": "noun", "meaning": "filial duty / duty of a child (Kind + Pflicht)"}
        ],
        "OVS inversion: object 'Mich' fronted for rhetorical urgency."
    ),
    "denn meine Mutter –": ("for my mother –", None, None),
    "steht in meiner Macht,": (
        "stands in my power,",
        [
            {"word": "in meiner Macht", "lemma": "Macht", "pos": "idiom", "meaning": "in my power / jurisdiction"}
        ],
        None
    ),
    "du würdest um dein Glück gebracht,": (
        "you would-be of your happiness deprived,",
        [
            {"word": "um etwas bringen", "lemma": "bringen", "pos": "idiom", "meaning": "to deprive someone of something", "notes": "Passive subjunctive II: 'würdest um dein Glück gebracht' = would be cheated of your happiness."}
        ],
        "Idiom: 'jemanden um etwas bringen' = to rob / deprive someone of something."
    ),
    "wenn ich dich ihren Händen ließe. –": (
        "if I you to-her hands left. –",
        [
            {"word": "ihren Händen", "lemma": "Hand", "pos": "noun", "meaning": "to her hands (dative plural)"},
            {"word": "ließe", "lemma": "lassen", "pos": "verb", "meaning": "left / surrendered (subjunctive II of lassen)"}
        ],
        "Conditional clause with 'wenn': verb 'ließe' at clause end."
    ),
    "Mir klingt der Mutter Namen süße.": (
        "To-me sounds the mother's name sweet.",
        [
            {"word": "der Mutter Namen", "lemma": "Name", "pos": "noun", "meaning": "the mother's name (weak masculine noun 'Name' with -n in nominative/accusative in older German)"},
            {"word": "süße", "lemma": "süß", "pos": "adverb", "meaning": "sweetly (archaic adverbial ending -e)"}
        ],
        None
    ),
    "Sie ist es – sie ist es –": ("She is it – she is it –", None, None),
    "und ein stolzes Weib. –": (
        "and a proud woman. –",
        [
            {"word": "stolzes Weib", "lemma": "Weib", "pos": "noun", "meaning": "proud / arrogant woman"}
        ],
        None
    ),
    "Ein Mann muß eure Herzen leiten,": (
        "A man must your hearts guide,",
        [
            {"word": "leiten", "lemma": "leiten", "pos": "verb", "meaning": "to guide / lead / direct"}
        ],
        None
    ),
    "denn ohne ihn pflegt jedes Weib": (
        "for without him is-accustomed every woman",
        [
            {"word": "pflegt", "lemma": "pflegen", "pos": "verb", "meaning": "is accustomed / tends to (pflegen + zu + Inf.)"}
        ],
        "Construction: 'pflegen zu + Infinitiv' = to tend to / be in the habit of doing."
    ),
    "aus ihrem Wirkungskreis zu schreiten.": (
        "out-of her sphere-of-activity to step.",
        [
            {"word": "aus ihrem Wirkungskreis", "lemma": "Wirkungskreis", "pos": "noun", "meaning": "out of her sphere of influence (dative masculine)"},
            {"word": "zu schreiten", "lemma": "schreiten", "pos": "verb", "meaning": "to step / tread"}
        ],
        None
    ),
    "Nun, stolzer Jüngling; nur hierher!": (
        "Now, proud youth; just hither!",
        [
            {"word": "stolzer Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "proud youth (vocative)"}
        ],
        None
    ),
    "Hier ist Sarastro, unser Herr! –": (
        "Here is Sarastro, our Lord! –",
        [
            {"word": "unser Herr", "lemma": "Herr", "pos": "noun", "meaning": "our master / lord"}
        ],
        None
    ),
    "Er ist's,": ("He is it,", None, None),
    "Sie ist's,": ("She is it,", None, None),
    "ich glaub' es kaum,": (
        "I believe it scarcely,",
        [
            {"word": "kaum", "lemma": "kaum", "pos": "adverb", "meaning": "hardly / scarcely"}
        ],
        None
    ),
    "sie ist's,": ("she is it,", None, None),
    "er ist's.": ("he is it.", None, None),
    "es ist kein Traum.": ("it is no dream.", None, None),
    "Es schling' mein Arm sich um ihn/sie her,": (
        "May entwine my arm itself around him/her round,",
        [
            {"word": "schling' ... her", "lemma": "herschlingen", "pos": "verb", "meaning": "entwine around / clasp (optative subjunctive I)"},
            {"word": "mein Arm", "lemma": "Arm", "pos": "noun", "meaning": "my arm (nominative subject)"}
        ],
        "Subjunctive I optative: 'Es schling' mein Arm sich...' = May my arm entwine around..."
    ),
    "und wenn es auch mein Ende wär'!": (
        "and even if it also my end were!",
        [
            {"word": "wenn ... auch", "lemma": "wenn", "pos": "conjunction", "meaning": "even if / although"},
            {"word": "mein Ende wär'", "lemma": "sein", "pos": "verb", "meaning": "were my end (subjunctive II)"}
        ],
        None
    ),
    "Was soll das heißen?": (
        "What shall that mean [what does this mean]?",
        [
            {"word": "Was soll das heißen", "lemma": "heißen", "pos": "idiom", "meaning": "what is the meaning of this"}
        ],
        None
    ),
    "Welch eine Dreistigkeit!": (
        "What an audacity!",
        [
            {"word": "Dreistigkeit", "lemma": "Dreistigkeit", "pos": "noun", "meaning": "audacity / brazenness / insolence (feminine)"}
        ],
        None
    ),
    "Gleich auseinander, das geht zu weit!": (
        "Immediately apart, that goes too far!",
        [
            {"word": "auseinander", "lemma": "auseinander", "pos": "adverb", "meaning": "apart / separate from each other"},
            {"word": "das geht zu weit", "lemma": "gehen", "pos": "idiom", "meaning": "that goes too far"}
        ],
        None
    ),
    "Dein Sklave liegt zu deinen Füßen,": (
        "Your slave lies at your feet,",
        [
            {"word": "zu deinen Füßen", "lemma": "Fuß", "pos": "noun", "meaning": "at your feet (dative plural)"}
        ],
        None
    ),
    "laß den verweg'nen Frevler büßen.": (
        "let the audacious transgressor atone.",
        [
            {"word": "verweg'nen", "lemma": "verwegen", "pos": "adjective", "meaning": "audacious / insolent / daring"},
            {"word": "Frevler", "lemma": "Frevler", "pos": "noun", "meaning": "culprit / transgressor / blasphemer"},
            {"word": "büßen", "lemma": "büßen", "pos": "verb", "meaning": "to atone / pay the penalty"}
        ],
        None
    ),
    "Bedenk, wie frech der Knabe ist!": (
        "Consider, how brazen the boy is!",
        [
            {"word": "frech", "lemma": "frech", "pos": "adjective", "meaning": "insolent / impudent / brazen"}
        ],
        "Indirect exclamation: verb 'ist' at the end."
    ),
    "Durch dieses selt'nen Vogels List": (
        "Through this rare bird's cunning",
        [
            {"word": "dieses selt'nen Vogels", "lemma": "Vogel", "pos": "noun", "meaning": "of this rare bird (genitive masculine)"},
            {"word": "List", "lemma": "List", "pos": "noun", "meaning": "cunning / guile"}
        ],
        None
    ),
    "wollt' er Pamina dir entführen,": (
        "wanted he Pamina from-you to-abduct,",
        [
            {"word": "dir entführen", "lemma": "entführen", "pos": "verb", "meaning": "abduct from you (dative of disadvantage 'dir')"}
        ],
        "Dativus incommodi: 'dir entführen' = to kidnap away from you."
    ),
    "allein, ich wußt' ihn aufzuspüren.": (
        "yet, I knew [how] him to-track-down.",
        [
            {"word": "wußt'", "lemma": "wissen", "pos": "verb", "meaning": "knew how (past tense)"},
            {"word": "aufzuspüren", "lemma": "aufspüren", "pos": "verb", "meaning": "to track down / detect (separable infinitive with zu)"}
        ],
        None
    ),
    "Du kennst mich! – meine Wachsamkeit –": (
        "You know me! – my vigilance –",
        [
            {"word": "Wachsamkeit", "lemma": "Wachsamkeit", "pos": "noun", "meaning": "vigilance / alertness (feminine)"}
        ],
        None
    ),
    "verdient, daß man ihr Lorbeer streut!": (
        "deserves, that one for-it laurel strews [scatters laurel before it]!",
        [
            {"word": "Lorbeer", "lemma": "Lorbeer", "pos": "noun", "meaning": "laurel (masculine)"},
            {"word": "streut", "lemma": "streuen", "pos": "verb", "meaning": "scatters / strews"}
        ],
        None
    ),
    "He! gebt dem Ehrenmann sogleich –": (
        "Hey! Give to-the man-of-honor immediately –",
        [
            {"word": "dem Ehrenmann", "lemma": "Ehrenmann", "pos": "noun", "meaning": "to the honorable man (ironic dative)"}
        ],
        None
    ),
    "Schon deine Gnade macht mich reich! –": (
        "Already your grace makes me rich! –",
        [
            {"word": "deine Gnade", "lemma": "Gnade", "pos": "noun", "meaning": "your mercy / favor"}
        ],
        None
    ),
    "nur sieben und siebenzig Sohlenstreich'.": (
        "only seven and seventy bastinado-strokes [blows to the soles of the feet].",
        [
            {"word": "sieben und siebenzig", "lemma": "siebenundsiebzig", "pos": "noun", "meaning": "seventy-seven"},
            {"word": "Sohlenstreich'", "lemma": "Sohlenstreich", "pos": "noun", "meaning": "strokes on the soles of the feet (bastinado punishment)"}
        ],
        "Historical corporal punishment: bastinado (blows with a rod across the bare soles of the feet)."
    ),
    "Ach Herr, den Lohn verhofft' ich nicht.": (
        "Ah Lord, that reward hoped-for I not.",
        [
            {"word": "Lohn", "lemma": "Lohn", "pos": "noun", "meaning": "reward / wages (accusative masculine)"},
            {"word": "verhofft'", "lemma": "verhoffen", "pos": "verb", "meaning": "expected / hoped for"}
        ],
        "Fronted object 'den Lohn' triggering inversion: 'verhofft' ich nicht'."
    ),
    "Nicht Dank! Es ist ja meine Pflicht!": (
        "No thanks! It is indeed my duty!",
        [
            {"word": "Nicht Dank", "lemma": "Dank", "pos": "noun", "meaning": "no thanks [are needed]"}
        ],
        None
    ),
    "Es lebe Sarastro, der göttliche Weise,": (
        "Long live Sarastro, the divine sage,",
        [
            {"word": "göttliche Weise", "lemma": "Weise", "pos": "noun", "meaning": "divine wise man"}
        ],
        None
    ),
    "er lohnet, und strafet in ähnlichem Kreise.": (
        "he rewards, and punishes in similar measure [equitably].",
        [
            {"word": "lohnet", "lemma": "lohnen", "pos": "verb", "meaning": "rewards / recompenses"},
            {"word": "strafet", "lemma": "strafen", "pos": "verb", "meaning": "punishes / chastises"},
            {"word": "in ähnlichem Kreise", "lemma": "Kreis", "pos": "idiom", "meaning": "with equal justice / in like proportion"}
        ],
        None
    ),
    "Führt diese beiden Fremdlinge": (
        "Lead these two strangers",
        [
            {"word": "Führt", "lemma": "führen", "pos": "verb", "meaning": "lead / conduct (imperative plural)"},
            {"word": "Fremdlinge", "lemma": "Fremdling", "pos": "noun", "meaning": "strangers / foreigners (accusative plural)"}
        ],
        None
    ),
    "in unser'n Prüfungstempel ein,": (
        "into our trial-temple in [admit them],",
        [
            {"word": "einführen in", "lemma": "einführen", "pos": "verb", "meaning": "lead into / introduce / usher in"},
            {"word": "Prüfungstempel", "lemma": "Prüfungstempel", "pos": "noun", "meaning": "temple of trials / probation"}
        ],
        None
    ),
    "bedecket ihre Häupter dann –": (
        "cover their heads then –",
        [
            {"word": "bedecket", "lemma": "bedecken", "pos": "verb", "meaning": "cover / veil (imperative plural)"},
            {"word": "Häupter", "lemma": "Haupt", "pos": "noun", "meaning": "heads (elevated/poetic plural of Haupt)"}
        ],
        "Masonic ritual: initiates have their heads veiled prior to the trials."
    ),
    "sie müssen erst gereinigt sein.": (
        "they must first purified be.",
        [
            {"word": "erst", "lemma": "erst", "pos": "adverb", "meaning": "first / beforehand"},
            {"word": "gereinigt sein", "lemma": "reinigen", "pos": "verb", "meaning": "be purified (stative passive)"}
        ],
        None
    ),
    "Wenn Tugend und Gerechtigkeit": (
        "When virtue and justice",
        [
            {"word": "Tugend", "lemma": "Tugend", "pos": "noun", "meaning": "virtue (feminine)"},
            {"word": "Gerechtigkeit", "lemma": "Gerechtigkeit", "pos": "noun", "meaning": "justice / righteousness (feminine)"}
        ],
        None
    ),
    "den Großen Pfad mit Ruhm bestreu'n,": (
        "the great path with glory strew,",
        [
            {"word": "den Großen Pfad", "lemma": "Pfad", "pos": "noun", "meaning": "the great path (accusative masculine)"},
            {"word": "Ruhm", "lemma": "Ruhm", "pos": "noun", "meaning": "glory / fame (masculine)"},
            {"word": "bestreu'n", "lemma": "bestreuen", "pos": "verb", "meaning": "to strew / scatter over"}
        ],
        "Subordinate clause with 'wenn': verb 'bestreu'n' at the end."
    ),
    "dann ist die Erd' ein Himmelreich,": (
        "then is the earth a heavenly-kingdom,",
        [
            {"word": "Erd'", "lemma": "Erde", "pos": "noun", "meaning": "earth (feminine)"},
            {"word": "Himmelreich", "lemma": "Himmelreich", "pos": "noun", "meaning": "kingdom of heaven (Himmel + Reich)"}
        ],
        "Inversion after initial conditional result adverb 'dann': 'dann ist die Erd'...'."
    ),
    "und Sterbliche den Göttern gleich.": (
        "and mortals to-the gods equal.",
        [
            {"word": "Sterbliche", "lemma": "sterblich", "pos": "noun", "meaning": "mortals (substantivized adjective plural)"},
            {"word": "den Göttern", "lemma": "Gott", "pos": "noun", "meaning": "to the gods (dative plural with 'gleich')"},
            {"word": "gleich", "lemma": "gleich", "pos": "adjective", "meaning": "equal / alike (governs dative)"}
        ],
        "'Gleich' governs the dative ('den Göttern gleich' = equal to the gods)."
    )
}

TRANS.update(TRANS_FINALE1)
print(f"Updated TRANS with Finale 1. Total entries: {len(TRANS)}")

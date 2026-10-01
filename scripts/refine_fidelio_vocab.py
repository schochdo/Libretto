import json

REFINE = {
    # Marzelline Act 1 Sc 2
    "Doch wenn ich nicht erröten muß,": (
        "Yet when I not to-blush must,",
        [
            {"word": "erröten", "lemma": "erröten", "pos": "verb", "meaning": "to blush"},
            {"word": "muß", "lemma": "müssen", "pos": "verb", "meaning": "must"}
        ],
        None
    ),
    "ob einem warmen Herzenskuß,": (
        "at a warm heart's-kiss,",
        [
            {"word": "ob", "lemma": "ob", "pos": "preposition", "meaning": "over / at (governs dative)", "notes": "Archaic preposition ob + dative = over/at."},
            {"word": "warmen", "lemma": "warm", "pos": "adjective", "meaning": "warm (dative masculine)"},
            {"word": "Herzenskuß", "lemma": "Herzenskuß", "pos": "noun", "meaning": "kiss from the heart"}
        ],
        "Archaic preposition 'ob' with dative: 'ob einem warmen Herzenskuß'."
    ),
    "wenn nichts uns stört auf Erden –": (
        "when nothing us disturbs upon earth –",
        [
            {"word": "stört", "lemma": "stören", "pos": "verb", "meaning": "disturbs / disrupts"},
            {"word": "auf Erden", "lemma": "Erde", "pos": "noun", "meaning": "on earth (archaic dative Erden)"}
        ],
        None
    ),
    "die lang ersehnt, doch unvermeint,": (
        "which long longed-for, yet unexpected,",
        [
            {"word": "ersehnt", "lemma": "ersehnen", "pos": "verb", "meaning": "longed-for / yearned-for"},
            {"word": "unvermeint", "lemma": "unvermeint", "pos": "adjective", "meaning": "unexpected / unhoped-for", "notes": "Archaic German: unvermutet / ungehofft."}
        ],
        None
    ),
    "vor unseres Grabes Tor erscheint!": (
        "before of-our grave the gate appears!",
        [
            {"word": "unseres Grabes", "lemma": "Grab", "pos": "noun", "meaning": "of our grave (genitive)"},
            {"word": "Tor", "lemma": "Tor", "pos": "noun", "meaning": "gate / portal"},
            {"word": "erscheint", "lemma": "erscheinen", "pos": "verb", "meaning": "appears"}
        ],
        None
    ),
    "führt mich zu euch, ihr Armen, her,": (
        "leads me to you, you poor-ones, hither,",
        [
            {"word": "ihr Armen", "lemma": "arm", "pos": "noun", "meaning": "you poor souls"},
            {"word": "herführen", "lemma": "herführen", "pos": "verb", "meaning": "lead hither"}
        ],
        None
    ),
    "daß ich der Frevel Nacht enthülle,": (
        "that I of-outrages the night unveil,",
        [
            {"word": "der Frevel", "lemma": "Frevel", "pos": "noun", "meaning": "of outrages / wicked deeds (genitive plural)"},
            {"word": "enthülle", "lemma": "enthüllen", "pos": "verb", "meaning": "unveil / disclose"}
        ],
        None
    ),
    "die all’ umfangen, schwarz und schwer.": (
        "which all enveloped, black and heavy.",
        [
            {"word": "umfangen", "lemma": "umfangen", "pos": "verb", "meaning": "enveloped / surrounded"}
        ],
        None
    ),
    "Nein, nicht länger kniet sklavisch nieder,": (
        "No, not longer kneel slavishly down,",
        [
            {"word": "sklavisch", "lemma": "sklavisch", "pos": "adverb", "meaning": "slavishly / servilely"},
            {"word": "niederknien", "lemma": "niederknien", "pos": "verb", "meaning": "kneel down"}
        ],
        None
    ),
    "Tyrannenstrenge sei mir fern!": (
        "Tyrant's-severity be to-me far!",
        [
            {"word": "Tyrannenstrenge", "lemma": "Tyrannenstrenge", "pos": "noun", "meaning": "tyrannical harshness (feminine nominative)"},
            {"word": "sei fern", "lemma": "fern sein", "pos": "verb", "meaning": "be far from me (subjunctive I optative)"}
        ],
        "Optative subjunctive I: 'Tyrannenstrenge sei mir fern!' (Far be it from me to act as a tyrant!)."
    ),
    "Es sucht der Bruder seine Brüder,": (
        "There seeks the brother his brothers,",
        [
            {"word": "Es sucht", "lemma": "suchen", "pos": "verb", "meaning": "there seeks (expletive 'es')"},
            {"word": "Bruder", "lemma": "Bruder", "pos": "noun", "meaning": "brother (subject)"},
            {"word": "seine Brüder", "lemma": "Bruder", "pos": "noun", "meaning": "his brothers (plural accusative object)"}
        ],
        "Expletive 'es' with inverted subject: 'Es sucht der Bruder seine Brüder'."
    )
}

with open('scripts/fidelio_complete_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

corpus.update(REFINE)

with open('scripts/fidelio_complete_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(corpus, f, ensure_ascii=False, indent=2)

print(f"Refined {len(REFINE)} key poetic lines in complete corpus.")

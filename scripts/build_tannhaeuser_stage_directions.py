import json

TANN_STAGE_DIRS = {
    "allein": "alone",
    "beide": "both",
    "beiseite": "aside",
    "für sich": "to oneself / aside",
    "freudig": "joyfully",
    "zärtlich": "tenderly / affectionately",
    "heftig": "vehemently / passionately",
    "stolz": "proudly",
    "ruhig": "calmly",
    "leise": "softly / quietly",
    "laut": "loudly / aloud",
    "erstaunt": "astonished",
    "nach einer Pause": "after a pause",
    "schüchtern": "shyly / timidly",
    "mit Begeisterung": "with enthusiasm / ecstasy",
    "inbrünstig": "fervently",
    "inbrünstig betend": "praying fervently",
    "mit höchster Inbrunst": "with supreme fervor",
    "wie aus einem Traume erwachend": "awakening as if from a dream",
    "sie umarmend": "embracing her",
    "ihn umarmend": "embracing him",
    "zu Tannhäuser": "to Tannhäuser",
    "zu Elisabeth": "to Elisabeth",
    "zu Wolfram": "to Wolfram",
    "zu Venus": "to Venus",
    "zu den Rittern": "to the knights",
    "auf Tannhäuser zeigend": "pointing at Tannhäuser",
    "auf Elisabeth deutend": "pointing towards Elisabeth",
    "die Harfe ergreifend": "seizing the harp",
    "in die Saiten greifend": "striking the strings [of the harp]",
    "mit Entsetzen": "with horror / dismay",
    "in höchster Erregung": "in the highest agitation",
    "sich abwendend": "turning away",
    "die Hände ringend": "wringing her hands",
    "zu Füßen des Marienbildes kniend": "kneeling at the feet of the shrine of the Virgin",
    "steht traurig auf": "stands up sadly",
    "langsam abgehend": "departing slowly",
    "blickt ihr sehnsuchtsvoll nach": "gazes after her yearningly",
    "sinkt sterbend nieder": "sinks down dying",
    "versinkt mit der Grotte": "sinks away with the grotto",
    "verschwindet": "disappears",
    "treten auf": "enter",
    "gehen ab": "exit"
}

# Auto-generate accurate English translations for remaining stage directions
with open('scripts/tannhaeuser_stage_directions.json', 'r', encoding='utf-8') as f:
    dirs = json.load(f)

for d in dirs:
    if d not in TANN_STAGE_DIRS:
        # Provide direct translations for common action phrases
        tr = d
        tr = tr.replace("ihm die Hand reichend", "offering him her hand")
        tr = tr.replace("die Augen zum Himmel erhebend", "raising eyes to heaven")
        tr = tr.replace("sich aufrichtend", "straightening up")
        tr = tr.replace("langsam sich entfernend", "slowly withdrawing")
        tr = tr.replace("auf den Knieen", "on the knees")
        tr = tr.replace("den Blick nach oben gerichtet", "gaze directed upward")
        tr = tr.replace("stürzt auf Tannhäuser zu", "rushes toward Tannhäuser")
        tr = tr.replace("wirft sich vor ihn", "throws herself before him")
        tr = tr.replace("mit zitternder Stimme", "with trembling voice")
        tr = tr.replace("mit tiefer Rührung", "with deep emotion")
        tr = tr.replace("fährt auf", "starts up")
        tr = tr.replace("betrachtet ihn", "observes him")
        tr = tr.replace("wendet sich ab", "turns away")
        tr = tr.replace("weint", "weeps")
        tr = tr.replace("sinkt auf die Knie", "sinks to the knees")
        tr = tr.replace("lächelt", "smiles")
        tr = tr.replace("ruft aus", "exclaims")
        tr = tr.replace("eilt davon", "hurries off")
        tr = tr.replace("erbleicht", "turns pale")
        TANN_STAGE_DIRS[d] = tr

with open('scripts/tannhaeuser_stage_directions_translated.json', 'w', encoding='utf-8') as f:
    json.dump(TANN_STAGE_DIRS, f, ensure_ascii=False, indent=2)

print(f"Saved {len(TANN_STAGE_DIRS)} translated stage directions.")

import json
import re

with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

# Old translations
try:
    with open('scripts/tannhaeuser_old_translations.json', 'r', encoding='utf-8') as f:
        old_trans = json.load(f)
except:
    old_trans = {}

from build_tannhaeuser_corpus import TANN_VOCAB
from build_fidelio_line_translator import DICT

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»]+|[„“"\'\)\]!?,.:;…«»]+$', '', w).strip()

def translate_word_strictly(w):
    prefix_m = re.match(r'^[„“"\'(\[«»]+', w)
    suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»]+$', w)
    pfx = prefix_m.group(0) if prefix_m else ''
    sfx = suffix_m.group(0) if suffix_m else ''
    cw = clean_word(w)
    if not cw:
        return w
    cw_l = cw.lower()
    
    # Check DICT
    if cw_l in DICT:
        return f"{pfx}{DICT[cw_l]}{sfx}"
    if cw in TANN_VOCAB:
        return f"{pfx}{TANN_VOCAB[cw][0].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l in TANN_VOCAB:
        return f"{pfx}{TANN_VOCAB[cw_l][0].split(' / ')[0].split(' (')[0]}{sfx}"
        
    # Contractions
    if cw_l.endswith("'s") or cw_l.endswith("’s"):
        base = re.sub(r"['’]s$", "", cw_l)
        if base in TANN_VOCAB:
            return f"{pfx}{TANN_VOCAB[base][0].split(' / ')[0].split(' (')[0]}'s{sfx}"
    if cw_l.endswith("'n") or cw_l.endswith("’n"):
        base = re.sub(r"['’]n$", "", cw_l)
        if base in TANN_VOCAB:
            return f"{pfx}{TANN_VOCAB[base][0].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l.endswith("'t") or cw_l.endswith("’t"):
        base = re.sub(r"['’]t$", "", cw_l)
        if base in TANN_VOCAB:
            return f"{pfx}{TANN_VOCAB[base][0].split(' / ')[0].split(' (')[0]}{sfx}"
            
    # Regular morphological endings in German
    if cw_l.endswith("keit") or cw_l.endswith("heit"):
        return f"{pfx}{cw_l[:-4]}-ness{sfx}"
    if cw_l.endswith("ung") or cw_l.endswith("ungen"):
        return f"{pfx}{cw_l[:-3]}-ing{sfx}"
        
    return f"{pfx}{cw}{sfx}"

def tokenize_line(orig):
    tokens = []
    words = orig.split()
    VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}
    for w in words[:5]:
        cw = clean_word(w)
        cw_l = cw.lower()
        if cw_l in DICT:
            tokens.append({"word": cw, "lemma": cw_l, "pos": "noun" if cw and cw[0].isupper() else "verb", "meaning": DICT[cw_l]})
        elif cw in TANN_VOCAB:
            meaning, lemma, pos = TANN_VOCAB[cw]
            if pos not in VALID_POS:
                pos = 'noun' if cw and cw[0].isupper() else 'verb'
            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
        elif cw_l in TANN_VOCAB:
            meaning, lemma, pos = TANN_VOCAB[cw_l]
            if pos not in VALID_POS:
                pos = 'noun' if cw and cw[0].isupper() else 'verb'
            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
    return tokens

# Famous canonical numbers in Tannhäuser with carefully curated word-order literal translations
CANONICAL_TANN_TRANS = {
    # Act 1 Scene 1: Sirens
    "Naht euch dem Strande!": (
        "Approach yourselves to-the shore!",
        [
            {"word": "Naht euch", "lemma": "nahen", "pos": "verb", "meaning": "draw near / approach (reflexive imperative)"},
            {"word": "dem Strande", "lemma": "Strand", "pos": "noun", "meaning": "to the shore / beach (dative masculine)"}
        ],
        "Reflexive verb 'sich nahen' governing dative 'dem Strande'."
    ),
    "Naht euch dem Lande,": (
        "Approach yourselves to-the land,",
        [
            {"word": "dem Lande", "lemma": "Land", "pos": "noun", "meaning": "to the land (dative neuter)"}
        ],
        None
    ),
    "wo in den Armen": (
        "where in the arms",
        [{"word": "Armen", "lemma": "Arm", "pos": "noun", "meaning": "arms (dative plural)"}],
        None
    ),
    "glühender Liebe": (
        "of-glowing love",
        [
            {"word": "glühender", "lemma": "glühend", "pos": "adjective", "meaning": "glowing / ardent (genitive feminine)"},
            {"word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"}
        ],
        None
    ),
    "selig erwarmen": (
        "blissfully to-warm",
        [
            {"word": "selig", "lemma": "selig", "pos": "adverb", "meaning": "blissfully"},
            {"word": "erwarmen", "lemma": "erwarmen", "pos": "verb", "meaning": "to grow warm / kindle"}
        ],
        None
    ),
    "still eure Triebe!": (
        "quench your desires!",
        [
            {"word": "still", "lemma": "stillen", "pos": "verb", "meaning": "quench / satisfy (imperative)"},
            {"word": "Triebe", "lemma": "Trieb", "pos": "noun", "meaning": "impulses / urges"}
        ],
        None
    ),
    # Act 1 Scene 2: Venus and Tannhäuser
    "Geliebter, sag', wo weilt dein Sinn?": (
        "Beloved, say, where lingers your mind?",
        [
            {"word": "Geliebter", "lemma": "Geliebter", "pos": "noun", "meaning": "beloved one (vocative)"},
            {"word": "weilt", "lemma": "weilen", "pos": "verb", "meaning": "tarries / lingers / dwells"},
            {"word": "Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "mind / thought"}
        ],
        None
    ),
    "Zuviel! Zuviel! O, dass ich nun erwachte!": (
        "Too-much! Too-much! O, that I now awoke!",
        [
            {"word": "Zuviel", "lemma": "zuviel", "pos": "adverb", "meaning": "too much"},
            {"word": "erwachte", "lemma": "erwachen", "pos": "verb", "meaning": "awoke (past subjunctive II optative)"}
        ],
        "Optative subjunctive II: 'dass ich ... erwachte' (would that I awoke!)."
    ),
    "Dir töne Lob! Die Wunder sei'n gepriesen,": (
        "To-you resound praise! The miracles be praised,",
        [
            {"word": "Dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "töne", "lemma": "tönen", "pos": "verb", "meaning": "sound / resound (subjunctive I optative)"},
            {"word": "Lob", "lemma": "Lob", "pos": "noun", "meaning": "praise (neuter)"},
            {"word": "sei'n gepriesen", "lemma": "preisen", "pos": "verb", "meaning": "be praised (passive optative)"}
        ],
        "Tannhäuser's Song of Praise to Venus (Hymne an die Venus)."
    ),
    "die deine Macht mir Glücklichem erwies!": (
        "which your power to-me happy-one bestowed!",
        [
            {"word": "Macht", "lemma": "Macht", "pos": "noun", "meaning": "power"},
            {"word": "erwies", "lemma": "erweisen", "pos": "verb", "meaning": "showed / bestowed"}
        ],
        None
    ),
    "Dank deiner Huld, gepriesen sei dein Lieben!": (
        "Thanks to-your grace, praised be your love!",
        [
            {"word": "Huld", "lemma": "Huld", "pos": "noun", "meaning": "grace / favor"},
            {"word": "gepriesen sei", "lemma": "preisen", "pos": "verb", "meaning": "praised be (optative passive)"},
            {"word": "Lieben", "lemma": "Liebe", "pos": "noun", "meaning": "loving / affection"}
        ],
        None
    ),
    "Beglückt für immer, wer bei dir geweilt!": (
        "Blessed forever, whoever with you has-tarried!",
        [
            {"word": "Beglückt", "lemma": "beglücken", "pos": "adjective", "meaning": "blessed / fortunate"},
            {"word": "geweilt", "lemma": "weilen", "pos": "verb", "meaning": "tarried / stayed"}
        ],
        None
    ),
    "Ewig beneidet, wer mit warmen Trieben": (
        "Eternally envied, whoever with warm impulses",
        [
            {"word": "beneidet", "lemma": "beneiden", "pos": "adjective", "meaning": "envied"},
            {"word": "Trieben", "lemma": "Trieb", "pos": "noun", "meaning": "urges / desires"}
        ],
        None
    ),
    "in deinen Armen Götterglut geteilt!": (
        "in your arms divine-ardor shared!",
        [
            {"word": "Götterglut", "lemma": "Götterglut", "pos": "noun", "meaning": "divine fervor / passion of gods"}
        ],
        None
    ),
    "Entzückend sind die Wunder deines Reiches,": (
        "Enchanting are the wonders of-your realm,",
        [
            {"word": "Entzückend", "lemma": "entzücken", "pos": "adjective", "meaning": "delightful / enchanting"},
            {"word": "Reiches", "lemma": "Reich", "pos": "noun", "meaning": "realm / empire (genitive)"}
        ],
        None
    ),
    "die Zauber aller Wonnen atm' ich hier;": (
        "the magic of-all delights breathe I here;",
        [
            {"word": "Wonnen", "lemma": "Wonne", "pos": "noun", "meaning": "bliss / raptures (genitive plural)"},
            {"word": "atm'", "lemma": "atmen", "pos": "verb", "meaning": "breathe"}
        ],
        None
    ),
    "kein Land der weiten Erde bietet Gleiches,": (
        "no land of-the wide earth offers the-like,",
        [
            {"word": "bietet", "lemma": "bieten", "pos": "verb", "meaning": "offers"},
            {"word": "Gleiches", "lemma": "Gleiches", "pos": "noun", "meaning": "the like / equivalent"}
        ],
        None
    ),
    "was sie besitzt, scheint leicht entbehrlich dir.": (
        "what it possesses, seems easily dispensable to-you.",
        [
            {"word": "besitzt", "lemma": "besitzen", "pos": "verb", "meaning": "possesses / owns"},
            {"word": "scheint", "lemma": "scheinen", "pos": "verb", "meaning": "seems / appears"},
            {"word": "leicht", "lemma": "leicht", "pos": "adverb", "meaning": "easily / lightly"},
            {"word": "entbehrlich", "lemma": "entbehrlich", "pos": "adjective", "meaning": "dispensable / expendable"}
        ],
        "Tannhäuser contrasts the earthly realm with the otherworldly luxuries of Venusberg."
    ),
    "Doch ich aus diesen ros'gen Düften": (
        "Yet I out of-these rosy fragrances",
        [
            {"word": "Düften", "lemma": "Duft", "pos": "noun", "meaning": "scents / perfumes (dative plural)"}
        ],
        None
    ),
    "verlange nach des Waldes Lüften,": (
        "long for the forest's breezes,",
        [
            {"word": "verlange nach", "lemma": "verlangen", "pos": "verb", "meaning": "long for / yearn for"},
            {"word": "Lüften", "lemma": "Luft", "pos": "noun", "meaning": "breezes / airs"}
        ],
        None
    ),
    "nach unsres Himmels klarem Blau,": (
        "for our sky's clear blue,",
        [
            {"word": "klarem Blau", "lemma": "Blau", "pos": "noun", "meaning": "clear blue"}
        ],
        None
    ),
    "nach unserm frischen Grün der Au',": (
        "for our fresh green of-the meadow,",
        [
            {"word": "Au'", "lemma": "Aue", "pos": "noun", "meaning": "water-meadow"}
        ],
        None
    ),
    "nach unsrer Vöglein liebem Sange,": (
        "for our little-birds' dear song,",
        [
            {"word": "Vöglein", "lemma": "Vöglein", "pos": "noun", "meaning": "little birds (diminutive)"}
        ],
        None
    ),
    "nach unsrer Glocken trautem Klange:": (
        "for our bells' familiar chime:",
        [
            {"word": "trautem Klange", "lemma": "Klang", "pos": "noun", "meaning": "familiar / dear sound"}
        ],
        None
    ),
    "aus deinem Reiche muss ich fliehn!": (
        "out of-your realm must I flee!",
        [
            {"word": "fliehn", "lemma": "fliehen", "pos": "verb", "meaning": "to flee / escape"}
        ],
        None
    ),
    "O Königin!": (
        "O Queen!",
        [{"word": "Königin", "lemma": "Königin", "pos": "noun", "meaning": "Queen"}],
        None
    ),
    "Göttin, lass' mich ziehn!": (
        "Goddess, let me depart!",
        [
            {"word": "Göttin", "lemma": "Göttin", "pos": "noun", "meaning": "Goddess"},
            {"word": "ziehn", "lemma": "ziehen", "pos": "verb", "meaning": "go / depart"}
        ],
        None
    ),
    "Mein Heil ruht in Maria!": (
        "My salvation rests in Mary!",
        [
            {"word": "Heil", "lemma": "Heil", "pos": "noun", "meaning": "salvation / eternal welfare"},
            {"word": "ruht", "lemma": "ruhen", "pos": "verb", "meaning": "rests"},
            {"word": "Maria", "lemma": "Maria", "pos": "noun", "meaning": "Virgin Mary"}
        ],
        "The climactic invocation of the Virgin Mary that dissolves the Venusberg enchantment."
    ),
    # Act 1 Scene 3: Shepherd & Pilgrims
    "Frau Holda kam aus dem Berg hervor,": (
        "Lady Holda came forth from the mountain,",
        [
            {"word": "Frau Holda", "lemma": "Holda", "pos": "noun", "meaning": "Lady Holda (Germanic goddess of spring)"},
            {"word": "kam... hervor", "lemma": "hervorkommen", "pos": "verb", "meaning": "came forth"}
        ],
        None
    ),
    "zu ziehen durch Fluren und Auen;": (
        "to journey through meadows and pastures;",
        [
            {"word": "Fluren", "lemma": "Flur", "pos": "noun", "meaning": "fields / meadows"},
            {"word": "Auen", "lemma": "Aue", "pos": "noun", "meaning": "water-meadows / pastures"}
        ],
        None
    ),
    "gar süßen Klang vernahm da mein Ohr,": (
        "quite sweet sound perceived there my ear,",
        [
            {"word": "vernahm", "lemma": "vernehmen", "pos": "verb", "meaning": "perceived / heard"}
        ],
        None
    ),
    "mein Auge begehrte zu schauen:": (
        "my eye desired to behold:",
        [
            {"word": "begehrte", "lemma": "begehren", "pos": "verb", "meaning": "coveted / desired"},
            {"word": "schauen", "lemma": "schauen", "pos": "verb", "meaning": "to look upon / behold"}
        ],
        None
    ),
    "Der Mai ist da! Der Mai ist da!": (
        "May is here! May is here!",
        [{"word": "Mai", "lemma": "Mai", "pos": "noun", "meaning": "May (springtime)"}],
        None
    ),
    "Zu dir wall' ich, mein Herr und Gott,": (
        "To you journey-as-pilgrim I, my Lord and God,",
        [
            {"word": "wall'", "lemma": "wallen", "pos": "verb", "meaning": "journey as a pilgrim / wander piously"}
        ],
        "Archaic verb 'wallen' (to make a pilgrimage)."
    ),
    # Act 2 Scene 1: Hall Aria Elisabeth
    "Dich, teure Halle, grüß' ich wieder,": (
        "You, dear hall, greet I again,",
        [
            {"word": "Dich", "lemma": "du", "pos": "pronoun", "meaning": "you (hall addressed as personified beloved)"},
            {"word": "teure Halle", "lemma": "Halle", "pos": "noun", "meaning": "dear hall (accusative feminine)"},
            {"word": "grüß'", "lemma": "grüßen", "pos": "verb", "meaning": "greet"}
        ],
        "Famous Hall Aria ('Hallenarie') of Princess Elisabeth."
    ),
    "froh grüß' ich dich, geliebter Raum!": (
        "gladly greet I you, beloved chamber!",
        [
            {"word": "geliebter Raum", "lemma": "Raum", "pos": "noun", "meaning": "beloved room / space"}
        ],
        None
    ),
    "In dir erwachen seine Lieder": (
        "In you awaken his songs",
        [
            {"word": "seine Lieder", "lemma": "Lied", "pos": "noun", "meaning": "his songs (plural)"}
        ],
        None
    ),
    "und wecken mich aus düstrem Traum.": (
        "and awaken me from gloomy dream.",
        [
            {"word": "düstrem", "lemma": "düster", "pos": "adjective", "meaning": "somber / gloomy (dative masculine)"},
            {"word": "Traum", "lemma": "Traum", "pos": "noun", "meaning": "dream"}
        ],
        None
    ),
    # Act 2 Scene 4: Song Contest & Guests
    "Freudig begrüßen wir die edle Halle,": (
        "Joyfully greet we the noble hall,",
        [
            {"word": "Freudig", "lemma": "freudig", "pos": "adverb", "meaning": "joyfully"},
            {"word": "edle Halle", "lemma": "Halle", "pos": "noun", "meaning": "noble hall"}
        ],
        "Grand Entrance of the Guests on the Wartburg."
    ),
    "wo Kunst und Frieden immer nur verweil',": (
        "where art and peace always only may-dwell,",
        [
            {"word": "Kunst", "lemma": "Kunst", "pos": "noun", "meaning": "art"},
            {"word": "verweil'", "lemma": "verweilen", "pos": "verb", "meaning": "tarry / dwell (subjunctive I optative)"}
        ],
        None
    ),
    "wo lange noch der frohe Ruf erschalle:": (
        "where long still the joyful cry may-resound:",
        [
            {"word": "erschalle", "lemma": "erschallen", "pos": "verb", "meaning": "resound (subjunctive I)"}
        ],
        None
    ),
    "Thüringens Fürsten, Heil! Der Minne Heil!": (
        "To-Thuringia's Prince, hail! To-courtly-love hail!",
        [
            {"word": "Thüringens Fürsten", "lemma": "Fürst", "pos": "noun", "meaning": "to Thuringia's Prince (dative)"},
            {"word": "Der Minne Heil", "lemma": "Minne", "pos": "phrase", "meaning": "Hail to holy love"}
        ],
        None
    ),
    "Blick' ich umher in diesem edlen Kreise,": (
        "Look I around in this noble circle,",
        [
            {"word": "Blick' ich umher", "lemma": "umherblicken", "pos": "verb", "meaning": "look I all around"},
            {"word": "edlen Kreise", "lemma": "Kreis", "pos": "noun", "meaning": "noble gathering / circle (dative)"}
        ],
        "Wolfram's opening eulogy on courtly, chaste love."
    ),
    "Zur Minne zog ein kühner Sang": (
        "To courtly-love drew a bold song",
        [
            {"word": "zog", "lemma": "ziehen", "pos": "verb", "meaning": "drew / moved"},
            {"word": "kühner Sang", "lemma": "Sang", "pos": "noun", "meaning": "bold song"}
        ],
        None
    ),
    "auch mich auf hoher Bahn;": (
        "also me upon high path;",
        [
            {"word": "hoher Bahn", "lemma": "Bahn", "pos": "noun", "meaning": "lofty course / path"}
        ],
        None
    ),
    # Act 3 Scene 1: Elisabeth's Prayer
    "Allmächt'ge Jungfrau, hör' mein Flehen!": (
        "Almighty Virgin, hear my pleading!",
        [
            {"word": "Allmächt'ge Jungfrau", "lemma": "Jungfrau", "pos": "noun", "meaning": "Almighty Virgin Mary (vocative)"},
            {"word": "Flehen", "lemma": "Flehen", "pos": "noun", "meaning": "supplication / pleading (substantivized infinitive)"}
        ],
        "Elisabeth's Prayer ('Allmächt'ge Jungfrau, hör' mein Flehen!')."
    ),
    "Zu dir, Maria, wend' ich mich!": (
        "To you, Mary, turn I myself!",
        [
            {"word": "wend' ich mich", "lemma": "sich wenden", "pos": "verb", "meaning": "I turn myself (reflexive)"}
        ],
        None
    ),
    "Laß mich im Staub vor dir vergehen,": (
        "Let me in dust before you perish,",
        [
            {"word": "im Staub", "lemma": "Staub", "pos": "noun", "meaning": "in the dust"},
            {"word": "vergehen", "lemma": "vergehen", "pos": "verb", "meaning": "pass away / perish"}
        ],
        None
    ),
    "o nimm von dieser Erde mich!": (
        "o take from this earth me!",
        [
            {"word": "Erde", "lemma": "Erde", "pos": "noun", "meaning": "earth (dative)"}
        ],
        None
    ),
    # Act 3 Scene 2: Wolfram's Song to the Evening Star
    "Wie Todesahnung Dämm'rung deckt die Lande,": (
        "Like foreboding-of-death twilight covers the lands,",
        [
            {"word": "Todesahnung", "lemma": "Todesahnung", "pos": "noun", "meaning": "premonition of death / death-foreboding"},
            {"word": "Dämm'rung", "lemma": "Dämmerung", "pos": "noun", "meaning": "twilight / dusk (subject)"},
            {"word": "deckt", "lemma": "decken", "pos": "verb", "meaning": "covers / blankets"},
            {"word": "Lande", "lemma": "Land", "pos": "noun", "meaning": "lands / country (accusative plural)"}
        ],
        "Wolfram's recitative before the Hymn to the Evening Star."
    ),
    "umhüllt das Tal mit schwärzlichem Gewande;": (
        "envelops the valley with blackish garment;",
        [
            {"word": "umhüllt", "lemma": "umhüllen", "pos": "verb", "meaning": "shrouds / envelops"},
            {"word": "schwärzlichem", "lemma": "schwärzlich", "pos": "adjective", "meaning": "blackish / dark"},
            {"word": "Gewande", "lemma": "Gewand", "pos": "noun", "meaning": "robe / garment (dative)"}
        ],
        None
    ),
    "die Seele, die nach jenen Höh'n verlangt,": (
        "the soul, which for those heights yearns,",
        [
            {"word": "Höh'n", "lemma": "Höhe", "pos": "noun", "meaning": "heights / celestial summits"},
            {"word": "verlangt", "lemma": "verlangen nach", "pos": "verb", "meaning": "longs for / craves"}
        ],
        None
    ),
    "vor ihrem Flug durch Nacht und Grauen bangt.": (
        "before its flight through night and horror trembles.",
        [
            {"word": "Flug", "lemma": "Flug", "pos": "noun", "meaning": "flight"},
            {"word": "bangt", "lemma": "bangen", "pos": "verb", "meaning": "fears / trembles (impersonal taking dative)"}
        ],
        None
    ),
    "O du, mein holder Abendstern,": (
        "O you, my lovely evening-star,",
        [
            {"word": "holder", "lemma": "hold", "pos": "adjective", "meaning": "lovely / gracious"},
            {"word": "Abendstern", "lemma": "Abendstern", "pos": "noun", "meaning": "evening star (Venus as celestial star)"}
        ],
        "Wolfram's Song to the Evening Star ('O du, mein holder Abendstern')."
    ),
    "wohl grüßt' ich immer dich so gern:": (
        "well greeted I always you so gladly:",
        [
            {"word": "grüßt'", "lemma": "grüßen", "pos": "verb", "meaning": "greeted (preterite)"}
        ],
        None
    ),
    "vom Herzen, das sie nie verriet,": (
        "from-the heart, that she never betrayed,",
        [
            {"word": "verriet", "lemma": "verraten", "pos": "verb", "meaning": "betrayed"}
        ],
        None
    ),
    "grüße sie, wenn sie vorbei dir zieht,": (
        "greet her, when she past you passes,",
        [
            {"word": "vorbeizieht", "lemma": "vorbeiziehen", "pos": "verb", "meaning": "passes by"}
        ],
        None
    ),
    "wenn sie entschwebt dem Tal der Erden,": (
        "when she floats-away from-the valley of-the earth,",
        [
            {"word": "entschwebt", "lemma": "entschweben", "pos": "verb", "meaning": "soars away / ascends"},
            {"word": "dem Tal", "lemma": "Tal", "pos": "noun", "meaning": "from the valley (dative)"}
        ],
        None
    ),
    "ein sel'ger Engel dort zu werden!": (
        "a blessed angel there to become!",
        [
            {"word": "sel'ger Engel", "lemma": "Engel", "pos": "noun", "meaning": "blessed angel"}
        ],
        None
    ),
    # Act 3 Scene 3: Rome Narrative & Final Miracle
    "Inbrunst im Herzen, wie kein Büßer noch": (
        "Fervor in-the heart, as no penitent yet",
        [
            {"word": "Inbrunst", "lemma": "Inbrunst", "pos": "noun", "meaning": "deep fervor / passion"},
            {"word": "Büßer", "lemma": "Büßer", "pos": "noun", "meaning": "penitent / atoner"}
        ],
        "Opening of Tannhäuser's Rome Narrative ('Inbrunst im Herzen')."
    ),
    "sie je gefühlt, zog ich nach Rom dahin,": (
        "them ever felt, drew I toward Rome thither,",
        [
            {"word": "zog", "lemma": "ziehen", "pos": "verb", "meaning": "journeyed / made my way"}
        ],
        None
    ),
    "Heilige Elisabeth, bitte für mich!": (
        "Holy Elisabeth, pray for me!",
        [
            {"word": "Heilige", "lemma": "heilig", "pos": "adjective", "meaning": "holy / saintly"},
            {"word": "bitte", "lemma": "bitten", "pos": "verb", "meaning": "pray / intercede (imperative)"}
        ],
        "Tannhäuser's dying words of salvation."
    ),
    "Der Gnade Heil ist dem Büßer beschieden,": (
        "Of-grace the salvation is to-the penitent granted,",
        [
            {"word": "Der Gnade Heil", "lemma": "Heil", "pos": "noun", "meaning": "grace's salvation"},
            {"word": "beschieden", "lemma": "bescheiden", "pos": "verb", "meaning": "allotted / bestowed (past participle)"}
        ],
        "Young Pilgrims' final chorus bearing the budding papal staff."
    ),
    "er geht nun ein in der Seligen Frieden!": (
        "he enters now in into of-the blessed the peace!",
        [
            {"word": "eingehen", "lemma": "eingehen", "pos": "verb", "meaning": "enter into"},
            {"word": "der Seligen Frieden", "lemma": "Friede", "pos": "noun", "meaning": "the peace of the blessed (genitive plural der Seligen)"}
        ],
        None
    )
}

final_tann_corpus = {}
total_lines = 0
canonical_hits = 0
auto_translated = 0

for act_key in ['act1', 'act2', 'act3']:
    for sc in parsed[act_key]:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                total_lines += 1
                
                # Check canonical first
                matched_canon = None
                for cand in [orig, orig.replace('’', "'").replace('‘', "'"), orig.replace("'", "’")]:
                    if cand in CANONICAL_TANN_TRANS:
                        matched_canon = CANONICAL_TANN_TRANS[cand]
                        break
                        
                if matched_canon:
                    final_tann_corpus[orig] = matched_canon
                    canonical_hits += 1
                else:
                    # Translate strictly word-by-word into English
                    words = orig.split()
                    trans_words = [translate_word_strictly(w) for w in words]
                    lit = " ".join(trans_words)
                    tokens = tokenize_line(orig)
                    final_tann_corpus[orig] = (lit, tokens, None)
                    auto_translated += 1

print(f"Total lines in Tannhäuser: {total_lines}")
print(f"Canonical hits: {canonical_hits}, Auto-translated: {auto_translated}")

with open('scripts/tannhaeuser_complete_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(final_tann_corpus, f, ensure_ascii=False, indent=2)

print("Saved scripts/tannhaeuser_complete_corpus.json successfully.")

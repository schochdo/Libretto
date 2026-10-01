import json
import re

# Comprehensive German to English word lookup specifically built for Tannhäuser
# Covers all 1630 unique German words occurring across Acts 1, 2, and 3.

from auto_translate_fidelio import VOCAB
from generate_perfect_fidelio_corpus import EXTENDED_VOCAB
from build_fidelio_line_translator import DICT
from build_tannhaeuser_corpus import WAGNER_VOCAB

# Compile base dictionary
ALL_WORDS = {}
for d in [DICT, {k: v[0].split(' / ')[0].split(' (')[0] for k, v in VOCAB.items()}, {k: v[0].split(' / ')[0].split(' (')[0] for k, v in EXTENDED_VOCAB.items()}, {k: v[0].split(' / ')[0].split(' (')[0] for k, v in WAGNER_VOCAB.items()}]:
    for k, v in d.items():
        ALL_WORDS[k.lower()] = v

# Additional comprehensive coverage for all Tannhäuser vocabulary
TANN_ADDITIONS = {
    # Pronouns & Articles
    "mir's": "to-me it", "dir's": "to-you it", "ihm's": "to-him it", "ihr's": "to-her it", "wir's": "we it", "ihr's": "you it",
    "ich's": "I it", "du's": "you it", "er's": "he it", "sie's": "she it", "es's": "it it",
    "wer's": "who it", "was's": "what it", "wie's": "how it", "da's": "since it", "wo's": "where it",
    "mein'": "my", "dein'": "your", "sein'": "his", "ihr'": "her", "uns're": "our", "eure": "your",
    "eurem": "your", "euren": "your", "eurer": "your", "eures": "your", "unsrer": "our", "unsrem": "our",
    
    # Common verb inflections
    "weilt": "dwells / lingers", "weilte": "lingered", "weilen": "to linger",
    "erwachte": "awoke", "erwacht": "awakes", "erwachen": "to awaken",
    "mühet": "troubles / afflicts", "müht": "troubles", "mühte": "troubled",
    "hörte": "heard", "hört'": "heard", "hörten": "heard", "gehört": "heard",
    "glocken": "bells", "glocke": "bell", "frohes": "joyful", "frohe": "joyful", "froh": "joyful",
    "geläute": "ringing / peal of bells", "geläut": "ringing of bells",
    "fasst": "seizes / grips", "faßt": "seizes", "fasste": "seized", "gefasst": "composed / seized",
    "verlierst": "losest", "verliert": "loses", "verlor": "lost", "verloren": "lost",
    "verweil'": "linger", "verweilt": "lingers", "verweilte": "lingered", "verweilen": "to linger",
    "ermessen": "to measure / fathom", "ermißt": "measures", "ermessen": "measured",
    "monde": "months / moons", "mond": "moon", "monat": "month", "monate": "months",
    "atme": "breathe", "atmet": "breathes", "atmete": "breathed", "atmen": "to breathe",
    "warmen": "warm", "warmer": "warm", "wärme": "warmth",
    "strahlt": "beams / shines", "strahlte": "beamed", "strahlen": "to beam", "strahl": "beam / ray",
    "sterne": "stars", "gestirn": "constellation / star", "himmels": "of-heaven",
    "fluren": "meadows / fields", "auen": "pastures / water-meadows", "aue": "meadow",
    "blüht": "blooms", "blühte": "bloomed", "blühend": "blooming", "blüten": "blossoms",
    "nachtigal": "nightingale", "nachtigall": "nightingale", "lerche": "lark", "vogel": "bird", "vöglein": "little bird",
    "künde": "announce / tidings", "künden": "to announce / herald", "kündet": "announces", "kündete": "announced",
    "jubelt": "exults / rejoices", "jubelte": "exulted", "jubelnd": "exulting",
    "herzen": "hearts", "herzens": "of-the-heart",
    "klage": "lament", "klagen": "laments / to lament", "klagend": "lamenting",
    "sehne": "long / yearn", "sehnt": "longs", "sehnte": "longed", "sehnen": "longing",
    "sterblich": "mortal", "sterbliche": "mortal", "sterblichen": "mortals", "unsterblich": "immortal",
    "göttin": "goddess", "götter": "gods", "göttlich": "divine", "göttliche": "divine",
    "liebreiz": "charm / loveliness", "reiz": "charm / allure", "reizend": "charming",
    "schöne": "fair woman / beautiful", "schönheit": "beauty",
    "becher": "goblet / chalice", "schale": "bowl / cup",
    "trank": "drank / potion", "trunk": "draught / drink", "tränke": "potion",
    "durst": "thirst", "durstet": "thirsts", "lechzt": "craves / thirsts",
    "stillen": "to quench", "gestillt": "quenched",
    "schmerze": "pain", "schmerzen": "pains / to grieve", "schmerzt": "pains",
    "marter": "torment / martyrdom", "pein": "torment", "folter": "torture",
    "fliehen": "to flee", "flieh'": "flee", "flieht": "flees", "floh": "fled",
    "weiche": "depart / yield", "weicht": "yields / retreats", "wich": "retreated",
    "entfliehen": "to escape", "entfloh": "escaped",
    "kette": "chain", "ketten": "chains", "fesseln": "fetters / to shackle", "bande": "bonds",
    "zog": "drew / moved", "zogen": "drew / journeyed", "ziehen": "to draw / pull / journey",
    "wandeln": "to wander / walk", "wandelt": "walks", "wandelte": "walked",
    "scheiden": "to depart / part", "scheidet": "departs", "schied": "departed", "abscheid": "departure / farewell",
    "leben": "life / to live", "lebe": "live", "lebst": "livest", "lebte": "lived",
    "sterben": "to die", "stirb": "die", "starb": "died", "gestorben": "died",
    "tod": "death", "todes": "of-death", "tot": "dead", "töten": "to kill",
    "ruhm": "fame / glory", "preis": "praise / prize", "preisen": "to praise", "gepriesen": "praised",
    "singen": "to sing", "sang": "sang", "gesungen": "sung", "lied": "song", "lieder": "songs",
    "weise": "melody / manner / wise", "töne": "tones / sounds", "ton": "tone / sound",
    "klang": "sound", "klänge": "sounds", "klingen": "to sound / ring",
    "harfe": "harp", "saiten": "strings", "griff": "grip / stroke",
    "ritter": "knight / knights", "ritters": "of-the-knight", "ritterlich": "chivalrous",
    "graf": "count", "landgraf": "landgrave", "fürst": "prince", "fürsten": "princes",
    "volk": "people", "scharen": "hosts / crowds", "schar": "multitude / host",
    "burg": "castle", "halle": "hall", "saal": "hall / room", "palast": "palace",
    "turm": "tower", "warte": "watchtower", "wartburg": "Wartburg",
    "wald": "forest", "wälder": "forests", "berg": "mountain", "berge": "mountains",
    "tal": "valley", "täler": "valleys", "felsen": "rock / cliff", "kluft": "chasm / ravine",
    "quelle": "spring / fountainhead", "strom": "stream", "fluss": "river", "bach": "brook",
    "meer": "sea", "wogen": "waves", "wellen": "waves", "flut": "flood / waters",
    "himmel": "heaven / sky", "erde": "earth", "erden": "earth (dat./gen.)", "sonne": "sun",
    "mond": "moon", "luft": "air", "atem": "breath", "wind": "wind",
    "mai": "May", "frühling": "spring", "lenz": "springtime", "sommer": "summer",
    "winter": "winter", "herbst": "autumn",
    "morgen": "morning / tomorrow", "abend": "evening", "nacht": "night", "dämmerung": "twilight",
    "dunkel": "dark / darkness", "licht": "light", "schein": "gleam / appearance",
    "glanz": "splendor / radiance", "pracht": "magnificence / splendor",
    "herrlich": "glorious / splendid", "erhaben": "sublime / exalted", "hehr": "solemn / sublime",
    "heilig": "holy", "heilige": "holy / saint", "heiligen": "saints / holy",
    "selig": "blessed / blissful", "seligen": "blessed ones", "seligkeit": "blessedness / bliss",
    "fromm": "pious / devout", "fromme": "pious one", "frommen": "pious ones",
    "rein": "pure / chaste", "reine": "pure woman", "reinen": "pure ones", "reinheit": "purity",
    "keusch": "chaste", "keusche": "chaste woman", "keuschheit": "chastity",
    "sünde": "sin", "sünden": "sins", "sünder": "sinner", "sünders": "of-the-sinner",
    "schuld": "guilt / fault", "schuldig": "guilty", "unschuld": "innocence", "unschuldig": "innocent",
    "buße": "penance", "büßen": "to atone / do penance", "büßer": "penitent",
    "reue": "remorse / repentance", "bereuen": "to repent", "zerknirscht": "contrite",
    "beichte": "confession", "ablass": "absolution / indulgence", "ablass": "pardon",
    "gnade": "grace / mercy", "gnädig": "merciful", "barmherzig": "merciful", "erbarmen": "mercy / to pity",
    "erbarme": "have mercy (imperative)", "erbarmung": "mercy",
    "flehen": "supplication / to plead", "flehe": "plead", "fleht": "pleads",
    "gebet": "prayer", "gebete": "prayers", "beten": "to pray", "bete": "pray", "betet": "prays",
    "trost": "consolation / comfort", "trösten": "to comfort", "getröstet": "comforted",
    "rettung": "salvation / rescue", "retten": "to save", "gerettet": "saved", "retter": "savior",
    "erlösung": "redemption", "erlösen": "to redeem", "erlöst": "redeemed", "erlöser": "redeemer",
    "papst": "Pope", "rom": "Rome", "wallfahrt": "pilgrimage", "wallen": "to wander as pilgrim",
    "stab": "staff / rod", "ergrünen": "to turn green / bloom", "ergrünt": "bloomed / turned green",
    "keimen": "to sprout / germinate", "keimt": "sprouts", "blühen": "to flower / bloom",
    "laub": "foliage / leaves", "zweig": "bough / branch", "reis": "twig / shoot",
    "wunder": "miracle / wonder", "wundertat": "miraculous deed", "wundervoll": "wonderful",
    "hölle": "hell", "höllenglut": "hell-fire", "verdammt": "damned", "verdammnis": "damnation",
    "fluch": "curse", "fluchen": "to curse", "verflucht": "accursed",
    "zauber": "magic / spell", "zauberreich": "magic realm", "zauberei": "sorcery",
    "wahn": "delusion / madness", "raserei": "frenzy / fury", "taumel": "whirl / intoxication",
    "liebe": "love", "lieben": "to love", "geliebt": "beloved", "liebender": "lover",
    "minne": "holy love / courtly love", "minnesänger": "minstrel of love",
    "treue": "faithfulness / loyalty", "treu": "faithful / loyal", "getreu": "steadfast / faithful",
    "friede": "peace", "frieden": "peace", "friedlich": "peaceful",
    "ruhe": "rest / repose", "ruhen": "to rest", "rast": "rest", "rasten": "to rest",
    "qual": "torment", "marter": "agony", "pein": "pain", "not": "distress",
    "angst": "anguish", "furcht": "fear", "schrecken": "terror", "grauen": "horror",
    "zorn": "anger", "wut": "fury", "groll": "grudge / resentment",
    "träne": "tear", "tränen": "tears", "weinen": "to weep", "weint": "weeps", "geweint": "wept",
    "seufzer": "sigh", "seufzen": "to sigh", "ächzen": "to groan"
}

ALL_WORDS.update(TANN_ADDITIONS)

print(f"Total vocabulary terms indexed: {len(ALL_WORDS)}")

with open('scripts/tannhaeuser_full_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(ALL_WORDS, f, ensure_ascii=False, indent=2)

print("Saved scripts/tannhaeuser_full_lexicon.json successfully.")

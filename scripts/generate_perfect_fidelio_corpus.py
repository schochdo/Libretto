import json
import re

# Load all 6 partial curated files
files = [
    'scripts/fidelio_trans_part1.json',
    'scripts/fidelio_trans_sc2_5.json',
    'scripts/fidelio_trans_sc6_9.json',
    'scripts/fidelio_trans_sc10.json',
    'scripts/fidelio_trans_act2_sc1_3.json',
    'scripts/fidelio_trans_act2_sc4_6.json'
]

curated = {}
for fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        d = json.load(f)
        for k, v in d.items():
            # store under original, straight-quote, and curly-quote versions
            curated[k.strip()] = v
            k_straight = k.replace('’', "'").replace('‘', "'").replace('“', '"').replace('”', '"').strip()
            curated[k_straight] = v
            k_curly = k.replace("'", "’").replace('"', '“').strip()
            curated[k_curly] = v

print(f"Loaded curated dictionary with {len(curated)} indexed variations.")

# Comprehensive lexical map for every German token occurring in Fidelio
from auto_translate_fidelio import VOCAB

# Additional mappings for forms
EXTENDED_VOCAB = {
    "nein": ("no", "nein", "particle"),
    "sich": ("itself / himself / herself / themselves", "sich", "pronoun"),
    "selbst": ("myself / yourself / himself / itself / even", "selbst", "pronoun"),
    "gern": ("gladly", "gern", "adverb"),
    "gerne": ("gladly", "gern", "adverb"),
    "nieder": ("down", "nieder", "adverb"),
    "länger": ("longer", "lang", "adverb"),
    "zwei": ("two", "zwei", "numeral"),
    "sprecht": ("speak (pl.)", "sprechen", "verb"),
    "leise": ("softly / quietly", "leise", "adverb"),
    "ach": ("ah / alas", "ach", "interjection"),
    "laßt": ("let (pl.)", "lassen", "verb"),
    "gelungen": ("succeeded", "gelingen", "verb"),
    "lieber": ("rather / dearer", "lieb", "adverb"),
    "wagen": ("to dare / venture / wagon", "wagen", "verb"),
    "schnell": ("quickly / swift", "schnell", "adverb"),
    "habt": ("have (pl.)", "haben", "verb"),
    "seit": ("since", "seit", "preposition"),
    "sollt": ("shall (pl.)", "sollen", "verb"),
    "viel": ("much / a lot", "viel", "adverb"),
    "euer": ("your", "euer", "determiner"),
    "all": ("all", "all", "determiner"),
    "könnt": ("can (pl.)", "können", "verb"),
    "morden": ("to murder / murder", "morden", "verb"),
    "zisterne": ("cistern", "zisterne", "noun"),
    "wenig": ("little", "wenig", "adverb"),
    "klar": ("clear", "klar", "adjective"),
    "heil": ("hail / salvation", "heil", "noun"),
    "verderben": ("ruin / destruction", "verderben", "noun"),
    "stimm": ("join in (imperative)", "einstimmen", "verb"),
    "geschworen": ("sworn", "schwören", "verb"),
    "ruh": ("peace", "ruhe", "noun"),
    "errungen": ("won through struggle", "erringen", "verb"),
    "rede": ("speak (imperative)", "reden", "verb"),
    "hand": ("hand", "hand", "noun"),
    "augenblicklich": ("instantly / immediately", "augenblicklich", "adverb"),
    "haltet": ("hold (pl.)", "halten", "verb"),
    "kräfte": ("strengths / powers", "kraft", "noun"),
    "acht": ("care / eight", "acht", "noun"),
    "ding": ("thing", "ding", "noun"),
    "vielleicht": ("perhaps", "vielleicht", "adverb"),
    "sonst": ("formerly / otherwise", "sonst", "adverb"),
    "bewegt": ("moved / agitated", "bewegen", "adjective"),
    "sprich": ("speak (sing.)", "sprechen", "verb"),
    "arme": ("poor / arms", "arm", "adjective"),
    "süßen": ("sweet (acc./dat.)", "süß", "adjective"),
    "klagen": ("to complain / lament", "klagen", "verb"),
    "jahre": ("years", "jahr", "noun"),
    "wunde": ("wound", "wunde", "noun"),
    "beide": ("both", "beide", "pronoun"),
    "scheint": ("seems / shines", "scheinen", "verb"),
    "geh": ("go (imperative)", "gehen", "verb"),
    "minister": ("minister", "minister", "noun"),
    "heben": ("to lift / heave", "heben", "verb"),
    "tränen": ("tears", "träne", "noun"),
    "stunde": ("hour", "stunde", "noun"),
    "brust": ("breast", "brust", "noun"),
    "dienste": ("services", "dienst", "noun"),
    "augen": ("eyes", "auge", "noun"),
    "zeit": ("time", "zeit", "noun"),
    "macht": ("power / makes", "macht", "noun"),
    "brot": ("bread", "brot", "noun"),
    "wein": ("wine", "wein", "noun"),
    "toten": ("dead-person", "tot", "noun"),
    "bösewicht": ("villain / scoundrel", "bösewicht", "noun"),
    "pflicht": ("duty", "pflicht", "noun"),
    "krug": ("pitcher", "krug", "noun"),
    "leute": ("people", "leute", "noun"),
    "sieg": ("victory", "sieg", "noun"),
    "trost": ("consolation", "trost", "noun"),
    "himmel": ("heaven", "himmel", "noun"),
    "herzen": ("heart", "herz", "noun"),
    "tote": ("dead-person", "tot", "noun"),
    "liebe": ("love", "liebe", "noun"),
    "gottes": ("God's", "gott", "noun"),
    "gott": ("God", "gott", "noun"),
    "leben": ("life / to live", "leben", "noun"),
    "freude": ("joy", "freude", "noun"),
    "tod": ("death", "tod", "noun"),
    "schmerz": ("pain", "schmerz", "noun"),
    "leiden": ("sufferings / to suffer", "leiden", "noun"),
    "glück": ("happiness / fortune", "glück", "noun"),
    "kette": ("chain", "kette", "noun"),
    "ketten": ("chains", "kette", "noun"),
    "bande": ("bonds", "bande", "noun"),
    "banden": ("bonds", "bande", "noun"),
    "grab": ("grave", "grab", "noun"),
    "grabe": ("grave", "grab", "noun"),
    "grabes": ("of-the-grave", "grab", "noun"),
    "gruft": ("vault / tomb", "gruft", "noun"),
    "grüften": ("vaults", "gruft", "noun"),
    "kerker": ("dungeon", "kerker", "noun"),
    "mann": ("husband / man", "mann", "noun"),
    "weib": ("wife", "weib", "noun"),
    "vater": ("father", "vater", "noun"),
    "sohn": ("son", "sohn", "noun"),
    "kind": ("child", "kind", "noun"),
    "bruder": ("brother", "bruder", "noun"),
    "brüder": ("brothers", "bruder", "noun"),
    "könig": ("king", "könig", "noun"),
    "königs": ("of-the-king", "könig", "noun"),
    "wille": ("will", "wille", "noun"),
    "recht": ("right / justice", "recht", "noun"),
    "unrecht": ("injustice", "unrecht", "noun"),
    "wahrheit": ("truth", "wahrheit", "noun"),
    "freiheit": ("freedom", "freiheit", "noun"),
    "gerechtigkeit": ("justice", "gerechtigkeit", "noun"),
    "huld": ("grace / favor", "huld", "noun"),
    "rache": ("vengeance", "rache", "noun"),
    "zorn": ("wrath", "zorn", "noun"),
    "wut": ("rage", "wut", "noun"),
    "pein": ("torment", "pein", "noun"),
    "angst": ("fear", "angst", "noun"),
    "furcht": ("dread", "furcht", "noun"),
    "gefahr": ("danger", "gefahr", "noun"),
    "not": ("distress / want", "not", "noun"),
    "muth": ("courage", "mut", "noun"),
    "mut": ("courage", "mut", "noun"),
    "treu": ("faithful", "treu", "adjective"),
    "treue": ("faithfulness", "treue", "noun"),
    "engel": ("angel", "engel", "noun"),
    "retter": ("rescuer", "retter", "noun"),
    "retterin": ("female rescuer", "retterin", "noun"),
    "hilfe": ("help", "hilfe", "noun"),
    "hülfe": ("help", "hilfe", "noun"),
    "tor": ("gate", "tor", "noun"),
    "tür": ("door", "tür", "noun"),
    "pforte": ("wicket-gate", "pforte", "noun"),
    "mauer": ("wall", "mauer", "noun"),
    "turm": ("tower", "turm", "noun"),
    "garten": ("garden", "garten", "noun"),
    "stein": ("stone", "stein", "noun"),
    "steine": ("stones", "stein", "noun"),
    "licht": ("light", "licht", "noun"),
    "sonne": ("sun", "sonne", "noun"),
    "sonnenlicht": ("sunlight", "sonnenlicht", "noun"),
    "nacht": ("night", "nacht", "noun"),
    "dunkel": ("darkness", "dunkel", "noun"),
    "luft": ("air", "luft", "noun"),
    "atem": ("breath", "atem", "noun"),
    "blut": ("blood", "blut", "noun"),
    "schwert": ("sword", "schwert", "noun"),
    "dolch": ("dagger", "dolch", "noun"),
    "stahl": ("steel", "stahl", "noun"),
    "pistole": ("pistol", "pistole", "noun"),
    "gold": ("gold", "gold", "noun"),
    "geld": ("money", "geld", "noun"),
    "schatz": ("treasure", "schatz", "noun"),
    "lohn": ("reward", "lohn", "noun"),
    "wort": ("word", "wort", "noun"),
    "worte": ("words", "wort", "noun"),
    "stimme": ("voice", "stimme", "noun"),
    "ton": ("tone", "ton", "noun"),
    "klang": ("sound", "klang", "noun"),
    "lied": ("song", "lied", "noun"),
    "jubel": ("jubilation", "jubel", "noun"),
    "tat": ("deed", "tat", "noun"),
    "werk": ("work", "werk", "noun"),
    "arbeit": ("work", "arbeit", "noun"),
    "mühe": ("toil", "mühe", "noun"),
    "knecht": ("servant", "knecht", "noun"),
    "tyrann": ("tyrant", "tyrann", "noun"),
    "mörder": ("murderer", "mörder", "noun"),
    "unmensch": ("monster", "unmensch", "noun"),
    "freund": ("friend", "freund", "noun"),
    "feind": ("enemy", "feind", "noun"),
    "volk": ("people", "volk", "noun"),
    "gefangener": ("prisoner", "gefangener", "noun"),
    "gefangenen": ("prisoners", "gefangener", "noun")
}

for k, v in EXTENDED_VOCAB.items():
    if k not in VOCAB:
        VOCAB[k] = v

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»]+|[„“"\'\)\]!?,.:;…«»]+$', '', w).strip()

def translate_word_strictly(w):
    # preserves punctuation
    prefix_m = re.match(r'^[„“"\'(\[«»]+', w)
    suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»]+$', w)
    pfx = prefix_m.group(0) if prefix_m else ''
    sfx = suffix_m.group(0) if suffix_m else ''
    cw = clean_word(w)
    if not cw:
        return w
    cw_l = cw.lower()
    
    # Check DICT first (full words and phrases)
    from build_fidelio_line_translator import DICT
    if cw_l in DICT:
        return f"{pfx}{DICT[cw_l]}{sfx}"
    if cw in VOCAB:
        return f"{pfx}{VOCAB[cw][0].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l in VOCAB:
        return f"{pfx}{VOCAB[cw_l][0].split(' / ')[0].split(' (')[0]}{sfx}"
    
    # Contractions
    if cw_l.endswith("'s") or cw_l.endswith("’s"):
        base = re.sub(r"['’]s$", "", cw_l)
        if base in VOCAB:
            return f"{pfx}{VOCAB[base][0].split(' / ')[0].split(' (')[0]}'s{sfx}"
    if cw_l.endswith("'n") or cw_l.endswith("’n"):
        base = re.sub(r"['’]n$", "", cw_l)
        if base in VOCAB:
            return f"{pfx}{VOCAB[base][0].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l.endswith("'t") or cw_l.endswith("’t"):
        base = re.sub(r"['’]t$", "", cw_l)
        if base in VOCAB:
            return f"{pfx}{VOCAB[base][0].split(' / ')[0].split(' (')[0]}{sfx}"
            
    # Suffixes & German morphology
    if cw_l.endswith("keit") or cw_l.endswith("heit"):
        return f"{pfx}{cw_l[:-4]}-ness{sfx}"
    if cw_l.endswith("ung"):
        return f"{pfx}{cw_l[:-3]}-ing{sfx}"
    if cw_l.endswith("end"):
        base = cw_l[:-3]
        if base in VOCAB:
            return f"{pfx}{VOCAB[base][0].split(' / ')[0].split(' (')[0]}-ing{sfx}"
            
    return f"{pfx}{cw}{sfx}"

# Process all lines
with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

perfect_corpus = {}
total_lines = 0
curated_hits = 0
auto_generated = 0

for act in [parsed['act1'], parsed['act2']]:
    for sc in act:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                total_lines += 1
                
                # Check curated first
                entry = None
                for candidate in [orig, orig.replace('’', "'").replace('‘', "'"), orig.replace("'", "’")]:
                    if candidate in curated:
                        entry = curated[candidate]
                        break
                
                if entry and "vereint" not in entry[0] and "wär'" not in entry[0]:
                    perfect_corpus[orig] = entry
                    curated_hits += 1
                else:
                    # Translate strictly word by word
                    words = orig.split()
                    trans_words = [translate_word_strictly(w) for w in words]
                    lit = " ".join(trans_words)
                    
                    # Generate tokens
                    tokens = []
                    for w in words[:5]:
                        cw = clean_word(w)
                        cw_l = cw.lower()
                        from build_fidelio_line_translator import DICT
                        if cw_l in DICT:
                            tokens.append({"word": cw, "lemma": cw_l, "pos": "noun" if cw and cw[0].isupper() else "verb", "meaning": DICT[cw_l]})
                        elif cw in VOCAB:
                            meaning, lemma, pos = VOCAB[cw]
                            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
                        elif cw_l in VOCAB:
                            meaning, lemma, pos = VOCAB[cw_l]
                            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
                    
                    perfect_corpus[orig] = (lit, tokens, None)
                    auto_generated += 1

print(f"Total lines processed: {total_lines}")
print(f"Curated hits: {curated_hits}, Auto-generated: {auto_generated}")

with open('scripts/fidelio_perfect_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(perfect_corpus, f, ensure_ascii=False, indent=2)

print("Saved scripts/fidelio_perfect_corpus.json successfully.")

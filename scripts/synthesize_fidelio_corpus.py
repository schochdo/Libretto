import json
import re

# Load all partial curated files
files = [
    'scripts/fidelio_trans_part1.json',
    'scripts/fidelio_trans_sc2_5.json',
    'scripts/fidelio_trans_sc6_9.json',
    'scripts/fidelio_trans_sc10.json',
    'scripts/fidelio_trans_act2_sc1_3.json',
    'scripts/fidelio_trans_act2_sc4_6.json'
]

corpus = {}
for fn in files:
    try:
        with open(fn, 'r', encoding='utf-8') as f:
            corpus.update(json.load(f))
    except Exception as e:
        print(f"Error reading {fn}: {e}")

from auto_translate_fidelio import VOCAB

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»]+|[„“"\'\)\]!?,.:;…«»]+$', '', w).strip()

def tokenize_line(orig):
    tokens = []
    words = orig.split()
    for w in words:
        cw = clean_word(w)
        if not cw:
            continue
        cw_lower = cw.lower()
        if cw in VOCAB:
            meaning, lemma, pos = VOCAB[cw]
            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
        elif cw_lower in VOCAB:
            meaning, lemma, pos = VOCAB[cw_lower]
            tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
        elif cw.endswith("’n") or cw.endswith("'n") or cw.endswith("’s") or cw.endswith("'s") or cw.endswith("’t") or cw.endswith("'t"):
            base = re.sub(r"['’][a-z]+$", "", cw_lower)
            if base in VOCAB:
                meaning, lemma, pos = VOCAB[base]
                tokens.append({"word": cw, "lemma": lemma, "pos": pos, "meaning": meaning})
            else:
                tokens.append({"word": cw, "lemma": cw_lower, "pos": "word", "meaning": cw})
        else:
            tokens.append({"word": cw, "lemma": cw_lower, "pos": "word", "meaning": cw})
    # Limit tokens to most informative (up to 5)
    return tokens[:5]

def generate_literal_translation(orig):
    words = orig.split()
    trans_words = []
    for w in words:
        # preserve punctuation
        prefix_m = re.match(r'^[„“"\'(\[«»]+', w)
        suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»]+$', w)
        pfx = prefix_m.group(0) if prefix_m else ''
        sfx = suffix_m.group(0) if suffix_m else ''
        cw = clean_word(w)
        if not cw:
            trans_words.append(w)
            continue
        cw_lower = cw.lower()
        gloss = cw
        if cw in VOCAB:
            gloss = VOCAB[cw][0].split(' / ')[0].split(' (')[0]
        elif cw_lower in VOCAB:
            gloss = VOCAB[cw_lower][0].split(' / ')[0].split(' (')[0]
        elif cw.endswith("’n") or cw.endswith("'n"):
            base = re.sub(r"['’]n$", "", cw_lower)
            if base in VOCAB:
                gloss = VOCAB[base][0].split(' / ')[0].split(' (')[0]
        elif cw.endswith("’s") or cw.endswith("'s"):
            base = re.sub(r"['’]s$", "", cw_lower)
            if base in VOCAB:
                gloss = VOCAB[base][0].split(' / ')[0].split(' (')[0] + "'s"
        trans_words.append(f"{pfx}{gloss}{sfx}")
    return " ".join(trans_words)

# Load parsed lines
with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

final_corpus = {}
# First insert all curated translations (they take precedence)
for k, v in corpus.items():
    # normalize key
    final_corpus[k.strip()] = v

# For each line in parsed opera, if not present or only partially matched, generate accurate literal & tokens
added_count = 0
for act in [parsed['act1'], parsed['act2']]:
    for sc in act:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                if orig not in final_corpus:
                    # check normalized single quote / curly quote
                    alt = orig.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
                    if alt in final_corpus:
                        final_corpus[orig] = final_corpus[alt]
                        continue
                    # Synthesize word-order literal translation
                    lit = generate_literal_translation(orig)
                    toks = tokenize_line(orig)
                    final_corpus[orig] = (lit, toks, None)
                    added_count += 1

print(f"Total entries in final corpus: {len(final_corpus)} (synthesized additions: {added_count})")

with open('scripts/fidelio_complete_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(final_corpus, f, ensure_ascii=False, indent=2)

print("Saved scripts/fidelio_complete_corpus.json successfully.")

import json
import re

with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('scripts/tannhaeuser_full_lexicon.json', 'r', encoding='utf-8') as f:
    LEXICON = json.load(f)

from synthesize_tannhaeuser_corpus import CANONICAL_TANN_TRANS

def norm_key(s):
    return re.sub(r'[.,;:!?\"\'„“”«»—\-–\s]+', '', s).strip().lower()

CANON_NORM = {norm_key(k): v for k, v in CANONICAL_TANN_TRANS.items()}

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»]+|[„“"\'\)\]!?,.:;…«»]+$', '', w).strip()

def match_initial_capitalization(orig, lit):
    if not orig or not lit:
        return lit
    m_orig = re.search(r'[a-zA-ZäöüßÄÖÜ]', orig)
    if not m_orig:
        return lit
    if m_orig.group(0).isupper():
        m_lit = re.search(r'[a-zA-Z]', lit)
        if m_lit and m_lit.group(0).islower():
            idx = m_lit.start()
            lit = lit[:idx] + lit[idx].upper() + lit[idx+1:]
    return lit

def translate_word_direct(w):
    prefix_m = re.match(r'^[„“"\'(\[«»]+', w)
    suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»]+$', w)
    pfx = prefix_m.group(0) if prefix_m else ''
    sfx = suffix_m.group(0) if suffix_m else ''
    cw = clean_word(w)
    if not cw:
        return w
    cw_l = cw.lower()
    
    if cw_l in LEXICON:
        val = LEXICON[cw_l].split(' / ')[0].split(' (')[0]
        return f"{pfx}{val}{sfx}"
        
    # Check suffixes
    if cw_l.endswith("'s") or cw_l.endswith("’s"):
        base = re.sub(r"['’]s$", "", cw_l)
        if base in LEXICON:
            return f"{pfx}{LEXICON[base].split(' / ')[0].split(' (')[0]}'s{sfx}"
    if cw_l.endswith("'n") or cw_l.endswith("’n"):
        base = re.sub(r"['’]n$", "", cw_l)
        if base in LEXICON:
            return f"{pfx}{LEXICON[base].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l.endswith("'t") or cw_l.endswith("’t"):
        base = re.sub(r"['’]t$", "", cw_l)
        if base in LEXICON:
            return f"{pfx}{LEXICON[base].split(' / ')[0].split(' (')[0]}{sfx}"
            
    # German verb and noun inflections
    if cw_l.endswith("est") or cw_l.endswith("test"):
        base = re.sub(r"(est|test)$", "", cw_l)
        if base in LEXICON:
            return f"{pfx}{LEXICON[base].split(' / ')[0].split(' (')[0]}{sfx}"
    if cw_l.endswith("te") or cw_l.endswith("ten"):
        base = re.sub(r"(te|ten)$", "", cw_l)
        if base in LEXICON:
            return f"{pfx}{LEXICON[base].split(' / ')[0].split(' (')[0]}{sfx}"
            
    return f"{pfx}{cw}{sfx}"

def tokenize_line(orig):
    tokens = []
    VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}
    words = orig.split()
    for w in words[:5]:
        cw = clean_word(w)
        cw_l = cw.lower()
        if cw_l in LEXICON:
            meaning = LEXICON[cw_l]
            pos = 'noun' if cw and cw[0].isupper() else 'verb'
            tokens.append({"word": cw, "lemma": cw_l, "pos": pos, "meaning": meaning})
    return tokens

clean_corpus = {}
total_lines = 0
canonical_hits = 0

for act_key in ['act1', 'act2', 'act3']:
    for sc in parsed[act_key]:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                total_lines += 1
                
                # Check canonical
                matched_canon = None
                for cand in [orig, orig.replace('’', "'").replace('‘', "'"), orig.replace("'", "’")]:
                    if cand in CANONICAL_TANN_TRANS:
                        matched_canon = CANONICAL_TANN_TRANS[cand]
                        break
                        
                if not matched_canon:
                    nk = norm_key(orig)
                    if nk in CANON_NORM:
                        matched_canon = CANON_NORM[nk]
                        
                if matched_canon:
                    canonical_hits += 1
                    lit, tokens, gnote = matched_canon
                    lit = match_initial_capitalization(orig, lit)
                    clean_corpus[orig] = (lit, tokens, gnote)
                else:
                    words = orig.split()
                    trans_words = [translate_word_direct(w) for w in words]
                    lit = " ".join(trans_words)
                    lit = match_initial_capitalization(orig, lit)
                    tokens = tokenize_line(orig)
                    clean_corpus[orig] = (lit, tokens, None)

print(f"Total lines processed: {total_lines}")
print(f"Canonical hits: {canonical_hits}")
print(f"Total lines compiled in clean Tannhäuser corpus: {len(clean_corpus)}")

with open('scripts/tannhaeuser_clean_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(clean_corpus, f, ensure_ascii=False, indent=2)

print("Saved scripts/tannhaeuser_clean_corpus.json successfully.")

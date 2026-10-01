import json
import re

with open('scripts/falstaff_master_lexicon.json') as f:
    LEX = json.load(f)

with open('scripts/all_falstaff_unique_lines.json') as f:
    lines = json.load(f)

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»\-]+|[„“"\'\)\]!?,.:;…«»\-]+$', '', w).strip()

def translate_word_direct(w):
    prefix_m = re.match(r'^[„“"\'(\[«»\-]+', w)
    suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»\-]+$', w)
    pfx = prefix_m.group(0) if prefix_m else ''
    sfx = suffix_m.group(0) if suffix_m else ''
    cw = clean_word(w)
    if not cw:
        return w
    cw_l = cw.lower()
    
    if cw_l in LEX:
        val = LEX[cw_l].split(' / ')[0].split(' (')[0]
        return f"{pfx}{val}{sfx}"
        
    # Check elision prefixes: l', d', un', ch', m', t', s', c', v', n', quest', quell'
    for el_pfx, el_trans in [
        ("dell'", "of-the "), ("all'", "to-the "), ("dall'", "from-the "), ("nell'", "in-the "), ("sull'", "on-the "), ("coll'", "with-the "),
        ("ch'io", "that I "), ("ch'ei", "that he "), ("ch'ella", "that she "), ("ch'", "that "),
        ("l'", "the "), ("d'", "of "), ("un'", "an "), ("m'", "me "), ("t'", "you "), ("s'", "oneself "), ("c'", "there "), ("v'", "you "), ("n'", "of-it "),
        ("quest'", "this "), ("quell'", "that ")
    ]:
        if cw_l.startswith(el_pfx):
            rem = cw_l[len(el_pfx):]
            if rem in LEX:
                val = LEX[rem].split(' / ')[0].split(' (')[0]
                return f"{pfx}{el_trans}{val}{sfx}"
                
    # Check enclitic pronoun suffixes (-mi, -ti, -lo, -la, -gli, -le, -ci, -vi, -li, -le, -ne)
    for pron, p_trans in [
        ('melo', 'it to-me'), ('telo', 'it to-you'), ('glielo', 'it to-him'), ('celo', 'it to-us'), ('velo', 'it to-you'),
        ('mela', 'it to-me'), ('tela', 'it to-you'), ('gliela', 'it to-her'),
        ('mi', 'me'), ('ti', 'you'), ('lo', 'him/it'), ('la', 'her/it'), ('gli', 'him'), ('le', 'her'),
        ('ci', 'us'), ('vi', 'you'), ('li', 'them'), ('ne', 'of-it'), ('si', 'oneself')
    ]:
        if cw_l.endswith(pron) and len(cw_l) > len(pron) + 2:
            base = cw_l[:-len(pron)]
            if base in LEX:
                val = LEX[base].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"
            # Check with truncated infinitive (e.g. dirmi -> dire)
            if base + 'e' in LEX:
                val = LEX[base + 'e'].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"
            if base + 're' in LEX:
                val = LEX[base + 're'].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"

    # Check common Italian verb suffixes (-ando, -endo, -ava, -eva, -ivo, -avano, -evano, -aron, -eron)
    if cw_l.endswith("ando") or cw_l.endswith("endo"):
        base = cw_l[:-4]
        if base + 'are' in LEX or base + 'ere' in LEX or base + 'ire' in LEX:
            base_inf = base + ('are' if base + 'are' in LEX else ('ere' if base + 'ere' in LEX else 'ire'))
            val = LEX[base_inf].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}-ing{sfx}"
            
    # Check plural forms ending in -i, -e
    if cw_l.endswith("i") and len(cw_l) > 3:
        for sing in [cw_l[:-1] + 'o', cw_l[:-1] + 'e', cw_l[:-1] + 'a']:
            if sing in LEX:
                val = LEX[sing].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}s{sfx}"
    if cw_l.endswith("e") and len(cw_l) > 3:
        if cw_l[:-1] + 'a' in LEX:
            val = LEX[cw_l[:-1] + 'a'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}s{sfx}"

    # Check truncated poetic apocope (e.g. amor -> amore, cor -> cuore, parlar -> parlare)
    if cw_l.endswith("ar") or cw_l.endswith("er") or cw_l.endswith("ir"):
        if cw_l + 'e' in LEX:
            val = LEX[cw_l + 'e'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}{sfx}"
    if cw_l in ['amor', 'onor', 'signor', 'padron', 'cantor']:
        if cw_l + 'e' in LEX:
            val = LEX[cw_l + 'e'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}{sfx}"

    return f"{pfx}{cw}{sfx}"

# Test first 20 lines
for l in lines[:20]:
    trans = [translate_word_direct(w) for w in l.split()]
    print(f"Orig: {l}\nLit:  {' '.join(trans)}\n")

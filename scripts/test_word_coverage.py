import json
import re

with open('scripts/all_falstaff_unique_lines.json') as f:
    lines = json.load(f)

with open('scripts/falstaff_lexicon.json') as f:
    base = json.load(f)

with open('scripts/falstaff_core_additions.json') as f:
    core = json.load(f)

with open('scripts/large_italian_vocab.json') as f:
    large = json.load(f)

lex = {}
lex.update(base)
lex.update(core)
lex.update(large)

print(f"Total lexicon size: {len(lex)}")

# Check first 50 lines translation quality
for l in lines[:25]:
    words = l.split()
    trans = []
    for w in words:
        cw = re.sub(r'^[„“\"\'(\[«»\-]+|[„“\"\'\)\]!?,.:;…«»\-]+$', '', w).lower()
        if cw in lex:
            trans.append(lex[cw].split(' / ')[0].split(' (')[0])
        elif cw.startswith("l'") and cw[2:] in lex:
            trans.append("the " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("d'") and cw[2:] in lex:
            trans.append("of " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("un'") and cw[3:] in lex:
            trans.append("an " + lex[cw[3:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("m'") and cw[2:] in lex:
            trans.append("me " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("t'") and cw[2:] in lex:
            trans.append("you " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("s'") and cw[2:] in lex:
            trans.append("oneself " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("c'") and cw[2:] in lex:
            trans.append("there " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        elif cw.startswith("v'") and cw[2:] in lex:
            trans.append("you " + lex[cw[2:]].split(' / ')[0].split(' (')[0])
        else:
            trans.append(f"[{w}]")
    print(f"Orig: {l}\nLit:  {' '.join(trans)}\n")

import json
import re

with open('scripts/falstaff_stage_directions.json', 'r', encoding='utf-8') as f:
    dirs = json.load(f)

FALSTAFF_STAGE_DIRS = {
    "a parte": "aside",
    "da sé": "to oneself / aside",
    "fra sé": "to oneself / aside",
    "ridendo": "laughing",
    "sorridendo": "smiling",
    "con voce grossa": "in a deep voice",
    "con enfasi": "with emphasis",
    "sottovoce": "softly / in an undertone",
    "inchinandosi": "bowing",
    "con grande riverenza": "with great reverence",
    "fissandolo": "staring at him",
    "guardandolo": "looking at him",
    "gridando": "shouting / crying out",
    "scattando": "bursting out / jumping up",
    "con calma": "calmly",
    "agitato": "agitated",
    "con dispetto": "with spite / vexation",
    "sospirando": "sighing",
    "baciandola": "kissing her",
    "baciandolo": "kissing him",
    "abbracciandolo": "embracing him",
    "fuggendo": "fleeing",
    "escono": "they exit",
    "esce": "exits",
    "entra": "enters",
    "entrano": "they enter",
    "partono": "they depart",
    "a Falstaff": "to Falstaff",
    "ad Alice": "to Alice",
    "a Ford": "to Ford",
    "a Nannetta": "to Nannetta",
    "a Fenton": "to Fenton",
    "a Meg": "to Meg",
    "a Quickly": "to Quickly",
    "a Bardolfo": "to Bardolfo",
    "a Pistola": "to Pistola",
    "al Dr. Cajus": "to Dr. Caius"
}

for d in dirs:
    if d not in FALSTAFF_STAGE_DIRS:
        tr = d
        tr = re.sub(r'\ba Falstaff\b', 'to Falstaff', tr)
        tr = re.sub(r'\bad Alice\b', 'to Alice', tr)
        tr = re.sub(r'\ba Ford\b', 'to Ford', tr)
        tr = re.sub(r'\ba Nannetta\b', 'to Nannetta', tr)
        tr = re.sub(r'\ba Fenton\b', 'to Fenton', tr)
        tr = re.sub(r'\ba Meg\b', 'to Meg', tr)
        tr = re.sub(r'\ba Quickly\b', 'to Quickly', tr)
        tr = re.sub(r'\ba Bardolfo\b', 'to Bardolfo', tr)
        tr = re.sub(r'\ba Pistola\b', 'to Pistola', tr)
        tr = re.sub(r'\ba tutti\b', 'to all', tr)
        tr = re.sub(r'\brichiamandolo\b', 'calling him back', tr)
        tr = re.sub(r'\brichiamandola\b', 'calling her back', tr)
        tr = re.sub(r'\bguardando attorno\b', 'looking around', tr)
        tr = re.sub(r'\bavvicinandosi\b', 'approaching', tr)
        tr = re.sub(r'\ballontanandosi\b', 'moving away', tr)
        tr = re.sub(r'\baccennando a\b', 'pointing to', tr)
        tr = re.sub(r'\bmostrando\b', 'showing', tr)
        tr = re.sub(r'\bprendendo\b', 'taking', tr)
        tr = re.sub(r'\bgettando\b', 'throwing', tr)
        tr = re.sub(r'\baprendo\b', 'opening', tr)
        tr = re.sub(r'\bchiudendo\b', 'closing', tr)
        tr = re.sub(r'\bsedendosi\b', 'sitting down', tr)
        tr = re.sub(r'\balzandosi\b', 'standing up', tr)
        FALSTAFF_STAGE_DIRS[d] = tr

with open('scripts/falstaff_stage_directions_translated.json', 'w', encoding='utf-8') as f:
    json.dump(FALSTAFF_STAGE_DIRS, f, ensure_ascii=False, indent=2)

print(f"Saved {len(FALSTAFF_STAGE_DIRS)} translated Falstaff stage directions.")

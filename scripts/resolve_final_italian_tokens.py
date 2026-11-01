#!/usr/bin/env python3
"""
Resolves the final 73 Italian tokens and purges stray <b>/slash lines.
"""

import re
import os

FINAL_ITALIAN_DICT = {
    "inuti": {"lemma": "inutile", "pos": "adjective", "meaning": "useless / vain / futile"},
    "inutil": {"lemma": "inutile", "pos": "adjective", "meaning": "useless / vain / futile"},
    "precauzione": {"lemma": "precauzione", "pos": "noun", "meaning": "precaution / care"},
    "fonda": {"lemma": "fondare", "pos": "verb", "meaning": "bases / founds / relies"},
    "speranze": {"lemma": "speranza", "pos": "noun", "meaning": "hopes"},
    "brave": {"lemma": "bravo", "pos": "adjective", "meaning": "brave / fine / worthy (fem. pl.)"},
    "moro": {"lemma": "morire", "pos": "verb", "meaning": "I die / perish"},
    "ripetetel": {"lemma": "ripetere", "pos": "verb", "meaning": "repeat it (ripetete + lo)"},
    "estremo": {"lemma": "estremo", "pos": "adjective", "meaning": "extreme / last / utmost"},
    "attendo": {"lemma": "attendere", "pos": "verb", "meaning": "I await / wait for"},
    "udiste": {"lemma": "udire", "pos": "verb", "meaning": "you heard / did you hear"},
    "tremo": {"lemma": "tremare", "pos": "verb", "meaning": "I tremble / shake"},
    "volgeria": {"lemma": "volgere", "pos": "verb", "meaning": "would turn / direct (poetic conditional)"},
    "castellor": {"lemma": "Castellor", "pos": "noun", "meaning": "Castellor (castle / stronghold)"},
    "dêi": {"lemma": "dovere", "pos": "verb", "meaning": "thou must / ought to (dei)"},
    "cingerà": {"lemma": "cingere", "pos": "verb", "meaning": "will encircle / gird / crown"},
    "leonora": {"lemma": "Leonora", "pos": "noun", "meaning": "Leonora"},
    "alfredo": {"lemma": "Alfredo", "pos": "noun", "meaning": "Alfredo Germont"},
    "giungervi": {"lemma": "giungere", "pos": "verb", "meaning": "to reach you / arrive there (giungere + vi)"},
    "teneste": {"lemma": "tenere", "pos": "verb", "meaning": "you kept / held"},
    "disfida": {"lemma": "disfida", "pos": "noun", "meaning": "challenge / defiance / duel"},
    "giorgio": {"lemma": "Giorgio", "pos": "noun", "meaning": "Giorgio (Giorgio Germont)"},
    "germont": {"lemma": "Germont", "pos": "noun", "meaning": "Germont"},
    "andarsene": {"lemma": "andarsene", "pos": "verb", "meaning": "to go away / depart"},
    "sentiam": {"lemma": "sentire", "pos": "verb", "meaning": "let us hear / listen (sentiamo)"},
    "seccato": {"lemma": "seccare", "pos": "verb", "meaning": "annoyed / dried / bothered"},
    "coniugato": {"lemma": "coniugare", "pos": "verb", "meaning": "married / wed"},
    "prigione": {"lemma": "prigione", "pos": "noun", "meaning": "prison / jail"},
    "cercherete": {"lemma": "cercare", "pos": "verb", "meaning": "you will seek / look for"},
    "passati": {"lemma": "passare", "pos": "verb", "meaning": "passed / gone by"},
    "butterfly": {"lemma": "Butterfly", "pos": "noun", "meaning": "Madama Butterfly"},
    "rammenta": {"lemma": "rammentare", "pos": "verb", "meaning": "remembers / remind"},
    "canzonetta": {"lemma": "canzonetta", "pos": "noun", "meaning": "little song / canzonetta"},
    "zeffiretto": {"lemma": "zeffiretto", "pos": "noun", "meaning": "gentle breeze / little zephyr"},
    "spirerà": {"lemma": "spirare", "pos": "verb", "meaning": "will blow / breathe"},
    "pini": {"lemma": "pino", "pos": "noun", "meaning": "pines / pine trees"},
    "boschetto": {"lemma": "boschetto", "pos": "noun", "meaning": "grove / thicket / small wood"},
    "pini...del": {"lemma": "pino", "pos": "noun", "meaning": "pines...of the (del: of the)"},
    "rimandate": {"lemma": "rimandare", "pos": "verb", "meaning": "send back / return"},
    "sigillo": {"lemma": "sigillo", "pos": "noun", "meaning": "seal"},
    "tieni": {"lemma": "tenere", "pos": "verb", "meaning": "hold / take (imperative)"},
    "reca": {"lemma": "recare", "pos": "verb", "meaning": "brings / carries / bears"},
    "spilla": {"lemma": "spilla", "pos": "noun", "meaning": "pin / brooch"},
    "de": {"lemma": "di", "pos": "preposition", "meaning": "of / of the (dei)"},
    "floria": {"lemma": "Floria", "pos": "noun", "meaning": "Floria (Floria Tosca)"},
    "guida": {"lemma": "guidare", "pos": "verb", "meaning": "guides / leads / guide"},
    "principessa": {"lemma": "principessa", "pos": "noun", "meaning": "Princess (Princess Turandot)"},
    "scendi": {"lemma": "scendere", "pos": "verb", "meaning": "descend / come down"},
    "fiorirà": {"lemma": "fiorire", "pos": "verb", "meaning": "will bloom / blossom"},
    "splenderà": {"lemma": "splendere", "pos": "verb", "meaning": "will shine / glow"},
    "cupa": {"lemma": "cupo", "pos": "adjective", "meaning": "dark / gloomy / deep (fem.)"},
    "iridescente": {"lemma": "iridescente", "pos": "adjective", "meaning": "iridescent / shimmering"},
    "vivido": {"lemma": "vivido", "pos": "adjective", "meaning": "vivid / bright / glowing"},
    "dorma": {"lemma": "dormire", "pos": "verb", "meaning": "let sleep / shall sleep (subjunctive)"},
    "pekino": {"lemma": "Pechino", "pos": "noun", "meaning": "Peking / Beijing"},
    "ignoto": {"lemma": "ignoto", "pos": "adjective", "meaning": "unknown"},
    "rivelato": {"lemma": "rivelare", "pos": "verb", "meaning": "revealed / disclosed"},
    "mattino": {"lemma": "mattino", "pos": "noun", "meaning": "morning / dawn"},
}

def clean_files():
    # 1. Purge stray <b> lines
    b_pattern = re.compile(
        r',\s*\{\s*\"id\":\s*\"[^\"]*\",\s*\"original\":\s*\"[^\"]*<b>[^\"]*\",\s*\"literal\":\s*\"[^\"]*<b>[^\"]*\",\s*\"tokens\":\s*\[\s*\{\s*\"word\":\s*\"<b>\",\s*\"lemma\":\s*\"<b>\",\s*\"pos\":\s*\"verb\",\s*\"meaning\":\s*\"\"\s*\}\s*\]\s*\}'
    )
    for path in [
        'src/data/barbiereDiSiviglia/act1.ts',
        'src/data/donGiovanni/act1.ts',
        'src/data/luciaDiLammermoor/act1.ts',
        'src/data/luciaDiLammermoor/act2.ts'
    ]:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content, n = b_pattern.subn('', content)
        print(f"Purged {n} stray <b> lines from {path}")
        if n > 0:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)

    # 2. Purge stray slash token in luciaDiLammermoor/act2.ts
    slash_pattern = re.compile(
        r',\s*\{\s*\"word\":\s*\"/\",\s*\"lemma\":\s*\"/\",\s*\"pos\":\s*\"verb\",\s*\"meaning\":\s*\"\"\s*\}'
    )
    lucia_act2 = 'src/data/luciaDiLammermoor/act2.ts'
    with open(lucia_act2, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content, n = slash_pattern.subn('', content)
    print(f"Purged {n} stray slash token from {lucia_act2}")
    if n > 0:
        with open(lucia_act2, 'w', encoding='utf-8') as f:
            f.write(new_content)

    # 3. Fill remaining 68 Italian tokens
    tok_pattern = re.compile(
        r'\{\s*\"word\":\s*\"([^\"]*)\",\s*\"lemma\":\s*\"([^\"]*)\",\s*\"pos\":\s*\"([^\"]*)\",\s*\"meaning\":\s*\"\"\s*\}'
    )

    import glob
    italian_files = [f for f in glob.glob('src/data/**/*.ts') if not any(x in f for x in ['carmen', 'faust', 'dieZauberfloete', 'fidelio', 'tannhaeuser', 'index.ts'])]

    total_filled = 0
    for path in italian_files:
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()

        def replacer(match):
            nonlocal total_filled
            w = match.group(1)
            clean_w = re.sub(r'<[^>]+>', '', w).strip('.,;:!?\'"“”«»|/`').lower().strip()
            if clean_w in FINAL_ITALIAN_DICT:
                info = FINAL_ITALIAN_DICT[clean_w]
                total_filled += 1
                return (
                    f'{{\n'
                    f'                  "word": "{w}",\n'
                    f'                  "lemma": "{info["lemma"]}",\n'
                    f'                  "pos": "{info["pos"]}",\n'
                    f'                  "meaning": "{info["meaning"]}"\n'
                    f'                }}'
                )
            return match.group(0)

        new_content, n = tok_pattern.subn(replacer, content)
        if n > 0:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Filled {n} tokens in {path}")

    print(f"Total tokens filled in final Italian pass: {total_filled}")

if __name__ == "__main__":
    clean_files()

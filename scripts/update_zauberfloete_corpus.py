import json
import os
import re

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun', 
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

POS_CORRECTIONS = {
    'substantive': 'noun',
    'proper noun': 'noun',
    'name': 'noun',
    'article': 'particle',
    'determiner': 'particle',
    'number': 'noun',
    'numeral': 'noun',
    'contraction': 'idiom',
    'phrase': 'idiom',
    'modal': 'verb',
    'auxiliary': 'verb'
}

def clean_token(token):
    pos = token.get('pos', 'noun').lower().strip()
    if pos in POS_CORRECTIONS:
        pos = POS_CORRECTIONS[pos]
    if pos not in VALID_POS:
        pos = 'noun'
    token['pos'] = pos
    return token

def match_capitalization(original, literal):
    orig_stripped = original.strip(' „"\'»«“‘(—[')
    lit_stripped = literal.strip(' „"\'»«“‘(—[')
    if orig_stripped and lit_stripped:
        if orig_stripped[0].isupper() and lit_stripped[0].islower():
            # capitalize first alphabetic character of literal
            idx = literal.find(lit_stripped[0])
            literal = literal[:idx] + lit_stripped[0].upper() + literal[idx+1:]
    return literal

def reindex_scene(act_num, scene):
    s_num = scene['sceneNumber']
    for c_idx, cue in enumerate(scene['cues'], 1):
        c_id = f"a{act_num}_s{s_num}_c{c_idx}"
        cue['id'] = c_id
        for l_idx, line in enumerate(cue['lines'], 1):
            l_id = f"{c_id}_l{l_idx}"
            line['id'] = l_id
            if 'original' in line and 'literal' in line:
                line['literal'] = match_capitalization(line['original'], line['literal'])
            if 'tokens' in line and line['tokens']:
                line['tokens'] = [clean_token(t) for t in line['tokens']]
    return scene

def update_zauberfloete():
    # Load current acts
    with open("scripts/zauberfloete_act1_current.json", "r", encoding="utf-8") as f:
        act1 = json.load(f)
    with open("scripts/zauberfloete_act2_current.json", "r", encoding="utf-8") as f:
        act2 = json.load(f)

    # Load batches
    batches = []
    for b_file in [
        "scripts/zauberfloete_batch1_curated.json",
        "scripts/zauberfloete_batch2_curated.json",
        "scripts/zauberfloete_batch3_curated.json",
        "scripts/zauberfloete_batch4_curated.json"
    ]:
        if os.path.exists(b_file):
            with open(b_file, "r", encoding="utf-8") as f:
                batches.extend(json.load(f))
        else:
            print(f"Warning: {b_file} not found yet!")

    print(f"Loaded {len(batches)} curated dialogue sections.")

    # Organize sections by (act, scene, position)
    sec_map = {}
    for sec in batches:
        key = (sec['act'], sec['scene'], sec.get('position', 'pre'))
        if key not in sec_map:
            sec_map[key] = []
        sec_map[key].extend(sec.get('cues', []))

    # Apply to Act 1
    for sc in act1['scenes']:
        s_num = sc['sceneNumber']
        pre_cues = sec_map.get((1, s_num, 'pre'), [])
        post_cues = sec_map.get((1, s_num, 'post'), [])
        sc['cues'] = pre_cues + sc['cues'] + post_cues
        reindex_scene(1, sc)

    # Apply to Act 2
    for sc in act2['scenes']:
        s_num = sc['sceneNumber']
        pre_cues = sec_map.get((2, s_num, 'pre'), [])
        post_cues = sec_map.get((2, s_num, 'post'), [])
        sc['cues'] = pre_cues + sc['cues'] + post_cues
        reindex_scene(2, sc)

    # Save clean JSON corpus
    with open("scripts/zauberfloete_clean_act1.json", "w", encoding="utf-8") as f:
        json.dump(act1, f, ensure_ascii=False, indent=2)
    with open("scripts/zauberfloete_clean_act2.json", "w", encoding="utf-8") as f:
        json.dump(act2, f, ensure_ascii=False, indent=2)

    # Emit TypeScript
    def to_ts(obj, var_name):
        return f"import {{ Act }} from '../types/libretto';\n\nexport const {var_name}: Act = " + json.dumps(obj, ensure_ascii=False, indent=2) + ";\n"

    with open("src/data/dieZauberfloete/act1.ts", "w", encoding="utf-8") as f:
        f.write(to_ts(act1, "dieZauberfloeteAct1"))

    with open("src/data/dieZauberfloete/act2.ts", "w", encoding="utf-8") as f:
        f.write(to_ts(act2, "dieZauberfloeteAct2"))

    print("Emitted src/data/dieZauberfloete/act1.ts and dieZauberfloeteAct2.ts!")

if __name__ == "__main__":
    update_zauberfloete()

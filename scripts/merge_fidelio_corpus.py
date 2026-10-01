import json
import re

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
            d = json.load(f)
            corpus.update(d)
    except Exception as e:
        print(f"Error reading {fn}: {e}")

print(f"Total curated translations so far: {len(corpus)}")

# Check against all lines in fidelio_parsed.json
with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

missing = []
all_parsed_lines = []
for act_name, act in [('act1', parsed['act1']), ('act2', parsed['act2'])]:
    for sc in act:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                all_parsed_lines.append(orig)
                if orig not in corpus:
                    missing.append((act_name, sc['sceneNumber'], c['speaker'], orig))

print(f"Total lines in parsed opera: {len(all_parsed_lines)}")
print(f"Total unique lines in parsed opera: {len(set(all_parsed_lines))}")
print(f"Missing lines: {len(missing)} (unique missing: {len(set([m[3] for m in missing]))})")

# Sample 15 missing lines
for m in missing[:15]:
    print(f"  [{m[0]} Sc {m[1]} {m[2]}]: {m[3]}")

with open('scripts/fidelio_missing_lines.json', 'w', encoding='utf-8') as f:
    json.dump([{'act': m[0], 'scene': m[1], 'speaker': m[2], 'line': m[3]} for m in missing], f, ensure_ascii=False, indent=2)

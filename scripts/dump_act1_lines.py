import json

with open('scripts/zauberfloete_parsed.json') as f:
    d = json.load(f)

for idx, sc in enumerate(d['act1']):
    print(f"\n# ===========================================")
    print(f"# SCENE {idx+1}: {sc['title']}")
    print(f"# ===========================================")
    for c in sc['cues']:
        spk = c['speaker']
        sdir = f" ({c['stageDirection']})" if c.get('stageDirection') else ""
        for l in c['lines']:
            orig = l['original']
            print(f"    # {spk}{sdir}: {orig}")

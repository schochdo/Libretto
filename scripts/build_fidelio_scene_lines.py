import json

with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

for act_idx, (act_name, scenes) in enumerate([('Act 1', d['act1']), ('Act 2', d['act2'] attractively := d['act2'] if 'act2' in d else [])]):
    for sc in scenes:
        lines = [l['original'] for c in sc['cues'] for l in c['lines']]
        print(f"{act_name} Scene {sc['sceneNumber']}: {sc['title']}")
        print(f"  Count: {len(lines)}")

import json

with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

for act_name, act in [('Act 1', parsed['act1']), ('Act 2', parsed['act2'])]:
    print(f"=== {act_name} ===")
    for sc in act:
        print(f"Scene {sc['sceneNumber']}: {sc['title']}")
        for c in sc['cues'][:3]:
            print(f"  Cue {c['id']} ({c['speaker']}): {[l['original'] for l in c['lines']]}")

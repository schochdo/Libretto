import json

with open('scripts/zauberfloete_parsed.json') as f:
    d = json.load(f)

for sc in d['act2'][:12]:
    print(f"\n# {sc['title']}")
    for c in sc['cues']:
        if c['lines']:
            print(f"# [{c['speaker']}]")
            for l in c['lines']:
                print(f"    \"{l['original']}\"")

import json
import re

# Load parsed lines
with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

lines_set = set()
for act in [data['act1'], data['act2']]:
    for sc in act:
        for c in sc['cues']:
            for l in c['lines']:
                lines_set.add(l['original'])

print(f"Total unique lines to translate: {len(lines_set)}")

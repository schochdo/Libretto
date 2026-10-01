import json
import re

# Load parsed raw cues
with open('scripts/zauberfloete_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

act1_raw = data['act1']
print(f"Loaded {len(act1_raw)} scenes from parsed Act 1.")

import json
import re

# Load parsed fidelio json
with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

act1_scenes = data['act1']
act2_scenes = data['act2']

with open('scripts/fidelio_stage_directions_translated.json', 'r', encoding='utf-8') as f:
    stage_dir_map = json.load(f)

print(f"Loaded Act 1: {len(act1_scenes)} scenes, Act 2: {len(act2_scenes)} scenes.")

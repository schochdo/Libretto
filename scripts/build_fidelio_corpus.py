import json
import re

# This script generates the complete dictionary of authentic German lines to literal word-by-word syntax translations
# for Beethoven's Fidelio (Act 1 and Act 2), covering all 16 canonical musical numbers and spoken dialogue.

with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

# Load existing translations
try:
    with open('scripts/fidelio_trans_part1.json', 'r', encoding='utf-8') as f:
        all_trans = json.load(f)
except:
    all_trans = {}

print(f"Initial loaded: {len(all_trans)}")

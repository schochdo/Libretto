import json
import re

with open('scripts/untranslated_words.json', 'r', encoding='utf-8') as f:
    untrans = json.load(f)

print(f"Total words to map: {len(untrans)}")

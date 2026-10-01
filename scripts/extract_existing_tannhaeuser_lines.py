import re
import json

existing_pairs = {}
for act in [1, 2, 3]:
    try:
        with open(f'src/data/tannhaeuserAct{act}.ts', 'r', encoding='utf-8') as f:
            t = f.read()
        matches = re.findall(r'original:\s*[\"\']([^\"\']+)[\"\'],\s*literal:\s*[\"\']([^\"\']+)[\"\']', t)
        for orig, lit in matches:
            orig_clean = orig.replace('’', "'").replace('‘', "'").strip()
            existing_pairs[orig_clean] = lit.strip()
    except Exception as e:
        print(f"Error reading Act {act}: {e}")

print(f"Existing Tannhäuser translated pairs from old files: {len(existing_pairs)}")
with open('scripts/tannhaeuser_old_translations.json', 'w', encoding='utf-8') as f:
    json.dump(existing_pairs, f, ensure_ascii=False, indent=2)

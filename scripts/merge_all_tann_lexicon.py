import json

with open('scripts/tannhaeuser_full_lexicon.json', 'r', encoding='utf-8') as f:
    base_lex = json.load(f)

merged = dict(base_lex)

for i in range(11):
    with open(f'scripts/tann_dict_chunk_{i}.json', 'r', encoding='utf-8') as f:
        chunk = json.load(f)
        merged.update(chunk)

print(f"Total vocabulary terms in merged Tannhäuser lexicon: {len(merged)}")

with open('scripts/tannhaeuser_full_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(merged, f, ensure_ascii=False, indent=2)

print("Saved updated scripts/tannhaeuser_full_lexicon.json.")

import json

with open('scripts/tannhaeuser_full_lexicon.json', 'r', encoding='utf-8') as f:
    lex = json.load(f)

final_words = {
    "frauen": "women / ladies",
    "los": "lot / destiny",
    "stell": "set / put",
    "ungestört": "undisturbed",
    "entsündigt": "absolved of sin / cleansed",
    "jammre": "lament / wail",
    "reinstes": "purest",
    "glühen": "glow / ardor",
    "warst": "wast / were"
}

lex.update(final_words)

with open('scripts/tannhaeuser_full_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(lex, f, ensure_ascii=False, indent=2)

print("Added final words.")

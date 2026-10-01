import json
import re

# 1. Load existing master lexicon
with open('scripts/falstaff_master_lexicon.json', 'r', encoding='utf-8') as f:
    master = json.load(f)

print(f"Initial master lexicon entries: {len(master)}")

# 2. Merge all 6 chunks
for i in range(6):
    chunk_path = f'scripts/falstaff_dict_chunk_{i}.json'
    with open(chunk_path, 'r', encoding='utf-8') as f:
        chunk = json.load(f)
        master.update(chunk)
        print(f"Merged chunk {i} ({len(chunk)} words). Master total now: {len(master)}")

# 3. Explicitly ensure requested translations & variations
EXPLICIT_REQUIRED = {
    "noto": "known",
    "tal": "such a one / someone",
    "paese": "town / country",
    "nome": "name",
    "c'è": "there is",
    "due": "two",
    "tre": "three",
    "ne": "of-it / of-them",
    "via": "away / path",
    "son": "am / are",
    "gran": "great / big",
    "t'amo": "I love you",
    "insieme": "together",
    "tempo": "time",
    "parola": "word",
    "parole": "words",
    "presto": "quickly / soon",
    "dentro": "inside",
    "ebben": "well then",
    "ritorna": "returns",
    "vizio": "vice",
    "rubaldo": "scoundrel / rascal",
    "reo": "guilty / wicked",
    "virtù": "virtue",
    "declina": "declines",
    "l'amor": "love",
    "l'onore": "honor",
    "d'un": "of a",
    "un'altra": "another",
    "siam": "we are",
    "vo'": "I want / I go",
    "vo": "I want / I go"
}

master.update(EXPLICIT_REQUIRED)

print(f"Total master lexicon after explicit additions: {len(master)}")

# 4. Save updated master lexicon
with open('scripts/falstaff_master_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(master, f, ensure_ascii=False, indent=2)

print("Saved updated scripts/falstaff_master_lexicon.json successfully.")

# 5. Verification against scripts/falstaff_parsed.json
with open('scripts/falstaff_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»\-]+|[„“"\'\)\]!?,.:;…«»\-]+$', '', w).strip()

all_parsed_words = set()
for act in ['act1', 'act2', 'act3']:
    for sc in parsed[act]:
        for c in sc['cues']:
            for l in c['lines']:
                for w in l['original'].split():
                    cw = clean_word(w)
                    if cw:
                        all_parsed_words.add(cw.lower())

missing_from_parsed = sorted([w for w in all_parsed_words if w not in master])
print(f"\n=== VERIFICATION RESULT ===")
print(f"Total unique words in falstaff_parsed.json: {len(all_parsed_words)}")
print(f"Missing words from master lexicon: {len(missing_from_parsed)}")
if missing_from_parsed:
    print("Missing sample:", missing_from_parsed[:30])
else:
    print("SUCCESS: 0 missing words remaining! Every word is translated in falstaff_master_lexicon.json.")

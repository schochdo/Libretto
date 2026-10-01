import json
import re

with open('scripts/all_fidelio_unique_lines.json', 'r', encoding='utf-8') as f:
    lines = json.load(f)

# Find all untranslated words currently in our corpus
with open('src/data/fidelio/act1.ts') as f1, open('src/data/fidelio/act2.ts') as f2:
    t = f1.read() + f2.read()

pairs = re.findall(r'original:\s*\"([^\"]+)\",\s*literal:\s*\"([^\"]+)\"', t)
common_allowed = {'in', 'so', 'am', 'o', 'oh', 'ha', 'ah', 'me', 'to', 'is', 'it', 'on', 'at', 'an', 'we', 'he', 'by', 'as', 'no', 'my', 'up', 'us', 'be', 'do', 'go', 'if', 'of', 'and', 'the', 'fürst', 'fidelio', 'pizarro', 'rocco', 'florestan', 'marzelline', 'jaquino', 'leonore', 'fernando', 'sevilla'}

untrans_words = set()
for orig, lit in pairs:
    orig_words = set(re.findall(r'[a-zA-ZäöüÄÖÜß]+', orig.lower()))
    lit_words = re.findall(r'[a-zA-ZäöüÄÖÜß]+', lit)
    for lw in lit_words:
        if lw.lower() in orig_words and lw.lower() not in common_allowed:
            untrans_words.add(lw)

print(f"Total untranslated words found in literal translations: {len(untrans_words)}")

# Sort by frequency
word_counts = {}
for w in untrans_words:
    cnt = sum(len(re.findall(r'\b' + re.escape(w) + r'\b', orig, re.IGNORECASE)) for orig, _ in pairs)
    word_counts[w] = cnt

sorted_words = sorted(word_counts.items(), key=lambda x: -x[1])
for w, c in sorted_words[:50]:
    print(f"  {w}: {c}")

with open('scripts/untranslated_words.json', 'w', encoding='utf-8') as f:
    json.dump(sorted_words, f, ensure_ascii=False, indent=2)

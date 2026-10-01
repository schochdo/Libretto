import json

with open('scripts/fidelio_complete_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}

def infer_pos(word, lemma):
    # German capitalization rule: capitalized words are nouns
    if word and word[0].isupper() and word.lower() != 'ich':
        return 'noun'
    # Infinitives / verbs
    if word.endswith('en') or word.endswith('et') or word.endswith('st') or word.endswith('te'):
        return 'verb'
    # Adjectives / adverbs
    if word.endswith('ig') or word.endswith('lich') or word.endswith('isch') or word.endswith('bar'):
        return 'adjective'
    return 'particle'

fixed_count = 0
for k, entry in corpus.items():
    lit, tokens, gnote = entry
    if tokens:
        new_tokens = []
        for tok in tokens:
            pos = tok.get('pos', 'noun')
            if pos not in VALID_POS:
                pos = infer_pos(tok.get('word', ''), tok.get('lemma', ''))
                tok['pos'] = pos
                fixed_count += 1
            new_tokens.append(tok)
        corpus[k] = [lit, new_tokens, gnote]

print(f"Fixed {fixed_count} token POS values.")
with open('scripts/fidelio_complete_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(corpus, f, ensure_ascii=False, indent=2)


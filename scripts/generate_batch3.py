import json
import re

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun', 
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

def check_tokens(tokens):
    for t in tokens:
        if t['pos'] not in VALID_POS:
            raise ValueError(f"Invalid POS: {t['pos']} in token {t}")
    return tokens

# We will construct all 7 sections
sections = []


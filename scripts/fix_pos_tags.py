#!/usr/bin/env python3
"""
Normalizes all POS tags across src/data/ to conform to the TypeScript Token interface.
"""

import glob
import re

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun',
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

POS_MAP = {
    'name': 'noun',
    'prep': 'preposition',
    'intj': 'interjection',
    'num': 'adjective',
    'conj': 'conjunction',
    'pron': 'pronoun',
    'det': 'particle',
    'contraction': 'particle',
    'character': 'particle',
    'article': 'particle',
    'phrase': 'idiom',
    'adj': 'adjective',
    'adv': 'adverb',
}

def main():
    pattern = re.compile(r'\"pos\":\s*\"([^\"]*)\"')
    files = sorted(glob.glob('src/data/**/*.ts'))
    total_fixes = 0

    for fpath in files:
        if 'index.ts' in fpath:
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        def replacer(match):
            nonlocal total_fixes
            old_pos = match.group(1)
            if old_pos in VALID_POS:
                return match.group(0)
            new_pos = POS_MAP.get(old_pos, 'noun')
            total_fixes += 1
            return f'"pos": "{new_pos}"'

        new_content, n = pattern.subn(replacer, content)
        if n > 0:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"  Fixed {n:3d} POS tags in {fpath}")

    print(f"\nTotal POS tags normalized: {total_fixes}")

if __name__ == "__main__":
    main()

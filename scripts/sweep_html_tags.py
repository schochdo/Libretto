#!/usr/bin/env python3
"""
Sweeps and strips all embedded HTML tags (<i>, </i>, <b>, </b>, <br>, etc.)
from all display text in src/data/**/*.ts.
"""

import glob
import re

def clean_text(text):
    # Normalize ecc / etc in italics
    text = re.sub(r'<i>\s*ecc\.\s*</i>', 'ecc.', text, flags=re.IGNORECASE)
    text = re.sub(r'<i>\s*etc\.\s*</i>', 'etc.', text, flags=re.IGNORECASE)

    # Handle br in stage directions: if after punctuation, space; else comma space
    text = re.sub(r'([.,;!?])\s*<br\s*/?>\s*', r'\1 ', text, flags=re.IGNORECASE)
    text = re.sub(r'<br\s*/?>', ', ', text, flags=re.IGNORECASE)

    # Strip remaining i and b tags
    text = re.sub(r'</?[ib]>', '', text, flags=re.IGNORECASE)

    return text

def main():
    files = sorted(glob.glob('src/data/**/*.ts'))
    tag_pat = re.compile(r'<[^>]+>')
    total_tags_cleared = 0
    modified_files = 0

    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        tags = tag_pat.findall(content)
        if tags:
            cleaned = clean_text(content)
            remaining_tags = tag_pat.findall(cleaned)
            cleared = len(tags) - len(remaining_tags)
            total_tags_cleared += cleared
            modified_files += 1
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(cleaned)
            print(f"  {fpath:35s}: cleared {cleared:3d} tags")

    print(f"\nTotal files cleaned: {modified_files}")
    print(f"Total HTML tags purged from display text: {total_tags_cleared}")

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
Applies curated French linguistic dictionary (1,076 entries) across:
- src/data/carmen/act[1-4].ts
- src/data/faust/act[1-5].ts
- scripts/carmen_lexicon.json
"""

import glob
import json
import re
import os
import sys

from batch1_dict import BATCH1_DICT
from batch2_dict import BATCH2_DICT
from batch3_dict import BATCH3_DICT
from batch4_dict import BATCH4_DICT

def main():
    merged = {}
    for d in [BATCH1_DICT, BATCH2_DICT, BATCH3_DICT, BATCH4_DICT]:
        merged.update(d)

    print(f"Loaded {len(merged)} curated French lexical entries.")

    # 1. Update scripts/carmen_lexicon.json
    lex_path = "scripts/carmen_lexicon.json"
    if os.path.exists(lex_path):
        with open(lex_path, "r", encoding="utf-8") as f:
            lex = json.load(f)

        updated_count = 0
        for k, v in merged.items():
            if k in lex:
                lex[k]["lemma"] = v["lemma"]
                lex[k]["pos"] = v["pos"]
                lex[k]["meaning"] = v["meaning"]
                updated_count += 1
            else:
                lex[k] = {
                    "lemma": v["lemma"],
                    "pos": v["pos"],
                    "meaning": v["meaning"]
                }
                updated_count += 1

        with open(lex_path, "w", encoding="utf-8") as f:
            json.dump(lex, f, indent=2, ensure_ascii=False)

        print(f"Updated {updated_count} entries in {lex_path}.")

    # 2. Update TypeScript files in Carmen & Faust
    ts_pattern = re.compile(
        r'\{\s*\"word\":\s*\"([^\"]*)\",\s*\"lemma\":\s*\"([^\"]*)\",\s*\"pos\":\s*\"([^\"]*)\",\s*\"meaning\":\s*\"([^\"]*\(French opera term\))\"\s*\}',
        re.MULTILINE
    )

    def replace_token(match):
        word = match.group(1)
        old_lemma = match.group(2)
        key = old_lemma.lower()
        if key not in merged:
            raise ValueError(f"Missing key in merged dictionary: {key}")

        info = merged[key]
        new_lemma = info["lemma"]
        new_pos = info["pos"]
        new_meaning = info["meaning"]

        return (
            f'{{\n'
            f'                  "word": "{word}",\n'
            f'                  "lemma": "{new_lemma}",\n'
            f'                  "pos": "{new_pos}",\n'
            f'                  "meaning": "{new_meaning}"\n'
            f'                }}'
        )

    ts_files = sorted(glob.glob("src/data/carmen/*.ts") + glob.glob("src/data/faust/*.ts"))
    total_replaced = 0

    for filepath in ts_files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        matches = list(ts_pattern.finditer(content))
        count = len(matches)
        if count > 0:
            new_content = ts_pattern.sub(replace_token, content)
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  Replaced {count:4d} tokens in {filepath}")
            total_replaced += count
        else:
            print(f"  No placeholders in {filepath}")

    print(f"\nTotal placeholders replaced across TypeScript files: {total_replaced}")

    # 3. Sanity verification
    rem_ts = 0
    for filepath in ts_files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        rem_ts += content.count("(French opera term)")

    with open(lex_path, "r", encoding="utf-8") as f:
        rem_lex = f.read().count("(French opera term)")

    print(f"Remaining placeholders in src/data/: {rem_ts}")
    print(f"Remaining placeholders in carmen_lexicon: {rem_lex}")

    if rem_ts > 0 or rem_lex > 0:
        print("ERROR: Incomplete replacement!")
        sys.exit(1)
    else:
        print("✓ All French opera placeholder terms successfully resolved!")

if __name__ == "__main__":
    main()

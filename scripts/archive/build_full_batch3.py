#!/usr/bin/env python3
"""
Combines and validates all curated sections of Die Zauberflöte Batch 3:
- a2_s1_pre
- a2_s2_pre
- a2_s3_pre
- a2_s3_post
- a2_s4_pre
- a2_s5_pre
- a2_s6_pre

Writes output to scripts/zauberfloete_batch3_curated.json
"""

import json
import sys
import os

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun', 
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

import batch3_sec1
import batch3_sec2
import batch3_sec3
import batch3_sec4
import batch3_sec5
import batch3_sec6

sections = [
    batch3_sec1.sec,
    batch3_sec2.sec,
    batch3_sec3.sec_pre,
    batch3_sec3.sec_post,
    batch3_sec4.sec,
    batch3_sec5.sec,
    batch3_sec6.sec
]

total_cues = 0
total_lines = 0
total_tokens = 0

for sec in sections:
    print(f"Validating section: {sec['section']} (Act {sec['act']}, Scene {sec['scene']}, Position {sec['position']})")
    for c_idx, cue in enumerate(sec['cues'], 1):
        total_cues += 1
        if not cue.get('speaker'):
            raise ValueError(f"Missing speaker in cue {cue.get('id')}")
        if cue.get('stageDirection') and not cue.get('stageDirectionTranslation'):
            raise ValueError(f"Missing stageDirectionTranslation in cue {cue.get('id')}")
        
        for l_idx, line in enumerate(cue.get('lines', []), 1):
            total_lines += 1
            if not line.get('original'):
                raise ValueError(f"Missing original in line {line.get('id')}")
            if not line.get('literal'):
                raise ValueError(f"Missing literal in line {line.get('id')}")
            
            # Capitalization matching check
            orig_strip = line['original'].lstrip(' „"\'»«“‘(—[')
            lit_strip = line['literal'].lstrip(' „"\'»«“‘(—[')
            if orig_strip and lit_strip:
                if orig_strip[0].isupper() and not lit_strip[0].isupper():
                    raise ValueError(f"Capitalization mismatch in {line['id']}: orig='{orig_strip[:15]}' lit='{lit_strip[:15]}'")
            
            for tok in line.get('tokens', []):
                total_tokens += 1
                pos = tok.get('pos')
                if pos not in VALID_POS:
                    raise ValueError(f"Invalid POS tag '{pos}' in token: {tok}")

print(f"Validation successful! Total sections: {len(sections)}, cues: {total_cues}, lines: {total_lines}, tokens: {total_tokens}")

out_path = "scripts/zauberfloete_batch3_curated.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(sections, f, ensure_ascii=False, indent=2)

print(f"Saved directly to {out_path}")

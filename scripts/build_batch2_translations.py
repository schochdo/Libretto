#!/usr/bin/env python3
"""
build_batch2_translations.py - Generates and caches translations for Batch 2:
1. Tosca (Puccini)
2. Norma (Bellini)
3. Il trovatore (Verdi)
"""

import html
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

SCRIPTS_DIR = Path(__file__).parent

def clean_opera_text(text: str) -> str:
    t = text.strip()
    t = re.sub(r'\s+', ' ', t)
    return t

def translate_query(text: str) -> str:
    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=en&dt=t&q=' + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    with urllib.request.urlopen(req, timeout=12) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        return ''.join([part[0] for part in res[0]])

def translate_items(items: list, cache_file: Path) -> dict:
    translations = {}
    if cache_file.exists():
        try:
            translations = json.loads(cache_file.read_text(encoding='utf-8'))
            print(f"  Loaded {len(translations)} existing cached translations from {cache_file.name}")
        except Exception:
            translations = {}

    to_translate = [it for it in sorted(items) if it not in translations]
    print(f"  Need to translate {len(to_translate)} items for {cache_file.name}...")

    batch_size = 20
    for i in range(0, len(to_translate), batch_size):
        chunk = to_translate[i:i+batch_size]
        combined = '\n---LINE---\n'.join(chunk)
        try:
            trans_res = translate_query(combined)
            parts = trans_res.split('---LINE---')
            if len(parts) == len(chunk):
                for orig, tr in zip(chunk, parts):
                    translations[orig] = clean_opera_text(tr)
            else:
                for item in chunk:
                    translations[item] = clean_opera_text(translate_query(item))
                    time.sleep(0.04)
        except Exception as e:
            for item in chunk:
                try:
                    translations[item] = clean_opera_text(translate_query(item))
                    time.sleep(0.06)
                except Exception:
                    translations[item] = item

        if (i // batch_size) % 10 == 0 or i + batch_size >= len(to_translate):
            print(f"    Translated {min(i + batch_size, len(to_translate))}/{len(to_translate)}...")
            cache_file.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
        time.sleep(0.12)

    cache_file.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"  ✓ Saved {len(translations)} translations to {cache_file.name}\n")
    return translations

def process_opera(folder_name: str, cache_name: str):
    print(f"=== Processing {folder_name} ===")
    raw = html.unescape((SCRIPTS_DIR / folder_name / 'raw_original.html').read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    lines_set, sdirs_set = set(), set()
    splits = re.split(r'SCENA\s+[A-ZÀ-Ú\d]+', raw)
    for sc in splits[1:]:
        cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc)
        for c_idx in range(1, len(cue_chunks), 2):
            sp = cue_chunks[c_idx].strip()
            body = cue_chunks[c_idx+1].strip()
            if sp.startswith('SCENA') or sp.startswith('ATTO') or sp.startswith('PARTE') or len(sp) > 35:
                continue
            sd_match = re.match(r'^\s*<i>(.*?)</i>\s*(?:<br\s*/?>)*', body, flags=re.DOTALL)
            if sd_match:
                sd = sd_match.group(1).replace('\n', ' ').strip()
                if sd and len(sd) < 250:
                    sdirs_set.add(sd)
            clean_body = body[sd_match.end():] if sd_match else body
            raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', clean_body) if l.strip()]
            for l in raw_lines:
                if l.startswith('<b>'): continue
                if l.startswith('<i>') and l.endswith('</i>'):
                    inline_sd = l[3:-4].strip()
                    if inline_sd and len(inline_sd) < 250:
                        sdirs_set.add(inline_sd)
                    continue
                lines_set.add(l)

    cache_file = SCRIPTS_DIR / folder_name / cache_name
    translate_items(list(lines_set | sdirs_set), cache_file)

def main():
    process_opera('raw_tosca', 'tosca_translations.json')
    process_opera('raw_norma', 'norma_translations.json')
    process_opera('raw_trovatore', 'trovatore_translations.json')
    print("✓ All Batch 2 translations complete!")

if __name__ == '__main__':
    main()

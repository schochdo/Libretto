#!/usr/bin/env python3
"""
build_batch3_translations.py - Generates and caches translations for Batch 3:
1. Madama Butterfly (Puccini) - Italian
2. Aida (Verdi) - Italian
3. Faust (Gounod) - French
4. Turandot (Puccini) - Italian
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

def translate_query(text: str, sl: str = 'it') -> str:
    url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl={sl}&tl=en&dt=t&q=' + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    with urllib.request.urlopen(req, timeout=12) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        return ''.join([part[0] for part in res[0]])

def translate_items(items: list, cache_file: Path, sl: str = 'it') -> dict:
    translations = {}
    if cache_file.exists():
        try:
            translations = json.loads(cache_file.read_text(encoding='utf-8'))
            print(f"  Loaded {len(translations)} existing cached translations from {cache_file.name}")
        except Exception:
            translations = {}

    to_translate = [it for it in sorted(items) if it not in translations]
    print(f"  Need to translate {len(to_translate)} items for {cache_file.name} (sl={sl})...")

    batch_size = 20
    for i in range(0, len(to_translate), batch_size):
        chunk = to_translate[i:i+batch_size]
        combined = '\n---LINE---\n'.join(chunk)
        try:
            trans_res = translate_query(combined, sl=sl)
            parts = trans_res.split('---LINE---')
            if len(parts) == len(chunk):
                for orig, tr in zip(chunk, parts):
                    translations[orig] = clean_opera_text(tr)
            else:
                for item in chunk:
                    translations[item] = clean_opera_text(translate_query(item, sl=sl))
                    time.sleep(0.04)
        except Exception as e:
            for item in chunk:
                try:
                    translations[item] = clean_opera_text(translate_query(item, sl=sl))
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

def process_opera(folder_name: str, cache_name: str, sl: str = 'it'):
    print(f"=== Processing {folder_name} ===")
    raw = html.unescape((SCRIPTS_DIR / folder_name / 'raw_original.html').read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    lines_set, sdirs_set = set(), set()
    raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', raw) if l.strip()]
    for l in raw_lines:
        if l.startswith('<b>') and l.endswith('</b>'):
            continue
        if l.startswith('<i>') and l.endswith('</i>'):
            s = l[3:-4].strip()
            if s and len(s) < 250:
                sdirs_set.add(s)
            continue
        clean = re.sub(r'<[^>]+>', '', l).strip()
        if clean and len(clean) < 300 and not clean.startswith('ATTO') and not clean.startswith('ACTE') and 'opera-arias.com' not in clean.lower():
            lines_set.add(clean)

    all_items = list(lines_set | sdirs_set)
    cache_file = SCRIPTS_DIR / folder_name / cache_name
    translate_items(all_items, cache_file, sl=sl)

def main():
    process_opera('raw_butterfly', 'butterfly_translations.json', sl='it')
    process_opera('raw_aida', 'aida_translations.json', sl='it')
    process_opera('raw_faust', 'faust_translations.json', sl='fr')
    process_opera('raw_turandot', 'turandot_translations.json', sl='it')
    print("✓ All Batch 3 translations complete!")

if __name__ == '__main__':
    main()

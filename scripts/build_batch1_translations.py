#!/usr/bin/env python3
"""
build_batch1_translations.py - Generates and caches translations for Batch 1:
1. Il barbiere di Siviglia (Rossini)
2. Lucia di Lammermoor (Donizetti)
3. Don Pasquale (Donizetti)
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

def process_barbiere():
    print("=== Processing Il barbiere di Siviglia ===")
    raw = html.unescape((SCRIPTS_DIR / 'raw_barbiere' / 'raw_original.html').read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    p1 = raw.find('ATTO PRIMO')
    p2 = raw.find('ATTO SECONDO')

    lines_set, sdirs_set = set(), set()
    for act_text in [raw[p1:p2], raw[p2:]]:
        splits = re.split(r'SCENA\s*\d+', act_text)
        for i in range(1, len(splits)):
            sc_body = splits[i].strip()
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or len(sp) > 35:
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

    cache_file = SCRIPTS_DIR / 'raw_barbiere' / 'barbiere_translations.json'
    translate_items(list(lines_set | sdirs_set), cache_file)

def process_lucia():
    print("=== Processing Lucia di Lammermoor ===")
    raw = html.unescape((SCRIPTS_DIR / 'raw_lucia' / 'raw_original.html').read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    acts = re.split(r'ATTO\s+[A-ZÀ-Ú]+', raw)

    lines_set, sdirs_set = set(), set()
    for act_text in acts[1:]:
        splits = re.split(r'SCENA\s+[A-Z\d]+', act_text)
        for i in range(1, len(splits)):
            sc_body = splits[i].strip()
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or len(sp) > 35:
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

    cache_file = SCRIPTS_DIR / 'raw_lucia' / 'lucia_translations.json'
    translate_items(list(lines_set | sdirs_set), cache_file)

def process_pasquale():
    print("=== Processing Don Pasquale ===")
    raw = html.unescape((SCRIPTS_DIR / 'raw_pasquale' / 'raw_original.html').read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    acts = re.split(r'ATTO\s+[A-ZÀ-Ú]+', raw)

    lines_set, sdirs_set = set(), set()
    for act_text in acts[1:]:
        splits = re.split(r'SCENA\s+[A-ZÀ-Ú\d]+', act_text)
        for i in range(1, len(splits)):
            sc_body = splits[i].strip()
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or len(sp) > 35:
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

    cache_file = SCRIPTS_DIR / 'raw_pasquale' / 'pasquale_translations.json'
    translate_items(list(lines_set | sdirs_set), cache_file)

def main():
    process_barbiere()
    process_lucia()
    process_pasquale()
    print("✓ All Batch 1 translations complete!")

if __name__ == '__main__':
    main()

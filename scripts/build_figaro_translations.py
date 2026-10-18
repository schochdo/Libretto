#!/usr/bin/env python3
"""
build_figaro_translations.py - Generates and caches translations for Mozart's The Marriage of Figaro.
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
RAW_FILE = SCRIPTS_DIR / 'raw_figaro' / 'figaro_raw.html'
CACHE_FILE = SCRIPTS_DIR / 'raw_figaro' / 'figaro_translations.json'

def clean_opera_text(text: str) -> str:
    t = text.strip()
    t = re.sub(r'\s+', ' ', t)
    return t

def translate_query(text: str) -> str:
    url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=en&dt=t&q=' + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        res = json.loads(resp.read().decode('utf-8'))
        return ''.join([part[0] for part in res[0]])

def main():
    raw = html.unescape(RAW_FILE.read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    
    act_pos = [
        raw.find('<b>ATTO PRIMO</b>'),
        raw.find('<b>ATTO SECONDO</b>'),
        raw.find('<b>ATTO TERZO</b>'),
        raw.find('<b>ATTO QUARTO</b>'),
        len(raw)
    ]

    lines_set = set()
    sdirs_set = set()

    for a_idx in range(4):
        act_text = raw[act_pos[a_idx]:act_pos[a_idx+1]]
        splits = re.split(r'<br\s*/?>\s*<br\s*/?>\s*(SCENA\s+[IVXLCDM\d]+)<br\s*/?>', act_text)
        for i in range(1, len(splits), 2):
            sc_body = splits[i+1].strip()
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or sp.startswith('NO.') or sp.startswith('RECITATIVO') or len(sp) > 35:
                    continue
                sd_match = re.match(r'^\s*<i>(.*?)</i>\s*(?:<br\s*/?>)*', body, flags=re.DOTALL)
                if sd_match:
                    sd = sd_match.group(1).replace('\n', ' ').strip()
                    if sd and not sd.startswith('No.') and len(sd) < 200:
                        sdirs_set.add(sd)
                clean_body = body[sd_match.end():] if sd_match else body
                raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', clean_body) if l.strip()]
                for l in raw_lines:
                    if l.startswith('<b>No.') or l.startswith('<b>Recitativo'): continue
                    if l.startswith('<i>') and l.endswith('</i>'):
                        inline_sd = l[3:-4].strip()
                        if inline_sd and len(inline_sd) < 200:
                            sdirs_set.add(inline_sd)
                        continue
                    lines_set.add(l)

    print(f"Found {len(lines_set)} unique dialogue lines and {len(sdirs_set)} unique stage directions.")

    translations = {}
    if CACHE_FILE.exists():
        translations = json.loads(CACHE_FILE.read_text(encoding='utf-8'))
        print(f"Loaded {len(translations)} existing cached translations.")

    to_translate = []
    for s in sorted(sdirs_set):
        if s not in translations:
            to_translate.append(s)
    for l in sorted(lines_set):
        if l not in translations:
            to_translate.append(l)

    print(f"Need to translate {len(to_translate)} items...")

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
            print(f"Error on chunk {i}: {e}. Retrying single items...")
            for item in chunk:
                try:
                    translations[item] = clean_opera_text(translate_query(item))
                    time.sleep(0.08)
                except Exception as ex:
                    print(f"Failed on item: {item} ({ex})")
                    translations[item] = item

        if (i // batch_size) % 5 == 0:
            print(f"  Translated {min(i + batch_size, len(to_translate))}/{len(to_translate)} items...")
            CACHE_FILE.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
        time.sleep(0.15)

    CACHE_FILE.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"✓ All Figaro translations saved to {CACHE_FILE} (total: {len(translations)})")

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
build_don_giovanni_translations.py - Generates and caches translations for Mozart's Don Giovanni.
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
RAW_FILE = SCRIPTS_DIR / 'raw_don_giovanni' / 'don_giovanni_raw.html'
CACHE_FILE = SCRIPTS_DIR / 'raw_don_giovanni' / 'don_giovanni_translations.json'

# Curated opera idiom & grammar notes (plain English, no academic jargon)
OPERA_NOTES = {
    "notte e giorno faticar": "Italian poetry frequently apocopates (drops the final '-e') from verb infinitives: 'faticar' instead of 'faticare' (to toil).",
    "vuol star dentro colla bella": "'Colla' is an older contraction of 'con la' (with the).",
    "ed io far la sentinella": "'Far la sentinella' is an Italian idiom meaning 'to keep watch' or 'stand guard as a lookout'.",
    "chi son io tu non saprai": "Notice the inversion: 'tu non saprai chi son io' (you will not know who I am) becomes 'chi son io tu non saprai' to emphasize 'who I am'.",
    "sta a veder che il malandrino": "'Sta a veder che' is a colloquial Italian idiom meaning 'just wait and see' or 'watch out, he will...'.",
    "battiti meco": "'Meco' is an archaic poetic contraction of 'con me' (with me). Similarly, 'teco' means 'with you' and 'seco' means 'with him/her'.",
    "di pugnar teco": "'Pugnar' is poetic for 'combattere' (to fight), and 'teco' means 'with you'.",
    "l'ha voluto, suo danno": "'Suo danno' is an Italian idiom meaning 'worse for him' or 'his own fault' (literally 'his damage').",
    "madamina, il catalogo è questo": "'Madamina' is an affectionate, diminutive form of 'madama' (my lady), used here with sarcastic intimacy by Leporello.",
    "là ci darem la mano": "'Darsi la mano' (to give each other one's hand) is the traditional gesture of formal courtship and pledge of betrothal.",
    "dalla sua pace la mia dipende": "Literary word order: 'la mia [pace] dipende dalla sua pace' (my peace depends upon hers).",
    "fin ch'han dal vino calda la testa": "'Aver la testa calda dal vino' means to be flushed or heated with wine. 'Fin ch'han' contracts 'fino a che hanno' (until they have).",
    "deh, vieni alla finestra": "'Deh' is an untranslatable poetic exclamation expressing longing or entreaty, equivalent to 'ah / pray / please'.",
    "vedrai, carino": "'Carino' is an affectionate diminutive used as a term of endearment ('my darling', 'sweetheart').",
    "don giovanni, a cenar teco m'invitasti": "'Teco' is archaic Italian for 'con te' (with you). In English: 'Don Giovanni, you invited me to dine with you.'",
    "questo è il fin di chi fa mal": "The closing moral proverb: 'This is the end of anyone who does evil', with 'fa mal' apocopating 'fa male'."
}

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
    p_act1 = raw.find('ATTO PRIMO')
    p_act2 = raw.find('ATTO SECONDO')
    
    # Extract unique lines & stage directions
    lines_set = set()
    sdirs_set = set()
    
    def extract_from_act(act_text):
        splits = re.split(r'<br><br>(SCENA\s+[A-ZÀ-ÿ]+)<br>', act_text)
        for i in range(1, len(splits), 2):
            sc_body = splits[i+1].strip()
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or sp.startswith('NR.') or len(sp) > 35:
                    continue
                sd_match = re.match(r'^\s*<i>(.*?)</i>\s*(?:<br\s*/?>)*', body, flags=re.DOTALL)
                if sd_match:
                    sd = sd_match.group(1).replace('\n', ' ').strip()
                    if sd and not sd.startswith('Nr.') and len(sd) < 200:
                        sdirs_set.add(sd)
                clean_body = body[sd_match.end():] if sd_match else body
                raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', clean_body) if l.strip()]
                for l in raw_lines:
                    if l.startswith('<b>Nr.'): continue
                    if l.startswith('<i>') and l.endswith('</i>'):
                        inline_sd = l[3:-4].strip()
                        if inline_sd and len(inline_sd) < 200:
                            sdirs_set.add(inline_sd)
                        continue
                    lines_set.add(l)

    extract_from_act(raw[p_act1:p_act2])
    extract_from_act(raw[p_act2:])
    
    print(f"Found {len(lines_set)} unique dialogue lines and {len(sdirs_set)} unique stage directions.")
    
    translations = {}
    if CACHE_FILE.exists():
        translations = json.loads(CACHE_FILE.read_text(encoding='utf-8'))
        print(f"Loaded {len(translations)} existing cached translations.")

    to_translate = []
    for s in sdirs_set:
        if s not in translations:
            to_translate.append(s)
    for l in lines_set:
        if l not in translations:
            to_translate.append(l)

    print(f"Need to translate {len(to_translate)} items...")
    
    # Batch translation with retry
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
                    time.sleep(0.05)
        except Exception as e:
            print(f"Error on chunk {i}: {e}. Falling back to single queries...")
            for item in chunk:
                try:
                    translations[item] = clean_opera_text(translate_query(item))
                    time.sleep(0.1)
                except Exception as ex:
                    print(f"Failed on item: {item} ({ex})")
                    translations[item] = item
        
        if (i // batch_size) % 5 == 0:
            print(f"  Translated {min(i + batch_size, len(to_translate))}/{len(to_translate)} items...")
            CACHE_FILE.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
        time.sleep(0.2)

    CACHE_FILE.write_text(json.dumps(translations, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"✓ All translations saved to {CACHE_FILE} (total entries: {len(translations)})")

if __name__ == '__main__':
    main()

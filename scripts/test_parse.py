import re
import json

with open('scripts/zauberfloete_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

cells = re.findall(r'<tr[^>]*>\s*<td[^>]*>(.*?)</td>\s*</tr>', html, re.DOTALL)

SPEAKERS = {
    'TAMINO': 'Tamino',
    'PAPAGENO': 'Papageno',
    'DIE DREI DAMEN': 'Three Ladies',
    'DIE DAMEN': 'Three Ladies',
    'ERSTE DAME': 'First Lady',
    'ZWEITE DAME': 'Second Lady',
    'DRITTE DAME': 'Third Lady',
    'ALLE DREI': 'All Three Ladies',
    'KÖNIGIN': 'Queen of the Night',
    'MONOSTATOS': 'Monostatos',
    'PAMINA': 'Pamina',
    'DIE DREI KNABEN': 'Three Boys',
    'DIE KNABEN': 'Three Boys',
    'ERSTER KNABE': 'First Boy',
    'ZWEITER KNABE': 'Second Boy',
    'DRITTER KNABE': 'Third Boy',
    'ZWEITER UND DRITTER KNABE': 'Second & Third Boys',
    'SPRECHER': 'Speaker',
    'SARASTRO': 'Sarastro',
    'PRIESTER': 'Priests',
    'BEIDE PRIESTER': 'Both Priests',
    'ERSTER PRIESTER': 'First Priest',
    'ZWEITER PRIESTER': 'Second Priest',
    'CHOR': 'Chorus',
    'CHOR DER PRIESTER': 'Chorus of Priests',
    'EINGEWEIHTE': 'The Initiates',
    'EINGEWEIHTEN': 'The Initiates',
    'DIE ZWEI GEHARNISCHTEN': 'Two Armed Men',
    'PAPAGENA': 'Papagena',
    'BEIDE': 'Both',
    'ALLE': 'All',
    'GEFOLGE': 'Entourage',
    'ERSTE STIMME': 'First Voice',
    'ZWEITE STIMME': 'Second Voice',
    'DRITTE STIMME': 'Third Voice',
    'TAMINO UND PAPAGENO': 'Tamino & Papageno',
    'PAMINA UND TAMINO': 'Pamina & Tamino',
    'PAMINA UND PAPAGENO': 'Pamina & Papageno',
    'SARASTRO UND CHOR': 'Sarastro & Chorus',
    'MONOSTATOS UND DIE SKLAVEN': 'Monostatos & Slaves',
    'MONOSTATOS UND DAMEN': 'Monostatos & Ladies',
    'KÖNIGIN UND DAMEN': 'Queen & Ladies',
    'GEFOLGE UND PRIESTER': 'Entourage & Priests'
}

def clean_txt(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'&nbsp;', ' ', t)
    t = re.sub(r'&#8211;', '–', t)
    t = re.sub(r'&ndash;', '–', t)
    t = re.sub(r'&mdash;', '—', t)
    t = re.sub(r'’', '\'', t)
    t = re.sub(r'‘', '\'', t)
    t = re.sub(r'“', '\"', t)
    t = re.sub(r'”', '\"', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

def match_speaker(line):
    # Check exact match or speaker with parenthetical
    line_clean = line.strip()
    m = re.match(r'^([A-ZÄÖÜ\s–&-]+?)(?:\s*\((.*?)\))?$', line_clean)
    if m:
        spk_candidate = m.group(1).strip().upper()
        # strip any punctuation or trailing dash
        spk_candidate = re.sub(r'[\s–-]+$', '', spk_candidate).strip()
        if spk_candidate in SPEAKERS:
            return SPEAKERS[spk_candidate], m.group(2)
    return None, None

act1_cells = cells[5:34]
print(f"Act 1 cells count: {len(act1_cells)}")
act2_cells = cells[35:67]
print(f"Act 2 cells count: {len(act2_cells)}")


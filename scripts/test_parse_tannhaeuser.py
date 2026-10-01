import re
import json

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

# Scan all speakers in Tannhäuser
with open('scripts/tannhaeuser_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
content_rows = rows[6:87]

speaker_cands = set()
for r in content_rows:
    lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', r) if clean_txt(l)]
    for l in lines:
        m = re.match(r'^([A-ZÄÖÜ\s–&,-]+?)(?:\s*\((.*?)\))?$', l)
        if m:
            cand = m.group(1).strip()
            if len(cand) >= 3 and not any(cand.startswith(x) for x in ['ERSTER', 'ZWEITER', 'DRITTER', 'SZENE', 'AUFZUG', 'PERSONEN']):
                speaker_cands.add(cand)

print(f"Candidate speakers found ({len(speaker_cands)}):")
for s in sorted(speaker_cands):
    print("  ", s)

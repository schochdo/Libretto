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

# Scan all speakers in Falstaff
for act in [1, 2, 3]:
    with open(f'scripts/falstaff_act{act}_raw.html', 'r', encoding='utf-8') as f:
        html = f.read()
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
    speakers = set()
    for r in rows[2:-1]:
        lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', r) if clean_txt(l)]
        for l in lines:
            m = re.match(r'^([A-ZÀÈÉÌÒÙa-zàèéìòù\s–&,\.\'-]+?)(?:\s*\((.*?)\))?$', l)
            if m:
                cand = m.group(1).strip().upper()
                if any(cand.startswith(x) for x in ['FALSTAFF', 'FORD', 'ALICE', 'MEG', 'QUICKLY', 'NANNETTA', 'FENTON', 'CAJUS', 'CAIUS', 'DR.', 'BARDOLFO', 'PISTOLA', 'TUTTI', 'CORO']):
                    speakers.add(cand)
    print(f"Act {act} speakers ({len(speakers)}):", sorted(speakers)[:15])

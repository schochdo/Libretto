import json

with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# In Act 1 Scene 10, remove cue a1_s10_c64 which is footer junk
sc10_cues = d['act1'][9]['cues']
d['act1'][9]['cues'] = [c for c in sc10_cues if not any('LibrettoArchive' in l['original'] or 'libretto by' in l['original'] for l in c['lines'])]

# In Act 2 Scene 6, clean last cue
last_c2 = d['act2'][5]['cues'][-1]
filtered_lines = []
for l in last_c2['lines']:
    if any(k in l['original'] for k in ['libretto by', 'LibrettoArchive', 'Side-by-side', 'Paperback Libretti', 'Browse Tags', 'Murashev', 'ENDE DER OPER', 'Erster Akt', 'Zweiter Akt', 'Cast', '<!--', '-->', 'Explore', 'Operas', 'Composers', 'Opera History', 'Blog', 'Website', 'About', 'Contact', 'Links', 'Register', 'Login', '&copy;']):
        continue
    filtered_lines.append(l)

last_c2['lines'] = filtered_lines
if not last_c2['lines'] and not last_c2.get('stageDirection'):
    d['act2'][5]['cues'].pop()

with open('scripts/fidelio_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

print("Cleaned footer artifacts from scripts/fidelio_parsed.json.")

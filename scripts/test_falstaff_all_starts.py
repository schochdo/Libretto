from parse_falstaff_full import extract_merged_lines, clean_txt, KNOWN_SPEAKERS
import re

for act_num in [1, 2, 3]:
    with open(f'scripts/falstaff_act{act_num}_raw.html') as f:
        html = f.read()
    p1 = html.find('Parte prima')
    p2 = html.find('Parte seconda')
    m_end = re.search(r'libretto by', html, re.IGNORECASE)
    p_end = m_end.start() if m_end else len(html)
    for p_num, chunk in [(1, html[p1:p2]), (2, html[p2:p_end])]:
        lines = extract_merged_lines(chunk)
        first_spk_idx = None
        for i, l in enumerate(lines):
            cand = l.strip().upper()
            if cand in KNOWN_SPEAKERS:
                first_spk_idx = i
                break
        print(f"Act {act_num} Part {p_num}: first speaker '{lines[first_spk_idx]}' at line {first_spk_idx}")
        print("   Lines before first speaker:", lines[:first_spk_idx])

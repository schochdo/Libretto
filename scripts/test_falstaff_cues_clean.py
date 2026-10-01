import re
import json

with open('scripts/falstaff_act1_raw.html') as f:
    act1_html = f.read()

from parse_falstaff_full import clean_txt, KNOWN_SPEAKERS, PART_META, extract_merged_lines

# Check how cue 0 (the narrator cue) is formed in Act 1 Scene 1
p1 = act1_html.find('Parte prima')
p2 = act1_html.find('Parte seconda')
lines1 = extract_merged_lines(act1_html[p1:p2])
print("First 15 lines of act1 part1:")
for i, l in enumerate(lines1[:15]):
    print(f" {i}: {l}")

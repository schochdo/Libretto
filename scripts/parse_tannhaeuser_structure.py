import re
import json
from test_parse_tannhaeuser import clean_txt

with open('scripts/tannhaeuser_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect where Act 1, 2, 3 begin and end in the HTML
p_act1 = html.find('ERSTER AUFZUG')
p_act2 = html.find('ZWEITER AUFZUG')
p_act3 = html.find('DRITTER AUFZUG')
p_end = html.find('libretto by Richard Wagner')

print(f"Act 1 pos: {p_act1}")
print(f"Act 2 pos: {p_act2}")
print(f"Act 3 pos: {p_act3}")
print(f"End pos: {p_end}")

def get_scenes_in_chunk(chunk, act_num):
    # Find all Scene markers
    scene_matches = list(re.finditer(r'(Erste Szene|Zweite Szene|Dritte Szene|Vierte Szene|Fünfte Szene)', chunk))
    scenes = []
    for idx, sm in enumerate(scene_matches):
        s_title = sm.group(1)
        s_start = sm.start()
        s_end = scene_matches[idx+1].start() if idx + 1 < len(scene_matches) else len(chunk)
        sc_chunk = chunk[s_start:s_end]
        scenes.append((s_title, sc_chunk))
    return scenes

sc_a1 = get_scenes_in_chunk(html[p_act1:p_act2], 1)
sc_a2 = get_scenes_in_chunk(html[p_act2:p_act3], 2)
sc_a3 = get_scenes_in_chunk(html[p_act3:p_end], 3)

print(f"Act 1 scenes: {len(sc_a1)} -> {[s[0] for s in sc_a1]}")
print(f"Act 2 scenes: {len(sc_a2)} -> {[s[0] for s in sc_a2]}")
print(f"Act 3 scenes: {len(sc_a3)} -> {[s[0] for s in sc_a3]}")

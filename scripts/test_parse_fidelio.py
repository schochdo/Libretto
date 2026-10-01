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

KNOWN_SPEAKERS = {
    'JAQUINO': 'Jaquino',
    'MARZELLINE': 'Marzelline',
    'ROCCO': 'Rocco',
    'LEONORE': 'Leonore',
    'PIZARRO': 'Don Pizarro',
    'DON PIZARRO': 'Don Pizarro',
    'FLORESTAN': 'Florestan',
    'DON FERNANDO': 'Don Fernando',
    'CHOR DER GEFANGENEN': 'Chorus of Prisoners',
    'ERSTER GEFANGENER': 'First Prisoner',
    'ZWEITER GEFANGENER': 'Second Prisoner',
    'CHOR DES VOLKES UND DER GEFANGENEN': 'Chorus of People and Prisoners',
    'CHOR': 'Chorus',
    'DIE WACHE': 'The Guard',
    'ALLE ANDEREN': 'All Others',
    'BEIDE': 'Both',
    'LEONORE UND FLORESTAN': 'Leonore & Florestan',
    'LEONORE UND ROCCO': 'Leonore & Rocco',
    'FLORESTAN UND CHOR': 'Florestan & Chorus',
    'DON FERNANDO, ROCCO': 'Don Fernando & Rocco',
    'JAQUINO, DON FERNANDO, ROCCO': 'Jaquino, Don Fernando & Rocco',
    'CHOR, LEONORE, MARZELLINE, FLORESTAN, DON FERNANDO, ROCCO': 'All'
}

def parse_fidelio_act(path, act_num):
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    rows = re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.DOTALL)
    # The libretto content is inside table rows between header and footer
    content_rows = rows[2:-2]
    
    scenes = []
    cur_scene = None
    cur_cue = None
    cur_piece = None
    scene_counter = 1
    cue_counter = 1
    line_counter = 1
    
    for row_idx, r in enumerate(content_rows):
        # find cell
        td_match = re.search(r'<td[^>]*>(.*?)</td>', r, re.DOTALL)
        if not td_match:
            continue
        cell_html = td_match.group(1)
        
        # Split cell_html into raw lines by <br /> or newlines
        raw_lines = [l.strip() for l in re.split(r'<br\s*/?>|\n', cell_html)]
        # Filter empty lines
        raw_lines = [l for l in raw_lines if l]
        
        # Merge parentheses across lines
        merged_lines = []
        paren_depth = 0
        cur_paren = []
        for l in raw_lines:
            # check cleaned version
            l_clean = clean_txt(l)
            if not l_clean:
                continue
            if paren_depth > 0:
                cur_paren.append(l_clean)
                paren_depth += l_clean.count('(') - l_clean.count(')')
                if paren_depth <= 0:
                    merged_lines.append(' '.join(cur_paren))
                    paren_depth = 0
                    cur_paren = []
            else:
                if l_clean.startswith('('):
                    depth = l_clean.count('(') - l_clean.count(')')
                    if depth > 0:
                        paren_depth = depth
                        cur_paren = [l_clean]
                    else:
                        merged_lines.append(l_clean)
                else:
                    merged_lines.append(l_clean)
        if cur_paren:
            merged_lines.append(' '.join(cur_paren))
            
        for line in merged_lines:
            # Check for Act Header
            if 'ERSTER AKT' in line.upper() or 'ZWEITER AKT' in line.upper():
                continue
            
            # Check for Scene title (e.g. Erste Szene, Zweite Szene)
            if line in ['Erste Szene', 'Zweite Szene', 'Dritte Szene', 'Vierte Szene']:
                cur_scene = {
                    'sceneNumber': scene_counter,
                    'title': line,
                    'cues': []
                }
                scenes.append(cur_scene)
                scene_counter += 1
                cur_cue = None
                continue
                
            # Check for Piece / Number header: e.g. Nr.1: Duett, Nr. 6: Marsch, Introduktion
            m_nr = re.match(r'^(Nr\.\s*\d+[^:]*:\s*.*|Nr\.\s*\d+\s+.*|Introduktion)$', line)
            if m_nr:
                cur_piece = line
                cur_scene = {
                    'sceneNumber': scene_counter,
                    'title': cur_piece,
                    'cues': []
                }
                scenes.append(cur_scene)
                scene_counter += 1
                cur_cue = None
                continue
                
            # Check if line is a stage direction (in parens or starts/ends with parens)
            if line.startswith('(') and line.endswith(')'):
                stage_dir = line[1:-1].strip()
                if cur_cue and not cur_cue['lines']:
                    cur_cue['stageDirection'] = (cur_cue.get('stageDirection', '') + ' ' + stage_dir).strip()
                else:
                    if cur_scene is None:
                        cur_scene = {'sceneNumber': scene_counter, 'title': 'Scene 1', 'cues': []}
                        scenes.append(cur_scene)
                        scene_counter += 1
                    cur_cue = {
                        'id': f'a{act_num}_cue_{cue_counter}',
                        'speaker': cur_cue['speaker'] if cur_cue else 'Stage Direction',
                        'pieceTitle': cur_piece,
                        'stageDirection': stage_dir,
                        'lines': []
                    }
                    cur_scene['cues'].append(cur_cue)
                    cue_counter += 1
                continue
                
            # Check for speaker name + optional stage direction
            # e.g. JAQUINO (verliebt sich die Hände reibend) or MARZELLINE
            m_spk = re.match(r'^([A-ZÄÖÜ\s–&,-]+?)(?:\s*\((.*?)\))?$', line)
            if m_spk and m_spk.group(1).strip() in KNOWN_SPEAKERS:
                spk_name = KNOWN_SPEAKERS[m_spk.group(1).strip()]
                sdir = m_spk.group(2)
                if cur_scene is None:
                    cur_scene = {'sceneNumber': scene_counter, 'title': 'Scene 1', 'cues': []}
                    scenes.append(cur_scene)
                    scene_counter += 1
                cur_cue = {
                    'id': f'a{act_num}_cue_{cue_counter}',
                    'speaker': spk_name,
                    'pieceTitle': cur_piece,
                    'lines': []
                }
                if sdir:
                    cur_cue['stageDirection'] = sdir.strip()
                cur_scene['cues'].append(cur_cue)
                cue_counter += 1
                continue
                
            # Otherwise this line is spoken/sung dialogue or text
            if cur_scene is None:
                cur_scene = {'sceneNumber': scene_counter, 'title': 'Scene 1', 'cues': []}
                scenes.append(cur_scene)
                scene_counter += 1
            if cur_cue is None:
                cur_cue = {
                    'id': f'a{act_num}_cue_{cue_counter}',
                    'speaker': 'Narrator',
                    'pieceTitle': cur_piece,
                    'lines': []
                }
                cur_scene['cues'].append(cur_cue)
                cue_counter += 1
            
            cur_cue['lines'].append({
                'id': f'a{act_num}_l_{line_counter}',
                'original': line
            })
            line_counter += 1
            
    # Clean up empty cues
    for sc in scenes:
        sc['cues'] = [c for c in sc['cues'] if c['lines'] or c.get('stageDirection')]
        
    return scenes

sc1 = parse_fidelio_act('scripts/fidelio_act1_raw.html', 1)
sc2 = parse_fidelio_act('scripts/fidelio_act2_raw.html', 2)

l1 = sum(len(c['lines']) for sc in sc1 for c in sc['cues'])
l2 = sum(len(c['lines']) for sc in sc2 for c in sc['cues'])

print(f"Act 1: {len(sc1)} scenes, {sum(len(sc['cues']) for sc in sc1)} cues, {l1} text lines.")
print(f"Act 2: {len(sc2)} scenes, {sum(len(sc['cues']) for sc in sc2)} cues, {l2} text lines.")

for s in sc1:
    print(f"  A1 Scene {s['sceneNumber']}: {s['title']} ({len(s['cues'])} cues, {sum(len(c['lines']) for c in s['cues'])} lines)")
for s in sc2:
    print(f"  A2 Scene {s['sceneNumber']}: {s['title']} ({len(s['cues'])} cues, {sum(len(c['lines']) for c in s['cues'])} lines)")

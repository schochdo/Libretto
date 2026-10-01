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
    'PAPAGENO UND MONOSTATOS': 'Papageno & Monostatos',
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

def get_logical_lines(cell_html):
    raw_lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', cell_html) if clean_txt(l)]
    merged = []
    paren_depth = 0
    cur_paren = []
    for l in raw_lines:
        if paren_depth > 0:
            cur_paren.append(l)
            paren_depth += l.count('(') - l.count(')')
            if paren_depth <= 0:
                merged.append(' '.join(cur_paren))
                paren_depth = 0
                cur_paren = []
        else:
            if l.startswith('('):
                depth = l.count('(') - l.count(')')
                if depth > 0:
                    paren_depth = depth
                    cur_paren = [l]
                else:
                    merged.append(l)
            else:
                merged.append(l)
    if cur_paren:
        merged.append(' '.join(cur_paren))
    return merged

def match_speaker(line):
    line_clean = line.strip()
    m = re.match(r'^([A-Za-zÄÖÜäöü\s–&-]+?)(?:\s*\((.*?)\))?$', line_clean)
    if m:
        spk_candidate = m.group(1).strip().upper()
        spk_candidate = re.sub(r'[\s–-]+$', '', spk_candidate).strip()
        if spk_candidate in SPEAKERS:
            return SPEAKERS[spk_candidate], m.group(2)
    return None, None

def parse_act(start_cell, end_cell, act_num):
    scenes = []
    cur_scene = None
    cur_cue = None
    cur_piece = None
    line_counter = 1
    cue_counter = 1
    scene_num = 1
    
    for c_idx in range(start_cell, end_cell):
        cell_lines = get_logical_lines(cells[c_idx])
        for line in cell_lines:
            # Check if line indicates a new piece / number
            m_nr = re.match(r'^Nr\.\s*(\d+)\s*:\s*(.*)$', line)
            if m_nr:
                nr_title = line
                cur_piece = nr_title
                cur_scene = {
                    'sceneNumber': scene_num,
                    'title': cur_piece,
                    'cell_start': c_idx,
                    'cues': []
                }
                scenes.append(cur_scene)
                scene_num += 1
                cur_cue = None
                continue
            
            # Check if line is a stage direction
            if line.startswith('(') and line.endswith(')'):
                stage_dir = line[1:-1].strip()
                if cur_cue and not cur_cue['lines']:
                    cur_cue['stageDirection'] = (cur_cue.get('stageDirection', '') + ' ' + stage_dir).strip()
                else:
                    if cur_scene is None:
                        cur_scene = {'sceneNumber': scene_num, 'title': 'Introduction', 'cues': []}
                        scenes.append(cur_scene)
                        scene_num += 1
                    cur_cue = {
                        'id': f'a{act_num}_cue_{cue_counter}',
                        'speaker': cur_cue['speaker'] if cur_cue else 'Narrator',
                        'pieceTitle': cur_piece,
                        'stageDirection': stage_dir,
                        'lines': []
                    }
                    cur_scene['cues'].append(cur_cue)
                    cue_counter += 1
                continue
            
            # Check if line is a speaker change
            spk, sdir = match_speaker(line)
            if spk:
                if cur_scene is None:
                    cur_scene = {'sceneNumber': scene_num, 'title': 'Scene 1', 'cues': []}
                    scenes.append(cur_scene)
                    scene_num += 1
                cur_cue = {
                    'id': f'a{act_num}_cue_{cue_counter}',
                    'speaker': spk,
                    'pieceTitle': cur_piece,
                    'lines': []
                }
                if sdir:
                    cur_cue['stageDirection'] = sdir
                cur_scene['cues'].append(cur_cue)
                cue_counter += 1
                continue
            
            # Otherwise it's spoken/sung text
            if cur_scene is None:
                cur_scene = {'sceneNumber': scene_num, 'title': 'Scene 1', 'cues': []}
                scenes.append(cur_scene)
                scene_num += 1
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
            
    # Clean empty cues
    for sc in scenes:
        sc['cues'] = [c for c in sc['cues'] if c['lines'] or c.get('stageDirection')]
        
    return scenes

act1 = parse_act(6, 34, 1)
act2 = parse_act(36, 67, 2)

total_l1 = sum(len(c['lines']) for sc in act1 for c in sc['cues'])
total_l2 = sum(len(c['lines']) for sc in act2 for c in sc['cues'])

print(f"Act 1: {len(act1)} scenes, {sum(len(sc['cues']) for sc in act1)} cues, {total_l1} text lines.")
print(f"Act 2: {len(act2)} scenes, {sum(len(sc['cues']) for sc in act2)} cues, {total_l2} text lines.")

with open('scripts/zauberfloete_parsed.json', 'w', encoding='utf-8') as f:
    json.dump({'act1': act1, 'act2': act2}, f, ensure_ascii=False, indent=2)

print("Saved cleanly to scripts/zauberfloete_parsed.json")

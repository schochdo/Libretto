import re
import json
from parse_fidelio_sections import clean_txt, extract_merged_lines, a1_nums
from test_act2_sections import a2_nums

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
    'CHOR, LEONORE, MARZELLINE, FLORESTAN, DON FERNANDO, ROCCO': 'All',
    'CHOR, LEONORE, MARZELLINE': 'Chorus, Leonore & Marzelline',
    'FLORESTAN, DON FERNANDO, ROCCO': 'Florestan, Don Fernando & Rocco'
}

def parse_section_lines_fixed(raw_lines, act_num, scene_num, piece_title):
    cues = []
    cur_cue = None
    cue_idx = 1
    line_idx = 1

    for line in raw_lines:
        line_clean = line.strip()
        if not line_clean:
            continue
        if line_clean.startswith('Nr.') or line_clean == 'Introduktion' or line_clean.startswith('Erste Szene') or line_clean.startswith('Zweite Szene') or line_clean == 'Paradeplatz des Schlosses, mit der Statue des Königs':
            continue
        
        # Check if line is purely a stage direction in parens
        if line_clean.startswith('(') and line_clean.endswith(')'):
            sdir = line_clean[1:-1].strip()
            if cur_cue and not cur_cue['lines']:
                cur_cue['stageDirection'] = (cur_cue.get('stageDirection', '') + ' ' + sdir).strip()
            else:
                cur_cue = {
                    'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                    'speaker': cur_cue['speaker'] if cur_cue else 'Stage Direction',
                    'pieceTitle': piece_title,
                    'stageDirection': sdir,
                    'lines': []
                }
                cues.append(cur_cue)
                cue_idx += 1
            continue

        # Check speaker name
        m_spk = re.match(r'^([A-Za-zÄÖÜäöü\s–&,-]+?)(?:\s*\((.*?)\))?$', line_clean)
        if m_spk:
            cand = m_spk.group(1).strip().upper()
            if cand in KNOWN_SPEAKERS:
                spk_name = KNOWN_SPEAKERS[cand]
                sdir = m_spk.group(2)
                cur_cue = {
                    'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                    'speaker': spk_name,
                    'pieceTitle': piece_title,
                    'lines': []
                }
                if sdir:
                    cur_cue['stageDirection'] = sdir.strip()
                cues.append(cur_cue)
                cue_idx += 1
                continue

        # Spoken/sung text
        if cur_cue is None:
            cur_cue = {
                'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                'speaker': 'Narrator',
                'pieceTitle': piece_title,
                'lines': []
            }
            cues.append(cur_cue)
            cue_idx += 1

        cur_cue['lines'].append({
            'id': f'a{act_num}_s{scene_num}_c{cue_idx}_l{line_idx}',
            'original': line_clean
        })
        line_idx += 1

    # Clean up empty cues
    cues = [c for c in cues if c['lines'] or c.get('stageDirection')]
    return cues

# Reparse Act 1
with open('scripts/fidelio_act1_raw.html', 'r', encoding='utf-8') as f:
    h1 = f.read()

markers_a1 = [n[0] for n in a1_nums]
pos_list_a1 = [h1.find(m) for m in markers_a1]
end_act1 = h1.find('libretto by Joseph Sonnleithner', pos_list_a1[-1])

act1_scenes = []
for i in range(len(a1_nums)):
    marker, title, trans, desc_de, desc_en = a1_nums[i]
    p_start = pos_list_a1[i]
    p_end = pos_list_a1[i+1] if i + 1 < len(a1_nums) else end_act1
    chunk = h1[p_start:p_end]
    lines = extract_merged_lines(chunk)
    cues = parse_section_lines_fixed(lines, 1, i + 1, marker)
    
    # strictly unique line IDs: a1_s{sc}_c{cue}_l{line}
    for c in cues:
        cue_short_id = c['id'].split('_')[-1]
        for l_idx, l in enumerate(c['lines'], 1):
            l['id'] = f'a1_s{i+1}_{cue_short_id}_l{l_idx}'
            
    act1_scenes.append({
        'sceneNumber': i + 1,
        'title': title,
        'titleTranslation': trans,
        'originalDescription': desc_de,
        'description': desc_en,
        'cues': cues
    })

# Reparse Act 2
with open('scripts/fidelio_act2_raw.html', 'r', encoding='utf-8') as f:
    h2 = f.read()

markers_a2 = [n[0] for n in a2_nums]
pos_list_a2 = [h2.find(m) for m in markers_a2]
end_act2 = h2.find('libretto by Joseph Sonnleithner', pos_list_a2[-1])

act2_scenes = []
for i in range(len(a2_nums)):
    marker, title, trans, desc_de, desc_en = a2_nums[i]
    p_start = pos_list_a2[i]
    p_end = pos_list_a2[i+1] if i + 1 < len(a2_nums) else end_act2
    chunk = h2[p_start:p_end]
    lines = extract_merged_lines(chunk)
    cues = parse_section_lines_fixed(lines, 2, i + 1, marker)
    
    for c in cues:
        cue_short_id = c['id'].split('_')[-1]
        for l_idx, l in enumerate(c['lines'], 1):
            l['id'] = f'a2_s{i+1}_{cue_short_id}_l{l_idx}'
            
    act2_scenes.append({
        'sceneNumber': i + 1,
        'title': title,
        'titleTranslation': trans,
        'originalDescription': desc_de,
        'description': desc_en,
        'cues': cues
    })

# Validate no leaked lines
leaks = 0
for act_name, scenes in [('Act 1', act1_scenes), ('Act 2', act2_scenes)]:
    for sc in scenes:
        for c in sc['cues']:
            for l in c['lines']:
                if l['original'].upper() in KNOWN_SPEAKERS:
                    print(f'LEAK in {act_name} Sc {sc["sceneNumber"]}: {l["original"]}')
                    leaks += 1

print(f'Total leaks detected: {leaks}')

with open('scripts/fidelio_parsed.json', 'w', encoding='utf-8') as f:
    json.dump({'act1': act1_scenes, 'act2': act2_scenes}, f, ensure_ascii=False, indent=2)

print('Saved fixed scripts/fidelio_parsed.json successfully.')

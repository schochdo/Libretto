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

def parse_section_lines(raw_lines, act_num, scene_num, piece_title, cue_start_idx, line_start_idx):
    cues = []
    cur_cue = None
    cue_idx = cue_start_idx
    line_idx = line_start_idx

    for line in raw_lines:
        line_clean = line.strip()
        if not line_clean:
            continue
        # Skip piece title headers if repeated inside
        if line_clean.startswith('Nr.') or line_clean == 'Introduktion' or line_clean.startswith('Erste Szene') or line_clean.startswith('Zweite Szene'):
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

        # Check for speaker name + optional stage direction
        # e.g. JAQUINO (verliebt sich die Hände reibend) or FLORESTAN
        m_spk = re.match(r'^([A-ZÄÖÜ\s–&,-]+?)(?:\s*\((.*?)\))?$', line_clean)
        spk_candidate = m_spk.group(1).strip() if m_spk else None
        if spk_candidate and spk_candidate in KNOWN_SPEAKERS:
            spk_name = KNOWN_SPEAKERS[spk_candidate]
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

        # Otherwise spoken/sung text
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

    # Filter empty cues that have no lines and no stage directions
    cues = [c for c in cues if c['lines'] or c.get('stageDirection')]
    return cues, cue_idx, line_idx

def extract_merged_lines(html_chunk):
    raw_lines = [l.strip() for l in re.split(r'<br\s*/?>|\n', html_chunk)]
    raw_lines = [l for l in raw_lines if l]
    merged_lines = []
    paren_depth = 0
    cur_paren = []
    for l in raw_lines:
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
    return merged_lines

with open('scripts/fidelio_act1_raw.html', 'r', encoding='utf-8') as f:
    h1 = f.read()

# Numbers in Act 1:
a1_nums = [
    ('Nr.1: Duett', 'Jetzt, Schätzchen, jetzt sind wir allein (Duett)', 'Now, darling, now we are alone (Duet)',
     'Jaquino wirbt vergeblich um Marzelline, während an der Festungspforte immer wieder geklopft wird.',
     'Jaquino tries to press his suit with Marzelline, but is repeatedly interrupted by knocking at the fortress gate.'),
    ('Nr.2: Arie', 'O wär’ ich schon mit dir vereint (Arie)', 'O were I already united with you (Aria)',
     'Marzelline besingt ihre heimliche Liebe zu Fidelio und träumt von häuslichem Glück.',
     'Marzelline sings of her secret love for Fidelio and dreams of domestic bliss.'),
    ('Nr.3: Quartett', 'Mir ist so wunderbar (Kanonisches Quartett)', 'A wondrous feeling fills my heart (Canonical Quartet)',
     'Marzelline, Leonore, Rocco und Jaquino drücken im Kanon ihre widerstreitenden Gefühle und Hoffnungen aus.',
     'Marzelline, Leonore, Rocco, and Jaquino express in canon their conflicting emotions, hopes, and anxieties.'),
    ('Nr.4: Arie', 'Hat man nicht auch Gold beineben (Arie)', 'If one doesn’t have gold at hand (Aria)',
     'Rocco belehrt die Jugend pragmatisch über die unentbehrliche Notwendigkeit des Geldes für ein glückliches Leben.',
     'Rocco pragmatically lectures the young lovers on the indispensable necessity of money for happiness.'),
    ('Nr.5: Terzett', 'Gut, Söhnchen, gut (Terzett)', 'Good, little son, good (Trio)',
     'Rocco willigt in die Heirat ein und verspricht, Fidelio in die geheimen Staatskerker mitzunehmen.',
     'Rocco agrees to the match and promises to take Fidelio along into the secret subterranean dungeons.'),
    ('Nr. 6: Marsch', 'Marsch der Wache', 'March of the Guards',
     'Einzug der Wache und Gouverneur Don Pizarros.',
     'Entrance of the garrison guard and Governor Don Pizarro.'),
    ('Nr.7: Arie mit Chor', 'Ha! Welch’ ein Augenblick! (Arie mit Chor)', 'Ha! What a moment! (Aria with Chorus)',
     'Pizarro erfährt von der drohenden Ministerinspektion und beschließt die Ermordung Florestans.',
     'Pizarro learns of the impending ministerial inspection and resolves to murder Florestan immediately.'),
    ('Nr.8 Duett', 'Jetzt, Alter, jetzt hat es Eile! (Duett)', 'Now, old man, now there is haste! (Duet)',
     'Pizarro versucht vergeblich Rocco zum Mord zu dungen, befiehlt ihm aber, ein geheimes Grab zu schaufeln.',
     'Pizarro tries in vain to bribe Rocco into murder, then orders him instead to dig a secret grave.'),
    ('Nr.9: Rezitativ und Arie', 'Abscheulicher! Wo eilst du hin? (Rezitativ und Arie)', 'Monster! Where are you hurrying? (Recitative and Aria)',
     'Leonore belauscht das Komplott, verflucht den Tyrannen und schöpft neue Hoffnung aus der Kraft der Gattentreue.',
     'Leonore overhears the plot, curses the tyrant, and summons courage from her heroic wifely devotion.'),
    ('Nr.10: Finale', 'O welche Lust! (Finale I)', 'O what joy! (Finale I)',
     'Auf Leonores Bitten dürfen die Gefangenen kurz ins Freie treten; Pizarro befiehlt zornig ihre Rückkehr.',
     'At Leonore’s urging, the prisoners are granted a brief moment in the open air; Pizarro angrily orders them locked back away.')
]

# Find boundaries
a1_scenes = []
# Start of Act 1 text
start_act1 = h1.find('ERSTER AKT')
# Let's find each marker pos
markers = [n[0] for n in a1_nums]
pos_list = [h1.find(m) for m in markers]
# The dialogue before Nr.1 starts after setting description in row 2
# Let's see: row 2 has the setting, and (Marzelline plättet Wäsche...). Row 3 starts with Nr.1: Duett.
# So Scene 1 actually starts right at Nr.1: Duett!
end_act1 = h1.find('libretto by Joseph Sonnleithner', pos_list[-1])

for i in range(len(a1_nums)):
    marker, title, trans, desc_de, desc_en = a1_nums[i]
    p_start = pos_list[i]
    p_end = pos_list[i+1] if i + 1 < len(a1_nums) else end_act1
    chunk = h1[p_start:p_end]
    lines = extract_merged_lines(chunk)
    cues, _, _ = parse_section_lines(lines, 1, i + 1, marker, 1, 1)
    # Ensure line IDs are strictly unique per line
    l_count = 1
    for c in cues:
        for l in c['lines']:
            l['id'] = f'a1_s{i+1}_{c["id"].split("_")[-1]}_l{l_count}'
            l_count += 1
    
    a1_scenes.append({
        'sceneNumber': i + 1,
        'title': title,
        'titleTranslation': trans,
        'originalDescription': desc_de,
        'description': desc_en,
        'cues': cues
    })

print('=== ACT 1 SCENES SUMMARY ===')
for sc in a1_scenes:
    total_l = sum(len(c['lines']) for c in sc['cues'])
    print(f"Scene {sc['sceneNumber']}: {sc['title']} -> {len(sc['cues'])} cues, {total_l} lines")


import re
import json
from parse_falstaff_full import clean_txt, KNOWN_SPEAKERS, PART_META, extract_merged_lines

SET_PIECES_BY_LINE = {
    # Act 1 Scene 1
    "Ladri! Voi state ligi all'onor vostro, voi!": "L'onore! Ladri! (Monologo dell'onore)",
    "Può l'onore riempirvi la pancia?": "L'onore! Ladri! (Monologo dell'onore)",
    "No. Può l'onor rimettervi uno stinco? Non può.": "L'onore! Ladri! (Monologo dell'onore)",
    "L'onor non è chirurgo. Ch'è dunque? Una parola.": "L'onore! Ladri! (Monologo dell'onore)",
    "Bel costrutto! L'onore lo può sentire chi è morto?": "L'onore! Ladri! (Monologo dell'onore)",
    "Ladri! Via! Via di qua! Via di qua! Via di qua!": "L'onore! Ladri! (Monologo dell'onore)",
    
    # Act 2 Scene 1
    "È sogno o realtà?... Due rami enormi": "È sogno? o realtà? (Monologo di Ford)",
    
    # Act 2 Scene 2
    "Quand'ero paggio": "Quand'ero paggio del Duca di Norfolk",
    
    # Act 3 Scene 1
    "Ehi taverniere!": "Ehi! Taverniere! (Mondo ladro)",
    
    # Act 3 Scene 2
    "Dal labbro il canto estasiato vola": "Dal labbro il canto estasiato vola (Sonetto)",
    "Sul fil d'un soffio etesio": "Sul fil d'un soffio etesio (Canzone delle fate)",
    "Tutto nel mondo è burla.": "Tutto nel mondo è burla (Fuga finale)"
}

def parse_falstaff_cues_clean(lines, act_num, scene_num):
    # Find the index of the first real speaker
    first_spk_idx = 0
    for i, l in enumerate(lines):
        m_spk = re.match(r'^([A-ZÀÈÉÌÒÙa-zàèéìòù\s–&,\.\'-]+?)(?:\s*\((.*?)\))?$', l)
        cand = m_spk.group(1).strip().upper() if m_spk else None
        if cand and cand in KNOWN_SPEAKERS:
            first_spk_idx = i
            break
            
    cues = []
    cur_cue = None
    cue_idx = 1
    current_piece = None
    
    for l in lines[first_spk_idx:]:
        if not l or l.startswith('Parte prima') or l.startswith('Parte seconda') or l.startswith('ATTO') or l.startswith('libretto by') or l.startswith('Personaggi'):
            continue
            
        if l.startswith('(') and l.endswith(')'):
            sdir = l[1:-1].strip()
            if cur_cue and not cur_cue['lines']:
                cur_cue['stageDirection'] = (cur_cue.get('stageDirection', '') + ' ' + sdir).strip()
            else:
                cur_cue = {
                    'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                    'speaker': cur_cue['speaker'] if cur_cue else 'Stage Direction',
                    'stageDirection': sdir,
                    'lines': []
                }
                cues.append(cur_cue)
                cue_idx += 1
            continue
            
        m_spk = re.match(r'^([A-ZÀÈÉÌÒÙa-zàèéìòù\s–&,\.\'-]+?)(?:\s*\((.*?)\))?$', l)
        cand = m_spk.group(1).strip().upper() if m_spk else None
        if cand and cand in KNOWN_SPEAKERS:
            spk = KNOWN_SPEAKERS[cand]
            sdir = m_spk.group(2)
            cur_cue = {
                'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                'speaker': spk,
                'lines': []
            }
            if sdir:
                cur_cue['stageDirection'] = sdir.strip()
            cues.append(cur_cue)
            cue_idx += 1
            continue
            
        # Text line
        if cur_cue is None:
            cur_cue = {
                'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                'speaker': 'Stage Direction',
                'lines': []
            }
            cues.append(cur_cue)
            cue_idx += 1
            
        # Check piece title
        for key_text, pt in SET_PIECES_BY_LINE.items():
            if key_text in l:
                cur_cue['pieceTitle'] = pt
                break
                
        cur_cue['lines'].append({
            'id': f'a{act_num}_s{scene_num}_{cur_cue["id"].split("_")[-1]}_l{len(cur_cue["lines"]) + 1}',
            'original': l
        })
        
    cues = [c for c in cues if c['lines'] or c.get('stageDirection')]
    return cues

# Test Act 1 Scene 1
with open('scripts/falstaff_act1_raw.html') as f:
    html = f.read()
p1 = html.find('Parte prima')
p2 = html.find('Parte seconda')
lines1 = extract_merged_lines(html[p1:p2])
cues1 = parse_falstaff_cues_clean(lines1, 1, 1)

print(f"Act 1 Scene 1 cues: {len(cues1)}")
print("First cue:", cues1[0]['speaker'], cues1[0].get('pieceTitle'), [l['original'] for l in cues1[0]['lines']])
print("Second cue:", cues1[1]['speaker'], cues1[1].get('pieceTitle'), [l['original'] for l in cues1[1]['lines']])

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
    'FALSTAFF': 'Sir John Falstaff',
    'ALICE': 'Alice Ford',
    'FORD': 'Ford',
    'NANNETTA': 'Nannetta',
    'FENTON': 'Fenton',
    'QUICKLY': 'Mrs. Quickly',
    'MRS. QUICKLY': 'Mrs. Quickly',
    'MEG': 'Meg Page',
    'DR. CAJUS': 'Dr. Caius',
    'DR. CAIUS': 'Dr. Caius',
    'CAJUS': 'Dr. Caius',
    'CAIUS': 'Dr. Caius',
    'BARDOLFO': 'Bardolfo',
    'PISTOLA': 'Pistola',
    'BARDOLFO E PISTOLA': 'Bardolfo & Pistola',
    'ALICE E MEG': 'Alice & Meg',
    'ALICE, MEG E QUICKLY': 'Alice, Meg & Quickly',
    'ALICE, MEG, QUICKLY E NANNETTA': 'The Women',
    'ALICE, MEG, NANNETTA': 'Alice, Meg & Nannetta',
    'ALICE, NANNETTA E FENTON': 'Alice, Nannetta & Fenton',
    'ALICE, NANNETTA E MEG': 'Alice, Nannetta & Meg',
    'ALICE, QUICKLY, MEG': 'Alice, Quickly & Meg',
    'MEG E QUICKLY': 'Meg & Quickly',
    'DR. CAJUS, FORD, BARDOLFO E PISTOLA': 'The Men',
    'CORO': 'Chorus',
    'TUTTI': 'All'
}

PART_META = {
    1: [
        {
            "sceneNumber": 1,
            "title": "Parte I: L’onore! Ladri! (Nell'Osteria della Giarrettiera)",
            "titleTranslation": "Part I: Honor! Thieves! (In the Garter Inn)",
            "originalDescription": "L’interno dell’«Osteria della Giarrettiera». Una tavola, un gran seggiolone, una panca. Sulla tavola i resti di un gran desinare, parecchie bottiglie e un bicchiere. Calamaio, penne, carta, una candela accesa. Falstaff sta seduto alla tavola; il Dr. Cajus entra infuriato accusando Bardolfo e Pistola.",
            "description": "The interior of the Garter Inn. Sir John Falstaff sits in his great armchair surrounded by wine bottles. Dr. Caius enters furiously accusing Falstaff's knavish followers of theft, after which Falstaff sends love letters to Alice and Meg and delivers his celebrated monologue on honor."
        },
        {
            "sceneNumber": 2,
            "title": "Parte II: Alice. Meg. Nannetta. (Nel giardino di Ford)",
            "titleTranslation": "Part II: Alice. Meg. Nannetta. (In Ford's Garden)",
            "originalDescription": "Giardino. A sinistra la casa di Ford. Gruppi d’alberi nel centro della scena. Alice, Meg, Mrs. Quickly e Nannetta scoprono le lettere d’amore identiche di Falstaff; Fenton e Nannetta si scambiano furtivi baci mentre gli uomini tramano la loro vendetta.",
            "description": "Garden outside Ford's house. Alice and Meg discover that Falstaff sent them word-for-word identical love letters and resolve to punish him. Meanwhile, Fenton and Nannetta snatch sweet kisses, and Ford plots to spy on the knight in disguise."
        }
    ],
    2: [
        {
            "sceneNumber": 1,
            "title": "Parte I: Reverenza! (Nell'Osteria: Quickly e Signor Fontana)",
            "titleTranslation": "Part I: Reverence! (In the Inn: Quickly and Signor Fontana)",
            "originalDescription": "L’interno dell’«Osteria della Giarrettiera». Mrs. Quickly si presenta a Falstaff annunciando l’appuntamento con Alice dalle due alle tre. Poco dopo entra Ford travestito sotto il nome di Signor Fontana.",
            "description": "The Garter Inn. Mrs. Quickly arrives with grand courtesies to deliver Alice's secret invitation. Soon after, Ford enters disguised as 'Signor Fontana,' hiring Falstaff with a purse of gold to seduce his own wife."
        },
        {
            "sceneNumber": 2,
            "title": "Parte II: C'è. C'è. Sì, sì. (In casa di Ford: Il cesto della biancheria)",
            "titleTranslation": "Part II: There. There. Yes, yes. (In Ford's House: The Laundry Basket)",
            "originalDescription": "Una sala nella casa di Ford con grande finestra sul Tamigi. Falstaff corteggia Alice rievocando la sua giovinezza snella, finché l’irruzione di Ford costringe le comari a nasconderlo nel cesto della biancheria sporca per gettarlo nel fiume.",
            "description": "A hall in Ford's house overlooking the Thames. Falstaff woos Alice with recollections of his slender youth ('Quand'ero paggio'). When the jealous Ford storms the house, Falstaff is crammed into a dirty laundry basket and dumped out the window into the river."
        }
    ],
    3: [
        {
            "sceneNumber": 1,
            "title": "Parte I: Ehi! Taverniere! (Esterno dell'osteria: Il piano della Quercia di Herne)",
            "titleTranslation": "Part I: Hey! Tavernkeeper! (Outside the Inn: The Plot of Herne's Oak)",
            "originalDescription": "Un piazzale all’esterno dell’Osteria della Giarrettiera al tramonto. Falstaff esce dal Tamigi fradicio e beve vino caldo. Alice, Ford e le comari organizzano la mascherata notturna delle fate e dei folletti alla Quercia di Herne.",
            "description": "A square outside the Garter Inn at sunset. A soaked Falstaff curses the world until warm mulled wine revives his spirits. Quickly and the merry wives convince him to meet them at midnight in Windsor Forest disguised as the Black Huntsman."
        },
        {
            "sceneNumber": 2,
            "title": "Parte II: Ninfe! Elfi! Silfi! (Il Parco di Windsor e la Fuga finale)",
            "titleTranslation": "Part II: Nymphs! Elves! Sylphs! (Windsor Park and Final Fugue)",
            "originalDescription": "Il parco di Windsor di notte sotto la grande Quercia di Herne. Falstaff appare con le corna di cervo. Fate e folletti lo tormentano e lo pizzicano. Svelata la burla e celebrati i matrimoni, Falstaff intona la grandiosa fuga 'Tutto nel mondo è burla'.",
            "description": "Windsor Forest at midnight by Herne's Oak. Falstaff arrives wearing stag antlers and is pinched and teased by the townspeople disguised as spirits. When the jest is exposed, Ford is duped into blessing Fenton and Nannetta's wedding, and Falstaff leads the brilliant final fugue: 'All the world's a jest!'"
        }
    ]
}

def extract_merged_lines(html_chunk):
    raw_lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', html_chunk)]
    raw_lines = [l for l in raw_lines if l]
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

def parse_falstaff_cues(lines, act_num, scene_num):
    # Find the index of the first real speaker to skip stage/scene introduction lines
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
            
        # Check speaker name
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
            
        # Otherwise spoken/sung text line
        if cur_cue is None:
            cur_cue = {
                'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                'speaker': 'Stage Direction',
                'lines': []
            }
            cues.append(cur_cue)
            cue_idx += 1
            
        # Populate pieceTitle only on canonical set pieces
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

# Parse each act
parsed_falstaff = {}
for act_num in [1, 2, 3]:
    with open(f'scripts/falstaff_act{act_num}_raw.html', 'r', encoding='utf-8') as f:
        html = f.read()
        
    p1 = html.find('Parte prima')
    p2 = html.find('Parte seconda')
    m_end = re.search(r'libretto by', html, re.IGNORECASE)
    p_end = m_end.start() if m_end else len(html)
    
    parts_data = [
        (1, html[p1:p2]),
        (2, html[p2:p_end])
    ]
    
    act_scenes = []
    for sc_num, chunk in parts_data:
        lines = extract_merged_lines(chunk)
        meta = PART_META[act_num][sc_num - 1]
        cues = parse_falstaff_cues(lines, act_num, sc_num)
        act_scenes.append({
            'sceneNumber': sc_num,
            'title': meta['title'],
            'titleTranslation': meta['titleTranslation'],
            'originalDescription': meta['originalDescription'],
            'description': meta['description'],
            'cues': cues
        })
        
    parsed_falstaff[f'act{act_num}'] = act_scenes

with open('scripts/falstaff_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_falstaff, f, ensure_ascii=False, indent=2)

print("Parsed Falstaff successfully:")
for act_num in [1, 2, 3]:
    scs = parsed_falstaff[f'act{act_num}']
    total_l = sum(len(c['lines']) for sc in scs for c in sc['cues'])
    print(f"  Act {act_num}: {len(scs)} scenes, {sum(len(sc['cues']) for sc in scs)} cues, {total_l} lines.")


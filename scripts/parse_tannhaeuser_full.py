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
    'TANNHÄUSER': 'Tannhäuser',
    'VENUS': 'Venus',
    'ELISABETH': 'Elisabeth',
    'WOLFRAM': 'Wolfram von Eschenbach',
    'LANDGRAF': 'Landgraf Hermann',
    'DER LANDGRAF': 'Landgraf Hermann',
    'WALTHER': 'Walther von der Vogelweide',
    'BITEROLF': 'Biterolf',
    'DER HIRT': 'Young Shepherd',
    'CHOR DER SIRENEN': 'Chorus of Sirens',
    'CHOR DER ÄLTEREN PILGER': 'Older Pilgrims',
    'DIE ÄLTERE PILGER': 'Older Pilgrims',
    'DIE PILGER': 'Pilgrims',
    'CHOR DER JÜNGEREN PILGER': 'Younger Pilgrims',
    'CHOR DER JÜNGERE PILGER': 'Younger Pilgrims',
    'DIE JÜNGERE PILGER': 'Younger Pilgrims',
    'VIER EDELKNABEN': 'Four Pages',
    'CHOR DER RITTER': 'Knights',
    'DIE RITTER': 'Knights',
    'CHOR DER EDELFRAUEN': 'Noblewomen',
    'CHOR DER RITTER UND FRAUEN': 'Knights and Ladies',
    'CHOR DER RITTER UND EDLEN': 'Knights and Nobles',
    'DIE SÄNGER': 'Minstrels',
    'DIE SÄNGER AUSSER WOLFRAM': 'Minstrels (except Wolfram)',
    'DIE ANDERN SÄNGER AUSSER WOLFRAM': 'The Other Minstrels (except Wolfram)',
    'DER LANDGRAF UND DIE SÄNGER AUSSER BITEROLF': 'Landgrave and Minstrels (except Biterolf)',
    'DER LANDGRAF. DIE SÄNGER. CHOR DER RITTER': 'Landgrave, Minstrels & Knights',
    'DER LANDGRAF UND DIE SÄNGER': 'Landgrave and Minstrels',
    'LANDGRAF UND DIE SÄNGER': 'Landgrave and Minstrels',
    'CHOR': 'Chorus',
    'MÄNNERCHOR': 'Men\'s Chorus',
    'ALLE': 'All',
    'WALTHER, HEINRICH DER SCHREIBER,': 'Minstrels',
    'WALTHER, HEINRICH DER SCHREIBER, BITEROLF, REINMAR': 'Minstrels',
    'WALTHER, HEINRICH DER SCHREIBER, BITEROLF, REINMAR, MÄNNERCHOR': 'Minstrels and Men\'s Chorus',
    'WOLFRAM, BITEROLF, REINMAR, DER LANDGRAF, DIE RITTER UND DIE ÄLTEREN PILGER': 'All'
}

SCENE_META = {
    1: [
        {
            "sceneNumber": 1,
            "title": "Im Venusberg (Bacchanal und Sirenenchor)",
            "titleTranslation": "In the Venusberg (Bacchanale and Chorus of Sirens)",
            "originalDescription": "Das Innere des Hörselberges (der Venusberg) bei Eisenach. Eine weite Grotte, welche sich nach rechts im Bogen zu verlieren scheint. Reizende Liebespaare, Nymphen, Sirenen und Bacchantinnen umringen das Lager der Venus und Tannhäusers.",
            "description": "The subterranean grotto of Venusberg within the Hörselberg. Sirens and bacchantes revel in an intoxicating bacchanal while Venus reclines beside the mortal knight Tannhäuser."
        },
        {
            "sceneNumber": 2,
            "title": "Geliebter, sag', wo weilt dein Sinn? (Tannhäuser und Venus)",
            "titleTranslation": "Beloved, say, where dwells your mind? (Tannhäuser and Venus)",
            "originalDescription": "Tannhäuser erwacht wie aus einem Traume. Sehnsucht nach der sterblichen Welt, dem Frühling und den Glockenklängen der Erde treibt ihn an, Venus trotz aller Verlockungen zu entsagen.",
            "description": "Tannhäuser awakens with heavy heart, pining for the fresh air, birdsong, and mortal joys of earth. Despite Venus's seductive entreaties and wrath, he invokes the Virgin Mary and the spell breaks."
        },
        {
            "sceneNumber": 3,
            "title": "Frau Holda kam aus dem Berg hervor (Ein junger Hirt)",
            "titleTranslation": "Lady Holda came forth from the mountain (A Young Shepherd)",
            "originalDescription": "Ein schönes Tal vor der Wartburg. Links der Hörselberg, rechts der Weg zur Wartburg. Ein junger Hirt sitzt auf einem Felsen und bläst die Schalmei; ein Zug älterer Pilger zieht vorüber nach Rom.",
            "description": "In a sunny valley below the Wartburg, a young shepherd plays his shawm. Older pilgrims on their journey to Rome pass by, moving Tannhäuser to fervent tears of repentance."
        },
        {
            "sceneNumber": 4,
            "title": "Wer ist der Dort in brünstigem Gebet? (Die Jagdgesellschaft)",
            "titleTranslation": "Who is that there in fervent prayer? (The Hunting Party)",
            "originalDescription": "Waldhörner tönen von der Höhe. Landgraf Hermann und die Sängerritter Wolfram, Walther, Biterolf kehren von der Jagd zurück, erkennen Heinrich und heißen ihn im Namen Elisabeths willkommen.",
            "description": "Hunting horns announce Landgrave Hermann and the minstrel-knights. Wolfram invokes the name of Princess Elisabeth, convincing Heinrich to return to the Wartburg."
        }
    ],
    2: [
        {
            "sceneNumber": 1,
            "title": "Dich, teure Halle, grüß' ich wieder (Elisabeths Hallenarie)",
            "titleTranslation": "You, dear hall, greet I again (Elisabeth's Hall Aria)",
            "originalDescription": "Die Sängersaal auf der Wartburg. Elisabeth tritt freudig bewegt ein und begrüßt die teure Halle, die sie seit Heinrichs Fortgang gemieden hatte.",
            "description": "In the great Minstrels' Hall of the Wartburg, Elisabeth joyfully greets the hall that has remained deserted and mournful since Tannhäuser's departure."
        },
        {
            "sceneNumber": 2,
            "title": "Dort ist sie; nahe dich ihr ungestört! (Heinrich und Elisabeth)",
            "titleTranslation": "There is she; approach her undisturbed! (Heinrich and Elisabeth)",
            "originalDescription": "Wolfram führt Tannhäuser zu Elisabeth. In schüchterner Seligkeit gestehen beide einander ihre wiedererwachte Liebe.",
            "description": "Wolfram brings Heinrich before Elisabeth. The two lovers are rapturously reunited, praising the divine grace that brought Heinrich back."
        },
        {
            "sceneNumber": 3,
            "title": "Dich treff' ich hier in dieser Halle? (Landgraf und Elisabeth)",
            "titleTranslation": "You find I here in this hall? (Landgrave and Elisabeth)",
            "originalDescription": "Landgraf Hermann tritt ein, erfreut über Elisabeths Genesung, und kündigt den festlichen Sängerwettstreit vor den Fürsten und Rittern an.",
            "description": "Landgrave Hermann arrives, delighted to see Elisabeth radiant once more, and prepares to welcome the noble guests to the Tournament of Song."
        },
        {
            "sceneNumber": 4,
            "title": "Freudig begrüßen wir die edle Halle (Der Sängerkrieg auf Wartburg)",
            "titleTranslation": "Joyfully greet we the noble hall (The Contest of Song on Wartburg)",
            "originalDescription": "Feierlicher Einzug der Gäste. Wolfram, Walther und Biterolf besingen die reine, keusche Minne. Tannhäuser verfällt in Rausch und preist wild die Göttin Venus. Elisabeth rettet ihn vor den Schwertern der Ritter.",
            "description": "The guests enter in grand procession. When the minstrels praise pure, chaste love, Tannhäuser scandalizes the court by glorifying Venus. Elisabeth shields Heinrich from execution and urges him to seek papal absolution in Rome."
        }
    ],
    3: [
        {
            "sceneNumber": 1,
            "title": "Wohl wußt' ich hier sie im Gebet zu finden (Wolfram und Elisabeth)",
            "titleTranslation": "Well knew I here her in prayer to find (Wolfram and Elisabeth)",
            "originalDescription": "Tal vor der Wartburg gegen Abend. Elisabeth betet vor dem Marienbild. Der Zug der aus Rom begnadigt heimkehrenden Pilger zieht vorüber, doch Heinrich ist nicht unter ihnen. Elisabeth weiht ihr Leben der Jungfrau Maria.",
            "description": "At twilight in the valley, Elisabeth kneels before a shrine of the Virgin. Returning pilgrims pass by, but Heinrich is not among them. Broken-hearted, Elisabeth offers her life for his soul."
        },
        {
            "sceneNumber": 2,
            "title": "O du, mein holder Abendstern (Wolframs Lied an den Abendstern)",
            "titleTranslation": "O you, my lovely evening star (Wolfram's Song to the Evening Star)",
            "originalDescription": "Wolfram bleibt allein in der dämmernden Nacht zurück, stimmt seine Harfe und singt sein berühmtes Lied an den Abendstern als Geleit für Elisabeths scheidende Seele.",
            "description": "Alone under the evening sky, Wolfram tunes his harp and sings his sublime hymn to the evening star, anticipating Elisabeth's transfiguration."
        },
        {
            "sceneNumber": 3,
            "title": "Ich hörte Harfenschlag, wie klang er traurig! (Romerzählung und Erlösung)",
            "titleTranslation": "I heard harp-strumming, how sounded it mournful! (Rome Narrative and Redemption)",
            "originalDescription": "Tannhäuser erscheint in zerlumptem Pilgergewande, berichtet von der Verdammnis durch den Papst und ruft verzweifelt Venus zurück. Wolfram nennt Elisabeths Namen; der Leichenzug Elisabeths naht, Tannhäuser sinkt sterbend nieder, und junge Pilger verkünden das Wunder des ergrünten Stabes.",
            "description": "A ragged Tannhäuser returns from Rome, recounting the Pope's curse. As Venus re-emerges to reclaim him, Wolfram invokes Elisabeth. Heinrich falls dying beside Elisabeth's bier as young pilgrims arrive bearing the Pope's miraculously blooming staff."
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

def parse_scene_cues(lines, act_num, scene_num, piece_title):
    cues = []
    cur_cue = None
    cue_idx = 1
    
    for l in lines:
        if not l or l.startswith('Erste Szene') or l.startswith('Zweite Szene') or l.startswith('Dritte Szene') or l.startswith('Vierte Szene') or l.startswith('ERSTER') or l.startswith('ZWEITER') or l.startswith('DRITTER'):
            continue
            
        if l.startswith('(') and l.endswith(')'):
            sdir = l[1:-1].strip()
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
            
        m_spk = re.match(r'^([A-ZÄÖÜa-zäöü\s–&,\.\'-]+?)(?:\s*\((.*?)\))?$', l)
        cand = m_spk.group(1).strip().upper() if m_spk else None
        cand_norm = re.sub(r'\s+', ' ', cand) if cand else ''
        if cand_norm and cand_norm in KNOWN_SPEAKERS:
            spk = KNOWN_SPEAKERS[cand_norm]
            sdir = m_spk.group(2)
            cur_cue = {
                'id': f'a{act_num}_s{scene_num}_c{cue_idx}',
                'speaker': spk,
                'pieceTitle': piece_title,
                'lines': []
            }
            if sdir:
                cur_cue['stageDirection'] = sdir.strip()
            cues.append(cur_cue)
            cue_idx += 1
            continue
            
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
            'id': f'a{act_num}_s{scene_num}_{cur_cue["id"].split("_")[-1]}_l{len(cur_cue["lines"]) + 1}',
            'original': l
        })
        
    cues = [c for c in cues if c['lines'] or c.get('stageDirection')]
    return cues

# Parse the opera
with open('scripts/tannhaeuser_raw.html', 'r', encoding='utf-8') as f:
    html = f.read()

p_act1 = html.find('ERSTER AUFZUG')
p_act2 = html.find('ZWEITER AUFZUG')
p_act3 = html.find('DRITTER AUFZUG')
m_end = re.search(r'libretto by', html, re.IGNORECASE)
p_end = m_end.start() if m_end else len(html)

act_chunks = [
    (1, html[p_act1:p_act2]),
    (2, html[p_act2:p_act3]),
    (3, html[p_act3:p_end])
]

parsed_opera = {}
for act_num, chunk in act_chunks:
    scene_matches = list(re.finditer(r'(Erste Szene|Zweite Szene|Dritte Szene|Vierte Szene)', chunk))
    act_scenes = []
    for s_idx, sm in enumerate(scene_matches):
        s_num = s_idx + 1
        s_start = sm.start()
        s_end = scene_matches[s_idx+1].start() if s_idx + 1 < len(scene_matches) else len(chunk)
        sc_chunk = chunk[s_start:s_end]
        lines = extract_merged_lines(sc_chunk)
        meta = SCENE_META[act_num][s_idx]
        cues = parse_scene_cues(lines, act_num, s_num, meta['title'])
        act_scenes.append({
            'sceneNumber': s_num,
            'title': meta['title'],
            'titleTranslation': meta['titleTranslation'],
            'originalDescription': meta['originalDescription'],
            'description': meta['description'],
            'cues': cues
        })
    parsed_opera[f'act{act_num}'] = act_scenes

with open('scripts/tannhaeuser_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(parsed_opera, f, ensure_ascii=False, indent=2)

print("Parsed Tannhäuser successfully:")
for act_num in [1, 2, 3]:
    scs = parsed_opera[f'act{act_num}']
    total_l = sum(len(c['lines']) for sc in scs for c in sc['cues'])
    print(f"  Act {act_num}: {len(scs)} scenes, {sum(len(sc['cues']) for sc in scs)} cues, {total_l} lines.")

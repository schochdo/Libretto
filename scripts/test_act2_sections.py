import re
from parse_fidelio_sections import clean_txt, KNOWN_SPEAKERS, extract_merged_lines, parse_section_lines

with open('scripts/fidelio_act2_raw.html', 'r', encoding='utf-8') as f:
    h2 = f.read()

a2_nums = [
    ('Nr.11: Introduktion und Arie', 'Gott! Welch Dunkel hier! (Introduktion und Arie)', 'God! What darkness here! (Introduction and Aria)',
     'Florestan beklagt in Ketten seine schwere Prüfung, tröstet sich jedoch mit seinem pflichtbewussten Handeln und hat eine Vision von Leonore als Engel.',
     'Florestan laments in chains his grievous ordeal, consoling himself with duty faithfully performed, and envisions Leonore as an angel of freedom.'),
    ('Nr.12: Melodram und Duett', 'Nur spute dich, nur frisch gegraben (Melodram und Duett)', 'Just hurry, dig briskly (Melodrama and Duet)',
     'Rocco und die als Fidelio verkleidete Leonore steigen in das Verlies hinab und heben ein Grab in der alten Zisterne aus.',
     'Rocco and Leonore (disguised as Fidelio) descend into the vault and dig a grave in the disused cistern.'),
    ('Nr.13: Terzett', 'Euch werde Lohn in bessern Welten (Terzett)', 'May reward be yours in better worlds (Trio)',
     'Florestan erwacht; Leonore reicht ihm unter Tränen einen Schluck Wein und ein Stück Brot.',
     'Florestan awakens; Leonore, weeping, offers him a sip of wine and a crust of bread.'),
    ('Nr.14: Quartett', 'Er sterbe! Doch er soll erst wissen (Quartett)', 'Let him die! But first he shall know (Quartet)',
     'Pizarro dringt ein, um Florestan zu erdolchen; Leonore wirft sich schützend dazwischen und zieht eine Pistole.',
     'Pizarro enters to dagger Florestan; Leonore throws herself between them, revealing her identity at pistol-point.'),
    ('Nr.15: Duett', 'O namenlose Freude! (Duett)', 'O nameless joy! (Duet)',
     'Trompetenfanfaren künden die Ankunft des Ministers an; Leonore und Florestan fallen sich überglücklich in die Arme.',
     'Trumpet fanfares herald the Minister\'s arrival; Leonore and Florestan fall into each other’s arms in ecstatic embrace.'),
    ('Nr.16: Finale', 'Heil sei dem Tag, heil sei der Stunde! (Finale II)', 'Hail to the day, hail to the hour! (Finale II)',
     'Auf dem Schloßplatz verkündet Minister Don Fernando Freiheit und Gerechtigkeit; Leonore löst persönlich Florestans Ketten.',
     'In the castle square, Minister Don Fernando proclaims freedom and justice; Leonore personally unlocks Florestan\'s chains.')
]

markers = [n[0] for n in a2_nums]
pos_list = [h2.find(m) for m in markers]
end_act2 = h2.find('libretto by Joseph Sonnleithner', pos_list[-1])

a2_scenes = []
for i in range(len(a2_nums)):
    marker, title, trans, desc_de, desc_en = a2_nums[i]
    p_start = pos_list[i]
    p_end = pos_list[i+1] if i + 1 < len(a2_nums) else end_act2
    chunk = h2[p_start:p_end]
    lines = extract_merged_lines(chunk)
    cues, _, _ = parse_section_lines(lines, 2, i + 1, marker, 1, 1)
    l_count = 1
    for c in cues:
        for l in c['lines']:
            l['id'] = f'a2_s{i+1}_{c["id"].split("_")[-1]}_l{l_count}'
            l_count += 1
    
    a2_scenes.append({
        'sceneNumber': i + 1,
        'title': title,
        'titleTranslation': trans,
        'originalDescription': desc_de,
        'description': desc_en,
        'cues': cues
    })

print('=== ACT 2 SCENES SUMMARY ===')
for sc in a2_scenes:
    total_l = sum(len(c['lines']) for c in sc['cues'])
    print(f"Scene {sc['sceneNumber']}: {sc['title']} -> {len(sc['cues'])} cues, {total_l} lines")


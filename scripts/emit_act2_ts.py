import json
import sys
sys.path.insert(0, '.')
from scripts.make_act2_partA import TRANS_ACT2_A
from scripts.make_act2_partB import TRANS_ACT2_B
from scripts.build_stage_direction_translations import STAGE_DIR_TRANS

TRANS_ACT2 = {}
TRANS_ACT2.update(TRANS_ACT2_A)
TRANS_ACT2.update(TRANS_ACT2_B)

with open('scripts/zauberfloete_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

act2_raw_scenes = data['act2']

scenes_out = []

# Scene 1: Marsch der Priester (raw scene 0) + Arie und Chor (raw scene 1)
s1_cues = []
if act2_raw_scenes[0]['cues']:
    for c in act2_raw_scenes[0]['cues']:
        s1_cues.append(c)
for c in act2_raw_scenes[1]['cues']:
    s1_cues.append(c)

scenes_out.append({
    "sceneNumber": 1,
    "title": "O Isis und Osiris (Marsch der Priester & Arie mit Chor)",
    "titleTranslation": "O Isis and Osiris (March of the Priests & Aria with Chorus)",
    "originalDescription": "Ein Palmenwald; alle Bäume sind von Silber, die Blätter von Gold. Sarastro und die Priester ziehen feierlich ein. Sarastro fleht die Götter um Weisheit und Schutz für das neue Paar an.",
    "description": "A grove of silver palms with leaves of gold. Sarastro and the priests enter in solemn procession. Sarastro offers a prayer to Isis and Osiris for wisdom and fortitude on behalf of Tamino and Pamina.",
    "cues": s1_cues
})

# Scene 2: Nr. 11 Duett
scenes_out.append({
    "sceneNumber": 2,
    "title": "Bewahret euch vor Weibertücken (Duett)",
    "titleTranslation": "Guard yourselves against women's-wiles (Duet)",
    "originalDescription": "Nacht. Der Vorhof des Tempels. Zwei Priester ermahnen Tamino und Papageno, standhaft zu bleiben und ihr Schweigegelübde zu wahren.",
    "description": "Night in the temple forecourt. Two Priests admonish Tamino and Papageno to remain silent and steadfast against the trials and temptations ahead.",
    "cues": act2_raw_scenes[2]['cues']
})

# Scene 3: Nr. 12 Quintett
scenes_out.append({
    "sceneNumber": 3,
    "title": "Wie? wie? wie? ihr an diesem Schreckensort? (Quintett)",
    "titleTranslation": "How? How? How? You at this place-of-terror? (Quintet)",
    "originalDescription": "Die drei Damen erscheinen im Hof und versuchen Tamino und Papageno einzuschüchtern.",
    "description": "The Three Ladies appear in the darkness, seeking to terrify the initiates and break their vow of silence, but Tamino remains resolute and restrains Papageno.",
    "cues": act2_raw_scenes[3]['cues']
})

# Scene 4: Nr. 13 Arie
scenes_out.append({
    "sceneNumber": 4,
    "title": "Alles fühlt der Liebe Freuden (Arie)",
    "titleTranslation": "Everything feels the joys of love (Aria)",
    "originalDescription": "Ein Garten. Pamina schläft im Mondschein. Monostatos schleicht sich heran.",
    "description": "In a moonlit garden, Pamina sleeps upon a bench of roses. Monostatos approaches stealthily, singing of his desire to taste the joys of love that all nature shares.",
    "cues": act2_raw_scenes[4]['cues']
})

# Scene 5: Nr. 14 Arie
scenes_out.append({
    "sceneNumber": 5,
    "title": "Der Hölle Rache kocht in meinem Herzen (Arie)",
    "titleTranslation": "Hell's vengeance boils in my heart (Aria)",
    "originalDescription": "Die Königin der Nacht erscheint unter Donner, reicht Pamina einen Dolch und befiehlt ihr, Sarastro zu töten.",
    "description": "Thunder crashes as the Queen of the Night appears before Pamina, demanding that she assassinate Sarastro with a dagger or face eternal maternal repudiation.",
    "cues": act2_raw_scenes[5]['cues']
})

# Scene 6: Nr. 15 Arie
scenes_out.append({
    "sceneNumber": 6,
    "title": "In diesen heil'gen Hallen (Arie)",
    "titleTranslation": "In these sacred halls (Aria)",
    "originalDescription": "Sarastro tröstet Pamina und verkündet die edlen Ideale von Versöhnung und Vergebung.",
    "description": "Sarastro banishes the treacherous Monostatos and gently reassures Pamina, proclaiming that within these sacred walls, love, forgiveness, and brotherhood reign supreme.",
    "cues": act2_raw_scenes[6]['cues']
})

# Scene 7: Nr. 16 Terzett
scenes_out.append({
    "sceneNumber": 7,
    "title": "Seid uns zum zweiten Mal willkommen (Terzett)",
    "titleTranslation": "Be to-us for-the second time welcome (Trio)",
    "originalDescription": "Die drei Knaben bringen Flöte, Glockenspiel und Speisen herbei.",
    "description": "The Three Boys descend in their flying apparatus, returning the magic flute and bells to the initiates and offering food and comfort before the next trials.",
    "cues": act2_raw_scenes[7]['cues']
})

# Scene 8: Nr. 17 Arie
scenes_out.append({
    "sceneNumber": 8,
    "title": "Ach, ich fühl's, es ist verschwunden (Arie)",
    "titleTranslation": "Ah, I feel it, it is vanished (Aria)",
    "originalDescription": "Pamina eilt herbei, doch Tamino muß schweigen. Pamina glaubt in tiefer Trauer, seine Liebe verloren zu haben.",
    "description": "Guided by the flute, Pamina rushes in, but Tamino is bound by his vow of silence and must turn away. Convinced she has lost his love forever, Pamina plunges into heartbroken despair.",
    "cues": act2_raw_scenes[8]['cues']
})

# Scene 9: Nr. 18 Chor der Priester
scenes_out.append({
    "sceneNumber": 9,
    "title": "O Isis und Osiris, welche Wonne! (Chor der Priester)",
    "titleTranslation": "O Isis and Osiris, what bliss! (Chorus of Priests)",
    "originalDescription": "Das Gewölbe einer Pyramide. Die Priester preisen die Standhaftigkeit des edlen Jünglings.",
    "description": "Inside the vault of the great pyramid, the priests sing a majestic hymn of praise celebrating that Tamino has proven his virtue and readiness for higher initiation.",
    "cues": act2_raw_scenes[9]['cues']
})

# Scene 10: Nr. 19 Terzett
scenes_out.append({
    "sceneNumber": 10,
    "title": "Soll ich dich, Teurer, nicht mehr seh'n? (Terzett)",
    "titleTranslation": "Shall I you, dear-one, no more see? (Trio)",
    "originalDescription": "Pamina und Tamino nehmen Abschied vor den letzten großen Prüfungen.",
    "description": "Pamina and Tamino share an agonizing farewell before the ultimate trials begin, while Sarastro promises they will soon be reunited in joy.",
    "cues": act2_raw_scenes[10]['cues']
})

# Scene 11: Nr. 20 Arie
scenes_out.append({
    "sceneNumber": 11,
    "title": "Ein Mädchen oder Weibchen (Arie)",
    "titleTranslation": "A maiden or a-little-wife (Aria)",
    "originalDescription": "Papageno spielt sein Glockenspiel und wünscht sich eine liebe Gefährtin.",
    "description": "Left alone in the courtyard, Papageno plays upon his magic bells and sings of his heart's deepest yearning: a tender little wife to love and cherish.",
    "cues": act2_raw_scenes[11]['cues']
})

# Finale II split into 4 distinct scenes
finale_cues = act2_raw_scenes[12]['cues']
scenes_out.append({
    "sceneNumber": 12,
    "title": "Bald prangt, den Morgen zu verkünden (Finale II - Teil 1)",
    "titleTranslation": "Soon shines, the morning to announce (Finale II - Part 1)",
    "originalDescription": "Ein Garten im Morgengrauen. Die drei Knaben retten Pamina vor der Verzweiflung.",
    "description": "At dawn in the garden, the Three Boys praise the rising sun and intervene just in time to stop the despairing Pamina from ending her life with the dagger, leading her to Tamino.",
    "cues": finale_cues[:24]
})

scenes_out.append({
    "sceneNumber": 13,
    "title": "Der, welcher wandert diese Straße (Finale II - Teil 2: Die Prüfungen)",
    "titleTranslation": "He, who wanders this path (Finale II - Part 2: The Trials)",
    "originalDescription": "Zwei Geharnischte wachen vor den Toren zu Feuer und Wasser. Pamina und Tamino durchschreiten die Prüfungen.",
    "description": "Before the gates of the fiery mountain and raging waters, Two Armed Men sing the solemn chorale. Pamina and Tamino are reunited and pass through the elements guided by the Magic Flute.",
    "cues": finale_cues[24:49]
})

scenes_out.append({
    "sceneNumber": 14,
    "title": "Papagena! Papagena! (Finale II - Teil 3: Pa-pa-pa Duett)",
    "titleTranslation": "Papagena! Papagena! (Finale II - Part 3: Pa-pa-pa Duet)",
    "originalDescription": "Papageno sucht Papagena, will sich erhängen, wird von den drei Knaben gerettet und mit Papagena vereint.",
    "description": "Despairing of ever finding his bride, Papageno prepares to hang himself, but the Three Boys prompt him to ring his magic bells. Papagena appears and the ecstatic couple celebrates their joyous union.",
    "cues": finale_cues[49:77]
})

scenes_out.append({
    "sceneNumber": 15,
    "title": "Die Strahlen der Sonne vertreiben die Nacht (Finale II - Teil 4: Triumph des Lichts)",
    "titleTranslation": "The rays of the sun dispel the night (Finale II - Part 4: Triumph of the Light)",
    "originalDescription": "Monostatos und die Königin der Nacht werden gestürzt. Der Tempel der Sonne erstrahlt in vollem Glanze.",
    "description": "Monostatos and the Queen of the Night lead a covert attack on the temple, but are banished into eternal night. The Sun Temple blazes with light as Sarastro, Tamino, and Pamina triumph.",
    "cues": finale_cues[77:]
})

out = []
out.append("import { Act } from '../../types/libretto';\n")
out.append("export const dieZauberfloeteAct2: Act = {")
out.append("  actNumber: 2,")
out.append("  title: 'Act II',")
out.append("  originalSetting: 'Ein Palmenwald; alle Bäume sind von Silber, die Blätter von Gold; 18 Sitze aus Blättern stehen im Kreise; auf jedem Sitz steht eine Pyramide und ein großes Horn mit Gold gefasst.',")
out.append("  setting: 'A grove of silver palms with leaves of gold; eighteen seats fashioned of leaves stand in a circle, each with a pyramid and a large gold-bound horn.',")
out.append("  scenes: [")

line_global_counter = 1

for sc_idx, sc in enumerate(scenes_out):
    out.append("    {")
    out.append(f"      sceneNumber: {sc_idx + 1},")
    out.append(f"      title: {json.dumps(sc['title'])},")
    out.append(f"      titleTranslation: {json.dumps(sc['titleTranslation'])},")
    out.append(f"      originalDescription: {json.dumps(sc['originalDescription'])},")
    out.append(f"      description: {json.dumps(sc['description'])},")
    out.append("      cues: [")
    
    # Filter cues
    filtered_cues = []
    for c in sc['cues']:
        sdir = c.get('stageDirection', '')
        if c['lines']:
            filtered_cues.append(c)
        else:
            if len(sdir) < 200 and not sdir.startswith('Verwandlung. Nacht im Hof') and not sdir.startswith('Sie übergeben') and not sdir.startswith('Langsam und traurig') and not sdir.startswith('Tamino wird hereingeführt') and not sdir.startswith('Zwei Priester begleiten'):
                filtered_cues.append(c)
    
    for c_idx, cue in enumerate(filtered_cues):
        out.append("        {")
        out.append(f"          id: {json.dumps(f'a2_s{sc_idx+1}_c{c_idx+1}')},")
        out.append(f"          speaker: {json.dumps(cue['speaker'])},")
        if cue.get('pieceTitle'):
            out.append(f"          pieceTitle: {json.dumps(cue['pieceTitle'])},")
        if cue.get('stageDirection'):
            sdir = cue['stageDirection'].strip()
            out.append(f"          stageDirection: {json.dumps(sdir)},")
            trans_sdir = STAGE_DIR_TRANS.get(sdir)
            if not trans_sdir:
                for k, v in STAGE_DIR_TRANS.items():
                    if k.lower() in sdir.lower():
                        trans_sdir = v
                        break
            if trans_sdir:
                out.append(f"          stageDirectionTranslation: {json.dumps(trans_sdir)},")
        out.append("          lines: [")
        
        for l_idx, line in enumerate(cue['lines']):
            orig = line['original'].strip()
            trans_entry = TRANS_ACT2.get(orig)
            if trans_entry:
                literal, tokens, gnote = trans_entry
            else:
                literal, tokens, gnote = (orig, None, None)
                
            out.append("            {")
            # GUARANTEED GLOBALLY UNIQUE LINE ID
            out.append(f"              id: {json.dumps(f'a2_s{sc_idx+1}_c{c_idx+1}_l{l_idx+1}')},")
            out.append(f"              original: {json.dumps(orig)},")
            out.append(f"              literal: {json.dumps(literal)},")
            if tokens:
                out.append("              tokens: [")
                for tk in tokens:
                    tok_str = "                { "
                    tok_str += f"word: {json.dumps(tk['word'])}, lemma: {json.dumps(tk['lemma'])}, pos: {json.dumps(tk['pos'])}, meaning: {json.dumps(tk['meaning'])}"
                    if 'notes' in tk:
                        tok_str += f", notes: {json.dumps(tk['notes'])}"
                    tok_str += " },"
                    out.append(tok_str)
                out.append("              ],")
            if gnote:
                out.append(f"              grammarNote: {json.dumps(gnote)},")
            out.append("            },")
            line_global_counter += 1
            
        out.append("          ]")
        out.append("        },")
        
    out.append("      ]")
    out.append("    },")

out.append("  ]")
out.append("};\n")

with open('src/data/dieZauberfloete/act2.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print(f"Successfully generated dieZauberfloeteAct2.ts with {line_global_counter - 1} unique line IDs.")

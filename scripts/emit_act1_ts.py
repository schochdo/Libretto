import json
import sys
sys.path.insert(0, '.')
from scripts.make_act1_ts import TRANS
from scripts.build_stage_direction_translations import STAGE_DIR_TRANS

with open('scripts/zauberfloete_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

act1_scenes = data['act1']

SCENE_META = [
    {
        "title": "Zu Hilfe! Zu Hilfe! (Introduktion)",
        "titleTranslation": "To help! To help! (Introduction)",
        "originalDescription": "Tamino im prächtigen Jagdkleide eilt von einem Felsen herunter, eine Schlange verfolgt ihn. Drei verschleierte Damen der Königin der Nacht erscheinen und töten das Ungeheuer.",
        "description": "Prince Tamino rushes down from the rocks in magnificent hunting attire, pursued by a giant serpent. He collapses in a faint, whereupon Three Ladies of the Queen of the Night appear and slay the monster."
    },
    {
        "title": "Der Vogelfänger bin ich ja (Lied)",
        "titleTranslation": "The bird-catcher am I indeed (Song)",
        "originalDescription": "Papageno kommt einen Fußsteig herunter mit einer großen Vogelsteige auf dem Rücken und einer fünftönigen Panflöte in der Hand.",
        "description": "Papageno, bird-catcher to the Queen of the Night, arrives playing his panpipes and singing joyfully of his carefree life catching birds and wishing for a wife."
    },
    {
        "title": "Dies Bildnis ist bezaubernd schön (Arie)",
        "titleTranslation": "This portrait is enchantingly beautiful (Aria)",
        "originalDescription": "Tamino betrachtet das Bildnis Paminas, das ihm die drei Damen übergeben haben.",
        "description": "Tamino gazes upon the portrait of Pamina given to him by the Three Ladies and is overcome by a profound and overwhelming love."
    },
    {
        "title": "O zitt're nicht, mein lieber Sohn (Rezitativ und Arie)",
        "titleTranslation": "O tremble not, my dear son (Recitative and Aria)",
        "originalDescription": "Die Berge teilen sich unter heftigem Donner auseinander, und die Königin auf ihrem sternenverzierten Thron wird sichtbar.",
        "description": "Under heavy thunder and lightning, the mountains part to reveal the Queen of the Night on a starry throne. She laments the kidnapping of her daughter Pamina by Sarastro and charges Tamino with her rescue."
    },
    {
        "title": "Hm! hm! hm! hm! (Quintett)",
        "titleTranslation": "Hm! hm! hm! hm! (Quintet)",
        "originalDescription": "Papageno hat ein goldenes Schloß vor dem Mund. Die drei Damen befreien ihn und bringen Tamino die Zauberflöte und Papageno das Glockenspiel.",
        "description": "Papageno laments his punishment for lying with a padlock on his mouth. The Three Ladies unlock it, cautioning against dishonesty, and bestow upon Tamino the magic flute and upon Papageno a magical chime of silver bells."
    },
    {
        "title": "Du feines Täubchen, nur herein (Terzett)",
        "titleTranslation": "You delicate little-dove, just inside (Trio)",
        "originalDescription": "Ein prächtiges Zimmer im Palast Sarastros. Monostatos und Sklaven führen Pamina herein.",
        "description": "In Sarastro's palace, the overseer Monostatos threatens Pamina, but when Papageno wanders in, both Monostatos and Papageno terrify each other believing the other to be the devil."
    },
    {
        "title": "Bei Männern, welche Liebe fühlen (Duett)",
        "titleTranslation": "In men, who love feel (Duet)",
        "originalDescription": "Pamina und Papageno besingen die erhabene Kraft der Liebe zwischen Mann und Frau.",
        "description": "Pamina and Papageno reflect on the divine sacredness of love and harmonious matrimony before setting off to find Tamino."
    },
    {
        "title": "Zum Ziele führt dich diese Bahn (Finale I)",
        "titleTranslation": "To the goal leads you this path (Finale I)",
        "originalDescription": "Ein heiliger Hain vor drei Pforten: der Weisheit, der Vernunft und der Natur. Sarastros Tempelbezirk.",
        "description": "The Three Boys guide Tamino to the gates of Sarastro's sanctuary. Tamino converses with the Speaker of the Temple, learns that Sarastro is an enlightened priest rather than a tyrant, plays his flute to tame wild beasts, and is reunited with Pamina before Sarastro's triumphal procession."
    }
]

out = []
out.append("import { Act } from '../../types/libretto';\n")
out.append("export const dieZauberfloeteAct1: Act = {")
out.append("  actNumber: 1,")
out.append("  title: 'Act I',")
out.append("  originalSetting: 'Das Theater ist eine felsige Gegend, hier und da mit Bäumen überwachsen; auf beiden Seiten sind gangbare Berge, nebst einem runden Tempel.',")
out.append("  setting: 'A rocky landscape, overgrown here and there with trees; passable mountains on both sides, beside a round temple.',")
out.append("  scenes: [")

line_global_counter = 1

for idx, sc in enumerate(act1_scenes):
    meta = SCENE_META[idx]
    out.append("    {")
    out.append(f"      sceneNumber: {idx + 1},")
    out.append(f"      title: {json.dumps(meta['title'])},")
    out.append(f"      titleTranslation: {json.dumps(meta['titleTranslation'])},")
    out.append(f"      originalDescription: {json.dumps(meta['originalDescription'])},")
    out.append(f"      description: {json.dumps(meta['description'])},")
    out.append("      cues: [")
    
    # Filter out empty-line cues that are purely redundant dialogue summaries between scenes
    filtered_cues = []
    for c in sc['cues']:
        sdir = c.get('stageDirection', '')
        # If cue has lines, always keep
        if c['lines']:
            filtered_cues.append(c)
        else:
            # If it's a short dramatic stage action, keep it
            if len(sdir) < 200 and not sdir.startswith('Als Papageno') and not sdir.startswith('Er will gerade') and not sdir.startswith('Sie verschwindet') and not sdir.startswith('Die Damen gehen'):
                filtered_cues.append(c)
    
    for c_idx, cue in enumerate(filtered_cues):
        out.append("        {")
        out.append(f"          id: {json.dumps(f'a1_s{idx+1}_c{c_idx+1}')},")
        out.append(f"          speaker: {json.dumps(cue['speaker'])},")
        if cue.get('pieceTitle'):
            out.append(f"          pieceTitle: {json.dumps(cue['pieceTitle'])},")
        if cue.get('stageDirection'):
            sdir = cue['stageDirection'].strip()
            out.append(f"          stageDirection: {json.dumps(sdir)},")
            trans_sdir = STAGE_DIR_TRANS.get(sdir)
            if not trans_sdir:
                # check partial match
                for k, v in STAGE_DIR_TRANS.items():
                    if k.lower() in sdir.lower():
                        trans_sdir = v
                        break
            if trans_sdir:
                out.append(f"          stageDirectionTranslation: {json.dumps(trans_sdir)},")
        out.append("          lines: [")
        
        for l_idx, line in enumerate(cue['lines']):
            orig = line['original'].strip()
            trans_entry = TRANS.get(orig)
            if trans_entry:
                literal, tokens, gnote = trans_entry
            else:
                literal, tokens, gnote = (orig, None, None)
                
            out.append("            {")
            # GUARANTEED GLOBALLY UNIQUE LINE ID
            out.append(f"              id: {json.dumps(f'a1_s{idx+1}_c{c_idx+1}_l{l_idx+1}')},")
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

with open('src/data/dieZauberfloete/act1.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print(f"Successfully generated dieZauberfloeteAct1.ts with {line_global_counter - 1} unique line IDs.")

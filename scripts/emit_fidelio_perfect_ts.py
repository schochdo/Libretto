import json

with open('scripts/fidelio_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('scripts/fidelio_perfect_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

with open('scripts/fidelio_stage_directions_translated.json', 'r', encoding='utf-8') as f:
    stage_trans = json.load(f)

import re

VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}

def match_initial_capitalization(orig, lit):
    if not orig or not lit:
        return lit
    m_orig = re.search(r'[a-zA-ZäöüßÄÖÜ]', orig)
    if not m_orig:
        return lit
    if m_orig.group(0).isupper():
        m_lit = re.search(r'[a-zA-Z]', lit)
        if m_lit and m_lit.group(0).islower():
            idx = m_lit.start()
            lit = lit[:idx] + lit[idx].upper() + lit[idx+1:]
    return lit

def clean_txt(t):
    return t.replace('"', '\\"').replace('\n', ' ')

def emit_act_ts(act_key, act_num, act_title, orig_setting, setting_trans, out_path):
    scenes = parsed[act_key]
    
    out = []
    out.append("import { Act } from '../../types/libretto';\n\n")
    out.append(f"export const fidelioAct{act_num}: Act = {{\n")
    out.append(f"  actNumber: {act_num},\n")
    out.append(f"  title: '{act_title}',\n")
    out.append(f"  originalSetting: \"{clean_txt(orig_setting)}\",\n")
    out.append(f"  setting: \"{clean_txt(setting_trans)}\",\n")
    out.append("  scenes: [\n")
    
    for sc in scenes:
        out.append("    {\n")
        out.append(f"      sceneNumber: {sc['sceneNumber']},\n")
        out.append(f"      title: \"{clean_txt(sc['title'])}\",\n")
        out.append(f"      titleTranslation: \"{clean_txt(sc['titleTranslation'])}\",\n")
        out.append(f"      originalDescription: \"{clean_txt(sc['originalDescription'])}\",\n")
        out.append(f"      description: \"{clean_txt(sc['description'])}\",\n")
        out.append("      cues: [\n")
        
        for c in sc['cues']:
            out.append("        {\n")
            out.append(f"          id: \"{c['id']}\",\n")
            out.append(f"          speaker: \"{clean_txt(c['speaker'])}\",\n")
            out.append(f"          pieceTitle: \"{clean_txt(c['pieceTitle'])}\",\n")
            if c.get('stageDirection'):
                sd = c['stageDirection'].strip()
                out.append(f"          stageDirection: \"{clean_txt(sd)}\",\n")
                sd_tr = stage_trans.get(sd, sd)
                out.append(f"          stageDirectionTranslation: \"{clean_txt(sd_tr)}\",\n")
            out.append("          lines: [\n")
            
            for l in c['lines']:
                orig = l['original'].strip()
                trans_entry = corpus.get(orig)
                if not trans_entry:
                    alt = orig.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
                    trans_entry = corpus.get(alt, (orig, [], None))
                lit, tokens, gnote = trans_entry
                lit = match_initial_capitalization(orig, lit)
                
                out.append("            {\n")
                out.append(f"              id: \"{l['id']}\",\n")
                out.append(f"              original: \"{clean_txt(orig)}\",\n")
                out.append(f"              literal: \"{clean_txt(lit)}\",\n")
                
                if tokens:
                    out.append("              tokens: [\n")
                    for tok in tokens:
                        pos = tok.get('pos', 'noun')
                        if pos not in VALID_POS:
                            pos = 'noun' if tok.get('word', '')[:1].isupper() else 'verb'
                        out.append("                {\n")
                        out.append(f"                  word: \"{clean_txt(tok['word'])}\",\n")
                        out.append(f"                  lemma: \"{clean_txt(tok['lemma'])}\",\n")
                        out.append(f"                  pos: \"{pos}\",\n")
                        out.append(f"                  meaning: \"{clean_txt(tok['meaning'])}\",\n")
                        if tok.get('notes'):
                            out.append(f"                  notes: \"{clean_txt(tok['notes'])}\",\n")
                        out.append("                },\n")
                    out.append("              ],\n")
                else:
                    out.append("              tokens: [],\n")
                    
                if gnote:
                    out.append(f"              grammarNote: \"{clean_txt(gnote)}\",\n")
                out.append("            },\n")
                
            out.append("          ],\n")
            out.append("        },\n")
            
        out.append("      ],\n")
        out.append("    },\n")
        
    out.append("  ]\n")
    out.append("};\n")
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write("".join(out))
    print(f"Generated {out_path} successfully.")

a1_orig_setting = "Der Hof des Staatsgefängnisses. Im Hintergrund das Haupttor und eine hohe Wallmauer, über welche Bäume hervorragen. Im geschlossenen Tor selbst ist eine kleine Pforte, die für einzelne Fußgänger geöffnet wird. Neben dem Tor das Stübchen des Pförtners. Links die Wohngebäude der Gefangenen; alle Fenster haben Gitter, und die mit Nummern bezeichneten Türen sind mit Eisen beschlagen und mit starken Riegeln bewehrt. In der vordersten Kulisse ist die Tür zur Wohnung des Gefangenenwärters. Rechts stehen von einem Geländer eingefaßte Bäume, die neben einem Gartentor den Eingang des Schloßgartens bezeichnen."
a1_setting_trans = "The courtyard of the state prison. In the background the main gate and a high rampart wall over which trees project. In the closed gate itself is a small wicket-door which is opened for single pedestrians. Beside the gate the porter's booth. On the left the prisoners' quarters; all windows are barred, and doors marked with numbers are iron-plated and secured with strong bolts. In the foremost wing is the door to the head jailer's dwelling. On the right stand railed trees marking the entrance to the castle garden beside a garden gate."

a2_orig_setting = "Ein dunkler, unterirdischer Kerker. Links ist eine mit Steinen und Schutt bedeckte Zisterne. Im Hintergrund mehrere mit Gitterwerk verwahrte Öffnungen in der Mauer, durch welche man die Stufen einer herunterführenden Treppe sieht. Rechts die letzten Stufen und die Tür in das Gefängnis. Eine Lampe brennt."
a2_setting_trans = "A dark, subterranean dungeon. On the left is an old cistern covered with stones and debris. In the background several barred openings in the wall, through which the steps of a descending stairway can be seen. On the right the lowest steps and the door into the vault. A solitary lamp burns."

emit_act_ts('act1', 1, 'Act I', a1_orig_setting, a1_setting_trans, 'src/data/fidelio/act1.ts')
emit_act_ts('act2', 2, 'Act II', a2_orig_setting, a2_setting_trans, 'src/data/fidelio/act2.ts')

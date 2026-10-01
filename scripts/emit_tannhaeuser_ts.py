import json

with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('scripts/tannhaeuser_clean_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

with open('scripts/tannhaeuser_stage_directions_translated.json', 'r', encoding='utf-8') as f:
    stage_trans = json.load(f)

VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}

def clean_txt(t):
    return t.replace('\\', '\\\\').replace('"', '\\"').replace('\r', '').replace('\n', '\\n')

def emit_act_ts(act_key, act_num, act_title, orig_setting, setting_trans, out_path):
    scenes = parsed[act_key]
    
    out = []
    out.append("import { Act } from '../../types/libretto';\n\n")
    out.append(f"export const tannhaeuserAct{act_num}: Act = {{\n")
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
            if c.get('pieceTitle'):
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

# Act settings
a1_orig_setting = "Erster Aufzug: Das Innere des Hörselberges bei Eisenach (der Venusberg); hernach ein Tal vor der Wartburg."
a1_setting_trans = "Act I: The interior of the Hörselberg near Eisenach (the Venusberg); afterwards a valley before the Wartburg."

a2_orig_setting = "Zweiter Aufzug: Die Sängersaal auf der Wartburg."
a2_setting_trans = "Act II: The Minstrels' Hall at the Wartburg Castle."

a3_orig_setting = "Dritter Aufzug: Tal vor der Wartburg gegen Abend."
a3_setting_trans = "Act III: Valley before the Wartburg towards evening."

emit_act_ts('act1', 1, 'Act I', a1_orig_setting, a1_setting_trans, 'src/data/tannhaeuser/act1.ts')
emit_act_ts('act2', 2, 'Act II', a2_orig_setting, a2_setting_trans, 'src/data/tannhaeuser/act2.ts')
emit_act_ts('act3', 3, 'Act III', a3_orig_setting, a3_setting_trans, 'src/data/tannhaeuser/act3.ts')

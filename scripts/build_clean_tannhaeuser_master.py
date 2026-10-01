import json
import sys
import os
import re

sys.path.insert(0, 'scripts')

def load_module_dict(mod_name):
    try:
        m = __import__(mod_name)
        res = {}
        for k, v in vars(m).items():
            if isinstance(v, dict) and not k.startswith('__'):
                res.update(v)
        print(f"Loaded {mod_name}: {len(res)} entries")
        return res
    except Exception as e:
        print(f"Could not load {mod_name}: {e}")
        return {}

def main():
    act1_corpus = {}
    for mod in ['curate_part1', 'curate_part2', 'curate_part3', 'curate_part4', 'curate_part5']:
        act1_corpus.update(load_module_dict(mod))

    act2_corpus = {}
    for mod in ['tann_act2_part1', 'tann_act2_part2', 'tann_act2_part3']:
        act2_corpus.update(load_module_dict(mod))

    act3_corpus = {}
    for mod in ['curate_act3_sc1', 'curate_act3_sc2_sc3a', 'curate_act3_rome', 'curate_act3_venus', 'curate_act3_finale']:
        act3_corpus.update(load_module_dict(mod))

    master = {}
    master.update(act1_corpus)
    master.update(act2_corpus)
    master.update(act3_corpus)
    print(f"Total entries in master curated dictionary: {len(master)}")

    with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
        parsed = json.load(f)

    # Capitalization helper
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

    clean_corpus = {}
    total_lines = 0
    missing = []

    for act_key in ['act1', 'act2', 'act3']:
        for sc in parsed[act_key]:
            for c in sc['cues']:
                for l in c['lines']:
                    orig = l['original'].strip()
                    total_lines += 1

                    entry = master.get(orig)
                    if not entry:
                        alt = orig.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
                        entry = master.get(alt)

                    if entry:
                        lit, tokens, note = entry
                        lit = match_initial_capitalization(orig, lit)
                        clean_corpus[orig] = (lit, tokens, note)
                    else:
                        missing.append((act_key, sc['sceneNumber'], c['speaker'], orig))

    print(f"Total lines in parsed libretto: {total_lines}")
    print(f"Curated clean corpus lines: {len(clean_corpus)}")
    print(f"Missing lines: {len(missing)}")

    if missing:
        print("Sample missing lines:")
        for m in missing[:15]:
            print(" ", m)
        return False

    with open('scripts/tannhaeuser_clean_corpus.json', 'w', encoding='utf-8') as f:
        json.dump(clean_corpus, f, ensure_ascii=False, indent=2)

    print("Saved scripts/tannhaeuser_clean_corpus.json successfully!")
    return True

if __name__ == '__main__':
    main()

import json
import re

# Load all compiled vocabulary components
with open('scripts/falstaff_lexicon.json', 'r', encoding='utf-8') as f:
    base = json.load(f)
with open('scripts/falstaff_core_additions.json', 'r', encoding='utf-8') as f:
    core = json.load(f)
with open('scripts/large_italian_vocab.json', 'r', encoding='utf-8') as f:
    large = json.load(f)
with open('scripts/falstaff_comprehensive_lexicon.json', 'r', encoding='utf-8') as f:
    comp = json.load(f)
with open('scripts/falstaff_mega_lexicon.json', 'r', encoding='utf-8') as f:
    mega = json.load(f)

MASTER_LEXICON = {}
for d in [base, core, large, comp, mega]:
    MASTER_LEXICON.update(d)

print(f"Master Falstaff Lexicon compiled: {len(MASTER_LEXICON)} unique terms.")
with open('scripts/falstaff_master_lexicon.json', 'w', encoding='utf-8') as f:
    json.dump(MASTER_LEXICON, f, ensure_ascii=False, indent=2)

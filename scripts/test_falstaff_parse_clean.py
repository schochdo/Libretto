import re
import json

with open('scripts/parse_falstaff_full.py') as f:
    text = f.read()

# Let's inspect how Falstaff parsing can drop the narrator cue and piece titles
import scripts.parse_falstaff_full as pff

print("PART_META scenes:")
for act, scs in pff.PART_META.items():
    for sc in scs:
        print(f"Act {act} Scene {sc['sceneNumber']}: {sc['title']}")

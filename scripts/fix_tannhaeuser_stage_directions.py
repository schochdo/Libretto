import json

with open('scripts/tannhaeuser_parsed.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

# In Act 1 Scene 1, cue 1 is the scene description for the Venusberg bacchanal
c1 = d['act1'][0]['cues'][0]
if c1['speaker'] == 'Narrator' and c1['lines'] and len(c1['lines'][0]['original']) > 500:
    d['act1'][0]['originalDescription'] = c1['lines'][0]['original']
    d['act1'][0]['description'] = "The interior of Venusberg (Hörselberg near Eisenach). A vast subterranean grotto curving off to the right. Sirens, naiads, and bacchantes revel in a frenzied bacchanal around the couch of Venus and Tannhäuser before gently dispersing into the fragrant mist."
    d['act1'][0]['cues'].pop(0)

# In Act 1 Scene 3, cue 1 is the stage setting transition to the Thuringian valley
c3 = d['act1'][2]['cues'][0]
if c3['speaker'] == 'Narrator' and c3['lines'] and len(c3['lines'][0]['original']) > 300:
    d['act1'][2]['originalDescription'] = c3['lines'][0]['original']
    d['act1'][2]['description'] = "Tannhäuser finds himself suddenly transported into a beautiful Thuringian valley below the Wartburg. Blue sky, bright sunshine, green meadows, and forest heights. A young shepherd plays his pipe from a rocky projection."
    d['act1'][2]['cues'].pop(0)

with open('scripts/tannhaeuser_parsed.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)

print("Moved scene stage settings to scene originalDescription cleanly.")

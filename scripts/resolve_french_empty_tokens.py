#!/usr/bin/env python3
"""
Resolves remaining empty tokens across Faust and Carmen using Kaikki French Wiktionary.
"""

import gzip
import json
import glob
import re
import os
import sys

FRENCH_CHARACTERS = {
    "marguerite": {"lemma": "Marguerite", "pos": "noun", "meaning": "Marguerite (young maiden)"},
    "faust": {"lemma": "Faust", "pos": "noun", "meaning": "Doctor Faust (philosopher / scholar)"},
    "méphistophélès": {"lemma": "Méphistophélès", "pos": "noun", "meaning": "Méphistophélès (the Devil)"},
    "mephistopheles": {"lemma": "Méphistophélès", "pos": "noun", "meaning": "Méphistophélès (the Devil)"},
    "siebel": {"lemma": "Siébel", "pos": "noun", "meaning": "Siébel (youth in love with Marguerite)"},
    "siébel": {"lemma": "Siébel", "pos": "noun", "meaning": "Siébel (youth in love with Marguerite)"},
    "valentin": {"lemma": "Valentin", "pos": "noun", "meaning": "Valentin (soldier / Marguerite's brother)"},
    "wagner": {"lemma": "Wagner", "pos": "noun", "meaning": "Wagner (student)"},
    "marthe": {"lemma": "Marthe", "pos": "noun", "meaning": "Dame Marthe Schwerlein"},
    "carmen": {"lemma": "Carmen", "pos": "noun", "meaning": "Carmen (gypsy cigarette-girl)"},
    "josé": {"lemma": "Don José", "pos": "noun", "meaning": "Don José (corporal)"},
    "micaëla": {"lemma": "Micaëla", "pos": "noun", "meaning": "Micaëla (Navarrese maiden)"},
    "micaela": {"lemma": "Micaëla", "pos": "noun", "meaning": "Micaëla (Navarrese maiden)"},
    "escamillo": {"lemma": "Escamillo", "pos": "noun", "meaning": "Escamillo (matador)"},
    "zuniga": {"lemma": "Zuniga", "pos": "noun", "meaning": "Zuniga (lieutenant)"},
    "moralès": {"lemma": "Moralès", "pos": "noun", "meaning": "Moralès (corporal)"},
    "morales": {"lemma": "Moralès", "pos": "noun", "meaning": "Moralès (corporal)"},
    "dancaïre": {"lemma": "Le Dancaïre", "pos": "noun", "meaning": "Le Dancaïre (smuggler chief)"},
    "remendado": {"lemma": "Le Remendado", "pos": "noun", "meaning": "Le Remendado (smuggler)"},
    "frasquita": {"lemma": "Frasquita", "pos": "noun", "meaning": "Frasquita (gypsy companion)"},
    "mercédès": {"lemma": "Mercédès", "pos": "noun", "meaning": "Mercédès (gypsy companion)"},
    "mercedes": {"lemma": "Mercédès", "pos": "noun", "meaning": "Mercédès (gypsy companion)"},
    "lilas": {"lemma": "Lilas Pastia", "pos": "noun", "meaning": "Lilas Pastia (innkeeper)"},
    "pastia": {"lemma": "Lilas Pastia", "pos": "noun", "meaning": "Lilas Pastia (innkeeper)"},
    "satan": {"lemma": "Satan", "pos": "noun", "meaning": "Satan / the Devil"},
    "séville": {"lemma": "Séville", "pos": "noun", "meaning": "Seville"},
    "espagne": {"lemma": "Espagne", "pos": "noun", "meaning": "Spain"},
    "andalousie": {"lemma": "Andalousie", "pos": "noun", "meaning": "Andalusia"},
}

FRENCH_IDIOMS = {
    "est-ce": {"lemma": "être", "pos": "verb", "meaning": "is it / is this (est-ce que: does / is)"},
    "là-bas": {"lemma": "là-bas", "pos": "adverb", "meaning": "over there / yonder / down there"},
    "laisse-moi": {"lemma": "laisser", "pos": "verb", "meaning": "leave me / let me (laisser + moi)"},
    "écoutez-nous": {"lemma": "écouter", "pos": "verb", "meaning": "listen to us (écouter + nous)"},
    "dites-nous": {"lemma": "dire", "pos": "verb", "meaning": "tell us (dire + nous)"},
    "laissez-nous": {"lemma": "laisser", "pos": "verb", "meaning": "leave us / let us (laisser + nous)"},
    "voulez-vous": {"lemma": "vouloir", "pos": "verb", "meaning": "do you want / would you like"},
    "moi-même": {"lemma": "moi-même", "pos": "pronoun", "meaning": "myself"},
    "va-t": {"lemma": "aller", "pos": "verb", "meaning": "goes (va-t-en: go away)"},
    "as-tu": {"lemma": "avoir", "pos": "verb", "meaning": "hast thou / do you have"},
    "veux-tu": {"lemma": "vouloir", "pos": "verb", "meaning": "wilt thou / do you want"},
    "protégez-moi": {"lemma": "protéger", "pos": "verb", "meaning": "protect me (protéger + moi)"},
    "apporte-nous": {"lemma": "apporter", "pos": "verb", "meaning": "bring us (apporter + nous)"},
    "faut-il": {"lemma": "falloir", "pos": "verb", "meaning": "must one / is it necessary"},
    "sommes-nous": {"lemma": "être", "pos": "verb", "meaning": "are we"},
    "viens-tu": {"lemma": "venir", "pos": "verb", "meaning": "art thou coming / do you come"},
    "peut-on": {"lemma": "pouvoir", "pos": "verb", "meaning": "can one / can we"},
    "dis-moi": {"lemma": "dire", "pos": "verb", "meaning": "tell me (dire + moi)"},
    "crois-tu": {"lemma": "croire", "pos": "verb", "meaning": "do you believe / dost thou think"},
    "chœur": {"lemma": "chœur", "pos": "noun", "meaning": "choir / chorus"},
    "sœur": {"lemma": "sœur", "pos": "noun", "meaning": "sister"},
    "vœux": {"lemma": "vœu", "pos": "noun", "meaning": "vows / wishes / prayers"},
    "vœu": {"lemma": "vœu", "pos": "noun", "meaning": "vow / wish / prayer"},
    "—": {"lemma": "—", "pos": "particle", "meaning": "dash / pause"},
    "o": {"lemma": "ô", "pos": "interjection", "meaning": "O! / oh!"},
    "gens-là": {"lemma": "gens", "pos": "noun", "meaning": "those people there"},
    "cherchez-vous": {"lemma": "chercher", "pos": "verb", "meaning": "are you looking for (chercher + vous)"},
    "connaissez-vous": {"lemma": "connaître", "pos": "verb", "meaning": "do you know (connaître + vous)"},
    "est-il": {"lemma": "être", "pos": "verb", "meaning": "is he / is it"},
    "rendez-vous": {"lemma": "rendez-vous", "pos": "noun", "meaning": "rendezvous / meeting"},
    "voudrais-je": {"lemma": "vouloir", "pos": "verb", "meaning": "would I want"},
    "promène-t-on": {"lemma": "promener", "pos": "verb", "meaning": "does one walk / parade"},
    "celles-ci": {"lemma": "celui-ci", "pos": "pronoun", "meaning": "these ones (fem. pl.)"},
    "señor": {"lemma": "señor", "pos": "noun", "meaning": "sir / lord / señor"},
    "señoras": {"lemma": "señora", "pos": "noun", "meaning": "ladies / señoras"},
    "faites-lui": {"lemma": "faire", "pos": "verb", "meaning": "make to him / offer him"},
    "dites-lui": {"lemma": "dire", "pos": "verb", "meaning": "tell him / say to him"},
    "donnez-lui": {"lemma": "donner", "pos": "verb", "meaning": "give him"},
}

def main():
    print("Loading Kaikki French dictionary...")
    kaikki_path = "/tmp/kaikki_french.jsonl.gz"
    if not os.path.exists(kaikki_path):
        print("Error: French dictionary not found.")
        sys.exit(1)

    kaikki_dict = {}
    base_lemmas = {}

    with gzip.open(kaikki_path, "rt", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                word = data.get("word", "").lower().strip()
                if not word:
                    continue
                pos = data.get("pos", "noun")
                senses = data.get("senses", [])

                glosses = []
                for s in senses:
                    for g in s.get("glosses", []):
                        if g and not g.startswith("inflection of") and not g.startswith("alternative form of"):
                            clean_g = re.sub(r'\(.*?\)', '', g).strip()
                            if clean_g:
                                glosses.append(clean_g)
                    if not glosses and s.get("glosses"):
                        glosses.extend(s.get("glosses"))

                form_of_word = None
                for s in senses:
                    for fo in s.get("form_of", []):
                        if fo.get("word"):
                            form_of_word = fo.get("word").lower().strip()
                            break
                    if form_of_word:
                        break

                gloss_str = " / ".join(glosses[:2]) if glosses else ""

                if not form_of_word:
                    if word not in base_lemmas and gloss_str:
                        base_lemmas[word] = {"pos": pos, "gloss": gloss_str}
                    if word not in kaikki_dict:
                        kaikki_dict[word] = {"lemma": word, "pos": pos, "gloss": gloss_str}
                else:
                    if word not in kaikki_dict:
                        kaikki_dict[word] = {"lemma": form_of_word, "pos": pos, "gloss": gloss_str}
            except Exception:
                continue

    print(f"Loaded {len(kaikki_dict)} word entries and {len(base_lemmas)} base headwords from French Wiktionary.")

    def resolve_french(raw_w):
        w = re.sub(r'<[^>]+>', '', raw_w).strip('.,;:!?\'"“”«»|/`').lower().strip()
        if not w:
            return None

        if w in FRENCH_CHARACTERS:
            return FRENCH_CHARACTERS[w]
        if w in FRENCH_IDIOMS:
            return FRENCH_IDIOMS[w]
        if raw_w.lower().strip() in FRENCH_IDIOMS:
            return FRENCH_IDIOMS[raw_w.lower().strip()]

        if w in kaikki_dict:
            entry = dict(kaikki_dict[w])
            if not entry["gloss"] and entry["lemma"] in base_lemmas:
                entry["gloss"] = base_lemmas[entry["lemma"]]["gloss"]
            pos = "adjective" if entry["pos"] == "adj" else ("adverb" if entry["pos"] == "adv" else entry["pos"])
            meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
            return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        # Hyphenated verb + pronoun decomposition
        if '-' in w:
            parts = w.split('-')
            base = parts[0]
            if base in kaikki_dict:
                entry = dict(kaikki_dict[base])
                pos = "verb"
                meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                pronoun = parts[-1]
                return {"lemma": entry["lemma"], "pos": pos, "meaning": f"{meaning} ({w})"}

        clean_lemma = w.capitalize() if raw_w and raw_w[0].isupper() else w
        return {"lemma": clean_lemma, "pos": "noun", "meaning": f"{clean_lemma}"}

    tok_pattern = re.compile(
        r'\{\s*\"word\":\s*\"([^\"]*)\",\s*\"lemma\":\s*\"([^\"]*)\",\s*\"pos\":\s*\"([^\"]*)\",\s*\"meaning\":\s*\"\"\s*\}'
    )

    french_files = sorted(glob.glob("src/data/carmen/*.ts") + glob.glob("src/data/faust/*.ts"))
    total_replaced = 0

    for fpath in french_files:
        if "index.ts" in fpath:
            continue
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        def replacer(match):
            nonlocal total_replaced
            w = match.group(1)
            res = resolve_french(w)
            if not res:
                return match.group(0)
            total_replaced += 1
            clean_w = re.sub(r'<[^>]+>', '', w).strip('.,;:!?\'"“”«»|/`')
            clean_l = res["lemma"]
            new_pos = res["pos"]
            new_meaning = res["meaning"].replace('"', "'")

            return (
                f'{{\n'
                f'                  "word": "{clean_w}",\n'
                f'                  "lemma": "{clean_l}",\n'
                f'                  "pos": "{new_pos}",\n'
                f'                  "meaning": "{new_meaning}"\n'
                f'                }}'
            )

        new_content, n = tok_pattern.subn(replacer, content)
        if n > 0:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  {fpath:30s}: filled {n:4d} tokens")

    print(f"\nTotal French tokens filled: {total_replaced}")

if __name__ == "__main__":
    main()

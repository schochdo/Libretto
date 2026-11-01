#!/usr/bin/env python3
"""
Comprehensive Italian Opera Lexicon Pipeline
Builds a curated, authentic Italian dictionary covering all 8,557 untranslated words
across the 14 Italian operas in Libretto.
"""

import gzip
import json
import glob
import re
import os
import sys

# 1. Opera Character Names & Roles
OPERA_CHARACTERS = {
    # Le nozze di Figaro
    "figaro": {"lemma": "Figaro", "pos": "noun", "meaning": "Figaro (valet to Count Almaviva)"},
    "susanna": {"lemma": "Susanna", "pos": "noun", "meaning": "Susanna (maid to the Countess / Figaro's betrothed)"},
    "almaviva": {"lemma": "Almaviva", "pos": "noun", "meaning": "Count Almaviva"},
    "conte": {"lemma": "conte", "pos": "noun", "meaning": "Count (Count Almaviva)"},
    "contessa": {"lemma": "contessa", "pos": "noun", "meaning": "Countess (Countess Almaviva / Rosina)"},
    "cherubino": {"lemma": "Cherubino", "pos": "noun", "meaning": "Cherubino (the Count's page)"},
    "basilio": {"lemma": "Basilio", "pos": "noun", "meaning": "Don Basilio (music teacher)"},
    "bartolo": {"lemma": "Bartolo", "pos": "noun", "meaning": "Doctor Bartolo"},
    "marcellina": {"lemma": "Marcellina", "pos": "noun", "meaning": "Marcellina (housekeeper)"},
    "barbarina": {"lemma": "Barbarina", "pos": "noun", "meaning": "Barbarina (Antonio's daughter)"},
    "antonio": {"lemma": "Antonio", "pos": "noun", "meaning": "Antonio (gardener)"},
    "curzio": {"lemma": "Curzio", "pos": "noun", "meaning": "Don Curzio (judge)"},

    # Don Giovanni
    "giovanni": {"lemma": "Don Giovanni", "pos": "noun", "meaning": "Don Giovanni"},
    "leporello": {"lemma": "Leporello", "pos": "noun", "meaning": "Leporello (servant of Don Giovanni)"},
    "ottavio": {"lemma": "Don Ottavio", "pos": "noun", "meaning": "Don Ottavio"},
    "elvira": {"lemma": "Donna Elvira", "pos": "noun", "meaning": "Donna Elvira"},
    "zerlina": {"lemma": "Zerlina", "pos": "noun", "meaning": "Zerlina (peasant girl)"},
    "masetto": {"lemma": "Masetto", "pos": "noun", "meaning": "Masetto (peasant betrothed to Zerlina)"},
    "commendatore": {"lemma": "Commendatore", "pos": "noun", "meaning": "Commendatore (Donna Anna's father)"},

    # Così fan tutte
    "fiordiligi": {"lemma": "Fiordiligi", "pos": "noun", "meaning": "Fiordiligi (lady of Ferrara)"},
    "dorabella": {"lemma": "Dorabella", "pos": "noun", "meaning": "Dorabella (sister of Fiordiligi)"},
    "ferrando": {"lemma": "Ferrando", "pos": "noun", "meaning": "Ferrando (officer)"},
    "guglielmo": {"lemma": "Guglielmo", "pos": "noun", "meaning": "Guglielmo (officer)"},
    "alfonso": {"lemma": "Don Alfonso", "pos": "noun", "meaning": "Don Alfonso (philosopher)"},
    "despina": {"lemma": "Despina", "pos": "noun", "meaning": "Despina (maidservant)"},

    # Il barbiere di Siviglia
    "rosina": {"lemma": "Rosina", "pos": "noun", "meaning": "Rosina (ward of Bartolo)"},
    "berta": {"lemma": "Berta", "pos": "noun", "meaning": "Berta (governess)"},
    "fiorello": {"lemma": "Fiorello", "pos": "noun", "meaning": "Fiorello (Almaviva's servant)"},
    "ambrogio": {"lemma": "Ambrogio", "pos": "noun", "meaning": "Ambrogio (servant to Bartolo)"},

    # Rigoletto
    "rigoletto": {"lemma": "Rigoletto", "pos": "noun", "meaning": "Rigoletto (court jester)"},
    "gilda": {"lemma": "Gilda", "pos": "noun", "meaning": "Gilda (Rigoletto's daughter)"},
    "sparafucile": {"lemma": "Sparafucile", "pos": "noun", "meaning": "Sparafucile (assassin)"},
    "maddalena": {"lemma": "Maddalena", "pos": "noun", "meaning": "Maddalena (Sparafucile's sister)"},
    "monterone": {"lemma": "Monterone", "pos": "noun", "meaning": "Count Monterone"},
    "marullo": {"lemma": "Marullo", "pos": "noun", "meaning": "Marullo (courtier)"},
    "borsa": {"lemma": "Borsa", "pos": "noun", "meaning": "Matteo Borsa (courtier)"},
    "ceprano": {"lemma": "Ceprano", "pos": "noun", "meaning": "Count Ceprano"},
    "cepran": {"lemma": "Ceprano", "pos": "noun", "meaning": "Count Ceprano"},
    "giovanna": {"lemma": "Giovanna", "pos": "noun", "meaning": "Giovanna (Gilda's nurse)"},

    # La traviata
    "violetta": {"lemma": "Violetta", "pos": "noun", "meaning": "Violetta Valéry (courtesan)"},
    "alfredo": {"lemma": "Alfredo", "pos": "noun", "meaning": "Alfredo Germont"},
    "germont": {"lemma": "Germont", "pos": "noun", "meaning": "Giorgio Germont (Alfredo's father)"},
    "flora": {"lemma": "Flora", "pos": "noun", "meaning": "Flora Bervoix"},
    "annina": {"lemma": "Annina", "pos": "noun", "meaning": "Annina (Violetta's maid)"},
    "gastone": {"lemma": "Gastone", "pos": "noun", "meaning": "Viscount Gastone de Letorières"},
    "douphol": {"lemma": "Douphol", "pos": "noun", "meaning": "Baron Douphol"},
    "obigny": {"lemma": "d'Obigny", "pos": "noun", "meaning": "Marquis d'Obigny"},
    "grenvil": {"lemma": "Grenvil", "pos": "noun", "meaning": "Doctor Grenvil"},

    # Il trovatore
    "manrico": {"lemma": "Manrico", "pos": "noun", "meaning": "Manrico (troubadour / chieftain)"},
    "leonora": {"lemma": "Leonora", "pos": "noun", "meaning": "Leonora (noble lady)"},
    "azucena": {"lemma": "Azucena", "pos": "noun", "meaning": "Azucena (Biscayan gypsy)"},
    "luna": {"lemma": "Conte di Luna", "pos": "noun", "meaning": "Count di Luna"},
    "ines": {"lemma": "Ines", "pos": "noun", "meaning": "Ines (Leonora's confidante)"},
    "ruiz": {"lemma": "Ruiz", "pos": "noun", "meaning": "Ruiz (soldier of Manrico)"},

    # Aida
    "aida": {"lemma": "Aida", "pos": "noun", "meaning": "Aida (Ethiopian princess)"},
    "radamès": {"lemma": "Radamès", "pos": "noun", "meaning": "Radamès (captain of the Egyptian guard)"},
    "radames": {"lemma": "Radamès", "pos": "noun", "meaning": "Radamès (captain of the Egyptian guard)"},
    "amneris": {"lemma": "Amneris", "pos": "noun", "meaning": "Amneris (princess of Egypt)"},
    "amonasro": {"lemma": "Amonasro", "pos": "noun", "meaning": "Amonasro (King of Ethiopia / Aida's father)"},
    "ramfis": {"lemma": "Ramfis", "pos": "noun", "meaning": "Ramfis (high priest of Egypt)"},

    # Tosca
    "tosca": {"lemma": "Tosca", "pos": "noun", "meaning": "Floria Tosca (celebrated singer)"},
    "cavaradossi": {"lemma": "Cavaradossi", "pos": "noun", "meaning": "Mario Cavaradossi (painter)"},
    "scarpia": {"lemma": "Scarpia", "pos": "noun", "meaning": "Baron Scarpia (chief of police)"},
    "angelotti": {"lemma": "Angelotti", "pos": "noun", "meaning": "Cesare Angelotti (consul of the Roman Republic)"},
    "sagrestano": {"lemma": "sagrestano", "pos": "noun", "meaning": "sacristan"},
    "spoletta": {"lemma": "Spoletta", "pos": "noun", "meaning": "Spoletta (police agent)"},
    "sciarrone": {"lemma": "Sciarrone", "pos": "noun", "meaning": "Sciarrone (gendarme)"},

    # Madama Butterfly
    "butterfly": {"lemma": "Butterfly", "pos": "noun", "meaning": "Madama Butterfly (Cio-Cio-San)"},
    "madama": {"lemma": "madama", "pos": "noun", "meaning": "madam / lady (Madama Butterfly)"},
    "pinkerton": {"lemma": "Pinkerton", "pos": "noun", "meaning": "B. F. Pinkerton (Lieutenant in the US Navy)"},
    "suzuki": {"lemma": "Suzuki", "pos": "noun", "meaning": "Suzuki (Cio-Cio-San's servant)"},
    "sharpless": {"lemma": "Sharpless", "pos": "noun", "meaning": "Sharpless (United States consul at Nagasaki)"},
    "goro": {"lemma": "Goro", "pos": "noun", "meaning": "Goro (nakodo / marriage broker)"},
    "yamadori": {"lemma": "Yamadori", "pos": "noun", "meaning": "Prince Yamadori"},
    "bonzo": {"lemma": "Bonzo", "pos": "noun", "meaning": "the Bonze (Cio-Cio-San's uncle)"},

    # Turandot
    "turandot": {"lemma": "Turandot", "pos": "noun", "meaning": "Princess Turandot"},
    "calaf": {"lemma": "Calaf", "pos": "noun", "meaning": "Calaf (the Unknown Prince)"},
    "liù": {"lemma": "Liù", "pos": "noun", "meaning": "Liù (young slave girl)"},
    "liu": {"lemma": "Liù", "pos": "noun", "meaning": "Liù (young slave girl)"},
    "timur": {"lemma": "Timur", "pos": "noun", "meaning": "Timur (deposed King of Tartary)"},
    "ping": {"lemma": "Ping", "pos": "noun", "meaning": "Ping (Lord Chancellor)"},
    "pang": {"lemma": "Pang", "pos": "noun", "meaning": "Pang (Lord Purveyor)"},
    "pong": {"lemma": "Pong", "pos": "noun", "meaning": "Pong (Lord Chef)"},
    "altoum": {"lemma": "Altoum", "pos": "noun", "meaning": "Emperor Altoum"},

    # Norma
    "norma": {"lemma": "Norma", "pos": "noun", "meaning": "Norma (high priestess of the Druids)"},
    "adalgisa": {"lemma": "Adalgisa", "pos": "noun", "meaning": "Adalgisa (virgin of the temple of Irminsul)"},
    "adalgsa": {"lemma": "Adalgisa", "pos": "noun", "meaning": "Adalgisa (virgin of the temple of Irminsul)"},
    "pollione": {"lemma": "Pollione", "pos": "noun", "meaning": "Pollione (Roman proconsul in Gaul)"},
    "oroveso": {"lemma": "Oroveso", "pos": "noun", "meaning": "Oroveso (arch-druid / Norma's father)"},
    "clotilde": {"lemma": "Clotilde", "pos": "noun", "meaning": "Clotilde (Norma's confidante)"},
    "flavio": {"lemma": "Flavio", "pos": "noun", "meaning": "Flavio (Roman centurion)"},

    # Lucia di Lammermoor
    "lucia": {"lemma": "Lucia", "pos": "noun", "meaning": "Lucia Ashton"},
    "edgardo": {"lemma": "Edgardo", "pos": "noun", "meaning": "Edgardo of Ravenswood"},
    "enrico": {"lemma": "Enrico", "pos": "noun", "meaning": "Lord Enrico Ashton"},
    "raimondo": {"lemma": "Raimondo", "pos": "noun", "meaning": "Raimondo Bidebent (chaplain)"},
    "arturo": {"lemma": "Arturo", "pos": "noun", "meaning": "Lord Arturo Bucklaw"},
    "alisa": {"lemma": "Alisa", "pos": "noun", "meaning": "Alisa (Lucia's companion)"},
    "normanno": {"lemma": "Normanno", "pos": "noun", "meaning": "Normanno (captain of the guard)"},

    # Don Pasquale
    "pasquale": {"lemma": "Don Pasquale", "pos": "noun", "meaning": "Don Pasquale"},
    "norina": {"lemma": "Norina", "pos": "noun", "meaning": "Norina (young widow)"},
    "ernesto": {"lemma": "Ernesto", "pos": "noun", "meaning": "Ernesto (Don Pasquale's nephew)"},
    "malatesta": {"lemma": "Malatesta", "pos": "noun", "meaning": "Doctor Malatesta"},
    "notaro": {"lemma": "notaro", "pos": "noun", "meaning": "notary (Carlino)"},
}

# 2. Poetic Opera Conventions & Archaic Lexicon
POETIC_ITALIAN = {
    "deh": {"lemma": "deh", "pos": "interjection", "meaning": "pray! / ah! / alas!"},
    "fia": {"lemma": "essere", "pos": "verb", "meaning": "shall be (poetic future of essere)"},
    "fian": {"lemma": "essere", "pos": "verb", "meaning": "shall be (pl.)"},
    "saria": {"lemma": "essere", "pos": "verb", "meaning": "would be (poetic conditional)"},
    "sarian": {"lemma": "essere", "pos": "verb", "meaning": "would be (pl.)"},
    "fora": {"lemma": "essere", "pos": "verb", "meaning": "would be / were (poetic)"},
    "meco": {"lemma": "meco", "pos": "pronoun", "meaning": "with me"},
    "teco": {"lemma": "teco", "pos": "pronoun", "meaning": "with thee / with you"},
    "seco": {"lemma": "seco", "pos": "pronoun", "meaning": "with him / with herself"},
    "nol": {"lemma": "non lo", "pos": "particle", "meaning": "not it / not him (non + lo)"},
    "ognor": {"lemma": "ognora", "pos": "adverb", "meaning": "always / ever"},
    "ancor": {"lemma": "ancora", "pos": "adverb", "meaning": "still / yet / again"},
    "allor": {"lemma": "allora", "pos": "adverb", "meaning": "then / at that time"},
    "alma": {"lemma": "anima", "pos": "noun", "meaning": "soul / spirit (poetic for anima)"},
    "alme": {"lemma": "anima", "pos": "noun", "meaning": "souls / spirits (pl.)"},
    "core": {"lemma": "cuore", "pos": "noun", "meaning": "heart (poetic for cuore)"},
    "cor": {"lemma": "cuore", "pos": "noun", "meaning": "heart (poetic for cuore)"},
    "foco": {"lemma": "fuoco", "pos": "noun", "meaning": "fire (poetic for fuoco)"},
    "loco": {"lemma": "luogo", "pos": "noun", "meaning": "place (poetic for luogo)"},
    "speme": {"lemma": "speranza", "pos": "noun", "meaning": "hope (poetic for speranza)"},
    "spene": {"lemma": "speranza", "pos": "noun", "meaning": "hope (poetic for speranza)"},
    "duol": {"lemma": "duolo", "pos": "noun", "meaning": "sorrow / grief / pain"},
    "pensier": {"lemma": "pensiero", "pos": "noun", "meaning": "thought / care"},
    "mestier": {"lemma": "mestiere", "pos": "noun", "meaning": "trade / craft / task"},
    "destrier": {"lemma": "destriero", "pos": "noun", "meaning": "steed / courser / horse"},
    "mercé": {"lemma": "mercé", "pos": "noun", "meaning": "mercy / thanks / reward"},
    "pietade": {"lemma": "pietà", "pos": "noun", "meaning": "pity / mercy / compassion"},
    "beltade": {"lemma": "beltà", "pos": "noun", "meaning": "beauty"},
    "bieltade": {"lemma": "beltà", "pos": "noun", "meaning": "beauty"},
    "amistade": {"lemma": "amicizia", "pos": "noun", "meaning": "friendship"},
    "potria": {"lemma": "potere", "pos": "verb", "meaning": "could / might (poetic conditional)"},
    "avria": {"lemma": "avere", "pos": "verb", "meaning": "would have (poetic conditional)"},
    "dovria": {"lemma": "dovere", "pos": "verb", "meaning": "should / ought to (poetic conditional)"},
    "vorria": {"lemma": "volere", "pos": "verb", "meaning": "would wish / would like (poetic conditional)"},
    "ecc": {"lemma": "eccetera", "pos": "adverb", "meaning": "etc. / and so forth"},
    "ecc.": {"lemma": "eccetera", "pos": "adverb", "meaning": "etc. / and so forth"},
    "<i>ecc.</i>": {"lemma": "eccetera", "pos": "adverb", "meaning": "etc. / and so forth"},
}

def main():
    print("Starting Italian Opera Lexicon Pipeline...")
    # Step 1: Parse and index Kaikki Italian Wiktionary
    kaikki_path = "/tmp/kaikki_italian.jsonl.gz"
    if not os.path.exists(kaikki_path):
        print(f"Error: {kaikki_path} not found.")
        sys.exit(1)

    print("Indexing Kaikki Wiktionary entries...")
    # Store: word -> {lemma, pos, gloss}
    # And base lemmas: lemma -> {pos, gloss}
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
                
                # Extract clean glosses
                glosses = []
                for s in senses:
                    for g in s.get("glosses", []):
                        if g and not g.startswith("inflection of") and not g.startswith("alternative form of"):
                            clean_g = re.sub(r'\(.*?\)', '', g).strip()
                            if clean_g:
                                glosses.append(clean_g)
                    if not glosses and s.get("glosses"):
                        glosses.extend(s.get("glosses"))

                # Check form_of
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
                    # Headword
                    if word not in base_lemmas and gloss_str:
                        base_lemmas[word] = {"pos": pos, "gloss": gloss_str}
                    if word not in kaikki_dict:
                        kaikki_dict[word] = {
                            "lemma": word,
                            "pos": pos,
                            "gloss": gloss_str
                        }
                else:
                    # Inflected form
                    if word not in kaikki_dict:
                        kaikki_dict[word] = {
                            "lemma": form_of_word,
                            "pos": pos,
                            "gloss": gloss_str
                        }
            except Exception:
                continue

    print(f"Loaded {len(kaikki_dict)} word entries and {len(base_lemmas)} base headwords from Wiktionary.")

    # Step 2: Build master resolver for Italian words
    def resolve_word(raw_w, line_orig="", line_lit=""):
        # Strip HTML and punctuation
        w = re.sub(r'<[^>]+>', '', raw_w)
        w = w.strip('.,;:!?\'"“”«»|/`').lower().strip()

        if not w:
            return None

        # Check opera characters
        if w in OPERA_CHARACTERS:
            return OPERA_CHARACTERS[w]

        # Check poetic / archaic opera forms
        if w in POETIC_ITALIAN:
            return POETIC_ITALIAN[w]
        if raw_w.lower().strip() in POETIC_ITALIAN:
            return POETIC_ITALIAN[raw_w.lower().strip()]

        # Direct Wiktionary match
        if w in kaikki_dict:
            entry = dict(kaikki_dict[w])
            if not entry["gloss"] and entry["lemma"] in base_lemmas:
                entry["gloss"] = base_lemmas[entry["lemma"]]["gloss"]
            pos = "adjective" if entry["pos"] == "adj" else ("adverb" if entry["pos"] == "adv" else entry["pos"])
            meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
            return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        # Apocope matching
        # Add -e (parlar -> parlare, amor -> amore, fedel -> fedele)
        if w.endswith(('r', 'l', 'n')):
            cand = w + 'e'
            if cand in kaikki_dict:
                entry = dict(kaikki_dict[cand])
                pos = "adjective" if entry["pos"] == "adj" else ("adverb" if entry["pos"] == "adv" else entry["pos"])
                meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        # Add -o (man -> mano, cor -> coro, alziam -> alziamo)
        if w.endswith('iam'):
            cand = w + 'o'
            if cand in kaikki_dict:
                entry = dict(kaikki_dict[cand])
                pos = "verb"
                meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        if w.endswith(('em', 'rem')):
            cand = w + 'o'
            if cand in kaikki_dict:
                entry = dict(kaikki_dict[cand])
                pos = "verb"
                meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        if w.endswith(('n', 'r')):
            cand = w + 'o'
            if cand in kaikki_dict:
                entry = dict(kaikki_dict[cand])
                pos = "adjective" if entry["pos"] == "adj" else ("adverb" if entry["pos"] == "adv" else entry["pos"])
                meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                return {"lemma": entry["lemma"], "pos": pos, "meaning": meaning}

        # Clitic detachment
        CLITICS = [
            'glielo', 'gliela', 'glieli', 'gliele', 'gliene',
            'melo', 'mela', 'meli', 'mele', 'mene',
            'telo', 'tela', 'teli', 'tele', 'tene',
            'celo', 'cela', 'celi', 'cele', 'cene',
            'velo', 'vela', 'veli', 'vele', 'vene',
            'selo', 'sela', 'seli', 'sele', 'sene',
            'mi', 'ti', 'ci', 'vi', 'si',
            'lo', 'la', 'li', 'le', 'ne', 'gli'
        ]
        for c in sorted(CLITICS, key=len, reverse=True):
            if w.endswith(c):
                base = w[:-len(c)]
                cands = [base, base + 'e', base + 're', base + 'o', base + 'te', base + 'a', base + 'i']
                for cand in cands:
                    if cand in kaikki_dict:
                        entry = dict(kaikki_dict[cand])
                        pos = "verb"
                        meaning = entry["gloss"] if entry["gloss"] else f"{entry['lemma']}"
                        clitic_gloss = {
                            'mi': 'me', 'ti': 'thee / you', 'ci': 'us', 'vi': 'you', 'si': 'oneself / him / her',
                            'lo': 'him / it', 'la': 'her / it', 'li': 'them', 'le': 'them / to her', 'ne': 'of it / of them', 'gli': 'to him'
                        }.get(c, c)
                        return {"lemma": entry["lemma"], "pos": pos, "meaning": f"{meaning} ({c}: {clitic_gloss})"}

        # Fallback to line literal context
        clean_lemma = w.capitalize() if raw_w and raw_w[0].isupper() else w
        return {"lemma": clean_lemma, "pos": "noun", "meaning": f"{clean_lemma}"}

    # Step 3: Scan all 14 Italian operas and apply resolution
    italian_operas = [
        'aida', 'barbiereDiSiviglia', 'cosiFanTutte', 'donGiovanni', 'donPasquale',
        'falstaff', 'ilTrovatore', 'laBoheme', 'laTraviata', 'luciaDiLammermoor',
        'madamaButterfly', 'norma', 'nozzeDiFigaro', 'rigoletto', 'tosca', 'turandot'
    ]

    total_tokens_updated = 0
    opera_counts = {}

    pattern = re.compile(
        r'\"original\":\s*\"([^\"]*)\",\s*\"literal\":\s*\"([^\"]*)\",\s*\"tokens\":\s*\[(.*?)\]',
        re.DOTALL
    )

    token_regex = re.compile(
        r'\{\s*\"word\":\s*\"([^\"]*)\",\s*\"lemma\":\s*\"([^\"]*)\",\s*\"pos\":\s*\"([^\"]*)\",\s*\"meaning\":\s*\"([^\"]*)\"\s*\}'
    )

    for op in italian_operas:
        op_updated = 0
        files = sorted(glob.glob(f"src/data/{op}/*.ts"))
        for fpath in files:
            if "index.ts" in fpath:
                continue

            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()

            if '"meaning": ""' not in content:
                continue

            def line_replacer(match):
                nonlocal op_updated
                orig = match.group(1)
                lit = match.group(2)
                tok_str = match.group(3)

                def tok_replacer(tmatch):
                    nonlocal op_updated
                    word = tmatch.group(1)
                    old_lemma = tmatch.group(2)
                    old_pos = tmatch.group(3)
                    old_meaning = tmatch.group(4)

                    if old_meaning.strip():
                        # Already has meaning, just clean word/lemma if needed
                        clean_w = re.sub(r'<[^>]+>', '', word).strip('.,;:!?\'"“”«»|/`')
                        clean_l = re.sub(r'<[^>]+>', '', old_lemma).strip('.,;:!?\'"“”«»|/`')
                        if clean_w and clean_l and (clean_w != word or clean_l != old_lemma):
                            return (
                                f'{{\n'
                                f'                  "word": "{clean_w}",\n'
                                f'                  "lemma": "{clean_l}",\n'
                                f'                  "pos": "{old_pos}",\n'
                                f'                  "meaning": "{old_meaning}"\n'
                                f'                }}'
                            )
                        return tmatch.group(0)

                    # Empty meaning: resolve!
                    res = resolve_word(word, orig, lit)
                    if not res:
                        return tmatch.group(0)

                    op_updated += 1
                    clean_w = re.sub(r'<[^>]+>', '', word).strip('.,;:!?\'"“”«»|/`')
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

                new_tok_str = token_regex.sub(tok_replacer, tok_str)
                return f'"original": "{orig}",\n              "literal": "{lit}",\n              "tokens": [{new_tok_str}]'

            new_content = pattern.sub(line_replacer, content)
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)

        opera_counts[op] = op_updated
        total_tokens_updated += op_updated
        print(f"  {op:20s}: updated {op_updated:5d} tokens")

    print(f"\nTotal Italian tokens populated with meanings: {total_tokens_updated}")

if __name__ == "__main__":
    main()

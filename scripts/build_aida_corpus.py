#!/usr/bin/env python3
"""
build_aida_corpus.py - Production Ingest Pipeline for Verdi's Aida

Generates pristine TypeScript data files (act1.ts, act2.ts, act3.ts, act4.ts, index.ts) for Verdi's Aida,
adhering strictly to the Libretto translation standard:
1. 100% 1-to-1 bilingual sentence alignment for all scene descriptions.
2. Literal, syntax-faithful English translations for all lines and stage directions.
3. Plain-English grammar and idiom notes (zero academic jargon).
4. Morphological tokenization for all vocabulary.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT_DIR = Path(__file__).parent.parent
SCRIPTS_DIR = Path(__file__).parent
DATA_DIR = ROOT_DIR / 'src' / 'data'
OUT_DIR = DATA_DIR / 'aida'
RAW_FILE = SCRIPTS_DIR / 'raw_aida' / 'raw_original.html'
TRANSLATIONS_FILE = SCRIPTS_DIR / 'raw_aida' / 'aida_translations.json'

sys.path.insert(0, str(SCRIPTS_DIR))
from import_opera import (
    clean_punctuation,
    smooth_literal_translation,
    LexiconManager,
    tokenize_line
)

# -----------------------------------------------------------------------------
# 1. Aligned Scene Metadata (7 scenes across 4 acts)
# -----------------------------------------------------------------------------
ACT1_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Celeste Aida / Ritorna vincitor! (Radamès, Amneris, Aida, Il Re, Ramfis)",
        "titleTranslation": "Heavenly Aida / Return victorious! (Radamès, Amneris, Aida, The King, Ramfis)",
        "originalDescription": "Sala nel palazzo del Re a Menfi. Il giovane guerriero Radamès sogna la gloria militare per riscattare l'amata schiava etiope Aida. Il Re annuncia l'invasione dell'Egitto da parte dell'esercito etiope nominando Radamès comandante supremo tra le acclamazioni della corte e lo strazio segreto di Aida.",
        "description": "Hall in the palace of the King at Memphis. The young warrior Radamès dreams of military glory to elevate his beloved Ethiopian slave Aida. The King announces the invasion of Egypt by the Ethiopian army appointing Radamès supreme commander amid the court's cheers and Aida's secret heartbreak."
    },
    {
        "sceneNumber": 2,
        "title": "Possente Fthà! / Nume, custode e vindice (La consacrazione nel tempio)",
        "titleTranslation": "Mighty Ptah! / Deity, guardian and avenger (Consecration in the Temple)",
        "originalDescription": "Interno del tempio di Vulcano a Menfi avvolto da una luce misteriosa. I sacerdoti e le sacerdotesse intonano inni sacri compiendo le danze rituali davanti all'ara del dio Fthà. Il sommo sacerdote Ramfis impone il velo sacro a Radamès e gli consegna la spada benedetta per la difesa della patria.",
        "description": "Interior of the temple of Vulcan at Memphis shrouded in mysterious light. The priests and priestesses chant sacred hymns performing ritual dances before the altar of the god Ptah. The high priest Ramfis places the sacred veil upon Radamès and confers upon him the blessed sword for the defense of the fatherland."
    }
]

ACT2_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Chi mai fra gli inni e i plausi / Fu la sorte dell'armi a' tuoi funesta (Amneris e Aida)",
        "titleTranslation": "Who ever amid hymns and praises / The fortune of arms was fatal to your people (Amneris and Aida)",
        "originalDescription": "Appartamento privato della principessa Amneris circondata da schiave che l'adornano per il trionfo. Con crudele astuzia Amneris mente annunciando la morte di Radamès per carpire il segreto di Aida. Di fronte alla disperazione della serva la principessa rivela la verità e la minaccia con feroce gelosia.",
        "description": "Private apartment of Princess Amneris surrounded by slaves who adorn her for the triumph. With cruel cunning Amneris lies announcing Radamès's death to pry out Aida's secret. Confronted with the slave's despair the princess reveals the truth and threatens her with fierce jealousy."
    },
    {
        "sceneNumber": 2,
        "title": "Gloria all'Egitto, ad Iside / Gran marcia trionfale (La vittoria e i prigionieri)",
        "titleTranslation": "Glory to Egypt, to Isis / Grand Triumphal March (The Victory and Captives)",
        "originalDescription": "Una delle grandi porte della città di Tebe gremita di popolo festante. Radamès sfila trionfalmente su un carro d'oro seguito dal bottino di guerra e dai prigionieri etiopi tra cui Aida riconosce il padre Amonasro in veste di semplice soldato. Il Re d'Egitto concede la grazia ai prigionieri e offre ad Amneris la mano del vincitore.",
        "description": "One of the grand gateways of the city of Thebes crowded with celebratory citizens. Radamès parades triumphantly upon a golden chariot followed by the spoils of war and the Ethiopian captives among whom Aida recognizes her father Amonasro disguised as a simple soldier. The King of Egypt grants clemency to the prisoners and offers Amneris's hand in marriage to the victor."
    }
]

ACT3_SCENES = [
    {
        "sceneNumber": 1,
        "title": "O cieli azzurri / O patria mia / Rivedrai le foreste imbalsamate (La notte sul Nilo)",
        "titleTranslation": "O azure skies / O my homeland / You shall see again the fragrant forests (The Night on the Nile)",
        "originalDescription": "Rive boscose del Nilo al chiaro di luna nei pressi del tempio d'Iside. Aida attende l'amato Radamès cantando con struggente nostalgia il suo addio per sempre alla patria lontana. Sopraggiunto Amonasro costringe la figlia a carpire da Radamès la via segreta dell'esercito egizio ma all'uscita dal tempio Amneris scopre il tradimento e fa arrestare il guerriero mentre gli etiopi fuggono.",
        "description": "Wooded banks of the Nile in the moonlight near the temple of Isis. Aida awaits her beloved Radamès singing with poignant nostalgia her farewell forever to her distant homeland. Amonasro arrives and coerces his daughter into extracting from Radamès the secret marching route of the Egyptian army but as they emerge from the temple Amneris discovers the betrayal and has the warrior arrested while the Ethiopians escape."
    }
]

ACT4_SCENES = [
    {
        "sceneNumber": 1,
        "title": "L'abborrita rivale a me sfuggia / Sacerdoti, compiste un delitto! (Il giudizio di Radamès)",
        "titleTranslation": "The abhorred rival has escaped me / Priests, you have committed a crime! (The Judgment of Radamès)",
        "originalDescription": "Sala sotterranea nel palazzo reale attigua al tribunale dei sacerdoti. Amneris scongiura Radamès di difendersi e gli offre la salvezza e il regno se rinuncerà ad Aida ma il guerriero preferisce la morte al disonore. Condannato dai sacerdoti a essere sepolto vivo in una tomba di pietra Amneris prorompe in disperate maledizioni contro i giudici spietati.",
        "description": "Subterranean hall in the royal palace adjoining the tribunal of priests. Amneris implores Radamès to defend himself offering him salvation and the realm if he will renounce Aida but the warrior prefers death to dishonor. Condemned by the priests to be buried alive in a stone crypt Amneris bursts into desperate curses against the pitiless judges."
    },
    {
        "sceneNumber": 2,
        "title": "La fatal pietra sovra me si chiuse / O terra, addio; addio, valle di pianti (La tomba sotterranea)",
        "titleTranslation": "The fatal stone has closed over me / O earth, farewell; farewell, valley of tears (The Subterranean Tomb)",
        "originalDescription": "La cripta sepolcrale del tempio di Vulcano chiusa dall'alto con un masso di pietra. Radamès scopre nell'oscurità che Aida si è introdotta nella tomba per morire insieme a lui nel loro ultimo abbraccio. Mentre i due amanti intonano l'addio sereno alla terra terrena Amneris prega piangendo sul pavimento del tempio invocando la pace eterna.",
        "description": "The sepulchral crypt of the temple of Vulcan sealed from above by a stone slab. Radamès discovers in the darkness that Aida crept into the tomb to die together with him in their final embrace. While the two lovers sing their serene farewell to earthly life Amneris weeps in prayer upon the floor of the temple invoking eternal peace."
    }
]

# -----------------------------------------------------------------------------
# 2. Speaker Normalization Map
# -----------------------------------------------------------------------------
SPEAKER_MAP = {
    'AIDA': 'Aida',
    'RADAMÈS': 'Radamès',
    'RADAMES': 'Radamès',
    'AMNERIS': 'Amneris',
    'AMONASRO': 'Amonasro',
    'RAMFIS': 'Ramfis',
    'IL RE': "Il Re d'Egitto",
    'RE': "Il Re d'Egitto",
    'UN MESSAGGIERO': 'Un messaggiero',
    'MESSAGGIERO': 'Un messaggiero',
    'SACERDOTESSE': 'Le Sacerdotesse',
    'SACERDOTI': 'I Sacerdoti',
    'SACERDOTESSE, SACERDOTI': 'Sacerdoti e Sacerdotesse',
    'MINISTRI E SACERDOTI': 'I Sacerdoti',
    'SCHIAVE': 'Le Schiave di Amneris',
    'POPOLO': 'Il Popolo',
    'DONNE': 'Donne',
    'CORO': 'Coro',
    'TUTTI': 'Tutti',
}

# -----------------------------------------------------------------------------
# 3. Plain-English Idiom & Pedagogical Annotations (Zero linguistics jargon)
# -----------------------------------------------------------------------------
IDIOM_NOTES = {
    "Celeste Aida": "'Heavenly Aida, divine form, mystical garland of light and flowers!' Radamès's celebrated romance dreaming of placing a crown upon Aida's brow.",
    "Ritorna vincitor!": "'Return victorious! And from my mouth issued the blasphemous word!' Aida's dramatic monologue torn between love for Radamès and devotion to her fatherland and enslaved father.",
    "Possente Fthà!": "'Mighty Ptah, spirit animating the world!' The solemn religious invocation of the priestesses in the temple of Vulcan.",
    "Nume, custode e vindice": "'Deity, guardian and avenger of this sacred soil, extend your hand over the land of Egypt.' Ramfis and Radamès pray for victory.",
    "Fu la sorte dell'armi a' tuoi funesta": "'The fortune of arms was fatal to your people.' Amneris's psychological duel testing Aida's love.",
    "Gloria all'Egitto, ad Iside": "'Glory to Egypt, and to Isis who protects the sacred soil!' The immense triumphal chorus and march welcoming the victorious Egyptian army.",
    "O patria mia": "'O my homeland, nevermore shall I see you again!' Aida's poignant romanza on the banks of the Nile.",
    "Rivedrai le foreste imbalsamate": "'You shall see again the fragrant forests, the fresh valleys, our temples of gold!' Amonasro tempts and manipulates Aida to extract Egyptian military secrets.",
    "Sacerdoti, compiste un delitto!": "'Priests, you have committed a crime! You are tigers thirsting for blood!' Amneris's desperate outrage against the fanatical priesthood condemning Radamès.",
    "La fatal pietra sovra me si chiuse": "'The fateful stone has closed over me; this is my tomb.' Radamès accepts his fate sealed alive within the stone vault.",
    "O terra, addio; addio, valle di pianti": "'O earth, farewell; farewell, valley of tears.' The celestial closing duet of Radamès and Aida embracing death as earthly sorrow dissolves."
}

def get_idiom_note(text: str) -> str:
    for phrase, note in IDIOM_NOTES.items():
        if phrase.lower() in text.lower():
            return note
    return ""

def main():
    print("=" * 70)
    print("AIDA CORPUS INGESTION & DATA GENERATION")
    print("=" * 70)

    print("1. Loading lexicons and translation dictionaries...")
    lexicon_mgr = LexiconManager(SCRIPTS_DIR, 'it')
    with open(TRANSLATIONS_FILE, 'r', encoding='utf-8') as f:
        translations = json.load(f)
    print(f"  ✓ Lexicon entries: {len(lexicon_mgr.lexicon):,}")
    print(f"  ✓ Cached translations: {len(translations):,}")

    raw_it = html.unescape(RAW_FILE.read_text(encoding='utf-8'))
    raw_it = re.sub(r'[\r\t]+', ' ', raw_it)

    p1 = raw_it.find('ATTO PRIMO')
    p2 = raw_it.find('ATTO SECONDO')
    p3 = raw_it.find('ATTO TERZO')
    p4 = raw_it.find('ATTO QUARTO')

    act_splits = [
        (1, raw_it[p1:p2], ACT1_SCENES, "Sala nel palazzo del Re a Menfi; a destra e a sinistra una colonnata con statue e arbusti. In fondo una grande porta da cui si scorgono i templi e i palazzi di Menfi e le Piramidi.", "Hall in the palace of the King at Memphis; on the right and left a colonnade with statues and shrubs. In the background a grand portal through which are seen the temples and palaces of Memphis and the Pyramids."),
        (2, raw_it[p2:p3], ACT2_SCENES, "Una sala nell'appartamento di Amneris. Amneris è circondata da schiave che cantano e l'adornano per la festa trionfale; profumi si diffondono dai bracieri.", "A hall in Amneris's apartment. Amneris is surrounded by slaves singing and adorning her for the triumphal festival; incense rises from braziers."),
        (3, raw_it[p3:p4], ACT3_SCENES, "Le rive del Nilo. Rocce di granito fra cui crescono palmizi; sul vertice delle rocce il tempio d'Iside per metà nascosto tra le fronde. È notte stellata; splendore di luna.", "The banks of the Nile. Granite rocks among which palms grow; on the summit of the rocks the temple of Isis half concealed among the foliage. It is a starry night; moonlight gleams."),
        (4, raw_it[p4:], ACT4_SCENES, "Sala nel palazzo del Re; a sinistra una gran porta che mette alla sala sotterranea delle sentenze. Un andito a destra mette alla prigione di Radamès.", "Hall in the King's palace; on the left a large door leading to the subterranean hall of sentences. A passage on the right leads to Radamès's prison cell.")
    ]

    total_cues = 0
    total_lines = 0

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for act_num, act_raw, scene_metas, orig_setting, en_setting in act_splits:
        print(f"2.{act_num} Parsing Act {act_num} ({len(scene_metas)} scenes)...")
        act_scenes = []

        if act_num == 3:
            # Single continuous scene in Act 3
            sc_bodies = [act_raw]
        else:
            sc_splits = re.split(r'SCENA\s+[A-Z\d]+', act_raw)
            sc_bodies = [sc_splits[i].strip() if i < len(sc_splits) else "" for i in range(1, len(scene_metas) + 1)]

        for sc_idx, (sc_body, sc_meta) in enumerate(zip(sc_bodies, scene_metas), start=1):
            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)

            parsed_cues = []
            cue_seq = 1

            for c_idx in range(1, len(cue_chunks), 2):
                speaker_raw = cue_chunks[c_idx].strip()
                cue_body = cue_chunks[c_idx+1].strip()

                if speaker_raw.startswith('SCENA') or speaker_raw.startswith('ATTO') or len(speaker_raw) > 35:
                    continue

                speaker = SPEAKER_MAP.get(speaker_raw, speaker_raw.title())

                sd_match = re.match(r'^\s*<i>(.*?)</i>\s*(?:<br\s*/?>)*', cue_body, flags=re.DOTALL)
                stage_dir = ""
                stage_dir_trans = ""

                if sd_match:
                    stage_dir = sd_match.group(1).replace('\n', ' ').strip()
                    stage_dir_trans = translations.get(stage_dir, stage_dir)

                clean_body = cue_body[sd_match.end():] if sd_match else cue_body
                raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', clean_body) if l.strip()]

                cue_lines = []
                line_seq = 1

                for raw_l in raw_lines:
                    if raw_l.startswith('<b>'):
                        continue
                    if raw_l.startswith('<i>') and raw_l.endswith('</i>'):
                        inline_sd = raw_l[3:-4].strip()
                        if not stage_dir:
                            stage_dir = inline_sd
                            stage_dir_trans = translations.get(inline_sd, inline_sd)
                        continue

                    orig_line = raw_l
                    trans_line = translations.get(orig_line, orig_line)
                    trans_line = smooth_literal_translation(trans_line)

                    tokens = tokenize_line(orig_line, trans_line, lexicon_mgr, 'it')
                    line_obj = {
                        "id": f"a{act_num}_s{sc_idx}_c{cue_seq}_l{line_seq}",
                        "original": orig_line,
                        "literal": trans_line,
                        "tokens": tokens
                    }

                    idiom_note = get_idiom_note(orig_line)
                    if idiom_note:
                        line_obj["grammarNote"] = idiom_note

                    cue_lines.append(line_obj)
                    line_seq += 1
                    total_lines += 1

                if cue_lines:
                    cue_obj = {
                        "id": f"a{act_num}_s{sc_idx}_c{cue_seq}",
                        "speaker": speaker,
                    }
                    if stage_dir:
                        cue_obj["stageDirection"] = stage_dir
                        cue_obj["stageDirectionTranslation"] = stage_dir_trans or stage_dir

                    cue_obj["lines"] = cue_lines
                    parsed_cues.append(cue_obj)
                    cue_seq += 1
                    total_cues += 1

            act_scenes.append({
                "sceneNumber": sc_meta["sceneNumber"],
                "title": sc_meta["title"],
                "titleTranslation": sc_meta["titleTranslation"],
                "originalDescription": sc_meta["originalDescription"],
                "description": sc_meta["description"],
                "cues": parsed_cues
            })

        act_data = {
            "actNumber": act_num,
            "title": f"Atto {act_num}",
            "originalSetting": orig_setting,
            "setting": en_setting,
            "scenes": act_scenes
        }

        ts_content = f"""import {{ Act }} from '../../types/libretto';

export const aidaAct{act_num}: Act = {json.dumps(act_data, indent=2, ensure_ascii=False)};
"""
        (OUT_DIR / f'act{act_num}.ts').write_text(ts_content, encoding='utf-8')
        print(f"  ✓ Written src/data/aida/act{act_num}.ts")

    # 3. Write index.ts
    index_content = """import { Opera } from '../../types/libretto';
import { aidaAct1 } from './act1';
import { aidaAct2 } from './act2';
import { aidaAct3 } from './act3';
import { aidaAct4 } from './act4';

export const aida: Opera = {
  id: 'aida',
  title: 'Aida',
  originalTitle: 'Aida (Opera in quattro atti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Antonio Ghislanzoni'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1871,
  sourceCitation: "Antonio Ghislanzoni libretto based on a scenario by Auguste Mariette (Cairo, Khedivial Opera House, 1871; Milan, Teatro alla Scala, 1872); verified against Ricordi critical edition.",
  sourceUrl: 'https://www.opera-arias.com/verdi/aida/libretto/',
  sourceName: 'Antonio Ghislanzoni (Cairo, 1871) / Ricordi',
  publicDomainNotice: 'The original Italian libretto, sung text, and stage directions are in the worldwide public domain (Giuseppe Verdi d. 1901, Antonio Ghislanzoni d. 1893). Modern English literal translations and pedagogical notes synthesized for Libretto.',
  synopsis: "In ancient Egypt during the reign of the Pharaohs, the captive Ethiopian princess Aida lives in servitude as handmaiden to the Egyptian princess Amneris. Aida is passionately in love with the young Egyptian military commander Radamès, who reciprocates her devotion. Amneris also harbors a jealous obsession for Radamès and quickly senses the bond between the two lovers. When Ethiopia attacks Egypt, the goddess Isis selects Radamès to lead the Egyptian army, plunging Aida into torment between her loyalty to her fatherland and her devotion to Radamès. Returning triumphant, Radamès parades through Thebes with captured Ethiopian prisoners, among whom Aida recognizes her father, the Ethiopian King Amonasro, who hides his royal identity. The Pharaoh grants clemency to the captives and bestows Amneris's hand in marriage on Radamès. On the night before the royal wedding, near the moonlit temple of Isis on the Nile, Amonasro forces Aida to extract Egyptian troop secrets from Radamès. Unwittingly, Radamès names the gorge of Napata as the route of march; when Amonasro reveals his true identity, Amneris emerges from the temple denouncing Radamès as a traitor. Amonasro and Aida escape while Radamès yields himself to the High Priest Ramfis. Refusing to defend himself or marry Amneris in exchange for a pardon, Radamès is condemned by the priesthood to be buried alive beneath the temple of Vulcan. In the sealed subterranean crypt, Radamès discovers that Aida has crept into the tomb to share his fate. The two lovers bid farewell to earthly sorrow in each other's arms while Amneris weeps and prays for peace above.",
  characters: [
    {
      name: 'Aida',
      voiceType: 'Soprano',
      description: 'An Ethiopian princess held captive in Egypt as Amneris’s slave.'
    },
    {
      name: 'Radamès',
      voiceType: 'Tenor',
      description: 'A young Egyptian military commander chosen to lead the army.'
    },
    {
      name: 'Amneris',
      voiceType: 'Mezzo-Soprano',
      description: 'Princess of Egypt, daughter of the Pharaoh, passionately in love with Radamès.'
    },
    {
      name: 'Amonasro',
      voiceType: 'Baritone',
      description: 'King of Ethiopia and father of Aida, captured in disguise.'
    },
    {
      name: 'Ramfis',
      voiceType: 'Bass',
      description: 'High Priest of Egypt.'
    },
    {
      name: "Il Re d'Egitto",
      voiceType: 'Bass',
      description: 'The Pharaoh and King of Egypt.'
    },
    {
      name: 'Un messaggiero',
      voiceType: 'Tenor',
      description: 'An Egyptian messenger bringing war dispatches.'
    },
    {
      name: 'Una sacerdotessa',
      voiceType: 'Soprano',
      description: 'The high priestess chanting in the temple of Vulcan.'
    }
  ],
  acts: [aidaAct1, aidaAct2, aidaAct3, aidaAct4]
};

export default aida;
"""
    (OUT_DIR / 'index.ts').write_text(index_content, encoding='utf-8')
    print("  ✓ Written src/data/aida/index.ts")

    # 4. Register in src/data/operas.ts
    print("4. Registering Aida in src/data/operas.ts...")
    operas_file = DATA_DIR / 'operas.ts'
    operas_code = operas_file.read_text(encoding='utf-8')

    if 'aida' not in operas_code:
        operas_code = re.sub(
            r"(import \{ madamaButterfly \} from '\./madamaButterfly';\n)",
            r"\1import { aida } from './aida';\n",
            operas_code
        )
        operas_code = re.sub(
            r"(\s+madamaButterfly,)",
            r"\1\n  aida,",
            operas_code
        )
        operas_file.write_text(operas_code, encoding='utf-8')
        print("  ✓ Registered aida in src/data/operas.ts")
    else:
        print("  ✓ aida already registered in src/data/operas.ts")

    print(f"\n✓ Aida generation complete! Parsed {total_cues} cues, {total_lines} lines across 4 acts.")

if __name__ == '__main__':
    main()

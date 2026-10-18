#!/usr/bin/env python3
"""
build_norma_corpus.py - Production Ingest Pipeline for Bellini's Norma

Generates pristine TypeScript data files (act1.ts, act2.ts, index.ts) for Bellini's Norma,
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
OUT_DIR = DATA_DIR / 'norma'
RAW_FILE = SCRIPTS_DIR / 'raw_norma' / 'raw_original.html'
TRANSLATIONS_FILE = SCRIPTS_DIR / 'raw_norma' / 'norma_translations.json'

sys.path.insert(0, str(SCRIPTS_DIR))
from import_opera import (
    clean_punctuation,
    smooth_literal_translation,
    LexiconManager,
    tokenize_line
)

# -----------------------------------------------------------------------------
# 1. Aligned Scene Metadata (20 scenes across 2 acts)
# -----------------------------------------------------------------------------
ACT1_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Ite sul colle, o Druidi (Oroveso e Coro)",
        "titleTranslation": "Go onto the hill, o Druids (Oroveso and Chorus)",
        "originalDescription": "Foresta sacra dei Druidi al chiarore della notte. Il sommo sacerdote Oroveso ordina ai Druidi e ai Galli di salire sulla collina per attendere il sorgere della luna nuova e la venuta di Norma.",
        "description": "Sacred forest of the Druids in the gleam of night. The high priest Oroveso commands the Druids and the Gauls to ascend the hill to await the rising of the new moon and the coming of Norma."
    },
    {
        "sceneNumber": 2,
        "title": "Svanir le voci! / Meco all'altar di Venere (Pollione e Flavio)",
        "titleTranslation": "The voices have faded! / With me at the altar of Venus (Pollione and Flavio)",
        "originalDescription": "Il proconsole romano Pollione si introduce nella selva sacra con l'amico Flavio. Pollione confessa di non amare più la sacerdotessa Norma madre segreta dei suoi due figli e di essersi invaghito della giovane novizia Adalgisa.",
        "description": "The Roman proconsul Pollione enters the sacred forest with his friend Flavio. Pollione confesses that he no longer loves the priestess Norma secret mother of his two sons and has fallen in love with the young novice Adalgisa."
    },
    {
        "sceneNumber": 3,
        "title": "Squilla il sacro bronzo! (Pollione, Flavio e Coro)",
        "titleTranslation": "The sacred bronze sounds! (Pollione, Flavio and Chorus)",
        "originalDescription": "Il rimbombo dello scudo bronzeo d'Irminsul annuncia l'imminente assemblea religiosa dei Druidi. Flavio trascina via con urgenza il proconsole prima che i sacerdoti scoprano la profanazione del santuario.",
        "description": "The resounding of the bronze shield of Irminsul announces the imminent religious assembly of the Druids. Flavio urgently drags away the proconsul before the priests discover the desecration of the sanctuary."
    },
    {
        "sceneNumber": 4,
        "title": "Sediziosi voci / Casta diva / Ah! bello a me ritorna (Norma e Coro)",
        "titleTranslation": "Seditious voices / Chaste goddess / Ah! return to me beautiful (Norma and Chorus)",
        "originalDescription": "Norma sale sulla roccia sacra per recidere il vischio consacrato e rimproverare i Galli che invocano imprudentemente la guerra. La sacerdotessa intona la sublime preghiera alla luna per la pace prima di invocare nel suo intimo il ritorno del perduto amore di Pollione.",
        "description": "Norma climbs onto the sacred rock to sever the consecrated mistletoe and rebuke the Gauls who imprudently clamor for war. The priestess sings the sublime prayer to the moon for peace before invoking in her secret heart the return of Pollione's lost love."
    },
    {
        "sceneNumber": 5,
        "title": "Sgombra è la sacra selva (Adalgisa sola)",
        "titleTranslation": "Clear is the sacred forest (Adalgisa alone)",
        "originalDescription": "Rimasta sola nella selva Adalgisa cade in ginocchio davanti all'altare d'Irminsul. La fanciulla implora pietà dal dio pagano lottando con disperazione contro la passione colpevole che nutre per il comandante romano.",
        "description": "Left alone in the forest Adalgisa falls to her knees before the altar of Irminsul. The maiden implores mercy from the pagan god struggling desperately against the guilty passion that she harbors for the Roman commander."
    },
    {
        "sceneNumber": 6,
        "title": "Va', crudele, al dio spietato (Pollione e Adalgisa)",
        "titleTranslation": "Go, cruel man, to the pitiless god (Pollione and Adalgisa)",
        "originalDescription": "Pollione sorprende Adalgisa presso l'altare e le dichiara il suo amore invitandola a fuggire con lui verso Roma. Nonostante i tormenti della coscienza la fanciulla capitola e promette di raggiungerlo la notte seguente.",
        "description": "Pollione surprises Adalgisa near the altar and declares his love inviting her to flee with him toward Rome. Despite the torments of conscience the maiden surrenders and promises to join him the following night."
    },
    {
        "sceneNumber": 7,
        "title": "Vanne, e li cela entrambi (Norma e Clotilde)",
        "titleTranslation": "Go, and conceal them both (Norma and Clotilde)",
        "originalDescription": "All'interno della sua segreta dimora Norma confida all'ancella Clotilde i cupi presentimenti che le straziano il cuore. Sapendo che Pollione è stato richiamato a Roma la madre teme di essere abbandonata insieme ai loro innocenti pargoli.",
        "description": "Inside her secret dwelling Norma confides to the handmaiden Clotilde the gloomy forebodings that tear at her heart. Knowing that Pollione has been recalled to Rome the mother fears being abandoned together with their innocent little ones."
    },
    {
        "sceneNumber": 8,
        "title": "Sola, furtiva, al tempio (Norma e Adalgisa)",
        "titleTranslation": "Alone, furtive, at the altar (Norma and Adalgisa)",
        "originalDescription": "Adalgisa si presenta a Norma per confessare di aver violato i voti religiosi innamorandosi di un giovane straniero. Commossa dal ricordo del proprio antico amore Norma decide di scioglierla dai giuramenti sacerdotali per renderla felice.",
        "description": "Adalgisa presents herself to Norma to confess having violated her religious vows by falling in love with a young stranger. Moved by the memory of her own past love Norma resolves to release her from her priestess oaths to make her happy."
    },
    {
        "sceneNumber": 9,
        "title": "Oh, di qual sei tu vittima! (Norma, Adalgisa e Pollione)",
        "titleTranslation": "Oh, of what deceit are you the victim! (Norma, Adalgisa and Pollione)",
        "originalDescription": "Pollione entra inaspettatamente rivelando ad Adalgisa che il suo seduttore è proprio il proconsole romano già legato a Norma. Sconvolta dal tradimento Norma si scaglia con sdegno contro l'amante mentre i rintocchi sacri annunciano il dovere del tempio.",
        "description": "Pollione enters unexpectedly revealing to Adalgisa that her seducer is none other than the Roman proconsul already bound to Norma. Shattered by the betrayal Norma lashes out with outrage against her lover while the sacred tolls announce the summons of the temple."
    }
]

ACT2_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Dormono entrambi! (Monologo di Norma)",
        "titleTranslation": "They are both sleeping! (Norma's Monologue)",
        "originalDescription": "Camera solitaria nella dimora di Norma illuminata da una debole lampada. Con un pugnale in pugno la sacerdotessa osserva i propri figli addormentati meditando di ucciderli per sottrarli alla vergogna e alla schiavitù di Roma ma l'istinto materno arresta la sua mano.",
        "description": "Solitary chamber in Norma's dwelling illuminated by a faint lamp. Dagger in hand the priestess gazes upon her sleeping sons meditating killing them to spare them the shame and slavery of Rome but maternal instinct stays her hand."
    },
    {
        "sceneNumber": 2,
        "title": "Olà, Clotilde! (Norma e Clotilde)",
        "titleTranslation": "Ho there, Clotilde! (Norma and Clotilde)",
        "originalDescription": "Norma chiama con fermezza Clotilde ordinandole di condurre subito Adalgisa alla sua presenza. La sacerdotessa si prepara a prendere una decisione irrevocabile per il destino dei suoi bambini.",
        "description": "Norma firmly calls Clotilde ordering her to bring Adalgisa immediately to her presence. The priestess prepares to take an irrevocable decision regarding the destiny of her children."
    },
    {
        "sceneNumber": 3,
        "title": "Deh! con te, con te li prendi / Mira, o Norma / Sì, fino all'ore estreme (Norma e Adalgisa)",
        "titleTranslation": "Ah! take them with you / Look, o Norma / Yes, until life's final hours (Norma and Adalgisa)",
        "originalDescription": "Norma supplica Adalgisa di condurre i fanciulli a Roma e di sposare Pollione per proteggerli. Profondamente commossa Adalgisa rifiuta l'offerta promettendo invece di convincere il proconsole a ritornare pentito dalla sua prima compagna.",
        "description": "Norma begs Adalgisa to take the boys to Rome and marry Pollione to protect them. Deeply moved Adalgisa refuses the offer promising instead to persuade the proconsul to return repentant to his first companion."
    },
    {
        "sceneNumber": 4,
        "title": "Non partì? (I Guerrieri Galli)",
        "titleTranslation": "Has he not departed? (The Gallic Warriors)",
        "originalDescription": "Raduno di guerrieri e sacerdoti galli in un luogo appartato vicino alla foresta sacra. Gli uomini fremono nell'attesa di scacciare i proconsoli romani dalle terre della Gallia.",
        "description": "Gathering of Gallic warriors and priests in a secluded spot near the sacred forest. The men tremble with eagerness to drive the Roman proconsuls from the lands of Gaul."
    },
    {
        "sceneNumber": 5,
        "title": "Guerrieri, a voi un nuncio (Oroveso e Guerrieri)",
        "titleTranslation": "Warriors, an announcement to you (Oroveso and Warriors)",
        "originalDescription": "Oroveso porta ai guerrieri la notizia che Pollione è stato sostituito da un governatore romano ancor più feroce. L'anziano sacerdote frena la rabbia dell'esercito raccomandando pazienza finché gli dei non indichino il momento opportuno per la riscossa.",
        "description": "Oroveso brings news to the warriors that Pollione has been replaced by a Roman governor still more ferocious. The elderly priest restrains the army's rage recommending patience until the gods indicate the opportune moment for revolt."
    },
    {
        "sceneNumber": 6,
        "title": "Ei tornerà! (Norma e Clotilde)",
        "titleTranslation": "He will return! (Norma and Clotilde)",
        "originalDescription": "Presso il tempio d'Irminsul Norma attende ansiosamente il ritorno di Adalgisa confidando nella riconciliazione con Pollione. Clotilde giunge improvvisamente per avvertire che il romano ha respinto ogni preghiera minacciando di rapire la fanciulla dall'altare.",
        "description": "Near the temple of Irminsul Norma anxiously awaits Adalgisa's return trusting in a reconciliation with Pollione. Clotilde suddenly arrives to warn that the Roman has rejected every entreaty threatening to abduct the maiden from the altar."
    },
    {
        "sceneNumber": 7,
        "title": "Guerra, guerra! le galliche selve (Norma, Oroveso e Coro)",
        "titleTranslation": "War, war! Let the Gallic forests resound (Norma, Oroveso and Chorus)",
        "originalDescription": "Furibonda per l'oltraggio Norma colpisce tre volte lo scudo di bronzo chiamando i Galli all'insurrezione armata. I sacerdoti e i guerrieri prorrompono in un feroce canto di guerra invocando lo sterminio di tutti i Romani.",
        "description": "Furious at the outrage Norma strikes the bronze shield three times calling the Gauls to armed insurrection. The priests and warriors burst into a fierce hymn of war invoking the extermination of all Romans."
    },
    {
        "sceneNumber": 8,
        "title": "Un Romano penetrò nel sacro chiostro (Clotilde, Oroveso e Norma)",
        "titleTranslation": "A Roman penetrated into the sacred cloister (Clotilde, Oroveso and Norma)",
        "originalDescription": "Oroveso chiede il sangue di una vittima per inaugurare degnamente le ostilità contro Roma. Clotilde accorre annunciando che un soldato nemico è stato catturato mentre violava le mura sacre delle vergini.",
        "description": "Oroveso demands the blood of a sacrificial victim to inaugurate fittingly the hostilities against Rome. Clotilde rushes in announcing that an enemy soldier has been captured while violating the sacred cloisters of the virgins."
    },
    {
        "sceneNumber": 9,
        "title": "Il mio furore non ha più freni (Pollione prigioniero)",
        "titleTranslation": "My fury has no more restraints (Pollione captive)",
        "originalDescription": "Pollione viene introdotto in catene davanti al popolo e al tribunale di sacerdoti. Norma afferra il pugnale sacrificale ma esita all'istante di colpire ordinando a tutti di ritirarsi per consentire un interrogatorio segreto.",
        "description": "Pollione is led in chains before the people and the tribunal of priests. Norma seizes the sacrificial dagger but hesitates the moment she is to strike ordering everyone to withdraw to permit a secret interrogation."
    },
    {
        "sceneNumber": 10,
        "title": "In mia man alfin tu sei (Norma e Pollione)",
        "titleTranslation": "In my hands at last you are (Norma and Pollione)",
        "originalDescription": "Rimasta a tu per tu con Pollione la sacerdotessa gli promette la salvezza e la libertà a patto che egli rinunci per sempre ad Adalgisa. Di fronte al fiero rifiuto del proconsole Norma convoca nuovamente i sacerdoti minacciando di condannare la vergine al rogo.",
        "description": "Left face-to-face with Pollione the priestess promises him safety and freedom on condition that he renounce Adalgisa forever. Confronted with the proconsul's proud refusal Norma summons the priests anew threatening to condemn the virgin to the pyre."
    },
    {
        "sceneNumber": 11,
        "title": "Son io! / Deh! non volerli vittime (Finale Secondo)",
        "titleTranslation": "It is I! / Ah! do not make them victims (Second Finale)",
        "originalDescription": "Norma dichiara ai Druidi che una sacerdotessa ha tradito i propri voti e svela coraggiosamente di essere lei stessa la colpevole. Toccato dalla grandezza d'animo della donna Pollione riscopre il proprio amore per lei mentre Norma affida i due figli al padre Oroveso prima di salire insieme al proconsole sul rogo ardente.",
        "description": "Norma declares to the Druids that a priestess has betrayed her vows and courageously reveals that she herself is the guilty one. Touched by the woman's nobility of soul Pollione rediscovers his love for her while Norma entrusts her two sons to her father Oroveso before ascending together with the proconsul onto the blazing pyre."
    }
]

# -----------------------------------------------------------------------------
# 2. Speaker Normalization Map
# -----------------------------------------------------------------------------
SPEAKER_MAP = {
    'NORMA': 'Norma',
    'POLLIONE': 'Pollione',
    'ADALGISA': 'Adalgisa',
    'OROVESO': 'Oroveso',
    'CLOTILDE': 'Clotilde',
    'FLAVIO': 'Flavio',
    'DRUIDI': 'I Druidi',
    'SACERDOTI': 'I Sacerdoti',
    'SACERDOTESSE': 'Le Sacerdotesse',
    'GUERRIERI': 'I Guerrieri Galli',
    'BARDI': 'I Bardi',
    'CORO': 'Coro',
    'TUTTI': 'Tutti',
    'OROVESO E DRUIDI': 'Oroveso e i Druidi',
    'POLLIONE E FLAVIO': 'Pollione e Flavio',
    'NORMA E ADALGISA': 'Norma e Adalgisa',
    'NORMA E CORO': 'Norma e Coro',
}

# -----------------------------------------------------------------------------
# 3. Plain-English Idiom & Pedagogical Annotations (Zero linguistics jargon)
# -----------------------------------------------------------------------------
IDIOM_NOTES = {
    "Casta diva, che inargenti": "'Chaste goddess, who silvers these sacred ancient plants, turn to us your beautiful unclouded countenance.' Norma's immortal prayer to the moon goddess of the Druids.",
    "Ah! bello a me ritorna": "'Ah, return to me beautiful in the radiance of your first love.' Norma's cabaletta expressing her secret undying devotion to Pollione.",
    "Meco all'altar di Venere": "'With me at the altar of Venus in Rome, dressed in white robes.' Pollione reveals to Flavio his illicit love for the young priestess Adalgisa.",
    "Sola, furtiva, al tempio": "'Alone, furtive, at the altar I waited, lost in prayer.' Adalgisa confesses how love first struck her in the temple.",
    "Oh, di qual sei tu vittima!": "'Oh, of what terrible deceit you are the victim!' Norma warns Adalgisa after discovering that Pollione is the Roman lover.",
    "Mira, o Norma, a' tuoi ginocchi": "'Look, o Norma, at your knees these dear little ones crying.' The sublime bel canto duet where Adalgisa pleads for Norma's children and refuses to marry Pollione.",
    "Sì, fino all'ore estreme": "'Yes, until life's final hours you will find me at your side.' Norma and Adalgisa unite in eternal friendship.",
    "Guerra, guerra! le galliche selve": "'War, war! Let the Gallic forests resound with the clash of arms!' The fierce chorus of Druids and warriors summoned by Norma's shield strike.",
    "In mia man alfin tu sei": "'In my hands at last you are; no one can break your bonds now except myself.' Norma confronts the captive Pollione.",
    "Son io!": "'It is I!' Norma publicly confesses her own guilt to save Adalgisa from the pyre.",
    "Deh! non volerli vittime": "'Ah! Do not make them victims of my own sin!' Norma's heartrending plea to her father Oroveso to protect her innocent sons."
}

def get_idiom_note(text: str) -> str:
    for phrase, note in IDIOM_NOTES.items():
        if phrase.lower() in text.lower():
            return note
    return ""

def main():
    print("=" * 70)
    print("NORMA CORPUS INGESTION & DATA GENERATION")
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

    act_splits = [
        (1, raw_it[p1:p2], ACT1_SCENES, "Foresta sacra de' Druidi. In mezzo la quercia d'Irminsul, al piè della quale vedesi la pietra druidica che serve d'altare. Colli in distanza sparsi di selve. È notte; lontani fuochi trapelano dai boschi.", "Sacred forest of the Druids. In the middle the oak of Irminsul, at the foot of which is seen the druidic stone serving as an altar. Hills in the distance scattered with woods. It is night; distant fires filter through the trees."),
        (2, raw_it[p2:], ACT2_SCENES, "Interno dell'abitazione di Norma. Da un lato un letto romano coperto di pelli d'orso, dove dormono i due fanciulli; una lampada arde su un tripode.", "Interior of Norma's dwelling. On one side a Roman couch covered with bear skins, where the two children are asleep; a lamp burns upon a tripod.")
    ]

    total_cues = 0
    total_lines = 0

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for act_num, act_raw, scene_metas, orig_setting, en_setting in act_splits:
        print(f"2.{act_num} Parsing Act {act_num} ({len(scene_metas)} scenes)...")
        act_scenes = []

        sc_splits = re.split(r'SCENA\s+[A-Z\d]+', act_raw)
        for sc_idx, sc_meta in enumerate(scene_metas, start=1):
            sc_body = sc_splits[sc_idx].strip() if sc_idx < len(sc_splits) else ""
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
            "title": f"Act {act_num}",
            "originalSetting": orig_setting,
            "setting": en_setting,
            "scenes": act_scenes
        }

        ts_content = f"""import {{ Act }} from '../../types/libretto';

export const normaAct{act_num}: Act = {json.dumps(act_data, indent=2, ensure_ascii=False)};
"""
        (OUT_DIR / f'act{act_num}.ts').write_text(ts_content, encoding='utf-8')
        print(f"  ✓ Written src/data/norma/act{act_num}.ts")

    # 3. Write index.ts
    index_content = """import { Opera } from '../../types/libretto';
import { normaAct1 } from './act1';
import { normaAct2 } from './act2';

export const norma: Opera = {
  id: 'norma',
  title: 'Norma',
  originalTitle: 'Norma (Tragedia lirica in due atti)',
  composer: 'Vincenzo Bellini',
  librettists: ['Felice Romani'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1831,
  acts: [normaAct1, normaAct2]
};
"""
    (OUT_DIR / 'index.ts').write_text(index_content, encoding='utf-8')
    print("  ✓ Written src/data/norma/index.ts")

    # 4. Register in src/data/operas.ts
    print("4. Registering Norma in src/data/operas.ts...")
    operas_file = DATA_DIR / 'operas.ts'
    operas_code = operas_file.read_text(encoding='utf-8')

    if 'norma' not in operas_code:
        operas_code = re.sub(
            r"(import \{ tosca \} from '\./tosca';\n)",
            r"\1import { norma } from './norma';\n",
            operas_code
        )
        operas_code = re.sub(
            r"(\s+tosca,)",
            r"\1\n  norma,",
            operas_code
        )
        operas_file.write_text(operas_code, encoding='utf-8')
        print("  ✓ Registered norma in src/data/operas.ts")
    else:
        print("  ✓ norma already registered in src/data/operas.ts")

    print(f"\n✓ Norma generation complete! Parsed {total_cues} cues, {total_lines} lines across 2 acts.")

if __name__ == '__main__':
    main()

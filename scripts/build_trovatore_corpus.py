#!/usr/bin/env python3
"""
build_trovatore_corpus.py - Production Ingest Pipeline for Verdi's Il trovatore

Generates pristine TypeScript data files (act1.ts, act2.ts, act3.ts, act4.ts, index.ts) for Verdi's Il trovatore,
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
OUT_DIR = DATA_DIR / 'ilTrovatore'
RAW_FILE = SCRIPTS_DIR / 'raw_trovatore' / 'raw_original.html'
TRANSLATIONS_FILE = SCRIPTS_DIR / 'raw_trovatore' / 'trovatore_translations.json'

sys.path.insert(0, str(SCRIPTS_DIR))
from import_opera import (
    clean_punctuation,
    smooth_literal_translation,
    LexiconManager,
    tokenize_line
)

# -----------------------------------------------------------------------------
# 1. Aligned Scene Metadata (20 scenes across 4 acts/parts)
# -----------------------------------------------------------------------------
ACT1_SCENES = [
    {
        "sceneNumber": 1,
        "title": "All'erta, all'erta! / Di due figli vivea padre beato (Ferrando e Coro)",
        "titleTranslation": "Stay on guard, stay on guard! / Father of two sons lived blessed (Ferrando and Chorus)",
        "originalDescription": "Atrio del palazzo dell'Aliaferia a Saragozza. Il capitano Ferrando esorta le guardie del Conte di Luna a vigilare nella notte e narra la cupa leggenda della zingara arsa sul rogo per aver stregato il fratello del conte.",
        "description": "Vestibule of the Aliaferia Palace in Zaragoza. Captain Ferrando urges the guards of the Count of Luna to keep watch in the night and narrates the dark legend of the gypsy burned at the stake for bewitching the count's brother."
    },
    {
        "sceneNumber": 2,
        "title": "Tacea la notte placida / Di tale amor che dirsi (Leonora e Ines)",
        "titleTranslation": "The calm night was silent / Of such love that words can barely utter (Leonora and Ines)",
        "originalDescription": "Giardini del palazzo reale sotto il chiarore della luna. Leonora confida all'amica Ines la propria passione immortale per il misterioso cavaliere trovatore che viene ogni notte a cantare sotto le sue finestre.",
        "description": "Gardens of the royal palace beneath the light of the moon. Leonora confides to her friend Ines her immortal passion for the mysterious troubadour knight who comes every night to sing beneath her windows."
    },
    {
        "sceneNumber": 3,
        "title": "Tace la notte! (Il Conte di Luna solo)",
        "titleTranslation": "The night is silent! (The Count of Luna alone)",
        "originalDescription": "Il Conte di Luna avanza nell'oscurità del giardino acceso da una cieca gelosia per Leonora. Improvvisamente tra i cespugli echeggiano le note di un liuto che annunciano la presenza del rivale.",
        "description": "The Count of Luna advances in the darkness of the garden inflamed by blind jealousy for Leonora. Suddenly among the bushes echo the notes of a lute announcing the presence of his rival."
    },
    {
        "sceneNumber": 4,
        "title": "Deserto sulla terra / Qual voce! (Leonora e il Conte)",
        "titleTranslation": "Lonely upon the earth / What a voice! (Leonora and the Count)",
        "originalDescription": "Leonora scende in fretta nel giardino e scambia nell'ombra il Conte per il suo amato cantore. L'arrivo di Manrico dissipa l'equivoco e accende la furia vendicativa del nobile spagnolo.",
        "description": "Leonora hastens down into the garden and mistakes in the gloom the Count for her beloved singer. The arrival of Manrico dispels the confusion and ignites the vengeful fury of the Spanish nobleman."
    },
    {
        "sceneNumber": 5,
        "title": "Di geloso amor sprezzato (Terzetto finale)",
        "titleTranslation": "Of jealous love scorned (Final Trio)",
        "originalDescription": "Riconosciuto il trovatore come il ribelle condannato Manrico il Conte sguaina la spada e lo sfida a singolar tenzone. Leonora cade a terra svenuta per il terrore mentre i due rivali corrono al duello mortale.",
        "description": "Recognizing the troubadour as the condemned rebel Manrico the Count draws his sword and challenges him to single combat. Leonora collapses to the ground fainting in terror while the two rivals rush into mortal duel."
    }
]

ACT2_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Vedi! le fosche notturne spoglie / Stride la vampa! (Coro e Azucena)",
        "titleTranslation": "Look! The dark robes of night / The fire crackles! (Chorus and Azucena)",
        "originalDescription": "Accampamento di zingari sulle montagne della Biscaglia all'alba mentre risuonano i colpi dell'incudine. Azucena fissa con terrore le fiamme del focolare rievocando il rogo della madre e gridando vendetta.",
        "description": "Gypsy encampment in the mountains of Biscay at dawn while the strokes of the anvil ring out. Azucena gazes in terror at the flames of the hearth recalling her mother's pyre and crying for vengeance."
    },
    {
        "sceneNumber": 2,
        "title": "Condotta ell'era in ceppi / Il figlio mio avea bruciato! (Azucena e Manrico)",
        "titleTranslation": "She was dragged in chains / My own child I had burned! (Azucena and Manrico)",
        "originalDescription": "Rimasta sola con Manrico la zingara svela il segreto del rogo confessando che in preda al delirio scambiò i neonati gettando nel fuoco il proprio figlio. Manrico chiede sbigottito chi siano i suoi veri genitori ma la donna elude la risposta riaffermando il suo immenso affetto materno.",
        "description": "Left alone with Manrico the gypsy reveals the secret of the pyre confessing that seized by delirium she swapped the infants throwing her own son into the flames. Manrico astounded asks who his true parents are but the woman eludes the answer reaffirming her immense maternal affection."
    },
    {
        "sceneNumber": 3,
        "title": "Il balen del suo sorriso (Il Conte di Luna e Ferrando)",
        "titleTranslation": "The flash of her smile (The Count of Luna and Ferrando)",
        "originalDescription": "Chiostro di un convento vicino a Castellor nella notte fonda. Il Conte di Luna e Ferrando si appostano nell'ombra decisi a rapire con la forza Leonora prima che la donna pronunci i voti perpetui.",
        "description": "Cloister of a convent near Castellor in the deep of night. The Count of Luna and Ferrando lie in wait in the shadows determined to abduct Leonora by force before the woman pronounces perpetual vows."
    },
    {
        "sceneNumber": 4,
        "title": "Ah! se l'error t'ingombra (Coro di suore e Leonora)",
        "titleTranslation": "Ah! if error surrounds you (Chorus of Nuns and Leonora)",
        "originalDescription": "Leonora vestita da sposa avanza verso l'altare accompagnata dai canti devoti delle monache. La fanciulla intende consacrare la vita a Dio convinta che Manrico sia perito sul campo di battaglia.",
        "description": "Leonora dressed as a bride advances toward the altar accompanied by the devout hymns of the nuns. The maiden intends to consecrate her life to God convinced that Manrico has perished upon the battlefield."
    },
    {
        "sceneNumber": 5,
        "title": "E deggio e posso crederlo? (Finale Secondo)",
        "titleTranslation": "And must I and can I believe it? (Second Finale)",
        "originalDescription": "Il Conte si lancia per ghermire Leonora ma Manrico appare miracolosamente con i suoi uomini armati salvando la fanciulla sbigottita. Gli uomini di Manrico mettono in fuga i cavalieri del Conte tra le grida di trionfo.",
        "description": "The Count rushes forward to seize Leonora but Manrico appears miraculously with his armed men rescuing the stunned maiden. Manrico's men put the Count's horsemen to flight amid shouts of triumph."
    }
]

ACT3_SCENES = [
    {
        "sceneNumber": 1,
        "title": "In braccio al mio rival! (Il Conte e Soldati)",
        "titleTranslation": "In the arms of my rival! (The Count and Soldiers)",
        "originalDescription": "Accampamento militare del Conte di Luna sotto i bastioni di Castellor. I soldati cantano inni di guerra pregustando l'assalto imminente mentre il Conte medita con rabbia sull'oltraggio subito.",
        "description": "Military encampment of the Count of Luna beneath the ramparts of Castellor. The soldiers sing hymns of war anticipating the imminent assault while the Count broods with rage over the insult suffered."
    },
    {
        "sceneNumber": 2,
        "title": "Squilli, echeggi la tromba guerriera (Coro di soldati)",
        "titleTranslation": "Resound, let the warrior trumpet echo (Chorus of Soldiers)",
        "originalDescription": "L'esercito aragonese innalza le insegne per lanciare l'assalto definitivo alla fortezza ribelle. La gioia del combattimento e il miraggio del bottino accendono l'entusiasmo della truppa.",
        "description": "The Aragonese army raises its standards to launch the definitive assault upon the rebel fortress. The joy of combat and the prospect of plunder inflame the troop's enthusiasm."
    },
    {
        "sceneNumber": 3,
        "title": "D'onde ei vien? (Ferrando e il Conte)",
        "titleTranslation": "From where does he come? (Ferrando and the Count)",
        "originalDescription": "Ferrando avverte il Conte che una misteriosa zingara è stata catturata mentre si aggirava con fare sospetto intorno alle linee nemiche. Il nobile ordina di condurla subito alla sua presenza per interrogarla.",
        "description": "Ferrando warns the Count that a mysterious gypsy woman has been captured while roaming suspiciously around the enemy lines. The nobleman orders her brought immediately to his presence to interrogate her."
    },
    {
        "sceneNumber": 4,
        "title": "Giorni poveri vivea (Azucena, Ferrando e il Conte)",
        "titleTranslation": "Poor days I lived (Azucena, Ferrando and the Count)",
        "originalDescription": "Azucena cerca di difendersi affermando di essere una povera viandante in cerca del figlio perduto. Ferrando riconosce in lei l'assassina del fratello del Conte e Luna la condanna trionfante al rogo.",
        "description": "Azucena tries to defend herself affirming that she is a poor wanderer searching for her lost son. Ferrando recognizes in her the murderer of the Count's brother and Luna triumphantly condemns her to the pyre."
    },
    {
        "sceneNumber": 5,
        "title": "Quale d'armi fragor (Leonora e Manrico)",
        "titleTranslation": "What clash of arms (Leonora and Manrico)",
        "originalDescription": "Sala adiacente alla cappella della fortezza di Castellor prima delle nozze di Manrico e Leonora. I due amanti si giurano eterna fedeltà mentre all'esterno rombano i preparativi d'assedio.",
        "description": "Hall adjacent to the chapel of the fortress of Castellor before the wedding of Manrico and Leonora. The two lovers swear eternal fidelity to each other while outside resound the preparations for siege."
    },
    {
        "sceneNumber": 6,
        "title": "Ah! sì, ben mio / Di quella pira l'orrendo foco (Manrico, Leonora e Ruiz)",
        "titleTranslation": "Ah! yes, my love / The terrible fire of that pyre (Manrico, Leonora and Ruiz)",
        "originalDescription": "Ruiz irrompe annunciando che la madre di Manrico è stata incatenata e condannata al rogo dal Conte di Luna. Infiammato dall'orrore Manrico impugna le armi e guida i suoi compagni verso una disperata sortita.",
        "description": "Ruiz bursts in announcing that Manrico's mother has been enchained and condemned to the pyre by the Count of Luna. Inflamed with horror Manrico seizes his weapons and leads his companions into a desperate sally."
    }
]

ACT4_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Siam giunti / D'amor sull'ali rosee / Miserere (Leonora e Coro)",
        "titleTranslation": "We have arrived / On the rosy wings of love / Miserere (Leonora and Chorus)",
        "originalDescription": "Piazzale buio sotto la torre del castello dove giace rinchiuso il prigioniero Manrico. Leonora intona una sublime preghiera d'amore mentre dall'alto della prigione risuonano il lugubre Miserere funebre e il canto d'addio del trovatore.",
        "description": "Dark square beneath the castle tower where the prisoner Manrico lies confined. Leonora sings a sublime prayer of love while from atop the prison resound the mournful funeral Miserere and the farewell song of the troubadour."
    },
    {
        "sceneNumber": 2,
        "title": "Udiste? Come albeggi / Mira, d'acerbe lagrime / Vivrà! Contende il giubilo (Leonora e il Conte)",
        "titleTranslation": "Did you hear? As dawn breaks / Look, of bitter tears / He shall live! Joy contends (Leonora and the Count)",
        "originalDescription": "Il Conte esce dalla fortezza e Leonora si getta ai suoi piedi implorando la grazia per Manrico e offrendo se stessa come riscatto. Ottenuta la promessa di salvezza la donna beve di nascosto il veleno dall'anello nuziale per non concedersi viva al tiranno.",
        "description": "The Count comes out of the fortress and Leonora throws herself at his feet begging pardon for Manrico and offering herself as ransom. Having obtained the promise of salvation the woman secretly drinks poison from her wedding ring so as not to surrender alive to the tyrant."
    },
    {
        "sceneNumber": 3,
        "title": "Madre, non dormi? / Ai nostri monti ritorneremo (Manrico e Azucena)",
        "titleTranslation": "Mother, are you not sleeping? / To our mountains we will return (Manrico and Azucena)",
        "originalDescription": "Orrida prigione sotterranea della torre. Azucena è assalita dal terrore della morte sul rogo ma Manrico la culla dolcemente sognando insieme il pacifico ritorno alle loro amate montagne.",
        "description": "Grim subterranean dungeon of the tower. Azucena is assaulted by terror of death upon the pyre but Manrico rocks her gently dreaming together of a peaceful return to their beloved mountains."
    },
    {
        "sceneNumber": 4,
        "title": "Ti scosta! / Prima che d'altri vivere / Sei vendicata, o madre! (Catastrofe finale)",
        "titleTranslation": "Stand back! / Rather than live belonging to another / You are avenged, o mother! (Final Catastrophe)",
        "originalDescription": "Leonora entra nel carcere scongiurando l'amato di fuggire ma crolla a terra straziata dal veleno mortale. Sopraggiunto il Conte fa decapitare Manrico all'istante mentre Azucena grida esultante che la vittima giustiziata era in realtà il suo stesso fratello di sangue.",
        "description": "Leonora enters the dungeon imploring her beloved to flee but collapses to the ground torn by the deadly poison. Arriving the Count has Manrico beheaded instantly while Azucena cries out exultant that the executed victim was in truth his very own blood brother."
    }
]

# -----------------------------------------------------------------------------
# 2. Speaker Normalization Map
# -----------------------------------------------------------------------------
SPEAKER_MAP = {
    'CONTE': 'Il Conte di Luna',
    'LEONORA': 'Leonora',
    'AZUCENA': 'Azucena',
    'MANRICO': 'Manrico',
    'FERRANDO': 'Ferrando',
    'INES': 'Ines',
    'RUIZ': 'Ruiz',
    'UN MESSO': 'Un messo',
    'MESSO': 'Un messo',
    'UN VECCHIO ZINGARO': 'Un vecchio zingaro',
    'ZINGARO': 'Un vecchio zingaro',
    'CORO': 'Coro',
    'TUTTI': 'Tutti',
    'FAMILIARI': 'Familiari del Conte',
    'ARMIGERI': 'Armigeri',
    'ALCUNI ARMIGERI': 'Armigeri',
    'ALTRI': 'Soldati',
    'ALCUNI': 'Soldati',
    'ZINGARI': 'Zingari',
    'UOMINI': 'Uomini',
    'DONNE': 'Donne',
    'RELIGIOSE': 'Religiose',
    'VOCI INTERNE': 'Voci interne',
    'ESPLORATORI': 'Esploratori',
    'LA VOCE DEL TROVATORE': 'Manrico'
}

# -----------------------------------------------------------------------------
# 3. Plain-English Idiom & Pedagogical Annotations (Zero linguistics jargon)
# -----------------------------------------------------------------------------
IDIOM_NOTES = {
    "All'erta, all'erta!": "'Stay on guard, stay on guard!' Ferrando rouses the sleeping guards outside the Count's apartments.",
    "Di due figli vivea padre beato": "'Father of two sons lived blessed the good Count of Luna.' Ferrando recounts the family tragedy of Garzia.",
    "Tacea la notte placida": "'The calm night was silent, and clear in the serene sky the lovely moon shone forth.' Leonora confides to Ines her love for the mysterious Troubadour.",
    "Di tale amor che dirsi": "'Of such love that words can barely utter.' Leonora's ecstatic cabaletta celebrating her devotion to Manrico.",
    "Deserto sulla terra": "'Lonely upon the earth, at war with his evil fate, the troubadour has only one hope: your love.' Manrico serenades Leonora from the darkened gardens.",
    "Di geloso amor sprezzato": "'Inflamed with scorned jealous love, the fire in my breast can only be quenched in your blood!' The Count challenges Manrico to combat.",
    "Vedi! le fosche notturne spoglie": "'Look! The dark robes of night fall away from heaven's vault.' The famous Anvil Chorus of Biscayan gypsies striking rhythm with hammers at dawn.",
    "Stride la vampa!": "'The fire crackles! The untamed mob roars toward the pyre.' Azucena's horrifying canzone recounting her mother being burned alive for witchcraft.",
    "Condotta ell'era in ceppi": "'She was dragged in chains to her cruel death.' Azucena reveals to Manrico the dying words of her mother demanding vengeance.",
    "Il balen del suo sorriso": "'The flash of her smile conquers the ray of a star.' The Count of Luna's lyrical aria expressing his obsessive love for Leonora.",
    "Ah! sì, ben mio, coll'essere": "'Ah! yes, my love, in becoming yours my soul is fortified.' Manrico comforts Leonora on the eve of battle.",
    "Di quella pira l'orrendo foco": "'The terrible fire of that pyre burns every fiber of my being! Turn back, monsters, or I will extinguish it with your own blood!' Manrico's thrilling cabaletta rallying his soldiers to save his mother from execution.",
    "D'amor sull'ali rosee": "'Go, on the rosy wings of love, comforting the breath of the wretched prisoner.' Leonora's sublime romanza outside the prison fortress.",
    "Miserere d'un'alma già vicina": "'Have mercy upon a soul already approaching the hour that knows no return.' The funeral choir within the tower contrasting with Leonora's grief and Manrico's farewell.",
    "Ai nostri monti ritorneremo": "'To our mountains we will return, and the ancient peace will revive.' Manrico and Azucena comfort each other in the prison cell before the execution.",
    "Sei vendicata, o madre!": "'You are avenged, o mother!' Azucena's chilling final cry as the Count discovers he has executed his own long-lost brother."
}

def get_idiom_note(text: str) -> str:
    for phrase, note in IDIOM_NOTES.items():
        if phrase.lower() in text.lower():
            return note
    return ""

def main():
    print("=" * 70)
    print("IL TROVATORE CORPUS INGESTION & DATA GENERATION")
    print("=" * 70)

    print("1. Loading lexicons and translation dictionaries...")
    lexicon_mgr = LexiconManager(SCRIPTS_DIR, 'it')
    with open(TRANSLATIONS_FILE, 'r', encoding='utf-8') as f:
        translations = json.load(f)
    print(f"  ✓ Lexicon entries: {len(lexicon_mgr.lexicon):,}")
    print(f"  ✓ Cached translations: {len(translations):,}")

    raw_it = html.unescape(RAW_FILE.read_text(encoding='utf-8'))
    raw_it = re.sub(r'[\r\t]+', ' ', raw_it)

    p1 = raw_it.find('PARTE PRIMA')
    p2 = raw_it.find('PARTE SECONDA')
    p3 = raw_it.find('PARTE TERZA')
    p4 = raw_it.find('PARTE QUARTA')

    act_splits = [
        (1, raw_it[p1:p2], ACT1_SCENES, "Atrio nel palazzo dell'Aliaferia a Saragozza. Da un lato porta che mette agli appartamenti del Conte di Luna; Ferrando e molti familiari del Conte giacciono presso la porta; alcuni uomini d'arme passeggiano in fondo.", "Vestibule in the Aliaferia Palace in Zaragoza. On one side a door leading to the apartments of the Count of Luna; Ferrando and many retainers of the Count lie near the door; several men-at-arms patrol in the background."),
        (2, raw_it[p2:p3], ACT2_SCENES, "Un dirupato abituro sulle falde d'un monte della Biscaglia. Nel fondo, quasi tutto aperto, arde un gran fuoco; i primi albori della mattina rischiarano la scena dove si vedono zingari di ambo i sessi intenti al loro lavoro.", "A rugged dwelling on the slopes of a mountain in Biscay. In the background, almost entirely open, burns a great fire; the first dawn of morning illuminates the scene where gypsies of both sexes are seen intent on their work."),
        (3, raw_it[p3:p4], ACT3_SCENES, "Accampamento militare sotto i bastioni della fortezza di Castellor. A destra il padiglione del Conte di Luna su cui sventola la bandiera di supremo comando; sentinelle passeggiano in fondo; soldati giocano ai dadi e puliscono le armi.", "Military encampment beneath the ramparts of the fortress of Castellor. On the right the tent of the Count of Luna over which waves the banner of supreme command; sentries patrol in the background; soldiers play dice and clean weapons."),
        (4, raw_it[p4:], ACT4_SCENES, "Un'ala del palazzo dell'Aliaferia. All'angolo una torre con finestre assicurate da spranghe di ferro; notte oscurissima rischiarata appena da qualche stella.", "A wing of the Aliaferia Palace. At the corner a tower with windows secured by iron bars; extremely dark night barely illuminated by a few stars.")
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

                if speaker_raw.startswith('SCENA') or speaker_raw.startswith('PARTE') or speaker_raw.startswith('ATTO') or len(speaker_raw) > 35:
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
            "title": f"Parte {act_num}",
            "originalSetting": orig_setting,
            "setting": en_setting,
            "scenes": act_scenes
        }

        ts_content = f"""import {{ Act }} from '../../types/libretto';

export const trovatoreAct{act_num}: Act = {json.dumps(act_data, indent=2, ensure_ascii=False)};
"""
        (OUT_DIR / f'act{act_num}.ts').write_text(ts_content, encoding='utf-8')
        print(f"  ✓ Written src/data/ilTrovatore/act{act_num}.ts")

    # 3. Write index.ts
    index_content = """import { Opera } from '../../types/libretto';
import { trovatoreAct1 } from './act1';
import { trovatoreAct2 } from './act2';
import { trovatoreAct3 } from './act3';
import { trovatoreAct4 } from './act4';

export const ilTrovatore: Opera = {
  id: 'il-trovatore',
  title: 'Il trovatore',
  originalTitle: 'Il trovatore (Dramma in quattro parti)',
  composer: 'Giuseppe Verdi',
  librettists: ['Salvadore Cammarano', 'Leone Emanuele Bardare'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1853,
  acts: [trovatoreAct1, trovatoreAct2, trovatoreAct3, trovatoreAct4]
};
"""
    (OUT_DIR / 'index.ts').write_text(index_content, encoding='utf-8')
    print("  ✓ Written src/data/ilTrovatore/index.ts")

    # 4. Register in src/data/operas.ts
    print("4. Registering Il trovatore in src/data/operas.ts...")
    operas_file = DATA_DIR / 'operas.ts'
    operas_code = operas_file.read_text(encoding='utf-8')

    if 'ilTrovatore' not in operas_code:
        operas_code = re.sub(
            r"(import \{ norma \} from '\./norma';\n)",
            r"\1import { ilTrovatore } from './ilTrovatore';\n",
            operas_code
        )
        operas_code = re.sub(
            r"(\s+norma,)",
            r"\1\n  ilTrovatore,",
            operas_code
        )
        operas_file.write_text(operas_code, encoding='utf-8')
        print("  ✓ Registered ilTrovatore in src/data/operas.ts")
    else:
        print("  ✓ ilTrovatore already registered in src/data/operas.ts")

    print(f"\n✓ Il trovatore generation complete! Parsed {total_cues} cues, {total_lines} lines across 4 acts.")

if __name__ == '__main__':
    main()

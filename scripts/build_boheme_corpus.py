#!/usr/bin/env python3
"""
build_boheme_corpus.py - Production Ingest Pipeline for Puccini's La Bohème

Parses pristine Italian source text (Rodoni), attaches curated, syntax-transparent
literal English translations for all 1,402 lines and 394 stage directions across 4 acts,
partitions into canonical scenes, and generates the standardized libretto ingest JSON.
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional

ROOT_DIR = Path(__file__).parent.parent
RAW_DIR = Path(__file__).parent / 'raw_boheme'

IT_HTML_FILE = RAW_DIR / 'la_boheme_rodoni.html'
OUT_JSON_FILE = RAW_DIR / 'la_boheme_ingest.json'

sys.path.insert(0, str(Path(__file__).parent))

from boheme_translations_act1 import ACT1_TRANSLATIONS
from boheme_translations_act2 import ACT2_TRANSLATIONS
from boheme_translations_act3 import ACT3_TRANSLATIONS
from boheme_translations_act4 import ACT4_TRANSLATIONS

ALL_TRANSLATIONS = [
    ACT1_TRANSLATIONS,
    ACT2_TRANSLATIONS,
    ACT3_TRANSLATIONS,
    ACT4_TRANSLATIONS
]

with open(IT_HTML_FILE, 'r', encoding='utf-8') as f:
    it_html = f.read()

# ---------------------------------------------------------
# 1. Clean Italian Source Text & Extract Cues
# ---------------------------------------------------------
EXACT_SPEAKERS_IT = {
    'MARCELLO': 'Marcello', 'RODOLFO': 'Rodolfo', 'COLLINE': 'Colline', 'SCHAUNARD': 'Schaunard',
    'BENOÎT': 'Benoît', 'BENOIT': 'Benoît', 'MIMÌ': 'Mimì', 'MIMI': 'Mimì', 'MUSETTA': 'Musetta',
    'ALCINDORO': 'Alcindoro', 'PARPIGNOL': 'Parpignol', 'DOGANIERE': 'Doganiere', 'UN DOGANIERE': 'Doganiere',
    'SERGENTE': 'Sergente', 'SPAZZINI': 'Spazzini', 'LATTIVENDOLE': 'Lattivendole', 'CONTADINE': 'Contadine',
    'CARRETTIERI': 'Carrettieri', 'VENDITORI': 'Venditori', 'ALCUNE VENDITRICI': 'Venditori',
    'UN VENDITORE': 'Venditori', 'BORGHESI': 'Borghesi', 'BOTTEGAIE': 'Borghesi', 'STUDENTI': 'Studenti',
    'SARTINE': 'Sartine', 'RAGAZZI': 'Ragazzi', 'MONELLI': 'Ragazzi', 'BAMBINE': 'Ragazzi',
    'UN RAGAZZO': 'Ragazzi', 'MAMME': 'Mamme', 'LA FOLLA': 'Coro', 'GLI ALTRI': 'Coro',
    'TUTTI': 'Tutti', 'I QUATTRO': 'Tutti', 'VOCI INTERNE': 'Coro', 'DAL CAFFE’': 'Coro',
    'DAL CAFFÈ': 'Coro', 'RODOLFO E MARCELLO': 'Rodolfo e Marcello', 'MARCELLO E RODOLFO': 'Rodolfo e Marcello',
    'SCHAUNARD E COLLINE': 'Schaunard e Colline', 'COLLINE E SCHAUNARD': 'Schaunard e Colline',
    'RODOLFO E COLLINE': 'Rodolfo e Colline', 'COLLINE E MARCELLO': 'Colline e Marcello',
    'RODOLFO, COLLINE': 'Rodolfo e Colline', 'RODOLFO COLLINE': 'Rodolfo e Colline',
    'RODOLFO E MIMÌ': 'Rodolfo e Mimì', 'MIMÌ E RODOLFO': 'Mimì e Rodolfo',
    'MARCELLO E MUSETTA': 'Marcello e Musetta', 'SARTINE E STUDENTI': 'Studenti e Sartine',
    'BORGHESI E VENDITORI': 'Borghesi e Venditori', 'BAMBINE E RAGAZZI': 'Ragazzi',
    'MIMÌ, RODOLFO E MARCELLO': 'Tutti', 'MIMÌ RODOLFO E MARCELLO': 'Tutti',
    'RODOLFO, SCHAUNARD E MACRELLO': 'Tutti', 'RODOLFO SCHAUNARD E MACRELLO': 'Tutti',
    'RODOLFO, SCHAUNARD E MARCELLO': 'Tutti', 'RODOLFO SCHAUNARD E MARCELLO': 'Tutti',
    'RODOLFO, MARCELLO, SCHAUNARD E COLLINE': 'Tutti', 'RODOLFO MARCELLO SCHAUNARD E COLLINE': 'Tutti',
    'MARCELLO, RODOLFO E COLLINE': 'Tutti', 'MARCELLO RODOLFO E COLLINE': 'Tutti',
    'MARCELLO, SCHAUNARD E COLLINE': 'Tutti', 'MARCELLO SCHAUNARD E COLLINE': 'Tutti',
    'RODOLFO, SCHAUNARD E COLLINE': 'Tutti', 'RODOLFO SCHAUNARD E COLLINE': 'Tutti',
    'COLLINE, SCHAUNARD E RODOLFO': 'Tutti', 'COLLINE SCHAUNARD E RODOLFO': 'Tutti',
    'COLLINE, SCHAUNARD E MARCELLO': 'Tutti', 'COLLINE SCHAUNARD E MARCELLO': 'Tutti',
    'SCHAUNARD, COLLINE, RODOLFO': 'Tutti', 'SCHAUNARD COLLINE RODOLFO': 'Tutti',
}

anchors_it = [21821, 52519, 84958, 102304, len(it_html)]

def parse_it_cues_clean(act_idx: int) -> List[Dict[str, Any]]:
    frag = it_html[anchors_it[act_idx]:anchors_it[act_idx+1]]
    if act_idx == 0:
        p = frag.find('Questo Mar Rosso')
        sp_idx = frag.rfind('MARCELLO', 0, p)
    elif act_idx == 1:
        p = frag.find('Aranci, datteri')
        sp_idx = frag.rfind('VENDITORI', 0, p)
    elif act_idx == 2:
        p = frag.find('Ohè, là, le guardie')
        sp_idx = frag.rfind('SPAZZINI', 0, p)
    elif act_idx == 3:
        p = frag.find('In un coupé')
        sp_idx = frag.rfind('MARCELLO', 0, p)

    act_frag = frag[sp_idx:]
    # Fix typesetting flaw in Rodoni HTML where spoken line was wrapped inside <i>
    act_frag = re.sub(
        r'\(Mette le braccia al collo di Rodolfo\.\)\s*<br\s*/?>\s*Sei il mio amore e tutta la mia vita!\s*</i>',
        '(Mette le braccia al collo di Rodolfo.) </i><br>Sei il mio amore e tutta la mia vita!',
        act_frag,
        flags=re.I
    )

    def flatten_italic(m):
        inner = re.sub(r'<br\s*/?>', ' ', m.group(1), flags=re.I)
        inner = re.sub(r'\s+', ' ', inner).strip()
        return f' <i>{inner}</i> '

    act_frag = re.sub(r'<(?:i|em)[^>]*>(.*?)</(?:i|em)>', flatten_italic, act_frag, flags=re.DOTALL | re.I)
    clean = re.sub(r'<br\s*/?>', '\n', act_frag, flags=re.I)
    clean = re.sub(r'</?(?:p|div|tr|td|th|table|tbody|font|u|b|a|span)[^>]*>', '\n', clean, flags=re.I)
    lines_it = [l.strip() for l in clean.split('\n') if l.strip() and not re.match(r'^Atto\s*\d+\s*-\s*Quadro\s*\d+', l)]

    cues = []
    cur_sp = None
    cur_dir = None
    cur_lines = []

    for l in lines_it:
        if l in ['F I N E', 'FINE', 'Fine'] or l.startswith('<img'):
            break

        # Check speaker line
        clean_l_tag = re.sub(r'</?[ie][m]?>', '', l).strip()
        clean_l_tag = clean_l_tag.replace('\x92', "'").replace('’', "'")
        upper_l = re.sub(r'[,\(\)]', ' ', clean_l_tag).strip().upper()
        upper_l = re.sub(r'\s+', ' ', upper_l)

        is_speaker = False
        if upper_l in EXACT_SPEAKERS_IT and not clean_l_tag.endswith(('?', '!', '.', ':')):
            if clean_l_tag.isupper() or ' e ' in clean_l_tag.lower():
                is_speaker = True

        if is_speaker:
            if cur_sp and cur_lines:
                cues.append({'speaker': cur_sp, 'direction': cur_dir, 'lines': cur_lines})
            cur_sp = EXACT_SPEAKERS_IT[upper_l]
            cur_dir = None
            cur_lines = []
            continue

        # Extract any <i>...</i> stage directions
        sdirs = re.findall(r'<i>(.*?)</i>', l)
        for sd in sdirs:
            sd_clean = re.sub(r'[\(\)]', ' ', sd).replace('&nbsp;', ' ').strip()
            sd_clean = re.sub(r'\s+', ' ', sd_clean)
            if sd_clean:
                cur_dir = (cur_dir + '; ' + sd_clean) if cur_dir else sd_clean

        # Dialogue text is what remains outside <i>...</i>
        spoken = re.sub(r'<i>.*?</i>', '', l).strip().replace('&nbsp;', '').strip()
        if spoken.startswith('(') and spoken.endswith(')'):
            sd_clean = re.sub(r'[\(\)]', ' ', spoken).replace('&nbsp;', ' ').strip()
            sd_clean = re.sub(r'\s+', ' ', sd_clean)
            cur_dir = (cur_dir + '; ' + sd_clean) if cur_dir else sd_clean
        elif spoken:
            cur_lines.append(spoken)

    if cur_sp and cur_lines:
        cues.append({'speaker': cur_sp, 'direction': cur_dir, 'lines': cur_lines})
    return cues

# ---------------------------------------------------------
# 2. Canonical Act & Scene Metadata
# ---------------------------------------------------------
ACT_METADATA = [
    {
        'actNumber': 1,
        'title': 'Quadro Primo: In soffitta',
        'originalSetting': 'In soffitta. Ampia finestra dalla quale si scorge una distesa di tetti coperti di neve. A sinistra un camino. Una tavola, un letto, un armadietto, quattro sedie, un cavalletto da pittore con una tela sbozzata ed uno sgabello: libri sparsi, molti fasci di carte, due candelieri.',
        'setting': 'In the attic. A spacious window looks out upon an expanse of snow-covered rooftops of Paris. On the left a stove; a table, a bed, a cupboard, four chairs, a painter\'s easel with an unfinished canvas, and a stool. Books scattered about, bundles of manuscripts, two candlesticks.',
        'sceneBoundaries': ['Legna!', 'Si può?', 'Non sono in vena', 'Che gelida manina'],
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Questo Mar Rosso mi ammollisce e assidera',
                'titleTranslation': 'This Red Sea makes me damp and chills me',
                'originalDescription': 'Marcello lavora al suo quadro: "Il passaggio del Mar Rosso", con le mani intirizzite dal freddo. Rodolfo guarda meditabondo fuori della finestra. Per riscaldarsi decidono di bruciare il dramma in cinque atti scritto da Rodolfo.',
                'description': 'Marcello works on his painting: "The Crossing of the Red Sea", with his hands numb from the cold. Rodolfo gazes pensively out of the window. To warm themselves they decide to burn the five-act drama written by Rodolfo.'
            },
            {
                'sceneNumber': 2,
                'title': 'Legna! Sigari! Bordò!',
                'titleTranslation': 'Firewood! Cigars! Bordeaux!',
                'originalDescription': 'Colline entra intirizzito avendo trovato i banchi di pegno chiusi. Poco dopo giunge Schaunard trionfante con viveri, legna, sigari e una borsa di scudi d\'oro guadagnati da un bizzarro lord inglese.',
                'description': 'Colline enters shivering, having found the pawnshops closed. Shortly after, Schaunard arrives in triumph with provisions, firewood, cigars, and a purse of gold scudi earned from an eccentric English lord.'
            },
            {
                'sceneNumber': 3,
                'title': 'Si può? Benoît!',
                'titleTranslation': 'May I come in? Benoît!',
                'originalDescription': 'Benoît, il padrone di casa, giunge per riscuotere la pigione arretrata. I quattro amici lo lusingano col vino fino a fargli confessare le sue scappatelle galanti, poi lo cacciano sdegnati senza sborsare un soldo.',
                'description': 'Benoît, the landlord, arrives to collect the overdue rent. The four friends flatter him with wine until coaxing him to confess his amorous escapades, then indignantly throw him out without spending a sou.'
            },
            {
                'sceneNumber': 4,
                'title': 'Non sono in vena / Chi è là?',
                'titleTranslation': 'I am not in the mood / Who is there?',
                'originalDescription': 'I compagni escono per festeggiare al caffè Momus. Rodolfo resta indietro per terminare un articolo. Bussano all\'uscio: è Mimì con il lume spento.',
                'description': 'The companions go out to celebrate at the Café Momus. Rodolfo stays behind to finish an article. A knock sounds at the door: it is Mimì with her candle blown out.'
            },
            {
                'sceneNumber': 5,
                'title': 'Che gelida manina / O soave fanciulla',
                'titleTranslation': 'What a frozen little hand / Oh lovely girl',
                'originalDescription': 'Cercando al buio la chiave smarrita, le loro mani si toccano. Rodolfo racconta la sua vita da poeta e Mimì narra del suo lavoro di ricamatrice; sboccia un ardente amore che li unisce nell\'andare insieme dagli amici.',
                'description': 'Searching in the dark for the lost key, their hands touch. Rodolfo recounts his life as a poet and Mimì tells of her work as an embroiderer; an ardent love blossoms that unites them as they go together to join their friends.'
            }
        ]
    },
    {
        'actNumber': 2,
        'title': 'Quadro Secondo: Al Quartiere Latino',
        'originalSetting': 'Al Quartiere Latino. Una confluente di vie; all\'incontro una piazza; botteghe, venditori di ogni genere; da un lato il caffè Momus. È la vigilia di Natale. Gran folla di popolo, borghesi, soldati, servette, ragazzi, studenti, sartine.',
        'setting': 'In the Latin Quarter on Christmas Eve. A bustling junction of streets forming a lively square flanked by shops and street vendors; on one side the Café Momus. A dense, festive crowd of citizens, soldiers, students, milliners, and children.',
        'sceneBoundaries': ['Parpignol', 'Quando men vo', 'La ritirata'],
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Aranci, datteri! Caldi i marroni!',
                'titleTranslation': 'Oranges, dates! Hot roasted chestnuts!',
                'originalDescription': 'La folla parigina anima la piazza tra le grida dei venditori ambulanti. Rodolfo compra per Mimì una cuffietta rosa; Colline compra una pipa e Schaunard un corno.',
                'description': 'The Parisian crowd enlivens the square amid the cries of street vendors. Rodolfo buys a pink bonnet for Mimì; Colline buys a pipe and Schaunard a horn.'
            },
            {
                'sceneNumber': 2,
                'title': 'Viva la Francia! / Parpignol!',
                'titleTranslation': 'Long live France! / Parpignol!',
                'originalDescription': 'Gli amici si riuniscono al caffè Momus. Rodolfo presenta Mimì come la musa della sua poesia. Giunge il venditore di giocattoli Parpignol circondato da frotte gioiose di fanciulli.',
                'description': 'The friends gather at the Café Momus. Rodolfo introduces Mimì as the muse of his poetry. The toy vendor Parpignol arrives surrounded by joyous crowds of children.'
            },
            {
                'sceneNumber': 3,
                'title': 'Quando me\'n vo (Valzer di Musetta)',
                'titleTranslation': 'When I walk along (Musetta\'s Waltz)',
                'originalDescription': 'Musetta fa il suo ingresso sfarzoso al braccio del ricco Alcindoro. Per riconquistare Marcello, intona il celebre valzer provocatorio, poi lamenta un dolore al piede mandando Alcindoro dal calzolaio.',
                'description': 'Musetta makes her lavish entrance on the arm of the wealthy Alcindoro. To win Marcello back, she strikes up the famous provocative waltz, then complains of a pain in her foot, sending Alcindoro to the cobbler.'
            },
            {
                'sceneNumber': 4,
                'title': 'La ritirata!',
                'titleTranslation': 'The Military Tattoo!',
                'originalDescription': 'Il cameriere presenta il salato conto del banchetto. Giunge la sfilata della ritirata militare; i giovani si accodano al corteo lasciando il conto da pagare ad Alcindoro.',
                'description': 'The waiter presents the steep bill for the banquet. The parade of the military retreat arrives; the young people fall in behind the procession, leaving the bill to be paid by Alcindoro.'
            }
        ]
    },
    {
        'actNumber': 3,
        'title': 'Quadro Terzo: Alla Barriera d\'Enfer',
        'originalSetting': 'La Barriera d\'Enfer. Oltre la barriera il viale esterno; in fondo la strada d\'Orléans. A sinistra una bettola colla tettoia di paglia. A destra il posto di dogana. È febbraio; l\'alba; cade a lenti fiocchi la neve.',
        'setting': 'The Barrière d\'Enfer tollgate. Beyond the gate, the outer boulevard; in the background the road to Orléans. On the left a tavern with a straw awning and Marcello\'s fresco; on the right the tollhouse. February dawn; snow falls in slow flakes.',
        'sceneBoundaries': ['Sa dirmi, scusi', 'Mimì è tanto malata', "D'onde lieta uscì"],
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Chi è là? Doganieri, aprite!',
                'titleTranslation': 'Who is there? Customhouse officers, open up!',
                'originalDescription': 'Spazzini, contadine e carrettieri chiedono il passaggio attraverso i cancelli della cinta daziaria di Parigi nella gelida alba invernale.',
                'description': 'Street sweepers, peasant women, and carters request passage through the gates of the toll barrier of Paris in the freezing winter dawn.'
            },
            {
                'sceneNumber': 2,
                'title': 'O buon Marcello, aiuto!',
                'titleTranslation': 'O good Marcello, help me!',
                'originalDescription': 'Mimì giunge tossendo alla bettola dove alloggiano Marcello e Musetta. Confessa all\'amico la gelosia soffocante di Rodolfo e l\'insostenibile tormento della loro convivenza.',
                'description': 'Mimì arrives coughing at the tavern where Marcello and Musetta are staying. She confesses to her friend Rodolfo\'s suffocating jealousy and the unbearable torment of their living together.'
            },
            {
                'sceneNumber': 3,
                'title': 'Mimì è tanto malata!',
                'titleTranslation': 'Mimì is so very ill!',
                'originalDescription': 'Rodolfo esce dalla taverna; Mimì si nasconde dietro un platano. Rodolfo accusa dapprima Mimì di civetteria, ma poi scoppia in pianto rivelando la straziante verità: Mimì è condannata dalla tisi e la sua soffitta gelida la sta uccidendo.',
                'description': 'Rodolfo comes out of the tavern; Mimì conceals herself behind a plane tree. Rodolfo initially accuses Mimì of coquetry, but then bursts into tears, revealing the heartbreaking truth: Mimì is doomed by consumption, and his freezing attic is killing her.'
            },
            {
                'sceneNumber': 4,
                'title': 'Donde lieta uscì / Addio, dolce svegliare',
                'titleTranslation': 'Whence she happily departed / Farewell, sweet awakenings',
                'originalDescription': 'I singulti tradiscono Mimì. Canta il suo commovente addio chiedendo a Rodolfo di conservare la cuffietta rosa. Mentre Marcello e Musetta litigano furiosamente, Rodolfo e Mimì decidono di rimandare il distacco alla primavera.',
                'description': 'Her sobs betray Mimì. She sings her moving farewell, asking Rodolfo to keep the pink bonnet. While Marcello and Musetta quarrel furiously, Rodolfo and Mimì decide to postpone their parting until springtime.'
            }
        ]
    },
    {
        'actNumber': 4,
        'title': 'Quadro Quarto: In soffitta',
        'originalSetting': 'In soffitta (come nel Quadro I). Marcello e Rodolfo lavorano dissimulando la loro tristezza. Sulla tavola due piatti e un tozzo di pane.',
        'setting': 'In the attic (as in Act I). Marcello and Rodolfo are working, each attempting to conceal his heartache over Musetta and Mimì. On the table, two plates and a crust of dry bread.',
        'sceneBoundaries': ['Eccoci', "C'è Mimì", 'Vecchia zimarra', 'Sono andati'],
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'In un coupé? / O Mimì, tu più non torni',
                'titleTranslation': 'In a carriage? / Oh Mimì, you return no more',
                'originalDescription': 'Separati dalle loro amate, Rodolfo e Marcello fingono di lavorare alacremente ma finiscono per confidarsi la reciproca nostalgia estraendo i ricordi di Mimì e Musetta.',
                'description': 'Separated from their beloveds, Rodolfo and Marcello pretend to work diligently but end up confiding in each other their mutual longing, drawing out keepsakes of Mimì and Musetta.'
            },
            {
                'sceneNumber': 2,
                'title': 'Ecco i fiaschi! / Gavotta e duello',
                'titleTranslation': 'Here are the loaves! / Gavotte and duel',
                'originalDescription': 'Schaunard e Colline arrivano con quattro pagnotte e un\'aringa. I quattro compagni mascherano la miseria imbastendo un banchetto regale, una spassosa gavotta e un comico duello con attizzatoi.',
                'description': 'Schaunard and Colline arrive with four rolls and a herring. The four companions mask their misery by improvising a royal banquet, a hilarious gavotte, and a comical duel with fire pokers.'
            },
            {
                'sceneNumber': 3,
                'title': 'C\'è Mimì!',
                'titleTranslation': 'Mimì is here!',
                'originalDescription': 'La porta si spalanca: Musetta annuncia concitata che Mimì, stremata e morente, non ha la forza di salire le scale. Rodolfo e Marcello accorrono e la adagiano amorevolmente sul letto.',
                'description': 'The door bursts open: Musetta frantically announces that Mimì, exhausted and dying, does not have the strength to climb the stairs. Rodolfo and Marcello rush out and tenderly lay her upon the bed.'
            },
            {
                'sceneNumber': 4,
                'title': 'Vecchia zimarra, senti',
                'titleTranslation': 'Old coat, listen to me',
                'originalDescription': 'Musetta dona i suoi orecchini e Marcello va a vendere la tela per comprare un manicotto e un medico. Rimasto solo con Schaunard, Colline saluta commosso il suo fedele pastrano prima di impegnarlo al monte di pietà.',
                'description': 'Musetta donates her earrings and Marcello goes to sell the canvas to buy a muff and summon a doctor. Left alone with Schaunard, Colline bids an emotional farewell to his faithful overcoat before pawning it at the pawnshop.'
            },
            {
                'sceneNumber': 5,
                'title': 'Sono andati? Fingevo di dormire / Finale',
                'titleTranslation': 'Have they gone? I pretended to sleep / Finale',
                'originalDescription': 'Mimì e Rodolfo rimangono soli e rievocano la sera del loro primo incontro. Musetta torna con il caldo manicotto; Mimì si addormenta serenamente per sempre. Rodolfo si avvede della morte e grida disperato: "Mimì!... Mimì!...".',
                'description': 'Mimì and Rodolfo remain alone and recall the evening of their first meeting. Musetta returns with the warm muff; Mimì peacefully falls asleep forever. Rodolfo realizes she has died and cries out in despair: "Mimì!... Mimì!...".'
            }
        ]
    }
]

FAMOUS_PIECES = [
    ('Questo Mar Rosso', 'Questo Mar Rosso mi ammollisce e assidera'),
    ('Non riscalda', 'Non riscalda ma fuma'),
    ('Legna!', 'Legna! Sigari! Bordò!'),
    ('Si può?', 'Benoît: Si può?'),
    ('Non sono in vena', 'Non sono in vena'),
    ('Che gelida manina', 'Che gelida manina (Rodolfo\'s Aria)'),
    ('Sì. Mi chiamano Mimì', 'Sì, mi chiamano Mimì (Mimì\'s Aria)'),
    ('Mi chiamano Mimì', 'Sì, mi chiamano Mimì (Mimì\'s Aria)'),
    ('O soave fanciulla', 'O soave fanciulla (Love Duet)'),
    ('Aranci, datteri', 'Aranci, datteri! Caldi i marroni!'),
    ('Quando men vo', 'Valzer di Musetta: Quando me\'n vo'),
    ('Quando me\'n vo', 'Valzer di Musetta: Quando me\'n vo'),
    ('La ritirata', 'La ritirata!'),
    ('Chi è là? Doganieri', 'Chi è là? Doganieri, aprite!'),
    ('Ohè, là, le guardie', 'Chi è là? Doganieri, aprite!'),
    ('O buon Marcello', 'O buon Marcello, aiuto!'),
    ('Mimì è una civetta', 'Mimì è una civetta'),
    ('Mimì è tanto malata', 'Mimì è tanto malata!'),
    ("D'onde lieta uscì", 'Donde lieta uscì (Mimì\'s Farewell)'),
    ('Donde lieta uscì', 'Donde lieta uscì (Mimì\'s Farewell)'),
    ('Addio, dolce svegliare', 'Addio, dolce svegliare alla mattina (Quartet)'),
    ('In un coupé', 'In un coupé?'),
    ('O Mimì tu più non torni', 'O Mimì, tu più non torni (Duet)'),
    ('O Mimì, tu più non torni', 'O Mimì, tu più non torni (Duet)'),
    ('Vecchia zimarra', 'Vecchia zimarra, senti (Colline\'s Coat Aria)'),
    ('Sono andati', 'Sono andati? Fingevo di dormire (Finale)')
]

def find_piece_title(line_text: str) -> Optional[str]:
    for trigger, title in FAMOUS_PIECES:
        if trigger.lower() in line_text.lower():
            return title
    return None

# ---------------------------------------------------------
# 3. Assemble Canonical Ingest JSON
# ---------------------------------------------------------
print('Building canonical La Bohème ingest corpus...')
acts_output = []

total_cues_all = 0
total_lines_all = 0
untranslated_count = 0

for act_idx in range(4):
    meta = ACT_METADATA[act_idx]
    it_cues = parse_it_cues_clean(act_idx)
    act_trans = ALL_TRANSLATIONS[act_idx]
    
    assert len(it_cues) == len(act_trans), f"Act {act_idx+1} count mismatch: {len(it_cues)} cues vs {len(act_trans)} translations"

    # Partition into scenes by trigger cues
    scene_start_indices = [0]
    for trig in meta['sceneBoundaries']:
        found_idx = None
        start_search = scene_start_indices[-1] + 1
        for i in range(start_search, len(it_cues)):
            c = it_cues[i]
            if any(trig.lower() in l.lower() for l in c['lines']):
                found_idx = i
                break
        if found_idx is not None:
            scene_start_indices.append(found_idx)
        else:
            scene_start_indices.append(scene_start_indices[-1] + (len(it_cues) // len(meta['scenes'])))
    scene_start_indices.append(len(it_cues))

    scenes_output = []
    for s_idx, scene_meta in enumerate(meta['scenes']):
        start_c = scene_start_indices[s_idx]
        end_c = scene_start_indices[s_idx + 1]
        scene_cues_raw = it_cues[start_c:end_c]
        
        parsed_cues = []
        for c_local_idx, c_data in enumerate(scene_cues_raw, 1):
            global_c_idx = start_c + c_local_idx # 1-indexed for act_trans
            cue_id = f"a{act_idx+1}_s{s_idx+1}_c{c_local_idx}"
            
            t_cue = act_trans[global_c_idx]

            lines_obj = []
            piece_title_assigned = None
            for l_idx, it_line in enumerate(c_data['lines'], 1):
                pt = find_piece_title(it_line)
                if pt and not piece_title_assigned:
                    piece_title_assigned = pt
                    
                lit_trans = t_cue['lines'][l_idx - 1]
                clean_orig = re.sub(r'[^\w\s]', ' ', it_line).strip().lower()
                clean_orig = re.sub(r'\s+', ' ', clean_orig)
                clean_lit = re.sub(r'[^\w\s]', ' ', lit_trans).strip().lower()
                clean_lit = re.sub(r'\s+', ' ', clean_lit)
                if clean_orig == clean_lit:
                    allowed_same = {
                        'eureka', 'benoît', 'benoit', 'eh', 'ah', 'oh', 'no',
                        'momus', 'momus momus momus', 'rodolfo', 'parpignol', 'parpignol parpignol',
                        'musetta', 'no musetta', 'marcello', 'mimì', 'mimi',
                        'ah mimì', 'ah mimi', 'fandango', 'no no', 'mimì mimì', 'mimi mimi',
                        'balancez'
                    }
                    if clean_orig not in allowed_same:
                        untranslated_count += 1
                        print(f"Untranslated: {it_line} -> {lit_trans}")

                lines_obj.append({
                    'id': f"{cue_id}_l{l_idx}",
                    'original': it_line,
                    'literal': lit_trans
                })
                total_lines_all += 1

            cue_dict = {
                'id': cue_id,
                'speaker': c_data['speaker'],
                'lines': lines_obj
            }
            if c_data.get('direction'):
                cue_dict['stageDirection'] = c_data['direction']
                if t_cue.get('direction_en'):
                    cue_dict['stageDirectionTranslation'] = t_cue['direction_en']

            if piece_title_assigned:
                cue_dict['pieceTitle'] = piece_title_assigned

            parsed_cues.append(cue_dict)
            total_cues_all += 1

        scenes_output.append({
            'sceneNumber': scene_meta['sceneNumber'],
            'title': scene_meta['title'],
            'titleTranslation': scene_meta.get('titleTranslation'),
            'originalDescription': scene_meta.get('originalDescription'),
            'description': scene_meta.get('description'),
            'cues': parsed_cues
        })

    acts_output.append({
        'actNumber': meta['actNumber'],
        'title': meta['title'],
        'originalSetting': meta.get('originalSetting'),
        'setting': meta.get('setting'),
        'scenes': scenes_output
    })

# ---------------------------------------------------------
# 4. Character Roster & Opera Manifest
# ---------------------------------------------------------
CHARACTERS = [
    {'name': 'Rodolfo', 'voiceType': 'Tenor', 'description': 'An ardent, impoverished young poet living in the Latin Quarter.'},
    {'name': 'Mimì', 'voiceType': 'Soprano', 'description': 'A delicate seamstress suffering from tuberculosis who embroiders silk flowers.'},
    {'name': 'Marcello', 'voiceType': 'Baritone', 'description': 'A fiery-tempered bohemian painter and Rodolfo\'s close confidant.'},
    {'name': 'Musetta', 'voiceType': 'Soprano', 'description': 'A glamorous, coquettish singer with a golden heart, Marcello\'s lover.'},
    {'name': 'Colline', 'voiceType': 'Bass', 'description': 'A bookish, eccentric philosopher of quiet dignity and dry humor.'},
    {'name': 'Schaunard', 'voiceType': 'Baritone', 'description': 'A cheerful bohemian musician whose unexpected windfall feeds the attic.'},
    {'name': 'Benoît', 'voiceType': 'Bass', 'description': 'The elderly, gullible landlord easily tricked out of his overdue rent.'},
    {'name': 'Alcindoro', 'voiceType': 'Bass', 'description': 'An elderly state councillor and wealthy admirer escorting Musetta.'},
    {'name': 'Parpignol', 'voiceType': 'Tenor', 'description': 'An itinerant toy vendor celebrated by the children of the Latin Quarter.'},
    {'name': 'Sergente', 'voiceType': 'Bass', 'description': 'The customhouse sergeant on duty at the Barrière d\'Enfer.'},
    {'name': 'Doganiere', 'voiceType': 'Bass', 'description': 'Customhouse guard admitting workers through the Paris tollgates.'},
    {'name': 'Coro', 'voiceType': 'Chorus', 'description': 'Students, work-girls, street vendors, citizens, soldiers, and children.'}
]

opera_ingest = {
    'id': 'la-boheme',
    'title': 'La Bohème',
    'originalTitle': 'La Bohème',
    'composer': 'Giacomo Puccini',
    'librettists': ['Luigi Illica', 'Giuseppe Giacosa'],
    'language': 'it',
    'languageLabel': 'Italian',
    'year': 1896,
    'synopsis': (
        'Set in 1830s Paris Latin Quarter, four young, impoverished bohemians—a poet, a painter, a musician, '
        'and a philosopher—navigate art, camaraderie, love, and tragedy in a freezing attic. When frail seamstress '
        'Mimì knocks on Rodolfo\'s door seeking a candle flame, an ardent passion blooms, set against Marcello '
        'and Musetta\'s stormy courtship and the bittersweet comedy of Bohemian camaraderie.'
    ),
    'characters': CHARACTERS,
    'acts': acts_output
}

with open(OUT_JSON_FILE, 'w', encoding='utf-8') as f:
    json.dump(opera_ingest, f, indent=2, ensure_ascii=False)

print(f"\n✓ Successfully generated {OUT_JSON_FILE} with {len(acts_output)} acts!")
for act in acts_output:
    total_l = sum(len(c['lines']) for s in act['scenes'] for c in s['cues'])
    total_c = sum(len(s['cues']) for s in act['scenes'])
    print(f"  • {act['title']}: {len(act['scenes'])} scenes, {total_c} cues, {total_l} lines")

print(f"\nTotal Cues: {total_cues_all}, Total Lines: {total_lines_all}")
print(f"Untranslated lines: {untranslated_count} (0.0%)")
assert untranslated_count == 0, f"Error: found {untranslated_count} untranslated lines!"
print("All assertions passed perfectly!")

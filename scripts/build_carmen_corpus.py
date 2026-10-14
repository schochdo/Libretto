#!/usr/bin/env python3
"""
build_carmen_corpus.py - Production Ingest Pipeline for Georges Bizet's Carmen

Assembles pristine French source text from Henri Meilhac and Ludovic Halévy's 1875 libretto,
attaches curated, syntax-transparent literal English translations for all 1,479 lines and 672 cues
across 4 acts and 25 scenes, applies canonical speaker normalization, assigns landmark piece titles,
and outputs scripts/raw_carmen/carmen_ingest.json for import_opera.py.
"""

import json
import re
import sys
from pathlib import Path
from typing import Dict, List, Any, Optional

ROOT_DIR = Path(__file__).parent.parent
RAW_DIR = Path(__file__).parent / 'raw_carmen'
OUT_JSON_FILE = RAW_DIR / 'carmen_ingest.json'

sys.path.insert(0, str(Path(__file__).parent))

from carmen_translations_act1 import ACT1_TRANSLATIONS
from carmen_translations_act2 import ACT2_TRANSLATIONS
from carmen_translations_act3 import ACT3_TRANSLATIONS
from carmen_translations_act4 import ACT4_TRANSLATIONS

ALL_TRANSLATIONS = [
    ACT1_TRANSLATIONS,
    ACT2_TRANSLATIONS,
    ACT3_TRANSLATIONS,
    ACT4_TRANSLATIONS
]

# ---------------------------------------------------------
# 1. Canonical Speaker Normalization
# ---------------------------------------------------------
SPEAKER_MAP = {
    'CARMEN': 'Carmen',
    'JOSÉ': 'Don José',
    'ESCAMILLO': 'Escamillo',
    'LE TORERO': 'Escamillo',
    'MICAËLA': 'Micaëla',
    'LE LIEUTENANT': 'Le Lieutenant',
    'MORALÈS': 'Moralès',
    'FRASQUITA': 'Frasquita',
    'MERCÉDÈS': 'Mercédès',
    'LE DANCAÏRE': 'Le Dancaïre',
    'LE REMENDADO': 'Le Remendado',
    'LE GUIDE': 'Le Guide',
    'PASTIA': 'Lillas Pastia',
    'CHŒUR': 'Chœur',
    'LE CHŒUR': 'Chœur',
    'CHŒUR DES CIGARIÈRES': 'Chœur des cigarières',
    'CHŒUR DES GAMINS': 'Chœur des gamins',
    'CHŒUR ET FANFARES': 'Chœur',
    'FANFARES ET REPRISE DU CHŒUR': 'Chœur',
    'REPRISE DU CHŒUR': 'Chœur',
    'REPRISE DU CHŒUR DES GAMINS': 'Chœur des gamins',
    'REPRISE GÉNÉRALE': 'Chœur',
    'REPRISE DE L’AIR': 'Chœur',
    'REPRISE DE L’ENSEMBLE': 'Chœur',
    'REPRISE': 'Chœur',
    'TOUS': 'Tous',
    'TOUS LES CINQ': 'Tous les cinq',
    'TOUS LES HOMMES': 'Tous les hommes',
    'TOUS LES MARCHANDS': 'Les marchands',
    'TOUS LES QUATRE': 'Tous les quatre',
    'TOUT LE MONDE': 'Tous',
    'TOUTES LES FEMMES': 'Toutes les femmes',
    'TOUTES LES TROIS': 'Toutes les trois',
    'UN BOHÉMIEN': 'Un bohémien',
    'UN MARCHAND': 'Un marchand',
    'UN SOLDAT': 'Un soldat',
    'AUTRES MARCHANDS': 'Les marchands',
    'LES AUTRES MARCHANDS': 'Les marchands',
    'PLUSIEURS MARCHANDS': 'Les marchands',
    'PLUSIEURS VOIX': 'Plusieurs voix',
    'MARCHAND DE PROGRAMME': 'Marchand de programmes',
    'LES ALGUAZILS': 'Les alguazils',
    'LES CIGARIÈRES': 'Les cigarières',
    'LES CIGARIÈRES et LES JEUNES GENS': 'Cigarières et Jeunes gens',
    'LES DEUX FEMMES': 'Frasquita et Mercédès',
    'LES DEUX HOMMES': 'Le Dancaïre et Le Remendado',
    'LES FEMMES': 'Les femmes',
    'LES JEUNES GENS': 'Les jeunes gens',
    'LES SOLDATS': 'Les soldats',
    'LES TROIS FEMMES': 'Carmen, Frasquita et Mercédès',
    'PREMIER OFFICIER': 'Premier officier',
    'DEUXIÈME OFFICIER': 'Deuxième officier',
    'PREMIER GROUPE': 'Premier groupe',
    'DEUXIÈME GROUPE': 'Deuxième groupe',
    'PREMIER GROUPE DE FEMMES': 'Premier groupe de femmes',
    'DEUXIÈME GROUPE DE FEMMES': 'Deuxième groupe de femmes',
    'MERCÉDÈS ET FRASQUITA': 'Mercédès et Frasquita',
    'MERCÉDÈS et FRASQUITA': 'Mercédès et Frasquita',
    'CARMEN, MERCÉDÈS, FRASQUITA': 'Carmen, Frasquita et Mercédès',
    'CARMEN, MERCÉDÈS, FRAQUITA': 'Carmen, Frasquita et Mercédès',
    'LE DANCAÏRE ET LE REMENDADO': 'Le Dancaïre et Le Remendado',
    'LE DANCAÏRE, JOSÉ, CARMEN, MERCÉDÈS, FRASQUITA': 'Tous'
}

# ---------------------------------------------------------
# 2. Canonical Act & Scene Metadata
# ---------------------------------------------------------
ACT_METADATA = [
    {
        'actNumber': 1,
        'title': 'Acte Premier: Une place à Séville',
        'originalSetting': "Une place, à Séville. À droite, la porte de la manufacture de tabac. Au fond, face au public, pont praticable traversant la scène dans toute son étendue. De la scène on arrive à ce pont par un escalier tournant qui fait sa révolution à droite, après la porte de la manufacture de tabac. Le dessous du pont est praticable. À gauche, au premier plan, le corps de garde. Devant le corps de garde, une petite galerie couverte, exhaussée de deux ou trois marches. Près du corps de garde, dans un râtelier, les lances des dragons avec leurs banderoles jaunes et rouges.",
        'setting': "A square in Seville. On the right, the entrance to the tobacco factory. In the background, facing the audience, a practical bridge spanning the entire stage. From the stage, this bridge is reached by a winding staircase turning to the right, beyond the tobacco factory door. The space beneath the bridge is usable. On the left in the foreground, the guardhouse. In front of the guardhouse, a small covered porch raised by two or three steps. Near the guardhouse, in a rack, the dragoons' lances with their yellow and red pennants.",
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Sur la place, chacun passe',
                'titleTranslation': 'On the square, everyone passes',
                'originalDescription': "Les soldats montent la garde devant le corps de garde à Séville et observent les passants. Micaëla s'approche timidement pour demander des nouvelles de Don José, puis s'éloigne devant l'insistance galante des dragons.",
                'description': "The soldiers stand guard before the guardhouse in Seville and observe the passers-by. Micaëla timidly approaches to ask for news of Don José, then slips away before the dragoons' gallant overtures."
            },
            {
                'sceneNumber': 2,
                'title': 'Avec la garde montante',
                'titleTranslation': 'With the changing guard',
                'originalDescription': "La relève de la garde arrive, précédée par une troupe joyeuse d'enfants qui imitent le pas martial des soldats. Moralès informe José qu'une jeune fille vêtue de bleu est venue le chercher.",
                'description': "The changing of the guard arrives, led by a merry troop of street children imitating the martial step of the soldiers. Moralès informs José that a young girl wearing blue came looking for him."
            },
            {
                'sceneNumber': 3,
                'title': 'Dites-moi, brigadier',
                'titleTranslation': 'Tell me, corporal',
                'originalDescription': "Le lieutenant Zuniga interroge Don José sur la manufacture de tabac et les cigarières qui y travaillent. José répond qu'il s'intéresse peu à ces femmes et ne pense qu'à son devoir et à Micaëla.",
                'description': "Lieutenant Zuniga questions Don José about the tobacco factory and the cigarettières who work inside. José replies that he takes little interest in these women and thinks only of his duty and of Micaëla."
            },
            {
                'sceneNumber': 4,
                'title': 'La cloche a sonné',
                'titleTranslation': 'The bell has rung',
                'originalDescription': "La cloche de midi retentit et les cigarières sortent de l'usine en fumant leurs cigarettes au milieu des compliments des jeunes gens. José reste assis à réparer sa chaînette sans prêter attention à la foule.",
                'description': "The noon bell rings and the cigarettières exit the factory smoking cigarettes amid compliments from the young men. José remains seated mending his chain without paying attention to the crowd."
            },
            {
                'sceneNumber': 5,
                'title': "L'amour est un oiseau rebelle (Habanera)",
                'titleTranslation': 'Love is a rebellious bird (Habanera)',
                'originalDescription': "Carmen apparaît entourée d'admirateurs et chante la célèbre habanera sur la nature insaisissable de l'amour. Avant de regagner la manufacture, elle jette une fleur de cassie au visage de José qui demeure troublé.",
                'description': "Carmen appears surrounded by admirers and sings the famous habanera about the elusive nature of love. Before returning to the factory, she hurls a cassia flower into José's face, leaving him spellbound."
            },
            {
                'sceneNumber': 6,
                'title': "Qu'est-ce que cela veut dire",
                'titleTranslation': 'What does this mean',
                'originalDescription': "Resté seul, Don José ramasse la fleur lancée par la bohémienne et respire son parfum ensorcelant. Il médite sur l'insolence de Carmen tout en cachant la fleur sous sa veste.",
                'description': "Left alone, Don José picks up the flower hurled by the gypsy and breathes in its bewitching fragrance. He reflects on Carmen's insolence while concealing the blossom beneath his tunic."
            },
            {
                'sceneNumber': 7,
                'title': 'Parle-moi de ma mère',
                'titleTranslation': 'Speak to me of my mother',
                'originalDescription': "Micaëla apporte à Don José une lettre, un peu d'argent et un baiser affectueux envoyés par sa mère. Ému par ces tendres souvenirs de son village natal, José réaffirme sa fidélité et son désir d'épouser la jeune fille.",
                'description': "Micaëla brings Don José a letter, a little money, and an affectionate kiss sent by his mother. Moved by these tender memories of his native village, José reaffirms his fidelity and his desire to marry the young girl."
            },
            {
                'sceneNumber': 8,
                'title': 'Au secours! au secours!',
                'titleTranslation': 'Help! Help!',
                'originalDescription': "Des cris retentissent dans la manufacture et les ouvrières se précipitent dehors en s'accusant mutuellement d'une violente rixe. Zuniga ordonne à José d'entrer avec deux soldats pour rétablir l'ordre et arrêter la coupable.",
                'description': "Screams erupt inside the factory and the workers rush outside accusing each other of a violent brawl. Zuniga orders José to enter with two soldiers to restore order and arrest the culprit."
            },
            {
                'sceneNumber': 9,
                'title': 'Tra la la la... Coupe-moi, brûle-moi',
                'titleTranslation': 'Tra la la la... Cut me, burn me',
                'originalDescription': "José ramène Carmen qui a balafré une compagne avec un couteau. Interrogée avec sévérité par le lieutenant, Carmen répond par des chants narquois et Zuniga la fait lier avant de rédiger son ordre d'emprisonnement.",
                'description': "José brings back Carmen, who slashed a comrade across the face with a knife. Severely interrogated by the lieutenant, Carmen responds with mocking songs, and Zuniga has her bound before drafting her committal order."
            },
            {
                'sceneNumber': 10,
                'title': 'Près des remparts de Séville (Séguedille)',
                'titleTranslation': 'Near the ramparts of Seville (Seguidilla)',
                'originalDescription': "Gardée seule par Don José, Carmen le séduit en lui promettant une nuit d'ivresse et de danse à la taverne de Lillas Pastia. Éperdument conquis par ses promesses, le jeune brigadier accepte de desserrer ses liens pour faciliter sa fuite.",
                'description': "Guarded alone by Don José, Carmen seduces him by promising a night of revelry and dance at Lillas Pastia's tavern. Wildly captivated by her promises, the young corporal agrees to loosen her bonds to facilitate her escape."
            },
            {
                'sceneNumber': 11,
                'title': "Voici l'ordre... partez!",
                'titleTranslation': 'Here is the order... depart!',
                'originalDescription': "Zuniga remet l'ordre de transfert à la prison et ordonne le départ de l'escorte. En franchissant le pont, Carmen bouscule José qui la laisse feindre une chute et s'évade au milieu des rires de la foule.",
                'description': "Zuniga hands over the prison transfer order and commands the escort to depart. Crossing the bridge, Carmen shoves José, who allows her to feign a stumble and escape amid laughter from the crowd."
            }
        ]
    },
    {
        'actNumber': 2,
        'title': 'Acte Deuxième: La taverne de Lillas Pastia',
        'originalSetting': "La taverne de Lillas Pastia. Tables à droite et à gauche. C’est la fin d’un dîner : le couvert est en désordre ; officiers et bohémiennes fument des cigarettes. Deux bohémiens râclent de la guitare dans un coin de la taverne et deux bohémiennes, au milieu de la scène, dansent. Carmen est assise, regardant danser les Bohémiennes ; le lieutenant lui parle bas, mais elle ne fait aucune attention à lui. Elle se lève tout à coup et se met à chanter.",
        'setting': "The tavern of Lillas Pastia. Tables to the right and left. It is the end of a dinner: the tableware is in disarray; officers and gypsies smoke cigarettes. Two gypsies strum guitars in a corner of the tavern and two gypsy girls dance in the center of the stage. Carmen sits watching the gypsies dance; the lieutenant speaks softly to her, but she pays him no attention. She suddenly rises and begins to sing.",
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Les tringles des sistres tintaient (Chanson bohème)',
                'titleTranslation': 'The rods of the sistrums were tinkling (Gypsy Song)',
                'originalDescription': "Carmen et ses amies dansent et chantent avec frénésie dans la taverne animée de Lillas Pastia. Zuniga lui apprend que Don José vient d'être libéré après deux mois d'arrêts pour avoir favorisé sa fuite.",
                'description': "Carmen and her friends dance and sing frenetically inside Lillas Pastia's lively tavern. Zuniga informs her that Don José has just been released after serving two months of detention for aiding her escape."
            },
            {
                'sceneNumber': 2,
                'title': 'Votre toast, je peux vous le rendre (Chanson du toréador)',
                'titleTranslation': 'Your toast, I can return to you (Toreador Song)',
                'originalDescription': "Le célèbre toréador Escamillo fait une entrée triomphale et célèbre la gloire et les périls des arènes dans son toast passionné. Fasciné par Carmen, il s'enquiert de son nom avant de s'éloigner au son des vivats de la foule.",
                'description': "The celebrated toreador Escamillo makes a triumphant entrance and celebrates the glory and perils of the bullring in his passionate toast. Fascinated by Carmen, he inquires about her name before departing to cheers from the crowd."
            },
            {
                'sceneNumber': 3,
                'title': 'Pourquoi étais-tu si pressé',
                'titleTranslation': 'Why were you in such a hurry',
                'originalDescription': "Lillas Pastia ferme son établissement sur ordre des officiers et presse les femmes de se préparer pour une expédition clandestine. Carmen refuse de partir car elle attend l'arrivée imminente de Don José.",
                'description': "Lillas Pastia closes his establishment on orders from the officers and urges the women to prepare for a clandestine expedition. Carmen refuses to leave because she awaits the imminent arrival of Don José."
            },
            {
                'sceneNumber': 4,
                'title': 'Nous avons en tête une affaire (Quintette)',
                'titleTranslation': 'We have an affair in mind (Quintet)',
                'originalDescription': "Les contrebandiers Le Dancaïre et Le Remendado exposent leur audacieux projet de contrebande qui nécessite l'adresse des trois femmes. Frasquita et Mercédès acceptent aussitôt, mais Carmen persiste à demeurer par amour pour José.",
                'description': "The smugglers Le Dancaïre and Le Remendado outline their daring smuggling scheme requiring the charm and cunning of the three women. Frasquita and Mercédès immediately accept, but Carmen insists on remaining behind out of love for José."
            },
            {
                'sceneNumber': 5,
                'title': "La fleur que tu m'avais jetée (Air de la fleur)",
                'titleTranslation': 'The flower that you threw to me (Flower Song)',
                'originalDescription': "Don José arrive enfin et Carmen danse amoureusement des castagnettes pour lui. Lorsque la trompette de la caserne sonne la retraite, José veut partir pour obéir au devoir, puis prouve sa passion en lui montrant la fleur desséchée qu'il a gardée en prison.",
                'description': "Don José finally arrives and Carmen dances lovingly for him with castanets. When the bugle call sounds retreat, José moves to depart in obedience to duty, then proves his devotion by showing her the withered blossom kept through his imprisonment."
            },
            {
                'sceneNumber': 6,
                'title': 'Holà! Carmen! holà!',
                'titleTranslation': 'Hello! Carmen! Hello!',
                'originalDescription': "Zuniga force la porte pour courtiser Carmen et insulte brutalement le brigadier récalcitrant. José tire son sabre contre son supérieur, mais les contrebandiers désarment l'officier et José choisit de déserter pour rejoindre la troupe libre des bohémiens.",
                'description': "Zuniga forces the door open to court Carmen and brutally insults the insubordinate corporal. José draws his saber against his superior, but the smugglers disarm the officer and José chooses desertion to join the free life of the gypsies."
            }
        ]
    },
    {
        'actNumber': 3,
        'title': 'Acte Troisième: Dans la montagne',
        'originalSetting': "Un site pittoresque et sauvage dans la montagne. Le rideau se lève sur un paysage rocheux sous une solitude complète et une nuit noire. Au bout de quelques instants, des contrebandiers apparaissent au sommet des rochers, descendant avec précaution en portant de lourds ballots sur les épaules.",
        'setting': "A picturesque and wild site in the mountains. The curtain rises on a rocky landscape enveloped in utter solitude and deep darkness. After a few moments, smugglers appear atop the rocks, descending cautiously carrying heavy bundles on their shoulders.",
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'Écoute, compagnon, écoute',
                'titleTranslation': 'Listen, comrade, listen',
                'originalDescription': "La troupe des contrebandiers fait halte au milieu des rochers escarpés de la montagne pour une halte nocturne. Don José monte la garde tout en déplorant son destin et en songeant tristement à sa mère.",
                'description': "The troop of smugglers halts amid the steep mountain rocks for a nocturnal rest. Don José stands guard while lamenting his fate and sorrowfully thinking of his mother."
            },
            {
                'sceneNumber': 2,
                'title': 'Mêlons! Coupons! (Trio des cartes)',
                'titleTranslation': 'Shuffle! Cut! (Card Trio)',
                'originalDescription': "Frasquita et Mercédès interrogent les cartes qui leur prédisent l'amour et la fortune. Carmen tire à son tour les tarots et ne lit que la mort pour elle-même et pour son amant.",
                'description': "Frasquita and Mercédès consult the cards, which foretell them love and fortune. Carmen draws the cards in her turn and reads only death for herself and for her lover."
            },
            {
                'sceneNumber': 3,
                'title': "Quant au douanier, c'est notre affaire",
                'titleTranslation': 'As for the customs officer, that is our business',
                'originalDescription': "Le Dancaïre annonce que le passage est praticable mais gardé par trois douaniers. Les trois femmes se font fort de les séduire pour ouvrir la voie et les contrebandiers emportent leurs marchandises.",
                'description': "Le Dancaïre announces that the mountain pass is clear but guarded by three customs officers. The three women pledge to charm them into submission to open the road, and the smugglers carry off their goods."
            },
            {
                'sceneNumber': 4,
                'title': "Je dis que rien ne m'épouvante (Air de Micaëla)",
                'titleTranslation': "I say that nothing frightens me (Micaëla's Aria)",
                'originalDescription': "Micaëla pénètre courageusement dans le repaire désolé des contrebandiers guidée par un montagnard apeuré. Seule dans la nuit, elle prie Dieu de lui donner la force d'arracher José aux griffes de Carmen.",
                'description': "Micaëla bravely enters the desolate smugglers' lair guided by a frightened mountaineer. Alone in the darkness, she prays to God for strength to rescue José from the clutches of Carmen."
            },
            {
                'sceneNumber': 5,
                'title': 'Mon guide avait raison',
                'titleTranslation': 'My guide was right',
                'originalDescription': "Micaëla aperçoit un homme armé sur un rocher et reconnaît Don José qui monte la faction. Effrayée lorsqu'il arme sa carabine et tire sur un inconnu, elle se cache en hâte derrière un rocher.",
                'description': "Micaëla catches sight of an armed sentry on the ridge and recognizes Don José standing watch. Terrified when he cocks his carbine and fires at an intruder, she hastens to conceal herself behind a boulder."
            },
            {
                'sceneNumber': 6,
                'title': 'Je suis Escamillo, toréro de Grenade',
                'titleTranslation': 'I am Escamillo, toreador of Granada',
                'originalDescription': "Escamillo révèle son amour pour Carmen et défie José dans un duel acharné au couteau. Carmen et les contrebandiers interrompent le combat; Micaëla sort alors de sa cachette et supplie José de regagner le chevet de sa mère mourante.",
                'description': "Escamillo reveals his love for Carmen and faces José in a furious knife fight. Carmen and the smugglers stop the duel; Micaëla then steps forward from hiding and implores José to return to the bedside of his dying mother."
            }
        ]
    },
    {
        'actNumber': 4,
        'title': 'Acte Quatrième: Une place à Séville (Les Arènes)',
        'originalSetting': "Une place à Séville. Au fond, les murailles de vieilles arènes; l'entrée du cirque est fermée par un long vélum. C’est le jour d’un combat de taureaux; grand mouvement sur la place avec des marchands d'eau, d'oranges et d'éventails.",
        'setting': "A square in Seville. In the background, the walls of the ancient arena; the entrance to the circus is draped with a wide awning. It is the day of a bullfight; great bustle fills the square with vendors of water, oranges, and fans.",
        'scenes': [
            {
                'sceneNumber': 1,
                'title': 'À deux cuartos! / Les voici, voici la quadrille!',
                'titleTranslation': 'For two cuartos! / Here they are, here is the quadrille!',
                'originalDescription': "La foule en liesse acclame le cortège éclatant de la quadrille des toreros devant les arènes de Séville. Carmen et Escamillo échangent un serment passionné, puis ses amies avertissent Carmen que Don José rôde dans les parages.",
                'description': "The jubilant crowd hails the glittering procession of the toreador quadrille before the arena of Seville. Carmen and Escamillo exchange a passionate vow of love, whereupon her friends warn Carmen that Don José is lurking nearby."
            },
            {
                'sceneNumber': 2,
                'title': "C'est toi? C'est moi! (Duo final)",
                'titleTranslation': 'Is it you? It is I! (Final Duet)',
                'originalDescription': "José supplie désespérément Carmen de revenir auprès de lui pour recommencer une nouvelle vie. Fiante et inflexible, Carmen lui jette sa bague au visage et José, fou de rage et de douleur, la poignarde à mort pendant que résonnent les ovations pour Escamillo.",
                'description': "José desperately implores Carmen to return to him and begin a new life together. Defiant and unyielding, Carmen flings his ring into his face, and José, wild with fury and despair, stabs her to death while cheers for Escamillo echo from within the arena."
            }
        ]
    }
]

# ---------------------------------------------------------
# 3. Landmark Piece Title Assignments
# ---------------------------------------------------------
PIECE_TITLE_MAP = {
    # Act 1
    (1, 1, 1): "Introduction: Sur la place, chacun passe",
    (1, 2, 1): "Chœur des gamins: Avec la garde montante",
    (1, 4, 1): "Chœur des cigarières: La cloche a sonné",
    (1, 5, 2): "Habanera: L’amour est un oiseau rebelle",
    (1, 7, 14): "Duo: Parle-moi de ma mère",
    (1, 8, 3): "Chœur: Au secours ! au secours !",
    (1, 9, 16): "Chanson: Tra la la la... Coupe-moi, brûle-moi",
    (1, 10, 8): "Séguedille: Près des remparts de Séville",
    # Act 2
    (2, 1, 1): "Chanson bohème: Les tringles des sistres tintaient",
    (2, 2, 4): "Couplets du Toréador: Votre toast, je peux vous le rendre",
    (2, 4, 3): "Quintette: Nous avons en tête une affaire",
    (2, 4, 76): "Chanson: Le Dragon d’Alcala (Halte-là !)",
    (2, 5, 33): "Air de la fleur: La fleur que tu m’avais jetée",
    (2, 5, 36): "Duo: Non ! tu ne m’aimes pas",
    # Act 3
    (3, 1, 1): "Introduction: Écoute, compagnon, écoute !",
    (3, 2, 17): "Trio des cartes: Mêlons ! Coupons !",
    (3, 2, 34): "Air des cartes: En vain, pour éviter les réponses amères",
    (3, 3, 4): "Morceau d’ensemble: Quant au douanier, c’est notre affaire",
    (3, 4, 3): "Air de Micaëla: Je dis que rien ne m’épouvante",
    (3, 6, 2): "Duo: Je suis Escamillo, toréro de Grenade",
    # Act 4
    (4, 1, 1): "Chœur des marchands: À deux cuartos !",
    (4, 1, 23): "Marche et Chœur: Les voici, voici la quadrille !",
    (4, 1, 35): "Duo: Si tu m’aimes, Carmen",
    (4, 2, 1): "Duo et Scène finale: C’est toi ? C’est moi !"
}

# ---------------------------------------------------------
# 4. Characters
# ---------------------------------------------------------
CHARACTERS = [
    {'name': 'Carmen', 'voiceType': 'Mezzo-Soprano', 'description': 'A seductive, fiery, and fiercely independent Romani woman working at the cigarette factory in Seville.'},
    {'name': 'Don José', 'voiceType': 'Tenor', 'description': 'A serious, naïve corporal of dragoons from Navarre, torn between maternal devotion, duty, and fatal obsession.'},
    {'name': 'Escamillo', 'voiceType': 'Bass-Baritone', 'description': 'The glamorous and celebrated bullfighter of Granada, daring hero of the arena adored by the crowd.'},
    {'name': 'Micaëla', 'voiceType': 'Soprano', 'description': 'A gentle, virtuous orphan girl from José\'s native village who carries his mother\'s letter, blessing, and prayers.'},
    {'name': 'Le Lieutenant', 'voiceType': 'Bass', 'description': 'Zuniga, the authoritative, haughty lieutenant commanding the dragoons in Seville.'},
    {'name': 'Moralès', 'voiceType': 'Baritone', 'description': 'A charming, bantering corporal on duty at the guardhouse on the square.'},
    {'name': 'Frasquita', 'voiceType': 'Soprano', 'description': 'A vivacious young gypsy girl, close friend and confidante to Carmen.'},
    {'name': 'Mercédès', 'voiceType': 'Mezzo-Soprano', 'description': 'A spirited gypsy companion to Carmen and Frasquita.'},
    {'name': 'Le Dancaïre', 'voiceType': 'Baritone', 'description': 'The sharp, resolute chief of the mountain smuggling band.'},
    {'name': 'Le Remendado', 'voiceType': 'Tenor', 'description': 'The nimble, witty second-in-command of the smugglers.'},
    {'name': 'Le Guide', 'voiceType': 'Spoken', 'description': 'A mountain guide conducting Micaëla through the rugged gorges.'},
    {'name': 'Lillas Pastia', 'voiceType': 'Spoken', 'description': 'The crafty innkeeper of the clandestine tavern on the outskirts of Seville.'},
    {'name': 'Chœur', 'voiceType': 'Chorus', 'description': 'Soldiers, young townsmen, cigarette factory women, gypsies, smugglers, urchins, and bullring spectators.'}
]

# ---------------------------------------------------------
# 5. Ingestion Builder
# ---------------------------------------------------------
def main():
    print("Loading cleaned structure: scripts/raw_carmen/carmen_extracted_structure.json")
    with open(RAW_DIR / 'carmen_extracted_structure.json', 'r', encoding='utf-8') as f:
        acts_raw = json.load(f)

    assert len(acts_raw) == 4, f"Expected 4 acts, found {len(acts_raw)}"

    total_cues_all = 0
    total_lines_all = 0
    acts_output = []

    for act_idx in range(4):
        act_raw = acts_raw[act_idx]
        act_meta = ACT_METADATA[act_idx]
        act_trans = ALL_TRANSLATIONS[act_idx]
        act_num = act_idx + 1

        all_act_cues_raw = [c for s in act_raw['scenes'] for c in s['cues']]
        print(f"Act {act_num}: {len(act_raw['scenes'])} scenes, {len(all_act_cues_raw)} raw cues, {len(act_trans)} translation cues")
        assert len(all_act_cues_raw) == len(act_trans), f"Act {act_num} cues mismatch: {len(all_act_cues_raw)} raw vs {len(act_trans)} trans"

        # Global counter across the act to index act_trans (1-based)
        global_act_cue_idx = 1
        scenes_output = []

        for s_idx, scene_raw in enumerate(act_raw['scenes']):
            scene_num = s_idx + 1
            scene_meta = act_meta['scenes'][s_idx]
            scene_cues_raw = scene_raw['cues']

            parsed_cues = []
            for c_local_idx, c_data in enumerate(scene_cues_raw, 1):
                cue_id = f"a{act_num}_s{scene_num}_c{c_local_idx}"
                
                # Fetch translation
                key = str(global_act_cue_idx) if str(global_act_cue_idx) in act_trans else global_act_cue_idx
                t_cue = act_trans[key]

                raw_lines = c_data['lines']
                trans_lines = t_cue['lines']
                assert len(raw_lines) == len(trans_lines), f"Act {act_num} Sc {scene_num} Cue {c_local_idx} line count mismatch: {len(raw_lines)} raw vs {len(trans_lines)} trans"

                lines_obj = []
                for l_idx, (orig_line, lit_line) in enumerate(zip(raw_lines, trans_lines), 1):
                    lines_obj.append({
                        'id': f"{cue_id}_l{l_idx}",
                        'original': orig_line,
                        'literal': lit_line
                    })
                    total_lines_all += 1

                canonical_speaker = SPEAKER_MAP.get(c_data['speaker'], c_data['speaker'].title())

                cue_dict = {
                    'id': cue_id,
                    'speaker': canonical_speaker,
                    'lines': lines_obj
                }

                if c_data.get('direction'):
                    cue_dict['stageDirection'] = c_data['direction']
                if t_cue.get('direction_en'):
                    cue_dict['stageDirectionTranslation'] = t_cue['direction_en']

                # Assign landmark pieceTitle if mapped
                piece_title = PIECE_TITLE_MAP.get((act_num, scene_num, c_local_idx))
                if piece_title:
                    cue_dict['pieceTitle'] = piece_title

                parsed_cues.append(cue_dict)
                total_cues_all += 1
                global_act_cue_idx += 1

            scenes_output.append({
                'sceneNumber': scene_meta['sceneNumber'],
                'title': scene_meta['title'],
                'titleTranslation': scene_meta.get('titleTranslation'),
                'originalDescription': scene_meta.get('originalDescription'),
                'description': scene_meta.get('description'),
                'cues': parsed_cues
            })

        acts_output.append({
            'actNumber': act_meta['actNumber'],
            'title': act_meta['title'],
            'originalSetting': act_meta.get('originalSetting'),
            'setting': act_meta.get('setting'),
            'scenes': scenes_output
        })

    opera_ingest = {
        'id': 'carmen',
        'title': 'Carmen',
        'originalTitle': 'Carmen',
        'composer': 'Georges Bizet',
        'librettists': ['Henri Meilhac', 'Ludovic Halévy'],
        'language': 'fr',
        'languageLabel': 'French',
        'year': 1875,
        'synopsis': (
            "Set in 1820s Seville, Spain, Georges Bizet's masterpiece tells the tragic story of Carmen, "
            "a fiercely independent and captivating Romani cigarette girl, and Don José, an upright corporal "
            "of dragoons who falls under her spell. Seduced by Carmen's unbridled passion and allure, José forsakes "
            "his duty, his beloved childhood sweetheart Micaëla, and his honor, turning soldier into outlaw "
            "and joining a mountain band of smugglers. But Carmen's volatile spirit cannot be bound; when her affections "
            "turn to the glamorous toreador Escamillo, José is consumed by raging jealousy and obsession, leading to "
            "a confrontation outside the Seville bullring where tragedy strikes."
        ),
        'characters': CHARACTERS,
        'acts': acts_output
    }

    with open(OUT_JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(opera_ingest, f, indent=2, ensure_ascii=False)

    print(f"\n✓ Successfully created {OUT_JSON_FILE}!")
    print(f"Total Acts: {len(acts_output)}")
    print(f"Total Cues: {total_cues_all} (Expected: 672)")
    print(f"Total Lines: {total_lines_all} (Expected: 1479)")
    assert total_cues_all == 672, f"Expected 672 cues, got {total_cues_all}"
    assert total_lines_all == 1479, f"Expected 1479 lines, got {total_lines_all}"
    print("\nAll Carmen data assembled and validated perfectly!")

if __name__ == '__main__':
    main()

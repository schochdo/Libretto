"""
build_act2_translations.py - Generates carmen_translations_act2.py for Bizet's Carmen Act 2.
Ensures exact 1-to-1 cue and line parity with scripts/raw_carmen/carmen_extracted_structure.json.
"""

import json

ACT2_TRANSLATIONS = {
    1: {
        "direction_en": "On this refrain, the gypsy girls dance. Mercédès and Frasquita resume with Carmen 'La la la la la la!'.",
        "lines": [
            "The rods of the sistrums were tinkling",
            "with a metallic brilliance,",
            "and to this strange music",
            "the zingarellas were rising;",
            "tambourines were going their pace,",
            "and the frenzied guitars",
            "were screeching under obstinate hands...",
            "Same song, same refrain,",
            "La la la la la la!",
            "II",
            "The rings of copper and silver",
            "were gleaming on bistre skins;",
            "striped with orange or red,",
            "the fabrics were floating in the wind;",
            "the dance to the song was marrying,",
            "at first hesitant and timid,",
            "more lively then and more rapid...",
            "That was mounting, mounting, mounting!...",
            "La la la la la la!"
        ]
    },
    2: {
        "direction_en": None,
        "lines": [
            "La la la la la la.",
            "III",
            "The gypsies with all their might,",
            "with their instruments were raging,",
            "and this dazzling uproar",
            "was bewitching the zingaras!",
            "Under the rhythm of the song,",
            "ardent, wild, feverish,",
            "they let themselves, intoxicated,",
            "be carried away by the whirlwind!",
            "La la la la la la!"
        ]
    },
    3: {
        "direction_en": "Very rapid, very violent dance movement. Carmen herself dances and comes, with the last notes of the orchestra, to fall panting upon a bench. After the dance, Lillas Pastia begins to circle around the officers with an embarrassed air.",
        "lines": [
            "La la la la la la."
        ]
    },
    4: {
        "direction_en": None,
        "lines": [
            "You have something to tell us, Master Lillas Pastia?"
        ]
    },
    5: {
        "direction_en": None,
        "lines": [
            "My God, gentlemen..."
        ]
    },
    6: {
        "direction_en": None,
        "lines": [
            "Speak, come..."
        ]
    },
    7: {
        "direction_en": None,
        "lines": [
            "It begins to grow late... and I am, more than anyone, obliged to observe the regulations, the magistrate being rather ill-disposed toward me... I do not know why he is ill-disposed..."
        ]
    },
    8: {
        "direction_en": None,
        "lines": [
            "I know it very well, myself. It is because your inn is the ordinary meeting place of all the smugglers of the province."
        ]
    },
    9: {
        "direction_en": None,
        "lines": [
            "Whether it be for that reason or another, I am obliged to take care... Now, I repeat to you, it begins to grow late."
        ]
    },
    10: {
        "direction_en": None,
        "lines": [
            "That means that you are putting us out the door!..."
        ]
    },
    11: {
        "direction_en": None,
        "lines": [
            "Oh! no, officer gentlemen... oh! no... I only make you observe that my inn ought to have been closed ten minutes ago..."
        ]
    },
    12: {
        "direction_en": None,
        "lines": [
            "God knows what happens in your inn, once it is closed!..."
        ]
    },
    13: {
        "direction_en": None,
        "lines": [
            "Oh! my lieutenant!..."
        ]
    },
    14: {
        "direction_en": "Pastia makes a sign to the gypsy girls to refuse.",
        "lines": [
            "Well, we still have, before roll call, time to go spend an hour at the theater... You will come with us, will you not, beauties?"
        ]
    },
    15: {
        "direction_en": None,
        "lines": [
            "No, officer gentlemen, no... we are staying here, we."
        ]
    },
    16: {
        "direction_en": None,
        "lines": [
            "How! you will not come?..."
        ]
    },
    17: {
        "direction_en": None,
        "lines": [
            "It is impossible..."
        ]
    },
    18: {
        "direction_en": None,
        "lines": [
            "Mercédès!..."
        ]
    },
    19: {
        "direction_en": None,
        "lines": [
            "I regret..."
        ]
    },
    20: {
        "direction_en": None,
        "lines": [
            "Frasquita!..."
        ]
    },
    21: {
        "direction_en": None,
        "lines": [
            "I am distressed..."
        ]
    },
    22: {
        "direction_en": None,
        "lines": [
            "But you, Carmen, I am quite sure that you will not refuse..."
        ]
    },
    23: {
        "direction_en": "While the lieutenant speaks to Carmen, two other officers try to persuade Frasquita and Mercédès.",
        "lines": [
            "That is what deceives you, my lieutenant!... I refuse, and even more plainly than the two of them, if that is possible!..."
        ]
    },
    24: {
        "direction_en": None,
        "lines": [
            "You have a grudge against me?"
        ]
    },
    25: {
        "direction_en": None,
        "lines": [
            "Why would I have a grudge against you?"
        ]
    },
    26: {
        "direction_en": None,
        "lines": [
            "Because a month ago, I had the cruelty to send you to prison..."
        ]
    },
    27: {
        "direction_en": "as if she did not remember",
        "lines": [
            "To prison?..."
        ]
    },
    28: {
        "direction_en": None,
        "lines": [
            "I was on duty: I could not do otherwise."
        ]
    },
    29: {
        "direction_en": "same play",
        "lines": [
            "To prison?... I do not remember having gone to prison..."
        ]
    },
    30: {
        "direction_en": None,
        "lines": [
            "I know it, by God! well that you did not go there... the corporal who was charged with conducting you having deemed it fitting to let you escape... and to get himself demoted and imprisoned for that..."
        ]
    },
    31: {
        "direction_en": "serious",
        "lines": [
            "Demoted and imprisoned?..."
        ]
    },
    32: {
        "direction_en": None,
        "lines": [
            "My God, yes!... they would not admit that such a little hand could have been strong enough to knock down a man..."
        ]
    },
    33: {
        "direction_en": None,
        "lines": [
            "Oh!"
        ]
    },
    34: {
        "direction_en": None,
        "lines": [
            "That did not seem natural..."
        ]
    },
    35: {
        "direction_en": None,
        "lines": [
            "And that poor boy became a simple private again?..."
        ]
    },
    36: {
        "direction_en": None,
        "lines": [
            "Yes... and he spent a month in prison..."
        ]
    },
    37: {
        "direction_en": None,
        "lines": [
            "But he has come out of it?"
        ]
    },
    38: {
        "direction_en": None,
        "lines": [
            "Since yesterday only!"
        ]
    },
    39: {
        "direction_en": "clicking her castanets",
        "lines": [
            "All is well, since he has come out of it, all is well!"
        ]
    },
    40: {
        "direction_en": None,
        "lines": [
            "Very good! you console yourself quickly..."
        ]
    },
    41: {
        "direction_en": "aside; Aloud:",
        "lines": [
            "And I am right...",
            "If you take my advice, you will do as I do: you want to take us along, we do not want to follow you... you will console yourself..."
        ]
    },
    42: {
        "direction_en": "The scene is interrupted by a chorus sung offstage.",
        "lines": [
            "One will have to indeed!"
        ]
    },
    43: {
        "direction_en": None,
        "lines": [
            "Hurrah! hurrah for the bullfighter!",
            "Hurrah! hurrah Escamillo!",
            "Never has an intrepid man,",
            "by a more beautiful stroke,",
            "with a swifter hand,",
            "laid low the bull!",
            "Hurrah! hurrah for the bullfighter!",
            "Hurrah! hurrah Escamillo!..."
        ]
    },
    44: {
        "direction_en": None,
        "lines": [
            "What is that?"
        ]
    },
    45: {
        "direction_en": None,
        "lines": [
            "A torchlight procession..."
        ]
    },
    46: {
        "direction_en": None,
        "lines": [
            "And whom are they parading?"
        ]
    },
    47: {
        "direction_en": None,
        "lines": [
            "I recognize him... It is Escamillo... a bullfighter who distinguished himself at the latest bullfights of Granada and who promises to equal the glory of Montès and Pepe Illo..."
        ]
    },
    48: {
        "direction_en": None,
        "lines": [
            "By God, we must have him come in... we will drink in his honor!"
        ]
    },
    49: {
        "direction_en": "He goes to the window; Leaving the window:",
        "lines": [
            "That is it!... I am going to invite him...",
            "Mister bullfighter... will you do us the friendship of coming up here? you will find here people who greatly love all those who, like you, have skill and courage...",
            "He is coming..."
        ]
    },
    50: {
        "direction_en": "pleading",
        "lines": [
            "Officer gentlemen, I had told you..."
        ]
    },
    51: {
        "direction_en": None,
        "lines": [
            "Have the kindness to leave us in peace, Master Lillas Pastia, and have brought to us something to drink..."
        ]
    },
    52: {
        "direction_en": "Escamillo appears.",
        "lines": [
            "Hurrah! hurrah for the bullfighter!",
            "Hurrah! hurrah Escamillo!"
        ]
    },
    53: {
        "direction_en": None,
        "lines": [
            "These ladies and we thank you for having accepted our invitation... We did not want to let you pass without drinking with you to the great art of bullfighting."
        ]
    },
    54: {
        "direction_en": None,
        "lines": [
            "Officer gentlemen, I thank you.",
            "Your toast... I can return it to you,",
            "señors, for with soldiers",
            "bullfighters can agree:",
            "for pleasure they have combats!...",
            "The circus is full, it is a feast day,",
            "the circus is full from top to bottom.",
            "The spectators losing their heads",
            "shout to one another with great racket:",
            "apostrophes, cries and clamor",
            "pushed unto fury,",
            "for it is the festival of courage.",
            "It is the festival of men of heart...",
            "Bullfighter, on guard!",
            "And dream while fighting",
            "that a dark eye watches you",
            "and that love awaits you."
        ]
    },
    55: {
        "direction_en": "Between the two stanzas, Carmen fills Escamillo's glass.",
        "lines": [
            "Bullfighter, on guard!",
            "Etc.",
            "II",
            "All at once silence is made;",
            "no more cries! what is happening?",
            "It is the moment, the bull charges",
            "bounding out of the toril...",
            "He enters, he strikes, a horse rolls",
            "dragging down a picador:",
            "'Bravo, toro!...' howls the crowd,",
            "the bull goes, comes, strikes again...",
            "Shaking his banderillas,",
            "he runs: the circus is full of blood;",
            "people flee, they leap over the barriers...",
            "Come! it is your turn now.",
            "Bullfighter, on guard!",
            "And dream while fighting",
            "that a dark eye watches you",
            "and that love awaits you."
        ]
    },
    56: {
        "direction_en": "They drink, they shake hands with the bullfighter.",
        "lines": [
            "Bullfighter, on guard!",
            "Etc."
        ]
    },
    57: {
        "direction_en": None,
        "lines": [
            "Officer gentlemen, I beg you..."
        ]
    },
    58: {
        "direction_en": "The officers begin to prepare to depart. Escamillo is near Carmen.",
        "lines": [
            "Very well, very well, we are leaving..."
        ]
    },
    59: {
        "direction_en": None,
        "lines": [
            "Tell me your name, and the first time I strike the bull, it will be your name that I will pronounce."
        ]
    },
    60: {
        "direction_en": None,
        "lines": [
            "I am called the Carmencita."
        ]
    },
    61: {
        "direction_en": None,
        "lines": [
            "The Carmencita?"
        ]
    },
    62: {
        "direction_en": None,
        "lines": [
            "Carmen, the Carmencita, as you will wish."
        ]
    },
    63: {
        "direction_en": None,
        "lines": [
            "Well then! Carmen or the Carmencita, if I took it into my head to love you and be loved by you, what would you answer me?"
        ]
    },
    64: {
        "direction_en": None,
        "lines": [
            "I would answer that you may love me quite at your ease, but that, as for being loved by me for the moment, one must not think of it!"
        ]
    },
    65: {
        "direction_en": None,
        "lines": [
            "Ah!"
        ]
    },
    66: {
        "direction_en": None,
        "lines": [
            "It is like that."
        ]
    },
    67: {
        "direction_en": None,
        "lines": [
            "I will wait, then, and I will content myself with hoping..."
        ]
    },
    68: {
        "direction_en": None,
        "lines": [
            "It is not forbidden to wait and it is always pleasant to hope."
        ]
    },
    69: {
        "direction_en": "to Frasquita and Mercédès",
        "lines": [
            "You are not coming decidedly?"
        ]
    },
    70: {
        "direction_en": "on a new sign from Pastia",
        "lines": [
            "No indeed, no indeed..."
        ]
    },
    71: {
        "direction_en": "to the lieutenant",
        "lines": [
            "Bad campaign, lieutenant!..."
        ]
    },
    72: {
        "direction_en": "Low, to Carmen:",
        "lines": [
            "Bah! the battle is not yet lost...",
            "Listen to me, Carmen: since you do not want to come with us, it is I who, in an hour, will return here..."
        ]
    },
    73: {
        "direction_en": None,
        "lines": [
            "Here?..."
        ]
    },
    74: {
        "direction_en": None,
        "lines": [
            "Yes, in an hour... after roll call."
        ]
    },
    75: {
        "direction_en": None,
        "lines": [
            "I do not advise you to return..."
        ]
    },
    76: {
        "direction_en": "laughing; Aloud:",
        "lines": [
            "I will return all the same.",
            "We depart with you, bullfighter, and we will join the procession that accompanies you."
        ]
    },
    77: {
        "direction_en": None,
        "lines": [
            "It is a great honor for me; I will try not to show myself unworthy of it when I fight before your eyes."
        ]
    },
    78: {
        "direction_en": "Everyone exits, except Carmen, Frasquita, Mercédès and Lillas Pastia.",
        "lines": [
            "Bullfighter, on guard!",
            "And dream while fighting,",
            "etc."
        ]
    },
    79: {
        "direction_en": "to Pastia",
        "lines": [
            "Why were you in such a hurry to make them leave and why did you make a sign to us not to follow them?"
        ]
    },
    80: {
        "direction_en": None,
        "lines": [
            "Le Dancaïre and Le Remendado have just arrived... they have to speak to you of your business, Egyptian business."
        ]
    },
    81: {
        "direction_en": None,
        "lines": [
            "Le Dancaïre and Le Remendado?..."
        ]
    },
    82: {
        "direction_en": "opening a door and beckoning; Le Dancaïre and Le Remendado enter. Pastia closes the doors, fastens the shutters, etc.",
        "lines": [
            "Yes, here they are... see..."
        ]
    },
    83: {
        "direction_en": None,
        "lines": [
            "Well, the news?..."
        ]
    },
    84: {
        "direction_en": None,
        "lines": [
            "Not too bad the news... We arrive from Gibraltar..."
        ]
    },
    85: {
        "direction_en": None,
        "lines": [
            "Pretty city, Gibraltar!... one sees Englishmen there, many Englishmen... handsome men, the English... a bit cold, but distinguished..."
        ]
    },
    86: {
        "direction_en": None,
        "lines": [
            "Remendado!..."
        ]
    },
    87: {
        "direction_en": None,
        "lines": [
            "Boss?..."
        ]
    },
    88: {
        "direction_en": "putting his hand on his knife",
        "lines": [
            "You understand?"
        ]
    },
    89: {
        "direction_en": None,
        "lines": [
            "Perfectly, boss!..."
        ]
    },
    90: {
        "direction_en": None,
        "lines": [
            "Be silent then... We arrive from Gibraltar, we have arranged with a ship captain the landing of English goods. We will go wait for them near the coast, we will hide part of them in the mountain and we will pass the rest... All our comrades have been alerted... they are here, hidden... but it is you three above all that we need... you are going to leave with us..."
        ]
    },
    91: {
        "direction_en": "laughing",
        "lines": [
            "What for? to help you carry the bales?..."
        ]
    },
    92: {
        "direction_en": None,
        "lines": [
            "Oh! no... to make ladies carry bales... that would not be distinguished."
        ]
    },
    93: {
        "direction_en": "threatening",
        "lines": [
            "Remendado?"
        ]
    },
    94: {
        "direction_en": None,
        "lines": [
            "Yes, boss."
        ]
    },
    95: {
        "direction_en": None,
        "lines": [
            "We will not have you carry bales, but we will need you for something else."
        ]
    },
    96: {
        "direction_en": None,
        "lines": [
            "We have in mind a business affair!"
        ]
    },
    97: {
        "direction_en": None,
        "lines": [
            "Is it good, tell us?"
        ]
    },
    98: {
        "direction_en": None,
        "lines": [
            "It is admirable, my dear;",
            "but we have need of you."
        ]
    },
    99: {
        "direction_en": None,
        "lines": [
            "Of us?"
        ]
    },
    100: {
        "direction_en": None,
        "lines": [
            "Of you!",
            "For we confess it humbly",
            "and very respectfully,",
            "when it comes to deception,",
            "to duping,",
            "to thievery,",
            "it is always good, upon my word,",
            "to have women with oneself.",
            "And without them,",
            "my all-beautiful ones,",
            "one never does anything",
            "well!"
        ]
    },
    101: {
        "direction_en": None,
        "lines": [
            "What, without us never anything",
            "well?"
        ]
    },
    102: {
        "direction_en": None,
        "lines": [
            "Are you not of that opinion?"
        ]
    },
    103: {
        "direction_en": None,
        "lines": [
            "Yes indeed, I am",
            "of that opinion."
        ]
    },
    104: {
        "direction_en": None,
        "lines": [
            "In matters of deception,",
            "of duping,",
            "of thievery,",
            "it is always good, upon my word,",
            "to have women with oneself!",
            "And without them,",
            "the all-beautiful ones,",
            "one never does anything",
            "well."
        ]
    },
    105: {
        "direction_en": None,
        "lines": [
            "It is decided, then: you will depart?"
        ]
    },
    106: {
        "direction_en": None,
        "lines": [
            "When you wish."
        ]
    },
    107: {
        "direction_en": None,
        "lines": [
            "Why right away..."
        ]
    },
    108: {
        "direction_en": "To Mercédès and to Frasquita:",
        "lines": [
            "Ah! allow me...",
            "If it pleases you to depart, depart,",
            "but I am not of the journey;",
            "I do not depart, I do not depart!"
        ]
    },
    109: {
        "direction_en": None,
        "lines": [
            "Carmen, my love, you will come,",
            "and you will not have the heart",
            "to leave us in the lurch."
        ]
    },
    110: {
        "direction_en": None,
        "lines": [
            "I do not depart, I do not depart!"
        ]
    },
    111: {
        "direction_en": None,
        "lines": [
            "But at least the reason, Carmen, you will tell it?"
        ]
    },
    112: {
        "direction_en": None,
        "lines": [
            "I will tell it certainly...",
            "The reason is that at this moment",
            "I am in love."
        ]
    },
    113: {
        "direction_en": "stupefied",
        "lines": [
            "What did she say?"
        ]
    },
    114: {
        "direction_en": None,
        "lines": [
            "She says that she is in love."
        ]
    },
    115: {
        "direction_en": None,
        "lines": [
            "In love!"
        ]
    },
    116: {
        "direction_en": None,
        "lines": [
            "In love!"
        ]
    },
    117: {
        "direction_en": None,
        "lines": [
            "Come, Carmen, be serious."
        ]
    },
    118: {
        "direction_en": None,
        "lines": [
            "In love to the point of losing my mind..."
        ]
    },
    119: {
        "direction_en": None,
        "lines": [
            "Certainly, the thing astonishes us,",
            "but this is not the first day",
            "where you have known, my darling,",
            "how to make duty and love march side by side."
        ]
    },
    120: {
        "direction_en": None,
        "lines": [
            "My friends, I would be very glad",
            "to depart with you tonight;",
            "but this time, with your leave,",
            "love will have to come before duty."
        ]
    },
    121: {
        "direction_en": None,
        "lines": [
            "That is not your last word?"
        ]
    },
    122: {
        "direction_en": None,
        "lines": [
            "Forgive me!"
        ]
    },
    123: {
        "direction_en": None,
        "lines": [
            "Carmen, you must",
            "let yourself be softened!"
        ]
    },
    124: {
        "direction_en": None,
        "lines": [
            "You must come, Carmen, you must come.",
            "For our affair,",
            "it is necessary...",
            "For, between us..."
        ]
    },
    125: {
        "direction_en": None,
        "lines": [
            "For between us..."
        ]
    },
    126: {
        "direction_en": None,
        "lines": [
            "As to that, I admit it well with you..."
        ]
    },
    127: {
        "direction_en": None,
        "lines": [
            "In matters of deception,",
            "of duping,",
            "of thievery,",
            "etc."
        ]
    },
    128: {
        "direction_en": None,
        "lines": [
            "That is enough of that!... I told you that you must come, and you will come... I am the chief..."
        ]
    },
    129: {
        "direction_en": None,
        "lines": [
            "How do you say that?..."
        ]
    },
    130: {
        "direction_en": None,
        "lines": [
            "I tell you that I am the chief..."
        ]
    },
    131: {
        "direction_en": None,
        "lines": [
            "And you think that I will obey you?..."
        ]
    },
    132: {
        "direction_en": "furious",
        "lines": [
            "Carmen!..."
        ]
    },
    133: {
        "direction_en": "very calm",
        "lines": [
            "Well?..."
        ]
    },
    134: {
        "direction_en": "throwing himself between Le Dancaïre and Carmen",
        "lines": [
            "I beg you... such distinguished persons!..."
        ]
    },
    135: {
        "direction_en": "aiming a kick that Le Remendado avoids",
        "lines": [
            "Take that, you!..."
        ]
    },
    136: {
        "direction_en": "straightening up",
        "lines": [
            "Boss!..."
        ]
    },
    137: {
        "direction_en": None,
        "lines": [
            "What is it?..."
        ]
    },
    138: {
        "direction_en": None,
        "lines": [
            "Nothing, boss!..."
        ]
    },
    139: {
        "direction_en": None,
        "lines": [
            "In love... that is no reason, that!..."
        ]
    },
    140: {
        "direction_en": None,
        "lines": [
            "The fact is that it is not one... I too, I am in love... and that does not prevent me from making myself useful..."
        ]
    },
    141: {
        "direction_en": None,
        "lines": [
            "Depart without me... I will go join you tomorrow... but, for tonight, I stay..."
        ]
    },
    142: {
        "direction_en": None,
        "lines": [
            "I have never seen you like this... Whom are you waiting for, then?..."
        ]
    },
    143: {
        "direction_en": None,
        "lines": [
            "A poor devil of a soldier who did me a service..."
        ]
    },
    144: {
        "direction_en": None,
        "lines": [
            "That soldier who was in prison?"
        ]
    },
    145: {
        "direction_en": None,
        "lines": [
            "Yes."
        ]
    },
    146: {
        "direction_en": None,
        "lines": [
            "And to whom, a fortnight ago, the jailer delivered from you a loaf of bread in which there was a gold coin and a file?..."
        ]
    },
    147: {
        "direction_en": "going up toward the window",
        "lines": [
            "Yes."
        ]
    },
    148: {
        "direction_en": None,
        "lines": [
            "Did he make use of it, of that file?..."
        ]
    },
    149: {
        "direction_en": "going up toward the window",
        "lines": [
            "No."
        ]
    },
    150: {
        "direction_en": None,
        "lines": [
            "You see well! your soldier must have been afraid of being punished more harshly than he had been; tonight again he will be afraid... you may half-open the shutters and look to see if he is coming as much as you like, I would bet that he will not come."
        ]
    },
    151: {
        "direction_en": "José's voice is heard in the distance.",
        "lines": [
            "Do not bet, you would lose..."
        ]
    },
    152: {
        "direction_en": "voice very far off; While he sings, Carmen, Le Dancaïre, Le Remendado, Mercédès and Frasquita, through the half-opened shutters, watch José coming.",
        "lines": [
            "Halt there!",
            "Who goes there?",
            "- Dragoon of Almanza!",
            "- Where are you going that way,",
            "dragoon of Almanza?",
            "- I, I am going to make",
            "my adversary",
            "bite the dust.",
            "- If it is so,",
            "pass, my friend:",
            "affair of honor,",
            "affair of heart,",
            "for us everything is there,",
            "dragoons of Almanza!"
        ]
    },
    153: {
        "direction_en": None,
        "lines": [
            "He is a dragoon, upon my word!"
        ]
    },
    154: {
        "direction_en": None,
        "lines": [
            "And a handsome dragoon!"
        ]
    },
    155: {
        "direction_en": "to Carmen",
        "lines": [
            "Well, since you will not come until tomorrow, do you know at least what you ought to do?"
        ]
    },
    156: {
        "direction_en": None,
        "lines": [
            "What ought I to do!..."
        ]
    },
    157: {
        "direction_en": None,
        "lines": [
            "You ought to persuade your dragoon to come with you and join us."
        ]
    },
    158: {
        "direction_en": None,
        "lines": [
            "Ah!... if that could be!... but one must not think of it... that is foolishness... he is too simple."
        ]
    },
    159: {
        "direction_en": None,
        "lines": [
            "Why do you love him since you admit yourself..."
        ]
    },
    160: {
        "direction_en": None,
        "lines": [
            "Because he is a handsome fellow, then!... and he pleases me."
        ]
    },
    161: {
        "direction_en": "with conceit",
        "lines": [
            "The boss does not understand that, he... that it suffices to be a handsome fellow to please women..."
        ]
    },
    162: {
        "direction_en": "Le Remendado runs away and exits. Le Dancaïre pursues him and exits in turn, dragging away Mercédès and Frasquita who try to calm him.",
        "lines": [
            "Wait a little, you!... wait a little!..."
        ]
    },
    163: {
        "direction_en": "voice much closer; José enters.",
        "lines": [
            "Halt there!",
            "Who goes there?",
            "- Dragoon of Almanza!",
            "- Where are you going that way,",
            "dragoon of Almanza?",
            "- Exact and faithful,",
            "I go where the love",
            "of my beauty calls me.",
            "- If it is so,",
            "pass, my friend:",
            "affair of honor,",
            "affair of heart,",
            "for us everything is there,",
            "dragoons of Almanza!"
        ]
    },
    164: {
        "direction_en": None,
        "lines": [
            "Finally... here you are... That is very lucky!..."
        ]
    },
    165: {
        "direction_en": None,
        "lines": [
            "Carmen..."
        ]
    },
    166: {
        "direction_en": None,
        "lines": [
            "Do you come out of prison?"
        ]
    },
    167: {
        "direction_en": None,
        "lines": [
            "I have been out of it since yesterday."
        ]
    },
    168: {
        "direction_en": None,
        "lines": [
            "Who prevented you from coming yesterday?"
        ]
    },
    169: {
        "direction_en": None,
        "lines": [
            "I was on duty... I could not come until tonight... but as soon as I was free, I ran..."
        ]
    },
    170: {
        "direction_en": None,
        "lines": [
            "Did they treat you very badly?"
        ]
    },
    171: {
        "direction_en": None,
        "lines": [
            "No, not too badly."
        ]
    },
    172: {
        "direction_en": None,
        "lines": [
            "I was told that you were demoted..."
        ]
    },
    173: {
        "direction_en": None,
        "lines": [
            "That is true... I am no longer a corporal."
        ]
    },
    174: {
        "direction_en": None,
        "lines": [
            "And why did you not use the file that was in the bread?"
        ]
    },
    175: {
        "direction_en": None,
        "lines": [
            "To saw the bars of my window and escape?... I could not do that: it would have been deserting, and I had only two months of prison to do. To desert, to cross into Portugal, to lose my career... that was not worth the trouble... But the gold coin that was in the bread, I kept it... it will serve to repay the costs of your trial... Here it is..."
        ]
    },
    176: {
        "direction_en": "laughing",
        "lines": [
            "Keep it, big innocent!..."
        ]
    },
    177: {
        "direction_en": None,
        "lines": [
            "I cannot keep that money."
        ]
    },
    178: {
        "direction_en": None,
        "lines": [
            "Very well, we will spend it together... Pastia, bring us some sweets, fruit, manzanilla..."
        ]
    },
    179: {
        "direction_en": "Pastia brings dishes, wine, etc., then exits.",
        "lines": [
            "Here, take some sweets... take some, I tell you..."
        ]
    },
    180: {
        "direction_en": None,
        "lines": [
            "You are very kind, Carmen."
        ]
    },
    181: {
        "direction_en": None,
        "lines": [
            "Eat then!..."
        ]
    },
    182: {
        "direction_en": None,
        "lines": [
            "I am eating, I am eating..."
        ]
    },
    183: {
        "direction_en": None,
        "lines": [
            "Do you know that your officers were here just now?..."
        ]
    },
    184: {
        "direction_en": None,
        "lines": [
            "My officers?..."
        ]
    },
    185: {
        "direction_en": None,
        "lines": [
            "Yes, we were dancing for them."
        ]
    },
    186: {
        "direction_en": None,
        "lines": [
            "You were dancing?..."
        ]
    },
    187: {
        "direction_en": None,
        "lines": [
            "Yes... and they made sweet eyes at us... and your lieutenant said that he would return..."
        ]
    },
    188: {
        "direction_en": None,
        "lines": [
            "Zuniga?..."
        ]
    },
    189: {
        "direction_en": None,
        "lines": [
            "He said that he would return in an hour..."
        ]
    },
    190: {
        "direction_en": "rising",
        "lines": [
            "Carmen!..."
        ]
    },
    191: {
        "direction_en": "laughing",
        "lines": [
            "Are you jealous?"
        ]
    },
    192: {
        "direction_en": None,
        "lines": [
            "Yes, I am jealous!"
        ]
    },
    193: {
        "direction_en": None,
        "lines": [
            "Canary, go! you are jealous because of a dance?... Well then, I am going to dance for you alone, without anyone looking at us... sit there... and look at me."
        ]
    },
    194: {
        "direction_en": "She makes José sit down, takes her castanets and begins to dance.",
        "lines": [
            "I am going to dance in your honor,",
            "and you will see, seigneur soldier,",
            "how I know to accompany myself in dancing!",
            "La la la la la la la la..."
        ]
    },
    195: {
        "direction_en": None,
        "lines": [
            "La la la la la la la la..."
        ]
    },
    196: {
        "direction_en": None,
        "lines": [
            "La la la la la la la la..."
        ]
    },
    197: {
        "direction_en": None,
        "lines": [
            "La la la la la la la la..."
        ]
    },
    198: {
        "direction_en": None,
        "lines": [
            "La la la la la la la la..."
        ]
    },
    199: {
        "direction_en": None,
        "lines": [
            "Wait a little, Carmen... just a moment... stop."
        ]
    },
    200: {
        "direction_en": None,
        "lines": [
            "And why, please?"
        ]
    },
    201: {
        "direction_en": None,
        "lines": [
            "It seems to me, down there...",
            "yes, they are our bugles sounding the retreat:",
            "do you not hear them?"
        ]
    },
    202: {
        "direction_en": "She begins again to hum her air rhythmically to the retreat sounded outside by the bugles; she resumes dancing and José resumes watching her. The retreat approaches... passes under the inn windows... then moves off... Bugle sounds weaken. New effort by José to tear himself away from this contemplation. He takes her arm and forces her again to stop.",
        "lines": [
            "Bravo! however much I tried... it is melancholy",
            "to dance without an orchestra... and long live the music",
            "that falls to us from heaven!"
        ]
    },
    203: {
        "direction_en": "The sound of the retreat ceases all at once.",
        "lines": [
            "You did not understand me... Carmen, it is the retreat...",
            "I must, myself, return to quarters for roll call."
        ]
    },
    204: {
        "direction_en": "looking at José who takes back his cartridge box and refastens his saber belt; With fury, throwing his shako in the air at him:",
        "lines": [
            "To quarters!... for roll call!... I was truly very foolish!",
            "I was bending over backwards and going to expense",
            "to amuse monsieur, I was singing, I was dancing...",
            "I believe, God forgive me,",
            "that a little more, I was loving him...",
            "Ta ra ta ta! it is the bugle sounding!",
            "He departs! he is gone!...",
            "Go then, canary!",
            "Take your shako, your saber, your cartridge box,",
            "and go, my boy, return to your barracks!"
        ]
    },
    205: {
        "direction_en": None,
        "lines": [
            "It is wrong of you, Carmen, to mock me:",
            "I suffer at departing... for never, never woman,",
            "never woman before you",
            "so profoundly had troubled my soul."
        ]
    },
    206: {
        "direction_en": None,
        "lines": [
            "Ta ra ta ta!... 'my God, it is the retreat!...",
            "I am going to be late...' He runs, he loses his head...",
            "And behold his love!"
        ]
    },
    207: {
        "direction_en": None,
        "lines": [
            "Thus you do not believe",
            "in my love?"
        ]
    },
    208: {
        "direction_en": None,
        "lines": [
            "Why no!"
        ]
    },
    209: {
        "direction_en": None,
        "lines": [
            "Well then! you will hear me..."
        ]
    },
    210: {
        "direction_en": None,
        "lines": [
            "I do not want to hear anything...",
            "you are going to make yourself expected."
        ]
    },
    211: {
        "direction_en": "violently; With his left hand, he has abruptly seized Carmen's arm; with his right hand, he reaches under his uniform jacket for the cassia flower that she threw at him in Act One. He shows her this flower.",
        "lines": [
            "You will hear me, Carmen, you will hear me!"
        ]
    },
    212: {
        "direction_en": None,
        "lines": [
            "The flower that you had thrown to me",
            "in my prison had remained with me,",
            "withered and dried, but keeping",
            "its terrible, intoxicating perfume;",
            "and for whole hours,",
            "closing my eyelids over my eyes,",
            "that perfume, I breathed it,",
            "and in the night I saw you...",
            "For you had only to appear,",
            "only to cast a glance upon me",
            "to seize possession of all my being,",
            "and I was a thing of yours.",
            "II",
            "I began to curse you,",
            "to detest you, to say to myself:",
            "'Why must destiny",
            "have placed her there, upon my path?...'",
            "Then I accused myself of blasphemy",
            "and I felt in myself",
            "only one desire, one sole hope,",
            "to see you again, Carmen, to see you again!...",
            "For you had only to appear,",
            "only to cast a glance upon me",
            "to seize possession of all my being,",
            "and I was a thing of yours."
        ]
    },
    213: {
        "direction_en": None,
        "lines": [
            "No! you do not love me, no! For if you loved me,",
            "down there, down there you would follow me."
        ]
    },
    214: {
        "direction_en": None,
        "lines": [
            "Carmen!"
        ]
    },
    215: {
        "direction_en": None,
        "lines": [
            "Down there, down there into the mountain,",
            "upon your horse you would take me,",
            "and, like a brave man, across the countryside,",
            "pillion you would carry me away..."
        ]
    },
    216: {
        "direction_en": None,
        "lines": [
            "Carmen!"
        ]
    },
    217: {
        "direction_en": None,
        "lines": [
            "Down there, down there, if you loved me,",
            "down there, down there you would follow me:",
            "no officer whom you must obey,",
            "and no retreat sounding",
            "to tell the lover that it is time to depart..."
        ]
    },
    218: {
        "direction_en": None,
        "lines": [
            "Carmen!"
        ]
    },
    219: {
        "direction_en": None,
        "lines": [
            "The open sky, the wandering life,",
            "for country the universe, for law your will,",
            "and above all the intoxicating thing,",
            "liberty! liberty!...",
            "Down there, down there, if you loved me,",
            "down there, down there, you would follow me."
        ]
    },
    220: {
        "direction_en": "almost vanquished",
        "lines": [
            "Carmen!"
        ]
    },
    221: {
        "direction_en": None,
        "lines": [
            "Yes, is it not so,",
            "down there, down there you will follow me;",
            "you love me and you will follow me."
        ]
    },
    222: {
        "direction_en": "tearing himself abruptly from Carmen's arms",
        "lines": [
            "No, I will no longer listen to you...",
            "To leave my flag, to desert,",
            "it is shame, it is infamy...",
            "I do not want it!"
        ]
    },
    223: {
        "direction_en": None,
        "lines": [
            "Well then! depart!"
        ]
    },
    224: {
        "direction_en": None,
        "lines": [
            "Carmen, I pray you..."
        ]
    },
    225: {
        "direction_en": None,
        "lines": [
            "I no longer love you, I hate you!"
        ]
    },
    226: {
        "direction_en": None,
        "lines": [
            "Carmen!"
        ]
    },
    227: {
        "direction_en": None,
        "lines": [
            "Farewell!... but farewell forever!"
        ]
    },
    228: {
        "direction_en": "He runs toward the door. At the moment he reaches it, someone knocks: he stops. Silence. Someone knocks again.",
        "lines": [
            "Well then, so be it!... farewell forever."
        ]
    },
    229: {
        "direction_en": "outside",
        "lines": [
            "Hey! Carmen! hey! hey!"
        ]
    },
    230: {
        "direction_en": None,
        "lines": [
            "Who knocks? who comes there?"
        ]
    },
    231: {
        "direction_en": None,
        "lines": [
            "Be silent!..."
        ]
    },
    232: {
        "direction_en": "forcing the door; He enters and sees José. To Carmen; To José:",
        "lines": [
            "I open myself and I enter!...",
            "Ah! fie, pretty one,",
            "the choice is not happy: it is to misally oneself",
            "to take the private when one has the officer.",
            "Come, decamp!"
        ]
    },
    233: {
        "direction_en": None,
        "lines": [
            "No."
        ]
    },
    234: {
        "direction_en": None,
        "lines": [
            "Yes indeed! you will depart."
        ]
    },
    235: {
        "direction_en": None,
        "lines": [
            "I will not depart."
        ]
    },
    236: {
        "direction_en": "striking him",
        "lines": [
            "Rogue!"
        ]
    },
    237: {
        "direction_en": "leaping upon his saber; The lieutenant half-draws.",
        "lines": [
            "Thunder! it is going to rain blows."
        ]
    },
    238: {
        "direction_en": "throwing herself between the two; Calling; Le Dancaïre, Le Remendado and the gypsies appear from all sides. Carmen with a gesture shows the lieutenant to the gypsies; Le Dancaïre and Le Remendado throw themselves upon him, disarming him.",
        "lines": [
            "To the devil with the jealous man!",
            "To me! to me!",
            "My officer, love",
            "plays you at this moment a rather ugly trick;",
            "you arrive very badly and we are forced,",
            "not wishing to be denounced,",
            "to keep you at least for an hour."
        ]
    },
    239: {
        "direction_en": None,
        "lines": [
            "We are going, dear sir, to leave this dwelling;",
            "you will come with us..."
        ]
    },
    240: {
        "direction_en": None,
        "lines": [
            "It is a promenade...",
            "Do you consent?"
        ]
    },
    241: {
        "direction_en": "pistol in hand",
        "lines": [
            "Answer, comrade!",
            "Do you consent?"
        ]
    },
    242: {
        "direction_en": None,
        "lines": [
            "Certainly.",
            "All the more as your argument",
            "is one of those to which one hardly resists...",
            "But beware of yourselves later!"
        ]
    },
    243: {
        "direction_en": "philosophically",
        "lines": [
            "War is war!...",
            "Meanwhile, my officer,",
            "go on ahead without needing to be asked."
        ]
    },
    244: {
        "direction_en": "The officer exits, led away by four gypsies who have pistols in hand.",
        "lines": [
            "Go on ahead without needing to be asked!"
        ]
    },
    245: {
        "direction_en": "to José",
        "lines": [
            "Are you one of ours now?"
        ]
    },
    246: {
        "direction_en": None,
        "lines": [
            "I must indeed be!"
        ]
    },
    247: {
        "direction_en": None,
        "lines": [
            "The word is not gallant,",
            "but what does it matter?... you will get used to it,",
            "when you see",
            "how beautiful it is, the wandering life,",
            "for country the universe, for law your will,",
            "and above all the intoxicating thing,",
            "liberty! liberty!"
        ]
    },
    248: {
        "direction_en": None,
        "lines": [
            "The open sky, the wandering life,",
            "for country the universe, for law his will,",
            "and above all the intoxicating thing,",
            "liberty! liberty!"
        ]
    }
}


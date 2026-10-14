"""
build_act1_translations.py - Generates carmen_translations_act1.py for Bizet's Carmen Act 1.
Ensures exact 1-to-1 cue and line parity with scripts/raw_carmen/carmen_extracted_structure.json.
"""

import json
from pathlib import Path

# Cues 1 to 196 for Act 1
ACT1_TRANSLATIONS = {
    1: {
        "direction_en": None,
        "lines": [
            "On the square",
            "everyone passes,",
            "everyone comes, everyone goes;",
            "strange people are those people there!"
        ]
    },
    2: {
        "direction_en": None,
        "lines": [
            "At the door of the guardhouse,",
            "to kill time,",
            "one smokes, one gossips, one watches",
            "the passers-by pass."
        ]
    },
    3: {
        "direction_en": "For some minutes, Micaëla has entered: blue skirt, braids falling upon her shoulders; hesitant, embarrassed, she looks at the soldiers, advances, draws back.",
        "lines": [
            "On the square",
            "etc."
        ]
    },
    4: {
        "direction_en": "to the soldiers",
        "lines": [
            "Look then at that little girl",
            "who seems to want to speak to us...",
            "See, she turns, she hesitates..."
        ]
    },
    5: {
        "direction_en": None,
        "lines": [
            "To her help one must go."
        ]
    },
    6: {
        "direction_en": "to Micaëla",
        "lines": [
            "What are you looking for, pretty one?"
        ]
    },
    7: {
        "direction_en": None,
        "lines": [
            "I am looking for a corporal."
        ]
    },
    8: {
        "direction_en": None,
        "lines": [
            "I am here,",
            "behold!"
        ]
    },
    9: {
        "direction_en": None,
        "lines": [
            "My corporal is named",
            "Don José... do you know him?"
        ]
    },
    10: {
        "direction_en": None,
        "lines": [
            "José? We all know him."
        ]
    },
    11: {
        "direction_en": None,
        "lines": [
            "Is he with you, I pray you?"
        ]
    },
    12: {
        "direction_en": None,
        "lines": [
            "He is not a corporal in our company."
        ]
    },
    13: {
        "direction_en": "disappointed",
        "lines": [
            "Then, he is not here."
        ]
    },
    14: {
        "direction_en": None,
        "lines": [
            "No, my charming one, he is not here;",
            "but in a little while he will be here...",
            "He will be here, when the guard mounting",
            "will replace the guard dismounting."
        ]
    },
    15: {
        "direction_en": None,
        "lines": [
            "He will be here when the guard mounting",
            "will replace the guard dismounting."
        ]
    },
    16: {
        "direction_en": None,
        "lines": [
            "But while waiting for him to come,",
            "would you like, pretty child,",
            "would you take the trouble",
            "to enter our quarters for a moment?"
        ]
    },
    17: {
        "direction_en": None,
        "lines": [
            "In your quarters!"
        ]
    },
    18: {
        "direction_en": None,
        "lines": [
            "In our quarters!"
        ]
    },
    19: {
        "direction_en": None,
        "lines": [
            "No indeed, no indeed!",
            "Many thanks, soldier gentlemen!"
        ]
    },
    20: {
        "direction_en": None,
        "lines": [
            "Enter without fear, darling:",
            "I promise you that we will have",
            "for your dear person",
            "all the regards that will be fitting."
        ]
    },
    21: {
        "direction_en": "She repeats laughing the phrase of the corporal.",
        "lines": [
            "I do not doubt it; however",
            "I will return, it is more prudent.",
            "I will return when the guard mounting",
            "will replace the guard dismounting."
        ]
    },
    22: {
        "direction_en": "surrounding Micaëla",
        "lines": [
            "You will stay."
        ]
    },
    23: {
        "direction_en": "trying to disengage herself",
        "lines": [
            "No indeed! no indeed!"
        ]
    },
    24: {
        "direction_en": None,
        "lines": [
            "You will stay!"
        ]
    },
    25: {
        "direction_en": "She slips away and escapes running.",
        "lines": [
            "No indeed! no indeed!",
            "Goodbye, soldier gentlemen."
        ]
    },
    26: {
        "direction_en": None,
        "lines": [
            "The bird flies away,",
            "one consoles oneself for it...",
            "Let us resume our pastime,",
            "and watch the people pass."
        ]
    },
    27: {
        "direction_en": "The movement of passers-by, which had ceased during the dialogue with Micaëla, resumes all the more: among the people going and coming, an old gentleman giving his arm to a young lady... The old gentleman would like to continue his walk, but the young lady does everything she can to keep him on the square. She appears moved, anxious; she looks right, left: she is waiting for someone, and that someone does not come. This pantomime must match exactly with the following stanza:",
        "lines": [
            "On the square",
            "everyone passes,",
            "etc."
        ]
    },
    28: {
        "direction_en": "At this moment, a young man rapidly enters the square; The second stanza faithfully follows the scene mimed by the three characters: the young man approaches the old gentleman and young lady, bows, exchanges a few words in a low voice, etc.",
        "lines": [
            "Attention! hush! let us be silent!",
            "Here comes an old husband;",
            "suspicious eye, jealous countenance,",
            "he holds on his arm his young wife;",
            "the lover, without doubt, is not far;",
            "he is going to come out from some corner...",
            "Ha! ha! ha! ha!",
            "There he is!",
            "Let us see how that will turn out..."
        ]
    },
    29: {
        "direction_en": "Imitating the eager bow of the young man; Taking on the sour air of the old husband; Resuming the air of the young man; Then the air of the old husband; Imitating the smiling looks of the lady; The young man, at this moment, draws from his pocket a note that he shows to the lady; During the third stanza, the husband, wife and gallant all three make, very slowly, a little turn on the square, the young man seeking to deliver his love note to the lady; then the young man with one hand shows something in the air to the old gentleman, and with the other hand passes the note to the young lady.",
        "lines": [
            "II",
            "'To find you here, what happiness!...' ",
            "'I am very much your servant...'",
            "He bows, he speaks with grace...",
            "The old husband makes a grimace...",
            "But, with a very encouraging air,",
            "the lady welcomes the gallant.",
            "Ha! ha! ha! ha!",
            "There he is at it!",
            "Let us see how that will turn out..."
        ]
    },
    30: {
        "direction_en": None,
        "lines": [
            "III",
            "They take together a few steps;",
            "our lover, raising his arm,",
            "shows the husband something,",
            "and the husband, ever gloomy,",
            "looks up in the air... The trick is done,",
            "for the lady has taken the note.",
            "Ha! ha! ha! ha!",
            "And behold!",
            "One sees how that will turn out!"
        ]
    },
    31: {
        "direction_en": "laughing; A military march is heard in the distance, bugles and fifes: it is the guard mounting arriving. The old gentleman and young man exchange a cordial handshake; respectful bow of the young man to the lady. An officer comes out of the guardhouse, followed by soldiers who go take their lances and line up on the left. Passers-by on the right form a group to watch the parade. The military march draws nearer and nearer... The guard mounting finally debouches, coming from the left, at the back, and crosses the bridge: two bugles and two fifes first; then a band of little urchins striving to take big strides to march in step with the dragoons; as small as possible, these children; behind the children, Lieutenant Zuniga and Corporal Don José, then the dragoons with their lances.",
        "lines": [
            "Ha! ha! ha! ha!",
            "One sees how that will turn out!"
        ]
    },
    32: {
        "direction_en": None,
        "lines": [
            "With the guard mounting",
            "we arrive, here we are!",
            "Sound, piercing trumpet,",
            "ta ra ta ta, ta ra ta ta.",
            "We march with head held high,",
            "like little soldiers,",
            "marking step, without a mistake,",
            "one... two... mar... king the step.",
            "Chest out, shoulders back,",
            "arms well along the body,",
            "with the guard mounting",
            "we arrive, here we are!",
            "Sound, piercing trumpet,",
            "ta ra ta ta, ta ra ta ta."
        ]
    },
    33: {
        "direction_en": "The guard relief arrives in front of the guardhouse. The two corporals, Don José and Moralès, salute each other with the sword and speak in a low voice. The relief sentries go relieve the post sentries. The dismounting dragoons take their place to depart.",
        "lines": [
            "One young girl, with braids,",
            "asked if you were not here...",
            "Blue skirt and ribbons..."
        ]
    },
    34: {
        "direction_en": None,
        "lines": [
            "It must be Micaëla."
        ]
    },
    35: {
        "direction_en": None,
        "lines": [
            "She did not say her name."
        ]
    },
    36: {
        "direction_en": "The relief of sentries has just been carried out. The bugles and fifes sound. The guard dismounting passes in front of the guard mounting. The children, behind the dismounting guard, resume their march.",
        "lines": [
            "And the guard dismounting",
            "now is clearing off.",
            "Sound, piercing trumpet,",
            "ta ra ta ta, ta ra ta ta.",
            "We march with head held high,",
            "like little soldiers,",
            "marking step, without a mistake,",
            "one... two... marking the step.",
            "Chest out, shoulders back,",
            "arms well along the body,",
            "with the guard mounting",
            "we arrive, here we are!",
            "Sound, piercing trumpet,",
            "ta ra ta ta, ta ra ta ta."
        ]
    },
    37: {
        "direction_en": "Soldiers, children, and crowd exit over the bridge. Lieutenant Zuniga, during this time, without speaking, inspects the dragoons. When the children and crowd have disappeared, the soldiers go deposit their lances in the rack and enter the guardhouse. Don José and the Lieutenant remain alone.",
        "lines": [
            "Ta ra ta ta, ta ra ta ta !"
        ]
    },
    38: {
        "direction_en": None,
        "lines": [
            "Tell me, corporal..."
        ]
    },
    39: {
        "direction_en": "rising",
        "lines": [
            "My lieutenant?..."
        ]
    },
    40: {
        "direction_en": None,
        "lines": [
            "I have been in the regiment only two days and never had I come to Seville... What is that large building?"
        ]
    },
    41: {
        "direction_en": None,
        "lines": [
            "It is the tobacco factory."
        ]
    },
    42: {
        "direction_en": None,
        "lines": [
            "Are they women who work there?..."
        ]
    },
    43: {
        "direction_en": None,
        "lines": [
            "Yes, my lieutenant. They are not there now; in a little while, after their dinner, they are going to return... And I answer to you that then there will be a crowd to see them pass!"
        ]
    },
    44: {
        "direction_en": None,
        "lines": [
            "Are they many?"
        ]
    },
    45: {
        "direction_en": None,
        "lines": [
            "Upon my word, they are quite four or five hundred who roll cigars in a large hall..."
        ]
    },
    46: {
        "direction_en": None,
        "lines": [
            "That must be curious."
        ]
    },
    47: {
        "direction_en": None,
        "lines": [
            "Yes, but men cannot enter that hall without permission..."
        ]
    },
    48: {
        "direction_en": None,
        "lines": [
            "Ah!"
        ]
    },
    49: {
        "direction_en": None,
        "lines": [
            "Because, when it is hot, these workers make themselves comfortable, especially the young ones."
        ]
    },
    50: {
        "direction_en": None,
        "lines": [
            "Are there young ones?"
        ]
    },
    51: {
        "direction_en": None,
        "lines": [
            "Why yes, my lieutenant!"
        ]
    },
    52: {
        "direction_en": None,
        "lines": [
            "And pretty ones?"
        ]
    },
    53: {
        "direction_en": "laughing",
        "lines": [
            "I suppose so... But to tell you the truth, and although I have been on guard here several times already, I am not quite sure, for I have never looked at them much."
        ]
    },
    54: {
        "direction_en": None,
        "lines": [
            "Come now!..."
        ]
    },
    55: {
        "direction_en": None,
        "lines": [
            "What would you have?... these Andalusian women scare me. I am not accustomed to their ways... always mocking... never a word of reason..."
        ]
    },
    56: {
        "direction_en": None,
        "lines": [
            "And then we have a weakness for blue skirts and braids falling upon the shoulders..."
        ]
    },
    57: {
        "direction_en": "laughing",
        "lines": [
            "Ah! my lieutenant heard what Moralès was saying to me?..."
        ]
    },
    58: {
        "direction_en": None,
        "lines": [
            "Yes."
        ]
    },
    59: {
        "direction_en": None,
        "lines": [
            "I will not deny it... the blue skirt, the braids... it is the costume of Navarre... that reminds me of home..."
        ]
    },
    60: {
        "direction_en": None,
        "lines": [
            "You are Navarrese?"
        ]
    },
    61: {
        "direction_en": None,
        "lines": [
            "And Old Christian. Don José Lizzarabengoa... that is my name... They wanted me to enter the Church, and had me study. But I profited little: I loved playing pelota too much... One day when I had won, an Alava lad picked a quarrel with me; I had the advantage again... but that obliged me to leave the country. I became a soldier!... I no longer had my father; my mother followed me and came to settle ten leagues from Seville... with little Micaëla... She is an orphan girl whom my mother took in, and who did not want to be separated from her..."
        ]
    },
    62: {
        "direction_en": None,
        "lines": [
            "And what age is she, little Micaëla?"
        ]
    },
    63: {
        "direction_en": None,
        "lines": [
            "Seventeen years..."
        ]
    },
    64: {
        "direction_en": "laughing; The factory bell is heard.",
        "lines": [
            "You should have said that right away!... I understand now why you cannot tell me if the workers of the factory are pretty or ugly..."
        ]
    },
    65: {
        "direction_en": None,
        "lines": [
            "Here is the bell ringing, my lieutenant, and you will be able to judge for yourself... As for me, I am going to make a chain to fasten my priming wire."
        ]
    },
    66: {
        "direction_en": "At this moment, the cigarette girls appear, cigarettes in mouth. They pass under the bridge and descend slowly onto the stage.",
        "lines": [
            "The bell has rung; we, for the workers",
            "we come here to watch for the return;",
            "and we will follow you, brunette cigarette girls,",
            "murmuring words of love to you."
        ]
    },
    67: {
        "direction_en": None,
        "lines": [
            "Look at them... impudent gazes,",
            "coquettish air,",
            "all smoking with the tips of their teeth",
            "the cigarette!"
        ]
    },
    68: {
        "direction_en": None,
        "lines": [
            "In the air we follow with our eyes",
            "the smoke,",
            "which toward the skies",
            "rises, rises perfumed;",
            "in the air we follow with our eyes",
            "the smoke,",
            "the smoke,",
            "the smoke,",
            "the smoke...",
            "That goes softly",
            "to the head;",
            "that puts gently",
            "the soul in festive mood...",
            "In the air we follow with our eyes",
            "the smoke,",
            "etc.",
            "The sweet speech of lovers",
            "is smoke;",
            "their transports and their oaths,",
            "are smoke...",
            "In the air we follow with our eyes",
            "the smoke,",
            "etc."
        ]
    },
    69: {
        "direction_en": "to the cigarette girls",
        "lines": [
            "Without playing the cruel ones,",
            "listen to us, beauties,",
            "you whom we adore,",
            "whom we idolize!"
        ]
    },
    70: {
        "direction_en": "laughing",
        "lines": [
            "The sweet speech of lovers",
            "is smoke;",
            "in the air we follow with our eyes",
            "the smoke,",
            "etc."
        ]
    },
    71: {
        "direction_en": None,
        "lines": [
            "We do not see the Carmencita..."
        ]
    },
    72: {
        "direction_en": "Carmen enters. Absolutely the costume and entrance indicated by Mérimée: she has a bunch of cassia in her bodice and a cassia flower in the corner of her mouth. Three or four young men enter with Carmen; they follow her, surround her, speak to her; she simpers and chatters with them. José raises his head; he looks at Carmen, then resumes working quietly on his chain.",
        "lines": [
            "There she is!",
            "There is the Carmencita!"
        ]
    },
    73: {
        "direction_en": "having entered with Carmen",
        "lines": [
            "Carmen, upon your footsteps we all press;",
            "Carmen, be kind: at least answer us",
            "and tell us what day you will love us."
        ]
    },
    74: {
        "direction_en": None,
        "lines": [
            "When will I love you?... upon my word, I do not know...",
            "Perhaps never, perhaps tomorrow;",
            "but not today, that is certain!",
            "Love is a rebellious bird",
            "that no one can tame,",
            "and it is quite in vain that one calls it,",
            "if it suits it to refuse.",
            "Nothing avails, threat or prayer;",
            "the one speaks well, the other is silent,",
            "and it is the other that I prefer;",
            "he has said nothing, but he pleases me.",
            "Love is a child of Bohemia,",
            "it has never, never known law;",
            "if you do not love me, I love you;",
            "if I love you, take guard to yourself!...",
            "The bird that you thought to surprise",
            "beat its wing and flew away...",
            "Love is far, you may wait for it;",
            "you no longer wait for it, it is there...",
            "All around you, quickly, quickly,",
            "it comes, goes away, then it returns...",
            "You think to hold it, it avoids you;",
            "you think to avoid it, it holds you!",
            "Love is a child of Bohemia,",
            "it has never known law;",
            "if you do not love me, I love you;",
            "if I love you, take guard to yourself!"
        ]
    },
    75: {
        "direction_en": "Moment of silence. The young men surround Carmen; she looks at them one after another, steps out of the circle they form around her and goes straight to José, who is still busy with his chain.",
        "lines": [
            "Carmen, upon your footsteps we all press;",
            "Carmen, be kind; at least answer us."
        ]
    },
    76: {
        "direction_en": None,
        "lines": [
            "Hey! friend, what are you doing there?"
        ]
    },
    77: {
        "direction_en": None,
        "lines": [
            "I am making a chain of brass wire, a chain to fasten my priming wire."
        ]
    },
    78: {
        "direction_en": "laughing; She plucks from her bodice the cassia flower and throws it at Don José; he rises abruptly. The cassia flower has fallen at his feet. General burst of laughter. The factory bell rings a second time; exit of the workers and young men on the reprise of; Carmen exits first running and enters the factory. The young men exit right and left. The lieutenant, who during this scene was chatting with two or three workers, leaves them and re-enters the guardhouse after the soldiers have re-entered it.",
        "lines": [
            "Your priming wire, really! your priming wire... pin-maker of my soul!...",
            "Love is a child of Bohemia,",
            "etc."
        ]
    },
    79: {
        "direction_en": "alone; Smiling; He looks at the cassia flower which is on the ground at his feet; he picks it up; He breathes the perfume of the flower; Micaëla enters.",
        "lines": [
            "What does that mean, those ways?... What brazenness!...",
            "All that, because I was not paying attention to her!... So, according to the habit of women and cats, who do not come when one calls them and who come when one does not call them, she came...",
            "With what skill she threw it at me, that flower!... there, right between the two eyes!... it struck me like a bullet hitting me...",
            "How potent it is!... Certainly if there are sorceresses, that girl there is one."
        ]
    },
    80: {
        "direction_en": None,
        "lines": [
            "Mister corporal?"
        ]
    },
    81: {
        "direction_en": "hastily hiding the cassia flower",
        "lines": [
            "What?... what is it?... Micaëla!... it is you!..."
        ]
    },
    82: {
        "direction_en": None,
        "lines": [
            "It is I... It is your mother who sends me..."
        ]
    },
    83: {
        "direction_en": None,
        "lines": [
            "My mother!..."
        ]
    },
    84: {
        "direction_en": None,
        "lines": [
            "Speak to me of my mother!"
        ]
    },
    85: {
        "direction_en": None,
        "lines": [
            "I bring you from her",
            "a message, corporal."
        ]
    },
    86: {
        "direction_en": None,
        "lines": [
            "From my mother?"
        ]
    },
    87: {
        "direction_en": None,
        "lines": [
            "Yes, from your mother...",
            "I bring a letter."
        ]
    },
    88: {
        "direction_en": "baisant la lettre",
        "lines": [
            "A letter!"
        ]
    },
    89: {
        "direction_en": None,
        "lines": [
            "And then a little money...",
            "to add to your pay...",
            "And then..."
        ]
    },
    90: {
        "direction_en": None,
        "lines": [
            "And then?"
        ]
    },
    91: {
        "direction_en": None,
        "lines": [
            "And then?... Truly, I dare not...",
            "And then... yet another thing,",
            "which is worth more than money, and which, for a good son,",
            "will have without doubt more value."
        ]
    },
    92: {
        "direction_en": None,
        "lines": [
            "That other thing, what is it?",
            "Speak then!"
        ]
    },
    93: {
        "direction_en": None,
        "lines": [
            "Yes, I will speak;",
            "what was given to me, I will give to you...",
            "Your mother with me was coming out of chapel,",
            "and it was then that in kissing me:",
            "'You are going,' she said to me, 'to go to the city;",
            "the road is not long; once in Seville,",
            "you will look for my son, my José, my child...",
            "And you will tell him that his mother",
            "dreams, night and day, of the absent one...",
            "That she regrets and that she hopes,",
            "that she forgives and that she waits...",
            "All that, is it not so? darling,",
            "from me you will tell him,",
            "and this kiss that I give you,",
            "from me you will return to him.'"
        ]
    },
    94: {
        "direction_en": "very moved",
        "lines": [
            "A kiss from my mother?..."
        ]
    },
    95: {
        "direction_en": "Micaëla rises a little on tiptoe and gives José a frank, maternal kiss. José, very moved, lets her do so. He looks her straight in the eyes. A moment of silence.",
        "lines": [
            "A kiss for her son,",
            "José, I return it to you, as I promised."
        ]
    },
    96: {
        "direction_en": "continuing to look at Micaëla",
        "lines": [
            "My mother, I see her... I see again my village...",
            "Memories of former days, memories of home!",
            "You fill my heart with strength and courage,",
            "O cherished memories!",
            "Memories of former days! memories of home!"
        ]
    },
    97: {
        "direction_en": None,
        "lines": [
            "My mother, I see her, etc."
        ]
    },
    98: {
        "direction_en": None,
        "lines": [
            "His mother, he sees her again, etc."
        ]
    },
    99: {
        "direction_en": "eyes fixed on the factory",
        "lines": [
            "Who knows what demon I was about to be the prey of!...",
            "Even from afar, my mother defends me,",
            "and this kiss that she sends me",
            "wards off peril and saves her child."
        ]
    },
    100: {
        "direction_en": None,
        "lines": [
            "What demon? what peril? I do not understand well...",
            "What does that mean?"
        ]
    },
    101: {
        "direction_en": None,
        "lines": [
            "Nothing! nothing!",
            "Let us speak of you, the messenger;",
            "you are going to return home..."
        ]
    },
    102: {
        "direction_en": None,
        "lines": [
            "This very evening, and tomorrow I will see your mother."
        ]
    },
    103: {
        "direction_en": "He kisses her.",
        "lines": [
            "Well then! you will tell her that José, that her son...",
            "that her son loves and venerates her,",
            "and that he conducts himself today",
            "as a good fellow so that his mother",
            "down there may be pleased with him.",
            "All that, is it not so? darling,",
            "from me, you will tell her;",
            "and this kiss that I give you,",
            "from me you will return to her."
        ]
    },
    104: {
        "direction_en": None,
        "lines": [
            "Yes, I promise it to you... from her son,",
            "José, I will return it, as I promised."
        ]
    },
    105: {
        "direction_en": None,
        "lines": [
            "My mother, I see her, etc..."
        ]
    },
    106: {
        "direction_en": None,
        "lines": [
            "His mother, he sees her again, etc..."
        ]
    },
    107: {
        "direction_en": None,
        "lines": [
            "Wait a little, now... I am going to read her letter..."
        ]
    },
    108: {
        "direction_en": None,
        "lines": [
            "I will wait, corporal, I will wait..."
        ]
    },
    109: {
        "direction_en": "kissing the letter before beginning to read; Reading:",
        "lines": [
            "Ah!...",
            "'Continue to conduct yourself well, my child!... You have been promised promotion to sergeant: perhaps then you will be able to leave the service, obtain a small post and return near me. I am beginning to grow very old. You would return near me and you would marry... We would not have, I think, great trouble finding you a wife, and I know well, as for me, whom I would advise you to choose: it is quite specifically she who carries my letter to you... There is no one wiser nor gentler...'"
        ]
    },
    110: {
        "direction_en": "interrupting him",
        "lines": [
            "It is better that I not be here!..."
        ]
    },
    111: {
        "direction_en": None,
        "lines": [
            "Why then?..."
        ]
    },
    112: {
        "direction_en": "troubled",
        "lines": [
            "I have just remembered that your mother charged me with some little purchases... I am going to see to them right away."
        ]
    },
    113: {
        "direction_en": None,
        "lines": [
            "Wait a little, I am finished..."
        ]
    },
    114: {
        "direction_en": None,
        "lines": [
            "You will finish when I am no longer here..."
        ]
    },
    115: {
        "direction_en": None,
        "lines": [
            "But the answer?..."
        ]
    },
    116: {
        "direction_en": None,
        "lines": [
            "I will come back to take it before my departure and I will carry it to your mother... Farewell!"
        ]
    },
    117: {
        "direction_en": None,
        "lines": [
            "Micaëla!"
        ]
    },
    118: {
        "direction_en": "She exits.",
        "lines": [
            "No, no... I will return, I prefer that... I will return, I will return..."
        ]
    },
    119: {
        "direction_en": "reading; At the moment he is about to pluck the flowers from his jacket, great clamor inside the factory. The lieutenant enters followed by soldiers.",
        "lines": [
            "'There is no one wiser nor gentler... there is no one above all who loves you more... and if you wished...' Yes, my mother, yes, I will do what you desire... I will marry Micaëla... and as for that gypsy, with her flowers that bewitch..."
        ]
    },
    120: {
        "direction_en": "The workers rush out quickly and in disorder.",
        "lines": [
            "Well! well! what is happening?..."
        ]
    },
    121: {
        "direction_en": None,
        "lines": [
            "Help! do you not hear?",
            "Help! soldier gentlemen!"
        ]
    },
    122: {
        "direction_en": None,
        "lines": [
            "It is the Carmencita!"
        ]
    },
    123: {
        "direction_en": None,
        "lines": [
            "No, no, it is not she!"
        ]
    },
    124: {
        "direction_en": None,
        "lines": [
            "It is she!"
        ]
    },
    125: {
        "direction_en": None,
        "lines": [
            "Not at all!"
        ]
    },
    126: {
        "direction_en": None,
        "lines": [
            "Yes indeed! in the quarrel",
            "she struck the first blows."
        ]
    },
    127: {
        "direction_en": "surrounding the lieutenant",
        "lines": [
            "Do not listen to them, sir, listen to us!"
        ]
    },
    128: {
        "direction_en": "pulling the officer to one side",
        "lines": [
            "Manuelita was saying",
            "and repeating aloud,",
            "that she would buy without fail",
            "a donkey that pleased her..."
        ]
    },
    129: {
        "direction_en": None,
        "lines": [
            "Then the Carmencita,",
            "mocking as usual,",
            "said: 'A donkey, what for?",
            "A broom will suffice you!'"
        ]
    },
    130: {
        "direction_en": None,
        "lines": [
            "Manuelita retorted",
            "and said to her comrade:",
            "'For a certain promenade,",
            "my donkey will serve you...'"
        ]
    },
    131: {
        "direction_en": None,
        "lines": [
            "'And, that day, you will be able",
            "with good right to play the proud woman;",
            "two lackeys will follow behind,",
            "whisking flies off you with all their might...'"
        ]
    },
    132: {
        "direction_en": None,
        "lines": [
            "Thereupon, both of them",
            "set upon each other's hair!"
        ]
    },
    133: {
        "direction_en": "To José; José takes two men with him and enters the factory. Meanwhile, the women press together, quarreling among themselves.",
        "lines": [
            "To the devil with all this chattering!",
            "Take, José, two men with you",
            "and see in there who causes this uproar."
        ]
    },
    134: {
        "direction_en": None,
        "lines": [
            "It is the Carmencita!"
        ]
    },
    135: {
        "direction_en": None,
        "lines": [
            "No, no, listen to us!"
        ]
    },
    136: {
        "direction_en": "deafened",
        "lines": [
            "Hold! hold!",
            "Move all those women away from me."
        ]
    },
    137: {
        "direction_en": None,
        "lines": [
            "Listen to us! listen to us!"
        ]
    },
    138: {
        "direction_en": "push back the women and part them",
        "lines": [
            "Gently! gently!",
            "Move away and be silent!"
        ]
    },
    139: {
        "direction_en": None,
        "lines": [
            "Listen to us! listen to us!"
        ]
    },
    140: {
        "direction_en": "The cigarette girls slip between the hands of the soldiers who seek to keep them away. They rush upon the lieutenant and resume the chorus.",
        "lines": [
            "Gently!"
        ]
    },
    141: {
        "direction_en": None,
        "lines": [
            "Manuelita was saying...",
            "etc."
        ]
    },
    142: {
        "direction_en": None,
        "lines": [
            "Then the Carmencita...",
            "etc."
        ]
    },
    143: {
        "direction_en": "pushing back the women once again; The soldiers finally succeed in pushing back the cigarette girls; they are kept at a distance, around the square, by a cordon. Carmen appears at the door of the factory, brought out by José, followed by two soldiers.",
        "lines": [
            "Gently! gently!",
            "Move away and be silent!"
        ]
    },
    144: {
        "direction_en": None,
        "lines": [
            "Come, corporal... Now that we have a little silence... what is it that you found in there?"
        ]
    },
    145: {
        "direction_en": None,
        "lines": [
            "First of all there were three hundred women who were screaming and gesturing... On one side was a woman with her face bleeding and slashed with a knife in the form of a Saint Andrew's cross... and on the other was this one..."
        ]
    },
    146: {
        "direction_en": "indicating Carmen",
        "lines": [
            "This one?"
        ]
    },
    147: {
        "direction_en": None,
        "lines": [
            "Yes, this one. The other claims that this one slashed her face."
        ]
    },
    148: {
        "direction_en": "to Carmen",
        "lines": [
            "You hear, señorita?... What do you have to answer to that?"
        ]
    },
    149: {
        "direction_en": "looking at the officer",
        "lines": [
            "Tra la la la la la la la,",
            "cut me, burn me,",
            "I will tell you nothing;",
            "tra la la la la la la la,",
            "I brave everything, fire, iron and heaven itself!"
        ]
    },
    150: {
        "direction_en": None,
        "lines": [
            "It is not songs that I am asking you for, it is answers..."
        ]
    },
    151: {
        "direction_en": None,
        "lines": [
            "Tra la la la la la la la,",
            "my secret, I keep it and keep it well;",
            "tra la la la la la la la,",
            "I love another and die saying that I love him."
        ]
    },
    152: {
        "direction_en": None,
        "lines": [
            "Ah! you take it in that tone?..."
        ]
    },
    153: {
        "direction_en": None,
        "lines": [
            "You are not going to sing for long, I answer to you for it... A cord, someone, to tie this pretty singer's hands..."
        ]
    },
    154: {
        "direction_en": None,
        "lines": [
            "Yes, yes, it is she!... she struck the blows!..."
        ]
    },
    155: {
        "direction_en": "trying to rush upon the woman",
        "lines": [
            "Wretch!..."
        ]
    },
    156: {
        "direction_en": "holding Carmen back",
        "lines": [
            "Hold! hold!..."
        ]
    },
    157: {
        "direction_en": "looking at José; Singing:",
        "lines": [
            "Cut me, burn me, etc."
        ]
    },
    158: {
        "direction_en": None,
        "lines": [
            "Decidedly, you have a light hand!..."
        ]
    },
    159: {
        "direction_en": "singing",
        "lines": [
            "Tra la la la, etc."
        ]
    },
    160: {
        "direction_en": None,
        "lines": [
            "It is a pity, truly, for she is pretty... But that will not prevent you from making a little trip to prison."
        ]
    },
    161: {
        "direction_en": "singing",
        "lines": [
            "My secret, I keep it, and I keep it well;",
            "I love another and die saying that I love him."
        ]
    },
    162: {
        "direction_en": "To José; At this moment, five or six women on the right succeed in forcing the sentries' cordon and rush onto the stage crying: 'Yes, yes, it is she!...' One of these women is near Carmen: Carmen raises her hand and tries to throw herself upon the woman; José stops Carmen. The soldiers move the women away and push them this time completely off stage. A few sentries remain in sight, guarding the approaches to the square. Addressing Carmen; To the soldiers; Moment of silence during which Carmen resumes humming in the most impertinent fashion while looking at the officer.",
        "lines": [
            "Ah! ah! we take it in that tone?...",
            "What is sure, is it not? is that there were knife strokes and that it is she who gave them...",
            "Eh! eh! you have a light hand decidedly.",
            "Find me a cord."
        ]
    },
    163: {
        "direction_en": "bringing a cord",
        "lines": [
            "Here, my lieutenant."
        ]
    },
    164: {
        "direction_en": "to José; Carmen without the least resistance smilingly holds out both hands to José; Carmen's hands are tied; she is made to sit on a stool before the guardhouse. She remains there motionless, eyes on the ground; To José:",
        "lines": [
            "Take it... and tie me these two pretty hands.",
            "It is a pity, truly, for she is charming... But charming though you may be, you will nonetheless take a turn to the prison. You will be able to sing your gypsy songs there; the turnkey will tell you what he thinks of them...",
            "I am going to write the order.",
            "It is you who will conduct her..."
        ]
    },
    165: {
        "direction_en": None,
        "lines": [
            "Where will you conduct me?"
        ]
    },
    166: {
        "direction_en": None,
        "lines": [
            "To the prison, my poor child!..."
        ]
    },
    167: {
        "direction_en": "José does not answer, moves away and returns, always under Carmen's gaze.",
        "lines": [
            "Alas! what will become of me? Lord officer, have pity on me... You are so kind!...",
            "This cord... how you have tightened it, this cord!... My wrists are crushed."
        ]
    },
    168: {
        "direction_en": "approaching Carmen; He loosens the cord.",
        "lines": [
            "If it hurts you, I can loosen it... The lieutenant told me to tie your hands... he did not tell me..."
        ]
    },
    169: {
        "direction_en": "low",
        "lines": [
            "Let me escape... I will give you a piece of the bar lachi, a little stone that will make you loved by all women."
        ]
    },
    170: {
        "direction_en": "moving away; Silence.",
        "lines": [
            "We are not here to talk nonsense... You must go to prison. That is the order, and there is no remedy."
        ]
    },
    171: {
        "direction_en": None,
        "lines": [
            "Just now you said: 'Faith of a Navarrese!...' you are from the Basque Provinces?..."
        ]
    },
    172: {
        "direction_en": None,
        "lines": [
            "I am from Elizondo..."
        ]
    },
    173: {
        "direction_en": None,
        "lines": [
            "And I from Etchalar..."
        ]
    },
    174: {
        "direction_en": "stopping",
        "lines": [
            "From Etchalar!... it is four hours from Elizondo, Etchalar."
        ]
    },
    175: {
        "direction_en": None,
        "lines": [
            "Yes, it is there that I was born... I was taken by gypsies to Seville. I was working at the factory to earn enough to return to Navarre, near my poor mother who has only me for support... I was insulted because I am not of this land of swindlers, of sellers of rotten oranges, and those hussies all banded together against me because I told them that all their Seville Jaques with their knives would not scare a lad from our home with his blue beret and his makila... Comrade, my friend, will you do nothing for a fellow countrywoman?"
        ]
    },
    176: {
        "direction_en": None,
        "lines": [
            "You are Navarrese? you!..."
        ]
    },
    177: {
        "direction_en": None,
        "lines": [
            "Doubtless!..."
        ]
    },
    178: {
        "direction_en": None,
        "lines": [
            "Come now!... there is not a word of truth... your eyes alone, your mouth, your complexion... Everything about you says gypsy..."
        ]
    },
    179: {
        "direction_en": None,
        "lines": [
            "Gypsy, you think?"
        ]
    },
    180: {
        "direction_en": None,
        "lines": [
            "I am sure of it..."
        ]
    },
    181: {
        "direction_en": None,
        "lines": [
            "In fact, I am quite good to give myself the trouble of lying... Yes, I am a gypsy, but you will nonetheless do what I ask of you... You will do it because you love me..."
        ]
    },
    182: {
        "direction_en": None,
        "lines": [
            "I!"
        ]
    },
    183: {
        "direction_en": None,
        "lines": [
            "Eh! yes, you love me... do not tell me no, I know about it!... your looks, the way you speak to me... And that flower you kept... oh! you may throw it away now... that will do nothing: it has stayed enough time upon your heart; the charm has worked..."
        ]
    },
    184: {
        "direction_en": "with anger",
        "lines": [
            "Speak to me no more, do you hear! I forbid you to speak to me..."
        ]
    },
    185: {
        "direction_en": "She looks at Don José who steps back.",
        "lines": [
            "Very well, lord officer, very well... You forbid me to speak, I will speak no more..."
        ]
    },
    186: {
        "direction_en": None,
        "lines": [
            "Near the ramparts of Seville,",
            "at the tavern of my friend Lillas Pastia,",
            "I will go dance the seguidilla",
            "and drink manzanilla!...",
            "Yes, but all alone one is bored,",
            "and true pleasures are for two;",
            "so to keep me company,",
            "I will take my lover along...",
            "My lover! he has gone to the devil;",
            "I put him out the door yesterday...",
            "My poor heart, very consolable,",
            "my heart is free as the air...",
            "I have gallants by the dozen,",
            "but they are not to my liking;",
            "here is the end of the week:",
            "whoever wishes to love me, I will love him.",
            "Whoever wants my soul it is there to take...",
            "You arrive at the good moment:",
            "I have hardly time to wait,",
            "for with my new lover...",
            "Near the gate of Seville,",
            "at the tavern of my friend Lillas Pastia,",
            "I will go dance the seguidilla",
            "and drink manzanilla."
        ]
    },
    187: {
        "direction_en": None,
        "lines": [
            "Be silent!... I had told you not to speak to me..."
        ]
    },
    188: {
        "direction_en": None,
        "lines": [
            "I am not speaking to you... I am singing for myself,",
            "and I am thinking... it is not forbidden to think...",
            "I am thinking of a certain officer,",
            "of a certain officer who loves me,",
            "and whom, one of these days, I might well love..."
        ]
    },
    189: {
        "direction_en": None,
        "lines": [
            "Carmen!..."
        ]
    },
    190: {
        "direction_en": None,
        "lines": [
            "My officer is not a captain,",
            "not even a lieutenant... he is only a corporal...",
            "but that is enough for a gypsy girl,",
            "and I deign to be content with him!"
        ]
    },
    191: {
        "direction_en": "untying the cord that binds Carmen's hands",
        "lines": [
            "Carmen, I am like a drunken man...",
            "If I yield, if I give myself up,",
            "your promise, you will keep it...",
            "If I love you, you will love me..."
        ]
    },
    192: {
        "direction_en": "hardly sung, murmured",
        "lines": [
            "Near the gate of Seville,",
            "at the tavern of my friend Lillas Pastia,",
            "we will dance the seguidilla",
            "and will drink manzanilla."
        ]
    },
    193: {
        "direction_en": "Spoken; Carmen goes to sit back on her stool, hands behind her back. The lieutenant re-enters.",
        "lines": [
            "The lieutenant!... Take care."
        ]
    },
    194: {
        "direction_en": None,
        "lines": [
            "Here is the order... depart and keep good guard..."
        ]
    },
    195: {
        "direction_en": "low to José; She places herself between the two dragoons. José beside her. The women and townsfolk, meanwhile, have re-entered the stage, still kept at a distance by the dragoons. Carmen crosses the stage from left to right, going toward the bridge and singing; Arriving at the entrance of the bridge on the right, Carmen pushes José who lets himself be knocked down... Confusion, disorder: Carmen escapes... Arriving at the middle of the bridge, she stops an instant, flings her cord over the parapet of the bridge, and flees while on stage, with loud bursts of laughter, the cigarette girls surround the lieutenant.",
        "lines": [
            "Upon the bridge I will push you",
            "as hard as I can...",
            "Let yourself be knocked down... the rest is my concern!",
            "Love is a child of Bohemia,",
            "it has never known law;",
            "if you do not love me, I love you;",
            "if I love you, take guard to yourself!..."
        ]
    },
    196: {
        "direction_en": None,
        "lines": [
            "Love is a child of Bohemia,",
            "if you do not love me, I love you;",
            "if I love you, take guard to yourself!"
        ]
    }
}


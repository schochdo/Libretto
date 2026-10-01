#!/usr/bin/env python3
"""
Builder and validator for Falstaff Act 2 Scene 2 Part D curated dataset.
"""

import json
import sys

ALLOWED_POS = {
    "noun", "verb", "adjective", "adverb", "pronoun",
    "preposition", "conjunction", "interjection", "particle", "idiom"
}

CURATED_DATA = {
  "Urlerai dopo.": [
    "You will scream later.",
    [
      {"word": "Urlerai", "lemma": "urlare", "pos": "verb", "meaning": "you will scream / shout (2nd sing. future)"},
      {"word": "dopo", "lemma": "dopo", "pos": "adverb", "meaning": "later / afterwards"}
    ],
    "Ford silences anyone attempting to delay him, grimly promising that screaming and retribution will follow once the house is ransacked."
  ],
  "Là s'è udito il suon d'un bacio.": [
    "There the sound of a kiss was heard.",
    [
      {"word": "Là", "lemma": "là", "pos": "adverb", "meaning": "there / over there"},
      {"word": "s'è udito", "lemma": "udire", "pos": "verb", "meaning": "was heard (passivizing 'si' with essere)"},
      {"word": "il suon", "lemma": "suono", "pos": "noun", "meaning": "the sound (apocope of suono)"},
      {"word": "bacio", "lemma": "bacio", "pos": "noun", "meaning": "kiss"}
    ],
    "Ford freezes upon hearing kissing noises from behind the folding screen, instantly convinced that Alice is in Falstaff's embrace."
  ],
  "Noi dobbiam pigliare il topo": [
    "We must catch the mouse",
    [
      {"word": "dobbiam", "lemma": "dovere", "pos": "verb", "meaning": "we must / have to (apocope of dobbiamo)"},
      {"word": "pigliare", "lemma": "pigliare", "pos": "verb", "meaning": "to catch / seize / take"},
      {"word": "il topo", "lemma": "topo", "pos": "noun", "meaning": "the mouse / rat"}
    ],
    "Bardolfo joins the hunt with a feline predator metaphor, likening the search party to mousers cornering their prey."
  ],
  "mentre sta rodendo il cacio.": [
    "while it is gnawing the cheese.",
    [
      {"word": "mentre", "lemma": "mentre", "pos": "conjunction", "meaning": "while / as"},
      {"word": "sta rodendo", "lemma": "rodere", "pos": "verb", "meaning": "is gnawing (progressive aspect: stare + gerund)"},
      {"word": "il cacio", "lemma": "cacio", "pos": "noun", "meaning": "the cheese"}
    ],
    "Bardolfo completes the proverbial mouse metaphor; 'rodere il cacio' depicts catching the adulterer in the very act of indulgence."
  ],
  "QUICKLY, MEG E FALSTAFF": [
    "Quickly, Meg and Falstaff",
    [
      {"word": "QUICKLY", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (character name)"},
      {"word": "MEG", "lemma": "Meg", "pos": "noun", "meaning": "Meg (character name)"},
      {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "FALSTAFF", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff (character name)"}
    ],
    "Score cue indicating the simultaneous shift of dramatic focus to the laundry basket where Quickly and Meg struggle to conceal Falstaff."
  ],
  "Quickly a Meg)": [
    "Quickly to Meg)",
    [
      {"word": "Quickly", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (character name)"},
      {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "to"},
      {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (character name)"}
    ],
    "Stage direction indicating Mrs. Quickly whispering hasty instructions to Meg as they tend to the laundry basket."
  ],
  "Facciamo le viste": [
    "Let us pretend",
    [
      {"word": "Facciamo", "lemma": "fare", "pos": "verb", "meaning": "let us make / let us do (1st pl. hortative present)"},
      {"word": "le viste", "lemma": "vista", "pos": "noun", "meaning": "appearances / pretense (plural of vista)"},
      {"word": "far le viste", "lemma": "fare le viste", "pos": "idiom", "meaning": "to pretend / make as if / feign"}
    ],
    "The idiom 'fare le viste di' means to make a pretense; Quickly instructs Meg to act natural by fussing with the linen."
  ],
  "d'attendere ai panni;": [
    "of tending to the clothes;",
    [
      {"word": "d'attendere", "lemma": "attendere", "pos": "verb", "meaning": "to attend to / apply oneself to (attendere a)"},
      {"word": "ai", "lemma": "a", "pos": "preposition", "meaning": "to the (preposition a + article i)"},
      {"word": "panni", "lemma": "panno", "pos": "noun", "meaning": "clothes / linens (plural)"}
    ],
    "The women pretend to fold and sort dirty laundry ('attendere ai panni') to conceal the fact that Falstaff is crammed inside the basket."
  ],
  "pur ch'ei non c'inganni": [
    "provided that he does not deceive us",
    [
      {"word": "pur che", "lemma": "purché", "pos": "conjunction", "meaning": "provided that / as long as (+ subjunctive)"},
      {"word": "ei", "lemma": "egli", "pos": "pronoun", "meaning": "he (poetic form of egli)"},
      {"word": "c'inganni", "lemma": "ingannare", "pos": "verb", "meaning": "tricks us / deceives us (clitic ci + 3rd sing. subjunctive)"}
    ],
    "Quickly worries that Falstaff's clumsy thrashing might betray them; 'purché' triggers the subjunctive 'inganni'."
  ],
  "con mosse impreviste.": [
    "with unexpected moves.",
    [
      {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
      {"word": "mosse", "lemma": "mossa", "pos": "noun", "meaning": "moves / movements (plural)"},
      {"word": "impreviste", "lemma": "imprevisto", "pos": "adjective", "meaning": "unforeseen / unexpected (fem. pl.)"}
    ],
    "A sudden panic-induced shift from the massive knight could overturn the basket and expose the entire conspiracy."
  ],
  "Fin'or non s'accorse": [
    "Until now he did not notice",
    [
      {"word": "Fin'or", "lemma": "finora", "pos": "adverb", "meaning": "until now / so far (fino ad ora)"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "s'accorse", "lemma": "accorgersi", "pos": "verb", "meaning": "noticed / realized (3rd sing. passato remoto)"}
    ],
    "Quickly notes with relief that Ford hasn't yet looked inside the laundry basket during his rampage through the room."
  ],
  "di nulla, egli può": [
    "anything, he may",
    [
      {"word": "di nulla", "lemma": "nulla", "pos": "pronoun", "meaning": "of anything / of nothing"},
      {"word": "egli", "lemma": "egli", "pos": "pronoun", "meaning": "he"},
      {"word": "può", "lemma": "potere", "pos": "verb", "meaning": "can / may (3rd sing. present)"}
    ],
    "The women assess Ford's erratic search; he has noticed nothing so far, though his unpredictable movements pose a constant hazard."
  ],
  "sorprenderci forse,": [
    "surprise us perhaps,",
    [
      {"word": "sorprenderci", "lemma": "sorprendere", "pos": "verb", "meaning": "to surprise us (infinitive + clitic ci)"},
      {"word": "forse", "lemma": "forse", "pos": "adverb", "meaning": "perhaps / maybe"}
    ],
    "Quickly admits Ford could burst upon them unawares, setting up the spirited contrast with the next line."
  ],
  "confonderci no.": [
    "confuse us, no.",
    [
      {"word": "confonderci", "lemma": "confondere", "pos": "verb", "meaning": "to confuse us / fluster us (infinitive + clitic ci)"},
      {"word": "no", "lemma": "no", "pos": "adverb", "meaning": "no"}
    ],
    "A proud declaration of quick female wit: Ford may startle them physically, but he will never rattle their composure or outsmart them."
  ],
  "Facciamogli siepe": [
    "Let us make a hedge for him",
    [
      {"word": "Facciamogli", "lemma": "fare", "pos": "verb", "meaning": "let us make for him (hortative fare + dative clitic gli)"},
      {"word": "siepe", "lemma": "siepe", "pos": "noun", "meaning": "hedge / barrier / screen"},
      {"word": "far siepe", "lemma": "fare siepe", "pos": "idiom", "meaning": "to form a screen / shield someone from view"}
    ],
    "Meg urges forming a protective screen ('siepe') of their bodies and laundry around the basket to shield Falstaff from sight."
  ],
  "fra tanto scompiglio.": [
    "amid so much turmoil.",
    [
      {"word": "fra", "lemma": "fra", "pos": "preposition", "meaning": "amid / among / between"},
      {"word": "tanto", "lemma": "tanto", "pos": "adjective", "meaning": "so much / such great"},
      {"word": "scompiglio", "lemma": "scompiglio", "pos": "noun", "meaning": "turmoil / confusion / disorder"}
    ],
    "Meg revels in the chaotic frenzy ('scompiglio') unfolding as Ford and his followers tear through chests and cupboards."
  ],
  "Ne' giuochi il periglio": [
    "In games danger",
    [
      {"word": "Ne'", "lemma": "in", "pos": "preposition", "meaning": "in the (poetic truncation of nei)"},
      {"word": "giuochi", "lemma": "giuoco", "pos": "noun", "meaning": "games / pranks (archaic variant of giochi)"},
      {"word": "il periglio", "lemma": "periglio", "pos": "noun", "meaning": "the danger / peril (poetic variant of pericolo)"}
    ],
    "Meg philosophizes on the nature of pranks; danger is not a deterrent, but the very element that makes games exhilarating."
  ],
  "è un grano di pepe.": [
    "is a peppercorn.",
    [
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is (3rd sing. present)"},
      {"word": "un grano", "lemma": "grano", "pos": "noun", "meaning": "a grain / peppercorn"},
      {"word": "di pepe", "lemma": "pepe", "pos": "noun", "meaning": "of pepper"}
    ],
    "A vibrant culinary metaphor: hazard adds spice and pungency to their practical joke, just like a peppercorn in a dish."
  ],
  "Il rischio è un diletto": [
    "Risk is a delight",
    [
      {"word": "Il rischio", "lemma": "rischio", "pos": "noun", "meaning": "the risk / danger"},
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
      {"word": "un diletto", "lemma": "diletto", "pos": "noun", "meaning": "a delight / pleasure"}
    ],
    "Meg gives voice to the Merry Wives' high-spirited courage; danger transforms into pure theatrical joy."
  ],
  "che accresce l'ardor,": [
    "that increases the ardor,",
    [
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which (relative pronoun)"},
      {"word": "accresce", "lemma": "accrescere", "pos": "verb", "meaning": "increases / heightens"},
      {"word": "l'ardor", "lemma": "ardore", "pos": "noun", "meaning": "the ardor / passion / fervor (apocope of ardore)"}
    ],
    "Truncated 'ardor' emphasizes how heightened tension fuels their adventurous enthusiasm and adrenaline."
  ],
  "che stimola in petto": [
    "that stimulates in the breast",
    [
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which"},
      {"word": "stimola", "lemma": "stimolare", "pos": "verb", "meaning": "stimulates / stirs (3rd sing. present)"},
      {"word": "in petto", "lemma": "petto", "pos": "noun", "meaning": "in the breast / in the chest"}
    ],
    "Meg describes the physiological rush of their daring escapade, feeling her pulse race with mischievous excitement."
  ],
  "gli spirti e il cor.": [
    "the spirits and the heart.",
    [
      {"word": "gli spirti", "lemma": "spirto", "pos": "noun", "meaning": "the spirits / vital energies (poetic syncope of spiriti)"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "il cor", "lemma": "core", "pos": "noun", "meaning": "the heart (poetic apocope of cuore/core)"}
    ],
    "Poetic forms 'spirti' and 'cor'; the danger invigorates both animal spirits (vital energy) and courage."
  ],
  "Affogo!": [
    "I am suffocating!",
    [
      {"word": "Affogo", "lemma": "affogare", "pos": "verb", "meaning": "I choke / suffocate / drown (1st sing. present)"},
      {"word": "affogare", "lemma": "affogare", "pos": "verb", "meaning": "to suffocate / choke / drown (infinitive)"}
    ],
    "Falstaff's panicked, muffled cry from deep inside the laundry basket, where he is smothering beneath piles of soiled linen."
  ],
  "Sta' sotto.": [
    "Stay underneath.",
    [
      {"word": "Sta'", "lemma": "stare", "pos": "verb", "meaning": "stay / remain (imperative 2nd sing., apocope of stai)"},
      {"word": "sotto", "lemma": "sotto", "pos": "adverb", "meaning": "under / underneath / down"}
    ],
    "Quickly sternly orders the suffocating knight to stay buried, prioritizing concealment over his physical comfort."
  ],
  "Or questi s'insorge.": [
    "Now this one is rising up.",
    [
      {"word": "Or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocope of ora)"},
      {"word": "questi", "lemma": "questi", "pos": "pronoun", "meaning": "this one (masculine singular demonstrative pronoun)"},
      {"word": "s'insorge", "lemma": "insorgere", "pos": "verb", "meaning": "rises up / rebels (reflexive 3rd sing.)"}
    ],
    "Meg comically uses the lofty political verb 'insorgere' (to revolt or rise up) to describe Falstaff struggling to poke his head out of the basket."
  ],
  "Se l'altro ti scorge": [
    "If the other one sees you",
    [
      {"word": "Se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "l'altro", "lemma": "altro", "pos": "pronoun", "meaning": "the other one (referring to Ford)"},
      {"word": "ti scorge", "lemma": "scorgere", "pos": "verb", "meaning": "catches sight of you / spots you (clitic ti + 3rd sing.)"}
    ],
    "Quickly uses the terrifying threat of discovery by the jealous, sword-wielding Ford ('l'altro') to keep Falstaff submerged."
  ],
  "sei morto.": [
    "you are dead.",
    [
      {"word": "sei", "lemma": "essere", "pos": "verb", "meaning": "you are (2nd sing. present)"},
      {"word": "morto", "lemma": "morto", "pos": "adjective", "meaning": "dead"}
    ],
    "Present tense 'sei morto' conveys immediate, inevitable slaughter should Ford turn his head toward the basket."
  ],
  "Son cotto!": [
    "I am cooked!",
    [
      {"word": "Son", "lemma": "essere", "pos": "verb", "meaning": "I am (apocope of sono)"},
      {"word": "cotto", "lemma": "cotto", "pos": "adjective", "meaning": "cooked / done for / overheated"},
      {"word": "esser cotto", "lemma": "essere cotto", "pos": "idiom", "meaning": "to be done for / to be sweltering"}
    ],
    "Comic double meaning: Falstaff is literally stewing in foul body heat inside the dirty laundry and figuratively done for ('cotto')."
  ],
  "Sta' sotto!": [
    "Stay underneath!",
    [
      {"word": "Sta'", "lemma": "stare", "pos": "verb", "meaning": "stay / remain (imperative 2nd sing.)"},
      {"word": "sotto", "lemma": "sotto", "pos": "adverb", "meaning": "under / underneath / down"}
    ],
    "Meg repeats Quickly's command with brisk authority, slamming more sheets over the squirming knight."
  ],
  "Che caldo!": [
    "What heat!",
    [
      {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what / what a (exclamative)"},
      {"word": "caldo", "lemma": "caldo", "pos": "noun", "meaning": "heat / warmth"}
    ],
    "Falstaff groans in agony at the oppressive, stifling greenhouse temperature brewing inside the laundry hamper."
  ],
  "Mi squaglio!": [
    "I am melting!",
    [
      {"word": "Mi", "lemma": "mi", "pos": "pronoun", "meaning": "myself (1st sing. reflexive pronoun)"},
      {"word": "squaglio", "lemma": "squagliare", "pos": "verb", "meaning": "I melt / liquefy (1st sing. present)"},
      {"word": "squagliarsi", "lemma": "squagliarsi", "pos": "verb", "meaning": "to melt away / dissolve (pronominal verb)"}
    ],
    "Falstaff comically imagines his enormous bulk of lard and fat liquefying completely under the pile of dirty wash."
  ],
  "Ragioniam. Colpo non vibro": [
    "Let us reason. I strike no blow",
    [
      {"word": "Ragioniam", "lemma": "ragionare", "pos": "verb", "meaning": "let us reason (1st pl. hortative present, apocope)"},
      {"word": "Colpo", "lemma": "colpo", "pos": "noun", "meaning": "blow / strike"},
      {"word": "vibro", "lemma": "vibrare", "pos": "verb", "meaning": "I strike / launch / aim (1st sing. present)"}
    ],
    "Across the room, Ford abruptly halts his frantic thrashing to play the role of a cool, calculating military strategist."
  ],
  "senza un piano di battaglia.": [
    "without a battle plan.",
    [
      {"word": "senza", "lemma": "senza", "pos": "preposition", "meaning": "without"},
      {"word": "un piano", "lemma": "piano", "pos": "noun", "meaning": "a plan"},
      {"word": "di battaglia", "lemma": "battaglia", "pos": "noun", "meaning": "of battle"}
    ],
    "Ford parodies grand military campaigns; storming a simple folding screen in his own drawing room requires a meticulous tactical doctrine."
  ],
  "Gli altri": [
    "The others",
    [
      {"word": "Gli altri", "lemma": "altro", "pos": "pronoun", "meaning": "the others (masculine plural)"},
      {"word": "altri", "lemma": "altro", "pos": "pronoun", "meaning": "others"}
    ],
    "Choral entry indicating the ensemble of Ford's armed cronies and servants responding to his tactical orders."
  ],
  "Bravo.": [
    "Bravo.",
    [
      {"word": "Bravo", "lemma": "bravo", "pos": "interjection", "meaning": "bravo / well done! (acclamation)"},
      {"word": "bravo", "lemma": "bravo", "pos": "adjective", "meaning": "worthy / capable / good"}
    ],
    "The men murmur hushed approval, eager to participate in Ford's self-important military maneuver."
  ],
  "Un uom di quel calibro": [
    "A man of that caliber",
    [
      {"word": "Un uom", "lemma": "uomo", "pos": "noun", "meaning": "a man (apocope of uomo)"},
      {"word": "di quel", "lemma": "quello", "pos": "adjective", "meaning": "of that"},
      {"word": "calibro", "lemma": "calibro", "pos": "noun", "meaning": "caliber / bore / stature"}
    ],
    "Dr. Caius uses artillery terminology ('calibro'), comically referencing both Falstaff's fearsome reputation and his massive physical circumference."
  ],
  "con un soffio ci sbaraglia.": [
    "with a single breath routs us.",
    [
      {"word": "con un soffio", "lemma": "soffio", "pos": "noun", "meaning": "with a puff / breath"},
      {"word": "ci sbaraglia", "lemma": "sbaragliare", "pos": "verb", "meaning": "routs us / scatters us (clitic ci + 3rd sing.)"}
    ],
    "Caius warns of Falstaff's terrifying power; the verb 'sbaragliare' denotes scattering an opposing army in disarray."
  ],
  "La mia tattica maestra": [
    "My masterly tactic",
    [
      {"word": "tattica", "lemma": "tattica", "pos": "noun", "meaning": "tactics / tactical scheme"},
      {"word": "maestra", "lemma": "maestro", "pos": "adjective", "meaning": "masterly / master (feminine singular)"}
    ],
    "Ford flatters his own strategic acumen; 'tattica maestra' frames his jealousy as the work of an accomplished field marshal."
  ],
  "le sue mosse pria registra.": [
    "first registers his moves.",
    [
      {"word": "mosse", "lemma": "mossa", "pos": "noun", "meaning": "moves / maneuvers (plural)"},
      {"word": "pria", "lemma": "prima", "pos": "adverb", "meaning": "first / beforehand (archaic form of prima)"},
      {"word": "registra", "lemma": "registrare", "pos": "verb", "meaning": "records / observes / anticipates (3rd sing. present)"}
    ],
    "Poetic adverb 'pria'; Ford claims his superior tactics predict and neutralize every possible enemy movement before action is taken."
  ],
  "Voi sarete l'ala destra,": [
    "You will be the right wing,",
    [
      {"word": "sarete", "lemma": "essere", "pos": "verb", "meaning": "you will be (2nd pl. future)"},
      {"word": "l'ala", "lemma": "ala", "pos": "noun", "meaning": "the wing / flank"},
      {"word": "destra", "lemma": "destro", "pos": "adjective", "meaning": "right (feminine singular)"}
    ],
    "Ford divides his small posse into classical military formations, assigning one group to form the right flank ('ala destra')."
  ],
  "noi sarem l'ala sinistra,": [
    "we will be the left wing,",
    [
      {"word": "noi sarem", "lemma": "essere", "pos": "verb", "meaning": "we will be (1st pl. future, apocope of saremo)"},
      {"word": "l'ala", "lemma": "ala", "pos": "noun", "meaning": "the wing / flank"},
      {"word": "sinistra", "lemma": "sinistro", "pos": "adjective", "meaning": "left (feminine singular)"}
    ],
    "Apocopated future 'sarem'; Ford assigns himself to command the left flank in their ridiculous flanking operation around the screen."
  ],
  "e costor con piè gagliardo": [
    "and these men with sturdy foot",
    [
      {"word": "costor", "lemma": "costoro", "pos": "pronoun", "meaning": "these men (apocope of costoro)"},
      {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
      {"word": "piè", "lemma": "piede", "pos": "noun", "meaning": "foot / step (poetic apocope of piede)"},
      {"word": "gagliardo", "lemma": "gagliardo", "pos": "adjective", "meaning": "sturdy / vigorous / bold"}
    ],
    "Ford orders the servants to form the center shock troop, advancing with bold, heavy strides ('piè gagliardo')."
  ],
  "sfonderanno il baluardo.": [
    "will smash through the rampart.",
    [
      {"word": "sfonderanno", "lemma": "sfondare", "pos": "verb", "meaning": "they will break through / smash down (3rd pl. future)"},
      {"word": "il baluardo", "lemma": "baluardo", "pos": "noun", "meaning": "the rampart / bulwark / bastion"}
    ],
    "Ford grandly refers to the fragile decorative folding screen as a 'baluardo' (fortified rampart) to be breached by assault."
  ],
  "Tutti gli altri": [
    "All the others",
    [
      {"word": "Tutti", "lemma": "tutto", "pos": "adjective", "meaning": "all (masculine plural)"},
      {"word": "gli altri", "lemma": "altro", "pos": "pronoun", "meaning": "the others"}
    ],
    "Ensemble cue indicating the full chorus of searchers answering Ford in hushed, dramatic unison."
  ],
  "Bravo generale,": [
    "Bravo general,",
    [
      {"word": "Bravo", "lemma": "bravo", "pos": "adjective", "meaning": "bravo / fine / worthy"},
      {"word": "generale", "lemma": "generale", "pos": "noun", "meaning": "general / commander"}
    ],
    "Dr. Caius and the men humor Ford's delusions of grandeur by saluting him as their 'generale'."
  ],
  "aspettiamo un tuo segnale.": [
    "we await a signal from you.",
    [
      {"word": "aspettiamo", "lemma": "aspettare", "pos": "verb", "meaning": "we await / are waiting for (1st pl. present)"},
      {"word": "un tuo", "lemma": "tuo", "pos": "pronoun", "meaning": "a your (possessive pronoun)"},
      {"word": "segnale", "lemma": "segnale", "pos": "noun", "meaning": "signal / cue"}
    ],
    "The men pledge strict obedience, awaiting Ford's command before storming the screen."
  ],
  "Il ribaldo": [
    "The rogue",
    [
      {"word": "Il", "lemma": "il", "pos": "particle", "meaning": "the (masculine singular definite article)"},
      {"word": "ribaldo", "lemma": "ribaldo", "pos": "noun", "meaning": "rogue / rascal / scoundrel"}
    ],
    "Meg turns back to the laundry basket, mockingly labeling the groaning Falstaff a 'ribaldo' (scoundrel/rogue)."
  ],
  "vorrebbe un ventaglio.": [
    "would like a fan.",
    [
      {"word": "vorrebbe", "lemma": "volere", "pos": "verb", "meaning": "would like / would want (3rd sing. conditional)"},
      {"word": "un ventaglio", "lemma": "ventaglio", "pos": "noun", "meaning": "a fan (hand fan)"}
    ],
    "Meg laughs at Falstaff's aristocratic delicacy; crammed into sweaty linen, the portly knight wishes for a gentle lady's fan."
  ],
  "Un breve spiraglio,": [
    "A brief opening,",
    [
      {"word": "Un breve", "lemma": "breve", "pos": "adjective", "meaning": "a brief / small / slight"},
      {"word": "spiraglio", "lemma": "spiraglio", "pos": "noun", "meaning": "chink / crack / breathing hole"}
    ],
    "Falstaff gasps for air, pleading not for freedom or dignity, but merely for a tiny crevice ('spiraglio') through which to breathe."
  ],
  "non chiedo di più.": [
    "I ask for nothing more.",
    [
      {"word": "non chiedo", "lemma": "chiedere", "pos": "verb", "meaning": "I do not ask (1st sing. present)"},
      {"word": "di più", "lemma": "più", "pos": "idiom", "meaning": "more / anything further"}
    ],
    "The once proud and boastful knight is humbled to the absolute minimum requirement of biological survival: oxygen."
  ],
  "Ti metto il bavaglio": [
    "I will put a gag on you",
    [
      {"word": "Ti metto", "lemma": "mettere", "pos": "verb", "meaning": "I put on you (clitic ti + 1st sing. present)"},
      {"word": "il bavaglio", "lemma": "bavaglio", "pos": "noun", "meaning": "the gag / muzzle"}
    ],
    "Quickly has zero sympathy, threatening to muzzle him ('il bavaglio') with dirty rags if he utters another syllable."
  ],
  "se parli.": [
    "if you speak.",
    [
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "parli", "lemma": "parlare", "pos": "verb", "meaning": "you speak (2nd sing. present)"}
    ],
    "A sharp warning: silence is non-negotiable while Ford's search party is pacing across the parlor."
  ],
  "Giù!": [
    "Down!",
    [
      {"word": "Giù", "lemma": "giù", "pos": "adverb", "meaning": "down / downward (spatial direction)"},
      {"word": "giù", "lemma": "giù", "pos": "interjection", "meaning": "down! / get down! (imperative exclamation)"}
    ],
    "Meg punctuates Quickly's threat by bodily shoving Falstaff's head back down into the depths of the laundry basket."
  ],
  "Mentre quei vecchi": [
    "While those old men",
    [
      {"word": "Mentre", "lemma": "mentre", "pos": "conjunction", "meaning": "while / as"},
      {"word": "quei", "lemma": "quello", "pos": "adjective", "meaning": "those (masculine plural)"},
      {"word": "vecchi", "lemma": "vecchio", "pos": "noun", "meaning": "old men (plural)"}
    ],
    "Behind the screen, Nannetta sings softly to Fenton, setting their pure, youthful romance apart from the absurd antics of the older men."
  ],
  "corron la giostra,": [
    "run the joust,",
    [
      {"word": "corron", "lemma": "correre", "pos": "verb", "meaning": "run / race (3rd pl. present, apocope of corrono)"},
      {"word": "la giostra", "lemma": "giostra", "pos": "noun", "meaning": "the joust / tournament / merry-go-round"},
      {"word": "correr la giostra", "lemma": "correre la giostra", "pos": "idiom", "meaning": "to tilt at windmills / pursue a frantic contest"}
    ],
    "Nannetta ironically compares Ford's furious manhunt to a medieval tournament or frantic carousel ('giostra')."
  ],
  "noi di sottecchi": [
    "we on the sly",
    [
      {"word": "noi", "lemma": "noi", "pos": "pronoun", "meaning": "we"},
      {"word": "di sottecchi", "lemma": "di sottecchi", "pos": "idiom", "meaning": "on the sly / stealthily / covertly"},
      {"word": "sottecchi", "lemma": "sottecchi", "pos": "adverb", "meaning": "furtively / secretly"}
    ],
    "The adverbial phrase 'di sottecchi' captures the clandestine charm of stealing sweet kisses right under the noses of their pursuers."
  ],
  "corriam la nostra.": [
    "let us run ours.",
    [
      {"word": "corriam", "lemma": "correre", "pos": "verb", "meaning": "let us run (1st pl. hortative present, apocope)"},
      {"word": "la nostra", "lemma": "nostro", "pos": "pronoun", "meaning": "ours (possessive referring to giostra)"}
    ],
    "Hortative 'corriam'; Nannetta invites Fenton to pursue their own tournament of affection and joy while the elders are occupied."
  ],
  "L'amor non ode": [
    "Love does not hear",
    [
      {"word": "L'amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocope of amore)"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "ode", "lemma": "udire", "pos": "verb", "meaning": "hears / listens to (3rd sing. present)"}
    ],
    "Personification of Love as oblivious to worldly disturbance; genuine passion creates its own sacred sanctuary."
  ],
  "tuon né bufere,": [
    "thunder nor tempests,",
    [
      {"word": "tuon", "lemma": "tuono", "pos": "noun", "meaning": "thunder (apocope of tuono)"},
      {"word": "né", "lemma": "né", "pos": "conjunction", "meaning": "nor / neither"},
      {"word": "bufere", "lemma": "bufera", "pos": "noun", "meaning": "tempests / blizzards / storms (plural)"}
    ],
    "Nannetta poeticizes the domestic commotion; Ford's bellowing and banging are dismissed as mere passing thunder and storms."
  ],
  "vola alle sfere": [
    "flies to the spheres",
    [
      {"word": "vola", "lemma": "volare", "pos": "verb", "meaning": "flies (3rd sing. present)"},
      {"word": "alle", "lemma": "a", "pos": "preposition", "meaning": "to the (preposition a + article le)"},
      {"word": "sfere", "lemma": "sfera", "pos": "noun", "meaning": "spheres / heavens (plural)"}
    ],
    "Echoing Dante and Petrarch, love ascends beyond mundane earthly pettiness to the celestial spheres of pure joy."
  ],
  "beate e gode.": [
    "blessed and rejoices.",
    [
      {"word": "beate", "lemma": "beato", "pos": "adjective", "meaning": "blessed / blissful (fem. pl.)"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "gode", "lemma": "godere", "pos": "verb", "meaning": "rejoices / delights (3rd sing. present)"}
    ],
    "In the 'sfere beate', love attains timeless happiness ('gode'), contrasting sharply with the sweaty panic in the laundry basket."
  ],
  "Bella! Ridente!": [
    "Beautiful! Radiant!",
    [
      {"word": "Bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / fair (feminine)"},
      {"word": "Ridente", "lemma": "ridente", "pos": "adjective", "meaning": "smiling / radiant / cheerful (present participle)"}
    ],
    "Fenton responds to Nannetta with tender vocative praises, enchanted by her radiant smile and youthful beauty."
  ],
  "Oh! come pieghi": [
    "Oh! how you yield",
    [
      {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh"},
      {"word": "come", "lemma": "come", "pos": "adverb", "meaning": "how / in what way"},
      {"word": "pieghi", "lemma": "piegare", "pos": "verb", "meaning": "you bend / incline / yield (2nd sing. present)"}
    ],
    "Fenton marvels at how gently Nannetta leans toward him in response to his romantic pleading."
  ],
  "verso i miei prieghi": [
    "toward my entreaties",
    [
      {"word": "verso", "lemma": "verso", "pos": "preposition", "meaning": "toward"},
      {"word": "i miei", "lemma": "mio", "pos": "pronoun", "meaning": "my (masculine plural)"},
      {"word": "prieghi", "lemma": "priegho", "pos": "noun", "meaning": "prayers / entreaties (poetic form of preghi/preghiere)"}
    ],
    "Poetic archaic 'prieghi'; Fenton frames his courtship in the elevated language of courtly Italian lyricism."
  ],
  "donnescamente!": [
    "with womanly grace!",
    [
      {"word": "donnescamente", "lemma": "donnescamente", "pos": "adverb", "meaning": "with womanly grace / in a womanly manner"},
      {"word": "donnesco", "lemma": "donnesco", "pos": "adjective", "meaning": "womanly / feminine (adjectival root)"},
      {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman / lady (base noun)"}
    ],
    "A refined literary adverb (used by Dante and Boccaccio) denoting exquisite, dignified feminine sweetness."
  ],
  "L'attimo ancora": [
    "The moment still",
    [
      {"word": "L'attimo", "lemma": "attimo", "pos": "noun", "meaning": "the moment / instant"},
      {"word": "ancora", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet / once more"}
    ],
    "Nannetta urges seizing the fleeting spark of time before their clandestine hiding place is discovered."
  ],
  "cogliam che brilla,": [
    "let us seize while it shines,",
    [
      {"word": "cogliam", "lemma": "cogliere", "pos": "verb", "meaning": "let us pluck / seize (1st pl. hortative, apocope)"},
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which"},
      {"word": "brilla", "lemma": "brillare", "pos": "verb", "meaning": "shines / sparkles (3rd sing. present)"}
    ],
    "Hortative 'cogliam'; classical 'carpe diem' motif celebrating love's luminous radiance amidst precarious surroundings."
  ],
  "è la scintilla": [
    "it is the spark",
    [
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is (3rd sing. present)"},
      {"word": "la scintilla", "lemma": "scintilla", "pos": "noun", "meaning": "the spark"}
    ],
    "Nannetta describes their stolen kiss as a spark of vital warmth against the cold opposition of their parents."
  ],
  "viva dell'ora.": [
    "alive of the hour.",
    [
      {"word": "viva", "lemma": "vivo", "pos": "adjective", "meaning": "living / vibrant / vivid"},
      {"word": "dell'ora", "lemma": "ora", "pos": "noun", "meaning": "of the hour (di + article + ora)"}
    ],
    "The phrase 'la scintilla viva dell'ora' conveys the pulse of the living moment that makes all danger fade away."
  ],
  "Come ti vidi": [
    "As soon as I saw you",
    [
      {"word": "Come", "lemma": "come", "pos": "conjunction", "meaning": "as soon as / when"},
      {"word": "ti", "lemma": "ti", "pos": "pronoun", "meaning": "you (direct object clitic)"},
      {"word": "vidi", "lemma": "vedere", "pos": "verb", "meaning": "I saw (1st sing. passato remoto)"}
    ],
    "Fenton sings a timeless declaration of love at first sight, setting up the immediate flowering of his passion."
  ],
  "m'innamorai,": [
    "I fell in love,",
    [
      {"word": "m'", "lemma": "mi", "pos": "pronoun", "meaning": "myself (elided 1st sing. reflexive pronoun)"},
      {"word": "innamorai", "lemma": "innamorare", "pos": "verb", "meaning": "I fell in love / enamored (1st sing. passato remoto)"},
      {"word": "innamorarsi", "lemma": "innamorarsi", "pos": "verb", "meaning": "to fall in love (reflexive verb)"}
    ],
    "Passato remoto 'm'innamorai'; an instantaneous, unshakeable transformation of the heart."
  ],
  "e tu sorridi": [
    "and you smile",
    [
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "tu", "lemma": "tu", "pos": "pronoun", "meaning": "you"},
      {"word": "sorridi", "lemma": "sorridere", "pos": "verb", "meaning": "you smile (2nd sing. present)"}
    ],
    "Fenton notes Nannetta's playful, tender smile as she listens to his impassioned confession."
  ],
  "perché lo sai.": [
    "because you know it.",
    [
      {"word": "perché", "lemma": "perché", "pos": "conjunction", "meaning": "because"},
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "it (direct object clitic)"},
      {"word": "sai", "lemma": "sapere", "pos": "verb", "meaning": "you know (2nd sing. present)"}
    ],
    "Nannetta smiles with knowing affection; there is complete, unspoken understanding between the two young lovers."
  ],
  "Lo spiritello": [
    "The little spirit",
    [
      {"word": "Lo", "lemma": "il", "pos": "particle", "meaning": "the (masculine singular definite article before s+consonant)"},
      {"word": "spiritello", "lemma": "spiritello", "pos": "noun", "meaning": "little spirit / sprite / cupid"},
      {"word": "spirito", "lemma": "spirito", "pos": "noun", "meaning": "spirit / soul (base noun with diminutive suffix -ello)"}
    ],
    "Diminutive 'spiritello' evokes Cupid or an ethereal sprite of romance hovering playfully around them."
  ],
  "d'amor volteggia.": [
    "of love flutters about.",
    [
      {"word": "d'amor", "lemma": "amore", "pos": "noun", "meaning": "of love (apocope of amore)"},
      {"word": "volteggia", "lemma": "volteggiare", "pos": "verb", "meaning": "flutters / twirls / hovers (3rd sing. present)"}
    ],
    "'Volteggiare' captures the light, graceful fluttering of love's spirit, matching Verdi's delicate orchestral accompaniment."
  ],
  "Già un sogno bello": [
    "Already a beautiful dream",
    [
      {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
      {"word": "un sogno", "lemma": "sogno", "pos": "noun", "meaning": "a dream"},
      {"word": "bello", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / lovely"}
    ],
    "Fenton looks forward to the realization of their hopes, dreaming of marriage despite Ford's obstinate resistance."
  ],
  "d'imene albeggia.": [
    "of hymen dawns.",
    [
      {"word": "d'imene", "lemma": "imene", "pos": "noun", "meaning": "of hymen / marriage (classical mythology)"},
      {"word": "albeggia", "lemma": "albeggiare", "pos": "verb", "meaning": "dawns / breaks day (3rd sing. present)"}
    ],
    "Classical mythological reference to Hymen (god of weddings); Fenton envisions the dawn ('albeggia') of their wedding day."
  ],
  "Tutto delira,": [
    "Everything raves in delirium,",
    [
      {"word": "Tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "everything / all"},
      {"word": "delira", "lemma": "delirare", "pos": "verb", "meaning": "raves / is in ecstasy / is intoxicated (3rd sing. present)"}
    ],
    "Nannetta describes the ecstatic sensory overwhelm of young love, where reality dissolves into sweet enchantment."
  ],
  "sospiro e riso.": [
    "sigh and laughter.",
    [
      {"word": "sospiro", "lemma": "sospiro", "pos": "noun", "meaning": "sigh / yearning"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "riso", "lemma": "riso", "pos": "noun", "meaning": "laughter / smiling"}
    ],
    "The quintessential dual emotions of Italian lyric romance: the sigh of passionate longing paired with the laughter of joy."
  ],
  "Sorride il viso": [
    "The face smiles",
    [
      {"word": "Sorride", "lemma": "sorridere", "pos": "verb", "meaning": "smiles (3rd sing. present)"},
      {"word": "il viso", "lemma": "viso", "pos": "noun", "meaning": "the face / visage"}
    ],
    "Boito structures this stanza as a dazzling chiasmus: 'sospiro e riso' is reflected by 'sorride il viso'."
  ],
  "e il cor sospira.": [
    "and the heart sighs.",
    [
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "il cor", "lemma": "core", "pos": "noun", "meaning": "the heart (poetic apocope of cuore/core)"},
      {"word": "sospira", "lemma": "sospirare", "pos": "verb", "meaning": "sighs (3rd sing. present)"}
    ],
    "Completing the chiasmus from line 78; while the face smiles outward, the heart sighs inward with tender longing."
  ],
  "Fra quelle ciglia": [
    "Beneath those eyelashes",
    [
      {"word": "Fra", "lemma": "fra", "pos": "preposition", "meaning": "between / beneath / among"},
      {"word": "quelle", "lemma": "quello", "pos": "adjective", "meaning": "those (feminine plural)"},
      {"word": "ciglia", "lemma": "ciglio", "pos": "noun", "meaning": "eyelashes / brows (irregular feminine plural of ciglio)"}
    ],
    "Fenton gazes deeply into Nannetta's eyes beneath her lashes; 'ciglia' is an irregular feminine collective plural."
  ],
  "vedo due fari": [
    "I see two beacons",
    [
      {"word": "vedo", "lemma": "vedere", "pos": "verb", "meaning": "I see (1st sing. present)"},
      {"word": "due", "lemma": "due", "pos": "adjective", "meaning": "two"},
      {"word": "fari", "lemma": "faro", "pos": "noun", "meaning": "beacons / lighthouses / shining lights (plural)"}
    ],
    "Petrarchan metaphor comparing the beloved's eyes to lighthouses ('fari') guiding the traveler across tempestuous waters."
  ],
  "a meraviglia": [
    "wonderfully",
    [
      {"word": "a meraviglia", "lemma": "a meraviglia", "pos": "idiom", "meaning": "wonderfully / marvelously / to perfection"},
      {"word": "meraviglia", "lemma": "meraviglia", "pos": "noun", "meaning": "marvel / wonder"}
    ],
    "Adverbial idiom 'a meraviglia'; the brightness and purity of her eyes are marvelous to behold."
  ],
  "sereni e chiari.": [
    "serene and clear.",
    [
      {"word": "sereni", "lemma": "sereno", "pos": "adjective", "meaning": "serene / calm / untroubled (masculine plural)"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "chiari", "lemma": "chiaro", "pos": "adjective", "meaning": "clear / bright / luminous (masculine plural)"}
    ],
    "Modifying 'fari'; Fenton finds ultimate tranquility and moral clarity in Nannetta's loving gaze."
  ],
  "Senti, accosta un po' l'orecchio!": [
    "Listen, bring your ear a bit closer!",
    [
      {"word": "Senti", "lemma": "sentire", "pos": "verb", "meaning": "listen / hear (imperative 2nd sing.)"},
      {"word": "accosta", "lemma": "accostare", "pos": "verb", "meaning": "bring close / approach (imperative 2nd sing.)"},
      {"word": "un po'", "lemma": "un po'", "pos": "idiom", "meaning": "a little / a bit (apocope of poco)"},
      {"word": "l'orecchio", "lemma": "orecchio", "pos": "noun", "meaning": "the ear"}
    ],
    "Abrupt shift from lyric sweetness back to farcical eavesdropping; Ford urges Caius to press his ear right up to the screen."
  ],
  "Che patetici lamenti!": [
    "What passionate laments!",
    [
      {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what / such (exclamative)"},
      {"word": "patetici", "lemma": "patetico", "pos": "adjective", "meaning": "passionate / touching / emotional (masculine plural)"},
      {"word": "lamenti", "lemma": "lamento", "pos": "noun", "meaning": "laments / sighs / amorous murmurs (plural)"}
    ],
    "Ford misinterprets the lovers' soft, tender sighs as the amorous pleadings of the lecherous Falstaff wooing Alice."
  ],
  "Là c'è Alice e qua c'è il vecchio": [
    "There is Alice and here is the old",
    [
      {"word": "Là c'è", "lemma": "esserci", "pos": "verb", "meaning": "there is (adverb là + ci + è)"},
      {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (character name)"},
      {"word": "qua c'è", "lemma": "esserci", "pos": "verb", "meaning": "here is (adverb qua + ci + è)"},
      {"word": "il vecchio", "lemma": "vecchio", "pos": "noun", "meaning": "the old man"}
    ],
    "Deictics 'là' and 'qua' convey Ford's mistaken certainty; he is utterly convinced he has cornered Alice and her elderly seducer."
  ],
  "seduttore. Senti! senti!": [
    "seducer. Listen! listen!",
    [
      {"word": "seduttore", "lemma": "seduttore", "pos": "noun", "meaning": "seducer"},
      {"word": "Senti", "lemma": "sentire", "pos": "verb", "meaning": "listen / hear (imperative 2nd sing.)"}
    ],
    "Ford spits out the word 'seduttore' with venomous relish, repeating 'Senti! senti!' as his jealousy boils over."
  ],
  "Essi credon d'esser soli": [
    "They believe they are alone",
    [
      {"word": "Essi", "lemma": "essi", "pos": "pronoun", "meaning": "they (masculine plural subject pronoun)"},
      {"word": "credon", "lemma": "credere", "pos": "verb", "meaning": "they believe / think (3rd pl., apocope of credono)"},
      {"word": "d'esser", "lemma": "essere", "pos": "verb", "meaning": "to be (infinitive with preposition di)"},
      {"word": "soli", "lemma": "solo", "pos": "adjective", "meaning": "alone (masculine plural)"}
    ],
    "Ford gloats in whispered triumph, convinced the couple behind the screen has no inkling that an armed posse surrounds them."
  ],
  "nel loro tenero abbandon.": [
    "in their tender abandon.",
    [
      {"word": "nel loro", "lemma": "loro", "pos": "pronoun", "meaning": "in their (preposition in + article + possessive)"},
      {"word": "tenero", "lemma": "tenero", "pos": "adjective", "meaning": "tender / affectionate"},
      {"word": "abbandon", "lemma": "abbandono", "pos": "noun", "meaning": "abandon / emotional surrender (apocope)"}
    ],
    "Ford sneers at their 'tenero abbandon' (amorous surrender), burning with rage at what he imagines to be his wife's betrayal."
  ],
  "Su quel nido d'usignuoli": [
    "Upon that nest of nightingales",
    [
      {"word": "Su", "lemma": "su", "pos": "preposition", "meaning": "upon / over / on"},
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
      {"word": "nido", "lemma": "nido", "pos": "noun", "meaning": "nest"},
      {"word": "d'usignuoli", "lemma": "usignuolo", "pos": "noun", "meaning": "of nightingales (archaic form of usignolo)"}
    ],
    "Ford sarcastically brands their hiding nook a 'nest of nightingales', mocking the soft cooing coming from behind the screen."
  ],
  "scoppierà fra poco il tuon.": [
    "thunder will explode shortly.",
    [
      {"word": "scoppierà", "lemma": "scoppiare", "pos": "verb", "meaning": "will explode / burst (3rd sing. future)"},
      {"word": "fra poco", "lemma": "fra poco", "pos": "idiom", "meaning": "shortly / in a little while / soon"},
      {"word": "il tuon", "lemma": "tuono", "pos": "noun", "meaning": "the thunder (apocope of tuono)"}
    ],
    "Ford promises catastrophic retribution; ironic counterpoint to Nannetta's earlier lyric line 'L'amor non ode tuon'."
  ],
  "Sento, intendo e vedo chiaro": [
    "I hear, I understand, and I see clearly",
    [
      {"word": "Sento", "lemma": "sentire", "pos": "verb", "meaning": "I hear / perceive (1st sing. present)"},
      {"word": "intendo", "lemma": "intendere", "pos": "verb", "meaning": "I understand / comprehend (1st sing. present)"},
      {"word": "e vedo", "lemma": "vedere", "pos": "verb", "meaning": "and I see (1st sing. present)"},
      {"word": "chiaro", "lemma": "chiaro", "pos": "adverb", "meaning": "clearly"}
    ],
    "Dr. Caius chimes in with pompous arrogance, claiming to see through all female deception with infallible clarity."
  ],
  "delle femmine gl'inganni;": [
    "the deceptions of women;",
    [
      {"word": "delle femmine", "lemma": "femmina", "pos": "noun", "meaning": "of women / of females"},
      {"word": "gl'inganni", "lemma": "inganno", "pos": "noun", "meaning": "the deceptions / tricks (gli + inganni with elision)"}
    ],
    "Caius's misogynistic generalisation ('femmine' rather than 'donne'); Boito emphasizes the doctor's narrow-minded pedantry."
  ],
  "non vorrei, compare caro,": [
    "I would not wish, dear crony,",
    [
      {"word": "non vorrei", "lemma": "volere", "pos": "verb", "meaning": "I would not wish / want (1st sing. conditional)"},
      {"word": "compare", "lemma": "compare", "pos": "noun", "meaning": "crony / gossip / godfather / friend"},
      {"word": "caro", "lemma": "caro", "pos": "adjective", "meaning": "dear"}
    ],
    "Caius addresses Ford condescendingly as 'compare caro', smugly pitying the cuckolded husband."
  ],
  "esser io ne' vostri panni.": [
    "to be in your clothes.",
    [
      {"word": "esser", "lemma": "essere", "pos": "verb", "meaning": "to be (apocope of essere)"},
      {"word": "io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
      {"word": "ne'", "lemma": "in", "pos": "preposition", "meaning": "in the (poetic form of nei)"},
      {"word": "vostri", "lemma": "vostro", "pos": "pronoun", "meaning": "your (possessive plural)"},
      {"word": "essere nei panni di", "lemma": "essere nei panni di", "pos": "idiom", "meaning": "to be in someone's shoes"}
    ],
    "Idiom 'essere nei panni di qualcuno' (to be in someone's shoes); glorious dramatic irony since Falstaff is literally suffocating in dirty clothes ('panni')!"
  ],
  "Chi non sa ridur la moglie": [
    "Whoever does not know how to bring his wife",
    [
      {"word": "Chi", "lemma": "chi", "pos": "pronoun", "meaning": "whoever / he who"},
      {"word": "non sa", "lemma": "sapere", "pos": "verb", "meaning": "does not know how to (3rd sing. present)"},
      {"word": "ridur", "lemma": "ridurre", "pos": "verb", "meaning": "to bring / reduce / lead (apocope of ridurre)"},
      {"word": "la moglie", "lemma": "moglie", "pos": "noun", "meaning": "the wife"}
    ],
    "Caius pontificates on marital authority, blaming Ford for being too weak to keep his wife under strict subjection."
  ],
  "co' le buone alla ragion,": [
    "by gentle means to reason,",
    [
      {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with (apocope of con / con le)"},
      {"word": "le buone", "lemma": "buono", "pos": "adjective", "meaning": "gentle means / kindness"},
      {"word": "alla ragion", "lemma": "ragione", "pos": "noun", "meaning": "to reason / sense (apocope of ragione)"},
      {"word": "con le buone", "lemma": "con le buone", "pos": "idiom", "meaning": "by peaceful/gentle means"}
    ],
    "The expression 'con le buone' refers to gentle persuasion or mild treatment, which Caius deems insufficient for unruly wives."
  ],
  "dovrà vincer le sue voglie": [
    "will have to overcome her whims",
    [
      {"word": "dovrà", "lemma": "dovere", "pos": "verb", "meaning": "will have to / must (3rd sing. future)"},
      {"word": "vincer", "lemma": "vincere", "pos": "verb", "meaning": "to conquer / overcome (apocope of vincere)"},
      {"word": "le sue", "lemma": "suo", "pos": "pronoun", "meaning": "her (possessive fem. pl.)"},
      {"word": "voglie", "lemma": "voglia", "pos": "noun", "meaning": "whims / cravings / desires (plural)"}
    ],
    "Caius advocates forceful subjugation of feminine desires ('voglie'), asserting tyrannical domestic control."
  ],
  "co' la frusta e col baston.": [
    "with the whip and with the stick.",
    [
      {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with (apocope of con)"},
      {"word": "la frusta", "lemma": "frusta", "pos": "noun", "meaning": "the whip / lash"},
      {"word": "e col", "lemma": "con", "pos": "preposition", "meaning": "and with the (con + il)"},
      {"word": "baston", "lemma": "bastone", "pos": "noun", "meaning": "stick / cudgel (apocope of bastone)"}
    ],
    "Caius's archaic, brutal prescription of corporal punishment ('frusta e baston') makes him thoroughly ridiculous and unsympathetic."
  ],
  "Vieni qua, fatti più presso;": [
    "Come here, draw closer;",
    [
      {"word": "Vieni qua", "lemma": "venire", "pos": "verb", "meaning": "come here (imperative 2nd sing. + adverb)"},
      {"word": "fatti", "lemma": "farsi", "pos": "verb", "meaning": "make yourself / draw (imperative 2nd sing. + reflexive ti)"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more"},
      {"word": "presso", "lemma": "presso", "pos": "adverb", "meaning": "near / close"}
    ],
    "Bardolfo whispers excitedly to Ford, gesturing for him to creep closer to the screen to eavesdrop on the lovers."
  ],
  "vieni a udir gli ascosi amanti.": [
    "come to hear the hidden lovers.",
    [
      {"word": "vieni", "lemma": "venire", "pos": "verb", "meaning": "come (imperative 2nd sing.)"},
      {"word": "a udir", "lemma": "udire", "pos": "verb", "meaning": "to hear / listen to (apocope of udire)"},
      {"word": "gli ascosi", "lemma": "ascoso", "pos": "adjective", "meaning": "the hidden / concealed (poetic past participle of ascondere)"},
      {"word": "amanti", "lemma": "amante", "pos": "noun", "meaning": "lovers (plural)"}
    ],
    "Poetic adjective 'ascosi' (concealed); Bardolfo relishes the titillating spectacle of tracking down the secret lovers."
  ],
  "S'ode un murmure sommesso": [
    "A subdued murmur is heard",
    [
      {"word": "S'ode", "lemma": "udire", "pos": "verb", "meaning": "is heard (passivizing 'si' + 3rd sing. present ode)"},
      {"word": "un murmure", "lemma": "murmure", "pos": "noun", "meaning": "a murmur / whisper (Latinate poetic variant of mormorio)"},
      {"word": "sommesso", "lemma": "sommesso", "pos": "adjective", "meaning": "subdued / hushed / low"}
    ],
    "Boito uses Latinate 'murmure'; Bardolfo listens intently to the delicate, breathless whispering filtering from behind the screen."
  ],
  "qual di tortore tubanti.": [
    "like that of cooing turtledoves.",
    [
      {"word": "qual", "lemma": "quale", "pos": "adverb", "meaning": "like / as (apocope of quale)"},
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
      {"word": "tortore", "lemma": "tortora", "pos": "noun", "meaning": "turtledoves (plural)"},
      {"word": "tubanti", "lemma": "tubare", "pos": "adjective", "meaning": "cooing (present participle plural of tubare)"}
    ],
    "Poetic simile comparing the lovers' billing and cooing to turtledoves ('tortore tubanti'), standard emblem of romantic devotion."
  ],
  "È un fruscio che par di gonna,": [
    "It is a rustle that seems of a skirt,",
    [
      {"word": "È", "lemma": "essere", "pos": "verb", "meaning": "it is (3rd sing. present)"},
      {"word": "un fruscio", "lemma": "fruscio", "pos": "noun", "meaning": "a rustle / swish"},
      {"word": "che par", "lemma": "parere", "pos": "verb", "meaning": "that seems / appears (apocope of pare)"},
      {"word": "gonna", "lemma": "gonna", "pos": "noun", "meaning": "skirt / gown"}
    ],
    "Bardolfo picks up the sound of fabric rustling ('fruscio di gonna'), which convinces the eavesdroppers that a woman is moving behind the screen."
  ]
}

def validate_and_save():
    # Load input lines
    with open('scripts/falstaff_act2_sc2_partD.json', 'r', encoding='utf-8') as f:
        input_data = json.load(f)
    
    input_lines = [item['original'] for item in input_data]
    print(f"Total lines in input: {len(input_lines)}")
    assert len(input_lines) == 106, f"Expected 106 lines, got {len(input_lines)}"
    
    curated_keys = list(CURATED_DATA.keys())
    print(f"Total lines in curated dataset: {len(curated_keys)}")
    assert len(curated_keys) == 106, f"Expected 106 curated keys, got {len(curated_keys)}"
    
    # Check that every input line is in CURATED_DATA
    missing_keys = set(input_lines) - set(curated_keys)
    extra_keys = set(curated_keys) - set(input_lines)
    if missing_keys:
        print("ERROR: Missing keys:", missing_keys)
        sys.exit(1)
    if extra_keys:
        print("ERROR: Extra keys:", extra_keys)
        sys.exit(1)
        
    # Validate each entry
    for idx, (orig, val) in enumerate(CURATED_DATA.items()):
        assert isinstance(val, list), f"Value for '{orig}' must be a list"
        assert len(val) == 3, f"Value for '{orig}' must have 3 elements, got {len(val)}"
        literal, tokens, note = val
        
        # Check literal
        assert isinstance(literal, str) and literal.strip(), f"Literal for '{orig}' must be a non-empty string"
        
        # Check capitalization rule
        orig_first_alpha = next((c for c in orig if c.isalpha()), None)
        lit_first_alpha = next((c for c in literal if c.isalpha()), None)
        if orig_first_alpha and orig_first_alpha.isupper():
            assert lit_first_alpha and lit_first_alpha.isupper(), (
                f"Capitalization mismatch for '{orig}': original starts upper ({orig_first_alpha}), "
                f"literal must start upper ({lit_first_alpha}): '{literal}'"
            )
        
        # Check tokens
        assert isinstance(tokens, list), f"Tokens for '{orig}' must be a list"
        assert 1 <= len(tokens) <= 5, f"Tokens for '{orig}' must have 1-5 items, got {len(tokens)}"
        for tok in tokens:
            assert isinstance(tok, dict), f"Token in '{orig}' must be a dict"
            for required_k in ("word", "lemma", "pos", "meaning"):
                assert required_k in tok, f"Missing key '{required_k}' in token {tok} of '{orig}'"
            pos = tok["pos"]
            assert pos in ALLOWED_POS, f"Invalid POS '{pos}' in token {tok} of '{orig}'. Allowed: {ALLOWED_POS}"
            
        # Check note
        assert note is None or (isinstance(note, str) and note.strip()), (
            f"Note for '{orig}' must be null or non-empty string"
        )
        
    print("All 106 lines passed validation perfectly!")
    
    # Write output file
    output_path = 'scripts/falstaff_curated_a2_sc2_partD.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(CURATED_DATA, f, indent=2, ensure_ascii=False)
        f.write('\n')
        
    print(f"Successfully saved curated dataset to {output_path}")

if __name__ == '__main__':
    validate_and_save()

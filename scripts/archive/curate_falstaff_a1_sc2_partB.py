#!/usr/bin/env python3
import json
import sys

# Allowed POS tags
ALLOWED_POS = {
    "noun", "verb", "adjective", "adverb", "pronoun",
    "preposition", "conjunction", "interjection", "particle", "idiom"
}

curated_data = {
  "vedremo svampar.": [
    "we shall see vanish into smoke.",
    [
      {"word": "vedremo", "lemma": "vedere", "pos": "verb", "meaning": "we shall see (1st person plural future)"},
      {"word": "svampar", "lemma": "svampare", "pos": "verb", "meaning": "to vanish into smoke / evaporate / flare up"}
    ],
    "Meg concludes the women's ensemble from the previous strophe: '[e il suo fumo] vedremo svampar' ('[and his pride/smoke] we shall see vanish in smoke'). 'Svampar' is an apocopic infinitive of 'svampare' (to evaporate, flare up, or go up in smoke)."
  ],
  "Se ordisci una burla,": [
    "If you plot a prank,",
    [
      {"word": "Se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "ordisci", "lemma": "ordire", "pos": "verb", "meaning": "you weave / you plot (2nd person singular present)"},
      {"word": "burla", "lemma": "burla", "pos": "noun", "meaning": "prank / practical joke / trick"}
    ],
    "Nannetta eagerly chimes in to join her mother Alice's scheme. 'Ordisci' (from 'ordire', literally to warp a loom, metaphorically to hatch or plot an intrigue) introduces the conditional clause."
  ],
  "vo' anch'io la mia parte.": [
    "I too want my share.",
    [
      {"word": "vo'", "lemma": "volere", "pos": "verb", "meaning": "I want (apocope of 'voglio')"},
      {"word": "anch'io", "lemma": "anch'io", "pos": "pronoun", "meaning": "I too / I as well"},
      {"word": "parte", "lemma": "parte", "pos": "noun", "meaning": "part / share / role"}
    ],
    "'Vo'' is the poetic apocopic form of 'voglio' (first-person singular of 'volere'). 'Anch'io' is the elision of 'anche io'. Italian determiner syntax: 'la mia parte' = 'my share'."
  ],
  "Conviene condurla": [
    "It is necessary to conduct it",
    [
      {"word": "Conviene", "lemma": "convenire", "pos": "verb", "meaning": "it is necessary / it is fitting (impersonal)"},
      {"word": "condurla", "lemma": "condurre", "pos": "verb", "meaning": "to conduct it / carry it out (condurre + clitic la)"},
      {"word": "la", "lemma": "la", "pos": "pronoun", "meaning": "it (direct object clitic referring to 'la burla')"}
    ],
    "Impersonal 'conviene' ('it is fitting/necessary') governs the infinitive 'condurre' combined with the enclitic direct object pronoun 'la' referring back to 'la burla' (the prank)."
  ],
  "con senno e con arte.": [
    "with sense and with skill.",
    [
      {"word": "senno", "lemma": "senno", "pos": "noun", "meaning": "sense / good judgment / wisdom"},
      {"word": "arte", "lemma": "arte", "pos": "noun", "meaning": "art / craft / skill / cunning"},
      {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"}
    ],
    "Nannetta warns that their practical joke must be engineered with intelligence ('senno') and theatrical craftsmanship ('arte') so Falstaff will not suspect a thing."
  ],
  "L'agguato ov'ei sdrucciola": [
    "The trap wherein he slips",
    [
      {"word": "agguato", "lemma": "agguato", "pos": "noun", "meaning": "ambush / trap / snare"},
      {"word": "ov'ei", "lemma": "ove", "pos": "adverb", "meaning": "where he / wherein he (ove + ei)"},
      {"word": "sdrucciola", "lemma": "sdrucciolare", "pos": "verb", "meaning": "slips / slides / stumbles (3rd person singular present)"}
    ],
    "'Ov'ei' combines the literary relative adverb 'ove' ('where') with the archaic subject pronoun 'ei' ('he'). 'Sdrucciola' (from 'sdrucciolare', to slip or slide) provides a playful dactylic (sdrucciolo) cadence."
  ],
  "convien ch'ei non scerna.": [
    "it is necessary that he not perceive.",
    [
      {"word": "convien", "lemma": "convenire", "pos": "verb", "meaning": "it is necessary / it behoves (apocope of 'conviene')"},
      {"word": "ch'ei", "lemma": "che", "pos": "conjunction", "meaning": "that he (che + ei)"},
      {"word": "scerna", "lemma": "scernere", "pos": "verb", "meaning": "discern / perceive / see through (3rd person present subjunctive)"}
    ],
    "'Convien' is the apocopic form of 'conviene', governing the present subjunctive 'scerna' (from 'scernere', an elevated verb meaning to discern or see through a trick)."
  ],
  "Già prese una lucciola": [
    "Already he took a firefly",
    [
      {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
      {"word": "prese", "lemma": "prendere", "pos": "verb", "meaning": "he took (passato remoto 3rd person singular)"},
      {"word": "lucciola", "lemma": "lucciola", "pos": "noun", "meaning": "firefly / glow-worm"}
    ],
    "Beginning of the quintessential Italian idiom 'prendere una lucciola per una lanterna' (to mistake a firefly for a lantern, i.e. to be thoroughly deceived or commit a huge blunder)."
  ],
  "per una lanterna.": [
    "for a lantern.",
    [
      {"word": "per", "lemma": "per", "pos": "preposition", "meaning": "for / in place of"},
      {"word": "lanterna", "lemma": "lanterna", "pos": "noun", "meaning": "lantern / lamp"},
      {"word": "una", "lemma": "uno", "pos": "adjective", "meaning": "a / an (indefinite article)"}
    ],
    "Completes the idiom 'prendere lucciole per lanterne'. Nannetta points out that Falstaff has already made a fool of himself by mistaking common courtesy for amorous passion."
  ],
  "Perciò non dubito": [
    "Therefore I do not doubt",
    [
      {"word": "Perciò", "lemma": "perciò", "pos": "adverb", "meaning": "therefore / for that reason"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "dubito", "lemma": "dubitare", "pos": "verb", "meaning": "I doubt (1st person singular present)"}
    ],
    "Nannetta expresses complete confidence: because Falstaff is so vain and gullible, their scheme is guaranteed to work. 'Dubito' forms a proparoxytone (sdrucciolo) rhyme with 'subito'."
  ],
  "che il gioco rïesca.": [
    "that the game will succeed.",
    [
      {"word": "gioco", "lemma": "gioco", "pos": "noun", "meaning": "game / trick / scheme"},
      {"word": "rïesca", "lemma": "riuscire", "pos": "verb", "meaning": "may succeed (3rd person singular present subjunctive)"},
      {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"}
    ],
    "'Rïesca' (from 'riuscire', to succeed) has a poetic diaeresis on the 'ï' to count as two separate syllables (rï-es-ca) in Boito's metrical verse."
  ],
  "Bisogna offrir l'esca,": [
    "We must offer the bait,",
    [
      {"word": "Bisogna", "lemma": "bisognare", "pos": "verb", "meaning": "it is necessary / one must (impersonal)"},
      {"word": "offrir", "lemma": "offrire", "pos": "verb", "meaning": "to offer (apocope of 'offrire')"},
      {"word": "esca", "lemma": "esca", "pos": "noun", "meaning": "bait / lure / enticement"}
    ],
    "'Bisogna offrir l'esca' uses fishing/hunting imagery: they must set an alluring trap (Mrs. Quickly's secret message) to lure Falstaff in."
  ],
  "poi coglierlo subito.": [
    "then catch him immediately.",
    [
      {"word": "poi", "lemma": "poi", "pos": "adverb", "meaning": "then / afterwards"},
      {"word": "coglierlo", "lemma": "cogliere", "pos": "verb", "meaning": "to catch him / seize him (cogliere + clitic lo)"},
      {"word": "subito", "lemma": "subito", "pos": "adverb", "meaning": "immediately / at once"}
    ],
    "'Coglierlo' combines 'cogliere' (to catch, snare, surprise) with enclitic direct object pronoun 'lo' (him). 'Subito' completes the sdrucciolo rhyme with 'dubito'."
  ],
  "E se i scillinguagnoli": [
    "And if our tongues",
    [
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "scillinguagnoli", "lemma": "scilinguagnolo", "pos": "noun", "meaning": "tongue-strings / loosened tongues / gift of the gab"},
      {"word": "i", "lemma": "il", "pos": "adjective", "meaning": "the (masculine plural article)"}
    ],
    "'Scilinguagnolo' (here spelled 'scillinguagnoli') is the frenulum of the tongue, famous in the Italian idiom 'sciogliere lo scilinguagnolo' (to loosen one's tongue, chatter nonstop). Note the archaic/poetic article 'i' instead of 'gli'."
  ],
  "sapremo adoprar,": [
    "we know how to use,",
    [
      {"word": "sapremo", "lemma": "sapere", "pos": "verb", "meaning": "we will know how (1st person plural future)"},
      {"word": "adoprar", "lemma": "adoperare", "pos": "verb", "meaning": "to use / employ (apocope of 'adoperare')"}
    ],
    "'Sapremo adoprar' (future of 'sapere' expressing capability/know-how + apocopated infinitive of 'adoperare'). Rhymes with 'adoprar' / 'sudar'."
  ],
  "vedremo a rigagnoli": [
    "we shall see in rivulets",
    [
      {"word": "vedremo", "lemma": "vedere", "pos": "verb", "meaning": "we shall see (1st person plural future)"},
      {"word": "rigagnoli", "lemma": "rigagnolo", "pos": "noun", "meaning": "rivulets / trickles / streams"},
      {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "in / in the manner of"}
    ],
    "'A rigagnoli' is an adverbial locution meaning 'in streams or trickles'. Sdrucciolo rhyme with 'scillinguagnoli'."
  ],
  "quell'orco sudar.": [
    "that ogre sweat.",
    [
      {"word": "quell'", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative adjective)"},
      {"word": "orco", "lemma": "orco", "pos": "noun", "meaning": "ogre / monster / beast"},
      {"word": "sudar", "lemma": "sudare", "pos": "verb", "meaning": "to sweat (apocopic infinitive)"}
    ],
    "Accusative with infinitive dependent on 'vedremo': 'vedremo quell'orco sudar' ('we shall see that ogre sweat'). Nannetta playfully brands the corpulent Falstaff an 'orco' (ogre)."
  ],
  "Un flutto in tempesta": [
    "A wave in a storm",
    [
      {"word": "flutto", "lemma": "flutto", "pos": "noun", "meaning": "wave / surge / billow"},
      {"word": "tempesta", "lemma": "tempesta", "pos": "noun", "meaning": "storm / tempest"},
      {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in"}
    ],
    "Mrs. Quickly launches into a comical mock-heroic maritime metaphor describing Falstaff as a beached sea monster."
  ],
  "gittò sulla rena": [
    "cast upon the sand",
    [
      {"word": "gittò", "lemma": "gittare", "pos": "verb", "meaning": "cast / threw / flung (passato remoto 3rd person singular)"},
      {"word": "sulla", "lemma": "su", "pos": "preposition", "meaning": "upon the / onto the (su + la)"},
      {"word": "rena", "lemma": "rena", "pos": "noun", "meaning": "sand / shore (Tuscan/poetic for sabbia)"}
    ],
    "'Gittò' is the archaic/poetic variant of 'gettò' (cast, hurled). 'Rena' (from Latin 'arena') is classic Tuscan and poetic Italian for beach sand."
  ],
  "di Windsor codesta": [
    "of Windsor this",
    [
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
      {"word": "Windsor", "lemma": "Windsor", "pos": "noun", "meaning": "Windsor (proper noun)"},
      {"word": "codesta", "lemma": "codesto", "pos": "adjective", "meaning": "this / that near you (demonstrative adjective)"}
    ],
    "'Codesta' is the specific Tuscan demonstrative adjective designating something near the addressee, modifying 'vorace balena' in the following line."
  ],
  "vorace balena.": [
    "voracious whale.",
    [
      {"word": "vorace", "lemma": "vorace", "pos": "adjective", "meaning": "voracious / gluttonous / rapacious"},
      {"word": "balena", "lemma": "balena", "pos": "noun", "meaning": "whale"}
    ],
    "Completes Quickly's comic marine imagery: Falstaff is a ravenous whale ('vorace balena') stranded on the sandy shores of Windsor."
  ],
  "Ma qui non ha spazio": [
    "But here he has no room",
    [
      {"word": "Ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
      {"word": "qui", "lemma": "qui", "pos": "adverb", "meaning": "here"},
      {"word": "spazio", "lemma": "spazio", "pos": "noun", "meaning": "space / room"},
      {"word": "ha", "lemma": "avere", "pos": "verb", "meaning": "has (3rd person singular present)"}
    ],
    "'Non ha spazio' (he has no room). Mrs. Quickly notes that Windsor provides no room for Falstaff to expand his girth or indulge his gluttony."
  ],
  "da farsi più pingue;": [
    "to make himself fatter;",
    [
      {"word": "farsi", "lemma": "farsi", "pos": "verb", "meaning": "to make oneself / become (fare + reflexive si)"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more"},
      {"word": "pingue", "lemma": "pingue", "pos": "adjective", "meaning": "fat / stout / obese (Latinate pinguis)"}
    ],
    "Purpose infinitive clause 'da farsi' ('to make himself'). 'Pingue' is a Latinate, high-register poetic adjective for fat/fleshy, used with comic irony."
  ],
  "ne fecer già strazio": [
    "already tore him to pieces",
    [
      {"word": "ne", "lemma": "ne", "pos": "pronoun", "meaning": "of him / of it (pronominal clitic)"},
      {"word": "fecer", "lemma": "fare", "pos": "verb", "meaning": "they made (apocope of 'fecero', passato remoto)"},
      {"word": "strazio", "lemma": "strazio", "pos": "noun", "meaning": "havoc / slaughter / carnage"},
      {"word": "già", "lemma": "già", "pos": "adverb", "meaning": "already"}
    ],
    "'Fare strazio di' is an idiom meaning to butcher, tear apart, or make mincemeat of. 'Fecer' is the poetic apocope of 'fecero', and 'ne' refers back to Falstaff."
  ],
  "le vostre tre lingue.": [
    "your three tongues.",
    [
      {"word": "vostre", "lemma": "vostro", "pos": "adjective", "meaning": "your (plural possessive adjective)"},
      {"word": "tre", "lemma": "tre", "pos": "adjective", "meaning": "three"},
      {"word": "lingue", "lemma": "lingua", "pos": "noun", "meaning": "tongues"}
    ],
    "The subject of 'fecer già strazio': the sharp, articulate tongues of the Windsor women. Italian determiner syntax: 'le vostre tre lingue'."
  ],
  "Tre lingue più allegre": [
    "Three tongues merrier",
    [
      {"word": "Tre", "lemma": "tre", "pos": "adjective", "meaning": "three"},
      {"word": "lingue", "lemma": "lingua", "pos": "noun", "meaning": "tongues"},
      {"word": "allegre", "lemma": "allegro", "pos": "adjective", "meaning": "merry / cheerful / lively"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more"}
    ],
    "Quickly compliments the women's razor-sharp banter with musical and ornithological similes ('più allegre d'un trillo di nacchere')."
  ],
  "d'un trillo di nacchere,": [
    "than a rattle of castanets,",
    [
      {"word": "trillo", "lemma": "trillo", "pos": "noun", "meaning": "trill / rattling chime"},
      {"word": "nacchere", "lemma": "nacchera", "pos": "noun", "meaning": "castanets"},
      {"word": "d'un", "lemma": "di", "pos": "preposition", "meaning": "than a / of a (di + un)"}
    ],
    "'Nacchere' are castanets; 'un trillo di nacchere' evokes rapid rhythmic clicking, comparing their chattering speed to percussive castanets."
  ],
  "che spargon più chiacchiere": [
    "that scatter more chatter",
    [
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which (relative pronoun)"},
      {"word": "spargon", "lemma": "spargere", "pos": "verb", "meaning": "scatter / spread (apocope of 'spargono')"},
      {"word": "chiacchiere", "lemma": "chiacchiera", "pos": "noun", "meaning": "chatter / gossip / prattle"}
    ],
    "'Spargon' is the apocopic 3rd person plural present of 'spargere' (to scatter, broadcast). 'Chiacchiere' means playful chatter or gossip."
  ],
  "di sei cingallegre.": [
    "than six titmice.",
    [
      {"word": "sei", "lemma": "sei", "pos": "adjective", "meaning": "six"},
      {"word": "cingallegre", "lemma": "cinciallegra", "pos": "noun", "meaning": "titmice / chickadees (variant of cinciallegre)"},
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "than (comparative preposition)"}
    ],
    "'Cingallegre' is Boito's dialectal/archaic variant of 'cinciallegre' (great tits / chickadees), known for their tireless chirping. Creates a triple sdrucciolo rhyme with 'nacchere' and 'chiacchiere'."
  ],
  "Tal sempre s'esilari": [
    "Thus may always rejoice",
    [
      {"word": "Tal", "lemma": "tale", "pos": "adjective", "meaning": "such / so / in such manner (apocope of tale)"},
      {"word": "sempre", "lemma": "sempre", "pos": "adverb", "meaning": "always"},
      {"word": "s'esilari", "lemma": "esilararsi", "pos": "verb", "meaning": "may cheer / gladden itself (present subjunctive 3rd person)"}
    ],
    "Optative subjunctive 's'esilari' (from 'esilarare/esilararsi', to cheer up, exhilarate). 'Tal' (apocope of 'tale') acts adverbially ('thus / in such a manner')."
  ],
  "quel bel cinguettar.": [
    "that lovely chirping.",
    [
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative)"},
      {"word": "bel", "lemma": "bello", "pos": "adjective", "meaning": "lovely / beautiful / fine (apocope of bello)"},
      {"word": "cinguettar", "lemma": "cinguettare", "pos": "noun", "meaning": "chirping / twittering (substantivized infinitive)"}
    ],
    "'Cinguettar' is the substantivized apocopic infinitive of 'cinguettare' (to chirp like birds, to twitter, to chat amiably). Subject of 's'esilari'."
  ],
  "Così soglion l'ilari": [
    "Thus are wont the cheerful",
    [
      {"word": "Così", "lemma": "così", "pos": "adverb", "meaning": "thus / so"},
      {"word": "soglion", "lemma": "solere", "pos": "verb", "meaning": "are accustomed / are wont (apocope of 'sogliono')"},
      {"word": "l'ilari", "lemma": "ilare", "pos": "adjective", "meaning": "the cheerful / the merry (plural adjective with elided article)"}
    ],
    "'Soglion' is the apocopic 3rd person plural of 'solere' (to be accustomed / wont to). 'L'ilari' modifies 'comari' in the next line, echoing Shakespeare's title 'The Merry Wives'."
  ],
  "comari ciarlar.": [
    "wives to chatter.",
    [
      {"word": "comari", "lemma": "comare", "pos": "noun", "meaning": "wives / gossips / neighbors"},
      {"word": "ciarlar", "lemma": "ciarlare", "pos": "verb", "meaning": "to chatter / to prattle (apocopic infinitive)"}
    ],
    "'Comari' translates Shakespeare's 'gossips' or 'merry wives'. 'Ciarlar' is an apocopic infinitive dependent on 'soglion': 'Così soglion l'ilari comari ciarlar' ('Thus are the merry wives wont to chatter')."
  ],
  "Mr. Ford, Dr. Cajus, Fenton, Bardolfo, Pistola entrano da destra,": [
    "Mr. Ford, Dr. Caius, Fenton, Bardolfo, Pistol enter from the right,",
    [
      {"word": "entrano", "lemma": "entrare", "pos": "verb", "meaning": "they enter (3rd person plural present)"},
      {"word": "destra", "lemma": "destra", "pos": "noun", "meaning": "right / stage right"},
      {"word": "da", "lemma": "da", "pos": "preposition", "meaning": "from"}
    ],
    "Stage direction indicating the entrance of the male faction from stage right as the women withdraw."
  ],
  "mentre le Donne escono da sinistra.": [
    "while the Women exit from the left.",
    [
      {"word": "mentre", "lemma": "mentre", "pos": "conjunction", "meaning": "while / whilst"},
      {"word": "Donne", "lemma": "donna", "pos": "noun", "meaning": "women"},
      {"word": "escono", "lemma": "uscire", "pos": "verb", "meaning": "they exit / go out (3rd person plural present)"},
      {"word": "sinistra", "lemma": "sinistra", "pos": "noun", "meaning": "left / stage left"}
    ],
    "Stage direction: the women exit stage left, maintaining the strict comic dichotomy between the two simultaneous conspiracies against Falstaff."
  ],
  "Ford nel centro, Pistola al suo fianco destro,": [
    "Ford in the center, Pistol at his right side,",
    [
      {"word": "centro", "lemma": "centro", "pos": "noun", "meaning": "center"},
      {"word": "fianco", "lemma": "fianco", "pos": "noun", "meaning": "side / flank"},
      {"word": "destro", "lemma": "destro", "pos": "adjective", "meaning": "right"}
    ],
    "Stage direction specifying scenic blocking: Ford stands center stage, flanked on either side by Falstaff's treacherous former henchmen."
  ],
  "Bardolfo al suo fianco sinistro, Fenton e il Dr. Cajus dietro Ford.": [
    "Bardolfo at his left side, Fenton and Dr. Caius behind Ford.",
    [
      {"word": "fianco", "lemma": "fianco", "pos": "noun", "meaning": "side / flank"},
      {"word": "sinistro", "lemma": "sinistro", "pos": "adjective", "meaning": "left"},
      {"word": "dietro", "lemma": "dietro", "pos": "preposition", "meaning": "behind"}
    ],
    "Stage direction detailing the menacing physical encirclement of Ford by the agitators, each trying to whisper in his ear."
  ],
  "Tutti in gruppo parlando a Ford a bassa voce e brontolando.": [
    "All in a group speaking to Ford in a low voice and grumbling.",
    [
      {"word": "parlando", "lemma": "parlare", "pos": "verb", "meaning": "speaking / talking (gerund)"},
      {"word": "a bassa voce", "lemma": "a bassa voce", "pos": "idiom", "meaning": "in a low voice / in an undertone"},
      {"word": "brontolando", "lemma": "brontolare", "pos": "verb", "meaning": "grumbling / muttering (gerund)"}
    ],
    "Stage direction establishing the conspiratorial, buzzing vocal texture of the male ensemble, whispering darkly to inflame Ford's jealousy."
  ],
  "È un ribaldo, un furbo, un ladro,": [
    "He is a rogue, a trickster, a thief,",
    [
      {"word": "È", "lemma": "essere", "pos": "verb", "meaning": "he is (3rd person singular present)"},
      {"word": "ribaldo", "lemma": "ribaldo", "pos": "noun", "meaning": "rogue / scoundrel / ruffian"},
      {"word": "furbo", "lemma": "furbo", "pos": "noun", "meaning": "trickster / sly dog / cunning cheat"},
      {"word": "ladro", "lemma": "ladro", "pos": "noun", "meaning": "thief / robber"}
    ],
    "Dr. Caius bursts out with his catalog of epithets against Falstaff, resuming his violent indignation from Act 1 Scene 1."
  ],
  "un furfante, un turco, un vandalo;": [
    "a scoundrel, a Turk, a vandal;",
    [
      {"word": "furfante", "lemma": "furfante", "pos": "noun", "meaning": "scoundrel / knave / villain"},
      {"word": "turco", "lemma": "turco", "pos": "noun", "meaning": "Turk / brute / barbarian"},
      {"word": "vandalo", "lemma": "vandalo", "pos": "noun", "meaning": "vandal / destroyer / barbarian"}
    ],
    "In traditional Italian idiom, 'un turco' or 'un vandalo' designates an unprincipled brute devoid of civility or pity. Sdrucciolo rhyme with 'scandalo'."
  ],
  "l'altro dì mandò a soqquadro": [
    "the other day he threw into turmoil",
    [
      {"word": "altro", "lemma": "altro", "pos": "adjective", "meaning": "other"},
      {"word": "dì", "lemma": "dì", "pos": "noun", "meaning": "day (poetic/archaic for giorno)"},
      {"word": "mandò a soqquadro", "lemma": "mandare a soqquadro", "pos": "idiom", "meaning": "threw into turmoil / turned upside down / ransacked"},
      {"word": "soqquadro", "lemma": "soqquadro", "pos": "noun", "meaning": "turmoil / chaos / disarray"}
    ],
    "'L'altro dì' means 'the other day'. The idiom 'mandare a soqquadro' means to turn completely upside down, ransack, or wreak chaos upon."
  ],
  "la mia casa e fu uno scandalo.": [
    "my house and it was a scandal.",
    [
      {"word": "casa", "lemma": "casa", "pos": "noun", "meaning": "house / home"},
      {"word": "fu", "lemma": "essere", "pos": "verb", "meaning": "it was (passato remoto 3rd person singular)"},
      {"word": "scandalo", "lemma": "scandalo", "pos": "noun", "meaning": "scandal / outrage"}
    ],
    "Caius reminds Ford of Falstaff's violent break-in at his home. 'Scandalo' completes the sdrucciolo rhyme with 'vandalo'."
  ],
  "Se un processo oggi gl'intavolo": [
    "If a lawsuit today I initiate against him",
    [
      {"word": "processo", "lemma": "processo", "pos": "noun", "meaning": "trial / lawsuit / prosecution"},
      {"word": "intavolo", "lemma": "intavolare", "pos": "verb", "meaning": "I initiate / table / set in motion (1st person singular present)"},
      {"word": "gl'", "lemma": "gli", "pos": "pronoun", "meaning": "against him / to him (dative clitic gli elided)"},
      {"word": "oggi", "lemma": "oggi", "pos": "adverb", "meaning": "today"}
    ],
    "'Intavolare un processo' is an Italian legal idiom meaning to institute legal proceedings or file formal charges. 'Gl'' is the elided dative pronoun 'gli'."
  ],
  "sconterà le sue rapine.": [
    "he will pay for his robberies.",
    [
      {"word": "sconterà", "lemma": "scontare", "pos": "verb", "meaning": "he will pay for / expiate / serve time for (3rd person singular future)"},
      {"word": "sue", "lemma": "suo", "pos": "adjective", "meaning": "his (possessive adjective)"},
      {"word": "rapine", "lemma": "rapina", "pos": "noun", "meaning": "robberies / plunderings / thefts"}
    ],
    "'Scontare' means to expiate, serve a sentence, or pay the penalty for a crime. Italian determiner syntax: 'le sue rapine' = 'his robberies'."
  ],
  "Ma la sua più degna fine": [
    "But his most worthy end",
    [
      {"word": "degna", "lemma": "degno", "pos": "adjective", "meaning": "worthy / fitting / deserved"},
      {"word": "fine", "lemma": "fine", "pos": "noun", "meaning": "end / fate / demise"},
      {"word": "sua", "lemma": "suo", "pos": "adjective", "meaning": "his (possessive adjective)"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "most / more"}
    ],
    "Relative superlative 'la sua più degna fine' ('his most deserved end'). Caius moves from legal justice to apocalyptic damnation."
  ],
  "sia d'andare in man del diavolo.": [
    "may be to go into the hands of the devil.",
    [
      {"word": "sia", "lemma": "essere", "pos": "verb", "meaning": "may it be / let it be (present subjunctive 3rd person singular)"},
      {"word": "man", "lemma": "mano", "pos": "noun", "meaning": "hands / clutches (apocope of mano)"},
      {"word": "diavolo", "lemma": "diavolo", "pos": "noun", "meaning": "devil"},
      {"word": "andare", "lemma": "andare", "pos": "verb", "meaning": "to go"}
    ],
    "Subjunctive of imprecation: 'sia d'andare in man del diavolo' ('let it be to fall into the clutches of the devil'). 'Man' is the apocopic form of 'mano'."
  ],
  "E quei due che avete accanto": [
    "And those two whom you have beside you",
    [
      {"word": "quei", "lemma": "quello", "pos": "adjective", "meaning": "those (demonstrative adjective)"},
      {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two"},
      {"word": "avete", "lemma": "avere", "pos": "verb", "meaning": "you have (2nd person plural present)"},
      {"word": "accanto", "lemma": "accanto", "pos": "adverb", "meaning": "beside / at your side"}
    ],
    "Caius points suspicion directly at Bardolfo and Pistola, warning Ford that they are just as untrustworthy as Falstaff."
  ],
  "gente sono di sua tribù,": [
    "are people of his tribe,",
    [
      {"word": "gente", "lemma": "gente", "pos": "noun", "meaning": "people / folk"},
      {"word": "sono", "lemma": "essere", "pos": "verb", "meaning": "they are (3rd person plural present)"},
      {"word": "tribù", "lemma": "tribù", "pos": "noun", "meaning": "tribe / clan / pack"}
    ],
    "Inverted syntax: '[essi] gente sono di sua tribù' ('they are people of his pack'). 'Tribù' is used pejoratively to denote Falstaff's criminal retinue."
  ],
  "non son due stinchi di santo": [
    "they are not two shins of a saint",
    [
      {"word": "non son due stinchi di santo", "lemma": "non essere uno stinco di santo", "pos": "idiom", "meaning": "to be no saints / to be far from virtuous"},
      {"word": "stinchi", "lemma": "stinco", "pos": "noun", "meaning": "shins / bone relics"},
      {"word": "santo", "lemma": "santo", "pos": "noun", "meaning": "saint"},
      {"word": "son", "lemma": "essere", "pos": "verb", "meaning": "they are (apocope of sono)"}
    ],
    "Classic Italian idiom: 'non essere uno stinco di santo' (to be no saint / no angel). Derives from venerating saints' shinbones as sacred relics; applied here with barbed comedy to the two rogues."
  ],
  "né due fiori di virtù.": [
    "nor two flowers of virtue.",
    [
      {"word": "né", "lemma": "né", "pos": "conjunction", "meaning": "nor / neither"},
      {"word": "fiori", "lemma": "fiore", "pos": "noun", "meaning": "flowers / blossoms / paragons"},
      {"word": "virtù", "lemma": "virtù", "pos": "noun", "meaning": "virtue"}
    ],
    "Parallel metaphorical idiom: 'non essere un fiore di virtù' (to be far from a paragon of virtue), reinforcing Caius's contempt for Bardolfo and Pistola."
  ],
  "Falstaff, sì ripeto, giuro,": [
    "Falstaff, yes I repeat, I swear,",
    [
      {"word": "ripeto", "lemma": "ripetere", "pos": "verb", "meaning": "I repeat (1st person singular present)"},
      {"word": "giuro", "lemma": "giurare", "pos": "verb", "meaning": "I swear (1st person singular present)"},
      {"word": "sì", "lemma": "sì", "pos": "adverb", "meaning": "yes / indeed"}
    ],
    "Bardolfo talks over Dr. Caius, swearing emphatically with 'ripeto, giuro' to convince Ford that his betrayal of Falstaff is motivated by genuine goodwill."
  ],
  "contro voi, John Falstaff rumina": [
    "against you, John Falstaff ruminates",
    [
      {"word": "contro", "lemma": "contro", "pos": "preposition", "meaning": "against"},
      {"word": "voi", "lemma": "voi", "pos": "pronoun", "meaning": "you (formal/plural pronoun)"},
      {"word": "rumina", "lemma": "ruminare", "pos": "verb", "meaning": "ruminates / broods over / meditates (3rd person singular present)"}
    ],
    "'Ruminare' literally means to chew the cud; metaphorically it means to hatch, brood over, or chew on a sinister scheme."
  ],
  "un progetto alquanto impuro.": [
    "a rather impure design.",
    [
      {"word": "progetto", "lemma": "progetto", "pos": "noun", "meaning": "project / plan / design"},
      {"word": "alquanto", "lemma": "alquanto", "pos": "adverb", "meaning": "rather / somewhat / considerably"},
      {"word": "impuro", "lemma": "impuro", "pos": "adjective", "meaning": "impure / unchaste / immoral"}
    ],
    "Bardolfo's hypocritical euphemism: 'un progetto alquanto impuro' politely describes Falstaff's lustful ambition to seduce Ford's wife."
  ],
  "Son uom d'arme e quell'infame": [
    "I am a man of arms and that scoundrel",
    [
      {"word": "uom d'arme", "lemma": "uomo d'arme", "pos": "idiom", "meaning": "man-at-arms / military man"},
      {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
      {"word": "infame", "lemma": "infame", "pos": "noun", "meaning": "infamous scoundrel / villain"}
    ],
    "Bardolfo ridiculously wraps himself in military chivalry: 'Son uom d'arme' ('I am a man-at-arms'). 'Infame' refers to his former master Falstaff."
  ],
  "più non vo' che v'impozzangheri.": [
    "no longer do I want to drag you into the mire.",
    [
      {"word": "vo'", "lemma": "volere", "pos": "verb", "meaning": "I want (apocope of voglio)"},
      {"word": "impozzangheri", "lemma": "impozzangherare", "pos": "verb", "meaning": "drag into mud / besmirch with puddles (present subjunctive)"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "any longer / more"},
      {"word": "v'", "lemma": "voi", "pos": "pronoun", "meaning": "you (plural/formal direct object clitic vi)"}
    ],
    "A brilliant neologism by Arrigo Boito: 'impozzangherare' (from 'pozzanghera', mud puddle), meaning to splash with mud, drag into the gutter, or besmirch someone's reputation. Governed by subjunctive."
  ],
  "Non vorrei, no, escir dai gangheri": [
    "I would not wish, no, to go off the hinges",
    [
      {"word": "vorrei", "lemma": "volere", "pos": "verb", "meaning": "I would wish / I would want (1st person singular conditional)"},
      {"word": "escir dai gangheri", "lemma": "uscire dai gangheri", "pos": "idiom", "meaning": "to go off the hinges / lose one's moral bearings"},
      {"word": "escir", "lemma": "uscire", "pos": "verb", "meaning": "to go out (archaic variant of uscire, apocope)"},
      {"word": "gangheri", "lemma": "ganghero", "pos": "noun", "meaning": "hinges / pivots"}
    ],
    "'Uscire dai gangheri' literally means to come off the door hinges (figuratively to lose control or deviate from proper conduct). Bardolfo poses as a paragon of uprightness."
  ],
  "dell'onor per un reame!": [
    "of honor for a kingdom!",
    [
      {"word": "onor", "lemma": "onore", "pos": "noun", "meaning": "honor (apocope of onore)"},
      {"word": "per", "lemma": "per", "pos": "preposition", "meaning": "for / in exchange for"},
      {"word": "reame", "lemma": "reame", "pos": "noun", "meaning": "realm / kingdom"}
    ],
    "Completes Bardolfo's vow: he would not step off the hinges of honor for an entire kingdom. The grandiose Shakespearean bombast is hilariously out of place for a petty thief."
  ],
  "Messer Ford, l'uomo avvisato": [
    "Master Ford, the forewarned man",
    [
      {"word": "Messer", "lemma": "messere", "pos": "noun", "meaning": "Master / Sir (honorific title)"},
      {"word": "Ford", "lemma": "Ford", "pos": "noun", "meaning": "Ford (proper noun)"},
      {"word": "avvisato", "lemma": "avvisare", "pos": "adjective", "meaning": "forewarned / alerted (past participle as adjective)"},
      {"word": "uomo", "lemma": "uomo", "pos": "noun", "meaning": "man"}
    ],
    "Bardolfo quotes the first half of the Italian proverb: 'Uomo avvisato, mezzo salvato' ('Forewarned is forearmed', literally 'A forewarned man is half saved')."
  ],
  "non è salvo che a metà.": [
    "is saved only halfway.",
    [
      {"word": "salvo", "lemma": "salvo", "pos": "adjective", "meaning": "saved / safe"},
      {"word": "metà", "lemma": "metà", "pos": "noun", "meaning": "half"},
      {"word": "non... che", "lemma": "non... che", "pos": "idiom", "meaning": "only / nothing but (restrictive negative)"}
    ],
    "Completes the proverb: being warned is not enough ('non è salvo che a metà')—Ford must take active counter-measures."
  ],
  "Tocca a voi d'ordir l'agguato": [
    "It is up to you to plot the trap",
    [
      {"word": "Tocca a", "lemma": "toccare a", "pos": "idiom", "meaning": "it is the turn of / it is up to"},
      {"word": "ordir", "lemma": "ordire", "pos": "verb", "meaning": "to weave / plot / frame (apocope of ordire)"},
      {"word": "agguato", "lemma": "agguato", "pos": "noun", "meaning": "ambush / trap / snare"}
    ],
    "'Toccare a' is an idiomatic verb phrase meaning 'it falls upon / it is the duty of someone'. 'Ordir' is apocopic for 'ordire'."
  ],
  "che l'agguato stornerà.": [
    "that will avert the ambush.",
    [
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "that / which (subject relative pronoun)"},
      {"word": "agguato", "lemma": "agguato", "pos": "noun", "meaning": "ambush / trap"},
      {"word": "stornerà", "lemma": "stornare", "pos": "verb", "meaning": "will avert / ward off / deflect (3rd person singular future)"}
    ],
    "Wordplay on 'agguato' (ambush/trap): setting a counter-trap to foil Falstaff's original trap ('stornare' = to divert, ward off, neutralize)."
  ],
  "Se parlaste uno alla volta": [
    "If you were to speak one at a time",
    [
      {"word": "parlaste", "lemma": "parlare", "pos": "verb", "meaning": "you spoke / you were to speak (2nd person plural imperfect subjunctive)"},
      {"word": "uno alla volta", "lemma": "uno alla volta", "pos": "idiom", "meaning": "one at a time"},
      {"word": "volta", "lemma": "volta", "pos": "noun", "meaning": "time / turn"}
    ],
    "Ford attempts to restore order among the babble of competing voices. The imperfect subjunctive 'se parlaste' begins a conditional period."
  ],
  "forse allor v'intenderò": [
    "perhaps then I will understand you",
    [
      {"word": "forse", "lemma": "forse", "pos": "adverb", "meaning": "perhaps / maybe"},
      {"word": "allor", "lemma": "allora", "pos": "adverb", "meaning": "then / in that case (apocope of allora)"},
      {"word": "intenderò", "lemma": "intendere", "pos": "verb", "meaning": "I will understand (1st person singular future)"},
      {"word": "v'", "lemma": "voi", "pos": "pronoun", "meaning": "you (plural direct object clitic vi)"}
    ],
    "'Intenderò' (from 'intendere', to comprehend/understand). 'Allor' is the apocopic form of 'allora'."
  ],
  "Sir John Falstaff già v'appresta,": [
    "Sir John Falstaff is already preparing for you,",
    [
      {"word": "già", "lemma": "già", "pos": "adverb", "meaning": "already"},
      {"word": "appresta", "lemma": "apprestare", "pos": "verb", "meaning": "prepares / readies (3rd person singular present)"},
      {"word": "v'", "lemma": "voi", "pos": "pronoun", "meaning": "for you (dative clitic vi)"}
    ],
    "Pistola cuts in with his distinctive bombastic, pseudo-tragic cadence, addressing Ford with ominous portents."
  ],
  "messer Ford, un gran pericolo.": [
    "Master Ford, a great danger.",
    [
      {"word": "messer", "lemma": "messere", "pos": "noun", "meaning": "Master / Sir"},
      {"word": "gran", "lemma": "grande", "pos": "adjective", "meaning": "great / big (apocope of grande)"},
      {"word": "pericolo", "lemma": "pericolo", "pos": "noun", "meaning": "danger / peril"}
    ],
    "Direct object of 'appresta'. 'Pericolo' establishes the dactylic (sdrucciolo) rhyme scheme with 'perpendicolo'."
  ],
  "Già vi pende sulla testa": [
    "Already there hangs over your head",
    [
      {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
      {"word": "pende", "lemma": "pendere", "pos": "verb", "meaning": "hangs / dangles (3rd person singular present)"},
      {"word": "testa", "lemma": "testa", "pos": "noun", "meaning": "head"},
      {"word": "vi", "lemma": "voi", "pos": "pronoun", "meaning": "over you / to you (dative of reference)"}
    ],
    "'Pendere sulla testa' echoes the sword of Damocles, but here serves as a dark comic allusion to cuckold's horns sprouting on Ford's brow."
  ],
  "qualche cosa a perpendicolo.": [
    "something plumb upright.",
    [
      {"word": "qualche cosa", "lemma": "qualcosa", "pos": "pronoun", "meaning": "something"},
      {"word": "a perpendicolo", "lemma": "a perpendicolo", "pos": "idiom", "meaning": "plumb upright / vertically straight"},
      {"word": "perpendicolo", "lemma": "perpendicolo", "pos": "noun", "meaning": "plumb line / perpendicular"}
    ],
    "'A perpendicolo' means vertical or perpendicular (like a plumb line). Pistola hilariously depicts the cuckold's horns sticking straight up from Ford's head."
  ],
  "Messer Ford, fui già un armigero": [
    "Master Ford, I was once a squire",
    [
      {"word": "fui", "lemma": "essere", "pos": "verb", "meaning": "I was (passato remoto 1st person singular)"},
      {"word": "già", "lemma": "già", "pos": "adverb", "meaning": "once / formerly"},
      {"word": "armigero", "lemma": "armigero", "pos": "noun", "meaning": "squire / man-at-arms / armor-bearer"}
    ],
    "Pistola elevates his former status as Falstaff's lackey into the noble chivalric role of 'armigero' (squire/shield-bearer). Sdrucciolo rhyme with 'morigero'."
  ],
  "di quell'uom dall'ampia cute;": [
    "of that man of ample hide;",
    [
      {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
      {"word": "ampia", "lemma": "ampio", "pos": "adjective", "meaning": "ample / vast / broad"},
      {"word": "cute", "lemma": "cute", "pos": "noun", "meaning": "skin / hide / pelt"}
    ],
    "'Dall'ampia cute' (of vast skin/hide) is Boito's grotesque anatomical description of Falstaff's mountainous bulk."
  ],
  "or mi pento e mi morigero": [
    "now I repent and reform my conduct",
    [
      {"word": "pento", "lemma": "pentirsi", "pos": "verb", "meaning": "I repent (1st person singular present)"},
      {"word": "morigero", "lemma": "morigerarsi", "pos": "verb", "meaning": "I reform my manners / live temperately (1st person singular present)"},
      {"word": "or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocope of ora)"}
    ],
    "'Morigerarsi' is an erudite Latinism meaning to regulate one's conduct, become moral and temperate. Pistola claims to have turned over a new moral leaf."
  ],
  "per ragioni di salute.": [
    "for reasons of health.",
    [
      {"word": "ragioni", "lemma": "ragione", "pos": "noun", "meaning": "reasons"},
      {"word": "salute", "lemma": "salute", "pos": "noun", "meaning": "health / physical safety"},
      {"word": "per", "lemma": "per", "pos": "preposition", "meaning": "for / on account of"}
    ],
    "The punchline to Pistola's 'moral conversion': he reformed solely 'per ragioni di salute' (to preserve his own skin after Falstaff threatened him with a broomstick)."
  ],
  "La minaccia or v'è scoperta,": [
    "The threat now is uncovered to you,",
    [
      {"word": "minaccia", "lemma": "minaccia", "pos": "noun", "meaning": "threat / menace"},
      {"word": "scoperta", "lemma": "scoprire", "pos": "adjective", "meaning": "uncovered / revealed (past participle as predicate adjective)"},
      {"word": "or", "lemma": "ora", "pos": "adverb", "meaning": "now (apocope)"},
      {"word": "v'", "lemma": "voi", "pos": "pronoun", "meaning": "to you (dative clitic vi)"}
    ],
    "'V'è scoperta' = 'vi è scoperta' (is laid bare / revealed to you). Pistola dramatically concludes his disclosure."
  ],
  "or v'è noto il ciurmador.": [
    "now known to you is the swindler.",
    [
      {"word": "noto", "lemma": "noto", "pos": "adjective", "meaning": "known / manifest"},
      {"word": "ciurmador", "lemma": "ciurmatore", "pos": "noun", "meaning": "swindler / charlatan / trickster (apocope of ciurmatore)"},
      {"word": "or", "lemma": "ora", "pos": "adverb", "meaning": "now"},
      {"word": "v'", "lemma": "voi", "pos": "pronoun", "meaning": "to you (dative)"}
    ],
    "'Ciurmador' (apocopic form of 'ciurmatore') denotes a deceitful mountebank or snake-oil charlatan who bewitches the gullible."
  ],
  "State all'erta, all'erta, all'erta!": [
    "Stay on guard, on guard, on guard!",
    [
      {"word": "State", "lemma": "stare", "pos": "verb", "meaning": "stay / stand (2nd person plural imperative)"},
      {"word": "all'erta", "lemma": "all'erta", "pos": "idiom", "meaning": "on guard / on the alert / on watch"},
      {"word": "erta", "lemma": "erta", "pos": "noun", "meaning": "steep slope / lookout tower"}
    ],
    "'Stare all'erta' is a military watchman's warning meaning to keep sharp lookout (from 'erta', steep elevated ground). Repeated thrice for frantic urgency."
  ],
  "Qui si tratta dell'onor.": [
    "Here it is a question of honor.",
    [
      {"word": "tratta", "lemma": "trattare", "pos": "verb", "meaning": "is a matter / concerns (3rd person singular present)"},
      {"word": "onor", "lemma": "onore", "pos": "noun", "meaning": "honor (apocope of onore)"},
      {"word": "si tratta di", "lemma": "trattarsi di", "pos": "idiom", "meaning": "it is a question of / it concerns"},
      {"word": "Qui", "lemma": "qui", "pos": "adverb", "meaning": "here"}
    ],
    "Pistola uses the impersonal idiom 'si tratta di' (it is a question of / it concerns). The ultimate irony: Falstaff's discharged thug moralizing about 'honor'."
  ],
  "Se volete io non mi perito": [
    "If you wish, I do not hesitate",
    [
      {"word": "volete", "lemma": "volere", "pos": "verb", "meaning": "you wish / you want (2nd person plural present)"},
      {"word": "perito", "lemma": "peritarsi", "pos": "verb", "meaning": "I hesitate / shrink back (1st person singular present)"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "Se", "lemma": "se", "pos": "conjunction", "meaning": "if"}
    ],
    "Young Fenton steps forward. 'Peritarsi' is an elevated literary verb meaning to scruple, hesitate, or hold back out of fear or bashfulness."
  ],
  "di ridurlo alla ragione": [
    "to bring him to reason",
    [
      {"word": "ridurlo", "lemma": "ridurre", "pos": "verb", "meaning": "to reduce him / bring him (ridurre + clitic lo)"},
      {"word": "ragione", "lemma": "ragione", "pos": "noun", "meaning": "reason / senses"},
      {"word": "alla", "lemma": "a", "pos": "preposition", "meaning": "to the (a + la)"}
    ],
    "'Ridurre alla ragione' is an idiom meaning to make someone see reason, bring someone to their senses, or subdue someone."
  ],
  "co' le brusche o co' le buone,": [
    "by harsh means or by good,",
    [
      {"word": "brusche", "lemma": "brusco", "pos": "adjective", "meaning": "harsh / rough / brusque"},
      {"word": "buone", "lemma": "buono", "pos": "adjective", "meaning": "good / gentle / mild"},
      {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with / by (apocope of con)"},
      {"word": "o", "lemma": "o", "pos": "conjunction", "meaning": "or"}
    ],
    "Classic Italian idiom 'con le buone o con le brusche' (by fair means or foul, gently or roughly). 'Co'' is the apocopic contraction of 'con'."
  ],
  "e pagarlo al par del merito.": [
    "and pay him according to his desert.",
    [
      {"word": "pagarlo", "lemma": "pagare", "pos": "verb", "meaning": "to pay him (pagare + clitic lo)"},
      {"word": "merito", "lemma": "merito", "pos": "noun", "meaning": "merit / desert / due reward"},
      {"word": "al par del", "lemma": "al pari di", "pos": "idiom", "meaning": "equal to / on a par with / according to"}
    ],
    "'Pagare al par del merito' means to reward or punish someone strictly according to what they deserve. Sdrucciolo rhyme with 'perito'."
  ],
  "Mi dà il cuore e mi solletica": [
    "My heart gives me courage and it tempts me",
    [
      {"word": "dà il cuore", "lemma": "dare il cuore", "pos": "idiom", "meaning": "gives courage / have the heart to"},
      {"word": "solletica", "lemma": "solleticare", "pos": "verb", "meaning": "tickles / tempts / entices (3rd person singular present)"},
      {"word": "cuore", "lemma": "cuore", "pos": "noun", "meaning": "heart"},
      {"word": "Mi", "lemma": "mi", "pos": "pronoun", "meaning": "me (dative clitic pronoun)"}
    ],
    "'Dare il cuore' is an idiom meaning to feel bold enough or have the courage for a challenge. 'Solleticare' (literally to tickle) means to tantalize or excite the appetite."
  ],
  "di sfondar quella ventraia": [
    "to smash through that paunch",
    [
      {"word": "sfondar", "lemma": "sfondare", "pos": "verb", "meaning": "to smash through / cave in / puncture (apocope of sfondare)"},
      {"word": "ventraia", "lemma": "ventraia", "pos": "noun", "meaning": "enormous belly / paunch / entrails"},
      {"word": "quella", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative)"}
    ],
    "'Ventraia' is a pejorative/augmentative derivative of 'ventre' (belly), evoking a repulsive, colossal paunch."
  ],
  "iperbolicoapoplettica.": [
    "hyperbolic-apoplectic.",
    [
      {"word": "iperbolicoapoplettica", "lemma": "iperbolico-apoplettico", "pos": "adjective", "meaning": "hyperbolic and apoplectic (compound adjective)"},
      {"word": "iperbolico", "lemma": "iperbolico", "pos": "adjective", "meaning": "hyperbolic / gigantic / exaggerated"},
      {"word": "apoplettico", "lemma": "apoplettico", "pos": "adjective", "meaning": "apoplectic / congested with blood"}
    ],
    "Boito's magnificent compound portmanteau: 'iperbolico' (hyperbolic, astronomical) + 'apoplettico' (apoplectic, suffused with blood). An 8-syllable sdrucciolo tour de force rhyming with 'solletica'."
  ],
  "Col consiglio o co' la spada": [
    "With counsel or with the sword",
    [
      {"word": "consiglio", "lemma": "consiglio", "pos": "noun", "meaning": "counsel / advice / strategy"},
      {"word": "spada", "lemma": "spada", "pos": "noun", "meaning": "sword"},
      {"word": "Col", "lemma": "con", "pos": "preposition", "meaning": "with the (con + il)"},
      {"word": "co'", "lemma": "con", "pos": "preposition", "meaning": "with (apocope of con)"}
    ],
    "Fenton pledges to defend Ford's house both by intellectual strategy ('consiglio') and by chivalric combat ('spada')."
  ],
  "se lo trovo al tu per tu,": [
    "if I catch him face to face,",
    [
      {"word": "al tu per tu", "lemma": "a tu per tu", "pos": "idiom", "meaning": "face to face / man to man / in private encounter"},
      {"word": "trovo", "lemma": "trovare", "pos": "verb", "meaning": "I find / catch (1st person singular present)"},
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"}
    ],
    "'Al tu per tu' (or 'a tu per tu') is a classic idiom meaning eye-to-eye, face-to-face, or in direct confrontation (speaking informally using 'tu')."
  ],
  "o lui va per la sua strada": [
    "either he goes on his way",
    [
      {"word": "lui", "lemma": "lui", "pos": "pronoun", "meaning": "he / him (subject pronoun)"},
      {"word": "va", "lemma": "andare", "pos": "verb", "meaning": "goes (3rd person singular present)"},
      {"word": "strada", "lemma": "strada", "pos": "noun", "meaning": "way / road / path"},
      {"word": "o", "lemma": "o", "pos": "conjunction", "meaning": "either / or"}
    ],
    "Correlative disjunction 'o... o...' ('either... or...'). 'Andare per la sua strada' means to walk away, leave town, or retreat."
  ],
  "o lo assegno a Belzebù.": [
    "or I assign him to Beelzebub.",
    [
      {"word": "assegno", "lemma": "assegnare", "pos": "verb", "meaning": "I assign / consign / dispatch (1st person singular present)"},
      {"word": "Belzebù", "lemma": "Belzebù", "pos": "noun", "meaning": "Beelzebub / Prince of Devils"},
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
      {"word": "o", "lemma": "o", "pos": "conjunction", "meaning": "or"}
    ],
    "Fenton vows that if Falstaff does not flee, he will dispatch him straight to Satan ('Belzebù', Beelzebub)."
  ],
  "Ripeti.": [
    "Repeat.",
    [
      {"word": "Ripeti", "lemma": "ripetere", "pos": "verb", "meaning": "repeat (2nd person singular imperative)"},
      {"word": "ripetere", "lemma": "ripetere", "pos": "verb", "meaning": "to repeat / say again"}
    ],
    "Bewildered by the simultaneous shouting from all sides, Ford demands a clear, singular repetition of the allegations."
  ],
  "In due parole:": [
    "In two words:",
    [
      {"word": "in due parole", "lemma": "in due parole", "pos": "idiom", "meaning": "in short / in a nutshell / in two words"},
      {"word": "parole", "lemma": "parola", "pos": "noun", "meaning": "words"},
      {"word": "due", "lemma": "due", "pos": "adjective", "meaning": "two"},
      {"word": "In", "lemma": "in", "pos": "preposition", "meaning": "in"}
    ],
    "Pistola steps forward to deliver his punchy, staccato summary: 'In due parole' ('In two words' / in a nutshell)."
  ],
  "l'enorme Falstaff vuole": [
    "the enormous Falstaff wants",
    [
      {"word": "enorme", "lemma": "enorme", "pos": "adjective", "meaning": "enormous / colossal"},
      {"word": "Falstaff", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff (proper noun)"},
      {"word": "vuole", "lemma": "volere", "pos": "verb", "meaning": "wants (3rd person singular present)"}
    ],
    "Pistola sets up a devastating sequence of four rhyming infinitive clauses detailing Falstaff's criminal intent."
  ],
  "entrar nel vostro tetto,": [
    "to enter under your roof,",
    [
      {"word": "entrar", "lemma": "entrare", "pos": "verb", "meaning": "to enter (apocope of entrare)"},
      {"word": "tetto", "lemma": "tetto", "pos": "noun", "meaning": "roof / home"},
      {"word": "vostro", "lemma": "vostro", "pos": "adjective", "meaning": "your (possessive adjective)"},
      {"word": "nel", "lemma": "in", "pos": "preposition", "meaning": "under the / in the (in + il)"}
    ],
    "Synecdoche: 'tetto' (roof) stands for the domestic home or household. 'Entrar' is apocopic."
  ],
  "beccarvi la consorte,": [
    "to peck at your wife,",
    [
      {"word": "beccarvi", "lemma": "beccare", "pos": "verb", "meaning": "to peck / snatch / seduce (beccare + clitic vi)"},
      {"word": "consorte", "lemma": "consorte", "pos": "noun", "meaning": "wife / spouse / consort"},
      {"word": "vi", "lemma": "voi", "pos": "pronoun", "meaning": "from you / your (dative of disadvantage)"}
    ],
    "'Beccare' literally means to peck like a bird, colloquially used here to mean snatch, seduce, or cuckold. 'Vi' is the dative of disadvantage ('from you')."
  ],
  "sfondar la cassaforte": [
    "to break open the safe",
    [
      {"word": "sfondar", "lemma": "sfondare", "pos": "verb", "meaning": "to smash open / break in / breach (apocope of sfondare)"},
      {"word": "cassaforte", "lemma": "cassaforte", "pos": "noun", "meaning": "safe / strongbox"},
      {"word": "la", "lemma": "il", "pos": "adjective", "meaning": "the (definite article)"}
    ],
    "'Sfondar la cassaforte' (to smash open the iron strongbox). Pistola highlights that Falstaff aims to plunder Ford's wealth as well as his marriage."
  ],
  "e sconquassarvi il letto.": [
    "and shatter your bed.",
    [
      {"word": "sconquassarvi", "lemma": "sconquassare", "pos": "verb", "meaning": "to shatter / smash to pieces / wreck (sconquassare + clitic vi)"},
      {"word": "letto", "lemma": "letto", "pos": "noun", "meaning": "bed"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "vi", "lemma": "voi", "pos": "pronoun", "meaning": "your / for you (ethical/possessive dative)"}
    ],
    "'Sconquassare' means to shatter or batter into pieces. The visceral image of Falstaff wrecking Ford's marriage bed directly inflames Ford's tormenting jealousy."
  ],
  "Caspita!": [
    "Good heavens!",
    [
      {"word": "Caspita", "lemma": "caspita", "pos": "interjection", "meaning": "good heavens! / gadzooks! / well I never!"},
      {"word": "caspita", "lemma": "caspita", "pos": "interjection", "meaning": "my goodness! / wow!"}
    ],
    "Dr. Caius's classic mild exclamation of shock and outrage (an Italian euphemism for stronger expletives)."
  ],
  "Quanti guai!": [
    "What a heap of troubles!",
    [
      {"word": "Quanti", "lemma": "quanto", "pos": "adjective", "meaning": "how many / what a lot of (exclamative)"},
      {"word": "guai", "lemma": "guaio", "pos": "noun", "meaning": "troubles / woes / misfortunes"},
      {"word": "guaio", "lemma": "guaio", "pos": "noun", "meaning": "trouble / mishap / calamity"}
    ],
    "Ford gasps in dismay as suspicion grips him: 'Quanti guai!' ('What a mountain of trouble!'). Exclamatory adjective 'quanti' + plural noun 'guai'."
  ],
  "Già le scrisse un biglietto...": [
    "Already he wrote her a note...",
    [
      {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already"},
      {"word": "scrisse", "lemma": "scrivere", "pos": "verb", "meaning": "he wrote (passato remoto 3rd person singular)"},
      {"word": "le", "lemma": "le", "pos": "pronoun", "meaning": "to her (dative clitic pronoun)"},
      {"word": "biglietto", "lemma": "biglietto", "pos": "noun", "meaning": "note / love letter / billet-doux"}
    ],
    "Bardolfo reveals the smoking gun: Falstaff has already dispatched a written love letter to Alice ('le scrisse un biglietto')."
  ],
  "Ma quel messaggio abbietto": [
    "But that abject message",
    [
      {"word": "Ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative)"},
      {"word": "messaggio", "lemma": "messaggio", "pos": "noun", "meaning": "message / missive"},
      {"word": "abbietto", "lemma": "abietto", "pos": "adjective", "meaning": "abject / vile / despicable"}
    ],
    "Pistola interrupts to sanctimoniously denounce the love letter as an 'abject message' ('messaggio abbietto'), claiming moral revulsion."
  ],
  "ricusai.": [
    "I refused.",
    [
      {"word": "ricusai", "lemma": "ricusare", "pos": "verb", "meaning": "I refused / rejected (passato remoto 1st person singular)"},
      {"word": "ricusare", "lemma": "ricusare", "pos": "verb", "meaning": "to refuse / decline / reject"}
    ],
    "Pistola proudly claims that he refused to deliver Falstaff's love letter. Lowercase initial matches the original."
  ],
  "Ricusai.": [
    "I refused.",
    [
      {"word": "Ricusai", "lemma": "ricusare", "pos": "verb", "meaning": "I refused / rejected (passato remoto 1st person singular)"},
      {"word": "ricusare", "lemma": "ricusare", "pos": "verb", "meaning": "to refuse / decline / reject"}
    ],
    "Bardolfo echoes Pistola with identical words, claiming his own share of virtue. Uppercase initial matches the original."
  ],
  "Badate a voi!": [
    "Watch out for yourself!",
    [
      {"word": "Badate", "lemma": "badare", "pos": "verb", "meaning": "watch out / beware / take care (2nd person plural imperative)"},
      {"word": "badate a", "lemma": "badare a", "pos": "idiom", "meaning": "to watch out for / look after / beware of"},
      {"word": "voi", "lemma": "voi", "pos": "pronoun", "meaning": "yourself / you (formal pronoun)"}
    ],
    "Pistola delivers the final warning: 'Badate a voi!' (look to your own defense / beware!), setting Ford's obsessive jealousy ablaze."
  ]
}

# Validation
with open("scripts/falstaff_act1_sc2_partB.json", "r", encoding="utf-8") as f:
    source_data = json.load(f)

source_lines = [item["original"] for item in source_data]
errors = []

if len(curated_data) != len(source_lines):
    errors.append(f"Length mismatch: curated has {len(curated_data)}, source has {len(source_lines)}")

for i, line in enumerate(source_lines):
    if line not in curated_data:
        errors.append(f"Missing line {i}: {line}")
        continue
    entry = curated_data[line]
    if not isinstance(entry, list) or len(entry) != 3:
        errors.append(f"Line {i} invalid structure: {line}")
        continue
    literal, tokens, note = entry
    # Check capitalization
    if line[0].isupper() and not literal[0].isupper():
        errors.append(f"Line {i} capitalization error: orig='{line}' lit='{literal}'")
    # Check tokens
    if not (2 <= len(tokens) <= 5):
        errors.append(f"Line {i} token count error ({len(tokens)}): {line}")
    for t in tokens:
        if not all(k in t for k in ("word", "lemma", "pos", "meaning")):
            errors.append(f"Line {i} token missing keys: {t}")
        if t.get("pos") not in ALLOWED_POS:
            errors.append(f"Line {i} invalid POS tag '{t.get('pos')}': {t}")
    # Check note
    if note is not None and not isinstance(note, str):
        errors.append(f"Line {i} invalid note type: {type(note)}")

if errors:
    print("VALIDATION FAILED:")
    for err in errors:
        print(" -", err)
    sys.exit(1)

print("Validation passed successfully! 100/100 lines valid.")

# Write to output file
out_path = "scripts/falstaff_curated_a1_sc2_partB.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(curated_data, f, ensure_ascii=False, indent=2)

print(f"Successfully saved to {out_path}")

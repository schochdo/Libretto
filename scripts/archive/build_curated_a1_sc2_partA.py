import json

CURATED = {
  "Alice.": [
    "Alice.",
    [
      {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (Mrs. Alice Ford)"},
      {"word": "comare", "lemma": "comare", "pos": "noun", "meaning": "neighbor / gossip / female companion"}
    ],
    "Meg Page calls out cheerfully to greet her friend Alice Ford outside Ford's house in Windsor."
  ],
  "Meg.": [
    "Meg.",
    [
      {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (Mrs. Meg Page)"},
      {"word": "amica", "lemma": "amica", "pos": "noun", "meaning": "friend (female)"}
    ],
    "Alice greets Meg in return as they meet in the garden."
  ],
  "Nannetta.": [
    "Nannetta.",
    [
      {"word": "Nannetta", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (Alice's daughter)"},
      {"word": "fanciulla", "lemma": "fanciulla", "pos": "noun", "meaning": "young girl / maiden"}
    ],
    "Meg greets Alice's young daughter Nannetta."
  ],
  "Escivo appunto.": [
    "I was just coming out.",
    [
      {"word": "Escivo", "lemma": "uscire", "pos": "verb", "meaning": "I was going out / coming out (imperfect indicative)"},
      {"word": "appunto", "lemma": "appunto", "pos": "adverb", "meaning": "just / precisely / at this exact moment"}
    ],
    "'Escivo' is an archaic and literary variant of 'uscivo' (first-person singular imperfect of 'uscire'). Alice explains she was just stepping outside to find Meg."
  ],
  "Per ridere con te.": [
    "To laugh with you.",
    [
      {"word": "Per", "lemma": "per", "pos": "preposition", "meaning": "in order to / to"},
      {"word": "ridere", "lemma": "ridere", "pos": "verb", "meaning": "to laugh"},
      {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
      {"word": "te", "lemma": "tu", "pos": "pronoun", "meaning": "you (disjunctive pronoun)"}
    ],
    "Alice explains her purpose: she was heading over specifically to share a laugh with Meg over the ridiculous letter she received."
  ],
  "Buon dì, comare.": [
    "Good day, neighbor.",
    [
      {"word": "Buon", "lemma": "buono", "pos": "adjective", "meaning": "good (apocope of buono)"},
      {"word": "dì", "lemma": "dì", "pos": "noun", "meaning": "day"},
      {"word": "comare", "lemma": "comare", "pos": "noun", "meaning": "gossip / neighbor / close female friend"}
    ],
    "Alice greets Mrs. Quickly, who arrives accompanying Meg. 'Comare' designates a close female friend, godmother, or neighborhood gossip."
  ],
  "Dio vi doni allegria.": [
    "May God grant you cheer.",
    [
      {"word": "Dio", "lemma": "Dio", "pos": "noun", "meaning": "God"},
      {"word": "vi", "lemma": "voi", "pos": "pronoun", "meaning": "you (plural indirect object)"},
      {"word": "doni", "lemma": "donare", "pos": "verb", "meaning": "may grant / bestow (present subjunctive)"},
      {"word": "allegria", "lemma": "allegria", "pos": "noun", "meaning": "cheer / merriment / joy"}
    ],
    "Mrs. Quickly's customary greeting using the optative subjunctive 'doni' (from 'donare', to bestow). An ironic blessing given the mischief that is about to unfold."
  ],
  "Botton di rosa!": [
    "Rosebud!",
    [
      {"word": "Botton", "lemma": "bottone", "pos": "noun", "meaning": "bud / button (apocope of bottone)"},
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
      {"word": "rosa", "lemma": "rosa", "pos": "noun", "meaning": "rose"},
      {"word": "botton di rosa", "lemma": "botton di rosa", "pos": "idiom", "meaning": "rosebud (affectionate term for a fresh young girl)"}
    ],
    "Mrs. Quickly's affectionate endearment for young Nannetta, comparing her youthful freshness to an unopened rosebud ('botton di rosa')."
  ],
  "Giungi in buon punto.": [
    "You arrive at the right moment.",
    [
      {"word": "Giungi", "lemma": "giungere", "pos": "verb", "meaning": "you arrive (2nd person singular present)"},
      {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in / at"},
      {"word": "buon punto", "lemma": "buon punto", "pos": "idiom", "meaning": "in the nick of time / at the opportune moment"}
    ],
    "The idiom 'in buon punto' means at the very right moment, opportune time. Alice welcomes their arrival just as she was seeking them out."
  ],
  "M'accade un fatto da trasecolare.": [
    "Something has happened to me that leaves one dumbfounded.",
    [
      {"word": "M'accade", "lemma": "accadere", "pos": "verb", "meaning": "happens to me (mi + accade)"},
      {"word": "fatto", "lemma": "fatto", "pos": "noun", "meaning": "fact / occurrence / incident"},
      {"word": "da", "lemma": "da", "pos": "preposition", "meaning": "such as to / enough to"},
      {"word": "trasecolare", "lemma": "trasecolare", "pos": "verb", "meaning": "to be dumbfounded / astounded / flabbergasted"}
    ],
    "'Da trasecolare' is a colorful Italian expression meaning enough to leave one utterly flabbergasted or speechless. Alice is brimming with excitement to tell her news."
  ],
  "Anche a me.": [
    "To me as well.",
    [
      {"word": "Anche", "lemma": "anche", "pos": "adverb", "meaning": "also / too / as well"},
      {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "to"},
      {"word": "me", "lemma": "io", "pos": "pronoun", "meaning": "me (disjunctive pronoun)"}
    ],
    "Meg immediately matches Alice's opening, revealing that an identical shocking incident has befallen her."
  ],
  "Che?": [
    "What?",
    [
      {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what (interrogative pronoun)"},
      {"word": "cosa", "lemma": "cosa", "pos": "noun", "meaning": "thing / matter"}
    ],
    "Mrs. Quickly's sharp interjection, intensely curious to hear the gossip."
  ],
  "Che cosa?": [
    "What thing?",
    [
      {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what"},
      {"word": "cosa", "lemma": "cosa", "pos": "noun", "meaning": "thing"},
      {"word": "che cosa", "lemma": "che cosa", "pos": "idiom", "meaning": "what (standard interrogative)"}
    ],
    "Nannetta joins in asking for details: 'Che cosa?' is the standard Italian interrogative phrase."
  ],
  "Narra il tuo caso.": [
    "Tell your tale.",
    [
      {"word": "Narra", "lemma": "narrare", "pos": "verb", "meaning": "narrate / tell (imperative 2nd singular)"},
      {"word": "tuo", "lemma": "tuo", "pos": "adjective", "meaning": "your (possessive)"},
      {"word": "caso", "lemma": "caso", "pos": "noun", "meaning": "case / affair / circumstance"}
    ],
    "Alice invites Meg to speak first. Natural Italian possessive syntax: 'il tuo caso' -> 'your tale'."
  ],
  "Narra il tuo.": [
    "Tell yours.",
    [
      {"word": "Narra", "lemma": "narrare", "pos": "verb", "meaning": "narrate / tell (imperative)"},
      {"word": "tuo", "lemma": "tuo", "pos": "pronoun", "meaning": "yours (possessive pronoun)"}
    ],
    "Meg deflects and insists that Alice speak first, using 'il tuo' substantively ('yours')."
  ],
  "Promessa": [
    "Promise",
    [
      {"word": "Promessa", "lemma": "promessa", "pos": "noun", "meaning": "promise / pledge"},
      {"word": "promettere", "lemma": "promettere", "pos": "verb", "meaning": "to promise / pledge"}
    ],
    "Alice demands a solemn pledge of secrecy before revealing the scandalous letter. Enjambs into the next line."
  ],
  "di non ciarlar.": [
    "not to gossip.",
    [
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of / to"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "ciarlar", "lemma": "ciarlare", "pos": "verb", "meaning": "to chatter / gossip (apocope of ciarlare)"}
    ],
    "Dependent infinitive clause completing 'Promessa': 'promessa di non ciarlar' (a promise not to chatter or blab). 'Ciarlar' is an apocope of 'ciarlare'."
  ],
  "Ti pare?": [
    "Do you really think so?",
    [
      {"word": "Ti", "lemma": "tu", "pos": "pronoun", "meaning": "to you (indirect object clitic)"},
      {"word": "pare", "lemma": "parere", "pos": "verb", "meaning": "it seems / appears (3rd person singular present)"},
      {"word": "ti pare", "lemma": "ti pare", "pos": "idiom", "meaning": "do you think so? / as if! / of course not!"}
    ],
    "Idiomatic conversational retort 'Ti pare?' expressing mock indignation at the thought that Meg could ever betray a secret ('As if!')."
  ],
  "Oibò! Vi pare?": [
    "Good heavens! Do you think so?",
    [
      {"word": "Oibò", "lemma": "oibò", "pos": "interjection", "meaning": "for shame! / good heavens! / fiddlesticks!"},
      {"word": "Vi", "lemma": "voi", "pos": "pronoun", "meaning": "to you (plural indirect object)"},
      {"word": "pare", "lemma": "parere", "pos": "verb", "meaning": "it seems / appears"}
    ],
    "'Oibò!' is a vigorous archaic interjection of protest or shock. Mrs. Quickly addresses Alice with the polite plural 'Vi pare?'."
  ],
  "Dunque: se m'acconciassi a entrar ne' rei": [
    "Well then: if I were to agree to enter into the evil",
    [
      {"word": "Dunque", "lemma": "dunque", "pos": "conjunction", "meaning": "well then / therefore"},
      {"word": "m'acconciassi", "lemma": "acconciarsi", "pos": "verb", "meaning": "I were to consent / reconcile myself (imperfect subjunctive)"},
      {"word": "entrar", "lemma": "entrare", "pos": "verb", "meaning": "to enter (apocope of entrare)"},
      {"word": "ne'", "lemma": "in", "pos": "preposition", "meaning": "in the / into the (articulated preposition nei)"},
      {"word": "rei", "lemma": "reo", "pos": "adjective", "meaning": "guilty / evil / wicked (plural masculine)"}
    ],
    "Alice begins her grand conditional sentence ('se m'acconciassi... sarei...'). 'Acconciarsi a' means to agree or resign oneself; 'ne' rei' is a poetic contraction of 'nei rei' (into the wicked)."
  ],
  "propositi del diavolo, sarei": [
    "designs of the devil, I would be",
    [
      {"word": "propositi", "lemma": "proposito", "pos": "noun", "meaning": "intentions / designs / purposes"},
      {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the"},
      {"word": "diavolo", "lemma": "diavolo", "pos": "noun", "meaning": "devil"},
      {"word": "sarei", "lemma": "essere", "pos": "verb", "meaning": "I would be (present conditional)"}
    ],
    "Continuation of Alice's conditional protasis ('rei propositi del diavolo' = evil designs of the devil) leading to the apodosis with conditional 'sarei'."
  ],
  "promossa al grado di cavalleressa!": [
    "promoted to the rank of knight's lady!",
    [
      {"word": "promossa", "lemma": "promuovere", "pos": "verb", "meaning": "promoted (past participle feminine)"},
      {"word": "al", "lemma": "a", "pos": "preposition", "meaning": "to the"},
      {"word": "grado", "lemma": "grado", "pos": "noun", "meaning": "rank / degree / station"},
      {"word": "cavalleressa", "lemma": "cavalleressa", "pos": "noun", "meaning": "knight's lady / female knight / horsewoman"}
    ],
    "'Cavalleressa' is Boito's mock-chivalric feminine title formed from 'cavaliere' (knight). Alice mocks Falstaff's boastful proposal to elevate her to a knight's companion."
  ],
  "Anch'io.": [
    "I too.",
    [
      {"word": "Anch'", "lemma": "anche", "pos": "adverb", "meaning": "also / too (elided form of anche)"},
      {"word": "io", "lemma": "io", "pos": "pronoun", "meaning": "I"}
    ],
    "Meg cuts in with dry, comic timing to reveal she received the exact same offer."
  ],
  "Motteggi.": [
    "You are joking.",
    [
      {"word": "Motteggi", "lemma": "motteggiare", "pos": "verb", "meaning": "you jest / joke / banter (2nd person singular present)"},
      {"word": "motteggiare", "lemma": "motteggiare", "pos": "verb", "meaning": "to jest / make witty remarks / banter"}
    ],
    "'Motteggiare' means to banter, tease, or speak in jest. Alice cannot believe Meg could have had the same experience."
  ],
  "Non più parole,": [
    "No more words,",
    [
      {"word": "Non", "lemma": "non", "pos": "adverb", "meaning": "no / not"},
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more / further"},
      {"word": "parole", "lemma": "parola", "pos": "noun", "meaning": "words"}
    ],
    "Meg cuts short further banter to produce tangible proof: 'Non più parole' ('No more words')."
  ],
  "ché qui sciupiamo la luce del sole.": [
    "for here we are wasting the sunlight.",
    [
      {"word": "ché", "lemma": "ché", "pos": "conjunction", "meaning": "for / because (short for poiché / perché)"},
      {"word": "qui", "lemma": "qui", "pos": "adverb", "meaning": "here"},
      {"word": "sciupiamo", "lemma": "sciupare", "pos": "verb", "meaning": "we waste / squander / spoil"},
      {"word": "luce", "lemma": "luce", "pos": "noun", "meaning": "light"},
      {"word": "sole", "lemma": "sole", "pos": "noun", "meaning": "sun"}
    ],
    "Meg translates Shakespeare's 'We have burn'd daylight' (Merry Wives of Windsor, Act II Scene 1). 'Ché' with acute accent means 'for / because'."
  ],
  "Ho una lettera.": [
    "I have a letter.",
    [
      {"word": "Ho", "lemma": "avere", "pos": "verb", "meaning": "I have (1st person singular present)"},
      {"word": "una", "lemma": "una", "pos": "adjective", "meaning": "a / an (indefinite article feminine)"},
      {"word": "lettera", "lemma": "lettera", "pos": "noun", "meaning": "letter / epistle"}
    ],
    "Meg pulls the incriminating love letter from her pocket."
  ],
  "NANNETTA E QUICKLY": [
    "NANNETTA AND QUICKLY",
    [
      {"word": "NANNETTA", "lemma": "Nannetta", "pos": "noun", "meaning": "Nannetta (proper name)"},
      {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "QUICKLY", "lemma": "Quickly", "pos": "noun", "meaning": "Quickly (proper name)"}
    ],
    "Speaker heading indicating that Nannetta and Mrs. Quickly gasp together in unison."
  ],
  "Oh!": [
    "Oh!",
    [
      {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh! (exclamation of surprise / shock)"},
      {"word": "esclamazione", "lemma": "esclamazione", "pos": "noun", "meaning": "exclamation / outcry"}
    ],
    "A collective exclamation of astonishment as Alice reveals she also has a letter in her pocket."
  ],
  "Leggi.": [
    "Read.",
    [
      {"word": "Leggi", "lemma": "leggere", "pos": "verb", "meaning": "read (imperative 2nd person singular)"},
      {"word": "leggere", "lemma": "leggere", "pos": "verb", "meaning": "to read"}
    ],
    "Alice hands her letter to Meg with a crisp imperative: 'Leggi' (Read it)."
  ],
  "«Fulgida Alice! amor t'offro» ...Ma come?": [
    "\"Radiant Alice! I offer you love\" ...But how?",
    [
      {"word": "Fulgida", "lemma": "fulgido", "pos": "adjective", "meaning": "radiant / shining / glittering"},
      {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"},
      {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocope of amore)"},
      {"word": "t'offro", "lemma": "offrire", "pos": "verb", "meaning": "I offer you (ti + offro)"},
      {"word": "come", "lemma": "come", "pos": "adverb", "meaning": "how / why"}
    ],
    "Meg starts reading Alice's letter aloud and stops dead in disbelief: the words are identical to her own letter."
  ],
  "Che cosa dice?": [
    "What does it say?",
    [
      {"word": "Che", "lemma": "che", "pos": "pronoun", "meaning": "what"},
      {"word": "cosa", "lemma": "cosa", "pos": "noun", "meaning": "thing"},
      {"word": "dice", "lemma": "dire", "pos": "verb", "meaning": "says / tells (3rd person singular present)"},
      {"word": "che cosa", "lemma": "che cosa", "pos": "idiom", "meaning": "what"}
    ],
    "Meg stares at the page in perplexity, wondering if her eyes are deceiving her."
  ],
  "Salvo che il nome": [
    "Except for the name",
    [
      {"word": "Salvo", "lemma": "salvo", "pos": "preposition", "meaning": "except / save for"},
      {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"},
      {"word": "nome", "lemma": "nome", "pos": "noun", "meaning": "name"},
      {"word": "salvo che", "lemma": "salvo che", "pos": "idiom", "meaning": "except that / save that"}
    ],
    "Meg notes the only variance between the two epistles is the name of the addressee."
  ],
  "la frase è uguale.": [
    "the sentence is identical.",
    [
      {"word": "frase", "lemma": "frase", "pos": "noun", "meaning": "sentence / phrase / wording"},
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is (3rd person singular present)"},
      {"word": "uguale", "lemma": "uguale", "pos": "adjective", "meaning": "identical / the same / equal"}
    ],
    "Completes Meg's observation: 'Salvo che il nome la frase è uguale' (Except for the name, the wording is identical)."
  ],
  "«Fulgida Meg, amor t'offro»...": [
    "\"Radiant Meg, I offer you love\"...",
    [
      {"word": "Fulgida", "lemma": "fulgido", "pos": "adjective", "meaning": "radiant / shining / glittering"},
      {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper name)"},
      {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocope)"},
      {"word": "t'offro", "lemma": "offrire", "pos": "verb", "meaning": "I offer you (ti + offro)"}
    ],
    "Alice reads Meg's letter aloud, confirming word-for-word Falstaff's lazy duplicate courtship."
  ],
  "«amor bramo».": [
    "\"I crave love\".",
    [
      {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocope of amore)"},
      {"word": "bramo", "lemma": "bramare", "pos": "verb", "meaning": "I crave / yearn for / passionately desire"},
      {"word": "bramare", "lemma": "bramare", "pos": "verb", "meaning": "to long for / crave"}
    ],
    "Meg reads the next clause of the letter: 'amor bramo' (I crave love), showing Falstaff's carnal appetite."
  ],
  "Qua «Meg», là «Alice».": [
    "Here \"Meg\", there \"Alice\".",
    [
      {"word": "Qua", "lemma": "qua", "pos": "adverb", "meaning": "here"},
      {"word": "Meg", "lemma": "Meg", "pos": "noun", "meaning": "Meg (proper name)"},
      {"word": "là", "lemma": "là", "pos": "adverb", "meaning": "there"},
      {"word": "Alice", "lemma": "Alice", "pos": "noun", "meaning": "Alice (proper name)"}
    ],
    "Alice holds both letters side-by-side, pointing out the only swapped word."
  ],
  "È tal e quale:": [
    "It is exactly the same:",
    [
      {"word": "È", "lemma": "essere", "pos": "verb", "meaning": "it is"},
      {"word": "tal", "lemma": "tale", "pos": "adjective", "meaning": "such (apocope of tale)"},
      {"word": "quale", "lemma": "quale", "pos": "adjective", "meaning": "which / as"},
      {"word": "tal e quale", "lemma": "tale e quale", "pos": "idiom", "meaning": "exact / spitting image / identical"}
    ],
    "'Tal e quale' is an idiomatic Italian expression for an exact, indistinguishable replica."
  ],
  "«Non domandar perché, ma dimmi:»": [
    "\"Do not ask why, but tell me:\"",
    [
      {"word": "Non", "lemma": "non", "pos": "adverb", "meaning": "not (negative particle)"},
      {"word": "domandar", "lemma": "domandare", "pos": "verb", "meaning": "to ask (apocope of infinitive used as negative imperative)"},
      {"word": "perché", "lemma": "perché", "pos": "adverb", "meaning": "why / for what reason"},
      {"word": "ma", "lemma": "ma", "pos": "conjunction", "meaning": "but"},
      {"word": "dimmi", "lemma": "dire", "pos": "verb", "meaning": "tell me (imperative dì + clitic mi)"}
    ],
    "Falstaff's imperious romantic prose: negative imperative 'Non domandar' followed by imperative with enclitic 'dimmi'."
  ],
  "«t'amo».": [
    "\"I love you\".",
    [
      {"word": "t'amo", "lemma": "amare", "pos": "verb", "meaning": "I love you (ti + amo)"},
      {"word": "amare", "lemma": "amare", "pos": "verb", "meaning": "to love"}
    ],
    "Alice finishes reading the sentence: 'dimmi: t'amo' (tell me: I love you)."
  ],
  "Pur non gli offersi cagion.": [
    "Yet I gave him no cause.",
    [
      {"word": "Pur", "lemma": "pure", "pos": "adverb", "meaning": "yet / nevertheless / even so (apocope of pure)"},
      {"word": "non", "lemma": "non", "pos": "adverb", "meaning": "not"},
      {"word": "gli", "lemma": "egli", "pos": "pronoun", "meaning": "to him (indirect object clitic)"},
      {"word": "offersi", "lemma": "offrire", "pos": "verb", "meaning": "I offered / gave (passato remoto 1st singular)"},
      {"word": "cagion", "lemma": "cagione", "pos": "noun", "meaning": "cause / reason / pretext (apocope of cagione)"}
    ],
    "Alice protests that she never encouraged Falstaff's advances. Uses the irregular passato remoto 'offersi' and apocopated 'cagion'."
  ],
  "Il nostro caso è pur strano.": [
    "Our case is truly strange.",
    [
      {"word": "nostro", "lemma": "nostro", "pos": "adjective", "meaning": "our (possessive)"},
      {"word": "caso", "lemma": "caso", "pos": "noun", "meaning": "case / situation"},
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
      {"word": "pur", "lemma": "pure", "pos": "adverb", "meaning": "truly / indeed (emphatic adverb)"},
      {"word": "strano", "lemma": "strano", "pos": "adjective", "meaning": "strange / odd"}
    ],
    "Meg reflects on the bizarre coincidence. 'Pur strano' uses 'pur' as an intensifier meaning 'truly' or 'indeed'."
  ],
  "Guardiam con flemma.": [
    "Let us examine with composure.",
    [
      {"word": "Guardiam", "lemma": "guardare", "pos": "verb", "meaning": "let us look / examine (hortative, apocope of guardiamo)"},
      {"word": "con", "lemma": "con", "pos": "preposition", "meaning": "with"},
      {"word": "flemma", "lemma": "flemma", "pos": "noun", "meaning": "phlegm / composure / cool calm"}
    ],
    "Mrs. Quickly proposes a methodical, cool-headed examination of the physical evidence. 'Flemma' refers to the ancient humor of phlegm, denoting unruffled calmness."
  ],
  "Gli stessi versi.": [
    "The same verses.",
    [
      {"word": "stessi", "lemma": "stesso", "pos": "adjective", "meaning": "same (masculine plural)"},
      {"word": "versi", "lemma": "verso", "pos": "noun", "meaning": "verses / lines of poetry"}
    ],
    "Meg examines the poetic lines: they are identical."
  ],
  "Lo stesso inchiostro.": [
    "The same ink.",
    [
      {"word": "stesso", "lemma": "stesso", "pos": "adjective", "meaning": "same (masculine singular)"},
      {"word": "inchiostro", "lemma": "inchiostro", "pos": "noun", "meaning": "ink"}
    ],
    "Alice checks the ink: written with the exact same batch."
  ],
  "La stessa mano.": [
    "The same hand.",
    [
      {"word": "stessa", "lemma": "stesso", "pos": "adjective", "meaning": "same (feminine singular)"},
      {"word": "mano", "lemma": "mano", "pos": "noun", "meaning": "hand / handwriting"}
    ],
    "Quickly checks the script: penned in the same handwriting ('mano')."
  ],
  "Lo stesso stemma.": [
    "The same coat of arms.",
    [
      {"word": "stesso", "lemma": "stesso", "pos": "adjective", "meaning": "same"},
      {"word": "stemma", "lemma": "stemma", "pos": "noun", "meaning": "coat of arms / crest / heraldic seal"}
    ],
    "Nannetta inspects the wax seal: impressed with the very same knightly crest ('stemma')."
  ],
  "«Sei la gaia comare, il compar gaio": [
    "\"You are the merry gossip, the merry comrade",
    [
      {"word": "Sei", "lemma": "essere", "pos": "verb", "meaning": "you are (2nd person singular present)"},
      {"word": "gaia", "lemma": "gaio", "pos": "adjective", "meaning": "merry / gay / cheerful (feminine)"},
      {"word": "comare", "lemma": "comare", "pos": "noun", "meaning": "gossip / neighbor (female)"},
      {"word": "compar", "lemma": "compare", "pos": "noun", "meaning": "comrade / male gossip / partner (apocope of compare)"},
      {"word": "gaio", "lemma": "gaio", "pos": "adjective", "meaning": "merry / cheerful (masculine)"}
    ],
    "Alice and Meg sing Falstaff's ridiculous verse in two-part counterpoint, parodying Shakespeare's title ('Merry Wives'). Boito crafts an elegant chiasmus: 'gaia comare, il compar gaio'."
  ],
  "son io, e fra noi due facciamo il paio.»": [
    "am I, and between the two of us we make a pair.\"",
    [
      {"word": "son", "lemma": "essere", "pos": "verb", "meaning": "am (apocope of sono)"},
      {"word": "io", "lemma": "io", "pos": "pronoun", "meaning": "I"},
      {"word": "fra", "lemma": "fra", "pos": "preposition", "meaning": "between / among"},
      {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two"},
      {"word": "facciamo il paio", "lemma": "fare il paio", "pos": "idiom", "meaning": "we make a pair / we match each other perfectly"}
    ],
    "Syntactic inversion: 'il compar gaio son io'. The idiom 'fare il paio' means to be a well-matched pair or two of a kind."
  ],
  "Già.": [
    "Indeed.",
    [
      {"word": "Già", "lemma": "già", "pos": "adverb", "meaning": "already / indeed / yes"},
      {"word": "davvero", "lemma": "davvero", "pos": "adverb", "meaning": "truly / really"}
    ],
    "Alice utters a sarcastic, dry monosyllable ('Già') scoffing at the thought of pairing with Falstaff."
  ],
  "Lui, lei, te.": [
    "Him, her, you.",
    [
      {"word": "Lui", "lemma": "lui", "pos": "pronoun", "meaning": "he / him"},
      {"word": "lei", "lemma": "lei", "pos": "pronoun", "meaning": "she / her"},
      {"word": "te", "lemma": "tu", "pos": "pronoun", "meaning": "you"}
    ],
    "Nannetta points out the arithmetic absurdity: Falstaff ('lui'), Meg ('lei'), and Alice ('te')."
  ],
  "Un paio in tre.": [
    "A pair in three.",
    [
      {"word": "paio", "lemma": "paio", "pos": "noun", "meaning": "pair / couple"},
      {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in / into"},
      {"word": "tre", "lemma": "tre", "pos": "noun", "meaning": "three"}
    ],
    "Quickly's witty punchline: Falstaff's romantic 'pair' actually consists of three people ('un paio in tre')."
  ],
  "«Facciamo il paio in un amor ridente": [
    "\"We make a pair in a laughing love",
    [
      {"word": "Facciamo", "lemma": "fare", "pos": "verb", "meaning": "we make (1st person plural present)"},
      {"word": "paio", "lemma": "paio", "pos": "noun", "meaning": "pair"},
      {"word": "amor", "lemma": "amore", "pos": "noun", "meaning": "love (apocope)"},
      {"word": "ridente", "lemma": "ridente", "pos": "adjective", "meaning": "laughing / smiling / cheerful"}
    ],
    "Alice resumes reciting Falstaff's pompous letter: 'un amor ridente' (a laughing, merry love)."
  ],
  "di donna bella e d'uomo»...": [
    "of beautiful woman and of man\"...",
    [
      {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"},
      {"word": "bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / lovely"},
      {"word": "d'uomo", "lemma": "uomo", "pos": "noun", "meaning": "of man (di + uomo)"}
    ],
    "Alice suspends the sentence on the word 'd'uomo', leaving the outrageous final adjective for all to shout together."
  ],
  "TUTTE": [
    "ALL",
    [
      {"word": "TUTTE", "lemma": "tutto", "pos": "pronoun", "meaning": "all (feminine plural)"},
      {"word": "insieme", "lemma": "insieme", "pos": "adverb", "meaning": "together / in unison"}
    ],
    "Stage and choral cue indicating all four women shouting Falstaff's boast in uproarious unison."
  ],
  "«appariscente»": [
    "\"striking\"",
    [
      {"word": "appariscente", "lemma": "appariscente", "pos": "adjective", "meaning": "striking / imposing / conspicuous / eye-catching"},
      {"word": "apparire", "lemma": "apparire", "pos": "verb", "meaning": "to appear / show oneself"}
    ],
    "The comic climax of Falstaff's vanity: he describes his gargantuan, waddling frame as 'appariscente' (striking / handsome)."
  ],
  "«e il viso tuo su me risplenderà": [
    "\"and your face upon me shall shine",
    [
      {"word": "viso", "lemma": "viso", "pos": "noun", "meaning": "face / countenance"},
      {"word": "tuo", "lemma": "tuo", "pos": "adjective", "meaning": "your"},
      {"word": "su", "lemma": "su", "pos": "preposition", "meaning": "upon / on"},
      {"word": "me", "lemma": "io", "pos": "pronoun", "meaning": "me"},
      {"word": "risplenderà", "lemma": "risplendere", "pos": "verb", "meaning": "shall shine / blaze (future 3rd singular)"}
    ],
    "Falstaff adopts high Petrarchan poetic style, promising that the lady's face will shine upon him like a celestial star."
  ],
  "come una stella sull'immensità.»": [
    "like a star upon the immensity.\"",
    [
      {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
      {"word": "stella", "lemma": "stella", "pos": "noun", "meaning": "star"},
      {"word": "sull'", "lemma": "su", "pos": "preposition", "meaning": "upon the (articulated preposition sullo elided)"},
      {"word": "immensità", "lemma": "immensità", "pos": "noun", "meaning": "immensity / vast expanse"}
    ],
    "Boito's brilliant double-entendre: Falstaff means the vast sea of his love, but the women hear an exact description of his immense, cosmic girth."
  ],
  "Ah! Ah! Ah! Ah! Ah! Ah!": [
    "Ha! Ha! Ha! Ha! Ha! Ha!",
    [
      {"word": "Ah", "lemma": "ah", "pos": "interjection", "meaning": "ha! / ah! (expression of laughter)"},
      {"word": "risata", "lemma": "risata", "pos": "noun", "meaning": "laughter / laugh"}
    ],
    "The four women dissolve into uncontrollable, ringing laughter at the preposterous letter."
  ],
  "«Rispondi al tuo scudiere,": [
    "\"Reply to your squire,",
    [
      {"word": "Rispondi", "lemma": "rispondere", "pos": "verb", "meaning": "reply / answer (imperative 2nd singular)"},
      {"word": "al", "lemma": "a", "pos": "preposition", "meaning": "to the"},
      {"word": "tuo", "lemma": "tuo", "pos": "adjective", "meaning": "your"},
      {"word": "scudiere", "lemma": "scudiere", "pos": "noun", "meaning": "squire / armor-bearer"}
    ],
    "Alice reads the closing valediction: Falstaff poses as a humble 'scudiere' (squire) serving his courtly lady."
  ],
  "John Falstaff cavaliere.»": [
    "John Falstaff, knight.\"",
    [
      {"word": "John", "lemma": "John", "pos": "noun", "meaning": "John (proper name)"},
      {"word": "Falstaff", "lemma": "Falstaff", "pos": "noun", "meaning": "Falstaff (proper name)"},
      {"word": "cavaliere", "lemma": "cavaliere", "pos": "noun", "meaning": "knight / cavalier"}
    ],
    "The formal knightly signature: 'John Falstaff cavaliere', confirming his aristocratic pretensions."
  ],
  "Mostro!": [
    "Monster!",
    [
      {"word": "Mostro", "lemma": "mostro", "pos": "noun", "meaning": "monster / prodigy / beast"},
      {"word": "mostruoso", "lemma": "mostruoso", "pos": "adjective", "meaning": "monstrous / grotesque"}
    ],
    "Quickly gasps in comic horror at Falstaff's audacity."
  ],
  "Dobbiam gabbarlo.": [
    "We must trick him.",
    [
      {"word": "Dobbiam", "lemma": "dovere", "pos": "verb", "meaning": "we must / have to (apocope of dobbiamo)"},
      {"word": "gabbarlo", "lemma": "gabbare", "pos": "verb", "meaning": "to trick him / fool him (gabbare + clitic lo)"},
      {"word": "gabbare", "lemma": "gabbare", "pos": "verb", "meaning": "to deceive / trick / mock"}
    ],
    "'Gabbare' is the classic Tuscan verb for playing a practical joke or beffa on someone. Alice decrees that Falstaff must be punished."
  ],
  "E farne chiasso.": [
    "And make a great uproar of it.",
    [
      {"word": "farne", "lemma": "fare", "pos": "verb", "meaning": "to make of it (fare + clitic ne)"},
      {"word": "chiasso", "lemma": "chiasso", "pos": "noun", "meaning": "uproar / fuss / noisy clamor"},
      {"word": "far chiasso", "lemma": "far chiasso", "pos": "idiom", "meaning": "to cause a sensation / make a great fuss"}
    ],
    "Nannetta wants to make a public racket and spectacle of the trick ('farne chiasso')."
  ],
  "E metterlo in burletta.": [
    "And turn him into a laughingstock.",
    [
      {"word": "metterlo", "lemma": "mettere", "pos": "verb", "meaning": "to put him / turn him (mettere + clitic lo)"},
      {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in / into"},
      {"word": "burletta", "lemma": "burletta", "pos": "noun", "meaning": "farce / laughingstock / mockery"},
      {"word": "mettere in burletta", "lemma": "mettere in burletta", "pos": "idiom", "meaning": "to turn into a joke / make fun of"}
    ],
    "'Mettere in burletta' means to turn something into a laughingstock or comic farce (diminutive of 'burla', practical joke)."
  ],
  "Oh! Oh! che spasso!": [
    "Oh! Oh! what fun!",
    [
      {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh! (exclamation of delight)"},
      {"word": "che", "lemma": "che", "pos": "adjective", "meaning": "what (exclamative)"},
      {"word": "spasso", "lemma": "spasso", "pos": "noun", "meaning": "fun / amusement / entertainment"}
    ],
    "Nannetta exclaims in sheer delight at the prospect of the prank."
  ],
  "Che allegria!": [
    "What merriment!",
    [
      {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what (exclamative)"},
      {"word": "allegria", "lemma": "allegria", "pos": "noun", "meaning": "merriment / gaiety / joy"}
    ],
    "Quickly joins the chorus of glee."
  ],
  "Che vendetta!": [
    "What revenge!",
    [
      {"word": "Che", "lemma": "che", "pos": "adjective", "meaning": "what (exclamative)"},
      {"word": "vendetta", "lemma": "vendetta", "pos": "noun", "meaning": "revenge / vengeance / retribution"}
    ],
    "Meg savors the delicious vengeance they will exact on the insolent fat knight."
  ],
  "Insieme": [
    "Together",
    [
      {"word": "Insieme", "lemma": "insieme", "pos": "adverb", "meaning": "together / at the same time"},
      {"word": "tutti insieme", "lemma": "tutti insieme", "pos": "idiom", "meaning": "all together (ensemble singing)"}
    ],
    "Stage and musical indication: the four women cluster together, launching simultaneously into their sparkling ensemble quartet."
  ],
  "Quell'otre, quel tino!": [
    "That wineskin, that vat!",
    [
      {"word": "Quell'", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative elided)"},
      {"word": "otre", "lemma": "otre", "pos": "noun", "meaning": "wineskin / leather bottle"},
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that (demonstrative)"},
      {"word": "tino", "lemma": "tino", "pos": "noun", "meaning": "wine vat / cask"}
    ],
    "Alice initiates the dazzling, rapid-fire staccato ensemble, comparing Falstaff's gigantic girth to a leather wineskin ('otre') and a wine-making vat ('tino')."
  ],
  "Quel re delle pance,": [
    "That king of bellies,",
    [
      {"word": "Quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
      {"word": "re", "lemma": "re", "pos": "noun", "meaning": "king"},
      {"word": "delle", "lemma": "di", "pos": "preposition", "meaning": "of the (feminine plural)"},
      {"word": "pance", "lemma": "pancia", "pos": "noun", "meaning": "bellies / paunches"}
    ],
    "Falstaff is hailed derisively as 'king of bellies', mocking his own royal monologue on his paunch from Act 1 Scene 1."
  ],
  "ci ha ancora le ciance": [
    "still has the chatter",
    [
      {"word": "ci ha", "lemma": "averci", "pos": "verb", "meaning": "has (colloquial averci, 3rd singular)"},
      {"word": "ancora", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet"},
      {"word": "ciance", "lemma": "ciancia", "pos": "noun", "meaning": "idle chatter / flirtatious nonsense / prattle"}
    ],
    "'Ciance' denotes frivolous flirtatious chatter or coquettish sweet talk. Alice mocks that this mountain of lard still affects youthful seductions."
  ],
  "del bel vagheggino.": [
    "of the handsome gallant.",
    [
      {"word": "del", "lemma": "di", "pos": "preposition", "meaning": "of the"},
      {"word": "bel", "lemma": "bello", "pos": "adjective", "meaning": "handsome / fair (apocope)"},
      {"word": "vagheggino", "lemma": "vagheggino", "pos": "noun", "meaning": "dandy / lady-killer / beau / gallant"}
    ],
    "'Vagheggino' (from 'vagheggiare', to ogle or woo lovingly) is an ironic term for an effeminate dandy or conceited flirt."
  ],
  "E l'olio gli sgocciola": [
    "And oil drips from him",
    [
      {"word": "olio", "lemma": "olio", "pos": "noun", "meaning": "oil / grease / melted lard"},
      {"word": "gli", "lemma": "egli", "pos": "pronoun", "meaning": "from him / on him (dative of reference)"},
      {"word": "sgocciola", "lemma": "sgocciolare", "pos": "verb", "meaning": "drips / trickles down"}
    ],
    "Boito captures Shakespeare's earthy description of Falstaff sweating grease ('oil drips from him'). Dative 'gli' functions as a dative of disadvantage."
  ],
  "dall'adipe unticcio": [
    "from his greasy fat",
    [
      {"word": "dall'", "lemma": "da", "pos": "preposition", "meaning": "from the (articulated preposition)"},
      {"word": "adipe", "lemma": "adipe", "pos": "noun", "meaning": "fat / blubber / adipose tissue"},
      {"word": "unticcio", "lemma": "unticcio", "pos": "adjective", "meaning": "greasy / oily / slimy"}
    ],
    "'Unticcio' is a pejorative diminutive of 'unto' (greasy, oily). 'Adipe' is the anatomical term for bodily fat."
  ],
  "e ancor ei ne snocciola": [
    "and still he reels off",
    [
      {"word": "ancor", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet (apocope)"},
      {"word": "ei", "lemma": "egli", "pos": "pronoun", "meaning": "he (poetic archaic form)"},
      {"word": "ne", "lemma": "ne", "pos": "pronoun", "meaning": "of them / from it (partitive clitic)"},
      {"word": "snocciola", "lemma": "snocciolare", "pos": "verb", "meaning": "reels off / rattles off / shells"}
    ],
    "'Snocciolare' literally means to stone/pit fruit or shell peas, and idiomatically means to reel off verses, rhymes, or lies with effortless speed."
  ],
  "la strofa e il bisticcio!": [
    "stanzas and puns!",
    [
      {"word": "strofa", "lemma": "strofa", "pos": "noun", "meaning": "stanza / strophe / verse"},
      {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
      {"word": "bisticcio", "lemma": "bisticcio", "pos": "noun", "meaning": "pun / wordplay / quibble"}
    ],
    "'Bisticcio' in literary Italian signifies an intricate pun, play on words, or rhyming assonance (such as 'gaia comare / compar gaio')."
  ],
  "Lasciam ch'ei le pronte": [
    "Let us let him his ready",
    [
      {"word": "Lasciam", "lemma": "lasciare", "pos": "verb", "meaning": "let us allow / let (hortative, apocope of lasciamo)"},
      {"word": "ch'ei", "lemma": "che egli", "pos": "idiom", "meaning": "that he (conjunction che + pronoun ei)"},
      {"word": "pronte", "lemma": "pronto", "pos": "adjective", "meaning": "ready / glib / facile (feminine plural)"}
    ],
    "Hortative subjunctive construction: 'Lasciam ch'ei... spifferi' (Let us let him blurt out...). Enjambs with the following line."
  ],
  "sue ciarle ne spifferi;": [
    "prattlings blurt out;",
    [
      {"word": "sue", "lemma": "suo", "pos": "adjective", "meaning": "his (possessive feminine plural)"},
      {"word": "ciarle", "lemma": "ciarla", "pos": "noun", "meaning": "prattlings / gossip / empty chatter"},
      {"word": "spifferi", "lemma": "spifferare", "pos": "verb", "meaning": "blurt out / spill / babble (present subjunctive 3rd singular)"}
    ],
    "'Spifferare' colloquially means to spill the beans or blurt out secrets recklessly. Governed by subjunctive after 'lasciam che'."
  ],
  "farà come i pifferi": [
    "he will fare like the pipers",
    [
      {"word": "farà", "lemma": "fare", "pos": "verb", "meaning": "he will do / fare (future 3rd singular)"},
      {"word": "come", "lemma": "come", "pos": "preposition", "meaning": "like / as"},
      {"word": "pifferi", "lemma": "piffero", "pos": "noun", "meaning": "fifers / pipers / shawm players"}
    ],
    "First half of the famous Italian proverb: 'Fare come i pifferi di montagna, che andarono per suonare e furono suonati' (To do like the mountain pipers, who went to play music and ended up getting a beating)."
  ],
  "che sceser dal monte.": [
    "who came down from the mountain.",
    [
      {"word": "che", "lemma": "che", "pos": "pronoun", "meaning": "who (relative pronoun)"},
      {"word": "sceser", "lemma": "scendere", "pos": "verb", "meaning": "descended / came down (passato remoto 3rd plural, apocope of scesero)"},
      {"word": "dal", "lemma": "da", "pos": "preposition", "meaning": "from the"},
      {"word": "monte", "lemma": "monte", "pos": "noun", "meaning": "mountain / hill"}
    ],
    "Completes the proverb: Falstaff thought he was descending from on high to conquer the Windsor wives, but he will end up thoroughly beaten and humiliated."
  ],
  "Vedrai che se abbindolo": [
    "You will see that if I bamboozle",
    [
      {"word": "Vedrai", "lemma": "vedere", "pos": "verb", "meaning": "you will see (future 2nd person singular)"},
      {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"},
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "abbindolo", "lemma": "abbindolare", "pos": "verb", "meaning": "I bamboozle / ensnare / swindle (1st person singular present)"}
    ],
    "'Abbindolare' derives from 'bindolo' (skein-winder/pulley), meaning to wrap someone round one's finger or dupe them completely."
  ],
  "quel grosso compar,": [
    "that fat gossip,",
    [
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
      {"word": "grosso", "lemma": "grosso", "pos": "adjective", "meaning": "fat / big / bulky"},
      {"word": "compar", "lemma": "compare", "pos": "noun", "meaning": "gossip / comrade / partner (apocope of compare)"}
    ],
    "Alice refers sarcastically to Falstaff's line ('il compar gaio') as 'quel grosso compar' (that huge crony)."
  ],
  "più lesto d'un guindolo": [
    "faster than a yarn-winder",
    [
      {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more / faster"},
      {"word": "lesto", "lemma": "lesto", "pos": "adjective", "meaning": "swift / nimble / quick"},
      {"word": "d'un", "lemma": "di", "pos": "preposition", "meaning": "than a (comparative di + un)"},
      {"word": "guindolo", "lemma": "guindolo", "pos": "noun", "meaning": "yarn-winder / spinning reel"}
    ],
    "'Guindolo' is a revolving yarn-winder or reel. The comparative 'più lesto d'un guindolo' means faster than a spinning wheel."
  ],
  "lo faccio girar.": [
    "I make him spin.",
    [
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
      {"word": "faccio", "lemma": "fare", "pos": "verb", "meaning": "I make / cause to (causative fare)"},
      {"word": "girar", "lemma": "girare", "pos": "verb", "meaning": "to spin / turn round (apocope of girare)"}
    ],
    "Causative structure 'far girare' (to spin around like a top / make someone lose their head). Truncated infinitive 'girar' for meter and rhyme."
  ],
  "Quell'uom è un cannone,": [
    "That man is a cannon,",
    [
      {"word": "Quell'", "lemma": "quello", "pos": "adjective", "meaning": "that (elided)"},
      {"word": "uom", "lemma": "uomo", "pos": "noun", "meaning": "man (apocope of uomo)"},
      {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
      {"word": "cannone", "lemma": "cannone", "pos": "noun", "meaning": "cannon / piece of artillery"}
    ],
    "Meg sings in simultaneous counter-melody, comparing Falstaff's explosive, bulky persona to a heavy siege cannon."
  ],
  "se scoppia, ci spaccia.": [
    "if it explodes, it finishes us off.",
    [
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "scoppia", "lemma": "scoppiare", "pos": "verb", "meaning": "it explodes / bursts"},
      {"word": "ci", "lemma": "noi", "pos": "pronoun", "meaning": "us (direct object clitic)"},
      {"word": "spaccia", "lemma": "spacciare", "pos": "verb", "meaning": "dispatches / finishes off / does for"}
    ],
    "'Spacciare' idiomatically means to finish off, kill, or ruin someone completely. If Falstaff explodes like a cannon, all around him are doomed."
  ],
  "Colui, se l'abbraccia,": [
    "That fellow, if he hugs her,",
    [
      {"word": "Colui", "lemma": "colui", "pos": "pronoun", "meaning": "that man / that fellow (pejorative demonstrative)"},
      {"word": "se", "lemma": "se", "pos": "conjunction", "meaning": "if"},
      {"word": "l'abbraccia", "lemma": "abbracciare", "pos": "verb", "meaning": "embraces her / hugs her (elided la + abbraccia)"}
    ],
    "'Colui' conveys contemptuous dismissal ('that creature'). 'L'abbraccia' has the elided direct object pronoun 'la' referring to any prospective lover."
  ],
  "ti schiaccia Giunone.": [
    "crushes Juno for you.",
    [
      {"word": "ti", "lemma": "tu", "pos": "pronoun", "meaning": "to you / for you (ethical dative)"},
      {"word": "schiaccia", "lemma": "schiacciare", "pos": "verb", "meaning": "crushes / squashes / flattens"},
      {"word": "Giunone", "lemma": "Giunone", "pos": "noun", "meaning": "Juno (queen of the gods, archetype of majestic womanhood)"}
    ],
    "Meg uses the ethical dative 'ti' to make the statement vivid. Juno, the majestic queen of Olympus, would be squashed flat under Falstaff's colossal embrace."
  ],
  "Vedrai che a un tuo cenno": [
    "You will see that at a nod of yours",
    [
      {"word": "Vedrai", "lemma": "vedere", "pos": "verb", "meaning": "you will see (future 2nd singular)"},
      {"word": "che", "lemma": "che", "pos": "conjunction", "meaning": "that"},
      {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "at"},
      {"word": "cenno", "lemma": "cenno", "pos": "noun", "meaning": "nod / sign / wave / gesture"}
    ],
    "'A un tuo cenno' means at Alice's slightest beck and call or gesture."
  ],
  "quel mostro si spappola": [
    "that monster turns to mush",
    [
      {"word": "quel", "lemma": "quello", "pos": "adjective", "meaning": "that"},
      {"word": "mostro", "lemma": "mostro", "pos": "noun", "meaning": "monster"},
      {"word": "si spappola", "lemma": "spappolarsi", "pos": "verb", "meaning": "turns to mush / squashes into pulp / melts away"}
    ],
    "'Spappolarsi' is a vivid, visceral Italian verb meaning to disintegrate into pulp or mush (from 'pappa', soft food/mash)."
  ],
  "e perde il suo senno": [
    "and loses his senses",
    [
      {"word": "perde", "lemma": "perdere", "pos": "verb", "meaning": "loses (3rd person singular present)"},
      {"word": "suo", "lemma": "suo", "pos": "adjective", "meaning": "his"},
      {"word": "senno", "lemma": "senno", "pos": "noun", "meaning": "senses / judgment / wits"},
      {"word": "perdere il senno", "lemma": "perdere il senno", "pos": "idiom", "meaning": "to lose one's head / wits"}
    ],
    "'Perdere il senno' is the classic literary idiom for losing one's reason or sanity (echoing Orlando's madness in Ariosto)."
  ],
  "e corre alla trappola.": [
    "and runs into the trap.",
    [
      {"word": "corre", "lemma": "correre", "pos": "verb", "meaning": "runs (3rd person singular present)"},
      {"word": "alla", "lemma": "a", "pos": "preposition", "meaning": "to the / into the"},
      {"word": "trappola", "lemma": "trappola", "pos": "noun", "meaning": "trap / snare"}
    ],
    "Falstaff will rush headlong into the trap laid for him by the merry wives."
  ],
  "Potenza d'un fragile": [
    "Power of a frail",
    [
      {"word": "Potenza", "lemma": "potenza", "pos": "noun", "meaning": "power / potency / might"},
      {"word": "d'un", "lemma": "di", "pos": "preposition", "meaning": "of a"},
      {"word": "fragile", "lemma": "fragile", "pos": "adjective", "meaning": "fragile / frail / delicate"}
    ],
    "Meg meditates on the paradoxical power of female charm: how a fragile feminine smile can completely overpower a monstrous man."
  ],
  "sorriso di donna!": [
    "smile of a woman!",
    [
      {"word": "sorriso", "lemma": "sorriso", "pos": "noun", "meaning": "smile"},
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
      {"word": "donna", "lemma": "donna", "pos": "noun", "meaning": "woman"}
    ],
    "Completes the phrase: 'Potenza d'un fragile sorriso di donna!' (The power of a woman's frail smile!)."
  ],
  "Scïenza d'un'agile": [
    "Art of an agile",
    [
      {"word": "Scïenza", "lemma": "scienza", "pos": "noun", "meaning": "science / art / skill (with poetic diaeresis)"},
      {"word": "d'un'", "lemma": "di", "pos": "preposition", "meaning": "of an"},
      {"word": "agile", "lemma": "agile", "pos": "adjective", "meaning": "agile / nimble / light"}
    ],
    "'Scïenza' has a poetic diaeresis (pronounced in three syllables: sci-en-za) to satisfy the settenario meter. It denotes tactical cunning or mastery."
  ],
  "movenza di gonna!": [
    "swish of a skirt!",
    [
      {"word": "movenza", "lemma": "movenza", "pos": "noun", "meaning": "movement / graceful motion / sway"},
      {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
      {"word": "gonna", "lemma": "gonna", "pos": "noun", "meaning": "skirt / petticoat"}
    ],
    "'Movenza di gonna' evokes the tantalizing, flirtatious rustle and movement of a woman's dress."
  ],
  "Se il vischio lo impegola": [
    "If birdlime ensnares him",
    [
      {"word": "vischio", "lemma": "vischio", "pos": "noun", "meaning": "birdlime / mistletoe / sticky snare"},
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
      {"word": "impegola", "lemma": "impegolare", "pos": "verb", "meaning": "tars / entangles / traps (3rd person singular present)"}
    ],
    "Metaphor drawn from fowling: 'vischio' (sticky birdlime) and 'impegolare' (to smear with pitch/tar, trapping a bird so it cannot fly away)."
  ],
  "lo udremo strillar.": [
    "we shall hear him squeal.",
    [
      {"word": "lo", "lemma": "lo", "pos": "pronoun", "meaning": "him (direct object clitic)"},
      {"word": "udremo", "lemma": "udire", "pos": "verb", "meaning": "we shall hear (future 1st person plural)"},
      {"word": "strillar", "lemma": "strillare", "pos": "verb", "meaning": "to shriek / squawk / squeal (apocope of strillare)"}
    ],
    "Acoustic imagery of Falstaff squealing like a trapped beast or stuck pig when caught in the wives' trap. Truncated infinitive 'strillar' for rhyme."
  ],
  "E allor la sua fregola": [
    "And then his lustful frenzy",
    [
      {"word": "allor", "lemma": "allora", "pos": "adverb", "meaning": "then / at that time (apocope of allora)"},
      {"word": "sua", "lemma": "suo", "pos": "adjective", "meaning": "his (possessive)"},
      {"word": "fregola", "lemma": "fregola", "pos": "noun", "meaning": "heat / rut / lustful itch / frantic desire"}
    ],
    "'Fregola' denotes the spawning rut or heat of animals/fish, used derisively here for Falstaff's ridiculous, feverish amorous appetite. Enjambs into the next line ('vedremo svampar')."
  ]
}

# Validation
with open('scripts/falstaff_act1_sc2_partA.json') as f:
    input_lines = json.load(f)

orig_lines = [item['original'] for item in input_lines]

assert len(orig_lines) == 100, f"Expected 100 input lines, got {len(orig_lines)}"
assert len(CURATED) == 100, f"Expected 100 curated lines, got {len(CURATED)}"

ALLOWED_POS = {"noun", "verb", "adjective", "adverb", "pronoun", "preposition", "conjunction", "interjection", "particle", "idiom"}

errors = []
for idx, orig in enumerate(orig_lines):
    if orig not in CURATED:
        errors.append(f"Missing original line: {orig}")
        continue
    val = CURATED[orig]
    if not isinstance(val, list) or len(val) != 3:
        errors.append(f"Line {idx} '{orig}': Value must be [literal, tokens, grammar_note]")
        continue
    lit, toks, note = val
    if not isinstance(lit, str) or not lit.strip():
        errors.append(f"Line {idx} '{orig}': literal must be non-empty string")
    
    # Capitalization check
    first_char_orig = next((c for c in orig if c.isalpha()), None)
    first_char_lit = next((c for c in lit if c.isalpha()), None)
    if first_char_orig and first_char_orig.isupper():
        if not first_char_lit or not first_char_lit.isupper():
            errors.append(f"Line {idx} '{orig}': Original starts uppercase, but literal '{lit}' does not")
    
    # Tokens check
    if not isinstance(toks, list) or len(toks) < 2 or len(toks) > 5:
        errors.append(f"Line {idx} '{orig}': tokens count must be between 2 and 5, got {len(toks)}")
    for t_idx, t in enumerate(toks):
        for field in ["word", "lemma", "pos", "meaning"]:
            if field not in t:
                errors.append(f"Line {idx} '{orig}', token {t_idx}: missing '{field}'")
        if t.get("pos") not in ALLOWED_POS:
            errors.append(f"Line {idx} '{orig}', token {t_idx}: invalid pos '{t.get('pos')}'")

if errors:
    print(f"Validation FAILED with {len(errors)} errors:")
    for err in errors[:20]:
        print(" -", err)
    exit(1)
else:
    print("ALL 100 LINES VALIDATED PERFECTLY!")

# Save to destination
output_path = "scripts/falstaff_curated_a1_sc2_partA.json"
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(CURATED, f, ensure_ascii=False, indent=2)

print(f"Saved successfully to {output_path}")

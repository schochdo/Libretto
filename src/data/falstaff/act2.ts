import { Act } from '../../types/libretto';

export const falstaffAct2: Act = {
  actNumber: 2,
  title: 'Act II',
  originalSetting: "Parte prima: L'interno dell'«Osteria della Giarrettiera». Parte seconda: Una sala nella casa di Ford con grande finestra sul Tamigi.",
  setting: "Part I: The interior of the Garter Inn. Part II: A room in Ford's house with a large window overlooking the Thames.",
  scenes: [
    {
      sceneNumber: 1,
      title: "Parte I: Reverenza! (Nell'Osteria: Quickly e Signor Fontana)",
      titleTranslation: "Part I: Reverence! (In the Inn: Quickly and Signor Fontana)",
      originalDescription: "L’interno dell’«Osteria della Giarrettiera». Mrs. Quickly si presenta a Falstaff annunciando l’appuntamento con Alice dalle due alle tre. Poco dopo entra Ford travestito sotto il nome di Signor Fontana.",
      description: "The interior of the Garter Inn. Mrs. Quickly presents herself to Falstaff, announcing the rendezvous with Alice from two to three. Shortly after, Ford enters disguised under the name of Signor Fontana.",
      cues: [
        {
          id: "a2_s1_c1",
          speaker: "Bardolfo & Pistola",
          stageDirection: "cantando insieme e battendosi il petto in atto di pentimento",
          stageDirectionTranslation: "singing together and beating their breasts in an act of repentance",
          lines: [
            {
              id: "a2_s1_c1_l1",
              original: "Siam pentiti e contriti.",
              literal: "We are repentant and contrite.",
              tokens: [
                {
                  word: "Siam",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (apocopic form of siamo)",
                },
                {
                  word: "pentiti",
                  lemma: "pentito",
                  pos: "adjective",
                  meaning: "repentant / contrite",
                },
                {
                  word: "contriti",
                  lemma: "contrito",
                  pos: "adjective",
                  meaning: "contrite / sorrowful",
                },
              ],
              grammarNote: "Bardolfo and Pistola perform a comically exaggerated display of religious penitence, beating their breasts to regain Falstaff's favor after their insubordination.",
            },
          ],
        },
        {
          id: "a2_s1_c2",
          speaker: "Sir John Falstaff",
          stageDirection: "volgendosi appena verso Bardolfo e Pistola",
          stageDirectionTranslation: "scarcely turning toward Bardolfo and Pistola",
          lines: [
            {
              id: "a2_s1_c2_l1",
              original: "L'uomo ritorna al vizio,",
              literal: "Man returns to vice,",
              tokens: [
                {
                  word: "L'uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man / mankind",
                },
                {
                  word: "ritorna",
                  lemma: "ritornare",
                  pos: "verb",
                  meaning: "returns",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the",
                },
                {
                  word: "vizio",
                  lemma: "vizio",
                  pos: "noun",
                  meaning: "vice / sin",
                },
              ],
              grammarNote: "Falstaff philosophizes with cynical amusement on human frailty, quoting the opening of a proverbial folk comparison.",
            },
            {
              id: "a2_s1_c2_l2",
              original: "la gatta al lardo...",
              literal: "the cat to the lard...",
              tokens: [
                {
                  word: "la gatta",
                  lemma: "gatta",
                  pos: "noun",
                  meaning: "the cat (female)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the",
                },
                {
                  word: "lardo",
                  lemma: "lardo",
                  pos: "noun",
                  meaning: "lard / bacon fat",
                },
              ],
              grammarNote: "Falstaff completes the allusion to the Italian proverb 'Tanto va la gatta al lardo che ci lascia lo zampino', mocking inevitable relapse into sin.",
            },
          ],
        },
        {
          id: "a2_s1_c3",
          speaker: "Bardolfo & Pistola",
          lines: [
            {
              id: "a2_s1_c3_l1",
              original: "E noi, torniamo al tuo servizio.",
              literal: "And we, return to your service.",
              tokens: [
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we / us",
                },
                {
                  word: "torniamo",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "we return",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "servizio",
                  lemma: "servizio",
                  pos: "noun",
                  meaning: "service",
                },
              ],
              grammarNote: "Bardolfo and Pistola cheerfully complete Falstaff's proverb by brazenly equating returning to his service with returning to vice.",
            },
          ],
        },
        {
          id: "a2_s1_c4",
          speaker: "Bardolfo",
          stageDirection: "a Falstaff",
          stageDirectionTranslation: "to Falstaff",
          lines: [
            {
              id: "a2_s1_c4_l1",
              original: "Padron, là c'è una donna che alla vostra presenza",
              literal: "Master, over there is a woman who to your presence",
              tokens: [
                {
                  word: "Padron",
                  lemma: "padrone",
                  pos: "noun",
                  meaning: "master / boss (apocopic)",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
                {
                  word: "presenza",
                  lemma: "presenza",
                  pos: "noun",
                  meaning: "presence",
                },
              ],
              grammarNote: "Bardolfo announces Mistress Quickly using courtly, deferential diction ('alla vostra presenza') to flatter Falstaff.",
            },
            {
              id: "a2_s1_c4_l2",
              original: "chiede d'essere ammessa.",
              literal: "asks to be admitted.",
              tokens: [
                {
                  word: "chiede",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "asks / requests",
                },
                {
                  word: "d'essere",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "to be",
                },
                {
                  word: "ammessa",
                  lemma: "ammettere",
                  pos: "verb",
                  meaning: "admitted (past participle feminine)",
                },
              ],
              grammarNote: "Syntactic completion of Bardolfo's announcement, using a passive infinitive construction ('d'essere ammessa').",
            },
          ],
        },
        {
          id: "a2_s1_c5",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c5_l1",
              original: "S'inoltri.",
              literal: "Let her enter.",
              tokens: [
                {
                  word: "S'inoltri",
                  lemma: "inoltrarsi",
                  pos: "verb",
                  meaning: "let her enter / step forward (3rd person singular present subjunctive)",
                },
                {
                  word: "inoltrarsi",
                  lemma: "inoltrarsi",
                  pos: "verb",
                  meaning: "to enter / step forward",
                },
              ],
              grammarNote: "Falstaff gives lordly permission using an impersonal third-person hortatory subjunctive ('si inoltri', elided to 's'inoltri').",
            },
          ],
        },
        {
          id: "a2_s1_c6",
          speaker: "Sir John Falstaff",
          stageDirection: "Bardolfo esce da sinistra e ritorna subito accompagnando mrs. Quickly",
          stageDirectionTranslation: "Bardolfo exits from the left and immediately returns accompanying Mrs. Quickly",
          lines: [
          ],
        },
        {
          id: "a2_s1_c7",
          speaker: "Mrs. Quickly",
          stageDirection: "inchinandosi profondamente verso Falstaff il quale è ancora seduto",
          stageDirectionTranslation: "bowing deeply to Falstaff, who is still seated",
          lines: [
            {
              id: "a2_s1_c7_l1",
              original: "Reverenza!",
              literal: "Reverence!",
              tokens: [
                {
                  word: "Reverenza",
                  lemma: "reverenza",
                  pos: "noun",
                  meaning: "reverence / deep bow / curtsy",
                },
                {
                  word: "far reverenza",
                  lemma: "far reverenza",
                  pos: "idiom",
                  meaning: "to pay homage / make a curtsy",
                },
              ],
              grammarNote: "Mistress Quickly introduces her famous comedic catchphrase accompanied by an exaggeratedly deep, mock-solemn curtsy.",
            },
          ],
        },
        {
          id: "a2_s1_c8",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c8_l1",
              original: "Buon giorno, buona donna.",
              literal: "Good day, good woman.",
              tokens: [
                {
                  word: "Buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocopic)",
                },
                {
                  word: "giorno",
                  lemma: "giorno",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "buona",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
              ],
              grammarNote: "Falstaff responds with patronizing condescension, playing on the polite repetition of 'buon' and 'buona'.",
            },
          ],
        },
        {
          id: "a2_s1_c9",
          speaker: "Mrs. Quickly",
          stageDirection: "avvicinandosi con gran rispetto e cautela",
          stageDirectionTranslation: "approaching with great respect and caution",
          lines: [
            {
              id: "a2_s1_c9_l1",
              original: "Se vostra grazia vuole,",
              literal: "If your grace wills,",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "vostra",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "grazia",
                  lemma: "grazia",
                  pos: "noun",
                  meaning: "grace",
                },
                {
                  word: "vuole",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wills / wishes",
                },
              ],
              grammarNote: "Quickly flatters Falstaff with the grand ducal honorific 'vostra grazia' (Your Grace) to win his gullible confidence.",
            },
            {
              id: "a2_s1_c9_l2",
              original: "vorrei, segretamente, dirle quattro parole.",
              literal: "I would like, secretly, to speak four words to you.",
              tokens: [
                {
                  word: "vorrei",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I would like (conditional 1st person singular)",
                },
                {
                  word: "segretamente",
                  lemma: "segretamente",
                  pos: "adverb",
                  meaning: "secretly",
                },
                {
                  word: "dirle",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "to say to her/you (formal)",
                },
                {
                  word: "quattro parole",
                  lemma: "quattro parole",
                  pos: "idiom",
                  meaning: "a few words (lit. four words)",
                },
              ],
              grammarNote: "The Italian idiom 'dire quattro parole' means to speak a few words in private. 'Dirle' uses the formal feminine clitic 'le' addressing 'vostra grazia'.",
            },
          ],
        },
        {
          id: "a2_s1_c10",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c10_l1",
              original: "T'accordo udienza.",
              literal: "I grant you audience.",
              tokens: [
                {
                  word: "T'accordo",
                  lemma: "accordare",
                  pos: "verb",
                  meaning: "I grant you (ti + accordo)",
                },
                {
                  word: "accordo",
                  lemma: "accordare",
                  pos: "verb",
                  meaning: "I grant / accord",
                },
                {
                  word: "udienza",
                  lemma: "udienza",
                  pos: "noun",
                  meaning: "audience / hearing",
                },
              ],
              grammarNote: "Falstaff assumes a regal demeanor by granting an 'udienza' (formal hearing), though addressing Quickly with the informal 'tu' ('t'accordo').",
            },
          ],
        },
        {
          id: "a2_s1_c11",
          speaker: "Sir John Falstaff",
          stageDirection: "a Bardolfo e Pistola, rimasti nel fondo a spiare",
          stageDirectionTranslation: "to Bardolfo and Pistola, who have remained in the background spying",
          lines: [
            {
              id: "a2_s1_c11_l1",
              original: "Escite.",
              literal: "Leave.",
              tokens: [
                {
                  word: "Escite",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "leave / go out (2nd person plural imperative, archaic form)",
                },
                {
                  word: "uscire",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "to go out / leave",
                },
              ],
              grammarNote: "Falstaff imperiously commands Bardolfo and Pistola to clear the room. 'Escite' is the archaic form of 'uscite'.",
            },
          ],
        },
        {
          id: "a2_s1_c12",
          speaker: "Sir John Falstaff",
          stageDirection: "escono da sinistra facendo sberleffi",
          stageDirectionTranslation: "they exit to the left making mocking grimaces",
          lines: [
          ],
        },
        {
          id: "a2_s1_c13",
          speaker: "Mrs. Quickly",
          stageDirection: "facendo un altro inchino ed avvicinandosi più di prima",
          stageDirectionTranslation: "making another bow and coming even closer than before",
          lines: [
            {
              id: "a2_s1_c13_l1",
              original: "Reverenza!",
              literal: "Reverence!",
              tokens: [
                {
                  word: "Reverenza",
                  lemma: "reverenza",
                  pos: "noun",
                  meaning: "reverence / deep bow / curtsy",
                },
                {
                  word: "far reverenza",
                  lemma: "far reverenza",
                  pos: "idiom",
                  meaning: "to pay homage / make a curtsy",
                },
              ],
              grammarNote: "Mistress Quickly introduces her famous comedic catchphrase accompanied by an exaggeratedly deep, mock-solemn curtsy.",
            },
          ],
        },
        {
          id: "a2_s1_c14",
          speaker: "Mrs. Quickly",
          stageDirection: "a bassa voce",
          stageDirectionTranslation: "in a low voice",
          lines: [
            {
              id: "a2_s1_c14_l1",
              original: "Madonna",
              literal: "Lady",
              tokens: [
                {
                  word: "Madonna",
                  lemma: "madonna",
                  pos: "noun",
                  meaning: "my lady / noble lady",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "lady / woman",
                },
              ],
              grammarNote: "Quickly opens her message with the archaic aristocratic title 'Madonna' (originally 'mia donna', my lady), pausing for dramatic effect.",
            },
            {
              id: "a2_s1_c14_l2",
              original: "Alice Ford...",
              literal: "Alice Ford...",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper surname)",
                },
              ],
              grammarNote: "Quickly utters Alice's name with theatrical hesitation, dangling the bait before the intrigued knight.",
            },
          ],
        },
        {
          id: "a2_s1_c15",
          speaker: "Sir John Falstaff",
          stageDirection: "alzandosi ed accostandosi a Quickly premuroso",
          stageDirectionTranslation: "rising and attentively approaching Quickly",
          lines: [
            {
              id: "a2_s1_c15_l1",
              original: "Ebben?",
              literal: "Well?",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well? / well then? (apocope of ebbene)",
                },
                {
                  word: "ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well / well then",
                },
              ],
              grammarNote: "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s1_c16",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c16_l1",
              original: "Ahimè! Povera donna!",
              literal: "Alas! Poor woman!",
              tokens: [
                {
                  word: "Ahimè",
                  lemma: "ahimè",
                  pos: "interjection",
                  meaning: "alas / ah me",
                },
                {
                  word: "Povera",
                  lemma: "povero",
                  pos: "adjective",
                  meaning: "poor / pitiful",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
              ],
              grammarNote: "Quickly theatrically laments Alice's plight with her signature recurring sigh 'Povera donna!', feigning deep sympathy.",
            },
            {
              id: "a2_s1_c16_l2",
              original: "Siete un gran seduttore!",
              literal: "You are a great seducer!",
              tokens: [
                {
                  word: "Siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd person plural)",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / big (apocopic)",
                },
                {
                  word: "seduttore",
                  lemma: "seduttore",
                  pos: "noun",
                  meaning: "seducer",
                },
              ],
              grammarNote: "Quickly strokes Falstaff's supreme vanity by declaring him a master seducer.",
            },
          ],
        },
        {
          id: "a2_s1_c17",
          speaker: "Sir John Falstaff",
          stageDirection: "subito",
          stageDirectionTranslation: "immediately",
          lines: [
            {
              id: "a2_s1_c17_l1",
              original: "Lo so. Continua.",
              literal: "I know it. Continue.",
              tokens: [
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it / that",
                },
                {
                  word: "so",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "I know",
                },
                {
                  word: "Continua",
                  lemma: "continuare",
                  pos: "verb",
                  meaning: "continue / go on (imperative 2nd singular)",
                },
              ],
              grammarNote: "Falstaff readily agrees with zero false modesty, delighted by her appraisal of his magnetism.",
            },
          ],
        },
        {
          id: "a2_s1_c19",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s1_c19_l1",
              original: "sta in gran agitazione d'amor per voi; vi dice",
              literal: "is in great agitation of love for you; she tells you",
              tokens: [
                {
                  word: "sta",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "is / stands (3rd person singular)",
                },
                {
                  word: "agitazione",
                  lemma: "agitazione",
                  pos: "noun",
                  meaning: "agitation / turmoil",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocopic)",
                },
                {
                  word: "dice",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tells / says",
                },
              ],
              grammarNote: "Continuing from line 14 ('Madonna Alice Ford...'), Quickly portrays Alice in a state of feverish romantic turmoil.",
            },
            {
              id: "a2_s1_c19_l2",
              original: "ch'ebbe la vostra lettera, che vi ringrazia e che",
              literal: "that she received your letter, that she thanks you and that",
              tokens: [
                {
                  word: "ch'ebbe",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "that she had / received (che + ebbe)",
                },
                {
                  word: "ebbe",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "she had / received (passato remoto)",
                },
                {
                  word: "lettera",
                  lemma: "lettera",
                  pos: "noun",
                  meaning: "letter",
                },
                {
                  word: "ringrazia",
                  lemma: "ringraziare",
                  pos: "verb",
                  meaning: "thanks",
                },
              ],
              grammarNote: "Quickly connects clauses with breathless 'che' conjunctions, recounting Alice's gratitude for Falstaff's billet-doux.",
            },
            {
              id: "a2_s1_c19_l3",
              original: "suo marito esce sempre dalle due alle tre.",
              literal: "her husband always goes out from two to three.",
              tokens: [
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
                {
                  word: "esce",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "goes out / leaves",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
                {
                  word: "dalle due alle tre",
                  lemma: "dalle due alle tre",
                  pos: "idiom",
                  meaning: "from two to three (o'clock)",
                },
              ],
              grammarNote: "Quickly delivers the essential plot cue: Ford's regular absence between two and three o'clock, establishing the central musical motif of the opera.",
            },
          ],
        },
        {
          id: "a2_s1_c20",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c20_l1",
              original: "Dalle due alle tre.",
              literal: "From two to three.",
              tokens: [
                {
                  word: "Dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + le)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two (two o'clock)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + le)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three (three o'clock)",
                },
              ],
              grammarNote: "Meg repeats the exact time frame with wicked delight, reinforcing the deadline for their preparations.",
            },
          ],
        },
        {
          id: "a2_s1_c21",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c21_l1",
              original: "Vostra grazia a quell'ora",
              literal: "Your grace at that hour",
              tokens: [
                {
                  word: "Vostra",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "grazia",
                  lemma: "grazia",
                  pos: "noun",
                  meaning: "grace",
                },
                {
                  word: "ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "hour / time",
                },
              ],
              grammarNote: "Quickly assures Falstaff that during that exact window he will have unobstructed access to the house.",
            },
            {
              id: "a2_s1_c21_l2",
              original: "potrà liberamente salir ove dimora",
              literal: "will be able freely to go up where dwells",
              tokens: [
                {
                  word: "potrà",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "will be able to (future 3rd singular)",
                },
                {
                  word: "liberamente",
                  lemma: "liberamente",
                  pos: "adverb",
                  meaning: "freely",
                },
                {
                  word: "salir",
                  lemma: "salire",
                  pos: "verb",
                  meaning: "to ascend / go up (apocopic)",
                },
                {
                  word: "ove",
                  lemma: "ove",
                  pos: "adverb",
                  meaning: "where (literary)",
                },
                {
                  word: "dimora",
                  lemma: "dimorare",
                  pos: "verb",
                  meaning: "dwells / lives",
                },
              ],
              grammarNote: "Quickly uses elevated poetic diction ('salir', 'ove dimora') to lend an aura of high romance to the illicit assignation.",
            },
            {
              id: "a2_s1_c21_l3",
              original: "la bella Alice! Povera donna! le angosce sue",
              literal: "fair Alice! Poor woman! her anguish",
              tokens: [
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice",
                },
                {
                  word: "Povera",
                  lemma: "povero",
                  pos: "adjective",
                  meaning: "poor",
                },
                {
                  word: "angosce",
                  lemma: "angoscia",
                  pos: "noun",
                  meaning: "anguish / torments",
                },
              ],
              grammarNote: "Quickly melodramatically interrupts herself with another 'Povera donna!', milking Alice's supposed suffering for maximum comic effect.",
            },
            {
              id: "a2_s1_c21_l4",
              original: "son crudeli! ha un marito geloso!",
              literal: "are cruel! she has a jealous husband!",
              tokens: [
                {
                  word: "son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "are (apocopic form of sono)",
                },
                {
                  word: "crudeli",
                  lemma: "crudele",
                  pos: "adjective",
                  meaning: "cruel",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
                {
                  word: "geloso",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous",
                },
              ],
              grammarNote: "Quickly underscores Master Ford's ferocious jealousy, heightening the thrill of danger and conquest for Falstaff.",
            },
          ],
        },
        {
          id: "a2_s1_c22",
          speaker: "Sir John Falstaff",
          stageDirection: "rimuginando le parole di Quickly",
          stageDirectionTranslation: "mulling over Quickly's words",
          lines: [
            {
              id: "a2_s1_c22_l1",
              original: "Dalle due alle tre.",
              literal: "From two to three.",
              tokens: [
                {
                  word: "Dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + le)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two (two o'clock)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + le)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three (three o'clock)",
                },
              ],
              grammarNote: "Meg repeats the exact time frame with wicked delight, reinforcing the deadline for their preparations.",
            },
          ],
        },
        {
          id: "a2_s1_c23",
          speaker: "Sir John Falstaff",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a2_s1_c23_l1",
              original: "Le dirai che impazïente aspetto quell'ora.",
              literal: "You will tell her that impatient I await that hour.",
              tokens: [
                {
                  word: "dirai",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "you will tell (future 2nd singular)",
                },
                {
                  word: "impazïente",
                  lemma: "impaziente",
                  pos: "adjective",
                  meaning: "impatient (with diaeresis)",
                },
                {
                  word: "aspetto",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "I await / wait for",
                },
                {
                  word: "ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "hour / time",
                },
              ],
              grammarNote: "Falstaff eagerly accepts the appointment. The diaeresis in 'impazïente' indicates five poetic syllables (im-pa-zi-en-te).",
            },
            {
              id: "a2_s1_c23_l2",
              original: "Al mio dovere non mancherò.",
              literal: "To my duty I shall not fail.",
              tokens: [
                {
                  word: "dovere",
                  lemma: "dovere",
                  pos: "noun",
                  meaning: "duty",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "mancherò",
                  lemma: "mancare",
                  pos: "verb",
                  meaning: "I shall fail / fall short (future 1st singular)",
                },
              ],
              grammarNote: "Falstaff comically portrays illicit amorous conquest as a solemn knightly obligation ('al mio dovere').",
            },
          ],
        },
        {
          id: "a2_s1_c24",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c24_l1",
              original: "Ben detto.",
              literal: "Well said.",
              tokens: [
                {
                  word: "Ben",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well (apocopic)",
                },
                {
                  word: "detto",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "said (past participle)",
                },
              ],
              grammarNote: "Quickly approves with dry comic irony before introducing the second stage of her trap.",
            },
            {
              id: "a2_s1_c24_l2",
              original: "Ma c'è un'altra ambasciata per vostra grazia.",
              literal: "But there is another embassy for your grace.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is",
                },
                {
                  word: "altra",
                  lemma: "altro",
                  pos: "adjective",
                  meaning: "other / another",
                },
                {
                  word: "ambasciata",
                  lemma: "ambasciata",
                  pos: "noun",
                  meaning: "embassy / diplomatic message",
                },
              ],
              grammarNote: "Quickly refers to her message as an 'ambasciata' (embassy), maintaining the parody of high-stakes court diplomacy.",
            },
          ],
        },
        {
          id: "a2_s1_c25",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c25_l1",
              original: "Parla.",
              literal: "Speak.",
              tokens: [
                {
                  word: "Parla",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "speak (imperative 2nd singular)",
                },
                {
                  word: "parlare",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "to speak",
                },
              ],
              grammarNote: "Falstaff issues a lordly, monosyllabic command to hear the second message.",
            },
          ],
        },
        {
          id: "a2_s1_c26",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c26_l1",
              original: "La bella Meg",
              literal: "Fair Meg",
              tokens: [
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
              ],
              grammarNote: "Quickly introduces Meg Page, recipient of Falstaff's second identical love letter.",
            },
          ],
        },
        {
          id: "a2_s1_c27",
          speaker: "Mrs. Quickly",
          stageDirection: "un angelo che innamora a guardarla",
          stageDirectionTranslation: "an angel who makes one fall in love just looking at her",
          lines: [
            {
              id: "a2_s1_c27_l1",
              original: "anch'essa vi saluta molto amorosamente;",
              literal: "she too greets you very lovingly;",
              tokens: [
                {
                  word: "anch'essa",
                  lemma: "anch'esso",
                  pos: "pronoun",
                  meaning: "she too / she as well",
                },
                {
                  word: "saluta",
                  lemma: "salutare",
                  pos: "verb",
                  meaning: "greets",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "very / much",
                },
                {
                  word: "amorosamente",
                  lemma: "amorosamente",
                  pos: "adverb",
                  meaning: "lovingly / amorously",
                },
              ],
              grammarNote: "Quickly assures Falstaff that Meg reciprocates his passion with equal tenderness.",
            },
            {
              id: "a2_s1_c27_l2",
              original: "dice che suo marito è assai di rado assente.",
              literal: "says that her husband is very rarely absent.",
              tokens: [
                {
                  word: "dice",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "says / tells",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
                {
                  word: "assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "very / greatly",
                },
                {
                  word: "di rado",
                  lemma: "di rado",
                  pos: "adverb",
                  meaning: "rarely / seldom",
                },
                {
                  word: "assente",
                  lemma: "assente",
                  pos: "adjective",
                  meaning: "absent",
                },
              ],
              grammarNote: "Quickly explains why Meg cannot receive him immediately, focusing Falstaff's attention squarely on Alice.",
            },
            {
              id: "a2_s1_c27_l3",
              original: "Povera donna! un giglio di candore e di fé!",
              literal: "Poor woman! a lily of purity and of faith!",
              tokens: [
                {
                  word: "Povera",
                  lemma: "povero",
                  pos: "adjective",
                  meaning: "poor",
                },
                {
                  word: "giglio",
                  lemma: "giglio",
                  pos: "noun",
                  meaning: "lily",
                },
                {
                  word: "candore",
                  lemma: "candore",
                  pos: "noun",
                  meaning: "candor / whiteness / purity",
                },
                {
                  word: "fé",
                  lemma: "fede",
                  pos: "noun",
                  meaning: "faith / fidelity (apocopic)",
                },
              ],
              grammarNote: "Quickly ironically paints Meg as an innocent lily of marital fidelity ('candore e di fé') consumed by passion.",
            },
            {
              id: "a2_s1_c27_l4",
              original: "Voi le stregate tutte.",
              literal: "You bewitch them all.",
              tokens: [
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "le",
                  lemma: "le",
                  pos: "pronoun",
                  meaning: "them (feminine plural direct object)",
                },
                {
                  word: "stregate",
                  lemma: "stregare",
                  pos: "verb",
                  meaning: "you bewitch / enchant",
                },
                {
                  word: "tutte",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all (feminine plural)",
                },
              ],
              grammarNote: "Quickly brings her flattery to a climax by telling Falstaff he holds magical sway over all womankind.",
            },
          ],
        },
        {
          id: "a2_s1_c28",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c28_l1",
              original: "Stregoneria non c'è,",
              literal: "Witchcraft there is none,",
              tokens: [
                {
                  word: "Stregoneria",
                  lemma: "stregoneria",
                  pos: "noun",
                  meaning: "witchcraft / sorcery",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is",
                },
              ],
              grammarNote: "Falstaff denies the occult, attributing his success entirely to his own masculine appeal.",
            },
            {
              id: "a2_s1_c28_l2",
              original: "ma un certo qual mio fascino personal... Dimmi: l'altra",
              literal: "but a certain personal charm of mine... Tell me: does the other",
              tokens: [
                {
                  word: "fascino",
                  lemma: "fascino",
                  pos: "noun",
                  meaning: "charm / fascination",
                },
                {
                  word: "personal",
                  lemma: "personale",
                  pos: "adjective",
                  meaning: "personal (apocopic)",
                },
                {
                  word: "Dimmi",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell me (di' + mi)",
                },
                {
                  word: "l'altra",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "the other (woman)",
                },
              ],
              grammarNote: "Falstaff preens himself on his 'fascino personal', but abruptly checks whether the two women know of each other's letters.",
            },
            {
              id: "a2_s1_c28_l3",
              original: "sa di quest'altra?",
              literal: "know of this other?",
              tokens: [
                {
                  word: "sa",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "knows",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of / about",
                },
                {
                  word: "quest'altra",
                  lemma: "quest'altro",
                  pos: "pronoun",
                  meaning: "this other (woman)",
                },
              ],
              grammarNote: "Falstaff questions Quickly closely to confirm his identical love letters have remained a secret.",
            },
          ],
        },
        {
          id: "a2_s1_c29",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c29_l1",
              original: "Oibò!",
              literal: "Nonsense!",
              tokens: [
                {
                  word: "Oibò",
                  lemma: "oibò",
                  pos: "interjection",
                  meaning: "fie! / nonsense! / out upon it!",
                },
                {
                  word: "oibò",
                  lemma: "oibò",
                  pos: "adverb",
                  meaning: "by no means / not at all / heaven forbid",
                },
              ],
              grammarNote: "Quickly's instinctive interjection expressing comical outrage and moral dismissal.",
            },
            {
              id: "a2_s1_c29_l2",
              original: "La donna nasce scaltra.",
              literal: "Woman is born cunning.",
              tokens: [
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
                {
                  word: "nasce",
                  lemma: "nascere",
                  pos: "verb",
                  meaning: "is born",
                },
                {
                  word: "scaltra",
                  lemma: "scaltro",
                  pos: "adjective",
                  meaning: "cunning / shrewd / astute",
                },
              ],
              grammarNote: "Quickly utters a comedic proverb on innate female shrewdness to put Falstaff completely off his guard.",
            },
            {
              id: "a2_s1_c29_l3",
              original: "Non temete.",
              literal: "Do not fear.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "temete",
                  lemma: "temere",
                  pos: "verb",
                  meaning: "fear (2nd person plural imperative)",
                },
              ],
              grammarNote: "Quickly comforts Falstaff, ensuring he walks confidently into the trap.",
            },
          ],
        },
        {
          id: "a2_s1_c30",
          speaker: "Sir John Falstaff",
          stageDirection: "cercando nella sua borsa",
          stageDirectionTranslation: "searching in his purse",
          lines: [
            {
              id: "a2_s1_c30_l1",
              original: "Or ti vo' remunerar...",
              literal: "Now I want to reward you...",
              tokens: [
                {
                  word: "Or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocopic)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (indirect object)",
                },
                {
                  word: "vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want / wish (apocopic form of voglio)",
                },
                {
                  word: "remunerar",
                  lemma: "remunerare",
                  pos: "verb",
                  meaning: "to reward / remunerate (apocopic)",
                },
              ],
              grammarNote: "Falstaff reaches into his purse to pay Quickly for her messenger services.",
            },
          ],
        },
        {
          id: "a2_s1_c31",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c31_l1",
              original: "Chi semina grazie,",
              literal: "He who sows favors,",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who / he who / whoever",
                },
                {
                  word: "semina",
                  lemma: "seminare",
                  pos: "verb",
                  meaning: "sows",
                },
                {
                  word: "grazie",
                  lemma: "grazia",
                  pos: "noun",
                  meaning: "favors / kindnesses / thanks",
                },
              ],
              grammarNote: "Quickly recites a pious rhyming aphorism ('Chi semina grazie, raccoglie amore') to encourage a generous gratuity.",
            },
            {
              id: "a2_s1_c31_l2",
              original: "raccoglie amore.",
              literal: "reaps love.",
              tokens: [
                {
                  word: "raccoglie",
                  lemma: "raccogliere",
                  pos: "verb",
                  meaning: "reaps / harvests / collects",
                },
                {
                  word: "amore",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love",
                },
              ],
              grammarNote: "The completion of Quickly's rhyming moral maxim on the rewards of generosity.",
            },
          ],
        },
        {
          id: "a2_s1_c32",
          speaker: "Sir John Falstaff",
          stageDirection: "estraendo una moneta e porgendola a Quickly",
          stageDirectionTranslation: "estraendo una moneta e porgendola to Quickly",
          lines: [
            {
              id: "a2_s1_c32_l1",
              original: "Prendi, Mercuriofemina.",
              literal: "Take this, female Mercury.",
              tokens: [
                {
                  word: "Prendi",
                  lemma: "prendere",
                  pos: "verb",
                  meaning: "take (imperative 2nd singular)",
                },
                {
                  word: "Mercuriofemina",
                  lemma: "Mercuriofemina",
                  pos: "noun",
                  meaning: "female Mercury / female messenger of the gods",
                },
              ],
              grammarNote: "Falstaff coins a classical portmanteau ('Mercuriofemina'), comparing Quickly to Mercury, messenger god and patron of thieves.",
            },
          ],
        },
        {
          id: "a2_s1_c33",
          speaker: "Sir John Falstaff",
          stageDirection: "congedandola col gesto",
          stageDirectionTranslation: "dismissing her with a gesture",
          lines: [
            {
              id: "a2_s1_c33_l1",
              original: "Saluta le tue dame.",
              literal: "Greet your ladies.",
              tokens: [
                {
                  word: "Saluta",
                  lemma: "salutare",
                  pos: "verb",
                  meaning: "greet (imperative 2nd singular)",
                },
                {
                  word: "tue",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "dame",
                  lemma: "dama",
                  pos: "noun",
                  meaning: "ladies / gentlewomen",
                },
              ],
              grammarNote: "Falstaff instructs Quickly to convey his greetings to Alice and Meg as he dismisses her.",
            },
          ],
        },
        {
          id: "a2_s1_c34",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s1_c34_l1",
              original: "M'inchino.",
              literal: "I bow.",
              tokens: [
                {
                  word: "M'inchino",
                  lemma: "inchinarsi",
                  pos: "verb",
                  meaning: "I bow / curtsy (mi + inchino)",
                },
                {
                  word: "inchinarsi",
                  lemma: "inchinarsi",
                  pos: "verb",
                  meaning: "to bow / curtsy",
                },
              ],
              grammarNote: "Mistress Quickly takes her leave with another elaborate, mock-respectful curtsy.",
            },
          ],
        },
        {
          id: "a2_s1_c35",
          speaker: "Mrs. Quickly",
          stageDirection: "esce",
          stageDirectionTranslation: "exits",
          lines: [
            {
              id: "a2_s1_c35_l1",
              original: "Falstaff solo, poi Bardolfo, poi mr. Ford, poi Pistola.",
              literal: "Falstaff alone, then Bardolfo, then Mr. Ford, then Pistola.",
              tokens: [
                {
                  word: "solo",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "mr.",
                  lemma: "mister",
                  pos: "noun",
                  meaning: "Mister (honorific title)",
                },
                {
                  word: "Bardolfo",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo (proper name)",
                },
                {
                  word: "Pistola",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistola (proper name)",
                },
              ],
              grammarNote: "Libretto stage direction marking the transition to Falstaff's soliloquy and the subsequent arrival of Ford in disguise.",
            },
          ],
        },
        {
          id: "a2_s1_c36",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c36_l1",
              original: "Alice è mia!",
              literal: "Alice is mine!",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "mine",
                },
              ],
              grammarNote: "Left alone, Falstaff bursts into ecstatic jubilation at his impending conquest of Alice Ford.",
            },
          ],
        },
        {
          id: "a2_s1_c37",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c37_l1",
              original: "Va', vecchio John, va', va' per la tua via.",
              literal: "Go, old John, go, go on your way.",
              tokens: [
                {
                  word: "Va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (imperative 2nd singular of andare)",
                },
                {
                  word: "vecchio",
                  lemma: "vecchio",
                  pos: "adjective",
                  meaning: "old",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "noun",
                  meaning: "way / path / road",
                },
              ],
              grammarNote: "Falstaff begins his famous celebratory soliloquy ('Va, vecchio John'), boasting of his enduring prowess and vitality.",
            },
            {
              id: "a2_s1_c37_l2",
              original: "Questa tua vecchia carne ancora spreme",
              literal: "This old flesh of yours still squeezes out",
              tokens: [
                {
                  word: "Questa",
                  lemma: "questo",
                  pos: "adjective",
                  meaning: "this",
                },
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "carne",
                  lemma: "carne",
                  pos: "noun",
                  meaning: "flesh",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet",
                },
                {
                  word: "spreme",
                  lemma: "spremere",
                  pos: "verb",
                  meaning: "squeezes / presses out",
                },
              ],
              grammarNote: "Falstaff employs earthy, sensual imagery ('carne', 'spreme') to praise his aging body's capacity for pleasure.",
            },
            {
              id: "a2_s1_c37_l3",
              original: "qualche dolcezza a te.",
              literal: "some sweetness for you.",
              tokens: [
                {
                  word: "qualche",
                  lemma: "qualche",
                  pos: "adjective",
                  meaning: "some / a few",
                },
                {
                  word: "dolcezza",
                  lemma: "dolcezza",
                  pos: "noun",
                  meaning: "sweetness / delight",
                },
                {
                  word: "te",
                  lemma: "te",
                  pos: "pronoun",
                  meaning: "you",
                },
              ],
              grammarNote: "Syntactic continuation from line 52: Falstaff's old flesh can still yield sweet delights for him.",
            },
            {
              id: "a2_s1_c37_l4",
              original: "Tutte le donne ammutinate insieme",
              literal: "All the women mutinying together",
              tokens: [
                {
                  word: "Tutte",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all",
                },
                {
                  word: "donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
                {
                  word: "ammutinate",
                  lemma: "ammutinato",
                  pos: "adjective",
                  meaning: "mutinous / in revolt",
                },
                {
                  word: "insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Falstaff fantasizes that women everywhere are staging a mutiny against their marriages out of desire for him.",
            },
            {
              id: "a2_s1_c37_l5",
              original: "si dannano per me!",
              literal: "are damning themselves for me!",
              tokens: [
                {
                  word: "si dannano",
                  lemma: "dannarsi",
                  pos: "verb",
                  meaning: "they damn themselves (reflexive)",
                },
                {
                  word: "dannano",
                  lemma: "dannare",
                  pos: "verb",
                  meaning: "they damn",
                },
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for",
                },
                {
                  word: "me",
                  lemma: "me",
                  pos: "pronoun",
                  meaning: "me",
                },
              ],
              grammarNote: "Falstaff gloats that women are willingly damning their souls ('si dannano') for the sake of his love.",
            },
            {
              id: "a2_s1_c37_l6",
              original: "Buon corpo di sir John, ch'io nutro e sazio,",
              literal: "Good body of Sir John, which I feed and sate,",
              tokens: [
                {
                  word: "corpo",
                  lemma: "corpo",
                  pos: "noun",
                  meaning: "body",
                },
                {
                  word: "sir",
                  lemma: "sir",
                  pos: "noun",
                  meaning: "Sir (knightly honorific)",
                },
                {
                  word: "nutro",
                  lemma: "nutrire",
                  pos: "verb",
                  meaning: "I nourish / feed",
                },
                {
                  word: "sazio",
                  lemma: "saziare",
                  pos: "verb",
                  meaning: "I sate / satisfy",
                },
              ],
              grammarNote: "Falstaff apostrophizes his own corpulent body as a faithful partner whom he tenderly pampers.",
            },
            {
              id: "a2_s1_c37_l7",
              original: "va', ti ringrazio.",
              literal: "go, I thank you.",
              tokens: [
                {
                  word: "va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (imperative 2nd singular)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (direct object)",
                },
                {
                  word: "ringrazio",
                  lemma: "ringraziare",
                  pos: "verb",
                  meaning: "I thank",
                },
              ],
              grammarNote: "Falstaff concludes his exuberant soliloquy by warmly thanking his belly for its unflagging service.",
            },
          ],
        },
        {
          id: "a2_s1_c38",
          speaker: "Bardolfo",
          stageDirection: "entrando da sinistra",
          stageDirectionTranslation: "entering from the left",
          lines: [
            {
              id: "a2_s1_c38_l1",
              original: "Padron, di là c'è un certo messer mastro Fontana",
              literal: "Master, over there is a certain Master Master Fontana",
              tokens: [
                {
                  word: "Padron",
                  lemma: "padrone",
                  pos: "noun",
                  meaning: "master (apocopic)",
                },
                {
                  word: "messer",
                  lemma: "messer",
                  pos: "noun",
                  meaning: "master / sir",
                },
                {
                  word: "mastro",
                  lemma: "mastro",
                  pos: "noun",
                  meaning: "master artisan",
                },
                {
                  word: "Fontana",
                  lemma: "Fontana",
                  pos: "noun",
                  meaning: "Fontana (Master Brook)",
                },
              ],
              grammarNote: "Bardolfo re-enters announcing Master Ford disguised as 'messer mastro Fontana' (Boito's translation of Master Brook).",
            },
            {
              id: "a2_s1_c38_l2",
              original: "che anela di conoscervi; offre una damigiana",
              literal: "who longs to meet you; he offers a demijohn",
              tokens: [
                {
                  word: "anela",
                  lemma: "anelare",
                  pos: "verb",
                  meaning: "yearns / pants / longs",
                },
                {
                  word: "conoscervi",
                  lemma: "conoscere",
                  pos: "verb",
                  meaning: "to know you / meet you (conoscere + vi)",
                },
                {
                  word: "offre",
                  lemma: "offrire",
                  pos: "verb",
                  meaning: "offers",
                },
                {
                  word: "damigiana",
                  lemma: "damigiana",
                  pos: "noun",
                  meaning: "demijohn / large flagon",
                },
              ],
              grammarNote: "Bardolfo conveys the visitor's eager yearning and presents the introductory bribe of wine.",
            },
            {
              id: "a2_s1_c38_l3",
              original: "di Cipro per l'asciolvere di vostra signoria.",
              literal: "of Cyprus wine for your lordship's morning snack.",
              tokens: [
                {
                  word: "Cipro",
                  lemma: "Cipro",
                  pos: "noun",
                  meaning: "Cyprus (wine)",
                },
                {
                  word: "asciolvere",
                  lemma: "asciolvere",
                  pos: "noun",
                  meaning: "morning snack / late breakfast",
                },
                {
                  word: "vostra signoria",
                  lemma: "vostra signoria",
                  pos: "idiom",
                  meaning: "your lordship (formal address)",
                },
              ],
              grammarNote: "Vino di Cipro was a rich, sweet wine; 'asciolvere' is an archaic Italian term for breakfast or light morning meal.",
            },
          ],
        },
        {
          id: "a2_s1_c39",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c39_l1",
              original: "Il suo nome è Fontana?",
              literal: "His name is Fontana?",
              tokens: [
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "Fontana",
                  lemma: "Fontana",
                  pos: "noun",
                  meaning: "Fontana (proper name, lit. Fountain)",
                },
              ],
              grammarNote: "Falstaff notes the name 'Fontana' (fountain), setting up an immediate pun on gushing wine.",
            },
          ],
        },
        {
          id: "a2_s1_c40",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s1_c40_l1",
              original: "Sì.",
              literal: "Yes.",
              tokens: [
                {
                  word: "Sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes",
                },
              ],
              grammarNote: "Caius insists that Ford is the primary dupe who engineered the whole debacle.",
            },
          ],
        },
        {
          id: "a2_s1_c41",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c41_l1",
              original: "Bene accolta sia",
              literal: "Well received may be",
              tokens: [
                {
                  word: "Bene",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well",
                },
                {
                  word: "accolta",
                  lemma: "accogliere",
                  pos: "verb",
                  meaning: "welcomed / received (past participle feminine)",
                },
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "may be (subjunctive present 3rd singular)",
                },
              ],
              grammarNote: "Falstaff delivers an ornate, inverted subjunctive welcome playing on the guest's name.",
            },
            {
              id: "a2_s1_c41_l2",
              original: "la fontana che spande un simile liquore!",
              literal: "the fountain that pours forth such a liquor!",
              tokens: [
                {
                  word: "fontana",
                  lemma: "fontana",
                  pos: "noun",
                  meaning: "fountain",
                },
                {
                  word: "spande",
                  lemma: "spandere",
                  pos: "verb",
                  meaning: "pours out / sheds / diffuses",
                },
                {
                  word: "simile",
                  lemma: "simile",
                  pos: "adjective",
                  meaning: "such / similar",
                },
                {
                  word: "liquore",
                  lemma: "liquore",
                  pos: "noun",
                  meaning: "liquor / wine",
                },
              ],
              grammarNote: "Falstaff completes his pun: any fountain that gushes Cyprus wine instead of water is doubly welcome.",
            },
            {
              id: "a2_s1_c41_l3",
              original: "Entri.",
              literal: "Let him enter.",
              tokens: [
                {
                  word: "Entri",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "let him enter (subjunctive 3rd person singular)",
                },
                {
                  word: "entrare",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "to enter",
                },
              ],
              grammarNote: "Falstaff gives the order to admit Master Fontana.",
            },
          ],
        },
        {
          id: "a2_s1_c42",
          speaker: "Sir John Falstaff",
          stageDirection: "Bardolfo esce",
          stageDirectionTranslation: "Bardolfo exits",
          lines: [
          ],
        },
        {
          id: "a2_s1_c43",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c43_l1",
              original: "Va', vecchio John, per la tua via.",
              literal: "Go, old John, on your way.",
              tokens: [
                {
                  word: "Va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (imperative 2nd singular)",
                },
                {
                  word: "vecchio",
                  lemma: "vecchio",
                  pos: "adjective",
                  meaning: "old",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "noun",
                  meaning: "way / path",
                },
              ],
              grammarNote: "Falstaff murmurs his cheerful mantra once more, savoring his unbroken streak of good fortune.",
            },
            {
              id: "a2_s1_c43_l2",
              original: "Ford travestito entra da sinistra, preceduto da Bardolfo che si ferma",
              literal: "Ford in disguise enters from the left, preceded by Bardolfo who stops",
              tokens: [
                {
                  word: "travestito",
                  lemma: "travestire",
                  pos: "adjective",
                  meaning: "disguised",
                },
                {
                  word: "entra",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "enters",
                },
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left (stage left)",
                },
                {
                  word: "preceduto",
                  lemma: "precedere",
                  pos: "verb",
                  meaning: "preceded (past participle)",
                },
                {
                  word: "ferma",
                  lemma: "fermarsi",
                  pos: "verb",
                  meaning: "stops (reflexive)",
                },
              ],
              grammarNote: "Stage direction describing Ford's entry in disguise, ushered in ceremoniously by Bardolfo.",
            },
            {
              id: "a2_s1_c43_l3",
              original: "all'uscio e s'inchina al suo passaggio e seguìto da Pistola, il quale tiene",
              literal: "at the doorway and bows at his passage and followed by Pistola, who holds",
              tokens: [
                {
                  word: "uscio",
                  lemma: "uscio",
                  pos: "noun",
                  meaning: "doorway / door",
                },
                {
                  word: "s'inchina",
                  lemma: "inchinarsi",
                  pos: "verb",
                  meaning: "bows (reflexive)",
                },
                {
                  word: "passaggio",
                  lemma: "passaggio",
                  pos: "noun",
                  meaning: "passage / passing",
                },
                {
                  word: "seguìto",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "followed (past participle)",
                },
                {
                  word: "tiene",
                  lemma: "tenere",
                  pos: "verb",
                  meaning: "holds",
                },
              ],
              grammarNote: "Stage direction showing Bardolfo's obsequious bowing and Pistola carrying the wine.",
            },
            {
              id: "a2_s1_c43_l4",
              original: "una damigiana che depone sul tavolo.",
              literal: "a demijohn which he places on the table.",
              tokens: [
                {
                  word: "damigiana",
                  lemma: "damigiana",
                  pos: "noun",
                  meaning: "demijohn / flagon",
                },
                {
                  word: "depone",
                  lemma: "deporre",
                  pos: "verb",
                  meaning: "places / sets down",
                },
                {
                  word: "tavolo",
                  lemma: "tavolo",
                  pos: "noun",
                  meaning: "table",
                },
              ],
              grammarNote: "Stage direction detailing Pistola placing the gift of wine onto Falstaff's table.",
            },
            {
              id: "a2_s1_c43_l5",
              original: "Pistola e Bardolfo restano nel fondo. Ford tiene un sacchetto in mano.",
              literal: "Pistola and Bardolfo remain in the background. Ford holds a small bag in hand.",
              tokens: [
                {
                  word: "restano",
                  lemma: "restare",
                  pos: "verb",
                  meaning: "remain / stay",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "background / back of stage",
                },
                {
                  word: "sacchetto",
                  lemma: "sacchetto",
                  pos: "noun",
                  meaning: "small bag / pouch",
                },
                {
                  word: "mano",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hand",
                },
              ],
              grammarNote: "Stage direction establishing positions: the two rogues watch from upstage while Ford grips his money pouch.",
            },
          ],
        },
        {
          id: "a2_s1_c44",
          speaker: "Ford",
          stageDirection: "avanzandosi dopo un grande inchino a Falstaff",
          stageDirectionTranslation: "stepping forward after a deep bow to Falstaff",
          lines: [
            {
              id: "a2_s1_c44_l1",
              original: "Signore,",
              literal: "Sir,",
              tokens: [
                {
                  word: "Signore",
                  lemma: "signore",
                  pos: "noun",
                  meaning: "sir / lord / gentleman",
                },
                {
                  word: "signore",
                  lemma: "signore",
                  pos: "noun",
                  meaning: "sir",
                },
              ],
              grammarNote: "Ford greets Falstaff with formal courtesy.",
            },
            {
              id: "a2_s1_c44_l2",
              original: "v'assista il cielo!",
              literal: "may heaven assist you!",
              tokens: [
                {
                  word: "v'assista",
                  lemma: "assistere",
                  pos: "verb",
                  meaning: "may it assist you (voi + assista)",
                },
                {
                  word: "assista",
                  lemma: "assistere",
                  pos: "verb",
                  meaning: "may assist (subjunctive present 3rd singular)",
                },
                {
                  word: "cielo",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "heaven / sky",
                },
              ],
              grammarNote: "Ford offers a traditional pious salutation invoking heaven's blessing.",
            },
          ],
        },
        {
          id: "a2_s1_c45",
          speaker: "Sir John Falstaff",
          stageDirection: "ricambiando il saluto",
          stageDirectionTranslation: "returning the greeting",
          lines: [
            {
              id: "a2_s1_c45_l1",
              original: "Assista voi pur, signore.",
              literal: "May it assist you as well, sir.",
              tokens: [
                {
                  word: "Assista",
                  lemma: "assistere",
                  pos: "verb",
                  meaning: "may it assist (subjunctive 3rd singular)",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "pur",
                  lemma: "pure",
                  pos: "adverb",
                  meaning: "also / as well (apocopic form of pure)",
                },
                {
                  word: "signore",
                  lemma: "signore",
                  pos: "noun",
                  meaning: "sir",
                },
              ],
              grammarNote: "Falstaff returns the greeting with symmetric courtesy; 'pur' means 'likewise / as well'.",
            },
          ],
        },
        {
          id: "a2_s1_c46",
          speaker: "Ford",
          stageDirection: "sempre complimentoso",
          stageDirectionTranslation: "still complimentary",
          lines: [
            {
              id: "a2_s1_c46_l1",
              original: "Io sono,",
              literal: "I am,",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "sono",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "am",
                },
              ],
              grammarNote: "Ford begins a polite, self-effacing preamble.",
            },
            {
              id: "a2_s1_c46_l2",
              original: "davver, molto indiscreto, e vi chiedo perdono,",
              literal: "indeed, very indiscreet, and I ask your pardon,",
              tokens: [
                {
                  word: "davver",
                  lemma: "davvero",
                  pos: "adverb",
                  meaning: "indeed / truly (apocopic)",
                },
                {
                  word: "indiscreto",
                  lemma: "indiscreto",
                  pos: "adjective",
                  meaning: "indiscreet / intrusive",
                },
                {
                  word: "chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I ask / beg",
                },
                {
                  word: "perdono",
                  lemma: "perdono",
                  pos: "noun",
                  meaning: "pardon / forgiveness",
                },
              ],
              grammarNote: "Ford plays the part of a contrite visitor apologizing for his uninvited intrusion.",
            },
            {
              id: "a2_s1_c46_l3",
              original: "se, senza cerimonie, qui vengo e sprovveduto",
              literal: "if, without ceremonies, I come here and unprovided",
              tokens: [
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "cerimonie",
                  lemma: "cerimonia",
                  pos: "noun",
                  meaning: "ceremonies / formalities",
                },
                {
                  word: "vengo",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "I come",
                },
                {
                  word: "sprovveduto",
                  lemma: "sprovveduto",
                  pos: "adjective",
                  meaning: "unprovided / lacking",
                },
              ],
              grammarNote: "Ford apologizes for bypassing normal social etiquette and introductions.",
            },
            {
              id: "a2_s1_c46_l4",
              original: "di più lunghi preamboli.",
              literal: "with longer preambles.",
              tokens: [
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "lunghi",
                  lemma: "lungo",
                  pos: "adjective",
                  meaning: "long",
                },
                {
                  word: "preamboli",
                  lemma: "preambolo",
                  pos: "noun",
                  meaning: "preambles / introductory remarks",
                },
              ],
              grammarNote: "Completing Ford's apology: he arrives without lengthy preparatory speeches.",
            },
          ],
        },
        {
          id: "a2_s1_c47",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c47_l1",
              original: "Voi siete il benvenuto.",
              literal: "You are welcome.",
              tokens: [
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "are",
                },
                {
                  word: "benvenuto",
                  lemma: "benvenuto",
                  pos: "adjective",
                  meaning: "welcome",
                },
              ],
              grammarNote: "Falstaff graciously puts his wealthy visitor at ease.",
            },
          ],
        },
        {
          id: "a2_s1_c48",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c48_l1",
              original: "In me vedete un uomo ch'ha un'abbondanza grande",
              literal: "In me you see a man who has a great abundance",
              tokens: [
                {
                  word: "vedete",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you see",
                },
                {
                  word: "uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man",
                },
                {
                  word: "ch'ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "who has (che + ha)",
                },
                {
                  word: "abbondanza",
                  lemma: "abbondanza",
                  pos: "noun",
                  meaning: "abundance / wealth",
                },
                {
                  word: "grande",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great",
                },
              ],
              grammarNote: "Ford establishes his alias as a man of extraordinary private fortune.",
            },
            {
              id: "a2_s1_c48_l2",
              original: "degli agi della vita; un uom che spende e spande",
              literal: "of the comforts of life; a man who spends and squanders",
              tokens: [
                {
                  word: "agi",
                  lemma: "agio",
                  pos: "noun",
                  meaning: "comforts / luxuries / ease",
                },
                {
                  word: "vita",
                  lemma: "vita",
                  pos: "noun",
                  meaning: "life",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocopic)",
                },
                {
                  word: "spende e spande",
                  lemma: "spendere e spandere",
                  pos: "idiom",
                  meaning: "spends and squanders / throws money around",
                },
              ],
              grammarNote: "The popular Italian idiom 'spendere e spandere' characterizes Fontana as a lavish, open-handed spendthrift.",
            },
            {
              id: "a2_s1_c48_l3",
              original: "come più gli talenta pur di passar mattana.",
              literal: "as it best pleases him just to indulge a whim.",
              tokens: [
                {
                  word: "talenta",
                  lemma: "talentare",
                  pos: "verb",
                  meaning: "pleases / suits (archaic)",
                },
                {
                  word: "pur di",
                  lemma: "pur di",
                  pos: "conjunction",
                  meaning: "just to / in order to",
                },
                {
                  word: "passar",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "to pass / indulge (apocopic)",
                },
                {
                  word: "mattana",
                  lemma: "mattana",
                  pos: "noun",
                  meaning: "whim / caprice / mad craving",
                },
              ],
              grammarNote: "'Talentare' is an archaic verb meaning to please; 'passar mattana' means to gratify an eccentric craving or madness.",
            },
            {
              id: "a2_s1_c48_l4",
              original: "Io mi chiamo Fontana!",
              literal: "My name is Fontana!",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "mi chiamo",
                  lemma: "chiamarsi",
                  pos: "verb",
                  meaning: "my name is / I call myself",
                },
                {
                  word: "chiamo",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "I call",
                },
                {
                  word: "Fontana",
                  lemma: "Fontana",
                  pos: "noun",
                  meaning: "Fontana (Master Brook)",
                },
              ],
              grammarNote: "Ford formally announces his pseudonym 'Fontana' with great theatricality.",
            },
          ],
        },
        {
          id: "a2_s1_c49",
          speaker: "Sir John Falstaff",
          stageDirection: "andando a stringergli la mano con grande cordialità",
          stageDirectionTranslation: "going to shake his hand with great cordiality",
          lines: [
            {
              id: "a2_s1_c49_l1",
              original: "Caro signor Fontana!",
              literal: "Dear Mr. Fontana!",
              tokens: [
                {
                  word: "Caro",
                  lemma: "caro",
                  pos: "adjective",
                  meaning: "dear",
                },
                {
                  word: "signor",
                  lemma: "signore",
                  pos: "noun",
                  meaning: "Mister / Master (apocope of signore)",
                },
                {
                  word: "Fontana",
                  lemma: "Fontana",
                  pos: "noun",
                  meaning: "Fontana (Brook / Ford's alias)",
                },
              ],
              grammarNote: "Falstaff still believes Ford is 'Signor Fontana', the wealthy patron who paid him to seduce Mrs. Ford.",
            },
            {
              id: "a2_s1_c49_l2",
              original: "Voglio fare con voi più ampia conoscenza.",
              literal: "I want to make a fuller acquaintance with you.",
              tokens: [
                {
                  word: "Voglio",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want / wish",
                },
                {
                  word: "fare",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to make",
                },
                {
                  word: "ampia",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "broad / ample / fuller",
                },
                {
                  word: "conoscenza",
                  lemma: "conoscenza",
                  pos: "noun",
                  meaning: "acquaintance / knowledge",
                },
              ],
              grammarNote: "Falstaff encourages intimacy with his affluent new admirer.",
            },
          ],
        },
        {
          id: "a2_s1_c50",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c50_l1",
              original: "Caro sir John, desidero parlarvi in confidenza.",
              literal: "Dear Sir John, I wish to speak to you in confidence.",
              tokens: [
                {
                  word: "Caro",
                  lemma: "caro",
                  pos: "adjective",
                  meaning: "dear",
                },
                {
                  word: "desidero",
                  lemma: "desiderare",
                  pos: "verb",
                  meaning: "I desire / wish",
                },
                {
                  word: "parlarvi",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "to speak to you (parlare + vi)",
                },
                {
                  word: "in confidenza",
                  lemma: "in confidenza",
                  pos: "idiom",
                  meaning: "in confidence / privately",
                },
              ],
              grammarNote: "Ford asks to speak in strict confidence ('in confidenza'), triggering the whispering between Bardolfo and Pistola.",
            },
          ],
        },
        {
          id: "a2_s1_c51",
          speaker: "Bardolfo",
          stageDirection: "sottovoce a Pistola nel fondo, spiando",
          stageDirectionTranslation: "under his breath to Pistola in the background, spying",
          lines: [
            {
              id: "a2_s1_c51_l1",
              original: "Attento!",
              literal: "Pay attention!",
              tokens: [
                {
                  word: "Attento",
                  lemma: "attento",
                  pos: "adjective",
                  meaning: "attentive / watchful",
                },
                {
                  word: "stare attento",
                  lemma: "stare attento",
                  pos: "idiom",
                  meaning: "to pay attention / watch out",
                },
              ],
              grammarNote: "Bardolfo alerts Pistola as they watch Ford spring his trap on Falstaff.",
            },
          ],
        },
        {
          id: "a2_s1_c52",
          speaker: "Pistola",
          stageDirection: "sottovoce a Bardolfo",
          stageDirectionTranslation: "under his breath to Bardolfo",
          lines: [
            {
              id: "a2_s1_c52_l1",
              original: "Zitto!",
              literal: "Hush!",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
                {
                  word: "zittire",
                  lemma: "zittire",
                  pos: "verb",
                  meaning: "to hush / silence / quiet",
                },
              ],
              grammarNote: "Ford frantically commands silence so their stealthy surround of the screen will catch the lovers off-guard.",
            },
          ],
        },
        {
          id: "a2_s1_c53",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s1_c53_l1",
              original: "Guarda! Scommetto! Egli va dritto",
              literal: "Look! I bet! He goes straight",
              tokens: [
                {
                  word: "Guarda",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "look (imperative 2nd singular)",
                },
                {
                  word: "Scommetto",
                  lemma: "scommettere",
                  pos: "verb",
                  meaning: "I bet / wager",
                },
                {
                  word: "Egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he",
                },
                {
                  word: "dritto",
                  lemma: "dritto",
                  pos: "adverb",
                  meaning: "straight",
                },
              ],
              grammarNote: "Bardolfo eagerly wagers that Falstaff will blunder headlong into the ambush.",
            },
            {
              id: "a2_s1_c53_l2",
              original: "nel trabocchetto.",
              literal: "into the trap.",
              tokens: [
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "into the",
                },
                {
                  word: "trabocchetto",
                  lemma: "trabocchetto",
                  pos: "noun",
                  meaning: "trap / snare / pitfall",
                },
              ],
              grammarNote: "'Trabocchetto' denotes a pitfall or hidden trapdoor, emphasizing the conspiracy against Falstaff.",
            },
          ],
        },
        {
          id: "a2_s1_c54",
          speaker: "Pistola",
          lines: [
            {
              id: "a2_s1_c54_l1",
              original: "Ford se lo intrappola...",
              literal: "Ford is trapping him...",
              tokens: [
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper name)",
                },
                {
                  word: "se lo",
                  lemma: "se lo",
                  pos: "pronoun",
                  meaning: "him for himself",
                },
                {
                  word: "intrappola",
                  lemma: "intrappolare",
                  pos: "verb",
                  meaning: "traps / ensnares",
                },
              ],
              grammarNote: "Pistola relishes the irony of Ford taking revenge by snaring Falstaff.",
            },
          ],
        },
        {
          id: "a2_s1_c55",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s1_c55_l1",
              original: "Zitto!",
              literal: "Hush!",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
                {
                  word: "zittire",
                  lemma: "zittire",
                  pos: "verb",
                  meaning: "to hush / silence / quiet",
                },
              ],
              grammarNote: "Ford frantically commands silence so their stealthy surround of the screen will catch the lovers off-guard.",
            },
          ],
        },
        {
          id: "a2_s1_c56",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c56_l1",
              original: "Che fate là?",
              literal: "What are you doing there?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "fate",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "you do / are doing",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
              ],
              grammarNote: "Falstaff hears whispering behind him and gruffly rebukes his followers.",
            },
          ],
        },
        {
          id: "a2_s1_c57",
          speaker: "Sir John Falstaff",
          stageDirection: "a Bardolfo e Pistola, i quali escono al cenno di Falstaff",
          stageDirectionTranslation: "to Bardolfo and Pistola, who exit at Falstaff's signal",
          lines: [
          ],
        },
        {
          id: "a2_s1_c58",
          speaker: "Sir John Falstaff",
          stageDirection: "a Ford, col quale è rimasto solo",
          stageDirectionTranslation: "to Ford, with whom he has remained alone",
          lines: [
            {
              id: "a2_s1_c58_l1",
              original: "V'ascolto.",
              literal: "I am listening to you.",
              tokens: [
                {
                  word: "V'ascolto",
                  lemma: "ascoltare",
                  pos: "verb",
                  meaning: "I listen to you (vi + ascolto)",
                },
                {
                  word: "ascolto",
                  lemma: "ascoltare",
                  pos: "verb",
                  meaning: "I listen / hear",
                },
              ],
              grammarNote: "Falstaff turns back to Ford, granting him his complete attention.",
            },
          ],
        },
        {
          id: "a2_s1_c59",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c59_l1",
              original: "Sir John, m'infonde ardire",
              literal: "Sir John, inspires boldness in me",
              tokens: [
                {
                  word: "Sir",
                  lemma: "Sir",
                  pos: "noun",
                  meaning: "Sir (honorific title)",
                },
                {
                  word: "m'infonde",
                  lemma: "infondere",
                  pos: "verb",
                  meaning: "instills in me / inspires in me (mi + infonde)",
                },
                {
                  word: "ardire",
                  lemma: "ardire",
                  pos: "noun",
                  meaning: "boldness / courage / daring",
                },
              ],
              grammarNote: "Ford prefaces his bold proposal with high rhetorical gravity, claiming a proverb encourages him.",
            },
            {
              id: "a2_s1_c59_l2",
              original: "un ben noto proverbio popolar: si suol dire",
              literal: "a well-known popular proverb: it is customary to say",
              tokens: [
                {
                  word: "ben",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well",
                },
                {
                  word: "noto",
                  lemma: "noto",
                  pos: "adjective",
                  meaning: "known",
                },
                {
                  word: "proverbio",
                  lemma: "proverbio",
                  pos: "noun",
                  meaning: "proverb / adage",
                },
                {
                  word: "popolar",
                  lemma: "popolare",
                  pos: "adjective",
                  meaning: "popular / folk (apocopic)",
                },
                {
                  word: "suol",
                  lemma: "solere",
                  pos: "verb",
                  meaning: "is customary / wont (apocopic of suole)",
                },
              ],
              grammarNote: "Ford introduces the popular adage praising the irresistible influence of wealth.",
            },
            {
              id: "a2_s1_c59_l3",
              original: "che l'oro apre ogni porta, che l'oro è un talismano,",
              literal: "that gold opens every door, that gold is a talisman,",
              tokens: [
                {
                  word: "oro",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "gold",
                },
                {
                  word: "apre",
                  lemma: "aprire",
                  pos: "verb",
                  meaning: "opens",
                },
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / each",
                },
                {
                  word: "porta",
                  lemma: "porta",
                  pos: "noun",
                  meaning: "door",
                },
                {
                  word: "talismano",
                  lemma: "talismano",
                  pos: "noun",
                  meaning: "talisman / magic charm",
                },
              ],
              grammarNote: "Ford cites the proverb's hyperbolic claims about gold's supernatural potency to tempt Falstaff.",
            },
            {
              id: "a2_s1_c59_l4",
              original: "che l'oro vince tutto.",
              literal: "that gold conquers all.",
              tokens: [
                {
                  word: "oro",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "gold",
                },
                {
                  word: "vince",
                  lemma: "vincere",
                  pos: "verb",
                  meaning: "conquers / wins",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all / everything",
                },
              ],
              grammarNote: "The climax of Ford's speech, adapting Virgil's 'omnia vincit amor' to commercial realities: gold conquers all.",
            },
          ],
        },
        {
          id: "a2_s1_c60",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c60_l1",
              original: "L'oro è un buon capitano",
              literal: "Gold is a good captain",
              tokens: [
                {
                  word: "L'oro",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "gold",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocopic)",
                },
                {
                  word: "capitano",
                  lemma: "capitano",
                  pos: "noun",
                  meaning: "captain / commander",
                },
              ],
              grammarNote: "Falstaff enthusiastically agrees, borrowing Shakespeare's metaphor of gold as an intrepid military commander.",
            },
            {
              id: "a2_s1_c60_l2",
              original: "che marcia avanti.",
              literal: "that marches forward.",
              tokens: [
                {
                  word: "marcia",
                  lemma: "marciare",
                  pos: "verb",
                  meaning: "marches",
                },
                {
                  word: "avanti",
                  lemma: "avanti",
                  pos: "adverb",
                  meaning: "forward / ahead",
                },
              ],
              grammarNote: "Syntactic conclusion to Falstaff's endorsement: money leads from the front, vanquishing all obstacles.",
            },
          ],
        },
        {
          id: "a2_s1_c61",
          speaker: "Ford",
          stageDirection: "avviandosi verso il tavolo",
          stageDirectionTranslation: "heading toward the table",
          lines: [
            {
              id: "a2_s1_c61_l1",
              original: "Ebbene. Ho un sacco di monete",
              literal: "Well then. I have a bag of coins",
              tokens: [
                {
                  word: "Ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well then",
                },
                {
                  word: "sacco",
                  lemma: "sacco",
                  pos: "noun",
                  meaning: "bag / sack",
                },
                {
                  word: "monete",
                  lemma: "moneta",
                  pos: "noun",
                  meaning: "coins / money",
                },
              ],
              grammarNote: "Ford seizes on Falstaff's enthusiasm, brandishing his bag of coins to commence the corrupt pact.",
            },
            {
              id: "a2_s1_c61_l2",
              original: "qua, che mi pesa assai. Sir John, se voi volete",
              literal: "here, which weighs heavily on me. Sir John, if you wish",
              tokens: [
                {
                  word: "qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "pesa",
                  lemma: "pesare",
                  pos: "verb",
                  meaning: "weighs / is heavy (3rd sing. present)",
                },
                {
                  word: "assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "very much / heavily / greatly",
                },
                {
                  word: "volete",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "you wish / you want (2nd plur. present)",
                },
              ],
              grammarNote: "Ford (disguised as Signor Fontana) presents the heavy purse of gold coins to Falstaff, framing the bribe as a physical burden he needs assistance carrying.",
            },
            {
              id: "a2_s1_c61_l3",
              original: "aiutarmi a portarlo...",
              literal: "to help me carry it...",
              tokens: [
                {
                  word: "aiutarmi",
                  lemma: "aiutare",
                  pos: "verb",
                  meaning: "to help me (aiutare + clitic mi)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to / in",
                },
                {
                  word: "portarlo",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "to carry it / bear it (portare + clitic lo)",
                },
              ],
              grammarNote: "Continuing the mock-polite euphemism: 'portarlo' (to carry it) refers to taking the heavy sack of gold coins off Ford's hands.",
            },
          ],
        },
        {
          id: "a2_s1_c62",
          speaker: "Sir John Falstaff",
          stageDirection: "prende il sacchetto e lo depone sul tavolo",
          stageDirectionTranslation: "takes the purse and puts it on the table",
          lines: [
            {
              id: "a2_s1_c62_l1",
              original: "Con gran piacer... non so,",
              literal: "With great pleasure... I do not know,",
              tokens: [
                {
                  word: "Con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great (apocope of grande)",
                },
                {
                  word: "piacer",
                  lemma: "piacere",
                  pos: "noun",
                  meaning: "pleasure (apocope of piacere)",
                },
                {
                  word: "so",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "I know (1st sing. present)",
                },
              ],
              grammarNote: "Falstaff eagerly accepts the gold while putting on an air of modest puzzlement as to why a stranger is offering such lavish bounty.",
            },
            {
              id: "a2_s1_c62_l2",
              original: "davver, per qual mio merito, messer...",
              literal: "truly, by what merit of mine, sir...",
              tokens: [
                {
                  word: "davver",
                  lemma: "davvero",
                  pos: "adverb",
                  meaning: "truly / indeed (apocope of davvero)",
                },
                {
                  word: "qual",
                  lemma: "quale",
                  pos: "adjective",
                  meaning: "what / which (apocope of quale)",
                },
                {
                  word: "merito",
                  lemma: "merito",
                  pos: "noun",
                  meaning: "merit / desert / worth",
                },
                {
                  word: "messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "sir / master (apocope of messere)",
                },
              ],
              grammarNote: "Falstaff fishes for compliments and clarification while feigning humility ('per qual mio merito' - by what merit of mine).",
            },
          ],
        },
        {
          id: "a2_s1_c63",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c63_l1",
              original: "Ve lo dirò.",
              literal: "I will tell it to you.",
              tokens: [
                {
                  word: "Ve",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "to you (pronominal form of vi before lo)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it (direct object pronoun)",
                },
                {
                  word: "dirò",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "I will tell / I will say (1st sing. future)",
                },
              ],
              grammarNote: "Double clitic pronoun construction 've lo' (vi + lo: 'to you it') followed by the future of 'dire'. Ford prepares to spin his fabricated tale.",
            },
          ],
        },
        {
          id: "a2_s1_c64",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c64_l1",
              original: "C'è a Windsor, una dama, bella e leggiadra molto.",
              literal: "There is in Windsor a lady, very beautiful and graceful.",
              tokens: [
                {
                  word: "C'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (ci + è)",
                },
                {
                  word: "dama",
                  lemma: "dama",
                  pos: "noun",
                  meaning: "lady / noblewoman",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair",
                },
                {
                  word: "leggiadra",
                  lemma: "leggiadro",
                  pos: "adjective",
                  meaning: "graceful / charming",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "very / greatly",
                },
              ],
              grammarNote: "Ford begins describing his wife Alice under the guise of an ardent secret admirer, ironically singing her praises to the very man who wrote to seduce her.",
            },
            {
              id: "a2_s1_c64_l2",
              original: "Si chiama Alice; è moglie di un certo Ford.",
              literal: "Her name is Alice; she is wife of a certain Ford.",
              tokens: [
                {
                  word: "Si chiama",
                  lemma: "chiamarsi",
                  pos: "idiom",
                  meaning: "her name is / she is called",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
                {
                  word: "certo",
                  lemma: "certo",
                  pos: "adjective",
                  meaning: "certain / particular",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford",
                },
              ],
              grammarNote: "Peak dramatic irony: Ford refers to himself in the third person as 'un certo Ford' ('a certain Ford'), testing Falstaff's reaction.",
            },
          ],
        },
        {
          id: "a2_s1_c65",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c65_l1",
              original: "V'ascolto.",
              literal: "I am listening to you.",
              tokens: [
                {
                  word: "V'ascolto",
                  lemma: "ascoltare",
                  pos: "verb",
                  meaning: "I listen to you (vi + ascolto)",
                },
                {
                  word: "ascolto",
                  lemma: "ascoltare",
                  pos: "verb",
                  meaning: "I listen / hear",
                },
              ],
              grammarNote: "Falstaff turns back to Ford, granting him his complete attention.",
            },
          ],
        },
        {
          id: "a2_s1_c66",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c66_l1",
              original: "Io l'amo e lei non m'ama; le scrivo, non risponde;",
              literal: "I love her and she does not love me; I write to her, she does not answer;",
              tokens: [
                {
                  word: "l'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love her (clitic la + amare)",
                },
                {
                  word: "non m'ama",
                  lemma: "amare",
                  pos: "idiom",
                  meaning: "she does not love me (non + clitic mi + amare)",
                },
                {
                  word: "le scrivo",
                  lemma: "scrivere",
                  pos: "verb",
                  meaning: "I write to her (clitic le + scrivere)",
                },
                {
                  word: "non risponde",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "she does not answer / reply",
                },
              ],
              grammarNote: "Ford recites a string of Petrarchan antitheses ('amo / non m'ama', 'scrivo / non risponde') mimicking the traditional complaints of an unrequited courtly lover.",
            },
            {
              id: "a2_s1_c66_l2",
              original: "la guardo, non mi guarda; la cerco e si nasconde.",
              literal: "I look at her, she does not look at me; I seek her and she hides.",
              tokens: [
                {
                  word: "guardo",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "I look at / gaze upon (1st sing. present)",
                },
                {
                  word: "cerco",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "I seek / look for (1st sing. present)",
                },
                {
                  word: "si nasconde",
                  lemma: "nascondersi",
                  pos: "verb",
                  meaning: "she hides / conceals herself (reflexive 3rd sing.)",
                },
              ],
              grammarNote: "Balanced rhythmic parallelisms ('guardo / non mi guarda', 'cerco / si nasconde') continuing Ford's complaint of Alice's cold aloofness.",
            },
            {
              id: "a2_s1_c66_l3",
              original: "Per lei sprecai tesori, gittai doni su doni,",
              literal: "For her I squandered treasures, threw gifts upon gifts,",
              tokens: [
                {
                  word: "sprecai",
                  lemma: "sprecare",
                  pos: "verb",
                  meaning: "I squandered / wasted (1st sing. passato remoto)",
                },
                {
                  word: "tesori",
                  lemma: "tesoro",
                  pos: "noun",
                  meaning: "treasures (plural)",
                },
                {
                  word: "gittai",
                  lemma: "gittare",
                  pos: "verb",
                  meaning: "I threw / cast (archaic passato remoto of gettare/gittare)",
                },
                {
                  word: "doni",
                  lemma: "dono",
                  pos: "noun",
                  meaning: "gifts / presents (plural)",
                },
              ],
              grammarNote: "Passato remoto verbs 'sprecai' and 'gittai' (poetic/archaic form of 'gettai') convey the vast fortunes Fontana claims to have showered upon Alice in vain.",
            },
            {
              id: "a2_s1_c66_l4",
              original: "escogitai, tremando, il vol delle occasioni.",
              literal: "I devised, trembling, the flight of opportunities.",
              tokens: [
                {
                  word: "escogitai",
                  lemma: "escogitare",
                  pos: "verb",
                  meaning: "I devised / concocted (1st sing. passato remoto)",
                },
                {
                  word: "tremando",
                  lemma: "tremare",
                  pos: "verb",
                  meaning: "trembling / quivering (gerund)",
                },
                {
                  word: "vol",
                  lemma: "volo",
                  pos: "noun",
                  meaning: "flight (poetic apocope of volo)",
                },
                {
                  word: "occasioni",
                  lemma: "occasione",
                  pos: "noun",
                  meaning: "opportunities / occasions (plural)",
                },
              ],
              grammarNote: "High poetic diction: 'il vol delle occasioni' refers to seizing fleeting moments of opportunity (poetic apocope 'vol' from 'volo').",
            },
            {
              id: "a2_s1_c66_l5",
              original: "Ahimè! tutto fu vano! Rimasi sulle scale,",
              literal: "Alas! all was in vain! I remained on the stairs,",
              tokens: [
                {
                  word: "Ahimè",
                  lemma: "ahimè",
                  pos: "interjection",
                  meaning: "alas / woe is me",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all / everything",
                },
                {
                  word: "vano",
                  lemma: "vano",
                  pos: "adjective",
                  meaning: "in vain / futile / fruitless",
                },
                {
                  word: "Rimasi",
                  lemma: "rimanere",
                  pos: "verb",
                  meaning: "I remained / stayed (1st sing. passato remoto)",
                },
                {
                  word: "scale",
                  lemma: "scala",
                  pos: "noun",
                  meaning: "stairs / staircase (plural)",
                },
              ],
              grammarNote: "'Rimasi sulle scale' literally means left stranded outside on the staircase, shut out from the lady's chambers.",
            },
            {
              id: "a2_s1_c66_l6",
              original: "negletto, a bocca asciutta, cantando un madrigale.",
              literal: "neglected, dry-mouthed, singing a madrigal.",
              tokens: [
                {
                  word: "negletto",
                  lemma: "negletto",
                  pos: "adjective",
                  meaning: "neglected / disregarded / slighted",
                },
                {
                  word: "a bocca asciutta",
                  lemma: "a bocca asciutta",
                  pos: "idiom",
                  meaning: "empty-handed / left high and dry / dry-mouthed",
                },
                {
                  word: "cantando",
                  lemma: "cantare",
                  pos: "verb",
                  meaning: "singing (gerund)",
                },
                {
                  word: "madrigale",
                  lemma: "madrigale",
                  pos: "noun",
                  meaning: "madrigal / love song",
                },
              ],
              grammarNote: "Vivid Italian idiom 'a bocca asciutta' (literally 'with dry mouth', meaning left completely empty-handed or ungratified), contrasting with the lofty artifice of singing a madrigal.",
            },
          ],
        },
        {
          id: "a2_s1_c67",
          speaker: "Sir John Falstaff",
          stageDirection: "cantarellando scherzosamente",
          stageDirectionTranslation: "humming playfully",
          lines: [
            {
              id: "a2_s1_c67_l1",
              original: "L'amor, l'amor che non ci dà mai tregue",
              literal: "Love, love which never gives us respite",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "dà",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "gives (3rd sing. present)",
                },
                {
                  word: "mai",
                  lemma: "mai",
                  pos: "adverb",
                  meaning: "never / ever",
                },
                {
                  word: "tregue",
                  lemma: "tregua",
                  pos: "noun",
                  meaning: "respites / truces / rest (plural of tregua)",
                },
              ],
              grammarNote: "Falstaff pontificates on love with a philosophical adage. 'Non dar tregue' means granting no peace or truce.",
            },
            {
              id: "a2_s1_c67_l2",
              original: "finché la vita strugge",
              literal: "as long as life burns away",
              tokens: [
                {
                  word: "finché",
                  lemma: "finché",
                  pos: "conjunction",
                  meaning: "as long as / until",
                },
                {
                  word: "vita",
                  lemma: "vita",
                  pos: "noun",
                  meaning: "life",
                },
                {
                  word: "strugge",
                  lemma: "struggere",
                  pos: "verb",
                  meaning: "consumes / melts / wastes away (3rd sing. present)",
                },
              ],
              grammarNote: "'Struggere' is a classic poetic Italian verb meaning to melt, consume, or waste away with ardent passion or time.",
            },
            {
              id: "a2_s1_c67_l3",
              original: "è come l'ombra...",
              literal: "is like the shadow...",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "l'ombra",
                  lemma: "ombra",
                  pos: "noun",
                  meaning: "the shadow (l' + ombra)",
                },
              ],
              grammarNote: "Falstaff introduces the well-known Renaissance emblem comparing love to a shadow, which Boito borrows directly from Shakespeare's Merry Wives of Windsor (Act II, Scene 2).",
            },
            {
              id: "a2_s1_c67_l4",
              original: "FORD ...che chi fugge...",
              literal: "FORD: ...which whoever flees...",
              tokens: [
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (character name)",
                },
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who",
                },
                {
                  word: "fugge",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "flees / runs away (3rd sing. present)",
                },
              ],
              grammarNote: "Score cue embeds Ford's name as he jumps in to complete the proverb ('Love like a shadow flies when substance love pursues; pursuing that that flies, and flying what pursues').",
            },
          ],
        },
        {
          id: "a2_s1_c68",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c68_l1",
              original: "...insegue...",
              literal: "...pursues...",
              tokens: [
                {
                  word: "insegue",
                  lemma: "inseguire",
                  pos: "verb",
                  meaning: "pursues / chases (3rd sing. present)",
                },
              ],
              grammarNote: "Falstaff chips in the rhyming verb: the shadow pursues whoever flees from it.",
            },
          ],
        },
        {
          id: "a2_s1_c69",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c69_l1",
              original: "...e chi l'insegue...",
              literal: "...and whoever pursues it...",
              tokens: [
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who",
                },
                {
                  word: "l'insegue",
                  lemma: "inseguire",
                  pos: "verb",
                  meaning: "pursues it (clitic la/lo + inseguire)",
                },
              ],
              grammarNote: "Ford chimes in with the second half of the chiasmus.",
            },
          ],
        },
        {
          id: "a2_s1_c70",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c70_l1",
              original: "...fugge...",
              literal: "...flees...",
              tokens: [
                {
                  word: "fugge",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "flees / runs away (3rd sing. present)",
                },
              ],
              grammarNote: "Falstaff concludes the reciprocal proverb: whoever chases the shadow finds it fleeing from them.",
            },
            {
              id: "a2_s1_c70_l2",
              original: "FORD E FALSTAFF",
              literal: "Ford and Falstaff",
              tokens: [
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (character name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (character name)",
                },
              ],
              grammarNote: "Score cue indicating Ford and Falstaff singing simultaneously in mock-serious lyric harmony.",
            },
            {
              id: "a2_s1_c70_l3",
              original: "...l'amor, l'amor!...",
              literal: "...love, love!...",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
              ],
              grammarNote: "Ford and Falstaff unite their voices in a shared lyrical sigh over the elusive, paradoxical nature of love.",
            },
          ],
        },
        {
          id: "a2_s1_c71",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c71_l1",
              original: "E questo madrigale l'ho appreso a prezzo d'or.",
              literal: "And this madrigal I learned at the price of gold.",
              tokens: [
                {
                  word: "madrigale",
                  lemma: "madrigale",
                  pos: "noun",
                  meaning: "madrigal / song",
                },
                {
                  word: "appreso",
                  lemma: "apprendere",
                  pos: "verb",
                  meaning: "learned / acquired (past participle)",
                },
                {
                  word: "prezzo",
                  lemma: "prezzo",
                  pos: "noun",
                  meaning: "price / cost",
                },
                {
                  word: "d'or",
                  lemma: "d'oro",
                  pos: "idiom",
                  meaning: "of gold / a heavy price (di + oro)",
                },
              ],
              grammarNote: "Ford wryly remarks that this courtly lesson cost him an exorbitant fortune in gifts that bore no fruit ('a prezzo d'oro').",
            },
          ],
        },
        {
          id: "a2_s1_c72",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c72_l1",
              original: "Quest'è il destin fatale del misero amator.",
              literal: "This is the fateful destiny of the wretched lover.",
              tokens: [
                {
                  word: "destin",
                  lemma: "destino",
                  pos: "noun",
                  meaning: "destiny / fate (apocope of destino)",
                },
                {
                  word: "fatale",
                  lemma: "fatale",
                  pos: "adjective",
                  meaning: "fateful / fatal / destined",
                },
                {
                  word: "misero",
                  lemma: "misero",
                  pos: "adjective",
                  meaning: "wretched / miserable / poor",
                },
                {
                  word: "amator",
                  lemma: "amatore",
                  pos: "noun",
                  meaning: "lover / suitor (apocope of amatore)",
                },
              ],
              grammarNote: "Falstaff sums up Fontana's plight with patronizing sympathy, feeling immensely smug in his own supposed mastery of romance.",
            },
          ],
        },
        {
          id: "a2_s1_c73",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c73_l1",
              original: "Essa non vi diè mai luogo a lusinghe?",
              literal: "Did she never give you room for hope?",
              tokens: [
                {
                  word: "diè",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "gave (poetic 3rd sing. passato remoto of dare)",
                },
                {
                  word: "mai",
                  lemma: "mai",
                  pos: "adverb",
                  meaning: "ever / never",
                },
                {
                  word: "luogo",
                  lemma: "luogo",
                  pos: "noun",
                  meaning: "room / ground / occasion",
                },
                {
                  word: "lusinghe",
                  lemma: "lusinga",
                  pos: "noun",
                  meaning: "hopes / encouragements / flatteries (plural)",
                },
              ],
              grammarNote: "Poetic 3rd sing. passato remoto 'diè' (= diede). The idiom 'dar luogo a lusinghe' means to give encouragement or ground for romantic hopes.",
            },
          ],
        },
        {
          id: "a2_s1_c74",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c74_l1",
              original: "No.",
              literal: "No.",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
              ],
              grammarNote: "Ford stubbornly denies his own foolishness.",
            },
            {
              id: "a2_s1_c74_l2",
              original: "FALSTAFF Ma infin, perché v'aprite a me?",
              literal: "FALSTAFF: But in the end, why do you open your heart to me?",
              tokens: [
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (character name)",
                },
                {
                  word: "infin",
                  lemma: "infine",
                  pos: "adverb",
                  meaning: "in the end / after all (apocope of infine)",
                },
                {
                  word: "perché",
                  lemma: "perché",
                  pos: "conjunction",
                  meaning: "why",
                },
                {
                  word: "v'aprite",
                  lemma: "aprirsi",
                  pos: "verb",
                  meaning: "you open yourself / confide (vi + aprire)",
                },
              ],
              grammarNote: "Falstaff gets straight to the point: what does Fontana want from him? 'Aprirsi a' means to open one's heart or confide in someone.",
            },
          ],
        },
        {
          id: "a2_s1_c75",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c75_l1",
              original: "Ve lo dirò:",
              literal: "I will tell it to you:",
              tokens: [
                {
                  word: "Ve",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "to you (pronominal variant of vi)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it",
                },
                {
                  word: "dirò",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "I will tell (1st sing. future)",
                },
              ],
              grammarNote: "Ford repeats his introductory formula before detailing his bizarre proposal.",
            },
            {
              id: "a2_s1_c75_l2",
              original: "voi siete un gentiluomo prode, arguto, facondo,",
              literal: "you are a gentleman valiant, witty, eloquent,",
              tokens: [
                {
                  word: "gentiluomo",
                  lemma: "gentiluomo",
                  pos: "noun",
                  meaning: "gentleman / nobleman",
                },
                {
                  word: "prode",
                  lemma: "prode",
                  pos: "adjective",
                  meaning: "valiant / brave / gallant",
                },
                {
                  word: "arguto",
                  lemma: "arguto",
                  pos: "adjective",
                  meaning: "witty / clever / sharp-witted",
                },
                {
                  word: "facondo",
                  lemma: "facondo",
                  pos: "adjective",
                  meaning: "eloquent / silver-tongued",
                },
              ],
              grammarNote: "Ford flatters Falstaff with an elevated triad of courtly adjectives ('prode, arguto, facondo'), inflating the old knight's boundless ego.",
            },
            {
              id: "a2_s1_c75_l3",
              original: "voi siete un uom di guerra, voi siete un uom di mondo...",
              literal: "you are a man of war, you are a man of the world...",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocope of uomo)",
                },
                {
                  word: "guerra",
                  lemma: "guerra",
                  pos: "noun",
                  meaning: "war / military",
                },
                {
                  word: "mondo",
                  lemma: "mondo",
                  pos: "noun",
                  meaning: "world / high society",
                },
                {
                  word: "uom di mondo",
                  lemma: "uomo di mondo",
                  pos: "idiom",
                  meaning: "man of the world / worldly man",
                },
              ],
              grammarNote: "Parallelism contrasting military valor ('uom di guerra') with worldly social polish ('uom di mondo').",
            },
          ],
        },
        {
          id: "a2_s1_c76",
          speaker: "Sir John Falstaff",
          stageDirection: "con gesto d'umiltà",
          stageDirectionTranslation: "with a gesture of humility",
          lines: [
            {
              id: "a2_s1_c76_l1",
              original: "Oh!...",
              literal: "Oh!...",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh (exclamation of pleasure / modesty)",
                },
              ],
              grammarNote: "Falstaff grunts with self-satisfied delight at being called a man of war and a man of the world.",
            },
          ],
        },
        {
          id: "a2_s1_c77",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c77_l1",
              original: "Non vi adulo, e quello è un sacco di monete:",
              literal: "I do not flatter you, and that is a sack of coins:",
              tokens: [
                {
                  word: "adulo",
                  lemma: "adulare",
                  pos: "verb",
                  meaning: "I flatter / adulate (1st sing. present)",
                },
                {
                  word: "sacco",
                  lemma: "sacco",
                  pos: "noun",
                  meaning: "sack / bag",
                },
                {
                  word: "monete",
                  lemma: "moneta",
                  pos: "noun",
                  meaning: "coins / money (plural)",
                },
              ],
              grammarNote: "Ford seals his verbal flattery with the irresistible enticement of hard currency ('un sacco di monete').",
            },
            {
              id: "a2_s1_c77_l2",
              original: "spendetele! spendetele! sì, spendete e spandete",
              literal: "spend them! spend them! yes, spend and squander",
              tokens: [
                {
                  word: "spendetele",
                  lemma: "spendere",
                  pos: "verb",
                  meaning: "spend them! (imperative spendete + clitic le)",
                },
                {
                  word: "spandete",
                  lemma: "spandere",
                  pos: "verb",
                  meaning: "squander / scatter! (2nd plur. imperative)",
                },
                {
                  word: "spendete e spandete",
                  lemma: "spendere e spandere",
                  pos: "idiom",
                  meaning: "to spend lavishly / squander money without restraint",
                },
              ],
              grammarNote: "Alliterative idiom 'spendere e spandere' (to spend lavishly and throw money around), reinforced by urgent repeated imperatives.",
            },
            {
              id: "a2_s1_c77_l3",
              original: "tutto il mio patrimonio! Siate ricco e felice!",
              literal: "all my estate! Be rich and happy!",
              tokens: [
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / the whole of",
                },
                {
                  word: "patrimonio",
                  lemma: "patrimonio",
                  pos: "noun",
                  meaning: "estate / patrimony / wealth",
                },
                {
                  word: "ricco",
                  lemma: "ricco",
                  pos: "adjective",
                  meaning: "rich / wealthy",
                },
                {
                  word: "felice",
                  lemma: "felice",
                  pos: "adjective",
                  meaning: "happy / prosperous",
                },
              ],
              grammarNote: "Ford urges Falstaff to squander Fontana's entire fortune on himself, setting up the quid pro quo.",
            },
            {
              id: "a2_s1_c77_l4",
              original: "Ma, in contraccambio, chiedo che conquistiate Alice!",
              literal: "But, in return, I ask that you conquer Alice!",
              tokens: [
                {
                  word: "in contraccambio",
                  lemma: "in contraccambio",
                  pos: "idiom",
                  meaning: "in return / in exchange",
                },
                {
                  word: "chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I ask / request (1st sing. present)",
                },
                {
                  word: "conquistiate",
                  lemma: "conquistare",
                  pos: "verb",
                  meaning: "you conquer / win over (2nd plur. present subjunctive)",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice",
                },
              ],
              grammarNote: "The heart of the bargain: Ford asks Falstaff to seduce Alice. Subjunctive 'conquistiate' follows the governing verb of request 'chiedo che'.",
            },
          ],
        },
        {
          id: "a2_s1_c78",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c78_l1",
              original: "Strana ingiunzion!",
              literal: "Strange injunction!",
              tokens: [
                {
                  word: "Strana",
                  lemma: "strano",
                  pos: "adjective",
                  meaning: "strange / unusual / odd",
                },
                {
                  word: "ingiunzion",
                  lemma: "ingiunzione",
                  pos: "noun",
                  meaning: "injunction / order / demand (apocope of ingiunzione)",
                },
              ],
              grammarNote: "Falstaff is taken aback by Fontana's bizarre request: why pay another man to seduce the woman Fontana himself covets?",
            },
          ],
        },
        {
          id: "a2_s1_c79",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c79_l1",
              original: "Mi spiego: quella crudel beltà",
              literal: "I explain myself: that cruel beauty",
              tokens: [
                {
                  word: "Mi spiego",
                  lemma: "spiegarsi",
                  pos: "idiom",
                  meaning: "I explain myself / let me explain",
                },
                {
                  word: "crudel",
                  lemma: "crudele",
                  pos: "adjective",
                  meaning: "cruel / unyielding (apocope of crudele)",
                },
                {
                  word: "beltà",
                  lemma: "beltà",
                  pos: "noun",
                  meaning: "beauty / fair woman (poetic apocope of bellezza)",
                },
              ],
              grammarNote: "Ford explains his cunning rationale using poetic romance vocabulary ('crudel beltà').",
            },
            {
              id: "a2_s1_c79_l2",
              original: "sempre è vissuta in grande fede di castità.",
              literal: "has always lived in great reputation of chastity.",
              tokens: [
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always / ever",
                },
                {
                  word: "vissuta",
                  lemma: "vivere",
                  pos: "verb",
                  meaning: "lived (past participle)",
                },
                {
                  word: "fede",
                  lemma: "fede",
                  pos: "noun",
                  meaning: "reputation / credit / faith",
                },
                {
                  word: "castità",
                  lemma: "castità",
                  pos: "noun",
                  meaning: "chastity / purity",
                },
              ],
              grammarNote: "'In fede di castità' signifies possessing an established reputation for unblemished chastity.",
            },
            {
              id: "a2_s1_c79_l3",
              original: "La sua virtù importuna m'abbarbagliava gli occhi,",
              literal: "Her troublesome virtue dazzled my eyes,",
              tokens: [
                {
                  word: "virtù",
                  lemma: "virtù",
                  pos: "noun",
                  meaning: "virtue / purity",
                },
                {
                  word: "importuna",
                  lemma: "importuno",
                  pos: "adjective",
                  meaning: "troublesome / inconvenient / importunate",
                },
                {
                  word: "m'abbarbagliava",
                  lemma: "abbarbagliare",
                  pos: "verb",
                  meaning: "dazzled me / blinded me (clitic mi + abbarbagliare)",
                },
                {
                  word: "occhi",
                  lemma: "occhio",
                  pos: "noun",
                  meaning: "eyes (plural)",
                },
              ],
              grammarNote: "'Abbarbagliare' means to dazzle or blind someone with overpowering glare; Ford portrays Alice's uprightness as a blinding obstacle.",
            },
            {
              id: "a2_s1_c79_l4",
              original: "la bella inespugnabile dicea: «Guai se mi tocchi!»",
              literal: "the impregnable beauty said: «Woe if you touch me!»",
              tokens: [
                {
                  word: "inespugnabile",
                  lemma: "inespugnabile",
                  pos: "adjective",
                  meaning: "impregnable / unassailable",
                },
                {
                  word: "dicea",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "said (poetic imperfect of dire)",
                },
                {
                  word: "Guai",
                  lemma: "guaio",
                  pos: "interjection",
                  meaning: "woe / beware",
                },
                {
                  word: "tocchi",
                  lemma: "toccare",
                  pos: "verb",
                  meaning: "you touch (2nd sing. present subjunctive)",
                },
              ],
              grammarNote: "Poetic imperfect 'dicea' (= diceva). 'Inespugnabile' uses the vocabulary of military siege for female chastity. 'Guai se...' expresses a fierce warning.",
            },
            {
              id: "a2_s1_c79_l5",
              original: "Ma se voi l'espugnate, poi, posso anch'io sperar:",
              literal: "But if you breach it, then I too can hope:",
              tokens: [
                {
                  word: "espugnate",
                  lemma: "espugnare",
                  pos: "verb",
                  meaning: "you conquer / take by storm (2nd plur. present)",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "posso",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "I can (1st sing. present)",
                },
                {
                  word: "sperar",
                  lemma: "sperare",
                  pos: "verb",
                  meaning: "to hope (apocope of sperare)",
                },
              ],
              grammarNote: "Carrying through the fortress siege metaphor: if Falstaff breaches her defenses ('l'espugnate'), the stronghold will no longer be impenetrable.",
            },
            {
              id: "a2_s1_c79_l6",
              original: "da fallo nasce fallo e allor... Che ve ne par?",
              literal: "from fault arises fault and then... What do you think of it?",
              tokens: [
                {
                  word: "fallo",
                  lemma: "fallo",
                  pos: "noun",
                  meaning: "fault / sin / transgression",
                },
                {
                  word: "nasce",
                  lemma: "nascere",
                  pos: "verb",
                  meaning: "is born / arises (3rd sing. present)",
                },
                {
                  word: "allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then (apocope of allora)",
                },
                {
                  word: "Che ve ne par",
                  lemma: "parere",
                  pos: "idiom",
                  meaning: "what do you think of it? / how does it seem to you?",
                },
              ],
              grammarNote: "A cynical maxim ('da fallo nasce fallo' - one lapse in virtue leads to another). Once Alice yields to Falstaff, Fontana believes she can be persuaded to yield to him as well.",
            },
          ],
        },
        {
          id: "a2_s1_c80",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c80_l1",
              original: "Prima di tutto, senza complimenti, messere,",
              literal: "First of all, without ceremonies, sir,",
              tokens: [
                {
                  word: "Prima di tutto",
                  lemma: "prima di tutto",
                  pos: "idiom",
                  meaning: "first of all / above all",
                },
                {
                  word: "senza complimenti",
                  lemma: "senza complimenti",
                  pos: "idiom",
                  meaning: "without ceremonies / without standing on formality",
                },
                {
                  word: "messere",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "sir / master",
                },
              ],
              grammarNote: "Falstaff sweeps aside polite formalities ('senza complimenti') in his eagerness to take the money.",
            },
            {
              id: "a2_s1_c80_l2",
              original: "accetto il sacco. E poi (fede di cavaliere:",
              literal: "I accept the sack. And then (knight's faith:",
              tokens: [
                {
                  word: "accetto",
                  lemma: "accettare",
                  pos: "verb",
                  meaning: "I accept / take (1st sing. present)",
                },
                {
                  word: "sacco",
                  lemma: "sacco",
                  pos: "noun",
                  meaning: "sack / bag",
                },
                {
                  word: "fede di cavaliere",
                  lemma: "fede di cavaliere",
                  pos: "idiom",
                  meaning: "knight's word / on my honor as a knight",
                },
                {
                  word: "cavaliere",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / nobleman",
                },
              ],
              grammarNote: "Comic irony: Falstaff pledges his knightly honor ('fede di cavaliere') to act as a paid seducer, after having spent Act 1 Scene 1 denouncing 'onore' as useless breath.",
            },
            {
              id: "a2_s1_c80_l3",
              original: "qua la mano!) farò le vostre brame sazie.",
              literal: "shake hands!) I will satisfy your desires.",
              tokens: [
                {
                  word: "qua la mano",
                  lemma: "qua la mano",
                  pos: "idiom",
                  meaning: "shake hands! / give me your hand!",
                },
                {
                  word: "farò",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "I will make / render (1st sing. future)",
                },
                {
                  word: "brame",
                  lemma: "brama",
                  pos: "noun",
                  meaning: "desires / cravings (plural)",
                },
                {
                  word: "sazie",
                  lemma: "sazio",
                  pos: "adjective",
                  meaning: "sated / satisfied (feminine plural)",
                },
              ],
              grammarNote: "'Qua la mano' seals the pact with a handshake. 'Far sazie le brame' means to fully satisfy longings or appetites.",
            },
          ],
        },
        {
          id: "a2_s1_c81",
          speaker: "Sir John Falstaff",
          stageDirection: "stringendo forte la mano a Ford",
          stageDirectionTranslation: "firmly gripping Ford's hand",
          lines: [
            {
              id: "a2_s1_c81_l1",
              original: "Voi, la moglie di Ford possederete.",
              literal: "You, the wife of Ford shall possess.",
              tokens: [
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford",
                },
                {
                  word: "possederete",
                  lemma: "possedere",
                  pos: "verb",
                  meaning: "you will possess / have (2nd plur. future)",
                },
              ],
              grammarNote: "Falstaff makes a direct, brazen promise to Fontana: 'You shall possess Ford's wife.' The dramatic irony is devastating, as Fontana is Ford.",
            },
          ],
        },
        {
          id: "a2_s1_c82",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c82_l1",
              original: "Grazie!",
              literal: "Thank you!",
              tokens: [
                {
                  word: "Grazie",
                  lemma: "grazie",
                  pos: "interjection",
                  meaning: "thank you / thanks",
                },
              ],
              grammarNote: "Ford's exclamation of thanks is loaded with bitter sarcasm and boiling indignation.",
            },
          ],
        },
        {
          id: "a2_s1_c83",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c83_l1",
              original: "Io son già molto innanzi",
              literal: "I am already far advanced",
              tokens: [
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "very / far",
                },
                {
                  word: "innanzi",
                  lemma: "innanzi",
                  pos: "adverb",
                  meaning: "ahead / forward / advanced",
                },
                {
                  word: "essere innanzi",
                  lemma: "essere innanzi",
                  pos: "idiom",
                  meaning: "to be far along / well advanced",
                },
              ],
              grammarNote: "Falstaff boasts that he has already made enormous headway with Alice, unable to keep his triumph to himself.",
            },
            {
              id: "a2_s1_c83_l2",
              original: "(non c'è ragion ch'io taccia con voi) : fra una mezz'ora sarà nelle mie braccia.",
              literal: "(there is no reason for me to keep silent with you) : in half an hour she will be in my arms.",
              tokens: [
                {
                  word: "ragion",
                  lemma: "ragione",
                  pos: "noun",
                  meaning: "reason / cause (apocope of ragione)",
                },
                {
                  word: "taccia",
                  lemma: "tacere",
                  pos: "verb",
                  meaning: "I keep silent / hold my tongue (1st sing. present subjunctive)",
                },
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "in / within / between",
                },
                {
                  word: "mezz'ora",
                  lemma: "mezz'ora",
                  pos: "noun",
                  meaning: "half an hour",
                },
                {
                  word: "braccia",
                  lemma: "braccio",
                  pos: "noun",
                  meaning: "arms (irregular feminine plural of braccio)",
                },
              ],
              grammarNote: "Falstaff casually drops a massive revelation: Alice will be in his arms within thirty minutes. Subjunctive 'ch'io taccia' follows the negative expression 'non c'è ragion che'.",
            },
          ],
        },
        {
          id: "a2_s1_c84",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c84_l1",
              original: "Chi?...",
              literal: "Who?...",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who",
                },
              ],
              grammarNote: "Ford is dumbfounded, scarcely able to believe his ears.",
            },
          ],
        },
        {
          id: "a2_s1_c85",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c85_l1",
              original: "Alice. Essa mandò dianzi una... confidente",
              literal: "Alice. She sent just now a... confidante",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice",
                },
                {
                  word: "mandò",
                  lemma: "mandare",
                  pos: "verb",
                  meaning: "sent (3rd sing. passato remoto)",
                },
                {
                  word: "dianzi",
                  lemma: "dianzi",
                  pos: "adverb",
                  meaning: "just now / a moment ago",
                },
                {
                  word: "confidente",
                  lemma: "confidente",
                  pos: "noun",
                  meaning: "confidante / go-between",
                },
              ],
              grammarNote: "Falstaff identifies Alice and mentions the go-between (Mistress Quickly), relishing the apparent success of his charm.",
            },
            {
              id: "a2_s1_c85_l2",
              original: "per dirmi che quel tanghero di suo marito è assente",
              literal: "to tell me that that boor of her husband is away",
              tokens: [
                {
                  word: "dirmi",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "to tell me (dire + clitic mi)",
                },
                {
                  word: "tanghero",
                  lemma: "tanghero",
                  pos: "noun",
                  meaning: "boor / bumpkin / clodhopper / oaf",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
                {
                  word: "assente",
                  lemma: "assente",
                  pos: "adjective",
                  meaning: "absent / away",
                },
              ],
              grammarNote: "Falstaff hurls the colorful Italian insult 'tanghero' (coarse boor / oaf) at Ford right to his face, oblivious of who he is talking to.",
            },
            {
              id: "a2_s1_c85_l3",
              original: "dalle due alle tre.",
              literal: "from two to three o'clock.",
              tokens: [
                {
                  word: "dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (da + le)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two (o'clock)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (a + le)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three (o'clock)",
                },
              ],
              grammarNote: "Falstaff reveals the precise rendezvous hours ('dalle due alle tre'), which Alice and Quickly had calculated for Ford's routine absence.",
            },
          ],
        },
        {
          id: "a2_s1_c86",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c86_l1",
              original: "Lo conoscete?",
              literal: "Do you know him?",
              tokens: [
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object pronoun)",
                },
                {
                  word: "conoscete",
                  lemma: "conoscere",
                  pos: "verb",
                  meaning: "you know / are acquainted with (2nd plur. present)",
                },
              ],
              grammarNote: "Ford asks with tense restraint whether Falstaff actually knows Master Ford personally.",
            },
          ],
        },
        {
          id: "a2_s1_c87",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c87_l1",
              original: "Il diavolo",
              literal: "May the devil",
              tokens: [
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil / Satan",
                },
              ],
              grammarNote: "Falstaff starts an extravagant, colorful curse against the husband.",
            },
            {
              id: "a2_s1_c87_l2",
              original: "se lo porti all'inferno con Menelao suo avolo!",
              literal: "take him to hell with Menelaus his ancestor!",
              tokens: [
                {
                  word: "porti",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carry off / take (3rd sing. present subjunctive)",
                },
                {
                  word: "inferno",
                  lemma: "inferno",
                  pos: "noun",
                  meaning: "hell / inferno",
                },
                {
                  word: "Menelao",
                  lemma: "Menelao",
                  pos: "noun",
                  meaning: "Menelaus",
                },
                {
                  word: "avolo",
                  lemma: "avolo",
                  pos: "noun",
                  meaning: "ancestor / grandfather / forebear",
                },
              ],
              grammarNote: "Optative subjunctive curse ('se lo porti'). Calling Menelaus (the archetypal cuckolded husband of Helen of Troy) Ford's ancestor ('suo avolo') stamps Ford as an inherent, destined cuckold.",
            },
            {
              id: "a2_s1_c87_l3",
              original: "Vedrai! Te lo cornifico netto! se mi frastorna",
              literal: "You will see! I will cuckold him clean for you! If he bothers me",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (2nd sing. future)",
                },
                {
                  word: "cornifico",
                  lemma: "cornificare",
                  pos: "verb",
                  meaning: "I cuckold / give horns to (1st sing. present)",
                },
                {
                  word: "netto",
                  lemma: "netto",
                  pos: "adverb",
                  meaning: "cleanly / completely / outright",
                },
                {
                  word: "frastorna",
                  lemma: "frastornare",
                  pos: "verb",
                  meaning: "disturbs / disrupts / gets in the way of (3rd sing. present)",
                },
              ],
              grammarNote: "Ethic dative 'te lo cornifico' ('I'll cuckold him for you'). 'Cornificare' is the quintessential Italian verb for cuckolding a husband. 'Netto' signifies doing it thoroughly and without fail.",
            },
            {
              id: "a2_s1_c87_l4",
              original: "gli sparo una girandola di botte sulle corna!",
              literal: "I will loose a pinwheel of blows upon his horns!",
              tokens: [
                {
                  word: "sparo",
                  lemma: "sparare",
                  pos: "verb",
                  meaning: "I loose / fire off (1st sing. present)",
                },
                {
                  word: "girandola",
                  lemma: "girandola",
                  pos: "noun",
                  meaning: "pinwheel / Catherine wheel / flurry",
                },
                {
                  word: "botte",
                  lemma: "botta",
                  pos: "noun",
                  meaning: "blows / beatings (plural)",
                },
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (irregular feminine plural of corno)",
                },
              ],
              grammarNote: "Vivid comedic bravado: Falstaff threatens to rain down a spinning Catherine wheel of blows ('una girandola di botte') directly on Ford's horns.",
            },
            {
              id: "a2_s1_c87_l5",
              original: "Quel messer Ford è un bue! Un bue! Te lo corbello,",
              literal: "That Master Ford is an ox! An ox! I will dupe him for you,",
              tokens: [
                {
                  word: "bue",
                  lemma: "bue",
                  pos: "noun",
                  meaning: "ox / dunce / cuckold",
                },
                {
                  word: "corbello",
                  lemma: "corbellare",
                  pos: "verb",
                  meaning: "I dupe / hoodwink / mock (1st sing. present)",
                },
              ],
              grammarNote: "'Bue' (ox) is an Italian metaphor for a cuckold and slow-witted dunce. 'Corbellare' means to hoodwink, mock, or fool completely.",
            },
            {
              id: "a2_s1_c87_l6",
              original: "vedrai! Ma è tardi. Aspettami qua. Vado a farmi bello.",
              literal: "you will see! But it is late. Wait for me here. I go to make myself handsome.",
              tokens: [
                {
                  word: "tardi",
                  lemma: "tardi",
                  pos: "adverb",
                  meaning: "late",
                },
                {
                  word: "Aspettami",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "wait for me! (imperative aspettate/aspetta + clitic mi)",
                },
                {
                  word: "farmi bello",
                  lemma: "farsi bello",
                  pos: "idiom",
                  meaning: "to groom oneself / dress up / spruce oneself up",
                },
              ],
              grammarNote: "'Farsi bello' is an expressive Italian idiom for sprucing oneself up and dressing in one's finest. Falstaff exits, leaving Ford to his volcanic fury.",
            },
          ],
        },
        {
          id: "a2_s1_c88",
          speaker: "Sir John Falstaff",
          stageDirection: "piglia il sacco di monete ed esce dal fondo",
          stageDirectionTranslation: "takes the bag of coins and exits through the back",
          lines: [
          ],
        },
        {
          id: "a2_s1_c89",
          speaker: "Ford",
          pieceTitle: "È sogno? o realtà? (Monologo di Ford)",
          lines: [
            {
              id: "a2_s1_c89_l1",
              original: "È sogno o realtà?... Due rami enormi",
              literal: "Is it a dream or reality?... Two enormous branches",
              tokens: [
                {
                  word: "sogno",
                  lemma: "sogno",
                  pos: "noun",
                  meaning: "dream",
                },
                {
                  word: "realtà",
                  lemma: "realtà",
                  pos: "noun",
                  meaning: "reality",
                },
                {
                  word: "rami",
                  lemma: "ramo",
                  pos: "noun",
                  meaning: "branches / boughs / antlers (plural)",
                },
                {
                  word: "enormi",
                  lemma: "enorme",
                  pos: "adjective",
                  meaning: "enormous / huge (plural)",
                },
              ],
              grammarNote: "Opening of Ford's celebrated jealousy monologue. He questions his senses before envisioning 'due rami enormi' (two giant branched horns) sprouting from his forehead.",
            },
            {
              id: "a2_s1_c89_l2",
              original: "crescon sulla mia testa.",
              literal: "grow upon my head.",
              tokens: [
                {
                  word: "crescon",
                  lemma: "crescere",
                  pos: "verb",
                  meaning: "grow (apocope of crescono)",
                },
                {
                  word: "sulla",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the / on the (su + la)",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
              ],
              grammarNote: "Ford feels his own forehead in horror, convinced that the visible antlers of cuckoldry are actively growing upon his head.",
            },
            {
              id: "a2_s1_c89_l3",
              original: "È un sogno? Mastro Ford! Mastro Ford! Dormi?",
              literal: "Is it a dream? Master Ford! Master Ford! Are you asleep?",
              tokens: [
                {
                  word: "sogno",
                  lemma: "sogno",
                  pos: "noun",
                  meaning: "dream",
                },
                {
                  word: "Mastro",
                  lemma: "mastro",
                  pos: "noun",
                  meaning: "Master / craftsman (honorific title)",
                },
                {
                  word: "Dormi",
                  lemma: "dormire",
                  pos: "verb",
                  meaning: "are you sleeping? / do you sleep? (2nd sing. present)",
                },
              ],
              grammarNote: "Ford addresses himself in the second person by his civic title 'Mastro Ford', rebuking his own complacency.",
            },
            {
              id: "a2_s1_c89_l4",
              original: "Svegliati! Su! Ti desta!",
              literal: "Wake up! Come on! Rouse yourself!",
              tokens: [
                {
                  word: "Svegliati",
                  lemma: "svegliarsi",
                  pos: "verb",
                  meaning: "wake up! (2nd sing. reflexive imperative)",
                },
                {
                  word: "Su",
                  lemma: "su",
                  pos: "interjection",
                  meaning: "up! / come on! / arise!",
                },
                {
                  word: "Ti desta",
                  lemma: "destarsi",
                  pos: "verb",
                  meaning: "rouse yourself! (2nd sing. reflexive imperative)",
                },
              ],
              grammarNote: "Urgent, staccato reflexive imperatives ('Svegliati!', 'Ti desta!') as Ford spurs himself into fury and defensive action.",
            },
            {
              id: "a2_s1_c89_l5",
              original: "Tua moglie sgarra e mette in mal assetto",
              literal: "Your wife strays and throws into disarray",
              tokens: [
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
                {
                  word: "sgarra",
                  lemma: "sgarrare",
                  pos: "verb",
                  meaning: "errs / strays / transgresses (3rd sing. present)",
                },
                {
                  word: "mette in mal assetto",
                  lemma: "mettere in mal assetto",
                  pos: "idiom",
                  meaning: "to throw into disorder / bring to ruin / put into disarray",
                },
              ],
              grammarNote: "'Sgarrare' means to step out of bounds or transgress. 'Mettere in mal assetto' is an idiom meaning to throw into complete disorder or disrepute.",
            },
            {
              id: "a2_s1_c89_l6",
              original: "l'onore tuo, la tua casa ed il tuo letto!",
              literal: "your honor, your house, and your bed!",
              tokens: [
                {
                  word: "onore",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor",
                },
                {
                  word: "casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house / home",
                },
                {
                  word: "letto",
                  lemma: "letto",
                  pos: "noun",
                  meaning: "bed / marital bed",
                },
              ],
              grammarNote: "Tricolon of domestic bourgeois values ('l'onore tuo, la tua casa ed il tuo letto') desecrated by Alice's presumed infidelity.",
            },
            {
              id: "a2_s1_c89_l7",
              original: "L'ora è fissata, tramato l'inganno;",
              literal: "The hour is set, the deception plotted;",
              tokens: [
                {
                  word: "ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "hour / time",
                },
                {
                  word: "fissata",
                  lemma: "fissare",
                  pos: "verb",
                  meaning: "set / fixed (past participle)",
                },
                {
                  word: "tramato",
                  lemma: "tramare",
                  pos: "verb",
                  meaning: "plotted / hatched (past participle)",
                },
                {
                  word: "inganno",
                  lemma: "inganno",
                  pos: "noun",
                  meaning: "deception / deceit / plot",
                },
              ],
              grammarNote: "Pithy elliptical clauses with past participles ('fissata', 'tramato') conveying relentless impending betrayal.",
            },
            {
              id: "a2_s1_c89_l8",
              original: "sei gabbato e truffato!...",
              literal: "you are duped and swindled!...",
              tokens: [
                {
                  word: "sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd sing. present)",
                },
                {
                  word: "gabbato",
                  lemma: "gabbare",
                  pos: "verb",
                  meaning: "duped / mocked / fooled (past participle)",
                },
                {
                  word: "truffato",
                  lemma: "truffare",
                  pos: "verb",
                  meaning: "swindled / cheated (past participle)",
                },
              ],
              grammarNote: "Verbs 'gabbare' (to fool or dupe) and 'truffare' (to swindle) evoke the bitter realization of being a humiliated laughingstock.",
            },
            {
              id: "a2_s1_c89_l9",
              original: "E poi diranno",
              literal: "And then they will say",
              tokens: [
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "diranno",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "they will say (3rd plur. future)",
                },
              ],
              grammarNote: "Ford imagines the cruel verdict of society and gossiping neighbors.",
            },
            {
              id: "a2_s1_c89_l10",
              original: "che un marito geloso è un insensato!",
              literal: "that a jealous husband is a madman!",
              tokens: [
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
                {
                  word: "geloso",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous",
                },
                {
                  word: "insensato",
                  lemma: "insensato",
                  pos: "noun",
                  meaning: "madman / senseless fool / lunatic",
                },
              ],
              grammarNote: "Ford vents his bitterness at the common perception that jealous husbands are irrational ('un insensato'), when in his case his jealousy is dead right.",
            },
            {
              id: "a2_s1_c89_l11",
              original: "Già dietro a me nomi d'infame conio",
              literal: "Already behind me names of infamous stamp",
              tokens: [
                {
                  word: "dietro a",
                  lemma: "dietro a",
                  pos: "preposition",
                  meaning: "behind",
                },
                {
                  word: "nomi",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "names / epithets (plural)",
                },
                {
                  word: "infame",
                  lemma: "infame",
                  pos: "adjective",
                  meaning: "infamous / shameful",
                },
                {
                  word: "conio",
                  lemma: "conio",
                  pos: "noun",
                  meaning: "stamp / coinage / minting",
                },
              ],
              grammarNote: "Metaphor 'nomi d'infame conio' refers to insults freshly minted like debased coins to brand a cuckolded husband.",
            },
            {
              id: "a2_s1_c89_l12",
              original: "fischian passando; mormora lo scherno.",
              literal: "whistle as they pass; mockery murmurs.",
              tokens: [
                {
                  word: "fischian",
                  lemma: "fischiare",
                  pos: "verb",
                  meaning: "whistle / hiss (apocope of fischiano)",
                },
                {
                  word: "passando",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "passing by (gerund)",
                },
                {
                  word: "mormora",
                  lemma: "mormorare",
                  pos: "verb",
                  meaning: "murmurs / whispers (3rd sing. present)",
                },
                {
                  word: "scherno",
                  lemma: "scherno",
                  pos: "noun",
                  meaning: "mockery / scorn / derision",
                },
              ],
              grammarNote: "Auditory imagery of hissing and whispering ('fischian', 'mormora') evoking public derision following Ford down the street.",
            },
            {
              id: "a2_s1_c89_l13",
              original: "O matrimonio, inferno!",
              literal: "O marriage, hell!",
              tokens: [
                {
                  word: "matrimonio",
                  lemma: "matrimonio",
                  pos: "noun",
                  meaning: "marriage / matrimony",
                },
                {
                  word: "inferno",
                  lemma: "inferno",
                  pos: "noun",
                  meaning: "hell",
                },
              ],
              grammarNote: "Ford denounces the institution of marriage as pure hell, leading into his condemnation of womankind.",
            },
            {
              id: "a2_s1_c89_l14",
              original: "Donna: demonio!",
              literal: "Woman: demon!",
              tokens: [
                {
                  word: "Donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
                {
                  word: "demonio",
                  lemma: "demonio",
                  pos: "noun",
                  meaning: "demon / devil",
                },
              ],
              grammarNote: "Succinct, furious rhyming exclamation ('matrimonio, inferno / Donna: demonio!').",
            },
            {
              id: "a2_s1_c89_l15",
              original: "Nella lor moglie abbian fede i babbei!",
              literal: "In their wife let simpletons have faith!",
              tokens: [
                {
                  word: "lor",
                  lemma: "loro",
                  pos: "adjective",
                  meaning: "their (apocope of loro)",
                },
                {
                  word: "abbian",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "let them have (apocope of abbiano, 3rd plur. present subjunctive)",
                },
                {
                  word: "fede",
                  lemma: "fede",
                  pos: "noun",
                  meaning: "faith / trust",
                },
                {
                  word: "babbei",
                  lemma: "babbeo",
                  pos: "noun",
                  meaning: "simpletons / dupes / fools (plural of babbeo)",
                },
              ],
              grammarNote: "Jussive subjunctive 'abbian fede' (let them trust). 'Babbeo' is an expressive term for an easily gullible dupe.",
            },
            {
              id: "a2_s1_c89_l16",
              original: "Affiderei",
              literal: "I would entrust",
              tokens: [
                {
                  word: "Affiderei",
                  lemma: "affidare",
                  pos: "verb",
                  meaning: "I would entrust / trust (1st sing. conditional)",
                },
              ],
              grammarNote: "Conditional 'affiderei' launches a series of absurd, exaggerated hypotheticals borrowed from Shakespeare (Ford's soliloquy in Merry Wives II.2).",
            },
            {
              id: "a2_s1_c89_l17",
              original: "la mia birra a un tedesco,",
              literal: "my beer to a German,",
              tokens: [
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "birra",
                  lemma: "birra",
                  pos: "noun",
                  meaning: "beer / ale",
                },
                {
                  word: "tedesco",
                  lemma: "tedesco",
                  pos: "noun",
                  meaning: "German",
                },
              ],
              grammarNote: "First comparison of reckless trust: leaving beer unguarded with a thirsty German.",
            },
            {
              id: "a2_s1_c89_l18",
              original: "tutto il mio desco",
              literal: "all my dining table",
              tokens: [
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / whole",
                },
                {
                  word: "desco",
                  lemma: "desco",
                  pos: "noun",
                  meaning: "dining table / dinner board",
                },
              ],
              grammarNote: "'Desco' is a literary term for the dinner table or banquet board.",
            },
            {
              id: "a2_s1_c89_l19",
              original: "a un olandese lurco,",
              literal: "to a gluttonous Dutchman,",
              tokens: [
                {
                  word: "olandese",
                  lemma: "olandese",
                  pos: "noun",
                  meaning: "Dutchman",
                },
                {
                  word: "lurco",
                  lemma: "lurco",
                  pos: "adjective",
                  meaning: "gluttonous / greedy / voracious",
                },
              ],
              grammarNote: "'Lurco' is an archaism/Dantean poetic term for a ravenous, gluttonous eater.",
            },
            {
              id: "a2_s1_c89_l20",
              original: "la mia bottiglia d'acquavite a un turco,",
              literal: "my bottle of spirits to a Turk,",
              tokens: [
                {
                  word: "bottiglia",
                  lemma: "bottiglia",
                  pos: "noun",
                  meaning: "bottle",
                },
                {
                  word: "acquavite",
                  lemma: "acquavite",
                  pos: "noun",
                  meaning: "spirits / brandy / liquor",
                },
                {
                  word: "turco",
                  lemma: "turco",
                  pos: "noun",
                  meaning: "Turk",
                },
              ],
              grammarNote: "Another paradoxical risk: entrusting strong liquor ('acquavite') to a Turk (borrowed from Shakespeare's 'an Irishman with my aqua-vitae bottle').",
            },
            {
              id: "a2_s1_c89_l21",
              original: "non mia moglie a sé stessa. O laida sorte!",
              literal: "not my wife to herself. O foul destiny!",
              tokens: [
                {
                  word: "sé stessa",
                  lemma: "sé stesso",
                  pos: "pronoun",
                  meaning: "herself",
                },
                {
                  word: "laida",
                  lemma: "laido",
                  pos: "adjective",
                  meaning: "foul / ugly / disgraceful",
                },
                {
                  word: "sorte",
                  lemma: "sorte",
                  pos: "noun",
                  meaning: "destiny / fate / lot",
                },
              ],
              grammarNote: "The punchline: Ford would trust all those treasures before trusting his wife alone with herself. 'Laida' means disgusting, vile, or foul.",
            },
            {
              id: "a2_s1_c89_l22",
              original: "Quella brutta parola in cor mi torna:",
              literal: "That ugly word returns to my heart:",
              tokens: [
                {
                  word: "brutta",
                  lemma: "brutto",
                  pos: "adjective",
                  meaning: "ugly / hideous / dreadful",
                },
                {
                  word: "parola",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "word",
                },
                {
                  word: "cor",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (apocope of cuore)",
                },
                {
                  word: "torna",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "returns (3rd sing. present)",
                },
              ],
              grammarNote: "'Quella brutta parola' echoes Falstaff's taunting mention of 'le corna'.",
            },
            {
              id: "a2_s1_c89_l23",
              original: "«Le corna!» Bue! Capron! le fusa torte!",
              literal: "«The horns!» Ox! Billy-goat! twisted spindles!",
              tokens: [
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (irregular feminine plural of corno)",
                },
                {
                  word: "Bue",
                  lemma: "bue",
                  pos: "noun",
                  meaning: "ox / cuckold",
                },
                {
                  word: "Capron",
                  lemma: "caprone",
                  pos: "noun",
                  meaning: "billy-goat / cuckold (apocope of caprone)",
                },
                {
                  word: "fusa torte",
                  lemma: "fusa torte",
                  pos: "idiom",
                  meaning: "twisted spindles / crooked cuckold horns",
                },
              ],
              grammarNote: "Climax of cuckold imagery. 'Bue' and 'capron' are horned animals symbolizing cuckolds; 'fusa torte' (literally twisted spinning spindles) is an ancient Tuscan idiom for crooked horns.",
            },
            {
              id: "a2_s1_c89_l24",
              original: "Ah! «le corna! le corna!»",
              literal: "Ah! «the horns! the horns!»",
              tokens: [
                {
                  word: "Ah",
                  lemma: "ah",
                  pos: "interjection",
                  meaning: "ah! / oh!",
                },
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (plural of corno)",
                },
              ],
              grammarNote: "Ford cries out in anguish as the obsessive nightmare of cuckoldry consumes him.",
            },
            {
              id: "a2_s1_c89_l25",
              original: "Ma non mi sfuggirai! no! sozzo, reo,",
              literal: "But you shall not escape me! No! filthy, guilty,",
              tokens: [
                {
                  word: "sfuggirai",
                  lemma: "sfuggire",
                  pos: "verb",
                  meaning: "you will escape / elude (2nd sing. future)",
                },
                {
                  word: "sozzo",
                  lemma: "sozzo",
                  pos: "adjective",
                  meaning: "filthy / foul / dirty",
                },
                {
                  word: "reo",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "guilty / criminal / wicked",
                },
              ],
              grammarNote: "Ford pivots from despair to thirst for revenge, addressing the absent Falstaff. 'Sozzo' (foul/disgusting) and 'reo' (wicked/culpable) target Falstaff's vices.",
            },
            {
              id: "a2_s1_c89_l26",
              original: "dannato epicureo!",
              literal: "damned Epicurean!",
              tokens: [
                {
                  word: "dannato",
                  lemma: "dannato",
                  pos: "adjective",
                  meaning: "damned / accursed (past participle of dannare)",
                },
                {
                  word: "epicureo",
                  lemma: "epicureo",
                  pos: "noun",
                  meaning: "Epicurean / hedonist / sensualist",
                },
              ],
              grammarNote: "Boito's translation of Shakespeare's insult 'damned Epicurean rascal'—referring to one who lives solely for gluttonous and carnal pleasures.",
            },
            {
              id: "a2_s1_c89_l27",
              original: "Prima li accoppio",
              literal: "First I will trap them together",
              tokens: [
                {
                  word: "Prima",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / beforehand",
                },
                {
                  word: "li",
                  lemma: "li",
                  pos: "pronoun",
                  meaning: "them",
                },
                {
                  word: "accoppio",
                  lemma: "accoppiare",
                  pos: "verb",
                  meaning: "I couple / pair together / trap together (1st sing. present)",
                },
              ],
              grammarNote: "Ford resolves to let the two lovers come together ('li accoppio') so he can catch them red-handed.",
            },
            {
              id: "a2_s1_c89_l28",
              original: "e poi li colgo. Io scoppio!",
              literal: "and then I catch them. I am bursting!",
              tokens: [
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "colgo",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "I catch / surprise (1st sing. present)",
                },
                {
                  word: "scoppio",
                  lemma: "scoppiare",
                  pos: "verb",
                  meaning: "I burst / explode (1st sing. present)",
                },
              ],
              grammarNote: "Rhyme 'accoppio / scoppio'. 'Li colgo' means catching them in the act; 'io scoppio' conveys Ford's inner explosion of jealous rage.",
            },
            {
              id: "a2_s1_c89_l29",
              original: "Vendicherò l'affronto!",
              literal: "I will avenge the insult!",
              tokens: [
                {
                  word: "Vendicherò",
                  lemma: "vendicare",
                  pos: "verb",
                  meaning: "I will avenge (1st sing. future)",
                },
                {
                  word: "l'affronto",
                  lemma: "affronto",
                  pos: "noun",
                  meaning: "the insult / affront / outrage",
                },
              ],
              grammarNote: "A resolute vow of vengeance sealing Ford's transition into furious determination.",
            },
            {
              id: "a2_s1_c89_l30",
              original: "Laudata sempre sia",
              literal: "Praised forever be",
              tokens: [
                {
                  word: "Laudata",
                  lemma: "laudare",
                  pos: "verb",
                  meaning: "praised / blessed (archaic/poetic participle of lodare)",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always / forever",
                },
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "let it be (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Ford adopts liturgical language ('Laudata sempre sia' - Praised be forever), perversely elevating his jealousy to a sacred blessing.",
            },
            {
              id: "a2_s1_c89_l31",
              original: "nel fondo del mio cor la gelosia.",
              literal: "in the depth of my heart, jealousy.",
              tokens: [
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "depth / bottom",
                },
                {
                  word: "cor",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (apocope of cuore)",
                },
                {
                  word: "gelosia",
                  lemma: "gelosia",
                  pos: "noun",
                  meaning: "jealousy",
                },
              ],
              grammarNote: "The crowning climax of Ford's monologue, singing a hymn of praise to jealousy for having opened his eyes in time.",
            },
          ],
        },
        {
          id: "a2_s1_c90",
          speaker: "Sir John Falstaff",
          stageDirection: "rientrando dalla porta del fondo. Ha un farsetto nuovo, cappello e bastone",
          stageDirectionTranslation: "re-entering through the back door. He wears a new doublet, hat, and cane",
          lines: [
            {
              id: "a2_s1_c90_l1",
              original: "Eccomi qua. Son pronto.",
              literal: "Here I am. I am ready.",
              tokens: [
                {
                  word: "Eccomi",
                  lemma: "ecco",
                  pos: "adverb",
                  meaning: "here I am (presentative ecco + clitic mi)",
                },
                {
                  word: "qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "pronto",
                  lemma: "pronto",
                  pos: "adjective",
                  meaning: "ready / prepared",
                },
              ],
              grammarNote: "Falstaff re-enters gorgeously preened and perfumed, creating an abrupt comedic contrast with Ford's tragic jealousy.",
            },
            {
              id: "a2_s1_c90_l2",
              original: "M'accompagnate un tratto?",
              literal: "Will you accompany me a little way?",
              tokens: [
                {
                  word: "M'accompagnate",
                  lemma: "accompagnare",
                  pos: "verb",
                  meaning: "will you accompany me? (clitic mi + accompagnare)",
                },
                {
                  word: "un tratto",
                  lemma: "un tratto",
                  pos: "idiom",
                  meaning: "a little way / a short distance",
                },
              ],
              grammarNote: "'Un tratto' idiomatically means a short distance. Falstaff genially asks Fontana to walk out with him.",
            },
          ],
        },
        {
          id: "a2_s1_c91",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c91_l1",
              original: "Vi metto sulla via.",
              literal: "I will set you on your way.",
              tokens: [
                {
                  word: "Vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (plural/polite direct object)",
                },
                {
                  word: "metto",
                  lemma: "mettere",
                  pos: "verb",
                  meaning: "I put / set (1st sing. present)",
                },
                {
                  word: "sulla via",
                  lemma: "sulla via",
                  pos: "idiom",
                  meaning: "on the way / on the road",
                },
              ],
              grammarNote: "Ford's answer has chilling dramatic irony: 'I'll set you on your way' doubles as leading Falstaff straight to his doom.",
            },
          ],
        },
        {
          id: "a2_s1_c92",
          speaker: "Ford",
          stageDirection: "si avviano: giunti presso alla soglia fanno dei gesti complimentosi per cedere la precedenza del passo",
          stageDirectionTranslation: "they set off; having reached the threshold they exchange polite gestures yielding the right of way",
          lines: [
          ],
        },
        {
          id: "a2_s1_c93",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c93_l1",
              original: "Prima voi.",
              literal: "After you.",
              tokens: [
                {
                  word: "Prima",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / before",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
              ],
              grammarNote: "Falstaff politely insists that Fontana go first ('Prima voi' - literally 'You first', meaning 'After you').",
            },
          ],
        },
        {
          id: "a2_s1_c94",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c94_l1",
              original: "Prima voi.",
              literal: "After you.",
              tokens: [
                {
                  word: "Prima",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / before",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
              ],
              grammarNote: "Falstaff politely insists that Fontana go first ('Prima voi' - literally 'You first', meaning 'After you').",
            },
          ],
        },
        {
          id: "a2_s1_c95",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c95_l1",
              original: "No, sono in casa mia.",
              literal: "No, I am in my house.",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
                {
                  word: "casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house / home",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
              ],
              grammarNote: "Falstaff argues host etiquette: since this inn is his current lodgings, the guest must walk out first.",
            },
          ],
        },
        {
          id: "a2_s1_c96",
          speaker: "Sir John Falstaff",
          stageDirection: "ritirandosi un poco",
          stageDirectionTranslation: "stepping back a little",
          lines: [
            {
              id: "a2_s1_c96_l1",
              original: "Passate.",
              literal: "Go ahead.",
              tokens: [
                {
                  word: "Passate",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "pass through / go ahead (2nd plur. imperative)",
                },
              ],
              grammarNote: "Falstaff gestures courteously toward the doorway.",
            },
          ],
        },
        {
          id: "a2_s1_c97",
          speaker: "Ford",
          stageDirection: "ritirandosi",
          stageDirectionTranslation: "withdrawing",
          lines: [
            {
              id: "a2_s1_c97_l1",
              original: "Prego...",
              literal: "Please...",
              tokens: [
                {
                  word: "Prego",
                  lemma: "pregare",
                  pos: "interjection",
                  meaning: "please / pray / after you",
                },
              ],
              grammarNote: "Ford counters with equal exaggerated politeness, refusing to take precedence.",
            },
          ],
        },
        {
          id: "a2_s1_c98",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c98_l1",
              original: "È tardi. L'appuntamento preme.",
              literal: "It is late. The appointment presses.",
              tokens: [
                {
                  word: "tardi",
                  lemma: "tardi",
                  pos: "adverb",
                  meaning: "late",
                },
                {
                  word: "appuntamento",
                  lemma: "appuntamento",
                  pos: "noun",
                  meaning: "appointment / rendezvous",
                },
                {
                  word: "preme",
                  lemma: "premere",
                  pos: "verb",
                  meaning: "presses / is urgent (3rd sing. present)",
                },
              ],
              grammarNote: "Falstaff stresses urgency: his romantic rendezvous ('l'appuntamento') with Alice cannot wait.",
            },
          ],
        },
        {
          id: "a2_s1_c99",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s1_c99_l1",
              original: "Non fate complimenti...",
              literal: "Do not stand on ceremony...",
              tokens: [
                {
                  word: "fate",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "do / make (2nd plur. present/imperative)",
                },
                {
                  word: "complimenti",
                  lemma: "complimento",
                  pos: "noun",
                  meaning: "ceremonies / compliments (plural)",
                },
                {
                  word: "fare complimenti",
                  lemma: "fare complimenti",
                  pos: "idiom",
                  meaning: "to stand on ceremony / fuss over etiquette",
                },
              ],
              grammarNote: "'Non fate complimenti' is the standard Italian expression for 'don't stand on ceremony'.",
            },
          ],
        },
        {
          id: "a2_s1_c100",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s1_c100_l1",
              original: "Ebben; passiamo insieme.",
              literal: "Well then; let us pass together.",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well then (apocope of ebbene)",
                },
                {
                  word: "passiamo",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "let us pass / go through (1st plur. imperative)",
                },
                {
                  word: "insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Resolving the comic doorway stalemate, Falstaff and Ford link arms and pass through the door together, bringing the scene to a triumphant close.",
            },
          ],
        },
        {
          id: "a2_s1_c101",
          speaker: "Sir John Falstaff",
          stageDirection: "prende il braccio di Ford sotto il suo ed escono a braccetto",
          stageDirectionTranslation: "takes Ford's arm in his, and they exit arm in arm",
          lines: [
          ],
        },
      ],
    },
    {
      sceneNumber: 2,
      title: "Parte II: C'è. C'è. Sì, sì. (In casa di Ford: Il cesto della biancheria)",
      titleTranslation: "Part II: There. There. Yes, yes. (In Ford's House: The Laundry Basket)",
      originalDescription: "Una sala nella casa di Ford con grande finestra sul Tamigi. Falstaff corteggia Alice rievocando la sua giovinezza snella, finché l’irruzione di Ford costringe le comari a nasconderlo nel cesto della biancheria sporca per gettarlo nel fiume.",
      description: "A hall in Ford's house with a large window overlooking the Thames. Falstaff woos Alice, recalling his slender youth, until Ford's sudden intrusion forces the merry wives to hide him in the dirty laundry basket to throw him into the river.",
      cues: [
        {
          id: "a2_s2_c1",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c1_l1",
              original: "Presenteremo un bill, per una tassa",
              literal: "We shall present a bill, for a tax",
              tokens: [
                {
                  word: "Presenteremo",
                  lemma: "presentare",
                  pos: "verb",
                  meaning: "we shall present / submit (1st plur. future)",
                },
                {
                  word: "bill",
                  lemma: "bill",
                  pos: "noun",
                  meaning: "bill / draft statute (English loanword in Boito's text)",
                },
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for",
                },
                {
                  word: "tassa",
                  lemma: "tassa",
                  pos: "noun",
                  meaning: "tax / levy",
                },
              ],
              grammarNote: "Alice humorously adopts English parliamentary vocabulary ('bill'), proposing a legislative tax on obese men to penalize Falstaff's gross physique.",
            },
            {
              id: "a2_s2_c1_l2",
              original: "al parlamento, sulla gente grassa.",
              literal: "to parliament, on fat people.",
              tokens: [
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "parlamento",
                  lemma: "parlamento",
                  pos: "noun",
                  meaning: "parliament",
                },
                {
                  word: "sulla",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on the (articulated preposition su + la)",
                },
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / folk",
                },
                {
                  word: "grassa",
                  lemma: "grasso",
                  pos: "adjective",
                  meaning: "fat / stout",
                },
              ],
              grammarNote: "Syntactic continuation of Alice's parliamentary joke: taxing 'la gente grassa' (fat people) in the English Parliament, directly targeting Sir John.",
            },
          ],
        },
        {
          id: "a2_s2_c2",
          speaker: "Mrs. Quickly",
          stageDirection: "entrando",
          stageDirectionTranslation: "entering",
          lines: [
            {
              id: "a2_s2_c2_l1",
              original: "Comari!",
              literal: "Gossips!",
              tokens: [
                {
                  word: "Comari",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "gossips / fellow wives / female friends (vocative plural)",
                },
                {
                  word: "comare",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "gossip / neighbor woman / godmother",
                },
              ],
              grammarNote: "Mrs. Quickly bursts in addressing her fellow conspirators with the traditional Shakespearean vocative 'comari' (gossips / merry wives).",
            },
          ],
        },
        {
          id: "a2_s2_c3",
          speaker: "Mrs. Quickly",
          stageDirection: "accorrendo con Meg verso Quickly, mentre Nannetta ch'è entrata anch'essa resta triste in disparte",
          stageDirectionTranslation: "running with Meg toward Quickly, while Nannetta, who has also entered, stays sadly aside",
          lines: [
          ],
        },
        {
          id: "a2_s2_c4",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c4_l1",
              original: "Ebben?",
              literal: "Well?",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well? / well then? (apocope of ebbene)",
                },
                {
                  word: "ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well / well then",
                },
              ],
              grammarNote: "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c5",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c5_l1",
              original: "Che c'è?",
              literal: "What is it?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is / is there (elision of ci è)",
                },
              ],
              grammarNote: "Meg joins Alice in asking Quickly what news she brings from the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c6",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c6_l1",
              original: "Sarà sconfitto!",
              literal: "He will be defeated!",
              tokens: [
                {
                  word: "Sarà",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he will be (3rd sing. future)",
                },
                {
                  word: "sconfitto",
                  lemma: "sconfiggere",
                  pos: "verb",
                  meaning: "defeated / vanquished (past participle)",
                },
              ],
              grammarNote: "Quickly triumphantly proclaims Falstaff's inevitable defeat in their impending duel of wits.",
            },
          ],
        },
        {
          id: "a2_s2_c7",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c7_l1",
              original: "Brava!",
              literal: "Brava!",
              tokens: [
                {
                  word: "Brava",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "splendid / well done / clever (feminine singular)",
                },
                {
                  word: "bravo",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "capable / good / brave",
                },
              ],
              grammarNote: "Alice cheers Quickly's diplomatic success with an appreciative feminine exclamation.",
            },
          ],
        },
        {
          id: "a2_s2_c8",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c8_l1",
              original: "Fra poco gli farem la festa!",
              literal: "Shortly we shall finish him off!",
              tokens: [
                {
                  word: "Fra poco",
                  lemma: "fra poco",
                  pos: "idiom",
                  meaning: "shortly / before long / soon",
                },
                {
                  word: "gli",
                  lemma: "gli",
                  pos: "pronoun",
                  meaning: "to him / for him (dative clitic)",
                },
                {
                  word: "farem",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "we will make / do (apocope of faremo)",
                },
                {
                  word: "fare la festa",
                  lemma: "fare la festa",
                  pos: "idiom",
                  meaning: "to do for someone / finish someone off / settle someone's hash",
                },
              ],
              grammarNote: "Quickly uses the colloquial and darkly humorous idiom 'fare la festa a qualcuno' (to settle someone's hash / do for someone).",
            },
          ],
        },
        {
          id: "a2_s2_c9",
          speaker: "Alice & Meg",
          lines: [
            {
              id: "a2_s2_c9_l1",
              original: "Bene!",
              literal: "Good!",
              tokens: [
                {
                  word: "Bene",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well / good / fine",
                },
                {
                  word: "bene",
                  lemma: "bene",
                  pos: "noun",
                  meaning: "good / blessing / benefit",
                },
              ],
              grammarNote: "Alice and Meg exclaim in unison, pleased that their trap is closing around Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c10",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c10_l1",
              original: "Piombò nel laccio a capofitto.",
              literal: "He plunged into the snare headlong.",
              tokens: [
                {
                  word: "Piombò",
                  lemma: "piombare",
                  pos: "verb",
                  meaning: "he plunged / dropped like lead (3rd sing. passato remoto)",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the / into the (articulated preposition in + il)",
                },
                {
                  word: "laccio",
                  lemma: "laccio",
                  pos: "noun",
                  meaning: "snare / noose / trap",
                },
                {
                  word: "a capofitto",
                  lemma: "a capofitto",
                  pos: "idiom",
                  meaning: "headlong / headfirst",
                },
              ],
              grammarNote: "Quickly describes Falstaff's complete lack of suspicion using vivid hunting imagery ('laccio', snare) and the adverbial idiom 'a capofitto'.",
            },
          ],
        },
        {
          id: "a2_s2_c11",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c11_l1",
              original: "Narrami tutto, lesta.",
              literal: "Tell me everything, quickly.",
              tokens: [
                {
                  word: "Narrami",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "tell me / narrate to me (imperative narra + clitic mi)",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "everything / all",
                },
                {
                  word: "lesta",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble (feminine singular used adverbially)",
                },
              ],
              grammarNote: "Alice commands Quickly to tell the whole story without delay, using an enclitic imperative ('narrami') and adjective 'lesta' acting adverbially.",
            },
          ],
        },
        {
          id: "a2_s2_c12",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c12_l1",
              original: "Lesta.",
              literal: "Quickly.",
              tokens: [
                {
                  word: "Lesta",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / brisk (feminine singular)",
                },
                {
                  word: "lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble / agile",
                },
              ],
              grammarNote: "Meg echoes Alice's instruction, heightening the urgency and comedic rhythm.",
            },
          ],
        },
        {
          id: "a2_s2_c13",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c13_l1",
              original: "Lesta.",
              literal: "Quickly.",
              tokens: [
                {
                  word: "Lesta",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / brisk (feminine singular)",
                },
                {
                  word: "lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble / agile",
                },
              ],
              grammarNote: "Meg echoes Alice's instruction, heightening the urgency and comedic rhythm.",
            },
          ],
        },
        {
          id: "a2_s2_c14",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c14_l1",
              original: "Giunta all'«Albergo della Giarrettiera»",
              literal: "Having arrived at the 'Garter Inn'",
              tokens: [
                {
                  word: "Giunta",
                  lemma: "giungere",
                  pos: "verb",
                  meaning: "arrived / having arrived (past participle feminine singular)",
                },
                {
                  word: "all'",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at the / to the (articulated preposition a + l')",
                },
                {
                  word: "Albergo",
                  lemma: "albergo",
                  pos: "noun",
                  meaning: "inn / hotel",
                },
                {
                  word: "della",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + la)",
                },
                {
                  word: "Giarrettiera",
                  lemma: "giarrettiera",
                  pos: "noun",
                  meaning: "Garter (proper noun)",
                },
              ],
              grammarNote: "Quickly opens her storytelling like an epic recitation with a past participle clause ('Giunta...'), naming Falstaff's headquarters at the Garter Inn.",
            },
            {
              id: "a2_s2_c14_l2",
              original: "chiedo d'essere ammessa alla presenza",
              literal: "I ask to be admitted to the presence",
              tokens: [
                {
                  word: "chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I ask / request (1st sing. present)",
                },
                {
                  word: "d'essere",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "to be (preposition di + infinitive essere)",
                },
                {
                  word: "ammessa",
                  lemma: "ammettere",
                  pos: "verb",
                  meaning: "admitted (past participle feminine singular)",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + la)",
                },
                {
                  word: "presenza",
                  lemma: "presenza",
                  pos: "noun",
                  meaning: "presence",
                },
              ],
              grammarNote: "Quickly parodies high court etiquette ('alla presenza'), mimicking the sovereign dignity Falstaff imagines himself to possess.",
            },
            {
              id: "a2_s2_c14_l3",
              original: "del cavalier, segreta messaggera.",
              literal: "of the knight, secret messenger.",
              tokens: [
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + il)",
                },
                {
                  word: "cavalier",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight (apocope of cavaliere)",
                },
                {
                  word: "segreta",
                  lemma: "segreto",
                  pos: "adjective",
                  meaning: "secret / discreet",
                },
                {
                  word: "messaggera",
                  lemma: "messaggera",
                  pos: "noun",
                  meaning: "messenger / female envoy",
                },
              ],
              grammarNote: "Quickly styles herself as a diplomatic envoy of love ('segreta messaggera') to Falstaff ('il cavalier').",
            },
            {
              id: "a2_s2_c14_l4",
              original: "Sir John si degna d'accordarmi udienza,",
              literal: "Sir John deigns to grant me an audience,",
              tokens: [
                {
                  word: "si degna",
                  lemma: "degnarsi",
                  pos: "verb",
                  meaning: "he deigns / condescends (3rd sing. present)",
                },
                {
                  word: "d'accordarmi",
                  lemma: "accordare",
                  pos: "verb",
                  meaning: "to grant me (accordare + clitic mi)",
                },
                {
                  word: "udienza",
                  lemma: "udienza",
                  pos: "noun",
                  meaning: "audience / formal hearing",
                },
              ],
              grammarNote: "The phrase 'si degna d'accordarmi udienza' humorously conveys Falstaff's delusion that he is a prince receiving suitors.",
            },
            {
              id: "a2_s2_c14_l5",
              original: "m'accoglie tronfio in furfantesca posa:",
              literal: "he receives me pompous in a roguish pose:",
              tokens: [
                {
                  word: "m'accoglie",
                  lemma: "accogliere",
                  pos: "verb",
                  meaning: "he receives me (clitic mi + accoglie)",
                },
                {
                  word: "tronfio",
                  lemma: "tronfio",
                  pos: "adjective",
                  meaning: "pompous / puffed up / strutting",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
                {
                  word: "furfantesca",
                  lemma: "furfantesco",
                  pos: "adjective",
                  meaning: "roguish / rascally",
                },
                {
                  word: "posa",
                  lemma: "posa",
                  pos: "noun",
                  meaning: "pose / posture",
                },
              ],
              grammarNote: "Boito's adjectives 'tronfio' and 'furfantesca' capture Falstaff's hilarious combination of aristocratic pomposity and knavish swagger.",
            },
            {
              id: "a2_s2_c14_l6",
              original: "«Buon giorno, buona donna.»",
              literal: "«Good day, good woman.»",
              tokens: [
                {
                  word: "Buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocope of buono)",
                },
                {
                  word: "giorno",
                  lemma: "giorno",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "buona",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (feminine singular)",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
              ],
              grammarNote: "Quickly mimics Falstaff's condescending, patronizing baritone greeting from their encounter at the inn.",
            },
          ],
        },
        {
          id: "a2_s2_c15",
          speaker: "Mrs. Quickly",
          stageDirection: "contraffacendo sé stessa",
          stageDirectionTranslation: "mocking herself",
          lines: [
            {
              id: "a2_s2_c15_l1",
              original: "«Reverenza.»",
              literal: "«Reverence.»",
              tokens: [
                {
                  word: "Reverenza",
                  lemma: "reverenza",
                  pos: "noun",
                  meaning: "reverence / deep bow / curtsy",
                },
                {
                  word: "far reverenza",
                  lemma: "far reverenza",
                  pos: "idiom",
                  meaning: "to make a curtsy / bow low",
                },
              ],
              grammarNote: "Quickly quotes her own servile catchphrase and demonstrates her deep curtsy to the amusement of Alice and Meg.",
            },
            {
              id: "a2_s2_c15_l2",
              original: "A lui m'inchino molto ossequïosamente,",
              literal: "To him I bow very obsequiously,",
              tokens: [
                {
                  word: "A lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "to him",
                },
                {
                  word: "m'inchino",
                  lemma: "inchinarsi",
                  pos: "verb",
                  meaning: "I bow (reflexive 1st sing. present)",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "very / greatly",
                },
                {
                  word: "ossequïosamente",
                  lemma: "ossequiosamente",
                  pos: "adverb",
                  meaning: "obsequiously / deferentially (with diaeresis on ï)",
                },
              ],
              grammarNote: "The poetic diaeresis on 'ossequïosamente' stretches the word out comically, mimicking the slow, prolonged bow she performed.",
            },
            {
              id: "a2_s2_c15_l3",
              original: "poi passo alle notizie ghiotte.",
              literal: "then I move on to the juicy news.",
              tokens: [
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterward",
                },
                {
                  word: "passo",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "I pass / move on (1st sing. present)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + le)",
                },
                {
                  word: "notizie",
                  lemma: "notizia",
                  pos: "noun",
                  meaning: "news / tidings (plural)",
                },
                {
                  word: "ghiotte",
                  lemma: "ghiotto",
                  pos: "adjective",
                  meaning: "juicy / appetizing / enticing (feminine plural)",
                },
              ],
              grammarNote: "'Notizie ghiotte' treats her fabricated messages of love as appetizing morsels fed to Falstaff's insatiable vanity.",
            },
            {
              id: "a2_s2_c15_l4",
              original: "Lui beve grosso ed ogni mia massiccia",
              literal: "He swallows it whole and every massive",
              tokens: [
                {
                  word: "Lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he",
                },
                {
                  word: "beve grosso",
                  lemma: "bere grosso",
                  pos: "idiom",
                  meaning: "to be credulous / swallow whole / fall for anything",
                },
                {
                  word: "beve",
                  lemma: "bere",
                  pos: "verb",
                  meaning: "drinks / swallows (3rd sing. present)",
                },
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / each",
                },
                {
                  word: "massiccia",
                  lemma: "massiccio",
                  pos: "adjective",
                  meaning: "massive / hefty / solid",
                },
              ],
              grammarNote: "The colloquial idiom 'bere grosso' denotes coarse credulity, carrying over to the enjambment with 'frottola'.",
            },
            {
              id: "a2_s2_c15_l5",
              original: "frottola inghiotte.",
              literal: "fib he swallows.",
              tokens: [
                {
                  word: "frottola",
                  lemma: "frottola",
                  pos: "noun",
                  meaning: "fib / tall tale / cock-and-bull story",
                },
                {
                  word: "inghiotte",
                  lemma: "inghiottire",
                  pos: "verb",
                  meaning: "he swallows / gulps down (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly pairs 'beve grosso' with 'inghiotte' (he swallows), emphasizing Falstaff's ravenous consumption of her lies.",
            },
            {
              id: "a2_s2_c15_l6",
              original: "Infine, a farla spiccia,",
              literal: "In short, to make it brief,",
              tokens: [
                {
                  word: "Infine",
                  lemma: "infine",
                  pos: "adverb",
                  meaning: "finally / in short",
                },
                {
                  word: "a farla spiccia",
                  lemma: "farla spiccia",
                  pos: "idiom",
                  meaning: "to make it brief / to cut to the chase",
                },
                {
                  word: "spiccia",
                  lemma: "spiccio",
                  pos: "adjective",
                  meaning: "quick / expeditious",
                },
              ],
              grammarNote: "The conversational idiom 'a farla spiccia' (with feminine pronominal clitic 'la') introduces her concise summary of Falstaff's mindset.",
            },
            {
              id: "a2_s2_c15_l7",
              original: "vi crede entrambe innamorate cotte",
              literal: "he believes you both madly in love",
              tokens: [
                {
                  word: "vi crede",
                  lemma: "credere",
                  pos: "verb",
                  meaning: "he believes you (clitic vi + crede)",
                },
                {
                  word: "entrambe",
                  lemma: "entrambi",
                  pos: "pronoun",
                  meaning: "both (feminine plural)",
                },
                {
                  word: "innamorato cotto",
                  lemma: "innamorato cotto",
                  pos: "idiom",
                  meaning: "head over heels in love / madly infatuated",
                },
                {
                  word: "innamorate",
                  lemma: "innamorato",
                  pos: "adjective",
                  meaning: "in love / enamored",
                },
                {
                  word: "cotte",
                  lemma: "cotto",
                  pos: "adjective",
                  meaning: "cooked / smitten (feminine plural)",
                },
              ],
              grammarNote: "The popular Italian idiom 'innamorate cotte' (literally 'cooked in love') hilariously captures Falstaff's supreme romantic delusion.",
            },
            {
              id: "a2_s2_c15_l8",
              original: "delle bellezze sue.",
              literal: "with his beauties.",
              tokens: [
                {
                  word: "delle",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the / with the (articulated preposition di + le)",
                },
                {
                  word: "bellezze",
                  lemma: "bellezza",
                  pos: "noun",
                  meaning: "beauties / charms (plural)",
                },
                {
                  word: "sue",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive adjective feminine plural)",
                },
              ],
              grammarNote: "Quickly derisively refers to Falstaff's corpulent physical form as 'bellezze sue' (his charms/beauties).",
            },
          ],
        },
        {
          id: "a2_s2_c16",
          speaker: "Mrs. Quickly",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a2_s2_c16_l1",
              original: "E lo vedrete presto ai vostri piè.",
              literal: "And you will see him soon at your feet.",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "vedrete",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (2nd plur. future)",
                },
                {
                  word: "presto",
                  lemma: "presto",
                  pos: "adverb",
                  meaning: "soon / shortly",
                },
                {
                  word: "ai",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at the / to the (articulated preposition a + i)",
                },
                {
                  word: "piè",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "feet (poetic apocope of piedi)",
                },
              ],
              grammarNote: "Quickly assures the women of Falstaff's imminent groveling; 'piè' is the classical poetic apocope of 'piedi'.",
            },
          ],
        },
        {
          id: "a2_s2_c17",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c17_l1",
              original: "Quando?",
              literal: "When?",
              tokens: [
                {
                  word: "Quando",
                  lemma: "quando",
                  pos: "adverb",
                  meaning: "when / at what time",
                },
                {
                  word: "quando",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when / whenever",
                },
              ],
              grammarNote: "Alice abruptly cuts in to nail down the tactical logistics of the trap.",
            },
          ],
        },
        {
          id: "a2_s2_c18",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c18_l1",
              original: "Oggi, qui, dalle due alle tre.",
              literal: "Today, here, between two and three.",
              tokens: [
                {
                  word: "Oggi",
                  lemma: "oggi",
                  pos: "adverb",
                  meaning: "today",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + le)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two (two o'clock)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three (three o'clock)",
                },
              ],
              grammarNote: "Quickly reports the specific two-to-three o'clock window arranged for Alice's purported rendezvous.",
            },
          ],
        },
        {
          id: "a2_s2_c19",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c19_l1",
              original: "Dalle due alle tre.",
              literal: "From two to three.",
              tokens: [
                {
                  word: "Dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + le)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two (two o'clock)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + le)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three (three o'clock)",
                },
              ],
              grammarNote: "Meg repeats the exact time frame with wicked delight, reinforcing the deadline for their preparations.",
            },
          ],
        },
        {
          id: "a2_s2_c20",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c20_l1",
              original: "Son già le due.",
              literal: "It is already two.",
              tokens: [
                {
                  word: "Son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they are / it is (apocope of sono, 3rd plur.)",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "le due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two o'clock (feminine plural)",
                },
              ],
              grammarNote: "Alice realizes the hour has already struck, triggering instantaneous practical action; Italian uses plural 'sono le due'.",
            },
          ],
        },
        {
          id: "a2_s2_c21",
          speaker: "Alice Ford",
          stageDirection: "accorrendo subito all'uscio del fondo e chiamando",
          stageDirectionTranslation: "running immediately to the back door and calling out",
          lines: [
            {
              id: "a2_s2_c21_l1",
              original: "Olà! Ned Will!",
              literal: "Ho there! Ned! Will!",
              tokens: [
                {
                  word: "Olà",
                  lemma: "olà",
                  pos: "interjection",
                  meaning: "ho there! / hey!",
                },
                {
                  word: "Ned",
                  lemma: "Ned",
                  pos: "noun",
                  meaning: "Ned (proper noun)",
                },
                {
                  word: "Will",
                  lemma: "Will",
                  pos: "noun",
                  meaning: "Will (proper noun)",
                },
              ],
              grammarNote: "Alice calls out sharply to Ford's manservants to bring the heavy laundry basket.",
            },
          ],
        },
        {
          id: "a2_s2_c22",
          speaker: "Alice Ford",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a2_s2_c22_l1",
              original: "Già tutto ho preparato.",
              literal: "Already everything I have prepared.",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "everything / all",
                },
                {
                  word: "ho preparato",
                  lemma: "preparare",
                  pos: "verb",
                  meaning: "I have prepared (passato prossimo 1st sing.)",
                },
              ],
              grammarNote: "Alice reassures the company that her domestic ambush is fully organized ahead of time.",
            },
          ],
        },
        {
          id: "a2_s2_c23",
          speaker: "Alice Ford",
          stageDirection: "torna a gridare dall'uscio verso l'esterno",
          stageDirectionTranslation: "shouts again from the doorway toward the outside",
          lines: [
            {
              id: "a2_s2_c23_l1",
              original: "Portate qui la cesta del bucato.",
              literal: "Bring here the laundry basket.",
              tokens: [
                {
                  word: "Portate",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "bring / carry (2nd plur. imperative)",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "cesta",
                  lemma: "cesta",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + il)",
                },
                {
                  word: "bucato",
                  lemma: "bucato",
                  pos: "noun",
                  meaning: "laundry / washing",
                },
              ],
              grammarNote: "Alice orders the arrival of the central prop of the scene: the great dirty laundry basket ('la cesta del bucato').",
            },
          ],
        },
        {
          id: "a2_s2_c24",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c24_l1",
              original: "Sarà un affare gaio!",
              literal: "It will be a merry affair!",
              tokens: [
                {
                  word: "Sarà",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "it will be (3rd sing. future)",
                },
                {
                  word: "affare",
                  lemma: "affare",
                  pos: "noun",
                  meaning: "affair / business / matter",
                },
                {
                  word: "gaio",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "merry / cheerful / gay",
                },
              ],
              grammarNote: "Quickly chuckles at the mounting domestic chaos and the impending humiliation of Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c25",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c25_l1",
              original: "Nannetta, e tu non ridi? Che cos'hai?",
              literal: "Nannetta, and you do not laugh? What is the matter with you?",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper noun)",
                },
                {
                  word: "ridi",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "you laugh (2nd sing. present)",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "cos'hai",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "do you have (cosa + hai; what is wrong with you?)",
                },
              ],
              grammarNote: "Alice notices her daughter looking tearful and downcast amidst the laughter, gently inquiring after her distress.",
            },
          ],
        },
        {
          id: "a2_s2_c26",
          speaker: "Alice Ford",
          stageDirection: "avvicinandosi a Nannetta ed accarezzandola",
          stageDirectionTranslation: "approaching Nannetta and caressing her",
          lines: [
            {
              id: "a2_s2_c26_l1",
              original: "Tu piangi? Che cos'hai? Dillo a tua madre.",
              literal: "You are weeping? What is the matter with you? Tell it to your mother.",
              tokens: [
                {
                  word: "piangi",
                  lemma: "piangere",
                  pos: "verb",
                  meaning: "you weep / cry (2nd sing. present)",
                },
                {
                  word: "Dillo",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell it (imperative di' + clitic lo)",
                },
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "madre",
                  lemma: "madre",
                  pos: "noun",
                  meaning: "mother",
                },
              ],
              grammarNote: "Alice comforts Nannetta; 'Dillo' combines the truncated imperative 'di'' with clitic direct object 'lo' via syntactic doubling.",
            },
          ],
        },
        {
          id: "a2_s2_c27",
          speaker: "Nannetta",
          stageDirection: "singhiozzando",
          stageDirectionTranslation: "sobbing",
          lines: [
            {
              id: "a2_s2_c27_l1",
              original: "Mio padre...",
              literal: "My father...",
              tokens: [
                {
                  word: "Mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "padre",
                  lemma: "padre",
                  pos: "noun",
                  meaning: "father",
                },
              ],
              grammarNote: "Nannetta falters, hesitating before announcing Ford's autocratic command.",
            },
          ],
        },
        {
          id: "a2_s2_c28",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c28_l1",
              original: "Ebben?",
              literal: "Well?",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well? / well then? (apocope of ebbene)",
                },
                {
                  word: "ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well / well then",
                },
              ],
              grammarNote: "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c29",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c29_l1",
              original: "Mio padre...",
              literal: "My father...",
              tokens: [
                {
                  word: "Mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "padre",
                  lemma: "padre",
                  pos: "noun",
                  meaning: "father",
                },
              ],
              grammarNote: "Nannetta falters, hesitating before announcing Ford's autocratic command.",
            },
          ],
        },
        {
          id: "a2_s2_c30",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c30_l1",
              original: "Ebben?",
              literal: "Well?",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well? / well then? (apocope of ebbene)",
                },
                {
                  word: "ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well / well then",
                },
              ],
              grammarNote: "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c31",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c31_l1",
              original: "Mio padre...",
              literal: "My father...",
              tokens: [
                {
                  word: "Mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "padre",
                  lemma: "padre",
                  pos: "noun",
                  meaning: "father",
                },
              ],
              grammarNote: "Nannetta falters, hesitating before announcing Ford's autocratic command.",
            },
          ],
        },
        {
          id: "a2_s2_c32",
          speaker: "Nannetta",
          stageDirection: "scoppiando in lacrime",
          stageDirectionTranslation: "bursting into tears",
          lines: [
            {
              id: "a2_s2_c32_l1",
              original: "vuole ch'io mi mariti al Dottor Cajo!",
              literal: "wants me to marry Doctor Caius!",
              tokens: [
                {
                  word: "vuole",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "he wants / wishes (3rd sing. present)",
                },
                {
                  word: "ch'io",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that I (che + io)",
                },
                {
                  word: "mi mariti",
                  lemma: "maritarsi",
                  pos: "verb",
                  meaning: "I marry (1st sing. present subjunctive)",
                },
                {
                  word: "Dottor",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Doctor (apocope of dottore)",
                },
                {
                  word: "Cajo",
                  lemma: "Cajo",
                  pos: "noun",
                  meaning: "Caius (proper noun)",
                },
              ],
              grammarNote: "Nannetta uses the subjunctive 'mi mariti' after 'vuole che', revealing Ford's patriarchal decree that she marry Dr. Caius.",
            },
          ],
        },
        {
          id: "a2_s2_c33",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c33_l1",
              original: "A quel pedante?",
              literal: "To that pedant?",
              tokens: [
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "pedante",
                  lemma: "pedante",
                  pos: "noun",
                  meaning: "pedant / bookworm",
                },
              ],
              grammarNote: "Alice immediately rejects the notion, mocking Caius's tedious scholarly pretensions.",
            },
          ],
        },
        {
          id: "a2_s2_c34",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c34_l1",
              original: "Oibò!",
              literal: "Nonsense!",
              tokens: [
                {
                  word: "Oibò",
                  lemma: "oibò",
                  pos: "interjection",
                  meaning: "fie! / nonsense! / out upon it!",
                },
                {
                  word: "oibò",
                  lemma: "oibò",
                  pos: "adverb",
                  meaning: "by no means / not at all / heaven forbid",
                },
              ],
              grammarNote: "Quickly's instinctive interjection expressing comical outrage and moral dismissal.",
            },
          ],
        },
        {
          id: "a2_s2_c35",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c35_l1",
              original: "A quel gonzo!",
              literal: "To that simpleton!",
              tokens: [
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "gonzo",
                  lemma: "gonzo",
                  pos: "noun",
                  meaning: "simpleton / gullible fool",
                },
              ],
              grammarNote: "Meg piles on the insults, calling Caius a gullible ninny ('gonzo').",
            },
          ],
        },
        {
          id: "a2_s2_c36",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c36_l1",
              original: "A quel grullo!",
              literal: "To that blockhead!",
              tokens: [
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "grullo",
                  lemma: "grullo",
                  pos: "noun",
                  meaning: "blockhead / fool (Tuscan colloquialism)",
                },
              ],
              grammarNote: "Alice uses the distinctively Tuscan pejorative 'grullo' to dismiss Caius's intelligence.",
            },
          ],
        },
        {
          id: "a2_s2_c37",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c37_l1",
              original: "A quel bisavolo!",
              literal: "To that great-grandfather!",
              tokens: [
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "bisavolo",
                  lemma: "bisavolo",
                  pos: "noun",
                  meaning: "great-grandfather / ancient man",
                },
              ],
              grammarNote: "Nannetta humorously exaggerates Caius's age, calling him a decrepit 'bisavolo' (great-grandfather).",
            },
          ],
        },
        {
          id: "a2_s2_c38",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c38_l1",
              original: "No! No!",
              literal: "No! No!",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no / not so",
                },
                {
                  word: "no",
                  lemma: "no",
                  pos: "particle",
                  meaning: "negative answer particle",
                },
              ],
              grammarNote: "Alice vigorously vetoes the prospective match, promising maternal intervention.",
            },
          ],
        },
        {
          id: "a2_s2_c39",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c39_l1",
              original: "No! No!",
              literal: "No! No!",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no / not so",
                },
                {
                  word: "no",
                  lemma: "no",
                  pos: "particle",
                  meaning: "negative answer particle",
                },
              ],
              grammarNote: "Alice vigorously vetoes the prospective match, promising maternal intervention.",
            },
            {
              id: "a2_s2_c39_l2",
              original: "No! No! Piuttosto lapidata viva...",
              literal: "No! No! Rather stoned alive...",
              tokens: [
                {
                  word: "Piuttosto",
                  lemma: "piuttosto",
                  pos: "adverb",
                  meaning: "rather / sooner",
                },
                {
                  word: "lapidata",
                  lemma: "lapidare",
                  pos: "verb",
                  meaning: "stoned / pelted with stones (past participle feminine singular)",
                },
                {
                  word: "viva",
                  lemma: "vivo",
                  pos: "adjective",
                  meaning: "alive (feminine singular)",
                },
              ],
              grammarNote: "Nannetta's tragic hyperbole: she would rather suffer public stoning than submit to an arranged marriage.",
            },
          ],
        },
        {
          id: "a2_s2_c40",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c40_l1",
              original: "Da una mitraglia di torsi di cavolo.",
              literal: "By a hail of cabbage stalks.",
              tokens: [
                {
                  word: "Da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "by / from",
                },
                {
                  word: "una mitraglia",
                  lemma: "mitraglia",
                  pos: "noun",
                  meaning: "a hail / grapeshot / volley",
                },
                {
                  word: "torsi",
                  lemma: "torso",
                  pos: "noun",
                  meaning: "stalks / cores / stumps (plural)",
                },
                {
                  word: "cavolo",
                  lemma: "cavolo",
                  pos: "noun",
                  meaning: "cabbage",
                },
              ],
              grammarNote: "Alice comically deflates Nannetta's operatic martyrdom by imagining missiles of kitchen cabbage stalks.",
            },
          ],
        },
        {
          id: "a2_s2_c41",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c41_l1",
              original: "Ben detto!",
              literal: "Well said!",
              tokens: [
                {
                  word: "Ben",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well (apocope of bene)",
                },
                {
                  word: "detto",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "said (past participle)",
                },
              ],
              grammarNote: "Quickly shouts her enthusiastic approval of Alice's witty dismissal of the match.",
            },
          ],
        },
        {
          id: "a2_s2_c42",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c42_l1",
              original: "Brava!",
              literal: "Brava!",
              tokens: [
                {
                  word: "Brava",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "splendid / well done / clever (feminine singular)",
                },
                {
                  word: "bravo",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "capable / good / brave",
                },
              ],
              grammarNote: "Alice cheers Quickly's diplomatic success with an appreciative feminine exclamation.",
            },
          ],
        },
        {
          id: "a2_s2_c43",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c43_l1",
              original: "Non temer.",
              literal: "Do not fear.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "temer",
                  lemma: "temere",
                  pos: "verb",
                  meaning: "to fear (apocope of temere; negative imperative 2nd sing.)",
                },
              ],
              grammarNote: "Alice reassures her daughter; in Italian, negative informal singular commands use 'non' + infinitive ('non temer').",
            },
          ],
        },
        {
          id: "a2_s2_c44",
          speaker: "Nannetta",
          stageDirection: "saltando di gioia",
          stageDirectionTranslation: "leaping for joy",
          lines: [
            {
              id: "a2_s2_c44_l1",
              original: "Evviva!",
              literal: "Hurrah!",
              tokens: [
                {
                  word: "Evviva",
                  lemma: "evviva",
                  pos: "interjection",
                  meaning: "hurrah / long live / cheers",
                },
              ],
              grammarNote: "General jubilation from all present as the conflict resolves in reconciliation.",
            },
            {
              id: "a2_s2_c44_l2",
              original: "Col Dottor Cajo non mi sposerò!",
              literal: "With Doctor Caius I will not marry!",
              tokens: [
                {
                  word: "Col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (articulated preposition con + il)",
                },
                {
                  word: "Dottor",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Doctor (apocope of dottore)",
                },
                {
                  word: "Cajo",
                  lemma: "Cajo",
                  pos: "noun",
                  meaning: "Caius (proper noun)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "mi sposerò",
                  lemma: "sposarsi",
                  pos: "verb",
                  meaning: "I will marry (reflexive 1st sing. future)",
                },
              ],
              grammarNote: "Nannetta triumphantly asserts her romantic independence in the future tense with fronted prepositional phrase 'Col Dottor Cajo'.",
            },
          ],
        },
        {
          id: "a2_s2_c45",
          speaker: "Nannetta",
          stageDirection: "intanto entrano due servi portando una cesta piena di biancheria",
          stageDirectionTranslation: "meanwhile two servants enter carrying a basket full of dirty linen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c46",
          speaker: "Alice Ford",
          stageDirection: "ai servi",
          stageDirectionTranslation: "to the servants",
          lines: [
            {
              id: "a2_s2_c46_l1",
              original: "Mettete là. Poi, quando avrò chiamato,",
              literal: "Put it there. Then, when I have called,",
              tokens: [
                {
                  word: "Mettete",
                  lemma: "mettere",
                  pos: "verb",
                  meaning: "put / place (2nd plur. imperative)",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "quando",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when",
                },
                {
                  word: "avrò chiamato",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "I will have called (future perfect 1st sing.)",
                },
              ],
              grammarNote: "Alice directs the servants setting down the laundry basket, using the future perfect ('avrò chiamato') for the cue.",
            },
            {
              id: "a2_s2_c46_l2",
              original: "vuoterete la cesta nel fossato.",
              literal: "you will empty the basket into the ditch.",
              tokens: [
                {
                  word: "vuoterete",
                  lemma: "vuotare",
                  pos: "verb",
                  meaning: "you will empty / dump (2nd plur. future)",
                },
                {
                  word: "cesta",
                  lemma: "cesta",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the / into the (articulated preposition in + il)",
                },
                {
                  word: "fossato",
                  lemma: "fossato",
                  pos: "noun",
                  meaning: "ditch / moat",
                },
              ],
              grammarNote: "Alice gives the crucial instruction to the servants: empty the laundry basket straight into the ditch.",
            },
          ],
        },
        {
          id: "a2_s2_c47",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c47_l1",
              original: "Bum!",
              literal: "Boom!",
              tokens: [
                {
                  word: "Bum",
                  lemma: "bum",
                  pos: "interjection",
                  meaning: "boom! / splash! (onomatopoeia)",
                },
                {
                  word: "fare bum",
                  lemma: "fare bum",
                  pos: "idiom",
                  meaning: "to make a boom / produce a loud splash or bang",
                },
              ],
              grammarNote: "Nannetta playfully vocalizes the massive impact of Falstaff landing in the mud.",
            },
          ],
        },
        {
          id: "a2_s2_c48",
          speaker: "Alice Ford",
          stageDirection: "a Nannetta, poi ai servi che escono",
          stageDirectionTranslation: "to Nannetta, then to the servants who exit",
          lines: [
            {
              id: "a2_s2_c48_l1",
              original: "Taci. ~ Andate.",
              literal: "Hush. ~ Go.",
              tokens: [
                {
                  word: "Taci",
                  lemma: "tacere",
                  pos: "verb",
                  meaning: "hush / be silent (2nd sing. imperative)",
                },
                {
                  word: "Andate",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go / be off (2nd plur. imperative)",
                },
              ],
              grammarNote: "Alice shushes Nannetta before the servants catch on, then dismisses the men briskly with 'Andate'.",
            },
          ],
        },
        {
          id: "a2_s2_c49",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c49_l1",
              original: "Che bombardamento!",
              literal: "What a bombardment!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative)",
                },
                {
                  word: "bombardamento",
                  lemma: "bombardamento",
                  pos: "noun",
                  meaning: "bombardment / cannonade",
                },
              ],
              grammarNote: "Nannetta gleefully compares Falstaff's impending splash into the Thames ditch to an explosive artillery barrage.",
            },
          ],
        },
        {
          id: "a2_s2_c50",
          speaker: "Alice Ford",
          stageDirection: "corre a pigliare una sedia e la mette presso al tavolo",
          stageDirectionTranslation: "she runs to fetch a chair and places it by the table",
          lines: [
            {
              id: "a2_s2_c50_l1",
              original: "Prepariamo la scena. Qua una sedia.",
              literal: "Let us prepare the scene. Here a chair.",
              tokens: [
                {
                  word: "Prepariamo",
                  lemma: "preparare",
                  pos: "verb",
                  meaning: "let us prepare (1st plur. present/imperative)",
                },
                {
                  word: "scena",
                  lemma: "scena",
                  pos: "noun",
                  meaning: "scene / stage",
                },
                {
                  word: "Qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "sedia",
                  lemma: "sedia",
                  pos: "noun",
                  meaning: "chair",
                },
              ],
              grammarNote: "Alice takes charge of stage-managing the room, treating the seduction trap as a scripted comedic production.",
            },
          ],
        },
        {
          id: "a2_s2_c51",
          speaker: "Nannetta",
          stageDirection: "corre a pigliare il liuto e lo mette sulla tavola",
          stageDirectionTranslation: "she runs to fetch the lute and places it on the table",
          lines: [
            {
              id: "a2_s2_c51_l1",
              original: "Qua il mio liuto.",
              literal: "Here my lute.",
              tokens: [
                {
                  word: "Qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "liuto",
                  lemma: "liuto",
                  pos: "noun",
                  meaning: "lute",
                },
              ],
              grammarNote: "Nannetta places her lute within reach for Alice's mock-serenade.",
            },
          ],
        },
        {
          id: "a2_s2_c52",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c52_l1",
              original: "Apriamo il paravento.",
              literal: "Let us open the screen.",
              tokens: [
                {
                  word: "Apriamo",
                  lemma: "aprire",
                  pos: "verb",
                  meaning: "let us open / unfold (1st plur. present/imperative)",
                },
                {
                  word: "il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "folding screen / draft screen",
                },
              ],
              grammarNote: "Alice positions the folding screen, a staple prop of farcical intrigue that will conceal Fenton and Nannetta.",
            },
          ],
        },
        {
          id: "a2_s2_c53",
          speaker: "Alice Ford",
          stageDirection: "Nannetta e Meg corrono a prendere il paravento, lo aprono dopo averlo collocato fra la cesta e il camino",
          stageDirectionTranslation: "Nannetta and Meg run to get the screen, opening it after placing it between the basket and the fireplace",
          lines: [
          ],
        },
        {
          id: "a2_s2_c54",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c54_l1",
              original: "Bravissime! Così. Più aperto ancora.",
              literal: "Splendid, ladies! Like that. More open still.",
              tokens: [
                {
                  word: "Bravissime",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "splendid / excellent (feminine plural superlative)",
                },
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "like that / thus / so",
                },
                {
                  word: "aperto",
                  lemma: "aperto",
                  pos: "adjective",
                  meaning: "open",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / more / yet",
                },
              ],
              grammarNote: "Alice commends her companions' efficiency with the feminine superlative 'bravissime' while fine-tuning the concealment.",
            },
            {
              id: "a2_s2_c54_l2",
              original: "Fra poco s'incomincia la commedia.",
              literal: "Shortly the comedy begins.",
              tokens: [
                {
                  word: "Fra poco",
                  lemma: "fra poco",
                  pos: "idiom",
                  meaning: "shortly / soon / before long",
                },
                {
                  word: "s'incomincia",
                  lemma: "incominciarsi",
                  pos: "verb",
                  meaning: "begins / is begun (impersonal/passive si incomincia)",
                },
                {
                  word: "commedia",
                  lemma: "commedia",
                  pos: "noun",
                  meaning: "comedy / play",
                },
              ],
              grammarNote: "Alice meta-theatrically announces the commencement of their theatrical farce.",
            },
          ],
        },
        {
          id: "a2_s2_c55",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c55_l1",
              original: "Gaie comari di Windsor! è l'ora!",
              literal: "Merry wives of Windsor! it is time!",
              tokens: [
                {
                  word: "Gaie",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "merry / cheerful (feminine plural)",
                },
                {
                  word: "comari",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "wives / gossips (plural)",
                },
                {
                  word: "Windsor",
                  lemma: "Windsor",
                  pos: "noun",
                  meaning: "Windsor (proper noun)",
                },
                {
                  word: "è l'ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "it is the hour / the time has come",
                },
              ],
              grammarNote: "Alice quotes the Italian title of Shakespeare's play (*The Merry Wives of Windsor*), rallying her troupe.",
            },
            {
              id: "a2_s2_c55_l2",
              original: "L'ora di alzar la risata sonora!",
              literal: "The hour to raise the resonant laughter!",
              tokens: [
                {
                  word: "L'ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "the hour / time",
                },
                {
                  word: "alzar",
                  lemma: "alzare",
                  pos: "verb",
                  meaning: "to raise / strike up (apocope of alzare)",
                },
                {
                  word: "risata",
                  lemma: "risata",
                  pos: "noun",
                  meaning: "laughter / burst of laughter",
                },
                {
                  word: "sonora",
                  lemma: "sonoro",
                  pos: "adjective",
                  meaning: "sonorous / ringing / resonant",
                },
              ],
              grammarNote: "Alice's sparkling aria celebrates shared female laughter as a triumphant and cleansing musical force.",
            },
            {
              id: "a2_s2_c55_l3",
              original: "L'alta risata che scoppia, che scherza,",
              literal: "The loud laughter that bursts, that teases,",
              tokens: [
                {
                  word: "alta",
                  lemma: "alto",
                  pos: "adjective",
                  meaning: "loud / ringing / high",
                },
                {
                  word: "risata",
                  lemma: "risata",
                  pos: "noun",
                  meaning: "laughter",
                },
                {
                  word: "scoppia",
                  lemma: "scoppiare",
                  pos: "verb",
                  meaning: "bursts out / explodes (3rd sing. present)",
                },
                {
                  word: "scherza",
                  lemma: "scherzare",
                  pos: "verb",
                  meaning: "jokes / teases / plays (3rd sing. present)",
                },
              ],
              grammarNote: "The verbs 'scoppia' and 'scherza' capture the sudden, bubbling energy of collective laughter.",
            },
            {
              id: "a2_s2_c55_l4",
              original: "che sfolgora, armata",
              literal: "that blazes, armed",
              tokens: [
                {
                  word: "sfolgora",
                  lemma: "sfolgorare",
                  pos: "verb",
                  meaning: "flashes / blazes / shines radiantly (3rd sing. present)",
                },
                {
                  word: "armata",
                  lemma: "armare",
                  pos: "verb",
                  meaning: "armed (past participle feminine singular)",
                },
              ],
              grammarNote: "Alice personifies laughter as a radiant, armed warrior fighting against male vanity.",
            },
            {
              id: "a2_s2_c55_l5",
              original: "di dardi e di sferza!",
              literal: "with arrows and with scourge!",
              tokens: [
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "with / of",
                },
                {
                  word: "dardi",
                  lemma: "dardo",
                  pos: "noun",
                  meaning: "darts / arrows (plural)",
                },
                {
                  word: "sferza",
                  lemma: "sferza",
                  pos: "noun",
                  meaning: "whip / scourge / lash",
                },
              ],
              grammarNote: "Laughter is metaphorically armed with piercing darts ('dardi') and chastising whips ('sferza') of satire.",
            },
            {
              id: "a2_s2_c55_l6",
              original: "Gaie comari, festosa brigata!",
              literal: "Merry wives, festive company!",
              tokens: [
                {
                  word: "Gaie",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "merry / cheerful (feminine plural)",
                },
                {
                  word: "comari",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "wives / gossips",
                },
                {
                  word: "festosa",
                  lemma: "festoso",
                  pos: "adjective",
                  meaning: "festive / joyous",
                },
                {
                  word: "brigata",
                  lemma: "brigata",
                  pos: "noun",
                  meaning: "brigade / company / troop",
                },
              ],
              grammarNote: "Alice toasts her fellow women as a celebratory league ('festosa brigata').",
            },
            {
              id: "a2_s2_c55_l7",
              original: "Sul lieto viso",
              literal: "On the glad face",
              tokens: [
                {
                  word: "Sul",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on the / upon the (articulated preposition su + il)",
                },
                {
                  word: "lieto",
                  lemma: "lieto",
                  pos: "adjective",
                  meaning: "glad / happy / cheerful",
                },
                {
                  word: "viso",
                  lemma: "viso",
                  pos: "noun",
                  meaning: "face / countenance",
                },
              ],
              grammarNote: "Alice sings of open, joyous expressions in contrast to sour deception.",
            },
            {
              id: "a2_s2_c55_l8",
              original: "spunti il sorriso,",
              literal: "may the smile dawn,",
              tokens: [
                {
                  word: "spunti",
                  lemma: "spuntare",
                  pos: "verb",
                  meaning: "may it dawn / sprout / appear (3rd sing. present subjunctive)",
                },
                {
                  word: "il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
                {
                  word: "sorriso",
                  lemma: "sorriso",
                  pos: "noun",
                  meaning: "smile",
                },
              ],
              grammarNote: "Optative subjunctive ('spunti'): calling forth radiant smiles on every face.",
            },
            {
              id: "a2_s2_c55_l9",
              original: "splenda del riso",
              literal: "may shine with laughter",
              tokens: [
                {
                  word: "splenda",
                  lemma: "splendere",
                  pos: "verb",
                  meaning: "may it shine / gleam (3rd sing. present subjunctive)",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the / with (articulated preposition di + il)",
                },
                {
                  word: "riso",
                  lemma: "riso",
                  pos: "noun",
                  meaning: "laughter / mirth",
                },
              ],
              grammarNote: "Parallel subjunctive ('splenda'), invoking the luminous sparkle of laughter.",
            },
            {
              id: "a2_s2_c55_l10",
              original: "l'acuto fulgor!",
              literal: "the sharp brilliance!",
              tokens: [
                {
                  word: "acuto",
                  lemma: "acuto",
                  pos: "adjective",
                  meaning: "sharp / keen / piercing",
                },
                {
                  word: "fulgor",
                  lemma: "fulgore",
                  pos: "noun",
                  meaning: "brilliance / radiant glow (apocope of fulgore)",
                },
              ],
              grammarNote: "The subject of 'splenda': 'l'acuto fulgor' represents the incisive brilliance of female wit.",
            },
            {
              id: "a2_s2_c55_l11",
              original: "Favilla incendiaria",
              literal: "Incendiary spark",
              tokens: [
                {
                  word: "Favilla",
                  lemma: "favilla",
                  pos: "noun",
                  meaning: "spark / ember",
                },
                {
                  word: "incendiaria",
                  lemma: "incendiario",
                  pos: "adjective",
                  meaning: "incendiary / flame-bearing (feminine singular)",
                },
              ],
              grammarNote: "Laughter is envisioned as a spark ('favilla') that ignites irrepressible collective joy.",
            },
            {
              id: "a2_s2_c55_l12",
              original: "di gioia nell'aria,",
              literal: "of joy in the air,",
              tokens: [
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy / gladness",
                },
                {
                  word: "nell'aria",
                  lemma: "aria",
                  pos: "noun",
                  meaning: "in the air (articulated preposition in + l'aria)",
                },
              ],
              grammarNote: "The atmospheric spreading of their carefree happiness.",
            },
            {
              id: "a2_s2_c55_l13",
              original: "di gioia nel cor.",
              literal: "of joy in the heart.",
              tokens: [
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (articulated preposition in + il)",
                },
                {
                  word: "cor",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (poetic apocope of cuore)",
                },
              ],
              grammarNote: "Alice concludes her lyric phrase with the internal resonance of joy in the heart ('cor').",
            },
          ],
        },
        {
          id: "a2_s2_c56",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c56_l1",
              original: "A noi!",
              literal: "To work!",
              tokens: [
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "us",
                },
                {
                  word: "a noi",
                  lemma: "a noi",
                  pos: "idiom",
                  meaning: "now to us / to work / let's get down to business",
                },
              ],
              grammarNote: "Alice's brisk call to action snapping the group back from song to tactical execution.",
            },
          ],
        },
        {
          id: "a2_s2_c57",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a2_s2_c57_l1",
              original: "Tu la parte",
              literal: "You the part",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "la",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article feminine)",
                },
                {
                  word: "parte",
                  lemma: "parte",
                  pos: "noun",
                  meaning: "part / role",
                },
              ],
              grammarNote: "Alice begins assigning roles, leading directly into 'farai che ti spetta'.",
            },
            {
              id: "a2_s2_c57_l2",
              original: "farai che ti spetta.",
              literal: "will play that belongs to you.",
              tokens: [
                {
                  word: "farai",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "you will do / you will play (2nd sing. future)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which",
                },
                {
                  word: "ti spetta",
                  lemma: "spettare",
                  pos: "verb",
                  meaning: "falls to you / belongs to you (clitic ti + 3rd sing. present)",
                },
              ],
              grammarNote: "Alice insists that each woman stick strictly to her assigned theatrical cue.",
            },
          ],
        },
        {
          id: "a2_s2_c58",
          speaker: "Meg Page",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a2_s2_c58_l1",
              original: "Tu corri il tuo rischio",
              literal: "You run your risk",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "corri",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "you run / face (2nd sing. present)",
                },
                {
                  word: "correre il rischio",
                  lemma: "correre il rischio",
                  pos: "idiom",
                  meaning: "to run the risk",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "rischio",
                  lemma: "rischio",
                  pos: "noun",
                  meaning: "risk / danger",
                },
              ],
              grammarNote: "Meg notes that Alice takes on the greatest hazard by facing Falstaff alone.",
            },
            {
              id: "a2_s2_c58_l2",
              original: "col grosso compar.",
              literal: "with the fat comrade.",
              tokens: [
                {
                  word: "col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (articulated preposition con + il)",
                },
                {
                  word: "grosso",
                  lemma: "grosso",
                  pos: "adjective",
                  meaning: "fat / stout / bulky",
                },
                {
                  word: "compar",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "comrade / fellow / gossip (apocope of compare)",
                },
              ],
              grammarNote: "Meg playfully mocks Falstaff as their corpulent male counterpart ('il grosso compar').",
            },
          ],
        },
        {
          id: "a2_s2_c59",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c59_l1",
              original: "Io sto alla vedetta.",
              literal: "I stand on lookout.",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "sto",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "I stand / stay (1st sing. present)",
                },
                {
                  word: "alla vedetta",
                  lemma: "stare alla vedetta",
                  pos: "idiom",
                  meaning: "to stand watch / keep lookout",
                },
                {
                  word: "vedetta",
                  lemma: "vedetta",
                  pos: "noun",
                  meaning: "lookout / watchtower / sentinel",
                },
              ],
              grammarNote: "Quickly volunteers for the lookout post outside the door to warn of Ford's or Falstaff's movements.",
            },
          ],
        },
        {
          id: "a2_s2_c60",
          speaker: "Alice Ford",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a2_s2_c60_l1",
              original: "Se sbagli ti fischio.",
              literal: "If you err I will whistle to you.",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "sbagli",
                  lemma: "sbagliare",
                  pos: "verb",
                  meaning: "you make a mistake / err (2nd sing. present)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "to you (dative clitic)",
                },
                {
                  word: "fischio",
                  lemma: "fischiare",
                  pos: "verb",
                  meaning: "I whistle (1st sing. present)",
                },
              ],
              grammarNote: "Alice establishes a whistling audio cue in case Quickly misses her timing.",
            },
          ],
        },
        {
          id: "a2_s2_c61",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c61_l1",
              original: "Io resto in disparte",
              literal: "I stay aside",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "resto",
                  lemma: "restare",
                  pos: "verb",
                  meaning: "I stay / remain (1st sing. present)",
                },
                {
                  word: "in disparte",
                  lemma: "in disparte",
                  pos: "idiom",
                  meaning: "aside / out of sight / in the background",
                },
              ],
              grammarNote: "Nannetta promises to stay hidden out of sight ('in disparte').",
            },
            {
              id: "a2_s2_c61_l2",
              original: "sull'uscio a spiar.",
              literal: "at the doorway to spy.",
              tokens: [
                {
                  word: "sull'uscio",
                  lemma: "uscio",
                  pos: "noun",
                  meaning: "at the doorway / door (articulated preposition su + l'uscio)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "spiar",
                  lemma: "spiare",
                  pos: "verb",
                  meaning: "to spy / watch secretively (apocope of spiare)",
                },
              ],
              grammarNote: "Nannetta will keep watch by the threshold ('uscio') to track Falstaff's approach.",
            },
          ],
        },
        {
          id: "a2_s2_c62",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c62_l1",
              original: "E mostreremo all'uomo che l'allegria",
              literal: "And we will show man that merriment",
              tokens: [
                {
                  word: "mostreremo",
                  lemma: "mostrare",
                  pos: "verb",
                  meaning: "we will show / prove (1st plur. future)",
                },
                {
                  word: "all'uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "to man (articulated preposition a + l'uomo)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "l'allegria",
                  lemma: "allegria",
                  pos: "noun",
                  meaning: "merriment / cheerfulness / gaiety",
                },
              ],
              grammarNote: "Alice asserts the opera's moral thesis: female gaiety is noble and compatible with total virtue.",
            },
            {
              id: "a2_s2_c62_l2",
              original: "d'oneste donne ogni onestà comporta.",
              literal: "of virtuous women comports all virtue.",
              tokens: [
                {
                  word: "d'oneste",
                  lemma: "onesto",
                  pos: "adjective",
                  meaning: "virtuous / honorable (feminine plural)",
                },
                {
                  word: "donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / all",
                },
                {
                  word: "onestà",
                  lemma: "onestà",
                  pos: "noun",
                  meaning: "virtue / honesty / modesty",
                },
                {
                  word: "comporta",
                  lemma: "comportare",
                  pos: "verb",
                  meaning: "comports / contains / implies (3rd sing. present)",
                },
              ],
              grammarNote: "The syntactic completion of Alice's moral maxim: merry wives remain steadfastly honest and pure.",
            },
            {
              id: "a2_s2_c62_l3",
              original: "Fra le femmine quella è la più ria",
              literal: "Among women she is the most wicked",
              tokens: [
                {
                  word: "Fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "among / between",
                },
                {
                  word: "femmine",
                  lemma: "femmina",
                  pos: "noun",
                  meaning: "women / females",
                },
                {
                  word: "quella",
                  lemma: "quello",
                  pos: "pronoun",
                  meaning: "that one / she",
                },
                {
                  word: "ria",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "wicked / guilty / malicious (feminine singular)",
                },
              ],
              grammarNote: "Alice contrasts genuine merry honesty with female hypocrisy.",
            },
            {
              id: "a2_s2_c62_l4",
              original: "che fa da gattamorta.",
              literal: "who plays the demure hypocrite.",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "who / that",
                },
                {
                  word: "fa da gattamorta",
                  lemma: "fare da gattamorta",
                  pos: "idiom",
                  meaning: "to play the demure hypocrite / feign innocence / play possum",
                },
                {
                  word: "gattamorta",
                  lemma: "gattamorta",
                  pos: "noun",
                  meaning: "hypocrite / person feigning harmlessness",
                },
              ],
              grammarNote: "The colloquial idiom 'fare la gatta morta' / 'fare da gattamorta' describes women who feign meek innocence while concealing deceit.",
            },
          ],
        },
        {
          id: "a2_s2_c63",
          speaker: "Mrs. Quickly",
          stageDirection: "che sarà andata alla finestra",
          stageDirectionTranslation: "who has gone to the window",
          lines: [
            {
              id: "a2_s2_c63_l1",
              original: "Eccolo! È lui!",
              literal: "Here he is! It is he!",
              tokens: [
                {
                  word: "Eccolo",
                  lemma: "ecco",
                  pos: "adverb",
                  meaning: "here he is! (presentative ecco + clitic lo)",
                },
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is / it is (3rd sing. present)",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him",
                },
              ],
              grammarNote: "Quickly's frantic interruption breaks Alice's speech as Falstaff reaches the threshold.",
            },
          ],
        },
        {
          id: "a2_s2_c64",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c64_l1",
              original: "Dov'è?",
              literal: "Where is he?",
              tokens: [
                {
                  word: "Dov'è",
                  lemma: "dov'è",
                  pos: "adverb",
                  meaning: "where is he? (elision dove + è)",
                },
                {
                  word: "dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
              ],
              grammarNote: "Alice asks for Falstaff's exact whereabouts so they can execute their hiding maneuvers.",
            },
          ],
        },
        {
          id: "a2_s2_c65",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c65_l1",
              original: "Poco discosto.",
              literal: "A short distance away.",
              tokens: [
                {
                  word: "Poco",
                  lemma: "poco",
                  pos: "adverb",
                  meaning: "little / slightly / not very",
                },
                {
                  word: "discosto",
                  lemma: "discosto",
                  pos: "adjective",
                  meaning: "distant / away / removed",
                },
              ],
              grammarNote: "Quickly signals that Falstaff is mere paces away on the staircase.",
            },
          ],
        },
        {
          id: "a2_s2_c66",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c66_l1",
              original: "Presto.",
              literal: "Quickly.",
              tokens: [
                {
                  word: "Presto",
                  lemma: "presto",
                  pos: "adverb",
                  meaning: "quickly / fast / soon",
                },
                {
                  word: "presto",
                  lemma: "presto",
                  pos: "adjective",
                  meaning: "quick / prompt / early",
                },
              ],
              grammarNote: "Nannetta urges everyone to hurry into their designated hiding spots.",
            },
          ],
        },
        {
          id: "a2_s2_c67",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c67_l1",
              original: "A salir s'avvia.",
              literal: "He is setting out to climb.",
              tokens: [
                {
                  word: "A salir",
                  lemma: "salire",
                  pos: "verb",
                  meaning: "to climb / ascend (preposition a + apocope salir)",
                },
                {
                  word: "s'avvia",
                  lemma: "avviarsi",
                  pos: "verb",
                  meaning: "he sets off / starts his way (reflexive 3rd sing. present)",
                },
              ],
              grammarNote: "Quickly warns that Falstaff is already walking up the stairs.",
            },
          ],
        },
        {
          id: "a2_s2_c68",
          speaker: "Alice Ford",
          stageDirection: "prima a Nannetta indica l'uscio a sinistra: poi a Meg indicando l'uscio di destra",
          stageDirectionTranslation: "first points Nannetta toward the door on the left; then gestures to Meg pointing to the door on the right",
          lines: [
            {
              id: "a2_s2_c68_l1",
              original: "Tu di qua. Tu di là!",
              literal: "You this way. You that way!",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "di qua",
                  lemma: "di qua",
                  pos: "adverb",
                  meaning: "this way / over here",
                },
                {
                  word: "di là",
                  lemma: "di là",
                  pos: "adverb",
                  meaning: "that way / over there",
                },
              ],
              grammarNote: "Alice directs the women to separate hiding places on opposite sides of the room.",
            },
          ],
        },
        {
          id: "a2_s2_c69",
          speaker: "Nannetta",
          stageDirection: "esce correndo da sinistra",
          stageDirectionTranslation: "runs out from the left",
          lines: [
            {
              id: "a2_s2_c69_l1",
              original: "Al posto!",
              literal: "To your places!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "posto",
                  lemma: "posto",
                  pos: "noun",
                  meaning: "place / post / station",
                },
              ],
              grammarNote: "Nannetta's final hushed command as everyone darts into position.",
            },
          ],
        },
        {
          id: "a2_s2_c70",
          speaker: "Meg Page",
          stageDirection: "esce correndo da destra con Quickly",
          stageDirectionTranslation: "runs out from the right with Quickly",
          lines: [
            {
              id: "a2_s2_c70_l1",
              original: "Al posto!",
              literal: "To your places!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "posto",
                  lemma: "posto",
                  pos: "noun",
                  meaning: "place / post / station",
                },
              ],
              grammarNote: "Nannetta's final hushed command as everyone darts into position.",
            },
            {
              id: "a2_s2_c70_l2",
              original: "Alice sola. Poi Falstaff. Poi Quickly. Poi Meg.",
              literal: "Alice alone. Then Falstaff. Then Quickly. Then Meg.",
              tokens: [
                {
                  word: "sola",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone / solitary (feminine singular)",
                },
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / next / afterward",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper noun)",
                },
                {
                  word: "Quickly",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (proper noun)",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper noun)",
                },
              ],
              grammarNote: "Meg rapidly whispers the exact sequence of appearances for their comedic trap before slipping out of sight.",
            },
          ],
        },
        {
          id: "a2_s2_c71",
          speaker: "Meg Page",
          stageDirection: "Alice si sarà seduta accanto al tavolo, avrà preso il liuto toccando qualche accordo",
          stageDirectionTranslation: "Alice has sat down next to the table, and has taken up the lute, playing a few chords",
          lines: [
          ],
        },
        {
          id: "a2_s2_c72",
          speaker: "Sir John Falstaff",
          stageDirection: "entra con vivacità: vedendola suonare, si mette a cantarellare",
          stageDirectionTranslation: "enters briskly; seeing her play, begins to hum",
          lines: [
            {
              id: "a2_s2_c72_l1",
              original: "Alfin t'ho colto,",
              literal: "At last I have caught you,",
              tokens: [
                {
                  word: "Alfin",
                  lemma: "alfine",
                  pos: "adverb",
                  meaning: "at last / finally (apocope of alfine)",
                },
                {
                  word: "t'ho colto",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "I have caught you / plucked you (clitic ti + ho colto)",
                },
                {
                  word: "cogliere",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "to catch / seize / pluck",
                },
              ],
              grammarNote: "Falstaff enters with pompous bravado, boasting that he has trapped his prize ('t'ho colto').",
            },
            {
              id: "a2_s2_c72_l2",
              original: "raggiante fior,",
              literal: "radiant flower,",
              tokens: [
                {
                  word: "raggiante",
                  lemma: "raggiante",
                  pos: "adjective",
                  meaning: "radiant / beaming / glowing",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower (poetic apocope of fiore)",
                },
              ],
              grammarNote: "Sir John flatters Alice with chivalric floral metaphors ('raggiante fior').",
            },
            {
              id: "a2_s2_c72_l3",
              original: "t'ho colto!",
              literal: "I have caught you!",
              tokens: [
                {
                  word: "t'ho colto",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "I have caught you (clitic ti + ho colto)",
                },
                {
                  word: "cogliere",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "to catch / pluck / seize",
                },
              ],
              grammarNote: "Falstaff repeats his boastful conquest exclamation with triumphant relish.",
            },
          ],
        },
        {
          id: "a2_s2_c73",
          speaker: "Sir John Falstaff",
          stageDirection: "prende Alice pe 'l busto. Alice avrà cessato di suonare e si sarà alzata",
          stageDirectionTranslation: "takes Alice around the waist. Alice has stopped playing and stood up",
          lines: [
            {
              id: "a2_s2_c73_l1",
              original: "Ed or potrò morir felice.",
              literal: "And now I shall be able to die happy.",
              tokens: [
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocope of ora)",
                },
                {
                  word: "potrò",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "I will be able (1st sing. future)",
                },
                {
                  word: "morir",
                  lemma: "morire",
                  pos: "verb",
                  meaning: "to die (apocope of morire)",
                },
                {
                  word: "felice",
                  lemma: "felice",
                  pos: "adjective",
                  meaning: "happy / blessed",
                },
              ],
              grammarNote: "Falstaff comically employs high-flown romantic melodrama ('potrò morir felice') to seduce Alice.",
            },
            {
              id: "a2_s2_c73_l2",
              original: "Avrò vissuto molto",
              literal: "I will have lived much",
              tokens: [
                {
                  word: "Avrò vissuto",
                  lemma: "vivere",
                  pos: "verb",
                  meaning: "I will have lived (future perfect 1st sing.)",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "much / long / greatly",
                },
              ],
              grammarNote: "Falstaff claims that this romantic conquest validates his entire existence.",
            },
            {
              id: "a2_s2_c73_l3",
              original: "dopo quest'ora di beato amor.",
              literal: "after this hour of blessed love.",
              tokens: [
                {
                  word: "dopo",
                  lemma: "dopo",
                  pos: "preposition",
                  meaning: "after",
                },
                {
                  word: "quest'ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "this hour (elision of questa ora)",
                },
                {
                  word: "beato",
                  lemma: "beato",
                  pos: "adjective",
                  meaning: "blessed / blissful",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (poetic apocope of amore)",
                },
              ],
              grammarNote: "Falstaff concludes his grand entrance period with poetic apocope 'amor', imagining celestial bliss.",
            },
          ],
        },
        {
          id: "a2_s2_c74",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c74_l1",
              original: "O soave sir John!",
              literal: "O gentle Sir John!",
              tokens: [
                {
                  word: "O",
                  lemma: "o",
                  pos: "interjection",
                  meaning: "oh / O (vocative interjection)",
                },
                {
                  word: "soave",
                  lemma: "soave",
                  pos: "adjective",
                  meaning: "gentle / sweet / suave",
                },
                {
                  word: "sir",
                  lemma: "sir",
                  pos: "noun",
                  meaning: "Sir (English title)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper noun)",
                },
              ],
              grammarNote: "Alice feigns swooning modesty ('soave sir John') to entice Falstaff deeper into his own conceit.",
            },
          ],
        },
        {
          id: "a2_s2_c75",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c75_l1",
              original: "Mia bella Alice!",
              literal: "My beautiful Alice!",
              tokens: [
                {
                  word: "Mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective feminine singular)",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / lovely / fair",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper noun)",
                },
              ],
              grammarNote: "Falstaff preens with lordly intimacy, addressing Alice as his prize.",
            },
            {
              id: "a2_s2_c75_l2",
              original: "Non so far lo svenevole,",
              literal: "I do not know how to play the languishing gallant,",
              tokens: [
                {
                  word: "so",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "I know / know how to (1st sing. present)",
                },
                {
                  word: "far",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to do / make (apocope of fare)",
                },
                {
                  word: "fare lo svenevole",
                  lemma: "fare lo svenevole",
                  pos: "idiom",
                  meaning: "to play the affected gallant / act the swooning lover",
                },
                {
                  word: "svenevole",
                  lemma: "svenevole",
                  pos: "adjective",
                  meaning: "languishing / affected / mawkish",
                },
              ],
              grammarNote: "Falstaff ironically boasts that he is no effeminate, affected gallant ('non so far lo svenevole').",
            },
            {
              id: "a2_s2_c75_l3",
              original: "né lusingar, né usar frase fiorita,",
              literal: "nor flatter, nor use flowery phrase,",
              tokens: [
                {
                  word: "né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "nor / neither",
                },
                {
                  word: "lusingar",
                  lemma: "lusingare",
                  pos: "verb",
                  meaning: "to flatter (apocope of lusingare)",
                },
                {
                  word: "usar",
                  lemma: "usare",
                  pos: "verb",
                  meaning: "to use (apocope of usare)",
                },
                {
                  word: "frase",
                  lemma: "frase",
                  pos: "noun",
                  meaning: "phrase / speech",
                },
                {
                  word: "fiorita",
                  lemma: "fiorito",
                  pos: "adjective",
                  meaning: "flowery / ornate",
                },
              ],
              grammarNote: "Falstaff claims to disdain ornate flattery even as he speaks in exquisitely rhymed, flowery hendecasyllables.",
            },
            {
              id: "a2_s2_c75_l4",
              original: "ma dirò tosto un mio pensier colpevole.",
              literal: "but I shall speak right away a guilty thought of mine.",
              tokens: [
                {
                  word: "ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "dirò",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "I will say / speak (1st sing. future)",
                },
                {
                  word: "tosto",
                  lemma: "tosto",
                  pos: "adverb",
                  meaning: "soon / quickly / right away",
                },
                {
                  word: "pensier",
                  lemma: "pensiero",
                  pos: "noun",
                  meaning: "thought / idea (apocope of pensiero)",
                },
                {
                  word: "colpevole",
                  lemma: "colpevole",
                  pos: "adjective",
                  meaning: "guilty / sinful",
                },
              ],
              grammarNote: "Falstaff flirtatiously hints at a wicked confession ('pensier colpevole')—his wish that Ford were dead.",
            },
          ],
        },
        {
          id: "a2_s2_c76",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c76_l1",
              original: "Cioè?",
              literal: "Namely?",
              tokens: [
                {
                  word: "Cioè",
                  lemma: "cioè",
                  pos: "conjunction",
                  meaning: "that is to say / namely / meaning?",
                },
                {
                  word: "vale a dire",
                  lemma: "vale a dire",
                  pos: "idiom",
                  meaning: "that is to say / in other words",
                },
              ],
              grammarNote: "Alice feigns innocent curiosity, playing along to prompt Falstaff to utter his scandalous fantasy.",
            },
          ],
        },
        {
          id: "a2_s2_c77",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c77_l1",
              original: "Cioè: vorrei che mastro Ford",
              literal: "That is to say: I would wish that Master Ford",
              tokens: [
                {
                  word: "Cioè",
                  lemma: "cioè",
                  pos: "conjunction",
                  meaning: "that is to say / namely",
                },
                {
                  word: "vorrei",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I would wish / I would like (1st sing. conditional)",
                },
                {
                  word: "mastro",
                  lemma: "mastro",
                  pos: "noun",
                  meaning: "master / craftsman (archaic title)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
              ],
              grammarNote: "Falstaff clarifies his brazen fantasy: he wishes Alice's husband Master Ford were dead so that he could make her his titled wife.",
            },
            {
              id: "a2_s2_c77_l2",
              original: "passasse a miglior vita...",
              literal: "might pass to a better life...",
              tokens: [
                {
                  word: "passasse",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "might pass / should pass (3rd sing. imperfect subjunctive)",
                },
                {
                  word: "miglior",
                  lemma: "migliore",
                  pos: "adjective",
                  meaning: "better (apocopic form of migliore)",
                },
                {
                  word: "vita",
                  lemma: "vita",
                  pos: "noun",
                  meaning: "life",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
              ],
              grammarNote: "'Passare a miglior vita' is a classic Italian euphemism for dying ('to pass to a better life'). The imperfect subjunctive 'passasse' is governed by 'vorrei che'.",
            },
          ],
        },
        {
          id: "a2_s2_c78",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c78_l1",
              original: "Perché?",
              literal: "Why?",
              tokens: [
                {
                  word: "Perché",
                  lemma: "perché",
                  pos: "adverb",
                  meaning: "why / for what reason (interrogative)",
                },
                {
                  word: "perché",
                  lemma: "perché",
                  pos: "conjunction",
                  meaning: "because / why",
                },
              ],
              grammarNote: "Alice feigns innocent incomprehension with a blunt, one-word question, leading Falstaff further into his boastful trap.",
            },
          ],
        },
        {
          id: "a2_s2_c79",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c79_l1",
              original: "Perché? Lo chiedi?",
              literal: "Why? Do you ask it?",
              tokens: [
                {
                  word: "Perché",
                  lemma: "perché",
                  pos: "adverb",
                  meaning: "why / for what reason",
                },
                {
                  word: "chiedi",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "you ask (2nd sing. present)",
                },
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it (direct object clitic)",
                },
              ],
              grammarNote: "Falstaff feigns incredulity that Alice should even ask why he wishes her husband were out of the way. Clitic 'lo' represents the proposition.",
            },
            {
              id: "a2_s2_c79_l2",
              original: "Saresti la mia lady",
              literal: "You would be my lady",
              tokens: [
                {
                  word: "Saresti",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you would be (2nd sing. conditional)",
                },
                {
                  word: "la mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (feminine possessive)",
                },
                {
                  word: "lady",
                  lemma: "lady",
                  pos: "noun",
                  meaning: "lady / noblewoman (English title)",
                },
              ],
              grammarNote: "Falstaff tempts the bourgeois Alice with social elevation: as the wife of a knight, she would bear the aristocratic title of 'lady'.",
            },
            {
              id: "a2_s2_c79_l3",
              original: "e Falstaff il tuo lord!",
              literal: "and Falstaff your lord!",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
                {
                  word: "il tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (masculine possessive)",
                },
                {
                  word: "lord",
                  lemma: "lord",
                  pos: "noun",
                  meaning: "lord / nobleman (English title)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Falstaff pairs 'lady' and 'lord' in English aristocratic terminology, grandly presenting himself as her noble partner.",
            },
          ],
        },
        {
          id: "a2_s2_c80",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c80_l1",
              original: "Povera lady inver!",
              literal: "A poor lady in truth!",
              tokens: [
                {
                  word: "Povera",
                  lemma: "povero",
                  pos: "adjective",
                  meaning: "poor / wretched / humble",
                },
                {
                  word: "lady",
                  lemma: "lady",
                  pos: "noun",
                  meaning: "lady / noblewoman",
                },
                {
                  word: "inver",
                  lemma: "invero",
                  pos: "adverb",
                  meaning: "in truth / indeed (apocopic form of invero)",
                },
              ],
              grammarNote: "Alice counters with mock-modest irony: 'inver' (apocope of 'invero') punctures Falstaff's pomposity.",
            },
          ],
        },
        {
          id: "a2_s2_c81",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c81_l1",
              original: "Degna d'un re.",
              literal: "Worthy of a king.",
              tokens: [
                {
                  word: "Degna",
                  lemma: "degno",
                  pos: "adjective",
                  meaning: "worthy / deserving",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of a (di + un)",
                },
                {
                  word: "re",
                  lemma: "re",
                  pos: "noun",
                  meaning: "king / monarch",
                },
              ],
              grammarNote: "Falstaff escalates his extravagant courtly flattery, elevating Alice from a lord's lady to someone fit for royalty itself.",
            },
          ],
        },
        {
          id: "a2_s2_c82",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c82_l1",
              original: "T'immagino fregiata del mio stemma,",
              literal: "I imagine you adorned with my coat of arms,",
              tokens: [
                {
                  word: "T'immagino",
                  lemma: "immaginare",
                  pos: "verb",
                  meaning: "I imagine you (ti + immagino)",
                },
                {
                  word: "fregiata",
                  lemma: "fregiare",
                  pos: "adjective",
                  meaning: "adorned / decorated (past participle)",
                },
                {
                  word: "stemma",
                  lemma: "stemma",
                  pos: "noun",
                  meaning: "coat of arms / crest / heraldic emblem",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "with the / of the (di + il)",
                },
              ],
              grammarNote: "Falstaff imagines Alice decorated with his knightly crest ('stemma'), continuing his aristocratic seduction rhetoric.",
            },
            {
              id: "a2_s2_c82_l2",
              original: "mostrar fra gemma e gemma",
              literal: "displaying between gem and gem",
              tokens: [
                {
                  word: "mostrar",
                  lemma: "mostrare",
                  pos: "verb",
                  meaning: "to show / display (apocopic infinitive)",
                },
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "between / among",
                },
                {
                  word: "gemma",
                  lemma: "gemma",
                  pos: "noun",
                  meaning: "gem / jewel / precious stone",
                },
              ],
              grammarNote: "Apocopic infinitive 'mostrar' governed by 't'immagino': Falstaff envisions Alice displaying her bosom framed by radiant gemstones.",
            },
            {
              id: "a2_s2_c82_l3",
              original: "la pompa del tuo sen.",
              literal: "the splendor of your breast.",
              tokens: [
                {
                  word: "pompa",
                  lemma: "pompa",
                  pos: "noun",
                  meaning: "splendor / pomp / magnificence",
                },
                {
                  word: "sen",
                  lemma: "seno",
                  pos: "noun",
                  meaning: "breast / bosom (apocopic form of seno)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive)",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + il)",
                },
              ],
              grammarNote: "'Sen' is poetic apocope for 'seno'. Falstaff blends sensual admiration with courtly grandeur ('pompa').",
            },
            {
              id: "a2_s2_c82_l4",
              original: "Nell'iri ardente e mobile dei rai",
              literal: "In the fiery and shimmering rainbow of rays",
              tokens: [
                {
                  word: "Nell'iri",
                  lemma: "iri",
                  pos: "noun",
                  meaning: "in the iris / rainbow (in + l' + iri, poetic for iride)",
                },
                {
                  word: "ardente",
                  lemma: "ardente",
                  pos: "adjective",
                  meaning: "fiery / burning / glowing",
                },
                {
                  word: "mobile",
                  lemma: "mobile",
                  pos: "adjective",
                  meaning: "shimmering / mobile / shifting",
                },
                {
                  word: "rai",
                  lemma: "radio",
                  pos: "noun",
                  meaning: "rays / beams of light (archaic/poetic plural)",
                },
              ],
              grammarNote: "Elevated poetic diction by Boito: 'iri' (rainbow/prismatic refraction, classical for iride) and 'rai' (poetic plural of raggio), describing diamond brilliance.",
            },
            {
              id: "a2_s2_c82_l5",
              original: "dell'adamante,",
              literal: "of the diamond,",
              tokens: [
                {
                  word: "dell'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + l')",
                },
                {
                  word: "adamante",
                  lemma: "adamante",
                  pos: "noun",
                  meaning: "diamond / adamant (classical poetic term)",
                },
              ],
              grammarNote: "'Adamante' is classical poetic Italian for diamond (from Greek adamas), elevating Falstaff's courtly imagery to epic heights.",
            },
            {
              id: "a2_s2_c82_l6",
              original: "col picciol piè nel nobile",
              literal: "with the tiny foot in the noble",
              tokens: [
                {
                  word: "col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (con + il)",
                },
                {
                  word: "picciol",
                  lemma: "picciolo",
                  pos: "adjective",
                  meaning: "small / tiny (archaic apocope of piccolo)",
                },
                {
                  word: "piè",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "foot (poetic apocope of piede)",
                },
                {
                  word: "nobile",
                  lemma: "nobile",
                  pos: "adjective",
                  meaning: "noble / aristocratic",
                },
              ],
              grammarNote: "Poetic apocopes 'picciol' and 'piè'. Falstaff evokes Renaissance lyric tropes of feminine delicacy.",
            },
            {
              id: "a2_s2_c82_l7",
              original: "cerchio d'un guardinfante",
              literal: "circle of a farthingale",
              tokens: [
                {
                  word: "cerchio",
                  lemma: "cerchio",
                  pos: "noun",
                  meaning: "circle / hoop / ring",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of a (di + un)",
                },
                {
                  word: "guardinfante",
                  lemma: "guardinfante",
                  pos: "noun",
                  meaning: "farthingale / hoop skirt",
                },
              ],
              grammarNote: "A 'guardinfante' (farthingale) was an Elizabethan hooped petticoat worn by aristocratic ladies to support wide skirts.",
            },
            {
              id: "a2_s2_c82_l8",
              original: "risplenderai!",
              literal: "you shall shine!",
              tokens: [
                {
                  word: "risplenderai",
                  lemma: "risplendere",
                  pos: "verb",
                  meaning: "you shall shine / glitter (2nd sing. future)",
                },
                {
                  word: "risplendere",
                  lemma: "risplendere",
                  pos: "verb",
                  meaning: "to shine / radiate / glitter",
                },
              ],
              grammarNote: "The 2nd person future 'risplenderai' resolves Falstaff's sweeping period ('Nell'iri ardente... col picciol piè... risplenderai!').",
            },
            {
              id: "a2_s2_c82_l9",
              original: "Più fulgida d'un ampio arcobalen.",
              literal: "More dazzling than an ample rainbow.",
              tokens: [
                {
                  word: "Più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "fulgida",
                  lemma: "fulgido",
                  pos: "adjective",
                  meaning: "dazzling / radiant / brilliant",
                },
                {
                  word: "ampio",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "ample / broad / wide",
                },
                {
                  word: "arcobalen",
                  lemma: "arcobaleno",
                  pos: "noun",
                  meaning: "rainbow (apocope of arcobaleno)",
                },
              ],
              grammarNote: "'Arcobalen' uses poetic apocope for meter and rhyme with 'sen'. Falstaff rounds off his extravagant compliment comparing Alice to a shimmering rainbow.",
            },
          ],
        },
        {
          id: "a2_s2_c83",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c83_l1",
              original: "Ogni più bel gioiel mi nuoce e spregio",
              literal: "Every finest jewel harms me and I despise",
              tokens: [
                {
                  word: "gioiel",
                  lemma: "gioiello",
                  pos: "noun",
                  meaning: "jewel (apocopic form of gioiello)",
                },
                {
                  word: "nuoce",
                  lemma: "nuocere",
                  pos: "verb",
                  meaning: "harms / hurts / displeases (3rd sing. present)",
                },
                {
                  word: "spregio",
                  lemma: "spregiare",
                  pos: "verb",
                  meaning: "I despise / scorn (1st sing. present)",
                },
                {
                  word: "bel",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "fine / beautiful (apocopic form)",
                },
              ],
              grammarNote: "Alice counters Falstaff's aristocratic fantasies with a show of virtuous bourgeois modesty, asserting that opulent jewelry only encumbers her.",
            },
            {
              id: "a2_s2_c83_l2",
              original: "il finto idolo d'or.",
              literal: "the false idol of gold.",
              tokens: [
                {
                  word: "finto",
                  lemma: "finto",
                  pos: "adjective",
                  meaning: "false / artificial / pretended",
                },
                {
                  word: "idolo",
                  lemma: "idolo",
                  pos: "noun",
                  meaning: "idol",
                },
                {
                  word: "d'or",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "of gold (di + oro, apocope)",
                },
                {
                  word: "oro",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "gold",
                },
              ],
              grammarNote: "Alice scorns golden luxury as a 'finto idolo' (false idol), highlighting her deliberate contrast to Falstaff's superficial material values.",
            },
            {
              id: "a2_s2_c83_l3",
              original: "Mi basta un vel legato in croce, un fregio",
              literal: "A veil tied in a cross suffices me, an ornament",
              tokens: [
                {
                  word: "basta",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "suffices / is enough (3rd sing. present)",
                },
                {
                  word: "vel",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil / kerchief (apocope of velo)",
                },
                {
                  word: "legato",
                  lemma: "legare",
                  pos: "adjective",
                  meaning: "tied / bound (past participle)",
                },
                {
                  word: "in croce",
                  lemma: "in croce",
                  pos: "idiom",
                  meaning: "criss-crossed / crosswise / in the form of a cross",
                },
                {
                  word: "fregio",
                  lemma: "fregio",
                  pos: "noun",
                  meaning: "ornament / trim / frieze",
                },
              ],
              grammarNote: "Alice describes her simple, modest middle-class attire: a humble veil crossed over her chest ('legato in croce') instead of jewels.",
            },
            {
              id: "a2_s2_c83_l4",
              original: "al cinto e in testa un fior.",
              literal: "at the waist and on my head a flower.",
              tokens: [
                {
                  word: "cinto",
                  lemma: "cinto",
                  pos: "noun",
                  meaning: "belt / girdle / waist",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower (apocope of fiore)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at the / to the (a + il)",
                },
              ],
              grammarNote: "Alice completes her picture of rustic charm: a ribbon at her waist ('cinto') and a single flower in her hair ('un fior').",
            },
          ],
        },
        {
          id: "a2_s2_c84",
          speaker: "Alice Ford",
          stageDirection: "si mette un fiore nei capelli",
          stageDirectionTranslation: "she puts a flower in her hair",
          lines: [
          ],
        },
        {
          id: "a2_s2_c85",
          speaker: "Sir John Falstaff",
          stageDirection: "per abbracciarla",
          stageDirectionTranslation: "to embrace her",
          lines: [
            {
              id: "a2_s2_c85_l1",
              original: "Sirena!",
              literal: "Siren!",
              tokens: [
                {
                  word: "Sirena",
                  lemma: "sirena",
                  pos: "noun",
                  meaning: "siren / enchantress",
                },
                {
                  word: "sirena",
                  lemma: "sirena",
                  pos: "noun",
                  meaning: "siren (mythological seductive creature)",
                },
              ],
              grammarNote: "Falstaff cries out 'Sirena!', captivated by Alice's enchanting singing and her seductive display of simple innocence.",
            },
          ],
        },
        {
          id: "a2_s2_c86",
          speaker: "Alice Ford",
          stageDirection: "facendo un passo indietro",
          stageDirectionTranslation: "stepping back",
          lines: [
            {
              id: "a2_s2_c86_l1",
              original: "Adulator!",
              literal: "Flatterer!",
              tokens: [
                {
                  word: "Adulator",
                  lemma: "adulatore",
                  pos: "noun",
                  meaning: "flatterer (apocopic form of adulatore)",
                },
                {
                  word: "adulatore",
                  lemma: "adulatore",
                  pos: "noun",
                  meaning: "flatterer / sycophant",
                },
              ],
              grammarNote: "Alice delivers a teasing rebuff with poetic apocope: 'Adulator!' (flatterer), keeping Falstaff in playful suspense.",
            },
          ],
        },
        {
          id: "a2_s2_c87",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c87_l1",
              original: "Soli noi siamo",
              literal: "We are alone",
              tokens: [
                {
                  word: "Soli",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone / by ourselves (masculine plural)",
                },
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we (subject pronoun)",
                },
                {
                  word: "siamo",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (1st plural present)",
                },
              ],
              grammarNote: "Inverted word order ('Soli noi siamo') gives dramatic weight to their supposed privacy as Falstaff presses closer.",
            },
            {
              id: "a2_s2_c87_l2",
              original: "e non temiamo agguato.",
              literal: "and we fear no ambush.",
              tokens: [
                {
                  word: "temiamo",
                  lemma: "temere",
                  pos: "verb",
                  meaning: "we fear (1st plural present)",
                },
                {
                  word: "agguato",
                  lemma: "agguato",
                  pos: "noun",
                  meaning: "ambush / trap / snare",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Falstaff reassures Alice that they are safe from surprise—a classic moment of dramatic irony since Meg and Quickly are waiting outside.",
            },
          ],
        },
        {
          id: "a2_s2_c88",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c88_l1",
              original: "Ebben?",
              literal: "Well?",
              tokens: [
                {
                  word: "Ebben",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well? / well then? (apocope of ebbene)",
                },
                {
                  word: "ebbene",
                  lemma: "ebbene",
                  pos: "interjection",
                  meaning: "well / well then",
                },
              ],
              grammarNote: "Alice eagerly prompts Quickly for the outcome of her diplomatic mission to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c89",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c89_l1",
              original: "Io t'amo!",
              literal: "I love you!",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (emphatic subject pronoun)",
                },
                {
                  word: "t'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (ti + amo)",
                },
                {
                  word: "amare",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "to love",
                },
              ],
              grammarNote: "Falstaff makes an emphatic declaration of love with explicit subject pronoun 'Io', stepping forward boldly.",
            },
          ],
        },
        {
          id: "a2_s2_c90",
          speaker: "Alice Ford",
          stageDirection: "scostandosi un poco",
          stageDirectionTranslation: "stepping aside a little",
          lines: [
            {
              id: "a2_s2_c90_l1",
              original: "Voi siete nel peccato!",
              literal: "You are in sin!",
              tokens: [
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (formal/plural pronoun)",
                },
                {
                  word: "siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd plural present)",
                },
                {
                  word: "peccato",
                  lemma: "peccato",
                  pos: "noun",
                  meaning: "sin / transgression",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + il)",
                },
              ],
              grammarNote: "Alice checks Falstaff's advance with feigned pious reproach, reminding him of the sinfulness of seducing a married woman.",
            },
          ],
        },
        {
          id: "a2_s2_c91",
          speaker: "Sir John Falstaff",
          stageDirection: "avvicinandola",
          stageDirectionTranslation: "approaching her",
          lines: [
            {
              id: "a2_s2_c91_l1",
              original: "Sempre l'amor l'occasïone azzecca.",
              literal: "Love always seizes the opportunity.",
              tokens: [
                {
                  word: "Sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "occasïone",
                  lemma: "occasione",
                  pos: "noun",
                  meaning: "opportunity / occasion (poetic diaeresis on ï)",
                },
                {
                  word: "azzecca",
                  lemma: "azzeccare",
                  pos: "verb",
                  meaning: "hits upon / seizes / strikes right (3rd sing. present)",
                },
              ],
              grammarNote: "Boito writes 'occasïone' with a diaeresis for four poetic syllables (oc-ca-si-o-ne). 'Azzeccare' colloquially means to hit the mark or seize an opportune moment.",
            },
          ],
        },
        {
          id: "a2_s2_c92",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c92_l1",
              original: "Sir John!",
              literal: "Sir John!",
              tokens: [
                {
                  word: "Sir",
                  lemma: "sir",
                  pos: "noun",
                  meaning: "Sir (title)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John",
                },
              ],
              grammarNote: "Alice arrives pretending to be breathlessly answering his call.",
            },
          ],
        },
        {
          id: "a2_s2_c93",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c93_l1",
              original: "Chi segue vocazion non pecca.",
              literal: "Whoever follows their calling does not sin.",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who",
                },
                {
                  word: "segue",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follows (3rd sing. present)",
                },
                {
                  word: "vocazion",
                  lemma: "vocazione",
                  pos: "noun",
                  meaning: "vocation / calling (apocopic form of vocazione)",
                },
                {
                  word: "pecca",
                  lemma: "peccare",
                  pos: "verb",
                  meaning: "sins (3rd sing. present)",
                },
              ],
              grammarNote: "Boito borrows directly from Shakespeare's Henry IV Part 1: ''Tis no sin for a man to labour in his vocation.' Falstaff humorously rationalizes his lust as a divine calling.",
            },
            {
              id: "a2_s2_c93_l2",
              original: "T'amo! e non è mia colpa...",
              literal: "I love you! and it is not my fault...",
              tokens: [
                {
                  word: "T'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (ti + amo)",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive)",
                },
                {
                  word: "colpa",
                  lemma: "colpa",
                  pos: "noun",
                  meaning: "fault / guilt / blame",
                },
                {
                  word: "non è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "it is not",
                },
              ],
              grammarNote: "Falstaff pleads irresistible romantic compulsion: loving her is beyond his control, hence he is entirely blameless.",
            },
          ],
        },
        {
          id: "a2_s2_c94",
          speaker: "Alice Ford",
          stageDirection: "interrompendolo",
          stageDirectionTranslation: "interrupting him",
          lines: [
            {
              id: "a2_s2_c94_l1",
              original: "Se tanta avete vulnerabil polpa.",
              literal: "If you have such vulnerable flesh.",
              tokens: [
                {
                  word: "tanta",
                  lemma: "tanto",
                  pos: "adjective",
                  meaning: "so much / so great",
                },
                {
                  word: "avete",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "you have (2nd plural present)",
                },
                {
                  word: "vulnerabil",
                  lemma: "vulnerabile",
                  pos: "adjective",
                  meaning: "vulnerable / tender (apocope of vulnerabile)",
                },
                {
                  word: "polpa",
                  lemma: "polpa",
                  pos: "noun",
                  meaning: "flesh / bulk / pulp",
                },
              ],
              grammarNote: "Alice delivers a hilarious double-edged retort: Falstaff's flesh ('polpa') is vulnerable not just spiritually, but because there is an enormous amount of it!",
            },
          ],
        },
        {
          id: "a2_s2_c95",
          speaker: "Sir John Falstaff",
          pieceTitle: "Quand'ero paggio del Duca di Norfolk",
          lines: [
            {
              id: "a2_s2_c95_l1",
              original: "Quand'ero paggio",
              literal: "When I was a page",
              tokens: [
                {
                  word: "Quand'",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when (elision of quando)",
                },
                {
                  word: "ero",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I was (1st sing. imperfect)",
                },
                {
                  word: "paggio",
                  lemma: "paggio",
                  pos: "noun",
                  meaning: "page / pageboy",
                },
              ],
              grammarNote: "Opening of Falstaff's famous 30-second miniature arietta ('Quand'ero paggio'), one of the most celebrated moments of vocal agility and charm in late Verdi.",
            },
            {
              id: "a2_s2_c95_l2",
              original: "del duca di Norfolk ero sottile,",
              literal: "to the Duke of Norfolk I was slender,",
              tokens: [
                {
                  word: "duca",
                  lemma: "duca",
                  pos: "noun",
                  meaning: "duke",
                },
                {
                  word: "Norfolk",
                  lemma: "Norfolk",
                  pos: "noun",
                  meaning: "Norfolk (proper name)",
                },
                {
                  word: "sottile",
                  lemma: "sottile",
                  pos: "adjective",
                  meaning: "slender / slim / thin",
                },
                {
                  word: "ero",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I was (1st sing. imperfect)",
                },
              ],
              grammarNote: "Direct Shakespearean allusion to Henry IV Part 2, where Shallow recalls young Jack Falstaff serving as boy page to Thomas Mowbray, Duke of Norfolk.",
            },
            {
              id: "a2_s2_c95_l3",
              original: "ero un miraggio",
              literal: "I was a mirage",
              tokens: [
                {
                  word: "ero",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I was (1st sing. imperfect)",
                },
                {
                  word: "miraggio",
                  lemma: "miraggio",
                  pos: "noun",
                  meaning: "mirage / illusion / phantom",
                },
                {
                  word: "un",
                  lemma: "un",
                  pos: "particle",
                  meaning: "a / an (indefinite article)",
                },
              ],
              grammarNote: "Falstaff poetically characterizes his youthful, slender form as an ethereal apparition or mirage ('miraggio').",
            },
            {
              id: "a2_s2_c95_l4",
              original: "vago, leggero, gentile, gentile.",
              literal: "graceful, light, delicate, delicate.",
              tokens: [
                {
                  word: "vago",
                  lemma: "vago",
                  pos: "adjective",
                  meaning: "graceful / charming / wandering",
                },
                {
                  word: "leggero",
                  lemma: "leggero",
                  pos: "adjective",
                  meaning: "light / weightless",
                },
                {
                  word: "gentile",
                  lemma: "gentile",
                  pos: "adjective",
                  meaning: "delicate / refined / noble",
                },
              ],
              grammarNote: "Verdi sets the rapid adjectives with feather-light staccato sixteenth notes; the repetition 'gentile, gentile' conveys nostalgic delight.",
            },
            {
              id: "a2_s2_c95_l5",
              original: "Quello era il tempo del mio verde aprile,",
              literal: "That was the time of my green April,",
              tokens: [
                {
                  word: "Quello",
                  lemma: "quello",
                  pos: "pronoun",
                  meaning: "that (demonstrative pronoun)",
                },
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time / season",
                },
                {
                  word: "verde",
                  lemma: "verde",
                  pos: "adjective",
                  meaning: "green / verdant / youthful",
                },
                {
                  word: "aprile",
                  lemma: "aprile",
                  pos: "noun",
                  meaning: "April / springtime",
                },
              ],
              grammarNote: "'Verde aprile' is a classic Renaissance poetic trope symbolizing the fresh springtime of life and youthful vigor.",
            },
            {
              id: "a2_s2_c95_l6",
              original: "quello era il tempo del mio lieto maggio.",
              literal: "that was the time of my joyful May.",
              tokens: [
                {
                  word: "quello",
                  lemma: "quello",
                  pos: "pronoun",
                  meaning: "that (demonstrative pronoun)",
                },
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time / season",
                },
                {
                  word: "lieto",
                  lemma: "lieto",
                  pos: "adjective",
                  meaning: "joyful / merry / glad",
                },
                {
                  word: "maggio",
                  lemma: "maggio",
                  pos: "noun",
                  meaning: "May (month of blossom and joy)",
                },
              ],
              grammarNote: "Falstaff pairs 'verde aprile' with 'lieto maggio'. The lowercase initial in the libretto reflects the syntactic parallel with the previous line.",
            },
            {
              id: "a2_s2_c95_l7",
              original: "Tant'ero smilzo, flessibile e snello",
              literal: "I was so slim, supple and slender",
              tokens: [
                {
                  word: "Tant'",
                  lemma: "tanto",
                  pos: "adverb",
                  meaning: "so / so much (elision of tanto)",
                },
                {
                  word: "smilzo",
                  lemma: "smilzo",
                  pos: "adjective",
                  meaning: "lean / slim / slender",
                },
                {
                  word: "flessibile",
                  lemma: "flessibile",
                  pos: "adjective",
                  meaning: "supple / flexible / lithe",
                },
                {
                  word: "snello",
                  lemma: "snello",
                  pos: "adjective",
                  meaning: "slender / svelte / agile",
                },
              ],
              grammarNote: "Falstaff piles up three synonymous terms for lithe svelteness ('smilzo, flessibile e snello'), creating an irresistible comic contrast with his massive bulk.",
            },
            {
              id: "a2_s2_c95_l8",
              original: "che avrei guizzato attraverso un anello.",
              literal: "that I would have darted through a ring.",
              tokens: [
                {
                  word: "guizzato",
                  lemma: "guizzare",
                  pos: "verb",
                  meaning: "darted / slipped / flicked (past participle)",
                },
                {
                  word: "avrei",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "I would have (1st sing. conditional)",
                },
                {
                  word: "attraverso",
                  lemma: "attraverso",
                  pos: "preposition",
                  meaning: "through / across",
                },
                {
                  word: "anello",
                  lemma: "anello",
                  pos: "noun",
                  meaning: "ring / signet ring",
                },
              ],
              grammarNote: "Boito adapts Falstaff's boast from Henry IV Part 1: 'I could have crept into any alderman's thumb-ring.' 'Guizzare' evokes slipping through like an agile fish.",
            },
          ],
        },
        {
          id: "a2_s2_c96",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c96_l1",
              original: "Voi mi celiate.",
              literal: "You are teasing me.",
              tokens: [
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (formal/plural subject pronoun)",
                },
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object clitic)",
                },
                {
                  word: "celiate",
                  lemma: "celiare",
                  pos: "verb",
                  meaning: "you jest / you tease / you mock (2nd plural present)",
                },
              ],
              grammarNote: "'Celiare' means to banter or jest. Alice plays along coyly, pretending to suspect Falstaff is making fun of her.",
            },
            {
              id: "a2_s2_c96_l2",
              original: "Io temo i vostri inganni.",
              literal: "I fear your deceptions.",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (subject pronoun)",
                },
                {
                  word: "temo",
                  lemma: "temere",
                  pos: "verb",
                  meaning: "I fear (1st sing. present)",
                },
                {
                  word: "vostri",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your (possessive plural/formal)",
                },
                {
                  word: "inganni",
                  lemma: "inganno",
                  pos: "noun",
                  meaning: "deceptions / tricks / wiles",
                },
              ],
              grammarNote: "Alice feigns apprehension that Sir John is a predatory seducer whose flattering words are calculated traps.",
            },
            {
              id: "a2_s2_c96_l3",
              original: "Temo che amiate...",
              literal: "I fear that you love...",
              tokens: [
                {
                  word: "Temo",
                  lemma: "temere",
                  pos: "verb",
                  meaning: "I fear (1st sing. present)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "amiate",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "you love (2nd plural present subjunctive)",
                },
              ],
              grammarNote: "The present subjunctive 'amiate' is triggered by 'temo che'. Alice sets the trap, pausing suggestively before naming Meg.",
            },
          ],
        },
        {
          id: "a2_s2_c97",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c97_l1",
              original: "Chi?",
              literal: "Whom?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who / whom (interrogative pronoun)",
                },
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who / whom",
                },
              ],
              grammarNote: "Falstaff is startled by the unexpected suspicion of infidelity, blurting out a quick interrogative.",
            },
          ],
        },
        {
          id: "a2_s2_c98",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c98_l1",
              original: "Meg.",
              literal: "Meg.",
              tokens: [
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg Page (character)",
                },
              ],
              grammarNote: "Alice springs her trap, naming Meg Page—the very woman to whom Falstaff sent a carbon-copy love letter.",
            },
          ],
        },
        {
          id: "a2_s2_c99",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c99_l1",
              original: "Colei? M'è in uggia la sua faccia.",
              literal: "Her? Her face is repulsive to me.",
              tokens: [
                {
                  word: "Colei",
                  lemma: "colei",
                  pos: "pronoun",
                  meaning: "she / that woman (distal demonstrative, often dismissive)",
                },
                {
                  word: "in uggia",
                  lemma: "in uggia",
                  pos: "idiom",
                  meaning: "loathsome / obnoxious / tiresome",
                },
                {
                  word: "uggia",
                  lemma: "uggia",
                  pos: "noun",
                  meaning: "annoyance / disgust / tedium",
                },
                {
                  word: "faccia",
                  lemma: "faccia",
                  pos: "noun",
                  meaning: "face / countenance",
                },
              ],
              grammarNote: "'Essere in uggia a qualcuno' is a vivid idiom meaning to be intensely disagreeable or loathsome. Falstaff ruthlessly denounces Meg to flatter Alice.",
            },
          ],
        },
        {
          id: "a2_s2_c100",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c100_l1",
              original: "Non traditemi, John...",
              literal: "Do not betray me, John...",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "traditemi",
                  lemma: "tradire",
                  pos: "verb",
                  meaning: "betray me (imperative tradite + clitic mi)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
              ],
              grammarNote: "Alice drops his formal knightly title and calls him intimately 'John...', disarming his caution and inflaming his desire.",
            },
          ],
        },
        {
          id: "a2_s2_c101",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c101_l1",
              original: "Mi par mill'anni",
              literal: "It seems a thousand years to me",
              tokens: [
                {
                  word: "Mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "to me (indirect object clitic)",
                },
                {
                  word: "par",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "seems / appears (apocope of pare)",
                },
                {
                  word: "mill'anni",
                  lemma: "mille anni",
                  pos: "idiom",
                  meaning: "a thousand years (idiom for intense longing/impatience)",
                },
                {
                  word: "anni",
                  lemma: "anno",
                  pos: "noun",
                  meaning: "years",
                },
              ],
              grammarNote: "'Parere mill'anni a qualcuno' is an Italian idiom meaning to wait with unbearable longing ('I cannot wait another second').",
            },
            {
              id: "a2_s2_c101_l2",
              original: "d'averti fra le braccia.",
              literal: "to have you in my arms.",
              tokens: [
                {
                  word: "d'averti",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "to have you (di + avere + clitic ti)",
                },
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "in / between / among",
                },
                {
                  word: "braccia",
                  lemma: "braccio",
                  pos: "noun",
                  meaning: "arms (irregular feminine plural of braccio)",
                },
                {
                  word: "le",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural definite article)",
                },
              ],
              grammarNote: "'Braccia' is the irregular feminine plural of 'il braccio'. Falstaff lunges forward to sweep Alice into his embrace.",
            },
          ],
        },
        {
          id: "a2_s2_c102",
          speaker: "Sir John Falstaff",
          stageDirection: "rincorrendola e tentando di abbracciarla",
          stageDirectionTranslation: "running after her and trying to embrace her",
          lines: [
            {
              id: "a2_s2_c102_l1",
              original: "T'amo...",
              literal: "I love you...",
              tokens: [
                {
                  word: "T'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (ti + amo)",
                },
                {
                  word: "amare",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "to love",
                },
              ],
              grammarNote: "Falstaff breathes out his ardent declaration as he moves to hold Alice, right before the scheduled interruption.",
            },
          ],
        },
        {
          id: "a2_s2_c103",
          speaker: "Alice Ford",
          stageDirection: "difendendosi",
          stageDirectionTranslation: "defending himself",
          lines: [
            {
              id: "a2_s2_c103_l1",
              original: "Per carità...",
              literal: "For pity's sake...",
              tokens: [
                {
                  word: "Per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for",
                },
                {
                  word: "carità",
                  lemma: "carità",
                  pos: "noun",
                  meaning: "charity / mercy / pity",
                },
                {
                  word: "per carità",
                  lemma: "per carità",
                  pos: "idiom",
                  meaning: "for heaven's sake / for pity's sake",
                },
              ],
              grammarNote: "Idiomatic plea 'Per carità' ('For heaven's sake / Have mercy'). Alice dodges his grasp exactly as the planned disruption begins.",
            },
          ],
        },
        {
          id: "a2_s2_c104",
          speaker: "Sir John Falstaff",
          stageDirection: "la prende attraverso il busto",
          stageDirectionTranslation: "catches her around the waist",
          lines: [
            {
              id: "a2_s2_c104_l1",
              original: "Vieni!",
              literal: "Come!",
              tokens: [
                {
                  word: "Vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (2nd sing. imperative)",
                },
                {
                  word: "venire",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "to come",
                },
              ],
              grammarNote: "Imperative of 'venire': Falstaff demands her compliance just as Quickly's voice rings out.",
            },
          ],
        },
        {
          id: "a2_s2_c105",
          speaker: "Mrs. Quickly",
          stageDirection: "dall'antisala gridando",
          stageDirectionTranslation: "from the anteroom, shouting",
          lines: [
            {
              id: "a2_s2_c105_l1",
              original: "Signora Alice!",
              literal: "Mistress Alice!",
              tokens: [
                {
                  word: "Signora",
                  lemma: "signora",
                  pos: "noun",
                  meaning: "Mistress / lady",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
              ],
              grammarNote: "Quickly shouts from offstage according to the women's plot, abruptly shattering the romantic rendezvous.",
            },
          ],
        },
        {
          id: "a2_s2_c106",
          speaker: "Sir John Falstaff",
          stageDirection: "abbandona Alice e rimane turbato",
          stageDirectionTranslation: "he lets go of Alice and remains troubled",
          lines: [
            {
              id: "a2_s2_c106_l1",
              original: "Chi va là?",
              literal: "Who goes there?",
              tokens: [
                {
                  word: "Chi va là",
                  lemma: "chi va là",
                  pos: "idiom",
                  meaning: "who goes there? (sentry challenge formula)",
                },
              ],
              grammarNote: "Pistola echoes Bardolfo with the standard sentry challenge ('chi va là?'), heightening the mock-terror for Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c107",
          speaker: "Mrs. Quickly",
          stageDirection: "entrando e fingendo agitazione",
          stageDirectionTranslation: "entering and feigning agitation",
          lines: [
            {
              id: "a2_s2_c107_l1",
              original: "Signora Alice!",
              literal: "Mistress Alice!",
              tokens: [
                {
                  word: "Signora",
                  lemma: "signora",
                  pos: "noun",
                  meaning: "Mistress / lady",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
              ],
              grammarNote: "Quickly shouts from offstage according to the women's plot, abruptly shattering the romantic rendezvous.",
            },
          ],
        },
        {
          id: "a2_s2_c108",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c108_l1",
              original: "Che c'è?",
              literal: "What is it?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is / is there (elision of ci è)",
                },
              ],
              grammarNote: "Meg joins Alice in asking Quickly what news she brings from the Garter Inn.",
            },
          ],
        },
        {
          id: "a2_s2_c109",
          speaker: "Mrs. Quickly",
          stageDirection: "rapidamente interrotta dalla foga",
          stageDirectionTranslation: "swiftly cut short by the rush",
          lines: [
            {
              id: "a2_s2_c109_l1",
              original: "Mia signora!",
              literal: "My lady!",
              tokens: [
                {
                  word: "Mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (feminine possessive)",
                },
                {
                  word: "signora",
                  lemma: "signora",
                  pos: "noun",
                  meaning: "lady / mistress",
                },
              ],
              grammarNote: "Quickly rushes into the room displaying feigned breathless panic, playing her part in the staged intrusion.",
            },
            {
              id: "a2_s2_c109_l2",
              original: "C'è mistress Meg, e vuol parlarvi, sbuffa...",
              literal: "Mistress Meg is here, and she wants to speak to you, she puffs...",
              tokens: [
                {
                  word: "C'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is / here is (ci + è)",
                },
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants / wishes (apocope of vuole)",
                },
                {
                  word: "parlarvi",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "to speak to you (parlare + clitic vi)",
                },
                {
                  word: "sbuffa",
                  lemma: "sbuffare",
                  pos: "verb",
                  meaning: "she huffs / puffs / snorts (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly creates an alarming theatrical scene, describing Meg as snorting with rage ('sbuffa') outside the door.",
            },
            {
              id: "a2_s2_c109_l3",
              original: "strepita, s'abbaruffa...",
              literal: "she rants, she brawls...",
              tokens: [
                {
                  word: "strepita",
                  lemma: "strepitare",
                  pos: "verb",
                  meaning: "she clamors / rants / makes an uproar (3rd sing. present)",
                },
                {
                  word: "abbaruffa",
                  lemma: "abbaruffarsi",
                  pos: "verb",
                  meaning: "she brawls / scuffles / wrangles (3rd sing. present reflexive)",
                },
                {
                  word: "s'",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "herself (reflexive pronoun)",
                },
              ],
              grammarNote: "Quickly heaps up energetic verbs: 'strepitare' (to roar noisily) and 'abbaruffarsi' (to scuffle/brawl), terrifying Falstaff with Meg's supposed fury.",
            },
          ],
        },
        {
          id: "a2_s2_c110",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c110_l1",
              original: "Alla malora!",
              literal: "To damnation!",
              tokens: [
                {
                  word: "Alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (a + la)",
                },
                {
                  word: "malora",
                  lemma: "malora",
                  pos: "noun",
                  meaning: "ruin / damnation / curse",
                },
                {
                  word: "alla malora",
                  lemma: "alla malora",
                  pos: "idiom",
                  meaning: "to the devil / to damnation (curse)",
                },
              ],
              grammarNote: "'Alla malora!' is a common Italian oath/curse meaning 'Curse it!' or 'To the devil with it!'.",
            },
          ],
        },
        {
          id: "a2_s2_c111",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c111_l1",
              original: "E vuol passare e la trattengo a stento...",
              literal: "And she wants to enter and I can barely hold her back...",
              tokens: [
                {
                  word: "passare",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "to pass through / enter",
                },
                {
                  word: "trattengo",
                  lemma: "trattenere",
                  pos: "verb",
                  meaning: "I hold back / restrain (1st sing. present)",
                },
                {
                  word: "la",
                  lemma: "la",
                  pos: "pronoun",
                  meaning: "her (direct object clitic)",
                },
                {
                  word: "a stento",
                  lemma: "a stento",
                  pos: "idiom",
                  meaning: "barely / with difficulty / hardly",
                },
              ],
              grammarNote: "'A stento' is an adverbial idiom meaning 'barely' or 'with great difficulty'. Quickly pretends she is barely able to physically restrain Meg.",
            },
          ],
        },
        {
          id: "a2_s2_c112",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c112_l1",
              original: "Dove m'ascondo?",
              literal: "Where do I hide myself?",
              tokens: [
                {
                  word: "Dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where (interrogative)",
                },
                {
                  word: "m'ascondo",
                  lemma: "ascondersi",
                  pos: "verb",
                  meaning: "do I hide myself (mi + ascondo)",
                },
                {
                  word: "ascondersi",
                  lemma: "ascondersi",
                  pos: "verb",
                  meaning: "to hide oneself (poetic variant of nascondersi)",
                },
              ],
              grammarNote: "'Ascondersi' is the classical/literary equivalent of 'nascondersi'. Falstaff instantly panics at the thought of being caught by Meg.",
            },
          ],
        },
        {
          id: "a2_s2_c113",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c113_l1",
              original: "Dietro il paravento.",
              literal: "Behind the folding screen.",
              tokens: [
                {
                  word: "Dietro",
                  lemma: "dietro",
                  pos: "preposition",
                  meaning: "behind",
                },
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "folding screen / room divider",
                },
                {
                  word: "il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Alice points Falstaff to the folding screen ('paravento'), setting the stage for one of the greatest farcical concealment scenes in opera.",
            },
            {
              id: "a2_s2_c113_l2",
              original: "Falstaff si rimpiatta dietro il paravento. Quando Falstaff è nascosto,",
              literal: "Falstaff crouches behind the folding screen. When Falstaff is hidden,",
              tokens: [
                {
                  word: "rimpiatta",
                  lemma: "rimpiattarsi",
                  pos: "verb",
                  meaning: "crouches / conceals himself (3rd sing. present reflexive)",
                },
                {
                  word: "dietro",
                  lemma: "dietro",
                  pos: "preposition",
                  meaning: "behind",
                },
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "folding screen",
                },
                {
                  word: "nascosto",
                  lemma: "nascondere",
                  pos: "adjective",
                  meaning: "hidden (past participle)",
                },
              ],
              grammarNote: "Stage direction: 'Rimpiattarsi' comically depicts Falstaff attempting to compress his massive girth behind the narrow screen.",
            },
            {
              id: "a2_s2_c113_l3",
              original: "Quickly fa cenno a Meg che sta dietro l'uscio di destra: Meg entra",
              literal: "Quickly signals to Meg who is behind the right door: Meg enters",
              tokens: [
                {
                  word: "fa cenno",
                  lemma: "fare cenno",
                  pos: "idiom",
                  meaning: "signals / gives a sign / nods",
                },
                {
                  word: "cenno",
                  lemma: "cenno",
                  pos: "noun",
                  meaning: "signal / nod / gesture",
                },
                {
                  word: "uscio",
                  lemma: "uscio",
                  pos: "noun",
                  meaning: "door / doorway",
                },
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right",
                },
                {
                  word: "entra",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "enters (3rd sing. present)",
                },
              ],
              grammarNote: "Stage direction showing the conspiratorial stagecraft of the women: Quickly signals Meg to enter right on cue.",
            },
            {
              id: "a2_s2_c113_l4",
              original: "fingendo d'essere agitatissima. Quickly torna ad escire.",
              literal: "feigning to be extremely agitated. Quickly exits again.",
              tokens: [
                {
                  word: "fingendo",
                  lemma: "fingere",
                  pos: "verb",
                  meaning: "feigning / pretending (gerund)",
                },
                {
                  word: "agitatissima",
                  lemma: "agitato",
                  pos: "adjective",
                  meaning: "extremely agitated (absolute superlative)",
                },
                {
                  word: "torna",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "returns / turns back (3rd sing. present)",
                },
                {
                  word: "escire",
                  lemma: "escire",
                  pos: "verb",
                  meaning: "to exit / go out (archaic variant of uscire)",
                },
              ],
              grammarNote: "Stage direction: 'Escire' is the archaic form of 'uscire'. Meg enters feigning hysterical agitation ('agitatissima').",
            },
          ],
        },
        {
          id: "a2_s2_c114",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c114_l1",
              original: "Alice! che spavento!",
              literal: "Alice! what a fright!",
              tokens: [
                {
                  word: "spavento",
                  lemma: "spavento",
                  pos: "noun",
                  meaning: "fright / terror / shock",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative)",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
              ],
              grammarNote: "Meg begins her theatrical performance with loud exclamations of terror for the benefit of the concealed Falstaff.",
            },
            {
              id: "a2_s2_c114_l2",
              original: "Che chiasso! Che discordia!",
              literal: "What an uproar! What discord!",
              tokens: [
                {
                  word: "chiasso",
                  lemma: "chiasso",
                  pos: "noun",
                  meaning: "uproar / racket / noise",
                },
                {
                  word: "discordia",
                  lemma: "discordia",
                  pos: "noun",
                  meaning: "discord / strife / conflict",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative)",
                },
              ],
              grammarNote: "Meg escalates the tension with exclamatory pairings ('chiasso' and 'discordia') describing the imaginary riot outside.",
            },
            {
              id: "a2_s2_c114_l3",
              original: "Non perdere un momento,",
              literal: "Do not lose a moment,",
              tokens: [
                {
                  word: "perdere",
                  lemma: "perdere",
                  pos: "verb",
                  meaning: "to lose (infinitive in negative imperative)",
                },
                {
                  word: "momento",
                  lemma: "momento",
                  pos: "noun",
                  meaning: "moment",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
              ],
              grammarNote: "Negative imperative in the 2nd person singular: 'non' followed by the infinitive 'perdere'.",
            },
            {
              id: "a2_s2_c114_l4",
              original: "fuggi!...",
              literal: "flee!...",
              tokens: [
                {
                  word: "fuggi",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "flee / run away (2nd sing. imperative)",
                },
                {
                  word: "fuggire",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "to flee / escape",
                },
              ],
              grammarNote: "Urgent imperative of 'fuggire'. Meg orders Alice to run away, increasing the dramatic pressure on Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c115",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c115_l1",
              original: "Misericordia!",
              literal: "Mercy!",
              tokens: [
                {
                  word: "Misericordia",
                  lemma: "misericordia",
                  pos: "noun",
                  meaning: "mercy / pity / compassion",
                },
                {
                  word: "misericordia",
                  lemma: "misericordia",
                  pos: "interjection",
                  meaning: "mercy! / good heavens! (cry of alarm)",
                },
              ],
              grammarNote: "Alice acts her role in the charade, crying 'Misericordia!' with mock-pious distress.",
            },
            {
              id: "a2_s2_c115_l2",
              original: "Che avvenne?",
              literal: "What happened?",
              tokens: [
                {
                  word: "avvenne",
                  lemma: "avvenire",
                  pos: "verb",
                  meaning: "happened / occurred (3rd sing. passato remoto)",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what (interrogative pronoun)",
                },
              ],
              grammarNote: "Passato remoto of 'avvenire' ('what occurred? / what happened?'). Alice prompts Meg to deliver the alarming backstory.",
            },
          ],
        },
        {
          id: "a2_s2_c116",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c116_l1",
              original: "Il tuo consorte",
              literal: "Your husband",
              tokens: [
                {
                  word: "consorte",
                  lemma: "consorte",
                  pos: "noun",
                  meaning: "spouse / consort / husband",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive)",
                },
                {
                  word: "Il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "'Consorte' is formal literary Italian for spouse, adding mock-solemnity to Meg's report of Ford's fury.",
            },
            {
              id: "a2_s2_c116_l2",
              original: "vien gridando «accorr'uomo!»",
              literal: "comes crying «help! help!»",
              tokens: [
                {
                  word: "vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes (apocopic form of viene)",
                },
                {
                  word: "gridando",
                  lemma: "gridare",
                  pos: "verb",
                  meaning: "shouting / crying out (gerund)",
                },
                {
                  word: "accorr'uomo",
                  lemma: "accorr'uomo",
                  pos: "idiom",
                  meaning: "help! / to the rescue! (ancient hue and cry)",
                },
              ],
              grammarNote: "'Accorr'uomo!' (literally 'run, man!') is an ancient Italian hue and cry, summoning neighbors to stop a criminal or fire.",
            },
            {
              id: "a2_s2_c116_l3",
              original: "Dice...",
              literal: "He says...",
              tokens: [
                {
                  word: "Dice",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "he says (3rd sing. present)",
                },
                {
                  word: "dire",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "to say / tell",
                },
              ],
              grammarNote: "Meg pauses theatrically with an ellipsis, ratcheting up the suspense for the eavesdropping Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c117",
          speaker: "Alice Ford",
          stageDirection: "presto a bassa voce",
          stageDirectionTranslation: "quickly in a low voice",
          lines: [
            {
              id: "a2_s2_c117_l1",
              original: "Parla più forte.",
              literal: "Speak louder.",
              tokens: [
                {
                  word: "Parla",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "speak (2nd sing. imperative)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "forte",
                  lemma: "forte",
                  pos: "adverb",
                  meaning: "loudly / strongly",
                },
              ],
              grammarNote: "Alice whispers an aside to Meg telling her to speak louder so Falstaff behind the screen doesn't miss a single word.",
            },
            {
              id: "a2_s2_c117_l2",
              original: "MEG Che vuol scannare un uomo!",
              literal: "MEG That he wants to slaughter a man!",
              tokens: [
                {
                  word: "scannare",
                  lemma: "scannare",
                  pos: "verb",
                  meaning: "to slaughter / butcher / cut the throat",
                },
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants / intends (apocope of vuole)",
                },
                {
                  word: "uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
              ],
              grammarNote: "The libretto text includes the speaker label 'MEG'. 'Scannare' is a visceral verb meaning to slit someone's throat or butcher like livestock.",
            },
          ],
        },
        {
          id: "a2_s2_c118",
          speaker: "Alice Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a2_s2_c118_l1",
              original: "Non ridere.",
              literal: "Do not laugh.",
              tokens: [
                {
                  word: "ridere",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "to laugh (infinitive in negative imperative)",
                },
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
              ],
              grammarNote: "Alice whispers a quick aside warning Meg not to betray the trick by bursting into laughter.",
            },
          ],
        },
        {
          id: "a2_s2_c119",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c119_l1",
              original: "Ei correva",
              literal: "He was running",
              tokens: [
                {
                  word: "Ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (poetic/archaic subject pronoun)",
                },
                {
                  word: "correva",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "was running (3rd sing. imperfect)",
                },
                {
                  word: "correre",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "to run",
                },
              ],
              grammarNote: "Meg resumes her breathless account of Ford's approach. 'Ei' is a literary/poetic truncation of 'egli' (he).",
            },
            {
              id: "a2_s2_c119_l2",
              original: "invaso da tremendo",
              literal: "seized by tremendous",
              tokens: [
                {
                  word: "invaso",
                  lemma: "invadere",
                  pos: "adjective",
                  meaning: "possessed / seized / overwhelmed (past participle)",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "by",
                },
                {
                  word: "tremendo",
                  lemma: "tremendo",
                  pos: "adjective",
                  meaning: "tremendous / terrifying / dreadful",
                },
              ],
              grammarNote: "'Invaso da' denotes being possessed or overcome by an uncontrollable maniacal passion.",
            },
            {
              id: "a2_s2_c119_l3",
              original: "furor! Maledicendo",
              literal: "fury! Cursing",
              tokens: [
                {
                  word: "furor",
                  lemma: "furore",
                  pos: "noun",
                  meaning: "fury / rage (apocopic form of furore)",
                },
                {
                  word: "Maledicendo",
                  lemma: "maledire",
                  pos: "verb",
                  meaning: "cursing / execrating (present gerund)",
                },
              ],
              grammarNote: "'Furor' is poetic apocope for 'furore'. The gerund 'maledicendo' captures ongoing, frantic rage.",
            },
            {
              id: "a2_s2_c119_l4",
              original: "tutte le figlie d'Eva!",
              literal: "all the daughters of Eve!",
              tokens: [
                {
                  word: "figlie",
                  lemma: "figlia",
                  pos: "noun",
                  meaning: "daughters",
                },
                {
                  word: "Eva",
                  lemma: "Eva",
                  pos: "noun",
                  meaning: "Eve (the first woman)",
                },
                {
                  word: "tutte",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all (feminine plural)",
                },
                {
                  word: "d'Eva",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of Eve (di + Eva)",
                },
              ],
              grammarNote: "'Le figlie d'Eva' is a classic poetic/biblical idiom for all womankind, blamed by jealous men for deceit.",
            },
          ],
        },
        {
          id: "a2_s2_c120",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c120_l1",
              original: "Misericordia!",
              literal: "Mercy!",
              tokens: [
                {
                  word: "Misericordia",
                  lemma: "misericordia",
                  pos: "noun",
                  meaning: "mercy / pity / compassion",
                },
                {
                  word: "misericordia",
                  lemma: "misericordia",
                  pos: "interjection",
                  meaning: "mercy! / good heavens! (cry of alarm)",
                },
              ],
              grammarNote: "Alice acts her role in the charade, crying 'Misericordia!' with mock-pious distress.",
            },
          ],
        },
        {
          id: "a2_s2_c121",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c121_l1",
              original: "Dice che un tuo ganzo hai nascosto,",
              literal: "He says that you have hidden a lover of yours,",
              tokens: [
                {
                  word: "ganzo",
                  lemma: "ganzo",
                  pos: "noun",
                  meaning: "paramour / lover / secret beau",
                },
                {
                  word: "nascosto",
                  lemma: "nascondere",
                  pos: "verb",
                  meaning: "hidden (past participle)",
                },
                {
                  word: "hai",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "you have (2nd sing. present)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive)",
                },
              ],
              grammarNote: "'Ganzo' is a colorful, colloquial Italian term for an illicit lover, paramour, or gigolo.",
            },
            {
              id: "a2_s2_c121_l2",
              original: "lo vuole ad ogni costo scoprir...",
              literal: "he wants to discover him at any cost...",
              tokens: [
                {
                  word: "vuole",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants / intends (3rd sing. present)",
                },
                {
                  word: "ad ogni costo",
                  lemma: "ad ogni costo",
                  pos: "idiom",
                  meaning: "at all costs / whatever it takes",
                },
                {
                  word: "scoprir",
                  lemma: "scoprire",
                  pos: "verb",
                  meaning: "to uncover / discover (apocopic infinitive)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
              ],
              grammarNote: "'Ad ogni costo' is a standard Italian idiom for 'at all costs'. 'Scoprir' has apocope before the ellipsis.",
            },
          ],
        },
        {
          id: "a2_s2_c122",
          speaker: "Mrs. Quickly",
          stageDirection: "ritornando spaventatissima e gridando più di prima",
          stageDirectionTranslation: "returning terrified and shouting louder than before",
          lines: [
            {
              id: "a2_s2_c122_l1",
              original: "Signora Alice!",
              literal: "Mistress Alice!",
              tokens: [
                {
                  word: "Signora",
                  lemma: "signora",
                  pos: "noun",
                  meaning: "Mistress / lady",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
              ],
              grammarNote: "Quickly shouts from offstage according to the women's plot, abruptly shattering the romantic rendezvous.",
            },
            {
              id: "a2_s2_c122_l2",
              original: "Vien mastro Ford! Salvatevi!",
              literal: "Master Ford is coming! Save yourselves!",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "is coming (apocope of viene)",
                },
                {
                  word: "mastro",
                  lemma: "mastro",
                  pos: "noun",
                  meaning: "master",
                },
                {
                  word: "Salvatevi",
                  lemma: "salvarsi",
                  pos: "verb",
                  meaning: "save yourselves (imperative salvate + clitic vi)",
                },
              ],
              grammarNote: "The comic farce suddenly turns dangerous: Quickly bursts back in with genuine alarm because Ford really IS coming with an armed mob!",
            },
            {
              id: "a2_s2_c122_l3",
              original: "È come una tempesta!",
              literal: "He is like a storm!",
              tokens: [
                {
                  word: "tempesta",
                  lemma: "tempesta",
                  pos: "noun",
                  meaning: "tempest / storm",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly describes Ford's tempestuous approach using storm imagery ('come una tempesta').",
            },
            {
              id: "a2_s2_c122_l4",
              original: "Strepita, tuona, fulmina,",
              literal: "He rants, thunders, strikes like lightning,",
              tokens: [
                {
                  word: "Strepita",
                  lemma: "strepitare",
                  pos: "verb",
                  meaning: "he roars / makes a racket (3rd sing. present)",
                },
                {
                  word: "tuona",
                  lemma: "tuonare",
                  pos: "verb",
                  meaning: "he thunders (3rd sing. present)",
                },
                {
                  word: "fulmina",
                  lemma: "fulminare",
                  pos: "verb",
                  meaning: "he strikes like lightning / fulminates (3rd sing. present)",
                },
              ],
              grammarNote: "A dramatic tricolon of meteorological verbs conveying Ford's furious tempest of jealousy ('strepita, tuona, fulmina').",
            },
            {
              id: "a2_s2_c122_l5",
              original: "si dà dei pugni in testa,",
              literal: "he punches himself in the head,",
              tokens: [
                {
                  word: "pugni",
                  lemma: "pugno",
                  pos: "noun",
                  meaning: "punches / fists",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
                {
                  word: "dà",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "gives (3rd sing. present)",
                },
                {
                  word: "si dà",
                  lemma: "darsi",
                  pos: "verb",
                  meaning: "he gives himself (reflexive)",
                },
              ],
              grammarNote: "Comically vivid description of Ford beating his own head with his fists in an uncontrollable fit of fury.",
            },
            {
              id: "a2_s2_c122_l6",
              original: "scoppia in minacce ed urla...",
              literal: "bursts into threats and screams...",
              tokens: [
                {
                  word: "scoppia",
                  lemma: "scoppiare",
                  pos: "verb",
                  meaning: "bursts / explodes (3rd sing. present)",
                },
                {
                  word: "minacce",
                  lemma: "minaccia",
                  pos: "noun",
                  meaning: "threats",
                },
                {
                  word: "urla",
                  lemma: "urlo",
                  pos: "noun",
                  meaning: "screams / shouts (irregular feminine plural)",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "into / in",
                },
              ],
              grammarNote: "'Scoppiare in' means to burst forth into. 'Urla' is the collective feminine plural of 'urlo'.",
            },
          ],
        },
        {
          id: "a2_s2_c123",
          speaker: "Alice Ford",
          stageDirection: "avvicinandosi a Quickly a bassa voce e un poco allarmata",
          stageDirectionTranslation: "approaching Quickly, speaking in a low voice and somewhat alarmed",
          lines: [
            {
              id: "a2_s2_c123_l1",
              original: "Dassenno oppur da burla?",
              literal: "In earnest or as a joke?",
              tokens: [
                {
                  word: "Dassenno",
                  lemma: "dassenno",
                  pos: "adverb",
                  meaning: "in earnest / seriously / really",
                },
                {
                  word: "oppur",
                  lemma: "oppure",
                  pos: "conjunction",
                  meaning: "or / or else (apocopic form of oppure)",
                },
                {
                  word: "da burla",
                  lemma: "da burla",
                  pos: "idiom",
                  meaning: "for a joke / in jest",
                },
                {
                  word: "burla",
                  lemma: "burla",
                  pos: "noun",
                  meaning: "joke / jest / prank",
                },
              ],
              grammarNote: "Alice asks Quickly whether Ford's arrival is real ('dassenno') or part of their joke ('da burla').",
            },
          ],
        },
        {
          id: "a2_s2_c124",
          speaker: "Mrs. Quickly",
          stageDirection: "ancora ad alta voce",
          stageDirectionTranslation: "again in a loud voice",
          lines: [
            {
              id: "a2_s2_c124_l1",
              original: "Dassenno. Egli scavalca",
              literal: "In earnest. He is leaping over",
              tokens: [
                {
                  word: "Dassenno",
                  lemma: "dassenno",
                  pos: "adverb",
                  meaning: "in earnest / seriously",
                },
                {
                  word: "Egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (subject pronoun)",
                },
                {
                  word: "scavalca",
                  lemma: "scavallare",
                  pos: "verb",
                  meaning: "climbs over / scales / vaults (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly confirms that this is deadly serious: Ford is literally vaulting over walls in his frenzy.",
            },
            {
              id: "a2_s2_c124_l2",
              original: "le siepi del giardino...",
              literal: "the hedges of the garden...",
              tokens: [
                {
                  word: "siepi",
                  lemma: "siepe",
                  pos: "noun",
                  meaning: "hedges / garden fences",
                },
                {
                  word: "giardino",
                  lemma: "giardino",
                  pos: "noun",
                  meaning: "garden",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + il)",
                },
                {
                  word: "le",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural definite article)",
                },
              ],
              grammarNote: "Ford has abandoned the paths and is charging straight through the garden hedges ('le siepi del giardino').",
            },
            {
              id: "a2_s2_c124_l3",
              original: "lo segue una gran calca",
              literal: "a huge crowd follows him",
              tokens: [
                {
                  word: "segue",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follows (3rd sing. present)",
                },
                {
                  word: "calca",
                  lemma: "calca",
                  pos: "noun",
                  meaning: "throng / crowd / mob",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / large (apocopic form of grande)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
              ],
              grammarNote: "Inversion: direct object 'lo' precedes verb 'segue' and subject 'una gran calca' (a great mob of followers).",
            },
            {
              id: "a2_s2_c124_l4",
              original: "di gente... è già vicino...",
              literal: "of people... he is already near...",
              tokens: [
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / crowd",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "vicino",
                  lemma: "vicino",
                  pos: "adverb",
                  meaning: "near / close by",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly conveys the rapid approach of the armed mob with fragmented, urgent phrasing.",
            },
            {
              id: "a2_s2_c124_l5",
              original: "Mentr'io vi parlo ei valca",
              literal: "While I speak to you he crosses",
              tokens: [
                {
                  word: "Mentr'",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while (elision of mentre)",
                },
                {
                  word: "parlo",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "I speak (1st sing. present)",
                },
                {
                  word: "ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (poetic variant of egli)",
                },
                {
                  word: "valca",
                  lemma: "valcare",
                  pos: "verb",
                  meaning: "crosses / steps over (3rd sing. present, poetic for varcare)",
                },
              ],
              grammarNote: "'Valcare' is an archaic/poetic Tuscan variant of 'varcare' (to step over a threshold), rhyming with 'scavalca' and 'calca'.",
            },
            {
              id: "a2_s2_c124_l6",
              original: "l'ingresso...",
              literal: "the entrance...",
              tokens: [
                {
                  word: "ingresso",
                  lemma: "ingresso",
                  pos: "noun",
                  meaning: "entrance / doorway",
                },
                {
                  word: "l'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Quickly is cut off as Ford's shout suddenly echoes right from the doorway.",
            },
          ],
        },
        {
          id: "a2_s2_c125",
          speaker: "Ford",
          stageDirection: "di dentro urlando",
          stageDirectionTranslation: "from within, howling",
          lines: [
            {
              id: "a2_s2_c125_l1",
              original: "Malandrino!",
              literal: "Scoundrel!",
              tokens: [
                {
                  word: "Malandrino",
                  lemma: "malandrino",
                  pos: "noun",
                  meaning: "scoundrel / rogue / highwayman",
                },
                {
                  word: "malandrino",
                  lemma: "malandrino",
                  pos: "adjective",
                  meaning: "roguish / villainous",
                },
              ],
              grammarNote: "Ford's thunderous entrance shout: 'Malandrino!' (scoundrel/brigand), hunting for the seducer he believes is inside.",
            },
          ],
        },
        {
          id: "a2_s2_c126",
          speaker: "Sir John Falstaff",
          stageDirection: "sgomentatissimo avrà già fatto un passo per fuggire dal paravento, ma udendo la voce dell'uomo torna a rimpiattarsi",
          stageDirectionTranslation: "utterly terrified, he has already taken a step to flee from behind the screen, but hearing the man's voice hides himself again",
          lines: [
            {
              id: "a2_s2_c126_l1",
              original: "Il diavolo cavalca",
              literal: "The devil rides",
              tokens: [
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil / demon",
                },
                {
                  word: "cavalca",
                  lemma: "cavalcare",
                  pos: "verb",
                  meaning: "rides (3rd sing. present)",
                },
                {
                  word: "Il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Falstaff groans from behind the screen: this begins Boito's direct translation of Shakespeare's proverb from Henry IV Part 1.",
            },
            {
              id: "a2_s2_c126_l2",
              original: "sull'arco di un violino!",
              literal: "upon the bow of a violin!",
              tokens: [
                {
                  word: "arco",
                  lemma: "arco",
                  pos: "noun",
                  meaning: "bow (of an instrument)",
                },
                {
                  word: "violino",
                  lemma: "violino",
                  pos: "noun",
                  meaning: "violin / fiddle",
                },
                {
                  word: "sull'",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the (su + l')",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
              ],
              grammarNote: "Falstaff completes Shakespeare's famous quip: 'The devil rides upon a fiddlestick!' (Henry IV Part 1), meaning utter chaos has erupted.",
            },
          ],
        },
        {
          id: "a2_s2_c127",
          speaker: "Sir John Falstaff",
          stageDirection: "Alice, con una mossa rapidissima, lo chiude nel paravento, in modo che non è più veduto",
          stageDirectionTranslation: "Alice, with a very swift movement, shuts him inside the screen, so that he is no longer seen",
          lines: [
            {
              id: "a2_s2_c127_l1",
              original: "Alice, Meg, Quickly, mr. Ford, poi subito il Dr. Cajus, poi Fenton, poi",
              literal: "Alice, Meg, Quickly, Mr. Ford, then immediately Dr. Caius, then Fenton, then",
              tokens: [
                {
                  word: "subito",
                  lemma: "subito",
                  pos: "adverb",
                  meaning: "immediately / at once",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "mr.",
                  lemma: "mister",
                  pos: "noun",
                  meaning: "Mister (English abbreviation)",
                },
                {
                  word: "Dr.",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Doctor (abbreviation)",
                },
              ],
              grammarNote: "Stage direction describing the cascading mass entrance into the room as Ford's search party floods in.",
            },
            {
              id: "a2_s2_c127_l2",
              original: "Bardolfo e Pistola, poi Nannetta. Falstaff sempre nascosto nel paravento.",
              literal: "Bardolfo and Pistola, then Nannetta. Falstaff still hidden behind the screen.",
              tokens: [
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "still / always",
                },
                {
                  word: "nascosto",
                  lemma: "nascondere",
                  pos: "adjective",
                  meaning: "hidden (past participle)",
                },
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "folding screen",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the / behind the (in + il)",
                },
              ],
              grammarNote: "Stage direction establishing the ensemble layout: all principal characters fill the room while Falstaff quakes in terror behind the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c128",
          speaker: "Ford",
          stageDirection: "dal fondo gridando volto a chi lo segue",
          stageDirectionTranslation: "from the back, shouting, turned toward those following him",
          lines: [
            {
              id: "a2_s2_c128_l1",
              original: "Chiudete le porte! Sbarrate le scale!",
              literal: "Shut the doors! Bar the stairways!",
              tokens: [
                {
                  word: "Chiudete",
                  lemma: "chiudere",
                  pos: "verb",
                  meaning: "shut / close (2nd plural imperative)",
                },
                {
                  word: "porte",
                  lemma: "porta",
                  pos: "noun",
                  meaning: "doors",
                },
                {
                  word: "Sbarrate",
                  lemma: "sbarrare",
                  pos: "verb",
                  meaning: "bar / barricade (2nd plural imperative)",
                },
                {
                  word: "scale",
                  lemma: "scala",
                  pos: "noun",
                  meaning: "stairs / staircases",
                },
              ],
              grammarNote: "Ford barks urgent military commands with imperative verbs ('Chiudete', 'Sbarrate') to seal every exit.",
            },
            {
              id: "a2_s2_c128_l2",
              original: "Seguitemi a caccia! Scoviamo il cignale!",
              literal: "Follow me to the hunt! Let us flush out the boar!",
              tokens: [
                {
                  word: "Seguitemi",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follow me (imperative seguite + clitic mi)",
                },
                {
                  word: "caccia",
                  lemma: "caccia",
                  pos: "noun",
                  meaning: "hunt",
                },
                {
                  word: "Scoviamo",
                  lemma: "scovare",
                  pos: "verb",
                  meaning: "let us flush out / unearth (1st plural imperative)",
                },
                {
                  word: "cignale",
                  lemma: "cignale",
                  pos: "noun",
                  meaning: "wild boar (archaic/Tuscan form of cinghiale)",
                },
              ],
              grammarNote: "Ford compares hunting Falstaff to flushing out a wild boar ('cignale', archaic Tuscan for cinghiale) from the brush.",
            },
          ],
        },
        {
          id: "a2_s2_c129",
          speaker: "Ford",
          stageDirection: "entrano correndo il Dr. Cajus e Fenton",
          stageDirectionTranslation: "Dr. Caius and Fenton enter running",
          lines: [
          ],
        },
        {
          id: "a2_s2_c130",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c130_l1",
              original: "Correte sull'orme, sull'usta.",
              literal: "Run on the tracks, on the scent.",
              tokens: [
                {
                  word: "Correte",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "run (2nd plural imperative)",
                },
                {
                  word: "orme",
                  lemma: "orma",
                  pos: "noun",
                  meaning: "tracks / footprints",
                },
                {
                  word: "usta",
                  lemma: "usta",
                  pos: "noun",
                  meaning: "scent of wild game (hunting term)",
                },
                {
                  word: "sull'",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on the (su + l')",
                },
              ],
              grammarNote: "'Usta' is a specialized Italian hunting term denoting the warm, lingering body scent left behind by wild game.",
            },
          ],
        },
        {
          id: "a2_s2_c131",
          speaker: "Ford",
          stageDirection: "a Fenton",
          stageDirectionTranslation: "to Fenton",
          lines: [
            {
              id: "a2_s2_c131_l1",
              original: "Tu fruga",
              literal: "You, search",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (singular subject pronoun)",
                },
                {
                  word: "fruga",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "search / rummage (2nd sing. imperative)",
                },
                {
                  word: "frugare",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "to search / rummage thoroughly",
                },
              ],
              grammarNote: "Ford barks an urgent imperative command to a follower to rummage every corner of the house.",
            },
            {
              id: "a2_s2_c131_l2",
              original: "negli anditi.",
              literal: "in the passageways.",
              tokens: [
                {
                  word: "anditi",
                  lemma: "andito",
                  pos: "noun",
                  meaning: "passageways / corridors / hallways",
                },
                {
                  word: "negli",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + gli)",
                },
              ],
              grammarNote: "'Anditi' refers to narrow domestic hallways or corridors connecting rooms.",
            },
          ],
        },
        {
          id: "a2_s2_c132",
          speaker: "Bardolfo & Pistola",
          stageDirection: "irrompono nella sala gridando, mentre Fenton corre a sinistra",
          stageDirectionTranslation: "they burst into the room shouting, while Fenton runs to the left",
          lines: [
            {
              id: "a2_s2_c132_l1",
              original: "A caccia!",
              literal: "To the hunt!",
              tokens: [
                {
                  word: "caccia",
                  lemma: "caccia",
                  pos: "noun",
                  meaning: "hunt / chase",
                },
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to / on",
                },
              ],
              grammarNote: "Bardolfo and Pistola eagerly echo Ford's rallying cry ('A caccia!'), joining the hunt against their former master.",
            },
          ],
        },
        {
          id: "a2_s2_c133",
          speaker: "Ford",
          stageDirection: "a Bardolfo e Pistola, indicando la camera a destra",
          stageDirectionTranslation: "to Bardolfo e Pistola, indicando la camera a destra",
          lines: [
            {
              id: "a2_s2_c133_l1",
              original: "Sventate la fuga!",
              literal: "Thwart the escape!",
              tokens: [
                {
                  word: "Sventate",
                  lemma: "sventare",
                  pos: "verb",
                  meaning: "thwart / foil / prevent (2nd plural imperative)",
                },
                {
                  word: "fuga",
                  lemma: "fuga",
                  pos: "noun",
                  meaning: "escape / flight",
                },
                {
                  word: "la",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Ford shouts to cut off any retreat ('sventare la fuga' = to foil or prevent the escape).",
            },
            {
              id: "a2_s2_c133_l2",
              original: "Cercate là dentro!",
              literal: "Search in there!",
              tokens: [
                {
                  word: "Cercate",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "search / look (2nd plural imperative)",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "adverb",
                  meaning: "inside / in",
                },
                {
                  word: "là dentro",
                  lemma: "là dentro",
                  pos: "idiom",
                  meaning: "in there / inside there",
                },
              ],
              grammarNote: "Ford gestures toward an adjacent room, ordering his posse inside as the frantic search continues.",
            },
          ],
        },
        {
          id: "a2_s2_c134",
          speaker: "Ford",
          stageDirection: "Bardolfo e Pistola si precipitano nella camera coi bastoni levati",
          stageDirectionTranslation: "Bardolfo and Pistola rush into the room with raised sticks",
          lines: [
          ],
        },
        {
          id: "a2_s2_c135",
          speaker: "Alice Ford",
          stageDirection: "affrontando Ford",
          stageDirectionTranslation: "confronting Ford",
          lines: [
            {
              id: "a2_s2_c135_l1",
              original: "Sei tu dissennato?",
              literal: "Are you senseless?",
              tokens: [
                {
                  word: "Sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd person singular present)",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (subject pronoun)",
                },
                {
                  word: "dissennato",
                  lemma: "dissennato",
                  pos: "adjective",
                  meaning: "senseless / mad / deranged",
                },
              ],
              grammarNote: "Alice feigns shock and indignation at Ford's violent intrusion, pretending his frantic jealousy is sheer madness.",
            },
            {
              id: "a2_s2_c135_l2",
              original: "Che fai?",
              literal: "What are you doing?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what (interrogative pronoun)",
                },
                {
                  word: "fai",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "you are doing / you do (2nd person singular present)",
                },
              ],
              grammarNote: "Alice challenges Ford as he begins barging into the room and tearing through household furniture.",
            },
          ],
        },
        {
          id: "a2_s2_c136",
          speaker: "Ford",
          stageDirection: "vede il cesto",
          stageDirectionTranslation: "sees the basket",
          lines: [
            {
              id: "a2_s2_c136_l1",
              original: "Chi c'è dentro quel cesto?",
              literal: "Who is inside that basket?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who (interrogative pronoun)",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "is there / there is (ci + è)",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "preposition",
                  meaning: "inside / within",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "cesto",
                  lemma: "cesto",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
              ],
              grammarNote: "Ford fixes his suspicious gaze directly on the giant laundry hamper, assuming Alice has hidden her paramour inside.",
            },
          ],
        },
        {
          id: "a2_s2_c137",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c137_l1",
              original: "Il bucato.",
              literal: "The laundry.",
              tokens: [
                {
                  word: "Il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
                {
                  word: "bucato",
                  lemma: "bucato",
                  pos: "noun",
                  meaning: "laundry / washing",
                },
              ],
              grammarNote: "Alice responds with cool domestic composure, nonchalantly explaining the dirty linen to divert Ford's manic suspicion.",
            },
          ],
        },
        {
          id: "a2_s2_c138",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c138_l1",
              original: "Mi lavi! rea moglie!",
              literal: "You wash me! wicked wife!",
              tokens: [
                {
                  word: "lavi",
                  lemma: "lavare",
                  pos: "verb",
                  meaning: "you wash (2nd person singular present)",
                },
                {
                  word: "rea",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "wicked / guilty / criminal",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
              ],
              grammarNote: "Ford sarcastically twists Alice's word 'bucato' (laundry), bitterly accusing her of washing him clean of his honor.",
            },
          ],
        },
        {
          id: "a2_s2_c139",
          speaker: "Ford",
          stageDirection: "consegnando un mazzo di chiavi al Dr. Cajus, che escirà correndo dall'uscio di sinistra",
          stageDirectionTranslation: "handing a bunch of keys to Dr. Caius, who runs out through the left door",
          lines: [
            {
              id: "a2_s2_c139_l1",
              original: "Tu, piglia le chiavi,",
              literal: "You, take the keys,",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (subject pronoun)",
                },
                {
                  word: "piglia",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "take / grab (2nd person singular imperative)",
                },
                {
                  word: "le",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural definite article)",
                },
                {
                  word: "chiavi",
                  lemma: "chiave",
                  pos: "noun",
                  meaning: "keys",
                },
              ],
              grammarNote: "Ford barks instructions to Dr. Caius to grab the household master keys in order to unlock every closet and chest.",
            },
            {
              id: "a2_s2_c139_l2",
              original: "rovista le casse, va'.",
              literal: "rummage through the trunks, go.",
              tokens: [
                {
                  word: "rovista",
                  lemma: "rovistare",
                  pos: "verb",
                  meaning: "rummage through / search (2nd person singular imperative)",
                },
                {
                  word: "le",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural definite article)",
                },
                {
                  word: "casse",
                  lemma: "cassa",
                  pos: "noun",
                  meaning: "chests / trunks / boxes",
                },
                {
                  word: "va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (truncated imperative of andare)",
                },
              ],
              grammarNote: "Ford commands his ally to ransack every container in the house, desperate to flush out Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c140",
          speaker: "Ford",
          stageDirection: "rivolgendosi ancora ad Alice",
          stageDirectionTranslation: "turning again to Alice",
          lines: [
            {
              id: "a2_s2_c140_l1",
              original: "Ben tu mi lavi!",
              literal: "Indeed you wash me!",
              tokens: [
                {
                  word: "Ben",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "indeed / well / truly (apocopic form of bene)",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (subject pronoun)",
                },
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object pronoun)",
                },
                {
                  word: "lavi",
                  lemma: "lavare",
                  pos: "verb",
                  meaning: "you wash (2nd person singular present)",
                },
              ],
              grammarNote: "Ford repeats his sneering pun on laundry, convinced that Alice is attempting to deceive and humiliate him.",
            },
          ],
        },
        {
          id: "a2_s2_c141",
          speaker: "Ford",
          stageDirection: "dà un calcio alla cesta",
          stageDirectionTranslation: "gives the basket a kick",
          lines: [
            {
              id: "a2_s2_c141_l1",
              original: "Al diavolo i cenci!",
              literal: "To the devil with the rags!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil",
                },
                {
                  word: "cenci",
                  lemma: "cencio",
                  pos: "noun",
                  meaning: "rags / dirty clothes / tatters",
                },
              ],
              grammarNote: "In a fit of pique, Ford curses the mountain of soiled clothes inside the basket and begins flinging them across the room.",
            },
          ],
        },
        {
          id: "a2_s2_c142",
          speaker: "Ford",
          stageDirection: "gridando verso il fondo",
          stageDirectionTranslation: "shouting toward the back",
          lines: [
            {
              id: "a2_s2_c142_l1",
              original: "Sprangatemi l'uscio",
              literal: "Bar for me the door",
              tokens: [
                {
                  word: "Sprangatemi",
                  lemma: "sprangare",
                  pos: "verb",
                  meaning: "bar for me (imperative sprangate + clitic pronoun mi)",
                },
                {
                  word: "l'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided definite article)",
                },
                {
                  word: "uscio",
                  lemma: "uscio",
                  pos: "noun",
                  meaning: "door / doorway",
                },
              ],
              grammarNote: "Ford orders Bardolfo and Pistola to bolt the exterior door so the suspected intruder cannot flee the grounds.",
            },
            {
              id: "a2_s2_c142_l2",
              original: "del parco!",
              literal: "of the park!",
              tokens: [
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + il)",
                },
                {
                  word: "parco",
                  lemma: "parco",
                  pos: "noun",
                  meaning: "park / grounds",
                },
              ],
              grammarNote: "Continuation of Ford's command to seal Windsor Park exit, ensuring no avenue of escape remains.",
            },
          ],
        },
        {
          id: "a2_s2_c143",
          speaker: "Ford",
          stageDirection: "estrae furiosamente la biancheria dalla cesta, frugando e cercando dentro, e disseminando i panni sul pavimento",
          stageDirectionTranslation: "furiously pulls the laundry out of the basket, searching and rummaging inside, scattering the clothes over the floor",
          lines: [
            {
              id: "a2_s2_c143_l1",
              original: "Camice... gonnelle... Or ti sguscio,",
              literal: "Shirts... skirts... Now I will shell you out,",
              tokens: [
                {
                  word: "Camice",
                  lemma: "camicia",
                  pos: "noun",
                  meaning: "shirts / chemises / smocks",
                },
                {
                  word: "gonnelle",
                  lemma: "gonnella",
                  pos: "noun",
                  meaning: "skirts / petticoats",
                },
                {
                  word: "Or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocopic form of ora)",
                },
                {
                  word: "sguscio",
                  lemma: "sgusciare",
                  pos: "verb",
                  meaning: "I shell out / I unhusk / I flush out (1st person singular present)",
                },
              ],
              grammarNote: "Ford rummages through the laundry hamper, pulling out garments one by one and threatening to shell the lover like a pea from its pod.",
            },
            {
              id: "a2_s2_c143_l2",
              original: "briccon! Strofinacci! Via! Via! Cuffie rotte!",
              literal: "rogue! Dishcloths! Away! Away! Torn caps!",
              tokens: [
                {
                  word: "briccon",
                  lemma: "briccone",
                  pos: "noun",
                  meaning: "rogue / rascal (apocopic form of briccone)",
                },
                {
                  word: "Strofinacci",
                  lemma: "strofinaccio",
                  pos: "noun",
                  meaning: "dishcloths / dusting rags",
                },
                {
                  word: "Via",
                  lemma: "via",
                  pos: "interjection",
                  meaning: "away / off",
                },
                {
                  word: "Cuffie",
                  lemma: "cuffia",
                  pos: "noun",
                  meaning: "caps / bonnets / nightcaps",
                },
                {
                  word: "rotte",
                  lemma: "rotto",
                  pos: "adjective",
                  meaning: "torn / broken",
                },
              ],
              grammarNote: "Ford throws linens and cleaning cloths in all directions in a comic display of uncontrolled jealous mania.",
            },
            {
              id: "a2_s2_c143_l3",
              original: "Ti sguscio. Lenzuola... berretti da notte...",
              literal: "I will shell you out. Bed sheets... nightcaps...",
              tokens: [
                {
                  word: "sguscio",
                  lemma: "sgusciare",
                  pos: "verb",
                  meaning: "I shell out / flush out (1st person singular present)",
                },
                {
                  word: "Lenzuola",
                  lemma: "lenzuolo",
                  pos: "noun",
                  meaning: "bed sheets (irregular feminine plural)",
                },
                {
                  word: "berretti",
                  lemma: "berretto",
                  pos: "noun",
                  meaning: "caps / headgear",
                },
                {
                  word: "notte",
                  lemma: "notte",
                  pos: "noun",
                  meaning: "night",
                },
              ],
              grammarNote: "Ford digs all the way to the bottom of the hamper, muttering frantic threats as he empties every single item of linen.",
            },
            {
              id: "a2_s2_c143_l4",
              original: "Non c'è...",
              literal: "He is not here...",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "c'",
                  lemma: "ci",
                  pos: "pronoun",
                  meaning: "there (locative pronoun ci, elided)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
              ],
              grammarNote: "Ford pauses stunned and breathless as the empty bottom of the hamper reveals no lover hiding inside.",
            },
          ],
        },
        {
          id: "a2_s2_c144",
          speaker: "Alice, Meg & Quickly",
          stageDirection: "guardando i panni sparsi",
          stageDirectionTranslation: "looking at the scattered clothes",
          lines: [
            {
              id: "a2_s2_c144_l1",
              original: "Che uragano!",
              literal: "What a hurricane!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "uragano",
                  lemma: "uragano",
                  pos: "noun",
                  meaning: "hurricane / whirlwind / tempest",
                },
              ],
              grammarNote: "The women mock Ford's destructive entrance, comparing his roaring outburst to a natural disaster.",
            },
          ],
        },
        {
          id: "a2_s2_c145",
          speaker: "Ford",
          stageDirection: "correndo e gridando, esce dalla porta a sinistra",
          stageDirectionTranslation: "running and shouting, he exits through the door on the left",
          lines: [
            {
              id: "a2_s2_c145_l1",
              original: "Cerchiam sotto il letto.",
              literal: "Let us search under the bed.",
              tokens: [
                {
                  word: "Cerchiam",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "let us search (1st person plural imperative, apocopic)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "preposition",
                  meaning: "under / beneath",
                },
                {
                  word: "letto",
                  lemma: "letto",
                  pos: "noun",
                  meaning: "bed",
                },
              ],
              grammarNote: "Determined to find proof of his dishonor, Ford commands the search party to check beneath the bedroom furniture.",
            },
            {
              id: "a2_s2_c145_l2",
              original: "Nel forno, nel pozzo, nel bagno, sul tetto,",
              literal: "In the oven, in the well, in the bathroom, on the roof,",
              tokens: [
                {
                  word: "forno",
                  lemma: "forno",
                  pos: "noun",
                  meaning: "oven / furnace",
                },
                {
                  word: "pozzo",
                  lemma: "pozzo",
                  pos: "noun",
                  meaning: "well",
                },
                {
                  word: "bagno",
                  lemma: "bagno",
                  pos: "noun",
                  meaning: "bath / bathroom",
                },
                {
                  word: "tetto",
                  lemma: "tetto",
                  pos: "noun",
                  meaning: "roof",
                },
              ],
              grammarNote: "Ford rattles off an absurd, manic inventory of hiding places, revealing how completely suspicion has untethered his reason.",
            },
            {
              id: "a2_s2_c145_l3",
              original: "in cantina...",
              literal: "in the cellar...",
              tokens: [
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in / into",
                },
                {
                  word: "cantina",
                  lemma: "cantina",
                  pos: "noun",
                  meaning: "cellar / basement / wine cellar",
                },
              ],
              grammarNote: "Ford's voice trails off as he dashes out of the room to scour the rest of the house from cellar to garret.",
            },
          ],
        },
        {
          id: "a2_s2_c146",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c146_l1",
              original: "È farnetico!",
              literal: "He is raving mad!",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is / is (3rd person singular present)",
                },
                {
                  word: "farnetico",
                  lemma: "farnetico",
                  pos: "adjective",
                  meaning: "delirious / raving / crazed",
                },
              ],
              grammarNote: "Alice laughs at Ford's frantic exit, amused that his genuine paranoia has played right into their orchestrated practical joke.",
            },
          ],
        },
        {
          id: "a2_s2_c147",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c147_l1",
              original: "Cogliam tempo.",
              literal: "Let us seize the moment.",
              tokens: [
                {
                  word: "Cogliam",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "let us seize / take (1st person plural imperative, apocopic)",
                },
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time / opportunity / moment",
                },
              ],
              grammarNote: "Quickly realizes they have only a brief window before Ford doubles back from the other rooms.",
            },
          ],
        },
        {
          id: "a2_s2_c148",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c148_l1",
              original: "Troviamo",
              literal: "Let us find",
              tokens: [
                {
                  word: "Troviamo",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "let us find (1st plur. hortatory subjunctive / imperative)",
                },
              ],
              grammarNote: "Hortatory 1st person plural opening Nannetta and Fenton's coordinated evasion into the woods, completed in the following line.",
            },
            {
              id: "a2_s2_c148_l2",
              original: "modo com'egli fugga.",
              literal: "a way how he may flee.",
              tokens: [
                {
                  word: "modo",
                  lemma: "modo",
                  pos: "noun",
                  meaning: "way / means / manner",
                },
                {
                  word: "com'",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "how / as (elided)",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (subject pronoun)",
                },
                {
                  word: "fugga",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "he may flee (3rd person singular present subjunctive)",
                },
              ],
              grammarNote: "Continuation of Alice's line, seeking an escape route for the panicked knight.",
            },
          ],
        },
        {
          id: "a2_s2_c149",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c149_l1",
              original: "Nel panier.",
              literal: "In the hamper.",
              tokens: [
                {
                  word: "Nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (articulated preposition in + il)",
                },
                {
                  word: "panier",
                  lemma: "paniere",
                  pos: "noun",
                  meaning: "hamper / basket (apocopic form of paniere)",
                },
              ],
              grammarNote: "Meg points to the newly emptied laundry hamper as the ideal vessel to conceal Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c150",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c150_l1",
              original: "No, là dentro",
              literal: "No, in there",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "adverb",
                  meaning: "inside / within",
                },
              ],
              grammarNote: "Alice feigns doubt to bait Falstaff into volunteering himself for the humiliating hiding spot.",
            },
            {
              id: "a2_s2_c150_l2",
              original: "non c'entra, è troppo grosso.",
              literal: "he does not fit in there, he is too fat.",
              tokens: [
                {
                  word: "c'entra",
                  lemma: "entrarci",
                  pos: "verb",
                  meaning: "fits in there (ci + entra)",
                },
                {
                  word: "troppo",
                  lemma: "troppo",
                  pos: "adverb",
                  meaning: "too / excessively",
                },
                {
                  word: "grosso",
                  lemma: "grosso",
                  pos: "adjective",
                  meaning: "fat / big / bulky",
                },
              ],
              grammarNote: "Alice teases Falstaff's famous girth, knowing his desperate desire to escape will make him squeeze in regardless.",
            },
          ],
        },
        {
          id: "a2_s2_c151",
          speaker: "Sir John Falstaff",
          stageDirection: "sbalordito, ode le parole d'Alice, sbuca e corre alla cesta",
          stageDirectionTranslation: "astounded, he hears Alice's words, pops out and runs to the basket",
          lines: [
            {
              id: "a2_s2_c151_l1",
              original: "Vediam; sì, c'entro, c'entro.",
              literal: "Let us see; yes, I fit, I fit.",
              tokens: [
                {
                  word: "Vediam",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "let us see (1st person plural imperative, apocopic)",
                },
                {
                  word: "sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes",
                },
                {
                  word: "c'entro",
                  lemma: "entrarci",
                  pos: "verb",
                  meaning: "I fit in there (ci + entro)",
                },
              ],
              grammarNote: "Emerging from behind the screen in sheer terror, Falstaff eagerly contorts his massive bulk to wedge himself into the basket.",
            },
          ],
        },
        {
          id: "a2_s2_c152",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c152_l1",
              original: "Corro a chiamare i servi.",
              literal: "I run to call the servants.",
              tokens: [
                {
                  word: "Corro",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "I run (1st person singular present)",
                },
                {
                  word: "chiamare",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "to call / summon",
                },
                {
                  word: "servi",
                  lemma: "servo",
                  pos: "noun",
                  meaning: "servants",
                },
                {
                  word: "i",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine plural definite article)",
                },
              ],
              grammarNote: "Alice slips away to order the servants to carry out the hamper and dump it into the Thames, completing the comedic punishment.",
            },
          ],
        },
        {
          id: "a2_s2_c153",
          speaker: "Alice Ford",
          stageDirection: "esce",
          stageDirectionTranslation: "exits",
          lines: [
          ],
        },
        {
          id: "a2_s2_c154",
          speaker: "Meg Page",
          stageDirection: "a Falstaff, fingendo sorpresa",
          stageDirectionTranslation: "to Falstaff, fingendo sorpresa",
          lines: [
            {
              id: "a2_s2_c154_l1",
              original: "Sir John! Voi qui? Voi?",
              literal: "Sir John! You here? You?",
              tokens: [
                {
                  word: "Sir",
                  lemma: "Sir",
                  pos: "noun",
                  meaning: "Sir (title of knighthood)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (formal second-person pronoun)",
                },
              ],
              grammarNote: "Meg playfully mocks Falstaff with feigned surprise as he scrambles into the laundry hamper.",
            },
          ],
        },
        {
          id: "a2_s2_c155",
          speaker: "Sir John Falstaff",
          stageDirection: "entrando nella cesta",
          stageDirectionTranslation: "getting into the basket",
          lines: [
            {
              id: "a2_s2_c155_l1",
              original: "T'amo amo te sola...",
              literal: "I love you I love you alone...",
              tokens: [
                {
                  word: "T'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (ti + amo)",
                },
                {
                  word: "amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love (1st person singular present)",
                },
                {
                  word: "te",
                  lemma: "te",
                  pos: "pronoun",
                  meaning: "you (disjunctive pronoun)",
                },
                {
                  word: "sola",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone / only",
                },
              ],
              grammarNote: "Even while cowering inside dirty laundry in mortal terror, Falstaff instinctively tries to woo Meg, recycling the exact falsehoods he fed Alice.",
            },
            {
              id: "a2_s2_c155_l2",
              original: "salvami! salvami!",
              literal: "save me! save me!",
              tokens: [
                {
                  word: "salvami",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save me (imperative salva + clitic pronoun mi)",
                },
                {
                  word: "salvare",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "to save / rescue",
                },
              ],
              grammarNote: "Falstaff grovels in panic, begging Meg and Quickly to protect him from Ford's wrath.",
            },
          ],
        },
        {
          id: "a2_s2_c156",
          speaker: "Mrs. Quickly",
          stageDirection: "a Falstaff raccattando i panni",
          stageDirectionTranslation: "to Falstaff raccattando i panni",
          lines: [
            {
              id: "a2_s2_c156_l1",
              original: "Svelto!",
              literal: "Quick!",
              tokens: [
                {
                  word: "Svelto",
                  lemma: "svelto",
                  pos: "adjective",
                  meaning: "quick / brisk / nimble",
                },
                {
                  word: "sveltire",
                  lemma: "sveltire",
                  pos: "verb",
                  meaning: "to hasten / quicken",
                },
              ],
              grammarNote: "Quickly pushes Falstaff down into the hamper with brisk comedic urgency.",
            },
          ],
        },
        {
          id: "a2_s2_c157",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c157_l1",
              original: "Lesto!",
              literal: "Nimble!",
              tokens: [
                {
                  word: "Lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "nimble / quick / agile",
                },
                {
                  word: "lestamente",
                  lemma: "lestamente",
                  pos: "adverb",
                  meaning: "quickly / nimbly",
                },
              ],
              grammarNote: "Meg urges Falstaff to fold himself completely beneath the rim of the hamper.",
            },
          ],
        },
        {
          id: "a2_s2_c158",
          speaker: "Sir John Falstaff",
          stageDirection: "accovacciandosi con grande sforzo nella cesta",
          stageDirectionTranslation: "crouching down into the basket with great effort",
          lines: [
            {
              id: "a2_s2_c158_l1",
              original: "Ahi!... Ahi!... Ci sto... Copritemi...",
              literal: "Ouch!... Ouch!... I am inside... Cover me...",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch / alas (cry of pain)",
                },
                {
                  word: "sto",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "I stay / I fit / I am (1st person singular present)",
                },
                {
                  word: "Copritemi",
                  lemma: "coprire",
                  pos: "verb",
                  meaning: "cover me (imperative coprite + clitic pronoun mi)",
                },
              ],
              grammarNote: "Falstaff groans as his ample body is wedged painfully into the wicker basket, pleading to be hidden.",
            },
          ],
        },
        {
          id: "a2_s2_c159",
          speaker: "Mrs. Quickly",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a2_s2_c159_l1",
              original: "Presto! colmiamo il cesto.",
              literal: "Quick! let us heap the basket.",
              tokens: [
                {
                  word: "Presto",
                  lemma: "presto",
                  pos: "adverb",
                  meaning: "quick / fast",
                },
                {
                  word: "colmiamo",
                  lemma: "colmare",
                  pos: "verb",
                  meaning: "let us heap / fill to the brim (1st person plural imperative)",
                },
                {
                  word: "cesto",
                  lemma: "cesto",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
              ],
              grammarNote: "Quickly directs Meg to pile dirty linen back on top of Falstaff until he is totally invisible.",
            },
          ],
        },
        {
          id: "a2_s2_c160",
          speaker: "Mrs. Quickly",
          stageDirection: "fra tutte due con gran fretta ricacciano la biancheria nel cesto",
          stageDirectionTranslation: "the two of them in great haste stuff the linen back into the basket",
          lines: [
            {
              id: "a2_s2_c160_l1",
              original: "Meg e Quickly attendono a nascondere Falstaff sotto la biancheria,",
              literal: "Meg and Quickly attend to hiding Falstaff under the linen,",
              tokens: [
                {
                  word: "attendono",
                  lemma: "attendere",
                  pos: "verb",
                  meaning: "they attend / apply themselves (3rd person plural present)",
                },
                {
                  word: "nascondere",
                  lemma: "nascondere",
                  pos: "verb",
                  meaning: "to hide / conceal",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "preposition",
                  meaning: "under / beneath",
                },
                {
                  word: "biancheria",
                  lemma: "biancheria",
                  pos: "noun",
                  meaning: "linen / laundry",
                },
              ],
              grammarNote: "Stage direction detailing the farcical stage business of burying Falstaff under mounds of foul laundry.",
            },
            {
              id: "a2_s2_c160_l2",
              original: "mentre Nannetta e Fenton entrano da sinistra.",
              literal: "while Nannetta and Fenton enter from the left.",
              tokens: [
                {
                  word: "mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / as",
                },
                {
                  word: "entrano",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "they enter (3rd person plural present)",
                },
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left (stage left)",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from",
                },
              ],
              grammarNote: "Stage direction introducing the young lovers, who use the pandemonium to sneak into the room unnoticed.",
            },
          ],
        },
        {
          id: "a2_s2_c161",
          speaker: "Nannetta",
          stageDirection: "sottovoce, con cautela a Fenton",
          stageDirectionTranslation: "under his breath, cautiously to Fenton",
          lines: [
            {
              id: "a2_s2_c161_l1",
              original: "Vien qua.",
              literal: "Come here.",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (2nd person singular imperative, apocopic form of vieni)",
                },
                {
                  word: "qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
              ],
              grammarNote: "Nannetta quietly beckons Fenton into the room, looking for a private spot away from the commotion.",
            },
          ],
        },
        {
          id: "a2_s2_c162",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c162_l1",
              original: "Che chiasso!",
              literal: "What a racket!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "chiasso",
                  lemma: "chiasso",
                  pos: "noun",
                  meaning: "racket / uproar / clamor",
                },
              ],
              grammarNote: "Fenton marvels in amused disbelief at the deafening hullabaloo echoing through the house.",
            },
          ],
        },
        {
          id: "a2_s2_c163",
          speaker: "Nannetta",
          stageDirection: "avviandosi al paravento: Fenton la segue",
          stageDirectionTranslation: "heading toward the screen; Fenton follows her",
          lines: [
            {
              id: "a2_s2_c163_l1",
              original: "Quanti schiamazzi!",
              literal: "So much clamor!",
              tokens: [
                {
                  word: "Quanti",
                  lemma: "quanto",
                  pos: "adjective",
                  meaning: "how many / so much (exclamative determiner)",
                },
                {
                  word: "schiamazzi",
                  lemma: "schiamazzo",
                  pos: "noun",
                  meaning: "clamor / squawking / shrieking",
                },
              ],
              grammarNote: "Nannetta listens to the shouts of Ford and his men searching rooms elsewhere in the house.",
            },
            {
              id: "a2_s2_c163_l2",
              original: "Segui il mio passo.",
              literal: "Follow my step.",
              tokens: [
                {
                  word: "Segui",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follow (2nd person singular imperative)",
                },
                {
                  word: "passo",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "step / pace / footstep",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
              ],
              grammarNote: "Nannetta leads Fenton on tiptoe toward the folding screen.",
            },
          ],
        },
        {
          id: "a2_s2_c164",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c164_l1",
              original: "Casa di pazzi!",
              literal: "House of madmen!",
              tokens: [
                {
                  word: "Casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house / home",
                },
                {
                  word: "pazzi",
                  lemma: "pazzo",
                  pos: "noun",
                  meaning: "madmen / fools",
                },
              ],
              grammarNote: "Fenton wryly summarizes the chaotic madness of Ford's domestic fortress.",
            },
          ],
        },
        {
          id: "a2_s2_c165",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c165_l1",
              original: "Qui ognun delira",
              literal: "Here everyone is raving",
              tokens: [
                {
                  word: "Qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "ognun",
                  lemma: "ognuno",
                  pos: "pronoun",
                  meaning: "everyone / each one (apocopic form of ognuno)",
                },
                {
                  word: "delira",
                  lemma: "delirare",
                  pos: "verb",
                  meaning: "is delirious / raves (3rd person singular present)",
                },
              ],
              grammarNote: "Nannetta begins the serene, lyrical strophe of their love duet amidst the comic storm.",
            },
            {
              id: "a2_s2_c165_l2",
              original: "con vario error.",
              literal: "with various folly.",
              tokens: [
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "vario",
                  lemma: "vario",
                  pos: "adjective",
                  meaning: "various / diverse",
                },
                {
                  word: "error",
                  lemma: "errore",
                  pos: "noun",
                  meaning: "folly / madness / error (apocopic form of errore)",
                },
              ],
              grammarNote: "Poetic Italian usage: 'error' signifies mental aberration, moral blindness, or folly.",
            },
            {
              id: "a2_s2_c165_l3",
              original: "Son pazzi d'ira...",
              literal: "They are mad with rage...",
              tokens: [
                {
                  word: "Son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they are (apocopic form of sono)",
                },
                {
                  word: "pazzi",
                  lemma: "pazzo",
                  pos: "adjective",
                  meaning: "mad / crazy",
                },
                {
                  word: "ira",
                  lemma: "ira",
                  pos: "noun",
                  meaning: "rage / wrath / anger",
                },
                {
                  word: "d'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "with / of (elided)",
                },
              ],
              grammarNote: "Nannetta characterizes the frenzy of Ford and Caius as a destructive madness born of jealousy.",
            },
          ],
        },
        {
          id: "a2_s2_c166",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c166_l1",
              original: "E noi d'amor.",
              literal: "And we with love.",
              tokens: [
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we (subject pronoun)",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocopic form of amore)",
                },
                {
                  word: "d'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "with / of (elided)",
                },
              ],
              grammarNote: "Fenton matches Nannetta's poetic meter, identifying their own sweet madness of young love.",
            },
          ],
        },
        {
          id: "a2_s2_c167",
          speaker: "Nannetta",
          stageDirection: "lo prende per mano, lo conduce dietro il paravento e vi si nascondono",
          stageDirectionTranslation: "she takes him by the hand, leads him behind the screen, and they hide there",
          lines: [
            {
              id: "a2_s2_c167_l1",
              original: "Seguimi. Adagio.",
              literal: "Follow me. Gently.",
              tokens: [
                {
                  word: "Seguimi",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follow me (imperative segui + clitic pronoun mi)",
                },
                {
                  word: "Adagio",
                  lemma: "adagio",
                  pos: "adverb",
                  meaning: "gently / softly / slowly",
                },
              ],
              grammarNote: "Nannetta cautiously ushers Fenton behind the decorative tapestry screen where Falstaff previously hid.",
            },
          ],
        },
        {
          id: "a2_s2_c168",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c168_l1",
              original: "Nessun m'ha scorto.",
              literal: "No one has noticed me.",
              tokens: [
                {
                  word: "Nessun",
                  lemma: "nessuno",
                  pos: "pronoun",
                  meaning: "no one / nobody (apocopic form of nessuno)",
                },
                {
                  word: "scorto",
                  lemma: "scorgere",
                  pos: "verb",
                  meaning: "noticed / perceived (past participle of scorgere)",
                },
                {
                  word: "m'",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (elided clitic pronoun)",
                },
                {
                  word: "ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has (auxiliary verb)",
                },
              ],
              grammarNote: "Fenton expresses relief that Ford, who opposes his suit to Nannetta, has not spotted him in the house.",
            },
          ],
        },
        {
          id: "a2_s2_c169",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c169_l1",
              original: "Tocchiamo il porto.",
              literal: "We reach port.",
              tokens: [
                {
                  word: "Tocchiamo",
                  lemma: "toccare",
                  pos: "verb",
                  meaning: "we touch / reach (1st person plural present)",
                },
                {
                  word: "porto",
                  lemma: "porto",
                  pos: "noun",
                  meaning: "port / harbor / safe haven",
                },
                {
                  word: "il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
              ],
              grammarNote: "Metaphor of the safe harbor: behind the screen, the lovers have found temporary refuge from family surveillance.",
            },
          ],
        },
        {
          id: "a2_s2_c170",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c170_l1",
              original: "Siamo a nostr'agio.",
              literal: "We are at our ease.",
              tokens: [
                {
                  word: "Siamo",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (1st person plural present)",
                },
                {
                  word: "nostr'agio",
                  lemma: "agio",
                  pos: "idiom",
                  meaning: "at our ease / comfortably (a nostro agio)",
                },
                {
                  word: "agio",
                  lemma: "agio",
                  pos: "noun",
                  meaning: "ease / comfort / convenience",
                },
              ],
              grammarNote: "Fenton relishes the intimate privacy afforded by the screen amidst the surrounding chaos.",
            },
          ],
        },
        {
          id: "a2_s2_c171",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c171_l1",
              original: "Sta' zitto e attento.",
              literal: "Keep quiet and watchful.",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / keep (truncated imperative of stare)",
                },
                {
                  word: "zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "quiet / silent",
                },
                {
                  word: "attento",
                  lemma: "attento",
                  pos: "adjective",
                  meaning: "attentive / watchful / alert",
                },
              ],
              grammarNote: "Nannetta warns Fenton to remain on guard despite their momentary seclusion.",
            },
          ],
        },
        {
          id: "a2_s2_c172",
          speaker: "Fenton",
          stageDirection: "abbracciandola",
          stageDirectionTranslation: "embracing her",
          lines: [
            {
              id: "a2_s2_c172_l1",
              original: "Vien sul mio petto!",
              literal: "Come to my breast!",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (apocopic imperative of venire)",
                },
                {
                  word: "sul",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "to the / onto the (su + il)",
                },
                {
                  word: "petto",
                  lemma: "petto",
                  pos: "noun",
                  meaning: "breast / chest / bosom",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
              ],
              grammarNote: "Fenton draws Nannetta into an impassioned embrace behind the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c173",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c173_l1",
              original: "Il paravento",
              literal: "The screen",
              tokens: [
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "screen / folding screen",
                },
                {
                  word: "Il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Nannetta begins their rhyming couplet celebrating the folding screen that conceals their love.",
            },
            {
              id: "a2_s2_c173_l2",
              original: "sia benedetto!",
              literal: "be blessed!",
              tokens: [
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "be / may it be (3rd person singular present subjunctive)",
                },
                {
                  word: "benedetto",
                  lemma: "benedire",
                  pos: "adjective",
                  meaning: "blessed (past participle of benedire)",
                },
              ],
              grammarNote: "Nannetta invokes a mock blessing upon the folding screen for providing their clandestine shelter.",
            },
            {
              id: "a2_s2_c173_l3",
              original: "Nannetta e Fenton nascosti nel paravento.",
              literal: "Nannetta and Fenton hidden behind the screen.",
              tokens: [
                {
                  word: "nascosti",
                  lemma: "nascondere",
                  pos: "adjective",
                  meaning: "hidden (past participle of nascondere)",
                },
                {
                  word: "paravento",
                  lemma: "paravento",
                  pos: "noun",
                  meaning: "screen / folding screen",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "behind the / in the (in + il)",
                },
              ],
              grammarNote: "Stage direction confirming the young couple's hidden position, setting up the comic mistaken identity to follow.",
            },
            {
              id: "a2_s2_c173_l4",
              original: "Mr. Ford ed il Dr. Cajus da sinistra,",
              literal: "Mr. Ford and Dr. Caius from the left,",
              tokens: [
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left (stage left)",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from",
                },
                {
                  word: "ed",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and (euphonic form before vowels)",
                },
              ],
              grammarNote: "Stage direction describing Ford and Caius storming back into the main room from stage left.",
            },
            {
              id: "a2_s2_c173_l5",
              original: "Bardolfo e Pistola da destra con Gente del vicinato.",
              literal: "Bardolfo and Pistola from the right with people of the neighborhood.",
              tokens: [
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right (stage right)",
                },
                {
                  word: "Gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people",
                },
                {
                  word: "vicinato",
                  lemma: "vicinato",
                  pos: "noun",
                  meaning: "neighborhood",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
              ],
              grammarNote: "Stage direction depicting the armed neighbors and servants re-entering under the lead of Bardolfo and Pistola.",
            },
            {
              id: "a2_s2_c173_l6",
              original: "Quickly e Meg accanto alla cesta dove c'è Falstaff nascosto.",
              literal: "Quickly and Meg beside the hamper where Falstaff is hidden.",
              tokens: [
                {
                  word: "accanto",
                  lemma: "accanto",
                  pos: "preposition",
                  meaning: "beside / next to",
                },
                {
                  word: "cesta",
                  lemma: "cesta",
                  pos: "noun",
                  meaning: "hamper / basket",
                },
                {
                  word: "nascosto",
                  lemma: "nascondere",
                  pos: "adjective",
                  meaning: "hidden (past participle)",
                },
                {
                  word: "dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where",
                },
              ],
              grammarNote: "Stage direction emphasizing the comic spatial counterpoint: Falstaff suffocates in the hamper while Nannetta and Fenton whisper behind the screen.",
            },
            {
              id: "a2_s2_c173_l7",
              original: "Poi ritornerà Alice dal fondo.",
              literal: "Then Alice will return from the back.",
              tokens: [
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "ritornerà",
                  lemma: "ritornare",
                  pos: "verb",
                  meaning: "will return (3rd person singular future)",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "back / upstage",
                },
                {
                  word: "dal",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (da + il)",
                },
              ],
              grammarNote: "Stage direction marking Alice's imminent return from upstage after executing her scheme with the servants.",
            },
          ],
        },
        {
          id: "a2_s2_c174",
          speaker: "Dr. Caius",
          stageDirection: "urlando di dentro",
          stageDirectionTranslation: "screaming from within",
          lines: [
            {
              id: "a2_s2_c174_l1",
              original: "Al ladro!",
              literal: "Stop thief!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (traditional hue and cry exclamation)",
                },
                {
                  word: "ladro",
                  lemma: "ladro",
                  pos: "noun",
                  meaning: "thief",
                },
              ],
              grammarNote: "Dr. Caius enters shouting legalistic hue-and-cry formulas, conflating Falstaff's romantic intrusion with grand larceny.",
            },
          ],
        },
        {
          id: "a2_s2_c175",
          speaker: "Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a2_s2_c175_l1",
              original: "Al pagliardo!",
              literal: "To the lecher!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (hue and cry formula)",
                },
                {
                  word: "pagliardo",
                  lemma: "pagliardo",
                  pos: "noun",
                  meaning: "lecher / villain / rascal",
                },
              ],
              grammarNote: "Ford bellows an archaic insult derived from Old French 'paillard', targeting Falstaff's lustful deceit.",
            },
          ],
        },
        {
          id: "a2_s2_c176",
          speaker: "Dr. Caius",
          stageDirection: "entra, attraversando di corsa la sala",
          stageDirectionTranslation: "enters, running across the room",
          lines: [
            {
              id: "a2_s2_c176_l1",
              original: "Squartatelo!",
              literal: "Quarter him!",
              tokens: [
                {
                  word: "Squartatelo",
                  lemma: "squartare",
                  pos: "verb",
                  meaning: "quarter him (imperative squartate + clitic pronoun lo)",
                },
                {
                  word: "squartare",
                  lemma: "squartare",
                  pos: "verb",
                  meaning: "to quarter / tear to pieces",
                },
              ],
              grammarNote: "Dr. Caius's hysterical bloodthirstiness adds farcical exaggeration to the hunt.",
            },
          ],
        },
        {
          id: "a2_s2_c177",
          speaker: "Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a2_s2_c177_l1",
              original: "Al ladro!",
              literal: "Stop thief!",
              tokens: [
                {
                  word: "Al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (traditional hue and cry exclamation)",
                },
                {
                  word: "ladro",
                  lemma: "ladro",
                  pos: "noun",
                  meaning: "thief",
                },
              ],
              grammarNote: "Dr. Caius enters shouting legalistic hue-and-cry formulas, conflating Falstaff's romantic intrusion with grand larceny.",
            },
          ],
        },
        {
          id: "a2_s2_c178",
          speaker: "Ford",
          stageDirection: "incontrando Bardolfo e Pistola che corrono da destra",
          stageDirectionTranslation: "meeting Bardolfo and Pistola running from the right",
          lines: [
            {
              id: "a2_s2_c178_l1",
              original: "C'è?",
              literal: "Is he here?",
              tokens: [
                {
                  word: "c'",
                  lemma: "ci",
                  pos: "pronoun",
                  meaning: "there (locative pronoun ci, elided)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
              ],
              grammarNote: "Ford snaps out an inquiry to Bardolfo and Pistola to learn if their search yielded results.",
            },
          ],
        },
        {
          id: "a2_s2_c179",
          speaker: "Pistola",
          lines: [
            {
              id: "a2_s2_c179_l1",
              original: "No.",
              literal: "No.",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
              ],
              grammarNote: "Ford stubbornly denies his own foolishness.",
            },
          ],
        },
        {
          id: "a2_s2_c180",
          speaker: "Ford",
          stageDirection: "a Bardolfo",
          stageDirectionTranslation: "to Bardolfo",
          lines: [
            {
              id: "a2_s2_c180_l1",
              original: "C'è?",
              literal: "Is he here?",
              tokens: [
                {
                  word: "c'",
                  lemma: "ci",
                  pos: "pronoun",
                  meaning: "there (locative pronoun ci, elided)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
              ],
              grammarNote: "Ford snaps out an inquiry to Bardolfo and Pistola to learn if their search yielded results.",
            },
          ],
        },
        {
          id: "a2_s2_c181",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s2_c181_l1",
              original: "Non c'è, no.",
              literal: "He is not here, no.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "is here / there is (ci + è)",
                },
                {
                  word: "no",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
              ],
              grammarNote: "Bardolfo echoes Pistola's report with redundant emphasis.",
            },
          ],
        },
        {
          id: "a2_s2_c182",
          speaker: "Ford",
          stageDirection: "correndo, cercando e frugando nella cassapanca",
          stageDirectionTranslation: "running, searching and rummaging in the chest",
          lines: [
            {
              id: "a2_s2_c182_l1",
              original: "Vada a soqquadro la casa.",
              literal: "Let the house be turned upside down.",
              tokens: [
                {
                  word: "Vada",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "let it go (3rd person singular present subjunctive)",
                },
                {
                  word: "soqquadro",
                  lemma: "soqquadro",
                  pos: "noun",
                  meaning: "upheaval / chaos / topsy-turvy state",
                },
                {
                  word: "casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house",
                },
              ],
              grammarNote: "Frustrated by the lack of clues, Ford orders complete destruction of his own property to uncover the hidden knight.",
            },
          ],
        },
        {
          id: "a2_s2_c183",
          speaker: "Ford",
          stageDirection: "Bardolfo e Pistola escono da sinistra",
          stageDirectionTranslation: "Bardolfo and Pistola exit from the left",
          lines: [
          ],
        },
        {
          id: "a2_s2_c184",
          speaker: "Dr. Caius",
          stageDirection: "dopo aver guardato nel camino",
          stageDirectionTranslation: "after looking into the fireplace",
          lines: [
            {
              id: "a2_s2_c184_l1",
              original: "Non trovo nessuno.",
              literal: "I find no one.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "trovo",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "I find (1st person singular present)",
                },
                {
                  word: "nessuno",
                  lemma: "nessuno",
                  pos: "pronoun",
                  meaning: "no one / nobody",
                },
              ],
              grammarNote: "Dr. Caius admits his own frantic inspection of wardrobes and corners has been fruitless.",
            },
          ],
        },
        {
          id: "a2_s2_c185",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c185_l1",
              original: "Eppur giuro",
              literal: "And yet I swear",
              tokens: [
                {
                  word: "Eppur",
                  lemma: "eppure",
                  pos: "conjunction",
                  meaning: "and yet / nevertheless (apocopic form of eppure)",
                },
                {
                  word: "giuro",
                  lemma: "giurare",
                  pos: "verb",
                  meaning: "I swear (1st person singular present)",
                },
              ],
              grammarNote: "Ford refuses to question his informants' tips, stubbornly digging into his jealous conviction.",
            },
            {
              id: "a2_s2_c185_l2",
              original: "che l'uomo è qua dentro. Ne sono sicuro!",
              literal: "that the man is in here. Of it I am sure!",
              tokens: [
                {
                  word: "uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "adverb",
                  meaning: "inside / in here",
                },
                {
                  word: "Ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "of it / about it (pronominal particle ne)",
                },
                {
                  word: "sicuro",
                  lemma: "sicuro",
                  pos: "adjective",
                  meaning: "sure / certain",
                },
              ],
              grammarNote: "Ford's monomaniacal fixation: he cannot conceive that he might have been misinformed or outmaneuvered.",
            },
            {
              id: "a2_s2_c185_l3",
              original: "sicuro! sicuro!",
              literal: "sure! sure!",
              tokens: [
                {
                  word: "sicuro",
                  lemma: "sicuro",
                  pos: "adjective",
                  meaning: "sure / certain / confident",
                },
                {
                  word: "sicurezza",
                  lemma: "sicurezza",
                  pos: "noun",
                  meaning: "certainty / assurance",
                },
              ],
              grammarNote: "Ford's manic repetition underscores how completely his obsession dominates his rational mind.",
            },
          ],
        },
        {
          id: "a2_s2_c186",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c186_l1",
              original: "Sir John! Sarò gaio",
              literal: "Sir John! I will be joyful",
              tokens: [
                {
                  word: "Sir",
                  lemma: "Sir",
                  pos: "noun",
                  meaning: "Sir (title)",
                },
                {
                  word: "Sarò",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I will be (1st person singular future)",
                },
                {
                  word: "gaio",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "joyful / cheerful / merry",
                },
              ],
              grammarNote: "Dr. Caius gloats at the prospect of seeing his nemesis brought to the scaffold.",
            },
            {
              id: "a2_s2_c186_l2",
              original: "quel dì ch'io ti veda dar calci a rovaio!",
              literal: "that day when I see you kicking the north wind!",
              tokens: [
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "veda",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "I may see (1st person singular present subjunctive)",
                },
                {
                  word: "calci",
                  lemma: "calcio",
                  pos: "noun",
                  meaning: "kicks",
                },
                {
                  word: "rovaio",
                  lemma: "rovaio",
                  pos: "noun",
                  meaning: "north wind / cold tramontana",
                },
                {
                  word: "dar calci a rovaio",
                  lemma: "dar calci a rovaio",
                  pos: "idiom",
                  meaning: "to kick the north wind (to hang on the gallows)",
                },
              ],
              grammarNote: "Boito employs the colorful Tuscan idiom 'dar calci a rovaio' (to kick the north wind), a gruesome euphemism for hanging by the neck from the gallows.",
            },
          ],
        },
        {
          id: "a2_s2_c187",
          speaker: "Ford",
          stageDirection: "slanciandosi contro l'armadio e facendo sforzi per aprirlo",
          stageDirectionTranslation: "rushing to the wardrobe and straining to open it",
          lines: [
            {
              id: "a2_s2_c187_l1",
              original: "T'arrendi furfante! T'arrendi! O bombardo",
              literal: "Surrender rogue! Surrender! Or I bombard",
              tokens: [
                {
                  word: "T'arrendi",
                  lemma: "arrendersi",
                  pos: "verb",
                  meaning: "surrender (imperative ti + arrendi)",
                },
                {
                  word: "furfante",
                  lemma: "furfante",
                  pos: "noun",
                  meaning: "rogue / knave / villain",
                },
                {
                  word: "bombardo",
                  lemma: "bombardare",
                  pos: "verb",
                  meaning: "I bombard / shell (1st person singular present)",
                },
              ],
              grammarNote: "Ford adopts military siege rhetoric, treating his own parlor as a besieged fortress.",
            },
            {
              id: "a2_s2_c187_l2",
              original: "le mura!",
              literal: "the walls!",
              tokens: [
                {
                  word: "mura",
                  lemma: "muro",
                  pos: "noun",
                  meaning: "walls / ramparts (irregular feminine plural of muro)",
                },
                {
                  word: "le",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural definite article)",
                },
              ],
              grammarNote: "Conclusion of Ford's bombastic threat to reduce his own home to rubble.",
            },
          ],
        },
        {
          id: "a2_s2_c188",
          speaker: "Dr. Caius",
          stageDirection: "tenta aprire l'armadio co' le chiavi",
          stageDirectionTranslation: "tries to open the wardrobe with the keys",
          lines: [
            {
              id: "a2_s2_c188_l1",
              original: "T'arrendi!",
              literal: "Surrender!",
              tokens: [
                {
                  word: "T'arrendi",
                  lemma: "arrendersi",
                  pos: "verb",
                  meaning: "surrender (imperative ti + arrendi)",
                },
                {
                  word: "arrendere",
                  lemma: "arrendere",
                  pos: "verb",
                  meaning: "to surrender / yield",
                },
              ],
              grammarNote: "Dr. Caius seconds Ford's ultimatum with pompous fury.",
            },
          ],
        },
        {
          id: "a2_s2_c189",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c189_l1",
              original: "Vien fuora! Codardo!",
              literal: "Come out! Coward!",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (apocopic imperative of venire)",
                },
                {
                  word: "fuora",
                  lemma: "fuori",
                  pos: "adverb",
                  meaning: "out / outside (archaic form of fuori)",
                },
                {
                  word: "Codardo",
                  lemma: "codardo",
                  pos: "noun",
                  meaning: "coward",
                },
              ],
              grammarNote: "Ford challenges Falstaff to step into the open and face his wrath like a man.",
            },
            {
              id: "a2_s2_c189_l2",
              original: "Sugliardo!",
              literal: "Filthy swine!",
              tokens: [
                {
                  word: "Sugliardo",
                  lemma: "sugliardo",
                  pos: "noun",
                  meaning: "filthy swine / slob (archaic French souillard)",
                },
                {
                  word: "sugliardo",
                  lemma: "sugliardo",
                  pos: "adjective",
                  meaning: "squalid / filthy / base",
                },
              ],
              grammarNote: "Boito revitalizes an archaic burlesque insult ('sugliardo', from Old French 'souillard'), painting Falstaff as an unclean scullion.",
            },
          ],
        },
        {
          id: "a2_s2_c190",
          speaker: "Bardolfo & Pistola",
          stageDirection: "dalla porta di destra, di corsa",
          stageDirectionTranslation: "from the right door, running",
          lines: [
            {
              id: "a2_s2_c190_l1",
              original: "Nessuno!",
              literal: "No one!",
              tokens: [
                {
                  word: "Nessuno",
                  lemma: "nessuno",
                  pos: "pronoun",
                  meaning: "no one / nobody",
                },
                {
                  word: "nessuno",
                  lemma: "nessuno",
                  pos: "adjective",
                  meaning: "no / not any",
                },
              ],
              grammarNote: "Bardolfo and Pistola confirm from the other side of the room that their sweep found nothing.",
            },
          ],
        },
        {
          id: "a2_s2_c191",
          speaker: "Ford",
          stageDirection: "a Bardolfo e Pistola mentre continua a sforzare l'armadio col Dr. Cajus",
          stageDirectionTranslation: "to Bardolfo and Pistola while continuing to force open the wardrobe with Dr. Caius",
          lines: [
            {
              id: "a2_s2_c191_l1",
              original: "Cercatelo ancora!",
              literal: "Search for him again!",
              tokens: [
                {
                  word: "Cercatelo",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "search for him (imperative cercate + clitic pronoun lo)",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "again / once more",
                },
              ],
              grammarNote: "Unwilling to give up, Ford drives his men into a second, more frantic search.",
            },
          ],
        },
        {
          id: "a2_s2_c192",
          speaker: "Ford",
          stageDirection: "Bardolfo e Pistola ritornano subito donde erano venuti",
          stageDirectionTranslation: "Bardolfo and Pistola immediately return from where they had come",
          lines: [
          ],
        },
        {
          id: "a2_s2_c193",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c193_l1",
              original: "T'arrendi! Scanfardo!",
              literal: "Surrender! Scoundrel!",
              tokens: [
                {
                  word: "T'arrendi",
                  lemma: "arrendersi",
                  pos: "verb",
                  meaning: "surrender (imperative ti + arrendi)",
                },
                {
                  word: "Scanfardo",
                  lemma: "scanfardo",
                  pos: "noun",
                  meaning: "scoundrel / gluttonous knave",
                },
              ],
              grammarNote: "Another rare, colorful medieval-Renaissance insult retrieved by Boito to create a rhythmic onslaught of rhymes in '-ardo'.",
            },
          ],
        },
        {
          id: "a2_s2_c194",
          speaker: "Ford",
          stageDirection: "riesce finalmente ad aprire l'armadio",
          stageDirectionTranslation: "finally manages to open the wardrobe",
          lines: [
            {
              id: "a2_s2_c194_l1",
              original: "Non c'è!",
              literal: "He is not here!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is / he is here (ci + è)",
                },
              ],
              grammarNote: "Ford howls in rage as another corner yields no trace of Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c195",
          speaker: "Dr. Caius",
          stageDirection: "aprendo a sua volta la cassapanca",
          stageDirectionTranslation: "opening a sua volta la cassapanca",
          lines: [
            {
              id: "a2_s2_c195_l1",
              original: "Vieni fuori!",
              literal: "Come out!",
              tokens: [
                {
                  word: "Vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (2nd person singular imperative)",
                },
                {
                  word: "fuori",
                  lemma: "fuori",
                  pos: "adverb",
                  meaning: "out / outside",
                },
              ],
              grammarNote: "Dr. Caius screams into the room, brandishing his weapon at empty curtains.",
            },
            {
              id: "a2_s2_c195_l2",
              original: "Non c'è!",
              literal: "He is not here!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is / he is here (ci + è)",
                },
              ],
              grammarNote: "Ford howls in rage as another corner yields no trace of Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c196",
          speaker: "Dr. Caius",
          stageDirection: "gira per la sala sempre cercando e frugando",
          stageDirectionTranslation: "paces around the room, still searching and rummaging",
          lines: [
            {
              id: "a2_s2_c196_l1",
              original: "Pappalardo! Beon! Bada a te!",
              literal: "Glutton! Drunkard! Watch out for yourself!",
              tokens: [
                {
                  word: "Pappalardo",
                  lemma: "pappalardo",
                  pos: "noun",
                  meaning: "glutton / lard-eater / hypocrite",
                },
                {
                  word: "Beon",
                  lemma: "beone",
                  pos: "noun",
                  meaning: "drunkard / heavy drinker (apocopic form of beone)",
                },
                {
                  word: "Bada",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "watch out / beware (2nd person singular imperative)",
                },
                {
                  word: "a te",
                  lemma: "a te",
                  pos: "idiom",
                  meaning: "for yourself / watch your back",
                },
              ],
              grammarNote: "Dr. Caius insults Falstaff's voracious gluttony ('pappalardo', eater of lard) and notorious boozing ('beon').",
            },
          ],
        },
        {
          id: "a2_s2_c197",
          speaker: "Ford",
          stageDirection: "come un ossesso aprendo il cassetto del tavolino",
          stageDirectionTranslation: "like a man possessed, opening the drawer of the small table",
          lines: [
            {
              id: "a2_s2_c197_l1",
              original: "Scagnardo! Falsardo! Briccon!",
              literal: "Mean cur! Deceiver! Rogue!",
              tokens: [
                {
                  word: "Scagnardo",
                  lemma: "scagnardo",
                  pos: "noun",
                  meaning: "mean dog / foul cur (from scagno/cagna)",
                },
                {
                  word: "Falsardo",
                  lemma: "falsardo",
                  pos: "noun",
                  meaning: "deceiver / liar / treacherous cheat",
                },
                {
                  word: "Briccon",
                  lemma: "briccone",
                  pos: "noun",
                  meaning: "rogue / scoundrel (apocopic form of briccone)",
                },
              ],
              grammarNote: "Ford unleashes his final pair of inventive rhyming epithets ending in '-ardo' before the sudden stillness descends.",
            },
          ],
        },
        {
          id: "a2_s2_c198",
          speaker: "Ford",
          stageDirection: "Nannetta e Fenton sempre dietro il paravento, si saran fatte moine durante il frastuono",
          stageDirectionTranslation: "Nannetta and Fenton, still behind the screen, have been exchanging caresses during the uproar",
          lines: [
            {
              id: "a2_s2_c198_l1",
              original: "NANNETTA E FENTON",
              literal: "NANNETTA AND FENTON",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Character cue in the libretto identifying the lovers hidden behind the screen during the dramatic hush.",
            },
          ],
        },
        {
          id: "a2_s2_c199",
          speaker: "Ford",
          stageDirection: "si danno un bacio sonoro nel posto del verso marcato dall'asterisco",
          stageDirectionTranslation: "they exchange a loud kiss at the point in the verse marked with an asterisk",
          lines: [
            {
              id: "a2_s2_c199_l1",
              original: "(*)!",
              literal: "(*)! ",
              tokens: [
                {
                  word: "bacio",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kiss (the sonic cue indicated by the asterisk)",
                },
                {
                  word: "sonoro",
                  lemma: "sonoro",
                  pos: "adjective",
                  meaning: "loud / resounding",
                },
              ],
              grammarNote: "The asterisk indicates a loud, resounding kiss exchanged by Nannetta and Fenton, breaking the silence and electrifying Ford's attention.",
            },
          ],
        },
        {
          id: "a2_s2_c200",
          speaker: "Ford",
          stageDirection: "in questo punto è cessato il baccano e tutti sentono il sussurro del bacio",
          stageDirectionTranslation: "at this point the uproar ceases and everyone hears the sound of the kiss",
          lines: [
          ],
        },
        {
          id: "a2_s2_c201",
          speaker: "Ford",
          stageDirection: "sottovoce, guardando il paravento",
          stageDirectionTranslation: "in an undertone, looking at the screen",
          lines: [
            {
              id: "a2_s2_c201_l1",
              original: "C'è.",
              literal: "He is here.",
              tokens: [
                {
                  word: "c'",
                  lemma: "ci",
                  pos: "pronoun",
                  meaning: "there (locative pronoun ci, elided)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
              ],
              grammarNote: "Hearing the kiss from behind the screen, Ford freezes and whispers in sinister, breathless triumph.",
            },
          ],
        },
        {
          id: "a2_s2_c202",
          speaker: "Dr. Caius",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a2_s2_c202_l1",
              original: "C'è.",
              literal: "He is here.",
              tokens: [
                {
                  word: "c'",
                  lemma: "ci",
                  pos: "pronoun",
                  meaning: "there (locative pronoun ci, elided)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
              ],
              grammarNote: "Hearing the kiss from behind the screen, Ford freezes and whispers in sinister, breathless triumph.",
            },
            {
              id: "a2_s2_c202_l2",
              original: "Insieme",
              literal: "Together",
              tokens: [
                {
                  word: "Insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together / simultaneously",
                },
                {
                  word: "assieme",
                  lemma: "assieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Performance direction in the score marking the ensemble whispering passage between Ford, Dr. Caius, Bardolfo, and Pistola.",
            },
          ],
        },
        {
          id: "a2_s2_c203",
          speaker: "The Men",
          stageDirection: "intorno al paravento",
          stageDirectionTranslation: "around the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c204",
          speaker: "Ford",
          stageDirection: "avviandosi pian piano e cautamente al paravento insieme a Dr. Cajus",
          stageDirectionTranslation: "heading very quietly and cautiously toward the screen together with Dr. Caius",
          lines: [
            {
              id: "a2_s2_c204_l1",
              original: "Se t'agguanto!",
              literal: "If I grab you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "agguanto",
                  lemma: "agguantare",
                  pos: "verb",
                  meaning: "I grab / seize / clutch (1st person singular present)",
                },
              ],
              grammarNote: "Ford creeps silently toward the screen, muttering fierce conditional threats.",
            },
          ],
        },
        {
          id: "a2_s2_c205",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c205_l1",
              original: "Se ti piglio!",
              literal: "If I catch you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun)",
                },
                {
                  word: "piglio",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "I catch / seize / grasp (1st person singular present)",
                },
              ],
              grammarNote: "Dr. Caius matches Ford's stalking rhythm, whispering venomous promises of retribution.",
            },
          ],
        },
        {
          id: "a2_s2_c206",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c206_l1",
              original: "Se t'acciuffo!",
              literal: "If I collar you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "acciuffo",
                  lemma: "acciuffare",
                  pos: "verb",
                  meaning: "I collar / grab by the tuft or hair (1st person singular present)",
                },
              ],
              grammarNote: "'Acciuffare' literally means to seize by the tuft of hair ('ciuffo') or collar, emphasizing violent physical confrontation.",
            },
          ],
        },
        {
          id: "a2_s2_c207",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c207_l1",
              original: "Se t'acceffo!",
              literal: "If I smack your muzzle!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "acceffo",
                  lemma: "acceffare",
                  pos: "verb",
                  meaning: "I strike in the face / seize by the snout (1st person singular present)",
                },
              ],
              grammarNote: "'Acceffare' is a Tuscan colloquialism meaning to strike someone squarely across the muzzle ('ceffo').",
            },
          ],
        },
        {
          id: "a2_s2_c208",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c208_l1",
              original: "Ti sconquasso!",
              literal: "I will shatter you!",
              tokens: [
                {
                  word: "Ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun)",
                },
                {
                  word: "sconquasso",
                  lemma: "sconquassare",
                  pos: "verb",
                  meaning: "I shatter / smash / batter to pieces (1st person singular present)",
                },
              ],
              grammarNote: "Ford's whispered fury reaches a fever pitch as he stalks closer to the tapestry.",
            },
          ],
        },
        {
          id: "a2_s2_c209",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c209_l1",
              original: "T'arronciglio",
              literal: "I will claw you",
              tokens: [
                {
                  word: "T'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "arronciglio",
                  lemma: "arroncigliare",
                  pos: "verb",
                  meaning: "I hook / claw / bend like a talon (1st person singular present)",
                },
              ],
              grammarNote: "'Arroncigliare' evokes hooking or grappling someone with iron claws or talons ('ronciglio').",
            },
            {
              id: "a2_s2_c209_l2",
              original: "come un can!",
              literal: "like a dog!",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "un",
                  lemma: "un",
                  pos: "particle",
                  meaning: "a (masculine singular indefinite article)",
                },
                {
                  word: "can",
                  lemma: "cane",
                  pos: "noun",
                  meaning: "dog / hound (apocopic form of cane)",
                },
              ],
              grammarNote: "Dr. Caius finishes his whispered threat, treating the unseen lover like an animal to be mauled.",
            },
          ],
        },
        {
          id: "a2_s2_c210",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c210_l1",
              original: "Ti rompo il ceffo!",
              literal: "I will break your ugly mug!",
              tokens: [
                {
                  word: "Ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "to you / your (dative clitic pronoun)",
                },
                {
                  word: "rompo",
                  lemma: "rompere",
                  pos: "verb",
                  meaning: "I break / smash (1st person singular present)",
                },
                {
                  word: "ceffo",
                  lemma: "ceffo",
                  pos: "noun",
                  meaning: "ugly mug / snout / snout-like face",
                },
              ],
              grammarNote: "'Ceffo' is an animalistic term for a face, conveying Ford's visceral contempt.",
            },
          ],
        },
        {
          id: "a2_s2_c211",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c211_l1",
              original: "Guai a te!",
              literal: "Woe to you!",
              tokens: [
                {
                  word: "Guai",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "woe / troubles (used as an exclamation)",
                },
                {
                  word: "a te",
                  lemma: "a te",
                  pos: "idiom",
                  meaning: "to you / for you",
                },
              ],
              grammarNote: "Caius's menacing warning as the men prepare their ambush around the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c212",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c212_l1",
              original: "Prega il tuo santo!",
              literal: "Pray to your saint!",
              tokens: [
                {
                  word: "Prega",
                  lemma: "pregare",
                  pos: "verb",
                  meaning: "pray (2nd person singular imperative)",
                },
                {
                  word: "il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "santo",
                  lemma: "santo",
                  pos: "noun",
                  meaning: "saint / patron saint",
                },
              ],
              grammarNote: "Ford tells his rival to recommend his soul to heaven, as he intends to show no mercy.",
            },
          ],
        },
        {
          id: "a2_s2_c213",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c213_l1",
              original: "Guai se alfin con te m'azzuffo!",
              literal: "Woe if at last I brawl with you!",
              tokens: [
                {
                  word: "Guai",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "woe / trouble",
                },
                {
                  word: "alfin",
                  lemma: "alla fine",
                  pos: "adverb",
                  meaning: "at last / in the end (apocopic form of alfine)",
                },
                {
                  word: "azzuffo",
                  lemma: "azzuffarsi",
                  pos: "verb",
                  meaning: "I scuffle / brawl / come to blows (1st person singular present)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
              ],
              grammarNote: "Dr. Caius relishes the prospect of a physical brawl to settle his old grievances with the knight.",
            },
            {
              id: "a2_s2_c213_l2",
              original: "Se ti piglio!",
              literal: "If I catch you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun)",
                },
                {
                  word: "piglio",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "I catch / seize / grasp (1st person singular present)",
                },
              ],
              grammarNote: "Dr. Caius matches Ford's stalking rhythm, whispering venomous promises of retribution.",
            },
          ],
        },
        {
          id: "a2_s2_c214",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c214_l1",
              original: "Se t'agguanto!",
              literal: "If I grab you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "agguanto",
                  lemma: "agguantare",
                  pos: "verb",
                  meaning: "I grab / seize / clutch (1st person singular present)",
                },
              ],
              grammarNote: "Ford creeps silently toward the screen, muttering fierce conditional threats.",
            },
          ],
        },
        {
          id: "a2_s2_c215",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c215_l1",
              original: "Se t'acceffo!",
              literal: "If I smack your muzzle!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "acceffo",
                  lemma: "acceffare",
                  pos: "verb",
                  meaning: "I strike in the face / seize by the snout (1st person singular present)",
                },
              ],
              grammarNote: "'Acceffare' is a Tuscan colloquialism meaning to strike someone squarely across the muzzle ('ceffo').",
            },
          ],
        },
        {
          id: "a2_s2_c216",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c216_l1",
              original: "Se t'acciuffo!",
              literal: "If I collar you!",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (clitic direct object pronoun, elided)",
                },
                {
                  word: "acciuffo",
                  lemma: "acciuffare",
                  pos: "verb",
                  meaning: "I collar / grab by the tuft or hair (1st person singular present)",
                },
              ],
              grammarNote: "'Acciuffare' literally means to seize by the tuft of hair ('ciuffo') or collar, emphasizing violent physical confrontation.",
            },
          ],
        },
        {
          id: "a2_s2_c217",
          speaker: "Bardolfo",
          stageDirection: "rientrando da sinistra",
          stageDirectionTranslation: "re-entering from the left",
          lines: [
            {
              id: "a2_s2_c217_l1",
              original: "Non si trova.",
              literal: "He cannot be found.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "oneself (impersonal/passive particle)",
                },
                {
                  word: "trova",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "finds / is found (3rd person singular present)",
                },
              ],
              grammarNote: "Bardolfo mutters in resignation that Falstaff seems to have vanished into thin air.",
            },
          ],
        },
        {
          id: "a2_s2_c218",
          speaker: "Pistola",
          stageDirection: "rientrando con alcuni del vicinato",
          stageDirectionTranslation: "re-entering with some of the neighbors",
          lines: [
            {
              id: "a2_s2_c218_l1",
              original: "Non si coglie.",
              literal: "He cannot be caught.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "oneself (impersonal/passive particle)",
                },
                {
                  word: "coglie",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "catches / is caught (3rd person singular present)",
                },
              ],
              grammarNote: "Pistola matches Bardolfo's passive phrasing, baffled by their inability to trap Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c219",
          speaker: "Ford",
          stageDirection: "a Bardolfo, Pistola e loro compagni",
          stageDirectionTranslation: "to Bardolfo, Pistola e loro compagni",
          lines: [
            {
              id: "a2_s2_c219_l1",
              original: "Psss... Qua tutti.",
              literal: "Psss... Here, everyone.",
              tokens: [
                {
                  word: "Psss",
                  lemma: "psss",
                  pos: "interjection",
                  meaning: "psst / hush (whispered call for silence)",
                },
                {
                  word: "Qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "tutti",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "everyone / all",
                },
              ],
              grammarNote: "Ford summons his accomplices in a stage whisper, gesturing dramatically toward the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c220",
          speaker: "Ford",
          stageDirection: "sottovoce con mistero, indicando il paravento",
          stageDirectionTranslation: "in an undertone mysteriously, pointing to the screen",
          lines: [
            {
              id: "a2_s2_c220_l1",
              original: "L'ho trovato.",
              literal: "I have found him.",
              tokens: [
                {
                  word: "L'",
                  lemma: "il",
                  pos: "pronoun",
                  meaning: "him (elided direct object clitic pronoun lo)",
                },
                {
                  word: "ho",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "I have (1st person singular present auxiliary)",
                },
                {
                  word: "trovato",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "found (past participle of trovare)",
                },
              ],
              grammarNote: "Ford boasts of his supposed triumph, convinced he has trapped his cheating wife and her lover red-handed.",
            },
            {
              id: "a2_s2_c220_l2",
              original: "Là c'è Falstaff con mia moglie.",
              literal: "There is Falstaff with my wife.",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (ci + è)",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
              ],
              grammarNote: "The supreme irony of the scene: Ford points triumphantly at the folding screen, mistaking Nannetta and Fenton's stolen kiss for Alice and Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c221",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s2_c221_l1",
              original: "Sozzo can vituperato!",
              literal: "Filthy, reviled dog!",
              tokens: [
                {
                  word: "Sozzo",
                  lemma: "sozzo",
                  pos: "adjective",
                  meaning: "filthy / foul / dirty",
                },
                {
                  word: "can",
                  lemma: "cane",
                  pos: "noun",
                  meaning: "dog / hound (apocopic form of cane)",
                },
                {
                  word: "vituperato",
                  lemma: "vituperare",
                  pos: "adjective",
                  meaning: "reviled / abused / disgraced (past participle)",
                },
              ],
              grammarNote: "Bardolfo curses his former master with mercenary gusto, enthusiastically egging on Ford's vengeance.",
            },
          ],
        },
        {
          id: "a2_s2_c222",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c222_l1",
              original: "Zitto!",
              literal: "Hush!",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
                {
                  word: "zittire",
                  lemma: "zittire",
                  pos: "verb",
                  meaning: "to hush / silence / quiet",
                },
              ],
              grammarNote: "Ford frantically commands silence so their stealthy surround of the screen will catch the lovers off-guard.",
            },
            {
              id: "a2_s2_c222_l2",
              original: "Pistola e Dr. Cajus",
              literal: "Pistola and Dr. Caius",
              tokens: [
                {
                  word: "Pistola",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistola (Pistol, proper name)",
                },
                {
                  word: "Dr.",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Dr. / Doctor (title)",
                },
                {
                  word: "Cajus",
                  lemma: "Cajus",
                  pos: "noun",
                  meaning: "Caius (proper name)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Character speaker cue indicating Pistola and Dr. Caius whispering in unison as they advance on the screen.",
            },
            {
              id: "a2_s2_c222_l3",
              original: "Zitto!",
              literal: "Hush!",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
                {
                  word: "zittire",
                  lemma: "zittire",
                  pos: "verb",
                  meaning: "to hush / silence / quiet",
                },
              ],
              grammarNote: "Ford frantically commands silence so their stealthy surround of the screen will catch the lovers off-guard.",
            },
          ],
        },
        {
          id: "a2_s2_c223",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c223_l1",
              original: "Urlerai dopo.",
              literal: "You will scream later.",
              tokens: [
                {
                  word: "Urlerai",
                  lemma: "urlare",
                  pos: "verb",
                  meaning: "you will scream / shout (2nd sing. future)",
                },
                {
                  word: "dopo",
                  lemma: "dopo",
                  pos: "adverb",
                  meaning: "later / afterwards",
                },
              ],
              grammarNote: "Ford silences anyone attempting to delay him, grimly promising that screaming and retribution will follow once the house is ransacked.",
            },
            {
              id: "a2_s2_c223_l2",
              original: "Là s'è udito il suon d'un bacio.",
              literal: "There the sound of a kiss was heard.",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there / over there",
                },
                {
                  word: "s'è udito",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "was heard (passivizing 'si' with essere)",
                },
                {
                  word: "il suon",
                  lemma: "suono",
                  pos: "noun",
                  meaning: "the sound (apocope of suono)",
                },
                {
                  word: "bacio",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kiss",
                },
              ],
              grammarNote: "Ford freezes upon hearing kissing noises from behind the folding screen, instantly convinced that Alice is in Falstaff's embrace.",
            },
          ],
        },
        {
          id: "a2_s2_c224",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a2_s2_c224_l1",
              original: "Noi dobbiam pigliare il topo",
              literal: "We must catch the mouse",
              tokens: [
                {
                  word: "dobbiam",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "we must / have to (apocope of dobbiamo)",
                },
                {
                  word: "pigliare",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "to catch / seize / take",
                },
                {
                  word: "il topo",
                  lemma: "topo",
                  pos: "noun",
                  meaning: "the mouse / rat",
                },
              ],
              grammarNote: "Bardolfo joins the hunt with a feline predator metaphor, likening the search party to mousers cornering their prey.",
            },
            {
              id: "a2_s2_c224_l2",
              original: "mentre sta rodendo il cacio.",
              literal: "while it is gnawing the cheese.",
              tokens: [
                {
                  word: "mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / as",
                },
                {
                  word: "sta rodendo",
                  lemma: "rodere",
                  pos: "verb",
                  meaning: "is gnawing (progressive aspect: stare + gerund)",
                },
                {
                  word: "il cacio",
                  lemma: "cacio",
                  pos: "noun",
                  meaning: "the cheese",
                },
              ],
              grammarNote: "Bardolfo completes the proverbial mouse metaphor; 'rodere il cacio' depicts catching the adulterer in the very act of indulgence.",
            },
            {
              id: "a2_s2_c224_l3",
              original: "QUICKLY, MEG E FALSTAFF",
              literal: "Quickly, Meg and Falstaff",
              tokens: [
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (character name)",
                },
              ],
              grammarNote: "Score cue indicating the simultaneous shift of dramatic focus to the laundry basket where Quickly and Meg struggle to conceal Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c225",
          speaker: "Bardolfo",
          stageDirection: "intorno alla cesta",
          stageDirectionTranslation: "around the basket",
          lines: [
            {
              id: "a2_s2_c225_l1",
              original: "Quickly a Meg)",
              literal: "Quickly to Meg)",
              tokens: [
                {
                  word: "Quickly",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
              ],
              grammarNote: "Stage direction indicating Mrs. Quickly whispering hasty instructions to Meg as they tend to the laundry basket.",
            },
            {
              id: "a2_s2_c225_l2",
              original: "Facciamo le viste",
              literal: "Let us pretend",
              tokens: [
                {
                  word: "Facciamo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "let us make / let us do (1st pl. hortative present)",
                },
                {
                  word: "le viste",
                  lemma: "vista",
                  pos: "noun",
                  meaning: "appearances / pretense (plural of vista)",
                },
                {
                  word: "far le viste",
                  lemma: "fare le viste",
                  pos: "idiom",
                  meaning: "to pretend / make as if / feign",
                },
              ],
              grammarNote: "The idiom 'fare le viste di' means to make a pretense; Quickly instructs Meg to act natural by fussing with the linen.",
            },
            {
              id: "a2_s2_c225_l3",
              original: "d'attendere ai panni;",
              literal: "of tending to the clothes;",
              tokens: [
                {
                  word: "d'attendere",
                  lemma: "attendere",
                  pos: "verb",
                  meaning: "to attend to / apply oneself to (attendere a)",
                },
                {
                  word: "ai",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (preposition a + article i)",
                },
                {
                  word: "panni",
                  lemma: "panno",
                  pos: "noun",
                  meaning: "clothes / linens (plural)",
                },
              ],
              grammarNote: "The women pretend to fold and sort dirty laundry ('attendere ai panni') to conceal the fact that Falstaff is crammed inside the basket.",
            },
            {
              id: "a2_s2_c225_l4",
              original: "pur ch'ei non c'inganni",
              literal: "provided that he does not deceive us",
              tokens: [
                {
                  word: "pur che",
                  lemma: "purché",
                  pos: "conjunction",
                  meaning: "provided that / as long as (+ subjunctive)",
                },
                {
                  word: "ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (poetic form of egli)",
                },
                {
                  word: "c'inganni",
                  lemma: "ingannare",
                  pos: "verb",
                  meaning: "tricks us / deceives us (clitic ci + 3rd sing. subjunctive)",
                },
              ],
              grammarNote: "Quickly worries that Falstaff's clumsy thrashing might betray them; 'purché' triggers the subjunctive 'inganni'.",
            },
            {
              id: "a2_s2_c225_l5",
              original: "con mosse impreviste.",
              literal: "with unexpected moves.",
              tokens: [
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "mosse",
                  lemma: "mossa",
                  pos: "noun",
                  meaning: "moves / movements (plural)",
                },
                {
                  word: "impreviste",
                  lemma: "imprevisto",
                  pos: "adjective",
                  meaning: "unforeseen / unexpected (fem. pl.)",
                },
              ],
              grammarNote: "A sudden panic-induced shift from the massive knight could overturn the basket and expose the entire conspiracy.",
            },
            {
              id: "a2_s2_c225_l6",
              original: "Fin'or non s'accorse",
              literal: "Until now he did not notice",
              tokens: [
                {
                  word: "Fin'or",
                  lemma: "finora",
                  pos: "adverb",
                  meaning: "until now / so far (fino ad ora)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "s'accorse",
                  lemma: "accorgersi",
                  pos: "verb",
                  meaning: "noticed / realized (3rd sing. passato remoto)",
                },
              ],
              grammarNote: "Quickly notes with relief that Ford hasn't yet looked inside the laundry basket during his rampage through the room.",
            },
            {
              id: "a2_s2_c225_l7",
              original: "di nulla, egli può",
              literal: "anything, he may",
              tokens: [
                {
                  word: "di nulla",
                  lemma: "nulla",
                  pos: "pronoun",
                  meaning: "of anything / of nothing",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he",
                },
                {
                  word: "può",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "can / may (3rd sing. present)",
                },
              ],
              grammarNote: "The women assess Ford's erratic search; he has noticed nothing so far, though his unpredictable movements pose a constant hazard.",
            },
            {
              id: "a2_s2_c225_l8",
              original: "sorprenderci forse,",
              literal: "surprise us perhaps,",
              tokens: [
                {
                  word: "sorprenderci",
                  lemma: "sorprendere",
                  pos: "verb",
                  meaning: "to surprise us (infinitive + clitic ci)",
                },
                {
                  word: "forse",
                  lemma: "forse",
                  pos: "adverb",
                  meaning: "perhaps / maybe",
                },
              ],
              grammarNote: "Quickly admits Ford could burst upon them unawares, setting up the spirited contrast with the next line.",
            },
            {
              id: "a2_s2_c225_l9",
              original: "confonderci no.",
              literal: "confuse us, no.",
              tokens: [
                {
                  word: "confonderci",
                  lemma: "confondere",
                  pos: "verb",
                  meaning: "to confuse us / fluster us (infinitive + clitic ci)",
                },
                {
                  word: "no",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
              ],
              grammarNote: "A proud declaration of quick female wit: Ford may startle them physically, but he will never rattle their composure or outsmart them.",
            },
          ],
        },
        {
          id: "a2_s2_c226",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c226_l1",
              original: "Facciamogli siepe",
              literal: "Let us make a hedge for him",
              tokens: [
                {
                  word: "Facciamogli",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "let us make for him (hortative fare + dative clitic gli)",
                },
                {
                  word: "siepe",
                  lemma: "siepe",
                  pos: "noun",
                  meaning: "hedge / barrier / screen",
                },
                {
                  word: "far siepe",
                  lemma: "fare siepe",
                  pos: "idiom",
                  meaning: "to form a screen / shield someone from view",
                },
              ],
              grammarNote: "Meg urges forming a protective screen ('siepe') of their bodies and laundry around the basket to shield Falstaff from sight.",
            },
            {
              id: "a2_s2_c226_l2",
              original: "fra tanto scompiglio.",
              literal: "amid so much turmoil.",
              tokens: [
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "amid / among / between",
                },
                {
                  word: "tanto",
                  lemma: "tanto",
                  pos: "adjective",
                  meaning: "so much / such great",
                },
                {
                  word: "scompiglio",
                  lemma: "scompiglio",
                  pos: "noun",
                  meaning: "turmoil / confusion / disorder",
                },
              ],
              grammarNote: "Meg revels in the chaotic frenzy ('scompiglio') unfolding as Ford and his followers tear through chests and cupboards.",
            },
            {
              id: "a2_s2_c226_l3",
              original: "Ne' giuochi il periglio",
              literal: "In games danger",
              tokens: [
                {
                  word: "Ne'",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (poetic truncation of nei)",
                },
                {
                  word: "giuochi",
                  lemma: "giuoco",
                  pos: "noun",
                  meaning: "games / pranks (archaic variant of giochi)",
                },
                {
                  word: "il periglio",
                  lemma: "periglio",
                  pos: "noun",
                  meaning: "the danger / peril (poetic variant of pericolo)",
                },
              ],
              grammarNote: "Meg philosophizes on the nature of pranks; danger is not a deterrent, but the very element that makes games exhilarating.",
            },
            {
              id: "a2_s2_c226_l4",
              original: "è un grano di pepe.",
              literal: "is a peppercorn.",
              tokens: [
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "un grano",
                  lemma: "grano",
                  pos: "noun",
                  meaning: "a grain / peppercorn",
                },
                {
                  word: "di pepe",
                  lemma: "pepe",
                  pos: "noun",
                  meaning: "of pepper",
                },
              ],
              grammarNote: "A vibrant culinary metaphor: hazard adds spice and pungency to their practical joke, just like a peppercorn in a dish.",
            },
            {
              id: "a2_s2_c226_l5",
              original: "Il rischio è un diletto",
              literal: "Risk is a delight",
              tokens: [
                {
                  word: "Il rischio",
                  lemma: "rischio",
                  pos: "noun",
                  meaning: "the risk / danger",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "un diletto",
                  lemma: "diletto",
                  pos: "noun",
                  meaning: "a delight / pleasure",
                },
              ],
              grammarNote: "Meg gives voice to the Merry Wives' high-spirited courage; danger transforms into pure theatrical joy.",
            },
            {
              id: "a2_s2_c226_l6",
              original: "che accresce l'ardor,",
              literal: "that increases the ardor,",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (relative pronoun)",
                },
                {
                  word: "accresce",
                  lemma: "accrescere",
                  pos: "verb",
                  meaning: "increases / heightens",
                },
                {
                  word: "l'ardor",
                  lemma: "ardore",
                  pos: "noun",
                  meaning: "the ardor / passion / fervor (apocope of ardore)",
                },
              ],
              grammarNote: "Truncated 'ardor' emphasizes how heightened tension fuels their adventurous enthusiasm and adrenaline.",
            },
            {
              id: "a2_s2_c226_l7",
              original: "che stimola in petto",
              literal: "that stimulates in the breast",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which",
                },
                {
                  word: "stimola",
                  lemma: "stimolare",
                  pos: "verb",
                  meaning: "stimulates / stirs (3rd sing. present)",
                },
                {
                  word: "in petto",
                  lemma: "petto",
                  pos: "noun",
                  meaning: "in the breast / in the chest",
                },
              ],
              grammarNote: "Meg describes the physiological rush of their daring escapade, feeling her pulse race with mischievous excitement.",
            },
            {
              id: "a2_s2_c226_l8",
              original: "gli spirti e il cor.",
              literal: "the spirits and the heart.",
              tokens: [
                {
                  word: "gli spirti",
                  lemma: "spirto",
                  pos: "noun",
                  meaning: "the spirits / vital energies (poetic syncope of spiriti)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "il cor",
                  lemma: "core",
                  pos: "noun",
                  meaning: "the heart (poetic apocope of cuore/core)",
                },
              ],
              grammarNote: "Poetic forms 'spirti' and 'cor'; the danger invigorates both animal spirits (vital energy) and courage.",
            },
          ],
        },
        {
          id: "a2_s2_c227",
          speaker: "Sir John Falstaff",
          stageDirection: "sbucando con la faccia",
          stageDirectionTranslation: "poking his face out",
          lines: [
            {
              id: "a2_s2_c227_l1",
              original: "Affogo!",
              literal: "I am suffocating!",
              tokens: [
                {
                  word: "Affogo",
                  lemma: "affogare",
                  pos: "verb",
                  meaning: "I choke / suffocate / drown (1st sing. present)",
                },
                {
                  word: "affogare",
                  lemma: "affogare",
                  pos: "verb",
                  meaning: "to suffocate / choke / drown (infinitive)",
                },
              ],
              grammarNote: "Falstaff's panicked, muffled cry from deep inside the laundry basket, where he is smothering beneath piles of soiled linen.",
            },
          ],
        },
        {
          id: "a2_s2_c228",
          speaker: "Mrs. Quickly",
          stageDirection: "ricacciandolo giù",
          stageDirectionTranslation: "thrusting him back down",
          lines: [
            {
              id: "a2_s2_c228_l1",
              original: "Sta' sotto.",
              literal: "Stay underneath.",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / remain (imperative 2nd sing., apocope of stai)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "adverb",
                  meaning: "under / underneath / down",
                },
              ],
              grammarNote: "Quickly sternly orders the suffocating knight to stay buried, prioritizing concealment over his physical comfort.",
            },
          ],
        },
        {
          id: "a2_s2_c229",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c229_l1",
              original: "Or questi s'insorge.",
              literal: "Now this one is rising up.",
              tokens: [
                {
                  word: "Or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocope of ora)",
                },
                {
                  word: "questi",
                  lemma: "questi",
                  pos: "pronoun",
                  meaning: "this one (masculine singular demonstrative pronoun)",
                },
                {
                  word: "s'insorge",
                  lemma: "insorgere",
                  pos: "verb",
                  meaning: "rises up / rebels (reflexive 3rd sing.)",
                },
              ],
              grammarNote: "Meg comically uses the lofty political verb 'insorgere' (to revolt or rise up) to describe Falstaff struggling to poke his head out of the basket.",
            },
          ],
        },
        {
          id: "a2_s2_c230",
          speaker: "Mrs. Quickly",
          stageDirection: "abbassandosi e parlando a Falstaff sulla cesta",
          stageDirectionTranslation: "leaning down and speaking to Falstaff over the basket",
          lines: [
            {
              id: "a2_s2_c230_l1",
              original: "Se l'altro ti scorge",
              literal: "If the other one sees you",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "l'altro",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "the other one (referring to Ford)",
                },
                {
                  word: "ti scorge",
                  lemma: "scorgere",
                  pos: "verb",
                  meaning: "catches sight of you / spots you (clitic ti + 3rd sing.)",
                },
              ],
              grammarNote: "Quickly uses the terrifying threat of discovery by the jealous, sword-wielding Ford ('l'altro') to keep Falstaff submerged.",
            },
            {
              id: "a2_s2_c230_l2",
              original: "sei morto.",
              literal: "you are dead.",
              tokens: [
                {
                  word: "sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd sing. present)",
                },
                {
                  word: "morto",
                  lemma: "morto",
                  pos: "adjective",
                  meaning: "dead",
                },
              ],
              grammarNote: "Present tense 'sei morto' conveys immediate, inevitable slaughter should Ford turn his head toward the basket.",
            },
          ],
        },
        {
          id: "a2_s2_c231",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c231_l1",
              original: "Son cotto!",
              literal: "I am cooked!",
              tokens: [
                {
                  word: "Son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I am (apocope of sono)",
                },
                {
                  word: "cotto",
                  lemma: "cotto",
                  pos: "adjective",
                  meaning: "cooked / done for / overheated",
                },
                {
                  word: "esser cotto",
                  lemma: "essere cotto",
                  pos: "idiom",
                  meaning: "to be done for / to be sweltering",
                },
              ],
              grammarNote: "Comic double meaning: Falstaff is literally stewing in foul body heat inside the dirty laundry and figuratively done for ('cotto').",
            },
          ],
        },
        {
          id: "a2_s2_c232",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c232_l1",
              original: "Sta' sotto!",
              literal: "Stay underneath!",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / remain (imperative 2nd sing.)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "adverb",
                  meaning: "under / underneath / down",
                },
              ],
              grammarNote: "Meg repeats Quickly's command with brisk authority, slamming more sheets over the squirming knight.",
            },
          ],
        },
        {
          id: "a2_s2_c233",
          speaker: "Sir John Falstaff",
          stageDirection: "sbucando",
          stageDirectionTranslation: "popping out",
          lines: [
            {
              id: "a2_s2_c233_l1",
              original: "Che caldo!",
              literal: "What heat!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative)",
                },
                {
                  word: "caldo",
                  lemma: "caldo",
                  pos: "noun",
                  meaning: "heat / warmth",
                },
              ],
              grammarNote: "Falstaff groans in agony at the oppressive, stifling greenhouse temperature brewing inside the laundry hamper.",
            },
          ],
        },
        {
          id: "a2_s2_c234",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c234_l1",
              original: "Sta' sotto!",
              literal: "Stay underneath!",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / remain (imperative 2nd sing.)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "adverb",
                  meaning: "under / underneath / down",
                },
              ],
              grammarNote: "Meg repeats Quickly's command with brisk authority, slamming more sheets over the squirming knight.",
            },
          ],
        },
        {
          id: "a2_s2_c235",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a2_s2_c235_l1",
              original: "Mi squaglio!",
              literal: "I am melting!",
              tokens: [
                {
                  word: "Mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "myself (1st sing. reflexive pronoun)",
                },
                {
                  word: "squaglio",
                  lemma: "squagliare",
                  pos: "verb",
                  meaning: "I melt / liquefy (1st sing. present)",
                },
                {
                  word: "squagliarsi",
                  lemma: "squagliarsi",
                  pos: "verb",
                  meaning: "to melt away / dissolve (pronominal verb)",
                },
              ],
              grammarNote: "Falstaff comically imagines his enormous bulk of lard and fat liquefying completely under the pile of dirty wash.",
            },
            {
              id: "a2_s2_c235_l2",
              original: "Insieme",
              literal: "Together",
              tokens: [
                {
                  word: "Insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together / simultaneously",
                },
                {
                  word: "assieme",
                  lemma: "assieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Performance direction in the score marking the ensemble whispering passage between Ford, Dr. Caius, Bardolfo, and Pistola.",
            },
          ],
        },
        {
          id: "a2_s2_c236",
          speaker: "The Men",
          stageDirection: "intorno al paravento",
          stageDirectionTranslation: "around the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c237",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c237_l1",
              original: "Ragioniam. Colpo non vibro",
              literal: "Let us reason. I strike no blow",
              tokens: [
                {
                  word: "Ragioniam",
                  lemma: "ragionare",
                  pos: "verb",
                  meaning: "let us reason (1st pl. hortative present, apocope)",
                },
                {
                  word: "Colpo",
                  lemma: "colpo",
                  pos: "noun",
                  meaning: "blow / strike",
                },
                {
                  word: "vibro",
                  lemma: "vibrare",
                  pos: "verb",
                  meaning: "I strike / launch / aim (1st sing. present)",
                },
              ],
              grammarNote: "Across the room, Ford abruptly halts his frantic thrashing to play the role of a cool, calculating military strategist.",
            },
            {
              id: "a2_s2_c237_l2",
              original: "senza un piano di battaglia.",
              literal: "without a battle plan.",
              tokens: [
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "un piano",
                  lemma: "piano",
                  pos: "noun",
                  meaning: "a plan",
                },
                {
                  word: "di battaglia",
                  lemma: "battaglia",
                  pos: "noun",
                  meaning: "of battle",
                },
              ],
              grammarNote: "Ford parodies grand military campaigns; storming a simple folding screen in his own drawing room requires a meticulous tactical doctrine.",
            },
            {
              id: "a2_s2_c237_l3",
              original: "Gli altri",
              literal: "The others",
              tokens: [
                {
                  word: "Gli altri",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "the others (masculine plural)",
                },
                {
                  word: "altri",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "others",
                },
              ],
              grammarNote: "Choral entry indicating the ensemble of Ford's armed cronies and servants responding to his tactical orders.",
            },
            {
              id: "a2_s2_c237_l4",
              original: "Bravo.",
              literal: "Bravo.",
              tokens: [
                {
                  word: "Bravo",
                  lemma: "bravo",
                  pos: "interjection",
                  meaning: "bravo / well done! (acclamation)",
                },
                {
                  word: "bravo",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "worthy / capable / good",
                },
              ],
              grammarNote: "The men murmur hushed approval, eager to participate in Ford's self-important military maneuver.",
            },
          ],
        },
        {
          id: "a2_s2_c238",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c238_l1",
              original: "Un uom di quel calibro",
              literal: "A man of that caliber",
              tokens: [
                {
                  word: "Un uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "a man (apocope of uomo)",
                },
                {
                  word: "di quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "of that",
                },
                {
                  word: "calibro",
                  lemma: "calibro",
                  pos: "noun",
                  meaning: "caliber / bore / stature",
                },
              ],
              grammarNote: "Dr. Caius uses artillery terminology ('calibro'), comically referencing both Falstaff's fearsome reputation and his massive physical circumference.",
            },
            {
              id: "a2_s2_c238_l2",
              original: "con un soffio ci sbaraglia.",
              literal: "with a single breath routs us.",
              tokens: [
                {
                  word: "con un soffio",
                  lemma: "soffio",
                  pos: "noun",
                  meaning: "with a puff / breath",
                },
                {
                  word: "ci sbaraglia",
                  lemma: "sbaragliare",
                  pos: "verb",
                  meaning: "routs us / scatters us (clitic ci + 3rd sing.)",
                },
              ],
              grammarNote: "Caius warns of Falstaff's terrifying power; the verb 'sbaragliare' denotes scattering an opposing army in disarray.",
            },
          ],
        },
        {
          id: "a2_s2_c239",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c239_l1",
              original: "La mia tattica maestra",
              literal: "My masterly tactic",
              tokens: [
                {
                  word: "tattica",
                  lemma: "tattica",
                  pos: "noun",
                  meaning: "tactics / tactical scheme",
                },
                {
                  word: "maestra",
                  lemma: "maestro",
                  pos: "adjective",
                  meaning: "masterly / master (feminine singular)",
                },
              ],
              grammarNote: "Ford flatters his own strategic acumen; 'tattica maestra' frames his jealousy as the work of an accomplished field marshal.",
            },
            {
              id: "a2_s2_c239_l2",
              original: "le sue mosse pria registra.",
              literal: "first registers his moves.",
              tokens: [
                {
                  word: "mosse",
                  lemma: "mossa",
                  pos: "noun",
                  meaning: "moves / maneuvers (plural)",
                },
                {
                  word: "pria",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / beforehand (archaic form of prima)",
                },
                {
                  word: "registra",
                  lemma: "registrare",
                  pos: "verb",
                  meaning: "records / observes / anticipates (3rd sing. present)",
                },
              ],
              grammarNote: "Poetic adverb 'pria'; Ford claims his superior tactics predict and neutralize every possible enemy movement before action is taken.",
            },
          ],
        },
        {
          id: "a2_s2_c240",
          speaker: "Ford",
          stageDirection: "a Pistola e a due compagni",
          stageDirectionTranslation: "to Pistola e a due compagni",
          lines: [
            {
              id: "a2_s2_c240_l1",
              original: "Voi sarete l'ala destra,",
              literal: "You will be the right wing,",
              tokens: [
                {
                  word: "sarete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you will be (2nd pl. future)",
                },
                {
                  word: "l'ala",
                  lemma: "ala",
                  pos: "noun",
                  meaning: "the wing / flank",
                },
                {
                  word: "destra",
                  lemma: "destro",
                  pos: "adjective",
                  meaning: "right (feminine singular)",
                },
              ],
              grammarNote: "Ford divides his small posse into classical military formations, assigning one group to form the right flank ('ala destra').",
            },
          ],
        },
        {
          id: "a2_s2_c241",
          speaker: "Ford",
          stageDirection: "a Bardolfo e al Dr. Cajus",
          stageDirectionTranslation: "to Bardolfo and to Dr. Caius",
          lines: [
            {
              id: "a2_s2_c241_l1",
              original: "noi sarem l'ala sinistra,",
              literal: "we will be the left wing,",
              tokens: [
                {
                  word: "noi sarem",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we will be (1st pl. future, apocope of saremo)",
                },
                {
                  word: "l'ala",
                  lemma: "ala",
                  pos: "noun",
                  meaning: "the wing / flank",
                },
                {
                  word: "sinistra",
                  lemma: "sinistro",
                  pos: "adjective",
                  meaning: "left (feminine singular)",
                },
              ],
              grammarNote: "Apocopated future 'sarem'; Ford assigns himself to command the left flank in their ridiculous flanking operation around the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c242",
          speaker: "Ford",
          stageDirection: "agli altri compagni",
          stageDirectionTranslation: "to the other companions",
          lines: [
            {
              id: "a2_s2_c242_l1",
              original: "e costor con piè gagliardo",
              literal: "and these men with sturdy foot",
              tokens: [
                {
                  word: "costor",
                  lemma: "costoro",
                  pos: "pronoun",
                  meaning: "these men (apocope of costoro)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "piè",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "foot / step (poetic apocope of piede)",
                },
                {
                  word: "gagliardo",
                  lemma: "gagliardo",
                  pos: "adjective",
                  meaning: "sturdy / vigorous / bold",
                },
              ],
              grammarNote: "Ford orders the servants to form the center shock troop, advancing with bold, heavy strides ('piè gagliardo').",
            },
            {
              id: "a2_s2_c242_l2",
              original: "sfonderanno il baluardo.",
              literal: "will smash through the rampart.",
              tokens: [
                {
                  word: "sfonderanno",
                  lemma: "sfondare",
                  pos: "verb",
                  meaning: "they will break through / smash down (3rd pl. future)",
                },
                {
                  word: "il baluardo",
                  lemma: "baluardo",
                  pos: "noun",
                  meaning: "the rampart / bulwark / bastion",
                },
              ],
              grammarNote: "Ford grandly refers to the fragile decorative folding screen as a 'baluardo' (fortified rampart) to be breached by assault.",
            },
            {
              id: "a2_s2_c242_l3",
              original: "Tutti gli altri",
              literal: "All the others",
              tokens: [
                {
                  word: "Tutti",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all (masculine plural)",
                },
                {
                  word: "gli altri",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "the others",
                },
              ],
              grammarNote: "Ensemble cue indicating the full chorus of searchers answering Ford in hushed, dramatic unison.",
            },
            {
              id: "a2_s2_c242_l4",
              original: "Bravo.",
              literal: "Bravo.",
              tokens: [
                {
                  word: "Bravo",
                  lemma: "bravo",
                  pos: "interjection",
                  meaning: "bravo / well done! (acclamation)",
                },
                {
                  word: "bravo",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "worthy / capable / good",
                },
              ],
              grammarNote: "The men murmur hushed approval, eager to participate in Ford's self-important military maneuver.",
            },
          ],
        },
        {
          id: "a2_s2_c243",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c243_l1",
              original: "Bravo generale,",
              literal: "Bravo general,",
              tokens: [
                {
                  word: "Bravo",
                  lemma: "bravo",
                  pos: "adjective",
                  meaning: "bravo / fine / worthy",
                },
                {
                  word: "generale",
                  lemma: "generale",
                  pos: "noun",
                  meaning: "general / commander",
                },
              ],
              grammarNote: "Dr. Caius and the men humor Ford's delusions of grandeur by saluting him as their 'generale'.",
            },
            {
              id: "a2_s2_c243_l2",
              original: "aspettiamo un tuo segnale.",
              literal: "we await a signal from you.",
              tokens: [
                {
                  word: "aspettiamo",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "we await / are waiting for (1st pl. present)",
                },
                {
                  word: "un tuo",
                  lemma: "tuo",
                  pos: "pronoun",
                  meaning: "a your (possessive pronoun)",
                },
                {
                  word: "segnale",
                  lemma: "segnale",
                  pos: "noun",
                  meaning: "signal / cue",
                },
              ],
              grammarNote: "The men pledge strict obedience, awaiting Ford's command before storming the screen.",
            },
            {
              id: "a2_s2_c243_l3",
              original: "QUICKLY, MEG E FALSTAFF",
              literal: "Quickly, Meg and Falstaff",
              tokens: [
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (character name)",
                },
              ],
              grammarNote: "Score cue indicating the simultaneous shift of dramatic focus to the laundry basket where Quickly and Meg struggle to conceal Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c244",
          speaker: "Dr. Caius",
          stageDirection: "intorno alla cesta",
          stageDirectionTranslation: "around the basket",
          lines: [
          ],
        },
        {
          id: "a2_s2_c245",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c245_l1",
              original: "Sta' sotto!",
              literal: "Stay underneath!",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / remain (imperative 2nd sing.)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "adverb",
                  meaning: "under / underneath / down",
                },
              ],
              grammarNote: "Meg repeats Quickly's command with brisk authority, slamming more sheets over the squirming knight.",
            },
          ],
        },
        {
          id: "a2_s2_c246",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c246_l1",
              original: "Il ribaldo",
              literal: "The rogue",
              tokens: [
                {
                  word: "Il",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine singular definite article)",
                },
                {
                  word: "ribaldo",
                  lemma: "ribaldo",
                  pos: "noun",
                  meaning: "rogue / rascal / scoundrel",
                },
              ],
              grammarNote: "Meg turns back to the laundry basket, mockingly labeling the groaning Falstaff a 'ribaldo' (scoundrel/rogue).",
            },
            {
              id: "a2_s2_c246_l2",
              original: "vorrebbe un ventaglio.",
              literal: "would like a fan.",
              tokens: [
                {
                  word: "vorrebbe",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "would like / would want (3rd sing. conditional)",
                },
                {
                  word: "un ventaglio",
                  lemma: "ventaglio",
                  pos: "noun",
                  meaning: "a fan (hand fan)",
                },
              ],
              grammarNote: "Meg laughs at Falstaff's aristocratic delicacy; crammed into sweaty linen, the portly knight wishes for a gentle lady's fan.",
            },
          ],
        },
        {
          id: "a2_s2_c247",
          speaker: "Sir John Falstaff",
          stageDirection: "supplicante, col naso fuori",
          stageDirectionTranslation: "beseeching, with his nose sticking out",
          lines: [
            {
              id: "a2_s2_c247_l1",
              original: "Un breve spiraglio,",
              literal: "A brief opening,",
              tokens: [
                {
                  word: "Un breve",
                  lemma: "breve",
                  pos: "adjective",
                  meaning: "a brief / small / slight",
                },
                {
                  word: "spiraglio",
                  lemma: "spiraglio",
                  pos: "noun",
                  meaning: "chink / crack / breathing hole",
                },
              ],
              grammarNote: "Falstaff gasps for air, pleading not for freedom or dignity, but merely for a tiny crevice ('spiraglio') through which to breathe.",
            },
            {
              id: "a2_s2_c247_l2",
              original: "non chiedo di più.",
              literal: "I ask for nothing more.",
              tokens: [
                {
                  word: "non chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I do not ask (1st sing. present)",
                },
                {
                  word: "di più",
                  lemma: "più",
                  pos: "idiom",
                  meaning: "more / anything further",
                },
              ],
              grammarNote: "The once proud and boastful knight is humbled to the absolute minimum requirement of biological survival: oxygen.",
            },
          ],
        },
        {
          id: "a2_s2_c248",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c248_l1",
              original: "Ti metto il bavaglio",
              literal: "I will put a gag on you",
              tokens: [
                {
                  word: "Ti metto",
                  lemma: "mettere",
                  pos: "verb",
                  meaning: "I put on you (clitic ti + 1st sing. present)",
                },
                {
                  word: "il bavaglio",
                  lemma: "bavaglio",
                  pos: "noun",
                  meaning: "the gag / muzzle",
                },
              ],
              grammarNote: "Quickly has zero sympathy, threatening to muzzle him ('il bavaglio') with dirty rags if he utters another syllable.",
            },
            {
              id: "a2_s2_c248_l2",
              original: "se parli.",
              literal: "if you speak.",
              tokens: [
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "parli",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "you speak (2nd sing. present)",
                },
              ],
              grammarNote: "A sharp warning: silence is non-negotiable while Ford's search party is pacing across the parlor.",
            },
          ],
        },
        {
          id: "a2_s2_c249",
          speaker: "Meg Page",
          stageDirection: "ricacciandolo sotto la biancheria",
          stageDirectionTranslation: "shoving him back under the laundry",
          lines: [
            {
              id: "a2_s2_c249_l1",
              original: "Giù!",
              literal: "Down!",
              tokens: [
                {
                  word: "Giù",
                  lemma: "giù",
                  pos: "adverb",
                  meaning: "down / downward (spatial direction)",
                },
                {
                  word: "giù",
                  lemma: "giù",
                  pos: "interjection",
                  meaning: "down! / get down! (imperative exclamation)",
                },
              ],
              grammarNote: "Meg punctuates Quickly's threat by bodily shoving Falstaff's head back down into the depths of the laundry basket.",
            },
          ],
        },
        {
          id: "a2_s2_c250",
          speaker: "Mrs. Quickly",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a2_s2_c250_l1",
              original: "Giù!",
              literal: "Down!",
              tokens: [
                {
                  word: "Giù",
                  lemma: "giù",
                  pos: "adverb",
                  meaning: "down / downward (spatial direction)",
                },
                {
                  word: "giù",
                  lemma: "giù",
                  pos: "interjection",
                  meaning: "down! / get down! (imperative exclamation)",
                },
              ],
              grammarNote: "Meg punctuates Quickly's threat by bodily shoving Falstaff's head back down into the depths of the laundry basket.",
            },
            {
              id: "a2_s2_c250_l2",
              original: "NANNETTA E FENTON",
              literal: "NANNETTA AND FENTON",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Character cue in the libretto identifying the lovers hidden behind the screen during the dramatic hush.",
            },
          ],
        },
        {
          id: "a2_s2_c251",
          speaker: "Mrs. Quickly",
          stageDirection: "nel paravento",
          stageDirectionTranslation: "in the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c252",
          speaker: "Nannetta",
          stageDirection: "a Fenton",
          stageDirectionTranslation: "to Fenton",
          lines: [
            {
              id: "a2_s2_c252_l1",
              original: "Mentre quei vecchi",
              literal: "While those old men",
              tokens: [
                {
                  word: "Mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / as",
                },
                {
                  word: "quei",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "those (masculine plural)",
                },
                {
                  word: "vecchi",
                  lemma: "vecchio",
                  pos: "noun",
                  meaning: "old men (plural)",
                },
              ],
              grammarNote: "Behind the screen, Nannetta sings softly to Fenton, setting their pure, youthful romance apart from the absurd antics of the older men.",
            },
            {
              id: "a2_s2_c252_l2",
              original: "corron la giostra,",
              literal: "run the joust,",
              tokens: [
                {
                  word: "corron",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "run / race (3rd pl. present, apocope of corrono)",
                },
                {
                  word: "la giostra",
                  lemma: "giostra",
                  pos: "noun",
                  meaning: "the joust / tournament / merry-go-round",
                },
                {
                  word: "correr la giostra",
                  lemma: "correre la giostra",
                  pos: "idiom",
                  meaning: "to tilt at windmills / pursue a frantic contest",
                },
              ],
              grammarNote: "Nannetta ironically compares Ford's furious manhunt to a medieval tournament or frantic carousel ('giostra').",
            },
            {
              id: "a2_s2_c252_l3",
              original: "noi di sottecchi",
              literal: "we on the sly",
              tokens: [
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we",
                },
                {
                  word: "di sottecchi",
                  lemma: "di sottecchi",
                  pos: "idiom",
                  meaning: "on the sly / stealthily / covertly",
                },
                {
                  word: "sottecchi",
                  lemma: "sottecchi",
                  pos: "adverb",
                  meaning: "furtively / secretly",
                },
              ],
              grammarNote: "The adverbial phrase 'di sottecchi' captures the clandestine charm of stealing sweet kisses right under the noses of their pursuers.",
            },
            {
              id: "a2_s2_c252_l4",
              original: "corriam la nostra.",
              literal: "let us run ours.",
              tokens: [
                {
                  word: "corriam",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "let us run (1st pl. hortative present, apocope)",
                },
                {
                  word: "la nostra",
                  lemma: "nostro",
                  pos: "pronoun",
                  meaning: "ours (possessive referring to giostra)",
                },
              ],
              grammarNote: "Hortative 'corriam'; Nannetta invites Fenton to pursue their own tournament of affection and joy while the elders are occupied.",
            },
            {
              id: "a2_s2_c252_l5",
              original: "L'amor non ode",
              literal: "Love does not hear",
              tokens: [
                {
                  word: "L'amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "ode",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "hears / listens to (3rd sing. present)",
                },
              ],
              grammarNote: "Personification of Love as oblivious to worldly disturbance; genuine passion creates its own sacred sanctuary.",
            },
            {
              id: "a2_s2_c252_l6",
              original: "tuon né bufere,",
              literal: "thunder nor tempests,",
              tokens: [
                {
                  word: "tuon",
                  lemma: "tuono",
                  pos: "noun",
                  meaning: "thunder (apocope of tuono)",
                },
                {
                  word: "né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "nor / neither",
                },
                {
                  word: "bufere",
                  lemma: "bufera",
                  pos: "noun",
                  meaning: "tempests / blizzards / storms (plural)",
                },
              ],
              grammarNote: "Nannetta poeticizes the domestic commotion; Ford's bellowing and banging are dismissed as mere passing thunder and storms.",
            },
            {
              id: "a2_s2_c252_l7",
              original: "vola alle sfere",
              literal: "flies to the spheres",
              tokens: [
                {
                  word: "vola",
                  lemma: "volare",
                  pos: "verb",
                  meaning: "flies (3rd sing. present)",
                },
                {
                  word: "alle",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (preposition a + article le)",
                },
                {
                  word: "sfere",
                  lemma: "sfera",
                  pos: "noun",
                  meaning: "spheres / heavens (plural)",
                },
              ],
              grammarNote: "Echoing Dante and Petrarch, love ascends beyond mundane earthly pettiness to the celestial spheres of pure joy.",
            },
            {
              id: "a2_s2_c252_l8",
              original: "beate e gode.",
              literal: "blessed and rejoices.",
              tokens: [
                {
                  word: "beate",
                  lemma: "beato",
                  pos: "adjective",
                  meaning: "blessed / blissful (fem. pl.)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "gode",
                  lemma: "godere",
                  pos: "verb",
                  meaning: "rejoices / delights (3rd sing. present)",
                },
              ],
              grammarNote: "In the 'sfere beate', love attains timeless happiness ('gode'), contrasting sharply with the sweaty panic in the laundry basket.",
            },
          ],
        },
        {
          id: "a2_s2_c253",
          speaker: "Fenton",
          stageDirection: "a Nannetta",
          stageDirectionTranslation: "to Nannetta",
          lines: [
            {
              id: "a2_s2_c253_l1",
              original: "Bella! Ridente!",
              literal: "Beautiful! Radiant!",
              tokens: [
                {
                  word: "Bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair (feminine)",
                },
                {
                  word: "Ridente",
                  lemma: "ridente",
                  pos: "adjective",
                  meaning: "smiling / radiant / cheerful (present participle)",
                },
              ],
              grammarNote: "Fenton responds to Nannetta with tender vocative praises, enchanted by her radiant smile and youthful beauty.",
            },
            {
              id: "a2_s2_c253_l2",
              original: "Oh! come pieghi",
              literal: "Oh! how you yield",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "adverb",
                  meaning: "how / in what way",
                },
                {
                  word: "pieghi",
                  lemma: "piegare",
                  pos: "verb",
                  meaning: "you bend / incline / yield (2nd sing. present)",
                },
              ],
              grammarNote: "Fenton marvels at how gently Nannetta leans toward him in response to his romantic pleading.",
            },
            {
              id: "a2_s2_c253_l3",
              original: "verso i miei prieghi",
              literal: "toward my entreaties",
              tokens: [
                {
                  word: "verso",
                  lemma: "verso",
                  pos: "preposition",
                  meaning: "toward",
                },
                {
                  word: "i miei",
                  lemma: "mio",
                  pos: "pronoun",
                  meaning: "my (masculine plural)",
                },
                {
                  word: "prieghi",
                  lemma: "priegho",
                  pos: "noun",
                  meaning: "prayers / entreaties (poetic form of preghi/preghiere)",
                },
              ],
              grammarNote: "Poetic archaic 'prieghi'; Fenton frames his courtship in the elevated language of courtly Italian lyricism.",
            },
            {
              id: "a2_s2_c253_l4",
              original: "donnescamente!",
              literal: "with womanly grace!",
              tokens: [
                {
                  word: "donnescamente",
                  lemma: "donnescamente",
                  pos: "adverb",
                  meaning: "with womanly grace / in a womanly manner",
                },
              ],
              grammarNote: "A refined literary adverb (used by Dante and Boccaccio) denoting exquisite, dignified feminine sweetness.",
            },
          ],
        },
        {
          id: "a2_s2_c254",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c254_l1",
              original: "L'attimo ancora",
              literal: "The moment still",
              tokens: [
                {
                  word: "L'attimo",
                  lemma: "attimo",
                  pos: "noun",
                  meaning: "the moment / instant",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet / once more",
                },
              ],
              grammarNote: "Nannetta urges seizing the fleeting spark of time before their clandestine hiding place is discovered.",
            },
            {
              id: "a2_s2_c254_l2",
              original: "cogliam che brilla,",
              literal: "let us seize while it shines,",
              tokens: [
                {
                  word: "cogliam",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "let us pluck / seize (1st pl. hortative, apocope)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which",
                },
                {
                  word: "brilla",
                  lemma: "brillare",
                  pos: "verb",
                  meaning: "shines / sparkles (3rd sing. present)",
                },
              ],
              grammarNote: "Hortative 'cogliam'; classical 'carpe diem' motif celebrating love's luminous radiance amidst precarious surroundings.",
            },
            {
              id: "a2_s2_c254_l3",
              original: "è la scintilla",
              literal: "it is the spark",
              tokens: [
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "la scintilla",
                  lemma: "scintilla",
                  pos: "noun",
                  meaning: "the spark",
                },
              ],
              grammarNote: "Nannetta describes their stolen kiss as a spark of vital warmth against the cold opposition of their parents.",
            },
            {
              id: "a2_s2_c254_l4",
              original: "viva dell'ora.",
              literal: "alive of the hour.",
              tokens: [
                {
                  word: "viva",
                  lemma: "vivo",
                  pos: "adjective",
                  meaning: "living / vibrant / vivid",
                },
                {
                  word: "dell'ora",
                  lemma: "ora",
                  pos: "noun",
                  meaning: "of the hour (di + article + ora)",
                },
              ],
              grammarNote: "The phrase 'la scintilla viva dell'ora' conveys the pulse of the living moment that makes all danger fade away.",
            },
          ],
        },
        {
          id: "a2_s2_c255",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c255_l1",
              original: "Come ti vidi",
              literal: "As soon as I saw you",
              tokens: [
                {
                  word: "Come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as soon as / when",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (direct object clitic)",
                },
                {
                  word: "vidi",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "I saw (1st sing. passato remoto)",
                },
              ],
              grammarNote: "Fenton sings a timeless declaration of love at first sight, setting up the immediate flowering of his passion.",
            },
            {
              id: "a2_s2_c255_l2",
              original: "m'innamorai,",
              literal: "I fell in love,",
              tokens: [
                {
                  word: "m'innamorai",
                  lemma: "innamorarsi",
                  pos: "verb",
                  meaning: "I fell in love (reflexive 1st sing. passato remoto)",
                },
              ],
              grammarNote: "Passato remoto 'm'innamorai'; an instantaneous, unshakeable transformation of the heart.",
            },
            {
              id: "a2_s2_c255_l3",
              original: "e tu sorridi",
              literal: "and you smile",
              tokens: [
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "sorridi",
                  lemma: "sorridere",
                  pos: "verb",
                  meaning: "you smile (2nd sing. present)",
                },
              ],
              grammarNote: "Fenton notes Nannetta's playful, tender smile as she listens to his impassioned confession.",
            },
            {
              id: "a2_s2_c255_l4",
              original: "perché lo sai.",
              literal: "because you know it.",
              tokens: [
                {
                  word: "perché",
                  lemma: "perché",
                  pos: "conjunction",
                  meaning: "because",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it (direct object clitic)",
                },
                {
                  word: "sai",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "you know (2nd sing. present)",
                },
              ],
              grammarNote: "Nannetta smiles with knowing affection; there is complete, unspoken understanding between the two young lovers.",
            },
          ],
        },
        {
          id: "a2_s2_c256",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c256_l1",
              original: "Lo spiritello",
              literal: "The little spirit",
              tokens: [
                {
                  word: "Lo spiritello",
                  lemma: "spiritello",
                  pos: "noun",
                  meaning: "the little spirit / sprite / cupid",
                },
              ],
              grammarNote: "Diminutive 'spiritello' evokes Cupid or an ethereal sprite of romance hovering playfully around them.",
            },
            {
              id: "a2_s2_c256_l2",
              original: "d'amor volteggia.",
              literal: "of love flutters about.",
              tokens: [
                {
                  word: "d'amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "of love (apocope of amore)",
                },
                {
                  word: "volteggia",
                  lemma: "volteggiare",
                  pos: "verb",
                  meaning: "flutters / twirls / hovers (3rd sing. present)",
                },
              ],
              grammarNote: "'Volteggiare' captures the light, graceful fluttering of love's spirit, matching Verdi's delicate orchestral accompaniment.",
            },
          ],
        },
        {
          id: "a2_s2_c257",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c257_l1",
              original: "Già un sogno bello",
              literal: "Already a beautiful dream",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "un sogno",
                  lemma: "sogno",
                  pos: "noun",
                  meaning: "a dream",
                },
                {
                  word: "bello",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / lovely",
                },
              ],
              grammarNote: "Fenton looks forward to the realization of their hopes, dreaming of marriage despite Ford's obstinate resistance.",
            },
            {
              id: "a2_s2_c257_l2",
              original: "d'imene albeggia.",
              literal: "of hymen dawns.",
              tokens: [
                {
                  word: "d'imene",
                  lemma: "imene",
                  pos: "noun",
                  meaning: "of hymen / marriage (classical mythology)",
                },
                {
                  word: "albeggia",
                  lemma: "albeggiare",
                  pos: "verb",
                  meaning: "dawns / breaks day (3rd sing. present)",
                },
              ],
              grammarNote: "Classical mythological reference to Hymen (god of weddings); Fenton envisions the dawn ('albeggia') of their wedding day.",
            },
          ],
        },
        {
          id: "a2_s2_c258",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c258_l1",
              original: "Tutto delira,",
              literal: "Everything raves in delirium,",
              tokens: [
                {
                  word: "Tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "everything / all",
                },
                {
                  word: "delira",
                  lemma: "delirare",
                  pos: "verb",
                  meaning: "raves / is in ecstasy / is intoxicated (3rd sing. present)",
                },
              ],
              grammarNote: "Nannetta describes the ecstatic sensory overwhelm of young love, where reality dissolves into sweet enchantment.",
            },
            {
              id: "a2_s2_c258_l2",
              original: "sospiro e riso.",
              literal: "sigh and laughter.",
              tokens: [
                {
                  word: "sospiro",
                  lemma: "sospiro",
                  pos: "noun",
                  meaning: "sigh / yearning",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "riso",
                  lemma: "riso",
                  pos: "noun",
                  meaning: "laughter / smiling",
                },
              ],
              grammarNote: "The quintessential dual emotions of Italian lyric romance: the sigh of passionate longing paired with the laughter of joy.",
            },
            {
              id: "a2_s2_c258_l3",
              original: "Sorride il viso",
              literal: "The face smiles",
              tokens: [
                {
                  word: "Sorride",
                  lemma: "sorridere",
                  pos: "verb",
                  meaning: "smiles (3rd sing. present)",
                },
                {
                  word: "il viso",
                  lemma: "viso",
                  pos: "noun",
                  meaning: "the face / visage",
                },
              ],
              grammarNote: "Boito structures this stanza as a dazzling chiasmus: 'sospiro e riso' is reflected by 'sorride il viso'.",
            },
            {
              id: "a2_s2_c258_l4",
              original: "e il cor sospira.",
              literal: "and the heart sighs.",
              tokens: [
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "il cor",
                  lemma: "core",
                  pos: "noun",
                  meaning: "the heart (poetic apocope of cuore/core)",
                },
                {
                  word: "sospira",
                  lemma: "sospirare",
                  pos: "verb",
                  meaning: "sighs (3rd sing. present)",
                },
              ],
              grammarNote: "Completing the chiasmus from line 78; while the face smiles outward, the heart sighs inward with tender longing.",
            },
          ],
        },
        {
          id: "a2_s2_c259",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c259_l1",
              original: "Fra quelle ciglia",
              literal: "Beneath those eyelashes",
              tokens: [
                {
                  word: "Fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "between / beneath / among",
                },
                {
                  word: "quelle",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "those (feminine plural)",
                },
                {
                  word: "ciglia",
                  lemma: "ciglio",
                  pos: "noun",
                  meaning: "eyelashes / brows (irregular feminine plural of ciglio)",
                },
              ],
              grammarNote: "Fenton gazes deeply into Nannetta's eyes beneath her lashes; 'ciglia' is an irregular feminine collective plural.",
            },
            {
              id: "a2_s2_c259_l2",
              original: "vedo due fari",
              literal: "I see two beacons",
              tokens: [
                {
                  word: "vedo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "I see (1st sing. present)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two",
                },
                {
                  word: "fari",
                  lemma: "faro",
                  pos: "noun",
                  meaning: "beacons / lighthouses / shining lights (plural)",
                },
              ],
              grammarNote: "Petrarchan metaphor comparing the beloved's eyes to lighthouses ('fari') guiding the traveler across tempestuous waters.",
            },
            {
              id: "a2_s2_c259_l3",
              original: "a meraviglia",
              literal: "wonderfully",
              tokens: [
                {
                  word: "a meraviglia",
                  lemma: "a meraviglia",
                  pos: "idiom",
                  meaning: "wonderfully / marvelously / to perfection",
                },
                {
                  word: "meraviglia",
                  lemma: "meraviglia",
                  pos: "noun",
                  meaning: "marvel / wonder",
                },
              ],
              grammarNote: "Adverbial idiom 'a meraviglia'; the brightness and purity of her eyes are marvelous to behold.",
            },
            {
              id: "a2_s2_c259_l4",
              original: "sereni e chiari.",
              literal: "serene and clear.",
              tokens: [
                {
                  word: "sereni",
                  lemma: "sereno",
                  pos: "adjective",
                  meaning: "serene / calm / untroubled (masculine plural)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "chiari",
                  lemma: "chiaro",
                  pos: "adjective",
                  meaning: "clear / bright / luminous (masculine plural)",
                },
              ],
              grammarNote: "Modifying 'fari'; Fenton finds ultimate tranquility and moral clarity in Nannetta's loving gaze.",
            },
            {
              id: "a2_s2_c259_l5",
              original: "Insieme",
              literal: "Together",
              tokens: [
                {
                  word: "Insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together / simultaneously",
                },
                {
                  word: "assieme",
                  lemma: "assieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Performance direction in the score marking the ensemble whispering passage between Ford, Dr. Caius, Bardolfo, and Pistola.",
            },
          ],
        },
        {
          id: "a2_s2_c260",
          speaker: "The Men",
          stageDirection: "intorno al paravento",
          stageDirectionTranslation: "around the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c261",
          speaker: "Ford",
          stageDirection: "al Dr. Cajus accostando l'orecchio al paravento",
          stageDirectionTranslation: "to Dr. Caius, putting his ear to the screen",
          lines: [
            {
              id: "a2_s2_c261_l1",
              original: "Senti, accosta un po' l'orecchio!",
              literal: "Listen, bring your ear a bit closer!",
              tokens: [
                {
                  word: "Senti",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "listen / hear (imperative 2nd sing.)",
                },
                {
                  word: "accosta",
                  lemma: "accostare",
                  pos: "verb",
                  meaning: "bring close / approach (imperative 2nd sing.)",
                },
                {
                  word: "un po'",
                  lemma: "un po'",
                  pos: "idiom",
                  meaning: "a little / a bit (apocope of poco)",
                },
                {
                  word: "l'orecchio",
                  lemma: "orecchio",
                  pos: "noun",
                  meaning: "the ear",
                },
              ],
              grammarNote: "Abrupt shift from lyric sweetness back to farcical eavesdropping; Ford urges Caius to press his ear right up to the screen.",
            },
            {
              id: "a2_s2_c261_l2",
              original: "Che patetici lamenti!",
              literal: "What passionate laments!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / such (exclamative)",
                },
                {
                  word: "patetici",
                  lemma: "patetico",
                  pos: "adjective",
                  meaning: "passionate / touching / emotional (masculine plural)",
                },
                {
                  word: "lamenti",
                  lemma: "lamento",
                  pos: "noun",
                  meaning: "laments / sighs / amorous murmurs (plural)",
                },
              ],
              grammarNote: "Ford misinterprets the lovers' soft, tender sighs as the amorous pleadings of the lecherous Falstaff wooing Alice.",
            },
            {
              id: "a2_s2_c261_l3",
              original: "Là c'è Alice e qua c'è il vecchio",
              literal: "There is Alice and here is the old",
              tokens: [
                {
                  word: "Là c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (adverb là + ci + è)",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (character name)",
                },
                {
                  word: "qua c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "here is (adverb qua + ci + è)",
                },
                {
                  word: "il vecchio",
                  lemma: "vecchio",
                  pos: "noun",
                  meaning: "the old man",
                },
              ],
              grammarNote: "Deictics 'là' and 'qua' convey Ford's mistaken certainty; he is utterly convinced he has cornered Alice and her elderly seducer.",
            },
            {
              id: "a2_s2_c261_l4",
              original: "seduttore. Senti! senti!",
              literal: "seducer. Listen! listen!",
              tokens: [
                {
                  word: "seduttore",
                  lemma: "seduttore",
                  pos: "noun",
                  meaning: "seducer",
                },
                {
                  word: "Senti",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "listen / hear (imperative 2nd sing.)",
                },
              ],
              grammarNote: "Ford spits out the word 'seduttore' with venomous relish, repeating 'Senti! senti!' as his jealousy boils over.",
            },
            {
              id: "a2_s2_c261_l5",
              original: "Essi credon d'esser soli",
              literal: "They believe they are alone",
              tokens: [
                {
                  word: "Essi",
                  lemma: "essi",
                  pos: "pronoun",
                  meaning: "they (masculine plural subject pronoun)",
                },
                {
                  word: "credon",
                  lemma: "credere",
                  pos: "verb",
                  meaning: "they believe / think (3rd pl., apocope of credono)",
                },
                {
                  word: "d'esser",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "to be (infinitive with preposition di)",
                },
                {
                  word: "soli",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone (masculine plural)",
                },
              ],
              grammarNote: "Ford gloats in whispered triumph, convinced the couple behind the screen has no inkling that an armed posse surrounds them.",
            },
            {
              id: "a2_s2_c261_l6",
              original: "nel loro tenero abbandon.",
              literal: "in their tender abandon.",
              tokens: [
                {
                  word: "nel loro",
                  lemma: "loro",
                  pos: "pronoun",
                  meaning: "in their (preposition in + article + possessive)",
                },
                {
                  word: "tenero",
                  lemma: "tenero",
                  pos: "adjective",
                  meaning: "tender / affectionate",
                },
                {
                  word: "abbandon",
                  lemma: "abbandono",
                  pos: "noun",
                  meaning: "abandon / emotional surrender (apocope)",
                },
              ],
              grammarNote: "Ford sneers at their 'tenero abbandon' (amorous surrender), burning with rage at what he imagines to be his wife's betrayal.",
            },
            {
              id: "a2_s2_c261_l7",
              original: "Su quel nido d'usignuoli",
              literal: "Upon that nest of nightingales",
              tokens: [
                {
                  word: "Su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon / over / on",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "nido",
                  lemma: "nido",
                  pos: "noun",
                  meaning: "nest",
                },
                {
                  word: "d'usignuoli",
                  lemma: "usignuolo",
                  pos: "noun",
                  meaning: "of nightingales (archaic form of usignolo)",
                },
              ],
              grammarNote: "Ford sarcastically brands their hiding nook a 'nest of nightingales', mocking the soft cooing coming from behind the screen.",
            },
            {
              id: "a2_s2_c261_l8",
              original: "scoppierà fra poco il tuon.",
              literal: "thunder will explode shortly.",
              tokens: [
                {
                  word: "scoppierà",
                  lemma: "scoppiare",
                  pos: "verb",
                  meaning: "will explode / burst (3rd sing. future)",
                },
                {
                  word: "fra poco",
                  lemma: "fra poco",
                  pos: "idiom",
                  meaning: "shortly / in a little while / soon",
                },
                {
                  word: "il tuon",
                  lemma: "tuono",
                  pos: "noun",
                  meaning: "the thunder (apocope of tuono)",
                },
              ],
              grammarNote: "Ford promises catastrophic retribution; ironic counterpoint to Nannetta's earlier lyric line 'L'amor non ode tuon'.",
            },
          ],
        },
        {
          id: "a2_s2_c262",
          speaker: "Dr. Caius",
          stageDirection: "a Ford accostando l'orecchio al paravento",
          stageDirectionTranslation: "to Ford, pressing his ear against the screen",
          lines: [
            {
              id: "a2_s2_c262_l1",
              original: "Sento, intendo e vedo chiaro",
              literal: "I hear, I understand, and I see clearly",
              tokens: [
                {
                  word: "Sento",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "I hear / perceive (1st sing. present)",
                },
                {
                  word: "intendo",
                  lemma: "intendere",
                  pos: "verb",
                  meaning: "I understand / comprehend (1st sing. present)",
                },
                {
                  word: "e vedo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "and I see (1st sing. present)",
                },
                {
                  word: "chiaro",
                  lemma: "chiaro",
                  pos: "adverb",
                  meaning: "clearly",
                },
              ],
              grammarNote: "Dr. Caius chimes in with pompous arrogance, claiming to see through all female deception with infallible clarity.",
            },
            {
              id: "a2_s2_c262_l2",
              original: "delle femmine gl'inganni;",
              literal: "the deceptions of women;",
              tokens: [
                {
                  word: "delle femmine",
                  lemma: "femmina",
                  pos: "noun",
                  meaning: "of women / of females",
                },
                {
                  word: "gl'inganni",
                  lemma: "inganno",
                  pos: "noun",
                  meaning: "the deceptions / tricks (gli + inganni with elision)",
                },
              ],
              grammarNote: "Caius's misogynistic generalisation ('femmine' rather than 'donne'); Boito emphasizes the doctor's narrow-minded pedantry.",
            },
            {
              id: "a2_s2_c262_l3",
              original: "non vorrei, compare caro,",
              literal: "I would not wish, dear crony,",
              tokens: [
                {
                  word: "non vorrei",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I would not wish / want (1st sing. conditional)",
                },
                {
                  word: "compare",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "crony / gossip / godfather / friend",
                },
                {
                  word: "caro",
                  lemma: "caro",
                  pos: "adjective",
                  meaning: "dear",
                },
              ],
              grammarNote: "Caius addresses Ford condescendingly as 'compare caro', smugly pitying the cuckolded husband.",
            },
            {
              id: "a2_s2_c262_l4",
              original: "esser io ne' vostri panni.",
              literal: "to be in your clothes.",
              tokens: [
                {
                  word: "esser",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "to be (apocope of essere)",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "ne'",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (poetic form of nei)",
                },
                {
                  word: "vostri",
                  lemma: "vostro",
                  pos: "pronoun",
                  meaning: "your (possessive plural)",
                },
                {
                  word: "essere nei panni di",
                  lemma: "essere nei panni di",
                  pos: "idiom",
                  meaning: "to be in someone's shoes",
                },
              ],
              grammarNote: "Idiom 'essere nei panni di qualcuno' (to be in someone's shoes); glorious dramatic irony since Falstaff is literally suffocating in dirty clothes ('panni')!",
            },
            {
              id: "a2_s2_c262_l5",
              original: "Chi non sa ridur la moglie",
              literal: "Whoever does not know how to bring his wife",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who",
                },
                {
                  word: "non sa",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "does not know how to (3rd sing. present)",
                },
                {
                  word: "ridur",
                  lemma: "ridurre",
                  pos: "verb",
                  meaning: "to bring / reduce / lead (apocope of ridurre)",
                },
                {
                  word: "la moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "the wife",
                },
              ],
              grammarNote: "Caius pontificates on marital authority, blaming Ford for being too weak to keep his wife under strict subjection.",
            },
            {
              id: "a2_s2_c262_l6",
              original: "co' le buone alla ragion,",
              literal: "by gentle means to reason,",
              tokens: [
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (apocope of con / con le)",
                },
                {
                  word: "le buone",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "gentle means / kindness",
                },
                {
                  word: "alla ragion",
                  lemma: "ragione",
                  pos: "noun",
                  meaning: "to reason / sense (apocope of ragione)",
                },
                {
                  word: "con le buone",
                  lemma: "con le buone",
                  pos: "idiom",
                  meaning: "by peaceful/gentle means",
                },
              ],
              grammarNote: "The expression 'con le buone' refers to gentle persuasion or mild treatment, which Caius deems insufficient for unruly wives.",
            },
            {
              id: "a2_s2_c262_l7",
              original: "dovrà vincer le sue voglie",
              literal: "will have to overcome her whims",
              tokens: [
                {
                  word: "dovrà",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "will have to / must (3rd sing. future)",
                },
                {
                  word: "vincer",
                  lemma: "vincere",
                  pos: "verb",
                  meaning: "to conquer / overcome (apocope of vincere)",
                },
                {
                  word: "le sue",
                  lemma: "suo",
                  pos: "pronoun",
                  meaning: "her (possessive fem. pl.)",
                },
                {
                  word: "voglie",
                  lemma: "voglia",
                  pos: "noun",
                  meaning: "whims / cravings / desires (plural)",
                },
              ],
              grammarNote: "Caius advocates forceful subjugation of feminine desires ('voglie'), asserting tyrannical domestic control.",
            },
            {
              id: "a2_s2_c262_l8",
              original: "co' la frusta e col baston.",
              literal: "with the whip and with the stick.",
              tokens: [
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (apocope of con)",
                },
                {
                  word: "la frusta",
                  lemma: "frusta",
                  pos: "noun",
                  meaning: "the whip / lash",
                },
                {
                  word: "e col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "and with the (con + il)",
                },
                {
                  word: "baston",
                  lemma: "bastone",
                  pos: "noun",
                  meaning: "stick / cudgel (apocope of bastone)",
                },
              ],
              grammarNote: "Caius's archaic, brutal prescription of corporal punishment ('frusta e baston') makes him thoroughly ridiculous and unsympathetic.",
            },
          ],
        },
        {
          id: "a2_s2_c263",
          speaker: "Bardolfo",
          stageDirection: "a Pistola",
          stageDirectionTranslation: "to Pistola",
          lines: [
            {
              id: "a2_s2_c263_l1",
              original: "Vieni qua, fatti più presso;",
              literal: "Come here, draw closer;",
              tokens: [
                {
                  word: "Vieni qua",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come here (imperative 2nd sing. + adverb)",
                },
                {
                  word: "fatti",
                  lemma: "farsi",
                  pos: "verb",
                  meaning: "make yourself / draw (imperative 2nd sing. + reflexive ti)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "presso",
                  lemma: "presso",
                  pos: "adverb",
                  meaning: "near / close",
                },
              ],
              grammarNote: "Bardolfo whispers excitedly to Ford, gesturing for him to creep closer to the screen to eavesdrop on the lovers.",
            },
            {
              id: "a2_s2_c263_l2",
              original: "vieni a udir gli ascosi amanti.",
              literal: "come to hear the hidden lovers.",
              tokens: [
                {
                  word: "vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (imperative 2nd sing.)",
                },
                {
                  word: "a udir",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "to hear / listen to (apocope of udire)",
                },
                {
                  word: "gli ascosi",
                  lemma: "ascoso",
                  pos: "adjective",
                  meaning: "the hidden / concealed (poetic past participle of ascondere)",
                },
                {
                  word: "amanti",
                  lemma: "amante",
                  pos: "noun",
                  meaning: "lovers (plural)",
                },
              ],
              grammarNote: "Poetic adjective 'ascosi' (concealed); Bardolfo relishes the titillating spectacle of tracking down the secret lovers.",
            },
            {
              id: "a2_s2_c263_l3",
              original: "S'ode un murmure sommesso",
              literal: "A subdued murmur is heard",
              tokens: [
                {
                  word: "S'ode",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "is heard (passivizing 'si' + 3rd sing. present ode)",
                },
                {
                  word: "un murmure",
                  lemma: "murmure",
                  pos: "noun",
                  meaning: "a murmur / whisper (Latinate poetic variant of mormorio)",
                },
                {
                  word: "sommesso",
                  lemma: "sommesso",
                  pos: "adjective",
                  meaning: "subdued / hushed / low",
                },
              ],
              grammarNote: "Boito uses Latinate 'murmure'; Bardolfo listens intently to the delicate, breathless whispering filtering from behind the screen.",
            },
            {
              id: "a2_s2_c263_l4",
              original: "qual di tortore tubanti.",
              literal: "like that of cooing turtledoves.",
              tokens: [
                {
                  word: "qual",
                  lemma: "quale",
                  pos: "adverb",
                  meaning: "like / as (apocope of quale)",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "tortore",
                  lemma: "tortora",
                  pos: "noun",
                  meaning: "turtledoves (plural)",
                },
                {
                  word: "tubanti",
                  lemma: "tubare",
                  pos: "adjective",
                  meaning: "cooing (present participle plural of tubare)",
                },
              ],
              grammarNote: "Poetic simile comparing the lovers' billing and cooing to turtledoves ('tortore tubanti'), standard emblem of romantic devotion.",
            },
            {
              id: "a2_s2_c263_l5",
              original: "È un fruscio che par di gonna,",
              literal: "It is a rustle that seems of a skirt,",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "it is (3rd sing. present)",
                },
                {
                  word: "un fruscio",
                  lemma: "fruscio",
                  pos: "noun",
                  meaning: "a rustle / swish",
                },
                {
                  word: "che par",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "that seems / appears (apocope of pare)",
                },
                {
                  word: "gonna",
                  lemma: "gonna",
                  pos: "noun",
                  meaning: "skirt / gown",
                },
              ],
              grammarNote: "Bardolfo picks up the sound of fabric rustling ('fruscio di gonna'), which convinces the eavesdroppers that a woman is moving behind the screen.",
            },
            {
              id: "a2_s2_c263_l6",
              original: "un fruscio vago e legger;",
              literal: "a vague and light rustling;",
              tokens: [
                {
                  word: "fruscio",
                  lemma: "fruscio",
                  pos: "noun",
                  meaning: "rustle / rustling",
                },
                {
                  word: "vago",
                  lemma: "vago",
                  pos: "adjective",
                  meaning: "vague / faint / gentle",
                },
                {
                  word: "legger",
                  lemma: "leggero",
                  pos: "adjective",
                  meaning: "light / delicate (poetic apocope of leggero)",
                },
              ],
              grammarNote: "Bardolfo describes the soft whispers behind the screen, misinterpreting Fenton and Nannetta's tender reconciliation as Falstaff wooing Alice. Note the poetic apocope 'legger' for 'leggero'.",
            },
            {
              id: "a2_s2_c263_l7",
              original: "è la voce della donna",
              literal: "it is the voice of the woman",
              tokens: [
                {
                  word: "voce",
                  lemma: "voce",
                  pos: "noun",
                  meaning: "voice",
                },
                {
                  word: "della",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + la)",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman / lady",
                },
              ],
              grammarNote: "Bardolfo assumes the feminine whisper behind the screen belongs to Alice Ford, confirming to his conspirators that the rendezvous is underway.",
            },
            {
              id: "a2_s2_c263_l8",
              original: "che risponde al cavalier.",
              literal: "who answers the knight.",
              tokens: [
                {
                  word: "risponde",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "answers / replies (3rd sing. present)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "cavalier",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / gentleman (apocope of cavaliere)",
                },
              ],
              grammarNote: "Relative clause modifying 'donna'. Bardolfo uses the mock-heroic title 'cavalier' to refer to Falstaff, unaware of who is truly hiding behind the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c264",
          speaker: "Pistola",
          stageDirection: "a Bardolfo",
          stageDirectionTranslation: "to Bardolfo",
          lines: [
            {
              id: "a2_s2_c264_l1",
              original: "Odi come amor lo cuoce!",
              literal: "Hear how love burns him!",
              tokens: [
                {
                  word: "Odi",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "hear / listen (2nd sing. imperative)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "adverb",
                  meaning: "how",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "cuoce",
                  lemma: "cuocere",
                  pos: "verb",
                  meaning: "cooks / burns / consumes (3rd sing. present)",
                },
              ],
              grammarNote: "Pistola relishes Falstaff's supposed passion with the culinary metaphor 'amor lo cuoce' (love is cooking/burning him), highlighting the comic dramatic irony.",
            },
            {
              id: "a2_s2_c264_l2",
              original: "Pare Alfeo con Aretusa.",
              literal: "He seems Alpheus with Arethusa.",
              tokens: [
                {
                  word: "Pare",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "seems / appears (3rd sing. present)",
                },
                {
                  word: "Alfeo",
                  lemma: "Alfeo",
                  pos: "noun",
                  meaning: "Alpheus (mythological river god)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "Aretusa",
                  lemma: "Aretusa",
                  pos: "noun",
                  meaning: "Arethusa (mythological nymph)",
                },
              ],
              grammarNote: "Pistola creates a high-flown mythological simile, comparing the fat knight pursuing Alice to the river god Alpheus relentlessly pursuing the nymph Arethusa.",
            },
            {
              id: "a2_s2_c264_l3",
              original: "Quella gonfia cornamusa",
              literal: "That swollen bagpipe",
              tokens: [
                {
                  word: "Quella",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "gonfia",
                  lemma: "gonfio",
                  pos: "adjective",
                  meaning: "swollen / inflated / puffed up",
                },
                {
                  word: "cornamusa",
                  lemma: "cornamusa",
                  pos: "noun",
                  meaning: "bagpipe",
                },
              ],
              grammarNote: "Pistola mocks Falstaff's corpulent physique by comparing him to an overinflated bagpipe ('gonfia cornamusa') wheezing out romantic sighs.",
            },
            {
              id: "a2_s2_c264_l4",
              original: "manda fuori un fil di voce.",
              literal: "sends forth a tiny thread of voice.",
              tokens: [
                {
                  word: "manda",
                  lemma: "mandare",
                  pos: "verb",
                  meaning: "sends / emits (3rd sing. present)",
                },
                {
                  word: "fuori",
                  lemma: "fuori",
                  pos: "adverb",
                  meaning: "out / forth",
                },
                {
                  word: "fil",
                  lemma: "filo",
                  pos: "noun",
                  meaning: "thread / whisper (apocope of filo)",
                },
                {
                  word: "voce",
                  lemma: "voce",
                  pos: "noun",
                  meaning: "voice",
                },
              ],
              grammarNote: "The idiom 'un fil di voce' denotes an extremely faint or hushed whisper, comically contrasting with the enormous physical bulk of the 'cornamusa'.",
            },
            {
              id: "a2_s2_c264_l5",
              original: "Ma fra poco il lieto gioco",
              literal: "But shortly the happy game",
              tokens: [
                {
                  word: "fra poco",
                  lemma: "fra poco",
                  pos: "idiom",
                  meaning: "shortly / in a little while / soon",
                },
                {
                  word: "lieto",
                  lemma: "lieto",
                  pos: "adjective",
                  meaning: "happy / merry / joyful",
                },
                {
                  word: "gioco",
                  lemma: "gioco",
                  pos: "noun",
                  meaning: "game / sport / dalliance",
                },
              ],
              grammarNote: "Pistola relishes the impending catastrophe awaiting the lovers. 'Fra poco' acts as a temporal adverbial indicating swift retribution.",
            },
            {
              id: "a2_s2_c264_l6",
              original: "turberà dura lezion.",
              literal: "a harsh lesson will disturb.",
              tokens: [
                {
                  word: "turberà",
                  lemma: "turbare",
                  pos: "verb",
                  meaning: "will disturb / disrupt (3rd sing. future)",
                },
                {
                  word: "dura",
                  lemma: "duro",
                  pos: "adjective",
                  meaning: "harsh / severe / hard",
                },
                {
                  word: "lezion",
                  lemma: "lezione",
                  pos: "noun",
                  meaning: "lesson (apocope of lezione)",
                },
              ],
              grammarNote: "Inverted syntax: the subject 'dura lezion' (with apocope of 'lezione') follows the transitive future verb 'turberà', whose direct object was 'il lieto gioco'.",
            },
            {
              id: "a2_s2_c264_l7",
              original: "Egli canta, ma fra poco",
              literal: "He sings, but shortly",
              tokens: [
                {
                  word: "Egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (3rd sing. subject pronoun)",
                },
                {
                  word: "canta",
                  lemma: "cantare",
                  pos: "verb",
                  meaning: "sings (3rd sing. present)",
                },
                {
                  word: "fra poco",
                  lemma: "fra poco",
                  pos: "idiom",
                  meaning: "shortly / soon",
                },
              ],
              grammarNote: "Pistola scoffs at Falstaff's romantic song ('egli canta'), anticipating the rude shock when Ford corners him.",
            },
            {
              id: "a2_s2_c264_l8",
              original: "muterà la sua canzon.",
              literal: "he will change his tune.",
              tokens: [
                {
                  word: "muterà",
                  lemma: "mutare",
                  pos: "verb",
                  meaning: "will change / alter (3rd sing. future)",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive adjective)",
                },
                {
                  word: "canzon",
                  lemma: "canzone",
                  pos: "noun",
                  meaning: "song / tune (apocope of canzone)",
                },
              ],
              grammarNote: "Idiomatic Italian 'mutare canzone' corresponds to English 'to change one's tune', foreshadowing Falstaff's screams when surprised.",
            },
            {
              id: "a2_s2_c264_l9",
              original: "QUICKLY E MEG",
              literal: "QUICKLY AND MEG",
              tokens: [
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
              ],
              grammarNote: "Libretto character heading marking the duet between Meg Page and Mrs. Quickly as they stand guard over the laundry basket.",
            },
          ],
        },
        {
          id: "a2_s2_c265",
          speaker: "Pistola",
          stageDirection: "intorno alla cesta",
          stageDirectionTranslation: "around the basket",
          lines: [
          ],
        },
        {
          id: "a2_s2_c266",
          speaker: "Meg Page",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a2_s2_c266_l1",
              original: "Sta' zitta! Se ridi,",
              literal: "Be quiet! If you laugh,",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / be (2nd sing. imperative, apocope of stai)",
                },
                {
                  word: "zitta",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "quiet / silent (feminine singular)",
                },
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "ridi",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "you laugh (2nd sing. present)",
                },
              ],
              grammarNote: "Meg urges Quickly to keep composure. 'Sta' zitta' pairs the truncated imperative of 'stare' with the feminine predicative adjective 'zitta'.",
            },
            {
              id: "a2_s2_c266_l2",
              original: "la burla è scoperta.",
              literal: "the trick is uncovered.",
              tokens: [
                {
                  word: "burla",
                  lemma: "burla",
                  pos: "noun",
                  meaning: "trick / prank / mockery",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "scoperta",
                  lemma: "scoperto",
                  pos: "adjective",
                  meaning: "uncovered / revealed / discovered",
                },
              ],
              grammarNote: "Meg warns that uncontrollable giggling will expose their elaborate prank ('burla') before Ford can be taught his lesson.",
            },
            {
              id: "a2_s2_c266_l3",
              original: "Dobbiam stare all'erta.",
              literal: "We must stay on the alert.",
              tokens: [
                {
                  word: "Dobbiam",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "we must (1st plural present, apocope of dobbiamo)",
                },
                {
                  word: "stare",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "to stay / to remain (infinitive)",
                },
                {
                  word: "all'erta",
                  lemma: "all'erta",
                  pos: "idiom",
                  meaning: "on the alert / on guard",
                },
              ],
              grammarNote: "The modal verb 'dobbiam' (poetic apocope of 'dobbiamo') governs the idiomatic phrase 'stare all'erta' (to remain vigilant / keep guard).",
            },
            {
              id: "a2_s2_c266_l4",
              original: "Tu il giuoco disguidi.",
              literal: "You disrupt the game.",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject pronoun)",
                },
                {
                  word: "giuoco",
                  lemma: "gioco",
                  pos: "noun",
                  meaning: "game / plot (traditional spelling with diphthong)",
                },
                {
                  word: "disguidi",
                  lemma: "disguidare",
                  pos: "verb",
                  meaning: "derail / disrupt / misdirect (2nd sing. present)",
                },
              ],
              grammarNote: "Meg cautions Quickly that laughing out loud risks throwing their finely calibrated plot off course ('disguidi', from 'disguidare').",
            },
            {
              id: "a2_s2_c266_l5",
              original: "Geloso marito,",
              literal: "Jealous husband,",
              tokens: [
                {
                  word: "Geloso",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
              ],
              grammarNote: "Meg summarizes the moral symmetry of their plot: punishing Ford, the pathologically suspicious 'geloso marito'.",
            },
            {
              id: "a2_s2_c266_l6",
              original: "compare sfacciato,",
              literal: "brazen gossip,",
              tokens: [
                {
                  word: "compare",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "gossip / crony / partner-in-crime",
                },
                {
                  word: "sfacciato",
                  lemma: "sfacciato",
                  pos: "adjective",
                  meaning: "brazen / shameless / cheek-faced",
                },
              ],
              grammarNote: "'Compare sfacciato' refers to Falstaff, whose brazen audacity in attempting to seduce both married women has earned him this ordeal.",
            },
            {
              id: "a2_s2_c266_l7",
              original: "ciascuno è punito",
              literal: "each one is punished",
              tokens: [
                {
                  word: "ciascuno",
                  lemma: "ciascuno",
                  pos: "pronoun",
                  meaning: "each one / everyone",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "punito",
                  lemma: "punire",
                  pos: "verb",
                  meaning: "punished (past participle)",
                },
              ],
              grammarNote: "Passive construction expressing poetic justice: both the jealous husband and the insolent rogue receive retribution.",
            },
            {
              id: "a2_s2_c266_l8",
              original: "secondo il peccato.",
              literal: "according to his sin.",
              tokens: [
                {
                  word: "secondo",
                  lemma: "secondo",
                  pos: "preposition",
                  meaning: "according to",
                },
                {
                  word: "peccato",
                  lemma: "peccato",
                  pos: "noun",
                  meaning: "sin / transgression",
                },
              ],
              grammarNote: "Meg delivers the core ethical moral of the comedy: each character's punishment perfectly matches the nature of their fault (contrapasso).",
            },
            {
              id: "a2_s2_c266_l9",
              original: "Parliam sottovoce",
              literal: "Let us speak in a whisper",
              tokens: [
                {
                  word: "Parliam",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "let us speak (1st plural hortatory subjunctive, apocope of parliamo)",
                },
                {
                  word: "sottovoce",
                  lemma: "sottovoce",
                  pos: "adverb",
                  meaning: "in a whisper / in an undertone",
                },
              ],
              grammarNote: "Hortatory subjunctive 'parliam' urging Meg and Quickly to converse only in a hushed whisper as they watch over the basket.",
            },
            {
              id: "a2_s2_c266_l10",
              original: "guardando il messer",
              literal: "watching the gentleman",
              tokens: [
                {
                  word: "guardando",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "watching / looking at (gerund)",
                },
                {
                  word: "messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "gentleman / sir (archaic title, apocope of messere)",
                },
              ],
              grammarNote: "The gerund 'guardando' expresses simultaneous action. 'Messer' is used with biting irony for the suffocating knight.",
            },
            {
              id: "a2_s2_c266_l11",
              original: "che brontola e cuoce",
              literal: "who grumbles and stews",
              tokens: [
                {
                  word: "brontola",
                  lemma: "brontolare",
                  pos: "verb",
                  meaning: "grumbles / mutters (3rd sing. present)",
                },
                {
                  word: "cuoce",
                  lemma: "cuocere",
                  pos: "verb",
                  meaning: "cooks / stews / seethes (3rd sing. present)",
                },
              ],
              grammarNote: "Meg describes Falstaff's physical and verbal agitation inside the laundry hamper, resuming the recurring culinary motif ('cuoce').",
            },
            {
              id: "a2_s2_c266_l12",
              original: "nel nostro panier.",
              literal: "in our basket.",
              tokens: [
                {
                  word: "nostro",
                  lemma: "nostro",
                  pos: "adjective",
                  meaning: "our (possessive adjective)",
                },
                {
                  word: "panier",
                  lemma: "paniere",
                  pos: "noun",
                  meaning: "basket / hamper (apocope of paniere)",
                },
              ],
              grammarNote: "Apocope of 'paniere' to 'panier' to preserve meter and rhyme with 'messer'. The women claim proud ownership of the entrapment device.",
            },
          ],
        },
        {
          id: "a2_s2_c267",
          speaker: "Mrs. Quickly",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a2_s2_c267_l1",
              original: "Stiam zitte! stiam zitte!",
              literal: "Let us be quiet! let us be quiet!",
              tokens: [
                {
                  word: "Stiam",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "let us stay / be (1st plural hortatory subjunctive, apocope of stiamo)",
                },
                {
                  word: "zitte",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "quiet / silent (feminine plural)",
                },
              ],
              grammarNote: "Quickly repeats the injunction to stay quiet, agreeing with Meg in the feminine plural 'zitte'.",
            },
            {
              id: "a2_s2_c267_l2",
              original: "Trattieni le risa;",
              literal: "Hold back your laughter;",
              tokens: [
                {
                  word: "Trattieni",
                  lemma: "trattenere",
                  pos: "verb",
                  meaning: "hold back / restrain (2nd sing. imperative)",
                },
                {
                  word: "risa",
                  lemma: "riso",
                  pos: "noun",
                  meaning: "laughter (irregular feminine plural of il riso)",
                },
              ],
              grammarNote: "Imperative 'trattieni' governing the poetic feminine plural 'le risa' (bouts of laughter), urging Meg to suppress her giggles.",
            },
            {
              id: "a2_s2_c267_l3",
              original: "se l'altro s'avvisa",
              literal: "if the other becomes aware",
              tokens: [
                {
                  word: "l'altro",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "the other (referring to Ford)",
                },
                {
                  word: "s'avvisa",
                  lemma: "avvisarsi",
                  pos: "verb",
                  meaning: "becomes aware / notices (3rd sing. present reflexive)",
                },
              ],
              grammarNote: "Literary reflexive 'avvisarsi' (to become aware / perceive). 'L'altro' refers to Ford, who is prowling nearby.",
            },
            {
              id: "a2_s2_c267_l4",
              original: "noi siamo sconfitte.",
              literal: "we are defeated.",
              tokens: [
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we (1st plural subject pronoun)",
                },
                {
                  word: "siamo",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "are (1st plural present)",
                },
                {
                  word: "sconfitte",
                  lemma: "sconfitto",
                  pos: "adjective",
                  meaning: "defeated / undone (feminine plural past participle)",
                },
              ],
              grammarNote: "Quickly highlights the danger: discovery before their trick is sprung would spell total defeat for their plan.",
            },
            {
              id: "a2_s2_c267_l5",
              original: "Costui suda e soffia,",
              literal: "This fellow sweats and puffs,",
              tokens: [
                {
                  word: "Costui",
                  lemma: "costui",
                  pos: "pronoun",
                  meaning: "this fellow / this man (demonstrative pronoun)",
                },
                {
                  word: "suda",
                  lemma: "sudare",
                  pos: "verb",
                  meaning: "sweats / perspires (3rd sing. present)",
                },
                {
                  word: "soffia",
                  lemma: "soffiare",
                  pos: "verb",
                  meaning: "puffs / blows / wheezes (3rd sing. present)",
                },
              ],
              grammarNote: "Quickly paints a vivid picture of Falstaff's physical misery under the mountain of dirty laundry with the alliterative 'suda e soffia'.",
            },
            {
              id: "a2_s2_c267_l6",
              original: "s'intrefola e tosse,",
              literal: "squeezes in and coughs,",
              tokens: [
                {
                  word: "s'intrefola",
                  lemma: "intrefolarsi",
                  pos: "verb",
                  meaning: "squeezes in / burrows in / wriggles (3rd sing. present reflexive)",
                },
                {
                  word: "tosse",
                  lemma: "tossire",
                  pos: "verb",
                  meaning: "coughs (archaic 3rd sing. present)",
                },
              ],
              grammarNote: "The rare Tuscanism 'intrefolarsi' (to burrow or wriggle into narrow spaces) conveys Falstaff's desperate squirming; 'tosse' is an archaic present of 'tossire'.",
            },
            {
              id: "a2_s2_c267_l7",
              original: "per gran battisoffia",
              literal: "from great panic",
              tokens: [
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great (apocope of grande)",
                },
                {
                  word: "battisoffia",
                  lemma: "battisoffia",
                  pos: "noun",
                  meaning: "panic / palpitation / sudden fright",
                },
              ],
              grammarNote: "'Battisoffia' is a colorful, dialectal Tuscan term for a sudden fluttering of the heart or panic, compound of 'battere' and 'soffiare'.",
            },
            {
              id: "a2_s2_c267_l8",
              original: "le viscere ha scosse.",
              literal: "his innards are shaken.",
              tokens: [
                {
                  word: "viscere",
                  lemma: "viscera",
                  pos: "noun",
                  meaning: "innards / entrails / guts (feminine plural)",
                },
                {
                  word: "ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has (3rd sing. present)",
                },
                {
                  word: "scosse",
                  lemma: "scuotere",
                  pos: "verb",
                  meaning: "shaken / agitated (feminine plural past participle)",
                },
              ],
              grammarNote: "Inverted word order: 'le viscere ha scosse' emphasizes the physical, gut-wrenching terror experienced by Falstaff.",
            },
            {
              id: "a2_s2_c267_l9",
              original: "Costui s'è infardato",
              literal: "This fellow has besmeared himself",
              tokens: [
                {
                  word: "Costui",
                  lemma: "costui",
                  pos: "pronoun",
                  meaning: "this fellow / this man",
                },
                {
                  word: "s'è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is / has (auxiliary with reflexive)",
                },
                {
                  word: "infardato",
                  lemma: "infardarsi",
                  pos: "verb",
                  meaning: "besmeared / soiled oneself (past participle)",
                },
              ],
              grammarNote: "Reflexive verb 'infardarsi' literally means to soil or plaster oneself with filth, here denoting both the filthy linen and moral degradation.",
            },
            {
              id: "a2_s2_c267_l10",
              original: "di tanta viltà.",
              literal: "with so much baseness.",
              tokens: [
                {
                  word: "tanta",
                  lemma: "tanto",
                  pos: "adjective",
                  meaning: "so much / such",
                },
                {
                  word: "viltà",
                  lemma: "viltà",
                  pos: "noun",
                  meaning: "baseness / cowardice / vileness",
                },
              ],
              grammarNote: "Complements 'infardato': Falstaff has disgraced himself through shameless cowardice and dishonorable conduct.",
            },
            {
              id: "a2_s2_c267_l11",
              original: "Che darlo al bucato",
              literal: "That giving him to the laundry",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that / so that",
                },
                {
                  word: "darlo",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "to give him (infinitive dare + direct object clitic lo)",
                },
                {
                  word: "bucato",
                  lemma: "bucato",
                  pos: "noun",
                  meaning: "laundry / wash",
                },
              ],
              grammarNote: "Enclitic construction 'darlo' (dare + lo). Quickly makes a comic pun on 'bucato': giving him to the wash cleanses both his clothes and his morals.",
            },
            {
              id: "a2_s2_c267_l12",
              original: "è averne pietà.",
              literal: "is to have pity on him.",
              tokens: [
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "averne",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "to have ... of him (infinitive avere + clitic ne)",
                },
                {
                  word: "pietà",
                  lemma: "pietà",
                  pos: "noun",
                  meaning: "pity / mercy",
                },
              ],
              grammarNote: "The clitic particle 'ne' represents 'di lui' ('averne pietà' = to take pity on him). Quickly facetiously frames dumping him in the river as an act of mercy.",
            },
            {
              id: "a2_s2_c267_l13",
              original: "NANNETTA E FENTON",
              literal: "NANNETTA AND FENTON",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Character cue in the libretto identifying the lovers hidden behind the screen during the dramatic hush.",
            },
          ],
        },
        {
          id: "a2_s2_c268",
          speaker: "Mrs. Quickly",
          stageDirection: "nel paravento",
          stageDirectionTranslation: "in the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c269",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c269_l1",
              original: "Come in sua zolla",
              literal: "As in its sod",
              tokens: [
                {
                  word: "Come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as / like",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "its (possessive adjective)",
                },
                {
                  word: "zolla",
                  lemma: "zolla",
                  pos: "noun",
                  meaning: "clod / sod / lump of earth",
                },
              ],
              grammarNote: "Opening simile of Nannetta's lyrical canzonetta behind the screen, contrasting delicate youthful romance with the farcical chaos outside.",
            },
            {
              id: "a2_s2_c269_l2",
              original: "si schiude un fior,",
              literal: "a flower opens,",
              tokens: [
                {
                  word: "si schiude",
                  lemma: "schiudersi",
                  pos: "verb",
                  meaning: "opens / blossoms (3rd sing. present reflexive)",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower (apocope of fiore)",
                },
              ],
              grammarNote: "Reflexive verb 'schiudersi' paired with the apocopated subject 'fior', portraying the budding of love like a spring flower.",
            },
            {
              id: "a2_s2_c269_l3",
              original: "la sua corolla",
              literal: "its corolla",
              tokens: [
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "its (possessive adjective)",
                },
                {
                  word: "corolla",
                  lemma: "corolla",
                  pos: "noun",
                  meaning: "corolla / petals of a flower",
                },
              ],
              grammarNote: "Botanical noun 'corolla' continues the floral imagery, representing the blooming petals of the heart.",
            },
            {
              id: "a2_s2_c269_l4",
              original: "svolve il mio cor.",
              literal: "my heart unfolds.",
              tokens: [
                {
                  word: "svolve",
                  lemma: "svolvere",
                  pos: "verb",
                  meaning: "unfolds / opens out (3rd sing. present)",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "cor",
                  lemma: "core",
                  pos: "noun",
                  meaning: "heart (poetic apocope of core/cuore)",
                },
              ],
              grammarNote: "Lyrical verb 'svolvere' (to unfold/open up) paired with the poetic apocope 'cor' for 'cuore'.",
            },
          ],
        },
        {
          id: "a2_s2_c270",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c270_l1",
              original: "Bocca mia dolce!",
              literal: "My sweet mouth!",
              tokens: [
                {
                  word: "Bocca",
                  lemma: "bocca",
                  pos: "noun",
                  meaning: "mouth / lips",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "dolce",
                  lemma: "dolce",
                  pos: "adjective",
                  meaning: "sweet",
                },
              ],
              grammarNote: "Fenton's passionate exclamation as he kisses Nannetta behind the screen, echoing the opening sonnet of the opera.",
            },
            {
              id: "a2_s2_c270_l2",
              original: "Pupilla d'or.",
              literal: "Pupil of gold.",
              tokens: [
                {
                  word: "Pupilla",
                  lemma: "pupilla",
                  pos: "noun",
                  meaning: "pupil / eye",
                },
                {
                  word: "d'or",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "of gold (preposition di + apocopated noun oro)",
                },
              ],
              grammarNote: "Poetic synecdoche: 'pupilla' for eye, adorned with the golden brilliance of youth and love.",
            },
            {
              id: "a2_s2_c270_l3",
              original: "Voce che molce",
              literal: "Voice that soothes",
              tokens: [
                {
                  word: "Voce",
                  lemma: "voce",
                  pos: "noun",
                  meaning: "voice",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (relative pronoun)",
                },
                {
                  word: "molce",
                  lemma: "molcere",
                  pos: "verb",
                  meaning: "soothes / caresses / softens (archaic 3rd sing. present)",
                },
              ],
              grammarNote: "Archaic and highly poetic verb 'molcere' (to soothe, soften), derived from Latin mulcere, evoking classical Italian love lyric.",
            },
            {
              id: "a2_s2_c270_l4",
              original: "com'arpa il cor.",
              literal: "like a harp the heart.",
              tokens: [
                {
                  word: "com'arpa",
                  lemma: "arpa",
                  pos: "noun",
                  meaning: "like a harp (elided come + noun arpa)",
                },
                {
                  word: "cor",
                  lemma: "core",
                  pos: "noun",
                  meaning: "heart (poetic apocope of core/cuore)",
                },
              ],
              grammarNote: "Simile comparing the beloved's voice soothing the heart to the sweet strumming of a harp.",
            },
            {
              id: "a2_s2_c270_l5",
              original: "Insieme",
              literal: "Together",
              tokens: [
                {
                  word: "Insieme",
                  lemma: "insieme",
                  pos: "adverb",
                  meaning: "together / simultaneously",
                },
                {
                  word: "assieme",
                  lemma: "assieme",
                  pos: "adverb",
                  meaning: "together",
                },
              ],
              grammarNote: "Performance direction in the score marking the ensemble whispering passage between Ford, Dr. Caius, Bardolfo, and Pistola.",
            },
          ],
        },
        {
          id: "a2_s2_c271",
          speaker: "All",
          stageDirection: "intorno al paravento",
          stageDirectionTranslation: "around the screen",
          lines: [
            {
              id: "a2_s2_c271_l1",
              original: "Gente del vicinato",
              literal: "People of the neighborhood",
              tokens: [
                {
                  word: "Gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / folk",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + il)",
                },
                {
                  word: "vicinato",
                  lemma: "vicinato",
                  pos: "noun",
                  meaning: "neighborhood / vicinity",
                },
              ],
              grammarNote: "Choral designation in the score indicating the group of neighbors and retainers joining Ford's armed search.",
            },
            {
              id: "a2_s2_c271_l2",
              original: "Piano, piano, a passo lento,",
              literal: "Softly, softly, with slow step,",
              tokens: [
                {
                  word: "Piano",
                  lemma: "piano",
                  pos: "adverb",
                  meaning: "softly / quietly / slowly",
                },
                {
                  word: "passo",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "step / pace",
                },
                {
                  word: "lento",
                  lemma: "lento",
                  pos: "adjective",
                  meaning: "slow",
                },
              ],
              grammarNote: "The stealthy advance of the men creeping toward the screen in hushed suspense, underscored by Verdi's ticking staccato rhythm.",
            },
            {
              id: "a2_s2_c271_l3",
              original: "mentr'ei sta senza sospetto",
              literal: "while he remains without suspicion",
              tokens: [
                {
                  word: "mentr'ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "while he (mentre + ei/egli)",
                },
                {
                  word: "sta",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stays / remains (3rd sing. present)",
                },
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "sospetto",
                  lemma: "sospetto",
                  pos: "noun",
                  meaning: "suspicion",
                },
              ],
              grammarNote: "Contraction 'mentr'ei' (mentre + archaic pronoun ei). The men erroneously assume the quarry behind the screen is completely off-guard.",
            },
            {
              id: "a2_s2_c271_l4",
              original: "lo cogliamo a tradimento,",
              literal: "we catch him by surprise,",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "cogliamo",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "we catch / seize (1st plural present)",
                },
                {
                  word: "a tradimento",
                  lemma: "a tradimento",
                  pos: "idiom",
                  meaning: "by surprise / by ambush / treacherously",
                },
              ],
              grammarNote: "Idiomatic locution 'a tradimento' denotes catching someone by unawares ambush or surprise.",
            },
            {
              id: "a2_s2_c271_l5",
              original: "gli facciamo lo sgambetto.",
              literal: "we trip him up.",
              tokens: [
                {
                  word: "gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "to him (indirect object clitic)",
                },
                {
                  word: "facciamo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "we make / do (1st plural present)",
                },
                {
                  word: "sgambetto",
                  lemma: "sgambetto",
                  pos: "noun",
                  meaning: "trip / tripping (fare lo sgambetto = to trip someone up)",
                },
              ],
              grammarNote: "Colloquial idiom 'fare lo sgambetto' (to trip someone up), expressing their eager intent to topple their rival.",
            },
            {
              id: "a2_s2_c271_l6",
              original: "S'egli cade più non scappa:",
              literal: "If he falls, he escapes no more:",
              tokens: [
                {
                  word: "S'egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "if he (se + egli)",
                },
                {
                  word: "cade",
                  lemma: "cadere",
                  pos: "verb",
                  meaning: "falls (3rd sing. present)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / anymore (with non = no longer)",
                },
                {
                  word: "scappa",
                  lemma: "scappare",
                  pos: "verb",
                  meaning: "escapes / flees (3rd sing. present)",
                },
              ],
              grammarNote: "Hypothetical clause 's'egli cade' leading to the triumphant conclusion that the trapped man will have no avenue of flight.",
            },
            {
              id: "a2_s2_c271_l7",
              original: "nessuno più lo può salvar.",
              literal: "no one can save him anymore.",
              tokens: [
                {
                  word: "nessuno",
                  lemma: "nessuno",
                  pos: "pronoun",
                  meaning: "no one / nobody",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "può",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "can / is able to (3rd sing. present)",
                },
                {
                  word: "salvar",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "to save / rescue (apocope of salvare)",
                },
              ],
              grammarNote: "Negative pronoun 'nessuno' with the modal 'può' governing the apocopated infinitive 'salvar'.",
            },
            {
              id: "a2_s2_c271_l8",
              original: "Nel tuo diavolo t'incappa;",
              literal: "Run into your own devil;",
              tokens: [
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil",
                },
                {
                  word: "t'incappa",
                  lemma: "incapparsi",
                  pos: "verb",
                  meaning: "run into / stumble into (2nd sing. imperative reflexive)",
                },
              ],
              grammarNote: "A curse or imprecation: 'incapparsi nel diavolo' means to run headlong into destruction or one's own undoing.",
            },
            {
              id: "a2_s2_c271_l9",
              original: "che tu possa stramazzar!",
              literal: "may you crash to the ground!",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that / may (introducing optative subjunctive)",
                },
                {
                  word: "possa",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "may you (2nd sing. present subjunctive)",
                },
                {
                  word: "stramazzar",
                  lemma: "stramazzare",
                  pos: "verb",
                  meaning: "to crash down / collapse heavily (apocope of stramazzare)",
                },
              ],
              grammarNote: "Optative subjunctive expressing a vindictive wish: 'stramazzare' vividly denotes crashing flat to the floor with a violent thud.",
            },
          ],
        },
        {
          id: "a2_s2_c272",
          speaker: "Ford",
          stageDirection: "agli altri",
          stageDirectionTranslation: "to the others",
          lines: [
            {
              id: "a2_s2_c272_l1",
              original: "Zitto! A noi! Quest'è il momento.",
              literal: "Hush! To us! This is the moment.",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "interjection",
                  meaning: "hush! / silence!",
                },
                {
                  word: "A noi",
                  lemma: "a noi",
                  pos: "idiom",
                  meaning: "to our work! / our turn!",
                },
                {
                  word: "momento",
                  lemma: "momento",
                  pos: "noun",
                  meaning: "moment",
                },
              ],
              grammarNote: "Ford hushes his companions and gives the battle cry 'A noi!' as they prepare to overthrow the screen.",
            },
            {
              id: "a2_s2_c272_l2",
              original: "Zitto! Attenti! Attenti a me.",
              literal: "Hush! Pay attention! Pay attention to me.",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "interjection",
                  meaning: "hush! / silence!",
                },
                {
                  word: "Attenti",
                  lemma: "attento",
                  pos: "adjective",
                  meaning: "attentive / watchful (plural adjective used as command)",
                },
                {
                  word: "me",
                  lemma: "me",
                  pos: "pronoun",
                  meaning: "me (disjunctive 1st sing. pronoun)",
                },
              ],
              grammarNote: "Ford coordinates the attack with military seriousness, commanding everyone to watch his signal.",
            },
          ],
        },
        {
          id: "a2_s2_c273",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c273_l1",
              original: "Da' il segnal.",
              literal: "Give the signal.",
              tokens: [
                {
                  word: "Da'",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "give (2nd sing. imperative, apocope of dai)",
                },
                {
                  word: "segnal",
                  lemma: "segnale",
                  pos: "noun",
                  meaning: "signal (apocope of segnale)",
                },
              ],
              grammarNote: "Dr. Caius urges Ford to give the signal. Note the truncated imperative 'Da'' and apocopated noun 'segnal'.",
            },
          ],
        },
        {
          id: "a2_s2_c274",
          speaker: "Ford",
          lines: [
            {
              id: "a2_s2_c274_l1",
              original: "Uno... Due... Tre.",
              literal: "One... Two... Three.",
              tokens: [
                {
                  word: "Uno",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "one (cardinal numeral)",
                },
                {
                  word: "Due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two (cardinal numeral)",
                },
                {
                  word: "Tre",
                  lemma: "tre",
                  pos: "adjective",
                  meaning: "three (cardinal numeral)",
                },
              ],
              grammarNote: "Ford counts down with breathless tension. On 'Tre', the men violently topple the screen.",
            },
          ],
        },
        {
          id: "a2_s2_c275",
          speaker: "Ford",
          stageDirection: "rovesciano il paravento",
          stageDirectionTranslation: "they overturn the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c276",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a2_s2_c276_l1",
              original: "Non è lui!",
              literal: "It is not he!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him (subject pronoun)",
                },
              ],
              grammarNote: "Dr. Caius cries out in shock upon discovering young Fenton instead of Falstaff behind the fallen screen.",
            },
          ],
        },
        {
          id: "a2_s2_c277",
          speaker: "All",
          lines: [
            {
              id: "a2_s2_c277_l1",
              original: "Sbalordimento!",
              literal: "Astonishment!",
              tokens: [
                {
                  word: "Sbalordimento",
                  lemma: "sbalordimento",
                  pos: "noun",
                  meaning: "bewilderment / astonishment / stupefaction",
                },
                {
                  word: "sbalordire",
                  lemma: "sbalordire",
                  pos: "verb",
                  meaning: "to stun / astonish / bewilder",
                },
              ],
              grammarNote: "Exclamatory noun sung by all the men, capturing their utter paralysis of surprise at finding the wrong man.",
            },
            {
              id: "a2_s2_c277_l2",
              original: "QUICKLY, MEG, ALICE E FALSTAFF",
              literal: "QUICKLY, MEG, ALICE AND FALSTAFF",
              tokens: [
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
                {
                  word: "ALICE",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (character name)",
                },
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (character name)",
                },
              ],
              grammarNote: "Libretto character heading refocusing attention onto the laundry basket across the room.",
            },
          ],
        },
        {
          id: "a2_s2_c278",
          speaker: "All",
          stageDirection: "intorno alla cesta",
          stageDirectionTranslation: "around the basket",
          lines: [
          ],
        },
        {
          id: "a2_s2_c279",
          speaker: "Sir John Falstaff",
          stageDirection: "sbucando e sbuffando",
          stageDirectionTranslation: "emerging and puffing",
          lines: [
            {
              id: "a2_s2_c279_l1",
              original: "Ouff!... Cesto molesto!",
              literal: "Oof!... Troublesome basket!",
              tokens: [
                {
                  word: "Ouff",
                  lemma: "uffa",
                  pos: "interjection",
                  meaning: "oof! / phew! (interjection of suffocation/exhaustion)",
                },
                {
                  word: "Cesto",
                  lemma: "cesto",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
                {
                  word: "molesto",
                  lemma: "molesto",
                  pos: "adjective",
                  meaning: "troublesome / bothersome / vexatious",
                },
              ],
              grammarNote: "Falstaff pops his head up from the dirty linen, groaning in rhyming exasperation ('cesto molesto') as he suffocates.",
            },
          ],
        },
        {
          id: "a2_s2_c280",
          speaker: "Alice Ford",
          stageDirection: "che è rientrata e si sarà avvicinata alla cesta",
          stageDirectionTranslation: "who has re-entered and approached the basket",
          lines: [
            {
              id: "a2_s2_c280_l1",
              original: "Silenzio!",
              literal: "Silence!",
              tokens: [
                {
                  word: "Silenzio",
                  lemma: "silenzio",
                  pos: "noun",
                  meaning: "silence",
                },
                {
                  word: "silenzioso",
                  lemma: "silenzioso",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
              ],
              grammarNote: "Alice frantically pushes Falstaff's head back under the linen, terrified that his groans will alert Ford.",
            },
          ],
        },
        {
          id: "a2_s2_c281",
          speaker: "Sir John Falstaff",
          stageDirection: "sbucando",
          stageDirectionTranslation: "popping out",
          lines: [
            {
              id: "a2_s2_c281_l1",
              original: "Protesto!",
              literal: "I protest!",
              tokens: [
                {
                  word: "Protesto",
                  lemma: "protestare",
                  pos: "verb",
                  meaning: "I protest (1st sing. present)",
                },
                {
                  word: "protestare",
                  lemma: "protestare",
                  pos: "verb",
                  meaning: "to protest / object",
                },
              ],
              grammarNote: "Falstaff pops up again indignantly; the rapid rhyme 'molesto / protesto' accentuates the farcical jack-in-the-box staging.",
            },
          ],
        },
        {
          id: "a2_s2_c282",
          speaker: "Meg & Quickly",
          lines: [
            {
              id: "a2_s2_c282_l1",
              original: "Che bestia restia!",
              literal: "What a stubborn beast!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "bestia",
                  lemma: "bestia",
                  pos: "noun",
                  meaning: "beast / animal",
                },
                {
                  word: "restia",
                  lemma: "restio",
                  pos: "adjective",
                  meaning: "stubborn / balking / recalcitrant",
                },
              ],
              grammarNote: "Meg and Quickly compare the struggling Falstaff to a balking, recalcitrant beast resisting confinement.",
            },
          ],
        },
        {
          id: "a2_s2_c283",
          speaker: "Sir John Falstaff",
          stageDirection: "gridando",
          stageDirectionTranslation: "shouting / crying out",
          lines: [
            {
              id: "a2_s2_c283_l1",
              original: "Portatemi via!",
              literal: "Carry me away!",
              tokens: [
                {
                  word: "Portatemi",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carry me / take me (imperative 2nd plural portare + enclitic mi)",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "adverb",
                  meaning: "away / off",
                },
              ],
              grammarNote: "Falstaff desperately pleads to be carried anywhere to escape suffocation, ironically setting up his plunge into the river.",
            },
          ],
        },
        {
          id: "a2_s2_c284",
          speaker: "Meg Page",
          lines: [
            {
              id: "a2_s2_c284_l1",
              original: "È matto furibondo!",
              literal: "He is raving mad!",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "matto",
                  lemma: "matto",
                  pos: "adjective",
                  meaning: "mad / crazy",
                },
                {
                  word: "furibondo",
                  lemma: "furibondo",
                  pos: "adjective",
                  meaning: "furious / raving / frantic",
                },
              ],
              grammarNote: "Meg humorously brands Falstaff's frantic thrashing as sheer madness ('matto furibondo').",
            },
          ],
        },
        {
          id: "a2_s2_c285",
          speaker: "Sir John Falstaff",
          stageDirection: "si nasconde",
          stageDirectionTranslation: "hides",
          lines: [
            {
              id: "a2_s2_c285_l1",
              original: "Aiuto!",
              literal: "Help!",
              tokens: [
                {
                  word: "Aiuto",
                  lemma: "aiuto",
                  pos: "interjection",
                  meaning: "help",
                },
              ],
              grammarNote: "Meg screams in mock terror from the darkness, setting the ambush into motion.",
            },
          ],
        },
        {
          id: "a2_s2_c286",
          speaker: "Alice, Meg & Quickly",
          lines: [
            {
              id: "a2_s2_c286_l1",
              original: "È il finimondo!",
              literal: "It is the end of the world!",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "finimondo",
                  lemma: "finimondo",
                  pos: "noun",
                  meaning: "end of the world / bedlam / utter chaos",
                },
              ],
              grammarNote: "The women exclaim at the total pandemonium ('finimondo') unfolding as the farcical cross-purposes collide.",
            },
            {
              id: "a2_s2_c286_l2",
              original: "NANNETTA E FENTON",
              literal: "NANNETTA AND FENTON",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Character cue in the libretto identifying the lovers hidden behind the screen during the dramatic hush.",
            },
          ],
        },
        {
          id: "a2_s2_c287",
          speaker: "Alice, Meg & Quickly",
          stageDirection: "nel paravento",
          stageDirectionTranslation: "in the screen",
          lines: [
          ],
        },
        {
          id: "a2_s2_c288",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c288_l1",
              original: "Dolci richiami",
              literal: "Sweet calls",
              tokens: [
                {
                  word: "Dolci",
                  lemma: "dolce",
                  pos: "adjective",
                  meaning: "sweet (plural)",
                },
                {
                  word: "richiami",
                  lemma: "richiamo",
                  pos: "noun",
                  meaning: "calls / summonses / appeals",
                },
              ],
              grammarNote: "Nannetta and Fenton continue their lyric love song, blissfully detached from the uproar around them.",
            },
            {
              id: "a2_s2_c288_l2",
              original: "d'amor.",
              literal: "of love.",
              tokens: [
                {
                  word: "d'amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "of love (preposition di + apocopated noun amore)",
                },
                {
                  word: "amore",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love",
                },
              ],
              grammarNote: "Continuation of 'Dolci richiami': love's sweet summonses. Apocope of 'amore' to 'amor'.",
            },
          ],
        },
        {
          id: "a2_s2_c289",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c289_l1",
              original: "Te bramo!",
              literal: "You I crave!",
              tokens: [
                {
                  word: "Te",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (disjunctive direct object)",
                },
                {
                  word: "bramo",
                  lemma: "bramare",
                  pos: "verb",
                  meaning: "I crave / yearn for (1st sing. present)",
                },
              ],
              grammarNote: "Fenton places the object pronoun 'Te' first for romantic emphasis before the passionate verb 'bramo'.",
            },
            {
              id: "a2_s2_c289_l2",
              original: "Dimmi se m'ami!",
              literal: "Tell me if you love me!",
              tokens: [
                {
                  word: "Dimmi",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell me (imperative di' + enclitic mi)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if / whether",
                },
                {
                  word: "m'ami",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "you love me (clitic mi + 2nd sing. present ami)",
                },
              ],
              grammarNote: "Fenton demands reassurance with the imperative 'Dimmi', introducing the indirect question 'se m'ami'.",
            },
          ],
        },
        {
          id: "a2_s2_c290",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c290_l1",
              original: "Sì, t'amo!",
              literal: "Yes, I love you!",
              tokens: [
                {
                  word: "Sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes",
                },
                {
                  word: "t'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (clitic ti + 1st sing. present amo)",
                },
              ],
              grammarNote: "Nannetta's tender declaration of love, answering Fenton's plea with unequivocal devotion.",
            },
          ],
        },
        {
          id: "a2_s2_c291",
          speaker: "Fenton",
          lines: [
            {
              id: "a2_s2_c291_l1",
              original: "T'amo!",
              literal: "I love you!",
              tokens: [
                {
                  word: "T'amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love you (clitic ti + 1st sing. present amo)",
                },
                {
                  word: "amare",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "to love",
                },
              ],
              grammarNote: "Fenton's passionate echo right as Ford turns around and catches them in the act.",
            },
          ],
        },
        {
          id: "a2_s2_c292",
          speaker: "Fenton",
          stageDirection: "nel rovesciarsi del paravento, rimangono scoperti e confusi",
          stageDirectionTranslation: "as the screen collapses, they are exposed and confounded",
          lines: [
          ],
        },
        {
          id: "a2_s2_c293",
          speaker: "Ford",
          stageDirection: "a Nannetta, con furia",
          stageDirectionTranslation: "to Nannetta, furiously",
          lines: [
            {
              id: "a2_s2_c293_l1",
              original: "Ancor nuove rivolte!",
              literal: "Yet more rebellions!",
              tokens: [
                {
                  word: "Ancor",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "yet / still / once more (apocope of ancora)",
                },
                {
                  word: "nuove",
                  lemma: "nuovo",
                  pos: "adjective",
                  meaning: "new / fresh (feminine plural)",
                },
                {
                  word: "rivolte",
                  lemma: "rivolta",
                  pos: "noun",
                  meaning: "revolts / rebellions (feminine plural)",
                },
              ],
              grammarNote: "Ford explodes in fury at Nannetta, perceiving her clandestine romance with Fenton as insubordination against his paternal will.",
            },
          ],
        },
        {
          id: "a2_s2_c294",
          speaker: "Ford",
          stageDirection: "a Fenton",
          stageDirectionTranslation: "to Fenton",
          lines: [
            {
              id: "a2_s2_c294_l1",
              original: "Tu va' pe' fatti tuoi!",
              literal: "You go about your business!",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (subject pronoun)",
                },
                {
                  word: "va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (2nd sing. imperative)",
                },
                {
                  word: "pe'",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for / about (apocope of per / pei)",
                },
                {
                  word: "fatti tuoi",
                  lemma: "fatti tuoi",
                  pos: "idiom",
                  meaning: "your own business / your own affairs",
                },
              ],
              grammarNote: "Ford rudely chases Fenton away with the colloquial idiom 'andare pe' fatti propri' (mind your own business / be off).",
            },
            {
              id: "a2_s2_c294_l2",
              original: "L'ho detto mille volte: «Costei non fa per voi».",
              literal: "I have said it a thousand times: \"This girl is not for you\".",
              tokens: [
                {
                  word: "detto",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "said / told (past participle)",
                },
                {
                  word: "mille",
                  lemma: "mille",
                  pos: "adjective",
                  meaning: "a thousand",
                },
                {
                  word: "Costei",
                  lemma: "costei",
                  pos: "pronoun",
                  meaning: "this girl / this woman (demonstrative pronoun)",
                },
                {
                  word: "fa per",
                  lemma: "fare per",
                  pos: "idiom",
                  meaning: "is suited for / is right for",
                },
              ],
              grammarNote: "Ford reiterates his stubborn refusal to give Nannetta to Fenton ('non fa per voi'), using formal 'voi' to Fenton and disparaging 'costei' for his daughter.",
            },
          ],
        },
        {
          id: "a2_s2_c295",
          speaker: "Ford",
          stageDirection: "Nannetta sbigottita fugge e Fenton esce dal fondo",
          stageDirectionTranslation: "Nannetta flees dismayed and Fenton exits from the back",
          lines: [
          ],
        },
        {
          id: "a2_s2_c296",
          speaker: "Bardolfo",
          stageDirection: "correndo verso il fondo",
          stageDirectionTranslation: "running toward the back",
          lines: [
            {
              id: "a2_s2_c296_l1",
              original: "È là! Ferma!",
              literal: "He is there! Stop!",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "Ferma",
                  lemma: "fermare",
                  pos: "verb",
                  meaning: "stop / halt (2nd sing. imperative or 3rd sing. present)",
                },
              ],
              grammarNote: "Bardolfo creates a diversion by shouting that he spotted the fugitive heading towards the stairs.",
            },
            {
              id: "a2_s2_c296_l2",
              original: "FORD Dove?",
              literal: "FORD Where?",
              tokens: [
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (character name)",
                },
                {
                  word: "Dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where",
                },
              ],
              grammarNote: "Ford's manic attention immediately snaps back to his prime obsession: catching Falstaff.",
            },
          ],
        },
        {
          id: "a2_s2_c297",
          speaker: "Pistola",
          stageDirection: "correndo",
          stageDirectionTranslation: "running",
          lines: [
            {
              id: "a2_s2_c297_l1",
              original: "Là!",
              literal: "There!",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there / over there",
                },
                {
                  word: "di là",
                  lemma: "di là",
                  pos: "idiom",
                  meaning: "over there / that way",
                },
              ],
              grammarNote: "Pistola backs up Bardolfo's feigned sighting, pointing urgently toward the back staircase.",
            },
          ],
        },
        {
          id: "a2_s2_c298",
          speaker: "Bardolfo",
          stageDirection: "correndo",
          stageDirectionTranslation: "running",
          lines: [
            {
              id: "a2_s2_c298_l1",
              original: "Là! sulle scale.",
              literal: "There! on the stairs.",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "sulle",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on the (articulated preposition su + le)",
                },
                {
                  word: "scale",
                  lemma: "scala",
                  pos: "noun",
                  meaning: "stairs / staircase (plural)",
                },
              ],
              grammarNote: "Bardolfo directs the entire mob up the stairs, clearing the room for Alice to carry out her plan.",
            },
            {
              id: "a2_s2_c298_l2",
              original: "FORD Squartatelo!",
              literal: "FORD Quarter him!",
              tokens: [
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (character name)",
                },
                {
                  word: "Squartatelo",
                  lemma: "squartare",
                  pos: "verb",
                  meaning: "quarter him / hack him to pieces (imperative squartate + clitic lo)",
                },
              ],
              grammarNote: "Ford's bloodthirsty command ('squartate' + clitic 'lo') demonstrates the extreme pitch of his manic jealousy.",
            },
            {
              id: "a2_s2_c298_l3",
              original: "PISTOLA, BARDOLFO, DR. CAJUS, I COMPAGNI",
              literal: "PISTOL, BARDOLPH, DR. CAIUS, THE COMPANIONS",
              tokens: [
                {
                  word: "PISTOLA",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistol (character name)",
                },
                {
                  word: "BARDOLFO",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolph (character name)",
                },
                {
                  word: "COMPAGNI",
                  lemma: "compagno",
                  pos: "noun",
                  meaning: "companions / comrades (plural)",
                },
              ],
              grammarNote: "Libretto heading indicating the mob of men roaring 'A caccia!' as they charge upstairs.",
            },
            {
              id: "a2_s2_c298_l4",
              original: "A caccia!",
              literal: "To the hunt!",
              tokens: [
                {
                  word: "caccia",
                  lemma: "caccia",
                  pos: "noun",
                  meaning: "hunt / chase",
                },
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to / on",
                },
              ],
              grammarNote: "Bardolfo and Pistola eagerly echo Ford's rallying cry ('A caccia!'), joining the hunt against their former master.",
            },
          ],
        },
        {
          id: "a2_s2_c299",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a2_s2_c299_l1",
              original: "Che caccia infernale!",
              literal: "What an infernal chase!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "caccia",
                  lemma: "caccia",
                  pos: "noun",
                  meaning: "hunt / chase",
                },
                {
                  word: "infernale",
                  lemma: "infernale",
                  pos: "adjective",
                  meaning: "infernal / hellish",
                },
              ],
              grammarNote: "Mrs. Quickly watches the chaotic scramble of men with amused irony, comparing it to an infernal hunt.",
            },
          ],
        },
        {
          id: "a2_s2_c300",
          speaker: "Mrs. Quickly",
          stageDirection: "tutti gli uomini salgono a corsa la scala del fondo",
          stageDirectionTranslation: "all the men run up the stairs in the background",
          lines: [
          ],
        },
        {
          id: "a2_s2_c301",
          speaker: "Alice Ford",
          stageDirection: "scampanellando",
          stageDirectionTranslation: "ringing bells",
          lines: [
            {
              id: "a2_s2_c301_l1",
              original: "Ned! Will! Tom! Isaac! Su! presto! presto!",
              literal: "Ned! Will! Tom! Isaac! Come! quick! quick!",
              tokens: [
                {
                  word: "Su",
                  lemma: "su",
                  pos: "interjection",
                  meaning: "up! / come on! (exhortative interjection)",
                },
                {
                  word: "presto",
                  lemma: "presto",
                  pos: "adverb",
                  meaning: "quickly / swiftly",
                },
              ],
              grammarNote: "Alice calls her servants by their English names (taken straight from Shakespeare), urging them to hurry while the men are upstairs.",
            },
          ],
        },
        {
          id: "a2_s2_c302",
          speaker: "Alice Ford",
          stageDirection: "Nannetta rientra con quattro servi e un paggetto",
          stageDirectionTranslation: "Nannetta re-enters with four servants and a little page",
          lines: [
          ],
        },
        {
          id: "a2_s2_c303",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c303_l1",
              original: "Rovesciate quel cesto",
              literal: "Overturn that basket",
              tokens: [
                {
                  word: "Rovesciate",
                  lemma: "rovesciare",
                  pos: "verb",
                  meaning: "overturn / dump / spill (2nd plural imperative)",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "cesto",
                  lemma: "cesto",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
              ],
              grammarNote: "Alice gives the decisive order to hoist and dump the laundry basket containing Falstaff.",
            },
            {
              id: "a2_s2_c303_l2",
              original: "dalla finestra nell'acqua del fosso.",
              literal: "from the window into the water of the ditch.",
              tokens: [
                {
                  word: "finestra",
                  lemma: "finestra",
                  pos: "noun",
                  meaning: "window",
                },
                {
                  word: "acqua",
                  lemma: "acqua",
                  pos: "noun",
                  meaning: "water",
                },
                {
                  word: "fosso",
                  lemma: "fosso",
                  pos: "noun",
                  meaning: "ditch / moat / Thames ditch",
                },
              ],
              grammarNote: "Alice designates the destination: the ditch outside the window leading into the River Thames.",
            },
            {
              id: "a2_s2_c303_l3",
              original: "Là! Presso alle giuncaie,",
              literal: "There! Near the reed beds,",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "Presso",
                  lemma: "presso",
                  pos: "preposition",
                  meaning: "near / close to",
                },
                {
                  word: "giuncaie",
                  lemma: "giuncaia",
                  pos: "noun",
                  meaning: "reed beds / rush beds (plural)",
                },
              ],
              grammarNote: "'Giuncaie' refers to the reeds and rushes growing along the riverbank.",
            },
            {
              id: "a2_s2_c303_l4",
              original: "davanti al crocchio delle lavandaie.",
              literal: "in front of the gathering of the washerwomen.",
              tokens: [
                {
                  word: "crocchio",
                  lemma: "crocchio",
                  pos: "noun",
                  meaning: "circle / knot / gathering of people",
                },
                {
                  word: "delle",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + le)",
                },
                {
                  word: "lavandaie",
                  lemma: "lavandaia",
                  pos: "noun",
                  meaning: "washerwomen / laundresses (plural)",
                },
              ],
              grammarNote: "Alice deliberately aims for the gathering ('crocchio') of washerwomen to maximize Falstaff's public humiliation.",
            },
            {
              id: "a2_s2_c303_l5",
              original: "TUTTE",
              literal: "ALL",
              tokens: [
                {
                  word: "TUTTE",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all (feminine plural)",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / whole / every",
                },
              ],
              grammarNote: "Choral heading for all four women (Alice, Meg, Quickly, Nannetta) singing in triumphant unison.",
            },
            {
              id: "a2_s2_c303_l6",
              original: "Sì, sì, sì, sì!",
              literal: "Yes, yes, yes, yes!",
              tokens: [
                {
                  word: "Sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes (affirmative adverb)",
                },
                {
                  word: "sì",
                  lemma: "sì",
                  pos: "particle",
                  meaning: "yes / indeed (affirmative particle)",
                },
              ],
              grammarNote: "Rapid, joyful affirmation from the women cheering on the servants' heavy work.",
            },
          ],
        },
        {
          id: "a2_s2_c304",
          speaker: "Nannetta",
          stageDirection: "ai servi, che s'affaticano a sollevare la cesta",
          stageDirectionTranslation: "to the servants, who struggle to lift the basket",
          lines: [
            {
              id: "a2_s2_c304_l1",
              original: "C'è dentro un pezzo grosso.",
              literal: "There is a big shot inside.",
              tokens: [
                {
                  word: "C'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (ci + è)",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "adverb",
                  meaning: "inside",
                },
                {
                  word: "pezzo grosso",
                  lemma: "pezzo grosso",
                  pos: "idiom",
                  meaning: "big shot / VIP / heavyweight",
                },
              ],
              grammarNote: "Nannetta jokes with the straining servants; 'pezzo grosso' is a pun meaning both a physically huge item and a VIP/bigwig.",
            },
          ],
        },
        {
          id: "a2_s2_c305",
          speaker: "Alice Ford",
          stageDirection: "al paggetto, che poi esce dalla scala nel fondo",
          stageDirectionTranslation: "to the little page, who then exits up the stairs in the background",
          lines: [
            {
              id: "a2_s2_c305_l1",
              original: "Tu chiama mio marito.",
              literal: "You call my husband.",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (subject pronoun)",
                },
                {
                  word: "chiama",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "call / summon (2nd sing. imperative)",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
              ],
              grammarNote: "Alice sends the young page to fetch Ford so that he will witness the spectacle of Falstaff floundering in the water.",
            },
          ],
        },
        {
          id: "a2_s2_c306",
          speaker: "Alice Ford",
          stageDirection: "a Meg, mentre Nannetta e Quickly stanno a guardare i servi che avranno sollevata la cesta",
          stageDirectionTranslation: "to Meg, while Nannetta and Quickly watch the servants who have lifted the basket",
          lines: [
            {
              id: "a2_s2_c306_l1",
              original: "Gli narreremo il nostro caso pazzo.",
              literal: "We shall tell him our mad story.",
              tokens: [
                {
                  word: "Gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "to him (indirect object clitic)",
                },
                {
                  word: "narreremo",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "we shall recount / tell (1st plural future)",
                },
                {
                  word: "caso",
                  lemma: "caso",
                  pos: "noun",
                  meaning: "case / affair / adventure",
                },
                {
                  word: "pazzo",
                  lemma: "pazzo",
                  pos: "adjective",
                  meaning: "mad / crazy",
                },
              ],
              grammarNote: "Alice plans to reveal the whole crazy plot ('caso pazzo') to Ford, clearing her name and exposing his foolish jealousy.",
            },
            {
              id: "a2_s2_c306_l2",
              original: "Solo al vedere il cavalier nel guazzo",
              literal: "Merely upon seeing the knight in the water",
              tokens: [
                {
                  word: "Solo",
                  lemma: "solo",
                  pos: "adverb",
                  meaning: "only / merely",
                },
                {
                  word: "vedere",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "to see / seeing (substantivized infinitive al vedere = upon seeing)",
                },
                {
                  word: "cavalier",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight (apocope of cavaliere)",
                },
                {
                  word: "guazzo",
                  lemma: "guazzo",
                  pos: "noun",
                  meaning: "slosh / puddle / mire / water",
                },
              ],
              grammarNote: "'Nel guazzo' (in the slosh/water). Alice knows the ridiculous sight of Falstaff soaking in the Thames will dissolve Ford's wrath.",
            },
            {
              id: "a2_s2_c306_l3",
              original: "d'ogni gelosa ubbia sarà guarito.",
              literal: "of every jealous whim he will be cured.",
              tokens: [
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / each",
                },
                {
                  word: "gelosa",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous",
                },
                {
                  word: "ubbia",
                  lemma: "ubbia",
                  pos: "noun",
                  meaning: "whim / paranoid obsession / delusion",
                },
                {
                  word: "guarito",
                  lemma: "guarire",
                  pos: "verb",
                  meaning: "cured / healed (past participle)",
                },
              ],
              grammarNote: "'Ubbia' denotes an irrational prejudice or fixed paranoia. Ford's jealousy will be cured by comic humiliation.",
            },
          ],
        },
        {
          id: "a2_s2_c307",
          speaker: "Mrs. Quickly",
          stageDirection: "ai servi",
          stageDirectionTranslation: "to the servants",
          lines: [
            {
              id: "a2_s2_c307_l1",
              original: "Pesa!",
              literal: "It is heavy!",
              tokens: [
                {
                  word: "Pesa",
                  lemma: "pesare",
                  pos: "verb",
                  meaning: "it weighs / it is heavy (3rd sing. present)",
                },
                {
                  word: "pesare",
                  lemma: "pesare",
                  pos: "verb",
                  meaning: "to weigh / be heavy",
                },
              ],
              grammarNote: "Quickly exclaims at Falstaff's colossal weight as the four servants strain to lift the basket.",
            },
          ],
        },
        {
          id: "a2_s2_c308",
          speaker: "Alice & Meg",
          stageDirection: "ai servi, che sono già vicini alla finestra",
          stageDirectionTranslation: "to the servants, who are already near the window",
          lines: [
            {
              id: "a2_s2_c308_l1",
              original: "Coraggio!",
              literal: "Courage!",
              tokens: [
                {
                  word: "Coraggio",
                  lemma: "coraggio",
                  pos: "noun",
                  meaning: "courage / bravery",
                },
                {
                  word: "coraggioso",
                  lemma: "coraggioso",
                  pos: "adjective",
                  meaning: "courageous / brave",
                },
              ],
              grammarNote: "Alice and Meg encourage the straining servants as they heave the basket toward the open window.",
            },
          ],
        },
        {
          id: "a2_s2_c309",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c309_l1",
              original: "Il fondo ha fatto crac!",
              literal: "The bottom made a crack!",
              tokens: [
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "bottom / base",
                },
                {
                  word: "fatto",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "made / done (past participle)",
                },
                {
                  word: "crac",
                  lemma: "crac",
                  pos: "noun",
                  meaning: "crack / snap (onomatopoeia)",
                },
              ],
              grammarNote: "Nannetta notices the basket's wicker base groaning and cracking under Falstaff's tremendous bulk.",
            },
            {
              id: "a2_s2_c309_l2",
              original: "NANNETTA, MEG E QUICKLY",
              literal: "NANNETTA, MEG AND QUICKLY",
              tokens: [
                {
                  word: "NANNETTA",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (character name)",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character name)",
                },
              ],
              grammarNote: "Score heading indicating Nannetta, Meg, and Quickly shouting together for the final heave.",
            },
            {
              id: "a2_s2_c309_l3",
              original: "Su!",
              literal: "Up!",
              tokens: [
                {
                  word: "Su",
                  lemma: "su",
                  pos: "interjection",
                  meaning: "up! / heave! (exhortative interjection)",
                },
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on / upon / upward",
                },
              ],
              grammarNote: "The women shout the final coordinated heave to flip the basket over the window ledge.",
            },
          ],
        },
        {
          id: "a2_s2_c310",
          speaker: "Alice Ford",
          stageDirection: "la cesta è portata in alto",
          stageDirectionTranslation: "the basket is lifted high",
          lines: [
            {
              id: "a2_s2_c310_l1",
              original: "Trionfo!",
              literal: "Triumph!",
              tokens: [
                {
                  word: "Trionfo",
                  lemma: "trionfo",
                  pos: "noun",
                  meaning: "triumph / victory",
                },
                {
                  word: "trionfare",
                  lemma: "trionfare",
                  pos: "verb",
                  meaning: "to triumph / prevail",
                },
              ],
              grammarNote: "Alice's exultant cry as the basket teeters on the window frame ready to plunge.",
            },
            {
              id: "a2_s2_c310_l2",
              original: "TUTTE",
              literal: "ALL",
              tokens: [
                {
                  word: "TUTTE",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all (feminine plural)",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / whole / every",
                },
              ],
              grammarNote: "Choral heading for all four women (Alice, Meg, Quickly, Nannetta) singing in triumphant unison.",
            },
            {
              id: "a2_s2_c310_l3",
              original: "Trionfo!",
              literal: "Triumph!",
              tokens: [
                {
                  word: "Trionfo",
                  lemma: "trionfo",
                  pos: "noun",
                  meaning: "triumph / victory",
                },
                {
                  word: "trionfare",
                  lemma: "trionfare",
                  pos: "verb",
                  meaning: "to triumph / prevail",
                },
              ],
              grammarNote: "Alice's exultant cry as the basket teeters on the window frame ready to plunge.",
            },
            {
              id: "a2_s2_c310_l4",
              original: "Ah! Ah!",
              literal: "Ha! Ha!",
              tokens: [
                {
                  word: "Ah",
                  lemma: "ah",
                  pos: "interjection",
                  meaning: "ha / ah (laughter)",
                },
              ],
              grammarNote: "Laughter erupts from the entire company at Falstaff's expense.",
            },
          ],
        },
        {
          id: "a2_s2_c311",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a2_s2_c311_l1",
              original: "Che tonfo!",
              literal: "What a splash!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "tonfo",
                  lemma: "tonfo",
                  pos: "noun",
                  meaning: "splash / heavy thud / plop",
                },
              ],
              grammarNote: "Alice describes the monumental splash and thud as Falstaff hits the water below.",
            },
          ],
        },
        {
          id: "a2_s2_c312",
          speaker: "Nannetta",
          lines: [
            {
              id: "a2_s2_c312_l1",
              original: "E MEG Che tonfo!",
              literal: "AND MEG What a splash!",
              tokens: [
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character name)",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "tonfo",
                  lemma: "tonfo",
                  pos: "noun",
                  meaning: "splash / heavy thud",
                },
              ],
              grammarNote: "Meg joins Nannetta echoing Alice's delight at the resounding splash; includes score speaker indication 'E MEG'.",
            },
          ],
        },
        {
          id: "a2_s2_c313",
          speaker: "Nannetta",
          stageDirection: "la cesta, Falstaff e la biancheria capitombolano giù dalla finestra",
          stageDirectionTranslation: "the basket, Falstaff, and the laundry tumble down out of the window",
          lines: [
            {
              id: "a2_s2_c313_l1",
              original: "TUTTE",
              literal: "ALL",
              tokens: [
                {
                  word: "TUTTE",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all (feminine plural)",
                },
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / whole / every",
                },
              ],
              grammarNote: "Choral heading for all four women (Alice, Meg, Quickly, Nannetta) singing in triumphant unison.",
            },
            {
              id: "a2_s2_c313_l2",
              original: "Patatrac!",
              literal: "Crash!",
              tokens: [
                {
                  word: "Patatrac",
                  lemma: "patatrac",
                  pos: "interjection",
                  meaning: "crash! / splashdown! (onomatopoeic interjection of collapse)",
                },
                {
                  word: "patatrac",
                  lemma: "patatrac",
                  pos: "noun",
                  meaning: "crash / sudden catastrophe / breakdown",
                },
              ],
              grammarNote: "The famous comic onomatopoeic finale of Act 2, as the entire household dissolves into uncontrollable, roaring laughter.",
            },
          ],
        },
        {
          id: "a2_s2_c314",
          speaker: "Nannetta",
          stageDirection: "gran grido e risata di donne dall'esterno: immensa risata di Alice, Nannetta, Meg e Quickly. Ford e gli altri uomini rientrano: Alice vedendo Ford lo piglia per un braccio e lo conduce rapidamente alla finestra",
          stageDirectionTranslation: "loud scream and laughter of women from outside; huge burst of laughter from Alice, Nannetta, Meg, and Quickly. Ford and the other men re-enter; Alice, seeing Ford, takes him by the arm and quickly leads him to the window",
          lines: [
          ],
        },
      ],
    },
  ]
};

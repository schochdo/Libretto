import { Act } from '../../types/libretto';

export const falstaffAct1: Act = {
  actNumber: 1,
  title: 'Act I',
  originalSetting: "Parte prima: L'interno dell'«Osteria della Giarrettiera». Parte seconda: Giardino accanto alla casa di Ford a Windsor.",
  setting: "Part I: The interior of the Garter Inn. Part II: Garden adjoining Ford's house in Windsor.",
  scenes: [
    {
      sceneNumber: 1,
      title: "Parte I: L’onore! Ladri! (Nell'Osteria della Giarrettiera)",
      titleTranslation: "Part I: Honor! Thieves! (In the Garter Inn)",
      originalDescription: "L’interno dell’«Osteria della Giarrettiera». Una tavola, un gran seggiolone, una panca. Sulla tavola i resti di un gran desinare, parecchie bottiglie e un bicchiere. Calamaio, penne, carta, una candela accesa. Falstaff sta seduto alla tavola; il Dr. Cajus entra infuriato accusando Bardolfo e Pistola.",
      description: "The interior of the Garter Inn. Sir John Falstaff sits in his great armchair surrounded by wine bottles. Dr. Caius enters furiously accusing Falstaff's knavish followers of theft, after which Falstaff sends love letters to Alice and Meg and delivers his celebrated monologue on honor.",
      cues: [
        {
          id: "a1_s1_c1",
          speaker: "Dr. Caius",
          stageDirection: "entrando dalla porta a sinistra e gridando minaccioso",
          stageDirectionTranslation: "entering through the door on the left and shouting threateningly",
          lines: [
            {
              id: "a1_s1_c1_l1",
              original: "Falstaff!",
              literal: "Falstaff!",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
              ],
              grammarNote: "Dr. Caius bursts violently into the Garter Inn, shouting for Falstaff.",
            },
          ],
        },
        {
          id: "a1_s1_c2",
          speaker: "Sir John Falstaff",
          stageDirection: "senza abbadare alle vociferazioni del Dr. Cajus, chiama l'oste che si avvicina",
          stageDirectionTranslation: "without paying attention to Dr. Caius's shouting, he calls the innkeeper who approaches",
          lines: [
            {
              id: "a1_s1_c2_l1",
              original: "Olà!",
              literal: "Hey there!",
              tokens: [
                {
                  word: "Olà",
                  lemma: "olà",
                  pos: "interjection",
                  meaning: "hey / ho / hallo",
                },
              ],
              grammarNote: "Falstaff answers with nonchalant composure from his table.",
            },
          ],
        },
        {
          id: "a1_s1_c3",
          speaker: "Dr. Caius",
          stageDirection: "più forte di prima",
          stageDirectionTranslation: "louder than before",
          lines: [
            {
              id: "a1_s1_c3_l1",
              original: "Sir John Falstaff!",
              literal: "Sir John Falstaff!",
              tokens: [
                {
                  word: "Sir",
                  lemma: "Sir",
                  pos: "noun",
                  meaning: "Sir (knightly honorific)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c4",
          speaker: "Bardolfo",
          stageDirection: "al Dr. Cajus",
          stageDirectionTranslation: "to Dr. Caius",
          lines: [
            {
              id: "a1_s1_c4_l1",
              original: "Oh! che vi piglia?",
              literal: "Oh! what comes over you?",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (plural/polite dative pronoun)",
                },
                {
                  word: "piglia",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "takes / seizes / overcomes",
                },
              ],
              grammarNote: "The colloquial idiom 'che vi piglia?' means 'what has come over you?' or 'what is the matter with you?' (literally: 'what seizes you?').",
            },
          ],
        },
        {
          id: "a1_s1_c5",
          speaker: "Dr. Caius",
          stageDirection: "sempre vociando e avvicinandosi a Falstaff, che non gli dà retta",
          stageDirectionTranslation: "still shouting and approaching Falstaff, who ignores him",
          lines: [
            {
              id: "a1_s1_c5_l1",
              original: "Hai battuto i miei servi!...",
              literal: "You have beaten my servants!...",
              tokens: [
                {
                  word: "Hai battuto",
                  lemma: "battere",
                  pos: "verb",
                  meaning: "you have beaten",
                },
                {
                  word: "miei",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "servi",
                  lemma: "servo",
                  pos: "noun",
                  meaning: "servants",
                },
              ],
              grammarNote: "Caius uses the informal second-person singular ('tu') in indignant reproach. Italian determiner syntax 'i miei servi' translates directly as 'my servants'.",
            },
          ],
        },
        {
          id: "a1_s1_c6",
          speaker: "Sir John Falstaff",
          stageDirection: "all'oste, che esce per eseguire l'ordine",
          stageDirectionTranslation: "to the innkeeper, who exits to carry out the order",
          lines: [
            {
              id: "a1_s1_c6_l1",
              original: "Oste! un'altra bottiglia di Xeres.",
              literal: "Innkeeper! another bottle of Sherry.",
              tokens: [
                {
                  word: "Oste",
                  lemma: "oste",
                  pos: "noun",
                  meaning: "innkeeper / host",
                },
                {
                  word: "un'altra",
                  lemma: "altro",
                  pos: "adjective",
                  meaning: "another",
                },
                {
                  word: "bottiglia",
                  lemma: "bottiglia",
                  pos: "noun",
                  meaning: "bottle",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "Xeres",
                  lemma: "Xeres",
                  pos: "noun",
                  meaning: "sherry (sack / Spanish wine from Jerez)",
                },
              ],
              grammarNote: "Falstaff completely ignores Caius's outrage, demanding more Spanish sherry (sack). Note that 'di' is a preposition.",
            },
          ],
        },
        {
          id: "a1_s1_c7",
          speaker: "Dr. Caius",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a1_s1_c7_l1",
              original: "Hai fiaccata la mia giumenta baia,",
              literal: "You have exhausted my bay mare,",
              tokens: [
                {
                  word: "fiaccata",
                  lemma: "fiaccare",
                  pos: "verb",
                  meaning: "exhausted / overridden / broken down",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "giumenta",
                  lemma: "giumenta",
                  pos: "noun",
                  meaning: "mare / riding beast",
                },
                {
                  word: "baia",
                  lemma: "baio",
                  pos: "adjective",
                  meaning: "bay (reddish-brown horse coat color)",
                },
              ],
              grammarNote: "The past participle 'fiaccata' agrees with the feminine direct object 'la mia giumenta baia'. Determiner syntax translates to 'my bay mare'.",
            },
            {
              id: "a1_s1_c7_l2",
              original: "sforzata la mia casa.",
              literal: "forced open my house.",
              tokens: [
                {
                  word: "sforzata",
                  lemma: "sforzare",
                  pos: "verb",
                  meaning: "forced open / broken into",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house / home",
                },
              ],
              grammarNote: "Continuation of Caius's accusation: '[Hai] sforzata la mia casa'. Lowercase initial matches verse enjambment.",
            },
          ],
        },
        {
          id: "a1_s1_c8",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c8_l1",
              original: "Ma non la tua massaia.",
              literal: "But not your housekeeper.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "massaia",
                  lemma: "massaia",
                  pos: "noun",
                  meaning: "housekeeper / housewife",
                },
              ],
              grammarNote: "Falstaff retorts with a bawdy double entendre: he broke into the house, but spared Caius's woman.",
            },
          ],
        },
        {
          id: "a1_s1_c9",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c9_l1",
              original: "Troppa grazia! Una vecchia cisposa. Ampio messere,",
              literal: "Too much favor! An old blear-eyed woman. Portly sir,",
              tokens: [
                {
                  word: "Troppa",
                  lemma: "troppo",
                  pos: "adjective",
                  meaning: "too much",
                },
                {
                  word: "grazia",
                  lemma: "grazia",
                  pos: "noun",
                  meaning: "favor / grace / honor",
                },
                {
                  word: "cisposa",
                  lemma: "cisposo",
                  pos: "adjective",
                  meaning: "blear-eyed / rheumy-eyed",
                },
                {
                  word: "Ampio",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "ample / vast / portly",
                },
                {
                  word: "messere",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "sir / master",
                },
              ],
              grammarNote: "Caius sarcastically scoffs at Falstaff's boast of having spared his housekeeper: she is just an old blear-eyed crone anyway ('Troppa grazia!' = 'What a huge favor!'). He then sneers at Falstaff's immense physical girth as 'Ampio messere' (vast/portly sir).",
            },
            {
              id: "a1_s1_c9_l2",
              original: "se foste venti volte John Falstaff cavaliere,",
              literal: "if you were twenty times Sir John Falstaff,",
              tokens: [
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "foste",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you were (subjunctive imperfect 2nd plural)",
                },
                {
                  word: "venti",
                  lemma: "venti",
                  pos: "adjective",
                  meaning: "twenty",
                },
                {
                  word: "volte",
                  lemma: "volta",
                  pos: "noun",
                  meaning: "times",
                },
                {
                  word: "cavaliere",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight",
                },
              ],
              grammarNote: "Caius shifts to the formal 'voi' ('foste') to challenge Falstaff's chivalric title of knight ('cavaliere').",
            },
            {
              id: "a1_s1_c9_l3",
              original: "v'obbligherò a rispondermi.",
              literal: "I will compel you to answer me.",
              tokens: [
                {
                  word: "v'obbligherò",
                  lemma: "obbligare",
                  pos: "verb",
                  meaning: "I will compel you / oblige you",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "rispondermi",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "to answer me",
                },
              ],
              grammarNote: "The clitic pronoun 'v'' (voi) is elided before 'obbligherò' (future 1st person singular).",
            },
          ],
        },
        {
          id: "a1_s1_c10",
          speaker: "Sir John Falstaff",
          stageDirection: "con flemma",
          stageDirectionTranslation: "impassively",
          lines: [
            {
              id: "a1_s1_c10_l1",
              original: "Ecco la mia risposta:",
              literal: "Here is my answer:",
              tokens: [
                {
                  word: "Ecco",
                  lemma: "ecco",
                  pos: "adverb",
                  meaning: "here is / behold",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "risposta",
                  lemma: "risposta",
                  pos: "noun",
                  meaning: "answer / response",
                },
              ],
            },
            {
              id: "a1_s1_c10_l2",
              original: "ho fatto ciò che hai detto.",
              literal: "I did what you said.",
              tokens: [
                {
                  word: "ho fatto",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "I have done / I did",
                },
                {
                  word: "ciò",
                  lemma: "ciò",
                  pos: "pronoun",
                  meaning: "that / that which",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "which / that",
                },
                {
                  word: "hai detto",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "you said / have said",
                },
              ],
              grammarNote: "Falstaff brazenly confesses to every single accusation without hesitation or remorse.",
            },
          ],
        },
        {
          id: "a1_s1_c11",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c11_l1",
              original: "E poi?",
              literal: "And then?",
              tokens: [
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "e poi",
                  lemma: "e poi",
                  pos: "idiom",
                  meaning: "and then? / what next?",
                },
              ],
              grammarNote: "Nannetta's prompt question echoing Fenton's words, playfully encouraging him to explain what follows peace.",
            },
          ],
        },
        {
          id: "a1_s1_c12",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c12_l1",
              original: "L'ho fatto apposta.",
              literal: "I did it on purpose.",
              tokens: [
                {
                  word: "L'ho fatto",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "I did it / I have done it",
                },
                {
                  word: "apposta",
                  lemma: "apposta",
                  pos: "adverb",
                  meaning: "on purpose / deliberately",
                },
              ],
              grammarNote: "The clitic 'L'' represents the neuter direct object pronoun 'lo' ('it').",
            },
          ],
        },
        {
          id: "a1_s1_c13",
          speaker: "Dr. Caius",
          stageDirection: "gridando",
          stageDirectionTranslation: "shouting / crying out",
          lines: [
            {
              id: "a1_s1_c13_l1",
              original: "M'appellerò al consiglio real.",
              literal: "I will appeal to the royal council.",
              tokens: [
                {
                  word: "M'appellerò",
                  lemma: "appellarsi",
                  pos: "verb",
                  meaning: "I will appeal",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + il)",
                },
                {
                  word: "consiglio",
                  lemma: "consiglio",
                  pos: "noun",
                  meaning: "council",
                },
                {
                  word: "real",
                  lemma: "reale",
                  pos: "adjective",
                  meaning: "royal (apocope of reale)",
                },
              ],
              grammarNote: "'Real' is an apocope of 'reale'. In Shakespeare's *The Merry Wives of Windsor*, Caius threatens to make a Star Chamber matter of it.",
            },
          ],
        },
        {
          id: "a1_s1_c14",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c14_l1",
              original: "Vatti con dio.",
              literal: "Go with God.",
              tokens: [
                {
                  word: "Vatti",
                  lemma: "andarsene",
                  pos: "verb",
                  meaning: "go away (imperative 2nd singular with reflexive pronoun)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "dio",
                  lemma: "dio",
                  pos: "noun",
                  meaning: "God",
                },
              ],
              grammarNote: "'Vatti con dio' is a formula of dismissal meaning 'Be on your way and leave me in peace'.",
            },
            {
              id: "a1_s1_c14_l2",
              original: "Sta' zitto o avrai le beffe; quest'è il consiglio mio.",
              literal: "Hold your tongue or you will be mocked; this is my counsel.",
              tokens: [
                {
                  word: "Sta'",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / keep (truncated imperative)",
                },
                {
                  word: "zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / quiet",
                },
                {
                  word: "avrai",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "you will have",
                },
                {
                  word: "beffe",
                  lemma: "beffa",
                  pos: "noun",
                  meaning: "mockeries / derision / ridicule",
                },
                {
                  word: "consiglio",
                  lemma: "consiglio",
                  pos: "noun",
                  meaning: "counsel / advice",
                },
              ],
              grammarNote: "Caius threatened to appeal to the royal council ('consiglio real'), so Falstaff mocks him with his own 'consiglio' (advice): shut up, or you will be laughed out of court and become a laughingstock ('avrai le beffe').",
            },
          ],
        },
        {
          id: "a1_s1_c15",
          speaker: "Dr. Caius",
          stageDirection: "ripigliando la sfuriata contro Bardolfo",
          stageDirectionTranslation: "resuming the tirade against Bardolfo",
          lines: [
            {
              id: "a1_s1_c15_l1",
              original: "Non è finita!",
              literal: "It is not over!",
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
                  meaning: "is",
                },
                {
                  word: "finita",
                  lemma: "finire",
                  pos: "verb",
                  meaning: "finished / over",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c16",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c16_l1",
              original: "Al diavolo!",
              literal: "To the devil!",
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
              ],
              grammarNote: "A sharp curse of dismissal equivalent to 'Go to the devil!'",
            },
          ],
        },
        {
          id: "a1_s1_c17",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c17_l1",
              original: "Bardolfo!",
              literal: "Bardolfo!",
              tokens: [
                {
                  word: "Bardolfo",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo (proper name)",
                },
              ],
              grammarNote: "Caius turns his accusations toward Falstaff's rogue companion Bardolfo.",
            },
          ],
        },
        {
          id: "a1_s1_c18",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c18_l1",
              original: "Ser Dottore.",
              literal: "Sir Doctor.",
              tokens: [
                {
                  word: "Ser",
                  lemma: "ser",
                  pos: "noun",
                  meaning: "Sir / Master (archaic honorific title)",
                },
                {
                  word: "Dottore",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "doctor",
                },
              ],
              grammarNote: "'Ser' is an archaic Tuscan title of respect prefixed to titles or names (derived from 'messere').",
            },
          ],
        },
        {
          id: "a1_s1_c19",
          speaker: "Dr. Caius",
          stageDirection: "sempre con tono minaccioso",
          stageDirectionTranslation: "still in a threatening tone",
          lines: [
            {
              id: "a1_s1_c19_l1",
              original: "Tu, ier, m'hai fatto bere.",
              literal: "You, yesterday, made me drink.",
              tokens: [
                {
                  word: "ier",
                  lemma: "ieri",
                  pos: "adverb",
                  meaning: "yesterday (apocope of ieri)",
                },
                {
                  word: "m'hai fatto",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "you made me",
                },
                {
                  word: "bere",
                  lemma: "bere",
                  pos: "verb",
                  meaning: "to drink",
                },
              ],
              grammarNote: "'Ier' is an apocope of 'ieri' (yesterday), frequent in Tuscan and poetic verse.",
            },
          ],
        },
        {
          id: "a1_s1_c20",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c20_l1",
              original: "Pur troppo! e che dolore!...",
              literal: "Alas! and what pain!...",
              tokens: [
                {
                  word: "Pur troppo",
                  lemma: "purtroppo",
                  pos: "adverb",
                  meaning: "alas / all too true / unfortunately",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a",
                },
                {
                  word: "dolore",
                  lemma: "dolore",
                  pos: "noun",
                  meaning: "pain / ache / sorrow",
                },
              ],
              grammarNote: "Bardolfo facetiously feigns hangover agony to elicit Caius's medical sympathy.",
            },
          ],
        },
        {
          id: "a1_s1_c21",
          speaker: "Bardolfo",
          stageDirection: "si fa tastare il polso dal Dr. Cajus",
          stageDirectionTranslation: "he has his pulse taken by Dr. Caius",
          lines: [
            {
              id: "a1_s1_c21_l1",
              original: "Sto mal. D'un tuo pronostico m'assisti. Ho l'intestino",
              literal: "I feel sick. Assist me with your diagnosis. My bowel is",
              tokens: [
                {
                  word: "Sto",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "I am / I feel",
                },
                {
                  word: "mal",
                  lemma: "male",
                  pos: "adverb",
                  meaning: "ill / badly (apocope of male)",
                },
                {
                  word: "pronostico",
                  lemma: "pronostico",
                  pos: "noun",
                  meaning: "prognosis / medical forecast",
                },
                {
                  word: "assisti",
                  lemma: "assistere",
                  pos: "verb",
                  meaning: "assist / aid (imperative 2nd singular)",
                },
                {
                  word: "intestino",
                  lemma: "intestino",
                  pos: "noun",
                  meaning: "intestine / bowel / gut",
                },
              ],
              grammarNote: "Bardolfo feigns terrible hangover sickness and facetiously begs Dr. Caius—who is a physician—for a professional medical prognosis ('pronostico'), hoping to distract Caius from the robbery accusations.",
            },
            {
              id: "a1_s1_c21_l2",
              original: "guasto. Malanno agli osti che dan la calce al vino!",
              literal: "ruined. A plague upon innkeepers who put lime in the wine!",
              tokens: [
                {
                  word: "guasto",
                  lemma: "guasto",
                  pos: "adjective",
                  meaning: "ruined / upset / spoiled",
                },
                {
                  word: "Malanno",
                  lemma: "malanno",
                  pos: "noun",
                  meaning: "curse / plague / misfortune",
                },
                {
                  word: "osti",
                  lemma: "oste",
                  pos: "noun",
                  meaning: "innkeepers",
                },
                {
                  word: "calce",
                  lemma: "calce",
                  pos: "noun",
                  meaning: "lime (quicklime used to doctor wine)",
                },
                {
                  word: "vino",
                  lemma: "vino",
                  pos: "noun",
                  meaning: "wine",
                },
              ],
              grammarNote: "Corrupt Renaissance innkeepers cut sour or spoiled wine with lime (calcium oxide) to mask acidity and sweeten it; Bardolfo hypocritically blames this adulterated wine for his violent hangover rather than the vast quantities of sherry he consumed.",
            },
          ],
        },
        {
          id: "a1_s1_c22",
          speaker: "Bardolfo",
          stageDirection: "mettendo l'indice sul proprio naso enorme e rubicondo",
          stageDirectionTranslation: "putting his index finger on his own huge, rubicund nose",
          lines: [
            {
              id: "a1_s1_c22_l1",
              original: "Vedi questa meteora?",
              literal: "Do you see this meteor?",
              tokens: [
                {
                  word: "Vedi",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "do you see (2nd singular)",
                },
                {
                  word: "questa",
                  lemma: "questo",
                  pos: "adjective",
                  meaning: "this",
                },
                {
                  word: "meteora",
                  lemma: "meteora",
                  pos: "noun",
                  meaning: "meteor / blazing celestial sign",
                },
              ],
              grammarNote: "Bardolfo comically points to his famously bulbous, bright red, alcohol-inflamed nose, grandly describing it as a blazing 'meteor' or beacon in the sky.",
            },
          ],
        },
        {
          id: "a1_s1_c23",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c23_l1",
              original: "La vedo.",
              literal: "I see it.",
              tokens: [
                {
                  word: "La",
                  lemma: "la",
                  pos: "pronoun",
                  meaning: "it (feminine direct object pronoun referring to 'meteora')",
                },
                {
                  word: "vedo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "I see",
                },
              ],
              grammarNote: "The clitic pronoun 'La' refers back to the feminine noun 'meteora' (Bardolfo's nose), requiring English 'it'.",
            },
          ],
        },
        {
          id: "a1_s1_c24",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c24_l1",
              original: "Essa si corca",
              literal: "It lies down",
              tokens: [
                {
                  word: "Essa",
                  lemma: "essa",
                  pos: "pronoun",
                  meaning: "it (feminine subject pronoun referring to 'meteora')",
                },
                {
                  word: "si corca",
                  lemma: "corcarsi",
                  pos: "verb",
                  meaning: "lies down / sets (archaic for coricarsi)",
                },
              ],
              grammarNote: "Bardolfo continues personifying his blazing red nose as a celestial meteor that 'lies down' (sets) every night when he goes to bed. 'Corcarsi' is archaic Tuscan for 'coricarsi' (to lie down / go to bed; of a celestial body, to set).",
            },
            {
              id: "a1_s1_c24_l2",
              original: "rossa così ogni notte.",
              literal: "red like this every night.",
              tokens: [
                {
                  word: "rossa",
                  lemma: "rosso",
                  pos: "adjective",
                  meaning: "red",
                },
                {
                  word: "così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "thus / like this / so",
                },
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every",
                },
                {
                  word: "notte",
                  lemma: "notte",
                  pos: "noun",
                  meaning: "night",
                },
              ],
              grammarNote: "Syntactic continuation from the previous line ('Essa si corca / rossa così ogni notte').",
            },
          ],
        },
        {
          id: "a1_s1_c25",
          speaker: "Dr. Caius",
          stageDirection: "scoppiando",
          stageDirectionTranslation: "bursting out",
          lines: [
            {
              id: "a1_s1_c25_l1",
              original: "Pronostico di forca!",
              literal: "A prognosis of the gallows!",
              tokens: [
                {
                  word: "Pronostico",
                  lemma: "pronostico",
                  pos: "noun",
                  meaning: "prognosis / prediction",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "forca",
                  lemma: "forca",
                  pos: "noun",
                  meaning: "gallows / gibbet",
                },
              ],
              grammarNote: "Caius delivers his furious diagnosis: rather than medical treatment, Caius diagnoses that Bardolfo's drunken knavery will inevitably lead him to be hanged from the gallows ('forca').",
            },
          ],
        },
        {
          id: "a1_s1_c26",
          speaker: "Dr. Caius",
          stageDirection: "indicando Pistola",
          stageDirectionTranslation: "pointing to Pistola",
          lines: [
            {
              id: "a1_s1_c26_l1",
              original: "M'hai fatto ber, furfante, con lui, narrando frasche;",
              literal: "You made me drink, scoundrel, with him, telling tall tales;",
              tokens: [
                {
                  word: "ber",
                  lemma: "bere",
                  pos: "verb",
                  meaning: "to drink (apocope of bere)",
                },
                {
                  word: "furfante",
                  lemma: "furfante",
                  pos: "noun",
                  meaning: "scoundrel / rogue",
                },
                {
                  word: "narrando",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "telling / reciting (gerund)",
                },
                {
                  word: "frasche",
                  lemma: "frasca",
                  pos: "noun",
                  meaning: "tall tales / trifles / idle chatter",
                },
              ],
              grammarNote: "Caius accuses Bardolfo of plying him with wine while distracting him with 'frasche' (literally branches/twigs, an Italian idiom for tall tales, frivolous gossip, and nonsense) so they could pick his pockets.",
            },
            {
              id: "a1_s1_c26_l2",
              original: "poi, quando fui ben ciùschero, m'hai vuotato le tasche.",
              literal: "then, when I was completely tipsy, you emptied my pockets.",
              tokens: [
                {
                  word: "quando",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when",
                },
                {
                  word: "ciùschero",
                  lemma: "ciuscherò",
                  pos: "adjective",
                  meaning: "tipsy / drunk / inebriated",
                },
                {
                  word: "vuotato",
                  lemma: "vuotare",
                  pos: "verb",
                  meaning: "emptied",
                },
                {
                  word: "tasche",
                  lemma: "tasca",
                  pos: "noun",
                  meaning: "pockets",
                },
              ],
              grammarNote: "'Ciùschero' is a Tuscan colloquial term meaning pleasantly tipsy or intoxicated. Caius complains that once he was thoroughly drunk, Bardolfo cleaned out his pockets.",
            },
          ],
        },
        {
          id: "a1_s1_c27",
          speaker: "Bardolfo",
          stageDirection: "con decoro",
          stageDirectionTranslation: "with dignity",
          lines: [
            {
              id: "a1_s1_c27_l1",
              original: "Non io.",
              literal: "Not I.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c28",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c28_l1",
              original: "Chi fu?",
              literal: "Who was it?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who",
                },
                {
                  word: "fu",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "was (passato remoto 3rd singular)",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c29",
          speaker: "Sir John Falstaff",
          stageDirection: "chiamando",
          stageDirectionTranslation: "calling out",
          lines: [
            {
              id: "a1_s1_c29_l1",
              original: "Pistola!",
              literal: "Pistola!",
              tokens: [
                {
                  word: "Pistola",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistol (proper name)",
                },
              ],
              grammarNote: "Falstaff summons his other follower, Pistol (Pistola).",
            },
          ],
        },
        {
          id: "a1_s1_c30",
          speaker: "Pistola",
          stageDirection: "avanzandosi",
          stageDirectionTranslation: "stepping forward",
          lines: [
            {
              id: "a1_s1_c30_l1",
              original: "Padrone.",
              literal: "Master.",
              tokens: [
                {
                  word: "Padrone",
                  lemma: "padrone",
                  pos: "noun",
                  meaning: "master / boss",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c31",
          speaker: "Sir John Falstaff",
          stageDirection: "sempre seduto sul seggiolone e con flemma",
          stageDirectionTranslation: "still seated in the armchair and phlegmatic",
          lines: [
            {
              id: "a1_s1_c31_l1",
              original: "Hai tu vuotate",
              literal: "Did you empty",
              tokens: [
                {
                  word: "Hai",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "have (2nd singular)",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "vuotate",
                  lemma: "vuotare",
                  pos: "verb",
                  meaning: "emptied (feminine plural past participle)",
                },
              ],
              grammarNote: "The past participle 'vuotate' agrees in gender and number with the direct object 'le tasche' in the next line.",
            },
            {
              id: "a1_s1_c31_l2",
              original: "le tasche a quel messere?",
              literal: "that gentleman's pockets?",
              tokens: [
                {
                  word: "tasche",
                  lemma: "tasca",
                  pos: "noun",
                  meaning: "pockets",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "messere",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "gentleman / sir",
                },
              ],
              grammarNote: "Continuation from previous line: 'Hai tu vuotate / le tasche a quel messere?'",
            },
          ],
        },
        {
          id: "a1_s1_c32",
          speaker: "Dr. Caius",
          stageDirection: "scattando contro Pistola",
          stageDirectionTranslation: "lunging at Pistola",
          lines: [
            {
              id: "a1_s1_c32_l1",
              original: "Certo fu lui. Guardate.",
              literal: "Certainly it was he. Look.",
              tokens: [
                {
                  word: "Certo",
                  lemma: "certo",
                  pos: "adverb",
                  meaning: "certainly / surely",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him",
                },
                {
                  word: "Guardate",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "look / see (imperative 2nd plural)",
                },
              ],
            },
            {
              id: "a1_s1_c32_l2",
              original: "Come s'atteggia al niego quel ceffo da bugiardo!",
              literal: "How that liar's mug strikes an attitude of denial!",
              tokens: [
                {
                  word: "s'atteggia",
                  lemma: "atteggiarsi",
                  pos: "verb",
                  meaning: "poses / strikes an attitude",
                },
                {
                  word: "niego",
                  lemma: "niego",
                  pos: "noun",
                  meaning: "denial / refusal (literary variant of diniego)",
                },
                {
                  word: "ceffo",
                  lemma: "ceffo",
                  pos: "noun",
                  meaning: "ugly mug / snout / sinister face",
                },
                {
                  word: "bugiardo",
                  lemma: "bugiardo",
                  pos: "noun",
                  meaning: "liar",
                },
              ],
              grammarNote: "'Niego' is an archaic Tuscan literary variant of 'diniego' (denial). 'Ceffo' is a derogatory term for a brute or villain's snout/face.",
            },
          ],
        },
        {
          id: "a1_s1_c33",
          speaker: "Dr. Caius",
          stageDirection: "vuotando una tasca del farsetto",
          stageDirectionTranslation: "emptying a pocket of his doublet",
          lines: [
            {
              id: "a1_s1_c33_l1",
              original: "Qui c'eran due scellini del regno d'Edoardo",
              literal: "Here there were two shillings from the reign of Edward",
              tokens: [
                {
                  word: "c'eran",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there were (apocope of c'erano)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two",
                },
                {
                  word: "scellini",
                  lemma: "scellino",
                  pos: "noun",
                  meaning: "shillings",
                },
                {
                  word: "regno",
                  lemma: "regno",
                  pos: "noun",
                  meaning: "reign / kingdom",
                },
                {
                  word: "Edoardo",
                  lemma: "Edoardo",
                  pos: "noun",
                  meaning: "Edward (King Edward VI)",
                },
              ],
              grammarNote: "Refers to English King Edward VI shillings ('two Edward shovel-boards' in Shakespeare's *Merry Wives of Windsor*).",
            },
            {
              id: "a1_s1_c33_l2",
              original: "e sei mezzecorone.",
              literal: "and six half-crowns.",
              tokens: [
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "sei",
                  lemma: "sei",
                  pos: "adjective",
                  meaning: "six",
                },
                {
                  word: "mezzecorone",
                  lemma: "mezzacorona",
                  pos: "noun",
                  meaning: "half-crowns (English silver coins worth 2s 6d)",
                },
              ],
              grammarNote: "A 'mezzacorona' (half-crown) was an English coin valued at two shillings and sixpence.",
            },
            {
              id: "a1_s1_c33_l3",
              original: "Non ne riman più segno.",
              literal: "Not a trace of them remains.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "of them (partitive clitic pronoun)",
                },
                {
                  word: "riman",
                  lemma: "rimanere",
                  pos: "verb",
                  meaning: "remains (apocope of rimane)",
                },
                {
                  word: "segno",
                  lemma: "segno",
                  pos: "noun",
                  meaning: "trace / sign / mark",
                },
              ],
              grammarNote: "'Ne' is the partitive clitic referring to the coins; 'riman' is an apocope of 'rimane'.",
            },
          ],
        },
        {
          id: "a1_s1_c34",
          speaker: "Pistola",
          stageDirection: "a Falstaff, dignitosamente brandendo la scopa",
          stageDirectionTranslation: "to Falstaff, dignifiedly brandishing the broom",
          lines: [
            {
              id: "a1_s1_c34_l1",
              original: "Padron, chiedo di battermi con quest'arma di legno.",
              literal: "Master, I ask to fight with this wooden weapon.",
              tokens: [
                {
                  word: "Padron",
                  lemma: "padrone",
                  pos: "noun",
                  meaning: "master (apocope of padrone)",
                },
                {
                  word: "chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I ask / request",
                },
                {
                  word: "battermi",
                  lemma: "battersi",
                  pos: "verb",
                  meaning: "to fight / duel",
                },
                {
                  word: "arma",
                  lemma: "arma",
                  pos: "noun",
                  meaning: "weapon",
                },
                {
                  word: "legno",
                  lemma: "legno",
                  pos: "noun",
                  meaning: "wood",
                },
              ],
              grammarNote: "Pistola grandiosely demands formal chivalric permission from Falstaff to duel Dr. Caius, waving a wooden tavern slat or bill as his 'weapon of wood' with mock-heroic swagger.",
            },
          ],
        },
        {
          id: "a1_s1_c35",
          speaker: "Pistola",
          stageDirection: "al Dr. Cajus con forza",
          stageDirectionTranslation: "to Dr. Caius forcefully",
          lines: [
            {
              id: "a1_s1_c35_l1",
              original: "Vi smentisco!",
              literal: "I give you the lie!",
              tokens: [
                {
                  word: "Vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (formal/plural object)",
                },
                {
                  word: "smentisco",
                  lemma: "smentire",
                  pos: "verb",
                  meaning: "I deny / give the lie to / contradict",
                },
              ],
              grammarNote: "In chivalric duel codes, 'smentire' ('giving the lie') was a grave formal provocation that demanded immediate combat; Pistola affects aristocratic dueling etiquette despite being a penniless tavern rogue.",
            },
          ],
        },
        {
          id: "a1_s1_c36",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c36_l1",
              original: "Bifolco! tu parli a un gentiluomo!",
              literal: "Churl! you speak to a gentleman!",
              tokens: [
                {
                  word: "Bifolco",
                  lemma: "bifolco",
                  pos: "noun",
                  meaning: "churl / boor / plowman",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "parli",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "you speak",
                },
                {
                  word: "gentiluomo",
                  lemma: "gentiluomo",
                  pos: "noun",
                  meaning: "gentleman",
                },
              ],
              grammarNote: "Dr. Caius is outraged that a vulgar ruffian dares challenge him to a duel, calling Pistola a 'bifolco' (a base peasant/ox-plowman) who has no right to address a gentleman of standing.",
            },
          ],
        },
        {
          id: "a1_s1_c37",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c37_l1",
              original: "Gonzo!",
              literal: "Dolt!",
              tokens: [
                {
                  word: "Gonzo",
                  lemma: "gonzo",
                  pos: "noun",
                  meaning: "dolt / simpleton / gullible fool",
                },
              ],
              grammarNote: "Tuscan insult for a gullible, foolish dupe.",
            },
          ],
        },
        {
          id: "a1_s1_c38",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c38_l1",
              original: "Pezzente!",
              literal: "Beggar!",
              tokens: [
                {
                  word: "Pezzente",
                  lemma: "pezzente",
                  pos: "noun",
                  meaning: "beggar / pauper / tatterdemalion",
                },
              ],
              grammarNote: "Caius mocks Pistola's threadbare, penniless condition.",
            },
          ],
        },
        {
          id: "a1_s1_c39",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c39_l1",
              original: "Bestia!",
              literal: "Beast!",
              tokens: [
                {
                  word: "Bestia",
                  lemma: "bestia",
                  pos: "noun",
                  meaning: "beast / animal / brute",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c40",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c40_l1",
              original: "Can!",
              literal: "Dog!",
              tokens: [
                {
                  word: "Can",
                  lemma: "cane",
                  pos: "noun",
                  meaning: "dog / cur (apocope of cane)",
                },
              ],
              grammarNote: "'Can' is an apocope of 'cane', an epithet denoting utter baseness.",
            },
          ],
        },
        {
          id: "a1_s1_c41",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c41_l1",
              original: "Vil!",
              literal: "Vile coward!",
              tokens: [
                {
                  word: "Vil",
                  lemma: "vile",
                  pos: "adjective",
                  meaning: "vile / base / cowardly (apocope of vile)",
                },
              ],
              grammarNote: "'Vil' is an apocope of 'vile' (base, cowardly).",
            },
          ],
        },
        {
          id: "a1_s1_c42",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c42_l1",
              original: "Spauracchio!",
              literal: "Scarecrow!",
              tokens: [
                {
                  word: "Spauracchio",
                  lemma: "spauracchio",
                  pos: "noun",
                  meaning: "scarecrow / bogey / bugbear",
                },
              ],
              grammarNote: "Derides Pistola's gaunt, ragged, menacing appearance.",
            },
          ],
        },
        {
          id: "a1_s1_c43",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c43_l1",
              original: "Gnomo!",
              literal: "Gnome!",
              tokens: [
                {
                  word: "Gnomo",
                  lemma: "gnomo",
                  pos: "noun",
                  meaning: "gnome / dwarf",
                },
              ],
              grammarNote: "Pistola mocks Caius's short stature or odd appearance.",
            },
          ],
        },
        {
          id: "a1_s1_c44",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c44_l1",
              original: "Germoglio di mandragora!",
              literal: "Sprout of mandrake!",
              tokens: [
                {
                  word: "Germoglio",
                  lemma: "germoglio",
                  pos: "noun",
                  meaning: "sprout / shoot / offshoot",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "mandragora",
                  lemma: "mandragora",
                  pos: "noun",
                  meaning: "mandrake root",
                },
              ],
              grammarNote: "Caius calls Pistola a 'sprout of mandrake'—a poisonous mythical plant whose bifurcated roots were said to resemble a deformed little human and shriek like demons when uprooted—insulting Pistola's grotesque appearance and depravity.",
            },
          ],
        },
        {
          id: "a1_s1_c45",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c45_l1",
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
          id: "a1_s1_c46",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c46_l1",
              original: "Tu.",
              literal: "You.",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. tonic pronoun)",
                },
              ],
              grammarNote: "Dr. Caius fires back instantly, pointing the finger right back at Ford.",
            },
          ],
        },
        {
          id: "a1_s1_c47",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c47_l1",
              original: "Ripeti!",
              literal: "Repeat it!",
              tokens: [
                {
                  word: "Ripeti",
                  lemma: "ripetere",
                  pos: "verb",
                  meaning: "repeat (imperative 2nd singular)",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c48",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c48_l1",
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
          id: "a1_s1_c49",
          speaker: "Pistola",
          stageDirection: "scagliandosi contro il Dr. Cajus",
          stageDirectionTranslation: "lashing out at Dr. Caius",
          lines: [
            {
              id: "a1_s1_c49_l1",
              original: "Saette!",
              literal: "Thunderbolts!",
              tokens: [
                {
                  word: "Saette",
                  lemma: "saetta",
                  pos: "noun",
                  meaning: "thunderbolts / lightning bolts (exclamation)",
                },
              ],
              grammarNote: "'Saette!' (literally arrows/lightning bolts) is an oath of fury akin to 'Zounds!' or 'Thunder and lightning!'.",
            },
          ],
        },
        {
          id: "a1_s1_c50",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c50_l1",
              original: "Ehi là! Pistola!",
              literal: "Hey there! Pistola!",
              tokens: [
                {
                  word: "Ehi là",
                  lemma: "ehi là",
                  pos: "interjection",
                  meaning: "hey there / whoa there",
                },
                {
                  word: "Pistola",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistol (proper name)",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c51",
          speaker: "Sir John Falstaff",
          stageDirection: "al cenno di Falstaff, Pistola si frena",
          stageDirectionTranslation: "at Falstaff's gesture, Pistola checks himself",
          lines: [
            {
              id: "a1_s1_c51_l1",
              original: "Non scaricarti qui!",
              literal: "Do not discharge yourself here!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "scaricarti",
                  lemma: "scaricarsi",
                  pos: "verb",
                  meaning: "to discharge oneself / go off / vent (reflexive infinitive with clitic ti)",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
              ],
              grammarNote: "Falstaff makes a witty pun on Pistola's name ('Pistol'): he commands his hot-headed henchman (a firearm) not to 'discharge' (scaricarsi / fire / explode with rage) inside the inn.",
            },
          ],
        },
        {
          id: "a1_s1_c52",
          speaker: "Sir John Falstaff",
          stageDirection: "chiamando Bardolfo, che s'avvicina",
          stageDirectionTranslation: "calling Bardolfo, who approaches",
          lines: [
            {
              id: "a1_s1_c52_l1",
              original: "Bardolfo! Chi ha vuotato le tasche a quel messere?",
              literal: "Bardolfo! Who emptied that gentleman's pockets?",
              tokens: [
                {
                  word: "vuotato",
                  lemma: "vuotare",
                  pos: "verb",
                  meaning: "emptied",
                },
                {
                  word: "tasche",
                  lemma: "tasca",
                  pos: "noun",
                  meaning: "pockets",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "messere",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "gentleman / sir",
                },
              ],
            },
          ],
        },
        {
          id: "a1_s1_c53",
          speaker: "Dr. Caius",
          stageDirection: "subito",
          stageDirectionTranslation: "immediately",
          lines: [
            {
              id: "a1_s1_c53_l1",
              original: "Fu l'un dei due.",
              literal: "It was one of the two.",
              tokens: [
                {
                  word: "Fu",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "was (passato remoto 3rd singular)",
                },
                {
                  word: "l'un",
                  lemma: "uno",
                  pos: "pronoun",
                  meaning: "the one (apocope of l'uno)",
                },
                {
                  word: "dei",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + i)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two",
                },
              ],
              grammarNote: "'L'un' is an apocope of 'l'uno'.",
            },
          ],
        },
        {
          id: "a1_s1_c54",
          speaker: "Bardolfo",
          stageDirection: "con serenità, indicando il Dr. Cajus",
          stageDirectionTranslation: "serenely, pointing to Dr. Caius",
          lines: [
            {
              id: "a1_s1_c54_l1",
              original: "Costui beve, poi pe 'l gran bere",
              literal: "This fellow drinks, then from the heavy drinking",
              tokens: [
                {
                  word: "Costui",
                  lemma: "costui",
                  pos: "pronoun",
                  meaning: "this fellow / this man (pejorative demonstrative pronoun)",
                },
                {
                  word: "beve",
                  lemma: "bere",
                  pos: "verb",
                  meaning: "drinks",
                },
                {
                  word: "pe 'l",
                  lemma: "per il",
                  pos: "preposition",
                  meaning: "for the / through the (archaic contraction of per + il)",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / heavy (apocope of grande)",
                },
                {
                  word: "bere",
                  lemma: "bere",
                  pos: "noun",
                  meaning: "drinking (nominalized infinitive)",
                },
              ],
              grammarNote: "Bardolfo concocts a brazen excuse: he claims Dr. Caius simply drank excessively ('pe 'l gran bere'), using the pejorative demonstrative 'Costui' ('this fellow'). 'Pe 'l' is an archaic contraction of 'per il'.",
            },
            {
              id: "a1_s1_c54_l2",
              original: "perde i suoi cinque sensi, poi ti narra una favola",
              literal: "loses his five senses, then tells you a fairy tale",
              tokens: [
                {
                  word: "perde",
                  lemma: "perdere",
                  pos: "verb",
                  meaning: "loses",
                },
                {
                  word: "sensi",
                  lemma: "senso",
                  pos: "noun",
                  meaning: "senses",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "to you (ethical dative pronoun)",
                },
                {
                  word: "narra",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "tells / narrates",
                },
                {
                  word: "favola",
                  lemma: "favola",
                  pos: "noun",
                  meaning: "fable / fairy tale / fabrication",
                },
              ],
              grammarNote: "Bardolfo argues that Caius lost all his senses through drink and fabricated the whole robbery as a drunken hallucination ('favola' = fairy tale/fiction). 'Ti' is an ethical dative.",
            },
            {
              id: "a1_s1_c54_l3",
              original: "ch'egli ha sognato mentre dormì sotto la tavola.",
              literal: "that he dreamed while he slept under the table.",
              tokens: [
                {
                  word: "ch'egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "that he (contraction of conjunction che + pronoun egli)",
                },
                {
                  word: "sognato",
                  lemma: "sognare",
                  pos: "verb",
                  meaning: "dreamed",
                },
                {
                  word: "mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while",
                },
                {
                  word: "dormì",
                  lemma: "dormire",
                  pos: "verb",
                  meaning: "slept (passato remoto 3rd singular)",
                },
                {
                  word: "tavola",
                  lemma: "tavola",
                  pos: "noun",
                  meaning: "table",
                },
              ],
              grammarNote: "Bardolfo claims Caius passed out dead drunk under the tavern table and dreamed the entire theft while asleep.",
            },
          ],
        },
        {
          id: "a1_s1_c55",
          speaker: "Sir John Falstaff",
          stageDirection: "al Dr. Cajus",
          stageDirectionTranslation: "to Dr. Caius",
          lines: [
            {
              id: "a1_s1_c55_l1",
              original: "L'odi? Se ti capaciti, del ver tu sei sicuro.",
              literal: "Do you hear him? If you see reason, you are sure of the truth.",
              tokens: [
                {
                  word: "L'odi",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "do you hear him (clitic lo + odi)",
                },
                {
                  word: "capaciti",
                  lemma: "capacitarsi",
                  pos: "verb",
                  meaning: "you convince yourself / come to terms",
                },
                {
                  word: "ver",
                  lemma: "vero",
                  pos: "noun",
                  meaning: "truth (apocope of vero)",
                },
                {
                  word: "sicuro",
                  lemma: "sicuro",
                  pos: "adjective",
                  meaning: "sure / certain",
                },
              ],
              grammarNote: "'Capacitarsi' means to understand or convince oneself of a fact. 'Ver' is an apocope of 'vero'.",
            },
            {
              id: "a1_s1_c55_l2",
              original: "I fatti son negati. Vattene in pace.",
              literal: "The facts are denied. Go in peace.",
              tokens: [
                {
                  word: "fatti",
                  lemma: "fatto",
                  pos: "noun",
                  meaning: "facts / deeds",
                },
                {
                  word: "son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "are (apocope of sono)",
                },
                {
                  word: "negati",
                  lemma: "negare",
                  pos: "verb",
                  meaning: "denied",
                },
                {
                  word: "Vattene",
                  lemma: "andarsene",
                  pos: "verb",
                  meaning: "go away (imperative 2nd singular)",
                },
                {
                  word: "pace",
                  lemma: "pace",
                  pos: "noun",
                  meaning: "peace",
                },
              ],
              grammarNote: "Falstaff parodies legal court formulas ('I fatti son negati') coupled with mock priestly benediction ('Vattene in pace').",
            },
          ],
        },
        {
          id: "a1_s1_c56",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s1_c56_l1",
              original: "Giuro",
              literal: "I swear",
              tokens: [
                {
                  word: "Giuro",
                  lemma: "giurare",
                  pos: "verb",
                  meaning: "I swear",
                },
              ],
              grammarNote: "Caius begins his solemn resolution, continuing across lines 72 and 73.",
            },
            {
              id: "a1_s1_c56_l2",
              original: "che se mai mi ubriaco ancora all'osteria",
              literal: "that if ever I get drunk again at the tavern",
              tokens: [
                {
                  word: "se mai",
                  lemma: "se mai",
                  pos: "idiom",
                  meaning: "if ever",
                },
                {
                  word: "ubriaco",
                  lemma: "ubriacarsi",
                  pos: "verb",
                  meaning: "I get drunk",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "again / still",
                },
                {
                  word: "osteria",
                  lemma: "osteria",
                  pos: "noun",
                  meaning: "tavern / inn",
                },
              ],
              grammarNote: "Dr. Caius makes the solemn vow directly adapted from Shakespeare's *Merry Wives of Windsor*.",
            },
            {
              id: "a1_s1_c56_l3",
              original: "sarà fra gente onesta, sobria, civile e pia.",
              literal: "it will be among honest, sober, civil, and pious people.",
              tokens: [
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "among / between",
                },
                {
                  word: "onesta",
                  lemma: "onesto",
                  pos: "adjective",
                  meaning: "honest",
                },
                {
                  word: "sobria",
                  lemma: "sobrio",
                  pos: "adjective",
                  meaning: "sober / temperate",
                },
                {
                  word: "civile",
                  lemma: "civile",
                  pos: "adjective",
                  meaning: "civil / well-mannered",
                },
                {
                  word: "pia",
                  lemma: "pio",
                  pos: "adjective",
                  meaning: "pious / godly",
                },
              ],
              grammarNote: "Caius's famous vow: to only get drunk 'in honest, civil, godly company'.",
            },
          ],
        },
        {
          id: "a1_s1_c57",
          speaker: "Dr. Caius",
          stageDirection: "esce dalla porta di sinistra",
          stageDirectionTranslation: "exits through the left door",
          lines: [
          ],
        },
        {
          id: "a1_s1_c58",
          speaker: "Bardolfo & Pistola",
          stageDirection: "accompagnando buffonescamente fino all'uscio il Dr. Cajus e salmodiando",
          stageDirectionTranslation: "buffoonishly escorting Dr. Caius to the door while chanting",
          lines: [
            {
              id: "a1_s1_c58_l1",
              original: "Amen.",
              literal: "Amen.",
              tokens: [
                {
                  word: "Amen",
                  lemma: "amen",
                  pos: "interjection",
                  meaning: "amen / so be it",
                },
              ],
              grammarNote: "Bardolfo and Pistola mockingly chant a solemn liturgical 'Amen'.",
            },
          ],
        },
        {
          id: "a1_s1_c59",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c59_l1",
              original: "Cessi l'antifona. La urlate in contrattempo.",
              literal: "Cease the antiphon. You howl it off the beat.",
              tokens: [
                {
                  word: "Cessi",
                  lemma: "cessare",
                  pos: "verb",
                  meaning: "let cease / stop (jussive subjunctive 3rd singular)",
                },
                {
                  word: "antifona",
                  lemma: "antifona",
                  pos: "noun",
                  meaning: "antiphon / liturgical chant",
                },
                {
                  word: "urlate",
                  lemma: "urlare",
                  pos: "verb",
                  meaning: "you howl / bellow",
                },
                {
                  word: "contrattempo",
                  lemma: "contrattempo",
                  pos: "noun",
                  meaning: "off-beat / out of time (musical syncopation)",
                },
              ],
              grammarNote: "Falstaff cuts off Bardolfo and Pistola's mock-church choir chanting of 'Amen', rebuking them like an irritable choirmaster for howling it out of time / off the beat ('in contrattempo').",
            },
          ],
        },
        {
          id: "a1_s1_c60",
          speaker: "Sir John Falstaff",
          stageDirection: "Bardolfo e Pistola smettono e si avvicinano a Falstaff",
          stageDirectionTranslation: "Bardolfo e Pistola smettono e si avvicinano to Falstaff",
          lines: [
          ],
        },
        {
          id: "a1_s1_c61",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c61_l1",
              original: "L'arte sta in questa massima: «rubar con garbo e a tempo».",
              literal: "The art lies in this maxim: «to steal with grace and in time».",
              tokens: [
                {
                  word: "arte",
                  lemma: "arte",
                  pos: "noun",
                  meaning: "art / craft / skill",
                },
                {
                  word: "massima",
                  lemma: "massima",
                  pos: "noun",
                  meaning: "maxim / rule",
                },
                {
                  word: "rubar",
                  lemma: "rubare",
                  pos: "verb",
                  meaning: "to steal (apocope of rubare)",
                },
                {
                  word: "garbo",
                  lemma: "garbo",
                  pos: "noun",
                  meaning: "grace / tact / politeness",
                },
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time / tempo / measure",
                },
              ],
              grammarNote: "Falstaff lectures his henchmen on the fine art of thievery: a true master thief must steal with elegance ('garbo') and perfect timing ('a tempo', playing on the musical term for keeping time).",
            },
            {
              id: "a1_s1_c61_l2",
              original: "Siete dei rozzi artisti.",
              literal: "You are clumsy artists.",
              tokens: [
                {
                  word: "Siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are",
                },
                {
                  word: "rozzi",
                  lemma: "rozzo",
                  pos: "adjective",
                  meaning: "clumsy / coarse / crude",
                },
                {
                  word: "artisti",
                  lemma: "artista",
                  pos: "noun",
                  meaning: "artists",
                },
              ],
              grammarNote: "Falstaff ironically treats crime as a fine art and chides his men as unrefined amateurs.",
            },
          ],
        },
        {
          id: "a1_s1_c62",
          speaker: "Sir John Falstaff",
          stageDirection: "si mette ad esaminare il conto che l'oste avrà portat insieme alla bottiglia di Xeres",
          stageDirectionTranslation: "he begins examining the bill that the innkeeper has brought along with the bottle of sherry",
          lines: [
            {
              id: "a1_s1_c62_l1",
              original: "«Sei polli: sei scellini,",
              literal: "«Six chickens: six shillings,",
              tokens: [
                {
                  word: "Sei",
                  lemma: "sei",
                  pos: "adjective",
                  meaning: "six",
                },
                {
                  word: "polli",
                  lemma: "pollo",
                  pos: "noun",
                  meaning: "chickens",
                },
                {
                  word: "scellini",
                  lemma: "scellino",
                  pos: "noun",
                  meaning: "shillings",
                },
              ],
              grammarNote: "Falstaff begins reading the tavern bill line by line.",
            },
            {
              id: "a1_s1_c62_l2",
              original: "trenta giarre di Xeres: due lire; tre tacchini...»",
              literal: "thirty jars of sherry: two pounds; three turkeys...»",
              tokens: [
                {
                  word: "giarre",
                  lemma: "giarra",
                  pos: "noun",
                  meaning: "jars / flagons (archaic variant of giara)",
                },
                {
                  word: "Xeres",
                  lemma: "Xeres",
                  pos: "noun",
                  meaning: "sherry",
                },
                {
                  word: "lire",
                  lemma: "lira",
                  pos: "noun",
                  meaning: "pounds (currency)",
                },
                {
                  word: "tacchini",
                  lemma: "tacchino",
                  pos: "noun",
                  meaning: "turkeys",
                },
              ],
              grammarNote: "'Giarre' is an archaic spelling of 'giare' (flagons/jars). 'Lire' translates English pounds.",
            },
          ],
        },
        {
          id: "a1_s1_c63",
          speaker: "Sir John Falstaff",
          stageDirection: "a Bardolfo gettandogli la borsa",
          stageDirectionTranslation: "to Bardolfo, tossing him the purse",
          lines: [
            {
              id: "a1_s1_c63_l1",
              original: "Fruga nella mia borsa.",
              literal: "Rummage in my purse.",
              tokens: [
                {
                  word: "Fruga",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "rummage / search through (imperative 2nd singular)",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "borsa",
                  lemma: "borsa",
                  pos: "noun",
                  meaning: "purse / money bag",
                },
              ],
              grammarNote: "Falstaff orders Bardolfo to search his coin purse to settle the tavern bill.",
            },
          ],
        },
        {
          id: "a1_s1_c64",
          speaker: "Sir John Falstaff",
          stageDirection: "e si rimette a leggere lentamente",
          stageDirectionTranslation: "and resumes reading slowly",
          lines: [
            {
              id: "a1_s1_c64_l1",
              original: "«Due fagiani, un'acciuga.»",
              literal: "«Two pheasants, an anchovy.»",
              tokens: [
                {
                  word: "Due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two",
                },
                {
                  word: "fagiani",
                  lemma: "fagiano",
                  pos: "noun",
                  meaning: "pheasants",
                },
                {
                  word: "un'acciuga",
                  lemma: "acciuga",
                  pos: "noun",
                  meaning: "an anchovy",
                },
              ],
              grammarNote: "Quotes Prince Hal's reading of Falstaff's tavern bill in Shakespeare's *Henry IV, Part 1* ('an anchovy and sack').",
            },
          ],
        },
        {
          id: "a1_s1_c65",
          speaker: "Bardolfo",
          stageDirection: "estrae dalla borsa le monete e le conta sul tavolo",
          stageDirectionTranslation: "takes the coins from the purse and counts them on the table",
          lines: [
            {
              id: "a1_s1_c65_l1",
              original: "Un mark, un mark, un penny.",
              literal: "A mark, a mark, a penny.",
              tokens: [
                {
                  word: "Un",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "a / one",
                },
                {
                  word: "mark",
                  lemma: "mark",
                  pos: "noun",
                  meaning: "mark (medieval English currency unit worth 13s 4d)",
                },
                {
                  word: "penny",
                  lemma: "penny",
                  pos: "noun",
                  meaning: "penny (English silver/copper coin)",
                },
              ],
              grammarNote: "Bardolfo counts the meager coins remaining in the purse: Falstaff is destitute.",
            },
          ],
        },
        {
          id: "a1_s1_c66",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c66_l1",
              original: "Fruga.",
              literal: "Rummage.",
              tokens: [
                {
                  word: "Fruga",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "rummage / search thoroughly",
                },
                {
                  word: "frugare",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "to search through / rummage",
                },
              ],
              grammarNote: "Falstaff orders Bardolfo to rummage through their pockets and tavern purse to find money for the bill. 'Fruga' is the second-person singular imperative of 'frugare' (to search thoroughly).",
            },
          ],
        },
        {
          id: "a1_s1_c67",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c67_l1",
              original: "Ho frugato.",
              literal: "I have searched.",
              tokens: [
                {
                  word: "Ho",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "have (1st person singular present)",
                },
                {
                  word: "frugato",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "searched / rummaged (past participle)",
                },
              ],
              grammarNote: "Bardolfo's dejected reply that he has already searched the purse and found nothing. Passato prossimo of 'frugare' using auxiliary 'avere'.",
            },
          ],
        },
        {
          id: "a1_s1_c68",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c68_l1",
              original: "Fruga!",
              literal: "Rummage!",
              tokens: [
                {
                  word: "Fruga",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "rummage! / search! (imperative)",
                },
                {
                  word: "frugare",
                  lemma: "frugare",
                  pos: "verb",
                  meaning: "to search thoroughly / rummage",
                },
              ],
              grammarNote: "Falstaff refuses to accept that they are completely broke and furiously repeats the command: 'Search again!'",
            },
          ],
        },
        {
          id: "a1_s1_c69",
          speaker: "Bardolfo",
          stageDirection: "gettando la borsa sul tavolo",
          stageDirectionTranslation: "tossing the purse onto the table",
          lines: [
            {
              id: "a1_s1_c69_l1",
              original: "Qui non c'è più uno spicciolo.",
              literal: "Here there is not a penny left.",
              tokens: [
                {
                  word: "Qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "non c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is not",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / longer (reinforcing negation)",
                },
                {
                  word: "spicciolo",
                  lemma: "spicciolo",
                  pos: "noun",
                  meaning: "small change / coin / penny",
                },
              ],
              grammarNote: "Bardolfo reveals the painful truth that they are totally out of money. 'Spicciolo' denotes small change or copper coins; double negative 'non c'è più' means 'there isn't any more left'.",
            },
          ],
        },
        {
          id: "a1_s1_c70",
          speaker: "Sir John Falstaff",
          stageDirection: "alzandosi",
          stageDirectionTranslation: "standing up",
          lines: [
            {
              id: "a1_s1_c70_l1",
              original: "Sei la mia distruzione!",
              literal: "You are my ruin!",
              tokens: [
                {
                  word: "Sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd person singular)",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "distruzione",
                  lemma: "distruzione",
                  pos: "noun",
                  meaning: "ruin / destruction",
                },
              ],
              grammarNote: "Falstaff blames Bardolfo for drinking away all his money. Uses the standard Italian possessive structure with definite article 'la mia distruzione' (literally 'the my destruction', meaning 'my ruin').",
            },
            {
              id: "a1_s1_c70_l2",
              original: "Spendo ogni sette giorni dieci ghinee! Beone!",
              literal: "I spend ten guineas every seven days! Drunkard!",
              tokens: [
                {
                  word: "Spendo",
                  lemma: "spendere",
                  pos: "verb",
                  meaning: "I spend (1st person singular)",
                },
                {
                  word: "giorni",
                  lemma: "giorno",
                  pos: "noun",
                  meaning: "days",
                },
                {
                  word: "ghinee",
                  lemma: "ghinea",
                  pos: "noun",
                  meaning: "guineas (British gold coins)",
                },
                {
                  word: "Beone",
                  lemma: "beone",
                  pos: "noun",
                  meaning: "drunkard / tippler (augmentative from bere)",
                },
              ],
              grammarNote: "Falstaff complains about their ruinous tavern tab, adapting Shakespeare's 'I sit at ten pounds a week' (Merry Wives I.3). 'Beone' is an expressive augmentative noun derived from 'bere' (to drink), meaning a heavy sot.",
            },
            {
              id: "a1_s1_c70_l3",
              original: "So che se andiam, la notte, di taverna in taverna,",
              literal: "I know that if we go, at night, from tavern to tavern,",
              tokens: [
                {
                  word: "So",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "I know (1st person singular)",
                },
                {
                  word: "andiam",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "we go (apocopated from andiamo)",
                },
                {
                  word: "notte",
                  lemma: "notte",
                  pos: "noun",
                  meaning: "night",
                },
                {
                  word: "taverna",
                  lemma: "taverna",
                  pos: "noun",
                  meaning: "tavern / inn",
                },
              ],
              grammarNote: "Falstaff begins his famous teasing about Bardolfo's alcohol-reddened nose (drawn from 1 Henry IV, III.3). 'Andiam' is an apocope of 'andiamo' (we go).",
            },
            {
              id: "a1_s1_c70_l4",
              original: "quel tuo naso ardentissimo mi serve da lanterna;",
              literal: "that blazing nose of yours serves me as a lantern;",
              tokens: [
                {
                  word: "naso",
                  lemma: "naso",
                  pos: "noun",
                  meaning: "nose",
                },
                {
                  word: "ardentissimo",
                  lemma: "ardente",
                  pos: "adjective",
                  meaning: "blazing / glowing fiery hot (absolute superlative)",
                },
                {
                  word: "serve",
                  lemma: "servire",
                  pos: "verb",
                  meaning: "serves",
                },
                {
                  word: "lanterna",
                  lemma: "lanterna",
                  pos: "noun",
                  meaning: "lantern",
                },
              ],
              grammarNote: "Falstaff jokes that Bardolfo's glowing red nose lights their way in the dark like a street lantern (Shakespeare's 'thou art our admiral, thou bearest the lantern in the poop'). 'Ardentissimo' is the absolute superlative of 'ardente'.",
            },
            {
              id: "a1_s1_c70_l5",
              original: "ma quel risparmio d'olio me lo consumi in vino.",
              literal: "but that saving on oil you consume for me in wine.",
              tokens: [
                {
                  word: "risparmio",
                  lemma: "risparmio",
                  pos: "noun",
                  meaning: "saving / economy",
                },
                {
                  word: "olio",
                  lemma: "olio",
                  pos: "noun",
                  meaning: "oil (lamp oil)",
                },
                {
                  word: "me lo",
                  lemma: "me lo",
                  pos: "pronoun",
                  meaning: "it on me (ethical dative 'me' + direct object 'lo')",
                },
                {
                  word: "consumi",
                  lemma: "consumare",
                  pos: "verb",
                  meaning: "you consume / drink away",
                },
                {
                  word: "vino",
                  lemma: "vino",
                  pos: "noun",
                  meaning: "wine",
                },
              ],
              grammarNote: "The comedic punchline: Falstaff points out that while Bardolfo's glowing red nose saves him money on buying lantern oil at night, Bardolfo drinks away all the savings in wine. 'Me lo consumi' pairs an ethical dative 'me' with direct object 'lo'.",
            },
            {
              id: "a1_s1_c70_l6",
              original: "Son trent'anni che abbevero quel fungo porporino!",
              literal: "For thirty years I have watered that purple mushroom!",
              tokens: [
                {
                  word: "trent'anni",
                  lemma: "trent'anni",
                  pos: "noun",
                  meaning: "thirty years",
                },
                {
                  word: "abbevero",
                  lemma: "abbeverare",
                  pos: "verb",
                  meaning: "I water / give drink to",
                },
                {
                  word: "fungo",
                  lemma: "fungo",
                  pos: "noun",
                  meaning: "mushroom / fungus",
                },
                {
                  word: "porporino",
                  lemma: "porporino",
                  pos: "adjective",
                  meaning: "purple / crimson / purplish",
                },
              ],
              grammarNote: "Falstaff groans that he has paid for Bardolfo's drinking habits for thirty years. 'Fungo porporino' (purple mushroom) is a comic grotesque metaphor for Bardolfo's bulbous, wine-flushed nose (rhinophyma).",
            },
            {
              id: "a1_s1_c70_l7",
              original: "Costi troppo.",
              literal: "You cost too much.",
              tokens: [
                {
                  word: "Costi",
                  lemma: "costare",
                  pos: "verb",
                  meaning: "you cost (2nd person singular present)",
                },
                {
                  word: "troppo",
                  lemma: "troppo",
                  pos: "adverb",
                  meaning: "too much",
                },
              ],
              grammarNote: "Falstaff's blunt financial verdict addressed to Bardolfo: he is simply too expensive to keep around as a dependent.",
            },
          ],
        },
        {
          id: "a1_s1_c71",
          speaker: "Sir John Falstaff",
          stageDirection: "a Pistola, poi all'oste che sarà rimasto ed esce",
          stageDirectionTranslation: "to Pistola, then to the innkeeper who remained and now exits",
          lines: [
            {
              id: "a1_s1_c71_l1",
              original: "E tu pure. Oste! un'altra bottiglia.",
              literal: "And you as well. Host! another bottle.",
              tokens: [
                {
                  word: "pure",
                  lemma: "pure",
                  pos: "adverb",
                  meaning: "as well / also / too",
                },
                {
                  word: "Oste",
                  lemma: "oste",
                  pos: "noun",
                  meaning: "innkeeper / host",
                },
                {
                  word: "altra",
                  lemma: "altro",
                  pos: "adjective",
                  meaning: "another / other",
                },
                {
                  word: "bottiglia",
                  lemma: "bottiglia",
                  pos: "noun",
                  meaning: "bottle",
                },
              ],
              grammarNote: "Falstaff turns to his other freeloading follower, Pistola ('And you too'), but despite his complaints about insolvency, immediately orders another bottle of wine from the innkeeper ('Oste!').",
            },
          ],
        },
        {
          id: "a1_s1_c72",
          speaker: "Sir John Falstaff",
          stageDirection: "rivolto ancora a Bardolfo e a Pistola",
          stageDirectionTranslation: "turned again toward Bardolfo and Pistola",
          lines: [
            {
              id: "a1_s1_c72_l1",
              original: "Mi struggete le carni! Se Falstaff s'assottiglia",
              literal: "You consume my flesh! If Falstaff grows thin",
              tokens: [
                {
                  word: "struggete",
                  lemma: "struggere",
                  pos: "verb",
                  meaning: "you consume / melt away (2nd person plural)",
                },
                {
                  word: "carni",
                  lemma: "carne",
                  pos: "noun",
                  meaning: "flesh / body (plural)",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
                {
                  word: "s'assottiglia",
                  lemma: "assottigliarsi",
                  pos: "verb",
                  meaning: "grows thin / tapers off (reflexive)",
                },
              ],
              grammarNote: "Falstaff melodrammatically complains that the stress of keeping his useless men is causing him to lose weight. For Falstaff, growing thin ('s'assottiglia', from 'assottigliarsi') would ruin his grand physical majesty.",
            },
            {
              id: "a1_s1_c72_l2",
              original: "non è più lui, nessuno più l'ama; in questo addome",
              literal: "he is no longer himself, no one loves him any more; in this paunch",
              tokens: [
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "him / himself",
                },
                {
                  word: "nessuno",
                  lemma: "nessuno",
                  pos: "pronoun",
                  meaning: "no one / nobody",
                },
                {
                  word: "l'ama",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "loves him (elided clitic 'lo' + ama)",
                },
                {
                  word: "addome",
                  lemma: "addome",
                  pos: "noun",
                  meaning: "abdomen / paunch / belly",
                },
              ],
              grammarNote: "Falstaff grandly uses illeism (referring to himself in the third person): if he loses his bulk, he won't be Falstaff anymore, and no woman will love him. 'Addome' (paunch/belly) is the core of his pride.",
            },
            {
              id: "a1_s1_c72_l3",
              original: "c'è un migliaio di lingue che annunciano il mio nome!",
              literal: "there are a thousand tongues proclaiming my name!",
              tokens: [
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is",
                },
                {
                  word: "migliaio",
                  lemma: "migliaio",
                  pos: "noun",
                  meaning: "thousand (collective noun)",
                },
                {
                  word: "lingue",
                  lemma: "lingua",
                  pos: "noun",
                  meaning: "tongues / voices",
                },
                {
                  word: "annunciano",
                  lemma: "annunciare",
                  pos: "verb",
                  meaning: "proclaim / announce",
                },
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
              ],
              grammarNote: "Falstaff personifies his colossal belly as an empire where a thousand voices proclaim his legendary fame. Collective singular 'migliaio' governing the plural relative verb 'annunciano'.",
            },
          ],
        },
        {
          id: "a1_s1_c73",
          speaker: "Pistola",
          stageDirection: "acclamando",
          stageDirectionTranslation: "cheering",
          lines: [
            {
              id: "a1_s1_c73_l1",
              original: "Falstaff immenso!",
              literal: "Immense Falstaff!",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
                {
                  word: "immenso",
                  lemma: "immenso",
                  pos: "adjective",
                  meaning: "immense / boundless",
                },
              ],
              grammarNote: "Pistola flatters his master by exclaiming at his sheer size. An exclamatory apostrophe celebrating Falstaff's colossal girth.",
            },
          ],
        },
        {
          id: "a1_s1_c74",
          speaker: "Bardolfo",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a1_s1_c74_l1",
              original: "Enorme Falstaff!",
              literal: "Enormous Falstaff!",
              tokens: [
                {
                  word: "Enorme",
                  lemma: "enorme",
                  pos: "adjective",
                  meaning: "enormous / huge",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
              ],
              grammarNote: "Bardolfo joins in the flattering chorus, echoing Pistola with another synonym celebrating Sir John's monumental size.",
            },
          ],
        },
        {
          id: "a1_s1_c75",
          speaker: "Sir John Falstaff",
          stageDirection: "toccandosi e guardandosi l'addome",
          stageDirectionTranslation: "touching and looking at his belly",
          lines: [
            {
              id: "a1_s1_c75_l1",
              original: "Quest'è il mio regno.",
              literal: "This is my realm.",
              tokens: [
                {
                  word: "Quest'è",
                  lemma: "questo è",
                  pos: "idiom",
                  meaning: "this is (demonstrative 'questo' elided before 'è')",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "regno",
                  lemma: "regno",
                  pos: "noun",
                  meaning: "realm / kingdom",
                },
              ],
              grammarNote: "Falstaff caresses his vast paunch and proudly proclaims it his royal dominion. Elision of 'questo' before 'è' ('Quest'è').",
            },
            {
              id: "a1_s1_c75_l2",
              original: "Lo ingrandirò. Ma è tempo d'assottigliar l'ingegno.",
              literal: "I will enlarge it. But it is time to sharpen our wits.",
              tokens: [
                {
                  word: "ingrandirò",
                  lemma: "ingrandire",
                  pos: "verb",
                  meaning: "I will enlarge / expand (1st person singular future)",
                },
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time",
                },
                {
                  word: "assottigliar",
                  lemma: "assottigliare",
                  pos: "verb",
                  meaning: "to sharpen / refine (apocopated)",
                },
                {
                  word: "ingegno",
                  lemma: "ingegno",
                  pos: "noun",
                  meaning: "wit / intellect / ingenuity",
                },
              ],
              grammarNote: "Falstaff vows to make his belly even bigger, but since they are broke, he must sharpen his wits to raise cash. Plays cleverly on 'assottigliare' (he refuses to let his body grow thin, but resolves to sharpen his intellect via the idiom 'assottigliar l'ingegno').",
            },
            {
              id: "a1_s1_c75_l3",
              original: "PISTOLA E BARDOLFO",
              literal: "Pistola and Bardolfo",
              tokens: [
                {
                  word: "PISTOLA",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistol (character name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "BARDOLFO",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolph (character name)",
                },
              ],
              grammarNote: "Score cue indicating that Falstaff's two ruffian followers, Pistola and Bardolfo, speak in unison.",
            },
            {
              id: "a1_s1_c75_l4",
              original: "Assottigliam.",
              literal: "Let us sharpen.",
              tokens: [
                {
                  word: "Assottigliam",
                  lemma: "assottigliare",
                  pos: "verb",
                  meaning: "let us sharpen / refine (1st person plural hortative, apocopated)",
                },
                {
                  word: "assottigliare",
                  lemma: "assottigliare",
                  pos: "verb",
                  meaning: "to make keen / sharpen / refine",
                },
              ],
              grammarNote: "Pistola and Bardolfo eagerly agree: 'Let us sharpen our wits!' First-person plural hortative subjunctive with apocope from 'assottigliamo', echoing Falstaff's idiom 'assottigliar l'ingegno'.",
            },
          ],
        },
        {
          id: "a1_s1_c76",
          speaker: "Sir John Falstaff",
          stageDirection: "tutti e tre in crocchio",
          stageDirectionTranslation: "all three in a huddle",
          lines: [
          ],
        },
        {
          id: "a1_s1_c77",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c77_l1",
              original: "V'è noto un tal, qui del paese,",
              literal: "Is there known to you a certain fellow, here from the town,",
              tokens: [
                {
                  word: "V'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "is there to you (vi + è)",
                },
                {
                  word: "noto",
                  lemma: "noto",
                  pos: "adjective",
                  meaning: "known / familiar",
                },
                {
                  word: "un tal",
                  lemma: "tale",
                  pos: "pronoun",
                  meaning: "a certain fellow / someone",
                },
                {
                  word: "paese",
                  lemma: "paese",
                  pos: "noun",
                  meaning: "town / locality",
                },
              ],
              grammarNote: "Falstaff begins his scheme to seduce wealthy local townswomen for money, asking if they know a certain burgher. 'V'è noto' elides the dative plural pronoun 'vi' (to you) before 'è' (is known). 'Un tal' is apocopated from 'un tale'.",
            },
            {
              id: "a1_s1_c77_l2",
              original: "che ha nome Ford?",
              literal: "whose name is Ford?",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "who (relative pronoun)",
                },
                {
                  word: "ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has",
                },
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (character name)",
                },
              ],
              grammarNote: "Falstaff names the wealthy Windsor citizen Master Ford. The idiom 'avere nome' means 'to be named / to bear the name'.",
            },
          ],
        },
        {
          id: "a1_s1_c78",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c78_l1",
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
          id: "a1_s1_c79",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c79_l1",
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
          id: "a1_s1_c80",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c80_l1",
              original: "Quell'uom è un gran borghese...",
              literal: "That man is a wealthy burgher...",
              tokens: [
                {
                  word: "Quell'uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "that man (apocopated from uomo)",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / wealthy (apocopated)",
                },
                {
                  word: "borghese",
                  lemma: "borghese",
                  pos: "noun",
                  meaning: "burgher / bourgeois citizen",
                },
              ],
              grammarNote: "Falstaff describes Ford as a prosperous, wealthy burgher. Note the poetic apocopes 'uom' (from 'uomo') and 'gran' (from 'grande').",
            },
          ],
        },
        {
          id: "a1_s1_c81",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c81_l1",
              original: "Più liberal d'un Creso.",
              literal: "More generous than a Croesus.",
              tokens: [
                {
                  word: "Più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "liberal",
                  lemma: "liberale",
                  pos: "adjective",
                  meaning: "generous / open-handed (apocopated)",
                },
                {
                  word: "Creso",
                  lemma: "Creso",
                  pos: "noun",
                  meaning: "Croesus (wealthy king of Lydia)",
                },
              ],
              grammarNote: "Pistola chiming in that Ford is wealthier and more lavish than Croesus ('Creso'), the ancient Lydian king famous for boundless gold. 'Liberal' is apocopated from 'liberale' (generous / open-handed).",
            },
          ],
        },
        {
          id: "a1_s1_c82",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c82_l1",
              original: "È un Lord!",
              literal: "He is a Lord!",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is (3rd person singular present)",
                },
                {
                  word: "Lord",
                  lemma: "Lord",
                  pos: "noun",
                  meaning: "Lord / nobleman",
                },
              ],
              grammarNote: "Bardolfo exaggerates Ford's lavish wealth by calling him a 'Lord', using the English loanword colloquially in Italian to denote aristocratic fortune.",
            },
          ],
        },
        {
          id: "a1_s1_c83",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c83_l1",
              original: "Sua moglie è bella.",
              literal: "His wife is beautiful.",
              tokens: [
                {
                  word: "Sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair",
                },
              ],
              grammarNote: "Falstaff brings the focus to Ford's attractive wife, Alice. Italian possessive adjective 'sua' omits the definite article before the singular kinship noun 'moglie'.",
            },
            {
              id: "a1_s1_c83_l2",
              original: "Atto primo Falstaff",
              literal: "Act One Falstaff",
              tokens: [
                {
                  word: "Atto",
                  lemma: "atto",
                  pos: "noun",
                  meaning: "act (dramatic division)",
                },
                {
                  word: "primo",
                  lemma: "primo",
                  pos: "adjective",
                  meaning: "first",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
              ],
              grammarNote: "Libretto section header marking Act I of Falstaff in the score.",
            },
          ],
        },
        {
          id: "a1_s1_c84",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c84_l1",
              original: "E tien lo scrigno.",
              literal: "And she keeps the coffer.",
              tokens: [
                {
                  word: "tien",
                  lemma: "tenere",
                  pos: "verb",
                  meaning: "keeps / holds (apocopated from tiene)",
                },
                {
                  word: "scrigno",
                  lemma: "scrigno",
                  pos: "noun",
                  meaning: "coffer / money-chest / strongbox",
                },
              ],
              grammarNote: "Pistola delivers the crucial detail: Alice holds the keys to Ford's strongbox ('scrigno'). Boito adapts Shakespeare's 'she has all the rule of her husband's purse' (Merry Wives I.3). 'Tien' is apocopated from 'tiene'.",
            },
          ],
        },
        {
          id: "a1_s1_c85",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c85_l1",
              original: "È quella! O amor! Sguardo di stella!",
              literal: "She is the one! O love! Starlike glance!",
              tokens: [
                {
                  word: "quella",
                  lemma: "quello",
                  pos: "pronoun",
                  meaning: "that one / she",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocopated)",
                },
                {
                  word: "Sguardo",
                  lemma: "sguardo",
                  pos: "noun",
                  meaning: "glance / gaze",
                },
                {
                  word: "stella",
                  lemma: "stella",
                  pos: "noun",
                  meaning: "star",
                },
              ],
              grammarNote: "Falstaff immediately explodes into romantic rhapsody once he realizes Alice holds the money: 'She's the one!'. Note the apocope of 'amore' to 'amor'.",
            },
            {
              id: "a1_s1_c85_l2",
              original: "Collo di cigno! e il labbro? Un fior. Un fior che ride.",
              literal: "Swan neck! and her lip? A flower. A flower that smiles.",
              tokens: [
                {
                  word: "Collo",
                  lemma: "collo",
                  pos: "noun",
                  meaning: "neck",
                },
                {
                  word: "cigno",
                  lemma: "cigno",
                  pos: "noun",
                  meaning: "swan",
                },
                {
                  word: "labbro",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lip",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower (apocopated)",
                },
                {
                  word: "ride",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "smiles / laughs",
                },
              ],
              grammarNote: "Falstaff parodies classic Petrarchan love poetry, praising Alice's swan neck and smiling lips. In Italian literary diction, 'un fior che ride' uses 'ridere' in the poetic sense of blossoming or smiling brightly.",
            },
            {
              id: "a1_s1_c85_l3",
              original: "Alice è il nome, e un giorno, come passar mi vide",
              literal: "Alice is her name, and one day, as she saw me pass",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (character name)",
                },
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
                {
                  word: "passar",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "to pass by (apocopated)",
                },
                {
                  word: "vide",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "saw (3rd person singular passato remoto)",
                },
              ],
              grammarNote: "Falstaff narrates his supposed encounter with Alice Ford. Inverted word order 'come passar mi vide' (as she saw me pass) with apocopated infinitive 'passar' and clitic 'mi'.",
            },
            {
              id: "a1_s1_c85_l4",
              original: "ne' suoi paraggi, rise. M'ardea l'estro amatorio",
              literal: "in her vicinity, she smiled. The amorous frenzy burned in me",
              tokens: [
                {
                  word: "paraggi",
                  lemma: "paraggi",
                  pos: "noun",
                  meaning: "vicinity / neighborhood",
                },
                {
                  word: "rise",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "smiled / laughed (passato remoto)",
                },
                {
                  word: "M'ardea",
                  lemma: "ardere",
                  pos: "verb",
                  meaning: "burned in me (dative 'mi' + archaic imperfect 'ardea')",
                },
                {
                  word: "estro",
                  lemma: "estro",
                  pos: "noun",
                  meaning: "inspiration / whim / poetic frenzy",
                },
                {
                  word: "amatorio",
                  lemma: "amatorio",
                  pos: "adjective",
                  meaning: "amorous / erotic",
                },
              ],
              grammarNote: "Falstaff convinces himself that Alice's polite smile in the street was passionate flirtation, setting off his amorous lust. 'Ne'' is an apocope for 'nei' (in the), and 'ardea' is poetic imperfect for 'ardeva' with dative 'mi'.",
            },
            {
              id: "a1_s1_c85_l5",
              original: "nel cor. La dèa vibrava raggi di specchio ustorio,",
              literal: "in my heart. The goddess beamed rays of a burning mirror,",
              tokens: [
                {
                  word: "cor",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (apocopated)",
                },
                {
                  word: "dèa",
                  lemma: "dea",
                  pos: "noun",
                  meaning: "goddess",
                },
                {
                  word: "vibrava",
                  lemma: "vibrare",
                  pos: "verb",
                  meaning: "vibrated / beamed / radiated",
                },
                {
                  word: "raggi",
                  lemma: "raggio",
                  pos: "noun",
                  meaning: "rays / beams",
                },
                {
                  word: "specchio ustorio",
                  lemma: "specchio ustorio",
                  pos: "noun",
                  meaning: "burning mirror (Archimedean concave fire-glass)",
                },
              ],
              grammarNote: "Falstaff imagines Alice's gaze focusing the sun's rays on him like Archimedes' burning mirror ('specchio ustorio') to set his lust on fire. Apocope of 'cuore' to 'cor'.",
            },
          ],
        },
        {
          id: "a1_s1_c86",
          speaker: "Sir John Falstaff",
          stageDirection: "pavoneggiandosi",
          stageDirectionTranslation: "strutting",
          lines: [
            {
              id: "a1_s1_c86_l1",
              original: "su me, su me, sul fianco baldo, sul gran torace,",
              literal: "upon me, upon me, upon my bold flank, upon my great chest,",
              tokens: [
                {
                  word: "fianco",
                  lemma: "fianco",
                  pos: "noun",
                  meaning: "flank / hip / side",
                },
                {
                  word: "baldo",
                  lemma: "baldo",
                  pos: "adjective",
                  meaning: "bold / stalwart / sturdy",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / vast (apocopated)",
                },
                {
                  word: "torace",
                  lemma: "torace",
                  pos: "noun",
                  meaning: "chest / thorax",
                },
              ],
              grammarNote: "Falstaff's self-delusion in full glory: he imagines her gazing with burning desire upon his massive body, bold hips, and enormous chest. Features repeated prepositions 'su... sul'.",
            },
            {
              id: "a1_s1_c86_l2",
              original: "sul maschio piè, sul fusto saldo, erto, capace;",
              literal: "upon my manly foot, upon my trunk sturdy, erect, capacious;",
              tokens: [
                {
                  word: "maschio",
                  lemma: "maschio",
                  pos: "adjective",
                  meaning: "manly / vigorous / masculine",
                },
                {
                  word: "piè",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "foot (truncated from piede)",
                },
                {
                  word: "fusto",
                  lemma: "fusto",
                  pos: "noun",
                  meaning: "trunk / torso / body frame",
                },
                {
                  word: "saldo",
                  lemma: "saldo",
                  pos: "adjective",
                  meaning: "sturdy / solid / firm",
                },
                {
                  word: "capace",
                  lemma: "capace",
                  pos: "adjective",
                  meaning: "capacious / roomy / large",
                },
              ],
              grammarNote: "Falstaff continues extolling his physical attributes: his manly feet and sturdy, upright, roomy ('capace') torso. 'Piè' is truncated from 'piede', and 'fusto' literally means a tree trunk.",
            },
            {
              id: "a1_s1_c86_l3",
              original: "e il suo desir in lei fulgea sì al mio congiunto",
              literal: "and her desire in her shone so joined to mine",
              tokens: [
                {
                  word: "desir",
                  lemma: "desiderio",
                  pos: "noun",
                  meaning: "desire (poetic apocope of desiderio)",
                },
                {
                  word: "fulgea",
                  lemma: "fulgere",
                  pos: "verb",
                  meaning: "shone / flashed (poetic imperfect for fulgeva)",
                },
                {
                  word: "sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "so / thus (correlative with che)",
                },
                {
                  word: "congiunto",
                  lemma: "congiunto",
                  pos: "adjective",
                  meaning: "joined / united to",
                },
              ],
              grammarNote: "Falstaff believes her lust matched his so perfectly that it shone forth visibly. 'Desir' is poetic apocope for 'desiderio', and 'fulgea' is archaic imperfect for 'fulgeva' (shone).",
            },
            {
              id: "a1_s1_c86_l4",
              original: "che parea dir: «Io son di Sir John Falstaff.»",
              literal: "that it seemed to say: 'I belong to Sir John Falstaff.'",
              tokens: [
                {
                  word: "parea",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "it seemed (poetic imperfect for pareva)",
                },
                {
                  word: "dir",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "to say (apocopated)",
                },
                {
                  word: "son di",
                  lemma: "essere di",
                  pos: "verb",
                  meaning: "belong to (am of)",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
              ],
              grammarNote: "Falstaff concludes his fantasy: Alice's gaze seemed to declare 'I belong to Sir John Falstaff!' 'Parea' is poetic imperfect for 'pareva', and 'dir' is apocopated from 'dire'.",
            },
          ],
        },
        {
          id: "a1_s1_c87",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c87_l1",
              original: "Punto.",
              literal: "Period.",
              tokens: [
                {
                  word: "Punto",
                  lemma: "punto",
                  pos: "noun",
                  meaning: "period / full stop (punctuation mark)",
                },
                {
                  word: "punto fermo",
                  lemma: "punto fermo",
                  pos: "idiom",
                  meaning: "full stop / period",
                },
              ],
              grammarNote: "Bardolfo cuts through Falstaff's romantic daydream by dryly acting as a scribe, announcing a punctuation full stop ('period').",
            },
          ],
        },
        {
          id: "a1_s1_c88",
          speaker: "Sir John Falstaff",
          stageDirection: "continuando la parola di Bardolfo",
          stageDirectionTranslation: "continuing Bardolfo's words",
          lines: [
            {
              id: "a1_s1_c88_l1",
              original: "E a capo. Un'altra; e questa ha nome Margherita.",
              literal: "And new line. Another one; and this one is named Margaret.",
              tokens: [
                {
                  word: "a capo",
                  lemma: "a capo",
                  pos: "idiom",
                  meaning: "new line / new paragraph (typographical command)",
                },
                {
                  word: "altra",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "other / another (feminine)",
                },
                {
                  word: "Margherita",
                  lemma: "Margherita",
                  pos: "noun",
                  meaning: "Margaret (character name for Meg Page)",
                },
              ],
              grammarNote: "Falstaff doesn't miss a beat and continues his dictation like a merchant: 'New line/paragraph! Another woman!'. He introduces Meg Page (using her Italian name Margherita).",
            },
          ],
        },
        {
          id: "a1_s1_c89",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s1_c89_l1",
              original: "La chiaman Meg.",
              literal: "They call her Meg.",
              tokens: [
                {
                  word: "La",
                  lemma: "la",
                  pos: "pronoun",
                  meaning: "her (direct object clitic)",
                },
                {
                  word: "chiaman",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "they call (apocopated from chiamano)",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (diminutive of Margaret)",
                },
              ],
              grammarNote: "Pistola provides her familiar English nickname 'Meg'. 'Chiaman' is apocopated from 'chiamano'.",
            },
          ],
        },
        {
          id: "a1_s1_c90",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a1_s1_c90_l1",
              original: "È anch'essa dei miei pregi invaghita.",
              literal: "She too is infatuated with my charms.",
              tokens: [
                {
                  word: "anch'essa",
                  lemma: "anch'esso",
                  pos: "pronoun",
                  meaning: "she too / she as well",
                },
                {
                  word: "pregi",
                  lemma: "pregio",
                  pos: "noun",
                  meaning: "charms / virtues / qualities",
                },
                {
                  word: "invaghita",
                  lemma: "invaghire",
                  pos: "adjective",
                  meaning: "infatuated / smitten / enamored",
                },
              ],
              grammarNote: "Falstaff boasts that Meg Page too is madly infatuated with his charms. 'Anch'essa' elides 'anche essa' (she too); 'invaghita di' means enamored/infatuated with.",
            },
            {
              id: "a1_s1_c90_l2",
              original: "E anch'essa tien le chiavi dello scrigno. Costoro",
              literal: "And she too holds the keys of the coffer. These women",
              tokens: [
                {
                  word: "tien",
                  lemma: "tenere",
                  pos: "verb",
                  meaning: "holds / keeps (apocopated from tiene)",
                },
                {
                  word: "chiavi",
                  lemma: "chiave",
                  pos: "noun",
                  meaning: "keys",
                },
                {
                  word: "scrigno",
                  lemma: "scrigno",
                  pos: "noun",
                  meaning: "coffer / money-chest",
                },
                {
                  word: "Costoro",
                  lemma: "costoro",
                  pos: "pronoun",
                  meaning: "these women / these people",
                },
              ],
              grammarNote: "The punchline of Falstaff's scheme: Meg Page also holds the keys to her husband's strongbox. 'Tien' is apocopated from 'tiene'. The pronoun 'Costoro' (these women) is enjambed into the next line.",
            },
            {
              id: "a1_s1_c90_l3",
              original: "saran le mie Golconde e le mie Coste d'oro!",
              literal: "shall be my Golcondas and my Gold Coasts!",
              tokens: [
                {
                  word: "saran",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "shall be (future 3rd person plural, apocopated)",
                },
                {
                  word: "Golconde",
                  lemma: "Golconda",
                  pos: "noun",
                  meaning: "Golcondas (ancient diamond-mining city of India, emblem of wealth)",
                },
                {
                  word: "Coste d'oro",
                  lemma: "Costa d'oro",
                  pos: "noun",
                  meaning: "Gold Coasts (lands of riches)",
                },
              ],
              grammarNote: "Falstaff envisions the two wealthy wives as his personal treasure houses (adapting Shakespeare's 'they shall be my East and West Indies'). Golconda was an Indian city famed for diamond mines; the Gold Coast was known for gold reserves. 'Saran' is apocopated from 'saranno'.",
            },
            {
              id: "a1_s1_c90_l4",
              original: "Guardate. Io sono ancora una piacente estate",
              literal: "Look. I am still a pleasing summer",
              tokens: [
                {
                  word: "Guardate",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "look / behold (imperative 2nd person plural)",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet",
                },
                {
                  word: "piacente",
                  lemma: "piacente",
                  pos: "adjective",
                  meaning: "pleasing / attractive (present participle of piacere)",
                },
                {
                  word: "estate",
                  lemma: "estate",
                  pos: "noun",
                  meaning: "summer",
                },
              ],
              grammarNote: "Falstaff shows off his physique to his followers, claiming that despite his age, he is still an attractive, virile man. 'Piacente' is the present participle of 'piacere' used adjectivally.",
            },
            {
              id: "a1_s1_c90_l5",
              original: "di san Martino. A voi, due lettere infuocate.",
              literal: "of Saint Martin. To you, two fiery letters.",
              tokens: [
                {
                  word: "san Martino",
                  lemma: "San Martino",
                  pos: "noun",
                  meaning: "Saint Martin",
                },
                {
                  word: "lettere",
                  lemma: "lettera",
                  pos: "noun",
                  meaning: "letters",
                },
                {
                  word: "infuocate",
                  lemma: "infuocato",
                  pos: "adjective",
                  meaning: "fiery / burning / impassioned",
                },
              ],
              grammarNote: "'Estate di san Martino' (St. Martin's summer) is the Italian idiom for Indian summer (a warm spell in late autumn, echoing Hal calling Falstaff 'All-hallown summer' in 1 Henry IV). He hands them two passionate love letters.",
            },
          ],
        },
        {
          id: "a1_s1_c91",
          speaker: "Sir John Falstaff",
          stageDirection: "dà a Bardolfo una delle due lettere che sono rimaste sul tavolo",
          stageDirectionTranslation: "hands Bardolfo one of the two letters remaining on the table",
          lines: [
            {
              id: "a1_s1_c91_l1",
              original: "Tu porta questa a Meg; tentiam la sua virtù.",
              literal: "You carry this to Meg; let us test her virtue.",
              tokens: [
                {
                  word: "porta",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carry / take (imperative 2nd person singular)",
                },
                {
                  word: "tentiam",
                  lemma: "tentare",
                  pos: "verb",
                  meaning: "let us test / tempt (1st person plural hortative, apocopated)",
                },
                {
                  word: "virtù",
                  lemma: "virtù",
                  pos: "noun",
                  meaning: "virtue / chastity",
                },
              ],
              grammarNote: "Falstaff instructs Bardolfo to deliver one letter to Meg Page to test her fidelity. 'Tentiam' is hortative 1st person plural apocopated from 'tentiamo'.",
            },
          ],
        },
        {
          id: "a1_s1_c92",
          speaker: "Sir John Falstaff",
          stageDirection: "Bardolfo prende la lettera",
          stageDirectionTranslation: "Bardolfo takes the letter",
          lines: [
            {
              id: "a1_s1_c92_l1",
              original: "Già vedo che il tuo naso arde di zelo.",
              literal: "Already I see that your nose burns with zeal.",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "vedo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "I see (1st person singular present)",
                },
                {
                  word: "arde",
                  lemma: "ardere",
                  pos: "verb",
                  meaning: "burns / glows",
                },
                {
                  word: "zelo",
                  lemma: "zelo",
                  pos: "noun",
                  meaning: "zeal / fervor / devotion",
                },
              ],
              grammarNote: "Falstaff mocks Bardolfo's glowing red nose, joking that it is already blazing with holy zeal to deliver the love letter.",
            },
          ],
        },
        {
          id: "a1_s1_c93",
          speaker: "Sir John Falstaff",
          stageDirection: "dà a Pistola l'altra lettera",
          stageDirectionTranslation: "hands Pistola the other letter",
          lines: [
            {
              id: "a1_s1_c93_l1",
              original: "E tu porta questa ad Alice.",
              literal: "And you carry this to Alice.",
              tokens: [
                {
                  word: "porta",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carry / take (imperative 2nd person singular)",
                },
                {
                  word: "questa",
                  lemma: "questo",
                  pos: "pronoun",
                  meaning: "this (letter)",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (character name)",
                },
              ],
              grammarNote: "Falstaff commands Pistola to deliver the identical second letter to Alice Ford. Note the euphonic 'd' in 'ad Alice'.",
            },
          ],
        },
        {
          id: "a1_s1_c94",
          speaker: "Pistola",
          stageDirection: "ricusando con dignità",
          stageDirectionTranslation: "refusing with dignity",
          lines: [
            {
              id: "a1_s1_c94_l1",
              original: "Porto una spada al fianco.",
              literal: "I wear a sword at my side.",
              tokens: [
                {
                  word: "Porto",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "I wear / carry (1st person singular present)",
                },
                {
                  word: "spada",
                  lemma: "spada",
                  pos: "noun",
                  meaning: "sword",
                },
                {
                  word: "fianco",
                  lemma: "fianco",
                  pos: "noun",
                  meaning: "flank / side",
                },
              ],
              grammarNote: "Pistola proudly refuses, insisting he is a soldier who wears a sword, not a courier of illicit love notes (Shakespeare's Merry Wives I.3: 'Shall I Sir Pandarus of Troy become, and by my side wear steel?').",
            },
            {
              id: "a1_s1_c94_l2",
              original: "Non sono un messer Pandarus. Ricuso.",
              literal: "I am not a Sir Pandarus. I refuse.",
              tokens: [
                {
                  word: "messer",
                  lemma: "messer",
                  pos: "noun",
                  meaning: "master / sir (archaic title)",
                },
                {
                  word: "Pandarus",
                  lemma: "Pandarus",
                  pos: "noun",
                  meaning: "Pandarus (Trojan procurer/pimp in medieval legend)",
                },
                {
                  word: "Ricuso",
                  lemma: "ricusare",
                  pos: "verb",
                  meaning: "I refuse / reject (1st person singular present)",
                },
              ],
              grammarNote: "Pistola declares he will not act as a pimp (alluding to Pandarus, who procured Cressida for Troilus). 'Ricuso' means 'I refuse'.",
            },
          ],
        },
        {
          id: "a1_s1_c95",
          speaker: "Sir John Falstaff",
          stageDirection: "con calma sprezzante",
          stageDirectionTranslation: "with scornful calmness",
          lines: [
            {
              id: "a1_s1_c95_l1",
              original: "Saltimbanco.",
              literal: "Mountebank.",
              tokens: [
                {
                  word: "Saltimbanco",
                  lemma: "saltimbanco",
                  pos: "noun",
                  meaning: "mountebank / charlatan / street acrobat",
                },
                {
                  word: "saltare in banco",
                  lemma: "saltare in banco",
                  pos: "idiom",
                  meaning: "to mount a bench (etymological origin of saltimbanco)",
                },
              ],
              grammarNote: "Falstaff hurls an insult at Pistola, calling him a mountebank or cheap street performer. Derived etymologically from 'salta in banco' (one who climbs a bench to pitch snake oil).",
            },
          ],
        },
        {
          id: "a1_s1_c96",
          speaker: "Bardolfo",
          stageDirection: "avanzandosi e gettando la lettera sul tavolo",
          stageDirectionTranslation: "stepping forward and tossing the letter onto the table",
          lines: [
            {
              id: "a1_s1_c96_l1",
              original: "Sir John, in questo intrigo non posso accondiscendervi,",
              literal: "Sir John, in this intrigue I cannot comply with you,",
              tokens: [
                {
                  word: "intrigo",
                  lemma: "intrigo",
                  pos: "noun",
                  meaning: "intrigue / scheme",
                },
                {
                  word: "posso",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "I can (1st person singular)",
                },
                {
                  word: "accondiscendervi",
                  lemma: "accondiscendere",
                  pos: "verb",
                  meaning: "to comply with you / acquiesce (infinitive + enclitic 'vi')",
                },
              ],
              grammarNote: "Bardolfo joins the mutiny, politely stating he cannot participate in this scheme. The enclitic pronoun 'vi' is attached to infinitive 'accondiscendere' ('accondiscendervi': comply with you in this).",
            },
            {
              id: "a1_s1_c96_l2",
              original: "lo vieta...",
              literal: "it is forbidden by...",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it (direct object clitic)",
                },
                {
                  word: "vieta",
                  lemma: "vietare",
                  pos: "verb",
                  meaning: "forbids / prohibits",
                },
              ],
              grammarNote: "Bardolfo pauses theatrically before naming what prevents him from helping. The direct object clitic 'lo' anticipates the delayed subject 'L'onore' in line 55.",
            },
          ],
        },
        {
          id: "a1_s1_c97",
          speaker: "Sir John Falstaff",
          stageDirection: "interrompendolo",
          stageDirectionTranslation: "interrupting him",
          lines: [
            {
              id: "a1_s1_c97_l1",
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
          id: "a1_s1_c98",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s1_c98_l1",
              original: "L'onore.",
              literal: "Honor.",
              tokens: [
                {
                  word: "L'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided definite article)",
                },
                {
                  word: "onore",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor",
                },
              ],
              grammarNote: "Bardolfo finishes his sentence: 'Honor forbids it'. The hypocrisy of a pickpocket citing 'honor' enrages Falstaff and sparks the famous monologue.",
            },
          ],
        },
        {
          id: "a1_s1_c99",
          speaker: "Sir John Falstaff",
          stageDirection: "vedendo il paggio Robin che entra dal fondo",
          stageDirectionTranslation: "seeing the page Robin enter from the back",
          lines: [
            {
              id: "a1_s1_c99_l1",
              original: "Ehi! paggio!",
              literal: "Hey! page!",
              tokens: [
                {
                  word: "Ehi",
                  lemma: "ehi",
                  pos: "interjection",
                  meaning: "hey! (interjection)",
                },
                {
                  word: "paggio",
                  lemma: "paggio",
                  pos: "noun",
                  meaning: "page / page-boy",
                },
              ],
              grammarNote: "Disgusted by his men's sudden moral posturing, Falstaff calls over his page boy Robin to carry the letters instead.",
            },
          ],
        },
        {
          id: "a1_s1_c100",
          speaker: "Sir John Falstaff",
          stageDirection: "poi subito a Bardolfo e Pistola",
          stageDirectionTranslation: "then at once to Bardolfo and Pistola",
          lines: [
            {
              id: "a1_s1_c100_l1",
              original: "Andate a impendervi,",
              literal: "Go hang yourselves,",
              tokens: [
                {
                  word: "Andate",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (imperative 2nd person plural)",
                },
                {
                  word: "impendervi",
                  lemma: "impendersi",
                  pos: "verb",
                  meaning: "to hang yourselves (archaic reflexive infinitive + enclitic 'vi')",
                },
              ],
              grammarNote: "Falstaff curses his followers to go hang themselves. Uses the archaic verb 'impendersi' (from Latin impendere, to hang oneself) with reflexive enclitic 'vi'.",
            },
            {
              id: "a1_s1_c100_l2",
              original: "ma non più a me!",
              literal: "but no longer on me!",
              tokens: [
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "longer / more",
                },
                {
                  word: "me",
                  lemma: "me",
                  pos: "pronoun",
                  meaning: "me (disjunctive pronoun)",
                },
              ],
              grammarNote: "A sharp comedic pun: Falstaff tells them to go hang themselves ('impendervi'), but to stop hanging upon or depending on him for money and lodging ('non più a me').",
            },
          ],
        },
        {
          id: "a1_s1_c101",
          speaker: "Sir John Falstaff",
          stageDirection: "al paggio che escirà correndo con le lettere",
          stageDirectionTranslation: "to the page who runs out with the letters",
          lines: [
            {
              id: "a1_s1_c101_l1",
              original: "Due lettere, prendi, per due signore.",
              literal: "Two letters, take them, for two ladies.",
              tokens: [
                {
                  word: "lettere",
                  lemma: "lettera",
                  pos: "noun",
                  meaning: "letters",
                },
                {
                  word: "prendi",
                  lemma: "prendere",
                  pos: "verb",
                  meaning: "take (imperative 2nd person singular)",
                },
                {
                  word: "signore",
                  lemma: "signora",
                  pos: "noun",
                  meaning: "ladies / gentlewomen",
                },
              ],
              grammarNote: "Falstaff gives Robin the two identical love letters addressed to Alice and Meg. Imperative 'prendi' addressed to the page.",
            },
            {
              id: "a1_s1_c101_l2",
              original: "Consegna tosto, corri, via, lesto, va'!",
              literal: "Deliver quickly, run, away, nimble, go!",
              tokens: [
                {
                  word: "Consegna",
                  lemma: "consegnare",
                  pos: "verb",
                  meaning: "deliver / hand over (imperative)",
                },
                {
                  word: "tosto",
                  lemma: "tosto",
                  pos: "adverb",
                  meaning: "quickly / swiftly / at once",
                },
                {
                  word: "corri",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "run (imperative)",
                },
                {
                  word: "lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble / brisk",
                },
                {
                  word: "va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go! (truncated imperative)",
                },
              ],
              grammarNote: "Falstaff orders the page to sprint off on the errand with a staccato barrage of imperatives: 'Consegna... corri... va''. 'Tosto' is an archaic adverb meaning 'swiftly / at once'.",
            },
          ],
        },
        {
          id: "a1_s1_c102",
          speaker: "Sir John Falstaff",
          pieceTitle: "L'onore! Ladri! (Monologo dell'onore)",
          stageDirection: "rivolto a Pistola e Bardolfo",
          stageDirectionTranslation: "rivolto to Pistola e Bardolfo",
          lines: [
            {
              id: "a1_s1_c102_l1",
              original: "L'onore!",
              literal: "Honor!",
              tokens: [
                {
                  word: "L'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided definite article)",
                },
                {
                  word: "onore",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor",
                },
              ],
              grammarNote: "Falstaff turns back to his henchmen with utter contempt, echoing the word 'Honor!' to begin his legendary monologue (adapted from Henry IV, Part 1, Act V, Scene 1).",
            },
            {
              id: "a1_s1_c102_l2",
              original: "Ladri! Voi state ligi all'onor vostro, voi!",
              literal: "Thieves! You stand bound to your honor, you!",
              tokens: [
                {
                  word: "Ladri",
                  lemma: "ladro",
                  pos: "noun",
                  meaning: "thieves / robbers",
                },
                {
                  word: "state",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "you stand / remain (2nd person plural present)",
                },
                {
                  word: "ligi",
                  lemma: "ligio",
                  pos: "adjective",
                  meaning: "loyal / obedient / bound to duty",
                },
                {
                  word: "onor",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor (apocopated)",
                },
              ],
              grammarNote: "Falstaff mocks the sheer absurdity of thieves pretending to be bound by knightly honor. Uses the doubled subject pronoun 'Voi... voi' for biting sarcasm, with 'ligi' meaning strictly obedient or bound.",
            },
            {
              id: "a1_s1_c102_l3",
              original: "Cloache d'ignominia, quando, non sempre, noi",
              literal: "Sewers of ignominy, when, not always, we",
              tokens: [
                {
                  word: "Cloache",
                  lemma: "cloaca",
                  pos: "noun",
                  meaning: "sewers / sinks of filth / cesspools",
                },
                {
                  word: "ignominia",
                  lemma: "ignominia",
                  pos: "noun",
                  meaning: "ignominy / dishonor / shame",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
              ],
              grammarNote: "Falstaff calls them 'sewers of ignominy' (sinks of shame and filth), pointing out that even great gentlemen like himself cannot always remain bound to honor when survival is at stake.",
            },
            {
              id: "a1_s1_c102_l4",
              original: "possiam star ligi al nostro. Io stesso, sì, io, io,",
              literal: "can stand bound to ours. I myself, yes, I, I,",
              tokens: [
                {
                  word: "possiam",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "we can (apocopated from possiamo)",
                },
                {
                  word: "star",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "to stand / remain (apocopated)",
                },
                {
                  word: "nostro",
                  lemma: "nostro",
                  pos: "pronoun",
                  meaning: "ours (referring to honor)",
                },
                {
                  word: "stesso",
                  lemma: "stesso",
                  pos: "adjective",
                  meaning: "myself / self",
                },
              ],
              grammarNote: "Falstaff continues with comical self-importance ('I myself, yes, I, I!'): even he must sometimes bend the rules of honor. Apocopes 'possiam' and 'star'.",
            },
            {
              id: "a1_s1_c102_l5",
              original: "devo talor da un lato porre il timor di dio",
              literal: "must sometimes set aside the fear of God",
              tokens: [
                {
                  word: "devo",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "I must (1st person singular present)",
                },
                {
                  word: "talor",
                  lemma: "talora",
                  pos: "adverb",
                  meaning: "sometimes / at times (apocopated from talora)",
                },
                {
                  word: "porre da un lato",
                  lemma: "porre da un lato",
                  pos: "idiom",
                  meaning: "to set aside / put aside",
                },
                {
                  word: "timor",
                  lemma: "timore",
                  pos: "noun",
                  meaning: "fear / dread (apocopated)",
                },
              ],
              grammarNote: "Falstaff confesses that when money is scarce, he must occasionally set aside the fear of God. 'Porre da un lato' is an idiom meaning 'to set aside / discard'.",
            },
            {
              id: "a1_s1_c102_l6",
              original: "e, per necessità, sviar l'onore e usare",
              literal: "and, through necessity, dodge honor and use",
              tokens: [
                {
                  word: "necessità",
                  lemma: "necessità",
                  pos: "noun",
                  meaning: "necessity",
                },
                {
                  word: "sviar",
                  lemma: "sviare",
                  pos: "verb",
                  meaning: "to deflect / divert / bypass (apocopated)",
                },
                {
                  word: "onore",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor",
                },
                {
                  word: "usare",
                  lemma: "usare",
                  pos: "verb",
                  meaning: "to use / employ",
                },
              ],
              grammarNote: "Falstaff explains that necessity forces a gentleman to bypass honor. 'Sviar' is an apocope of 'sviare' (to detour around / deflect / sidetrack).",
            },
            {
              id: "a1_s1_c102_l7",
              original: "stratagemmi ed equivoci, destreggiar, bordeggiare.",
              literal: "stratagems and equivocations, maneuver, tack to the wind.",
              tokens: [
                {
                  word: "stratagemmi",
                  lemma: "stratagemma",
                  pos: "noun",
                  meaning: "stratagems / ruses",
                },
                {
                  word: "equivoci",
                  lemma: "equivoco",
                  pos: "noun",
                  meaning: "equivocations / double entendres",
                },
                {
                  word: "destreggiar",
                  lemma: "destreggiare",
                  pos: "verb",
                  meaning: "to maneuver deftly / juggle (apocopated)",
                },
                {
                  word: "bordeggiare",
                  lemma: "bordeggiare",
                  pos: "verb",
                  meaning: "to tack / beat against the wind (nautical metaphor)",
                },
              ],
              grammarNote: "Falstaff lists his survival tactics: stratagems, white lies, and deft maneuvering. 'Bordeggiare' is a nautical term meaning to tack back and forth against contrary winds, metaphorically describing clever dodging.",
            },
            {
              id: "a1_s1_c102_l8",
              original: "E voi, coi vostri cenci e coll'occhiata torta",
              literal: "And you, with your rags and with your crooked look",
              tokens: [
                {
                  word: "cenci",
                  lemma: "cencio",
                  pos: "noun",
                  meaning: "rags / tatters",
                },
                {
                  word: "occhiata",
                  lemma: "occhiata",
                  pos: "noun",
                  meaning: "glance / look",
                },
                {
                  word: "torta",
                  lemma: "torto",
                  pos: "adjective",
                  meaning: "crooked / shifty / squinting",
                },
              ],
              grammarNote: "Falstaff contrasts his own gentlemanly necessity with his henchmen's squalor: they are dressed in rags ('cenci') with the shifty, treacherous squint ('occhiata torta') of predatory cutpurses.",
            },
            {
              id: "a1_s1_c102_l9",
              original: "da gattopardo",
              literal: "like an ocelot",
              tokens: [
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "like / in the manner of",
                },
                {
                  word: "gattopardo",
                  lemma: "gattopardo",
                  pos: "noun",
                  meaning: "ocelot / serval / predatory wildcat",
                },
              ],
              grammarNote: "Falstaff finishes the description of their shifty look: 'like an ocelot / serval' ('da gattopardo'), predatory wildcats known for deceitful stealth.",
            },
            {
              id: "a1_s1_c102_l10",
              original: "e i fetidi sghignazzi, avete a scorta",
              literal: "and your foul sneers, have as your escort",
              tokens: [
                {
                  word: "fetidi",
                  lemma: "fetido",
                  pos: "adjective",
                  meaning: "fetid / foul-smelling / noxious",
                },
                {
                  word: "sghignazzi",
                  lemma: "sghignazzo",
                  pos: "noun",
                  meaning: "guffaws / sneering laughter",
                },
                {
                  word: "avete",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "you have (2nd person plural)",
                },
                {
                  word: "scorta",
                  lemma: "scorta",
                  pos: "noun",
                  meaning: "escort / guide / guard",
                },
              ],
              grammarNote: "Falstaff continues cataloging their repulsive traits: foul sneering laughter ('fetidi sghignazzi'). 'Avete a scorta' means 'you take as your guide and escort' (its direct object 'il vostro onor' follows in line 71).",
            },
            {
              id: "a1_s1_c102_l11",
              original: "il vostro onor! Che onore? che onor? che onor! che ciancia!",
              literal: "your honor! What honor? what honor? what honor! what nonsense!",
              tokens: [
                {
                  word: "onor",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor (apocopated)",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what (exclamative/interrogative)",
                },
                {
                  word: "ciancia",
                  lemma: "ciancia",
                  pos: "noun",
                  meaning: "idle talk / chatter / nonsense / twaddle",
                },
              ],
              grammarNote: "Falstaff's mocking diatribe reaches fever pitch: 'Your honor! What honor? what claptrap!'. 'Ciancia' is an expressive noun meaning empty chatter, gossip, or nonsense.",
            },
            {
              id: "a1_s1_c102_l12",
              original: "Che baia! Può l'onore riempirvi la pancia?",
              literal: "What a joke! Can honor fill your belly?",
              tokens: [
                {
                  word: "baia",
                  lemma: "baia",
                  pos: "noun",
                  meaning: "jest / joke / trifle / humbug",
                },
                {
                  word: "Può",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "can (3rd person singular present)",
                },
                {
                  word: "riempirvi",
                  lemma: "riempire",
                  pos: "verb",
                  meaning: "to fill for you (infinitive + enclitic 'vi')",
                },
                {
                  word: "pancia",
                  lemma: "pancia",
                  pos: "noun",
                  meaning: "belly / paunch",
                },
              ],
              grammarNote: "Falstaff's pragmatic catechism begins: can honor fill your empty belly? 'Che baia!' is a Tuscan idiom meaning 'What a joke! What nonsense!'. Directly translates Shakespeare's 'Can honour set to a leg? no'.",
            },
            {
              id: "a1_s1_c102_l13",
              original: "No. Può l'onor rimettervi uno stinco? Non può.",
              literal: "No. Can honor set a shin for you? It cannot.",
              tokens: [
                {
                  word: "rimettervi",
                  lemma: "rimettere",
                  pos: "verb",
                  meaning: "to set / put back for you (infinitive + enclitic 'vi')",
                },
                {
                  word: "stinco",
                  lemma: "stinco",
                  pos: "noun",
                  meaning: "shin / shinbone",
                },
                {
                  word: "Non può",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "it cannot",
                },
              ],
              grammarNote: "Falstaff asks the questions and supplies the answers: can honor reset a broken shinbone? No, it cannot! ('rimettervi uno stinco').",
            },
            {
              id: "a1_s1_c102_l14",
              original: "Né un piede? No. Né un dito? No. Né un capello? No.",
              literal: "Nor a foot? No. Nor a finger? No. Nor a hair? No.",
              tokens: [
                {
                  word: "Né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "nor / neither",
                },
                {
                  word: "piede",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "foot",
                },
                {
                  word: "dito",
                  lemma: "dito",
                  pos: "noun",
                  meaning: "finger / toe",
                },
                {
                  word: "capello",
                  lemma: "capello",
                  pos: "noun",
                  meaning: "hair",
                },
                {
                  word: "No",
                  lemma: "no",
                  pos: "interjection",
                  meaning: "no",
                },
              ],
              grammarNote: "Falstaff continues his rapid catechism in a comedic diminuendo from foot down to a single hair, showing honor has zero physical or medical value.",
            },
            {
              id: "a1_s1_c102_l15",
              original: "L'onor non è chirurgo. Ch'è dunque? Una parola.",
              literal: "Honor is not a surgeon. What is it then? A word.",
              tokens: [
                {
                  word: "chirurgo",
                  lemma: "chirurgo",
                  pos: "noun",
                  meaning: "surgeon",
                },
                {
                  word: "Ch'è",
                  lemma: "che è",
                  pos: "pronoun",
                  meaning: "what is it (che + è)",
                },
                {
                  word: "dunque",
                  lemma: "dunque",
                  pos: "adverb",
                  meaning: "then / therefore",
                },
                {
                  word: "parola",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "word",
                },
              ],
              grammarNote: "Verbatim from Shakespeare: 'Honour hath no skill in surgery, then? no. What is honour? a word.' Falstaff dismisses honor as nothing more than an empty utterance.",
            },
            {
              id: "a1_s1_c102_l16",
              original: "Che c'è in questa parola? C'è dell'aria che vola.",
              literal: "What is in this word? There is air that flies.",
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
                  meaning: "there is",
                },
                {
                  word: "aria",
                  lemma: "aria",
                  pos: "noun",
                  meaning: "air / breath",
                },
                {
                  word: "vola",
                  lemma: "volare",
                  pos: "verb",
                  meaning: "flies / vanishes",
                },
              ],
              grammarNote: "Shakespeare asked 'What is that honour? air.' Boito poetically expands this into 'dell'aria che vola' (air that flies away and vanishes on the wind).",
            },
            {
              id: "a1_s1_c102_l17",
              original: "Bel costrutto! L'onore lo può sentire chi è morto?",
              literal: "Fine outcome! Can he who is dead feel honor?",
              tokens: [
                {
                  word: "Bel",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "fine / handsome (apocopated)",
                },
                {
                  word: "costrutto",
                  lemma: "costrutto",
                  pos: "noun",
                  meaning: "substance / sense / profit / useful outcome",
                },
                {
                  word: "sentire",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "to feel / hear / perceive",
                },
                {
                  word: "morto",
                  lemma: "morto",
                  pos: "adjective",
                  meaning: "dead",
                },
              ],
              grammarNote: "Falstaff's sarcastic summary: 'A fine profit/reckoning!' (translating Shakespeare's 'A trim reckoning!'). He asks if dead men can feel honor, using clitic left dislocation ('L'onore lo può sentire...').",
            },
            {
              id: "a1_s1_c102_l18",
              original: "No. Vive sol coi vivi?... Neppure: perché a torto",
              literal: "No. Does it live only with the living?... Not even that: because wrongly",
              tokens: [
                {
                  word: "Vive",
                  lemma: "vivere",
                  pos: "verb",
                  meaning: "lives (3rd person singular present)",
                },
                {
                  word: "sol",
                  lemma: "solo",
                  pos: "adverb",
                  meaning: "only / solely (apocopated from solo)",
                },
                {
                  word: "vivi",
                  lemma: "vivo",
                  pos: "noun",
                  meaning: "the living (substantivized plural adjective)",
                },
                {
                  word: "Neppure",
                  lemma: "neppure",
                  pos: "adverb",
                  meaning: "not even / neither",
                },
                {
                  word: "a torto",
                  lemma: "a torto",
                  pos: "idiom",
                  meaning: "wrongly / unjustly",
                },
              ],
              grammarNote: "Falstaff continues Shakespeare's catechism: honor doesn't live with the dead, nor can it survive among the living ('Vive sol coi vivi?... Neppure'), because human malice constantly attacks it.",
            },
            {
              id: "a1_s1_c102_l19",
              original: "lo gonfian le lusinghe, lo corrompe l'orgoglio,",
              literal: "flatteries puff it up, pride corrupts it,",
              tokens: [
                {
                  word: "gonfian",
                  lemma: "gonfiare",
                  pos: "verb",
                  meaning: "puff up / swell (apocopated from gonfiano)",
                },
                {
                  word: "lusinghe",
                  lemma: "lusinga",
                  pos: "noun",
                  meaning: "flatteries / blandishments",
                },
                {
                  word: "corrompe",
                  lemma: "corrompere",
                  pos: "verb",
                  meaning: "corrupts / taints",
                },
                {
                  word: "orgoglio",
                  lemma: "orgoglio",
                  pos: "noun",
                  meaning: "pride / vanity",
                },
              ],
              grammarNote: "Falstaff explains why honor cannot survive even among the living: flattery inflates it with vanity, and arrogant pride corrupts it. Clitic direct object 'lo' refers back to honor.",
            },
            {
              id: "a1_s1_c102_l20",
              original: "l'ammorban le calunnie; e per me non ne voglio!",
              literal: "calumnies infect it; and as for me, I want none of it!",
              tokens: [
                {
                  word: "ammorban",
                  lemma: "ammorbare",
                  pos: "verb",
                  meaning: "infect / sicken / plague (apocopated from ammorbano)",
                },
                {
                  word: "calunnie",
                  lemma: "calunnia",
                  pos: "noun",
                  meaning: "slanders / calumnies",
                },
                {
                  word: "per me",
                  lemma: "per me",
                  pos: "idiom",
                  meaning: "as for me / for my part",
                },
                {
                  word: "ne voglio",
                  lemma: "volerne",
                  pos: "verb",
                  meaning: "want of it (partitive clitic 'ne' + voglio)",
                },
              ],
              grammarNote: "Falstaff concludes his philosophical catechism: slander and gossip infect honor like a plague ('ammorban'), so he wants nothing to do with it (translating Shakespeare's 'Therefore I'll none of it').",
            },
            {
              id: "a1_s1_c102_l21",
              original: "Ma, per tornare a voi, furfanti, ho atteso troppo.",
              literal: "But, to return to you, rascals, I have waited too long.",
              tokens: [
                {
                  word: "tornare",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "to return",
                },
                {
                  word: "furfanti",
                  lemma: "furfante",
                  pos: "noun",
                  meaning: "rascals / rogues / scoundrels",
                },
                {
                  word: "atteso",
                  lemma: "attendere",
                  pos: "verb",
                  meaning: "waited / waited for (past participle)",
                },
                {
                  word: "troppo",
                  lemma: "troppo",
                  pos: "adverb",
                  meaning: "too long / too much",
                },
              ],
              grammarNote: "Having demolished the abstract concept of honor, Falstaff turns back to his real business: punishing his mutinous henchmen ('furfanti' = rascals).",
            },
            {
              id: "a1_s1_c102_l22",
              original: "E vi discaccio.",
              literal: "And I drive you out.",
              tokens: [
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (direct object clitic 2nd person plural)",
                },
                {
                  word: "discaccio",
                  lemma: "discacciare",
                  pos: "verb",
                  meaning: "I drive out / banish / expel (1st person singular present)",
                },
              ],
              grammarNote: "Falstaff pronounces their formal banishment and expulsion: 'And I drive you out!'. Present indicative of 'discacciare' with direct object 'vi'.",
            },
          ],
        },
        {
          id: "a1_s1_c103",
          speaker: "Sir John Falstaff",
          stageDirection: "prende in mano la scopa e insegue Bardolfo e Pistola che scansano i colpi correndo qua e là e riparandosi dietro la tavola",
          stageDirectionTranslation: "takes the broom in hand and chases Bardolfo and Pistola, who dodge the blows running here and there and shielding themselves behind the table",
          lines: [
          ],
        },
        {
          id: "a1_s1_c104",
          speaker: "Sir John Falstaff",
          pieceTitle: "L'onore! Ladri! (Monologo dell'onore)",
          lines: [
            {
              id: "a1_s1_c104_l1",
              original: "Olà! lesti! lesti! al galoppo!",
              literal: "Hey! quick! quick! at a gallop!",
              tokens: [
                {
                  word: "Olà",
                  lemma: "olà",
                  pos: "interjection",
                  meaning: "hey! / ho there! (interjection)",
                },
                {
                  word: "lesti",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble / brisk (masculine plural)",
                },
                {
                  word: "al galoppo",
                  lemma: "al galoppo",
                  pos: "idiom",
                  meaning: "at a gallop / at full speed",
                },
              ],
              grammarNote: "Falstaff seizes a broom and starts thrashing them, ordering them to run off at a gallop ('al galoppo').",
            },
            {
              id: "a1_s1_c104_l2",
              original: "al galoppo! Il capestro assai bene vi sta.",
              literal: "at a gallop! The halter suits you very well.",
              tokens: [
                {
                  word: "capestro",
                  lemma: "capestro",
                  pos: "noun",
                  meaning: "halter / hangman's rope / noose",
                },
                {
                  word: "assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "very / much / well",
                },
                {
                  word: "vi sta",
                  lemma: "stare bene",
                  pos: "idiom",
                  meaning: "suits you / becomes you",
                },
              ],
              grammarNote: "Falstaff shouts that the hangman's noose ('il capestro') suits them perfectly, as hanging is the proper fate for thieves who betray their master. 'Stare bene a qualcuno' is an idiom meaning 'to suit/become someone'.",
            },
            {
              id: "a1_s1_c104_l3",
              original: "Ladri! Via! Via di qua! Via di qua! Via di qua!",
              literal: "Thieves! Away! Out of here! Out of here! Out of here!",
              tokens: [
                {
                  word: "Ladri",
                  lemma: "ladro",
                  pos: "noun",
                  meaning: "thieves / robbers",
                },
                {
                  word: "Via",
                  lemma: "via",
                  pos: "adverb",
                  meaning: "away / out",
                },
                {
                  word: "Via di qua",
                  lemma: "via di qua",
                  pos: "idiom",
                  meaning: "out of here / away from here",
                },
              ],
              grammarNote: "With furious blows of the broom, Falstaff drives Bardolfo and Pistola out into the street ('Via di qua!': 'Out of here!'), triumphantly ending Act 1 Scene 1.",
            },
          ],
        },
        {
          id: "a1_s1_c105",
          speaker: "Sir John Falstaff",
          stageDirection: "Bardolfo fugge dalla porta a sinistra. Pistola dalla porta del fondo, non senza essersi buscato qualche colpo di granata, e Falstaff lo insegue",
          stageDirectionTranslation: "Bardolfo flees through the door on the left; Pistola through the back door, not without catching a few blows from the broom, and Falstaff pursues him",
          lines: [
          ],
        },
      ],
    },
    {
      sceneNumber: 2,
      title: "Parte II: Alice. Meg. Nannetta. (Nel giardino di Ford)",
      titleTranslation: "Part II: Alice. Meg. Nannetta. (In Ford's Garden)",
      originalDescription: "Giardino. A sinistra la casa di Ford. Gruppi d’alberi nel centro della scena. Alice, Meg, Mrs. Quickly e Nannetta scoprono le lettere d’amore identiche di Falstaff; Fenton e Nannetta si scambiano furtivi baci mentre gli uomini tramano la loro vendetta.",
      description: "Garden outside Ford's house. Alice and Meg discover that Falstaff sent them word-for-word identical love letters and resolve to punish him. Meanwhile, Fenton and Nannetta snatch sweet kisses, and Ford plots to spy on the knight in disguise.",
      cues: [
        {
          id: "a1_s2_c1",
          speaker: "Meg Page",
          stageDirection: "saluta",
          stageDirectionTranslation: "greets",
          lines: [
            {
              id: "a1_s2_c1_l1",
              original: "Alice.",
              literal: "Alice.",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (Mrs. Alice Ford)",
                },
                {
                  word: "comare",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "neighbor / gossip / female companion",
                },
              ],
              grammarNote: "Meg Page calls out cheerfully to greet her friend Alice Ford outside Ford's house in Windsor.",
            },
          ],
        },
        {
          id: "a1_s2_c2",
          speaker: "Alice Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a1_s2_c2_l1",
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
          id: "a1_s2_c3",
          speaker: "Meg Page",
          stageDirection: "salutando",
          stageDirectionTranslation: "greeting",
          lines: [
            {
              id: "a1_s2_c3_l1",
              original: "Nannetta.",
              literal: "Nannetta.",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (Alice's daughter)",
                },
                {
                  word: "fanciulla",
                  lemma: "fanciulla",
                  pos: "noun",
                  meaning: "young girl / maiden",
                },
              ],
              grammarNote: "Meg greets Alice's young daughter Nannetta.",
            },
          ],
        },
        {
          id: "a1_s2_c4",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a1_s2_c4_l1",
              original: "Escivo appunto.",
              literal: "I was just coming out.",
              tokens: [
                {
                  word: "Escivo",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "I was going out / coming out (imperfect indicative)",
                },
                {
                  word: "appunto",
                  lemma: "appunto",
                  pos: "adverb",
                  meaning: "just / precisely / at this exact moment",
                },
              ],
              grammarNote: "'Escivo' is an archaic and literary variant of 'uscivo' (first-person singular imperfect of 'uscire'). Alice explains she was just stepping outside to find Meg.",
            },
            {
              id: "a1_s2_c4_l2",
              original: "Per ridere con te.",
              literal: "To laugh with you.",
              tokens: [
                {
                  word: "Per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "in order to / to",
                },
                {
                  word: "ridere",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "to laugh",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "te",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (disjunctive pronoun)",
                },
              ],
              grammarNote: "Alice explains her purpose: she was heading over specifically to share a laugh with Meg over the ridiculous letter she received.",
            },
          ],
        },
        {
          id: "a1_s2_c5",
          speaker: "Alice Ford",
          stageDirection: "a mrs. Quickly",
          stageDirectionTranslation: "to Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c5_l1",
              original: "Buon dì, comare.",
              literal: "Good day, neighbor.",
              tokens: [
                {
                  word: "Buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocope of buono)",
                },
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "comare",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "gossip / neighbor / close female friend",
                },
              ],
              grammarNote: "Alice greets Mrs. Quickly, who arrives accompanying Meg. 'Comare' designates a close female friend, godmother, or neighborhood gossip.",
            },
          ],
        },
        {
          id: "a1_s2_c6",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c6_l1",
              original: "Dio vi doni allegria.",
              literal: "May God grant you cheer.",
              tokens: [
                {
                  word: "Dio",
                  lemma: "Dio",
                  pos: "noun",
                  meaning: "God",
                },
                {
                  word: "vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (plural indirect object)",
                },
                {
                  word: "doni",
                  lemma: "donare",
                  pos: "verb",
                  meaning: "may grant / bestow (present subjunctive)",
                },
                {
                  word: "allegria",
                  lemma: "allegria",
                  pos: "noun",
                  meaning: "cheer / merriment / joy",
                },
              ],
              grammarNote: "Mrs. Quickly's customary greeting using the optative subjunctive 'doni' (from 'donare', to bestow). An ironic blessing given the mischief that is about to unfold.",
            },
          ],
        },
        {
          id: "a1_s2_c7",
          speaker: "Mrs. Quickly",
          stageDirection: "accarezzando la guancia di Nannetta",
          stageDirectionTranslation: "stroking Nannetta's cheek",
          lines: [
            {
              id: "a1_s2_c7_l1",
              original: "Botton di rosa!",
              literal: "Rosebud!",
              tokens: [
                {
                  word: "Botton",
                  lemma: "bottone",
                  pos: "noun",
                  meaning: "bud / button (apocope of bottone)",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "rosa",
                  lemma: "rosa",
                  pos: "noun",
                  meaning: "rose",
                },
                {
                  word: "botton di rosa",
                  lemma: "botton di rosa",
                  pos: "idiom",
                  meaning: "rosebud (affectionate term for a fresh young girl)",
                },
              ],
              grammarNote: "Mrs. Quickly's affectionate endearment for young Nannetta, comparing her youthful freshness to an unopened rosebud ('botton di rosa').",
            },
          ],
        },
        {
          id: "a1_s2_c8",
          speaker: "Alice Ford",
          stageDirection: "ancora a Meg",
          stageDirectionTranslation: "again to Meg",
          lines: [
            {
              id: "a1_s2_c8_l1",
              original: "Giungi in buon punto.",
              literal: "You arrive at the right moment.",
              tokens: [
                {
                  word: "Giungi",
                  lemma: "giungere",
                  pos: "verb",
                  meaning: "you arrive (2nd person singular present)",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in / at",
                },
                {
                  word: "buon punto",
                  lemma: "buon punto",
                  pos: "idiom",
                  meaning: "in the nick of time / at the opportune moment",
                },
              ],
              grammarNote: "The idiom 'in buon punto' means at the very right moment, opportune time. Alice welcomes their arrival just as she was seeking them out.",
            },
            {
              id: "a1_s2_c8_l2",
              original: "M'accade un fatto da trasecolare.",
              literal: "Something has happened to me that leaves one dumbfounded.",
              tokens: [
                {
                  word: "M'accade",
                  lemma: "accadere",
                  pos: "verb",
                  meaning: "happens to me (mi + accade)",
                },
                {
                  word: "fatto",
                  lemma: "fatto",
                  pos: "noun",
                  meaning: "fact / occurrence / incident",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "such as to / enough to",
                },
                {
                  word: "trasecolare",
                  lemma: "trasecolare",
                  pos: "verb",
                  meaning: "to be dumbfounded / astounded / flabbergasted",
                },
              ],
              grammarNote: "'Da trasecolare' is a colorful Italian expression meaning enough to leave one utterly flabbergasted or speechless. Alice is brimming with excitement to tell her news.",
            },
          ],
        },
        {
          id: "a1_s2_c9",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c9_l1",
              original: "Anche a me.",
              literal: "To me as well.",
              tokens: [
                {
                  word: "Anche",
                  lemma: "anche",
                  pos: "adverb",
                  meaning: "also / too / as well",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "me",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "me (disjunctive pronoun)",
                },
              ],
              grammarNote: "Meg immediately matches Alice's opening, revealing that an identical shocking incident has befallen her.",
            },
          ],
        },
        {
          id: "a1_s2_c10",
          speaker: "Mrs. Quickly",
          stageDirection: "che parlava con Nannetta, avvicinandosi con curiosità",
          stageDirectionTranslation: "who was speaking with Nannetta, approaching with curiosity",
          lines: [
            {
              id: "a1_s2_c10_l1",
              original: "Che?",
              literal: "What?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what (interrogative pronoun)",
                },
                {
                  word: "cosa",
                  lemma: "cosa",
                  pos: "noun",
                  meaning: "thing / matter",
                },
              ],
              grammarNote: "Mrs. Quickly's sharp interjection, intensely curious to hear the gossip.",
            },
          ],
        },
        {
          id: "a1_s2_c11",
          speaker: "Nannetta",
          stageDirection: "avvicinandosi",
          stageDirectionTranslation: "approaching",
          lines: [
            {
              id: "a1_s2_c11_l1",
              original: "Che cosa?",
              literal: "What thing?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "cosa",
                  lemma: "cosa",
                  pos: "noun",
                  meaning: "thing",
                },
                {
                  word: "che cosa",
                  lemma: "che cosa",
                  pos: "idiom",
                  meaning: "what (standard interrogative)",
                },
              ],
              grammarNote: "Nannetta joins in asking for details: 'Che cosa?' is the standard Italian interrogative phrase.",
            },
          ],
        },
        {
          id: "a1_s2_c12",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a1_s2_c12_l1",
              original: "Narra il tuo caso.",
              literal: "Tell your tale.",
              tokens: [
                {
                  word: "Narra",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "narrate / tell (imperative 2nd singular)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive)",
                },
                {
                  word: "caso",
                  lemma: "caso",
                  pos: "noun",
                  meaning: "case / affair / circumstance",
                },
              ],
              grammarNote: "Alice invites Meg to speak first. Natural Italian possessive syntax: 'il tuo caso' -> 'your tale'.",
            },
          ],
        },
        {
          id: "a1_s2_c13",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c13_l1",
              original: "Narra il tuo.",
              literal: "Tell yours.",
              tokens: [
                {
                  word: "Narra",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "narrate / tell (imperative)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "pronoun",
                  meaning: "yours (possessive pronoun)",
                },
              ],
              grammarNote: "Meg deflects and insists that Alice speak first, using 'il tuo' substantively ('yours').",
            },
          ],
        },
        {
          id: "a1_s2_c14",
          speaker: "Meg Page",
          stageDirection: "in crocchio",
          stageDirectionTranslation: "in a huddle",
          lines: [
          ],
        },
        {
          id: "a1_s2_c15",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c15_l1",
              original: "Promessa",
              literal: "Promise",
              tokens: [
                {
                  word: "Promessa",
                  lemma: "promessa",
                  pos: "noun",
                  meaning: "promise / pledge",
                },
                {
                  word: "promettere",
                  lemma: "promettere",
                  pos: "verb",
                  meaning: "to promise / pledge",
                },
              ],
              grammarNote: "Alice demands a solemn pledge of secrecy before revealing the scandalous letter. Enjambs into the next line.",
            },
            {
              id: "a1_s2_c15_l2",
              original: "di non ciarlar.",
              literal: "not to gossip.",
              tokens: [
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of / to",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "ciarlar",
                  lemma: "ciarlare",
                  pos: "verb",
                  meaning: "to chatter / gossip (apocope of ciarlare)",
                },
              ],
              grammarNote: "Dependent infinitive clause completing 'Promessa': 'promessa di non ciarlar' (a promise not to chatter or blab). 'Ciarlar' is an apocope of 'ciarlare'.",
            },
          ],
        },
        {
          id: "a1_s2_c16",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c16_l1",
              original: "Ti pare?",
              literal: "Do you really think so?",
              tokens: [
                {
                  word: "Ti",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "to you (indirect object clitic)",
                },
                {
                  word: "pare",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "it seems / appears (3rd person singular present)",
                },
                {
                  word: "ti pare",
                  lemma: "ti pare",
                  pos: "idiom",
                  meaning: "do you think so? / as if! / of course not!",
                },
              ],
              grammarNote: "Idiomatic conversational retort 'Ti pare?' expressing mock indignation at the thought that Meg could ever betray a secret ('As if!').",
            },
          ],
        },
        {
          id: "a1_s2_c17",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c17_l1",
              original: "Oibò! Vi pare?",
              literal: "Good heavens! Do you think so?",
              tokens: [
                {
                  word: "Oibò",
                  lemma: "oibò",
                  pos: "interjection",
                  meaning: "for shame! / good heavens! / fiddlesticks!",
                },
                {
                  word: "Vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "to you (plural indirect object)",
                },
                {
                  word: "pare",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "it seems / appears",
                },
              ],
              grammarNote: "'Oibò!' is a vigorous archaic interjection of protest or shock. Mrs. Quickly addresses Alice with the polite plural 'Vi pare?'.",
            },
          ],
        },
        {
          id: "a1_s2_c18",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c18_l1",
              original: "Dunque: se m'acconciassi a entrar ne' rei",
              literal: "Well then: if I were to agree to enter into the evil",
              tokens: [
                {
                  word: "Dunque",
                  lemma: "dunque",
                  pos: "conjunction",
                  meaning: "well then / therefore",
                },
                {
                  word: "m'acconciassi",
                  lemma: "acconciarsi",
                  pos: "verb",
                  meaning: "I were to consent / reconcile myself (imperfect subjunctive)",
                },
                {
                  word: "entrar",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "to enter (apocope of entrare)",
                },
                {
                  word: "ne'",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the / into the (articulated preposition nei)",
                },
                {
                  word: "rei",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "guilty / evil / wicked (plural masculine)",
                },
              ],
              grammarNote: "Alice begins her grand conditional sentence ('se m'acconciassi... sarei...'). 'Acconciarsi a' means to agree or resign oneself; 'ne' rei' is a poetic contraction of 'nei rei' (into the wicked).",
            },
            {
              id: "a1_s2_c18_l2",
              original: "propositi del diavolo, sarei",
              literal: "designs of the devil, I would be",
              tokens: [
                {
                  word: "propositi",
                  lemma: "proposito",
                  pos: "noun",
                  meaning: "intentions / designs / purposes",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the",
                },
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil",
                },
                {
                  word: "sarei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I would be (present conditional)",
                },
              ],
              grammarNote: "Continuation of Alice's conditional protasis ('rei propositi del diavolo' = evil designs of the devil) leading to the apodosis with conditional 'sarei'.",
            },
            {
              id: "a1_s2_c18_l3",
              original: "promossa al grado di cavalleressa!",
              literal: "promoted to the rank of knight's lady!",
              tokens: [
                {
                  word: "promossa",
                  lemma: "promuovere",
                  pos: "verb",
                  meaning: "promoted (past participle feminine)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the",
                },
                {
                  word: "grado",
                  lemma: "grado",
                  pos: "noun",
                  meaning: "rank / degree / station",
                },
                {
                  word: "cavalleressa",
                  lemma: "cavalleressa",
                  pos: "noun",
                  meaning: "knight's lady / female knight / horsewoman",
                },
              ],
              grammarNote: "'Cavalleressa' is Boito's mock-chivalric feminine title formed from 'cavaliere' (knight). Alice mocks Falstaff's boastful proposal to elevate her to a knight's companion.",
            },
          ],
        },
        {
          id: "a1_s2_c19",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c19_l1",
              original: "Anch'io.",
              literal: "I too.",
              tokens: [
                {
                  word: "Anch'",
                  lemma: "anche",
                  pos: "adverb",
                  meaning: "also / too (elided form of anche)",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
              ],
              grammarNote: "Meg cuts in with dry, comic timing to reveal she received the exact same offer.",
            },
          ],
        },
        {
          id: "a1_s2_c20",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c20_l1",
              original: "Motteggi.",
              literal: "You are joking.",
              tokens: [
                {
                  word: "Motteggi",
                  lemma: "motteggiare",
                  pos: "verb",
                  meaning: "you jest / joke / banter (2nd person singular present)",
                },
                {
                  word: "motteggiare",
                  lemma: "motteggiare",
                  pos: "verb",
                  meaning: "to jest / make witty remarks / banter",
                },
              ],
              grammarNote: "'Motteggiare' means to banter, tease, or speak in jest. Alice cannot believe Meg could have had the same experience.",
            },
          ],
        },
        {
          id: "a1_s2_c21",
          speaker: "Meg Page",
          stageDirection: "cerca in tasca, estrae una lettera",
          stageDirectionTranslation: "searches in his pocket, pulls out a letter",
          lines: [
            {
              id: "a1_s2_c21_l1",
              original: "Non più parole,",
              literal: "No more words,",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "no / not",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / further",
                },
                {
                  word: "parole",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "words",
                },
              ],
              grammarNote: "Meg cuts short further banter to produce tangible proof: 'Non più parole' ('No more words').",
            },
            {
              id: "a1_s2_c21_l2",
              original: "ché qui sciupiamo la luce del sole.",
              literal: "for here we are wasting the sunlight.",
              tokens: [
                {
                  word: "ché",
                  lemma: "ché",
                  pos: "conjunction",
                  meaning: "for / because (short for poiché / perché)",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "sciupiamo",
                  lemma: "sciupare",
                  pos: "verb",
                  meaning: "we waste / squander / spoil",
                },
                {
                  word: "luce",
                  lemma: "luce",
                  pos: "noun",
                  meaning: "light",
                },
                {
                  word: "sole",
                  lemma: "sole",
                  pos: "noun",
                  meaning: "sun",
                },
              ],
              grammarNote: "Meg translates Shakespeare's 'We have burn'd daylight' (Merry Wives of Windsor, Act II Scene 1). 'Ché' with acute accent means 'for / because'.",
            },
            {
              id: "a1_s2_c21_l3",
              original: "Ho una lettera.",
              literal: "I have a letter.",
              tokens: [
                {
                  word: "Ho",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "I have (1st person singular present)",
                },
                {
                  word: "una",
                  lemma: "una",
                  pos: "adjective",
                  meaning: "a / an (indefinite article feminine)",
                },
                {
                  word: "lettera",
                  lemma: "lettera",
                  pos: "noun",
                  meaning: "letter / epistle",
                },
              ],
              grammarNote: "Meg pulls the incriminating love letter from her pocket.",
            },
          ],
        },
        {
          id: "a1_s2_c22",
          speaker: "Alice Ford",
          stageDirection: "cerca in tasca",
          stageDirectionTranslation: "searches in his pocket",
          lines: [
            {
              id: "a1_s2_c22_l1",
              original: "Anch'io.",
              literal: "I too.",
              tokens: [
                {
                  word: "Anch'",
                  lemma: "anche",
                  pos: "adverb",
                  meaning: "also / too (elided form of anche)",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
              ],
              grammarNote: "Meg cuts in with dry, comic timing to reveal she received the exact same offer.",
            },
            {
              id: "a1_s2_c22_l2",
              original: "NANNETTA E QUICKLY",
              literal: "NANNETTA AND QUICKLY",
              tokens: [
                {
                  word: "NANNETTA",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (proper name)",
                },
              ],
              grammarNote: "Speaker heading indicating that Nannetta and Mrs. Quickly gasp together in unison.",
            },
            {
              id: "a1_s2_c22_l3",
              original: "Oh!",
              literal: "Oh!",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh! (exclamation of surprise / shock)",
                },
                {
                  word: "esclamazione",
                  lemma: "esclamazione",
                  pos: "noun",
                  meaning: "exclamation / outcry",
                },
              ],
              grammarNote: "A collective exclamation of astonishment as Alice reveals she also has a letter in her pocket.",
            },
          ],
        },
        {
          id: "a1_s2_c23",
          speaker: "Alice Ford",
          stageDirection: "dà la lettera a Meg",
          stageDirectionTranslation: "hands the letter to Meg",
          lines: [
            {
              id: "a1_s2_c23_l1",
              original: "Leggi.",
              literal: "Read.",
              tokens: [
                {
                  word: "Leggi",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "read (imperative 2nd person singular)",
                },
                {
                  word: "leggere",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "to read",
                },
              ],
              grammarNote: "Alice hands her letter to Meg with a crisp imperative: 'Leggi' (Read it).",
            },
          ],
        },
        {
          id: "a1_s2_c24",
          speaker: "Meg Page",
          stageDirection: "scambia la propria lettera con quella di Alice",
          stageDirectionTranslation: "exchanges her letter with Alice's",
          lines: [
            {
              id: "a1_s2_c24_l1",
              original: "Leggi.",
              literal: "Read.",
              tokens: [
                {
                  word: "Leggi",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "read (imperative 2nd person singular)",
                },
                {
                  word: "leggere",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "to read",
                },
              ],
              grammarNote: "Alice hands her letter to Meg with a crisp imperative: 'Leggi' (Read it).",
            },
          ],
        },
        {
          id: "a1_s2_c25",
          speaker: "Meg Page",
          stageDirection: "leggendo la lettera di Alice",
          stageDirectionTranslation: "reading Alice's letter",
          lines: [
            {
              id: "a1_s2_c25_l1",
              original: "«Fulgida Alice! amor t'offro» ...Ma come?",
              literal: "\"Radiant Alice! I offer you love\" ...But how?",
              tokens: [
                {
                  word: "Fulgida",
                  lemma: "fulgido",
                  pos: "adjective",
                  meaning: "radiant / shining / glittering",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "t'offro",
                  lemma: "offrire",
                  pos: "verb",
                  meaning: "I offer you (ti + offro)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "adverb",
                  meaning: "how / why",
                },
              ],
              grammarNote: "Meg starts reading Alice's letter aloud and stops dead in disbelief: the words are identical to her own letter.",
            },
            {
              id: "a1_s2_c25_l2",
              original: "Che cosa dice?",
              literal: "What does it say?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what",
                },
                {
                  word: "cosa",
                  lemma: "cosa",
                  pos: "noun",
                  meaning: "thing",
                },
                {
                  word: "dice",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "says / tells (3rd person singular present)",
                },
                {
                  word: "che cosa",
                  lemma: "che cosa",
                  pos: "idiom",
                  meaning: "what",
                },
              ],
              grammarNote: "Meg stares at the page in perplexity, wondering if her eyes are deceiving her.",
            },
            {
              id: "a1_s2_c25_l3",
              original: "Salvo che il nome",
              literal: "Except for the name",
              tokens: [
                {
                  word: "Salvo",
                  lemma: "salvo",
                  pos: "preposition",
                  meaning: "except / save for",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
                {
                  word: "salvo che",
                  lemma: "salvo che",
                  pos: "idiom",
                  meaning: "except that / save that",
                },
              ],
              grammarNote: "Meg notes the only variance between the two epistles is the name of the addressee.",
            },
            {
              id: "a1_s2_c25_l4",
              original: "la frase è uguale.",
              literal: "the sentence is identical.",
              tokens: [
                {
                  word: "frase",
                  lemma: "frase",
                  pos: "noun",
                  meaning: "sentence / phrase / wording",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
                {
                  word: "uguale",
                  lemma: "uguale",
                  pos: "adjective",
                  meaning: "identical / the same / equal",
                },
              ],
              grammarNote: "Completes Meg's observation: 'Salvo che il nome la frase è uguale' (Except for the name, the wording is identical).",
            },
          ],
        },
        {
          id: "a1_s2_c26",
          speaker: "Alice Ford",
          stageDirection: "co' gli occhi sulla lettera che tiene in mano, ripete la lettura di Meg",
          stageDirectionTranslation: "with eyes on the letter she holds in her hand, she repeats Meg's reading",
          lines: [
            {
              id: "a1_s2_c26_l1",
              original: "«Fulgida Meg, amor t'offro»...",
              literal: "\"Radiant Meg, I offer you love\"...",
              tokens: [
                {
                  word: "Fulgida",
                  lemma: "fulgido",
                  pos: "adjective",
                  meaning: "radiant / shining / glittering",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope)",
                },
                {
                  word: "t'offro",
                  lemma: "offrire",
                  pos: "verb",
                  meaning: "I offer you (ti + offro)",
                },
              ],
              grammarNote: "Alice reads Meg's letter aloud, confirming word-for-word Falstaff's lazy duplicate courtship.",
            },
          ],
        },
        {
          id: "a1_s2_c27",
          speaker: "Meg Page",
          stageDirection: "continuando sul proprio foglio la lettera di Alice",
          stageDirectionTranslation: "continuing Alice's letter on her own sheet",
          lines: [
            {
              id: "a1_s2_c27_l1",
              original: "«amor bramo».",
              literal: "\"I crave love\".",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "bramo",
                  lemma: "bramare",
                  pos: "verb",
                  meaning: "I crave / yearn for / passionately desire",
                },
                {
                  word: "bramare",
                  lemma: "bramare",
                  pos: "verb",
                  meaning: "to long for / crave",
                },
              ],
              grammarNote: "Meg reads the next clause of the letter: 'amor bramo' (I crave love), showing Falstaff's carnal appetite.",
            },
          ],
        },
        {
          id: "a1_s2_c28",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c28_l1",
              original: "Qua «Meg», là «Alice».",
              literal: "Here \"Meg\", there \"Alice\".",
              tokens: [
                {
                  word: "Qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
              ],
              grammarNote: "Alice holds both letters side-by-side, pointing out the only swapped word.",
            },
          ],
        },
        {
          id: "a1_s2_c29",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c29_l1",
              original: "È tal e quale:",
              literal: "It is exactly the same:",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "it is",
                },
                {
                  word: "tal",
                  lemma: "tale",
                  pos: "adjective",
                  meaning: "such (apocope of tale)",
                },
                {
                  word: "quale",
                  lemma: "quale",
                  pos: "adjective",
                  meaning: "which / as",
                },
                {
                  word: "tal e quale",
                  lemma: "tale e quale",
                  pos: "idiom",
                  meaning: "exact / spitting image / identical",
                },
              ],
              grammarNote: "'Tal e quale' is an idiomatic Italian expression for an exact, indistinguishable replica.",
            },
          ],
        },
        {
          id: "a1_s2_c30",
          speaker: "Meg Page",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a1_s2_c30_l1",
              original: "«Non domandar perché, ma dimmi:»",
              literal: "\"Do not ask why, but tell me:\"",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not (negative particle)",
                },
                {
                  word: "domandar",
                  lemma: "domandare",
                  pos: "verb",
                  meaning: "to ask (apocope of infinitive used as negative imperative)",
                },
                {
                  word: "perché",
                  lemma: "perché",
                  pos: "adverb",
                  meaning: "why / for what reason",
                },
                {
                  word: "ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "dimmi",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell me (imperative dì + clitic mi)",
                },
              ],
              grammarNote: "Falstaff's imperious romantic prose: negative imperative 'Non domandar' followed by imperative with enclitic 'dimmi'.",
            },
          ],
        },
        {
          id: "a1_s2_c31",
          speaker: "Alice Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a1_s2_c31_l1",
              original: "«t'amo».",
              literal: "\"I love you\".",
              tokens: [
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
              grammarNote: "Alice finishes reading the sentence: 'dimmi: t'amo' (tell me: I love you).",
            },
            {
              id: "a1_s2_c31_l2",
              original: "Pur non gli offersi cagion.",
              literal: "Yet I gave him no cause.",
              tokens: [
                {
                  word: "Pur",
                  lemma: "pure",
                  pos: "adverb",
                  meaning: "yet / nevertheless / even so (apocope of pure)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "to him (indirect object clitic)",
                },
                {
                  word: "offersi",
                  lemma: "offrire",
                  pos: "verb",
                  meaning: "I offered / gave (passato remoto 1st singular)",
                },
                {
                  word: "cagion",
                  lemma: "cagione",
                  pos: "noun",
                  meaning: "cause / reason / pretext (apocope of cagione)",
                },
              ],
              grammarNote: "Alice protests that she never encouraged Falstaff's advances. Uses the irregular passato remoto 'offersi' and apocopated 'cagion'.",
            },
          ],
        },
        {
          id: "a1_s2_c32",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c32_l1",
              original: "Il nostro caso è pur strano.",
              literal: "Our case is truly strange.",
              tokens: [
                {
                  word: "nostro",
                  lemma: "nostro",
                  pos: "adjective",
                  meaning: "our (possessive)",
                },
                {
                  word: "caso",
                  lemma: "caso",
                  pos: "noun",
                  meaning: "case / situation",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "pur",
                  lemma: "pure",
                  pos: "adverb",
                  meaning: "truly / indeed (emphatic adverb)",
                },
                {
                  word: "strano",
                  lemma: "strano",
                  pos: "adjective",
                  meaning: "strange / odd",
                },
              ],
              grammarNote: "Meg reflects on the bizarre coincidence. 'Pur strano' uses 'pur' as an intensifier meaning 'truly' or 'indeed'.",
            },
          ],
        },
        {
          id: "a1_s2_c33",
          speaker: "Meg Page",
          stageDirection: "tutte in un gruppo addosso alle lettere, confrontandole e maneggiandole con curiosità",
          stageDirectionTranslation: "all in a group clustered over the letters, comparing them and handling them with curiosity",
          lines: [
          ],
        },
        {
          id: "a1_s2_c34",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c34_l1",
              original: "Guardiam con flemma.",
              literal: "Let us examine with composure.",
              tokens: [
                {
                  word: "Guardiam",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "let us look / examine (hortative, apocope of guardiamo)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "flemma",
                  lemma: "flemma",
                  pos: "noun",
                  meaning: "phlegm / composure / cool calm",
                },
              ],
              grammarNote: "Mrs. Quickly proposes a methodical, cool-headed examination of the physical evidence. 'Flemma' refers to the ancient humor of phlegm, denoting unruffled calmness.",
            },
          ],
        },
        {
          id: "a1_s2_c35",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c35_l1",
              original: "Gli stessi versi.",
              literal: "The same verses.",
              tokens: [
                {
                  word: "stessi",
                  lemma: "stesso",
                  pos: "adjective",
                  meaning: "same (masculine plural)",
                },
                {
                  word: "versi",
                  lemma: "verso",
                  pos: "noun",
                  meaning: "verses / lines of poetry",
                },
              ],
              grammarNote: "Meg examines the poetic lines: they are identical.",
            },
          ],
        },
        {
          id: "a1_s2_c36",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c36_l1",
              original: "Lo stesso inchiostro.",
              literal: "The same ink.",
              tokens: [
                {
                  word: "stesso",
                  lemma: "stesso",
                  pos: "adjective",
                  meaning: "same (masculine singular)",
                },
                {
                  word: "inchiostro",
                  lemma: "inchiostro",
                  pos: "noun",
                  meaning: "ink",
                },
              ],
              grammarNote: "Alice checks the ink: written with the exact same batch.",
            },
          ],
        },
        {
          id: "a1_s2_c37",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c37_l1",
              original: "La stessa mano.",
              literal: "The same hand.",
              tokens: [
                {
                  word: "stessa",
                  lemma: "stesso",
                  pos: "adjective",
                  meaning: "same (feminine singular)",
                },
                {
                  word: "mano",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hand / handwriting",
                },
              ],
              grammarNote: "Quickly checks the script: penned in the same handwriting ('mano').",
            },
          ],
        },
        {
          id: "a1_s2_c38",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c38_l1",
              original: "Lo stesso stemma.",
              literal: "The same coat of arms.",
              tokens: [
                {
                  word: "stesso",
                  lemma: "stesso",
                  pos: "adjective",
                  meaning: "same",
                },
                {
                  word: "stemma",
                  lemma: "stemma",
                  pos: "noun",
                  meaning: "coat of arms / crest / heraldic seal",
                },
              ],
              grammarNote: "Nannetta inspects the wax seal: impressed with the very same knightly crest ('stemma').",
            },
          ],
        },
        {
          id: "a1_s2_c39",
          speaker: "Alice & Meg",
          stageDirection: "leggendo insieme ciascuna sulla propria lettera",
          stageDirectionTranslation: "reading together, each from her own letter",
          lines: [
            {
              id: "a1_s2_c39_l1",
              original: "«Sei la gaia comare, il compar gaio",
              literal: "\"You are the merry gossip, the merry comrade",
              tokens: [
                {
                  word: "Sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd person singular present)",
                },
                {
                  word: "gaia",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "merry / gay / cheerful (feminine)",
                },
                {
                  word: "comare",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "gossip / neighbor (female)",
                },
                {
                  word: "compar",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "comrade / male gossip / partner (apocope of compare)",
                },
                {
                  word: "gaio",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "merry / cheerful (masculine)",
                },
              ],
              grammarNote: "Alice and Meg sing Falstaff's ridiculous verse in two-part counterpoint, parodying Shakespeare's title ('Merry Wives'). Boito crafts an elegant chiasmus: 'gaia comare, il compar gaio'.",
            },
            {
              id: "a1_s2_c39_l2",
              original: "son io, e fra noi due facciamo il paio.»",
              literal: "am I, and between the two of us we make a pair.\"",
              tokens: [
                {
                  word: "son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "am (apocope of sono)",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "fra",
                  lemma: "fra",
                  pos: "preposition",
                  meaning: "between / among",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two",
                },
                {
                  word: "facciamo il paio",
                  lemma: "fare il paio",
                  pos: "idiom",
                  meaning: "we make a pair / we match each other perfectly",
                },
              ],
              grammarNote: "Syntactic inversion: 'il compar gaio son io'. The idiom 'fare il paio' means to be a well-matched pair or two of a kind.",
            },
          ],
        },
        {
          id: "a1_s2_c40",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c40_l1",
              original: "Già.",
              literal: "Indeed.",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already / indeed / yes",
                },
                {
                  word: "davvero",
                  lemma: "davvero",
                  pos: "adverb",
                  meaning: "truly / really",
                },
              ],
              grammarNote: "Alice utters a sarcastic, dry monosyllable ('Già') scoffing at the thought of pairing with Falstaff.",
            },
          ],
        },
        {
          id: "a1_s2_c41",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c41_l1",
              original: "Lui, lei, te.",
              literal: "Him, her, you.",
              tokens: [
                {
                  word: "Lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him",
                },
                {
                  word: "lei",
                  lemma: "lei",
                  pos: "pronoun",
                  meaning: "she / her",
                },
                {
                  word: "te",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
              ],
              grammarNote: "Nannetta points out the arithmetic absurdity: Falstaff ('lui'), Meg ('lei'), and Alice ('te').",
            },
          ],
        },
        {
          id: "a1_s2_c42",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c42_l1",
              original: "Un paio in tre.",
              literal: "A pair in three.",
              tokens: [
                {
                  word: "paio",
                  lemma: "paio",
                  pos: "noun",
                  meaning: "pair / couple",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in / into",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "noun",
                  meaning: "three",
                },
              ],
              grammarNote: "Quickly's witty punchline: Falstaff's romantic 'pair' actually consists of three people ('un paio in tre').",
            },
          ],
        },
        {
          id: "a1_s2_c43",
          speaker: "Mrs. Quickly",
          stageDirection: "tutte col naso sulle lettere",
          stageDirectionTranslation: "all with their noses in the letters",
          lines: [
          ],
        },
        {
          id: "a1_s2_c44",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c44_l1",
              original: "«Facciamo il paio in un amor ridente",
              literal: "\"We make a pair in a laughing love",
              tokens: [
                {
                  word: "Facciamo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "we make (1st person plural present)",
                },
                {
                  word: "paio",
                  lemma: "paio",
                  pos: "noun",
                  meaning: "pair",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope)",
                },
                {
                  word: "ridente",
                  lemma: "ridente",
                  pos: "adjective",
                  meaning: "laughing / smiling / cheerful",
                },
              ],
              grammarNote: "Alice resumes reciting Falstaff's pompous letter: 'un amor ridente' (a laughing, merry love).",
            },
            {
              id: "a1_s2_c44_l2",
              original: "di donna bella e d'uomo»...",
              literal: "of beautiful woman and of man\"...",
              tokens: [
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / lovely",
                },
                {
                  word: "d'uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "of man (di + uomo)",
                },
              ],
              grammarNote: "Alice suspends the sentence on the word 'd'uomo', leaving the outrageous final adjective for all to shout together.",
            },
            {
              id: "a1_s2_c44_l3",
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
              id: "a1_s2_c44_l4",
              original: "«appariscente»",
              literal: "\"striking\"",
              tokens: [
                {
                  word: "appariscente",
                  lemma: "appariscente",
                  pos: "adjective",
                  meaning: "striking / imposing / conspicuous / eye-catching",
                },
                {
                  word: "apparire",
                  lemma: "apparire",
                  pos: "verb",
                  meaning: "to appear / show oneself",
                },
              ],
              grammarNote: "The comic climax of Falstaff's vanity: he describes his gargantuan, waddling frame as 'appariscente' (striking / handsome).",
            },
          ],
        },
        {
          id: "a1_s2_c45",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c45_l1",
              original: "«e il viso tuo su me risplenderà",
              literal: "\"and your face upon me shall shine",
              tokens: [
                {
                  word: "viso",
                  lemma: "viso",
                  pos: "noun",
                  meaning: "face / countenance",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon / on",
                },
                {
                  word: "me",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "me",
                },
                {
                  word: "risplenderà",
                  lemma: "risplendere",
                  pos: "verb",
                  meaning: "shall shine / blaze (future 3rd singular)",
                },
              ],
              grammarNote: "Falstaff adopts high Petrarchan poetic style, promising that the lady's face will shine upon him like a celestial star.",
            },
            {
              id: "a1_s2_c45_l2",
              original: "come una stella sull'immensità.»",
              literal: "like a star upon the immensity.\"",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "stella",
                  lemma: "stella",
                  pos: "noun",
                  meaning: "star",
                },
                {
                  word: "sull'",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the (articulated preposition sullo elided)",
                },
                {
                  word: "immensità",
                  lemma: "immensità",
                  pos: "noun",
                  meaning: "immensity / vast expanse",
                },
              ],
              grammarNote: "Boito's brilliant double-entendre: Falstaff means the vast sea of his love, but the women hear an exact description of his immense, cosmic girth.",
            },
            {
              id: "a1_s2_c45_l3",
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
          ],
        },
        {
          id: "a1_s2_c46",
          speaker: "Alice Ford",
          stageDirection: "ridendo",
          stageDirectionTranslation: "laughing",
          lines: [
            {
              id: "a1_s2_c46_l1",
              original: "Ah! Ah! Ah! Ah! Ah! Ah!",
              literal: "Ha! Ha! Ha! Ha! Ha! Ha!",
              tokens: [
                {
                  word: "Ah",
                  lemma: "ah",
                  pos: "interjection",
                  meaning: "ha! / ah! (expression of laughter)",
                },
                {
                  word: "risata",
                  lemma: "risata",
                  pos: "noun",
                  meaning: "laughter / laugh",
                },
              ],
              grammarNote: "The four women dissolve into uncontrollable, ringing laughter at the preposterous letter.",
            },
          ],
        },
        {
          id: "a1_s2_c47",
          speaker: "Alice Ford",
          stageDirection: "continua e finisce",
          stageDirectionTranslation: "continues and finishes",
          lines: [
            {
              id: "a1_s2_c47_l1",
              original: "«Rispondi al tuo scudiere,",
              literal: "\"Reply to your squire,",
              tokens: [
                {
                  word: "Rispondi",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "reply / answer (imperative 2nd singular)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your",
                },
                {
                  word: "scudiere",
                  lemma: "scudiere",
                  pos: "noun",
                  meaning: "squire / armor-bearer",
                },
              ],
              grammarNote: "Alice reads the closing valediction: Falstaff poses as a humble 'scudiere' (squire) serving his courtly lady.",
            },
            {
              id: "a1_s2_c47_l2",
              original: "John Falstaff cavaliere.»",
              literal: "John Falstaff, knight.\"",
              tokens: [
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
                {
                  word: "cavaliere",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / cavalier",
                },
              ],
              grammarNote: "The formal knightly signature: 'John Falstaff cavaliere', confirming his aristocratic pretensions.",
            },
          ],
        },
        {
          id: "a1_s2_c48",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c48_l1",
              original: "Mostro!",
              literal: "Monster!",
              tokens: [
                {
                  word: "Mostro",
                  lemma: "mostro",
                  pos: "noun",
                  meaning: "monster / prodigy / beast",
                },
                {
                  word: "mostruoso",
                  lemma: "mostruoso",
                  pos: "adjective",
                  meaning: "monstrous / grotesque",
                },
              ],
              grammarNote: "Quickly gasps in comic horror at Falstaff's audacity.",
            },
          ],
        },
        {
          id: "a1_s2_c49",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c49_l1",
              original: "Dobbiam gabbarlo.",
              literal: "We must trick him.",
              tokens: [
                {
                  word: "Dobbiam",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "we must / have to (apocope of dobbiamo)",
                },
                {
                  word: "gabbarlo",
                  lemma: "gabbare",
                  pos: "verb",
                  meaning: "to trick him / fool him (gabbare + clitic lo)",
                },
                {
                  word: "gabbare",
                  lemma: "gabbare",
                  pos: "verb",
                  meaning: "to deceive / trick / mock",
                },
              ],
              grammarNote: "'Gabbare' is the classic Tuscan verb for playing a practical joke or beffa on someone. Alice decrees that Falstaff must be punished.",
            },
          ],
        },
        {
          id: "a1_s2_c50",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c50_l1",
              original: "E farne chiasso.",
              literal: "And make a great uproar of it.",
              tokens: [
                {
                  word: "farne",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to make of it (fare + clitic ne)",
                },
                {
                  word: "chiasso",
                  lemma: "chiasso",
                  pos: "noun",
                  meaning: "uproar / fuss / noisy clamor",
                },
                {
                  word: "far chiasso",
                  lemma: "far chiasso",
                  pos: "idiom",
                  meaning: "to cause a sensation / make a great fuss",
                },
              ],
              grammarNote: "Nannetta wants to make a public racket and spectacle of the trick ('farne chiasso').",
            },
          ],
        },
        {
          id: "a1_s2_c51",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c51_l1",
              original: "E metterlo in burletta.",
              literal: "And turn him into a laughingstock.",
              tokens: [
                {
                  word: "metterlo",
                  lemma: "mettere",
                  pos: "verb",
                  meaning: "to put him / turn him (mettere + clitic lo)",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in / into",
                },
                {
                  word: "burletta",
                  lemma: "burletta",
                  pos: "noun",
                  meaning: "farce / laughingstock / mockery",
                },
                {
                  word: "mettere in burletta",
                  lemma: "mettere in burletta",
                  pos: "idiom",
                  meaning: "to turn into a joke / make fun of",
                },
              ],
              grammarNote: "'Mettere in burletta' means to turn something into a laughingstock or comic farce (diminutive of 'burla', practical joke).",
            },
          ],
        },
        {
          id: "a1_s2_c52",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c52_l1",
              original: "Oh! Oh! che spasso!",
              literal: "Oh! Oh! what fun!",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh! (exclamation of delight)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what (exclamative)",
                },
                {
                  word: "spasso",
                  lemma: "spasso",
                  pos: "noun",
                  meaning: "fun / amusement / entertainment",
                },
              ],
              grammarNote: "Nannetta exclaims in sheer delight at the prospect of the prank.",
            },
          ],
        },
        {
          id: "a1_s2_c53",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c53_l1",
              original: "Che allegria!",
              literal: "What merriment!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what (exclamative)",
                },
                {
                  word: "allegria",
                  lemma: "allegria",
                  pos: "noun",
                  meaning: "merriment / gaiety / joy",
                },
              ],
              grammarNote: "Quickly joins the chorus of glee.",
            },
          ],
        },
        {
          id: "a1_s2_c54",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c54_l1",
              original: "Che vendetta!",
              literal: "What revenge!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what (exclamative)",
                },
                {
                  word: "vendetta",
                  lemma: "vendetta",
                  pos: "noun",
                  meaning: "revenge / vengeance / retribution",
                },
              ],
              grammarNote: "Meg savors the delicious vengeance they will exact on the insolent fat knight.",
            },
          ],
        },
        {
          id: "a1_s2_c55",
          speaker: "Meg Page",
          stageDirection: "tutte in crocchio cinguettando",
          stageDirectionTranslation: "all in a huddle, chirping",
          lines: [
            {
              id: "a1_s2_c55_l1",
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
          id: "a1_s2_c56",
          speaker: "Alice Ford",
          stageDirection: "rivolgendosi ora all'una, ora all'altra",
          stageDirectionTranslation: "turning now to one, now to the other",
          lines: [
            {
              id: "a1_s2_c56_l1",
              original: "Quell'otre, quel tino!",
              literal: "That wineskin, that vat!",
              tokens: [
                {
                  word: "Quell'",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative elided)",
                },
                {
                  word: "otre",
                  lemma: "otre",
                  pos: "noun",
                  meaning: "wineskin / leather bottle",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative)",
                },
                {
                  word: "tino",
                  lemma: "tino",
                  pos: "noun",
                  meaning: "wine vat / cask",
                },
              ],
              grammarNote: "Alice initiates the dazzling, rapid-fire staccato ensemble, comparing Falstaff's gigantic girth to a leather wineskin ('otre') and a wine-making vat ('tino').",
            },
            {
              id: "a1_s2_c56_l2",
              original: "Quel re delle pance,",
              literal: "That king of bellies,",
              tokens: [
                {
                  word: "Quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "re",
                  lemma: "re",
                  pos: "noun",
                  meaning: "king",
                },
                {
                  word: "delle",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (feminine plural)",
                },
                {
                  word: "pance",
                  lemma: "pancia",
                  pos: "noun",
                  meaning: "bellies / paunches",
                },
              ],
              grammarNote: "Falstaff is hailed derisively as 'king of bellies', mocking his own royal monologue on his paunch from Act 1 Scene 1.",
            },
            {
              id: "a1_s2_c56_l3",
              original: "ci ha ancora le ciance",
              literal: "still has the chatter",
              tokens: [
                {
                  word: "ci ha",
                  lemma: "averci",
                  pos: "verb",
                  meaning: "has (colloquial averci, 3rd singular)",
                },
                {
                  word: "ancora",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet",
                },
                {
                  word: "ciance",
                  lemma: "ciancia",
                  pos: "noun",
                  meaning: "idle chatter / flirtatious nonsense / prattle",
                },
              ],
              grammarNote: "'Ciance' denotes frivolous flirtatious chatter or coquettish sweet talk. Alice mocks that this mountain of lard still affects youthful seductions.",
            },
            {
              id: "a1_s2_c56_l4",
              original: "del bel vagheggino.",
              literal: "of the handsome gallant.",
              tokens: [
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the",
                },
                {
                  word: "bel",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "handsome / fair (apocope)",
                },
                {
                  word: "vagheggino",
                  lemma: "vagheggino",
                  pos: "noun",
                  meaning: "dandy / lady-killer / beau / gallant",
                },
              ],
              grammarNote: "'Vagheggino' (from 'vagheggiare', to ogle or woo lovingly) is an ironic term for an effeminate dandy or conceited flirt.",
            },
            {
              id: "a1_s2_c56_l5",
              original: "E l'olio gli sgocciola",
              literal: "And oil drips from him",
              tokens: [
                {
                  word: "olio",
                  lemma: "olio",
                  pos: "noun",
                  meaning: "oil / grease / melted lard",
                },
                {
                  word: "gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "from him / on him (dative of reference)",
                },
                {
                  word: "sgocciola",
                  lemma: "sgocciolare",
                  pos: "verb",
                  meaning: "drips / trickles down",
                },
              ],
              grammarNote: "Boito captures Shakespeare's earthy description of Falstaff sweating grease ('oil drips from him'). Dative 'gli' functions as a dative of disadvantage.",
            },
            {
              id: "a1_s2_c56_l6",
              original: "dall'adipe unticcio",
              literal: "from his greasy fat",
              tokens: [
                {
                  word: "dall'",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition)",
                },
                {
                  word: "adipe",
                  lemma: "adipe",
                  pos: "noun",
                  meaning: "fat / blubber / adipose tissue",
                },
                {
                  word: "unticcio",
                  lemma: "unticcio",
                  pos: "adjective",
                  meaning: "greasy / oily / slimy",
                },
              ],
              grammarNote: "'Unticcio' is a pejorative diminutive of 'unto' (greasy, oily). 'Adipe' is the anatomical term for bodily fat.",
            },
            {
              id: "a1_s2_c56_l7",
              original: "e ancor ei ne snocciola",
              literal: "and still he reels off",
              tokens: [
                {
                  word: "ancor",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet (apocope)",
                },
                {
                  word: "ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (poetic archaic form)",
                },
                {
                  word: "ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "of them / from it (partitive clitic)",
                },
                {
                  word: "snocciola",
                  lemma: "snocciolare",
                  pos: "verb",
                  meaning: "reels off / rattles off / shells",
                },
              ],
              grammarNote: "'Snocciolare' literally means to stone/pit fruit or shell peas, and idiomatically means to reel off verses, rhymes, or lies with effortless speed.",
            },
            {
              id: "a1_s2_c56_l8",
              original: "la strofa e il bisticcio!",
              literal: "stanzas and puns!",
              tokens: [
                {
                  word: "strofa",
                  lemma: "strofa",
                  pos: "noun",
                  meaning: "stanza / strophe / verse",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "bisticcio",
                  lemma: "bisticcio",
                  pos: "noun",
                  meaning: "pun / wordplay / quibble",
                },
              ],
              grammarNote: "'Bisticcio' in literary Italian signifies an intricate pun, play on words, or rhyming assonance (such as 'gaia comare / compar gaio').",
            },
            {
              id: "a1_s2_c56_l9",
              original: "Lasciam ch'ei le pronte",
              literal: "Let us let him his ready",
              tokens: [
                {
                  word: "Lasciam",
                  lemma: "lasciare",
                  pos: "verb",
                  meaning: "let us allow / let (hortative, apocope of lasciamo)",
                },
                {
                  word: "ch'ei",
                  lemma: "che egli",
                  pos: "idiom",
                  meaning: "that he (conjunction che + pronoun ei)",
                },
                {
                  word: "pronte",
                  lemma: "pronto",
                  pos: "adjective",
                  meaning: "ready / glib / facile (feminine plural)",
                },
              ],
              grammarNote: "Hortative subjunctive construction: 'Lasciam ch'ei... spifferi' (Let us let him blurt out...). Enjambs with the following line.",
            },
            {
              id: "a1_s2_c56_l10",
              original: "sue ciarle ne spifferi;",
              literal: "prattlings blurt out;",
              tokens: [
                {
                  word: "sue",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive feminine plural)",
                },
                {
                  word: "ciarle",
                  lemma: "ciarla",
                  pos: "noun",
                  meaning: "prattlings / gossip / empty chatter",
                },
                {
                  word: "spifferi",
                  lemma: "spifferare",
                  pos: "verb",
                  meaning: "blurt out / spill / babble (present subjunctive 3rd singular)",
                },
              ],
              grammarNote: "'Spifferare' colloquially means to spill the beans or blurt out secrets recklessly. Governed by subjunctive after 'lasciam che'.",
            },
            {
              id: "a1_s2_c56_l11",
              original: "farà come i pifferi",
              literal: "he will fare like the pipers",
              tokens: [
                {
                  word: "farà",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "he will do / fare (future 3rd singular)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "pifferi",
                  lemma: "piffero",
                  pos: "noun",
                  meaning: "fifers / pipers / shawm players",
                },
              ],
              grammarNote: "First half of the famous Italian proverb: 'Fare come i pifferi di montagna, che andarono per suonare e furono suonati' (To do like the mountain pipers, who went to play music and ended up getting a beating).",
            },
            {
              id: "a1_s2_c56_l12",
              original: "che sceser dal monte.",
              literal: "who came down from the mountain.",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "who (relative pronoun)",
                },
                {
                  word: "sceser",
                  lemma: "scendere",
                  pos: "verb",
                  meaning: "descended / came down (passato remoto 3rd plural, apocope of scesero)",
                },
                {
                  word: "dal",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the",
                },
                {
                  word: "monte",
                  lemma: "monte",
                  pos: "noun",
                  meaning: "mountain / hill",
                },
              ],
              grammarNote: "Completes the proverb: Falstaff thought he was descending from on high to conquer the Windsor wives, but he will end up thoroughly beaten and humiliated.",
            },
            {
              id: "a1_s2_c56_l13",
              original: "Vedrai che se abbindolo",
              literal: "You will see that if I bamboozle",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (future 2nd person singular)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "abbindolo",
                  lemma: "abbindolare",
                  pos: "verb",
                  meaning: "I bamboozle / ensnare / swindle (1st person singular present)",
                },
              ],
              grammarNote: "'Abbindolare' derives from 'bindolo' (skein-winder/pulley), meaning to wrap someone round one's finger or dupe them completely.",
            },
            {
              id: "a1_s2_c56_l14",
              original: "quel grosso compar,",
              literal: "that fat gossip,",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "grosso",
                  lemma: "grosso",
                  pos: "adjective",
                  meaning: "fat / big / bulky",
                },
                {
                  word: "compar",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "gossip / comrade / partner (apocope of compare)",
                },
              ],
              grammarNote: "Alice refers sarcastically to Falstaff's line ('il compar gaio') as 'quel grosso compar' (that huge crony).",
            },
            {
              id: "a1_s2_c56_l15",
              original: "più lesto d'un guindolo",
              literal: "faster than a yarn-winder",
              tokens: [
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / faster",
                },
                {
                  word: "lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "swift / nimble / quick",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "than a (comparative di + un)",
                },
                {
                  word: "guindolo",
                  lemma: "guindolo",
                  pos: "noun",
                  meaning: "yarn-winder / spinning reel",
                },
              ],
              grammarNote: "'Guindolo' is a revolving yarn-winder or reel. The comparative 'più lesto d'un guindolo' means faster than a spinning wheel.",
            },
            {
              id: "a1_s2_c56_l16",
              original: "lo faccio girar.",
              literal: "I make him spin.",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "faccio",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "I make / cause to (causative fare)",
                },
                {
                  word: "girar",
                  lemma: "girare",
                  pos: "verb",
                  meaning: "to spin / turn round (apocope of girare)",
                },
              ],
              grammarNote: "Causative structure 'far girare' (to spin around like a top / make someone lose their head). Truncated infinitive 'girar' for meter and rhyme.",
            },
          ],
        },
        {
          id: "a1_s2_c57",
          speaker: "Meg Page",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a1_s2_c57_l1",
              original: "Quell'uom è un cannone,",
              literal: "That man is a cannon,",
              tokens: [
                {
                  word: "Quell'",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (elided)",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocope of uomo)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "cannone",
                  lemma: "cannone",
                  pos: "noun",
                  meaning: "cannon / piece of artillery",
                },
              ],
              grammarNote: "Meg sings in simultaneous counter-melody, comparing Falstaff's explosive, bulky persona to a heavy siege cannon.",
            },
            {
              id: "a1_s2_c57_l2",
              original: "se scoppia, ci spaccia.",
              literal: "if it explodes, it finishes us off.",
              tokens: [
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "scoppia",
                  lemma: "scoppiare",
                  pos: "verb",
                  meaning: "it explodes / bursts",
                },
                {
                  word: "ci",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "us (direct object clitic)",
                },
                {
                  word: "spaccia",
                  lemma: "spacciare",
                  pos: "verb",
                  meaning: "dispatches / finishes off / does for",
                },
              ],
              grammarNote: "'Spacciare' idiomatically means to finish off, kill, or ruin someone completely. If Falstaff explodes like a cannon, all around him are doomed.",
            },
            {
              id: "a1_s2_c57_l3",
              original: "Colui, se l'abbraccia,",
              literal: "That fellow, if he hugs her,",
              tokens: [
                {
                  word: "Colui",
                  lemma: "colui",
                  pos: "pronoun",
                  meaning: "that man / that fellow (pejorative demonstrative)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "l'abbraccia",
                  lemma: "abbracciare",
                  pos: "verb",
                  meaning: "embraces her / hugs her (elided la + abbraccia)",
                },
              ],
              grammarNote: "'Colui' conveys contemptuous dismissal ('that creature'). 'L'abbraccia' has the elided direct object pronoun 'la' referring to any prospective lover.",
            },
            {
              id: "a1_s2_c57_l4",
              original: "ti schiaccia Giunone.",
              literal: "crushes Juno for you.",
              tokens: [
                {
                  word: "ti",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "to you / for you (ethical dative)",
                },
                {
                  word: "schiaccia",
                  lemma: "schiacciare",
                  pos: "verb",
                  meaning: "crushes / squashes / flattens",
                },
                {
                  word: "Giunone",
                  lemma: "Giunone",
                  pos: "noun",
                  meaning: "Juno (queen of the gods, archetype of majestic womanhood)",
                },
              ],
              grammarNote: "Meg uses the ethical dative 'ti' to make the statement vivid. Juno, the majestic queen of Olympus, would be squashed flat under Falstaff's colossal embrace.",
            },
            {
              id: "a1_s2_c57_l5",
              original: "Vedrai che a un tuo cenno",
              literal: "You will see that at a nod of yours",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (future 2nd singular)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at",
                },
                {
                  word: "cenno",
                  lemma: "cenno",
                  pos: "noun",
                  meaning: "nod / sign / wave / gesture",
                },
              ],
              grammarNote: "'A un tuo cenno' means at Alice's slightest beck and call or gesture.",
            },
            {
              id: "a1_s2_c57_l6",
              original: "quel mostro si spappola",
              literal: "that monster turns to mush",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "mostro",
                  lemma: "mostro",
                  pos: "noun",
                  meaning: "monster",
                },
                {
                  word: "si spappola",
                  lemma: "spappolarsi",
                  pos: "verb",
                  meaning: "turns to mush / squashes into pulp / melts away",
                },
              ],
              grammarNote: "'Spappolarsi' is a vivid, visceral Italian verb meaning to disintegrate into pulp or mush (from 'pappa', soft food/mash).",
            },
            {
              id: "a1_s2_c57_l7",
              original: "e perde il suo senno",
              literal: "and loses his senses",
              tokens: [
                {
                  word: "perde",
                  lemma: "perdere",
                  pos: "verb",
                  meaning: "loses (3rd person singular present)",
                },
                {
                  word: "suo",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his",
                },
                {
                  word: "senno",
                  lemma: "senno",
                  pos: "noun",
                  meaning: "senses / judgment / wits",
                },
                {
                  word: "perdere il senno",
                  lemma: "perdere il senno",
                  pos: "idiom",
                  meaning: "to lose one's head / wits",
                },
              ],
              grammarNote: "'Perdere il senno' is the classic literary idiom for losing one's reason or sanity (echoing Orlando's madness in Ariosto).",
            },
            {
              id: "a1_s2_c57_l8",
              original: "e corre alla trappola.",
              literal: "and runs into the trap.",
              tokens: [
                {
                  word: "corre",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "runs (3rd person singular present)",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the / into the",
                },
                {
                  word: "trappola",
                  lemma: "trappola",
                  pos: "noun",
                  meaning: "trap / snare",
                },
              ],
              grammarNote: "Falstaff will rush headlong into the trap laid for him by the merry wives.",
            },
            {
              id: "a1_s2_c57_l9",
              original: "Potenza d'un fragile",
              literal: "Power of a frail",
              tokens: [
                {
                  word: "Potenza",
                  lemma: "potenza",
                  pos: "noun",
                  meaning: "power / potency / might",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of a",
                },
                {
                  word: "fragile",
                  lemma: "fragile",
                  pos: "adjective",
                  meaning: "fragile / frail / delicate",
                },
              ],
              grammarNote: "Meg meditates on the paradoxical power of female charm: how a fragile feminine smile can completely overpower a monstrous man.",
            },
            {
              id: "a1_s2_c57_l10",
              original: "sorriso di donna!",
              literal: "smile of a woman!",
              tokens: [
                {
                  word: "sorriso",
                  lemma: "sorriso",
                  pos: "noun",
                  meaning: "smile",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "donna",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "woman",
                },
              ],
              grammarNote: "Completes the phrase: 'Potenza d'un fragile sorriso di donna!' (The power of a woman's frail smile!).",
            },
            {
              id: "a1_s2_c57_l11",
              original: "Scïenza d'un'agile",
              literal: "Art of an agile",
              tokens: [
                {
                  word: "Scïenza",
                  lemma: "scienza",
                  pos: "noun",
                  meaning: "science / art / skill (with poetic diaeresis)",
                },
                {
                  word: "d'un'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of an",
                },
                {
                  word: "agile",
                  lemma: "agile",
                  pos: "adjective",
                  meaning: "agile / nimble / light",
                },
              ],
              grammarNote: "'Scïenza' has a poetic diaeresis (pronounced in three syllables: sci-en-za) to satisfy the settenario meter. It denotes tactical cunning or mastery.",
            },
            {
              id: "a1_s2_c57_l12",
              original: "movenza di gonna!",
              literal: "swish of a skirt!",
              tokens: [
                {
                  word: "movenza",
                  lemma: "movenza",
                  pos: "noun",
                  meaning: "movement / graceful motion / sway",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "gonna",
                  lemma: "gonna",
                  pos: "noun",
                  meaning: "skirt / petticoat",
                },
              ],
              grammarNote: "'Movenza di gonna' evokes the tantalizing, flirtatious rustle and movement of a woman's dress.",
            },
            {
              id: "a1_s2_c57_l13",
              original: "Se il vischio lo impegola",
              literal: "If birdlime ensnares him",
              tokens: [
                {
                  word: "vischio",
                  lemma: "vischio",
                  pos: "noun",
                  meaning: "birdlime / mistletoe / sticky snare",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "impegola",
                  lemma: "impegolare",
                  pos: "verb",
                  meaning: "tars / entangles / traps (3rd person singular present)",
                },
              ],
              grammarNote: "Metaphor drawn from fowling: 'vischio' (sticky birdlime) and 'impegolare' (to smear with pitch/tar, trapping a bird so it cannot fly away).",
            },
            {
              id: "a1_s2_c57_l14",
              original: "lo udremo strillar.",
              literal: "we shall hear him squeal.",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "udremo",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "we shall hear (future 1st person plural)",
                },
                {
                  word: "strillar",
                  lemma: "strillare",
                  pos: "verb",
                  meaning: "to shriek / squawk / squeal (apocope of strillare)",
                },
              ],
              grammarNote: "Acoustic imagery of Falstaff squealing like a trapped beast or stuck pig when caught in the wives' trap. Truncated infinitive 'strillar' for rhyme.",
            },
            {
              id: "a1_s2_c57_l15",
              original: "E allor la sua fregola",
              literal: "And then his lustful frenzy",
              tokens: [
                {
                  word: "allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then / at that time (apocope of allora)",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive)",
                },
                {
                  word: "fregola",
                  lemma: "fregola",
                  pos: "noun",
                  meaning: "heat / rut / lustful itch / frantic desire",
                },
              ],
              grammarNote: "'Fregola' denotes the spawning rut or heat of animals/fish, used derisively here for Falstaff's ridiculous, feverish amorous appetite. Enjambs into the next line ('vedremo svampar').",
            },
            {
              id: "a1_s2_c57_l16",
              original: "vedremo svampar.",
              literal: "we shall see vanish into smoke.",
              tokens: [
                {
                  word: "vedremo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "we shall see (1st person plural future)",
                },
                {
                  word: "svampar",
                  lemma: "svampare",
                  pos: "verb",
                  meaning: "to vanish into smoke / evaporate / flare up",
                },
              ],
              grammarNote: "Meg concludes the women's ensemble from the previous strophe: '[e il suo fumo] vedremo svampar' ('[and his pride/smoke] we shall see vanish in smoke'). 'Svampar' is an apocopic infinitive of 'svampare' (to evaporate, flare up, or go up in smoke).",
            },
          ],
        },
        {
          id: "a1_s2_c58",
          speaker: "Nannetta",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a1_s2_c58_l1",
              original: "Se ordisci una burla,",
              literal: "If you plot a prank,",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "ordisci",
                  lemma: "ordire",
                  pos: "verb",
                  meaning: "you weave / you plot (2nd person singular present)",
                },
                {
                  word: "burla",
                  lemma: "burla",
                  pos: "noun",
                  meaning: "prank / practical joke / trick",
                },
              ],
              grammarNote: "Nannetta eagerly chimes in to join her mother Alice's scheme. 'Ordisci' (from 'ordire', literally to warp a loom, metaphorically to hatch or plot an intrigue) introduces the conditional clause.",
            },
            {
              id: "a1_s2_c58_l2",
              original: "vo' anch'io la mia parte.",
              literal: "I too want my share.",
              tokens: [
                {
                  word: "vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (apocope of 'voglio')",
                },
                {
                  word: "anch'io",
                  lemma: "anch'io",
                  pos: "pronoun",
                  meaning: "I too / I as well",
                },
                {
                  word: "parte",
                  lemma: "parte",
                  pos: "noun",
                  meaning: "part / share / role",
                },
              ],
              grammarNote: "'Vo'' is the poetic apocopic form of 'voglio' (first-person singular of 'volere'). 'Anch'io' is the elision of 'anche io'. Italian determiner syntax: 'la mia parte' = 'my share'.",
            },
            {
              id: "a1_s2_c58_l3",
              original: "Conviene condurla",
              literal: "It is necessary to conduct it",
              tokens: [
                {
                  word: "Conviene",
                  lemma: "convenire",
                  pos: "verb",
                  meaning: "it is necessary / it is fitting (impersonal)",
                },
                {
                  word: "condurla",
                  lemma: "condurre",
                  pos: "verb",
                  meaning: "to conduct it / carry it out (condurre + clitic la)",
                },
                {
                  word: "la",
                  lemma: "la",
                  pos: "pronoun",
                  meaning: "it (direct object clitic referring to 'la burla')",
                },
              ],
              grammarNote: "Impersonal 'conviene' ('it is fitting/necessary') governs the infinitive 'condurre' combined with the enclitic direct object pronoun 'la' referring back to 'la burla' (the prank).",
            },
            {
              id: "a1_s2_c58_l4",
              original: "con senno e con arte.",
              literal: "with sense and with skill.",
              tokens: [
                {
                  word: "senno",
                  lemma: "senno",
                  pos: "noun",
                  meaning: "sense / good judgment / wisdom",
                },
                {
                  word: "arte",
                  lemma: "arte",
                  pos: "noun",
                  meaning: "art / craft / skill / cunning",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
              ],
              grammarNote: "Nannetta warns that their practical joke must be engineered with intelligence ('senno') and theatrical craftsmanship ('arte') so Falstaff will not suspect a thing.",
            },
            {
              id: "a1_s2_c58_l5",
              original: "L'agguato ov'ei sdrucciola",
              literal: "The trap wherein he slips",
              tokens: [
                {
                  word: "agguato",
                  lemma: "agguato",
                  pos: "noun",
                  meaning: "ambush / trap / snare",
                },
                {
                  word: "ov'ei",
                  lemma: "ove",
                  pos: "adverb",
                  meaning: "where he / wherein he (ove + ei)",
                },
                {
                  word: "sdrucciola",
                  lemma: "sdrucciolare",
                  pos: "verb",
                  meaning: "slips / slides / stumbles (3rd person singular present)",
                },
              ],
              grammarNote: "'Ov'ei' combines the literary relative adverb 'ove' ('where') with the archaic subject pronoun 'ei' ('he'). 'Sdrucciola' (from 'sdrucciolare', to slip or slide) provides a playful dactylic (sdrucciolo) cadence.",
            },
            {
              id: "a1_s2_c58_l6",
              original: "convien ch'ei non scerna.",
              literal: "it is necessary that he not perceive.",
              tokens: [
                {
                  word: "convien",
                  lemma: "convenire",
                  pos: "verb",
                  meaning: "it is necessary / it behoves (apocope of 'conviene')",
                },
                {
                  word: "ch'ei",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that he (che + ei)",
                },
                {
                  word: "scerna",
                  lemma: "scernere",
                  pos: "verb",
                  meaning: "discern / perceive / see through (3rd person present subjunctive)",
                },
              ],
              grammarNote: "'Convien' is the apocopic form of 'conviene', governing the present subjunctive 'scerna' (from 'scernere', an elevated verb meaning to discern or see through a trick).",
            },
            {
              id: "a1_s2_c58_l7",
              original: "Già prese una lucciola",
              literal: "Already he took a firefly",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "prese",
                  lemma: "prendere",
                  pos: "verb",
                  meaning: "he took (passato remoto 3rd person singular)",
                },
                {
                  word: "lucciola",
                  lemma: "lucciola",
                  pos: "noun",
                  meaning: "firefly / glow-worm",
                },
              ],
              grammarNote: "Beginning of the quintessential Italian idiom 'prendere una lucciola per una lanterna' (to mistake a firefly for a lantern, i.e. to be thoroughly deceived or commit a huge blunder).",
            },
            {
              id: "a1_s2_c58_l8",
              original: "per una lanterna.",
              literal: "for a lantern.",
              tokens: [
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for / in place of",
                },
                {
                  word: "lanterna",
                  lemma: "lanterna",
                  pos: "noun",
                  meaning: "lantern / lamp",
                },
                {
                  word: "una",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "a / an (indefinite article)",
                },
              ],
              grammarNote: "Completes the idiom 'prendere lucciole per lanterne'. Nannetta points out that Falstaff has already made a fool of himself by mistaking common courtesy for amorous passion.",
            },
            {
              id: "a1_s2_c58_l9",
              original: "Perciò non dubito",
              literal: "Therefore I do not doubt",
              tokens: [
                {
                  word: "Perciò",
                  lemma: "perciò",
                  pos: "adverb",
                  meaning: "therefore / for that reason",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "dubito",
                  lemma: "dubitare",
                  pos: "verb",
                  meaning: "I doubt (1st person singular present)",
                },
              ],
              grammarNote: "Nannetta expresses complete confidence: because Falstaff is so vain and gullible, their scheme is guaranteed to work. 'Dubito' forms a proparoxytone (sdrucciolo) rhyme with 'subito'.",
            },
            {
              id: "a1_s2_c58_l10",
              original: "che il gioco rïesca.",
              literal: "that the game will succeed.",
              tokens: [
                {
                  word: "gioco",
                  lemma: "gioco",
                  pos: "noun",
                  meaning: "game / trick / scheme",
                },
                {
                  word: "rïesca",
                  lemma: "riuscire",
                  pos: "verb",
                  meaning: "may succeed (3rd person singular present subjunctive)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
              ],
              grammarNote: "'Rïesca' (from 'riuscire', to succeed) has a poetic diaeresis on the 'ï' to count as two separate syllables (rï-es-ca) in Boito's metrical verse.",
            },
            {
              id: "a1_s2_c58_l11",
              original: "Bisogna offrir l'esca,",
              literal: "We must offer the bait,",
              tokens: [
                {
                  word: "Bisogna",
                  lemma: "bisognare",
                  pos: "verb",
                  meaning: "it is necessary / one must (impersonal)",
                },
                {
                  word: "offrir",
                  lemma: "offrire",
                  pos: "verb",
                  meaning: "to offer (apocope of 'offrire')",
                },
                {
                  word: "esca",
                  lemma: "esca",
                  pos: "noun",
                  meaning: "bait / lure / enticement",
                },
              ],
              grammarNote: "'Bisogna offrir l'esca' uses fishing/hunting imagery: they must set an alluring trap (Mrs. Quickly's secret message) to lure Falstaff in.",
            },
            {
              id: "a1_s2_c58_l12",
              original: "poi coglierlo subito.",
              literal: "then catch him immediately.",
              tokens: [
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "coglierlo",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "to catch him / seize him (cogliere + clitic lo)",
                },
                {
                  word: "subito",
                  lemma: "subito",
                  pos: "adverb",
                  meaning: "immediately / at once",
                },
              ],
              grammarNote: "'Coglierlo' combines 'cogliere' (to catch, snare, surprise) with enclitic direct object pronoun 'lo' (him). 'Subito' completes the sdrucciolo rhyme with 'dubito'.",
            },
            {
              id: "a1_s2_c58_l13",
              original: "E se i scillinguagnoli",
              literal: "And if our tongues",
              tokens: [
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "scillinguagnoli",
                  lemma: "scilinguagnolo",
                  pos: "noun",
                  meaning: "tongue-strings / loosened tongues / gift of the gab",
                },
                {
                  word: "i",
                  lemma: "il",
                  pos: "adjective",
                  meaning: "the (masculine plural article)",
                },
              ],
              grammarNote: "'Scilinguagnolo' (here spelled 'scillinguagnoli') is the frenulum of the tongue, famous in the Italian idiom 'sciogliere lo scilinguagnolo' (to loosen one's tongue, chatter nonstop). Note the archaic/poetic article 'i' instead of 'gli'.",
            },
            {
              id: "a1_s2_c58_l14",
              original: "sapremo adoprar,",
              literal: "we know how to use,",
              tokens: [
                {
                  word: "sapremo",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "we will know how (1st person plural future)",
                },
                {
                  word: "adoprar",
                  lemma: "adoperare",
                  pos: "verb",
                  meaning: "to use / employ (apocope of 'adoperare')",
                },
              ],
              grammarNote: "'Sapremo adoprar' (future of 'sapere' expressing capability/know-how + apocopated infinitive of 'adoperare'). Rhymes with 'adoprar' / 'sudar'.",
            },
            {
              id: "a1_s2_c58_l15",
              original: "vedremo a rigagnoli",
              literal: "we shall see in rivulets",
              tokens: [
                {
                  word: "vedremo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "we shall see (1st person plural future)",
                },
                {
                  word: "rigagnoli",
                  lemma: "rigagnolo",
                  pos: "noun",
                  meaning: "rivulets / trickles / streams",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "in / in the manner of",
                },
              ],
              grammarNote: "'A rigagnoli' is an adverbial locution meaning 'in streams or trickles'. Sdrucciolo rhyme with 'scillinguagnoli'.",
            },
            {
              id: "a1_s2_c58_l16",
              original: "quell'orco sudar.",
              literal: "that ogre sweat.",
              tokens: [
                {
                  word: "quell'",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "orco",
                  lemma: "orco",
                  pos: "noun",
                  meaning: "ogre / monster / beast",
                },
                {
                  word: "sudar",
                  lemma: "sudare",
                  pos: "verb",
                  meaning: "to sweat (apocopic infinitive)",
                },
              ],
              grammarNote: "Accusative with infinitive dependent on 'vedremo': 'vedremo quell'orco sudar' ('we shall see that ogre sweat'). Nannetta playfully brands the corpulent Falstaff an 'orco' (ogre).",
            },
          ],
        },
        {
          id: "a1_s2_c59",
          speaker: "Mrs. Quickly",
          stageDirection: "ora ad Alice, ora a Nannetta, ora a Meg",
          stageDirectionTranslation: "ora to Alice, ora to Nannetta, ora to Meg",
          lines: [
            {
              id: "a1_s2_c59_l1",
              original: "Un flutto in tempesta",
              literal: "A wave in a storm",
              tokens: [
                {
                  word: "flutto",
                  lemma: "flutto",
                  pos: "noun",
                  meaning: "wave / surge / billow",
                },
                {
                  word: "tempesta",
                  lemma: "tempesta",
                  pos: "noun",
                  meaning: "storm / tempest",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
              ],
              grammarNote: "Mrs. Quickly launches into a comical mock-heroic maritime metaphor describing Falstaff as a beached sea monster.",
            },
            {
              id: "a1_s2_c59_l2",
              original: "gittò sulla rena",
              literal: "cast upon the sand",
              tokens: [
                {
                  word: "gittò",
                  lemma: "gittare",
                  pos: "verb",
                  meaning: "cast / threw / flung (passato remoto 3rd person singular)",
                },
                {
                  word: "sulla",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the / onto the (su + la)",
                },
                {
                  word: "rena",
                  lemma: "rena",
                  pos: "noun",
                  meaning: "sand / shore (Tuscan/poetic for sabbia)",
                },
              ],
              grammarNote: "'Gittò' is the archaic/poetic variant of 'gettò' (cast, hurled). 'Rena' (from Latin 'arena') is classic Tuscan and poetic Italian for beach sand.",
            },
            {
              id: "a1_s2_c59_l3",
              original: "di Windsor codesta",
              literal: "of Windsor this",
              tokens: [
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "Windsor",
                  lemma: "Windsor",
                  pos: "noun",
                  meaning: "Windsor (proper noun)",
                },
                {
                  word: "codesta",
                  lemma: "codesto",
                  pos: "adjective",
                  meaning: "this / that near you (demonstrative adjective)",
                },
              ],
              grammarNote: "'Codesta' is the specific Tuscan demonstrative adjective designating something near the addressee, modifying 'vorace balena' in the following line.",
            },
            {
              id: "a1_s2_c59_l4",
              original: "vorace balena.",
              literal: "voracious whale.",
              tokens: [
                {
                  word: "vorace",
                  lemma: "vorace",
                  pos: "adjective",
                  meaning: "voracious / gluttonous / rapacious",
                },
                {
                  word: "balena",
                  lemma: "balena",
                  pos: "noun",
                  meaning: "whale",
                },
              ],
              grammarNote: "Completes Quickly's comic marine imagery: Falstaff is a ravenous whale ('vorace balena') stranded on the sandy shores of Windsor.",
            },
            {
              id: "a1_s2_c59_l5",
              original: "Ma qui non ha spazio",
              literal: "But here he has no room",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "spazio",
                  lemma: "spazio",
                  pos: "noun",
                  meaning: "space / room",
                },
                {
                  word: "ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has (3rd person singular present)",
                },
              ],
              grammarNote: "'Non ha spazio' (he has no room). Mrs. Quickly notes that Windsor provides no room for Falstaff to expand his girth or indulge his gluttony.",
            },
            {
              id: "a1_s2_c59_l6",
              original: "da farsi più pingue;",
              literal: "to make himself fatter;",
              tokens: [
                {
                  word: "farsi",
                  lemma: "farsi",
                  pos: "verb",
                  meaning: "to make oneself / become (fare + reflexive si)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
                {
                  word: "pingue",
                  lemma: "pingue",
                  pos: "adjective",
                  meaning: "fat / stout / obese (Latinate pinguis)",
                },
              ],
              grammarNote: "Purpose infinitive clause 'da farsi' ('to make himself'). 'Pingue' is a Latinate, high-register poetic adjective for fat/fleshy, used with comic irony.",
            },
            {
              id: "a1_s2_c59_l7",
              original: "ne fecer già strazio",
              literal: "already tore him to pieces",
              tokens: [
                {
                  word: "ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "of him / of it (pronominal clitic)",
                },
                {
                  word: "fecer",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "they made (apocope of 'fecero', passato remoto)",
                },
                {
                  word: "strazio",
                  lemma: "strazio",
                  pos: "noun",
                  meaning: "havoc / slaughter / carnage",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
              ],
              grammarNote: "'Fare strazio di' is an idiom meaning to butcher, tear apart, or make mincemeat of. 'Fecer' is the poetic apocope of 'fecero', and 'ne' refers back to Falstaff.",
            },
            {
              id: "a1_s2_c59_l8",
              original: "le vostre tre lingue.",
              literal: "your three tongues.",
              tokens: [
                {
                  word: "vostre",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your (plural possessive adjective)",
                },
                {
                  word: "tre",
                  lemma: "tre",
                  pos: "adjective",
                  meaning: "three",
                },
                {
                  word: "lingue",
                  lemma: "lingua",
                  pos: "noun",
                  meaning: "tongues",
                },
              ],
              grammarNote: "The subject of 'fecer già strazio': the sharp, articulate tongues of the Windsor women. Italian determiner syntax: 'le vostre tre lingue'.",
            },
            {
              id: "a1_s2_c59_l9",
              original: "Tre lingue più allegre",
              literal: "Three tongues merrier",
              tokens: [
                {
                  word: "Tre",
                  lemma: "tre",
                  pos: "adjective",
                  meaning: "three",
                },
                {
                  word: "lingue",
                  lemma: "lingua",
                  pos: "noun",
                  meaning: "tongues",
                },
                {
                  word: "allegre",
                  lemma: "allegro",
                  pos: "adjective",
                  meaning: "merry / cheerful / lively",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more",
                },
              ],
              grammarNote: "Quickly compliments the women's razor-sharp banter with musical and ornithological similes ('più allegre d'un trillo di nacchere').",
            },
            {
              id: "a1_s2_c59_l10",
              original: "d'un trillo di nacchere,",
              literal: "than a rattle of castanets,",
              tokens: [
                {
                  word: "trillo",
                  lemma: "trillo",
                  pos: "noun",
                  meaning: "trill / rattling chime",
                },
                {
                  word: "nacchere",
                  lemma: "nacchera",
                  pos: "noun",
                  meaning: "castanets",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "than a / of a (di + un)",
                },
              ],
              grammarNote: "'Nacchere' are castanets; 'un trillo di nacchere' evokes rapid rhythmic clicking, comparing their chattering speed to percussive castanets.",
            },
            {
              id: "a1_s2_c59_l11",
              original: "che spargon più chiacchiere",
              literal: "that scatter more chatter",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (relative pronoun)",
                },
                {
                  word: "spargon",
                  lemma: "spargere",
                  pos: "verb",
                  meaning: "scatter / spread (apocope of 'spargono')",
                },
                {
                  word: "chiacchiere",
                  lemma: "chiacchiera",
                  pos: "noun",
                  meaning: "chatter / gossip / prattle",
                },
              ],
              grammarNote: "'Spargon' is the apocopic 3rd person plural present of 'spargere' (to scatter, broadcast). 'Chiacchiere' means playful chatter or gossip.",
            },
            {
              id: "a1_s2_c59_l12",
              original: "di sei cingallegre.",
              literal: "than six titmice.",
              tokens: [
                {
                  word: "sei",
                  lemma: "sei",
                  pos: "adjective",
                  meaning: "six",
                },
                {
                  word: "cingallegre",
                  lemma: "cinciallegra",
                  pos: "noun",
                  meaning: "titmice / chickadees (variant of cinciallegre)",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "than (comparative preposition)",
                },
              ],
              grammarNote: "'Cingallegre' is Boito's dialectal/archaic variant of 'cinciallegre' (great tits / chickadees), known for their tireless chirping. Creates a triple sdrucciolo rhyme with 'nacchere' and 'chiacchiere'.",
            },
            {
              id: "a1_s2_c59_l13",
              original: "Tal sempre s'esilari",
              literal: "Thus may always rejoice",
              tokens: [
                {
                  word: "Tal",
                  lemma: "tale",
                  pos: "adjective",
                  meaning: "such / so / in such manner (apocope of tale)",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
                {
                  word: "s'esilari",
                  lemma: "esilararsi",
                  pos: "verb",
                  meaning: "may cheer / gladden itself (present subjunctive 3rd person)",
                },
              ],
              grammarNote: "Optative subjunctive 's'esilari' (from 'esilarare/esilararsi', to cheer up, exhilarate). 'Tal' (apocope of 'tale') acts adverbially ('thus / in such a manner').",
            },
            {
              id: "a1_s2_c59_l14",
              original: "quel bel cinguettar.",
              literal: "that lovely chirping.",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative)",
                },
                {
                  word: "bel",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "lovely / beautiful / fine (apocope of bello)",
                },
                {
                  word: "cinguettar",
                  lemma: "cinguettare",
                  pos: "noun",
                  meaning: "chirping / twittering (substantivized infinitive)",
                },
              ],
              grammarNote: "'Cinguettar' is the substantivized apocopic infinitive of 'cinguettare' (to chirp like birds, to twitter, to chat amiably). Subject of 's'esilari'.",
            },
            {
              id: "a1_s2_c59_l15",
              original: "Così soglion l'ilari",
              literal: "Thus are wont the cheerful",
              tokens: [
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "thus / so",
                },
                {
                  word: "soglion",
                  lemma: "solere",
                  pos: "verb",
                  meaning: "are accustomed / are wont (apocope of 'sogliono')",
                },
                {
                  word: "l'ilari",
                  lemma: "ilare",
                  pos: "adjective",
                  meaning: "the cheerful / the merry (plural adjective with elided article)",
                },
              ],
              grammarNote: "'Soglion' is the apocopic 3rd person plural of 'solere' (to be accustomed / wont to). 'L'ilari' modifies 'comari' in the next line, echoing Shakespeare's title 'The Merry Wives'.",
            },
            {
              id: "a1_s2_c59_l16",
              original: "comari ciarlar.",
              literal: "wives to chatter.",
              tokens: [
                {
                  word: "comari",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "wives / gossips / neighbors",
                },
                {
                  word: "ciarlar",
                  lemma: "ciarlare",
                  pos: "verb",
                  meaning: "to chatter / to prattle (apocopic infinitive)",
                },
              ],
              grammarNote: "'Comari' translates Shakespeare's 'gossips' or 'merry wives'. 'Ciarlar' is an apocopic infinitive dependent on 'soglion': 'Così soglion l'ilari comari ciarlar' ('Thus are the merry wives wont to chatter').",
            },
          ],
        },
        {
          id: "a1_s2_c60",
          speaker: "Mrs. Quickly",
          stageDirection: "s'allontanano",
          stageDirectionTranslation: "they move away",
          lines: [
            {
              id: "a1_s2_c60_l1",
              original: "Mr. Ford, Dr. Cajus, Fenton, Bardolfo, Pistola entrano da destra,",
              literal: "Mr. Ford, Dr. Caius, Fenton, Bardolfo, Pistol enter from the right,",
              tokens: [
                {
                  word: "entrano",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "they enter (3rd person plural present)",
                },
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right / stage right",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from",
                },
              ],
              grammarNote: "Stage direction indicating the entrance of the male faction from stage right as the women withdraw.",
            },
            {
              id: "a1_s2_c60_l2",
              original: "mentre le Donne escono da sinistra.",
              literal: "while the Women exit from the left.",
              tokens: [
                {
                  word: "mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / whilst",
                },
                {
                  word: "Donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
                {
                  word: "escono",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "they exit / go out (3rd person plural present)",
                },
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left / stage left",
                },
              ],
              grammarNote: "Stage direction: the women exit stage left, maintaining the strict comic dichotomy between the two simultaneous conspiracies against Falstaff.",
            },
            {
              id: "a1_s2_c60_l3",
              original: "Ford nel centro, Pistola al suo fianco destro,",
              literal: "Ford in the center, Pistol at his right side,",
              tokens: [
                {
                  word: "centro",
                  lemma: "centro",
                  pos: "noun",
                  meaning: "center",
                },
                {
                  word: "fianco",
                  lemma: "fianco",
                  pos: "noun",
                  meaning: "side / flank",
                },
                {
                  word: "destro",
                  lemma: "destro",
                  pos: "adjective",
                  meaning: "right",
                },
              ],
              grammarNote: "Stage direction specifying scenic blocking: Ford stands center stage, flanked on either side by Falstaff's treacherous former henchmen.",
            },
            {
              id: "a1_s2_c60_l4",
              original: "Bardolfo al suo fianco sinistro, Fenton e il Dr. Cajus dietro Ford.",
              literal: "Bardolfo at his left side, Fenton and Dr. Caius behind Ford.",
              tokens: [
                {
                  word: "fianco",
                  lemma: "fianco",
                  pos: "noun",
                  meaning: "side / flank",
                },
                {
                  word: "sinistro",
                  lemma: "sinistro",
                  pos: "adjective",
                  meaning: "left",
                },
                {
                  word: "dietro",
                  lemma: "dietro",
                  pos: "preposition",
                  meaning: "behind",
                },
              ],
              grammarNote: "Stage direction detailing the menacing physical encirclement of Ford by the agitators, each trying to whisper in his ear.",
            },
            {
              id: "a1_s2_c60_l5",
              original: "Tutti in gruppo parlando a Ford a bassa voce e brontolando.",
              literal: "All in a group speaking to Ford in a low voice and grumbling.",
              tokens: [
                {
                  word: "parlando",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "speaking / talking (gerund)",
                },
                {
                  word: "a bassa voce",
                  lemma: "a bassa voce",
                  pos: "idiom",
                  meaning: "in a low voice / in an undertone",
                },
                {
                  word: "brontolando",
                  lemma: "brontolare",
                  pos: "verb",
                  meaning: "grumbling / muttering (gerund)",
                },
              ],
              grammarNote: "Stage direction establishing the conspiratorial, buzzing vocal texture of the male ensemble, whispering darkly to inflame Ford's jealousy.",
            },
            {
              id: "a1_s2_c60_l6",
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
          id: "a1_s2_c61",
          speaker: "Dr. Caius",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c61_l1",
              original: "È un ribaldo, un furbo, un ladro,",
              literal: "He is a rogue, a trickster, a thief,",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "he is (3rd person singular present)",
                },
                {
                  word: "ribaldo",
                  lemma: "ribaldo",
                  pos: "noun",
                  meaning: "rogue / scoundrel / ruffian",
                },
                {
                  word: "furbo",
                  lemma: "furbo",
                  pos: "noun",
                  meaning: "trickster / sly dog / cunning cheat",
                },
                {
                  word: "ladro",
                  lemma: "ladro",
                  pos: "noun",
                  meaning: "thief / robber",
                },
              ],
              grammarNote: "Dr. Caius bursts out with his catalog of epithets against Falstaff, resuming his violent indignation from Act 1 Scene 1.",
            },
            {
              id: "a1_s2_c61_l2",
              original: "un furfante, un turco, un vandalo;",
              literal: "a scoundrel, a Turk, a vandal;",
              tokens: [
                {
                  word: "furfante",
                  lemma: "furfante",
                  pos: "noun",
                  meaning: "scoundrel / knave / villain",
                },
                {
                  word: "turco",
                  lemma: "turco",
                  pos: "noun",
                  meaning: "Turk / brute / barbarian",
                },
                {
                  word: "vandalo",
                  lemma: "vandalo",
                  pos: "noun",
                  meaning: "vandal / destroyer / barbarian",
                },
              ],
              grammarNote: "In traditional Italian idiom, 'un turco' or 'un vandalo' designates an unprincipled brute devoid of civility or pity. Sdrucciolo rhyme with 'scandalo'.",
            },
            {
              id: "a1_s2_c61_l3",
              original: "l'altro dì mandò a soqquadro",
              literal: "the other day he threw into turmoil",
              tokens: [
                {
                  word: "altro",
                  lemma: "altro",
                  pos: "adjective",
                  meaning: "other",
                },
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day (poetic/archaic for giorno)",
                },
                {
                  word: "mandò a soqquadro",
                  lemma: "mandare a soqquadro",
                  pos: "idiom",
                  meaning: "threw into turmoil / turned upside down / ransacked",
                },
                {
                  word: "soqquadro",
                  lemma: "soqquadro",
                  pos: "noun",
                  meaning: "turmoil / chaos / disarray",
                },
              ],
              grammarNote: "'L'altro dì' means 'the other day'. The idiom 'mandare a soqquadro' means to turn completely upside down, ransack, or wreak chaos upon.",
            },
            {
              id: "a1_s2_c61_l4",
              original: "la mia casa e fu uno scandalo.",
              literal: "my house and it was a scandal.",
              tokens: [
                {
                  word: "casa",
                  lemma: "casa",
                  pos: "noun",
                  meaning: "house / home",
                },
                {
                  word: "fu",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "it was (passato remoto 3rd person singular)",
                },
                {
                  word: "scandalo",
                  lemma: "scandalo",
                  pos: "noun",
                  meaning: "scandal / outrage",
                },
              ],
              grammarNote: "Caius reminds Ford of Falstaff's violent break-in at his home. 'Scandalo' completes the sdrucciolo rhyme with 'vandalo'.",
            },
            {
              id: "a1_s2_c61_l5",
              original: "Se un processo oggi gl'intavolo",
              literal: "If a lawsuit today I initiate against him",
              tokens: [
                {
                  word: "processo",
                  lemma: "processo",
                  pos: "noun",
                  meaning: "trial / lawsuit / prosecution",
                },
                {
                  word: "intavolo",
                  lemma: "intavolare",
                  pos: "verb",
                  meaning: "I initiate / table / set in motion (1st person singular present)",
                },
                {
                  word: "gl'",
                  lemma: "gli",
                  pos: "pronoun",
                  meaning: "against him / to him (dative clitic gli elided)",
                },
                {
                  word: "oggi",
                  lemma: "oggi",
                  pos: "adverb",
                  meaning: "today",
                },
              ],
              grammarNote: "'Intavolare un processo' is an Italian legal idiom meaning to institute legal proceedings or file formal charges. 'Gl'' is the elided dative pronoun 'gli'.",
            },
            {
              id: "a1_s2_c61_l6",
              original: "sconterà le sue rapine.",
              literal: "he will pay for his robberies.",
              tokens: [
                {
                  word: "sconterà",
                  lemma: "scontare",
                  pos: "verb",
                  meaning: "he will pay for / expiate / serve time for (3rd person singular future)",
                },
                {
                  word: "sue",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive adjective)",
                },
                {
                  word: "rapine",
                  lemma: "rapina",
                  pos: "noun",
                  meaning: "robberies / plunderings / thefts",
                },
              ],
              grammarNote: "'Scontare' means to expiate, serve a sentence, or pay the penalty for a crime. Italian determiner syntax: 'le sue rapine' = 'his robberies'.",
            },
            {
              id: "a1_s2_c61_l7",
              original: "Ma la sua più degna fine",
              literal: "But his most worthy end",
              tokens: [
                {
                  word: "degna",
                  lemma: "degno",
                  pos: "adjective",
                  meaning: "worthy / fitting / deserved",
                },
                {
                  word: "fine",
                  lemma: "fine",
                  pos: "noun",
                  meaning: "end / fate / demise",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive adjective)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "most / more",
                },
              ],
              grammarNote: "Relative superlative 'la sua più degna fine' ('his most deserved end'). Caius moves from legal justice to apocalyptic damnation.",
            },
            {
              id: "a1_s2_c61_l8",
              original: "sia d'andare in man del diavolo.",
              literal: "may be to go into the hands of the devil.",
              tokens: [
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "may it be / let it be (present subjunctive 3rd person singular)",
                },
                {
                  word: "man",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hands / clutches (apocope of mano)",
                },
                {
                  word: "diavolo",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil",
                },
                {
                  word: "andare",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "to go",
                },
              ],
              grammarNote: "Subjunctive of imprecation: 'sia d'andare in man del diavolo' ('let it be to fall into the clutches of the devil'). 'Man' is the apocopic form of 'mano'.",
            },
            {
              id: "a1_s2_c61_l9",
              original: "E quei due che avete accanto",
              literal: "And those two whom you have beside you",
              tokens: [
                {
                  word: "quei",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "those (demonstrative adjective)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "noun",
                  meaning: "two",
                },
                {
                  word: "avete",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "you have (2nd person plural present)",
                },
                {
                  word: "accanto",
                  lemma: "accanto",
                  pos: "adverb",
                  meaning: "beside / at your side",
                },
              ],
              grammarNote: "Caius points suspicion directly at Bardolfo and Pistola, warning Ford that they are just as untrustworthy as Falstaff.",
            },
            {
              id: "a1_s2_c61_l10",
              original: "gente sono di sua tribù,",
              literal: "are people of his tribe,",
              tokens: [
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / folk",
                },
                {
                  word: "sono",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they are (3rd person plural present)",
                },
                {
                  word: "tribù",
                  lemma: "tribù",
                  pos: "noun",
                  meaning: "tribe / clan / pack",
                },
              ],
              grammarNote: "Inverted syntax: '[essi] gente sono di sua tribù' ('they are people of his pack'). 'Tribù' is used pejoratively to denote Falstaff's criminal retinue.",
            },
            {
              id: "a1_s2_c61_l11",
              original: "non son due stinchi di santo",
              literal: "they are not two shins of a saint",
              tokens: [
                {
                  word: "non son due stinchi di santo",
                  lemma: "non essere uno stinco di santo",
                  pos: "idiom",
                  meaning: "to be no saints / to be far from virtuous",
                },
                {
                  word: "stinchi",
                  lemma: "stinco",
                  pos: "noun",
                  meaning: "shins / bone relics",
                },
                {
                  word: "santo",
                  lemma: "santo",
                  pos: "noun",
                  meaning: "saint",
                },
                {
                  word: "son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they are (apocope of sono)",
                },
              ],
              grammarNote: "Classic Italian idiom: 'non essere uno stinco di santo' (to be no saint / no angel). Derives from venerating saints' shinbones as sacred relics; applied here with barbed comedy to the two rogues.",
            },
            {
              id: "a1_s2_c61_l12",
              original: "né due fiori di virtù.",
              literal: "nor two flowers of virtue.",
              tokens: [
                {
                  word: "né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "nor / neither",
                },
                {
                  word: "fiori",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flowers / blossoms / paragons",
                },
                {
                  word: "virtù",
                  lemma: "virtù",
                  pos: "noun",
                  meaning: "virtue",
                },
              ],
              grammarNote: "Parallel metaphorical idiom: 'non essere un fiore di virtù' (to be far from a paragon of virtue), reinforcing Caius's contempt for Bardolfo and Pistola.",
            },
          ],
        },
        {
          id: "a1_s2_c62",
          speaker: "Bardolfo",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c62_l1",
              original: "Falstaff, sì ripeto, giuro,",
              literal: "Falstaff, yes I repeat, I swear,",
              tokens: [
                {
                  word: "ripeto",
                  lemma: "ripetere",
                  pos: "verb",
                  meaning: "I repeat (1st person singular present)",
                },
                {
                  word: "giuro",
                  lemma: "giurare",
                  pos: "verb",
                  meaning: "I swear (1st person singular present)",
                },
                {
                  word: "sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes / indeed",
                },
              ],
              grammarNote: "Bardolfo talks over Dr. Caius, swearing emphatically with 'ripeto, giuro' to convince Ford that his betrayal of Falstaff is motivated by genuine goodwill.",
            },
          ],
        },
        {
          id: "a1_s2_c63",
          speaker: "Bardolfo",
          stageDirection: "per mia bocca il ciel v'illumina",
          stageDirectionTranslation: "through my mouth heaven enlightens you",
          lines: [
            {
              id: "a1_s2_c63_l1",
              original: "contro voi, John Falstaff rumina",
              literal: "against you, John Falstaff ruminates",
              tokens: [
                {
                  word: "contro",
                  lemma: "contro",
                  pos: "preposition",
                  meaning: "against",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (formal/plural pronoun)",
                },
                {
                  word: "rumina",
                  lemma: "ruminare",
                  pos: "verb",
                  meaning: "ruminates / broods over / meditates (3rd person singular present)",
                },
              ],
              grammarNote: "'Ruminare' literally means to chew the cud; metaphorically it means to hatch, brood over, or chew on a sinister scheme.",
            },
            {
              id: "a1_s2_c63_l2",
              original: "un progetto alquanto impuro.",
              literal: "a rather impure design.",
              tokens: [
                {
                  word: "progetto",
                  lemma: "progetto",
                  pos: "noun",
                  meaning: "project / plan / design",
                },
                {
                  word: "alquanto",
                  lemma: "alquanto",
                  pos: "adverb",
                  meaning: "rather / somewhat / considerably",
                },
                {
                  word: "impuro",
                  lemma: "impuro",
                  pos: "adjective",
                  meaning: "impure / unchaste / immoral",
                },
              ],
              grammarNote: "Bardolfo's hypocritical euphemism: 'un progetto alquanto impuro' politely describes Falstaff's lustful ambition to seduce Ford's wife.",
            },
            {
              id: "a1_s2_c63_l3",
              original: "Son uom d'arme e quell'infame",
              literal: "I am a man of arms and that scoundrel",
              tokens: [
                {
                  word: "uom d'arme",
                  lemma: "uomo d'arme",
                  pos: "idiom",
                  meaning: "man-at-arms / military man",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocope of uomo)",
                },
                {
                  word: "infame",
                  lemma: "infame",
                  pos: "noun",
                  meaning: "infamous scoundrel / villain",
                },
              ],
              grammarNote: "Bardolfo ridiculously wraps himself in military chivalry: 'Son uom d'arme' ('I am a man-at-arms'). 'Infame' refers to his former master Falstaff.",
            },
            {
              id: "a1_s2_c63_l4",
              original: "più non vo' che v'impozzangheri.",
              literal: "no longer do I want to drag you into the mire.",
              tokens: [
                {
                  word: "vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (apocope of voglio)",
                },
                {
                  word: "impozzangheri",
                  lemma: "impozzangherare",
                  pos: "verb",
                  meaning: "drag into mud / besmirch with puddles (present subjunctive)",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "any longer / more",
                },
                {
                  word: "v'",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (plural/formal direct object clitic vi)",
                },
              ],
              grammarNote: "A brilliant neologism by Arrigo Boito: 'impozzangherare' (from 'pozzanghera', mud puddle), meaning to splash with mud, drag into the gutter, or besmirch someone's reputation. Governed by subjunctive.",
            },
            {
              id: "a1_s2_c63_l5",
              original: "Non vorrei, no, escir dai gangheri",
              literal: "I would not wish, no, to go off the hinges",
              tokens: [
                {
                  word: "vorrei",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I would wish / I would want (1st person singular conditional)",
                },
                {
                  word: "escir dai gangheri",
                  lemma: "uscire dai gangheri",
                  pos: "idiom",
                  meaning: "to go off the hinges / lose one's moral bearings",
                },
                {
                  word: "escir",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "to go out (archaic variant of uscire, apocope)",
                },
                {
                  word: "gangheri",
                  lemma: "ganghero",
                  pos: "noun",
                  meaning: "hinges / pivots",
                },
              ],
              grammarNote: "'Uscire dai gangheri' literally means to come off the door hinges (figuratively to lose control or deviate from proper conduct). Bardolfo poses as a paragon of uprightness.",
            },
            {
              id: "a1_s2_c63_l6",
              original: "dell'onor per un reame!",
              literal: "of honor for a kingdom!",
              tokens: [
                {
                  word: "onor",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor (apocope of onore)",
                },
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for / in exchange for",
                },
                {
                  word: "reame",
                  lemma: "reame",
                  pos: "noun",
                  meaning: "realm / kingdom",
                },
              ],
              grammarNote: "Completes Bardolfo's vow: he would not step off the hinges of honor for an entire kingdom. The grandiose Shakespearean bombast is hilariously out of place for a petty thief.",
            },
            {
              id: "a1_s2_c63_l7",
              original: "Messer Ford, l'uomo avvisato",
              literal: "Master Ford, the forewarned man",
              tokens: [
                {
                  word: "Messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "Master / Sir (honorific title)",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper noun)",
                },
                {
                  word: "avvisato",
                  lemma: "avvisare",
                  pos: "adjective",
                  meaning: "forewarned / alerted (past participle as adjective)",
                },
                {
                  word: "uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man",
                },
              ],
              grammarNote: "Bardolfo quotes the first half of the Italian proverb: 'Uomo avvisato, mezzo salvato' ('Forewarned is forearmed', literally 'A forewarned man is half saved').",
            },
            {
              id: "a1_s2_c63_l8",
              original: "non è salvo che a metà.",
              literal: "is saved only halfway.",
              tokens: [
                {
                  word: "salvo",
                  lemma: "salvo",
                  pos: "adjective",
                  meaning: "saved / safe",
                },
                {
                  word: "metà",
                  lemma: "metà",
                  pos: "noun",
                  meaning: "half",
                },
                {
                  word: "non... che",
                  lemma: "non... che",
                  pos: "idiom",
                  meaning: "only / nothing but (restrictive negative)",
                },
              ],
              grammarNote: "Completes the proverb: being warned is not enough ('non è salvo che a metà')—Ford must take active counter-measures.",
            },
            {
              id: "a1_s2_c63_l9",
              original: "Tocca a voi d'ordir l'agguato",
              literal: "It is up to you to plot the trap",
              tokens: [
                {
                  word: "Tocca a",
                  lemma: "toccare a",
                  pos: "idiom",
                  meaning: "it is the turn of / it is up to",
                },
                {
                  word: "ordir",
                  lemma: "ordire",
                  pos: "verb",
                  meaning: "to weave / plot / frame (apocope of ordire)",
                },
                {
                  word: "agguato",
                  lemma: "agguato",
                  pos: "noun",
                  meaning: "ambush / trap / snare",
                },
              ],
              grammarNote: "'Toccare a' is an idiomatic verb phrase meaning 'it falls upon / it is the duty of someone'. 'Ordir' is apocopic for 'ordire'.",
            },
            {
              id: "a1_s2_c63_l10",
              original: "che l'agguato stornerà.",
              literal: "that will avert the ambush.",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (subject relative pronoun)",
                },
                {
                  word: "agguato",
                  lemma: "agguato",
                  pos: "noun",
                  meaning: "ambush / trap",
                },
                {
                  word: "stornerà",
                  lemma: "stornare",
                  pos: "verb",
                  meaning: "will avert / ward off / deflect (3rd person singular future)",
                },
              ],
              grammarNote: "Wordplay on 'agguato' (ambush/trap): setting a counter-trap to foil Falstaff's original trap ('stornare' = to divert, ward off, neutralize).",
            },
          ],
        },
        {
          id: "a1_s2_c64",
          speaker: "Ford",
          stageDirection: "Un ronzio di vespe e d'avidi calabron brontolamento, un rombar di nembi gravidi d'uragani è quel ch'io sento. Il cerèbro un ebro allucina turbamento di paura, ciò che intorno a me si buccina, è un sussurro di congiura. Parlan quattro e uno ascolta; qual dei quattro ascolterò? agli altri",
          stageDirectionTranslation: "A buzzing of wasps and the grumbling of greedy hornets, a rumble of clouds laden with storms is what I hear. A drunken fever of fear dazzles the brain; what is trumpeted around me is a whispered conspiracy. Four are speaking and one is listening; which of the four shall I listen to? (to the others)",
          lines: [
            {
              id: "a1_s2_c64_l1",
              original: "Se parlaste uno alla volta",
              literal: "If you were to speak one at a time",
              tokens: [
                {
                  word: "parlaste",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "you spoke / you were to speak (2nd person plural imperfect subjunctive)",
                },
                {
                  word: "uno alla volta",
                  lemma: "uno alla volta",
                  pos: "idiom",
                  meaning: "one at a time",
                },
                {
                  word: "volta",
                  lemma: "volta",
                  pos: "noun",
                  meaning: "time / turn",
                },
              ],
              grammarNote: "Ford attempts to restore order among the babble of competing voices. The imperfect subjunctive 'se parlaste' begins a conditional period.",
            },
            {
              id: "a1_s2_c64_l2",
              original: "forse allor v'intenderò",
              literal: "perhaps then I will understand you",
              tokens: [
                {
                  word: "forse",
                  lemma: "forse",
                  pos: "adverb",
                  meaning: "perhaps / maybe",
                },
                {
                  word: "allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then / in that case (apocope of allora)",
                },
                {
                  word: "intenderò",
                  lemma: "intendere",
                  pos: "verb",
                  meaning: "I will understand (1st person singular future)",
                },
                {
                  word: "v'",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (plural direct object clitic vi)",
                },
              ],
              grammarNote: "'Intenderò' (from 'intendere', to comprehend/understand). 'Allor' is the apocopic form of 'allora'.",
            },
          ],
        },
        {
          id: "a1_s2_c65",
          speaker: "Pistola",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c65_l1",
              original: "Sir John Falstaff già v'appresta,",
              literal: "Sir John Falstaff is already preparing for you,",
              tokens: [
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "appresta",
                  lemma: "apprestare",
                  pos: "verb",
                  meaning: "prepares / readies (3rd person singular present)",
                },
                {
                  word: "v'",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "for you (dative clitic vi)",
                },
              ],
              grammarNote: "Pistola cuts in with his distinctive bombastic, pseudo-tragic cadence, addressing Ford with ominous portents.",
            },
            {
              id: "a1_s2_c65_l2",
              original: "messer Ford, un gran pericolo.",
              literal: "Master Ford, a great danger.",
              tokens: [
                {
                  word: "messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "Master / Sir",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / big (apocope of grande)",
                },
                {
                  word: "pericolo",
                  lemma: "pericolo",
                  pos: "noun",
                  meaning: "danger / peril",
                },
              ],
              grammarNote: "Direct object of 'appresta'. 'Pericolo' establishes the dactylic (sdrucciolo) rhyme scheme with 'perpendicolo'.",
            },
            {
              id: "a1_s2_c65_l3",
              original: "Già vi pende sulla testa",
              literal: "Already there hangs over your head",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "pende",
                  lemma: "pendere",
                  pos: "verb",
                  meaning: "hangs / dangles (3rd person singular present)",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
                {
                  word: "vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "over you / to you (dative of reference)",
                },
              ],
              grammarNote: "'Pendere sulla testa' echoes the sword of Damocles, but here serves as a dark comic allusion to cuckold's horns sprouting on Ford's brow.",
            },
            {
              id: "a1_s2_c65_l4",
              original: "qualche cosa a perpendicolo.",
              literal: "something plumb upright.",
              tokens: [
                {
                  word: "qualche cosa",
                  lemma: "qualcosa",
                  pos: "pronoun",
                  meaning: "something",
                },
                {
                  word: "a perpendicolo",
                  lemma: "a perpendicolo",
                  pos: "idiom",
                  meaning: "plumb upright / vertically straight",
                },
                {
                  word: "perpendicolo",
                  lemma: "perpendicolo",
                  pos: "noun",
                  meaning: "plumb line / perpendicular",
                },
              ],
              grammarNote: "'A perpendicolo' means vertical or perpendicular (like a plumb line). Pistola hilariously depicts the cuckold's horns sticking straight up from Ford's head.",
            },
            {
              id: "a1_s2_c65_l5",
              original: "Messer Ford, fui già un armigero",
              literal: "Master Ford, I was once a squire",
              tokens: [
                {
                  word: "fui",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I was (passato remoto 1st person singular)",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "once / formerly",
                },
                {
                  word: "armigero",
                  lemma: "armigero",
                  pos: "noun",
                  meaning: "squire / man-at-arms / armor-bearer",
                },
              ],
              grammarNote: "Pistola elevates his former status as Falstaff's lackey into the noble chivalric role of 'armigero' (squire/shield-bearer). Sdrucciolo rhyme with 'morigero'.",
            },
            {
              id: "a1_s2_c65_l6",
              original: "di quell'uom dall'ampia cute;",
              literal: "of that man of ample hide;",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocope of uomo)",
                },
                {
                  word: "ampia",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "ample / vast / broad",
                },
                {
                  word: "cute",
                  lemma: "cute",
                  pos: "noun",
                  meaning: "skin / hide / pelt",
                },
              ],
              grammarNote: "'Dall'ampia cute' (of vast skin/hide) is Boito's grotesque anatomical description of Falstaff's mountainous bulk.",
            },
            {
              id: "a1_s2_c65_l7",
              original: "or mi pento e mi morigero",
              literal: "now I repent and reform my conduct",
              tokens: [
                {
                  word: "pento",
                  lemma: "pentirsi",
                  pos: "verb",
                  meaning: "I repent (1st person singular present)",
                },
                {
                  word: "morigero",
                  lemma: "morigerarsi",
                  pos: "verb",
                  meaning: "I reform my manners / live temperately (1st person singular present)",
                },
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocope of ora)",
                },
              ],
              grammarNote: "'Morigerarsi' is an erudite Latinism meaning to regulate one's conduct, become moral and temperate. Pistola claims to have turned over a new moral leaf.",
            },
            {
              id: "a1_s2_c65_l8",
              original: "per ragioni di salute.",
              literal: "for reasons of health.",
              tokens: [
                {
                  word: "ragioni",
                  lemma: "ragione",
                  pos: "noun",
                  meaning: "reasons",
                },
                {
                  word: "salute",
                  lemma: "salute",
                  pos: "noun",
                  meaning: "health / physical safety",
                },
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "for / on account of",
                },
              ],
              grammarNote: "The punchline to Pistola's 'moral conversion': he reformed solely 'per ragioni di salute' (to preserve his own skin after Falstaff threatened him with a broomstick).",
            },
            {
              id: "a1_s2_c65_l9",
              original: "La minaccia or v'è scoperta,",
              literal: "The threat now is uncovered to you,",
              tokens: [
                {
                  word: "minaccia",
                  lemma: "minaccia",
                  pos: "noun",
                  meaning: "threat / menace",
                },
                {
                  word: "scoperta",
                  lemma: "scoprire",
                  pos: "adjective",
                  meaning: "uncovered / revealed (past participle as predicate adjective)",
                },
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (apocope)",
                },
                {
                  word: "v'",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "to you (dative clitic vi)",
                },
              ],
              grammarNote: "'V'è scoperta' = 'vi è scoperta' (is laid bare / revealed to you). Pistola dramatically concludes his disclosure.",
            },
            {
              id: "a1_s2_c65_l10",
              original: "or v'è noto il ciurmador.",
              literal: "now known to you is the swindler.",
              tokens: [
                {
                  word: "noto",
                  lemma: "noto",
                  pos: "adjective",
                  meaning: "known / manifest",
                },
                {
                  word: "ciurmador",
                  lemma: "ciurmatore",
                  pos: "noun",
                  meaning: "swindler / charlatan / trickster (apocope of ciurmatore)",
                },
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now",
                },
                {
                  word: "v'",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "to you (dative)",
                },
              ],
              grammarNote: "'Ciurmador' (apocopic form of 'ciurmatore') denotes a deceitful mountebank or snake-oil charlatan who bewitches the gullible.",
            },
            {
              id: "a1_s2_c65_l11",
              original: "State all'erta, all'erta, all'erta!",
              literal: "Stay on guard, on guard, on guard!",
              tokens: [
                {
                  word: "State",
                  lemma: "stare",
                  pos: "verb",
                  meaning: "stay / stand (2nd person plural imperative)",
                },
                {
                  word: "all'erta",
                  lemma: "all'erta",
                  pos: "idiom",
                  meaning: "on guard / on the alert / on watch",
                },
                {
                  word: "erta",
                  lemma: "erta",
                  pos: "noun",
                  meaning: "steep slope / lookout tower",
                },
              ],
              grammarNote: "'Stare all'erta' is a military watchman's warning meaning to keep sharp lookout (from 'erta', steep elevated ground). Repeated thrice for frantic urgency.",
            },
            {
              id: "a1_s2_c65_l12",
              original: "Qui si tratta dell'onor.",
              literal: "Here it is a question of honor.",
              tokens: [
                {
                  word: "tratta",
                  lemma: "trattare",
                  pos: "verb",
                  meaning: "is a matter / concerns (3rd person singular present)",
                },
                {
                  word: "onor",
                  lemma: "onore",
                  pos: "noun",
                  meaning: "honor (apocope of onore)",
                },
                {
                  word: "si tratta di",
                  lemma: "trattarsi di",
                  pos: "idiom",
                  meaning: "it is a question of / it concerns",
                },
                {
                  word: "Qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
              ],
              grammarNote: "Pistola uses the impersonal idiom 'si tratta di' (it is a question of / it concerns). The ultimate irony: Falstaff's discharged thug moralizing about 'honor'.",
            },
          ],
        },
        {
          id: "a1_s2_c66",
          speaker: "Fenton",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c66_l1",
              original: "Se volete io non mi perito",
              literal: "If you wish, I do not hesitate",
              tokens: [
                {
                  word: "volete",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "you wish / you want (2nd person plural present)",
                },
                {
                  word: "perito",
                  lemma: "peritarsi",
                  pos: "verb",
                  meaning: "I hesitate / shrink back (1st person singular present)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
              ],
              grammarNote: "Young Fenton steps forward. 'Peritarsi' is an elevated literary verb meaning to scruple, hesitate, or hold back out of fear or bashfulness.",
            },
            {
              id: "a1_s2_c66_l2",
              original: "di ridurlo alla ragione",
              literal: "to bring him to reason",
              tokens: [
                {
                  word: "ridurlo",
                  lemma: "ridurre",
                  pos: "verb",
                  meaning: "to reduce him / bring him (ridurre + clitic lo)",
                },
                {
                  word: "ragione",
                  lemma: "ragione",
                  pos: "noun",
                  meaning: "reason / senses",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (a + la)",
                },
              ],
              grammarNote: "'Ridurre alla ragione' is an idiom meaning to make someone see reason, bring someone to their senses, or subdue someone.",
            },
            {
              id: "a1_s2_c66_l3",
              original: "co' le brusche o co' le buone,",
              literal: "by harsh means or by good,",
              tokens: [
                {
                  word: "brusche",
                  lemma: "brusco",
                  pos: "adjective",
                  meaning: "harsh / rough / brusque",
                },
                {
                  word: "buone",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good / gentle / mild",
                },
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with / by (apocope of con)",
                },
                {
                  word: "o",
                  lemma: "o",
                  pos: "conjunction",
                  meaning: "or",
                },
              ],
              grammarNote: "Classic Italian idiom 'con le buone o con le brusche' (by fair means or foul, gently or roughly). 'Co'' is the apocopic contraction of 'con'.",
            },
            {
              id: "a1_s2_c66_l4",
              original: "e pagarlo al par del merito.",
              literal: "and pay him according to his desert.",
              tokens: [
                {
                  word: "pagarlo",
                  lemma: "pagare",
                  pos: "verb",
                  meaning: "to pay him (pagare + clitic lo)",
                },
                {
                  word: "merito",
                  lemma: "merito",
                  pos: "noun",
                  meaning: "merit / desert / due reward",
                },
                {
                  word: "al par del",
                  lemma: "al pari di",
                  pos: "idiom",
                  meaning: "equal to / on a par with / according to",
                },
              ],
              grammarNote: "'Pagare al par del merito' means to reward or punish someone strictly according to what they deserve. Sdrucciolo rhyme with 'perito'.",
            },
            {
              id: "a1_s2_c66_l5",
              original: "Mi dà il cuore e mi solletica",
              literal: "My heart gives me courage and it tempts me",
              tokens: [
                {
                  word: "dà il cuore",
                  lemma: "dare il cuore",
                  pos: "idiom",
                  meaning: "gives courage / have the heart to",
                },
                {
                  word: "solletica",
                  lemma: "solleticare",
                  pos: "verb",
                  meaning: "tickles / tempts / entices (3rd person singular present)",
                },
                {
                  word: "cuore",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart",
                },
                {
                  word: "Mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (dative clitic pronoun)",
                },
              ],
              grammarNote: "'Dare il cuore' is an idiom meaning to feel bold enough or have the courage for a challenge. 'Solleticare' (literally to tickle) means to tantalize or excite the appetite.",
            },
          ],
        },
        {
          id: "a1_s2_c67",
          speaker: "Fenton",
          stageDirection: "e sarà una giostra gaia",
          stageDirectionTranslation: "and it will be a merry tourney",
          lines: [
            {
              id: "a1_s2_c67_l1",
              original: "di sfondar quella ventraia",
              literal: "to smash through that paunch",
              tokens: [
                {
                  word: "sfondar",
                  lemma: "sfondare",
                  pos: "verb",
                  meaning: "to smash through / cave in / puncture (apocope of sfondare)",
                },
                {
                  word: "ventraia",
                  lemma: "ventraia",
                  pos: "noun",
                  meaning: "enormous belly / paunch / entrails",
                },
                {
                  word: "quella",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative)",
                },
              ],
              grammarNote: "'Ventraia' is a pejorative/augmentative derivative of 'ventre' (belly), evoking a repulsive, colossal paunch.",
            },
            {
              id: "a1_s2_c67_l2",
              original: "iperbolicoapoplettica.",
              literal: "hyperbolic-apoplectic.",
              tokens: [
                {
                  word: "iperbolicoapoplettica",
                  lemma: "iperbolico-apoplettico",
                  pos: "adjective",
                  meaning: "hyperbolic and apoplectic (compound adjective)",
                },
                {
                  word: "iperbolico",
                  lemma: "iperbolico",
                  pos: "adjective",
                  meaning: "hyperbolic / gigantic / exaggerated",
                },
                {
                  word: "apoplettico",
                  lemma: "apoplettico",
                  pos: "adjective",
                  meaning: "apoplectic / congested with blood",
                },
              ],
              grammarNote: "Boito's magnificent compound portmanteau: 'iperbolico' (hyperbolic, astronomical) + 'apoplettico' (apoplectic, suffused with blood). An 8-syllable sdrucciolo tour de force rhyming with 'solletica'.",
            },
            {
              id: "a1_s2_c67_l3",
              original: "Col consiglio o co' la spada",
              literal: "With counsel or with the sword",
              tokens: [
                {
                  word: "consiglio",
                  lemma: "consiglio",
                  pos: "noun",
                  meaning: "counsel / advice / strategy",
                },
                {
                  word: "spada",
                  lemma: "spada",
                  pos: "noun",
                  meaning: "sword",
                },
                {
                  word: "Col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (con + il)",
                },
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (apocope of con)",
                },
              ],
              grammarNote: "Fenton pledges to defend Ford's house both by intellectual strategy ('consiglio') and by chivalric combat ('spada').",
            },
            {
              id: "a1_s2_c67_l4",
              original: "se lo trovo al tu per tu,",
              literal: "if I catch him face to face,",
              tokens: [
                {
                  word: "al tu per tu",
                  lemma: "a tu per tu",
                  pos: "idiom",
                  meaning: "face to face / man to man / in private encounter",
                },
                {
                  word: "trovo",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "I find / catch (1st person singular present)",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
              ],
              grammarNote: "'Al tu per tu' (or 'a tu per tu') is a classic idiom meaning eye-to-eye, face-to-face, or in direct confrontation (speaking informally using 'tu').",
            },
            {
              id: "a1_s2_c67_l5",
              original: "o lui va per la sua strada",
              literal: "either he goes on his way",
              tokens: [
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him (subject pronoun)",
                },
                {
                  word: "va",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "goes (3rd person singular present)",
                },
                {
                  word: "strada",
                  lemma: "strada",
                  pos: "noun",
                  meaning: "way / road / path",
                },
                {
                  word: "o",
                  lemma: "o",
                  pos: "conjunction",
                  meaning: "either / or",
                },
              ],
              grammarNote: "Correlative disjunction 'o... o...' ('either... or...'). 'Andare per la sua strada' means to walk away, leave town, or retreat.",
            },
            {
              id: "a1_s2_c67_l6",
              original: "o lo assegno a Belzebù.",
              literal: "or I assign him to Beelzebub.",
              tokens: [
                {
                  word: "assegno",
                  lemma: "assegnare",
                  pos: "verb",
                  meaning: "I assign / consign / dispatch (1st person singular present)",
                },
                {
                  word: "Belzebù",
                  lemma: "Belzebù",
                  pos: "noun",
                  meaning: "Beelzebub / Prince of Devils",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "o",
                  lemma: "o",
                  pos: "conjunction",
                  meaning: "or",
                },
              ],
              grammarNote: "Fenton vows that if Falstaff does not flee, he will dispatch him straight to Satan ('Belzebù', Beelzebub).",
            },
          ],
        },
        {
          id: "a1_s2_c68",
          speaker: "Ford",
          stageDirection: "a Pistola",
          stageDirectionTranslation: "to Pistola",
          lines: [
            {
              id: "a1_s2_c68_l1",
              original: "Ripeti.",
              literal: "Repeat.",
              tokens: [
                {
                  word: "Ripeti",
                  lemma: "ripetere",
                  pos: "verb",
                  meaning: "repeat (2nd person singular imperative)",
                },
                {
                  word: "ripetere",
                  lemma: "ripetere",
                  pos: "verb",
                  meaning: "to repeat / say again",
                },
              ],
              grammarNote: "Bewildered by the simultaneous shouting from all sides, Ford demands a clear, singular repetition of the allegations.",
            },
          ],
        },
        {
          id: "a1_s2_c69",
          speaker: "Pistola",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c69_l1",
              original: "In due parole:",
              literal: "In two words:",
              tokens: [
                {
                  word: "in due parole",
                  lemma: "in due parole",
                  pos: "idiom",
                  meaning: "in short / in a nutshell / in two words",
                },
                {
                  word: "parole",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "words",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two",
                },
                {
                  word: "In",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
              ],
              grammarNote: "Pistola steps forward to deliver his punchy, staccato summary: 'In due parole' ('In two words' / in a nutshell).",
            },
            {
              id: "a1_s2_c69_l2",
              original: "l'enorme Falstaff vuole",
              literal: "the enormous Falstaff wants",
              tokens: [
                {
                  word: "enorme",
                  lemma: "enorme",
                  pos: "adjective",
                  meaning: "enormous / colossal",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper noun)",
                },
                {
                  word: "vuole",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants (3rd person singular present)",
                },
              ],
              grammarNote: "Pistola sets up a devastating sequence of four rhyming infinitive clauses detailing Falstaff's criminal intent.",
            },
            {
              id: "a1_s2_c69_l3",
              original: "entrar nel vostro tetto,",
              literal: "to enter under your roof,",
              tokens: [
                {
                  word: "entrar",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "to enter (apocope of entrare)",
                },
                {
                  word: "tetto",
                  lemma: "tetto",
                  pos: "noun",
                  meaning: "roof / home",
                },
                {
                  word: "vostro",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "under the / in the (in + il)",
                },
              ],
              grammarNote: "Synecdoche: 'tetto' (roof) stands for the domestic home or household. 'Entrar' is apocopic.",
            },
            {
              id: "a1_s2_c69_l4",
              original: "beccarvi la consorte,",
              literal: "to peck at your wife,",
              tokens: [
                {
                  word: "beccarvi",
                  lemma: "beccare",
                  pos: "verb",
                  meaning: "to peck / snatch / seduce (beccare + clitic vi)",
                },
                {
                  word: "consorte",
                  lemma: "consorte",
                  pos: "noun",
                  meaning: "wife / spouse / consort",
                },
                {
                  word: "vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "from you / your (dative of disadvantage)",
                },
              ],
              grammarNote: "'Beccare' literally means to peck like a bird, colloquially used here to mean snatch, seduce, or cuckold. 'Vi' is the dative of disadvantage ('from you').",
            },
            {
              id: "a1_s2_c69_l5",
              original: "sfondar la cassaforte",
              literal: "to break open the safe",
              tokens: [
                {
                  word: "sfondar",
                  lemma: "sfondare",
                  pos: "verb",
                  meaning: "to smash open / break in / breach (apocope of sfondare)",
                },
                {
                  word: "cassaforte",
                  lemma: "cassaforte",
                  pos: "noun",
                  meaning: "safe / strongbox",
                },
                {
                  word: "la",
                  lemma: "il",
                  pos: "adjective",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "'Sfondar la cassaforte' (to smash open the iron strongbox). Pistola highlights that Falstaff aims to plunder Ford's wealth as well as his marriage.",
            },
            {
              id: "a1_s2_c69_l6",
              original: "e sconquassarvi il letto.",
              literal: "and shatter your bed.",
              tokens: [
                {
                  word: "sconquassarvi",
                  lemma: "sconquassare",
                  pos: "verb",
                  meaning: "to shatter / smash to pieces / wreck (sconquassare + clitic vi)",
                },
                {
                  word: "letto",
                  lemma: "letto",
                  pos: "noun",
                  meaning: "bed",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "vi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "your / for you (ethical/possessive dative)",
                },
              ],
              grammarNote: "'Sconquassare' means to shatter or batter into pieces. The visceral image of Falstaff wrecking Ford's marriage bed directly inflames Ford's tormenting jealousy.",
            },
          ],
        },
        {
          id: "a1_s2_c70",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s2_c70_l1",
              original: "Caspita!",
              literal: "Good heavens!",
              tokens: [
                {
                  word: "Caspita",
                  lemma: "caspita",
                  pos: "interjection",
                  meaning: "good heavens! / gadzooks! / well I never!",
                },
                {
                  word: "caspita",
                  lemma: "caspita",
                  pos: "interjection",
                  meaning: "my goodness! / wow!",
                },
              ],
              grammarNote: "Dr. Caius's classic mild exclamation of shock and outrage (an Italian euphemism for stronger expletives).",
            },
          ],
        },
        {
          id: "a1_s2_c71",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c71_l1",
              original: "Quanti guai!",
              literal: "What a heap of troubles!",
              tokens: [
                {
                  word: "Quanti",
                  lemma: "quanto",
                  pos: "adjective",
                  meaning: "how many / what a lot of (exclamative)",
                },
                {
                  word: "guai",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "troubles / woes / misfortunes",
                },
                {
                  word: "guaio",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "trouble / mishap / calamity",
                },
              ],
              grammarNote: "Ford gasps in dismay as suspicion grips him: 'Quanti guai!' ('What a mountain of trouble!'). Exclamatory adjective 'quanti' + plural noun 'guai'.",
            },
          ],
        },
        {
          id: "a1_s2_c72",
          speaker: "Bardolfo",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c72_l1",
              original: "Già le scrisse un biglietto...",
              literal: "Already he wrote her a note...",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "scrisse",
                  lemma: "scrivere",
                  pos: "verb",
                  meaning: "he wrote (passato remoto 3rd person singular)",
                },
                {
                  word: "le",
                  lemma: "le",
                  pos: "pronoun",
                  meaning: "to her (dative clitic pronoun)",
                },
                {
                  word: "biglietto",
                  lemma: "biglietto",
                  pos: "noun",
                  meaning: "note / love letter / billet-doux",
                },
              ],
              grammarNote: "Bardolfo reveals the smoking gun: Falstaff has already dispatched a written love letter to Alice ('le scrisse un biglietto').",
            },
          ],
        },
        {
          id: "a1_s2_c73",
          speaker: "Pistola",
          stageDirection: "interrompendolo",
          stageDirectionTranslation: "interrupting him",
          lines: [
            {
              id: "a1_s2_c73_l1",
              original: "Ma quel messaggio abbietto",
              literal: "But that abject message",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative)",
                },
                {
                  word: "messaggio",
                  lemma: "messaggio",
                  pos: "noun",
                  meaning: "message / missive",
                },
                {
                  word: "abbietto",
                  lemma: "abietto",
                  pos: "adjective",
                  meaning: "abject / vile / despicable",
                },
              ],
              grammarNote: "Pistola interrupts to sanctimoniously denounce the love letter as an 'abject message' ('messaggio abbietto'), claiming moral revulsion.",
            },
            {
              id: "a1_s2_c73_l2",
              original: "ricusai.",
              literal: "I refused.",
              tokens: [
                {
                  word: "ricusai",
                  lemma: "ricusare",
                  pos: "verb",
                  meaning: "I refused / rejected (passato remoto 1st person singular)",
                },
                {
                  word: "ricusare",
                  lemma: "ricusare",
                  pos: "verb",
                  meaning: "to refuse / decline / reject",
                },
              ],
              grammarNote: "Pistola proudly claims that he refused to deliver Falstaff's love letter. Lowercase initial matches the original.",
            },
          ],
        },
        {
          id: "a1_s2_c74",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c74_l1",
              original: "Ricusai.",
              literal: "I refused.",
              tokens: [
                {
                  word: "Ricusai",
                  lemma: "ricusare",
                  pos: "verb",
                  meaning: "I refused / rejected (passato remoto 1st person singular)",
                },
                {
                  word: "ricusare",
                  lemma: "ricusare",
                  pos: "verb",
                  meaning: "to refuse / decline / reject",
                },
              ],
              grammarNote: "Bardolfo echoes Pistola with identical words, claiming his own share of virtue. Uppercase initial matches the original.",
            },
          ],
        },
        {
          id: "a1_s2_c75",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s2_c75_l1",
              original: "Badate a voi!",
              literal: "Watch out for yourself!",
              tokens: [
                {
                  word: "Badate",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "watch out / beware / take care (2nd person plural imperative)",
                },
                {
                  word: "badate a",
                  lemma: "badare a",
                  pos: "idiom",
                  meaning: "to watch out for / look after / beware of",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "yourself / you (formal pronoun)",
                },
              ],
              grammarNote: "Pistola delivers the final warning: 'Badate a voi!' (look to your own defense / beware!), setting Ford's obsessive jealousy ablaze.",
            },
          ],
        },
        {
          id: "a1_s2_c76",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c76_l1",
              original: "Badate!",
              literal: "Watch out!",
              tokens: [
                {
                  word: "Badate",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "watch out / pay attention (2nd person plural imperative)",
                },
                {
                  word: "badare",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "to pay attention / heed / be on guard",
                },
              ],
              grammarNote: "Bardolfo urgently warns Ford to be on guard. Second-person plural imperative of 'badare' (to heed, watch out). Having been expelled by Falstaff for refusing to carry the letters on grounds of 'honor', Bardolfo cynically betrays his master to Ford for profit.",
            },
          ],
        },
        {
          id: "a1_s2_c77",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s2_c77_l1",
              original: "Falstaff le occhieggia tutte,",
              literal: "Falstaff ogles them all,",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
                {
                  word: "le",
                  lemma: "le",
                  pos: "pronoun",
                  meaning: "them (feminine plural direct object clitic pronoun)",
                },
                {
                  word: "occhieggia",
                  lemma: "occhieggiare",
                  pos: "verb",
                  meaning: "ogles / casts amorous glances at (3rd person singular present)",
                },
                {
                  word: "tutte",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / every one (feminine plural)",
                },
              ],
              grammarNote: "Pistola chimes in to fuel Ford's anxiety. 'Occhieggiare' is a vivid frequentative verb formed from 'occhio' (eye), meaning to eye up or flirt with the eyes. The clitic 'le' refers to women in general, emphasizing Falstaff's indiscriminate lust.",
            },
            {
              id: "a1_s2_c77_l2",
              original: "che siano belle o brutte,",
              literal: "whether they be fair or foul,",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "whether / that (concessive conjunction)",
                },
                {
                  word: "siano",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they be (present subjunctive 3rd person plural of essere)",
                },
                {
                  word: "belle",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / fair (feminine plural)",
                },
                {
                  word: "brutte",
                  lemma: "brutto",
                  pos: "adjective",
                  meaning: "ugly / foul (feminine plural)",
                },
              ],
              grammarNote: "Subjunctive 'siano' introduced by correlative 'che... o...' expresses an alternative condition ('whether they are... or...'). Pistola paints Falstaff as a ravenous monster who spares no woman regardless of appearance.",
            },
            {
              id: "a1_s2_c77_l3",
              original: "pulzelle o maritate.",
              literal: "maidens or married women.",
              tokens: [
                {
                  word: "pulzelle",
                  lemma: "pulzella",
                  pos: "noun",
                  meaning: "maidens / damsels / virgins (literary feminine plural)",
                },
                {
                  word: "o",
                  lemma: "o",
                  pos: "conjunction",
                  meaning: "or",
                },
                {
                  word: "maritate",
                  lemma: "maritata",
                  pos: "noun",
                  meaning: "married women / matrons (feminine plural)",
                },
              ],
              grammarNote: "'Pulzella' is an archaic, literary Italian word for an unmarried maiden (cognate with French 'pucelle'). 'Maritate' functions substantively for married women. The pairing underscores Falstaff's total disregard for social propriety.",
            },
          ],
        },
        {
          id: "a1_s2_c78",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c78_l1",
              original: "La corona che adorna",
              literal: "The crown that adorns",
              tokens: [
                {
                  word: "corona",
                  lemma: "corona",
                  pos: "noun",
                  meaning: "crown / wreath",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (relative pronoun)",
                },
                {
                  word: "adorna",
                  lemma: "adornare",
                  pos: "verb",
                  meaning: "adorns / decorates (3rd person singular present)",
                },
              ],
              grammarNote: "Bardolfo begins a pompous, mythological circumlocution for cuckold's horns. Boito uses elevated poetic diction ('corona', 'chiome') in a mock-heroic vein to terrify the bourgeois Ford.",
            },
            {
              id: "a1_s2_c78_l2",
              original: "d'Atteòn l'irte chiome",
              literal: "of Actaeon the bristling locks",
              tokens: [
                {
                  word: "Atteòn",
                  lemma: "Atteone",
                  pos: "noun",
                  meaning: "Actaeon (mythological hunter transformed into a horned stag)",
                },
                {
                  word: "irte",
                  lemma: "irto",
                  pos: "adjective",
                  meaning: "bristling / shaggy / rough (feminine plural)",
                },
                {
                  word: "chiome",
                  lemma: "chioma",
                  pos: "noun",
                  meaning: "hair / locks / mane (poetic feminine plural)",
                },
              ],
              grammarNote: "Mythological allusion to Actaeon (Atteone), who was turned into a stag with antlers after seeing Diana bathing. Antlers are the classic Renaissance symbol of cuckoldry. 'Irte' describes the rough, bristling hair of the beast.",
            },
            {
              id: "a1_s2_c78_l3",
              original: "su voi già spunta.",
              literal: "upon you already sprouts.",
              tokens: [
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon / on",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (plural / formal)",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "spunta",
                  lemma: "spuntare",
                  pos: "verb",
                  meaning: "sprouts / buds / emerges (3rd person singular present)",
                },
              ],
              grammarNote: "Completes the sentence: 'La corona che adorna d'Atteòn l'irte chiome su voi già spunta'. 'Spuntare' evokes the physical sprouting of horns on Ford's forehead. Lowercase opening preserves the syntactic continuation.",
            },
          ],
        },
        {
          id: "a1_s2_c79",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c79_l1",
              original: "Come",
              literal: "How",
              tokens: [
                {
                  word: "Come",
                  lemma: "come",
                  pos: "adverb",
                  meaning: "how / in what manner (interrogative adverb)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "how / as",
                },
              ],
              grammarNote: "Ford, taken aback by Bardolfo's grandiose classical circumlocution, interrupts in confusion. His query carries over to the next line ('sarebbe a dir?').",
            },
            {
              id: "a1_s2_c79_l2",
              original: "sarebbe a dir?",
              literal: "would that be to say?",
              tokens: [
                {
                  word: "sarebbe",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "would be (conditional present 3rd person singular)",
                },
                {
                  word: "dir",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "say (apocopated infinitive of dire)",
                },
                {
                  word: "sarebbe a dir",
                  lemma: "essere a dire",
                  pos: "idiom",
                  meaning: "what does that mean / that is to say?",
                },
              ],
              grammarNote: "The phrase 'sarebbe a dir' is an idiomatic expression meaning 'what is that supposed to mean?' or 'that is to say?'. 'Dir' is the standard apocope of infinitive 'dire'.",
            },
          ],
        },
        {
          id: "a1_s2_c80",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c80_l1",
              original: "«Le corna.»",
              literal: "«The horns.»",
              tokens: [
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (irregular feminine plural of masculine noun corno)",
                },
                {
                  word: "Le corna",
                  lemma: "le corna",
                  pos: "idiom",
                  meaning: "cuckold's horns / sign of a betrayed husband",
                },
              ],
              grammarNote: "Bardolfo drops the poetic mask and blurts out the blunt, taboo term: 'Le corna' (the horns of cuckoldry). Italian 'corno' has the irregular feminine plural 'corna' when referring to anatomical horns or cuckoldry.",
            },
          ],
        },
        {
          id: "a1_s2_c81",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c81_l1",
              original: "Brutta parola!",
              literal: "Ugly word!",
              tokens: [
                {
                  word: "Brutta",
                  lemma: "brutto",
                  pos: "adjective",
                  meaning: "ugly / foul / unpleasant (feminine singular)",
                },
                {
                  word: "parola",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "word",
                },
              ],
              grammarNote: "Ford is visibly repulsed and shocked. 'Brutta parola' expresses his horror at the vulgar accusation of cuckoldry, touching the raw nerve of his latent jealousy.",
            },
          ],
        },
        {
          id: "a1_s2_c82",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a1_s2_c82_l1",
              original: "Ha voglie",
              literal: "Has desires",
              tokens: [
                {
                  word: "Ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has (3rd person singular present of avere)",
                },
                {
                  word: "voglie",
                  lemma: "voglia",
                  pos: "noun",
                  meaning: "desires / cravings / longings (feminine plural)",
                },
              ],
              grammarNote: "Dr. Caius interjects to stoke Ford's fury, eager to take revenge on Falstaff for the burglary and insults of Scene 1. Enjambment carries into the next line ('voraci il cavaliere').",
            },
            {
              id: "a1_s2_c82_l2",
              original: "voraci il cavaliere.",
              literal: "voracious the knight.",
              tokens: [
                {
                  word: "voraci",
                  lemma: "vorace",
                  pos: "adjective",
                  meaning: "voracious / ravenous (plural)",
                },
                {
                  word: "cavaliere",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / gentleman",
                },
              ],
              grammarNote: "Inverted word order ('voglie voraci il cavaliere') gives rhetorical weight to 'voraci'. Caius paints Falstaff not just as an admirer, but as a predatory glutton.",
            },
          ],
        },
        {
          id: "a1_s2_c83",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c83_l1",
              original: "Sorveglierò la moglie.",
              literal: "I will watch over my wife.",
              tokens: [
                {
                  word: "Sorveglierò",
                  lemma: "sorvegliare",
                  pos: "verb",
                  meaning: "I will keep under surveillance / watch over (1st person singular future)",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
              ],
              grammarNote: "Ford resolves to spy on his household. Note Italian syntax: 'la moglie' with definite article translates naturally into English with a possessive determiner ('my wife'). Ford's jealousy mirrors Shakespeare's Othello, but Verdi and Boito set it in a comedic, manic key.",
            },
            {
              id: "a1_s2_c83_l2",
              original: "Sorveglierò il messere.",
              literal: "I will watch over the master.",
              tokens: [
                {
                  word: "Sorveglierò",
                  lemma: "sorvegliare",
                  pos: "verb",
                  meaning: "I will keep under surveillance / watch over (1st person singular future)",
                },
                {
                  word: "messere",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "master / sir / gentleman (archaic honorific)",
                },
              ],
              grammarNote: "Parallel structure with the preceding line. 'Messere' is an archaic Italian honorific (derived from French 'messire'), used here with bitter sarcasm toward Falstaff.",
            },
            {
              id: "a1_s2_c83_l3",
              original: "Salvar vo' i beni miei",
              literal: "I want to save my possessions",
              tokens: [
                {
                  word: "Salvar",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save / protect (apocopated infinitive)",
                },
                {
                  word: "vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (apocopated poetic form of voglio)",
                },
                {
                  word: "beni",
                  lemma: "bene",
                  pos: "noun",
                  meaning: "goods / possessions / property (masculine plural)",
                },
                {
                  word: "miei",
                  lemma: "mio",
                  pos: "pronoun",
                  meaning: "my / mine (possessive adjective/pronoun, masculine plural)",
                },
              ],
              grammarNote: "Ford characteristically treats his wife and honor as personal property ('i beni miei'). 'Vo'' is the apocopated poetic form of 'voglio' (I want). Natural Italian determiner syntax 'i beni miei' -> 'my possessions'.",
            },
            {
              id: "a1_s2_c83_l4",
              original: "dagli appetiti altrui.",
              literal: "from other people's appetites.",
              tokens: [
                {
                  word: "dagli",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + gli)",
                },
                {
                  word: "appetiti",
                  lemma: "appetito",
                  pos: "noun",
                  meaning: "appetites / cravings (masculine plural)",
                },
                {
                  word: "altrui",
                  lemma: "altrui",
                  pos: "adjective",
                  meaning: "of others / other people's (invariable possessive)",
                },
              ],
              grammarNote: "Ford sees Falstaff as an encroaching predator trying to consume his property. 'Altrui' is an invariable possessive modifier meaning 'of another' or 'other people's'.",
            },
          ],
        },
        {
          id: "a1_s2_c84",
          speaker: "Ford",
          stageDirection: "rientrano da sinistra le quattro donne",
          stageDirectionTranslation: "the four women re-enter from the left",
          lines: [
          ],
        },
        {
          id: "a1_s2_c85",
          speaker: "Fenton",
          stageDirection: "vedendo Nannetta È lei.",
          stageDirectionTranslation: "seeing Nannetta: 'It is she.'",
          lines: [
          ],
        },
        {
          id: "a1_s2_c86",
          speaker: "Nannetta",
          stageDirection: "vedendo Fenton È lui.",
          stageDirectionTranslation: "seeing Fenton: 'It is he.'",
          lines: [
          ],
        },
        {
          id: "a1_s2_c87",
          speaker: "Ford",
          stageDirection: "vedendo Alice È lei.",
          stageDirectionTranslation: "seeing Alice: 'It is she.'",
          lines: [
          ],
        },
        {
          id: "a1_s2_c88",
          speaker: "Alice Ford",
          stageDirection: "vedendo Ford",
          stageDirectionTranslation: "seeing Ford",
          lines: [
            {
              id: "a1_s2_c88_l1",
              original: "È lui.",
              literal: "It is he.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present of essere)",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him (3rd person masculine disjunctive pronoun)",
                },
              ],
              grammarNote: "Alice Ford spots her husband Ford approaching in the garden. In Italian, disjunctive 'lui' after the copula 'è' serves as the predicate pronoun ('it is he').",
            },
          ],
        },
        {
          id: "a1_s2_c89",
          speaker: "Dr. Caius",
          stageDirection: "a Ford indicando Alice",
          stageDirectionTranslation: "to Ford indicando Alice",
          lines: [
            {
              id: "a1_s2_c89_l1",
              original: "È lei.",
              literal: "It is she.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present of essere)",
                },
                {
                  word: "lei",
                  lemma: "lei",
                  pos: "pronoun",
                  meaning: "she / her (3rd person feminine disjunctive pronoun)",
                },
              ],
              grammarNote: "Dr. Caius spots Alice Ford across the garden. The simultaneous cross-reactions of the men and women create Verdi's intricate, kinetic ensemble counterpoint.",
            },
          ],
        },
        {
          id: "a1_s2_c90",
          speaker: "Meg Page",
          stageDirection: "ad Alice indicando Ford",
          stageDirectionTranslation: "to Alice indicando Ford",
          lines: [
            {
              id: "a1_s2_c90_l1",
              original: "È lui.",
              literal: "It is he.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present of essere)",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him (3rd person masculine disjunctive pronoun)",
                },
              ],
              grammarNote: "Alice Ford spots her husband Ford approaching in the garden. In Italian, disjunctive 'lui' after the copula 'è' serves as the predicate pronoun ('it is he').",
            },
          ],
        },
        {
          id: "a1_s2_c91",
          speaker: "Alice Ford",
          stageDirection: "alle altre a bassa voce indicando Ford",
          stageDirectionTranslation: "to the others in a low voice, pointing to Ford",
          lines: [
            {
              id: "a1_s2_c91_l1",
              original: "S'egli sapesse!...",
              literal: "If he only knew!...",
              tokens: [
                {
                  word: "S'",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if (elided form of se before vowel)",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (literary 3rd person masculine subject pronoun)",
                },
                {
                  word: "sapesse",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "knew / were to know (3rd person singular imperfect subjunctive)",
                },
              ],
              grammarNote: "Alice imagines the explosive catastrophe if Ford were to find out about Falstaff's love letter. Imperfect subjunctive 'sapesse' in an exclamatory protasis conveys apprehension of an unrealized event.",
            },
          ],
        },
        {
          id: "a1_s2_c92",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c92_l1",
              original: "Guai!",
              literal: "Trouble!",
              tokens: [
                {
                  word: "Guai",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "troubles / woes / disaster (plural used interjectionally)",
                },
                {
                  word: "guaio",
                  lemma: "guaio",
                  pos: "noun",
                  meaning: "trouble / woe / calamity",
                },
              ],
              grammarNote: "Nannetta gasps in dread. 'Guai' (plural of 'guaio') functions as an alarming exclamation warning of ruinous consequences should Ford discover what has transpired.",
            },
          ],
        },
        {
          id: "a1_s2_c93",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c93_l1",
              original: "Schiviamo i passi suoi.",
              literal: "Let us avoid his path.",
              tokens: [
                {
                  word: "Schiviamo",
                  lemma: "schivare",
                  pos: "verb",
                  meaning: "let us avoid / dodge (1st person plural present/imperative)",
                },
                {
                  word: "passi",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "steps / footsteps / path (masculine plural)",
                },
                {
                  word: "suoi",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive adjective, masculine plural)",
                },
              ],
              grammarNote: "Alice urges the women to evade Ford's approach. 'Schivare' means to dodge, sidestep, or evade. 'I passi suoi' is a poetic metonymy for his steps or path.",
            },
          ],
        },
        {
          id: "a1_s2_c94",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c94_l1",
              original: "Ford è geloso?",
              literal: "Is Ford jealous?",
              tokens: [
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper name)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
                {
                  word: "geloso",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous (masculine singular)",
                },
              ],
              grammarNote: "Meg Page asks Alice about Ford's temperament. Ford's jealousy is the driving engine of the comic subplot, setting up his impending disguised visit to Falstaff as 'Signor Fontana'.",
            },
          ],
        },
        {
          id: "a1_s2_c95",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c95_l1",
              original: "Assai.",
              literal: "Very much.",
              tokens: [
                {
                  word: "Assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "very / very much / exceedingly",
                },
                {
                  word: "assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "greatly / to a high degree",
                },
              ],
              grammarNote: "Alice confirms Ford's suspicious nature with succinct, dry understatement: 'Assai' (exceedingly / very much so).",
            },
          ],
        },
        {
          id: "a1_s2_c96",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c96_l1",
              original: "Zitto.",
              literal: "Quiet.",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "interjection",
                  meaning: "hush / quiet / silent",
                },
                {
                  word: "zitto",
                  lemma: "zitto",
                  pos: "adjective",
                  meaning: "silent / still",
                },
              ],
              grammarNote: "Mistress Quickly silences the women as the male conspirators cross their path in the garden. 'Zitto' functions as an urgent interjection commanding hush.",
            },
          ],
        },
        {
          id: "a1_s2_c97",
          speaker: "Alice Ford",
          stageDirection: "Badiamo a noi.",
          stageDirectionTranslation: "Let us look to ourselves.",
          lines: [
            {
              id: "a1_s2_c97_l1",
              original: "Alice, Meg e Quickly escono da sinistra. Resta Nannetta.",
              literal: "Alice, Meg, and Quickly exit from the left. Nannetta remains.",
              tokens: [
                {
                  word: "escono",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "they exit / go out (3rd person plural present)",
                },
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left (stage direction)",
                },
                {
                  word: "Resta",
                  lemma: "restare",
                  pos: "verb",
                  meaning: "remains / stays behind (3rd person singular present)",
                },
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
              ],
              grammarNote: "Stage direction marking the strategic departure of the three older women, leaving young Nannetta behind in the Windsor garden.",
            },
            {
              id: "a1_s2_c97_l2",
              original: "Ford, Dr. Cajus, Bardolfo e Pistola escono da destra. Resta Fenton.",
              literal: "Ford, Dr. Caius, Bardolfo, and Pistola exit from the right. Fenton remains.",
              tokens: [
                {
                  word: "escono",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "they exit / go out (3rd person plural present)",
                },
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right (stage direction)",
                },
                {
                  word: "Resta",
                  lemma: "restare",
                  pos: "verb",
                  meaning: "remains / stays behind (3rd person singular present)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
              ],
              grammarNote: "Stage direction indicating that the male plotting faction exits stage right, leaving Fenton alone on stage with Nannetta. This sets the stage for their stolen lyric duet.",
            },
          ],
        },
        {
          id: "a1_s2_c98",
          speaker: "Fenton",
          stageDirection: "fra i cespugli verso Nannetta a bassa voce",
          stageDirectionTranslation: "among the bushes, toward Nannetta in a low voice",
          lines: [
            {
              id: "a1_s2_c98_l1",
              original: "Pst, pst, Nannetta.",
              literal: "Psst, psst, Nannetta.",
              tokens: [
                {
                  word: "Pst",
                  lemma: "pst",
                  pos: "interjection",
                  meaning: "psst (whispered call to attract attention)",
                },
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name / diminutive of Anna)",
                },
              ],
              grammarNote: "Fenton's hushed whisper as he beckons Nannetta the moment the adults leave. The whispering onomatopoeia 'pst' contrasts brilliantly with the bustling nine-part polyphony of the ensembles.",
            },
          ],
        },
        {
          id: "a1_s2_c99",
          speaker: "Nannetta",
          stageDirection: "mettemdo l'indice al labbro per cenno di silenzio",
          stageDirectionTranslation: "putting his index finger to his lips as a sign of silence",
          lines: [
            {
              id: "a1_s2_c99_l1",
              original: "Sss.",
              literal: "Shh.",
              tokens: [
                {
                  word: "Sss",
                  lemma: "sss",
                  pos: "interjection",
                  meaning: "shh / hush (sibilant sound urging silence)",
                },
                {
                  word: "silenzio",
                  lemma: "silenzio",
                  pos: "noun",
                  meaning: "silence / hush",
                },
              ],
              grammarNote: "Nannetta's cautionary sibilant response, warning Fenton to be careful even as she yields to his presence.",
            },
          ],
        },
        {
          id: "a1_s2_c100",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c100_l1",
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
          id: "a1_s2_c101",
          speaker: "Nannetta",
          stageDirection: "guardando attorno con cautela",
          stageDirectionTranslation: "looking around cautiously",
          lines: [
            {
              id: "a1_s2_c101_l1",
              original: "Taci.",
              literal: "Be quiet.",
              tokens: [
                {
                  word: "Taci",
                  lemma: "tacere",
                  pos: "verb",
                  meaning: "be quiet / hush (2nd person singular imperative)",
                },
                {
                  word: "tacere",
                  lemma: "tacere",
                  pos: "verb",
                  meaning: "to be silent / keep quiet",
                },
              ],
              grammarNote: "Second-person singular imperative of 'tacere' (to be silent). Nannetta shushes Fenton playfully while leaning in close.",
            },
            {
              id: "a1_s2_c101_l2",
              original: "Che vuoi?",
              literal: "What do you want?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what (interrogative pronoun)",
                },
                {
                  word: "vuoi",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "you want (2nd person singular present of volere)",
                },
              ],
              grammarNote: "Nannetta feigns ignorance, prompting Fenton to declare his romantic desire. 'Vuoi' is the second-person singular present of irregular verb 'volere'.",
            },
          ],
        },
        {
          id: "a1_s2_c102",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c102_l1",
              original: "Due baci.",
              literal: "Two kisses.",
              tokens: [
                {
                  word: "Due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two (cardinal numeral)",
                },
                {
                  word: "baci",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kisses (masculine plural)",
                },
              ],
              grammarNote: "Fenton's ardent, direct request: 'Due baci' (two kisses). Verdi accompanies this motif with a soaring, pure lyrical phrase in the woodwinds and strings.",
            },
          ],
        },
        {
          id: "a1_s2_c103",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c103_l1",
              original: "In fretta.",
              literal: "In haste.",
              tokens: [
                {
                  word: "In",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
                {
                  word: "fretta",
                  lemma: "fretta",
                  pos: "noun",
                  meaning: "haste / hurry",
                },
                {
                  word: "in fretta",
                  lemma: "in fretta",
                  pos: "idiom",
                  meaning: "in haste / quickly / hurriedly",
                },
              ],
              grammarNote: "Prepositional phrase 'in fretta' functioning adverbially (quickly, in haste). Nannetta agrees, but warns him of the extreme danger of discovery.",
            },
          ],
        },
        {
          id: "a1_s2_c104",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c104_l1",
              original: "In fretta.",
              literal: "In haste.",
              tokens: [
                {
                  word: "In",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
                {
                  word: "fretta",
                  lemma: "fretta",
                  pos: "noun",
                  meaning: "haste / hurry",
                },
                {
                  word: "in fretta",
                  lemma: "in fretta",
                  pos: "idiom",
                  meaning: "in haste / quickly / hurriedly",
                },
              ],
              grammarNote: "Prepositional phrase 'in fretta' functioning adverbially (quickly, in haste). Nannetta agrees, but warns him of the extreme danger of discovery.",
            },
          ],
        },
        {
          id: "a1_s2_c105",
          speaker: "Fenton",
          stageDirection: "si baciano rapidamente",
          stageDirectionTranslation: "they kiss quickly",
          lines: [
          ],
        },
        {
          id: "a1_s2_c106",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c106_l1",
              original: "Labbra di foco!",
              literal: "Lips of fire!",
              tokens: [
                {
                  word: "Labbra",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lips (irregular feminine plural of masculine noun labbro)",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "foco",
                  lemma: "fuoco",
                  pos: "noun",
                  meaning: "fire / flame / passion (poetic monophthong variant of fuoco)",
                },
              ],
              grammarNote: "Nannetta begins a rapid exchange of poetic conceits. 'Foco' is the traditional Italian poetic monophthong for 'fuoco'. 'Labbra' is the irregular feminine plural of masculine 'labbro'.",
            },
          ],
        },
        {
          id: "a1_s2_c107",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c107_l1",
              original: "Labbra di fiore!...",
              literal: "Lips of flower!...",
              tokens: [
                {
                  word: "Labbra",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lips (irregular feminine plural of masculine noun labbro)",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "fiore",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower / blossom",
                },
              ],
              grammarNote: "Fenton answers her metaphor with floral imagery ('foco' / 'fiore'), continuing their lyrical stichomythia in rhyming quinari/senari.",
            },
          ],
        },
        {
          id: "a1_s2_c108",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c108_l1",
              original: "Che il vago gioco",
              literal: "That the charming game",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "that / which (relative pronoun referring to lips)",
                },
                {
                  word: "vago",
                  lemma: "vago",
                  pos: "adjective",
                  meaning: "charming / graceful / lovely / wandering",
                },
                {
                  word: "gioco",
                  lemma: "gioco",
                  pos: "noun",
                  meaning: "game / play",
                },
              ],
              grammarNote: "Relative clause describing their lips. 'Vago' in Italian lyric poetry conveys grace, beauty, and elusive charm. The sentence resolves in the next line ('sanno d'amore').",
            },
            {
              id: "a1_s2_c108_l2",
              original: "sanno d'amore.",
              literal: "know of love.",
              tokens: [
                {
                  word: "sanno",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "know / have the flavor of (3rd person plural present of sapere)",
                },
                {
                  word: "d'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of (elided form of di before vowel)",
                },
                {
                  word: "amore",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love",
                },
              ],
              grammarNote: "Idiomatic construction 'sapere di' means both 'to know / have expertise in' and 'to taste / smell of' love. The lowercase opening marks the syntactic continuation from 'Che il vago gioco'.",
            },
          ],
        },
        {
          id: "a1_s2_c109",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c109_l1",
              original: "Che spargon ciarle,",
              literal: "That scatter chatter,",
              tokens: [
                {
                  word: "spargon",
                  lemma: "spargere",
                  pos: "verb",
                  meaning: "scatter / shed / diffuse (poetic apocope of spargono)",
                },
                {
                  word: "ciarle",
                  lemma: "ciarla",
                  pos: "noun",
                  meaning: "chatter / prattle / gossip (feminine plural)",
                },
              ],
              grammarNote: "Fenton continues the praise of Nannetta's lips. 'Spargon' is the poetic truncation of 'spargono' (they scatter). 'Ciarle' denotes sweet, innocent gossip and prattle.",
            },
            {
              id: "a1_s2_c109_l2",
              original: "che mostran perle,",
              literal: "that reveal pearls,",
              tokens: [
                {
                  word: "mostran",
                  lemma: "mostrare",
                  pos: "verb",
                  meaning: "show / reveal (poetic apocope of mostrano)",
                },
                {
                  word: "perle",
                  lemma: "perla",
                  pos: "noun",
                  meaning: "pearls (feminine plural; poetic metaphor for white teeth)",
                },
              ],
              grammarNote: "Petrarchan poetic conceit where 'perle' (pearls) represents sparkling white teeth behind parted lips. 'Mostran' is apocopated from 'mostrano'.",
            },
            {
              id: "a1_s2_c109_l3",
              original: "belle a vederle,",
              literal: "beautiful to behold,",
              tokens: [
                {
                  word: "belle",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / lovely (feminine plural)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "vederle",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "to see them / behold them (infinitive vedere + clitic pronoun le)",
                },
              ],
              grammarNote: "Infinitive construction with enclitic direct object pronoun 'le' (referring to 'labbra'): 'vederle' (to see them). 'Belle a vederle' balances aesthetics with romantic passion.",
            },
            {
              id: "a1_s2_c109_l4",
              original: "dolci a baciarle!",
              literal: "sweet to kiss!",
              tokens: [
                {
                  word: "dolci",
                  lemma: "dolce",
                  pos: "adjective",
                  meaning: "sweet (plural)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "baciarle",
                  lemma: "baciare",
                  pos: "verb",
                  meaning: "to kiss them (infinitive baciare + clitic pronoun le)",
                },
              ],
              grammarNote: "Syntactic twin to the preceding line ('belle a vederle' / 'dolci a baciarle'), moving from sight to touch. The enclitic '-le' refers back to 'labbra'.",
            },
          ],
        },
        {
          id: "a1_s2_c110",
          speaker: "Fenton",
          stageDirection: "tenta di abbracciarla",
          stageDirectionTranslation: "tries to embrace her",
          lines: [
            {
              id: "a1_s2_c110_l1",
              original: "Labbra leggiadre!",
              literal: "Graceful lips!",
              tokens: [
                {
                  word: "Labbra",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lips (irregular feminine plural of masculine noun labbro)",
                },
                {
                  word: "leggiadre",
                  lemma: "leggiadro",
                  pos: "adjective",
                  meaning: "graceful / charming / lovely / delicate (feminine plural)",
                },
              ],
              grammarNote: "Fenton's rapturous exclamation. 'Leggiadro' is a quintessentially lyrical Italian adjective evoking elegance, courtly beauty, and lightness.",
            },
          ],
        },
        {
          id: "a1_s2_c111",
          speaker: "Nannetta",
          stageDirection: "difendendosi e guardandosi attorno",
          stageDirectionTranslation: "defending himself and looking around",
          lines: [
            {
              id: "a1_s2_c111_l1",
              original: "Man malandrine!",
              literal: "Roguish hands!",
              tokens: [
                {
                  word: "Man",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hands (poetic apocope of feminine plural mani)",
                },
                {
                  word: "malandrine",
                  lemma: "malandrino",
                  pos: "adjective",
                  meaning: "roguish / thievish / mischievous (feminine plural)",
                },
              ],
              grammarNote: "Nannetta gently rebukes Fenton as his hands wander. 'Man' is the poetic apocope of feminine plural 'mani'. 'Malandrine' means roguish, crafty, or thieving.",
            },
          ],
        },
        {
          id: "a1_s2_c112",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c112_l1",
              original: "Ciglia assassine!",
              literal: "Lethal eyelashes!",
              tokens: [
                {
                  word: "Ciglia",
                  lemma: "ciglio",
                  pos: "noun",
                  meaning: "eyelashes / brows (irregular feminine plural of masculine noun ciglio)",
                },
                {
                  word: "assassine",
                  lemma: "assassino",
                  pos: "adjective",
                  meaning: "murderous / lethal / heart-slaying (feminine plural)",
                },
              ],
              grammarNote: "Fenton playfully invokes the Italian lyric trope of the lady's glance as a deadly weapon that slays the lover's heart. 'Ciglia' is an irregular feminine plural noun.",
            },
            {
              id: "a1_s2_c112_l2",
              original: "Pupille ladre!",
              literal: "Thievish pupils!",
              tokens: [
                {
                  word: "Pupille",
                  lemma: "pupilla",
                  pos: "noun",
                  meaning: "pupils / eyes (feminine plural)",
                },
                {
                  word: "ladre",
                  lemma: "ladro",
                  pos: "adjective",
                  meaning: "thievish / stealing (feminine plural)",
                },
              ],
              grammarNote: "Continuing the poetic duel of compliments: Nannetta's eyes steal his peace and heart. 'Pupille ladre' pairs rhythmically with 'ciglia assassine'.",
            },
            {
              id: "a1_s2_c112_l3",
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
          id: "a1_s2_c113",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c113_l1",
              original: "Imprudente.",
              literal: "Reckless boy.",
              tokens: [
                {
                  word: "Imprudente",
                  lemma: "imprudente",
                  pos: "adjective",
                  meaning: "imprudent / reckless / rash",
                },
                {
                  word: "imprudente",
                  lemma: "imprudente",
                  pos: "noun",
                  meaning: "reckless one / rash person",
                },
              ],
              grammarNote: "Nannetta chides Fenton for his boldness in an open garden where her father could appear at any moment. Her tone is affectionate rather than angry.",
            },
          ],
        },
        {
          id: "a1_s2_c114",
          speaker: "Nannetta",
          stageDirection: "Fenton fa per baciarla ancora",
          stageDirectionTranslation: "Fenton makes to kiss her again",
          lines: [
          ],
        },
        {
          id: "a1_s2_c115",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c115_l1",
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
          id: "a1_s2_c116",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c116_l1",
              original: "Sì... due baci.",
              literal: "Yes... two kisses.",
              tokens: [
                {
                  word: "Sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two (cardinal numeral)",
                },
                {
                  word: "baci",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kisses (masculine plural)",
                },
              ],
              grammarNote: "Fenton insists on his prize ('due baci'), repeating his melodic plea with youthful persistence.",
            },
          ],
        },
        {
          id: "a1_s2_c117",
          speaker: "Nannetta",
          stageDirection: "si svincola",
          stageDirectionTranslation: "she slips free",
          lines: [
            {
              id: "a1_s2_c117_l1",
              original: "Basta.",
              literal: "Enough.",
              tokens: [
                {
                  word: "Basta",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "it suffices / that is enough (3rd person singular present)",
                },
                {
                  word: "bastare",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "to suffice / be enough",
                },
              ],
              grammarNote: "Third-person singular present of impersonal verb 'bastare', used as an imperative command: 'That's enough!'",
            },
          ],
        },
        {
          id: "a1_s2_c118",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c118_l1",
              original: "Mi piaci",
              literal: "I like you",
              tokens: [
                {
                  word: "Mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "to me (indirect object clitic pronoun)",
                },
                {
                  word: "piaci",
                  lemma: "piacere",
                  pos: "verb",
                  meaning: "you please / are pleasing (2nd person singular present)",
                },
              ],
              grammarNote: "Italian indirect construction 'mi piaci' (literally 'you are pleasing to me', meaning 'I like you / I adore you'). The thought completes in the next line ('tanto!').",
            },
            {
              id: "a1_s2_c118_l2",
              original: "tanto!",
              literal: "so much!",
              tokens: [
                {
                  word: "tanto",
                  lemma: "tanto",
                  pos: "adverb",
                  meaning: "so much / greatly",
                },
                {
                  word: "molto",
                  lemma: "molto",
                  pos: "adverb",
                  meaning: "very / much",
                },
              ],
              grammarNote: "Adverb of quantity modifying 'mi piaci' ('I like you so much!'). Lowercase reflects continuation from the previous line.",
            },
          ],
        },
        {
          id: "a1_s2_c119",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c119_l1",
              original: "Vien gente.",
              literal: "People are coming.",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / is coming (apocopated 3rd person singular present of venire)",
                },
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / folk (collective feminine singular noun)",
                },
              ],
              grammarNote: "Nannetta senses footsteps approaching. 'Gente' is a collective feminine singular noun taking singular verb 'vien' (apocope of 'viene').",
            },
          ],
        },
        {
          id: "a1_s2_c120",
          speaker: "Nannetta",
          stageDirection: "si allontanano l'una dall'altro, mentre ritornano le donne",
          stageDirectionTranslation: "they step away from each other as the women return",
          lines: [
          ],
        },
        {
          id: "a1_s2_c121",
          speaker: "Fenton",
          stageDirection: "cantando allontanandosi",
          stageDirectionTranslation: "singing as he moves away",
          lines: [
            {
              id: "a1_s2_c121_l1",
              original: "Bocca baciata non perde ventura.",
              literal: "A kissed mouth does not lose its good fortune.",
              tokens: [
                {
                  word: "Bocca",
                  lemma: "bocca",
                  pos: "noun",
                  meaning: "mouth",
                },
                {
                  word: "baciata",
                  lemma: "baciare",
                  pos: "adjective",
                  meaning: "kissed (past participle used as adj.)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "perde",
                  lemma: "perdere",
                  pos: "verb",
                  meaning: "loses (3rd sing. pres.)",
                },
                {
                  word: "ventura",
                  lemma: "ventura",
                  pos: "noun",
                  meaning: "fortune / luck / fresh charm",
                },
              ],
              grammarNote: "Fenton quotes the first half of Boccaccio's famous aphorism from Decameron (II, 7): 'Bocca baciata non perde ventura...'",
            },
          ],
        },
        {
          id: "a1_s2_c122",
          speaker: "Nannetta",
          stageDirection: "continuando il canto di Fenton, avvicinandosi alle altre donne",
          stageDirectionTranslation: "continuing Fenton's song, approaching the other women",
          lines: [
            {
              id: "a1_s2_c122_l1",
              original: "Anzi rinnova come fa la luna.",
              literal: "Rather it renews itself as does the moon.",
              tokens: [
                {
                  word: "Anzi",
                  lemma: "anzi",
                  pos: "conjunction",
                  meaning: "on the contrary / rather",
                },
                {
                  word: "rinnova",
                  lemma: "rinnovare",
                  pos: "verb",
                  meaning: "renews / refreshes (3rd sing. pres.)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as / like",
                },
                {
                  word: "fa",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "does (3rd sing. pres.)",
                },
                {
                  word: "luna",
                  lemma: "luna",
                  pos: "noun",
                  meaning: "moon",
                },
              ],
              grammarNote: "Nannetta enters singing offstage to complete Boccaccio's proverb ('...anzi rinnuova come fa la luna'), playfully asserting that kisses only enhance youthful beauty.",
            },
          ],
        },
        {
          id: "a1_s2_c123",
          speaker: "Nannetta",
          stageDirection: "Fenton si nasconde dietro gli alberi del fondo",
          stageDirectionTranslation: "Fenton hides behind the trees in the background",
          lines: [
          ],
        },
        {
          id: "a1_s2_c124",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c124_l1",
              original: "Falstaff m'ha canzonata.",
              literal: "Falstaff has made a fool of me.",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
                {
                  word: "m'",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (elided direct object clitic pronoun)",
                },
                {
                  word: "ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "has (auxiliary 3rd person singular)",
                },
                {
                  word: "canzonata",
                  lemma: "canzonare",
                  pos: "verb",
                  meaning: "mocked / ridiculed / made sport of (feminine singular past participle)",
                },
              ],
              grammarNote: "Alice re-enters, indignant at Falstaff's insolent presumption. 'Canzonare' means to mock, ridicule, or dupe. The past participle 'canzonata' agrees in feminine singular with the preceding direct object clitic 'm''.",
            },
          ],
        },
        {
          id: "a1_s2_c125",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c125_l1",
              original: "Merita un gran castigo.",
              literal: "He deserves a great punishment.",
              tokens: [
                {
                  word: "Merita",
                  lemma: "meritare",
                  pos: "verb",
                  meaning: "deserves / merits (3rd person singular present)",
                },
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / big (apocopated form of grande)",
                },
                {
                  word: "castigo",
                  lemma: "castigo",
                  pos: "noun",
                  meaning: "punishment / chastisement",
                },
              ],
              grammarNote: "Meg agrees wholeheartedly. Falstaff's identical letters insulted both women's intelligence and dignity, requiring collective retribution.",
            },
          ],
        },
        {
          id: "a1_s2_c126",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c126_l1",
              original: "Se gli scrivessi un rigo?...",
              literal: "What if I wrote him a line?...",
              tokens: [
                {
                  word: "gli",
                  lemma: "gli",
                  pos: "pronoun",
                  meaning: "to him (indirect object clitic pronoun)",
                },
                {
                  word: "scrivessi",
                  lemma: "scrivere",
                  pos: "verb",
                  meaning: "I wrote / were to write (1st person singular imperfect subjunctive)",
                },
                {
                  word: "rigo",
                  lemma: "rigo",
                  pos: "noun",
                  meaning: "line (of writing) / short note",
                },
              ],
              grammarNote: "Alice ponders baiting the trap with a letter. Imperfect subjunctive 'scrivessi' introduced by 'se' expresses a tentative suggestion ('What if I were to write him a line?').",
            },
          ],
        },
        {
          id: "a1_s2_c127",
          speaker: "Nannetta",
          stageDirection: "riunendosi al crocchio con disinvoltura",
          stageDirectionTranslation: "rejoining the circle nonchalantly",
          lines: [
            {
              id: "a1_s2_c127_l1",
              original: "Val meglio un'ambasciata.",
              literal: "An embassy is worth more.",
              tokens: [
                {
                  word: "Val",
                  lemma: "valere",
                  pos: "verb",
                  meaning: "is worth / avails (apocopated 3rd person singular present of valere)",
                },
                {
                  word: "meglio",
                  lemma: "meglio",
                  pos: "adverb",
                  meaning: "better / more",
                },
                {
                  word: "ambasciata",
                  lemma: "ambasciata",
                  pos: "noun",
                  meaning: "embassy / oral message / errand",
                },
              ],
              grammarNote: "Nannetta astutely suggests an oral message via an emissary instead of a written note. 'Val meglio' is an idiomatic construction meaning 'it is better / more effective'. An oral message leaves no physical paper trail.",
            },
          ],
        },
        {
          id: "a1_s2_c128",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c128_l1",
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
          id: "a1_s2_c129",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c129_l1",
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
          id: "a1_s2_c130",
          speaker: "Alice Ford",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a1_s2_c130_l1",
              original: "Da quel brigante",
              literal: "To that scoundrel",
              tokens: [
                {
                  word: "Da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "to / at (preposition denoting movement towards a person)",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative adjective)",
                },
                {
                  word: "brigante",
                  lemma: "brigante",
                  pos: "noun",
                  meaning: "brigand / rogue / scoundrel",
                },
              ],
              grammarNote: "Alice turns to Mistress Quickly. Preposition 'da' with a person denotes going to someone's presence ('andare da qualcuno'). 'Brigante' characterizes Falstaff as an unscrupulous outlaw.",
            },
            {
              id: "a1_s2_c130_l2",
              original: "tu andrai. Lo adeschi all'offa",
              literal: "you shall go. You entice him with the bait",
              tokens: [
                {
                  word: "andrai",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "you will go (2nd person singular future)",
                },
                {
                  word: "adeschi",
                  lemma: "adescare",
                  pos: "verb",
                  meaning: "you entice / lure / bait (present subjunctive / imperative 2nd person singular)",
                },
                {
                  word: "offa",
                  lemma: "offa",
                  pos: "noun",
                  meaning: "morsel / bait / sop / bribe",
                },
              ],
              grammarNote: "Alice commissions Quickly as their ambassador. 'Adescare' means to lure or hook with bait. 'Offa' is a classical literary word (from Latin 'offa', the honey-cake thrown to pacify Cerberus in Virgil and Dante), meaning a tempting bait or bribe.",
            },
            {
              id: "a1_s2_c130_l3",
              original: "d'un ritrovo galante",
              literal: "of a gallant rendezvous",
              tokens: [
                {
                  word: "ritrovo",
                  lemma: "ritrovo",
                  pos: "noun",
                  meaning: "rendezvous / meeting / tryst",
                },
                {
                  word: "galante",
                  lemma: "galante",
                  pos: "adjective",
                  meaning: "gallant / amorous / courtly",
                },
              ],
              grammarNote: "'Ritrovo galante' designates an amorous rendezvous or secret tryst, tailored to exploit Falstaff's vanity and lust.",
            },
            {
              id: "a1_s2_c130_l4",
              original: "con me.",
              literal: "with me.",
              tokens: [
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "me",
                  lemma: "me",
                  pos: "pronoun",
                  meaning: "me (disjunctive / tonic 1st person singular pronoun)",
                },
              ],
              grammarNote: "Completes the invitation: 'un ritrovo galante con me'. Alice fearlessly offers herself as the decoy for the trap.",
            },
          ],
        },
        {
          id: "a1_s2_c131",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c131_l1",
              original: "Questa è gaglioffa!",
              literal: "This is a knavish trick!",
              tokens: [
                {
                  word: "Questa",
                  lemma: "questo",
                  pos: "pronoun",
                  meaning: "this / this thing (demonstrative pronoun, feminine singular)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
                {
                  word: "gaglioffa",
                  lemma: "gaglioffo",
                  pos: "adjective",
                  meaning: "knavish / roguish / scurvy / comical (feminine singular)",
                },
              ],
              grammarNote: "Mistress Quickly laughs in delight at the ruse. 'Gaglioffo' is a rich vernacular term meaning roguish, knavish, buffoonish, or rascal-like. Quickly loves the sheer cunning of the plot.",
            },
          ],
        },
        {
          id: "a1_s2_c132",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c132_l1",
              original: "Che bella burla!",
              literal: "What a splendid prank!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative adjective)",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "splendid / fine / beautiful (feminine singular)",
                },
                {
                  word: "burla",
                  lemma: "burla",
                  pos: "noun",
                  meaning: "prank / practical joke / jest",
                },
              ],
              grammarNote: "Nannetta cheers the plan. 'Burla' is the classic Italian literary term for a practical joke, directly evoking the merry spirit of Boccaccian novelle.",
            },
          ],
        },
        {
          id: "a1_s2_c133",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c133_l1",
              original: "Prima,",
              literal: "First,",
              tokens: [
                {
                  word: "Prima",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / first of all / beforehand",
                },
                {
                  word: "dapprima",
                  lemma: "dapprima",
                  pos: "adverb",
                  meaning: "initially / at first",
                },
              ],
              grammarNote: "Alice outlines the two steps of their plan: first stroke his ego, then humble him.",
            },
            {
              id: "a1_s2_c133_l2",
              original: "per attirarlo a noi,",
              literal: "to attract him to us,",
              tokens: [
                {
                  word: "per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "in order to / for",
                },
                {
                  word: "attirarlo",
                  lemma: "attirare",
                  pos: "verb",
                  meaning: "to attract him / lure him (infinitive attirare + enclitic pronoun lo)",
                },
                {
                  word: "noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "us (disjunctive pronoun)",
                },
              ],
              grammarNote: "Final infinitive clause of purpose: 'per attirarlo a noi'. The enclitic direct object pronoun '-lo' refers to Falstaff.",
            },
            {
              id: "a1_s2_c133_l3",
              original: "lo lusinghiamo, e poi",
              literal: "we flatter him, and then",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic pronoun)",
                },
                {
                  word: "lusinghiamo",
                  lemma: "lusingare",
                  pos: "verb",
                  meaning: "we flatter / entice / cajole (1st person plural present)",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
              ],
              grammarNote: "Alice recognizes that Falstaff's supreme vanity makes flattery ('lusingare') the perfect trap.",
            },
            {
              id: "a1_s2_c133_l4",
              original: "gliele cantiamo in rima.",
              literal: "we give him a piece of our mind in rhyme.",
              tokens: [
                {
                  word: "gliele",
                  lemma: "gliele",
                  pos: "pronoun",
                  meaning: "them to him (combined clitic pronoun: indirect gli + feminine plural direct le)",
                },
                {
                  word: "cantiamo",
                  lemma: "cantare",
                  pos: "verb",
                  meaning: "we tell / sing (1st person plural present)",
                },
                {
                  word: "in rima",
                  lemma: "in rima",
                  pos: "idiom",
                  meaning: "in rhyme / explicitly / thoroughly / in plain terms",
                },
              ],
              grammarNote: "Vivid Italian idiom 'cantarle a qualcuno' (literally 'to sing them to someone', meaning to speak frankly or tell someone off bluntly). Combined with 'in rima', it means to deliver a sharp rebuke in exquisite poetic form.",
            },
          ],
        },
        {
          id: "a1_s2_c134",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c134_l1",
              original: "Non merita riguardo.",
              literal: "He deserves no consideration.",
              tokens: [
                {
                  word: "merita",
                  lemma: "meritare",
                  pos: "verb",
                  meaning: "deserves / merits (3rd person singular present)",
                },
                {
                  word: "riguardo",
                  lemma: "riguardo",
                  pos: "noun",
                  meaning: "consideration / deference / respect",
                },
              ],
              grammarNote: "Mistress Quickly declares that Falstaff's crude insolence forfeits any claim to polite deference or chivalric respect ('riguardo').",
            },
          ],
        },
        {
          id: "a1_s2_c135",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c135_l1",
              original: "È un bove.",
              literal: "He is an ox.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd person singular present)",
                },
                {
                  word: "bove",
                  lemma: "bove",
                  pos: "noun",
                  meaning: "ox / castrated bull (poetic/archaic variant of bue)",
                },
              ],
              grammarNote: "Alice's blunt insult. 'Bove' evokes heavy, clumsy stupidity, and pointedly alludes to a horned animal, mocking the horn motif that Ford fears.",
            },
          ],
        },
        {
          id: "a1_s2_c136",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c136_l1",
              original: "È un uomo senza fede.",
              literal: "He is a man without faith.",
              tokens: [
                {
                  word: "uomo",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man",
                },
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "fede",
                  lemma: "fede",
                  pos: "noun",
                  meaning: "faith / loyalty / honor",
                },
              ],
              grammarNote: "Meg Page condemns Falstaff's utter lack of integrity ('senza fede'), having sent the identical love declaration word-for-word to two married women at once.",
            },
          ],
        },
        {
          id: "a1_s2_c137",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c137_l1",
              original: "È un monte di lardo.",
              literal: "He is a mountain of lard.",
              tokens: [
                {
                  word: "monte",
                  lemma: "monte",
                  pos: "noun",
                  meaning: "mountain / heap",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "lardo",
                  lemma: "lardo",
                  pos: "noun",
                  meaning: "lard / pork fat",
                },
              ],
              grammarNote: "Alice translates Prince Hal's classic insults from Shakespeare's Henry IV Part 1 into colorful Italian: 'a mountain of mummy' / 'huge hill of flesh' -> 'un monte di lardo'.",
            },
          ],
        },
        {
          id: "a1_s2_c138",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c138_l1",
              original: "Non merita clemenza.",
              literal: "He deserves no mercy.",
              tokens: [
                {
                  word: "merita",
                  lemma: "meritare",
                  pos: "verb",
                  meaning: "deserves / merits (3rd person singular present)",
                },
                {
                  word: "clemenza",
                  lemma: "clemenza",
                  pos: "noun",
                  meaning: "clemency / mercy / leniency",
                },
              ],
              grammarNote: "Meg reinforces the mock-judicial condemnation of Falstaff. 'Clemenza' is an elevated Latinate noun emphasizing that their prank will be merciless.",
            },
          ],
        },
        {
          id: "a1_s2_c139",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c139_l1",
              original: "È un ghiotton che scialacqua",
              literal: "He is a glutton who squanders",
              tokens: [
                {
                  word: "ghiotton",
                  lemma: "ghiottone",
                  pos: "noun",
                  meaning: "glutton / gourmand (apocopated form of ghiottone)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "who / that (relative pronoun)",
                },
                {
                  word: "scialacqua",
                  lemma: "scialacquare",
                  pos: "verb",
                  meaning: "squanders / dissipates / wastes lavishly (3rd person singular present)",
                },
              ],
              grammarNote: "Alice highlights Falstaff's voracious appetite. 'Ghiotton' (apocopated from 'ghiottone') means glutton; 'scialacquare' means to spend prodigally or waste assets on luxurious indulgence.",
            },
            {
              id: "a1_s2_c139_l2",
              original: "tutto il suo aver nel cuoco.",
              literal: "all his wealth on the cook.",
              tokens: [
                {
                  word: "tutto",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all / entire",
                },
                {
                  word: "aver",
                  lemma: "avere",
                  pos: "noun",
                  meaning: "wealth / assets / possessions (substantivized infinitive of avere)",
                },
                {
                  word: "cuoco",
                  lemma: "cuoco",
                  pos: "noun",
                  meaning: "cook / chef",
                },
              ],
              grammarNote: "Substantivized infinitive 'aver' (apocope of 'avere') denotes accumulated wealth or substance ('his all'). Alice scoffs that every penny he possesses is consumed by his belly.",
            },
          ],
        },
        {
          id: "a1_s2_c140",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c140_l1",
              original: "Lo tufferem nell'acqua.",
              literal: "We will dunk him into the water.",
              tokens: [
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic pronoun)",
                },
                {
                  word: "tufferem",
                  lemma: "tuffare",
                  pos: "verb",
                  meaning: "we will plunge / dunk (poetic apocope of tufferemo)",
                },
                {
                  word: "acqua",
                  lemma: "acqua",
                  pos: "noun",
                  meaning: "water",
                },
              ],
              grammarNote: "Nannetta gleefully anticipates the climax of Act 2: pitching Falstaff out the window in the laundry basket into the river Thames! 'Tufferem' is the poetic truncation of future tense 'tufferemo'.",
            },
          ],
        },
        {
          id: "a1_s2_c141",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c141_l1",
              original: "Lo arrostiremo al fuoco.",
              literal: "We will roast him at the fire.",
              tokens: [
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic pronoun)",
                },
                {
                  word: "arrostiremo",
                  lemma: "arrostire",
                  pos: "verb",
                  meaning: "we will roast (1st person plural future)",
                },
                {
                  word: "fuoco",
                  lemma: "fuoco",
                  pos: "noun",
                  meaning: "fire",
                },
              ],
              grammarNote: "Alice pairs Nannetta's water punishment with a culinary fire metaphor ('arrostiremo al fuoco'), playfully suggesting that the fat knight will be cooked like his own dinners.",
            },
          ],
        },
        {
          id: "a1_s2_c142",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c142_l1",
              original: "Che gioia!",
              literal: "What joy!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what / what a (exclamative adjective)",
                },
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy / delight",
                },
              ],
              grammarNote: "Nannetta's exuberant exclamation of youthful mirth at the prospect of humiliating Falstaff.",
            },
          ],
        },
        {
          id: "a1_s2_c143",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c143_l1",
              original: "Che allegria!",
              literal: "What merriment!",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what (exclamative)",
                },
                {
                  word: "allegria",
                  lemma: "allegria",
                  pos: "noun",
                  meaning: "merriment / gaiety / joy",
                },
              ],
              grammarNote: "Quickly joins the chorus of glee.",
            },
          ],
        },
        {
          id: "a1_s2_c144",
          speaker: "Meg Page",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a1_s2_c144_l1",
              original: "Procaccia di far bene",
              literal: "Take care to do well",
              tokens: [
                {
                  word: "Procaccia",
                  lemma: "procacciare",
                  pos: "verb",
                  meaning: "take care / strive / endeavor (2nd person singular imperative)",
                },
                {
                  word: "far",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to do / make / perform (apocopated infinitive of fare)",
                },
                {
                  word: "bene",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well",
                },
              ],
              grammarNote: "Meg cautions Quickly to play her role convincingly. 'Procacciare di' + infinitive is a formal, elegant Italian expression meaning to take diligence or strive to accomplish a task.",
            },
            {
              id: "a1_s2_c144_l2",
              original: "la tua parte.",
              literal: "your part.",
              tokens: [
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (feminine singular possessive adjective)",
                },
                {
                  word: "parte",
                  lemma: "parte",
                  pos: "noun",
                  meaning: "part / role",
                },
              ],
              grammarNote: "Theatrical language ('la tua parte': your role) underscoring the comedy's play-within-a-play dynamics. Lowercase maintains syntax from the preceding line.",
            },
          ],
        },
        {
          id: "a1_s2_c145",
          speaker: "Meg Page",
          stageDirection: "accorgendosi di Fenton che s'aggira nel fondo",
          stageDirectionTranslation: "noticing Fenton wandering in the background",
          lines: [
          ],
        },
        {
          id: "a1_s2_c146",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c146_l1",
              original: "Chi viene?",
              literal: "Who is coming?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who (interrogative pronoun)",
                },
                {
                  word: "viene",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / is coming (3rd person singular present of venire)",
                },
              ],
              grammarNote: "Mistress Quickly sounds the alarm upon hearing footsteps approaching again in the garden.",
            },
          ],
        },
        {
          id: "a1_s2_c147",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c147_l1",
              original: "Là c'è qualcun che spia.",
              literal: "Over there is someone spying.",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there / over there",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (clitic ci + è)",
                },
                {
                  word: "qualcun",
                  lemma: "qualcuno",
                  pos: "pronoun",
                  meaning: "someone (apocopated form of qualcuno)",
                },
                {
                  word: "spia",
                  lemma: "spiare",
                  pos: "verb",
                  meaning: "spies / is spying (3rd person singular present)",
                },
              ],
              grammarNote: "Meg catches sight of the men returning. 'C'è qualcun che spia' (there is someone spying) creates rapid dramatic suspense, prompting another quick exit.",
            },
            {
              id: "a1_s2_c147_l2",
              original: "Escono rapidamente da destra Alice, Meg, Quickly. Nannetta resta,",
              literal: "Alice, Meg, and Quickly rapidly exit from the right. Nannetta remains,",
              tokens: [
                {
                  word: "Escono",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "they exit / go out (3rd person plural present of uscire)",
                },
                {
                  word: "rapidamente",
                  lemma: "rapidamente",
                  pos: "adverb",
                  meaning: "rapidly / swiftly",
                },
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right (stage direction)",
                },
                {
                  word: "resta",
                  lemma: "restare",
                  pos: "verb",
                  meaning: "remains / stays (3rd person singular present)",
                },
              ],
              grammarNote: "Stage direction marking the quick exit of Alice, Meg, and Quickly, intentionally leaving Nannetta behind in the Windsor garden once again.",
            },
            {
              id: "a1_s2_c147_l3",
              original: "Fenton le torna accanto.",
              literal: "Fenton returns beside her.",
              tokens: [
                {
                  word: "torna",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "returns (3rd person singular present)",
                },
                {
                  word: "accanto",
                  lemma: "accanto",
                  pos: "adverb",
                  meaning: "beside / next to",
                },
                {
                  word: "le",
                  lemma: "le",
                  pos: "pronoun",
                  meaning: "to her (dative clitic pronoun)",
                },
              ],
              grammarNote: "Stage direction noting Fenton instantly reappearing at Nannetta's side. The clitic 'le' functions as a dative of proximity with 'accanto' ('beside her').",
            },
          ],
        },
        {
          id: "a1_s2_c148",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c148_l1",
              original: "Torno all'assalto.",
              literal: "I return to the assault.",
              tokens: [
                {
                  word: "Torno",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "I return (1st person singular present)",
                },
                {
                  word: "all'",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + l')",
                },
                {
                  word: "assalto",
                  lemma: "assalto",
                  pos: "noun",
                  meaning: "assault / attack / fencing bout",
                },
              ],
              grammarNote: "Fenton reopens their flirtatious duel with a fencing metaphor. In Renaissance chivalric poetry, the assault ('assalto') is an established trope for romantic pursuit.",
            },
          ],
        },
        {
          id: "a1_s2_c149",
          speaker: "Nannetta",
          stageDirection: "come sfidandolo",
          stageDirectionTranslation: "as if defying him",
          lines: [
            {
              id: "a1_s2_c149_l1",
              original: "Torno alla gara.",
              literal: "I return to the contest.",
              tokens: [
                {
                  word: "Torno",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "I return (1st person singular present)",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + la)",
                },
                {
                  word: "gara",
                  lemma: "gara",
                  pos: "noun",
                  meaning: "contest / match / competition",
                },
              ],
              grammarNote: "Nannetta matches Fenton's syntax and meter, framing their exchange as a playful 'gara' (contest of wits and kisses).",
            },
            {
              id: "a1_s2_c149_l2",
              original: "Ferisci!",
              literal: "Strike!",
              tokens: [
                {
                  word: "Ferisci",
                  lemma: "ferire",
                  pos: "verb",
                  meaning: "strike! / wound! (2nd person singular imperative)",
                },
                {
                  word: "ferire",
                  lemma: "ferire",
                  pos: "verb",
                  meaning: "to wound / strike / pierce",
                },
              ],
              grammarNote: "Second-person singular imperative of 'ferire' (to strike or wound). Nannetta issues a spirited fencing challenge to Fenton.",
            },
          ],
        },
        {
          id: "a1_s2_c150",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c150_l1",
              original: "Para!",
              literal: "Parry!",
              tokens: [
                {
                  word: "Para",
                  lemma: "parare",
                  pos: "verb",
                  meaning: "parry! / ward off! (2nd person singular imperative)",
                },
                {
                  word: "parare",
                  lemma: "parare",
                  pos: "verb",
                  meaning: "to parry / ward off / block",
                },
              ],
              grammarNote: "Second-person singular imperative of 'parare' (to parry in fencing). Fenton lunges in for a kiss, daring her to defend herself.",
            },
          ],
        },
        {
          id: "a1_s2_c151",
          speaker: "Fenton",
          stageDirection: "si slancia per baciarla: Nannetta si ripara il viso con una mano che Fenton bacia e vorrebbe ribaciare; ma Nannetta la solleva più alta che può e Fenton ritenta invano di raggiungerla co' le labbra",
          stageDirectionTranslation: "he lunges to kiss her; Nannetta shields her face with a hand which Fenton kisses and wants to kiss again; but Nannetta raises it as high as she can and Fenton tries in vain to reach it with his lips",
          lines: [
          ],
        },
        {
          id: "a1_s2_c152",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c152_l1",
              original: "La mira è in alto.",
              literal: "The aim is high.",
              tokens: [
                {
                  word: "mira",
                  lemma: "mira",
                  pos: "noun",
                  meaning: "aim / sight / target",
                },
                {
                  word: "in alto",
                  lemma: "in alto",
                  pos: "idiom",
                  meaning: "high up / aloft / aimed high",
                },
              ],
              grammarNote: "Nannetta dodges with athletic grace: 'La mira è in alto' (the aim is high / aiming above the target), simultaneously hinting at the lofty purity of true love.",
            },
            {
              id: "a1_s2_c152_l2",
              original: "L'amor è un agile",
              literal: "Love is a nimble",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (poetic apocope of amore)",
                },
                {
                  word: "agile",
                  lemma: "agile",
                  pos: "adjective",
                  meaning: "nimble / agile / quick / graceful",
                },
              ],
              grammarNote: "Boito's lyric poetry sets this philosophical definition of love. 'Amor' is the poetic apocope of 'amore'. The metaphor continues into the following lines.",
            },
            {
              id: "a1_s2_c152_l3",
              original: "torneo, sua corte",
              literal: "tournament, its court",
              tokens: [
                {
                  word: "torneo",
                  lemma: "torneo",
                  pos: "noun",
                  meaning: "tournament / joust",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "its / his (possessive adjective, feminine singular)",
                },
                {
                  word: "corte",
                  lemma: "corte",
                  pos: "noun",
                  meaning: "court (tribunal or royal retinue)",
                },
              ],
              grammarNote: "Love is cast as a medieval tournament governed by a chivalric court of love ('sua corte'). Lowercase opening maintains the verse structure.",
            },
            {
              id: "a1_s2_c152_l4",
              original: "vuol che il più fragile",
              literal: "wills that the most fragile",
              tokens: [
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wills / wants (apocopated 3rd person singular present of volere)",
                },
                {
                  word: "fragile",
                  lemma: "fragile",
                  pos: "adjective",
                  meaning: "fragile / frail / delicate",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / most (superlative marker)",
                },
              ],
              grammarNote: "'Vuol che' introduces a subjunctive clause of chivalric ordinance. 'Il più fragile' represents the delicate maiden who nevertheless holds dominion in love.",
            },
            {
              id: "a1_s2_c152_l5",
              original: "vinca il più forte.",
              literal: "vanquish the strongest.",
              tokens: [
                {
                  word: "vinca",
                  lemma: "vincere",
                  pos: "verb",
                  meaning: "vanquish / win / conquer (3rd person singular present subjunctive)",
                },
                {
                  word: "forte",
                  lemma: "forte",
                  pos: "adjective",
                  meaning: "strong / strongest",
                },
              ],
              grammarNote: "Present subjunctive 'vinca' governed by 'vuol che'. Boito crafts an exquisite Petrarchan paradox: in the court of love, the frailest woman vanquishes the strongest man.",
            },
          ],
        },
        {
          id: "a1_s2_c153",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c153_l1",
              original: "M'armo, e ti guardo.",
              literal: "I arm myself, and look upon you.",
              tokens: [
                {
                  word: "M'armo",
                  lemma: "armarsi",
                  pos: "verb",
                  meaning: "I arm myself (reflexive verb 1st person singular present)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (direct object clitic pronoun)",
                },
                {
                  word: "guardo",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "I look at / gaze upon (1st person singular present)",
                },
              ],
              grammarNote: "Fenton accepts the challenge of the tournament. 'Armarsi' is used reflexively ('m'armo': I arm myself). Direct object clitic 'ti' precedes 'guardo' (I look at you).",
            },
            {
              id: "a1_s2_c153_l2",
              original: "T'aspetto al varco.",
              literal: "I await you at the pass.",
              tokens: [
                {
                  word: "T'aspetto",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "I await you (direct object clitic ti + aspetto)",
                },
                {
                  word: "varco",
                  lemma: "varco",
                  pos: "noun",
                  meaning: "pass / passage / gateway",
                },
                {
                  word: "aspettare al varco",
                  lemma: "aspettare al varco",
                  pos: "idiom",
                  meaning: "to wait in ambush / await someone at a decisive pass",
                },
              ],
              grammarNote: "Idiomatic expression 'aspettare al varco' (literally to wait at a narrow pass or crossing), meaning to lie in wait for someone at the crucial juncture to catch them.",
            },
          ],
        },
        {
          id: "a1_s2_c154",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c154_l1",
              original: "Il labbro è l'arco.",
              literal: "The lip is the bow.",
              tokens: [
                {
                  word: "labbro",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lip",
                },
                {
                  word: "arco",
                  lemma: "arco",
                  pos: "noun",
                  meaning: "bow (archery / Cupid's bow)",
                },
              ],
              grammarNote: "Classical emblem of Cupid's archery: the curving lip forms the bow ('l'arco') poised to loose the shaft of love.",
            },
          ],
        },
        {
          id: "a1_s2_c155",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c155_l1",
              original: "E il bacio è il dardo.",
              literal: "And the kiss is the dart.",
              tokens: [
                {
                  word: "bacio",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kiss",
                },
                {
                  word: "dardo",
                  lemma: "dardo",
                  pos: "noun",
                  meaning: "dart / arrow / bolt",
                },
              ],
              grammarNote: "Fenton completes the emblematic conceit: if the curved lip is the bow, the kiss itself is the arrow ('il dardo') that strikes home.",
            },
            {
              id: "a1_s2_c155_l2",
              original: "Bada! la freccia",
              literal: "Watch out! The arrow",
              tokens: [
                {
                  word: "Bada",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "watch out / beware (imperative 2nd sing.)",
                },
                {
                  word: "la",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine singular definite article)",
                },
                {
                  word: "freccia",
                  lemma: "freccia",
                  pos: "noun",
                  meaning: "arrow / dart",
                },
              ],
              grammarNote: "Fenton playfully warns Nannetta of his oncoming kiss, extending the lyrical archery duel ('Il labbro è l'arco / E il bacio è il dardo'). Verdi sets their intimate love duet in soaring, flexible lyricism that sparkles within the surrounding comic intrigue.",
            },
            {
              id: "a1_s2_c155_l3",
              original: "fatal già scocca",
              literal: "fatal already shoots forth",
              tokens: [
                {
                  word: "fatal",
                  lemma: "fatale",
                  pos: "adjective",
                  meaning: "fatal / fateful / destined (apocope of fatale)",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already / now",
                },
                {
                  word: "scocca",
                  lemma: "scoccare",
                  pos: "verb",
                  meaning: "shoots forth / is loosed (3rd sing. present)",
                },
              ],
              grammarNote: "Poetic apocope 'fatal' from 'fatale'. 'Scoccare' describes an arrow springing from a bowstring, here signifying Fenton's eager kiss aimed at Nannetta's tresses.",
            },
            {
              id: "a1_s2_c155_l4",
              original: "dalla mia bocca",
              literal: "from my mouth",
              tokens: [
                {
                  word: "dalla",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (da + la)",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "bocca",
                  lemma: "bocca",
                  pos: "noun",
                  meaning: "mouth / lips",
                },
              ],
              grammarNote: "Preposition 'da' combines with feminine definite article 'la' into 'dalla'. The arrow of passion originates from Fenton's own mouth.",
            },
            {
              id: "a1_s2_c155_l5",
              original: "sulla tua treccia.",
              literal: "upon your braid.",
              tokens: [
                {
                  word: "sulla",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the / on the (su + la)",
                },
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "treccia",
                  lemma: "treccia",
                  pos: "noun",
                  meaning: "braid / plait / tress",
                },
              ],
              grammarNote: "Articulated preposition 'su' + 'la' = 'sulla'. Fenton seals his poetic archery challenge by planting a kiss squarely upon Nannetta's hair.",
            },
          ],
        },
        {
          id: "a1_s2_c156",
          speaker: "Fenton",
          stageDirection: "le bacia la treccia",
          stageDirectionTranslation: "kisses her braid",
          lines: [
          ],
        },
        {
          id: "a1_s2_c157",
          speaker: "Nannetta",
          stageDirection: "annodandogli il collo co' la treccia, mentre egli la bacia",
          stageDirectionTranslation: "looping her braid around his neck while he kisses her",
          lines: [
            {
              id: "a1_s2_c157_l1",
              original: "Eccoti avvinto.",
              literal: "Here you are bound.",
              tokens: [
                {
                  word: "Eccoti",
                  lemma: "ecco",
                  pos: "adverb",
                  meaning: "here you are (presentative ecco + clitic ti)",
                },
                {
                  word: "avvinto",
                  lemma: "avvincere",
                  pos: "verb",
                  meaning: "bound / clasped / entwined (past participle)",
                },
                {
                  word: "avvincere",
                  lemma: "avvincere",
                  pos: "verb",
                  meaning: "to bind / enchain / embrace",
                },
              ],
              grammarNote: "Presentative adverb 'ecco' merges with the 2nd-person clitic pronoun 'ti'. Nannetta wittily turns Fenton's combat metaphor around, declaring him bound fast in her embrace ('avvinto', past participle of 'avvincere').",
            },
          ],
        },
        {
          id: "a1_s2_c158",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c158_l1",
              original: "Chiedo la vita!",
              literal: "I beg for life!",
              tokens: [
                {
                  word: "Chiedo",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "I ask / beg (1st sing. present)",
                },
                {
                  word: "vita",
                  lemma: "vita",
                  pos: "noun",
                  meaning: "life",
                },
                {
                  word: "chiedere la vita",
                  lemma: "chiedere la vita",
                  pos: "idiom",
                  meaning: "to beg for mercy / yield in combat",
                },
              ],
              grammarNote: "Fenton feigns knightly surrender: 'chiedere la vita' is traditional chivalric combat terminology used by a defeated knight yielding to his conqueror.",
            },
          ],
        },
        {
          id: "a1_s2_c159",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c159_l1",
              original: "Io son ferita,",
              literal: "I am wounded,",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (subject pronoun)",
                },
                {
                  word: "son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "am (1st sing. present, apocope of sono)",
                },
                {
                  word: "ferita",
                  lemma: "ferire",
                  pos: "verb",
                  meaning: "wounded (past participle as adjective)",
                },
              ],
              grammarNote: "Poetic apocope 'son' from 'sono'. Nannetta playfully acknowledges Cupid's dart, confessing she is wounded by his love even while holding mastery over him.",
            },
            {
              id: "a1_s2_c159_l2",
              original: "ma tu sei vinto.",
              literal: "but you are conquered.",
              tokens: [
                {
                  word: "ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd sing. present)",
                },
                {
                  word: "vinto",
                  lemma: "vincere",
                  pos: "verb",
                  meaning: "vanquished / conquered (past participle)",
                },
              ],
              grammarNote: "Contrastive conjunction 'ma' introduces the loving antithesis: though she is 'wounded', Fenton is utterly 'vanquished' ('vinto', irregular past participle of 'vincere').",
            },
          ],
        },
        {
          id: "a1_s2_c160",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c160_l1",
              original: "Pietà! Facciamo",
              literal: "Mercy! Let us make",
              tokens: [
                {
                  word: "Pietà",
                  lemma: "pietà",
                  pos: "noun",
                  meaning: "mercy / pity",
                },
                {
                  word: "Facciamo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "let us make / we make (1st plural hortative/present)",
                },
                {
                  word: "fare la pace",
                  lemma: "fare la pace",
                  pos: "idiom",
                  meaning: "to make peace / reconcile",
                },
              ],
              grammarNote: "Fenton cries for clemency ('Pietà!'). 'Facciamo' is 1st-person plural hortative subjunctive of 'fare', beginning the reconciliation idiom 'fare la pace'.",
            },
            {
              id: "a1_s2_c160_l2",
              original: "la pace e poi...",
              literal: "peace and then...",
              tokens: [
                {
                  word: "pace",
                  lemma: "pace",
                  pos: "noun",
                  meaning: "peace",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
              ],
              grammarNote: "Completing the phrase 'facciamo la pace'. Fenton leaves the sentence suspended on 'e poi...' with teasing innuendo.",
            },
          ],
        },
        {
          id: "a1_s2_c161",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c161_l1",
              original: "E poi?",
              literal: "And then?",
              tokens: [
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "e poi",
                  lemma: "e poi",
                  pos: "idiom",
                  meaning: "and then? / what next?",
                },
              ],
              grammarNote: "Nannetta's prompt question echoing Fenton's words, playfully encouraging him to explain what follows peace.",
            },
          ],
        },
        {
          id: "a1_s2_c162",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c162_l1",
              original: "Se vuoi,",
              literal: "If you wish,",
              tokens: [
                {
                  word: "Se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "vuoi",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "you want / wish (2nd sing. present)",
                },
                {
                  word: "volere",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "to want / wish",
                },
              ],
              grammarNote: "Conditional conjunction 'se' with 2nd-person singular present of 'volere'. Fenton makes his romantic proposal conditional upon Nannetta's consent.",
            },
            {
              id: "a1_s2_c162_l2",
              original: "ricominciamo.",
              literal: "we begin again.",
              tokens: [
                {
                  word: "ricominciamo",
                  lemma: "ricominciare",
                  pos: "verb",
                  meaning: "we begin again / let us restart (1st plural)",
                },
                {
                  word: "ricominciare",
                  lemma: "ricominciare",
                  pos: "verb",
                  meaning: "to begin anew / restart",
                },
              ],
              grammarNote: "1st-person plural hortative/present indicative of 'ricominciare'. Fenton's playful terms of truce: immediately recommencing the game of kissing from scratch.",
            },
          ],
        },
        {
          id: "a1_s2_c163",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c163_l1",
              original: "Bello è quel gioco",
              literal: "Pleasant is that game",
              tokens: [
                {
                  word: "Bello",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "pleasant / fine / fair",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that (demonstrative)",
                },
                {
                  word: "gioco",
                  lemma: "gioco",
                  pos: "noun",
                  meaning: "game / play",
                },
              ],
              grammarNote: "Fronted predicate adjective 'Bello' launching the popular Italian proverb: 'Bello è quel gioco che dura poco' (A game is good when it lasts but briefly).",
            },
            {
              id: "a1_s2_c163_l2",
              original: "che dura poco.",
              literal: "which lasts a short time.",
              tokens: [
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "which / that (relative pronoun)",
                },
                {
                  word: "dura",
                  lemma: "durare",
                  pos: "verb",
                  meaning: "lasts (3rd sing. present)",
                },
                {
                  word: "poco",
                  lemma: "poco",
                  pos: "adverb",
                  meaning: "little / a short time",
                },
              ],
              grammarNote: "Relative clause modifying 'quel gioco'. Nannetta wisely cautions that lingering too long in the garden risks discovery by her father and his companions.",
            },
            {
              id: "a1_s2_c163_l3",
              original: "Basta.",
              literal: "Enough.",
              tokens: [
                {
                  word: "Basta",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "it suffices / that is enough (3rd person singular present)",
                },
                {
                  word: "bastare",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "to suffice / be enough",
                },
              ],
              grammarNote: "Third-person singular present of impersonal verb 'bastare', used as an imperative command: 'That's enough!'",
            },
          ],
        },
        {
          id: "a1_s2_c164",
          speaker: "Fenton",
          lines: [
            {
              id: "a1_s2_c164_l1",
              original: "Amor mio!",
              literal: "My love!",
              tokens: [
                {
                  word: "Amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive adjective)",
                },
                {
                  word: "amore",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love / darling",
                },
              ],
              grammarNote: "Poetic apocope 'amor' from 'amore'. Fenton breathes a tender exclamation of affection before being forced to separate.",
            },
          ],
        },
        {
          id: "a1_s2_c165",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c165_l1",
              original: "Vien gente. Addio!",
              literal: "People are coming. Farewell!",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / is coming (apocope of viene)",
                },
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / company (singular collective)",
                },
                {
                  word: "Addio",
                  lemma: "addio",
                  pos: "interjection",
                  meaning: "farewell / goodbye",
                },
              ],
              grammarNote: "Apocope 'vien' from 'viene' with collective singular subject 'gente'. Nannetta hears approaching footsteps and urges a hasty parting.",
            },
          ],
        },
        {
          id: "a1_s2_c166",
          speaker: "Nannetta",
          stageDirection: "fugge da destra",
          stageDirectionTranslation: "flees to the right",
          lines: [
          ],
        },
        {
          id: "a1_s2_c167",
          speaker: "Fenton",
          stageDirection: "allontanandosi cantando",
          stageDirectionTranslation: "moving away while singing",
          lines: [
            {
              id: "a1_s2_c167_l1",
              original: "Bocca baciata non perde ventura.",
              literal: "A kissed mouth does not lose its good fortune.",
              tokens: [
                {
                  word: "Bocca",
                  lemma: "bocca",
                  pos: "noun",
                  meaning: "mouth",
                },
                {
                  word: "baciata",
                  lemma: "baciare",
                  pos: "adjective",
                  meaning: "kissed (past participle used as adj.)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "perde",
                  lemma: "perdere",
                  pos: "verb",
                  meaning: "loses (3rd sing. pres.)",
                },
                {
                  word: "ventura",
                  lemma: "ventura",
                  pos: "noun",
                  meaning: "fortune / luck / fresh charm",
                },
              ],
              grammarNote: "Fenton quotes the first half of Boccaccio's famous aphorism from Decameron (II, 7): 'Bocca baciata non perde ventura...'",
            },
          ],
        },
        {
          id: "a1_s2_c168",
          speaker: "Nannetta",
          stageDirection: "di dentro rispondendo",
          stageDirectionTranslation: "from within, replying",
          lines: [
            {
              id: "a1_s2_c168_l1",
              original: "Anzi rinnova come fa la luna.",
              literal: "Rather it renews itself as does the moon.",
              tokens: [
                {
                  word: "Anzi",
                  lemma: "anzi",
                  pos: "conjunction",
                  meaning: "on the contrary / rather",
                },
                {
                  word: "rinnova",
                  lemma: "rinnovare",
                  pos: "verb",
                  meaning: "renews / refreshes (3rd sing. pres.)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as / like",
                },
                {
                  word: "fa",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "does (3rd sing. pres.)",
                },
                {
                  word: "luna",
                  lemma: "luna",
                  pos: "noun",
                  meaning: "moon",
                },
              ],
              grammarNote: "Nannetta enters singing offstage to complete Boccaccio's proverb ('...anzi rinnuova come fa la luna'), playfully asserting that kisses only enhance youthful beauty.",
            },
            {
              id: "a1_s2_c168_l2",
              original: "Rientrano dal fondo Ford, Dr. Cajus, Bardolfo, Pistola.",
              literal: "Ford, Dr. Caius, Bardolfo, Pistola re-enter from the back.",
              tokens: [
                {
                  word: "Rientrano",
                  lemma: "rientrare",
                  pos: "verb",
                  meaning: "they re-enter (3rd plural present)",
                },
                {
                  word: "dal",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (da + il)",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "back / rear / background",
                },
                {
                  word: "Cajus",
                  lemma: "Caius",
                  pos: "noun",
                  meaning: "Caius (character name)",
                },
              ],
              grammarNote: "Stage direction indicating the return of the four male conspirators. Their brooding, jealous intrigue shatters the lyricism of the young lovers and resumes their counterplot against Falstaff.",
            },
          ],
        },
        {
          id: "a1_s2_c169",
          speaker: "Nannetta",
          stageDirection: "Fenton si unisce poi al crocchio",
          stageDirectionTranslation: "Fenton then joins the group",
          lines: [
          ],
        },
        {
          id: "a1_s2_c170",
          speaker: "Bardolfo",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c170_l1",
              original: "Udrai quanta egli sfoggia",
              literal: "You shall hear how much he displays",
              tokens: [
                {
                  word: "Udrai",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "you shall hear (2nd sing. future)",
                },
                {
                  word: "quanta",
                  lemma: "quanto",
                  pos: "adjective",
                  meaning: "how much / what great",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (subject pronoun)",
                },
                {
                  word: "sfoggia",
                  lemma: "sfoggiare",
                  pos: "verb",
                  meaning: "shows off / flaunts / displays (3rd sing. present)",
                },
              ],
              grammarNote: "Bardolfo prepares Ford for their encounter at the Garter Inn. 'Udrai' is 2nd-person singular future of 'udire'. 'Sfoggiare' means to ostentatiously flaunt.",
            },
            {
              id: "a1_s2_c170_l2",
              original: "magniloquenza altera.",
              literal: "haughty magniloquence.",
              tokens: [
                {
                  word: "magniloquenza",
                  lemma: "magniloquenza",
                  pos: "noun",
                  meaning: "magniloquence / bombastic eloquence",
                },
                {
                  word: "altera",
                  lemma: "altero",
                  pos: "adjective",
                  meaning: "haughty / proud / lofty",
                },
              ],
              grammarNote: "Direct object of 'sfoggia'. Boito's mock-heroic phrase portrays Falstaff's aristocratic pretensions and high-flown rhetorical vanity.",
            },
          ],
        },
        {
          id: "a1_s2_c171",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c171_l1",
              original: "Diceste ch'egli alloggia",
              literal: "You said that he lodges",
              tokens: [
                {
                  word: "Diceste",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "you said (2nd plural passato remoto)",
                },
                {
                  word: "ch'egli",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that he (che + pronoun egli)",
                },
                {
                  word: "alloggia",
                  lemma: "alloggiare",
                  pos: "verb",
                  meaning: "lodges / stays (3rd sing. present)",
                },
              ],
              grammarNote: "Ford addresses Bardolfo and Pistola with formal 2nd-person plural 'diceste' (passato remoto of 'dire'). 'Ch'egli' elides conjunction 'che' before 'egli'.",
            },
            {
              id: "a1_s2_c171_l2",
              original: "dove?",
              literal: "where?",
              tokens: [
                {
                  word: "dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where (interrogative adverb)",
                },
                {
                  word: "ove",
                  lemma: "ove",
                  pos: "adverb",
                  meaning: "where (archaic/literary variant)",
                },
              ],
              grammarNote: "Ford's urgent, suspicious question demanding Falstaff's precise location in Windsor so he can confront the scoundrel in disguise.",
            },
          ],
        },
        {
          id: "a1_s2_c172",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s2_c172_l1",
              original: "Alla «Giarrettiera».",
              literal: "At the \"Garter\".",
              tokens: [
                {
                  word: "Alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at the (a + la)",
                },
                {
                  word: "Giarrettiera",
                  lemma: "giarrettiera",
                  pos: "noun",
                  meaning: "garter / Garter Inn",
                },
              ],
              grammarNote: "Pistola names Falstaff's headquarters: The Garter Inn ('L'Osteria della Giarrettiera'). Articulated preposition 'a' + 'la' = 'alla'.",
            },
            {
              id: "a1_s2_c172_l2",
              original: "FORD A lui mi annuncerete,",
              literal: "FORD You shall announce me to him,",
              tokens: [
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "him",
                },
                {
                  word: "annuncerete",
                  lemma: "annunciare",
                  pos: "verb",
                  meaning: "you shall announce / introduce (2nd plural future)",
                },
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object clitic)",
                },
                {
                  word: "A",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
              ],
              grammarNote: "Ford's speech contains his character label in the libretto cue. He commands Bardolfo and Pistola to introduce him to Falstaff using the future indicative 'annuncerete' with imperative force.",
            },
            {
              id: "a1_s2_c172_l3",
              original: "ma con un falso nome;",
              literal: "but under a false name;",
              tokens: [
                {
                  word: "ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with / under",
                },
                {
                  word: "falso",
                  lemma: "falso",
                  pos: "adjective",
                  meaning: "false / fictitious / assumed",
                },
                {
                  word: "nome",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "name",
                },
              ],
              grammarNote: "Ford initiates his deceptive plan to adopt the disguise of 'Signor Fontana' (Shakespeare's Master Brook), probing Falstaff's intentions incognito.",
            },
            {
              id: "a1_s2_c172_l4",
              original: "poscia vedrete come",
              literal: "afterwards you shall see how",
              tokens: [
                {
                  word: "poscia",
                  lemma: "poscia",
                  pos: "adverb",
                  meaning: "afterwards / then (archaic/literary)",
                },
                {
                  word: "vedrete",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you shall see (2nd plural future)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "how",
                },
              ],
              grammarNote: "Literary adverb 'poscia' (from Latin postea). Ford confidently boasts to his accomplices that they will watch his trap snap shut upon Sir John.",
            },
            {
              id: "a1_s2_c172_l5",
              original: "lo piglio nella rete.",
              literal: "I catch him in the net.",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "piglio",
                  lemma: "pigliare",
                  pos: "verb",
                  meaning: "I catch / snare (1st sing. present)",
                },
                {
                  word: "nella",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + la)",
                },
                {
                  word: "rete",
                  lemma: "rete",
                  pos: "noun",
                  meaning: "net / snare",
                },
              ],
              grammarNote: "Hunting metaphor: 'pigliare nella rete'. Both Ford and Alice Ford separately envision catching Falstaff in a net, dramatizing the parallel comedic snares.",
            },
            {
              id: "a1_s2_c172_l6",
              original: "Ma... non una parola.",
              literal: "But... not a word.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "una",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "a single / one (indefinite article used numerically)",
                },
                {
                  word: "parola",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "word",
                },
              ],
              grammarNote: "Elliptical negative command enforcing strict silence. Ford warns his rogue accomplices that absolute secrecy is vital to his scheme.",
            },
          ],
        },
        {
          id: "a1_s2_c173",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c173_l1",
              original: "In ciarle non m'ingolfo.",
              literal: "I do not engulf myself in gossip.",
              tokens: [
                {
                  word: "ciarle",
                  lemma: "ciarla",
                  pos: "noun",
                  meaning: "chatter / idle gossip / babbling",
                },
                {
                  word: "m'ingolfo",
                  lemma: "ingolfarsi",
                  pos: "verb",
                  meaning: "I engulf myself / immerse myself (1st sing. present reflexive)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "In",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
              ],
              grammarNote: "Reflexive verb 'ingolfarsi' (from golfo), meaning to plunge deeply into a gulf. Bardolfo swears he never drowns himself in frivolous talk ('ciarle').",
            },
            {
              id: "a1_s2_c173_l2",
              original: "Io mi chiamo Bardolfo.",
              literal: "My name is Bardolfo.",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (emphatic subject pronoun)",
                },
                {
                  word: "chiamo",
                  lemma: "chiamarsi",
                  pos: "verb",
                  meaning: "am called / am named (1st sing. present reflexive)",
                },
                {
                  word: "Bardolfo",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo (proper name)",
                },
              ],
              grammarNote: "Bardolfo cites his own name as a roguish badge of honor and trustworthiness, creating a comic rhyming pair ('ingolfo' / 'Bardolfo').",
            },
          ],
        },
        {
          id: "a1_s2_c174",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s2_c174_l1",
              original: "Io mi chiamo Pistola.",
              literal: "My name is Pistola.",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (emphatic subject pronoun)",
                },
                {
                  word: "chiamo",
                  lemma: "chiamarsi",
                  pos: "verb",
                  meaning: "am called / am named (1st sing. present reflexive)",
                },
                {
                  word: "Pistola",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistol (proper name)",
                },
              ],
              grammarNote: "Pistola echoes Bardolfo in comedic parallel, rhyming with Ford's 'parola' to guarantee his own impenetrable silence.",
            },
          ],
        },
        {
          id: "a1_s2_c175",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c175_l1",
              original: "Siam d'accordo.",
              literal: "We are agreed.",
              tokens: [
                {
                  word: "Siam d'accordo",
                  lemma: "essere d'accordo",
                  pos: "idiom",
                  meaning: "we are agreed / we are in accord",
                },
                {
                  word: "Siam",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (apocopic form of siamo)",
                },
                {
                  word: "accordo",
                  lemma: "accordo",
                  pos: "noun",
                  meaning: "agreement / accord",
                },
              ],
              grammarNote: "Dr. Caius eagerly seals the illicit pact and exits.",
            },
          ],
        },
        {
          id: "a1_s2_c176",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a1_s2_c176_l1",
              original: "L'arcano",
              literal: "The secret",
              tokens: [
                {
                  word: "arcano",
                  lemma: "arcano",
                  pos: "noun",
                  meaning: "secret / mystery / arcanum",
                },
                {
                  word: "L'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided definite article)",
                },
              ],
              grammarNote: "Direct object of 'custodirem' on the following line. 'Arcano' lends a mock-elevated, conspiratorial tone to their petty intrigue.",
            },
            {
              id: "a1_s2_c176_l2",
              original: "custodirem.",
              literal: "we shall guard.",
              tokens: [
                {
                  word: "custodirem",
                  lemma: "custodire",
                  pos: "verb",
                  meaning: "we shall guard / keep safe (1st plural future, apocope)",
                },
                {
                  word: "custodire",
                  lemma: "custodire",
                  pos: "verb",
                  meaning: "to guard / protect / keep secret",
                },
              ],
              grammarNote: "Poetic apocope of the 1st-person plural future 'custodiremo' -> 'custodirem', fitting Boito's strict metrical scheme.",
            },
          ],
        },
        {
          id: "a1_s2_c177",
          speaker: "Pistola",
          lines: [
            {
              id: "a1_s2_c177_l1",
              original: "Son sordo",
              literal: "I am deaf",
              tokens: [
                {
                  word: "Son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I am (1st sing. present, apocope of sono)",
                },
                {
                  word: "sordo",
                  lemma: "sordo",
                  pos: "adjective",
                  meaning: "deaf",
                },
                {
                  word: "essere sordo e muto",
                  lemma: "essere sordo e muto",
                  pos: "idiom",
                  meaning: "to be deaf and dumb / utterly discreet",
                },
              ],
              grammarNote: "Apocope 'son' from 'sono'. Pistola invokes the traditional idiom of absolute secrecy: being 'sordo e muto' (deaf and dumb).",
            },
            {
              id: "a1_s2_c177_l2",
              original: "e muto.",
              literal: "and mute.",
              tokens: [
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "muto",
                  lemma: "muto",
                  pos: "adjective",
                  meaning: "mute / silent / dumb",
                },
              ],
              grammarNote: "Coordinating conjunction 'e' links the second adjective, completing Pistola's comic pledge that wild horses could not drag the secret out of him.",
            },
          ],
        },
        {
          id: "a1_s2_c178",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c178_l1",
              original: "Siam d'accordo tutti.",
              literal: "We are all agreed.",
              tokens: [
                {
                  word: "Siam",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (apocope of siamo)",
                },
                {
                  word: "accordo",
                  lemma: "accordo",
                  pos: "noun",
                  meaning: "agreement",
                },
                {
                  word: "tutti",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all / everyone",
                },
              ],
              grammarNote: "Ford confirms universal agreement among the men. The collective pronoun 'tutti' unites Ford, Dr. Caius, Bardolfo, and Pistola in a single conspiracy.",
            },
          ],
        },
        {
          id: "a1_s2_c179",
          speaker: "Bardolfo & Pistola",
          lines: [
            {
              id: "a1_s2_c179_l1",
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
          id: "a1_s2_c180",
          speaker: "Ford",
          lines: [
            {
              id: "a1_s2_c180_l1",
              original: "Qua la mano.",
              literal: "Give me your hand.",
              tokens: [
                {
                  word: "Qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "mano",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hand",
                },
                {
                  word: "dare la mano",
                  lemma: "dare la mano",
                  pos: "idiom",
                  meaning: "to shake hands / seal an agreement",
                },
              ],
              grammarNote: "Elliptical colloquial idiom: 'Qua la mano!' ([Put] the hand here! / Shake hands!). Ford binds the conspirators through a physical handshake.",
            },
            {
              id: "a1_s2_c180_l2",
              original: "Si avanzano nel fondo Alice, Nannetta, Meg, Quickly.",
              literal: "Alice, Nannetta, Meg, Quickly advance in the background.",
              tokens: [
                {
                  word: "avanzano",
                  lemma: "avanzare",
                  pos: "verb",
                  meaning: "they advance / move forward (3rd plural present)",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "background / rear of stage",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + il)",
                },
                {
                  word: "Si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "themselves (reflexive pronoun)",
                },
              ],
              grammarNote: "Crucial stage direction introducing the musical miracle of Act 1: the rapid-fire double nonet, contrasting the four laughing women in 6/8 with the five plotting men in 4/4.",
            },
            {
              id: "a1_s2_c180_l3",
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
          id: "a1_s2_c181",
          speaker: "Dr. Caius",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c181_l1",
              original: "Del tuo barbaro diagnostico",
              literal: "Of your terrible diagnosis",
              tokens: [
                {
                  word: "Del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the / concerning the (di + il)",
                },
                {
                  word: "barbaro",
                  lemma: "barbaro",
                  pos: "adjective",
                  meaning: "barbaric / terrible / cruel",
                },
                {
                  word: "diagnostico",
                  lemma: "diagnostico",
                  pos: "noun",
                  meaning: "diagnosis / diagnostic assessment",
                },
              ],
              grammarNote: "Dr. Caius pedantically offers medical analysis ('diagnostico'). Boito crafts Caius's strophe with triple sdrucciolo rhymes (diàgnostico / bàrbaro / òstico / rabàrbaro) to depict his comic pomposity.",
            },
            {
              id: "a1_s2_c181_l2",
              original: "forse il male è assai men barbaro.",
              literal: "perhaps the affliction is much less terrible.",
              tokens: [
                {
                  word: "forse",
                  lemma: "forse",
                  pos: "adverb",
                  meaning: "perhaps",
                },
                {
                  word: "male",
                  lemma: "male",
                  pos: "noun",
                  meaning: "affliction / illness / evil",
                },
                {
                  word: "assai",
                  lemma: "assai",
                  pos: "adverb",
                  meaning: "much / very / considerably",
                },
                {
                  word: "men",
                  lemma: "meno",
                  pos: "adverb",
                  meaning: "less (apocope of meno)",
                },
                {
                  word: "barbaro",
                  lemma: "barbaro",
                  pos: "adjective",
                  meaning: "terrible / cruel",
                },
              ],
              grammarNote: "Caius attempts to console Ford by suggesting that his suspected cuckoldry might not be as catastrophic as diagnosed. Apocope 'men' from 'meno'.",
            },
            {
              id: "a1_s2_c181_l3",
              original: "Ti convien tentar la prova",
              literal: "It behoves you to attempt the ordeal",
              tokens: [
                {
                  word: "convien",
                  lemma: "convenire",
                  pos: "verb",
                  meaning: "it behoves / is fitting (apocope of conviene)",
                },
                {
                  word: "Ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "to you (dative clitic)",
                },
                {
                  word: "tentar",
                  lemma: "tentare",
                  pos: "verb",
                  meaning: "to attempt / try (apocope of tentare)",
                },
                {
                  word: "prova",
                  lemma: "prova",
                  pos: "noun",
                  meaning: "test / trial / ordeal",
                },
              ],
              grammarNote: "Impersonal verb 'convenire' taking dative clitic 'ti' ('ti convien', it is fitting for you). Apocopes: 'convien' and infinitive 'tentar'. Caius urges putting suspicion to the test.",
            },
            {
              id: "a1_s2_c181_l4",
              original: "molestissima del ver.",
              literal: "most grievous of the truth.",
              tokens: [
                {
                  word: "molestissima",
                  lemma: "molesto",
                  pos: "adjective",
                  meaning: "most troublesome / grievous (superlative)",
                },
                {
                  word: "ver",
                  lemma: "vero",
                  pos: "noun",
                  meaning: "truth (apocope of vero)",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + il)",
                },
              ],
              grammarNote: "Absolute superlative adjective 'molestissima' modifying 'prova'. 'Ver' is poetic apocope for 'vero' (the truth). To discover reality may hurt, but it is necessary medicine.",
            },
            {
              id: "a1_s2_c181_l5",
              original: "Così avvien col sapor ostico",
              literal: "So it happens with the harsh taste",
              tokens: [
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "thus / so",
                },
                {
                  word: "avvien",
                  lemma: "avvenire",
                  pos: "verb",
                  meaning: "happens / occurs (apocope of avviene)",
                },
                {
                  word: "sapor",
                  lemma: "sapore",
                  pos: "noun",
                  meaning: "taste / flavor (apocope of sapore)",
                },
                {
                  word: "ostico",
                  lemma: "ostico",
                  pos: "adjective",
                  meaning: "harsh / disagreeable / bitter",
                },
                {
                  word: "col",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (con + il)",
                },
              ],
              grammarNote: "Medical simile comparing unpleasant reality to bitter draughts. 'Ostico' denotes an acrid, disagreeable taste. Apocopes: 'avvien' (from avviene) and 'sapor' (from sapore).",
            },
            {
              id: "a1_s2_c181_l6",
              original: "del ginepro e del rabarbaro;",
              literal: "of juniper and of rhubarb;",
              tokens: [
                {
                  word: "ginepro",
                  lemma: "ginepro",
                  pos: "noun",
                  meaning: "juniper",
                },
                {
                  word: "rabarbaro",
                  lemma: "rabarbaro",
                  pos: "noun",
                  meaning: "rhubarb (medicinal purge)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + il)",
                },
              ],
              grammarNote: "Caius cites classic bitter purgatives: juniper berry ('ginepro') and medicinal rhubarb root ('rabarbaro'). Sdrucciolo meter on 'rabàrbaro' rhyming with 'diàgnostico'.",
            },
            {
              id: "a1_s2_c181_l7",
              original: "il benessere rinnova",
              literal: "health is renewed by",
              tokens: [
                {
                  word: "benessere",
                  lemma: "benessere",
                  pos: "noun",
                  meaning: "well-being / health",
                },
                {
                  word: "rinnova",
                  lemma: "rinnovare",
                  pos: "verb",
                  meaning: "renews / restores (3rd sing. present)",
                },
              ],
              grammarNote: "Syntactic inversion: 'il benessere' is direct object of 'rinnova', whose subject is 'l'amarissimo bicchier' in the following verse.",
            },
            {
              id: "a1_s2_c181_l8",
              original: "l'amarissimo bicchier.",
              literal: "the most bitter glass.",
              tokens: [
                {
                  word: "amarissimo",
                  lemma: "amaro",
                  pos: "adjective",
                  meaning: "most bitter (superlative of amaro)",
                },
                {
                  word: "bicchier",
                  lemma: "bicchiere",
                  pos: "noun",
                  meaning: "glass / cup / potion (apocope of bicchiere)",
                },
                {
                  word: "L'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided definite article)",
                },
              ],
              grammarNote: "The bitter cup that restores health. 'Bicchier' is apocopated from 'bicchiere' to form a sharp tronco rhyme with 'ver'.",
            },
          ],
        },
        {
          id: "a1_s2_c182",
          speaker: "Pistola",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c182_l1",
              original: "Voi dovete empirgli il calice,",
              literal: "You must fill his chalice,",
              tokens: [
                {
                  word: "dovete",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "you must (2nd plural present)",
                },
                {
                  word: "empirgli",
                  lemma: "empire",
                  pos: "verb",
                  meaning: "to fill for him (empire + dative clitic gli)",
                },
                {
                  word: "calice",
                  lemma: "calice",
                  pos: "noun",
                  meaning: "goblet / chalice / cup",
                },
              ],
              grammarNote: "Modal 'dovete' governing compound infinitive 'empirgli' (archaic 'empire' for riempire + clitic 'gli', to him). Sdrucciolo rhymes: càlice / bàndolo / sàlice. Pistola advises making Falstaff drunk.",
            },
            {
              id: "a1_s2_c182_l2",
              original: "tratto, tratto, interrogandolo,",
              literal: "ever and anon, questioning him,",
              tokens: [
                {
                  word: "tratto, tratto",
                  lemma: "a tratto a tratto",
                  pos: "idiom",
                  meaning: "from time to time / now and then",
                },
                {
                  word: "interrogandolo",
                  lemma: "interrogare",
                  pos: "verb",
                  meaning: "questioning him (gerund interrogando + clitic lo)",
                },
                {
                  word: "tratto",
                  lemma: "tratto",
                  pos: "noun",
                  meaning: "interval / stretch",
                },
              ],
              grammarNote: "Boito uses the rhythmic repetition 'tratto, tratto' (intermittently). 'Interrogandolo' combines present gerund with direct object clitic 'lo' in a four-syllable sdrucciolo cadence.",
            },
            {
              id: "a1_s2_c182_l3",
              original: "per tentar se vi riesca",
              literal: "in order to try whether you succeed",
              tokens: [
                {
                  word: "tentar",
                  lemma: "tentare",
                  pos: "verb",
                  meaning: "to try / attempt (apocope of tentare)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if / whether",
                },
                {
                  word: "riesca",
                  lemma: "riuscire",
                  pos: "verb",
                  meaning: "succeeds (3rd sing. present subjunctive)",
                },
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "to you (dative clitic)",
                },
              ],
              grammarNote: "Purpose clause 'per tentar'. 'Riuscire' is used impersonally with dative pronoun 'vi' ('se vi riesca', whether you may succeed).",
            },
            {
              id: "a1_s2_c182_l4",
              original: "di trovar del nodo il bandolo.",
              literal: "in finding the head of the tangle's thread.",
              tokens: [
                {
                  word: "trovar",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "to find (apocope of trovare)",
                },
                {
                  word: "nodo",
                  lemma: "nodo",
                  pos: "noun",
                  meaning: "knot / tangle",
                },
                {
                  word: "bandolo",
                  lemma: "bandolo",
                  pos: "noun",
                  meaning: "thread-end / clue / key",
                },
                {
                  word: "trovare il bandolo",
                  lemma: "trovare il bandolo",
                  pos: "idiom",
                  meaning: "to find the key / unravel a tangled mystery",
                },
              ],
              grammarNote: "Famous Italian idiom: 'trovare il bandolo della matassa' (finding the unraveling thread-end of the skein). Pistola advises Ford to extract the key confession from Sir John.",
            },
            {
              id: "a1_s2_c182_l5",
              original: "Come all'acqua inclina il salice.",
              literal: "As the willow bends toward the water.",
              tokens: [
                {
                  word: "Come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as / just as",
                },
                {
                  word: "all'acqua",
                  lemma: "acqua",
                  pos: "noun",
                  meaning: "to the water (a + l'acqua)",
                },
                {
                  word: "inclina",
                  lemma: "inclinare",
                  pos: "verb",
                  meaning: "bends / leans (3rd sing. present)",
                },
                {
                  word: "salice",
                  lemma: "salice",
                  pos: "noun",
                  meaning: "willow tree",
                },
              ],
              grammarNote: "Poetic simile comparing the weeping willow drooping towards running water to Falstaff's natural, irresistible thirst for wine. Sdrucciolo noun 'sàlice'.",
            },
            {
              id: "a1_s2_c182_l6",
              original: "Così al vin quel cavalier.",
              literal: "So toward wine that knight.",
              tokens: [
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "so / thus",
                },
                {
                  word: "vin",
                  lemma: "vino",
                  pos: "noun",
                  meaning: "wine (apocope of vino)",
                },
                {
                  word: "cavalier",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight (apocope of cavaliere)",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
              ],
              grammarNote: "Completing the correlative simile: 'Come... Così...'. Apocopes: 'vin' from 'vino' and 'cavalier' from 'cavaliere', producing a brisk tronco rhythm.",
            },
            {
              id: "a1_s2_c182_l7",
              original: "Scoverete la sua tresca,",
              literal: "You will uncover his illicit intrigue,",
              tokens: [
                {
                  word: "Scoverete",
                  lemma: "scoprire",
                  pos: "verb",
                  meaning: "you will uncover (2nd plural future, archaic variant)",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive)",
                },
                {
                  word: "tresca",
                  lemma: "tresca",
                  pos: "noun",
                  meaning: "illicit intrigue / adulterous liaison",
                },
              ],
              grammarNote: "'Scoverete' is the archaic phonetic variant of 'scoprirete'. 'Tresca' specifically denotes a clandestine, adulterous intrigue.",
            },
            {
              id: "a1_s2_c182_l8",
              original: "scoprirete il suo pensier.",
              literal: "you will discover his thought.",
              tokens: [
                {
                  word: "scoprirete",
                  lemma: "scoprire",
                  pos: "verb",
                  meaning: "you will discover / reveal (2nd plural future)",
                },
                {
                  word: "suo",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive)",
                },
                {
                  word: "pensier",
                  lemma: "pensiero",
                  pos: "noun",
                  meaning: "thought / mind / intention (apocope of pensiero)",
                },
              ],
              grammarNote: "Rhetorical polyptoton pairing 'scoverete' with 'scoprirete'. 'Pensier' is apocopated from 'pensiero' to create a masculine tronco rhyme with 'cavalier'.",
            },
          ],
        },
        {
          id: "a1_s2_c183",
          speaker: "Ford",
          stageDirection: "a Pistola",
          stageDirectionTranslation: "to Pistola",
          lines: [
            {
              id: "a1_s2_c183_l1",
              original: "Tu vedrai se bene adopera",
              literal: "You shall see whether my art works well",
              tokens: [
                {
                  word: "vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you shall see (2nd sing. future)",
                },
                {
                  word: "bene",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well / effectively",
                },
                {
                  word: "adopera",
                  lemma: "adoperare",
                  pos: "verb",
                  meaning: "works / operates / succeeds (3rd sing. present)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if / whether",
                },
              ],
              grammarNote: "Ford boasts of his cunning scheme to test Falstaff. Sdrucciolo rhymes: àdopera / òpera. 'Adoperare' functions intransitively meaning 'to take effect / operate effectively'.",
            },
            {
              id: "a1_s2_c183_l2",
              original: "l'arte mia con quell'infame.",
              literal: "my cunning with that scoundrel.",
              tokens: [
                {
                  word: "arte",
                  lemma: "arte",
                  pos: "noun",
                  meaning: "art / craft / cunning strategy",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive)",
                },
                {
                  word: "infame",
                  lemma: "infame",
                  pos: "noun",
                  meaning: "scoundrel / villain / infamous man",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
              ],
              grammarNote: "Subject of 'adopera' from previous line. Ford designates Sir John with bitter venom as 'quell'infame', giving voice to his corrosive jealousy.",
            },
            {
              id: "a1_s2_c183_l3",
              original: "E sarà prezzo dell'opera",
              literal: "And it will be worth the effort",
              tokens: [
                {
                  word: "sarà",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "will be (3rd sing. future)",
                },
                {
                  word: "prezzo dell'opera",
                  lemma: "prezzo dell'opera",
                  pos: "idiom",
                  meaning: "worth the trouble / worthwhile",
                },
                {
                  word: "opera",
                  lemma: "opera",
                  pos: "noun",
                  meaning: "labor / effort / work",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Classical idiom 'essere prezzo dell'opera' (worth the trouble / rewarding). Ford believes exposing Falstaff will abundantly repay his anxiety and outlay.",
            },
            {
              id: "a1_s2_c183_l4",
              original: "s'io discopro le sue trame.",
              literal: "if I uncover his plots.",
              tokens: [
                {
                  word: "s'io",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if I (se + pronoun io)",
                },
                {
                  word: "discopro",
                  lemma: "discoprire",
                  pos: "verb",
                  meaning: "I uncover / expose (1st sing. present)",
                },
                {
                  word: "sue",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive)",
                },
                {
                  word: "trame",
                  lemma: "trama",
                  pos: "noun",
                  meaning: "plots / webs / machinations",
                },
              ],
              grammarNote: "'Discopro' is a literary form of 'scopro' (from discoprire). 'Trame' (literally weavings) evokes the tangled web of Falstaff's seductive schemes.",
            },
            {
              id: "a1_s2_c183_l5",
              original: "Se su lui volgo il ridicolo",
              literal: "If upon him I turn ridicule",
              tokens: [
                {
                  word: "volgo",
                  lemma: "volgere",
                  pos: "verb",
                  meaning: "I turn / direct (1st sing. present)",
                },
                {
                  word: "ridicolo",
                  lemma: "ridicolo",
                  pos: "noun",
                  meaning: "ridicule / mockery / derision",
                },
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon / on",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "him",
                },
              ],
              grammarNote: "Sdrucciolo rhymes: ridìcolo / perìcolo. Ford intends to turn public derision back against Falstaff to cleanse his own wounded vanity.",
            },
            {
              id: "a1_s2_c183_l6",
              original: "non avrem sudato invan.",
              literal: "we shall not have sweated in vain.",
              tokens: [
                {
                  word: "avrem",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "we shall have (1st plural future, apocope of avremo)",
                },
                {
                  word: "sudato",
                  lemma: "sudare",
                  pos: "verb",
                  meaning: "sweated / toiled (past participle)",
                },
                {
                  word: "invan",
                  lemma: "invano",
                  pos: "adverb",
                  meaning: "in vain (apocope of invano)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
              ],
              grammarNote: "Double apocope: 'avrem' (from avremo) and 'invan' (from invano). 'Sudare' metaphorically signifies strenuous labor.",
            },
            {
              id: "a1_s2_c183_l7",
              original: "S'io mi salvo dal pericolo,",
              literal: "If I save myself from the danger,",
              tokens: [
                {
                  word: "salvo",
                  lemma: "salvarsi",
                  pos: "verb",
                  meaning: "I save myself (1st sing. present reflexive)",
                },
                {
                  word: "pericolo",
                  lemma: "pericolo",
                  pos: "noun",
                  meaning: "danger / peril",
                },
                {
                  word: "dal",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (da + il)",
                },
                {
                  word: "s'io",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if I (se + io)",
                },
              ],
              grammarNote: "Reflexive verb 'salvarsi'. Ford views Sir John's attempted seduction as an existential threat to his household dignity.",
            },
            {
              id: "a1_s2_c183_l8",
              original: "l'angue morde il cerretan.",
              literal: "the snake bites the charlatan.",
              tokens: [
                {
                  word: "angue",
                  lemma: "angue",
                  pos: "noun",
                  meaning: "snake / serpent (poetic/classical)",
                },
                {
                  word: "morde",
                  lemma: "mordere",
                  pos: "verb",
                  meaning: "bites (3rd sing. present)",
                },
                {
                  word: "cerretan",
                  lemma: "cerretano",
                  pos: "noun",
                  meaning: "charlatan / snake-charmer / trickster (apocope)",
                },
                {
                  word: "l'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (definite article)",
                },
              ],
              grammarNote: "Tuscan proverb: 'l'angue morde il cerretano' (the snake bites the snake-charmer / the trickster is bitten by his own reptile). Apocope 'cerretan' rhymes with 'invan'.",
            },
          ],
        },
        {
          id: "a1_s2_c184",
          speaker: "Bardolfo",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a1_s2_c184_l1",
              original: "Messer Ford, un infortunio",
              literal: "Master Ford, a marital",
              tokens: [
                {
                  word: "Messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "Master / Sir (honorific title, apocope of messere)",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper name)",
                },
                {
                  word: "infortunio",
                  lemma: "infortunio",
                  pos: "noun",
                  meaning: "misfortune / disaster",
                },
              ],
              grammarNote: "Bardolfo addresses Ford with feudal honorific 'Messer' (apocope of messere). Sdrucciolo rhymes: infortùnio / plenilùnio.",
            },
            {
              id: "a1_s2_c184_l2",
              original: "marital in voi si incorpora;",
              literal: "misfortune embodies itself in you;",
              tokens: [
                {
                  word: "marital",
                  lemma: "maritale",
                  pos: "adjective",
                  meaning: "marital / matrimonial (apocope of maritale)",
                },
                {
                  word: "incorpora",
                  lemma: "incorporarsi",
                  pos: "verb",
                  meaning: "embodies itself / takes shape (3rd sing. present reflexive)",
                },
                {
                  word: "voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "itself (reflexive clitic)",
                },
              ],
              grammarNote: "'Un infortunio marital si incorpora'—Bardolfo's comic, pseudo-scholastic euphemism for sprouting cuckold's horns! Apocope 'marital' from 'maritale'.",
            },
            {
              id: "a1_s2_c184_l3",
              original: "se non siete astuto e cauto",
              literal: "if you are not astute and cautious",
              tokens: [
                {
                  word: "astuto",
                  lemma: "astuto",
                  pos: "adjective",
                  meaning: "astute / shrewd / clever",
                },
                {
                  word: "cauto",
                  lemma: "cauto",
                  pos: "adjective",
                  meaning: "cautious / wary / prudent",
                },
                {
                  word: "siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd plural present)",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
              ],
              grammarNote: "Bardolfo warns Ford to proceed with cunning, setting up the rhyme 'cauto' / 'lauto'.",
            },
            {
              id: "a1_s2_c184_l4",
              original: "quel sir John vi tradirà.",
              literal: "that Sir John will betray you.",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "sir",
                  lemma: "Sir",
                  pos: "noun",
                  meaning: "Sir (knightly title)",
                },
                {
                  word: "John",
                  lemma: "John",
                  pos: "noun",
                  meaning: "John (proper name)",
                },
                {
                  word: "tradirà",
                  lemma: "tradire",
                  pos: "verb",
                  meaning: "will betray (3rd sing. future)",
                },
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (direct object clitic)",
                },
              ],
              grammarNote: "Future tense 'tradirà' with masculine tronco ending, rhyming with 'ingenuità'. Bardolfo maliciously fans Ford's smoldering jealousy.",
            },
            {
              id: "a1_s2_c184_l5",
              original: "Quel paffuto plenilunio",
              literal: "That chubby full moon",
              tokens: [
                {
                  word: "paffuto",
                  lemma: "paffuto",
                  pos: "adjective",
                  meaning: "chubby / plump / roly-poly",
                },
                {
                  word: "plenilunio",
                  lemma: "plenilunio",
                  pos: "noun",
                  meaning: "full moon",
                },
                {
                  word: "Quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
              ],
              grammarNote: "Boito's grotesque poetic caricature: Bardolfo compares Falstaff's bloated, wine-flushed face to a 'paffuto plenilunio' (chubby full moon).",
            },
            {
              id: "a1_s2_c184_l6",
              original: "che il color del vino imporpora",
              literal: "which the color of wine empurples",
              tokens: [
                {
                  word: "color",
                  lemma: "colore",
                  pos: "noun",
                  meaning: "color (apocope of colore)",
                },
                {
                  word: "vino",
                  lemma: "vino",
                  pos: "noun",
                  meaning: "wine",
                },
                {
                  word: "imporpora",
                  lemma: "imporporare",
                  pos: "verb",
                  meaning: "empurples / turns purple (3rd sing. present)",
                },
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + il)",
                },
              ],
              grammarNote: "Sdrucciolo verb 'impòrpora' (from imporporare, to dye crimson/purple). The wine stains Falstaff's bloated face as vivid as a celestial orb.",
            },
            {
              id: "a1_s2_c184_l7",
              original: "troverebbe un pasto lauto",
              literal: "would find a lavish meal",
              tokens: [
                {
                  word: "troverebbe",
                  lemma: "trovare",
                  pos: "verb",
                  meaning: "would find (3rd sing. conditional)",
                },
                {
                  word: "pasto",
                  lemma: "pasto",
                  pos: "noun",
                  meaning: "meal / feast / repast",
                },
                {
                  word: "lauto",
                  lemma: "lauto",
                  pos: "adjective",
                  meaning: "lavish / sumptuous / rich",
                },
              ],
              grammarNote: "Conditional tense 'troverebbe'. 'Lauto' means sumptuous or opulent. Falstaff's greed would feast richly upon Ford's wealth and gullibility.",
            },
            {
              id: "a1_s2_c184_l8",
              original: "nella vostra ingenuità.",
              literal: "in your naivety.",
              tokens: [
                {
                  word: "vostra",
                  lemma: "vostro",
                  pos: "adjective",
                  meaning: "your (possessive)",
                },
                {
                  word: "ingenuità",
                  lemma: "ingenuità",
                  pos: "noun",
                  meaning: "naivety / credulity / artlessness",
                },
                {
                  word: "nella",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + la)",
                },
              ],
              grammarNote: "Bardolfo ends his strophe urging vigilance: without cunning, Ford's naive trust will be his undoing. Tronco rhyme on '-à' with 'tradirà'.",
            },
          ],
        },
        {
          id: "a1_s2_c185",
          speaker: "Fenton",
          stageDirection: "Qua borbotta un crocchio d'uomini, c'è nell'aria una malia. Là cinguetta un stuol di femine, spira un vento agitator. Ma colei che in cor mi nomini, dolce amor, vuol esser mia! Noi sarem come due gemine stelle unite in un ardor.",
          stageDirectionTranslation: "Here a knot of men mutters, there is magic in the air. There chirps a flock of women, blowing a restless wind. But she whom my heart names to me, sweet love, wants to be mine! We shall be like twin stars united in one flame.",
          lines: [
            {
              id: "a1_s2_c185_l1",
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
          id: "a1_s2_c186",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a1_s2_c186_l1",
              original: "Vedrai che se abbindolo",
              literal: "You will see that if I bamboozle",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (future 2nd person singular)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "abbindolo",
                  lemma: "abbindolare",
                  pos: "verb",
                  meaning: "I bamboozle / ensnare / swindle (1st person singular present)",
                },
              ],
              grammarNote: "'Abbindolare' derives from 'bindolo' (skein-winder/pulley), meaning to wrap someone round one's finger or dupe them completely.",
            },
            {
              id: "a1_s2_c186_l2",
              original: "quel grosso compar,",
              literal: "that fat gossip,",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "grosso",
                  lemma: "grosso",
                  pos: "adjective",
                  meaning: "fat / big / bulky",
                },
                {
                  word: "compar",
                  lemma: "compare",
                  pos: "noun",
                  meaning: "gossip / comrade / partner (apocope of compare)",
                },
              ],
              grammarNote: "Alice refers sarcastically to Falstaff's line ('il compar gaio') as 'quel grosso compar' (that huge crony).",
            },
            {
              id: "a1_s2_c186_l3",
              original: "più lesto d'un guindolo",
              literal: "faster than a yarn-winder",
              tokens: [
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / faster",
                },
                {
                  word: "lesto",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "swift / nimble / quick",
                },
                {
                  word: "d'un",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "than a (comparative di + un)",
                },
                {
                  word: "guindolo",
                  lemma: "guindolo",
                  pos: "noun",
                  meaning: "yarn-winder / spinning reel",
                },
              ],
              grammarNote: "'Guindolo' is a revolving yarn-winder or reel. The comparative 'più lesto d'un guindolo' means faster than a spinning wheel.",
            },
            {
              id: "a1_s2_c186_l4",
              original: "lo faccio girar.",
              literal: "I make him spin.",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "faccio",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "I make / cause to (causative fare)",
                },
                {
                  word: "girar",
                  lemma: "girare",
                  pos: "verb",
                  meaning: "to spin / turn round (apocope of girare)",
                },
              ],
              grammarNote: "Causative structure 'far girare' (to spin around like a top / make someone lose their head). Truncated infinitive 'girar' for meter and rhyme.",
            },
          ],
        },
        {
          id: "a1_s2_c187",
          speaker: "Meg Page",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a1_s2_c187_l1",
              original: "Se il vischio lo impegola",
              literal: "If birdlime ensnares him",
              tokens: [
                {
                  word: "vischio",
                  lemma: "vischio",
                  pos: "noun",
                  meaning: "birdlime / mistletoe / sticky snare",
                },
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "impegola",
                  lemma: "impegolare",
                  pos: "verb",
                  meaning: "tars / entangles / traps (3rd person singular present)",
                },
              ],
              grammarNote: "Metaphor drawn from fowling: 'vischio' (sticky birdlime) and 'impegolare' (to smear with pitch/tar, trapping a bird so it cannot fly away).",
            },
            {
              id: "a1_s2_c187_l2",
              original: "lo udremo strillar,",
              literal: "we shall hear him squeal,",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "udremo",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "we shall hear (1st plural future)",
                },
                {
                  word: "strillar",
                  lemma: "strillare",
                  pos: "verb",
                  meaning: "to shriek / squeal / cry out (apocope of strillare)",
                },
              ],
              grammarNote: "In the overlapping double ensemble, Meg Page anticipates Falstaff's squeals when trapped by the women. Apocope 'strillar' creates a sharp tronco beat in 6/8.",
            },
            {
              id: "a1_s2_c187_l3",
              original: "e allor la sua fregola",
              literal: "and then his frantic lust",
              tokens: [
                {
                  word: "allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then / at that moment (apocope of allora)",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his (possessive)",
                },
                {
                  word: "fregola",
                  lemma: "fregola",
                  pos: "noun",
                  meaning: "rut / frantic lust / burning desire",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Sdrucciolo noun 'frègola' (colloquial for rutting frenzy / lustful itch). Boito captures Meg's sassy mockery as she pictures Sir John's lust vanishing in smoke.",
            },
            {
              id: "a1_s2_c187_l4",
              original: "vedremo svampar.",
              literal: "we shall see vanish into smoke.",
              tokens: [
                {
                  word: "vedremo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "we shall see (1st person plural future)",
                },
                {
                  word: "svampar",
                  lemma: "svampare",
                  pos: "verb",
                  meaning: "to vanish into smoke / evaporate / flare up",
                },
              ],
              grammarNote: "Meg concludes the women's ensemble from the previous strophe: '[e il suo fumo] vedremo svampar' ('[and his pride/smoke] we shall see vanish in smoke'). 'Svampar' is an apocopic infinitive of 'svampare' (to evaporate, flare up, or go up in smoke).",
            },
          ],
        },
        {
          id: "a1_s2_c188",
          speaker: "Nannetta",
          stageDirection: "ad Alice",
          stageDirectionTranslation: "to Alice",
          lines: [
            {
              id: "a1_s2_c188_l1",
              original: "E se i scilinguagnoli",
              literal: "And if our gift of the gab",
              tokens: [
                {
                  word: "scilinguagnoli",
                  lemma: "scilinguagnolo",
                  pos: "noun",
                  meaning: "tongue-strings / frenula / gift of gab",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "i",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine plural article variant)",
                },
              ],
              grammarNote: "Tuscan idiom 'sciogliere lo scilinguagnolo' (to untie the tongue-string, to talk incessantly). Boito uses the archaic article 'i' instead of 'gli' before 'sc-' for rhythmic punch.",
            },
            {
              id: "a1_s2_c188_l2",
              original: "sapremo adoprar,",
              literal: "we know how to use,",
              tokens: [
                {
                  word: "sapremo",
                  lemma: "sapere",
                  pos: "verb",
                  meaning: "we will know how (1st person plural future)",
                },
                {
                  word: "adoprar",
                  lemma: "adoperare",
                  pos: "verb",
                  meaning: "to use / employ (apocope of 'adoperare')",
                },
              ],
              grammarNote: "'Sapremo adoprar' (future of 'sapere' expressing capability/know-how + apocopated infinitive of 'adoperare'). Rhymes with 'adoprar' / 'sudar'.",
            },
            {
              id: "a1_s2_c188_l3",
              original: "vedremo a rigagnoli",
              literal: "we shall see in rivulets",
              tokens: [
                {
                  word: "vedremo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "we shall see (1st person plural future)",
                },
                {
                  word: "rigagnoli",
                  lemma: "rigagnolo",
                  pos: "noun",
                  meaning: "rivulets / trickles / streams",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "in / in the manner of",
                },
              ],
              grammarNote: "'A rigagnoli' is an adverbial locution meaning 'in streams or trickles'. Sdrucciolo rhyme with 'scillinguagnoli'.",
            },
            {
              id: "a1_s2_c188_l4",
              original: "quell'orco sudar",
              literal: "that ogre sweat",
              tokens: [
                {
                  word: "orco",
                  lemma: "orco",
                  pos: "noun",
                  meaning: "ogre / monster / brute",
                },
                {
                  word: "sudar",
                  lemma: "sudare",
                  pos: "verb",
                  meaning: "to sweat / toil (apocope of sudare)",
                },
                {
                  word: "quell'",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
              ],
              grammarNote: "Part of the clause 'vedremo a rigagnoli quell'orco sudar' (we will see that ogre sweat in rivers). Falstaff is labeled an 'orco'. Apocope 'sudar' rhymes with 'strillar'.",
            },
          ],
        },
        {
          id: "a1_s2_c189",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c189_l1",
              original: "Tal sempre s'esilari",
              literal: "Thus may always rejoice",
              tokens: [
                {
                  word: "Tal",
                  lemma: "tale",
                  pos: "adjective",
                  meaning: "such / so / in such manner (apocope of tale)",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
                {
                  word: "s'esilari",
                  lemma: "esilararsi",
                  pos: "verb",
                  meaning: "may cheer / gladden itself (present subjunctive 3rd person)",
                },
              ],
              grammarNote: "Optative subjunctive 's'esilari' (from 'esilarare/esilararsi', to cheer up, exhilarate). 'Tal' (apocope of 'tale') acts adverbially ('thus / in such a manner').",
            },
            {
              id: "a1_s2_c189_l2",
              original: "quel bel cinguettar;",
              literal: "that lovely chirping;",
              tokens: [
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "bel",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "lovely / fine (apocope of bello)",
                },
                {
                  word: "cinguettar",
                  lemma: "cinguettare",
                  pos: "noun",
                  meaning: "chirping / chatter (substantivized infinitive, apocope)",
                },
              ],
              grammarNote: "Quickly compares the women's animated laughing chatter to joyful bird chirping ('cinguettar', substantivized infinitive). Apocope 'bel' and 'cinguettar'.",
            },
            {
              id: "a1_s2_c189_l3",
              original: "così soglion l'ilari",
              literal: "thus the cheerful",
              tokens: [
                {
                  word: "così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "thus / in this manner",
                },
                {
                  word: "soglion",
                  lemma: "solere",
                  pos: "verb",
                  meaning: "are wont to / are accustomed to (apocope of sogliono)",
                },
                {
                  word: "ilari",
                  lemma: "ilare",
                  pos: "adjective",
                  meaning: "cheerful / merry / joyful",
                },
                {
                  word: "l'",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (elided plural article)",
                },
              ],
              grammarNote: "Verb 'solere' (to be accustomed / wont) in 3rd-person plural apocope 'soglion'. Modifies 'comari' (wives) with sdrucciolo adjective 'ìlari' ('così soglion l'ilari comari ciarlar').",
            },
            {
              id: "a1_s2_c189_l4",
              original: "comari ciarlar.",
              literal: "wives to chatter.",
              tokens: [
                {
                  word: "comari",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "wives / gossips / neighbors",
                },
                {
                  word: "ciarlar",
                  lemma: "ciarlare",
                  pos: "verb",
                  meaning: "to chatter / to prattle (apocopic infinitive)",
                },
              ],
              grammarNote: "'Comari' translates Shakespeare's 'gossips' or 'merry wives'. 'Ciarlar' is an apocopic infinitive dependent on 'soglion': 'Così soglion l'ilari comari ciarlar' ('Thus are the merry wives wont to chatter').",
            },
            {
              id: "a1_s2_c189_l5",
              original: "Ford, Dr. Cajus, Fenton, Bardolfo, Pistola escono.",
              literal: "Ford, Dr. Caius, Fenton, Bardolfo, Pistola exit.",
              tokens: [
                {
                  word: "escono",
                  lemma: "uscire",
                  pos: "verb",
                  meaning: "they exit / depart (3rd plural present)",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper name)",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper name)",
                },
              ],
              grammarNote: "Stage direction ending the grand ensemble for the men. All five men depart to prepare Ford's disguise as Signor Fontana, leaving the stage to the triumphant women.",
            },
          ],
        },
        {
          id: "a1_s2_c190",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c190_l1",
              original: "Qui più non si vagoli...",
              literal: "Let there be no more wandering about here...",
              tokens: [
                {
                  word: "vagoli",
                  lemma: "vagolare",
                  pos: "verb",
                  meaning: "let one wander (3rd sing. present subjunctive in impersonal si)",
                },
                {
                  word: "si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "one / people (impersonal si)",
                },
                {
                  word: "Qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / any longer",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
              ],
              grammarNote: "Alice Ford briskly assumes command: 'non si vagoli' (impersonal subjunctive of vagolare, to roam or wander aimlessly). The women must stop idling and set their plan in motion.",
            },
          ],
        },
        {
          id: "a1_s2_c191",
          speaker: "Nannetta",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a1_s2_c191_l1",
              original: "Tu corri all'ufficio",
              literal: "You run to your",
              tokens: [
                {
                  word: "corri",
                  lemma: "correre",
                  pos: "verb",
                  meaning: "run! (imperative 2nd sing.)",
                },
                {
                  word: "ufficio",
                  lemma: "ufficio",
                  pos: "noun",
                  meaning: "duty / mission / task",
                },
                {
                  word: "all'",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (a + l')",
                },
              ],
              grammarNote: "Nannetta commands Mistress Quickly to hurry off on her secret errand as messenger to Falstaff. Enjambment with 'tuo.' on the next line.",
            },
            {
              id: "a1_s2_c191_l2",
              original: "tuo.",
              literal: "duty.",
              tokens: [
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (possessive adjective)",
                },
                {
                  word: "ufficio tuo",
                  lemma: "ufficio tuo",
                  pos: "idiom",
                  meaning: "your appointed task / your duty",
                },
              ],
              grammarNote: "Completes the imperative phrase 'all'ufficio tuo' (to your appointed task). Postpositive possessive emphasizes Quickly's specialized diplomatic assignment.",
            },
          ],
        },
        {
          id: "a1_s2_c192",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c192_l1",
              original: "Vo' ch'egli miagoli",
              literal: "I want him to mew",
              tokens: [
                {
                  word: "Vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (1st sing. present, apocope of voglio)",
                },
                {
                  word: "ch'egli",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that he (che + egli)",
                },
                {
                  word: "miagoli",
                  lemma: "miagolare",
                  pos: "verb",
                  meaning: "mews / caterwauls (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Apocope 'Vo'' from 'voglio' governing subjunctive 'miagoli'. Alice describes Falstaff groveling and whining like a lovesick tomcat. Sdrucciolo rhyme 'miàgoli' / 'vàgoli'.",
            },
            {
              id: "a1_s2_c192_l2",
              original: "d'amor come un micio.",
              literal: "with love like a kitten.",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (apocope of amore)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "micio",
                  lemma: "micio",
                  pos: "noun",
                  meaning: "kitten / pussycat / tomcat",
                },
                {
                  word: "d'",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of / with",
                },
              ],
              grammarNote: "Alice completes her comic feline metaphor: 'miagolare d'amor come un micio'. 'Micio' is an affectionate Italian nursery/colloquial word for cat.",
            },
          ],
        },
        {
          id: "a1_s2_c193",
          speaker: "Alice Ford",
          stageDirection: "a Quickly",
          stageDirectionTranslation: "to Quickly",
          lines: [
            {
              id: "a1_s2_c193_l1",
              original: "È intesa.",
              literal: "It is agreed.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "intesa",
                  lemma: "intendere",
                  pos: "verb",
                  meaning: "understood / agreed upon (past participle as adjective)",
                },
                {
                  word: "essere intesa",
                  lemma: "essere intesa",
                  pos: "idiom",
                  meaning: "to be agreed upon / settled",
                },
              ],
              grammarNote: "Alice's brisk confirmation: 'È intesa' (It is understood / agreed upon), sealing the plan to send Quickly to Falstaff at the Garter Inn.",
            },
          ],
        },
        {
          id: "a1_s2_c194",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c194_l1",
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
          id: "a1_s2_c195",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c195_l1",
              original: "È detta.",
              literal: "It is settled.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
                {
                  word: "detta",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "said / settled (past participle as adjective)",
                },
                {
                  word: "detto, fatto",
                  lemma: "detto, fatto",
                  pos: "idiom",
                  meaning: "no sooner said than done",
                },
              ],
              grammarNote: "Nannetta chimes in with rhythmic symmetry: 'È detta' (It is spoken / decreed), mirroring Alice's 'È intesa'.",
            },
          ],
        },
        {
          id: "a1_s2_c196",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c196_l1",
              original: "Domani.",
              literal: "Tomorrow.",
              tokens: [
                {
                  word: "Domani",
                  lemma: "domani",
                  pos: "adverb",
                  meaning: "tomorrow",
                },
                {
                  word: "a domani",
                  lemma: "a domani",
                  pos: "idiom",
                  meaning: "until tomorrow / see you tomorrow",
                },
              ],
              grammarNote: "Alice sets the exact deadline for the prank: tomorrow, when Falstaff will be summoned to Ford's house between two and three.",
            },
          ],
        },
        {
          id: "a1_s2_c197",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c197_l1",
              original: "Sì. Sì.",
              literal: "Yes. Yes.",
              tokens: [
                {
                  word: "Sì",
                  lemma: "sì",
                  pos: "adverb",
                  meaning: "yes",
                },
                {
                  word: "sì sì",
                  lemma: "sì",
                  pos: "idiom",
                  meaning: "yes indeed / absolutely",
                },
              ],
              grammarNote: "Quickly enthusiastically accepts the commission with double affirmation, ready to deploy her reverent 'Reverenza!' bows the next morning.",
            },
          ],
        },
        {
          id: "a1_s2_c198",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c198_l1",
              original: "Buon dì, Meg.",
              literal: "Good day, Meg.",
              tokens: [
                {
                  word: "Buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocope of buono)",
                },
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day (poetic/archaic for giorno)",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
              ],
              grammarNote: "Alice bids farewell to Meg Page. 'Buon dì' uses the poetic term 'dì' (from Latin dies).",
            },
          ],
        },
        {
          id: "a1_s2_c199",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a1_s2_c199_l1",
              original: "Nannetta,",
              literal: "Nannetta,",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
                {
                  word: "Anna",
                  lemma: "Anna",
                  pos: "noun",
                  meaning: "Anne / Anna (etymological root)",
                },
              ],
              grammarNote: "Mistress Quickly turns to Alice's young daughter Nannetta with warm maternal affection.",
            },
            {
              id: "a1_s2_c199_l2",
              original: "buon dì.",
              literal: "good day.",
              tokens: [
                {
                  word: "buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocope of buono)",
                },
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "buondì",
                  lemma: "buondì",
                  pos: "noun",
                  meaning: "good day / good morning",
                },
              ],
              grammarNote: "Quickly concludes her parting greeting to Nannetta: 'buon dì'.",
            },
          ],
        },
        {
          id: "a1_s2_c200",
          speaker: "Nannetta",
          lines: [
            {
              id: "a1_s2_c200_l1",
              original: "Addio.",
              literal: "Farewell.",
              tokens: [
                {
                  word: "Addio",
                  lemma: "addio",
                  pos: "interjection",
                  meaning: "farewell / goodbye",
                },
              ],
              grammarNote: "The lovers and Alice exchange quick farewells as the meeting breaks up.",
            },
          ],
        },
        {
          id: "a1_s2_c201",
          speaker: "Meg Page",
          lines: [
            {
              id: "a1_s2_c201_l1",
              original: "Buon dì.",
              literal: "Good day.",
              tokens: [
                {
                  word: "Buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (apocope of buono)",
                },
                {
                  word: "dì",
                  lemma: "dì",
                  pos: "noun",
                  meaning: "day",
                },
                {
                  word: "buono",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good / kind",
                },
              ],
              grammarNote: "Meg Page's merry parting reply as the women prepare to disperse.",
            },
          ],
        },
        {
          id: "a1_s2_c202",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a1_s2_c202_l1",
              original: "Vedrai che quell'epa",
              literal: "You shall see that that belly",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you shall see (2nd sing. future)",
                },
                {
                  word: "epa",
                  lemma: "epa",
                  pos: "noun",
                  meaning: "paunch / belly / bellyful (Dantean term)",
                },
                {
                  word: "quell'",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
              ],
              grammarNote: "Boito borrows the visceral Dantean term 'epa' (paunch/guts, Inferno XXV). Alice initiates the ecstatic concluding ostinato about Falstaff's belly.",
            },
            {
              id: "a1_s2_c202_l2",
              original: "terribile e tronfia",
              literal: "terrible and pompous",
              tokens: [
                {
                  word: "terribile",
                  lemma: "terribile",
                  pos: "adjective",
                  meaning: "terrible / formidable / immense",
                },
                {
                  word: "tronfia",
                  lemma: "tronfio",
                  pos: "adjective",
                  meaning: "pompous / swollen / puffed up",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Adjectives describing Falstaff's monstrous paunch. 'Tronfio' denotes vanity puffed up to bursting proportions.",
            },
            {
              id: "a1_s2_c202_l3",
              original: "si gonfia.",
              literal: "swells up.",
              tokens: [
                {
                  word: "gonfia",
                  lemma: "gonfiarsi",
                  pos: "verb",
                  meaning: "swells / puffs up (3rd sing. present reflexive)",
                },
                {
                  word: "si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "itself (reflexive clitic)",
                },
                {
                  word: "gonfiare",
                  lemma: "gonfiare",
                  pos: "verb",
                  meaning: "to inflate / swell",
                },
              ],
              grammarNote: "Present reflexive of 'gonfiarsi'. Alice sets off the mounting vocal excitement with rapid staccato syllables.",
            },
          ],
        },
        {
          id: "a1_s2_c203",
          speaker: "Alice & Meg",
          lines: [
            {
              id: "a1_s2_c203_l1",
              original: "Si gonfia.",
              literal: "It swells up.",
              tokens: [
                {
                  word: "gonfia",
                  lemma: "gonfiarsi",
                  pos: "verb",
                  meaning: "swells / inflates (3rd sing. present reflexive)",
                },
                {
                  word: "Si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "itself (reflexive clitic)",
                },
                {
                  word: "gonfiarsi",
                  lemma: "gonfiarsi",
                  pos: "verb",
                  meaning: "to swell up / become bloated",
                },
              ],
              grammarNote: "Meg joins Alice in doubling the motif 'Si gonfia', increasing dynamic intensity as their laughter mounts.",
            },
          ],
        },
        {
          id: "a1_s2_c204",
          speaker: "The Women",
          lines: [
            {
              id: "a1_s2_c204_l1",
              original: "Si gonfia e poi crepa.",
              literal: "It swells up and then bursts.",
              tokens: [
                {
                  word: "crepa",
                  lemma: "crepare",
                  pos: "verb",
                  meaning: "bursts / cracks / dies (3rd sing. present)",
                },
                {
                  word: "gonfia",
                  lemma: "gonfiarsi",
                  pos: "verb",
                  meaning: "swells (3rd sing. present reflexive)",
                },
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "Si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "itself (reflexive clitic)",
                },
              ],
              grammarNote: "All four women erupt in unison: 'Si gonfia e poi crepa' (It swells and then it bursts!). 'Crepare' is vivid, colloquial vernacular for popping or bursting under pressure.",
            },
          ],
        },
        {
          id: "a1_s2_c205",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a1_s2_c205_l1",
              original: "«Ma il viso mio su lui risplenderà»...",
              literal: "«But my face shall shine upon him»...",
              tokens: [
                {
                  word: "viso",
                  lemma: "viso",
                  pos: "noun",
                  meaning: "face / visage / countenance",
                },
                {
                  word: "mio",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (possessive)",
                },
                {
                  word: "risplenderà",
                  lemma: "risplendere",
                  pos: "verb",
                  meaning: "shall shine / radiate (3rd sing. future)",
                },
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon / on",
                },
                {
                  word: "lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "him",
                },
              ],
              grammarNote: "Alice quotes Falstaff's ridiculous love letter back at him in a glorious, mocking operatic parody: 'Ma il viso mio su lui risplenderà'. Verdi gives her a soaring bel canto phrase.",
            },
            {
              id: "a1_s2_c205_l2",
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
              id: "a1_s2_c205_l3",
              original: "...«come una stella sull'immensità.»",
              literal: "...«like a star upon the boundless expanse.»",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "stella",
                  lemma: "stella",
                  pos: "noun",
                  meaning: "star",
                },
                {
                  word: "sull'",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "upon the (su + l')",
                },
                {
                  word: "immensità",
                  lemma: "immensità",
                  pos: "noun",
                  meaning: "immensity / boundless expanse",
                },
              ],
              grammarNote: "The other women join Alice on the grand mock-sublime climax: Falstaff wrote that her beauty would shine upon his vast body like a star upon immensity. Tronco rhyme on '-à'.",
            },
            {
              id: "a1_s2_c205_l4",
              original: "Si accomiatano e s'allontanano ridendo.",
              literal: "They take their leave and move off laughing.",
              tokens: [
                {
                  word: "accomiatano",
                  lemma: "accomiatarsi",
                  pos: "verb",
                  meaning: "they take leave / bid farewell (3rd plural present reflexive)",
                },
                {
                  word: "allontanano",
                  lemma: "allontanarsi",
                  pos: "verb",
                  meaning: "they move away / depart (3rd plural present reflexive)",
                },
                {
                  word: "ridendo",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "laughing (present gerund)",
                },
                {
                  word: "Si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "themselves (reflexive pronoun)",
                },
              ],
              grammarNote: "Final stage direction of Act 1 Scene 2. The merry wives depart laughing merrily ('ridendo'), having established their moral and intellectual superiority over both the lecherous Falstaff and the suspiciously jealous men.",
            },
          ],
        },
      ],
    },
  ]
};

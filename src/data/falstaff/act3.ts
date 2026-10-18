import { Act } from '../../types/libretto';

export const falstaffAct3: Act = {
  actNumber: 3,
  title: 'Act III',
  originalSetting: "Parte prima: Un piazzale all'esterno dell'«Osteria della Giarrettiera» al tramonto. Parte seconda: Il parco di Windsor sotto la grande quercia di Herne a mezzanotte.",
  setting: "Part I: A square outside the Garter Inn at sunset. Part II: Windsor Forest beneath the great Herne's Oak at midnight.",
  scenes: [
    {
      sceneNumber: 1,
      title: "Parte I: Ehi! Taverniere! (Esterno dell'osteria: Il piano della Quercia di Herne)",
      titleTranslation: "Part I: Hey! Tavernkeeper! (Outside the Inn: The Plot of Herne's Oak)",
      originalDescription: "Un piazzale all’esterno dell’Osteria della Giarrettiera al tramonto. Falstaff esce dal Tamigi fradicio e beve vino caldo. Alice, Ford e le comari organizzano la mascherata notturna delle fate e dei folletti alla Quercia di Herne.",
      description: "A square outside the Garter Inn at sunset. Falstaff emerges soaked from the Thames and drinks warm wine. Alice, Ford, and the merry wives organize the nocturnal masquerade of fairies and goblins at Herne's Oak.",
      cues: [
        {
          id: "a3_s1_c1",
          speaker: "Sir John Falstaff",
          pieceTitle: "Ehi! Taverniere! (Mondo ladro)",
          stageDirection: "seduto sulla panca meditando. Poi si scuote, dà un gran pugno sulla panca e rivolto verso l'interno dell'osteria chiama l'oste",
          stageDirectionTranslation: "seated on the bench, brooding. Then he rouses himself, pounds the bench with his fist, and turned toward the inside of the inn calls the innkeeper",
          lines: [
            {
              id: "a3_s1_c1_l1",
              original: "Ehi taverniere!",
              literal: "Hey innkeeper!",
              tokens: [
                {
                  word: "Ehi",
                  lemma: "ehi",
                  pos: "interjection",
                  meaning: "hey / hey there",
                },
                {
                  word: "taverniere",
                  lemma: "taverniere",
                  pos: "noun",
                  meaning: "innkeeper / host",
                },
              ],
              grammarNote: "Falstaff sits soaked, freezing, and bruised on a bench outside the Garter Inn after being dumped into the Thames; he bellows for the innkeeper to bring relief.",
            },
          ],
        },
        {
          id: "a3_s1_c2",
          speaker: "Sir John Falstaff",
          stageDirection: "ritorna meditabondo",
          stageDirectionTranslation: "returns brooding",
          lines: [
            {
              id: "a3_s1_c2_l1",
              original: "Mondo ladro. Mondo rubaldo.",
              literal: "Thievish world. Roguish world.",
              tokens: [
                {
                  word: "Mondo",
                  lemma: "mondo",
                  pos: "noun",
                  meaning: "world",
                },
                {
                  word: "ladro",
                  lemma: "ladro",
                  pos: "adjective",
                  meaning: "thievish / crooked",
                },
                {
                  word: "rubaldo",
                  lemma: "rubaldo",
                  pos: "adjective",
                  meaning: "roguish / villainous / scoundrelly",
                },
              ],
              grammarNote: "Falstaff vents his indignation against the entire deceitful universe using paired derogatory adjectives.",
            },
            {
              id: "a3_s1_c2_l2",
              original: "Reo mondo! Taverniere: un bicchier di vin caldo.",
              literal: "Wicked world! Innkeeper: a glass of hot wine.",
              tokens: [
                {
                  word: "Reo",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "wicked / guilty / evil",
                },
                {
                  word: "Taverniere",
                  lemma: "taverniere",
                  pos: "noun",
                  meaning: "innkeeper",
                },
                {
                  word: "bicchier",
                  lemma: "bicchiere",
                  pos: "noun",
                  meaning: "glass (apocopic form of bicchiere)",
                },
                {
                  word: "vin caldo",
                  lemma: "vino caldo",
                  pos: "noun",
                  meaning: "hot wine / mulled wine",
                },
              ],
              grammarNote: "Falstaff turns instantly from cosmic grievances to physical restorative comfort, demanding hot spiced wine to thaw his chilled body.",
            },
          ],
        },
        {
          id: "a3_s1_c3",
          speaker: "Sir John Falstaff",
          stageDirection: "l'oste dall'osteria riceve l'ordine e rientra",
          stageDirectionTranslation: "the innkeeper receives the order from the inn and goes back inside",
          lines: [
          ],
        },
        {
          id: "a3_s1_c4",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s1_c4_l1",
              original: "Io, dunque, avrò vissuto tanti anni, audace e destro",
              literal: "Have I, then, lived so many years, a bold and deft",
              tokens: [
                {
                  word: "dunque",
                  lemma: "dunque",
                  pos: "conjunction",
                  meaning: "then / therefore",
                },
                {
                  word: "avrò vissuto",
                  lemma: "vivere",
                  pos: "verb",
                  meaning: "have I lived / shall I have lived (future perfect expressing incredulity)",
                },
                {
                  word: "audace",
                  lemma: "audace",
                  pos: "adjective",
                  meaning: "bold / daring",
                },
                {
                  word: "destro",
                  lemma: "destro",
                  pos: "adjective",
                  meaning: "deft / nimble / dexterous",
                },
              ],
              grammarNote: "Falstaff uses the future perfect of incredulous indignation ('avrò vissuto... per essere...') looking back over his storied career as a valiant knight.",
            },
            {
              id: "a3_s1_c4_l2",
              original: "cavaliere, per essere portato in un canestro",
              literal: "knight, to be carried in a basket",
              tokens: [
                {
                  word: "cavaliere",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / cavalier",
                },
                {
                  word: "portato",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carried / transported",
                },
                {
                  word: "canestro",
                  lemma: "canestro",
                  pos: "noun",
                  meaning: "basket / hamper",
                },
              ],
              grammarNote: "Falstaff recalls with acute mortification being crammed into a filthy clothes hamper like common rubbish.",
            },
            {
              id: "a3_s1_c4_l3",
              original: "e gittato al canale co' pannilini biechi,",
              literal: "and thrown into the canal with vile dirty linens,",
              tokens: [
                {
                  word: "gittato",
                  lemma: "gittare",
                  pos: "verb",
                  meaning: "thrown / pitched (archaic variant of gettato)",
                },
                {
                  word: "canale",
                  lemma: "canale",
                  pos: "noun",
                  meaning: "canal / ditch / watercourse",
                },
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (poetic truncation of coi / con i)",
                },
                {
                  word: "pannilini",
                  lemma: "pannilino",
                  pos: "noun",
                  meaning: "dirty linens / soiled clothes",
                },
                {
                  word: "biechi",
                  lemma: "bieco",
                  pos: "adjective",
                  meaning: "vile / sinister / foul",
                },
              ],
              grammarNote: "Falstaff laments being dumped into the Thames alongside foul, sweat-stained domestic washing.",
            },
            {
              id: "a3_s1_c4_l4",
              original: "come si fa coi gatti e i catellini ciechi.",
              literal: "as one does with cats and blind kittens.",
              tokens: [
                {
                  word: "si fa",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "one does / is done (impersonal reflexive si)",
                },
                {
                  word: "gatti",
                  lemma: "gatto",
                  pos: "noun",
                  meaning: "cats",
                },
                {
                  word: "catellini",
                  lemma: "catellino",
                  pos: "noun",
                  meaning: "blind pups / newborn kittens (poetic diminutive)",
                },
                {
                  word: "ciechi",
                  lemma: "cieco",
                  pos: "adjective",
                  meaning: "blind",
                },
              ],
              grammarNote: "Borrowing directly from Shakespeare ('drowned like a blind puppy'), Falstaff compares his river plunge to drowning unwanted litter.",
            },
            {
              id: "a3_s1_c4_l5",
              original: "Ché se non galleggiava per me quest'epa tronfia,",
              literal: "For if this swollen paunch had not floated for me,",
              tokens: [
                {
                  word: "Ché",
                  lemma: "ché",
                  pos: "conjunction",
                  meaning: "for / because (truncated perché)",
                },
                {
                  word: "galleggiava",
                  lemma: "galleggiare",
                  pos: "verb",
                  meaning: "floated / was buoyant (imperfect indicative in counterfactual conditional)",
                },
                {
                  word: "epa",
                  lemma: "epa",
                  pos: "noun",
                  meaning: "belly / paunch (poetic/Dantean term)",
                },
                {
                  word: "tronfia",
                  lemma: "tronfio",
                  pos: "adjective",
                  meaning: "swollen / puffed up / proud",
                },
              ],
              grammarNote: "In a comic tribute to his obesity, Falstaff praises his enormous belly ('epa tronfia') for serving as a life jacket that kept him afloat.",
            },
            {
              id: "a3_s1_c4_l6",
              original: "certo affogavo. Brutta morte. L'acqua mi gonfia.",
              literal: "certainly I would have drowned. Ugly death. Water makes me swell.",
              tokens: [
                {
                  word: "certo",
                  lemma: "certo",
                  pos: "adverb",
                  meaning: "certainly / surely",
                },
                {
                  word: "affogavo",
                  lemma: "affogare",
                  pos: "verb",
                  meaning: "I would have drowned (imperfect indicative used for conditional)",
                },
                {
                  word: "Brutta",
                  lemma: "brutto",
                  pos: "adjective",
                  meaning: "ugly / hideous / dreadful",
                },
                {
                  word: "morte",
                  lemma: "morte",
                  pos: "noun",
                  meaning: "death",
                },
                {
                  word: "gonfia",
                  lemma: "gonfiare",
                  pos: "verb",
                  meaning: "swells / bloats",
                },
              ],
              grammarNote: "Falstaff abhors water; for a dedicated drinker of sack and wine, filling up with river water is the most grotesque death imaginable.",
            },
            {
              id: "a3_s1_c4_l7",
              original: "Mondo reo. Non c'è più virtù. Tutto declina.",
              literal: "Wicked world. There is no more virtue. Everything declines.",
              tokens: [
                {
                  word: "reo",
                  lemma: "reo",
                  pos: "adjective",
                  meaning: "wicked / sinful / guilty",
                },
                {
                  word: "Non c'è",
                  lemma: "non esserci",
                  pos: "idiom",
                  meaning: "there is no / there is not",
                },
                {
                  word: "virtù",
                  lemma: "virtù",
                  pos: "noun",
                  meaning: "virtue / valor",
                },
                {
                  word: "declina",
                  lemma: "declinare",
                  pos: "verb",
                  meaning: "declines / decays / falls",
                },
              ],
              grammarNote: "Echoing Shakespeare's 'there is nothing but roguery to be found in villainous man', Falstaff bemoans the universal decay of honor.",
            },
            {
              id: "a3_s1_c4_l8",
              original: "Va', vecchio John, va', va' per la tua via; cammina",
              literal: "Go, old John, go, go on your way; walk",
              tokens: [
                {
                  word: "Va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go! (second-person singular imperative of andare)",
                },
                {
                  word: "vecchio",
                  lemma: "vecchio",
                  pos: "adjective",
                  meaning: "old",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "noun",
                  meaning: "way / path",
                },
                {
                  word: "cammina",
                  lemma: "camminare",
                  pos: "verb",
                  meaning: "walk! / march! (imperative)",
                },
              ],
              grammarNote: "Falstaff addresses himself in the third person with tragicomic stoicism, urging his aching frame forward.",
            },
            {
              id: "a3_s1_c4_l9",
              original: "finché tu muoia. Allor scomparirà la vera",
              literal: "until you die. Then shall disappear the true",
              tokens: [
                {
                  word: "finché",
                  lemma: "finché",
                  pos: "conjunction",
                  meaning: "until / as long as",
                },
                {
                  word: "muoia",
                  lemma: "morire",
                  pos: "verb",
                  meaning: "you die (present subjunctive of morire)",
                },
                {
                  word: "Allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then / at that time (apocopic form of allora)",
                },
                {
                  word: "scomparirà",
                  lemma: "scomparire",
                  pos: "verb",
                  meaning: "will disappear / shall vanish",
                },
                {
                  word: "vera",
                  lemma: "vero",
                  pos: "adjective",
                  meaning: "true / genuine",
                },
              ],
              grammarNote: "Subjunctive 'muoia' after temporal 'finché'; Falstaff sees his eventual death as the extinction of genuine manhood from the earth.",
            },
            {
              id: "a3_s1_c4_l10",
              original: "virilità del mondo. Che giornataccia nera!",
              literal: "manhood of the world. What a black, dreadful day!",
              tokens: [
                {
                  word: "virilità",
                  lemma: "virilità",
                  pos: "noun",
                  meaning: "manhood / virility / masculine strength",
                },
                {
                  word: "giornataccia",
                  lemma: "giornataccia",
                  pos: "noun",
                  meaning: "wretched day / dreadful day (pejorative suffix -accia)",
                },
                {
                  word: "nera",
                  lemma: "nero",
                  pos: "adjective",
                  meaning: "black / dark / disastrous",
                },
              ],
              grammarNote: "Falstaff employs the pejorative suffix '-accia' on 'giornata' to underscore the utter disaster of his dunking.",
            },
            {
              id: "a3_s1_c4_l11",
              original: "M'aiuti il ciel! Impinguo troppo. Ho dei peli grigi.",
              literal: "May heaven help me! I am growing too fat. I have gray hairs.",
              tokens: [
                {
                  word: "M'aiuti",
                  lemma: "aiutare",
                  pos: "verb",
                  meaning: "may (heaven) help me (subjunctive wish present subjunctive with clitic mi)",
                },
                {
                  word: "ciel",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "heaven / sky (apocopic form)",
                },
                {
                  word: "Impinguo",
                  lemma: "impinguare",
                  pos: "verb",
                  meaning: "I grow fat / I become obese",
                },
                {
                  word: "troppo",
                  lemma: "troppo",
                  pos: "adverb",
                  meaning: "too much / overly",
                },
                {
                  word: "grigi",
                  lemma: "grigio",
                  pos: "adjective",
                  meaning: "gray",
                },
              ],
              grammarNote: "Falstaff confronts his aging body in a moment of pathetic vanity, lamenting expanding fat and graying hairs.",
            },
          ],
        },
        {
          id: "a3_s1_c5",
          speaker: "Sir John Falstaff",
          stageDirection: "ritorna l'oste portando su d'un vassoio un gran bicchiere di vino caldo. Mette il bicchiere sulla panca e rientra all'osteria",
          stageDirectionTranslation: "the innkeeper returns carrying a large glass of mulled wine on a tray. He sets the glass on the bench and goes back into the inn",
          lines: [
          ],
        },
        {
          id: "a3_s1_c6",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s1_c6_l1",
              original: "Versiamo un po' di vino nell'acqua del Tamigi!",
              literal: "Let us pour a little wine into the water of the Thames!",
              tokens: [
                {
                  word: "Versiamo",
                  lemma: "versare",
                  pos: "verb",
                  meaning: "let us pour (first-person plural imperative/hortative)",
                },
                {
                  word: "un po'",
                  lemma: "un po'",
                  pos: "idiom",
                  meaning: "a little / a bit",
                },
                {
                  word: "vino",
                  lemma: "vino",
                  pos: "noun",
                  meaning: "wine",
                },
                {
                  word: "Tamigi",
                  lemma: "Tamigi",
                  pos: "noun",
                  meaning: "Thames (the river Thames)",
                },
              ],
              grammarNote: "Hortative 'Versiamo'; Falstaff drinks hot wine to blend with and counteract the cold river water inside him.",
            },
          ],
        },
        {
          id: "a3_s1_c7",
          speaker: "Sir John Falstaff",
          stageDirection: "beve sorseggiando ed assaporando. Si sbottona il panciotto, si sdraia, ribeve a sorsate, rianimandosi poco a poco",
          stageDirectionTranslation: "he drinks, sipping and savoring. He unbuttons his waistcoat, stretches out, drinks again in sips, reviving little by little",
          lines: [
            {
              id: "a3_s1_c7_l1",
              original: "Buono. Ber del vino dolce e sbottonarsi al sole,",
              literal: "Good. To drink sweet wine and unbutton oneself in the sun,",
              tokens: [
                {
                  word: "Buono",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good / delicious",
                },
                {
                  word: "Ber",
                  lemma: "bere",
                  pos: "verb",
                  meaning: "to drink (apocopic infinitive of bere)",
                },
                {
                  word: "dolce",
                  lemma: "dolce",
                  pos: "adjective",
                  meaning: "sweet / soothing",
                },
                {
                  word: "sbottonarsi",
                  lemma: "sbottonarsi",
                  pos: "verb",
                  meaning: "to unbutton oneself (reflexive infinitive)",
                },
                {
                  word: "sole",
                  lemma: "sole",
                  pos: "noun",
                  meaning: "sun / sunshine",
                },
              ],
              grammarNote: "Falstaff begins his sublime monologue celebrating the restorative, life-giving virtues of wine and warm sunshine.",
            },
            {
              id: "a3_s1_c7_l2",
              original: "dolce cosa! Il buon vino sperde le tetre fole",
              literal: "sweet thing! Good wine scatters the gloomy fables",
              tokens: [
                {
                  word: "dolce",
                  lemma: "dolce",
                  pos: "adjective",
                  meaning: "sweet / delightful",
                },
                {
                  word: "sperde",
                  lemma: "sperdere",
                  pos: "verb",
                  meaning: "scatters / disperses (poetic for disperde)",
                },
                {
                  word: "tetre",
                  lemma: "tetro",
                  pos: "adjective",
                  meaning: "gloomy / dark / dismal",
                },
                {
                  word: "fole",
                  lemma: "fola",
                  pos: "noun",
                  meaning: "idle tales / fantasies / fables",
                },
              ],
              grammarNote: "Boito employs the literary word 'fole' (foolish or gloomy delusions) to show wine driving off melancholic spirits.",
            },
            {
              id: "a3_s1_c7_l3",
              original: "dello sconforto, accende l'occhio e il pensier, dal labbro",
              literal: "of despondency, lights up the eye and thought, from the lip",
              tokens: [
                {
                  word: "sconforto",
                  lemma: "sconforto",
                  pos: "noun",
                  meaning: "despondency / grief / dejection",
                },
                {
                  word: "accende",
                  lemma: "accendere",
                  pos: "verb",
                  meaning: "lights up / kindles / enlivens",
                },
                {
                  word: "pensier",
                  lemma: "pensiero",
                  pos: "noun",
                  meaning: "thought / mind (apocopic form)",
                },
                {
                  word: "labbro",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lip",
                },
              ],
              grammarNote: "Falstaff charts the physical ascent of wine from the lips through the bloodstream to ignite intellect and vision.",
            },
            {
              id: "a3_s1_c7_l4",
              original: "sale al cervel e quivi risveglia il picciol fabbro",
              literal: "rises to the brain and there awakens the little blacksmith",
              tokens: [
                {
                  word: "sale",
                  lemma: "salire",
                  pos: "verb",
                  meaning: "rises / ascends",
                },
                {
                  word: "cervel",
                  lemma: "cervello",
                  pos: "noun",
                  meaning: "brain / mind (apocopic form)",
                },
                {
                  word: "quivi",
                  lemma: "quivi",
                  pos: "adverb",
                  meaning: "there / in that place (literary adverb)",
                },
                {
                  word: "risveglia",
                  lemma: "risvegliare",
                  pos: "verb",
                  meaning: "reawakens / stirs up",
                },
                {
                  word: "fabbro",
                  lemma: "fabbro",
                  pos: "noun",
                  meaning: "blacksmith / smith",
                },
              ],
              grammarNote: "Literary 'quivi' (there); wine is personified as a busy little blacksmith hammering out joyful tingling sensations in the brain.",
            },
            {
              id: "a3_s1_c7_l5",
              original: "dei trilli; un negro grillo che vibra entro l'uom brillo.",
              literal: "of trills; a black cricket that vibrates inside the tipsy man.",
              tokens: [
                {
                  word: "trilli",
                  lemma: "trillo",
                  pos: "noun",
                  meaning: "trills / vibrations / musical buzzes",
                },
                {
                  word: "negro",
                  lemma: "negro",
                  pos: "adjective",
                  meaning: "black / dark (poetic for nero)",
                },
                {
                  word: "grillo",
                  lemma: "grillo",
                  pos: "noun",
                  meaning: "cricket / whim / caprice",
                },
                {
                  word: "vibra",
                  lemma: "vibrare",
                  pos: "verb",
                  meaning: "vibrates / chirps",
                },
                {
                  word: "brillo",
                  lemma: "brillo",
                  pos: "adjective",
                  meaning: "tipsy / mellow",
                },
              ],
              grammarNote: "Boito's virtuosic internal rhyme scheme ('trilli... grillo... brillo') mimics the pleasant buzzing hum of intoxication.",
            },
            {
              id: "a3_s1_c7_l6",
              original: "Trilla ogni fibra in cor, l'allegro etere al trillo",
              literal: "Every fiber trills in the heart, the merry ether to the trill",
              tokens: [
                {
                  word: "Trilla",
                  lemma: "trillare",
                  pos: "verb",
                  meaning: "trills / quivers / buzzes",
                },
                {
                  word: "fibra",
                  lemma: "fibra",
                  pos: "noun",
                  meaning: "fiber / sinew",
                },
                {
                  word: "cor",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (poetic shortening)",
                },
                {
                  word: "allegro",
                  lemma: "allegro",
                  pos: "adjective",
                  meaning: "merry / cheerful / joyful",
                },
                {
                  word: "etere",
                  lemma: "etere",
                  pos: "noun",
                  meaning: "ether / atmosphere / sky",
                },
              ],
              grammarNote: "Verdi's orchestra introduces an iconic, shimmering trill that expands from a single instrument to the entire orchestra as Falstaff sings.",
            },
            {
              id: "a3_s1_c7_l7",
              original: "guizza e il giocondo globo squilibra una demenza",
              literal: "darts and the joyful globe unbalances a dementia",
              tokens: [
                {
                  word: "guizza",
                  lemma: "guizzare",
                  pos: "verb",
                  meaning: "darts / flashes / quivers",
                },
                {
                  word: "giocondo",
                  lemma: "giocondo",
                  pos: "adjective",
                  meaning: "joyful / jocund / glad",
                },
                {
                  word: "globo",
                  lemma: "globo",
                  pos: "noun",
                  meaning: "globe / earth / world",
                },
                {
                  word: "squilibra",
                  lemma: "squilibrare",
                  pos: "verb",
                  meaning: "unbalances / deranges",
                },
                {
                  word: "demenza",
                  lemma: "demenza",
                  pos: "noun",
                  meaning: "madness / frenzy / dementia",
                },
              ],
              grammarNote: "Falstaff imagines the entire planet thrown off balance in a cosmic carnival frenzy of wine-induced madness.",
            },
            {
              id: "a3_s1_c7_l8",
              original: "trillante! E il trillo invade il mondo!...",
              literal: "trilling! And the trill invades the world!...",
              tokens: [
                {
                  word: "trillante",
                  lemma: "trillante",
                  pos: "adjective",
                  meaning: "trilling / vibrant / buzzing",
                },
                {
                  word: "trillo",
                  lemma: "trillo",
                  pos: "noun",
                  meaning: "trill / vibration",
                },
                {
                  word: "invade",
                  lemma: "invadere",
                  pos: "verb",
                  meaning: "invades / permeates / engulfs",
                },
                {
                  word: "mondo",
                  lemma: "mondo",
                  pos: "noun",
                  meaning: "world",
                },
              ],
              grammarNote: "The grand climax of Falstaff's monologue where the orchestral trill reaches full fortissimo, symbolizing universal joy.",
            },
            {
              id: "a3_s1_c7_l9",
              original: "Falstaff, mrs. Quickly. Poi nel fondo Alice,",
              literal: "Falstaff, Mrs. Quickly. Then in the background Alice,",
              tokens: [
                {
                  word: "mrs.",
                  lemma: "mrs.",
                  pos: "noun",
                  meaning: "mistress / Mrs.",
                },
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "background / rear of stage",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper noun)",
                },
              ],
              grammarNote: "Libretto stage direction marking Falstaff and Quickly downstage while Alice and her confederates creep in upstage.",
            },
            {
              id: "a3_s1_c7_l10",
              original: "Nannetta, Meg, mr. Ford, Dr. Cajus e Fenton.",
              literal: "Nannetta, Meg, Mr. Ford, Dr. Caius and Fenton.",
              tokens: [
                {
                  word: "mr.",
                  lemma: "mr.",
                  pos: "noun",
                  meaning: "Mr. / Mister",
                },
                {
                  word: "Dr.",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Dr. / Doctor",
                },
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton (proper noun)",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
              ],
              grammarNote: "Libretto character listing indicating the full ensemble of Windsor conspirators watching Falstaff from concealment.",
            },
          ],
        },
        {
          id: "a3_s1_c8",
          speaker: "Mrs. Quickly",
          stageDirection: "inchinandosi e interrompendo Falstaff",
          stageDirectionTranslation: "bowing and interrupting Falstaff",
          lines: [
            {
              id: "a3_s1_c8_l1",
              original: "Reverenza.",
              literal: "Reverence.",
              tokens: [
                {
                  word: "Reverenza",
                  lemma: "reverenza",
                  pos: "noun",
                  meaning: "reverence / curtsy / bow",
                },
              ],
              grammarNote: "Mrs. Quickly curtsies deeply, repeating her famous formulaic greeting from Act 2 Scene 1, which immediately triggers Falstaff's fury.",
            },
            {
              id: "a3_s1_c8_l2",
              original: "La bella Alice...",
              literal: "Fair Alice...",
              tokens: [
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "fair / beautiful",
                },
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper noun)",
                },
              ],
              grammarNote: "Quickly brings up Alice's name again, testing Falstaff's willingness to listen.",
            },
          ],
        },
        {
          id: "a3_s1_c9",
          speaker: "Sir John Falstaff",
          stageDirection: "alzandosi e scattando",
          stageDirectionTranslation: "standing up e scattando",
          lines: [
            {
              id: "a3_s1_c9_l1",
              original: "Al diavolo te con Alice bella!",
              literal: "To the devil with you and fair Alice!",
              tokens: [
                {
                  word: "Al diavolo",
                  lemma: "al diavolo",
                  pos: "idiom",
                  meaning: "to the devil / go to the devil",
                },
                {
                  word: "te",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (accusative/disjunctive)",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with / and",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "fair / beautiful (used with bitter irony)",
                },
              ],
              grammarNote: "Falstaff explodes in wrath, mocking the phrase 'Alice bella' and cursing both women.",
            },
            {
              id: "a3_s1_c9_l2",
              original: "Ne ho piene le bisacce! Ne ho piene le budella!",
              literal: "I have had my saddlebags full of it! I have had my guts full of it!",
              tokens: [
                {
                  word: "Ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "of it / thereof (partitive clitic)",
                },
                {
                  word: "ho piene",
                  lemma: "avere pieno",
                  pos: "idiom",
                  meaning: "I have had full of / I am sick and tired of",
                },
                {
                  word: "bisacce",
                  lemma: "bisaccia",
                  pos: "noun",
                  meaning: "saddlebags / knapsacks",
                },
                {
                  word: "budella",
                  lemma: "budello",
                  pos: "noun",
                  meaning: "guts / intestines (irregular feminine plural)",
                },
              ],
              grammarNote: "Partitive clitic 'ne' in the colorful colloquial idiom 'averne piene le bisacce / budella' (to be fed up to the gills); note irregular feminine plural 'budella'.",
            },
          ],
        },
        {
          id: "a3_s1_c10",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a3_s1_c10_l1",
              original: "Voi siete errato...",
              literal: "You are mistaken...",
              tokens: [
                {
                  word: "siete",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (second-person plural)",
                },
                {
                  word: "errato",
                  lemma: "errare",
                  pos: "adjective",
                  meaning: "mistaken / in error",
                },
              ],
              grammarNote: "Polite plural 'Voi'; Quickly attempts to soothe Falstaff's outrage by feigning total innocence.",
            },
          ],
        },
        {
          id: "a3_s1_c11",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s1_c11_l1",
              original: "Un canchero! Sento ancor le cornate",
              literal: "A pox on it! I still feel the horn-blows",
              tokens: [
                {
                  word: "canchero",
                  lemma: "canchero",
                  pos: "noun",
                  meaning: "pox / curse / canker (oath)",
                },
                {
                  word: "Sento",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "I feel / I sense",
                },
                {
                  word: "ancor",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / yet (apocopic form)",
                },
                {
                  word: "cornate",
                  lemma: "cornata",
                  pos: "noun",
                  meaning: "blows from horns / buttings",
                },
              ],
              grammarNote: "'Un canchero!' is a vulgar Italian expletive; Falstaff refers to the violent, jealous rampage of Ford.",
            },
            {
              id: "a3_s1_c11_l2",
              original: "di quell'irco geloso! Ho ancor l'ossa arrembate",
              literal: "of that jealous billy-goat! My bones are still battered",
              tokens: [
                {
                  word: "irco",
                  lemma: "irco",
                  pos: "noun",
                  meaning: "billy-goat / he-goat (classical term for becco, symbol of cuckoldry)",
                },
                {
                  word: "geloso",
                  lemma: "geloso",
                  pos: "adjective",
                  meaning: "jealous",
                },
                {
                  word: "ossa",
                  lemma: "osso",
                  pos: "noun",
                  meaning: "bones (irregular feminine collective plural)",
                },
                {
                  word: "arrembate",
                  lemma: "arrembato",
                  pos: "adjective",
                  meaning: "battered / strained / bruised",
                },
              ],
              grammarNote: "Falstaff insults Ford as an 'irco geloso' (horned goat/cuckold) and complains of bruised bones ('ossa arrembate', with feminine collective plural 'ossa').",
            },
            {
              id: "a3_s1_c11_l3",
              original: "d'esser rimasto curvo, come una buona lama",
              literal: "from having remained bent double, like a fine blade",
              tokens: [
                {
                  word: "rimasto",
                  lemma: "rimanere",
                  pos: "verb",
                  meaning: "remained / stayed (past participle)",
                },
                {
                  word: "curvo",
                  lemma: "curvo",
                  pos: "adjective",
                  meaning: "bent double / bowed",
                },
                {
                  word: "buona",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "fine / high-quality",
                },
                {
                  word: "lama",
                  lemma: "lama",
                  pos: "noun",
                  meaning: "blade",
                },
              ],
              grammarNote: "Directly translating Shakespeare's description of Falstaff crammed into the hamper 'compassed like a good bilbo, hilt to point, heel to head'.",
            },
            {
              id: "a3_s1_c11_l4",
              original: "di Bilbao, nello spazio d'un panierin di dama!",
              literal: "of Bilbao, in the space of a lady's small basket!",
              tokens: [
                {
                  word: "Bilbao",
                  lemma: "Bilbao",
                  pos: "noun",
                  meaning: "Bilbao (Spanish city famed for steel blades)",
                },
                {
                  word: "spazio",
                  lemma: "spazio",
                  pos: "noun",
                  meaning: "space",
                },
                {
                  word: "panierin",
                  lemma: "panierino",
                  pos: "noun",
                  meaning: "small basket / hamper (diminutive shortened form)",
                },
                {
                  word: "dama",
                  lemma: "dama",
                  pos: "noun",
                  meaning: "lady / gentlewoman",
                },
              ],
              grammarNote: "Falstaff contrasts heroic martial imagery (swords of Bilbao) with the humiliating reality of a lady's laundry basket ('panierin di dama').",
            },
            {
              id: "a3_s1_c11_l5",
              original: "Con quel tufo! E quel caldo! Un uom della mia tempra,",
              literal: "With that stench! And that heat! A man of my temper,",
              tokens: [
                {
                  word: "tufo",
                  lemma: "tufo",
                  pos: "noun",
                  meaning: "stagnant foul stench / stifling vapor",
                },
                {
                  word: "caldo",
                  lemma: "caldo",
                  pos: "noun",
                  meaning: "heat / swelter",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocopic form)",
                },
                {
                  word: "tempra",
                  lemma: "tempra",
                  pos: "noun",
                  meaning: "temper / constitution / mettle",
                },
              ],
              grammarNote: "'Tufo' denotes the suffocating stench of soiled linen; Falstaff sets up a pun on 'tempra' (sword temper / bodily constitution).",
            },
            {
              id: "a3_s1_c11_l6",
              original: "che in uno stillicidio continuo si distempra!",
              literal: "who in a continuous dripping dissolves!",
              tokens: [
                {
                  word: "stillicidio",
                  lemma: "stillicidio",
                  pos: "noun",
                  meaning: "dripping / continual sweating",
                },
                {
                  word: "continuo",
                  lemma: "continuo",
                  pos: "adjective",
                  meaning: "continuous / incessant",
                },
                {
                  word: "distempra",
                  lemma: "distemprarsi",
                  pos: "verb",
                  meaning: "dissolves / loses temper / melts (reflexive)",
                },
              ],
              grammarNote: "Verbal play between metal 'tempra' and sweating 'si distempra' (losing temper / melting away), describing his profuse perspiration in the hamper.",
            },
            {
              id: "a3_s1_c11_l7",
              original: "Poi, quando fui ben cotto, rovente, incandescente,",
              literal: "Then, when I was well cooked, red-hot, incandescent,",
              tokens: [
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "cotto",
                  lemma: "cuocere",
                  pos: "adjective",
                  meaning: "cooked / baked",
                },
                {
                  word: "rovente",
                  lemma: "rovente",
                  pos: "adjective",
                  meaning: "red-hot / burning",
                },
                {
                  word: "incandescente",
                  lemma: "incandescente",
                  pos: "adjective",
                  meaning: "incandescent / glowing hot",
                },
              ],
              grammarNote: "Falstaff stacks metallurgical adjectives in a dramatic crescendo describing his unbearable overheating.",
            },
            {
              id: "a3_s1_c11_l8",
              original: "m'han tuffato nell'acqua. Canaglie!",
              literal: "they plunged me into the water. Scoundrels!",
              tokens: [
                {
                  word: "m'han tuffato",
                  lemma: "tuffare",
                  pos: "verb",
                  meaning: "they plunged me (clitic mi + truncated hanno + past participle)",
                },
                {
                  word: "acqua",
                  lemma: "acqua",
                  pos: "noun",
                  meaning: "water",
                },
                {
                  word: "Canaglie",
                  lemma: "canaglia",
                  pos: "noun",
                  meaning: "scoundrels / rascals / villains",
                },
              ],
              grammarNote: "Like a piece of hot glowing steel quenched in water, Falstaff was dumped into the icy Thames; he curses his tormentors with furious vehemence.",
            },
          ],
        },
        {
          id: "a3_s1_c12",
          speaker: "Sir John Falstaff",
          stageDirection: "Alice, Meg, Nannetta, mr. Ford, Dr. Cajus, Fenton sbucano dietro una casa, or l'uno or l'altro spiando, non visti da Falstaff e poi si nascondono, poi tornano a spiare",
          stageDirectionTranslation: "Alice, Meg, Nannetta, Mr. Ford, Dr. Caius, and Fenton emerge from behind a house, one or the other peeking out, unseen by Falstaff, then they hide, then resume spying",
          lines: [
            {
              id: "a3_s1_c12_l1",
              original: "QUICKL",
              literal: "QUICKL",
              tokens: [
                {
                  word: "QUICKL",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (truncated character heading in libretto source)",
                },
              ],
              grammarNote: "Libretto speaker label abbreviation representing Mrs. Quickly attempting to speak.",
            },
            {
              id: "a3_s1_c12_l2",
              original: "Essa è innocente.",
              literal: "She is innocent.",
              tokens: [
                {
                  word: "Essa",
                  lemma: "essa",
                  pos: "pronoun",
                  meaning: "she (subject pronoun)",
                },
                {
                  word: "innocente",
                  lemma: "innocente",
                  pos: "adjective",
                  meaning: "innocent / guiltless",
                },
              ],
              grammarNote: "Quickly protests Alice's complete blamelessness in the laundry basket incident.",
            },
            {
              id: "a3_s1_c12_l3",
              original: "Prendete abbaglio.",
              literal: "You are mistaken.",
              tokens: [
                {
                  word: "Prendete",
                  lemma: "prendere",
                  pos: "verb",
                  meaning: "you take / you make (second-person plural)",
                },
                {
                  word: "abbaglio",
                  lemma: "abbaglio",
                  pos: "noun",
                  meaning: "mistake / blunder / optical illusion",
                },
              ],
              grammarNote: "Idiomatic expression 'prendere un abbaglio' (to make a blunder / to be under an illusion); Quickly tells Falstaff he has misjudged Alice.",
            },
          ],
        },
        {
          id: "a3_s1_c13",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s1_c13_l1",
              original: "Vattene!",
              literal: "Be gone!",
              tokens: [
                {
                  word: "Vattene",
                  lemma: "andarsene",
                  pos: "verb",
                  meaning: "go away! / be gone! (pronominal imperative va' + ti + ne with syntactic doubling)",
                },
                {
                  word: "ne",
                  lemma: "ne",
                  pos: "particle",
                  meaning: "away / thence (pronominal clitic particle)",
                },
              ],
              grammarNote: "Pronominal imperative of 'andarsene' ('va' + ti + ne' -> 'vattene'); Falstaff tries to dismiss Quickly.",
            },
          ],
        },
        {
          id: "a3_s1_c14",
          speaker: "Mrs. Quickly",
          stageDirection: "infervorata",
          stageDirectionTranslation: "impassioned",
          lines: [
            {
              id: "a3_s1_c14_l1",
              original: "La colpa è di quei fanti",
              literal: "The blame belongs to those servants",
              tokens: [
                {
                  word: "colpa",
                  lemma: "colpa",
                  pos: "noun",
                  meaning: "blame / fault",
                },
                {
                  word: "quei",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "those (demonstrative)",
                },
                {
                  word: "fanti",
                  lemma: "fante",
                  pos: "noun",
                  meaning: "servants / knaves / footmen",
                },
              ],
              grammarNote: "Quickly cunningly blames the servants for throwing the basket into the river prematurely.",
            },
            {
              id: "a3_s1_c14_l2",
              original: "malaugurati! Alice piange, urla, invoca i santi.",
              literal: "ill-starred! Alice weeps, screams, invokes the saints.",
              tokens: [
                {
                  word: "malaugurati",
                  lemma: "malaugurato",
                  pos: "adjective",
                  meaning: "ill-starred / accursed / ill-omened",
                },
                {
                  word: "piange",
                  lemma: "piangere",
                  pos: "verb",
                  meaning: "weeps / cries",
                },
                {
                  word: "urla",
                  lemma: "urlare",
                  pos: "verb",
                  meaning: "screams / shrieks",
                },
                {
                  word: "invoca",
                  lemma: "invocare",
                  pos: "verb",
                  meaning: "invokes / calls upon",
                },
                {
                  word: "santi",
                  lemma: "santo",
                  pos: "noun",
                  meaning: "saints",
                },
              ],
              grammarNote: "Quickly describes Alice's theatrical distress with comedic exaggeration to butter up Falstaff.",
            },
            {
              id: "a3_s1_c14_l3",
              original: "Povera donna! V'ama. Leggete.",
              literal: "Poor woman! She loves you. Read.",
              tokens: [
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
                {
                  word: "V'ama",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "she loves you (formal plural clitic vi + ama)",
                },
                {
                  word: "Leggete",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "read! (second-person plural imperative)",
                },
              ],
              grammarNote: "Quickly hands Falstaff a second love note from Alice, playing the solicitous go-between.",
            },
          ],
        },
        {
          id: "a3_s1_c15",
          speaker: "Mrs. Quickly",
          stageDirection: "estrae di tasca una lettera. Falstaff la prende e si mette a leggere",
          stageDirectionTranslation: "pulls a letter from her pocket. Falstaff takes it and begins to read",
          lines: [
          ],
        },
        {
          id: "a3_s1_c16",
          speaker: "Alice Ford",
          stageDirection: "nel fondo sottovoce agli altri, spiando",
          stageDirectionTranslation: "in the background in an undertone to the others, spying",
          lines: [
            {
              id: "a3_s1_c16_l1",
              original: "Legge.",
              literal: "He reads.",
              tokens: [
                {
                  word: "Legge",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "he reads",
                },
              ],
              grammarNote: "Alice observes Falstaff unfolding the note from their hiding place.",
            },
          ],
        },
        {
          id: "a3_s1_c17",
          speaker: "Ford",
          stageDirection: "sottovoce",
          stageDirectionTranslation: "softly / in an undertone",
          lines: [
            {
              id: "a3_s1_c17_l1",
              original: "Legge.",
              literal: "He reads.",
              tokens: [
                {
                  word: "Legge",
                  lemma: "leggere",
                  pos: "verb",
                  meaning: "he reads",
                },
              ],
              grammarNote: "Alice observes Falstaff unfolding the note from their hiding place.",
            },
          ],
        },
        {
          id: "a3_s1_c18",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c18_l1",
              original: "Vedrai che ci ricasca.",
              literal: "You will see that he falls for it again.",
              tokens: [
                {
                  word: "Vedrai",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "you will see (second-person singular future)",
                },
                {
                  word: "ci ricasca",
                  lemma: "ricascare",
                  pos: "verb",
                  meaning: "he falls for it again / relapses (clitic ci + ricascare)",
                },
              ],
              grammarNote: "Colloquial 'ricascarci' (to fall for something again); Nannetta predicts Falstaff will take the bait despite his previous soaking.",
            },
          ],
        },
        {
          id: "a3_s1_c19",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s1_c19_l1",
              original: "L'uom non si corregge.",
              literal: "Man does not correct himself.",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (apocopic form)",
                },
                {
                  word: "corregge",
                  lemma: "correggersi",
                  pos: "verb",
                  meaning: "corrects himself / amends (reflexive)",
                },
              ],
              grammarNote: "Alice delivers a cynical maxim on human nature: foolish men never learn from their humiliation.",
            },
          ],
        },
        {
          id: "a3_s1_c20",
          speaker: "Meg Page",
          stageDirection: "ad Alice, vedendo un gesto nascosto di mrs. Quickly",
          stageDirectionTranslation: "to Alice, noticing a covert gesture from Mrs. Quickly",
          lines: [
            {
              id: "a3_s1_c20_l1",
              original: "Nasconditi.",
              literal: "Hide yourself.",
              tokens: [
                {
                  word: "Nasconditi",
                  lemma: "nascondersi",
                  pos: "verb",
                  meaning: "hide yourself! (reflexive imperative)",
                },
              ],
              grammarNote: "Meg warns Alice to keep down so Falstaff does not spot them in the background.",
            },
          ],
        },
        {
          id: "a3_s1_c21",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a3_s1_c21_l1",
              original: "Rilegge.",
              literal: "He reads again.",
              tokens: [
                {
                  word: "Rilegge",
                  lemma: "rileggere",
                  pos: "verb",
                  meaning: "he reads again / rereads",
                },
              ],
              grammarNote: "Dr. Caius notes that Falstaff is savoring every word of the forged love letter.",
            },
          ],
        },
        {
          id: "a3_s1_c22",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s1_c22_l1",
              original: "Rilegge. L'esca inghiotte.",
              literal: "He reads again. He swallows the bait.",
              tokens: [
                {
                  word: "Rilegge",
                  lemma: "rileggere",
                  pos: "verb",
                  meaning: "he rereads / reads again",
                },
                {
                  word: "esca",
                  lemma: "esca",
                  pos: "noun",
                  meaning: "bait / lure",
                },
                {
                  word: "inghiotte",
                  lemma: "inghiottire",
                  pos: "verb",
                  meaning: "swallows / gulps down",
                },
              ],
              grammarNote: "Ford uses angling imagery ('inghiotte l'esca'): the gullible knight has swallowed their trap completely.",
            },
          ],
        },
        {
          id: "a3_s1_c23",
          speaker: "Sir John Falstaff",
          stageDirection: "rileggendo ad alta voce e con molta attenzione",
          stageDirectionTranslation: "rereading aloud and with great attention",
          lines: [
            {
              id: "a3_s1_c23_l1",
              original: "«T'aspetterò nel parco real, a mezzanotte.",
              literal: "«I shall wait for you in the royal park, at midnight.",
              tokens: [
                {
                  word: "T'aspetterò",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "I shall wait for you (clitic ti + future tense)",
                },
                {
                  word: "parco real",
                  lemma: "parco reale",
                  pos: "noun",
                  meaning: "royal park (Windsor Great Park)",
                },
                {
                  word: "mezzanotte",
                  lemma: "mezzanotte",
                  pos: "noun",
                  meaning: "midnight",
                },
              ],
              grammarNote: "Falstaff reads Alice's note aloud, establishing the nocturnal rendezvous in Windsor Great Park.",
            },
            {
              id: "a3_s1_c23_l2",
              original: "Tu verrai travestito da cacciatore nero",
              literal: "You will come disguised as the Black Hunter",
              tokens: [
                {
                  word: "verrai",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "you will come (second-person singular future)",
                },
                {
                  word: "travestito",
                  lemma: "travestire",
                  pos: "adjective",
                  meaning: "disguised / costumed",
                },
                {
                  word: "cacciatore",
                  lemma: "cacciatore",
                  pos: "noun",
                  meaning: "hunter / huntsman",
                },
                {
                  word: "nero",
                  lemma: "nero",
                  pos: "adjective",
                  meaning: "black / dark",
                },
              ],
              grammarNote: "Alice instructs Falstaff to disguise himself as Herne the Hunter (the 'cacciatore nero'), setting up the masquerade prank.",
            },
            {
              id: "a3_s1_c23_l3",
              original: "alla quercia di Herne.»",
              literal: "at Herne's Oak.»",
              tokens: [
                {
                  word: "quercia",
                  lemma: "quercia",
                  pos: "noun",
                  meaning: "oak / oak tree",
                },
                {
                  word: "Herne",
                  lemma: "Herne",
                  pos: "noun",
                  meaning: "Herne (legendary hunter of Windsor Forest)",
                },
              ],
              grammarNote: "Falstaff reads the rendezvous location: the legendary blasted oak tree associated with Herne's ghost.",
            },
            {
              id: "a3_s1_c23_l4",
              original: "QUICKLY Amor ama il mistero.",
              literal: "QUICKLY Love loves mystery.",
              tokens: [
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (character heading)",
                },
                {
                  word: "Amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (poetic shortening)",
                },
                {
                  word: "ama",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "loves",
                },
                {
                  word: "mistero",
                  lemma: "mistero",
                  pos: "noun",
                  meaning: "mystery / secrecy",
                },
              ],
              grammarNote: "Quickly justifies the strange masquerade with a romantic adage ('Amor ama il mistero'), appealing to Falstaff's courtly fantasies.",
            },
            {
              id: "a3_s1_c23_l5",
              original: "Per rivedervi, Alice si val d'una leggenda",
              literal: "To see you again, Alice avails herself of a legend",
              tokens: [
                {
                  word: "rivedervi",
                  lemma: "rivedere",
                  pos: "verb",
                  meaning: "to see you again (infinitive + formal plural clitic vi)",
                },
                {
                  word: "si val",
                  lemma: "valersi",
                  pos: "verb",
                  meaning: "avails herself / makes use (pronominal valersi, apocopic vale)",
                },
                {
                  word: "leggenda",
                  lemma: "leggenda",
                  pos: "noun",
                  meaning: "legend / folk tale",
                },
              ],
              grammarNote: "Quickly claims that Alice chose the haunted tree because fear of the ghost keeps curious villagers away at midnight.",
            },
            {
              id: "a3_s1_c23_l6",
              original: "popolar. Quella quercia è un luogo da tregenda.",
              literal: "popular. That oak is a place of witches' sabbath.",
              tokens: [
                {
                  word: "popolar",
                  lemma: "popolare",
                  pos: "adjective",
                  meaning: "popular / folk (apocopic form)",
                },
                {
                  word: "quercia",
                  lemma: "quercia",
                  pos: "noun",
                  meaning: "oak tree",
                },
                {
                  word: "luogo",
                  lemma: "luogo",
                  pos: "noun",
                  meaning: "place / spot",
                },
                {
                  word: "tregenda",
                  lemma: "tregenda",
                  pos: "noun",
                  meaning: "witches' sabbath / nocturnal revel / spooky haunt",
                },
              ],
              grammarNote: "'Tregenda' is an expressive word for a demonic midnight gathering; Quickly builds supernatural dread to make the ruse plausible.",
            },
            {
              id: "a3_s1_c23_l7",
              original: "Il cacciatore nero s'è impeso ad un suo ramo.",
              literal: "The Black Hunter hanged himself from one of its branches.",
              tokens: [
                {
                  word: "cacciatore nero",
                  lemma: "cacciatore nero",
                  pos: "noun",
                  meaning: "Black Hunter / Herne the Hunter",
                },
                {
                  word: "s'è impeso",
                  lemma: "impendersi",
                  pos: "verb",
                  meaning: "hanged himself (reflexive past with archaic participle impeso)",
                },
                {
                  word: "ramo",
                  lemma: "ramo",
                  pos: "noun",
                  meaning: "branch / bough",
                },
              ],
              grammarNote: "Quickly recounts the English folk legend of Herne the Hunter hanging himself from an oak in Windsor Forest.",
            },
            {
              id: "a3_s1_c23_l8",
              original: "V'ha chi crede vederlo ricomparir...",
              literal: "There are those who believe they see him reappear...",
              tokens: [
                {
                  word: "V'ha",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "there is / there are (literary existential construction vi + ha)",
                },
                {
                  word: "crede",
                  lemma: "credere",
                  pos: "verb",
                  meaning: "believes / thinks",
                },
                {
                  word: "vederlo",
                  lemma: "vedere",
                  pos: "verb",
                  meaning: "to see him (infinitive + direct object clitic lo)",
                },
                {
                  word: "ricomparir",
                  lemma: "ricomparire",
                  pos: "verb",
                  meaning: "to reappear / haunt again (apocopic infinitive)",
                },
              ],
              grammarNote: "Literary 'V'ha chi' (equivalent to 'c'è chi'); Quickly trails off mysteriously, creating an eerie atmosphere.",
            },
          ],
        },
        {
          id: "a3_s1_c24",
          speaker: "Sir John Falstaff",
          stageDirection: "rabbonito prende per un braccio mrs. Quickly e s'avvia per entrare con essa all'osteria",
          stageDirectionTranslation: "mollified, he takes Mrs. Quickly by the arm and sets off to enter the inn with her",
          lines: [
            {
              id: "a3_s1_c24_l1",
              original: "Entriamo.",
              literal: "Let us go inside.",
              tokens: [
                {
                  word: "Entriamo",
                  lemma: "entrare",
                  pos: "verb",
                  meaning: "let us enter / let us go in (first-person plural imperative)",
                },
              ],
              grammarNote: "Hooked by the tale and eager to discuss the assignation in private, Falstaff invites Quickly into the inn.",
            },
            {
              id: "a3_s1_c24_l2",
              original: "Là si discorre meglio. Narrami la tua frasca.",
              literal: "There one speaks better. Tell me your idle tale.",
              tokens: [
                {
                  word: "Là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there / inside there",
                },
                {
                  word: "si discorre",
                  lemma: "discorrere",
                  pos: "verb",
                  meaning: "one discusses / one speaks (impersonal reflexive si)",
                },
                {
                  word: "meglio",
                  lemma: "meglio",
                  pos: "adverb",
                  meaning: "better",
                },
                {
                  word: "Narrami",
                  lemma: "narrare",
                  pos: "verb",
                  meaning: "tell me! / narrate to me! (imperative with clitic mi)",
                },
                {
                  word: "frasca",
                  lemma: "frasca",
                  pos: "noun",
                  meaning: "idle tale / silly gossip / frivolous story",
                },
              ],
              grammarNote: "'Frasca' literally means a leafy bough, but idiomatically signifies a frivolous story or gossip; Falstaff wants to hear all the details.",
            },
          ],
        },
        {
          id: "a3_s1_c25",
          speaker: "Mrs. Quickly",
          stageDirection: "incominciando il racconto della leggenda con mistero, entra nell'osteria con Falstaff",
          stageDirectionTranslation: "beginning the tale of the legend mysteriously, enters the inn with Falstaff",
          lines: [
            {
              id: "a3_s1_c25_l1",
              original: "Quando il rintocco della mezzanotte...",
              literal: "When the chime of midnight...",
              tokens: [
                {
                  word: "Quando",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when",
                },
                {
                  word: "rintocco",
                  lemma: "rintocco",
                  pos: "noun",
                  meaning: "chime / stroke of a bell / tolling",
                },
                {
                  word: "mezzanotte",
                  lemma: "mezzanotte",
                  pos: "noun",
                  meaning: "midnight",
                },
              ],
              grammarNote: "Quickly begins her narrative as they walk into the inn, which Alice will immediately parody outside.",
            },
            {
              id: "a3_s1_c25_l2",
              original: "Alice, Meg, Nannetta, mr. Ford, Dr. Cajus, Fenton. Poi mrs. Quickly.",
              literal: "Alice, Meg, Nannetta, Mr. Ford, Dr. Caius, Fenton. Then Mrs. Quickly.",
              tokens: [
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "mr.",
                  lemma: "mr.",
                  pos: "noun",
                  meaning: "Mr.",
                },
                {
                  word: "Dr.",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Dr.",
                },
              ],
              grammarNote: "Libretto stage heading marking the full ensemble gathering at center stage after Falstaff exits.",
            },
          ],
        },
        {
          id: "a3_s1_c26",
          speaker: "Ford",
          stageDirection: "che avrà seguita la mossa di Falstaff, dal fondo",
          stageDirectionTranslation: "who has followed Falstaff's movement, from the back",
          lines: [
            {
              id: "a3_s1_c26_l1",
              original: "Ci casca.",
              literal: "He falls for it.",
              tokens: [
                {
                  word: "Ci casca",
                  lemma: "cascarci",
                  pos: "verb",
                  meaning: "he falls into it / he takes the bait (idiomatic verb with clitic ci)",
                },
              ],
              grammarNote: "Ford gleefully observes that Falstaff has walked straight into their woodland trap.",
            },
          ],
        },
        {
          id: "a3_s1_c27",
          speaker: "Alice Ford",
          stageDirection: "avanzandosi con tutto il crocchio, comicamente e misteriosamente ripigliando il racconto di mrs. Quickly",
          stageDirectionTranslation: "advancing with the whole group, comically and mysteriously resuming Mrs. Quickly's tale",
          lines: [
            {
              id: "a3_s1_c27_l1",
              original: "Quando il rintocco della mezzanotte",
              literal: "When the chime of midnight",
              tokens: [
                {
                  word: "Quando",
                  lemma: "quando",
                  pos: "conjunction",
                  meaning: "when",
                },
                {
                  word: "rintocco",
                  lemma: "rintocco",
                  pos: "noun",
                  meaning: "chime / tolling of a bell",
                },
                {
                  word: "mezzanotte",
                  lemma: "mezzanotte",
                  pos: "noun",
                  meaning: "midnight",
                },
              ],
              grammarNote: "Alice begins her mock-gothic ballad recounting the ghost legend of the Black Hunter to the conspirators.",
            },
            {
              id: "a3_s1_c27_l2",
              original: "cupo si sparge nel silente orror,",
              literal: "gloomily spreads in the silent horror,",
              tokens: [
                {
                  word: "cupo",
                  lemma: "cupo",
                  pos: "adverb",
                  meaning: "gloomily / somberly / hollowly (adjective used adverbially)",
                },
                {
                  word: "si sparge",
                  lemma: "spargersi",
                  pos: "verb",
                  meaning: "spreads / echoes / diffuses (reflexive)",
                },
                {
                  word: "silente",
                  lemma: "silente",
                  pos: "adjective",
                  meaning: "silent / hushed (poetic)",
                },
                {
                  word: "orror",
                  lemma: "orrore",
                  pos: "noun",
                  meaning: "horror / dread / gloom (poetic shortening)",
                },
              ],
              grammarNote: "Boito evokes the hollow resonance of the church bell through the terrifying midnight silence.",
            },
            {
              id: "a3_s1_c27_l3",
              original: "sorgon gli spirti vagabondi a frotte",
              literal: "wandering spirits rise in throngs",
              tokens: [
                {
                  word: "sorgon",
                  lemma: "sorgere",
                  pos: "verb",
                  meaning: "they rise / spring forth (apocopic third-person plural)",
                },
                {
                  word: "spirti",
                  lemma: "spirto",
                  pos: "noun",
                  meaning: "spirits / ghosts (poetic contraction for spiriti)",
                },
                {
                  word: "vagabondi",
                  lemma: "vagabondo",
                  pos: "adjective",
                  meaning: "wandering / roaming",
                },
                {
                  word: "a frotte",
                  lemma: "a frotte",
                  pos: "idiom",
                  meaning: "in crowds / in swarms / in throngs",
                },
              ],
              grammarNote: "Poetic contraction 'spirti' and idiom 'a frotte'; restless specters swarm out into Windsor Forest.",
            },
            {
              id: "a3_s1_c27_l4",
              original: "e vien nel parco il nero cacciator.",
              literal: "and into the park comes the Black Hunter.",
              tokens: [
                {
                  word: "vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes (apocopic form of viene)",
                },
                {
                  word: "parco",
                  lemma: "parco",
                  pos: "noun",
                  meaning: "park (Windsor Great Park)",
                },
                {
                  word: "nero",
                  lemma: "nero",
                  pos: "adjective",
                  meaning: "black / sinister",
                },
                {
                  word: "cacciator",
                  lemma: "cacciatore",
                  pos: "noun",
                  meaning: "hunter / huntsman (apocopic form)",
                },
              ],
              grammarNote: "Inversion of subject and verb ('e vien... il nero cacciator') highlighting the dramatic arrival of the spectral huntsman.",
            },
            {
              id: "a3_s1_c27_l5",
              original: "Egli cammina lento, lento, lento,",
              literal: "He walks slow, slow, slow,",
              tokens: [
                {
                  word: "Egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (literary subject pronoun)",
                },
                {
                  word: "cammina",
                  lemma: "camminare",
                  pos: "verb",
                  meaning: "walks / steps",
                },
                {
                  word: "lento",
                  lemma: "lento",
                  pos: "adverb",
                  meaning: "slowly / slow (adjective used adverbially with threefold repetition)",
                },
              ],
              grammarNote: "The threefold repetition of 'lento' mimics the heavy, dragging footsteps of a ghost rising from the grave.",
            },
            {
              id: "a3_s1_c27_l6",
              original: "nel gran letargo della sepoltura.",
              literal: "in the great lethargy of the grave.",
              tokens: [
                {
                  word: "gran",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "great / vast (apocopic form)",
                },
                {
                  word: "letargo",
                  lemma: "letargo",
                  pos: "noun",
                  meaning: "lethargy / deep trance / stupor",
                },
                {
                  word: "sepoltura",
                  lemma: "sepoltura",
                  pos: "noun",
                  meaning: "burial / tomb / grave",
                },
              ],
              grammarNote: "Alice evokes the heavy, supernatural slumber of death from which the hunter is temporarily released.",
            },
            {
              id: "a3_s1_c27_l7",
              original: "S'avanza livido...",
              literal: "He advances livid...",
              tokens: [
                {
                  word: "S'avanza",
                  lemma: "avanzarsi",
                  pos: "verb",
                  meaning: "he advances / moves forward (reflexive)",
                },
                {
                  word: "livido",
                  lemma: "livido",
                  pos: "adjective",
                  meaning: "livid / corpse-pale / leaden",
                },
              ],
              grammarNote: "'Livido' paints the pale, bluish skin of the revenant; Alice deliberately terrifies Nannetta and Meg.",
            },
          ],
        },
        {
          id: "a3_s1_c28",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c28_l1",
              original: "Oh! Che spavento!",
              literal: "Oh! What a fright!",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh!",
                },
                {
                  word: "Che",
                  lemma: "che",
                  pos: "adjective",
                  meaning: "what a (exclamative determiner)",
                },
                {
                  word: "spavento",
                  lemma: "spavento",
                  pos: "noun",
                  meaning: "fright / scare / terror",
                },
              ],
              grammarNote: "Nannetta shivers in mock terror at her mother's eerie storytelling.",
            },
          ],
        },
        {
          id: "a3_s1_c29",
          speaker: "Meg Page",
          lines: [
            {
              id: "a3_s1_c29_l1",
              original: "Già sento il brivido della paura!",
              literal: "Already I feel the shiver of fear!",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "sento",
                  lemma: "sentire",
                  pos: "verb",
                  meaning: "I feel / I sense",
                },
                {
                  word: "brivido",
                  lemma: "brivido",
                  pos: "noun",
                  meaning: "shiver / chill / shudder",
                },
                {
                  word: "paura",
                  lemma: "paura",
                  pos: "noun",
                  meaning: "fear / dread",
                },
              ],
              grammarNote: "Meg plays along with mock shuddering, fueling the gothic theatricality of the scene.",
            },
          ],
        },
        {
          id: "a3_s1_c30",
          speaker: "Alice Ford",
          stageDirection: "con voce naturale",
          stageDirectionTranslation: "in a natural voice",
          lines: [
            {
              id: "a3_s1_c30_l1",
              original: "Fandonie che ai bamboli",
              literal: "Fables that to children",
              tokens: [
                {
                  word: "Fandonie",
                  lemma: "fandonia",
                  pos: "noun",
                  meaning: "fables / tall tales / fairy stories / nonsense",
                },
                {
                  word: "bamboli",
                  lemma: "bambolo",
                  pos: "noun",
                  meaning: "children / babies / toddlers",
                },
              ],
              grammarNote: "Alice shifts tone abruptly, laughing off the ghost legend as mere nursemaid nonsense ('fandonie').",
            },
            {
              id: "a3_s1_c30_l2",
              original: "raccontan le nonne",
              literal: "grandmothers tell",
              tokens: [
                {
                  word: "raccontan",
                  lemma: "raccontare",
                  pos: "verb",
                  meaning: "they tell / narrate (apocopic third-person plural)",
                },
                {
                  word: "nonne",
                  lemma: "nonna",
                  pos: "noun",
                  meaning: "grandmothers",
                },
              ],
              grammarNote: "Alice describes how grandmothers pass down these supernatural bugbear tales.",
            },
            {
              id: "a3_s1_c30_l3",
              original: "con lunghi preamboli,",
              literal: "with long preambles,",
              tokens: [
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
                  meaning: "preambles / introductions / winding buildups",
                },
              ],
              grammarNote: "Describing the slow, theatrical storytelling technique grandmothers use to heighten suspense.",
            },
            {
              id: "a3_s1_c30_l4",
              original: "per farli dormir.",
              literal: "to make them sleep.",
              tokens: [
                {
                  word: "farli",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to make them (causative fare + clitic li)",
                },
                {
                  word: "dormir",
                  lemma: "dormire",
                  pos: "verb",
                  meaning: "sleep (apocopic infinitive)",
                },
              ],
              grammarNote: "Causative construction 'farli dormir' (make them fall asleep); the ghost story is just a bedtime lullaby.",
            },
          ],
        },
        {
          id: "a3_s1_c31",
          speaker: "Alice, Nannetta & Meg",
          lines: [
            {
              id: "a3_s1_c31_l1",
              original: "Vendetta di donne",
              literal: "Vengeance of women",
              tokens: [
                {
                  word: "Vendetta",
                  lemma: "vendetta",
                  pos: "noun",
                  meaning: "vengeance / revenge",
                },
                {
                  word: "donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "The women sing in unison, declaring their shared resolve to punish Falstaff's insolence.",
            },
            {
              id: "a3_s1_c31_l2",
              original: "non deve fallir.",
              literal: "must not fail.",
              tokens: [
                {
                  word: "deve",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "must / ought to",
                },
                {
                  word: "fallir",
                  lemma: "fallire",
                  pos: "verb",
                  meaning: "fail / miss (apocopic infinitive)",
                },
              ],
              grammarNote: "Modal verb 'deve' with apocopic infinitive 'fallir'; their comedic retribution is guaranteed to succeed.",
            },
          ],
        },
        {
          id: "a3_s1_c32",
          speaker: "Alice Ford",
          stageDirection: "ripigliando il racconto",
          stageDirectionTranslation: "resuming the story",
          lines: [
            {
              id: "a3_s1_c32_l1",
              original: "S'avanza livido e il passo converge",
              literal: "He advances livid and his step converges",
              tokens: [
                {
                  word: "passo",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "step / stride / tread",
                },
                {
                  word: "converge",
                  lemma: "convergere",
                  pos: "verb",
                  meaning: "converges / heads toward",
                },
              ],
              grammarNote: "Alice resumes her dramatic ballad, tracing the phantom hunter as he marches toward his oak tree.",
            },
            {
              id: "a3_s1_c32_l2",
              original: "al tronco ove esalò l'anima prava.",
              literal: "at the trunk where he breathed his wicked soul.",
              tokens: [
                {
                  word: "tronco",
                  lemma: "tronco",
                  pos: "noun",
                  meaning: "trunk / tree trunk",
                },
                {
                  word: "ove",
                  lemma: "ove",
                  pos: "adverb",
                  meaning: "where (literary/archaic for dove)",
                },
                {
                  word: "esalò",
                  lemma: "esalare",
                  pos: "verb",
                  meaning: "he exhaled / breathed out (passato remoto)",
                },
                {
                  word: "anima",
                  lemma: "anima",
                  pos: "noun",
                  meaning: "soul / spirit",
                },
                {
                  word: "prava",
                  lemma: "pravo",
                  pos: "adjective",
                  meaning: "wicked / depraved / evil (literary)",
                },
              ],
              grammarNote: "Literary 'ove' and 'esalò l'anima prava' (breathed out his depraved soul); Dantean elevated language for Herne's suicide.",
            },
            {
              id: "a3_s1_c32_l3",
              original: "Sbucan le fate. Sulla fronte egli erge",
              literal: "The fairies pop out. On his forehead he erects",
              tokens: [
                {
                  word: "Sbucan",
                  lemma: "sbucare",
                  pos: "verb",
                  meaning: "they pop out / emerge suddenly (apocopic)",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
                {
                  word: "fronte",
                  lemma: "fronte",
                  pos: "noun",
                  meaning: "forehead / brow",
                },
                {
                  word: "erge",
                  lemma: "ergere",
                  pos: "verb",
                  meaning: "he raises / erects / rears up",
                },
              ],
              grammarNote: "Alice introduces the supernatural fairies and the massive stag antlers worn by the hunter.",
            },
            {
              id: "a3_s1_c32_l4",
              original: "due corna lunghe, lunghe, lunghe...",
              literal: "two horns long, long, long...",
              tokens: [
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns / antlers (irregular feminine plural)",
                },
                {
                  word: "lunghe",
                  lemma: "lungo",
                  pos: "adjective",
                  meaning: "long (feminine plural)",
                },
              ],
              grammarNote: "Irregular feminine plural 'corna'; Alice repeats 'lunghe' with mischievous emphasis, glancing meaningfully at her husband Ford.",
            },
          ],
        },
        {
          id: "a3_s1_c33",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s1_c33_l1",
              original: "Brava.",
              literal: "Splendid.",
              tokens: [
                {
                  word: "Brava",
                  lemma: "bravo",
                  pos: "interjection",
                  meaning: "bravo! / well done! / splendid! (feminine singular)",
                },
              ],
              grammarNote: "Ford applauds Alice's narrative talent, though he feels the stinging barb of her horn jokes.",
            },
            {
              id: "a3_s1_c33_l2",
              original: "Quelle corna saranno la mia gioia!",
              literal: "Those horns will be my joy!",
              tokens: [
                {
                  word: "Quelle",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "those",
                },
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (irregular feminine plural)",
                },
                {
                  word: "saranno",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "will be (third-person plural future)",
                },
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy / delight",
                },
              ],
              grammarNote: "Ford relishes the irony: after dreading cuckold's horns himself, he will now see Falstaff crowned with humiliating stag antlers.",
            },
          ],
        },
        {
          id: "a3_s1_c34",
          speaker: "Alice Ford",
          stageDirection: "a Ford",
          stageDirectionTranslation: "to Ford",
          lines: [
            {
              id: "a3_s1_c34_l1",
              original: "Bada! tu pur ti meriti",
              literal: "Mind you! you also deserve",
              tokens: [
                {
                  word: "Bada",
                  lemma: "badare",
                  pos: "verb",
                  meaning: "mind! / pay attention! (imperative)",
                },
                {
                  word: "pur",
                  lemma: "pure",
                  pos: "adverb",
                  meaning: "also / too (apocopic form of pure)",
                },
                {
                  word: "meriti",
                  lemma: "meritarsi",
                  pos: "verb",
                  meaning: "you deserve / you have earned (reflexive)",
                },
              ],
              grammarNote: "Alice reminds Ford that his insane jealousy and violent home invasion deserve punishment as well.",
            },
            {
              id: "a3_s1_c34_l2",
              original: "qualche castigatoia!",
              literal: "some punishment!",
              tokens: [
                {
                  word: "qualche",
                  lemma: "qualche",
                  pos: "adjective",
                  meaning: "some / a certain",
                },
                {
                  word: "castigatoia",
                  lemma: "castigatoia",
                  pos: "noun",
                  meaning: "punishment / chastisement / lesson (archaic/humorous)",
                },
              ],
              grammarNote: "The rare and playful term 'castigatoia' denotes a comedic reprimand or lesson.",
            },
          ],
        },
        {
          id: "a3_s1_c35",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s1_c35_l1",
              original: "Perdona. Riconosco i miei demeriti.",
              literal: "Forgive me. I recognize my demerits.",
              tokens: [
                {
                  word: "Perdona",
                  lemma: "perdonare",
                  pos: "verb",
                  meaning: "forgive! (imperative)",
                },
                {
                  word: "Riconosco",
                  lemma: "riconoscere",
                  pos: "verb",
                  meaning: "I recognize / I acknowledge",
                },
                {
                  word: "demeriti",
                  lemma: "demerito",
                  pos: "noun",
                  meaning: "demerits / faults / shortcomings",
                },
              ],
              grammarNote: "Ford humbles himself completely before Alice, begging forgiveness for his unwarranted suspicion.",
            },
          ],
        },
        {
          id: "a3_s1_c36",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s1_c36_l1",
              original: "Ma guai se ancor ti coglie",
              literal: "But woe if there still catches you",
              tokens: [
                {
                  word: "guai",
                  lemma: "guaio",
                  pos: "interjection",
                  meaning: "woe! / beware!",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "ancor",
                  lemma: "ancora",
                  pos: "adverb",
                  meaning: "still / again (apocopic form)",
                },
                {
                  word: "coglie",
                  lemma: "cogliere",
                  pos: "verb",
                  meaning: "catches / seizes / strikes",
                },
              ],
              grammarNote: "Formulaic warning 'Ma guai se...' (woe to you if...); Alice sets a strict condition for domestic peace.",
            },
            {
              id: "a3_s1_c36_l2",
              original: "quella mania feroce",
              literal: "that ferocious mania",
              tokens: [
                {
                  word: "mania",
                  lemma: "mania",
                  pos: "noun",
                  meaning: "mania / obsession / craze",
                },
                {
                  word: "feroce",
                  lemma: "feroce",
                  pos: "adjective",
                  meaning: "ferocious / savage / wild",
                },
              ],
              grammarNote: "Alice terms Ford's obsessive jealousy a 'mania feroce' that nearly ruined their household.",
            },
            {
              id: "a3_s1_c36_l3",
              original: "di cercar dentro il guscio d'una noce",
              literal: "of searching inside the shell of a walnut",
              tokens: [
                {
                  word: "cercar",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "to search / look for (apocopic infinitive)",
                },
                {
                  word: "dentro",
                  lemma: "dentro",
                  pos: "preposition",
                  meaning: "inside / within",
                },
                {
                  word: "guscio",
                  lemma: "guscio",
                  pos: "noun",
                  meaning: "shell / nutshell",
                },
                {
                  word: "noce",
                  lemma: "noce",
                  pos: "noun",
                  meaning: "walnut / nut",
                },
              ],
              grammarNote: "Proverbial Italian hyperbole 'cercare nel guscio d'una noce' (looking in a nutshell), mocking Ford's frantic searching of tiny boxes and corners for a hidden lover.",
            },
            {
              id: "a3_s1_c36_l4",
              original: "l'amante di tua moglie.",
              literal: "your wife's lover.",
              tokens: [
                {
                  word: "amante",
                  lemma: "amante",
                  pos: "noun",
                  meaning: "lover",
                },
                {
                  word: "moglie",
                  lemma: "moglie",
                  pos: "noun",
                  meaning: "wife",
                },
              ],
              grammarNote: "Alice teases Ford about his irrational conviction that she was entertaining an illicit paramour.",
            },
            {
              id: "a3_s1_c36_l5",
              original: "Ma il tempo stringe e vuol fantasia lesta.",
              literal: "But time presses and requires quick imagination.",
              tokens: [
                {
                  word: "tempo",
                  lemma: "tempo",
                  pos: "noun",
                  meaning: "time",
                },
                {
                  word: "stringe",
                  lemma: "stringere",
                  pos: "verb",
                  meaning: "presses / is short / tightens",
                },
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "requires / wants (apocopic form of vuole)",
                },
                {
                  word: "fantasia",
                  lemma: "fantasia",
                  pos: "noun",
                  meaning: "imagination / fantasy",
                },
                {
                  word: "lesta",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / nimble / agile",
                },
              ],
              grammarNote: "Idiomatic 'il tempo stringe' (time is running short); Alice urges everyone to quickly finalize their woodland masquerade.",
            },
          ],
        },
        {
          id: "a3_s1_c37",
          speaker: "Meg Page",
          lines: [
            {
              id: "a3_s1_c37_l1",
              original: "Affrettiam.",
              literal: "Let us make haste.",
              tokens: [
                {
                  word: "Affrettiam",
                  lemma: "affrettare",
                  pos: "verb",
                  meaning: "let us hasten / hurry (apocopic first-person plural imperative)",
                },
              ],
              grammarNote: "Hortative imperative with poetic shortening ('affrettiam' for 'affrettiamo'); Meg seconds the call for speed.",
            },
          ],
        },
        {
          id: "a3_s1_c38",
          speaker: "Fenton",
          lines: [
            {
              id: "a3_s1_c38_l1",
              original: "Concertiam la mascherata.",
              literal: "Let us organize the masquerade.",
              tokens: [
                {
                  word: "Concertiam",
                  lemma: "concertare",
                  pos: "verb",
                  meaning: "let us arrange / plan / orchestrate (apocopic imperative)",
                },
                {
                  word: "mascherata",
                  lemma: "mascherata",
                  pos: "noun",
                  meaning: "masquerade / masked revel",
                },
              ],
              grammarNote: "'Concertare' signifies organizing or choreographing a performance; Fenton joins the preparations enthusiastically.",
            },
          ],
        },
        {
          id: "a3_s1_c39",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s1_c39_l1",
              original: "Nannetta!",
              literal: "Nannetta!",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper noun)",
                },
              ],
              grammarNote: "Alice calls her daughter forward to assign her the leading part in the fairy pageant.",
            },
          ],
        },
        {
          id: "a3_s1_c40",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c40_l1",
              original: "Eccola qua!",
              literal: "Here she is!",
              tokens: [
                {
                  word: "Eccola",
                  lemma: "ecco",
                  pos: "idiom",
                  meaning: "here she is (presentative adverb ecco + direct object clitic la)",
                },
                {
                  word: "qua",
                  lemma: "qua",
                  pos: "adverb",
                  meaning: "here",
                },
              ],
              grammarNote: "Nannetta steps up merrily in the third person ('Eccola qua!').",
            },
          ],
        },
        {
          id: "a3_s1_c41",
          speaker: "Alice Ford",
          stageDirection: "a Nannetta",
          stageDirectionTranslation: "to Nannetta",
          lines: [
            {
              id: "a3_s1_c41_l1",
              original: "Sarai la fata",
              literal: "You will be the fairy",
              tokens: [
                {
                  word: "Sarai",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you will be (second-person singular future)",
                },
                {
                  word: "fata",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairy",
                },
              ],
              grammarNote: "Future of role assignment ('sarai'); Alice casts Nannetta as the fairy protagonist.",
            },
            {
              id: "a3_s1_c41_l2",
              original: "regina delle fate, in bianca veste",
              literal: "queen of the fairies, in white garment",
              tokens: [
                {
                  word: "regina",
                  lemma: "regina",
                  pos: "noun",
                  meaning: "queen",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
                {
                  word: "bianca",
                  lemma: "bianco",
                  pos: "adjective",
                  meaning: "white",
                },
                {
                  word: "veste",
                  lemma: "veste",
                  pos: "noun",
                  meaning: "garment / robe / gown",
                },
              ],
              grammarNote: "Alice describes Nannetta's costume as Fairy Queen: pure white robes, details Dr. Caius will overhear.",
            },
            {
              id: "a3_s1_c41_l3",
              original: "chiusa in candido vel, cinta di rose.",
              literal: "enclosed in a snowy veil, girdled with roses.",
              tokens: [
                {
                  word: "chiusa",
                  lemma: "chiudere",
                  pos: "adjective",
                  meaning: "enclosed / wrapped / draped",
                },
                {
                  word: "candido",
                  lemma: "candido",
                  pos: "adjective",
                  meaning: "pure white / snowy / candid",
                },
                {
                  word: "vel",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil (apocopic form)",
                },
                {
                  word: "cinta",
                  lemma: "cingere",
                  pos: "adjective",
                  meaning: "girdled / crowned / bound",
                },
                {
                  word: "rose",
                  lemma: "rosa",
                  pos: "noun",
                  meaning: "roses",
                },
              ],
              grammarNote: "Past participles used adjectivally ('chiusa', 'cinta'); these distinctive costume markers will become the focal point of the marriage intrigue.",
            },
          ],
        },
        {
          id: "a3_s1_c42",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c42_l1",
              original: "E canterò parole armoniose.",
              literal: "And I shall sing harmonious words.",
              tokens: [
                {
                  word: "canterò",
                  lemma: "cantare",
                  pos: "verb",
                  meaning: "I shall sing (first-person singular future)",
                },
                {
                  word: "parole",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "words",
                },
                {
                  word: "armoniose",
                  lemma: "armonioso",
                  pos: "adjective",
                  meaning: "harmonious / melodious",
                },
              ],
              grammarNote: "Nannetta eagerly promises to perform her ethereal fairy song ('Sul fil d'un soffio etesio') in the park.",
            },
          ],
        },
        {
          id: "a3_s1_c43",
          speaker: "Alice Ford",
          stageDirection: "a Meg",
          stageDirectionTranslation: "to Meg",
          lines: [
            {
              id: "a3_s1_c43_l1",
              original: "Tu la verde sarai ninfa silvana,",
              literal: "You will be the green woodland nymph,",
              tokens: [
                {
                  word: "verde",
                  lemma: "verde",
                  pos: "adjective",
                  meaning: "green",
                },
                {
                  word: "ninfa",
                  lemma: "ninfa",
                  pos: "noun",
                  meaning: "nymph",
                },
                {
                  word: "silvana",
                  lemma: "silvano",
                  pos: "adjective",
                  meaning: "woodland / sylvan",
                },
              ],
              grammarNote: "Alice assigns Meg Page the part of the green sylvan nymph.",
            },
            {
              id: "a3_s1_c43_l2",
              original: "e la comare Quickly una befana.",
              literal: "and gossip Quickly an old witch.",
              tokens: [
                {
                  word: "comare",
                  lemma: "comare",
                  pos: "noun",
                  meaning: "gossip / crony / godmother",
                },
                {
                  word: "Quickly",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (proper noun)",
                },
                {
                  word: "befana",
                  lemma: "befana",
                  pos: "noun",
                  meaning: "witch / hag / Befana (folklore figure)",
                },
              ],
              grammarNote: "Alice humorously assigns Mrs. Quickly the role of an old witch ('befana'), playing on her comical demeanor.",
            },
            {
              id: "a3_s1_c43_l3",
              original: "Scende la sera, la scena si oscura.",
              literal: "Evening falls, the scene grows dark.",
              tokens: [
                {
                  word: "Scende",
                  lemma: "scendere",
                  pos: "verb",
                  meaning: "descends / falls",
                },
                {
                  word: "sera",
                  lemma: "sera",
                  pos: "noun",
                  meaning: "evening / nightfall",
                },
                {
                  word: "scena",
                  lemma: "scena",
                  pos: "noun",
                  meaning: "scene / stage",
                },
                {
                  word: "si oscura",
                  lemma: "oscurarsi",
                  pos: "verb",
                  meaning: "grows dark / darkens (reflexive)",
                },
              ],
              grammarNote: "Alice notes nightfall descending on Windsor, signaling that their deadline has arrived.",
            },
          ],
        },
        {
          id: "a3_s1_c44",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c44_l1",
              original: "A meraviglia!",
              literal: "Wonderfully!",
              tokens: [
                {
                  word: "A meraviglia",
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
              grammarNote: "Idiomatic exclamation 'A meraviglia!' expressing enthusiastic delight with the masquerade plan.",
            },
          ],
        },
        {
          id: "a3_s1_c45",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s1_c45_l1",
              original: "Avrò con me dei putti",
              literal: "I shall have with me some boys",
              tokens: [
                {
                  word: "Avrò",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "I shall have (first-person singular future)",
                },
                {
                  word: "con me",
                  lemma: "con me",
                  pos: "preposition",
                  meaning: "with me",
                },
                {
                  word: "dei",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "some (partitive preposition di + i)",
                },
                {
                  word: "putti",
                  lemma: "putto",
                  pos: "noun",
                  meaning: "boys / lads / cherubs",
                },
              ],
              grammarNote: "'Putti' refers to the neighborhood boys recruited to masquerade as the mischievous woodland spirits.",
            },
            {
              id: "a3_s1_c45_l2",
              original: "che fingeran folletti,",
              literal: "who will pretend to be goblins,",
              tokens: [
                {
                  word: "fingeran",
                  lemma: "fingere",
                  pos: "verb",
                  meaning: "they will feign / pretend to be (apocopic future of fingere)",
                },
                {
                  word: "folletti",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves / imps",
                },
              ],
              grammarNote: "Apocopic future 'fingeran'; Alice outlines the roles the children will enact to harass Falstaff.",
            },
            {
              id: "a3_s1_c45_l3",
              original: "e spiritelli,",
              literal: "and sprites,",
              tokens: [
                {
                  word: "spiritelli",
                  lemma: "spiritello",
                  pos: "noun",
                  meaning: "sprites / little spirits (diminutive of spirito)",
                },
              ],
              grammarNote: "Diminutive 'spiritelli' evoking delicate, darting spirits of the forest.",
            },
            {
              id: "a3_s1_c45_l4",
              original: "e diavoletti,",
              literal: "and little devils,",
              tokens: [
                {
                  word: "diavoletti",
                  lemma: "diavoletto",
                  pos: "noun",
                  meaning: "little devils / imps (diminutive of diavolo)",
                },
              ],
              grammarNote: "Playful diminutive 'diavoletti' continuing Alice's rhyming inventory of mythical tormentors.",
            },
            {
              id: "a3_s1_c45_l5",
              original: "e pipistrelli,",
              literal: "and bats,",
              tokens: [
                {
                  word: "pipistrelli",
                  lemma: "pipistrello",
                  pos: "noun",
                  meaning: "bats",
                },
              ],
              grammarNote: "Children disguised in fluttering dark wings as bats to swoop around Falstaff in the gloom.",
            },
            {
              id: "a3_s1_c45_l6",
              original: "e farfarelli.",
              literal: "and mischievous imps.",
              tokens: [
                {
                  word: "farfarelli",
                  lemma: "farfarello",
                  pos: "noun",
                  meaning: "mischievous imps / little demons (Dantean demon name)",
                },
              ],
              grammarNote: "'Farfarello' is a famous imp from Dante's Malebolge in Inferno, used here playfully for masked imps.",
            },
            {
              id: "a3_s1_c45_l7",
              original: "Su Falstaff camuffato in manto e corni",
              literal: "Upon Falstaff disguised in cloak and horns",
              tokens: [
                {
                  word: "camuffato",
                  lemma: "camuffare",
                  pos: "adjective",
                  meaning: "disguised / camouflaged",
                },
                {
                  word: "manto",
                  lemma: "manto",
                  pos: "noun",
                  meaning: "mantle / cloak",
                },
                {
                  word: "corni",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (masculine plural chosen for rhyme with raggiorni)",
                },
              ],
              grammarNote: "Boito selects masculine plural 'corni' (rather than irregular feminine 'corna') to rhyme with 'raggiorni'.",
            },
            {
              id: "a3_s1_c45_l8",
              original: "ci scaglieremo tutti",
              literal: "we shall all fling ourselves",
              tokens: [
                {
                  word: "ci scaglieremo",
                  lemma: "scagliarsi",
                  pos: "verb",
                  meaning: "we shall fling ourselves / pounce (first-person plural future reflexive)",
                },
                {
                  word: "tutti",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all / everyone",
                },
              ],
              grammarNote: "Reflexive future 'ci scaglieremo'; Alice describes the sudden collective woodland ambush.",
            },
            {
              id: "a3_s1_c45_l9",
              original: "e lo tempesteremo",
              literal: "and we shall barrage him",
              tokens: [
                {
                  word: "lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object clitic)",
                },
                {
                  word: "tempesteremo",
                  lemma: "tempestare",
                  pos: "verb",
                  meaning: "we shall barrage / pelt / storm upon (future)",
                },
              ],
              grammarNote: "'Tempestare' portrays a ceaseless hailstorm of pinches, pokes, and jeers aimed at the fat knight.",
            },
            {
              id: "a3_s1_c45_l10",
              original: "finch'abbia confessata",
              literal: "until he has confessed",
              tokens: [
                {
                  word: "finch'",
                  lemma: "finché",
                  pos: "conjunction",
                  meaning: "until (elided form of finché)",
                },
                {
                  word: "abbia confessata",
                  lemma: "confessare",
                  pos: "verb",
                  meaning: "he has confessed (past subjunctive with past participle agreement)",
                },
              ],
              grammarNote: "Temporal clause taking past subjunctive 'abbia confessata', with traditional agreement with feminine direct object 'perversità'.",
            },
            {
              id: "a3_s1_c45_l11",
              original: "la sua perversità.",
              literal: "his perversity.",
              tokens: [
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his",
                },
                {
                  word: "perversità",
                  lemma: "perversità",
                  pos: "noun",
                  meaning: "perversity / wicked lust / rogue behavior",
                },
              ],
              grammarNote: "Alice names Falstaff's comical offense: his brazen attempt to seduce respectable married matrons.",
            },
            {
              id: "a3_s1_c45_l12",
              original: "Poi ci smaschereremo",
              literal: "Then we shall unmask ourselves",
              tokens: [
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "ci smaschereremo",
                  lemma: "smascherarsi",
                  pos: "verb",
                  meaning: "we shall unmask ourselves (future reflexive)",
                },
              ],
              grammarNote: "The public revelation at the conclusion of the prank, revealing the conspirators' true identities.",
            },
            {
              id: "a3_s1_c45_l13",
              original: "e, pria che il ciel raggiorni,",
              literal: "and, before the sky dawns again,",
              tokens: [
                {
                  word: "pria",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "before / earlier (poetic/archaic for prima)",
                },
                {
                  word: "ciel",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "sky / heaven (apocopic form)",
                },
                {
                  word: "raggiorni",
                  lemma: "raggiornare",
                  pos: "verb",
                  meaning: "dawns again / becomes day again (impersonal subjunctive)",
                },
              ],
              grammarNote: "Poetic 'pria che' followed by present subjunctive 'raggiorni' (impersonal verb for daybreak).",
            },
            {
              id: "a3_s1_c45_l14",
              original: "la giuliva brigata",
              literal: "the merry band",
              tokens: [
                {
                  word: "giuliva",
                  lemma: "giulivo",
                  pos: "adjective",
                  meaning: "merry / joyful / jubilant",
                },
                {
                  word: "brigata",
                  lemma: "brigata",
                  pos: "noun",
                  meaning: "band / company / merry troop",
                },
              ],
              grammarNote: "'Giuliva brigata' echoes Boccaccio's Decameron, framing the townspeople as a cheerful community of tricksters.",
            },
            {
              id: "a3_s1_c45_l15",
              original: "se ne ritornerà.",
              literal: "shall take itself back.",
              tokens: [
                {
                  word: "se ne ritornerà",
                  lemma: "ritornarsene",
                  pos: "verb",
                  meaning: "shall return / go back home (pronominal verb ritornarsene with clitics si + ne)",
                },
              ],
              grammarNote: "Pronominal reflexive 'ritornarsene' emphasizing a cheerful, satisfying journey back home before dawn.",
            },
            {
              id: "a3_s1_c45_l16",
              original: "MEG Vien sera. Rincasiam.",
              literal: "MEG Evening comes. Let us go home.",
              tokens: [
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (character heading)",
                },
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / approaches (apocopic form of viene)",
                },
                {
                  word: "sera",
                  lemma: "sera",
                  pos: "noun",
                  meaning: "evening",
                },
                {
                  word: "Rincasiam",
                  lemma: "rincasare",
                  pos: "verb",
                  meaning: "let us go home (apocopic first-person plural imperative)",
                },
              ],
              grammarNote: "Meg notes twilight falling and urges the group to hurry home to prepare their costumes.",
            },
            {
              id: "a3_s1_c45_l17",
              original: "ALICE L'appuntamento",
              literal: "ALICE The rendezvous",
              tokens: [
                {
                  word: "ALICE",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (character heading)",
                },
                {
                  word: "appuntamento",
                  lemma: "appuntamento",
                  pos: "noun",
                  meaning: "rendezvous / appointment / meeting",
                },
              ],
              grammarNote: "Alice gives the final rendezvous reminder before the conspirators disband.",
            },
            {
              id: "a3_s1_c45_l18",
              original: "è alla quercia di Herne.",
              literal: "is at Herne's Oak.",
              tokens: [
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "at the (preposition a + feminine article la)",
                },
                {
                  word: "quercia",
                  lemma: "quercia",
                  pos: "noun",
                  meaning: "oak / oak tree",
                },
                {
                  word: "Herne",
                  lemma: "Herne",
                  pos: "noun",
                  meaning: "Herne (proper noun)",
                },
              ],
              grammarNote: "The focal point of the final scene: the ancient, haunted Herne's Oak in Windsor Great Park.",
            },
          ],
        },
        {
          id: "a3_s1_c46",
          speaker: "Fenton",
          lines: [
            {
              id: "a3_s1_c46_l1",
              original: "È inteso.",
              literal: "It is agreed.",
              tokens: [
                {
                  word: "È inteso",
                  lemma: "essere inteso",
                  pos: "idiom",
                  meaning: "it is agreed / understood",
                },
                {
                  word: "inteso",
                  lemma: "intendere",
                  pos: "adjective",
                  meaning: "understood / agreed upon",
                },
              ],
              grammarNote: "Fenton acknowledges the rendezvous instructions.",
            },
          ],
        },
        {
          id: "a3_s1_c47",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c47_l1",
              original: "A meraviglia!",
              literal: "Wonderfully!",
              tokens: [
                {
                  word: "A meraviglia",
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
              grammarNote: "Idiomatic exclamation 'A meraviglia!' expressing enthusiastic delight with the masquerade plan.",
            },
            {
              id: "a3_s1_c47_l2",
              original: "Oh che allegro spavento!",
              literal: "Oh what merry fright!",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh!",
                },
                {
                  word: "allegro",
                  lemma: "allegro",
                  pos: "adjective",
                  meaning: "merry / cheerful",
                },
                {
                  word: "spavento",
                  lemma: "spavento",
                  pos: "noun",
                  meaning: "fright / scare / spook",
                },
              ],
              grammarNote: "Playful oxymoron ('allegro spavento') summarizing the festive carnival fright awaiting Falstaff.",
            },
          ],
        },
        {
          id: "a3_s1_c48",
          speaker: "Alice, Nannetta & Fenton",
          stageDirection: "scambievolmente",
          stageDirectionTranslation: "mutually",
          lines: [
            {
              id: "a3_s1_c48_l1",
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
          id: "a3_s1_c49",
          speaker: "Meg Page",
          stageDirection: "a Nannetta e Alice",
          stageDirectionTranslation: "to Nannetta e Alice",
          lines: [
            {
              id: "a3_s1_c49_l1",
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
          id: "a3_s1_c50",
          speaker: "Meg Page",
          stageDirection: "Alice, Nannetta, Fenton si avviano per uscire da sinistra. Meg da destra",
          stageDirectionTranslation: "Alice, Nannetta, and Fenton start to exit to the left; Meg to the right",
          lines: [
          ],
        },
        {
          id: "a3_s1_c51",
          speaker: "Alice Ford",
          stageDirection: "sul limitare a sinistra, gridando a Meg che sarà già avviata ad andarsene da destra",
          stageDirectionTranslation: "at the threshold on the left, shouting to Meg who is already heading out on the right",
          lines: [
            {
              id: "a3_s1_c51_l1",
              original: "Provvedi le lanterne.",
              literal: "Provide the lanterns.",
              tokens: [
                {
                  word: "Provvedi",
                  lemma: "provvedere",
                  pos: "verb",
                  meaning: "provide! / procure! (imperative)",
                },
                {
                  word: "lanterne",
                  lemma: "lanterna",
                  pos: "noun",
                  meaning: "lanterns",
                },
              ],
              grammarNote: "Alice calls out a crucial practical instruction to Meg: bringing lanterns for the dark woods.",
            },
          ],
        },
        {
          id: "a3_s1_c52",
          speaker: "Meg Page",
          lines: [
            {
              id: "a3_s1_c52_l1",
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
          id: "a3_s1_c53",
          speaker: "Meg Page",
          stageDirection: "Alice, Nannetta, Fenton escono da sinistra: in questo momento mrs. Quickly esce dall'osteria e vedendo Ford e il Dr. Cajus che parlano, sta ad origliare sulla soglia",
          stageDirectionTranslation: "Alice, Nannetta, and Fenton exit from the left; at this moment Mrs. Quickly comes out of the inn and, seeing Ford and Dr. Caius talking, eavesdrops on the threshold",
          lines: [
          ],
        },
        {
          id: "a3_s1_c54",
          speaker: "Ford",
          stageDirection: "al Dr. Cajus, parlandogli segretamente, vicino all'osteria",
          stageDirectionTranslation: "to Dr. Caius, speaking to him secretly, near the inn",
          lines: [
            {
              id: "a3_s1_c54_l1",
              original: "Non dubitar, tu sposerai mia figlia.",
              literal: "Do not doubt, you shall marry my daughter.",
              tokens: [
                {
                  word: "Non dubitar",
                  lemma: "dubitare",
                  pos: "verb",
                  meaning: "do not doubt / fear not (negative imperative with apocopic infinitive)",
                },
                {
                  word: "sposerai",
                  lemma: "sposare",
                  pos: "verb",
                  meaning: "you will marry (second-person singular future)",
                },
                {
                  word: "figlia",
                  lemma: "figlia",
                  pos: "noun",
                  meaning: "daughter",
                },
              ],
              grammarNote: "Ford detains Dr. Caius in secret, promising behind Alice's back that Caius will marry Nannetta tonight.",
            },
            {
              id: "a3_s1_c54_l2",
              original: "Rammenti bene il suo travestimento?",
              literal: "Do you remember well her disguise?",
              tokens: [
                {
                  word: "Rammenti",
                  lemma: "rammentare",
                  pos: "verb",
                  meaning: "do you remember / recall",
                },
                {
                  word: "bene",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well",
                },
                {
                  word: "travestimento",
                  lemma: "travestimento",
                  pos: "noun",
                  meaning: "disguise / costume",
                },
              ],
              grammarNote: "Ford checks that Caius knows Nannetta's costume details to abduct the correct fairy.",
            },
          ],
        },
        {
          id: "a3_s1_c55",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a3_s1_c55_l1",
              original: "Cinta di rose, il vel bianco e la vesta.",
              literal: "Girdled with roses, the white veil and the gown.",
              tokens: [
                {
                  word: "Cinta",
                  lemma: "cingere",
                  pos: "adjective",
                  meaning: "girdled / crowned",
                },
                {
                  word: "rose",
                  lemma: "rosa",
                  pos: "noun",
                  meaning: "roses",
                },
                {
                  word: "vel",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil (apocopic form)",
                },
                {
                  word: "bianco",
                  lemma: "bianco",
                  pos: "adjective",
                  meaning: "white",
                },
                {
                  word: "vesta",
                  lemma: "vesta",
                  pos: "noun",
                  meaning: "gown / dress / robe (variant of veste)",
                },
              ],
              grammarNote: "Caius recites Nannetta's costume details, unaware that Mrs. Quickly is eavesdropping nearby.",
            },
          ],
        },
        {
          id: "a3_s1_c56",
          speaker: "Alice Ford",
          stageDirection: "di dentro a sinistra gridando",
          stageDirectionTranslation: "from within to the left, shouting",
          lines: [
            {
              id: "a3_s1_c56_l1",
              original: "Non ti scordar le maschere.",
              literal: "Do not forget the masks.",
              tokens: [
                {
                  word: "Non ti scordar",
                  lemma: "scordarsi",
                  pos: "verb",
                  meaning: "do not forget! (negative reflexive imperative)",
                },
                {
                  word: "maschere",
                  lemma: "maschera",
                  pos: "noun",
                  meaning: "masks",
                },
              ],
              grammarNote: "Alice calls back another reminder to Meg offstage, reinforcing the masquerade theme.",
            },
          ],
        },
        {
          id: "a3_s1_c57",
          speaker: "Meg Page",
          stageDirection: "di dentro a destra gridando",
          stageDirectionTranslation: "from within to the right, shouting",
          lines: [
            {
              id: "a3_s1_c57_l1",
              original: "No, certo.",
              literal: "No, certainly.",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "interjection",
                  meaning: "no",
                },
                {
                  word: "certo",
                  lemma: "certo",
                  pos: "adverb",
                  meaning: "certainly / of course",
                },
              ],
              grammarNote: "Meg calls back reassuring Alice.",
            },
            {
              id: "a3_s1_c57_l2",
              original: "Né tu le raganelle!",
              literal: "Nor you the ratchets!",
              tokens: [
                {
                  word: "Né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "nor / neither",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "raganelle",
                  lemma: "raganella",
                  pos: "noun",
                  meaning: "ratchets / noisemakers (literally tree frogs)",
                },
              ],
              grammarNote: "'Raganelle' are wooden ratchets (cog rattles) traditionally used during Holy Week; the conspirators will use them to create terrifying woodland noises.",
            },
          ],
        },
        {
          id: "a3_s1_c58",
          speaker: "Ford",
          stageDirection: "continuando il discorso col Dr. Cajus",
          stageDirectionTranslation: "continuing the conversation with Dr. Caius",
          lines: [
            {
              id: "a3_s1_c58_l1",
              original: "Io già disposi",
              literal: "I already arranged",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "disposi",
                  lemma: "disporre",
                  pos: "verb",
                  meaning: "I arranged / set up (passato remoto)",
                },
              ],
              grammarNote: "Passato remoto 'disposi'; Ford boasts of laying a foolproof counter-trap to wed his daughter to Caius.",
            },
            {
              id: "a3_s1_c58_l2",
              original: "la rete mia. Sul finir della festa",
              literal: "my net. Near the end of the festival",
              tokens: [
                {
                  word: "rete",
                  lemma: "rete",
                  pos: "noun",
                  meaning: "net / snare / trap",
                },
                {
                  word: "Sul finir",
                  lemma: "finire",
                  pos: "idiom",
                  meaning: "towards the end / near the close (substantivized apocopic infinitive)",
                },
                {
                  word: "festa",
                  lemma: "festa",
                  pos: "noun",
                  meaning: "festival / masquerade / revelry",
                },
              ],
              grammarNote: "Hunting snare metaphor ('rete mia'); Ford explains the timing for the surprise wedding.",
            },
            {
              id: "a3_s1_c58_l3",
              original: "verrete a me col volto ricoperto",
              literal: "you will come to me with face covered",
              tokens: [
                {
                  word: "verrete",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "you will come (second-person plural future)",
                },
                {
                  word: "volto",
                  lemma: "volto",
                  pos: "noun",
                  meaning: "face",
                },
                {
                  word: "ricoperto",
                  lemma: "ricoprire",
                  pos: "adjective",
                  meaning: "covered / masked / concealed",
                },
              ],
              grammarNote: "Ford instructs Dr. Caius to bring his masked bride forward at the conclusion of the masque.",
            },
            {
              id: "a3_s1_c58_l4",
              original: "essa dal vel, tu da un mantel fantesco",
              literal: "she by the veil, you by a servant's cloak",
              tokens: [
                {
                  word: "essa",
                  lemma: "essa",
                  pos: "pronoun",
                  meaning: "she",
                },
                {
                  word: "vel",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil (apocopic form)",
                },
                {
                  word: "mantel",
                  lemma: "mantello",
                  pos: "noun",
                  meaning: "cloak / mantle (apocopic form)",
                },
                {
                  word: "fantesco",
                  lemma: "fantesco",
                  pos: "adjective",
                  meaning: "servant-like / of a servant / menial",
                },
              ],
              grammarNote: "Dr. Caius is instructed to wear a servant's cowl ('mantel fantesco') while Nannetta wears her white fairy veil.",
            },
            {
              id: "a3_s1_c58_l5",
              original: "e vi benedirò come due sposi.",
              literal: "and I will bless you like two spouses.",
              tokens: [
                {
                  word: "benedirò",
                  lemma: "benedire",
                  pos: "verb",
                  meaning: "I will bless (first-person singular future)",
                },
                {
                  word: "sposi",
                  lemma: "sposo",
                  pos: "noun",
                  meaning: "spouses / newlyweds / bride and groom",
                },
              ],
              grammarNote: "Ford promises to bestow a formal paternal blessing over the masked couple, legally and spiritually sealing their marriage.",
            },
          ],
        },
        {
          id: "a3_s1_c59",
          speaker: "Dr. Caius",
          stageDirection: "prendendo il braccio di Ford ed avviandosi ad escire da sinistra",
          stageDirectionTranslation: "taking Ford's arm and heading toward the exit on the left",
          lines: [
            {
              id: "a3_s1_c59_l1",
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
          id: "a3_s1_c60",
          speaker: "Mrs. Quickly",
          stageDirection: "sul limitare dell'osteria con gesto accorto verso i due che escono Stai fresco! esce rapidamente da destra",
          stageDirectionTranslation: "on the threshold of the inn with a shrewd gesture toward the two who exit: 'Just you wait!', quickly exits to the right",
          lines: [
          ],
        },
        {
          id: "a3_s1_c61",
          speaker: "Mrs. Quickly",
          stageDirection: "di dentro a destra, gridando e sempre più allontanandosi",
          stageDirectionTranslation: "from within on the right, shouting and moving ever further away",
          lines: [
            {
              id: "a3_s1_c61_l1",
              original: "Nannetta! Ohè! Nannetta!",
              literal: "Nannetta! Hey! Nannetta!",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper noun)",
                },
                {
                  word: "Ohè",
                  lemma: "ohè",
                  pos: "interjection",
                  meaning: "hey! / hallo!",
                },
              ],
              grammarNote: "Mrs. Quickly, having overheard Ford's plot to marry Nannetta to Dr. Caius, bursts out calling urgently for Nannetta.",
            },
            {
              id: "a3_s1_c61_l2",
              original: "Nannetta! Ohè!",
              literal: "Nannetta! Hey!",
              tokens: [
                {
                  word: "Nannetta",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper noun)",
                },
                {
                  word: "Ohè",
                  lemma: "ohè",
                  pos: "interjection",
                  meaning: "hey! / hallo!",
                },
              ],
              grammarNote: "Quickly calls into the wings with breathless urgency.",
            },
          ],
        },
        {
          id: "a3_s1_c62",
          speaker: "Nannetta",
          stageDirection: "di dentro a sinistra, allontanandosi",
          stageDirectionTranslation: "from within on the left, moving away",
          lines: [
            {
              id: "a3_s1_c62_l1",
              original: "Che c'è? Che c'è?",
              literal: "What is it? What is it?",
              tokens: [
                {
                  word: "Che c'è",
                  lemma: "che c'è",
                  pos: "idiom",
                  meaning: "what is it? / what is the matter?",
                },
                {
                  word: "c'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is",
                },
              ],
              grammarNote: "Nannetta hurries back, startled by Quickly's alarm.",
            },
          ],
        },
        {
          id: "a3_s1_c63",
          speaker: "Mrs. Quickly",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a3_s1_c63_l1",
              original: "Prepara la canzone della fata.",
              literal: "Prepare the fairy's song.",
              tokens: [
                {
                  word: "Prepara",
                  lemma: "preparare",
                  pos: "verb",
                  meaning: "prepare! / get ready! (imperative)",
                },
                {
                  word: "canzone",
                  lemma: "canzone",
                  pos: "noun",
                  meaning: "song",
                },
                {
                  word: "fata",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairy",
                },
              ],
              grammarNote: "Quickly tells Nannetta to prepare her fairy invocation while they arrange a counter-ruse to outwit Ford.",
            },
          ],
        },
        {
          id: "a3_s1_c64",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s1_c64_l1",
              original: "È preparata.",
              literal: "It is prepared.",
              tokens: [
                {
                  word: "È",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "preparata",
                  lemma: "preparare",
                  pos: "adjective",
                  meaning: "prepared / ready",
                },
              ],
              grammarNote: "Nannetta assures Quickly that her song is ready.",
            },
          ],
        },
        {
          id: "a3_s1_c65",
          speaker: "Alice Ford",
          stageDirection: "di dentro a sinistra",
          stageDirectionTranslation: "from within on the left",
          lines: [
            {
              id: "a3_s1_c65_l1",
              original: "Tu, non tardar.",
              literal: "You, do not delay.",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you",
                },
                {
                  word: "non tardar",
                  lemma: "tardare",
                  pos: "verb",
                  meaning: "do not delay! / do not tarry! (negative imperative with apocopic infinitive)",
                },
              ],
              grammarNote: "Negative imperative 'non tardar' (non + apocopic infinitive); Alice urges Quickly not to lose a moment in organizing the counter-plot.",
            },
          ],
        },
        {
          id: "a3_s1_c66",
          speaker: "Mrs. Quickly",
          stageDirection: "come sopra, più lontana",
          stageDirectionTranslation: "as above, further away",
          lines: [
            {
              id: "a3_s1_c66_l1",
              original: "Chi prima arriva, aspetta.",
              literal: "Whoever arrives first, waits.",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who (relative pronoun)",
                },
                {
                  word: "prima",
                  lemma: "prima",
                  pos: "adverb",
                  meaning: "first / earlier",
                },
                {
                  word: "arriva",
                  lemma: "arrivare",
                  pos: "verb",
                  meaning: "arrives",
                },
                {
                  word: "aspetta",
                  lemma: "aspettare",
                  pos: "verb",
                  meaning: "waits",
                },
              ],
              grammarNote: "Proverbial Italian saying ('Chi prima arriva, aspetta'); Quickly rushes off to make final preparations for the forest masque.",
            },
          ],
        },
      ],
    },
    {
      sceneNumber: 2,
      title: "Parte II: Ninfe! Elfi! Silfi! (Il Parco di Windsor e la Fuga finale)",
      titleTranslation: "Part II: Nymphs! Elves! Sylphs! (Windsor Park and Final Fugue)",
      originalDescription: "Il parco di Windsor di notte sotto la grande Quercia di Herne. Falstaff appare con le corna di cervo. Fate e folletti lo tormentano e lo pizzicano. Svelata la burla e celebrati i matrimoni, Falstaff intona la grandiosa fuga 'Tutto nel mondo è burla'.",
      description: "Windsor Park at night beneath the great Herne's Oak. Falstaff appears wearing stag's horns. Fairies and goblins torment and pinch him. The jest revealed and the marriages celebrated, Falstaff leads the magnificent fugue 'All the world is a jest'.",
      cues: [
        {
          id: "a3_s2_c1",
          speaker: "Fenton",
          pieceTitle: "Dal labbro il canto estasiato vola (Sonetto)",
          lines: [
            {
              id: "a3_s2_c1_l1",
              original: "Dal labbro il canto estasiato vola",
              literal: "From the lip the ecstatic song flies",
              tokens: [
                {
                  word: "labbro",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lip",
                },
                {
                  word: "canto",
                  lemma: "canto",
                  pos: "noun",
                  meaning: "song / singing",
                },
                {
                  word: "estasiato",
                  lemma: "estasiato",
                  pos: "adjective",
                  meaning: "ecstatic / enraptured",
                },
                {
                  word: "vola",
                  lemma: "volare",
                  pos: "verb",
                  meaning: "flies (3rd sing. pres.)",
                },
              ],
              grammarNote: "Fenton opens his poetic sonnet ('Dal labbro il canto estasiato vola') alone in Windsor Forest at midnight, expressing romantic ecstasy through soaring lyricism.",
            },
            {
              id: "a3_s2_c1_l2",
              original: "pe' silenzi notturni e va lontano",
              literal: "through the night silences and goes far",
              tokens: [
                {
                  word: "pe'",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "through / across (poetic contraction of per i)",
                },
                {
                  word: "silenzi",
                  lemma: "silenzio",
                  pos: "noun",
                  meaning: "silences (masc. plur.)",
                },
                {
                  word: "notturni",
                  lemma: "notturno",
                  pos: "adjective",
                  meaning: "nocturnal / night",
                },
                {
                  word: "va",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "goes (3rd sing. pres.)",
                },
                {
                  word: "lontano",
                  lemma: "lontano",
                  pos: "adverb",
                  meaning: "far / far away",
                },
              ],
              grammarNote: "The archaic contraction 'pe'' (per i) introduces the nocturnal forest setting as Fenton's voice travels through the atmospheric silence.",
            },
            {
              id: "a3_s2_c1_l3",
              original: "e alfin ritrova un altro labbro umano",
              literal: "and at last finds another human lip",
              tokens: [
                {
                  word: "alfin",
                  lemma: "al fine",
                  pos: "adverb",
                  meaning: "at last / finally (shortened form of alfine)",
                },
                {
                  word: "ritrova",
                  lemma: "ritrovare",
                  pos: "verb",
                  meaning: "finds again / discovers (3rd sing. pres.)",
                },
                {
                  word: "labbro",
                  lemma: "labbro",
                  pos: "noun",
                  meaning: "lip",
                },
                {
                  word: "umano",
                  lemma: "umano",
                  pos: "adjective",
                  meaning: "human",
                },
              ],
              grammarNote: "Fenton's hendecasyllable personifies the wandering song encountering another human lip (Nannetta's), bridging vocal melody and physical intimacy.",
            },
            {
              id: "a3_s2_c1_l4",
              original: "che gli risponde co' la sua parola.",
              literal: "that responds to it with its word.",
              tokens: [
                {
                  word: "risponde",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "responds / answers (3rd sing. pres.)",
                },
                {
                  word: "gli",
                  lemma: "gli",
                  pos: "pronoun",
                  meaning: "to it / to him (indirect object pronoun)",
                },
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (poetic contraction of con)",
                },
                {
                  word: "parola",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "word / speech",
                },
              ],
              grammarNote: "The vocal echo completes the sonnet's first quatrain (vola / lontano / umano / parola), creating an interactive vocal dialogue between separated lovers.",
            },
            {
              id: "a3_s2_c1_l5",
              original: "Allor la nota che non è più sola",
              literal: "Then the note that is no longer alone",
              tokens: [
                {
                  word: "Allor",
                  lemma: "allora",
                  pos: "adverb",
                  meaning: "then / at that time (shortened form of allora)",
                },
                {
                  word: "nota",
                  lemma: "nota",
                  pos: "noun",
                  meaning: "note / musical tone",
                },
                {
                  word: "più",
                  lemma: "più",
                  pos: "adverb",
                  meaning: "more / longer",
                },
                {
                  word: "sola",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone / solitary (fem. sing.)",
                },
              ],
              grammarNote: "Beginning the second quatrain, Fenton describes the metaphysical transformation when a solitary melody harmonizes with a responsive partner.",
            },
            {
              id: "a3_s2_c1_l6",
              original: "vibra di gioia in un accordo arcano",
              literal: "vibrates with joy in a mysterious chord",
              tokens: [
                {
                  word: "vibra",
                  lemma: "vibrare",
                  pos: "verb",
                  meaning: "vibrates / resonates (3rd sing. pres.)",
                },
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy / delight",
                },
                {
                  word: "accordo",
                  lemma: "accordo",
                  pos: "noun",
                  meaning: "chord / harmony / agreement",
                },
                {
                  word: "arcano",
                  lemma: "arcano",
                  pos: "adjective",
                  meaning: "mysterious / secret / arcane",
                },
              ],
              grammarNote: "Boito's lyric blends musical terminology ('accordo') with mystical imagery ('arcano'), depicting spiritual resonance between lovers.",
            },
            {
              id: "a3_s2_c1_l7",
              original: "e innamorando l'aer antelucano",
              literal: "and making the pre-dawn air fall in love",
              tokens: [
                {
                  word: "innamorando",
                  lemma: "innamorare",
                  pos: "verb",
                  meaning: "enamoring / making fall in love (gerund)",
                },
                {
                  word: "aer",
                  lemma: "aere",
                  pos: "noun",
                  meaning: "air / atmosphere (poetic shortening)",
                },
                {
                  word: "antelucano",
                  lemma: "antelucano",
                  pos: "adjective",
                  meaning: "pre-dawn / before dawn (Latinate)",
                },
              ],
              grammarNote: "The gerund 'innamorando' governs the rare Latinate adjective 'antelucano' (ante lucem, before daybreak), highlighting Boito's sophisticated Scapigliatura vocabulary.",
            },
            {
              id: "a3_s2_c1_l8",
              original: "con altra voce al suo fonte rivola.",
              literal: "with another voice flies back to its source.",
              tokens: [
                {
                  word: "voce",
                  lemma: "voce",
                  pos: "noun",
                  meaning: "voice",
                },
                {
                  word: "fonte",
                  lemma: "fonte",
                  pos: "noun",
                  meaning: "source / spring / fountain",
                },
                {
                  word: "rivola",
                  lemma: "rivolare",
                  pos: "verb",
                  meaning: "flies back / returns flying (3rd sing. pres.)",
                },
              ],
              grammarNote: "Closing the octet with the rhyme 'rivola' (echoing 'vola' and 'sola'), the melody returns enriched by the beloved's voice like water returning to its source.",
            },
            {
              id: "a3_s2_c1_l9",
              original: "Quivi ripiglia suon, ma la sua cura",
              literal: "There it resumes sound, but its longing",
              tokens: [
                {
                  word: "Quivi",
                  lemma: "quivi",
                  pos: "adverb",
                  meaning: "there / in that place (literary)",
                },
                {
                  word: "ripiglia",
                  lemma: "ripigliare",
                  pos: "verb",
                  meaning: "resumes / takes up again (3rd sing. pres.)",
                },
                {
                  word: "suon",
                  lemma: "suono",
                  pos: "noun",
                  meaning: "sound (poetic shortened form of suono)",
                },
                {
                  word: "cura",
                  lemma: "cura",
                  pos: "noun",
                  meaning: "care / longing / concern (Latinate cura)",
                },
              ],
              grammarNote: "The volta (turn) of the sonnet begins the sestet with 'Quivi ripiglia suon'; 'cura' carries classical Latin connotations of anxious love-longing.",
            },
            {
              id: "a3_s2_c1_l10",
              original: "tende sempre ad unir chi lo disuna.",
              literal: "aims always to unite those who separate it.",
              tokens: [
                {
                  word: "tende",
                  lemma: "tendere",
                  pos: "verb",
                  meaning: "aims / tends / strives (3rd sing. pres.)",
                },
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "always",
                },
                {
                  word: "unir",
                  lemma: "unire",
                  pos: "verb",
                  meaning: "to unite / join (shortened form of unire)",
                },
                {
                  word: "disuna",
                  lemma: "disunare",
                  pos: "verb",
                  meaning: "separates / disunites (3rd sing. pres.)",
                },
              ],
              grammarNote: "Clever wordplay contrasting 'unir' and 'disuna' (to unite vs. to disunite), expressing how love-song continually strives to reconcile divided lovers.",
            },
            {
              id: "a3_s2_c1_l11",
              original: "Così baciai la disiata bocca!",
              literal: "Thus I kissed the desired mouth!",
              tokens: [
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "thus / so",
                },
                {
                  word: "baciai",
                  lemma: "baciare",
                  pos: "verb",
                  meaning: "I kissed (1st sing. passato remoto)",
                },
                {
                  word: "disiata",
                  lemma: "disiato",
                  pos: "adjective",
                  meaning: "desired / longed-for (archaic/poetic)",
                },
                {
                  word: "bocca",
                  lemma: "bocca",
                  pos: "noun",
                  meaning: "mouth / lips",
                },
              ],
              grammarNote: "Passionate culmination of Fenton's sonnet: the abstract wandering song crystallizes into the physical remembrance of kissing Nannetta's mouth.",
            },
            {
              id: "a3_s2_c1_l12",
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
          id: "a3_s2_c2",
          speaker: "Nannetta",
          stageDirection: "di dentro, lontana e avvicinandosi",
          stageDirectionTranslation: "from within, distant and drawing closer",
          lines: [
            {
              id: "a3_s2_c2_l1",
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
          id: "a3_s2_c3",
          speaker: "Fenton",
          stageDirection: "slanciandosi verso la parte dove udì la voce",
          stageDirectionTranslation: "rushing toward the direction where he heard the voice",
          lines: [
            {
              id: "a3_s2_c3_l1",
              original: "Ma il canto muor nel bacio che lo tocca.",
              literal: "But the song dies in the kiss that touches it.",
              tokens: [
                {
                  word: "canto",
                  lemma: "canto",
                  pos: "noun",
                  meaning: "song",
                },
                {
                  word: "muor",
                  lemma: "morire",
                  pos: "verb",
                  meaning: "dies (poetic shortened form of muore)",
                },
                {
                  word: "bacio",
                  lemma: "bacio",
                  pos: "noun",
                  meaning: "kiss",
                },
                {
                  word: "tocca",
                  lemma: "toccare",
                  pos: "verb",
                  meaning: "touches (3rd sing. pres.)",
                },
              ],
              grammarNote: "Fenton brings his sonnet to a breathtaking close: the song dissolves into the physical touch of Nannetta's kiss, as the lovers finally embrace.",
            },
          ],
        },
        {
          id: "a3_s2_c4",
          speaker: "Fenton",
          stageDirection: "Fenton vede Nannetta che entra e la abbraccia",
          stageDirectionTranslation: "Fenton sees Nannetta enter and embraces her",
          lines: [
          ],
        },
        {
          id: "a3_s2_c5",
          speaker: "Alice Ford",
          stageDirection: "dividendo Fenton da Nannetta e obbligandolo a vestire la cappa nera",
          stageDirectionTranslation: "separating Fenton from Nannetta and forcing him to put on the black cloak",
          lines: [
            {
              id: "a3_s2_c5_l1",
              original: "Nossignore! Tu indossa questa cappa.",
              literal: "No, sir! You put on this cloak.",
              tokens: [
                {
                  word: "Nossignore",
                  lemma: "nossignore",
                  pos: "interjection",
                  meaning: "no sir / by no means",
                },
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject)",
                },
                {
                  word: "indossa",
                  lemma: "indossare",
                  pos: "verb",
                  meaning: "put on / don (imperative 2nd sing.)",
                },
                {
                  word: "questa",
                  lemma: "questo",
                  pos: "adjective",
                  meaning: "this (fem. sing.)",
                },
                {
                  word: "cappa",
                  lemma: "cappa",
                  pos: "noun",
                  meaning: "cloak / monk's cowl",
                },
              ],
              grammarNote: "Alice abruptly bursts in on Fenton and Nannetta's romantic reverie with a pragmatic command, thrusting a disguise into Fenton's hands.",
            },
          ],
        },
        {
          id: "a3_s2_c6",
          speaker: "Fenton",
          stageDirection: "aiutato da Alice e Nannetta ad indossare la cappa",
          stageDirectionTranslation: "helped by Alice and Nannetta to put on the cloak",
          lines: [
            {
              id: "a3_s2_c6_l1",
              original: "Che vuol dir ciò?",
              literal: "What does this mean?",
              tokens: [
                {
                  word: "Che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "what (interrogative pronoun)",
                },
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants / means (shortened form of vuole)",
                },
                {
                  word: "dir",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "to say / mean (shortened form of dire)",
                },
                {
                  word: "ciò",
                  lemma: "ciò",
                  pos: "pronoun",
                  meaning: "this / that (demonstrative)",
                },
              ],
              grammarNote: "Fenton is startled and bewildered by Alice's sudden stage-managing, asking for an explanation of the monk's habit.",
            },
          ],
        },
        {
          id: "a3_s2_c7",
          speaker: "Nannetta",
          stageDirection: "aggiustandogli il cappuccio",
          stageDirectionTranslation: "adjusting his hood",
          lines: [
            {
              id: "a3_s2_c7_l1",
              original: "Lasciati fare.",
              literal: "Let yourself be handled.",
              tokens: [
                {
                  word: "Lasciati",
                  lemma: "lasciare",
                  pos: "verb",
                  meaning: "let yourself (imperative + reflexive pronoun ti)",
                },
                {
                  word: "fare",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "to do / to be done / handle",
                },
              ],
              grammarNote: "Nannetta tells Fenton to submit quietly to the women's styling ('lasciati fare' is an idiomatic formula meaning 'let us take care of it / don't resist').",
            },
          ],
        },
        {
          id: "a3_s2_c8",
          speaker: "Alice Ford",
          stageDirection: "porgendo la maschera a Fenton",
          stageDirectionTranslation: "porgendo la maschera to Fenton",
          lines: [
            {
              id: "a3_s2_c8_l1",
              original: "Allaccia.",
              literal: "Fasten.",
              tokens: [
                {
                  word: "Allaccia",
                  lemma: "allacciare",
                  pos: "verb",
                  meaning: "fasten / tie / lace up (imperative 2nd sing.)",
                },
              ],
              grammarNote: "A clipped, brisk imperative from Alice instructing Nannetta or Fenton to tie the cords of the monastic cowl.",
            },
          ],
        },
        {
          id: "a3_s2_c9",
          speaker: "Nannetta",
          stageDirection: "rimirando Fenton",
          stageDirectionTranslation: "gazing at Fenton",
          lines: [
            {
              id: "a3_s2_c9_l1",
              original: "È un fraticel sgusciato dalla trappa.",
              literal: "He is a little friar slipped out from the Trappist monastery.",
              tokens: [
                {
                  word: "fraticel",
                  lemma: "fraticello",
                  pos: "noun",
                  meaning: "little friar / young monk (diminutive shortened form)",
                },
                {
                  word: "sgusciato",
                  lemma: "sgusciare",
                  pos: "verb",
                  meaning: "slipped out / hatched / escaped (past participle)",
                },
                {
                  word: "dalla",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + la)",
                },
                {
                  word: "trappa",
                  lemma: "trappa",
                  pos: "noun",
                  meaning: "Trappist monastery / La Trappe",
                },
              ],
              grammarNote: "Nannetta playfully teases Fenton in his monk costume: 'sgusciato dalla trappa' evokes an escapee from the notoriously silent, austere Trappist order.",
            },
          ],
        },
        {
          id: "a3_s2_c10",
          speaker: "Alice Ford",
          stageDirection: "alle compagne",
          stageDirectionTranslation: "to her companions",
          lines: [
            {
              id: "a3_s2_c10_l1",
              original: "Il tradimento che Ford ne minaccia",
              literal: "The betrayal that Ford threatens us with",
              tokens: [
                {
                  word: "tradimento",
                  lemma: "tradimento",
                  pos: "noun",
                  meaning: "betrayal / treachery",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford",
                },
                {
                  word: "ne",
                  lemma: "ne",
                  pos: "pronoun",
                  meaning: "us / to us (archaic/literary clitic pronoun equivalent to ci)",
                },
                {
                  word: "minaccia",
                  lemma: "minacciare",
                  pos: "verb",
                  meaning: "threatens (3rd sing. pres.)",
                },
              ],
              grammarNote: "Alice explains the stakes: Ford's covert plan to marry Nannetta to Dr. Caius under cover of the masquerade constitutes 'tradimento'.",
            },
            {
              id: "a3_s2_c10_l2",
              original: "tornar deve in suo scorno e in nostro aiuto.",
              literal: "must turn to his shame and to our aid.",
              tokens: [
                {
                  word: "tornar",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "to turn / redound (shortened form of tornare)",
                },
                {
                  word: "deve",
                  lemma: "dovere",
                  pos: "verb",
                  meaning: "must / ought to (3rd sing. pres.)",
                },
                {
                  word: "scorno",
                  lemma: "scorno",
                  pos: "noun",
                  meaning: "shame / scorn / humiliation",
                },
                {
                  word: "nostro",
                  lemma: "nostro",
                  pos: "adjective",
                  meaning: "our",
                },
                {
                  word: "aiuto",
                  lemma: "aiuto",
                  pos: "noun",
                  meaning: "aid / help",
                },
              ],
              grammarNote: "Alice outlines her comic counter-plot: Ford's patriarchal scheme will rebound upon him in public mockery ('scorno'), clearing the path for Fenton and Nannetta.",
            },
          ],
        },
        {
          id: "a3_s2_c11",
          speaker: "Fenton",
          lines: [
            {
              id: "a3_s2_c11_l1",
              original: "Spiegatevi.",
              literal: "Explain yourselves.",
              tokens: [
                {
                  word: "Spiegatevi",
                  lemma: "spiegare",
                  pos: "verb",
                  meaning: "explain yourselves (imperative 2nd plur. + reflexive vi)",
                },
              ],
              grammarNote: "Fenton requests clarification of Alice's intricate scheme while being bundled into the monk's gown.",
            },
          ],
        },
        {
          id: "a3_s2_c12",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c12_l1",
              original: "Ubbidisci presto e muto.",
              literal: "Obey quickly and silently.",
              tokens: [
                {
                  word: "Ubbidisci",
                  lemma: "ubbidire",
                  pos: "verb",
                  meaning: "obey (imperative 2nd sing.)",
                },
                {
                  word: "presto",
                  lemma: "presto",
                  pos: "adverb",
                  meaning: "quickly / promptly",
                },
                {
                  word: "muto",
                  lemma: "muto",
                  pos: "adjective",
                  meaning: "silent / mute",
                },
              ],
              grammarNote: "Alice brooks no delays; she orders unquestioning obedience and silence to maintain operational secrecy in the park.",
            },
            {
              id: "a3_s2_c12_l2",
              original: "L'occasïone come viene scappa.",
              literal: "Opportunity, as soon as it arrives, flees.",
              tokens: [
                {
                  word: "occasïone",
                  lemma: "occasione",
                  pos: "noun",
                  meaning: "opportunity / occasion (with diaeresis)",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "as soon as / when",
                },
                {
                  word: "viene",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / arrives (3rd sing. pres.)",
                },
                {
                  word: "scappa",
                  lemma: "scappare",
                  pos: "verb",
                  meaning: "runs away / escapes (3rd sing. pres.)",
                },
              ],
              grammarNote: "Proverbial wisdom personifying Opportunity (Occasio) as a fleeting moment that must be seized instantly before it vanishes.",
            },
          ],
        },
        {
          id: "a3_s2_c13",
          speaker: "Alice Ford",
          stageDirection: "a mrs. Quickly",
          stageDirectionTranslation: "to Mrs. Quickly",
          lines: [
            {
              id: "a3_s2_c13_l1",
              original: "Chi vestirai da finta sposa?",
              literal: "Whom will you dress as the sham bride?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whom / who (interrogative pronoun)",
                },
                {
                  word: "vestirai",
                  lemma: "vestire",
                  pos: "verb",
                  meaning: "you will dress (2nd sing. future)",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "as / in the guise of",
                },
                {
                  word: "finta",
                  lemma: "finto",
                  pos: "adjective",
                  meaning: "fake / sham / false",
                },
                {
                  word: "sposa",
                  lemma: "sposa",
                  pos: "noun",
                  meaning: "bride",
                },
              ],
              grammarNote: "Alice asks Quickly whom she has recruited to impersonate Nannetta at the mock wedding engineered by Ford for Dr. Caius.",
            },
          ],
        },
        {
          id: "a3_s2_c14",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a3_s2_c14_l1",
              original: "Un gaio",
              literal: "A cheerful",
              tokens: [
                {
                  word: "Un",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "a / an (indefinite article)",
                },
                {
                  word: "gaio",
                  lemma: "gaio",
                  pos: "adjective",
                  meaning: "cheerful / merry / gay",
                },
              ],
              grammarNote: "Quickly begins describing the surrogate bride with an enjambment, emphasizing the lively irony of the replacement.",
            },
            {
              id: "a3_s2_c14_l2",
              original: "ladron nasuto che aborre il Dottor Cajo.",
              literal: "big-nosed rogue who abhors Doctor Caius.",
              tokens: [
                {
                  word: "ladron",
                  lemma: "ladrone",
                  pos: "noun",
                  meaning: "thief / rogue (shortened form of ladrone)",
                },
                {
                  word: "nasuto",
                  lemma: "nasuto",
                  pos: "adjective",
                  meaning: "big-nosed / long-nosed",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "who / that (relative pronoun)",
                },
                {
                  word: "aborre",
                  lemma: "aborrire",
                  pos: "verb",
                  meaning: "abhors / detests (3rd sing. pres.)",
                },
                {
                  word: "Cajo",
                  lemma: "Caio",
                  pos: "noun",
                  meaning: "Caius",
                },
              ],
              grammarNote: "Quickly reveals Bardolfo as the substitute bride: with his bulbous, red nose ('nasuto') and vehement hatred for Dr. Caius, the wedding will be an unforgettable catastrophe for Caius.",
            },
          ],
        },
        {
          id: "a3_s2_c15",
          speaker: "Meg Page",
          stageDirection: "ad Alice accorrendo dal fondo",
          stageDirectionTranslation: "to Alice, rushing up from the background",
          lines: [
            {
              id: "a3_s2_c15_l1",
              original: "Ho nascosto i folletti lungo il fosso.",
              literal: "I have hidden the goblins along the ditch.",
              tokens: [
                {
                  word: "nascosto",
                  lemma: "nascondere",
                  pos: "verb",
                  meaning: "hidden (past participle)",
                },
                {
                  word: "folletti",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves / imps",
                },
                {
                  word: "lungo",
                  lemma: "lungo",
                  pos: "preposition",
                  meaning: "along",
                },
                {
                  word: "fosso",
                  lemma: "fosso",
                  pos: "noun",
                  meaning: "ditch / trench",
                },
              ],
              grammarNote: "Meg arrives confirming tactical readiness: the children disguised as spirits and imps ('folletti') are stationed along the ditch in ambush.",
            },
            {
              id: "a3_s2_c15_l2",
              original: "Siam pronte.",
              literal: "We are ready.",
              tokens: [
                {
                  word: "Siam",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (poetic shortened form of siamo)",
                },
                {
                  word: "pronte",
                  lemma: "pronto",
                  pos: "adjective",
                  meaning: "ready / prepared (fem. plur.)",
                },
              ],
              grammarNote: "Meg reports that all conspirators are primed and in position for Falstaff's midnight rendezvous.",
            },
          ],
        },
        {
          id: "a3_s2_c16",
          speaker: "Alice Ford",
          stageDirection: "origliando",
          stageDirectionTranslation: "eavesdropping",
          lines: [
            {
              id: "a3_s2_c16_l1",
              original: "Zitto. Viene il pezzo grosso.",
              literal: "Quiet. The big shot is coming.",
              tokens: [
                {
                  word: "Zitto",
                  lemma: "zitto",
                  pos: "interjection",
                  meaning: "quiet / hush",
                },
                {
                  word: "Viene",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / is coming (3rd sing. pres.)",
                },
                {
                  word: "pezzo grosso",
                  lemma: "pezzo grosso",
                  pos: "idiom",
                  meaning: "big shot / VIP (with pun on Falstaff's bulk)",
                },
              ],
              grammarNote: "Alice alerts everyone to Falstaff's arrival using the idiom 'pezzo grosso' (bigwig / big shot), a delicious double entendre mocking Falstaff's immense physical girth.",
            },
            {
              id: "a3_s2_c16_l2",
              original: "Via!...",
              literal: "Away!...",
              tokens: [
                {
                  word: "Via",
                  lemma: "via",
                  pos: "interjection",
                  meaning: "away / off with you / scatter",
                },
              ],
              grammarNote: "Alice gives the signal to scatter and take cover before Falstaff reaches Herne's Oak.",
            },
          ],
        },
        {
          id: "a3_s2_c17",
          speaker: "Alice Ford",
          stageDirection: "tutte fuggono con Fenton da sinistra",
          stageDirectionTranslation: "they all flee with Fenton from the left",
          lines: [
            {
              id: "a3_s2_c17_l1",
              original: "Falstaff con due corna di cervo in testa e avviluppato in un ampio",
              literal: "Falstaff with two stag horns on his head and wrapped in a wide",
              tokens: [
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns / antlers (fem. plur. of corno)",
                },
                {
                  word: "cervo",
                  lemma: "cervo",
                  pos: "noun",
                  meaning: "stag / deer",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
                {
                  word: "avviluppato",
                  lemma: "avviluppare",
                  pos: "verb",
                  meaning: "wrapped / swathed (past participle)",
                },
                {
                  word: "ampio",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "wide / ample",
                },
              ],
              grammarNote: "Stage direction detailing Falstaff's grotesque mythical costume as Herne the Hunter, wearing massive antlers and wrapped in a heavy mantle.",
            },
            {
              id: "a3_s2_c17_l2",
              original: "mantello. Poi Alice. Poi Meg. Mentre Falstaff entra in scena, suona la",
              literal: "cloak. Then Alice. Then Meg. As Falstaff enters the stage, midnight",
              tokens: [
                {
                  word: "mantello",
                  lemma: "mantello",
                  pos: "noun",
                  meaning: "cloak / mantle",
                },
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "Mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / as",
                },
                {
                  word: "scena",
                  lemma: "scena",
                  pos: "noun",
                  meaning: "scene / stage",
                },
                {
                  word: "suona",
                  lemma: "suonare",
                  pos: "verb",
                  meaning: "sounds / strikes (3rd sing. pres.)",
                },
              ],
              grammarNote: "Stage direction tracking the sequence of characters entering the moonlit clearing as the distant Windsor chimes strike midnight.",
            },
            {
              id: "a3_s2_c17_l3",
              original: "mezzanotte.",
              literal: "strikes.",
              tokens: [
                {
                  word: "mezzanotte",
                  lemma: "mezzanotte",
                  pos: "noun",
                  meaning: "midnight",
                },
              ],
              grammarNote: "Conclusion of the stage direction marking the stroke of midnight, the witching hour for the fairy masquerade.",
            },
          ],
        },
        {
          id: "a3_s2_c18",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c18_l1",
              original: "Una, due, tre, quattro, cinque, sei, sette botte,",
              literal: "One, two, three, four, five, six, seven strokes,",
              tokens: [
                {
                  word: "Una",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "one (cardinal numeral)",
                },
                {
                  word: "quattro",
                  lemma: "quattro",
                  pos: "adjective",
                  meaning: "four (cardinal numeral)",
                },
                {
                  word: "sette",
                  lemma: "sette",
                  pos: "adjective",
                  meaning: "seven (cardinal numeral)",
                },
                {
                  word: "botte",
                  lemma: "botta",
                  pos: "noun",
                  meaning: "strokes / blows / bell chimes (fem. plur.)",
                },
              ],
              grammarNote: "Falstaff counts the eerie bell tolls echoing through Windsor Forest with comic nervous suspense.",
            },
            {
              id: "a3_s2_c18_l2",
              original: "otto, nove, dieci, undici, dodici. Mezzanotte.",
              literal: "eight, nine, ten, eleven, twelve. Midnight.",
              tokens: [
                {
                  word: "otto",
                  lemma: "otto",
                  pos: "adjective",
                  meaning: "eight (cardinal numeral)",
                },
                {
                  word: "dieci",
                  lemma: "dieci",
                  pos: "adjective",
                  meaning: "ten (cardinal numeral)",
                },
                {
                  word: "dodici",
                  lemma: "dodici",
                  pos: "adjective",
                  meaning: "twelve (cardinal numeral)",
                },
                {
                  word: "Mezzanotte",
                  lemma: "mezzanotte",
                  pos: "noun",
                  meaning: "midnight",
                },
              ],
              grammarNote: "Falstaff reaches the twelfth stroke, verifying that the appointed midnight hour has arrived.",
            },
            {
              id: "a3_s2_c18_l3",
              original: "Questa è la quercia. Numi, proteggetemi! Giove!",
              literal: "This is the oak. Gods, protect me! Jove!",
              tokens: [
                {
                  word: "Questa",
                  lemma: "questo",
                  pos: "pronoun",
                  meaning: "this (demonstrative pronoun)",
                },
                {
                  word: "quercia",
                  lemma: "quercia",
                  pos: "noun",
                  meaning: "oak / Herne's Oak",
                },
                {
                  word: "Numi",
                  lemma: "nume",
                  pos: "noun",
                  meaning: "gods / deities (vocative plural)",
                },
                {
                  word: "proteggetemi",
                  lemma: "proteggere",
                  pos: "verb",
                  meaning: "protect me (imperative 2nd plur. + attached mi)",
                },
                {
                  word: "Giove",
                  lemma: "Giove",
                  pos: "noun",
                  meaning: "Jove / Jupiter",
                },
              ],
              grammarNote: "Arriving beneath Herne's Oak, Falstaff invokes the pagan gods in a direct homage to Shakespeare's Merry Wives of Windsor (Act V, scene 5).",
            },
            {
              id: "a3_s2_c18_l4",
              original: "Tu per amor d'Europa ti trasformasti in bove,",
              literal: "You for love of Europa transformed yourself into an ox,",
              tokens: [
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (shortened form of amore)",
                },
                {
                  word: "Europa",
                  lemma: "Europa",
                  pos: "noun",
                  meaning: "Europa",
                },
                {
                  word: "trasformasti",
                  lemma: "trasformare",
                  pos: "verb",
                  meaning: "you transformed (2nd sing. passato remoto)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "yourself (reflexive pronoun)",
                },
                {
                  word: "bove",
                  lemma: "bove",
                  pos: "noun",
                  meaning: "ox / bull (literary form of bue)",
                },
              ],
              grammarNote: "Falstaff rationalizes his ridiculous animal disguise by citing Jupiter's mythical metamorphosis into a bull to seduce Europa.",
            },
            {
              id: "a3_s2_c18_l5",
              original: "portasti corna. I numi c'insegnan la modestia.",
              literal: "you wore horns. The gods teach us modesty.",
              tokens: [
                {
                  word: "portasti",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "you wore / bore (2nd sing. passato remoto)",
                },
                {
                  word: "corna",
                  lemma: "corno",
                  pos: "noun",
                  meaning: "horns (fem. plur.)",
                },
                {
                  word: "numi",
                  lemma: "nume",
                  pos: "noun",
                  meaning: "gods / divinities",
                },
                {
                  word: "insegnan",
                  lemma: "insegnare",
                  pos: "verb",
                  meaning: "teach (3rd plur. pres. shortened form)",
                },
                {
                  word: "modestia",
                  lemma: "modestia",
                  pos: "noun",
                  meaning: "modesty / humility",
                },
              ],
              grammarNote: "Hilarious comic theology: if Jupiter himself wore cuckold's horns for lust, mortal men should modestly embrace humiliation in the service of passion.",
            },
            {
              id: "a3_s2_c18_l6",
              original: "L'amore metamorfosa un uom in una bestia.",
              literal: "Love metamorphoses a man into a beast.",
              tokens: [
                {
                  word: "amore",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love",
                },
                {
                  word: "metamorfosa",
                  lemma: "metamorfosare",
                  pos: "verb",
                  meaning: "metamorphoses / transforms (3rd sing. pres.)",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (poetic shortened form of uomo)",
                },
                {
                  word: "bestia",
                  lemma: "bestia",
                  pos: "noun",
                  meaning: "beast / animal",
                },
              ],
              grammarNote: "Translation of Shakespeare's line: 'O powerful love! that, in some respects, makes a beast a man; in some other, a man a beast.'",
            },
          ],
        },
        {
          id: "a3_s2_c19",
          speaker: "Sir John Falstaff",
          stageDirection: "ascoltando",
          stageDirectionTranslation: "listening",
          lines: [
            {
              id: "a3_s2_c19_l1",
              original: "Odo un soave passo!",
              literal: "I hear a gentle step!",
              tokens: [
                {
                  word: "Odo",
                  lemma: "udire",
                  pos: "verb",
                  meaning: "I hear (1st sing. pres.)",
                },
                {
                  word: "soave",
                  lemma: "soave",
                  pos: "adjective",
                  meaning: "sweet / gentle / soft",
                },
                {
                  word: "passo",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "step / footstep",
                },
              ],
              grammarNote: "Falstaff detects rustling footsteps approaching in the dark wood and anticipates his amorous rendezvous.",
            },
          ],
        },
        {
          id: "a3_s2_c20",
          speaker: "Sir John Falstaff",
          stageDirection: "Alice comparisce nel fondo",
          stageDirectionTranslation: "Alice appears in the background",
          lines: [
          ],
        },
        {
          id: "a3_s2_c21",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c21_l1",
              original: "Alice! Amor ti chiama!",
              literal: "Alice! Love calls you!",
              tokens: [
                {
                  word: "Alice",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice",
                },
                {
                  word: "Amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (shortened form of amore)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (direct object pronoun)",
                },
                {
                  word: "chiama",
                  lemma: "chiamare",
                  pos: "verb",
                  meaning: "calls (3rd sing. pres.)",
                },
              ],
              grammarNote: "Falstaff personifies Love calling out to Alice in the shadows of Windsor Forest.",
            },
          ],
        },
        {
          id: "a3_s2_c22",
          speaker: "Sir John Falstaff",
          stageDirection: "avvicinandosi ad Alice",
          stageDirectionTranslation: "approaching to Alice",
          lines: [
            {
              id: "a3_s2_c22_l1",
              original: "Vieni! l'amor m'infiamma!",
              literal: "Come! love sets me on fire!",
              tokens: [
                {
                  word: "Vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (imperative 2nd sing.)",
                },
                {
                  word: "m'",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (elided direct object pronoun)",
                },
                {
                  word: "infiamma",
                  lemma: "infiammare",
                  pos: "verb",
                  meaning: "inflames / sets ablaze (3rd sing. pres.)",
                },
              ],
              grammarNote: "Falstaff's ardent summons expressing his swelling, comical passion ('l'amor m'infiamma').",
            },
          ],
        },
        {
          id: "a3_s2_c23",
          speaker: "Alice Ford",
          stageDirection: "avvicinandosi a Falstaff",
          stageDirectionTranslation: "approaching to Falstaff",
          lines: [
            {
              id: "a3_s2_c23_l1",
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
          id: "a3_s2_c24",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c24_l1",
              original: "Sei la mia dama!",
              literal: "You are my lady!",
              tokens: [
                {
                  word: "Sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd sing. pres.)",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my (fem. sing.)",
                },
                {
                  word: "dama",
                  lemma: "dama",
                  pos: "noun",
                  meaning: "lady / noblewoman",
                },
              ],
              grammarNote: "First half of Boito's ingenious bilingual wordplay on Shakespeare's doe / lady: 'Sei la mia dama' / 'Sei la mia damma'.",
            },
          ],
        },
        {
          id: "a3_s2_c25",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c25_l1",
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
          id: "a3_s2_c26",
          speaker: "Sir John Falstaff",
          stageDirection: "afferrandola",
          stageDirectionTranslation: "seizing her",
          lines: [
            {
              id: "a3_s2_c26_l1",
              original: "Sei la mia damma!",
              literal: "You are my doe!",
              tokens: [
                {
                  word: "Sei",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "you are (2nd sing. pres.)",
                },
                {
                  word: "damma",
                  lemma: "damma",
                  pos: "noun",
                  meaning: "doe / fallow deer (archaic literary form of daino)",
                },
              ],
              grammarNote: "Boito's pun: 'dama' (lady) pairs with 'damma' (female deer / doe), echoing Shakespeare's 'My doe with the black scut!' (Merry Wives V.5).",
            },
          ],
        },
        {
          id: "a3_s2_c27",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c27_l1",
              original: "O sfavillante amor!",
              literal: "O sparkling love!",
              tokens: [
                {
                  word: "sfavillante",
                  lemma: "sfavillante",
                  pos: "adjective",
                  meaning: "sparkling / glittering / blazing",
                },
                {
                  word: "amor",
                  lemma: "amore",
                  pos: "noun",
                  meaning: "love (shortened form of amore)",
                },
              ],
              grammarNote: "Alice heightens the mock-heroic parody of courtly love by greeting Falstaff with melodramatic exuberance.",
            },
          ],
        },
        {
          id: "a3_s2_c28",
          speaker: "Sir John Falstaff",
          stageDirection: "attirandola a sé con ardore",
          stageDirectionTranslation: "drawing her to him ardently",
          lines: [
            {
              id: "a3_s2_c28_l1",
              original: "Vieni! Già fremo e fervo!",
              literal: "Come! Already I shudder and boil!",
              tokens: [
                {
                  word: "Vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (imperative 2nd sing.)",
                },
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "fremo",
                  lemma: "fremere",
                  pos: "verb",
                  meaning: "I quiver / tremble / rage (1st sing. pres.)",
                },
                {
                  word: "fervo",
                  lemma: "fervere",
                  pos: "verb",
                  meaning: "I boil / glow / burn with zeal (1st sing. pres.)",
                },
              ],
              grammarNote: "Falstaff uses twin alliterative Latinate verbs ('fremo e fervo') to express his boiling carnal agitation.",
            },
          ],
        },
        {
          id: "a3_s2_c29",
          speaker: "Alice Ford",
          stageDirection: "sempre evitando l'abbraccio",
          stageDirectionTranslation: "still dodging the embrace",
          lines: [
            {
              id: "a3_s2_c29_l1",
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
          id: "a3_s2_c30",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c30_l1",
              original: "Sono il tuo servo!",
              literal: "I am your servant!",
              tokens: [
                {
                  word: "Sono",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I am (1st sing. pres.)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "adjective",
                  meaning: "your (masc. sing.)",
                },
                {
                  word: "servo",
                  lemma: "servo",
                  pos: "noun",
                  meaning: "servant / slave",
                },
              ],
              grammarNote: "Courtly devotion rhyming with 'fervo' and leading up to the beast pun 'cervo'.",
            },
            {
              id: "a3_s2_c30_l2",
              original: "Sono il tuo cervo, imbizzarrito. Ed or",
              literal: "I am your stag, run wild. And now",
              tokens: [
                {
                  word: "cervo",
                  lemma: "cervo",
                  pos: "noun",
                  meaning: "stag / hart",
                },
                {
                  word: "imbizzarrito",
                  lemma: "imbizzarrire",
                  pos: "adjective",
                  meaning: "frenzied / enraged / run wild (past participle as adj.)",
                },
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (shortened form of ora)",
                },
              ],
              grammarNote: "Falstaff completes the triple rhyme servo/fervo/cervo, identifying himself as an antlered stag driven wild by rutting season.",
            },
            {
              id: "a3_s2_c30_l3",
              original: "piovan tartufi, rafani e finocchi!",
              literal: "let truffles, radishes, and fennels rain down!",
              tokens: [
                {
                  word: "piovan",
                  lemma: "piovere",
                  pos: "verb",
                  meaning: "let rain down (3rd plur. pres. subjunctive shortened form)",
                },
                {
                  word: "tartufi",
                  lemma: "tartufo",
                  pos: "noun",
                  meaning: "truffles",
                },
                {
                  word: "rafani",
                  lemma: "rafano",
                  pos: "noun",
                  meaning: "horseradishes / radishes",
                },
                {
                  word: "finocchi",
                  lemma: "finocchio",
                  pos: "noun",
                  meaning: "fennels",
                },
              ],
              grammarNote: "Direct translation of Falstaff's famous line in Shakespeare: 'Let the sky rain potatoes... hail kissing-comfits and snow eringoes'—Boito adapts the Elizabethan aphrodisiac plants to Italian delicacies.",
            },
            {
              id: "a3_s2_c30_l4",
              original: "E sian la mia pastura!",
              literal: "And let them be my pasture!",
              tokens: [
                {
                  word: "sian",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "let them be (3rd plur. pres. subjunctive shortened form of siano)",
                },
                {
                  word: "pastura",
                  lemma: "pastura",
                  pos: "noun",
                  meaning: "pasture / grazing / food for beasts",
                },
              ],
              grammarNote: "Subjunctive 'sian' continues Falstaff's animalistic fantasy of grazing upon wild forest herbs as an antlered buck.",
            },
            {
              id: "a3_s2_c30_l5",
              original: "E amor trabocchi!",
              literal: "And let love overflow!",
              tokens: [
                {
                  word: "trabocchi",
                  lemma: "traboccare",
                  pos: "verb",
                  meaning: "let overflow / spill over (3rd sing. pres. subjunctive)",
                },
              ],
              grammarNote: "Falstaff reaches an ecstatic climax of lustful appetite, demanding boundless romantic indulgence.",
            },
            {
              id: "a3_s2_c30_l6",
              original: "Siam soli...",
              literal: "We are alone...",
              tokens: [
                {
                  word: "Siam",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "we are (shortened form of siamo)",
                },
                {
                  word: "soli",
                  lemma: "solo",
                  pos: "adjective",
                  meaning: "alone / by ourselves (masc. plur.)",
                },
              ],
              grammarNote: "Falstaff anticipates an uninterrupted amorous encounter in the nocturnal forest.",
            },
          ],
        },
        {
          id: "a3_s2_c31",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c31_l1",
              original: "No. Qua nella selva densa",
              literal: "No. Here in the dense forest",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "interjection",
                  meaning: "no",
                },
                {
                  word: "selva",
                  lemma: "selva",
                  pos: "noun",
                  meaning: "wood / forest",
                },
                {
                  word: "densa",
                  lemma: "denso",
                  pos: "adjective",
                  meaning: "dense / thick",
                },
              ],
              grammarNote: "Alice shatters Falstaff's illusion of solitude by mentioning the ominous, dark density of the forest.",
            },
            {
              id: "a3_s2_c31_l2",
              original: "mi segue Meg.",
              literal: "Meg follows me.",
              tokens: [
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object pronoun)",
                },
                {
                  word: "segue",
                  lemma: "seguire",
                  pos: "verb",
                  meaning: "follows (3rd sing. pres.)",
                },
                {
                  word: "Meg",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg",
                },
              ],
              grammarNote: "Alice informs Falstaff that Meg Page has followed her, springing the first part of their psychological trap.",
            },
            {
              id: "a3_s2_c31_l3",
              original: "FALSTAFF È doppia l'avventura!",
              literal: "FALSTAFF The adventure is doubled!",
              tokens: [
                {
                  word: "FALSTAFF",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (speaker heading)",
                },
                {
                  word: "doppia",
                  lemma: "doppio",
                  pos: "adjective",
                  meaning: "double / twofold (fem. sing.)",
                },
                {
                  word: "avventura",
                  lemma: "avventura",
                  pos: "noun",
                  meaning: "adventure / romance / affair",
                },
              ],
              grammarNote: "Falstaff's immediate comic greed: far from being alarmed by Meg's arrival, he is thrilled at the prospect of possessing both women at once.",
            },
            {
              id: "a3_s2_c31_l4",
              original: "Venga anche lei! Squartatemi",
              literal: "Let her come too! Quarter me",
              tokens: [
                {
                  word: "Venga",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "let her come (3rd sing. pres. subjunctive)",
                },
                {
                  word: "anche",
                  lemma: "anche",
                  pos: "adverb",
                  meaning: "also / too",
                },
                {
                  word: "lei",
                  lemma: "lei",
                  pos: "pronoun",
                  meaning: "she / her (subject pronoun)",
                },
                {
                  word: "Squartatemi",
                  lemma: "squartare",
                  pos: "verb",
                  meaning: "quarter me / tear me in four (imperative + attached mi)",
                },
              ],
              grammarNote: "Falstaff employs hunting vocabulary ('squartare' = to quarter slaughtered game), offering himself up like venison to be divided between the two women.",
            },
            {
              id: "a3_s2_c31_l5",
              original: "come un camoscio a mensa!",
              literal: "like a chamois at a feast!",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "conjunction",
                  meaning: "like / as",
                },
                {
                  word: "camoscio",
                  lemma: "camoscio",
                  pos: "noun",
                  meaning: "chamois / wild game",
                },
                {
                  word: "mensa",
                  lemma: "mensa",
                  pos: "noun",
                  meaning: "table / banquet / feast",
                },
              ],
              grammarNote: "Falstaff compares his flesh to a savory alpine game animal ('camoscio') served up at a lavish banquet.",
            },
            {
              id: "a3_s2_c31_l6",
              original: "Sbranatemi! Cupido",
              literal: "Tear me to pieces! Cupid",
              tokens: [
                {
                  word: "Sbranatemi",
                  lemma: "sbranare",
                  pos: "verb",
                  meaning: "tear me to pieces / devour me (imperative + attached mi)",
                },
                {
                  word: "Cupido",
                  lemma: "Cupido",
                  pos: "noun",
                  meaning: "Cupid / god of love",
                },
              ],
              grammarNote: "Falstaff demands to be devoured alive in the name of Cupid, the god of erotic love.",
            },
            {
              id: "a3_s2_c31_l7",
              original: "alfin mi ricompensa.",
              literal: "at last rewards me.",
              tokens: [
                {
                  word: "alfin",
                  lemma: "al fine",
                  pos: "adverb",
                  meaning: "at last / finally (shortened form of alfine)",
                },
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object pronoun)",
                },
                {
                  word: "ricompensa",
                  lemma: "ricompensare",
                  pos: "verb",
                  meaning: "rewards / compensates (3rd sing. pres.)",
                },
              ],
              grammarNote: "Falstaff delusionally celebrates what he believes is his supreme erotic triumph after all his tribulations.",
            },
            {
              id: "a3_s2_c31_l8",
              original: "Io t'amo! t'amo!",
              literal: "I love you! I love you!",
              tokens: [
                {
                  word: "Io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I (subject pronoun)",
                },
                {
                  word: "t'",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (elided direct object pronoun)",
                },
                {
                  word: "amo",
                  lemma: "amare",
                  pos: "verb",
                  meaning: "I love (1st sing. pres.)",
                },
              ],
              grammarNote: "Falstaff passionately showers Alice with declarations of love right before the catastrophic interruption.",
            },
          ],
        },
        {
          id: "a3_s2_c32",
          speaker: "Meg Page",
          stageDirection: "di dentro",
          stageDirectionTranslation: "from within",
          lines: [
            {
              id: "a3_s2_c32_l1",
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
          id: "a3_s2_c33",
          speaker: "Alice Ford",
          stageDirection: "fingendo spavento",
          stageDirectionTranslation: "feigning fright",
          lines: [
            {
              id: "a3_s2_c33_l1",
              original: "Un grido!",
              literal: "A scream!",
              tokens: [
                {
                  word: "grido",
                  lemma: "grido",
                  pos: "noun",
                  meaning: "shout / scream / cry",
                },
              ],
              grammarNote: "Alice feigns shock at Meg's scream, pretending that danger is lurking in the dark.",
            },
            {
              id: "a3_s2_c33_l2",
              original: "Ahimè!",
              literal: "Alas!",
              tokens: [
                {
                  word: "Ahimè",
                  lemma: "ahimè",
                  pos: "interjection",
                  meaning: "alas / woe is me",
                },
              ],
              grammarNote: "Traditional dramatic exclamation of grief or fright uttered by Alice to disorient Falstaff.",
            },
          ],
        },
        {
          id: "a3_s2_c34",
          speaker: "Meg Page",
          stageDirection: "dal fondo, senza avanzare, non ha la maschera",
          stageDirectionTranslation: "from the back, without advancing, not wearing a mask",
          lines: [
            {
              id: "a3_s2_c34_l1",
              original: "Vien la tregenda!",
              literal: "The witches' sabbath is coming!",
              tokens: [
                {
                  word: "Vien",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "comes / is coming (shortened form of viene)",
                },
                {
                  word: "tregenda",
                  lemma: "tregenda",
                  pos: "noun",
                  meaning: "witches' sabbath / nocturnal demonic revel",
                },
              ],
              grammarNote: "Meg announces 'la tregenda'—an archaic term for a terrifying nocturnal meeting of witches, phantoms, and devils.",
            },
          ],
        },
        {
          id: "a3_s2_c35",
          speaker: "Meg Page",
          stageDirection: "fugge",
          stageDirectionTranslation: "flees",
          lines: [
          ],
        },
        {
          id: "a3_s2_c36",
          speaker: "Alice Ford",
          stageDirection: "come sopra",
          stageDirectionTranslation: "as above",
          lines: [
            {
              id: "a3_s2_c36_l1",
              original: "Ahimè! Fuggiamo!",
              literal: "Alas! Let us flee!",
              tokens: [
                {
                  word: "Ahimè",
                  lemma: "ahimè",
                  pos: "interjection",
                  meaning: "alas",
                },
                {
                  word: "Fuggiamo",
                  lemma: "fuggire",
                  pos: "verb",
                  meaning: "let us flee (1st plur. pres. imperative/subjunctive)",
                },
              ],
              grammarNote: "Alice urges immediate flight, abandoning Falstaff in panic.",
            },
          ],
        },
        {
          id: "a3_s2_c37",
          speaker: "Sir John Falstaff",
          stageDirection: "spaventato",
          stageDirectionTranslation: "frightened",
          lines: [
            {
              id: "a3_s2_c37_l1",
              original: "Dove?",
              literal: "Where?",
              tokens: [
                {
                  word: "Dove",
                  lemma: "dove",
                  pos: "adverb",
                  meaning: "where (interrogative)",
                },
              ],
              grammarNote: "Falstaff, paralyzed by his bulk and stag antlers, pathetically asks where he can possibly run to hide.",
            },
          ],
        },
        {
          id: "a3_s2_c38",
          speaker: "Alice Ford",
          stageDirection: "fuggendo da destra rapidissimamente",
          stageDirectionTranslation: "fleeing from the right at top speed",
          lines: [
            {
              id: "a3_s2_c38_l1",
              original: "Il cielo perdoni al mio peccato!",
              literal: "May heaven forgive my sin!",
              tokens: [
                {
                  word: "cielo",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "heaven / sky",
                },
                {
                  word: "perdoni",
                  lemma: "perdonare",
                  pos: "verb",
                  meaning: "may forgive (3rd sing. pres. subjunctive)",
                },
                {
                  word: "peccato",
                  lemma: "peccato",
                  pos: "noun",
                  meaning: "sin / transgression",
                },
              ],
              grammarNote: "Alice theatrically repents her 'sin' of adultery as she sprints away into the dark.",
            },
          ],
        },
        {
          id: "a3_s2_c39",
          speaker: "Sir John Falstaff",
          stageDirection: "appiattendosi accanto al tronco della quercia",
          stageDirectionTranslation: "flattening himself against the trunk of the oak",
          lines: [
            {
              id: "a3_s2_c39_l1",
              original: "Il diavol non vuol ch'io sia dannato.",
              literal: "The devil does not want me to be damned.",
              tokens: [
                {
                  word: "diavol",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil (shortened form of diavolo)",
                },
                {
                  word: "non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "vuol",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "wants (shortened form of vuole)",
                },
                {
                  word: "ch'",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "dannato",
                  lemma: "dannare",
                  pos: "adjective",
                  meaning: "damned (past participle as adj.)",
                },
              ],
              grammarNote: "Falstaff groans that the devil himself seems determined to torment him rather than let him enjoy sin in peace.",
            },
          ],
        },
        {
          id: "a3_s2_c40",
          speaker: "Nannetta",
          stageDirection: "di dentro",
          stageDirectionTranslation: "from within",
          lines: [
            {
              id: "a3_s2_c40_l1",
              original: "Ninfe! Elfi! Silfi! Doridi! Sirene!",
              literal: "Nymphs! Elves! Sylphs! Dorids! Sirens!",
              tokens: [
                {
                  word: "Ninfe",
                  lemma: "ninfa",
                  pos: "noun",
                  meaning: "nymphs (vocative plural)",
                },
                {
                  word: "Elfi",
                  lemma: "elfo",
                  pos: "noun",
                  meaning: "elves",
                },
                {
                  word: "Silfi",
                  lemma: "silfo",
                  pos: "noun",
                  meaning: "sylphs / air spirits",
                },
                {
                  word: "Doridi",
                  lemma: "Doride",
                  pos: "noun",
                  meaning: "Dorids / sea nymphs (daughters of Doris)",
                },
                {
                  word: "Sirene",
                  lemma: "sirena",
                  pos: "noun",
                  meaning: "sirens",
                },
              ],
              grammarNote: "Nannetta, as Queen of the Fairies, calls upon mythological nature spirits from earth, air, and water to assemble.",
            },
            {
              id: "a3_s2_c40_l2",
              original: "L'astro degli incantesimi in cielo è sorto.",
              literal: "The star of enchantments has risen in the sky.",
              tokens: [
                {
                  word: "astro",
                  lemma: "astro",
                  pos: "noun",
                  meaning: "star / heavenly body",
                },
                {
                  word: "incantesimi",
                  lemma: "incantesimo",
                  pos: "noun",
                  meaning: "enchantments / spells",
                },
                {
                  word: "cielo",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "sky / heaven",
                },
                {
                  word: "sorto",
                  lemma: "sorgere",
                  pos: "verb",
                  meaning: "risen (past participle of sorgere)",
                },
              ],
              grammarNote: "Nannetta evokes nocturnal astrology: the magical planet or moon ('astro degli incantesimi') has reached its zenith, unleashing fairy powers.",
            },
          ],
        },
        {
          id: "a3_s2_c41",
          speaker: "Nannetta",
          stageDirection: "comparisce nel fondo fra le fronde",
          stageDirectionTranslation: "appears in the background among the leaves",
          lines: [
            {
              id: "a3_s2_c41_l1",
              original: "Sorgete! Ombre serene!",
              literal: "Rise! Serene shadows!",
              tokens: [
                {
                  word: "Sorgete",
                  lemma: "sorgere",
                  pos: "verb",
                  meaning: "rise / arise (imperative 2nd plur.)",
                },
                {
                  word: "Ombre",
                  lemma: "ombra",
                  pos: "noun",
                  meaning: "shadows / spirits / shades (vocative)",
                },
                {
                  word: "serene",
                  lemma: "sereno",
                  pos: "adjective",
                  meaning: "serene / peaceful / clear",
                },
              ],
              grammarNote: "Nannetta commands the benevolent spirits ('ombre serene') of Windsor Forest to emerge from the glades.",
            },
          ],
        },
        {
          id: "a3_s2_c42",
          speaker: "Sir John Falstaff",
          stageDirection: "gettandosi co' la faccia contro terra, lungo disteso",
          stageDirectionTranslation: "throwing himself face down on the ground, stretched out full length",
          lines: [
            {
              id: "a3_s2_c42_l1",
              original: "Sono le fate. Chi le guarda è morto.",
              literal: "They are the fairies. Whoever looks at them is dead.",
              tokens: [
                {
                  word: "Sono",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "they are (3rd plur. pres.)",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "whoever / he who",
                },
                {
                  word: "guarda",
                  lemma: "guardare",
                  pos: "verb",
                  meaning: "looks at / watches (3rd sing. pres.)",
                },
                {
                  word: "morto",
                  lemma: "morire",
                  pos: "adjective",
                  meaning: "dead",
                },
              ],
              grammarNote: "Falstaff recalls the deadly English folklore rule (Shakespeare, Merry Wives V.5: 'They are fairies; he that speaks to them shall die') and throws himself prostrate on the ground.",
            },
            {
              id: "a3_s2_c42_l2",
              original: "Nannetta vestita da regina delle fate. Meg da ninfa verde, co' la",
              literal: "Nannetta dressed as queen of the fairies. Meg as green nymph, with her",
              tokens: [
                {
                  word: "vestita",
                  lemma: "vestire",
                  pos: "adjective",
                  meaning: "dressed / attired (past participle as adj.)",
                },
                {
                  word: "regina",
                  lemma: "regina",
                  pos: "noun",
                  meaning: "queen",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
                {
                  word: "ninfa",
                  lemma: "ninfa",
                  pos: "noun",
                  meaning: "nymph",
                },
                {
                  word: "verde",
                  lemma: "verde",
                  pos: "adjective",
                  meaning: "green",
                },
              ],
              grammarNote: "Stage direction detailing the fantastical fairy costumes: Nannetta as Fairy Queen and Meg as a green wood nymph.",
            },
            {
              id: "a3_s2_c42_l3",
              original: "maschera. Mrs Quickly da befana, mascherata. Alice co' la maschera.",
              literal: "mask. Mrs Quickly as a witch, masked. Alice with her mask.",
              tokens: [
                {
                  word: "maschera",
                  lemma: "maschera",
                  pos: "noun",
                  meaning: "mask",
                },
                {
                  word: "befana",
                  lemma: "befana",
                  pos: "noun",
                  meaning: "witch / hag / crone",
                },
                {
                  word: "mascherata",
                  lemma: "mascherare",
                  pos: "adjective",
                  meaning: "masked (fem. sing.)",
                },
              ],
              grammarNote: "Stage direction describing Mrs. Quickly disguised as an old folklore witch ('befana') and Alice wearing a mask.",
            },
            {
              id: "a3_s2_c42_l4",
              original: "Bardolfo in cappa rossa senza maschera, col cappuccio calato. Pistola da",
              literal: "Bardolfo in a red cloak without mask, with his hood lowered. Pistola as",
              tokens: [
                {
                  word: "cappa",
                  lemma: "cappa",
                  pos: "noun",
                  meaning: "cloak / cowl",
                },
                {
                  word: "rossa",
                  lemma: "rosso",
                  pos: "adjective",
                  meaning: "red",
                },
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "cappuccio",
                  lemma: "cappuccio",
                  pos: "noun",
                  meaning: "hood / cowl",
                },
                {
                  word: "calato",
                  lemma: "calare",
                  pos: "adjective",
                  meaning: "lowered / pulled down (past participle as adj.)",
                },
              ],
              grammarNote: "Stage direction describing Bardolfo disguised in red robes with his cowl drawn down to conceal his distinctive face and fiery nose.",
            },
            {
              id: "a3_s2_c42_l5",
              original: "satiro. Il Dr. Cajus in cappa grigia, senza maschera. Fenton in cappa",
              literal: "satyr. Dr. Caius in a gray cloak, without mask. Fenton in a black",
              tokens: [
                {
                  word: "satiro",
                  lemma: "satiro",
                  pos: "noun",
                  meaning: "satyr",
                },
                {
                  word: "grigia",
                  lemma: "grigio",
                  pos: "adjective",
                  meaning: "gray",
                },
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "cappa",
                  lemma: "cappa",
                  pos: "noun",
                  meaning: "cloak",
                },
              ],
              grammarNote: "Stage direction detailing Pistola disguised as a horned satyr, Dr. Caius in gray, and Fenton in his monk's cowl.",
            },
            {
              id: "a3_s2_c42_l6",
              original: "nera, mascherato. Mr Ford senza cappa né maschera. Ragazzette vestite",
              literal: "cloak, masked. Mr Ford without cloak or mask. Young girls dressed",
              tokens: [
                {
                  word: "nera",
                  lemma: "nero",
                  pos: "adjective",
                  meaning: "black",
                },
                {
                  word: "mascherato",
                  lemma: "mascherare",
                  pos: "adjective",
                  meaning: "masked",
                },
                {
                  word: "né",
                  lemma: "né",
                  pos: "conjunction",
                  meaning: "neither / nor",
                },
                {
                  word: "Ragazzette",
                  lemma: "ragazzetta",
                  pos: "noun",
                  meaning: "young girls / little girls (diminutive)",
                },
                {
                  word: "vestite",
                  lemma: "vestire",
                  pos: "adjective",
                  meaning: "dressed (fem. plur.)",
                },
              ],
              grammarNote: "Stage direction noting that Ford is undisguised to witness Caius's marriage, while local girls play fairy attendants.",
            },
            {
              id: "a3_s2_c42_l7",
              original: "da Fate bianche e da Fate azzurre. Altre Fate e Ninfe, Spiritelli, Diavoli.",
              literal: "as white Fairies and as blue Fairies. Other Fairies and Nymphs, Little Spirits, Devils.",
              tokens: [
                {
                  word: "Fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
                {
                  word: "bianche",
                  lemma: "bianco",
                  pos: "adjective",
                  meaning: "white (fem. plur.)",
                },
                {
                  word: "azzurre",
                  lemma: "azzurro",
                  pos: "adjective",
                  meaning: "blue / azure (fem. plur.)",
                },
                {
                  word: "Spiritelli",
                  lemma: "spiritello",
                  pos: "noun",
                  meaning: "little spirits / sprites (diminutive)",
                },
                {
                  word: "Diavoli",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devils / demons",
                },
              ],
              grammarNote: "Stage direction listing the complete supernatural chorus: white and blue fairies, woodland nymphs, impish sprites, and mischievous devils.",
            },
            {
              id: "a3_s2_c42_l8",
              original: "Falstaff sempre a terra, co' la faccia rivolta verso il suolo, immobile. Le",
              literal: "Falstaff still on the ground, with his face turned toward the soil, motionless. The",
              tokens: [
                {
                  word: "sempre",
                  lemma: "sempre",
                  pos: "adverb",
                  meaning: "still / always",
                },
                {
                  word: "terra",
                  lemma: "terra",
                  pos: "noun",
                  meaning: "ground / earth",
                },
                {
                  word: "faccia",
                  lemma: "faccia",
                  pos: "noun",
                  meaning: "face",
                },
                {
                  word: "rivolta",
                  lemma: "rivolgere",
                  pos: "adjective",
                  meaning: "turned / facing (past participle as adj.)",
                },
                {
                  word: "immobile",
                  lemma: "immobile",
                  pos: "adjective",
                  meaning: "motionless / still",
                },
              ],
              grammarNote: "Stage direction emphasizing Falstaff's terror-stricken posture, pressed flat against the earth in fearful superstitious paralysis.",
            },
            {
              id: "a3_s2_c42_l9",
              original: "piccole Fate si dispongono in cerchio intorno alla loro regina. Le Fate",
              literal: "small Fairies arrange themselves in a circle around their queen. The larger",
              tokens: [
                {
                  word: "piccole",
                  lemma: "piccolo",
                  pos: "adjective",
                  meaning: "small / little (fem. plur.)",
                },
                {
                  word: "dispongono",
                  lemma: "disporre",
                  pos: "verb",
                  meaning: "arrange / place (3rd plur. pres.)",
                },
                {
                  word: "cerchio",
                  lemma: "cerchio",
                  pos: "noun",
                  meaning: "circle / ring",
                },
                {
                  word: "intorno",
                  lemma: "intorno",
                  pos: "preposition",
                  meaning: "around / round about",
                },
                {
                  word: "regina",
                  lemma: "regina",
                  pos: "noun",
                  meaning: "queen",
                },
              ],
              grammarNote: "Stage direction describing the choreography of concentric circles formed by the fairies around Nannetta.",
            },
            {
              id: "a3_s2_c42_l10",
              original: "più grandi formano un secondo cerchio. Tutti gli Uomini formano un",
              literal: "Fairies form a second circle. All the Men form a",
              tokens: [
                {
                  word: "grandi",
                  lemma: "grande",
                  pos: "adjective",
                  meaning: "large / older (plur.)",
                },
                {
                  word: "formano",
                  lemma: "formare",
                  pos: "verb",
                  meaning: "form / constitute (3rd plur. pres.)",
                },
                {
                  word: "secondo",
                  lemma: "secondo",
                  pos: "adjective",
                  meaning: "second",
                },
                {
                  word: "Uomini",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "men (plur.)",
                },
              ],
              grammarNote: "Stage direction illustrating the spatial staging: concentric fairy rings surrounding Nannetta, with the male conspirators grouped separately.",
            },
            {
              id: "a3_s2_c42_l11",
              original: "crocchio a destra e le Donne un crocchio a sinistra.",
              literal: "cluster on the right and the Women a cluster on the left.",
              tokens: [
                {
                  word: "crocchio",
                  lemma: "crocchio",
                  pos: "noun",
                  meaning: "knot / cluster / gathering of people",
                },
                {
                  word: "destra",
                  lemma: "destra",
                  pos: "noun",
                  meaning: "right / right-hand side",
                },
                {
                  word: "Donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
                {
                  word: "sinistra",
                  lemma: "sinistra",
                  pos: "noun",
                  meaning: "left / left-hand side",
                },
              ],
              grammarNote: "Stage direction concluding the mise-en-scène layout: men grouped stage right, women stage left, encircling the prostrate Falstaff.",
            },
          ],
        },
        {
          id: "a3_s2_c43",
          speaker: "Alice Ford",
          stageDirection: "sbucando cautamente da sinistra con alcune fate",
          stageDirectionTranslation: "emerging cautiously from the left with some fairies",
          lines: [
            {
              id: "a3_s2_c43_l1",
              original: "Inoltriam.",
              literal: "Let us advance.",
              tokens: [
                {
                  word: "Inoltriam",
                  lemma: "inoltrare",
                  pos: "verb",
                  meaning: "let us advance / move forward (poetic 1st plur. subjunctive/imperative)",
                },
              ],
              grammarNote: "Alice whispers an order to advance quietly toward Falstaff's hiding spot beneath the oak.",
            },
          ],
        },
        {
          id: "a3_s2_c44",
          speaker: "Nannetta",
          stageDirection: "sbucando a sinistra con altre fate e scorgendo Falstaff",
          stageDirectionTranslation: "emerging on the left with other fairies and spotting Falstaff",
          lines: [
            {
              id: "a3_s2_c44_l1",
              original: "Egli è là.",
              literal: "He is there.",
              tokens: [
                {
                  word: "Egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (subject pronoun)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. pres.)",
                },
                {
                  word: "là",
                  lemma: "là",
                  pos: "adverb",
                  meaning: "there",
                },
              ],
              grammarNote: "Nannetta points out the bulky, antlered silhouette of Falstaff lying prostrate on the forest floor.",
            },
          ],
        },
        {
          id: "a3_s2_c45",
          speaker: "Alice Ford",
          stageDirection: "scorge Falstaff e indica alle altre",
          stageDirectionTranslation: "notices Falstaff and points him out to the others",
          lines: [
            {
              id: "a3_s2_c45_l1",
              original: "Steso al suol.",
              literal: "Stretched out on the ground.",
              tokens: [
                {
                  word: "Steso",
                  lemma: "stendere",
                  pos: "adjective",
                  meaning: "stretched out / lying flat (past participle as adj.)",
                },
                {
                  word: "al",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "on the (articulated preposition a + il)",
                },
                {
                  word: "suol",
                  lemma: "suolo",
                  pos: "noun",
                  meaning: "ground / soil (poetic shortened form of suolo)",
                },
              ],
              grammarNote: "Alice remarks with quiet mockery on Falstaff's undignified posture, prostrated flat on the earth.",
            },
          ],
        },
        {
          id: "a3_s2_c46",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s2_c46_l1",
              original: "Lo confonde",
              literal: "Confounds him",
              tokens: [
                {
                  word: "Lo",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "him (direct object pronoun)",
                },
                {
                  word: "confonde",
                  lemma: "confondere",
                  pos: "verb",
                  meaning: "confounds / overwhelms (3rd sing. pres.)",
                },
              ],
              grammarNote: "Nannetta observes the complete psychological disorientation gripping the terrified knight.",
            },
            {
              id: "a3_s2_c46_l2",
              original: "il terror.",
              literal: "the terror.",
              tokens: [
                {
                  word: "terror",
                  lemma: "terrore",
                  pos: "noun",
                  meaning: "terror / dread (poetic shortened form of terrore)",
                },
              ],
              grammarNote: "Continuation of Nannetta's observation ('Lo confonde il terror'), highlighting Falstaff's genuine superstitious dread.",
            },
          ],
        },
        {
          id: "a3_s2_c47",
          speaker: "Nannetta",
          stageDirection: "tutte si inoltrano con precauzione",
          stageDirectionTranslation: "all advance cautiously",
          lines: [
            {
              id: "a3_s2_c47_l1",
              original: "FATE",
              literal: "FAIRIES",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus heading)",
                },
              ],
              grammarNote: "Choral heading designating the chorus of Fairies joining the whispered commentary.",
            },
            {
              id: "a3_s2_c47_l2",
              original: "Si nasconde!",
              literal: "He is hiding!",
              tokens: [
                {
                  word: "Si",
                  lemma: "si",
                  pos: "pronoun",
                  meaning: "himself (reflexive pronoun)",
                },
                {
                  word: "nasconde",
                  lemma: "nascondere",
                  pos: "verb",
                  meaning: "hides / conceals himself (3rd sing. pres.)",
                },
              ],
              grammarNote: "The fairies whisper in amused excitement at seeing the gigantic knight attempting in vain to hide.",
            },
          ],
        },
        {
          id: "a3_s2_c48",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c48_l1",
              original: "Non ridiam!",
              literal: "Let us not laugh!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "ridiam",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "let us laugh (1st plur. pres. imperative shortened form)",
                },
              ],
              grammarNote: "Alice frantically hushes the conspirators to suppress their bubbling laughter and preserve the supernatural illusion.",
            },
            {
              id: "a3_s2_c48_l2",
              original: "FATE",
              literal: "FAIRIES",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus heading)",
                },
              ],
              grammarNote: "Choral heading designating the chorus of Fairies joining the whispered commentary.",
            },
            {
              id: "a3_s2_c48_l3",
              original: "Non ridiam!",
              literal: "Let us not laugh!",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "ridiam",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "let us laugh (1st plur. pres. imperative shortened form)",
                },
              ],
              grammarNote: "Alice frantically hushes the conspirators to suppress their bubbling laughter and preserve the supernatural illusion.",
            },
          ],
        },
        {
          id: "a3_s2_c49",
          speaker: "Nannetta",
          stageDirection: "indicando alle fate il loro posto, mentre Alice parte rapidamente da sinistra",
          stageDirectionTranslation: "showing the fairies their places, while Alice leaves quickly from the left",
          lines: [
            {
              id: "a3_s2_c49_l1",
              original: "Tutte qui, dietro a me.",
              literal: "All of you here, behind me.",
              tokens: [
                {
                  word: "Tutte",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "all (fem. plur.)",
                },
                {
                  word: "qui",
                  lemma: "qui",
                  pos: "adverb",
                  meaning: "here",
                },
                {
                  word: "dietro",
                  lemma: "dietro",
                  pos: "preposition",
                  meaning: "behind",
                },
                {
                  word: "me",
                  lemma: "me",
                  pos: "pronoun",
                  meaning: "me",
                },
              ],
              grammarNote: "Nannetta organizes her fairy court into formation behind her before commencing the incantation.",
            },
            {
              id: "a3_s2_c49_l2",
              original: "Cominciam.",
              literal: "Let us begin.",
              tokens: [
                {
                  word: "Cominciam",
                  lemma: "cominciare",
                  pos: "verb",
                  meaning: "let us begin (1st plur. imperative shortened form)",
                },
              ],
              grammarNote: "Nannetta signals the start of the ritual summoning song.",
            },
            {
              id: "a3_s2_c49_l3",
              original: "FATE",
              literal: "FAIRIES",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus heading)",
                },
              ],
              grammarNote: "Choral heading designating the chorus of Fairies joining the whispered commentary.",
            },
            {
              id: "a3_s2_c49_l4",
              original: "Tocca a te.",
              literal: "It is your turn.",
              tokens: [
                {
                  word: "Tocca",
                  lemma: "toccare",
                  pos: "verb",
                  meaning: "it falls / it is the turn of (3rd sing. pres. impersonal)",
                },
                {
                  word: "a",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to",
                },
                {
                  word: "te",
                  lemma: "te",
                  pos: "pronoun",
                  meaning: "you (disjunctive pronoun)",
                },
              ],
              grammarNote: "Whispered cue between the conspirators handing over the performance to Nannetta as Fairy Queen.",
            },
          ],
        },
        {
          id: "a3_s2_c50",
          speaker: "Nannetta",
          stageDirection: "le piccole fate si dispongono in cerchio intorno alla loro regina: le fate più grandi formano gruppo a sinistra",
          stageDirectionTranslation: "the little fairies arrange themselves in a circle around their queen; the larger fairies form a group on the left",
          lines: [
          ],
        },
        {
          id: "a3_s2_c51",
          speaker: "Nannetta",
          pieceTitle: "Sul fil d'un soffio etesio (Canzone delle fate)",
          stageDirection: "la regina delle fate",
          stageDirectionTranslation: "the Fairy Queen",
          lines: [
            {
              id: "a3_s2_c51_l1",
              original: "Sul fil d'un soffio etesio",
              literal: "Upon the thread of an Etesian breeze",
              tokens: [
                {
                  word: "fil",
                  lemma: "filo",
                  pos: "noun",
                  meaning: "thread / edge / filament (poetic shortening)",
                },
                {
                  word: "soffio",
                  lemma: "soffio",
                  pos: "noun",
                  meaning: "breath / breeze / puff of wind",
                },
                {
                  word: "etesio",
                  lemma: "etesio",
                  pos: "adjective",
                  meaning: "Etesian / gentle summer breeze (classical Greek etēsios)",
                },
              ],
              grammarNote: "Nannetta begins her ethereal song ('Sul fil d'un soffio etesio'), invoking the gentle classical 'etesio' wind (the cool periodic Mediterranean summer breeze) in delicate settenario verse.",
            },
            {
              id: "a3_s2_c51_l2",
              original: "scorrete, agili larve,",
              literal: "glide, agile spirits,",
              tokens: [
                {
                  word: "scorrete",
                  lemma: "scorrere",
                  pos: "verb",
                  meaning: "glide / flow / skim (imperative 2nd plur.)",
                },
                {
                  word: "agili",
                  lemma: "agile",
                  pos: "adjective",
                  meaning: "agile / nimble / light",
                },
                {
                  word: "larve",
                  lemma: "larva",
                  pos: "noun",
                  meaning: "ghosts / spirits / phantoms (classical Latin larvae)",
                },
              ],
              grammarNote: "Boito uses 'larve' in its classical Latin sense (larvae = nocturnal spirits or phantoms), commanding them to glide weightlessly.",
            },
            {
              id: "a3_s2_c51_l3",
              original: "fra i rami un baglior cesio",
              literal: "among the branches a pale bluish glow",
              tokens: [
                {
                  word: "rami",
                  lemma: "ramo",
                  pos: "noun",
                  meaning: "branches / boughs",
                },
                {
                  word: "baglior",
                  lemma: "bagliore",
                  pos: "noun",
                  meaning: "glow / gleam / flash (shortened form of bagliore)",
                },
                {
                  word: "cesio",
                  lemma: "cesio",
                  pos: "adjective",
                  meaning: "cesious / pale bluish-gray / silvery (Latin caesius)",
                },
              ],
              grammarNote: "'Cesio' is a refined literary adjective derived from Latin caesius (silvery blue-gray), describing the delicate tint of moonlight filtering through leaves.",
            },
            {
              id: "a3_s2_c51_l4",
              original: "d'alba lunare apparve.",
              literal: "of lunar dawn appeared.",
              tokens: [
                {
                  word: "alba",
                  lemma: "alba",
                  pos: "noun",
                  meaning: "dawn / daybreak",
                },
                {
                  word: "lunare",
                  lemma: "lunare",
                  pos: "adjective",
                  meaning: "lunar / of the moon",
                },
                {
                  word: "apparve",
                  lemma: "apparire",
                  pos: "verb",
                  meaning: "appeared (3rd sing. passato remoto)",
                },
              ],
              grammarNote: "Poetic oxymoron 'alba lunare' (lunar dawn) portraying the radiant moonrise as an enchanting nocturnal dawn.",
            },
            {
              id: "a3_s2_c51_l5",
              original: "Danzate! e il passo blando",
              literal: "Dance! and let the gentle step",
              tokens: [
                {
                  word: "Danzate",
                  lemma: "danzare",
                  pos: "verb",
                  meaning: "dance (imperative 2nd plur.)",
                },
                {
                  word: "passo",
                  lemma: "passo",
                  pos: "noun",
                  meaning: "step / pace",
                },
                {
                  word: "blando",
                  lemma: "blando",
                  pos: "adjective",
                  meaning: "gentle / soft / mild",
                },
              ],
              grammarNote: "Nannetta invites the spirits into motion, pairing 'passo blando' (gentle step) with soft musical cadence.",
            },
            {
              id: "a3_s2_c51_l6",
              original: "misuri un blando suon,",
              literal: "measure a gentle sound,",
              tokens: [
                {
                  word: "misuri",
                  lemma: "misurare",
                  pos: "verb",
                  meaning: "let measure / keep time with (3rd sing. pres. subjunctive)",
                },
                {
                  word: "blando",
                  lemma: "blando",
                  pos: "adjective",
                  meaning: "gentle / soft / mellow",
                },
                {
                  word: "suon",
                  lemma: "suono",
                  pos: "noun",
                  meaning: "sound (poetic shortened form of suono)",
                },
              ],
              grammarNote: "Boito repeats the adjective 'blando' to mirror the rhythmic harmony between the light footsteps and the soft orchestral accompaniment.",
            },
            {
              id: "a3_s2_c51_l7",
              original: "le magiche accoppiando",
              literal: "coupling the magical",
              tokens: [
                {
                  word: "magiche",
                  lemma: "magico",
                  pos: "adjective",
                  meaning: "magical / enchanted (fem. plur.)",
                },
                {
                  word: "accoppiando",
                  lemma: "accoppiare",
                  pos: "verb",
                  meaning: "coupling / joining / matching (gerund)",
                },
              ],
              grammarNote: "Gerund 'accoppiando' introduces the harmonious union of dance and choral song.",
            },
            {
              id: "a3_s2_c51_l8",
              original: "carole alla canzon.",
              literal: "round-dances to the song.",
              tokens: [
                {
                  word: "carole",
                  lemma: "carola",
                  pos: "noun",
                  meaning: "carols / ring-dances / round dances (medieval dance form)",
                },
                {
                  word: "canzon",
                  lemma: "canzone",
                  pos: "noun",
                  meaning: "song (poetic shortened form of canzone)",
                },
              ],
              grammarNote: "'Carola' denotes an archaic medieval circle-dance, evoking an idyllic, ancient fairy ritual in the forest glade.",
            },
            {
              id: "a3_s2_c51_l9",
              original: "FATE La selva dorme e sperde",
              literal: "FAIRIES The forest sleeps and disperses",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus designation)",
                },
                {
                  word: "selva",
                  lemma: "selva",
                  pos: "noun",
                  meaning: "forest / wood",
                },
                {
                  word: "dorme",
                  lemma: "dormire",
                  pos: "verb",
                  meaning: "sleeps (3rd sing. pres.)",
                },
                {
                  word: "sperde",
                  lemma: "sperdere",
                  pos: "verb",
                  meaning: "disperses / diffuses (3rd sing. pres.)",
                },
              ],
              grammarNote: "The fairy chorus enters softly with evocative nature poetry: the forest rests while diffusing fragrance and shadows into the midnight air.",
            },
            {
              id: "a3_s2_c51_l10",
              original: "incenso ed ombra; e par",
              literal: "incense and shadow; and it seems",
              tokens: [
                {
                  word: "incenso",
                  lemma: "incenso",
                  pos: "noun",
                  meaning: "incense / aromatic fragrance",
                },
                {
                  word: "ombra",
                  lemma: "ombra",
                  pos: "noun",
                  meaning: "shadow / darkness",
                },
                {
                  word: "par",
                  lemma: "parere",
                  pos: "verb",
                  meaning: "seems / appears (poetic shortened form of pare)",
                },
              ],
              grammarNote: "'Incenso' evokes the aromatic pine and nocturnal blossoms of Windsor Forest creating a sacred, mystical atmosphere.",
            },
            {
              id: "a3_s2_c51_l11",
              original: "nell'aer denso un verde",
              literal: "in the dense air a green",
              tokens: [
                {
                  word: "nell'",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (articulated preposition in + il)",
                },
                {
                  word: "aer",
                  lemma: "aere",
                  pos: "noun",
                  meaning: "air (poetic shortening)",
                },
                {
                  word: "denso",
                  lemma: "denso",
                  pos: "adjective",
                  meaning: "dense / thick",
                },
                {
                  word: "verde",
                  lemma: "verde",
                  pos: "adjective",
                  meaning: "green",
                },
              ],
              grammarNote: "The shimmering green foliage under the moonlight makes the dense night air resemble an underwater realm.",
            },
            {
              id: "a3_s2_c51_l12",
              original: "asilo in fondo al mar.",
              literal: "sanctuary at the bottom of the sea.",
              tokens: [
                {
                  word: "asilo",
                  lemma: "asilo",
                  pos: "noun",
                  meaning: "sanctuary / refuge / haven",
                },
                {
                  word: "fondo",
                  lemma: "fondo",
                  pos: "noun",
                  meaning: "bottom / depth",
                },
                {
                  word: "mar",
                  lemma: "mare",
                  pos: "noun",
                  meaning: "sea (poetic shortened form of mare)",
                },
              ],
              grammarNote: "A stunning poetic simile comparing the moonlit Windsor woodland to an emerald sanctuary at the bottom of the ocean.",
            },
          ],
        },
        {
          id: "a3_s2_c52",
          speaker: "Nannetta",
          stageDirection: "la regina delle fate",
          stageDirectionTranslation: "the Fairy Queen",
          lines: [
            {
              id: "a3_s2_c52_l1",
              original: "Erriam sotto la luna",
              literal: "Let us wander beneath the moon",
              tokens: [
                {
                  word: "Erriam",
                  lemma: "errare",
                  pos: "verb",
                  meaning: "let us wander / roam (poetic 1st plur. pres. indicative/subjunctive)",
                },
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "preposition",
                  meaning: "beneath / under",
                },
                {
                  word: "luna",
                  lemma: "luna",
                  pos: "noun",
                  meaning: "moon",
                },
              ],
              grammarNote: "The fairies call upon one another to wander freely under the full moon gathering magical flora.",
            },
            {
              id: "a3_s2_c52_l2",
              original: "scegliendo fior da fiore,",
              literal: "choosing flower by flower,",
              tokens: [
                {
                  word: "scegliendo",
                  lemma: "scegliere",
                  pos: "verb",
                  meaning: "choosing / picking (gerund)",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower (poetic shortening)",
                },
                {
                  word: "da",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from / by",
                },
                {
                  word: "fiore",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flower",
                },
              ],
              grammarNote: "'Scegliendo fior da fiore' is an Italian poetic idiom meaning selecting the sweetest blossoms one by one.",
            },
            {
              id: "a3_s2_c52_l3",
              original: "ogni corolla in core",
              literal: "every corolla in its heart",
              tokens: [
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / each",
                },
                {
                  word: "corolla",
                  lemma: "corolla",
                  pos: "noun",
                  meaning: "corolla / petals of a flower",
                },
                {
                  word: "core",
                  lemma: "cuore",
                  pos: "noun",
                  meaning: "heart (poetic form of cuore)",
                },
              ],
              grammarNote: "Poetic personification attributing an inner 'heart' ('core') to each floral corolla gathered by the woodland fairies.",
            },
            {
              id: "a3_s2_c52_l4",
              original: "porta la sua fortuna.",
              literal: "carries its good fortune.",
              tokens: [
                {
                  word: "porta",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "carries / bears (3rd sing. pres.)",
                },
                {
                  word: "sua",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "its / her",
                },
                {
                  word: "fortuna",
                  lemma: "fortuna",
                  pos: "noun",
                  meaning: "fortune / luck / destiny",
                },
              ],
              grammarNote: "Conclusion of Part A: each flower picked by the fairies holds a unique magical blessing or destiny for the mortals.",
            },
            {
              id: "a3_s2_c52_l5",
              original: "Coi gigli e le vïole",
              literal: "With lilies and violets",
              tokens: [
                {
                  word: "Coi",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (articulated preposition con + i)",
                },
                {
                  word: "gigli",
                  lemma: "giglio",
                  pos: "noun",
                  meaning: "lilies",
                },
                {
                  word: "vïole",
                  lemma: "viola",
                  pos: "noun",
                  meaning: "violets (poetic diaeresis vïole scanning as three syllables)",
                },
              ],
              grammarNote: "Prepositional phrase opening the second strophe of Nannetta's fairy song. The archaic diaeresis in 'vïole' (vi-o-le) expands the word into three syllables to preserve the delicate ottonario meter.",
            },
            {
              id: "a3_s2_c52_l6",
              original: "scriviam dei nomi arcani,",
              literal: "let us write secret names,",
              tokens: [
                {
                  word: "scriviam",
                  lemma: "scrivere",
                  pos: "verb",
                  meaning: "let us write (1st plur. hortatory subjunctive, shortened form of scriviamo)",
                },
                {
                  word: "dei",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "some / of the (partitive preposition di + i)",
                },
                {
                  word: "nomi",
                  lemma: "nome",
                  pos: "noun",
                  meaning: "names",
                },
                {
                  word: "arcani",
                  lemma: "arcano",
                  pos: "adjective",
                  meaning: "arcane / mysterious / secret",
                },
              ],
              grammarNote: "Hortatory 1st person plural subjunctive ('scriviam') with poetic shortened form of 'scriviamo'. Nannetta bids the disguised children to trace enchanted magical symbols in flowers.",
            },
            {
              id: "a3_s2_c52_l7",
              original: "dalle fatate mani",
              literal: "from fairy hands",
              tokens: [
                {
                  word: "dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + le)",
                },
                {
                  word: "fatate",
                  lemma: "fatato",
                  pos: "adjective",
                  meaning: "fairy / enchanted / magical",
                },
                {
                  word: "mani",
                  lemma: "mano",
                  pos: "noun",
                  meaning: "hands (feminine plural)",
                },
              ],
              grammarNote: "Prepositional ablative phrase of origin ('dalle fatate mani') dependent on 'germoglino'. The feminine noun 'mano' takes the irregular plural 'mani'.",
            },
            {
              id: "a3_s2_c52_l8",
              original: "germoglino parole.",
              literal: "let words sprout.",
              tokens: [
                {
                  word: "germoglino",
                  lemma: "germogliare",
                  pos: "verb",
                  meaning: "let sprout / may sprout (3rd plur. present subjunctive)",
                },
                {
                  word: "parole",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "words",
                },
              ],
              grammarNote: "Inverted subjunctive wish/hortatory subjunctive ('germoglino') with subject 'parole'. The fairy Queen envisions words blossoming organically from the touch of their fingertips.",
            },
            {
              id: "a3_s2_c52_l9",
              original: "Parole alluminate",
              literal: "Words illuminated",
              tokens: [
                {
                  word: "Parole",
                  lemma: "parola",
                  pos: "noun",
                  meaning: "words",
                },
                {
                  word: "alluminate",
                  lemma: "alluminare",
                  pos: "adjective",
                  meaning: "illuminated / miniature-painted (archaic past participle)",
                },
              ],
              grammarNote: "Archaic past participle 'alluminate' (from medieval Italian alluminare, meaning to decorate manuscripts with miniature illuminations and gold leaf), evoking glowing magical script.",
            },
            {
              id: "a3_s2_c52_l10",
              original: "di puro argento e d'or,",
              literal: "of pure silver and gold,",
              tokens: [
                {
                  word: "puro",
                  lemma: "puro",
                  pos: "adjective",
                  meaning: "pure",
                },
                {
                  word: "argento",
                  lemma: "argento",
                  pos: "noun",
                  meaning: "silver",
                },
                {
                  word: "d'or",
                  lemma: "oro",
                  pos: "noun",
                  meaning: "of gold (preposition di + shortened form of oro)",
                },
              ],
              grammarNote: "Prepositional phrase modifying 'alluminate'. The poetic truncation 'd'or' (for 'd'oro') creates a crisp tronco rhyme with 'albor' and 'cacciator'.",
            },
            {
              id: "a3_s2_c52_l11",
              original: "carmi e malie. Le fate",
              literal: "chants and spells. The fairies",
              tokens: [
                {
                  word: "carmi",
                  lemma: "carme",
                  pos: "noun",
                  meaning: "incantations / poetic songs (classical carmina)",
                },
                {
                  word: "malie",
                  lemma: "malia",
                  pos: "noun",
                  meaning: "spells / enchantments / sorceries",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
              ],
              grammarNote: "Elevated classical noun 'carmi' (from Latin carmen) paired with 'malie' in apposition to the illuminated words, followed by the subject 'Le fate' of the subsequent sentence.",
            },
            {
              id: "a3_s2_c52_l12",
              original: "hanno per cifre i fior.",
              literal: "have flowers as their cyphers.",
              tokens: [
                {
                  word: "hanno",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "have (3rd plur. present)",
                },
                {
                  word: "cifre",
                  lemma: "cifra",
                  pos: "noun",
                  meaning: "cyphers / secret characters / numerals",
                },
                {
                  word: "fior",
                  lemma: "fiore",
                  pos: "noun",
                  meaning: "flowers (poetic shortened form of fiori)",
                },
              ],
              grammarNote: "Idiomatic construction 'avere per cifre' (to possess as secret signs or letters). 'Fior' is the poetic truncated plural for 'fiori', acting as direct object.",
            },
            {
              id: "a3_s2_c52_l13",
              original: "FATE",
              literal: "FAIRIES",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus heading)",
                },
              ],
              grammarNote: "Choral heading designating the chorus of Fairies joining the whispered commentary.",
            },
          ],
        },
        {
          id: "a3_s2_c53",
          speaker: "Nannetta",
          stageDirection: "mentre le piccole fate vanno cogliendo fiori",
          stageDirectionTranslation: "while the little fairies go gathering flowers",
          lines: [
            {
              id: "a3_s2_c53_l1",
              original: "Moviamo ad una ad una",
              literal: "Let us move one by one",
              tokens: [
                {
                  word: "Moviamo",
                  lemma: "muovere",
                  pos: "verb",
                  meaning: "let us move (1st plur. hortatory subjunctive / imperative)",
                },
                {
                  word: "ad una ad una",
                  lemma: "ad una ad una",
                  pos: "idiom",
                  meaning: "one by one (feminine plural distributive idiom)",
                },
              ],
              grammarNote: "Hortatory 1st person plural 'Moviamo' (preserving the non-diphthongized Latin root) combined with the feminine distributive idiom 'ad una ad una' as the fairies glide in single file.",
            },
            {
              id: "a3_s2_c53_l2",
              original: "sotto il lunare albor,",
              literal: "beneath the lunar glow,",
              tokens: [
                {
                  word: "sotto",
                  lemma: "sotto",
                  pos: "preposition",
                  meaning: "under / beneath",
                },
                {
                  word: "lunare",
                  lemma: "lunare",
                  pos: "adjective",
                  meaning: "lunar / of the moon",
                },
                {
                  word: "albor",
                  lemma: "albore",
                  pos: "noun",
                  meaning: "glow / whiteness / pale radiance (shortened form of albore)",
                },
              ],
              grammarNote: "Atmospheric prepositional phrase setting the nocturnal scene. 'Albor' is an shortened form of 'albore' (pale dawn light or soft moonlight).",
            },
            {
              id: "a3_s2_c53_l3",
              original: "verso la quercia bruna",
              literal: "toward the dark oak",
              tokens: [
                {
                  word: "verso",
                  lemma: "verso",
                  pos: "preposition",
                  meaning: "toward",
                },
                {
                  word: "quercia",
                  lemma: "quercia",
                  pos: "noun",
                  meaning: "oak tree",
                },
                {
                  word: "bruna",
                  lemma: "bruno",
                  pos: "adjective",
                  meaning: "dark / dusky / brown",
                },
              ],
              grammarNote: "Directional prepositional phrase leading the procession to Herne's Oak ('la quercia bruna'), where Falstaff lies cowering in terror.",
            },
            {
              id: "a3_s2_c53_l4",
              original: "del nero cacciator.",
              literal: "of the black hunter.",
              tokens: [
                {
                  word: "del",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (articulated preposition di + il)",
                },
                {
                  word: "nero",
                  lemma: "nero",
                  pos: "adjective",
                  meaning: "black / sinister",
                },
                {
                  word: "cacciator",
                  lemma: "cacciatore",
                  pos: "noun",
                  meaning: "hunter (poetic shortened form of cacciatore)",
                },
              ],
              grammarNote: "Genitive phrase completing the reference to Herne the Hunter ('il nero cacciatore'), ending the lyrical section on an emphatic rhyming masculine monosyllable.",
            },
          ],
        },
        {
          id: "a3_s2_c54",
          speaker: "Nannetta",
          stageDirection: "tutte le fate co' la regina mentre cantano si avviano lentamente verso la quercia",
          stageDirectionTranslation: "all the fairies with the queen, while singing, move slowly toward the oak",
          lines: [
          ],
        },
        {
          id: "a3_s2_c55",
          speaker: "Bardolfo",
          stageDirection: "intoppando nel corpo di Falstaff e arrestando tutti con un gesto",
          stageDirectionTranslation: "stumbling over Falstaff's body and halting everyone with a gesture",
          lines: [
            {
              id: "a3_s2_c55_l1",
              original: "Alto là!",
              literal: "Halt there!",
              tokens: [
                {
                  word: "Alto là",
                  lemma: "alto là",
                  pos: "interjection",
                  meaning: "halt! / stop right there!",
                },
              ],
              grammarNote: "Traditional military sentry command ('alto là!'). Bardolfo feigns military vigilance as he pretends to stumble upon the prostrate knight in the dark.",
            },
          ],
        },
        {
          id: "a3_s2_c56",
          speaker: "Pistola",
          stageDirection: "accorrendo",
          stageDirectionTranslation: "running up",
          lines: [
            {
              id: "a3_s2_c56_l1",
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
          id: "a3_s2_c57",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c57_l1",
              original: "Pietà!",
              literal: "Mercy!",
              tokens: [
                {
                  word: "Pietà",
                  lemma: "pietà",
                  pos: "noun",
                  meaning: "mercy / pity / compassion",
                },
              ],
              grammarNote: "Sir John's single-word plea for mercy, paralyzed face-down on the grass because superstition dictates that whoever gazes upon fairies dies.",
            },
          ],
        },
        {
          id: "a3_s2_c58",
          speaker: "Mrs. Quickly",
          stageDirection: "toccando Falstaff col bastone",
          stageDirectionTranslation: "poking Falstaff with the cane",
          lines: [
            {
              id: "a3_s2_c58_l1",
              original: "C'è un uom!",
              literal: "There is a man!",
              tokens: [
                {
                  word: "C'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (ci + è)",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (poetic shortened form of uomo)",
                },
              ],
              grammarNote: "Mrs. Quickly draws mock-horrified attention to the fallen intruder, using the existential 'c'è' and the poetic shortening 'uom'.",
            },
            {
              id: "a3_s2_c58_l2",
              original: "ALICE, MEG E NANNETTA",
              literal: "Alice, Meg and Nannetta",
              tokens: [
                {
                  word: "ALICE",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "NANNETTA",
                  lemma: "Nannetta",
                  pos: "noun",
                  meaning: "Nannetta (proper name)",
                },
              ],
              grammarNote: "Libretto character heading marking the three Windsor women speaking and singing together in the masquerade.",
            },
            {
              id: "a3_s2_c58_l3",
              original: "C'è un uom!",
              literal: "There is a man!",
              tokens: [
                {
                  word: "C'è",
                  lemma: "esserci",
                  pos: "verb",
                  meaning: "there is (ci + è)",
                },
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (poetic shortened form of uomo)",
                },
              ],
              grammarNote: "Mrs. Quickly draws mock-horrified attention to the fallen intruder, using the existential 'c'è' and the poetic shortening 'uom'.",
            },
          ],
        },
        {
          id: "a3_s2_c59",
          speaker: "Ford",
          stageDirection: "che sarà accorso vicino a Falstaff",
          stageDirectionTranslation: "who has rushed up close to Falstaff",
          lines: [
            {
              id: "a3_s2_c59_l1",
              original: "Cornuto come un bue!",
              literal: "Horned like an ox!",
              tokens: [
                {
                  word: "Cornuto",
                  lemma: "cornuto",
                  pos: "adjective",
                  meaning: "horned / cuckolded",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "bue",
                  lemma: "bue",
                  pos: "noun",
                  meaning: "ox",
                },
              ],
              grammarNote: "Ford's biting exclamation plays on the dual meaning of 'cornuto' (physically antlered and a cuckold), relishing the poetically just humiliation of his would-be rival.",
            },
          ],
        },
        {
          id: "a3_s2_c60",
          speaker: "Pistola",
          lines: [
            {
              id: "a3_s2_c60_l1",
              original: "Rotondo come un pomo!",
              literal: "Round like an apple!",
              tokens: [
                {
                  word: "Rotondo",
                  lemma: "rotondo",
                  pos: "adjective",
                  meaning: "round / spherical",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "pomo",
                  lemma: "pomo",
                  pos: "noun",
                  meaning: "apple / round fruit",
                },
              ],
              grammarNote: "Pistola adds his comic comparison, contrasting Sir John's spherical shape with the literary noun 'pomo' (apple/fruit).",
            },
          ],
        },
        {
          id: "a3_s2_c61",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a3_s2_c61_l1",
              original: "Grosso come una nave!",
              literal: "Big as a ship!",
              tokens: [
                {
                  word: "Grosso",
                  lemma: "grosso",
                  pos: "adjective",
                  meaning: "big / bulky / massive",
                },
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "nave",
                  lemma: "nave",
                  pos: "noun",
                  meaning: "ship / vessel",
                },
              ],
              grammarNote: "Bardolfo completes the triad of similes with a naval metaphor, comparing Falstaff's colossal bulk to a galleon.",
            },
            {
              id: "a3_s2_c61_l2",
              original: "PISTOLA, BARDOLFO",
              literal: "Pistola, Bardolfo",
              tokens: [
                {
                  word: "PISTOLA",
                  lemma: "Pistola",
                  pos: "noun",
                  meaning: "Pistola (proper name)",
                },
                {
                  word: "BARDOLFO",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo (proper name)",
                },
              ],
              grammarNote: "Libretto character heading indicating Falstaff's two treacherous ex-followers taking command of the interrogation.",
            },
          ],
        },
        {
          id: "a3_s2_c62",
          speaker: "Bardolfo",
          stageDirection: "toccando Falstaff col piede",
          stageDirectionTranslation: "nudging Falstaff with his foot",
          lines: [
            {
              id: "a3_s2_c62_l1",
              original: "Alzati, olà!",
              literal: "Get up, hey!",
              tokens: [
                {
                  word: "Alzati",
                  lemma: "alzarsi",
                  pos: "verb",
                  meaning: "get up / stand up (imperative alza + reflexive clitic ti)",
                },
                {
                  word: "olà",
                  lemma: "olà",
                  pos: "interjection",
                  meaning: "hey / hallo",
                },
              ],
              grammarNote: "Reflexive imperative 'Alzati' with attached 'ti', accompanied by the stern commanding interjection 'olà'.",
            },
          ],
        },
        {
          id: "a3_s2_c63",
          speaker: "Sir John Falstaff",
          stageDirection: "alzando la testa",
          stageDirectionTranslation: "raising his head",
          lines: [
            {
              id: "a3_s2_c63_l1",
              original: "Portatemi una grue!",
              literal: "Bring me a crane!",
              tokens: [
                {
                  word: "Portatemi",
                  lemma: "portare",
                  pos: "verb",
                  meaning: "bring me (imperative 2nd plur. portate + indirect object clitic mi)",
                },
                {
                  word: "grue",
                  lemma: "grue",
                  pos: "noun",
                  meaning: "crane / derrick (archaic variant of gru)",
                },
              ],
              grammarNote: "Imperative withattached pronoun 'Portatemi'. Falstaff delivers a classic comic quip, admitting that only a mechanical hoisting crane ('grue') could lift his ponderous mass.",
            },
            {
              id: "a3_s2_c63_l2",
              original: "Non posso.",
              literal: "I cannot.",
              tokens: [
                {
                  word: "Non",
                  lemma: "non",
                  pos: "adverb",
                  meaning: "not",
                },
                {
                  word: "posso",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "I can / I am able (1st sing. present)",
                },
              ],
              grammarNote: "Concise modal verb expressing absolute physical and emotional defeat, pinned to the earth by weight and fear.",
            },
          ],
        },
        {
          id: "a3_s2_c64",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c64_l1",
              original: "È troppo grave.",
              literal: "He is too heavy.",
              tokens: [
                {
                  word: "troppo",
                  lemma: "troppo",
                  pos: "adverb",
                  meaning: "too / excessively",
                },
                {
                  word: "grave",
                  lemma: "grave",
                  pos: "adjective",
                  meaning: "heavy / weighty / grave",
                },
              ],
              grammarNote: "Ford's observation carries double meaning: physically ponderous ('grave') and morally serious in his transgressions.",
            },
          ],
        },
        {
          id: "a3_s2_c65",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a3_s2_c65_l1",
              original: "È corrotto!",
              literal: "He is corrupt!",
              tokens: [
                {
                  word: "corrotto",
                  lemma: "corrotto",
                  pos: "adjective",
                  meaning: "corrupt / tainted / depraved",
                },
              ],
              grammarNote: "Quickly initiates the mock-religious catechism, pronouncing Falstaff spiritually defiled.",
            },
            {
              id: "a3_s2_c65_l2",
              original: "FATE",
              literal: "FAIRIES",
              tokens: [
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies (chorus heading)",
                },
              ],
              grammarNote: "Choral heading designating the chorus of Fairies joining the whispered commentary.",
            },
            {
              id: "a3_s2_c65_l3",
              original: "È corrotto!",
              literal: "He is corrupt!",
              tokens: [
                {
                  word: "corrotto",
                  lemma: "corrotto",
                  pos: "adjective",
                  meaning: "corrupt / tainted / depraved",
                },
              ],
              grammarNote: "Quickly initiates the mock-religious catechism, pronouncing Falstaff spiritually defiled.",
            },
          ],
        },
        {
          id: "a3_s2_c66",
          speaker: "Alice, Meg & Nannetta",
          lines: [
            {
              id: "a3_s2_c66_l1",
              original: "È impuro!",
              literal: "He is impure!",
              tokens: [
                {
                  word: "impuro",
                  lemma: "impuro",
                  pos: "adjective",
                  meaning: "impure / unclean",
                },
              ],
              grammarNote: "The women chime in antiphonal chorus, declaring that the sacred fairy ground has been desecrated by an impure mortal.",
            },
          ],
        },
        {
          id: "a3_s2_c67",
          speaker: "Chorus",
          lines: [
            {
              id: "a3_s2_c67_l1",
              original: "È impuro!",
              literal: "He is impure!",
              tokens: [
                {
                  word: "impuro",
                  lemma: "impuro",
                  pos: "adjective",
                  meaning: "impure / unclean",
                },
              ],
              grammarNote: "The women chime in antiphonal chorus, declaring that the sacred fairy ground has been desecrated by an impure mortal.",
            },
          ],
        },
        {
          id: "a3_s2_c68",
          speaker: "Bardolfo",
          stageDirection: "con dei gran gesti da stregone",
          stageDirectionTranslation: "with grand sorcerer-like gestures",
          lines: [
            {
              id: "a3_s2_c68_l1",
              original: "Si faccia lo scongiuro!",
              literal: "Let the exorcism be performed!",
              tokens: [
                {
                  word: "Si faccia",
                  lemma: "farsi",
                  pos: "verb",
                  meaning: "let be made / let be performed (impersonal si + 3rd sing. present subjunctive of fare)",
                },
                {
                  word: "scongiuro",
                  lemma: "scongiuro",
                  pos: "noun",
                  meaning: "exorcism / conjuration / ritual spell",
                },
              ],
              grammarNote: "Passive/impersonal 'si' with subjunctive 'faccia' ('si faccia', let there be made). Bardolfo announces the ritual cleansing and exorcism of the intruder.",
            },
          ],
        },
        {
          id: "a3_s2_c69",
          speaker: "Bardolfo",
          stageDirection: "il Dr. Cajus s'aggira come chi cerca qualcuno. Fenton e Quickly nascondono Nannetta co' le loro persone",
          stageDirectionTranslation: "Dr. Caius wanders around like someone looking for somebody. Fenton and Quickly hide Nannetta behind their bodies",
          lines: [
          ],
        },
        {
          id: "a3_s2_c70",
          speaker: "Alice Ford",
          stageDirection: "in disparte a Nannetta",
          stageDirectionTranslation: "in disparte to Nannetta",
          lines: [
            {
              id: "a3_s2_c70_l1",
              original: "Evita il tuo periglio.",
              literal: "Avoid your danger.",
              tokens: [
                {
                  word: "Evita",
                  lemma: "evitare",
                  pos: "verb",
                  meaning: "avoid / shun (2nd sing. imperative)",
                },
                {
                  word: "tuo",
                  lemma: "tuo",
                  pos: "pronoun",
                  meaning: "your (possessive determiner)",
                },
                {
                  word: "periglio",
                  lemma: "periglio",
                  pos: "noun",
                  meaning: "danger / peril (poetic doublet of pericolo)",
                },
              ],
              grammarNote: "Alice whispers an aside to Nannetta, warning her that Ford's secret scheme to marry her to Caius is underway. 'Periglio' is the elevated poetic form of 'pericolo'.",
            },
            {
              id: "a3_s2_c70_l2",
              original: "Già il Dottor Cajo ti cerca.",
              literal: "Already Doctor Caius is looking for you.",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "Dottor",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Doctor (truncated title)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (direct object clitic)",
                },
                {
                  word: "cerca",
                  lemma: "cercare",
                  pos: "verb",
                  meaning: "seeks / searches for (3rd sing. present)",
                },
              ],
              grammarNote: "Preverbal accusative pronoun 'ti' governed by 'cerca'. Alice alerts Nannetta to slip away before Dr. Caius can locate his promised bride in the dark.",
            },
          ],
        },
        {
          id: "a3_s2_c71",
          speaker: "Nannetta",
          lines: [
            {
              id: "a3_s2_c71_l1",
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
              id: "a3_s2_c71_l2",
              original: "un nascondiglio.",
              literal: "a hiding place.",
              tokens: [
                {
                  word: "nascondiglio",
                  lemma: "nascondiglio",
                  pos: "noun",
                  meaning: "hiding place / retreat / concealment",
                },
              ],
              grammarNote: "Direct object of 'Troviamo', completing the rhyming couplet with 'periglio' (periglio / nascondiglio).",
            },
          ],
        },
        {
          id: "a3_s2_c72",
          speaker: "Nannetta",
          stageDirection: "s'avvia con Fenton nel fondo della scena, protetta da Alice e Quickly",
          stageDirectionTranslation: "she heads with Fenton to the back of the stage, shielded by Alice and Quickly",
          lines: [
          ],
        },
        {
          id: "a3_s2_c73",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a3_s2_c73_l1",
              original: "Poi tornerete lesti al mio richiamo.",
              literal: "Then you will return quickly at my call.",
              tokens: [
                {
                  word: "Poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "tornerete",
                  lemma: "tornare",
                  pos: "verb",
                  meaning: "you will return (2nd plur. future)",
                },
                {
                  word: "lesti",
                  lemma: "lesto",
                  pos: "adjective",
                  meaning: "quick / prompt / nimble (masculine plural)",
                },
                {
                  word: "richiamo",
                  lemma: "richiamo",
                  pos: "noun",
                  meaning: "call / summons",
                },
              ],
              grammarNote: "Future tense 'tornerete' modified by the predicative adjective 'lesti' functioning adverbially. Mrs. Quickly will summon the lovers back for the surprise double wedding.",
            },
          ],
        },
        {
          id: "a3_s2_c74",
          speaker: "Bardolfo",
          stageDirection: "continuando i gesti di scongiuro sul corpo di Falstaff",
          stageDirectionTranslation: "continuing the exorcising gestures over Falstaff's body",
          lines: [
            {
              id: "a3_s2_c74_l1",
              original: "Spiritelli! Folletti!",
              literal: "Little spirits! Goblins!",
              tokens: [
                {
                  word: "Spiritelli",
                  lemma: "spiritello",
                  pos: "noun",
                  meaning: "little spirits / sprites (diminutive of spirito)",
                },
                {
                  word: "Folletti",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves / imps",
                },
              ],
              grammarNote: "Vocative plural diminutives rallied by Bardolfo to begin the mock-demonic punishment of Sir John.",
            },
            {
              id: "a3_s2_c74_l2",
              original: "Farfarelli! Vampiri! Agili insetti",
              literal: "Fiends! Vampires! Nimble insects",
              tokens: [
                {
                  word: "Farfarelli",
                  lemma: "farfarello",
                  pos: "noun",
                  meaning: "demons / imps (referencing Dante's Malebranche)",
                },
                {
                  word: "Vampiri",
                  lemma: "vampiro",
                  pos: "noun",
                  meaning: "vampires",
                },
                {
                  word: "Agili",
                  lemma: "agile",
                  pos: "adjective",
                  meaning: "nimble / agile",
                },
                {
                  word: "insetti",
                  lemma: "insetto",
                  pos: "noun",
                  meaning: "insects",
                },
              ],
              grammarNote: "Boito draws on Dante's Inferno (where Farfarello is a devil in canto XXI-XXII) and Gothic lore to build a mock-frightening catalogue of nocturnal tormentors.",
            },
            {
              id: "a3_s2_c74_l3",
              original: "del palude infernale! Punzecchiatelo!",
              literal: "of the infernal swamp! Prick him!",
              tokens: [
                {
                  word: "palude",
                  lemma: "palude",
                  pos: "noun",
                  meaning: "swamp / marsh (masculine in archaic poetic usage)",
                },
                {
                  word: "infernale",
                  lemma: "infernale",
                  pos: "adjective",
                  meaning: "infernal / hellish",
                },
                {
                  word: "Punzecchiatelo",
                  lemma: "punzecchiare",
                  pos: "verb",
                  meaning: "prick him / prod him (imperative 2nd plur. punzecchiate + clitic lo)",
                },
              ],
              grammarNote: "Frequentative verb 'punzecchiare' in the imperative plural with direct object clitic 'lo' ('Punzecchiatelo!'). 'Palude' is treated as masculine ('del palude') in poetic elevated style.",
            },
            {
              id: "a3_s2_c74_l4",
              original: "Orticheggiatelo!",
              literal: "Sting him with nettles!",
              tokens: [
                {
                  word: "Orticheggiatelo",
                  lemma: "orticheggiare",
                  pos: "verb",
                  meaning: "sting him with nettles / whip him with nettles (imperative 2nd plur. orticheggiate + clitic lo)",
                },
              ],
              grammarNote: "Inventive rare denominal verb 'orticheggiare' (from ortica, stinging nettle), commanding the spirits to scour Falstaff with nettles.",
            },
            {
              id: "a3_s2_c74_l5",
              original: "Martirizzatelo",
              literal: "Torment him",
              tokens: [
                {
                  word: "Martirizzatelo",
                  lemma: "martirizzare",
                  pos: "verb",
                  meaning: "martyr him / torture him (imperative 2nd plur. martirizzate + clitic lo)",
                },
              ],
              grammarNote: "Imperative plural with attached direct object attached 'lo', completing the trio of dactylic commands ('Punzecchiatelo / Orticheggiatelo / Martirizzatelo').",
            },
            {
              id: "a3_s2_c74_l6",
              original: "coi grifi aguzzi!",
              literal: "with sharp snouts!",
              tokens: [
                {
                  word: "coi",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (articulated preposition con + i)",
                },
                {
                  word: "grifi",
                  lemma: "grifo",
                  pos: "noun",
                  meaning: "snouts / muzzles / grotesque faces",
                },
                {
                  word: "aguzzi",
                  lemma: "aguzzo",
                  pos: "adjective",
                  meaning: "sharp / pointed",
                },
              ],
              grammarNote: "Prepositional phrase describing the grotesque masks worn by the children. 'Grifo' evokes the bestial snout of a boar or demonic imp.",
            },
            {
              id: "a3_s2_c74_l7",
              original: "Accorrono velocissimi alcuni ragazzi vestiti da folletti,",
              literal: "Some boys dressed as goblins run up very swiftly,",
              tokens: [
                {
                  word: "Accorrono",
                  lemma: "accorrere",
                  pos: "verb",
                  meaning: "run up / rush up (3rd plur. present)",
                },
                {
                  word: "velocissimi",
                  lemma: "veloce",
                  pos: "adjective",
                  meaning: "very swift / extremely fast (superlative)",
                },
                {
                  word: "ragazzi",
                  lemma: "ragazzo",
                  pos: "noun",
                  meaning: "boys / lads",
                },
                {
                  word: "vestiti",
                  lemma: "vestire",
                  pos: "verb",
                  meaning: "dressed / disguised (past participle as adjective)",
                },
                {
                  word: "folletti",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves",
                },
              ],
              grammarNote: "Stage direction describing the sudden onstage invasion of Windsor's masked children. The absolute superlative 'velocissimi' underscores their frantic, darting agility.",
            },
            {
              id: "a3_s2_c74_l8",
              original: "e si scagliano su",
              literal: "and hurl themselves upon",
              tokens: [
                {
                  word: "si scagliano",
                  lemma: "scagliarsi",
                  pos: "verb",
                  meaning: "hurl themselves / pounce (3rd plur. present reflexive)",
                },
                {
                  word: "su",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on / upon",
                },
              ],
              grammarNote: "Continuation of the stage direction with the reflexive motion verb 'scagliarsi' governing the preposition 'su'.",
            },
            {
              id: "a3_s2_c74_l9",
              original: "Falstaff.",
              literal: "Falstaff.",
              tokens: [
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff (proper name)",
                },
              ],
              grammarNote: "Proper name completing the object of the preposition 'su' in the stage direction.",
            },
          ],
        },
        {
          id: "a3_s2_c75",
          speaker: "Sir John Falstaff",
          stageDirection: "a Bardolfo",
          stageDirectionTranslation: "to Bardolfo",
          lines: [
            {
              id: "a3_s2_c75_l1",
              original: "Ahimè! tu puzzi",
              literal: "Alas! you stink",
              tokens: [
                {
                  word: "Ahimè",
                  lemma: "ahimè",
                  pos: "interjection",
                  meaning: "alas! / woe is me!",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject pronoun)",
                },
                {
                  word: "puzzi",
                  lemma: "puzzare",
                  pos: "verb",
                  meaning: "you stink / reek (2nd sing. present)",
                },
              ],
              grammarNote: "Falstaff's groan turns into comic sudden recognition: in the midst of 'demonic' torment, he gets a blast of Bardolfo's notoriously foul breath.",
            },
            {
              id: "a3_s2_c75_l2",
              original: "come una puzzola.",
              literal: "like a skunk.",
              tokens: [
                {
                  word: "come",
                  lemma: "come",
                  pos: "preposition",
                  meaning: "like / as",
                },
                {
                  word: "puzzola",
                  lemma: "puzzola",
                  pos: "noun",
                  meaning: "polecat / skunk / ferret",
                },
              ],
              grammarNote: "Simile playing etymologically on 'puzzi / puzzola'. Falstaff instinctively identifies the 'demon' towering over him as his drunken henchman.",
            },
            {
              id: "a3_s2_c75_l3",
              original: "FOLLETTI E DIAVOLI",
              literal: "Goblins and devils",
              tokens: [
                {
                  word: "FOLLETTI",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "DIAVOLI",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devils / demons",
                },
              ],
              grammarNote: "Choral heading for the masked children and adults launching their kinetic assault on Sir John.",
            },
          ],
        },
        {
          id: "a3_s2_c76",
          speaker: "Sir John Falstaff",
          stageDirection: "addosso a Falstaff spingendolo e facendolo ruzzolare",
          stageDirectionTranslation: "addosso to Falstaff spingendolo e facendolo ruzzolare",
          lines: [
            {
              id: "a3_s2_c76_l1",
              original: "Ruzzola, ruzzola, ruzzola, ruzzola!",
              literal: "Roll, roll, roll, roll!",
              tokens: [
                {
                  word: "Ruzzola",
                  lemma: "ruzzolare",
                  pos: "verb",
                  meaning: "roll / tumble / roll down (2nd sing. imperative or 3rd sing. present)",
                },
              ],
              grammarNote: "Fourfold rhythmic repetition of 'ruzzolare' (to roll, tumble head over heels), mirroring the physical rolling of Falstaff's massive body back and forth.",
            },
          ],
        },
        {
          id: "a3_s2_c77",
          speaker: "Alice, Quickly & Meg",
          lines: [
            {
              id: "a3_s2_c77_l1",
              original: "Pizzica, pizzica,",
              literal: "Pinch, pinch,",
              tokens: [
                {
                  word: "Pizzica",
                  lemma: "pizzicare",
                  pos: "verb",
                  meaning: "pinch / nip / sting (2nd sing. imperative)",
                },
              ],
              grammarNote: "Opening refrain of Boito's sparkling Pizzica Chorus, adapting the fairy torment from Shakespeare's Merry Wives of Windsor into lightning-fast Italian octosyllables.",
            },
            {
              id: "a3_s2_c77_l2",
              original: "pizzica, stuzzica,",
              literal: "pinch, prod,",
              tokens: [
                {
                  word: "pizzica",
                  lemma: "pizzicare",
                  pos: "verb",
                  meaning: "pinch / nip (2nd sing. imperative)",
                },
                {
                  word: "stuzzica",
                  lemma: "stuzzicare",
                  pos: "verb",
                  meaning: "prod / tease / provoke (2nd sing. imperative)",
                },
              ],
              grammarNote: "Rhyming paired imperatives ('pizzica, stuzzica') setting up a playful, relentless staccato rhythm.",
            },
            {
              id: "a3_s2_c77_l3",
              original: "spizzica, spizzica,",
              literal: "nibble, nibble,",
              tokens: [
                {
                  word: "spizzica",
                  lemma: "spizzicare",
                  pos: "verb",
                  meaning: "nibble / pinch off bit by bit (2nd sing. imperative)",
                },
              ],
              grammarNote: "Iterative frequentative verb 'spizzicare' (derived from pizzicare), conveying miniature bites and pinpoint pinches.",
            },
            {
              id: "a3_s2_c77_l4",
              original: "pungi, spilluzzica,",
              literal: "prick, pick away,",
              tokens: [
                {
                  word: "pungi",
                  lemma: "pungere",
                  pos: "verb",
                  meaning: "prick / sting (2nd sing. imperative of pungere)",
                },
                {
                  word: "spilluzzica",
                  lemma: "spilluzzicare",
                  pos: "verb",
                  meaning: "pluck away / nibble in tiny morsels (2nd sing. imperative)",
                },
              ],
              grammarNote: "Compound rhythm with irregular imperative 'pungi' paired with 'spilluzzica' (frequentative of spilluzzicare), evoking relentless insect stings.",
            },
            {
              id: "a3_s2_c77_l5",
              original: "finch'egli abbai!",
              literal: "until he barks!",
              tokens: [
                {
                  word: "finch'",
                  lemma: "finché",
                  pos: "conjunction",
                  meaning: "until / as long as (elided conjunction)",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (3rd sing. subject pronoun)",
                },
                {
                  word: "abbai",
                  lemma: "abbaiare",
                  pos: "verb",
                  meaning: "barks / howls (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Conjunctive temporal clause with subjunctive 'abbai'. The tormentors vow to pinch Falstaff until he howls like a beaten hound.",
            },
          ],
        },
        {
          id: "a3_s2_c78",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c78_l1",
              original: "Ahi! Ahi! Ahi! Ahi!",
              literal: "Ouch! Ouch! Ouch! Ouch!",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch! / alas! (exclamation of pain)",
                },
              ],
              grammarNote: "Falstaff's four-beat comic yelps, puncturing the fairy chorus with genuine physical anguish.",
            },
            {
              id: "a3_s2_c78_l2",
              original: "FOLLETTI, DIAVOLI",
              literal: "Goblins, devils",
              tokens: [
                {
                  word: "FOLLETTI",
                  lemma: "folletto",
                  pos: "noun",
                  meaning: "goblins / elves",
                },
                {
                  word: "DIAVOLI",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devils / demons",
                },
              ],
              grammarNote: "Character heading marking the full goblin ensemble taking up noisy percussion and dances.",
            },
            {
              id: "a3_s2_c78_l3",
              original: "Scrolliam crepitacoli,",
              literal: "Let us shake rattles,",
              tokens: [
                {
                  word: "Scrolliam",
                  lemma: "scrollare",
                  pos: "verb",
                  meaning: "let us shake (1st plur. hortatory subjunctive, shortened form of scrolliamo)",
                },
                {
                  word: "crepitacoli",
                  lemma: "crepitacolo",
                  pos: "noun",
                  meaning: "rattles / clappers / noisemakers",
                },
              ],
              grammarNote: "Hortatory 1st person plural 'Scrolliam' with classical noun 'crepitacoli' (Latin crepitaculum), referring to antique wooden rattles and clappers.",
            },
            {
              id: "a3_s2_c78_l4",
              original: "scarandole e nacchere!",
              literal: "ratchets and castanets!",
              tokens: [
                {
                  word: "scarandole",
                  lemma: "scarandola",
                  pos: "noun",
                  meaning: "wooden ratchets / noisemakers (folk percussion)",
                },
                {
                  word: "nacchere",
                  lemma: "nacchera",
                  pos: "noun",
                  meaning: "castanets",
                },
              ],
              grammarNote: "Rare antique dialectal noun 'scarandole' (cog rattles/noisemakers) alongside 'nacchere' (castanets), creating an overwhelming acoustic assault.",
            },
            {
              id: "a3_s2_c78_l5",
              original: "Di schizzi e di zacchere",
              literal: "With splashes and mud-splatters",
              tokens: [
                {
                  word: "schizzi",
                  lemma: "schizzo",
                  pos: "noun",
                  meaning: "splashes / squirts",
                },
                {
                  word: "zacchere",
                  lemma: "zacchera",
                  pos: "noun",
                  meaning: "mud-splatters / mud spots / dirt",
                },
              ],
              grammarNote: "Prepositional phrase of instrument. 'Zacchera' is an evocative Tuscan term for flecks of wet mud or mire kicked up from the road.",
            },
            {
              id: "a3_s2_c78_l6",
              original: "quell'otre si macoli.",
              literal: "let that wineskin be besmirched.",
              tokens: [
                {
                  word: "quell'",
                  lemma: "quello",
                  pos: "particle",
                  meaning: "that (demonstrative determiner)",
                },
                {
                  word: "otre",
                  lemma: "otre",
                  pos: "noun",
                  meaning: "wineskin / leather flask (metaphor for a bloated drunkard)",
                },
                {
                  word: "si macoli",
                  lemma: "macolarsi",
                  pos: "verb",
                  meaning: "let be stained / bruised / dirtied (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Passive/reflexive subjunctive 'si macoli' (from macolare/maculare, to stain or bruise). Falstaff's belly is derisively termed an 'otre' (wineskin).",
            },
            {
              id: "a3_s2_c78_l7",
              original: "Meniam scorribandole,",
              literal: "Let us conduct romping skirmishes,",
              tokens: [
                {
                  word: "Meniam",
                  lemma: "menare",
                  pos: "verb",
                  meaning: "let us lead / conduct / strike (1st plur. hortatory subjunctive)",
                },
                {
                  word: "scorribandole",
                  lemma: "scorribandola",
                  pos: "noun",
                  meaning: "frolicking raids / playful skirmishes (diminutive of scorribanda)",
                },
              ],
              grammarNote: "Verb 'menare' governing the playful diminutive 'scorribandole' (from scorribanda, a fast cavalry raid or incursion), applied to children running circles.",
            },
            {
              id: "a3_s2_c78_l8",
              original: "danziamo la tresca,",
              literal: "let us dance the brawl,",
              tokens: [
                {
                  word: "danziamo",
                  lemma: "danzare",
                  pos: "verb",
                  meaning: "let us dance (1st plur. hortatory subjunctive / imperative)",
                },
                {
                  word: "tresca",
                  lemma: "tresca",
                  pos: "noun",
                  meaning: "wild rustic dance / tumult / brawl",
                },
              ],
              grammarNote: "'Tresca' denotes a medieval frenzied peasant round-dance, characterized by energetic leaping and foot-stamping.",
            },
            {
              id: "a3_s2_c78_l9",
              original: "treschiam le farandole",
              literal: "let us dance the farandoles",
              tokens: [
                {
                  word: "treschiam",
                  lemma: "trescare",
                  pos: "verb",
                  meaning: "let us dance wildly / romp (1st plur. hortatory subjunctive, shortened form of treschiamo)",
                },
                {
                  word: "farandole",
                  lemma: "farandola",
                  pos: "noun",
                  meaning: "farandoles (open-chain community circle dances)",
                },
              ],
              grammarNote: "Cognate accusative with the verb 'trescare' governing 'farandole' (the lively Provençal chain dance), illustrating the whirling ring of tormentors.",
            },
            {
              id: "a3_s2_c78_l10",
              original: "sull'ampia ventresca.",
              literal: "upon his vast paunch.",
              tokens: [
                {
                  word: "sull'",
                  lemma: "su",
                  pos: "preposition",
                  meaning: "on the / upon the (articulated preposition su + la)",
                },
                {
                  word: "ampia",
                  lemma: "ampio",
                  pos: "adjective",
                  meaning: "vast / ample / wide",
                },
                {
                  word: "ventresca",
                  lemma: "ventresca",
                  pos: "noun",
                  meaning: "pork belly / paunch / flabby belly",
                },
              ],
              grammarNote: "Prepositional phrase setting the dance floor directly atop Falstaff's stomach. 'Ventresca' (cured pork belly) is a brutally comic butchers' term.",
            },
            {
              id: "a3_s2_c78_l11",
              original: "Zanzare ed assilli,",
              literal: "Mosquitoes and gadflies,",
              tokens: [
                {
                  word: "Zanzare",
                  lemma: "zanzara",
                  pos: "noun",
                  meaning: "mosquitoes",
                },
                {
                  word: "assilli",
                  lemma: "assillo",
                  pos: "noun",
                  meaning: "gadflies / horseflies / stinging pests",
                },
              ],
              grammarNote: "Vocative invocation of pestilential insects. 'Assillo' is the bloodthirsty botfly or gadfly, used in Italian for relentless torment.",
            },
            {
              id: "a3_s2_c78_l12",
              original: "volate alla lizza",
              literal: "fly to the lists",
              tokens: [
                {
                  word: "volate",
                  lemma: "volare",
                  pos: "verb",
                  meaning: "fly (2nd plur. imperative)",
                },
                {
                  word: "alla",
                  lemma: "a",
                  pos: "preposition",
                  meaning: "to the (articulated preposition a + la)",
                },
                {
                  word: "lizza",
                  lemma: "lizza",
                  pos: "noun",
                  meaning: "jousting lists / arena / tilting field",
                },
              ],
              grammarNote: "Chivalric tournament terminology: 'scendere alla lizza' means entering the jousting arena, mockingly elevating the pinch-mob to knightly combat.",
            },
            {
              id: "a3_s2_c78_l13",
              original: "coi dardi e gli spilli!",
              literal: "with darts and pins!",
              tokens: [
                {
                  word: "coi",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with the (articulated preposition con + i)",
                },
                {
                  word: "dardi",
                  lemma: "dardo",
                  pos: "noun",
                  meaning: "darts / stings / arrows",
                },
                {
                  word: "spilli",
                  lemma: "spillo",
                  pos: "noun",
                  meaning: "pins / needles",
                },
              ],
              grammarNote: "Prepositional phrase identifying the weapons: miniature stingers ('dardi') and needles ('spilli').",
            },
            {
              id: "a3_s2_c78_l14",
              original: "Ch'ei crepi di stizza!",
              literal: "May he burst with rage!",
              tokens: [
                {
                  word: "Ch'",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that / may (subjunctive wish conjunction che)",
                },
                {
                  word: "ei",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (poetic/archaic 3rd sing. pronoun)",
                },
                {
                  word: "crepi",
                  lemma: "crepare",
                  pos: "verb",
                  meaning: "burst / die (3rd sing. present subjunctive)",
                },
                {
                  word: "stizza",
                  lemma: "stizza",
                  pos: "noun",
                  meaning: "rage / spite / exasperation",
                },
              ],
              grammarNote: "Subjunctive clause expressing a wish ('Ch'ei crepi', may he burst/croak). 'Crepare di stizza' is a visceral colloquial idiom for choking in helpless fury.",
            },
          ],
        },
        {
          id: "a3_s2_c79",
          speaker: "Alice, Meg & Quickly",
          lines: [
            {
              id: "a3_s2_c79_l1",
              original: "Pizzica, pizzica,",
              literal: "Pinch, pinch,",
              tokens: [
                {
                  word: "Pizzica",
                  lemma: "pizzicare",
                  pos: "verb",
                  meaning: "pinch / nip / sting (2nd sing. imperative)",
                },
              ],
              grammarNote: "Opening refrain of Boito's sparkling Pizzica Chorus, adapting the fairy torment from Shakespeare's Merry Wives of Windsor into lightning-fast Italian octosyllables.",
            },
            {
              id: "a3_s2_c79_l2",
              original: "pizzica, stuzzica,",
              literal: "pinch, prod,",
              tokens: [
                {
                  word: "pizzica",
                  lemma: "pizzicare",
                  pos: "verb",
                  meaning: "pinch / nip (2nd sing. imperative)",
                },
                {
                  word: "stuzzica",
                  lemma: "stuzzicare",
                  pos: "verb",
                  meaning: "prod / tease / provoke (2nd sing. imperative)",
                },
              ],
              grammarNote: "Rhyming paired imperatives ('pizzica, stuzzica') setting up a playful, relentless staccato rhythm.",
            },
            {
              id: "a3_s2_c79_l3",
              original: "spizzica, spizzica,",
              literal: "nibble, nibble,",
              tokens: [
                {
                  word: "spizzica",
                  lemma: "spizzicare",
                  pos: "verb",
                  meaning: "nibble / pinch off bit by bit (2nd sing. imperative)",
                },
              ],
              grammarNote: "Iterative frequentative verb 'spizzicare' (derived from pizzicare), conveying miniature bites and pinpoint pinches.",
            },
            {
              id: "a3_s2_c79_l4",
              original: "pungi, spilluzzica",
              literal: "sting, pick away",
              tokens: [
                {
                  word: "pungi",
                  lemma: "pungere",
                  pos: "verb",
                  meaning: "prick / sting (2nd sing. imperative)",
                },
                {
                  word: "spilluzzica",
                  lemma: "spilluzzicare",
                  pos: "verb",
                  meaning: "pluck away / nibble in tiny morsels (2nd sing. imperative)",
                },
              ],
              grammarNote: "Rhythmic return of the female refrain, sung in hushed staccato over the swirling orchestral figures.",
            },
            {
              id: "a3_s2_c79_l5",
              original: "finch'egli abbai!",
              literal: "until he barks!",
              tokens: [
                {
                  word: "finch'",
                  lemma: "finché",
                  pos: "conjunction",
                  meaning: "until / as long as (elided conjunction)",
                },
                {
                  word: "egli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "he (3rd sing. subject pronoun)",
                },
                {
                  word: "abbai",
                  lemma: "abbaiare",
                  pos: "verb",
                  meaning: "barks / howls (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Conjunctive temporal clause with subjunctive 'abbai'. The tormentors vow to pinch Falstaff until he howls like a beaten hound.",
            },
          ],
        },
        {
          id: "a3_s2_c80",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c80_l1",
              original: "Ahi! Ahi! Ahi! Ahi!",
              literal: "Ouch! Ouch! Ouch! Ouch!",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch! / alas! (exclamation of pain)",
                },
              ],
              grammarNote: "Falstaff's four-beat comic yelps, puncturing the fairy chorus with genuine physical anguish.",
            },
            {
              id: "a3_s2_c80_l2",
              original: "ALICE, MEG, QUICKLY E FATE",
              literal: "Alice, Meg, Quickly and Fairies",
              tokens: [
                {
                  word: "ALICE",
                  lemma: "Alice",
                  pos: "noun",
                  meaning: "Alice (proper name)",
                },
                {
                  word: "MEG",
                  lemma: "Meg",
                  pos: "noun",
                  meaning: "Meg (proper name)",
                },
                {
                  word: "QUICKLY",
                  lemma: "Quickly",
                  pos: "noun",
                  meaning: "Quickly (proper name)",
                },
                {
                  word: "FATE",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
              ],
              grammarNote: "Character heading indicating the female ensemble intensifying the rhythmic incantation.",
            },
            {
              id: "a3_s2_c80_l3",
              original: "Cozzalo, aizzalo",
              literal: "Butt him, egg him on",
              tokens: [
                {
                  word: "Cozzalo",
                  lemma: "cozzare",
                  pos: "verb",
                  meaning: "butt him / ram him (imperative cozza + clitic lo)",
                },
                {
                  word: "aizzalo",
                  lemma: "aizzare",
                  pos: "verb",
                  meaning: "egg him on / incite him / provoke him (imperative aizza + clitic lo)",
                },
              ],
              grammarNote: "Dactylic sdrucciolo imperatives with attached direct object attached 'lo'. 'Cozzare' refers to head-butting like a ram or horned buck.",
            },
            {
              id: "a3_s2_c80_l4",
              original: "dai piè al cocuzzolo!",
              literal: "from his feet to the crown of his head!",
              tokens: [
                {
                  word: "dai",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "from the (articulated preposition da + i)",
                },
                {
                  word: "piè",
                  lemma: "piede",
                  pos: "noun",
                  meaning: "feet (poetic shortened form of piedi)",
                },
                {
                  word: "cocuzzolo",
                  lemma: "cocuzzolo",
                  pos: "noun",
                  meaning: "summit / top / crown of the head",
                },
              ],
              grammarNote: "Tuscan idiom denoting top to bottom ('dai piedi alla testa'). 'Cocuzzolo' humorously refers to the very peak of his antlered head.",
            },
            {
              id: "a3_s2_c80_l5",
              original: "Strozzalo, strizzalo!",
              literal: "Choke him, squeeze him!",
              tokens: [
                {
                  word: "Strozzalo",
                  lemma: "strozzare",
                  pos: "verb",
                  meaning: "choke him / throttle him (imperative strozza + clitic lo)",
                },
                {
                  word: "strizzalo",
                  lemma: "strizzare",
                  pos: "verb",
                  meaning: "squeeze him / wring him out (imperative strizza + clitic lo)",
                },
              ],
              grammarNote: "Vigorous alliterative rhyming imperatives with attached 'lo', mimicking the choking and wringing of laundry.",
            },
            {
              id: "a3_s2_c80_l6",
              original: "Gli svampi l'uzzolo!",
              literal: "May his fancy vanish in smoke!",
              tokens: [
                {
                  word: "Gli",
                  lemma: "gli",
                  pos: "pronoun",
                  meaning: "in him / to him (dative pronoun)",
                },
                {
                  word: "svampi",
                  lemma: "svampare",
                  pos: "verb",
                  meaning: "vanish in smoke / evaporate / burn out (3rd sing. present subjunctive)",
                },
                {
                  word: "uzzolo",
                  lemma: "uzzolo",
                  pos: "noun",
                  meaning: "caprice / itch / lecherous whim",
                },
              ],
              grammarNote: "Subjunctive expression with dative clitic 'gli'. 'Uzzolo' is a colorful vernacular term for an amorous whim or persistent itch, which must be smoked out.",
            },
            {
              id: "a3_s2_c80_l7",
              original: "Pizzica, pizzica, l'unghia rintuzzola!",
              literal: "Pinch, pinch, blunt the fingernail!",
              tokens: [
                {
                  word: "Pizzica",
                  lemma: "pizzicare",
                  pos: "verb",
                  meaning: "pinch / nip (2nd sing. imperative)",
                },
                {
                  word: "unghia",
                  lemma: "unghia",
                  pos: "noun",
                  meaning: "fingernail / claw",
                },
                {
                  word: "rintuzzola",
                  lemma: "rintuzzolare",
                  pos: "verb",
                  meaning: "blunt / turn back / wear down (2nd sing. imperative)",
                },
              ],
              grammarNote: "Imperative 'rintuzzola' (frequentative of rintuzzare, to blunt or turn the edge). The tormentors are urged to pinch so violently that their nails turn back on his tough hide.",
            },
            {
              id: "a3_s2_c80_l8",
              original: "Ruzzola, ruzzola, ruzzola, ruzzola!",
              literal: "Roll, roll, roll, roll!",
              tokens: [
                {
                  word: "Ruzzola",
                  lemma: "ruzzolare",
                  pos: "verb",
                  meaning: "roll / tumble / roll down (2nd sing. imperative or 3rd sing. present)",
                },
              ],
              grammarNote: "Fourfold rhythmic repetition of 'ruzzolare' (to roll, tumble head over heels), mirroring the physical rolling of Falstaff's massive body back and forth.",
            },
          ],
        },
        {
          id: "a3_s2_c81",
          speaker: "Sir John Falstaff",
          stageDirection: "fanno ruzzolare Falstaff verso il proscenio",
          stageDirectionTranslation: "they roll Falstaff toward the front of the stage",
          lines: [
            {
              id: "a3_s2_c81_l1",
              original: "DR. CAJUS E FORD",
              literal: "Dr. Caius and Ford",
              tokens: [
                {
                  word: "DR.",
                  lemma: "dottore",
                  pos: "noun",
                  meaning: "Doctor (title abbreviation)",
                },
                {
                  word: "CAJUS",
                  lemma: "Cajus",
                  pos: "noun",
                  meaning: "Caius (proper name)",
                },
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford (proper name)",
                },
              ],
              grammarNote: "Character heading for Dr. Caius and Master Ford stepping up to lead the rhythmic masculine litany of insults.",
            },
            {
              id: "a3_s2_c81_l2",
              original: "Cialtron!",
              literal: "Scoundrel!",
              tokens: [
                {
                  word: "Cialtron",
                  lemma: "cialtrone",
                  pos: "noun",
                  meaning: "scoundrel / rascal / shameless buffoon (shortened form of cialtrone)",
                },
              ],
              grammarNote: "Truncated insult ('Cialtron' for 'cialtrone'). Boito begins a dazzling chain of masculine augmentative nouns in -on hurled like hammer blows.",
            },
          ],
        },
        {
          id: "a3_s2_c82",
          speaker: "Bardolfo & Pistola",
          lines: [
            {
              id: "a3_s2_c82_l1",
              original: "Poltron!",
              literal: "Coward!",
              tokens: [
                {
                  word: "Poltron",
                  lemma: "poltrone",
                  pos: "noun",
                  meaning: "coward / sluggard / lazy knave (shortened form of poltrone)",
                },
              ],
              grammarNote: "Insult branding Falstaff cowardly and indolent ('Poltron' for 'poltrone'), rhyming with 'Cialtron'.",
            },
            {
              id: "a3_s2_c82_l2",
              original: "Ghiotton!",
              literal: "Glutton!",
              tokens: [
                {
                  word: "Ghiotton",
                  lemma: "ghiottone",
                  pos: "noun",
                  meaning: "glutton / gourmand (shortened form of ghiottone)",
                },
              ],
              grammarNote: "Insult targeting Sir John's bottomless gluttony ('Ghiotton' for 'ghiottone').",
            },
            {
              id: "a3_s2_c82_l3",
              original: "TUTTI GLI UOMINI",
              literal: "All the men",
              tokens: [
                {
                  word: "TUTTI",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all (masculine plural)",
                },
                {
                  word: "UOMINI",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "men",
                },
              ],
              grammarNote: "Choral heading marking the full male chorus joining the barrage of rhythmic insults.",
            },
            {
              id: "a3_s2_c82_l4",
              original: "Pancion!",
              literal: "Big belly!",
              tokens: [
                {
                  word: "Pancion",
                  lemma: "pancione",
                  pos: "noun",
                  meaning: "big belly / potbelly (augmentative of pancia, shortened form of pancione)",
                },
              ],
              grammarNote: "Augmentative of 'pancia' ('Pancion' for 'pancione'), directly assailing his gigantic belly.",
            },
            {
              id: "a3_s2_c82_l5",
              original: "Beon!",
              literal: "Drunkard!",
              tokens: [
                {
                  word: "Beon",
                  lemma: "beone",
                  pos: "noun",
                  meaning: "drunkard / heavy drinker (shortened form of beone)",
                },
              ],
              grammarNote: "Agent noun from 'bere' ('Beon' for 'beone'), mocking his notorious appetite for wine and sack.",
            },
            {
              id: "a3_s2_c82_l6",
              original: "Briccon!",
              literal: "Rogue!",
              tokens: [
                {
                  word: "Briccon",
                  lemma: "briccone",
                  pos: "noun",
                  meaning: "rogue / knave / scamp (shortened form of briccone)",
                },
              ],
              grammarNote: "Classic Italian insult ('Briccon' for 'briccone'), completing the explosive succession of -on rhymes.",
            },
            {
              id: "a3_s2_c82_l7",
              original: "In ginocchion!",
              literal: "On your knees!",
              tokens: [
                {
                  word: "In ginocchion",
                  lemma: "in ginocchione",
                  pos: "idiom",
                  meaning: "on bended knees / kneeling (shortened form of in ginocchioni)",
                },
              ],
              grammarNote: "Adverbial posture idiom ('in ginocchion'), ordering the humiliated knight to prostrate himself like a penitent.",
            },
          ],
        },
        {
          id: "a3_s2_c83",
          speaker: "Bardolfo & Pistola",
          stageDirection: "lo alzano in quattro e lo obbligano a star ginocchioni",
          stageDirectionTranslation: "the four of them lift him up and force him onto his knees",
          lines: [
          ],
        },
        {
          id: "a3_s2_c84",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c84_l1",
              original: "Pancia ritronfia!",
              literal: "Swollen paunch!",
              tokens: [
                {
                  word: "Pancia",
                  lemma: "pancia",
                  pos: "noun",
                  meaning: "belly / paunch",
                },
                {
                  word: "ritronfia",
                  lemma: "ritronfio",
                  pos: "adjective",
                  meaning: "puffed up / bloated / arrogant",
                },
                {
                  word: "pancia ritronfia",
                  lemma: "pancia ritronfia",
                  pos: "idiom",
                  meaning: "swollen paunch (contemptuous epithet)",
                },
              ],
              grammarNote: "Ford's insult pairs 'pancia' with 'ritronfia' (intensive of tronfio, bloated/puffed with self-importance).",
            },
          ],
        },
        {
          id: "a3_s2_c85",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c85_l1",
              original: "Guancia rigonfia!",
              literal: "Puffed cheek!",
              tokens: [
                {
                  word: "Guancia",
                  lemma: "guancia",
                  pos: "noun",
                  meaning: "cheek",
                },
                {
                  word: "rigonfia",
                  lemma: "rigonfio",
                  pos: "adjective",
                  meaning: "swollen / puffed out / distended",
                },
              ],
              grammarNote: "Alice's matching rhyming retort ('ritronfia / rigonfia'), mocking Falstaff's bloated, pendulous cheeks.",
            },
          ],
        },
        {
          id: "a3_s2_c86",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a3_s2_c86_l1",
              original: "Sconquassaletti!",
              literal: "Bed-smasher!",
              tokens: [
                {
                  word: "Sconquassaletti",
                  lemma: "sconquassaletti",
                  pos: "noun",
                  meaning: "bed-smasher / furniture-wrecker (compound of sconquassare + letti)",
                },
              ],
              grammarNote: "Inventive Italian compound noun (imperative verb stem 'sconquassa' + plural noun 'letti'), mocking the destructive impact of his weight in bed.",
            },
          ],
        },
        {
          id: "a3_s2_c87",
          speaker: "Mrs. Quickly",
          lines: [
            {
              id: "a3_s2_c87_l1",
              original: "Spaccafarsetti!",
              literal: "Doublet-burster!",
              tokens: [
                {
                  word: "Spaccafarsetti",
                  lemma: "spaccafarsetti",
                  pos: "noun",
                  meaning: "doublet-burster / coat-splitter (compound of spaccare + farsetti)",
                },
              ],
              grammarNote: "Mrs. Quickly's compound noun ('spaccare' + 'farsetti'), deriding the corpulence that splits doublets at the seams.",
            },
          ],
        },
        {
          id: "a3_s2_c88",
          speaker: "Pistola",
          lines: [
            {
              id: "a3_s2_c88_l1",
              original: "Vuotabarili!",
              literal: "Barrel-emptier!",
              tokens: [
                {
                  word: "Vuotabarili",
                  lemma: "vuotabarili",
                  pos: "noun",
                  meaning: "barrel-emptier / cask-drainer (compound of vuotare + barili)",
                },
              ],
              grammarNote: "Pistola's compound noun ('vuotare' + 'barili'), scorning Falstaff's bottomless capacity to drain wine barrels.",
            },
          ],
        },
        {
          id: "a3_s2_c89",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a3_s2_c89_l1",
              original: "Sfiancagiumenti!",
              literal: "Mare-breaker!",
              tokens: [
                {
                  word: "Sfiancagiumenti",
                  lemma: "sfiancagiumenti",
                  pos: "noun",
                  meaning: "mare-breaker / horse-collapser (compound of sfiancare + giumenti)",
                },
              ],
              grammarNote: "Dr. Caius contributes a compound noun ('sfiancare', to exhaust/break the flanks + 'giumenti', packhorses/mares), evoking the poor horses crushed beneath Sir John.",
            },
          ],
        },
        {
          id: "a3_s2_c90",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c90_l1",
              original: "Triplice mento!",
              literal: "Triple chin!",
              tokens: [
                {
                  word: "Triplice",
                  lemma: "triplice",
                  pos: "adjective",
                  meaning: "triple / threefold",
                },
                {
                  word: "mento",
                  lemma: "mento",
                  pos: "noun",
                  meaning: "chin",
                },
              ],
              grammarNote: "Ford's anatomical jab highlighting Falstaff's folds of flesh, rhyming in -ento with the surrounding lines.",
            },
          ],
        },
        {
          id: "a3_s2_c91",
          speaker: "Bardolfo & Pistola",
          lines: [
            {
              id: "a3_s2_c91_l1",
              original: "Di' che ti penti!",
              literal: "Say that you repent!",
              tokens: [
                {
                  word: "Di'",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "say / tell (2nd sing. imperative, shortened form of dici)",
                },
                {
                  word: "che",
                  lemma: "che",
                  pos: "conjunction",
                  meaning: "that",
                },
                {
                  word: "ti penti",
                  lemma: "pentirsi",
                  pos: "verb",
                  meaning: "you repent (2nd sing. present reflexive)",
                },
              ],
              grammarNote: "The chorus demands a formal confession with imperative 'Di'' and subordinate reflexive clause 'che ti penti'.",
            },
          ],
        },
        {
          id: "a3_s2_c92",
          speaker: "Bardolfo & Pistola",
          stageDirection: "Bardolfo prende il bastone di Quickly e dà una bastonata a Falstaff",
          stageDirectionTranslation: "Bardolfo takes Quickly's cane and gives a blow to Falstaff",
          lines: [
          ],
        },
        {
          id: "a3_s2_c93",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c93_l1",
              original: "Ahi! Ahi! mi pento!",
              literal: "Ahi! Ahi! I repent!",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch! / alas!",
                },
                {
                  word: "mi pento",
                  lemma: "pentirsi",
                  pos: "verb",
                  meaning: "I repent (1st sing. present reflexive)",
                },
              ],
              grammarNote: "Falstaff eagerly repeats 'mi pento' between yelps of pain, desperate to stop the pinching.",
            },
            {
              id: "a3_s2_c93_l2",
              original: "TUTTI GLI UOMINI",
              literal: "All the men",
              tokens: [
                {
                  word: "TUTTI",
                  lemma: "tutto",
                  pos: "adjective",
                  meaning: "all (masculine plural)",
                },
                {
                  word: "UOMINI",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "men",
                },
              ],
              grammarNote: "Choral heading marking the full male chorus joining the barrage of rhythmic insults.",
            },
            {
              id: "a3_s2_c93_l3",
              original: "Uom frodolento!",
              literal: "Fraudulent man!",
              tokens: [
                {
                  word: "Uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (poetic shortened form of uomo)",
                },
                {
                  word: "frodolento",
                  lemma: "frodolento",
                  pos: "adjective",
                  meaning: "fraudulent / deceitful (archaic variant of fraudolento)",
                },
              ],
              grammarNote: "Moral denunciation using the archaic Tuscan form 'frodolento' to fit the strict rhyme scheme in -ento.",
            },
          ],
        },
        {
          id: "a3_s2_c94",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c94_l1",
              original: "Ahi! Ahi! mi pento!",
              literal: "Ahi! Ahi! I repent!",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch! / alas!",
                },
                {
                  word: "mi pento",
                  lemma: "pentirsi",
                  pos: "verb",
                  meaning: "I repent (1st sing. present reflexive)",
                },
              ],
              grammarNote: "Falstaff eagerly repeats 'mi pento' between yelps of pain, desperate to stop the pinching.",
            },
            {
              id: "a3_s2_c94_l2",
              original: "GLI UOMINI",
              literal: "The men",
              tokens: [
                {
                  word: "GLI",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine plural article)",
                },
                {
                  word: "UOMINI",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "men",
                },
              ],
              grammarNote: "Libretto character heading marking the male chorus continuing their rhythmic catechism.",
            },
            {
              id: "a3_s2_c94_l3",
              original: "Uom turbolento!",
              literal: "Turbulent man!",
              tokens: [
                {
                  word: "Uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (poetic shortened form of uomo)",
                },
                {
                  word: "turbolento",
                  lemma: "turbolento",
                  pos: "adjective",
                  meaning: "turbulent / riotous / unruly",
                },
              ],
              grammarNote: "Parallel noun phrase castigating Falstaff as a riotous disturber of public and domestic tranquility.",
            },
          ],
        },
        {
          id: "a3_s2_c95",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c95_l1",
              original: "Ahi! Ahi! mi pento!",
              literal: "Ahi! Ahi! I repent!",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ouch! / alas!",
                },
                {
                  word: "mi pento",
                  lemma: "pentirsi",
                  pos: "verb",
                  meaning: "I repent (1st sing. present reflexive)",
                },
              ],
              grammarNote: "Falstaff eagerly repeats 'mi pento' between yelps of pain, desperate to stop the pinching.",
            },
            {
              id: "a3_s2_c95_l2",
              original: "GLI UOMINI",
              literal: "The men",
              tokens: [
                {
                  word: "GLI",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (masculine plural article)",
                },
                {
                  word: "UOMINI",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "men",
                },
              ],
              grammarNote: "Libretto character heading marking the male chorus continuing their rhythmic catechism.",
            },
            {
              id: "a3_s2_c95_l3",
              original: "Capron!",
              literal: "Old goat!",
              tokens: [
                {
                  word: "Capron",
                  lemma: "caprone",
                  pos: "noun",
                  meaning: "he-goat / billy-goat / lustful old goat (shortened form of caprone)",
                },
              ],
              grammarNote: "Insult mocking both his antlered costume and his lascivious lechery ('Capron' for 'caprone', the quintessential symbol of lust).",
            },
            {
              id: "a3_s2_c95_l4",
              original: "Scroccon!",
              literal: "Sponger!",
              tokens: [
                {
                  word: "Scroccon",
                  lemma: "scroccone",
                  pos: "noun",
                  meaning: "freeloader / moocher / sponger (shortened form of scroccone)",
                },
              ],
              grammarNote: "Noun derived from 'scroccare' ('Scroccon' for 'scroccone'), stigmatizing his habit of living at others' expense.",
            },
            {
              id: "a3_s2_c95_l5",
              original: "Spaccon!",
              literal: "Braggart!",
              tokens: [
                {
                  word: "Spaccon",
                  lemma: "spaccone",
                  pos: "noun",
                  meaning: "braggart / blusterer / swaggerer (shortened form of spaccone)",
                },
              ],
              grammarNote: "Insult derived from 'spaccare' ('Spaccon' for 'spaccone'), targeting his bluster and tall tales.",
            },
          ],
        },
        {
          id: "a3_s2_c96",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c96_l1",
              original: "Perdon!",
              literal: "Pardon!",
              tokens: [
                {
                  word: "Perdon",
                  lemma: "perdono",
                  pos: "noun",
                  meaning: "pardon / forgiveness (poetic shortened form of perdono)",
                },
              ],
              grammarNote: "Falstaff's breathless one-word cry for mercy, cleverly rhyming with the barrage of -on insults ('Perdon' for 'perdono').",
            },
          ],
        },
        {
          id: "a3_s2_c97",
          speaker: "Bardolfo",
          stageDirection: "co' la faccia vicinissima alla faccia di Falstaff",
          stageDirectionTranslation: "with her face very close to Falstaff's face",
          lines: [
            {
              id: "a3_s2_c97_l1",
              original: "Riforma la tua vita!",
              literal: "Reform your life!",
              tokens: [
                {
                  word: "Riforma",
                  lemma: "riformare",
                  pos: "verb",
                  meaning: "reform / mend (2nd sing. imperative)",
                },
                {
                  word: "tua",
                  lemma: "tuo",
                  pos: "pronoun",
                  meaning: "your (possessive determiner)",
                },
                {
                  word: "vita",
                  lemma: "vita",
                  pos: "noun",
                  meaning: "life",
                },
              ],
              grammarNote: "Bardolfo sanctimoniously preaches moral reform to his master, adopting the posture of a holy inquisitor.",
            },
          ],
        },
        {
          id: "a3_s2_c98",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c98_l1",
              original: "Tu puti d'acquavita.",
              literal: "You stink of brandy.",
              tokens: [
                {
                  word: "Tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject pronoun)",
                },
                {
                  word: "puti",
                  lemma: "putire",
                  pos: "verb",
                  meaning: "you stink / reek (2nd sing. present of literary putire)",
                },
                {
                  word: "acquavita",
                  lemma: "acquavite",
                  pos: "noun",
                  meaning: "brandy / spirits / eau-de-vie (variant of acquavite)",
                },
              ],
              grammarNote: "Falstaff unmasks Bardolfo by his breath alone. The verb 'putire' (to stink) governs the preposition 'di' ('d'acquavita'), rhyming hilariously with 'vita'.",
            },
            {
              id: "a3_s2_c98_l2",
              original: "LE DONNE",
              literal: "The women",
              tokens: [
                {
                  word: "LE",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural article)",
                },
                {
                  word: "DONNE",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "Choral heading for the women taking up the mock-liturgical litany over Falstaff.",
            },
            {
              id: "a3_s2_c98_l3",
              original: "Domine fallo casto!",
              literal: "Lord make him chaste!",
              tokens: [
                {
                  word: "Domine",
                  lemma: "domine",
                  pos: "noun",
                  meaning: "Lord (Latin vocative of Dominus)",
                },
                {
                  word: "fallo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "make him (imperative fa + direct object clitic lo with syntactic doubling)",
                },
                {
                  word: "casto",
                  lemma: "casto",
                  pos: "adjective",
                  meaning: "chaste / pure",
                },
              ],
              grammarNote: "Mock-Latin ecclesiastical prayer: Latin vocative 'Domine' combined with Italian causative imperative 'fallo' (fa + lo, with raddoppiamento sintattico).",
            },
          ],
        },
        {
          id: "a3_s2_c99",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c99_l1",
              original: "Ma salvagli l'addomine.",
              literal: "But save his abdomen.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "salvagli",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save for him (imperative salva + indirect object clitic gli)",
                },
                {
                  word: "addomine",
                  lemma: "addome",
                  pos: "noun",
                  meaning: "abdomen / belly (comic mock-Latinate form rhyming with Domine)",
                },
              ],
              grammarNote: "Boito's celebrated comedic invention: creating a pseudo-Latinized noun 'addomine' (from addome, abdomen/belly) to rhyme with liturgical 'Domine'.",
            },
            {
              id: "a3_s2_c99_l2",
              original: "LE DONNE",
              literal: "The women",
              tokens: [
                {
                  word: "LE",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural article)",
                },
                {
                  word: "DONNE",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "Choral heading for the women taking up the mock-liturgical litany over Falstaff.",
            },
            {
              id: "a3_s2_c99_l3",
              original: "Domine fallo guasto!",
              literal: "Lord make him ruined!",
              tokens: [
                {
                  word: "Domine",
                  lemma: "domine",
                  pos: "noun",
                  meaning: "Lord (Latin vocative of Dominus)",
                },
                {
                  word: "fallo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "make him (imperative fa + clitic lo)",
                },
                {
                  word: "guasto",
                  lemma: "guasto",
                  pos: "adjective",
                  meaning: "ruined / spoiled / broken",
                },
              ],
              grammarNote: "Continuation of the mock litany with causative 'fallo guasto' (make him ruined/wretched), rhyming with 'casto'.",
            },
          ],
        },
        {
          id: "a3_s2_c100",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c100_l1",
              original: "Ma salvagli l'addomine.",
              literal: "But save his abdomen.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "salvagli",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save for him (imperative salva + indirect object clitic gli)",
                },
                {
                  word: "addomine",
                  lemma: "addome",
                  pos: "noun",
                  meaning: "abdomen / belly (comic mock-Latinate form rhyming with Domine)",
                },
              ],
              grammarNote: "Boito's celebrated comedic invention: creating a pseudo-Latinized noun 'addomine' (from addome, abdomen/belly) to rhyme with liturgical 'Domine'.",
            },
            {
              id: "a3_s2_c100_l2",
              original: "LE DONNE",
              literal: "The women",
              tokens: [
                {
                  word: "LE",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural article)",
                },
                {
                  word: "DONNE",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "Choral heading for the women taking up the mock-liturgical litany over Falstaff.",
            },
            {
              id: "a3_s2_c100_l3",
              original: "Fallo punito domine!",
              literal: "Make him punished, Lord!",
              tokens: [
                {
                  word: "Fallo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "make him (imperative fa + clitic lo)",
                },
                {
                  word: "punito",
                  lemma: "punire",
                  pos: "adjective",
                  meaning: "punished (past participle used as adjective)",
                },
                {
                  word: "domine",
                  lemma: "domine",
                  pos: "noun",
                  meaning: "Lord (Latin vocative)",
                },
              ],
              grammarNote: "Inverted litany with 'domine' at the cadence, praying for righteous punishment upon the sinner.",
            },
          ],
        },
        {
          id: "a3_s2_c101",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c101_l1",
              original: "Ma salvagli l'addomine.",
              literal: "But save his abdomen.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "salvagli",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save for him (imperative salva + indirect object clitic gli)",
                },
                {
                  word: "addomine",
                  lemma: "addome",
                  pos: "noun",
                  meaning: "abdomen / belly (comic mock-Latinate form rhyming with Domine)",
                },
              ],
              grammarNote: "Boito's celebrated comedic invention: creating a pseudo-Latinized noun 'addomine' (from addome, abdomen/belly) to rhyme with liturgical 'Domine'.",
            },
            {
              id: "a3_s2_c101_l2",
              original: "LE DONNE",
              literal: "The women",
              tokens: [
                {
                  word: "LE",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural article)",
                },
                {
                  word: "DONNE",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "Choral heading for the women taking up the mock-liturgical litany over Falstaff.",
            },
            {
              id: "a3_s2_c101_l3",
              original: "Fallo pentito domine!",
              literal: "Make him repentant, Lord!",
              tokens: [
                {
                  word: "Fallo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "make him (imperative fa + clitic lo)",
                },
                {
                  word: "pentito",
                  lemma: "pentito",
                  pos: "adjective",
                  meaning: "repentant / contrite",
                },
                {
                  word: "domine",
                  lemma: "domine",
                  pos: "noun",
                  meaning: "Lord (Latin vocative)",
                },
              ],
              grammarNote: "Couplet completion with 'punito / pentito', pleading for Sir John's complete spiritual repentance.",
            },
          ],
        },
        {
          id: "a3_s2_c102",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c102_l1",
              original: "Ma salvagli l'addomine.",
              literal: "But save his abdomen.",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "but",
                },
                {
                  word: "salvagli",
                  lemma: "salvare",
                  pos: "verb",
                  meaning: "save for him (imperative salva + indirect object clitic gli)",
                },
                {
                  word: "addomine",
                  lemma: "addome",
                  pos: "noun",
                  meaning: "abdomen / belly (comic mock-Latinate form rhyming with Domine)",
                },
              ],
              grammarNote: "Boito's celebrated comedic invention: creating a pseudo-Latinized noun 'addomine' (from addome, abdomen/belly) to rhyme with liturgical 'Domine'.",
            },
          ],
        },
        {
          id: "a3_s2_c103",
          speaker: "The Men",
          lines: [
            {
              id: "a3_s2_c103_l1",
              original: "Globo d'impurità, rispondi.",
              literal: "Globe of impurity, answer.",
              tokens: [
                {
                  word: "Globo",
                  lemma: "globo",
                  pos: "noun",
                  meaning: "globe / sphere",
                },
                {
                  word: "impurità",
                  lemma: "impurità",
                  pos: "noun",
                  meaning: "impurity / sinfulness",
                },
                {
                  word: "rispondi",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "answer / reply (2nd sing. imperative)",
                },
              ],
              grammarNote: "Formal inquisitorial catechism: addressing Falstaff's spherical shape as a concentrated 'Globo d'impurità', demanding an admission of guilt.",
            },
          ],
        },
        {
          id: "a3_s2_c104",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c104_l1",
              original: "Ben mi sta.",
              literal: "It serves me right.",
              tokens: [
                {
                  word: "Ben mi sta",
                  lemma: "stare bene",
                  pos: "idiom",
                  meaning: "it serves me right / I deserve it (idiomatic expression of resignation)",
                },
              ],
              grammarNote: "Colloquial Italian idiom of resignation ('Ben mi sta!'). Falstaff humbly admits his deserved punishment.",
            },
          ],
        },
        {
          id: "a3_s2_c105",
          speaker: "The Men",
          lines: [
            {
              id: "a3_s2_c105_l1",
              original: "Monte d'obesità, rispondi.",
              literal: "Mountain of obesity, answer.",
              tokens: [
                {
                  word: "Monte",
                  lemma: "monte",
                  pos: "noun",
                  meaning: "mountain",
                },
                {
                  word: "obesità",
                  lemma: "obesità",
                  pos: "noun",
                  meaning: "obesity / fatness",
                },
                {
                  word: "rispondi",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "answer / reply (2nd sing. imperative)",
                },
              ],
              grammarNote: "Second catechism challenge: 'Monte d'obesità' translates Shakespeare's 'this mountain of mummy' into Boito's grand mock-heroic verse.",
            },
          ],
        },
        {
          id: "a3_s2_c106",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c106_l1",
              original: "Ben mi sta.",
              literal: "It serves me right.",
              tokens: [
                {
                  word: "Ben mi sta",
                  lemma: "stare bene",
                  pos: "idiom",
                  meaning: "it serves me right / I deserve it (idiomatic expression of resignation)",
                },
              ],
              grammarNote: "Colloquial Italian idiom of resignation ('Ben mi sta!'). Falstaff humbly admits his deserved punishment.",
            },
          ],
        },
        {
          id: "a3_s2_c107",
          speaker: "The Men",
          lines: [
            {
              id: "a3_s2_c107_l1",
              original: "Otre di malvasia, rispondi.",
              literal: "Wineskin of Malmsey, answer.",
              tokens: [
                {
                  word: "Otre",
                  lemma: "otre",
                  pos: "noun",
                  meaning: "wineskin / leather wine container",
                },
                {
                  word: "malvasia",
                  lemma: "malvasia",
                  pos: "noun",
                  meaning: "Malmsey / sweet Mediterranean wine",
                },
                {
                  word: "rispondi",
                  lemma: "rispondere",
                  pos: "verb",
                  meaning: "answer / reply (2nd sing. imperative)",
                },
              ],
              grammarNote: "Third catechism question: 'Otre di malvasia' evokes Prince Hal's insults of Falstaff as a vessel of wine and sweet Malmsey.",
            },
          ],
        },
        {
          id: "a3_s2_c108",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c108_l1",
              original: "Così sia.",
              literal: "So be it.",
              tokens: [
                {
                  word: "Così sia",
                  lemma: "così sia",
                  pos: "idiom",
                  meaning: "so be it / amen (liturgical closing formula)",
                },
              ],
              grammarNote: "Liturgical closing formula 'Così sia' (the standard vernacular rendering of Latin 'Amen'), rhyming with 'malvasia' and concluding the mock-exorcism.",
            },
          ],
        },
        {
          id: "a3_s2_c109",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a3_s2_c109_l1",
              original: "Re dei panciuti!",
              literal: "King of the pot-bellied!",
              tokens: [
                {
                  word: "Re",
                  lemma: "re",
                  pos: "noun",
                  meaning: "king",
                },
                {
                  word: "dei",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + i)",
                },
                {
                  word: "panciuti",
                  lemma: "panciuto",
                  pos: "adjective",
                  meaning: "pot-bellied / paunchy (substantive plural)",
                },
              ],
              grammarNote: "Bardolfo taunts the pinned-down Falstaff, mocking his immense girth as king of the pot-bellied.",
            },
          ],
        },
        {
          id: "a3_s2_c110",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c110_l1",
              original: "Va' via, tu puti.",
              literal: "Go away, you stink.",
              tokens: [
                {
                  word: "Va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (2nd sing. imperative with shortened form apostrophe)",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "adverb",
                  meaning: "away",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject pronoun)",
                },
                {
                  word: "puti",
                  lemma: "putire",
                  pos: "verb",
                  meaning: "stink / reek (2nd sing. present)",
                },
              ],
              grammarNote: "Falstaff recoils from the tormentor leaning over him, complaining of a foul smell. 'Va'' is the truncated imperative of 'andare'; 'puti' is the second-person singular present of 'putire' (to stink).",
            },
          ],
        },
        {
          id: "a3_s2_c111",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a3_s2_c111_l1",
              original: "Re dei cornuti!",
              literal: "King of the cuckolds!",
              tokens: [
                {
                  word: "Re",
                  lemma: "re",
                  pos: "noun",
                  meaning: "king",
                },
                {
                  word: "dei",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + i)",
                },
                {
                  word: "cornuti",
                  lemma: "cornuto",
                  pos: "noun",
                  meaning: "cuckolds / horned ones",
                },
              ],
              grammarNote: "Bardolfo continues taunting Falstaff with the traditional insult of the horned cuckold, echoing the stag disguise Falstaff was forced to wear.",
            },
          ],
        },
        {
          id: "a3_s2_c112",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c112_l1",
              original: "Va' via, tu puti.",
              literal: "Go away, you stink.",
              tokens: [
                {
                  word: "Va'",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "go (2nd sing. imperative with shortened form apostrophe)",
                },
                {
                  word: "via",
                  lemma: "via",
                  pos: "adverb",
                  meaning: "away",
                },
                {
                  word: "tu",
                  lemma: "tu",
                  pos: "pronoun",
                  meaning: "you (2nd sing. subject pronoun)",
                },
                {
                  word: "puti",
                  lemma: "putire",
                  pos: "verb",
                  meaning: "stink / reek (2nd sing. present)",
                },
              ],
              grammarNote: "Falstaff recoils from the tormentor leaning over him, complaining of a foul smell. 'Va'' is the truncated imperative of 'andare'; 'puti' is the second-person singular present of 'putire' (to stink).",
            },
          ],
        },
        {
          id: "a3_s2_c113",
          speaker: "Sir John Falstaff",
          stageDirection: "Pistola gli dà un colpo di frusta",
          stageDirectionTranslation: "Pistola gives him a lash of the whip",
          lines: [
          ],
        },
        {
          id: "a3_s2_c114",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c114_l1",
              original: "Furfanteria!",
              literal: "Roguery!",
              tokens: [
                {
                  word: "Furfanteria",
                  lemma: "furfanteria",
                  pos: "noun",
                  meaning: "roguery / knavery / scoundrelism",
                },
              ],
              grammarNote: "The chorus shouts epithets denouncing Falstaff's knavery and deceitful tricks.",
            },
          ],
        },
        {
          id: "a3_s2_c115",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c115_l1",
              original: "Ahi! Così sia.",
              literal: "Ah! So be it.",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ah / alas / ouch",
                },
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "so / thus",
                },
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "let it be / may it be (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Falstaff groans in pain and resignation ('Così sia' - Amen / So be it) as the spirits torment him.",
            },
          ],
        },
        {
          id: "a3_s2_c116",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c116_l1",
              original: "Gagliofferia!",
              literal: "Scoundrelism!",
              tokens: [
                {
                  word: "Gagliofferia",
                  lemma: "gagliofferia",
                  pos: "noun",
                  meaning: "scoundrelism / vulgar knavery / loutish behavior",
                },
              ],
              grammarNote: "The chorus continues its rhythmic insults, accusing Falstaff of clumsy and insolent villainy ('gagliofferia', from 'gaglioffo').",
            },
          ],
        },
        {
          id: "a3_s2_c117",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c117_l1",
              original: "Ahi! Così sia.",
              literal: "Ah! So be it.",
              tokens: [
                {
                  word: "Ahi",
                  lemma: "ahi",
                  pos: "interjection",
                  meaning: "ah / alas / ouch",
                },
                {
                  word: "Così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "so / thus",
                },
                {
                  word: "sia",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "let it be / may it be (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Falstaff groans in pain and resignation ('Così sia' - Amen / So be it) as the spirits torment him.",
            },
          ],
        },
        {
          id: "a3_s2_c118",
          speaker: "Bardolfo",
          lines: [
            {
              id: "a3_s2_c118_l1",
              original: "Ed or che il diavol ti porti via!",
              literal: "And now may the devil carry you away!",
              tokens: [
                {
                  word: "Ed",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and (euphonic form before vowel)",
                },
                {
                  word: "or",
                  lemma: "ora",
                  pos: "adverb",
                  meaning: "now (shortened form of ora)",
                },
                {
                  word: "diavol",
                  lemma: "diavolo",
                  pos: "noun",
                  meaning: "devil (shortened form of diavolo)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (2nd sing. direct object clitic)",
                },
                {
                  word: "porti via",
                  lemma: "portare via",
                  pos: "verb",
                  meaning: "carry away / take away (3rd sing. present subjunctive)",
                },
              ],
              grammarNote: "Bardolfo leans in close over Falstaff to deliver this curse, using the subjunctive wish 'porti via'. His close proximity allows Falstaff to smell his breath and see his unmistakable nose.",
            },
          ],
        },
        {
          id: "a3_s2_c119",
          speaker: "Bardolfo",
          stageDirection: "nella foga del dire gli casca il cappuccio",
          stageDirectionTranslation: "in the heat of speaking his hood slips off",
          lines: [
            {
              id: "a3_s2_c119_l1",
              original: "Atto terzo Falstaff",
              literal: "Act Three Falstaff",
              tokens: [
                {
                  word: "Atto",
                  lemma: "atto",
                  pos: "noun",
                  meaning: "act (dramatic division)",
                },
                {
                  word: "terzo",
                  lemma: "terzo",
                  pos: "adjective",
                  meaning: "third",
                },
                {
                  word: "Falstaff",
                  lemma: "Falstaff",
                  pos: "noun",
                  meaning: "Falstaff",
                },
              ],
              grammarNote: "Score and libretto structural header marking Act III of Falstaff, appearing here at the transition to Falstaff's unmasking of Bardolfo.",
            },
          ],
        },
        {
          id: "a3_s2_c120",
          speaker: "Sir John Falstaff",
          stageDirection: "rialzandosi",
          stageDirectionTranslation: "getting back up",
          lines: [
            {
              id: "a3_s2_c120_l1",
              original: "Nitro! Catrame e solfo!",
              literal: "Niter! Tar and sulfur!",
              tokens: [
                {
                  word: "Nitro",
                  lemma: "nitro",
                  pos: "noun",
                  meaning: "niter / saltpeter",
                },
                {
                  word: "Catrame",
                  lemma: "catrame",
                  pos: "noun",
                  meaning: "tar / pitch",
                },
                {
                  word: "e",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "solfo",
                  lemma: "solfo",
                  pos: "noun",
                  meaning: "sulfur / brimstone",
                },
              ],
              grammarNote: "Falstaff immediately detects the chemical, brimstone-like stench of Bardolfo's alcoholic breath, listing the volatile ingredients of gunpowder and brimstone.",
            },
            {
              id: "a3_s2_c120_l2",
              original: "Riconosco Bardolfo!",
              literal: "I recognize Bardolfo!",
              tokens: [
                {
                  word: "Riconosco",
                  lemma: "riconoscere",
                  pos: "verb",
                  meaning: "I recognize (1st sing. present)",
                },
                {
                  word: "Bardolfo",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo",
                },
              ],
              grammarNote: "The turning point of the scene: smelling the foul breath and catching sight of the famous red nose beneath the mask, Falstaff realizes his tormentor is merely his own rogue servant in disguise.",
            },
          ],
        },
        {
          id: "a3_s2_c121",
          speaker: "Sir John Falstaff",
          stageDirection: "violentissimamente contro Bardolfo",
          stageDirectionTranslation: "most violently against Bardolfo",
          lines: [
            {
              id: "a3_s2_c121_l1",
              original: "Naso vermiglio!",
              literal: "Vermilion nose!",
              tokens: [
                {
                  word: "Naso",
                  lemma: "naso",
                  pos: "noun",
                  meaning: "nose",
                },
                {
                  word: "vermiglio",
                  lemma: "vermiglio",
                  pos: "adjective",
                  meaning: "vermilion / ruby red / fiery",
                },
              ],
              grammarNote: "Falstaff begins his torrent of Shakespearean invective directed at Bardolfo's legendary red nose, celebrated throughout Henry IV.",
            },
            {
              id: "a3_s2_c121_l2",
              original: "Nasobargiglio!",
              literal: "Wattle-nose!",
              tokens: [
                {
                  word: "Nasobargiglio",
                  lemma: "nasobargiglio",
                  pos: "noun",
                  meaning: "wattle-nose / turkey-cock nose",
                },
              ],
              grammarNote: "A vivid Boito compound neologism combining 'naso' (nose) and 'bargiglio' (the fleshy caruncle or wattle of a rooster or turkey), mocking the bumpy, bulbous shape of Bardolfo's nose.",
            },
            {
              id: "a3_s2_c121_l3",
              original: "Puntuta lesina!",
              literal: "Pointed awl!",
              tokens: [
                {
                  word: "Puntuta",
                  lemma: "puntuto",
                  pos: "adjective",
                  meaning: "pointed / sharp",
                },
                {
                  word: "lesina",
                  lemma: "lesina",
                  pos: "noun",
                  meaning: "awl / shoemaker's punch",
                },
              ],
              grammarNote: "Metaphor comparing Bardolfo's sharp, piercing nose to a cobbler's awl ('lesina'), which is also proverbial in Italian for stinginess or narrowness.",
            },
            {
              id: "a3_s2_c121_l4",
              original: "Vampa di resina!",
              literal: "Blaze of resin!",
              tokens: [
                {
                  word: "Vampa",
                  lemma: "vampa",
                  pos: "noun",
                  meaning: "blaze / flare / burst of flame",
                },
                {
                  word: "di",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of",
                },
                {
                  word: "resina",
                  lemma: "resina",
                  pos: "noun",
                  meaning: "resin / pitch",
                },
              ],
              grammarNote: "Falstaff compares the fiery glow of Bardolfo's alcohol-inflamed complexion to resin bursting into flames.",
            },
            {
              id: "a3_s2_c121_l5",
              original: "Salamandra! Ignis fatuus! Vecchia alabarda! Stecca",
              literal: "Salamander! Ignis fatuus! Old halberd! Stay",
              tokens: [
                {
                  word: "Salamandra",
                  lemma: "salamandra",
                  pos: "noun",
                  meaning: "salamander (mythical creature living in fire)",
                },
                {
                  word: "Ignis fatuus",
                  lemma: "ignis fatuus",
                  pos: "noun",
                  meaning: "will-o'-the-wisp (Latin: foolish fire)",
                },
                {
                  word: "alabarda",
                  lemma: "alabarda",
                  pos: "noun",
                  meaning: "halberd (pole weapon)",
                },
                {
                  word: "Stecca",
                  lemma: "stecca",
                  pos: "noun",
                  meaning: "stay / slat / bone (corset stay or ruler)",
                },
              ],
              grammarNote: "A barrage of bizarre metaphors: the mythical fire-dwelling salamander, the Latin 'ignis fatuus' (will-o'-the-wisp / marsh-fire, straight from Shakespeare's 1 Henry IV), an old rusty halberd, and a corset stay/measuring slat ('stecca').",
            },
            {
              id: "a3_s2_c121_l6",
              original: "di sartore! Schidion d'inferno! Aringa secca!",
              literal: "of a tailor! Hell's spit! Dried herring!",
              tokens: [
                {
                  word: "sartore",
                  lemma: "sartore",
                  pos: "noun",
                  meaning: "tailor",
                },
                {
                  word: "Schidion",
                  lemma: "schidione",
                  pos: "noun",
                  meaning: "roasting spit / skewer (shortened form of schidione)",
                },
                {
                  word: "d'inferno",
                  lemma: "inferno",
                  pos: "noun",
                  meaning: "of hell / infernal",
                },
                {
                  word: "Aringa",
                  lemma: "aringa",
                  pos: "noun",
                  meaning: "herring",
                },
                {
                  word: "secca",
                  lemma: "secco",
                  pos: "adjective",
                  meaning: "dry / dried / desiccated",
                },
              ],
              grammarNote: "Falstaff completes the insult 'stecca di sartore' (a tailor's bone/flat rule) and adds 'schidion d'inferno' (a spit of hell) and 'aringa secca' (dried/pickled herring), echoing Shakespeare's insults for thin, dried-up knaves.",
            },
            {
              id: "a3_s2_c121_l7",
              original: "Vampiro! Basilisco!",
              literal: "Vampire! Basilisk!",
              tokens: [
                {
                  word: "Vampiro",
                  lemma: "vampiro",
                  pos: "noun",
                  meaning: "vampire / bloodsucker",
                },
                {
                  word: "Basilisco",
                  lemma: "basilisco",
                  pos: "noun",
                  meaning: "basilisk (legendary serpent whose gaze is lethal)",
                },
              ],
              grammarNote: "Falstaff denounces Bardolfo as a monstrous parasite (vampire) and a deadly mythical reptile (basilisk).",
            },
            {
              id: "a3_s2_c121_l8",
              original: "Manigoldo! Ladrone!",
              literal: "Rogue! Thief!",
              tokens: [
                {
                  word: "Manigoldo",
                  lemma: "manigoldo",
                  pos: "noun",
                  meaning: "rogue / scoundrel / executioner",
                },
                {
                  word: "Ladrone",
                  lemma: "ladrone",
                  pos: "noun",
                  meaning: "thief / robber / highwayman",
                },
              ],
              grammarNote: "Direct insults reminding Bardolfo of his true profession as a common thief and ruffian.",
            },
            {
              id: "a3_s2_c121_l9",
              original: "Ho detto. E se mentisco",
              literal: "I have spoken. And if I lie",
              tokens: [
                {
                  word: "Ho detto",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "I have spoken / I rest my case (passato prossimo 1st sing.)",
                },
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "se",
                  lemma: "se",
                  pos: "conjunction",
                  meaning: "if",
                },
                {
                  word: "mentisco",
                  lemma: "mentire",
                  pos: "verb",
                  meaning: "I lie (1st sing. present)",
                },
              ],
              grammarNote: "'Ho detto' is a solemn formula ('dixi' / 'I have spoken'). Falstaff sets up a comical oath in the conditional clause 'se mentisco' (if I am lying).",
            },
            {
              id: "a3_s2_c121_l10",
              original: "voglio che mi si spacchi il cinturone!",
              literal: "I want my belt to split open!",
              tokens: [
                {
                  word: "voglio",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (1st sing. present)",
                },
                {
                  word: "mi",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "on me / for me (dative clitic)",
                },
                {
                  word: "si spacchi",
                  lemma: "spaccarsi",
                  pos: "verb",
                  meaning: "burst / split open (3rd sing. present subjunctive)",
                },
                {
                  word: "cinturone",
                  lemma: "cinturone",
                  pos: "noun",
                  meaning: "large belt / sword belt (augmentative of cintura)",
                },
              ],
              grammarNote: "Falstaff swears an oath suited to his vast girth: 'may my belt burst!' ('che mi si spacchi il cinturone', with reflexive/mediopassive subjunctive 'si spacchi' and ethical dative 'mi').",
            },
          ],
        },
        {
          id: "a3_s2_c122",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c122_l1",
              original: "Bravo!",
              literal: "Bravo!",
              tokens: [
                {
                  word: "Bravo",
                  lemma: "bravo",
                  pos: "interjection",
                  meaning: "bravo / well done",
                },
              ],
              grammarNote: "The crowd and conspirators applaud Falstaff's brilliant recognition of Bardolfo despite the disguise.",
            },
          ],
        },
        {
          id: "a3_s2_c123",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c123_l1",
              original: "Un poco di pausa. Sono stanco.",
              literal: "A little pause. I am tired.",
              tokens: [
                {
                  word: "Un poco",
                  lemma: "un poco",
                  pos: "adverb",
                  meaning: "a little / a bit",
                },
                {
                  word: "pausa",
                  lemma: "pausa",
                  pos: "noun",
                  meaning: "pause / rest",
                },
                {
                  word: "Sono",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I am (1st sing. present)",
                },
                {
                  word: "stanco",
                  lemma: "stanco",
                  pos: "adjective",
                  meaning: "tired / exhausted",
                },
              ],
              grammarNote: "Falstaff collapses, catching his breath after the mock exorcism and beating, pleading for a moment of respite.",
            },
          ],
        },
        {
          id: "a3_s2_c124",
          speaker: "Mrs. Quickly",
          stageDirection: "che si trova vicino a Bardolfo, gli dice a bassa voce",
          stageDirectionTranslation: "who is near Bardolfo, says to him in a low voice",
          lines: [
            {
              id: "a3_s2_c124_l1",
              original: "Vieni, Ti coprirò col velo bianco.",
              literal: "Come, I will cover you with the white veil.",
              tokens: [
                {
                  word: "Vieni",
                  lemma: "venire",
                  pos: "verb",
                  meaning: "come (2nd sing. imperative)",
                },
                {
                  word: "Ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (2nd sing. direct object clitic)",
                },
                {
                  word: "coprirò",
                  lemma: "coprire",
                  pos: "verb",
                  meaning: "I will cover (1st sing. future)",
                },
                {
                  word: "velo",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil",
                },
                {
                  word: "bianco",
                  lemma: "bianco",
                  pos: "adjective",
                  meaning: "white",
                },
              ],
              grammarNote: "Mrs. Quickly whispers to Bardolfo, leading him away to be veiled as the 'Queen of the Fairies' for the sham wedding arranged to dupe Dr. Caius.",
            },
          ],
        },
        {
          id: "a3_s2_c125",
          speaker: "Mrs. Quickly",
          stageDirection: "mentre il Dr. Cajus ricomincia a cercare e cercando esce, dalla parte opposta, Quickly e Bardolfo scompaiono dietro gli alberi del fondo",
          stageDirectionTranslation: "while Dr. Caius resumes searching and exits searching, on the opposite side Quickly and Bardolfo vanish behind the trees in the background",
          lines: [
          ],
        },
        {
          id: "a3_s2_c126",
          speaker: "Ford",
          stageDirection: "con un inchino ironico, avvicinandosi a Falstaff",
          stageDirectionTranslation: "with an ironic bow, approaching Falstaff",
          lines: [
            {
              id: "a3_s2_c126_l1",
              original: "Ed or, mentre vi passa la scalmana,",
              literal: "And now, while your heat passes off,",
              tokens: [
                {
                  word: "mentre",
                  lemma: "mentre",
                  pos: "conjunction",
                  meaning: "while / as",
                },
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "to you (formal 2nd pers. indirect object clitic)",
                },
                {
                  word: "passa",
                  lemma: "passare",
                  pos: "verb",
                  meaning: "passes / subsides (3rd sing. present)",
                },
                {
                  word: "scalmana",
                  lemma: "scalmana",
                  pos: "noun",
                  meaning: "overheating / agitation / hot sweat",
                },
              ],
              grammarNote: "Ford steps forward to gloat over the exhausted knight. 'Scalmana' refers to feverish heat or agitation caused by violent exertion.",
            },
            {
              id: "a3_s2_c126_l2",
              original: "sir John, dite: il cornuto chi è?",
              literal: "sir John, say: who is the cuckold?",
              tokens: [
                {
                  word: "sir",
                  lemma: "sir",
                  pos: "noun",
                  meaning: "Sir",
                },
                {
                  word: "dite",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell / say (2nd pers. plur./formal imperative)",
                },
                {
                  word: "cornuto",
                  lemma: "cornuto",
                  pos: "noun",
                  meaning: "cuckold / horned one",
                },
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who (interrogative pronoun)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is (3rd sing. present)",
                },
              ],
              grammarNote: "Ford throws Falstaff's earlier boasting in Act II back in his face, asking who turned out to be the real horned victim.",
            },
          ],
        },
        {
          id: "a3_s2_c127",
          speaker: "Alice & Meg",
          stageDirection: "che si saranno avvicinate, ironicamente a Falstaff smascherandosi",
          stageDirectionTranslation: "who have approached, speaking ironically to Falstaff while unmasking themselves",
          lines: [
            {
              id: "a3_s2_c127_l1",
              original: "Chi è?",
              literal: "Who is it?",
              tokens: [
                {
                  word: "Chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
              ],
              grammarNote: "Alice and Meg chime in gleefully to join the mocking interrogation of Falstaff.",
            },
          ],
        },
        {
          id: "a3_s2_c128",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c128_l1",
              original: "Vi siete fatto muto?",
              literal: "Have you become mute?",
              tokens: [
                {
                  word: "Vi siete fatto",
                  lemma: "farsi",
                  pos: "verb",
                  meaning: "have you become / made yourself (passato prossimo 2nd pers. formal/plur.)",
                },
                {
                  word: "muto",
                  lemma: "muto",
                  pos: "adjective",
                  meaning: "mute / speechless / dumb",
                },
              ],
              grammarNote: "Alice teases Falstaff about his sudden loss of his usual eloquent bluster. 'Farsi' + adjective expresses becoming or turning into.",
            },
          ],
        },
        {
          id: "a3_s2_c129",
          speaker: "Sir John Falstaff",
          stageDirection: "dopo un primo istante di sbalordimento andando incontro a Ford",
          stageDirectionTranslation: "after an initial moment of astonishment, going up to meet Ford",
          lines: [
            {
              id: "a3_s2_c129_l1",
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
                  meaning: "Mister / Master (shortened form of signore)",
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
          ],
        },
        {
          id: "a3_s2_c130",
          speaker: "Alice Ford",
          stageDirection: "interponendosi",
          stageDirectionTranslation: "intervening",
          lines: [
            {
              id: "a3_s2_c130_l1",
              original: "Sbagliate nel saluto.",
              literal: "You are mistaken in the greeting.",
              tokens: [
                {
                  word: "Sbagliate",
                  lemma: "sbagliare",
                  pos: "verb",
                  meaning: "you are mistaken / you err (2nd pers. formal/plur. present)",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (articulated preposition in + il)",
                },
                {
                  word: "saluto",
                  lemma: "saluto",
                  pos: "noun",
                  meaning: "greeting / salutation",
                },
              ],
              grammarNote: "Alice corrects Falstaff, preparing the grand revelation of her husband's true identity.",
            },
            {
              id: "a3_s2_c130_l2",
              original: "Questi è Ford, mio marito.",
              literal: "This is Ford, my husband.",
              tokens: [
                {
                  word: "Questi",
                  lemma: "questi",
                  pos: "pronoun",
                  meaning: "this man (demonstrative pronoun for persons)",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "Ford",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford",
                },
                {
                  word: "marito",
                  lemma: "marito",
                  pos: "noun",
                  meaning: "husband",
                },
              ],
              grammarNote: "Alice unmasks Ford's double identity. The demonstrative pronoun 'questi' is used substantively in literary Italian for a male person near the speaker.",
            },
          ],
        },
        {
          id: "a3_s2_c131",
          speaker: "Mrs. Quickly",
          stageDirection: "ritornando",
          stageDirectionTranslation: "returning",
          lines: [
            {
              id: "a3_s2_c131_l1",
              original: "Cavaliero,",
              literal: "Knight,",
              tokens: [
                {
                  word: "Cavaliero",
                  lemma: "cavaliere",
                  pos: "noun",
                  meaning: "knight / cavalier (archaic/poetic form of cavaliere)",
                },
              ],
              grammarNote: "Mrs. Quickly addresses Falstaff with mock-solemn courtesy before unleashing a barrage of insults.",
            },
            {
              id: "a3_s2_c131_l2",
              original: "voi credeste due donne così grulle,",
              literal: "you believed two women so silly,",
              tokens: [
                {
                  word: "credeste",
                  lemma: "credere",
                  pos: "verb",
                  meaning: "you believed (passato remoto 2nd pers. plur.)",
                },
                {
                  word: "due",
                  lemma: "due",
                  pos: "adjective",
                  meaning: "two",
                },
                {
                  word: "donne",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
                {
                  word: "così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "so",
                },
                {
                  word: "grulle",
                  lemma: "grullo",
                  pos: "adjective",
                  meaning: "foolish / silly / gullible (Tuscan)",
                },
              ],
              grammarNote: "Quickly uses the Tuscan adjective 'grullo' (foolish, gullible), questioning Falstaff's absurd conceit.",
            },
            {
              id: "a3_s2_c131_l3",
              original: "così citrulle,",
              literal: "so blockheaded,",
              tokens: [
                {
                  word: "così",
                  lemma: "così",
                  pos: "adverb",
                  meaning: "so",
                },
                {
                  word: "citrulle",
                  lemma: "citrullo",
                  pos: "adjective",
                  meaning: "blockheaded / doltish / simple-minded",
                },
              ],
              grammarNote: "Continuation of Quickly's speech: 'citrullo' is a classic Italian term of comical disparagement for a simpleton or blockhead.",
            },
            {
              id: "a3_s2_c131_l4",
              original: "da darsi anima e corpo all'avversiero,",
              literal: "as to give themselves body and soul to the adversary,",
              tokens: [
                {
                  word: "darsi",
                  lemma: "darsi",
                  pos: "verb",
                  meaning: "to give oneself / surrender oneself (reflexive infinitive)",
                },
                {
                  word: "anima",
                  lemma: "anima",
                  pos: "noun",
                  meaning: "soul",
                },
                {
                  word: "corpo",
                  lemma: "corpo",
                  pos: "noun",
                  meaning: "body",
                },
                {
                  word: "all'avversiero",
                  lemma: "avversiero",
                  pos: "noun",
                  meaning: "to the adversary / devil (archaic Italian for the Devil)",
                },
              ],
              grammarNote: "Consecutive clause ('da' + infinitive). 'L'avversiero' is an archaic Italian literary designation for Satan/the Devil ('the adversary').",
            },
            {
              id: "a3_s2_c131_l5",
              original: "per un uom vecchio, sudicio ed obeso...",
              literal: "for a man old, filthy, and obese...",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (shortened form of uomo)",
                },
                {
                  word: "vecchio",
                  lemma: "vecchio",
                  pos: "adjective",
                  meaning: "old",
                },
                {
                  word: "sudicio",
                  lemma: "sudicio",
                  pos: "adjective",
                  meaning: "dirty / filthy / foul",
                },
                {
                  word: "obeso",
                  lemma: "obeso",
                  pos: "adjective",
                  meaning: "obese / fat",
                },
              ],
              grammarNote: "Quickly ruthlessly enumerates Falstaff's physical flaws with three devastating adjectives.",
            },
          ],
        },
        {
          id: "a3_s2_c132",
          speaker: "Meg & Quickly",
          lines: [
            {
              id: "a3_s2_c132_l1",
              original: "Con quella testa calva...",
              literal: "With that bald head...",
              tokens: [
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
                {
                  word: "calva",
                  lemma: "calvo",
                  pos: "adjective",
                  meaning: "bald",
                },
              ],
              grammarNote: "Meg and Quickly tag-team to pile on physical mockery, pointing out Falstaff's bald pate.",
            },
          ],
        },
        {
          id: "a3_s2_c133",
          speaker: "Alice, Meg & Quickly",
          lines: [
            {
              id: "a3_s2_c133_l1",
              original: "E con quel peso!",
              literal: "And with that weight!",
              tokens: [
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "quel",
                  lemma: "quello",
                  pos: "adjective",
                  meaning: "that",
                },
                {
                  word: "peso",
                  lemma: "peso",
                  pos: "noun",
                  meaning: "weight / bulk",
                },
              ],
              grammarNote: "The women unite in a final punchline about Falstaff's staggering weight.",
            },
          ],
        },
        {
          id: "a3_s2_c134",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c134_l1",
              original: "Parlano chiaro.",
              literal: "They speak plainly.",
              tokens: [
                {
                  word: "Parlano",
                  lemma: "parlare",
                  pos: "verb",
                  meaning: "they speak (3rd pers. plur. present)",
                },
                {
                  word: "chiaro",
                  lemma: "chiaro",
                  pos: "adverb",
                  meaning: "clearly / plainly",
                },
              ],
              grammarNote: "Ford relishes the women's bluntness, noting that their rejection of Falstaff could not be clearer.",
            },
          ],
        },
        {
          id: "a3_s2_c135",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c135_l1",
              original: "Incomincio ad accorgermi",
              literal: "I begin to realize",
              tokens: [
                {
                  word: "Incomincio",
                  lemma: "incominciare",
                  pos: "verb",
                  meaning: "I begin / start (1st sing. present)",
                },
                {
                  word: "accorgermi",
                  lemma: "accorgersi",
                  pos: "verb",
                  meaning: "to realize / notice (reflexive infinitive with 1st sing. clitic mi)",
                },
              ],
              grammarNote: "Falstaff begins to admit his humiliation: 'accorgersi' (to notice/realize) takes 'di' + infinitive.",
            },
            {
              id: "a3_s2_c135_l2",
              original: "d'esser stato un somaro.",
              literal: "that I have been a donkey.",
              tokens: [
                {
                  word: "esser",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "to be / to have (infinitive shortened form)",
                },
                {
                  word: "stato",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "been (past participle)",
                },
                {
                  word: "somaro",
                  lemma: "somaro",
                  pos: "noun",
                  meaning: "donkey / ass",
                },
              ],
              grammarNote: "Falstaff confesses his foolishness, comparing himself to a donkey ('somaro').",
            },
          ],
        },
        {
          id: "a3_s2_c136",
          speaker: "Alice Ford",
          lines: [
            {
              id: "a3_s2_c136_l1",
              original: "E un cervo.",
              literal: "And a stag.",
              tokens: [
                {
                  word: "E",
                  lemma: "e",
                  pos: "conjunction",
                  meaning: "and",
                },
                {
                  word: "cervo",
                  lemma: "cervo",
                  pos: "noun",
                  meaning: "stag / deer",
                },
              ],
              grammarNote: "Alice quips that besides an ass, he was also a stag ('cervo'), referring to the antlers of Herne the Hunter he wore.",
            },
          ],
        },
        {
          id: "a3_s2_c137",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c137_l1",
              original: "Un bue.",
              literal: "An ox.",
              tokens: [
                {
                  word: "Un",
                  lemma: "uno",
                  pos: "adjective",
                  meaning: "an / a",
                },
                {
                  word: "bue",
                  lemma: "bue",
                  pos: "noun",
                  meaning: "ox",
                },
              ],
              grammarNote: "Ford escalates the animal metaphors, calling him an ox ('bue'), traditionally an emblem of horned cuckolds and dumb, heavy beasts.",
            },
          ],
        },
        {
          id: "a3_s2_c138",
          speaker: "All",
          stageDirection: "ridendo",
          stageDirectionTranslation: "laughing",
          lines: [
            {
              id: "a3_s2_c138_l1",
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
          id: "a3_s2_c139",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c139_l1",
              original: "E un mostro raro!",
              literal: "And a rare monster!",
              tokens: [
                {
                  word: "mostro",
                  lemma: "mostro",
                  pos: "noun",
                  meaning: "monster / freak",
                },
                {
                  word: "raro",
                  lemma: "raro",
                  pos: "adjective",
                  meaning: "rare / unusual",
                },
              ],
              grammarNote: "Ford caps the animal insults, mocking Falstaff as a freak of nature ('mostro raro'), worthy of being exhibited at a fair.",
            },
          ],
        },
        {
          id: "a3_s2_c140",
          speaker: "Sir John Falstaff",
          stageDirection: "che avrà riacquistato la sua calma",
          stageDirectionTranslation: "who has regained his composure",
          lines: [
            {
              id: "a3_s2_c140_l1",
              original: "Ogni sorta di gente dozzinale",
              literal: "Every sort of common folk",
              tokens: [
                {
                  word: "sorta",
                  lemma: "sorta",
                  pos: "noun",
                  meaning: "sort / kind",
                },
                {
                  word: "gente",
                  lemma: "gente",
                  pos: "noun",
                  meaning: "people / folk",
                },
                {
                  word: "dozzinale",
                  lemma: "dozzinale",
                  pos: "adjective",
                  meaning: "common / second-rate / mediocre / cheap",
                },
              ],
              grammarNote: "Falstaff rallies his dignity, countering the crowd's mockery by labeling them 'gente dozzinale' (cheap, dime-a-dozen mediocre people).",
            },
            {
              id: "a3_s2_c140_l2",
              original: "mi beffa e se ne gloria;",
              literal: "mocks me and boasts of it;",
              tokens: [
                {
                  word: "beffa",
                  lemma: "beffare",
                  pos: "verb",
                  meaning: "mocks / jeers at (3rd sing. present)",
                },
                {
                  word: "se ne gloria",
                  lemma: "gloriarsi",
                  pos: "verb",
                  meaning: "boasts of it / prides itself on it (reflexive verb with partitive/pronominal ne)",
                },
              ],
              grammarNote: "Falstaff observes that mediocre minds find glory only in mocking their betters. Note the pronominal construction 'se ne gloria' (glories in it).",
            },
            {
              id: "a3_s2_c140_l3",
              original: "pur, senza me, costor con tanta boria",
              literal: "yet, without me, these people with so much arrogance",
              tokens: [
                {
                  word: "pur",
                  lemma: "pure",
                  pos: "conjunction",
                  meaning: "yet / nevertheless (shortened form of pure)",
                },
                {
                  word: "senza",
                  lemma: "senza",
                  pos: "preposition",
                  meaning: "without",
                },
                {
                  word: "costor",
                  lemma: "costoro",
                  pos: "pronoun",
                  meaning: "these people (pejorative demonstrative pronoun, shortened form of costoro)",
                },
                {
                  word: "boria",
                  lemma: "boria",
                  pos: "noun",
                  meaning: "arrogance / conceit / vanity",
                },
              ],
              grammarNote: "Falstaff begins his Shakespearean vindication: 'costoro' (truncated to 'costor') carries a disdainful nuance for those displaying unearned arrogance ('boria').",
            },
            {
              id: "a3_s2_c140_l4",
              original: "non avrebbero un briciol di sale.",
              literal: "would not have a pinch of salt.",
              tokens: [
                {
                  word: "avrebbero",
                  lemma: "avere",
                  pos: "verb",
                  meaning: "would have (3rd pers. plur. conditional)",
                },
                {
                  word: "briciol",
                  lemma: "briciolo",
                  pos: "noun",
                  meaning: "crumb / pinch / scrap (shortened form of briciolo)",
                },
                {
                  word: "sale",
                  lemma: "sale",
                  pos: "noun",
                  meaning: "salt / wit / wisdom",
                },
              ],
              grammarNote: "'Sale' (salt) is proverbial in Italian and Latin ('sales') for wit and intelligence ('sale in zucca'). Without Falstaff, these simple townsfolk would have no wit at all.",
            },
            {
              id: "a3_s2_c140_l5",
              original: "Son io che vi fa scaltri.",
              literal: "It is I who make you shrewd.",
              tokens: [
                {
                  word: "Son",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "I am (1st sing. present, shortened form of sono)",
                },
                {
                  word: "io",
                  lemma: "io",
                  pos: "pronoun",
                  meaning: "I",
                },
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (plural direct object clitic)",
                },
                {
                  word: "fa",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "makes (3rd sing. present agreeing with relative pronoun che)",
                },
                {
                  word: "scaltri",
                  lemma: "scaltro",
                  pos: "adjective",
                  meaning: "shrewd / clever / sharp",
                },
              ],
              grammarNote: "Boito's magnificent Italian translation of Shakespeare's famous line ('I am not only witty in myself, but the cause that wit is in other men'). Falstaff asserts intellectual superiority over his persecutors.",
            },
            {
              id: "a3_s2_c140_l6",
              original: "L'arguzia mia crea l'arguzia degli altri.",
              literal: "My wit creates the wit of the others.",
              tokens: [
                {
                  word: "arguzia",
                  lemma: "arguzia",
                  pos: "noun",
                  meaning: "wit / sharp humor / cleverness",
                },
                {
                  word: "mia",
                  lemma: "mio",
                  pos: "adjective",
                  meaning: "my",
                },
                {
                  word: "crea",
                  lemma: "creare",
                  pos: "verb",
                  meaning: "creates (3rd sing. present)",
                },
                {
                  word: "degli",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + gli)",
                },
                {
                  word: "altri",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "others",
                },
              ],
              grammarNote: "The crowning philosophical declaration of Falstaff's character: his boundless wit inspires and animates the humor of everyone around him.",
            },
          ],
        },
        {
          id: "a3_s2_c141",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c141_l1",
              original: "Ma bravo!",
              literal: "Well, bravo!",
              tokens: [
                {
                  word: "Ma",
                  lemma: "ma",
                  pos: "conjunction",
                  meaning: "well / but",
                },
                {
                  word: "bravo",
                  lemma: "bravo",
                  pos: "interjection",
                  meaning: "bravo / well done",
                },
              ],
              grammarNote: "The crowd and conspirators are forced to admire Falstaff's irrepressible wit and audacity.",
            },
            {
              id: "a3_s2_c141_l2",
              original: "FORD Per gli dèi!",
              literal: "FORD: By the gods!",
              tokens: [
                {
                  word: "FORD",
                  lemma: "Ford",
                  pos: "noun",
                  meaning: "Ford",
                },
                {
                  word: "Per",
                  lemma: "per",
                  pos: "preposition",
                  meaning: "by / for",
                },
                {
                  word: "dèi",
                  lemma: "dio",
                  pos: "noun",
                  meaning: "gods (plural of dio)",
                },
              ],
              grammarNote: "Ford swears by the gods in exasperated admiration of Falstaff's sheer nerve.",
            },
            {
              id: "a3_s2_c141_l3",
              original: "Se non ridessi ti sconquasserei!",
              literal: "If I weren't laughing I would smash you to pieces!",
              tokens: [
                {
                  word: "ridessi",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "I laughed / were laughing (1st sing. imperfect subjunctive)",
                },
                {
                  word: "ti",
                  lemma: "ti",
                  pos: "pronoun",
                  meaning: "you (2nd sing. direct object clitic)",
                },
                {
                  word: "sconquasserei",
                  lemma: "sconquassare",
                  pos: "verb",
                  meaning: "I would smash / shatter / batter (1st sing. conditional)",
                },
              ],
              grammarNote: "Hypothetical period of unreality: imperfect subjunctive ('ridessi') + present conditional ('sconquasserei'). Ford admits that Falstaff's humor disarms his wrath.",
            },
          ],
        },
        {
          id: "a3_s2_c142",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c142_l1",
              original: "Ma basta. Ed ora vo' che m'ascoltiate.",
              literal: "But enough. And now I want you to listen to me.",
              tokens: [
                {
                  word: "basta",
                  lemma: "bastare",
                  pos: "verb",
                  meaning: "it is enough / that will do (3rd sing. present)",
                },
                {
                  word: "vo'",
                  lemma: "volere",
                  pos: "verb",
                  meaning: "I want (shortened form of voglio with apostrophe)",
                },
                {
                  word: "m'",
                  lemma: "mi",
                  pos: "pronoun",
                  meaning: "me (direct object clitic elided)",
                },
                {
                  word: "ascoltiate",
                  lemma: "ascoltare",
                  pos: "verb",
                  meaning: "you listen to (2nd pers. plur. present subjunctive)",
                },
              ],
              grammarNote: "Ford calls for order to stage his own planned trick. 'Vo'' is the apocopated form of 'voglio', taking a subjunctive clause ('che m'ascoltiate').",
            },
            {
              id: "a3_s2_c142_l2",
              original: "Coronerem la mascherata bella",
              literal: "We shall crown the lovely masquerade",
              tokens: [
                {
                  word: "Coronerem",
                  lemma: "coronare",
                  pos: "verb",
                  meaning: "we shall crown (1st pers. plur. future, shortened form of coroneremo)",
                },
                {
                  word: "mascherata",
                  lemma: "mascherata",
                  pos: "noun",
                  meaning: "masquerade / masked revel",
                },
                {
                  word: "bella",
                  lemma: "bello",
                  pos: "adjective",
                  meaning: "beautiful / lovely / fine",
                },
              ],
              grammarNote: "Ford announces the culmination of the night's revels: the wedding ceremony he believes will marry Dr. Caius to Nannetta.",
            },
            {
              id: "a3_s2_c142_l3",
              original: "co' gli sponsali della",
              literal: "with the nuptials of the",
              tokens: [
                {
                  word: "co'",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with (archaic poetic contraction of con)",
                },
                {
                  word: "sponsali",
                  lemma: "sponsali",
                  pos: "noun",
                  meaning: "nuptials / espousals / wedding",
                },
                {
                  word: "della",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + la)",
                },
              ],
              grammarNote: "'Co'' is an archaic contraction of 'con'. 'Sponsali' (espousals/wedding) belongs to elevated, formal legal and poetic diction.",
            },
            {
              id: "a3_s2_c142_l4",
              original: "regina delle fate.",
              literal: "queen of the fairies.",
              tokens: [
                {
                  word: "regina",
                  lemma: "regina",
                  pos: "noun",
                  meaning: "queen",
                },
                {
                  word: "delle",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + le)",
                },
                {
                  word: "fate",
                  lemma: "fata",
                  pos: "noun",
                  meaning: "fairies",
                },
              ],
              grammarNote: "Nannetta was disguised as the Fairy Queen in Act III; Ford believes she is the bride being led forward.",
            },
          ],
        },
        {
          id: "a3_s2_c143",
          speaker: "Ford",
          stageDirection: "il Dr. Cajus e Bardolfo, vestito da regina delle fate col viso coperto da un velo, s'avanzano lentamente tenendosi per mano. Il Dr. Cajus ha la maschera sul volto",
          stageDirectionTranslation: "Dr. Caius and Bardolfo, dressed as Queen of the Fairies with his face veiled, advance slowly holding hands. Dr. Caius wears a mask over his face",
          lines: [
          ],
        },
        {
          id: "a3_s2_c144",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c144_l1",
              original: "Già s'avanza la coppia degli sposi.",
              literal: "Already the bridal pair advances.",
              tokens: [
                {
                  word: "Già",
                  lemma: "già",
                  pos: "adverb",
                  meaning: "already",
                },
                {
                  word: "s'avanza",
                  lemma: "avanzarsi",
                  pos: "verb",
                  meaning: "advances / steps forward (3rd sing. present reflexive)",
                },
                {
                  word: "coppia",
                  lemma: "coppia",
                  pos: "noun",
                  meaning: "couple / pair",
                },
                {
                  word: "degli",
                  lemma: "di",
                  pos: "preposition",
                  meaning: "of the (di + gli)",
                },
                {
                  word: "sposi",
                  lemma: "sposo",
                  pos: "noun",
                  meaning: "spouses / bridal pair / newlyweds",
                },
              ],
              grammarNote: "Ford points out the approaching masked pair (unaware that Quickly has substituted Bardolfo under the fairy veil).",
            },
            {
              id: "a3_s2_c144_l2",
              original: "Attenti!",
              literal: "Attention!",
              tokens: [
                {
                  word: "Attenti",
                  lemma: "attento",
                  pos: "adjective",
                  meaning: "attentive / careful (used as plural imperative interjection)",
                },
              ],
              grammarNote: "Ford commands silence and vigilance from the assembled throng.",
            },
          ],
        },
        {
          id: "a3_s2_c145",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c145_l1",
              original: "Attenti!",
              literal: "Attention!",
              tokens: [
                {
                  word: "Attenti",
                  lemma: "attento",
                  pos: "adjective",
                  meaning: "attentive / careful (used as plural imperative interjection)",
                },
              ],
              grammarNote: "Ford commands silence and vigilance from the assembled throng.",
            },
          ],
        },
        {
          id: "a3_s2_c146",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c146_l1",
              original: "Eccola, in bianca vesta",
              literal: "Here she is, in white garment",
              tokens: [
                {
                  word: "Eccola",
                  lemma: "ecco",
                  pos: "adverb",
                  meaning: "here she is (presentative ecco + feminine clitic la)",
                },
                {
                  word: "in",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in",
                },
                {
                  word: "bianca",
                  lemma: "bianco",
                  pos: "adjective",
                  meaning: "white",
                },
                {
                  word: "vesta",
                  lemma: "vesta",
                  pos: "noun",
                  meaning: "garment / dress / robe (poetic form of veste)",
                },
              ],
              grammarNote: "Ford recognizes the pre-arranged white dress of the Fairy Queen, unaware that Bardolfo is disguised within it.",
            },
            {
              id: "a3_s2_c146_l2",
              original: "col velo e il serto delle rose in testa",
              literal: "with the veil and the garland of roses on her head",
              tokens: [
                {
                  word: "velo",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veil",
                },
                {
                  word: "serto",
                  lemma: "serto",
                  pos: "noun",
                  meaning: "wreath / garland (poetic)",
                },
                {
                  word: "rose",
                  lemma: "rosa",
                  pos: "noun",
                  meaning: "roses",
                },
                {
                  word: "testa",
                  lemma: "testa",
                  pos: "noun",
                  meaning: "head",
                },
              ],
              grammarNote: "Ford details the precise costume tokens he had instructed Caius to look for, which the merry wives have cleverly shifted onto Bardolfo.",
            },
            {
              id: "a3_s2_c146_l3",
              original: "e il fidanzato suo ch'io le disposi.",
              literal: "and her betrothed whom I arranged for her.",
              tokens: [
                {
                  word: "fidanzato",
                  lemma: "fidanzato",
                  pos: "noun",
                  meaning: "betrothed / fiancé",
                },
                {
                  word: "ch'",
                  lemma: "che",
                  pos: "pronoun",
                  meaning: "whom (relative pronoun elided before vowel)",
                },
                {
                  word: "le",
                  lemma: "le",
                  pos: "pronoun",
                  meaning: "for her (indirect object clitic)",
                },
                {
                  word: "disposi",
                  lemma: "disporre",
                  pos: "verb",
                  meaning: "I arranged / assigned (passato remoto 1st sing.)",
                },
              ],
              grammarNote: "Ford gloats over his paternal authority in arranging Dr. Caius as Nannetta's groom ('ch'io le disposi').",
            },
            {
              id: "a3_s2_c146_l4",
              original: "Circondatela, o ninfe.",
              literal: "Surround her, o nymphs.",
              tokens: [
                {
                  word: "Circondatela",
                  lemma: "circondare",
                  pos: "verb",
                  meaning: "surround her (2nd pers. plur. imperative + clitic la)",
                },
                {
                  word: "o",
                  lemma: "o",
                  pos: "interjection",
                  meaning: "o / oh (vocative particle)",
                },
                {
                  word: "ninfe",
                  lemma: "ninfa",
                  pos: "noun",
                  meaning: "nymphs",
                },
              ],
              grammarNote: "Ford directs the masquerading nymphs and spirits to encircle the bridal couple.",
            },
          ],
        },
        {
          id: "a3_s2_c147",
          speaker: "Ford",
          stageDirection: "il Dr. Cajus e Bardolfo si collocano nel mezzo: le fate grandi e piccole li circondano",
          stageDirectionTranslation: "Dr. Caius and Bardolfo position themselves in the center; the fairies, large and small, surround them",
          lines: [
          ],
        },
        {
          id: "a3_s2_c148",
          speaker: "Alice Ford",
          stageDirection: "presentando Nannetta e Fenton entrati da pochi istanti. Nannetta ha un gran velo celeste che la copre tutta. Fenton ha la maschera e la cappa",
          stageDirectionTranslation: "presenting Nannetta and Fenton, who entered moments ago. Nannetta wears a large sky-blue veil covering her completely. Fenton wears a mask and cloak",
          lines: [
            {
              id: "a3_s2_c148_l1",
              original: "Un'altra coppia",
              literal: "Another couple",
              tokens: [
                {
                  word: "Un'altra",
                  lemma: "altro",
                  pos: "adjective",
                  meaning: "another (feminine with apostrophe before vowel)",
                },
                {
                  word: "coppia",
                  lemma: "coppia",
                  pos: "noun",
                  meaning: "couple / pair",
                },
              ],
              grammarNote: "Alice steps forward with the second disguised couple (Fenton and Nannetta), setting up the counter-trap for Ford.",
            },
            {
              id: "a3_s2_c148_l2",
              original: "d'amanti desïosi",
              literal: "of eager lovers",
              tokens: [
                {
                  word: "amanti",
                  lemma: "amante",
                  pos: "noun",
                  meaning: "lovers",
                },
                {
                  word: "desïosi",
                  lemma: "desioso",
                  pos: "adjective",
                  meaning: "longing / eager / desirous (with poetic dieresis desïosi)",
                },
              ],
              grammarNote: "Alice describes Fenton and Nannetta poetically with the archaic/lyric form 'desïosi' (four syllables, marked by dieresis).",
            },
            {
              id: "a3_s2_c148_l3",
              original: "chiede d'essere ammessa agli augurosi",
              literal: "asks to be admitted to the auspicious",
              tokens: [
                {
                  word: "chiede",
                  lemma: "chiedere",
                  pos: "verb",
                  meaning: "asks / requests (3rd sing. present)",
                },
                {
                  word: "ammessa",
                  lemma: "ammettere",
                  pos: "verb",
                  meaning: "admitted (past participle feminine singular)",
                },
                {
                  word: "augurosi",
                  lemma: "auguroso",
                  pos: "adjective",
                  meaning: "auspicious / propitious / blessed",
                },
              ],
              grammarNote: "Alice uses formal, ceremonial diction ('augurosi connubi') to coax Ford into blessing both marriages simultaneously.",
            },
            {
              id: "a3_s2_c148_l4",
              original: "connubi!",
              literal: "nuptials!",
              tokens: [
                {
                  word: "connubi",
                  lemma: "connubio",
                  pos: "noun",
                  meaning: "nuptials / marriages / wedlock",
                },
              ],
              grammarNote: "'Connubio' (plural 'connubi') is elevated Latinate poetic diction for marriage.",
            },
          ],
        },
        {
          id: "a3_s2_c149",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c149_l1",
              original: "E sia. Farem la festa doppia.",
              literal: "So be it. We shall make the feast a double one.",
              tokens: [
                {
                  word: "E sia",
                  lemma: "essere",
                  pos: "idiom",
                  meaning: "so be it / let it be (subjunctive idiom)",
                },
                {
                  word: "Farem",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "we shall make (future 1st pers. plur., shortened form of faremo)",
                },
                {
                  word: "festa",
                  lemma: "festa",
                  pos: "noun",
                  meaning: "celebration / feast",
                },
                {
                  word: "doppia",
                  lemma: "doppio",
                  pos: "adjective",
                  meaning: "double",
                },
              ],
              grammarNote: "In his smug confidence, Ford eagerly agrees to double the wedding celebration, unwittingly walking directly into Alice's trap.",
            },
            {
              id: "a3_s2_c149_l2",
              original: "Avvicinate i lumi.",
              literal: "Bring near the lanterns.",
              tokens: [
                {
                  word: "Avvicinate",
                  lemma: "avvicinare",
                  pos: "verb",
                  meaning: "bring closer / near (2nd pers. plur. imperative)",
                },
                {
                  word: "lumi",
                  lemma: "lume",
                  pos: "noun",
                  meaning: "lights / lanterns / candles",
                },
              ],
              grammarNote: "Ford orders the torches and lanterns brought close to illuminate the climax of the ceremony.",
            },
          ],
        },
        {
          id: "a3_s2_c150",
          speaker: "Ford",
          stageDirection: "i folletti guidati da Alice si avvicinano co' le loro lanterne",
          stageDirectionTranslation: "the goblins led by Alice approach with their lanterns",
          lines: [
          ],
        },
        {
          id: "a3_s2_c151",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c151_l1",
              original: "Il ciel v'accoppia.",
              literal: "Heaven unites you.",
              tokens: [
                {
                  word: "ciel",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "heaven / sky (shortened form of cielo)",
                },
                {
                  word: "v'",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (plural direct object clitic elided)",
                },
                {
                  word: "accoppia",
                  lemma: "accoppiare",
                  pos: "verb",
                  meaning: "couples / unites / pairs (3rd sing. present)",
                },
              ],
              grammarNote: "Ford pronounces the binding paternal blessing: 'Heaven unites you', legally sealing both marriages.",
            },
          ],
        },
        {
          id: "a3_s2_c152",
          speaker: "Ford",
          stageDirection: "Ford è davanti alle due coppie. Alice prenderà in braccio il più piccolo dei ragazzetti che sarà mascherato da spiritello, e farà in modo che la lanterna che tiene in mano illumini in pieno la faccia di Bardolfo appena questi resterà senza il velo che lo nasconde. Un altro spiritello guidato da Meg illuminerà Nannetta e Fenton",
          stageDirectionTranslation: "Ford is in front of the two couples. Alice will take into her arms the smallest of the boys disguised as a sprite, and will arrange so that the lantern she holds shines full on Bardolfo's face as soon as he is stripped of the veil hiding him. Another sprite led by Meg will illuminate Nannetta and Fenton",
          lines: [
          ],
        },
        {
          id: "a3_s2_c153",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c153_l1",
              original: "Giù le maschere e i veli. Apoteosi!",
              literal: "Down with the masks and veils. Apotheosis!",
              tokens: [
                {
                  word: "Giù",
                  lemma: "giù",
                  pos: "adverb",
                  meaning: "down",
                },
                {
                  word: "maschere",
                  lemma: "maschera",
                  pos: "noun",
                  meaning: "masks",
                },
                {
                  word: "veli",
                  lemma: "velo",
                  pos: "noun",
                  meaning: "veils",
                },
                {
                  word: "Apoteosi",
                  lemma: "apoteosi",
                  pos: "noun",
                  meaning: "apotheosis / grand culmination / triumph",
                },
              ],
              grammarNote: "Ford theatrically calls for the grand revelation ('Apoteosi!'), expecting Caius and Nannetta to emerge.",
            },
          ],
        },
        {
          id: "a3_s2_c154",
          speaker: "Ford",
          stageDirection: "al comando di Ford rapidamente Fenton e il Dr. Cajus si tolgono la maschera. Nannetta si toglie il velo e Quickly toglie il velo a Bardolfo: tutti rimangono a viso scoperto",
          stageDirectionTranslation: "at Ford's command, Fenton and Dr. Caius quickly remove their masks. Nannetta takes off her veil and Quickly unmasks Bardolfo: everyone remains with uncovered face",
          lines: [
          ],
        },
        {
          id: "a3_s2_c155",
          speaker: "All",
          stageDirection: "tranne Ford e il Dr. Cajus ridendo",
          stageDirectionTranslation: "except Ford and Dr. Caius, laughing",
          lines: [
            {
              id: "a3_s2_c155_l1",
              original: "Ah! Ah! Ah! Ah!",
              literal: "Ha! Ha! Ha! Ha!",
              tokens: [
                {
                  word: "Ah",
                  lemma: "ah",
                  pos: "interjection",
                  meaning: "ha / ah (burst of collective laughter)",
                },
              ],
              grammarNote: "Wild, uncontrollable laughter sweeps through the assembly as the unmasked couples are revealed.",
            },
          ],
        },
        {
          id: "a3_s2_c156",
          speaker: "Dr. Caius",
          stageDirection: "riconoscendo Bardolfo, immobilizzato dalla sorpresa",
          stageDirectionTranslation: "recognizing Bardolfo, paralyzed with astonishment",
          lines: [
            {
              id: "a3_s2_c156_l1",
              original: "Spavento!",
              literal: "Horror!",
              tokens: [
                {
                  word: "Spavento",
                  lemma: "spavento",
                  pos: "noun",
                  meaning: "fright / terror / horror",
                },
              ],
              grammarNote: "Dr. Caius recoils in horror upon seeing that his 'bride' beneath the veil is the drunken, red-nosed Bardolfo.",
            },
          ],
        },
        {
          id: "a3_s2_c157",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c157_l1",
              original: "Tradimento!",
              literal: "Treason!",
              tokens: [
                {
                  word: "Tradimento",
                  lemma: "tradimento",
                  pos: "noun",
                  meaning: "betrayal / treachery / treason",
                },
              ],
              grammarNote: "Ford gasps in dismay as he realizes he has been completely outwitted and duped into marrying his daughter to Fenton.",
            },
            {
              id: "a3_s2_c157_l2",
              original: "GLI ALTRI",
              literal: "THE OTHERS",
              tokens: [
                {
                  word: "GLI ALTRI",
                  lemma: "gli altri",
                  pos: "pronoun",
                  meaning: "the others (chorus / rest of the company)",
                },
                {
                  word: "ALTRI",
                  lemma: "altro",
                  pos: "pronoun",
                  meaning: "others",
                },
              ],
              grammarNote: "Score and libretto rubric indicating the chorus ('THE OTHERS') shouting in response.",
            },
          ],
        },
        {
          id: "a3_s2_c158",
          speaker: "Ford",
          stageDirection: "ridendo",
          stageDirectionTranslation: "laughing",
          lines: [
            {
              id: "a3_s2_c158_l1",
              original: "Apoteosi!",
              literal: "Apotheosis!",
              tokens: [
                {
                  word: "Apoteosi",
                  lemma: "apoteosi",
                  pos: "noun",
                  meaning: "apotheosis / glorious triumph",
                },
              ],
              grammarNote: "The crowd mockingly throws Ford's own triumphant word ('Apoteosi!') back at him.",
            },
          ],
        },
        {
          id: "a3_s2_c159",
          speaker: "Ford",
          stageDirection: "guardando l'altra coppia",
          stageDirectionTranslation: "looking at the other couple",
          lines: [
            {
              id: "a3_s2_c159_l1",
              original: "Fenton con mia figlia!",
              literal: "Fenton with my daughter!",
              tokens: [
                {
                  word: "Fenton",
                  lemma: "Fenton",
                  pos: "noun",
                  meaning: "Fenton",
                },
                {
                  word: "con",
                  lemma: "con",
                  pos: "preposition",
                  meaning: "with",
                },
                {
                  word: "figlia",
                  lemma: "figlia",
                  pos: "noun",
                  meaning: "daughter",
                },
              ],
              grammarNote: "Ford realizes to his dismay that the second couple he just solemnly blessed was none other than Fenton and Nannetta.",
            },
          ],
        },
        {
          id: "a3_s2_c160",
          speaker: "Dr. Caius",
          stageDirection: "esterrefatto",
          stageDirectionTranslation: "dumbfounded",
          lines: [
            {
              id: "a3_s2_c160_l1",
              original: "Ho sposato Bardolfo!",
              literal: "I have married Bardolfo!",
              tokens: [
                {
                  word: "Ho sposato",
                  lemma: "sposare",
                  pos: "verb",
                  meaning: "I have married (passato prossimo 1st sing.)",
                },
                {
                  word: "Bardolfo",
                  lemma: "Bardolfo",
                  pos: "noun",
                  meaning: "Bardolfo",
                },
              ],
              grammarNote: "Dr. Caius shrieks in disbelief at his horrifying discovery: instead of young Nannetta, he has wed Falstaff's scoundrel follower Bardolfo.",
            },
          ],
        },
        {
          id: "a3_s2_c161",
          speaker: "All",
          lines: [
            {
              id: "a3_s2_c161_l1",
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
          id: "a3_s2_c162",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a3_s2_c162_l1",
              original: "Spavento!",
              literal: "Horror!",
              tokens: [
                {
                  word: "Spavento",
                  lemma: "spavento",
                  pos: "noun",
                  meaning: "fright / terror / horror",
                },
              ],
              grammarNote: "Dr. Caius recoils in horror upon seeing that his 'bride' beneath the veil is the drunken, red-nosed Bardolfo.",
            },
            {
              id: "a3_s2_c162_l2",
              original: "LE DONNE",
              literal: "The women",
              tokens: [
                {
                  word: "LE",
                  lemma: "il",
                  pos: "particle",
                  meaning: "the (feminine plural article)",
                },
                {
                  word: "DONNE",
                  lemma: "donna",
                  pos: "noun",
                  meaning: "women",
                },
              ],
              grammarNote: "Choral heading for the women taking up the mock-liturgical litany over Falstaff.",
            },
            {
              id: "a3_s2_c162_l3",
              original: "Vittoria!",
              literal: "Victory!",
              tokens: [
                {
                  word: "Vittoria",
                  lemma: "vittoria",
                  pos: "noun",
                  meaning: "victory / triumph",
                },
              ],
              grammarNote: "Alice and the women celebrate their complete victory over both Ford's rigid patriarchal scheme and Dr. Caius's unwanted suit.",
            },
          ],
        },
        {
          id: "a3_s2_c163",
          speaker: "All",
          stageDirection: "tranne Dr. Cajus e Ford",
          stageDirectionTranslation: "except Dr. Caius and Ford",
          lines: [
            {
              id: "a3_s2_c163_l1",
              original: "Evviva! Evviva!",
              literal: "Hurrah! Hurrah!",
              tokens: [
                {
                  word: "Evviva",
                  lemma: "evviva",
                  pos: "interjection",
                  meaning: "hurrah / long live / cheers",
                },
              ],
              grammarNote: "The entire company cheers the young lovers' triumph and the hilarious poetic justice.",
            },
          ],
        },
        {
          id: "a3_s2_c164",
          speaker: "Ford",
          stageDirection: "ancora sotto il colpo dello stupore",
          stageDirectionTranslation: "still reeling from shock",
          lines: [
            {
              id: "a3_s2_c164_l1",
              original: "Oh! Meraviglia!",
              literal: "Oh! Wonder!",
              tokens: [
                {
                  word: "Oh",
                  lemma: "oh",
                  pos: "interjection",
                  meaning: "oh",
                },
                {
                  word: "Meraviglia",
                  lemma: "meraviglia",
                  pos: "noun",
                  meaning: "wonder / marvel / astonishment",
                },
              ],
              grammarNote: "Ford stands dumbfounded, marveling at the audacity and perfection of Alice's scheme.",
            },
          ],
        },
        {
          id: "a3_s2_c165",
          speaker: "Alice Ford",
          stageDirection: "avvicinandosi a Ford",
          stageDirectionTranslation: "approaching to Ford",
          lines: [
            {
              id: "a3_s2_c165_l1",
              original: "L'uom cade spesso nelle reti ordite",
              literal: "Man often falls into the nets woven",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (shortened form of uomo)",
                },
                {
                  word: "cade",
                  lemma: "cadere",
                  pos: "verb",
                  meaning: "falls (3rd sing. present)",
                },
                {
                  word: "spesso",
                  lemma: "spesso",
                  pos: "adverb",
                  meaning: "often",
                },
                {
                  word: "reti",
                  lemma: "rete",
                  pos: "noun",
                  meaning: "nets / snares",
                },
                {
                  word: "ordite",
                  lemma: "ordire",
                  pos: "verb",
                  meaning: "woven / plotted / devised (past participle fem. plur.)",
                },
              ],
              grammarNote: "Alice delivers a moral axiom: people who plot deceptions often become trapped in snares of their own making.",
            },
            {
              id: "a3_s2_c165_l2",
              original: "dalle malizie sue.",
              literal: "by his own malice.",
              tokens: [
                {
                  word: "dalle",
                  lemma: "da",
                  pos: "preposition",
                  meaning: "by the (articulated prep. da + le)",
                },
                {
                  word: "malizie",
                  lemma: "malizia",
                  pos: "noun",
                  meaning: "malice / cunning tricks / sly schemes",
                },
                {
                  word: "sue",
                  lemma: "suo",
                  pos: "adjective",
                  meaning: "his own (possessive adjective)",
                },
              ],
              grammarNote: "Prepositional agent phrase dependent on 'ordite'. 'Malizia' here denotes sly plots and scheming calculations.",
            },
          ],
        },
        {
          id: "a3_s2_c166",
          speaker: "Sir John Falstaff",
          stageDirection: "avvicinandosi a Ford con un inchino ironico",
          stageDirectionTranslation: "approaching Ford with an ironic bow",
          lines: [
            {
              id: "a3_s2_c166_l1",
              original: "Caro buon messer Ford, ed ora, dite:",
              literal: "Dear good Master Ford, and now, tell:",
              tokens: [
                {
                  word: "Caro",
                  lemma: "caro",
                  pos: "adjective",
                  meaning: "dear",
                },
                {
                  word: "buon",
                  lemma: "buono",
                  pos: "adjective",
                  meaning: "good (shortened form of buono)",
                },
                {
                  word: "messer",
                  lemma: "messere",
                  pos: "noun",
                  meaning: "Master / Sir (archaic title of respect)",
                },
                {
                  word: "dite",
                  lemma: "dire",
                  pos: "verb",
                  meaning: "tell / say (imperative)",
                },
              ],
              grammarNote: "Falstaff seizes his moment of sweetest revenge, mimicking Ford's exact gloating tone from earlier in the scene.",
            },
            {
              id: "a3_s2_c166_l2",
              original: "lo scornato chi è?",
              literal: "who is the hoodwinked one?",
              tokens: [
                {
                  word: "scornato",
                  lemma: "scornato",
                  pos: "adjective",
                  meaning: "hoodwinked / mocked / deflated / disgraced (used as substantive noun)",
                },
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "who",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
              ],
              grammarNote: "Falstaff mirrors Ford's question 'il cornuto chi è?' (who is the cuckold?), substituting 'scornato' (shamed/duped) to turn the tables completely on Ford.",
            },
          ],
        },
        {
          id: "a3_s2_c167",
          speaker: "Ford",
          stageDirection: "accenna al Dr. Cajus",
          stageDirectionTranslation: "points to Dr. Caius",
          lines: [
            {
              id: "a3_s2_c167_l1",
              original: "Lui.",
              literal: "Him.",
              tokens: [
                {
                  word: "Lui",
                  lemma: "lui",
                  pos: "pronoun",
                  meaning: "he / him (3rd sing. masculine tonic pronoun)",
                },
              ],
              grammarNote: "Ford desperately deflects the blame and ridicule onto Dr. Caius.",
            },
          ],
        },
        {
          id: "a3_s2_c168",
          speaker: "Dr. Caius",
          stageDirection: "accenna a Ford",
          stageDirectionTranslation: "accenna to Ford",
          lines: [
            {
              id: "a3_s2_c168_l1",
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
          id: "a3_s2_c169",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c169_l1",
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
          id: "a3_s2_c170",
          speaker: "Dr. Caius",
          lines: [
            {
              id: "a3_s2_c170_l1",
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
          id: "a3_s2_c171",
          speaker: "Bardolfo",
          stageDirection: "accenna a Ford e al Dr. Cajus",
          stageDirectionTranslation: "motions toward Ford and Dr. Caius",
          lines: [
            {
              id: "a3_s2_c171_l1",
              original: "Voi.",
              literal: "You.",
              tokens: [
                {
                  word: "Voi",
                  lemma: "voi",
                  pos: "pronoun",
                  meaning: "you (2nd pers. plural / formal tonic pronoun)",
                },
              ],
              grammarNote: "Bardolfo chimes in cheekily from under his bridal veil, addressing Ford and Caius.",
            },
          ],
        },
        {
          id: "a3_s2_c172",
          speaker: "Fenton",
          stageDirection: "accenna pure a Ford e al Dr. Cajus",
          stageDirectionTranslation: "also motions toward Ford and Dr. Caius",
          lines: [
            {
              id: "a3_s2_c172_l1",
              original: "Lor.",
              literal: "Them.",
              tokens: [
                {
                  word: "Lor",
                  lemma: "loro",
                  pos: "pronoun",
                  meaning: "them / they (shortened form of loro)",
                },
              ],
              grammarNote: "Fenton gloats at the pair of disappointed intriguers, using the truncated tonic pronoun 'lor'.",
            },
          ],
        },
        {
          id: "a3_s2_c173",
          speaker: "Dr. Caius",
          stageDirection: "mettendosi con Ford",
          stageDirectionTranslation: "joining Ford",
          lines: [
            {
              id: "a3_s2_c173_l1",
              original: "Noi.",
              literal: "Us.",
              tokens: [
                {
                  word: "Noi",
                  lemma: "noi",
                  pos: "pronoun",
                  meaning: "we / us (1st pers. plural tonic pronoun)",
                },
              ],
              grammarNote: "Caius finally concedes that both he and Ford have been thoroughly hoodwinked together.",
            },
          ],
        },
        {
          id: "a3_s2_c174",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c174_l1",
              original: "Tutti e due.",
              literal: "Both of them.",
              tokens: [
                {
                  word: "Tutti e due",
                  lemma: "tutti e due",
                  pos: "idiom",
                  meaning: "both / both of them",
                },
              ],
              grammarNote: "Falstaff gloats triumphantly: not just one, but both Ford and Caius are the dupes.",
            },
          ],
        },
        {
          id: "a3_s2_c175",
          speaker: "Alice Ford",
          stageDirection: "mettendo Falstaff con Ford e il Dr. Cajus",
          stageDirectionTranslation: "placing Falstaff with Ford and Dr. Caius",
          lines: [
            {
              id: "a3_s2_c175_l1",
              original: "No. Tutti e tre.",
              literal: "No. All three.",
              tokens: [
                {
                  word: "No",
                  lemma: "no",
                  pos: "adverb",
                  meaning: "no",
                },
                {
                  word: "Tutti e tre",
                  lemma: "tutti e tre",
                  pos: "idiom",
                  meaning: "all three of you",
                },
              ],
              grammarNote: "Alice delivers the definitive verdict: Falstaff, Ford, and Caius have all three been outwitted by the women.",
            },
          ],
        },
        {
          id: "a3_s2_c176",
          speaker: "Alice Ford",
          stageDirection: "a Ford, mostrando Nannetta e Fenton",
          stageDirectionTranslation: "to Ford, showing Nannetta e Fenton",
          lines: [
            {
              id: "a3_s2_c176_l1",
              original: "Volgiti e mira quelle ansie leggiadre.",
              literal: "Turn around and behold those graceful anxieties.",
              tokens: [
                {
                  word: "Volgiti",
                  lemma: "volgersi",
                  pos: "verb",
                  meaning: "turn around (2nd sing. imperative + reflexive clitic ti)",
                },
                {
                  word: "mira",
                  lemma: "mirare",
                  pos: "verb",
                  meaning: "behold / gaze upon (2nd sing. imperative)",
                },
                {
                  word: "ansie",
                  lemma: "ansia",
                  pos: "noun",
                  meaning: "anxieties / eager yearnings",
                },
                {
                  word: "leggiadre",
                  lemma: "leggiadro",
                  pos: "adjective",
                  meaning: "graceful / charming / lovely",
                },
              ],
              grammarNote: "Alice appeals to Ford's paternal heart, directing his gaze toward his trembling daughter and her true love Fenton.",
            },
          ],
        },
        {
          id: "a3_s2_c177",
          speaker: "Nannetta",
          stageDirection: "a Ford, giungendo le mani",
          stageDirectionTranslation: "to Ford, giungendo le mani",
          lines: [
            {
              id: "a3_s2_c177_l1",
              original: "Perdonateci, padre.",
              literal: "Forgive us, father.",
              tokens: [
                {
                  word: "Perdonateci",
                  lemma: "perdonare",
                  pos: "verb",
                  meaning: "forgive us (2nd pers. plur./formal imperative + clitic ci)",
                },
                {
                  word: "padre",
                  lemma: "padre",
                  pos: "noun",
                  meaning: "father",
                },
              ],
              grammarNote: "Nannetta kneels before Ford, pleading for his fatherly forgiveness and blessing for her marriage to Fenton.",
            },
          ],
        },
        {
          id: "a3_s2_c178",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c178_l1",
              original: "Chi schivare non può la propria noia",
              literal: "Whoever cannot avoid his own misfortune",
              tokens: [
                {
                  word: "schivare",
                  lemma: "schivare",
                  pos: "verb",
                  meaning: "to avoid / shun / dodge (infinitive)",
                },
                {
                  word: "può",
                  lemma: "potere",
                  pos: "verb",
                  meaning: "can / is able (3rd sing. present)",
                },
                {
                  word: "propria",
                  lemma: "proprio",
                  pos: "adjective",
                  meaning: "one's own",
                },
                {
                  word: "noia",
                  lemma: "noia",
                  pos: "noun",
                  meaning: "annoyance / vexation / misfortune / trouble",
                },
              ],
              grammarNote: "Ford accepts defeat with philosophical grace: 'noia' here retains its archaic and literary sense of harm, grief, or vexation.",
            },
            {
              id: "a3_s2_c178_l2",
              original: "l'accetti di buon grado.",
              literal: "let him accept it with good grace.",
              tokens: [
                {
                  word: "l'",
                  lemma: "lo",
                  pos: "pronoun",
                  meaning: "it (direct object clitic elided)",
                },
                {
                  word: "accetti",
                  lemma: "accettare",
                  pos: "verb",
                  meaning: "let him accept / may he accept (3rd sing. present subjunctive)",
                },
                {
                  word: "di buon grado",
                  lemma: "di buon grado",
                  pos: "idiom",
                  meaning: "willingly / with good grace / gladly",
                },
              ],
              grammarNote: "Jussive/concessive subjunctive ('l'accetti') governing the idiomatic prepositional phrase 'di buon grado' (readily, graciously).",
            },
            {
              id: "a3_s2_c178_l3",
              original: "Facciamo il parentado",
              literal: "Let us make the family alliance",
              tokens: [
                {
                  word: "Facciamo",
                  lemma: "fare",
                  pos: "verb",
                  meaning: "let us make (1st pers. plur. imperative/subjunctive)",
                },
                {
                  word: "parentado",
                  lemma: "parentado",
                  pos: "noun",
                  meaning: "kinship / family alliance / in-law relationship",
                },
              ],
              grammarNote: "Ford blesses the union: 'fare il parentado' is a classic Italian expression for sealing a kinship tie through marriage.",
            },
            {
              id: "a3_s2_c178_l4",
              original: "e che il ciel vi dia gioia.",
              literal: "and may heaven give you joy.",
              tokens: [
                {
                  word: "ciel",
                  lemma: "cielo",
                  pos: "noun",
                  meaning: "heaven / sky (shortened poetic form)",
                },
                {
                  word: "vi",
                  lemma: "vi",
                  pos: "pronoun",
                  meaning: "you (plural indirect object clitic)",
                },
                {
                  word: "dia",
                  lemma: "dare",
                  pos: "verb",
                  meaning: "give / grant (3rd sing. present subjunctive)",
                },
                {
                  word: "gioia",
                  lemma: "gioia",
                  pos: "noun",
                  meaning: "joy / happiness",
                },
              ],
              grammarNote: "Subjunctive blessing ('che il ciel vi dia gioia' - may heaven grant you joy), conferring Ford's heartfelt paternal blessing upon Fenton and Nannetta.",
            },
          ],
        },
        {
          id: "a3_s2_c179",
          speaker: "All",
          stageDirection: "tranne il Dr. Cajus",
          stageDirectionTranslation: "except Dr. Caius",
          lines: [
            {
              id: "a3_s2_c179_l1",
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
          ],
        },
        {
          id: "a3_s2_c180",
          speaker: "Sir John Falstaff",
          lines: [
            {
              id: "a3_s2_c180_l1",
              original: "Un coro e terminiam la scena.",
              literal: "A chorus and let us end the scene.",
              tokens: [
                {
                  word: "coro",
                  lemma: "coro",
                  pos: "noun",
                  meaning: "chorus / ensemble",
                },
                {
                  word: "terminiam",
                  lemma: "terminare",
                  pos: "verb",
                  meaning: "let us end / finish (1st pers. plur. imperative, shortened form of terminiamo)",
                },
                {
                  word: "scena",
                  lemma: "scena",
                  pos: "noun",
                  meaning: "scene / stage",
                },
              ],
              grammarNote: "Falstaff breaks the fourth wall with theatrical metadrama, proposing to conclude the opera with a grand ensemble choral fugue.",
            },
          ],
        },
        {
          id: "a3_s2_c181",
          speaker: "Ford",
          lines: [
            {
              id: "a3_s2_c181_l1",
              original: "E poi con sir Falstaff, tutti, andiamo a cena.",
              literal: "And then with Sir Falstaff, all of us, let us go to dinner.",
              tokens: [
                {
                  word: "poi",
                  lemma: "poi",
                  pos: "adverb",
                  meaning: "then / afterwards",
                },
                {
                  word: "tutti",
                  lemma: "tutti",
                  pos: "pronoun",
                  meaning: "all / everyone",
                },
                {
                  word: "andiamo",
                  lemma: "andare",
                  pos: "verb",
                  meaning: "let us go (1st pers. plur. imperative)",
                },
                {
                  word: "cena",
                  lemma: "cena",
                  pos: "noun",
                  meaning: "dinner / supper",
                },
              ],
              grammarNote: "Ford graciously invites Falstaff and the entire town to feast together at his house, ending all rivalry in conviviality.",
            },
          ],
        },
        {
          id: "a3_s2_c182",
          speaker: "All",
          pieceTitle: "Tutto nel mondo è burla (Fuga finale)",
          lines: [
            {
              id: "a3_s2_c182_l1",
              original: "Tutto nel mondo è burla.",
              literal: "Everything in the world is a joke.",
              tokens: [
                {
                  word: "Tutto",
                  lemma: "tutto",
                  pos: "pronoun",
                  meaning: "everything / all",
                },
                {
                  word: "nel",
                  lemma: "in",
                  pos: "preposition",
                  meaning: "in the (in + il)",
                },
                {
                  word: "mondo",
                  lemma: "mondo",
                  pos: "noun",
                  meaning: "world",
                },
                {
                  word: "è",
                  lemma: "essere",
                  pos: "verb",
                  meaning: "is",
                },
                {
                  word: "burla",
                  lemma: "burla",
                  pos: "noun",
                  meaning: "joke / jest / prank / mockery",
                },
              ],
              grammarNote: "The opening subject of Verdi's supreme comic masterpiece fugue: Boito's summation of human comedy, declaring that all worldly vanities are but a jest.",
            },
            {
              id: "a3_s2_c182_l2",
              original: "L'uom è nato burlone,",
              literal: "Man is born a jester,",
              tokens: [
                {
                  word: "uom",
                  lemma: "uomo",
                  pos: "noun",
                  meaning: "man (shortened form of uomo)",
                },
                {
                  word: "è nato",
                  lemma: "nascere",
                  pos: "verb",
                  meaning: "is born (passato prossimo 3rd sing.)",
                },
                {
                  word: "burlone",
                  lemma: "burlone",
                  pos: "noun",
                  meaning: "jester / prankster / buffoon / joker",
                },
              ],
              grammarNote: "Continuation of the fugue subject: human nature is inherently foolish and jesting ('burlone').",
            },
            {
              id: "a3_s2_c182_l3",
              original: "la fede in cor gli ciurla,",
              literal: "faith wavers in his heart,",
              tokens: [
                {
                  word: "fede",
                  lemma: "fede",
                  pos: "noun",
                  meaning: "faith / trust",
                },
                {
                  word: "cor",
                  lemma: "core",
                  pos: "noun",
                  meaning: "heart (poetic shortened form of core/cuore)",
                },
                {
                  word: "gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "in him / his (dative of reference/possession)",
                },
                {
                  word: "ciurla",
                  lemma: "ciurlare",
                  pos: "verb",
                  meaning: "wobbles / wavers / reels (3rd sing. present)",
                },
              ],
              grammarNote: "'Ciurlare nel manico' is a Tuscan idiom meaning to waver or prove unsteady; here 'gli ciurla' describes how conviction and certainty totter within man's heart.",
            },
            {
              id: "a3_s2_c182_l4",
              original: "gli ciurla la ragione.",
              literal: "his reason wavers.",
              tokens: [
                {
                  word: "gli",
                  lemma: "egli",
                  pos: "pronoun",
                  meaning: "in him / his (dative of reference)",
                },
                {
                  word: "ciurla",
                  lemma: "ciurlare",
                  pos: "verb",
                  meaning: "wavers / staggers / spins (3rd sing. present)",
                },
                {
                  word: "ragione",
                  lemma: "ragione",
                  pos: "noun",
                  meaning: "reason / intellect",
                },
              ],
              grammarNote: "Parallel inversion with line 105: human reason reels and stumbles, helpless in the face of life's chaotic absurdities.",
            },
            {
              id: "a3_s2_c182_l5",
              original: "Tutti gabbati! Irride",
              literal: "All hoodwinked! Laughs at",
              tokens: [
                {
                  word: "Tutti",
                  lemma: "tutti",
                  pos: "pronoun",
                  meaning: "all / everyone",
                },
                {
                  word: "gabbati",
                  lemma: "gabbare",
                  pos: "verb",
                  meaning: "hoodwinked / mocked / duped (past participle plural)",
                },
                {
                  word: "Irride",
                  lemma: "irridere",
                  pos: "verb",
                  meaning: "mocks / laughs at / derides (3rd sing. present)",
                },
              ],
              grammarNote: "'Tutti gabbati!' (Everyone is fooled/hoodwinked!) is the universal verdict of the opera. Enjambment carries the verb 'irride' over to the next line.",
            },
            {
              id: "a3_s2_c182_l6",
              original: "l'un l'altro ogni mortal.",
              literal: "one another every mortal.",
              tokens: [
                {
                  word: "l'un l'altro",
                  lemma: "l'un l'altro",
                  pos: "pronoun",
                  meaning: "one another / each other (reciprocal pronoun)",
                },
                {
                  word: "ogni",
                  lemma: "ogni",
                  pos: "adjective",
                  meaning: "every / each",
                },
                {
                  word: "mortal",
                  lemma: "mortale",
                  pos: "noun",
                  meaning: "mortal / human being (shortened form of mortale)",
                },
              ],
              grammarNote: "Synthesizes the universal condition of mankind: every mortal mocks his neighbor, unaware that he too is equally foolish.",
            },
            {
              id: "a3_s2_c182_l7",
              original: "Ma ride ben chi ride",
              literal: "But he laughs well who laughs",
              tokens: [
                {
                  word: "ride",
                  lemma: "ridere",
                  pos: "verb",
                  meaning: "laughs (3rd sing. present)",
                },
                {
                  word: "ben",
                  lemma: "bene",
                  pos: "adverb",
                  meaning: "well (shortened form of bene)",
                },
                {
                  word: "chi",
                  lemma: "chi",
                  pos: "pronoun",
                  meaning: "he who / whoever (relative/indefinite pronoun)",
                },
              ],
              grammarNote: "Italian proverb: 'Ride bene chi ride l'ultimo' (He who laughs last laughs best), adapted by Boito into poetic octosyllable.",
            },
            {
              id: "a3_s2_c182_l8",
              original: "la risata final.",
              literal: "the final laugh.",
              tokens: [
                {
                  word: "risata",
                  lemma: "risata",
                  pos: "noun",
                  meaning: "laugh / burst of laughter",
                },
                {
                  word: "final",
                  lemma: "finale",
                  pos: "adjective",
                  meaning: "final (poetic shortened form of finale)",
                },
              ],
              grammarNote: "The final line of Giuseppe Verdi's operatic career: the ultimate triumph of laughter, wisdom, and compassionate comedy over tragedy.",
            },
          ],
        },
      ],
    },
  ]
};

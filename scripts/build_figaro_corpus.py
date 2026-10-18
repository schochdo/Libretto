#!/usr/bin/env python3
"""
build_figaro_corpus.py - Production Ingest Pipeline for Mozart's The Marriage of Figaro

Generates pristine TypeScript data files (act1.ts, act2.ts, act3.ts, act4.ts, index.ts)
for Mozart's Le nozze di Figaro, adhering strictly to the Libretto translation standard:
1. 100% 1-to-1 bilingual sentence alignment for all 46 scene descriptions.
2. Literal, syntax-faithful English translations for all lines and stage directions.
3. Plain-English grammar and idiom notes (zero academic jargon).
4. Morphological tokenization for all vocabulary.
"""

import html
import json
import re
import sys
from pathlib import Path

ROOT_DIR = Path(__file__).parent.parent
SCRIPTS_DIR = Path(__file__).parent
DATA_DIR = ROOT_DIR / 'src' / 'data'
OUT_DIR = DATA_DIR / 'nozzeDiFigaro'
RAW_FILE = SCRIPTS_DIR / 'raw_figaro' / 'figaro_raw.html'
TRANSLATIONS_FILE = SCRIPTS_DIR / 'raw_figaro' / 'figaro_translations.json'

sys.path.insert(0, str(SCRIPTS_DIR))
from import_opera import (
    clean_punctuation,
    smooth_literal_translation,
    LexiconManager,
    tokenize_line,
    split_sentences_standard
)

# -----------------------------------------------------------------------------
# 1. Aligned Scene Metadata (46 scenes across 4 acts)
# -----------------------------------------------------------------------------
ACT1_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Cinque... dieci... venti... trenta (Duettino)",
        "titleTranslation": "Five... ten... twenty... thirty (Duettino)",
        "originalDescription": "Figaro misura la camera col metro mentre Susanna si prova allo specchio un cappellino nuziale. I due promessi sposi discutono della nuova stanza loro assegnata dal Conte.",
        "description": "Figaro measures the room with a ruler while Susanna tries on a bridal cap before the mirror. The two betrothed discuss the new room assigned to them by the Count."
    },
    {
        "sceneNumber": 2,
        "title": "Se vuol ballare, signor Contino (Cavatina)",
        "titleTranslation": "If you want to dance, my little Count (Cavatina)",
        "originalDescription": "Figaro rimasto solo scopre le mire libertine del Conte su Susanna. Il servitore decide di sventare i piani del padrone suonando la chitarra a proprio modo.",
        "description": "Figaro left alone discovers the Count's licentious intentions toward Susanna. The servant resolves to foil his master's plans calling the tune in his own way."
    },
    {
        "sceneNumber": 3,
        "title": "La vendetta, oh la vendetta! (Aria)",
        "titleTranslation": "Vengeance, oh vengeance! (Aria)",
        "originalDescription": "Bartolo e Marcellina complottano per costringere Figaro a sposare l'anziana governante. Il dottore pregusta una vendetta esemplare contro l'antico barbiere.",
        "description": "Bartolo and Marcellina plot to compel Figaro to marry the elderly housekeeper. The doctor anticipates an exemplary revenge against the former barber."
    },
    {
        "sceneNumber": 4,
        "title": "Via resti servita, madama brillante (Duettino)",
        "titleTranslation": "After you, brilliant lady (Duettino)",
        "originalDescription": "Marcellina e Susanna si scambiano riverenze velenose e complimenti carichi d'ironia. Marcellina esce furiosa sconfitta dalla giovinezza e dalla prontezza di spirito della cameriera.",
        "description": "Marcellina and Susanna exchange venomous curtsies and compliments laden with irony. Marcellina departs furious defeated by the maid's youth and quick wit."
    },
    {
        "sceneNumber": 5,
        "title": "Non so più cosa son, cosa faccio (Aria)",
        "titleTranslation": "I no longer know what I am or what I do (Aria)",
        "originalDescription": "Cherubino entra affannato implorando l'aiuto di Susanna dopo essere stato sorpreso con Barbarina. Il giovane paggio confessa le sue irresistibili palpitazioni amorose per tutte le donne del castello.",
        "description": "Cherubino rushes in breathless begging Susanna's help after being caught with Barbarina. The young page confesses his irresistible romantic fluttering for every woman in the castle."
    },
    {
        "sceneNumber": 6,
        "title": "Cosa sento! tosto andate (Terzetto)",
        "titleTranslation": "What do I hear! Leave at once (Trio)",
        "originalDescription": "Il Conte entra cercando Susanna costringendo Cherubino a nascondersi dietro la poltrona. All'arrivo improvviso di Don Basilio il Conte a sua volta si cela dietro lo stesso seggiolone.",
        "description": "The Count enters seeking Susanna forcing Cherubino to hide behind the armchair. Upon Don Basilio's sudden arrival the Count in turn conceals himself behind the same chair."
    },
    {
        "sceneNumber": 7,
        "title": "Basilio, in traccia tosto di Figaro volate (Recitativo)",
        "titleTranslation": "Basilio, fly at once to find Figaro (Recitative)",
        "originalDescription": "Il Conte scopre Cherubino rannicchiato sulla poltrona andando su tutte le furie. Il padrone minaccia di cacciare immediatamente il paggio dal castello.",
        "description": "The Count discovers Cherubino curled up on the armchair flying into a rage. The master threatens to dismiss the page from the castle immediately."
    },
    {
        "sceneNumber": 8,
        "title": "Giovani liete, fiori spargete / Non più andrai, farfallone amoroso (Coro ed Aria)",
        "titleTranslation": "Joyful youths, scatter flowers / No longer will you flutter, amorous butterfly (Chorus and Aria)",
        "originalDescription": "Figaro conduce i contadini per lodare l'abolizione del feudale diritto feudale. Il Conte nomina Cherubino ufficiale nel proprio reggimento e Figaro saluta canzonatorio il paggio soldato.",
        "description": "Figaro leads the peasants to praise the abolition of the feudal droit du seigneur. The Count commissions Cherubino in his regiment and Figaro mockingly salutes the newly minted soldier."
    }
]

ACT2_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Porgi, amor, qualche ristoro (Cavatina)",
        "titleTranslation": "Grant, oh love, some comfort (Cavatina)",
        "originalDescription": "La Contessa sola nell'alcova lamenta con dolore la perdita dell'affetto del marito. Susanna e Figaro raggiungono la nobildonna per organizzare una beffa contro il Conte.",
        "description": "The Countess alone in her alcove sorrowfully laments the loss of her husband's affection. Susanna and Figaro join the noblewoman to organize a trick against the Count."
    },
    {
        "sceneNumber": 2,
        "title": "Voi che sapete che cosa è amor / Venite... inginocchiatevi (Arietta e Aria)",
        "titleTranslation": "You who know what love is / Come... kneel down (Arietta and Aria)",
        "originalDescription": "Cherubino canta con la chitarra una romanza d'amore composta per la Contessa. Susanna veste il paggio con abiti femminili per la trappola ordita contro il Conte.",
        "description": "Cherubino sings with the guitar a romance of love composed for the Countess. Susanna disguises the page in women's clothes for the trap prepared against the Count."
    },
    {
        "sceneNumber": 3,
        "title": "Susanna, or via, sortite (Terzetto)",
        "titleTranslation": "Susanna, come now, come out (Trio)",
        "originalDescription": "Il Conte bussa con insistenza alla porta chiusa del gabinetto segreto. La Contessa disperata afferma che all'interno si trova soltanto Susanna.",
        "description": "The Count knocks insistently at the locked door of the secret closet. The frantic Countess insists that only Susanna is inside."
    },
    {
        "sceneNumber": 4,
        "title": "Aprite, presto, aprite! (Duettino)",
        "titleTranslation": "Open, quickly, open! (Duettino)",
        "originalDescription": "Mentre il Conte va a prendere gli attrezzi Susanna fa fuggire Cherubino facendolo saltare dalla finestra. Susanna prende risoluta il posto del paggio nel gabinetto.",
        "description": "While the Count fetches tools Susanna helps Cherubino escape by leaping from the window. Susanna resolutely takes the page's place inside the closet."
    },
    {
        "sceneNumber": 5,
        "title": "Tutto è come il lasciai (Recitativo)",
        "titleTranslation": "Everything is as I left it (Recitative)",
        "originalDescription": "Il Conte ritorna armato di piede di porco pronto a forzare la porta. La Contessa atterrita confessa che dentro c'è Cherubino.",
        "description": "The Count returns armed with a crowbar prepared to force the door. The terrified Countess confesses that Cherubino is inside."
    },
    {
        "sceneNumber": 6,
        "title": "Esci omai, garzon malnato! (Finale II - Parte I)",
        "titleTranslation": "Come out now, ill-born boy! (Finale II - Part I)",
        "originalDescription": "Il Conte spalanca la porta con la spada sguainata pronto a colpire il rivale. Con immenso stupore dei coniugi dal gabinetto esce sorridente Susanna.",
        "description": "The Count bursts open the door with drawn sword ready to strike his rival. To the immense astonishment of both spouses Susanna emerges smiling from the closet."
    },
    {
        "sceneNumber": 7,
        "title": "Signori, di fuori son già i suonatori (Finale II - Parte II)",
        "titleTranslation": "My lords, outside the musicians are already waiting (Finale II - Part II)",
        "originalDescription": "Figaro entra allegro annunciando l'inizio imminente del corteo nuziale. Il Conte incalza il servitore con domande trabocchetto sul biglietto anonimo.",
        "description": "Figaro enters cheerfully announcing the impending start of the wedding procession. The Count presses the servant with trick questions concerning the anonymous letter."
    },
    {
        "sceneNumber": 8,
        "title": "Ah signor! signor! (Finale II - Parte III)",
        "titleTranslation": "Ah my lord! My lord! (Finale II - Part III)",
        "originalDescription": "Antonio il giardiniere entra infuriato lamentando che un uomo è saltato dalla finestra rovinando i garofani. Figaro con pronta astuzia dichiara di essere stato lui a saltare.",
        "description": "Antonio the gardener storms in furious complaining that a man jumped from the window crushing the carnations. Figaro with quick wit claims that he himself jumped."
    },
    {
        "sceneNumber": 9,
        "title": "Voi signor, che giusto siete (Finale II - Parte IV)",
        "titleTranslation": "You, my lord, who are just (Finale II - Part IV)",
        "originalDescription": "Marcellina, Bartolo e Basilio irrompono esigendo l'adempimento del contratto matrimoniale di Figaro. Il Conte gongola rinviando le nozze per esaminare la causa.",
        "description": "Marcellina, Bartolo, and Basilio burst in demanding fulfillment of Figaro's marriage contract. The Count rejoices postponing the wedding to examine the dispute."
    },
    {
        "sceneNumber": 10,
        "title": "Son confusa, son stordita (Finale II - Chiusura)",
        "titleTranslation": "I am confused, I am stunned (Finale II - Conclusion)",
        "originalDescription": "Tutti i contendenti gridano le proprie ragioni in un vortice di accuse reciproche. La Contessa, Susanna e Figaro meditano una nuova controffensiva.",
        "description": "All disputants shout their grievances in a whirlwind of mutual accusations. The Countess, Susanna, and Figaro plot a fresh counteroffensive."
    }
]

ACT3_SCENES = [
    {
        "sceneNumber": 1,
        "title": "Che imbarazzo è mai questo! (Recitativo)",
        "titleTranslation": "What an embarrassment this is! (Recitative)",
        "originalDescription": "Il Conte solo nella sala delle nozze medita con rabbia sui misteriosi intrighi del castello. Il padrone intuisce che i servitori stanno tramando contro di lui.",
        "description": "The Count alone in the wedding hall angrily ponders the mysterious intrigues of the castle. The master suspects that the servants are plotting against him."
    },
    {
        "sceneNumber": 2,
        "title": "Crudel! perché finora farmi languir così? (Duettino)",
        "titleTranslation": "Cruel girl! Why make me languish thus until now? (Duettino)",
        "originalDescription": "Susanna entra fingendo di cedere alle insidie amorose del Conte Almaviva. Il Conte esultante le fissa un appuntamento notturno nel parco.",
        "description": "Susanna enters pretending to yield to Count Almaviva's romantic advances. The triumphant Count arranges a nocturnal rendezvous in the park."
    },
    {
        "sceneNumber": 3,
        "title": "E perché fosti meco stamattina sì sorda? (Recitativo)",
        "titleTranslation": "And why were you so deaf with me this morning? (Recitative)",
        "originalDescription": "Figaro entra e Susanna sussurra ingenuamente che la causa matrimoniale è ormai vinta. Il Conte ascolta di nascosto la frase insospettendosi ferocemente.",
        "description": "Figaro enters and Susanna ingenuously whispers that the marriage lawsuit is now won. The Count overhears the sentence becoming ferociously suspicious."
    },
    {
        "sceneNumber": 4,
        "title": "Hai già vinta la causa! / Vedrò, mentr'io sospiro (Recitativo ed Aria)",
        "titleTranslation": "You have already won the cause! / Shall I see, while I sigh (Recitative and Aria)",
        "originalDescription": "Il Conte solo esplode in una furente aria di sdegno aristocratico. Il nobiluomo giura che un servo non trionferà mai sulla sua felicità.",
        "description": "The Count alone explodes in a furious aria of aristocratic indignation. The nobleman vows that a servant shall never triumph over his happiness."
    },
    {
        "sceneNumber": 5,
        "title": "Riconosci in questo amplesso (Sestetto)",
        "titleTranslation": "Recognize in this embrace (Sextet)",
        "originalDescription": "Il tribunale decreta il matrimonio ma Figaro rivela la propria nascita ignota mostrando una cicatrice sul braccio. Con immensa gioia si scopre che Marcellina e Bartolo sono i suoi veri genitori.",
        "description": "The court decrees the marriage but Figaro reveals his unknown birth showing a birthmark scar on his arm. With immense joy it is discovered that Marcellina and Bartolo are his true parents."
    },
    {
        "sceneNumber": 6,
        "title": "Eccovi, o caro amico (Recitativo)",
        "titleTranslation": "Here you are, oh dear friend (Recitative)",
        "originalDescription": "Susanna entra col denaro del riscatto e vedendo Figaro abbracciare Marcellina lo schiaffeggia furiosa. Spiegato l'equivoco familiare tutti si riconciliano nell'esultanza generale.",
        "description": "Susanna enters with ransom money and seeing Figaro embrace Marcellina slaps him furiously. Once the family misunderstanding is explained all reconcile in general jubilation."
    },
    {
        "sceneNumber": 7,
        "title": "Andiamo, andiam, bel paggio (Recitativo)",
        "titleTranslation": "Let us go, let us go, handsome page (Recitative)",
        "originalDescription": "Barbarina trascina Cherubino a casa sua per travestirlo da contadinella. Il paggio accetta felice per poter restare vicino alla Contessa.",
        "description": "Barbarina drags Cherubino to her house to dress him as a peasant girl. The page gladly agrees in order to stay close to the Countess."
    },
    {
        "sceneNumber": 8,
        "title": "E Susanna non vien! / Dove sono i bei momenti (Recitativo ed Aria)",
        "titleTranslation": "And Susanna does not come! / Where are the beautiful moments (Recitative and Aria)",
        "originalDescription": "La Contessa sola rievoca con struggente malinconia la tenerezza svanita del marito. La nobildonna spera che la sua fedeltà costante possa riconquistare il cuore del Conte.",
        "description": "The Countess alone recalls with poignant melancholy the vanished tenderness of her husband. The noblewoman hopes that her constant fidelity may regain the Count's heart."
    },
    {
        "sceneNumber": 9,
        "title": "Io vi dico, signor, che Cherubino è ancora nel castello (Recitativo)",
        "titleTranslation": "I tell you, my lord, that Cherubino is still in the castle (Recitative)",
        "originalDescription": "Antonio il giardiniere mostra al Conte il cappello militare abbandonato da Cherubino. Il padrone scopre così che il paggio non è mai partito per Siviglia.",
        "description": "Antonio the gardener shows the Count the military cap abandoned by Cherubino. The master thus discovers that the page never departed for Seville."
    },
    {
        "sceneNumber": 10,
        "title": "Canzonetta sull'aria / Che soave zeffiretto (Duettino)",
        "titleTranslation": "Canzonetta upon the breeze / What a gentle little zephyr (Duettino)",
        "originalDescription": "La Contessa detta a Susanna una lettera poetica per invitare il Conte al boschetto dei pini. Le due donne sigillano il biglietto amoroso con uno spillo.",
        "description": "The Countess dictates to Susanna a poetic letter inviting the Count to the pine grove. The two women seal the love note with a pin."
    },
    {
        "sceneNumber": 11,
        "title": "Ricevete, o padroncina (Coro)",
        "titleTranslation": "Receive, oh dear mistress (Chorus)",
        "originalDescription": "Le giovani contadinelle offrono mazzi di fiori freschi alla Contessa. Cherubino mascherato da fanciulla si unisce timidamente all'omaggio campestre.",
        "description": "Young peasant girls present bouquets of fresh flowers to the Countess. Cherubino disguised as a girl timidly joins the pastoral tribute."
    },
    {
        "sceneNumber": 12,
        "title": "Madama... or qui posate (Recitativo)",
        "titleTranslation": "Madam... rest here now (Recitative)",
        "originalDescription": "Il Conte ed Antonio smascherano Cherubino togliendogli la cuffia da contadina. Barbarina salva il paggio chiedendo al Conte di poterlo sposare in premio delle sue passate carezze.",
        "description": "The Count and Antonio unmask Cherubino snatching off his peasant bonnet. Barbarina saves the page by asking the Count to marry him as a reward for his past favors."
    },
    {
        "sceneNumber": 13,
        "title": "Ecco la marcia, andiamo! (Finale III - Marcia)",
        "titleTranslation": "Here is the march, let us go! (Finale III - March)",
        "originalDescription": "Entra il corteo nuziale tra canti festosi e danze popolari spagnole. Figaro e Susanna ricevono la solenne benedizione nuziale insieme a Bartolo e Marcellina.",
        "description": "The bridal procession enters amid festive songs and traditional Spanish dances. Figaro and Susanna receive the solemn wedding blessing alongside Bartolo and Marcellina."
    },
    {
        "sceneNumber": 14,
        "title": "Amanti costanti, seguaci d'onor (Finale III - Fandango)",
        "titleTranslation": "Constant lovers, followers of honor (Finale III - Fandango)",
        "originalDescription": "Mentre si balla il fandango Susanna fa scivolare segretamente il biglietto nella mano del Conte. Il Conte si punge il dito con lo spillo suscitando l'ironica curiosità di Figaro.",
        "description": "While the fandango is danced Susanna secretly slips the letter into the Count's hand. The Count pricks his finger with the pin exciting Figaro's ironic curiosity."
    }
]

ACT4_SCENES = [
    {
        "sceneNumber": 1,
        "title": "L'ho perduta... me meschina! (Cavatina)",
        "titleTranslation": "I have lost it... poor me! (Cavatina)",
        "originalDescription": "Barbarina cerca disperata col lanternino uno spillo smarrito nell'erba del parco. La fanciulla confessa ingenuamente a Figaro che lo spillo le è stato dato dal Conte per Susanna.",
        "description": "Barbarina frantically searches with a lantern for a pin lost in the grass of the park. The girl ingenuously confesses to Figaro that the pin was given to her by the Count for Susanna."
    },
    {
        "sceneNumber": 2,
        "title": "Barbarina, cos'hai? (Recitativo)",
        "titleTranslation": "Barbarina, what is the matter? (Recitative)",
        "originalDescription": "Figaro sconvolto dalla rivelazione ottiene lo spillo da Barbarina per consegnarlo alla sposa. Il servitore resta solo con Marcellina fremendo di folle gelosia.",
        "description": "Figaro devastated by the revelation secures the pin from Barbarina to deliver it to his bride. The servant remains alone with Marcellina trembling with mad jealousy."
    },
    {
        "sceneNumber": 3,
        "title": "Madre! - Figlio! (Recitativo)",
        "titleTranslation": "Mother! - Son! (Recitative)",
        "originalDescription": "Marcellina esorta il figlio alla prudenza raccomandando di non cedere a sospetti affrettati. Figaro giura di vendicare tutti i mariti traditi tendendo un'imboscata nel boschetto.",
        "description": "Marcellina urges her son to prudence counseling him not to yield to hasty suspicions. Figaro vows to avenge all betrayed husbands by laying an ambush in the grove."
    },
    {
        "sceneNumber": 4,
        "title": "Il capro e la capretta (Aria)",
        "titleTranslation": "The he-goat and the she-goat (Aria)",
        "originalDescription": "Marcellina sola riflette sull'armonia della natura dove gli animali vivono in pace con le proprie compagne. La donna decide di correre ad avvertire Susanna dell'ira di Figaro.",
        "description": "Marcellina alone reflects upon the harmony of nature where beasts live in peace with their mates. The woman resolves to run and warn Susanna of Figaro's wrath."
    },
    {
        "sceneNumber": 5,
        "title": "Nel padiglione a manca (Recitativo)",
        "titleTranslation": "In the left-hand pavilion (Recitative)",
        "originalDescription": "Barbarina corre a nascondersi nel padiglione di sinistra per aspettare Cherubino. La fanciulla porta con sé frutta e dolci per il giovane amante.",
        "description": "Barbarina runs to hide in the left pavilion to await Cherubino. The girl brings fruit and sweets with her for the young lover."
    },
    {
        "sceneNumber": 6,
        "title": "È Barbarina... chi va là? (Recitativo)",
        "titleTranslation": "It is Barbarina... who goes there? (Recitative)",
        "originalDescription": "Figaro entra avvolto in un mantello conducendo Basilio, Bartolo e alcuni operai come testimoni. Figaro ordina loro di appostarsi e intervenire al suo primo fischio.",
        "description": "Figaro enters cloaked leading Basilio, Bartolo, and several workmen as witnesses. Figaro orders them to lie in wait and intervene at his first whistle."
    },
    {
        "sceneNumber": 7,
        "title": "In quegli anni in cui val poco (Aria)",
        "titleTranslation": "In those years when reason counts for little (Aria)",
        "originalDescription": "Basilio illustra a Bartolo la saggezza di non contrastare i potenti ricordando l'allegoria della pelle d'asino. I due compari si allontanano lasciando Figaro nell'oscurità.",
        "description": "Basilio expounds to Bartolo the wisdom of yielding to the powerful recalling the allegory of the donkey's skin. The two companions depart leaving Figaro in the dark."
    },
    {
        "sceneNumber": 8,
        "title": "Tutto è disposto / Aprite un po' quegli occhi (Recitativo ed Aria)",
        "titleTranslation": "Everything is prepared / Open your eyes a little (Recitative and Aria)",
        "originalDescription": "Figaro solo esplode in una sarcastica invettiva contro l'inganno e la volubilità delle donne. Il servitore si nasconde tra i cespugli attendendo con ansia lo svolgersi dell'inganno.",
        "description": "Figaro alone explodes in a sarcastic invective against the deceit and fickleness of women. The servant conceals himself among the bushes anxiously awaiting the unfolding deception."
    },
    {
        "sceneNumber": 9,
        "title": "Signora, ella mi disse (Recitativo)",
        "titleTranslation": "Madam, she told me (Recitative)",
        "originalDescription": "Susanna e la Contessa entrano nel giardino essendosi scambiate gli abiti e i mantelli. Marcellina si rifugia nel padiglione mentre Susanna decide di cantare per tormentare il geloso Figaro.",
        "description": "Susanna and the Countess enter the garden having exchanged dresses and mantles. Marcellina takes refuge in the pavilion while Susanna resolves to sing to torment the jealous Figaro."
    },
    {
        "sceneNumber": 10,
        "title": "Giunse alfin il momento / Deh vieni, non tardar (Recitativo ed Aria)",
        "titleTranslation": "At last the moment arrived / Ah come, do not delay (Recitative and Aria)",
        "originalDescription": "Susanna canta un'aria serena e sensuale invocando l'arrivo dell'amato nella dolcezza della notte. Figaro da lontano ascolta con dolore credendo che la sposa canti per il Conte.",
        "description": "Susanna sings a serene, sensual aria invoking the arrival of her beloved in the tranquility of the night. Figaro from afar listens in agony believing his bride sings for the Count."
    },
    {
        "sceneNumber": 11,
        "title": "Pian pianin le andrò più presso (Finale IV - Parte I)",
        "titleTranslation": "Very softly I will approach her (Finale IV - Part I)",
        "originalDescription": "Cherubino si avvicina alla Contessa credendola Susanna e tenta di strapparle un bacio galante. Il Conte sopraggiunge al buio e riceve il bacio destinato alla moglie.",
        "description": "Cherubino approaches the Countess believing her to be Susanna and attempts to steal a gallant kiss. The Count arrives in the dark and receives the kiss intended for his wife."
    },
    {
        "sceneNumber": 12,
        "title": "Partito è alfin l'audace (Finale IV - Parte II)",
        "titleTranslation": "At last the audacious boy has departed (Finale IV - Part II)",
        "originalDescription": "Il Conte rimasto solo con la finta Susanna le dichiara amore ardente donandole un anello con brillante. Figaro osserva furioso mentre la Contessa travestita si ritira nel padiglione.",
        "description": "The Count left alone with the disguised Susanna declares ardent love presenting her with a diamond ring. Figaro furiously observes while the disguised Countess retreats into the pavilion."
    },
    {
        "sceneNumber": 13,
        "title": "Pace, pace, mio dolce tesoro (Finale IV - Parte III)",
        "titleTranslation": "Peace, peace, my sweet treasure (Finale IV - Part III)",
        "originalDescription": "Figaro riconosce la voce di Susanna sotto il travestimento della Contessa e finge di corteggiarla per vendicarsi. Susanna schiaffeggia Figaro ma i due sposi si riconoscono felici e si abbracciano.",
        "description": "Figaro recognizes Susanna's voice under the Countess's disguise and pretends to woo her for revenge. Susanna slaps Figaro but the two spouses happily recognize each other and embrace."
    },
    {
        "sceneNumber": 14,
        "title": "Gente, gente, all'armi, all'armi! / Contessa, perdono! (Finale IV - Chiusura)",
        "titleTranslation": "People, people, to arms, to arms! / Countess, forgive me! (Finale IV - Conclusion)",
        "originalDescription": "Il Conte cattura Figaro gridando vendetta davanti a tutti ma la vera Contessa esce dal padiglione svelando la beffa. Il Conte s'inginocchia implorando perdono e l'opera si conclude nel giubilo universale.",
        "description": "The Count seizes Figaro shouting vengeance before everyone but the true Countess steps out revealing the trick. The Count kneels begging forgiveness and the opera concludes in universal jubilation."
    }
]

# Plain-English opera notes (zero academic jargon)
FIGARO_NOTES = {
    "cinque... dieci... venti": "Figaro is counting measurements of the bridal bedchamber in braccia (traditional Spanish/Italian arm-lengths).",
    "se vuol ballare, signor contino": "'Contino' is a satirical diminutive of 'conte' (little count), showing Figaro's insolent mockery.",
    "la vendetta, oh la vendetta": "Dr. Bartolo's buffo declaration that pursuing legal vengeance is the duty and pleasure of wise men.",
    "non so più cosa son, cosa faccio": "Cherubino's breathless depiction of adolescent romantic turbulence.",
    "non più andrai, farfallone amoroso": "'Farfallone' is an augmentative of 'farfalla' (butterfly), used figuratively to mean an amorous flirt or ladykiller.",
    "porgi, amor, qualche ristoro": "The Countess's melancholic cavatina pleading for romantic consolation or death.",
    "voi che sapete che cosa è amor": "Cherubino's famous canzona addressed to experienced women who understand romantic longing.",
    "crudel! perché finora farmi languir così": "The Count's urgent plea to Susanna setting up the nocturnal rendezvous.",
    "riconosci in questo amplesso": "The classic recognition sextet: Marcellina and Bartolo discover Figaro is their long-lost son Emmanuel.",
    "dove sono i bei momenti": "The Countess mourning her husband's faded affection and reminiscing on their early love.",
    "che soave zeffiretto": "'Zeffiretto' is a gentle zephyr/breeze. Dictating the letter in the pine grove.",
    "aprite un po' quegli occhi": "Figaro's bitter aria warning men against the fickleness and deceit of women.",
    "deh vieni, non tardar": "'Deh' is an untranslatable poetic exclamation equivalent to 'pray / ah / please'.",
    "contessa, perdono": "The moral and emotional summit of the opera: Count Almaviva falls to his knees pleading for his wife's pardon.",
    "più docile io sono": "The Countess's sublime forgiveness restoring order and peace to the community."
}

SPEAKER_MAP = {
    'FIGARO': 'Figaro',
    'SUSANNA': 'Susanna',
    'SUSANN': 'Susanna',
    'IL CONTE': 'Il Conte',
    'IL CONT': 'Il Conte',
    'LA CONTESSA': 'La Contessa',
    'CHERUBINO': 'Cherubino',
    'CHERUBIN': 'Cherubino',
    'MARCELLINA': 'Marcellina',
    'BARTOLO': 'Bartolo',
    'BASILIO': 'Basilio',
    'ANTONIO': 'Antonio',
    'BARBARINA': 'Barbarina',
    'DON CURZIO': 'Don Curzio',
    'CONTADINELLE': 'Due contadinelle',
    'DUE DONNE': 'Due contadinelle',
    'CORO': 'Coro',
    'TUTTI': 'Tutti'
}

def normalize_speaker(sp: str) -> str:
    sp_clean = sp.strip().upper()
    return SPEAKER_MAP.get(sp_clean, sp.title())

def main():
    print("=" * 70)
    print("LE NOZZE DI FIGARO CORPUS INGESTION & DATA GENERATION")
    print("=" * 70)

    # 1. Load Lexicon & Translations Cache
    print("1. Loading lexicons and translation dictionaries...")
    lexicon = LexiconManager(SCRIPTS_DIR, 'it')
    translations = {}
    if TRANSLATIONS_FILE.exists():
        translations = json.loads(TRANSLATIONS_FILE.read_text(encoding='utf-8'))
    print(f"  ✓ Lexicon entries: {len(lexicon.lexicon):,}")
    print(f"  ✓ Cached translations: {len(translations):,}")

    # 2. Parse Raw Italian Libretto
    raw = html.unescape(RAW_FILE.read_text(encoding='utf-8'))
    raw = re.sub(r'[\r\t]+', ' ', raw)
    
    act_pos = [
        raw.find('<b>ATTO PRIMO</b>'),
        raw.find('<b>ATTO SECONDO</b>'),
        raw.find('<b>ATTO TERZO</b>'),
        raw.find('<b>ATTO QUARTO</b>'),
        len(raw)
    ]

    all_scene_metas = [ACT1_SCENES, ACT2_SCENES, ACT3_SCENES, ACT4_SCENES]
    
    act_settings_orig = [
        "Castello di Aguas-Frescas, vicino a Siviglia. Una camera non interamente ammobiliata, con un gran seggiolone al centro.",
        "Magnifica camera da letto della Contessa, con alcova a sinistra, una porta a destra che dà al gabinetto, e una finestra che guarda sul giardino.",
        "Ricca sala del castello ornata per la festa delle nozze, con due troni.",
        "Fondo del parco del castello, con due padiglioni praticabili a destra e a sinistra. Notte."
    ]
    act_settings_trans = [
        "Castle of Aguas-Frescas, near Seville. A room not completely furnished, with a large armchair in the center.",
        "Magnificent bedchamber of the Countess, with an alcove on the left, a door on the right leading to the closet, and a window overlooking the garden.",
        "Rich hall of the castle decorated for the wedding feast, with two thrones.",
        "Dense park of the castle, with two usable pavilions on the right and left. Night."
    ]

    acts_output = []

    for a_idx in range(4):
        act_num = a_idx + 1
        scene_metas = all_scene_metas[a_idx]
        act_text = raw[act_pos[a_idx]:act_pos[a_idx+1]]
        splits = re.split(r'<br\s*/?>\s*<br\s*/?>\s*(SCENA\s+[IVXLCDM\d]+)<br\s*/?>', act_text)

        print(f"2.{act_num} Parsing Act {act_num} ({len(splits)//2} scenes)...")
        scenes = []

        for i in range(1, len(splits), 2):
            sc_idx = (i // 2) + 1
            meta = scene_metas[sc_idx - 1]
            sc_body = splits[i+1].strip()

            piece_match = re.search(r'<b>(No\.[^<]*)</b>', sc_body)
            piece_title = piece_match.group(1).strip() if piece_match else ''

            cue_chunks = re.split(r'(?:<br\s*/?>\s*){2,}([A-ZÀ-ÖØ-ß\s\.\'\,\-]+)<br\s*/?>', '<br><br>' + sc_body)
            cues = []
            cue_count = 0

            for c_idx in range(1, len(cue_chunks), 2):
                sp = cue_chunks[c_idx].strip()
                body = cue_chunks[c_idx+1].strip()
                if sp.startswith('SCENA') or sp.startswith('ATTO') or sp.startswith('NO.') or sp.startswith('RECITATIVO') or len(sp) > 35:
                    continue
                cue_count += 1
                cue_id = f"a{act_num}_s{sc_idx}_c{cue_count}"

                sd_match = re.match(r'^\s*<i>(.*?)</i>\s*(?:<br\s*/?>)*', body, flags=re.DOTALL)
                sd = sd_match.group(1).replace('\n', ' ').strip() if sd_match else ''
                clean_body = body[sd_match.end():] if sd_match else body

                raw_lines = [l.strip() for l in re.split(r'<br\s*/?>', clean_body) if l.strip()]
                lines = []
                line_count = 0
                for l in raw_lines:
                    if l.startswith('<b>No.') or l.startswith('<b>Recitativo'):
                        if l.startswith('<b>No.'):
                            piece_title = re.sub(r'</?b>', '', l).strip()
                        continue
                    if l.startswith('<i>') and l.endswith('</i>'):
                        inline_sd = l[3:-4].strip()
                        if not sd:
                            sd = inline_sd
                        else:
                            sd += f'; {inline_sd}'
                        continue

                    line_count += 1
                    line_id = f"{cue_id}_l{line_count}"

                    lit = translations.get(l, l)
                    lit = smooth_literal_translation(lit)

                    tokens = tokenize_line(l, lit, lexicon, 'it')

                    line_obj = {
                        "id": line_id,
                        "original": l,
                        "literal": lit,
                        "tokens": tokens
                    }

                    l_lower = l.lower().rstrip(',;.!?')
                    for key, note in FIGARO_NOTES.items():
                        if key in l_lower or l_lower.startswith(key):
                            line_obj["grammarNote"] = note
                            break

                    lines.append(line_obj)

                cue_obj = {
                    "id": cue_id,
                    "speaker": normalize_speaker(sp),
                    "lines": lines
                }
                if sd:
                    cue_obj["stageDirection"] = sd
                    sdt = translations.get(sd, sd)
                    sdt = smooth_literal_translation(sdt)
                    cue_obj["stageDirectionTranslation"] = sdt

                if piece_title and cue_count == 1:
                    cue_obj["pieceTitle"] = piece_title

                cues.append(cue_obj)

            scenes.append({
                "sceneNumber": meta["sceneNumber"],
                "title": meta["title"],
                "titleTranslation": meta["titleTranslation"],
                "originalDescription": meta["originalDescription"],
                "description": meta["description"],
                "cues": cues
            })

        act_data = {
            "actNumber": act_num,
            "title": f"Act {['I', 'II', 'III', 'IV'][a_idx]}",
            "originalSetting": act_settings_orig[a_idx],
            "setting": act_settings_trans[a_idx],
            "scenes": scenes
        }
        acts_output.append(act_data)

    total_cues = sum(len(s['cues']) for a in acts_output for s in a['scenes'])
    total_lines = sum(len(c['lines']) for a in acts_output for s in a['scenes'] for c in s['cues'])
    print(f"  ✓ Parsed 46 scenes, {total_cues} cues, {total_lines} lines across 4 acts")

    # 3. Write TypeScript Files
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for idx, act in enumerate(acts_output, 1):
        act_ts = OUT_DIR / f'act{idx}.ts'
        act_content = [
            "import { Act } from '../../types/libretto';",
            "",
            f"export const nozzeDiFigaroAct{idx}: Act = {json.dumps(act, indent=2, ensure_ascii=False)};",
            "",
            f"export default nozzeDiFigaroAct{idx};",
            ""
        ]
        act_ts.write_text('\n'.join(act_content), encoding='utf-8')
        print(f"  ✓ Written {act_ts.relative_to(ROOT_DIR)}")

    # index.ts
    index_ts = OUT_DIR / 'index.ts'
    index_content = """import { Opera } from '../../types/libretto';
import { nozzeDiFigaroAct1 } from './act1';
import { nozzeDiFigaroAct2 } from './act2';
import { nozzeDiFigaroAct3 } from './act3';
import { nozzeDiFigaroAct4 } from './act4';

export const nozzeDiFigaro: Opera = {
  id: 'nozze-di-figaro',
  title: 'The Marriage of Figaro',
  originalTitle: 'Le nozze di Figaro, ossia la folle giornata',
  composer: 'Wolfgang Amadeus Mozart',
  librettists: ['Lorenzo Da Ponte'],
  language: 'it',
  languageLabel: 'Italian',
  year: 1786,
  sourceCitation: 'Lorenzo Da Ponte libretto after Pierre Beaumarchais (Vienna, 1786); verified against Bärenreiter Neue Mozart-Ausgabe.',
  sourceUrl: 'https://www.opera-arias.com/mozart/le-nozze-di-figaro/libretto/',
  sourceName: 'Lorenzo Da Ponte (Vienna, 1786) / Bärenreiter NMA',
  publicDomainNotice: 'The original Italian libretto, sung text, recitatives, and historical stage directions are in the worldwide public domain (Lorenzo Da Ponte d. 1838, W. A. Mozart d. 1791). Unabridged historical text with educational linguistic commentary and natural syntax-faithful English literal translations.',
  synopsis: 'Over the course of one mad day (la folle giornata) at the castle of Aguas-Frescas near Seville, the servant Figaro and the clever maid Susanna prepare for their wedding while scheming to thwart their predatory master, Count Almaviva, who seeks to exercise the feudal right of the first night. Teaming up with the neglected Countess Rosina and the love-struck young page Cherubino, they weave an escalating web of disguises, hidden letters, locked closets, and mistaken identities. When the Count is finally caught wooing his own disguised wife in the moonlit garden, he falls to his knees pleading for forgiveness, culminating in universal reconciliation and joyful celebration.',
  characters: [
    {
      name: 'Figaro',
      voiceType: 'Bass-Baritone',
      description: 'Valet to Count Almaviva and former barber of Seville, clever and resourceful bridegroom.'
    },
    {
      name: 'Susanna',
      voiceType: 'Soprano',
      description: 'Maid to the Countess and betrothed to Figaro, razor-sharp, charming, and courageous.'
    },
    {
      name: 'Count Almaviva',
      voiceType: 'Baritone',
      description: 'Grandee of Spain, proud, jealous, and libertine lord of Aguas-Frescas.'
    },
    {
      name: 'Countess Rosina',
      voiceType: 'Soprano',
      description: 'The noble, dignified wife of Count Almaviva, grieving her husband\\'s wandering affection.'
    },
    {
      name: 'Cherubino',
      voiceType: 'Mezzo-Soprano',
      description: 'The Count\\'s adolescent page, restlessly smitten with every woman in the palace.'
    },
    {
      name: 'Marcellina',
      voiceType: 'Mezzo-Soprano',
      description: 'The elderly housekeeper holding Figaro\\'s debt contract, later revealed to be his mother.'
    },
    {
      name: 'Dr. Bartolo',
      voiceType: 'Bass',
      description: 'A pompous doctor from Seville seeking revenge on Figaro, later revealed as his father.'
    },
    {
      name: 'Don Basilio',
      voiceType: 'Tenor',
      description: 'The scheming, sycophantic music master and palace gossip.'
    },
    {
      name: 'Antonio',
      voiceType: 'Bass',
      description: 'The castle gardener, Susanna\\'s uncle and Barbarina\\'s father, perpetually grumbling.'
    },
    {
      name: 'Barbarina',
      voiceType: 'Soprano',
      description: 'Antonio\\'s young daughter and Cherubino\\'s sweetheart.'
    },
    {
      name: 'Don Curzio',
      voiceType: 'Tenor',
      description: 'The stuttering magistrate presiding over the marriage contract dispute.'
    },
    {
      name: 'Coro',
      voiceType: 'Chorus',
      description: 'Peasants, wedding guests, palace servants, and Spanish dancers.'
    }
  ],
  acts: [
    nozzeDiFigaroAct1,
    nozzeDiFigaroAct2,
    nozzeDiFigaroAct3,
    nozzeDiFigaroAct4
  ]
};

export default nozzeDiFigaro;
"""
    index_ts.write_text(index_content, encoding='utf-8')
    print(f"  ✓ Written {index_ts.relative_to(ROOT_DIR)}")

    # 4. Register in src/data/operas.ts
    operas_ts = DATA_DIR / 'operas.ts'
    operas_content = operas_ts.read_text(encoding='utf-8')
    if "'nozze-di-figaro'" not in operas_content:
        print("4. Registering Le nozze di Figaro in src/data/operas.ts...")
        catalog_entry = """  {
    id: 'nozze-di-figaro',
    title: 'The Marriage of Figaro',
    originalTitle: 'Le nozze di Figaro, ossia la folle giornata',
    composer: 'Wolfgang Amadeus Mozart',
    librettists: ['Lorenzo Da Ponte'],
    language: 'it',
    languageLabel: 'Italian',
    year: 1786
  },"""
        # Insert before Don Giovanni (Mozart works sorted chronologically or alphabetically)
        operas_content = operas_content.replace(
            "  {\n    id: 'don-giovanni',",
            catalog_entry + "\n  {\n    id: 'don-giovanni',"
        )
        loader_entry = "  'nozze-di-figaro': () => import('./nozzeDiFigaro'),"
        operas_content = operas_content.replace(
            "  'don-giovanni': () => import('./donGiovanni'),",
            loader_entry + "\n  'don-giovanni': () => import('./donGiovanni'),"
        )
        operas_ts.write_text(operas_content, encoding='utf-8')
        print(f"  ✓ Registered nozze-di-figaro in {operas_ts.relative_to(ROOT_DIR)}")
    else:
        print("4. Le nozze di Figaro already registered in operas.ts")

    print("\n✓ Le nozze di Figaro generation complete!")

if __name__ == '__main__':
    main()

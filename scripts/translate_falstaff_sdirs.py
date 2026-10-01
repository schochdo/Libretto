#!/usr/bin/env python3
"""
Translates all 312 untranslated stage directions in Verdi's Falstaff into clean, theater-grade English.
"""

import json

TRANSLATIONS = {
    # 0 - 49
    "Alice comparisce nel fondo": "Alice appears in the background",
    "Alice si sarà seduta accanto al tavolo, avrà preso il liuto toccando qualche accordo": "Alice has sat down next to the table, and has taken up the lute, playing a few chords",
    "Alice, Meg, Nannetta, mr. Ford, Dr. Cajus, Fenton sbucano dietro una casa, or l'uno or l'altro spiando, non visti da Falstaff e poi si nascondono, poi tornano a spiare": "Alice, Meg, Nannetta, Mr. Ford, Dr. Caius, and Fenton emerge from behind a house, one or the other peeking out, unseen by Falstaff, then they hide, then resume spying",
    "Alice, Nannetta, Fenton escono da sinistra: in questo momento mrs. Quickly esce dall'osteria e vedendo Ford e il Dr. Cajus che parlano, sta ad origliare sulla soglia": "Alice, Nannetta, and Fenton exit from the left; at this moment Mrs. Quickly comes out of the inn and, seeing Ford and Dr. Caius talking, eavesdrops on the threshold",
    "Alice, Nannetta, Fenton si avviano per uscire da sinistra. Meg da destra": "Alice, Nannetta, and Fenton start to exit to the left; Meg to the right",
    "Alice, con una mossa rapidissima, lo chiude nel paravento, in modo che non è più veduto": "Alice, with a very swift movement, shuts him inside the screen, so that he is no longer seen",
    "Badiamo a noi.": "Let us look to ourselves.",
    "Bardolfo e Pistola escono da sinistra": "Bardolfo and Pistola exit from the left",
    "Bardolfo e Pistola ritornano subito donde erano venuti": "Bardolfo and Pistola immediately return from where they had come",
    "Bardolfo e Pistola si precipitano nella camera coi bastoni levati": "Bardolfo and Pistola rush into the room with raised sticks",
    "Bardolfo esce": "Bardolfo exits",
    "Bardolfo esce da sinistra e ritorna subito accompagnando mrs. Quickly": "Bardolfo exits from the left and immediately returns accompanying Mrs. Quickly",
    "Bardolfo fugge dalla porta a sinistra. Pistola dalla porta del fondo, non senza essersi buscato qualche colpo di granata, e Falstaff lo insegue": "Bardolfo flees through the door on the left; Pistola through the back door, not without catching a few blows from the broom, and Falstaff pursues him",
    "Bardolfo prende la lettera": "Bardolfo takes the letter",
    "Fenton fa per baciarla ancora": "Fenton makes to kiss her again",
    "Fenton si nasconde dietro gli alberi del fondo": "Fenton hides behind the trees in the background",
    "Fenton si unisce poi al crocchio": "Fenton then joins the group",
    "Fenton vede Nannetta che entra e la abbraccia": "Fenton sees Nannetta enter and embraces her",
    "Ford è davanti alle due coppie. Alice prenderà in braccio il più piccolo dei ragazzetti che sarà mascherato da spiritello, e farà in modo che la lanterna che tiene in mano illumini in pieno la faccia di Bardolfo appena questi resterà senza il velo che lo nasconde. Un altro spiritello guidato da Meg illuminerà Nannetta e Fenton": "Ford is in front of the two couples. Alice will take into her arms the smallest of the boys disguised as a sprite, and will arrange so that the lantern she holds shines full on Bardolfo's face as soon as he is stripped of the veil hiding him. Another sprite led by Meg will illuminate Nannetta and Fenton",
    "Nannetta e Fenton sempre dietro il paravento, si saran fatte moine durante il frastuono": "Nannetta and Fenton, still behind the screen, have been exchanging caresses during the uproar",
    "Nannetta e Meg corrono a prendere il paravento, lo aprono dopo averlo collocato fra la cesta e il camino": "Nannetta and Meg run to get the screen, opening it after placing it between the basket and the fireplace",
    "Nannetta rientra con quattro servi e un paggetto": "Nannetta re-enters with four servants and a little page",
    "Nannetta sbigottita fugge e Fenton esce dal fondo": "Nannetta flees dismayed and Fenton exits from the back",
    "Pistola gli dà un colpo di frusta": "Pistola gives him a lash of the whip",
    "Qua borbotta un crocchio d'uomini, c'è nell'aria una malia. Là cinguetta un stuol di femine, spira un vento agitator. Ma colei che in cor mi nomini, dolce amor, vuol esser mia! Noi sarem come due gemine stelle unite in un ardor.": "Here a knot of men mutters, there is magic in the air. There chirps a flock of women, blowing a restless wind. But she whom my heart names to me, sweet love, wants to be mine! We shall be like twin stars united in one flame.",
    "Un ronzio di vespe e d'avidi calabron brontolamento, un rombar di nembi gravidi d'uragani è quel ch'io sento. Il cerèbro un ebro allucina turbamento di paura, ciò che intorno a me si buccina, è un sussurro di congiura. Parlan quattro e uno ascolta; qual dei quattro ascolterò? agli altri": "A buzzing of wasps and the grumbling of greedy hornets, a rumble of clouds laden with storms is what I hear. A drunken fever of fear dazzles the brain; what is trumpeted around me is a whispered conspiracy. Four are speaking and one is listening; which of the four shall I listen to? (to the others)",
    "a bassa voce": "in a low voice",
    "a mrs. Quickly": "to Mrs. Quickly",
    "abbandona Alice e rimane turbato": "he lets go of Alice and remains troubled",
    "abbracciandola": "embracing her",
    "accarezzando la guancia di Nannetta": "stroking Nannetta's cheek",
    "accenna al Dr. Cajus": "points to Dr. Caius",
    "acclamando": "cheering",
    "accompagnando buffonescamente fino all'uscio il Dr. Cajus e salmodiando": "buffoonishly escorting Dr. Caius to the door while chanting",
    "accorgendosi di Fenton che s'aggira nel fondo": "noticing Fenton wandering in the background",
    "accorrendo": "running up",
    "accorrendo con Meg verso Quickly, mentre Nannetta ch'è entrata anch'essa resta triste in disparte": "running with Meg toward Quickly, while Nannetta, who has also entered, stays sadly aside",
    "accorrendo subito all'uscio del fondo e chiamando": "running immediately to the back door and calling out",
    "accovacciandosi con grande sforzo nella cesta": "crouching down into the basket with great effort",
    "afferrandola": "seizing her",
    "affrontando Ford": "confronting Ford",
    "aggiustandogli il cappuccio": "adjusting his hood",
    "agli altri": "to the others",
    "agli altri compagni": "to the other companions",
    "ai servi": "to the servants",
    "ai servi, che s'affaticano a sollevare la cesta": "to the servants, who struggle to lift the basket",
    "ai servi, che sono già vicini alla finestra": "to the servants, who are already near the window",
    "aiutato da Alice e Nannetta ad indossare la cappa": "helped by Alice and Nannetta to put on the cloak",
    "al Dr. Cajus accostando l'orecchio al paravento": "to Dr. Caius, putting his ear to the screen",
    "al Dr. Cajus con forza": "to Dr. Caius forcefully",

    # 50 - 99
    "al Dr. Cajus, parlandogli segretamente, vicino all'osteria": "to Dr. Caius, speaking to him secretly, near the inn",
    "al cenno di Falstaff, Pistola si frena": "at Falstaff's gesture, Pistola checks himself",
    "al paggetto, che poi esce dalla scala nel fondo": "to the little page, who then exits up the stairs in the background",
    "al paggio che escirà correndo con le lettere": "to the page who runs out with the letters",
    "all'oste, che esce per eseguire l'ordine": "to the innkeeper, who exits to carry out the order",
    "alle altre a bassa voce indicando Ford": "to the others in a low voice, pointing to Ford",
    "alle compagne": "to her companions",
    "alzando la testa": "raising his head",
    "ancora ad alta voce": "again in a loud voice",
    "ancora sotto il colpo dello stupore": "still reeling from shock",
    "andando a stringergli la mano con grande cordialità": "going to shake his hand with great cordiality",
    "annodandogli il collo co' la treccia, mentre egli la bacia": "looping her braid around his neck while he kisses her",
    "appiattendosi accanto al tronco della quercia": "flattening himself against the trunk of the oak",
    "ascoltando": "listening",
    "attirandola a sé con ardore": "drawing her to him ardently",
    "avanzandosi": "stepping forward",
    "avanzandosi con tutto il crocchio, comicamente e misteriosamente ripigliando il racconto di mrs. Quickly": "advancing with the whole group, comically and mysteriously resuming Mrs. Quickly's tale",
    "avviandosi al paravento: Fenton la segue": "heading toward the screen; Fenton follows her",
    "avviandosi pian piano e cautamente al paravento insieme a Dr. Cajus": "heading very quietly and cautiously toward the screen together with Dr. Caius",
    "avviandosi verso il tavolo": "heading toward the table",
    "avvicinandola": "approaching her",
    "beve sorseggiando ed assaporando. Si sbottona il panciotto, si sdraia, ribeve a sorsate, rianimandosi poco a poco": "he drinks, sipping and savoring. He unbuttons his waistcoat, stretches out, drinks again in sips, reviving little by little",
    "cantando insieme e battendosi il petto in atto di pentimento": "singing together and beating their breasts in an act of repentance",
    "cantarellando scherzosamente": "humming playfully",
    "cerca in tasca": "searches in his pocket",
    "cerca in tasca, estrae una lettera": "searches in his pocket, pulls out a letter",
    "cercando nella sua borsa": "searching in his purse",
    "che avrà riacquistato la sua calma": "who has regained his composure",
    "che avrà seguita la mossa di Falstaff, dal fondo": "who has followed Falstaff's movement, from the back",
    "che sarà andata alla finestra": "who has gone to the window",
    "che è rientrata e si sarà avvicinata alla cesta": "who has re-entered and approached the basket",
    "chiamando": "calling out",
    "chiamando Bardolfo, che s'avvicina": "calling Bardolfo, who approaches",
    "co' gli occhi sulla lettera che tiene in mano, ripete la lettura di Meg": "with eyes on the letter she holds in her hand, she repeats Meg's reading",
    "co' la faccia vicinissima alla faccia di Falstaff": "with her face very close to Falstaff's face",
    "come sfidandolo": "as if defying him",
    "come sopra": "as above",
    "come sopra, più lontana": "as above, further away",
    "comparisce nel fondo fra le fronde": "appears in the background among the leaves",
    "con calma sprezzante": "with scornful calmness",
    "con decoro": "with dignity",
    "con dei gran gesti da stregone": "with grand sorcerer-like gestures",
    "con flemma": "impassively",
    "con gesto d'umiltà": "with a gesture of humility",
    "con serenità, indicando il Dr. Cajus": "serenely, pointing to Dr. Caius",
    "con voce naturale": "in a natural voice",
    "congedandola col gesto": "dismissing her with a gesture",
    "consegnando un mazzo di chiavi al Dr. Cajus, che escirà correndo dall'uscio di sinistra": "handing a bunch of keys to Dr. Caius, who runs out through the left door",
    "continua e finisce": "continues and finishes",
    "continuando i gesti di scongiuro sul corpo di Falstaff": "continuing the exorcising gestures over Falstaff's body",

    # 100 - 149
    "continuando il discorso col Dr. Cajus": "continuing the conversation with Dr. Caius",
    "continuando la parola di Bardolfo": "continuing Bardolfo's words",
    "continuando sul proprio foglio la lettera di Alice": "continuing Alice's letter on her own sheet",
    "contraffacendo sé stessa": "mocking herself",
    "corre a pigliare il liuto e lo mette sulla tavola": "she runs to fetch the lute and places it on the table",
    "corre a pigliare una sedia e la mette presso al tavolo": "she runs to fetch a chair and places it by the table",
    "correndo": "running",
    "correndo e gridando, esce dalla porta a sinistra": "running and shouting, he exits through the door on the left",
    "correndo verso il fondo": "running toward the back",
    "correndo, cercando e frugando nella cassapanca": "running, searching and rummaging in the chest",
    "dal fondo gridando volto a chi lo segue": "from the back, shouting, turned toward those following him",
    "dal fondo, senza avanzare, non ha la maschera": "from the back, without advancing, not wearing a mask",
    "dall'antisala gridando": "from the anteroom, shouting",
    "dalla porta di destra, di corsa": "from the right door, running",
    "di dentro": "from within",
    "di dentro a destra gridando": "from within to the right, shouting",
    "di dentro a sinistra": "from within on the left",
    "di dentro a sinistra gridando": "from within to the left, shouting",
    "di dentro rispondendo": "from within, replying",
    "di dentro urlando": "from within, howling",
    "difendendosi": "defending himself",
    "difendendosi e guardandosi attorno": "defending himself and looking around",
    "dividendo Fenton da Nannetta e obbligandolo a vestire la cappa nera": "separating Fenton from Nannetta and forcing him to put on the black cloak",
    "dopo aver guardato nel camino": "after looking into the fireplace",
    "dà un calcio alla cesta": "gives the basket a kick",
    "e sarà una giostra gaia": "and it will be a merry tourney",
    "e si rimette a leggere lentamente": "and resumes reading slowly",
    "entra con vivacità: vedendola suonare, si mette a cantarellare": "enters briskly; seeing her play, begins to hum",
    "entra, attraversando di corsa la sala": "enters, running across the room",
    "entrando": "entering",
    "entrando da sinistra": "entering from the left",
    "entrando dalla porta a sinistra e gridando minaccioso": "entering through the door on the left and shouting threateningly",
    "entrando e fingendo agitazione": "entering and feigning agitation",
    "entrando nella cesta": "getting into the basket",
    "entrano correndo il Dr. Cajus e Fenton": "Dr. Caius and Fenton enter running",
    "esce correndo da destra con Quickly": "runs out from the right with Quickly",
    "esce correndo da sinistra": "runs out from the left",
    "esce dalla porta di sinistra": "exits through the left door",
    "escono da sinistra facendo sberleffi": "they exit to the left making mocking grimaces",
    "esterrefatto": "dumbfounded",
    "estrae dalla borsa le monete e le conta sul tavolo": "takes the coins from the purse and counts them on the table",
    "estrae di tasca una lettera. Falstaff la prende e si mette a leggere": "pulls a letter from her pocket. Falstaff takes it and begins to read",
    "estrae furiosamente la biancheria dalla cesta, frugando e cercando dentro, e disseminando i panni sul pavimento": "furiously pulls the laundry out of the basket, searching and rummaging inside, scattering the clothes over the floor",
    "facendo un passo indietro": "stepping back",
    "fanno ruzzolare Falstaff verso il proscenio": "they roll Falstaff toward the front of the stage",
    "fingendo spavento": "feigning fright",
    "fra i cespugli verso Nannetta a bassa voce": "among the bushes, toward Nannetta in a low voice",
    "fra tutte due con gran fretta ricacciano la biancheria nel cesto": "the two of them in great haste stuff the linen back into the basket",
    "fugge": "flees",
    "fugge da destra": "flees to the right",

    # 150 - 199
    "fuggendo da destra rapidissimamente": "fleeing from the right at top speed",
    "gettandosi co' la faccia contro terra, lungo disteso": "throwing himself face down on the ground, stretched out full length",
    "gira per la sala sempre cercando e frugando": "paces around the room, still searching and rummaging",
    "gran grido e risata di donne dall'esterno: immensa risata di Alice, Nannetta, Meg e Quickly. Ford e gli altri uomini rientrano: Alice vedendo Ford lo piglia per un braccio e lo conduce rapidamente alla finestra": "loud scream and laughter of women from outside; huge burst of laughter from Alice, Nannetta, Meg, and Quickly. Ford and the other men re-enter; Alice, seeing Ford, takes him by the arm and quickly leads him to the window",
    "gridando verso il fondo": "shouting toward the back",
    "guardando i panni sparsi": "looking at the scattered clothes",
    "guardando l'altra coppia": "looking at the other couple",
    "i folletti guidati da Alice si avvicinano co' le loro lanterne": "the goblins led by Alice approach with their lanterns",
    "il Dr. Cajus e Bardolfo si collocano nel mezzo: le fate grandi e piccole li circondano": "Dr. Caius and Bardolfo position themselves in the center; the fairies, large and small, surround them",
    "il Dr. Cajus e Bardolfo, vestito da regina delle fate col viso coperto da un velo, s'avanzano lentamente tenendosi per mano. Il Dr. Cajus ha la maschera sul volto": "Dr. Caius and Bardolfo, dressed as Queen of the Fairies with his face veiled, advance slowly holding hands. Dr. Caius wears a mask over his face",
    "il Dr. Cajus s'aggira come chi cerca qualcuno. Fenton e Quickly nascondono Nannetta co' le loro persone": "Dr. Caius wanders around like someone looking for somebody. Fenton and Quickly hide Nannetta behind their bodies",
    "in crocchio": "in a huddle",
    "in questo punto è cessato il baccano e tutti sentono il sussurro del bacio": "at this point the uproar ceases and everyone hears the sound of the kiss",
    "inchinandosi e interrompendo Falstaff": "bowing and interrupting Falstaff",
    "inchinandosi profondamente verso Falstaff il quale è ancora seduto": "bowing deeply to Falstaff, who is still seated",
    "incominciando il racconto della leggenda con mistero, entra nell'osteria con Falstaff": "beginning the tale of the legend mysteriously, enters the inn with Falstaff",
    "incontrando Bardolfo e Pistola che corrono da destra": "meeting Bardolfo and Pistola running from the right",
    "indicando Pistola": "pointing to Pistola",
    "indicando alle fate il loro posto, mentre Alice parte rapidamente da sinistra": "showing the fairies their places, while Alice leaves quickly from the left",
    "infervorata": "impassioned",
    "intanto entrano due servi portando una cesta piena di biancheria": "meanwhile two servants enter carrying a basket full of dirty linen",
    "interponendosi": "intervening",
    "interrompendolo": "interrupting him",
    "intoppando nel corpo di Falstaff e arrestando tutti con un gesto": "stumbling over Falstaff's body and halting everyone with a gesture",
    "intorno al paravento": "around the screen",
    "intorno alla cesta": "around the basket",
    "irrompono nella sala gridando, mentre Fenton corre a sinistra": "they burst into the room shouting, while Fenton runs to the left",
    "l'oste dall'osteria riceve l'ordine e rientra": "the innkeeper receives the order from the inn and goes back inside",
    "la cesta è portata in alto": "the basket is lifted high",
    "la cesta, Falstaff e la biancheria capitombolano giù dalla finestra": "the basket, Falstaff, and the laundry tumble down out of the window",
    "la prende attraverso il busto": "catches her around the waist",
    "la regina delle fate": "the Fairy Queen",
    "le bacia la treccia": "kisses her braid",
    "le piccole fate si dispongono in cerchio intorno alla loro regina: le fate più grandi formano gruppo a sinistra": "the little fairies arrange themselves in a circle around their queen; the larger fairies form a group on the left",
    "leggendo insieme ciascuna sulla propria lettera": "reading together, each from her own letter",
    "leggendo la lettera di Alice": "reading Alice's letter",
    "lo alzano in quattro e lo obbligano a star ginocchioni": "the four of them lift him up and force him onto his knees",
    "lo prende per mano, lo conduce dietro il paravento e vi si nascondono": "she takes him by the hand, leads him behind the screen, and they hide there",
    "mentre il Dr. Cajus ricomincia a cercare e cercando esce, dalla parte opposta, Quickly e Bardolfo scompaiono dietro gli alberi del fondo": "while Dr. Caius resumes searching and exits searching, on the opposite side Quickly and Bardolfo vanish behind the trees in the background",
    "mentre le piccole fate vanno cogliendo fiori": "while the little fairies go gathering flowers",
    "mettemdo l'indice al labbro per cenno di silenzio": "putting his index finger to his lips as a sign of silence",
    "mettendo Falstaff con Ford e il Dr. Cajus": "placing Falstaff with Ford and Dr. Caius",
    "mettendo l'indice sul proprio naso enorme e rubicondo": "putting his index finger on his own huge, rubicund nose",
    "mettendosi con Ford": "joining Ford",
    "nel fondo sottovoce agli altri, spiando": "in the background in an undertone to the others, spying",
    "nel paravento": "in the screen",
    "nel rovesciarsi del paravento, rimangono scoperti e confusi": "as the screen collapses, they are exposed and confounded",
    "nella foga del dire gli casca il cappuccio": "in the heat of speaking his hood slips off",
    "origliando": "eavesdropping",
    "pavoneggiandosi": "strutting",

    # 200 - 249
    "per abbracciarla": "to embrace her",
    "per mia bocca il ciel v'illumina": "through my mouth heaven enlightens you",
    "piglia il sacco di monete ed esce dal fondo": "takes the bag of coins and exits through the back",
    "più forte di prima": "louder than before",
    "prende Alice pe 'l busto. Alice avrà cessato di suonare e si sarà alzata": "takes Alice around the waist. Alice has stopped playing and stood up",
    "prende il braccio di Ford sotto il suo ed escono a braccetto": "takes Ford's arm in his, and they exit arm in arm",
    "prende il sacchetto e lo depone sul tavolo": "takes the purse and puts it on the table",
    "prende in mano la scopa e insegue Bardolfo e Pistola che scansano i colpi correndo qua e là e riparandosi dietro la tavola": "takes the broom in hand and chases Bardolfo and Pistola, who dodge the blows running here and there and shielding themselves behind the table",
    "presentando Nannetta e Fenton entrati da pochi istanti. Nannetta ha un gran velo celeste che la copre tutta. Fenton ha la maschera e la cappa": "presenting Nannetta and Fenton, who entered moments ago. Nannetta wears a large sky-blue veil covering her completely. Fenton wears a mask and cloak",
    "presto a bassa voce": "quickly in a low voice",
    "rabbonito prende per un braccio mrs. Quickly e s'avvia per entrare con essa all'osteria": "mollified, he takes Mrs. Quickly by the arm and sets off to enter the inn with her",
    "rapidamente interrotta dalla foga": "swiftly cut short by the rush",
    "rialzandosi": "getting back up",
    "ricacciandolo giù": "thrusting him back down",
    "ricacciandolo sotto la biancheria": "shoving him back under the laundry",
    "ricambiando il saluto": "returning the greeting",
    "riconoscendo Bardolfo, immobilizzato dalla sorpresa": "recognizing Bardolfo, paralyzed with astonishment",
    "ricusando con dignità": "refusing with dignity",
    "rientrando con alcuni del vicinato": "re-entering with some of the neighbors",
    "rientrando da sinistra": "re-entering from the left",
    "rientrando dalla porta del fondo. Ha un farsetto nuovo, cappello e bastone": "re-entering through the back door. He wears a new doublet, hat, and cane",
    "rientrano da sinistra le quattro donne": "the four women re-enter from the left",
    "riesce finalmente ad aprire l'armadio": "finally manages to open the wardrobe",
    "rileggendo ad alta voce e con molta attenzione": "rereading aloud and with great attention",
    "rimirando Fenton": "gazing at Fenton",
    "rimuginando le parole di Quickly": "mulling over Quickly's words",
    "rincorrendola e tentando di abbracciarla": "running after her and trying to embrace her",
    "ripigliando il racconto": "resuming the story",
    "ripigliando la sfuriata contro Bardolfo": "resuming the tirade against Bardolfo",
    "ritirandosi": "withdrawing",
    "ritirandosi un poco": "stepping back a little",
    "ritorna l'oste portando su d'un vassoio un gran bicchiere di vino caldo. Mette il bicchiere sulla panca e rientra all'osteria": "the innkeeper returns carrying a large glass of mulled wine on a tray. He sets the glass on the bench and goes back into the inn",
    "ritorna meditabondo": "returns brooding",
    "ritornando": "returning",
    "ritornando spaventatissima e gridando più di prima": "returning terrified and shouting louder than before",
    "riunendosi al crocchio con disinvoltura": "rejoining the circle nonchalantly",
    "rivolgendosi ora all'una, ora all'altra": "turning now to one, now to the other",
    "rovesciano il paravento": "they overturn the screen",
    "s'allontanano": "they move away",
    "s'avvia con Fenton nel fondo della scena, protetta da Alice e Quickly": "she heads with Fenton to the back of the stage, shielded by Alice and Quickly",
    "saltando di gioia": "leaping for joy",
    "saluta": "greets",
    "salutando": "greeting",
    "sbalordito, ode le parole d'Alice, sbuca e corre alla cesta": "astounded, he hears Alice's words, pops out and runs to the basket",
    "sbucando": "popping out",
    "sbucando a sinistra con altre fate e scorgendo Falstaff": "emerging on the left with other fairies and spotting Falstaff",
    "sbucando cautamente da sinistra con alcune fate": "emerging cautiously from the left with some fairies",
    "sbucando con la faccia": "poking his face out",
    "sbucando e sbuffando": "emerging and puffing",
    "scagliandosi contro il Dr. Cajus": "lashing out at Dr. Caius",

    # 250 - 299
    "scambia la propria lettera con quella di Alice": "exchanges her letter with Alice's",
    "scambievolmente": "mutually",
    "scampanellando": "ringing bells",
    "scattando contro Pistola": "lunging at Pistola",
    "scoppiando": "bursting out",
    "scoppiando in lacrime": "bursting into tears",
    "scorge Falstaff e indica alle altre": "notices Falstaff and points him out to the others",
    "scostandosi un poco": "stepping aside a little",
    "seduto sulla panca meditando. Poi si scuote, dà un gran pugno sulla panca e rivolto verso l'interno dell'osteria chiama l'oste": "seated on the bench, brooding. Then he rouses himself, pounds the bench with his fist, and turned toward the inside of the inn calls the innkeeper",
    "sempre complimentoso": "still complimentary",
    "sempre con tono minaccioso": "still in a threatening tone",
    "sempre evitando l'abbraccio": "still dodging the embrace",
    "sempre seduto sul seggiolone e con flemma": "still seated in the armchair and phlegmatic",
    "senza abbadare alle vociferazioni del Dr. Cajus, chiama l'oste che si avvicina": "without paying attention to Dr. Caius's shouting, he calls the innkeeper who approaches",
    "sgomentatissimo avrà già fatto un passo per fuggire dal paravento, ma udendo la voce dell'uomo torna a rimpiattarsi": "utterly terrified, he has already taken a step to flee from behind the screen, but hearing the man's voice hides himself again",
    "si allontanano l'una dall'altro, mentre ritornano le donne": "they step away from each other as the women return",
    "si avviano: giunti presso alla soglia fanno dei gesti complimentosi per cedere la precedenza del passo": "they set off; having reached the threshold they exchange polite gestures yielding the right of way",
    "si baciano rapidamente": "they kiss quickly",
    "si danno un bacio sonoro nel posto del verso marcato dall'asterisco": "they exchange a loud kiss at the point in the verse marked with an asterisk",
    "si fa tastare il polso dal Dr. Cajus": "he has his pulse taken by Dr. Caius",
    "si mette ad esaminare il conto che l'oste avrà portat insieme alla bottiglia di Xeres": "he begins examining the bill that the innkeeper has brought along with the bottle of sherry",
    "si mette un fiore nei capelli": "she puts a flower in her hair",
    "si nasconde": "hides",
    "si slancia per baciarla: Nannetta si ripara il viso con una mano che Fenton bacia e vorrebbe ribaciare; ma Nannetta la solleva più alta che può e Fenton ritenta invano di raggiungerla co' le labbra": "he lunges to kiss her; Nannetta shields her face with a hand which Fenton kisses and wants to kiss again; but Nannetta raises it as high as she can and Fenton tries in vain to reach it with his lips",
    "si svincola": "she slips free",
    "singhiozzando": "sobbing",
    "slanciandosi contro l'armadio e facendo sforzi per aprirlo": "rushing to the wardrobe and straining to open it",
    "slanciandosi verso la parte dove udì la voce": "rushing toward the direction where he heard the voice",
    "sottovoce con mistero, indicando il paravento": "in an undertone mysteriously, pointing to the screen",
    "sottovoce, guardando il paravento": "in an undertone, looking at the screen",
    "spaventato": "frightened",
    "subito": "immediately",
    "sul limitare dell'osteria con gesto accorto verso i due che escono Stai fresco! esce rapidamente da destra": "on the threshold of the inn with a shrewd gesture toward the two who exit: 'Just you wait!', quickly exits to the right",
    "supplicante, col naso fuori": "beseeching, with his nose sticking out",
    "tenta aprire l'armadio co' le chiavi": "tries to open the wardrobe with the keys",
    "tenta di abbracciarla": "tries to embrace her",
    "toccando Falstaff col bastone": "poking Falstaff with the cane",
    "toccando Falstaff col piede": "nudging Falstaff with his foot",
    "toccandosi e guardandosi l'addome": "touching and looking at his belly",
    "torna a gridare dall'uscio verso l'esterno": "shouts again from the doorway toward the outside",
    "tranne Dr. Cajus e Ford": "except Dr. Caius and Ford",
    "tranne Ford e il Dr. Cajus ridendo": "except Ford and Dr. Caius, laughing",
    "tranne il Dr. Cajus": "except Dr. Caius",
    "tutte col naso sulle lettere": "all with their noses in the letters",
    "tutte fuggono con Fenton da sinistra": "they all flee with Fenton from the left",
    "tutte in crocchio cinguettando": "all in a huddle, chirping",
    "tutte in un gruppo addosso alle lettere, confrontandole e maneggiandole con curiosità": "all in a group clustered over the letters, comparing them and handling them with curiosity",
    "tutte le fate co' la regina mentre cantano si avviano lentamente verso la quercia": "all the fairies with the queen, while singing, move slowly toward the oak",
    "tutte si inoltrano con precauzione": "all advance cautiously",
    "tutti e tre in crocchio": "all three in a huddle",

    # 300 - 311
    "tutti gli uomini salgono a corsa la scala del fondo": "all the men run up the stairs in the background",
    "un angelo che innamora a guardarla": "an angel who makes one fall in love just looking at her",
    "urlando di dentro": "screaming from within",
    "vede il cesto": "sees the basket",
    "vedendo Alice È lei.": "seeing Alice: 'It is she.'",
    "vedendo Fenton È lui.": "seeing Fenton: 'It is he.'",
    "vedendo Ford": "seeing Ford",
    "vedendo Nannetta È lei.": "seeing Nannetta: 'It is she.'",
    "vedendo il paggio Robin che entra dal fondo": "seeing the page Robin enter from the back",
    "violentissimamente contro Bardolfo": "most violently against Bardolfo",
    "volgendosi appena verso Bardolfo e Pistola": "scarcely turning toward Bardolfo and Pistola",
    "vuotando una tasca del farsetto": "emptying a pocket of his doublet",
}

def main():
    # 1. Load untranslated
    with open("scripts/falstaff_untranslated_sdirs.json", "r", encoding="utf-8") as f:
        untranslated = json.load(f)

    print(f"Loaded {len(untranslated)} untranslated items.")

    # Check for missing translations
    missing = [s for s in untranslated if s not in TRANSLATIONS]
    if missing:
        print(f"ERROR: {len(missing)} items missing from TRANSLATIONS dict:")
        for m in missing:
            print(f"  {repr(m)}")
        return 1

    # Check for any translation where k == v
    same = [k for k, v in TRANSLATIONS.items() if k.strip().lower() == v.strip().lower()]
    if same:
        print(f"ERROR: {len(same)} items have untranslated values:")
        for s in same:
            print(f"  {repr(s)}")
        return 1

    # 2. Load master dictionary
    with open("scripts/falstaff_stage_directions_translated.json", "r", encoding="utf-8") as f:
        master = json.load(f)

    print(f"Loaded {len(master)} entries from master dictionary.")

    # 3. Update master dictionary
    updated_count = 0
    for k, v in TRANSLATIONS.items():
        if k in master:
            master[k] = v
            updated_count += 1
        else:
            print(f"WARNING: '{k}' not found in master dictionary! Adding it anyway.")
            master[k] = v

    print(f"Updated {updated_count} entries in master dictionary.")

    # 4. Verify all entries in master dictionary
    untranslated_master = [k for k, v in master.items() if k.strip().lower() == v.strip().lower()]
    print(f"Untranslated entries remaining in master: {len(untranslated_master)}")
    if untranslated_master:
        print("Remaining untranslated in master:")
        for m in untranslated_master[:10]:
            print(f"  {repr(m)}")
        return 1

    # 5. Write back master dictionary
    with open("scripts/falstaff_stage_directions_translated.json", "w", encoding="utf-8") as f:
        json.dump(master, f, ensure_ascii=False, indent=2)

    print("Successfully wrote updated master dictionary to scripts/falstaff_stage_directions_translated.json!")
    return 0

if __name__ == "__main__":
    import sys
    sys.exit(main())

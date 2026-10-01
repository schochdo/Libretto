import json

# Act 2: Scenes 4 to 6
# Scene 4: Quartett (Er sterbe! Doch er soll erst wissen) (86 lines)
# Scene 5: Duett (O namenlose Freude!) (18 lines)
# Scene 6: Finale II (Heil sei dem Tag, heil sei der Stunde!) (126 lines)

TRANS_ACT2_SC4_6 = {
    # --- ACT 2 SCENE 4: Nr. 14 Quartett & Melodram/Fanfare ---
    "Er sterbe! Doch er soll erst wissen,": (
        "Let-him die! But he shall first know,",
        [
            {"word": "Er sterbe", "lemma": "sterben", "pos": "verb", "meaning": "let him die (jussive subjunctive I)"},
            {"word": "erst", "lemma": "erst", "pos": "adverb", "meaning": "first / beforehand"},
            {"word": "wissen", "lemma": "wissen", "pos": "verb", "meaning": "to know"}
        ],
        "Jussive subjunctive I expressing a lethal command."
    ),
    "wes ihm sein stolzes Herz zerfleischt.": (
        "whose [hand] to-him his proud heart lacerates.",
        [
            {"word": "wes", "lemma": "wer", "pos": "pronoun", "meaning": "whose / of whom (archaic genitive interrogative/relative)"},
            {"word": "zerfleischt", "lemma": "zerfleischen", "pos": "verb", "meaning": "lacerates / tears to pieces"}
        ],
        "Archaic genitive pronoun 'wes'."
    ),
    "Der Rache Fluch tilget sein Verbrechen,": (
        "Of-vengeance the curse exterminates his crime;",
        [
            {"word": "Der Rache Fluch", "lemma": "Fluch", "pos": "noun", "meaning": "the curse of vengeance (genitive Der Rache)"},
            {"word": "tilget", "lemma": "tilgen", "pos": "verb", "meaning": "wipes out / obliterates"}
        ],
        None
    ),
    "Sieh her! Hier steht Pizarro,": (
        "Look hither! Here stands Pizarro,",
        [
            {"word": "Sieh her", "lemma": "hersehen", "pos": "verb", "meaning": "look here (imperative)"},
            {"word": "Hier steht", "lemma": "stehen", "pos": "verb", "meaning": "here stands"}
        ],
        None
    ),
    "den du stürzen wolltest!": (
        "whom you to-overthrow wanted!",
        [
            {"word": "stürzen wolltest", "lemma": "wollen", "pos": "verb", "meaning": "wanted to overthrow"}
        ],
        None
    ),
    "Pizarro, den du bezwingen wolltest,": (
        "Pizarro, whom you to-vanquish wanted,",
        [
            {"word": "bezwingen", "lemma": "bezwingen", "pos": "verb", "meaning": "conquer / subjugate"}
        ],
        None
    ),
    "steht nun als Rächer hier!": (
        "stands now as avenger here!",
        [
            {"word": "als Rächer", "lemma": "Rächer", "pos": "noun", "meaning": "as avenger"}
        ],
        None
    ),
    "Ein Mörder steht vor mir!": (
        "A murderer stands before me!",
        [
            {"word": "Mörder", "lemma": "Mörder", "pos": "noun", "meaning": "murderer"},
            {"word": "vor mir", "lemma": "ich", "pos": "pronoun", "meaning": "before me"}
        ],
        None
    ),
    "Noch einmal, eh’ ich dich verderbe,": (
        "Once more, before I you destroy,",
        [
            {"word": "eh'", "lemma": "ehe", "pos": "conjunction", "meaning": "before / ere"},
            {"word": "verderbe", "lemma": "verderben", "pos": "verb", "meaning": "destroy / ruin"}
        ],
        None
    ),
    "sollst du mich vor dir seh’n!": (
        "shall you me before you see!",
        [
            {"word": "sollst", "lemma": "sollen", "pos": "verb", "meaning": "shall"}
        ],
        None
    ),
    "Er soll bestrafet sein!": (
        "He shall punished be!",
        [
            {"word": "bestrafet", "lemma": "bestrafen", "pos": "verb", "meaning": "punished (passive with sein)"}
        ],
        None
    ),
    "Töt’ erst sein Weib!": (
        "Kill first his wife!",
        [
            {"word": "Töt'", "lemma": "töten", "pos": "verb", "meaning": "kill (imperative singular)"},
            {"word": "erst", "lemma": "erst", "pos": "adverb", "meaning": "first"},
            {"word": "sein Weib", "lemma": "Weib", "pos": "noun", "meaning": "his wife"}
        ],
        "Climax of the opera: Leonore reveals her true identity."
    ),
    "Sein Weib?": (
        "His wife?",
        [{"word": "Sein Weib", "lemma": "Weib", "pos": "noun", "meaning": "his wife"}],
        None
    ),
    "Mein Weib?": (
        "My wife?",
        [{"word": "Mein Weib", "lemma": "Weib", "pos": "noun", "meaning": "my wife"}],
        None
    ),
    "Ja, sieh’ hier Leonoren!": (
        "Yes, look here upon-Leonore!",
        [
            {"word": "Leonoren", "lemma": "Leonore", "pos": "noun", "meaning": "Leonore (accusative/dative inflection)"}
        ],
        None
    ),
    "Ich bin sein Weib;": (
        "I am his wife;",
        [{"word": "Ich bin sein Weib", "lemma": "Weib", "pos": "clause", "meaning": "I am his wife"}],
        None
    ),
    "ich habe geschworen,": (
        "I have sworn,",
        [
            {"word": "geschworen", "lemma": "schwören", "pos": "verb", "meaning": "sworn"}
        ],
        None
    ),
    "ihm Trost, Verderben dir zu bringen!": (
        "to-him consolation, destruction to-you to bring!",
        [
            {"word": "Trost", "lemma": "Trost", "pos": "noun", "meaning": "comfort"},
            {"word": "Verderben", "lemma": "Verderben", "pos": "noun", "meaning": "ruin / doom"}
        ],
        None
    ),
    "Ha! Welch’ ein Sinn!": (
        "Ha! What a spirit [mind]!",
        [
            {"word": "Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "courage / heroic spirit"}
        ],
        None
    ),
    "Mein Blut erstarrt vor Entsetzen!": (
        "My blood congeals in terror!",
        [
            {"word": "erstarrt", "lemma": "erstarren", "pos": "verb", "meaning": "congeals / freezes"},
            {"word": "Entsetzen", "lemma": "Entsetzen", "pos": "noun", "meaning": "horror / dismay"}
        ],
        None
    ),
    "Ich trotze seiner Wut! Verderben ihm, ich trotze seiner Wut!": (
        "I defy his rage! Ruin to-him, I defy his rage!",
        [
            {"word": "trotze", "lemma": "trotzen", "pos": "verb", "meaning": "defy (governs dative 'seiner Wut')"},
            {"word": "Wut", "lemma": "Wut", "pos": "noun", "meaning": "fury / rage"}
        ],
        "Verb 'trotzen' takes dative."
    ),
    "Noch einen Laut – und du bist tot!": (
        "Yet one sound – and you are dead!",
        [
            {"word": "Laut", "lemma": "Laut", "pos": "noun", "meaning": "sound / utterance"}
        ],
        "Dramatic ultimatum holding the pistol."
    ),
    "Ha! Der Minister! Höll’ und Tod!": (
        "Ha! The Minister! Hell and death!",
        [
            {"word": "Minister", "lemma": "Minister", "pos": "noun", "meaning": "Minister of state"},
            {"word": "Höll' und Tod", "lemma": "Hölle", "pos": "phrase", "meaning": "hell and damnation"}
        ],
        "Oaths shouted as the trumpet fanfare signals the King's Minister's arrival."
    ),
    "Ach! Du bist gerettet! Großer Gott!": (
        "Ah! You are saved! Great God!",
        [{"word": "gerettet", "lemma": "retten", "pos": "verb", "meaning": "saved"}],
        None
    ),
    "Es schlägt der Rache Stunde!": (
        "There strikes of-vengeance the hour!",
        [
            {"word": "schlägt", "lemma": "schlagen", "pos": "verb", "meaning": "strikes (of a clock / fateful hour)"},
            {"word": "der Rache Stunde", "lemma": "Stunde", "pos": "noun", "meaning": "the hour of retribution"}
        ],
        None
    ),
    "Ich soll gerettet sein!": (
        "I shall saved be!",
        [{"word": "gerettet sein", "lemma": "retten", "pos": "verb", "meaning": "be rescued"}],
        None
    ),
    "Verflucht sei diese Stunde!": (
        "Accursed be this hour!",
        [
            {"word": "Verflucht sei", "lemma": "verfluchen", "pos": "phrase", "meaning": "cursed be (subjunctive I optative)"}
        ],
        None
    ),
    "O fürchterliche Stunde!": (
        "O dreadful hour!",
        [{"word": "fürchterliche Stunde", "lemma": "Stunde", "pos": "noun", "meaning": "terrible hour"}],
        None
    ),
    "Die Liebe wird im Bunde": (
        "Love will in alliance",
        [
            {"word": "im Bunde", "lemma": "Bund", "pos": "noun", "meaning": "in league / allied with (dative)"}
        ],
        None
    ),
    "mit Mut mein Retter sein.": (
        "with courage my savior be.",
        [
            {"word": "Retter", "lemma": "Retter", "pos": "noun", "meaning": "rescuer / savior"}
        ],
        None
    ),
    "Ich will nicht mehr im Bunde": (
        "I want no more in league",
        [{"word": "nicht mehr", "lemma": "mehr", "pos": "phrase", "meaning": "no longer"}],
        None
    ),
    "mit diesem Bösewicht sein.": (
        "with this villain to-be.",
        [
            {"word": "Bösewicht", "lemma": "Bösewicht", "pos": "noun", "meaning": "scoundrel / villain"}
        ],
        None
    ),

    # --- ACT 2 SCENE 5: Nr. 15 Duett Leonore & Florestan ---
    "O namenlose Freude!": (
        "O nameless joy!",
        [
            {"word": "namenlose", "lemma": "namenlos", "pos": "adjective", "meaning": "unutterable / nameless"},
            {"word": "Freude", "lemma": "Freude", "pos": "noun", "meaning": "joy"}
        ],
        None
    ),
    "Mein Mann an meiner Brust!": (
        "My husband upon my breast!",
        [
            {"word": "Mann", "lemma": "Mann", "pos": "noun", "meaning": "husband"},
            {"word": "Brust", "lemma": "Brust", "pos": "noun", "meaning": "breast / bosom"}
        ],
        None
    ),
    "An meiner Brust!": (
        "Upon my breast!",
        [{"word": "Brust", "lemma": "Brust", "pos": "noun", "meaning": "breast"}],
        None
    ),
    "Nach ungeheuern Leiden": (
        "After immense sufferings",
        [
            {"word": "ungeheuern", "lemma": "ungeheuer", "pos": "adjective", "meaning": "monstrous / colossal / immense"},
            {"word": "Leiden", "lemma": "Leiden", "pos": "noun", "meaning": "sorrows / tribulations (dative plural)"}
        ],
        None
    ),
    "so übergroße Lust!": (
        "such exceeding-great delight!",
        [
            {"word": "übergroße", "lemma": "übergroß", "pos": "adjective", "meaning": "boundless / exceedingly great"},
            {"word": "Lust", "lemma": "Lust", "pos": "noun", "meaning": "joy / bliss"}
        ],
        None
    ),
    "Du wieder nun in meinen Armen!": (
        "You again now in my arms!",
        [
            {"word": "Armen", "lemma": "Arm", "pos": "noun", "meaning": "arms (dative plural)"}
        ],
        None
    ),
    "O Gott, wie groß ist dein Erbarmen!": (
        "O God, how great is your mercy!",
        [
            {"word": "Erbarmen", "lemma": "Erbarmen", "pos": "noun", "meaning": "mercy / clemency (neuter)"}
        ],
        None
    ),
    "O Dank dir, Allerbarmender, o Dank!": (
        "O thanks to-you, All-Merciful-One, o thanks!",
        [
            {"word": "Allerbarmender", "lemma": "allerbarmend", "pos": "noun", "meaning": "All-Merciful God"}
        ],
        None
    ),

    # --- ACT 2 SCENE 6: Nr. 16 Finale II (All, Don Fernando, Chorus) ---
    "Heil sei dem Tag, heil sei der Stunde,": (
        "Salvation [Hail] be to-the day, hail be to-the hour,",
        [
            {"word": "Heil", "lemma": "Heil", "pos": "noun", "meaning": "salvation / blessing / hail"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (subjunctive I optative)"},
            {"word": "dem Tag", "lemma": "Tag", "pos": "noun", "meaning": "to the day (dative)"},
            {"word": "der Stunde", "lemma": "Stunde", "pos": "noun", "meaning": "to the hour (dative)"}
        ],
        "Optative salutation: 'Heil sei dem Tag'."
    ),
    "da die Gerechtigkeit versöhnt,": (
        "when justice reconciles [attains peace],",
        [
            {"word": "Gerechtigkeit", "lemma": "Gerechtigkeit", "pos": "noun", "meaning": "justice"},
            {"word": "versöhnt", "lemma": "versöhnen", "pos": "verb", "meaning": "reconciles / makes amends"}
        ],
        None
    ),
    "Gerechtigkeit mit Huld im Bunde": (
        "justice with grace in alliance",
        [
            {"word": "Huld", "lemma": "Huld", "pos": "noun", "meaning": "grace / royal favor"}
        ],
        None
    ),
    "den Frevelmut zu Schanden krönt.": (
        "outrageous-insolence to shame crowns.",
        [
            {"word": "Frevelmut", "lemma": "Frevelmut", "pos": "noun", "meaning": "insolence / outrageous wickedness (accusative)"},
            {"word": "zu Schanden", "lemma": "Schande", "pos": "noun", "meaning": "to ruin / shame"}
        ],
        "Idiom 'zu Schanden krönen/machen' (to put utterly to shame)."
    ),
    "Des besten Königs Wink und Wille": (
        "Of-the best King the nod and will",
        [
            {"word": "Des besten Königs", "lemma": "König", "pos": "noun", "meaning": "of the best king (genitive)"},
            {"word": "Wink", "lemma": "Wink", "pos": "noun", "meaning": "sign / nod / sovereign behest"}
        ],
        None
    ),
    "führt mich zu euch, bedrängte Schar,": (
        "leads me to you, oppressed multitude,",
        [
            {"word": "bedrängte Schar", "lemma": "Schar", "pos": "noun", "meaning": "oppressed host / flock (vocative feminine)"}
        ],
        None
    ),
    "daß ich des Unrechts Nacht enthülle,": (
        "that I of-injustice the night unveil,",
        [
            {"word": "des Unrechts", "lemma": "Unrecht", "pos": "noun", "meaning": "of injustice (genitive neuter)"},
            {"word": "enthülle", "lemma": "enthüllen", "pos": "verb", "meaning": "unveil / expose"}
        ],
        None
    ),
    "die all’ umfangen, schwarz und schwer.": (
        "which all enveloped, black and heavy.",
        [
            {"word": "umfangen", "lemma": "umfangen", "pos": "verb", "meaning": "enveloped / embraced"}
        ],
        None
    ),
    "Nicht länger kniet bedrückt und bange,": (
        "No longer kneel oppressed and fearful;",
        [
            {"word": "kniet", "lemma": "knien", "pos": "verb", "meaning": "kneel (imperative plural)"},
            {"word": "bedrückt", "lemma": "bedrücken", "pos": "adjective", "meaning": "oppressed / dejected"}
        ],
        None
    ),
    "ein Bruder kommt, kein strenger Herr;": (
        "a brother comes, no severe lord;",
        [
            {"word": "Bruder", "lemma": "Bruder", "pos": "noun", "meaning": "brother"},
            {"word": "strenger Herr", "lemma": "Herr", "pos": "noun", "meaning": "stern master"}
        ],
        "Enlightenment humanitarian ideal spoken by Minister Don Fernando."
    ),
    "ein Bruder soll den Brüdern helfen,": (
        "a brother shall the brothers help,",
        [
            {"word": "den Brüdern", "lemma": "Bruder", "pos": "noun", "meaning": "the brothers (dative plural after helfen)"}
        ],
        None
    ),
    "und kann er helfen, hilft er gern.": (
        "and can he help, helps he gladly.",
        [
            {"word": "hilft er gern", "lemma": "helfen", "pos": "clause", "meaning": "he gladly helps"}
        ],
        None
    ),
    "Heil sei der Stunde!": (
        "Hail be to-the hour!",
        [{"word": "Heil", "lemma": "Heil", "pos": "noun", "meaning": "hail / blessing"}],
        None
    ),
    "Der Totgeglaubte, der Edle, der für Wahrheit stritt?": (
        "The one-believed-dead, the noble-one, who for truth fought?",
        [
            {"word": "Totgeglaubte", "lemma": "totgeglaubt", "pos": "noun", "meaning": "one believed dead"},
            {"word": "Edle", "lemma": "edel", "pos": "noun", "meaning": "noble man"},
            {"word": "stritt", "lemma": "streiten", "pos": "verb", "meaning": "fought / strove (preterite)"}
        ],
        None
    ),
    "und Qualen ohne Zahl erlitt.": (
        "and agonies without number suffered.",
        [
            {"word": "Qualen", "lemma": "Qual", "pos": "noun", "meaning": "torments / agonies"},
            {"word": "ohne Zahl", "lemma": "Zahl", "pos": "phrase", "meaning": "countless / numberless"},
            {"word": "erlitt", "lemma": "erleiden", "pos": "verb", "meaning": "suffered (preterite)"}
        ],
        None
    ),
    "Mein Freund, mein Freund, der Totgeglaubte?": (
        "My friend, my friend, the one-believed-dead?",
        [{"word": "Mein Freund", "lemma": "Freund", "pos": "noun", "meaning": "my friend"}],
        None
    ),
    "Gefesselt, bleich steht er vor dir!": (
        "Shackled, pale stands he before you!",
        [
            {"word": "Gefesselt", "lemma": "fesseln", "pos": "adjective", "meaning": "shackled / in irons"},
            {"word": "bleich", "lemma": "bleich", "pos": "adjective", "meaning": "pale / wan"}
        ],
        None
    ),
    "und trat als Knecht in meine Dienste,": (
        "and entered as servant into my services,",
        [
            {"word": "Knecht", "lemma": "Knecht", "pos": "noun", "meaning": "hired servant"},
            {"word": "in meine Dienste", "lemma": "Dienst", "pos": "noun", "meaning": "into my service"}
        ],
        None
    ),
    "und tat so brave, treue Dienste,": (
        "and did so brave, faithful services,",
        [
            {"word": "brave", "lemma": "brav", "pos": "adjective", "meaning": "valiant / honest / worthy"}
        ],
        None
    ),
    "daß ich ihn mir zum Eidam wählte!": (
        "that I him for-myself as son-in-law chose!",
        [
            {"word": "Eidam", "lemma": "Eidam", "pos": "noun", "meaning": "son-in-law (archaic/historical for Schwiegersohn)"}
        ],
        "Archaic German term: 'Eidam' = son-in-law."
    ),
    "Der Unmensch wollt’ in dieser Stunde": (
        "The monster wanted in this hour",
        [
            {"word": "Unmensch", "lemma": "Unmensch", "pos": "noun", "meaning": "monster / fiend (referring to Pizarro)"}
        ],
        None
    ),
    "Mit uns im Bunde,": (
        "With us in alliance,",
        [{"word": "im Bunde", "lemma": "Bund", "pos": "phrase", "meaning": "in league"}],
        None
    ),
    "nur euer Kommen rief ihn fort.": (
        "only your arrival called him away.",
        [
            {"word": "euer Kommen", "lemma": "Kommen", "pos": "noun", "meaning": "your arrival"},
            {"word": "rief... fort", "lemma": "fortrufen", "pos": "verb", "meaning": "summoned away"}
        ],
        None
    ),
    "Bestrafet sei der Bösewicht!": (
        "Punished be the villain!",
        [
            {"word": "Bestrafet sei", "lemma": "bestrafen", "pos": "verb", "meaning": "let be punished (passive optative)"}
        ],
        None
    ),
    "Du schlossest selbst des Edlen Grab,": (
        "You unlocked yourself the noble-man's grave,",
        [
            {"word": "schlossest", "lemma": "schließen", "pos": "verb", "meaning": "closed / unlocked"},
            {"word": "des Edlen Grab", "lemma": "Grab", "pos": "noun", "meaning": "the noble man's grave"}
        ],
        None
    ),
    "so nimm ihm nun die Ketten ab!": (
        "so take from-him now the chains off!",
        [
            {"word": "nimm... ab", "lemma": "abnehmen", "pos": "verb", "meaning": "take off / remove (imperative)"},
            {"word": "ihm", "lemma": "er", "pos": "pronoun", "meaning": "from him (dative of separation)"}
        ],
        "Minister's decree: Leonore herself must remove her husband's chains."
    ),
    "O Gott! Welch’ ein Augenblick!": (
        "O God! What a moment!",
        [{"word": "Augenblick", "lemma": "Augenblick", "pos": "noun", "meaning": "moment"}],
        None
    ),
    "O unbeschreiblich süßes Glück!": (
        "O indescribably sweet happiness!",
        [
            {"word": "unbeschreiblich", "lemma": "unbeschreiblich", "pos": "adverb", "meaning": "indescribably"},
            {"word": "süßes Glück", "lemma": "Glück", "pos": "noun", "meaning": "sweet fortune"}
        ],
        None
    ),
    "Gerecht, o Gott, ist dein Gericht!": (
        "Just, o God, is your judgment!",
        [
            {"word": "Gericht", "lemma": "Gericht", "pos": "noun", "meaning": "judgment / court / verdict"}
        ],
        None
    ),
    "Du prüfest, du verläßt uns nicht!": (
        "You testest, you abandonest us not!",
        [
            {"word": "prüfest", "lemma": "prüfen", "pos": "verb", "meaning": "put to the proof / test"},
            {"word": "verläßt", "lemma": "verlassen", "pos": "verb", "meaning": "abandon / forsake"}
        ],
        None
    ),
    "Leonorens edlen Mut!": (
        "Leonore's noble courage!",
        [
            {"word": "Leonorens", "lemma": "Leonore", "pos": "noun", "meaning": "Leonore's (archaic genitive)"},
            {"word": "edlen Mut", "lemma": "Mut", "pos": "noun", "meaning": "noble courage (accusative)"}
        ],
        None
    ),
    "Wer ein solches Weib errungen,": (
        "Whoever such a wife has-won,",
        [
            {"word": "solches Weib", "lemma": "Weib", "pos": "noun", "meaning": "such a wife (neuter)"},
            {"word": "errungen", "lemma": "erringen", "pos": "verb", "meaning": "won / achieved through struggle (past participle)"}
        ],
        "Famous quotation echoing Schiller's Ode to Joy ('Wer ein holdes Weib errungen...')."
    ),
    "stimm’ in unsern Jubel ein!": (
        "join into our jubilation in!",
        [
            {"word": "stimm'... ein", "lemma": "einstimmen", "pos": "verb", "meaning": "join in (imperative / jussive)"},
            {"word": "Jubel", "lemma": "Jubel", "pos": "noun", "meaning": "jubilation / rejoicing"}
        ],
        "Separable verb 'einstimmen in'."
    ),
    "Nie wird es zu hoch besungen,": (
        "Never will it too highly be-sung,",
        [
            {"word": "besungen", "lemma": "besingen", "pos": "verb", "meaning": "praised in song / celebrated"}
        ],
        "Passive construction: 'wird besungen'."
    ),
    "Retterin des Gatten sein.": (
        "rescuer of-the husband to-be.",
        [
            {"word": "Retterin", "lemma": "Retterin", "pos": "noun", "meaning": "savior / deliverer (feminine)"},
            {"word": "des Gatten", "lemma": "Gatte", "pos": "noun", "meaning": "of the spouse / husband (genitive)"}
        ],
        None
    ),
    "Deine Treu’ erhielt mein Leben,": (
        "Your fidelity preserved my life,",
        [
            {"word": "Treu'", "lemma": "Treue", "pos": "noun", "meaning": "faithfulness / loyalty"},
            {"word": "erhielt", "lemma": "erhalten", "pos": "verb", "meaning": "preserved / sustained (preterite)"}
        ],
        None
    ),
    "Liebe führte meinen Mut.": (
        "love guided my courage.",
        [
            {"word": "führte", "lemma": "führen", "pos": "verb", "meaning": "led / guided"}
        ],
        None
    ),
    "Lob sei des Himmels Gnade!": (
        "Praise be to heaven's grace!",
        [
            {"word": "Lob sei", "lemma": "Lob", "pos": "phrase", "meaning": "praise be (subjunctive I optative)"},
            {"word": "des Himmels Gnade", "lemma": "Gnade", "pos": "noun", "meaning": "heaven's grace"}
        ],
        None
    ),
    "Preist mit hoher Freude": (
        "Praise with high joy",
        [
            {"word": "Preist", "lemma": "preisen", "pos": "verb", "meaning": "praise (imperative plural)"}
        ],
        None
    )
}

print(f"Act 2 Scenes 4-6 translations defined: {len(TRANS_ACT2_SC4_6)}")
with open('scripts/fidelio_trans_act2_sc4_6.json', 'w', encoding='utf-8') as f:
    json.dump(TRANS_ACT2_SC4_6, f, ensure_ascii=False, indent=2)

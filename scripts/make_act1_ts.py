import json
import re

with open('scripts/zauberfloete_parsed.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

act1_raw = data['act1']

# Translation dictionary mapping original line text to (literal, tokens, grammarNote)
TRANS = {
    # SCENE 1: Introduktion
    "Zu Hilfe! Zu Hilfe! sonst bin ich verloren,": (
        "To help! To help! Otherwise am I lost,",
        [
            {"word": "Zu Hilfe", "lemma": "Hilfe", "pos": "noun", "meaning": "To help / Help!", "notes": "Idiomatic cry for help; dative of purpose with 'zu'."},
            {"word": "sonst", "lemma": "sonst", "pos": "adverb", "meaning": "otherwise / else"},
            {"word": "bin", "lemma": "sein", "pos": "verb", "meaning": "am"},
            {"word": "ich", "lemma": "ich", "pos": "pronoun", "meaning": "I"},
            {"word": "verloren", "lemma": "verlieren", "pos": "adjective", "meaning": "lost", "notes": "Past participle used predicatively."}
        ],
        "V2 word order triggered by the initial adverb 'sonst' (sonst bin ich...)."
    ),
    "der listigen Schlange zum Opfer erkoren –": (
        "to the cunning serpent as a sacrifice chosen –",
        [
            {"word": "der listigen Schlange", "lemma": "Schlange", "pos": "noun", "meaning": "to the cunning serpent", "notes": "Dative singular feminine with weak adjective ending '-en'."},
            {"word": "zum Opfer", "lemma": "Opfer", "pos": "noun", "meaning": "as a sacrifice / victim", "notes": "Contraction of 'zu dem Opfer'."},
            {"word": "erkoren", "lemma": "erkiesen", "pos": "verb", "meaning": "chosen / destined", "notes": "Archaic past participle of erkiesen (to choose/destine)."}
        ],
        None
    ),
    "barmherzige Götter! Schon nahet sie sich,": (
        "merciful gods! Already nears it itself,",
        [
            {"word": "barmherzige", "lemma": "barmherzig", "pos": "adjective", "meaning": "merciful / compassionate"},
            {"word": "Götter", "lemma": "Gott", "pos": "noun", "meaning": "gods (nominative plural)"},
            {"word": "Schon", "lemma": "schon", "pos": "adverb", "meaning": "already"},
            {"word": "nahet", "lemma": "nahen", "pos": "verb", "meaning": "approaches / nears", "notes": "Archaic third-person singular inflection '-et'."},
            {"word": "sie sich", "lemma": "sich nahen", "pos": "pronoun", "meaning": "it itself", "notes": "Reflexive verb 'sich nahen'."}
        ],
        "Inversion after adverb 'schon': verb 'nahet' precedes subject 'sie'."
    ),
    "ach rettet mich, ach rettet, schützet mich!": (
        "ah save me, ah save, protect me!",
        [
            {"word": "rettet", "lemma": "retten", "pos": "verb", "meaning": "save (imperative plural)"},
            {"word": "schützet", "lemma": "schützen", "pos": "verb", "meaning": "protect (imperative plural)"},
            {"word": "mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative)"}
        ],
        None
    ),
    "Stirb, Ungeheuer, durch uns're Macht!": (
        "Die, monster, through our might!",
        [
            {"word": "Stirb", "lemma": "sterben", "pos": "verb", "meaning": "die (imperative singular)"},
            {"word": "Ungeheuer", "lemma": "Ungeheuer", "pos": "noun", "meaning": "monster (neuter)"},
            {"word": "uns're", "lemma": "unser", "pos": "pronoun", "meaning": "our"},
            {"word": "Macht", "lemma": "Macht", "pos": "noun", "meaning": "power / might (accusative with 'durch')"}
        ],
        None
    ),
    "Triumph! Triumph! Sie ist vollbracht": (
        "Triumph! Triumph! It is accomplished",
        [
            {"word": "vollbracht", "lemma": "vollbringen", "pos": "verb", "meaning": "accomplished / achieved", "notes": "Inseparable prefix verb voll-bringen; past participle."}
        ],
        None
    ),
    "die Heldentat! Er ist befreit": (
        "the heroic deed! He is freed",
        [
            {"word": "Heldentat", "lemma": "Heldentat", "pos": "noun", "meaning": "heroic deed (Held + Tat)"},
            {"word": "befreit", "lemma": "befreien", "pos": "verb", "meaning": "freed / liberated"}
        ],
        None
    ),
    "durch uns'res Armes Tapferkeit.": (
        "through our arm's bravery.",
        [
            {"word": "uns'res Armes", "lemma": "Arm", "pos": "noun", "meaning": "of our arm (genitive masculine)"},
            {"word": "Tapferkeit", "lemma": "Tapferkeit", "pos": "noun", "meaning": "bravery / valor"}
        ],
        "Genitive construction: 'uns'res Armes Tapferkeit' = the bravery of our arm."
    ),
    "Ein holder Jüngling, sanft und schön!": (
        "A lovely youth, gentle and handsome!",
        [
            {"word": "holder", "lemma": "hold", "pos": "adjective", "meaning": "lovely / gracious / sweet"},
            {"word": "Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "youth / young man"},
            {"word": "sanft", "lemma": "sanft", "pos": "adjective", "meaning": "gentle / soft"},
            {"word": "schön", "lemma": "schön", "pos": "adjective", "meaning": "beautiful / handsome"}
        ],
        None
    ),
    "So schön, als ich noch nie geseh'n.": (
        "So handsome, as I yet never have seen.",
        [
            {"word": "noch nie", "lemma": "nie", "pos": "adverb", "meaning": "never yet / never before"},
            {"word": "geseh'n", "lemma": "sehen", "pos": "verb", "meaning": "seen", "notes": "Apocope of auxiliary 'habe' (gesehen [habe])."}
        ],
        "Ellipsis of auxiliary verb 'habe' in subordinate clause."
    ),
    "Ja, ja, gewiß! zum Malen schön.": (
        "Yes, yes, certainly! for painting handsome.",
        [
            {"word": "gewiß", "lemma": "gewiss", "pos": "adverb", "meaning": "certainly / surely"},
            {"word": "zum Malen schön", "lemma": "malen", "pos": "idiom", "meaning": "picture-perfect handsome", "notes": "Literally 'handsome enough to paint'."}
        ],
        None
    ),
    "Würd' ich mein Herz der Liebe weih'n,": (
        "Would I my heart to love consecrate,",
        [
            {"word": "Würd'", "lemma": "werden", "pos": "verb", "meaning": "would (subjunctive II)", "notes": "Conditional inversion: 'Würde ich' = If I were to..."},
            {"word": "weih'n", "lemma": "weihen", "pos": "verb", "meaning": "to consecrate / dedicate"}
        ],
        "Conditional clause introduced without 'wenn', using verb-first inversion ('Würd' ich...')."
    ),
    "so müßt' es dieser Jüngling sein.": (
        "so must it this youth be.",
        [
            {"word": "müßt'", "lemma": "müssen", "pos": "verb", "meaning": "must / would have to (subjunctive II)"},
            {"word": "dieser Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "this youth (nominative predicate)"}
        ],
        None
    ),
    "Laßt uns zu uns'rer Fürstin eilen,": (
        "Let us to our princess hurry,",
        [
            {"word": "Laßt uns", "lemma": "lassen", "pos": "verb", "meaning": "let us (cohortative imperative)"},
            {"word": "Fürstin", "lemma": "Fürstin", "pos": "noun", "meaning": "princess / sovereign lady"}
        ],
        None
    ),
    "ihr diese Nachricht zu erteilen.": (
        "to-her this news to impart.",
        [
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "to her (dative)"},
            {"word": "Nachricht", "lemma": "Nachricht", "pos": "noun", "meaning": "news / message"},
            {"word": "zu erteilen", "lemma": "erteilen", "pos": "verb", "meaning": "to impart / give"}
        ],
        "Infinitive clause with 'zu erteilen' taking dative 'ihr' and accusative 'diese Nachricht'."
    ),
    "Vielleicht daß dieser schöne Mann,": (
        "Perhaps that this handsome man,",
        [
            {"word": "Vielleicht", "lemma": "vielleicht", "pos": "adverb", "meaning": "perhaps / maybe"}
        ],
        None
    ),
    "die vor'ge Ruh' ihr geben kann.": (
        "the former peace to-her give can.",
        [
            {"word": "vor'ge", "lemma": "vorig", "pos": "adjective", "meaning": "former / previous"},
            {"word": "Ruh'", "lemma": "Ruhe", "pos": "noun", "meaning": "peace / tranquility"},
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "to her (dative)"},
            {"word": "geben kann", "lemma": "können", "pos": "verb", "meaning": "can give", "notes": "Verb-final in subordinate clause introduced by 'daß'."}
        ],
        "Subordinate clause word order: finite verb 'kann' placed at the very end."
    ),
    "So geht und sagt es ihr,": (
        "So go and say it to-her,",
        [
            {"word": "geht", "lemma": "gehen", "pos": "verb", "meaning": "go (imperative plural)"},
            {"word": "sagt", "lemma": "sagen", "pos": "verb", "meaning": "say / tell (imperative plural)"},
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "to her (dative)"}
        ],
        None
    ),
    "ich bleib' indessen hier. –": (
        "I remain meanwhile here. –",
        [
            {"word": "bleib'", "lemma": "bleiben", "pos": "verb", "meaning": "remain / stay"},
            {"word": "indessen", "lemma": "indessen", "pos": "adverb", "meaning": "meanwhile / in the meantime"}
        ],
        None
    ),
    "Nein, nein, geht ihr nur hin,": (
        "No, no, go you just thither,",
        [
            {"word": "nur hin", "lemma": "hin", "pos": "particle", "meaning": "just thither / along"}
        ],
        None
    ),
    "ich wache hier für ihn!": (
        "I watch here for him!",
        [
            {"word": "wache", "lemma": "wachen", "pos": "verb", "meaning": "watch / keep guard"},
            {"word": "für ihn", "lemma": "er", "pos": "pronoun", "meaning": "for him (accusative with 'für')"}
        ],
        None
    ),
    "Nein, nein, das kann nicht sein,": (
        "No, no, that can not be,",
        [
            {"word": "kann nicht sein", "lemma": "sein", "pos": "verb", "meaning": "cannot be"}
        ],
        None
    ),
    "ich schütze ihn allein!": (
        "I protect him alone!",
        [
            {"word": "schütze", "lemma": "schützen", "pos": "verb", "meaning": "protect"},
            {"word": "allein", "lemma": "allein", "pos": "adverb", "meaning": "alone / by myself"}
        ],
        None
    ),
    "Ich bleib' indessen hier ...": ("I remain meanwhile here ...", None, None),
    "Ich wache hier für ihn ...": ("I watch here for him ...", None, None),
    "Ich schütze ihn allein ...": ("I protect him alone ...", None, None),
    "... ich bleibe ...": ("... I remain ...", None, None),
    "... ich wache ...": ("... I watch ...", None, None),
    "... ich schütze ...": ("... I protect ...", None, None),
    "... ich!": ("... I!", None, None),
    "Ich sollte fort! Ei, ei! wie fein!": (
        "I ought away! Well, well! How fine!",
        [
            {"word": "sollte fort", "lemma": "fortsollen", "pos": "verb", "meaning": "ought to leave / go away", "notes": "Modal 'sollen' with directional adverb 'fort' acting as verb."},
            {"word": "Ei, ei!", "lemma": "ei", "pos": "interjection", "meaning": "Well, well! / My, my!"}
        ],
        None
    ),
    "Sie wären gern bei ihm allein.": (
        "They would-be gladly with him alone.",
        [
            {"word": "wären gern", "lemma": "gern", "pos": "adverb", "meaning": "would gladly be / would like to be", "notes": "Subjunctive II 'wären' + adverb 'gern'."}
        ],
        None
    ),
    "Nein, nein, das kann nicht sein!": ("No, no, that cannot be!", None, None),
    "Was sollte ich darum nicht geben,": (
        "What should I for-that not give,",
        [
            {"word": "darum", "lemma": "darum", "pos": "pronoun", "meaning": "for that / therefor"}
        ],
        "Rhetorical question: 'What would I not give for that...'"
    ),
    "könnt' ich mit diesem Jüngling leben!": (
        "could I with this youth live!",
        [
            {"word": "könnt' ich", "lemma": "können", "pos": "verb", "meaning": "could I (subjunctive II inversion)"}
        ],
        "Optative conditional inversion ('könnt' ich...')."
    ),
    "Hätt' ich ihn doch so ganz allein!": (
        "Had I him only so completely alone!",
        [
            {"word": "Hätt' ich", "lemma": "haben", "pos": "verb", "meaning": "had I / if only I had"},
            {"word": "doch", "lemma": "doch", "pos": "particle", "meaning": "only / indeed (modal wish particle)"}
        ],
        "Optative wish with 'doch': 'Hätt' ich ihn doch...' = If only I had him..."
    ),
    "Doch keine geht, es kann nicht sein.": (
        "Yet none goes, it cannot be.",
        [
            {"word": "keine", "lemma": "kein", "pos": "pronoun", "meaning": "none / not one (feminine singular)"}
        ],
        None
    ),
    "Am besten ist es nun, ich geh'.": (
        "At best is it now, [that] I go.",
        [
            {"word": "Am besten", "lemma": "gut", "pos": "adjective", "meaning": "at best / best (superlative predicate)"}
        ],
        None
    ),
    "Du Jüngling schön und liebevoll,": (
        "You youth handsome and loving,",
        [
            {"word": "liebevoll", "lemma": "liebevoll", "pos": "adjective", "meaning": "affectionate / full of love"}
        ],
        None
    ),
    "du trauter Jüngling, lebe wohl,": (
        "you beloved youth, fare well,",
        [
            {"word": "trauter", "lemma": "traut", "pos": "adjective", "meaning": "dear / beloved / intimate"},
            {"word": "lebe wohl", "lemma": "leben", "pos": "idiom", "meaning": "farewell (literally: live well)"}
        ],
        None
    ),
    "bis ich dich wiederseh'.": (
        "until I you see-again.",
        [
            {"word": "wiederseh'", "lemma": "wiedersehen", "pos": "verb", "meaning": "see again (separable prefix verb in subordinate clause)"}
        ],
        "Separable verb prefix 'wieder-' stays attached to verb stem at end of subordinate clause."
    ),

    # SCENE 2: Lied
    "Der Vogelfänger bin ich ja –": (
        "The bird-catcher am I indeed –",
        [
            {"word": "Vogelfänger", "lemma": "Vogelfänger", "pos": "noun", "meaning": "bird-catcher (Vogel + Fänger)"},
            {"word": "bin ich", "lemma": "sein", "pos": "verb", "meaning": "am I (inversion)"},
            {"word": "ja", "lemma": "ja", "pos": "particle", "meaning": "indeed / as you know"}
        ],
        "Topicalized predicate noun ('Der Vogelfänger') triggers subject-verb inversion ('bin ich')."
    ),
    "stets lustig heißa hopsasa!": (
        "always merry, hurrah, hopsasa!",
        [
            {"word": "stets", "lemma": "stets", "pos": "adverb", "meaning": "always / constantly"},
            {"word": "lustig", "lemma": "lustig", "pos": "adjective", "meaning": "merry / jolly"}
        ],
        None
    ),
    "Ich Vogelfänger bin bekannt": (
        "I bird-catcher am known",
        [
            {"word": "bekannt", "lemma": "kennen", "pos": "adjective", "meaning": "known / renowned"}
        ],
        None
    ),
    "bei Alt und Jung im ganzen Land.": (
        "to old and young in-the whole land.",
        [
            {"word": "bei Alt und Jung", "lemma": "alt", "pos": "idiom", "meaning": "to young and old alike"}
        ],
        None
    ),
    "Weiß mit dem Locken umzugehn": (
        "[I] know with the luring [how] to deal",
        [
            {"word": "Locken", "lemma": "locken", "pos": "noun", "meaning": "luring / bird-calling (substantivized infinitive)"},
            {"word": "umzugehn", "lemma": "umgehen", "pos": "verb", "meaning": "to handle / manage (um...gehen)"}
        ],
        "Infinitive construction with separable prefix: 'um-zu-gehen'."
    ),
    "und mich aufs Pfeifen zu verstehn!": (
        "and myself on piping to understand!",
        [
            {"word": "aufs Pfeifen", "lemma": "Pfeifen", "pos": "noun", "meaning": "on whistling / piping"},
            {"word": "sich verstehen auf", "lemma": "verstehen", "pos": "idiom", "meaning": "to be skilled at / understand"}
        ],
        "Reflexive idiom: 'sich auf etwas (Akk.) verstehen' = to be an expert in something."
    ),
    "Drum kann ich froh und lustig sein,": (
        "Therefore can I glad and merry be,",
        [
            {"word": "Drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / for that reason"},
            {"word": "froh", "lemma": "froh", "pos": "adjective", "meaning": "glad / joyful"}
        ],
        "Inversion after causal conjunction 'drum' (darum)."
    ),
    "denn alle Vögel sind ja mein.": (
        "for all birds are indeed mine.",
        [
            {"word": "denn", "lemma": "denn", "pos": "conjunction", "meaning": "for / because (coordinating conjunction, no inversion)"},
            {"word": "mein", "lemma": "mein", "pos": "pronoun", "meaning": "mine (predicative possessive)"}
        ],
        None
    ),
    "stets lustig, heißa hopsasa!": ("always merry, hurrah, hopsasa!", None, None),
    "Ein Netz für Mädchen möchte ich,": (
        "A net for maidens would-like I,",
        [
            {"word": "Netz", "lemma": "Netz", "pos": "noun", "meaning": "net (neuter)"},
            {"word": "Mädchen", "lemma": "Mädchen", "pos": "noun", "meaning": "maidens / girls (neuter diminutive)"},
            {"word": "möchte", "lemma": "mögen", "pos": "verb", "meaning": "would like (subjunctive II)"}
        ],
        "Object topicalization ('Ein Netz...') causing verb-second inversion ('möchte ich')."
    ),
    "ich fing' sie dutzendweis' für mich.": (
        "I would-catch them by-the-dozen for myself.",
        [
            {"word": "fing'", "lemma": "fangen", "pos": "verb", "meaning": "would catch (subjunctive II 'finge')"},
            {"word": "dutzendweis'", "lemma": "dutzendweise", "pos": "adverb", "meaning": "by the dozen"}
        ],
        None
    ),
    "Dann sperrte ich sie bei mir ein,": (
        "Then would-lock I them at my-place in,",
        [
            {"word": "sperrte ... ein", "lemma": "einsperren", "pos": "verb", "meaning": "would lock up / cage (separable prefix)"},
            {"word": "bei mir", "lemma": "ich", "pos": "pronoun", "meaning": "at my house / in my dwelling"}
        ],
        "Separable verb prefix 'ein' at the clause bracket end."
    ),
    "und alle Mädchen wären mein.": (
        "and all maidens would-be mine.",
        [
            {"word": "wären", "lemma": "sein", "pos": "verb", "meaning": "would be (subjunctive II)"}
        ],
        None
    ),
    "Wenn alle Mädchen wären mein,": (
        "If all maidens would-be mine,",
        [
            {"word": "Wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if"}
        ],
        None
    ),
    "so tauschte ich brav Zucker ein:": (
        "so would-trade I dutifully sugar in:",
        [
            {"word": "tauschte ... ein", "lemma": "eintauschen", "pos": "verb", "meaning": "would trade in / exchange"},
            {"word": "brav", "lemma": "brav", "pos": "adverb", "meaning": "dutifully / well-behaved"}
        ],
        None
    ),
    "die, welche mir am liebsten wär',": (
        "she, who to-me dearest would-be,",
        [
            {"word": "am liebsten", "lemma": "gern", "pos": "adverb", "meaning": "dearest / most preferred (superlative)"}
        ],
        "Dative of interest ('mir am liebsten')."
    ),
    "der gäb' ich gleich den Zucker her.": (
        "to-her would-give I at-once the sugar forth.",
        [
            {"word": "der", "lemma": "die", "pos": "pronoun", "meaning": "to her (demonstrative/relative dative feminine)"},
            {"word": "gäb' ... her", "lemma": "hergeben", "pos": "verb", "meaning": "would hand over / give forth (subjunctive II)"},
            {"word": "gleich", "lemma": "gleich", "pos": "adverb", "meaning": "immediately / at once"}
        ],
        None
    ),
    "Und küßte sie mich zärtlich dann,": (
        "And kissed she me tenderly then,",
        [
            {"word": "küßte", "lemma": "küssen", "pos": "verb", "meaning": "kissed / were to kiss (subjunctive conditional inversion)"},
            {"word": "zärtlich", "lemma": "zärtlich", "pos": "adverb", "meaning": "tenderly / affectionately"}
        ],
        "Hypothetical condition expressed through verb-initial syntax ('küßte sie mich...')."
    ),
    "wär' sie mein Weib und ich ihr Mann.": (
        "would-be she my wife and I her husband.",
        [
            {"word": "Weib", "lemma": "Weib", "pos": "noun", "meaning": "wife (traditional/historical German)"},
            {"word": "Mann", "lemma": "Mann", "pos": "noun", "meaning": "husband / man"}
        ],
        None
    ),
    "Sie schlief' an meiner Seite ein,": (
        "She would-fall-asleep at my side in,",
        [
            {"word": "schlief' ... ein", "lemma": "einschlafen", "pos": "verb", "meaning": "would fall asleep (separable verb in subjunctive II)"}
        ],
        None
    ),
    "ich wiegte wie ein Kind sie ein.": (
        "I would-rock like a child her in [to sleep].",
        [
            {"word": "wiegte ... ein", "lemma": "einwiegen", "pos": "verb", "meaning": "would rock to sleep"}
        ],
        None
    ),

    # SCENE 3: Arie
    "Dies Bildnis ist bezaubernd schön,": (
        "This portrait is enchantingly beautiful,",
        [
            {"word": "Dies Bildnis", "lemma": "Bildnis", "pos": "noun", "meaning": "this portrait (neuter)"},
            {"word": "bezaubernd", "lemma": "bezaubern", "pos": "adjective", "meaning": "enchanting / bewitching (present participle)"}
        ],
        None
    ),
    "wie noch kein Auge je geseh'n.": (
        "as yet no eye ever has seen.",
        [
            {"word": "kein Auge", "lemma": "Auge", "pos": "noun", "meaning": "no eye (neuter subject)"},
            {"word": "je", "lemma": "je", "pos": "adverb", "meaning": "ever"}
        ],
        None
    ),
    "Ich fühl' es, wie dies Götterbild": (
        "I feel it, how this divine-image",
        [
            {"word": "Götterbild", "lemma": "Götterbild", "pos": "noun", "meaning": "image of a goddess / divine portrait"}
        ],
        None
    ),
    "mein Herz mit neuer Regung füllt.": (
        "my heart with new emotion fills.",
        [
            {"word": "Regung", "lemma": "Regung", "pos": "noun", "meaning": "stirring / emotion / impulse (feminine)"}
        ],
        "Verb-final in subordinate clause introduced by 'wie'."
    ),
    "Dies Etwas kann ich zwar nicht nennen,": (
        "This something can I admittedly not name,",
        [
            {"word": "Dies Etwas", "lemma": "etwas", "pos": "noun", "meaning": "this something / indefinable quality"},
            {"word": "zwar", "lemma": "zwar", "pos": "adverb", "meaning": "admittedly / it is true"}
        ],
        "Topicalized direct object ('Dies Etwas') causing V2 inversion ('kann ich')."
    ),
    "doch fühl' ich's hier wie Feuer brennen;": (
        "yet feel I it here like fire burn;",
        [
            {"word": "doch", "lemma": "doch", "pos": "conjunction", "meaning": "yet / nevertheless"},
            {"word": "fühl' ich's", "lemma": "fühlen", "pos": "verb", "meaning": "feel I it (contraction: fühle ich es)"},
            {"word": "wie Feuer", "lemma": "Feuer", "pos": "noun", "meaning": "like fire"}
        ],
        None
    ),
    "soll die Empfindung Liebe sein?": (
        "shall the feeling love be?",
        [
            {"word": "Empfindung", "lemma": "Empfindung", "pos": "noun", "meaning": "feeling / sensation / sentiment"},
            {"word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love"}
        ],
        "Verb-first question syntax ('soll die Empfindung...')."
    ),
    "Ja, ja, die Liebe ist's allein.": (
        "Yes, yes, love is it alone.",
        [
            {"word": "ist's allein", "lemma": "sein", "pos": "verb", "meaning": "is it alone / only it"}
        ],
        None
    ),
    "O wenn ich sie nur finden könnte!": (
        "O if I her only find could!",
        [
            {"word": "finden könnte", "lemma": "können", "pos": "verb", "meaning": "could find (subjunctive II modal)"}
        ],
        "Unfulfilled wish clause with 'wenn' and subjunctive II 'könnte' at clause end."
    ),
    "O wenn sie doch schon vor mir stünde!": (
        "O if she only already before me stood!",
        [
            {"word": "stünde", "lemma": "stehen", "pos": "verb", "meaning": "stood / were standing (subjunctive II of stehen)"}
        ],
        "Subjunctive II form 'stünde' expresses an ardent hypothetical wish."
    ),
    "Ich würde – würde – warm und rein –": (
        "I would – would – warm and pure –",
        [
            {"word": "würde", "lemma": "werden", "pos": "verb", "meaning": "would (subjunctive II auxiliary)"},
            {"word": "warm und rein", "lemma": "rein", "pos": "adjective", "meaning": "warm and pure"}
        ],
        None
    ),
    "was würde ich?": ("what would I?", None, None),
    "Ich würde sie voll Entzücken": (
        "I would her full of rapture",
        [
            {"word": "voll Entzücken", "lemma": "Entzücken", "pos": "noun", "meaning": "full of delight / ecstasy"}
        ],
        None
    ),
    "an diesen heißen Busen drücken,": (
        "against this burning bosom press,",
        [
            {"word": "an diesen heißen Busen", "lemma": "Busen", "pos": "noun", "meaning": "against this ardent chest/bosom (accusative masculine)"},
            {"word": "drücken", "lemma": "drücken", "pos": "verb", "meaning": "to press / clasp"}
        ],
        "Preposition 'an' + accusative indicating movement towards the body."
    ),
    "und ewig wäre sie dann mein!": (
        "and forever would-be she then mine!",
        [
            {"word": "ewig", "lemma": "ewig", "pos": "adverb", "meaning": "eternally / forever"},
            {"word": "wäre sie", "lemma": "sein", "pos": "verb", "meaning": "would she be (subjunctive II inversion)"}
        ],
        None
    ),

    # SCENE 4: Rezitativ und Arie
    "O zitt're nicht, mein lieber Sohn,": (
        "O tremble not, my dear son,",
        [
            {"word": "zitt're", "lemma": "zittern", "pos": "verb", "meaning": "tremble / shake (imperative singular with syncopated 'e')"},
            {"word": "lieber Sohn", "lemma": "Sohn", "pos": "noun", "meaning": "dear son (vocative)"}
        ],
        None
    ),
    "du bist unschuldig, weise, fromm –": (
        "you are innocent, wise, pious –",
        [
            {"word": "unschuldig", "lemma": "unschuldig", "pos": "adjective", "meaning": "innocent / guiltless"},
            {"word": "fromm", "lemma": "fromm", "pos": "adjective", "meaning": "devout / gentle / pious"}
        ],
        None
    ),
    "Ein Jüngling so wie du, vermag am besten,": (
        "A youth such as you, is-able at best,",
        [
            {"word": "vermag", "lemma": "vermögen", "pos": "verb", "meaning": "is capable of / is able"}
        ],
        None
    ),
    "das tiefbetrübte Mutterherz zu trösten. –": (
        "the deeply-afflicted mother's-heart to console. –",
        [
            {"word": "tiefbetrübte", "lemma": "tiefbetrübt", "pos": "adjective", "meaning": "deeply saddened / grieving"},
            {"word": "Mutterherz", "lemma": "Mutterherz", "pos": "noun", "meaning": "mother's heart (Mutter + Herz)"},
            {"word": "zu trösten", "lemma": "trösten", "pos": "verb", "meaning": "to comfort / console"}
        ],
        "Infinitive construction completing 'vermag am besten'."
    ),
    "Zum Leiden bin ich auserkoren,": (
        "For suffering am I chosen,",
        [
            {"word": "Zum Leiden", "lemma": "Leiden", "pos": "noun", "meaning": "for suffering (substantivized infinitive)"},
            {"word": "auserkoren", "lemma": "auserkiesen", "pos": "verb", "meaning": "chosen / singled out"}
        ],
        "Topicalized prepositional phrase ('Zum Leiden') triggers inversion ('bin ich')."
    ),
    "denn meine Tochter fehlet mir.": (
        "for my daughter is-missing to-me.",
        [
            {"word": "fehlet mir", "lemma": "fehlen", "pos": "verb", "meaning": "is missing / lacking to me", "notes": "German construction: 'jemandem fehlen' = to be missed by someone."}
        ],
        "German idiom: 'sie fehlt mir' = I miss her (literally: she is lacking to me)."
    ),
    "Durch sie ging all mein Glück verloren,": (
        "Through her went all my happiness lost,",
        [
            {"word": "ging ... verloren", "lemma": "verlorengehen", "pos": "verb", "meaning": "was lost / perished"}
        ],
        "Idiom: 'verlorengehen' (to get lost / be destroyed)."
    ),
    "ein Bösewicht entfloh mit ihr.": (
        "a villain fled away with her.",
        [
            {"word": "Bösewicht", "lemma": "Bösewicht", "pos": "noun", "meaning": "villain / rogue (böse + Wicht)"},
            {"word": "entfloh", "lemma": "entfliehen", "pos": "verb", "meaning": "fled / escaped (past tense, inseparable prefix 'ent-')"}
        ],
        None
    ),
    "Noch seh' ich ihr Zittern": (
        "Still see I her trembling",
        [
            {"word": "Noch", "lemma": "noch", "pos": "adverb", "meaning": "still / yet"},
            {"word": "Zittern", "lemma": "Zittern", "pos": "noun", "meaning": "trembling / shaking"}
        ],
        None
    ),
    "mit bangem Erschüttern,": (
        "with fearful shuddering,",
        [
            {"word": "bangem", "lemma": "bang", "pos": "adjective", "meaning": "fearful / anxious (dative neuter)"},
            {"word": "Erschüttern", "lemma": "erschüttern", "pos": "noun", "meaning": "shuddering / agitation"}
        ],
        None
    ),
    "ihr ängstliches Beben,": (
        "her anxious quivering,",
        [
            {"word": "ängstliches", "lemma": "ängstlich", "pos": "adjective", "meaning": "fearful / frightened"},
            {"word": "Beben", "lemma": "Beben", "pos": "noun", "meaning": "quivering / trembling"}
        ],
        None
    ),
    "ihr schüchternes Streben.": (
        "her timid struggling.",
        [
            {"word": "schüchternes", "lemma": "schüchtern", "pos": "adjective", "meaning": "timid / shy"},
            {"word": "Streben", "lemma": "Streben", "pos": "noun", "meaning": "struggling / striving"}
        ],
        None
    ),
    "Ich mußte sie mir rauben sehen,": (
        "I had-to her from-me robbed see,",
        [
            {"word": "sie mir rauben sehen", "lemma": "sehen", "pos": "idiom", "meaning": "see her being stolen from me", "notes": "Double infinitive construction with modal 'mußte'."}
        ],
        "Dativus ethicus / separationis: 'mir rauben' = to rob away from me."
    ),
    "ach helft!, war alles was sie sprach –": (
        "ah help!, was all that she spoke –",
        [
            {"word": "helft", "lemma": "helfen", "pos": "verb", "meaning": "help (imperative plural)"}
        ],
        None
    ),
    "allein vergebens war ihr Flehen,": (
        "yet in vain was her pleading,",
        [
            {"word": "allein", "lemma": "allein", "pos": "conjunction", "meaning": "yet / however"},
            {"word": "vergebens", "lemma": "vergebens", "pos": "adverb", "meaning": "in vain / futilely"},
            {"word": "Flehen", "lemma": "Flehen", "pos": "noun", "meaning": "pleading / supplication"}
        ],
        None
    ),
    "denn meine Hilfe war zu schwach.": (
        "for my help was too weak.",
        [
            {"word": "zu schwach", "lemma": "schwach", "pos": "adjective", "meaning": "too weak"}
        ],
        None
    ),
    "Du wirst sie zu befreien gehen,": (
        "You will her to liberate go,",
        [
            {"word": "wirst ... gehen", "lemma": "werden", "pos": "verb", "meaning": "will go (future tense)"},
            {"word": "zu befreien", "lemma": "befreien", "pos": "verb", "meaning": "to liberate / free"}
        ],
        "Future tense 'wirst ... gehen' governing the final infinitive 'zu befreien'."
    ),
    "du wirst der Tochter Retter sein.": (
        "you will the daughter's savior be.",
        [
            {"word": "der Tochter", "lemma": "Tochter", "pos": "noun", "meaning": "of the daughter (genitive feminine)"},
            {"word": "Retter", "lemma": "Retter", "pos": "noun", "meaning": "savior / rescuer"}
        ],
        "Pre-nominal genitive 'der Tochter Retter' = the savior of my daughter."
    ),
    "Und werd' ich dich als Sieger sehen,": (
        "And will I you as victor see,",
        [
            {"word": "werd' ich", "lemma": "werden", "pos": "verb", "meaning": "shall I / if I shall (conditional inversion)"},
            {"word": "Sieger", "lemma": "Sieger", "pos": "noun", "meaning": "victor / conqueror"}
        ],
        "Verb-first conditional inversion ('werd' ich dich... sehen' = and if I see you as victor)."
    ),
    "so sei sie dann auf ewig dein.": (
        "so be she then for eternity yours.",
        [
            {"word": "sei sie", "lemma": "sein", "pos": "verb", "meaning": "let her be (jussive subjunctive I)"},
            {"word": "auf ewig", "lemma": "ewig", "pos": "idiom", "meaning": "for eternity / forever"}
        ],
        "Subjunctive I 'sei' used in third-person imperative / promissory sense ('so let her be yours')."
    ),
}

print(f"Initial translations populated: {len(TRANS)}")

TRANS.update({
    # SCENE 5: Quintett
    "Hm! hm! hm! hm!": ("Hm! hm! hm! hm!", None, None),
    "Der Arme kann von Strafe sagen,": (
        "The poor [man] can of punishment speak,",
        [
            {"word": "Der Arme", "lemma": "arm", "pos": "noun", "meaning": "the poor fellow (substantivized adjective)"},
            {"word": "von Strafe sagen", "lemma": "Strafe", "pos": "idiom", "meaning": "to speak of / testify to punishment"}
        ],
        None
    ),
    "denn seine Sprache ist dahin!": (
        "for his speech is gone!",
        [
            {"word": "Sprache", "lemma": "Sprache", "pos": "noun", "meaning": "speech / ability to speak"},
            {"word": "dahin", "lemma": "dahin", "pos": "adverb", "meaning": "gone / vanished"}
        ],
        None
    ),
    "Ich kann nichts tun, als dich beklagen,": (
        "I can nothing do, but you pity,",
        [
            {"word": "beklagen", "lemma": "beklagen", "pos": "verb", "meaning": "to pity / lament"}
        ],
        None
    ),
    "weil ich zu schwach zu helfen bin!": (
        "because I too weak to help am!",
        [
            {"word": "weil", "lemma": "weil", "pos": "conjunction", "meaning": "because (subordinating conjunction)"},
            {"word": "zu helfen", "lemma": "helfen", "pos": "verb", "meaning": "to help (infinitive with zu)"}
        ],
        "Subordinate clause word order: finite verb 'bin' placed at the end after 'zu helfen'."
    ),
    "Die Königin begnadigt dich,": (
        "The Queen pardons you,",
        [
            {"word": "begnadigt", "lemma": "begnadigen", "pos": "verb", "meaning": "pardons / shows mercy to"}
        ],
        None
    ),
    "entläßt die Strafe dir durch mich. –": (
        "remits the punishment to-you through me. –",
        [
            {"word": "entläßt", "lemma": "entlassen", "pos": "verb", "meaning": "remits / waives"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "durch mich", "lemma": "ich", "pos": "pronoun", "meaning": "through me (accusative with durch)"}
        ],
        None
    ),
    "Nun plaudert Papageno wieder!": (
        "Now chatters Papageno again!",
        [
            {"word": "plaudert", "lemma": "plaudern", "pos": "verb", "meaning": "chatters / talks"}
        ],
        "V2 inversion after initial adverb 'Nun'."
    ),
    "Ja, plaud're – lüge nur nicht wieder!": (
        "Yes, chatter – lie only not again!",
        [
            {"word": "plaud're", "lemma": "plaudern", "pos": "verb", "meaning": "chatter (imperative singular)"},
            {"word": "lüge", "lemma": "lügen", "pos": "verb", "meaning": "lie (imperative singular)"},
            {"word": "nur nicht", "lemma": "nur", "pos": "particle", "meaning": "just not"}
        ],
        None
    ),
    "Ich lüge nimmermehr, nein, nein!": (
        "I lie nevermore, no, no!",
        [
            {"word": "nimmermehr", "lemma": "nimmermehr", "pos": "adverb", "meaning": "nevermore / never again"}
        ],
        None
    ),
    "Dies Schloß soll deine Warnung sein!": (
        "This padlock shall your warning be!",
        [
            {"word": "Schloß", "lemma": "Schloss", "pos": "noun", "meaning": "padlock / lock (neuter)"},
            {"word": "Warnung", "lemma": "Warnung", "pos": "noun", "meaning": "warning (feminine)"}
        ],
        None
    ),
    "Dies Schloß soll meine Warnung sein!": (
        "This padlock shall my warning be!",
        [
            {"word": "meine", "lemma": "mein", "pos": "pronoun", "meaning": "my (possessive)"}
        ],
        None
    ),
    "Bekämen doch die Lügner alle": (
        "Received only the liars all",
        [
            {"word": "Bekämen", "lemma": "bekommen", "pos": "verb", "meaning": "would receive (subjunctive II inversion)"},
            {"word": "Lügner", "lemma": "Lügner", "pos": "noun", "meaning": "liars (masculine plural)"}
        ],
        "Optative subjunctive II inversion: 'Bekämen doch...' = If only all liars received..."
    ),
    "ein solches Schloß vor ihren Mund:": (
        "such a padlock before their mouth:",
        [
            {"word": "ein solches", "lemma": "solcher", "pos": "pronoun", "meaning": "such a"},
            {"word": "Mund", "lemma": "Mund", "pos": "noun", "meaning": "mouth (accusative with directional 'vor')"}
        ],
        None
    ),
    "Statt Haß, Verleumdung, schwarzer Galle": (
        "Instead of hatred, slander, black bile",
        [
            {"word": "Statt", "lemma": "statt", "pos": "preposition", "meaning": "instead of (governing genitive)"},
            {"word": "Haß", "lemma": "Hass", "pos": "noun", "meaning": "hatred"},
            {"word": "Verleumdung", "lemma": "Verleumdung", "pos": "noun", "meaning": "slander / defamation"},
            {"word": "schwarzer Galle", "lemma": "Galle", "pos": "noun", "meaning": "black bile / malice"}
        ],
        None
    ),
    "bestünde Lieb' und Bruderbund!": (
        "would-exist love and brotherhood!",
        [
            {"word": "bestünde", "lemma": "bestehen", "pos": "verb", "meaning": "would exist / endure (subjunctive II)"},
            {"word": "Bruderbund", "lemma": "Bruderbund", "pos": "noun", "meaning": "brotherly bond / fraternity"}
        ],
        None
    ),
    "O Prinz, nimm dies Geschenk von mir,": (
        "O prince, take this gift from me,",
        [
            {"word": "nimm", "lemma": "nehmen", "pos": "verb", "meaning": "take (imperative singular with vowel change e -> i)"},
            {"word": "Geschenk", "lemma": "Geschenk", "pos": "noun", "meaning": "present / gift (neuter)"}
        ],
        None
    ),
    "dies sendet uns're Fürstin dir.": (
        "this sends our sovereign-lady to-you.",
        [
            {"word": "sendet", "lemma": "senden", "pos": "verb", "meaning": "sends"},
            {"word": "dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"}
        ],
        "Fronted object 'dies' triggering inversion: 'sendet uns're Fürstin'."
    ),
    "Die Zauberflöte wird dich schützen,": (
        "The magic flute will you protect,",
        [
            {"word": "Zauberflöte", "lemma": "Zauberflöte", "pos": "noun", "meaning": "magic flute (Zauber + Flöte)"},
            {"word": "schützen", "lemma": "schützen", "pos": "verb", "meaning": "to protect"}
        ],
        None
    ),
    "im größten Unglück unterstützen.": (
        "in-the greatest misfortune support [you].",
        [
            {"word": "im größten Unglück", "lemma": "Unglück", "pos": "noun", "meaning": "in greatest misfortune (dative neuter)"},
            {"word": "unterstützen", "lemma": "unterstützen", "pos": "verb", "meaning": "to support / aid"}
        ],
        None
    ),
    "Hiermit kannst du allmächtig handeln,": (
        "Herewith can you almighty act,",
        [
            {"word": "Hiermit", "lemma": "hiermit", "pos": "adverb", "meaning": "with this / herewith"},
            {"word": "allmächtig", "lemma": "allmächtig", "pos": "adjective", "meaning": "all-powerfully"},
            {"word": "handeln", "lemma": "handeln", "pos": "verb", "meaning": "to act / operate"}
        ],
        None
    ),
    "der Menschen Leidenschaft verwandeln,": (
        "the mortals' passion transform,",
        [
            {"word": "der Menschen", "lemma": "Mensch", "pos": "noun", "meaning": "of mortals / of mankind (genitive plural)"},
            {"word": "Leidenschaft", "lemma": "Leidenschaft", "pos": "noun", "meaning": "passion"},
            {"word": "verwandeln", "lemma": "verwandeln", "pos": "verb", "meaning": "to transform / change"}
        ],
        None
    ),
    "der Traurige wird freudig sein,": (
        "the mournful [man] will joyful be,",
        [
            {"word": "der Traurige", "lemma": "traurig", "pos": "noun", "meaning": "the sad / mournful one"},
            {"word": "freudig", "lemma": "freudig", "pos": "adjective", "meaning": "joyful / cheerful"}
        ],
        None
    ),
    "den Hagestolz nimmt Liebe ein.": (
        "the confirmed-bachelor takes love in [captivates].",
        [
            {"word": "den Hagestolz", "lemma": "Hagestolz", "pos": "noun", "meaning": "confirmed bachelor / old bachelor (accusative object)"},
            {"word": "nimmt ... ein", "lemma": "einnehmen", "pos": "verb", "meaning": "captivates / takes possession of"},
            {"word": "Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "love (nominative subject)"}
        ],
        "OSV word order: direct object 'den Hagestolz' is fronted, subject 'Liebe' follows the verb."
    ),
    "O! so eine Flöte ist mehr": (
        "O! Such a flute is more",
        [
            {"word": "so eine", "lemma": "solch", "pos": "pronoun", "meaning": "such a"}
        ],
        None
    ),
    "als Gold und Kronen wert,": (
        "than gold and crowns worth,",
        [
            {"word": "wert", "lemma": "wert", "pos": "adjective", "meaning": "worth / of value (governs accusative/genitive)"}
        ],
        None
    ),
    "denn durch sie wird Menschenglück": (
        "for through it becomes human-happiness",
        [
            {"word": "Menschenglück", "lemma": "Menschenglück", "pos": "noun", "meaning": "human happiness"}
        ],
        None
    ),
    "und Zufriedenheit vermehrt.": (
        "and contentment increased.",
        [
            {"word": "Zufriedenheit", "lemma": "Zufriedenheit", "pos": "noun", "meaning": "contentment / peace of mind"},
            {"word": "vermehrt", "lemma": "vermehren", "pos": "verb", "meaning": "increased / multiplied (passive participle)"}
        ],
        "Passive voice: 'wird ... vermehrt' = is increased."
    ),
    "Nun ihr schönen Frauenzimmer,": (
        "Now you beautiful ladies,",
        [
            {"word": "Frauenzimmer", "lemma": "Frauenzimmer", "pos": "noun", "meaning": "ladies / gentlewomen (historical 18th-century polite term)"}
        ],
        None
    ),
    "darf ich? So empfehl' ich mich.": (
        "may I? So commend I myself [take my leave].",
        [
            {"word": "empfehl' ich mich", "lemma": "sich empfehlen", "pos": "idiom", "meaning": "I take my leave / commend myself to you"}
        ],
        "Formal idiom: 'sich empfehlen' = to take one's leave."
    ),
    "Dich empfehlen kannst du immer,": (
        "Yourself commend can you always,",
        [
            {"word": "Dich empfehlen", "lemma": "sich empfehlen", "pos": "verb", "meaning": "to take leave (fronted infinitive phrase)"}
        ],
        "Fronted infinitive phrase triggering V2 inversion ('kannst du')."
    ),
    "doch bestimmt die Fürstin dich,": (
        "yet designates the sovereign-lady you,",
        [
            {"word": "bestimmt", "lemma": "bestimmen", "pos": "verb", "meaning": "appoints / designates / directs"}
        ],
        None
    ),
    "mit dem Prinzen ohn' Verweilen": (
        "with the prince without delay",
        [
            {"word": "ohn' Verweilen", "lemma": "Verweilen", "pos": "idiom", "meaning": "without delay / tarrying"}
        ],
        None
    ),
    "nach Sarastros Burg zu eilen.": (
        "towards Sarastro's castle to hurry.",
        [
            {"word": "Burg", "lemma": "Burg", "pos": "noun", "meaning": "castle / fortress"},
            {"word": "zu eilen", "lemma": "eilen", "pos": "verb", "meaning": "to hasten / hurry"}
        ],
        None
    ),
    "Nein dafür bedank' ich mich.": (
        "No for-that thank I myself [No thank you].",
        [
            {"word": "dafür bedank' ich mich", "lemma": "sich bedanken", "pos": "idiom", "meaning": "I politely decline (ironic: no thank you!)"}
        ],
        None
    ),
    "Von euch selbster hörte ich,": (
        "From you yourselves heard I,",
        [
            {"word": "selbster", "lemma": "selbst", "pos": "pronoun", "meaning": "yourselves (archaic emphatic suffix '-er')"}
        ],
        None
    ),
    "daß er wie ein Tigertier.": (
        "that he [is] like a tiger-beast.",
        [
            {"word": "Tigertier", "lemma": "Tigertier", "pos": "noun", "meaning": "tiger-beast (ferocious beast)"}
        ],
        "Ellipsis of copular verb 'ist' in colloquial poetry."
    ),
    "Sicher ließ' ohn' alle Gnaden": (
        "Surely would-let without any mercy",
        [
            {"word": "ließ'", "lemma": "lassen", "pos": "verb", "meaning": "would have / let (subjunctive II 'ließe')"},
            {"word": "ohn' alle Gnaden", "lemma": "Gnade", "pos": "idiom", "meaning": "without any mercy"}
        ],
        None
    ),
    "mich Sarastro rupfen, braten,": (
        "me Sarastro pluck, roast,",
        [
            {"word": "rupfen", "lemma": "rupfen", "pos": "verb", "meaning": "to pluck (feathers)"},
            {"word": "braten", "lemma": "braten", "pos": "verb", "meaning": "to roast"}
        ],
        "Causative 'lassen' + active infinitives with passive sense ('have me plucked and roasted')."
    ),
    "setzte mich den Hunden für.": (
        "would-set me to-the dogs before [cast me to the dogs].",
        [
            {"word": "setzte ... für", "lemma": "fürsetzen", "pos": "verb", "meaning": "set before / serve up to (separable prefix)"},
            {"word": "den Hunden", "lemma": "Hund", "pos": "noun", "meaning": "to the dogs (dative plural)"}
        ],
        None
    ),
    "Dich schützt der Prinz, trau ihm allein,": (
        "You protects the prince, trust him alone,",
        [
            {"word": "Dich schützt der Prinz", "lemma": "schützen", "pos": "verb", "meaning": "the prince protects you (OSV)"},
            {"word": "trau ihm", "lemma": "trauen", "pos": "verb", "meaning": "trust him (governs dative 'ihm')"}
        ],
        "'Trauen' governs the dative object ('ihm')."
    ),
    "dafür sollst du sein Diener sein.": (
        "in-return shall you his servant be.",
        [
            {"word": "dafür", "lemma": "dafür", "pos": "adverb", "meaning": "in exchange / in return"},
            {"word": "Diener", "lemma": "Diener", "pos": "noun", "meaning": "servant"}
        ],
        None
    ),
    "Daß doch der Prinz beim Teufel wäre.": (
        "That only the prince with-the devil were!",
        [
            {"word": "beim Teufel", "lemma": "Teufel", "pos": "idiom", "meaning": "with the devil (curse/exclamation)"}
        ],
        "Optative clause: 'Daß doch... wäre' = Would that the prince were with the devil!"
    ),
    "Mein Leben ist mir lieb.": (
        "My life is to-me dear.",
        [
            {"word": "lieb", "lemma": "lieb", "pos": "adjective", "meaning": "dear / precious (governs dative 'mir')"}
        ],
        "Dative construction: 'jemandem lieb sein' = to be precious to someone."
    ),
    "Am Ende schleicht, bei meiner Ehre,": (
        "In the end sneaks, upon my honor,",
        [
            {"word": "Am Ende", "lemma": "Ende", "pos": "idiom", "meaning": "in the end / in fact"},
            {"word": "schleicht", "lemma": "schleichen", "pos": "verb", "meaning": "sneaks / creeps"}
        ],
        None
    ),
    "er von mir wie ein Dieb. –": (
        "he away-from me like a thief. –",
        [
            {"word": "Dieb", "lemma": "Dieb", "pos": "noun", "meaning": "thief"}
        ],
        None
    ),
    "Hier, nimm dies Kleinod, es ist dein.": (
        "Here, take this jewel, it is yours.",
        [
            {"word": "Kleinod", "lemma": "Kleinod", "pos": "noun", "meaning": "jewel / precious treasure (neuter)"}
        ],
        None
    ),
    "Ei! ei! was mag darinnen sein? –": (
        "Ah! Ah! What may therein be? –",
        [
            {"word": "mag ... sein", "lemma": "mögen", "pos": "verb", "meaning": "may be (epistemic modal)"},
            {"word": "darinnen", "lemma": "darin", "pos": "adverb", "meaning": "in there / therein"}
        ],
        None
    ),
    "Darinnen hörst du Glöckchen tönen!": (
        "Therein hear you little-bells chime!",
        [
            {"word": "Glöckchen", "lemma": "Glocke", "pos": "noun", "meaning": "little bells / chimes (diminutive)"},
            {"word": "tönen", "lemma": "tönen", "pos": "verb", "meaning": "to chime / sound"}
        ],
        None
    ),
    "Werd' ich sie auch wohl spielen können?": (
        "Will I them also perhaps play be-able-to?",
        [
            {"word": "wohl", "lemma": "wohl", "pos": "particle", "meaning": "perhaps / indeed (modal particle)"},
            {"word": "spielen können", "lemma": "können", "pos": "verb", "meaning": "be able to play (double infinitive)"}
        ],
        "Future interrogative with modal verb: 'Werde ich ... spielen können?'"
    ),
    "O ganz gewiß! ja ja gewiß!": ("O completely surely! Yes, yes, surely!", None, None),
    "Silberglöckchen, Zauberflöten": (
        "Silver-bells, magic flutes",
        [
            {"word": "Silberglöckchen", "lemma": "Silberglöckchen", "pos": "noun", "meaning": "silver bells"}
        ],
        None
    ),
    "sind zu eurem/unserm Schutz vonnöten!": (
        "are for your/our protection necessary!",
        [
            {"word": "vonnöten", "lemma": "vonnöten", "pos": "adverb", "meaning": "necessary / needful (von Nöten)"}
        ],
        "Predicate idiom: 'vonnöten sein' = to be necessary."
    ),
    "Lebet wohl! wir wollen gehn!": (
        "Fare well! We want-to go!",
        [
            {"word": "Lebet wohl", "lemma": "leben", "pos": "idiom", "meaning": "farewell (plural imperative)"}
        ],
        None
    ),
    "Lebet wohl – auf Wiedersehn!": ("Fare well – until we see each other again!", None, None),
    "Doch schöne Damen saget an ...": (
        "Yet fair ladies tell us ...",
        [
            {"word": "saget an", "lemma": "ansagen", "pos": "verb", "meaning": "declare / tell (separable prefix imperative)"}
        ],
        None
    ),
    "... wo man die Burg wohl finden kann? –": (
        "... where one the castle indeed find can? –",
        [
            {"word": "wo man", "lemma": "man", "pos": "pronoun", "meaning": "where one (impersonal pronoun)"}
        ],
        "Indirect question word order: verb 'kann' at the end."
    ),
    "... wo man die Burg wohl finden kann?": ("... where one the castle indeed find can?", None, None),
    "Drei Knäbchen, jung, schön, hold und weise": (
        "Three little-boys, young, handsome, gracious and wise",
        [
            {"word": "Knäbchen", "lemma": "Knabe", "pos": "noun", "meaning": "little boys / young youths (diminutive)"}
        ],
        None
    ),
    "umschweben euch auf eurer Reise.": (
        "hover-around you on your journey.",
        [
            {"word": "umschweben", "lemma": "umschweben", "pos": "verb", "meaning": "hover around / encircle"}
        ],
        None
    ),
    "Sie werden eure Führer sein,": (
        "They will your guides be,",
        [
            {"word": "Führer", "lemma": "Führer", "pos": "noun", "meaning": "guides / leaders"}
        ],
        None
    ),
    "folgt ihrem Rate ganz allein.": (
        "follow their advice completely alone.",
        [
            {"word": "folgt", "lemma": "folgen", "pos": "verb", "meaning": "follow (imperative, governs dative)"},
            {"word": "ihrem Rate", "lemma": "Rat", "pos": "noun", "meaning": "their counsel / advice (dative masculine)"}
        ],
        "'Folgen' governs the dative object ('ihrem Rate')."
    ),
    "Drei Knäbchen, jung, schön, hold und weise": ("Three little-boys, young, handsome, gracious and wise", None, None),
    "umschweben uns auf uns'rer Reise? –": ("hover-around us on our journey? –", None, None),
    "So lebet wohl! wir wollen gehn;": ("So fare well! We want-to go;", None, None),
    "lebt wohl, lebt wohl, auf Wiedersehn!": ("fare well, fare well, until seeing-again!", None, None),
    "So lebet wohl! wir wollen gehn!": ("So fare well! We want-to go!", None, None),

    # SCENE 6: Terzett
    "Du feines Täubchen, nur herein.": (
        "You delicate little-dove, just [come] in.",
        [
            {"word": "feines Täubchen", "lemma": "Taube", "pos": "noun", "meaning": "delicate little dove (diminutive)"},
            {"word": "nur herein", "lemma": "herein", "pos": "adverb", "meaning": "just come in (directional adverb as command)"}
        ],
        "Directional adverb 'herein' used elliptically as an imperative motion verb."
    ),
    "O welche Marter, welche Pein!": (
        "O what torment, what agony!",
        [
            {"word": "Marter", "lemma": "Marter", "pos": "noun", "meaning": "torture / torment (feminine)"},
            {"word": "Pein", "lemma": "Pein", "pos": "noun", "meaning": "pain / anguish (feminine)"}
        ],
        None
    ),
    "Verloren ist dein Leben.": (
        "Forfeited is your life.",
        [
            {"word": "Verloren", "lemma": "verlieren", "pos": "adjective", "meaning": "lost / doomed / forfeit"}
        ],
        "Fronted predicate adjective causing inversion: 'Verloren ist dein Leben'."
    ),
    "Der Tod macht mich nicht beben;": (
        "Death makes me not tremble;",
        [
            {"word": "beben", "lemma": "beben", "pos": "verb", "meaning": "to quake / tremble"}
        ],
        "Causative 'machen' + bare infinitive: 'macht mich nicht beben'."
    ),
    "nur meine Mutter dauert mich,": (
        "only my mother grieves me,",
        [
            {"word": "dauert mich", "lemma": "dauern", "pos": "verb", "meaning": "causes me grief / makes me feel sorrow", "notes": "Archaic/idiomatic: 'jemanden dauern' = to move someone to pity/sorrow."}
        ],
        "Idiomatic construction: 'jemanden dauern' = to make someone feel sorrow."
    ),
    "sie stirbt vor Gram ganz sicherlich.": (
        "she dies from grief completely surely.",
        [
            {"word": "vor Gram", "lemma": "Gram", "pos": "noun", "meaning": "from grief / sorrow (dative cause with 'vor')"},
            {"word": "ganz sicherlich", "lemma": "sicherlich", "pos": "adverb", "meaning": "most surely"}
        ],
        "Preposition 'vor' expressing involuntary cause or emotion (vor Gram, vor Freude)."
    ),
    "He, Sklaven, legt ihr Fesseln an;": (
        "Hey, slaves, put on-her fetters on;",
        [
            {"word": "Fesseln", "lemma": "Fessel", "pos": "noun", "meaning": "chains / shackles / fetters"},
            {"word": "legt ... an", "lemma": "anlegen", "pos": "verb", "meaning": "put on / bind (separable verb)"},
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "on her (dative of affected person)"}
        ],
        None
    ),
    "mein Haß soll dich verderben!": (
        "my hatred shall you destroy!",
        [
            {"word": "verderben", "lemma": "verderben", "pos": "verb", "meaning": "to ruin / destroy"}
        ],
        None
    ),
    "O laß mich lieber sterben,": (
        "O let me rather die,",
        [
            {"word": "lieber", "lemma": "gern", "pos": "adverb", "meaning": "rather / preferably (comparative of gern)"}
        ],
        None
    ),
    "weil nichts, Barbar! dich rühren kann.": (
        "because nothing, barbarian! you move can.",
        [
            {"word": "Barbar", "lemma": "Barbar", "pos": "noun", "meaning": "barbarian (vocative)"},
            {"word": "rühren", "lemma": "rühren", "pos": "verb", "meaning": "to touch / move emotionally"}
        ],
        "Verb-final in causal clause with 'weil': 'dich rühren kann'."
    ),
    "Nun fort! Nun fort!": ("Now away! Now away!", None, None),
    "Laßt mich bei ihr allein.": (
        "Leave me with her alone.",
        [
            {"word": "Laßt", "lemma": "lassen", "pos": "verb", "meaning": "let / leave (imperative plural)"}
        ],
        None
    ),
    "Wo bin ich wohl?! wo mag ich sein?": (
        "Where am I perhaps?! Where may I be?",
        [
            {"word": "mag ich sein", "lemma": "mögen", "pos": "verb", "meaning": "might I be"}
        ],
        None
    ),
    "Aha, da find' ich Leute, gewagt; ich geh' hinein.": (
        "Aha, there find I people; ventured [it]; I go inside.",
        [
            {"word": "gewagt", "lemma": "wagen", "pos": "verb", "meaning": "ventured / here goes nothing"}
        ],
        None
    ),
    "Schön Mädchen jung und rein,": (
        "Beautiful maiden young and pure,",
        [
            {"word": "Schön Mädchen", "lemma": "Mädchen", "pos": "noun", "meaning": "fair maiden (uninflected poetic adjective)"}
        ],
        None
    ),
    "viel weißer noch als Kreide...": (
        "much whiter still than chalk...",
        [
            {"word": "weißer", "lemma": "weiß", "pos": "adjective", "meaning": "whiter (comparative)"},
            {"word": "Kreide", "lemma": "Kreide", "pos": "noun", "meaning": "chalk (feminine)"}
        ],
        None
    ),
    "Hu – – das ist – der Teufel sicherlich.": (
        "Hu – – that is – the devil surely.",
        [
            {"word": "Teufel", "lemma": "Teufel", "pos": "noun", "meaning": "devil"}
        ],
        None
    ),
    "Hab Mitleid – verschone mich – Hu – Hu –": (
        "Have pity – spare me – Hu – Hu –",
        [
            {"word": "Mitleid", "lemma": "Mitleid", "pos": "noun", "meaning": "pity / compassion"},
            {"word": "verschone", "lemma": "verschonen", "pos": "verb", "meaning": "spare (imperative singular)"}
        ],
        None
    ),

    # SCENE 7: Duett
    "Bei Männern, welche Liebe fühlen,": (
        "In men, who love feel,",
        [
            {"word": "Bei Männern", "lemma": "Mann", "pos": "noun", "meaning": "among men (dative plural with 'bei')"},
            {"word": "welche", "lemma": "welcher", "pos": "pronoun", "meaning": "who / which (relative pronoun)"},
            {"word": "Liebe fühlen", "lemma": "fühlen", "pos": "verb", "meaning": "feel love"}
        ],
        "Relative clause: verb 'fühlen' at end."
    ),
    "fehlt auch ein gutes Herze nicht.": (
        "lacks also a good heart not [is a good heart not lacking].",
        [
            {"word": "fehlt ... nicht", "lemma": "fehlen", "pos": "verb", "meaning": "is not lacking"},
            {"word": "Herze", "lemma": "Herz", "pos": "noun", "meaning": "heart (archaic dative/nominative form of Herz)"}
        ],
        "Archaic noun form 'Herze' for standard modern 'Herz'."
    ),
    "Die süßen Triebe mitzufühlen,": (
        "The sweet impulses to-feel-with [sympathize],",
        [
            {"word": "süßen Triebe", "lemma": "Trieb", "pos": "noun", "meaning": "sweet drives / desires / impulses"},
            {"word": "mitzufühlen", "lemma": "mitfühlen", "pos": "verb", "meaning": "to sympathize / feel in common (separable infinitive)"}
        ],
        None
    ),
    "ist dann der Weiber erste Pflicht.": (
        "is then the women's first duty.",
        [
            {"word": "der Weiber", "lemma": "Weib", "pos": "noun", "meaning": "of women (genitive plural)"},
            {"word": "erste Pflicht", "lemma": "Pflicht", "pos": "noun", "meaning": "first / foremost duty"}
        ],
        "Pre-nominal genitive 'der Weiber erste Pflicht'."
    ),
    "Wir wollen uns der Liebe freu'n,": (
        "We will ourselves in-the love rejoice,",
        [
            {"word": "uns ... freu'n", "lemma": "sich freuen", "pos": "verb", "meaning": "rejoice / delight"},
            {"word": "der Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "in love (genitive of object of rejoicing)"}
        ],
        "Genitive object with reflexive verb: 'sich einer Sache (Gen.) freuen'."
    ),
    "wir leben durch die Lieb' allein.": (
        "we live through love alone.",
        [
            {"word": "durch die Lieb'", "lemma": "Liebe", "pos": "noun", "meaning": "through love (accusative with 'durch')"}
        ],
        None
    ),
    "Die Lieb' versüßet jede Plage,": (
        "Love sweetens every hardship,",
        [
            {"word": "versüßet", "lemma": "versüßen", "pos": "verb", "meaning": "sweetens (archaic -et ending)"},
            {"word": "Plage", "lemma": "Plage", "pos": "noun", "meaning": "torment / hardship / plague"}
        ],
        None
    ),
    "ihr opfert jede Kreatur.": (
        "to-her sacrifices every creature.",
        [
            {"word": "ihr", "lemma": "sie", "pos": "pronoun", "meaning": "to her [to love] (dative)"},
            {"word": "opfert", "lemma": "opfern", "pos": "verb", "meaning": "sacrifices"},
            {"word": "jede Kreatur", "lemma": "Kreatur", "pos": "noun", "meaning": "every creature (nominative subject)"}
        ],
        "Inversion after fronted dative pronoun 'ihr' (to love)."
    ),
    "Sie würzet uns're Lebenstage,": (
        "She spices our days-of-life,",
        [
            {"word": "würzet", "lemma": "würzen", "pos": "verb", "meaning": "seasons / spices / enriches"},
            {"word": "Lebenstage", "lemma": "Lebenstag", "pos": "noun", "meaning": "days of one's life"}
        ],
        None
    ),
    "sie wirkt im Kreise der Natur.": (
        "she works in-the cycle of nature.",
        [
            {"word": "wirkt", "lemma": "wirken", "pos": "verb", "meaning": "acts / works / has effect"},
            {"word": "im Kreise", "lemma": "Kreis", "pos": "noun", "meaning": "in the sphere / cycle"},
            {"word": "der Natur", "lemma": "Natur", "pos": "noun", "meaning": "of nature (genitive feminine)"}
        ],
        None
    ),
    "Ihr hoher Zweck zeigt deutlich an:": (
        "Her elevated purpose indicates clearly on:",
        [
            {"word": "Zweck", "lemma": "Zweck", "pos": "noun", "meaning": "purpose / goal (masculine)"},
            {"word": "deutlich", "lemma": "deutlich", "pos": "adverb", "meaning": "clearly / plainly"},
            {"word": "zeigt ... an", "lemma": "anzeigen", "pos": "verb", "meaning": "indicates / demonstrates (separable verb)"}
        ],
        None
    ),
    "nichts Edler's sei, als Weib und Mann.": (
        "nothing nobler be, than wife and husband [woman and man].",
        [
            {"word": "Edler's", "lemma": "edel", "pos": "adjective", "meaning": "nobler (comparative substantivized neuter)"},
            {"word": "sei", "lemma": "sein", "pos": "verb", "meaning": "be (subjunctive I indirect discourse)"}
        ],
        "Subjunctive I 'sei' used in reported evaluation ('that nothing is nobler...')."
    ),
    "Mann und Weib, und Weib und Mann,": ("Husband and wife, and wife and husband,", None, None),
    "reichen an die Gottheit an.": (
        "reach unto the godhead up-to.",
        [
            {"word": "reichen ... an", "lemma": "anreichen", "pos": "verb", "meaning": "reach up to / approach"},
            {"word": "an die Gottheit", "lemma": "Gottheit", "pos": "noun", "meaning": "unto the divinity / godhead"}
        ],
        "Separable verb 'anreichen an' = to touch / reach up to divinity."
    )
})

from scripts.make_act1_ts import TRANS

TRANS_FINALE1 = {
    # 1. Three Boys & Tamino
    "Zum Ziele führt dich diese Bahn,": (
        "To-the goal leads you this path,",
        [
            {"word": "Zum Ziele", "lemma": "Ziel", "pos": "noun", "meaning": "to the goal / destination (zu + dem)"},
            {"word": "führt", "lemma": "führen", "pos": "verb", "meaning": "leads / guides"},
            {"word": "Bahn", "lemma": "Bahn", "pos": "noun", "meaning": "path / course / track (feminine)"}
        ],
        "Fronted prepositional phrase 'Zum Ziele' triggers V2 inversion ('führt dich diese Bahn')."
    ),
    "doch mußt du Jüngling männlich siegen,": (
        "yet must you youth manfully conquer,",
        [
            {"word": "männlich", "lemma": "männlich", "pos": "adverb", "meaning": "manfully / valiantly"},
            {"word": "siegen", "lemma": "siegen", "pos": "verb", "meaning": "to conquer / triumph"}
        ],
        None
    ),
    "drum höre uns're Lehre an:": (
        "therefore listen our teaching to [heed our instruction]:",
        [
            {"word": "drum", "lemma": "darum", "pos": "adverb", "meaning": "therefore / for that reason"},
            {"word": "höre ... an", "lemma": "anhören", "pos": "verb", "meaning": "listen to / heed (separable verb imperative)"},
            {"word": "Lehre", "lemma": "Lehre", "pos": "noun", "meaning": "teaching / precept (feminine)"}
        ],
        None
    ),
    "Sei standhaft, duldsam, und verschwiegen! –": (
        "Be steadfast, patient, and discreet! –",
        [
            {"word": "Sei", "lemma": "sein", "pos": "verb", "meaning": "be (imperative singular)"},
            {"word": "standhaft", "lemma": "standhaft", "pos": "adjective", "meaning": "steadfast / resolute"},
            {"word": "duldsam", "lemma": "duldsam", "pos": "adjective", "meaning": "patient / forbearing"},
            {"word": "verschwiegen", "lemma": "verschwiegen", "pos": "adjective", "meaning": "discreet / secretive / silent"}
        ],
        "The three Masonic virtues demanded of initiates: steadfastness, patience, discretion."
    ),
    "sei standhaft, duldsam und verschwiegen!": ("be steadfast, patient and discreet!", None, None),
    "Ihr holden Knaben sagt mir an,": (
        "You gracious boys tell to-me on [tell me],",
        [
            {"word": "sagt ... an", "lemma": "ansagen", "pos": "verb", "meaning": "declare / tell (plural imperative)"},
            {"word": "mir", "lemma": "ich", "pos": "pronoun", "meaning": "to me (dative)"}
        ],
        None
    ),
    "ob ich Pamina retten kann? –": (
        "whether I Pamina rescue can? –",
        [
            {"word": "ob", "lemma": "ob", "pos": "conjunction", "meaning": "whether / if (indirect question)"},
            {"word": "retten kann", "lemma": "können", "pos": "verb", "meaning": "can rescue"}
        ],
        "Subordinate clause word order: modal verb 'kann' placed at the very end."
    ),
    "Dies kund zu tun steht uns nicht an;": (
        "This known to make stands to-us not on [is not fitting for us to disclose];",
        [
            {"word": "kund zu tun", "lemma": "kundtun", "pos": "verb", "meaning": "to make known / disclose (separable infinitive with zu)"},
            {"word": "anstehen", "lemma": "anstehen", "pos": "idiom", "meaning": "to be fitting / be incumbent upon (governs dative 'uns')"}
        ],
        "Idiomatic construction: 'jemandem anstehen' = to be proper/fitting for someone."
    ),
    "Bedenke dies, kurz: sei ein Mann. –": (
        "Consider this, in short: be a man. –",
        [
            {"word": "Bedenke", "lemma": "bedenken", "pos": "verb", "meaning": "consider / reflect upon (imperative singular)"},
            {"word": "kurz", "lemma": "kurz", "pos": "adverb", "meaning": "in short / briefly"}
        ],
        None
    ),
    "Dann Jüngling wirst du männlich siegen.": (
        "Then youth will you manfully triumph.",
        [
            {"word": "Dann", "lemma": "dann", "pos": "adverb", "meaning": "then / in that case"},
            {"word": "wirst du ... siegen", "lemma": "siegen", "pos": "verb", "meaning": "you will conquer (future tense inversion)"}
        ],
        None
    ),
    "Die Weisheitslehre dieser Knaben": (
        "The wisdom-teaching of-these boys",
        [
            {"word": "Weisheitslehre", "lemma": "Weisheitslehre", "pos": "noun", "meaning": "teaching of wisdom (Weisheit + Lehre)"},
            {"word": "dieser Knaben", "lemma": "Knabe", "pos": "noun", "meaning": "of these boys (genitive plural weak noun ending -n)"}
        ],
        None
    ),
    "sei ewig mir ins Herz gegraben.": (
        "be forever to-me into-the heart engraved.",
        [
            {"word": "sei ... gegraben", "lemma": "graben", "pos": "verb", "meaning": "be engraved (jussive subjunctive I passive)"},
            {"word": "ins Herz", "lemma": "Herz", "pos": "noun", "meaning": "into the heart (in + das Herz)"}
        ],
        "Subjunctive I 'sei' used optatively: 'may it be engraved into my heart forever'."
    ),
    "Wo bin ich nun? – Was wird mit mir?": (
        "Where am I now? – What becomes with me [what will become of me]?",
        [
            {"word": "Was wird mit mir", "lemma": "werden", "pos": "idiom", "meaning": "what will become of me"}
        ],
        None
    ),
    "Ist dies der Sitz der Götter hier? –": (
        "Is this the seat of-the gods here? –",
        [
            {"word": "Sitz", "lemma": "Sitz", "pos": "noun", "meaning": "seat / dwelling / abode (masculine)"},
            {"word": "der Götter", "lemma": "Gott", "pos": "noun", "meaning": "of the gods (genitive plural)"}
        ],
        None
    ),
    "Es zeigen die Pforten – es zeigen die Säulen,": (
        "It show the portals – it show the columns [the gates and columns show],",
        [
            {"word": "Pforten", "lemma": "Pforte", "pos": "noun", "meaning": "portals / gates"},
            {"word": "Säulen", "lemma": "Säule", "pos": "noun", "meaning": "columns / pillars"}
        ],
        "Expletive 'es' anticipatory subject: 'Es zeigen die Pforten' = The portals show."
    ),
    "daß Klugheit, und Arbeit, und Künste hier weilen.": (
        "that prudence, and labor, and arts here dwell.",
        [
            {"word": "Klugheit", "lemma": "Klugheit", "pos": "noun", "meaning": "prudence / wisdom (feminine)"},
            {"word": "Arbeit", "lemma": "Arbeit", "pos": "noun", "meaning": "work / labor / industry"},
            {"word": "Künste", "lemma": "Kunst", "pos": "noun", "meaning": "arts (plural)"},
            {"word": "weilen", "lemma": "weilen", "pos": "verb", "meaning": "dwell / abide / tarry"}
        ],
        "Enlightenment triad: Prudence, Industry, and the Arts."
    ),
    "Wo Tätigkeit thronet und Müßiggang weicht,": (
        "Where activity thrones and idleness yields,",
        [
            {"word": "Tätigkeit", "lemma": "Tätigkeit", "pos": "noun", "meaning": "activity / industry / diligence"},
            {"word": "thronet", "lemma": "thronen", "pos": "verb", "meaning": "is enthroned / reigns"},
            {"word": "Müßiggang", "lemma": "Müßiggang", "pos": "noun", "meaning": "idleness / sloth (müßig + Gang)"},
            {"word": "weicht", "lemma": "weichen", "pos": "verb", "meaning": "yields / retreats / gives way"}
        ],
        None
    ),
    "erhält seine Herrschaft das Laster nicht leicht.": (
        "maintains its dominion vice not easily.",
        [
            {"word": "erhält", "lemma": "erhalten", "pos": "verb", "meaning": "maintains / preserves"},
            {"word": "Herrschaft", "lemma": "Herrschaft", "pos": "noun", "meaning": "rule / dominion / control"},
            {"word": "das Laster", "lemma": "Laster", "pos": "noun", "meaning": "vice (neuter nominative subject)"},
            {"word": "leicht", "lemma": "leicht", "pos": "adverb", "meaning": "easily"}
        ],
        "OVS inversion: object 'seine Herrschaft' precedes subject 'das Laster'."
    ),
    "Ich wage mich mutig zur Pforte hinein.": (
        "I venture myself boldly to-the portal inside.",
        [
            {"word": "Ich wage mich", "lemma": "sich wagen", "pos": "verb", "meaning": "I venture / dare to enter (reflexive)"},
            {"word": "mutig", "lemma": "mutig", "pos": "adverb", "meaning": "boldly / courageously"},
            {"word": "hinein", "lemma": "hinein", "pos": "adverb", "meaning": "inside (directional away from speaker)"}
        ],
        None
    ),
    "Die Absicht ist edel, und lauter, und rein.": (
        "The intention is noble, and sincere, and pure.",
        [
            {"word": "Absicht", "lemma": "Absicht", "pos": "noun", "meaning": "intention / purpose (feminine)"},
            {"word": "edel", "lemma": "edel", "pos": "adjective", "meaning": "noble"},
            {"word": "lauter", "lemma": "lauter", "pos": "adjective", "meaning": "unblemished / pure / upright"},
            {"word": "rein", "lemma": "rein", "pos": "adjective", "meaning": "pure / spotless"}
        ],
        None
    ),
    "Erzitt're feiger Bösewicht!": (
        "Tremble, cowardly villain!",
        [
            {"word": "Erzitt're", "lemma": "erzittern", "pos": "verb", "meaning": "tremble / shudder (imperative singular with inchoative prefix er-)"},
            {"word": "feiger", "lemma": "feig", "pos": "adjective", "meaning": "cowardly (vocative masculine)"}
        ],
        None
    ),
    "Paminen retten ist mir Pflicht!": (
        "Pamina to-rescue is to-me duty!",
        [
            {"word": "Paminen", "lemma": "Pamina", "pos": "noun", "meaning": "Pamina (accusative with classical feminine ending -en)"},
            {"word": "retten", "lemma": "retten", "pos": "verb", "meaning": "to rescue (infinitive subject)"},
            {"word": "mir Pflicht", "lemma": "Pflicht", "pos": "idiom", "meaning": "my duty / incumbent upon me"}
        ],
        "Classical -en accusative suffix for feminine proper names (Paminen)."
    ),
    "Zurück!": ("Back!", None, None),
    "Zurück? zurück? – so wag ich hier mein Glück!": (
        "Back? Back? – so venture I here my luck!",
        [
            {"word": "wag ich", "lemma": "wagen", "pos": "verb", "meaning": "dare I / venture I (inversion)"},
            {"word": "mein Glück", "lemma": "Glück", "pos": "noun", "meaning": "my fortune / luck"}
        ],
        None
    ),
    "Auch hier ruft man „zurück\"?": (
        "Also here calls one \"back\"?",
        [
            {"word": "ruft man", "lemma": "rufen", "pos": "verb", "meaning": "calls one / do they call"}
        ],
        None
    ),
    "Da seh' ich noch eine Tür.": (
        "There see I yet another door.",
        [
            {"word": "noch eine", "lemma": "noch", "pos": "idiom", "meaning": "yet another / one more"}
        ],
        None
    ),
    "Vielleicht find' ich den Eingang hier!": (
        "Perhaps find I the entrance here!",
        [
            {"word": "Eingang", "lemma": "Eingang", "pos": "noun", "meaning": "entrance / entryway (masculine)"}
        ],
        None
    ),
    "Wo willst du kühner Fremdling hin?": (
        "Where want you bold stranger thither [where do you intend to go]?",
        [
            {"word": "kühner Fremdling", "lemma": "Fremdling", "pos": "noun", "meaning": "bold stranger (vocative)"},
            {"word": "hin", "lemma": "hin", "pos": "adverb", "meaning": "thither / to what place"}
        ],
        "Modal 'wollen' + directional adverb 'hin' implying a verb of motion."
    ),
    "Was suchst du hier im Heiligtum? –": (
        "What seek you here in-the sanctuary? –",
        [
            {"word": "suchst du", "lemma": "suchen", "pos": "verb", "meaning": "seek you / are you looking for"},
            {"word": "Heiligtum", "lemma": "Heiligtum", "pos": "noun", "meaning": "sanctuary / holy shrine (neuter)"}
        ],
        None
    ),
    "Der Lieb' und Tugend Eigentum.": (
        "Of love and virtue [the] property.",
        [
            {"word": "Der Lieb' und Tugend", "lemma": "Liebe", "pos": "noun", "meaning": "of love and virtue (genitive)"},
            {"word": "Eigentum", "lemma": "Eigentum", "pos": "noun", "meaning": "property / rightful domain (neuter)"}
        ],
        None
    ),
    "Die Worte sind von hohem Sinn –": (
        "The words are of high meaning [profound import] –",
        [
            {"word": "von hohem Sinn", "lemma": "Sinn", "pos": "noun", "meaning": "of lofty meaning / high sense (dative masculine)"}
        ],
        None
    ),
    "allein, wie willst du diese finden?": (
        "yet, how will you these find?",
        [
            {"word": "allein", "lemma": "allein", "pos": "conjunction", "meaning": "yet / however"},
            {"word": "diese", "lemma": "dieser", "pos": "pronoun", "meaning": "these (accusative plural)"}
        ],
        None
    ),
    "Dich leitet Lieb' und Tugend nicht,": (
        "You guides love and virtue not [love and virtue do not guide you],",
        [
            {"word": "Dich", "lemma": "du", "pos": "pronoun", "meaning": "you (accusative direct object)"},
            {"word": "leitet", "lemma": "leiten", "pos": "verb", "meaning": "guides / leads"}
        ],
        "OSV word order: direct object 'Dich' is placed first for emphasis."
    ),
    "weil Tod und Rache dich entzünden.": (
        "because death and vengeance you inflame.",
        [
            {"word": "Rache", "lemma": "Rache", "pos": "noun", "meaning": "revenge / vengeance (feminine)"},
            {"word": "entzünden", "lemma": "entzünden", "pos": "verb", "meaning": "inflame / kindle"}
        ],
        "Subordinate clause word order: verb 'entzünden' at the end."
    ),
    "Nur Rache für den Bösewicht.": (
        "Only revenge for the villain.",
        [
            {"word": "Nur Rache", "lemma": "Rache", "pos": "noun", "meaning": "only vengeance"}
        ],
        None
    ),
    "Den wirst du wohl bei uns nicht finden.": (
        "That-one will you surely among us not find.",
        [
            {"word": "Den", "lemma": "der", "pos": "pronoun", "meaning": "that one / him (demonstrative accusative)"},
            {"word": "wohl", "lemma": "wohl", "pos": "particle", "meaning": "surely / presumably (modal particle)"}
        ],
        None
    ),
    "Sarastro herrscht in diesen Gründen?": (
        "Sarastro rules in these grounds [territories]?",
        [
            {"word": "herrscht", "lemma": "herrschen", "pos": "verb", "meaning": "rules / reigns"},
            {"word": "Gründen", "lemma": "Grund", "pos": "noun", "meaning": "grounds / lands / valley (dative plural)"}
        ],
        None
    ),
    "Ja, ja, Sarastro herrschet hier.": (
        "Yes, yes, Sarastro rules here.",
        [
            {"word": "herrschet", "lemma": "herrschen", "pos": "verb", "meaning": "rules (archaic -et suffix)"}
        ],
        None
    ),
    "Doch in der Weisheit Tempel nicht? –": (
        "Yet in wisdom's temple not? –",
        [
            {"word": "der Weisheit Tempel", "lemma": "Tempel", "pos": "noun", "meaning": "wisdom's temple (pre-nominal genitive)"}
        ],
        None
    ),
    "Er herrscht im Weisheitstempel hier! –": (
        "He rules in-the temple of wisdom here! –",
        [
            {"word": "Weisheitstempel", "lemma": "Weisheitstempel", "pos": "noun", "meaning": "temple of wisdom"}
        ],
        None
    ),
    "So ist denn alles Heuchelei! –": (
        "So is then everything hypocrisy! –",
        [
            {"word": "Heuchelei", "lemma": "Heuchelei", "pos": "noun", "meaning": "hypocrisy / deceit (feminine)"},
            {"word": "denn", "lemma": "denn", "pos": "particle", "meaning": "then / indeed"}
        ],
        None
    ),
    "Willst du schon wieder geh'n?": (
        "Want you already again to-go [do you want to leave already]?",
        [
            {"word": "schon wieder", "lemma": "schon", "pos": "adverb", "meaning": "already again"}
        ],
        None
    ),
    "Ja ich will gehen, froh, und frei –": (
        "Yes I will go, glad, and free –",
        [
            {"word": "froh, und frei", "lemma": "frei", "pos": "adjective", "meaning": "glad and free"}
        ],
        None
    ),
    "nie euren Tempel sehn! –": (
        "never your temple see! –",
        [
            {"word": "nie", "lemma": "nie", "pos": "adverb", "meaning": "never"}
        ],
        None
    ),
    "Erklär dich näher mir,": (
        "Explain yourself more-closely to-me,",
        [
            {"word": "Erklär dich", "lemma": "sich erklären", "pos": "verb", "meaning": "explain yourself (imperative)"},
            {"word": "näher", "lemma": "nah", "pos": "adverb", "meaning": "more closely / in more detail (comparative)"}
        ],
        None
    ),
    "dich täuschet ein Betrug! –": (
        "you deceives a deception [a fraud is deceiving you]! –",
        [
            {"word": "täuschet", "lemma": "täuschen", "pos": "verb", "meaning": "deceives / misleads"},
            {"word": "Betrug", "lemma": "Betrug", "pos": "noun", "meaning": "deception / deceit (masculine nominative subject)"}
        ],
        "OVS word order: accusative pronoun 'dich' precedes verb and subject 'ein Betrug'."
    ),
    "Sarastro wohnet hier,": (
        "Sarastro dwells here,",
        [
            {"word": "wohnet", "lemma": "wohnen", "pos": "verb", "meaning": "dwells / resides (archaic -et)"}
        ],
        None
    ),
    "das ist mir schon genug! –": (
        "that is to-me already enough! –",
        [
            {"word": "genug", "lemma": "genug", "pos": "adverb", "meaning": "enough / sufficient"}
        ],
        None
    ),
    "Wenn du dein Leben liebst, so rede, bleibe da! –": (
        "If you your life love, so speak, stay there! –",
        [
            {"word": "Wenn", "lemma": "wenn", "pos": "conjunction", "meaning": "if"},
            {"word": "bleibe da", "lemma": "dableiben", "pos": "verb", "meaning": "stay there / remain (imperative)"}
        ],
        None
    ),
    "Sarastro hassest du?": (
        "Sarastro hate you [do you hate Sarastro]?",
        [
            {"word": "hassest", "lemma": "hassen", "pos": "verb", "meaning": "hate (second person singular)"}
        ],
        "Fronted object 'Sarastro' in a question: 'Do you hate Sarastro?'"
    ),
    "Ich haß' ihn ewig, ja! –": (
        "I hate him eternally, yes! –",
        [
            {"word": "ewig", "lemma": "ewig", "pos": "adverb", "meaning": "eternally / forever"}
        ],
        None
    ),
    "So gib mir deine Gründe an! –": (
        "So give to-me your reasons on [state your reasons]! –",
        [
            {"word": "gib ... an", "lemma": "angeben", "pos": "verb", "meaning": "state / provide (separable verb imperative)"},
            {"word": "Gründe", "lemma": "Grund", "pos": "noun", "meaning": "reasons / grounds (masculine plural)"}
        ],
        None
    ),
    "Er ist ein Unmensch, ein Tyrann! –": (
        "He is a monster [inhuman being], a tyrant! –",
        [
            {"word": "Unmensch", "lemma": "Unmensch", "pos": "noun", "meaning": "monster / brute / inhuman being (un- + Mensch)"},
            {"word": "Tyrann", "lemma": "Tyrann", "pos": "noun", "meaning": "tyrant"}
        ],
        None
    ),
    "Ist das, was du gesagt, erwiesen?": (
        "Is that, which you said, proven?",
        [
            {"word": "erwiesen", "lemma": "erweisen", "pos": "verb", "meaning": "proven / demonstrated (past participle)"}
        ],
        "Ellipsis of auxiliary 'hast' in relative clause ('was du gesagt [hast]')."
    ),
    "Durch ein unglücklich Weib bewiesen,": (
        "Through an unhappy woman proven,",
        [
            {"word": "unglücklich Weib", "lemma": "Weib", "pos": "noun", "meaning": "unfortunate woman (uninflected poetic adjective)"},
            {"word": "bewiesen", "lemma": "beweisen", "pos": "verb", "meaning": "proven"}
        ],
        None
    ),
    "das Gram und Jammer niederdrückt!": (
        "whom grief and misery oppresses down!",
        [
            {"word": "das", "lemma": "das", "pos": "pronoun", "meaning": "whom / which (relative pronoun referring to Weib)"},
            {"word": "Jammer", "lemma": "Jammer", "pos": "noun", "meaning": "misery / sorrow (masculine)"},
            {"word": "niederdrückt", "lemma": "niederdrücken", "pos": "verb", "meaning": "weighs down / oppresses"}
        ],
        "Relative pronoun 'das' takes neuter gender from grammatical antecedent 'Weib'."
    ),
    "Ein Weib hat also dich berückt? –": (
        "A woman has thus you bewitched [deluded]? –",
        [
            {"word": "berückt", "lemma": "berücken", "pos": "verb", "meaning": "beguiled / enchanted / deluded"}
        ],
        None
    ),
    "Ein Weib tut wenig, plaudert viel,": (
        "A woman does little, chatters much,",
        [
            {"word": "plaudert viel", "lemma": "plaudern", "pos": "verb", "meaning": "chats / talks much"}
        ],
        None
    ),
    "du Jüngling glaubst dem Zungenspiel? –": (
        "you youth believe the tongue-play [idle gossip]? –",
        [
            {"word": "Zungenspiel", "lemma": "Zungenspiel", "pos": "noun", "meaning": "tongue-play / chatter / babble (dative neuter)"}
        ],
        "'Glauben' governs the dative of the thing believed ('dem Zungenspiel')."
    ),
    "O legte doch Sarastro dir": (
        "O laid only Sarastro to-you",
        [
            {"word": "legte ... vor", "lemma": "vorlegen", "pos": "verb", "meaning": "would set forth / explain (subjunctive II inversion)"}
        ],
        "Optative wish with 'doch': 'O legte doch Sarastro dir... für' = If only Sarastro explained to you..."
    ),
    "die Absicht seiner Handlung für. –": (
        "the intention of-his action before [explained his action to you]. –",
        [
            {"word": "seiner Handlung", "lemma": "Handlung", "pos": "noun", "meaning": "of his action (genitive feminine)"},
            {"word": "für", "lemma": "fürlegen", "pos": "verb", "meaning": "separable prefix equivalent to 'vor' (archaic/regional)"}
        ],
        None
    ),
    "Die Absicht ist nur allzu klar!": (
        "The intention is only all-too clear!",
        [
            {"word": "allzu klar", "lemma": "klar", "pos": "adverb", "meaning": "all too clear"}
        ],
        None
    ),
    "Riß nicht der Räuber ohn' Erbarmen": (
        "Tore not the robber without mercy",
        [
            {"word": "Riß", "lemma": "reißen", "pos": "verb", "meaning": "tore / snatched (past tense)"},
            {"word": "Räuber", "lemma": "Räuber", "pos": "noun", "meaning": "robber / captor"},
            {"word": "ohn' Erbarmen", "lemma": "Erbarmen", "pos": "idiom", "meaning": "mercilessly / without pity"}
        ],
        None
    ),
    "Pamina aus der Mutter Armen? –": (
        "Pamina out of-the mother's arms? –",
        [
            {"word": "der Mutter Armen", "lemma": "Arm", "pos": "noun", "meaning": "the mother's arms (dative plural with 'aus')"}
        ],
        None
    ),
    "Ja Jüngling, was du sagst, ist wahr! –": (
        "Yes youth, what you say, is true! –",
        [
            {"word": "wahr", "lemma": "wahr", "pos": "adjective", "meaning": "true"}
        ],
        None
    ),
    "Wo ist sie, die er uns geraubt?": (
        "Where is she, whom he from-us robbed?",
        [
            {"word": "geraubt", "lemma": "rauben", "pos": "verb", "meaning": "robbed / abducted (past participle with ellipsis of 'hat')"}
        ],
        "Dativus separationis: 'uns geraubt' = stolen from us."
    ),
    "Man opferte vielleicht sie schon? –": (
        "One sacrificed perhaps her already [has she already been sacrificed]? –",
        [
            {"word": "opferte", "lemma": "opfern", "pos": "verb", "meaning": "sacrificed"}
        ],
        None
    ),
    "Dir dies zu sagen, teurer Sohn,": (
        "To-you this to say, dear son,",
        [
            {"word": "Dir", "lemma": "du", "pos": "pronoun", "meaning": "to you (dative)"},
            {"word": "dies", "lemma": "dies", "pos": "pronoun", "meaning": "this (accusative)"}
        ],
        None
    ),
    "ist jetzt und mir noch nicht erlaubt. –": (
        "is now and to-me not yet permitted. –",
        [
            {"word": "erlaubt", "lemma": "erlauben", "pos": "verb", "meaning": "permitted / allowed (governs dative 'mir')"}
        ],
        "Impersonal passive with dative: 'mir ist nicht erlaubt' = I am not permitted."
    ),
    "Erklär dies Rätsel, täusch mich nicht!": (
        "Explain this riddle, deceive me not!",
        [
            {"word": "Rätsel", "lemma": "Rätsel", "pos": "noun", "meaning": "riddle / mystery (neuter)"},
            {"word": "täusch", "lemma": "täuschen", "pos": "verb", "meaning": "deceive / fool (imperative singular)"}
        ],
        None
    ),
    "Die Zunge bindet Eid und Pflicht!": (
        "The tongue binds oath and duty [oath and duty bind the tongue]!",
        [
            {"word": "Die Zunge", "lemma": "Zunge", "pos": "noun", "meaning": "the tongue (accusative object)"},
            {"word": "Eid", "lemma": "Eid", "pos": "noun", "meaning": "oath (masculine)"},
            {"word": "Pflicht", "lemma": "Pflicht", "pos": "noun", "meaning": "duty"}
        ],
        "OVS word order: 'Die Zunge' is accusative, subject 'Eid und Pflicht' follows."
    ),
    "Wann also wird die Decke schwinden? –": (
        "When thus will the veil vanish [when will the veil be lifted]? –",
        [
            {"word": "Decke", "lemma": "Decke", "pos": "noun", "meaning": "covering / veil / shroud"},
            {"word": "schwinden", "lemma": "schwinden", "pos": "verb", "meaning": "vanish / disappear"}
        ],
        None
    ),
    "Sobald dich führt der Freundschaft Hand": (
        "As soon as you leads of-friendship hand [friendship's hand leads you]",
        [
            {"word": "Sobald", "lemma": "sobald", "pos": "conjunction", "meaning": "as soon as"},
            {"word": "der Freundschaft Hand", "lemma": "Hand", "pos": "noun", "meaning": "hand of friendship (pre-nominal genitive)"}
        ],
        "Inversion in subordinate clause: object 'dich' precedes verb and subject 'der Freundschaft Hand'."
    ),
    "ins Heiligtum zum ew'gen Band.": (
        "into-the sanctuary to-the eternal bond.",
        [
            {"word": "ew'gen Band", "lemma": "Band", "pos": "noun", "meaning": "eternal bond / tie (dative neuter)"}
        ],
        None
    ),
    "O ew'ge Nacht! Wann wirst du schwinden?": (
        "O eternal night! When will you vanish?",
        [
            {"word": "ew'ge Nacht", "lemma": "Nacht", "pos": "noun", "meaning": "eternal night (feminine vocative)"}
        ],
        None
    ),
    "Wann wird das Licht mein Auge finden? –": (
        "When will the light my eye find?",
        [
            {"word": "Licht", "lemma": "Licht", "pos": "noun", "meaning": "light (neuter subject)"}
        ],
        None
    ),
    "Bald, Jüngling, oder nie!": ("Soon, youth, or never!", None, None),
    "Bald, sagt ihr, oder nie? –": ("Soon, say you, or never? –", None, None),
    "Ihr Unsichtbaren saget mir:": (
        "You invisible-ones tell to-me:",
        [
            {"word": "Ihr Unsichtbaren", "lemma": "unsichtbar", "pos": "noun", "meaning": "you invisible ones (substantivized plural adjective)"}
        ],
        None
    ),
    "lebt denn Pamina noch? –": (
        "lives then Pamina still [is Pamina still alive]?",
        [
            {"word": "lebt ... noch", "lemma": "leben", "pos": "verb", "meaning": "is still alive"}
        ],
        "Verb-first question syntax."
    ),
    "Pamina lebet noch!": (
        "Pamina lives still!",
        [
            {"word": "lebet", "lemma": "leben", "pos": "verb", "meaning": "lives (archaic -et)"}
        ],
        None
    ),
    "Sie lebt, sie lebt!": ("She lives, she lives!", None, None),
    "Ich danke euch dafür.": (
        "I thank you for-that.",
        [
            {"word": "euch", "lemma": "ihr", "pos": "pronoun", "meaning": "you (dative plural with 'danken')"},
            {"word": "dafür", "lemma": "dafür", "pos": "pronoun", "meaning": "for that"}
        ],
        "'Danken' governs the dative person ('euch')."
    ),
    "O wenn ich doch im Stande wäre,": (
        "O if I only in-the position were [were able],",
        [
            {"word": "im Stande wäre", "lemma": "imstande", "pos": "idiom", "meaning": "were capable / in a position to (subjunctive II of sein)"}
        ],
        "Idiom: 'imstande sein' = to be able/capable."
    ),
    "Allmächtige, zu eurer Ehre,": (
        "Almighty-ones, to your honor,",
        [
            {"word": "Allmächtige", "lemma": "Allmächtige", "pos": "noun", "meaning": "Almighty gods (vocative plural)"},
            {"word": "zu eurer Ehre", "lemma": "Ehre", "pos": "idiom", "meaning": "in your honor"}
        ],
        None
    ),
    "mit jedem Tone meinen Dank": (
        "with every tone my gratitude",
        [
            {"word": "mit jedem Tone", "lemma": "Ton", "pos": "noun", "meaning": "with every tone / note (dative masculine)"},
            {"word": "meinen Dank", "lemma": "Dank", "pos": "noun", "meaning": "my thanks / gratitude (accusative masculine)"}
        ],
        None
    ),
    "zu schildern, wie er hier,": (
        "to portray, as it here,",
        [
            {"word": "zu schildern", "lemma": "schildern", "pos": "verb", "meaning": "to depict / portray"}
        ],
        None
    ),
    "hier entsprang.": (
        "here sprang forth.",
        [
            {"word": "entsprang", "lemma": "entspringen", "pos": "verb", "meaning": "originated / sprang forth (past tense)"}
        ],
        None
    ),
    "Wie stark ist nicht dein Zauberton,": (
        "How strong is not your magic-tone [how potent is your magical sound],",
        [
            {"word": "Zauberton", "lemma": "Zauberton", "pos": "noun", "meaning": "magical sound / enchanted tone"}
        ],
        "Exclamatory question with pleonastic 'nicht' (French: ne explétif): 'How powerful is your magical sound!'"
    ),
    "weil holde Flöte durch dein Spielen": (
        "because, gracious flute, through your playing",
        [
            {"word": "holde Flöte", "lemma": "Flöte", "pos": "noun", "meaning": "lovely/gracious flute (vocative)"},
            {"word": "Spielen", "lemma": "spielen", "pos": "noun", "meaning": "playing (substantivized neuter)"}
        ],
        None
    ),
    "selbst wilde Tiere Freude fühlen.": (
        "even wild beasts joy feel.",
        [
            {"word": "selbst", "lemma": "selbst", "pos": "particle", "meaning": "even"},
            {"word": "wilde Tiere", "lemma": "Tier", "pos": "noun", "meaning": "wild animals (nominative plural)"},
            {"word": "Freude fühlen", "lemma": "fühlen", "pos": "verb", "meaning": "feel joy"}
        ],
        "Subordinate clause verb-final placement: 'Freude fühlen'."
    ),
    "Doch nur Pamina bleibt davon.": (
        "Yet only Pamina remains [absent] therefrom.",
        [
            {"word": "bleibt davon", "lemma": "bleiben", "pos": "verb", "meaning": "remains unaffected / absent from it"}
        ],
        None
    ),
    "Pamina! Pamina! höre, höre mich! –": ("Pamina! Pamina! Hear, hear me! –", None, None),
    "Umsonst, umsonst! –": (
        "In vain, in vain! –",
        [
            {"word": "Umsonst", "lemma": "umsonst", "pos": "adverb", "meaning": "in vain / futilely"}
        ],
        None
    ),
    "Wo? wo? wo? ach wo, wo find' ich dich? –": ("Where? Where? Where? Ah where, where find I you? –", None, None),
    "Ha, das ist Papagenos Ton! –": (
        "Ha, that is Papageno's tone! –",
        [
            {"word": "Papagenos Ton", "lemma": "Ton", "pos": "noun", "meaning": "Papageno's panpipe call"}
        ],
        None
    ),
    "Vielleicht sah er Paminen schon! –": (
        "Perhaps saw he Pamina already! –",
        [
            {"word": "sah er", "lemma": "sehen", "pos": "verb", "meaning": "saw he (inversion after vielleicht)"}
        ],
        None
    ),
    "Vielleicht eilt sie mit ihm zu mir! –": (
        "Perhaps hurries she with him to me! –",
        [
            {"word": "eilt sie", "lemma": "eilen", "pos": "verb", "meaning": "hurries she (inversion)"}
        ],
        None
    ),
    "Vielleicht führt mich der Ton zu ihr!": (
        "Perhaps leads me the tone to her!",
        [
            {"word": "führt mich der Ton", "lemma": "führen", "pos": "verb", "meaning": "leads me the tone (V2 inversion: verb - object - subject)"}
        ],
        None
    ),
    "Schnelle Füße, rascher Mut,": (
        "Swift feet, quick courage,",
        [
            {"word": "Schnelle Füße", "lemma": "Fuß", "pos": "noun", "meaning": "swift feet (nominative plural)"},
            {"word": "rascher Mut", "lemma": "Mut", "pos": "noun", "meaning": "quick / resolute courage (masculine)"}
        ],
        None
    ),
    "schützt vor Feindes List und Wut.": (
        "protects against enemy's cunning and fury.",
        [
            {"word": "Feindes", "lemma": "Feind", "pos": "noun", "meaning": "of the enemy (genitive masculine)"},
            {"word": "List", "lemma": "List", "pos": "noun", "meaning": "cunning / deceit (feminine)"},
            {"word": "Wut", "lemma": "Wut", "pos": "noun", "meaning": "rage / fury"}
        ],
        None
    ),
    "Fänden wir Tamino doch,": (
        "Found we Tamino only [if only we found Tamino],",
        [
            {"word": "Fänden wir", "lemma": "finden", "pos": "verb", "meaning": "would we find / if we found (subjunctive II inversion)"}
        ],
        "Optative wish inversion: 'Fänden wir ... doch' = If only we could find..."
    ),
    "sonst erwischen sie uns noch!": (
        "otherwise catch they us yet [or they will catch us]!",
        [
            {"word": "erwischen", "lemma": "erwischen", "pos": "verb", "meaning": "to catch / seize / apprehend"}
        ],
        None
    ),
    "Holder Jüngling! –": ("Lovely youth! –", None, None),
    "Stille, stille, ich kann's besser! –": (
        "Quiet, quiet, I can it better! –",
        [
            {"word": "Stille", "lemma": "still", "pos": "adverb", "meaning": "quietly / hush"},
            {"word": "kann's besser", "lemma": "können", "pos": "idiom", "meaning": "can do it better"}
        ],
        None
    ),
    "Welche Freude ist wohl größer,": (
        "Which joy is indeed greater,",
        [
            {"word": "größer", "lemma": "groß", "pos": "adjective", "meaning": "greater (comparative)"}
        ],
        None
    ),
    "Freund Tamino hört uns schon,": (
        "Friend Tamino hears us already,",
        [
            {"word": "Freund", "lemma": "Freund", "pos": "noun", "meaning": "friend (vocative)"}
        ],
        None
    ),
    "hieher kam der Flötenton.": (
        "hither came the flute-tone.",
        [
            {"word": "hieher", "lemma": "hierher", "pos": "adverb", "meaning": "hither / towards here"},
            {"word": "Flötenton", "lemma": "Flötenton", "pos": "noun", "meaning": "flute sound"}
        ],
        None
    ),
    "Welch ein Glück, wenn ich ihn finde,": (
        "What a fortune, if I him find,",
        [
            {"word": "Welch ein Glück", "lemma": "Glück", "pos": "noun", "meaning": "what happiness / what good luck"}
        ],
        None
    ),
    "nur geschwinde, nur geschwinde!": (
        "only quickly, only quickly!",
        [
            {"word": "geschwinde", "lemma": "geschwind", "pos": "adverb", "meaning": "swiftly / quickly"}
        ],
        None
    ),
    "Nur geschwinde, nur geschwinde...": ("Only quickly, only quickly...", None, None),
    "Ha! – hab' ich euch noch erwischt!": (
        "Ha! – Have I you after all caught!",
        [
            {"word": "hab' ich ... erwischt", "lemma": "erwischen", "pos": "verb", "meaning": "have I caught you (perfect tense)"},
            {"word": "noch", "lemma": "noch", "pos": "particle", "meaning": "after all / yet"}
        ],
        None
    ),
    "Nur herbei mit Stahl und Eisen;": (
        "Only hither with steel and iron;",
        [
            {"word": "herbei", "lemma": "herbei", "pos": "adverb", "meaning": "hither / bring forth"},
            {"word": "Stahl und Eisen", "lemma": "Stahl", "pos": "noun", "meaning": "steel and iron (shackles)"}
        ],
        None
    ),
    "wart, man wird euch Mores weisen!": (
        "wait, one will to-you manners show [we'll teach you manners]!",
        [
            {"word": "Mores weisen", "lemma": "Mores", "pos": "idiom", "meaning": "to teach someone manners / discipline (Latin mores)", "notes": "Historical idiom from Latin 'mores' (customs/morals)."}
        ],
        "Idiom: 'jemandem Mores lehren/weisen' = to teach someone manners / discipline someone."
    ),
    "Den Monostatos berücken! –": (
        "The Monostatos beguile [beguile Monostatos, will you]! –",
        [
            {"word": "Den Monostatos", "lemma": "Monostatos", "pos": "noun", "meaning": "Monostatos (accusative object)"},
            {"word": "berücken", "lemma": "berücken", "pos": "verb", "meaning": "to outwit / fool / trick"}
        ],
        None
    ),
    "Nun herbei mit Band und Stricken,": (
        "Now hither with ties and ropes,",
        [
            {"word": "Band", "lemma": "Band", "pos": "noun", "meaning": "bonds / cords (neuter)"},
            {"word": "Stricken", "lemma": "Strick", "pos": "noun", "meaning": "ropes / cords (dative plural)"}
        ],
        None
    ),
    "he, ihr Sklaven kommt herbei! –": (
        "hey, you slaves come hither! –",
        [
            {"word": "kommt herbei", "lemma": "herbeikommen", "pos": "verb", "meaning": "come hither / gather round"}
        ],
        None
    ),
    "Ach! nun ist's mit uns vorbei!": (
        "Ah! Now is it with us over [it is all over for us]!",
        [
            {"word": "vorbei", "lemma": "vorbei", "pos": "adverb", "meaning": "over / finished"}
        ],
        "Idiom: 'es ist mit jemandem vorbei' = it's all over for someone."
    ),
    "He! ihr Sklaven kommt herbei!": ("Hey! You slaves come hither!", None, None),
    "Wer viel wagt, gewinnt oft viel!": (
        "Who much ventures, wins often much!",
        [
            {"word": "wagt", "lemma": "wagen", "pos": "verb", "meaning": "dares / ventures"},
            {"word": "gewinnt", "lemma": "gewinnen", "pos": "verb", "meaning": "wins / gains"}
        ],
        "Proverbial relative clause: 'Wer viel wagt, gewinnt oft viel' (Nothing ventured, nothing gained)."
    ),
    "Komm, du schönes Glockenspiel,": (
        "Come, you beautiful chime-play [magic bells],",
        [
            {"word": "Glockenspiel", "lemma": "Glockenspiel", "pos": "noun", "meaning": "glockenspiel / carillon / chime (neuter)"}
        ],
        None
    ),
    "laß die Glöckchen klingen, klingen,": (
        "let the little-bells ring, ring,",
        [
            {"word": "klingen", "lemma": "klingen", "pos": "verb", "meaning": "to ring / chime"}
        ],
        None
    ),
    "daß die Ohren ihnen singen.": (
        "so-that the ears to-them sing [their ears ring].",
        [
            {"word": "daß", "lemma": "dass", "pos": "conjunction", "meaning": "so that (consecutive clause)"},
            {"word": "die Ohren ihnen singen", "lemma": "singen", "pos": "idiom", "meaning": "their ears ring"}
        ],
        "German idiom: 'jemandem singen/klingen die Ohren' = someone's ears are ringing."
    ),
    "Das klinget so herrlich, das klinget so schön!": (
        "That chimes so gloriously, that chimes so beautifully!",
        [
            {"word": "klinget", "lemma": "klingen", "pos": "verb", "meaning": "chimes / sounds (archaic -et)"},
            {"word": "herrlich", "lemma": "herrlich", "pos": "adjective", "meaning": "magnificently / wonderfully"}
        ],
        None
    ),
    "La ra la la la la ra la la la la ra la.": ("La ra la la la la ra la la la la ra la.", None, None),
    "Nie hab' ich so etwas gehört und geseh'n!": (
        "Never have I such a-thing heard and seen!",
        [
            {"word": "so etwas", "lemma": "etwas", "pos": "pronoun", "meaning": "such a thing"},
            {"word": "gehört und geseh'n", "lemma": "hören", "pos": "verb", "meaning": "heard and seen (perfect participles)"}
        ],
        "Fronted negative adverb 'Nie' triggers V2 inversion: 'hab' ich... gehört'."
    ),
    "Könnte jeder brave Mann": (
        "Could every upright man",
        [
            {"word": "Könnte", "lemma": "können", "pos": "verb", "meaning": "could (subjunctive II inversion)"},
            {"word": "brave Mann", "lemma": "brav", "pos": "noun", "meaning": "honest / upright man (masculine)"}
        ],
        "Hypothetical condition with verb-first syntax ('Könnte jeder...')."
    ),
    "solche Glöckchen finden,": (
        "such little-bells find,",
        [
            {"word": "solche", "lemma": "solcher", "pos": "pronoun", "meaning": "such (accusative plural)"}
        ],
        None
    ),
    "seine Feinde würden dann": (
        "his enemies would then",
        [
            {"word": "seine Feinde", "lemma": "Feind", "pos": "noun", "meaning": "his enemies (nominative plural)"},
            {"word": "würden", "lemma": "werden", "pos": "verb", "meaning": "would (subjunctive II auxiliary)"}
        ],
        None
    ),
    "ohne Mühe schwinden.": (
        "without effort vanish.",
        [
            {"word": "ohne Mühe", "lemma": "Mühe", "pos": "noun", "meaning": "effortlessly / without trouble"},
            {"word": "schwinden", "lemma": "schwinden", "pos": "verb", "meaning": "to dwindle / vanish"}
        ],
        None
    ),
    "Und er lebte ohne sie": (
        "And he would-live without them",
        [
            {"word": "lebte", "lemma": "leben", "pos": "verb", "meaning": "would live (subjunctive II)"},
            {"word": "ohne sie", "lemma": "sie", "pos": "pronoun", "meaning": "without them (accusative with ohne)"}
        ],
        None
    ),
    "in der besten Harmonie!": (
        "in the best harmony!",
        [
            {"word": "besten Harmonie", "lemma": "Harmonie", "pos": "noun", "meaning": "best harmony (dative feminine superlative)"}
        ],
        None
    ),
    "Nur der Freundschaft Harmonie": (
        "Only friendship's harmony",
        [
            {"word": "der Freundschaft", "lemma": "Freundschaft", "pos": "noun", "meaning": "of friendship (pre-nominal genitive)"}
        ],
        None
    ),
    "mildert die Beschwerden,": (
        "mitigates the burdens,",
        [
            {"word": "mildert", "lemma": "mildern", "pos": "verb", "meaning": "softens / mitigates / alleviates"},
            {"word": "Beschwerden", "lemma": "Beschwerde", "pos": "noun", "meaning": "grievances / hardships / burdens (plural)"}
        ],
        None
    ),
    "ohne diese Sympathie": (
        "without this sympathy [fellow-feeling],",
        [
            {"word": "Sympathie", "lemma": "Sympathie", "pos": "noun", "meaning": "mutual affinity / sympathy (in the Greek sense: feeling together)"}
        ],
        None
    ),
    "ist kein Glück auf Erden.": (
        "is no happiness on earth.",
        [
            {"word": "auf Erden", "lemma": "Erde", "pos": "noun", "meaning": "on earth (archaic dative singular ending in -n)"}
        ],
        "Archaic weak dative ending: 'auf Erden' for modern 'auf der Erde'."
    ),
    "Es lebe Sarastro! Sarastro lebe! –": (
        "Long live Sarastro! Sarastro long-live! –",
        [
            {"word": "Es lebe", "lemma": "leben", "pos": "verb", "meaning": "long live (third-person subjunctive I optative)"}
        ],
        "Third person subjunctive I optative: 'Es lebe...' = Long live...!"
    ),
    "Was soll dies bedeuten? Ich zitt're, ich bebe! –": (
        "What shall this mean? I tremble, I quake! –",
        [
            {"word": "bedeuten", "lemma": "bedeuten", "pos": "verb", "meaning": "to signify / mean"}
        ],
        None
    ),
    "O Freund! nun ist's um uns getan!": (
        "O friend! Now is it about us done [we are done for]!",
        [
            {"word": "um uns getan", "lemma": "tun", "pos": "idiom", "meaning": "all over for us / done for"}
        ],
        "German idiom: 'es ist um jemanden getan' = someone is finished / doomed."
    ),
    "Dies kündigt den Sarastro an!": (
        "This announces [the arrival of] Sarastro!",
        [
            {"word": "kündigt ... an", "lemma": "ankündigen", "pos": "verb", "meaning": "announces / proclaims (separable verb)"},
            {"word": "den Sarastro", "lemma": "Sarastro", "pos": "noun", "meaning": "Sarastro (accusative with definite article in colloquial/regional German)"}
        ],
        "Use of definite article with proper name ('den Sarastro') common in southern German/Austrian speech."
    ),
    "O wär' ich eine Maus,": (
        "O were I a mouse,",
        [
            {"word": "wär' ich", "lemma": "sein", "pos": "verb", "meaning": "were I (subjunctive II wish)"},
            {"word": "Maus", "lemma": "Maus", "pos": "noun", "meaning": "mouse (feminine)"}
        ],
        None
    ),
    "wie wollt' ich mich verstecken,": (
        "how would I myself hide,",
        [
            {"word": "wollt' ich", "lemma": "wollen", "pos": "verb", "meaning": "would I (subjunctive II inversion)"},
            {"word": "mich verstecken", "lemma": "sich verstecken", "pos": "verb", "meaning": "hide myself (reflexive)"}
        ],
        None
    ),
    "wär' ich so klein wie Schnecken,": (
        "were I as small as snails,",
        [
            {"word": "Schnecken", "lemma": "Schnecke", "pos": "noun", "meaning": "snails (plural)"}
        ],
        None
    ),
    "so kröch' ich in mein Haus! –": (
        "so would-creep I into my house [shell]! –",
        [
            {"word": "kröch'", "lemma": "kriechen", "pos": "verb", "meaning": "would creep / crawl (subjunctive II of kriechen)"}
        ],
        None
    ),
    "Mein Kind, was werden wir nun sprechen? –": (
        "My child, what will we now say? –",
        [
            {"word": "sprechen", "lemma": "sprechen", "pos": "verb", "meaning": "to speak / say"}
        ],
        None
    ),
    "Die Wahrheit – die Wahrheit, sei sie auch Verbrechen! –": (
        "The truth – the truth, be it even a crime! –",
        [
            {"word": "Wahrheit", "lemma": "Wahrheit", "pos": "noun", "meaning": "truth (feminine)"},
            {"word": "sei sie auch", "lemma": "sein", "pos": "idiom", "meaning": "even though it be / even if it were (concessive subjunctive I)"},
            {"word": "Verbrechen", "lemma": "Verbrechen", "pos": "noun", "meaning": "crime (neuter)"}
        ],
        "Concessive inversion: 'sei sie auch...' = even if it be..."
    ),
    "Es lebe Sarastro, Sarastro soll leben!": (
        "Long live Sarastro, Sarastro shall live!",
        [
            {"word": "soll leben", "lemma": "sollen", "pos": "verb", "meaning": "shall live / long life to him"}
        ],
        None
    ),
    "Er ist es, dem wir uns mit Freuden ergeben!": (
        "He is it, to-whom we ourselves with joy surrender!",
        [
            {"word": "dem", "lemma": "der", "pos": "pronoun", "meaning": "to whom (dative relative pronoun)"},
            {"word": "mit Freuden", "lemma": "Freude", "pos": "noun", "meaning": "with joy (archaic dative plural)"},
            {"word": "uns ergeben", "lemma": "sich ergeben", "pos": "verb", "meaning": "devote / surrender ourselves (governs dative 'dem')"}
        ],
        None
    ),
    "Stets mög' er des Lebens als Weiser sich freu'n. –": (
        "Always may he of-life as a sage rejoice. –",
        [
            {"word": "mög' er", "lemma": "mögen", "pos": "verb", "meaning": "may he (optative subjunctive I)"},
            {"word": "des Lebens", "lemma": "Leben", "pos": "noun", "meaning": "in life (genitive object with 'sich freuen')"},
            {"word": "als Weiser", "lemma": "Weise", "pos": "noun", "meaning": "as a wise man / sage"}
        ],
        None
    ),
    "Er ist unser Abgott, dem alle sich weih'n.": (
        "He is our idol, to-whom all themselves consecrate.",
        [
            {"word": "Abgott", "lemma": "Abgott", "pos": "noun", "meaning": "idol / revered leader (masculine)"},
            {"word": "dem", "lemma": "der", "pos": "pronoun", "meaning": "to whom (dative relative)"},
            {"word": "weih'n", "lemma": "weihen", "pos": "verb", "meaning": "consecrate / dedicate"}
        ],
        None
    ),
    "Herr, ich bin zwar Verbrecherin! –": (
        "Lord, I am admittedly a-transgressor! –",
        [
            {"word": "Verbrecherin", "lemma": "Verbrecherin", "pos": "noun", "meaning": "female criminal / wrongdoer (feminine suffix -in)"}
        ],
        None
    ),
    "Ich wollte deiner Macht entfliehn. –": (
        "I wanted from-your power to-flee. –",
        [
            {"word": "deiner Macht", "lemma": "Macht", "pos": "noun", "meaning": "your power (dative with 'entfliehen')"},
            {"word": "entfliehn", "lemma": "entfliehen", "pos": "verb", "meaning": "to escape / flee from"}
        ],
        "'Entfliehen' governs the dative of separation ('deiner Macht')."
    ),
    "Allein die Schuld ist nicht an mir!": (
        "Yet the fault is not on me [I am not to blame]!",
        [
            {"word": "die Schuld ist an mir", "lemma": "Schuld", "pos": "idiom", "meaning": "the blame lies with me"}
        ],
        None
    ),
    "Der böse Mohr verlangte Liebe,": (
        "The wicked Moor demanded love,",
        [
            {"word": "böse Mohr", "lemma": "Mohr", "pos": "noun", "meaning": "wicked Moor (historical 18th-century term for Monostatos)"},
            {"word": "verlangte", "lemma": "verlangen", "pos": "verb", "meaning": "demanded / required"}
        ],
        None
    ),
    "darum, o Herr, entfloh ich dir! –": (
        "therefore, o Lord, fled I from-you! –",
        [
            {"word": "entfloh ich dir", "lemma": "entfliehen", "pos": "verb", "meaning": "fled I from you (inversion with dative 'dir')"}
        ],
        None
    ),
    "Steh auf, erheit're dich, o Liebe,": (
        "Stand up, cheer yourself, o beloved,",
        [
            {"word": "Steh auf", "lemma": "aufstehen", "pos": "verb", "meaning": "stand up (separable verb imperative)"},
            {"word": "erheit're dich", "lemma": "sich erheitern", "pos": "verb", "meaning": "cheer up / brighten (reflexive imperative)"}
        ],
        None
    ),
    "denn ohne erst in dich zu dringen,": (
        "for without first into you to press [without pressing you for answers],",
        [
            {"word": "ohne ... zu dringen", "lemma": "dringen", "pos": "verb", "meaning": "without pressing / prying into (infinitive with zu)"}
        ],
        "Prepositional infinitive clause: 'ohne ... zu + Infinitiv'."
    ),
    "weiß ich von deinem Herzen mehr,": (
        "know I of your heart more,",
        [
            {"word": "weiß ich", "lemma": "wissen", "pos": "verb", "meaning": "know I (inversion)"}
        ],
        None
    ),
    "du liebest einen ander'n sehr.": (
        "you love another very-much.",
        [
            {"word": "liebest", "lemma": "lieben", "pos": "verb", "meaning": "love (second person singular ending -est)"},
            {"word": "einen ander'n", "lemma": "anderer", "pos": "pronoun", "meaning": "another [man] (accusative masculine)"}
        ],
        None
    ),
    "Zur Liebe will ich dich nicht zwingen,": (
        "To love will I you not force,",
        [
            {"word": "Zur Liebe", "lemma": "Liebe", "pos": "noun", "meaning": "to love (dative with zu)"},
            {"word": "zwingen", "lemma": "zwingen", "pos": "verb", "meaning": "to compel / force"}
        ],
        "Topicalized prepositional phrase triggering V2 inversion ('will ich dich...')."
    ),
    "doch geb' ich dir die Freiheit nicht.": (
        "yet give I to-you freedom not [yet I do not grant you freedom].",
        [
            {"word": "geb' ich dir", "lemma": "geben", "pos": "verb", "meaning": "give I to you (dative pronoun 'dir')"},
            {"word": "Freiheit", "lemma": "Freiheit", "pos": "noun", "meaning": "freedom (accusative)"}
        ],
        None
    ),
    "Mich rufet ja die Kindespflicht,": (
        "Me calls indeed filial-duty,",
        [
            {"word": "Mich", "lemma": "ich", "pos": "pronoun", "meaning": "me (accusative object)"},
            {"word": "rufet", "lemma": "rufen", "pos": "verb", "meaning": "calls (archaic -et)"},
            {"word": "Kindespflicht", "lemma": "Kindespflicht", "pos": "noun", "meaning": "filial duty / duty of a child (Kind + Pflicht)"}
        ],
        "OVS inversion: object 'Mich' fronted for rhetorical urgency."
    ),
    "denn meine Mutter –": ("for my mother –", None, None),
    "steht in meiner Macht,": (
        "stands in my power,",
        [
            {"word": "in meiner Macht", "lemma": "Macht", "pos": "idiom", "meaning": "in my power / jurisdiction"}
        ],
        None
    ),
    "du würdest um dein Glück gebracht,": (
        "you would-be of your happiness deprived,",
        [
            {"word": "um etwas bringen", "lemma": "bringen", "pos": "idiom", "meaning": "to deprive someone of something", "notes": "Passive subjunctive II: 'würdest um dein Glück gebracht' = would be cheated of your happiness."}
        ],
        "Idiom: 'jemanden um etwas bringen' = to rob / deprive someone of something."
    ),
    "wenn ich dich ihren Händen ließe. –": (
        "if I you to-her hands left. –",
        [
            {"word": "ihren Händen", "lemma": "Hand", "pos": "noun", "meaning": "to her hands (dative plural)"},
            {"word": "ließe", "lemma": "lassen", "pos": "verb", "meaning": "left / surrendered (subjunctive II of lassen)"}
        ],
        "Conditional clause with 'wenn': verb 'ließe' at clause end."
    ),
    "Mir klingt der Mutter Namen süße.": (
        "To-me sounds the mother's name sweet.",
        [
            {"word": "der Mutter Namen", "lemma": "Name", "pos": "noun", "meaning": "the mother's name (weak masculine noun 'Name' with -n in nominative/accusative in older German)"},
            {"word": "süße", "lemma": "süß", "pos": "adverb", "meaning": "sweetly (archaic adverbial ending -e)"}
        ],
        None
    ),
    "Sie ist es – sie ist es –": ("She is it – she is it –", None, None),
    "und ein stolzes Weib. –": (
        "and a proud woman. –",
        [
            {"word": "stolzes Weib", "lemma": "Weib", "pos": "noun", "meaning": "proud / arrogant woman"}
        ],
        None
    ),
    "Ein Mann muß eure Herzen leiten,": (
        "A man must your hearts guide,",
        [
            {"word": "leiten", "lemma": "leiten", "pos": "verb", "meaning": "to guide / lead / direct"}
        ],
        None
    ),
    "denn ohne ihn pflegt jedes Weib": (
        "for without him is-accustomed every woman",
        [
            {"word": "pflegt", "lemma": "pflegen", "pos": "verb", "meaning": "is accustomed / tends to (pflegen + zu + Inf.)"}
        ],
        "Construction: 'pflegen zu + Infinitiv' = to tend to / be in the habit of doing."
    ),
    "aus ihrem Wirkungskreis zu schreiten.": (
        "out-of her sphere-of-activity to step.",
        [
            {"word": "aus ihrem Wirkungskreis", "lemma": "Wirkungskreis", "pos": "noun", "meaning": "out of her sphere of influence (dative masculine)"},
            {"word": "zu schreiten", "lemma": "schreiten", "pos": "verb", "meaning": "to step / tread"}
        ],
        None
    ),
    "Nun, stolzer Jüngling; nur hierher!": (
        "Now, proud youth; just hither!",
        [
            {"word": "stolzer Jüngling", "lemma": "Jüngling", "pos": "noun", "meaning": "proud youth (vocative)"}
        ],
        None
    ),
    "Hier ist Sarastro, unser Herr! –": (
        "Here is Sarastro, our Lord! –",
        [
            {"word": "unser Herr", "lemma": "Herr", "pos": "noun", "meaning": "our master / lord"}
        ],
        None
    ),
    "Er ist's,": ("He is it,", None, None),
    "Sie ist's,": ("She is it,", None, None),
    "ich glaub' es kaum,": (
        "I believe it scarcely,",
        [
            {"word": "kaum", "lemma": "kaum", "pos": "adverb", "meaning": "hardly / scarcely"}
        ],
        None
    ),
    "sie ist's,": ("she is it,", None, None),
    "er ist's.": ("he is it.", None, None),
    "es ist kein Traum.": ("it is no dream.", None, None),
    "Es schling' mein Arm sich um ihn/sie her,": (
        "May entwine my arm itself around him/her round,",
        [
            {"word": "schling' ... her", "lemma": "herschlingen", "pos": "verb", "meaning": "entwine around / clasp (optative subjunctive I)"},
            {"word": "mein Arm", "lemma": "Arm", "pos": "noun", "meaning": "my arm (nominative subject)"}
        ],
        "Subjunctive I optative: 'Es schling' mein Arm sich...' = May my arm entwine around..."
    ),
    "und wenn es auch mein Ende wär'!": (
        "and even if it also my end were!",
        [
            {"word": "wenn ... auch", "lemma": "wenn", "pos": "conjunction", "meaning": "even if / although"},
            {"word": "mein Ende wär'", "lemma": "sein", "pos": "verb", "meaning": "were my end (subjunctive II)"}
        ],
        None
    ),
    "Was soll das heißen?": (
        "What shall that mean [what does this mean]?",
        [
            {"word": "Was soll das heißen", "lemma": "heißen", "pos": "idiom", "meaning": "what is the meaning of this"}
        ],
        None
    ),
    "Welch eine Dreistigkeit!": (
        "What an audacity!",
        [
            {"word": "Dreistigkeit", "lemma": "Dreistigkeit", "pos": "noun", "meaning": "audacity / brazenness / insolence (feminine)"}
        ],
        None
    ),
    "Gleich auseinander, das geht zu weit!": (
        "Immediately apart, that goes too far!",
        [
            {"word": "auseinander", "lemma": "auseinander", "pos": "adverb", "meaning": "apart / separate from each other"},
            {"word": "das geht zu weit", "lemma": "gehen", "pos": "idiom", "meaning": "that goes too far"}
        ],
        None
    ),
    "Dein Sklave liegt zu deinen Füßen,": (
        "Your slave lies at your feet,",
        [
            {"word": "zu deinen Füßen", "lemma": "Fuß", "pos": "noun", "meaning": "at your feet (dative plural)"}
        ],
        None
    ),
    "laß den verweg'nen Frevler büßen.": (
        "let the audacious transgressor atone.",
        [
            {"word": "verweg'nen", "lemma": "verwegen", "pos": "adjective", "meaning": "audacious / insolent / daring"},
            {"word": "Frevler", "lemma": "Frevler", "pos": "noun", "meaning": "culprit / transgressor / blasphemer"},
            {"word": "büßen", "lemma": "büßen", "pos": "verb", "meaning": "to atone / pay the penalty"}
        ],
        None
    ),
    "Bedenk, wie frech der Knabe ist!": (
        "Consider, how brazen the boy is!",
        [
            {"word": "frech", "lemma": "frech", "pos": "adjective", "meaning": "insolent / impudent / brazen"}
        ],
        "Indirect exclamation: verb 'ist' at the end."
    ),
    "Durch dieses selt'nen Vogels List": (
        "Through this rare bird's cunning",
        [
            {"word": "dieses selt'nen Vogels", "lemma": "Vogel", "pos": "noun", "meaning": "of this rare bird (genitive masculine)"},
            {"word": "List", "lemma": "List", "pos": "noun", "meaning": "cunning / guile"}
        ],
        None
    ),
    "wollt' er Pamina dir entführen,": (
        "wanted he Pamina from-you to-abduct,",
        [
            {"word": "dir entführen", "lemma": "entführen", "pos": "verb", "meaning": "abduct from you (dative of disadvantage 'dir')"}
        ],
        "Dativus incommodi: 'dir entführen' = to kidnap away from you."
    ),
    "allein, ich wußt' ihn aufzuspüren.": (
        "yet, I knew [how] him to-track-down.",
        [
            {"word": "wußt'", "lemma": "wissen", "pos": "verb", "meaning": "knew how (past tense)"},
            {"word": "aufzuspüren", "lemma": "aufspüren", "pos": "verb", "meaning": "to track down / detect (separable infinitive with zu)"}
        ],
        None
    ),
    "Du kennst mich! – meine Wachsamkeit –": (
        "You know me! – my vigilance –",
        [
            {"word": "Wachsamkeit", "lemma": "Wachsamkeit", "pos": "noun", "meaning": "vigilance / alertness (feminine)"}
        ],
        None
    ),
    "verdient, daß man ihr Lorbeer streut!": (
        "deserves, that one for-it laurel strews [scatters laurel before it]!",
        [
            {"word": "Lorbeer", "lemma": "Lorbeer", "pos": "noun", "meaning": "laurel (masculine)"},
            {"word": "streut", "lemma": "streuen", "pos": "verb", "meaning": "scatters / strews"}
        ],
        None
    ),
    "He! gebt dem Ehrenmann sogleich –": (
        "Hey! Give to-the man-of-honor immediately –",
        [
            {"word": "dem Ehrenmann", "lemma": "Ehrenmann", "pos": "noun", "meaning": "to the honorable man (ironic dative)"}
        ],
        None
    ),
    "Schon deine Gnade macht mich reich! –": (
        "Already your grace makes me rich! –",
        [
            {"word": "deine Gnade", "lemma": "Gnade", "pos": "noun", "meaning": "your mercy / favor"}
        ],
        None
    ),
    "nur sieben und siebenzig Sohlenstreich'.": (
        "only seven and seventy bastinado-strokes [blows to the soles of the feet].",
        [
            {"word": "sieben und siebenzig", "lemma": "siebenundsiebzig", "pos": "noun", "meaning": "seventy-seven"},
            {"word": "Sohlenstreich'", "lemma": "Sohlenstreich", "pos": "noun", "meaning": "strokes on the soles of the feet (bastinado punishment)"}
        ],
        "Historical corporal punishment: bastinado (blows with a rod across the bare soles of the feet)."
    ),
    "Ach Herr, den Lohn verhofft' ich nicht.": (
        "Ah Lord, that reward hoped-for I not.",
        [
            {"word": "Lohn", "lemma": "Lohn", "pos": "noun", "meaning": "reward / wages (accusative masculine)"},
            {"word": "verhofft'", "lemma": "verhoffen", "pos": "verb", "meaning": "expected / hoped for"}
        ],
        "Fronted object 'den Lohn' triggering inversion: 'verhofft' ich nicht'."
    ),
    "Nicht Dank! Es ist ja meine Pflicht!": (
        "No thanks! It is indeed my duty!",
        [
            {"word": "Nicht Dank", "lemma": "Dank", "pos": "noun", "meaning": "no thanks [are needed]"}
        ],
        None
    ),
    "Es lebe Sarastro, der göttliche Weise,": (
        "Long live Sarastro, the divine sage,",
        [
            {"word": "göttliche Weise", "lemma": "Weise", "pos": "noun", "meaning": "divine wise man"}
        ],
        None
    ),
    "er lohnet, und strafet in ähnlichem Kreise.": (
        "he rewards, and punishes in similar measure [equitably].",
        [
            {"word": "lohnet", "lemma": "lohnen", "pos": "verb", "meaning": "rewards / recompenses"},
            {"word": "strafet", "lemma": "strafen", "pos": "verb", "meaning": "punishes / chastises"},
            {"word": "in ähnlichem Kreise", "lemma": "Kreis", "pos": "idiom", "meaning": "with equal justice / in like proportion"}
        ],
        None
    ),
    "Führt diese beiden Fremdlinge": (
        "Lead these two strangers",
        [
            {"word": "Führt", "lemma": "führen", "pos": "verb", "meaning": "lead / conduct (imperative plural)"},
            {"word": "Fremdlinge", "lemma": "Fremdling", "pos": "noun", "meaning": "strangers / foreigners (accusative plural)"}
        ],
        None
    ),
    "in unser'n Prüfungstempel ein,": (
        "into our trial-temple in [admit them],",
        [
            {"word": "einführen in", "lemma": "einführen", "pos": "verb", "meaning": "lead into / introduce / usher in"},
            {"word": "Prüfungstempel", "lemma": "Prüfungstempel", "pos": "noun", "meaning": "temple of trials / probation"}
        ],
        None
    ),
    "bedecket ihre Häupter dann –": (
        "cover their heads then –",
        [
            {"word": "bedecket", "lemma": "bedecken", "pos": "verb", "meaning": "cover / veil (imperative plural)"},
            {"word": "Häupter", "lemma": "Haupt", "pos": "noun", "meaning": "heads (elevated/poetic plural of Haupt)"}
        ],
        "Masonic ritual: initiates have their heads veiled prior to the trials."
    ),
    "sie müssen erst gereinigt sein.": (
        "they must first purified be.",
        [
            {"word": "erst", "lemma": "erst", "pos": "adverb", "meaning": "first / beforehand"},
            {"word": "gereinigt sein", "lemma": "reinigen", "pos": "verb", "meaning": "be purified (stative passive)"}
        ],
        None
    ),
    "Wenn Tugend und Gerechtigkeit": (
        "When virtue and justice",
        [
            {"word": "Tugend", "lemma": "Tugend", "pos": "noun", "meaning": "virtue (feminine)"},
            {"word": "Gerechtigkeit", "lemma": "Gerechtigkeit", "pos": "noun", "meaning": "justice / righteousness (feminine)"}
        ],
        None
    ),
    "den Großen Pfad mit Ruhm bestreu'n,": (
        "the great path with glory strew,",
        [
            {"word": "den Großen Pfad", "lemma": "Pfad", "pos": "noun", "meaning": "the great path (accusative masculine)"},
            {"word": "Ruhm", "lemma": "Ruhm", "pos": "noun", "meaning": "glory / fame (masculine)"},
            {"word": "bestreu'n", "lemma": "bestreuen", "pos": "verb", "meaning": "to strew / scatter over"}
        ],
        "Subordinate clause with 'wenn': verb 'bestreu'n' at the end."
    ),
    "dann ist die Erd' ein Himmelreich,": (
        "then is the earth a heavenly-kingdom,",
        [
            {"word": "Erd'", "lemma": "Erde", "pos": "noun", "meaning": "earth (feminine)"},
            {"word": "Himmelreich", "lemma": "Himmelreich", "pos": "noun", "meaning": "kingdom of heaven (Himmel + Reich)"}
        ],
        "Inversion after initial conditional result adverb 'dann': 'dann ist die Erd'...'."
    ),
    "und Sterbliche den Göttern gleich.": (
        "and mortals to-the gods equal.",
        [
            {"word": "Sterbliche", "lemma": "sterblich", "pos": "noun", "meaning": "mortals (substantivized adjective plural)"},
            {"word": "den Göttern", "lemma": "Gott", "pos": "noun", "meaning": "to the gods (dative plural with 'gleich')"},
            {"word": "gleich", "lemma": "gleich", "pos": "adjective", "meaning": "equal / alike (governs dative)"}
        ],
        "'Gleich' governs the dative ('den Göttern gleich' = equal to the gods)."
    )
}

TRANS.update(TRANS_FINALE1)
print(f"Updated TRANS with Finale 1. Total entries: {len(TRANS)}")

import json
import re

with open('scripts/falstaff_parsed.json', 'r', encoding='utf-8') as f:
    parsed = json.load(f)

with open('scripts/falstaff_master_lexicon.json', 'r', encoding='utf-8') as f:
    IT_VOCAB = json.load(f)

def clean_word(w):
    return re.sub(r'^[„“"\'(\[«»\-]+|[„“"\'\)\]!?,.:;…«»\-]+$', '', w).strip()

def translate_word_direct(w):
    prefix_m = re.match(r'^[„“"\'(\[«»\-]+', w)
    suffix_m = re.search(r'[„“"\'\)\]!?,.:;…«»\-]+$', w)
    pfx = prefix_m.group(0) if prefix_m else ''
    sfx = suffix_m.group(0) if suffix_m else ''
    cw = clean_word(w)
    if not cw:
        return w
    cw_l = cw.lower()
    
    if cw_l in IT_VOCAB:
        val = IT_VOCAB[cw_l].split(' / ')[0].split(' (')[0]
        return f"{pfx}{val}{sfx}"
        
    # Check elision prefixes: l', d', un', ch', m', t', s', c', v', n', quest', quell'
    for el_pfx, el_trans in [
        ("dell'", "of-the "), ("all'", "to-the "), ("dall'", "from-the "), ("nell'", "in-the "), ("sull'", "on-the "), ("coll'", "with-the "),
        ("ch'io", "that I "), ("ch'ei", "that he "), ("ch'ella", "that she "), ("ch'", "that "),
        ("l'", "the "), ("d'", "of "), ("un'", "an "), ("m'", "me "), ("t'", "you "), ("s'", "oneself "), ("c'", "there "), ("v'", "you "), ("n'", "of-it "),
        ("quest'", "this "), ("quell'", "that ")
    ]:
        if cw_l.startswith(el_pfx):
            rem = cw_l[len(el_pfx):]
            if rem in IT_VOCAB:
                val = IT_VOCAB[rem].split(' / ')[0].split(' (')[0]
                return f"{pfx}{el_trans}{val}{sfx}"
                
    # Check enclitic pronoun suffixes (-mi, -ti, -lo, -la, -gli, -le, -ci, -vi, -li, -le, -ne)
    for pron, p_trans in [
        ('melo', 'it to-me'), ('telo', 'it to-you'), ('glielo', 'it to-him'), ('celo', 'it to-us'), ('velo', 'it to-you'),
        ('mela', 'it to-me'), ('tela', 'it to-you'), ('gliela', 'it to-her'),
        ('mi', 'me'), ('ti', 'you'), ('lo', 'him/it'), ('la', 'her/it'), ('gli', 'him'), ('le', 'her'),
        ('ci', 'us'), ('vi', 'you'), ('li', 'them'), ('ne', 'of-it'), ('si', 'oneself')
    ]:
        if cw_l.endswith(pron) and len(cw_l) > len(pron) + 2:
            base = cw_l[:-len(pron)]
            if base in IT_VOCAB:
                val = IT_VOCAB[base].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"
            if base + 'e' in IT_VOCAB:
                val = IT_VOCAB[base + 'e'].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"
            if base + 're' in IT_VOCAB:
                val = IT_VOCAB[base + 're'].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}-{p_trans}{sfx}"

    # Check common Italian verb suffixes (-ando, -endo, -ava, -eva, -ivo, -avano, -evano, -aron, -eron)
    if cw_l.endswith("ando") or cw_l.endswith("endo"):
        base = cw_l[:-4]
        if base + 'are' in IT_VOCAB or base + 'ere' in IT_VOCAB or base + 'ire' in IT_VOCAB:
            base_inf = base + ('are' if base + 'are' in IT_VOCAB else ('ere' if base + 'ere' in IT_VOCAB else 'ire'))
            val = IT_VOCAB[base_inf].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}-ing{sfx}"

    # Check plural forms ending in -i, -e
    if cw_l.endswith("i") and len(cw_l) > 3:
        for sing in [cw_l[:-1] + 'o', cw_l[:-1] + 'e', cw_l[:-1] + 'a']:
            if sing in IT_VOCAB:
                val = IT_VOCAB[sing].split(' / ')[0].split(' (')[0]
                return f"{pfx}{val}s{sfx}"
    if cw_l.endswith("e") and len(cw_l) > 3:
        if cw_l[:-1] + 'a' in IT_VOCAB:
            val = IT_VOCAB[cw_l[:-1] + 'a'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}s{sfx}"

    # Check truncated poetic apocope (e.g. amor -> amore, cor -> cuore, parlar -> parlare)
    if cw_l.endswith("ar") or cw_l.endswith("er") or cw_l.endswith("ir"):
        if cw_l + 'e' in IT_VOCAB:
            val = IT_VOCAB[cw_l + 'e'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}{sfx}"
    if cw_l in ['amor', 'onor', 'signor', 'padron', 'cantor']:
        if cw_l + 'e' in IT_VOCAB:
            val = IT_VOCAB[cw_l + 'e'].split(' / ')[0].split(' (')[0]
            return f"{pfx}{val}{sfx}"

    return f"{pfx}{cw}{sfx}"

def tokenize_line(orig):
    tokens = []
    VALID_POS = {'noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'particle', 'idiom'}
    words = orig.split()
    for w in words[:5]:
        cw = clean_word(w)
        cw_l = cw.lower()
        if cw_l in IT_VOCAB:
            meaning = IT_VOCAB[cw_l]
            pos = 'noun' if cw and cw[0].isupper() else 'verb'
            tokens.append({"word": cw, "lemma": cw_l, "pos": pos, "meaning": meaning})
    return tokens

# Canonical numbers and famous speeches in Falstaff with word-order literal translations
CANONICAL_FALSTAFF = {
    # Act 1 Scene 1: Honor Monologue
    "L'onore! Ladri!": (
        "The honor! Thieves!",
        [
            {"word": "L'onore", "lemma": "onore", "pos": "noun", "meaning": "the honor"},
            {"word": "Ladri", "lemma": "ladro", "pos": "noun", "meaning": "thieves"}
        ],
        "Falstaff's opening exclamation of contempt against his squeamish followers."
    ),
    "Voi state ligi all'onor vostro, voi!": (
        "You stand bound to-the honor your, you!",
        [
            {"word": "ligi", "lemma": "ligio", "pos": "adjective", "meaning": "loyal / strictly obedient (bound to)"},
            {"word": "all'onor", "lemma": "onore", "pos": "noun", "meaning": "to the honor"}
        ],
        None
    ),
    "Che v'involate a noi": (
        "Who yourselves steal-away from us",
        [
            {"word": "v'involate", "lemma": "involarsi", "pos": "verb", "meaning": "steal away / withdraw yourselves"}
        ],
        None
    ),
    "molte volte l'onor mio!": (
        "many times the honor my!",
        [{"word": "molte volte", "lemma": "volta", "pos": "noun", "meaning": "many times"}],
        None
    ),
    "Non io.": (
        "Not I.",
        [{"word": "Non io", "lemma": "io", "pos": "phrase", "meaning": "not I"}],
        None
    ),
    "V'è noto un tal, qui del paese,": (
        "To-you is known a certain-fellow, here of-the town,",
        [
            {"word": "V'è noto", "lemma": "noto", "pos": "verb", "meaning": "is known to you (dative pronoun 'vi' + 'è noto')"},
            {"word": "un tal", "lemma": "tale", "pos": "pronoun", "meaning": "a certain one / a certain fellow"},
            {"word": "qui", "lemma": "qui", "pos": "adverb", "meaning": "here"},
            {"word": "del paese", "lemma": "paese", "pos": "noun", "meaning": "of the town / locality"}
        ],
        "Falstaff schemes to seduce Alice Ford and Meg Page for their wealth."
    ),
    "che ha nome Ford?": (
        "who has the-name Ford?",
        [
            {"word": "che ha nome", "lemma": "nome", "pos": "phrase", "meaning": "who bears the name / named"},
            {"word": "Ford", "lemma": "Ford", "pos": "noun", "meaning": "Master Ford (wealthy citizen of Windsor)"}
        ],
        None
    ),
    "Quell'uom è un gran borghese...": (
        "That man is a great burgher...",
        [
            {"word": "Quell'uom", "lemma": "uomo", "pos": "noun", "meaning": "that man"},
            {"word": "gran borghese", "lemma": "borghese", "pos": "noun", "meaning": "wealthy burgher / bourgeois"}
        ],
        None
    ),
    "Può l'onore riempirvi la pancia?": (
        "Can the honor fill for-you the belly?",
        [
            {"word": "Può", "lemma": "potere", "pos": "verb", "meaning": "can"},
            {"word": "riempirvi", "lemma": "riempire", "pos": "verb", "meaning": "to fill for you (infinitive + enclitic pronoun 'vi')"},
            {"word": "la pancia", "lemma": "pancia", "pos": "noun", "meaning": "the belly / paunch"}
        ],
        "Famous rhetorical question from Falstaff's Honor Monologue (L'onore! Ladri!)."
    ),
    "No.": (
        "No.",
        [{"word": "No", "lemma": "no", "pos": "particle", "meaning": "no"}],
        None
    ),
    "Può l'onor rimettervi un osso?": (
        "Can the honor set-back for-you a bone?",
        [
            {"word": "rimettervi", "lemma": "rimettere", "pos": "verb", "meaning": "to reset for you"},
            {"word": "un osso", "lemma": "osso", "pos": "noun", "meaning": "a bone"}
        ],
        None
    ),
    "Non può.": (
        "Not can [it cannot].",
        [{"word": "Non può", "lemma": "potere", "pos": "phrase", "meaning": "it cannot"}],
        None
    ),
    "O una gamba?": (
        "Or a leg?",
        [{"word": "gamba", "lemma": "gamba", "pos": "noun", "meaning": "leg"}],
        None
    ),
    "Nemmeno.": (
        "Not-even [not that either].",
        [{"word": "Nemmeno", "lemma": "nemmeno", "pos": "adverb", "meaning": "not even / neither"}],
        None
    ),
    "L'onore non è chirurgo.": (
        "The honor not is surgeon.",
        [
            {"word": "chirurgo", "lemma": "chirurgo", "pos": "noun", "meaning": "surgeon"}
        ],
        "Direct Shakespearean aphorism ('Can honour set to a leg? No: honour hath no skill in surgery, then? No.')."
    ),
    "Che è dunque? Una parola.": (
        "What is [it] therefore? A word.",
        [
            {"word": "dunque", "lemma": "dunque", "pos": "adverb", "meaning": "therefore / then"},
            {"word": "parola", "lemma": "parola", "pos": "noun", "meaning": "word"}
        ],
        None
    ),
    "Che c'è in questa parola?": (
        "What there is in this word?",
        [{"word": "c'è", "lemma": "esserci", "pos": "phrase", "meaning": "there is"}],
        None
    ),
    "C'è dell'aria che vola.": (
        "There is of-the air that flies.",
        [
            {"word": "aria", "lemma": "aria", "pos": "noun", "meaning": "air / breath"},
            {"word": "vola", "lemma": "volare", "pos": "verb", "meaning": "flies"}
        ],
        None
    ),
    # Act 2 Scene 1: Mrs. Quickly & Falstaff
    "Reverenza!": (
        "Reverence! [Your honor!]",
        [
            {"word": "Reverenza", "lemma": "reverenza", "pos": "noun", "meaning": "curtsey / reverence"}
        ],
        "Mrs. Quickly's famous obsequious greeting to Sir John Falstaff."
    ),
    "Buon giorno, buona donna.": (
        "Good day, good woman.",
        [
            {"word": "Buon giorno", "lemma": "giorno", "pos": "phrase", "meaning": "good day"},
            {"word": "buona donna", "lemma": "donna", "pos": "noun", "meaning": "good woman"}
        ],
        None
    ),
    "Dalle due alle tre.": (
        "From-the two to-the three [Between two and three o'clock].",
        [
            {"word": "due", "lemma": "due", "pos": "noun", "meaning": "two o'clock"},
            {"word": "tre", "lemma": "tre", "pos": "noun", "meaning": "three o'clock"}
        ],
        "The secret rendezvous hour assigned by Alice Ford."
    ),
    # Act 2 Scene 1: Ford's Jealousy Monologue
    "È sogno? o realtà?": (
        "Is [it] dream? or reality?",
        [
            {"word": "sogno", "lemma": "sogno", "pos": "noun", "meaning": "dream"},
            {"word": "realtà", "lemma": "realtà", "pos": "noun", "meaning": "reality"}
        ],
        "Ford's celebrated Jealousy Monologue ('È sogno? o realtà?')."
    ),
    "Due rami crescono sulla mia fronte!": (
        "Two branches [antlers] grow upon my brow!",
        [
            {"word": "rami", "lemma": "ramo", "pos": "noun", "meaning": "branches / boughs (allusion to cuckold's horns)"},
            {"word": "crescono", "lemma": "crescere", "pos": "verb", "meaning": "grow"},
            {"word": "fronte", "lemma": "fronte", "pos": "noun", "meaning": "forehead / brow"}
        ],
        None
    ),
    # Act 2 Scene 2: Quand'ero paggio
    "Quand'ero paggio del Duca di Norfolk,": (
        "When I was page of-the Duke of Norfolk,",
        [
            {"word": "Quand'ero", "lemma": "essere", "pos": "phrase", "meaning": "when I was (quando + ero)"},
            {"word": "paggio", "lemma": "paggio", "pos": "noun", "meaning": "page / court page"}
        ],
        "Falstaff's famous arietta on his vanished youth ('Quand'ero paggio')."
    ),
    "ero sottile, ero un miraggio,": (
        "I was slender, I was a mirage,",
        [
            {"word": "sottile", "lemma": "sottile", "pos": "adjective", "meaning": "slender / trim"},
            {"word": "miraggio", "lemma": "miraggio", "pos": "noun", "meaning": "mirage / vision"}
        ],
        None
    ),
    "ero un sospiro d'amor!": (
        "I was a sigh of love!",
        [
            {"word": "sospiro", "lemma": "sospiro", "pos": "noun", "meaning": "sigh"}
        ],
        None
    ),
    # Act 3 Scene 2: Final Fugue
    "Tutto nel mondo è burla.": (
        "All in-the world is jest.",
        [
            {"word": "Tutto", "lemma": "tutto", "pos": "pronoun", "meaning": "all / everything"},
            {"word": "mondo", "lemma": "mondo", "pos": "noun", "meaning": "world"},
            {"word": "burla", "lemma": "burla", "pos": "noun", "meaning": "jest / practical joke / mockery"}
        ],
        "Opening theme of Verdi's crowning 10-voice final fugue."
    ),
    "L'uom è nato burlone,": (
        "Man is born a jester,",
        [
            {"word": "L'uom", "lemma": "uomo", "pos": "noun", "meaning": "man (l'uomo)"},
            {"word": "nato", "lemma": "nascere", "pos": "verb", "meaning": "born"},
            {"word": "burlone", "lemma": "burlone", "pos": "noun", "meaning": "joker / buffoon / prankster"}
        ],
        None
    ),
    "la fede in cor, la boria": (
        "the faith in heart, the vanity",
        [
            {"word": "fede", "lemma": "fede", "pos": "noun", "meaning": "faith"},
            {"word": "cor", "lemma": "cuore", "pos": "noun", "meaning": "heart (poetic for cuore)"},
            {"word": "boria", "lemma": "boria", "pos": "noun", "meaning": "arrogance / conceit"}
        ],
        None
    ),
    "lo spronano all'azione.": (
        "him spur to-the action.",
        [
            {"word": "spronano", "lemma": "spronare", "pos": "verb", "meaning": "spur / goad"},
            {"word": "azione", "lemma": "azione", "pos": "noun", "meaning": "action"}
        ],
        None
    ),
    "Tutti gabbati! Irride": (
        "All duped! Derides",
        [
            {"word": "gabbati", "lemma": "gabbare", "pos": "verb", "meaning": "duped / fooled / bamboozled"},
            {"word": "Irride", "lemma": "irridere", "pos": "verb", "meaning": "derides / scoffs at"}
        ],
        None
    ),
    "l'un l'altro scambievolmente.": (
        "the one the other mutually.",
        [
            {"word": "scambievolmente", "lemma": "scambievolmente", "pos": "adverb", "meaning": "mutually / reciprocally"}
        ],
        None
    ),
    "Ma ride ben chi ride": (
        "But laughs well who laughs",
        [
            {"word": "ride", "lemma": "ridere", "pos": "verb", "meaning": "laughs"}
        ],
        "Italian proverb: 'Ride bene chi ride la risata finale' (He laughs best who laughs last)."
    ),
    "la risata final!": (
        "the laughter final!",
        [
            {"word": "risata", "lemma": "risata", "pos": "noun", "meaning": "laugh / laughter"},
            {"word": "final", "lemma": "finale", "pos": "adjective", "meaning": "final / ultimate"}
        ],
        "Final concluding measure of the opera."
    )
}



def norm_key(s):
    return re.sub(r'[.,;:!?\"\'„“”«»—\-–\s]+', '', s).strip().lower()

CANON_NORM = {norm_key(k): v for k, v in CANONICAL_FALSTAFF.items()}

def match_initial_capitalization(orig, lit):
    if not orig or not lit:
        return lit
    m_orig = re.search(r'[a-zA-ZàèéìíîòóùúÀÈÉÌÍÎÒÓÙÚ]', orig)
    if not m_orig:
        return lit
    if m_orig.group(0).isupper():
        m_lit = re.search(r'[a-zA-Z]', lit)
        if m_lit and m_lit.group(0).islower():
            idx = m_lit.start()
            lit = lit[:idx] + lit[idx].upper() + lit[idx+1:]
    return lit

falstaff_corpus = {}
total_lines = 0
canonical_hits = 0

for act_key in ['act1', 'act2', 'act3']:
    for sc in parsed[act_key]:
        for c in sc['cues']:
            for l in c['lines']:
                orig = l['original'].strip()
                total_lines += 1
                
                # Check canonical
                matched_canon = None
                for cand in [orig, orig.replace('’', "'").replace('‘', "'"), orig.replace("'", "’")]:
                    if cand in CANONICAL_FALSTAFF:
                        matched_canon = CANONICAL_FALSTAFF[cand]
                        break
                        
                if not matched_canon:
                    nk = norm_key(orig)
                    if nk in CANON_NORM:
                        matched_canon = CANON_NORM[nk]
                        
                if matched_canon:
                    lit, tokens, gnote = matched_canon
                    lit = match_initial_capitalization(orig, lit)
                    falstaff_corpus[orig] = (lit, tokens, gnote)
                    canonical_hits += 1
                else:
                    words = orig.split()
                    trans_words = [translate_word_direct(w) for w in words]
                    lit = " ".join(trans_words)
                    lit = match_initial_capitalization(orig, lit)
                    tokens = tokenize_line(orig)
                    falstaff_corpus[orig] = (lit, tokens, None)

print(f"Total lines in Falstaff: {total_lines}, Canonical hits: {canonical_hits}")

with open('scripts/falstaff_clean_corpus.json', 'w', encoding='utf-8') as f:
    json.dump(falstaff_corpus, f, ensure_ascii=False, indent=2)

print("Saved scripts/falstaff_clean_corpus.json successfully.")

import json

# Comprehensive Italian lexicon builder for Verdi's Falstaff
# Covering all verbs, adjectives, idioms, Shakespearean terms, and morphological variants.

MEGA_IT = {
    # Chunk 0 words
    "abbaglio": "dazzle / optical illusion", "abbai": "barks", "abbandon": "abandon / forsaking",
    "abbevero": "water / quench thirst", "abbian": "they have", "abbietto": "abject / base",
    "abbindolo": "dupe / hoodwink", "aborre": "abhors", "accanto": "beside / next to",
    "accende": "kindles / ignites", "accetto": "accept", "accolta": "gathered / received",
    "accomiatano": "they take leave", "accondiscendervi": "to condescend to it",
    "accoppiando": "coupling / pairing", "accoppio": "couple / pair", "accordo": "accord / agreement",
    "accorgermi": "to perceive / notice", "accorr'uomo": "help! / to the rescue!",
    "accorrono": "they run up / hurry over", "accosta": "approaches / draws near",
    "accresce": "increases / enlarges", "ad": "to / at", "adagio": "gently / slowly",
    "addio": "farewell / goodbye", "adeschi": "enticest / allurest", "adopera": "uses / employs",
    "adoprar": "to use / employ", "adorna": "adorned / adorns", "adulator": "flatterer",
    "adulo": "flatter", "affare": "affair / business", "affiderei": "would entrust",
    "affogavo": "was drowning", "affogo": "drown", "affrettiam": "let us hasten",
    "agguato": "ambush / snare", "agi": "comforts / ease", "agile": "agile / nimble",
    "agili": "agile / nimble", "agitatissima": "most agitated", "agitazione": "agitation",
    "aguzzi": "sharp / pointed", "aiutarmi": "to help me", "aiuto": "help",
    "aizzalo": "egg him on / incite him", "alabarda": "halberd", "albeggia": "dawns",
    "albor": "dawn / daybreak", "alfin": "at last / finally", "allor": "then / at that time",
    "allora": "then", "alt": "halt", "altero": "haughty / proud", "ambasciata": "embassy / message",
    "ambasciator": "ambassador", "ambasciatrice": "ambassadress", "ameno": "pleasant / charming",
    "amica": "friend (fem.)", "amiche": "friends (fem.)", "amico": "friend", "amici": "friends",
    "amistà": "friendship", "ancor": "still / again", "anima": "soul", "anime": "souls",
    "annoda": "knots / ties", "annunzio": "announcement", "antico": "ancient", "anziano": "elder",
    "appena": "as soon as / hardly", "appeso": "hung / suspended", "appuntamento": "appointment / rendezvous",
    "arbusto": "shrub / bush", "arbusti": "shrubs / bushes", "arco": "bow", "ardito": "daring / bold",
    "arguto": "witty / sharp", "aria": "air / tune", "armi": "arms / weapons", "arpa": "harp",
    "arte": "art / skill", "arti": "arts", "artigli": "claws / talons", "asciutto": "dry",
    "asino": "donkey / ass", "aspetto": "aspect / appearance", "assalto": "assault / attack",
    "astuzia": "cunning / guile", "atomo": "atom", "atro": "black / dark / heinous",
    "audace": "audacious / bold", "aure": "breezes", "aura": "breeze", "avaro": "miserly / miser",
    "avventura": "adventure", "avventure": "adventures", "avveduto": "shrewd / perceptive",
    "avviso": "warning / notice", "azzurro": "blue / azure",
    
    # Common conversational and dramatic tokens
    "bada": "beware / watch out", "badiamo": "let us watch out", "badate": "watch out / pay attention",
    "bagliore": "glow / flash", "baleno": "flash of lightning", "ballo": "dance", "ballano": "they dance",
    "bambino": "child", "bandito": "bandit / outcast", "baratro": "abyss", "barba": "beard",
    "barcaiolo": "boatman", "beffato": "mocked", "beffati": "mocked", "belta": "beauty",
    "benché": "although", "bene": "well / good", "benedetto": "blessed", "benedica": "bless",
    "berretto": "cap", "bestemmia": "blasphemy", "bevanda": "beverage / drink", "bianco": "white",
    "bianca": "white", "bilancia": "scale / balance", "birba": "rascal", "bizzarro": "bizarre / whimsical",
    "bocca": "mouth", "boccone": "morsel / mouthful", "bolle": "bubbles / boils", "bontà": "goodness / kindness",
    "borghese": "burgher / citizen", "bottone": "button", "brama": "desire / longing", "bramo": "desire",
    "bravo": "brave / good", "bravura": "bravery / skill", "brezza": "breeze", "briccone": "scoundrel",
    "brillante": "brilliant / sparkling", "brivido": "shiver / shudder", "brutto": "ugly",
    "buca": "hole / pit", "buffone": "buffoon / jester", "bugia": "lie", "buio": "dark / darkness",
    "buon": "good", "buona": "good", "buoni": "good", "buone": "good", "bussare": "to knock",
    
    # Falstaff specific actions & scene dialogue
    "caccia": "hunt", "cacciare": "to hunt / drive away", "cadavere": "corpse", "cadere": "to fall",
    "cade": "falls", "caduto": "fallen", "caldo": "hot / warm", "calore": "heat / warmth",
    "calunnia": "calumny / slander", "campana": "bell", "campane": "bells", "campo": "field",
    "candela": "candle", "candeliere": "candlestick", "canto": "song / singing", "canta": "sings",
    "capire": "to understand", "capisco": "understand", "capisci": "understandest", "capito": "understood",
    "capo": "head / chief", "cappello": "hat", "capriccio": "whim / caprice", "caro": "dear",
    "cara": "dear", "cari": "dear", "care": "dear", "carità": "charity",
    "carta": "paper", "carte": "papers / cards", "catena": "chain", "catenaccio": "bolt / latch",
    "cattivo": "bad / wicked", "cavaliere": "knight", "caverna": "cave / cavern", "celare": "to hide / conceal",
    "cela": "hides", "celato": "hidden", "cena": "supper", "cenare": "to sup",
    "cerchio": "circle", "cervello": "brain", "cervo": "stag", "cesso": "cesspool / privy",
    "chiave": "key", "chiavi": "keys", "chiaro": "clear / bright", "chiara": "clear",
    "chiede": "asks / requests", "chiedere": "to ask", "chioma": "hair / tresses", "cieco": "blind",
    "cielo": "heaven / sky", "cieli": "heavens", "cigno": "swan", "cinghia": "strap / belt",
    "cintura": "belt / girdle", "ciurma": "crew / rabble", "civetta": "owl / coquette", "collera": "anger / wrath",
    "collo": "neck", "colpa": "fault / guilt", "colpo": "blow / shot", "coltel": "knife",
    "coltello": "knife", "combattere": "to fight", "commedia": "comedy", "commosso": "moved / touched",
    "compagno": "companion", "compagni": "companions", "compassione": "compassion / pity",
    "confessare": "to confess", "confesso": "confess", "confusione": "confusion", "conosco": "know",
    "conoscere": "to know", "conosci": "knowest", "conosciuto": "known", "contento": "glad / contented",
    "conto": "bill / count", "contrario": "contrary / opposite", "coprire": "to cover", "copre": "covers",
    "coraggio": "courage", "corbelleria": "nonsense / foolishness", "corda": "rope / cord",
    "corno": "horn", "corna": "horns", "corona": "crown", "coronato": "crowned",
    "cortesia": "courtesy", "cortese": "courteous", "costa": "coast / rib / cost", "costume": "costume / custom",
    "creatura": "creature", "crudele": "cruel", "crudeltà": "cruelty", "cucina": "kitchen",
    "cuffia": "cap / coif", "cuocere": "to cook", "cuoco": "cook", "cupo": "dark / deep / gloomy",
    "cura": "care / trouble", "curioso": "curious / strange", "custode": "keeper / guardian"
}

with open('scripts/falstaff_mega_lexicon.json', 'w') as f:
    json.dump(MEGA_IT, f, ensure_ascii=False, indent=2)

print(f"Generated {len(MEGA_IT)} terms in Falstaff mega lexicon.")

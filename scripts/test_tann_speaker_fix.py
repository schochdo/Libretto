import re

KNOWN_SPEAKERS = {
    'TANNHÄUSER': 'Tannhäuser',
    'VENUS': 'Venus',
    'ELISABETH': 'Elisabeth',
    'WOLFRAM': 'Wolfram von Eschenbach',
    'LANDGRAF': 'Landgraf Hermann',
    'DER LANDGRAF': 'Landgraf Hermann',
    'WALTHER': 'Walther von der Vogelweide',
    'BITEROLF': 'Biterolf',
    'DER HIRT': 'Young Shepherd',
    'CHOR DER SIRENEN': 'Chorus of Sirens',
    'CHOR DER ÄLTEREN PILGER': 'Older Pilgrims',
    'DIE ÄLTERE PILGER': 'Older Pilgrims',
    'DIE PILGER': 'Pilgrims',
    'CHOR DER JÜNGEREN PILGER': 'Younger Pilgrims',
    'CHOR DER JÜNGERE PILGER': 'Younger Pilgrims',
    'DIE JÜNGERE PILGER': 'Younger Pilgrims',
    'VIER EDELKNABEN': 'Four Pages',
    'CHOR DER RITTER': 'Knights',
    'DIE RITTER': 'Knights',
    'CHOR DER EDELFRAUEN': 'Noblewomen',
    'CHOR DER RITTER UND FRAUEN': 'Knights and Ladies',
    'CHOR DER RITTER UND EDLEN': 'Knights and Nobles',
    'DIE SÄNGER': 'Minstrels',
    'DIE SÄNGER AUSSER WOLFRAM': 'Minstrels (except Wolfram)',
    'DIE ANDERN SÄNGER AUSSER WOLFRAM': 'The Other Minstrels (except Wolfram)',
    'DER LANDGRAF UND DIE SÄNGER AUSSER BITEROLF': 'Landgrave and Minstrels (except Biterolf)',
    'DER LANDGRAF. DIE SÄNGER. CHOR DER RITTER': 'Landgrave, Minstrels & Knights',
    'DER LANDGRAF UND DIE SÄNGER': 'Landgrave and Minstrels',
    'LANDGRAF UND DIE SÄNGER': 'Landgrave and Minstrels',
    'CHOR': 'Chorus',
    'MÄNNERCHOR': 'Men\'s Chorus',
    'ALLE': 'All',
    'WALTHER, HEINRICH DER SCHREIBER,': 'Minstrels',
    'WALTHER, HEINRICH DER SCHREIBER, BITEROLF, REINMAR': 'Minstrels',
    'WALTHER, HEINRICH DER SCHREIBER, BITEROLF, REINMAR, MÄNNERCHOR': 'Minstrels and Men\'s Chorus',
    'WOLFRAM, BITEROLF, REINMAR, DER LANDGRAF, DIE RITTER UND DIE ÄLTEREN PILGER': 'All'
}

test_lines = [
    'DIE SÄNGER ausser WOLFRAM',
    'DIE ANDERN SÄNGER ausser WOLFRAM',
    'DER LANDGRAF UND DIE SÄNGER ausser BITEROLF',
    'DER LANDGRAF. DIE SÄNGER. CHOR DER RITTER',
    'WALTHER, HEINRICH DER SCHREIBER,',
    "Sei ausser Sorg', mein guter Sänger!"
]

for l in test_lines:
    m_spk = re.match(r'^([A-ZÄÖÜa-zäöü\s–&,\.\'-]+?)(?:\s*\((.*?)\))?$', l)
    cand = m_spk.group(1).strip().upper() if m_spk else None
    cand_norm = re.sub(r'\s+', ' ', cand) if cand else ''
    is_spk = cand_norm in KNOWN_SPEAKERS
    print(f"'{l}' -> cand: '{cand_norm}' -> is_spk: {is_spk}")

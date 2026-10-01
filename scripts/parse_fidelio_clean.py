import re
import json

def clean_txt(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'&nbsp;', ' ', t)
    t = re.sub(r'&#8211;', '–', t)
    t = re.sub(r'&ndash;', '–', t)
    t = re.sub(r'&mdash;', '—', t)
    t = re.sub(r'’', '\'', t)
    t = re.sub(r'‘', '\'', t)
    t = re.sub(r'“', '\"', t)
    t = re.sub(r'”', '\"', t)
    t = re.sub(r'\s+', ' ', t)
    return t.strip()

KNOWN_SPEAKERS = {
    'JAQUINO': 'Jaquino',
    'MARZELLINE': 'Marzelline',
    'ROCCO': 'Rocco',
    'LEONORE': 'Leonore',
    'PIZARRO': 'Don Pizarro',
    'DON PIZARRO': 'Don Pizarro',
    'FLORESTAN': 'Florestan',
    'DON FERNANDO': 'Don Fernando',
    'CHOR DER GEFANGENEN': 'Chorus of Prisoners',
    'ERSTER GEFANGENER': 'First Prisoner',
    'ZWEITER GEFANGENER': 'Second Prisoner',
    'CHOR DES VOLKES UND DER GEFANGENEN': 'Chorus of People and Prisoners',
    'CHOR': 'Chorus',
    'DIE WACHE': 'The Guard',
    'ALLE ANDEREN': 'All Others',
    'BEIDE': 'Both',
    'LEONORE UND FLORESTAN': 'Leonore & Florestan',
    'LEONORE UND ROCCO': 'Leonore & Rocco',
    'FLORESTAN UND CHOR': 'Florestan & Chorus',
    'DON FERNANDO, ROCCO': 'Don Fernando & Rocco',
    'JAQUINO, DON FERNANDO, ROCCO': 'Jaquino, Don Fernando & Rocco',
    'CHOR, LEONORE, MARZELLINE, FLORESTAN, DON FERNANDO, ROCCO': 'All'
}

SCENE_TITLES_A1 = {
    1: ("Jetzt, Schätzchen, jetzt sind wir allein (Duett)", "Now, darling, now we are alone (Duet)"),
    2: ("O wär’ ich schon mit dir vereint (Arie)", "O were I already united with you (Aria)"),
    3: ("Mir ist so wunderbar (Kanonisches Quartett)", "A wondrous feeling fills my heart (Canonical Quartet)"),
    4: ("Hat man nicht auch Gold beineben (Arie)", "If one doesn't have gold at hand (Aria)"),
    5: ("Gut, Söhnchen, gut (Terzett)", "Good, little son, good (Trio)"),
    6: ("Marsch", "March"),
    7: ("Ha! Welch’ ein Augenblick! (Arie mit Chor)", "Ha! What a moment! (Aria with Chorus)"),
    8: ("Jetzt, Alter, jetzt hat es Eile! (Duett)", "Now, old man, now there is haste! (Duet)"),
    9: ("Abscheulicher! Wo eilst du hin? (Rezitativ und Arie)", "Monster! Where are you hurrying? (Recitative and Aria)"),
    10: ("O welche Lust! (Finale I)", "O what joy! (Finale I)")
}

SCENE_TITLES_A2 = {
    1: ("Gott! Welch Dunkel hier! (Introduktion und Arie)", "God! What darkness here! (Introduction and Aria)"),
    2: ("Nur spute dich, nur frisch gegraben (Melodram und Duett)", "Just hurry, dig briskly (Melodrama and Duet)"),
    3: ("Euch werde Lohn in bessern Welten (Terzett)", "May reward be yours in better worlds (Trio)"),
    4: ("Er sterbe! Doch er soll erst wissen (Quartett)", "Let him die! But first he shall know (Quartet)"),
    5: ("O namenlose Freude! (Duett)", "O nameless joy! (Duet)"),
    6: ("Heil sei dem Tag, heil sei der Stunde! (Finale II)", "Hail to the day, hail to the hour! (Finale II)")
}

def parse_fidelio():
    with open('scripts/fidelio_act1_raw.html', 'r', encoding='utf-8') as f:
        h1 = f.read()
    with open('scripts/fidelio_act2_raw.html', 'r', encoding='utf-8') as f:
        h2 = f.read()

    # We will parse Act 1 into 10 canonical scenes, matching the 10 musical numbers & their associated dialogue.
    # We will parse Act 2 into 6 canonical scenes, matching the 6 musical numbers (11 through 16).

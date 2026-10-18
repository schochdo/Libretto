#!/usr/bin/env python3
"""
download_10_operas.py - Fetches raw libretto HTML files for the next 10 operas.
"""

import os
import urllib.request
from pathlib import Path

ROOT = Path(__file__).parent

OPERAS = [
    ('raw_barbiere', 'https://www.opera-arias.com/rossini/il-barbiere-di-siviglia/libretto/', 'https://www.opera-arias.com/rossini/il-barbiere-di-siviglia/libretto/english/'),
    ('raw_lucia', 'https://www.opera-arias.com/donizetti/lucia-di-lammermoor/libretto/', 'https://www.opera-arias.com/donizetti/lucia-di-lammermoor/libretto/english/'),
    ('raw_pasquale', 'https://www.opera-arias.com/donizetti/don-pasquale/libretto/', 'https://www.opera-arias.com/donizetti/don-pasquale/libretto/english/'),
    ('raw_norma', 'https://www.opera-arias.com/bellini/norma/libretto/', 'https://www.opera-arias.com/bellini/norma/libretto/english/'),
    ('raw_tosca', 'https://www.opera-arias.com/puccini/tosca/libretto/', 'https://www.opera-arias.com/puccini/tosca/libretto/english/'),
    ('raw_butterfly', 'https://www.opera-arias.com/puccini/madame-butterfly/libretto/', 'https://www.opera-arias.com/puccini/madame-butterfly/libretto/english/'),
    ('raw_turandot', 'https://www.opera-arias.com/puccini/turandot/libretto/', 'https://www.opera-arias.com/puccini/turandot/libretto/english/'),
    ('raw_trovatore', 'https://www.opera-arias.com/verdi/il-trovatore/libretto/', 'https://www.opera-arias.com/verdi/il-trovatore/libretto/english/'),
    ('raw_aida', 'https://www.opera-arias.com/verdi/aida/libretto/', 'https://www.opera-arias.com/verdi/aida/libretto/english/'),
    ('raw_faust', 'https://www.opera-arias.com/gounod/faust/libretto/', 'https://www.opera-arias.com/gounod/faust/libretto/english/'),
]

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

for folder, it_url, en_url in OPERAS:
    dest_dir = ROOT / folder
    dest_dir.mkdir(parents=True, exist_ok=True)
    
    it_file = dest_dir / 'raw_original.html'
    en_file = dest_dir / 'raw_english.html'
    
    print(f"Downloading {folder}...")
    if not it_file.exists():
        req = urllib.request.Request(it_url, headers=headers)
        data = urllib.request.urlopen(req, timeout=15).read()
        it_file.write_bytes(data)
        print(f"  ✓ Saved {it_file.name} ({len(data)} bytes)")
    else:
        print(f"  ✓ {it_file.name} already exists")

    if not en_file.exists():
        req = urllib.request.Request(en_url, headers=headers)
        data = urllib.request.urlopen(req, timeout=15).read()
        en_file.write_bytes(data)
        print(f"  ✓ Saved {en_file.name} ({len(data)} bytes)")
    else:
        print(f"  ✓ {en_file.name} already exists")

print("\n✓ All 10 opera raw files downloaded successfully!")

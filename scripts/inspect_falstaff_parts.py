import re

for act in [1, 2, 3]:
    with open(f'scripts/falstaff_act{act}_raw.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    p1 = html.find('Parte prima')
    p2 = html.find('Parte seconda')
    print(f"Act {act}: Parte prima at {p1}, Parte seconda at {p2}")
    
    # Check text after Parte prima and Parte seconda
    snippet1 = re.sub(r'<[^>]+>', ' ', html[p1:p1+300])
    snippet1 = re.sub(r'\s+', ' ', snippet1)
    snippet2 = re.sub(r'<[^>]+>', ' ', html[p2:p2+300])
    snippet2 = re.sub(r'\s+', ' ', snippet2)
    print(f"  P1 setting: {snippet1}")
    print(f"  P2 setting: {snippet2}")

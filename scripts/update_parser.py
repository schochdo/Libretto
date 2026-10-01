with open('scripts/parse_all_zauberfloete.py', 'r') as f:
    code = f.read()

old_func = """def get_logical_lines(cell_html):
    raw_lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', cell_html) if clean_txt(l)]
    merged = []
    in_paren = False
    cur_paren = []
    
    for l in raw_lines:
        if in_paren:
            cur_paren.append(l)
            if ')' in l:
                merged.append(' '.join(cur_paren))
                in_paren = False
                cur_paren = []
        else:
            if l.startswith('(') and not l.endswith(')'):
                in_paren = True
                cur_paren = [l]
            else:
                merged.append(l)
    if cur_paren:
        merged.append(' '.join(cur_paren))
    return merged"""

new_func = """def get_logical_lines(cell_html):
    raw_lines = [clean_txt(l) for l in re.split(r'<br\s*/?>|\n', cell_html) if clean_txt(l)]
    merged = []
    paren_depth = 0
    cur_paren = []
    for l in raw_lines:
        if paren_depth > 0:
            cur_paren.append(l)
            paren_depth += l.count('(') - l.count(')')
            if paren_depth <= 0:
                merged.append(' '.join(cur_paren))
                paren_depth = 0
                cur_paren = []
        else:
            if l.startswith('('):
                depth = l.count('(') - l.count(')')
                if depth > 0:
                    paren_depth = depth
                    cur_paren = [l]
                else:
                    merged.append(l)
            else:
                merged.append(l)
    if cur_paren:
        merged.append(' '.join(cur_paren))
    return merged"""

code = code.replace(old_func, new_func)
with open('scripts/parse_all_zauberfloete.py', 'w') as f:
    f.write(code)

print("Updated parse_all_zauberfloete.py")

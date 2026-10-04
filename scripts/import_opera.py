#!/usr/bin/env python3
"""
import_opera.py - Unified Libretto Ingestion & TypeScript Generation CLI

Imports libretto files from any source (local text, HTML, parallel bilingual columns,
pre-structured JSON, or direct web URLs), performs rigorous morphological tokenization
against Libretto's master lexicons (with German compound-verb and participle resolution),
and generates clean, modular TypeScript act files (act1.ts, act2.ts, index.ts)
conforming to the Libretto data model.

Supported Source Formats:
  - auto: Auto-detects input format based on content.
  - parallel: Bilingual parallel text (tab-separated "Original \t Translation",
              pipe-separated "Original | Translation", or alternating lines).
  - text: Standard dramaturgical script format ("SPEAKER: Line...").
  - html: Web page or HTML file with dialogue and stage directions.
  - json: Pre-structured JSON libretto.
  - url: Direct HTTP/HTTPS link to an online libretto (OperaGlass, Gutenberg, etc.).

Usage Examples:
  # Ingest from a bilingual parallel text (tab-delimited):
  python3 scripts/import_opera.py \\
    --source "scripts/samples/sample_bilingual_don_giovanni.tsv" \\
    --format parallel \\
    --language "it" \\
    --id "don-giovanni" \\
    --title "Don Giovanni" \\
    --original-title "Il dissoluto punito, ossia il Don Giovanni" \\
    --composer "Wolfgang Amadeus Mozart" \\
    --librettists "Lorenzo Da Ponte" \\
    --year 1787 \\
    --register

  # Ingest directly from a web URL:
  python3 scripts/import_opera.py \\
    --source "https://www.murashev.com/opera/Don_Giovanni_libretto_Italian_English" \\
    --language "it" \\
    --id "don-giovanni" \\
    --title "Don Giovanni" \\
    --composer "Wolfgang Amadeus Mozart"
"""

import argparse
import json
import os
import re
import sys
import urllib.request
from pathlib import Path
from typing import Dict, List, Optional, Tuple, Any

# Map ISO language code to human display label
LANGUAGE_LABELS = {
    'de': 'German',
    'it': 'Italian',
    'fr': 'French',
    'ru': 'Russian',
    'es': 'Spanish',
    'en': 'English'
}

VALID_POS = {
    'noun', 'verb', 'adjective', 'adverb', 'pronoun',
    'preposition', 'conjunction', 'interjection', 'particle', 'idiom'
}

GERMAN_AUXILIARIES = {
    'bin', 'bist', 'ist', 'sind', 'seid', 'war', 'warst', 'waren', 'wärest', 'sei', 'seien',
    'habe', 'hast', 'hat', 'haben', 'habt', 'hatte', 'hattest', 'hatten', 'hätte', 'hätten',
    'werde', 'wirst', 'wird', 'werden', 'werdet', 'wurde', 'wurdest', 'wurden', 'würde', 'würden'
}

GERMAN_PARTICIPLE_PREFIXES = ('ge', 'ver', 'be', 'ent', 'zer', 'er', 'miss', 'voll')

def to_camel_case(snake_str: str) -> str:
    """Converts kebab-case or snake_case to camelCase."""
    components = re.split(r'[-_]', snake_str)
    return components[0] + ''.join(x.title() for x in components[1:])

def clean_punctuation(word: str) -> Tuple[str, str, str]:
    """Separates leading and trailing punctuation from a word token."""
    prefix_match = re.match(r'^[„“"\'(\[«»\-]+', word)
    suffix_match = re.search(r'[„“"\'\)\]!?,.:;…«»\-]+$', word)
    prefix = prefix_match.group(0) if prefix_match else ''
    suffix = suffix_match.group(0) if suffix_match else ''
    
    clean = word[len(prefix):len(word)-len(suffix) if suffix else len(word)]
    return prefix, clean, suffix

class LexiconManager:
    """Loads and caches lexicons for word lookup and morphological analysis."""
    def __init__(self, scripts_dir: Path, language: str):
        self.language = language
        self.lexicon: Dict[str, Any] = {}
        self._load_lexicons(scripts_dir)

    def _load_lexicons(self, scripts_dir: Path):
        if self.language == 'de':
            de_master = scripts_dir / 'german_master_lexicon.json'
            if de_master.exists():
                with open(de_master, 'r', encoding='utf-8') as f:
                    self.lexicon.update(json.load(f))
            tann_master = scripts_dir / 'tannhaeuser_full_lexicon.json'
            if tann_master.exists():
                with open(tann_master, 'r', encoding='utf-8') as f:
                    tann_data = json.load(f)
                    for k, v in tann_data.items():
                        if k.lower() not in self.lexicon:
                            self.lexicon[k.lower()] = {
                                'word': k,
                                'lemma': k,
                                'pos': 'noun' if k and k[0].isupper() else 'verb',
                                'meaning': v if isinstance(v, str) else str(v)
                            }
        elif self.language == 'it':
            falstaff_lex = scripts_dir / 'falstaff_master_lexicon.json'
            if falstaff_lex.exists():
                with open(falstaff_lex, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    for k, v in data.items():
                        self.lexicon[k.lower()] = {
                            'word': k,
                            'lemma': k,
                            'pos': 'noun',
                            'meaning': v if isinstance(v, str) else str(v)
                        }
            it_vocab = scripts_dir / 'large_italian_vocab.json'
            if it_vocab.exists():
                with open(it_vocab, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    for k, v in data.items():
                        if k.lower() not in self.lexicon:
                            self.lexicon[k.lower()] = {
                                'word': k,
                                'lemma': k,
                                'pos': 'noun',
                                'meaning': v if isinstance(v, str) else str(v)
                            }

    def lookup(self, word: str) -> Optional[Dict[str, str]]:
        cw = word.lower().strip()
        if cw in self.lexicon:
            entry = self.lexicon[cw]
            if isinstance(entry, dict):
                return {
                    'word': word,
                    'lemma': entry.get('lemma', word),
                    'pos': entry.get('pos', 'noun') if entry.get('pos') in VALID_POS else 'noun',
                    'meaning': entry.get('meaning', ''),
                    'notes': entry.get('notes')
                }
            elif isinstance(entry, str):
                return {
                    'word': word,
                    'lemma': word,
                    'pos': 'noun' if word and word[0].isupper() else 'verb',
                    'meaning': entry
                }
        return None

def is_german_participle(clean_word: str, lemma: str) -> bool:
    """Detects whether a German word is morphologically a past participle (Partizip II)."""
    w = clean_word.lower()
    lem = lemma.lower()
    if w.startswith('ge') and (w.endswith('t') or w.endswith('en') or w.endswith('n')):
        return True
    if any(w.startswith(pfx) for pfx in ('ver', 'be', 'ent', 'zer', 'er')) and (w.endswith('t') or w.endswith('en')):
        if lem.endswith(('en', 'eln', 'ern')):
            return True
    return False

def guess_pos(word: str, language: str, has_auxiliary: bool = False) -> str:
    """Heuristic Part of Speech tagger with compound-verb awareness."""
    w = word.lower()
    if language == 'de':
        # Closed-class function words
        if w in {'der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einem', 'einen', 'einer', 'eines', 'kein', 'keine', 'keinem', 'keinen', 'keiner', 'keines'}:
            return 'particle'
        if w in {'in', 'an', 'auf', 'mit', 'zu', 'von', 'bei', 'nach', 'für', 'um', 'durch', 'gegen', 'ohne', 'aus', 'außer', 'seit', 'hinter', 'neben', 'über', 'unter', 'vor', 'zwischen', 'trotz', 'während', 'wegen', 'wider'}:
            return 'preposition'
        if w in {'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'mich', 'dich', 'sich', 'uns', 'euch', 'ihm', 'ihn', 'ihnen', 'ihrer', 'mein', 'dein', 'sein', 'unser', 'euer', 'dieser', 'diese', 'dieses', 'diesen', 'diesem', 'wer', 'was', 'wem', 'wen'}:
            return 'pronoun'
        if w in {'und', 'aber', 'oder', 'denn', 'doch', 'weil', 'dass', 'daß', 'ob', 'als', 'wenn', 'wie', 'so', 'damit', 'obwohl', 'ehe', 'bis'}:
            return 'conjunction'
        if w in {'nicht', 'schon', 'noch', 'oft', 'nie', 'immer', 'hier', 'da', 'dort', 'jetzt', 'nun', 'bald', 'sehr', 'wohl', 'gar', 'nur', 'auch', 'vielleicht', 'wieder'}:
            return 'adverb'

        # Predicate participle or compound verb
        if has_auxiliary and is_german_participle(word, word):
            return 'verb'
        if word and word[0].isupper() and len(word) > 1:
            return 'noun'
        if is_german_participle(word, word):
            return 'verb'
        if w.endswith(('en', 'ern', 'eln', 'st', 'tet', 'te')):
            return 'verb'
        if w.endswith(('lich', 'ig', 'isch', 'bar', 'sam', 'voll', 'haft')):
            return 'adjective'
    elif language == 'it':
        if w in {'il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'uno', 'una', 'un\''}:
            return 'particle'
        if w in {'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra'}:
            return 'preposition'
        if w in {'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'mi', 'ti', 'si', 'ci', 'vi', 'me', 'te', 'se', 'lo', 'la', 'li', 'le', 'ne', 'chi', 'che', 'cui'}:
            return 'pronoun'
        if w in {'e', 'ed', 'o', 'od', 'ma', 'se', 'perché', 'poiché', 'affinché', 'purché', 'mentre', 'quando'}:
            return 'conjunction'
        if w in {'non', 'più', 'meno', 'mai', 'sempre', 'già', 'qui', 'là', 'ora', 'bene', 'male', 'forse', 'anche', 'ancora'}:
            return 'adverb'
        if w.endswith(('are', 'ere', 'ire', 'ando', 'endo', 'ato', 'uto', 'ito')):
            return 'verb'
        if w.endswith(('mente',)):
            return 'adverb'
        if w.endswith(('oso', 'osa', 'ico', 'ica', 'ivo', 'iva', 'ale', 'ile')):
            return 'adjective'
    return 'noun' if word and word[0].isupper() else 'verb'

def tokenize_line(original: str, literal: str, lexicon: LexiconManager, language: str) -> List[Dict[str, Any]]:
    """Splits a line into words, enriches each with linguistic tokens, and resolves compound verbs."""
    tokens = []
    raw_words = original.split()
    
    # Detect if clause contains an auxiliary verb (sein, haben, werden)
    has_auxiliary = False
    if language == 'de':
        has_auxiliary = any(clean_punctuation(w)[1].lower() in GERMAN_AUXILIARIES for w in raw_words)

    for raw in raw_words:
        prefix, clean, suffix = clean_punctuation(raw)
        if not clean:
            continue
        
        info = lexicon.lookup(clean)
        if info:
            pos = info.get('pos', 'noun')
            notes = info.get('notes')
            lemma = info.get('lemma', clean)

            # Reclassify past participles used in compound tenses (Perfekt / Passiv)
            if language == 'de' and (has_auxiliary or is_german_participle(clean, lemma)):
                if pos == 'adjective':
                    pos = 'verb'
                    notes = f"{notes} (Partizip II in verbal predicate)" if notes else "Past participle (Partizip II) in verbal predicate."

            token = {
                'word': clean,
                'lemma': lemma,
                'pos': pos,
                'meaning': info.get('meaning', '')
            }
            if notes:
                token['notes'] = notes
        else:
            pos = guess_pos(clean, language, has_auxiliary=has_auxiliary)
            token = {
                'word': clean,
                'lemma': clean.lower(),
                'pos': pos,
                'meaning': ''
            }
            if language == 'de' and is_german_participle(clean, clean):
                token['notes'] = 'Past participle (Partizip II)'

        tokens.append(token)
    return tokens

def clean_trailing_hyphens(text: str) -> str:
    """Strips trailing overhanging hyphens and ASCII dashes after punctuation."""
    if not text:
        return text
    text = re.sub(r'[:;,!?.]\s*-\s*$', lambda m: m.group(0)[0], text)
    text = re.sub(r'\s+-\s*$', '', text)
    return text.strip()

def smooth_literal_translation(lit: str) -> str:
    """Removes awkward mechanical hyphenated calques and trailing hyphens from English literal translations."""
    calques = [
        (r'\bto-me\b', 'to me'), (r'\bto-you\b', 'to you'), (r'\bto-her\b', 'to her'),
        (r'\bto-him\b', 'to him'), (r'\bto-us\b', 'to us'), (r'\bto-them\b', 'to them'),
        (r'\bto-the\b', 'to the'), (r'\bof-the\b', 'of the'), (r'\bin-the\b', 'in the'),
        (r'\bfrom-the\b', 'from the'), (r'\bwith-the\b', 'with the'), (r'\binto-the\b', 'into the'),
        (r'\bon-the\b', 'on the'), (r'\bat-the\b', 'at the'), (r'\bby-the\b', 'by the'),
        (r'\bfor-the\b', 'for the'), (r'\bout-of\b', 'out of'), (r'\bfor-that\b', 'for that'),
        (r'\bin-order\b', 'in order'), (r'\bas-soon-as\b', 'as soon as'), (r'\bat-least\b', 'at least'),
        (r'\bwould-be\b', 'would be'), (r'\bwould-like\b', 'would like'), (r'\bwould-catch\b', 'would catch'),
        (r'\bwould-lock\b', 'would lock'), (r'\bsee-again\b', 'see again'), (r'\bafter-all\b', 'after all'),
        (r'\bby-the-dozen\b', 'by the dozen')
    ]
    for pat, rep in calques:
        lit = re.sub(pat, rep, lit, flags=re.IGNORECASE)
    lit = clean_trailing_hyphens(lit)
    return lit.strip()

class UniversalLibrettoParser:
    """Universal parser capable of ingesting text, HTML, and parallel bilingual libretti."""
    def __init__(self, language: str, lexicon: LexiconManager, fmt: str = 'auto'):
        self.language = language
        self.lexicon = lexicon
        self.fmt = fmt

    def parse(self, raw_content: str) -> List[Dict[str, Any]]:
        raw_content = raw_content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Strip HTML markup if present
        if '<html' in raw_content.lower() or '<body' in raw_content.lower() or '<table' in raw_content.lower():
            raw_content = re.sub(r'<br\s*/?>', '\n', raw_content, flags=re.IGNORECASE)
            raw_content = re.sub(r'</?(?:p|div|tr|td|th|section|article)[^>]*>', '\n', raw_content, flags=re.IGNORECASE)
            raw_content = re.sub(r'<[^>]+>', '', raw_content)

        lines = [line.strip() for line in raw_content.split('\n') if line.strip()]
        
        # Check if format is parallel (tab or pipe delimited)
        is_parallel = self.fmt == 'parallel' or any('\t' in l or ' | ' in l for l in lines[:20])

        acts = []
        current_act: Optional[Dict[str, Any]] = None
        current_scene: Optional[Dict[str, Any]] = None
        current_cue: Optional[Dict[str, Any]] = None
        
        act_counter = 0
        scene_counter = 0
        cue_counter = 0
        line_counter = 0

        act_pattern = re.compile(r'^(?:ACT|ATTO|AUFZUG|AKT)\s+([IVXLCDM\d]+|[A-Z]+)', re.IGNORECASE)
        scene_pattern = re.compile(r'^(?:SCENE|SCENA|AUFTRITT|BILD)\s+([IVXLCDM\d]+|[A-Z]+)', re.IGNORECASE)
        speaker_pattern = re.compile(r'^([A-ZÀ-ÖØ-ß\s\.\'\-]+?)(?:\s*\(.*?\))?\s*:\s*(.*)$')
        piece_pattern = re.compile(r'^(?:NO\.\s*\d+|ARIA|RECITATIVO|DUETTO|TERZETTO|QUARTETTO|FINALE|CORO|CHORUS)\b', re.IGNORECASE)

        for line_str in lines:
            # Check for Act marker
            act_match = act_pattern.match(line_str)
            if act_match:
                act_counter += 1
                scene_counter = 0
                cue_counter = 0
                line_counter = 0
                current_act = {
                    'actNumber': act_counter,
                    'title': line_str.strip(),
                    'setting': '',
                    'scenes': []
                }
                acts.append(current_act)
                current_scene = None
                current_cue = None
                continue

            # Check for Scene marker
            scene_match = scene_pattern.match(line_str)
            if scene_match:
                if not current_act:
                    act_counter = 1
                    current_act = {'actNumber': 1, 'title': 'Act I', 'setting': '', 'scenes': []}
                    acts.append(current_act)
                scene_counter += 1
                cue_counter = 0
                line_counter = 0
                current_scene = {
                    'sceneNumber': scene_counter,
                    'title': line_str.strip(),
                    'description': '',
                    'cues': []
                }
                current_act['scenes'].append(current_scene)
                current_cue = None
                continue

            if not current_act:
                act_counter = 1
                current_act = {'actNumber': 1, 'title': 'Act I', 'setting': '', 'scenes': []}
                acts.append(current_act)
            if not current_scene:
                scene_counter = 1
                current_scene = {'sceneNumber': 1, 'title': 'Scene 1', 'description': '', 'cues': []}
                current_act['scenes'].append(current_scene)

            # Check musical piece title
            if piece_pattern.match(line_str):
                if current_cue:
                    current_cue['pieceTitle'] = line_str.strip()
                continue

            # Parallel columns: separate original from literal translation
            orig_text = line_str
            lit_text = line_str

            if is_parallel:
                if '\t' in line_str:
                    parts = line_str.split('\t', 1)
                    orig_text = parts[0].strip()
                    lit_text = smooth_literal_translation(parts[1].strip())
                elif ' | ' in line_str:
                    parts = line_str.split(' | ', 1)
                    orig_text = parts[0].strip()
                    lit_text = smooth_literal_translation(parts[1].strip())

            # Speaker line
            speaker_match = speaker_pattern.match(orig_text)
            if speaker_match:
                speaker_raw = speaker_match.group(1).strip()
                dialogue_orig = speaker_match.group(2).strip()
                dialogue_lit = lit_text
                if is_parallel and '\t' in line_str:
                    dialogue_lit = lit_text

                cue_counter += 1
                current_cue = {
                    'id': f"a{act_counter}_s{scene_counter}_c{cue_counter}",
                    'speaker': speaker_raw.title(),
                    'lines': []
                }
                current_scene['cues'].append(current_cue)

                if dialogue_orig:
                    dialogue_orig = clean_trailing_hyphens(dialogue_orig)
                    dialogue_lit = smooth_literal_translation(dialogue_lit)
                    line_counter += 1
                    tokens = tokenize_line(dialogue_orig, dialogue_lit, self.lexicon, self.language)
                    current_cue['lines'].append({
                        'id': f"{current_cue['id']}_l{line_counter}",
                        'original': dialogue_orig,
                        'literal': dialogue_lit or dialogue_orig,
                        'tokens': tokens
                    })
                continue

            # Ongoing dialogue line
            if current_cue:
                if orig_text.startswith('(') and orig_text.endswith(')'):
                    current_cue['stageDirection'] = orig_text.strip('()')
                    continue

                orig_text = clean_trailing_hyphens(orig_text)
                lit_text = smooth_literal_translation(lit_text)
                line_counter += 1
                tokens = tokenize_line(orig_text, lit_text, self.lexicon, self.language)
                current_cue['lines'].append({
                    'id': f"{current_cue['id']}_l{line_counter}",
                    'original': orig_text,
                    'literal': lit_text or orig_text,
                    'tokens': tokens
                })
            else:
                if orig_text.startswith('(') or orig_text.startswith('['):
                    clean_dir = orig_text.strip('()[]')
                    if not current_scene['description']:
                        current_scene['description'] = clean_dir
                    else:
                        current_scene['description'] += f"\n\n{clean_dir}"

        return acts

def fetch_url_content(url: str) -> str:
    """Fetches text content from a web URL with standard user agent."""
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Libretto Classical Ingestion Bot/2.0)'}
    )
    with urllib.request.urlopen(req, timeout=15) as response:
        charset = response.headers.get_content_charset() or 'utf-8'
        return response.read().decode(charset, errors='replace')

def generate_typescript_files(
    opera_data: Dict[str, Any],
    output_dir: Path,
    camel_id: str,
    repo_root: Path
):
    """Writes formatted act[N].ts and index.ts TypeScript source files."""
    output_dir.mkdir(parents=True, exist_ok=True)
    
    types_path = repo_root / 'src' / 'types' / 'libretto'
    try:
        rel_types = os.path.relpath(types_path, output_dir)
        if not rel_types.startswith('.'):
            rel_types = f"./{rel_types}"
    except ValueError:
        rel_types = "../../types/libretto"

    act_export_names = []
    
    for act in opera_data['acts']:
        act_num = act['actNumber']
        var_name = f"{camel_id}Act{act_num}"
        act_export_names.append((act_num, var_name))
        
        act_file = output_dir / f"act{act_num}.ts"
        content = [
            f"import {{ Act }} from '{rel_types}';",
            "",
            f"export const {var_name}: Act = {json.dumps(act, indent=2, ensure_ascii=False)};",
            "",
            f"export default {var_name};",
            ""
        ]
        with open(act_file, 'w', encoding='utf-8') as f:
            f.write('\n'.join(content))
        try:
            rel = act_file.resolve().relative_to(repo_root)
        except ValueError:
            rel = act_file
        print(f"  ✓ Created {rel}")

    index_file = output_dir / "index.ts"
    index_lines = [
        f"import {{ Opera }} from '{rel_types}';"
    ]
    for act_num, var_name in act_export_names:
        index_lines.append(f"import {{ {var_name} }} from './act{act_num}';")
    
    meta_copy = {k: v for k, v in opera_data.items() if k != 'acts'}
    
    index_lines.append("")
    index_lines.append(f"export const {camel_id}: Opera = {{")
    for k, v in meta_copy.items():
        val_str = json.dumps(v, indent=2, ensure_ascii=False)
        val_indented = val_str.replace('\n', '\n  ')
        index_lines.append(f"  {k}: {val_indented},")
    
    index_lines.append("  acts: [")
    for _, var_name in act_export_names:
        index_lines.append(f"    {var_name},")
    index_lines.append("  ]")
    index_lines.append("};")
    index_lines.append("")
    index_lines.append(f"export default {camel_id};")
    index_lines.append("")

    with open(index_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(index_lines))
    try:
        rel = index_file.resolve().relative_to(repo_root)
    except ValueError:
        rel = index_file
    print(f"  ✓ Created {rel}")

def register_in_catalog(opera_data: Dict[str, Any], camel_id: str, operas_ts_path: Path):
    """Registers newly ingested opera into src/data/operas.ts."""
    if not operas_ts_path.exists():
        print(f"  ⚠ Warning: {operas_ts_path} not found. Skipping auto-registration.")
        return

    with open(operas_ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    if f"'{opera_data['id']}'" in content or f'"{opera_data["id"]}"' in content:
        print(f"  ℹ Opera '{opera_data['id']}' is already in {operas_ts_path.name}")
        return

    catalog_match = re.search(r'export const OPERA_CATALOG: OperaSummary\[\] = \[\s*([\s\S]*?)\n\];', content)
    if not catalog_match:
        print("  ⚠ Could not find OPERA_CATALOG array in operas.ts")
        return

    new_summary = {
        'id': opera_data['id'],
        'title': opera_data['title'],
        'composer': opera_data['composer'],
        'librettists': opera_data['librettists'],
        'language': opera_data['language'],
        'languageLabel': opera_data['languageLabel'],
        'year': opera_data['year']
    }
    if opera_data.get('originalTitle'):
        new_summary['originalTitle'] = opera_data['originalTitle']

    summary_json = json.dumps(new_summary, indent=4, ensure_ascii=False)
    indented_summary = '  ' + summary_json.replace('\n', '\n  ') + ','

    old_catalog_body = catalog_match.group(1)
    new_catalog_body = old_catalog_body + '\n' + indented_summary
    content = content.replace(catalog_match.group(0), f"export const OPERA_CATALOG: OperaSummary[] = [\n{new_catalog_body}\n];")

    loaders_match = re.search(r'const OPERA_LOADERS: Record<string, \(\) => Promise<\{ default: Opera \}>> = \{\s*([\s\S]*?)\n\};', content)
    if loaders_match:
        old_loaders_body = loaders_match.group(1)
        loader_entry = f"  '{opera_data['id']}': () => import('./{camel_id}'),"
        new_loaders_body = old_loaders_body + '\n' + loader_entry
        content = content.replace(loaders_match.group(0), f"const OPERA_LOADERS: Record<string, () => Promise<{{ default: Opera }}>> = {{\n{new_loaders_body}\n}};")

    with open(operas_ts_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"  ✓ Registered '{opera_data['title']}' in {operas_ts_path.name}")

def main():
    parser = argparse.ArgumentParser(
        description="Unified Libretto Ingestion & TypeScript Generation CLI for Libretto.",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument('--source', required=True, help="Path to input text, HTML, TSV, JSON file, or HTTP/HTTPS URL.")
    parser.add_argument('--format', default='auto', choices=['auto', 'text', 'parallel', 'html', 'json'], help="Source format (default: 'auto').")
    parser.add_argument('--id', required=True, help="Unique slug ID for the opera (e.g. 'don-giovanni').")
    parser.add_argument('--title', required=True, help="Primary/English title (e.g. 'Don Giovanni').")
    parser.add_argument('--original-title', default='', help="Full original title in historical language.")
    parser.add_argument('--composer', required=True, help="Full name of composer (e.g. 'Wolfgang Amadeus Mozart').")
    parser.add_argument('--librettists', default='', help="Comma-separated librettists (e.g. 'Lorenzo Da Ponte').")
    parser.add_argument('--language', default='it', choices=list(LANGUAGE_LABELS.keys()), help="Supported language code (default: 'it').")
    parser.add_argument('--language-label', default='', help="Display label (e.g. 'Italian'). Inferred if omitted.")
    parser.add_argument('--year', type=int, default=1800, help="Year of premiere or composition.")
    parser.add_argument('--synopsis', default='', help="Synopsis text summary.")
    parser.add_argument('--synopsis-file', default='', help="Path to text file containing full synopsis.")
    parser.add_argument('--output-dir', default='', help="Output directory for generated TypeScript files (default: src/data/<camelCaseId>).")
    parser.add_argument('--register', action='store_true', help="Automatically register the opera in src/data/operas.ts.")
    parser.add_argument('--dry-run', action='store_true', help="Validate and parse without writing files to disk.")

    args = parser.parse_args()

    # Load content (from URL or file)
    is_url = args.source.startswith('http://') or args.source.startswith('https://')
    if is_url:
        print(f"\n[Libretto Importer] Fetching remote libretto from: {args.source}")
        try:
            raw_content = fetch_url_content(args.source)
            print(f"  ✓ Fetched {len(raw_content):,} characters from web source")
        except Exception as e:
            print(f"Error fetching URL: {e}", file=sys.stderr)
            sys.exit(1)
        source_is_json = False
    else:
        source_path = Path(args.source)
        if not source_path.exists():
            print(f"Error: Source file '{args.source}' does not exist.", file=sys.stderr)
            sys.exit(1)
        source_is_json = source_path.suffix.lower() == '.json'
        with open(source_path, 'r', encoding='utf-8', errors='replace') as f:
            raw_content = f.read()

    camel_id = to_camel_case(args.id)
    language_label = args.language_label or LANGUAGE_LABELS.get(args.language, args.language.capitalize())
    
    synopsis = args.synopsis
    if args.synopsis_file:
        syn_path = Path(args.synopsis_file)
        if syn_path.exists():
            with open(syn_path, 'r', encoding='utf-8') as f:
                synopsis = f.read().strip()

    librettists = [lib.strip() for lib in args.librettists.split(',') if lib.strip()] if args.librettists else [args.composer]

    scripts_dir = Path(__file__).parent.resolve()
    print(f"\n[Libretto Importer] Initializing lexical database for language: {args.language} ({language_label})")
    lexicon = LexiconManager(scripts_dir, args.language)
    print(f"  ✓ Loaded {len(lexicon.lexicon):,} lemma entries into memory")

    acts = []
    characters = []

    if source_is_json or args.format == 'json':
        data = json.loads(raw_content)
        if 'acts' in data:
            acts = data['acts']
            characters = data.get('characters', [])
        elif isinstance(data, list):
            acts = data
        elif isinstance(data, dict):
            act_keys = sorted([k for k in data.keys() if 'act' in k.lower()])
            if act_keys:
                for idx, ak in enumerate(act_keys, 1):
                    scenes_val = data[ak]
                    acts.append({
                        'actNumber': idx,
                        'title': f"Act {idx}",
                        'setting': '',
                        'scenes': scenes_val if isinstance(scenes_val, list) else []
                    })
            else:
                acts = [data]

        for act in acts:
            for scene in act.get('scenes', []):
                for cue in scene.get('cues', []):
                    for line in cue.get('lines', []):
                        if not line.get('tokens') and line.get('original'):
                            line['tokens'] = tokenize_line(
                                line['original'],
                                line.get('literal', line['original']),
                                lexicon,
                                args.language
                            )
    else:
        parser_engine = UniversalLibrettoParser(args.language, lexicon, fmt=args.format)
        acts = parser_engine.parse(raw_content)

    if not characters:
        discovered_speakers = set()
        for act in acts:
            for scene in act.get('scenes', []):
                for cue in scene.get('cues', []):
                    if cue.get('speaker'):
                        discovered_speakers.add(cue['speaker'])
        characters = [{'name': spk, 'voiceType': 'Chorus' if 'chorus' in spk.lower() or 'coro' in spk.lower() else 'Baritone', 'description': ''} for spk in sorted(discovered_speakers)]

    total_scenes = sum(len(a.get('scenes', [])) for a in acts)
    total_cues = sum(len(s.get('cues', [])) for a in acts for s in a.get('scenes', []))
    total_lines = sum(len(c.get('lines', [])) for a in acts for s in a.get('scenes', []) for c in s.get('cues', []))
    total_tokens = sum(len(l.get('tokens', [])) for a in acts for s in a.get('scenes', []) for c in s.get('cues', []) for l in c.get('lines', []))

    print(f"\n[Ingest Summary] Parsed Structure:")
    print(f"  • Acts:       {len(acts)}")
    print(f"  • Scenes:     {total_scenes}")
    print(f"  • Cues:       {total_cues}")
    print(f"  • Lines:      {total_lines}")
    print(f"  • Tokens:     {total_tokens}")
    print(f"  • Characters: {len(characters)}")

    opera_obj = {
        'id': args.id,
        'title': args.title,
        'originalTitle': args.original_title or args.title,
        'composer': args.composer,
        'librettists': librettists,
        'language': args.language,
        'languageLabel': language_label,
        'year': args.year,
        'synopsis': synopsis or f"Synopsis for {args.title} by {args.composer}.",
        'characters': characters,
        'acts': acts
    }

    if args.dry_run:
        print("\n[Dry Run] Validation succeeded. No files written.")
        sys.exit(0)

    repo_root = scripts_dir.parent.resolve()
    if args.output_dir:
        out_dir = Path(args.output_dir).resolve()
    else:
        out_dir = (repo_root / 'src' / 'data' / camel_id).resolve()

    try:
        rel_out = out_dir.relative_to(repo_root)
    except ValueError:
        rel_out = out_dir
    print(f"\n[Generation] Writing TypeScript files to {rel_out}...")
    generate_typescript_files(opera_obj, out_dir, camel_id, repo_root)

    if args.register:
        operas_ts = repo_root / 'src' / 'data' / 'operas.ts'
        print(f"\n[Registration] Updating catalog...")
        register_in_catalog(opera_obj, camel_id, operas_ts)

    print(f"\n🎉 Successfully imported '{args.title}' into Libretto!\n")

if __name__ == '__main__':
    main()

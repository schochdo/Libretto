#!/usr/bin/env python3
"""
apply_plain_english_standard.py - Sweeps all opera data files in src/data/
to replace academic linguistics jargon with clear, direct, singer-friendly plain English.
"""

import glob
import re
from pathlib import Path

ROOT_DIR = Path(__file__).parent.parent
DATA_DIR = ROOT_DIR / 'src' / 'data'

REPLACEMENTS = [
    # Phrase-level transformations for natural pedagogical clarity
    (r'\b(archaic|poetic)?\s*enclitic\s+(direct\s+object\s+)?pronoun\b', 'attached pronoun'),
    (r'\b(archaic\s+poetic\s+)?enclitic\s+form\b', 'poetic form with attached pronoun'),
    (r'\benclitic\s+contraction\b', 'poetic contraction'),
    (r'\(apocope\)', '(shortened poetic form)'),
    (r'\(apocope\s+for\s+([^\)]+)\)', r'(shortened form of \1)'),
    (r'Poetic\s+apocope\s+of\s+past\s+historic\s+(\w+)\.?', r"Poetic shortened form of past tense '\1'."),
    (r'Poetic\s+apocope\s+of\s+(\w+)\.?', r"Poetic shortened form of '\1'."),
    (r'\(apocope\s+of\s+([^\)]+)\)', r'(shortened form of \1)'),
    (r'\(epistemic\s+modal\)', '(speculative modal)'),
    (r'Epistemic\s+modal\b', 'Modal phrase'),
    (r'with\s+preterite\s+(\'[^\']+\')', r'with past tense \1'),
    (r'periphrastic\s+(\'[^\']+\')', r'compound subjunctive \1'),
    (r'archaic\s+weak\s+preterite\s+of\s+(\w+)', r"archaic past tense of '\1'"),
    (r'archaic\s+preterite\s+(\w+)', r"archaic past tense '\1'"),
    (r'\(archaic\s+preterite\)', '(archaic past tense)'),
    (r'\(preterite\)', '(past tense)'),
    (r'\(subjunctive\s+[I|II]+\s+optative\)', '(subjunctive wish)'),
    (r'\(optative\s+subjunctive\)', '(subjunctive wish)'),
    (r'\s*\(optative\)', ''),
    (r'\(syncope\s+of\s+([^\)]+)\)', r'(shortened form of \1)'),
    (r'\(syncope\)', '(shortened form)'),
    (r'\bArchaic\s+preterite\s+form\s+of\s+([^\.]+)\.?', r'Archaic past tense form of \1.'),
    (r'\barchaic\s+preterite\s+form\s+of\s+([^\.]+)\.?', r'archaic past tense form of \1.'),
    (r'\bPreterite\s+of\s+([^\.]+)\.?', r'Past tense of \1.'),
    (r'\bpreterite\s+of\s+([^\.]+)\.?', r'past tense of \1.'),
    
    # Tannhäuser specific & general grammar notes
    (r'Optative\s+subjunctive\s+passive\s+formula\s+\'([^\']+)\'\.?', r"Solemn passive blessing formula: '\1' (Blessed/Praised be)."),
    (r'Optative\s+subjunctive\s+passive\s+continuing\s+from\s+previous\s+line\.?', r"Passive blessing continuing from the previous line."),
    (r'Passive\s+optative\s+subjunctive\s+\'([^\']+)\'\.?', r"Passive subjunctive blessing: '\1'."),
    (r'Solemn\s+optative\s+subjunctive\s+opening\b', 'Solemn prayerful opening'),
    (r'Optative\s+subjunctive\s+\'([^\']+)\'\.?', r"Subjunctive wish: '\1' expresses a prayer or gentle hope."),
    (r'Optative\s+subjunctive\s+clause\b', 'Subjunctive clause expressing a wish'),
    (r'Optative\s+subjunctive\s+expressing\b', 'Subjunctive expression of'),
    (r'Optative\s+subjunctive\s+governing\b', 'Subjunctive verb governing'),
    (r'Optative\s+subjunctive\s+with\b', 'Subjunctive expression with'),
    (r'Optative\s+subjunctive\s+using\b', 'Subjunctive expression using'),
    (r'Optative\s+subjunctive\s+I\s+\'([^\']+)\'\.?', r"Subjunctive wish: '\1'."),
    (r'Optative\s+subjunctive\s+I\b', 'Subjunctive wish'),
    (r'Optative\s+subjunctive\s+III?\b', 'Subjunctive wish'),
    (r'Optative\s+passive\b', 'Subjunctive passive blessing'),
    (r'Optative\s+\'dass\'\s+clause\b', "Wistful 'dass' clause (Oh, that...)"),
    (r'Optative\s+clause\b', 'Subjunctive prayer or wish'),
    (r'\'Mach,\s+dass\.\.\.\'\s+is\s+an\s+optative\s+formula\b', "'Mach, dass...' is a prayerful formula ('grant that / make it so that')"),
    (r'substantivized\s+infinitive\s+\'([^\']+)\'', r"verb used as a noun '\1'"),
    (r'substantivized\s+infinitive\b', 'verb used as a noun'),
    (r'substantivized\s+adjective\b', 'adjective used as a noun'),
    (r'Periphrastic\s+imperative\s+with\s+\'wolle\'\s+expressing\s+respectful\s+pleading\.?', r"Gentle, respectful plea with 'wolle' ('please do not')."),
    (r'partitive\s+genitive\s+\'([^\']+)\'', r"partitive phrase '\1'"),
    (r'partitive\s+genitive\b', 'genitive phrase'),
    (r'Preterite\s+of\s+strong\s+verb\s+\'([^\']+)\'', r"Past tense of strong verb '\1'"),
    (r'Preterite\s+\'([^\']+)\'', r"Past tense '\1'"),
    (r'preterite\s+\'([^\']+)\'', r"past tense '\1'"),
    (r'Archaic\s+strong\s+preterite\s+\'([^\']+)\'', r"Archaic strong past tense '\1'"),
    (r'archaic\s+preterite\s+of\s+\'([^\']+)\'', r"archaic past tense of '\1'"),
    (r'archaic\s+preterite\s+\'([^\']+)\'', r"archaic past tense '\1'"),
    (r'archaic\s+second-person\s+preterite\s+\'([^\']+)\'', r"archaic second-person past tense '\1'"),
    (r'Apocope\s+in\s+([^\.]+)\.?', r'Poetic shortening in \1.'),
    (r'apocope\s+in\s+([^\.]+)\.?', r'poetic shortening in \1.'),
    (r'apocope\s+for\s+([^\.]+)\.?', r'shortened form of \1.'),
    (r'apocope\s+of\s+([^\.]+)\.?', r'shortened form of \1.'),
    (r'Apocope\s+of\s+([^\.]+)\.?', r'Shortened form of \1.'),
    (r'Syncope\s+in\s+([^\.]+)\.?', r'Poetic contraction in \1.'),
    (r'syncope\s+in\s+([^\.]+)\.?', r'poetic contraction in \1.'),
    (r'Antithetical\s+parataxis\b', 'Dramatic contrast'),
    (r'antithetical\s+parataxis\b', 'dramatic contrast'),
    (r'epistemic\s+particle\s+\'wohl\'', r"speculative particle 'wohl' ('perhaps/indeed')"),

    # Direct word-level fallbacks
    (r'\bParallel preterite verbs of desire\b', 'Parallel past tense verbs of desire'),
    (r'\boptative subjunctive passive\b', 'subjunctive passive blessing'),
    (r'\boptative passive clause\b', 'subjunctive blessing clause'),
    (r'\boptative passive\b', 'subjunctive passive'),
    (r'\bpoetic syncope\b', 'poetic contraction'),
    (r'\bpoetic apocope\b', 'poetic shortening'),
    (r'\bwith apocope\b', 'with shortened form'),
    (r'\bpolite optative imperative\b', 'polite request'),
    (r'\boptative subjunctive\b', 'subjunctive wish'),
    (r'\boptative Konjunktiv I\b', 'subjunctive wish'),
    (r'\bpreterite plural\b', 'past tense plural'),
    (r'\bpartitive genitive\b', 'partitive phrase'),
    (r'\benclitic\b', 'attached'),
    (r'\boptative\b', 'subjunctive wish'),
    (r'\bpreterite\b', 'past tense'),
    (r'\bapocope\b', 'shortened form'),
    (r'\bsyncope\b', 'contraction'),
    (r'\bepistemic\b', 'speculative'),
    (r'\bperiphrastic\b', 'compound'),
    (r'\bwith inchoative prefix er-\b', 'with prefix er-'),
    (r'\binchoative prefix er-\b', 'prefix er-'),
    (r'\bPartitive genitive\b', 'Partitive phrase'),
    (r'\bpartitive genitive\b', 'partitive phrase'),
    (r'\bApocope\s+\'([^\']+)\'\s+from\s+\'([^\']+)\'', r"Shortened poetic form '\1' from '\2'"),
    (r'\bApocope\s+\(truncation\s+of\s+([^\)]+)\)', r"Shortened poetic form of '\1'"),
    (r'\bapocope\b', 'shortened form'),
    (r'\bApocope\b', 'Shortened form'),
]

def main():
    print("=" * 70)
    print("APPLYING PEDAGOGICAL PLAIN-ENGLISH STANDARD ACROSS ALL OPERAS")
    print("=" * 70)

    files = sorted(glob.glob(str(DATA_DIR / '**' / '*.ts'), recursive=True))
    total_modifications = 0
    modified_files = 0

    for fpath_str in files:
        fpath = Path(fpath_str)
        if fpath.name in ['operas.ts', 'index.ts']:
            continue
        
        orig_content = fpath.read_text(encoding='utf-8')
        content = orig_content

        for pattern, repl in REPLACEMENTS:
            content = re.sub(pattern, repl, content)

        if content != orig_content:
            fpath.write_text(content, encoding='utf-8')
            modified_files += 1
            print(f"  ✓ Updated {fpath.relative_to(ROOT_DIR)}")

    print(f"\nCompleted! Modified {modified_files} files.")

if __name__ == '__main__':
    main()

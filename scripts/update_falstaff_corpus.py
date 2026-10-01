import json
import glob
import os
import subprocess

def main():
    corpus_path = 'scripts/falstaff_clean_corpus.json'
    with open(corpus_path, 'r', encoding='utf-8') as f:
        corpus = json.load(f)

    curated_files = sorted(glob.glob('scripts/falstaff_curated_*.json'))
    print(f"Found {len(curated_files)} curated JSON files:")
    
    total_updated = 0
    for cf in curated_files:
        with open(cf, 'r', encoding='utf-8') as f:
            data = json.load(f)
        for k, v in data.items():
            corpus[k] = v
            total_updated += 1
        print(f"  Merged {len(data)} entries from {cf}")

    print(f"Total entries updated: {total_updated}")
    with open(corpus_path, 'w', encoding='utf-8') as f:
        json.dump(corpus, f, ensure_ascii=False, indent=2)
    print(f"Saved {corpus_path} successfully.")

    # Re-emit TypeScript files
    print("Re-emitting TypeScript files...")
    res = subprocess.run(['python3', 'scripts/emit_falstaff_ts.py'], capture_output=True, text=True)
    print(res.stdout)
    if res.stderr:
        print("STDERR:", res.stderr)

if __name__ == '__main__':
    main()

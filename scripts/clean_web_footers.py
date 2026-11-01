#!/usr/bin/env python3
import json

CLEAN_FINAL_LINES = {
    "src/data/aida/act4.ts": {
        "id": "a4_s2_c32_l1",
        "original": "Immenso Fthà!",
        "literal": "Immense Ptah!",
        "tokens": [
            {"word": "Immenso", "lemma": "immenso", "pos": "adjective", "meaning": "immense / boundless"},
            {"word": "Fthà!", "lemma": "Fthà", "pos": "noun", "meaning": "Ptah (ancient Egyptian creator god)"}
        ]
    },
    "src/data/barbiereDiSiviglia/act2.ts": {
        "id": "a2_s10_c26_l2",
        "original": "si vegga in voi regnar.",
        "literal": "may be seen to reign in you.",
        "tokens": [
            {"word": "si", "lemma": "si", "pos": "particle", "meaning": "oneself / let"},
            {"word": "vegga", "lemma": "vedere", "pos": "verb", "meaning": "may be seen / see (subjunctive)"},
            {"word": "in", "lemma": "in", "pos": "preposition", "meaning": "in"},
            {"word": "voi", "lemma": "voi", "pos": "pronoun", "meaning": "you (plural)"},
            {"word": "regnar.", "lemma": "regnare", "pos": "verb", "meaning": "to reign / rule"}
        ]
    },
    "src/data/cosiFanTutte/act2.ts": {
        "id": "a2_s18_c34_l8",
        "original": "Bella calma proverà.",
        "literal": "Will experience beautiful calm.",
        "tokens": [
            {"word": "Bella", "lemma": "bello", "pos": "adjective", "meaning": "beautiful / fair"},
            {"word": "calma", "lemma": "calma", "pos": "noun", "meaning": "calm / serenity"},
            {"word": "proverà.", "lemma": "provare", "pos": "verb", "meaning": "will experience / will feel (3rd sg. future)"}
        ]
    },
    "src/data/donGiovanni/act2.ts": {
        "id": "a2_s20_c16_l3",
        "original": "Alla vita è sempre ugual.",
        "literal": "To life is always the same.",
        "tokens": [
            {"word": "Alla", "lemma": "al", "pos": "preposition", "meaning": "to the"},
            {"word": "vita", "lemma": "vita", "pos": "noun", "meaning": "life"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "sempre", "lemma": "sempre", "pos": "adverb", "meaning": "always"},
            {"word": "ugual.", "lemma": "uguale", "pos": "adjective", "meaning": "equal / identical / the same"}
        ]
    },
    "src/data/donPasquale/act3.ts": {
        "id": "a3_s8_c21_l4",
        "original": "lunga più di noi la sa.",
        "literal": "knows far more about it than we do.",
        "tokens": [
            {"word": "lunga", "lemma": "lungo", "pos": "adjective", "meaning": "long / far"},
            {"word": "più", "lemma": "più", "pos": "adverb", "meaning": "more"},
            {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "than / of"},
            {"word": "noi", "lemma": "noi", "pos": "pronoun", "meaning": "us / we"},
            {"word": "la", "lemma": "la", "pos": "pronoun", "meaning": "it"},
            {"word": "sa.", "lemma": "sapere", "pos": "verb", "meaning": "knows (3rd sg. pres.)"}
        ]
    },
    "src/data/faust/act5.ts": {
        "id": "a5_s3_c48_l9",
        "original": "Christ est ressuscité!",
        "literal": "Christ is risen!",
        "tokens": [
            {"word": "Christ", "lemma": "Christ", "pos": "noun", "meaning": "Christ"},
            {"word": "est", "lemma": "être", "pos": "verb", "meaning": "is (3rd sg. pres.)"},
            {"word": "ressuscité!", "lemma": "ressusciter", "pos": "verb", "meaning": "risen / resurrected"}
        ]
    },
    "src/data/ilTrovatore/act4.ts": {
        "id": "a4_s4_c47_l1",
        "original": "E vivo ancor!",
        "literal": "And he is still alive!",
        "tokens": [
            {"word": "E", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "vivo", "lemma": "vivo", "pos": "adjective", "meaning": "alive / living"},
            {"word": "ancor!", "lemma": "ancora", "pos": "adverb", "meaning": "still / yet"}
        ]
    },
    "src/data/laTraviata/act3.ts": {
        "id": "a3_s6_c41_l1",
        "original": "Oh mio dolor!",
        "literal": "Oh my grief!",
        "tokens": [
            {"word": "Oh", "lemma": "oh", "pos": "interjection", "meaning": "oh"},
            {"word": "mio", "lemma": "mio", "pos": "adjective", "meaning": "my"},
            {"word": "dolor!", "lemma": "dolore", "pos": "noun", "meaning": "grief / sorrow / pain"}
        ]
    },
    "src/data/madamaButterfly/act3.ts": {
        "id": "a3_s5_c2_l2",
        "original": "<i>La porta di destra è violentemente aperta. Pinkerton e Sharpless si precipitano nella stanza, accorrendo presso Butterfly che con debole gesto indica il bambino e muore. Pinkerton si inginocchia, mentre Sharpless prende il bimbo e lo bacia singhiozzando.</i>",
        "literal": "The right door is violently pushed open. Pinkerton and Sharpless rush into the room, running to Butterfly who with a faint gesture points to the child and dies. Pinkerton kneels, while Sharpless takes the child and kisses him weeping.",
        "tokens": [
            {"word": "<i>La", "lemma": "la", "pos": "noun", "meaning": "the"},
            {"word": "porta", "lemma": "porta", "pos": "noun", "meaning": "door"},
            {"word": "di", "lemma": "di", "pos": "preposition", "meaning": "of"},
            {"word": "destra", "lemma": "destra", "pos": "noun", "meaning": "right"},
            {"word": "è", "lemma": "essere", "pos": "verb", "meaning": "is"},
            {"word": "aperta.", "lemma": "aprire", "pos": "verb", "meaning": "opened"},
            {"word": "Pinkerton", "lemma": "Pinkerton", "pos": "noun", "meaning": "Pinkerton"},
            {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "Sharpless", "lemma": "Sharpless", "pos": "noun", "meaning": "Sharpless"},
            {"word": "muore.</i>", "lemma": "morire", "pos": "verb", "meaning": "dies"}
        ]
    },
    "src/data/norma/act2.ts": {
        "id": "a2_s11_c58_l4",
        "original": "<i>Pollione e Norma sono trascinati al rogo.</i>",
        "literal": "Pollione and Norma are dragged to the pyre.",
        "tokens": [
            {"word": "<i>Pollione", "lemma": "Pollione", "pos": "noun", "meaning": "Pollione"},
            {"word": "e", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "Norma", "lemma": "Norma", "pos": "noun", "meaning": "Norma"},
            {"word": "sono", "lemma": "essere", "pos": "verb", "meaning": "are"},
            {"word": "trascinati", "lemma": "trascinare", "pos": "verb", "meaning": "dragged"},
            {"word": "al", "lemma": "al", "pos": "preposition", "meaning": "to the"},
            {"word": "rogo.</i>", "lemma": "rogo", "pos": "noun", "meaning": "pyre / stake"}
        ]
    },
    "src/data/nozzeDiFigaro/act4.ts": {
        "id": "a4_s14_c34_l10",
        "original": "corriam tutti a festeggiar!",
        "literal": "let us all run to celebrate!",
        "tokens": [
            {"word": "corriam", "lemma": "correre", "pos": "verb", "meaning": "let us run (1st pl. hortatory)"},
            {"word": "tutti", "lemma": "tutto", "pos": "pronoun", "meaning": "all / everyone"},
            {"word": "a", "lemma": "a", "pos": "preposition", "meaning": "to"},
            {"word": "festeggiar!", "lemma": "festeggiare", "pos": "verb", "meaning": "to celebrate"}
        ]
    },
    "src/data/tosca/act3.ts": {
        "id": "a3_s4_c21_l3",
        "original": "<i>Sciarrone ed alcuni soldati, saliti confusamente, corrono al parapetto e guardano giù. Spoletta rimane esterrefatto, allibito.</i>",
        "literal": "Sciarrone and some soldiers, having rushed up in confusion, run to the parapet and look down. Spoletta remains dumbfounded, aghast.",
        "tokens": [
            {"word": "<i>Sciarrone", "lemma": "Sciarrone", "pos": "noun", "meaning": "Sciarrone"},
            {"word": "ed", "lemma": "e", "pos": "conjunction", "meaning": "and"},
            {"word": "alcuni", "lemma": "alcuno", "pos": "adjective", "meaning": "some / several"},
            {"word": "soldati", "lemma": "soldato", "pos": "noun", "meaning": "soldiers"},
            {"word": "corrono", "lemma": "correre", "pos": "verb", "meaning": "run"},
            {"word": "al", "lemma": "al", "pos": "preposition", "meaning": "to the"},
            {"word": "parapetto", "lemma": "parapetto", "pos": "noun", "meaning": "parapet"},
            {"word": "Spoletta", "lemma": "Spoletta", "pos": "noun", "meaning": "Spoletta"},
            {"word": "allibito.</i>", "lemma": "allibito", "pos": "adjective", "meaning": "aghast / stunned"}
        ]
    }
}

def main():
    for fpath, data in CLEAN_FINAL_LINES.items():
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        line_id = data["id"]
        target_marker = f'\"id\": \"{line_id}\"'
        idx = content.find(target_marker)
        if idx == -1:
            print(f"Error in {fpath}: target {target_marker} not found")
            continue

        line_start = content.rfind("            {", 0, idx)

        clean_line_json = json.dumps(data, indent=2, ensure_ascii=False)
        indented_lines = ["            " + l for l in clean_line_json.split("\n")]
        clean_line_str = "\n".join(indented_lines)

        act_tail = clean_line_str + """
          ]
        }
      ]
    }
  ]
};
"""
        new_content = content[:line_start] + act_tail
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Cleaned {fpath} successfully.")

if __name__ == "__main__":
    main()

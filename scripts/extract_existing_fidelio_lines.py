import re

with open('src/data/fidelio/act1.ts') as f:
    t1 = f.read()
with open('src/data/fidelio/act2.ts') as f:
    t2 = f.read()

# Extract lines: original, literal, tokens
# Let's see what matches we can pull
pattern = re.compile(r"original:\s*'([^']+)',\s*literal:\s*'([^']+)'", re.DOTALL)
m1 = pattern.findall(t1)
m2 = pattern.findall(t2)
print(f"Existing act 1 pairs: {len(m1)}")
print(f"Existing act 2 pairs: {len(m2)}")
for orig, lit in (m1 + m2)[:10]:
    print(f"  {orig} -> {lit}")

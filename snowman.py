import re

start = 1
end = 100000
s = ""

regex = re.compile(r"8")

for i in range(start, end + 1):
    s += regex.sub("SNOWMAN", str(i))
    if i < end:
        s += "-"

print(s[800000:800030])

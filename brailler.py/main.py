from brailler.convert import convert_to_braille
from brailler.convert import convert_to_lang

fromfile = open("sample_article.txt", "r")
string1 = fromfile.read()

print(string1)

string1 = convert_to_braille(string1)
string2 = convert_to_lang(string1)

with open("output.txt", "a") as out:
    out.write(string1 + " - " + string2 + "\n")

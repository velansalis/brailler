import json
from collections import OrderedDict

with open("hindi-braille-mapping.json") as j:
    data = json.load(j, object_pairs_hook=OrderedDict)[0]


def convert_to_braille(word, write=False):
    if write:
        f = open("hindi-to-braille-text.txt", "a")
        f.write("Hindi Sentence : " + word + "\n")
        f.write("Braille Sentence : ")
    for i in list(word):
        if write:
            f.write(data[i][0])
    f.write("\n")
    f.flush()
    f.close()
    print()


def convert_to_hindi(word, write=False):
    string = ""
    if write:
        f = open("braille-to-hindi-text.txt", "a")
        f.write("Braille Sentence : " + word + "\n")
        f.write("Hindi Sentence : ")
    for i in word:
        wordlist = []
        for hindi, braille in data.items():
            if not isinstance(braille, str) and braille[0] == i:
                wordlist.append(hindi)
        if len(string) != 0 and len(wordlist) > 1:
            string += wordlist[1]
        else:
            string += wordlist[0]
    if write:
        f.write(string + "\n")
        f.flush()
        f.close()

#convert_to_braille("अनुच्छेद सभी मनुष्यों को गौरव ौर अधिकारों के मामले में जन्मजात स्वतन्त्रता ौर समानता प्राप्त हैं", True)
#convert_to_hindi("⠁⠝⠥⠉⠈⠡⠑⠙⠀⠼⠁⠀⠎⠘⠔⠀⠍⠝⠥⠯⠈⠽⠕⠰⠀⠅⠕⠀⠛⠪⠗⠧⠀⠪⠗⠀⠁⠮⠊⠅⠜⠗⠕⠰⠀⠅⠑⠀⠍⠜⠍⠇⠑⠀⠍⠑⠰⠀⠚⠝⠈⠍⠚⠜⠞⠀⠎⠈⠧⠞⠝⠈⠞⠈⠗⠞⠜⠀⠪⠗⠀⠎⠍⠜⠝⠞⠜⠀⠏⠈⠗⠜⠏⠈⠞⠀⠓⠌⠰", True)

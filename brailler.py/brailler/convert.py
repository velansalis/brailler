import json
from collections import OrderedDict
from brailler.loadjson import get_json


def get_ascii(lang="hin"):
    '''
        This function returns a range of ascii values of characters
        in the form of a dictionary for reference
    '''
    hin_range = (2304, 2304+127)
    hin_b_range = (10241, 10241+127)

    if lang == "hin":
        current = hin_range
    elif lang == "hin_b":
        current = hin_b_range

    range_dictionary = {}

    for i in range(current[0], current[1]):
        range_dictionary[i] = chr(i)
    return range_dictionary


def convert_to_braille(word, lang="hin"):
    '''
        This function gets a string of given string and converts it to braille.
    '''
    data = get_json(lang)
    brailleText = ""
    for splitwords in word.split(" "):
        for character in splitwords:
            try:
                brailleText += data[character][0]
            except:
                continue
        brailleText += " "
    return brailleText


def convert_to_lang(word, lang="hin"):
    '''
        This function gets a string of braille and converts it to given language.
    '''
    data = get_json(lang)
    languageText = ""
    for splitwords in word.split(" "):
        string = ""
        if len(splitwords) == 2 and splitwords[0] == "⠼":
            for hindi, braille in data.items():
                if len(braille) > 0 and splitwords == braille[0]:
                    string += hindi
        else:
            for character in splitwords:
                wordlist = []
                for hindi, braille in data.items():
                    if not isinstance(braille, str) and braille[0] == character:
                        wordlist.append(hindi)
                if len(string) == 0 or len(wordlist) == 1:
                    string += wordlist[0]
                else:
                    string += wordlist[1]
        string += " "
        languageText += string
    return languageText

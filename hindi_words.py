# Built in JSON package to convert the data
import json

# Loading the JSON Data of the Mappings to a dictionary
with open("hindi-to-braille.json") as j:
    data = json.load(j)[0]


def convert_to_braille(word, write=False):
    if write:
        f = open("braille-text.txt", "a")
        f.write("Hindi Sentence : " + word + "\n")
        f.write("Braille Sentence : ")
    # Printing the actual word
    print("\n" + word + "-", end=" ")
    # Loop over the word and find the braille equivalent
    for i in list(word):
        if write:
            f.write(data[i][0])
        print(data[i][0], end=" ")
    f.write("\n")
    f.flush()
    f.close()
    # One line to end this up
    print()


# Word that needs to be converted.
# Pass true as second parameter if you want the output in a file
convert_to_braille(
    "अनुच्छेद १ सभी मनुष्यों को गौरव और अधिकारों के मामले में जन्मजात स्वतन्त्रता और समानता प्राप्त हैं", True)

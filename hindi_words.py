# Built in JSON package to convert the data
import json

# Word that needs to be converted
word1 = "अनुच्छेद १"

# Loading the JSON Data of the Mappings
with open("hindi-to-braille.json") as j:
    data = json.load(j)[0]

# Printing the actual word
print()
print(word1 + "-", end=" ")

# Loop over the word and find the braille equivalent
for i in list(word1):
    print(data[i][0], end=" ")

# One line to end this up
print(end="\n")

# Hindi - Braille Converter

This is a Hindi to Braille converter implemented both in Python and Javascript for the web. This Repository consists of the JSON mappings of Hindi devanagari characters with Braille unicode characters which consists of Number mappings according to Bharathi Braille standards.

## Demo

[Click here for the Demo](https://velansalis.github.io/hindi-braille/)

## Contents

- **\_data** - Consists of `hindi_words.py` that consists of two functions `convert_to_braille(<string>,<write-to-file?>)` which takes a Hindi string as an argument and converts it into braille character. And `convert_to_hindi(<string>,<write-to-file?>)` which takes a braille string as an argument and converts it into Hindi character. `<write-to-file?>` is defaulted to `False`. If it's true, a file will be created and the output is written to the file. Folder also consists of Hindi to Braille mapped JSON file.
- **\_scratch** - This folder consists of `braille_generator.py` that creates a file and prints the ASCII equivalents of the braille unicode characters. And also `hindi_generator.py` that prints ASCII equivalents of the hindi unicode characters.
- **docs** - This folder consists of the implementation of the code in javascript. The running demo can be found [here](https://velansalis.github.io/hindi-braille/)

f = open("braille_unicode.txt", "w")

for i in range(10241, 10241+127):
    print(i, " - ", chr(i))
    f.write(str(i) + " - ")
    f.write(chr(i))
    f.write("\n")

f.close()

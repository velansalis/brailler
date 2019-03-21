f = open("hindi_unicode_beta.txt", "w")

for i in range(2304, 2304+127):
    print(str(i) + " - " + chr(i))
    f.write(str(i) + " - ")
    f.write(chr(i))
    f.write("\n")

f.close()

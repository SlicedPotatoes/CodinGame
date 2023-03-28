keyASCII = []
ASCII = []
l = int(input())
h = int(input())
t = input().upper()
for i in range(h):
    ASCII.append(input())
for i in range(27):
    temp = {"key": i, "ascii": []}
    for j in range(h):
        d = i * l
        f = d + l
        temp['ascii'].append(ASCII[j][d:f])
    keyASCII.append(temp)
for i in range(h):
    line = [""] * len(t)
    for j in range(len(t)):
        value = ord(t[j]) - ord('A')
        if not (0 <= value <= 25):
            value = 26
        line[j] = keyASCII[value]['ascii'][i]
    print("".join(line))

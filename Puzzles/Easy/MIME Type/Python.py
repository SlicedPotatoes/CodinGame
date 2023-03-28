n = int(input())
q = int(input())
extMT = []


def getMT(ext):
    for i in extMT:
        if i["ext"] == ext:
            return i['mt']
    return "UNKNOWN"


for i in range(n):
    ext, mt = input().split()
    extMT.append({"ext": ext.upper(), "mt": mt})
for i in range(q):
    fname = input()
    fsplit = fname.split('.')
    if len(fsplit) > 1:
        print(getMT(fsplit[len(fsplit) - 1].upper()))
    else:
        print('UNKNOWN')

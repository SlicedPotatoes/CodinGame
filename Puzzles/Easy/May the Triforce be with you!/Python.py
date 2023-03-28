n = int(input())
for i in range(n):
    line = ""
    if i == 0:
        line = "."
        for a in range(n*2-2):
            line += " "
        line += "*"
    else:
        for a in range(n*2-i-1):
            line += " "
        for a in range(i*2+1):
            line += "*"
    print(line)
for i in range(n):
    line = ""
    for a in range(n-i-1):
        line += " "
    for a in range(i*2+1):
        line += "*"
    for a in range(n*2-(1+(i*2))):
        line += " "
    for a in range(i*2+1):
        line += "*"
    print(line)

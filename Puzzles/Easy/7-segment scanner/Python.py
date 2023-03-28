line1 = input()
line2 = input()
line3 = input()
answer = []
for i in range(len(line1) // 3):
    l1 = line1[i*3:i*3+3]
    l2 = line2[i*3:i*3+3]
    l3 = line3[i*3:i*3+3]
    if l1 != ' _ ':
        if l2 == '  |':
            answer.append("1")
        else:
            answer.append("4")
    elif l3 == '|_|':
        if l2 == '| |':
            answer.append("0")
        elif l2 == '|_ ':
            answer.append("6")
        else:
            answer.append("8")
    elif l2 == ' _|':
        if l3 == '|_ ':
            answer.append("2")
        else:
            answer.append("3")
    elif l3 == ' _|':
        if l2 == '|_|':
            answer.append("9")
        else:
            answer.append("5")
    else:
        answer.append("7")
print("".join(answer))

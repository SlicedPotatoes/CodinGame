arr = []
for i in range(6):
    arr.append(list(input()))
treeNeedCut = 0
countFire = 0
countNotTreeFire = 0
for i in range(6):
    for j in range(6):
        if arr[i][j] == '*':
            countFire += 1
            arrayPos = [
                [i - 2, j - 2], [i - 2, j - 1], [i - 2,
                                                 j], [i - 2, j + 1], [i - 2, j + 2],
                [i - 1, j - 2], [i - 1, j - 1], [i - 1,
                                                 j], [i - 1, j + 1], [i - 1, j + 2],
                [i, j - 2], [i, j - 1], [i, j + 1], [i, j + 2],
                [i + 1, j - 2], [i + 1, j - 1], [i + 1,
                                                 j], [i + 1, j + 1], [i + 1, j + 2],
                [i + 2, j - 2], [i + 2, j - 1], [i + 2,
                                                 j], [i + 2, j + 1], [i + 2, j + 2]
            ]
            for pos in arrayPos:
                if 0 <= pos[0] < 6 and 0 <= pos[1] < 6:
                    if arr[pos[0]][pos[1]] == "#":
                        treeNeedCut += 1
                        arr[pos[0]][pos[1]] = treeNeedCut
        elif arr[i][j] == "=" or arr[i][j] == 'o':
            countNotTreeFire += 1
if countFire == 0:
    print("RELAX")
elif countFire+treeNeedCut+countNotTreeFire == 36 or treeNeedCut == 0:
    print("JUST RUN")
else:
    print(treeNeedCut)

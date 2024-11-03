# Portage du code C++ vers Python car "No More Pythons" :3

import sys

sys.setrecursionlimit(80 * 80)

dy:list = [0, 1, 0, -1]
dx:list = [1, 0, -1, 0]
dn:list = ['-', '|', '-', '|']
tail:list = ['>', 'v', '<', '^']

def dfs(map:list, y:int, x:int)->int:
    curr:str = map[y][x]
    map[y][x] = '.'

    if(curr == 'v' or curr == '<' or curr == '>' or curr == '^'):
        return 1

    d:int = 0

    while(d < 4):
        _y:int = y + dy[d]
        _x:int = x + dx[d]

        if(not (_y >= 0 and _y < len(map) and _x >= 0 and _x < len(map[0]) )):
            d += 1
            continue
        
        next:str = map[_y][_x]

        if( (curr == '*' or curr == 'o') and next == dn[d] ):
            return dfs(map, _y, _x) + 1
        if(curr == dn[d] and ( next == dn[d] or next == '*' or next == 'o' or next == tail[d] )):
            return dfs(map, _y, _x) + 1

        d += 1

    return -1

n:int
m:int

n, m = [int(i) for i in input().split()]

map:list = []

for i in range(n):
    t:str = input()
    line:list = []

    for j in range(m):
        line.append(t[j])
    
    map.append(line)

maxSize:int = 0
count:int = 0

i:int = 0

while(i < n):
    j:int = 0
    while(j < m):
        if(map[i][j] == 'o'):
            result:int = dfs(map, i, j)

            if(result > maxSize):
                maxSize = result
                count = 1
            elif(result == maxSize):
                count += 1
        
        j += 1
    i += 1

print(maxSize, '\n', count, sep="")
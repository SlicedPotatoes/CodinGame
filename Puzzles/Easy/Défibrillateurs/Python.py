import sys
import math


def toFloat(nb):
    return float(nb.replace(',', '.'))


lon = toFloat(input())
lat = toFloat(input())
n = int(input())
distance = sys.maxsize
answer = ""
for i in range(n):
    defib = input()
    temp = defib.split(';')
    x = (lon - toFloat(temp[4])) * math.cos((toFloat(temp[5]) + lat) / 2)
    y = lat - toFloat(temp[5])
    d = math.sqrt(x ** 2 + y ** 2) * 6372
    if d < distance:
        distance = d
        answer = temp[1]
print(answer)

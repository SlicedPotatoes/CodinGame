import sys


def sign(nb):
    return nb == abs(nb)


n = int(input())
answer = 5526
for i in input().split():
    t = int(i)
    if abs(t) < abs(answer):
        answer = t
    if abs(t) == abs(answer):
        if sign(t) == True:
            answer = t
if n == 0:
    answer = 0
print(answer)

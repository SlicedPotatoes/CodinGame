import sys
import math

w, h = [int(i) for i in input().split()]
arr = []
entree = []
for i in range(h):
    arr.append(input())
for i in range(w):
    if arr[0][i] != " ":
        entree.append(arr[0][i])
for i in range(len(entree)):
    index = -1
    for j in range(w):
        if arr[0][j] == entree[i]:
            index = j
    for j in range(h):
        indexChanged = False
        if index-1 > 0 and arr[j][index-1] == '-':
            index -= 3
            indexChanged = True
        if index+1 < w and not (indexChanged) and arr[j][index+1] == '-':
            index += 3
        if j == h-1:
            print("{}{}".format(entree[i], arr[j][index]))

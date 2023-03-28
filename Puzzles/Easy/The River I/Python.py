def next(a):
    _a = str(a)
    for i in range(len(_a)):
        a += int(_a[i])
    return a


r_1 = int(input())
r_2 = int(input())
while r_1 != r_2:
    if r_1 < r_2:
        r_1 = next(r_1)
    else:
        r_2 = next(r_2)
print(r_1)

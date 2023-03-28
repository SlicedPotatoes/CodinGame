n = int(input())
array = []
for i in range(n):
    pi = int(input())
    array.append(pi)
array.sort()
diff = 100000
for i in range(n-1):
    if abs(array[i] - array[i+1]) < diff:
        diff = abs(array[i] - array[i+1])
print(diff)

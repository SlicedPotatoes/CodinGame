N = tonumber(io.read())
array = {}
for i=1,N do
    array[i] = tonumber(io.read())
end
table.sort(array)
minDiff = 10000000

for i=2, N do
    diff = array[i] - array[i-1]
    if diff < minDiff then
        minDiff = diff
    end
end

print(minDiff)
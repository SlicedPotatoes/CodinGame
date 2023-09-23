n = tonumber(io.read())
next_token = string.gmatch(io.read(), "[^%s]+")
minAbs = 5526
minValue = 5526
for i=0,n-1 do
    t = tonumber(next_token())
    if math.abs(t) < minAbs then
        minAbs = math.abs(t)
        minValue = t
    elseif math.abs(t) == minAbs and t > 0 then
        minValue = t
    end
end

if n == 0 then
    print(0)
else
    print(minValue)
end
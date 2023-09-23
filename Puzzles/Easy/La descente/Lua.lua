while true do
  max = -1
  index = -1
  for i=0,8-1 do
      mountainH = tonumber(io.read())
      if mountainH > max then
          max = mountainH
          index = i
      end
  end
  print(index)
end
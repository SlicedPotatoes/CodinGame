get_absolute_value() {
  if [ $1 -lt 0 ]; then
    abs_value=$((-$1))
  else
    abs_value=$1
  fi
}

read -r n
read -r -a myArray

minAbs=5526
minValue=5526

for (( i=0; i<$n; i++ )); do
    t=${myArray[$i]}
    get_absolute_value $t
    if [ $abs_value -lt $minAbs ]; then
        minAbs=$abs_value
        minValue=$t
    elif [ $abs_value -eq $minAbs ] && [ $t -gt 0 ]; then
        minValue=$t
    fi
done

if [ $n -eq 0 ]; then
    echo 0
else
    echo $minValue
fi
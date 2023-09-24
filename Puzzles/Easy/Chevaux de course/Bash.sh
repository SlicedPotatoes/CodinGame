get_absolute_value() {
  if [ $1 -lt 0 ]; then
    abs_value=$((-$1))
  else
    abs_value=$1
  fi
}

read -r N
array=()
min_diff=10000000

for (( i=0; i<$N; i++ )); do
    read Pi
    array+=($Pi)
done

IFS=$'\n' sortedArray=($(sort -n <<<"${array[*]}"))
unset IFS

for ((i = 1; i < ${#sortedArray[@]}; i++)); do
    diff=$((sortedArray[i] - sortedArray[i - 1]))
    get_absolute_value $diff
    if [ $abs_value -lt $min_diff ]; then
        min_diff=$abs_value
    fi
done

echo $min_diff
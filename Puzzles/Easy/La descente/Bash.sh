while true; do
    max=-1
    index=-1
    for (( i=0; i<8; i++ )); do
        read -r mountainH
        if [ $mountainH -gt $max ]; then
            max=$mountainH
            index=$i
        fi
    done
    echo $index
done
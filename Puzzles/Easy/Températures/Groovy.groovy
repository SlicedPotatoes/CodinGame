input = new Scanner(System.in);

n = input.nextInt()
minAbs = 5526
minValue = 5526
for (i = 0; i < n; ++i) {
    t = input.nextInt() 
    if(Math.abs(t) < minAbs){
        minAbs = Math.abs(t)
        minValue = t
    }
    else if (Math.abs(t) == minAbs && t > 0){
        minValue = t
    }
}

println n == 0 ? 0 : minValue
input = new Scanner(System.in)
while (true) {
    max = -1
    index = -1
    for (i = 0; i < 8; ++i) {
        mountainH = input.nextInt()
        if(mountainH > max){
            max = mountainH
            index = i
        }
    }
    println index
}
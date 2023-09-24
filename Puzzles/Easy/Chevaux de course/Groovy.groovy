input = new Scanner(System.in);

N = input.nextInt()
int[] array = new int[N]
for (i = 0; i < N; i++) {
    array[i] = input.nextInt()
}

Arrays.sort(array)

minDiff = 10000000

for(i = 1; i < N; i++){
    diff = array[i] - array[i-1]
    if(diff < minDiff){
        minDiff = diff
    }
}

println minDiff
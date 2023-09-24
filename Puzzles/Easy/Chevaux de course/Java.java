import java.util.*;
class Solution {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        int[] array = new int[N];
        for (int i = 0; i < N; i++) {
            int pi = in.nextInt();
            array[i] = pi;
        }
        Arrays.sort(array);
        int diff = 10000000;
        for(int i = 0; i < array.length - 1; i++){
            int abs = Math.abs(array[i] - array[i+1]);
            if(abs < diff){
                diff = abs;
            }
        }
        System.out.println(diff);
    }
}
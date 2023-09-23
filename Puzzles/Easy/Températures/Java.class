import java.util.*;

class Solution {
    
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] temp = new int[n];
        for (int i = 0; i < n; i++) {
            int t = in.nextInt();
            temp[i] = t;
        }
        in.close();
        int abs = 5526;
        int value = 5526;
        for(int i = 0; i < n; i++) {
            int _abs = Math.abs(temp[i]);
            if(_abs < abs){
                abs = _abs;
                value = temp[i];
            }
            else if(_abs == abs && temp[i] > 0){
                value = temp[i];
            }
        }

        System.out.println(n == 0 ? 0 : value);
    }
}
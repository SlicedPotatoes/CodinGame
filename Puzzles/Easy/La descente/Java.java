import java.util.*;
import java.io.*;
import java.math.*;

class Player {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        while (true) {
            int max = -1;
            int index = -1;
            for (int i = 0; i < 8; i++) {
                int mountainH = in.nextInt();
                if(mountainH > max){
                    max = mountainH;
                    index = i;
                }
            }
            System.out.println(index);
        }
    }
}
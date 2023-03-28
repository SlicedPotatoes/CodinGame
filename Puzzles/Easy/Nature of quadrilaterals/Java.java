import java.util.*;
import java.io.*;
import java.math.*;

class Solution {

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        String s = "";
        int n = in.nextInt();
        for (int i = 0; i < n; i++) {
            String A = in.next();
            int xA = in.nextInt();
            int yA = in.nextInt();
            String B = in.next();
            int xB = in.nextInt();
            int yB = in.nextInt();
            String C = in.next();
            int xC = in.nextInt();
            int yC = in.nextInt();
            String D = in.next();
            int xD = in.nextInt();
            int yD = in.nextInt();
            
            if (tailleSegment(xA,yA,xC,yC) != tailleSegment(xB,yB,xD,yD) && tailleSegment(xA,yA,xB,yB) != tailleSegment(xB,yB,xC,yC) && tailleSegment(xA,yA,xD,yD) == tailleSegment(xB,yB,xC,yC)){
                s = "parallelogram.";
            }
            else if (tailleSegment(xA,yA,xB,yB) == tailleSegment(xB,yB,xC,yC) && tailleSegment(xC,yC,xD,yD) == tailleSegment(xD,yD,xA,yA) && tailleSegment(xD,yD,xA,yA) == tailleSegment(xA,yA,xB,yB)){
                if (tailleSegment(xA,yA,xC,yC) == tailleSegment(xB,yB,xD,yD)){
                    s = "square.";
                } else { s = "rhombus."; }
            }
            else if (tailleSegment(xA,yA,xD,yD) == tailleSegment(xB,yB,xC,yC) && tailleSegment(xA,yA,xB,yB) == tailleSegment(xD,yD,xC,yC)){
                s = "rectangle.";
            }
            else{
                s = "quadrilateral.";
            }
            System.out.println(A+B+C+D+" is a " + s);
        }
        
    }
    
    public static double tailleSegment(int x1, int y1, int x2, int y2){
        int AB = Math.abs(x1 - x2);
        int AC = Math.abs(y1 - y2);
        double BC = Math.sqrt(Math.pow(AB,2) + Math.pow(AC,2));
        return BC;
    }
}
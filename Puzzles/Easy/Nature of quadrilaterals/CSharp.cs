using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;

class Solution
{
    static void Main(string[] args)
    {
        string s = "";
        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            string[] inputs = Console.ReadLine().Split(' ');
            string A = inputs[0];
            int xA = int.Parse(inputs[1]);
            int yA = int.Parse(inputs[2]);
            string B = inputs[3];
            int xB = int.Parse(inputs[4]);
            int yB = int.Parse(inputs[5]);
            string C = inputs[6];
            int xC = int.Parse(inputs[7]);
            int yC = int.Parse(inputs[8]);
            string D = inputs[9];
            int xD = int.Parse(inputs[10]);
            int yD = int.Parse(inputs[11]);
            
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
            //Console.WriteLine(tailleSegment(xA, yA, xB, yB));
            Console.WriteLine(A+B+C+D+" is a " + s);
        }

    }
    
    static int tailleSegment(int x1, int y1, int x2, int y2){
        int AB = Math.Abs(x1 - x2);
        int AC = Math.Abs(y1 - y2);
        double BC = Math.Sqrt(Math.Pow(AB,2) + Math.Pow(AC,2));
        return Convert.ToInt32(BC);
    }
}
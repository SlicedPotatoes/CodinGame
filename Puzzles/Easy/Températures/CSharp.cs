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
        int n = int.Parse(Console.ReadLine()); // the number of temperatures to analyse
        string[] inputs = Console.ReadLine().Split(' ');
        string[] x = new string[2];
        x[0] = "5527";
        int valeur = 0;
        for (int i = 0; i < n; i++)
        {
            int t = int.Parse(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
            Console.Error.WriteLine(t);
            if (t < 0) { valeur = -t; } else { valeur = t; }
            if (Convert.ToInt32(x[0]) > valeur) {
                x[0] = valeur.ToString();
                x[1] = t.ToString();
            } else if (Convert.ToInt32(x[0]) == valeur) {
                if (t > 0) {
                    x[0] = valeur.ToString();
                    x[1] = t.ToString();
                }   
            }
            
        }
        if (n == 0) { x[1] = "0"; }
        Console.WriteLine(x[1]);
    }
}
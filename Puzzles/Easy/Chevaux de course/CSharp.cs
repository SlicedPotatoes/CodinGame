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
        int N = int.Parse(Console.ReadLine());
        int[] puissance = new int[N];
        Console.Error.WriteLine("N: " + N);
        for (int i = 0; i < N; i++)
        {
            int pi = int.Parse(Console.ReadLine());
            puissance[i] = pi;
            Console.Error.WriteLine("Puissance["+i+"]: " + puissance[i]);
        }
        puissance = puissance.OrderByDescending(n => n).ToArray();
        int difference = 10000000;
        for (int i = 0; i < N-1; i++){
            if (puissance[i] - puissance[i + 1] < difference) {
                difference = puissance[i] - puissance[i + 1];    
            } 
        }

        Console.WriteLine(difference);
    }
}
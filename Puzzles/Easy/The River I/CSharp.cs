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
        long r1 = long.Parse(Console.ReadLine());
        long r2 = long.Parse(Console.ReadLine());
        while(!(r1 == r2)){
            if (r1 < r2){
                r1 = increment(r1);
            } else {
                r2 = increment(r2);
            }
        }
        Console.WriteLine(r1);
    }
    
    static long increment(long r){
        string s = r.ToString();
        int n = 0;
        for (int i = 0; i < s.Length; i++){
            n = n + Convert.ToInt32("0" + s[i]);
        }
        return r + n;
    }
}
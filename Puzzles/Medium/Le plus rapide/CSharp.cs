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
        string[,] temps = new string[N,3];
        
        for (int i = 0; i < N; i++)
        {
            string t = Console.ReadLine();
            temps[i,0] = t.Substring(0,2);
            temps[i,1] = t.Substring(3,2);
            temps[i,2] = t.Substring(6,2);
        }
       

        Console.WriteLine(s(temps, N));
    }
    
    static string s(string[,] temps, int N){
        int Hpp = 24;
        int Mpp = 60;
        int Spp = 60;
        int indice = 0;
        for (int i = 0; i < N; i++){
            if (Convert.ToInt32(temps[i, 0]) < Hpp) {
                Hpp = Convert.ToInt32(temps[i, 0]);
            }
        }
        
        for (int i = 0; i < N; i++)
        {
            if (Convert.ToInt32(temps[i, 1]) < Mpp && Convert.ToInt32(temps[i, 0]) == Hpp){
                Mpp = Convert.ToInt32(temps[i, 1]);
            }
        }
        
        for (int i = 0; i < N; i++){
            if (Convert.ToInt32(temps[i, 2]) < Spp && Convert.ToInt32(temps[i, 0]) == Hpp && Convert.ToInt32(temps[i, 1]) == Mpp){
                Spp = Convert.ToInt32(temps[i, 2]);
                indice = i;
            }
        }
        
        return temps[indice, 0] + ":" + temps[indice, 1] + ":" + temps[indice, 2];
    }
}
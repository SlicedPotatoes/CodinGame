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
        int n = int.Parse(Console.ReadLine());
        string[] inputs = Console.ReadLine().Split(' ');
        int[] tab = new int[n];
        for (int i = 0; i < n; i++)
        {
            int x = int.Parse(inputs[i]);
            tab[i] = x;
        }

        int s = nbMinimDop(tab);
        Console.WriteLine(s);
    }
    
    static int nbDeUn(int[] tab){
        int compteur = 0;
        for (int i = 0; i < tab.Length; i++){
            if(tab[i] == 1){
                compteur++;
            }
        }
        return compteur;
    }
    
    static int nbMinimDop(int[] tab){
        int compteur = 0;
        int n = nbDeUn(tab);
        for (int i = 0; i < n; i++){
            if(tab[i] == 0){
                compteur++;
            }
        }
        return compteur;
    }
}
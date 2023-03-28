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
        int Y = int.Parse(Console.ReadLine());
        Cage[] tab = new Cage[N];
        for (int i = 0; i < N; i++)
        {
            string[] inputs = Console.ReadLine().Split(' ');
            int S = int.Parse(inputs[0]);
            int H = int.Parse(inputs[1]);
            int A = int.Parse(inputs[2]);
            tab[i] = new Cage(S, H, A);
        }
        long vivant = 0;
        for (int i = 0; i < Y; i++){
            vivant = 0;
            for (int j = 0; j < N; j++){
                vivant = vivant + tab[j].nbVivant(i+1);
            }
            if (vivant != 0) { Console.WriteLine(vivant); }
            else { Console.WriteLine("0"); break;}
        }
    }
}

class Cage
{
    public int sick;
    public int healthy;
    public int total;
    
    public Cage(int sick, int healthy, int total){
        this.sick = sick;
        this.healthy = healthy;
        this.total = total;
    }
    
    public long nbVivant(int annee){
        long j = this.total;
        long k = this.sick;
        for (int i = 0; i < annee; i++){
            j = j - k;
            k = k*2;
        }
        if (j > 0) { return j; }
        else { return 0; }
    }
}
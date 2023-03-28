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
        string[] inputs = Console.ReadLine().Split(' ');
        int width = int.Parse(inputs[0]);
        int height = int.Parse(inputs[1]);
        char[,] grille = new char[height, width];
        for (int i = 0; i < height; i++)
        {
            string line = Console.ReadLine();
            for (int j = 0; j < width; j++){
                grille[i, j] = line[j];
            }
        }
        bool fin = false;
        while(!fin)
        {
            fin = true;
            for (int i = 0; i < height; i++){
                for (int j = 0; j < width; j++){
                    if (grille[i, j] == '#' && i+1 < height){
                        if (grille[i+1, j] == '.'){
                            grille[i+1, j] = '#';
                            grille[i, j] = '.';
                            fin = false;
                        }
                    }
                }
            } 
        }
        for (int i = 0; i < height; i++){
            string s = "";
            for (int j = 0; j < width; j++){
                s = s + grille[i, j];
            }
            Console.WriteLine(s);
        }
    }
}
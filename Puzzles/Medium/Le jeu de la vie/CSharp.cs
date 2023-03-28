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
        char[,] s = new char[height, width];
        for (int i = 0; i < height; i++)
        {
            string line = Console.ReadLine();
            for (int j = 0; j < width; j++){
                s[i, j] = line[j];
            }
        }
        int[,] finalTab = new int[height, width];
        for (int i = 0; i < height; i++){
            for (int j = 0; j < width; j++){
                if (s[i, j] == '0'){
                    int nbDeUn = compteUn(s, i, j, width, height);
                    Console.Error.WriteLine(nbDeUn);
                    if (nbDeUn == 3) { finalTab[i, j] = 1; }
                    else { finalTab[i, j] = 0; }
                }
                else {
                    int nbDeUn = compteUn(s, i , j , width, height);
                    Console.Error.WriteLine(nbDeUn);
                    if (nbDeUn < 2) { finalTab[i, j] = 0; }
                    else if (nbDeUn < 4) { finalTab[i, j] = 1; }
                    else { finalTab[i, j] = 0; }
                }
            }
        }
        for (int i = 0; i < height; i++){
            string sortie = "";
            for (int j = 0; j < width; j++){
                sortie = sortie + finalTab[i, j];
            }
            Console.WriteLine(sortie);
        }
    }
    
    static int compteUn(char[,] s, int x, int y, int w, int h){
        int compteur = 0;
        if (x - 1 >= 0 && y - 1 >= 0 && s[x - 1, y - 1] == '1'){
                compteur++;
        }
        if (y - 1 >= 0 && s[x, y - 1] == '1'){
                compteur++;
        }
        if (x + 1 < h && y - 1 >= 0 && s[x + 1, y - 1] == '1'){
                compteur++;
        }
        if (x - 1 >= 0 && s[x - 1, y] == '1'){
                compteur++;
        }
        if (x + 1 < h && s[x + 1, y] == '1'){
                compteur++;
        }
        if (x - 1 >= 0 && y + 1 < w && s[x - 1, y + 1] == '1'){
                compteur++;
        }
        if (y + 1 < w && s[x, y + 1] == '1'){
                compteur++;
        }
        if (x + 1 < h && y + 1 < w && s[x + 1, y + 1] == '1'){
                compteur++;
        }
        
        return compteur;
    }
}
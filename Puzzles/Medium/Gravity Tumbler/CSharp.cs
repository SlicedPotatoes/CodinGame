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
        int count = int.Parse(Console.ReadLine());
        char[,] tab = new char[width, height];
        for (int i = 0; i < height; i++)
        {
            string raster = Console.ReadLine();
            for (int x = 0; x < width; x++){
                tab[x, i] = raster[x];
            }
        }
        if (count%2 == 1){
            bool fin = false;
            while(!fin)
            {
                fin = true;
                for (int i = 0; i < width; i++){
                    for (int x = 0; x < height; x++){
                        if (tab[i, x] == '#' && i+1 < width){
                            if (tab[i+1, x] == '.'){
                                tab[i+1, x] = '#';
                                tab[i, x] = '.';
                                fin = false;
                            }
                        }
                    }
                } 
            }
            for (int i = 0; i < width; i++){
                string s = "";
                for (int x = 0; x < height; x++){
                    s = s + tab[i, x];
                }
                Console.WriteLine(s);
            }
        }
        else {
            bool fin = false;
            while(!fin){
                fin = true;
                for (int i = 0; i < height; i++){
                    for (int x = 0; x < width; x++){
                        if (tab[x, i] == '#' && x+1 < width){
                            if (tab[x+1, i] == '.'){
                                tab[x+1, i] = '#';
                                tab[x, i] = '.';
                                fin = false;
                            }
                        }
                    }
                }
            }
            for (int i = 0; i < height; i++){
                string s = "";
                for (int x = 0; x < width; x++){
                    s = s + tab[x, i];
                }
                Console.WriteLine(s);
            }
        }
        
    }
}
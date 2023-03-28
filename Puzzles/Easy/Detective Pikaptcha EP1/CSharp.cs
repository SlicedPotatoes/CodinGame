using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;

class Player
{
    static void Main(string[] args)
    {
        string[] inputs = Console.ReadLine().Split(' ');
        int width = int.Parse(inputs[0]);
        int height = int.Parse(inputs[1]);
        char[,] grid = new char[height,width];
        for (int i = 0; i < height; i++)
        {
            string line = Console.ReadLine();
            for(int j = 0; j < width; j++){
                grid[i,j] = line[j];
            }
            Console.Error.WriteLine(line);
        }
        for (int i = 0; i < height; i++)
        {

            for(int j = 0; j < width; j++){
                Console.Write(TransformChar(grid, i, j, height, width));   
            }
            Console.WriteLine("");
        }
    }
    
    static char TransformChar(char[,] grid, int i, int j, int H, int W){
        if (grid[i, j] == '#'){
            return '#';
        }
        int nbPassages = 0;
        if(i + 1 <= H-1 && grid[i+1, j] == '0'){
            nbPassages++;
        }
        if(i - 1 >= 0 && grid[i-1, j] == '0'){
            nbPassages++;
        }
        if(j + 1 <= W-1 && grid[i, j+1] == '0'){
            nbPassages++;
        }
        if(j - 1 >= 0 && grid[i, j-1] == '0'){
            nbPassages++;
        }
        return nbPassages.ToString()[0];
    }
}
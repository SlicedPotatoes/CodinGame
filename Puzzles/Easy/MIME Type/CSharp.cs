using System;
using System.Collections.Generic;

class Solution
{
    static void Main(string[] args)
    {
        int N = int.Parse(Console.ReadLine()); // Number of elements which make up the association table.
        int Q = int.Parse(Console.ReadLine()); // Number Q of file names to be analyzed.
        Dictionary<string, string> extensions = new Dictionary<string, string>();
        for (int i = 0; i < N; i++)
        {
            string[] inputs = Console.ReadLine().Split(' ');
            string EXT = inputs[0]; // file extension
            string MT = inputs[1]; // MIME type.
            extensions.Add(EXT.ToLower(), MT);
        }
        for (int i = 0; i < Q; i++)
        {
            string FNAME = Console.ReadLine(); // One file name per line.
            string extension = getExt(FNAME);
            if (extensions.ContainsKey(extension)){
                Console.WriteLine(extensions[extension]);
            }
            else{
                Console.WriteLine("UNKNOWN");
            }
        }
    }
    
    static string getExt(string fichier){
        int nbDePoint = fichier.Split('.').Length - 1;
        if (nbDePoint == 0){
            return string.Empty;
        }
        return fichier.Split('.')[nbDePoint].ToLower();
    }
}
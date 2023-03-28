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
        int L = int.Parse(Console.ReadLine());
        int H = int.Parse(Console.ReadLine());
        string T = Console.ReadLine();
        T = T.ToUpper();
        string[,] ROW = new string[H, 27];
        string s = "";
        for (int i = 0; i < H; i++)
        {
            string lettreInput = Console.ReadLine();
            ROW[i, 0] = lettreInput.Substring(0, L);
            ROW[i, 1] = lettreInput.Substring(L, L);
            ROW[i, 2] = lettreInput.Substring(L*2, L);
            ROW[i, 3] = lettreInput.Substring(L*3, L);
            ROW[i, 4] = lettreInput.Substring(L*4, L);
            ROW[i, 5] = lettreInput.Substring(L*5, L);
            ROW[i, 6] = lettreInput.Substring(L*6, L);
            ROW[i, 7] = lettreInput.Substring(L*7, L);
            ROW[i, 8] = lettreInput.Substring(L*8, L);
            ROW[i, 9] = lettreInput.Substring(L*9, L);
            ROW[i, 10] = lettreInput.Substring(L*10, L);
            ROW[i, 11] = lettreInput.Substring(L*11, L);
            ROW[i, 12] = lettreInput.Substring(L*12, L);
            ROW[i, 13] = lettreInput.Substring(L*13, L);
            ROW[i, 14] = lettreInput.Substring(L*14, L);
            ROW[i, 15] = lettreInput.Substring(L*15, L);
            ROW[i, 16] = lettreInput.Substring(L*16, L);
            ROW[i, 17] = lettreInput.Substring(L*17, L);
            ROW[i, 18] = lettreInput.Substring(L*18, L);
            ROW[i, 19] = lettreInput.Substring(L*19, L);
            ROW[i, 20] = lettreInput.Substring(L*20, L);
            ROW[i, 21] = lettreInput.Substring(L*21, L);
            ROW[i, 22] = lettreInput.Substring(L*22, L);
            ROW[i, 23] = lettreInput.Substring(L*23, L);
            ROW[i, 24] = lettreInput.Substring(L*24, L);
            ROW[i, 25] = lettreInput.Substring(L*25, L);
            ROW[i, 26] = lettreInput.Substring(L*26, L);
        }
        
        for (int y = 0; y < H; y++) {
            s = "";
            for (int z = 0; z < T.Length; z++) {
                switch (T[z]) {
                    case 'A':
                        s = s + ROW[y, 0];
                        break;
                    case 'B':
                        s = s + ROW[y, 1];
                        break;
                    case 'C':
                        s = s + ROW[y, 2];
                        break;
                    case 'D':
                        s = s + ROW[y, 3];
                        break;
                    case 'E':
                        s = s + ROW[y, 4];
                        break;
                    case 'F':
                        s = s + ROW[y, 5];
                        break;
                    case 'G':
                        s = s + ROW[y, 6];
                        break;
                    case 'H':
                        s = s + ROW[y, 7];
                        break;
                    case 'I':
                        s = s + ROW[y, 8];
                        break;
                    case 'J':
                        s = s + ROW[y, 9];
                        break;
                    case 'K':
                        s = s + ROW[y, 10];
                        break;
                    case 'L':
                        s = s + ROW[y, 11];
                        break;
                    case 'M':
                        s = s + ROW[y, 12];
                        break;
                    case 'N':
                        s = s + ROW[y, 13];
                        break;
                    case 'O':
                        s = s + ROW[y, 14];
                        break;
                    case 'P':
                        s = s + ROW[y, 15];
                        break;
                    case 'Q':
                        s = s + ROW[y, 16];
                        break;
                    case 'R':
                        s = s + ROW[y, 17];
                        break;
                    case 'S':
                        s = s + ROW[y, 18];
                        break;
                    case 'T':
                        s = s + ROW[y, 19];
                        break;
                    case 'U':
                        s = s + ROW[y, 20];
                        break;
                    case 'V':
                        s = s + ROW[y, 21];
                        break;
                    case 'W':
                        s = s + ROW[y, 22];
                        break;
                    case 'X':
                        s = s + ROW[y, 23];
                        break;
                    case 'Y':
                        s = s + ROW[y, 24];
                        break;
                    case 'Z':
                        s = s + ROW[y, 25];
                        break;
                    default: 
                        s = s + ROW[y, 26];
                        break;
                }
            }
            Console.WriteLine(s);
        }
    }
    
}
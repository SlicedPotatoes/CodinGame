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
        string[] ligne = new string[N];
        int nbMaxParLigne = 0;
        for (int i = 0; i < N; i++)
        {
            string M = Console.ReadLine();
            ligne[i] = M;
            if (M.Length / 3 > nbMaxParLigne){
                nbMaxParLigne = M.Length / 3;
            }
        }
        string[,] nombre = new string[N, nbMaxParLigne];
        for (int i = 0; i < N; i++){
            for (int j = 0; j < ligne[i].Length / 3; j++){
                nombre[i, j] = ligne[i].Substring(j*3,3);
            }
        }
        nombre = MoisToBase12(nombre, N, nbMaxParLigne);
        
        ligne = remplirTabLigne(nombre, N, nbMaxParLigne);
        for (int i = 0; i < ligne.Length; i++){
        }
        int somme = 0;
        for (int i = 0; i < N; i++){
            somme = somme + Base12To10(ligne[i]);
        }
        string sortie = "";
        string s = IntToString(Convert.ToInt32(somme));
        for (int i = 0; i < s.Length; i++){
            switch (s[i]){
                case '0':
                    sortie = sortie + "Jan";
                    break;
                case '1':
                    sortie = sortie + "Feb";
                    break;
                case '2':
                    sortie = sortie + "Mar";
                    break;
                case '3':
                    sortie = sortie + "Apr";
                    break;
                case '4':
                    sortie = sortie + "May";
                    break;
                case '5':
                    sortie = sortie + "Jun";
                    break;
                case '6':
                    sortie = sortie + "Jul";
                    break;
                case '7':
                    sortie = sortie + "Aug";
                    break;
                case '8':
                    sortie = sortie + "Sep";
                    break;
                case '9':
                    sortie = sortie + "Oct";
                    break;
                case 'A':
                    sortie = sortie + "Nov";
                    break;
                case 'B':
                    sortie = sortie + "Dec";
                    break;
                default:
                    sortie = sortie;
                    break;
            }
        }
        Console.WriteLine(sortie);

        
    }
    static string[] remplirTabLigne(string[,] e, int N, int M){
        string[] s = new string[N];
        for (int i = 0; i < N; i++){
            for (int j = 0; j < M; j++){
                s[i] = s[i] + e[i, j];
            }
        }
        return s;
    }
    static string[,] MoisToBase12(string[,] e, int N, int M){
        for (int i = 0; i < N; i++){
            for (int j = 0; j < M; j++){
                switch(e[i, j]){
                    case "Jan" :
                        e[i, j] = "0";
                        break;
                    case "Feb" :
                        e[i, j] = "1";
                        break;
                    case "Mar" :
                        e[i, j] = "2";
                        break;
                    case "Apr" :
                        e[i, j] = "3";
                        break;
                    case "May" :
                        e[i, j] = "4";
                        break;
                    case "Jun" :
                        e[i, j] = "5";
                        break;
                    case "Jul" :
                        e[i, j] = "6";
                        break;
                    case "Aug" :
                        e[i, j] = "7";
                        break;
                    case "Sep" :
                        e[i, j] = "8";
                        break;
                    case "Oct" :
                        e[i, j] = "9";
                        break;
                    case "Nov" :
                        e[i, j] = "A";
                        break;
                    case "Dec" :
                        e[i, j] = "B";
                        break;
                    default:
                        e[i, j] = "";
                        break;
                }
            }
        }
        return e;
    }
    public static string IntToString(int input)
    {
        const string CharList = "0123456789AB";
        char[] clistarr = CharList.ToCharArray();
        var result = new Stack<char>();
        while (input != 0)
        {
            result.Push(clistarr[input % 12]);
            input /= 12;
        }
        return new string(result.ToArray());
    }
    static int Base12To10(string input)
    {
        const string CharList = "0123456789AB";
        var reversed = input.ToLower().Reverse();
        int result = 0;
        int pos = 0;
        foreach (char c in reversed)
        {
            result += CharList.IndexOf(c) * (int)Math.Pow(12, pos);
            pos++;
        }
        return result;
    }

}
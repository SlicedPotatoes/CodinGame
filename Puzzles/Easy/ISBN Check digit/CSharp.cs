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
        ArrayList invalid = new ArrayList();
        for (int i = 0; i < N; i++)
        {
            string ISBN = Console.ReadLine();
            if (!validISBN(ISBN)){
                invalid.Add(ISBN);
            }
        }

        Console.WriteLine(invalid.Count + " invalid:");
        foreach (string obj in invalid){
            Console.WriteLine(obj);
        }
    }
    
    static bool validISBN(string s){
        if (s.Length != 10 && s.Length != 13){
            return false;
        } else if (s.Length == 10){
            for (int i = 0; i < s.Length-1; i++){
                if(!Char.IsDigit(s[i])){
                    return false;
                }
            }
            int[] n = new int[s.Length];
            for (int i = 0; i < s.Length-1; i++){
                n[i] = Convert.ToInt32(s[i].ToString());
            }
            int somme = n[0]*10 + n[1]*9 + n[2]*8 + n[3]*7 + n[4]*6 + n[5]*5 + n[6]*4 + n[7]*3 + n[8]*2;
            int reste = somme % 11;
            int controlDigit = -1;
            if (reste == 0){
                controlDigit = 0;
            } else if (reste == 1){
                controlDigit = -1;
            } else {
                controlDigit = 11 - reste;
            }
            if (controlDigit == -1 && s[9] == 'X'){
                    return true;
            } else if (s[9] == 'X'){
                return false;
            }
            if (controlDigit != Convert.ToInt32(s[9].ToString())){
                
                return false;
            }
        } else {
            for (int i = 0; i < s.Length; i++){
            if(!Char.IsDigit(s[i])){
                return false;
                }
            }
            int[] n = new int[s.Length];
            for (int i = 0; i < s.Length; i++){
                n[i] = Convert.ToInt32(s[i].ToString());
            }
            int somme = n[0] + n[1]*3 + n[2] + n[3]*3 + n[4] + n[5]*3 + n[6] + n[7]*3 + n[8] + n[9]*3 + n[10] + n[11]*3;
            int reste = somme % 10;
            int controlDigit = -1;
            if (reste == 0) {  controlDigit = 0; }
            else { controlDigit = 10 - reste; }
            if (controlDigit != n[12]){
                return false;
            }
        }
        return true;
    }
}
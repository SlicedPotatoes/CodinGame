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
        string operation = Console.ReadLine();
        int n = int.Parse(Console.ReadLine());
        string[] rotor = new string[3];
        for (int i = 0; i < 3; i++)
        {
            rotor[i] = Console.ReadLine();
        }
        string message = Console.ReadLine();
        if (operation == "ENCODE") {
            Console.WriteLine(encode(n, message, rotor[0], rotor[1], rotor[2]));
        }
        else if (operation == "DECODE"){
            Console.WriteLine(decode(n, message, rotor[0], rotor[1], rotor[2]));
        }
        else {
            Console.WriteLine("ENCODE OR DECODE");
        }
            
    }

    static string encode(int n, string message, string r1, string r2, string r3){

        //add + n + i to char value
        char[] tabM = message.ToCharArray();
        for (int i = 0; i < tabM.Length; i++)
        {
            int v = charToValue(tabM[i], "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            v = v + n + i;
            while(v > 26){
                v += -26;
            }
            tabM[i] = valueToChar(v, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }

        //encode rotor1
        for (int i = 0; i < tabM.Length; i++)
        {
            int v = charToValue(tabM[i], "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            tabM[i] = valueToChar(v, r1);
        }
        //encode rotor2
        for (int i = 0; i < tabM.Length; i++)
        {
            int v = charToValue(tabM[i], "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            tabM[i] = valueToChar(v, r2);
        }
            //encore rotor3
        for (int i = 0; i < tabM.Length; i++)
        {
            int v = charToValue(tabM[i], "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            tabM[i] = valueToChar(v, r3);
        }
        //prepare string return
        string s = "";
        foreach (char value in tabM)
        {
            s = s + value;
        }
            return s;
    }
    static string decode(int n, string message, string r1, string r2, string r3){
        char[] tabM = message.ToCharArray();
        //decode r3
        for (int i = 0; i < tabM.Length; i++){
            int v = charToValue(tabM[i], r3);
            tabM[i] = valueToChar(v, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        
        //decode r2
        for (int i = 0; i < tabM.Length; i++){
            int v = charToValue(tabM[i], r2);
            tabM[i] = valueToChar(v, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        
        //decode r1
        for (int i = 0; i < tabM.Length; i++){
            int v = charToValue(tabM[i], r1);
            tabM[i] = valueToChar(v, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        
        //subtract n and i to char value
        for (int i = 0; i < tabM.Length; i++){
            int v = charToValue(tabM[i], "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            v = v - n - i;
            while(v < 0){
                v += 26;
            }
            tabM[i] = valueToChar(v, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        }
        
        //prepare string return
        string s = "";
        foreach(char value in tabM){
            s = s + value;
        }
        return s;
    }
    static int charToValue(char c, string r){
        char[] tab = r.ToCharArray();
        if (c == tab[0])
        {
            return 1;
        }
        else if (c == tab[1])
        {
            return 2;
        }
        else if (c == tab[2])
        {
            return 3;
        }
        else if (c == tab[3])
        {
            return 4;
        }
        else if (c == tab[4])
        {
            return 5;
        }
        else if (c == tab[5])
        {
            return 6;
        }
        else if (c == tab[6])
        {
            return 7;
        }
        else if (c == tab[7])
        {
                return 8;
        }
        else if (c == tab[8])
        {
            return 9;
        }
        else if (c == tab[9])
        {
            return 10;
        }
        else if (c == tab[10])
        {
            return 11;
        }
        else if (c == tab[11])
        {
            return 12;
        }
        else if (c == tab[12])
        {
            return 13;
        }
        else if (c == tab[13])
        {
            return 14;
        }
        else if (c == tab[14])
        {
            return 15;
        }
        else if (c == tab[15])
        {
            return 16;
        }
        else if (c == tab[16])
        {
            return 17;
        }
        else if (c == tab[17])
        {
            return 18;
        }
        else if (c == tab[18])
        {
            return 19;
        }
        else if (c == tab[19])
        {
            return 20;
        }
        else if (c == tab[20])
        {
            return 21;
        }
        else if (c == tab[21])
        {
            return 22;
        }
        else if (c == tab[22])
        {
            return 23;
        }
        else if (c == tab[23])
        {
            return 24;
        }
        else if (c == tab[24])
        {
            return 25;
        }
        else if (c == tab[25])
        {
            return 26;
        }
        else
        {
            return -1;
        }
    }
    static char valueToChar(int v, string r){
        char[] tab = r.ToCharArray();
        switch (v){
                case 1:
                    return tab[0];
                case 2:
                    return tab[1];
                case 3:
                    return tab[2];
                case 4:
                    return tab[3];
                case 5:
                    return tab[4];
                case 6:
                    return tab[5];
                case 7:
                    return tab[6];
                case 8:
                    return tab[7];
                case 9:
                    return tab[8];
                case 10:
                    return tab[9];
                case 11:
                    return tab[10];
                case 12:
                    return tab[11];
                case 13:
                    return tab[12];
                case 14:
                    return tab[13];
                case 15:
                    return tab[14];
                case 16:
                    return tab[15];
                case 17:
                    return tab[16];
                case 18:
                    return tab[17];
                case 19:
                    return tab[18];
                case 20:
                    return tab[19];
                case 21:
                    return tab[20];
                case 22:
                    return tab[21];
                case 23:
                    return tab[22];
                case 24:
                    return tab[23];
                case 25:
                    return tab[24];
                case 26:
                    return tab[25];
                default:
                    return '?';
            }
    }
}
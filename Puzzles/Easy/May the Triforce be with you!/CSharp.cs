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
        int n = int.Parse(Console.ReadLine());

        string s = "";
            string s2 = "";
            string[] tab = new string[n];
            string[] tab2 = new string[n];
            string[] tab3 = new string[n + n];

            bool premTour = true;
            for (int i = 0; i < n; i++)
            {
                if (premTour) { premTour = false; }
                else { s = s + "*"; }
                
                
                s = "*" + s;
                
                tab[i] = s;
            }
            for (int i = n-1; i > -1; i--)
            {
                tab2[i] = s2;
                s2 = s2 + " ";
                
            }
            bool firstTour = true;
            for (int i = 0; i < n; i++)
            {
                string myString = "";
                
                for (int j = 0; j < n; j++)
                {
                    myString = myString + " ";
                }
                if (firstTour == true) {
                    myString = myString.Remove(0, 1);
                    Console.WriteLine("." + myString + tab2[i] + tab[i]);
                    firstTour = false;
                }
                else { Console.WriteLine(myString + tab2[i] + tab[i]); }
                
            }
            for (int i = 0; i < n; i++)
            {
                string myString = "";
                for (int j = 0; j < n*2; j++)
                {
                    myString = myString + " ";
                }
                for (int j = n - i; j < n; j++)
                {
                    myString = myString.Remove(0, 2);
                }
                myString = myString.Remove(0, 1);
                Console.WriteLine(tab2[i] + tab[i] + myString +  tab[i]);
            }
    }
}
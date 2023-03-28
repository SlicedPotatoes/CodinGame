using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;

class Solution
{
    static void Main(string[] args)
        {
            int N = Convert.ToInt32(Console.ReadLine());
            char[] c = new char[N];
            string input = Console.ReadLine();
            int indice = 0;
            for (int i = 0; i < N; i++)
            {
                c[i] = input[indice];
                indice = indice + 2;
            }
            bool chiffreNegatif = signeNegatif(c);
            c = ranger(c);

            string s = "";
            
            int taille = c.Length;
            
            for (int i = 0; i < taille; i++)
            {
                s = s + c[i];
            }
            s = gestionZero(s);
            Console.WriteLine(s);
        }
        
        static string gestionZero(string s)
        {
            double sortie = Convert.ToDouble(s, new CultureInfo("en-US"));
            s = Convert.ToString(sortie);
            
            return s;
        }

        static bool signeNegatif(char[] c)
        {
            for (int i = 0; i < c.Length; i++)
            {
                if (c[i] == '-')
                {
                    return true;
                }
            }
            return false;
        }

        static bool nombreAVirgule(char[] c)
        {
            for (int i = 0; i < c.Length; i++)
            {
                if (c[i] == '.')
                {
                    return true;
                }
            }
            return false;
        }

        static char[] ranger(char[] c)
        {
            if (signeNegatif(c)) { return rangerNegatif(c, nombreAVirgule(c)); }
            else { return rangerPositif(c, nombreAVirgule(c)); }
        }
        static char[] rangerNegatif(char[] c, bool virgule)
        {
            for (int i = 0; i < c.Length; i++)
            {
                if (c[i] == '-')
                {
                    c[i] = c[0];
                    c[0] = '-';
                }
            }
            if (virgule)
            {
                for (int i = 0; i < c.Length; i++)
                {
                    if (c[i] == '.')
                    {
                        c[i] = c[2];
                        c[2] = '.';
                    }
                }
                int temps = 10;
                int indice = 0;
                for (int i = 3; i < c.Length; i++)
                {

                    if (CharToInt(c[i]) < temps)
                    {
                        temps = CharToInt(c[i]);
                        indice = i;
                    }
                }
                if (CharToInt(c[1]) > temps)
                {
                    c[indice] = c[1];
                    string lol = Convert.ToString(temps);
                    c[1] = lol[0];
                }
                int taille = c.Length;
                bool tabTrier = false;
                while (!tabTrier)
                {
                    tabTrier = true;
                    for (int i = 3; i < taille - 1; i++)
                    {
                        if (CharToInt(c[i]) > CharToInt(c[i + 1]))
                        {
                            char x = c[i];
                            c[i] = c[i + 1];
                            c[i + 1] = x;
                            tabTrier = false;
                        }
                    }
                    taille--;

                }
                return c;
            }
            else
            {
                int taille = c.Length;
                bool tabTrier = false;
                while (!tabTrier)
                {
                    tabTrier = true;
                    for (int i = 1; i < taille - 1; i++)
                    {
                        if (CharToInt(c[i]) > CharToInt(c[i + 1]))
                        {
                            char x = c[i];
                            c[i] = c[i + 1];
                            c[i + 1] = x;
                            tabTrier = false;
                        }
                    }
                    taille--;

                }
                return c;
            }

        }
        static char[] rangerPositif(char[] c, bool virgule)
        {
            if (virgule)
            {
                for (int i = 0; i < c.Length; i++)
                {
                    if (c[i] == '.')
                    {
                        c[i] = c[c.Length - 2];
                        c[c.Length - 2] = '.';
                    }
                }

                int temps = 10;
                int indice = 0;
                for (int i = 0; i < c.Length - 2; i++)
                {
                    if (CharToInt(c[i]) < temps)
                    {
                        temps = CharToInt(c[i]);
                        indice = i;
                    }
                }
                if (CharToInt(c[c.Length - 1]) > temps)
                {
                    c[indice] = c[c.Length - 1];
                    string lol = Convert.ToString(temps);
                    c[c.Length - 1] = lol[0];
                }
                int taille = c.Length;
                bool tabTrier = false;
                while (!tabTrier)
                {
                    tabTrier = true;
                    for (int i = 0; i < taille - 2; i++)
                    {
                        if (Convert.ToInt32(c[i]) < Convert.ToInt32(c[i + 1]))
                        {
                            char x = c[i];
                            c[i] = c[i + 1];
                            c[i + 1] = x;
                            tabTrier = false;
                        }
                    }
                    taille--;

                }
                return c;
            }
            else
            {
                
                int taille = c.Length;
                bool tabTrier = false;
                while (!tabTrier)
                {
                    tabTrier = true;
                    for (int i = 0; i < taille - 1; i++)
                    {
                        if (Convert.ToInt32(c[i]) < Convert.ToInt32(c[i + 1]))
                        {
                            char x = c[i];
                            c[i] = c[i + 1];
                            c[i + 1] = x;
                            tabTrier = false;
                        }
                    }
                    taille--;

                }
                return c;
            }
        }

        static int CharToInt(char c)
        {
            return c - '0';
        }
}
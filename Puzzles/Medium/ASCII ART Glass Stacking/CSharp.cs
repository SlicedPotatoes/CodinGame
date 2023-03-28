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
        string[] modele = initModel(); //Tableau de string contenant model
        int N = int.Parse(Console.ReadLine()); 
        int ligne = nbLigne(N);

        string[] tabLigne = new string[ligne*4];
        int ligne2 = ligne;
        int compteur = 0;
        for (int i = 0; i < ligne*4; i = i + 4) //remplir tab sortie
        {
            string s0 = "";
            string s1 = "";
            string s2 = "";
            string s3 = "";
            for (int j = 0; j < compteur; j++)
            {
                s0 = s0 + " ";
                s1 = s1 + " ";
                s2 = s2 + " ";
                s3 = s3 + " ";
            }
            for (int j = 0; j < ligne2; j++)
            {
                if (j + 1 == ligne2)
                {
                    s0 = s0 + modele[0];
                    s1 = s1 + modele[1];
                    s2 = s2 + modele[2];
                    s3 = s3 + modele[3];
                }
                else
                {
                    s0 = s0 + modele[0] + " ";
                    s1 = s1 + modele[1] + " ";
                    s2 = s2 + modele[2] + " ";
                    s3 = s3 + modele[3] + " ";
                }
            }
            for (int j = 0; j < compteur; j++)
            {
                s0 = s0 + " ";
                s1 = s1 + " ";
                s2 = s2 + " ";
                s3 = s3 + " ";
            }
            ligne2--;
            tabLigne[i] = s0;
            tabLigne[i + 1] = s1;
            tabLigne[i + 2] = s2;
            tabLigne[i + 3] = s3;
            compteur = compteur + 3;
        }
        for (int i = ligne*4 - 1; i != -1; i--)
        {
            Console.WriteLine(tabLigne[i]);
        }
        
    }

    static string[] initModel() //initialisation model
    {
        string[] tab = new string[4];
        tab[0] = "*****";
        tab[1] = " * * ";
        tab[2] = " * * ";
        tab[3] = " *** ";
        return tab;
    }
    static int nbLigne(int n) //calcul nombre de ligne
    {
        bool finish = false;
        int nombre = 0;
        int compteur = 1;
        while (!finish)
        {
            finish = true;
            if (nombre < n)
            {
                finish = false;
                compteur++;
                nombre = nombre + compteur;
            }   
        }
        return (compteur - 1);
    }
}
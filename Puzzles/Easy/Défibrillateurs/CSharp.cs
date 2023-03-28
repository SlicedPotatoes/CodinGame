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
        string LON = Console.ReadLine();
        string LAT = Console.ReadLine();
        LON = LON.Replace(",",".");
        LAT = LAT.Replace(",",".");
        int N = int.Parse(Console.ReadLine());
        Defibrillateur[] DefibTab = new Defibrillateur[N];
        Console.Error.WriteLine("Longitude: " + LON + " Latitude " + LAT + " Nb défibrillateur: " + N);
        for (int i = 0; i < N; i++)
        {
            string DEFIB = Console.ReadLine();
            string[] tab = DEFIB.Split(new char[] { ';' });
            int index = Convert.ToInt32(tab[0]);
            string nom = tab[1];
            string adresse = tab[2];
            //int tel = tab[3];
            string stringLongitude = tab[4];
            stringLongitude = stringLongitude.Replace(",",".");
            string stringLatitude = tab[5].Replace(",",".");
            double longitude = Convert.ToDouble(stringLongitude);
            double latitude = Convert.ToDouble(stringLatitude);
            DefibTab[i] = new Defibrillateur(index, nom, adresse, longitude, latitude);
        }

        int sortie = defibPlusProche(DefibTab, Convert.ToDouble(LON), Convert.ToDouble(LAT));
        Console.WriteLine(DefibTab[sortie].nom);
    }
    
    static double ConvertToRadians(double angle)
    {
        return (Math.PI / 180) * angle;
    }

    static int defibPlusProche(Defibrillateur[] DefibTableau, double longitude, double latitude)
    {
        double distanceD = 1000000;
        int indice = 1000;
        for (int i = 0; i < DefibTableau.Length; i++)
        {
            double x = distance(longitude, latitude, DefibTableau[i]);
            if (x < distanceD)
            {
                distanceD = x;
                indice = i;
            }
        }
        return indice;
    }

    static double distance(double LON, double LAT, Defibrillateur d)
    {
        double x = (ConvertToRadians(LON) - ConvertToRadians(d.longitude)) * Math.Cos((ConvertToRadians(d.latitude) + ConvertToRadians(LAT)) / 2);
        double y = ConvertToRadians(LAT) - ConvertToRadians(d.latitude);
        return Math.Sqrt(Math.Pow(x, 2) + Math.Pow(y, 2)) * 6371;
    } 

}

class Defibrillateur
{
    public int index;
    public string nom;
    public string adresse;
    public int tel;
    public double longitude;
    public double latitude;

    public Defibrillateur(int index, string nom, string adresse, double longitude, double latitude, int tel = 0)
    {
        this.index = index;
        this.nom = nom;
        this.adresse = adresse;
        this.tel = tel;
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
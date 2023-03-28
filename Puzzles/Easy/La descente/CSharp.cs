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

        // game loop
        while (true)
        {
            int x = 0;
            int y = 0;
            for (int i = 0; i < 8; i++)
            {
                int mountainH = int.Parse(Console.ReadLine());
                if (mountainH > x) {
                    x = mountainH;
                    y = i;
                }
            }

            Console.WriteLine(y);

        }
    }
}
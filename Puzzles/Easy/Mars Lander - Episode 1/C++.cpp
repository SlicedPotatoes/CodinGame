#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  int surface_n; // the number of points used to draw the surface of Mars.
  cin >> surface_n;
  cin.ignore();
  for (int i = 0; i < surface_n; i++)
  {
    int land_x; // X coordinate of a surface point. (0 to 6999)
    int land_y; // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
    cin >> land_x >> land_y;
    cin.ignore();
  }

  // game loop
  while (1)
  {
    int x;
    int y;
    int h_speed; // the horizontal speed (in m/s), can be negative.
    int v_speed; // the vertical speed (in m/s), can be negative.
    int fuel;    // the quantity of remaining fuel in liters.
    int rotate;  // the rotation angle in degrees (-90 to 90).
    int power;   // the thrust power (0 to 4).
    cin >> x >> y >> h_speed >> v_speed >> fuel >> rotate >> power;
    cin.ignore();

    if (v_speed <= -40)
    {
      cout << "0 4\n";
    }
    else
    {
      cout << "0 0\n";
    }
  }
}
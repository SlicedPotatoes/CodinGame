#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  int light_x;    // the X position of the light of power
  int light_y;    // the Y position of the light of power
  int initial_tx; // Thor's starting X position
  int initial_ty; // Thor's starting Y position
  cin >> light_x >> light_y >> initial_tx >> initial_ty;
  cin.ignore();

  // game loop
  while (1)
  {
    int remaining_turns; // The remaining amount of turns Thor can move. Do not remove this line.
    cin >> remaining_turns;
    cin.ignore();
    string answer = "";
    if (initial_ty > light_y)
    {
      answer += "N";
      initial_ty--;
    }
    else if (initial_ty < light_y)
    {
      answer += "S";
      initial_ty++;
    }
    if (initial_tx > light_x)
    {
      answer += "W";
      initial_tx--;
    }
    else if (initial_tx < light_x)
    {
      answer += "E";
      initial_tx++;
    }

    cout << answer << endl;
  }
}
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  while (1)
  {
    int min = 0;
    int index = 0;
    for (int i = 0; i < 8; i++)
    {
      int mountain_h;
      cin >> mountain_h;
      cin.ignore();
      if (mountain_h > min)
      {
        min = mountain_h;
        index = i;
      }
    }
    cout << index << endl;
  }
}
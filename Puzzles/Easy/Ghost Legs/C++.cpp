#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
static int MAX = 100;

int main()
{
  int w, h, index = 0;
  cin >> w >> h;
  cin.ignore();
  string arr[MAX];
  char entree[MAX];
  for (int i = 0; i < h; i++)
  {
    getline(cin, arr[i]);
  }

  for (int i = 0; i < w; i++)
  {
    if (arr[0][i] != ' ')
    {
      entree[index] = arr[0][i];
      index++;
    }
  }

  for (int i = 0; i < index; i++)
  {
    int _i = -1;
    for (int j = 0; j < w; j++)
    {
      if (arr[0][j] == entree[i])
      {
        _i = j;
      }
    }
    for (int j = 0; j < h; j++)
    {
      bool indexChanged = false;
      if (_i - 1 > 0 && arr[j][_i - 1] == '-')
      {
        _i -= 3;
        indexChanged = true;
      }
      if (index + 1 < w && !indexChanged && arr[j][_i + 1] == '-')
      {
        _i += 3;
      }
      if (j == h - 1)
      {
        cout << entree[i] << arr[j][_i] << '\n';
      }
    }
  }
}
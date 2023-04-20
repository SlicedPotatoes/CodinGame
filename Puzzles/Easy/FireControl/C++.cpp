#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

const int FOREST_SIZE = 6;

int main()
{
  int treeNeedCut = 0, countFire = 0, countNotTreeFire = 0;
  string forest[FOREST_SIZE];
  for (int i = 0; i < FOREST_SIZE; i++)
  {
    getline(cin, forest[i]);
  }
  for (int i = 0; i < FOREST_SIZE; i++)
  {
    for (int j = 0; j < FOREST_SIZE; j++)
    {
      if (forest[i][j] == '*')
      {
        countFire++;
        int indexHelper[24][2] = {{i - 2, j - 2}, {i - 2, j - 1}, {i - 2, j}, {i - 2, j + 1}, {i - 2, j + 2}, {i - 1, j - 2}, {i - 1, j - 1}, {i - 1, j}, {i - 1, j + 1}, {i - 1, j + 2}, {i, j - 2}, {i, j - 1}, {i, j + 1}, {i, j + 2}, {i + 1, j - 2}, {i + 1, j - 1}, {i + 1, j}, {i + 1, j + 1}, {i + 1, j + 2}, {i + 2, j - 2}, {i + 2, j - 1}, {i + 2, j}, {i + 2, j + 1}, {i + 2, j + 2}};
        for (int indexPos = 0; indexPos < 24; indexPos++)
        {
          int _i = indexHelper[indexPos][0];
          int _j = indexHelper[indexPos][1];
          if (_i >= 0 && _i < FOREST_SIZE && _j >= 0 && _j < FOREST_SIZE)
          {
            if (forest[_i][_j] == '#')
            {
              treeNeedCut++;
              forest[_i][_j] = '0';
            }
          }
        }
      }
      else if (forest[i][j] == '=' || forest[i][j] == 'o')
      {
        countNotTreeFire++;
      }
    }
  }
  if (countFire == 0)
  {
    cout << "RELAX\n";
  }
  else if (countFire + treeNeedCut + countNotTreeFire == 36 || treeNeedCut == 0)
  {
    cout << "JUST RUN\n";
  }
  else
  {
    cout << treeNeedCut << '\n';
  }
}
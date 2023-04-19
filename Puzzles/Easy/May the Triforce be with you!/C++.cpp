#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
  int n;
  cin >> n;
  cin.ignore();
  for (int i = 0; i < n; i++)
  {
    if (i == 0)
    {
      cout << '.';
      for (int j = 0; j < n * 2 - 2; j++)
      {
        cout << ' ';
      }
      cout << '*';
    }
    else
    {
      for (int j = 0; j < n * 2 - i - 1; j++)
      {
        cout << ' ';
      }
      for (int j = 0; j < i * 2 + 1; j++)
      {
        cout << '*';
      }
    }
    cout << '\n';
  }
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n - i - 1; j++)
    {
      cout << ' ';
    }
    for (int j = 0; j < i * 2 + 1; j++)
    {
      cout << '*';
    }
    for (int j = 0; j < n * 2 - (1 + (i * 2)); j++)
    {
      cout << ' ';
    }
    for (int j = 0; j < i * 2 + 1; j++)
    {
      cout << '*';
    }
    cout << '\n';
  }
}
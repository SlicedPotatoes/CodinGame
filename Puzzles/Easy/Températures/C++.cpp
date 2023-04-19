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
  int absMin = 5527;
  int value = 0;
  for (int i = 0; i < n; i++)
  {
    int t;
    cin >> t;
    cin.ignore();
    if (abs(t) < absMin)
    {
      absMin = abs(t);
      value = t;
    }
    else if (t == absMin)
    {
      value = t;
    }
  }

  cout << value << endl;
}
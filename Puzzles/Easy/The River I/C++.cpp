#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int next(int n)
{
  string s = to_string(n);
  int length = s.length();
  for (int i = 0; i < length; i++)
  {
    n += (s[i] - '0');
  }
  return n;
}

int main()
{
  long long r1, r2;
  cin >> r1 >> r2;

  while (r1 != r2)
  {
    if (r1 < r2)
    {
      r1 = next(r1);
    }
    else
    {
      r2 = next(r2);
    }
  }

  cout << r1 << '\n';
}
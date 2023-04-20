#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

const int CHAR_REF = 'A';

int main()
{
  int l, h;
  cin >> l >> h;
  cin.ignore();
  string text;
  getline(cin, text);
  int textLength = text.length();
  for (int i = 0; i < h; i++)
  {
    string ASCII;
    getline(cin, ASCII);
    for (int j = 0; j < textLength; j++)
    {
      int c = toupper(text[j]) - CHAR_REF;
      for (int chr = 0; chr < l; chr++)
      {
        if (c < 0 || c > 25)
        {
          c = 26;
        }
        cout << ASCII[c * l + chr];
      }
    }
    cout << '\n';
  }
}
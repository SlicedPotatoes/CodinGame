#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

const int MAX_TYPE = 10 * 1000;

string lowerString(string s)
{
  string r = "";
  int length = s.length();
  for (int i = 0; i < length; i++)
  {
    r += tolower(s[i]);
  }
  return r;
}

int indexLastDot(string s)
{
  int length = s.length();
  int last = -1;
  for (int i = 0; i < length; i++)
  {
    if (s[i] == '.')
    {
      last = i;
    }
  }
  return last;
}
string getExt(string s, int index)
{
  string ext = "";
  int length = s.length();
  for (int i = index + 1; i < length; i++)
  {
    ext += tolower(s[i]);
  }
  return ext;
}

int main()
{
  int n, q;
  cin >> n >> q;
  map<string, string> MT;
  for (int i = 0; i < n; i++)
  {
    string ext; // file extension
    string mt;  // MIME type.
    cin >> ext >> mt;
    MT[lowerString(ext)] = mt;
  }
  cin.ignore();
  for (int i = 0; i < q; i++)
  {
    string fname;
    getline(cin, fname); // One file name per line.
    int index = indexLastDot(fname);
    string ext = getExt(fname, index);
    if (MT.count(ext) > 0 && index != -1)
    {
      cout << MT[ext] << '\n';
    }
    else
    {
      cout << "UNKNOWN\n";
    }
  }
}
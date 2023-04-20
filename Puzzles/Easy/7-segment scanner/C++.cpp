#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

const int MAX_DIGIT = 300;

string getDigit(string s, int start, int end)
{
  string r = "";
  for (int i = start; i < end; i++)
  {
    r += s[i];
  }
  return r;
}

int main()
{
  string line1, line2, line3;
  getline(cin, line1);
  getline(cin, line2);
  getline(cin, line3);
  int answer[MAX_DIGIT], lengthLine = line1.length() / 3;

  for (int i = 0; i < lengthLine; i++)
  {
    string l1 = getDigit(line1, i * 3, i * 3 + 3);
    string l2 = getDigit(line2, i * 3, i * 3 + 3);
    string l3 = getDigit(line3, i * 3, i * 3 + 3);
    if (l1 != " _ ")
    {
      if (l2 == "  |")
      {
        answer[i] = 1;
      }
      else
      {
        answer[i] = 4;
      }
    }
    else if (l3 == "|_|")
    {
      if (l2 == "| |")
      {
        answer[i] = 0;
      }
      else if (l2 == "|_ ")
      {
        answer[i] = 6;
      }
      else
      {
        answer[i] = 8;
      }
    }
    else if (l2 == " _|")
    {
      if (l3 == "|_ ")
      {
        answer[i] = 2;
      }
      else
      {
        answer[i] = 3;
      }
    }
    else if (l3 == " _|")
    {
      if (l2 == "|_|")
      {
        answer[i] = 9;
      }
      else
      {
        answer[i] = 5;
      }
    }
    else
    {
      answer[i] = 7;
    }
  }

  for (int i = 0; i < lengthLine; i++)
  {
    cout << answer[i];
  }
  cout << '\n';
}
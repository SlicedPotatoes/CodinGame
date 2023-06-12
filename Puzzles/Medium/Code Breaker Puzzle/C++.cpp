#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool findWord(string s, string word)
{
  size_t pos = s.find(word);
  if (pos != string::npos)
  {
    return true;
  }
  return false;
}
int findPos(string alphabet, char c)
{
  return alphabet.find(c);
}

int main()
{
  string alphabet;
  getline(cin, alphabet);
  string message;
  getline(cin, message);
  string word;
  getline(cin, word);
  int alphabetLength = alphabet.length();
  int messageLength = message.length();

  for (int A = 0; A < alphabetLength; A++)
  {
    for (int B = 1; B < alphabetLength; B++)
    {
      string s = "";
      for (int i = 0; i < messageLength; i++)
      {
        int pos = findPos(alphabet, message[i]);
        pos = ((pos + A) * B) % alphabetLength;
        s += alphabet[pos];
      }
      if (findWord(s, word))
      {
        cout << s << endl;
        return 0;
      }
    }
  }
}
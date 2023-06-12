#include <iostream>
#include <string>
#include <vector>
#include <sstream>
#include <map>
using namespace std;

vector<string> split(const string &str, char delimiter)
{
  vector<string> tokens;
  stringstream ss(str);
  string token;

  while (getline(ss, token, delimiter))
  {
    tokens.push_back(token);
  }

  return tokens;
}

int main()
{
  int rows;
  cin >> rows;
  cin.ignore();
  map<char, string> alphabets;
  string output = "";
  for (int i = 0; i < rows; i++)
  {
    string row;
    getline(cin, row);
    vector<string> splitedRow = split(row, ' ');
    for (int j = 0; j < splitedRow.size(); j++)
    {
      alphabets[splitedRow[j][0]] = to_string(i) + to_string(j);
    }
  }
  string message;
  getline(cin, message);
  for (int i = 0; i < message.length(); i++)
  {
    output += alphabets[message[i]];
  }

  cout << output << endl;
}
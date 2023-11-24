#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int countDot(string s)
{
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] != '.')
        {
            return i;
        }
    }
    return s.size();
}

string getNoDot(string s)
{
    string _s = "";
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] != '.')
        {
            _s += s[i];
        }
    }
    return _s;
}

string vectorToString(vector<string> v)
{
    string s = "";
    for (int i = 0; i < v.size(); i++)
    {
        s += v[i];
        if (i != v.size() - 1)
        {
            s += " > ";
        }
    }
    return s;
}

int main()
{
    int count;
    cin >> count;
    cin.ignore();

    int currentDepth = 0;
    vector<string> current;
    for (int i = 0; i < count; i++)
    {
        string line;
        getline(cin, line);
        int depth = countDot(line);
        if (currentDepth != depth)
        {
            cout << vectorToString(current) << "\n";
            for (; currentDepth > depth; currentDepth--)
            {
                current.pop_back();
            }
        }
        current.push_back(getNoDot(line));
        currentDepth++;
    }
    cout << vectorToString(current) << "\n";
}
#include <algorithm>
#include <iostream>
#include <string>
#include <tuple>
#include <unordered_map>
#include <vector>

using namespace std;

unordered_map<string, int> cacheCountPair;
int countPair(string s, string pair)
{
    string key = s + ':' + pair;
    if (cacheCountPair.find(key) != cacheCountPair.end())
    {
        return cacheCountPair[key];
    }
    int count = 0;
    for (int i = 0; i < s.size() - 1; i++)
    {
        if (s[i] == pair[0] && s[i + 1] == pair[1])
        {
            count++;
            i++;
        }
    }
    cacheCountPair[key] = count;
    return count;
}

tuple<string, int> getMostCommonPair(string s)
{
    int maxCount = -1;
    string pair = "";
    for (int i = 0; i < s.size() - 1; i++)
    {
        string _pair = s.substr(i, 2);
        int count = countPair(s, _pair);
        if (count > maxCount)
        {
            maxCount = count;
            pair = _pair;
        }
    }
    return {pair, maxCount};
}

string replace(string s, string pair, char bit)
{
    string result = "";
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == pair[0] && s[i + 1] == pair[1])
        {
            result += bit;
            i++;
        }
        else
        {
            result += s[i];
        }
    }
    return result;
}

int main()
{
    string s = "";
    vector<string> transmutation;
    int n;
    int m;
    cin >> n >> m;
    cin.ignore();
    for (int i = 0; i < n; i++)
    {
        string line;
        cin >> line;
        cin.ignore();
        s += line;
    }

    tuple<string, int> pair = getMostCommonPair(s);

    for (int i = 0; get<1>(pair) != 1; i++)
    {
        char c = 'Z' - i;
        s = replace(s, get<0>(pair), c);
        transmutation.push_back(string(1, c) + " = " + get<0>(pair));
        pair = getMostCommonPair(s);
    }

    cout << s << endl;
    for (string t : transmutation)
    {
        cout << t << endl;
    }
}
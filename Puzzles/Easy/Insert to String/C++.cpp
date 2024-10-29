#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

struct parsedChange
{
  public:
    parsedChange(int row, int col, string s) : row(row), col(col), s(s)
    {
    }

    int row;
    int col;
    string s;
};

parsedChange parseChange(string &s)
{

    int f = s.find('|');
    int f1 = s.find('|', f + 1);

    int row = stoi(s.substr(0, f));
    int col = stoi(s.substr(f + 1, f1 - f));
    string _s = s.substr(f1 + 1);
    string __s = "";

    for (char c : _s)
    {
        if (c == 'n' && __s.back() == '\\')
        {
            __s.pop_back();
            __s.push_back('\n');
            continue;
        }

        __s.push_back(c);
    }

    return parsedChange(row, col, __s);
}

vector<string> getText(string &s)
{
    vector<string> res;
    string curr = "";

    for (char c : s)
    {
        if (c == 'n' && curr.back() == '\\')
        {
            curr.pop_back();
            res.push_back(curr);
            curr = "";
            continue;
        }

        curr += c;
    }

    res.push_back(curr);

    return res;
}

string insert(int col, string &substr, string &s)
{
    return s.substr(0, col) + substr + s.substr(col);
}

int main()
{
    string s;
    getline(cin, s);
    int change_count;
    cin >> change_count;
    cin.ignore();

    vector<string> text = getText(s);
    vector<parsedChange> pcs;

    for (int i = 0; i < change_count; i++)
    {
        string raw_change;
        getline(cin, raw_change);

        pcs.push_back(parseChange(raw_change));
    }

    sort(pcs.begin(), pcs.end(), [](parsedChange &a, parsedChange &b) {
        if (a.row == b.row)
        {
            return a.col > b.col;
        }
        return a.row > b.row;
    });

    for (parsedChange &a : pcs)
    {
        text[a.row] = insert(a.col, a.s, text[a.row]);
    }

    for (string &s : text)
    {
        cout << s << endl;
    }
}
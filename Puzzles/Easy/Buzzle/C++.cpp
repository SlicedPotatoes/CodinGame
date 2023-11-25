#include <algorithm>
#include <cmath>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

string b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
int base;

string convertFromDecimalToAnyBase(int n)
{
    string number = "";
    while (n != 0)
    {
        int reste = n % base;
        n = (n - reste) / base;
        number += b64[reste];
    }
    reverse(number.begin(), number.end());
    return number;
}

class Divider
{
  public:
    int nBase10;
    string nBase;
    Divider(int n)
    {
        nBase10 = n;
        nBase = convertFromDecimalToAnyBase(n);
    }
};

vector<Divider> dividers;

int convertFromAnyBaseToDecimal(string n)
{
    int value = 0;
    reverse(n.begin(), n.end());
    for (int i = 0; i < n.size(); i++)
    {
        int iOf = b64.find(n[i]);
        value += iOf * pow(base, i);
    }
    return value;
}

bool isBuzzle(int n)
{
    string strValue = convertFromDecimalToAnyBase(n);
    for (Divider divider : dividers)
    {
        if (n % divider.nBase10 == 0)
        {
            return true;
        }
        if (strValue.back() == divider.nBase.back())
        {
            return true;
        }
    }
    if (strValue.size() != 1)
    {
        int _n = 0;
        for (int i = 0; i < strValue.size(); i++)
        {
            int index = b64.find(strValue[i]);
            _n += index;
        }
        return isBuzzle(_n);
    }
    return false;
}

int main()
{
    int a;
    int b;
    cin >> base >> a >> b;
    cin.ignore();
    int k;
    cin >> k;
    cin.ignore();
    for (int i = 0; i < k; i++)
    {
        int num;
        cin >> num;
        cin.ignore();
        dividers.push_back({num});
    }

    for (int i = a; i <= b; i++)
    {
        if (isBuzzle(i))
        {
            cout << "Buzzle\n";
        }
        else
        {
            cout << i << "\n";
        }
    }
}
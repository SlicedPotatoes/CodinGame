#include <algorithm>
#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

using namespace std;

class MusicStyle
{
  public:
    string name;
    int minM;
    int maxM;
    int minF;
    int maxF;
    MusicStyle() = default;
    MusicStyle(string name) : name(name)
    {
        minM = -1;
        maxM = -1;
        minF = -1;
        maxF = -1;
    }
    void computeMinMax(bool isM, int age)
    {
        if (isM)
        {
            if (minM == -1)
            {
                minM = age;
                maxM = age;
            }
            if (age > maxM)
            {
                maxM = age;
            }
        }
        else
        {
            if (minF == -1)
            {
                minF = age;
                maxF = age;
            }
            if (age > maxF)
            {
                maxF = age;
            }
        }
    }
    bool isInMinMax(bool isM, int age)
    {
        return (isM && age >= minM && age <= maxM) || (!isM && age >= minF && age <= maxF);
    }
};

vector<string> splitString(string s, string d)
{
    size_t pos = 0;
    string token;
    vector<string> result;
    while ((pos = s.find(d)) != string::npos)
    {
        token = s.substr(0, pos);
        result.push_back(token);
        s.erase(0, pos + d.length());
    }
    result.push_back(s);
    return result;
}

int main()
{
    unordered_map<string, MusicStyle> map;

    int n;
    cin >> n;
    cin.ignore();
    for (int i = 0; i < n; i++)
    {
        string answer;
        getline(cin, answer);
        vector<string> splitedString = splitString(answer, " ");
        int age = stoi(splitedString[0]);
        bool gender = splitedString[1] == "male" ? true : false;
        if (splitedString.size() == 3)
        {
            string style = splitedString[2];
            if (map.find(style) == map.end())
            {
                map[style] = {style};
            }
            map[style].computeMinMax(gender, age);
        }
        else
        {
            string answer = "None";
            for (auto &it : map)
            {
                MusicStyle value = it.second;
                if (value.isInMinMax(gender, age))
                {
                    answer = it.first;
                    break;
                }
            }
            cout << answer << '\n';
        }
    }
}
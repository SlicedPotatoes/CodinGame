#include <algorithm>
#include <iostream>
#include <stack>
#include <string>
#include <vector>

using namespace std;

int main()
{
    string expression;
    cin >> expression;
    cin.ignore();

    stack<char> sta;

    for (int i = 0; i < expression.size(); i++)
    {
        char c = expression[i];

        if (c == '(' || c == '[' || c == '{')
        {
            sta.push(c);
            continue;
        }

        if (c == ')' || c == ']' || c == '}')
        {
            if (!sta.empty())
            {
                if (c == ')' && sta.top() != '(')
                {
                    cout << "false";
                    return 0;
                }
                else if (c == ']' && sta.top() != '[')
                {
                    cout << "false";
                    return 0;
                }
                else if (c == '}' && sta.top() != '{')
                {
                    cout << "false";
                    return 0;
                }

                sta.pop();
            }
            else
            {
                cout << "false";
                return 0;
            }
        }
    }

    if (sta.empty())
    {
        cout << "true";
    }
    else
    {
        cout << "false";
    }
}
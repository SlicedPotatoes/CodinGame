#include <algorithm>
#include <iostream>
#include <stack>
#include <unordered_map>
#include <vector>

using namespace std;

int l;
int h;

struct Point
{
    int x;
    int y;

    bool operator==(const Point &other) const
    {
        return x == other.x && y == other.y;
    }
};

struct PointHasher
{
    size_t operator()(const Point &p) const
    {
        return p.x * l + p.y;
    }
};

vector<Point> dir = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

void dfs(vector<vector<bool>> &MAP, int x, int y, vector<Point> &result)
{
    stack<Point> pile;
    if (MAP[y][x])
    {
        pile.push({x, y});
        MAP[y][x] = false;
    }

    while (!pile.empty())
    {
        Point current = pile.top();
        pile.pop();

        result.push_back(current);
        for (const auto &d : dir)
        {
            int _x = current.x + d.x;
            int _y = current.y + d.y;

            if (_x >= 0 && _x < l && _y >= 0 && _y < h && MAP[_y][_x])
            {
                pile.push({_x, _y});
                MAP[_y][_x] = false;
            }
        }
    }
}

unordered_map<Point, int, PointHasher> cache;
int countSurface(vector<vector<bool>> &MAP, int x, int y)
{
    Point key = {x, y};
    if (cache.find(key) != cache.end())
    {
        return cache[key];
    }

    vector<Point> result;
    dfs(MAP, x, y, result);
    int s = result.size();
    for (const auto &element : result)
    {
        cache[element] = s;
    }
    return s;
}

int main()
{
    cin >> l >> h;
    cin.ignore();

    vector<vector<bool>> MAP(h, vector<bool>(l, false));

    for (int i = 0; i < h; i++)
    {
        string row;
        getline(cin, row);
        for (int j = 0; j < l; j++)
        {
            if (row[j] == 'O')
            {
                MAP[i][j] = true;
            }
        }
    }

    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        int x;
        int y;
        cin >> x >> y;

        cout << countSurface(MAP, x, y) << '\n';
    }
}
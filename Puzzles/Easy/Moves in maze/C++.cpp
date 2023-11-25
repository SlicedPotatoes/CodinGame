#include <algorithm>
#include <iostream>
#include <queue>
#include <string>
#include <vector>

using namespace std;

int w, h;

struct Point
{
    int x, y;
};

vector<Point> dir = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

char depthToChar(int depth)
{
    if (depth < 10)
    {
        return '0' + depth;
    }
    return 'A' + depth - 10;
}

void bfs(int startX, int startY, char **MAP)
{
    queue<Point> q;
    queue<Point> tempQ;
    q.push({startX, startY});

    int depth = 0;

    while (!q.empty())
    {
        Point currentPoint = q.front();
        q.pop();

        if (MAP[currentPoint.y][currentPoint.x] == '.')
        {
            MAP[currentPoint.y][currentPoint.x] = depthToChar(depth);

            for (Point d : dir)
            {
                int x = currentPoint.x + d.x;
                int y = currentPoint.y + d.y;

                x = x < 0 ? w - 1 : (x >= w ? 0 : x);
                y = y < 0 ? h - 1 : (y >= h ? 0 : y);

                tempQ.push({x, y});
            }
        }

        if (q.empty())
        {
            depth++;
            swap(q, tempQ);
        }
    }
}

int main()
{
    cin >> w >> h;
    cin.ignore();

    char **MAP = new char *[h];

    Point start;

    for (int i = 0; i < h; i++)
    {
        MAP[i] = new char[w];

        string row;
        getline(cin, row);

        for (int j = 0; j < w; j++)
        {
            MAP[i][j] = row[j];
            if (row[j] == 'S')
            {
                start = {j, i};
                MAP[i][j] = '.';
            }
        }
    }
    bfs(start.x, start.y, MAP);
    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < w; j++)
        {
            cout << MAP[i][j];
        }
        cout << '\n';
    }
}
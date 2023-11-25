#include <algorithm>
#include <iostream>
#include <queue>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

const int WALLS_VALUE[4][3]{
    {8, 1, 0},  // RIGHT_WALL
    {4, 0, -1}, // TOP_WALL
    {2, -1, 0}, // LEFT_WALL
    {1, 0, 1}   // BOTTOM_WALL
};

class Node
{
  public:
    int x;
    int y;
    vector<Node *> neighbor;
    Node()
    {
    }
};

int bfs(Node *start, Node *end)
{
    int depth = 0;
    unordered_set<Node *> visited;
    queue<Node *> q;
    queue<Node *> tempQueue;
    q.push(start);
    while (true)
    {
        Node *n = q.front();
        q.pop();
        visited.insert(n);
        if (n->x == end->x && n->y == end->y)
        {
            break;
        }
        for (int i = 0; i < n->neighbor.size(); i++)
        {
            Node *_n = n->neighbor[i];
            if (visited.find(_n) == visited.end())
            {
                tempQueue.push(_n);
            }
        }
        if (q.empty())
        {
            if (tempQueue.empty())
            {
                break;
            }
            depth++;
            swap(q, tempQueue);
        }
    }
    return depth;
}

int main()
{
    int xs, ys;
    cin >> xs >> ys;
    cin.ignore();
    int xr, yr;
    cin >> xr >> yr;
    cin.ignore();
    int w, h;
    cin >> w >> h;
    cin.ignore();

    Node map[w][h];

    for (int y = 0; y < h; y++)
    {
        for (int x = 0; x < w; x++)
        {
            map[x][y].x = x;
            map[x][y].y = y;
        }
    }

    for (int y = 0; y < h; y++)
    {
        string l;
        cin >> l;
        cin.ignore();
        for (int x = 0; x < w; x++)
        {
            string hexa = string(1, l[x]);
            int decValue = stoll(hexa, nullptr, 16);
            for (int indexWall = 0; indexWall < 4; indexWall++)
            {
                if (decValue - WALLS_VALUE[indexWall][0] < 0)
                {
                    int _x = x + WALLS_VALUE[indexWall][1];
                    int _y = y + WALLS_VALUE[indexWall][2];
                    map[x][y].neighbor.push_back(&map[_x][_y]);
                }
                else
                {
                    decValue -= WALLS_VALUE[indexWall][0];
                }
            }
        }
    }

    int a = bfs(&map[xs][ys], &map[xr][yr]);
    int b = bfs(&map[xr][yr], &map[xs][ys]);

    cout << a << " " << b;
}
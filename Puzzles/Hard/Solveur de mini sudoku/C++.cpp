#include <algorithm>
#include <cmath>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

const int GRID_SIZE = 4;
const int SQUARE_SIZE = 2;
const int EMPTY = 0;

struct Point
{
    int x, y;
};

class Sudoku
{
  public:
    int **grid;
    vector<Point> history;

    Sudoku(int **grid)
    {
        this->grid = grid;
    }
    void updateCase(int x, int y, int value)
    {
        this->grid[y][x] = value;
        this->history.push_back({x, y});
    }
    void undo()
    {
        Point lastPlay = this->history.back();
        this->grid[lastPlay.y][lastPlay.x] = EMPTY;
        this->history.pop_back();
    }
    Point firstEmpty()
    {
        for (int y = 0; y < GRID_SIZE; y++)
        {
            for (int x = 0; x < GRID_SIZE; x++)
            {
                if (this->grid[y][x] == EMPTY)
                {
                    return {x, y};
                }
            }
        }
        return {-1, -1};
    }
    bool checkRow(int index)
    {
        bool checked[GRID_SIZE] = {false, false, false, false};

        for (int x = 0; x < GRID_SIZE; x++)
        {
            int number = this->grid[index][x];

            if (number == EMPTY)
            {
                continue;
            }

            if (checked[number - 1])
            {
                return false;
            }

            checked[number - 1] = true;
        }

        return true;
    }
    bool checkCol(int index)
    {
        bool checked[GRID_SIZE] = {false, false, false, false};

        for (int y = 0; y < GRID_SIZE; y++)
        {
            int number = this->grid[y][index];

            if (number == EMPTY)
            {
                continue;
            }

            if (checked[number - 1])
            {
                return false;
            }

            checked[number - 1] = true;
        }

        return true;
    }
    bool checkSquare(int index)
    {
        bool checked[GRID_SIZE] = {false, false, false, false};
        int rowOffset = index - (index % SQUARE_SIZE);
        int colOffset = (index % SQUARE_SIZE) * SQUARE_SIZE;

        for (int x = 0; x < SQUARE_SIZE; x++)
        {
            for (int y = 0; y < SQUARE_SIZE; y++)
            {
                int _x = x + colOffset;
                int _y = y + rowOffset;

                int number = this->grid[_y][_x];

                if (number == EMPTY)
                {
                    continue;
                }

                if (checked[number - 1])
                {
                    return false;
                }

                checked[number - 1] = true;
            }
        }

        return true;
    }
    bool isValid()
    {
        for (int i = 0; i < GRID_SIZE; i++)
        {
            if (!this->checkRow(i))
            {
                return false;
            }
            if (!this->checkCol(i))
            {
                return false;
            }
            if (!this->checkSquare(i))
            {
                return false;
            }
        }
        return true;
    }
    bool isEnd()
    {
        Point pos = this->firstEmpty();
        return pos.x == -1 && pos.y == -1;
    }
    vector<int> getPossibleNumber(int x, int y)
    {
        bool checked[GRID_SIZE] = {false, false, false, false};

        for (int _x = 0; _x < GRID_SIZE; _x++)
        {
            int number = this->grid[y][_x];

            if (number == EMPTY)
            {
                continue;
            }

            checked[number - 1] = true;
        }
        for (int _y = 0; _y < GRID_SIZE; _y++)
        {
            int number = this->grid[_y][x];

            if (number == EMPTY)
            {
                continue;
            }

            checked[number - 1] = true;
        }

        int indexSquare = SQUARE_SIZE * floor(y / SQUARE_SIZE) + floor(x / SQUARE_SIZE);
        int rowOffset = indexSquare - (indexSquare % SQUARE_SIZE);
        int colOffset = (indexSquare % SQUARE_SIZE) * SQUARE_SIZE;

        for (int _x = 0; _x < SQUARE_SIZE; _x++)
        {
            for (int _y = 0; _y < SQUARE_SIZE; _y++)
            {
                int __x = _x + colOffset;
                int __y = _y + rowOffset;

                int number = this->grid[__y][__x];

                if (number == EMPTY)
                {
                    continue;
                }

                checked[number - 1] = true;
            }
        }

        vector<int> result;

        for (int i = 0; i < GRID_SIZE; i++)
        {
            if (!checked[i])
            {
                result.push_back(i + 1);
            }
        }

        return result;
    }
};

bool solve(Sudoku sudoku)
{
    if (sudoku.isEnd())
    {
        return sudoku.isValid();
    }

    Point pos = sudoku.firstEmpty();
    vector<int> possibleNumber = sudoku.getPossibleNumber(pos.x, pos.y);

    if (possibleNumber.empty())
    {
        sudoku.undo();
        return false;
    }

    for (int n : possibleNumber)
    {
        sudoku.updateCase(pos.x, pos.y, n);
        if (solve(sudoku))
        {
            return true;
        }
    }
    sudoku.undo();
    return false;
}

int main()
{
    int **grid = new int *[GRID_SIZE];
    for (int y = 0; y < GRID_SIZE; y++)
    {
        grid[y] = new int[GRID_SIZE];
        string line;
        getline(cin, line);
        for (int x = 0; x < GRID_SIZE; x++)
        {
            grid[y][x] = line[x] - '0';
        }
    }

    Sudoku s = {grid};
    solve(s);

    for (int y = 0; y < GRID_SIZE; y++)
    {
        for (int x = 0; x < GRID_SIZE; x++)
        {
            cout << s.grid[y][x];
        }
        cout << '\n';
    }
}
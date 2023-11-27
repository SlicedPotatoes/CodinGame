#include <iostream>
#include <limits>
#include <vector>

constexpr int GRID_SIZE = 3;
constexpr int EMPTY_CELL = -1;
constexpr int MAX_DEPTH = 2;

constexpr int iAPlayer = 0;
constexpr int otherPlayer = 1;

using namespace std;

int whoWinGrid(int (*grid)[GRID_SIZE])
{
    for (size_t i = 0; i < GRID_SIZE; i++)
    {
        // Verifier lignes
        if (grid[i][0] > EMPTY_CELL && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2])
        {
            return grid[i][0];
        }
        // Verifier colones;
        if (grid[0][i] > EMPTY_CELL && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i])
        {
            return grid[0][i];
        }
    }

    // Verifier diagonales
    if (grid[0][0] > EMPTY_CELL && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2])
    {
        return grid[0][0];
    }
    if (grid[2][0] > EMPTY_CELL && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2])
    {
        return grid[2][0];
    }
    return EMPTY_CELL;
}
double scorePlayerGrid(int player, int (*grid)[GRID_SIZE])
{
    double score = 0;
    size_t countRow = 0;
    size_t countCol = 0;
    bool rowValid = true;
    bool colValid = true;
    int valueRow = 0;
    int valueCol = 0;

    // On parcours un axe
    for (size_t index1 = 0; index1 < GRID_SIZE; index1++)
    {
        countRow = 0;
        countCol = 0;
        rowValid = true;
        colValid = true;
        // On parcours l'autre axe
        for (size_t index2 = 0; index2 < GRID_SIZE; index2++)
        {
            valueRow = grid[index1][index2]; // Valeur pour la cellule quand on parcours la ROW
            valueCol = grid[index2][index1]; // Valeur pour la cellule quand on parcours la COL

            // Si la valeur dans la row est l'adversaire, elle est invalide
            if (valueRow != player && valueRow != EMPTY_CELL)
            {
                rowValid = false;
            }
            // Si la valeur dans la col est l'adversaire, elle est invalide
            if (valueCol != player && valueCol != EMPTY_CELL)
            {
                colValid = false;
            }
            // Si la valeur dans la row est le player, on incrémente le compteur
            if (valueRow == player)
            {
                countRow++;
            }
            // Si la valeur dans la col est le player, on inrémente le compteur
            if (valueCol == player)
            {
                countCol++;
            }
        }
        if (rowValid)
        {
            score += (countRow / static_cast<double>(GRID_SIZE));
        }
        if (colValid)
        {
            score += (countCol / static_cast<double>(GRID_SIZE));
        }
    }
    // On parcours les diagonales
    for (int i = 0; i < 2; i++)
    {
        size_t startX = i == 0 ? 0 : GRID_SIZE - 1;
        size_t startY = 0;
        size_t endX = i == 0 ? GRID_SIZE - 1 : 0;
        size_t endY = GRID_SIZE - 1;
        int incX = i == 0 ? 1 : -1;
        int incY = 1;

        int countDiag = 0;

        while (startX != endX && startY != endY)
        {
            int valueDiag = grid[startY][startX];

            if (valueDiag == player)
            {
                countDiag++;
            }
            else if (valueDiag != player && valueDiag != EMPTY_CELL)
            {
                countDiag = 0;
                break;
            }

            startX += incX;
            startY += incY;
        }
        score += (countDiag / static_cast<double>(GRID_SIZE));
    }
    return score;
}

class Point
{
  public:
    int bX, bY, subBX, subBY, x, y;
    Point() = default;
    Point(int x, int y)
    {
        this->x = x;
        this->y = y;

        this->subBX = x % GRID_SIZE;
        this->subBY = y % GRID_SIZE;

        this->bX = (x - subBX) / GRID_SIZE;
        this->bY = (y - subBY) / GRID_SIZE;
    }
};
class SubBoard
{
  public:
    int grid[GRID_SIZE][GRID_SIZE];
    int value;

    SubBoard()
    {
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                this->grid[y][x] = EMPTY_CELL;
            }
        }
        this->value = EMPTY_CELL;
    }
    SubBoard(const SubBoard &other)
    {
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                this->grid[y][x] = other.grid[y][x];
            }
        }
    }
    vector<Point> getPossibleMove()
    {
        vector<Point> moves;

        for (int y = 0; y < GRID_SIZE; y++)
        {
            for (int x = 0; x < GRID_SIZE; x++)
            {
                if (grid[y][x] == EMPTY_CELL)
                {
                    moves.push_back({x, y});
                }
            }
        }

        return moves;
    }
    bool isFull()
    {
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                if (grid[y][x] == -1)
                {
                    return false;
                }
            }
        }
        return true;
    }
    void play(Point p, int player)
    {
        grid[p.subBY][p.subBX] = player;
        value = whoWinGrid(grid);
    }
};
class Board
{
  public:
    SubBoard grid[GRID_SIZE][GRID_SIZE];

    Board() = default;

    Board(const Board &other)
    {
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                this->grid[y][x] = other.grid[y][x];
            }
        }
    }

    vector<Point> getPossibleMove(Point p)
    {
        vector<Point> moves;

        if (grid[p.subBY][p.subBX].value != -1 || p.x == -1)
        {
            for (int y = 0; y < GRID_SIZE; y++)
            {
                for (int x = 0; x < GRID_SIZE; x++)
                {
                    if (grid[y][x].value == EMPTY_CELL)
                    {
                        vector<Point> moveSubGrid = grid[y][x].getPossibleMove();
                        for (Point move : moveSubGrid)
                        {
                            moves.push_back({move.x + (GRID_SIZE * x), move.y + (GRID_SIZE * y)});
                        }
                    }
                }
            }
        }
        else
        {
            for (int y = 0; y < GRID_SIZE; y++)
            {
                for (int x = 0; x < GRID_SIZE; x++)
                {
                    if (grid[p.subBY][p.subBX].grid[y][x] == EMPTY_CELL)
                    {
                        moves.push_back({x + (GRID_SIZE * p.subBX), y + (GRID_SIZE * p.subBY)});
                    }
                }
            }
        }

        return moves;
    }
    bool isFull()
    {
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                if (grid[y][x].value == -1)
                {
                    return false;
                }
            }
        }
        return true;
    }
    int whoWin()
    {
        int grid[GRID_SIZE][GRID_SIZE];

        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                grid[y][x] = this->grid[y][x].value;
            }
        }

        return whoWinGrid(grid);
    }
    void play(Point p, int player)
    {
        grid[p.bY][p.bX].play(p, player);
    }
};
class Node
{
  public:
    Board board;
    int depth;

    Node(int depth, Board board)
    {
        this->depth = depth;
        this->board = board;
    }
    Node(const Node &other) = default;

    double scorePlayer(int player, int (*mainGrid)[GRID_SIZE])
    {
        double score = 0;
        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                if (mainGrid[y][x] == EMPTY_CELL)
                {
                    mainGrid[y][x] = player;
                    score += scorePlayerGrid(player, board.grid[y][x].grid) * scorePlayerGrid(player, mainGrid);
                    mainGrid[y][x] = EMPTY_CELL;
                }
            }
        }
        return score;
    }

    double scoreHeuristique(int winner)
    {
        if (winner == iAPlayer)
        {
            return 10000 - depth;
        }
        else if (winner == otherPlayer)
        {
            return -10000 + depth;
        }

        int mainGrid[GRID_SIZE][GRID_SIZE];

        for (size_t y = 0; y < GRID_SIZE; y++)
        {
            for (size_t x = 0; x < GRID_SIZE; x++)
            {
                mainGrid[y][x] = board.grid[y][x].value;
            }
        }

        double scoreP1 = scorePlayer(iAPlayer, mainGrid);
        double scoreP2 = scorePlayer(otherPlayer, mainGrid);

        return scoreP1 - scoreP2;
    }
};
double alphabeta(Node n, double alpha, double beta, bool isMaximizing, Point lastMove)
{
    int whoWin = n.board.whoWin();
    if (whoWin != -1 || n.depth == MAX_DEPTH || n.board.isFull())
    {
        return n.scoreHeuristique(whoWin);
    }
    vector<Point> availableCase = n.board.getPossibleMove(lastMove);
    if (isMaximizing)
    {
        double bestScore = numeric_limits<double>::lowest();

        for (Point cell : availableCase)
        {
            Node child = n;
            child.depth++;
            child.board.play(cell, iAPlayer);
            double score = alphabeta(child, alpha, beta, false, cell);
            bestScore = max(bestScore, score);
            if (bestScore >= beta)
            {
                return bestScore;
            }
            alpha = max(alpha, bestScore);
        }
        return bestScore;
    }
    else
    {
        double bestScore = numeric_limits<double>::max();
        for (Point cell : availableCase)
        {
            Node child = n;
            child.depth++;
            child.board.play(cell, otherPlayer);
            double score = alphabeta(child, alpha, beta, true, cell);
            bestScore = min(bestScore, score);
            if (alpha >= bestScore)
            {
                return bestScore;
            }
            beta = min(beta, bestScore);
        }
        return bestScore;
    }
}

Point botMove(Board b, Point lastMove)
{
    double bestScore = numeric_limits<double>::lowest();
    Point d;
    vector<Point> availableMove = b.getPossibleMove(lastMove);
    for (Point p : availableMove)
    {
        Node n = {0, b};
        n.board.play(p, iAPlayer);
        double score = alphabeta(n, numeric_limits<double>::lowest(), numeric_limits<double>::max(), false, p);
        if (score > bestScore)
        {
            bestScore = score;
            d = p;
        }
    }
    return d;
}

int main()
{
    Board b;
    // game loop
    while (1)
    {
        int opponent_row;
        int opponent_col;
        cin >> opponent_row >> opponent_col;
        cin.ignore();
        int valid_action_count;
        cin >> valid_action_count;
        cin.ignore();
        for (int i = 0; i < valid_action_count; i++)
        {
            int row;
            int col;
            cin >> row >> col;
            cin.ignore();
        }

        if (opponent_row != -1 && opponent_col != -1)
        {
            Point p = {opponent_col, opponent_row};
            b.play(p, otherPlayer);
        }

        Point m = botMove(b, {opponent_col, opponent_row});

        b.play(m, iAPlayer);
        cerr << opponent_col << " " << opponent_row << '\n';
        cout << m.y << " " << m.x << endl;
    }
}
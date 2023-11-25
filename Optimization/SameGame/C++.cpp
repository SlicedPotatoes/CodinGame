#include <algorithm>
#include <cmath>
#include <iostream>
#include <map>
#include <queue>
#include <string>
#include <unordered_set>
#include <vector>

using namespace std;

const int GRID_SIZE = 15;  // Taille constante de la grille de jeu.
const int BEAM_WIDTH = 13; // Largeur du faisceau utilisée dans l'algorithme de recherche de faisceau (BEAM SEARCH).
const int MAX_DEPTH = 6;   // Profondeur maximale autorisée pour la recherche.
const int EMPTY_CELL = -1; // Représente l'état d'une cellule vide dans la grille.

map<string, double> POIDS_HEURISTIQUE{{"score", 1}, {"next", 0.5}};

// Classe représentant une coordonnée sur un plan 2D.
class Point
{
  public:
    int x; // Coordonnée de l'abscisse X.
    int y; // Coordonnée de l'ordonnée Y.

    // Constructeur par défaut.
    Point() = default;

    // Constructeur pour initialiser X et Y.
    Point(int x, int y) : x(x), y(y)
    {
    }
    // Retourne la valeur du Point pour un tableau 1D, en fonction de la taille de la grille.
    int getPoint1D()
    {
        return y * GRID_SIZE + x;
    }
};
// Représente un groupe de couleurs adjacentes.
class ColorGroup
{
  public:
    Point clickPos;     // Position du groupe de couleurs (point de clic initial).
    vector<Point> list; // Liste des points du groupe de couleurs.
    int score;          // Score obtenu en cassant ce groupe de couleurs.

    // Constructeur
    ColorGroup(Point clickPos, vector<Point> list, int score) : clickPos(clickPos), list(list), score(score)
    {
    }
};

const Point DIR[4] = {
    {-1, 0}, // Déplacement vers la gauche.
    {1, 0},  // Déplacement vers la droite.
    {0, -1}, // Déplacement vers le haut.
    {0, 1}   // Déplacement vers le bas.
};

// Fonction qui retourne un groupe de couleurs à partir d'une position donnée (x, y) dans la grille.
vector<Point> getOneGroup(Point start, bool *inGroupGrid, int *grid)
{
    vector<Point> group;    // Stocke la liste des points du groupe de couleurs.
    queue<Point> q;         // Queue pour l'exploration.
    q.push(start);          // Ajoute le point de départ à la queue.
    group.push_back(start); // Ajoute le point de départ au groupe.

    // Tant que la queue n'est pas vide.
    while (!q.empty())
    {
        // On récupère le premier élément de la queue.
        Point currentPoint = q.front();
        q.pop();

        // Pour tous les voisins du point actuel.
        for (auto direction = DIR; direction != DIR + 4; ++direction)
        {
            // On ajoute la différence sur chaque axe de la direction pour créer les coordonnées du voisin.
            Point neighbor = {currentPoint.x + direction->x, currentPoint.y + direction->y};

            // On vérifie si les coordonnées se trouvent dans la limite du tableau.
            if (neighbor.x >= 0 && neighbor.x < GRID_SIZE && neighbor.y >= 0 && neighbor.y < GRID_SIZE)
            {
                // Si le voisin a la même couleur que le point actuel et qu'il ne se trouve pas déjà dans un groupe.
                if (grid[currentPoint.getPoint1D()] == grid[neighbor.getPoint1D()] &&
                    !inGroupGrid[neighbor.getPoint1D()])
                {
                    inGroupGrid[neighbor.getPoint1D()] = true; // On définie ce point comme appartenant à un groupe.
                    group.push_back(neighbor);                 // On insère le point dans la liste de ce groupe.
                    q.push(neighbor);                          // On ajoute le point à la queue.
                }
            }
        }
    }
    return group;
}
// Fonction qui retourne la liste des groupes de couleurs pour une grille donnée.
vector<ColorGroup> getColorGroups(int *grid)
{
    vector<ColorGroup> colorGroups; // Liste des groupes de couleurs.
    bool *inGroupGrid =
        new bool[GRID_SIZE * GRID_SIZE]; // Tableau de bool pour marqué si une coordonnée ce trouve dans un groupe.
    generate(inGroupGrid, inGroupGrid + GRID_SIZE * GRID_SIZE, []() { return false; });
    // Parcours de la grille.
    for (int y = 0; y < GRID_SIZE; y++)
    {
        for (int x = 0; x < GRID_SIZE; x++)
        {
            Point p = {x, y}; // Création du point de départ.
            // Si on est sur une cellule n'est pas vide, et n'est pas marqué comme appartenant a un groupe.
            if (grid[p.getPoint1D()] != EMPTY_CELL && !inGroupGrid[p.getPoint1D()])
            {
                inGroupGrid[p.getPoint1D()] = true; // On marque cette coordonnée comme appartenant à un groupe.
                vector<Point> v =
                    getOneGroup(p, inGroupGrid, grid); // Récupération de la liste des points pour ce groupe de couleur.
                int score = pow(v.size() - 2, 2);      // Calcul du score de ce groupe.
                // Si le groupe possède plus d'une case, on l'ajoute dans la liste des groupes.
                if (v.size() > 1)
                {
                    colorGroups.push_back({p, v, score});
                }
            }
        }
    }

    return colorGroups;
}

// Classe Node représentant l'état du jeu à un instant T, utilisée pour la recherche de solution.
class Node
{
  public:
    int *grid; // Grille du  jeu.
    int score; // Somme des scores des mouvements se trouvant dans history.
    double heuristique;
    bool end = false;           // Indique si le jeu est dans un état final.
    vector<ColorGroup> history; // Historique des coups joués.
    vector<ColorGroup> groupsColors;

    // Constructeur pour initialiser score et grid.
    Node(int score, int *grid) : score(score), grid(grid)
    {
        heuristique = 0;
    }

    // Met à jour la grille du jeu en fonction d'un coup joué.
    void update(ColorGroup cg)
    {
        // Pour tous les points du groupe de couleurs, dans la grille, mettre EMPTY_CELL à ces coordonnées.
        for (auto it = cg.list.begin(); it != cg.list.end(); ++it)
        {
            grid[it->getPoint1D()] = EMPTY_CELL;
        }

        // Faire descendre les éléments de la grille.
        int writeIndex = -1;
        int cellValue = -1;
        for (int x = 0; x < GRID_SIZE; x++)
        {
            writeIndex = 0;
            for (int y = 0; y < GRID_SIZE; y++)
            {
                cellValue = grid[y * GRID_SIZE + x];
                if (cellValue != EMPTY_CELL)
                {
                    grid[writeIndex * GRID_SIZE + x] = cellValue;
                    if (writeIndex != y)
                    {
                        grid[y * GRID_SIZE + x] = EMPTY_CELL;
                    }
                    writeIndex++;
                }
            }
        }
        // Décaler vers la gauche s'il y a une case vide à Y = 0.
        int gapEnd = -1;
        for (int x = 0; x < GRID_SIZE; x++)
        {
            if (grid[x] == EMPTY_CELL)
            {
                gapEnd = x + 1;

                while (gapEnd < GRID_SIZE && grid[gapEnd] == EMPTY_CELL)
                {
                    gapEnd++;
                }

                if (gapEnd == GRID_SIZE)
                {
                    break;
                }

                for (int y = 0; y < GRID_SIZE; y++)
                {
                    grid[y * GRID_SIZE + x] = grid[y * GRID_SIZE + gapEnd];
                    grid[y * GRID_SIZE + gapEnd] = EMPTY_CELL;
                }
            }
        }

        score += cg.score; // Ajout du score du coup.

        // Si la grille est vide, ajouter 1000 au score et définir end à true.
        if (grid[0] == EMPTY_CELL)
        {
            end = true;
            score += 1000;
        }
        history.push_back(cg);
        groupsColors = getColorGroups(grid);
        heuristique = score * POIDS_HEURISTIQUE["score"];
        int max = -1;
        for (int i = 0; i < groupsColors.size(); i++)
        {
            if (groupsColors[i].score > max)
            {
                max = groupsColors[i].score;
            }
        }
        heuristique += max * POIDS_HEURISTIQUE["next"];
    }
    // Opérateur de comparaison pour les priority_queue.
    bool operator<(const Node &n) const
    {
        return heuristique < n.heuristique;
    }
};

// Fonction qui fait une deep copy d'une Node.
Node deepCopy(Node &n)
{
    // Allocation dynamique pour la nouvelle grille.
    int *grid = new int[GRID_SIZE * GRID_SIZE];
    // Copie des éléments dans la nouvelle grille.
    copy(n.grid, n.grid + GRID_SIZE * GRID_SIZE, grid);

    // Création de la nouvelle instance de Node avec la liste d'initialisation.
    Node newNode(n.score, grid);

    // Copie des groupes de couleurs de l'historique.
    newNode.history.insert(newNode.history.end(), n.history.begin(), n.history.end());

    return newNode;
}
// Fonction qui cherche le meilleur coup à jouer pour une grille donnée.
Point beamSearch(int *grid)
{
    priority_queue<Node> pq;
    Node bestNode = {0, grid};
    bestNode.groupsColors = getColorGroups(bestNode.grid);
    pq.push(bestNode);

    int depth = 0;

    while (!pq.empty())
    {

        priority_queue<Node> tempPQ;

        // Limite la largeur du faisceau à BEAM_WIDTH ou à la taille actuelle de la file de priorité.
        size_t beamWidth = min(static_cast<size_t>(pq.size()), static_cast<size_t>(BEAM_WIDTH));

        // Parcours des meilleurs noeuds actuels.
        for (size_t i = 0; i < beamWidth; i++)
        {
            Node currentNode = pq.top();
            pq.pop();

            // Mise à jour du meilleur noeud.
            if (currentNode.score > bestNode.score ||
                (currentNode.score == bestNode.score && currentNode.history.size() > bestNode.history.size()))
            {
                bestNode = currentNode;
            }

            // Si le noeud actuel indique la fin du jeu, on passe au noeud suivant.
            if (currentNode.end)
            {
                continue;
            }

            // Création des enfants et ajout à la nouvelle file de priorité temporaire.
            for (ColorGroup cg : currentNode.groupsColors)
            {
                Node child = deepCopy(currentNode);
                child.update(cg);
                tempPQ.push(child);
            }
        }
        depth++;     // Mise à jour de la profondeur.
        pq = tempPQ; // Mise à jour de la file de priorité principale.

        // Si la profondeur maximale est atteinte, sortir de la boucle.
        if (depth == MAX_DEPTH)
        {
            break;
        }
    }
    return bestNode.history[0].clickPos;
}

int main()
{
    while (1)
    {
        int *grid = new int[GRID_SIZE * GRID_SIZE];
        for (int y = GRID_SIZE - 1; y >= 0; y--)
        {
            for (int x = 0; x < GRID_SIZE; x++)
            {
                int color;
                cin >> color;
                cin.ignore();
                grid[y * GRID_SIZE + x] = color;
            }
        }
        /*for(int i = 0; i < GRID_SIZE; i++){
            for(int j = 0; j < GRID_SIZE; j++)
            {
                cerr << grid[i * GRID_SIZE + j] << " ";
            }
        }*/
        Point bestMove = beamSearch(grid);

        cout << bestMove.x << " " << bestMove.y << " BeamSearch !!\n";
    }
}
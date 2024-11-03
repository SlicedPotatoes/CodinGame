#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

/*
    Permet de gérer les différents cas en fonction de la direction facilement

    dy et dx servent à calculer les prochaines coordonnées

    dn permet de récupérer facilement le caractère horizontal ou vertical en fonction de la direction du déplacement

    tail a la même fonction que dn, sauf que c'est pour le caractère représentant la queue
*/
vector<int> dy = {0, 1, 0, -1};
vector<int> dx = {1, 0, -1, 0};
vector<char> dn = {'-', '|', '-', '|'};
vector<char> tail = {'>', 'v', '<', '^'};

int dfs(vector<string> &map, int y, int x)
{
    char curr = map[y][x]; // Sauvegarde temporairement la case actuelle
    map[y][x] = '.';       // Marque la case comme visité

    // Si la case actuelle contient la queue du serpent, retourne 1
    if (curr == 'v' || curr == '<' || curr == '>' || curr == '^')
    {
        return 1;
    }

    // Parcours les 4 voisins
    for (int d = 0; d < 4; d++)
    {
        // Calcul des coordonnées du voisin
        int _y = y + dy[d];
        int _x = x + dx[d];

        // Si les coordonnées sont hors map, on passe à l'itération suivante
        if (!(_y >= 0 && _y < map.size() && _x >= 0 && _x < map[0].size()))
        {
            continue;
        }

        // Caractère contenu dans le voisin
        char next = map[_y][_x];

        // Si l'élément de la case actuelle est '*' ou 'o', il peut seulement être suivi par une barre verticale ou
        // horizontale
        if ((curr == '*' || curr == 'o') && next == dn[d])
        {
            return dfs(map, _y, _x) + 1;
        }
        // Si l'élément actuel est une barre horizontale ou verticale, alors l'élément suivant est soit la même barre,
        // '*', 'o' ou la queue
        if (curr == dn[d] && (next == dn[d] || next == '*' || next == 'o' || next == tail[d]))
        {
            return dfs(map, _y, _x) + 1;
        }
    }

    return -1;
}

int main()
{
    int n;
    int m;
    cin >> n >> m;
    cin.ignore();

    vector<string> map; // Contient les éléments de la carte

    for (int i = 0; i < n; i++)
    {
        string t;
        getline(cin, t);

        map.push_back(t);
    }

    int maxSize = 0; // Contient la taille du plus grand serpent
    int count = 0;   // Contient le nombre de serpents avec la plus grande taille

    // Parcours chaque case de la carte, quand la tête d'un serpent est trouvée, exécute un DFS pour trouver la taille
    // de celui-ci
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (map[i][j] == 'o')
            {
                int result = dfs(map, i, j);

                if (result > maxSize)
                {
                    maxSize = result;
                    count = 1;
                }
                else if (result == maxSize)
                {
                    count++;
                }
            }
        }
    }

    cout << maxSize << endl << count << endl;
}
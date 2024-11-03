#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

/*
  Structure pour stocker une pomme:
  y: ligne dans la map
  x: colonne dans la map
  name: nom de la pomme

  print: afficher les informations de la pomme pour debug
*/
struct Apple
{
  public:
    int y;
    int x;

    string name;

    Apple(int y, int x, string name) : y(y), x(x), name(name)
    {
    }

    void print()
    {
        cerr << "Y: " << this->y << " X: " << this->x << " Name: " << this->name << endl;
    }
};

// Recherche binaire pour trouver l'élément le plus a droite pour une ligne donné
int binarySearch(vector<Apple> &apples, int row)
{
    int start = 0;
    int end = apples.size() - 1;

    while (start <= end)
    {
        int mid = end - (end - start) / 2;

        if (apples[mid].y <= row)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return end;
}

int main()
{
    vector<Apple> apples;

    // Récupération des pommes
    int n;
    cin >> n;
    cin.ignore();
    for (int i = 0; i < n; i++)
    {
        string name;
        int r;
        int c;
        cin >> name >> r >> c;
        cin.ignore();

        apples.push_back({r, c, name});
    }

    // Trie des pommes
    sort(apples.begin(), apples.end(), [](Apple &a, Apple &b) {
        if (a.y == b.y)
        {
            return a.x < b.x;
        }
        return a.y < b.y;
    });

    /*for(Apple &a : apples){
        a.print();
    }*/

    string output = "";
    bool d = false;
    int lastRow = -1;

    // Création du string de sortie
    for (int i = 0; i < apples.size(); i++)
    {
        // Les lignes avec la pommes précédente sont différente, donc on inverse le sens du parcours
        if (lastRow != apples[i].y)
        {
            d = !d;
            lastRow = apples[i].y;
        }

        // Sens de parcours de gauche à droite
        if (d)
        {
            output += apples[i].name + ',';
        }
        // Sens de parcours de droite à gauche
        else
        {
            int last = binarySearch(apples, lastRow);

            for (int _i = last; _i >= i; _i--)
            {
                output += apples[_i].name + ',';
            }

            i = last;
        }
    }

    output.pop_back();
    cout << output << endl;
}
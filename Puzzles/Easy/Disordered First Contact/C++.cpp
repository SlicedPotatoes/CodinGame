#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
// Fonction récursive qui encode un message -n fois (n est négatif)
string encode(string message, int n)
{
  if (n == 0) // Si n == 0, on a fini, on return le resultat
  {
    return message;
  }
  int etape = 1;                // Etape actuel de l'encodage
  string output = "";           // String de sortie
  while (message.length() != 0) // Tant que le message a encodé n'est pas vide, on continue
  {
    string s;
    if (etape < message.length()) // Si l'etape actuel a une valeur inférieur a la longueur restante du message
    {
      s = message.substr(0, etape);    // On récupére une sous chaine de "etape" charactere depuis l'indice 0
      message = message.substr(etape); // Et on enléve cette sous chaine au message d'origine
    }
    else // Sinon on récupére le reste du message a encodé
    {
      s = message;
      message = "";
    }
    if (etape % 2 != 0) // Sinon on récupére le reste du message a encodé
    {
      output = output + s;
    }
    else // Sinon on ajoute au debut de l'output la sous chaine "s"
    {
      output = s + output;
    }
    etape++;
  }
  return encode(output, n + 1);
}
// Fonction qui sera utilisé dans le décodage et qui récupérera le nombre d'etape et la somme de celle ci
// Pour trouvez le nombre de lettre restante a la derniere etape
int *findMaxEtape(int n)
{
  int *output = new int[2]; // output[0] == etape; output[1] == somme;
  while (output[1] < n)
  {
    output[0]++;
    output[1] += output[0];
  }
  output[1] -= output[0];
  output[0] -= 1;
  return output;
}
// Fonction récursive qui decode le message n fois
string decode(string message, int n)
{
  if (n == 0)
  {
    return message;
  }
  int *maxEtape = findMaxEtape(message.length()); // maxEtape[0] == etape; maxEtape[1] == somme;
  string output = "";                             // String de sortie
  /*
      Ce block permet de géré la derniere etape de l'encodage (et donc la premiere du decodage) qui consiste a
      ne pas se basé sur l'etape actuel pour le nombre de caractére mais plutot les dernieres restant
  */
  int pos = message.length() - maxEtape[1];
  if (pos != 0)
  {
    if (maxEtape[0] % 2 == 0)
    {
      output = message.substr(maxEtape[1]) + output;
      message = message.substr(0, maxEtape[1]);
    }
    else
    {
      output = message.substr(0, pos) + output;
      message = message.substr(pos);
    }
  }

  while (message.length() != 0) // Tant que le message a encodé n'est pas vide, on continue
  {
    if (maxEtape[0] % 2 == 0) // Si on est a une etape pair on récupére du debut du message
    {
      output = message.substr(0, maxEtape[0]) + output;
      message = message.substr(maxEtape[0]);
    }
    else // Sinon on récupére de la fin du message
    {
      output = message.substr(message.length() - maxEtape[0]) + output;
      message = message.substr(0, message.length() - maxEtape[0]);
    }
    maxEtape[0]--;
  }
  return decode(output, n - 1);
}
int main()
{
  int n;
  cin >> n;
  cin.ignore();
  string message;
  getline(cin, message);

  if (n > 0)
  {
    cout << decode(message, n) << endl;
  }
  else
  {
    cout << encode(message, n) << endl;
  }
}
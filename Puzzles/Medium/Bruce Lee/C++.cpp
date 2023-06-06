#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

// Fonction split qui prend en parametre un string et un delimiter et qui retourne un vector<string> du string splitté par rapport au delimiter
vector<string> split(const string &str, char delimiter)
{
  vector<string> tokens;
  string token;
  istringstream tokenStream(str);

  while (getline(tokenStream, token, delimiter))
  {
    tokens.push_back(token);
  }

  return tokens;
}
// Fonction qui convertie un tableau de int (qui représente un code binaire, remplis de 0 et 1) en décimal
int binaryToDecimal(const int *binary)
{
  int decimal = 0;
  int power = 1;

  for (int i = 7 - 1; i >= 0; --i)
  {
    if (binary[i] == 1)
    {
      decimal += power;
    }

    power *= 2;
  }

  return decimal;
}
int invalidInput()
{
  cout << "INVALID" << endl;
  return 0;
}

int main()
{
  string encrypt;
  getline(cin, encrypt);
  vector<string> splitedEncrypt = split(encrypt, ' ');
  int bytes[7] = {0, 0, 0, 0, 0, 0, 0}, countByte = 0;
  string answer = "";
  while (splitedEncrypt.size() >= 2)
  {
    // Récupére le premier element du tableau qui représente le digit (00 pour 0 et 0 pour 1)
    string digit = splitedEncrypt.front();
    splitedEncrypt.erase(splitedEncrypt.begin());

    // Récupére le premier element du tableau qui représente le nombre de fois que le digit est présent
    string nbOccurrence = splitedEncrypt.front();
    splitedEncrypt.erase(splitedEncrypt.begin());

    // Si le digit n'est pas "00" ou "0" c'est qu'il est invalide
    if (digit != "00" && digit != "0")
    {
      return invalidInput();
    }

    for (int i = 0; i < nbOccurrence.length(); i++)
    {
      // Si un char n'est pas '0', l'input est invalide
      if (nbOccurrence[i] != '0')
      {
        return invalidInput();
      }
      bytes[countByte] = digit == "00" ? 0 : 1; // On ajoute 0 ou 1 en fonction du digit au tableau de char
      countByte++;                              // Puis on incrémente l'index du tableau de char
      // Si l'index est egale a 7, on convertie en decimal le nombre binaire et on l'ajoute a la réponse que le programme retourne
      // On remet l'index du tableau de byte a 0
      if (countByte == 7)
      {
        answer += binaryToDecimal(bytes);
        countByte = 0;
      }
    }
  }
  // Vu que le tableau splitter est censé etre par pair, si ca longueur n'est pas egale 0 l'input est invalide
  // Pareil, si countByte n'est pas egale a 0, c'est qu'il y a des données inutiles dans l'input, il est donc invalide
  if (splitedEncrypt.size() != 0 || countByte != 0)
  {
    return invalidInput();
  }

  cout << answer << endl;
}
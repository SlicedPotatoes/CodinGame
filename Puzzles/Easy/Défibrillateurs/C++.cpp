#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;
struct defib
{
  int id;
  string nom;
  string adr;
  string num;
  double lon;
  double lat;
};
double getDouble(string s)
{
  int length = s.length();
  for (int i = 0; i < length; i++)
  {
    if (s[i] == ',')
    {
      s[i] = '.';
      break;
    }
  }
  return stod(s);
}

defib getDefib(string s)
{
  int stringLength = s.length();
  string values[5];
  int index = 0;
  string value = "";
  for (int i = 0; i < stringLength; i++)
  {
    if (s[i] != ';')
    {
      value += s[i];
    }
    else
    {
      values[index] = value;
      index++;
      value = "";
    }
  }
  defib d;
  d.id = stoi(values[0]);
  d.nom = values[1];
  d.adr = values[2];
  d.num = values[3];
  d.lon = getDouble(values[4]);
  d.lat = getDouble(value);
  return d;
}

double distance(double lat, double lon, defib d)
{
  double x = (lon - d.lon) * cos((d.lat + lat) / 2);
  double y = lat - d.lat;
  return sqrt(pow(x, 2) + pow(y, 2)) * 6371;
}

int main()
{
  string _lon, _lat;
  cin >> _lon;
  cin >> _lat;
  int n;
  cin >> n;
  cin.ignore();
  double lon = getDouble(_lon), lat = getDouble(_lat);
  double minD = 1000 * 1000 * 1000;
  defib def;
  for (int i = 0; i < n; i++)
  {
    string _defib;
    getline(cin, _defib);
    defib d = getDefib(_defib);
    double dis = distance(lat, lon, d);
    if (dis < minD)
    {
      minD = dis;
      def = d;
    }
  }
  cout << def.nom << endl;
}
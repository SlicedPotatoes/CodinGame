#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main()
{
  int n;
  scanf("%d", &n);
  int minAbs = 5526;
  int minValue = 5526;
  for (int i = 0; i < n; i++)
  {
    int t;
    scanf("%d", &t);
    if (abs(t) < minAbs)
    {
      minAbs = abs(t);
      minValue = t;
    }
    else if (abs(t) == minAbs && t > 0)
    {
      minValue = t;
    }
  }
  printf("%d", n == 0 ? 0 : minValue);
  return 0;
}
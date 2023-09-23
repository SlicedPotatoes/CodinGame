#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main()
{
  while (1)
  {
    int max = -1;
    int index = -1;
    for (int i = 0; i < 8; i++)
    {
      int mountain_h;
      scanf("%d", &mountain_h);
      if (mountain_h > max)
      {
        max = mountain_h;
        index = i;
      }
    }
    printf("%d", index);
    printf("\n");
  }
  return 0;
}
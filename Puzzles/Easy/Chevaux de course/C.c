#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int compare(const void *a, const void *b)
{
  int int_a = *((int *)a);
  int int_b = *((int *)b);

  return int_b - int_a;
}
int abs(int a)
{
  if (a > 0)
  {
    return a;
  }
  return -a;
}

int main()
{
  int N;
  scanf("%d", &N);

  int array[N];

  for (int i = 0; i < N; i++)
  {
    int pi;
    scanf("%d", &pi);
    array[i] = pi;
  }

  qsort(array, N, sizeof(int), compare);
  int diff = 10000000;
  for (int i = 0; i < N - 1; i++)
  {
    int _abs = abs(array[i] - array[i + 1]);
    if (_abs < diff)
    {
      diff = _abs;
    }
  }

  printf("%d\n", diff);

  return 0;
}
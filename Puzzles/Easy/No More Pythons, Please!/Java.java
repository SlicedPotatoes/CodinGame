// Portage du code C++ vers Java

import java.util.*;

class Solution {

  static int[] dy = { 0, 1, 0, -1 };
  static int[] dx = { 1, 0, -1, 0 };
  static char[] dn = { '-', '|', '-', '|' };
  static char[] tail = { '>', 'v', '<', '^' };

  public static int dfs(char[][] map, int y, int x) {
    char curr = map[y][x];
    map[y][x] = '.';

    if (curr == 'v' || curr == '<' || curr == '>' || curr == '^') {
      return 1;
    }

    for (int d = 0; d < 4; d++) {
      int _y = y + dy[d];
      int _x = x + dx[d];

      if (!(_y >= 0 && _y < map.length && _x >= 0 && _x < map[0].length)) {
        continue;
      }

      char next = map[_y][_x];

      if ((curr == '*' || curr == 'o') && next == dn[d]) {
        return dfs(map, _y, _x) + 1;
      }
      if (curr == dn[d] && (next == dn[d] || next == '*' || next == dn[d] || next == tail[d])) {
        return dfs(map, _y, _x) + 1;
      }
    }

    return -1;
  }

  public static void main(String args[]) {
    Scanner in = new Scanner(System.in);
    int N = in.nextInt();
    int M = in.nextInt();

    char[][] map = new char[N][M];

    if (in.hasNextLine()) {
      in.nextLine();
    }
    for (int i = 0; i < N; i++) {
      String T = in.nextLine();

      for (int j = 0; j < M; j++) {
        map[i][j] = T.charAt(j);
      }
    }

    int maxSize = 0;
    int count = 0;

    for (int i = 0; i < N; i++) {
      for (int j = 0; j < M; j++) {
        if (map[i][j] == 'o') {
          int result = dfs(map, i, j);

          if (result > maxSize) {
            maxSize = result;
            count = 1;
          } else if (result == maxSize) {
            count++;
          }
        }
      }
    }

    System.out.println(maxSize);
    System.out.println(count);

    in.close();
  }
}
#include <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    int n;
    int minAbs = 5526;
    int minValue = 5526;
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        int t;
        scanf("%d", &t);
        if(abs(t) < minAbs){
            minAbs = abs(t);
            minValue = t;
        }
        else if (abs(t) == minAbs && t > 0){
            minValue = t;
        }
    }
    printf("%d", n == 0 ? 0 : minValue);
}
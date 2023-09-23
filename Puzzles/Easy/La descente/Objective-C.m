#include <Foundation/Foundation.h>
int main(int argc, const char * argv[]) {
    while (1) {
        int max = -1;
        int index = -1;
        for (int i = 0; i < 8; i++) {
            int mountainH;
            scanf("%d", &mountainH);
            if(mountainH > max){
                max = mountainH;
                index = i;
            }
        }
        printf("%d\n", index);
    }
}
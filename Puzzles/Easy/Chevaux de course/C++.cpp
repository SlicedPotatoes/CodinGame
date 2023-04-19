#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

static const int MAX = 100000;
static const int MAX_PUISSANCE = 10000000;

int main()
{
    int n;
    int array[MAX];
    cin >> n; cin.ignore();
    for (int i = 0; i < n; i++) {
        cin >> array[i]; cin.ignore();
    }
    sort(array, array + n);
    int diff = MAX_PUISSANCE;
    for(int i = 0; i < n-1; i++){
        int d = array[i+1] - array[i];
        if(d < diff){
            diff = d;
        }
    }
    cout << diff  << endl;
}
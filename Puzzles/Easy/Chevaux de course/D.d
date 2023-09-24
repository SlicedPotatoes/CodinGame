import std;

void main()
{
    int N = readln.chomp.to!int;

    int[] array = new int[N];

    for (int i = 0; i < N; i++) {
        int pi = readln.chomp.to!int;
        array[i] = pi;
    }

    array.sort();
    
    int diff = 10000000;
    
    for(int i = 0; i < N-1; i++){
        int a = array[i+1] - array[i];
        if(a < diff){
            diff = a;
        }
    }

    writeln(diff);
}
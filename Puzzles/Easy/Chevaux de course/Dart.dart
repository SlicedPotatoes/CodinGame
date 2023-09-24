import 'dart:io';

void main() {
    int N = int.parse(stdin.readLineSync()!);
    var array = <int>[];
    int diff = 10000000;
    int i;
    int Pi;
    for (i = 0; i < N; i++) {
        Pi = int.parse(stdin.readLineSync()!);
        array.add(Pi);
    }

    array.sort((a, b) => a-b);
    
    int a;
    for(i = 1; i < N; i++){
      a = array[i] - array[i-1];
      if(diff > a){
        diff = a;
      }
    }

    print(diff);
    exit(0);
}
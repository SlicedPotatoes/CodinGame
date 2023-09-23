import 'dart:io';
import 'dart:math';

String readLineSync() {
  String? s = stdin.readLineSync();
  return s == null ? '' : s;
}

void main() {
    List inputs;
    int n = int.parse(readLineSync());
    inputs = readLineSync().split(' ');
    int minAbs = 5526;
    int minValue = 5526;
    for (int i = 0; i < n; i++) {
        int t = int.parse(inputs[i]);
        if(t.abs() < minAbs){
          minAbs = t.abs();
          minValue = t;
        }
        else if (t.abs() == minAbs && t > 0){
          minValue = t;
        }
    }
    print(n == 0 ? 0 : minValue);
}
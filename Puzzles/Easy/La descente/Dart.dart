import 'dart:io';
import 'dart:math';

String readLineSync() {
  String? s = stdin.readLineSync();
  return s == null ? '' : s;
}

void main() {
    while (true) {
        int max = -1;
        int index = -1;
        for (int i = 0; i < 8; i++) {
            int mountainH = int.parse(readLineSync());
            if(mountainH > max){
              max = mountainH;
              index = i;
            }
        }
        print(index);
    }
}
import std;
void main()
{
    while (1) {
        int max = -1;
        int index = -1;
        for (int i = 0; i < 8; i++) {
            int mountainH = readln.chomp.to!int;
            if(mountainH > max){
                max = mountainH;
                index = i;
            }
        }
        writeln(index);
    }
}
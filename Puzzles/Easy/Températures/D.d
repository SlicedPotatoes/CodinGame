import std;

void main()
{
    int n = readln.chomp.to!int;
    auto inputs = readln.split;

    int minValue = 5526;
    int minAbs = 5526;

    for (int i = 0; i < n; i++) {
        int t = inputs[i].to!int;
        if(abs(t) < minAbs){
            minAbs = abs(t);
            minValue = t;
        }
        else if(abs(t) == minAbs && t > 0){
            minValue = t;
        }
    }

    writeln(n == 0 ? 0 : minValue);
}
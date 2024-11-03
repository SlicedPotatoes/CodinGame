import java.util.*;

class Apple{
    int y;
    int x;
    String name;

    public Apple(int y, int x, String name){
        this.y = y;
        this.x = x;
        this.name = name;
    }

    public void print(){
        System.err.println("Y: " + this.y + " X: " + this.x + " Name: " + this.name);
    }
}
class Solution {
    public static int binarySearch(List<Apple> apples, int row){
        int start = 0;
        int end = apples.size() - 1;

        while(start <= end){
            int mid = end - (end - start) / 2;

            if(apples.get(mid).y <= row){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }

        return end;
    }

    public static void main(String args[]) {
        List<Apple> apples = new ArrayList<Apple>();

        Scanner in = new Scanner(System.in);
        int N = in.nextInt();
        for (int i = 0; i < N; i++) {
            String name = in.next();
            int r = in.nextInt();
            int c = in.nextInt();

            apples.add(new Apple(r, c, name));
        }

        apples.sort((Apple a, Apple b) -> {
            if(a.y == b.y){
                return Integer.compare(a.x, b.x);
            }
            return Integer.compare(a.y, b.y);
        });

        /*for(Apple a : apples){
            a.print();
        }*/

        StringBuilder output = new StringBuilder();
        boolean d = false;
        int lastRow = -1;

        for(int i = 0; i < apples.size(); i++){
            Apple a = apples.get(i);

            if(lastRow != a.y){
                d = !d;
                lastRow = a.y;
            }

            if(d){
                output.append(a.name + ',');
            }
            else{
                int last = binarySearch(apples, lastRow);

                for(int _i = last; _i >= i; _i--){
                    output.append(apples.get(_i).name + ',');
                }

                i = last;
            }
        }

        output.deleteCharAt(output.length() - 1);

        System.out.println(output.toString());
    }
}
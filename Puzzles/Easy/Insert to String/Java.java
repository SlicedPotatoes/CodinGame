// Adaptation du code c++

import java.util.*;

class ParsedChange{
    int row;
    int col;
    String s;

    public ParsedChange(int row, int col, String s){
        this.row = row;
        this.col = col;
        this.s = s;
    }
}

class Solution {
    public static ParsedChange parseChange(String s){
        int f = s.indexOf('|');
        int f1 = s.indexOf('|', f + 1);

        int row = Integer.parseInt(s.substring(0, f));
        int col = Integer.parseInt(s.substring(f + 1, f1));

        String _s = s.substring(f1 + 1);

        StringBuilder str = new StringBuilder();

        for(int i = 0; i < _s.length(); i++){
            if(_s.charAt(i) == 'n' && str.charAt(str.length() - 1) == '\\'){
                str.deleteCharAt(str.length() - 1);
                str.append('\n');
                continue;
            }

            str.append(_s.charAt(i));
        }

        return new ParsedChange(row, col, str.toString());
    }

    public static List<StringBuilder> getText(String s){
        List<StringBuilder> res = new ArrayList<StringBuilder>();
        StringBuilder curr = new StringBuilder();

        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == 'n' && curr.charAt(curr.length() - 1) == '\\'){
                curr.deleteCharAt(curr.length() - 1);
                res.add(curr);
                curr = new StringBuilder();
                continue;
            }

            curr.append(s.charAt(i));
        }

        res.add(curr);
        return res;
    }

    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        String s = in.nextLine();

        int changeCount = in.nextInt();

        List<StringBuilder> text = getText(s);
        List<ParsedChange> pcs = new ArrayList<ParsedChange>();

        if (in.hasNextLine()) {
            in.nextLine();
        }
        for (int i = 0; i < changeCount; i++) {
            String rawChange = in.nextLine();

            pcs.add(parseChange(rawChange));
        }

        pcs.sort((ParsedChange a, ParsedChange b) -> {
            if(a.row == b.row){
                return Integer.compare(b.col, a.col);
            } 
            return Integer.compare(b.row, a.row);
        });

        for(int i = 0; i < pcs.size(); i++){
            ParsedChange a = pcs.get(i);
            text.get(a.row).insert(a.col, a.s);
        }

        for(int i = 0; i < text.size(); i++){
            System.out.println(text.get(i));
        }

        in.close();
    }
}
using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;

class Solution
{
    static void Main(string[] args)
    {
        string expression = Console.ReadLine();
        Console.WriteLine(a(expression).ToString().ToLower());
    }
    
    static bool a(string expr) 
    { 
        Stack<char> s = new Stack<char>(); 
        char x; 
        for (int i=0; i<expr.Length; i++) 
        { 
            if (expr[i]=='('||expr[i]=='['||expr[i]=='{') 
            { 
                s.Push(expr[i]); 
                continue; 
            } 
  
            switch (expr[i]) 
                { 
                case ')':
                    if(s.Count != 0){
                        x = s.Pop(); 
                        if (x=='{' || x=='[') 
                            return false; 
                    }
                    else {
                        return false;
                    }
                    break;
                case '}': 
                    if(s.Count != 0){
                        x = s.Pop(); 
                        if (x=='(' || x=='[') 
                            return false; 
                    }    
                    else{
                        return false;
                    }
                    break; 
                case ']': 
                    if (s.Count != 0){
                        x = s.Pop(); 
                        if (x =='(' || x == '{') 
                            return false;
                    }
                    else{
                        return false;
                    }
                    break; 
                }
        } 
        return (s.Count == 0); 
    }    
}
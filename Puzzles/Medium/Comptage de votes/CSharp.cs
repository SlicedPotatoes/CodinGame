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
        string[] inputs;
        int N = int.Parse(Console.ReadLine());
        int M = int.Parse(Console.ReadLine());
        Votant[] v = new Votant[N];
        string[] lv = new string[N];
        for (int i = 0; i < N; i++)
        {
            inputs = Console.ReadLine().Split(' ');
            string personName = inputs[0];
            int nbVote = int.Parse(inputs[1]);
            v[i] = new Votant(nbVote);
            lv[i] = personName;
        }
        for (int i = 0; i < M; i++)
        {
            inputs = Console.ReadLine().Split(' ');
            string voterName = inputs[0];
            string voteValue = inputs[1];
            int indice = indexNom(voterName, lv, N);
            if (indice != -1){
                if (voteValue == "Yes"){
                v[indice].voteY();
                } else if (voteValue == "No") { v[indice].voteN(); }
            }
        }
        int yes = 0;
        int no = 0;
        for (int i = 0; i < N; i++){
            yes = yes + v[i].voteValideYes();
            no = no + v[i].voteValideNo();
        }

        Console.WriteLine(yes + " " + no);
    }
    
    static int indexNom(string s, string[] lv, int N){
        for (int i = 0;  i < N; i++){
            if (lv[i] == s){
                return i;
            } 
        }
        return -1;
    }
}

class Votant
{
    public int nb_vote;
    public int voteYes;
    public int voteNo;
    
    public Votant(int nb_vote){
        this.nb_vote = nb_vote;
        this.voteYes = 0;
        this.voteNo = 0;
    }
    
    public void voteY(){
        this.voteYes++;
    }
    
    public void voteN(){
        this.voteNo++;
    }
    
    public int voteValideYes(){
        if (this.voteYes + this.voteNo > this.nb_vote){
            return 0;
        } else { return this.voteYes; }
    }
    
    public int voteValideNo(){
        if (this.voteYes + this.voteNo > this.nb_vote){
            return 0;
        } else { return this.voteNo; }
    }
}
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
        PlayerResult winner = new PlayerResult{manche = 999};
        int N = int.Parse(Console.ReadLine());
        Player[] tab = new Player[N];
        for (int i = 0; i < N; i++)
        {
            string PLAYER = Console.ReadLine();
            tab[i] = new Player{name = PLAYER};
        }
        for (int i = 0; i < N; i++)
        {
            string SHOOTS = Console.ReadLine();
            tab[i].shoots = SHOOTS;
        }
        foreach(Player p in tab){
            PlayerResult result = p.CalculScore();
            if (result.end){
                if(result.manche < winner.manche){
                    winner = result;
                }
            }
            Console.Error.WriteLine(result.player.name + ": " + result.manche + " " + result.end + " " + result.score);
        }

        Console.WriteLine(winner.player.name);
    }
}

class Player{
  public string name {get;set;}
  public string shoots{get;set;}
  
  public PlayerResult CalculScore(){
      int scoreBeforeRound = 0;
      int nbMissThisRound = 0;
      int score = 0;
      int round = 0;
      int shoutBeforeRound = 3;
      bool missLastRound = false;
      bool end = false;
      string[] tab = shoots.Split(' ');
      foreach(string s in tab){
          shoutBeforeRound--;
          int nb = 0;
          if (s.Contains("*")){
              string[] t = s.Split('*');
              nb = Convert.ToInt32(t[0]) * Convert.ToInt32(t[1]);
              missLastRound = false;
          }
          else if (s.Contains("X")){
              nb = -20;
              if (missLastRound){
                  nb = -30;
              }
              if (nbMissThisRound == 2) {
                  nb = 0;
                  score = 0;
              }
              missLastRound = true;
              nbMissThisRound++;
          }
          else{
              nb = Convert.ToInt32(s);
              missLastRound = false;
          }
          Console.Error.WriteLine(score + " " + nb);
          score = score + nb;
          if(shoutBeforeRound == 0){
              round++;
              shoutBeforeRound = 3;
              nbMissThisRound = 0;
              scoreBeforeRound = score;
              missLastRound = false;
          }
          if (score == 101){
              end = true;
          }
          if(score > 101){
              score = scoreBeforeRound;
              round++;
              shoutBeforeRound = 3;
              nbMissThisRound = 0;
          }
      }
      return new PlayerResult{ player = this, manche = round, end = end, score = score };
  }
}

class PlayerResult{
  public Player player {get;set;}
  public int manche{get; set;}
  public bool end{get;set;}
  public int score{get; set;}
}
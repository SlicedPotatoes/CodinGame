class player {
  constructor(name) {
    this.name = name;
  }
  addShoot(shoots) {
    this.shoots = shoots.split(" ");
  }
  calculScore() {
    let points = 0;
    let rounds = 0;
    while (!points == 101 || !this.shoots.length == 0) {
      let score = 0;
      let missThisRound = 0;
      let missLastShoot = false;
      for (let i = 0; i < 3; i++) {
        let p = this.shoots.shift();
        if (p == "X") {
          score -= 20;
          missThisRound++;
          if (missLastShoot) {
            score -= 10;
          }
          missLastShoot = true;
        } else {
          let pSplit = p.split("*");
          if (pSplit.length > 1) {
            score += parseInt(pSplit[0]) * parseInt(pSplit[1]);
          } else {
            score += parseInt(p);
          }
          missLastShoot = false;
          if (points + score > 101) {
            break;
          }
        }
        if (this.shoots.length == 0) {
          break;
        }
      }
      if (points + score <= 101) {
        points += score;
      }
      if (missThisRound == 3) {
        points = 0;
      }
      rounds++;
      //console.log(this.name + " rounds:" + rounds + " points:" + points + " score this shoot:" +score);
    }
    this.totalScore = points;
    return rounds;
  }
}
let players = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const PLAYER = readline();
  players.push(new player(PLAYER));
}
let smaller = Infinity;
let smallerP = "";
for (let i = 0; i < N; i++) {
  const SHOOTS = readline();
  players[i].addShoot(SHOOTS);
  let rounds = players[i].calculScore();
  if (players[i].totalScore == 101) {
    if (rounds < smaller) {
      smaller = rounds;
      smallerP = players[i];
    }
  }
}
console.log(smallerP.name);

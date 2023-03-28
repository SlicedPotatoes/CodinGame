const winCond = { Paper: "Rock", Scissors: "Paper", Rock: "Scissors" };
const n = parseInt(readline());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(readline());
}
let bestScore = 0;
let bestMove = {};
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 3; j++) {
    const me = j == 0 ? "Paper" : j == 1 ? "Scissors" : "Rock";
    let score = 0;
    for (let h = 0; h < n; h++) {
      let index = i + h;
      if (index >= n) {
        index -= n;
      }
      if (arr[index] == winCond[me]) {
        score++;
      } //Win score +1
      else if (i + 0 == index) {
        break;
      } //First round not won
      else if (arr[index] != me) {
        break;
      } //Lose
    }
    if (score > bestScore) {
      bestMove = { index: i, move: me };
      bestScore = score;
    }
  }
}
console.log(bestMove.move);
console.log(bestMove.index);

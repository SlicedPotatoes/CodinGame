const ROUNDS = parseInt(readline());
let CASH = parseInt(readline());
for (let i = 0; i < ROUNDS; i++) {
  const PLAY = readline().split(" ");
  let bet = Math.ceil(CASH / 4);
  CASH -= bet;
  switch (PLAY[1]) {
    case "PLAIN":
      if (PLAY[0] === PLAY[2]) {
        CASH += bet * 36;
      }
      break;
    case "EVEN":
      if (PLAY[0] != 0 && PLAY[0] % 2 == 0) {
        CASH += bet * 2;
      }
      break;
    case "ODD":
      if (PLAY[0] % 2 != 0) {
        CASH += bet * 2;
      }
      break;
  }
}
console.log(CASH);

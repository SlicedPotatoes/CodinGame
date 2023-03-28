let tournaments = [];
const N = parseInt(readline());
let phase = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const NUMPLAYER = parseInt(inputs[0]);
  const SIGNPLAYER = inputs[1];
  phase.push({ id: NUMPLAYER, sign: SIGNPLAYER });
}
tournaments.push(phase);
while (tournaments[tournaments.length - 1].length != 1) {
  let phase = [];
  for (let i = 0; i < tournaments[tournaments.length - 1].length; i += 2) {
    let p1 = tournaments[tournaments.length - 1][i];
    let p2 = tournaments[tournaments.length - 1][i + 1];
    if (p1.sign == p2.sign) {
      if (p1.id > p2.id) {
        phase.push(p2);
      } else {
        phase.push(p1);
      }
    } else {
      switch (p1.sign) {
        case "R":
          if (p2.sign == "L" || p2.sign == "C") {
            phase.push(p1);
          } else {
            phase.push(p2);
          }
          break;
        case "P":
          if (p2.sign == "R" || p2.sign == "S") {
            phase.push(p1);
          } else {
            phase.push(p2);
          }
          break;
        case "C":
          if (p2.sign == "P" || p2.sign == "L") {
            phase.push(p1);
          } else {
            phase.push(p2);
          }
          break;
        case "L":
          if (p2.sign == "S" || p2.sign == "P") {
            phase.push(p1);
          } else {
            phase.push(p2);
          }
          break;
        case "S":
          if (p2.sign == "R" || p2.sign == "C") {
            phase.push(p1);
          } else {
            phase.push(p2);
          }
          break;
      }
    }
  }
  tournaments.push(phase);
}
console.error(tournaments);
let winner = tournaments[tournaments.length - 1][0].id;
let winAgainst = [];
for (let i = 0; i < tournaments.length - 1; i++) {
  for (let j = 0; j < tournaments[i].length; j++) {
    if (tournaments[i][j].id == winner) {
      if (j % 2 == 0) {
        winAgainst.push(tournaments[i][j + 1].id);
      } else {
        winAgainst.push(tournaments[i][j - 1].id);
      }
    }
  }
}
console.log(winner);
console.log(winAgainst.join(" "));

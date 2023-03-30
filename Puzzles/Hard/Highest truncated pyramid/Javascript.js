const N = parseInt(readline());
const ascii = [];
let nbBrique = 0;
let turn = 1;
while (nbBrique != N) {
  if (nbBrique > N) {
    const a = ascii.shift();
    nbBrique -= a.length;
  }
  if (nbBrique < N) {
    nbBrique += turn;
    ascii.push("".padEnd(turn, "*"));
    turn += 1;
  }
}
for (let i = 0; i < ascii.length; i++) {
  console.log(ascii[i]);
}

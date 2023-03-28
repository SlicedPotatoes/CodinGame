const numberSnails = parseInt(readline());
let listSnail = [];
let listEnd = [];
for (let i = 0; i < numberSnails; i++) {
  const speedSnail = parseInt(readline());
  listSnail.push(speedSnail);
}
let map = [];
const mapHeight = parseInt(readline());
const mapWidth = parseInt(readline());
for (let i = 0; i < mapHeight; i++) {
  const ROW = readline();
  for (let j = 0; j < mapWidth; j++) {
    if (ROW[j] != "*" && ROW[j] != "#") {
      listSnail[parseInt(ROW[j]) - 1] = { id: ROW[j], i: i, j: j, speed: listSnail[parseInt(ROW[j]) - 1] };
    } else if (ROW[j] == "#") {
      listEnd.push({ i: i, j: j });
    }
  }
  map.push(ROW.split(""));
}
let turnForWin = [];
for (let i = 0; i < listSnail.length; i++) {
  turnForWin.push({ id: listSnail[i].id, turn: simulateRun(listSnail[i], listEnd) });
}
turnForWin.sort((a, b) => {
  return a.turn - b.turn;
});
console.log(turnForWin[0].id);
function simulateRun(snail, listEnd) {
  let d = Infinity;
  let nearestEnd = null;
  for (let i = 0; i < listEnd.length; i++) {
    let _d = Math.abs(snail.i - listEnd[i].i) + Math.abs(snail.j - listEnd[i].j);
    if (_d < d) {
      d = _d;
      nearestEnd = listEnd[i];
    }
  }
  let count = 0;
  d = Math.abs(snail.i - nearestEnd.i) + Math.abs(snail.j - nearestEnd.j);
  while (d > 0) {
    count++;
    d -= snail.speed;
  }
  return count;
}

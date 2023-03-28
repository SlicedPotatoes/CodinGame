const W = parseInt(readline());
const H = parseInt(readline());
let map = [];
let pTreasure = [];
let indexHelper = [
  { i: -1, j: 0 },
  { i: -1, j: -1 },
  { i: -1, j: 1 },
  { i: 1, j: 0 },
  { i: 1, j: -1 },
  { i: 1, j: 1 },
  { i: 0, j: -1 },
  { i: 0, j: 1 },
];
for (let i = 0; i < H; i++) {
  var inputs = readline().split(" ");
  map.push(inputs);
  for (let j = 0; j < W; j++) {
    if (map[i][j] == 0) {
      pTreasure.push({ i: i, j: j });
    }
  }
}
let treasure = findTreasure(map, pTreasure);
console.log(treasure.j + " " + treasure.i);
function findTreasure(map, pTreasure) {
  let current = pTreasure.shift();
  let countO = 0;
  let countValidIndex = 0;
  for (let i = 0; i < indexHelper.length; i++) {
    let _i = current.i + indexHelper[i].i;
    let _j = current.j + indexHelper[i].j;
    if (_i >= 0 && _i < H && _j >= 0 && _j < W) {
      countValidIndex++;
      if (map[_i][_j] == 1) {
        countO++;
      }
    }
  }
  if (countValidIndex == countO) {
    return current;
  } else {
    return findTreasure(map, pTreasure);
  }
}

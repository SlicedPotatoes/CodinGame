let map = [];
let lanceMissile = null;
let listAvions = [];
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  map.push(readline().split(""));
  for (let j = 0; j < map[i].length; j++) {
    let cell = map[i][j];
    if (cell == ">" || cell == "<") {
      listAvions.push({ i: i, j: j, type: cell });
    } else if (cell == "^") {
      lanceMissile = { i: i, j: j };
    }
  }
}
let listShot = [];
for (let i = 0; i < listAvions.length; i++) {
  let a = listAvions[i];
  listShot.push(Math.abs(a.j - lanceMissile.j) - Math.abs(a.i - lanceMissile.i));
}
listShot.sort((a, b) => {
  return a - b;
});
let i = 1;
let current = listShot.shift();
let last = listShot[listShot.length - 1];
while (i <= last) {
  if (i == current) {
    console.log("SHOOT");
    current = listShot.shift();
  } else {
    console.log("WAIT");
  }
  i++;
}

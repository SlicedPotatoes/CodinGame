const R = parseInt(readline());
const C = parseInt(readline());
const T = parseInt(readline());

let array = [];
for (let i = 0; i < R; i++) {
  array[i] = [];
  for (let j = 0; j < C; j++) {
    let count = 0;
    let _i = i.toString().split("");
    let _j = j.toString().split("");
    _i.forEach((e) => {
      count += parseInt(e);
    });
    _j.forEach((e) => {
      count += parseInt(e);
    });
    array[i][j] = count;
  }
}

let caseReach = [];
reachRobot(0, 0, T, array, caseReach);
console.error(caseReach);

function reachRobot(x, y, T, arr, caseReach) {
  let _x = x < arr[0].length && x >= 0;
  let _y = y < arr.length && y >= 0;
  let inc = caseReach.find((obj) => obj.x === x && obj.y === y);
  if (_x && _y && arr[y][x] <= T && !inc) {
    caseReach.push({ x: x, y: y });
    reachRobot(x - 1, y, T, arr, caseReach);
    reachRobot(x + 1, y, T, arr, caseReach);
    reachRobot(x, y - 1, T, arr, caseReach);
    reachRobot(x, y + 1, T, arr, caseReach);
  }
}
console.log(caseReach.length);

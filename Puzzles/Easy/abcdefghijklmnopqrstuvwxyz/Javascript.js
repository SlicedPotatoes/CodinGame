const n = parseInt(readline());
let map = [];
for (let i = 0; i < n; i++) {
  const m = readline();
  map.push(m.split(""));
}
let possibleStart = findAllPossibleStart(map);
let path = findPath(map, [], possibleStart, []);
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (!path.find((obj) => obj.i === i && obj.j === j)) {
      map[i][j] = "-";
    }
  }
}
for (let i = 0; i < map.length; i++) {
  console.log(map[i].join(""));
}
function findPath(map, currentStart, possibleStart, p) {
  if (currentStart.length == 0) {
    currentStart.push(possibleStart.shift());
  }
  p.push(currentStart.shift());
  let current = p[p.length - 1];
  if (current.char === "z") {
    return p;
  }
  let bool = [
    { value: findPathHelper(map, current.i - 1, current.j, current.char), i: current.i - 1, j: current.j },
    { value: findPathHelper(map, current.i + 1, current.j, current.char), i: current.i + 1, j: current.j },
    { value: findPathHelper(map, current.i, current.j - 1, current.char), i: current.i, j: current.j - 1 },
    { value: findPathHelper(map, current.i, current.j + 1, current.char), i: current.i, j: current.j + 1 },
  ];
  bool.forEach((e) => {
    if (e.value) {
      let c = String.fromCharCode(current.char.charCodeAt(0) + 1);
      currentStart.push({ i: e.i, j: e.j, char: c });
    }
  });
  if (currentStart.length != 0) {
    return findPath(map, currentStart, possibleStart, p);
  } else {
    p = [];
    return findPath(map, [], possibleStart, p);
  }
}
function findPathHelper(map, i, j, char) {
  let _i = i >= 0 && i < map.length;
  let _j = j >= 0 && j < map[0].length;
  if (_i && _j && char.charCodeAt(0) + 1 == map[i][j].charCodeAt(0)) {
    return true;
  }
  return false;
}
function findAllPossibleStart(arr) {
  let possibleStart = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == "a") {
        possibleStart.push({ i: i, j: j, char: "a" });
      }
    }
  }
  return possibleStart;
}

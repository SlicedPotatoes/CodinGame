var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
let map = [];
let pikachu = null;
for (let i = 0; i < height; i++) {
  let line = readline();
  map.push([]);
  for (let j = 0; j < line.length; j++) {
    map[i][j] = line[j];
    if (line[j] == ">" || line[j] == "<" || line[j] == "^" || line[j] == "v") {
      pikachu = { i: i, j: j, dir: line[j] };
      map[i][j] = 0;
    }
  }
}
const side = readline();
walkInMaze({ ...pikachu }, map, 0);
for (let i = 0; i < map.length; i++) {
  console.log(map[i].join(""));
}
function walkInMaze(p, map, countElse) {
  if (p.i == pikachu.i && p.j == pikachu.j && map[p.i][p.j] != 0) {
    return map;
  }
  let iHelper = {
    iCheckMur: p.dir == ">" ? (side == "L" ? -1 : 1) : p.dir == "<" ? (side == "L" ? 1 : -1) : 0,
    jCheckMur: p.dir == "v" ? (side == "L" ? 1 : -1) : p.dir == "^" ? (side == "L" ? -1 : 1) : 0,
    iDep: p.dir == "v" ? 1 : p.dir == "^" ? -1 : 0,
    jDep: p.dir == ">" ? 1 : p.dir == "<" ? -1 : 0,
  };
  iHelper["iCheckDiagMur"] = p.dir == "v" ? -1 : p.dir == "^" ? 1 : iHelper.iCheckMur;
  iHelper["jCheckDiagMur"] = p.dir == ">" ? -1 : p.dir == "<" ? 1 : iHelper.jCheckMur;
  let iMur = p.i + iHelper.iCheckMur;
  let jMur = p.j + iHelper.jCheckMur;
  let iDiagMur = p.i + iHelper.iCheckDiagMur;
  let jDiagMur = p.j + iHelper.jCheckDiagMur;
  let i = p.i + iHelper.iDep;
  let j = p.j + iHelper.jDep;
  let iDiagDep = p.i + iHelper.iCheckMur;
  let jDiagDep = p.j + iHelper.jCheckMur;
  if (isWall(iMur, jMur, map) && !isWall(i, j, map)) {
    countElse = 0;
    p.i = i;
    p.j = j;
    map[i][j]++;
  } else if (isWall(iDiagMur, jDiagMur, map) && !isWall(iDiagDep, jDiagDep, map)) {
    countElse = 0;
    p.i = iDiagDep;
    p.j = jDiagDep;
    map[iDiagDep][jDiagDep]++;
    p.dir = p.dir == "^" ? (side == "L" ? "<" : ">") : p.dir == ">" ? (side == "L" ? "^" : "v") : p.dir == "v" ? (side == "L" ? ">" : "<") : side == "L" ? "v" : "^";
  } else {
    p.dir = p.dir == "^" ? (side == "L" ? ">" : "<") : p.dir == ">" ? (side == "L" ? "v" : "^") : p.dir == "v" ? (side == "L" ? "<" : ">") : side == "L" ? "^" : "v";
    countElse++;
    if (countElse == 5) {
      return map;
    }
  }
  return walkInMaze(p, map, countElse);
}
function isWall(i, j, map) {
  if (i < 0 || i >= map.length || j < 0 || j >= map[0].length || map[i][j] == "#") {
    return true;
  }
  return false;
}

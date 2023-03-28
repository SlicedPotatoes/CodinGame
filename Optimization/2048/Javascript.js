class TreeGrid {
  constructor(grid, seed, score, move) {
    this.grid = grid;
    this.seed = seed;
    this.score = score;
    this.move = move;
    this.child = [];
  }
}
const BOARD_SIZE = 4;
const BLANK_GRID = [
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];
// game loop
while (true) {
  const seed = parseInt(readline()); // needed to predict the next spawns
  const score = parseInt(readline());
  let grid = [];
  for (let i = 0; i < 4; i++) {
    var inputs = readline().split(" ");
    grid.push(inputs);
  }
  let m = bestMove(grid, seed);
  console.log(m);
}
function bestMove(grid, seed) {
  let _move = ["U", "D", "L", "R"];
  let treeGrid = new TreeGrid(grid, seed, getGridScore(BLANK_GRID, grid), null);
  let treeDepth = 6; //If i increase this value my code is not fast enough
  let currentLevel = [treeGrid];
  for (let i = 0; i < treeDepth; i++) {
    let nextLevel = [];
    for (let j = 0; j < currentLevel.length; j++) {
      let node = currentLevel[j];
      for (let k = 0; k < 4; k++) {
        if (node.score != -1) {
          let _g = move(node.grid, _move[k]);
          let score = getGridScore(node.grid, _g);
          let preshot = preshotSpawn(_g, node.seed);
          if (!(isNaN(preshot.x) || isNaN(preshot.y))) {
            _g[preshot.x][preshot.y] = preshot.value;
          }
          let child = new TreeGrid(_g, preshot.seed, score, _move[k]);
          node.child.push(child);
          nextLevel.push(child);
        }
      }
    }
    currentLevel = nextLevel;
  }
  let bm = findMaxScore(treeGrid);
  let result = "";
  let end = bm.path.length >= 6 ? bm.path.length - 3 : bm.path.length;
  for (let i = 0; i < end; i++) {
    let a = bm.path[i].move;
    if (a != null) {
      result += a;
    }
  }
  return result;
}
function move(grid, m) {
  let _grid = grid.map((row) => row.slice());
  let iS = m == "U" || m == "L" ? 0 : BOARD_SIZE - 1; //UL: 0 DR: grid-1
  let iE = m == "U" || m == "L" ? BOARD_SIZE - 1 : 0; //UL: grid-1 DR: 0
  let iI = m == "U" || m == "L" ? 1 : -1; //UL: 1 DR: -1
  let jS = m == "U" || m == "L" ? 0 : BOARD_SIZE - 1; //UL: 0 DR: grid-1
  let jE = m == "U" || m == "L" ? BOARD_SIZE - 1 : 0; //UL: grid-1 DR: 0
  let jI = m == "U" || m == "L" ? 1 : -1; //UL: 1 DR: -1
  for (let i = iS; i != iE + iI; i += iI) {
    for (let j = jS; j != jE + jI; j += jI) {
      let indice1 = m == "U" || m == "D" ? i : j;
      let indice2 = m == "U" || m == "D" ? j : i; //m == "L" || m == "R" ? i : j;
      let end = m == "U" || m == "D" ? iE + iI : jE + jI;
      let kI = m == "U" || m == "D" ? iI : jI;
      if (_grid[indice1][indice2] === "0") {
        let k = m == "U" || m == "D" ? indice1 + iI : indice2 + jI;
        for (; k !== end; k += kI) {
          let kIndice1 = m == "U" || m == "D" ? k : indice1;
          let kIndice2 = m == "U" || m == "D" ? indice2 : k;
          if (_grid[kIndice1][kIndice2] !== "0") {
            _grid[indice1][indice2] = _grid[kIndice1][kIndice2];
            _grid[kIndice1][kIndice2] = "0";
            break;
          }
        }
      }
      if (_grid[indice1][indice2] !== "0") {
        let k = m == "U" || m == "D" ? indice1 + iI : indice2 + jI;
        for (; k !== end; k += kI) {
          let kIndice1 = m == "U" || m == "D" ? k : indice1;
          let kIndice2 = m == "U" || m == "D" ? indice2 : k;
          if (_grid[kIndice1][kIndice2] === _grid[indice1][indice2]) {
            _grid[indice1][indice2] = (parseInt(_grid[indice1][indice2]) * 2).toString();
            _grid[kIndice1][kIndice2] = "0";
            break;
          } else if (_grid[kIndice1][kIndice2] !== "0") {
            break;
          }
        }
      }
    }
  }
  return _grid;
}
function getGridScore(grid, _grid) {
  let nbDeChiffre = 0;
  let _nbDeChiffre = 0;
  let sum = 0;
  let _sum = 0;
  if (isSameGrid(grid, _grid)) {
    return -1;
  }
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (grid[i][j] !== "0") {
        nbDeChiffre++;
        sum += parseInt(grid[i][j]);
      }
      if (_grid[i][j] !== "0") {
        _nbDeChiffre++;
        _sum += parseInt(_grid[i][j]);
      }
    }
  }
  let score = sum / (nbDeChiffre == 0 ? 1 : nbDeChiffre);
  let _score = _sum / _nbDeChiffre;
  let finalScore = _score - score;
  return finalScore;
}
function isSameGrid(grid, _grid) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (grid[i][j] !== _grid[i][j]) {
        return false;
      }
    }
  }
  return true;
}
function preshotSpawn(grid, seed) {
  let freeCells = [];
  for (let y = 0; y < BOARD_SIZE; y++) {
    for (let x = 0; x < BOARD_SIZE; x++) {
      if (grid[x][y] === "0") {
        freeCells.push(x + y * BOARD_SIZE);
      }
    }
  }
  let spawnIndex = freeCells[Math.floor(seed % freeCells.length)];
  let value = (seed & 0x10) === 0 ? "2" : "4";
  let x = Math.floor(spawnIndex % BOARD_SIZE);
  let y = Math.floor(spawnIndex / BOARD_SIZE);
  let _seed = (seed * seed) % 50515093;
  return { x: x, y: y, value: value, seed: _seed };
}
function findMaxScore(node) {
  if (node.child.length === 0 || node.score < 0) {
    return { score: node.score, path: [node] };
  } else {
    let maxScore = -Infinity;
    let maxScorePath = null;
    for (let i = 0; i < node.child.length; i++) {
      const childResult = findMaxScore(node.child[i]);
      if (childResult.score > maxScore) {
        maxScore = childResult.score;
        maxScorePath = childResult.path;
      }
    }
    return { score: maxScore + node.score, path: [node, ...maxScorePath] };
  }
}

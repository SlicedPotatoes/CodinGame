/*
  Optimization 2048 V2
  Date Submission: 20-09-2023
  Score: 16 874 276
  Ranking: 60/1322
*/
class TreeGrid {
  constructor(grid, seed, score, depth, path, margedCell, biggestCell) {
    this.grid = grid;
    this.seed = seed;
    this.score = score;
    this.depth = depth;
    this.path = path;
    this.margedCell = margedCell;
    this.biggestCell = biggestCell;
    this.heuristique = heuristique(this);
  }
}
const BOARD_SIZE = 4;
const BLANK_GRID = [
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];
const BEAM_WIDTH = 40;
const FIRST_TURN_BEAM_WIDTH = 50;
const POSSIBLE_MOVE = ["U", "D", "L", "R"];
const POIDS = [97.30119, 90.68706, 13.228226, 67.991486, 12.232829];
//0: poid Score
//1: poid margedCell
//2: poid biggestCell in corner
//3: poid biggestCell
//4: poid monotonie
const MAX_DEPTH = 60;
const FIRST_TURN_MAX_DEPTH = 1500;
const SAFE_PATH = 1.5;

let firstTurn = true;
// game loop
while (true) {
  const seed = parseInt(readline()); // needed to predict the next spawns
  const score = parseInt(readline());
  let grid = [];
  for (let i = 0; i < 4; i++) {
    const inputs = readline().split(" ");
    grid.push(inputs);
  }
  const m = bestMove(grid, seed);
  firstTurn = false;
  console.log(m);
}
//Using a BeamWidth algorithm to traverse thhe tree in an "optimal" way in terms of execution time / quality of the solution
function bestMove(grid, seed) {
  let nodes = [new TreeGrid(grid, seed, 0, 0, "", 0, 0)]; //List of nodes to browse initialized with the 1st node
  const maxDepth = firstTurn ? FIRST_TURN_MAX_DEPTH : MAX_DEPTH; //In the first turn we have 1s to return path (I increase the depth) and in the 2nd 50ms
  while (nodes[0].depth != maxDepth) {
    //Loop until depth is not equal to max depth
    const _nodes = []; //List of nodes at this depth
    const n = firstTurn ? FIRST_TURN_BEAM_WIDTH : BEAM_WIDTH; //In the first turn we have 1s to return path (I increase beam width) and in the 2nd 50ms
    for (let i = 0; i < (nodes.length > n ? n : nodes.length); i++) {
      //Browse n element in nodes where n == BEAMWIDTH if nodes.length > beamwidth otherwise nodes.length
      let node = nodes[i]; //Current node
      for (let iMove = 0; iMove < 4; iMove++) {
        //In this loop we simulate the following grid according to a movement
        const [_grid, score, isSameGrid, margedCell, biggestCell] = move(node.grid, POSSIBLE_MOVE[iMove]); //Simulate following grid
        if (!isSameGrid) {
          //If the grid is different from its parent
          const preshot = preshotSpawn(_grid, node.seed); //Calculated where the next tile will appear and its value
          if (!(isNaN(preshot.x) || isNaN(preshot.y))) {
            _grid[preshot.x][preshot.y] = preshot.value;
          }
          const path = node.path + POSSIBLE_MOVE[iMove]; //Build the path from the starting grid to this grid
          const child = new TreeGrid(_grid, preshot.seed, score, node.depth + 1, path, margedCell, biggestCell);
          _nodes.push(child); //Put children in _nodes
        }
      }
    }
    /*
      If _nodes is empty, we check if the path of nodes[0] is not empty, if this is the case we add an arbitrary movement
      After that we exit the while loop (we can no longer move in this grid)
    */
    if (_nodes.length == 0) {
      if (nodes[0].path == "") {
        nodes[0].path = "U";
      }
      break;
    }
    _nodes.sort((a, b) => b.heuristique - a.heuristique); //If we are there it is because _nodes is not empty, we sort it using the heuristic value
    nodes = _nodes;
  }
  return nodes[0].path.substring(0, Math.round(nodes[0].path.length / SAFE_PATH));
}
function move(grid, m) {
  let sameGrid = true;
  const _grid = grid.map((row) => row.slice()); //Create a grid copy
  let score = 0;
  let margedCell = 0;
  let biggestCell = 0;

  //We calculate the indexes of the loop according to the movement to be carried out
  const indexStart = m == "U" || m == "L" ? 0 : BOARD_SIZE - 1; //UL: 0 DR: grid-1
  const indexEnd = m == "U" || m == "L" ? BOARD_SIZE - 1 : 0; //UL: grid-1 DR: 0
  const indexInc = m == "U" || m == "L" ? 1 : -1; //UL: 1 DR: -1

  //We browse the grid according to the indexes calculated above
  for (let i = indexStart; i != indexEnd + indexInc; i += indexInc) {
    for (let j = indexStart; j != indexEnd + indexInc; j += indexInc) {
      //We calculate the indices of the cell on which we are going to work.
      //We'll call it cell1
      const index1 = m == "U" || m == "D" ? i : j;
      const index2 = m == "U" || m == "D" ? j : i;
      const end = indexEnd + indexInc;

      //Index of the cell which will serve as a comparison to cell1
      //We'll call it cell2
      let k = (m == "U" || m == "D" ? index1 : index2) + indexInc;

      //If cell1 == 0, we traverse the axis to find a value of cell2 != 0 and we reverse them
      if (_grid[index1][index2] == 0) {
        for (; k !== end; k += indexInc) {
          const kIndex1 = m == "U" || m == "D" ? k : index1;
          const kIndex2 = m == "U" || m == "D" ? index2 : k;
          if (_grid[kIndex1][kIndex2] !== "0") {
            sameGrid = false;
            _grid[index1][index2] = _grid[kIndex1][kIndex2];
            _grid[kIndex1][kIndex2] = "0";
            break;
          }
        }
      }

      /*
        If cell1 != 0, we traverse the axis to find the next value of cell2, where cell2 != 0 && cell1==cell2.
        If we find it, we merge the tiles.
        If we find cell2!=0 && cell1!=cell2 we exit the loop
      */
      if (_grid[index1][index2] !== "0") {
        for (; k !== end; k += indexInc) {
          const kIndex1 = m == "U" || m == "D" ? k : index1;
          const kIndex2 = m == "U" || m == "D" ? index2 : k;
          if (_grid[kIndex1][kIndex2] === _grid[index1][index2]) {
            sameGrid = false;
            const cellNumber = parseInt(_grid[index1][index2]) * 2;
            _grid[index1][index2] = cellNumber.toString();
            _grid[kIndex1][kIndex2] = "0";
            score += cellNumber;
            margedCell++;
            break;
          } else if (_grid[kIndex1][kIndex2] !== "0") {
            break;
          }
        }
      }
      if (parseInt(_grid[index1][index2]) > biggestCell) {
        biggestCell = parseInt(_grid[index1][index2]);
      }
    }
  }
  return [_grid, score, sameGrid, margedCell, biggestCell];
}
//Function to calculate the value and position of the next tile relative to the seed. Adapted from game source code from Java to Javascript
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
//Heuristic function allowing you to give a score to a grid
function heuristique(node) {
  const grid = node.grid;
  const monotonie = calculMonotonie(grid);
  let score = node.score * POIDS[0] + node.margedCell * POIDS[1] + node.biggestCell * POIDS[3];
  score -= monotonie * POIDS[4];
  if (grid[0][0] == node.biggestCell || grid[0][3] == node.biggestCell || grid[3][0] == node.biggestCell || grid[3][3] == node.biggestCell) {
    score *= POIDS[2];
  }
  return score;
}
function calculMonotonie(grid) {
  let monotonie = 0;
  for (let i = 0; i < BOARD_SIZE; i++) {
    let rowMonotonie = 0;
    for (let j = 0; j < BOARD_SIZE - 1; j++) {
      let diff = Math.abs(grid[i][j] - grid[i][j + 1]);
      rowMonotonie += diff;
    }
    monotonie += rowMonotonie;
  }
  return monotonie;
}

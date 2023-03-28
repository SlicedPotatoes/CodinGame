let arrKey = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 }; //Value for each letter
let indexHelper = [
  { i: -1, j: 0 },
  { i: 1, j: 0 },
  { i: 0, j: -1 },
  { i: 0, j: 1 },
]; //Operation to check rows / cols from cell index
const rookPos = readline();
let _rookPos = { i: rookPos[1] - 1, j: arrKey[rookPos[0]] };
const nbPieces = parseInt(readline());
let board = Array(8)
  .fill()
  .map(() => Array(8).fill("#"));
for (let i = 0; i < nbPieces; i++) {
  var inputs = readline().split(" ");
  const colour = parseInt(inputs[0]);
  const onePiece = inputs[1];
  board[onePiece[1] - 1][arrKey[onePiece[0]]] = colour;
}
let listMove = [];
for (let i = 0; i < 4; i++) {
  // For each value in indexHelper
  let end = false;
  let j = 1;
  let iHelper = indexHelper[i];
  while (!end) {
    let _i = _rookPos.i + iHelper.i * j; //calculate the index to check
    let _j = _rookPos.j + iHelper.j * j; //
    if (_i >= 0 && _j >= 0 && _i < board.length && _j < board.length) {
      // If the calculated index is within the limits of the table
      let cellValue = board[_i][_j];
      if (cellValue != 0) {
        let str = "R" + rookPos; //
        if (cellValue == 1) {
          //
          str += "x"; // build the string to display
          end = true; //
        } //
        else {
          str += "-";
        } //
        listMove.push(str + getAlphaCol(_j, arrKey) + (_i + 1).toString()); // push it in the table
      } else {
        end = true;
      }
    } else {
      end = true;
    }
    j++;
  }
}
listMove.sort();
for (let i = 0; i < listMove.length; i++) {
  console.log(listMove[i]);
}
function getAlphaCol(n, obj) {
  for (let prop in obj) {
    if (obj[prop] == n) {
      return prop;
    }
  }
  return null;
}

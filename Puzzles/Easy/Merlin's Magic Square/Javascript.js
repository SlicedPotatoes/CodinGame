const btnAction = {
  //first digit: index row, second digit: index col
  1: ["00", "01", "10", "11"],
  2: ["00", "01", "02"],
  3: ["01", "02", "11", "12"],
  4: ["00", "10", "20"],
  5: ["01", "10", "11", "12", "21"],
  6: ["02", "12", "22"],
  7: ["10", "11", "20", "21"],
  8: ["20", "21", "22"],
  9: ["11", "12", "21", "22"],
};
let grid = [];
grid.push(readline().split(" "));
grid.push(readline().split(" "));
grid.push(readline().split(" "));
const allButtonsPressed = readline().split("");
allButtonsPressed.forEach((element) => {
  pressBtn(element);
});
for (let i = 1; i <= 9; i++) {
  let _g = pressBtn(i, true);
  if (verifGrid(_g)) {
    console.log(i);
  }
}
function pressBtn(btn, b = false) {
  //change the state of the grid relative to the pressed btn (if b = true make the changes in a copy of the grid)
  var _grid = [];
  if (b) {
    _grid = grid.map((element) => element.slice(0));
  }
  btnAction[btn].forEach((element) => {
    gridIndex = element[0];
    stringIndex = element[1];
    if (!b) {
      grid[gridIndex][stringIndex] = grid[gridIndex][stringIndex] == "*" ? "~" : "*";
    } else {
      _grid[gridIndex][stringIndex] = _grid[gridIndex][stringIndex] == "*" ? "~" : "*";
    }
  });
  if (b) {
    return _grid;
  }
}
function verifGrid(_g) {
  //check if grid is a WIN
  return _g[0][0] == "*" && _g[0][1] == "*" && _g[0][2] == "*" && _g[1][0] == "*" && _g[1][1] == "~" && _g[1][2] == "*" && _g[2][0] == "*" && _g[2][1] == "*" && _g[2][2] == "*";
}

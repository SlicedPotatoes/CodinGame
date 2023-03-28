let grid = [[], [], [], [], [], [], [], [], []];
let subGrid = [[], [], [], [], [], [], [], [], []]; //Subgrid for make checking easier
//Fill Grid and subgrid
for (let i = 0; i < 9; i++) {
  var inputs = readline().split(" ");
  for (let j = 0; j < 9; j++) {
    let val = parseInt(inputs[j]);
    grid[i].push(parseInt(val));
    if (i >= 0 && i < 3) {
      if (j >= 0 && j < 3) {
        subGrid[0].push(val);
      } else if (j >= 3 && j < 6) {
        subGrid[3].push(val);
      } else {
        subGrid[6].push(val);
      }
    } else if (i >= 3 && i < 6) {
      if (j >= 0 && j < 3) {
        subGrid[1].push(val);
      } else if (j >= 3 && j < 6) {
        subGrid[4].push(val);
      } else {
        subGrid[7].push(val);
      }
    } else {
      if (j >= 0 && j < 3) {
        subGrid[2].push(val);
      } else if (j >= 3 && j < 6) {
        subGrid[5].push(val);
      } else {
        subGrid[8].push(val);
      }
    }
  }
}
let valid = true;
//Check Col and Row
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    for (let k = 0; k < 9; k++) {
      if (j != k) {
        if (grid[i][k] == grid[i][j]) {
          valid = false;
        }
        if (grid[k][i] == grid[j][i]) {
          valid = false;
        }
      }
    }
  }
}
//Check Subgrid
subGrid.forEach((element) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (i != j) {
        if (element[i] == element[j]) {
          valid = false;
        }
      }
    }
  }
});
console.log(valid);

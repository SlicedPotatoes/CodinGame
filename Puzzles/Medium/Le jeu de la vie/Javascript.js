var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
let grid = [];
for (let i = 0; i < height; i++) {
  const line = readline();
  grid.push(line.split(""));
}
let _grid = [];
// We initialize a new table that will contain the updated grid
for (let i = 0; i < height; i++) {
  _grid.push([]);
  for (let j = 0; j < width; j++) {
    _grid[i].push("?");
  }
}
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    let count = 0;
    // We look at the neighboring values to the cell
    if (i - 1 >= 0 && grid[i - 1][j] == 1) {
      count++;
    }
    if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1] == 1) {
      count++;
    }
    if (i - 1 >= 0 && j + 1 < width && grid[i - 1][j + 1] == 1) {
      count++;
    }
    if (i + 1 < height && grid[i + 1][j] == 1) {
      count++;
    }
    if (i + 1 < height && j - 1 >= 0 && grid[i + 1][j - 1] == 1) {
      count++;
    } // and count the number of alive
    if (i + 1 < height && j + 1 < width && grid[i + 1][j + 1] == 1) {
      count++;
    }
    if (j - 1 >= 0 && grid[i][j - 1] == 1) {
      count++;
    }
    if (j + 1 < width && grid[i][j + 1] == 1) {
      count++;
    }
    // We proceed to the update according to the defined rules
    if ((count === 3 && grid[i][j] == 0) || (count >= 2 && count <= 3 && grid[i][j] == 1)) {
      _grid[i][j] = 1;
    } else {
      _grid[i][j] = 0;
    }
  }
}
for (let i = 0; i < _grid.length; i++) {
  console.log(_grid[i].join(""));
}

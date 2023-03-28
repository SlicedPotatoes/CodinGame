var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
let grid = [];
for (let i = 0; i < height; i++) {
  const line = readline();
  grid.push(line.split(""));
}
for (let i = height - 1; i >= 0; i--) {
  //Step through rows from bottom
  for (let j = 0; j < width; j++) {
    //Iterate through each column of a row
    if (grid[i][j] == ".") {
      //If the current box of the table is '.'
      for (let k = i - 1; k >= 0; k--) {
        //Cycle through the cells above this one
        if (grid[k][j] == "#") {
          //If we find a cell with '#' swap them
          grid[i][j] = "#";
          grid[k][j] = ".";
          break;
        }
      }
    }
  }
}
for (let i = 0; i < grid.length; i++) {
  console.log(grid[i].join(""));
}

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let tab = [];
console.error(`width: ${width} height ${height}`);
for (let i = 0; i < height; i++) {
  const line = readline(); // width characters, each either 0 or .
  tab.push(line.split(""));
  console.error(line);
}
for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    let str = j + " " + i;
    let x = j + 1;
    let end = false;
    if (tab[i][j] == ".") {
      continue;
    }
    while (!end && x < width) {
      if (x < width && tab[i][x] != ".") {
        str += " " + x + " " + i;
        end = true;
      } else {
        x++;
      }
    }
    if (!end) {
      str += " -1 -1";
    }
    end = false;
    x = i + 1;
    while (!end && x < height) {
      if (x < height && tab[x][j] != ".") {
        str += " " + j + " " + x;
        end = true;
      } else {
        x++;
      }
    }
    if (!end) {
      str += " -1 -1";
    }
    console.log(str);
  }
}

const N = parseInt(readline());
const grid = [[1]];
const indiceHelper = {
  u: { i: -1, j: 0 },
  l: { i: 0, j: -1 },
  d: { i: 1, j: 0 },
  r: { i: 0, j: 1 },
};
let nextNumber = 2;

for (let i = 1; i < N / 2; i++) {
  extantGrid();
  let index = { i: i * 2, j: i * 2 };
  let dir = "u";
  for (let j = 0; j < i * 8; j++) {
    index.i += indiceHelper[dir].i;
    index.j += indiceHelper[dir].j;
    if (index.i < 0 || index.i >= grid.length || index.j < 0 || index.j >= grid.length) {
      index.i -= indiceHelper[dir].i;
      index.j -= indiceHelper[dir].j;
      switch (dir) {
        case "u":
          dir = "l";
          break;
        case "l":
          dir = "d";
          break;
        case "d":
          dir = "r";
          break;
      }
      index.i += indiceHelper[dir].i;
      index.j += indiceHelper[dir].j;
    }
    grid[index.i][index.j] = nextNumber;
    nextNumber++;
  }
}
const primeNumber = getPrimeNumber(nextNumber);

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid.length; j++) {
    if (primeNumber.includes(grid[i][j])) {
      grid[i][j] = "#";
    } else {
      grid[i][j] = " ";
    }
  }
  console.log(grid[i].join(" "));
}
function extantGrid() {
  for (let i = 0; i < grid.length; i++) {
    grid[i].unshift(0);
    grid[i].push(0);
  }
  grid.unshift(Array(grid.length + 2).fill(0));
  grid.push(Array(grid.length + 1).fill(0));
}
function getPrimeNumber(n) {
  const primeNumber = [2];
  for (let i = 3; i < n; i++) {
    isPrime = true;
    for (el of primeNumber) {
      if (i % el == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumber.push(i);
    }
  }
  return primeNumber;
}

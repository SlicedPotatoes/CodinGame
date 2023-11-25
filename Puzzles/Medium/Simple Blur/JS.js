class Pixel {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  toString() {
    return this.r + " " + this.g + " " + this.b;
  }
}

var inputs = readline().split(" ");
const rows = parseInt(inputs[0]);
const cols = parseInt(inputs[1]);
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let arr = [];

function blendPixel(x, y) {
  let neighbor = [arr[y][x]];
  for (let i = 0; i < dir.length; i++) {
    let _x = x + dir[i][0];
    let _y = y + dir[i][1];
    if (_x >= 0 && _x < cols && _y >= 0 && _y < rows) {
      neighbor.push(arr[_y][_x]);
    }
  }
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < neighbor.length; i++) {
    let pixel = neighbor[i];
    r += pixel.r;
    g += pixel.g;
    b += pixel.b;
  }
  r = Math.floor(r / neighbor.length);
  g = Math.floor(g / neighbor.length);
  b = Math.floor(b / neighbor.length);
  return new Pixel(r, g, b);
}

for (let i = 0; i < rows; i++) {
  arr.push([]);
  for (let j = 0; j < cols; j++) {
    var inputs = readline().split(" ");
    const r = parseInt(inputs[0]);
    const g = parseInt(inputs[1]);
    const b = parseInt(inputs[2]);
    arr[i][j] = new Pixel(r, g, b);
  }
}
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let newPixel = blendPixel(j, i);
    console.log(newPixel.toString());
  }
}

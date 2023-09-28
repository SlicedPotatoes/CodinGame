function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const N = parseInt(readline());
const array = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const X = parseInt(inputs[0]);
  const Y = parseInt(inputs[1]);
  array.push({ x: X, y: Y });
}

let startVille = array.shift();
let currentNode = startVille;
let totalD = 0;

while (array.length != 0) {
  let minD = Infinity;
  let minIndex = -1;
  for (let i = 0; i < array.length; i++) {
    const currentTestVile = array[i];
    const d = distance(currentNode.x, currentNode.y, currentTestVile.x, currentTestVile.y);
    if (d < minD) {
      minD = d;
      minIndex = i;
    }
  }
  totalD += minD;
  currentNode = array.splice(minIndex, 1)[0];
}
totalD += distance(currentNode.x, currentNode.y, startVille.x, startVille.y);

console.log(Math.round(totalD));

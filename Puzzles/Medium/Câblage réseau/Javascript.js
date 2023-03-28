class Batiment {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const N = parseInt(readline());
let listBatiments = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const X = parseInt(inputs[0]);
  const Y = parseInt(inputs[1]);
  listBatiments.push(new Batiment(X, Y));
}
listBatiments.sort(function (a, b) {
  return a.x - b.x;
});
let cable = distanceManhattan(listBatiments[0].x, 0, listBatiments[listBatiments.length - 1].x, 0);
listBatiments.sort(function (a, b) {
  return a.y - b.y;
});
let med = getMediane(listBatiments);
listBatiments.forEach((e) => {
  cable += Math.abs(distanceManhattan(0, e.y, 0, med));
});
console.log(cable);
function distanceManhattan(x1, y1, x2, y2) {
  return x2 - x1 + (y2 - y1);
}
function getMediane(arr) {
  if (arr.length % 2 == 0) {
    return (arr[arr.length / 2].y + arr[arr.length / 2 - 1].y) / 2;
  } else {
    return arr[Math.round(arr.length / 2) - 1].y;
  }
}

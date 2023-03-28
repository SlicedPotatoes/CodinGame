const n = parseInt(readline());
let array = [];
for (let y = n * 2; y != n; y--) {
  let x = (n * y) / (y - n);
  if (Number.isInteger(x)) {
    array.push({ x: x, y: y });
  }
}
array.reverse();
array.forEach((el) => {
  console.log("1/" + n + " = 1/" + el.x + " + 1/" + el.y);
});

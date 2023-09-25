const n = parseInt(readline());
var inputs = readline().split(" ");

let actualBiggest = parseInt(inputs[0]);
let actualSmaller = parseInt(inputs[0]);

let suitorBiggest = actualBiggest;

for (let i = 0; i < n; i++) {
  const v = parseInt(inputs[i]);
  if (v > suitorBiggest) {
    suitorBiggest = v;
  } else if (actualSmaller - actualBiggest > v - suitorBiggest) {
    actualSmaller = v;
    actualBiggest = suitorBiggest;
  }
}
console.log(actualSmaller - actualBiggest);

const X = parseInt(readline());
const N = parseInt(readline());
var inputs = readline().split(" ");
const array = [];
for (let i = 0; i < N; i++) {
  const m = parseInt(inputs[i]);
  array.push(m);
}
array.sort((a, b) => b - a);

let minimalWork = 0;

for (let i = 0; i < N; i++) {
  const L = (i - (i % X)) / X;
  const W = ((L * 6.5) / 100) * 10 * array[i];
  minimalWork += W;
}

console.log((Math.round(minimalWork * 1000) / 1000).toFixed(3));

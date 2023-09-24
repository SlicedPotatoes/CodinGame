const N: number = parseInt(readline());
const array: number[] = [];
for (let i = 0; i < N; i++) {
  const pi: number = parseInt(readline());
  array.push(pi);
}
array.sort((a, b) => a - b);
let minDiff: number = 10000000;
for (let i = 1; i < N; i++) {
  const diff: number = array[i] - array[i - 1];
  if (diff < minDiff) {
    minDiff = diff;
  }
}
console.log(minDiff);

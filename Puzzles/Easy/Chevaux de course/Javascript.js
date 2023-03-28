const N = parseInt(readline());
var array = [];
for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  array.push(pi);
}
array = array.sort((a, b) => a - b);
var diff = 10000000;
for (var i = 0; i < array.length; i++) {
  if (Math.abs(array[i] - array[i + 1]) < diff) {
    diff = Math.abs(array[i] - array[i + 1]);
  }
}
console.log(diff);

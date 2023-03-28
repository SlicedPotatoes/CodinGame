const n = parseInt(readline());
var inputs = readline().split(" ");
let arr = [];
for (let i = 0; i < n; i++) {
  const x = parseInt(inputs[i]);
  arr.push(x);
}
let _arr = [...arr].sort((a, b) => b - a);
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != _arr[i]) {
    count++;
  }
}
console.log(count / 2);

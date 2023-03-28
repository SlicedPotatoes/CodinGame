const R = parseInt(readline());
const V = parseInt(readline());
let listVault = [];
for (let i = 0; i < V; i++) {
  var inputs = readline().split(" ");
  listVault.push(Math.pow(10, inputs[1]) * Math.pow(5, inputs[0] - inputs[1]));
}
let robbers = new Array(R).fill(0);
let times = 0;
while (listVault.length != 0) {
  let smaller = Infinity;
  for (let i = 0; i < R; i++) {
    if (robbers[i] == 0) {
      robbers[i] = listVault.shift();
    }
    if (robbers[i] < smaller) {
      smaller = robbers[i];
    }
  }
  for (let i = 0; i < R; i++) {
    robbers[i] -= smaller;
  }
  times += smaller;
}
let bigger = 0;
for (let i = 0; i < robbers.length; i++) {
  if (robbers[i] > bigger) {
    bigger = robbers[i];
  }
}
console.log(times + bigger);

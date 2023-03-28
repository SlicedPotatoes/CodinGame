const b = readline().split("0");
let sum = 0;
for (let i = 1; i < b.length; i++) {
  let s = b[i - 1].length + b[i].length;
  if (s > sum) {
    sum = s;
  }
}
console.log(sum + 1);

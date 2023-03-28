let arr = [];
const N = parseInt(readline());
var inputs = readline().split(" ");
for (let i = 0; i < N; i++) {
  arr.push(parseInt(inputs[i]));
}
arr.sort((a, b) => a - b);
let price = 0;
while (arr.length != 1) {
  let newCard = arr.shift() + arr.shift();
  arr.push(newCard);
  arr.sort((a, b) => a - b);
  price += newCard;
}
console.log(price);

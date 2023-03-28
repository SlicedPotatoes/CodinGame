var inputs = readline().split(" ");
let a = parseInt(inputs[0]);
let b = parseInt(inputs[1]);

if (b > a) {
  let t = a;
  a = b;
  b = t;
}
console.log(a + " * " + b);

let _a = a;
let _b = b;

let str = "";
while (_b != 0) {
  if (_b % 2 == 0) {
    _b = _b / 2;
    _a = _a * 2;
  } else {
    _b--;
    str += " + " + _a;
  }
  console.log("= " + _a + " * " + _b + str);
}

console.log("= " + a * b);

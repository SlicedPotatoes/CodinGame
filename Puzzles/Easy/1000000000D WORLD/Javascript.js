const a = readline().split(" ");
const b = readline().split(" ");
let _a = 0;
let __a = 0;
let _b = 0;
let __b = 0;
let sum = 0;
while (!(a.length == 0 && b.length == 0)) {
  if (_a == 0) {
    _a = parseInt(a.shift());
    __a = parseInt(a.shift());
  }
  if (_b == 0) {
    _b = parseInt(b.shift());
    __b = parseInt(b.shift());
  }
  let min = _a > _b ? _b : _a;
  _a -= min;
  _b -= min;
  sum += __a * __b * min;
}
console.log(sum);

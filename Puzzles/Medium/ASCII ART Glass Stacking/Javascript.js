let N = parseInt(readline());
let pattern = [" *** ", " * * ", " * * ", "*****"];
let _i = 1;
do {
  N -= _i;
  _i++;
} while (N >= _i);
console.error(_i);
for (let i = 1; i < _i; i++) {
  for (let j = 0; j < 4; j++) {
    let str = "";
    for (let k = 0; k < i; k++) {
      str += pattern[j] + (i == _i - 1 && k == i - 1 ? "" : " ");
    }
    console.log(str.padStart(i * 6 + (_i - i - 1) * 3 - (i == _i - 1 ? 1 : 0), " ").padEnd(5 * (_i - 1) + (_i - 2), " "));
  }
}

const n = parseInt(readline());
let sum = 0;
let count = 0;
let _count = 1;
let val = 1;
while (val != n * n) {
  sum += val;
  console.error(val);
  val += n - _count;
  count++;
  if (count % 4 == 0) {
    _count += 2;
  }
}
console.log(sum + val);

var inputs = readline().split(" ");
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

function GCD(a, b, str) {
  if (b == 0) {
    return str + a;
  }
  let div = parseInt(a / b);
  let r = a % b;
  console.log(`${a}=${b}*${div}+${r}`);
  a = b;
  b = r;
  return GCD(a, b, str);
}
console.log(GCD(a, b, `GCD(${a},${b})=`));

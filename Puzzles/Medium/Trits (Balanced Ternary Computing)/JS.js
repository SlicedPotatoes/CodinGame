const dic = { T: -1, 1: 1, 0: 0 };
function convertBTToInt(bt) {
  bt = bt.split("").reverse().join("");
  let value = 0;
  for (let i = 0; i < bt.length; i++) {
    value += dic[bt[i]] * Math.pow(3, i);
  }
  return value;
}
function convertIntToBT(n) {
  let output = "";
  while (n > 0) {
    let rem = n % 3;
    n = (n - rem) / 3;
    if (rem == 2) {
      rem = -1;
      n++;
    }
    output = (rem == 0 ? "0" : rem == 1 ? "1" : "T") + output;
  }
  return output;
}
const lhs = readline();
const op = readline();
const rhs = readline();

let lhsInt = convertBTToInt(lhs);
let rhsInt = convertBTToInt(rhs);

if (op == "+") {
  console.log(convertIntToBT(lhsInt + rhsInt));
} else if (op == "-") {
  console.log(convertIntToBT(lhsInt - rhsInt));
} else if (op == "*") {
  console.log(convertIntToBT(lhsInt * rhsInt));
} else if (op == ">>") {
  let str = lhs;
  for (let i = 0; i < rhsInt; i++) {
    str = str.substring(0, str.length - 1);
    if (str.length == 0) {
      break;
    }
  }
  console.log(str.length == 0 ? 0 : str);
} else if (op == "<<") {
  let str = lhs;
  for (let i = 0; i < rhsInt; i++) {
    str += "0";
  }
  console.log(str);
}

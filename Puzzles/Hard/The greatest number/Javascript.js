const N = parseInt(readline());
let input = readline().split(" ");
let isNegatif = input.indexOf("-") != -1;
let haveDot = input.indexOf(".") != -1;
input.sort((a, b) => {
  if (a == "-") {
    return -1;
  } //if sign -, place it at the beginning
  else if (b == "-") {
    return 1;
  } //
  if (isNegatif) {
    if (a == ".") {
      return -1;
    } //if isNegatif and char '.', place it at the beginning
    if (b == ".") {
      return 1;
    }
    return a - b; //if isNegatif sort descending
  } else {
    if (a == ".") {
      return 1;
    } //if !isNegatif and char '.', place it at the end
    if (b == ".") {
      return -1;
    }
    return b - a; //if !isNegatif sort ascending
  }
});
if (haveDot) {
  if (isNegatif) {
    //
    input[1] = input[2]; // if haveDot && isNegatif
    input[2] = "."; // swap index 1 and 2 (0 is -)
  } //
  else {
    input[input.length - 1] = input[input.length - 2]; // if haveDot && !isNegatif
    input[input.length - 2] = "."; // swap length -1 and length -2
  }
}
let answer = parseFloat(input.join(""));
if (answer == 0) {
  answer = 0;
}
console.log(answer);

const W = parseInt(readline());
const H = parseInt(readline());
const T = readline().split(" ");
printFax(true, T.shift(), "");
function printFax(black, write, str) {
  if (write == 0 && T.length == 0) {
    return;
  }
  if (write == 0) {
    write = T.shift();
    black = !black;
  }
  let i = parseInt(write < W - str.length ? write : W - str.length);
  str = str.padEnd(i + str.length, black ? "*" : " ");
  write -= i;
  if (str.length == W) {
    console.log("|" + str + "|");
    str = "";
  }
  return printFax(black, write, str);
}

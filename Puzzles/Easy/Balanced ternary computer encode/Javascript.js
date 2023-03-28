let N = parseInt(readline());
let end = false;
let BTString = "";
while (!end) {
  let rest = N % 3;
  N = parseInt(N / 3);
  if (rest == 2) {
    rest = -1;
    N++;
  }
  if (rest == -2) {
    rest = 1;
    N--;
  }
  if (N == 0 && rest == 0) {
    end = true;
  } else {
    BTString = (rest == 0 ? "0" : rest == 1 ? "1" : "T") + BTString;
  }
}
console.log(BTString == "" ? "0" : BTString);

let countArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let benfordPercent = [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  let tran = Math.abs(
    parseFloat(
      readline()
        .replace(",", ".")
        .match(/[-]?[0-9]*\.?,?[0-9]+/g)
    )
  ).toString();
  if (tran[0] != 0) {
    countArray[tran[0] - 1]++;
  } else {
    let t = tran.lastIndexOf("0") > tran.indexOf(".") ? tran.lastIndexOf("0") : tran.indexOf(".");
    countArray[tran[t + 1] - 1]++;
  }
}
let bool = false;
for (let i = 0; i < 9; i++) {
  let percent = (countArray[i] / N) * 100;
  if (percent < benfordPercent[i] - 10 || percent > benfordPercent[i] + 10) {
    bool = true;
  }
}
console.log(bool);

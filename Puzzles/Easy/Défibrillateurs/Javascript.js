const LON = replaceChar(readline());
const LAT = replaceChar(readline());
const N = parseInt(readline());
var distance = Infinity;
var answer = "";
for (let i = 0; i < N; i++) {
  const DEFIB = readline();
  var temp = DEFIB.split(";");
  var x = (LON - replaceChar(temp[4])) * Math.cos((replaceChar(temp[5]) + LAT) / 2);
  var y = LAT - replaceChar(temp[5]);
  var d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371;
  if (d < distance) {
    distance = d;
    answer = temp[1];
  }
}
function replaceChar(str) {
  return Number.parseFloat(str.replace(",", "."));
}
console.log(answer);

var b12Key = { Jan: "0", Feb: "1", Mar: "2", Apr: "3", May: "4", Jun: "5", Jul: "6", Aug: "7", Sep: "8", Oct: "9", Nov: "A", Dec: "B" };
function decodeB12(nb) {
  return b12Key[nb];
}
function encodeB12(nb, b12Key) {
  return Object.keys(b12Key).find((key) => b12Key[key] == nb);
}
function convertToB10(nb) {
  return parseInt(nb, 12);
}
function convertToB12(nb) {
  return nb.toString(12).toUpperCase();
}
const N = parseInt(readline());
let listNumber = [];
for (let i = 0; i < N; i++) {
  let M = readline();
  let l = [];
  let j = 0;
  while (M.length != j) {
    l.push(decodeB12(M.substring(j, j + 3)));
    j += 3;
  }
  listNumber.push(l.join(""));
}
let sum = 0;
for (let i = 0; i < listNumber.length; i++) {
  sum += convertToB10(listNumber[i]);
}
let sumB12 = convertToB12(sum);
let sumEncoded = [];
for (let i = 0; i < sumB12.length; i++) {
  sumEncoded.push(encodeB12(sumB12[i], b12Key));
}
console.log(sumEncoded.join(""));

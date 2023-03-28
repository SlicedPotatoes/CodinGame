const a = "A".charCodeAt(0); //Value of char A for calculations
const x = readline();
const n = parseInt(readline());
let plate = x.split("-");
let plateValue = (plate[0][0].charCodeAt(0) - a) * 999 * 26 * 26 * 26 + (plate[0][1].charCodeAt(0) - a) * 999 * 26 * 26 + (plate[2][0].charCodeAt(0) - a) * 999 * 26 + (plate[2][1].charCodeAt(0) - a) * 999 + parseInt(plate[1]) + n; //Convert Plate in number and add n
let newPlate = ["", "", ""];
let i = 3;
while (i > -1) {
  //Convert plateValue in plate
  let temp = plateValue / (999 * Math.pow(26, i));
  let _plateValue = plateValue;
  if (temp > 1) {
    plateValue = plateValue % (999 * Math.pow(26, i));
  }
  if (i == 3 || i == 2) {
    newPlate[0] += temp > 1 ? String.fromCharCode(a + (_plateValue - plateValue) / (999 * Math.pow(26, i))) : "A";
  } else if (i == 1 || i == 0) {
    newPlate[2] += temp > 1 ? String.fromCharCode(a + (_plateValue - plateValue) / (999 * Math.pow(26, i))) : "A";
  }
  i--;
}
newPlate[1] = String(plateValue).padStart(3, "0");
console.log(newPlate.join("-"));

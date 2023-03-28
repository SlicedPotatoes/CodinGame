var inputs = readline().split(" ");
const x1 = parseInt(inputs[0]);
const y1 = parseInt(inputs[1]);
const r1 = parseInt(inputs[2]);
var inputs = readline().split(" ");
const x2 = parseInt(inputs[0]);
const y2 = parseInt(inputs[1]);
const r2 = parseInt(inputs[2]);

let d = calculDistance(x1, x2, y1, y2);

console.error("Distance: " + d);
if (d > r1 + r2 || d == r1 + r2) {
  console.log("0.00");
} //Si les 2 cercles on 1 ou 0 intersection retourné 0
else if (d < Math.abs(r1 - r2)) {
  //Si un cercle est totalement dans un autre retourné son aire
  console.log(Number.parseFloat(Math.PI * Math.pow(r1 < r2 ? r1 : r2, 2)).toFixed(2));
} else {
  //Sinon calculé l'aire de l'intersection des 2 cercles
  let a = (Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(d, 2)) / (2 * d);
  let _a = d - a;
  let h = Math.sqrt(Math.pow(r1, 2) - Math.pow(a, 2));

  let a1 = Math.pow(r1, 2) * Math.acos(a / r1) - a * h;
  let a2 = Math.pow(r2, 2) * Math.acos(_a / r2) - _a * h;

  console.log(Number.parseFloat(a1 + a2).toFixed(2));
}

function calculDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

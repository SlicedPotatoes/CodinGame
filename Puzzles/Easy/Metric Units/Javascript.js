let unitInMicroMeter = { um: 1, mm: 1000, cm: 10000, dm: 100000, m: 1000000, km: 1000000000 };
let e = readline().split(" + ");
e[0] = [e[0].match(/[\d\.]+/)[0], e[0].match(/[a-z]+$/)[0]];
e[1] = [e[1].match(/[\d\.]+/)[0], e[1].match(/[a-z]+$/)[0]];
let smallestUnit = unitInMicroMeter[e[0][1]] > unitInMicroMeter[e[1][1]] ? e[1][1] : e[0][1];
let sum = convertToMicroMeter(e[0][0], e[0][1]) + convertToMicroMeter(e[1][0], e[1][1]);
console.log(convertToUnit(sum, smallestUnit) + smallestUnit);
function convertToMicroMeter(n, unit) {
  return n * unitInMicroMeter[unit];
}
function convertToUnit(n, unit) {
  return Number((n / unitInMicroMeter[unit]).toFixed(5));
}

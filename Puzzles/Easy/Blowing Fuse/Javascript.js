var inputs = readline().split(" ");
const n = parseInt(inputs[0]); //Nb appareils
const m = parseInt(inputs[1]); //Nb de click qui vont ce produire
const c = parseInt(inputs[2]); //Capacité du fusible
let actuelA = 0;
let maxA = 0;
let listAppareils = [];
var inputs = readline().split(" ");
for (let i = 0; i < n; i++) {
  listAppareils.push({ ampere: parseInt(inputs[i]), etat: false });
}
var inputs = readline().split(" ");
for (let i = 0; i < m; i++) {
  const mx = parseInt(inputs[i]) - 1;
  listAppareils[mx].etat = !listAppareils[mx].etat;
  actuelA += listAppareils[mx].etat ? listAppareils[mx].ampere : -listAppareils[mx].ampere;
  if (actuelA > maxA) {
    maxA = actuelA;
  }
}
if (maxA > c) {
  console.log("Fuse was blown.");
} else {
  console.log(`Fuse was not blown.\nMaximal consumed current was ${maxA} A.`);
}

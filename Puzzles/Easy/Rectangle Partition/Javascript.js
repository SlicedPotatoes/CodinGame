var inputs = readline().split(" ");
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
let arrayX = [0];
let arrayY = [0];
var inputs = readline().split(" ");
for (let i = 0; i < countX; i++) {
  const x = parseInt(inputs[i]);
  arrayX.push(x);
}
arrayX.push(w);
var inputs = readline().split(" ");
for (let i = 0; i < countY; i++) {
  const y = parseInt(inputs[i]);
  arrayY.push(y);
}
arrayY.push(h);

let count = 0;
for (let i = 0; i < arrayX.length - 1; i++) {
  for (let j = 1; j < arrayX.length; j++) {
    for (let k = 0; k < arrayY.length - 1; k++) {
      for (let l = 1; l < arrayY.length; l++) {
        let x1 = arrayX[i];
        let x2 = arrayX[j];
        let y1 = arrayY[k];
        let y2 = arrayY[l];
        if (x1 != x2 && x1 < x2 && y1 != y2 && y1 < y2) {
          if (x2 - x1 == y2 - y1) {
            count++;
          }
        }
      }
    }
  }
}

console.log(count);

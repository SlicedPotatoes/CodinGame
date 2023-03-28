var inputs = readline().split(" ");
const xA = parseInt(inputs[0]);
const yA = parseInt(inputs[1]);
const xB = parseInt(inputs[2]);
const yB = parseInt(inputs[3]);

let listEquationDroite = [];

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const a = parseInt(inputs[0]);
  const b = parseInt(inputs[1]);
  const c = parseInt(inputs[2]);
  let sameLine = false;
  for (let j = 0; j < listEquationDroite.length; j++) {
    let val = listEquationDroite[j];
    if (isSameLine(a, b, c, val.a, val.b, val.c)) {
      sameLine = true;
      break;
    }
  }
  if (!sameLine) {
    listEquationDroite.push({ a: a, b: b, c: c });
  }
}
let onLine = false;
let num = 0;
listEquationDroite.forEach((el) => {
  let _a = el.a * xA + el.b * yA + el.c == 0 ? "0" : el.a * xA + el.b * yA + el.c > 0 ? "1" : "-1";
  let _b = el.a * xB + el.b * yB + el.c == 0 ? "0" : el.a * xB + el.b * yB + el.c > 0 ? "1" : "-1";
  console.error("a: " + _a + " b: " + _b);
  if (_a == 0 || _b == 0) {
    onLine = true;
  }
  if (_a * _b < 0) {
    num++;
  }
});

if (onLine) {
  console.log("ON A LINE");
} else {
  if (num % 2 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
function isSameLine(a, b, c, a2, b2, c2) {
  // Calculer le coefficient directeur pour les deux droites
  let m = -a / b;
  let m2 = -a2 / b2;

  // Si les coefficients directs sont égaux, les droites sont parallèles
  if (m == m2) {
    // Si les droites sont parallèles et ont la même ordonnée à l'origine, alors elles sont les mêmes droites
    if (c / a == c2 / a2) {
      return true;
    }
  }

  return false;
}

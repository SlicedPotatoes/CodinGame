const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  let X = readline();
  if (!isValidSyntaxt(X)) {
    console.log("INVALID SYNTAX");
  } else if (!isValidDate(X)) {
    console.log("INVALID DATE");
  } else {
    let x = 10;
    while (x == 10) {
      x = 0;
      let multiple = [3, 7, 9, 0, 5, 8, 4, 2, 1, 6];
      for (let j = 0; j < 10; j++) {
        if (j != 3) {
          x += parseInt(X[j]) * multiple[j];
        }
      }
      x = x % 11;
      if (x == 10) {
        let number = parseInt(X[0] + X[1] + X[2]) + 1;
        let array = X.split("");
        array[0] = String(number)[0];
        array[1] = String(number)[1];
        array[2] = String(number)[2];
        X = array.join("");
      }
    }
    if (X[3] == x) {
      console.log("OK");
    } else {
      let array = X.split("");
      array[3] = x;
      console.log(array.join(""));
    }
  }
}
function isValidDate(n) {
  let d = new Date("20" + n[8] + n[9] + "-" + n[6] + n[7] + "-" + n[4] + n[5]);
  if (d.getDate() == parseInt(n[4] + n[5])) {
    return true;
  } //Javascript change la date si de base elle n'existe pas ducoup on check si elle a changé
  return false;
}
function isValidSyntaxt(n) {
  if (n.length != 10) {
    return false;
  }
  if (n[0] == "0") {
    return false;
  }
  return /^-?\d+$/.test(n);
}

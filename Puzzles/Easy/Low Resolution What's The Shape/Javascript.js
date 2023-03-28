var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
let array = [];
for (let i = 0; i < H; i++) {
  array.push(readline());
}
let b1 = [0, 0]; //pour le bord 1, 1er indice = nombre de 'X', 2eme indice nombre de char != '.'
let b2 = [0, 0]; //
let b3 = [0, 0]; //
let b4 = [0, 0]; //
for (let i = 0; i < W; i++) {
  //Parcour de la longueur de la ligne 0
  if (array[0][i] == "X") {
    b1[0]++;
  } else if (array[0][i] != ".") {
    b1[1]++;
  }
}
for (let i = 0; i < H; i++) {
  //Parcour de la hauteur de la colonne 0
  if (array[i][0] == "X") {
    b2[0]++;
  } else if (array[i][0] != ".") {
    b2[1]++;
  }
}
for (let i = 0; i < W; i++) {
  //Parcour de la longue de la derniere ligne
  if (array[H - 1][i] == "X") {
    b3[0]++;
  } else if (array[H - 1][i] != ".") {
    b3[1]++;
  }
}
for (let i = 0; i < H; i++) {
  //Parcour de la hauteur de la derniere colonne
  if (array[i][W - 1] == "X") {
    b4[0]++;
  } else if (array[i][W - 1] != ".") {
    b4[1]++;
  }
}
if (b1[0] == W && b2[0] == H && b3[0] == W && b4[0] == H) {
  console.log("Rectangle");
} //Si tout les bords son rempli de 'X' c'est un rectangle
else if (b1[0] + b1[1] == b3[0] + b3[1] && b2[0] + b2[1] == b4[0] + b4[1]) {
  console.log("Ellipse");
} //Si la somme du nombre de 'X' et de char != '.' pour chaque bord est egale c'est une ellipse
else {
  console.log("Triangle");
} //Sinon c'est un triangle

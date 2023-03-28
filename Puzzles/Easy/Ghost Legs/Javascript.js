var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
var array = [];
var entree = [];

for (let i = 0; i < H; i++) {
  const line = readline();
  array.push(line);
}

//Isole les entrées dans un tableau
for (let i = 0; i < W; i++) {
  if (array[0][i] != " ") {
    entree.push(array[0][i]);
  }
}
for (let answerI = 0; answerI < entree.length; answerI++) {
  var index;
  for (let i = 0; i < W; i++) {
    //Récupére l'index de depart
    if (array[0][i] == entree[answerI]) {
      index = i;
    }
  }
  for (let i = 1; i < H; i++) {
    var indexChanged = false;
    if (index - 1 > 0) {
      //Vérifie si on dépasse pas les limites du array
      if (array[i][index - 1] == "-") {
        index -= 3;
        indexChanged = true;
      }
    }
    if (index + 1 < W && !indexChanged) {
      //Vérifie si on dépasse pas les limites du array
      if (array[i][index + 1] == "-") {
        index += 3;
      }
    }
    if (i == H - 1) {
      //Si c'est un nombre on récupére la reponse
      console.log(entree[answerI] + array[i][index]);
    }
  }
}

let array = [];
for (let i = 0; i < 6; i++) {
  array.push(readline().split(""));
}
let treeNeedCut = 0; //Nb d'arbre a coupé
let countFire = 0; //Nb de feu
let countNotTreeFire = 0; //Nb d'element autre qu'un arbre ou un feu
for (let i = 0; i < 6; i++) {
  //Parcourir la map
  for (let j = 0; j < 6; j++) {
    if (array[i][j] == "*") {
      //Si il y a un feu
      countFire++;
      let arrayPos = [
        //Liste des positions a check
        [i - 2, j - 2],
        [i - 2, j - 1],
        [i - 2, j],
        [i - 2, j + 1],
        [i - 2, j + 2],
        [i - 1, j - 2],
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i - 1, j + 2],
        [i, j - 2],
        [i, j - 1],
        [i, j + 1],
        [i, j + 2],
        [i + 1, j - 2],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
        [i + 1, j + 2],
        [i + 2, j - 2],
        [i + 2, j - 1],
        [i + 2, j],
        [i + 2, j + 1],
        [i + 2, j + 2],
      ];
      for (let a = 0; a < arrayPos.length; a++) {
        //Parcour de la liste des positions
        if (arrayPos[a][0] >= 0 && arrayPos[a][0] < 6 && arrayPos[a][1] >= 0 && arrayPos[a][1] < 6) {
          //Si les positions ne depasse pas la map
          if (array[arrayPos[a][0]][arrayPos[a][1]] == "#") {
            //On Check si c'est un arbres
            treeNeedCut++;
            array[arrayPos[a][0]][arrayPos[a][1]] = treeNeedCut;
          }
        }
      }
    } else if (array[i][j] == "=" || array[i][j] == "o") {
      countNotTreeFire++;
    }
  }
}
if (countFire == 0) {
  console.log("RELAX");
} else if (countFire + treeNeedCut + countNotTreeFire == 36 || treeNeedCut == 0) {
  console.log("JUST RUN");
} else {
  console.log(treeNeedCut);
}

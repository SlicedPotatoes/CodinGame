let size = parseInt(readline());
let angle = parseInt(readline());

// Initialise un tableau vide pour stocker les valeurs de la matrice
let block = [];

for (let i = 0; i < size; i++) {
  block.push(readline().split(" "));
}

// Effectue la rotation de la matrice en utilisant la valeur de angle
angle = (angle - 45) % 360;
while (angle > 0) {
  block = rotateMatrix(block);
  angle -= 90;
}

// Boucle à travers chaque diagonale de la matrice en commençant par la dernière
for (let i = size - 1; i >= -size; i--) {
  // Crée une chaîne contenant des espaces en fonction de la valeur de i
  let sp = " ".repeat(Math.abs(i));
  // Affiche la diagonale courante avec les espaces ajoutés en début et fin de chaîne si la longueur de la diagonale est différente de zéro
  if (getDiagonal(block, i).length) console.log(sp + getDiagonal(block, i).join(" ") + sp);
}

// Fonction pour effectuer une rotation de 90 degrés de la matrice donnée
function rotateMatrix(matrix) {
  // Initialise un tableau vide pour stocker la matrice tournée
  let rotated = [];
  // Boucle à travers chaque ligne de la matrice
  for (let i = 0; i < matrix.length; i++) {
    rotated.push([]);
    // Boucle à travers chaque colonne de la matrice
    for (let j = 0; j < matrix[i].length; j++) {
      // Stock les valeurs tournées dans le tableau rotated
      rotated[i][j] = matrix[j][matrix.length - 1 - i];
    }
  }
  return rotated;
}

// Fonction pour obtenir la diagonale de la matrice donnée à l'offset donné
function getDiagonal(matrix, offset) {
  // Initialise un tableau vide pour stocker la diagonale
  let diagonal = [];
  // Boucle à travers chaque ligne de la matrice
  for (let i = 0; i < matrix.length; i++) {
    let j = i + offset;
    // Si la colonne correspondant à l'offset donné existe dans la ligne courante
    if (j >= 0 && j < matrix.length) {
      // Ajoute la valeur de cette colonne dans le tableau diagonal
      diagonal.push(matrix[i][j]);
    }
  }
  return diagonal;
}

let a = readline();
let binary = "";
let answer = "";
for (let i = 0; i < a.length; i++) {
  let bin = a[i].charCodeAt(0).toString(2); //Converti un char en binaire
  if (bin.length != 7) {
    //Si il est pas codé sur 7 bits ajouté le nombre de 0 manquant au début
    for (let a = 0; a < 7 - bin.length; a++) {
      bin = "0" + bin;
    }
  }
  binary += bin;
}
binary = binary.split("");
while (binary.length != 0) {
  //Encode Process
  let digit = binary[0]; //Récupére la premiére valeur du tableau
  let count = "0";
  for (let i = 1; i < binary.length; i++) {
    //Compte le nombre d'occurance consécutive  de digit
    if (binary[i] == digit) {
      count += "0";
    } else {
      break;
    }
  }
  binary.splice(0, count.length); //Enléve les occurances trouvé au dessus
  answer += (digit == 0 ? "00" : "0") + " " + count + " "; //0 ou 00 si digit est 1 ou 0
}
console.log(answer.slice(0, -1)); //Supprime l'espace de fin

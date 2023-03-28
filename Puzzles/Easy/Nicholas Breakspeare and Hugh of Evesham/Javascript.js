let digit = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let numberTen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let powerOfTen = ["hundred", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion"];

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let number = readline();
  let answer = "";
  if (Math.sign(number) == -1) {
    answer = "negative ";
    number = number.substring(1, number.length);
  }
  let split = getSplit(number); //Nombre de groupe de 3
  let array = groupBy3(number, split); //Array contenant les groupes de 3 (commancent par le dernier exemple: number = 52000 array = ['000', '052'])
  console.error(array);
  for (let j = split - 1; j >= 0; j--) {
    //Parcour le tableau en commancent par le dernier index
    if (parseInt(array[j][0]) > 0) {
      //Si le premier chiffre de l'element du tab est > a 0 (centaine)
      answer += digit[parseInt(array[j][0])] + " " + powerOfTen[0] + " ";
    }
    if (parseInt(array[j][1]) > 0) {
      //Si le 2eme chiffre de l'element du tab est > a 0 (dizaine)
      if (parseInt(array[j][1]) == 1) {
        //Si le 2eme chiffre de l'element du tab est 1 on utilise le tableau numberTen (nombre de 10 a 19)
        answer += numberTen[parseInt(array[j][2])] + " ";
      } else {
        //Sinon on utilise le tableau tens (20, 30, ..., 90)
        answer += tens[parseInt(array[j][1]) - 2];
        if (parseInt(array[j][2]) > 0) {
          //Si le chiffre suivant est > 0 on l'ajoute avec un - devant (exemple 21: twenty-one)
          answer += "-" + digit[parseInt(array[j][2])] + " ";
        } else {
          //Le chiffre est 0 on fais rien (exemple 20: twenty)
          answer += " ";
        }
      }
    } else {
      //Le 2eme chiffre de l'element du tab est 0
      if (parseInt(array[j][2]) > 0 || number.length == 1) {
        //Si le 3eme chiffre de l'element est > 0 OU la longeur du nom est 1 (pour prendre en compte un 0 tout seul)
        answer += digit[parseInt(array[j][2])] + " ";
      }
    }
    if (j > 0 && (array[j][2] != 0 || array[j][1] != 0 || array[j][0] != 0)) {
      //Si on est pas sur le dernier element du tableau (les centaines sur le nombre) et qu'au moins un element du tab n'est pas 0
      answer += powerOfTen[j] + " "; //On ecris la puissance de 10
    }
  }
  answer = answer.substring(0, answer.length - 1);
  console.log(answer);
}
function groupBy3(n, split) {
  let reversedNumber = n.split("").reverse();
  let array = [];
  for (let j = 0; j < split; j++) {
    let str = j * 3 + 2 <= reversedNumber.length - 1 ? reversedNumber[j * 3 + 2] : "0";
    str += j * 3 + 1 <= reversedNumber.length - 1 ? reversedNumber[j * 3 + 1] : "0";
    str += reversedNumber[j * 3];
    array.push(str);
  }
  return array;
}
function getSplit(n) {
  let split = Math.floor(n.length / 3);
  if (n.length % 3 != 0) {
    split++;
  }
  return split;
}

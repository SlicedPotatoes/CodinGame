let intext = readline();
intext = intext.toLowerCase();
intext = Space(intext); //Enléve les espaces répétés
let array = intext.split("");
array[0] = array[0].toUpperCase(); //Premiere maj
for (let i = 0; i < array.length; i++) {
  if (array[i] != " " && !isCharNumber(array[i]) && !isLetter(array[i])) {
    //Ponctuation répété
    let c = array[i];
    if (i + 1 < array.length && array[i + 1] == c) {
      array.splice(i, 1);
      i = i - 2; //Revenir en arriére pour refaire des test avec ce changement
      continue;
    }
  }
  if (array[i] != " " && !isCharNumber(array[i]) && !isLetter(array[i])) {
    //Space ponctuantion
    let a = 0;
    if (i - 1 != -1 && array[i - 1] == " ") {
      array.splice(i - 1, 1);
      a++;
    }
    if (i + 1 - a < array.length && array[i + 1 - a] != " ") {
      array.splice(i + 1 - a, 0, " ");
      a++;
    }
    if (a > 0) {
      i = i - a - 2; //Revenir en arriére pour refaire des test avec ce changement
      continue;
    }
  }
  if (array[i] == "." && i + 2 < array.length) {
    //UpperCase apres un "."
    array[i + 2] = array[i + 2].toUpperCase();
  }
}
intext = array.join("");
console.log(intext);
function Space(str) {
  let array = str.split("");
  let end = false;
  let index = 0;
  while (!end) {
    index = array.indexOf(" ", index + 1);
    if (index == -1) {
      end = true;
    } else {
      let i = 0;
      while (array[index + i] == " ") {
        i++;
      }
      if (i > 1) {
        array.splice(index, i - 1);
      }
    }
  }
  return array.join("");
}
function isCharNumber(c) {
  return c >= "0" && c <= "9";
}
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

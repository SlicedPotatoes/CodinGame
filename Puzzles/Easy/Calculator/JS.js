const n = parseInt(readline());
let value = 0; //Premiere valeur de l'opération
let value2 = 0; //Seconde valeur de l'opération
let screen = ""; //Affichage
let operation = ""; //Opération

function updateValue() {
  if (operation == "+") {
    value += value2;
  } else if (operation == "-") {
    value -= value2;
  } else if (operation == "x") {
    value *= value2;
  } else if (operation == "/") {
    value /= value2;
  } else {
    value = value2;
  }
  value = Math.round(value * 1000) / 1000;
}

for (let i = 0; i < n; i++) {
  const key = readline();

  //Si l'opération a une longeur de 2, c'est que la touche = a été appuyer
  if (operation.length == 2 && key == "=") {
    operation = operation[0];
  } else if (operation.length == 2) {
    operation = "";
  }

  //Si la key est une opération
  if (key == "+" || key == "-" || key == "x" || key == "/") {
    //Et que le screen n'est pas vide, on effectue l'opération
    if (screen != "") {
      updateValue();
    }
    //L'opération prend la valeur de key pressé et affichaque la premiere valeur de l'opération
    operation = key;
    screen = value.toString();
  }
  //Si la key est AC, on reset toute les variables et mettons screen a 0
  else if (key == "AC") {
    value = 0;
    value2 = 0;
    operation = "";
    screen = "0";
  }
  //Si la key est =
  else if (key == "=") {
    updateValue(); //On effectue l'opération
    screen = value.toString(); //On met a jour l'affichage
    operation += "="; //On ajoute un = a l'opération (utilisé dans le cas de multiple appuis sur =)
  }
  //La key est un chiffre, on update l'affichage et change la valeur2 de l'opération
  else {
    screen += key;
    value2 = parseInt(screen);
  }
  console.log(screen); //On affiche l'affichage
  //Si la key est autre chose qu'un chiffre, apres l'affichaque du screen on le reset
  if (key == "+" || key == "-" || key == "x" || key == "/" || key == "AC" || key == "=") {
    screen = "";
  }
}

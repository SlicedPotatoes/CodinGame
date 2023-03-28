let resistances = { "(": -1, ")": -1, "[": -1, "]": -1 }; //List of resistances with name and value
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  //Fill resistances array
  var inputs = readline().split(" ");
  resistances[inputs[0]] = inputs[1];
}
console.error(resistances);
const circuit = readline().split(" ");
let indexArrayParBra = GetIndexOfParBra(); //Get all index of brackets and parentheses for process
let orderProcess = []; //List of calculations to be done with the start index, end index, type of calcul, result and if the calcul was used
while (indexArrayParBra != 0) {
  //Fill orderProcess
  let lastOpenPar = -1;
  let lastOpenBra = -1;
  for (let i = 0; i < indexArrayParBra.length; i++) {
    if (indexArrayParBra[i].type == "bra" && indexArrayParBra[i].value == "open") {
      lastOpenBra = indexArrayParBra[i].index;
    } //find the farthest tha has not been closed
    else if (indexArrayParBra[i].type == "par" && indexArrayParBra[i].value == "open") {
      lastOpenPar = indexArrayParBra[i].index;
    } //find the farthest tha has not been closed
    else if (indexArrayParBra[i].value == "close") {
      //find the first closed parentheses or brackets and assign it to its opening
      let index = indexArrayParBra[i].index;
      orderProcess.push({
        indexStart: indexArrayParBra[i].type == "bra" ? lastOpenBra : lastOpenPar,
        indexEnd: index,
        type: indexArrayParBra[i].type,
        value: null,
        used: false,
      });
      DeleteInTab(indexArrayParBra[i].type == "bra" ? lastOpenBra : lastOpenPar); //Delete in array
      DeleteInTab(index);
      break;
    }
  }
}
let indexAlreadyCalculated = []; //List of all index (of circuit array) already used in calcul
orderProcess.forEach((element) => {
  //Process loop
  let arr = []; //Value used in actuel process calcul
  let val = 0; //Value of actuel process
  for (let i = element.indexStart + 1; i < element.indexEnd; i++) {
    //Get value of all index between indexStart and indexEnd
    let v = resistances[circuit[i]];
    if (!thisIndexAlreadyCalculated(i)) {
      if (v != -1) {
        arr.push(v);
      }
      indexAlreadyCalculated.push(i);
    }
  }
  orderProcess.forEach((e) => {
    if (e.indexStart > element.indexStart && e.indexEnd < element.indexEnd && !e.used) {
      e.used = true;
      arr.push(e.value);
    }
  });
  switch (element.type) {
    case "par":
      arr.forEach((e) => {
        val += e;
      });
      break;
    case "bra":
      arr.forEach((e) => {
        val += 1 / e;
      });
      val = 1 / val;
      break;
  }
  element.value = val;
  console.error(arr);
});

console.log(orderProcess[orderProcess.length - 1].value.toFixed("1"));
function thisIndexAlreadyCalculated(index) {
  for (let i = 0; i < indexAlreadyCalculated.length; i++) {
    if (indexAlreadyCalculated[i] == index) {
      return true;
    }
  }
  return false;
}
function DeleteInTab(index) {
  for (let i = 0; i < indexArrayParBra.length; i++) {
    if (indexArrayParBra[i].index == index) {
      indexArrayParBra.splice(i, 1);
      break;
    }
  }
}
function GetIndexOfParBra() {
  let arr = [];
  for (let i = 0; i < circuit.length; i++) {
    if (circuit[i] == "(") {
      arr.push({ index: i, type: "par", value: "open" });
    } else if (circuit[i] == ")") {
      arr.push({ index: i, type: "par", value: "close" });
    } else if (circuit[i] == "[") {
      arr.push({ index: i, type: "bra", value: "open" });
    } else if (circuit[i] == "]") {
      arr.push({ index: i, type: "bra", value: "close" });
    }
  }
  return arr;
}

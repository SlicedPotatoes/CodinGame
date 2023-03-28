let spreadsheet = [];
let indexNotCalculated = []; //all index of spreadsheet not calculated
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  let object = {
    operation: inputs[0],
    arg1: inputs[1],
    arg2: inputs[2],
    value: null,
  };
  if (canProcess(object, i)) {
    //Check if we can calcul and calcul if true
    object.value = process(object);
  } else {
    //If we cant calcul add the index in indexNotCalculated
    indexNotCalculated.push(i);
  }
  spreadsheet.push(object);
}
let index = 0;
while (indexNotCalculated.length != 0) {
  let object = spreadsheet[indexNotCalculated[index]];
  if (canProcess(object)) {
    //Check if we can calcul
    object.value = process(object); //calcul
    indexNotCalculated.splice(index, 1); //delete index in indexNotCalculated
    index = 0; //reset actuel index (of array indexNotCalculated) check
  } else {
    index++; //increase index (of array indexNotCalculated)
  }
}
for (let i = 0; i < N; i++) {
  console.log(spreadsheet[i].value);
}
function process(object) {
  let valueArg1 = parseInt(object.arg1[0] == "$" ? spreadsheet[parseInt(object.arg1.substring(1))].value : object.arg1); //Get the value of arg1
  let valueArg2 = parseInt(object.arg2[0] == "$" ? spreadsheet[parseInt(object.arg2.substring(1))].value : object.arg2); //Get the value of arg2
  let answer = 0;
  switch (object.operation) {
    case "VALUE":
      answer = valueArg1;
      break;
    case "ADD":
      answer = valueArg1 + valueArg2;
      break;
    case "SUB":
      answer = valueArg1 - valueArg2;
      break;
    case "MULT":
      answer = valueArg1 * valueArg2;
      break;
  }
  if (answer === -0) {
    answer = 0;
  }
  return answer;
}
function canProcess(object, i = -1) {
  let argIsRef = [false, false];
  let process = true;
  if (object.arg1[0] == "$") {
    argIsRef[0] = true;
  }
  if (object.arg2[0] == "$") {
    argIsRef[1] = true;
  }
  if (argIsRef[0] || argIsRef[1]) {
    if (argIsRef[0]) {
      //Arg1 is ref
      let indexRef = parseInt(object.arg1.substring(1));
      if (indexRef < i || i == -1) {
        //Check if ths index of the ref has been checked
        if (indexNotCalculated.includes(indexRef)) {
          process = false;
        } //Check if the ref is in indexNotCalculated
      } else {
        process = false;
      }
    }
    if (argIsRef[1]) {
      //Arg2 is ref
      let indexRef = parseInt(object.arg2.substring(1));
      if (indexRef < i || i == -1) {
        //Check if ths index of the ref has been checked
        if (indexNotCalculated.includes(indexRef)) {
          process = false;
        } //Check if the ref is in indexNotCalculated
      } else {
        process = false;
      }
    }
  }
  return process;
}

const n = parseInt(readline());
const m = parseInt(readline());
let inputsArray = [];
let outputsArray = [];
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  inputsArray.push({ name: inputs[0], signal: inputs[1] });
}
for (let i = 0; i < m; i++) {
  var inputs = readline().split(" ");
  outputsArray.push({ name: inputs[0], type: inputs[1], signalName1: inputs[2], signalName2: inputs[3] });
}
for (let i = 0; i < m; i++) {
  //Process
  let output = outputsArray[i]; //Get output with index
  let outputSignal = ""; //output signal for answer
  let indexSignal1 = inputsArray.map((object) => object.name).indexOf(output.signalName1); //Get index by name for signal1
  let indexSignal2 = inputsArray.map((object) => object.name).indexOf(output.signalName2); //Get index by name for signal2
  for (let j = 0; j < inputsArray[0].signal.length; j++) {
    let valueSignal1;
    let valueSignal2;
    if (inputsArray[indexSignal1].signal[j] == "-") {
      valueSignal1 = 1;
    } //- = 1 | _ = 0
    else {
      valueSignal1 = 0;
    }
    if (inputsArray[indexSignal2].signal[j] == "-") {
      valueSignal2 = 1;
    } //- = 1 | _ = 0
    else {
      valueSignal2 = 0;
    }
    switch (output.type) {
      case "AND":
        if (valueSignal1 == 1 && valueSignal2 == 1) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
      case "OR":
        if (valueSignal1 == 1 || valueSignal2 == 1) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
      case "XOR":
        if ((valueSignal1 == 1 || valueSignal2 == 1) && valueSignal1 != valueSignal2) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
      case "NAND":
        if (!(valueSignal1 == 1 && valueSignal2 == 1)) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
      case "NOR":
        if (!(valueSignal1 == 1 || valueSignal2 == 1)) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
      case "NXOR":
        if (!((valueSignal1 == 1 || valueSignal2 == 1) && valueSignal1 != valueSignal2)) {
          outputSignal += "-";
        } else {
          outputSignal += "_";
        }
        break;
    }
  }
  console.log(output.name + " " + outputSignal);
}

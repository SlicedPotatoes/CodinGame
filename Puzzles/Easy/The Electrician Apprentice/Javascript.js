let listCircuit = []; //List des circuits stocké de facon a pouvoir etre exploité pour la suite
let listSwitch = {}; //The list of switches with their state after tom's actions
const C = parseInt(readline());
for (let i = 0; i < C; i++) {
  //Parsing to have a structure like this: circuit {name: string, elements: array} elements { type: char ('=' or '-'), switch: array}
  const WIRING = readline().split(" ");
  let circuit = { name: WIRING[0], elements: [] };
  let actualTypeCircuit = null;
  let actuelElInCircuit = [];
  for (let j = 1; j < WIRING.length; j++) {
    let el = WIRING[j];
    if (el == "-" || el == "=") {
      if (actualTypeCircuit != null) {
        circuit.elements.push({ type: actualTypeCircuit, switch: actuelElInCircuit });
        actuelElInCircuit = [];
      }
      actualTypeCircuit = el;
    } else {
      actuelElInCircuit.push(el);
      listSwitch[el] = false;
    }
  }
  circuit.elements.push({ type: actualTypeCircuit, switch: actuelElInCircuit });
  listCircuit.push(circuit);
}
const A = parseInt(readline());
for (let i = 0; i < A; i++) {
  //Change the state of the switches
  const SWITCH = readline();
  listSwitch[SWITCH] = !listSwitch[SWITCH];
}
for (let i = 0; i < C; i++) {
  let element = listCircuit[i];
  let isOn = true; //Stored the state of the circuit element
  for (let j = 0; j < element.elements.length; j++) {
    if (!isOn) {
      break;
    }
    let el = element.elements[j];
    if (el.type == "-") {
      //If the switches are in series circuit
      for (let k = 0; k < el.switch.length; k++) {
        //Browse the state of all the switches in the list if one is turned off set isOn to false
        if (!listSwitch[el.switch[k]]) {
          isOn = false;
          break;
        }
      }
    } else {
      //If the switches are in parallel circuit
      let bool = false;
      for (let k = 0; k < el.switch.length; k++) {
        //Browse the state of all the switches in the list if one is turned on set bool to true
        if (listSwitch[el.switch[k]]) {
          bool = true;
        }
      }
      if (!bool) {
        isOn = false;
        break;
      } //if bool is false set isOn on false
    }
  }
  console.log(element.name + " is " + (isOn ? "ON" : "OFF"));
}

const instructions = readline().split(" ");
let listInstructions = [];
for (let i = 0; i < instructions.length; i++) {
  //
  let inst = instructions[i]; //
  if (inst.indexOf("PLANTMOW") != -1) {
    //
    let str = inst.substring(8); //
    listInstructions.push({ r: getIndex(str[1]), c: getIndex(str[0]), d: str.substring(2), type: "PLANTMOW" }); //
  } // Parse instructions to format
  else if (inst.indexOf("PLANT") != -1) {
    // them for future use
    let str = inst.substring(5); //
    listInstructions.push({ r: getIndex(str[1]), c: getIndex(str[0]), d: str.substring(2), type: "PLANT" }); //
  } //
  else {
    //
    listInstructions.push({ r: getIndex(inst[1]), c: getIndex(inst[0]), d: inst.substring(2), type: "" }); //
  } //
} //
let array = Array(25)
  .fill()
  .map(() => Array(19).fill("{}"));
for (let i = 0; i < listInstructions.length; i++) {
  //For each instruction
  for (let j = 0; j < array.length; j++) {
    //Browse the array
    for (let k = 0; k < array[0].length; k++) {
      //If distance > diam/2 => apply instruction
      if (distanceE(k, j, listInstructions[i].c, listInstructions[i].r) < listInstructions[i].d / 2) {
        array[j][k] = listInstructions[i].type == "PLANT" ? "{}" : listInstructions[i].type == "" ? "  " : array[j][k] == "  " ? "{}" : "  ";
      }
    }
  }
}
for (let i = 0; i < 25; i++) {
  console.log(array[i].join(""));
}
function getIndex(nb) {
  return nb.charCodeAt(0) - "a".charCodeAt(0);
}
function distanceE(x1, y1, x2, y2) {
  //Distance Euclidienne
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

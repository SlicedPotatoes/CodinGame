let str = ""; //
for (let i = 0; i < 3; i++) {
  // build a string with the positions of the dice
  str += readline().replace(" ", ""); //
} //
let commands = readline();
let myPos = [str[2]];
let front = [str[0]];
let behind = [str[5]];
let left = [str[1]];
let right = [str[3]];
let opposite = [str[4]]; //Dice variable
for (let i = 0; i < commands.length; i++) {
  //
  switch (
    commands[i] //
  ) {
    case "U": //
      swap(myPos, front); //
      swap(front, behind); //
      swap(front, opposite); //
      break; //
    case "L": //  Process Walk on the dice
      swap(myPos, left); //
      swap(left, behind); //
      swap(right, front); //
      swap(front, opposite); //
      break; //
    case "D": //
      swap(myPos, behind); //
      swap(left, right); //
      swap(front, opposite); //
      break; //
    case "R": //
      swap(myPos, right); //
      swap(right, behind); //
      swap(left, front); //
      swap(front, opposite); //
      break; //
  } //
} //
console.log(myPos[0]);
function swap(a, b) {
  //
  let temp = a[0]; // function for swap
  a[0] = b[0]; // i pass 2 array as input
  b[0] = temp; // because they are references
} //

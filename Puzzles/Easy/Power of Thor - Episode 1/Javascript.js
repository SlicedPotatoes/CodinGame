var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  var answer = "";
  if (initialTY > lightY) {
    answer += "N";
    initialTY--;
  } else if (initialTY < lightY) {
    answer += "S";
    initialTY++;
  }
  if (initialTX > lightX) {
    answer += "W";
    initialTX--;
  } else if (initialTX < lightX) {
    answer += "E";
    initialTX++;
  }
  console.log(answer);
}

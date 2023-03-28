var inputs = readline().split(" ");
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]); // maximum number of rounds
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbTotalClones = parseInt(inputs[5]); // number of generated clones
const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
const nbElevators = parseInt(inputs[7]); // number of elevators
let listElevator = [];
for (let i = 0; i < nbElevators; i++) {
  var inputs = readline().split(" ");
  const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
  const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
  listElevator.push({ floor: elevatorFloor, pos: elevatorPos });
}
console.error(listElevator);
// game loop
while (true) {
  var inputs = readline().split(" ");
  const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
  const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
  const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

  let action = "WAIT";
  let pos = cloneFloor == exitFloor ? exitPos : getElevatorByFloor(cloneFloor);
  let sign = Math.sign(pos - clonePos);
  if ((sign == -1 && direction == "RIGHT") || (sign == 1 && direction == "LEFT")) {
    action = "BLOCK";
  }

  console.log(action); // action: WAIT or BLOCK
}
function getElevatorByFloor(floor) {
  for (let i = 0; i < listElevator.length; i++) {
    if (listElevator[i].floor == floor) {
      return listElevator[i].pos;
    }
  }
}

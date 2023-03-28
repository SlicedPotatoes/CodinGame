var inputs = readline().split(" ");
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(" ");
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);
console.error(`Building Info: Width ${W} Heigth ${H}`);
console.error(`My Init Pos X: ${X0} Y: ${Y0}`);
let verMin = 0;
let verMax = H;
let horMin = 0;
let horMax = W;

let lastDep = null;
// game loop
while (true) {
  const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
  console.error(bombDir);

  if (lastDep) {
    if (lastDep.includes("U")) {
      verMin = bombDir.includes("U") ? verMin : Y0;
      verMax = bombDir.includes("U") ? Y0 : verMax;
    } else {
      verMin = bombDir.includes("D") ? Y0 : verMin;
      verMax = bombDir.includes("D") ? verMax : Y0;
    }
    if (lastDep.includes("R")) {
      horMin = bombDir.includes("R") ? X0 : horMin;
      horMax = bombDir.includes("R") ? horMax : X0;
    } else {
      horMin = bombDir.includes("L") ? horMin : X0;
      horMax = bombDir.includes("L") ? X0 : horMax;
    }
  }
  console.error(`verMin: ${verMin} verMax: ${verMax}`);
  console.error(`horMin: ${horMin} horMax: ${horMax}`);
  lastDep = bombDir;

  if (bombDir.includes("U") || bombDir.includes("D")) {
    Y0 = Math.floor(verMax - (verMax - verMin) / 2);
  }
  if (bombDir.includes("L") || bombDir.includes("R")) {
    X0 = Math.floor(horMax - (horMax - horMin) / 2);
  }
  console.log(`${X0} ${Y0}`);
}

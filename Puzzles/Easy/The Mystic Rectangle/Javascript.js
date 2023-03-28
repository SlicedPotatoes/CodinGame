var inputs = readline().split(" ");
let x = parseInt(inputs[0]);
let y = parseInt(inputs[1]);
var inputs = readline().split(" ");
const u = parseInt(inputs[0]);
const v = parseInt(inputs[1]);
let difX = Math.abs(u - x) > 100 ? 200 - Math.abs(u - x) : Math.abs(u - x); //Get the difference on the x axis considering going through an edge of the map
let difY = Math.abs(v - y) > 75 ? 150 - Math.abs(v - y) : Math.abs(v - y); //Get the difference on the y axis considering going through an edge of the map
let difDiag = difX > difY ? difY : difX; //The number of diagonal moves is equal to the smallest difference between the x and y axes
difX = Math.sign(difX - difDiag) == -1 ? 0 : difX - difDiag; //remove the number of diagonal has the difference on the X axis
difY = Math.sign(difY - difDiag) == -1 ? 0 : difY - difDiag; //remove the number of diagonal has the difference on the Y axis
let time = difDiag * 0.5 + difX * 0.3 + difY * 0.4; //Calcul the time
console.log(time.toFixed(1));

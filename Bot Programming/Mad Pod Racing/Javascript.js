class CheckpointManager {
  constructor() {
    this.listCheckPoint = [];
    this.firstTurn = true;
  }
  checkCP(x, y) {
    if (this.listCheckPoint.some((e) => e.x === x && e.y === y)) {
      console.error("OH !");
      this.firstTurn = false;
    } else {
      console.error("push");
      this.listCheckPoint.push({ x: x, y: y });
    }
  }
  bestBoost(x, y) {
    if (!this.firstTurn) {
      let maxDistance = -Infinity;
      let maxCP = { x: 0, y: 0 };
      for (let i = 0; i < this.listCheckPoint.length; i++) {
        for (let j = 0; j < this.listCheckPoint.length; j++) {
          let el1 = this.listCheckPoint[i];
          let el2 = this.listCheckPoint[j];
          let d = distance(el1.x, el2.x, el1.y, el2.y);
          if (d > maxDistance) {
            d = maxDistance;
            maxCP = el2;
          }
        }
      }
      console.error(maxCP);
      if (maxCP.x === x && maxCP.y === y) {
        return true;
      }
    }
    return false;
  }
}
let boost = false;
let cpm = new CheckpointManager();
let lastX = 0;
let lastY = 0;
while (true) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
  const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
  const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
  const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
  var inputs = readline().split(" ");
  const opponentX = parseInt(inputs[0]);
  const opponentY = parseInt(inputs[1]);
  let text = "";
  let toDo = 100;
  if (useShield(opponentX, opponentY, x, y, nextCheckpointAngle)) {
    toDo = "SHIELD";
    text = "PROTECTION UwU";
  } else if (!boost && cpm.bestBoost(nextCheckpointX, nextCheckpointY) && Math.abs(nextCheckpointAngle) < 2) {
    toDo = "BOOST";
    text = " FULL POWWWWWA !!! VROOOOOOOOOM";
    boost = true;
  } else if (Math.abs(nextCheckpointAngle) > 90) {
    toDo = 0;
    text = " BAD ANGLE SLOW UwU";
  }

  if (text == "") {
    text = " " + toDo;
  }

  if (nextCheckpointX != lastX && nextCheckpointY != lastY) {
    cpm.checkCP(nextCheckpointX, nextCheckpointY);
    lastX = nextCheckpointX;
    lastY = nextCheckpointY;
  }

  //console.error('nextCheckpointAngle ' + nextCheckpointAngle)
  //console.error('nextCheckpointDist ' + nextCheckpointDist)
  console.log(nextCheckpointX + " " + nextCheckpointY + " " + toDo + text);
}
function distance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function useShield(opponentX, opponentY, X, Y, myAngle) {
  let angle = Math.atan2(opponentY - Y, opponentX - X);
  let angleDeg = (angle * 180) / Math.PI;
  if (Math.abs(myAngle - angleDeg) >= 5 && distance(opponentX, X, opponentY, Y) <= 500) {
    return true;
  }
  return false;
}

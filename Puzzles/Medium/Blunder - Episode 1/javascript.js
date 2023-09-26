function indexOfObjectByValues(array, targetObject) {
  for (let i = 0; i < array.length; i++) {
    const currentObject = array[i];
    if (currentObject.x === targetObject.x && currentObject.y === targetObject.y) {
      return i;
    }
  }
  return -1;
}
class Blunder {
  constructor(x, y, map, tp) {
    map[y][x] = " ";
    this.dirClock = ["S", "E", "N", "W"];
    this.dir = "S";
    this.x = x;
    this.y = y;
    this.map = map;
    this.modeCasseur = false;
    this.reverse = false;
    this.dep = [];
    this.tp = tp;
    this.visited = {};
    this.simulate();
  }
  simulate() {
    if (this.checkLoop()) {
      this.dep = ["LOOP"];
      return;
    }
    this.visited[this.getUniqueKey()] = true;
    const [x, y] = this.deplacement(this.x, this.y, this.dir);
    let nextDir = this.dir;
    let nextCase = this.map[y][x];
    if (["S", "E", "N", "W", " ", "I", "B"].indexOf(nextCase) != -1) {
      this.x = x;
      this.y = y;
    }
    if (["S", "E", "N", "W"].indexOf(nextCase) != -1) {
      nextDir = nextCase;
    } else if (["#", "X"].indexOf(nextCase) != -1) {
      if (nextCase == "X" && this.modeCasseur) {
        map[y][x] = " ";
        this.x = x;
        this.y = y;
        this.visited = {};
      } else {
        let i = this.reverse ? 3 : 0;
        let iEnd = this.reverse ? 0 : 3;
        let iInc = this.reverse ? -1 : 1;
        for (; i != iEnd; i += iInc) {
          let [_x, _y] = this.deplacement(this.x, this.y, this.dirClock[i]);
          let c = this.map[_y][_x];
          if (!(["#", "X"].indexOf(c) != -1)) {
            this.dir = this.dirClock[i];
            this.simulate();
            return;
          }
        }
        if (this.map[this.y][this.x] == "$") {
          this.dep.push(this.dir);
          return;
        }
      }
    } else if (nextCase == "I") {
      this.reverse = !this.reverse;
    } else if (nextCase == "B") {
      this.modeCasseur = !this.modeCasseur;
    } else if (nextCase == "T") {
      const index = indexOfObjectByValues(this.tp, { x: x, y: y });
      if (index == 0) {
        this.x = this.tp[1].x;
        this.y = this.tp[1].y;
      } else {
        this.x = this.tp[0].x;
        this.y = this.tp[0].y;
      }
    } else if (nextCase == "$") {
      this.dep.push(this.dir);
      return;
    }
    this.dep.push(this.dir);
    this.dir = nextDir;
    this.simulate();
  }
  deplacement(x, y, dir) {
    switch (dir) {
      case "S":
        y++;
        break;
      case "E":
        x++;
        break;
      case "N":
        y--;
        break;
      case "W":
        x--;
        break;
    }
    return [x, y];
  }
  checkLoop() {
    let key = this.getUniqueKey(this.x, this.y);
    return key in this.visited;
  }
  getUniqueKey() {
    return this.x + ":" + this.y + this.reverse + ":" + this.modeCasseur + ":" + this.dir;
  }
}
var inputs = readline().split(" ");
const L = parseInt(inputs[0]);
const C = parseInt(inputs[1]);
const map = [];
const tp = [];
const start = { x: -1, y: -1 };
for (let i = 0; i < L; i++) {
  const row = readline();
  map.push(row.split(""));
  for (let j = 0; j < C; j++) {
    if (row[j] == "@") {
      start.x = j;
      start.y = i;
    }
    if (row[j] == "T") {
      tp.push({ x: j, y: i });
    }
  }
}
for (let i = 0; i < L; i++) {
  console.error(map[i].join(""));
}
const blunder = new Blunder(start.x, start.y, map, tp);
for (let i = 0; i < blunder.dep.length; i++) {
  switch (blunder.dep[i]) {
    case "S":
      console.log("SOUTH");
      break;
    case "N":
      console.log("NORTH");
      break;
    case "E":
      console.log("EAST");
      break;
    case "W":
      console.log("WEST");
      break;
    default:
      console.log("LOOP");
      break;
  }
}

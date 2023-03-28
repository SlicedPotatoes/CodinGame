class Player {
  constructor(name) {
    this.name = name;
    this.killed = [];
  }
  kill(p) {
    this.killed.push(p.name);
    p.killedBy(this);
  }
  killedBy(p) {
    this.killer = p.name;
  }
  write() {
    this.killed = this.killed.sort();
    let str = "Name: " + this.name + "\nKilled: ";
    if (this.killed.length == 0) {
      str += "None\n";
    } else {
      for (let i = 0; i < this.killed.length; i++) {
        str += this.killed[i];
        if (i != this.killed.length - 1) {
          str += ", ";
        }
      }
      str += "\n";
    }
    if (this.killer == null) {
      str += "Killer: Winner";
    } else {
      str += "Killer: " + this.killer;
    }
    console.log(str);
  }
}
const tributes = parseInt(readline());
let playersArray = [];
for (let i = 0; i < tributes; i++) {
  const playerName = readline();
  playersArray.push(new Player(playerName));
}
playersArray.sort(AlphabeticalOrder);
const turns = parseInt(readline());
for (let i = 0; i < turns; i++) {
  let info = readline().split(" killed ");
  info[1] = info[1].split(", ");
  let p1 = playersArray.findIndex((element) => element.name == info[0]);
  for (let j = 0; j < info[1].length; j++) {
    let p2 = playersArray.findIndex((element) => element.name == info[1][j]);
    playersArray[p1].kill(playersArray[p2]);
  }
}
for (let i = 0; i < playersArray.length; i++) {
  playersArray[i].write();
  if (i != playersArray.length - 1) {
    console.log("");
  }
}
function AlphabeticalOrder(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
}

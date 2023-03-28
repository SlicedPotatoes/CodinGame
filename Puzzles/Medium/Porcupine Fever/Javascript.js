class Cage {
  constructor(sick, healthy, alive) {
    this.sick = sick;
    this.healthy = healthy;
    this.alive = alive;
  }
  countAlive() {
    this.alive -= this.sick;
    this.healthy -= this.sick * 2;
    this.sick *= 2;
    if (this.alive < 0) {
      return 0;
    }
    return this.alive;
  }
}
const N = parseInt(readline());
const Y = parseInt(readline());
let listCage = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const S = parseInt(inputs[0]);
  const H = parseInt(inputs[1]);
  const A = parseInt(inputs[2]);
  listCage.push(new Cage(S, H, A));
}
for (let i = 0; i < Y; i++) {
  let count = 0;
  listCage.forEach((e) => {
    count += e.countAlive();
  });
  console.log(count);
  if (count == 0) {
    break;
  }
}

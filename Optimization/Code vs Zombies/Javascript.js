while (true) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  const humanCount = parseInt(readline());
  let listHuman = [];
  for (let i = 0; i < humanCount; i++) {
    var inputs = readline().split(" ");
    const humanId = parseInt(inputs[0]);
    const humanX = parseInt(inputs[1]);
    const humanY = parseInt(inputs[2]);
    listHuman.push({ id: humanId, x: humanX, y: humanY });
  }
  const zombieCount = parseInt(readline());
  let listZombie = [];
  for (let i = 0; i < zombieCount; i++) {
    var inputs = readline().split(" ");
    const zombieId = parseInt(inputs[0]);
    const zombieX = parseInt(inputs[1]);
    const zombieY = parseInt(inputs[2]);
    const zombieXNext = parseInt(inputs[3]);
    const zombieYNext = parseInt(inputs[4]);
    listZombie.push({ id: zombieId, x: zombieX, y: zombieY });
  }
  h = findZombieCloserHuman(listHuman, listZombie);
  console.log(h.x, h.y); // Your destination coordinates
}
function findZombieCloserHuman(humans, zombies) {
  distMin = Infinity;
  humanToProtect = null;
  for (let i = 0; i < humans.length; i++) {
    for (let j = 0; j < zombies.length; j++) {
      let h = humans[i];
      let z = zombies[j];
      let d = distance(h.x, h.y, z.x, z.y);
      if (d < distMin) {
        distMin = d;
        humanToProtect = h;
      }
    }
  }
  return humanToProtect;
}
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

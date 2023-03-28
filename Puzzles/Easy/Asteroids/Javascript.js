var inputs = readline().split(" ");
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const T1 = parseInt(inputs[2]);
const T2 = parseInt(inputs[3]);
const T3 = parseInt(inputs[4]);

let firstMap = [];
let secondMap = [];
let thirdMap = Array.from({ length: H }, (v, i) => ".".repeat(H).split(""));

for (let i = 0; i < H; i++) {
  var inputs = readline().split(" ");
  firstMap.push(inputs[0]);
  secondMap.push(inputs[1]);
}

let asteroidsCordMap1 = getCordOfAsteroids(firstMap);
let asteroidsCordMap2 = getCordOfAsteroids(secondMap);
console.error(asteroidsCordMap1);
console.error(asteroidsCordMap2);

for (let i = 0; i < asteroidsCordMap1.length; i++) {
  let _x = Math.floor(asteroidsCordMap2[i].x + ((asteroidsCordMap2[i].x - asteroidsCordMap1[i].x) / (T2 - T1)) * (T3 - T2));
  let _y = Math.floor(asteroidsCordMap2[i].y + ((asteroidsCordMap2[i].y - asteroidsCordMap1[i].y) / (T2 - T1)) * (T3 - T2));
  if (_x >= 0 && _x < H && _y >= 0 && _y < H) {
    console.error("x: " + _x + " y: " + _y);
    thirdMap[_x][_y] = asteroidsCordMap2[i].name;
  }
}

for (let i = 0; i < thirdMap.length; i++) {
  console.log(thirdMap[i].join(""));
}

function getCordOfAsteroids(map) {
  let cords = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < H; j++) {
      if (map[i][j] != ".") {
        cords.push({ name: map[i][j], x: i, y: j });
      }
    }
  }
  return cords.sort((a, b) => {
    return b.name.charCodeAt(0) - a.name.charCodeAt(0);
  });
}

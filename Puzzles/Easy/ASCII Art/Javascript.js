var KeyValue = [
  { key: "A", value: 1 },
  { key: "B", value: 2 },
  { key: "C", value: 3 },
  { key: "D", value: 4 },
  { key: "E", value: 5 },
  { key: "F", value: 6 },
  { key: "G", value: 7 },
  { key: "H", value: 8 },
  { key: "I", value: 9 },
  { key: "J", value: 10 },
  { key: "K", value: 11 },
  { key: "L", value: 12 },
  { key: "M", value: 13 },
  { key: "N", value: 14 },
  { key: "O", value: 15 },
  { key: "P", value: 16 },
  { key: "Q", value: 17 },
  { key: "R", value: 18 },
  { key: "S", value: 19 },
  { key: "T", value: 20 },
  { key: "U", value: 21 },
  { key: "V", value: 22 },
  { key: "W", value: 23 },
  { key: "X", value: 24 },
  { key: "Y", value: 25 },
  { key: "Z", value: 26 },
  { key: "?", value: 27 },
];
var KeyASCII = [];
var ASCII = [];
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();
for (let i = 0; i < H; i++) {
  ASCII.push(readline());
}
for (let i = 0; i < 27; i++) {
  //Crée un tableau avec chaque caractére ASCII
  var temp = {
    key: findByValue(i + 1, KeyValue),
    ascii: [],
  };
  for (let a = 0; a < H; a++) {
    let debut = i * L;
    let fin = debut + L;
    temp.ascii.push(ASCII[a].substring(debut, fin));
  }
  KeyASCII.push(temp);
}
for (let i = 0; i < H; i++) {
  //Write text
  var line = "";
  for (let a = 0; a < T.length; a++) {
    line += KeyASCII[findByKey(T[a], KeyValue) - 1].ascii[i];
  }
  console.log(line);
}
function findByKey(a, tab) {
  var index = 0;
  while (index < 26) {
    if (tab[index].key == a) {
      return tab[index].value;
    }
    index++;
  }
  return 27;
}
function findByValue(a, tab) {
  var index = 0;
  while (true) {
    if (tab[index].value == a) {
      return tab[index].key;
    }
    index++;
  }
}

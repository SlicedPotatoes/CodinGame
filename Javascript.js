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
];
const operation = readline();
const pseudoRandomNumber = parseInt(readline());
var rotor = [];
for (let i = 0; i < 3; i++) {
  var tempRotor = readline();
  var arrayR = [];
  for (var a = 0; a < tempRotor.length; a++) {
    arrayR.push({
      key: tempRotor[a],
      value: a + 1,
    });
  }
  rotor.push(arrayR);
}
var message = readline();
if (operation == "ENCODE") {
  encode();
} else {
  decode();
}
function encode() {
  var newString = "";
  for (var i = 0; i < message.length; i++) {
    var pos = findByKey(message[i], KeyValue) + pseudoRandomNumber + i;
    while (pos > 26) {
      pos -= 26;
    }
    newString += findByValue(pos, KeyValue);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], KeyValue), rotor[0]);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], KeyValue), rotor[1]);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], KeyValue), rotor[2]);
  }
  message = newString;
}
function decode() {
  var newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], rotor[2]), KeyValue);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], rotor[1]), KeyValue);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    newString += findByValue(findByKey(message[i], rotor[0]), KeyValue);
  }
  message = newString;
  newString = "";
  for (var i = 0; i < message.length; i++) {
    var pos = findByKey(message[i], KeyValue) - pseudoRandomNumber - i;
    while (pos < 1) {
      pos += 26;
    }
    newString += findByValue(pos, KeyValue);
  }
  message = newString;
}
function findByKey(a, tab) {
  var index = 0;
  while (true) {
    if (tab[index].key == a) {
      return tab[index].value;
    }
    index++;
  }
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
console.log(message);

const operation = readline();
const pseudoRandomNumber = parseInt(readline());
const rotor = [];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < 3; i++) {
  const tempRotor = readline();
  rotor.push(tempRotor);
}
var message = readline();
if (operation == "ENCODE") {
  let value = "";
  for (var i = 0; i < message.length; i++) {
    const pos = (alphabet.indexOf(message[i]) + pseudoRandomNumber + i) % 26;
    value += alphabet[pos];
  }
  message = value;
  encode();
} else {
  decode();
  let value = "";
  for (var i = 0; i < message.length; i++) {
    let pos = alphabet.indexOf(message[i]) - pseudoRandomNumber - i;
    while (pos < 0) {
      pos += 26;
    }
    value += alphabet[pos];
  }
  message = value;
}
console.log(message);
function encode() {
  for (let i = 0; i < rotor.length; i++) {
    message = encode_alphabet(message, alphabet, rotor[i]);
  }
}
function decode() {
  for (let i = rotor.length - 1; i >= 0; i--) {
    message = encode_alphabet(message, rotor[i], alphabet);
  }
}
function encode_alphabet(m, a1, a2) {
  let value = "";
  for (var i = 0; i < m.length; i++) {
    const pos = a1.indexOf(m[i]);
    value += a2[pos];
  }
  return value;
}

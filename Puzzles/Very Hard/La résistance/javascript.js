const dic = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};
function convertStringToMorse(string) {
  let value = "";
  for (let i = 0; i < string.length; i++) {
    value += getKeyByValue(string[i]);
  }
  return value;
}
function getKeyByValue(value) {
  for (const key in dic) {
    if (dic[key] === value) {
      return key;
    }
  }
  return null;
}
const cache = {};
function r(index) {
  if (index == m.length) {
    return 1;
  }
  if (index in cache) {
    return cache[index];
  }
  let count = 0;
  for (const key of Object.keys(wordMorse)) {
    for (let i = 0; i < wordMorse[key]; i++) {
      if (m.startsWith(key, index)) {
        count += r(index + key.length);
      }
    }
  }
  cache[index] = count;
  return count;
}
const m = readline();
const N = parseInt(readline());

const wordMorse = [];
for (let i = 0; i < N; i++) {
  const sMorse = convertStringToMorse(readline());
  if (wordMorse[sMorse] == undefined) {
    wordMorse[sMorse] = 0;
  }
  wordMorse[sMorse]++;
}
console.log(r(0));

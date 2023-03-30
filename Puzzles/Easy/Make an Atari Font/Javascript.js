const BLOCK_SIZE = 8;
const aWord = readline();
const letters = {
  A: 0x1818243c42420000,
  B: 0x7844784444780000,
  C: 0x3844808044380000,
  D: 0x7844444444780000,
  E: 0x7c407840407c0000,
  F: 0x7c40784040400000,
  G: 0x3844809c44380000,
  H: 0x42427e4242420000,
  I: 0x3e080808083e0000,
  J: 0x1c04040444380000,
  K: 0x4448507048440000,
  L: 0x40404040407e0000,
  M: 0x4163554941410000,
  N: 0x4262524a46420000,
  O: 0x1c222222221c0000,
  P: 0x7844784040400000,
  Q: 0x1c222222221c0200,
  R: 0x7844785048440000,
  S: 0x1c22100c221c0000,
  T: 0x7f08080808080000,
  U: 0x42424242423c0000,
  V: 0x8142422424180000,
  W: 0x4141495563410000,
  X: 0x4224181824420000,
  Y: 0x4122140808080000,
  Z: 0x7e040810207e0000,
};
for (let i = 0; i < 8; i++) {
  s = "";
  for (let j = 0; j < aWord.length; j++) {
    s += getStringByIndex(aWord[j], i * BLOCK_SIZE);
  }
  s = s.replace(/\s+$/, "");
  if (s.length > 0) {
    console.log(s);
  }
}

function getStringByIndex(letter, index) {
  const bin = letters[letter].toString(2).padStart(64, "0");

  const block = bin.substring(index, index + BLOCK_SIZE);
  let str = "";
  for (let j = 0; j < BLOCK_SIZE; j++) {
    str += block[j] == 1 ? "X" : " ";
  }
  return str;
}

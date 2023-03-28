var inputs = readline().split(" ");
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
let bitArray = [];
for (let i = 0; i < h; i++) {
  var inputs = readline().split(" ");
  for (let j = 0; j < w; j++) {
    const pixel = parseInt(inputs[j]);
    let _pix = pixel.toString(2);
    bitArray.push(_pix[_pix.length - 1]);
  }
}
let str = "";
for (let i = 0; i < bitArray.length; i += 8) {
  let octet = "";
  for (let j = 0; j < 8; j++) {
    octet += bitArray[i + j];
  }
  str += String.fromCharCode(parseInt(octet, 2));
}
console.log(str);

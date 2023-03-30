const height = parseInt(readline());
const width = parseInt(readline());
const numberOfShelves = parseInt(readline());
const shelveIndex = getIndexShelves();
let str = "";
for (let i = 0; i < width / 2 - (width % 2); i++) {
  str += "/";
}
if (width % 2 != 0) {
  str += "^";
}
for (let i = 0; i < width / 2 - (width % 2); i++) {
  str += "\\";
}
console.log(str);
for (let i = 0; i < height - 1; i++) {
  let needShelve = shelveIndex.includes(i + 1);
  str = "|";
  for (let j = 0; j < width - 2; j++) {
    str += needShelve ? "_" : " ";
  }
  str += "|";
  console.log(str);
}
function getIndexShelves() {
  const shelveIndex = [];
  const nbLargerShelve = (height - 1) % numberOfShelves;
  const nbNormalShelve = numberOfShelves - nbLargerShelve;
  const heightNormalShelve = (height - 1 - nbLargerShelve) / numberOfShelves;
  for (let i = 0; i < nbNormalShelve; i++) {
    shelveIndex.push((i + 1) * heightNormalShelve);
  }
  for (let i = 0; i < nbLargerShelve; i++) {
    shelveIndex.push(nbNormalShelve * heightNormalShelve + (i + 1) * (heightNormalShelve + 1));
  }
  return shelveIndex;
}

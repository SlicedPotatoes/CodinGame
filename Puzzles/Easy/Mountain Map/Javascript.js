let listHeight = [];
const n = parseInt(readline());
var inputs = readline().split(" ");
let maxHeight = 0;
for (let i = 0; i < n; i++) {
  let height = inputs[i];
  if (height > maxHeight) {
    maxHeight = height;
  }
  listHeight.push(height);
}
for (let i = maxHeight; i > 0; i--) {
  let str = "";
  for (let j = 0; j < listHeight.length; j++) {
    let height = listHeight[j];
    if (height < i) {
      str += "".padStart(height * 2);
    } else {
      str += "/".padStart(i) + "".padStart((height - i) * 2) + "\\".padEnd(i);
    }
  }
  console.log(str.trimEnd());
}

const draw = [];
const h = parseInt(readline());
let valid = true;
let length = 0;
for (let i = 0; i < h; i++) {
  const row = readline().split(" ");
  let str = "";
  for (let j = 0; j < row.length; j++) {
    if (j % 2 == 0) {
      str += ".".repeat(row[j]);
    } else {
      str += "O".repeat(row[j]);
    }
  }
  if (i == 0) {
    length = str.length;
  } else if (str.length != length) {
    valid = false;
  }
  draw.push(str);
}
if (valid) {
  for (let i = 0; i < h; i++) {
    console.log(draw[i]);
  }
} else {
  console.log("INVALID");
}

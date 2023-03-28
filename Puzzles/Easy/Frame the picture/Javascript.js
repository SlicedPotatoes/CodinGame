const framePattern = readline(); // the ASCII art pattern to use to frame the picture
var inputs = readline().split(" ");
const h = parseInt(inputs[0]); // the height of the picture
const w = parseInt(inputs[1]); // the width  of the picture
let picture = [];
for (let i = 0; i < h; i++) {
  const line = readline(); // the ASCII art picture line by line
  picture.push(line);
}
let W = picture[0].length + framePattern.length * 2 + 2;
let H = picture.length + framePattern.length * 2 + 2;
console.error(`W: ${W} H: ${H}`);
for (let i = 0; i < H; i++) {
  let str = framePattern;
  if (i == framePattern.length || i == H - framePattern.length - 1) {
    str = str.padEnd(W - framePattern.length, " ");
  } else {
    str += " " + picture[i - framePattern.length - 1] + " ";
  }
  str += framePattern.split("").reverse().join("");
  if (i < framePattern.length || i >= H - framePattern.length) {
    let frame = i < framePattern.length ? i : H - i - 1;
    str = "".padEnd(W, framePattern[frame]);
    str = str.split("");
    for (let j = 0; j < frame; j++) {
      str[j] = framePattern[j];
      str[W - j - 1] = framePattern[j];
    }
    str = str.join("");
  }
  console.log(str);
}

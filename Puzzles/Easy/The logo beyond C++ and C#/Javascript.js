let linePlus = [];
const size = parseInt(readline());
const thickness = parseInt(readline());
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const logoLine = readline();
  linePlus.push(logoLine);
}
console.error(`size: ${size} thickness: ${thickness}`);
for (let i = 0; i < linePlus.length; i++) {
  let line = linePlus[i];
  for (let j = 0; j < size; j++) {
    let str = "";
    for (let k = 0; k < line.length; k++) {
      if (line[k] == "+") {
        let a = (size - thickness) / 2;
        if (j == a || j == size - a - 1) {
          str += ""
            .padStart(a + 1, "+")
            .padEnd(size - a - 1, " ")
            .padEnd(size, "+");
        } else if (j > a && j < size - a - 1) {
          str += (k - 1 >= 0 ? (line[k - 1] == " " ? "+" : " ") : "+").padEnd(size - 1, " ") + (k + 1 < line.length ? (line[k + 1] == " " ? "+" : " ") : "+");
        } else if ((j == 0 && ((i - 1 >= 0 && (linePlus[i - 1][k] == " " || linePlus[i - 1][k] == undefined)) || i - 1 < 0)) || (j == size - 1 && ((i + 1 < linePlus.length && (linePlus[i + 1][k] == " " || linePlus[i + 1][k] == undefined)) || i + 1 >= linePlus.length))) {
          str += ""
            .padStart(a, " ")
            .padEnd(a + thickness, "+")
            .padEnd(size, " ");
        } else {
          str += ("".padStart(a, " ") + "+".padEnd(thickness - 1, " ") + "+").padEnd(size, " ");
        }
      } else {
        str += "".padEnd(size, " ");
      }
    }
    console.log(str.trimEnd());
  }
}

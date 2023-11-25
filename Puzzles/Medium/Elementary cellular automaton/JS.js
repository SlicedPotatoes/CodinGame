function nextGenPattern(pattern, binary) {
  let nextPattern = "";
  pattern = pattern.replaceAll(".", "0").replaceAll("@", "1");
  for (let i = 0; i < pattern.length; i++) {
    let neighborhood = pattern[i];
    if (i == 0) {
      neighborhood = pattern[pattern.length - 1] + neighborhood;
    } else {
      neighborhood = pattern[i - 1] + neighborhood;
    }
    if (i == pattern.length - 1) {
      neighborhood += pattern[0];
    } else {
      neighborhood += pattern[i + 1];
    }
    let index = 7 - parseInt(neighborhood, 2);
    nextPattern += binary[index];
  }
  return nextPattern.replaceAll("0", ".").replaceAll("1", "@");
}
const R = parseInt(readline());
const N = parseInt(readline());
let pattern = readline();

let binary = R.toString(2).padStart(8, "0");
console.error(binary);
for (let i = 0; i < N; i++) {
  console.log(pattern);
  pattern = nextGenPattern(pattern, binary);
}

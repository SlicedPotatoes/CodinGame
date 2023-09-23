const n: number = parseInt(readline());
var inputs: string[] = readline().split(" ");
var minAbs: number = 5526;
var minValue: number = 5526;
for (let i = 0; i < n; i++) {
  const t: number = parseInt(inputs[i]);
  if (Math.abs(t) < minAbs) {
    minAbs = Math.abs(t);
    minValue = t;
  } else if (Math.abs(t) == minAbs && t > 0) {
    minValue = t;
  }
}
console.log(n == 0 ? 0 : minValue);

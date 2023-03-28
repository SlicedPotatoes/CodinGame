const n = parseInt(readline());
let riverEl = new Set();
let found = false;
for (let i = 1; i < n; i++) {
  if (river(i, n)) {
    found = true;
    break;
  }
}
console.log(found ? "YES" : "NO");
function river(start, target) {
  let current = start;
  while (current <= target) {
    if (riverEl.has(current)) {
      return false;
    } else {
      riverEl.add(current);
    }
    if (current == target) {
      return true;
    }
    current += current
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return false;
}

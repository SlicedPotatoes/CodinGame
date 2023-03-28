const n = parseInt(readline());
let arr = [];
let contradiction = false;
for (let i = 0; i < n; i++) {
  const row = readline().split(" > ");
  let a = row[0];
  let b = row[1];
  let _a = getIndexByValue(a);
  let _b = getIndexByValue(b);
  if (_a == null && _b == null) {
    arr.push(a);
    arr.push(b);
  } else if (_b == null) {
    arr.splice(_a + 1, 0, b);
  } else if (_a == null) {
    arr.splice(_b, 0, a);
  } else {
    if (_a > _b) {
      contradiction = true;
      break;
    }
  }
}
console.error(arr);
console.log(contradiction ? "contradiction" : "consistent");
function getIndexByValue(val) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == val) {
        return i;
      }
    }
  }
  return null;
}

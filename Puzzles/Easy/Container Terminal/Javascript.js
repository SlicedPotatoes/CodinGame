const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  let arr = [];
  const line = readline();
  for (let j = 0; j < line.length; j++) {
    let isPushed = false;
    if (arr.length == 0) {
      arr.push([line[j]]);
      isPushed = true;
    }
    for (let k = 0; k < arr.length; k++) {
      if (line[j].charCodeAt(0) <= arr[k][arr[k].length - 1].charCodeAt(0) && !isPushed) {
        arr[k].push(line[j]);
        isPushed = true;
        break;
      }
    }
    if (!isPushed) {
      arr.push([line[j]]);
    }
  }
  console.log(arr.length);
}

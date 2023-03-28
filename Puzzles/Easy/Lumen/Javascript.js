const N = parseInt(readline());
let L = parseInt(readline());
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(readline().split(" "));
}
for (let i = 0; i < arr.length; i++) {
  //
  for (let j = 0; j < arr.length; j++) {
    //
    if (arr[i][j] == "C") {
      arr[i][j] = L;
    } // change the values of the array if C put the value of L otherwise 0
    else {
      arr[i][j] = 0;
    } //
  } //
}
let indexChecker = [
  { i: 1, j: 0 },
  { i: 1, j: -1 },
  { i: 1, j: 1 },
  { i: -1, j: 0 },
  { i: -1, j: -1 },
  { i: -1, j: 1 },
  { i: 0, j: -1 },
  { i: 0, j: 1 },
]; //index to check
while (L != 0) {
  //
  for (let i = 0; i < arr.length; i++) {
    // loop that fills the table with
    for (let j = 0; j < arr.length; j++) {
      // values based on the light
      if (arr[i][j] == L) {
        // emitted by a candle.
        indexChecker.forEach((e) => {
          //
          if (i + e.i >= 0 && i + e.i < arr.length && j + e.j >= 0 && j + e.j < arr.length && arr[i + e.i][j + e.j] < L) {
            // uses the "indexChecker" list
            arr[i + e.i][j + e.j] = L - 1; // to scan the neighbors
          } //
        }); // If the cell value is lower
      } // then replace it with L-1
    } //
  } // at the end of the loop
  L--; // removed 1 from L
} //
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] == 0) {
      count++;
    }
  }
}
console.log(count);

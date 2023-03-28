var inputs = readline().split(" ");
const width = parseInt(inputs[0]);
const height = parseInt(inputs[1]);
let array = [];
for (let i = 0; i < height; i++) {
  const line = readline();
  array.push(line);
}
for (let i = 0; i < height; i++) {
  for (let a = 0; a < width; a++) {
    if (array[i][a] == "0") {
      let count = 0;
      if (a - 1 >= 0 && array[i][a - 1] != "#") {
        count++;
      }
      if (a + 1 < width && array[i][a + 1] != "#") {
        count++;
      }
      if (i - 1 >= 0 && array[i - 1][a] != "#") {
        count++;
      }
      if (i + 1 < height && array[i + 1][a] != "#") {
        count++;
      }
      array[i] = array[i].substring(0, a) + count + array[i].substring(a + 1);
    }
  }
  console.log(array[i]);
}

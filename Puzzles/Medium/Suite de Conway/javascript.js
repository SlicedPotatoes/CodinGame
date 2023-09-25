const R = parseInt(readline());
const L = parseInt(readline());

let array = [R];

for (let i = 1; i < L; i++) {
  array = suiteDeConway(array);
}

function suiteDeConway(array) {
  let _array = [];
  let lastElement = null;
  let countLastElement = 0;
  while (array.length != 0) {
    const element = array.shift();
    if (lastElement != element) {
      if (countLastElement != 0) {
        _array.push(countLastElement, lastElement);
      }
      lastElement = element;
      countLastElement = 0;
    }
    countLastElement++;
  }
  _array.push(countLastElement, lastElement);
  return _array;
}
console.log(array.join(" "));

const tree = {};
let count = 0;

function addNumberToTree(number) {
  let currentNode = tree;
  for (let i = 0; i < number.length; i++) {
    if (!(number[i] in currentNode)) {
      currentNode[number[i]] = {};
      count++;
    }
    currentNode = currentNode[number[i]];
  }
}

const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const telephone = readline();
  addNumberToTree(telephone);
}

console.log(count);

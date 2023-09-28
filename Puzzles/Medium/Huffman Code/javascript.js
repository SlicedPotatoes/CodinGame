class Node {
  constructor(frequency) {
    this.frequency = frequency;
    this.child = [];
  }
}

function dfs(node, code) {
  let size = 0;
  for (let i = 0; i < node.child.length; i++) {
    size += dfs(node.child[i], code + (i % 2 == 0 ? "0" : "1"));
  }
  if (node.child.length == 0) {
    return code.length * node.frequency;
  }
  return size;
}

const n = parseInt(readline());
var inputs = readline().split(" ");

let tree = [];
for (let i = 0; i < n; i++) {
  const wi = parseInt(inputs[i]);
  tree.push(new Node(wi));
}

if (tree.length == 1) {
  console.log(tree[0].frequency);
} else {
  while (tree.length != 1) {
    tree.sort((a, b) => a.frequency - b.frequency);
    let node1 = tree.shift();
    let node2 = tree.shift();
    let node = new Node(node1.frequency + node2.frequency);
    node.child.push(node1, node2);
    tree.push(node);
  }
  console.log(dfs(tree[0], ""));
}

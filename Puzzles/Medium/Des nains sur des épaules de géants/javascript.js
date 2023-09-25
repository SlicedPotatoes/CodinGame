const cache = {};
function dfs(node, tree, index) {
  if (index in cache) {
    return cache[index];
  }
  let count = 0;
  for (let i = 0; i < node.length; i++) {
    let v = dfs(tree[node[i]], tree, node[i]);
    count = v > count ? v : count;
  }
  cache[index] = count + 1;
  return count + 1;
}
const n = parseInt(readline());
const tree = {};
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const x = parseInt(inputs[0]);
  const y = parseInt(inputs[1]);
  if (!(x in tree)) {
    tree[x] = [];
  }
  if (!(y in tree)) {
    tree[y] = [];
  }
  tree[x].push(y);
}
let max = 0;
Object.keys(tree).forEach((node) => {
  const influance = dfs(tree[node], tree, node);
  if (influance > max) {
    max = influance;
  }
});
console.log(max);

class Node {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type == "P" ? "_" : type == "E" ? "_" : type;
    this.child = [];
    this.heuristique = 0;
    this.path = "";
  }
  fillChild() {
    const indexHelper = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    function validCord(x, y) {
      return x >= 0 && x < 10 && y >= 0 && y < 10;
    }
    for (let i = 0; i < indexHelper.length; i++) {
      let x = this.x + indexHelper[i][0];
      let y = this.y + indexHelper[i][1];
      if (validCord(x, y)) {
        this.child.push(y * 10 + x);
      }
    }
  }
}
const K = parseInt(readline());
const graph = [];
let startNode;
for (let y = 0; y < 10; y++) {
  const s = readline(); // the map
  for (let x = 0; x < 10; x++) {
    graph.push(new Node(x, y, s[x]));
    if (s[x] == "P") {
      startNode = graph[y * 10 + x];
    }
  }
}
for (let i = 0; i < graph.length; i++) {
  graph[i].fillChild();
}
// game loop
while (true) {
  var inputs = readline().split(" ");
  const eneY = parseInt(inputs[0]);
  const eneX = parseInt(inputs[1]);
  const targetNode = graph[eneY * 10 + eneX];
  let list = [startNode]; //List parcouru avec bfs
  let _list = []; //List qui stock les nodes de la profondeur suivante
  startNode.path = ""; //Remettre le path sur vide
  const visited = {}; //hashmap des nodes visited
  while (true) {
    const currentNode = list.shift(); //Récupére la premiere node de la liste
    visited[currentNode.y * 10 + currentNode.x] = true; //la mettre dans visited
    for (let i = 0; i < currentNode.child.length; i++) {
      //Parcourir ses voisins
      const child = graph[currentNode.child[i]];
      if (child.type != "*" && !visited[child.y * 10 + child.x]) {
        //Si il n'est pas un mur et n'est pas deja visited
        child.heuristique = heuristique(child, targetNode); //Calculé son heuristique
        child.path = calculPath(currentNode, child); //Calculé son path
        _list.push(child); //L'ajouté a la liste temporaire
      }
    }
    if (list.length == 0) {
      //Si la list est vide, la swap avec _list en l'ayant sort par heuristique
      _list.sort((a, b) => a.heuristique - b.heuristique);
      list = _list.slice(0, 200); //Beam width pour pas timeout
      _list = [];
    }
    if (currentNode.x == targetNode.x && currentNode.y == targetNode.y) {
      console.log(currentNode.path[0]);
      switch (currentNode.path[0]) {
        case "U":
          startNode = graph[(startNode.y - 1) * 10 + startNode.x];
          break;
        case "L":
          startNode = graph[startNode.y * 10 + startNode.x - 1];
          break;
        case "R":
          startNode = graph[startNode.y * 10 + startNode.x + 1];
          break;
        case "D":
          startNode = graph[(startNode.y + 1) * 10 + startNode.x];
          break;
      }
      break;
    }
  }
}
function calculPath(currentNode, child) {
  const dX = currentNode.x - child.x;
  const dY = currentNode.y - child.y;
  if (dX == -1) {
    return currentNode.path + "R";
  } else if (dX == 1) {
    return currentNode.path + "L";
  } else if (dY == -1) {
    return currentNode.path + "D";
  } else {
    return currentNode.path + "U";
  }
}
function heuristique(node, target) {
  return Math.abs(node.x - target.x) + Math.abs(node.y - target.y);
}

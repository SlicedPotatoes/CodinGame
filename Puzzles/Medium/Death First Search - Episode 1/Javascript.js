class Noeud {
  constructor(id) {
    this.id = id;
    this.voisins = [];
    this.isPasserelle = false;
  }
}
var inputs = readline().split(" ");
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

let listNoeud = [];
for (let i = 0; i < N; i++) {
  listNoeud.push(new Noeud(i));
}
for (let i = 0; i < L; i++) {
  var inputs = readline().split(" ");
  const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
  const N2 = parseInt(inputs[1]);

  listNoeud[N1].voisins.push(N2);
  listNoeud[N2].voisins.push(N1);
}
for (let i = 0; i < E; i++) {
  const EI = parseInt(readline()); // the index of a gateway node
  listNoeud[EI].isPasserelle = true;
}

// game loop
while (true) {
  const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn
  n = listNoeud[SI];
  let priorityNode = null;
  for (let i = 0; i < n.voisins.length; i++) {
    if (listNoeud[n.voisins[i]].isPasserelle) {
      priorityNode = listNoeud[n.voisins[i]];
    }
  }

  console.log(priorityNode != null ? priorityNode.id + " " + SI : n.voisins[2] + " " + SI);
}

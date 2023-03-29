class Node {
  constructor(obj) {
    this.name = obj.name;
    this.birth = obj.birth;
    this.death = obj.death;
    this.religion = obj.religion;
    this.gender = obj.gender;
    this.child = [];
  }
  addChild(node) {
    this.child.push(node);
    this.child.sort((a, b) => {
      //Si a est un H il sera en premier dans le cas ou b est F
      if (a.gender == "M" && b.gender == "F") {
        return -1;
      }
      //Si b est un H il sera en premier dans le cas ou a est F
      else if (a.gender == "F" && b.gender == "M") {
        return 1;
      }
      //Si a et b sont du meme genre sort en fonction de la dateN
      else {
        return a.birth - b.birth;
      }
    });
  }
}

const Nodes = [];
const idName = {};
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const name = inputs[0];
  const parent = inputs[1];
  const birth = parseInt(inputs[2]);
  const death = inputs[3];
  const religion = inputs[4];
  const gender = inputs[5];
  _parent = parent == "-" ? null : Nodes[idName[parent]]; //Trouvé la node du parent
  node = new Node({ name: name, birth: birth, death: death, religion: religion, gender: gender }); //Crée la node de la personne actuel
  Nodes.push(node);
  //Si il a un parent, ajouté l'enfant au parent
  if (_parent) {
    _parent.addChild(node);
  }
  idName[name] = i;
}

parcourNode(Nodes[0]);

function parcourNode(Node) {
  //Si vivant et pas catholique print son nom
  if (Node.death == "-" && Node.religion != "Catholic") {
    console.log(Node.name);
  }
  Node.child.forEach((el) => {
    parcourNode(el);
  });
}

class Participant {
  static addVote(name, vote, listP) {
    let pI = listP.findIndex((e) => e.name === name);
    let p = listP[pI];
    if (p && p.listVote.length < p.nbVote) {
      p.listVote.push(vote);
    } else if (p) {
      listP.splice(pI, 1);
    }
  }
  static countVote(listP) {
    let voteY = 0;
    let voteN = 0;
    listP.forEach((p) => {
      p.listVote.forEach((v) => {
        if (v === "Yes") {
          voteY++;
        } else if (v === "No") {
          voteN++;
        }
      });
    });
    console.log(voteY + " " + voteN);
  }
  constructor(name, nbVote) {
    this.name = name;
    this.nbVote = nbVote;
    this.listVote = [];
  }
}
const N = parseInt(readline());
const M = parseInt(readline());
let listP = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const personName = inputs[0];
  const nbVote = parseInt(inputs[1]);
  listP.push(new Participant(personName, nbVote));
}
for (let i = 0; i < M; i++) {
  var inputs = readline().split(" ");
  const voterName = inputs[0];
  const voteValue = inputs[1];
  Participant.addVote(voterName, voteValue, listP);
}
Participant.countVote(listP);

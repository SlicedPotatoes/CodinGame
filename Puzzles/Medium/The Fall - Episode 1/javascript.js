class Piece {
  constructor(_in, out, b) {
    this.in = _in;
    this.out = out;
    this.b = b; //Defferent output depending input
  }
}
pieces = [
  new Piece([], [], false), //Type 0
  new Piece(["TOP", "LEFT", "RIGHT"], ["BOTTOM"], false), //Type 1
  new Piece(["LEFT", "RIGHT"], ["RIGHT", "LEFT"], true), //Type 2
  new Piece(["TOP"], ["BOTTOM"], false), //Type 3
  new Piece(["TOP", "RIGHT"], ["LEFT", "BOTTOM"], true), //Type 4
  new Piece(["TOP", "LEFT"], ["RIGHT", "BOTTOM"], true), //Type 5
  new Piece(["LEFT", "RIGHT"], ["RIGHT", "LEFT"], true), //Type 6
  new Piece(["TOP", "RIGHT"], ["BOTTOM"], false), //Type 7
  new Piece(["LEFT", "RIGHT"], ["BOTTOM"], false), //Type 8
  new Piece(["TOP", "LEFT"], ["BOTTOM"], false), //Type 9
  new Piece(["TOP"], ["LEFT"], false), //Type 10
  new Piece(["TOP"], ["RIGHT"], false), //Type 11
  new Piece(["RIGHT"], ["BOTTOM"], false), //Type 12
  new Piece(["LEFT"], ["BOTTOM"], false), //Type 13
];
var inputs = readline().split(" ");
const map = [];
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
for (let i = 0; i < H; i++) {
  const LINE = readline();
  map.push(LINE.split(" "));
}
const EX = parseInt(readline());
while (true) {
  var inputs = readline().split(" ");
  const XI = parseInt(inputs[0]);
  const YI = parseInt(inputs[1]);
  const POS = inputs[2];

  const piece = pieces[map[YI][XI]];

  let deplacement = piece.b ? piece.out[piece.in.indexOf(POS)] : piece.out[0];

  switch (deplacement) {
    case "LEFT":
      console.log(XI - 1, YI);
      break;
    case "RIGHT":
      console.log(XI + 1, YI);
      break;
    case "BOTTOM":
      console.log(XI, YI + 1);
      break;
  }
}

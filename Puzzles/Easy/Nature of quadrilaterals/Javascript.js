class Point {
  constructor(nom, X, Y) {
    this.nom = nom;
    this.X = X;
    this.Y = Y;
  }
  static distance(a, b) {
    var dx = a.X - b.X;
    var dy = a.Y - b.Y;
    return Math.hypot(dx, dy).toFixed(2);
  }
}
class Quadrilateral {
  constructor(p1, p2, p3, p4) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }
  whatIAm() {
    var answer = "";
    var isPara = this.isParallelogram();
    var isRect = this.isRectangle();
    var isRhom = this.isRhombus();
    if (isRect) {
      answer = "rectangle";
      if (isRhom) {
        answer = "square";
      }
    } else if (isRhom) {
      answer = "rhombus";
    } else if (isPara) {
      answer = "parallelogram";
    } else {
      answer = "quadrilateral";
    }
    console.log(this.p1.nom + this.p2.nom + this.p3.nom + this.p4.nom + " is a " + answer + ".");
  }
  isRectangle() {
    var A = Point.distance(this.p1, this.p2);
    var B = Point.distance(this.p2, this.p3);
    var C = Point.distance(this.p1, this.p3);
    var angle1 = Math.round(Math.acos((Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B)) * (180 / Math.PI));
    A = Point.distance(this.p1, this.p4);
    B = Point.distance(this.p4, this.p3);
    C = Point.distance(this.p1, this.p3);
    var angle2 = Math.round(Math.acos((Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B)) * (180 / Math.PI));
    if (angle1 == angle2 && angle1 == 90) {
      return true;
    }
    return false;
  }
  isRhombus() {
    //Losange
    if (Point.distance(this.p1, this.p2) == Point.distance(this.p3, this.p4) && Point.distance(this.p3, this.p4) == Point.distance(this.p2, this.p3)) {
      return true;
    }
    return false;
  }
  isParallelogram() {
    var d12 = Point.distance(this.p1, this.p2);
    var d34 = Point.distance(this.p3, this.p4);
    var d14 = Point.distance(this.p1, this.p4);
    var d23 = Point.distance(this.p2, this.p3);
    if (d12 == d34 && d14 == d23) {
      return true;
    }
    return false;
  }
}
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const A = inputs[0];
  const xA = parseInt(inputs[1]);
  const yA = parseInt(inputs[2]);
  const B = inputs[3];
  const xB = parseInt(inputs[4]);
  const yB = parseInt(inputs[5]);
  const C = inputs[6];
  const xC = parseInt(inputs[7]);
  const yC = parseInt(inputs[8]);
  const D = inputs[9];
  const xD = parseInt(inputs[10]);
  const yD = parseInt(inputs[11]);
  var q = new Quadrilateral(new Point(A, xA, yA), new Point(B, xB, yB), new Point(C, xC, yC), new Point(D, xD, yD));
  q.whatIAm();
}

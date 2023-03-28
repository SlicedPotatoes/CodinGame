class Point {
  constructor(nom, X, Y) {
    this.nom = nom;
    this.X = X;
    this.Y = Y;
  }
  static distance(a, b) {
    var dx = a.X - b.X;
    var dy = a.Y - b.Y;
    return Math.hypot(dx, dy);
  }
  static angle(a, b, c) {
    var A = Point.distance(a, b);
    var B = Point.distance(b, c);
    var C = Point.distance(a, c);
    return (Math.acos((Math.pow(A, 2) + Math.pow(B, 2) - Math.pow(C, 2)) / (2 * A * B)) * (180 / Math.PI)).toFixed(3);
  }
}
class Triangle {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
  isScalene() {
    let bool = true;
    if (Point.distance(this.p1, this.p2) == Point.distance(this.p2, this.p3)) {
      bool = false;
    } else if (Point.distance(this.p2, this.p3) == Point.distance(this.p3, this.p1)) {
      bool = false;
    } else if (Point.distance(this.p3, this.p1) == Point.distance(this.p1, this.p2)) {
      bool = false;
    }
    return bool;
  }
  isIsosceles() {
    if (Point.distance(this.p1, this.p2) == Point.distance(this.p2, this.p3)) {
      return [true, this.p2];
    }
    if (Point.distance(this.p1, this.p2) == Point.distance(this.p1, this.p3)) {
      return [true, this.p1];
    }
    if (Point.distance(this.p1, this.p3) == Point.distance(this.p2, this.p3)) {
      return [true, this.p3];
    }
    return [false, null];
  }
  isAcute() {
    let bool = true;
    if (Point.angle(this.p1, this.p2, this.p3) >= 90) {
      bool = false;
    } else if (Point.angle(this.p2, this.p3, this.p1) >= 90) {
      bool = false;
    } else if (Point.angle(this.p2, this.p1, this.p3) >= 90) {
      bool = false;
    }
    return bool;
  }
  isRight() {
    if (Point.angle(this.p1, this.p2, this.p3) == 90) {
      return [true, this.p2];
    }
    if (Point.angle(this.p2, this.p3, this.p1) == 90) {
      return [true, this.p3];
    }
    if (Point.angle(this.p3, this.p1, this.p2) == 90) {
      return [true, this.p1];
    }
    return [false, null];
  }
  isObtuse() {
    if (Point.angle(this.p1, this.p2, this.p3) > 90) {
      return [true, this.p2, Math.round(Point.angle(this.p1, this.p2, this.p3))];
    }
    if (Point.angle(this.p2, this.p3, this.p1) > 90) {
      return [true, this.p3, Math.round(Point.angle(this.p2, this.p3, this.p1))];
    }
    if (Point.angle(this.p3, this.p1, this.p2) > 90) {
      return [true, this.p1, Math.round(Point.angle(this.p3, this.p1, this.p2))];
    }
    return [false, null, null];
  }
  whatIAm() {
    let str = this.p1.nom + this.p2.nom + this.p3.nom + " is ";
    let count = 0;
    if (this.isScalene()) {
      str += "a scalene ";
      count++;
    }
    let isoscelesData = this.isIsosceles();
    if (isoscelesData[0]) {
      if (count > 0) {
        str += "and ";
      }
      str += "an isosceles in " + isoscelesData[1].nom + " ";
      count++;
    }
    if (this.isAcute()) {
      if (count > 0) {
        str += "and ";
      }
      str += "an acute ";
      count++;
    }
    let rightData = this.isRight();
    if (rightData[0]) {
      if (count > 0) {
        str += "and ";
      }
      str += "a right in " + rightData[1].nom + " ";
      count++;
    }
    let obtuseData = this.isObtuse();
    if (obtuseData[0]) {
      if (count > 0) {
        str += "and ";
      }
      str += "an obtuse in " + obtuseData[1].nom + " (" + obtuseData[2] + "°) ";
      count++;
    }
    str += "triangle.";
    console.log(str);
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
  let triangle = new Triangle(new Point(A, xA, yA), new Point(B, xB, yB), new Point(C, xC, yC));
  triangle.whatIAm();
}

const rotations = readline().split(" ");
const rotX = { F: "U", B: "D", U: "B", D: "F", L: "L", R: "R" };
const rotXPrime = { F: "D", B: "U", U: "F", D: "B", L: "L", R: "R" };
const rotY = { F: "L", B: "R", U: "U", D: "D", L: "B", R: "F" };
const rotYPrime = { F: "R", B: "L", U: "U", D: "D", L: "F", R: "B" };
const rotZ = { F: "F", B: "B", U: "R", D: "L", L: "U", R: "D" };
const rotZPrime = { F: "F", B: "B", U: "L", D: "R", L: "D", R: "U" };
let face1 = readline();
let face2 = readline();
rotations.forEach((element) => {
  switch (element) {
    case "x":
      face1 = rotX[face1];
      face2 = rotX[face2];
      break;
    case "x'":
      face1 = rotXPrime[face1];
      face2 = rotXPrime[face2];
      break;
    case "y":
      face1 = rotY[face1];
      face2 = rotY[face2];
      break;
    case "y'":
      face1 = rotYPrime[face1];
      face2 = rotYPrime[face2];
      break;
    case "z":
      face1 = rotZ[face1];
      face2 = rotZ[face2];
      break;
    case "z'":
      face1 = rotZPrime[face1];
      face2 = rotZPrime[face2];
      break;
  }
});
console.log(face1);
console.log(face2);

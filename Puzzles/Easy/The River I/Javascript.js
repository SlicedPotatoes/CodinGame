var r1 = parseInt(readline());
var r2 = parseInt(readline());
while (r1 != r2) {
  if (r1 < r2) {
    r1 = next(r1);
  } else {
    r2 = next(r2);
  }
}
console.log(r1);
function next(a) {
  var aT = a.toString().split("").map(Number);
  for (var i = 0; i < aT.length; i++) {
    a += aT[i];
  }
  return a;
}

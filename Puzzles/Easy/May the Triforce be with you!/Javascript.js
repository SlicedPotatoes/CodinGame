const N = parseInt(readline());
for (var i = 0; i < N; i++) {
  //First Triangle
  var line = "";
  if (i == 0) {
    //If 0 for the starting '.'
    line = ".";
    for (var a = 0; a < N + N - 2; a++) {
      line += " ";
    }
    line += "*";
  } else {
    for (var a = 0; a < N + N - i - 1; a++) {
      //Spacing
      line += " ";
    }
    for (var a = 0; a < i + i + 1; a++) {
      //'*'
      line += "*";
    }
  }
  console.log(line);
}
for (var i = 0; i < N; i++) {
  var line = "";
  for (var a = 0; a < N - i - 1; a++) {
    //Spacing
    line += " ";
  }
  for (var a = 0; a < i + i + 1; a++) {
    //'*'
    line += "*";
  }
  for (var a = 0; a < N + N - (1 + i * 2); a++) {
    //Spacing
    line += " ";
  }
  for (var a = 0; a < i + i + 1; a++) {
    //'*'
    line += "*";
  }
  console.log(line);
}

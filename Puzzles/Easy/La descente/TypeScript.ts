while (true) {
  var max: number = -1;
  var index: number = -1;
  for (let i = 0; i < 8; i++) {
    const mountainH: number = parseInt(readline());
    if (mountainH > max) {
      max = mountainH;
      index = i;
    }
  }
  console.log(index);
}

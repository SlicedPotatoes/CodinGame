while (true) {
  var answer = 0;
  var answerH = 0;
  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline()); // represents the height of one mountain.
    if (answerH < mountainH) {
      answerH = mountainH;
      answer = i;
    }
  }
  console.log(answer); // The index of the mountain to fire on.
}

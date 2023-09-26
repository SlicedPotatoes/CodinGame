const scoreLetters = {
  eaionrtlsu: 1,
  dg: 2,
  bcmp: 3,
  fhvwy: 4,
  k: 5,
  jx: 8,
  qz: 10,
};
function getScoreForLetter(char) {
  const keys = Object.keys(scoreLetters);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].indexOf(char) != -1) {
      return scoreLetters[keys[i]];
    }
  }
  return -1;
}
function getScoreForWord(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += getScoreForLetter(word[i]);
  }
  return score;
}
const N = parseInt(readline());
const words = [];
for (let i = 0; i < N; i++) {
  const W = readline();
  words.push({ word: W, score: getScoreForWord(W), index: i });
}
words.sort((a, b) => {
  if (a.score > b.score) {
    return -1;
  } else if (a.score < b.score) {
    return 1;
  } else {
    return a.index - b.index;
  }
});
const LETTERS = readline();
for (let i = 0; i < words.length; i++) {
  let valid = true;
  let letters = LETTERS.split("");
  let word = words[i].word;
  for (let j = 0; j < word.length; j++) {
    let index = letters.indexOf(word[j]);
    if (index == -1) {
      valid = false;
      break;
    } else {
      letters.splice(index, 1);
    }
  }
  if (valid) {
    console.log(word);
    break;
  }
}

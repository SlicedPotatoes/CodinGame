const streamOfConsciousness = readline().split(".");
const bustThreshold = parseInt(readline());

let totalCard = 0;
let totalCardInfBTH = 0;

streamOfConsciousness.forEach((s) => {
  let cardInfBTH = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "K" || s[i] == "Q" || s[i] == "J" || s[i] == "T") {
      if (bustThreshold > 10) {
        cardInfBTH++;
      }
    } else if (s[i] == "A") {
      if (bustThreshold > 1) {
        cardInfBTH++;
      }
    } else if (parseInt(s[i]) >= 2 && parseInt(s[i]) <= 9) {
      if (bustThreshold > parseInt(s[i])) {
        cardInfBTH++;
      }
    } else {
      cardInfBTH = -1;
      break;
    }
  }
  if (cardInfBTH != -1) {
    totalCard += s.length;
    totalCardInfBTH += cardInfBTH;
  }
});
let numberCardUnderBTH = (bustThreshold - 1) * 4;

let a = 52 - totalCard; //3
let b = numberCardUnderBTH - totalCardInfBTH; //2

console.log(Math.round((b / a) * 100) + "%");

let cardValue = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 11 };
const bankCards = readline().split(" ").sort(sortCard);
const playerCards = readline().split(" ").sort(sortCard);
let sumBank = sumCard(bankCards);
let sumPlayer = sumCard(playerCards);
if (sumPlayer <= 21 && (sumBank < sumPlayer || sumBank > 21)) {
  console.log("Player");
} else if (sumPlayer == 21 && playerCards.length == 2 && bankCards.length != 2) {
  console.log("Blackjack!");
} else if (sumPlayer == sumBank && sumPlayer <= 21) {
  console.log("Draw");
} else {
  console.log("Bank");
}
function sortCard(a, b) {
  return cardValue[a] - cardValue[b];
}
function sumCard(listCard) {
  let sum = 0;
  listCard.forEach((e) => {
    if (e != "A") {
      sum += cardValue[e];
    } else {
      if (sum + 11 > 21) {
        sum += 1;
      } else {
        sum += 11;
      }
    }
  });
  return sum;
}

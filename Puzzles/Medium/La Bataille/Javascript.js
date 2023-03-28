class Player {
  constructor() {
    this.listCard = [];
  }
  addCard(str) {
    this.listCard.push(str);
  }
  draw() {
    return this.listCard.shift();
  }
  canPlay() {
    return this.listCard.length > 0;
  }
}
let cardValue = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
let players = [new Player(), new Player()];

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
  const cardp1 = readline(); // the n cards of player 1
  players[0].addCard(cardp1);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
  const cardp2 = readline(); // the m cards of player 2
  players[1].addCard(cardp2);
}
console.log(playGame(players, [[], []], 0));
function playGame(players, _cards, nbManche) {
  if (!players[0].canPlay() || !players[1].canPlay()) {
    if (_cards[0].length > 0) {
      return "PAT";
    }
    return (players[0].canPlay() ? "1" : "2") + " " + nbManche.toString();
  }
  let cards = [players[0].draw(), players[1].draw()];
  let cardsValue = [getCardValue(cards[0]), getCardValue(cards[1])];
  if (cardsValue[0] == cardsValue[1]) {
    _cards[0].push(cards[0]);
    _cards[1].push(cards[1]);
    for (let i = 0; i < 3; i++) {
      if (players[0].canPlay()) {
        _cards[0].push(players[0].draw());
      } else {
        return "PAT";
      }
      if (players[1].canPlay()) {
        _cards[1].push(players[1].draw());
      } else {
        return "PAT";
      }
    }
    return playGame(players, _cards, nbManche);
  } else {
    let winner = cardsValue[0] > cardsValue[1] ? 0 : 1;
    while (_cards[0].length != 0) {
      players[winner].addCard(_cards[0].shift());
    }
    players[winner].addCard(cards[0]);
    while (_cards[1].length != 0) {
      players[winner].addCard(_cards[1].shift());
    }
    players[winner].addCard(cards[1]);
  }
  nbManche++;
  return playGame(players, _cards, nbManche);
}
function getCardValue(card) {
  card = card.substring(0, card.length - 1);
  return cardValue[card];
}

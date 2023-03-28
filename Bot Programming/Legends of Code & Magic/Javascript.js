let turn = 0;
// game loop
while (true) {
  turn++;
  let playerInfos = getPlayerInfos();
  let action = [];
  var inputs = readline().split(" ");
  const opponentHand = parseInt(inputs[0]);
  const opponentActions = parseInt(inputs[1]);
  for (let i = 0; i < opponentActions; i++) {
    const cardNumberAndAction = readline();
  }
  let _cards = getCardsInfos();

  console.error("Tour: " + turn);

  let cards = getSortByLocation(_cards);
  if (turn <= 30) {
    let a = pickCard(_cards);
    console.error(a);
    if (a != undefined) {
      action.push(a);
    }
  } else {
    let a = summonCard(cards, playerInfos[0].playerMana);
    if (a != undefined) {
      action.push(a);
    }

    if (cards.mePlayed.length > 0) {
      cards.mePlayed.forEach((e) => {
        a = chooseWhoAttacking(cards.opponentPlayed, e);
        console.error(a);
        if (a != undefined) {
          action.push(a);
        }
      });
    }
  }
  if (action.length > 0) {
    console.log(action.join(";"));
  } else {
    console.log("PASS");
  }
}
function pickCard(cards) {
  let ratio = -1;
  let pickedCard = -1;
  for (let i = 0; i < cards.length; i++) {
    let r = (cards[i].attack + cards[i].defense + cards[i].abilities[3] == "G" ? 1 : 0) / cards[i].cost;
    if (r > ratio && cards[i].cardType == 0) {
      ratio = r;
      pickedCard = i;
    }
  }
  if (pickedCard != -1) {
    return "PICK " + pickedCard;
  }
}
function summonCard(cards, mana) {
  let score = -1;
  let summonedCard = null;
  cards.myHand.forEach((e) => {
    if (e.cost <= mana && e.cardType == 0) {
      let s = (e.attack + e.defense + e.abilities[3] == "G" ? 1 : 0) / e.cost;
      if (s > score) {
        score = s;
        summonedCard = e;
      }
    }
  });
  if (summonedCard != null) {
    return "SUMMON " + summonedCard.instanceId;
  }
}
function chooseWhoAttacking(opponentPlayed, e) {
  let cardToAtk = -1;
  opponentPlayed.forEach((c) => {
    console.error(c.abilities[3] == "G");
    if (c.abilities[3] == "G") {
      cardToAtk = c.instanceId;
    }
  });
  return "ATTACK " + e.instanceId + " " + cardToAtk;
}
function getSortByLocation(cards) {
  let myHand = [];
  let opponentPlayed = [];
  let mePlayed = [];
  cards.forEach((e) => {
    if (e.location == -1) {
      opponentPlayed.push(e);
    } else if (e.location == 1) {
      mePlayed.push(e);
    } else if (e.location == 0) {
      myHand.push(e);
    }
  });
  return { myHand: myHand, opponentPlayed: opponentPlayed, mePlayed: mePlayed };
}

function getPlayerInfos() {
  let arr = [];
  for (let i = 0; i < 2; i++) {
    let inputs = readline().split(" ");
    arr.push({
      playerHealth: parseInt(inputs[0]),
      playerMana: parseInt(inputs[1]),
      playerDeck: parseInt(inputs[2]),
      playerRune: parseInt(inputs[3]),
      playerDraw: parseInt(inputs[4]),
    });
  }
  return arr;
}
function getCardsInfos() {
  let arr = [];
  const cardCount = parseInt(readline());
  for (let i = 0; i < cardCount; i++) {
    var inputs = readline().split(" ");
    arr.push({
      cardNumber: parseInt(inputs[0]),
      instanceId: parseInt(inputs[1]),
      location: parseInt(inputs[2]),
      cardType: parseInt(inputs[3]),
      cost: parseInt(inputs[4]),
      attack: parseInt(inputs[5]),
      defense: parseInt(inputs[6]),
      abilities: inputs[7],
      myHealthChange: parseInt(inputs[8]),
      opponentHealthChange: parseInt(inputs[9]),
      cardDraw: parseInt(inputs[10]),
    });
  }
  return arr;
}

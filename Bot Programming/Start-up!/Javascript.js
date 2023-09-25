class Player {
  constructor(id, income, cash, devs, sellers, managers, features, tests, bugs) {
    this.id = id;
    this.income = income;
    this.cash = cash;
    this.devs = devs;
    this.sellers = sellers;
    this.managers = managers;
    this.features = features;
    this.tests = tests;
    this.bugs = bugs;
  }
  debug() {
    console.error(`ID: ${this.id}\nINCOME: ${this.income}\nCASH: ${this.cash}\nDEVS: ${this.devs}\nSELLERS: ${this.sellers}\nMANAGERS: ${this.managers}\nFEATURES: ${this.features}\nTESTS: ${this.tests}\nBUGS: ${this.bugs}`);
  }
}
class Concurent {
  constructor(id, marketShare, reputation) {
    this.id = id;
    this.marketShare = marketShare;
    this.reputation = reputation;
  }
}
const POIDS = [0.5];
while (true) {
  const id = parseInt(readline()); // Your player id
  const playerCount = parseInt(readline()); // Number of players
  const turn = parseInt(readline()); // Number of turns since the beginning
  const income = parseInt(readline()); // Your income for this turn
  const cash = parseInt(readline()); // Cash of your start-up
  const devs = parseInt(readline());
  const sellers = parseInt(readline());
  const managers = parseInt(readline());
  const features = parseInt(readline());
  const tests = parseInt(readline()); // Tests developed in your software
  const bugs = parseInt(readline()); // Bugs in your software
  const player = new Player(id, income, cash, devs, sellers, managers, features, tests, bugs);
  player.debug();
  const concurents = [];
  for (let i = 0; i < playerCount; i++) {
    var inputs = readline().split(" ");
    const startUpId = parseInt(inputs[0]); // Start-up id
    const marketShare = parseInt(inputs[1]); // Market share of the start-up in thousands
    const reputation = parseInt(inputs[2]); // Reputation of the start-up
    concurents.push(new Concurent(startUpId, marketShare, reputation));
  }
  // <devsToHire> <sellerToHire> <managersToHire> <maintenanceDevs> <competitiveSellers> <targetId>
  console.log(f(player, concurents));
}
function f(player, concurents) {
  let devsToHire = 0;
  let sellerToHire = 0;
  let managersToHire = 0;
  let maintenanceDevs = 0;
  let competitivesSellers = 0;
  let targetId = -1;
  function getNbSalarie() {
    return player.devs + player.sellers;
  }
  function getMoneyNeeded() {
    let money = 0;
    money += player.managers * 20;
    money += getNbSalarie() * 10;
    return money;
  }
  function getNeedSalarie() {
    let n = player.managers * 4 - player.devs;
    return n > player.managers * 2 ? player.managers * 2 : n;
  }
  function needManager() {
    return getNbSalarie() / 4 == player.managers;
  }
  let moneyNeededThisTurn = getMoneyNeeded();
  let needSalarie = getNeedSalarie();
  while (needSalarie > 0 && player.cash - moneyNeededThisTurn >= 10) {
    if (player.features < 10) {
      devsToHire++;
    } else {
      if (player.devs + devsToHire / getNbSalarie() + devsToHire + sellerToHire < POIDS[0]) {
        devsToHire++;
      } else {
        sellerToHire++;
      }
    }

    needSalarie--;
    moneyNeededThisTurn += 10;
  }
  if (needManager() && player.cash - moneyNeededThisTurn >= 20) {
    managersToHire = 1;
    moneyNeededThisTurn += 20;
  }
  let totalDev = player.devs + devsToHire;
  maintenanceDevs = totalDev - Math.round((totalDev * 20) / 100);

  return `${devsToHire} ${sellerToHire} ${managersToHire} ${maintenanceDevs} ${competitivesSellers} ${targetId == -1 ? "" : targetId}`;
}

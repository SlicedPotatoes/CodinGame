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

  console.error(`income ${income}`);
  console.error(`cash ${cash}`);
  console.error(`devs ${devs}`);
  console.error(`sellers ${sellers}`);
  console.error(`managers ${managers}`);
  console.error(`features ${features}`);
  console.error(`tests ${tests}`);
  console.error(`bugs ${bugs}`);

  for (let i = 0; i < playerCount; i++) {
    var inputs = readline().split(" ");
    const startUpId = parseInt(inputs[0]); // Start-up id
    const marketShare = parseInt(inputs[1]); // Market share of the start-up in thousands
    const reputation = parseInt(inputs[2]); // Reputation of the start-up
    console.error(`startUpId ${startUpId}`);
    console.error(`marketShare ${marketShare}`);
    console.error(`reputation ${reputation}`);
  }
  let devToHire = GetdevToHire(managers, devs, sellers, features);
  let sellersToHire = GetsellersToHire(managers, devs, sellers, features);
  let managersToHire = getManagersToHire(managers, devs, sellers);
  let maintenanceDevs = (devToHire + devs) / 2;
  let competitiveSellers = 0;
  let targetId = 0;
  console.log(`${devToHire} ${sellersToHire} ${managersToHire} ${maintenanceDevs} ${competitiveSellers}`);
}
function GetdevToHire(managers, devs, sellers, features) {
  if (!needSellers(features, sellers)) {
    let dTH = 4 * managers - (devs + sellers);
    dTH = dTH > 2 * managers ? 2 * managers : dTH;
    return dTH;
  }
  return 0;
}
function GetsellersToHire(managers, devs, sellers, features) {
  if (needSellers(features, sellers)) {
    let sTH = 4 * managers - (devs + sellers);
    sTH = sTH > 2 * managers ? 2 * managers : sTH;
    return sTH;
  }
  return 0;
}
function getManagersToHire(managers, devs, sellers) {
  if (devs + sellers == 4 * managers) {
    return 1;
  }
  return 0;
}
function needSellers(features, sellers) {
  if (features >= 10 && sellers < 1) {
    return true;
  }
  return false;
}

const N = parseInt(readline());
let listPlate = [];
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const plate = inputs[0];
  const radarname = inputs[1];
  const timestamp = parseInt(inputs[2]);
  listPlate.push({ plate: plate, radarname: radarname, time: timestamp });
}
listPlate.sort((a, b) => {
  if (a.plate == b.plate) {
    return a.radarname.localeCompare(b.radarname);
  }
  return a.plate.localeCompare(b.plate);
});
for (let i = 0; i < listPlate.length; i += 2) {
  let radar1 = listPlate[i];
  let radar2 = listPlate[i + 1];
  let vitesse = Math.round(13 / (radar2.time / 1000 / 60 / 60 - radar1.time / 1000 / 60 / 60));
  if (vitesse > 130) {
    console.log(radar1.plate + " " + vitesse);
  }
}

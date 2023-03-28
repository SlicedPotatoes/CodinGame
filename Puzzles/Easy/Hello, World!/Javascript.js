const n = parseInt(readline()); // number of capitals
const m = parseInt(readline()); // number of geolocations for which to find the closest capital
let array = [];
for (let i = 0; i < n; i++) {
  const capitalNameGeoloc = readline();
  let cng = capitalNameGeoloc.split(" ");
  array.push({
    name: cng[0],
    lat: {
      sign: cng[1][0],
      dd: cng[1].substring(1, 3),
      mm: cng[1].substring(3, 5),
      ss: cng[1].substring(5),
      toString: cng[1],
    },
    lon: {
      sign: cng[2][0],
      dd: cng[2].substring(1, 4),
      mm: cng[2].substring(4, 6),
      ss: cng[2].substring(6),
      toString: cng[2],
    },
    text: "",
  });
}
for (let i = 0; i < n; i++) {
  const message = readline();
  array[i].text = message;
}
for (let i = 0; i < m; i++) {
  const travelGeoloc = readline().split(" ");
  let lat = {
    sign: travelGeoloc[0][0],
    dd: travelGeoloc[0].substring(1, 3),
    mm: travelGeoloc[0].substring(3, 5),
    ss: travelGeoloc[0].substring(5),
  };
  let lon = {
    sign: travelGeoloc[1][0],
    dd: travelGeoloc[1].substring(1, 4),
    mm: travelGeoloc[1].substring(4, 6),
    ss: travelGeoloc[1].substring(6),
  };
  let distanceMin = [Infinity, [-1]];
  for (let a = 0; a < n; a++) {
    let distance = Math.round(calculD(array[a].lon, array[a].lat, lon, lat));
    console.error(distance + " travelGeoloc:" + travelGeoloc + " lon:" + array[a].lon.toString + " lat:" + array[a].lat.toString);
    if (distance < distanceMin[0]) {
      distanceMin[0] = distance;
      distanceMin[1] = [a];
    } else if (distance == distanceMin[0]) {
      distanceMin[1].push(a);
    }
  }
  let answer = "";
  for (let a = 0; a < distanceMin[1].length; a++) {
    answer += array[distanceMin[1][a]].text;
    if (a != distanceMin[1].length - 1) {
      answer += " ";
    }
  }
  console.log(answer);
}
function calculD(lon1, lat1, lon2, lat2) {
  let Convertedlon1 = convertToRadian(lon1, "W");
  let Convertedlat1 = convertToRadian(lat1, "N");
  let Convertedlon2 = convertToRadian(lon2, "W");
  let Convertedlat2 = convertToRadian(lat2, "N");
  let d = 2 * 6371 * Math.asin(Math.sqrt(Math.pow(Math.sin((Convertedlat1 - Convertedlat2) / 2), 2) + Math.cos(Convertedlat2) * Math.cos(Convertedlat1) * Math.pow(Math.sin((Convertedlon1 - Convertedlon2) / 2), 2)));
  return d;
}
function convertToRadian(a, sign) {
  let c = rounddig(parseInt(a.dd) + a.mm / 60 + a.ss / 3600); //Convertie en degré décimal
  c = a.sign == sign ? -Math.abs(c) : Math.abs(c); //Change le signe
  c = (c * Math.PI) / 180; //Convertie en Radian
  return c;
}
function rounddig(i) {
  return Math.round(Math.pow(10, 5) * i) / Math.pow(10, 5);
}

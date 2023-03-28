const n = parseInt(readline());
for (let i = 0; i < n; i++) {
  let card = readline().split(" ").join("");
  let sumP = 0;
  let sumI = 0;
  for (let j = 0; j < card.length; j++) {
    if (j % 2 == 0) {
      let temp = card[j] * 2;
      if (temp > 9) {
        temp -= 9;
      }
      sumI += temp;
    } else {
      sumP += parseInt(card[j]);
    }
  }
  if ((sumI + sumP) % 10 == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

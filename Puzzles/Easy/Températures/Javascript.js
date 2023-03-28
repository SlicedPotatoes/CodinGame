const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(" ");
var answer;
for (let i = 0; i < n; i++) {
  const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
  if (answer == null) {
    answer = t;
  } else {
    if (Math.abs(t) < Math.abs(answer)) {
      //Si t est plus proche que le dernier plus proche, remplacer
      answer = t;
    }
    if (Math.abs(t) == Math.abs(answer)) {
      //Si le plus proche et t son a la meme distance de 0 garder le positif
      if (Math.sign(t) == 1) {
        answer = t;
      }
    }
  }
}
if (n == 0) {
  answer = 0;
}
console.log(answer);

const line1 = readline();
const line2 = readline();
const line3 = readline();
let answer = "";
for (let i = 0; i < line1.length / 3; i++) {
  let l1 = line1.substring(i * 3, i * 3 + 3);
  let l2 = line2.substring(i * 3, i * 3 + 3);
  let l3 = line3.substring(i * 3, i * 3 + 3);
  if (l1 != " _ ") {
    //1 ou 4
    if (l2 == "  |") {
      answer += "1";
    } else {
      answer += "4";
    }
  } else if (l3 == "|_|") {
    //0 6 ou 8
    if (l2 == "| |") {
      answer += "0";
    } else if (l2 == "|_ ") {
      answer += "6";
    } else {
      answer += "8";
    }
  } else if (l2 == " _|") {
    //2 ou 3
    if (l3 == "|_ ") {
      answer += "2";
    } else {
      answer += "3";
    }
  } else if (l3 == " _|") {
    //5 ou 9
    if (l2 == "|_|") {
      answer += "9";
    } else {
      answer += "5";
    }
  } else {
    answer += "7";
  }
}
console.log(answer);

const number = readline();
const D = parseInt(readline());
let possibleAnswer = []; //Answer respecting the rules
if (isDivByD(number)) {
  //0 Deleted Digit
  console.log(number);
} else {
  for (let nbDeletedDigit = 1; nbDeletedDigit <= 2; nbDeletedDigit++) {
    for (let i = 0; i < number.toString().length; i++) {
      let a = Array.from(String(number), Number); //Convert number to array
      a.splice(i, 1); //Delete 1 digit
      if (nbDeletedDigit == 2) {
        //If we delete 2 digits
        for (let j = 0; j < arrayToNumber(a).toString().length; j++) {
          let b = [...a];
          b.splice(j, 1); //Delete another digit
          if (isDivByD(arrayToNumber(b)) && !arrayToNumber(b).match(/^0+.+/)) {
            //Check if number respecting the rules (Regex is here because if we delete a 0 its probably more then 2 digits)
            possibleAnswer.push(arrayToNumber(b));
          }
        }
      } else {
        //If we delete 1 digit
        if (isDivByD(arrayToNumber(a)) && !arrayToNumber(a).match(/^0+.+/)) {
          //Check if number respecting the rules (Regex is here because if we delete a 0 its probably more then 2 digits)
          possibleAnswer.push(arrayToNumber(a));
        }
      }
    }
  }
  if (possibleAnswer.length == 0) {
    //none number respecting rule then log 0
    console.log(0);
  } else {
    possibleAnswer.sort(compare);
    console.log(parseInt(possibleAnswer[0]));
  }
}
function isDivByD(n) {
  return n % D == 0;
}
function arrayToNumber(arr) {
  return arr.toString().replaceAll(",", "");
}
function compare(a, b) {
  if (parseInt(a) > parseInt(b)) {
    return -1;
  }
  if (parseInt(a) < parseInt(b)) {
    return 1;
  }
  return 0;
}

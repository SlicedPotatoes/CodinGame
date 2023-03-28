const T = readline().split(" ");
let answer = "";
T.forEach((element) => {
  let _element = splitCountChar(element);
  for (let i = 0; i < _element.count; i++) {
    answer += _element.char;
  }
});
console.log(answer);
function splitCountChar(element) {
  //this fonction create object with count and char property
  let count = 0;
  let char = "";
  if (element == "nl") {
    //if nl -> new line (the only or .length = 2 but wich is not a number and char)
    count = 1;
    char = "\n";
  } else if (element.length == 2) {
    count = parseInt(element[0]);
    char = element[1];
  } else {
    if (element[element.length - 2] >= "0" && element[element.length - 2] <= "9") {
      //the penultimate character is a number so it is not an abbreviation
      count = parseInt(element.substring(0, element.length - 1));
      char = element[element.length - 1];
    } else {
      count = parseInt(element.substring(0, element.length - 2));
      switch (element.substring(element.length - 2)) {
        case "sp":
          char = " ";
          break;
        case "bS":
          char = "\\";
          break;
        case "sQ":
          char = "'";
          break;
        default:
          char = element.substring(element.length - 2);
          break;
      }
    }
  }
  return { count: count, char: char };
}

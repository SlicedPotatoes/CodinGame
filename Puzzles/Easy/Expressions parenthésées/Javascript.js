const expression = readline();
var array = [];
var x = "";
var answer = "true";
for (var i = 0; i < expression.length; i++) {
  if (expression[i] == "{" || expression[i] == "(" || expression[i] == "[") {
    array.push(expression[i]);
    continue;
  }
  switch (expression[i]) {
    case "}":
      if (array.length != 0) {
        x = array.pop();
        if (x == "(" || x == "[") {
          answer = "false";
        }
      } else {
        answer = "false";
      }
      break;
    case ")":
      if (array.length != 0) {
        x = array.pop();
        if (x == "{" || x == "[") {
          answer = "false";
        }
      } else {
        answer = "false";
      }
      break;
    case "]":
      if (array.length != 0) {
        x = array.pop();
        if (x == "{" || x == "(") {
          answer = "false";
        }
      } else {
        answer = "false";
      }
      break;
  }
}
if (array.length > 0) {
  answer = "false";
}
console.log(answer);

const BEGIN = readline();
const END = readline();

//Date to tab for get day month and year
var _begin = BEGIN.split(".");
var _end = END.split(".");

//Diff between end and begin
var diffYears = _end[2] - _begin[2];
var diffMonths = _end[1] - _begin[1];
var diffDays = _end[0] - _begin[0];
console.error("Y: " + diffYears + " M: " + diffMonths + " D: " + diffDays);

//Process
var result = "";
if (diffMonths < 0) {
  diffYears--;
  diffMonths = 12 + diffMonths;
}
if (diffDays < 0) {
  diffMonths--;
  diffDays = 31 + diffMonths;
}
console.error("Y: " + diffYears + " M: " + diffMonths + " D: " + diffDays);
if (diffYears > 0) {
  if (diffYears == 1) {
    result += "1 year, ";
  } else {
    result += diffYears + " years, ";
  }
}
if (diffMonths > 0) {
  if (diffMonths == 1) {
    result += "1 month, ";
  } else {
    result += diffMonths + " months, ";
  }
}
const a = new Date(_begin[1] + "." + _begin[0] + "." + _begin[2]);
const b = new Date(_end[1] + "." + _end[0] + "." + _end[2]);
var c = b.getTime() - a.getTime();
var diffD = Math.round(c / (1000 * 3600 * 24));

console.log(result + "total " + diffD + " days");

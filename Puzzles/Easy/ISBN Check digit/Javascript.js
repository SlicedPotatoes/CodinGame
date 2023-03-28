const N = parseInt(readline());
var invalid = 0;
var invalidA = [];
for (let i = 0; i < N; i++) {
  const ISBN = readline();
  checkISBN(ISBN);
}
function checkISBN(isbn) {
  if (isbn.length == 10) {
    checkISBN10(isbn);
  } else if (isbn.length == 13) {
    checkISBN13(isbn);
  } else {
    invalid++;
    invalidA.push(isbn);
  }
}
function checkISBN10(isbn) {
  var digits = isbn.split("");
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += parseInt(digits[i]) * (10 - i);
  }
  checkDigits = sum % 11;
  if (checkDigits != 0) {
    checkDigits = 11 - checkDigits;
  }
  if (digits[9] == "X" && checkDigits != "10") {
    invalid++;
    invalidA.push(isbn);
  } else if (digits[9] != "X" && parseInt(digits[9]) != checkDigits) {
    invalid++;
    invalidA.push(isbn);
  }
}
function checkISBN13(isbn) {
  var digits = isbn.split("");
  var sum = 0;
  for (var i = 0; i < 12; i++) {
    if (i % 2 == 0) {
      sum += parseInt(digits[i]);
    } else {
      sum += parseInt(digits[i]) * 3;
    }
  }
  checkDigits = sum % 10;
  if (checkDigits != 0) {
    checkDigits = 10 - checkDigits;
  }

  if (digits[12] == "X") {
    invalid++;
    invalidA.push(isbn);
  } else if (parseInt(digits[12]) != checkDigits) {
    invalid++;
    invalidA.push(isbn);
  }
}
console.log(invalid + " invalid:");
for (var i = 0; i < invalidA.length; i++) {
  console.log(invalidA[i]);
}

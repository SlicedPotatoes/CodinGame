const typedKeys = readline();
let cursor = 0;
let str = [];
for (let i = 0; i < typedKeys.length; i++) {
  if (typedKeys[i] == "<") {
    if (cursor > 0) {
      cursor--;
    }
  } else if (typedKeys[i] == ">") {
    if (cursor < str.length) {
      cursor++;
    }
  } else if (typedKeys[i] == "-") {
    if (cursor > 0) {
      cursor--;
    }
    str.splice(cursor, 1);
  } else {
    str.splice(cursor, 0, typedKeys[i]);
    cursor++;
  }
}
console.log(str.join(""));

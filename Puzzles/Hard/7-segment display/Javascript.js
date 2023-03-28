const N = readline();
const C = readline();
const S = parseInt(readline());

let getFunctions = [
  function getZero(size, char, i) {
    if (i == 0 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else if (i == size + 1) {
      return getFullLineSpace(size, char);
    } else {
      return getLineSpaceBetweenChar(size, char);
    }
  },
  function getOne(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineSpace(size, char);
    } else {
      return getLineCharAtEnd(size, char);
    }
  },
  function getTwo(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else if (i < size + 1) {
      return getLineCharAtEnd(size, char);
    } else {
      return getLineCharAtStart(size, char);
    }
  },
  function getTree(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else {
      return getLineCharAtEnd(size, char);
    }
  },
  function getFour(size, char, i) {
    if (i == 0 || i == size * 2 + 2) {
      return getFullLineSpace(size, char);
    } else if (i == size + 1) {
      return getFullLineChar(size, char);
    } else if (i < size + 1) {
      return getLineSpaceBetweenChar(size, char);
    } else {
      return getLineCharAtEnd(size, char);
    }
  },
  function getFive(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else if (i < size + 1) {
      return getLineCharAtStart(size, char);
    } else {
      return getLineCharAtEnd(size, char);
    }
  },
  function getSix(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else if (i < size + 1) {
      return getLineCharAtStart(size, char);
    } else {
      return getLineSpaceBetweenChar(size, char);
    }
  },
  function getSeven(size, char, i) {
    if (i == size + 1 || i == size * 2 + 2) {
      return getFullLineSpace(size, char);
    } else if (i == 0) {
      return getFullLineChar(size, char);
    } else {
      return getLineCharAtEnd(size, char);
    }
  },
  function getEight(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else {
      return getLineSpaceBetweenChar(size, char);
    }
  },
  function getNine(size, char, i) {
    if (i == 0 || i == size + 1 || i == size * 2 + 2) {
      return getFullLineChar(size, char);
    } else if (i > size + 1) {
      return getLineCharAtEnd(size, char);
    } else {
      return getLineSpaceBetweenChar(size, char);
    }
  },
];
for (let i = 0; i < S * 2 + 3; i++) {
  let str = "";
  for (let j = 0; j < N.length; j++) {
    str += getFunctions[N[j]](S, C, i) + " ";
  }
  while (str[str.length - 1] == " ") {
    str = str.substring(0, str.length - 1);
  }
  console.log(str);
}
function getFullLineChar(size, char) {
  let str = "";
  for (let i = 0; i < size + 2; i++) {
    if (i != 0 && i != size + 1) {
      str += char;
    } else {
      str += " ";
    }
  }
  return str;
}
function getLineCharAtEnd(size, char) {
  let str = "";
  for (let i = 0; i < size + 2; i++) {
    if (i != size + 1) {
      str += " ";
    } else {
      str += char;
    }
  }
  return str;
}
function getLineCharAtStart(size, char) {
  let str = "";
  for (let i = 0; i < size + 2; i++) {
    if (i != 0) {
      str += " ";
    } else {
      str += char;
    }
  }
  return str;
}
function getLineSpaceBetweenChar(size, char) {
  let str = "";
  for (let i = 0; i < size + 2; i++) {
    if (i != 0 && i != size + 1) {
      str += " ";
    } else {
      str += char;
    }
  }
  return str;
}
function getFullLineSpace(size, char) {
  let str = "";
  for (let i = 0; i < size + 2; i++) {
    str += " ";
  }
  return str;
}

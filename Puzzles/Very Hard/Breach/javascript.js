const LOCKS_TYPES = ["ss_f", "ss_m", "ss_n", "ss_asc", "ss_con", "ss_colv", "rs_f", "rs_n", "rs_colv", "gs_m"];
const tableauPeriodiqueDesElements = {
  1: "H", // Hydrogène
  2: "He", // Hélium
  3: "Li", // Lithium
  4: "Be", // Béryllium
  5: "B", // Bore
  6: "C", // Carbone
  7: "N", // Azote
  8: "O", // Oxygène
  9: "F", // Fluor
  10: "Ne", // Néon
  11: "Na", // Sodium
  12: "Mg", // Magnésium
  13: "Al", // Aluminium
  14: "Si", // Silicium
  15: "P", // Phosphore
  16: "S", // Soufre
  17: "Cl", // Chlore
  18: "Ar", // Argon
  19: "K", // Potassium
  20: "Ca", // Calcium
  21: "Sc", // Scandium
  22: "Ti", // Titane
  23: "V", // Vanadium
  24: "Cr", // Chrome
  25: "Mn", // Manganèse
  26: "Fe", // Fer
  27: "Co", // Cobalt
  28: "Ni", // Nickel
  29: "Cu", // Cuivre
  30: "Zn", // Zinc
  31: "Ga", // Gallium
  32: "Ge", // Germanium
  33: "As", // Arsenic
  34: "Se", // Sélénium
  35: "Br", // Brome
  36: "Kr", // Krypton
  37: "Rb", // Rubidium
  38: "Sr", // Strontium
  39: "Y", // Yttrium
  40: "Zr", // Zirconium
  41: "Nb", // Niobium
  42: "Mo", // Molybdène
  43: "Tc", // Technétium
  44: "Ru", // Ruthénium
  45: "Rh", // Rhodium
  46: "Pd", // Palladium
  47: "Ag", // Argent
  48: "Cd", // Cadmium
  49: "In", // Indium
  50: "Sn", // Étain
  51: "Sb", // Antimoine
  52: "Te", // Tellure
  53: "I", // Iode
  54: "Xe", // Xénon
  55: "Cs", // Césium
  56: "Ba", // Baryum
  57: "La", // Lanthane
  58: "Ce", // Cérium
  59: "Pr", // Praséodyme
  60: "Nd", // Néodyme
  61: "Pm", // Prométhium
  62: "Sm", // Samarium
  63: "Eu", // Europium
  64: "Gd", // Gadolinium
  65: "Tb", // Terbium
  66: "Dy", // Dysprosium
  67: "Ho", // Holmium
  68: "Er", // Erbium
  69: "Tm", // Thulium
  70: "Yb", // Ytterbium
  71: "Lu", // Lutécium
  72: "Hf", // Hafnium
  73: "Ta", // Tantale
  74: "W", // Tungstène
  75: "Re", // Rhénium
  76: "Os", // Osmium
  77: "Ir", // Iridium
  78: "Pt", // Platine
  79: "Au", // Or
  80: "Hg", // Mercure
  81: "Tl", // Thallium
  82: "Pb", // Plomb
  83: "Bi", // Bismuth
  84: "Po", // Polonium
  85: "At", // Astate
  86: "Rn", // Radon
  87: "Fr", // Francium
  88: "Ra", // Radium
  89: "Ac", // Actinium
  90: "Th", // Thorium
  91: "Pa", // Protactinium
  92: "U", // Uranium
  93: "Np", // Neptunium
  94: "Pu", // Plutonium
  95: "Am", // Américium
  96: "Cm", // Curium
  97: "Bk", // Berkélium
  98: "Cf", // Californium
  99: "Es", // Einsteinium
  100: "Fm", // Fermium
  101: "Md", // Mendelevium
  102: "No", // Nobelium
  103: "Lr", // Lawrencium
  104: "Rf", // Rutherfordium
  105: "Db", // Dubnium
  106: "Sg", // Seaborgium
  107: "Bh", // Bohrium
  108: "Hs", // Hassium
  109: "Mt", // Meitnerium
  110: "Ds", // Darmstadtium
  111: "Rg", // Roentgenium
  112: "Cn", // Copernicium
  113: "Nh", // Nihonium
  114: "Fl", // Flerovium
  115: "Mc", // Moscovium
  116: "Lv", // Livermorium
  117: "Ts", // Tennessine
  118: "Og", // Oganesson
};
const digits = [
  [" ++++ ", "+    +", "+    +", "+    +", "+    +", " ++++ "],
  [" ++++ ", "+++++ ", "  +++ ", "  +++ ", "  +++ ", " +++++"],
  [" +++++ ", "++   ++", " +  ++ ", "   ++  ", "  ++   ", "+++++++"],
  [" +++++ ", "++   ++", "    ++ ", "++   ++", " +++++ ", "       "],
  ["   ++++ ", " ++   ++", " ++   ++", "++++++++", "      ++", "      ++"],
  ["++++++", "+     ", "++++  ", "    + ", "    + ", "+++++ "],
  [" +++ ", "+    ", "++++ ", "+   +", "+++  ", "     "],
  ["++++++", "    ++", "   ++ ", "  ++  ", " ++   ", " +    "],
  [" ++ ", "+  +", " ++ ", "+  +", " ++ ", "    "],
  [" ++++ ", "+    +", " ++++ ", "    + ", "    + ", ""], //J'ai enlevé le dernier string car le '+' n'etait pas adhjacent au autre et mon algorithme de detection de contours ne le prennais pas en compte
];
const colors = {
  W: "GRAY",
  w: "WHITE",
  R: "RED",
  r: "LIGHT_RED",
  G: "GREEN",
  g: "LIGHT_GREEN",
  B: "BLUE",
  b: "LIGHT_BLUE",
  y: "YELLOW",
  o: "ORANGE",
  P: "PINK",
  p: "LIGHT_PINK",
  V: "VIOLET",
  v: "LIGHT_VIOLET",
  "?": "CORRUPT",
};
function ss_n(data) {
  function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    }
    let term = fibonacci(n - 2) + fibonacci(n - 1);
    cache[n] = term;
    return term;
  }
  let input = data.match(/\d+/g);
  let start = parseInt(input[0]);
  let targetTherm = parseInt(input[input.length - 1]);
  let cache = { 1: start, 2: start };
  return fibonacci(targetTherm + 1);
}
function rs_n(data) {
  function arithmetique(terms, n) {
    const r = terms[1] - terms[0];
    let actualN = terms.length;
    let term = terms[actualN - 1];
    while (actualN != n) {
      term += r;
      actualN++;
    }
    return term;
  }
  const input = data.match(/\d+/g);
  const targetTerm = parseInt(input[input.length - 1]);
  const terms = [];
  for (let i = 0; i < input.length - 1; i++) {
    terms.push(parseInt(input[i]));
  }
  return arithmetique(terms, targetTerm + 1);
}
function ss_f(data) {
  function isLower(char) {
    return char == char.toLowerCase();
  }
  for (let i = 0; i < data.length; i++) {
    if (isLower(data[i])) {
      return data[i].charCodeAt(0) - "a".charCodeAt(0);
    }
  }
}
function rs_f(data) {
  return data[0].charCodeAt(0) - "a".charCodeAt(0);
}
function gs_m(data) {
  const input = data.match(/\d+/g);
  return tableauPeriodiqueDesElements[input[0]];
}
function ss_m(data) {
  for (const [key, value] of Object.entries(tableauPeriodiqueDesElements)) {
    if (value == data) {
      return key;
    }
  }
}
function ss_asc(data) {
  function detectionContour(ascii) {
    const indexHelper = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const contours = [];
    const visited = new Array(ascii.length).fill(0).map((i) => new Array(ascii[i].length).fill(false));
    function isValid(x, y) {
      return y >= 0 && y < ascii.length && x >= 0 && x < ascii[y].length;
    }
    function dfs(x, y, contour) {
      if (!isValid(x, y) || visited[y][x] || ascii[y][x] == " ") {
        return;
      }
      visited[y][x] = true;
      contour.push([y, x]);
      for (let i = 0; i < indexHelper.length; i++) {
        let dy = indexHelper[i][0];
        let dx = indexHelper[i][1];
        dfs(x + dx, y + dy, contour);
      }
    }
    for (let y = 0; y < ascii.length; y++) {
      for (let x = 0; x < ascii[y].length; x++) {
        if (!visited[y][x] && ascii[y][x] == "+") {
          let c = [];
          dfs(x, y, c);
          contours.push(c);
        }
      }
    }
    return contours;
  }
  function getMinMaxX(contour) {
    let minX = Infinity;
    let maxX = -Infinity;
    for (let i = 0; i < contour.length; i++) {
      const c = contour[i];
      const x = c[1];
      if (x > maxX) {
        maxX = x;
      }
      if (x < minX) {
        minX = x;
      }
    }
    return [minX, maxX];
  }
  function checkDigit(matrix, digit) {
    for (let i = 0; i < matrix.length; i++) {
      if (digits[digit][i].trim() != matrix[i].join("").trim()) {
        return false;
      }
    }
    return true;
  }
  const contours = detectionContour(data);
  let answer = "";
  for (let iContour = 0; iContour < contours.length; iContour++) {
    const contour = contours[iContour];
    const [minX, maxX] = getMinMaxX(contour);
    const matrix = new Array(data.length).fill(0).map(() => new Array(maxX - minX).fill(" "));
    for (let i = 0; i < contour.length; i++) {
      const y = contour[i][0];
      const x = contour[i][1] - minX;
      matrix[y][x] = "+";
    }
    for (let i = 0; i <= 9; i++) {
      if (checkDigit(matrix, i)) {
        answer += i;
      }
    }
  }
  return answer;
}
let last = false;
let count = 0;
function ss_con(data) {
  const input = data.match(/¬[^¬]+\.\.\./g);
  for (let i = 0; i < input.length; i++) {
    if (input[i][1] == "r") {
      console.error(i);
      if (i == 0) {
        if (count != 9) {
          count++;
          return 1;
        } else {
          count = 0;
          return 0;
        }
      }
      if (i == 5) {
        return 0;
      }
      return i + 1;
    }
  }
  return 0;
}
function ss_colv(data) {
  const input = data.match(/¬[A-Za-z]\+/g);
  console.error(input);
  return colors[input[0][1]];
}
function rs_colv(data) {
  return colors[data[1]];
}
while (true) {
  const lines = parseInt(readline());
  let lockType = null;
  let data = [];
  for (let i = 0; i < lines; i++) {
    const line = readline();
    console.error(line);
    if (lockType == null) {
      for (const _lockType of LOCKS_TYPES) {
        if (line.indexOf(_lockType) != -1) {
          lockType = _lockType;
        }
      }
      continue;
    }
    data.push(line);
  }
  switch (lockType) {
    case "ss_n":
      console.log(ss_n(data[0]));
      break;
    case "rs_n":
      console.log(rs_n(data[0]));
      break;
    case "ss_f":
      console.log(ss_f(data[0]));
      break;
    case "rs_f":
      console.log(rs_f(data[0]));
      break;
    case "gs_m":
      console.log(gs_m(data[0]));
      break;
    case "ss_m":
      console.log(ss_m(data[0]));
      break;
    case "ss_asc":
      console.log(ss_asc(data));
      break;
    case "ss_con":
      console.log(ss_con(data[0]));
      break;
    case "ss_colv":
      console.log(ss_colv(data[0]));
      break;
    case "rs_colv":
      console.log(rs_colv(data[0]));
      break;
  }
}

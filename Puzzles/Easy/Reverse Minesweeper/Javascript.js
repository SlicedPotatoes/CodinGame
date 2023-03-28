let map = [];
const w = parseInt(readline());
const h = parseInt(readline());
for (let i = 0; i < h; i++) {
  map.push(readline().split(""));
}
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (map[i][j] == "x") {
      let im = i - 1 >= 0;
      let ip = i + 1 < h;
      let jm = j - 1 >= 0;
      let jp = j + 1 < w;
      console.error("i " + i + " j " + j);
      if (im) {
        let m = map[i - 1][j];
        if (m == ".") {
          map[i - 1][j] = 1;
        } else if (m != "x") {
          map[i - 1][j] = parseInt(m) + 1;
        }
      }
      if (ip) {
        let m = map[i + 1][j];
        if (m == ".") {
          map[i + 1][j] = 1;
        } else if (m != "x") {
          map[i + 1][j] = parseInt(m) + 1;
        }
      }
      if (jm) {
        let m = map[i][j - 1];
        if (m == ".") {
          map[i][j - 1] = 1;
        } else if (m != "x") {
          map[i][j - 1] = parseInt(m) + 1;
        }
      }
      if (jp) {
        let m = map[i][j + 1];
        if (m == ".") {
          map[i][j + 1] = 1;
        } else if (m != "x") {
          map[i][j + 1] = parseInt(m) + 1;
        }
      }
      if (im && jm) {
        let m = map[i - 1][j - 1];
        if (m == ".") {
          map[i - 1][j - 1] = 1;
        } else if (m != "x") {
          map[i - 1][j - 1] = parseInt(m) + 1;
        }
      }
      if (im && jp) {
        let m = map[i - 1][j + 1];
        if (m == ".") {
          map[i - 1][j + 1] = 1;
        } else if (m != "x") {
          map[i - 1][j + 1] = parseInt(m) + 1;
        }
      }
      if (ip && jm) {
        let m = map[i + 1][j - 1];
        if (m == ".") {
          map[i + 1][j - 1] = 1;
        } else if (m != "x") {
          map[i + 1][j - 1] = parseInt(m) + 1;
        }
      }
      if (ip && jp) {
        let m = map[i + 1][j + 1];
        if (m == ".") {
          map[i + 1][j + 1] = 1;
        } else if (m != "x") {
          map[i + 1][j + 1] = parseInt(m) + 1;
        }
      }
    }
  }
}
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (map[i][j] == "x") {
      map[i][j] = ".";
    }
  }
  console.log(map[i].join(""));
}

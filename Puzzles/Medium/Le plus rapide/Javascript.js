class Time {
  constructor(str) {
    str = str.split(":");
    this.h = str[0];
    this.m = str[1];
    this.s = str[2];
  }
}
const N = parseInt(readline());
let listTime = [];
for (let i = 0; i < N; i++) {
  const t = readline();
  listTime.push(new Time(t));
}
listTime.sort((a, b) => {
  if (a.h === b.h) {
    if (a.m === b.m) {
      return a.s > b.s ? 1 : -1;
    }
    return a.m > b.m ? 1 : -1;
  }
  return a.h > b.h ? 1 : -1;
});
let t = listTime[0];
console.log(`${t.h}:${t.m}:${t.s}`);

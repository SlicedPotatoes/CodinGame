let a = (n, b) => {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Math.pow(n[i], 2);
  }
  if (sum == 1) {
    return true;
  }
  if (b.includes(sum)) {
    return false;
  }
  b.push(sum);
  return a(sum.toString(), b);
};
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  const x = readline();
  console.log(x + " " + (a(x, []) ? ":)" : ":("));
}

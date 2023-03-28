const n = (parseInt(readline()) + 1).toString().split("");
for (let i = 1; i < n.length; i++) {
  if (n[i] < n[i - 1]) {
    n.splice(i, n.length - i, "".padStart(n.length - i, n[i - 1]));
  }
}
print(n.join(""));

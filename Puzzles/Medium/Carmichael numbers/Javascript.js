const n = parseInt(readline());
const pow = (base, exp) => base ** exp;

if (pow(2n, BigInt(n)) % BigInt(n) == 2 % n && !isPrime(n)) {
  console.log("YES");
} else {
  console.log("NO");
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 == 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

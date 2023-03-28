const n = parseInt(readline());
let answer = 0;
let tabFactor = factorisation(n, 2);

for (let i = 0; i < tabFactor.length; i++) {
  let num = 1;
  for (let j = 0; j < tabFactor.length; j++) {
    if (i == j) {
      num *= 1;
    } else {
      num *= tabFactor[j];
    }
  }
  answer += num;
}

console.log(answer);

function factorisation(n) {
  let tab = [];
  let prime = 2;
  while (n != 1) {
    if (n % prime == 0) {
      tab.push(prime);
      n = n / prime;
      prime = 2;
    } else {
      prime = getNextPrime(prime);
    }
  }
  return tab;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function getNextPrime(n) {
  let i = n + 1;
  while (!isPrime(i)) {
    i++;
  }
  return i;
}

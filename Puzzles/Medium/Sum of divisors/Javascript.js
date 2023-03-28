const n = parseInt(readline());
let sum = 0;
//Brute Force Method
/*for(let i = 1; i <= n; i++){
    for (let j = 1; j <=i; j++){
        if(i % j == 0){
            console.error('i: ' + i + ' j: ' + j)
            sum += j;
        }
    }
}*/
let array = [[1]];
let primeNumber = [];
for (let i = 2; i <= n; i++) {
  array.push([1, i]);
  for (let j = 0; j < primeNumber.length; j++) {
    if (i % primeNumber[j] == 0) {
      if (!array[i - 1].includes(primeNumber[j])) {
        array[i - 1].push(primeNumber[j]);
      }
      for (let k = 0; k < array[i / primeNumber[j] - 1].length; k++) {
        if (!array[i - 1].includes(array[i / primeNumber[j] - 1][k])) {
          array[i - 1].push(array[i / primeNumber[j] - 1][k]);
        }
      }
    }
  }
  if (array[i - 1].length == 2) {
    primeNumber.push(i);
  }
}
for (let i = 0; i < array.length; i++) {
  array[i].forEach((e) => {
    sum += e;
  });
}
console.log(sum);

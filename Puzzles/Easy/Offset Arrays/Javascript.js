const n = parseInt(readline());
let listArray = [];
for (let i = 0; i < n; i++) {
  const assignment = readline().split(" = ");
  console.error(assignment);
  let name = assignment[0].substring(0, assignment[0].indexOf("["));
  let index = assignment[0].substring(assignment[0].indexOf("[") + 1, assignment[0].indexOf("]")).split("..");
  let value = assignment[1].split(" ");
  listArray.push({ name: name, first_index: index[0], last_index: index[1], value: value });
}
const x = readline();
let orderProcess = getOrderProcess();
let answer;
for (let i = orderProcess.arrayName.length - 1; i >= 0; i--) {
  if (!answer) {
    answer = getValue(orderProcess.arrayName[i] + " " + orderProcess.startIndex);
  } else {
    answer = getValue(orderProcess.arrayName[i] + " " + answer);
  }
}
console.log(answer);

function getValue(a) {
  let b = a.split(" ");
  let obj = getArrayByName(b[0]);
  return obj.value[b[1] - obj.first_index];
}
function getArrayByName(name) {
  for (let i = 0; i < listArray.length; i++) {
    if (listArray[i].name == name) {
      return listArray[i];
    }
  }
  return null;
}
function getOrderProcess() {
  let i = 0;
  let arrayNameOrder = [];
  let startIndex = -1;
  do {
    let tempI = x.indexOf("[", i);
    if (tempI != -1) {
      arrayNameOrder.push(x.substring(i, tempI));
      i = tempI + 1;
    } else {
      startIndex = x.substring(i, x.indexOf("]"));
      i = -1;
    }
  } while (i != -1);
  return { startIndex: startIndex, arrayName: arrayNameOrder };
}

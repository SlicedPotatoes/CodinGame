const L = parseInt(readline());
const N = parseInt(readline());
let list = []; //List to stock all ranges of painted fence
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const st = parseInt(inputs[0]);
  const ed = parseInt(inputs[1]);
  list.push({ st: st, ed: ed });
}
list.sort((a, b) => {
  //
  if (a.st > b.st) {
    return 1;
  } //
  else if (a.st < b.st) {
    return -1;
  } // Sort the list to first have the range with the smallest start
  else {
    return a.ed - b.ed;
  } //
}); //
let _list = [];
let isChange = false;
while (list.length != 0) {
  //After this loop the list includes ranges that do not overlap and have been sorted
  if (list.length >= 2) {
    //If the list contains more then 2elements
    let e = list.shift(); //Take element 1
    let _e = list.shift(); //Take element 2
    if (e.ed >= _e.st) {
      //Compared the end of the 1st range with the beginning of the 2nd range. If higher create a new range which includes
      _list.push({ st: e.st, ed: e.ed > _e.ed ? e.ed : _e.ed }); //the start of the first and the end of the range which is the largest. Push him in the array
      isChange = true;
    } else {
      //If not higher, push first element in _list and put at the start of the table the second element
      _list.push(e);
      list.unshift(_e);
    }
  } else {
    //If the list contains less than 2 elements put the only element in _list
    _list.push(list.shift());
  }
  if (list.length == 0 && isChange) {
    //If list is empty but we have created new range, swap list & _list and repeat until there are no more changes
    isChange = false;
    list = _list;
    _list = [];
  }
}
if (_list.length == 1 && _list[0].st == 0 && _list[0].ed == L) {
  //If list have one element and st == 0 && ed == L, all fence is painted
  console.log("All painted");
} else {
  for (let i = 0; i < _list.length; i++) {
    let e = _list[i];
    if (i == 0 && e.st != 0) {
      console.log(0 + " " + e.st);
    } //if i == 0 and the range start not 0 --> write '0 rangeStart'
    else if (i != 0) {
      let _e = _list[i - 1]; //range i - 1
      console.log(_e.ed + " " + e.st); //if i != 0 write 'rangeI-1End rangeIStart'
    }
    if (i == _list.length - 1 && e.ed != L) {
      console.log(e.ed + " " + L);
    } //if its end of list and rangeEnd != L write 'rangeEnd L'
  }
}

let listWord = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
  listWord.push(readline());
} // Fill listWord
let sortedList = [...listWord].sort(); // Creates a copy of listWord sort by alphabetical order
let listPrefix = [];
for (let i = 0; i < N; i++) {
  let el = sortedList[i];
  let el1 = i < N - 1 ? sortedList[i + 1] : null;
  let el2 = i > 0 ? sortedList[i - 1] : null;
  let j = 0;
  while (el1 != null || el2 != null) {
    //count the imilarities between the -1 and +1 element
    if (el1 != null) {
      if (el1[j] != el[j]) {
        el1 = null;
      } //If there is a difference set the element to null
    }
    if (el2 != null) {
      if (el2[j] != el[j]) {
        el2 = null;
      } //If there is a difference set the element to null
    }
    j++;
  }
  listPrefix.push(sortedList[i].substring(0, j)); //Create Prefix
}
for (let i = 0; i < N; i++) {
  console.log(listPrefix[sortedList.indexOf(listWord[i])]);
}

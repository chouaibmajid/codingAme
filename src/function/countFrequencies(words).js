function countFrequencies(words) {
  console.log(words);
  var wordsSort = words.sort();
  console.log(wordsSort);
  const arr = [];
  var i;
  wordsSort.forEach((mot, id) => {
    if (wordsSort[id] !== wordsSort[id - 1]) {
      i = 0;
      wordsSort.forEach((mot2) => {
        if (mot === mot2) {
          i = i + 1;
        }
      });
    } else {
      i = 0;
    }
    arr.push(i);
  });

  return arr.filter((item) => item !== 0);
}
console.log(countFrequencies(["March", "Jan", "March", "Feb", "Dec", "Jan"]));
//output [ 1, 1, 2, 2 ]

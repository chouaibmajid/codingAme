const almostIncreasingSequence = (sequence) => {
  var newArr = [];
  sequence.sort().forEach((item, id) => {
    if (id !== 0) {
      if (sequence.sort()[id] === sequence.sort()[id - 1] + 1) {
        newArr.push(1);
      } else {
        newArr.push(0);
      }
    }
  });

  return newArr.findIndex((item) => item === 0) === -1;
};

console.log(almostIncreasingSequence([2, 3, 0, 1, -1]));

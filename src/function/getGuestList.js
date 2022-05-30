const getGuestList = (a, b) => {
  var newArr = [...a, ...b].sort();
  var result = newArr.map((item, id) => {
    if (item === newArr[id - 1] || item === newArr[id + 1]) {
      return 0;
    } else return item;
  });

  return result.filter((item) => item !== 0);
};
console.log(getGuestList([1, 2, 3], [2, 3, 5, 4]));

// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// const getGuestList = (a, b) => {
//   var newArr = [];
//   for (let num of a) {
//     for (let num2 of b) {
//       if (num == num2) {
//         newArr.push(num);
//       }
//     }
//   }
//   var a2 = a;
//   var b2 = b;

//   do {
//     a2 = a2.filter((item) => item != newArr[0]);
//     b2 = b2.filter((item) => item != newArr[0]);

//     newArr.shift();
//   } while (!!newArr.length);

//   return a2.concat(b2);
// };
// console.log(getGuestList([1, 2, 3], [2, 3, 5, 4]));

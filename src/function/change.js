function change(change) {
  const two =
      change < 4 ? change >> 1 : [0, 3, 1, 4, 2][Math.floor(change) % 5],
    rest = change - two * 2;

  return {
    two,
    five: Math.floor((rest % 10) / 5),
    ten: Math.floor(rest / 10),
  };
}
//   ma solution
function change(cash) {
  var two, five, ten;
  //  add condition cash % 10 != 1
  if (cash % 10 == 3) {
    console.log("== 3");

    five = 1;
    two = 4;
    ten = cash > 20 ? Math.floor(cash / 10) - 1 : 0;
  }
  if (cash % 10 == 1) {
    console.log("== 1");
    five = 1;
    two = 3;
    ten = cash > 20 ? Math.floor(cash / 10) - 1 : 0;
  }

  if (cash >= 10 && cash % 10 != 3 && cash % 10 != 1) {
    ten = Math.floor(cash / 10);
    rendu = cash % 10;
    if (rendu % 5 >= 0 && rendu % 5 != 1 && rendu % 5 != 3) {
      five = Math.floor(rendu / 5);
      two = (rendu % 5) / 2;
    } else if (rendu % 5 == 1 && rendu % 5 == 3) {
      two = rendu / 2;
      five = 0;
    } else if (rendu % 5 == 0) {
      five = rendu / 5;
      two = 0;
    }
  } else if (cash < 10) {
    ten = 0;
    if (cash >= 5 && cash % 5 != 1 && cash % 5 != 3) {
      five = Math.floor(cash / 5);
      two = (cash % 5) / 2;
    } else {
      five = 0;
      two = Math.floor(cash / 2);
    }
  }

  return {
    two: two,
    five: five,
    ten: ten,
  };
}
console.log(change(42));

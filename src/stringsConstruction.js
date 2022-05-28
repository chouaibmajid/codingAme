const stringsConstruction = (a, b) => {
  var newArr = [];
  a.split("").forEach((item) => {
    var cum = 0;
    b.split("").forEach((item2) => {
      if (item == item2) cum = cum + 1;
    });
    const index = newArr.findIndex((obj) => obj.chiffre == item);
    if (index == -1) {
      newArr.push({
        chiffre: item,
        sumCum: cum,
        frequent: 1,
      });
    } else {
      newArr = newArr.map((object) => {
        if (object.chiffre == item) {
          return {
            ...object,
            frequent: object.frequent + 1,
          };
        } else return object;
      });
    }
  });
  console.log("newArr", newArr);
  var resultFinal = newArr.map((item) => {
    return Math.floor(item.sumCum / item.frequent);
  });
  console.log("resultFinal", resultFinal);

  return Math.min(...resultFinal);
};

console.log(stringsConstruction("aaaab", "abccbaabc"));

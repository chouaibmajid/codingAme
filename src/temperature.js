function temperature(str) {
  var tab = str.split(" ");
  var tab2 = tab.map((item) => parseInt(item * item));
  if (!tab2.length) return 0;
  var min = tab2[0];
  var indx = 0;
  tab2.forEach((item, index) => {
    if (item < min) {
      min = item;
      indx = index;
    }
  });
  if (tab[indx] >= 0) {
    return tab[indx];
  } else {
    const index = tab.findIndex((item) => item == -tab[indx]);

    return index === -1 ? tab[indx] : tab[index];
  }
}
console.log(
  temperature(
    "7 -5 -3 8 -8 -7 -9 6 8 4 9 7 4 7 8 55 44 77 88 99 -66 3 -1 0 1 -3"
  )
);

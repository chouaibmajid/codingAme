const singers = [
  { name: "John", music: ["classic", "rap", "disco"] },
  { name: "Jack", music: ["classic", "disco"] },
  { name: "Joe", music: ["jazz"] },
];

function getMusicList(peopleList) {
  var newArr = [];
  singers.forEach((item) => {
    item.music.map((item2) => {
      if (!newArr.includes(item2)) {
        newArr.push(item2);
      }
    });
  });
  return newArr;
}

console.log(getMusicList(singers));

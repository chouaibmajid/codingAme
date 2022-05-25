function nextWeek(date) {
    // Your code goes here...
    var nextweek = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);
    return nextweek;
  }
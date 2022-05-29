function computeMultiplesSum(n) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    let sum = 0;
    for (let i = 1; i < n; i++) {
  
    if (i % 3 === 0  || i % 5 === 0 || i %7 === 0) {
      sum = sum + i;
        }
      }
      return sum
}

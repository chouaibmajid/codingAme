function calculateDiscount(prices, discount) {
  var total = 0;
  var valeurMax = 0;
  for (i = 0; i < prices.length; i++) {
    total += prices[i];
    if (prices[i] > valeurMax) {
      valeurMax = prices[i];
    }
  }
  const TotalFinal = total - (valeurMax * discount) / 100;

  return Math.floor(TotalFinal);
}
console.log(calculateDiscount([10, 30, 40, 50], 100));

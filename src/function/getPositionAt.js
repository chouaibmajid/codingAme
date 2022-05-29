// Computes the position of the​​​​​​‌​​‌‌​​‌​‌‌‌​​​​‌​​​‌​​​‌ dancer
function getPositionAt(n) {
  var position = 0;
  var step1 = 1;
  position = position + step1;
  n = n - 1;

  var step2 = -2;
  position = position + step2;
  n -= 1;
  do {
    position = position + (step2 - step1);
    var b = step1;
    step1 = step2;
    step2 = step2 - b;
    n -= 1;
  } while (n > 0);

  return position;
}

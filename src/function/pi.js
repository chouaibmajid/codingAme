function pi(n) {
    var pi = 0;
    for (i=1; i <= n; i+2) {
      pi = 4 * ((1/i) + (1/(i+2)))
    }
    return pi;
  }

  
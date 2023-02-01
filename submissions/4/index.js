function getFibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

console.log("For 0: ", getFibonacci(0));
console.log("For 1: ", getFibonacci(1));
console.log("For 20: ", getFibonacci(20));

const fibonacci = function (num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return num < 0 ? "OOPS" : fib[num];
};

// Do not edit below this line
module.exports = fibonacci;

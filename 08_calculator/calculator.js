const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function (arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (a, b) {
  let sum = a;
  for (let i = 1; i < b; i++) {
    sum *= a;
  }
  return sum;
};

const factorial = function (n) {
  let init = 1;
  for (let i = n; i > 0; i--) {
    init *= i;
  }
  return init;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

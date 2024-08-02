const add = function (num1, num2) {
  let sum = +num1 + +num2;
  return sum;
};

const subtract = function (num1, num2) {
  let diff = num1 - num2;
  return diff;
};

const sum = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  else {
    let result = nums.reduce((num1, num_n) => +num1 + +num_n);
    return result;
  }

};

const multiply = function (nums) {
  let result = nums.reduce((num1, num_n) => num1 * num_n, 1);
  return result;
};

const power = function (num1, num2) {
  let pow = num1 ** num2;
  return pow;
};

const factorial = function (number) {
  let fact = 1;
  let zero = 0;
  if (number === zero) {
    return fact;
  }
  else {
    for (let i = fact; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

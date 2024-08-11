const add = (num1, num2) => {
  return +num1 + +num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const sum = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  else {
    return nums.reduce((num1, num_n) => +num1 + +num_n);
  }

};

const multiply = (nums) => {
  return nums.reduce((num1, num_n) => num1 * num_n, 1);
};

const power = (num1, num2) => {
  return num1 ** num2;
};

const factorial = (number) => {
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

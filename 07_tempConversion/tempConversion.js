const convertToCelsius = function (farenheit) {
  let celsius = ((farenheit - 32) * 5 / 9).toFixed(1);
  let isDecimal = (farenheit - Math.floor(farenheit)) !== 0;
  let wholeCelsius = Math.trunc(+celsius);

  if (isDecimal) {
    return wholeCelsius;
  }
  return +celsius;
};

const convertToFahrenheit = function (celsius) {
  let farenheit = (celsius * (9 / 5) + 32).toFixed(1);
  return +farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

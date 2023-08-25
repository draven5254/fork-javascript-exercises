const convertToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = Math.round(celsius * 9) / 5 + 32;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

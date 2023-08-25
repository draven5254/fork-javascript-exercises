const palindromes = function (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the clean string with its reverse
  return cleanString.split("").reverse().join("") === cleanString;
  //   return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

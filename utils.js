/**
 * Calculate the average of an array of numbers
 */
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

/**
 * Check if a string is a palindrome
 */
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/**
 * Remove duplicates from an array
 */
function removeDuplicates(arr) {
  const seen = {};
  return arr.filter(item => {
    if (seen[item]) {
      return true;
    }
    seen[item] = true;
    return false;
  });
}

/**
 * Convert celsius to fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 - 32;
}

module.exports = { calculateAverage, isPalindrome, removeDuplicates, celsiusToFahrenheit };

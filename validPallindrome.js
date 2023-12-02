/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }

  const strippedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  return strippedString === strippedString.split('').reverse().join('');
};

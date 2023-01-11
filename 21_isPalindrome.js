/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const regexPattern = /[^A-Za-z0-9]/g;
  const string = s.replace(regexPattern, '').toLowerCase();

  const stringChars = string.split('');

  for (let i = 0, j = string.length - 1; i < j; i++, j--) {
    stringChars[i] = string[j];
    stringChars[j] = string[i];
  }

  return string === stringChars.join('');
};

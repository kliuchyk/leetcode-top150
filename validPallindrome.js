/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }

  const strippedStr = s.replace(/[^a-z0-9]/gi, '');
  const lowered = strippedStr.toLowerCase();

  for (let i = 0, j = lowered.length - 1; i < j; i++, j--) {
    if (lowered[i] !== lowered[j]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));

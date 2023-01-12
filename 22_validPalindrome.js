/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - 1 - i;

    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
  }

  return true;
};

const cut = (s, i) => {
  return s.substr(0, i) + s.substr(i + 1);
};

function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

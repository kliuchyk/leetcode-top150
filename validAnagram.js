const newsletter = 'Baydateaas';
const tagline = 'aawertewsf';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 1. Sort and compare two strings +
// 2. Check for item and remove it
// 3. Compare number of char occurrences

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sChars = {};
  const tChars = {};

  for (let i = 0; i < s.length; i++) {
    sChars[s[i]] = sChars[s[i]] + 1 || 1;
    tChars[t[i]] = tChars[t[i]] + 1 || 1;
  }

  for (let char in sChars) {
    if (sChars[char] !== tChars[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram(newsletter, tagline));

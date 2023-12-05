/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (hash[char]) {
      hash[char] += 1;
      continue;
    }

    hash[char] = 1;
  }

  const uniqueOnly = Object.keys(hash).filter((char) => {
    return hash[char] === 1;
  });

  return s.indexOf(uniqueOnly[0]);
};

console.log(firstUniqChar('leetcode'));

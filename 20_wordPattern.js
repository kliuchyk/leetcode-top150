/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  if (pattern === s) {
    return false;
  }

  if (pattern.length === 1 && s.length === 1 && pattern === s) {
    return true;
  }

  const map1 = {};
  const map2 = {};

  const stringArr = s.split(' ');

  if (pattern.length !== stringArr.length) {
    return false;
  }

  for (let i = 0; i < stringArr.length; i++) {
    const char = pattern[i];
    const word = stringArr[i];

    if (!map1[char] && !map2[word]) {
      map1[char] = word;
      map2[word] = char;
      continue;
    }

    if (map1[char]) {
      if (map1[char] !== word || map2[word] !== char) {
        return false;
      }
    }

    if (!map1[char]) {
      if (map2[word] !== char) {
        return false;
      }

      map1[char] = word;
      map2[word] = char;
    }
  }

  return true;
};

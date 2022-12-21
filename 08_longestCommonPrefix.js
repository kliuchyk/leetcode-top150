/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  const firstStr = strs[0];
  const firstStrLength = strs[0].length;
  let prefix = '';

  for (let i = 0; i < firstStrLength; i++) {
    const matches = [];

    for (let j = 1; j < strs.length; j++) {
      firstStr[i] === strs[j][i] ? matches.push(true) : matches.push(false);
    }

    const isMatch = matches.every((char) => char);

    if (isMatch) {
      prefix += firstStr[i];
    } else {
      break;
    }
  }

  return prefix;
};

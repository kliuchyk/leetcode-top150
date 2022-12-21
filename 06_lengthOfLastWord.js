/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const stringsArr = s.trim().split(' ');
  return stringsArr[stringsArr.length - 1].trim().length;
}

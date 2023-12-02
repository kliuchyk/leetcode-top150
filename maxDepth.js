/**
 * @param {string} s
 * @return {number}
 */

const maxDepth = function (s) {
  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    if (s[0] !== '(' && s[0] !== ')') {
      return 0;
    }
  }

  let maxCount = 0;
  let currentDepth = 0;

  for (let string of s.split('')) {
    const isOpenParenthesis = string === '(';
    const isClosingParenthesis = string === ')';

    if (!isOpenParenthesis && !isClosingParenthesis) {
      continue;
    }

    if (isOpenParenthesis) {
      // stack.push();
      currentDepth += 1;
      continue;
    }

    if (isClosingParenthesis) {
      if (currentDepth === 0) {
        return 0;
      }

      if (maxCount < currentDepth) {
        maxCount = currentDepth;
      }

      currentDepth -= 1;
    }
  }

  return maxCount;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));

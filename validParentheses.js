/**
 * @param {string} s
 * @return {boolean}
 */

// '()';
// '()[]{}';
// '(]';

// stack = [)]

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = function (s, stack = []) {
  if (s.length === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const isOpenParenthesis = s[i] === '(';
    const isOpenCurlyBrace = s[i] === '{';
    const isOpenSquareBracket = s[i] === '[';

    if (isOpenParenthesis) {
      stack.push(')');
    }
    if (isOpenCurlyBrace) {
      stack.push('}');
    }
    if (isOpenSquareBracket) {
      stack.push(']');
    }

    const isOpen = isOpenParenthesis || isOpenCurlyBrace || isOpenSquareBracket;
    const isEmpty = stack.length === 0;

    if (isEmpty && !isOpen) {
      return false;
    }

    if (!isOpen) {
      const lastItem = stack.pop();
      if (lastItem !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// console.log(isValid('(){[()]}{}'));
console.log(isValid('()'));
// console.log(isValid('()'));
// console.log(isValid('(]'));

// [}, ],]

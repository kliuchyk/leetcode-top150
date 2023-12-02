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
    const isOpenParentheses = s[i] === '(';
    if (isOpenParentheses) {
      stack.push(')');
    }

    const isOpenCurlyBrace = s[i] === '{';
    if (isOpenCurlyBrace) {
      stack.push('}');
    }

    const isOpenSquareBracket = s[i] === '[';
    if (isOpenSquareBracket) {
      stack.push(']');
    }

    const isOpen = isOpenCurlyBrace || isOpenParentheses || isOpenSquareBracket;
    const isEmpty = stack.length === 0;
    const isNotValid = s[i] !== stack[stack.length - 1];

    if (!isOpen) {
      if (isEmpty || isNotValid) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid('(){[()]}{}'));
// console.log(isValid('()'));
// console.log(isValid('(]'));

// [}, ],]

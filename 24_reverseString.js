/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const left = s[i];
    const right = s[j];

    s[i] = right;
    s[j] = left;
  }

  console.log(s);
};

console.log(reverseString(['m', 'i', 'k', 'e']));

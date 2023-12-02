/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    const left = s[i];
    const right = s[j];

    s[i] = right;
    s[j] = left;
  }

  console.log(s);
};

reverseString(['h', 'e', 'l', 'l', 'o']);

// Input: s = ['h', 'e', 'l', 'l', 'o'];
// Output: ['o', 'l', 'l', 'e', 'h'];

// let i = 0,
//   j = s.length - 1;

// while (i < j) {
//   [s[i], s[j]] = [s[j], s[i]];
//   i++;
//   j--;
// }

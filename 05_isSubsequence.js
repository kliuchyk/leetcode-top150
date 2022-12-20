/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isSubsequence(s, t) {
  const t_length = t.length;
  let subsequence = 0;

  for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }

  return subsequence === s.length;
}

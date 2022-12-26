/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  // Each string has to have its own dictionary
  const sDict = new Map();
  const tDict = new Map();

  for (const i = 0; i < s.length; i++) {
    const sc = s[i];
    const tc = t[i];
    // If both dictionaries do not have their respective characters mapped yet,
    // then we should set them
    if (!sDict.has(sc) && !tDict.has(tc)) {
      sDict.set(sc, tc);
      tDict.set(tc, sc);
    }

    // If either char does not match then it is not isomorphic
    if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
      return false;
    }
  }
};

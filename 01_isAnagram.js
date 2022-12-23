/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// solution #1
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  if (s.length === 1 && t.length === 1) {
    if (s === t) {
      return true;
    }
  }

  const tArr = t.split('');

  for (let i = 0; i < s.length; i++) {
    const index = tArr.indexOf(s[i]);

    if (index > -1) {
      tArr.splice(index, 1);
    }
  }

  return tArr.length === 0;
}

// solution #2
function isAnagram(s, t) {
  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    // 1 sMap
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);
    }

    // 2 tMap
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  for (let [k, v] of sMap) {
    if (v !== tMap.get(k)) {
      return false;
    }
  }

  return true;
}

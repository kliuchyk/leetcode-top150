/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function reorderString(s) {
  return s
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

function groupAnagrams(words, map = new Map()) {
  for (const original of words) {
    const reordered = reorderString(original);

    const values = map.get(reordered) || [];
    values.push(original);
    map.set(reordered, values);
  }

  return [...map.values()];
}

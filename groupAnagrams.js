/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function sortStr(str) {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    return [strs];
  }

  const groupedStr = strs.reduce((acc, curr) => {
    const sortedStr = sortStr(curr);
    acc[sortedStr] = acc[sortedStr] ? [...acc[sortedStr], curr] : [curr];

    return acc;
  }, {});

  return Object.values(groupedStr);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

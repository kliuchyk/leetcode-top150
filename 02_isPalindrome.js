/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 2, 3, 1, 1, 3];

const numIdenticalPairs = function (nums) {
  const map = {};

  for (let i = 0, j = 1; i < nums.length - 1; i++, j++) {
    if (nums[i] === nums[j]) {
      map[i] = map[i] + 1 || 0;
    }
  }

  return Object.keys(map).length;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = true;
      continue;
    }
    return true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(nums[i])) {
      return [i, map.get(nums[i])];
    }

    map.set(diff, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([-3, 4, 3, 90], 0));

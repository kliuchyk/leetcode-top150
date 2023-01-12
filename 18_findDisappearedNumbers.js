/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  const arrWithNums = Array.from({ length: nums.length }, (_, i) => i + 1);
  const uniqueValues = new Set(arrWithNums);

  for (let i = 0; i < nums.length; i++) {
    if (uniqueValues.has(nums[i])) {
      uniqueValues.delete(nums[i]);
    }
  }

  return [...uniqueValues];
};

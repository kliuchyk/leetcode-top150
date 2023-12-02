/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function (nums) {
  let l = 1;
  let r = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[r] === nums[r - 1]) {
      r++;
      continue;
    }

    nums[l] = nums[r];
    l++;
    r++;
  }

  console.log(nums);
  return l;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

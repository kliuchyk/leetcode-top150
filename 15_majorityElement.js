/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums) {
  const hash = {};
  let majorNum;
  let biggestCount = 0;

  for (let i = 0; i < nums.length; i++) {
    // increment by 1
    if (hash[nums[i]]) {
      hash[nums[i]] += 1;
    }

    // add first time
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    }

    if (!majorNum) {
      majorNum = nums[i];
      biggestCount = 1;
      continue;
    }

    if (hash[nums[i]] > biggestCount) {
      majorNum = nums[i];
      biggestCount = hash[nums[i]];
    }
  }

  console.log(hash);
  return majorNum;
}

// console.log(majorityElement([3, 2, 3, 2, 2]));
console.log(majorityElement([8, 8, 7, 7, 7]));

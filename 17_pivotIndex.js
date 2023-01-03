/**
 * @param {number[]} nums
 * @return {number}
 */

function pivotIndex(nums) {
  const totalCount = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  let rightSum = null;

  for (let i = 0; i < nums.length; i++) {
    leftSum = i === 0 ? leftSum : leftSum + nums[i - 1];
    rightSum = totalCount - nums[i] - leftSum;

    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));

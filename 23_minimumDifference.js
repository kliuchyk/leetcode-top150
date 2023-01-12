/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  if (nums.length === 1) {
    return 0;
  }

  const sortedNums = nums.sort((a, b) => a - b);

  let min = Infinity;
  let right = k - 1;

  for (let i = 0; i < nums.length; i++) {
    const sliceDiff = sortedNums[right] - sortedNums[i];
    if (min > sliceDiff) {
      min = sliceDiff;
    }

    right++;
  }

  return min;
};

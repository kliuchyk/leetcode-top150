/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx];
    console.log('uniqNum: ', uniqNum);
  }

  return uniqNum; // Return the unique number...
};

console.log(singleNumber([2, 2, 1]));

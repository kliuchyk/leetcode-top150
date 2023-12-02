/**
 * @param {number[]} nums
 * @return {number[]}
 */

// [4, 5, 1, 8, 2]
const productExceptSelf = function (nums) {
  const length = nums.length;

  const outputNums = [];

  outputNums[0] = 1;

  for (let i = 1; i < length; i++) {
    outputNums[i] = nums[i - 1] * outputNums[i - 1];
  }

  let r = 1;
  for (let i = length - 1; i >= 0; i--) {
    outputNums[i] = outputNums[i] * r;
    r = r * nums[i];
  }

  return outputNums;
};

// const productExceptSelf = function (nums) {
//   let output = [];
//   let leftMult = 1;
//   let rightMult = 1;

//   for (let i = nums.length - 1; i >= 0; i--) {
//     output[i] = rightMult;
//     rightMult *= nums[i];
//   }

//   for (let j = 0; j < nums.length; j++) {
//     output[j] *= leftMult;
//     leftMult *= nums[j];
//   }
//   return output;
// };

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
console.log(productExceptSelf([1, 2, 3, 4]));

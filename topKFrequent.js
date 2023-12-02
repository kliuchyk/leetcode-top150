/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] + 1 || 1;
  }

  const sortedNums = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  const kItems = sortedNums.slice(0, k);
  return kItems.map((arr) => arr[0]);
};

console.log(topKFrequent([2, 2, 3, 5, 5, 5, 5, 1, 1, 1], 2));
// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));

// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));// console.log(topKFrequent([1], 1));
// console.log(topKFrequent([1, 2], 2));// console.log(topKFrequent([1], 1))
// console.log(topKFrequent([1, 2], 2));

// const topKFrequent = function (nums, k) {
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     hash[num] = hash[num] + 1 || 1;
//   }

//   const sorted = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

//   return sorted.slice(0, k);
// };

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersect = function (nums1, nums2) {
  let shortArr = [];
  let longArr = [];

  if (nums1.length > nums2.length) {
    shortArr = nums2;
    longArr = nums1;
  } else {
    shortArr = nums1;
    longArr = nums2;
  }

  let result = [];

  for (let i = 0; i < shortArr.length; i++) {
    const index = longArr.indexOf(shortArr[i]);

    if (index !== -1) {
      result.push(shortArr[i]);
      longArr.splice(index, 1);
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));

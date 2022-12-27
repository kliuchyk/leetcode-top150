/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function nextGreaterElement(nums1, nums2) {
  const hash = {};

  for (let i = 0; i < nums2.length; i++) {
    hash[nums2[i]] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    const nextIndex = hash[nums1[i]] + 1;

    // if last element in the row
    if (nextIndex === nums2.length) {
      nums1.splice(i, 1, -1);
      continue;
    }

    const valueToSubstitute = nums1[i] < nums2[nextIndex] ? nums2[nextIndex] : -1;
    nums1.splice(i, 1, valueToSubstitute);
  }

  return nums1;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

// [1, 2, 3, 4, 5, 6, 7],  k = 3

function rotate(nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  console.log('k: ', k);

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->

  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

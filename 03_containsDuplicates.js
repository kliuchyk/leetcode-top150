function containsDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(nums[i], nums[j]);
        return true;
      }
    }
  }
  return false;
}

function containsDuplicates(nums) {
  const sortedArr = nums.sort();
  console.log('sortedArr: ', sortedArr);

  for (let i = 0, j = 1; i < nums.length; i++, j++) {
    if (nums[i] === nums[j]) {
      console.log(nums[i], nums[j]);
      return true;
    }
  }
  return false;
}

function containsDuplicates(nums) {
  const uniques = {};

  for (let i = 0; i < nums.length; i++) {
    if (uniques[nums[i]]) {
      return true;
    }
    uniques[nums[i]] = nums[i];
  }

  return false;
}

console.log(containsDuplicates([1, 2, 5, 3, 4, 5]));

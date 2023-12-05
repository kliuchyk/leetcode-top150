function longestConsecutive(nums) {
  if (!nums.length) return 0;

  if (nums.length === 1) {
    return 1;
  }

  const sorted = nums.sort((a, b) => a - b);

  let longestLength = 1;
  let currSeq = 1;

  for (let i = 1; i < sorted.length; i++) {
    const isPrevDuplicate = nums[i - 1] === nums[i];
    if (isPrevDuplicate) continue;

    const currNum = sorted[i];
    const prev = sorted[i - 1];

    if (currNum - prev === 1) {
      currSeq = currSeq === 0 ? 2 : currSeq + 1;

      if (currSeq > longestLength) {
        longestLength = currSeq;
      }
    } else {
      currSeq = 0;
    }
  }

  return longestLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

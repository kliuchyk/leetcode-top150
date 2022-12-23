/**
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows) {
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const nums = Array(i + 1).fill(1);

    // start from third row
    if (nums.length > 2) {
      // don't edit first and last item in the row
      for (let j = 1; j < nums.length - 1; j++) {
        const sum = rows[i - 1][j - 1] + rows[i - 1][j];
        nums[j] = sum;
      }
    }

    rows.push(nums);
  }
  return rows;
}

console.log(generate(5));

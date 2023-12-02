/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    const canSlide = prices[right] <= prices[left];

    if (canSlide) {
      left = right;
      console.log('left: ', left);
      console.log('right: ', right);
    }

    const window = prices[right] - prices[left];
    max = Math.max(max, window);
    right++;
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

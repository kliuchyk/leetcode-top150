/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// 0 - means empty
// 1 - means not empty,

function canPlaceFlowers(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (n === 0) {
      return true;
    }

    if (flowerbed.length === 1 && flowerbed[0] === 0) {
      return true;
    }

    // first item in row
    if (i === 0) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed.splice(i, 1, 1);
        n--;
      }
    }

    // last item in row
    if (i === flowerbed.length - 1) {
      if (flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
        flowerbed.splice(i, 1, 1);
        n--;
      }
    }

    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed.splice(i, 1, 1);
      n--;
    }
  }
}

const flowerbed = [1, 0, 0, 0, 1],
  n = 1;
console.log(canPlaceFlowers(flowerbed, n));

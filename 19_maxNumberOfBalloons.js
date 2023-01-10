/**
 * @param {string} text
 * @return {number}
 */

const maxNumberOfBalloons = function (text) {
  let map = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (let char of text) {
    map[char]++;
  }

  return Math.floor(Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n));
};

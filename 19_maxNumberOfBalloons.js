/**
 * @param {string} text
 * @return {number}
 */

const maxNumberOfBalloons = function (text) {
  const balloonChars = new Map();
  balloonChars.set('b', 0);
  balloonChars.set('a', 0);
  balloonChars.set('l', 0);
  balloonChars.set('o', 0);
  balloonChars.set('n', 0);

  let minCount = 0;
  let char = null;

  for (let i = 0; i < text.length; i++) {
    if (balloonChars.has(text[i])) {
      const value = balloonChars.get(text[i]);
      const newValue = value + 1;
      balloonChars.set(text[i], newValue);

      if (!char) {
        char = text[i];
        minCount = 1;
        continue;
      }

      if (text[i] !== char && minCount < newValue) {
        char = text[i];
        minCount = newValue;
        continue;
      }

      if (char === text[i]) {
        minCount = newValue;
        continue;
      }
    }
  }

  const values = [...balloonChars.values()];

  // any matches
  if (values.some((value) => value === 0)) {
    return 0;
  }

  // find if any char is less than expected
  if (char === 'b' || char === 'a' || char === 'n') {
    for (let [key, value] of balloonChars) {
      if (key === 'b' || key === 'a' || key === 'n') {
        if (value < minCount) {
          return 0;
        }
      }

      if (key === 'o' || key === 'l') {
        if (value < minCount * 2) {
          return 0;
        }
      }
    }
  }

  if (char === 'o' || char === 'l') {
    for (let [key, value] of balloonChars) {
      if (key === 'b' || key === 'a' || key === 'n') {
        if (value * 2 < minCount) {
          return 0;
        }
      }

      if (key === 'o' || key === 'l') {
        if (value < 2) {
          return 0;
        }
      }
    }

    return minCount / 2;
  }

  return minCount;
};

console.log(maxNumberOfBalloons('balllllllllllloooooooooon'));

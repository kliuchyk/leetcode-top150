/**
 * @param {number[]} arr
 * @return {number[]}
 */

const arr = [17, 18, 5, 4, 6, 1];

function replaceElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 0. check if this is the last element
    if (i === arr.length - 1) {
      arr.splice(i, 1, -1);
      return arr;
    }

    // 1. slice of arr
    const slice = arr.slice(i + 1);
    let biggest = slice[0];

    for (let j = 1; j < slice.length; j++) {
      // 2. find greatest
      if (slice[j] > biggest) {
        biggest = slice[j];
      }
    }

    // 3. replace curr arr
    arr.splice(i, 1, biggest);
  }

  return arr;
}

const upperCase = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;
const repeat = (str) => `${str} `.repeat(3);

const pipe =
  (...fns) =>
  (x) => {
    return fns.reduce((acc, fn) => {
      console.log('acc: ', acc);
      console.log('fn: ', fn);
      console.log('====================');
      return fn(acc), x;
    });
  };

const withСompose2 = pipe(upperCase, exclaim, repeat);

console.log(withСompose2('I love coding')); // I LOVE CODING! I LOVE

// Write an `element` function that takes an array and a generator and returns a generator that will produce elements from the array

const fromTo = require('./fromTo');

const element = (arr, generator = fromTo(0, arr.length)) => {
  return () => {
    const index = generator();
    if (index !== undefined) {
      return arr[index];
    }
    return undefined;
  };
};

module.exports = element;

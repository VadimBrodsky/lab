// Write a `limit` function that allows a binary function to be called a limited number of times

const limit = (func, num) => {
  return (argA, argB) => {
    if (num > 0) {
      num -= 1;
      return func(argA, argB);
    }
    return undefined;
  };
};

module.exports = limit;

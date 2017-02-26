// Write `reverse`, a function that reverses the arguments of a binary function

// binary reverse
const reverse = (binaryFunction) => {
  return (argA, argB) => {
    return binaryFunction(argB, argA);
  };
};

// reverse that takes any number of arguments
reverse.any = (func) => {
  return (...args) => {
    return func(...args.reverse());
  };
};

module.exports = reverse;

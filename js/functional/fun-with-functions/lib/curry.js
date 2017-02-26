// Write a function `curry`  should take a binary function and an argument, and return a function that can take a second argument.

// binary curry function
const curry = (binaryFunction, argA) => {
  return (argB) => {
    return binaryFunction(argA, argB);
  };
};

// ES5 based curry for any number of arguments
curry.old = (func) => {
  const slice = Array.prototype.slice;
  const args = slice.call(arguments, 1);

  return () => {
    return func.apply(
        null,
        args.concat(slice.call(arguments, 0))
    );
  };
};

// ES2015 curry function for any number of arguments
curry.any = (func, ...first) => {
  return (...second) => {
    return func(...first, ...second);
  };
};

module.exports = curry;

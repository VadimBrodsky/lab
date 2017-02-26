// Write a function `curry`  should take a binary function and an argument, and return a function that can take a second argument.

const binary = (binaryFunction, argA) => {
  return (argB) => {
    return binaryFunction(argA, argB);
  };
};

// ES5 based curry
const old = (func) => {
  const slice = Array.prototype.slice;
  const args = slice.call(arguments, 1);

  return () => {
    return func.apply(
        null,
        args.concat(slice.call(arguments, 0))
    );
  };
};

// ES2015 based curry
const modern = (func, ...first) => {
  return (...second) => {
    return func(...first, ...second);
  };
};

module.exports = { binary, old, modern };

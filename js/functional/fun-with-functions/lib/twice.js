// Write a function `twice` that takes a binary function and returns a unary function that passes its argument to the binary function twice

const twice = (binaryFunction) => {
  return (arg) => {
    return binaryFunction(arg, arg);
  };
};

module.exports = twice;

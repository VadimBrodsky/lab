// Write a function `liftf` that takes a binary function, and makes it callable with two invocations.

const liftf = (binaryFunction) => {
  return (first) => {
    return (second) => {
      return binaryFunction(first, second);
    };
  };
};

module.exports = liftf;

// Write a function `addf` that adds from two invocations.

const addf = (argA) => {
  return (argB) => argA + argB;
};

module.exports = addf;

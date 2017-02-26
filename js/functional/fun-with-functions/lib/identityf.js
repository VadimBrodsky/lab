// Write a function `identityf` that takes an argument and returns a function that returns that argument.

const identityf = (arg) => {
  return () => arg;
};

module.exports = identityf;

// Write a function `composeu` that takes two unary functions and returns a unary function that calls them both

const composeu = (funcA, funcB) => {
  return (arg) => {
    return funcB(funcA(arg));
  };
};

module.exports = composeu;

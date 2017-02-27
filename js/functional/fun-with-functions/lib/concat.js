// Write a `concat` function that takes two generators and produces a generator that combines the sequances

const element = require('./element');

const concat = (genA, genB) => {
  let gen = genA;
  return () => {
    const next = gen();
    if (next !== undefined) {
      return next;
    }
    gen = genB;
    return gen();
  };
};

// any number of arguments, using recursion
concat.any = (...gens) => {
  const next = element(gens);
  let gen = next();

  return function recur () {
    const value = gen();
    if (value === undefined) {
      gen = next();
      if (gen !== undefined) {
        return recur();
      }
    }
    return value;
  };
};

module.exports = concat;

// Write a `from` function that produces a generator that will produce a series of values

const from = initial => {
  return () => {
    const next = initial;
    initial += 1;

    return next;
  };
};

module.exports = from;

// Write a `to` function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit

const to = (generator, max) => {
  return () => {
    const next = generator();
    if (next < max) {
      return next;
    }
    return undefined;
  };
};

module.exports = to;

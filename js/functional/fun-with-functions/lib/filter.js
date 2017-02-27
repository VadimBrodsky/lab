// Write a `filter` function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate

const filter = (generator, predicate) => {
  return () => {
    let next = generator();
    while (next !== undefined) {
      if (predicate(next)) {
        return next;
      }
      next = generator();
    }
    return undefined;
  };
};

// use recursion instead of looping
filter.recursion = (generator, predicate) => {
  return function recur () {
    const next = generator();
    if (next === undefined || predicate(next)) {
      return next;
    }
    return recur();
  };
};

module.exports = filter;

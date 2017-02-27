// Write a `collect` function that takes a generator and an array and produces a function that will collect the results in the array

const collect = (generator, arr) => {
  return () => {
    const next = generator();
    if (next !== undefined) {
      arr.push(next);
    }
    return next;
  };
};

module.exports = collect;

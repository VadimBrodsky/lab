// Write a `fromTo` function that produces a generator that will produce values in a range.

const from = require('./from');
const to = require('./to');

const fromTo = (min, max) => {
  return to(from(min), max);
};

module.exports = fromTo;

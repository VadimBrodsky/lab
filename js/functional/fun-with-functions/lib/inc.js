// Without writing any new functions, show 3 ways to create the `inc` function
// var inc = ___;
// inc(5)  // 6
// inc(5)  // 6

const add = require('./add');
const addf = require('./addf');
const liftf = require('./liftf');
const curry = require('./curry').binary;

const inc = {
  way1: curry(add, 1),
  way2: liftf(add)(1),
  way3: addf(1)
};

module.exports = inc;

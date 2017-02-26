/*
    Without writing any new functions, show 3 ways to create the `inc` function
    var inc = ___;
    inc(5)  // 6
    inc(5)  // 6
*/

var add = require('./add'),
    addf = require('./addf'),
    liftf = require('./liftf'),
    curry = require('./curry'),
    inc;

// Way #1
inc = curry(add, 1);

// Way #2
inc = liftf(add)(1);

// Way #3
inc = addf(1);

module.exports = inc;

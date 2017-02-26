/* eslint-env jasmine */

const curry = require('../lib/curry').modern;
const add = require('../lib/add');
const mul = require('../lib/mul');

describe('curry', () => {
  it('should take a binary function and an argument, and return a function that can take a second argument', () => {
    const add3 = curry(add, 3);

    expect(add3(4)).toEqual(7);
    expect(curry(mul, 5)(6)).toEqual(30);
  });
});

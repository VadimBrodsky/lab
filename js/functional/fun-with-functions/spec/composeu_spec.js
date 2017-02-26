/* eslint-env jasmine */

const composeu = require('../lib/composeu');
const twice = require('../lib/twice');
const add = require('../lib/add');
const mul = require('../lib/mul');

describe('composeu function', () => {
  it('takes two unary functions and returns a unary function that calls them both', () => {
    const doubl = twice(add);
    const square = twice(mul);

    expect(composeu(doubl, square)(5)).toEqual(100);
  });
});

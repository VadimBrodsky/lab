/* eslint-env jasmine */

const mul = require('../lib/mul');

describe('mul function', () => {
  it('takes 2 numbers and returns their product', () => {
    expect(mul(3, 4)).toEqual(12);
    expect(mul(3, 5)).toEqual(15);
  });
});

/* eslint-env jasmine */
const twice = require('../lib/twice');
const add = require('../lib/add');
const mul = require('../lib/mul');

describe('twice function', () => {
  it('takes a binary funciton and returns a unary function that passes its argument to the binary function twice', () => {
    expect(add(11, 11)).toEqual(22);

    const doubl = twice(add);
    expect(doubl(11)).toEqual(22);

    const square = twice(mul);
    expect(square(11)).toEqual(121);
  });
});

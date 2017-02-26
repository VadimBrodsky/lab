/* eslint-env jasmine */

const liftf = require('../lib/liftf');
const add = require('../lib/add');
const mul = require('../lib/mul');

describe('liftf', () => {
  it('should take a binary function and make it callable with two invocations', () => {
    const addf = liftf(add);

    expect(addf(3)(4)).toEqual(7);
    expect(liftf(mul)(5)(6)).toEqual(30);
  });
});

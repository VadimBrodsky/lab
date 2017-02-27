/* eslint-env jasmine */

const filter = require('../lib/filter').recursion;
const fromTo = require('../lib/fromTo');

describe('filter function', () => {
  it('takes a generator and a predicate, produces only values that are approved by the predicate', () => {
    const fil = filter(fromTo(0, 5), val => (val % 3) === 0);

    expect(fil()).toEqual(0);
    expect(fil()).toEqual(3);
    expect(fil()).toBeUndefined();
  });
});

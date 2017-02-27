/* eslint-env jasmine */

const collect = require('../lib/collect');
const fromTo = require('../lib/fromTo');

describe('collect function', () => {
  it('takes a generator and an array, produces a function that collects the results in the array', () => {
    const array = [];
    const col = collect(fromTo(0, 2), array);

    expect(col()).toEqual(0);
    expect(col()).toEqual(1);
    expect(col()).toBeUndefined();
    expect(array).toEqual([0, 1]);
  });
});

/* eslint-env jasmine */

const fromTo = require('../lib/fromTo');

describe('fromTo function', () => {
  it('takes 2 values as range and produces a generator', () => {
    const index = fromTo(0, 3);

    expect(index()).toEqual(0);
    expect(index()).toEqual(1);
    expect(index()).toEqual(2);
    expect(index()).toBeUndefined();
  });
});

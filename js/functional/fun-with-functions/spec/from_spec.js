/* eslint-env jasmine */

const from = require('../lib/from');

describe('from function', () => {
  it('produces a series of values', () => {
    const index = from(0);

    expect(index()).toEqual(0);
    expect(index()).toEqual(1);
    expect(index()).toEqual(2);
  });
});

/* eslint-env jasmine */

const to = require('../lib/to');
const from = require('../lib/from');

describe('to function', () => {
  it('takes a generator and a value, values up to that limit', () => {
    const index = to(from(1), 3);

    expect(index()).toEqual(1);
    expect(index()).toEqual(2);
    expect(index()).toBeUndefined();
  });
});

/* eslint-env jasmine */

const addf = require('../lib/addf');

describe('addf', () => {
  it('should add from two invocations', () => {
    expect(addf(3)(4)).toEqual(7);
    expect(addf(50)(50)).toEqual(100);
  });
});

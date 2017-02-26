/* eslint-env jasmine */

const sub = require('../lib/sub');

describe('sub function', () => {
  it('takes 2 numbers and returns their difference', () => {
    expect(sub(3, 4)).toEqual(-1);
    expect(sub(8, 2)).toEqual(6);
  });
});

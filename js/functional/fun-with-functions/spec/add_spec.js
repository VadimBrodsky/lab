/* eslint-env jasmine */

const add = require('../lib/add');

describe('add function', () => {
  it('takes 2 numbers and returns their sum', () => {
    expect(add(3, 4)).toEqual(7);
    expect(add(2, 2)).toEqual(4);
  });
});

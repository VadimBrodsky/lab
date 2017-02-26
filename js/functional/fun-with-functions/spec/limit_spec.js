/* eslint-env jasmine */

const limit = require('../lib/limit');
const add = require('../lib/add');

describe('limit function', () => {
  it('takes a binary fuction and a number returning a function that can be called a limited number of times', () => {
    const addLimited = limit(add, 1);

    expect(addLimited(3, 4)).toEqual(7);
    expect(addLimited(3, 5)).toBeUndefined();
  });
});

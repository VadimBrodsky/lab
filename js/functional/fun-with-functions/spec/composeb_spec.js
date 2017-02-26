/* eslint-env jasmine */

const composeb = require('../lib/composeb');
const add = require('../lib/add');
const mul = require('../lib/mul');

describe('composeb function', () => {
  it('takes two binary functions and returns a function that calls them both', () => {
    expect(composeb(add, mul)(2, 3, 7)).toEqual(35);
  });
});

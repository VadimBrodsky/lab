/* eslint-env jasmine */

const element = require('../lib/element');
const fromTo = require('../lib/fromTo');

describe('element function', () => {
  it('takes an array and a generator and returns a genertor thatproduces elements from the array', () => {
    const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));

    expect(ele()).toEqual('b');
    expect(ele()).toEqual('c');
    expect(ele()).toBeUndefined();
  });

  it('if a generator is not provided, each element of the array will be produces', () => {
    const ele = element(['a', 'b', 'c', 'd']);

    expect(ele()).toEqual('a');
    expect(ele()).toEqual('b');
    expect(ele()).toEqual('c');
    expect(ele()).toEqual('d');
    expect(ele()).toBeUndefined();
  });
});

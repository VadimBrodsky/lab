/* eslint-env jasmine */

const identity = require('../lib/identity');

describe('identity function', () => {
  it('takes an argument and return that argument', () => {
    expect(identity(42)).toEqual(42);
    expect(identity('hello world')).toEqual('hello world');
    expect(identity({ a: 123 })).toEqual({ a: 123 });
  });
});

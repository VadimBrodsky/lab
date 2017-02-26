/* eslint-env jasmine */

const identityf = require('../lib/identityf');

describe('identityf', () => {
  it('should take an argument and return a function that returns that argument', () => {
    const three = identityf(3);
    const hello = identityf('hello');

    expect(three()).toEqual(3);
    expect(hello()).toEqual('hello');
  });
});

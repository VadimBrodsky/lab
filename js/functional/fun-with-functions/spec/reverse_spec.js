/* eslint-env jasmine */

const reverse = require('../lib/reverse');
const sub = require('../lib/sub');

describe('reverse function', () => {
  it('reverses the arguments of a binary function', () => {
    const reversedSub = reverse(sub);

    expect(reversedSub(3, 2)).toEqual(-1);
  });
});


/* eslint-env jasmine */

const concat = require('../lib/concat');
const fromTo = require('../lib/fromTo');

describe('concat function', () => {
  it('takes two generators and produces a generator that combines that sequances', () => {
    const con = concat(fromTo(0, 3), fromTo(0, 2));

    expect(con()).toEqual(0);
    expect(con()).toEqual(1);
    expect(con()).toEqual(2);
    expect(con()).toEqual(0);
    expect(con()).toEqual(1);
    expect(con()).toBeUndefined();
  });
});

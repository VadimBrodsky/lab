describe("add", function () {
  var add = require('../lib/add');

  it("should return the sum of two numbers", function () {
    expect(add(3,4)).toEqual(7);
    expect(add(2,2)).toEqual(4);
  });
});


describe("sub", function () {
  var sub = require('../lib/sub');

  it("should return the difference of two numbers", function () {
    expect(sub(3,4)).toEqual(-1);
    expect(sub(8,2)).toEqual(6);
  });
});


describe("mul", function () {
  var mul = require('../lib/mul');

  it("should return the product of two numbers", function () {
    expect(mul(3,4)).toEqual(12);
    expect(mul(3,5)).toEqual(15);
  });
});

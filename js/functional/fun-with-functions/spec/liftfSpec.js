describe('liftf', function () {
  var liftf = require('../lib/liftf');
  var add = require('../lib/add');
  var mul = require('../lib/mul');

  it('should take a binary function and make it callable with two invocations', function() {
    var addf = liftf(add);
    expect( addf(3)(4) ).toEqual(7);
    expect( liftf(mul)(5)(6) ).toEqual(30);
  });
});

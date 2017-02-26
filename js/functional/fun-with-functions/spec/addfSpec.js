describe('addf', function () {
  var addf = require('../lib/addf');

  it('should add from two invocations', function() {
    expect( addf(3)(4) ).toEqual(7);
  });
});

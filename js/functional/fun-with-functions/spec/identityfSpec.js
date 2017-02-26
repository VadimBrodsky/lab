describe('identityf', function () {
  var identityf = require('../lib/identityf');

  it('should take an argument and return a function that returns that argument', function() {
    var three = identityf(3);
    expect( three() ).toEqual(3);
  });
});

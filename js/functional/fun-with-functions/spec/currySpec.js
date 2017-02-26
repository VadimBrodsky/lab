describe('curry', function () {
    var curry = require('../lib/curry');
    var add = require('../lib/add');
    var mul = require('../lib/mul');

    it('should take a binary function and an argument, and return a function that can take a second argument', function() {
        var add3 = curry(add, 3);
        expect( add3(4) ).toEqual(7);
        expect( curry(mul, 5)(6) ).toEqual(30);
    });
});

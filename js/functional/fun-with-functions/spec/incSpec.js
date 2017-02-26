describe('inc', function () {
    var inc = require('../lib/inc');

    it('should increment a number by 1', function() {
        expect( inc(5) ).toEqual(6);
        expect( inc(inc(5)) ).toEqual(7);
    });
});

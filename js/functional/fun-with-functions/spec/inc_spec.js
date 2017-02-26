/* eslint-env jasmine */

const inc = require('../lib/inc');

describe('inc function', () => {
  describe('way 1', () => {
    it('should increment a number by 1', () => {
      const way1 = inc.way1;

      expect(way1(5)).toEqual(6);
      expect(way1(way1(5))).toEqual(7);
    });
  });

  describe('way 2', () => {
    it('should increment a number by 1', () => {
      const way2 = inc.way2;

      expect(way2(8)).toEqual(9);
      expect(way2(way2(3))).toEqual(5);
    });
  });

  describe('way 3', () => {
    it('should increment a number by 1', () => {
      const way3 = inc.way3;

      expect(way3(9)).toEqual(10);
      expect(way3(way3(1))).toEqual(3);
    });
  });
});

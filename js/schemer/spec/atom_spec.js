/* eslint-env jasmine */

const Atom = require('../src/atom');

describe('An atom', () => {
  it('is a string of characters', () => {
    let atm = () => new Atom('atom');
    let turkey = () => new Atom('turkey');

    expect(atm).not.toThrow();
    expect(turkey).not.toThrow();
  });

  it('is a string of digits', () => {
    let numbers = () => new Atom(1492);

    expect(numbers).not.toThrow();
  });

  it('is a single character', () => {
    let character = () => new Atom('u');

    expect(character).not.toThrow();
  });

  it('is a symbol', () => {
    let symbol = () => new Atom('*abc$');

    expect(symbol).not.toThrow();
  });

  it('should not start with (', () => {
    let leftBracket = () => new Atom('(');

    expect(leftBracker).toThrow();
  });

  it('should not start with )', () => {
    let rightBracket = () => new Atom(')');

    expect(rightBracker).toThrow();
  });
});

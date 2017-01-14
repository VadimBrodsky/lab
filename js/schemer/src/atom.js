function Atom (input) {
  if (typeof input === 'string') {
    this.value = input;
  } else if (typeof input === 'number') {
    this.value = String(input);
  } else {
    throw 'Invalid input for Atom';
  }
}

module.exports = Atom;

const assert = require('assert');

const checkType = function (typeDef, actualType) {
  return (actualType) => {
    if (actualType.constructor === typeDef || actualType instanceof typeDef) {
      return actualType;
    } else {
      throw new TypeError(`Type mismatch. Expected ${typeDef.constructor} but found ${typeof actualType}`);
    }
  };
};

const Tuple = function (...types) {
  const _T = function (...values) {
    if (values.some((val) => val === undefined || val === null)) {
      throw new ReferenceError('Tuples may not have any null values');
    }

    if (values.length !== types.length) {
      throw new TypeError('Tuple arity does not match its prototype');
    }

    values.map((val, index) => {
      this[`_${index + 1}`] = checkType(types[index])(val);
    }, this);

    Object.freeze(this);
  };

  _T.prototype.values = function () {
    return Object.keys(this).map((k) => this[k], this);
  };
  return _T;
};

// Test checkType
assert.equal(checkType(String)('Hello').constructor, String);
assert.equal(checkType(Number)(3).constructor, Number);
assert.equal(checkType(Date)(new Date()).constructor, Date);
assert.equal(checkType(Object)({}).constructor, Object);
assert.throws(() => checkType(String)(42), TypeError);

// Test Tuple
const Status = Tuple(Boolean, String);
assert.equal(new Status(true, 'hello')._2, 'hello');
assert.throws(() => new Status(true, 123), TypeError);
assert.throws(() => new Status(123, 123), TypeError);
assert.throws(() => new Status(true, 'hello', 123), TypeError);
assert.throws(() => new Status(true, null), ReferenceError);

module.exports = {
  checkType,
  Tuple,
};

/*
 Write a function `curry`  should take a binary function and an argument, and return a function that can take a second argument.

 This version accepts any number of arguments, by using Array prototype methods on the arguments object
 */

function curry(func) {
    var slice = Array.prototype.slice,
        args = slice.call(arguments, 1);
    return function() {
        return func.apply(null, args.concat(slice.call(arguments, 0)));
    };
}

module.exports = curry;

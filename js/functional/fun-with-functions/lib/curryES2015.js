/*
 Write a function `curry`  should take a binary function and an argument, and return a function that can take a second argument.

 This version accepts any number of arguments, by using the ES2015 ellipsis operator.
 */

function curry(func, ...first) {
    return function(...second) {
        return func(...first, ...second);
    };
}

module.exports = curry;

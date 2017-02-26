/*
    Write a function `curry`  should take a binary function and an argument, and return a function that can take a second argument.
*/

function curry(binaryFunc, argumentA) {
    return function(argumentB) {
        return binaryFunc(argumentA, argumentB);
    };
}

module.exports = curry;

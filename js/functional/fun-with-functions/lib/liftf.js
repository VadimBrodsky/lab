/*
    Write a function `liftf` that takes a binary function, and makes it callable with two invocations.
*/

function liftf(binaryFunction) {
    return function(first) {
        return function(second) {
            return binaryFunction(first, second);
        };
    };
}

module.exports = liftf;

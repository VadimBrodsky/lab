/*
    Write a function `identityf` that takes an argument and returns a function that returns that argument.
*/


function identityf(number) {
    return function() {
        return number;
    };
}

module.exports = identityf;

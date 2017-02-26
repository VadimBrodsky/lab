/*
    Write a function `addf` that adds from two invocations.
*/

function addf(numberA) {
    return function(numberB) {
        return numberA + numberB;
    };
}

module.exports = addf;

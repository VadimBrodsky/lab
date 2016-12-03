// exported function
const greet1 = require('./greet1');
greet1();


// exported function property on the exports object
const greet2 = require('./greet2').greet;
greet2();


// exported constructed object
const greet3 = require('./greet3');
greet3.greet();
// if we mutate the imported object all references to the module will be mutated
greet3.greeting = 'Changed hello world';


// the pevious required modules is cached
const greet3b = require('./greet3');
greet3b.greet();


// require a constructor function
const Greet4 = require('./greet4');
const grtr = new Greet4();
grtr.greet();


// require a module that uses the revaling pattern
const greet5 = require('./greet5').greet;
greet5();
